# Tailix, site vitrine

Site complet et autonome : React 19, TypeScript, SCSS (modules), Vite, React Router 7, Framer Motion, Lucide.

## Lancer
```
npm install
npm run dev        # développement
npm run build      # vérification TypeScript + build de production (dossier dist/)
npm run preview    # prévisualiser le build
```

## Où modifier quoi
| Je veux changer…                         | Fichier                         |
|------------------------------------------|---------------------------------|
| e-mail, WhatsApp, vidéo de démo, URL     | `src/data/site.ts`              |
| liens Google Play / App Store / APK      | `src/data/storeLinks.ts`        |
| prix et formules                         | `src/data/plans.ts`             |
| fonctionnalités                          | `src/data/features.ts`          |
| questions fréquentes                     | `src/data/faq.ts`               |
| témoignages (la section apparaît seule)  | `src/data/testimonials.ts`      |
| captures de l'application                | `src/data/screens.ts` + `public/images/app/` |
| confidentialité, conditions, à propos    | `src/data/legal.ts`             |
| couleurs, rayons, espacements            | `src/styles/_theme.scss`, `_variables.scss` |
| effet verre dépoli, motifs               | `src/styles/_glass.scss`, `src/styles/_banner.scss`, `src/assets/patterns/` |

## Pages légales
`src/data/legal.ts` contient des brouillons rédigés. Chaque passage « [À COMPLÉTER : clé] » se remplit
en renseignant `LEGAL_VALUES[clé]`. Tant qu'il en reste, ils s'affichent en surbrillance sur le site, avec
un bandeau « Brouillon ». Faites relire ces textes par un juriste avant la mise en ligne.

## Avant la mise en ligne
- Dans `index.html`, remplacez `VOTRE-DOMAINE.com` (aperçu de partage WhatsApp/Facebook).
- Renseignez `SITE.url` dans `src/data/site.ts` (balises canoniques).
- Déposez `public/downloads/tailix.apk` si vous proposez le téléchargement direct.
- Captures déjà intégrées : accueil, clients, commandes, calendrier (`public/images/app/`). Il manque l'écran Mesures : voir `src/data/screens.ts`.
- Vérifiez que les captures n'affichent que des données de test (noms et numéros de téléphone visibles).
- Le lien App Store contient un identifiant d'exemple : il est masqué tant qu'il n'est pas remplacé.
- Hébergement : `public/_redirects` (Netlify) et `vercel.json` (Vercel) gèrent les routes du site.

## Dossier public
`public/` contient le logo (`brand/`), les captures de l'application (`images/app/`), le badge Google Play,
l'illustration de contact, les icônes et l'image de partage. Utilisez celui du projet (ne le remplacez pas par un ancien).
Les motifs wax, eux, sont dans `src/assets/patterns/` et sont intégrés au code : ils ne dépendent pas de `public/`.

## Bannière et creux de navigation
`src/styles/_banner.scss` dessine la grande bannière arrondie et le creux (en haut à droite) qui accueille la navigation.
La largeur du creux est mesurée automatiquement par `Navbar.tsx` (variable CSS `--notch-w`).
