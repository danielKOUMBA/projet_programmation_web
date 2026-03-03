import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { prisma } from '../db';
import jwt from 'jsonwebtoken';

// --- Fonction pour générer le JWT + cookie (utilitaire interne) ---
const genererCookie = (res: Response, userId: number) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET || 'secret_par_defaut', {
    expiresIn: '7d',
  });

  res.cookie('token', token, {
    httpOnly: true, // Sécurité contre les attaques XSS
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 jours
  });

  // On retourne aussi le token pour que le frontend puisse le stocker dans le localStorage
  return token;
};

// --- INSCRIPTION ---
export const inscription = async (req: Request, res: Response) => {
  const { nom, email, motDePasse } = req.body;

  try {
    if (!nom || !email || !motDePasse) {
      return res.status(400).json({ succes: false, message: "Tous les champs sont requis." });
    }

    const existeDeja = await prisma.utilisateur.findUnique({
      where: { email },
    });
    if (existeDeja) {
      return res.status(400).json({ succes: false, message: "Email déjà utilisé." });
    }

    const hash = await bcrypt.hash(motDePasse, 10);

    const user = await prisma.utilisateur.create({
      data: {
        nomUtilisateur: nom,
        email,
        motDePasseHash: hash,
      },
    });
    const token = genererCookie(res, user.id);

    res.status(201).json({
      succes: true,
      token,
      utilisateur: { id: user.id, nom: user.nomUtilisateur, email: user.email }
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ succes: false, message: error.message });
  }
};

// --- CONNEXION ---
export const connexion = async (req: Request, res: Response) => {
  const { email, motDePasse } = req.body;

  try {
    const user = await prisma.utilisateur.findUnique({
      where: { email },
    });

    if (!user || !(await bcrypt.compare(motDePasse, user.motDePasseHash))) {
      return res.status(400).json({ succes: false, message: "Identifiants incorrects." });
    }

    const token = genererCookie(res, user.id);

    res.status(200).json({
      succes: true,
      token,
      utilisateur: { id: user.id, nom: user.nomUtilisateur, points: user.pointsTotaux }
    });
  } catch (error: any) {
    res.status(500).json({ succes: false, message: error.message });
  }
};

// --- DÉCONNEXION ---
export const deconnexion = (req: Request, res: Response) => {
  res.clearCookie('token');
  res.status(200).json({ succes: true, message: "Déconnecté." });
};

// --- CHECK AUTH ---
export const verifierAuthentification = async (req: any, res: Response) => {
  try {
    const user = await prisma.utilisateur.findUnique({
      where: { id: req.userId },
    });

    if (!user) return res.status(404).json({ succes: false, message: "Utilisateur non trouvé." });

    res.status(200).json({ succes: true, utilisateur: { id: user.id, nom: user.nomUtilisateur } });
  } catch (error: any) {
    res.status(500).json({ succes: false, message: error.message });
  }
};

