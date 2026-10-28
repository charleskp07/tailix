import type { LucideIcon } from 'lucide-react'
import { Bell, CalendarDays, ClipboardList, Images, Layers, Ruler, Users, Wallet, WifiOff } from 'lucide-react'

export type Feature = {
    id: string
    icon: LucideIcon
    title: string
    text: string
    soon?: boolean
}

export const FEATURES: Feature[] = [
    { id: 'clients', icon: Users, title: 'Fiches clients', text: 'Coordonnées, photo, notes et profil de chaque client, retrouvés en quelques secondes.' },
    { id: 'mesures', icon: Ruler, title: 'Mesures et historique', text: 'Prenez les mesures selon le profil homme, femme ou enfant. Chaque modification est conservée.' },
    { id: 'commandes', icon: ClipboardList, title: 'Commandes suivies', text: "De l'attente à la livraison : statut, urgence, montant, et les mesures jointes à la commande." },
    { id: 'calendrier', icon: CalendarDays, title: 'Calendrier des livraisons', text: 'Une vue par jour, par mois ou par année, avec les retards signalés.' },
    { id: 'tissus', icon: Layers, title: 'Stock de tissus', text: 'Type, couleur, quantité en mètres et photo de chaque tissu.' },
    { id: 'galerie', icon: Images, title: 'Galerie de modèles', text: 'Votre catalogue en photos, classé avec vos propres mots-clés et associé aux commandes.' },
    { id: 'rappels', icon: Bell, title: 'Rappels de livraison', text: 'Une alerte avant la date prévue et une autre en cas de retard, même sans connexion.' },
    { id: 'hors-ligne', icon: WifiOff, title: 'Fonctionne hors ligne', text: "Tout s'enregistre sur votre téléphone et se synchronise dès que le réseau revient." },
    { id: 'versements', icon: Wallet, title: 'Carnet de versements', text: 'Avances, paiements et solde restant par commande.', soon: true }
]
