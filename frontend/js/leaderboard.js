// Classement : récupération du Top 10
(function () {
  const tbody = document.getElementById('leaderboard-body');
  const emptyEl = document.getElementById('leaderboard-empty');
  const tableShell = document.getElementById('leaderboard-table-shell');
  const statusEl = document.getElementById('leaderboard-status');
  const navUsername = document.getElementById('nav-username-leaderboard');

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

  const initUserName = () => {
    const token = window.localStorage.getItem('token');
    const authHeaders = token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : {};

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
      })
      .catch(() => {
        // silencieux
      });
  };

  const loadLeaderboard = async () => {
    try {
      const response = await fetch(`${window.API_BASE_URL}/quiz/classement`);
      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.succes) {
        setStatus(
          data.message || 'Impossible de charger le classement pour le moment.',
          'error'
        );
        return;
      }

      const classement = data.classement || [];

      if (!classement.length) {
        if (emptyEl) emptyEl.hidden = false;
        if (tableShell) tableShell.hidden = true;
        return;
      }

      if (emptyEl) emptyEl.hidden = true;
      if (tableShell) tableShell.hidden = false;

      if (!tbody) return;
      tbody.innerHTML = '';

      classement.forEach((joueur, index) => {
        const tr = document.createElement('tr');

        const rangCell = document.createElement('td');
        rangCell.textContent = `#${index + 1}`;

        const nomCell = document.createElement('td');
        nomCell.textContent = joueur.nom || 'Anonyme';

        const pointsCell = document.createElement('td');
        pointsCell.textContent = (joueur.points ?? 0).toString();

        tr.appendChild(rangCell);
        tr.appendChild(nomCell);
        tr.appendChild(pointsCell);

        tbody.appendChild(tr);
      });
    } catch (error) {
      console.error(error);
      setStatus('Erreur réseau lors du chargement du classement.', 'error');
    }
  };

  // Init
  initUserName();
  loadLeaderboard();
})();

