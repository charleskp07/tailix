/**
 * Textes légaux de Tailix (brouillons à compléter).
 *
 * Tout passage écrit « [À COMPLÉTER : clé] » est remplacé automatiquement par la valeur de LEGAL_VALUES[clé]
 * dès que vous la renseignez. Tant qu'une valeur manque, le passage reste visible en surbrillance sur le site.
 * Faites relire ces textes par un juriste avant la mise en ligne publique.
 */

export const LEGAL_VALUES: Record<string, string> = {
    'dénomination sociale': '',
    'forme juridique': '',
    'RCCM': '',
    'adresse complète': '',
    'e-mail de contact': '',
    'e-mail données personnelles': '',
    'prestataire de paiement': 'FedaPay',
    'hébergeur': '',
    'identifiants de connexion': '',
    'données techniques collectées': '',
    'mesures de sécurité': '',
    'durée de conservation après suppression': '',
    'autorité de protection des données': '',
    'renouvellement et résiliation': '',
    'politique de remboursement': '',
    'droit applicable et tribunaux compétents': '',
    'présentation de l’équipe': '',
    'date de mise à jour': ''
}

const PLACEHOLDER = /\[À COMPLÉTER : ([^\]]+)\]/g

/** Remplace les passages « [À COMPLÉTER : clé] » dont la valeur est renseignée. */
export function fillLegal(raw: string) {
    return raw.replace(PLACEHOLDER, (match, key: string) => LEGAL_VALUES[key]?.trim() || match)
}

export type LegalSection = { title: string; paragraphs?: string[]; list?: string[] }
export type LegalDoc = { slug: string; title: string; description: string; lead: string; sections: LegalSection[] }

const PRIVACY: LegalDoc = {
    slug: 'privacy',
    title: 'Politique de confidentialité',
    description: 'Comment Tailix traite vos données personnelles et celles de vos clients.',
    lead: 'Vos données vous appartiennent. Cette page explique ce que Tailix enregistre, pourquoi, et comment vous gardez le contrôle.',
    sections: [
        {
            title: 'Qui est responsable de vos données ?',
            paragraphs: [
                'Tailix est édité par [À COMPLÉTER : dénomination sociale] ([À COMPLÉTER : forme juridique], RCCM [À COMPLÉTER : RCCM]), dont le siège est situé [À COMPLÉTER : adresse complète].',
                'Pour toute question sur vos données personnelles, écrivez à [À COMPLÉTER : e-mail données personnelles].'
            ]
        },
        {
            title: 'Les données que nous traitons',
            list: [
                'Votre compte : votre nom, vos identifiants de connexion ([À COMPLÉTER : identifiants de connexion]) et votre mot de passe, que nous protégeons.',
                'Vos données professionnelles : les fiches clients (coordonnées, photo, notes), les mesures et leur historique, les commandes, les tissus, les modèles et les photos que vous enregistrez dans l’application.',
                'Votre abonnement : la formule choisie, sa durée et l’état du paiement.',
                'Des données techniques : [À COMPLÉTER : données techniques collectées].'
            ]
        },
        {
            title: 'Pourquoi nous utilisons ces données',
            list: [
                'Faire fonctionner l’application et synchroniser vos informations entre votre téléphone et votre compte.',
                'Vous envoyer les rappels de livraison que vous avez programmés.',
                'Gérer votre abonnement et vos paiements.',
                'Vous aider lorsque vous contactez le support.',
                'Protéger le service contre les abus et améliorer son fonctionnement.'
            ]
        },
        {
            title: 'Le fonctionnement hors ligne',
            paragraphs: [
                'Tailix enregistre d’abord vos informations sur votre téléphone. Elles sont ensuite synchronisées avec votre compte lorsque la connexion revient. Vos données restent donc accessibles même sans réseau, mais elles dépendent de la sécurité de votre téléphone : pensez à le protéger par un code.'
            ]
        },
        {
            title: 'Les paiements',
            paragraphs: [
                'Le paiement d’un abonnement se fait dans l’application, par Mobile Money, grâce au prestataire [À COMPLÉTER : prestataire de paiement]. Les informations de paiement sont traitées par ce prestataire selon ses propres conditions.'
            ]
        },
        {
            title: 'Avec qui nous partageons vos données',
            paragraphs: [
                'Nous ne vendons pas vos données personnelles. Elles peuvent être partagées uniquement avec nos prestataires techniques (hébergement : [À COMPLÉTER : hébergeur] ; paiement : [À COMPLÉTER : prestataire de paiement]), dans la mesure nécessaire au service, ou avec les autorités lorsque la loi l’exige.'
            ]
        },
        {
            title: 'Combien de temps nous les conservons',
            paragraphs: [
                'Vos données sont conservées tant que votre compte est actif. Si vous supprimez votre compte, elles sont effacées dans un délai de [À COMPLÉTER : durée de conservation après suppression], sauf obligation légale de conservation.'
            ]
        },
        {
            title: 'La sécurité',
            paragraphs: [
                'Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données : [À COMPLÉTER : mesures de sécurité]. Aucun système n’est totalement infaillible ; nous vous invitons à choisir un mot de passe solide et à ne pas le partager.'
            ]
        },
        {
            title: 'Vos droits',
            paragraphs: [
                'Vous pouvez demander l’accès à vos données, leur correction, leur suppression, ou vous opposer à certains traitements, dans les conditions prévues par la loi applicable. Écrivez-nous à [À COMPLÉTER : e-mail données personnelles] ; nous répondrons dans un délai raisonnable.',
                'Vous pouvez aussi saisir l’autorité compétente : [À COMPLÉTER : autorité de protection des données].'
            ]
        },
        {
            title: 'Les données de vos clients',
            paragraphs: [
                'Les informations de vos clients que vous enregistrez dans Tailix relèvent de votre activité professionnelle. Vous restez responsable de les utiliser de façon légitime et d’informer vos clients lorsque c’est nécessaire. Tailix agit comme prestataire technique pour héberger et synchroniser ces informations.'
            ]
        },
        {
            title: 'Les enfants',
            paragraphs: [
                'Tailix s’adresse aux professionnels de la couture majeurs. Les profils « enfant » servent uniquement à enregistrer des mesures de vêtements.'
            ]
        },
        {
            title: 'Modifications de cette politique',
            paragraphs: [
                'Nous pouvons mettre cette politique à jour. La date de dernière mise à jour est indiquée ci-dessous ; en cas de changement important, nous vous en informerons dans l’application.',
                'Dernière mise à jour : [À COMPLÉTER : date de mise à jour].'
            ]
        },
        {
            title: 'Nous contacter',
            paragraphs: ['Pour toute question : [À COMPLÉTER : e-mail de contact].']
        }
    ]
}

