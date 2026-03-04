// Gestion du menu hamburger pour mobile
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const navigationMenu = document.querySelector('.navigation-menu');
  
  if (menuToggle && navigationMenu) {
    menuToggle.addEventListener('click', function() {
      navigationMenu.classList.toggle('ouvert');
    });
    
    // Fermer le menu en cliquant à l'extérieur
    document.addEventListener('click', function(event) {
      if (!menuToggle.contains(event.target) && !navigationMenu.contains(event.target)) {
        navigationMenu.classList.remove('ouvert');
      }
    });
    
    // Fermer le menu lors du redimensionnement de la fenêtre
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        navigationMenu.classList.remove('ouvert');
      }
    });
  }
});
