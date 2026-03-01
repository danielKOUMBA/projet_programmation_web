// Tableau de bord : récupération des stats et de l'historique
(function () {
  const token = window.localStorage.getItem('token');
  const statusEl = document.getElementById('dashboard-status');
  const pointsEl = document.getElementById('points-accumules');
  const tauxEl = document.getElementById('taux-reussite');
  const categorieEl = document.getElementById('categorie-favorite');
  const historyBody = document.getElementById('history-body');
  const historyEmpty = document.getElementById('history-empty');
  const historyTableShell = document.getElementById('history-table-shell');
  const navUsername = document.getElementById('nav-username');
  const heroName = document.getElementById('hero-name');
  const logoutBtn = document.getElementById('logoutBtn');

  const setStatus = (message, type = 'info') => {
    if (!statusEl) return;
    statusEl.textContent = message || '';
    statusEl.className = 'status-message mt-3';
    if (type === 'error') {
      statusEl.classList.add('status-message--error');
    } else if (type === 'success') {
      statusEl.classList.add('status-message--success');
    }
  };

  const authHeaders = token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};

  const attachLogout = () => {
    if (!logoutBtn) return;
    logoutBtn.addEventListener('click', async () => {
      try {
        // On appelle l'API pour nettoyer le cookie côté serveur
        await fetch(`${window.API_BASE_URL}/auth/deconnexion`, {
          method: 'POST',
          credentials: 'include',
        });
      } catch {
        // Silencieux, le point important est de purger le client
      }
      window.localStorage.removeItem('token');
      window.location.href = 'index.html';
    });
  };

  const initUserName = () => {
    // Optionnel : essayer de récupérer le nom via /auth/check-auth si disponible
    fetch(`${window.API_BASE_URL}/auth/check-auth`, {
      method: 'GET',
      credentials: 'include',
      headers: authHeaders,
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data || !data.succes || !data.utilisateur) return;
        const name = data.utilisateur.nom;
        if (navUsername) navUsername.textContent = name;
        if (heroName) heroName.textContent = name;
      })
      .catch(() => {
        // silencieux
      });
  };

  const loadStats = async () => {
    try {
      const response = await fetch(`${window.API_BASE_URL}/quiz/stats`, {
        headers: {
          ...authHeaders,
        },
        credentials: 'include',
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.succes) {
        setStatus(data.message || "Impossible de charger les statistiques.", 'error');
        return;
      }

      const stats = data.stats || {};
      if (pointsEl) pointsEl.textContent = stats.pointsAccumules ?? '0';
      if (tauxEl) tauxEl.textContent = stats.tauxReussite ?? '0%';
      if (categorieEl) categorieEl.textContent = stats.categorieFavorite ?? 'Aucune';
    } catch (error) {
      console.error(error);
      setStatus("Erreur réseau lors du chargement des statistiques.", 'error');
    }
  };

  const formatDate = (value) => {
    if (!value) return '—';
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return '—';
    return d.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const loadHistory = async () => {
    try {
      const response = await fetch(`${window.API_BASE_URL}/quiz/mes-parties`, {
        headers: {
          ...authHeaders,
        },
        credentials: 'include',
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.succes) {
        setStatus(data.message || "Impossible de charger l'historique.", 'error');
        return;
      }

      const historique = data.historique || [];

      if (!historique.length) {
        if (historyEmpty) historyEmpty.hidden = false;
        if (historyTableShell) historyTableShell.hidden = true;
        return;
      }

      if (historyEmpty) historyEmpty.hidden = true;
      if (historyTableShell) historyTableShell.hidden = false;

      if (!historyBody) return;
      historyBody.innerHTML = '';

      historique.forEach((partie) => {
        const tr = document.createElement('tr');

        const dateCell = document.createElement('td');
        dateCell.textContent = formatDate(partie.joueLe);

        const categorieCell = document.createElement('td');
        categorieCell.textContent = partie.categorieJouee || '—';

        const scoreCell = document.createElement('td');
        const score = typeof partie.scoreObtenu === 'number' ? partie.scoreObtenu : 0;
        const total = typeof partie.totalQuestions === 'number' ? partie.totalQuestions : '?';
        scoreCell.textContent = `${score}/${total}`;

        const pointsCell = document.createElement('td');
        pointsCell.textContent = (partie.pointsGagnes ?? 0).toString();

        tr.appendChild(dateCell);
        tr.appendChild(categorieCell);
        tr.appendChild(scoreCell);
        tr.appendChild(pointsCell);

        historyBody.appendChild(tr);
      });
    } catch (error) {
      console.error(error);
      setStatus("Erreur réseau lors du chargement de l'historique.", 'error');
    }
  };

  // Init
  attachLogout();
  initUserName();
  loadStats();
  loadHistory();
})();

