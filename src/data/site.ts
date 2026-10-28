export const SITE = {
    name: 'Tailix',
    tagline: 'Le carnet numérique du styliste',
    description:
        'Tailix aide les tailleurs et stylistes à gérer leurs clients, mesures, commandes, tissus et modèles, même sans connexion internet.',
    url: '',
    email: '',
    /** Numéro WhatsApp au format international, sans + ni espaces (ex. '22890000000'). Vide : le bouton n'apparaît pas. */
    whatsapp: '',
    /** Vidéo de démonstration (ex. '/videos/demo.mp4'). Vide : la section n'apparaît pas. */
    demoVideo: '',
    social: [] as { label: string; href: string }[],
}

export const NAV_LINKS = [
    { label: 'Accueil', to: '/' },
    { label: 'Fonctionnalités', to: '/features' },
    { label: 'Tarifs', to: '/pricing' },
    { label: 'À propos', to: '/legal/about' },
    { label: 'Contact', to: '/contact' },
]
