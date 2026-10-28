import type { ScreenVariant } from '../components/ui/AppScreen/AppScreen'

/**
 * Captures réelles de l'application (public/images/app/). Une variante sans fichier affiche une interface schématique.
 * Pour ajouter l'écran Mesures : déposez public/images/app/measures.jpg puis décommentez la ligne.
 */
export const SCREENS: Partial<Record<ScreenVariant, string>> = {
    home: '/images/app/home.jpg',
    clients: '/images/app/clients.jpg',
    orders: '/images/app/orders.jpg',
    calendar: '/images/app/calendar.jpg'
    // measures: '/images/app/measures.jpg',
}
