export interface GrammarPoint {
  label: string;
  explanation: string;
  example?: {
    de: string;
    fr: string;
    highlight?: string;
  };
}

export interface GrammarPanelData {
  title: string;
  points: GrammarPoint[];
}

export const GRAMMAR_PANELS: Record<string, GrammarPanelData> = {
  v2_word_order: {
    title: 'La règle V2 : le verbe en deuxième position syntaxique',
    points: [
      {
        label: 'Principe fondamental de la syntaxe allemande',
        explanation: 'Dans une proposition principale déclarative, le verbe conjugué occupe toujours la deuxième position fonctionnelle (Verbzweitstellung). Il ne s\'agit pas nécessairement du deuxième mot, mais du deuxième constituant syntaxique.',
        example: {
          de: 'Ein Gespenst geht um in Europa.',
          fr: 'Un spectre hante l\'Europe.',
          highlight: 'geht',
        },
      },
      {
        label: 'Inversion sujet-verbe obligatoire',
        explanation: 'Lorsqu\'un constituant autre que le sujet ouvre la phrase (complément circonstanciel, objet, adverbe), le sujet est immédiatement postposé après le verbe conjugué pour préserver la position 2.',
        example: {
          de: 'Alle Mächte des alten Europa haben sich [...] verbündet.',
          fr: 'Toutes les puissances de la vieille Europe se sont liguées [...].',
        },
      },
    ],
  },
  german_cases: {
    title: 'Les quatre cas et la morphologie flexionnelle',
    points: [
      {
        label: 'Fonction de la flexion casuelle',
        explanation: 'L\'allemand signale les relations grammaticales par quatre cas (Nominatif, Accusatif, Datif, Génitif) marqués sur les articles, les adjectifs et certaines désinences nominales, plutôt que par l\'ordre rigide des mots.',
      },
      {
        label: 'Nominatif : sujet et attribut du sujet',
        explanation: 'Forme fondamentale du dictionnaire.',
        example: {
          de: 'Ein Gespenst geht um.',
          fr: 'Un spectre hante.',
        },
      },
      {
        label: 'Accusatif : complément d\'objet direct et direction',
        explanation: 'Marque le patient de l\'action ou le but d\'un mouvement.',
      },
      {
        label: 'Datif : attribution et localisation statique',
        explanation: 'Marque le récepteur ou la localisation sans déplacement (notamment après in, an, auf, aus, bei, mit, nach, von, zu).',
      },
      {
        label: 'Génitif : complément déterminatif du nom',
        explanation: 'Indique la dépendance ou la qualification (équivalent du complément de nom français). Très fréquent dans la prose philosophique de Marx.',
        example: {
          de: 'Manifest der Kommunistischen Partei',
          fr: 'Manifeste du Parti communiste',
        },
      },
    ],
  },
  compound_nouns: {
    title: 'Les composés nominaux (Komposita)',
    points: [
      {
        label: 'Mécanisme de composition',
        explanation: 'L\'allemand soude plusieurs radicaux nominaux en une unité lexicale unique. L\'élément final détermine le genre et la catégorie centrale du mot, tandis que les éléments antérieurs le spécifient.',
        example: {
          de: 'Klassenkampf = Klassen + Kampf',
          fr: 'Lutte de classes = classes + lutte',
        },
      },
      {
        label: 'Règle de lecture inverse',
        explanation: 'Pour analyser un composé allemand, il convient de le décomposer de droite à gauche : le dernier terme est le noyau sémantique, les précédents sont ses déterminants.',
        example: {
          de: 'Produktionsverhältnisse = Produktion + s + Verhältnisse',
          fr: 'Rapports de production',
        },
      },
    ],
  },
  subjunctive_subclause: {
    title: 'Le Subjonctif II passé et la négation polémique dans les relatives',
    points: [
      {
        label: 'Structure du subjonctif II au passif et à l\'actif',
        explanation: 'Marx recourt à deux tournures virtuoses au subjonctif II pour formuler ses interrogations rhétoriques : 1° Au passif : "verschrien worden wäre" (aurait été décrié). L\'auxiliaire sein conjugué en subjonctif II ("wäre") clôt la proposition relative. 2° À l\'actif : "zurückgeschleudert hätte" (aurait renvoyé / catapulté en retour). Le subjonctif II passé exprime ici l\'impossibilité théorique et pratique de concevoir la moindre exception.',
        example: {
          de: '...die nicht [...] als kommunistisch verschrien worden wäre?',
          fr: '...qui n\'eût pas été accusée de communisme ?',
        },
      },
      {
        label: 'Rejet du groupe verbal en queue de proposition relative',
        explanation: 'Dans toute subordonnée introduite par un pronom relatif ("die"), tous les éléments verbaux sont rejetés en toute fin de phrase (règle du verbe final). Le participe passé précède l\'auxiliaire conjugué ("worden wäre", "zurückgeschleudert hätte").',
      },
    ],
  },
  verbal_prefixes: {
    title: 'Morphologie lexicale : la force expressive des préfixes verbaux',
    points: [
      {
        label: 'Préfixes inséparables porteurs d\'une charge sémantique forte',
        explanation: 'Les préfixes allemands modifient radicalement le verbe de base : "ver-" marque souvent l\'achèvement définitif, l\'éloignement ou l\'altération péjorative (verbünden = sceller une alliance indissoluble ; verschreien = flétrir par la clameur publique ; verdrängen = refouler par pression impitoyable) ; "zer-" indique la destruction en miettes (zerfallen = s\'effondrer en ruines, se disloquer) ; "ent-" indique le surgissement ou le détachement (entwerfen = jeter les premiers traits, esquisser).',
        example: {
          de: 'zerfallenden feudalen Gesellschaft',
          fr: 'société féodale en décomposition / dissolution',
        },
      },
      {
        label: 'Préfixes séparables à valeur directionnelle et spatiale',
        explanation: 'Les préfixes d\'orientation spatiale (um-, hervor-, entgegen-, zurück-) se détachent aux temps simples pour clore le cadre syntaxique (Satzklammer) : um|gehen (tourner autour / hanter), hervor|gehen (jaillir hors de / résulter), entgegen|stellen (dresser en face), zurück|schleudern (catapulter en retour).',
        example: {
          de: 'Ein Gespenst geht um [...] in Europa.',
          fr: 'Un spectre hante l\'Europe.',
        },
      },
    ],
  },
};

