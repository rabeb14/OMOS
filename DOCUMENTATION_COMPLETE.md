# Documentation Complète du Projet OMOS

## Table des Matières

1. [Stack Technologique](#stack-technologique)
2. [Structure du Projet](#structure-du-projet)
3. [Architecture Globale](#architecture-globale)
4. [Système de Routage](#système-de-routage)
5. [Système de Traduction](#système-de-traduction)
6. [Système de Thèmes](#système-de-thèmes)
7. [Composants Layout](#composants-layout)
8. [Sections Principales](#sections-principales)
9. [Pages Individuelles](#pages-individuelles)
10. [Configuration et Dépendances](#configuration-et-dépendances)

---

## Stack Technologique

### Framework et Langage
- **Next.js 16.2.4** - Framework React pour applications web avec rendu côté serveur
- **React 19.2.4** - Bibliothèque JavaScript pour construire des interfaces utilisateur
- **TypeScript 5** - Superset typé de JavaScript pour un code plus robuste

### Styling
- **TailwindCSS 4.2.4** - Framework CSS utility-first pour un styling rapide et responsive
- **PostCSS 8.5.10** - Outil de transformation CSS avec Autoprefixer
- **CSS Modules** - Pour un styling scoped

### Animations
- **Framer Motion 12.38.0** - Bibliothèque d'animations React pour des transitions fluides

### Utilitaires
- **html2canvas 1.4.1** - Capture d'écran de DOM vers canvas
- **jspdf 4.2.1** - Génération de PDF côté client

### Développement
- **ESLint 9** - Linter JavaScript/TypeScript
- **TypeScript Compiler** - Compilation TypeScript

---

## Structure du Projet

```
OMOS/
├── app/                          # Répertoire principal de l'application Next.js (App Router)
│   ├── business/                 # Page "Nos Activités" (Business)
│   ├── components/               # Composants réutilisables
│   │   ├── layout/              # Composants de layout global
│   │   │   ├── Footer.tsx       # Footer de l'application
│   │   │   └── Navbar.tsx       # Barre de navigation
│   │   ├── providers/           # Context providers
│   │   │   └── ThemeProvider.tsx # Provider pour le thème clair/sombre
│   │   └── sections/            # Sections de la page d'accueil
│   │       ├── Contact.tsx      # Section Contact
│   │       ├── Hero.tsx         # Section Hero (bannière principale)
│   │       ├── History.tsx      # Section Histoire
│   │       ├── HolisticMaintenance.tsx # Section Activités (Business)
│   │       ├── HSSE.tsx         # Section QHSSE
│   │       ├── PhilosophyVision.tsx # Section Philosophie & Vision
│   │       └── References.tsx   # Section Références
│   ├── contact/                  # Page Contact
│   │   └── page.tsx            # Page de contact
│   ├── context/                  # Contexts React
│   │   └── LanguageContext.tsx  # Context pour la langue (en/fr)
│   ├── globals.css              # Styles globaux et TailwindCSS
│   ├── history/                  # Page Histoire
│   │   └── page.tsx            # Page d'histoire
│   ├── hsse/                     # Page QHSSE
│   │   └── page.tsx            # Page QHSSE
│   ├── layout.tsx                # Layout racine de l'application
│   ├── lib/                      # Bibliothèques et utilitaires
│   │   └── dictionaries.ts      # Fichier de traductions (en/fr)
│   ├── page.tsx                  # Page d'accueil principale
│   ├── partners/                 # Page Partenaires
│   │   └── page.tsx            # Page des partenaires
│   ├── philosophy/               # Page Philosophie
│   │   └── page.tsx            # Page Philosophie & Vision
│   └── references/               # Page Références
│       └── page.tsx            # Page des références
├── public/                       # Fichiers statiques
│   ├── images/                   # Images du site (logos, photos, etc.)
│   ├── favicon.ico              # Icône du site
│   └── ...                      # Autres assets statiques
├── .gitignore                   # Fichiers ignorés par Git
├── next.config.ts               # Configuration Next.js
├── package.json                # Dépendances du projet
├── postcss.config.mjs          # Configuration PostCSS
├── README.md                   # Documentation du projet
├── tsconfig.json               # Configuration TypeScript
└── node_modules/               # Dépendances npm (généré)
```

---

## Architecture Globale

### Pattern Architectural
Le projet suit une architecture **Next.js App Router** avec les caractéristiques suivantes:

1. **Routage basé sur le système de fichiers** - Chaque dossier dans `app/` correspond à une route
2. **Composants modulaires** - Séparation entre layout, sections et pages
3. **Context API** - Gestion de l'état global (langue, thème)
4. **Server Components par défaut** - Optimisation des performances
5. **Client Components sélectifs** - Pour l'interactivité (animations, formulaires)

### Flux de Données

```
User Request → Next.js Router → Page Component
                              ↓
                         Context Providers
                              ↓
                         Layout Components
                              ↓
                         Section Components
                              ↓
                         Dictionaries (i18n)
```

---

## Système de Routage

### App Router Next.js

Le projet utilise le **Next.js App Router** introduit dans Next.js 13+:

#### Routes Principales
- `/` - Page d'accueil (`app/page.tsx`)
- `/history` - Page Histoire (`app/history/page.tsx`)
- `/philosophy` - Page Philosophie (`app/philosophy/page.tsx`)
- `/business` - Page Activités (`app/business/page.tsx`)
- `/hsse` - Page QHSSE (`app/hsse/page.tsx`)
- `/partners` - Page Partenaires (`app/partners/page.tsx`)
- `/references` - Page Références (`app/references/page.tsx`)
- `/contact` - Page Contact (`app/contact/page.tsx`)

#### Navigation
La navigation utilise le composant `Link` de Next.js pour la navigation côté client avec préchargement des pages:

```typescript
import Link from "next/link";

<Link href="/history">History</Link>
```

#### Navigation avec Ancres
Pour la navigation vers des sections spécifiques, des ancres sont utilisées:

```typescript
<Link href="/#history">History</Link>
```

---

## Système de Traduction

### Architecture i18n

Le projet implémente un système de traduction personnalisé basé sur:

#### Fichier de Dictionnaires
**Fichier:** `app/lib/dictionaries.ts`

```typescript
export type Lang = "en" | "fr";

export const dict = {
  en: {
    nav: { ... },
    hero: { ... },
    history: { ... },
    // ...
  },
  fr: {
    nav: { ... },
    hero: { ... },
    history: { ... },
    // ...
  }
};
```

#### Context Language
**Fichier:** `app/context/LanguageContext.tsx`

```typescript
const LanguageContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
}>({ lang: "en", setLang: () => {} });
```

**Fonctionnalités:**
- État global de la langue (en/fr)
- Fonction `setLang` pour changer la langue
- Hook `useLanguage` pour accéder au contexte

#### Utilisation dans les Composants

```typescript
const { lang } = useLanguage();
const d = dict[lang as keyof typeof dict].sectionName;
```

#### Langues Supportées
- **Anglais (en)** - Langue par défaut
- **Français (fr)** - Traduction complète

#### Sections Traduites
- Navigation (nav)
- Hero (hero)
- Histoire (history)
- Philosophie & Vision (philosophy)
- Activités (business)
- Contact (contact)
- Références (references)
- QHSSE (hsse)
- Certificats (certificates)
- Galerie Photos (photos)

---

## Système de Thèmes

### Architecture Dark/Light Mode

#### Theme Provider
**Fichier:** `app/components/providers/ThemeProvider.tsx`

```typescript
const ThemeContext = createContext<{
  theme: "light" | "dark";
  toggleTheme: () => void;
}>({ theme: "light", toggleTheme: () => {} });
```

**Fonctionnalités:**
- État global du thème (light/dark)
- Fonction `toggleTheme` pour basculer
- Persistance dans localStorage
- Hook `useTheme` pour accéder au contexte

#### Classes Tailwind pour Thèmes

Le projet utilise les classes Tailwind pour le mode sombre:

```typescript
className="bg-white dark:bg-brand-950"
className="text-gray-900 dark:text-white"
```

#### Variables CSS
**Fichier:** `app/globals.css`

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

.dark {
  --background: #003554;
  --foreground: #ededed;
}
```

#### Toggle dans Navbar
Le bouton de changement de thème est intégré dans la barre de navigation:

```typescript
<button onClick={toggleTheme}>
  {theme === "light" ? "🌙" : "☀️"}
</button>
```

---

## Composants Layout

### Navbar
**Fichier:** `app/components/layout/Navbar.tsx`

**Fonctionnalités:**
- Navigation responsive (desktop et mobile)
- Menu hamburger pour mobile
- Toggle de thème (light/dark)
- Toggle de langue (en/fr)
- Lien vers la page d'accueil avec logo
- Navigation vers toutes les sections/pages

**Structure:**
```typescript
<nav>
  - Logo (desktop et mobile)
  - Desktop Menu (hidden on mobile)
    - Links to sections/pages
    - Language toggle
    - Theme toggle
  - Mobile Menu (hidden on desktop)
    - Hamburger button
    - Mobile menu overlay
    - Links to sections/pages
    - Language toggle
    - Theme toggle
</nav>
```

### Footer
**Fichier:** `app/components/layout/Footer.tsx`

**Fonctionnalités:**
- Layout responsive (desktop et mobile)
- Colonnes d'informations
- Liens vers les sections principales
- Informations de contact
- Copyright

**Structure:**
```typescript
<footer>
  - Desktop Layout (hidden on mobile)
    - Multiple columns
    - Contact info
    - Links
  - Mobile Layout (hidden on desktop)
    - Compact single row
    - Essential links
</footer>
```

---

## Sections Principales

### Hero Section
**Fichier:** `app/components/sections/Hero.tsx`

**Description:** Section principale de la page d'accueil avec une image de fond et un appel à l'action.

**Contenu:**
- Image de fond avec overlay
- Logo OMOS
- Titre principal (2 parties)
- Sous-titre descriptif
- Boutons CTA (Get Started, Contact Us)

**Animations:**
- Entrée progressive avec Framer Motion
- Effet de scale et opacity

**Responsive:**
- Padding adaptatif
- Taille de police responsive
- Layout flex column sur mobile

### History Section
**Fichier:** `app/components/sections/History.tsx`

**Description:** Timeline interactive montrant l'histoire de l'entreprise avec des jalons interactifs.

**Contenu:**
- Timeline horizontale avec 4 jalons
- Carte de contenu dynamique
- Dates et titres des jalons
- Descriptions détaillées

**Jalons:**
1. 1992-2017: 25 Years of Operational Excellence
2. 2017: ETPAK Foundation
3. 2022: Launching OMOS
4. 2026: International Expansion

**Animations:**
- Transition entre jalons avec AnimatePresence
- Animation de la timeline
- Effets hover sur les jalons

**Interactive:**
- Clic sur les jalons pour changer le contenu
- État local pour le jalon actif

### Philosophy & Vision Section
**Fichier:** `app/components/sections/PhilosophyVision.tsx`

**Description:** Section présentant la philosophie et les piliers de l'entreprise.

**Contenu:**
- Image de fond avec overlay
- Titre et sous-titre
- 4 principes fondamentaux (cartes)
- 3 piliers principaux (cartes détaillées)

**Principes:**
1. Listening is the Key to Understanding
2. We Deliver What We Promise
3. Positive Relationships
4. Expertise and Efficiency

**Piliers:**
1. People
2. Performance
3. Partnerships

**Animations:**
- Entrée progressive des cartes
- Effets hover avec élévation
- Stagger animations

**Responsive:**
- Grid responsive (1-2-4 colonnes)
- Padding adaptatif

### Holistic Maintenance (Business) Section
**Fichier:** `app/components/sections/HolisticMaintenance.tsx`

**Description:** Section interactive présentant les services de l'entreprise avec une image interactive et des hotspots.

**Contenu:**
- Image centrale avec hotspots cliquables
- Cartes de services à gauche et droite
- 5 services principaux

**Services:**
1. General Maintenance
2. Storage Tank Services
3. Pipeline Services
4. Fleet & Rotating Equipment
5. Explosion-Proof Equipment

**Interactive:**
- Hotspots sur l'image
- Cartes avec détails au hover/clic
- Layout grid 3 colonnes (desktop)

**Responsive:**
- Desktop: Grid layout avec image centrale
- Mobile: Stack layout avec image et cartes

### HSSE Section
**Fichier:** `app/components/sections/HSSE.tsx`

**Description:** Section QHSSE (Quality, Health, Safety, Environment) avec images et certificats.

**Contenu:**
- Titre et sous-titre
- Grille d'images QHSSE
- Section certificats avec images

**Images:**
- Safety images
- Environment images
- Certificate images

**Responsive:**
- Grid responsive (1-2-3 colonnes)
- Padding adaptatif

### References Section
**Fichier:** `app/components/sections/References.tsx`

**Description:** Galerie interactive de références de projets avec navigation par images.

**Contenu:**
- Liste de services à gauche
- Image principale au centre
- Liste de services à droite
- Navigation (précédent/suivant)
- Miniatures

**Services:**
- Pipe racks
- Pipeline Integrity
- Pipeline Cleaning
- Pipeline Intelligent pigging
- Pipeline repair
- Specialized Welding & Fabrication
- Storage tanks
- Fleet & Rotating Equipment maintenance
- Logistics Support Base

**Interactive:**
- Navigation entre projets
- Sélection de services
- Hover effects

**Responsive:**
- Desktop: 3 colonnes
- Mobile: Stack layout

### Contact Section
**Fichier:** `app/components/sections/Contact.tsx`

**Description:** Section de contact avec informations et carte Google Maps.

**Contenu:**
- Titre et sous-titre
- 2 cartes d'informations (Tunisie, Libye)
- Carte Google Maps intégrée

**Informations:**
- Adresse Tunisie
- Adresse Libye
- Téléphone
- Email

**Responsive:**
- Grid 2 colonnes (desktop)
- Stack layout (mobile)

---

## Pages Individuelles

### Page d'Accueil
**Fichier:** `app/page.tsx`

**Description:** Page principale combinant Hero et History sections.

**Contenu:**
- Hero Section
- History Section

**Layout:**
```typescript
<main>
  <Hero />
  <History />
</main>
```

### Page History
**Fichier:** `app/history/page.tsx`

**Description:** Page dédiée à l'histoire de l'entreprise.

**Contenu:**
- Section History complète

### Page Philosophy
**Fichier:** `app/philosophy/page.tsx`

**Description:** Page dédiée à la philosophie et vision de l'entreprise.

**Contenu:**
- Section Philosophy & Vision complète

### Page Business
**Fichier:** `app/business/page.tsx`

**Description:** Page dédiée aux activités de l'entreprise.

**Contenu:**
- Section Holistic Maintenance complète

### Page HSSE
**Fichier:** `app/hsse/page.tsx`

**Description:** Page dédiée aux politiques QHSSE.

**Contenu:**
- Section HSSE complète

### Page Partners
**Fichier:** `app/partners/page.tsx`

**Description:** Page présentant les partenaires de l'entreprise.

**Contenu:**
- Navigation par logos de partenaires
- Cartes de partenaires avec produits
- Statistiques
- CTA section

**Partenaires:**
- Cortem Group
- HIZEN
- Autres partenaires

**Interactive:**
- Navigation par logos
- Tabs pour les produits multiples
- Animations de transition

### Page References
**Fichier:** `app/references/page.tsx`

**Description:** Page dédiée aux références de projets.

**Contenu:**
- Section References complète

### Page Contact
**Fichier:** `app/contact/page.tsx`

**Description:** Page de contact.

**Contenu:**
- Section Contact complète

---

## Configuration et Dépendances

### package.json

**Dépendances principales:**
```json
{
  "dependencies": {
    "framer-motion": "^12.38.0",
    "html2canvas": "^1.4.1",
    "jspdf": "^4.2.1",
    "next": "16.2.4",
    "react": "19.2.4",
    "react-dom": "19.2.4"
  }
}
```

**Dépendances de développement:**
```json
{
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "autoprefixer": "^10.5.0",
    "eslint": "^9",
    "eslint-config-next": "16.2.4",
    "postcss": "^8.5.10",
    "tailwindcss": "^4.2.4",
    "typescript": "^5"
  }
}
```

### Scripts npm

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  }
}
```

### tsconfig.json

**Configuration TypeScript:**
- Target: ES2017
- Lib: dom, dom.iterable, esnext
- Strict mode activé
- JSX: react-jsx
- Module resolution: bundler
- Path alias: `@/*` → `./*`

### next.config.ts

Configuration Next.js par défaut avec possibilité d'ajouter des options personnalisées.

### postcss.config.mjs

Configuration PostCSS avec TailwindCSS et Autoprefixer.

---

## Styles Globaux

### globals.css

**Contenu:**
- Imports TailwindCSS
- Variables CSS pour les thèmes
- Reset CSS cross-browser
- Fixes spécifiques Safari
- Variants personnalisées

**Fixes Safari:**
- box-sizing: border-box
- overflow-x: hidden
- text-justify fix
- backdrop-blur support
- flexbox fixes

**Variables de thème:**
```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

.dark {
  --background: #003554;
  --foreground: #ededed;
}
```

---

## Assets Statiques

### public/

**Images principales:**
- Logo: `logo1.png`
- Hero: `hero3.png`, `hero2.png`, `newhero1.jpeg`
- Partenaires: `cortem.png`, `hizen.png`
- Business: `business2.png`
- Certificats: `certif1.png`, `certif2.png`, `certif3.png`
- Services: `pipe rak.png`, `storage tanks.png`, `pigging.png`, etc.
- Projets: `test.png`, `test1.png` à `test15.png`

**Icônes:**
- `vercel.svg`
- `next.svg`
- `globe.svg`
- `window.svg`

---

## Optimisations

### Performance
- Server Components par défaut
- Image optimization avec Next.js Image
- Lazy loading des images
- Code splitting automatique
- Préchargement des pages

### SEO
- Meta tags configurables
- Semantic HTML
- Alt text pour les images
- Structure de navigation claire

### Accessibilité
- Contraste des couleurs
- Navigation au clavier
- ARIA labels où nécessaire
- Responsive design

### Cross-Browser
- Fixes Safari spécifiques
- CSS reset complet
- Prefixes automatiques (Autoprefixer)
- Fallbacks pour les animations

---

## Développement

### Commandes

**Démarrer le serveur de développement:**
```bash
npm run dev
```

**Construire pour la production:**
```bash
npm run build
```

**Démarrer le serveur de production:**
```bash
npm start
```

**Linter:**
```bash
npm run lint
```

### Structure de Code

**Conventions:**
- TypeScript pour tous les fichiers
- Components en PascalCase
- Fonctions en camelCase
- Classes Tailwind pour le styling
- Framer Motion pour les animations

**Best Practices:**
- Séparation des composants
- Réutilisation des composants
- Context pour l'état global
- Props typées avec TypeScript
- Comments pour le code complexe

---

## Déploiement

### Recommandations

**Vercel:**
- Déploiement recommandé pour Next.js
- Configuration automatique
- CDN intégré
- HTTPS par défaut

**Autres plateformes:**
- Netlify
- AWS Amplify
- DigitalOcean App Platform

**Configuration requise:**
- Node.js 18+
- npm ou yarn
- Variables d'environnement (si nécessaire)

---

## Maintenance

### Mises à jour

**Dépendances:**
```bash
npm update
```

**Audits de sécurité:**
```bash
npm audit
npm audit fix
```

### Tests

Recommandé d'ajouter:
- Tests unitaires (Jest)
- Tests E2E (Playwright)
- Tests de composants (React Testing Library)

---

## Conclusion

Ce projet OMOS est une application web moderne construite avec Next.js, React et TypeScript. Il présente une architecture modulaire et scalable avec:

- **Routage App Router** pour une navigation fluide
- **Système i18n** pour le support multilingue
- **Thèmes light/dark** pour une expérience utilisateur personnalisée
- **Animations fluides** avec Framer Motion
- **Design responsive** avec TailwindCSS
- **Performance optimisée** avec Server Components
- **Cross-browser compatibility** avec fixes Safari spécifiques

Le code est bien structuré, modulaire et suit les best practices de l'écosystème React/Next.js.
