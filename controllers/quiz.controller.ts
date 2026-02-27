import { Request, Response } from 'express';
import { db } from '../db';
import { parties, questions, reponses } from '../db/schema';
import { eq, and, sql, inArray } from 'drizzle-orm';

export const obtenirQuiz = async (req: Request, res: Response) => {
  // On récupère les préférences de l'utilisateur depuis les paramètres d'URL
  // Exemple: /api/quiz?categorie=html&difficulte=1
  const { categorie, difficulte } = req.query;

  try {
    // 1. On récupère 10 questions aléatoires selon les filtres
    const questionsSelectionnees = await db.select()
      .from(questions)
      .where(
        and(
          eq(questions.categorie, categorie as string),
          eq(questions.difficulte, parseInt(difficulte as string))
        )
      )
      .orderBy(sql`RANDOM()`) // Mélange pour ne pas avoir toujours les mêmes
      .limit(10);

    if (questionsSelectionnees.length === 0) {
      return res.status(404).json({ 
        succes: false, 
        message: "Aucune question trouvée pour ces critères." 
      });
    }

    // 2. Pour chaque question, on récupère ses réponses
    // CRUCIAL : On ne renvoie PAS le champ 'estCorrecte' au client pour éviter la triche !
    const quizComplet = await Promise.all(questionsSelectionnees.map(async (q) => {
      const choix = await db.select({
        id: reponses.id,
        libelle: reponses.libelle
        // On omet volontairement 'estCorrecte'
      })
      .from(reponses)
      .where(eq(reponses.questionId, q.id));
      
      return {
        id: q.id,
        enonce: q.enonce,
        points: q.pointsValeur,
        choix: choix
      };
    }));

    res.status(200).json({
      succes: true,
      questions: quizComplet
    });

  } catch (error: any) {
    res.status(500).json({ succes: false, message: error.message });
  }
};

export const soumettreQuiz = async (req: any, res: Response) => {
    const { reponsesUtilisateur, categorie, difficulte } = req.body; 
    // Rappel : utilisateurId vient du token JWT (verifierToken)
    const userId = req.utilisateur.userId; 

    try {
        if (!reponsesUtilisateur || !Array.isArray(reponsesUtilisateur) || reponsesUtilisateur.length === 0) {
            return res.status(400).json({ succes: false, message: "Aucune réponse fournie." });
        }

        // 1. Récupération des bonnes réponses avec jointure pour les points
        const detailsBonnesReponses = await db
            .select({
                id: reponses.id,
                points: questions.pointsValeur
            })
            .from(reponses)
            .innerJoin(questions, eq(reponses.questionId, questions.id))
            .where(
                and(
                    inArray(reponses.id, reponsesUtilisateur),
                    eq(reponses.estCorrecte, true)
                )
            );

        // 2. Calcul du score
        const totalPointsGagnes = detailsBonnesReponses.reduce((acc, curr) => acc + (curr.points || 0), 0);
        const nbBonnesReponses = detailsBonnesReponses.length;

        // 3. Insertion en base avec les noms de colonnes de TON schéma
        await db.insert(parties).values({
            utilisateurId: Number(userId),           // Nom : utilisateurId
            scoreObtenu: nbBonnesReponses,           // Nom : scoreObtenu (ex: 8 sur 10)
            totalQuestions: reponsesUtilisateur.length, // Nom : totalQuestions
            pointsGagnes: totalPointsGagnes,         // Nom : pointsGagnes (ex: 80 points)
            categorieJouee: categorie || "Général",   // Nom : categorieJouee
            niveauDifficulte: Number(difficulte) || 1, // Nom : niveauDifficulte
            // joueLe est géré par defaultNow() dans ton schéma
        });

        res.status(200).json({
            succes: true,
            resultats: {
                score: nbBonnesReponses,
                points: totalPointsGagnes,
                total: reponsesUtilisateur.length
            }
        });

    } catch (error: any) {
        console.error("Erreur insertion :", error);
        res.status(500).json({ succes: false, message: error.message });
    }
};