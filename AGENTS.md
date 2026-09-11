# AGENTS.md — Normes & Invariants du Projet

Guide opérationnel dense à destination des agents autonomes et contributeurs IA.  
**Règle d'or** : Haute densité d'information, zéro bavardage, respect strict des invariants établis.

---

## 1. Philosophie Éditoriale & Écueils Fondamentaux

- **Sobriété et Probité** :
  - **Écueil** : Auto-qualification académique ou commerciale (« Édition critique », « Édition critique textuelle », etc.).
  - **Norme** : **Interdiction absolue** de toute mention auto-glorifiante. Ne jamais dire ce qu'on fait dans l'interface. Afficher sobrement le titre, les auteurs et la date : `Manifest der Kommunistischen Partei` · `Marx & Engels · 1848`.

- **Modalité de Traduction & Décalage Brutaliste** :
  - **Écueil** : Traduction de phrase au survol ou espaces blancs réservés artificiels créant des sauts de ligne entre les phrases en allemand.
  - **Norme** :
    1. **Aucun survol ni clic sur les phrases** : la traduction ne se déclenche jamais au survol d'une phrase. Seuls les mots individuels restent interactifs.
    2. **Mode Allemand Seul (défaut)** : Le paragraphe forme un bloc continu fluide de prose sans aucun espace blanc ni saut de ligne entre les phrases.
    3. **Mode Bilingue (Traduction)** : Activé via les Réglages ou le commutateur d'en-tête `[FR]`. Tout le texte se décale d'un bloc avec une animation de guillotine mécanique brutaliste (`animate-translation-slab`, `clip-path`, ombre `shadow-[3px_3px_0px_0px_#111111]`, accent carré rouge Bauhaus `#D42B1E`, `startViewTransition`).
    4. **Typographie** : Normale (jamais d'italique généralisé) pour respecter la fidélité des emphases du texte original.
  - **Fiche de mot** : La traduction contextuelle est affichée au sommet de l'encart. **Ne jamais ajouter d'encart redondant** de type « Justification du choix de traduction » qui paraphrase la traduction déjà visible.

- **Règle Impérative de Découplage Strict Mot-à-Mot** :
  - **Écueil critique** : Regrouper dans la fiche d'un mot (ex: le nom `Wehmut`) la traduction, le sens littéral ou l'étymologie de mots adjacents (ex: l'adjectif `spießbürgerlichen`, produisant à tort « de la sentimentalité petite-bourgeoise » et commençant l'étymologie par *spießbürgerlich*).
  - **Norme** :
    1. **Un mot = une traduction individuelle** : Chaque mot doit être traduit strictly pour lui-même en contexte (ex: `Wehmut` -> « sentimentalité / mélancolie », et `spießbürgerlichen` -> « petite-bourgeoise / philistine »). Le mot d'à côté ne doit JAMAIS apparaître dans la fiche du mot survolé.
    2. **Étymologie strictement dédiée** : L'étymologie philologique doit concerner EXCLUSIVEMENT le mot survolé. Interdiction d'analyser l'adjectif ou le nom voisin dans l'encart d'un mot distinct.
    3. **Champ `wordIds` unitaire** : Dans `annotations.ts`, `wordIds` doit toujours contenir exclusivement `[wordId]` de la clé annotée (`wordIds: [wordId]`), sans jamais englober les mots voisins.

- **Rigueur Philologique & Étymologique** :
  - **Écueil majeur** : Halluciner des étymologies naïves (ex: décomposer *Pfahlbürger* en *Pfahl + bürger + schaft*, lier *Mannigfaltig* à *Mann*, ou inventer des racines).
  - **Norme** :
    1. Chaque étymologie doit provenir du **DWDS / Wolfgang Pfeifer** (*Etymologisches Wörterbuch des Deutschen*), de **Duden** (*Herkunftswörterbuch*), des **frères Grimm** (*DWB*) ou de **Kluge**.
    2. **Interdiction d'inventer**.
    3. Si l'étymon ultime est débattu ou inconnu, **l'indiquer expressément** : `étymon discuté`, `étymologie incertaine`, ou `origine controversée` (ex: *Zweck*, *bis*, *Tausch*, *Europa*).
    4. Indiquer les formes historiques **en toutes lettres** : « **en vieux haut-allemand** » et « **en moyen haut-allemand** », ainsi que le proto-germanique reconstruit (*). **Proscription absolue des sigles cryptiques `MHA` et `VHA`**, incompréhensibles pour le lecteur.
    5. **Autonomie absolue de chaque encart** : **Interdiction formelle de renvois « voir supra » ou « voir infra »**. L'utilisateur accède aux mots au clic de manière indépendante : chaque mot ou composant d'un terme doit recevoir sa glose explicite et complète directement dans sa propre fiche.

---

## 2. Design System Bauhaus & Ergonomie UI

- **Ligne Directrice** : Style Bauhaus brutaliste (fond canvas `#F7F6F2`, texte `#111111`, bordures noires nettes de 1px à 2px, police grotesque géométrique / monospace).
- **Navigation de Section (Flèches)** :
  - **Écueil** : Flèches flottantes permanentes avec ombres portées qui obstruent le texte pendant la lecture.
  - **Norme** :
    - **Aucune ombre portée** sur les boutons fléchés (`shadow-none`).
    - **Visibilité conditionnelle** : Masquées pendant la lecture (`!isAtTop && !isAtBottom` -> `opacity-0 translate-y-3 pointer-events-none`).
    - Visibles uniquement aux extrémités : en haut de page (`isAtTop: scrollY <= 40`) et en bas de page (`isAtBottom`).
- **Languettes Rétractables** :
  - Pliées contre les bords de l'écran, dépassant à peine, avec déploiement au survol (`group-hover:max-w-...`).
  - Haut gauche : Sommaire (`HammerSickleIcon`).
  - Haut droite : Réglages (`GearIcon`) et Plein écran.
- **Confinement Viewport & Anti-Débordement Bas d'Écran (Tooltips)** :
  - **Écueil** : En bas de page, l'infobulle/fiche de mot dépasse sous la ligne de flottaison de l'écran (`overflow` hors champ), empêchant la lecture de la traduction, de l'analyse ou de l'étymologie.
  - **Norme** :
    1. Middleware `size` de `@floating-ui/react` combiné à `flip` (`fallbackPlacements: ['bottom', 'top-start', ...]`) et `shift({ padding: 12 })`.
    2. Calcul dynamique de `availableHeight` injecté sur `elements.floating.style.maxHeight = \`${Math.max(140, availableHeight)}px\``.
    3. Chaîne CSS Flexbox stricte : conteneur flottant `flex flex-col`, carte motion `flex flex-col max-h-[inherit]`, et corps de texte `flex-1 min-h-0 overflow-y-auto`.
    4. Résultat : l'encart reste 100% visible et scrollable en interne quel que soit le positionnement ou le zoom.

---

## 3. Écueils Techniques React & Architecture

- **Bouclier Anti-Propagation des Événements (`e.stopPropagation()`)** :
  - **Écueil critique** : Dans React, les portails (`FloatingPortal`) propagent les événements synthétiques le long de l'arbre virtuel des composants. Un clic dans un encart (ex: onglet « Étymologie ») remonte au parent `<div onClick={() => handleSentenceClick(sentence.id)}>` et épingle involontairement la phrase sous-jacente.
  - **Norme** : Tout composant flottant (`Tooltip.tsx`, boutons d'onglets, popovers) **doit intercepter** et couper la propagation sur `onClick`, `onMouseDown`, `onMouseUp` et `onPointerDown`. De même sur `InteractiveWord.tsx`.

- **Structure des Données** :
  - `src/types/index.ts` : Types TypeScript stricts (`ManifestoData`, `Chapter`, `Paragraph`, `Sentence`, `Word`, `Annotation`, `Concept`).
  - `src/data/manifesto_de.ts` : Corpus allemand balisé mot à mot (ID déterministe `chX_pY_sZ_wW`, lemme, POS, cas, genre, nombre, temps, préverbes séparables).
  - `src/data/lexicon.ts` : Dictionnaire contextuel, résolutions lemmatiques et règles morphologiques de secours.
  - `src/data/annotations.ts` : Fiches analytiques approfondies (grammaire, étymologie scientifique, notes de syntaxe, cognats).
  - `src/data/concepts.ts` : Graphe conceptuel marxiste et grammatical.

---

## 4. Quality Gates & Commandes Obligatoires

Avant de valider toute modification, **exécuter systématiquement** :

```bash
# Vérification TypeScript et build de production
npm run build

# Linter ultra-rapide Oxlint (0 erreur, 0 avertissement tolérés)
npx oxlint .
```

Si des erreurs surviennent, les corriger immédiatement avant de continuer.
