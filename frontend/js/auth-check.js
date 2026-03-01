// Redirige vers la page de connexion si aucun token n'est présent dans le localStorage
(function () {
  const token = window.localStorage.getItem('token');

  if (!token) {
    // On évite une boucle si l'utilisateur est déjà sur la page d'accueil
    if (!window.location.pathname.endsWith('index.html')) {
      window.location.href = 'index.html';
    }
    return;
  }
})();

