// Quiz professionnel avec interface moderne et responsive
class ProfessionalQuizManager {
  constructor() {
    this.questions = [];
    this.currentIndex = 0;
    this.timer = null;
    this.remainingSeconds = 15;
    this.selectedAnswers = new Map();
    this.init();
  }

  async init() {
    // Injecter les styles professionnels
    this.injectStyles();
    
    // Attendre que l'auth soit initialisé
    if (!window.authService.isInitialized) {
      await new Promise(resolve => {
        const checkInit = () => {
          if (window.authService.isInitialized) {
            resolve();
          } else {
            setTimeout(checkInit, 100);
          }
        };
        checkInit();
      });
    }

    // Vérifier l'authentification
    if (!window.authService.isAuthenticated()) {
      this.showAuthError();
      return;
    }

    this.setupEventListeners();
    this.updateUserInfo();
    this.initializeUI();
  }

  injectStyles() {
    const styles = `
      <style>
        .quiz-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem;
        }

        .quiz-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .quiz-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .quiz-subtitle {
          font-size: 1.1rem;
          color: #64748b;
          margin-bottom: 2rem;
        }

        .quiz-config {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          margin-bottom: 2rem;
        }

        .config-grid {
          display: grid;
          grid-template-columns: 1fr 1fr auto;
          gap: 1rem;
          align-items: end;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-label {
          font-weight: 600;
          color: #374151;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .form-select {
          padding: 0.75rem 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 1rem;
          background: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .form-select:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .btn {
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
        }

        .btn-primary {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
        }

        .quiz-empty {
          text-align: center;
          padding: 4rem 2rem;
          color: #64748b;
          background: #f8fafc;
          border-radius: 16px;
          border: 2px dashed #cbd5e1;
        }

        .quiz-active {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .quiz-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .quiz-badges {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .quiz-badge {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .timer-container {
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
          border: 2px solid #f59e0b;
          border-radius: 12px;
          padding: 1rem;
          margin-bottom: 2rem;
        }

        .timer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .timer-label {
          font-weight: 600;
          color: #92400e;
        }

        .timer-value {
          font-weight: 700;
          color: #dc2626;
          font-size: 1.2rem;
        }

        .barre-minuteur-conteneur {
          width: 100%;
          height: 8px;
          background: #fbbf24;
          border-radius: 4px;
          overflow: hidden;
        }

        .barre-minuteur {
          height: 100%;
          background: linear-gradient(90deg, #f59e0b 0%, #dc2626 100%);
          transition: width 1s linear;
          border-radius: 4px;
        }

        .question-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
          text-align: center;
          margin: 2rem 0;
          line-height: 1.4;
          padding: 0 1rem;
        }

        .choices-list {
          display: grid;
          gap: 1rem;
          margin: 2rem 0;
        }

        .choice-item {
          position: relative;
          display: flex;
          align-items: center;
          padding: 1.25rem;
          background: #f8fafc;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          min-height: 60px;
        }

        .choice-item:hover {
          background: #f1f5f9;
          border-color: #cbd5e1;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .choice-item input[type="radio"] {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }

        .choice-item label {
          flex: 1;
          margin: 0;
          padding: 0 1rem 0 3rem;
          font-size: 1rem;
          font-weight: 500;
          color: #334155;
          cursor: pointer;
          line-height: 1.5;
        }

        .choice-item::before {
          content: '';
          position: absolute;
          left: 1.25rem;
          top: 50%;
          transform: translateY(-50%);
          width: 24px;
          height: 24px;
          border: 2px solid #cbd5e1;
          border-radius: 50%;
          background: white;
          transition: all 0.3s ease;
        }

        .choice-item.selected {
          background: #dbeafe;
          border-color: #3b82f6;
        }

        .choice-item.selected::before {
          border-color: #3b82f6;
          background: #3b82f6;
        }

        .choice-item.selected label {
          color: #1e40af;
          font-weight: 600;
        }

        .choice-item.selected label::before {
          content: '✓';
          position: absolute;
          left: 1.325rem;
          top: 50%;
          transform: translateY(-50%);
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: white;
          color: #3b82f6;
          font-size: 14px;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .quiz-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid #e5e7eb;
        }

        .quiz-progress {
          color: #64748b;
          font-size: 0.9rem;
        }

        .quiz-result {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          padding: 3rem;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
        }

        .result-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .result-score {
          font-size: 3rem;
          font-weight: 900;
          color: #fbbf24;
          margin: 1rem 0;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .result-points {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0.5rem 0 2rem 0;
        }

        .btn-restart {
          background: white;
          color: #059669;
          padding: 1rem 2rem;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
        }

        .btn-restart:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
        }

        @media (max-width: 768px) {
          .quiz-container {
            padding: 1rem;
          }

          .quiz-title {
            font-size: 2rem;
          }

          .config-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .quiz-meta {
            flex-direction: column;
            align-items: stretch;
          }

          .quiz-badges {
            justify-content: center;
          }

          .question-title {
            font-size: 1.25rem;
          }

          .choice-item {
            padding: 1rem;
            min-height: 50px;
          }

          .choice-item label {
            padding: 0 1rem 0 2.5rem;
            font-size: 0.9rem;
          }

          .quiz-controls {
            flex-direction: column;
            gap: 1rem;
            align-items: center;
          }

          .result-title {
            font-size: 2rem;
          }

          .result-score {
            font-size: 2.5rem;
          }
        }
      </style>
    `;
    document.head.insertAdjacentHTML('beforeend', styles);
  }

