# Manifest der Kommunistischen Partei — Lecteur Interactif & Philologique

Application web interactive d'apprentissage de l'allemand et d'analyse textuelle du *Manifeste du Parti communiste* (Karl Marx & Friedrich Engels, 1848).

Conçue selon les principes esthétiques du **Bauhaus brutaliste** (typographie grotesque géométrique, mise en page épurée, contrastes stricts), la plateforme offre une immersion textuelle bilingue assistée par une analyse grammaticale et philologique exhaustive mot à mot.

---

## Fonctionnalités Clés

- **Analyse Morphematique & Syntaxique Mot à Mot** : Chaque mot du texte allemand original (édition de référence MEW 4) est annoté avec son lemme, sa catégorie grammaticale, son cas, genre, nombre et temps, ainsi que son rôle fonctionnel précis dans la proposition.
- **Étymologie Philologique Rigoureuse** : Fiches historiques et comparatives fondées sur les dictionnaires de référence de la langue allemande (**DWDS / Wolfgang Pfeifer**, **Duden**, **Grimm**, **Kluge**). Traçabilité des racines vieil haut-allemand (VHA), moyen haut-allemand (MHA) et proto-germanique, avec mention explicite des étymons incertains ou discutés.
- **Traduction Française Contextuelle Intercalée** : Traduction historique de Laura Lafargue intégrée au sein du flux de lecture, avec activation au survol, épinglage par clic sur la phrase, ou affichage permanent via les réglages.
- **Réseau Conceptuel & Notes Philosophiques** : Dépliage direct des concepts théoriques du matérialisme historique (*Klassenkampf*, *Bourgeoisie*, *Proletariat*, *Produktionsverhältnisse*, etc.) et excursus contextuels.
- **Interface Bauhaus Épurée** :
  - Languette Sommaire rétractable sur le bord supérieur gauche.
  - Languettes Réglages et Plein écran sur le bord supérieur droit.
  - Flèches de navigation de section déployables, affichées uniquement aux extrémités de page pour garantir une lecture exempte de toute distraction visuelle.

---

## Stack Technique

- **Framework** : [React](https://react.dev/) 19 & [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Outillage** : [Vite](https://vitejs.dev/) & [Oxlint](https://oxc.rs/)
- **Styles** : [Tailwind CSS](https://tailwindcss.com/)
- **Micro-animations & Positionnement** : [Framer Motion](https://www.framer.com/motion/) & [@floating-ui/react](https://floating-ui.com/)

---

## Démarrage Rapide

```bash
# Installation des dépendances
npm install

# Lancement du serveur de développement local
npm run dev

# Construction pour la production
npm run build

# Analyse du code avec Oxlint
npx oxlint .
```

---

## Directives pour les Agents IA

Les règles strictes d'implémentation, les écueils techniques répertoriés (notamment la gestion des événements React sur les portails flottants) et les normes philologiques sont documentés dans [AGENTS.md](./AGENTS.md).