export interface PhilosophyNoteData {
  title: string;
  termDe: string;
  termFr: string;
  content: string;
  context?: string;
  furtherReading?: string;
}

export const PHILOSOPHY_NOTES: Record<string, PhilosophyNoteData> = {
  gespenst: {
    title: 'Le Spectre (das Gespenst) et la dialectique de la peur',
    termDe: 'Gespenst',
    termFr: 'spectre / fantôme',
    content: 'Marx ouvre le Manifeste par une métaphore saisissante : le communisme est un « spectre » (Gespenst). Cette métaphore n\'est pas purement rhétorique : elle dramatise le fait que le communisme n\'est pas encore constitué en État, mais agit déjà comme une force historique réelle et obsédante dans la conscience paniquée des classes dirigeantes.',
    context: 'En 1848, le communisme n\'a pas encore de législation ni d\'armée : sa force réside dans la peur objective qu\'inspirent les contradictions du capitalisme à l\'oligarchie féodale et bourgeoise.',
    furtherReading: 'Jacques Derrida, « Spectres de Marx » (Galilée, 1993) sur la figure de la spectralité politique.',
  },
  klassenkampf: {
    title: 'La lutte des classes (der Klassenkampf) comme moteur historique',
    termDe: 'Klassenkampf',
    termFr: 'lutte des classes',
    content: 'Formulation centrale du matérialisme historique : l\'histoire humaine écrite n\'est pas le reflet de principes moraux ou d\'affrontements religieux, mais le déroulement objectif des antagonismes matériels entre classes possédantes et classes exploitées (hommes libres et esclaves, barons et serfs, bourgeois et prolétaires).',
    context: 'La formule liminaire « Die Geschichte aller bisherigen Gesellschaft ist die Geschichte von Klassenkämpfen » rompt avec l\'idéalisme hégélien pour asseoir l\'analyse sur les rapports de production.',
    furtherReading: 'Karl Marx, « Le 18 Brumaire de Louis Bonaparte » (1852).',
  },
  bourgeoisie: {
    title: 'La Bourgeoisie moderne et sa dynamique révolutionnaire',
    termDe: 'Bourgeoisie',
    termFr: 'bourgeoisie',
    content: 'Chez Marx et Engels, la bourgeoisie désigne la classe des capitalistes modernes qui détiennent les moyens de production sociale et emploient le travail salarié. Le Manifeste lui attribue un rôle historiquement révolutionnaire sans précédent : elle a brisé les illusions féodales patriarcales, unifié le marché mondial et développé les forces productives, tout en créant la classe qui provoquera sa fin.',
    context: 'Le Chapitre I décrit comment le grand commerce transatlantique et la mécanisation industrielle ont détruit l\'ordre corporatif médiéval au profit du capital.',
  },
  proletariat: {
    title: 'Le Prolétariat (das Proletariat) : la classe sans réserves',
    termDe: 'Proletariat',
    termFr: 'prolétariat',
    content: 'Issu du latin « proletarius » (le citoyen dont la seule descendance constitue la richesse), le prolétariat chez Marx désigne la classe des travailleurs modernes qui ne possèdent aucun moyen de production et sont contraints de vendre leur force de travail comme marchandise sur le marché.',
    context: 'Pour Marx, le prolétariat est la classe universelle par excellence : son émancipation ne peut être corporative ou partielle, elle implique l\'abolition de tout rapport de classe.',
  },
  aufhebung: {
    title: "L'Aufhebung dialectique : supprimer, conserver, élever",
    termDe: 'aufheben / Aufhebung',
    termFr: 'dépassement dialectique / abolition créatrice',
    content: "« Aufheben » est le concept le plus célèbre et le plus intraduisible de la philosophie classique allemande. Chez Hegel, le verbe possède trois dimensions simultanées : 1° Supprimer / anéantir (comme on annule un décret), 2° Conserver / garder en mémoire (comme on conserve un fruit), 3° Élever à un palier supérieur d'organisation et de conscience. Quand Marx écrit que la société bourgeoise « n'a pas aboli (nicht aufgehoben) les antagonismes de classe », il signifie qu'elle ne les a ni résolus, ni portés à une synthèse supérieure : elle s'est bornée à remplacer les anciennes chaînes féodales par le rapport froid du salariat marchand.",
    context: "Marx utilise le vocabulaire hégélien pour retourner la dialectique sur ses pieds matériels : seule la révolution prolétarienne accomplira l'Aufhebung de la division du travail et de la propriété privée.",
    furtherReading: "G.W.F. Hegel, « Science de la logique » (1812), remarque sur l'Aufheben ; Karl Marx, « Manuscrits de 1844 ».",
  },
  pfahlbuerger: {
    title: 'Les Pfahlbürger et la genèse spatiale de la bourgeoisie',
    termDe: 'Pfahlbürger',
    termFr: 'bourgeois forains / bourgeois du palis',
    content: "Dans les cités d'Europe centrale du Moyen Âge, les « Pfahlbürger » (bourgeois du palis, de Pfahl = pieu, palissade) étaient les habitants roturiers établis hors de l'enceinte de pierre fortifiée, dans la zone protégée par une palissade de pieux de bois. Fuyant le servage seigneurial des campagnes, ils gagnaient les faubourgs urbains où s'appliquait le proverbe juridique allemand : « Stadtluft macht frei » (L'air de la ville rend libre). Ils jouissaient des franchises juridiques urbaines tout en restant en marge de l'oligarchie corporative intramuros.",
    context: "Marx met en lumière le matérialisme historique spatial : la bourgeoisie moderne n'est pas née dans les palais princiers, mais aux marges physiques et économiques de la féodalité, par l'émancipation commerciale d'anciens serfs fugitifs.",
    furtherReading: "Max Weber, « La Ville » (1921) sur la typologie des citoyennetés urbaines médiévales.",
  },
  weltmarkt: {
    title: "Le Marché mondial (der Weltmarkt) et l'unification planétaire du capital",
    termDe: 'Weltmarkt',
    termFr: 'marché mondial',
    content: "Pour Marx, le « Weltmarkt » n'est pas simplement une extension géographique du commerce extérieur, mais le résultat et la condition même du mode de production capitaliste. En reliant les continents par la vapeur, la navigation transatlantique et les voies ferrées, la grande industrie brise l'étroitesse corporative et provinciale, subordonnant l'ensemble des échanges à la loi de la valeur.",
    context: "Le Manifeste montre comment la découverte de l'Amérique et la circumnavigation de l'Afrique ont préparé ce marché mondial que la grande industrie a achevé d'ériger en puissance universelle.",
    furtherReading: "Karl Marx, « Grundrisse » (1857-1858) sur la tendance du capital à créer le marché mondial.",
  },
  repraesentativstaat: {
    title: "L'État représentatif moderne (der moderne Repräsentativstaat)",
    termDe: 'Repräsentativstaat / Staatsgewalt',
    termFr: 'État représentatif / pouvoir d\'État',
    content: "Dans l'une des formules politiques les plus célèbres du Manifeste, Marx déconstruit l'illusion d'un État neutre ou arbitre au-dessus de la société : « Die moderne Staatsgewalt ist nur ein Ausschuß, der die gemeinschaftlichen Geschäfte der ganzen Bourgeoisklasse verwaltet » (Le pouvoir exécutif moderne n'est qu'un comité qui gère les affaires communes de toute la classe bourgeoise). Les institutions représentatives consacrent juridiquement la domination économique du capital.",
    context: "En 1848, face aux illusions républicaines bourgeoises, Marx souligne que l'État constitutionnel moderne organise les intérêts généraux de la classe dominante.",
    furtherReading: "Karl Marx, « Le 18 Brumaire de Louis Bonaparte » (1852) ; Friedrich Engels, « L'Origine de la famille, de la propriété privée et de l'État » (1884).",
  },
  tauschwert: {
    title: "La Valeur d'échange (der Tauschwert) et la déchéance des liens humains",
    termDe: 'Tauschwert / bare Zahlung',
    termFr: 'valeur d\'échange / paiement au comptant',
    content: "Marx analyse la dynamique corrosive de la bourgeoisie : elle a « dissous la dignité personnelle dans la valeur d'échange » (hat die persönliche Würde in den Tauschwert aufgelöst) et substitué au faisceau des libertés coutumières l'unique liberté du commerce. Tout rapport humain se trouve désormais réduit au froid « paiement au comptant » (die bare Zahlung), substituant à l'exploitation masquée par la religion une exploitation directe, ouverte et sans fard.",
    context: "Ce passage préfigure l'analyse du fétichisme de la marchandise et de la réification qui sera déployée dans le Livre I du « Capital » (1867).",
    furtherReading: "Karl Marx, « Le Capital », Livre I, Section 1, chapitre 4 (« Le caractère fétiche de la marchandise »).",
  },
};
