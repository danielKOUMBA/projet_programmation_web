import { db } from './index';

// Quelques questions de base écrites "à la main"
const baseQuestions = [
  // --- HTML (débutant) ---
  {
    enonce: "Quelle balise est utilisée pour créer un lien hypertexte ?",
    categorie: "html",
    difficulte: 1,
    pointsValeur: 10,
    choix: [
      { libelle: "<a>", estCorrecte: true },
      { libelle: "<link>", estCorrecte: false },
      { libelle: "<href>", estCorrecte: false },
      { libelle: "<url>", estCorrecte: false },
    ],
  },
  {
    enonce: "Que signifie l'attribut 'alt' dans une balise <img> ?",
    categorie: "html",
    difficulte: 1,
    pointsValeur: 10,
    choix: [
      { libelle: "Texte alternatif pour l'accessibilité", estCorrecte: true },
      { libelle: "L'alignement de l'image", estCorrecte: false },
      { libelle: "Le lien de l'image", estCorrecte: false },
      { libelle: "La taille de l'image", estCorrecte: false },
    ],
  },
  {
    enonce: "Quelle balise HTML définit le contenu principal d'un document ?",
    categorie: "html",
    difficulte: 1,
    pointsValeur: 10,
    choix: [
      { libelle: "<main>", estCorrecte: true },
      { libelle: "<section>", estCorrecte: false },
      { libelle: "<article>", estCorrecte: false },
      { libelle: "<body>", estCorrecte: false },
    ],
  },
  // --- CSS (débutant) ---
  {
    enonce: "Quelle propriété permet de changer la couleur de fond ?",
    categorie: "css",
    difficulte: 1,
    pointsValeur: 10,
    choix: [
      { libelle: "background-color", estCorrecte: true },
      { libelle: "color", estCorrecte: false },
      { libelle: "bgcolor", estCorrecte: false },
      { libelle: "fill", estCorrecte: false },
    ],
  },
  {
    enonce: "Quelle unité CSS est relative à la taille de police de l’élément racine ?",
    categorie: "css",
    difficulte: 2,
    pointsValeur: 15,
    choix: [
      { libelle: "rem", estCorrecte: true },
      { libelle: "em", estCorrecte: false },
      { libelle: "px", estCorrecte: false },
      { libelle: "%", estCorrecte: false },
    ],
  },
  // --- JavaScript (débutant) ---
  {
    enonce: "Comment déclare-t-on une constante en JavaScript moderne ?",
    categorie: "javascript",
    difficulte: 1,
    pointsValeur: 10,
    choix: [
      { libelle: "const", estCorrecte: true },
      { libelle: "let", estCorrecte: false },
      { libelle: "var", estCorrecte: false },
      { libelle: "constant", estCorrecte: false },
    ],
  },
  {
    enonce: "Quelle méthode JSON convertit un objet JavaScript en chaîne de caractères ?",
    categorie: "javascript",
    difficulte: 2,
    pointsValeur: 15,
    choix: [
      { libelle: "JSON.stringify()", estCorrecte: true },
      { libelle: "JSON.parse()", estCorrecte: false },
      { libelle: "JSON.encode()", estCorrecte: false },
      { libelle: "JSON.toString()", estCorrecte: false },
    ],
  },
  // --- API / HTTP ---
  {
    enonce: "Quelle méthode HTTP est utilisée pour créer une ressource ?",
    categorie: "api",
    difficulte: 2,
    pointsValeur: 20,
    choix: [
      { libelle: "POST", estCorrecte: true },
      { libelle: "GET", estCorrecte: false },
      { libelle: "PUT", estCorrecte: false },
      { libelle: "DELETE", estCorrecte: false },
    ],
  },
  {
    enonce: "Quel code de statut HTTP indique une ressource non trouvée ?",
    categorie: "api",
    difficulte: 1,
    pointsValeur: 10,
    choix: [
      { libelle: "404", estCorrecte: true },
      { libelle: "200", estCorrecte: false },
      { libelle: "500", estCorrecte: false },
      { libelle: "302", estCorrecte: false },
    ],
  },
];

// Génère automatiquement des questions supplémentaires pour atteindre largement 200 questions
const generatedQuestions: {
  enonce: string;
  categorie: string;
  difficulte: number;
  pointsValeur: number;
  choix: { libelle: string; estCorrecte: boolean }[];
}[] = [];

const generatedCategories = ["html", "css", "javascript", "api"];

for (const categorie of generatedCategories) {
  for (let i = 1; i <= 50; i++) {
    const difficulte = i <= 20 ? 1 : i <= 35 ? 2 : 3;
    const pointsValeur = difficulte === 1 ? 10 : difficulte === 2 ? 15 : 20;

    generatedQuestions.push({
      enonce: `Question ${i} de pratique ${categorie.toUpperCase()} : scénario ${i}`,
      categorie,
      difficulte,
      pointsValeur,
      choix: [
        {
          libelle: "La réponse correcte (concept clé)",
          estCorrecte: true,
        },
        {
          libelle: "Une affirmation plausible mais fausse",
          estCorrecte: false,
        },
        {
          libelle: "Une réponse clairement erronée",
          estCorrecte: false,
        },
        {
          libelle: "Je ne sais pas / aucune de ces réponses",
          estCorrecte: false,
        },
      ],
    });
  }
}

// On combine les questions écrites à la main et celles générées
const questionsData = [...baseQuestions, ...generatedQuestions];

async function seed() {
  console.log(" Début du remplissage de la base de données...");

  try {
    for (const q of questionsData) {
      // 1. Insertion de la question
      const question = await db.question.create({
        data: {
          enonce: q.enonce,
          categorie: q.categorie,
          difficulte: q.difficulte,
          pointsValeur: q.pointsValeur,
        },
      });

      await db.reponse.createMany({
        data: q.choix.map(c => ({
          libelle: c.libelle,
          estCorrecte: c.estCorrecte,
          questionId: question.id,
        })),
      });
    }

    console.log(" Base de données remplie avec succès !");
  } catch (error) {
    console.error("Erreur lors du seeding :", error);
  } finally {
    await db.$disconnect();
    process.exit();
  }
}

seed();