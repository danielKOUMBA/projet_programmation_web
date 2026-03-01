import { Router } from 'express';
import { obtenirQuiz, soumettreQuiz, obtenirClassement, obtenirMesParties, obtenirStatsUtilisateur} from '../controllers/quiz.controller';
import { verifierToken } from '../middlewares/verifierToken';

const router = Router();

// L'URL sera : http://localhost:3000/api/quiz/
router.get('/', verifierToken, obtenirQuiz);

// L'URL sera : http://localhost:3000/api/quiz/soumettre
router.post('/soumettre', verifierToken, soumettreQuiz); 

router.get('/classement', obtenirClassement);

router.get('/mes-parties', verifierToken, obtenirMesParties)

router.get('/stats', verifierToken, obtenirStatsUtilisateur);

export default router;