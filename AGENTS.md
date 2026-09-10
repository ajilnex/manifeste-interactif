# AGENTS.md — Normes & Invariants du Projet

Guide opérationnel dense à destination des agents autonomes et contributeurs IA.  
**Règle d'or** : Haute densité d'information, zéro bavardage, respect strict des invariants établis.

---

## 1. Philosophie Éditoriale & Écueils Fondamentaux

- **Sobriété et Probité** :
  - **Écueil** : Auto-qualification académique ou commerciale (« Édition critique », « Édition critique textuelle », etc.).
  - **Norme** : **Interdiction absolue** de toute mention auto-glorifiante. Ne jamais dire ce qu'on fait dans l'interface. Afficher sobrement le titre, les auteurs et la date : `Manifest der Kommunistischen Partei` · `Marx & Engels · 1848`.

- **Traduction Interlinéaire Contextuelle** :
  - La traduction française de chaque phrase (Laura Lafargue) s'intercale discrètement.
  - **Norme visuelle** : Surface grisée sobre (`bg-[#E8E8E1]`), bordure latérale sobre, **typographie normale** (jamais d'italique généralisé afin de respecter les italiques du texte original allemand).
  - **Fiche de mot** : La traduction contextuelle est affichée au sommet de l'encart. **Ne jamais ajouter d'encart redondant** de type « Justification du choix de traduction » qui paraphrase la traduction déjà visible.

- **Rigueur Philologique & Étymologique** :
  - **Écueil majeur** : Halluciner des étymologies naïves (ex: décomposer *Pfahlbürger* en *Pfahl + bürger + schaft*, lier *Mannigfaltig* à *Mann*, ou inventer des racines).
  - **Norme** :
    1. Chaque étymologie doit provenir du **DWDS / Wolfgang Pfeifer** (*Etymologisches Wörterbuch des Deutschen*), de **Duden** (*Herkunftswörterbuch*), des **frères Grimm** (*DWB*) ou de **Kluge**.
    2. **Interdiction d'inventer**.
    3. Si l'étymon ultime est débattu ou inconnu, **l'indiquer expressément** : `étymon discuté`, `étymologie incertaine`, ou `origine controversée` (ex: *Zweck*, *bis*, *Tausch*, *Europa*).
    4. Indiquer le vieux haut-allemand (VHA), le moyen haut-allemand (MHA) et le proto-germanique reconstruit (*).

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