const TERMS: LegalDoc = {
    slug: 'terms',
    title: 'Conditions d’utilisation',
    description: 'Les règles d’utilisation de l’application Tailix et de son abonnement.',
    lead: 'Ces conditions décrivent ce que Tailix vous propose, et ce que nous attendons de vous. Merci de les lire avant de créer un compte.',
    sections: [
        {
            title: 'L’objet du service',
            paragraphs: [
                'Tailix est un carnet numérique destiné aux couturiers, stylistes et professionnels de la confection : fiches clients, mesures, commandes, calendrier, tissus, modèles et rappels. Le service est édité par [À COMPLÉTER : dénomination sociale].'
            ]
        },
        {
            title: 'Votre compte',
            paragraphs: [
                'Vous devez fournir des informations exactes et protéger votre mot de passe. Vous êtes responsable de l’activité réalisée depuis votre compte. Prévenez-nous rapidement si vous pensez qu’il a été utilisé sans votre accord.'
            ]
        },
        {
            title: 'L’essai gratuit de 30 jours',
            paragraphs: [
                'Un essai complet de 30 jours vous permet de découvrir l’application. À la fin de l’essai, vous choisissez une formule dans l’application pour continuer à l’utiliser.'
            ]
        },
        {
            title: 'Les formules et les prix',
            paragraphs: [
                'Les formules, leurs fonctionnalités, leurs durées (1, 6 ou 12 mois) et leurs prix en francs CFA sont ceux affichés sur la page Tarifs et dans l’application au moment de votre choix. Les réductions éventuelles liées à la durée y sont précisées.'
            ]
        },
        {
            title: 'Le paiement',
            paragraphs: [
                'Le paiement se fait en ligne, dans l’application, par Mobile Money, via le prestataire [À COMPLÉTER : prestataire de paiement]. L’accès à la formule choisie est activé une fois le paiement confirmé.'
            ]
        },
        {
            title: 'Renouvellement et résiliation',
            paragraphs: ['[À COMPLÉTER : renouvellement et résiliation]']
        },
        {
            title: 'Remboursement',
            paragraphs: ['[À COMPLÉTER : politique de remboursement]']
        },
        {
            title: 'Vos données et vos contenus',
            paragraphs: [
                'Les informations que vous enregistrez (clients, mesures, commandes, photos…) restent les vôtres. Vous nous autorisez seulement à les héberger et à les synchroniser pour faire fonctionner le service. Le traitement des données personnelles est détaillé dans la politique de confidentialité.'
            ]
        },
        {
            title: 'Une utilisation conforme',
            list: [
                'Ne pas utiliser Tailix pour des activités illégales ou pour porter atteinte aux droits d’autrui.',
                'Ne pas tenter de perturber le service, d’accéder à des comptes qui ne sont pas les vôtres ou de contourner les limites de votre formule.',
                'Ne pas copier ou revendre l’application sans autorisation.'
            ]
        },
        {
            title: 'Disponibilité, hors ligne et synchronisation',
            paragraphs: [
                'Tailix est conçu pour fonctionner même sans connexion, mais la synchronisation, la connexion et le paiement demandent internet. Nous faisons le nécessaire pour que le service soit disponible, sans pouvoir garantir une absence totale d’interruption. Conservez votre téléphone en bon état : les données non encore synchronisées y sont stockées.'
            ]
        },
        {
            title: 'Propriété intellectuelle',
            paragraphs: [
                'L’application, son nom, son logo et son contenu sont protégés. Ces conditions ne vous donnent qu’un droit d’utilisation personnel et non transférable de Tailix.'
            ]
        },
        {
            title: 'Responsabilité',
            paragraphs: [
                'Nous nous efforçons de fournir un service fiable. Dans les limites autorisées par la loi, notre responsabilité ne couvre pas les pertes indirectes ni les dommages liés à un usage non conforme du service ou à la perte de votre téléphone.'
            ]
        },
        {
            title: 'Suspension et fin du compte',
            paragraphs: [
                'Nous pouvons suspendre ou fermer un compte en cas de non-respect de ces conditions, après vous en avoir informé lorsque cela est possible. Vous pouvez cesser d’utiliser Tailix et demander la suppression de votre compte à tout moment.'
            ]
        },
        {
            title: 'Modifications',
            paragraphs: [
                'Nous pouvons faire évoluer le service et ces conditions. Les changements importants vous seront signalés dans l’application. Dernière mise à jour : [À COMPLÉTER : date de mise à jour].'
            ]
        },
        {
            title: 'Droit applicable',
            paragraphs: ['[À COMPLÉTER : droit applicable et tribunaux compétents]']
        },
        {
            title: 'Nous contacter',
            paragraphs: ['Pour toute question : [À COMPLÉTER : e-mail de contact].']
        }
    ]
}