  showAuthError() {
    const container = document.querySelector('.page-main') || document.querySelector('main');
    if (container) {
      container.innerHTML = `
        <div class="quiz-container">
          <div class="quiz-result">
            <div class="result-title">⚠️ Accès Restreint</div>
            <p style="font-size: 1.2rem; margin: 1rem 0;">Veuillez vous connecter pour accéder au quiz</p>
            <button class="btn-restart" onclick="window.location.href='index.html'">
              Retour à l'accueil
            </button>
          </div>
        </div>
      `;
    }
  }

  initializeUI() {
    // S'assurer que l'interface est correctement initialisée
    const quizEmpty = document.getElementById('quiz-empty');
    const quizActive = document.getElementById('quiz-active');
    const quizResult = document.getElementById('quiz-result');

    if (quizEmpty) quizEmpty.hidden = false;
    if (quizActive) quizActive.hidden = true;
    if (quizResult) quizResult.hidden = true;
  }

  updateUserInfo() {
    const user = window.authService.getCurrentUser();
    const navUsername = document.getElementById('nav-username-quiz');
    if (navUsername && user) {
      navUsername.textContent = user.nom || user.nomUtilisateur || 'Utilisateur';
    }
  }

  setupEventListeners() {
    const startBtn = document.getElementById('startQuizBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (startBtn) {
      startBtn.addEventListener('click', () => this.startQuiz());
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => this.nextQuestion());
    }
  }

  async startQuiz() {
    const categorieSelect = document.getElementById('categorie-select');
    const difficulteSelect = document.getElementById('difficulte-select');
    const categorie = categorieSelect?.value;
    const difficulte = difficulteSelect?.value;

    if (!categorie || !difficulte) {
      window.authService.showAlert('Veuillez sélectionner une catégorie et une difficulté', 'error');
      return;
    }

    try {
      const params = new URLSearchParams({ categorie, difficulte });
      const data = await window.authService.apiRequest(`/quiz?${params.toString()}`);

      if (!data.succes) {
        window.authService.showAlert(data.message || 'Impossible de charger les questions', 'error');
        return;
      }

      this.questions = data.questions || [];
      this.selectedAnswers.clear();
      this.currentIndex = 0;

      if (!this.questions.length) {
        window.authService.showAlert('Aucune question disponible', 'error');
        return;
      }

      this.showQuizInterface();
      this.displayQuestion();
    } catch (error) {
      console.error('Erreur chargement quiz:', error);
      window.authService.showAlert('Erreur lors du chargement du quiz', 'error');
    }
  }

  showQuizInterface() {
    const quizEmpty = document.getElementById('quiz-empty');
    const quizActive = document.getElementById('quiz-active');
    const quizResult = document.getElementById('quiz-result');

    if (quizEmpty) quizEmpty.hidden = true;
    if (quizActive) quizActive.hidden = false;
    if (quizResult) quizResult.hidden = true;
  }

  displayQuestion() {
    if (this.currentIndex >= this.questions.length) {
      this.submitQuiz();
      return;
    }

    const question = this.questions[this.currentIndex];
    const enonceEl = document.getElementById('quiz-question-title');
    const choicesEl = document.getElementById('choices');
    const questionIndexEl = document.getElementById('question-index');
    const questionTotalEl = document.getElementById('question-total');
    const metaCategorie = document.getElementById('meta-categorie');
    const metaDifficulte = document.getElementById('meta-difficulte');
    const metaPoints = document.getElementById('meta-points');

    if (enonceEl) enonceEl.textContent = question.enonce;
    if (questionIndexEl) questionIndexEl.textContent = this.currentIndex + 1;
    if (questionTotalEl) questionTotalEl.textContent = this.questions.length;
    if (metaCategorie) metaCategorie.textContent = question.categorie || '—';
    if (metaDifficulte) metaDifficulte.textContent = question.difficulte || '—';
    if (metaPoints) metaPoints.textContent = question.points || '—';

    // Afficher les choix avec le nouveau design
    if (choicesEl) {
      choicesEl.innerHTML = '';
      choicesEl.className = 'choices-list';
      
      question.choix.forEach((choix, index) => {
        const choiceDiv = document.createElement('div');
        choiceDiv.className = 'choice-item';
        choiceDiv.innerHTML = `
          <input type="radio" name="answer" value="${choix.id}" id="choice-${index}">
          <label for="choice-${index}">${choix.libelle}</label>
        `;
        
        choiceDiv.addEventListener('click', () => {
          // Désélectionner tous les autres choix
          document.querySelectorAll('.choice-item').forEach(item => {
            item.classList.remove('selected');
          });
          
          // Sélectionner le choix actuel
          choiceDiv.classList.add('selected');
          document.getElementById(`choice-${index}`).checked = true;
          this.selectedAnswers.set(question.id, choix.id);
        });

        choicesEl.appendChild(choiceDiv);
      });
    }

    this.startTimer();
    this.updateProgress();
  }

  startTimer() {
    this.resetTimer();
    const total = 15;

    this.timer = window.setInterval(() => {
      this.remainingSeconds -= 1;

      const timerLabel = document.getElementById('timer-label');
      const timerBar = document.getElementById('timer-bar');

      if (timerLabel) {
        timerLabel.textContent = `${this.remainingSeconds} s`;
      }

      if (timerBar) {
        const scale = this.remainingSeconds / total;
        timerBar.style.width = `${Math.max(0, scale * 100)}%`;
        timerBar.classList.add('barre-minuteur');
      }

      if (this.remainingSeconds <= 0) {
        this.nextQuestion();
      }
    }, 1000);
  }

  resetTimer() {
    if (this.timer) {
      window.clearInterval(this.timer);
      this.timer = null;
    }
    this.remainingSeconds = 15;
    
    const timerLabel = document.getElementById('timer-label');
    const timerBar = document.getElementById('timer-bar');
    
    if (timerLabel) timerLabel.textContent = '15 s';
    if (timerBar) {
      timerBar.style.width = '100%';
      timerBar.classList.add('barre-minuteur');
    }
  }

  nextQuestion() {
    this.resetTimer();
    this.currentIndex++;
    this.displayQuestion();
  }

  updateProgress() {
    const progressEl = document.getElementById('quiz-progress');
    if (progressEl) {
      progressEl.textContent = `Question ${this.currentIndex + 1} sur ${this.questions.length}`;
    }
  }

  async submitQuiz() {
    const answers = Array.from(this.selectedAnswers.values());
    
    if (answers.length === 0) {
      window.authService.showAlert('Veuillez répondre à au moins une question', 'error');
      return;
    }

    try {
      const categorieSelect = document.getElementById('categorie-select');
      const difficulteSelect = document.getElementById('difficulte-select');
      const categorie = categorieSelect?.value;
      const difficulte = difficulteSelect?.value;

      const data = await window.authService.apiRequest('/quiz/soumettre', {
        method: 'POST',
        body: JSON.stringify({
          reponsesUtilisateur: answers,
          categorie,
          difficulte,
        }),
      });

      if (!data.succes) {
        window.authService.showAlert(data.message || 'Erreur lors de la soumission', 'error');
        return;
      }

      this.showResults(data.resultats);
    } catch (error) {
      console.error('Erreur soumission:', error);
      window.authService.showAlert('Erreur lors de la soumission', 'error');
    }
  }

  showResults(resultats) {
    this.resetTimer();

    const quizActive = document.getElementById('quiz-active');
    const quizResult = document.getElementById('quiz-result');
    const sidebarScore = document.getElementById('sidebar-score');

    if (quizActive) quizActive.hidden = true;
    if (quizResult) {
      quizResult.hidden = false;
      quizResult.className = 'quiz-result';
      
      const score = resultats?.score || 0;
      const points = resultats?.points || 0;
      const total = this.questions.length;

      quizResult.innerHTML = `
        <div class="result-title">🎉 Quiz Terminé !</div>
        <div class="result-score">${score}/${total}</div>
        <div class="result-points">Points gagnés : ${points}</div>
        <button class="btn-restart" onclick="location.reload()">
          Nouveau quiz
        </button>
      `;
    }

    if (sidebarScore) sidebarScore.textContent = resultats?.score || 0;
  }
}

// Initialiser le gestionnaire de quiz professionnel
document.addEventListener('DOMContentLoaded', () => {
  new ProfessionalQuizManager();
});
