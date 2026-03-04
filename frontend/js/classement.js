// Classement avec nouveau système d'authentification et design amélioré
class ClassementManager {
  constructor() {
    this.init();
  }

  async init() {
    this.loadClassement();
    this.createParticles();
  }

  createParticles() {
    // Créer des particules animées pour l'effet visuel
    const particlesContainer = document.querySelector('.hero__particles');
    if (particlesContainer) {
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
          position: absolute;
          width: ${Math.random() * 4 + 1}px;
          height: ${Math.random() * 4 + 1}px;
          background: rgba(0, 212, 170, 0.6);
          border-radius: 50%;
          top: ${Math.random() * 100}%;
          left: ${Math.random() * 100}%;
          animation: float ${Math.random() * 10 + 10}s linear infinite;
        `;
        particlesContainer.appendChild(particle);
      }
    }
  }

  async loadClassement() {
    try {
      const data = await window.authService.apiRequest('/quiz/classement');

      if (data.succes) {
        this.displayClassement(data.classement || []);
      }
    } catch (error) {
      console.error('Erreur classement:', error);
      window.authService.showAlert('Erreur lors du chargement du classement', 'error');
    }
  }

  displayClassement(classement) {
    const leaderboardEmpty = document.getElementById('leaderboard-empty');
    const leaderboardTableShell = document.getElementById('leaderboard-table-shell');
    const podiumTop3 = document.getElementById('podium-top3');
    const leaderboardEntries = document.getElementById('leaderboard-entries');

    if (!classement.length) {
      if (leaderboardEmpty) leaderboardEmpty.hidden = false;
      if (leaderboardTableShell) leaderboardTableShell.hidden = true;
      return;
    }

    if (leaderboardEmpty) leaderboardEmpty.hidden = true;
    if (leaderboardTableShell) leaderboardTableShell.hidden = false;

    // Afficher le podium pour le top 3
    this.displayPodium(classement.slice(0, 3), podiumTop3);
    
    // Afficher le reste du classement
    this.displayLeaderboardEntries(classement.slice(3), leaderboardEntries, classement.slice(0, 3));
  }

  displayPodium(top3, container) {
    if (!container) return;
    
    container.innerHTML = '';
    
    // Ordre du podium: 2ème, 1er, 3ème (pour l'effet visuel)
    const podiumOrder = [1, 0, 2]; // indices correspondant à 2ème, 1er, 3ème
    const positions = ['silver', 'gold', 'bronze'];
    const medals = ['🥈', '🥇', '🥉'];
    
    podiumOrder.forEach((playerIndex, podiumIndex) => {
      if (top3[playerIndex]) {
        const player = top3[playerIndex];
        const position = positions[podiumIndex];
        const medal = medals[podiumIndex];
        const rankNumber = playerIndex + 1;
        
        const podiumPosition = document.createElement('div');
        podiumPosition.className = 'podium-position';
        
        podiumPosition.innerHTML = `
          <div class="podium-player ${position}">
            <div class="rank-badge ${position}">${rankNumber}</div>
            <div class="podium-player-name">${player.nom}</div>
            <div class="podium-player-points">${this.formatPoints(player.points)}</div>
          </div>
          <div class="podium-base ${position}">
            <span>${medal} ${rankNumber}</span>
          </div>
        `;
        
        container.appendChild(podiumPosition);
      }
    });

    // Ajouter l'effet de confettis pour le premier joueur
    if (top3[0]) {
      this.addConfettiEffect();
    }
  }

  displayLeaderboardEntries(entries, container, top3) {
    if (!container) return;
    
    container.innerHTML = '';
    
    // Calculer le score maximum pour les barres de progression
    const maxPoints = Math.max(...top3.concat(entries).map(p => p.points));
    
    entries.forEach((joueur, index) => {
      const actualRank = index + 4; // Commence à 4 puisque le top 3 est déjà affiché
      const entry = document.createElement('div');
      entry.className = 'leaderboard-entry';
      entry.style.animationDelay = `${(index + 3) * 0.1}s`;
      
      const progressPercentage = (joueur.points / maxPoints) * 100;
      
      entry.innerHTML = `
        <div class="entry-rank">${actualRank}</div>
        <div>
          <div class="entry-player">${joueur.nom}</div>
          <div class="entry-progress">
            <div class="entry-progress-bar" data-progress="${progressPercentage}"></div>
          </div>
        </div>
        <div class="entry-points">${this.formatPoints(joueur.points)}</div>
      `;
      
      container.appendChild(entry);
      
      // Animer la barre de progression après un délai
      setTimeout(() => {
        const progressBar = entry.querySelector('.entry-progress-bar');
        if (progressBar) {
          progressBar.style.width = `${progressPercentage}%`;
        }
      }, 500 + (index * 100));
    });
  }

  formatPoints(points) {
    if (points >= 1000000) {
      return (points / 1000000).toFixed(1) + 'M';
    } else if (points >= 1000) {
      return (points / 1000).toFixed(1) + 'K';
    }
    return points.toString();
  }

  addConfettiEffect() {
    // Créer des confettis pour célébrer le premier joueur
    const colors = ['#FFD700', '#FFA500', '#00d4aa', '#ff5c6c', '#ffb347'];
    
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
          position: fixed;
          width: ${Math.random() * 10 + 5}px;
          height: ${Math.random() * 10 + 5}px;
          background: ${colors[Math.floor(Math.random() * colors.length)]};
          left: ${Math.random() * 100}%;
          top: -10px;
          opacity: ${Math.random() * 0.8 + 0.2};
          transform: rotate(${Math.random() * 360}deg);
          pointer-events: none;
          z-index: 9999;
          animation: confettiFall ${Math.random() * 3 + 2}s linear forwards;
        `;
        
        document.body.appendChild(confetti);
        
        // Supprimer le confetti après l'animation
        setTimeout(() => {
          confetti.remove();
        }, 5000);
      }, i * 50);
    }
  }
}

// Ajouter les animations CSS manquantes
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(-20px) rotate(90deg); }
    50% { transform: translateY(0) rotate(180deg); }
    75% { transform: translateY(20px) rotate(270deg); }
  }
  
  @keyframes confettiFall {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(100vh) rotate(720deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Initialiser le gestionnaire de classement
document.addEventListener('DOMContentLoaded', () => {
  new ClassementManager();
});