const ABOUT: LegalDoc = {
    slug: 'about',
    title: 'À propos de Tailix',
    description: 'Tailix, le carnet numérique du styliste : pourquoi nous l’avons créé et ce qu’il fait.',
    lead: 'Tailix est le carnet numérique des couturiers, stylistes et professionnels de la confection.',
    sections: [
        {
            title: 'Pourquoi Tailix',
            paragraphs: [
                'Dans un atelier, les informations sont partout : des clients notés d’un côté, des mesures de l’autre, des dates de livraison dans la tête. Tailix les réunit dans un seul carnet, pour que vous passiez votre temps à créer, pas à chercher.'
            ]
        },
        {
            title: 'Ce que fait l’application',
            list: [
                'Enregistrer vos clients et leurs mesures, avec l’historique des modifications.',
                'Suivre vos commandes, de l’attente à la livraison, avec un calendrier et des rappels.',
                'Organiser votre stock de tissus et votre galerie de modèles.',
                'Continuer à travailler sans connexion : tout se synchronise au retour du réseau.'
            ]
        },
        {
            title: 'Qui est derrière Tailix',
            paragraphs: ['[À COMPLÉTER : présentation de l’équipe]']
        },
        {
            title: 'Nous écrire',
            paragraphs: ['[À COMPLÉTER : e-mail de contact]']
        }
    ]
}

export const LEGAL_DOCS: Record<string, LegalDoc> = { privacy: PRIVACY, terms: TERMS, about: ABOUT }
