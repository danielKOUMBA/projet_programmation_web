(function () {
  const form = document.getElementById('signup-form');
  const statusEl = document.getElementById('signup-status');

  if (!form) return;

  const setStatus = (message, type = 'info') => {
    if (!statusEl) return;
    statusEl.textContent = message || '';
    statusEl.className = 'status-message';
    if (type === 'error') {
      statusEl.classList.add('status-message--error');
    } else if (type === 'success') {
      statusEl.classList.add('status-message--success');
    }
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const nomInput = document.getElementById('signup-name');
    const emailInput = document.getElementById('signup-email');
    const passwordInput = document.getElementById('signup-password');

    const nom = nomInput.value.trim();
    const email = emailInput.value.trim();
    const motDePasse = passwordInput.value;

    if (!nom || !email || !motDePasse) {
      setStatus('Merci de renseigner tous les champs.', 'error');
      return;
    }

    setStatus('Création de ton compte…');

    try {
      const response = await fetch(`${window.API_BASE_URL}/auth/inscription`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ nom, email, motDePasse }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.succes) {
        setStatus(data.message || "Impossible de créer le compte.", 'error');
        return;
      }

      if (data.token) {
        window.localStorage.setItem('token', data.token);
      }

      setStatus('Compte créé avec succès. Redirection…', 'success');

      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 700);
    } catch (error) {
      console.error(error);
      setStatus("Erreur réseau lors de l'inscription.", 'error');
    }
  });
})();

