// Gestion du menu hamburger pour mobile
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const navigationMenu = document.querySelector('.navigation-menu');
  
  if (menuToggle && navigationMenu) {
    menuToggle.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      navigationMenu.classList.toggle('ouvert');
      menuToggle.textContent = navigationMenu.classList.contains('ouvert') ? '✕' : '☰';
    });
    
    // Fermer le menu quand on clique en dehors
    document.addEventListener('click', function(event) {
      if (!menuToggle.contains(event.target) && !navigationMenu.contains(event.target)) {
        navigationMenu.classList.remove('ouvert');
        menuToggle.textContent = '☰';
      }
    });
    
    // Fermer le menu quand on clique sur un lien
    const links = navigationMenu.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('click', function() {
        navigationMenu.classList.remove('ouvert');
        menuToggle.textContent = '☰';
      });
    });
  }
});

// Gestion du formulaire de connexion
(function () {
  const form = document.getElementById('login-form');
  const statusEl = document.getElementById('login-status');

  if (!form) return;

  const setStatus = (message, type = 'info') => {
    if (!statusEl) return;
    statusEl.textContent = message;
    statusEl.className = 'message-statut';
    if (type === 'error') {
      statusEl.classList.add('message-statut--erreur');
    } else if (type === 'success') {
      statusEl.classList.add('message-statut--succes');
    }
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const email = emailInput.value.trim();
    const motDePasse = passwordInput.value;

    if (!email || !motDePasse) {
      setStatus('Merci de renseigner votre email et votre mot de passe.', 'error');
      return;
    }

    setStatus('Connexion en cours…');

    try {
      const response = await fetch(`${window.API_BASE_URL}/auth/connexion`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // pour garder la compatibilité avec le cookie httpOnly
        body: JSON.stringify({ email, motDePasse }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.succes) {
        const message = data.message || 'Impossible de se connecter. Vérifie tes identifiants.';
        setStatus(message, 'error');
        return;
      }

      if (data.token) {
        window.localStorage.setItem('token', data.token);
      }

      setStatus('Connexion réussie. Redirection…', 'success');
      // Petit délai pour que le message soit visible
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 500);
    } catch (error) {
      console.error(error);
      setStatus('Erreur réseau. Vérifie que le serveur API est démarré.', 'error');
    }
  });
})();



