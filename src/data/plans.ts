export type Plan = {
    code: 'free' | 'standard' | 'premium' | 'patron'
    name: string
    monthly: number
    tagline: string
    features: string[]
    highlight?: boolean
    cta: string
}

export const PERIODS = [
    { months: 1, label: '1 mois', discount: 0 },
    { months: 6, label: '6 mois', discount: 0.1 },
    { months: 12, label: '12 mois', discount: 0.2 }
]

export const PLANS: Plan[] = [
    {
        code: 'free',
        name: 'Gratuit',
        monthly: 0,
        tagline: "Pour découvrir l'application",
        features: ['Essai complet de 30 jours', 'Clients, mesures et commandes', 'Mode hors ligne'],
        cta: 'Essayer gratuitement'
    },
    {
        code: 'standard',
        name: 'Standard',
        monthly: 1500,
        tagline: "L'essentiel de l'atelier",
        features: ['Clients illimités', 'Mesures et historique', 'Commandes et calendrier', 'Rappels de livraison'],
        cta: 'Choisir Standard'
    },
    {
        code: 'premium',
        name: 'Premium',
        monthly: 3500,
        tagline: 'Tout pour gérer votre atelier',
        features: ['Tout le plan Standard', 'Stock de tissus', 'Galerie de modèles'],
        highlight: true,
        cta: 'Choisir Premium'
    },
    {
        code: 'patron',
        name: 'Pack Patron',
        monthly: 10000,
        tagline: 'Pour les ateliers avec apprentis',
        features: ['Tout le plan Premium', "Codes d'accès pour vos apprentis (bientôt)"],
        cta: 'Choisir Pack Patron'
    }
]

export const totalFor = (plan: Plan, months: number, discount: number) =>
    Math.round(plan.monthly * months * (1 - discount))
