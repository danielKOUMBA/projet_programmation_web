import { Request, Response } from 'express';
import { db } from '../db';
import { parties, questions, reponses, utilisateurs} from '../db/schema';
import { eq, and, sql, inArray, desc } from 'drizzle-orm';

export const obtenirQuiz = async (req: Request, res: Response) => {
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
    const userId = req.utilisateur.userId; 

    try {
        if (!reponsesUtilisateur || !Array.isArray(reponsesUtilisateur) || reponsesUtilisateur.length === 0) {
            return res.status(400).json({ succes: false, message: "Aucune réponse fournie." });
        }

        // 1. Récupération des bonnes réponses
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

        const totalPointsGagnes = detailsBonnesReponses.reduce((acc, curr) => acc + (curr.points || 0), 0);
        const nbBonnesReponses = detailsBonnesReponses.length;

        // 2. Insertion de la partie
        await db.insert(parties).values({
            utilisateurId: Number(userId),
            scoreObtenu: nbBonnesReponses,
            totalQuestions: reponsesUtilisateur.length,
            pointsGagnes: totalPointsGagnes,
            categorieJouee: categorie || "Général",
            niveauDifficulte: Number(difficulte) || 1
        });

        // 3. Mise à jour des points totaux de l'utilisateur
      
              const resultatSomme = await db
                  .select({ total: sql<number>`sum(${parties.pointsGagnes})` })
                  .from(parties)
                  .where(eq(parties.utilisateurId, Number(userId)));

              const nouveauTotalGlobal = Number(resultatSomme[0]?.total) || 0;

              // 4. MISE À JOUR : On écrase les points_totaux avec le nouveau calcul
              await db.update(utilisateurs)
                  .set({
                      pointsTotaux: nouveauTotalGlobal
                  })
                  .where(eq(utilisateurs.id, Number(userId)));

              console.log(`Mise à jour réussie : Nouveau total de ${nouveauTotalGlobal} points.`);
     
     
              // 5. IMPORTANT : Envoyer la réponse au client
        res.status(200).json({
            succes: true,
            message: "Score enregistré avec succès !",
            resultats: {
                score: nbBonnesReponses,
                points: totalPointsGagnes,
                totalQuestions: reponsesUtilisateur.length
            }
        });

    } catch (error: any) {
        console.error("Erreur insertion :", error);
        res.status(500).json({ succes: false, message: error.message });
    }
};



// --- CLASSEMENT top mondial---
export const obtenirClassement = async (req: Request, res: Response) => {
    try {
        const topJoueurs = await db
            .select({
                nom: utilisateurs.nomUtilisateur,
                points: utilisateurs.pointsTotaux,
            })
            .from(utilisateurs)
            .orderBy(desc(utilisateurs.pointsTotaux))
            .limit(10); // On ne prend que le Top 10

        res.status(200).json({
            succes: true,
            classement: topJoueurs
        });
    } catch (error: any) {
        res.status(500).json({ succes: false, message: error.message });
    }
};

// --- HISTORIQUE DE MES PARTIES ---

export const obtenirMesParties = async (req: any, res: Response) => {
    const userId = req.utilisateur.userId; // Récupéré via le middleware verifierToken

    try {
        const historique = await db
            .select()
            .from(parties)
            .where(eq(parties.utilisateurId, Number(userId)))
            .orderBy(desc(parties.joueLe)); // Les plus récentes en premier

        res.status(200).json({
            succes: true,
            totalParties: historique.length,
            historique
        });
    } catch (error: any) {
        res.status(500).json({ succes: false, message: error.message });
    }
};


export const obtenirStatsUtilisateur = async (req: any, res: Response) => {
    const userId = req.utilisateur.userId;

    try {
        // 1. Récupérer les totaux (Score et Questions) pour le taux de réussite
        const resultats = await db
            .select({
                scoreTotal: sql<number>`sum(${parties.scoreObtenu})`,
                questionsTotales: sql<number>`sum(${parties.totalQuestions})`,
                pointsTotaux: sql<number>`sum(${parties.pointsGagnes})`
            })
            .from(parties)
            .where(eq(parties.utilisateurId, Number(userId)));

        const stats = resultats[0];
        
        // 2. Calcul du pourcentage de réussite
        const tauxReussite = stats.questionsTotales > 0 
            ? Math.round((stats.scoreTotal / stats.questionsTotales) * 100) 
            : 0;

        // 3. Trouver la catégorie la plus jouée
        const categoriePreferee = await db
            .select({ nom: parties.categorieJouee, count: sql<number>`count(*)` })
            .from(parties)
            .where(eq(parties.utilisateurId, Number(userId)))
            .groupBy(parties.categorieJouee)
            .orderBy(sql`count(*) desc`)
            .limit(1);

        res.status(200).json({
            succes: true,
            stats: {
                pointsAccumules: stats.pointsTotaux || 0,
                tauxReussite: `${tauxReussite}%`,
                partiesJouees: stats.questionsTotales ? resultats.length : 0,
                categorieFavorite: categoriePreferee[0]?.nom || "Aucune"
            }
        });
    } catch (error: any) {
        res.status(500).json({ succes: false, message: error.message });
    }
};