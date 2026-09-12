// Annotations philologiques, lexicales et étymologiques des termes clés du Manifeste
// RÈGLE FONDAMENTALE : chaque annotation porte STRICTEMENT sur LE mot survolé individuel.
// ZÉRO regroupement de mots adjacents dans la traduction, le sens littéral ou l'étymologie.

import type { Annotation } from '../types';
import { annotationsCh2 } from './annotations_ch2';
import { annotationsCh3Ch4 } from './annotations_ch3_ch4';

export const annotations: Record<string, Annotation> = {
  "ch0_p1_s1_w1": {
    "wordId": "ch0_p1_s1_w1",
    "translationFr": "Un",
    "literalTranslation": "Un (article indéfini neutre)",
    "contextNote": "Ouvre le texte par un article indéfini qui installe une tonalité d'irruption soudaine et d'indétermination menaçante avant la précision nominale.",
    "grammaticalRole": "Article indéfini neutre singulier au nominatif (ein), déterminant du nom neutre « Gespenst ».",
    "syntaxNote": "Première position syntaxique du groupe nominal sujet.",
    "relatedConcepts": [
      "indef_art",
      "nom"
    ],
    "difficulty": "basic",
    "wordIds": [
      "ch0_p1_s1_w1"
    ]
  },
  "ch0_p1_s1_w2": {
    "wordId": "ch0_p1_s1_w2",
    "translationFr": "spectre / fantôme",
    "literalTranslation": "apparition fantomatique, spectre, revenant terrifiant",
    "contextNote": "Marx s'empare du lexique de la terreur panique employé par les chancelleries européennes. Au lieu de nier l'accusation, il assume et magnifie cette figure spectrale qui obsède les monarques.",
    "grammaticalRole": "Nom neutre (das Gespenst), ici au nominatif singulier. Sujet grammatical de la première proposition.",
    "etymology": "Issu du moyen haut-allemand « gespenst(e) » (illusion diabolique, apparition trompeuse, fantôme), lui-même issu du vieux haut-allemand « gispansti / spanst » (séduction, tentation, égarement par ruse ou leurre démoniaque), déverbal du verbe fort « spanan » (attirer, séduire, tenter). En allemand médiéval, le Gespenst n'est pas un simple revenant, mais un piège démoniaque destiné à fourvoyer les âmes (étymon conservé dans l'adjectif « abspenstig » = détourné de son devoir). C'est seulement au XVIe siècle que le terme se fixe au sens moderne d'apparition spectrale terrifiante.",
    "philosophicalContext": "Jacques Derrida (« Spectres de Marx », 1993) a montré la force de cette spectralité : le communisme n'est pas encore un État ni une armée officielle, mais il hante déjà l'Europe comme la mauvaise conscience et l'imminence du dépassement de la société bourgeoise.",
    "relatedConcepts": [
      "gespenst",
      "nom"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch0_p1_s1_w2"
    ]
  },
  "ch0_p1_s1_w3": {
    "wordId": "ch0_p1_s1_w3",
    "translationFr": "hante / rôde",
    "literalTranslation": "va en rond, hante",
    "contextNote": "En allemand, la locution impersonnelle « ein Geist geht um » signifie au sens propre « un fantôme hante les lieux ». Traduire par « hante » restitue parfaitement cette présence obsédante qui défie les frontières étatiques.",
    "grammaticalRole": "Verbe séparable au présent (3e personne singulier, verbe umgehen).",
    "wordIds": [
      "ch0_p1_s1_w3"
    ],
    "etymology": "Verbe composé séparable unissant le préfixe adverbial germanique « um » (en cercle, alentour, vieux haut-allemand umbi) et le verbe « gehen » (marcher, errer, vieux haut-allemand gān). En moyen haut-allemand, « umbegān » acquiert le sens spécifique de hanter pour un revenant.",
    "syntaxNote": "Règle fondamentale V2 : le radical verbal conjugué occupe la position 2, tandis que la particule « um » est repoussée après le sujet pour clore le verbe.",
    "relatedConcepts": [
      "sep_verb",
      "v2",
      "prefix_verb"
    ],
    "difficulty": "intermediate"
  },
  "ch0_p1_s1_w6": {
    "wordId": "ch0_p1_s1_w6",
    "translationFr": "Europe",
    "literalTranslation": "Europe (continent géographique)",
    "contextNote": "L'absence d'article devant les noms de continents après « in » est la norme en allemand.",
    "grammaticalRole": "Nom propre neutre singulier, employé sans article après la préposition spatiale « in » (qui régit ici le datif de localisation statique).",
    "etymology": "Du grec ancien « Eurṓpē » (Εὐρώπη), personnage mythologique (princesse phénicienne enlevée par Zeus métamorphosé en taureau blanc). Étymon discuté par les linguistes : traditionnellement rattaché au grec « eurys » (εὐρύς = large, étendu) et « ōps » (ὤψ = regard, œil, face, d'où « celle qui a de grands yeux »), ou plus vraisemblablement d'origine sémitique phénicienne (*'ereb* = le couchant, l'occident, par opposition à *asu* / le levant, l'Asie). Pour Marx, l'Europe de 1848 désigne le théâtre historique où s'affrontent la Sainte-Alliance monarchique et l'émancipation prolétarienne.",
    "cognatesFr": [
      "Europe"
    ],
    "relatedConcepts": [
      "dat"
    ],
    "difficulty": "basic",
    "wordIds": [
      "ch0_p1_s1_w6"
    ]
  },
  "ch0_p1_s1_w9": {
    "wordId": "ch0_p1_s1_w9",
    "translationFr": "spectre / fantôme",
    "literalTranslation": "spectre, apparition terrifiante, revenant (nominatif neutre singulier)",
    "contextNote": "Reprise anaphorique solennelle du terme « Gespenst ». Marx lève ici l'indétermination du premier « Ein Gespenst » (un spectre indéfini) pour identifier formellement la puissance historique qui terrifie les cours européennes : le communisme.",
    "grammaticalRole": "Nom neutre singulier (das Gespenst) au nominatif, noyau du second groupe nominal sujet en apposition explicative.",
    "philosophicalContext": "Jacques Derrida (« Spectres de Marx », 1993) a mis en lumière la puissance ontologique de cette spectralité : le communisme n'est pas encore un État institué ni une armée officielle, mais il hante déjà l'Europe entière comme la mauvaise conscience des classes dirigeantes et l'imminence inéluctable du dépassement de la société bourgeoise.",
    "relatedConcepts": [
      "gespenst",
      "nom"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch0_p1_s1_w9"
    ],
    "etymology": "Issu du moyen haut-allemand « gespenst(e) » (illusion diabolique, leurre trompeur, fantôme), lui-même issu du vieux haut-allemand « gispansti » (tentation, piège, séduction démoniaque), déverbal du verbe fort « spanan » (attirer, séduire, tenter par ruse). En ancien haut-allemand et moyen haut-allemand, le mot ne désigne pas un simple fantôme au sens moderne, mais un piège démoniaque destiné à fourvoyer les âmes (étymon conservé dans l'adjectif « abspenstig » = détourné de sa fidélité). Le terme s'est fixé au XVIe siècle avec Martin Luther au sens moderne d'apparition spectrale terrifiante."
  },
  "ch0_p1_s1_w11": {
    "wordId": "ch0_p1_s1_w11",
    "translationFr": "communisme",
    "literalTranslation": "communisme, doctrine de la mise en commun des moyens de production (génitif masculin singulier)",
    "contextNote": "Complément du nom déterminant le spectre (« Gespenst »). Lafargue traduit par « du communisme », mais le mot isolé est le substantif au génitif sans préposition.",
    "grammaticalRole": "Nom masculin singulier (der Kommunismus) au génitif singulier en -us déterminé par l'article « des ».",
    "etymology": "Formé sur l'adjectif latin « communis » (commun, partagé par tous, issu de con- « ensemble » et de munus « don, charge civique, devoir partagé », de la racine indo-européenne *mey- « échanger ») au moyen du suffixe doctrinal grec et latin « -ismus ». Apparu en français vers 1840 sous la plume de Cabat et des cercles néo-babouvistes pour désigner l'abolition de la propriété privée bourgeoise, le terme est repris par Marx et Engels pour démarquer leur conception matérialiste et scientifique de la lutte de classe des utopies sentimentales du « socialisme » bourgeois ou petit-bourgeois.",
    "philosophicalContext": "Dans l'Idéologie allemande (1845-1846), Marx et Engels définissent sans équivoque le terme : « Le communisme n'est pour nous ni un état qui doit être créé, ni un idéal sur lequel la réalité devra se régler. Nous appelons communisme le mouvement réel qui abolit l'état actuel. »",
    "cognatesFr": [
      "communisme",
      "commun",
      "commune",
      "communauté"
    ],
    "relatedConcepts": [
      "gen",
      "latin_root",
      "communism"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch0_p1_s1_w11"
    ]
  },
  "ch0_p1_s2_w2": {
    "wordId": "ch0_p1_s2_w2",
    "translationFr": "puissances",
    "literalTranslation": "forces souveraines, puissances politiques ou militaires",
    "contextNote": "Désigne au sens géopolitique les grands États coalisés (Autriche, Russie, Prusse, France, Angleterre).",
    "grammaticalRole": "Nom féminin pluriel (die Macht -> die Mächte) au nominatif. Forme son pluriel par flexion interne (Umlaut a->ä) et ajout d'un -e final.",
    "etymology": "Issu du moyen haut-allemand « maht / macht », vieux haut-allemand « maht » (force physique, pouvoir d'action, autorité souveraine), de la racine germanique commune *mahti- (« capacité, puissance »), elle-même issue de la racine indo-européenne *magh- (« pouvoir, être capable », qui a aussi produit le verbe prétérito-présent « mögen » / vieux haut-allemand « magan »). Cognat étymologique exact du vieil anglais « meaht » et de l'anglais moderne « might ».",
    "philosophicalContext": "Marx prépare le contraste dialectique : toutes les puissances d'État reconnues tremblent devant une entité qui ne possède encore aucun appareil d'État.",
    "relatedConcepts": [
      "plural",
      "nom"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p1_s2_w2"
    ]
  },
  "ch0_p1_s2_w4": {
    "wordId": "ch0_p1_s2_w4",
    "translationFr": "vieux / ancien",
    "literalTranslation": "vieux, ancien, d'âge mûr (adjectif au génitif neutre singulier)",
    "contextNote": "Qualifie « Europa » au génitif singulier. L'adjectif désigne l'Europe dynastique, féodale et absolutiste du Congrès de Vienne (1815), condamnée par le mouvement révolutionnaire de 1848.",
    "grammaticalRole": "Adjectif qualificatif décliné au génitif neutre singulier en -en après l'article défini « des » (déclinaison faible).",
    "relatedConcepts": [
      "gen",
      "decl"
    ],
    "difficulty": "basic",
    "wordIds": [
      "ch0_p1_s2_w4"
    ],
    "etymology": "Issu du moyen haut-allemand « alt », vieux haut-allemand « alt » (vieux, âgé, ancien), du proto-germanique *aldaz (ayant grandi, nourri, mûr), participe passé de la racine germanique *alaną (nourrir, faire croître, cognat du latin alere d'où alumnus, altus)."
  },
  "ch0_p1_s2_w10": {
    "wordId": "ch0_p1_s2_w10",
    "translationFr": "sainte",
    "literalTranslation": "sacrée, sainte, consacrée par la religion (adjectif au datif féminin singulier)",
    "contextNote": "Lafargue traduit « en une Sainte-Alliance pour traquer ». En allemand, « zu einer heiligen Hetzjagd » qualifie directement la battue de « sainte », parodiant l'appellation mystique de la Sainte-Alliance de 1815.",
    "grammaticalRole": "Adjectif (heilig) décliné au datif féminin singulier après l'article indéfini « einer » (flexion mixte en -en).",
    "philosophicalContext": "Ironie antireligieuse : le qualificatif chrétien de « saint » sert à sanctifier une féroce coalition contre-révolutionnaire.",
    "relatedConcepts": [
      "decl",
      "dat",
      "holy_alliance"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p1_s2_w10"
    ],
    "etymology": "Issu du moyen haut-allemand « heilic », vieux haut-allemand « heilig » (sacré, saint, inviolable), dérivé au moyen du suffixe « -ig » sur le substantif « Heil » (salut, bonheur, santé, intégrité, du proto-germanique *hailagaz = intègre, consacré aux dieux, cognat de l'anglais holy). Employé par Marx de façon hautement sarcastique pour parodier la Sainte-Alliance de 1815 en une « sainte battue policière »."
  },
  "ch0_p1_s2_w11": {
    "wordId": "ch0_p1_s2_w11",
    "translationFr": "traque / battue / chasse acharnée",
    "literalTranslation": "chasse à courre avec meute de chiens excités, battue impitoyable (datif féminin singulier)",
    "contextNote": "Mot d'une dureté sarcastique emprunté au lexique de la vénerie : hetzen signifie exciter la meute de chiens pour harceler la bête sans lui laisser aucun répit. Lafargue a traduit par « pour traquer ce spectre » afin de préserver l'élan dynamique de la métaphore cynégétique.",
    "grammaticalRole": "Nom composé féminin singulier (die Hetzjagd) au datif singulier après la préposition « zu » marquant le but assigné à l'alliance.",
    "etymology": "Composé cynégétique formé de : 1° « hetzen » (en moyen haut-allemand « hetzen », en vieux haut-allemand « hezzen »), formation causative germanique (*hatjanan) issue de la racine germanique *hataz (« haine », d'où l'allemand hassen), signifiant originellement « exciter à la haine, lancer une meute de chiens furieux aux trousses d'une proie » ; 2° « die Jagd » (en moyen haut-allemand « jaget », en vieux haut-allemand « jagōd », déverbal de jagōn = chasser, poursuivre à la course).",
    "philosophicalContext": "Parodie cynégétique de la « Sainte-Alliance » de 1815 : Marx dépeint avec un mépris cinglant les souverains d'Europe (pape et tsar, Metternich et Guizot, radicaux français et policiers prussiens) coalisés non dans une foi chrétienne solennelle, mais dans une meute de veneurs policiers déchaînés pour abattre le mouvement ouvrier naissant.",
    "relatedConcepts": [
      "comp_noun",
      "dat",
      "feudalism"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch0_p1_s2_w11"
    ]
  },
  "ch0_p1_s2_w13": {
    "wordId": "ch0_p1_s2_w13",
    "translationFr": "ce",
    "literalTranslation": "ce / cet (forme archaïque ou stylisée pour dieses)",
    "contextNote": "En prose du XIXe siècle, « dies » est couramment employé pour « dieses » au neutre accusatif singulier devant nom.",
    "grammaticalRole": "Pronom démonstratif neutre singulier à l'accusatif régi par la préposition « gegen ».",
    "relatedConcepts": [
      "acc"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p1_s2_w13"
    ]
  },
  "ch0_p1_s2_w15": {
    "wordId": "ch0_p1_s2_w15",
    "translationFr": "se sont coalisées / unies",
    "literalTranslation": "se sont liées en alliance (au parfait avec sich)",
    "contextNote": "Ironie linguistique magistrale : Marx utilise « sich verbünden » (se liguer) pour décrire les monarques, alors que les communistes forment précisément la « Ligue » (der Bund der Kommunisten).",
    "grammaticalRole": "Participe passé (Partizip II) du verbe pronominal « sich verbünden », formant le parfait (passé composé) avec l'auxiliaire « haben » placé en position 2.",
    "etymology": "Participe passé du verbe « verbünden », formé du préfixe transitif d'association « ver- » et du substantif « der Bund » (en moyen haut-allemand « bunt », en vieux haut-allemand « bunt » = alliance, pacte, ligue), lui-même déverbal à l'apophonie (Ablaut) du verbe fort germanique « binden » (lier, attacher, issu de la racine indo-européenne *bʰendʰ- d'où découlent le sanskrit bandha et l'anglais bind / bond). Évoque le pacte juré liant des puissances autrefois rivales contre un ennemi commun.",
    "syntaxNote": "Cadre syntaxique (Satzklammer) : l'auxiliaire « haben » est en début d'énoncé (pos. 2) et le participe « verbündet » est repoussé à la fin de la proposition principale.",
    "relatedConcepts": [
      "v2",
      "prefix_verb",
      "comm_league"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch0_p1_s2_w15"
    ]
  },
  "ch0_p1_s2_w18": {
    "wordId": "ch0_p1_s2_w18",
    "translationFr": "pape",
    "literalTranslation": "pape, chef suprême de l'Église catholique romaine (nominatif masculin singulier)",
    "contextNote": "Mentionné sans article en tête de la parodie de coalition (« Papst und Zar »). Incarne l'autorité théocratique occidentale liguée contre les libertés populaires.",
    "grammaticalRole": "Nom masculin singulier (der Papst) au nominatif sans article, premier sujet coordonné en apposition à « Alle Mächte ».",
    "etymology": "Emprunt ancien (dès le IXe siècle) au latin ecclésiastique « papa » (évêque, père spirituel), lui-même issu du grec chrétien « pápas » (πάπας, titre affectueux donné aux prêtres et évêques, hypocoristique de patḗr = père). Le -t final en haut-allemand (vieux haut-allemand bābes / pābest, moyen haut-allemand bābest / babst / bāpst) est une consonne d'appui phonétique apparue vers le XIIIe siècle.",
    "cognatesFr": [
      "pape",
      "papauté"
    ],
    "relatedConcepts": [
      "nom",
      "feudalism"
    ],
    "difficulty": "basic",
    "wordIds": [
      "ch0_p1_s2_w18"
    ],
    "philosophicalContext": "Pie IX (élu en 1846), d'abord salué naïvement comme réformateur libéral, s'est rapidement révélé le garant zélé de l'ordre clérical et contre-révolutionnaire le plus intransigeant."
  },
  "ch0_p1_s2_w21": {
    "wordId": "ch0_p1_s2_w21",
    "translationFr": "tsar",
    "literalTranslation": "tsar, empereur autocratique de toutes les Russies (nominatif masculin singulier)",
    "contextNote": "Deuxième tête de la coalition réactionnaire (« Papst und Zar »). Incarne la puissance militaire écrasante de l'Empire russe, gendarme de l'Europe contre les insurrections démocratiques.",
    "grammaticalRole": "Nom masculin singulier (der Zar) au nominatif sans article, coordonné à « Papst » par « und ».",
    "etymology": "Emprunt au russe « car' » (царь), issu du vieux slave ecclésiastique « cěsarĭ » (цѣсарь), lui-même emprunté très tôt au nom propre latin « Caesar » (titre des empereurs romains, devenu le symbole de l'autocratie impériale, qui a également donné l'allemand « Kaiser »).",
    "cognatesFr": [
      "tsar",
      "tzar",
      "césarisme"
    ],
    "relatedConcepts": [
      "nom",
      "feudalism"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p1_s2_w21"
    ],
    "philosophicalContext": "Nicolas Ier régnait en autocrate absolu. La Russie tsariste constituait pour Marx et Engels le bastion stratégique de la contre-révolution européenne, toujours prête à envoyer ses troupes écraser les révolutions en Occident (comme en Hongrie en 1849)."
  },
  "ch0_p1_s2_w23": {
    "wordId": "ch0_p1_s2_w23",
    "translationFr": "Metternich",
    "literalTranslation": "Klemens von Metternich (chancelier autrichien)",
    "contextNote": "Chancelier d'État de l'Empire d'Autriche et ordonnateur en chef du système de surveillance et de censure en Europe centrale.",
    "grammaticalRole": "Nom propre masculin.",
    "philosophicalContext": "Metternich incarne la réaction féodale et aristocratique pure, dont le pouvoir sera brisé à Vienne par la Révolution de mars 1848.",
    "difficulty": "basic",
    "etymology": "Patronyme rhénan de la maison noble de Metternich, incarnant le chef de file de la Restauration absolutiste.",
    "wordIds": [
      "ch0_p1_s2_w23"
    ]
  },
  "ch0_p1_s2_w25": {
    "wordId": "ch0_p1_s2_w25",
    "translationFr": "Guizot",
    "literalTranslation": "François Guizot (président du Conseil français)",
    "contextNote": "Chef du gouvernement français sous Louis-Philippe, célèbre pour sa formule « Enrichissez-vous », qui fit expulser Marx de Paris en 1845 à la demande de l'ambassade prussienne.",
    "grammaticalRole": "Nom propre masculin.",
    "philosophicalContext": "Guizot représente le bourgeois libéral conservateur, hostile à la fois à l'absolutisme d'Ancien Régime et à toute démocratie populaire.",
    "difficulty": "basic",
    "etymology": "Patronyme cévenol de François Guizot, ministre doctrinaire de la Monarchie de Juillet.",
    "wordIds": [
      "ch0_p1_s2_w25"
    ]
  },
  "ch0_p1_s2_w28": {
    "wordId": "ch0_p1_s2_w28",
    "translationFr": "radicaux",
    "literalTranslation": "les démocrates radicaux républicains",
    "contextNote": "Adjectif substantivé sans article au pluriel. Désigne l'aile avancée des républicains parlementaires français (ex: Ledru-Rollin).",
    "grammaticalRole": "Adjectif substantivé masculin pluriel au nominatif sans article (flexion forte en -e).",
    "etymology": "Emprunt au bas-latin scolastique « radicalis », dérivé de « radix / radicis » (la racine, issu de la racine indo-européenne *wréh₂ds, cognat de l'allemand Wurzel et de l'anglais root). Forgé en Angleterre par Charles James Fox (1797) pour réclamer une « radical reform » du système électoral, le mot désigne en France sous la Monarchie de Juillet les républicains avancés (Ledru-Rollin) qui prétendent refonder l'État jusqu'aux racines, mais que les conservateurs confondent volontiers avec les communistes pour les discréditer.",
    "philosophicalContext": "Marx note avec ironie que même la gauche républicaine radicale de France partage la frayeur bourgeoise devant l'abolition de la propriété privée.",
    "cognatesFr": [
      "radical",
      "radicaux",
      "racine"
    ],
    "relatedConcepts": [
      "latin_root"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p1_s2_w28"
    ]
  },
  "ch0_p1_s2_w31": {
    "wordId": "ch0_p1_s2_w31",
    "translationFr": "policiers",
    "literalTranslation": "agents de police, fonctionnaires de l'appareil policier",
    "contextNote": "Nom masculin à déclinaison faible (n-Deklination), prenant la désinence -en à tous les cas obliques et au pluriel.",
    "grammaticalRole": "Nom masculin de la déclinaison faible (der Polizist -> die Polizisten) au nominatif pluriel.",
    "etymology": "Dérivé moderne avec suffixe d'agent -ist du mot « Polizei », emprunté au bas-latin « politia » et au grec ancien « politeia » (πολιτεία = constitution et gouvernement civique de la cité, de polis / πόλις). En moyen haut-allemand, la « gute Policey » désignait l'ensemble du bon ordre administratif, sanitaire et économique de la principauté, avant de se spécialiser aux XVIIIe-XIXe siècles dans le corps armé d'État chargé de la surveillance et de la répression politique.",
    "cognatesFr": [
      "policier",
      "police"
    ],
    "difficulty": "basic",
    "wordIds": [
      "ch0_p1_s2_w31"
    ]
  },
  "ch0_p2_s1_w4": {
    "wordId": "ch0_p2_s1_w4",
    "translationFr": "parti d'opposition",
    "literalTranslation": "parti d'opposition, formation politique contestataire",
    "contextNote": "En 1848, le terme « Partei » désignait aussi bien un courant de pensée ou une mouvance d'opinion qu'une organisation partisane formalisée.",
    "grammaticalRole": "Nom composé féminin (die Oppositionspartei), nominatif singulier sujet du verbe « ist ».",
    "etymology": "Composé politique unissant : 1° l'emprunt savant au bas-latin « oppositio » (action d'opposer, contradiction dialectique ou parlementaire, du supin oppositum de opponere) ; 2° la consonne de liaison -s- ; 3° le substantif « die Partei », introduit au XVIIe siècle par le français « partie » et issu du latin classique « pars / partis » (part, portion, faction dissidente). Marx met à nu le paradoxe constitutionnel de la monarchie censitaire : toute fraction d'opposition légale est immédiatement criminalisée dès qu'elle menace l'hégémonie de la classe dominante.",
    "relatedConcepts": [
      "comp_noun",
      "latin_root"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p2_s1_w4"
    ]
  },
  "ch0_p2_s1_w10": {
    "wordId": "ch0_p2_s1_w10",
    "translationFr": "au pouvoir / gouvernants",
    "literalTranslation": "qui gouvernent actuellement (participe présent adjectivé)",
    "contextNote": "Lafargue traduit élégamment par « ses adversaires au pouvoir ». En allemand, c'est un participe présent employé comme épithète au datif.",
    "grammaticalRole": "Participe présent adjectivé (regierend) au datif pluriel (flexion faible en -en après le possessif « ihren »).",
    "etymology": "Participe présent de « regieren », emprunté en moyen haut-allemand au latin classique « regere » (conduire droit, guider, exercer la souveraineté, issu de la racine indo-européenne *h₃reǵ- « étendre en ligne droite », qui a produit rex / roi, Recht / droit, Reich / empire). Désigne chez Marx les tenants exclusifs du monopole exécutif et répressif d'État.",
    "cognatesFr": [
      "régir",
      "régent",
      "régime"
    ],
    "relatedConcepts": [
      "dat",
      "latin_root"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p2_s1_w10"
    ]
  },
  "ch0_p2_s1_w11": {
    "wordId": "ch0_p2_s1_w11",
    "translationFr": "adversaires / ennemis",
    "literalTranslation": "adversaires, opposants (ceux qui se dressent contre)",
    "contextNote": "Régit un -n final obligatoire au datif pluriel en allemand (Gegner -> Gegnern).",
    "grammaticalRole": "Nom masculin pluriel (der Gegner -> die Gegner) au datif pluriel après la préposition « von » indiquant l'agent du passif.",
    "etymology": "Dérivé nominal d'agent formé sur la préposition et adverbe d'orientation spatiale et d'hostilité « gegen » (issu du vieux haut-allemand gagan / gegin = face à, à l'encontre, racine germanique *gagina) combiné au suffixe d'agent germanique « -er ». Désigne textuellement « celui qui se dresse en face, l'antagoniste sur le terrain de lutte ».",
    "relatedConcepts": [
      "dat",
      "plural"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p2_s1_w11"
    ]
  },
  "ch0_p2_s1_w14": {
    "wordId": "ch0_p2_s1_w14",
    "translationFr": "décrié / accusé bruyamment",
    "literalTranslation": "décrié, diffamé par de grands cris, voué aux gémonies",
    "contextNote": "Lafargue traduit par « accusée de communisme ». Le verbe allemand « verschreien » contient une charge beaucoup plus violente : c'est salir quelqu'un par la clameur publique.",
    "grammaticalRole": "Participe passé (Partizip II) du verbe fort inséparable « verschreien » (verschreit, verschrie, verschrien). Forme le passif du subjonctif II avec « worden wäre ».",
    "etymology": "Verbe fort composé du préfixe inséparable à valeur dépréciative et délétère « ver- » et du verbe expressif « schreien » (hurler, proférer des clameurs, du moyen haut-allemand schrīen, vieux haut-allemand skrīan, racine germanique *skrīaną). Littéralement : noyer quelqu'un sous des clameurs diffamatoires pour le jeter en pâture à l'opinion publique et le condamner sans procès.",
    "syntaxNote": "Structure passive du subjonctif II : verschrien worden wäre (eût été décriée). Rejet des trois verbes en queue de la proposition relative introduite par « die ».",
    "relatedConcepts": [
      "sub_clause",
      "subj_ii",
      "passive",
      "prefix_verb"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch0_p2_s1_w14"
    ]
  },
  "ch0_p2_s1_w16": {
    "wordId": "ch0_p2_s1_w16",
    "translationFr": "aurait été / eût été",
    "literalTranslation": "serait, eût été (auxiliaire sein au subjonctif II)",
    "contextNote": "Exprime l'irréel du passé dans une interrogation rhétorique signifiant : « Trouvez-moi un seul parti qui n'ait pas subi cela ! »",
    "grammaticalRole": "3e personne du singulier du subjonctif II (Konjunktiv II) de l'auxiliaire « sein », régissant le participe passif « worden ».",
    "relatedConcepts": [
      "subj_ii",
      "sub_clause"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch0_p2_s1_w16"
    ]
  },
  "ch0_p2_s2_w7": {
    "wordId": "ch0_p2_s2_w7",
    "translationFr": "plus avancés / progressistes",
    "literalTranslation": "qui ont fait des pas en avant, plus progressistes (comparatif)",
    "contextNote": "Désigne les courants politiques situés plus à gauche de l'échiquier politique. Lafargue traduit « aux adversaires plus avancés ».",
    "grammaticalRole": "Adjectif au comparatif de supériorité (fortgeschritten -> fortgeschrittener), décliné au datif pluriel en -en après l'article « den ».",
    "etymology": "Participe adjectivé au comparatif du verbe fort séparable « fortschreiten » : 1° l'adverbe dynamique « fort » (en avant, au loin, vieux haut-allemand fora / fort) ; 2° le verbe fort « schreiten » (avancer à pas fermes et mesurés, moyen haut-allemand schrīten, vieux haut-allemand scrītan, racine germanique *skrīþaną). Désigne chez Marx les fractions de l'opposition libérale ou républicaine qui s'estiment à l'avant-garde mais capitulent dès que l'ordre bourgeois est contesté à la racine.",
    "syntaxNote": "Datif d'attribution (COI du verbe zurückschleudern).",
    "relatedConcepts": [
      "dat",
      "decl"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p2_s2_w7"
    ]
  },
  "ch0_p2_s2_w8": {
    "wordId": "ch0_p2_s2_w8",
    "translationFr": "gens de l'opposition / opposants",
    "literalTranslation": "gens de l'opposition, militants d'opposition",
    "contextNote": "Le pluriel -leute (Leute = gens) remplace fréquemment -männer dans les composés socio-politiques allemands.",
    "grammaticalRole": "Nom composé masculin/neutre au datif pluriel (die Oppositionsleute) après l'article « den ».",
    "etymology": "Composé hybride politico-social associant : 1° « die Opposition », emprunt savant au bas-latin « oppositio » (action de placer en face, antithèse rhétorique et parlementaire, du supin oppositum de opponere) ; 2° le substantif collectif « die Leute » (le peuple, les gens, les personnes), issu du vieux haut-allemand « liuti » et du germanique commun *liudīz (les hommes libres d'une communauté, issu de la racine indo-européenne *h₁leudʰ- « croître, monter », cognat du vieux slave ljudije / peuple, du russe ljudi et du grec eleutheros / libre). Désigne au XIXe siècle les parlementaires et militants engagés dans la contestation des ministères absolutistes.",
    "relatedConcepts": [
      "comp_noun",
      "dat"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p2_s2_w8"
    ]
  },
  "ch0_p2_s2_w9": {
    "wordId": "ch0_p2_s2_w9",
    "translationFr": "tant ... que",
    "literalTranslation": "aussi bien ... que, tant ... que (conjonction corrélative)",
    "contextNote": "Forme avec « wie » une locution coordonnante symétrique marquant que l'anathème frappe indistinctement la gauche et la droite.",
    "grammaticalRole": "Conjonction de coordination corrélative (sowohl ... wie / als auch).",
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p2_s2_w9"
    ]
  },
  "ch0_p2_s2_w12": {
    "wordId": "ch0_p2_s2_w12",
    "translationFr": "réactionnaires",
    "literalTranslation": "réactionnaires, rétrogrades (qui veulent revenir en arrière)",
    "contextNote": "Qualifie les partisans du statu quo absolutiste et féodal.",
    "grammaticalRole": "Adjectif qualificatif décliné au datif pluriel en -en après le possessif « ihren ».",
    "etymology": "Emprunt au français « réactionnaire », forgé sous la Révolution française vers 1795 lors de la Convention thermidorienne après la chute de Robespierre (dérivé de « réaction », du latin médiéval et philosophique reactio, formé sur re- + agere = agir en sens inverse). Introduit en allemand au début du XIXe siècle pour désigner les partisans de la restauration féodale et monarchique.",
    "cognatesFr": [
      "réactionnaire",
      "réaction"
    ],
    "relatedConcepts": [
      "dat",
      "latin_root"
    ],
    "difficulty": "basic",
    "wordIds": [
      "ch0_p2_s2_w12"
    ]
  },
  "ch0_p2_s2_w15": {
    "wordId": "ch0_p2_s2_w15",
    "translationFr": "infamante / flétrissante",
    "literalTranslation": "marquant au fer rouge, imprimant une marque de flétrissure (participe présent)",
    "contextNote": "Lafargue traduit par « l'épithète infamante ». En allemand, « brandmarken » est un terme juridique et corporel d'une violence inouïe : c'est appliquer le fer rouge ardent sur la peau d'un criminel pour le marquer à jamais d'infamie.",
    "grammaticalRole": "Participe présent adjectivé du verbe « brandmarken » (marquer au fer), décliné à l'accusatif masculin singulier en -en après l'article défini « den ».",
    "etymology": "Composé pénal et corporel verbalisé unissant : 1° « der Brand » (le tison ardent, le fer rougi à blanc au brasier, déverbal fort de brennen = brûler, vieux haut-allemand brant, racine germanique *brannjanan) ; 2° « die Marke » (le stigmate indélébile, la signature d'infamie, du moyen haut-allemand marke, emprunt au vieux francique germanique *marka = signe distinctif, empreinte). Fait référence au supplice juridique de la flétrissure au fer rouge appliqué sous l'Ancien Régime sur la chair vive des suppliciés (la fleur de lys en France). L'accusation de communisme opère dans le discours bourgeois comme un fer rouge cherchant à marquer au corps l'adversaire pour le retrancher de l'humanité respectable.",
    "philosophicalContext": "Marx démontre que le mot « communiste » sert d'arme de flétrissure universelle : dès qu'un groupe réclame la moindre réforme, ses ennemis lui impriment au fer rouge ce stigmate pour le bannir de la vie politique civile.",
    "relatedConcepts": [
      "acc",
      "decl"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch0_p2_s2_w15"
    ]
  },
  "ch0_p2_s2_w16": {
    "wordId": "ch0_p2_s2_w16",
    "translationFr": "reproche / grief / accusation",
    "literalTranslation": "ce qu'on jette devant ou à la face de quelqu'un, reproche",
    "contextNote": "Lafargue traduit « l'épithète infamante de communiste », adaptant « Vorwurf » au registre lexical de l'injure politique.",
    "grammaticalRole": "Nom masculin (der Vorwurf) à l'accusatif singulier, COD de « zurückgeschleudert hätte ».",
    "etymology": "Déverbal de « vorwerfen » (moyen haut-allemand vorwerfen, vieux haut-allemand fora-werfan = jeter devant soi). Le substantif « Vorwurf » s'est fixé au XVIIe siècle comme calque morphologique et sémantique rigoureux du latin « obiectio » (de ob- = devant + iacere = jeter). Désigne ce que l'on jette à la figure d'un adversaire lors d'une joute oratoire.",
    "relatedConcepts": [
      "acc"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch0_p2_s2_w16"
    ]
  },
  "ch0_p2_s2_w20": {
    "wordId": "ch0_p2_s2_w20",
    "translationFr": "renvoyé / catapulté en retour",
    "literalTranslation": "lancé en arrière avec force, catapulté violemment à la face",
    "contextNote": "Lafargue traduit par « renvoyé ». En allemand, « schleudern » implique un jet balistique très brutal (comme une pierre lancée par une fronde, Schleuder). Marx évoque une joute où chacun renvoie à l'autre le projectile incendiaire.",
    "grammaticalRole": "Participe passé (Partizip II) du verbe séparable « zurück|schleudern », associé au subjonctif « hätte ».",
    "etymology": "Verbe composé expressif associant : 1° l'adverbe directionnel « zurück » (en arrière, retour au point d'origine, contraction de « zu » + « Rücken » = vers le dos) ; 2° le verbe balistique « schleudern » (catapulter, projeter avec violence giratoire), issu du moyen haut-allemand « slūdern » et dérivé de « die Schleuder » (la fronde, l'engin de siège, racine germanique *sludrōn = osciller violemment, tournoyer pour projeter). Métaphore polémique énergique : l'accusation de communisme est assimilée à un projectile incendiaire renvoyé d'une barricade parlementaire à l'autre.",
    "syntaxNote": "Verbe rejeté en fin de proposition subordonnée relative : le participe passé précède l'auxiliaire haben conjugué (« zurückgeschleudert hätte »).",
    "relatedConcepts": [
      "sep_verb",
      "sub_clause",
      "subj_ii"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch0_p2_s2_w20"
    ]
  },
  "ch0_p3_s1_w1": {
    "wordId": "ch0_p3_s1_w1",
    "translationFr": "Deux choses / un double enseignement",
    "literalTranslation": "deux choses de sortes différentes, double élément",
    "contextNote": "Lafargue traduit par « un double enseignement ». En allemand, le suffixe -erlei exprime la diversité des espèces (cf. allerlei, mancherlei).",
    "grammaticalRole": "Pronom indéfini neutre invariable marquant une double réalité.",
    "etymology": "Adjectif numéral indéfini invariable formé sur le génitif cardinal « zwei » (deux, du vieux haut-allemand zweio, racine indo-européenne *dwóh₁) adjoint du suffixe moyen haut-allemand « -erlei » (issu du génitif pluriel des adjectifs fléchis en *-ero-* et du substantif en moyen haut-allemand « leie / leye » = manière, espèce, sorte, emprunt médiéval à l'ancien français 'lai' / coutume, façon, d'origine ultime discutée). Signifie textuellement « de deux natures distinctes, double enseignement ».",
    "syntaxNote": "Occupe la première position de la proposition, entraînant obligatoirement l'inversion sujet-verbe (Verbzweitstellung : geht).",
    "relatedConcepts": [
      "v2"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p3_s1_w1"
    ]
  },
  "ch0_p3_s1_w2": {
    "wordId": "ch0_p3_s1_w2",
    "translationFr": "ressort / résulte",
    "literalTranslation": "s'avance hors de, émane",
    "contextNote": "Verbe séparable indiquant un surgissement visible hors d'un constat matériel.",
    "grammaticalRole": "Verbe séparable au présent (verbe hervorgehen).",
    "wordIds": [
      "ch0_p3_s1_w2"
    ],
    "etymology": "Verbe composé séparable combinant « hervor » (vers l'avant hors de) et « gehen » (marcher, aller).",
    "syntaxNote": "Cadre verbal : le radical « geht » est en 2e position, la particule « hervor » clôt la proposition (pos. 6).",
    "relatedConcepts": [
      "sep_verb",
      "v2",
      "prefix_verb"
    ],
    "difficulty": "intermediate"
  },
  "ch0_p3_s1_w5": {
    "wordId": "ch0_p3_s1_w5",
    "translationFr": "fait / réalité matérielle",
    "literalTranslation": "fait concret, action matérielle avérée",
    "contextNote": "Nom forgé au XVIIIe siècle pour supplanter l'emprunt latin « Factum ». Marx ancre sa déduction dans les faits objectifs et non dans des spéculations idéales.",
    "grammaticalRole": "Nom composé féminin (die Tatsache) au datif singulier après la préposition « aus » (régissant obligatoirement le datif).",
    "etymology": "Calque philosophique forgé au XVIIIe siècle (introduit par Johann Joachim Spalding en 1756, puis popularisé par Johann Gottlieb Fichte et la philosophie critique) pour traduire le latin « factum » : 1° « die Tat » (l'acte accompli, le haut-fait, du vieux haut-allemand tāt, dérivé du verbe tun / agir, racine indo-européenne *dʰē- « poser, faire ») ; 2° « die Sache » (la cause, le litige juridique, puis la chose concrète, du vieux haut-allemand sahha, proto-germanique *sakō « contestation, affaire légale », cognat de l'anglais sake). Exprime le fait matériel concret et indiscutable, par opposition aux spéculations idéales.",
    "philosophicalContext": "C'est le point de départ matérialiste : Marx n'invente pas l'importance du communisme, il la constate comme un fait social avéré par le comportement même de ses adversaires.",
    "relatedConcepts": [
      "comp_noun",
      "dat",
      "hist_mat"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p3_s1_w5"
    ]
  },
  "ch0_p4_s1_w3": {
    "wordId": "ch0_p4_s1_w3",
    "translationFr": "est (auxiliaire du passif)",
    "literalTranslation": "devient / est",
    "contextNote": "Forme avec « anerkannt » le présent du passif (Vorgangspassiv).",
    "grammaticalRole": "Auxiliaire du passif de devenir (werden) au présent.",
    "wordIds": [
      "ch0_p4_s1_w3"
    ],
    "syntaxNote": "Cadre passif : l'auxiliaire « wird » est en 2e position, le participe passé « anerkannt » termine la phrase.",
    "relatedConcepts": [
      "passive",
      "v2"
    ],
    "difficulty": "intermediate",
    "etymology": "Du moyen haut-allemand « werden », vieux haut-allemand « werdan » (tourner vers, advenir)."
  },
  "ch0_p4_s1_w4": {
    "wordId": "ch0_p4_s1_w4",
    "translationFr": "déjà / d'ores et déjà",
    "literalTranslation": "déjà, d'ores et déjà, promptement",
    "contextNote": "Souligne que la reconnaissance n'est plus à attendre : elle est déjà un acquis historique.",
    "grammaticalRole": "Adverbe de temps marquant l'antériorité acquise.",
    "etymology": "Adverbe de temps et d'insistance dérivé au génitif adverbial (-s) de l'adjectif moyen haut-allemand « bereit » (prêt à agir, équipé, préparé, issu du vieux haut-allemand bireiti = propre à être monté, préparé pour la chevauchée, préfixe bi- + verbe rītan / chevaucher). A pris au XVIe siècle le sens temporel d'antériorité accomplie : « déjà », marquant qu'une étape historique irréversible est d'ores et déjà franchie.",
    "difficulty": "basic",
    "wordIds": [
      "ch0_p4_s1_w4"
    ]
  },
  "ch0_p4_s1_w11": {
    "wordId": "ch0_p4_s1_w11",
    "translationFr": "puissance / force",
    "literalTranslation": "puissance politique reconnue, force matérielle souveraine (accusatif féminin singulier)",
    "contextNote": "Attribut du sujet au passif après « als ». Lafargue traduit « comme une puissance », mais le mot isolé est le substantif féminin sans déterminant.",
    "grammaticalRole": "Nom féminin singulier (die Macht) à l'accusatif singulier après la conjonction de comparaison attributive « als » et le déterminant « eine ».",
    "philosophicalContext": "Reconnaissance dialectique : le communisme est passé du statut d'opinion clandestine à celui de force historique objective pesant sur l'échiquier politique du continent.",
    "relatedConcepts": [
      "acc"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p4_s1_w11"
    ],
    "etymology": "Issu du moyen haut-allemand « maht », vieux haut-allemand « maht » (puissance, capacité de contraindre et de régir), déverbal de la racine du verbe mögen (vieux haut-allemand magan = avoir le pouvoir physique et politique)."
  },
  "ch0_p4_s1_w12": {
    "wordId": "ch0_p4_s1_w12",
    "translationFr": "reconnu",
    "literalTranslation": "reconnu officiellement, admis comme valable",
    "contextNote": "Participe passé passif complétant « wird ».",
    "grammaticalRole": "Participe passé (Partizip II) du verbe inséparable mixte « anerkennen » (anerkannt).",
    "etymology": "Participe passé du verbe inséparable mixte « anerkennen » : 1° préfixe de contact et d'adhésion « an » (vieux haut-allemand ana) ; 2° verbe préfixé « erkennen » (discerner par l'entendement, moyen haut-allemand erkennen, vieux haut-allemand irknāan / irkennen, formé sur kennen = connaître intimement, du germanique commun *kannjanan, issu de la racine indo-européenne *ǵneh₃- « savoir, reconnaître », cognat du grec gignôskein et du latin (g)noscere). « Anerkennen » dépasse la simple perception empirique : c'est l'acte juridique et politique solennel par lequel une force nouvelle s'impose comme interlocuteur légitime et incontournable dans le concert des puissances.",
    "relatedConcepts": [
      "passive",
      "prefix_verb"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p4_s1_w12"
    ]
  },
  "ch0_p5_s1_w4": {
    "wordId": "ch0_p5_s1_w4",
    "translationFr": "temps / heure / moment",
    "literalTranslation": "temps opportun, moment critique, heure venue (nominatif féminin singulier)",
    "contextNote": "Noyau nominal de la locution idiomatique « Es ist hohe Zeit » (Il est grand temps / L'heure critique est venue). Strictement découplé de l'adjectif « hohe ».",
    "grammaticalRole": "Nom féminin singulier (die Zeit) au nominatif singulier attribut du sujet impersonnel « Es » et qualifié par « hohe ».",
    "etymology": "Issu du moyen haut-allemand « zīt », vieux haut-allemand « zīt » (temps, époque, moment favorable, heure prescrite). Du proto-germanique *tīdiz (division temporelle, heure propice), rattaché à la racine indo-européenne *dāy- / *dī- (partager, diviser, fendre). Cognat direct de l'anglais « tide » (marée, temps propice) et « time ». Dans la prose de Marx, le substantif prend un tour d'urgence révolutionnaire : le délai historique accordé à la clandestinité est expiré.",
    "difficulty": "basic",
    "wordIds": [
      "ch0_p5_s1_w4"
    ],
    "relatedConcepts": [
      "nom"
    ]
  },
  "ch0_p5_s1_w10": {
    "wordId": "ch0_p5_s1_w10",
    "translationFr": "conceptions / vision du monde",
    "literalTranslation": "manière d'envisager les choses, mode de contemplation intuitive",
    "contextNote": "Terme philosophique majeur de la tradition allemande (Kant, Goethe, Hegel). Lafargue traduit par « conceptions ». En allemand, c'est l'équivalent de « Weltanschauung » : une interprétation théorique globale de la réalité.",
    "grammaticalRole": "Nom composé féminin (die Anschauungsweise) à l'accusatif singulier, premier COD du verbe « darlegen ».",
    "etymology": "Composé philosophique unissant : 1° « die Anschauung » (terme cardinal forgé au XVIIIe siècle dans la langue philosophique allemande par Christian Wolff et Kant pour traduire le latin intuitio / intuition intellectuelle et sensible, dérivé de anschauen = regarder en face, contempler) ; 2° consonne de liaison -s- ; 3° « die Weise » (la manière, la modalité formelle, du vieux haut-allemand wīsa, racine germanique *wīsō- liée à l'adjectif weise / sage et au verbe wissen / savoir). Désigne une conception globale et articulée du monde (Weltanschauung).",
    "philosophicalContext": "Marx indique que le communisme n'est pas un chapelet de doléances ouvrières ou de revendications salariales, mais une conception révolutionnaire et scientifique totale de l'histoire humaine.",
    "relatedConcepts": [
      "comp_noun",
      "hist_mat",
      "latin_root"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch0_p5_s1_w10"
    ]
  },
  "ch0_p5_s1_w13": {
    "wordId": "ch0_p5_s1_w13",
    "translationFr": "buts / finalités",
    "literalTranslation": "buts visés, fins poursuivies, objectifs",
    "contextNote": "Désigne les objectifs politiques explicites (abolition de la propriété bourgeoise, conquête du pouvoir démocratique par le prolétariat).",
    "grammaticalRole": "Nom masculin pluriel (der Zweck -> die Zwecke) à l'accusatif pluriel.",
    "etymology": "Du moyen haut-allemand « zwec » (cheville de bois, clou de fixation). L'étymon vieux haut-allemand est incertain (probable racine germanique *twakka- désignant un piquet appointé, étymologie discutée). Dans le tir à l'arc médiéval, le zwec désignait le clou fiché au centre de la cible. L'expression « den Zweck treffen » (frapper le clou en plein cœur) a fait glisser le mot au XVIIe siècle vers le sens abstrait de but conscient, de dessein délibéré et de finalité.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p5_s1_w13"
    ]
  },
  "ch0_p5_s1_w16": {
    "wordId": "ch0_p5_s1_w16",
    "translationFr": "tendances",
    "literalTranslation": "tendances objectives, orientations évolutives",
    "contextNote": "Dans le matérialisme historique, les « tendances » sont les lois d'évolution immanentes du mode de production capitaliste (ex: baisse tendancielle du taux de profit).",
    "grammaticalRole": "Nom féminin pluriel (die Tendenz -> die Tendenzen) à l'accusatif pluriel.",
    "etymology": "Emprunt savant au latin classique « tendere » (tendre vers un but, déployer un effort continu, bander un arc, racine indo-européenne *ten- « étirer, tendre ») via le dérivé médiéval et scientifique « tendentia ». En économie politique marxiste, le terme désigne la direction vectorielle objective imprimée à l'histoire par les contradictions internes du mode de production (cf. la « tendance à la baisse du taux de profit »).",
    "cognatesFr": [
      "tendance",
      "tendre",
      "tension"
    ],
    "relatedConcepts": [
      "latin_root"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p5_s1_w16"
    ]
  },
  "ch0_p5_s1_w21": {
    "wordId": "ch0_p5_s1_w21",
    "translationFr": "ouvertement / publiquement",
    "literalTranslation": "ouvertement, sans dissimulation (adverbe / adjectif prédicatif)",
    "contextNote": "Adjectif employé comme adverbe modifiant « darlegen ».",
    "grammaticalRole": "Adjectif employé adverbialement.",
    "difficulty": "basic",
    "wordIds": [
      "ch0_p5_s1_w21"
    ],
    "etymology": "Issu du moyen haut-allemand « offen », vieux haut-allemand « offan » (ouvert, dégagé, public, manifeste), du proto-germanique *upana- (ouvert vers le haut, apparenté à auf / up).",
    "philosophicalContext": "Principe fondamental de la publicité communiste : le prolétariat rejette les conspirations de loges pour proclamer ses buts devant la société entière."
  },
  "ch0_p5_s1_w22": {
    "wordId": "ch0_p5_s1_w22",
    "translationFr": "exposent / développent",
    "literalTranslation": "posent là sous les yeux, étalent, exposent méthodiquement",
    "contextNote": "Verbe séparable (dar|legen). Lafargue traduit « que les communistes exposent ». En subordonnée introduite par « daß », le verbe se retrouve réuni en fin de proposition.",
    "grammaticalRole": "Verbe séparable « dar|legen » à la 3e personne du pluriel du présent de l'indicatif.",
    "etymology": "Verbe composé séparable associant l'adverbe démonstratif « dar » (forme ancienne et locative de « da », vieux haut-allemand dara = vers là, sous les yeux du public) et le verbe fondamental « legen » (poser à plat, coucher, faire reposer, vieux haut-allemand leggen, verbe causatif germanique *lagjanan issu de liegen). Littéralement : exposer au grand jour sur la table politique, soumettre à l'examen rationnel de tous.",
    "syntaxNote": "Ordre des mots en subordonnée conjonctive (daß-Satz) : le verbe conjugué est rejeté à la fin de sa proposition.",
    "relatedConcepts": [
      "sub_clause",
      "sep_verb",
      "prefix_verb"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p5_s1_w22"
    ]
  },
  "ch0_p5_s1_w25": {
    "wordId": "ch0_p5_s1_w25",
    "translationFr": "conte / fable puérile",
    "literalTranslation": "conte de fées, petite histoire merveilleuse ou fictive",
    "contextNote": "Lafargue traduit par « au conte du spectre ». Ironie dévastatrice : Marx ravale les anathèmes des rois et des flics au rang de contes de bonnes femmes destinés à effrayer les enfants crédules.",
    "grammaticalRole": "Nom neutre singulier (das Märchen) au datif après l'article défini contracté « dem ».",
    "etymology": "Diminutif hypocoristique en « -chen » du moyen haut-allemand « mære » (nouvelle, information, bruit qui court, récit fabuleux), issu du vieux haut-allemand « māri » (célèbre, fameux, objet de renommé, racine germanique commune *mērijaz, apparentée au germanique *marō / cauchemar, d'où l'anglais nightmare). Désigne le conte pour enfants, la fable mythologique ou la calomnie sans consistance réelle répandue par la propagande gouvernementale.",
    "philosophicalContext": "Opposition polémique entre la fable idéaliste (« Märchen ») forgée par la bourgeoisie pour diaboliser ses adversaires, et le document scientifique et politique authentique (« Manifest »).",
    "syntaxNote": "Complément d'attribution au datif du verbe « entgegenstellen » (opposer quelque chose [acc.] à quelque chose [dat.]).",
    "difficulty": "advanced",
    "wordIds": [
      "ch0_p5_s1_w25"
    ]
  },
  "ch0_p5_s1_w31": {
    "wordId": "ch0_p5_s1_w31",
    "translationFr": "manifeste",
    "literalTranslation": "manifeste, déclaration publique écrite, proclamation solennelle (accusatif neutre singulier)",
    "contextNote": "Complément d'objet opposé au conte d'enfants (« ein Manifest ... entgegenzustellen »). Lafargue traduit « un manifeste », mais le terme est le nom neutre sans article.",
    "grammaticalRole": "Nom neutre singulier (das Manifest) à l'accusatif singulier après l'article indéfini « ein ».",
    "etymology": "Emprunt au XVIe siècle au latin classique « manifestus » (évident, palpable, flagrant, originellement frappé de la main, composé de manus « main » et de fendere « heurter, frapper »), substantivé au XVIIe siècle en italien (manifesto) puis en français et en allemand pour désigner la déclaration publique solennelle d'un souverain ou d'un parti politique exposant ses principes au grand jour.",
    "cognatesFr": [
      "manifeste",
      "manifester",
      "manifestation"
    ],
    "relatedConcepts": [
      "acc",
      "latin_root"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p5_s1_w31"
    ],
    "philosophicalContext": "L'acte d'écriture du Manifeste est un geste de rupture politique fondamentale : substituer à la clandestinité conspirative (celle des carbonari et de la Ligue des justes) la publicité intégrale, transparente et théorique de la lutte révolutionnaire."
  },
  "ch0_p5_s1_w35": {
    "wordId": "ch0_p5_s1_w35",
    "translationFr": "opposent / dressent en face",
    "literalTranslation": "placent debout face à, dressent en vis-à-vis",
    "contextNote": "Verbe séparable (entgegen|stellen) régissant l'accusatif (la chose qu'on oppose : ein Manifest) et le datif (la chose à laquelle on l'oppose : dem Märchen).",
    "grammaticalRole": "Verbe séparable « entgegen|stellen » à la 3e personne du pluriel du présent de l'indicatif.",
    "etymology": "Verbe composé séparable unissant : 1° la préposition et adverbe « entgegen » (au-devant de, en opposition directe, moyen haut-allemand entgegen, vieux haut-allemand in gegin = à l'encontre de) ; 2° le verbe causatif « stellen » (placer debout, faire tenir dressé, vieux haut-allemand stellen, du proto-germanique *stalljanan lié à Stall / écurie et Stelle / place fixe). Exprime l'affrontement frontal et irréductible de deux thèses qui se font face dans l'arène publique.",
    "syntaxNote": "Verbe conjugué rejeté en fin de proposition subordonnée coordonnée.",
    "relatedConcepts": [
      "sep_verb",
      "sub_clause"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p5_s1_w35"
    ]
  },
  "ch0_p6_s1_w3": {
    "wordId": "ch0_p6_s1_w3",
    "translationFr": "à cette fin / dans ce but",
    "literalTranslation": "dans ce but, à cette fin précise",
    "contextNote": "Locution prépositionnelle au datif placée en tête de phrase pour opérer l'inversion sujet-verbe.",
    "grammaticalRole": "Syntagme prépositionnel : « zu » (+ datif) + pronom démonstratif masculin « diesem » + nom masculin « Zweck » au datif singulier.",
    "syntaxNote": "Position 1 de la phrase, provoquant la règle V2 : le verbe auxiliaire « haben » vient immédiatement en position 2 avant le sujet « Kommunisten ».",
    "etymology": "Du moyen haut-allemand « zwec » (cheville de bois, clou de fixation, puis clou central d'une cible de tir à l'arc ; étymon antérieur incertain, probable racine germanique *twakka-). Par métaphore de précision balistique médiévale : le point de mire, le but conscient et délibéré que l'on vise.",
    "relatedConcepts": [
      "v2",
      "dat"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p6_s1_w3"
    ]
  },
  "ch0_p6_s1_w8": {
    "wordId": "ch0_p6_s1_w8",
    "translationFr": "très diverses / extrêmement variées",
    "literalTranslation": "très diverses, extrêmement différenciées (superlatif au datif féminin pluriel)",
    "contextNote": "Qualifie « Nationalitäten ». Souligne le caractère cosmopolite et multinational des délégués ouvriers réunis à Londres. Découplé de toute préposition.",
    "grammaticalRole": "Adjectif qualificatif au superlatif absolu décliné au génitif féminin pluriel en -en après l'article « der ».",
    "relatedConcepts": [
      "gen",
      "decl"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p6_s1_w8"
    ],
    "etymology": "Participe passé adjectivé du verbe « verscheiden » (séparer, distinguer, mourir, du moyen haut-allemand verscheiden, de ver- et scheiden = séparer, vieux haut-allemand sceidan, racine proto-germanique *skaidanan)."
  },
  "ch0_p6_s1_w12": {
    "wordId": "ch0_p6_s1_w12",
    "translationFr": "se sont réunis",
    "literalTranslation": "se sont rassemblés en congrès",
    "contextNote": "Fait référence au deuxième congrès de la Ligue des communistes tenu à Londres du 29 novembre au 8 décembre 1847, qui confia formellement la rédaction à Marx et Engels.",
    "grammaticalRole": "Participe passé (Partizip II) du verbe pronominal inséparable « sich versammeln », formant le parfait avec « haben ».",
    "etymology": "Participe passé du verbe « versammeln », formé du préfixe intensif et unificateur « ver- » adjoint à « sammeln » (moyen haut-allemand samelen, vieux haut-allemand samanōn = rassembler en un faisceau ou un corps unifié, dérivé de l'adverbe samano « ensemble », issu de la racine indo-européenne *sem- « un, uni », cognat du grec hama / ἅμα, du latin simul / semel et de l'anglais same). Évoque la convergence vivante des délégués prolétariens de multiples nations surmontant les frontières pour constituer la première internationale ouvrière moderne.",
    "relatedConcepts": [
      "comm_league",
      "prefix_verb"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p6_s1_w12"
    ]
  },
  "ch0_p6_s1_w17": {
    "wordId": "ch0_p6_s1_w17",
    "translationFr": "rédigé / conçu / ébauché",
    "literalTranslation": "esquissé, conçu, jeté les premières lignes sur le papier",
    "contextNote": "Lafargue traduit par « ont rédigé ». En allemand, « entwerfen » implique la création d'un projet, d'un dessein intellectuel et de son architecture textuelle.",
    "grammaticalRole": "Participe passé (Partizip II) du verbe fort inséparable « entwerfen » (entwirft, entwarf, entworfen).",
    "etymology": "Verbe de création intellectuelle combinant le préfixe d'arrachement et de jaillissement « ent- » (moyen haut-allemand ent-, vieux haut-allemand ant-) et le verbe fort « werfen » (lancer, jeter, moyen haut-allemand werfen, vieux haut-allemand werfan, du germanique *werpanan, cognat de l'anglais warp). Littéralement : projeter en avant les premiers traits directeurs d'un dessein révolutionnaire (cognat sémantique exact du latin pro-icere d'où découle projet).",
    "relatedConcepts": [
      "prefix_verb"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch0_p6_s1_w17"
    ]
  },
  "ch0_p6_s1_w33": {
    "wordId": "ch0_p6_s1_w33",
    "translationFr": "publié / rendu public",
    "literalTranslation": "rendu public, divulgué officiellement au grand jour",
    "contextNote": "Forme le passif présent (« veröffentlicht wird ») avec l'auxiliaire « wird » placé en fin de relative.",
    "grammaticalRole": "Participe passé (Partizip II) du verbe inséparable « veröffentlichen ».",
    "etymology": "Verbe verbalisé par le préfixe transitif « ver- » appliqué à l'adjectif « öffentlich » (public, ouvert à la vue de tous, moyen haut-allemand offenlich, vieux haut-allemand offanlīh), formé sur « offen » (ouvert, vieux haut-allemand offan, racine germanique *upana-, apparenté à la préposition auf et à l'anglais open). Littéralement : faire franchir à un texte la barrière de la clandestinité policière pour le faire retentir dans l'espace public universel.",
    "relatedConcepts": [
      "passive",
      "sub_clause",
      "prefix_verb"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p6_s1_w33"
    ]
  },
  "ch1_p1_s1_w2": {
    "wordId": "ch1_p1_s1_w2",
    "translationFr": "histoire",
    "literalTranslation": "histoire, procès historique objectif de devenir social (nominatif féminin singulier)",
    "contextNote": "Premier mot plein et concept inaugural du corps du Manifeste. Strictement découplé de l'article défini « Die » (ch1_p1_s1_w1).",
    "grammaticalRole": "Nom féminin singulier (die Geschichte) au nominatif singulier, sujet grammatical de la proposition maîtresse régissant « ist ».",
    "etymology": "Issu du moyen haut-allemand « geschiht » (événement qui advient, occurrence du destin, affaire), vieux haut-allemand « giskiht » (événement, survenue, décret divin). Déverbal préfixé en « ge- » formé sur le radical du verbe fort « geschehen » (arriver, advenir, se produire, en moyen haut-allemand geschehen, vieux haut-allemand giskehan, proto-germanique *skehaną = s'élancer, bondir). Le terme a évolué au XVIIIe siècle, notamment sous l'impulsion de Herder et de Hegel, du récit particulier (une histoire, une chronique) vers le singulier collectif absolu « die Geschichte » désignant le procès unitaire et objectif de développement de l'humanité.",
    "philosophicalContext": "Formulation inaugurale du matérialisme historique (thèse 1848) : l'histoire humaine n'est pas le produit de volontés individuelles héroïques, d'idées providentielles ou d'une fatalité aveugle, mais le résultat objectif des luttes matérielles de classes. Engels ajoutera en note en 1888 la précision décisive : « ou plus exactement l'histoire écrite », réservant la communauté primitive sans classes découverte par Morgan et Maurer.",
    "relatedConcepts": [
      "nom",
      "hist_mat"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p1_s1_w2"
    ]
  },
  "ch1_p1_s1_w3": {
    "wordId": "ch1_p1_s1_w3",
    "translationFr": "de toute",
    "literalTranslation": "de chaque, de toute (déterminant indéfini au génitif)",
    "contextNote": "Portée universelle de l'affirmation : aucune société historique n'échappe à cette dynamique.",
    "grammaticalRole": "Déterminant indéfini (all) décliné au génitif féminin singulier (flexion forte en -er).",
    "relatedConcepts": [
      "gen",
      "decl"
    ],
    "difficulty": "basic",
    "wordIds": [
      "ch1_p1_s1_w3"
    ]
  },
  "ch1_p1_s1_w4": {
    "wordId": "ch1_p1_s1_w4",
    "translationFr": "jusqu'à nos jours / passée",
    "literalTranslation": "qui a existé jusqu'à présent, antérieure",
    "contextNote": "Lafargue traduit « jusqu'à nos jours ». Engels précisera dans la note de l'édition anglaise de 1888 : « C'est-à-dire, exactement parlant, l'histoire transmise par l'écriture », excluant la préhistoire communautaire primitive alors mal connue.",
    "grammaticalRole": "Adjectif qualificatif (bisherig) décliné au génitif féminin singulier (flexion faible en -en après « aller »).",
    "etymology": "Adjectif temporel synthétique formé par le suffixe « -ig » sur l'adverbe « bisher » (jusqu'ici). « bisher » est composé de la préposition marquant la borne ultime « bis » (moyen haut-allemand biz, contraction discutée d'un étymon vieux haut-allemand *bi-ez / près de cela ou *bi-wizzan, étymologie disputée) et de l'adverbe déictique « her » (vieux haut-allemand hera = vers ici, mouvement en direction du présent de l'énonciation). Il circonscrit la totalité révolue de la préhistoire humaine avant la rupture révolutionnaire du prolétariat.",
    "relatedConcepts": [
      "decl",
      "gen"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p1_s1_w4"
    ]
  },
  "ch1_p1_s1_w5": {
    "wordId": "ch1_p1_s1_w5",
    "translationFr": "société",
    "literalTranslation": "société, communauté d'individus associés",
    "contextNote": "Complément du nom au génitif singulier dépendant de « Geschichte ».",
    "grammaticalRole": "Nom féminin singulier (die Gesellschaft) au génitif.",
    "etymology": "Substantif sociologique primordial issu du moyen haut-allemand « geselleschaft », vieux haut-allemand « giselliscaf » (compagnonnage, confrérie de vie), dérivé de « gisello » (le compagnon de chambrée, textuellement celui qui partage la même salle d'habitation, Saal). Le suffixe statutaire « -schaft » (cognat de l'anglais -ship) institutionalise cette communauté : chez Marx, la Gesellschaft n'est pas une agrégation abstraite d'individus isolés, mais l'ensemble déterminé des rapports de production matériels qui lient organiquement les hommes entre eux.",
    "philosophicalContext": "Pour Marx, la société n'est pas une simple collection d'individus autonomes (comme le postulent les économistes libéraux), mais l'ensemble organique des rapports sociaux que les hommes nouent dans la production de leur vie.",
    "relatedConcepts": [
      "gen",
      "hist_mat"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p1_s1_w5"
    ]
  },
  "ch1_p1_s1_w10": {
    "wordId": "ch1_p1_s1_w10",
    "translationFr": "luttes de classes",
    "literalTranslation": "combats de classes, affrontements de classes",
    "contextNote": "Complément introduit par « von » (+ datif), tournure analytique équivalente à un génitif pluriel (« der Klassenkämpfe »).",
    "grammaticalRole": "Nom composé masculin pluriel (der Klassenkampf -> die Klassenkämpfe) au datif pluriel après « von » (prenant la désinence -n du datif pluriel).",
    "etymology": "Composé dialectique associant : 1° « die Klasse », emprunt au latin classique « classis » (les divisions censitaires civiques des citoyens romains selon leur fortune sous Servius Tullius, issu de la racine archaïque de calare = appeler, convoquer sous les armes) ; 2° consonne de liaison -n- ; 3° « der Kampf » (moyen haut-allemand kampf, vieux haut-allemand kampf), emprunté très tôt au Ier siècle av. J.-C. au latin classique « campus » (le champ de manœuvre militaire, le champ de bataille). La lutte des classes est le moteur objectif de l'histoire humaine.",
    "philosophicalContext": "Concept moteur du marxisme : les classes sociales ne sont pas des castes étanches ou des strates de prestige sociologique, mais des groupements antagonistes définis par la possession ou la non-possession des moyens de production.",
    "relatedConcepts": [
      "class_struggle",
      "comp_noun",
      "dat",
      "hist_mat"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p1_s1_w10"
    ]
  },
  "ch1_p2_s1_w1": {
    "wordId": "ch1_p2_s1_w1",
    "translationFr": "Homme libre",
    "literalTranslation": "homme libre, citoyen libre (antithèse de l'esclave)",
    "contextNote": "Premier terme de la longue série d'antithèses historiques inaugurant le matérialisme historique.",
    "grammaticalRole": "Adjectif substantivé masculin au nominatif singulier sans article (flexion forte en -er : Freier).",
    "etymology": "Issu du moyen haut-allemand « vrī », vieux haut-allemand « frī », issu de la racine germanique commune *frijaz (« qui n'est pas asservi, de condition noble, exempt de corvée »), elle-même issue de la racine indo-européenne *prī- (« aimer, chérir, être bienveillant pour les siens »). L'homme libre dans la communauté germanique est celui qui appartient au clan familial protégé et choyé (d'où la parenté immédiate avec Freund / ami et Frieden / paix), par opposition absolue au captif asservi ou étranger réduit en servitude.",
    "philosophicalContext": "Figure de l'Antiquité grecque et romaine : le citoyen libre jouit de prérogatives juridiques et politiques dont l'esclave est totalement privé.",
    "relatedConcepts": [
      "nom"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p2_s1_w1"
    ]
  },
  "ch1_p2_s1_w3": {
    "wordId": "ch1_p2_s1_w3",
    "translationFr": "esclave",
    "literalTranslation": "esclave (être humain réifié possédé comme marchandise)",
    "contextNote": "Deuxième pôle de l'antagonisme antique. L'esclave est un moyen de production vivant appartenant corps et âme à son maître.",
    "grammaticalRole": "Nom masculin de la déclinaison faible (der Sklave) au nominatif singulier.",
    "etymology": "Issu du moyen haut-allemand « sklāve » (attesté au XIVe siècle), emprunté au latin médiéval « sclavus » (vers le Xe siècle), lui-même issu du grec byzantin « Sklabos » (Σκλάβος / le peuple slave). La capture et la réduction massive en servitude de prisonniers slaves païens d'Europe orientale sous les règnes carolingiens et ottoniens a fait glisser le nom ethnique vers la désignation juridique de marchandise humaine, remplaçant l'ancien terme latin servus (qui a évolué vers le serf de la glèbe).",
    "cognatesFr": [
      "esclave",
      "esclavage"
    ],
    "relatedConcepts": [
      "exploitation"
    ],
    "difficulty": "basic",
    "wordIds": [
      "ch1_p2_s1_w3"
    ]
  },
  "ch1_p2_s1_w5": {
    "wordId": "ch1_p2_s1_w5",
    "translationFr": "patricien",
    "literalTranslation": "patricien (membre de la noblesse romaine de naissance)",
    "contextNote": "Aristocratie foncière de la République romaine.",
    "grammaticalRole": "Nom masculin singulier (der Patrizier) au nominatif.",
    "etymology": "Emprunt au latin « patricius » (membre de la noblesse originaire de Rome), dérivé de « pater » (père de famille, chef des gentes patriciennes sénatoriales siégeant au Sénat sous la royauté). Dans la fresque matérialiste de Marx, les patriciens incarnent l'aristocratie terrienne esclavagiste de l'Antiquité, détentrice exclusive de l'imperium et des magistratures.",
    "cognatesFr": [
      "patricien",
      "patrice"
    ],
    "relatedConcepts": [
      "latin_root"
    ],
    "difficulty": "basic",
    "wordIds": [
      "ch1_p2_s1_w5"
    ]
  },
  "ch1_p2_s1_w7": {
    "wordId": "ch1_p2_s1_w7",
    "translationFr": "plébéien",
    "literalTranslation": "plébéien (membre du peuple romain libre mais exclu du patriciat)",
    "contextNote": "Contrepartie plébéienne du patriciat dans les luttes républicaines de Rome.",
    "grammaticalRole": "Nom masculin singulier (der Plebejer) au nominatif.",
    "etymology": "Emprunt au latin « plebeius », dérivé de « plebs / plebis » (la multitude civique populaire exclue des ordres nobles, issu de la racine indo-européenne *pleh₁- « être plein, remplir », cognat du grec plêthos / πλῆθος et du latin plenus). Représente la classe des citoyens libres romains dépourvus de privilèges gentilices, luttant continuellement contre l'oligarchie patricienne (sécessions de la plèbe sur le Mont Sacré).",
    "cognatesFr": [
      "plébéien",
      "plèbe",
      "plébiscite"
    ],
    "relatedConcepts": [
      "latin_root"
    ],
    "difficulty": "basic",
    "wordIds": [
      "ch1_p2_s1_w7"
    ]
  },
  "ch1_p2_s1_w9": {
    "wordId": "ch1_p2_s1_w9",
    "translationFr": "baron / seigneur féodal",
    "literalTranslation": "baron, haut vassal féodal possessionné",
    "contextNote": "Lafargue traduit « baron et serf ». Représente la classe dominante féodale maîtresse des fiefs.",
    "grammaticalRole": "Nom masculin singulier (der Baron) au nominatif.",
    "etymology": "Emprunté au bas-latin médiéval « baro / baronis », d'origine germanique francique (*baro = homme libre, guerrier vaillant d'élite). Transmis par l'ancien français « baron » pour désigner le grand feudataire tenant son fief directement de la couronne féodale, exerçant haute et basse justice seigneuriale sur ses serfs territoriaux.",
    "cognatesFr": [
      "baron",
      "baronnie"
    ],
    "relatedConcepts": [
      "feudalism"
    ],
    "difficulty": "basic",
    "wordIds": [
      "ch1_p2_s1_w9"
    ]
  },
  "ch1_p2_s1_w11": {
    "wordId": "ch1_p2_s1_w11",
    "translationFr": "serf",
    "literalTranslation": "celui dont le corps appartient en propre au maître (serf)",
    "contextNote": "Traduction exacte du statut juridique médiéval de serf. Le serf n'est pas une marchandise meuble vendable comme l'esclave antique, mais sa personne physique et sa descendance sont attachées à la terre du seigneur.",
    "grammaticalRole": "Adjectif substantivé masculin au nominatif singulier sans article (flexion forte en -er : Leibeigener).",
    "etymology": "Substantif juridique féodal d'une littéralité corporelle saisissante : 1° « der Leib » (le corps vivant incarné, par opposition au cadavre ou à l'esprit, du moyen haut-allemand līp, vieux haut-allemand līb « vie, existence physique », racine germanique *lībam, cognat de l'anglais life) ; 2° l'adjectif « eigen » (propre, possédé en propriété exclusive, moyen haut-allemand eigen, vieux haut-allemand eigan, racine germanique *aiganaz). Le serf n'est pas seulement attaché à la terre (servus terrae) : sa corporéité même appartient au seigneur, qui perçoit des droits sur son mariage et sa progéniture.",
    "philosophicalContext": "Dans le mode de production féodal, l'extorsion du surtravail s'opère par une contrainte extra-économique directe (corvée, banalités) reposant sur le lien corporel et coutumier du servage.",
    "relatedConcepts": [
      "feudalism",
      "comp_noun",
      "comp_word"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p2_s1_w11"
    ]
  },
  "ch1_p2_s1_w13": {
    "wordId": "ch1_p2_s1_w13",
    "translationFr": "maître de jurande / maître de corporation",
    "literalTranslation": "maître bourgeois corporatif, membre de plein droit d'une jurande",
    "contextNote": "Engels précise en note en 1888 : « Le Zunftbürger est le maître de jurande, membre à part entière d'une corporation, et non son doyen ou chef ». Lafargue a traduit par « maître de jurande » pour adapter l'institution germanique aux corporations d'Ancien Régime en France.",
    "grammaticalRole": "Nom composé masculin singulier (der Zunftbürger) au nominatif.",
    "etymology": "Composé corporatif médiéval : 1° « die Zunft » (la jurande artisanale, corporation fermée dotée du monopole de fabrication, du moyen haut-allemand zumft, vieux haut-allemand zumft = accord réglé, convenance statutaire, déverbal du verbe ziemen « convenir, être décent et conforme à la règle statutaire ») ; 2° « der Bürger » (l'habitant franc du bourg fortifié, Burg). Désigne le maître artisan établi intra-muros, membre exclusif d'une jurande jurée jalouse de ses privilèges de corporation.",
    "philosophicalContext": "Le maître de jurande possède son atelier, ses outils et emploie sous sa dépendance des compagnons et apprentis selon des règlements stricts limitant la production.",
    "relatedConcepts": [
      "comp_noun",
      "feudalism"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p2_s1_w13"
    ]
  },
  "ch1_p2_s1_w15": {
    "wordId": "ch1_p2_s1_w15",
    "translationFr": "compagnon",
    "literalTranslation": "compagnon artisan (ouvrier qualifié non propriétaire d'atelier)",
    "contextNote": "Artisan ayant accompli son apprentissage et son tour de compagnonnage, mais restant salarié et dépendant du maître de jurande pour accéder à la maîtrise.",
    "grammaticalRole": "Nom masculin singulier (der Gesell / Geselle) au nominatif.",
    "etymology": "Issu du moyen haut-allemand « geselle », vieux haut-allemand « gisello » (compagnon d'armes ou de travail), composé du préfixe associatif gi- et du radical « sal / Saal » (la grande salle de séjour, l'atelier artisanal). Désignait à l'origine celui qui dormait et mangeait sous le même toit que son maître avant de former, avec l'émergence des corporations fermées, l'ouvrier qualifié exploité interdit de maîtrise par l'endogamie des jurandes.",
    "relatedConcepts": [
      "feudalism"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p2_s1_w15"
    ]
  },
  "ch1_p2_s1_w19": {
    "wordId": "ch1_p2_s1_w19",
    "translationFr": "oppresseurs",
    "literalTranslation": "ceux qui exercent l'oppression, qui pèsent de tout leur poids",
    "contextNote": "Synthèse binaire catégorielle qui subsume toute la diversité bariolée des exemples historiques.",
    "grammaticalRole": "Nom d'agent masculin pluriel (der Unterdrücker -> die Unterdrücker) au nominatif pluriel.",
    "etymology": "Substantif d'agent formé du préfixe spatial descendant « unter- » (vers le bas, sous le joug) et du verbe « drücken » (presser de force, comprimer violemment, écraser, du moyen haut-allemand drücken, vieux haut-allemand drucchan, racine germanique *þrukkijaną). Calque sémantique exact du latin « op-pressor » (de op-primere = presser sous le talon) : l'acteur structurel qui maintient la classe laborieuse sous la contrainte matérielle de son appareil d'asservissement.",
    "philosophicalContext": "Coup de force dialectique : derrière les différences de costume, de droit et de religion entre patriciens, barons et maîtres de jurande, réside toujours le même rapport d'exploitation matérielle.",
    "relatedConcepts": [
      "exploitation",
      "prefix_verb"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p2_s1_w19"
    ]
  },
  "ch1_p2_s1_w21": {
    "wordId": "ch1_p2_s1_w21",
    "translationFr": "opprimés",
    "literalTranslation": "les opprimés, ceux qui sont écrasés sous le joug (nominatif masculin pluriel substantivé)",
    "contextNote": "Second terme du couple antithétique « Unterdrücker und Unterdrückte » (oppresseurs et opprimés).",
    "grammaticalRole": "Participe passé du verbe inséparable « unterdrücken » employé comme substantif décliné au nominatif pluriel sans article.",
    "relatedConcepts": [
      "nom",
      "plural",
      "class_struggle"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p2_s1_w21"
    ],
    "etymology": "Composé du préfixe verbal locatif inséparable « unter- » (en dessous, sous le joug, vieux haut-allemand untar) et du verbe « drücken » (presser, écraser, comprimer avec force, du moyen haut-allemand drücken, vieux haut-allemand drucchen, proto-germanique *thrukjaną = exercer une pression violente).",
    "philosophicalContext": "La contradiction dialectique fondamentale : le terme passif (Unterdrückte) ne désigne pas des victimes résignées, mais le pôle opprimé dont la résistance souterraine ou ouverte constitue la force motrice de la crise sociale."
  },
  "ch1_p2_s1_w25": {
    "wordId": "ch1_p2_s1_w25",
    "translationFr": "opposition constante / antagonisme",
    "literalTranslation": "opposition, antithèse posée en vis-à-vis",
    "contextNote": "Lafargue traduit « en opposition constante ». En allemand philosophique, « Gegensatz » est le terme canonique de la dialectique pour désigner l'antagonisme structurel.",
    "grammaticalRole": "Nom composé masculin singulier (der Gegensatz) au datif après « in ».",
    "etymology": "Nom philosophique forgé dans la langue philosophique allemande (Christian Wolff, Kant, Hegel) comme calque direct du grec « antithesis » : 1° la préposition « gegen » (en face, opposé) ; 2° le substantif « der Satz » (ce qui est posé, le principe arrêté, déverbal du verbe setzen / poser, vieux haut-allemand saz). Désigne chez Marx la polarité antagonique objective entre deux classes dont les intérêts vitaux matériels s'excluent mutuellement.",
    "philosophicalContext": "Catégorie hégélienne capitale : la contradiction interne (Gegensatz) au sein d'une formation sociale est le moteur nécessaire de son autodépassement.",
    "relatedConcepts": [
      "dat",
      "comp_noun",
      "hist_mat"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p2_s1_w25"
    ]
  },
  "ch1_p2_s1_w30": {
    "wordId": "ch1_p2_s1_w30",
    "translationFr": "ininterrompue",
    "literalTranslation": "ininterrompu, perpétuel, continu sans pause",
    "contextNote": "Lafargue traduit « ont mené une guerre ininterrompue ». Souligne la permanence souterraine ou manifeste de la confrontation.",
    "grammaticalRole": "Adjectif qualificatif au masculin accusatif singulier (flexion mixte en -en après « einen »).",
    "etymology": "Participe adjectivé à double préfixation négative et médiane : 1° le préfixe privatif hérité de l'indo-européen « un- » ; 2° le préfixe « unter- » marquant l'interposition médiane ; 3° le verbe fort germanique « brechen » (briser net, moyen haut-allemand brechen, vieux haut-allemand brehhan, racine germanique *brekanan). Littéralement : « dont le cours ne subit jamais d'interruption », décrivant la continuité sous-jacente ininterrompue de la guerre des classes à travers les millénaires.",
    "relatedConcepts": [
      "acc",
      "decl"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p2_s1_w30"
    ]
  },
  "ch1_p2_s1_w33": {
    "wordId": "ch1_p2_s1_w33",
    "translationFr": "dissimulée / masquée",
    "literalTranslation": "cachée, masquée, larvée, souterraine",
    "contextNote": "Adjectif qualifiant « Kampf ». La lutte de classes existe au quotidien dans la résistance muette des exploités même sans révolution ouverte.",
    "grammaticalRole": "Adjectif participe au masculin accusatif singulier en -en.",
    "etymology": "Participe du verbe d'occultation « verstecken », formé du préfixe intensif « ver- » et du verbe « stecken » (ficher, enfoncer dans un recoin sombre, moyen haut-allemand stecken, vieux haut-allemand stehhan, racine germanique *stik-, cognat de l'anglais stick). Évoque la résistance passive, les grèves clandestines ou les sabotages quotidiens où la lutte des classes agit sans bruit avant d'exploser sur les barricades.",
    "relatedConcepts": [
      "acc"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p2_s1_w33"
    ]
  },
  "ch1_p2_s1_w36": {
    "wordId": "ch1_p2_s1_w36",
    "translationFr": "ouvert / déclaré",
    "literalTranslation": "ouvert au grand jour, public, déclaré (adjectif à l'accusatif masculin singulier)",
    "contextNote": "Antithèse de « versteckt » : passage à la confrontation révolutionnaire ouverte.",
    "grammaticalRole": "Adjectif qualificatif au masculin accusatif singulier en -en.",
    "relatedConcepts": [
      "acc"
    ],
    "difficulty": "basic",
    "wordIds": [
      "ch1_p2_s1_w36"
    ],
    "etymology": "Issu du moyen haut-allemand « offen », vieux haut-allemand « offan » (manifeste, public, non masqué)."
  },
  "ch1_p2_s1_w47": {
    "wordId": "ch1_p2_s1_w47",
    "translationFr": "transformation révolutionnaire / refonte",
    "literalTranslation": "refonte complète des formes, remodelage radical de la structure",
    "contextNote": "Lafargue traduit par « transformation révolutionnaire ». En allemand, « Umgestaltung » insiste sur la métamorphose plastique globale de toute l'architecture de la société.",
    "grammaticalRole": "Nom composé féminin (die Umgestaltung) au datif singulier après la préposition « mit ».",
    "etymology": "Nom révolutionnaire unissant : 1° le préfixe de retournement complet de bas en haut « um- » (marquant une inversion radicale de cap, comme dans Umwälzung / révolution, issu du vieux haut-allemand umbi) ; 2° « die Gestaltung » (la mise en forme, la morphologie concrète, dérivé de Gestalt = forme, stature organisée, participe substantivé de stellen / poser debout). Désigne la refonte intégrale de la structure économique et de l'appareil d'État d'une société sous la hache révolutionnaire.",
    "philosophicalContext": "Premier terme de l'alternative historique : l'aboutissement révolutionnaire où la classe ascendante réorganise l'ensemble du mode de production (ex: 1789 pour la bourgeoisie).",
    "relatedConcepts": [
      "comp_noun",
      "dat",
      "revolution"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p2_s1_w47"
    ]
  },
  "ch1_p2_s1_w56": {
    "wordId": "ch1_p2_s1_w56",
    "translationFr": "ruine / perte / effondrement",
    "literalTranslation": "naufrage, effondrement vers le bas, écroulement irrémédiable (datif masculin singulier)",
    "contextNote": "Lafargue traduit « par la destruction des deux classes en lutte ». Untergang désigne littéralement la descente dans l'abîme ou le naufrage total d'un navire. Strictement découplé de l'adjectif « gemeinsamen ».",
    "grammaticalRole": "Nom composé masculin singulier (der Untergang) au datif singulier avec la désinence archaïque -e après « mit dem ».",
    "etymology": "Substantif dramatique formé de la préposition germanique « unter » (en dessous, vers le bas, vieux haut-allemand untar, proto-germanique *under) et du déverbal « der Gang » (la marche, l'allée, en moyen haut-allemand ganc, vieux haut-allemand gang, issu du verbe fort gehen = aller, marcher). Évoque littéralement la marche vers l'abîme, le coucher d'un astre (Sonnenuntergang) ou le naufrage irrémédiable d'un navire.",
    "philosophicalContext": "Second terme capital de l'alternative dialectique posée par Marx : le cours de l'histoire n'est nullement voué à un progrès inéluctable ; si la classe exploitée ne parvient pas à abattre révolutionnairement la classe dominante, la lutte peut s'achever par la barbarie et l'effondrement mutuel des classes en conflit (comme lors de la décomposition de l'Empire romain d'Occident).",
    "relatedConcepts": [
      "comp_noun",
      "dat",
      "hist_mat"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p2_s1_w56"
    ]
  },
  "ch1_p3_s1_w13": {
    "wordId": "ch1_p3_s1_w13",
    "translationFr": "division / organisation structurée",
    "literalTranslation": "articulation en membres distincts, découpage anatomique ordonné",
    "contextNote": "Lafargue traduit par « une organisation complète de la société en classes distinctes ». En allemand, « Gliederung » est une métaphore corporelle : les ordres sociaux étaient vus comme les organes d'un corps.",
    "grammaticalRole": "Nom féminin singulier (die Gliederung) à l'accusatif, COD de « finden wir ».",
    "etymology": "Nom d'anatomie sociale dérivé en « -ung » du verbe « gliedern » (articuler en organes), formé sur « das Glied » (le membre corporel, l'articulation osseuse, le maillon d'une chaîne, moyen haut-allemand glit, vieux haut-allemand glid, racine germanique *galiþą). Marx emploie ce terme morphologique pour disséquer l'emboîtement hyper-hiérarchisé des ordres corporatifs et des états d'Ancien Régime.",
    "philosophicalContext": "Dans les sociétés pré-capitalistes, l'inégalité est juridiquement institutionnalisée et articulée en statuts distincts garantis par la coutume ou la foi.",
    "relatedConcepts": [
      "acc"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p3_s1_w13"
    ]
  },
  "ch1_p3_s1_w18": {
    "wordId": "ch1_p3_s1_w18",
    "translationFr": "ordres / états sociaux",
    "literalTranslation": "ordres, états juridiques fermés (comme les trois ordres de l'Ancien Régime)",
    "contextNote": "Lafargue traduit ici par « classes », mais en allemand, « Stand » s'oppose précisément à « Klasse » : le Stand est un ordre féodal juridique fixé par la naissance (noblesse, clergé, tiers-état).",
    "grammaticalRole": "Nom masculin pluriel (der Stand -> die Stände) à l'accusatif pluriel après « in ».",
    "etymology": "Issu du moyen haut-allemand « stant », vieux haut-allemand « stant » (posture debout, position ferme, rang statutaire immuable), déverbal direct de « stehen » (se tenir debout, demeurer immobile, issu de la racine indo-européenne *steh₂- « se tenir debout »). Cognat du latin status (d'où état) et de l'anglais estate / stand. Désigne les ordres féodaux corporatifs rigides et fermés, où l'individu est rivé héréditairement à son rang juridique.",
    "philosophicalContext": "Distinction sociologique cardinale chez Marx : l'ordre (Stand) relève du privilège juridique féodal, tandis que la classe (Klasse) est une catégorie purement économique liée aux rapports marchands modernes.",
    "relatedConcepts": [
      "acc",
      "plural",
      "feudalism"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p3_s1_w18"
    ]
  },
  "ch1_p3_s1_w21": {
    "wordId": "ch1_p3_s1_w21",
    "translationFr": "multiple / variée",
    "literalTranslation": "qui a de multiples plis, variée, foisonnante",
    "contextNote": "Qualifie l'extrême complexité des hiérarchies d'Ancien Régime.",
    "grammaticalRole": "Adjectif qualificatif décliné à l'accusatif féminin singulier en -e après l'article indéfini « eine ».",
    "etymology": "Issu du moyen haut-allemand « manecvalt », vieux haut-allemand « managfalt », composé du déterminant germanique commun *manag (maint, nombreux, qui a donné manch et l'anglais many) et du morphème suffixal multiplicatif « -falt » (dérivé du verbe falten = plier, racine indo-européenne *pel- « plier », qui a produit en latin multiplex et en grec pollaploûs). Cognat parfait de l'anglais « manifold » : textuellement « qui a de multiples plis », caractérisant ici l'infinie stratification des privilèges d'Ancien Régime.",
    "relatedConcepts": [
      "acc",
      "decl"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p3_s1_w21"
    ]
  },
  "ch1_p3_s1_w22": {
    "wordId": "ch1_p3_s1_w22",
    "translationFr": "échelle graduée / hiérarchie",
    "literalTranslation": "découpage en degrés successifs, échelonnement en marches d'escalier",
    "contextNote": "Lafargue traduit par « une échelle graduée de conditions sociales ».",
    "grammaticalRole": "Nom féminin singulier (die Abstufung) à l'accusatif.",
    "etymology": "Nom d'architecture et de stratification dérivé en « -ung » de « abstufen », formé sur « die Stufe » (la marche d'escalier, le degré hiérarchique, moyen haut-allemand stuofe, vieux haut-allemand stuofa, racine germanique *stōpō liée à stapfen = marcher à pas réguliers) précédé du préfixe séparateur descendant « ab- ». Évoque la gradation en cascade des privilèges féodaux.",
    "relatedConcepts": [
      "acc"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p3_s1_w22"
    ]
  },
  "ch1_p3_s2_w8": {
    "wordId": "ch1_p3_s2_w8",
    "translationFr": "chevaliers",
    "literalTranslation": "chevaliers (ordre équestre dans la Rome antique : equites)",
    "contextNote": "Dans la Rome républicaine et impériale, les chevaliers formaient la classe financière et commerçante située entre les patriciens sénatoriaux et la plèbe.",
    "grammaticalRole": "Nom masculin pluriel (der Ritter -> die Ritter) à l'accusatif pluriel.",
    "etymology": "Issu du moyen haut-allemand « ritter / rīter » (homme d'armes combattant à cheval, chevalier noble), dérivé d'agent moyen haut-allemand (en dialecte bas-allemand ou néerlandais ridder) du verbe fort germanique « rītan » (chevaucher, aller à cheval, vieux haut-allemand rītan, cognat de l'anglais ride). Équivalent féodal du latin eques et miles : dans la Rome antique citée par Marx, l'ordre équestre formait l'aristocratie financière et marchande enrichie par les fermes d'impôts de l'Empire.",
    "relatedConcepts": [
      "acc",
      "plural"
    ],
    "difficulty": "basic",
    "wordIds": [
      "ch1_p3_s2_w8"
    ]
  },
  "ch1_p3_s2_w16": {
    "wordId": "ch1_p3_s2_w16",
    "translationFr": "seigneurs féodaux",
    "literalTranslation": "seigneurs féodaux, maîtres du fief",
    "contextNote": "Lafargue traduit par « des seigneurs ». En allemand, « Feudalherren » précise leur qualité juridique de possesseurs de fief.",
    "grammaticalRole": "Nom composé masculin pluriel (der Feudalherr -> die Feudalherren) à l'accusatif pluriel.",
    "etymology": "Composé féodal associant : 1° l'adjectif « feudal » (issu du latin médiéval feudalis, dérivé de feudum / le fief, emprunté au vieux francique germanique *fehu-ōd « bétail et propriété foncière héréditaire », cognat du vieil anglais feoh et de l'allemand Vieh / bétail) ; 2° « der Herr » (le seigneur terrien, issu du moyen haut-allemand hērre, comparatif du vieux haut-allemand hēriro « plus âgé, plus vénérable, supérieur en dignité »). Les Feudalherren sont les possesseurs exclusifs du sol seigneurial.",
    "relatedConcepts": [
      "feudalism",
      "comp_noun",
      "acc"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p3_s2_w16"
    ]
  },
  "ch1_p3_s2_w18": {
    "wordId": "ch1_p3_s2_w18",
    "translationFr": "vassaux",
    "literalTranslation": "vassaux (hommes libres ayant prêté hommage à un suzerain)",
    "contextNote": "Détenteurs de bénéfices féodaux subordonnés aux grands barons.",
    "grammaticalRole": "Nom masculin pluriel (der Vasall -> die Vasallen) à l'accusatif pluriel (déclinaison faible en -en).",
    "etymology": "Emprunté au bas-latin féodal « vassallus » (diminutif de vassus / serviteur, homme dépendant), lui-même issu du celtique gaulois *wasso- / *vassos (jeune serviteur d'armes, combattant fidèle d'un chef). En droit féodal, l'homme libre entré dans la clientèle d'un suzerain par l'hommage et le serment de foi, recevant un bénéfice foncier (le fief) en échange de l'aide militaire et du conseil.",
    "cognatesFr": [
      "vassal",
      "vassaux",
      "vasselage"
    ],
    "relatedConcepts": [
      "feudalism"
    ],
    "difficulty": "basic",
    "wordIds": [
      "ch1_p3_s2_w18"
    ]
  },
  "ch1_p4_s1_w8": {
    "wordId": "ch1_p4_s1_w8",
    "translationFr": "issue / née de",
    "literalTranslation": "émanée, sortie hors des ruines (participe passé au nominatif féminin singulier)",
    "contextNote": "Lafargue traduit par « élevée sur les ruines de la société féodale ». En allemand, c'est un participe parfait adjectivé (hervorgegangen) encadré dans un groupe participial épithète typique de la syntaxe savante allemande.",
    "grammaticalRole": "Participe parfait adjectivé de « hervorgehen », décliné au nominatif féminin singulier en -e après « die ».",
    "syntaxNote": "Construction participiale étendue allemande : « Die [aus dem Untergange...] hervorgegangene moderne bürgerliche Gesellschaft ». Le complément précède le participe placé avant le nom.",
    "relatedConcepts": [
      "decl",
      "sep_verb"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p4_s1_w8"
    ],
    "etymology": "Participe passé du verbe séparable « hervorgehen » (sortir en avant, émaner de, de hervor + gehen)."
  },
  "ch1_p4_s1_w10": {
    "wordId": "ch1_p4_s1_w10",
    "translationFr": "bourgeoise / civile",
    "literalTranslation": "bourgeoise (de la bourgeoisie capitaliste) et civile (adjectif au nominatif féminin singulier)",
    "contextNote": "Adjectif central de la théorie marxienne, strictement découplé du nom voisin « Gesellschaft ».",
    "grammaticalRole": "Adjectif qualificatif décliné au nominatif féminin singulier en -e après « die moderne ».",
    "etymology": "Dérivé au moyen du suffixe d'appartenance « -lich » de « der Bürger » (le citoyen franc, l'habitant du bourg fortifié, Burg). Possède en allemand philosophique une ambivalence structurelle : il traduit à la fois le français « bourgeois » (la classe dominante détentrice du capital) et « civil » (le citoyen privé de la sphère des besoins).",
    "philosophicalContext": "Critique de Hegel : dans les Principes de la philosophie du droit (1821), Hegel glorifiait la « bürgerliche Gesellschaft » comme système des besoins civils pacifiés par l'État. Marx démontre que cette prétendue société civile universelle n'est rien d'autre que l'organisation économique de la domination de classe de la bourgeoisie.",
    "relatedConcepts": [
      "nom",
      "bourgeoisie"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p4_s1_w10"
    ]
  },
  "ch1_p4_s1_w14": {
    "wordId": "ch1_p4_s1_w14",
    "translationFr": "antagonismes de classes",
    "literalTranslation": "oppositions fondamentales et irréductibles de classes (accusatif masculin pluriel)",
    "contextNote": "Fiche autonome complète sans renvoi.",
    "grammaticalRole": "Nom composé masculin pluriel (die Klassengegensätze) à l'accusatif pluriel, COD de « aufgehoben ».",
    "etymology": "Composé dialectique associant « die Klasse » (du latin classis) et « der Gegensatz » (calque philosophique du grec antíthesis, formé de gegen = en face, contre + Satz = position posée, déverbal de setzen). Développé par Hegel pour désigner la contradiction objective en mouvement.",
    "relatedConcepts": [
      "acc",
      "plural",
      "class_struggle",
      "comp_noun"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p4_s1_w14"
    ],
    "philosophicalContext": "L'illusion libérale réfutée : la bourgeoisie proclamait en 1789 l'égalité universelle en droits et l'abolition des privilèges. Marx dévoile que cette égalité juridique formelle ne supprime nullement l'antagonisme de classe, mais le rend au contraire plus direct et universel."
  },
  "ch1_p4_s1_w16": {
    "wordId": "ch1_p4_s1_w16",
    "translationFr": "aboli / supprimé",
    "literalTranslation": "supprimé, aboli, dépassé dialectiquement (participe passé)",
    "contextNote": "Terme hégélien cardinal (« Aufhebung ») employé ici dans sa portée polémique et philosophique.",
    "grammaticalRole": "Participe passé du verbe fort séparable « aufheben » formant le passé composé avec l'auxiliaire « hat ».",
    "philosophicalContext": "Le concept dialectique d'« Aufhebung » chez Hegel possède le triple sens de nier/supprimer, conserver/maintenir, et élever à un niveau supérieur. Marx constate sarcastiquement que la bourgeoisie n'a même pas aboli au sens ordinaire les contradictions : elle les a simplement exacerbées.",
    "syntaxNote": "Cadre de la proposition principale (Satzklammer) : l'auxiliaire conjugué « hat » est en position 12 et le participe « aufgehoben » clôt la phrase en position 16 après la négation « nicht ».",
    "relatedConcepts": [
      "past",
      "sep_verb",
      "hist_mat"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p4_s1_w16"
    ],
    "etymology": "Formé du préverbe germanique séparable « auf- » (vers le haut, vieux haut-allemand ūf) et du verbe fort « heben » (lever, soulever, en vieux haut-allemand heffan, proto-germanique *habjaną)."
  },
  "ch1_p4_s2_w8": {
    "wordId": "ch1_p4_s2_w8",
    "translationFr": "conditions objectives",
    "literalTranslation": "conditions, stipulations, termes d'un rapport",
    "contextNote": "Lafargue traduit « de nouvelles conditions d'oppression ».",
    "grammaticalRole": "Nom féminin pluriel (die Bedingung -> die Bedingungen) à l'accusatif.",
    "etymology": "Substantif juridique forgé au moyen haut-allemand « bedingunge » (accord solennel, stipulation convenue lors d'un procès ou d'un traité), dérivé du verbe « bedingen » (de Ding / la cour de justice publique germanique, la cause plaidée). Chez Marx, les « Bedingungen » se matérialisent en 'conditions matérielles objectives' qui déterminent les formes de la vie sociale indépendamment de la volonté subjective des individus.",
    "relatedConcepts": [
      "acc",
      "plural"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p4_s2_w8"
    ]
  },
  "ch1_p4_s2_w13": {
    "wordId": "ch1_p4_s2_w13",
    "translationFr": "formes concrètes / configurations",
    "literalTranslation": "mises en forme, conformations concrètes, configurations plastiques",
    "contextNote": "Lafargue traduit « de nouvelles formes de lutte ». En allemand, « Gestaltungen » souligne que la lutte adopte un nouveau profil morphologique (syndicats, grèves, presse ouvrière contre coalitions patronales).",
    "grammaticalRole": "Nom féminin pluriel (die Gestaltung -> die Gestaltungen) à l'accusatif.",
    "etymology": "Nom de genèse formelle issu du moyen haut-allemand « gestalt », vieux haut-allemand « gistalt » (apparence corporelle, stature, conformation visible, participe substantivé du verbe stellen / poser debout). Désigne les métamorphoses et configurations concrètes sous lesquelles se réorganise la domination de classe au cours des transitions historiques.",
    "relatedConcepts": [
      "acc",
      "plural"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p4_s2_w13"
    ]
  },
  "ch1_p4_s2_w21": {
    "wordId": "ch1_p4_s2_w21",
    "translationFr": "substitué / mis en place",
    "literalTranslation": "posé, institué, établi à la place de (participe passé)",
    "contextNote": "Participe passé fermant la proposition après l'auxiliaire « hat ».",
    "grammaticalRole": "Participe passé du verbe faible transitif « setzen » formant le parfait avec « hat ».",
    "syntaxNote": "Fermeture du cadre syntaxique verbal (Satzklammer) en dernière position.",
    "relatedConcepts": [
      "past"
    ],
    "difficulty": "basic",
    "wordIds": [
      "ch1_p4_s2_w21"
    ],
    "etymology": "Issu du moyen haut-allemand « setzen », vieux haut-allemand « sezzen » (faire asseoir, poser, établir), causatif germanique (*satjaną) dérivé du verbe fort « sitzen » (être assis, du proto-germanique *sitjaną, racine indo-européenne *sed-)."
  },
  "ch1_p5_s1_w9": {
    "wordId": "ch1_p5_s1_w9",
    "translationFr": "distingue / caractérise",
    "literalTranslation": "marque d'un signe distinctif",
    "contextNote": "Lafargue traduit par « le caractère distinctif de notre époque [...] est d'avoir... ».",
    "grammaticalRole": "Verbe réfléchi à particule séparable au présent (verbe auszeichnen).",
    "wordIds": [
      "ch1_p5_s1_w9"
    ],
    "etymology": "Verbe composé séparable unissant la préposition d'extraction « aus » (hors de) et « zeichnen » (dessiner, marquer d'un signe, de Zeichen / signe).",
    "syntaxNote": "La particule séparable « aus » est rejetée en position 13, juste avant la subordonnée introduite par « daß ».",
    "relatedConcepts": [
      "sep_verb",
      "v2"
    ],
    "difficulty": "intermediate"
  },
  "ch1_p5_s1_w19": {
    "wordId": "ch1_p5_s1_w19",
    "translationFr": "simplifiés en deux pôles",
    "literalTranslation": "rendus simples, dépouillés de leurs compartiments multiples",
    "contextNote": "Lafargue traduit par « simplifié les antagonismes de classes ». C'est l'un des constats sociologiques majeurs du Manifeste.",
    "grammaticalRole": "Participe passé (Partizip II) du verbe « vereinfachen », complétant l'auxiliaire « hat » dans la subordonnée.",
    "etymology": "Verbe factitif formé du préfixe d'accomplissement transitif « ver- » et de l'adjectif « einfach » (moyen haut-allemand einvach = simple, uni, composé de ein = un seul + Fach = division, pli d'étoffe, compartiment). Calque morphologique et sémantique rigoureux du latin « sim-plex » (qui n'a qu'un seul pli, par opposition à duplex ou multiplex). Marx montre que le capitalisme a balayé le lacis des ordres médiévaux pour réduire le drame historique à deux acteurs nus.",
    "philosophicalContext": "Le capitalisme élimine la mosaïque médiévale des ordres, guildes et corporations pour polariser violemment toute la société en deux blocs uniques et face à face : Bourgeoisie et Prolétariat.",
    "relatedConcepts": [
      "sub_clause",
      "hist_mat"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p5_s1_w19"
    ]
  },
  "ch1_p5_s2_w4": {
    "wordId": "ch1_p5_s2_w4",
    "translationFr": "se divise / se scinde brutalement",
    "literalTranslation": "se fend en deux sous la hache, se clive violemment (verbe spalten)",
    "contextNote": "Lafargue traduit par « se divise de plus en plus ». En allemand, « spalten » est un verbe d'une très grande force expressive (fendre du bois d'un coup net de merlin).",
    "grammaticalRole": "Verbe pronominal (sich spalten) à la 3e personne du singulier au présent de l'indicatif.",
    "etymology": "Issu du moyen haut-allemand « spalten », vieux haut-allemand « spaltan » (verbe fort rédupliquant de la classe VII), de la racine germanique commune *spaldan- (« fendre en deux éclats »), issue de l'indo-européen *(s)pʰeld- (fendre le bois, cognat du vieil anglais speld / éclat de bois et de l'anglais moderne split). Verbe de rupture physique violente traduisant le déchirement irréversible du corps social.",
    "philosophicalContext": "Cette métaphore géologique et physique montre la rupture irréversible du tissu social : il ne s'agit pas d'un simple désaccord politique, mais d'une cassure de la société en deux plaques tectoniques irréconciliables.",
    "relatedConcepts": [
      "v2"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p5_s2_w4"
    ]
  },
  "ch1_p5_s2_w13": {
    "wordId": "ch1_p5_s2_w13",
    "translationFr": "camps / tranchées",
    "literalTranslation": "cantonnements militaires, camps fortifiés de campagne",
    "contextNote": "Lafargue traduit « en deux vastes camps ennemis ». Métaphore militaire de la guerre civile permanente.",
    "grammaticalRole": "Nom neutre pluriel (das Lager -> die Lager) à l'accusatif pluriel après la préposition « in » marquant la division résultante.",
    "etymology": "Substantif d'art militaire issu du moyen haut-allemand « lager », vieux haut-allemand « lagar » (l'endroit où l'on s'allonge pour dormir, gîte), déverbal de « liegen » (être couché, étendu en plaine). Passé dès le bas Moyen Âge au sens de campement retranché d'une armée en campagne belligérante (cognat de l'anglais lair). Métaphore de la polarisation guerrière de la société en deux camps retranchés prêts à l'affrontement.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p5_s2_w13"
    ]
  },
  "ch1_p5_s2_w21": {
    "wordId": "ch1_p5_s2_w21",
    "translationFr": "directement opposées en vis-à-vis",
    "literalTranslation": "qui se tiennent debout directement l'une en face de l'autre (participe)",
    "contextNote": "Lafargue traduit « diamétralement opposées ». En allemand, c'est un participe présent adjectivé très visuel : elles sont debout, l'œil dans l'œil.",
    "grammaticalRole": "Participe présent adjectivé du verbe séparable « gegenüber|stehen », décliné à l'accusatif féminin pluriel en -e.",
    "etymology": "Participe adjectivé du verbe composé « gegenüberstehen » : adverbe de confrontation réciproque « gegenüber » (composé de gegen = contre, en face + über = par-dessus l'intervalle spatial) et verbe statique « stehen » (se tenir fermement debout sur ses gardes, vieux haut-allemand stān / stēn). Traduit visuellement la tension dramatique de deux lignes de front dressées à portée de canon.",
    "relatedConcepts": [
      "decl",
      "acc"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p5_s2_w21"
    ]
  },
  "ch1_p5_s2_w24": {
    "wordId": "ch1_p5_s2_w24",
    "translationFr": "bourgeoisie",
    "literalTranslation": "bourgeoisie, classe des capitalistes modernes possédant les moyens de production (nominatif féminin singulier)",
    "contextNote": "Premier pôle de la scission moderne. Mentionné sans article dans le texte allemand. Strictement découplé de l'article « la ».",
    "grammaticalRole": "Nom féminin singulier (die Bourgeoisie) au nominatif singulier sans article, premier terme de l'explicitation en apposition coordonné par « und ».",
    "philosophicalContext": "Engels (note de 1888) : « On entend par bourgeoisie la classe des capitalistes modernes qui possèdent les moyens de production sociale et emploient le travail salarié. »",
    "cognatesFr": [
      "bourgeoisie",
      "bourgeois",
      "bourg"
    ],
    "relatedConcepts": [
      "nom",
      "bourgeoisie"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p5_s2_w24"
    ],
    "etymology": "Emprunt direct au français « bourgeoisie », dérivé de « bourgeois », issu du bas-latin « burgensis » (habitant franc d'un bourg fortifié, Burg)."
  },
  "ch1_p5_s2_w26": {
    "wordId": "ch1_p5_s2_w26",
    "translationFr": "prolétariat",
    "literalTranslation": "prolétariat, classe des ouvriers salariés modernes contraints de vendre leur force de travail (nominatif neutre singulier)",
    "contextNote": "Second pôle de la scission moderne. Mentionné sans article dans le texte allemand. Strictement découplé de l'article « le ».",
    "grammaticalRole": "Nom neutre singulier (das Proletariat) au nominatif singulier sans article, coordonné à « Bourgeoisie » par « und ».",
    "etymology": "Emprunt savant au latin républicain « proletarius » (citoyen romain de la dernière classe civique de Servius Tullius, exempt d'impôts et inapte au service des armes faute de biens, dont la seule contribution à la cité était sa progéniture, de « proles » = descendance, lignée). Le mot est repris par les socialistes français (notamment Auguste Blanqui) vers 1830 avant d'être érigé par Marx en concept fondamental du matérialisme historique.",
    "philosophicalContext": "Engels (note de 1888) : « On entend par prolétariat la classe des ouvriers salariés modernes qui, ne possédant pas en propre de moyens de production, sont réduits à vendre leur force de travail pour pouvoir vivre. »",
    "cognatesFr": [
      "prolétariat",
      "prolétaire"
    ],
    "relatedConcepts": [
      "nom",
      "class_struggle"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p5_s2_w26"
    ]
  },
  "ch1_p6_s1_w8": {
    "wordId": "ch1_p6_s1_w8",
    "translationFr": "premiers bourgeois / bourgeois forains",
    "literalTranslation": "bourgeois du palis, habitants des faubourgs palissadés",
    "contextNote": "Lafargue traduit par « les bourgeois des premières agglomérations urbaines ». En allemand historique, « Pfahlbürger » est un terme technique médiéval d'une précision remarquable : les serfs enfuis s'installaient entre la muraille de pierre de la cité et la palissade extérieure de pieux (Pfahlwerk).",
    "grammaticalRole": "Nom composé masculin pluriel (der Pfahlbürger -> die Pfahlbürger) au nominatif sujet de « gingen ... hervor ».",
    "etymology": "Composé médiéval de haute précision juridique : 1° « der Pfahl » (le pieu, palissade), issu du vieux haut-allemand « phāl », emprunté très tôt (dès le Ier siècle av. J.-C. lors des guerres germaniques de Rome) au latin classique « pālus » (pieu fiché en terre pour former un retranchement militaire ; cognat direct du français « pal », « palis » et « palissade ») ; 2° « der Bürger » (le citoyen urbain libre), issu du vieux haut-allemand « burgari », dérivé de « Burg » (la cité fortifiée, le château fort, de la racine germanique *burgz « lieu élevé et fortifié », apparenté à Berg et au grec pyrgos / tour). Dès le XIIIe siècle (vers 1240 dans les chartes de Worms et Spire), les « Pfahlbürger » désignaient les serfs campagnards fugitifs installés dans la zone intermédiaire palissadée (« im Pfahle ») située entre les remparts de pierre de la ville et les terres seigneuriales, accédant aux franchises communales par le droit coutumier selon l'adage « Stadtluft macht frei nach Jahr und Tag » (L'air de la ville rend libre après un an et un jour).",
    "philosophicalContext": "Marx retrace la genèse spatiale et matérielle de la bourgeoisie : elle ne naît pas d'une concession des rois, mais de l'initiative clandestine de serfs fugitifs qui ont conquis leur émancipation hors des terres seigneuriales (« Stadtluft macht frei »).",
    "relatedConcepts": [
      "comp_noun",
      "feudalism",
      "bourgeoisie"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p6_s1_w8"
    ]
  },
  "ch1_p6_s1_w16": {
    "wordId": "ch1_p6_s1_w16",
    "translationFr": "bourgeoisie des faubourgs / population foraine",
    "literalTranslation": "corps des bourgeois de palissade, collectivité des bourgeois forains (datif féminin singulier)",
    "contextNote": "Lafargue traduit « de cette population municipale ». Suffixe collectif et institutionnel -schaft désignant le corps civique autonome des faubourgs palissadés.",
    "grammaticalRole": "Nom composé féminin singulier (die Pfahlbürgerschaft) au datif singulier après « aus dieser ».",
    "etymology": "Composé institutionnel médiéval associant « Pfahlbürger » (bourgeois de palissade, du latin palus = pieu et Burg = château fortifié) et le suffixe germanique de corps constitué « -schaft » (moyen haut-allemand -schaft, vieux haut-allemand -scaf / -scāphi, du proto-germanique *skapaz = état, condition ordonnée, apparenté à schaffen = créer, instituer).",
    "relatedConcepts": [
      "comp_noun",
      "dat",
      "feudalism"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p6_s1_w16"
    ],
    "philosophicalContext": "Marx et Engels (MEGA2, Maximilien Rubel) soulignent ici le passage dialectique décisif de la rébellion servile individuelle à la collectivité municipale jurée : le corps constitué des bourgeois forains fournit la matrice politique et territoriale d'où émergeront les premiers éléments révolutionnaires de la bourgeoisie moderne."
  },
  "ch1_p7_s1_w2": {
    "wordId": "ch1_p7_s1_w2",
    "translationFr": "découverte",
    "literalTranslation": "découverte (action d'ôter la couverture, de révéler)",
    "contextNote": "Lafargue traduit « La découverte de l'Amérique ». 1492 marque le coup d'envoi du marché mondial.",
    "grammaticalRole": "Nom féminin singulier (die Entdeckung) au nominatif sujet.",
    "etymology": "Nom d'action formé du préfixe privatif et réversif « ent- » (moyen haut-allemand ent-, vieux haut-allemand ant-, annulant l'effet du verbe de base) appliqué à « decken » (couvrir, protéger d'un voile ou d'un toit, moyen haut-allemand decken, vieux haut-allemand decken, racine indo-européenne *(s)teg- « couvrir », cognat du grec stegos / toit, du latin tegere et du français toit / tégument). Calque morphologique parfait du bas-latin « dis-cooperire » d'où découle le français 'découverte' : dévoiler une terre tenue jusque-là à l'abri des regards.",
    "relatedConcepts": [
      "prefix_verb"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p7_s1_w2"
    ]
  },
  "ch1_p7_s1_w6": {
    "wordId": "ch1_p7_s1_w6",
    "translationFr": "circumnavigation / contournement maritime",
    "literalTranslation": "contournement par bateau, navigation autour du continent",
    "contextNote": "Fait référence au passage historique du Cap de Bonne-Espérance par Vasco de Gama en 1497, contournant le monopole commercial terrestre de l'Empire ottoman et de Venise.",
    "grammaticalRole": "Nom composé féminin singulier (die Umschiffung) au nominatif sujet coordonné.",
    "etymology": "Terme nautique composé unissant : 1° le préfixe circulaire « um- » (rotation autour d'un centre ou contournement d'un obstacle, vieux haut-allemand umbi) ; 2° le nom marin « das Schiff » (le navire, issu du moyen haut-allemand schif, vieux haut-allemand skif, racine germanique commune *skipą, cognat de l'anglais ship) ; 3° le suffixe d'action « -ung ». Désigne la circumnavigation maritime pionnière autour du cap de Bonne-Espérance accomplie par Vasco de Gama en 1497-1498, ouvrant la route transocéanique directe vers les Indes.",
    "relatedConcepts": [
      "comp_noun"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p7_s1_w6"
    ]
  },
  "ch1_p7_s1_w10": {
    "wordId": "ch1_p7_s1_w10",
    "translationFr": "naissante / montante",
    "literalTranslation": "qui monte, qui émerge, qui grandit (participe présent adjectivé)",
    "contextNote": "Lafargue traduit par « à la bourgeoisie naissante ».",
    "grammaticalRole": "Participe présent adjectivé de « auf|kommen », décliné au datif féminin singulier en -en après « der ».",
    "etymology": "Participe présent adjectivé du verbe composé « aufkommen » : préposition directionnelle verticale « auf » (vers le haut, vieux haut-allemand ūf) + verbe fondamental « kommen » (venir, arriver, moyen haut-allemand komen, vieux haut-allemand queman, racine germanique *kwemaną, racine indo-européenne *gʷem-). Décrit la classe montante, dont la courbe ascensionnelle brise l'équilibre statique de l'ancien monde et s'élève vers le sommet du pouvoir économique.",
    "relatedConcepts": [
      "decl",
      "dat"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p7_s1_w10"
    ]
  },
  "ch1_p7_s1_w14": {
    "wordId": "ch1_p7_s1_w14",
    "translationFr": "champ d'action / terrain",
    "literalTranslation": "terrain, champ matériel d'expansion économique (accusatif neutre singulier)",
    "contextNote": "COD de « schufen ». Métaphore spatiale de l'arène mondiale ouverte au capital.",
    "grammaticalRole": "Nom neutre singulier (das Terrain) à l'accusatif singulier après « ein neues ».",
    "cognatesFr": [
      "terrain"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p7_s1_w14"
    ],
    "etymology": "Emprunt au XVIIIe siècle au français « terrain », dérivé du latin classique « terrenus » (de terre, terrestre), formé sur « terra » (la terre, le sol, issu de la racine indo-européenne *ters- = sécher, terre sèche).",
    "philosophicalContext": "Le capitalisme exige par nature une expansion géographique permanente : le « Terrain » de la bourgeoisie ne peut se cantonner aux limites de la nation, il embrasse le globe terrestre tout entier.",
    "relatedConcepts": [
      "acc",
      "latin_root"
    ]
  },
  "ch1_p7_s2_w13": {
    "wordId": "ch1_p7_s2_w13",
    "translationFr": "échanges commerciaux / commerce",
    "literalTranslation": "échange réciproque, troc, circulation commerciale",
    "contextNote": "Lafargue traduit « le commerce colonial ». En allemand, « der Austausch mit den Kolonien » insiste sur le flux matériel de denrées échangées.",
    "grammaticalRole": "Nom masculin singulier (der Austausch) au nominatif sujet.",
    "etymology": "Substantif économique combinant le préfixe d'extension extérieure « aus- » et le nom « der Tausch » (l'échange marchand, le troc). « Tausch » est un déverbal de « tauschen » (moyen haut-allemand tûschen), doublet étymologique de « täuschen » (tromper, duper), dont l'origine ultime est discutée et incertaine (probablement liée au jargon commercial des foires médiévales et au maquignonnage de chevaux, où l'échange de bêtes s'accompagnait souvent de ruse). Le terme s'est pacifié au XVIIe siècle pour désigner l'échange loyal de biens, avant que Marx n'en fasse le concept de circulation générale des marchandises.",
    "relatedConcepts": [
      "prefix_verb"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p7_s2_w13"
    ]
  },
  "ch1_p7_s2_w19": {
    "wordId": "ch1_p7_s2_w19",
    "translationFr": "multiplication",
    "literalTranslation": "multiplication quantitative, prolifération",
    "contextNote": "Lafargue traduit « la multiplication des moyens d'échange ».",
    "grammaticalRole": "Nom féminin singulier (die Vermehrung) au nominatif.",
    "etymology": "Nom d'action économique forgé sur le comparatif quantitatif « mehr » (plus grand, plus nombreux, moyen haut-allemand mêre, vieux haut-allemand mēro, racine germanique *maizô) encadré par le préfixe transitif d'intensification « ver- » et le suffixe d'action « -ung ». Décrit l'accumulation matérielle auto-croissante du capital marchand qui exige continuellement l'augmentation en masse des marchandises produites.",
    "relatedConcepts": [
      "prefix_verb"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p7_s2_w19"
    ]
  },
  "ch1_p7_s2_w21": {
    "wordId": "ch1_p7_s2_w21",
    "translationFr": "moyens d'échange / instruments monétaires",
    "literalTranslation": "moyens d'échange, instruments de circulation du troc et des marchandises",
    "contextNote": "Terme technique d'économie politique. Désigne l'afflux massif d'argent et d'or extrait des mines des Amériques qui a bouleversé les prix et dynamisé la circulation marchande européenne.",
    "grammaticalRole": "Nom composé neutre pluriel (das Tauschmittel -> die Tauschmittel) au génitif pluriel après l'article « der ».",
    "etymology": "Composé économique rigoureux : 1° « der Tausch » (la circulation marchande, moyen haut-allemand tûschen, étymon discuté) ; 2° « das Mittel » (l'instrument médiateur, le moyen terme, substantivation de l'adjectif vieux haut-allemand mittil = qui se tient au centre, racine germanique *medilaz, cognat de l'anglais middle). Désigne la monnaie métallique (l'or et l'argent extraits des Amériques) en tant qu'équivalent général indispensable pour fluidifier les transactions transocéaniques.",
    "philosophicalContext": "Préfigure l'analyse du Livre I du Capital sur la métamorphose de l'or américain en capital financier mondial.",
    "relatedConcepts": [
      "comp_noun",
      "gen",
      "capital"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p7_s2_w21"
    ]
  },
  "ch1_p7_s2_w24": {
    "wordId": "ch1_p7_s2_w24",
    "translationFr": "marchandises",
    "literalTranslation": "marchandises, biens produits pour la vente sur le marché",
    "contextNote": "Lafargue traduit « et, en général, des marchandises ».",
    "grammaticalRole": "Nom féminin pluriel (die Ware -> die Waren) au génitif pluriel.",
    "etymology": "Issu du moyen haut-allemand « ware », vieux haut-allemand « wara » (marchandise transportée, denrée précieuse destinée au trafic marchand), issu de la racine germanique commune *warō- (« attention, soin vigilant, conservation soigneuse », cognat de wahren = préserver et du vieil anglais waru d'où découle l'anglais ware dans hardware, software). La marchandise est étymologiquement l'objet de précaution et d'estimation marchande, cellule élémentaire du mode de production capitaliste dans 'Le Capital'.",
    "philosophicalContext": "La marchandise (die Ware) sera définie par Marx dès la première ligne du Capital comme la forme cellulaire élémentaire de la richesse dans les sociétés dominées par le capitalisme.",
    "relatedConcepts": [
      "gen",
      "capital"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p7_s2_w24"
    ]
  },
  "ch1_p7_s2_w38": {
    "wordId": "ch1_p7_s2_w38",
    "translationFr": "essor prodigieux / impulsion",
    "literalTranslation": "envol soudain et puissant d'un battement d'ailes, essor vigoureux",
    "contextNote": "Lafargue traduit par « un essor jusqu'alors inconnu ». En allemand, « Aufschwung » évoque un oiseau ou un aigle qui s'élance avec une énergie irrésistible vers les hauteurs.",
    "grammaticalRole": "Nom masculin singulier (der Aufschwung) à l'accusatif, COD du verbe « gaben » (pos. 26).",
    "etymology": "Substantif métaphorique d'une grande énergie cinétique unissant la particule ascendante « auf » (vers les hauteurs) et « der Schwung » (l'élan propulsif, la force centrifuge du pendule ou de la fronde, déverbal fort de schwingen / faire osciller avec vigueur, moyen haut-allemand swunc, vieux haut-allemand swingan, cognat de l'anglais swing). Évoque l'envolée soudaine et vertigineuse de la production marchande arrachée à la torpeur médiévale.",
    "philosophicalContext": "Marx reconnaît sans réserve le rôle historique prodigieusement révolutionnaire et dynamique joué par la bourgeoisie dans l'expansion mondiale des forces productives.",
    "relatedConcepts": [
      "acc"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p7_s2_w38"
    ]
  },
  "ch1_p7_s2_w46": {
    "wordId": "ch1_p7_s2_w46",
    "translationFr": "en décomposition / en dissolution",
    "literalTranslation": "qui tombe en morceaux, qui s'effondre en poussière (participe présent)",
    "contextNote": "Lafargue traduit par « dans la société féodale en dissolution ». En allemand, le préfixe destructif « zer- » indique une dislocation physique irréversible en débris.",
    "grammaticalRole": "Participe présent adjectivé du verbe inséparable « zerfallen », décliné au datif féminin singulier en -en après « der ».",
    "etymology": "Participe adjectivé combinant le préfixe inséparable de destruction intégrale « zer- » (marquant la dislocation en mille morceaux, le broyage irréversible, issu du moyen haut-allemand zer-, vieux haut-allemand zir- / zar-) et le verbe de chute « fallen » (tomber sous son propre poids, moyen haut-allemand vallen, vieux haut-allemand fallan). Littéralement : s'écrouler en ruines et en poussière sous l'effet de sa propre caducité historique.",
    "philosophicalContext": "L'irruption du commerce colonial et de la monnaie ne détruit pas le féodalisme de l'extérieur par la force militaire, elle le fait pourrir et s'effriter de l'intérieur en dissolvant les liens coutumiers naturels.",
    "relatedConcepts": [
      "dat",
      "decl",
      "prefix_verb",
      "feudalism"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p7_s2_w46"
    ]
  },
  "ch1_p7_s2_w51": {
    "wordId": "ch1_p7_s2_w51",
    "translationFr": "développement rapide",
    "literalTranslation": "déploiement progressif, déroulement de ce qui était enroulé",
    "contextNote": "Lafargue traduit « un développement rapide ».",
    "grammaticalRole": "Nom féminin singulier (die Entwicklung) à l'accusatif, COD de « gaben ... eine Entwicklung ».",
    "etymology": "Grand concept hégélien et marxiste de dialectique historique formé de : 1° le préfixe réversif « ent- » (cessation d'une contrainte) ; 2° le verbe « wickeln » (moyen haut-allemand wickeln, dénominal du vieux haut-allemand wickil = pelote de fil, fuseau, racine germanique *wik- liée à l'idée d'enroulement) ; 3° le suffixe « -ung ». Calque morphologique exact du latin « ex-plicare » (dé-plier les replis) et du français « dé-veloppement » (ôter les enveloppes qui brident l'organisme pour libérer la croissance des forces productives).",
    "philosophicalContext": "Concept hégélien : le déploiement immanent des virtualités d'un être ou d'un rapport social.",
    "relatedConcepts": [
      "acc",
      "prefix_verb"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p7_s2_w51"
    ]
  },
  "ch1_p8_s1_w5": {
    "wordId": "ch1_p8_s1_w5",
    "translationFr": "corporatif / des jurandes",
    "literalTranslation": "propre aux jurandes, aux corporations fermées de métier",
    "contextNote": "Lafargue traduit « feudale oder zünftige » par « féodal ou corporatif ».",
    "grammaticalRole": "Adjectif qualificatif (zünftig) au nominatif féminin singulier en -e après « die ».",
    "etymology": "Adjectif statutaire dérivé par le suffixe « -ig » de « die Zunft » (la corporation de métier jurée, du moyen haut-allemand zumft, vieux haut-allemand zumft « ce qui est convenable, statutairement réglé », du verbe ziemen). Caractérise le monopole corporatif féodal qui interdisait strictement à quiconque ne possédait pas la maîtrise jurée d'exercer un métier manuel ou d'embaucher des ouvriers au-delà du quota fixé.",
    "relatedConcepts": [
      "feudalism",
      "decl"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p8_s1_w5"
    ]
  },
  "ch1_p8_s1_w6": {
    "wordId": "ch1_p8_s1_w6",
    "translationFr": "mode d'exploitation / organisation productive",
    "literalTranslation": "manière de faire fonctionner une exploitation, mode opératoire d'atelier",
    "contextNote": "Lafargue traduit par « mode d'exploitation ». Préfigure la notion cardinale du marxisme de « Produktionsweise » (mode de production).",
    "grammaticalRole": "Nom composé féminin singulier (die Betriebsweise) au nominatif sujet de « reichte ... aus ».",
    "etymology": "Composé économique associant : 1° « der Betrieb » (l'exploitation productive, l'atelier en activité continue, dérivé du verbe transitif betreiben = mener en avant, pousser le bétail ou la machinerie, moyen haut-allemand trīben, vieux haut-allemand trīban) ; 2° « die Weise » (la manière, la modalité technique, du vieux haut-allemand wīsa, racine germanique *wīsō-, cognat de l'anglais wise). Désigne chez Marx la structure organisationnelle concrète du procès de travail (ici corporatif puis manufacturier).",
    "philosophicalContext": "L'atelier corporatif artisanal (un maître, quelques compagnons, des règlements stricts limitant le rendement) entrait en contradiction insurmontable avec l'immensité de la demande solvable mondiale.",
    "relatedConcepts": [
      "comp_noun",
      "prod_rel"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p8_s1_w6"
    ]
  },
  "ch1_p8_s1_w9": {
    "wordId": "ch1_p8_s1_w9",
    "translationFr": "suffisait",
    "literalTranslation": "atteignait le niveau requis",
    "contextNote": "Lafargue traduit exactement par « ne suffisait plus aux besoins ».",
    "grammaticalRole": "Verbe à particule séparable au prétérit singulier (verbe ausreichen).",
    "wordIds": [
      "ch1_p8_s1_w9"
    ],
    "etymology": "Verbe composé séparable combinant la particule d'achèvement « aus » et le verbe germanique « reichen » (atteindre, suffire, vieux haut-allemand reihhan).",
    "syntaxNote": "Cadre verbal : « reichte » est en position 9 et la particule « aus » est en position 12 avant le complément prépositionnel.",
    "relatedConcepts": [
      "sep_verb"
    ],
    "difficulty": "intermediate"
  },
  "ch1_p8_s1_w19": {
    "wordId": "ch1_p8_s1_w19",
    "translationFr": "qui croissaient avec les marchés",
    "literalTranslation": "qui grossissait en s'accroissant (participe présent adjectivé)",
    "contextNote": "Lafargue traduit par « qui croissaient avec les nouveaux marchés ». En allemand, c'est une proposition participiale compacte placée devant « Bedarf ».",
    "grammaticalRole": "Participe présent adjectivé du verbe « an|wachsen », décliné à l'accusatif masculin singulier en -en après « den ».",
    "etymology": "Participe adjectivé unissant le préfixe d'adjonction continue « an- » et le verbe fort « wachsen » (croître biologiquement, augmenter en masse, moyen haut-allemand wahsen, vieux haut-allemand wahsan, racine germanique *wahsijaną, racine indo-européenne *h₂weks-, cognat du grec auxein et de l'anglais wax). Décrit l'enflure organique exponentielle de la demande mondiale qui submerge les anciennes capacités locales de production.",
    "relatedConcepts": [
      "decl",
      "acc",
      "sep_verb"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p8_s1_w19"
    ]
  },
  "ch1_p8_s1_w20": {
    "wordId": "ch1_p8_s1_w20",
    "translationFr": "besoins / demande économique",
    "literalTranslation": "besoin solvable, demande quantitative de marchandises requises",
    "contextNote": "Lafargue traduit par « aux besoins ». Terme économique rigoureux.",
    "grammaticalRole": "Nom masculin singulier (der Bedarf) à l'accusatif après « für ».",
    "etymology": "Substantif économique issu du moyen haut-allemand « bedarf », déverbal du verbe « bedürfen » (ressentir une nécessité impérieuse, vieux haut-allemand bidurfan, composé du préfixe be- et du verbe prétérito-présent durfan / manquer de, avoir besoin, cognat du vieil anglais þurfan). Désigne en économie la demande solvable impérative réclamée par les marchés coloniaux.",
    "relatedConcepts": [
      "acc"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p8_s1_w20"
    ]
  },
  "ch1_p8_s2_w2": {
    "wordId": "ch1_p8_s2_w2",
    "translationFr": "manufacture",
    "literalTranslation": "manufacture, atelier centralisé de travail manuel divisé (nominatif féminin singulier)",
    "contextNote": "Lafargue traduit « La manufacture ». Le mot allemand est le substantif isolé, strictement découplé de l'article « Die ».",
    "grammaticalRole": "Nom féminin singulier (die Manufaktur) au nominatif singulier, sujet grammatical de la proposition régissant « trat ».",
    "etymology": "Emprunt savant au XVIIe siècle au français « manufacture », forgé sur le bas-latin « manufactura » (action de fabriquer à la main), composé du latin classique « manus » (la main) et de « factura » (l'action de fabriquer, façon, déverbal de facere = faire).",
    "philosophicalContext": "Stade de transition historique fondamental analysé au Livre I du Capital (chap. 14) : la manufacture succède aux corporations urbaines en regroupant des artisans sous le commandement d'un même capitaliste et en divisant minutieusement le travail manuel entre ouvriers parcellaires.",
    "cognatesFr": [
      "manufacture",
      "manufacturier"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p8_s2_w2"
    ],
    "relatedConcepts": [
      "nom",
      "bourgeoisie",
      "hist_mat"
    ]
  },
  "ch1_p8_s2_w3": {
    "wordId": "ch1_p8_s2_w3",
    "translationFr": "vint / prit / s'installa",
    "literalTranslation": "marcha, posa le pied, entra (prétérit fort de treten)",
    "contextNote": "Verbe régissant la substitution structurelle dans l'expression « trat an ihre Stelle » (vint prendre sa place).",
    "grammaticalRole": "Verbe fort (treten) au prétérit de l'indicatif, 3e personne du singulier.",
    "syntaxNote": "Position 2 du verbe conjugué dans la proposition principale déclarative.",
    "relatedConcepts": [
      "past"
    ],
    "difficulty": "basic",
    "wordIds": [
      "ch1_p8_s2_w3"
    ],
    "etymology": "Issu du moyen haut-allemand « trat », vieux haut-allemand « trat », prétérit apophonique du verbe fort « treten » (marcher, poser le pied, en vieux haut-allemand tretan, proto-germanique *tredaną = marcher, fouler)."
  },
  "ch1_p8_s3_w2": {
    "wordId": "ch1_p8_s3_w2",
    "translationFr": "maîtres de jurande / maîtres artisans",
    "literalTranslation": "maîtres de corporation, propriétaires jurés d'ateliers corporatifs",
    "contextNote": "Lafargue traduit « Les maîtres de jurande furent refoulés ».",
    "grammaticalRole": "Nom composé masculin pluriel (der Zunftmeister -> die Zunftmeister) au nominatif sujet passif.",
    "etymology": "Composé corporatif associant « die Zunft » (la jurande fermée, du moyen haut-allemand zumft) et « der Meister » (le maître artisan ayant accompli son chef-d'œuvre, emprunt ancien du vieux haut-allemand meistar au latin classique magister = celui qui est plus grand, chef d'atelier, dérivé de magis / plus grand). Le Zunftmeister est le propriétaire individuel de son petit atelier qui emploie deux ou trois compagnons sous les règles strictes de la confrérie.",
    "relatedConcepts": [
      "comp_noun",
      "feudalism"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p8_s3_w2"
    ]
  },
  "ch1_p8_s3_w4": {
    "wordId": "ch1_p8_s3_w4",
    "translationFr": "furent refoulés / évincés impitoyablement",
    "literalTranslation": "furent poussés hors de leur place par une pression écrasante (passif prétérit)",
    "contextNote": "Lafargue traduit par « furent refoulés ». Le verbe allemand « verdrängen » a une résonance économique et physique très forte : c'est être chassé de son terrain par une force supérieure.",
    "grammaticalRole": "Participe passé (Partizip II) du verbe inséparable « verdrängen », formant le passif prétérit avec « wurden ».",
    "etymology": "Verbe dynamique unissant le préfixe d'éviction impitoyable « ver- » et le verbe « drängen » (presser avec violence, acculer, bousculer en masse, moyen haut-allemand drengen, vieux haut-allemand drengen, verbe factitif germanique *drangijaną, issu de la racine de dringen = pénétrer de force). Littéralement : bousculer hors du terrain économique, évincer sans merci. Le même terme sera immortalisé par Freud pour conceptualiser le 'refoulement' psychologique hors de la conscience.",
    "philosophicalContext": "Loi d'airain de la concurrence capitaliste : la grande manufacture concentrée anéantit économiquement les petits maîtres artisans incapables de rivaliser en volume et en coûts.",
    "syntaxNote": "Forme passive prétérite : wurden ... verdrängt. Le complément d'agent de moyen est introduit par « durch » (+ accusatif).",
    "relatedConcepts": [
      "passive",
      "prefix_verb"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p8_s3_w4"
    ]
  },
  "ch1_p8_s3_w8": {
    "wordId": "ch1_p8_s3_w8",
    "translationFr": "classe moyenne / ordre moyen",
    "literalTranslation": "état social intermédiaire, condition moyenne manufacturière (accusatif masculin singulier)",
    "contextNote": "Lafargue traduit « la classe moyenne industrielle ». Strictement découplé de l'adjectif « industriellen » qui est annoté pour lui-même.",
    "grammaticalRole": "Nom composé masculin singulier (der Mittelstand) à l'accusatif singulier après la préposition d'agent « durch » et l'article « den ».",
    "etymology": "Composé historique associant : 1° l'adjectif germanique « mittel » (médian, moyen, en moyen haut-allemand « mittel », vieux haut-allemand « mittil », issu du proto-germanique *medjaz, cognat du latin medius) ; 2° « der Stand » (l'ordre social féodal, le rang statutaire, vieux haut-allemand stant, déverbal de stehen = se tenir debout).",
    "philosophicalContext": "Précision sociologique capitale (Maximilien Rubel, MEGA2) : en 1848, « Mittelstand » ne désigne pas la classe moyenne salariée tertiaire contemporaine (cadres, employés), mais les fabricants et maîtres manufacturiers pionniers situés à mi-chemin entre l'aristocratie terrienne et les compagnons salariés. Cette classe moyenne manufacturière évincera les jurandes avant d'être elle-même balayée par la grande bourgeoisie industrielle des trusts et cartels.",
    "relatedConcepts": [
      "comp_noun",
      "acc",
      "bourgeoisie",
      "hist_mat"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p8_s3_w8"
    ]
  },
  "ch1_p8_s3_w11": {
    "wordId": "ch1_p8_s3_w11",
    "translationFr": "division / partage",
    "literalTranslation": "action de diviser en parts",
    "contextNote": "Lafargue traduit « la division du travail entre les différentes corporations céda la place à la division du travail au sein de l'atelier même ».",
    "grammaticalRole": "Nom féminin singulier au nominatif sujet.",
    "wordIds": [
      "ch1_p8_s3_w11"
    ],
    "etymology": "Déverbal en « -ung » du verbe « teilen » (partager, diviser, vieux haut-allemand teiljan).",
    "philosophicalContext": "Concept fondamental de l'économie politique classique (Adam Smith, David Ricardo) réanalysé par Marx : il y a un saut qualitatif entre la division sociale du travail (chaque corporation indépendante fabrique un produit fini) et la division technique du travail (dans l'atelier manufacturier, l'ouvrier n'accomplit plus qu'une fraction parcellaire et abrutissante du geste productif).",
    "relatedConcepts": [
      "prod_rel",
      "gen"
    ],
    "difficulty": "advanced"
  },
  "ch1_p8_s3_w17": {
    "wordId": "ch1_p8_s3_w17",
    "translationFr": "corporations de métiers",
    "literalTranslation": "corporations jurées, corps de métiers d'Ancien Régime",
    "contextNote": "Lafargue traduit par « corporations ». Synonyme de Zünfte.",
    "grammaticalRole": "Nom féminin pluriel (die Korporation -> die Korporationen) au datif pluriel après « zwischen ».",
    "etymology": "Emprunt savant au bas-latin juridique « corporatio » (l'acte de former un corps politique ou commercial unifié, dérivé de corpus / corporis = corps physique). Désigne les corps de métier privilégiés d'Ancien Régime munis d'un monopole statutaire accordé par charte royale ou princière.",
    "cognatesFr": [
      "corporation",
      "corporel",
      "corps"
    ],
    "relatedConcepts": [
      "dat",
      "latin_root",
      "feudalism"
    ],
    "difficulty": "basic",
    "wordIds": [
      "ch1_p8_s3_w17"
    ]
  },
  "ch1_p8_s3_w18": {
    "wordId": "ch1_p8_s3_w18",
    "translationFr": "disparut / céda la place",
    "literalTranslation": "s'évanouit, disparut devant les yeux",
    "contextNote": "Lafargue traduit par « céda la place à ». En allemand, « verschwand vor » souligne l'effacement direct sous la concurrence du nouveau modèle.",
    "grammaticalRole": "Verbe fort « verschwinden » (verschwindet, verschwand, ist verschwunden) à la 3e personne du singulier au prétérit.",
    "etymology": "Verbe fort marquant l'effacement définitif, formé du préfixe d'évanouissement « ver- » et du moyen haut-allemand « swinden » (s'épuiser, dépérir, disparaître sans laisser de trace, vieux haut-allemand swintan, racine germanique *swinþaną). Évoque la dissolution irrémédiable de l'artisanat médiéval balayé par la tornade productive de la mécanisation.",
    "syntaxNote": "Position 2 du verbe conjugué dans la proposition indépendante coordonnée.",
    "relatedConcepts": [
      "v2",
      "prefix_verb"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p8_s3_w18"
    ]
  },
  "ch1_p8_s3_w27": {
    "wordId": "ch1_p8_s3_w27",
    "translationFr": "atelier",
    "literalTranslation": "atelier de fabrication, lieu de production artisanale ou manufacturière (datif féminin singulier)",
    "contextNote": "Lafargue traduit « dans l'atelier même ». Le mot isolé est le substantif féminin au datif, strictement découplé de l'article « der » et de l'adverbe « selbst ».",
    "grammaticalRole": "Nom composé féminin singulier (die Werkstatt) au datif singulier après « in der einzelnen ».",
    "etymology": "Composé d'artisanat unissant : 1° « das Werk » (l'œuvre, l'ouvrage ouvrier, en moyen haut-allemand werc, vieux haut-allemand werc, proto-germanique *werką, racine indo-européenne *werǵ- = œuvrer, faire, cognat de l'anglais work et du grec érgon) ; 2° « die Statt » (le lieu fixe, l'emplacement aménagé, vieux haut-allemand stat).",
    "philosophicalContext": "Dans Misère de la philosophie (1847) et Le Capital, Marx distingue la division sociale du travail (qui s'opère par le marché anonyme entre producteurs indépendants) et la division manufacturière du travail dans l'atelier (« in der einzelnen Werkstatt »), qui repose sur le despotisme direct du capitaliste réglant chaque geste ouvrier.",
    "relatedConcepts": [
      "comp_noun",
      "dat",
      "hist_mat"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p8_s3_w27"
    ]
  },
  "ch0_p1_s1_w4": {
    "wordId": "ch0_p1_s1_w4",
    "translationFr": "hanter / rôder",
    "literalTranslation": "marcher autour en cercle, errer",
    "grammaticalRole": "Particule verbale ou négative. Tournure impersonnelle allemande (« ein Geist geht um ») marquant la présence obsédante du spectre communiste.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p1_s1_w4"
    ]
  },
  "ch0_p1_s1_w5": {
    "wordId": "ch0_p1_s1_w5",
    "translationFr": "en / dans",
    "literalTranslation": "à l'intérieur de",
    "grammaticalRole": "Préposition régissant le datif (complément d'objet indirect ou régime prépositionnel). Préposition spatiale régissant ici le datif (situation sans déplacement).",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch0_p1_s1_w5"
    ]
  },
  "ch0_p1_s1_w8": {
    "wordId": "ch0_p1_s1_w8",
    "translationFr": "le",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au nominatif (sujet ou attribut du sujet) (neutre singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch0_p1_s1_w8"
    ]
  },
  "ch0_p1_s1_w10": {
    "wordId": "ch0_p1_s1_w10",
    "translationFr": "du",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au génitif (complément du nom marquant l'appartenance) (masculin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch0_p1_s1_w10"
    ]
  },
  "ch0_p1_s2_w1": {
    "wordId": "ch0_p1_s2_w1",
    "translationFr": "tous",
    "literalTranslation": "la totalité sans exception",
    "grammaticalRole": "Pronom décliné (nominatif (sujet ou attribut du sujet)). Déterminant indéfini désignant l'universalité des forces liguées.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch0_p1_s2_w1"
    ]
  },
  "ch0_p1_s2_w3": {
    "wordId": "ch0_p1_s2_w3",
    "translationFr": "du",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au génitif (complément du nom marquant l'appartenance) (neutre singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch0_p1_s2_w3"
    ]
  },
  "ch0_p1_s2_w5": {
    "wordId": "ch0_p1_s2_w5",
    "translationFr": "Europe",
    "literalTranslation": "Europe, continent européen (génitif neutre singulier sans désinence)",
    "grammaticalRole": "Nom propre géographique neutre singulier au génitif après l'article « des » et l'adjectif « alten ».",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch0_p1_s2_w5"
    ],
    "contextNote": "Nom propre géographique au génitif. Désigne l'espace géopolitique des monarchies et empires absolutistes ligués contre l'irruption du prolétariat.",
    "etymology": "Emprunt au grec ancien « Eurṓpē » (Εὐρώπη). L'étymon ultime est débattu par les philologues : traditionnellement rattaché par étymologie populaire grecque à eurús (εὐρύς, « large, vaste ») et ṓps (ὤψ, « vue, regard, œil »), signifiant « celle au large regard » ; ou, selon l'hypothèse sémitique privilégiée par les orientalistes, emprunté au phénicien / akkadien « 'ereb » (le soir, le couchant, l'occident), par opposition à « asu » (le levant, l'Asie)."
  },
  "ch0_p1_s2_w6": {
    "wordId": "ch0_p1_s2_w6",
    "translationFr": "avoir / posséder",
    "literalTranslation": "détenir comme bien ou auxiliaire",
    "grammaticalRole": "Forme verbale · (3e personne du pluriel) · temps: présent · mode: indicatif. Auxiliaire du parfait (passé composé) ou verbe de possession.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p1_s2_w6"
    ]
  },
  "ch0_p1_s2_w7": {
    "wordId": "ch0_p1_s2_w7",
    "translationFr": "se / soi-même",
    "literalTranslation": "pronom réfléchi de 3e personne",
    "grammaticalRole": "Pronom décliné (accusatif (complément d'objet direct)). Pronom réfléchi accompagnant un verbe pronominal.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch0_p1_s2_w7"
    ]
  },
  "ch0_p1_s2_w8": {
    "wordId": "ch0_p1_s2_w8",
    "translationFr": "à / vers / en vue de",
    "literalTranslation": "direction, destination ou but",
    "grammaticalRole": "Préposition régissant le datif (complément d'objet indirect ou régime prépositionnel). Préposition régissant le datif marquant le but ou le résultat d'une alliance.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch0_p1_s2_w8"
    ]
  },
  "ch0_p1_s2_w9": {
    "wordId": "ch0_p1_s2_w9",
    "translationFr": "d'une / à une",
    "literalTranslation": "article indéfini",
    "grammaticalRole": "Article décliné au datif (complément d'objet indirect ou régime prépositionnel) (féminin singulier). Article indéfini déterminant un nom singulier.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch0_p1_s2_w9"
    ]
  },
  "ch0_p1_s2_w12": {
    "wordId": "ch0_p1_s2_w12",
    "translationFr": "contre",
    "literalTranslation": "en opposition spatiale ou politique",
    "grammaticalRole": "Préposition régissant le accusatif (complément d'objet direct). Préposition d'hostilité régissant l'accusatif.",
    "difficulty": "basic",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch0_p1_s2_w12"
    ]
  },
  "ch0_p1_s2_w14": {
    "wordId": "ch0_p1_s2_w14",
    "translationFr": "spectre / fantôme",
    "literalTranslation": "spectre, apparition terrifiante, revenant (accusatif neutre singulier)",
    "grammaticalRole": "Nom neutre singulier (das Gespenst) à l'accusatif singulier après la préposition « gegen » et le pronom démonstratif « dies ».",
    "difficulty": "advanced",
    "relatedConcepts": [
      "gespenst",
      "acc"
    ],
    "wordIds": [
      "ch0_p1_s2_w14"
    ],
    "contextNote": "Désignation anaphorique directe de l'objet de la traque des souverains (« gegen dies Gespenst »).",
    "etymology": "Issu du moyen haut-allemand « gespenst(e) » (leurre démoniaque, apparition trompeuse), du vieux haut-allemand « gispansti » (séduction, ruse du démon), déverbal du verbe fort « spanan » (séduire, tenter par appât). Fixé au XVIe siècle au sens moderne d'apparition fantomatique menaçante.",
    "philosophicalContext": "Autonomie complète de la fiche : Marx montre que l'incompréhension panique des gouvernements absolutistes les conduit à traiter le prolétariat révolutionnaire comme une entité maléfique et surnaturelle, révélant leur propre impuissance historique."
  },
  "ch0_p1_s2_w17": {
    "wordId": "ch0_p1_s2_w17",
    "translationFr": "le",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au nominatif (sujet ou attribut du sujet) (masculin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch0_p1_s2_w17"
    ]
  },
  "ch0_p1_s2_w19": {
    "wordId": "ch0_p1_s2_w19",
    "translationFr": "et",
    "literalTranslation": "conjonction d'addition",
    "grammaticalRole": "Conjonction de coordination ou subordination. Conjonction liant deux termes ou propositions de même rang syntaxique.",
    "difficulty": "basic",
    "wordIds": [
      "ch0_p1_s2_w19"
    ]
  },
  "ch0_p1_s2_w20": {
    "wordId": "ch0_p1_s2_w20",
    "translationFr": "le",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au nominatif (sujet ou attribut du sujet) (masculin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch0_p1_s2_w20"
    ]
  },
  "ch0_p1_s2_w24": {
    "wordId": "ch0_p1_s2_w24",
    "translationFr": "et",
    "literalTranslation": "conjonction d'addition",
    "grammaticalRole": "Conjonction de coordination ou subordination. Conjonction liant deux termes ou propositions de même rang syntaxique.",
    "difficulty": "basic",
    "wordIds": [
      "ch0_p1_s2_w24"
    ]
  },
  "ch0_p1_s2_w27": {
    "wordId": "ch0_p1_s2_w27",
    "translationFr": "français",
    "literalTranslation": "français, relatif à la nation française (adjectif au nominatif masculin pluriel)",
    "grammaticalRole": "Adjectif qualificatif décliné (pluriel nominatif (sujet ou attribut du sujet)). Adjectif désignant les républicains radicaux parisiens.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch0_p1_s2_w27"
    ],
    "etymology": "Issu du moyen haut-allemand « franzoyse », emprunt à l'ancien français « françois », dérivé avec le suffixe -iscus sur le nom du peuple germanique des Francs (du proto-germanique *frankō = libre, hardi, ou lance de guerre)."
  },
  "ch0_p1_s2_w29": {
    "wordId": "ch0_p1_s2_w29",
    "translationFr": "et",
    "literalTranslation": "conjonction d'addition",
    "grammaticalRole": "Conjonction de coordination ou subordination. Conjonction liant deux termes ou propositions de même rang syntaxique.",
    "difficulty": "basic",
    "wordIds": [
      "ch0_p1_s2_w29"
    ]
  },
  "ch0_p1_s2_w30": {
    "wordId": "ch0_p1_s2_w30",
    "translationFr": "allemands",
    "literalTranslation": "allemands, des États germaniques (adjectif au nominatif masculin pluriel)",
    "grammaticalRole": "Adjectif qualificatif décliné (pluriel nominatif (sujet ou attribut du sujet)). Adjectif national désignant les polices des monarchies de la Confédération germanique.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch0_p1_s2_w30"
    ],
    "etymology": "Issu du moyen haut-allemand « diutsch », vieux haut-allemand « diutisc » (populaire, qui parle la langue du peuple germanique vernaculaire par opposition au latin des clercs), dérivé en -isc sur « diot » (le peuple, la foule, du proto-germanique *þeudō = peuple, racine indo-européenne *tewtéh₂-)."
  },
  "ch0_p2_s1_w1": {
    "wordId": "ch0_p2_s1_w1",
    "translationFr": "où / quel est",
    "literalTranslation": "en quel lieu",
    "grammaticalRole": "Adverbe invariable. Adverbe interrogatif de rhétorique oratoire ouvrant les interrogations du Préambule.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p2_s1_w1"
    ]
  },
  "ch0_p2_s1_w2": {
    "wordId": "ch0_p2_s1_w2",
    "translationFr": "être / exister",
    "literalTranslation": "verbe d'état suprême",
    "grammaticalRole": "Forme verbale · (3e personne du singulier) · temps: présent. Verbe d'état reliant le sujet à son attribut ontologique et politique.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p2_s1_w2"
    ]
  },
  "ch0_p2_s1_w3": {
    "wordId": "ch0_p2_s1_w3",
    "translationFr": "la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au nominatif (sujet ou attribut du sujet) (féminin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch0_p2_s1_w3"
    ]
  },
  "ch0_p2_s1_w6": {
    "wordId": "ch0_p2_s1_w6",
    "translationFr": "la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Pronom décliné (nominatif (sujet ou attribut du sujet)). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch0_p2_s1_w6"
    ]
  },
  "ch0_p2_s1_w7": {
    "wordId": "ch0_p2_s1_w7",
    "translationFr": "ne pas / non",
    "literalTranslation": "particule de négation",
    "grammaticalRole": "Particule verbale ou négative. Particule négative infirmant une proposition.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p2_s1_w7"
    ]
  },
  "ch0_p2_s1_w8": {
    "wordId": "ch0_p2_s1_w8",
    "translationFr": "de / par",
    "literalTranslation": "provenance, cause ou complément d'agent",
    "grammaticalRole": "Préposition régissant le datif (complément d'objet indirect ou régime prépositionnel). Préposition de provenance ou d'agent au passif régissant le datif.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch0_p2_s1_w8"
    ]
  },
  "ch0_p2_s1_w9": {
    "wordId": "ch0_p2_s1_w9",
    "translationFr": "à leurs",
    "literalTranslation": "possessif de 3e personne",
    "grammaticalRole": "Pronom décliné (datif (complément d'objet indirect ou régime prépositionnel)). Déterminant possessif rattachant un bien à son détenteur.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch0_p2_s1_w9"
    ]
  },
  "ch0_p2_s1_w12": {
    "wordId": "ch0_p2_s1_w12",
    "translationFr": "comme / en tant que",
    "literalTranslation": "en qualité de",
    "grammaticalRole": "Conjonction de coordination ou subordination. Conjonction d'équivalence ou de comparaison.",
    "difficulty": "basic",
    "wordIds": [
      "ch0_p2_s1_w12"
    ]
  },
  "ch0_p2_s1_w13": {
    "wordId": "ch0_p2_s1_w13",
    "translationFr": "communiste",
    "literalTranslation": "communiste, relatif au parti prolétarien (adjectif prédicatif invariable)",
    "grammaticalRole": "Adjectif qualificatif décliné ( ). Adjectif politique identifiant le mouvement prolétarien révolutionnaire.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p2_s1_w13"
    ],
    "etymology": "Dérivé de « Kommunismus » (du latin communis) au moyen du suffixe adjectival germanique « -isch »."
  },
  "ch0_p2_s1_w15": {
    "wordId": "ch0_p2_s1_w15",
    "translationFr": "devenir / auxiliaire du passif",
    "literalTranslation": "entrer dans un état nouveau",
    "grammaticalRole": "Forme verbale · temps: passé composé/parfait. Auxiliaire fondamental de la voix passive allemande.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p2_s1_w15"
    ]
  },
  "ch0_p2_s2_w1": {
    "wordId": "ch0_p2_s2_w1",
    "translationFr": "où / quel est",
    "literalTranslation": "en quel lieu",
    "grammaticalRole": "Adverbe invariable. Adverbe interrogatif de rhétorique oratoire ouvrant les interrogations du Préambule.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p2_s2_w1"
    ]
  },
  "ch0_p2_s2_w2": {
    "wordId": "ch0_p2_s2_w2",
    "translationFr": "la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au nominatif (sujet ou attribut du sujet) (féminin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch0_p2_s2_w2"
    ]
  },
  "ch0_p2_s2_w3": {
    "wordId": "ch0_p2_s2_w3",
    "translationFr": "parti d'opposition",
    "literalTranslation": "parti d'opposition parlementaire ou politique (nominatif féminin singulier)",
    "grammaticalRole": "Nom composé féminin singulier (die Oppositionspartei) au nominatif singulier déterminé par l'article « die ».",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "comp_noun",
      "nom"
    ],
    "wordIds": [
      "ch0_p2_s2_w3"
    ],
    "contextNote": "Sujet grammatical de l'interrogation rhétorique de Marx montrant que tout parti d'opposition est systématiquement diffamé comme communiste par les tenants du pouvoir.",
    "etymology": "Composé politique associant deux emprunts savants : 1° « die Opposition », emprunt au latin « oppositio » (action de poser en face, obstacle, contradiction, déverbal de opponere, de ob- et ponere) ; 2° « die Partei », emprunt au XVIIe siècle au français « partie / parti », issu du latin « partire » (diviser, partager), dérivé de « pars » (la part, la fraction civique).",
    "philosophicalContext": "Marx analyse le fonctionnement idéologique du pouvoir réactionnaire : le stigmate infamant de « communiste » sert d'arme rhétorique universelle pour discréditer toute critique, y compris la plus modérée et bourgeoise."
  },
  "ch0_p2_s2_w5": {
    "wordId": "ch0_p2_s2_w5",
    "translationFr": "la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Pronom décliné (nominatif (sujet ou attribut du sujet)). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch0_p2_s2_w5"
    ]
  },
  "ch0_p2_s2_w6": {
    "wordId": "ch0_p2_s2_w6",
    "translationFr": "aux",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au datif (complément d'objet indirect ou régime prépositionnel) ( pluriel). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch0_p2_s2_w6"
    ]
  },
  "ch0_p2_s2_w10": {
    "wordId": "ch0_p2_s2_w10",
    "translationFr": "comme / que",
    "literalTranslation": "de même manière que",
    "grammaticalRole": "Conjonction de coordination ou subordination. Conjonction comparative liant des adversaires de même sorte.",
    "difficulty": "basic",
    "wordIds": [
      "ch0_p2_s2_w10"
    ]
  },
  "ch0_p2_s2_w11": {
    "wordId": "ch0_p2_s2_w11",
    "translationFr": "à leurs",
    "literalTranslation": "possessif de 3e personne",
    "grammaticalRole": "Pronom décliné (datif (complément d'objet indirect ou régime prépositionnel)). Déterminant possessif rattachant un bien à son détenteur.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch0_p2_s2_w11"
    ]
  },
  "ch0_p2_s2_w13": {
    "wordId": "ch0_p2_s2_w13",
    "translationFr": "adversaires",
    "literalTranslation": "adversaires politiques, antagonistes au pouvoir (datif masculin pluriel)",
    "grammaticalRole": "Nom masculin pluriel (der Gegner -> die Gegner) au datif pluriel avec désinence -n après la préposition « von ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat",
      "plural"
    ],
    "wordIds": [
      "ch0_p2_s2_w13"
    ],
    "contextNote": "Régime de la préposition d'agent « von ». Désigne les fractions bourgeoises ou dynastiques exerçant le gouvernement.",
    "etymology": "Issu du moyen haut-allemand « gegener » (celui qui est situé en face, l'antagoniste), dérivé au moyen du suffixe d'agent « -er » sur la préposition et adverbe « gegen » (en face, contre, vieux haut-allemand gegin / gagan, proto-germanique *gagina)."
  },
  "ch0_p2_s2_w14": {
    "wordId": "ch0_p2_s2_w14",
    "translationFr": "le",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au accusatif (complément d'objet direct) (masculin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch0_p2_s2_w14"
    ]
  },
  "ch0_p2_s2_w17": {
    "wordId": "ch0_p2_s2_w17",
    "translationFr": "du",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au génitif (complément du nom marquant l'appartenance) (masculin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch0_p2_s2_w17"
    ]
  },
  "ch0_p2_s2_w18": {
    "wordId": "ch0_p2_s2_w18",
    "translationFr": "communisme",
    "literalTranslation": "communisme, épithète infamante brandie par le pouvoir (accusatif masculin singulier)",
    "grammaticalRole": "Nom masculin singulier (der Kommunismus) à l'accusatif singulier après la préposition « als ».",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "acc",
      "latin_root",
      "communism"
    ],
    "wordIds": [
      "ch0_p2_s2_w18"
    ],
    "contextNote": "Terme jeté comme une accusation politique aux partis d'opposition.",
    "etymology": "Formé sur l'adjectif latin « communis » (mis en partage par la collectivité, de con- et munus = charge, obligation réciproque) avec le suffixe doctrinal « -ismus ». Repris des cercles ouvriers parisiens des années 1830-1840.",
    "philosophicalContext": "L'accusation de communisme sert d'épouvantail universel pour fédérer les possédants contre toute contestation de l'ordre établi."
  },
  "ch0_p2_s2_w19": {
    "wordId": "ch0_p2_s2_w19",
    "translationFr": "ne pas / non",
    "literalTranslation": "particule de négation",
    "grammaticalRole": "Particule verbale ou négative. Particule négative infirmant une proposition.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p2_s2_w19"
    ]
  },
  "ch0_p2_s2_w21": {
    "wordId": "ch0_p2_s2_w21",
    "translationFr": "avoir / posséder",
    "literalTranslation": "détenir comme bien ou auxiliaire",
    "grammaticalRole": "Forme verbale · (3e personne du singulier) · mode: subjonctif. Auxiliaire du parfait (passé composé) ou verbe de possession.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p2_s2_w21"
    ]
  },
  "ch0_p3_s1_w3": {
    "wordId": "ch0_p3_s1_w3",
    "translationFr": "de / hors de / depuis",
    "literalTranslation": "qui émane de",
    "grammaticalRole": "Préposition régissant le datif (complément d'objet indirect ou régime prépositionnel). Préposition spatiale et causale régissant le datif.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch0_p3_s1_w3"
    ]
  },
  "ch0_p3_s1_w4": {
    "wordId": "ch0_p3_s1_w4",
    "translationFr": "ce / cette / ces",
    "literalTranslation": "pronom démonstratif désignant l'objet proche",
    "grammaticalRole": "Pronom décliné (datif (complément d'objet indirect ou régime prépositionnel)). Démonstratif marquant la désignation concrète du spectre.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch0_p3_s1_w4"
    ]
  },
  "ch0_p3_s1_w6": {
    "wordId": "ch0_p3_s1_w6",
    "translationFr": "découler / résulter",
    "literalTranslation": "sortir en avant de",
    "grammaticalRole": "Particule verbale ou négative. Verbe de déduction logique et matérielle tirée de l'analyse des faits.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p3_s1_w6"
    ]
  },
  "ch0_p4_s1_w1": {
    "wordId": "ch0_p4_s1_w1",
    "translationFr": "le",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au nominatif (sujet ou attribut du sujet) (masculin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch0_p4_s1_w1"
    ]
  },
  "ch0_p4_s1_w2": {
    "wordId": "ch0_p4_s1_w2",
    "translationFr": "communisme",
    "literalTranslation": "communisme, mouvement historique réel (nominatif masculin singulier)",
    "grammaticalRole": "Nom masculin singulier (der Kommunismus) au nominatif sans article, sujet de la proposition complétive « daß der Kommunismus... ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "nom",
      "communism"
    ],
    "wordIds": [
      "ch0_p4_s1_w2"
    ],
    "contextNote": "Sujet de la première conclusion tirée par Marx : le communisme est déjà reconnu comme une puissance par toutes les forces établies.",
    "etymology": "Dérivé savant du latin « communis » (commun, collectif) avec le suffixe « -ismus ». Emprunté par la Ligue des communistes pour affirmer la rupture avec les philanthropies bourgeoises.",
    "philosophicalContext": "Le fait même de la calomnie généralisée est retourné par Marx en aveu historique : les puissances régnantes attestent elles-mêmes que le communisme n'est plus une secte marginale mais une puissance européenne incontournable."
  },
  "ch0_p4_s1_w5": {
    "wordId": "ch0_p4_s1_w5",
    "translationFr": "de / par",
    "literalTranslation": "provenance, cause ou complément d'agent",
    "grammaticalRole": "Préposition régissant le datif (complément d'objet indirect ou régime prépositionnel). Préposition de provenance ou d'agent au passif régissant le datif.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch0_p4_s1_w5"
    ]
  },
  "ch0_p4_s1_w6": {
    "wordId": "ch0_p4_s1_w6",
    "translationFr": "toutes les",
    "literalTranslation": "la totalité sans exception",
    "grammaticalRole": "Pronom décliné (datif (complément d'objet indirect ou régime prépositionnel)). Déterminant indéfini désignant l'universalité des forces liguées.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch0_p4_s1_w6"
    ]
  },
  "ch0_p4_s1_w7": {
    "wordId": "ch0_p4_s1_w7",
    "translationFr": "européennes",
    "literalTranslation": "européennes (adjectif au datif féminin pluriel)",
    "grammaticalRole": "Adjectif qualificatif décliné (pluriel datif (complément d'objet indirect ou régime prépositionnel)). Adjectif définissant le champ continental de l'affrontement révolutionnaire.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch0_p4_s1_w7"
    ],
    "etymology": "Dérivé au moyen du suffixe « -isch » sur le nom propre géographique « Europa » (du grec ancien Eurṓpē)."
  },
  "ch0_p4_s1_w8": {
    "wordId": "ch0_p4_s1_w8",
    "translationFr": "puissances",
    "literalTranslation": "puissances étatiques, souverainetés politiques (datif féminin pluriel)",
    "grammaticalRole": "Nom féminin pluriel (die Macht -> die Mächte) au datif pluriel avec désinence -n après « von allen europäischen ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat",
      "plural"
    ],
    "wordIds": [
      "ch0_p4_s1_w8"
    ],
    "contextNote": "Complément d'agent au passif. Désigne les gouvernements coalisés d'Europe.",
    "etymology": "Issu du moyen haut-allemand « maht », vieux haut-allemand « maht » (force, puissance, capacité d'action souveraine, armée), du proto-germanique *mahtiz, abstrait déverbal en *-ti- formé sur la racine du verbe « mögen » (pouvoir matériellement, avoir la force, vieux haut-allemand magan). Cognat de l'anglais might."
  },
  "ch0_p4_s1_w9": {
    "wordId": "ch0_p4_s1_w9",
    "translationFr": "comme / en tant que",
    "literalTranslation": "en qualité de",
    "grammaticalRole": "Conjonction de coordination ou subordination. Conjonction d'équivalence ou de comparaison.",
    "difficulty": "basic",
    "wordIds": [
      "ch0_p4_s1_w9"
    ]
  },
  "ch0_p4_s1_w10": {
    "wordId": "ch0_p4_s1_w10",
    "translationFr": "une",
    "literalTranslation": "article indéfini",
    "grammaticalRole": "Article décliné au nominatif (sujet ou attribut du sujet) (féminin singulier). Article indéfini déterminant un nom singulier.",
    "difficulty": "basic",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch0_p4_s1_w10"
    ]
  },
  "ch0_p5_s1_w1": {
    "wordId": "ch0_p5_s1_w1",
    "translationFr": "il / cela",
    "literalTranslation": "pronom neutre de 3e personne",
    "grammaticalRole": "Pronom décliné (nominatif (sujet ou attribut du sujet)). Sujet impersonnel ou représentatif d'une proposition.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch0_p5_s1_w1"
    ]
  },
  "ch0_p5_s1_w2": {
    "wordId": "ch0_p5_s1_w2",
    "translationFr": "être / exister",
    "literalTranslation": "verbe d'état suprême",
    "grammaticalRole": "Forme verbale · (3e personne du singulier) · temps: présent. Verbe d'état reliant le sujet à son attribut ontologique et politique.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p5_s1_w2"
    ]
  },
  "ch0_p5_s1_w3": {
    "wordId": "ch0_p5_s1_w3",
    "translationFr": "grand / solennel",
    "literalTranslation": "haut, élevé, d'une gravité solennelle (adjectif au nominatif féminin singulier)",
    "grammaticalRole": "Adjectif qualificatif décliné (singulier nominatif (sujet ou attribut du sujet)). Adjectif marquant la gravité et l'imminence du moment révolutionnaire.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch0_p5_s1_w3"
    ],
    "contextNote": "Épithète dans la locution idiomatique « Es ist hohe Zeit ». Strictement découplé de « Zeit ».",
    "etymology": "Issu du moyen haut-allemand « hōch », vieux haut-allemand « hōh » (haut, élevé en rang, solennel), du proto-germanique *hauhaz (élevé, fier, racine indo-européenne *kewk- = courbé en hauteur, colline)."
  },
  "ch0_p5_s1_w6": {
    "wordId": "ch0_p5_s1_w6",
    "translationFr": "que",
    "literalTranslation": "conjonction de subordination",
    "grammaticalRole": "Conjonction de coordination ou subordination. Conjonction introduisant une proposition complétive rejetant le verbe en fin de proposition.",
    "difficulty": "basic",
    "wordIds": [
      "ch0_p5_s1_w6"
    ]
  },
  "ch0_p5_s1_w7": {
    "wordId": "ch0_p5_s1_w7",
    "translationFr": "les",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au nominatif (sujet ou attribut du sujet) ( pluriel). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch0_p5_s1_w7"
    ]
  },
  "ch0_p5_s1_w8": {
    "wordId": "ch0_p5_s1_w8",
    "translationFr": "communistes",
    "literalTranslation": "communistes, militants du parti prolétarien (nominatif masculin pluriel)",
    "grammaticalRole": "Nom masculin pluriel (der Kommunist -> die Kommunisten) au nominatif pluriel faible en -en après « die ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "nom",
      "plural",
      "communism"
    ],
    "wordIds": [
      "ch0_p5_s1_w8"
    ],
    "contextNote": "Sujet grammatical de la proposition annonçant la proclamation publique de leur programme.",
    "etymology": "Dérivé au moyen du suffixe d'agent d'origine grecque « -ist » sur le radical latin « communis » (partagé en commun, de con- + munus). Désigne les adhérents de la Ligue des communistes (fondée à Londres en 1847)."
  },
  "ch0_p5_s1_w9": {
    "wordId": "ch0_p5_s1_w9",
    "translationFr": "leur / son / sa / ses",
    "literalTranslation": "possessif de 3e personne",
    "grammaticalRole": "Pronom décliné (accusatif (complément d'objet direct)). Déterminant possessif rattachant un bien à son détenteur.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch0_p5_s1_w9"
    ]
  },
  "ch0_p5_s1_w12": {
    "wordId": "ch0_p5_s1_w12",
    "translationFr": "leur / son / sa / ses",
    "literalTranslation": "possessif de 3e personne",
    "grammaticalRole": "Pronom décliné (accusatif (complément d'objet direct)). Déterminant possessif rattachant un bien à son détenteur.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch0_p5_s1_w12"
    ]
  },
  "ch0_p5_s1_w15": {
    "wordId": "ch0_p5_s1_w15",
    "translationFr": "leur / son / sa / ses",
    "literalTranslation": "possessif de 3e personne",
    "grammaticalRole": "Pronom décliné (accusatif (complément d'objet direct)). Déterminant possessif rattachant un bien à son détenteur.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch0_p5_s1_w15"
    ]
  },
  "ch0_p5_s1_w17": {
    "wordId": "ch0_p5_s1_w17",
    "translationFr": "devant / à la face de",
    "literalTranslation": "en présence de",
    "grammaticalRole": "Préposition régissant le datif (complément d'objet indirect ou régime prépositionnel). Préposition marquant la publicité de la proclamation devant le monde entier.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch0_p5_s1_w17"
    ]
  },
  "ch0_p5_s1_w18": {
    "wordId": "ch0_p5_s1_w18",
    "translationFr": "à la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au datif (complément d'objet indirect ou régime prépositionnel) (féminin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch0_p5_s1_w18"
    ]
  },
  "ch0_p5_s1_w19": {
    "wordId": "ch0_p5_s1_w19",
    "translationFr": "entière / tout entière",
    "literalTranslation": "entière, complète, sans exception (adjectif au datif féminin singulier)",
    "grammaticalRole": "Adjectif qualificatif décliné (singulier datif (complément d'objet indirect ou régime prépositionnel)). Adjectif insistant sur l'universalité de la polarisation de la société entière.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch0_p5_s1_w19"
    ],
    "etymology": "Issu du moyen haut-allemand « ganz », vieux haut-allemand « ganz » (intact, complet, sain, indemne), du proto-germanique *gantaz."
  },
  "ch0_p5_s1_w20": {
    "wordId": "ch0_p5_s1_w20",
    "translationFr": "monde",
    "literalTranslation": "monde, totalité des hommes et de l'opinion publique (datif féminin singulier)",
    "grammaticalRole": "Nom féminin singulier (die Welt) au datif singulier après « vor der ganzen ».",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch0_p5_s1_w20"
    ],
    "contextNote": "Régime de la préposition spatiale et figurée « vor ». Indique la publicité universelle et cosmopolite de la proclamation.",
    "etymology": "Issu du moyen haut-allemand « werlt / welt », vieux haut-allemand « weralt / werolt », composé germanique formé de *wira- (« homme », cognat du latin vir) et de *aldi- (« âge, génération, durée de vie », cognat de alt/old). Littéralement « l'âge de l'homme, l'époque de l'humanité terrestre ».",
    "philosophicalContext": "L'appel de Marx récuse les conciliabules secrets : le parti communiste s'adresse à la terre entière, inaugurant l'internationalisme prolétarien universel."
  },
  "ch0_p5_s1_w23": {
    "wordId": "ch0_p5_s1_w23",
    "translationFr": "et",
    "literalTranslation": "conjonction d'addition",
    "grammaticalRole": "Conjonction de coordination ou subordination. Conjonction liant deux termes ou propositions de même rang syntaxique.",
    "difficulty": "basic",
    "wordIds": [
      "ch0_p5_s1_w23"
    ]
  },
  "ch0_p5_s1_w24": {
    "wordId": "ch0_p5_s1_w24",
    "translationFr": "au",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au datif (complément d'objet indirect ou régime prépositionnel) (neutre singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch0_p5_s1_w24"
    ]
  },
  "ch0_p5_s1_w26": {
    "wordId": "ch0_p5_s1_w26",
    "translationFr": "du / de la part du",
    "literalTranslation": "contraction 'vom'",
    "grammaticalRole": "Préposition régissant le datif (complément d'objet indirect ou régime prépositionnel). Contraction de 'von' avec l'article datif masculin/neutre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch0_p5_s1_w26"
    ]
  },
  "ch0_p5_s1_w27": {
    "wordId": "ch0_p5_s1_w27",
    "translationFr": "spectre / fantôme",
    "literalTranslation": "spectre, épouvantail chimérique (datif neutre singulier)",
    "grammaticalRole": "Nom neutre singulier (das Gespenst) au datif singulier après la préposition contractée « vom » (von dem).",
    "difficulty": "advanced",
    "relatedConcepts": [
      "gespenst",
      "dat"
    ],
    "wordIds": [
      "ch0_p5_s1_w27"
    ],
    "contextNote": "Fait partie du syntagme « dem Kindermärchen vom Gespenst des Kommunismus » (le conte pour enfants du spectre du communisme). Marx démystifie la figure spectrale inventée par la police politique.",
    "etymology": "Issu du moyen haut-allemand « gespenst(e) » (leurre démoniaque, séduction mensongère), vieux haut-allemand « gispansti », déverbal du verbe fort « spanan » (attirer dans un piège, leurrer). Fixé au XVIe siècle au sens d'apparition spectrale terrifiante.",
    "philosophicalContext": "Démystification radicale : Marx clôt la dialectique ouverte à la première phrase du préambule. Le spectre n'était que le conte de fées (« Kindermärchen ») agité par les gouvernants réactionnaires pour effrayer le peuple ; le Manifeste y substitue la réalité scientifique d'un programme prolétarien."
  },
  "ch0_p5_s1_w28": {
    "wordId": "ch0_p5_s1_w28",
    "translationFr": "du",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au génitif (complément du nom marquant l'appartenance) (masculin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch0_p5_s1_w28"
    ]
  },
  "ch0_p5_s1_w29": {
    "wordId": "ch0_p5_s1_w29",
    "translationFr": "communisme",
    "literalTranslation": "communisme (génitif masculin singulier)",
    "grammaticalRole": "Nom masculin singulier (der Kommunismus) au génitif singulier déterminé par « des ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen",
      "communism"
    ],
    "wordIds": [
      "ch0_p5_s1_w29"
    ],
    "contextNote": "Complément déterminant le spectre chimérique dans le conte d'enfants des gouvernements.",
    "etymology": "Formé sur le latin « communis » (mis en partage collectif, de con- et munus = charge civique) avec le suffixe doctrinal « -ismus »."
  },
  "ch0_p5_s1_w30": {
    "wordId": "ch0_p5_s1_w30",
    "translationFr": "un",
    "literalTranslation": "article indéfini",
    "grammaticalRole": "Article décliné au accusatif (complément d'objet direct) (neutre singulier). Article indéfini déterminant un nom singulier.",
    "difficulty": "basic",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch0_p5_s1_w30"
    ]
  },
  "ch0_p5_s1_w32": {
    "wordId": "ch0_p5_s1_w32",
    "translationFr": "de la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au génitif (complément du nom marquant l'appartenance) (féminin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch0_p5_s1_w32"
    ]
  },
  "ch0_p5_s1_w33": {
    "wordId": "ch0_p5_s1_w33",
    "translationFr": "parti",
    "literalTranslation": "parti, organisation politique de combat de la classe ouvrière (génitif féminin singulier)",
    "grammaticalRole": "Nom féminin singulier (die Partei) au génitif singulier déterminé par l'article « der » et renforcé par l'adverbe « selbst ».",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "gen",
      "bourgeoisie"
    ],
    "wordIds": [
      "ch0_p5_s1_w33"
    ],
    "contextNote": "Complément du nom déterminant « Manifest ». Désigne le parti prolétarien dans sa réalité militante autonome.",
    "etymology": "Emprunt au XVIIe siècle au français « partie / parti », issu du latin « partire » (diviser, partager), déverbal de « pars » (la part, la fraction de citoyens partageant une même cause).",
    "philosophicalContext": "Pour Marx, le mot « Partei » ne désigne pas simplement un appareil électoral parlementaire, mais l'organisation historique et collective du prolétariat accédant à la conscience de classe politique pour abolir le salariat."
  },
  "ch0_p5_s1_w34": {
    "wordId": "ch0_p5_s1_w34",
    "translationFr": "lui-même / soi-même",
    "literalTranslation": "en personne, sans intermédiaire",
    "grammaticalRole": "Pronom décliné (). Pronom d'insistance soulignant l'initiative directe du Parti communiste.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p5_s1_w34"
    ]
  },
  "ch0_p6_s1_w1": {
    "wordId": "ch0_p6_s1_w1",
    "translationFr": "à / vers / en vue de",
    "literalTranslation": "direction, destination ou but",
    "grammaticalRole": "Préposition régissant le datif (complément d'objet indirect ou régime prépositionnel). Préposition régissant le datif marquant le but ou le résultat d'une alliance.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch0_p6_s1_w1"
    ]
  },
  "ch0_p6_s1_w2": {
    "wordId": "ch0_p6_s1_w2",
    "translationFr": "ce / cette / ces",
    "literalTranslation": "pronom démonstratif désignant l'objet proche",
    "grammaticalRole": "Pronom décliné (datif (complément d'objet indirect ou régime prépositionnel)). Démonstratif marquant la désignation concrète du spectre.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch0_p6_s1_w2"
    ]
  },
  "ch0_p6_s1_w4": {
    "wordId": "ch0_p6_s1_w4",
    "translationFr": "avoir / posséder",
    "literalTranslation": "détenir comme bien ou auxiliaire",
    "grammaticalRole": "Forme verbale · (3e personne du pluriel) · temps: présent. Auxiliaire du parfait (passé composé) ou verbe de possession.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p6_s1_w4"
    ]
  },
  "ch0_p6_s1_w5": {
    "wordId": "ch0_p6_s1_w5",
    "translationFr": "se / soi-même",
    "literalTranslation": "pronom réfléchi de 3e personne",
    "grammaticalRole": "Pronom décliné (accusatif (complément d'objet direct)). Pronom réfléchi accompagnant un verbe pronominal.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch0_p6_s1_w5"
    ]
  },
  "ch0_p6_s1_w6": {
    "wordId": "ch0_p6_s1_w6",
    "translationFr": "communistes",
    "literalTranslation": "communistes, délégués ouvriers internationaux (nominatif masculin pluriel)",
    "grammaticalRole": "Nom masculin pluriel (die Kommunisten) au nominatif pluriel sans article.",
    "difficulty": "basic",
    "relatedConcepts": [
      "nom",
      "plural",
      "communism"
    ],
    "wordIds": [
      "ch0_p6_s1_w6"
    ],
    "contextNote": "Sujet de l'assemblée constituante de Londres (« Kommunisten der verschiedensten Nationalitäten »).",
    "etymology": "Formé sur le latin « communis » avec le suffixe d'adhésion doctrinale « -ist ». Désigne ici les délégués réunis au second congrès de la Ligue des communistes en novembre-décembre 1847."
  },
  "ch0_p6_s1_w7": {
    "wordId": "ch0_p6_s1_w7",
    "translationFr": "de la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au génitif (complément du nom marquant l'appartenance) (féminin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch0_p6_s1_w7"
    ]
  },
  "ch0_p6_s1_w9": {
    "wordId": "ch0_p6_s1_w9",
    "translationFr": "nationalités",
    "literalTranslation": "nationalités, appartenances nationales étatiques (génitif féminin pluriel)",
    "grammaticalRole": "Nom féminin pluriel (die Nationalität -> die Nationalitäten) au génitif pluriel après « der verschiedensten ».",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "gen",
      "plural"
    ],
    "wordIds": [
      "ch0_p6_s1_w9"
    ],
    "contextNote": "Désigne la provenance diverse des délégués (Allemands, Français, Anglais, Flamands, Suisses, Polonais).",
    "etymology": "Emprunt au début du XIXe siècle au français « nationalité », forgé sur « national », dérivé du latin « natio » (naissance, tribu, peuple issu d'une même origine, du verbe nasci = naître).",
    "philosophicalContext": "L'internationalisme prolétarien est affirmé dès le préambule : le parti communiste transcende d'emblée les frontières des États-nations bourgeois, préfigurant le mot d'ordre final : « Prolétaires de tous les pays, unissez-vous ! »"
  },
  "ch0_p6_s1_w10": {
    "wordId": "ch0_p6_s1_w10",
    "translationFr": "en / dans",
    "literalTranslation": "à l'intérieur de",
    "grammaticalRole": "Préposition régissant le datif (complément d'objet indirect ou régime prépositionnel). Préposition spatiale régissant ici le datif (situation sans déplacement).",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch0_p6_s1_w10"
    ]
  },
  "ch0_p6_s1_w11": {
    "wordId": "ch0_p6_s1_w11",
    "translationFr": "Londres",
    "literalTranslation": "Londres, capitale britannique (datif neutre singulier sans désinence)",
    "grammaticalRole": "Nom propre géographique invariable au datif après la préposition locative « in ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch0_p6_s1_w11"
    ],
    "contextNote": "Lieu historique du congrès de la Ligue des communistes en 1847.",
    "etymology": "Emprunt au nom celtique romanisé de la cité « Londinium » (étymon celtique discuté, traditionnellement rattaché à une racine hydronymique pré-celtique ou à l'adjectif celtique *londos = sauvage, furieux, hardi).",
    "philosophicalContext": "Londres était alors la métropole incontestée du capitalisme industriel le plus avancé au monde et le refuge des révolutionnaires exilés fuyant les polices du continent."
  },
  "ch0_p6_s1_w13": {
    "wordId": "ch0_p6_s1_w13",
    "translationFr": "et",
    "literalTranslation": "conjonction d'addition",
    "grammaticalRole": "Conjonction de coordination ou subordination. Conjonction liant deux termes ou propositions de même rang syntaxique.",
    "difficulty": "basic",
    "wordIds": [
      "ch0_p6_s1_w13"
    ]
  },
  "ch0_p6_s1_w14": {
    "wordId": "ch0_p6_s1_w14",
    "translationFr": "le",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au accusatif (complément d'objet direct) (neutre singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch0_p6_s1_w14"
    ]
  },
  "ch0_p6_s1_w15": {
    "wordId": "ch0_p6_s1_w15",
    "translationFr": "suivant / ci-après",
    "literalTranslation": "qui suit, présenté ci-après (participe présent au nominatif neutre singulier)",
    "grammaticalRole": "Adjectif qualificatif décliné (singulier accusatif (complément d'objet direct)). Adjectif introduisant le texte même du Manifeste.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch0_p6_s1_w15"
    ],
    "etymology": "Participe présent adjectivé du verbe « folgen » (suivre, obéir, moyen haut-allemand volgen, vieux haut-allemand folgēn, proto-germanique *fulgāną)."
  },
  "ch0_p6_s1_w16": {
    "wordId": "ch0_p6_s1_w16",
    "translationFr": "manifeste",
    "literalTranslation": "manifeste, texte officiel de la proclamation (accusatif neutre singulier)",
    "grammaticalRole": "Nom neutre singulier (das Manifest) à l'accusatif singulier après l'article « das » et l'adjectif « folgende ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "acc",
      "latin_root"
    ],
    "wordIds": [
      "ch0_p6_s1_w16"
    ],
    "contextNote": "COD du verbe d'élaboration « entworfen ».",
    "etymology": "Emprunt au latin « manifestus » (évident, palpable, démasqué, de manus + fendere). Substantivé pour désigner la déclaration solennelle de principes et d'action politique."
  },
  "ch0_p6_s1_w19": {
    "wordId": "ch0_p6_s1_w19",
    "translationFr": "le",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Pronom décliné (nominatif (sujet ou attribut du sujet)). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch0_p6_s1_w19"
    ]
  },
  "ch0_p6_s1_w20": {
    "wordId": "ch0_p6_s1_w20",
    "translationFr": "en / dans",
    "literalTranslation": "à l'intérieur de",
    "grammaticalRole": "Préposition régissant le datif (complément d'objet indirect ou régime prépositionnel). Préposition spatiale régissant ici le datif (situation sans déplacement).",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch0_p6_s1_w20"
    ]
  },
  "ch0_p6_s1_w21": {
    "wordId": "ch0_p6_s1_w21",
    "translationFr": "anglaise",
    "literalTranslation": "anglaise (adjectif au datif féminin singulier)",
    "grammaticalRole": "Adjectif qualificatif décliné (singulier datif (complément d'objet indirect ou régime prépositionnel)). Adjectif de langue pour la publication à Londres de l'édition anglaise.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch0_p6_s1_w21"
    ],
    "etymology": "Dérivé du nom du peuple des Angles (latin Angli, issu du germanique *angul- = crochet, coin de terre)."
  },
  "ch0_p6_s1_w23": {
    "wordId": "ch0_p6_s1_w23",
    "translationFr": "française",
    "literalTranslation": "française (adjectif au datif féminin singulier)",
    "grammaticalRole": "Adjectif qualificatif décliné (singulier datif (complément d'objet indirect ou régime prépositionnel)). Adjectif désignant les républicains radicaux parisiens.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch0_p6_s1_w23"
    ],
    "etymology": "Dérivé de l'ancien français « françois » (du germanique Franko = libre, homme d'épée)."
  },
  "ch0_p6_s1_w25": {
    "wordId": "ch0_p6_s1_w25",
    "translationFr": "allemande",
    "literalTranslation": "allemande (adjectif au datif féminin singulier)",
    "grammaticalRole": "Adjectif qualificatif décliné (singulier datif (complément d'objet indirect ou régime prépositionnel)). Adjectif national désignant les polices des monarchies de la Confédération germanique.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch0_p6_s1_w25"
    ],
    "etymology": "Issu du vieux haut-allemand « diutisc » (de la langue vernaculaire du peuple, de diot = peuple)."
  },
  "ch0_p6_s1_w27": {
    "wordId": "ch0_p6_s1_w27",
    "translationFr": "italienne",
    "literalTranslation": "italienne (adjectif au datif féminin singulier)",
    "grammaticalRole": "Adjectif qualificatif décliné (singulier datif (complément d'objet indirect ou régime prépositionnel)). Adjectif de langue pour l'édition italienne du Manifeste.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch0_p6_s1_w27"
    ],
    "etymology": "Emprunt au latin « Italicus », dérivé de Italia (du grec Ouitoulía, pays des veaux, du proto-indo-européen *wet- = année, animal d'un an)."
  },
  "ch0_p6_s1_w29": {
    "wordId": "ch0_p6_s1_w29",
    "translationFr": "flamande",
    "literalTranslation": "flamande (adjectif au datif féminin singulier)",
    "grammaticalRole": "Adjectif qualificatif décliné (singulier datif (complément d'objet indirect ou régime prépositionnel)). Adjectif de langue pour l'édition belge du Manifeste.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch0_p6_s1_w29"
    ],
    "etymology": "Dérivé du toponyme Flandre (moyen néerlandais Vlaanderen = terres inondées, alluvions côtières)."
  },
  "ch0_p6_s1_w30": {
    "wordId": "ch0_p6_s1_w30",
    "translationFr": "et",
    "literalTranslation": "conjonction d'addition",
    "grammaticalRole": "Conjonction de coordination ou subordination. Conjonction liant deux termes ou propositions de même rang syntaxique.",
    "difficulty": "basic",
    "wordIds": [
      "ch0_p6_s1_w30"
    ]
  },
  "ch0_p6_s1_w31": {
    "wordId": "ch0_p6_s1_w31",
    "translationFr": "danoise",
    "literalTranslation": "danoise (adjectif au datif féminin singulier)",
    "grammaticalRole": "Adjectif qualificatif décliné (singulier datif (complément d'objet indirect ou régime prépositionnel)). Adjectif de langue pour l'édition scandinave du Manifeste.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch0_p6_s1_w31"
    ],
    "etymology": "Dérivé du nom du peuple des Danois (Dänen, proto-germanique *Daniz = habitants des terres plates)."
  },
  "ch0_p6_s1_w32": {
    "wordId": "ch0_p6_s1_w32",
    "translationFr": "langue / idiome",
    "literalTranslation": "langue naturelle, idiome national de publication (datif féminin singulier)",
    "grammaticalRole": "Nom féminin singulier (die Sprache) au datif singulier sans article après la préposition « in ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch0_p6_s1_w32"
    ],
    "contextNote": "Nom régissant la série d'adjectifs de langues dans lesquelles le Manifeste doit être imprimé.",
    "etymology": "Issu du moyen haut-allemand « sprāche », vieux haut-allemand « sprāhha » (la parole, la langue, la faculté de discourir), déverbal direct formé avec allongement apophonique sur le radical du verbe fort « sprechen » (parler, moyen haut-allemand sprechen, vieux haut-allemand sprehhan, proto-germanique *sprekaną).",
    "philosophicalContext": "La polyglossie du Manifeste reflète l'universalité matérielle du prolétariat moderne, dont les chaînes et les intérêts de classe sont identiques dans toutes les nations."
  },
  "ch0_p6_s1_w34": {
    "wordId": "ch0_p6_s1_w34",
    "translationFr": "devenir / auxiliaire du passif",
    "literalTranslation": "entrer dans un état nouveau",
    "grammaticalRole": "Forme verbale · (3e personne du singulier) · temps: présent. Auxiliaire fondamental de la voix passive allemande.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch0_p6_s1_w34"
    ]
  },
  "ch1_p1_s1_w1": {
    "wordId": "ch1_p1_s1_w1",
    "translationFr": "la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au nominatif (sujet ou attribut du sujet) (féminin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch1_p1_s1_w1"
    ]
  },
  "ch1_p1_s1_w6": {
    "wordId": "ch1_p1_s1_w6",
    "translationFr": "être / exister",
    "literalTranslation": "verbe d'état suprême",
    "grammaticalRole": "Forme verbale · (3e personne du singulier) · temps: présent. Verbe d'état reliant le sujet à son attribut ontologique et politique.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p1_s1_w6"
    ]
  },
  "ch1_p1_s1_w7": {
    "wordId": "ch1_p1_s1_w7",
    "translationFr": "la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au nominatif (sujet ou attribut du sujet) (féminin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch1_p1_s1_w7"
    ]
  },
  "ch1_p1_s1_w8": {
    "wordId": "ch1_p1_s1_w8",
    "translationFr": "histoire",
    "literalTranslation": "histoire, déroulement continu des luttes (nominatif féminin singulier)",
    "grammaticalRole": "Nom féminin singulier (die Geschichte) au nominatif singulier, attribut du sujet « Die Geschichte ».",
    "difficulty": "advanced",
    "relatedConcepts": [
      "nom",
      "hist_mat"
    ],
    "wordIds": [
      "ch1_p1_s1_w8"
    ],
    "contextNote": "Attribut du sujet après la copule « ist », identifiant l'histoire à la lutte de classes.",
    "etymology": "Issu du moyen haut-allemand « geschiht », vieux haut-allemand « giskiht », déverbal du verbe fort geschehen (advenir, se produire).",
    "philosophicalContext": "L'identité posée entre histoire et lutte de classes est la proposition fondamentale du Manifeste : toute la dynamique des transformations sociales réside dans l'antagonisme entre oppresseurs et opprimés."
  },
  "ch1_p1_s1_w9": {
    "wordId": "ch1_p1_s1_w9",
    "translationFr": "de / par",
    "literalTranslation": "provenance, cause ou complément d'agent",
    "grammaticalRole": "Préposition régissant le datif (complément d'objet indirect ou régime prépositionnel). Préposition de provenance ou d'agent au passif régissant le datif.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p1_s1_w9"
    ]
  },
  "ch1_p2_s1_w2": {
    "wordId": "ch1_p2_s1_w2",
    "translationFr": "et",
    "literalTranslation": "conjonction d'addition",
    "grammaticalRole": "Conjonction de coordination ou subordination. Conjonction liant deux termes ou propositions de même rang syntaxique.",
    "difficulty": "basic",
    "wordIds": [
      "ch1_p2_s1_w2"
    ]
  },
  "ch1_p2_s1_w6": {
    "wordId": "ch1_p2_s1_w6",
    "translationFr": "et",
    "literalTranslation": "conjonction d'addition",
    "grammaticalRole": "Conjonction de coordination ou subordination. Conjonction liant deux termes ou propositions de même rang syntaxique.",
    "difficulty": "basic",
    "wordIds": [
      "ch1_p2_s1_w6"
    ]
  },
  "ch1_p2_s1_w10": {
    "wordId": "ch1_p2_s1_w10",
    "translationFr": "et",
    "literalTranslation": "conjonction d'addition",
    "grammaticalRole": "Conjonction de coordination ou subordination. Conjonction liant deux termes ou propositions de même rang syntaxique.",
    "difficulty": "basic",
    "wordIds": [
      "ch1_p2_s1_w10"
    ]
  },
  "ch1_p2_s1_w14": {
    "wordId": "ch1_p2_s1_w14",
    "translationFr": "et",
    "literalTranslation": "conjonction d'addition",
    "grammaticalRole": "Conjonction de coordination ou subordination. Conjonction liant deux termes ou propositions de même rang syntaxique.",
    "difficulty": "basic",
    "wordIds": [
      "ch1_p2_s1_w14"
    ]
  },
  "ch1_p2_s1_w17": {
    "wordId": "ch1_p2_s1_w17",
    "translationFr": "bref / en un mot",
    "literalTranslation": "en peu de termes",
    "grammaticalRole": "Adverbe invariable. Adverbe synthétisant une énumération historique par une loi générale.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p2_s1_w17"
    ]
  },
  "ch1_p2_s1_w20": {
    "wordId": "ch1_p2_s1_w20",
    "translationFr": "et",
    "literalTranslation": "conjonction d'addition",
    "grammaticalRole": "Conjonction de coordination ou subordination. Conjonction liant deux termes ou propositions de même rang syntaxique.",
    "difficulty": "basic",
    "wordIds": [
      "ch1_p2_s1_w20"
    ]
  },
  "ch1_p2_s1_w22": {
    "wordId": "ch1_p2_s1_w22",
    "translationFr": "se tenaient / faisaient face",
    "literalTranslation": "se dressaient debout l'un contre l'autre, se faisaient face (prétérit pluriel)",
    "grammaticalRole": "Verbe fort (stehen) au prétérit de l'indicatif, 3e personne du pluriel.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p2_s1_w22"
    ],
    "contextNote": "Verbe de posture dialectique exprimant l'opposition structurelle permanente et indéracinable des classes en lutte.",
    "etymology": "Issu du moyen haut-allemand « stuonden », vieux haut-allemand « stuont / stuondun », prétérit apophonique du verbe fort « stehen » (se tenir debout, être dressé immobile, en vieux haut-allemand stān / stēn, du proto-germanique *standaną, issu de la racine indo-européenne fondamentale *steh₂- « se tenir debout, être ferme »).",
    "philosophicalContext": "La formule « standen ... zueinander » traduit la spatialité objective des rapports de production : les classes ne se rencontrent pas par hasard, elles sont posées structurellement en vis-à-vis antagonique dans le mode de production.",
    "relatedConcepts": [
      "past",
      "verb_paradigm"
    ]
  },
  "ch1_p2_s1_w23": {
    "wordId": "ch1_p2_s1_w23",
    "translationFr": "en / dans",
    "literalTranslation": "à l'intérieur de",
    "grammaticalRole": "Préposition régissant le datif (complément d'objet indirect ou régime prépositionnel). Préposition spatiale régissant ici le datif (situation sans déplacement).",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p2_s1_w23"
    ]
  },
  "ch1_p2_s1_w24": {
    "wordId": "ch1_p2_s1_w24",
    "translationFr": "constant / continuel / permanent",
    "literalTranslation": "incessant, continu, permanent sans défaillance (adjectif au datif masculin singulier)",
    "grammaticalRole": "Adjectif qualificatif décliné (singulier datif (complément d'objet indirect ou régime prépositionnel)). Adjectif marquant la permanence obstinée du conflit de classes à travers les âges.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p2_s1_w24"
    ],
    "etymology": "Issu du moyen haut-allemand « stæte », vieux haut-allemand « stāti » (fixe, ferme, persistant, immuable), dérivé en *-t- formé sur la racine du verbe fort « stehen » (se tenir debout, racine indo-européenne *steh₂-)."
  },
  "ch1_p2_s1_w26": {
    "wordId": "ch1_p2_s1_w26",
    "translationFr": "l'un vis-à-vis de l'autre",
    "literalTranslation": "en rapport réciproque",
    "grammaticalRole": "Adverbe invariable. Adverbe marquant le tête-à-tête conflictuel inéluctable entre oppresseurs et opprimés.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p2_s1_w26"
    ]
  },
  "ch1_p2_s1_w28": {
    "wordId": "ch1_p2_s1_w28",
    "translationFr": "menaient / poursuivaient",
    "literalTranslation": "menaient, conduisaient activement (prétérit pluriel)",
    "grammaticalRole": "Verbe faible (führen) au prétérit de l'indicatif, 3e personne du pluriel.",
    "difficulty": "basic",
    "wordIds": [
      "ch1_p2_s1_w28"
    ],
    "contextNote": "Verbe régissant le combat (« Kampf »). Exprime la conduite active d'une guerre sociale continue.",
    "etymology": "Issu du moyen haut-allemand « vüeren », vieux haut-allemand « fuoren » (mener, transporter, guider), verbe causatif germanique (*fōrijaną) dérivé du verbe fort « fahren » (se déplacer, voyager, en vieux haut-allemand faran, proto-germanique *faraną).",
    "relatedConcepts": [
      "past"
    ]
  },
  "ch1_p2_s1_w29": {
    "wordId": "ch1_p2_s1_w29",
    "translationFr": "un",
    "literalTranslation": "article indéfini",
    "grammaticalRole": "Article décliné au accusatif (complément d'objet direct) (masculin singulier). Article indéfini déterminant un nom singulier.",
    "difficulty": "basic",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p2_s1_w29"
    ]
  },
  "ch1_p2_s1_w32": {
    "wordId": "ch1_p2_s1_w32",
    "translationFr": "tantôt / bientôt",
    "literalTranslation": "à un moment donné, rapidement",
    "grammaticalRole": "Adverbe invariable. Adverbe corrélatif (bald... bald...) marquant l'alternance d'une lutte tantôt ouverte tantôt cachée.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p2_s1_w32"
    ]
  },
  "ch1_p2_s1_w35": {
    "wordId": "ch1_p2_s1_w35",
    "translationFr": "tantôt / bientôt",
    "literalTranslation": "à un moment donné, rapidement",
    "grammaticalRole": "Adverbe invariable. Adverbe corrélatif (bald... bald...) marquant l'alternance d'une lutte tantôt ouverte tantôt cachée.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p2_s1_w35"
    ]
  },
  "ch1_p2_s1_w37": {
    "wordId": "ch1_p2_s1_w37",
    "translationFr": "lutte / combat",
    "literalTranslation": "combat acharné, affrontement direct (accusatif masculin singulier)",
    "grammaticalRole": "Nom masculin singulier (der Kampf) à l'accusatif singulier sans article répété, COD de « führten ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "acc",
      "class_struggle"
    ],
    "wordIds": [
      "ch1_p2_s1_w37"
    ],
    "contextNote": "Premier jalon du doublet caractérisant la lutte de classe tantôt cachée, tantôt ouverte.",
    "etymology": "Issu du moyen haut-allemand « kampf », vieux haut-allemand « kampf » (combat singulier, duel armé, bataille rangée), emprunt très ancien (dès les premiers siècles av. J.-C. lors des guerres de frontière de Germanie) au latin classique « campus » (le champ de manœuvre militaire, le champ de bataille).",
    "philosophicalContext": "La lutte des classes n'est pas toujours spectaculaire ou armée : elle alterne entre lutte larvée, silencieuse, quotidienne (freinage, sabotage, résistance à la cadence) et insurrection politique ouverte."
  },
  "ch1_p2_s1_w39": {
    "wordId": "ch1_p2_s1_w39",
    "translationFr": "un",
    "literalTranslation": "article indéfini",
    "grammaticalRole": "Article décliné au accusatif (complément d'objet direct) (masculin singulier). Article indéfini déterminant un nom singulier.",
    "difficulty": "basic",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p2_s1_w39"
    ]
  },
  "ch1_p2_s1_w40": {
    "wordId": "ch1_p2_s1_w40",
    "translationFr": "lutte / combat",
    "literalTranslation": "combat, affrontement ouvert (accusatif masculin singulier)",
    "grammaticalRole": "Nom masculin singulier (der Kampf) à l'accusatif singulier déterminé par l'adjectif « offenen ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "acc",
      "class_struggle"
    ],
    "wordIds": [
      "ch1_p2_s1_w40"
    ],
    "contextNote": "Second terme du doublet rythmé par « bald ... bald ».",
    "etymology": "Issu du moyen haut-allemand « kampf », vieux haut-allemand « kampf », du latin « campus » (champ de bataille)."
  },
  "ch1_p2_s1_w42": {
    "wordId": "ch1_p2_s1_w42",
    "translationFr": "le",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Pronom décliné (nominatif (sujet ou attribut du sujet)). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch1_p2_s1_w42"
    ]
  },
  "ch1_p2_s1_w43": {
    "wordId": "ch1_p2_s1_w43",
    "translationFr": "chaque fois / à chaque reprise",
    "literalTranslation": "à toutes les occurrences sans faille",
    "grammaticalRole": "Adverbe invariable. Adverbe régulier marquant la loi constante de résolution des luttes de classe.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p2_s1_w43"
    ]
  },
  "ch1_p2_s1_w44": {
    "wordId": "ch1_p2_s1_w44",
    "translationFr": "avec / au moyen de",
    "literalTranslation": "en compagnie de, au moyen de",
    "grammaticalRole": "Préposition régissant le datif (complément d'objet indirect ou régime prépositionnel). Préposition d'accompagnement ou d'instrument régissant le datif.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p2_s1_w44"
    ]
  },
  "ch1_p2_s1_w45": {
    "wordId": "ch1_p2_s1_w45",
    "translationFr": "d'une / à une",
    "literalTranslation": "article indéfini",
    "grammaticalRole": "Article décliné au datif (complément d'objet indirect ou régime prépositionnel) (féminin singulier). Article indéfini déterminant un nom singulier.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p2_s1_w45"
    ]
  },
  "ch1_p2_s1_w46": {
    "wordId": "ch1_p2_s1_w46",
    "translationFr": "révolutionnaire",
    "literalTranslation": "révolutionnaire, qui renverse radicalement les fondements matériels (datif féminin singulier)",
    "grammaticalRole": "Adjectif qualificatif décliné au datif féminin singulier en -en après « einer ».",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "dat",
      "decl",
      "hist_mat"
    ],
    "wordIds": [
      "ch1_p2_s1_w46"
    ],
    "contextNote": "Épithète de « Umgestaltung » (refonte / transformation radicale).",
    "etymology": "Emprunt au français « révolutionnaire », dérivé savant en « -aire » de « révolution », issu du bas-latin « revolutio » (mouvement de rotation astronomique et retournement complet des astres, du verbe revolvere = faire rouler en arrière, retourner, renverser). Transféré au XVIIIe siècle de l'astronomie à la rupture politique radicale.",
    "philosophicalContext": "Premier terme de l'alternative dialectique : la révolution prolétarienne n'est pas une simple réforme ministérielle, mais le bouleversement complet de l'infrastructure économique et de la superstructure sociale."
  },
  "ch1_p2_s1_w48": {
    "wordId": "ch1_p2_s1_w48",
    "translationFr": "de la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au génitif (complément du nom marquant l'appartenance) (féminin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch1_p2_s1_w48"
    ]
  },
  "ch1_p2_s1_w49": {
    "wordId": "ch1_p2_s1_w49",
    "translationFr": "tout entière / intégrale",
    "literalTranslation": "totale, entière, globale (adjectif au génitif féminin singulier)",
    "grammaticalRole": "Adjectif qualificatif décliné (singulier génitif (complément du nom marquant l'appartenance)). Adjectif insistant sur l'universalité de la polarisation de la société entière.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch1_p2_s1_w49"
    ],
    "etymology": "Issu du moyen haut-allemand « ganz », vieux haut-allemand « ganz » (intact, complet)."
  },
  "ch1_p2_s1_w50": {
    "wordId": "ch1_p2_s1_w50",
    "translationFr": "société",
    "literalTranslation": "société tout entière, formation sociale globale (génitif féminin singulier)",
    "grammaticalRole": "Nom féminin singulier (die Gesellschaft) au génitif singulier après « der ganzen ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch1_p2_s1_w50"
    ],
    "contextNote": "Complément déterminant « Umgestaltung ».",
    "etymology": "Issu du moyen haut-allemand « geselleschaft » (compagnie, réunion jurée, association d'artisans ou de compagnons), dérivé au moyen du suffixe germanique de collectivité statutaire « -schaft » (du proto-germanique *skapaz = constitution, ordre) sur « Geselle » (le compagnon, celui qui partage la même chambre, de sal = pièce, salle). Le terme s'est élargi au XVIIIe siècle pour traduire le français « société » et le latin « societas »."
  },
  "ch1_p2_s1_w51": {
    "wordId": "ch1_p2_s1_w51",
    "translationFr": "se terminait / prenait fin",
    "literalTranslation": "aboutissait, trouvait son issue ultime (prétérit indicatif)",
    "grammaticalRole": "Verbe régulier faible (enden) au prétérit de l'indicatif, 3e personne du singulier.",
    "difficulty": "basic",
    "wordIds": [
      "ch1_p2_s1_w51"
    ],
    "contextNote": "Verbe régissant l'issue historique binaire de la lutte des classes.",
    "etymology": "Déverbal du substantif « das Ende » (le bout, la fin, le terme, en moyen haut-allemand ende, en vieux haut-allemand enti, du proto-germanique *andijaz = point extrême, bout, limite).",
    "relatedConcepts": [
      "past"
    ]
  },
  "ch1_p2_s1_w52": {
    "wordId": "ch1_p2_s1_w52",
    "translationFr": "ou / ou bien",
    "literalTranslation": "conjonction d'alternative",
    "grammaticalRole": "Conjonction de coordination ou subordination. Conjonction disjonctive liant deux issues alternatives.",
    "difficulty": "basic",
    "wordIds": [
      "ch1_p2_s1_w52"
    ]
  },
  "ch1_p2_s1_w53": {
    "wordId": "ch1_p2_s1_w53",
    "translationFr": "avec / au moyen de",
    "literalTranslation": "en compagnie de, au moyen de",
    "grammaticalRole": "Préposition régissant le datif (complément d'objet indirect ou régime prépositionnel). Préposition d'accompagnement ou d'instrument régissant le datif.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p2_s1_w53"
    ]
  },
  "ch1_p2_s1_w54": {
    "wordId": "ch1_p2_s1_w54",
    "translationFr": "au / au moyen du",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au datif (complément d'objet indirect ou régime prépositionnel) (masculin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p2_s1_w54"
    ]
  },
  "ch1_p2_s1_w55": {
    "wordId": "ch1_p2_s1_w55",
    "translationFr": "commun / partagé / mutuel",
    "literalTranslation": "commun, partagé par les deux belligérants (datif masculin singulier)",
    "grammaticalRole": "Adjectif qualificatif décliné au datif masculin singulier en -en après « dem ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat",
      "decl"
    ],
    "wordIds": [
      "ch1_p2_s1_w55"
    ],
    "contextNote": "Qualifie « Untergange ». Souligne la réciprocité de la destruction si aucune classe révolutionnaire ne triomphe.",
    "etymology": "Issu du moyen haut-allemand « gemein », vieux haut-allemand « gimeini » (partagé en commun, universel, accessible à tous), du proto-germanique *gamainiz (partagé collectivement, issu de ga- et de la racine *mey- « échanger », parent étymologique du latin communis)."
  },
  "ch1_p2_s1_w57": {
    "wordId": "ch1_p2_s1_w57",
    "translationFr": "de la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au génitif (complément du nom marquant l'appartenance) (féminin pluriel). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch1_p2_s1_w57"
    ]
  },
  "ch1_p2_s1_w58": {
    "wordId": "ch1_p2_s1_w58",
    "translationFr": "en lutte / combattantes",
    "literalTranslation": "qui combattent, engagées dans une lutte à mort (participe présent au génitif féminin pluriel)",
    "grammaticalRole": "Participe présent du verbe « kämpfen » décliné au génitif pluriel en -en après « der » (déclinaison faible).",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen",
      "class_struggle"
    ],
    "wordIds": [
      "ch1_p2_s1_w58"
    ],
    "contextNote": "Qualifie « Klassen » au génitif pluriel. Participe présent marquant l'affrontement actif continu.",
    "etymology": "Formé sur le verbe « kämpfen » (combattre, lutter), déverbal de Kampf, lui-même emprunté au latin « campus » (champ de bataille)."
  },
  "ch1_p2_s1_w59": {
    "wordId": "ch1_p2_s1_w59",
    "translationFr": "classes",
    "literalTranslation": "classes, groupements antagoniques définis par leur place dans les rapports de production (génitif féminin pluriel)",
    "grammaticalRole": "Nom féminin pluriel (die Klassen) au génitif pluriel dépendant du substantif « Untergange ».",
    "difficulty": "advanced",
    "relatedConcepts": [
      "gen",
      "plural",
      "class_struggle",
      "hist_mat"
    ],
    "wordIds": [
      "ch1_p2_s1_w59"
    ],
    "contextNote": "Régime du génitif dépendant de « Untergange ». Fiche autonome complète sans renvoi.",
    "etymology": "Emprunt savant au XVIIIe siècle au latin classique « classis » (originellement la convocation sous les armes des citoyens romains répartis en cinq ordres censitaires par la constitution servienne selon le niveau de leur fortune foncière, de la racine indo-européenne *kelh₁- / calare = appeler, convoquer).",
    "philosophicalContext": "Opposition théorique fondamentale entre « Klasse » et « Stand » : chez Marx, les classes ne sont ni des castes de sang héréditaires ni des catégories statutaires de prestige (Stände), mais des positions objectives irréconciliables au sein des rapports matériels de production et de propriété des instruments de travail."
  },
  "ch1_p3_s1_w1": {
    "wordId": "ch1_p3_s1_w1",
    "translationFr": "en / dans",
    "literalTranslation": "à l'intérieur de",
    "grammaticalRole": "Préposition régissant le datif (complément d'objet indirect ou régime prépositionnel). Préposition spatiale régissant ici le datif (situation sans déplacement).",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p3_s1_w1"
    ]
  },
  "ch1_p3_s1_w2": {
    "wordId": "ch1_p3_s1_w2",
    "translationFr": "aux",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au datif (complément d'objet indirect ou régime prépositionnel) ( pluriel). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p3_s1_w2"
    ]
  },
  "ch1_p3_s1_w3": {
    "wordId": "ch1_p3_s1_w3",
    "translationFr": "anciennes / antérieures",
    "literalTranslation": "plus anciennes, antérieures dans le temps historique (adjectif au datif féminin pluriel)",
    "grammaticalRole": "Adjectif qualificatif décliné (pluriel datif (complément d'objet indirect ou régime prépositionnel)). Adjectif comparatif marquant les époques historiques révolues.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p3_s1_w3"
    ],
    "etymology": "Comparatif de l'adjectif « früh » (tôt, matinal, ancien, moyen haut-allemand vruo, vieux haut-allemand vruoi, proto-germanique *frōwjaz)."
  },
  "ch1_p3_s1_w4": {
    "wordId": "ch1_p3_s1_w4",
    "translationFr": "époques",
    "literalTranslation": "époques, grandes ères historiques de l'humanité (datif féminin pluriel)",
    "grammaticalRole": "Nom féminin pluriel (die Epoche -> die Epochen) au datif pluriel après « In den früheren ».",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "dat",
      "plural",
      "hist_mat"
    ],
    "wordIds": [
      "ch1_p3_s1_w4"
    ],
    "contextNote": "Régime de la préposition temporelle « In den früheren ».",
    "etymology": "Emprunt savant au XVIIe siècle au grec ancien « epokhḗ » (ἐποχή, point d'arrêt, suspension du jugement, moment fixe qui marque le début d'une ère nouvelle, déverbal de epékhein « retenir, suspendre »)."
  },
  "ch1_p3_s1_w5": {
    "wordId": "ch1_p3_s1_w5",
    "translationFr": "de la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au génitif (complément du nom marquant l'appartenance) (féminin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch1_p3_s1_w5"
    ]
  },
  "ch1_p3_s1_w6": {
    "wordId": "ch1_p3_s1_w6",
    "translationFr": "histoire",
    "literalTranslation": "histoire (génitif féminin singulier)",
    "grammaticalRole": "Nom féminin singulier (die Geschichte) au génitif singulier après « der ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch1_p3_s1_w6"
    ],
    "contextNote": "Complément du nom déterminant « Epochen ».",
    "etymology": "Issu du moyen haut-allemand « geschiht », vieux haut-allemand « giskiht », déverbal du verbe geschehen (advenir)."
  },
  "ch1_p3_s1_w7": {
    "wordId": "ch1_p3_s1_w7",
    "translationFr": "trouver / constater",
    "literalTranslation": "découvrir par l'observation",
    "grammaticalRole": "Forme verbale · (1e personne du pluriel) · temps: présent. Verbe de constatation empirique dans l'examen de l'histoire humaine.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p3_s1_w7"
    ]
  },
  "ch1_p3_s1_w8": {
    "wordId": "ch1_p3_s1_w8",
    "translationFr": "nous",
    "literalTranslation": "pronom personnel sujet 1re personne du pluriel",
    "grammaticalRole": "Pronom décliné (nominatif (sujet ou attribut du sujet)). Pronom sujet collectif désignant les observateurs historiques.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch1_p3_s1_w8"
    ]
  },
  "ch1_p3_s1_w9": {
    "wordId": "ch1_p3_s1_w9",
    "translationFr": "presque / quasiment",
    "literalTranslation": "à très peu de chose près",
    "grammaticalRole": "Adverbe invariable. Adverbe d'intensité nuancée caractérisant la généralité de la stratification féodale.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p3_s1_w9"
    ]
  },
  "ch1_p3_s1_w10": {
    "wordId": "ch1_p3_s1_w10",
    "translationFr": "partout / universellement",
    "literalTranslation": "en tout lieu sans exclusion",
    "grammaticalRole": "Adverbe invariable. Adverbe de généralisation spatiale décrivant l'extension des hiérarchies féodales.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p3_s1_w10"
    ]
  },
  "ch1_p3_s1_w11": {
    "wordId": "ch1_p3_s1_w11",
    "translationFr": "une",
    "literalTranslation": "article indéfini",
    "grammaticalRole": "Article décliné au accusatif (complément d'objet direct) (féminin singulier). Article indéfini déterminant un nom singulier.",
    "difficulty": "basic",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p3_s1_w11"
    ]
  },
  "ch1_p3_s1_w12": {
    "wordId": "ch1_p3_s1_w12",
    "translationFr": "complète / intégrale",
    "literalTranslation": "complète, intégrale, dont toutes les composantes sont présentes (adjectif à l'accusatif féminin singulier)",
    "grammaticalRole": "Adjectif qualificatif décliné (singulier accusatif (complément d'objet direct)). Adjectif décrivant la division méticuleuse du corps social médiéval.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p3_s1_w12"
    ],
    "etymology": "Composé de « voll » (plein, vieux haut-allemand fol) et « ständig » (qui tient debout, de stehen)."
  },
  "ch1_p3_s1_w14": {
    "wordId": "ch1_p3_s1_w14",
    "translationFr": "de la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au génitif (complément du nom marquant l'appartenance) (féminin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch1_p3_s1_w14"
    ]
  },
  "ch1_p3_s1_w15": {
    "wordId": "ch1_p3_s1_w15",
    "translationFr": "société",
    "literalTranslation": "société humaine globale (génitif féminin singulier)",
    "grammaticalRole": "Nom féminin singulier (die Gesellschaft) au génitif singulier après « der ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch1_p3_s1_w15"
    ],
    "contextNote": "Complément déterminant « Gliederung » (articulation / hiérarchie).",
    "etymology": "Issu du moyen haut-allemand « geselleschaft » (association jurée, corps constitué), formé sur « Geselle » (compagnon)."
  },
  "ch1_p3_s1_w16": {
    "wordId": "ch1_p3_s1_w16",
    "translationFr": "en / dans",
    "literalTranslation": "à l'intérieur de",
    "grammaticalRole": "Préposition régissant le accusatif (complément d'objet direct). Préposition spatiale régissant ici le datif (situation sans déplacement).",
    "difficulty": "basic",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p3_s1_w16"
    ]
  },
  "ch1_p3_s1_w17": {
    "wordId": "ch1_p3_s1_w17",
    "translationFr": "divers / différents",
    "literalTranslation": "différenciés, distincts les uns des autres (adjectif à l'accusatif masculin pluriel)",
    "grammaticalRole": "Adjectif qualificatif décliné (pluriel accusatif (complément d'objet direct)). Adjectif marquant la pluralité des nationalités et des échelons féodaux.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p3_s1_w17"
    ],
    "etymology": "Participe passé du verbe « verscheiden » (séparer, distinguer, de ver- et scheiden = trancher)."
  },
  "ch1_p3_s1_w20": {
    "wordId": "ch1_p3_s1_w20",
    "translationFr": "une",
    "literalTranslation": "article indéfini",
    "grammaticalRole": "Article décliné au accusatif (complément d'objet direct) (féminin singulier). Article indéfini déterminant un nom singulier.",
    "difficulty": "basic",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p3_s1_w20"
    ]
  },
  "ch1_p3_s1_w23": {
    "wordId": "ch1_p3_s1_w23",
    "translationFr": "des",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au génitif (complément du nom marquant l'appartenance) ( pluriel). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch1_p3_s1_w23"
    ]
  },
  "ch1_p3_s1_w24": {
    "wordId": "ch1_p3_s1_w24",
    "translationFr": "sociales",
    "literalTranslation": "sociales, relatives à l'organisation de la société (adjectif à l'accusatif féminin pluriel)",
    "grammaticalRole": "Adjectif qualificatif décliné (pluriel génitif (complément du nom marquant l'appartenance)). Adjectif désignant les positions et hiérarchies au sein du corps social.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch1_p3_s1_w24"
    ],
    "etymology": "Dérivé au moyen du suffixe « -lich » sur « Gesellschaft » (société, de Geselle = compagnon)."
  },
  "ch1_p3_s1_w25": {
    "wordId": "ch1_p3_s1_w25",
    "translationFr": "positions / conditions sociales",
    "literalTranslation": "places statutaires, degrés de rang social (accusatif féminin pluriel)",
    "grammaticalRole": "Nom féminin pluriel (die Stellung -> die Stellungen) à l'accusatif pluriel après « in verschiedene ».",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "acc",
      "plural"
    ],
    "wordIds": [
      "ch1_p3_s1_w25"
    ],
    "contextNote": "Désigne la hiérarchie complexe des rangs dans les sociétés pré-capitalistes.",
    "etymology": "Déverbal en « -ung » formé sur le verbe « stellen » (placer debout, poser fermement), causatif germanique du verbe fort « stehen » (se tenir debout)."
  },
  "ch1_p3_s2_w1": {
    "wordId": "ch1_p3_s2_w1",
    "translationFr": "dans le / au",
    "literalTranslation": "contraction prépositionnelle 'im'",
    "grammaticalRole": "Préposition régissant le datif (complément d'objet indirect ou régime prépositionnel). Contraction de la préposition 'in' avec l'article défini masculin/neutre au datif.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p3_s2_w1"
    ]
  },
  "ch1_p3_s2_w2": {
    "wordId": "ch1_p3_s2_w2",
    "translationFr": "antique / ancienne",
    "literalTranslation": "antique, de l'âge révolu (adjectif au datif neutre singulier)",
    "grammaticalRole": "Adjectif qualificatif décliné (singulier datif (complément d'objet indirect ou régime prépositionnel)). Adjectif marquant la décrépitude des monarchies d'Ancien Régime.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p3_s2_w2"
    ],
    "etymology": "Issu du moyen haut-allemand « alt », vieux haut-allemand « alt » (ayant mûri, proto-germanique *aldaz)."
  },
  "ch1_p3_s2_w3": {
    "wordId": "ch1_p3_s2_w3",
    "translationFr": "Rome",
    "literalTranslation": "Rome antique (datif neutre singulier sans article)",
    "grammaticalRole": "Nom propre géographique au datif après la contraction prépositionnelle « Im » (In dem) et l'adjectif « alten ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p3_s2_w3"
    ],
    "contextNote": "Premier exemple historique mobilisé par Marx pour illustrer la stratification complexe des ordres anciens.",
    "etymology": "Emprunt au nom propre latin « Rōma » (nom de la ville sur le Tibre, étymon pré-latin ou étrusque débattu : traditionnellement rattaché à « ruma » = mamelle, évoquant les collines jumelles du Palatin, ou à un ancien nom fluvial archaïque).",
    "philosophicalContext": "Marx s'appuie sur la formation sociale romaine antique, dominée par le mode de production esclavagiste et l'antagonisme complexe entre patriciens fonciers, plébéiens libres mais appauvris, et esclaves non libres."
  },
  "ch1_p3_s2_w4": {
    "wordId": "ch1_p3_s2_w4",
    "translationFr": "avoir / posséder",
    "literalTranslation": "détenir comme bien ou auxiliaire",
    "grammaticalRole": "Forme verbale · (1e personne du pluriel) · temps: présent. Auxiliaire du parfait (passé composé) ou verbe de possession.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p3_s2_w4"
    ]
  },
  "ch1_p3_s2_w5": {
    "wordId": "ch1_p3_s2_w5",
    "translationFr": "nous",
    "literalTranslation": "pronom personnel sujet 1re personne du pluriel",
    "grammaticalRole": "Pronom décliné (nominatif (sujet ou attribut du sujet)). Pronom sujet collectif désignant les observateurs historiques.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch1_p3_s2_w5"
    ]
  },
  "ch1_p3_s2_w6": {
    "wordId": "ch1_p3_s2_w6",
    "translationFr": "patriciens",
    "literalTranslation": "patriciens, membres de l'aristocratie sénatoriale de Rome (accusatif masculin pluriel)",
    "grammaticalRole": "Nom masculin pluriel (der Patrizier -> die Patrizier) à l'accusatif pluriel sans article, COD de « haben ».",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "acc",
      "feudalism"
    ],
    "wordIds": [
      "ch1_p3_s2_w6"
    ],
    "contextNote": "Premier ordre de la cité romaine, détenteur exclusif des magistratures et des terres.",
    "etymology": "Emprunt au latin « patricius » (qui a des ancêtres illustres, membre de la classe sénatoriale héréditaire primitive de Rome, dérivé de « pater » = père de famille, chef de gens aristocratique)."
  },
  "ch1_p3_s2_w10": {
    "wordId": "ch1_p3_s2_w10",
    "translationFr": "plébéiens",
    "literalTranslation": "plébéiens, citoyens romains libres exclus de l'aristocratie (accusatif masculin pluriel)",
    "grammaticalRole": "Nom masculin pluriel (der Plebejer -> die Plebejer) à l'accusatif pluriel sans article.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "acc",
      "feudalism"
    ],
    "wordIds": [
      "ch1_p3_s2_w10"
    ],
    "contextNote": "La masse des citoyens libres opposée aux patriciens dans la lutte civile de la République romaine.",
    "etymology": "Emprunt au latin « plebeius », dérivé de « plebs » (la foule, la multitude du peuple non noble), issu de la racine indo-européenne *pleh₁- (être plein, remplir, d'où proviennent le latin plenus, le grec plēthos / foule, et l'allemand voll)."
  },
  "ch1_p3_s2_w12": {
    "wordId": "ch1_p3_s2_w12",
    "translationFr": "esclaves",
    "literalTranslation": "esclaves, êtres humains chosifiés et asservis (accusatif masculin pluriel)",
    "grammaticalRole": "Nom masculin pluriel (der Sklave -> die Sklaven) à l'accusatif pluriel sans article.",
    "difficulty": "basic",
    "relatedConcepts": [
      "acc",
      "feudalism"
    ],
    "wordIds": [
      "ch1_p3_s2_w12"
    ],
    "contextNote": "La classe asservie fondamentale du mode de production antique.",
    "etymology": "Issu du moyen haut-allemand « slave », emprunt au latin médiéval « sclavus », altération du grec byzantin « Skláboi » (Σκλάβοι = les peuples slaves, réduits massivement en servitude lors des conquêtes des empereurs carolingiens et byzantins aux VIIIe-Xe siècles, substituant ce terme au latin classique servus).",
    "philosophicalContext": "L'esclave antique est la négation absolue de la personne juridique : il est un instrument vocal (« instrumentum vocale ») possédé corps et âme, à la différence de l'ouvrier salarié moderne qui conserve formellement sa liberté juridique mais vend temporairement sa force de travail."
  },
  "ch1_p3_s2_w14": {
    "wordId": "ch1_p3_s2_w14",
    "translationFr": "dans le / au",
    "literalTranslation": "contraction prépositionnelle 'im'",
    "grammaticalRole": "Préposition régissant le datif (complément d'objet indirect ou régime prépositionnel). Contraction de la préposition 'in' avec l'article défini masculin/neutre au datif.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p3_s2_w14"
    ]
  },
  "ch1_p3_s2_w15": {
    "wordId": "ch1_p3_s2_w15",
    "translationFr": "Moyen Âge",
    "literalTranslation": "Moyen Âge, époque féodale intermédiaire (datif neutre singulier)",
    "grammaticalRole": "Nom neutre singulier (das Mittelalter) au datif singulier après la contraction « im » (in dem).",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat",
      "feudalism"
    ],
    "wordIds": [
      "ch1_p3_s2_w15"
    ],
    "contextNote": "Seconde illustration historique de stratification statutaire complexe.",
    "etymology": "Composé forgé au XVIIe siècle comme calque du latin humaniste « medium aevum » (l'âge moyen entre l'Antiquité classique et la Renaissance) : 1° l'adjectif « mittel » (médian, moyen) ; 2° « das Alter » (l'âge, l'époque, du vieux haut-allemand altar, du proto-germanique *aldraz)."
  },
  "ch1_p3_s2_w20": {
    "wordId": "ch1_p3_s2_w20",
    "translationFr": "maîtres de jurande / maîtres de corporation",
    "literalTranslation": "maîtres artisans membres de plein droit d'une jurande fermée (accusatif masculin pluriel)",
    "grammaticalRole": "Nom composé masculin pluriel (der Zunftbürger -> die Zunftbürger) à l'accusatif pluriel sans article, COD de « haben ».",
    "difficulty": "advanced",
    "relatedConcepts": [
      "acc",
      "feudalism",
      "comp_noun"
    ],
    "wordIds": [
      "ch1_p3_s2_w20"
    ],
    "contextNote": "Lafargue traduit par « maîtres de jurande ». Désigne le maître de corporation propriétaire de son atelier médiéval. Fiche autonome complète sans renvoi.",
    "etymology": "Composé corporatif médiéval : 1° « die Zunft » (la jurande artisanale, corporation fermée dotée de monopoles municipaux stricts, issu du moyen haut-allemand « zumft », vieux haut-allemand « zumft », littéralement accord réglé, convenance statutaire, déverbal du verbe ziemen = convenir, être décent et conforme à la règle) ; 2° « der Bürger » (le citoyen franc de la cité fortifiée, dérivé de Burg = bourg fortifié).",
    "philosophicalContext": "Note capitale d'Engels (1888) : « Le Zunftbürger est le maître de jurande, membre à part entière d'une corporation, et non son doyen ou chef ». Il possède ses outils, son atelier et exploite des compagnons (« Gesellen ») et apprentis dans un cadre de privilèges urbains féodaux étanches."
  },
  "ch1_p3_s2_w22": {
    "wordId": "ch1_p3_s2_w22",
    "translationFr": "compagnons",
    "literalTranslation": "compagnons artisans, ouvriers qualifiés subordonnés au maître de jurande (accusatif masculin pluriel)",
    "grammaticalRole": "Nom masculin pluriel (der Geselle -> die Gesellen) à l'accusatif pluriel sans article (déclinaison faible en -n).",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "acc",
      "feudalism"
    ],
    "wordIds": [
      "ch1_p3_s2_w22"
    ],
    "contextNote": "Opposé directement au « Zunftbürger » au sein de la corporation d'atelier médiévale.",
    "etymology": "Issu du moyen haut-allemand « geselle », vieux haut-allemand « gisello » (compagnon de chambre, de chambrée, celui qui partage la même demeure ou la même salle de travail), formé sur le substantif « sal » (la grande pièce, la salle de réception, vieux haut-allemand sal).",
    "philosophicalContext": "L'artisan compagnon médiéval ne peut devenir maître que sous des conditions statutaires drastiques imposées par les jurandes, ce qui crée une guerre larvée entre compagnons et maîtres au sein même des villes médiévales."
  },
  "ch1_p3_s2_w24": {
    "wordId": "ch1_p3_s2_w24",
    "translationFr": "serfs",
    "literalTranslation": "serfs, personnes asservies à la glèbe dont le corps appartient au seigneur (accusatif masculin pluriel)",
    "grammaticalRole": "Nom masculin pluriel substantivé (der Leibeigene -> die Leibeigenen) à l'accusatif pluriel sans article.",
    "difficulty": "advanced",
    "relatedConcepts": [
      "acc",
      "feudalism"
    ],
    "wordIds": [
      "ch1_p3_s2_w24"
    ],
    "contextNote": "Dernier rang de la hiérarchie féodale terrienne.",
    "etymology": "Composé juridique médiéval associant : 1° « der Leib » (le corps physique vivant, en moyen haut-allemand līp, vieux haut-allemand līb = corps, vie, proto-germanique *lībam, cognat de l'anglais life) ; 2° l'adjectif « eigen » (propre, possédé en propriété exclusive, vieux haut-allemand eigan). Désigne littéralement l'homme dont le corps physique même est la propriété légale et perpétuelle du maître seigneurial.",
    "philosophicalContext": "Le serf féodal est rivé héréditairement à la terre seigneuriale (la glèbe). Il livre une part de sa récolte et effectue des corvées non payées sous la contrainte extra-économique des armes du seigneur."
  },
  "ch1_p3_s2_w26": {
    "wordId": "ch1_p3_s2_w26",
    "translationFr": "et",
    "literalTranslation": "conjonction d'addition",
    "grammaticalRole": "Conjonction de coordination ou subordination. Conjonction liant deux termes ou propositions de même rang syntaxique.",
    "difficulty": "basic",
    "wordIds": [
      "ch1_p3_s2_w26"
    ]
  },
  "ch1_p3_s2_w27": {
    "wordId": "ch1_p3_s2_w27",
    "translationFr": "presque / quasiment",
    "literalTranslation": "à très peu de chose près",
    "grammaticalRole": "Adverbe invariable. Adverbe d'intensité nuancée caractérisant la généralité de la stratification féodale.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p3_s2_w27"
    ]
  },
  "ch1_p3_s2_w28": {
    "wordId": "ch1_p3_s2_w28",
    "translationFr": "en / dans",
    "literalTranslation": "à l'intérieur de",
    "grammaticalRole": "Préposition régissant le datif (complément d'objet indirect ou régime prépositionnel). Préposition spatiale régissant ici le datif (situation sans déplacement).",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p3_s2_w28"
    ]
  },
  "ch1_p3_s2_w29": {
    "wordId": "ch1_p3_s2_w29",
    "translationFr": "chaque / tout / chacun",
    "literalTranslation": "tous les éléments pris un à un",
    "grammaticalRole": "Pronom décliné (datif (complément d'objet indirect ou régime prépositionnel)). Déterminant indéfini distributif désignant chaque strate féodale.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p3_s2_w29"
    ]
  },
  "ch1_p3_s2_w30": {
    "wordId": "ch1_p3_s2_w30",
    "translationFr": "ce / cette / ces",
    "literalTranslation": "pronom démonstratif désignant l'objet proche",
    "grammaticalRole": "Pronom décliné (génitif (complément du nom marquant l'appartenance)). Démonstratif marquant la désignation concrète du spectre.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch1_p3_s2_w30"
    ]
  },
  "ch1_p3_s2_w31": {
    "wordId": "ch1_p3_s2_w31",
    "translationFr": "classes",
    "literalTranslation": "classes, groupements sociaux et économiques (datif féminin pluriel)",
    "grammaticalRole": "Nom féminin pluriel (die Klassen) au datif pluriel après « in fast jeder dieser ».",
    "difficulty": "advanced",
    "relatedConcepts": [
      "dat",
      "plural",
      "class_struggle"
    ],
    "wordIds": [
      "ch1_p3_s2_w31"
    ],
    "contextNote": "Fiche autonome complète sans renvoi. Désigne les subdivisions internes observées dans chaque classe historique.",
    "etymology": "Emprunt savant au latin classique « classis » (les classes civiques censitaires de Rome sous Servius Tullius, du verbe calare = convoquer les citoyens selon leur fortune).",
    "philosophicalContext": "Marx montre que chaque grande classe sociale comporte en son sein des fractions et des gradations particulières (« besondere Abstufungen »), loin d'une masse homogène."
  },
  "ch1_p3_s2_w32": {
    "wordId": "ch1_p3_s2_w32",
    "translationFr": "à nouveau / de nouveau",
    "literalTranslation": "une seconde fois",
    "grammaticalRole": "Adverbe invariable. Adverbe réitératif marquant la répétition des hiérarchies à chaque échelon féodal.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p3_s2_w32"
    ]
  },
  "ch1_p3_s2_w33": {
    "wordId": "ch1_p3_s2_w33",
    "translationFr": "particulières / spécifiques",
    "literalTranslation": "singulières, propres à un ordre distinct (adjectif à l'accusatif féminin pluriel)",
    "grammaticalRole": "Adjectif qualificatif décliné (pluriel accusatif (complément d'objet direct)). Adjectif caractérisant les privilèges corporatifs spécifiques.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p3_s2_w33"
    ],
    "etymology": "Dérivé de « sonder » (à part, séparé, sans, en vieux haut-allemand suntar = à l'écart)."
  },
  "ch1_p3_s2_w34": {
    "wordId": "ch1_p3_s2_w34",
    "translationFr": "gradations / degrés / nuances",
    "literalTranslation": "gradations hiérarchiques, échelons statutaires particuliers (accusatif féminin pluriel)",
    "grammaticalRole": "Nom féminin pluriel (die Abstufung -> die Abstufungen) à l'accusatif pluriel, COD de « finden ».",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "acc",
      "plural"
    ],
    "wordIds": [
      "ch1_p3_s2_w34"
    ],
    "contextNote": "Souligne la granularité et la multiplicité des échelons de rang dans les ordres féodaux et antiques.",
    "etymology": "Déverbal en « -ung » formé sur le verbe « abstufen » (graduer, échelonner par marches d'escalier), dérivé du substantif « die Stufe » (le degré, la marche d'escalier, en moyen haut-allemand stuofe, vieux haut-allemand stuofa, issu du verbe germanique stapfen = faire un pas)."
  },
  "ch1_p4_s1_w1": {
    "wordId": "ch1_p4_s1_w1",
    "translationFr": "la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au nominatif (sujet ou attribut du sujet) (féminin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch1_p4_s1_w1"
    ]
  },
  "ch1_p4_s1_w2": {
    "wordId": "ch1_p4_s1_w2",
    "translationFr": "de / hors de / depuis",
    "literalTranslation": "qui émane de",
    "grammaticalRole": "Préposition régissant le datif (complément d'objet indirect ou régime prépositionnel). Préposition spatiale et causale régissant le datif.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p4_s1_w2"
    ]
  },
  "ch1_p4_s1_w3": {
    "wordId": "ch1_p4_s1_w3",
    "translationFr": "au / au moyen du",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au datif (complément d'objet indirect ou régime prépositionnel) (masculin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p4_s1_w3"
    ]
  },
  "ch1_p4_s1_w4": {
    "wordId": "ch1_p4_s1_w4",
    "translationFr": "ruine / effondrement / disparition",
    "literalTranslation": "chute dans l'abîme, effondrement historique complet de l'ordre féodal (datif masculin singulier)",
    "grammaticalRole": "Nom masculin singulier (der Untergang) au datif singulier avec la désinence archaïque -e après la préposition « aus dem ».",
    "difficulty": "advanced",
    "relatedConcepts": [
      "comp_noun",
      "dat",
      "feudalism"
    ],
    "wordIds": [
      "ch1_p4_s1_w4"
    ],
    "contextNote": "Régime de provenance « aus dem Untergange ». Fiche autonome complète sans renvoi.",
    "etymology": "Composé de la préposition germanique « unter » (en dessous, vers le bas, vieux haut-allemand untar) et du déverbal « der Gang » (la marche, l'allée, en moyen haut-allemand ganc, vieux haut-allemand gang, issu du verbe fort gehen = aller). Évoque au sens propre la descente au tombeau, le naufrage ou le coucher des astres.",
    "philosophicalContext": "L'effondrement inéluctable de la féodalité : le mode de production féodal s'est écroulé parce que ses rapports de propriété corporatifs et serviles entravaient le développement des forces productives. La bourgeoisie moderne est sortie directement de cet Untergang."
  },
  "ch1_p4_s1_w5": {
    "wordId": "ch1_p4_s1_w5",
    "translationFr": "de la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au génitif (complément du nom marquant l'appartenance) (féminin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch1_p4_s1_w5"
    ]
  },
  "ch1_p4_s1_w6": {
    "wordId": "ch1_p4_s1_w6",
    "translationFr": "féodale",
    "literalTranslation": "féodale, fondée sur le fief et le servage (adjectif au génitif féminin singulier)",
    "grammaticalRole": "Adjectif qualificatif décliné (singulier génitif (complément du nom marquant l'appartenance)). Adjectif désignant l'ordre hiérarchique seigneurial terrien antérieur au capital.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch1_p4_s1_w6"
    ],
    "etymology": "Emprunt au latin médiéval « feudalis » (relatif au fief, de feudum, du francique *fehu = bétail, bien foncier octroyé en échange d'hommage lige)."
  },
  "ch1_p4_s1_w7": {
    "wordId": "ch1_p4_s1_w7",
    "translationFr": "société",
    "literalTranslation": "société féodale (génitif féminin singulier)",
    "grammaticalRole": "Nom féminin singulier (die Gesellschaft) au génitif singulier après « der feudalen ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen",
      "feudalism"
    ],
    "wordIds": [
      "ch1_p4_s1_w7"
    ],
    "contextNote": "Complément déterminant « Untergange ».",
    "etymology": "Issu du moyen haut-allemand « geselleschaft », dérivé de Geselle (compagnon)."
  },
  "ch1_p4_s1_w9": {
    "wordId": "ch1_p4_s1_w9",
    "translationFr": "moderne",
    "literalTranslation": "moderne, contemporaine du capitalisme mécanisé (adjectif au nominatif féminin singulier)",
    "grammaticalRole": "Adjectif qualificatif décliné (singulier nominatif (sujet ou attribut du sujet)). Adjectif qualifiant l'ordre bourgeois né des ruines de la féodalité.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch1_p4_s1_w9"
    ],
    "etymology": "Emprunt savant au latin classique tardif « modernus » (actuel, de notre temps, formé sur l'adverbe « modo » = récemment, à l'instant, de la racine de modus = mesure du temps présent)."
  },
  "ch1_p4_s1_w11": {
    "wordId": "ch1_p4_s1_w11",
    "translationFr": "société",
    "literalTranslation": "société bourgeoise moderne (nominatif féminin singulier)",
    "grammaticalRole": "Nom féminin singulier (die Gesellschaft) au nominatif singulier déterminé par « die moderne bürgerliche ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "nom",
      "bourgeoisie"
    ],
    "wordIds": [
      "ch1_p4_s1_w11"
    ],
    "contextNote": "Sujet grammatical de la proposition régissant « hat ... nicht aufgehoben ».",
    "etymology": "Issu du moyen haut-allemand « geselleschaft », dérivé de Geselle (compagnon)."
  },
  "ch1_p4_s1_w12": {
    "wordId": "ch1_p4_s1_w12",
    "translationFr": "avoir / posséder",
    "literalTranslation": "détenir comme bien ou auxiliaire",
    "grammaticalRole": "Forme verbale · (3e personne du singulier) · temps: présent. Auxiliaire du parfait (passé composé) ou verbe de possession.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p4_s1_w12"
    ]
  },
  "ch1_p4_s1_w13": {
    "wordId": "ch1_p4_s1_w13",
    "translationFr": "les",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au accusatif (complément d'objet direct) ( pluriel). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p4_s1_w13"
    ]
  },
  "ch1_p4_s1_w15": {
    "wordId": "ch1_p4_s1_w15",
    "translationFr": "ne pas / non",
    "literalTranslation": "particule de négation",
    "grammaticalRole": "Particule verbale ou négative. Particule négative infirmant une proposition.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p4_s1_w15"
    ]
  },
  "ch1_p4_s2_w1": {
    "wordId": "ch1_p4_s2_w1",
    "translationFr": "ils / elles / elle",
    "literalTranslation": "pronom personnel de 3e personne",
    "grammaticalRole": "Pronom décliné (nominatif (sujet ou attribut du sujet)). Pronom personnel sujet désignant une entité plurielle ou féminine.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch1_p4_s2_w1"
    ]
  },
  "ch1_p4_s2_w2": {
    "wordId": "ch1_p4_s2_w2",
    "translationFr": "avoir / posséder",
    "literalTranslation": "détenir comme bien ou auxiliaire",
    "grammaticalRole": "Forme verbale · (3e personne du singulier) · temps: présent. Auxiliaire du parfait (passé composé) ou verbe de possession.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p4_s2_w2"
    ]
  },
  "ch1_p4_s2_w3": {
    "wordId": "ch1_p4_s2_w3",
    "translationFr": "seulement / uniquement",
    "literalTranslation": "sans rien d'autre",
    "grammaticalRole": "Adverbe invariable. Adverbe limitatif : la bourgeoisie s'est bornée à créer de nouvelles formes d'oppression.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p4_s2_w3"
    ]
  },
  "ch1_p4_s2_w4": {
    "wordId": "ch1_p4_s2_w4",
    "translationFr": "nouvelles",
    "literalTranslation": "nouvelles, inédites dans l'histoire (adjectif à l'accusatif féminin pluriel)",
    "grammaticalRole": "Adjectif qualificatif décliné (pluriel accusatif (complément d'objet direct)). Adjectif martelé par Marx pour démontrer que la bourgeoisie n'a fait que renouveler les formes d'oppression.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p4_s2_w4"
    ],
    "etymology": "Issu du moyen haut-allemand « niuwe », vieux haut-allemand « niuwi » (neuf, récent), du proto-germanique *neujaz, issu de la racine indo-européenne *newos (d'où latin novus, grec néos)."
  },
  "ch1_p4_s2_w5": {
    "wordId": "ch1_p4_s2_w5",
    "translationFr": "classes",
    "literalTranslation": "classes économiques nouvelles produites par le capitalisme (accusatif féminin pluriel)",
    "grammaticalRole": "Nom féminin pluriel (die Klassen) à l'accusatif pluriel qualifié par l'adjectif « neue », premier COD de « gesetzt ».",
    "difficulty": "advanced",
    "relatedConcepts": [
      "acc",
      "plural",
      "class_struggle"
    ],
    "wordIds": [
      "ch1_p4_s2_w5"
    ],
    "contextNote": "Fiche autonome complète sans renvoi.",
    "etymology": "Emprunt au latin « classis » (division censitaire des citoyens selon la propriété, de calare = appeler).",
    "philosophicalContext": "Le capitalisme ne met pas fin à la lutte des classes : il engendre la classe bourgeoise d'un côté, et le prolétariat salarié de l'autre, poussant la contradiction à son point le plus aigu."
  },
  "ch1_p4_s2_w7": {
    "wordId": "ch1_p4_s2_w7",
    "translationFr": "nouvelles",
    "literalTranslation": "nouvelles (adjectif à l'accusatif féminin pluriel)",
    "grammaticalRole": "Adjectif qualificatif décliné (pluriel accusatif (complément d'objet direct)). Adjectif martelé par Marx pour démontrer que la bourgeoisie n'a fait que renouveler les formes d'oppression.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p4_s2_w7"
    ],
    "etymology": "Issu du vieux haut-allemand « niuwi » (proto-germanique *neujaz, racine indo-européenne *newos)."
  },
  "ch1_p4_s2_w9": {
    "wordId": "ch1_p4_s2_w9",
    "translationFr": "de la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au génitif (complément du nom marquant l'appartenance) (féminin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch1_p4_s2_w9"
    ]
  },
  "ch1_p4_s2_w10": {
    "wordId": "ch1_p4_s2_w10",
    "translationFr": "oppression",
    "literalTranslation": "oppression économique et politique, assujettissement forcé (génitif féminin singulier)",
    "grammaticalRole": "Nom féminin singulier (die Unterdrückung) au génitif singulier après « der ».",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "gen",
      "class_struggle"
    ],
    "wordIds": [
      "ch1_p4_s2_w10"
    ],
    "contextNote": "Complément du nom déterminant « Bedingungen ».",
    "etymology": "Déverbal en « -ung » formé sur le verbe inséparable « unterdrücken » (comprimer vers le bas, écraser par contrainte, de unter- + drücken = presser, du vieux haut-allemand drucchen).",
    "philosophicalContext": "L'oppression a changé de forme : elle n'est plus assise sur le servage féodal ou les chaînes de l'esclavage légal, mais sur la contrainte économique silencieuse qui force l'ouvrier dépourvu de moyens de production à vendre sa force de travail pour ne pas mourir de faim."
  },
  "ch1_p4_s2_w12": {
    "wordId": "ch1_p4_s2_w12",
    "translationFr": "nouvelles",
    "literalTranslation": "nouvelles (adjectif à l'accusatif féminin pluriel)",
    "grammaticalRole": "Adjectif qualificatif décliné (pluriel accusatif (complément d'objet direct)). Adjectif martelé par Marx pour démontrer que la bourgeoisie n'a fait que renouveler les formes d'oppression.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p4_s2_w12"
    ],
    "etymology": "Issu du vieux haut-allemand « niuwi » (proto-germanique *neujaz, racine indo-européenne *newos)."
  },
  "ch1_p4_s2_w14": {
    "wordId": "ch1_p4_s2_w14",
    "translationFr": "du",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au génitif (complément du nom marquant l'appartenance) (masculin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch1_p4_s2_w14"
    ]
  },
  "ch1_p4_s2_w15": {
    "wordId": "ch1_p4_s2_w15",
    "translationFr": "lutte / combat",
    "literalTranslation": "lutte, guerre de classe (génitif masculin singulier)",
    "grammaticalRole": "Nom masculin singulier (der Kampf) au génitif singulier avec désinence forte -es après « des ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen",
      "class_struggle"
    ],
    "wordIds": [
      "ch1_p4_s2_w15"
    ],
    "contextNote": "Complément déterminant « Gestaltungen » (formes / configurations).",
    "etymology": "Issu du moyen haut-allemand « kampf », vieux haut-allemand « kampf », emprunt au latin « campus » (champ de bataille)."
  },
  "ch1_p4_s2_w16": {
    "wordId": "ch1_p4_s2_w16",
    "translationFr": "à / sur",
    "literalTranslation": "en contact avec",
    "grammaticalRole": "Préposition régissant le accusatif (complément d'objet direct). Préposition spatiale ou d'attribution.",
    "difficulty": "basic",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p4_s2_w16"
    ]
  },
  "ch1_p4_s2_w17": {
    "wordId": "ch1_p4_s2_w17",
    "translationFr": "la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au accusatif (complément d'objet direct) (féminin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p4_s2_w17"
    ]
  },
  "ch1_p4_s2_w18": {
    "wordId": "ch1_p4_s2_w18",
    "translationFr": "place",
    "literalTranslation": "place, position de substitution historique (accusatif féminin singulier)",
    "grammaticalRole": "Nom féminin singulier (die Stelle) à l'accusatif singulier après la préposition directionnelle « an die ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p4_s2_w18"
    ],
    "contextNote": "Fait partie de la locution prépositionnelle « an die Stelle » (à la place de).",
    "etymology": "Issu du moyen haut-allemand « stelle », vieux haut-allemand « stella » (emplacement fixe, poste), déverbal de stellen (poser debout)."
  },
  "ch1_p4_s2_w19": {
    "wordId": "ch1_p4_s2_w19",
    "translationFr": "des",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au génitif (complément du nom marquant l'appartenance) ( pluriel). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch1_p4_s2_w19"
    ]
  },
  "ch1_p4_s2_w20": {
    "wordId": "ch1_p4_s2_w20",
    "translationFr": "anciennes",
    "literalTranslation": "anciennes conditions et classes féodales (adjectif au génitif féminin pluriel substantivé)",
    "grammaticalRole": "Adjectif qualificatif décliné (pluriel génitif (complément du nom marquant l'appartenance)). Adjectif marquant la décrépitude des monarchies d'Ancien Régime.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch1_p4_s2_w20"
    ],
    "etymology": "Issu du moyen haut-allemand « alt », vieux haut-allemand « alt » (proto-germanique *aldaz)."
  },
  "ch1_p5_s1_w1": {
    "wordId": "ch1_p5_s1_w1",
    "translationFr": "notre / nos",
    "literalTranslation": "possessif de 1re personne du pluriel",
    "grammaticalRole": "Pronom décliné (nominatif (sujet ou attribut du sujet)). Possessif marquant l'adhésion des auteurs à l'époque contemporaine.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch1_p5_s1_w1"
    ]
  },
  "ch1_p5_s1_w2": {
    "wordId": "ch1_p5_s1_w2",
    "translationFr": "époque",
    "literalTranslation": "époque, ère historique (nominatif féminin singulier)",
    "grammaticalRole": "Nom féminin singulier (die Epoche) au nominatif singulier déterminé par l'adjectif possessif « Unsere ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "nom",
      "hist_mat"
    ],
    "wordIds": [
      "ch1_p5_s1_w2"
    ],
    "contextNote": "Sujet de la proposition caractérisant l'époque bourgeoise par la simplification des antagonismes.",
    "etymology": "Emprunt savant au grec ancien « epokhḗ » (point d'arrêt, halte dans le temps, de epékhein = arrêter)."
  },
  "ch1_p5_s1_w4": {
    "wordId": "ch1_p5_s1_w4",
    "translationFr": "la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au nominatif (sujet ou attribut du sujet) (féminin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch1_p5_s1_w4"
    ]
  },
  "ch1_p5_s1_w5": {
    "wordId": "ch1_p5_s1_w5",
    "translationFr": "époque",
    "literalTranslation": "époque, ère historique (nominatif féminin singulier)",
    "grammaticalRole": "Nom féminin singulier (die Epoche) au nominatif singulier après « die ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch1_p5_s1_w5"
    ],
    "contextNote": "Reprise anaphorique en apposition explicative.",
    "etymology": "Emprunt au grec ancien « epokhḗ » (point d'arrêt, ère nouvelle)."
  },
  "ch1_p5_s1_w6": {
    "wordId": "ch1_p5_s1_w6",
    "translationFr": "de la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au génitif (complément du nom marquant l'appartenance) (féminin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch1_p5_s1_w6"
    ]
  },
  "ch1_p5_s1_w7": {
    "wordId": "ch1_p5_s1_w7",
    "translationFr": "bourgeoisie",
    "literalTranslation": "bourgeoisie, classe dominante capitaliste (génitif féminin singulier)",
    "grammaticalRole": "Nom féminin singulier (die Bourgeoisie) au génitif singulier après « der ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen",
      "bourgeoisie"
    ],
    "wordIds": [
      "ch1_p5_s1_w7"
    ],
    "contextNote": "Complément déterminant l'époque moderne.",
    "etymology": "Emprunt direct au français « bourgeoisie », dérivé de « bourgeois », issu du bas-latin « burgensis » (habitant franc d'un bourg fortifié, Burg).",
    "philosophicalContext": "L'époque de la bourgeoisie est le moment historique où le capitalisme subordonne la société entière à l'accumulation de profit et à la production marchande."
  },
  "ch1_p5_s1_w10": {
    "wordId": "ch1_p5_s1_w10",
    "translationFr": "se / soi-même",
    "literalTranslation": "pronom réfléchi de 3e personne",
    "grammaticalRole": "Pronom décliné (accusatif (complément d'objet direct)). Pronom réfléchi accompagnant un verbe pronominal.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p5_s1_w10"
    ]
  },
  "ch1_p5_s1_w11": {
    "wordId": "ch1_p5_s1_w11",
    "translationFr": "cependant / toutefois",
    "literalTranslation": "malgré cela, en revanche",
    "grammaticalRole": "Adverbe invariable. Adverbe marquant la singularité spécifique de l'époque bourgeoise moderne.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p5_s1_w11"
    ]
  },
  "ch1_p5_s1_w12": {
    "wordId": "ch1_p5_s1_w12",
    "translationFr": "par là / de cette manière",
    "literalTranslation": "à travers ce moyen précis",
    "grammaticalRole": "Adverbe invariable. Adverbe pronominal reliant la cause matérielle à sa conséquence sociale.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p5_s1_w12"
    ]
  },
  "ch1_p5_s1_w13": {
    "wordId": "ch1_p5_s1_w13",
    "translationFr": "de / hors de / depuis",
    "literalTranslation": "qui émane de",
    "grammaticalRole": "Particule verbale ou négative. Préposition spatiale et causale régissant le datif.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p5_s1_w13"
    ]
  },
  "ch1_p5_s1_w15": {
    "wordId": "ch1_p5_s1_w15",
    "translationFr": "que",
    "literalTranslation": "conjonction de subordination",
    "grammaticalRole": "Conjonction de coordination ou subordination. Conjonction introduisant une proposition complétive rejetant le verbe en fin de proposition.",
    "difficulty": "basic",
    "wordIds": [
      "ch1_p5_s1_w15"
    ]
  },
  "ch1_p5_s1_w16": {
    "wordId": "ch1_p5_s1_w16",
    "translationFr": "ils / elles / elle",
    "literalTranslation": "pronom personnel de 3e personne",
    "grammaticalRole": "Pronom décliné (nominatif (sujet ou attribut du sujet)). Pronom personnel sujet désignant une entité plurielle ou féminine.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch1_p5_s1_w16"
    ]
  },
  "ch1_p5_s1_w17": {
    "wordId": "ch1_p5_s1_w17",
    "translationFr": "les",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au accusatif (complément d'objet direct) ( pluriel). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p5_s1_w17"
    ]
  },
  "ch1_p5_s1_w18": {
    "wordId": "ch1_p5_s1_w18",
    "translationFr": "antagonismes de classes",
    "literalTranslation": "antagonismes de classes, contradictions économiques majeures (accusatif masculin pluriel)",
    "grammaticalRole": "Nom composé masculin pluriel (die Klassengegensätze) à l'accusatif pluriel, COD de « vereinfacht hat ».",
    "difficulty": "advanced",
    "relatedConcepts": [
      "acc",
      "plural",
      "class_struggle",
      "comp_noun"
    ],
    "wordIds": [
      "ch1_p5_s1_w18"
    ],
    "contextNote": "Fiche autonome complète sans renvoi.",
    "etymology": "Composé associant « die Klasse » (du latin classis) et « der Gegensatz » (calque allemand du grec antíthesis, de gegen = contre + Satz = position).",
    "philosophicalContext": "La thèse de la simplification dialectique : à l'enchevêtrement baroque des ordres féodaux (noblesse, clergé, maîtres, compagnons, serfs, vilains) succède la clarté brutale d'une opposition binaire."
  },
  "ch1_p5_s1_w20": {
    "wordId": "ch1_p5_s1_w20",
    "translationFr": "avoir / posséder",
    "literalTranslation": "détenir comme bien ou auxiliaire",
    "grammaticalRole": "Forme verbale · (3e personne du singulier) · temps: présent. Auxiliaire du parfait (passé composé) ou verbe de possession.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p5_s1_w20"
    ]
  },
  "ch1_p5_s2_w1": {
    "wordId": "ch1_p5_s2_w1",
    "translationFr": "la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au nominatif (sujet ou attribut du sujet) (féminin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch1_p5_s2_w1"
    ]
  },
  "ch1_p5_s2_w2": {
    "wordId": "ch1_p5_s2_w2",
    "translationFr": "entière / tout entière",
    "literalTranslation": "entière, prise dans sa totalité organique (adjectif au nominatif féminin singulier)",
    "grammaticalRole": "Adjectif qualificatif décliné (singulier nominatif (sujet ou attribut du sujet)). Adjectif insistant sur l'universalité de la polarisation de la société entière.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch1_p5_s2_w2"
    ],
    "etymology": "Issu du moyen haut-allemand « ganz », vieux haut-allemand « ganz » (intact, complet)."
  },
  "ch1_p5_s2_w3": {
    "wordId": "ch1_p5_s2_w3",
    "translationFr": "société",
    "literalTranslation": "société tout entière (nominatif féminin singulier)",
    "grammaticalRole": "Nom féminin singulier (die Gesellschaft) au nominatif singulier après « Die ganze ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch1_p5_s2_w3"
    ],
    "contextNote": "Sujet de la scission dialectique universelle.",
    "etymology": "Issu du moyen haut-allemand « geselleschaft », dérivé de Geselle (compagnon)."
  },
  "ch1_p5_s2_w5": {
    "wordId": "ch1_p5_s2_w5",
    "translationFr": "se / soi-même",
    "literalTranslation": "pronom réfléchi de 3e personne",
    "grammaticalRole": "Pronom décliné (accusatif (complément d'objet direct)). Pronom réfléchi accompagnant un verbe pronominal.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p5_s2_w5"
    ]
  },
  "ch1_p5_s2_w6": {
    "wordId": "ch1_p5_s2_w6",
    "translationFr": "plus / davantage",
    "literalTranslation": "en quantité supérieure",
    "grammaticalRole": "Adverbe invariable. Adverbe renforçant l'accélération de la division sociale (« immer mehr » = de plus en plus).",
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p5_s2_w6"
    ]
  },
  "ch1_p5_s2_w7": {
    "wordId": "ch1_p5_s2_w7",
    "translationFr": "et",
    "literalTranslation": "conjonction d'addition",
    "grammaticalRole": "Conjonction de coordination ou subordination. Conjonction liant deux termes ou propositions de même rang syntaxique.",
    "difficulty": "basic",
    "wordIds": [
      "ch1_p5_s2_w7"
    ]
  },
  "ch1_p5_s2_w8": {
    "wordId": "ch1_p5_s2_w8",
    "translationFr": "plus / davantage",
    "literalTranslation": "en quantité supérieure",
    "grammaticalRole": "Adverbe invariable. Adverbe renforçant l'accélération de la division sociale (« immer mehr » = de plus en plus).",
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p5_s2_w8"
    ]
  },
  "ch1_p5_s2_w9": {
    "wordId": "ch1_p5_s2_w9",
    "translationFr": "en / dans",
    "literalTranslation": "à l'intérieur de",
    "grammaticalRole": "Préposition régissant le accusatif (complément d'objet direct). Préposition spatiale régissant ici le datif (situation sans déplacement).",
    "difficulty": "basic",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p5_s2_w9"
    ]
  },
  "ch1_p5_s2_w10": {
    "wordId": "ch1_p5_s2_w10",
    "translationFr": "deux",
    "literalTranslation": "adjectif numéral cardinal (2)",
    "grammaticalRole": "Adjectif numéral marquant la bipolarisation irréductible de la société en deux camps.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p5_s2_w10"
    ]
  },
  "ch1_p5_s2_w11": {
    "wordId": "ch1_p5_s2_w11",
    "translationFr": "grands",
    "literalTranslation": "vastes, de dimension colossale (adjectif à l'accusatif neutre pluriel)",
    "grammaticalRole": "Adjectif qualificatif décliné (pluriel accusatif (complément d'objet direct)). Adjectif soulignant la division monolithique de la société moderne en deux camps gigantesques.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p5_s2_w11"
    ],
    "etymology": "Issu du moyen haut-allemand « grōz », vieux haut-allemand « grōz » (grand, imposant, corpulent), du proto-germanique *grautaz (gros, grossier)."
  },
  "ch1_p5_s2_w12": {
    "wordId": "ch1_p5_s2_w12",
    "translationFr": "ennemis / hostiles",
    "literalTranslation": "ennemis, irréconciliables, portant une hostilité mortelle (adjectif à l'accusatif neutre pluriel)",
    "grammaticalRole": "Adjectif qualificatif décliné (pluriel accusatif (complément d'objet direct)). Adjectif caractérisant les deux camps belligérants de la société moderne.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p5_s2_w12"
    ],
    "etymology": "Issu du moyen haut-allemand « vīntlich », dérivé en « -lich » sur « der Feind » (l'ennemi, l'adversaire de combat, en vieux haut-allemand fīant, participe présent substantivé du verbe germanique *fijōną = haïr, détester).",
    "philosophicalContext": "L'antagonisme moderne n'est pas une simple émulation concurrentielle : c'est une hostilité de guerre civile objective entre la classe possédante et la classe spoliée."
  },
  "ch1_p5_s2_w15": {
    "wordId": "ch1_p5_s2_w15",
    "translationFr": "en / dans",
    "literalTranslation": "à l'intérieur de",
    "grammaticalRole": "Préposition régissant le accusatif (complément d'objet direct). Préposition spatiale régissant ici le datif (situation sans déplacement).",
    "difficulty": "basic",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p5_s2_w15"
    ]
  },
  "ch1_p5_s2_w16": {
    "wordId": "ch1_p5_s2_w16",
    "translationFr": "deux",
    "literalTranslation": "adjectif numéral cardinal (2)",
    "grammaticalRole": "Adjectif numéral marquant la bipolarisation irréductible de la société en deux camps.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p5_s2_w16"
    ]
  },
  "ch1_p5_s2_w17": {
    "wordId": "ch1_p5_s2_w17",
    "translationFr": "grandes",
    "literalTranslation": "grandes, universelles (adjectif à l'accusatif féminin pluriel)",
    "grammaticalRole": "Adjectif qualificatif décliné (pluriel accusatif (complément d'objet direct)). Adjectif soulignant la division monolithique de la société moderne en deux camps gigantesques.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p5_s2_w17"
    ],
    "etymology": "Issu du moyen haut-allemand « grōz », vieux haut-allemand « grōz »."
  },
  "ch1_p5_s2_w19": {
    "wordId": "ch1_p5_s2_w19",
    "translationFr": "l'un l'autre / réciproquement",
    "literalTranslation": "les uns les autres",
    "grammaticalRole": "Pronom décliné (datif (complément d'objet indirect ou régime prépositionnel)). Pronom réciproque exprimant l'opposition face à face des deux classes.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p5_s2_w19"
    ]
  },
  "ch1_p5_s2_w20": {
    "wordId": "ch1_p5_s2_w20",
    "translationFr": "directement / face à face",
    "literalTranslation": "en ligne droite, immédiatement, sans écran féodal intermédiaire (adverbe / adjectif)",
    "grammaticalRole": "Adjectif qualificatif décliné ( ). Adverbe marquant la simplification capitaliste réduisant les médiations féodales au rapport d'argent nu.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p5_s2_w20"
    ],
    "etymology": "Emprunt savant au latin classique « directus » (droit, en ligne droite, sans détour), participe passé de dirigere (aligner, guider, de dis- et regere = mener droit).",
    "philosophicalContext": "La disparition des corps intermédiaires corporatifs met pour la première fois les deux classes fondamentales en face à face direct sans aucune médiation."
  },
  "ch1_p5_s2_w22": {
    "wordId": "ch1_p5_s2_w22",
    "translationFr": "classes",
    "literalTranslation": "classes, camps belligérants économiques fondamentaux (accusatif féminin pluriel)",
    "grammaticalRole": "Nom féminin pluriel (die Klassen) à l'accusatif pluriel après « in zwei große ... Klassen ».",
    "difficulty": "advanced",
    "relatedConcepts": [
      "acc",
      "plural",
      "class_struggle"
    ],
    "wordIds": [
      "ch1_p5_s2_w22"
    ],
    "contextNote": "Fiche autonome complète sans renvoi.",
    "etymology": "Emprunt au latin « classis » (division censitaire des citoyens romains selon la fortune, de calare = convoquer).",
    "philosophicalContext": "Polarisation historique ultime : l'ensemble des couches intermédiaires (artisans, boutiquiers, paysans parcellaires) est broyé par la concurrence du grand capital et précipité dans le prolétariat, ne laissant face à face que les deux classes fondamentales du mode de production moderne : la Bourgeoisie et le Prolétariat."
  },
  "ch1_p5_s2_w25": {
    "wordId": "ch1_p5_s2_w25",
    "translationFr": "et",
    "literalTranslation": "conjonction d'addition",
    "grammaticalRole": "Conjonction de coordination ou subordination. Conjonction liant deux termes ou propositions de même rang syntaxique.",
    "difficulty": "basic",
    "wordIds": [
      "ch1_p5_s2_w25"
    ]
  },
  "ch1_p6_s1_w1": {
    "wordId": "ch1_p6_s1_w1",
    "translationFr": "de / hors de / depuis",
    "literalTranslation": "qui émane de",
    "grammaticalRole": "Préposition régissant le datif (complément d'objet indirect ou régime prépositionnel). Préposition spatiale et causale régissant le datif.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p6_s1_w1"
    ]
  },
  "ch1_p6_s1_w2": {
    "wordId": "ch1_p6_s1_w2",
    "translationFr": "aux",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au datif (complément d'objet indirect ou régime prépositionnel) ( pluriel). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p6_s1_w2"
    ]
  },
  "ch1_p6_s1_w3": {
    "wordId": "ch1_p6_s1_w3",
    "translationFr": "serfs",
    "literalTranslation": "serfs, tenanciers asservis à la glèbe seigneuriale (datif masculin pluriel)",
    "grammaticalRole": "Nom masculin pluriel substantivé (die Leibeigenen) au datif pluriel après « Aus den ».",
    "difficulty": "advanced",
    "relatedConcepts": [
      "dat",
      "plural",
      "feudalism"
    ],
    "wordIds": [
      "ch1_p6_s1_w3"
    ],
    "contextNote": "Point de départ historique de la genèse de la bourgeoisie.",
    "etymology": "Composé de « Leib » (le corps, la vie physique) et « eigen » (propre, possédé en bien exclusif). Le serf dont le corps même est la propriété du seigneur.",
    "philosophicalContext": "Paradoxe dialectique fondamental : la classe dominante qui régit aujourd'hui le monde entier (la bourgeoisie) ne descend pas des rois ou des seigneurs féodaux, mais de la fuite clandestine des serfs les plus opprimés hors des terres de leurs maîtres."
  },
  "ch1_p6_s1_w4": {
    "wordId": "ch1_p6_s1_w4",
    "translationFr": "du",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au génitif (complément du nom marquant l'appartenance) (neutre singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch1_p6_s1_w4"
    ]
  },
  "ch1_p6_s1_w5": {
    "wordId": "ch1_p6_s1_w5",
    "translationFr": "Moyen Âge",
    "literalTranslation": "Moyen Âge féodal (génitif neutre singulier)",
    "grammaticalRole": "Nom neutre singulier (das Mittelalter) au génitif fort en -s après « des ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen",
      "feudalism"
    ],
    "wordIds": [
      "ch1_p6_s1_w5"
    ],
    "contextNote": "Complément déterminant « Leibeigenen ».",
    "etymology": "Composé de mittel (moyen) et Alter (âge, époque), calque du latin medium aevum."
  },
  "ch1_p6_s1_w6": {
    "wordId": "ch1_p6_s1_w6",
    "translationFr": "sortirent / émergèrent",
    "literalTranslation": "émanèrent, sortirent en marchant (prétérit pluriel de hervorgehen)",
    "grammaticalRole": "Radical verbal du verbe séparable fort « hervorgehen » au prétérit de l'indicatif, 3e personne du pluriel.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p6_s1_w6"
    ],
    "contextNote": "Verbe séparable « hervorgehen » exprimant l'émergence historique progressive.",
    "etymology": "Verbe fort (moyen haut-allemand hervorgān, vieux haut-allemand hervor gān), unissant le préverbe hervor (vers l'avant, hors de, de her + vor) et le verbe gehen (marcher, aller).",
    "relatedConcepts": [
      "sep_verb",
      "past"
    ]
  },
  "ch1_p6_s1_w7": {
    "wordId": "ch1_p6_s1_w7",
    "translationFr": "les",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au nominatif (sujet ou attribut du sujet) ( pluriel). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch1_p6_s1_w7"
    ]
  },
  "ch1_p6_s1_w9": {
    "wordId": "ch1_p6_s1_w9",
    "translationFr": "des",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au génitif (complément du nom marquant l'appartenance) ( pluriel). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch1_p6_s1_w9"
    ]
  },
  "ch1_p6_s1_w10": {
    "wordId": "ch1_p6_s1_w10",
    "translationFr": "premières",
    "literalTranslation": "qui apparaissent en premier chronologiquement (adjectif au génitif féminin pluriel)",
    "grammaticalRole": "Adjectif qualificatif décliné (pluriel génitif (complément du nom marquant l'appartenance)). Adjectif ordonnant les origines historiques de la bourgeoisie primitive.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch1_p6_s1_w10"
    ],
    "etymology": "Issu du moyen haut-allemand « êrst », vieux haut-allemand « ēristo » (premier, tout au début, superlatif du proto-germanique *airiz = plus tôt, jadis, racine de eher/early)."
  },
  "ch1_p6_s1_w11": {
    "wordId": "ch1_p6_s1_w11",
    "translationFr": "villes / cités franches",
    "literalTranslation": "villes médiévales franches, cités bourgeoises autonomes (génitif féminin pluriel)",
    "grammaticalRole": "Nom féminin pluriel (die Stadt -> die Städte) au génitif pluriel après « der ersten ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen",
      "plural"
    ],
    "wordIds": [
      "ch1_p6_s1_w11"
    ],
    "contextNote": "Complément déterminant « Pfahlbürger ».",
    "etymology": "Issu du moyen haut-allemand « stat » (lieu, emplacement fixe, bourg fortifié), vieux haut-allemand « stat » (lieu, place, cité, proto-germanique *stadiz, racine indo-européenne *steh₂- = se tenir debout). Cognat de l'anglais stead."
  },
  "ch1_p6_s1_w12": {
    "wordId": "ch1_p6_s1_w12",
    "translationFr": "en avant / au jour",
    "literalTranslation": "hors de, en avant (particule séparable verbale)",
    "grammaticalRole": "Particule verbale séparable du verbe « hervorgehen ».",
    "difficulty": "basic",
    "wordIds": [
      "ch1_p6_s1_w12"
    ],
    "contextNote": "Particule séparable de « hervorgehen » rejetée en position de parenthèse verbale.",
    "etymology": "Composé adverbial germanique formé de « her » (vers ici) et « vor » (devant, en avant).",
    "relatedConcepts": [
      "sep_verb"
    ]
  },
  "ch1_p6_s1_w14": {
    "wordId": "ch1_p6_s1_w14",
    "translationFr": "de / hors de / depuis",
    "literalTranslation": "qui émane de",
    "grammaticalRole": "Préposition régissant le datif (complément d'objet indirect ou régime prépositionnel). Préposition spatiale et causale régissant le datif.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p6_s1_w14"
    ]
  },
  "ch1_p6_s1_w15": {
    "wordId": "ch1_p6_s1_w15",
    "translationFr": "ce / cette / ces",
    "literalTranslation": "pronom démonstratif désignant l'objet proche",
    "grammaticalRole": "Pronom décliné (datif (complément d'objet indirect ou régime prépositionnel)). Démonstratif marquant la désignation concrète du spectre.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p6_s1_w15"
    ]
  },
  "ch1_p6_s1_w17": {
    "wordId": "ch1_p6_s1_w17",
    "translationFr": "se développèrent",
    "literalTranslation": "se développèrent, se déployèrent hors du repli (prétérit réfléchi pluriel)",
    "grammaticalRole": "Verbe faible au prétérit de l'indicatif, 3e personne du pluriel.",
    "difficulty": "basic",
    "wordIds": [
      "ch1_p6_s1_w17"
    ],
    "contextNote": "Verbe réfléchi « sich entwickeln » exprimant la maturation organique des forces économiques.",
    "etymology": "Composé du préfixe privatif et séparatif « ent- » (vieux haut-allemand ant-) et du verbe « wickeln » (envelopper, enrouler, vieux haut-allemand wickilīn). Littéralement « déplier ce qui était enroulé ou enveloppé ».",
    "relatedConcepts": [
      "past"
    ]
  },
  "ch1_p6_s1_w18": {
    "wordId": "ch1_p6_s1_w18",
    "translationFr": "se / soi-même",
    "literalTranslation": "pronom réfléchi de 3e personne",
    "grammaticalRole": "Pronom décliné (accusatif (complément d'objet direct)). Pronom réfléchi accompagnant un verbe pronominal.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p6_s1_w18"
    ]
  },
  "ch1_p6_s1_w19": {
    "wordId": "ch1_p6_s1_w19",
    "translationFr": "les",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au nominatif (sujet ou attribut du sujet) ( pluriel). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch1_p6_s1_w19"
    ]
  },
  "ch1_p6_s1_w20": {
    "wordId": "ch1_p6_s1_w20",
    "translationFr": "premiers",
    "literalTranslation": "fondateurs, initiaux (adjectif à l'accusatif neutre pluriel)",
    "grammaticalRole": "Adjectif qualificatif décliné (pluriel nominatif (sujet ou attribut du sujet)). Adjectif ordonnant les origines historiques de la bourgeoisie primitive.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch1_p6_s1_w20"
    ],
    "etymology": "Issu du moyen haut-allemand « êrst », vieux haut-allemand « ēristo »."
  },
  "ch1_p6_s1_w21": {
    "wordId": "ch1_p6_s1_w21",
    "translationFr": "éléments",
    "literalTranslation": "éléments germinaux constitutifs (nominatif neutre pluriel)",
    "grammaticalRole": "Nom neutre pluriel (das Element -> die Elemente) au nominatif pluriel après « die ersten ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "nom",
      "plural"
    ],
    "wordIds": [
      "ch1_p6_s1_w21"
    ],
    "contextNote": "Sujet grammatical de la proposition annonçant l'éclosion de la bourgeoisie.",
    "etymology": "Emprunt savant au latin classique « elementum » (principe premier, composante originelle indécomposable d'un tout)."
  },
  "ch1_p6_s1_w22": {
    "wordId": "ch1_p6_s1_w22",
    "translationFr": "de la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au génitif (complément du nom marquant l'appartenance) (féminin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch1_p6_s1_w22"
    ]
  },
  "ch1_p6_s1_w23": {
    "wordId": "ch1_p6_s1_w23",
    "translationFr": "bourgeoisie",
    "literalTranslation": "bourgeoisie (génitif féminin singulier)",
    "grammaticalRole": "Nom féminin singulier (die Bourgeoisie) au génitif singulier après « der ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen",
      "bourgeoisie"
    ],
    "wordIds": [
      "ch1_p6_s1_w23"
    ],
    "contextNote": "Complément déterminant « Elemente ».",
    "etymology": "Emprunt au français « bourgeoisie », du bas-latin burgensis (Burg)."
  },
  "ch1_p7_s1_w1": {
    "wordId": "ch1_p7_s1_w1",
    "translationFr": "la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au nominatif (sujet ou attribut du sujet) (féminin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch1_p7_s1_w1"
    ]
  },
  "ch1_p7_s1_w3": {
    "wordId": "ch1_p7_s1_w3",
    "translationFr": "Amérique",
    "literalTranslation": "Amérique, continent américain (génitif neutre singulier)",
    "grammaticalRole": "Nom propre géographique neutre singulier au génitif fort en -s sans article.",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch1_p7_s1_w3"
    ],
    "contextNote": "Complément du nom déterminant « Entdeckung ».",
    "etymology": "Nom forgé en 1507 par le cartographe Martin Waldseemüller sur le prénom latinisé du navigateur florentin Amerigo Vespucci (Americus Vespucius). Le prénom germanique « Amerigo / Amalric » est composé de amal (zèle laborieux) et rihhi (puissant, noble).",
    "philosophicalContext": "L'irruption de l'Amérique dans l'économie européenne marque le coup d'envoi de l'accumulation primitive du capital : pillage des métaux précieux, traite des esclaves et création du premier réseau marchand intercontinental."
  },
  "ch1_p7_s1_w5": {
    "wordId": "ch1_p7_s1_w5",
    "translationFr": "la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au nominatif (sujet ou attribut du sujet) (féminin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch1_p7_s1_w5"
    ]
  },
  "ch1_p7_s1_w7": {
    "wordId": "ch1_p7_s1_w7",
    "translationFr": "Afrique",
    "literalTranslation": "Afrique, continent africain (génitif neutre singulier)",
    "grammaticalRole": "Nom propre géographique neutre singulier au génitif fort en -s sans article.",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch1_p7_s1_w7"
    ],
    "contextNote": "Complément du nom déterminant « Umschiffung » (la circumnavigation).",
    "etymology": "Emprunt au latin « Africa », nom donné par les Romains aux terres de Carthage d'après le peuple autochtone des Afri (étymon berbère ou phénicien 'afar = poussière, terre sèche)."
  },
  "ch1_p7_s1_w8": {
    "wordId": "ch1_p7_s1_w8",
    "translationFr": "créèrent / ouvrirent",
    "literalTranslation": "façonnèrent, créèrent matériellement (prétérit fort pluriel)",
    "grammaticalRole": "Verbe fort (schaffen) au prétérit de l'indicatif, 3e personne du pluriel.",
    "difficulty": "basic",
    "wordIds": [
      "ch1_p7_s1_w8"
    ],
    "contextNote": "Verbe régissant le nouveau terrain conquis par la bourgeoisie.",
    "etymology": "Issu du moyen haut-allemand « schuofen », vieux haut-allemand « scuofun », prétérit apophonique du verbe fort « schaffen » (créer, produire, façonner, en moyen haut-allemand schaffen, vieux haut-allemand scaffan, proto-germanique *skapjaną).",
    "relatedConcepts": [
      "past"
    ]
  },
  "ch1_p7_s1_w9": {
    "wordId": "ch1_p7_s1_w9",
    "translationFr": "à la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au datif (complément d'objet indirect ou régime prépositionnel) (féminin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p7_s1_w9"
    ]
  },
  "ch1_p7_s1_w11": {
    "wordId": "ch1_p7_s1_w11",
    "translationFr": "bourgeoisie",
    "literalTranslation": "bourgeoisie montante (datif féminin singulier)",
    "grammaticalRole": "Nom féminin singulier (die Bourgeoisie) au datif singulier après « der aufkommenden ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat",
      "bourgeoisie"
    ],
    "wordIds": [
      "ch1_p7_s1_w11"
    ],
    "contextNote": "Bénéficiaire au datif de la création du nouveau terrain d'expansion.",
    "etymology": "Emprunt au français « bourgeoisie », du bas-latin burgensis (Burg)."
  },
  "ch1_p7_s1_w12": {
    "wordId": "ch1_p7_s1_w12",
    "translationFr": "un",
    "literalTranslation": "article indéfini",
    "grammaticalRole": "Article décliné au accusatif (complément d'objet direct) (neutre singulier). Article indéfini déterminant un nom singulier.",
    "difficulty": "basic",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p7_s1_w12"
    ]
  },
  "ch1_p7_s1_w13": {
    "wordId": "ch1_p7_s1_w13",
    "translationFr": "nouveau / inédit",
    "literalTranslation": "nouveau, vierge de contraintes féodales (adjectif à l'accusatif neutre singulier)",
    "grammaticalRole": "Adjectif qualificatif décliné (singulier accusatif (complément d'objet direct)). Adjectif martelé par Marx pour démontrer que la bourgeoisie n'a fait que renouveler les formes d'oppression.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p7_s1_w13"
    ],
    "etymology": "Issu du moyen haut-allemand « niuwe », vieux haut-allemand « niuwi » (proto-germanique *neujaz)."
  },
  "ch1_p7_s2_w1": {
    "wordId": "ch1_p7_s2_w1",
    "translationFr": "le",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au nominatif (sujet ou attribut du sujet) (masculin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch1_p7_s2_w1"
    ]
  },
  "ch1_p7_s2_w2": {
    "wordId": "ch1_p7_s2_w2",
    "translationFr": "est-indien / d'Inde orientale",
    "literalTranslation": "d'Inde orientale, est-indien (adjectif au nominatif masculin singulier)",
    "grammaticalRole": "Adjectif qualificatif décliné au nominatif masculin singulier en -e après l'article « Der ».",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "nom",
      "decl"
    ],
    "wordIds": [
      "ch1_p7_s2_w2"
    ],
    "contextNote": "Strictement découplé de toute préposition ou article. Qualifie « Markt ».",
    "etymology": "Composé géographique associant « Ost » (l'Est, l'Orient, du vieux haut-allemand ōstan, proto-germanique *austaz = à l'est, racine indo-européenne *h₂ews- = briller, aube) et « indisch » (relatif à l'Inde, du fleuve Indus / sanskrit Sindhu)."
  },
  "ch1_p7_s2_w3": {
    "wordId": "ch1_p7_s2_w3",
    "translationFr": "et",
    "literalTranslation": "conjonction d'addition",
    "grammaticalRole": "Conjonction de coordination ou subordination. Conjonction liant deux termes ou propositions de même rang syntaxique.",
    "difficulty": "basic",
    "wordIds": [
      "ch1_p7_s2_w3"
    ]
  },
  "ch1_p7_s2_w4": {
    "wordId": "ch1_p7_s2_w4",
    "translationFr": "chinois",
    "literalTranslation": "chinois, relatif à l'Empire du Milieu (adjectif au nominatif masculin singulier)",
    "grammaticalRole": "Adjectif qualificatif décliné (singulier nominatif (sujet ou attribut du sujet)). Adjectif géographique marquant l'ouverture impérialiste du gigantesque marché asiatique.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch1_p7_s2_w4"
    ],
    "etymology": "Dérivé avec le suffixe germanique « -isch » sur le toponyme « China » (emprunt au sanskrit Cīna, désignant la dynastie Qin / Ts'in qui unifia l'empire chinois au IIIe siècle av. J.-C.)."
  },
  "ch1_p7_s2_w5": {
    "wordId": "ch1_p7_s2_w5",
    "translationFr": "marché",
    "literalTranslation": "marché, débouché commercial colonial (nominatif masculin singulier)",
    "grammaticalRole": "Nom masculin singulier (der Markt) au nominatif singulier déterminé par « Der ostindische und chinesische ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch1_p7_s2_w5"
    ],
    "contextNote": "Premier sujet de la phrase détaillant les nouveaux débouchés mondiaux.",
    "etymology": "Emprunt ancien (dès le VIIIe siècle) au latin classique « mercatus » (commerce, trafic, lieu de foire, dérivé de « merx » = marchandise)."
  },
  "ch1_p7_s2_w7": {
    "wordId": "ch1_p7_s2_w7",
    "translationFr": "la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au nominatif (sujet ou attribut du sujet) (féminin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch1_p7_s2_w7"
    ]
  },
  "ch1_p7_s2_w8": {
    "wordId": "ch1_p7_s2_w8",
    "translationFr": "colonisation",
    "literalTranslation": "colonisation, conquête et exploitation coloniale de territoires (nominatif féminin singulier)",
    "grammaticalRole": "Nom féminin singulier (die Kolonisierung) au nominatif singulier déterminé par « die ».",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "nom",
      "latin_root"
    ],
    "wordIds": [
      "ch1_p7_s2_w8"
    ],
    "contextNote": "Sujet coordonné énumérant les piliers de l'accumulation primitive.",
    "etymology": "Déverbal en « -ung » formé sur le verbe « kolonisieren » (coloniser), emprunt au latin « colonia » (établissement de colons sur une terre conquise, de colonus = cultivateur, fermier, issu de colere = habiter, cultiver).",
    "philosophicalContext": "Dans Le Capital (Livre I, section 8), Marx montre que la colonisation n'a rien d'une œuvre civilisatrice : elle est le pillage méthodique des continents extra-européens pour convertir les matières premières et l'or en capital marchand."
  },
  "ch1_p7_s2_w9": {
    "wordId": "ch1_p7_s2_w9",
    "translationFr": "de / par",
    "literalTranslation": "provenance, cause ou complément d'agent",
    "grammaticalRole": "Préposition régissant le datif (complément d'objet indirect ou régime prépositionnel). Préposition de provenance ou d'agent au passif régissant le datif.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p7_s2_w9"
    ]
  },
  "ch1_p7_s2_w10": {
    "wordId": "ch1_p7_s2_w10",
    "translationFr": "Amérique",
    "literalTranslation": "Amérique (datif neutre singulier sans article)",
    "grammaticalRole": "Nom propre géographique invariable au datif après la préposition « von ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p7_s2_w10"
    ],
    "contextNote": "Complément de lieu après « von ».",
    "etymology": "Formé d'après le prénom du navigateur Amerigo Vespucci (Americus)."
  },
  "ch1_p7_s2_w12": {
    "wordId": "ch1_p7_s2_w12",
    "translationFr": "le",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au nominatif (sujet ou attribut du sujet) (masculin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch1_p7_s2_w12"
    ]
  },
  "ch1_p7_s2_w14": {
    "wordId": "ch1_p7_s2_w14",
    "translationFr": "avec / au moyen de",
    "literalTranslation": "en compagnie de, au moyen de",
    "grammaticalRole": "Préposition régissant le datif (complément d'objet indirect ou régime prépositionnel). Préposition d'accompagnement ou d'instrument régissant le datif.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p7_s2_w14"
    ]
  },
  "ch1_p7_s2_w15": {
    "wordId": "ch1_p7_s2_w15",
    "translationFr": "aux",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au datif (complément d'objet indirect ou régime prépositionnel) ( pluriel). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p7_s2_w15"
    ]
  },
  "ch1_p7_s2_w16": {
    "wordId": "ch1_p7_s2_w16",
    "translationFr": "colonies",
    "literalTranslation": "colonies, possessions territoriales assujetties outre-mer (datif féminin pluriel)",
    "grammaticalRole": "Nom féminin pluriel (die Kolonie -> die Kolonien) au datif pluriel après « mit den ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat",
      "plural"
    ],
    "wordIds": [
      "ch1_p7_s2_w16"
    ],
    "contextNote": "Régime de la préposition « mit den ».",
    "etymology": "Emprunt au latin « colonia » (terre attribuée à des colons, de colere)."
  },
  "ch1_p7_s2_w18": {
    "wordId": "ch1_p7_s2_w18",
    "translationFr": "la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au nominatif (sujet ou attribut du sujet) (féminin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch1_p7_s2_w18"
    ]
  },
  "ch1_p7_s2_w20": {
    "wordId": "ch1_p7_s2_w20",
    "translationFr": "des",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au génitif (complément du nom marquant l'appartenance) ( pluriel). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch1_p7_s2_w20"
    ]
  },
  "ch1_p7_s2_w22": {
    "wordId": "ch1_p7_s2_w22",
    "translationFr": "et",
    "literalTranslation": "conjonction d'addition",
    "grammaticalRole": "Conjonction de coordination ou subordination. Conjonction liant deux termes ou propositions de même rang syntaxique.",
    "difficulty": "basic",
    "wordIds": [
      "ch1_p7_s2_w22"
    ]
  },
  "ch1_p7_s2_w23": {
    "wordId": "ch1_p7_s2_w23",
    "translationFr": "des",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au génitif (complément du nom marquant l'appartenance) ( pluriel). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch1_p7_s2_w23"
    ]
  },
  "ch1_p7_s2_w25": {
    "wordId": "ch1_p7_s2_w25",
    "translationFr": "en général / d'une manière générale",
    "literalTranslation": "par-dessus tout, globalement",
    "grammaticalRole": "Adverbe invariable. Adverbe de synthèse marquant l'essor global des forces révolutionnaires marchandes.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p7_s2_w25"
    ]
  },
  "ch1_p7_s2_w26": {
    "wordId": "ch1_p7_s2_w26",
    "translationFr": "donnèrent",
    "literalTranslation": "conférèrent, insufflèrent (prétérit fort pluriel)",
    "grammaticalRole": "Verbe fort (geben) au prétérit de l'indicatif, 3e personne du pluriel.",
    "difficulty": "basic",
    "wordIds": [
      "ch1_p7_s2_w26"
    ],
    "contextNote": "Verbe régissant l'impulsion donnée aux forces productives.",
    "etymology": "Issu du moyen haut-allemand « gāben », vieux haut-allemand « gābun », prétérit apophonique du verbe fort « geben » (vieux haut-allemand geban, proto-germanique *gebaną = donner).",
    "relatedConcepts": [
      "past"
    ]
  },
  "ch1_p7_s2_w27": {
    "wordId": "ch1_p7_s2_w27",
    "translationFr": "au / au moyen du",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au datif (complément d'objet indirect ou régime prépositionnel) (masculin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p7_s2_w27"
    ]
  },
  "ch1_p7_s2_w28": {
    "wordId": "ch1_p7_s2_w28",
    "translationFr": "commerce / négoce",
    "literalTranslation": "commerce marchand, échange de marchandises (datif masculin singulier)",
    "grammaticalRole": "Nom masculin singulier (der Handel) au datif singulier après « dem ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p7_s2_w28"
    ],
    "contextNote": "Premier bénéficiaire au datif de l'impulsion mondiale.",
    "etymology": "Issu du moyen haut-allemand « handel » (transaction, affaire, manière d'agir, négoce), déverbal de handeln (agir, manipuler, faire du commerce), dérivé du substantif « die Hand » (la main, vieux haut-allemand hant, proto-germanique *handuz). Littéralement « ce qui se manie de la main »."
  },
  "ch1_p7_s2_w30": {
    "wordId": "ch1_p7_s2_w30",
    "translationFr": "à la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au datif (complément d'objet indirect ou régime prépositionnel) (féminin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p7_s2_w30"
    ]
  },
  "ch1_p7_s2_w31": {
    "wordId": "ch1_p7_s2_w31",
    "translationFr": "navigation maritime",
    "literalTranslation": "navigation maritime marchande (datif féminin singulier)",
    "grammaticalRole": "Nom composé féminin singulier (die Schiffahrt) au datif singulier après « der ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "comp_noun",
      "dat"
    ],
    "wordIds": [
      "ch1_p7_s2_w31"
    ],
    "contextNote": "Second bénéficiaire au datif.",
    "etymology": "Composé associant : 1° « das Schiff » (le bateau, le navire, du moyen haut-allemand schif, vieux haut-allemand skif, proto-germanique *skipą) ; 2° « die Fahrt » (le voyage, le trajet, déverbal en -t du verbe fahren = se déplacer, voyager, vieux haut-allemand faran)."
  },
  "ch1_p7_s2_w33": {
    "wordId": "ch1_p7_s2_w33",
    "translationFr": "à la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au datif (complément d'objet indirect ou régime prépositionnel) (féminin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p7_s2_w33"
    ]
  },
  "ch1_p7_s2_w34": {
    "wordId": "ch1_p7_s2_w34",
    "translationFr": "industrie",
    "literalTranslation": "industrie, production manufacturière et industrielle (datif féminin singulier)",
    "grammaticalRole": "Nom féminin singulier (die Industrie) au datif singulier après « der ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat",
      "latin_root"
    ],
    "wordIds": [
      "ch1_p7_s2_w34"
    ],
    "contextNote": "Troisième bénéficiaire au datif.",
    "etymology": "Emprunt au XVIIIe siècle au français « industrie », issu du latin classique « industria » (application zélée, activité laborieuse, habileté productive, formé de indu- « à l'intérieur » et struere « bâtir, ordonner »)."
  },
  "ch1_p7_s2_w35": {
    "wordId": "ch1_p7_s2_w35",
    "translationFr": "un",
    "literalTranslation": "article indéfini",
    "grammaticalRole": "Article décliné au accusatif (complément d'objet direct) (masculin singulier). Article indéfini déterminant un nom singulier.",
    "difficulty": "basic",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p7_s2_w35"
    ]
  },
  "ch1_p7_s2_w36": {
    "wordId": "ch1_p7_s2_w36",
    "translationFr": "jamais",
    "literalTranslation": "en aucun temps passé ou futur",
    "grammaticalRole": "Adverbe invariable. Adverbe absolu soulignant le caractère sans précédent de l'essor commercial moderne.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p7_s2_w36"
    ]
  },
  "ch1_p7_s2_w37": {
    "wordId": "ch1_p7_s2_w37",
    "translationFr": "connu / éprouvé",
    "literalTranslation": "dont on avait l'expérience jusqu'alors (participe passé au datif masculin singulier)",
    "grammaticalRole": "Adjectif qualificatif décliné (singulier accusatif (complément d'objet direct)). Adjectif soulignant l'inédit sans précédent de l'essor industriel moderne.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p7_s2_w37"
    ],
    "etymology": "Participe passé du verbe « kennen » (connaître, savoir d'expérience, vieux haut-allemand kennan, causatif du proto-germanique *kunnaną = savoir)."
  },
  "ch1_p7_s2_w39": {
    "wordId": "ch1_p7_s2_w39",
    "translationFr": "et",
    "literalTranslation": "conjonction d'addition",
    "grammaticalRole": "Conjonction de coordination ou subordination. Conjonction liant deux termes ou propositions de même rang syntaxique.",
    "difficulty": "basic",
    "wordIds": [
      "ch1_p7_s2_w39"
    ]
  },
  "ch1_p7_s2_w40": {
    "wordId": "ch1_p7_s2_w40",
    "translationFr": "par là même / ainsi",
    "literalTranslation": "avec cela, en conséquence",
    "grammaticalRole": "Adverbe invariable. Adverbe pronominal marquant la corrélation immédiate entre expansion marchande et essor bourgeois.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p7_s2_w40"
    ]
  },
  "ch1_p7_s2_w41": {
    "wordId": "ch1_p7_s2_w41",
    "translationFr": "au",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au datif (complément d'objet indirect ou régime prépositionnel) (neutre singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p7_s2_w41"
    ]
  },
  "ch1_p7_s2_w42": {
    "wordId": "ch1_p7_s2_w42",
    "translationFr": "révolutionnaire",
    "literalTranslation": "révolutionnaire, porteur de transformation radicale (adjectif au datif neutre singulier)",
    "grammaticalRole": "Adjectif qualificatif décliné (singulier datif (complément d'objet indirect ou régime prépositionnel)). Adjectif qualifiant la transformation radicale produite par la lutte des classes.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p7_s2_w42"
    ],
    "etymology": "Emprunt au français « révolutionnaire », du bas-latin revolutio (retournement complet, du verbe revolvere)."
  },
  "ch1_p7_s2_w43": {
    "wordId": "ch1_p7_s2_w43",
    "translationFr": "élément",
    "literalTranslation": "élément révolutionnaire subversif, facteur de bouleversement (datif neutre singulier)",
    "grammaticalRole": "Nom neutre singulier (das Element) au datif singulier après « dem revolutionären ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p7_s2_w43"
    ],
    "contextNote": "Désigne la bourgeoisie montante comme ferment de décomposition du monde féodal.",
    "etymology": "Emprunt savant au latin « elementum » (principe constituant premier)."
  },
  "ch1_p7_s2_w44": {
    "wordId": "ch1_p7_s2_w44",
    "translationFr": "en / dans",
    "literalTranslation": "à l'intérieur de",
    "grammaticalRole": "Préposition régissant le datif (complément d'objet indirect ou régime prépositionnel). Préposition spatiale régissant ici le datif (situation sans déplacement).",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p7_s2_w44"
    ]
  },
  "ch1_p7_s2_w45": {
    "wordId": "ch1_p7_s2_w45",
    "translationFr": "à la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au datif (complément d'objet indirect ou régime prépositionnel) (féminin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p7_s2_w45"
    ]
  },
  "ch1_p7_s2_w47": {
    "wordId": "ch1_p7_s2_w47",
    "translationFr": "féodale",
    "literalTranslation": "féodale, fondée sur le fief (adjectif au datif féminin singulier)",
    "grammaticalRole": "Adjectif qualificatif décliné (singulier datif (complément d'objet indirect ou régime prépositionnel)). Adjectif désignant l'ordre hiérarchique seigneurial terrien antérieur au capital.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p7_s2_w47"
    ],
    "etymology": "Emprunt au latin médiéval feudalis (fief)."
  },
  "ch1_p7_s2_w48": {
    "wordId": "ch1_p7_s2_w48",
    "translationFr": "société",
    "literalTranslation": "société féodale en décomposition (datif féminin singulier)",
    "grammaticalRole": "Nom féminin singulier (die Gesellschaft) au datif singulier après « in der zerfallenden feudalen ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat",
      "feudalism"
    ],
    "wordIds": [
      "ch1_p7_s2_w48"
    ],
    "contextNote": "Complément de lieu et de circonstance.",
    "etymology": "Issu du moyen haut-allemand « geselleschaft », formé sur Geselle (compagnon)."
  },
  "ch1_p7_s2_w49": {
    "wordId": "ch1_p7_s2_w49",
    "translationFr": "une",
    "literalTranslation": "article indéfini",
    "grammaticalRole": "Article décliné au accusatif (complément d'objet direct) (féminin singulier). Article indéfini déterminant un nom singulier.",
    "difficulty": "basic",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p7_s2_w49"
    ]
  },
  "ch1_p7_s2_w50": {
    "wordId": "ch1_p7_s2_w50",
    "translationFr": "rapide / accéléré",
    "literalTranslation": "prompt, accéléré avec vivacité (adjectif à l'accusatif féminin singulier)",
    "grammaticalRole": "Adjectif qualificatif décliné (singulier accusatif (complément d'objet direct)). Adjectif soulignant la fulgurance du développement de l'industrie capitaliste.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p7_s2_w50"
    ],
    "etymology": "Issu du moyen haut-allemand « rasch », vieux haut-allemand « rasc » (vif, agile, rapide, hardi), du proto-germanique *raskaz."
  },
  "ch1_p8_s1_w1": {
    "wordId": "ch1_p8_s1_w1",
    "translationFr": "la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au nominatif (sujet ou attribut du sujet) (féminin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch1_p8_s1_w1"
    ]
  },
  "ch1_p8_s1_w2": {
    "wordId": "ch1_p8_s1_w2",
    "translationFr": "en vigueur jusqu'alors / traditionnelle",
    "literalTranslation": "qui s'est maintenue jusqu'à présent (adjectif au nominatif féminin singulier)",
    "grammaticalRole": "Adjectif qualificatif décliné au nominatif féminin singulier en -e après « Die ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "nom",
      "decl"
    ],
    "wordIds": [
      "ch1_p8_s1_w2"
    ],
    "contextNote": "Qualifie « Betriebsweise » (mode d'exploitation / mode de production).",
    "etymology": "Dérivé au moyen du suffixe d'appartenance « -ig » sur l'adverbe temporel « bisher » (jusqu'à maintenant, jusqu'ici, composé de la préposition bis et de l'adverbe her)."
  },
  "ch1_p8_s1_w3": {
    "wordId": "ch1_p8_s1_w3",
    "translationFr": "féodal",
    "literalTranslation": "féodal, sous le régime du fief et des privilèges de naissance (adjectif au nominatif féminin singulier)",
    "grammaticalRole": "Adjectif qualificatif décliné (singulier nominatif (sujet ou attribut du sujet)). Adjectif désignant l'ordre hiérarchique seigneurial terrien antérieur au capital.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch1_p8_s1_w3"
    ],
    "etymology": "Emprunt au latin médiéval feudalis (fief, feudum)."
  },
  "ch1_p8_s1_w4": {
    "wordId": "ch1_p8_s1_w4",
    "translationFr": "ou / ou bien",
    "literalTranslation": "conjonction d'alternative",
    "grammaticalRole": "Conjonction de coordination ou subordination. Conjonction disjonctive liant deux issues alternatives.",
    "difficulty": "basic",
    "wordIds": [
      "ch1_p8_s1_w4"
    ]
  },
  "ch1_p8_s1_w7": {
    "wordId": "ch1_p8_s1_w7",
    "translationFr": "de la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au génitif (complément du nom marquant l'appartenance) (féminin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch1_p8_s1_w7"
    ]
  },
  "ch1_p8_s1_w8": {
    "wordId": "ch1_p8_s1_w8",
    "translationFr": "industrie",
    "literalTranslation": "industrie corporative artisanale (génitif féminin singulier)",
    "grammaticalRole": "Nom féminin singulier (die Industrie) au génitif singulier après « der ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch1_p8_s1_w8"
    ],
    "contextNote": "Complément déterminant « Betriebsweise ».",
    "etymology": "Emprunt au latin « industria » (application laborieuse)."
  },
  "ch1_p8_s1_w10": {
    "wordId": "ch1_p8_s1_w10",
    "translationFr": "ne pas / non",
    "literalTranslation": "particule de négation",
    "grammaticalRole": "Particule verbale ou négative. Particule négative infirmant une proposition.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p8_s1_w10"
    ]
  },
  "ch1_p8_s1_w11": {
    "wordId": "ch1_p8_s1_w11",
    "translationFr": "plus / davantage",
    "literalTranslation": "en quantité supérieure",
    "grammaticalRole": "Adverbe invariable. Adverbe renforçant l'accélération de la division sociale (« immer mehr » = de plus en plus).",
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p8_s1_w11"
    ]
  },
  "ch1_p8_s1_w12": {
    "wordId": "ch1_p8_s1_w12",
    "translationFr": "de / hors de / depuis",
    "literalTranslation": "qui émane de",
    "grammaticalRole": "Particule verbale ou négative. Préposition spatiale et causale régissant le datif.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p8_s1_w12"
    ]
  },
  "ch1_p8_s1_w13": {
    "wordId": "ch1_p8_s1_w13",
    "translationFr": "pour",
    "literalTranslation": "à destination de, en faveur de",
    "grammaticalRole": "Préposition régissant le accusatif (complément d'objet direct). Préposition de but ou de destination régissant l'accusatif.",
    "difficulty": "basic",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p8_s1_w13"
    ]
  },
  "ch1_p8_s1_w14": {
    "wordId": "ch1_p8_s1_w14",
    "translationFr": "le",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au accusatif (complément d'objet direct) (masculin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p8_s1_w14"
    ]
  },
  "ch1_p8_s1_w15": {
    "wordId": "ch1_p8_s1_w15",
    "translationFr": "avec / au moyen de",
    "literalTranslation": "en compagnie de, au moyen de",
    "grammaticalRole": "Préposition régissant le datif (complément d'objet indirect ou régime prépositionnel). Préposition d'accompagnement ou d'instrument régissant le datif.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p8_s1_w15"
    ]
  },
  "ch1_p8_s1_w16": {
    "wordId": "ch1_p8_s1_w16",
    "translationFr": "aux",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au datif (complément d'objet indirect ou régime prépositionnel) ( pluriel). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p8_s1_w16"
    ]
  },
  "ch1_p8_s1_w17": {
    "wordId": "ch1_p8_s1_w17",
    "translationFr": "nouveaux",
    "literalTranslation": "nouveaux (adjectif au datif masculin pluriel)",
    "grammaticalRole": "Adjectif qualificatif décliné (pluriel datif (complément d'objet indirect ou régime prépositionnel)). Adjectif martelé par Marx pour démontrer que la bourgeoisie n'a fait que renouveler les formes d'oppression.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p8_s1_w17"
    ],
    "etymology": "Issu du moyen haut-allemand « niuwe », vieux haut-allemand « niuwi »."
  },
  "ch1_p8_s1_w18": {
    "wordId": "ch1_p8_s1_w18",
    "translationFr": "marchés",
    "literalTranslation": "nouveaux débouchés marchands mondiaux (datif masculin pluriel)",
    "grammaticalRole": "Nom masculin pluriel (der Markt -> die Märkte) au datif pluriel avec désinence -n après « mit den neuen ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat",
      "plural"
    ],
    "wordIds": [
      "ch1_p8_s1_w18"
    ],
    "contextNote": "Régime de la préposition « mit den neuen ».",
    "etymology": "Emprunt au latin « mercatus » (marché, foire, de merx = marchandise)."
  },
  "ch1_p8_s2_w1": {
    "wordId": "ch1_p8_s2_w1",
    "translationFr": "la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au nominatif (sujet ou attribut du sujet) (féminin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch1_p8_s2_w1"
    ]
  },
  "ch1_p8_s2_w4": {
    "wordId": "ch1_p8_s2_w4",
    "translationFr": "à / sur",
    "literalTranslation": "en contact avec",
    "grammaticalRole": "Préposition régissant le accusatif (complément d'objet direct). Préposition spatiale ou d'attribution.",
    "difficulty": "basic",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p8_s2_w4"
    ]
  },
  "ch1_p8_s2_w5": {
    "wordId": "ch1_p8_s2_w5",
    "translationFr": "leur / son / sa / ses",
    "literalTranslation": "possessif de 3e personne",
    "grammaticalRole": "Pronom décliné (accusatif (complément d'objet direct)). Déterminant possessif rattachant un bien à son détenteur.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p8_s2_w5"
    ]
  },
  "ch1_p8_s2_w6": {
    "wordId": "ch1_p8_s2_w6",
    "translationFr": "place",
    "literalTranslation": "place de substitution (accusatif féminin singulier)",
    "grammaticalRole": "Nom féminin singulier (die Stelle) à l'accusatif singulier après « an ihre ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p8_s2_w6"
    ],
    "contextNote": "Régime de « an ihre ».",
    "etymology": "Issu du moyen haut-allemand « stelle », vieux haut-allemand « stella » (emplacement fixe, poste)."
  },
  "ch1_p8_s3_w1": {
    "wordId": "ch1_p8_s3_w1",
    "translationFr": "les",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au nominatif (sujet ou attribut du sujet) ( pluriel). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch1_p8_s3_w1"
    ]
  },
  "ch1_p8_s3_w3": {
    "wordId": "ch1_p8_s3_w3",
    "translationFr": "furent",
    "literalTranslation": "devinrent, furent (auxiliaire du passif au prétérit pluriel)",
    "grammaticalRole": "Verbe fort (werden) au prétérit de l'indicatif, 3e personne du pluriel, auxiliaire du passif.",
    "difficulty": "basic",
    "wordIds": [
      "ch1_p8_s3_w3"
    ],
    "contextNote": "Auxiliaire du passif d'action (« wurden verdrängt »).",
    "etymology": "Issu du moyen haut-allemand « wurden », vieux haut-allemand « wurtun », prétérit pluriel du verbe fort « werden » (devenir, en vieux haut-allemand werdan, proto-germanique *werthaną, racine indo-européenne *wert- = tourner, advenir, cf. latin vertere).",
    "relatedConcepts": [
      "past",
      "passive"
    ]
  },
  "ch1_p8_s3_w5": {
    "wordId": "ch1_p8_s3_w5",
    "translationFr": "par / à travers",
    "literalTranslation": "au moyen de",
    "grammaticalRole": "Préposition régissant le accusatif (complément d'objet direct). Préposition d'instrument régissant l'accusatif.",
    "difficulty": "basic",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p8_s3_w5"
    ]
  },
  "ch1_p8_s3_w6": {
    "wordId": "ch1_p8_s3_w6",
    "translationFr": "le",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au accusatif (complément d'objet direct) (masculin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "acc"
    ],
    "wordIds": [
      "ch1_p8_s3_w6"
    ]
  },
  "ch1_p8_s3_w7": {
    "wordId": "ch1_p8_s3_w7",
    "translationFr": "industrielle",
    "literalTranslation": "industriel, manufacturier, relatif à l'activité productive organisée (adjectif à l'accusatif masculin singulier)",
    "grammaticalRole": "Adjectif qualificatif décliné à l'accusatif masculin singulier en -en après l'article « den ».",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "acc",
      "decl"
    ],
    "wordIds": [
      "ch1_p8_s3_w7"
    ],
    "contextNote": "Qualifie « Mittelstand ». Strictement découplé du substantif.",
    "etymology": "Emprunt savant au latin classique « industria » (zèle laborieux, activité ordonnée, habileté technique) au moyen du suffixe adjectival « -ell » (emprunté au français -el / latin -alis). Utilisé au début du XIXe siècle pour qualifier les nouvelles méthodes de production manufacturière et mécanisée."
  },
  "ch1_p8_s3_w10": {
    "wordId": "ch1_p8_s3_w10",
    "translationFr": "la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au nominatif (sujet ou attribut du sujet) (féminin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "nom"
    ],
    "wordIds": [
      "ch1_p8_s3_w10"
    ]
  },
  "ch1_p8_s3_w12": {
    "wordId": "ch1_p8_s3_w12",
    "translationFr": "de la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au génitif (complément du nom marquant l'appartenance) (féminin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch1_p8_s3_w12"
    ]
  },
  "ch1_p8_s3_w13": {
    "wordId": "ch1_p8_s3_w13",
    "translationFr": "travail",
    "literalTranslation": "travail humain productif (génitif féminin singulier)",
    "grammaticalRole": "Nom féminin singulier (die Arbeit) au génitif singulier après « der ».",
    "difficulty": "advanced",
    "relatedConcepts": [
      "gen",
      "hist_mat"
    ],
    "wordIds": [
      "ch1_p8_s3_w13"
    ],
    "contextNote": "Complément déterminant « Teilung » dans le syntagme canonique de la division du travail.",
    "etymology": "Issu du moyen haut-allemand « arbeit », vieux haut-allemand « arabeit » (peine pénible, labeur écrasant, détresse servile), du proto-germanique *arbēdiz (labeur imposé à l'orphelin ou au serf, apparenté à la racine slave *orbota / rabota = corvée, travail forcé, d'où provient le mot moderne « robot »).",
    "philosophicalContext": "Concept pivot de l'économie politique classique (Adam Smith) et de la critique marxienne : la division du travail (« Teilung der Arbeit ») commence entre métiers distincts avant d'être introduite au sein même de l'atelier, où elle mutile l'ouvrier en en faisant un travailleur parcellaire."
  },
  "ch1_p8_s3_w14": {
    "wordId": "ch1_p8_s3_w14",
    "translationFr": "entre",
    "literalTranslation": "dans l'espace intermédiaire séparant deux termes",
    "grammaticalRole": "Préposition régissant le datif (complément d'objet indirect ou régime prépositionnel). Préposition spatiale désignant l'espace interstitiel entre deux ordres.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p8_s3_w14"
    ]
  },
  "ch1_p8_s3_w15": {
    "wordId": "ch1_p8_s3_w15",
    "translationFr": "aux",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au datif (complément d'objet indirect ou régime prépositionnel) ( pluriel). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p8_s3_w15"
    ]
  },
  "ch1_p8_s3_w16": {
    "wordId": "ch1_p8_s3_w16",
    "translationFr": "diverses / différentes",
    "literalTranslation": "différenciées, séparées corporativement (adjectif au datif féminin pluriel)",
    "grammaticalRole": "Adjectif qualificatif décliné (pluriel datif (complément d'objet indirect ou régime prépositionnel)). Adjectif marquant la pluralité des nationalités et des échelons féodaux.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p8_s3_w16"
    ],
    "etymology": "Participe passé du verbe « verscheiden » (séparer, scinder, de ver- et scheiden)."
  },
  "ch1_p8_s3_w19": {
    "wordId": "ch1_p8_s3_w19",
    "translationFr": "devant / à la face de",
    "literalTranslation": "en présence de",
    "grammaticalRole": "Préposition régissant le datif (complément d'objet indirect ou régime prépositionnel). Préposition marquant la publicité de la proclamation devant le monde entier.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p8_s3_w19"
    ]
  },
  "ch1_p8_s3_w20": {
    "wordId": "ch1_p8_s3_w20",
    "translationFr": "à la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au datif (complément d'objet indirect ou régime prépositionnel) (féminin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p8_s3_w20"
    ]
  },
  "ch1_p8_s3_w21": {
    "wordId": "ch1_p8_s3_w21",
    "translationFr": "division / partition",
    "literalTranslation": "division technique, parcellisation organisée (datif féminin singulier)",
    "grammaticalRole": "Nom féminin singulier (die Teilung) au datif singulier après « vor der ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p8_s3_w21"
    ],
    "contextNote": "Régime de « vor der » marquant la disparition des métiers corporatifs sous l'avancée de la division manufacturière.",
    "etymology": "Déverbal en « -ung » formé sur le verbe « teilen » (partager, scinder en parts, en moyen haut-allemand teilen, vieux haut-allemand teilen, dérivé de Teil = la part, le fragment)."
  },
  "ch1_p8_s3_w22": {
    "wordId": "ch1_p8_s3_w22",
    "translationFr": "de la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au génitif (complément du nom marquant l'appartenance) (féminin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch1_p8_s3_w22"
    ]
  },
  "ch1_p8_s3_w23": {
    "wordId": "ch1_p8_s3_w23",
    "translationFr": "travail",
    "literalTranslation": "travail (génitif féminin singulier)",
    "grammaticalRole": "Nom féminin singulier (die Arbeit) au génitif singulier après « der ».",
    "difficulty": "basic",
    "relatedConcepts": [
      "gen"
    ],
    "wordIds": [
      "ch1_p8_s3_w23"
    ],
    "contextNote": "Complément déterminant la division au sein de l'atelier individuel.",
    "etymology": "Issu du moyen haut-allemand « arbeit », vieux haut-allemand « arabeit » (peine servile, proto-germanique *arbēdiz)."
  },
  "ch1_p8_s3_w24": {
    "wordId": "ch1_p8_s3_w24",
    "translationFr": "en / dans",
    "literalTranslation": "à l'intérieur de",
    "grammaticalRole": "Préposition régissant le datif (complément d'objet indirect ou régime prépositionnel). Préposition spatiale régissant ici le datif (situation sans déplacement).",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p8_s3_w24"
    ]
  },
  "ch1_p8_s3_w25": {
    "wordId": "ch1_p8_s3_w25",
    "translationFr": "à la",
    "literalTranslation": "article défini ou pronom relatif",
    "grammaticalRole": "Article décliné au datif (complément d'objet indirect ou régime prépositionnel) (féminin singulier). Article défini décliné déterminant le nom en cas, genre et nombre.",
    "difficulty": "basic",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p8_s3_w25"
    ]
  },
  "ch1_p8_s3_w26": {
    "wordId": "ch1_p8_s3_w26",
    "translationFr": "individuel / séparé",
    "literalTranslation": "isolé, individuel, particulier (adjectif au datif féminin singulier)",
    "grammaticalRole": "Adjectif qualificatif décliné (singulier datif (complément d'objet indirect ou régime prépositionnel)). Adjectif marquant le morcellement des ouvriers au sein de la manufacture.",
    "difficulty": "intermediate",
    "relatedConcepts": [
      "dat"
    ],
    "wordIds": [
      "ch1_p8_s3_w26"
    ],
    "etymology": "Dérivé au moyen du suffixe « -eln » sur l'adjectif « ein » (un, unique, moyen haut-allemand einzel, vieux haut-allemand einzig / einlīh)."
  },
  "ch1_p8_s3_w28": {
    "wordId": "ch1_p8_s3_w28",
    "translationFr": "lui-même / soi-même",
    "literalTranslation": "en personne, sans intermédiaire",
    "grammaticalRole": "Pronom décliné (). Pronom d'insistance soulignant l'initiative directe du Parti communiste.",
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p8_s3_w28"
    ]
  },
  "ch1_p9_s1_w1": {
    "wordId": "ch1_p9_s1_w1",
    "translationFr": "Mais",
    "literalTranslation": "mais, cependant (conjonction adversative)",
    "grammaticalRole": "Conjonction de coordination adversative en position 0, introduisant la proposition sans affecter la position V2 du verbe.",
    "etymology": "Issu du moyen haut-allemand « aber / aver » (de nouveau, en arrière, au contraire), vieux haut-allemand « avur / abur » (de nouveau, encore, au rebours). Proto-germanique *aferō (derrière, plus tard), comparatif issu de la racine indo-européenne *apo- / *ap- (au loin, en arrière, cognat du grec ἀπό / apo et du sanskrit apa).",
    "relatedConcepts": [
      "conj"
    ],
    "difficulty": "basic",
    "wordIds": [
      "ch1_p9_s1_w1"
    ]
  },
  "ch1_p9_s1_w2": {
    "wordId": "ch1_p9_s1_w2",
    "translationFr": "sans cesse / constamment",
    "literalTranslation": "toujours, constamment, sans arrêt (adverbe temporel)",
    "grammaticalRole": "Adverbe de temps et d'insistance placé en première position (position 1), provoquant l'inversion du verbe (V2) et du sujet.",
    "etymology": "Issu du moyen haut-allemand « iemer / immer », vieux haut-allemand « io mēr » (littéralement : toujours plus), composé de la particule temporelle germanique « io / eo » (toujours, à jamais, de la racine indo-européenne *h₂eyw- / temps, durée vitale, cognat du latin aevum et de l'allemand ewig) et de l'adverbe comparatif « mēr » (plus, allemand moderne mehr). Cognat du néerlandais « immer ».",
    "syntaxNote": "Règle fondamentale V2 : l'adverbe « immer » occupant l'initiale, le verbe conjugué « wuchsen » vient immédiatement en position 2, suivi de son sujet.",
    "relatedConcepts": [
      "v2"
    ],
    "difficulty": "basic",
    "wordIds": [
      "ch1_p9_s1_w2"
    ]
  },
  "ch1_p9_s1_w3": {
    "wordId": "ch1_p9_s1_w3",
    "translationFr": "s'agrandissaient / croissaient",
    "literalTranslation": "croissaient, augmentaient de taille (verbe fort wachsen au prétérit pluriel)",
    "grammaticalRole": "Verbe fort (wachsen, wuchs, gewachsen) à la 3e personne du pluriel du prétérit de l'indicatif. En position 2 (V2) après « immer ».",
    "etymology": "Issu du moyen haut-allemand « wahsen » (prétérit wuchs, participe gewahsen), vieux haut-allemand « wahsan ». Proto-germanique *wahsanan (croître, grandir), issu de la racine indo-européenne *h₂weg- / *h₂woks- (augmenter, croître, cognat du grec αὐξάνω / auxanō, du latin augere / auctus, et du vieil anglais weaxan / anglais moderne wax dans 'wax and wane').",
    "philosophicalContext": "L'extension ininterrompue des débouchés commerciaux constitue la contradiction matérielle motrice qui rend obsolètes les cadres artisanaux et corporatifs féodaux.",
    "relatedConcepts": [
      "v2",
      "prod_rel"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p9_s1_w3"
    ]
  },
  "ch1_p9_s1_w5": {
    "wordId": "ch1_p9_s1_w5",
    "translationFr": "marchés",
    "literalTranslation": "marchés, débouchés commerciaux (nominatif masculin pluriel)",
    "grammaticalRole": "Nom masculin pluriel (der Markt -> die Märkte) au nominatif pluriel déterminé par « Die ».",
    "etymology": "Emprunt au latin classique « mercatus » (marché, négoce, foire).",
    "philosophicalContext": "Pour Marx, le marché sous le capitalisme n'est pas un simple lieu de troc local, mais un champ de valorisation autonome dont la croissance insatiable dicte la révolution des forces productives.",
    "cognatesFr": [
      "marché",
      "marchand",
      "commerce"
    ],
    "relatedConcepts": [
      "nom",
      "plural"
    ],
    "difficulty": "basic",
    "wordIds": [
      "ch1_p9_s1_w5"
    ],
    "contextNote": "Sujet de l'expansion permanente. Strictement découplé de l'article « Die »."
  },
  "ch1_p9_s1_w8": {
    "wordId": "ch1_p9_s1_w8",
    "translationFr": "montait / augmentait",
    "literalTranslation": "s'élevait, montait d'un degré (verbe fort steigen au prétérit singulier)",
    "grammaticalRole": "Verbe fort (steigen, stieg, gestiegen) à la 3e personne du singulier du prétérit de l'indicatif. En position 2 (V2) après « immer ».",
    "etymology": "Issu du moyen haut-allemand « stīgen » (prétérit stiec / stieg, participe gestigen), vieux haut-allemand « stīgan ». Proto-germanique *stīganan (monter, grimper), issu de la racine indo-européenne *steygʰ- (marcher, gravir, s'élever, cognat du grec στείχω / steichō = s'avancer au pas, s'aligner, et du vieil irlandais tiagaim / je marche).",
    "syntaxNote": "Structure binaire en chiasme rythmique : « immer wuchsen die Märkte, immer stieg der Bedarf » répète l'adverbe initial et le verbe prétérit en V2.",
    "relatedConcepts": [
      "v2"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p9_s1_w8"
    ]
  },
  "ch1_p9_s1_w10": {
    "wordId": "ch1_p9_s1_w10",
    "translationFr": "besoin / demande",
    "literalTranslation": "besoin solvable, demande économique marchande (nominatif masculin singulier)",
    "grammaticalRole": "Nom masculin singulier (der Bedarf) au nominatif singulier après « der ».",
    "etymology": "Déverbal abstrait formé sur le verbe fort « bedürfen » (avoir besoin de, requérir matériellement, composé de be- et durfen = avoir la permission ou le besoin, en moyen haut-allemand bedürfen, vieux haut-allemand bidurfan, proto-germanique *thurftiz = besoin vital).",
    "philosophicalContext": "Le « Bedarf » capitaliste n'est pas la simple subsistance biologique naturelle, mais une demande solvable quantitativement créée par l'extension du commerce mondial.",
    "relatedConcepts": [
      "nom"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p9_s1_w10"
    ],
    "contextNote": "Sujet de l'accroissement de la consommation. Strictement découplé de l'article « der »."
  },
  "ch1_p9_s2_w1": {
    "wordId": "ch1_p9_s2_w1",
    "translationFr": "Même / elle-même",
    "literalTranslation": "aussi, même (particule de focalisation renforçant le sujet)",
    "grammaticalRole": "Particule de focalisation / adverbe d'intensité précédant le groupe nominal sujet « die Manufaktur » pour en souligner l'insuffisance historique.",
    "etymology": "Issu du moyen haut-allemand « ouch », vieux haut-allemand « ouh » (aussi, de plus). Proto-germanique *auk (aussi, en outre), lié au verbe fort germanique *aukanan (croître, augmenter, vieux haut-allemand ouhhōn, cognat du latin augere / accroître et de l'anglais eke).",
    "relatedConcepts": [
      "part"
    ],
    "difficulty": "basic",
    "wordIds": [
      "ch1_p9_s2_w1"
    ]
  },
  "ch1_p9_s2_w3": {
    "wordId": "ch1_p9_s2_w3",
    "translationFr": "manufacture",
    "literalTranslation": "manufacture (nominatif féminin singulier)",
    "grammaticalRole": "Nom féminin singulier (die Manufaktur) au nominatif singulier sujet de « reichte ... aus ».",
    "etymology": "Emprunt savant au latin « manufactura » (façon manuelle, de manus + factura).",
    "philosophicalContext": "La contradiction dialectique entre forces productives et rapports de production : la manufacture manuelle devient un frein à l'expansion du marché qu'elle a elle-même suscité, exigeant le saut qualitatif vers le machinisme à vapeur.",
    "cognatesFr": [
      "manufacture",
      "manufacturier"
    ],
    "relatedConcepts": [
      "nom",
      "hist_mat"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p9_s2_w3"
    ],
    "contextNote": "Lafargue traduit « la manufacture ». Le mot isolé est le substantif féminin sans article."
  },
  "ch1_p9_s2_w4": {
    "wordId": "ch1_p9_s2_w4",
    "translationFr": "suffisait",
    "literalTranslation": "atteignait le niveau requis",
    "grammaticalRole": "Verbe à particule séparable au prétérit singulier (verbe ausreichen).",
    "wordIds": [
      "ch1_p9_s2_w4"
    ],
    "etymology": "Verbe composé séparable combinant la particule d'achèvement « aus » et le verbe germanique « reichen » (atteindre, suffire, vieux haut-allemand reihhan).",
    "syntaxNote": "Parenthèse verbale allemande (Satzklammer) : le verbe recteur conjugué « reichte » est séparé de son préverbe « aus » par la négation « nicht mehr ».",
    "relatedConcepts": [
      "sep_verb",
      "v2"
    ],
    "difficulty": "intermediate"
  },
  "ch1_p9_s3_w1": {
    "wordId": "ch1_p9_s3_w1",
    "translationFr": "C'est alors que / alors",
    "literalTranslation": "alors, en ce moment historique décisif (adverbe temporel de rupture)",
    "grammaticalRole": "Adverbe temporel en position 1 marquant le surgissement de la rupture technologique et provoquant l'inversion du sujet.",
    "etymology": "Issu du moyen haut-allemand « dō / dā », vieux haut-allemand « dō » (alors, lorsque) et « dār » (là). Proto-germanique *þō / *þar, déictique temporel et spatial issu de la racine pronominale indo-européenne *to-.",
    "relatedConcepts": [
      "v2"
    ],
    "difficulty": "basic",
    "wordIds": [
      "ch1_p9_s3_w1"
    ]
  },
  "ch1_p9_s3_w2": {
    "wordId": "ch1_p9_s3_w2",
    "translationFr": "révolutionna / bouleversa",
    "literalTranslation": "révolutionna de fond en comble (verbe faible au prétérit singulier)",
    "grammaticalRole": "Verbe faible (revolutionieren) à la 3e personne du singulier du prétérit de l'indicatif. En position 2 (V2). Accordé au singulier avec le premier sujet singulier (« der Dampf »).",
    "etymology": "Dérivé verbal en « -ieren » forgé au XVIIIe siècle sur le substantif français « révolution », lui-même emprunté au bas-latin « revolutio » (retour au point de départ, révolution d'un astre), dérivé du supin « revolutum » de « revolvere » (rouler en arrière, dérouler à nouveau, de re- et volvere / rouler).",
    "philosophicalContext": "Marx applique le concept politique de « révolution » aux forces productives matérielles : la machine à vapeur et l'outillage automatique bouleversent la base technique avant que la société civile ne soit réorganisée.",
    "cognatesFr": [
      "révolutionner",
      "révolution"
    ],
    "relatedConcepts": [
      "v2",
      "revolution",
      "ind_rev"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p9_s3_w2"
    ]
  },
  "ch1_p9_s3_w4": {
    "wordId": "ch1_p9_s3_w4",
    "translationFr": "vapeur",
    "literalTranslation": "vapeur d'eau sous pression, force motrice thermodynamique (nominatif masculin singulier)",
    "grammaticalRole": "Nom masculin singulier (der Dampf) au nominatif singulier sans article, premier sujet coordonné régissant « revolutionierten ».",
    "etymology": "Issu du moyen haut-allemand « tampf » (vapeur, fumée chaude étouffante), vieux haut-allemand « damph » (XIe siècle). Du proto-germanique *dampaz (vapeur, exhalaison), rattaché à la racine indo-européenne *dʰembʰ- (fumer, souffler). Cognat de l'anglais damp.",
    "philosophicalContext": "La machine à vapeur (perfectionnée par James Watt) affranchit la production des limites naturelles locales (cours d'eau, vent, force musculaire) et permet la concentration spatiale gigantesque des usines dans les métropoles industrielles.",
    "relatedConcepts": [
      "nom",
      "hist_mat"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p9_s3_w4"
    ],
    "contextNote": "Premier sujet coordonné du bouleversement industriel. Strictement découplé de l'article absent dans le texte allemand (« Dampf und Maschinerie revolutionierten »)."
  },
  "ch1_p9_s3_w7": {
    "wordId": "ch1_p9_s3_w7",
    "translationFr": "machinerie / machinisme",
    "literalTranslation": "machinerie, système articulé d'engins mécaniques automatiques (nominatif féminin singulier)",
    "grammaticalRole": "Nom féminin singulier (die Maschinerie) au nominatif singulier sans article, second sujet coordonné de « revolutionierten ».",
    "etymology": "Emprunt au XVIIIe siècle au français « machinerie » (dérivé en -erie de « machine »), issu du latin « machina », lui-même emprunté au grec dorien « mākhanā » (attique « mēkhanē », dispositif ingénieux, artifice, engin, de la racine indo-européenne *magʰ- = pouvoir, être capable).",
    "philosophicalContext": "Théorie décisive du Livre I du Capital (chap. 15) : la « Maschinerie » ne désigne pas un simple outil manié par l'ouvrier, mais un gigantesque automate mécanique auquel le travailleur vivant est asservi comme simple appendice interchangeable.",
    "cognatesFr": [
      "machinerie",
      "machine",
      "mécanisme"
    ],
    "relatedConcepts": [
      "nom",
      "hist_mat"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p9_s3_w7"
    ],
    "contextNote": "Second sujet coordonné. Strictement découplé de tout article."
  },
  "ch1_p9_s3_w10": {
    "wordId": "ch1_p9_s3_w10",
    "translationFr": "production",
    "literalTranslation": "fabrication / mise en œuvre de produits",
    "grammaticalRole": "Nom féminin singulier à l'accusatif singulier.",
    "wordIds": [
      "ch1_p9_s3_w10"
    ],
    "etymology": "Emprunt savant au latin classique « productio » (prolongement, mise en avant), du verbe « producere ».",
    "cognatesFr": [
      "production",
      "industrielle"
    ],
    "relatedConcepts": [
      "acc",
      "prod_rel"
    ],
    "difficulty": "basic"
  },
  "ch1_p9_s4_w3": {
    "wordId": "ch1_p9_s4_w3",
    "translationFr": "place",
    "literalTranslation": "place de substitution (accusatif féminin singulier)",
    "grammaticalRole": "Nom féminin singulier (die Stelle) à l'accusatif singulier après « An die ».",
    "etymology": "Issu du moyen haut-allemand « stelle », vieux haut-allemand « stella » (emplacement fixe, poste).",
    "relatedConcepts": [
      "acc"
    ],
    "difficulty": "basic",
    "wordIds": [
      "ch1_p9_s4_w3"
    ],
    "contextNote": "Locution « An die Stelle » (à la place de). Découplé de l'article."
  },
  "ch1_p9_s4_w6": {
    "wordId": "ch1_p9_s4_w6",
    "translationFr": "succéda / prit la place",
    "literalTranslation": "avança d'un pas, entra pour occuper la place (verbe fort treten au prétérit singulier)",
    "grammaticalRole": "Verbe fort (treten, trat, getreten) à la 3e personne du singulier du prétérit de l'indicatif. En position 2 (V2) de la première proposition coordonnée.",
    "etymology": "Issu du moyen haut-allemand « treten », vieux haut-allemand « tretan » (marcher, poser le pied, fouler). Proto-germanique *tredanan (marcher, fouler aux pieds, cognat du vieil anglais tredan / anglais moderne tread et trod).",
    "relatedConcepts": [
      "v2"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p9_s4_w6"
    ]
  },
  "ch1_p9_s4_w10": {
    "wordId": "ch1_p9_s4_w10",
    "translationFr": "industrie",
    "literalTranslation": "production mécanique / grande industrie",
    "grammaticalRole": "Nom féminin singulier au nominatif sujet.",
    "wordIds": [
      "ch1_p9_s4_w10"
    ],
    "etymology": "Emprunté au XVIIIe siècle au français « industrie », issu du latin classique « industria » (activité, zèle assidu).",
    "philosophicalContext": "La « grande industrie » (Großindustrie) constitue pour Marx la forme achevée du mode de production capitaliste, où la production n'est plus limitée par l'habileté manuelle mais soumise au rythme automatique de la machinerie universelle.",
    "cognatesFr": [
      "industrie",
      "moderne"
    ],
    "relatedConcepts": [
      "nom",
      "ind_rev",
      "bourgeoisie"
    ],
    "difficulty": "intermediate"
  },
  "ch1_p9_s4_w17": {
    "wordId": "ch1_p9_s4_w17",
    "translationFr": "classe moyenne / ordre moyen",
    "literalTranslation": "état moyen manufacturier, bourgeoisie moyenne d'atelier (génitif masculin singulier)",
    "grammaticalRole": "Nom composé masculin singulier (der Mittelstand) au génitif singulier en -es après « des industriellen ».",
    "etymology": "Composé de mittel (moyen, en moyen haut-allemand mittel, vieux haut-allemand mittil) et Stand (ordre, état social, de stehen).",
    "philosophicalContext": "L'éviction de l'artisanat et des petits patrons manufacturiers par les « industriellen Millionäre » consacre la concentration vertigineuse du capital entre les mains d'une oligarchie financière et industrielle mondiale.",
    "relatedConcepts": [
      "comp_noun",
      "gen",
      "bourgeoisie"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p9_s4_w17"
    ],
    "contextNote": "Complément déterminant la place évincée par les magnats modernes. Strictement découplé d'industriellen."
  },
  "ch1_p9_s4_w21": {
    "wordId": "ch1_p9_s4_w21",
    "translationFr": "millionnaires",
    "literalTranslation": "possesseurs de millions",
    "grammaticalRole": "Nom masculin pluriel au datif.",
    "etymology": "Emprunté au français « millionnaire », dérivé de « million ».",
    "philosophicalContext": "Désignation sarcastique de la nouvelle oligarchie du grand capital : la puissance sociale ne découle plus d'un titre de noblesse ou de la naissance, mais de l'ampleur quantitative du capital financier accumulé.",
    "cognatesFr": [
      "millionnaire",
      "million"
    ],
    "relatedConcepts": [
      "nom",
      "capital",
      "bourgeoisie"
    ],
    "difficulty": "basic",
    "wordIds": [
      "ch1_p9_s4_w21"
    ]
  },
  "ch1_p9_s4_w24": {
    "wordId": "ch1_p9_s4_w24",
    "translationFr": "chefs / commandants / capitaines",
    "literalTranslation": "chefs, dirigeants et commandants suprêmes d'armées industrielles (nominatif masculin pluriel)",
    "grammaticalRole": "Nom masculin pluriel (der Chef -> die Chefs) au nominatif pluriel après « die ».",
    "etymology": "Emprunt au XVIIIe siècle au français « chef » (la tête, le conducteur suprême), issu du latin populaire *capum, altération du latin classique « caput » (la tête, l'extrémité supérieure, issu de la racine indo-européenne *kaput-).",
    "cognatesFr": [
      "chef",
      "capitaine",
      "capital"
    ],
    "relatedConcepts": [
      "nom",
      "plural",
      "bourgeoisie"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p9_s4_w24"
    ],
    "contextNote": "Lafargue traduit « les chefs d'armées industrielles tout entières ». Strictement découplé de l'article « die ».",
    "philosophicalContext": "Métaphore militaire révélatrice : Marx assimile la fabrique capitaliste moderne à une caserne et à un régiment militaire. Le grand capitaliste n'est pas un bienfaiteur, mais le général despotique d'une armée de prolétaires enrégimentés sous la discipline d'usine."
  },
  "ch1_p9_s4_w27": {
    "wordId": "ch1_p9_s4_w27",
    "translationFr": "armées",
    "literalTranslation": "troupes armées ordonnées",
    "grammaticalRole": "Nom féminin pluriel au génitif.",
    "etymology": "Emprunté au français « armée », du participe passé substantivé du latin armare (armer).",
    "philosophicalContext": "Métaphore militaire rigoureuse : Marx compare la fabrique moderne à une caserne où les masses prolétaires sont enrégimentées sous le commandement despotique des capitalistes et de leurs officiers (les contremaîtres).",
    "cognatesFr": [
      "armée",
      "armer"
    ],
    "relatedConcepts": [
      "gen",
      "proletariat"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p9_s4_w27"
    ]
  },
  "ch1_p9_s4_w31": {
    "wordId": "ch1_p9_s4_w31",
    "translationFr": "bourgeois",
    "literalTranslation": "bourgeois modernes, magnats du capital mondial (nominatif masculin pluriel)",
    "grammaticalRole": "Nom masculin pluriel invariable en allemand (der Bourgeois -> die Bourgeois) au nominatif pluriel après « die modernen ».",
    "etymology": "Emprunt direct au français « bourgeois » (habitant franc du bourg, du bas-latin burgensis, formé sur Burg).",
    "philosophicalContext": "La genèse se conclut en apothéose : le bourgeois moderne n'a plus rien de l'habitant forain timoré des palissades médiévales (« Pfahlbürger ») ; il est devenu le maître cosmopolite des armées de prolétaires salariés et du marché planétaire.",
    "cognatesFr": [
      "bourgeois",
      "bourgeoisie",
      "bourg"
    ],
    "relatedConcepts": [
      "nom",
      "bourgeoisie"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p9_s4_w31"
    ],
    "contextNote": "Apothéose de la genèse historique de la bourgeoisie."
  },
  "ch1_p10_s1_w6": {
    "wordId": "ch1_p10_s1_w6",
    "translationFr": "marché mondial",
    "literalTranslation": "marché mondial unifié par l'échange universel (accusatif masculin singulier)",
    "grammaticalRole": "Nom composé masculin singulier (der Weltmarkt) à l'accusatif singulier après l'article « den », COD de « hergestellt ».",
    "etymology": "Composé universel associant : 1° « die Welt » (en moyen haut-allemand werlt / welt, en vieux haut-allemand weralt / werolt, littéralement 'l'âge de l'homme', composé germanique formé de *wira- = homme, cf. latin vir, et de *aldi- = génération, âge, durée de vie, cf. alt/old) ; 2° « der Markt » (emprunt du VIIIe siècle au latin classique mercātus = trafic marchand, foire, de merx = marchandise). Le terme composite « Weltmarkt » a été diffusé au début du XIXe siècle par Goethe et les économistes anglais pour saluer l'interdépendance planétaire des échanges.",
    "philosophicalContext": "Concept stratégique du matérialisme historique (Maximilien Rubel, Étienne Balibar, MEGA2) : le marché mondial (« Weltmarkt ») est à la fois la condition préalable et le résultat achevé du mode de production capitaliste. En brisant les barrières nationales, douanières et culturelles, la bourgeoisie mondialise les rapports marchands et prépare le terrain de l'émancipation universelle du prolétariat cosmopolite.",
    "cognatesFr": [
      "marché",
      "monde"
    ],
    "relatedConcepts": [
      "comp_noun",
      "acc",
      "bourgeoisie",
      "hist_mat"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p10_s1_w6"
    ],
    "contextNote": "Lafargue traduit « le marché mondial ». Le mot isolé est le nom masculin composé, strictement découplé de l'article défini accusatif « den »."
  },
  "ch1_p10_s1_w7": {
    "wordId": "ch1_p10_s1_w7",
    "translationFr": "créé / établi",
    "literalTranslation": "établi, mis sur pied, produit (participe passé du verbe à particule her|stellen)",
    "grammaticalRole": "Participe passé (Partizip II) du verbe à particule séparable « her|stellen », formant le passé composé (Perfekt) avec l'auxiliaire « hat » placé en position 2.",
    "etymology": "Verbe composé séparable associant l'adverbe déictique « her » (vers ici, du vieux haut-allemand hera / herot = en venant vers le locuteur) et le verbe « stellen » (poser debout, placer, en vieux haut-allemand stellen, causatif de stehen). Au sens d'établir durablement ou de fabriquer industriellement à partir du XVIIIe siècle.",
    "syntaxNote": "Parenthèse verbale de proposition principale : « hat » (V2) régit le participe séparable « hergestellt » repoussé en fin de proposition principale avant la relative.",
    "relatedConcepts": [
      "sep_verb",
      "prod_rel"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p10_s1_w7"
    ]
  },
  "ch1_p10_s1_w9": {
    "wordId": "ch1_p10_s1_w9",
    "translationFr": "que / lequel",
    "literalTranslation": "lequel (pronom relatif masculin accusatif singulier)",
    "grammaticalRole": "Pronom relatif masculin singulier à l'accusatif (welcher, welche, welches), ayant pour antécédent « Weltmarkt », COD du verbe subordonné « vorbereitete ».",
    "etymology": "Issu du moyen haut-allemand « welher / welch », vieux haut-allemand « hwelih / hwelīh » (de quelle sorte, quel, qui). Proto-germanique *hwalīkaz (quel, de quelle nature), composé du thème interrogatif indo-européen *kʷo- et de *līka- (corps, forme, ressemblance, cf. allemand Leiche, anglais -ly / like).",
    "syntaxNote": "Rejet du verbe conjugué : le pronom relatif « welchen » introduit la subordonnée relative et rejette le verbe conjugué « vorbereitete » à la toute fin.",
    "relatedConcepts": [
      "acc",
      "sub_clause"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p10_s1_w9"
    ]
  },
  "ch1_p10_s1_w13": {
    "wordId": "ch1_p10_s1_w13",
    "translationFr": "avait préparé / prépara",
    "literalTranslation": "prépara d'avance, fraya la voie à (verbe faible au prétérit)",
    "grammaticalRole": "Verbe faible composé (vor|bereiten) à la 3e personne du singulier du prétérit de l'indicatif. Rejeté en fin de subordonnée relative.",
    "etymology": "Composé du préfixe adverbial « vor » (en avant, préalablement, en vieux haut-allemand fora) et du verbe faible « bereiten » (rendre prêt, apprêter, en moyen haut-allemand bereiten, dérivé de l'adjectif bereit = prêt, équipé, en vieux haut-allemand bireiti).",
    "relatedConcepts": [
      "sub_clause",
      "prefix_verb"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p10_s1_w13"
    ]
  },
  "ch1_p10_s2_w5": {
    "wordId": "ch1_p10_s2_w5",
    "translationFr": "au commerce",
    "literalTranslation": "au négoce, aux échanges marchands (datif singulier masculin)",
    "grammaticalRole": "Nom masculin singulier (der Handel) au datif singulier après « dem », premier COI d'attribution du verbe « hat ... gegeben ».",
    "etymology": "Issu du moyen haut-allemand « handel » (maniement, besogne, affaire, négoce), déverbal de « handeln » (agir, commercer, manier), dérivé de « die Hand » (la main, en vieux haut-allemand hant, proto-germanique *handuz = l'organe qui prend, saisit).",
    "relatedConcepts": [
      "dat"
    ],
    "difficulty": "basic",
    "wordIds": [
      "ch1_p10_s2_w5"
    ]
  },
  "ch1_p10_s2_w8": {
    "wordId": "ch1_p10_s2_w8",
    "translationFr": "à la navigation",
    "literalTranslation": "au voyage par bateau, à la navigation maritime et fluviale (datif singulier féminin)",
    "grammaticalRole": "Nom féminin composé (die Schiffahrt) au datif singulier après « der », deuxième COI coordonné.",
    "etymology": "Composé de : 1° « das Schiff » (en moyen haut-allemand schif, en vieux haut-allemand skif, proto-germanique *skipą = navire, cognat de l'anglais ship) ; 2° « die Fahrt » (voyage, trajet, en moyen haut-allemand vart, en vieux haut-allemand fart, déverbal apophonique du verbe fort fahren = se déplacer, racine indo-européenne *per- = passer à travers, traverser).",
    "relatedConcepts": [
      "dat",
      "comp_noun"
    ],
    "difficulty": "basic",
    "wordIds": [
      "ch1_p10_s2_w8"
    ]
  },
  "ch1_p10_s2_w11": {
    "wordId": "ch1_p10_s2_w11",
    "translationFr": "aux voies de communication par terre",
    "literalTranslation": "aux communications terrestres (datif pluriel féminin)",
    "grammaticalRole": "Nom féminin pluriel composé (die Landkommunikation -> die Landkommunikationen) au datif pluriel avec désinence en -en après « den », troisième COI coordonné.",
    "etymology": "Composé associant : 1° « das Land » (la terre, terre ferme, contrée, en moyen haut-allemand lant, en vieux haut-allemand lant, proto-germanique *landą) ; 2° « die Kommunikation », emprunt savant au latin classique « communicatio » (partage, mise en commun), dérivé de « communicare » (rendre commun), formé sur « communis » (commun, public).",
    "cognatesFr": [
      "communication",
      "communiquer",
      "terre"
    ],
    "relatedConcepts": [
      "dat",
      "comp_noun",
      "latin_root"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p10_s2_w11"
    ]
  },
  "ch1_p10_s2_w13": {
    "wordId": "ch1_p10_s2_w13",
    "translationFr": "incommensurable / prodigieux / immense",
    "literalTranslation": "qui ne peut être mesuré, sans commune mesure, colossal (adjectif à l'accusatif masculin singulier)",
    "grammaticalRole": "Adjectif qualificatif décliné à l'accusatif masculin singulier en -en après « einen ».",
    "etymology": "Composé du préfixe négatif d'impossibilité « un- » et du participe passé adjectivé du verbe « ermessen » (mesurer, évaluer, en moyen haut-allemand ermezzen, vieux haut-allemand ermezzan, du verbe messen = mesurer, proto-germanique *metaną, racine indo-européenne *med- = mesurer, ordonner, cf. latin modus, méditer).",
    "cognatesFr": [
      "mesure",
      "mètre"
    ],
    "relatedConcepts": [
      "acc",
      "decl"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p10_s2_w13"
    ],
    "contextNote": "Lafargue traduit « un essor incommensurable ». L'adjectif isolé est strictement découplé du substantif « Aufschwung » (essor / élan)."
  },
  "ch1_p10_s3_w6": {
    "wordId": "ch1_p10_s3_w6",
    "translationFr": "extension / expansion / développement",
    "literalTranslation": "extension spatiale, étalement géographique, expansion matérielle (nominatif féminin singulier)",
    "grammaticalRole": "Nom féminin singulier (die Ausdehnung) au nominatif singulier déterminé par l'adjectif démonstratif « diese ».",
    "etymology": "Déverbal en « -ung » formé sur le verbe séparable « ausdehnen » (étendre, étirer vers l'extérieur, composé de aus = hors de et dehnen = étirer, tendre, en moyen haut-allemand dënen, vieux haut-allemand dennen, proto-germanique *tanjaną, racine indo-européenne *ten- = tendre, étirer, cf. latin tendere, extenuare).",
    "cognatesFr": [
      "extension",
      "étendre",
      "tension"
    ],
    "relatedConcepts": [
      "nom"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p10_s3_w6"
    ],
    "contextNote": "Sujet de la proposition relative proportionnelle. Strictement découplé du démonstratif « diese »."
  },
  "ch1_p10_s3_w9": {
    "wordId": "ch1_p10_s3_w9",
    "translationFr": "réagi en retour / eu des répercussions",
    "literalTranslation": "agi en retour, exercé un effet rétroactif (participe passé du verbe zurück|wirken)",
    "grammaticalRole": "Participe passé (Partizip II) du verbe à particule séparable « zurück|wirken », formant le passé composé (Perfekt) avec l'auxiliaire « hat ».",
    "etymology": "Composé séparable associant l'adverbe « zurück » (en arrière, vers l'arrière, contraction du moyen haut-allemand ze rücke = vers le dos, de Rücken / dos) et du verbe « wirken » (agir, produire un effet, opérer, en moyen haut-allemand wirken, en vieux haut-allemand wurken / wirkan, proto-germanique *wurkjaną, rattaché à la racine indo-européenne *werǵ- = travailler, agir, d'où proviennent l'allemand Werk et l'anglais work).",
    "philosophicalContext": "Application de la catégorie dialectique hégélienne d'action réciproque (« Wechselwirkung ») : les infrastructures de transport créées par l'industrie deviennent à leur tour la cause motrice qui démultiplie l'essor industriel.",
    "relatedConcepts": [
      "sep_verb",
      "hist_mat"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p10_s3_w9"
    ]
  },
  "ch1_p10_s3_w14": {
    "wordId": "ch1_p10_s3_w14",
    "translationFr": "au fur et à mesure / dans la mesure même",
    "literalTranslation": "dans la même mesure (datif neutre singulier avec -e archaïque)",
    "grammaticalRole": "Nom neutre singulier (das Maß) au datif singulier avec désinence en -e après la préposition et le pronom « in demselben », formant une corrélation comparative avec « worin ».",
    "etymology": "Issu du moyen haut-allemand « maz » (mesure, quantité déterminée), vieux haut-allemand « maz » (mesure, balance). Proto-germanique *matą, substantif apophonique du verbe fort *metaną (mesurer, allemand messen, racine indo-européenne *med-).",
    "syntaxNote": "Formule corrélative rigoureuse de proportionnalité historique : « in demselben Maße [A], worin [B] ... in demselben Maße [C] ».",
    "relatedConcepts": [
      "dat",
      "formal_german"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p10_s3_w14"
    ]
  },
  "ch1_p10_s3_w23": {
    "wordId": "ch1_p10_s3_w23",
    "translationFr": "chemins de fer",
    "literalTranslation": "chemins de fer, voies ferrées mécanisées de transport (génitif féminin pluriel)",
    "grammaticalRole": "Nom composé féminin pluriel (die Eisenbahn -> die Eisenbahnen) au génitif pluriel après l'article « der ».",
    "etymology": "Composé technique forgé au début du XIXe siècle associant : 1° « das Eisen » (le fer métallique, en moyen haut-allemand īsen, vieux haut-allemand īsan / īsarn, du proto-germanique *īsarną, emprunt très ancien aux langues celtiques *īsarnon = fer) ; 2° « die Bahn » (la voie frayée, le chemin dégagé, en moyen haut-allemand bane, vieux haut-allemand bana, apparenté à schlagen = battre une voie).",
    "philosophicalContext": "Symbole magistral de la révolution industrielle : le chemin de fer supprime l'espace par le temps (« Annihilation of space by time » selon les Grundrisse de Marx), accélérant la rotation du capital et unifiant matériellement le marché national et mondial.",
    "relatedConcepts": [
      "comp_noun",
      "gen",
      "plural",
      "hist_mat"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p10_s3_w23"
    ],
    "contextNote": "Complément énuméré au génitif pluriel. Strictement découplé de l'article « der »."
  },
  "ch1_p10_s3_w38": {
    "wordId": "ch1_p10_s3_w38",
    "translationFr": "ses capitaux",
    "literalTranslation": "ses fonds de capitaux (accusatif pluriel neutre savant en -ien)",
    "grammaticalRole": "Nom neutre pluriel (das Kapital -> die Kapitalien) à l'accusatif après le possessif « ihre », COD de « vermehrte ».",
    "etymology": "Emprunt au XVIe siècle au latin commercial et juridique italien « capitale » (somme principale prêtée par opposition aux intérêts), dérivé du latin classique « capitalis » (relatif à la tête, capital, principal), formé sur « caput / capitis » (tête). Le pluriel allemand « Kapitalien » conserve la terminaison neutre plurielle savante du bas-latin.",
    "philosophicalContext": "Le capital ne se conserve qu'en s'élargissant sans répit (« Akkumulation des Kapitals ») : toute bourgeoisie qui cesserait de multiplier ses capitaux serait anéantie par la concurrence.",
    "cognatesFr": [
      "capital",
      "capitaux",
      "capitalisme"
    ],
    "relatedConcepts": [
      "acc",
      "capital",
      "latin_root"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p10_s3_w38"
    ]
  },
  "ch1_p10_s3_w46": {
    "wordId": "ch1_p10_s3_w46",
    "translationFr": "héritées / transmises",
    "literalTranslation": "livrées d'une génération à l'autre",
    "grammaticalRole": "Participe adjectivé à l'accusatif féminin pluriel.",
    "etymology": "Participe passé de « überliefern » (transmettre, léguer, de über + liefern livrer).",
    "relatedConcepts": [
      "acc",
      "prefix_verb"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p10_s3_w46"
    ]
  },
  "ch1_p10_s3_w50": {
    "wordId": "ch1_p10_s3_w50",
    "translationFr": "à l'arrière-plan",
    "literalTranslation": "au fond de la scène, à l'arrière-plan (accusatif directionnel)",
    "grammaticalRole": "Nom masculin composé (der Hintergrund) à l'accusatif après la préposition directrice « in den » dans la locution « in den Hintergrund drängen » (reléguer à l'arrière-plan, refouler).",
    "etymology": "Composé spatial associant : 1° l'adverbe-préposition « hinter » (derrière, en arrière, en moyen haut-allemand hinter, en vieux haut-allemand hintar, comparatif germanique issu de la racine indo-européenne *ḱen- / en arrière) ; 2° « der Grund » (le fond, sol, fondement, en moyen haut-allemand grunt, en vieux haut-allemand grunt, proto-germanique *grunduz).",
    "philosophicalContext": "Métaphore scénographique de l'histoire : la bourgeoisie n'élimine pas instantanément les corporations et la paysannerie servile, mais elle les relègue dans les coulisses de la scène économique où seul règne désormais l'antagonisme moderne.",
    "relatedConcepts": [
      "acc",
      "comp_noun",
      "class_struggle"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p10_s3_w50"
    ]
  },
  "ch1_p11_s1_w11": {
    "wordId": "ch1_p11_s1_w11",
    "translationFr": "produit",
    "literalTranslation": "produit matériel, résultat achevé d'un procès historique (nominatif neutre singulier)",
    "grammaticalRole": "Nom neutre singulier (das Produkt) au nominatif singulier après « das », attribut du sujet « die moderne Bourgeoisie ».",
    "etymology": "Emprunt savant au latin « productum » (ce qui est conduit en avant, porté à la lumière, résultat d'un procès, participe passé passif neutre du verbe producere, de pro- « en avant » et ducere « conduire »).",
    "philosophicalContext": "Thèse historique centrale : la bourgeoisie n'est pas une création spontanée ou naturelle du génie humain, mais le produit matériel et nécessaire d'une longue série de révolutions économiques dans les modes de production et d'échange.",
    "cognatesFr": [
      "produit",
      "production"
    ],
    "relatedConcepts": [
      "nom",
      "latin_root",
      "hist_mat"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p11_s1_w11"
    ],
    "contextNote": "Attribut du sujet définissant la bourgeoisie moderne. Strictement découplé de l'article « das »."
  },
  "ch1_p11_s1_w14": {
    "wordId": "ch1_p11_s1_w14",
    "translationFr": "d'un long développement / d'une longue évolution",
    "literalTranslation": "d'un long cours de déploiement (génitif masculin singulier)",
    "grammaticalRole": "Nom masculin composé (der Entwicklungsgang) au génitif singulier en -es après « eines langen », premier complément déterminatif du nom « Produkt ».",
    "etymology": "Composé associant : 1° « die Entwicklung » (déploiement de ce qui était enveloppé, de ent- et wickeln, calque d'explicatio) ; 2° le « -s- » de liaison du génitif ; 3° « der Gang » (marche, cheminement, cours des choses, en moyen haut-allemand ganc, en vieux haut-allemand gang, substantif apophonique du verbe fort gehen, proto-germanique *gangaz).",
    "philosophicalContext": "La dialectique matérialiste conçoit la bourgeoisie à travers son « Entwicklungsgang » : une lente maturation matérielle où chaque stade technique dissout l'ordre politique précédent.",
    "relatedConcepts": [
      "gen",
      "comp_noun",
      "hist_mat"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p11_s1_w14"
    ]
  },
  "ch1_p11_s1_w19": {
    "wordId": "ch1_p11_s1_w19",
    "translationFr": "de révolutions / de bouleversements",
    "literalTranslation": "de renversements de fond en comble, de bouleversements radicaux (datif pluriel)",
    "grammaticalRole": "Nom féminin pluriel (die Umwälzung -> die Umwälzungen) au datif pluriel en -en après la préposition régissant le datif « von ».",
    "etymology": "Substantif d'action en « -ung » dérivé du verbe « umwälzen » (bouleverser, faire rouler sens dessus dessous). Composé du préfixe séparable germanique « um- » (autour, renversement complet, en vieux haut-allemand umbi) et du verbe « wälzen » (faire rouler avec force, en moyen haut-allemand welzen, en vieux haut-allemand welzen, causatif germanique *waltjanan sur le verbe fort walzan / rouler, tourner, d'où dérive la valse, racine indo-européenne *wel-).",
    "philosophicalContext": "Le terme « Umwälzung » est chez Marx la désignation rigoureuse des ruptures qualitatives brutales qui refondent l'infrastructure économique, par contraste avec les simples réformes quantitatives.",
    "relatedConcepts": [
      "dat",
      "revolution",
      "hist_mat"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p11_s1_w19"
    ]
  },
  "ch1_p11_s1_w22": {
    "wordId": "ch1_p11_s1_w22",
    "translationFr": "dans le mode de production",
    "literalTranslation": "dans le mode de production (nom composé tronqué par trait d'union de suspension)",
    "grammaticalRole": "Nom composé féminin avec trait d'union de suspension (« Ergänzungsbindestrich »), coordonné par « und » avec « Verkehrsweise », au datif singulier après « in der ».",
    "etymology": "Composé de : 1° « die Produktion » (du latin productio) ; 2° « -s- » ; 3° le noyau sous-entendu « die Weise » (façon, mode, manière, en moyen haut-allemand wīse, en vieux haut-allemand wīsa, proto-germanique *wīsō-, issu de la racine indo-européenne *weyd- = voir, savoir, cognat du latin videre).",
    "philosophicalContext": "Concept fondamental du marxisme : le « mode de production » (Produktionsweise) désigne l'articulation historiquement déterminée des forces productives matérielles et des rapports sociaux de production.",
    "syntaxNote": "Ellipse morphosyntaxique : la forme tronquée « Produktions- » partage le second terme composé « -weise » avec « Verkehrsweise », évitant la redondance phonétique.",
    "relatedConcepts": [
      "dat",
      "comp_noun",
      "prod_rel"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p11_s1_w22"
    ]
  },
  "ch1_p11_s1_w24": {
    "wordId": "ch1_p11_s1_w24",
    "translationFr": "et d'échange / de circulation",
    "literalTranslation": "et mode de circulation marchande et de communication sociale (datif singulier féminin)",
    "grammaticalRole": "Nom féminin singulier composé (die Verkehrsweise) au datif singulier après « in der », coordonné à « Produktions- ».",
    "etymology": "Composé unissant : 1° « der Verkehr » (déverbal de verkehren = échanger, fréquenter, tourner en sens inverse, formé de ver- et kehren, en moyen haut-allemand kēren, en vieux haut-allemand kēran = tourner, proto-germanique *kaizjanan) ; 2° « -s- » ; 3° « die Weise » (mode, manière).",
    "philosophicalContext": "Dans L'Idéologie allemande (1845), Marx et Engels désignaient par « Verkehrsform » ou « Verkehrsweise » les formes d'interaction et d'échange économique avant de systématiser le concept de rapports de production.",
    "relatedConcepts": [
      "dat",
      "comp_noun",
      "prod_rel"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p11_s1_w24"
    ]
  },
  "ch1_p12_s1_w3": {
    "wordId": "ch1_p12_s1_w3",
    "translationFr": "étapes de l'évolution / degrés de développement",
    "literalTranslation": "marches, degrés d'ascension du déploiement historique (génitif pluriel)",
    "grammaticalRole": "Nom féminin pluriel composé (die Entwicklungsstufe -> die Entwicklungsstufen) au génitif pluriel après le démonstratif « dieser ».",
    "etymology": "Composé de : 1° « die Entwicklung » (développement, déploiement progressif de ce qui était enveloppé, formé du préfixe ent- marquant l'ouverture et de wickeln = enrouler) ; 2° le « -s- » de liaison ; 3° « die Stufe » (degré, échelon, marche d'escalier, en moyen haut-allemand stuofe, en vieux haut-allemand stuofa, proto-germanique *stōpō-, rattaché au verbe stapfen / marcher à pas pesants, racine indo-européenne *stebʰ- = fixer, fouler d'un pas ferme).",
    "philosophicalContext": "Les « Entwicklungsstufen » traduisent l'historicité dialectique : à chaque avancée dans l'infrastructure économique correspond une conquête politique correspondante de la bourgeoisie.",
    "relatedConcepts": [
      "gen",
      "comp_noun",
      "hist_mat"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p12_s1_w3"
    ]
  },
  "ch1_p12_s1_w12": {
    "wordId": "ch1_p12_s1_w12",
    "translationFr": "progrès politique",
    "literalTranslation": "pas en avant politique (datif masculin singulier avec -e archaïque)",
    "grammaticalRole": "Nom masculin singulier (der Fortschritt) au datif singulier portant le « -e » archaïque de datif (Dativ-e), régi par la préposition « von » régissant le complément d'agent.",
    "etymology": "Composé unissant : 1° l'adverbe dynamique « fort » (en avant, au loin, en moyen haut-allemand vort, en vieux haut-allemand fora / fort) ; 2° « der Schritt » (le pas, en moyen haut-allemand schrit, déverbal apophonique de schreiten = marcher à pas mesurés, proto-germanique *skrīþaną). Calque humaniste du latin progressus.",
    "philosophicalContext": "Le « progrès » politique est matérialistement redéfini : il n'est pas une marche abstraite vers la liberté morale, mais la mise en accord de l'appareil d'État avec les impératifs de la classe montante.",
    "relatedConcepts": [
      "dat",
      "formal_german"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p12_s1_w12"
    ]
  },
  "ch1_p12_s2_w2": {
    "wordId": "ch1_p12_s2_w2",
    "translationFr": "ordre opprimé / état opprimé",
    "literalTranslation": "état social, ordre opprimé sous le joug féodal (nominatif masculin singulier sans article)",
    "grammaticalRole": "Nom masculin singulier (der Stand) au nominatif sans article, qualifié par « Unterdrückter », en apposition caractérisant « sie » (la bourgeoisie).",
    "etymology": "Issu du moyen haut-allemand « stant » (état, statut, rang d'ordre, tenue), vieux haut-allemand « stant ». Déverbal apophonique du verbe fort « stehen » (se tenir debout, vieux haut-allemand stān / stēn, proto-germanique *standaną, racine indo-européenne *steh₂-). Équivalent exact du latin status (condition juridique héréditaire).",
    "philosophicalContext": "Distinction conceptuelle majeure entre « Stand » (ordre d'Ancien Régime fondé sur des privilèges féodaux coutumiers de sang) et « Klasse » (classe moderne définie par les rapports marchands et économiques). La bourgeoisie naît comme ordre opprimé du tiers état avant de briser la société féodale pour s'ériger en classe universelle dominante.",
    "relatedConcepts": [
      "nom",
      "feudalism",
      "class_struggle"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p12_s2_w2"
    ],
    "contextNote": "Première étape de l'ascension historique de la bourgeoisie : elle commence comme ordre asservi avant de conquérir le pouvoir souverain."
  },
  "ch1_p12_s2_w7": {
    "wordId": "ch1_p12_s2_w7",
    "translationFr": "seigneurs féodaux",
    "literalTranslation": "seigneurs féodaux, maîtres de la terre sous le servage (génitif masculin pluriel)",
    "grammaticalRole": "Nom composé masculin pluriel (der Feudalherr -> die Feudalherren) au génitif pluriel après « der Herrschaft der ».",
    "etymology": "Composé unissant : 1° l'adjectif « feudal » (emprunt au latin médiéval feudalis, du francique *fehu = fief, bien mobilier) ; 2° « der Herr » (le maître, le seigneur, issu du comparatif vieux haut-allemand hēriro = le plus âgé, le plus vénérable, de hēr = vénérable, noble).",
    "relatedConcepts": [
      "comp_noun",
      "gen",
      "plural",
      "feudalism"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p12_s2_w7"
    ],
    "contextNote": "Lafargue traduit « des seigneurs féodaux ». Strictement découplé de l'article défini « der »."
  },
  "ch1_p12_s2_w14": {
    "wordId": "ch1_p12_s2_w14",
    "translationFr": "association",
    "literalTranslation": "union de compagnons",
    "grammaticalRole": "Nom féminin singulier.",
    "etymology": "Emprunté au français « association », du latin médiéval « associatio » (union en société, de socius).",
    "cognatesFr": [
      "association",
      "associer"
    ],
    "relatedConcepts": [
      "nom",
      "latin_root"
    ],
    "difficulty": "basic",
    "wordIds": [
      "ch1_p12_s2_w14"
    ]
  },
  "ch1_p12_s2_w17": {
    "wordId": "ch1_p12_s2_w17",
    "translationFr": "commune",
    "literalTranslation": "commune urbaine affranchie, corps municipal juré (datif féminin singulier)",
    "grammaticalRole": "Nom féminin singulier (die Kommune) au datif singulier après « in der ».",
    "etymology": "Emprunt au français médiéval « commune », issu du bas-latin « communia » (association jurée de bourgeois, corps municipal indépendant, neutre pluriel substantivé du latin communis = partagé en commun).",
    "philosophicalContext": "L'autonomie municipale des communes médiévales est le laboratoire politique précoce de la bourgeoisie où elle s'organise en contre-pouvoir armé face aux seigneurs féodaux.",
    "cognatesFr": [
      "commune",
      "communauté"
    ],
    "relatedConcepts": [
      "dat",
      "feudalism"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p12_s2_w17"
    ],
    "contextNote": "Lafargue traduit « dans la commune ». Le mot isolé est le nom féminin au datif sans article. Engels ajoute en note en 1888 : « C'est ainsi que les bourgeois des villes d'Italie et de France appelaient leur communauté urbaine une fois qu'ils avaient acheté ou arraché à leurs seigneurs féodaux les premiers droits d'administration autonome »."
  },
  "ch1_p12_s2_w26": {
    "wordId": "ch1_p12_s2_w26",
    "translationFr": "taillable / soumis à l'impôt",
    "literalTranslation": "soumis à l'obligation de l'impôt de la couronne (adjectif au nominatif masculin singulier)",
    "grammaticalRole": "Adjectif composé au nominatif masculin singulier en -er (flexion forte sans article), qualifiant « Stand ».",
    "etymology": "Composé associant : 1° « die Steuer » (l'impôt royal, la contribution, en vieux haut-allemand stiura = soutien matériel, aide, mât d'appui, proto-germanique *stiurjō-) ; 2° « pflichtig » (obligé par devoir, astreint par la loi, dérivé en -ig de Pflicht / devoir, déverbal de pflegen = prendre soin, s'engager, en vieux haut-allemand pflegan).",
    "philosophicalContext": "Allusion historique directe au « Tiers État » en France sous la monarchie d'Ancien Régime : l'ordre roturier taillable et corvéable à merci, qui finançait à lui seul les guerres et le faste de la monarchie absolue.",
    "relatedConcepts": [
      "nom",
      "decl",
      "feudalism"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p12_s2_w26"
    ]
  },
  "ch1_p12_s2_w36": {
    "wordId": "ch1_p12_s2_w36",
    "translationFr": "contrepoids",
    "literalTranslation": "poids opposé pour équilibrer",
    "grammaticalRole": "Nom neutre singulier.",
    "etymology": "Composé de « gegen » (contre, vis-à-vis) + « das Gewicht » (le poids, pesanteur).",
    "philosophicalContext": "Dans les monarchies absolutistes du XVIIe siècle (comme sous Louis XIV), le pouvoir royal s'appuya sur la bourgeoisie manufacturière et financière naissante pour tenir en échec les rébellions de la noblesse d'épée.",
    "relatedConcepts": [
      "nom",
      "comp_noun"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p12_s2_w36"
    ]
  },
  "ch1_p12_s2_w39": {
    "wordId": "ch1_p12_s2_w39",
    "translationFr": "noblesse",
    "literalTranslation": "noblesse féodale d'épée et de sang (accusatif masculin singulier)",
    "grammaticalRole": "Nom masculin singulier (der Adel) à l'accusatif singulier après « gegen den ».",
    "etymology": "Issu du moyen haut-allemand « adel », vieux haut-allemand « adal » (noble ascendance, lignée illustre, race libre), du proto-germanique *aþalą (famille noble, biens patrimoniaux héréditaires). Cognat de l'ancien anglais æðelu.",
    "relatedConcepts": [
      "acc",
      "feudalism"
    ],
    "difficulty": "basic",
    "wordIds": [
      "ch1_p12_s2_w39"
    ],
    "contextNote": "Lafargue traduit « contre la noblesse ». Strictement découplé de l'article « den »."
  },
  "ch1_p12_s2_w49": {
    "wordId": "ch1_p12_s2_w49",
    "translationFr": "pierre angulaire / fondement principal",
    "literalTranslation": "fondement primordial posé à la base (nominatif féminin singulier)",
    "grammaticalRole": "Nom féminin singulier composé (die Hauptgrundlage) au nominatif sans article, apposition descriptive.",
    "etymology": "Composé ternaire associant : 1° « Haupt- » (tête, chef, premier en rang, en vieux haut-allemand houbit, proto-germanique *haubida-) ; 2° « der Grund » (sol, fond, terre ferme, en vieux haut-allemand grunt) ; 3° « die Lage » (assiette, position, couche, déverbal de liegen = reposer à plat).",
    "relatedConcepts": [
      "nom",
      "comp_noun"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p12_s2_w49"
    ]
  },
  "ch1_p12_s2_w55": {
    "wordId": "ch1_p12_s2_w55",
    "translationFr": "conquit de haute lutte",
    "literalTranslation": "arracha par le combat, conquit par une lutte opiniâtre (verbe faible au prétérit)",
    "grammaticalRole": "Verbe faible composé transitif (erkämpfen) à la 3e personne du singulier du prétérit de l'indicatif. Verbe recteur principal fermant la longue période après l'accumulation d'appositions historiques.",
    "etymology": "Composé du préfixe inséparable perfectif « er- » (qui exprime l'obtention victorieuse au prix d'un labeur extrême) et du verbe « kämpfen » (combattre), dérivé de « der Kampf » (le combat), très ancien emprunt du vieux haut-allemand « kampf » au latin classique « campus » (la plaine, champ clos de combat).",
    "philosophicalContext": "La domination politique de la bourgeoisie ne lui a pas été octroyée gracieusement par la monarchie : elle a dû l'arracher par des révolutions violentes (1648 en Angleterre, 1789 en France).",
    "syntaxNote": "Point d'orgue syntaxique : l'énorme accumulation des appositions historiques formant une position 1 colossale est enfin résolue par le verbe conjugué « erkämpfte » en position 2, immédiatement suivi du sujet pronominal « sie » (inversion).",
    "relatedConcepts": [
      "v2",
      "prefix_verb",
      "class_struggle"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p12_s2_w55"
    ]
  },
  "ch1_p12_s2_w70": {
    "wordId": "ch1_p12_s2_w70",
    "translationFr": "État représentatif",
    "literalTranslation": "État représentatif parlementaire constitutionnel (datif masculin singulier)",
    "grammaticalRole": "Nom composé masculin singulier (der Repräsentativstaat) au datif singulier après la contraction « im » (in dem) et l'adjectif « modernen ».",
    "etymology": "Composé politique associant : 1° l'adjectif « repräsentativ » (du bas-latin repraesentare = rendre présent, placer sous les yeux) ; 2° « der Staat » (l'État, emprunt au latin status = condition, ordre politique stable).",
    "philosophicalContext": "La conquête finale de l'État : dans l'État représentatif moderne, la bourgeoisie a conquis le monopole exclusif de la puissance politique, subordonnant l'administration entière à ses intérêts de classe.",
    "cognatesFr": [
      "représentatif",
      "État"
    ],
    "relatedConcepts": [
      "comp_noun",
      "dat",
      "bourgeoisie"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p12_s2_w70"
    ],
    "contextNote": "Désigne le régime politique parlementaire où la bourgeoisie exerce sa domination directe sous couvert de représentation nationale."
  },
  "ch1_p12_s2_w74": {
    "wordId": "ch1_p12_s2_w74",
    "translationFr": "domination / souveraineté",
    "literalTranslation": "pouvoir souverain / seigneurie",
    "grammaticalRole": "Nom féminin singulier à l'accusatif singulier.",
    "wordIds": [
      "ch1_p12_s2_w74"
    ],
    "etymology": "Substantif dérivé avec le suffixe abstrait de dignité « -schaft » (en vieux haut-allemand hēriscaf) de l'adjectif comparatif germanique « hēro » (vénérable, noble, d'où Herr / seigneur).",
    "philosophicalContext": "La bourgeoisie ne partage plus le pouvoir avec l'aristocratie terrienne : elle a conquis le monopole absolu de l'appareil d'État moderne.",
    "cognatesFr": [
      "politique"
    ],
    "relatedConcepts": [
      "acc",
      "bourgeoisie"
    ],
    "difficulty": "intermediate"
  },
  "ch1_p12_s3_w3": {
    "wordId": "ch1_p12_s3_w3",
    "translationFr": "pouvoir d'État / autorité étatique",
    "literalTranslation": "pouvoir d'État souverain, puissance publique coercitive (nominatif féminin singulier)",
    "grammaticalRole": "Nom composé féminin singulier (die Staatsgewalt) au nominatif singulier après « Die moderne ».",
    "etymology": "Composé politique associant : 1° « der Staat » (l'État politique, du latin status) ; 2° « die Gewalt » (la puissance légitime ou coercitive, l'autorité, du moyen haut-allemand gewalt, vieux haut-allemand giwalt = domination, force souveraine, déverbal du verbe walten = régir, gouverner, proto-germanique *waldaną).",
    "philosophicalContext": "Définition canonique de l'État dans le marxisme : l'État moderne n'est pas l'incarnation de l'intérêt général hégélien ni un arbitre neutre entre les classes, mais un instrument coercitif de domination d'une classe sur une autre.",
    "relatedConcepts": [
      "comp_noun",
      "nom",
      "bourgeoisie",
      "hist_mat"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p12_s3_w3"
    ],
    "contextNote": "Sujet de la célèbre définition marxienne de l'État bourgeois. Strictement découplé de l'article « Die » et de l'adjectif « moderne »."
  },
  "ch1_p12_s3_w7": {
    "wordId": "ch1_p12_s3_w7",
    "translationFr": "comité / commission / délégation",
    "literalTranslation": "comité restreint, commission déléguée pour gérer des affaires (nominatif masculin singulier)",
    "grammaticalRole": "Nom composé masculin singulier (der Ausschuß) au nominatif singulier après « ein », attribut du sujet « Die moderne Staatsgewalt ».",
    "etymology": "Issu du moyen haut-allemand « ausschuz » (action de trier, de rejeter le rebut ou de détacher une commission d'élus), déverbal du verbe fort « ausschießen » (choisir en triant, éjecter, de aus- et schießen = tirer, lancer). Désignait originellement le corps des délégués choisis parmi les bourgeois pour expédier les affaires courantes d'une municipalité.",
    "philosophicalContext": "Formule percutante et démystificatrice de Marx et Engels : le gouvernement moderne « n'est qu'un comité qui gère les affaires communes de toute la classe bourgeoise » (ein Ausschuß, der die gemeinschaftlichen Geschäfte der ganzen Bourgeoisklasse verwaltet). Les ministres et parlements ne sont que les mandataires du grand capital.",
    "relatedConcepts": [
      "comp_noun",
      "nom",
      "bourgeoisie",
      "hist_mat"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p12_s3_w7"
    ],
    "contextNote": "Lafargue traduit « n'est qu'un comité qui gère les affaires communes ». Strictement découplé de l'article « ein »."
  },
  "ch1_p12_s3_w12": {
    "wordId": "ch1_p12_s3_w12",
    "translationFr": "affaires / besognes",
    "literalTranslation": "occupations / transactions",
    "grammaticalRole": "Nom neutre pluriel à l'accusatif pluriel.",
    "wordIds": [
      "ch1_p12_s3_w12"
    ],
    "etymology": "Issu du moyen haut-allemand « geschefte » (mandat, occupation, besogne, œuvre), vieux haut-allemand « giscaft », déverbal de « schaffen » (créer, faire).",
    "relatedConcepts": [
      "acc",
      "capital"
    ],
    "difficulty": "basic"
  },
  "ch1_p12_s3_w15": {
    "wordId": "ch1_p12_s3_w15",
    "translationFr": "classe bourgeoise",
    "literalTranslation": "classe des bourgeois tout entière dans sa totalité objective (génitif féminin singulier)",
    "grammaticalRole": "Nom composé féminin singulier (die Bourgeoisklasse) au génitif singulier après « der ganzen ».",
    "etymology": "Composé hybride associant l'emprunt au français « Bourgeois » (habitant du bourg, Burg) et « die Klasse », emprunt savant au latin classique « classis » (les classes censitaires de Rome sous Servius Tullius, de calare = convoquer).",
    "philosophicalContext": "L'État bourgeois gère les intérêts de la bourgeoisie en tant que « classe tout entière » (der ganzen Bourgeoisklasse) : il est capable d'arbitrer les conflits concurrentiels fratricides entre capitalistes individuels pour préserver la pérennité du mode de production capitaliste dans son ensemble.",
    "cognatesFr": [
      "bourgeoisie",
      "classe"
    ],
    "relatedConcepts": [
      "comp_noun",
      "gen",
      "bourgeoisie",
      "class_struggle"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p12_s3_w15"
    ],
    "contextNote": "Complément au génitif de « Geschäfte ». Strictement découplé de la préposition française « de la » et de l'article allemand « der »."
  },
  "ch1_p12_s3_w16": {
    "wordId": "ch1_p12_s3_w16",
    "translationFr": "gère / administre",
    "literalTranslation": "administre en tuteur pour autrui (verbe faible à la 3e personne du singulier)",
    "grammaticalRole": "Verbe faible transitif (verwalten) à la 3e personne du singulier du présent de l'indicatif. Rejeté en fin de subordonnée relative introduite par « der ».",
    "etymology": "Composé du préfixe inséparable d'attribution « ver- » et du verbe fort « walten » (régner, gouverner, avoir la tutelle, en vieux haut-allemand waltan, proto-germanique *waldaną). Au sens juridique : gérer comme un mandataire ou exécuteur testamentaire.",
    "relatedConcepts": [
      "sub_clause",
      "prefix_verb"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p12_s3_w16"
    ]
  },
  "ch1_p13_s1_w8": {
    "wordId": "ch1_p13_s1_w8",
    "translationFr": "éminemment / au plus haut point",
    "literalTranslation": "au plus haut point, suprêmement (superlatif absolu adverbial)",
    "grammaticalRole": "Adverbe au superlatif absolu de l'adjectif « hoch », modifiant l'adjectif « revolutionäre ».",
    "etymology": "Forme de superlatif figée en adverbe de « hoch » (élevé, haut, en moyen haut-allemand hōch, en vieux haut-allemand hōh, proto-germanique *hauhaz = haut, élevé, racine indo-européenne *kewk- = courbé en hauteur, colline).",
    "relatedConcepts": [
      "adv"
    ],
    "difficulty": "basic",
    "wordIds": [
      "ch1_p13_s1_w8"
    ]
  },
  "ch1_p13_s1_w10": {
    "wordId": "ch1_p13_s1_w10",
    "translationFr": "rôle",
    "literalTranslation": "rôle agissant, fonction motrice dans le procès historique (accusatif féminin singulier)",
    "grammaticalRole": "Nom féminin singulier (die Rolle) à l'accusatif singulier après « eine höchst revolutionäre », COD de « gespielt ».",
    "etymology": "Emprunt au XVIIe siècle au français « rôle » (le rouleau de parchemin sur lequel était transcrit le texte d'un acteur de théâtre), issu du latin médiéval « rotulus » (petit rouleau, diminutif de rota = la roue, de la racine indo-européenne *Hret- = rouler, courir).",
    "philosophicalContext": "L'éloge paradoxal et dialectique de la bourgeoisie par Marx : loin d'être une force conservatrice dès son origine, la bourgeoisie a accompli des merveilles bien supérieures aux pyramides d'Égypte et aux cathédrales gothiques en liquidant impitoyablement la stagnation féodale.",
    "cognatesFr": [
      "rôle",
      "rouleau"
    ],
    "relatedConcepts": [
      "acc",
      "bourgeoisie",
      "hist_mat"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p13_s1_w10"
    ],
    "contextNote": "Lafargue traduit « un rôle éminemment révolutionnaire ». Strictement découplé de l'article indéfini « eine » et de l'adverbe « höchst »."
  },
  "ch1_p14_s1_w14": {
    "wordId": "ch1_p14_s1_w14",
    "translationFr": "patriarcales",
    "literalTranslation": "fondées sur l'autorité patriarcale incontestée du chef de clan ou de famille",
    "grammaticalRole": "Adjectif qualificatif (patriarchalisch) décliné à l'accusatif neutre pluriel en -en, épithète coordonnée de « Verhältnisse ».",
    "etymology": "Emprunt savant au bas-latin « patriarchalis », dérivé du grec « patriarchēs » (πατριάρχης = chef d'une famille noble ou d'une tribu), composé de « patria » (famille, lignée, issue de patēr / père) et de « archē » (commandement, primauté, autorité souveraine).",
    "cognatesFr": [
      "patriarcal",
      "patriarche"
    ],
    "relatedConcepts": [
      "acc",
      "decl",
      "latin_root"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p14_s1_w14"
    ]
  },
  "ch1_p14_s1_w16": {
    "wordId": "ch1_p14_s1_w16",
    "translationFr": "idylliques",
    "literalTranslation": "idylliques, naïves et champêtres d'apparence pastorale",
    "grammaticalRole": "Adjectif qualificatif (idyllisch) à l'accusatif neutre pluriel en -en, épithète de « Verhältnisse ».",
    "etymology": "Dérivé avec le suffixe -isch du substantif « die Idylle », emprunté au latin « idyllium », issu du grec « eidyllion » (εἰδύλλιον = petit poème champêtre ou pastoral, littéralement 'petite image / tableau délicat', diminutif de eidos / εἶδος = forme, aspect, vue).",
    "philosophicalContext": "Sarcasme marxiste : la prétendue paix pastorale et harmonieuse des campagnes médiévales masquait la brutalité du servage et la misère rurale sous une imagerie poétique doucereuse.",
    "cognatesFr": [
      "idyllique",
      "idylle"
    ],
    "relatedConcepts": [
      "acc",
      "decl",
      "latin_root"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p14_s1_w16"
    ]
  },
  "ch1_p14_s1_w17": {
    "wordId": "ch1_p14_s1_w17",
    "translationFr": "rapports / relations sociales",
    "literalTranslation": "rapports sociaux objectifs, relations structurelles de production (accusatif neutre pluriel)",
    "grammaticalRole": "Nom neutre pluriel (das Verhältnis -> die Verhältnisse) à l'accusatif pluriel déterminé par l'adjectif indéfini « alle », COD du verbe parfait « zerstört ».",
    "etymology": "Substantif abstrait dérivé avec le suffixe neutre « -nis » (en vieux haut-allemand -nassi / -nissa, cognat de l'anglais -ness) sur le verbe réfléchi « sich verhalten » (se comporter, se rapporter mutuellement à, de la particule ver- et de halten = tenir fermement, garder, en vieux haut-allemand haltan). Le terme a évolué au XVIIIe siècle de la proportion géométrique vers la relation sociale objective entre les hommes.",
    "philosophicalContext": "Maximilien Rubel, Jacques Rancière et Étienne Balibar ont insisté sur la rigueur de la traduction : « Verhältnisse » désigne les rapports sociaux de production (Produktionsverhältnisse) et non de simples « conditions » (qui se disent Bedingungen). Les rapports féodaux, drapés de piété patriarcale et d'illusions religieuses, sont dissous et anéantis par le capital.",
    "relatedConcepts": [
      "acc",
      "plural",
      "hist_mat",
      "feudalism"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p14_s1_w17"
    ],
    "contextNote": "Concept clé du matérialisme historique. Strictement découplé des adjectifs énumérés."
  },
  "ch1_p14_s1_w18": {
    "wordId": "ch1_p14_s1_w18",
    "translationFr": "a détruit / anéanti",
    "literalTranslation": "détruit de fond en comble, anéanti en éclats (participe passé du verbe inséparable zerstören)",
    "grammaticalRole": "Participe passé (Partizip II) du verbe transitif inséparable « zerstören », formant le passé composé (Perfekt) avec l'auxiliaire « hat ».",
    "etymology": "Composé du préfixe inséparable destructif « zer- » (marquant la dislocation complète, le broyage, en vieux haut-allemand zir- / zar-) et du verbe « stören » (troubler, saccager, en moyen haut-allemand stœren, en vieux haut-allemand stōren = disperser, disloquer, détruire, proto-germanique *stōrijaną, racine indo-européenne *strew- = répandre, démolir).",
    "relatedConcepts": [
      "prefix_verb"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p14_s1_w18"
    ]
  },
  "ch1_p14_s2_w4": {
    "wordId": "ch1_p14_s2_w4",
    "translationFr": "bariolés / disparates",
    "literalTranslation": "tachetés de multiples couleurs bigarrées (accusatif neutre pluriel)",
    "grammaticalRole": "Adjectif qualificatif composé (buntscheckig) décliné à l'accusatif neutre pluriel en -en après l'article « die », qualifiant « Feudalbande ».",
    "etymology": "Composé associant : 1° « bunt » (de plusieurs couleurs, bigarré, en moyen haut-allemand bunt, emprunté au moyen-bas-allemand bunt = fourrure de vair aux peaux grises et blanches alternées, issu de l'ancien français vair) ; 2° « scheckig » (tacheté, moucheté, dérivé de die Schecke = pourpoint bicolore ou robe tachetée au XVe siècle, emprunté à l'ancien français jaque ; étymon discuté et origine incertaine selon Kluge).",
    "philosophicalContext": "Image visuelle éclatante : la société féodale était un patchwork bigarré de statuts locaux, de coutumes bizarres et de dépendances personnelles que le capital uniformise dans la prose grise du marché.",
    "relatedConcepts": [
      "acc",
      "decl"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p14_s2_w4"
    ]
  },
  "ch1_p14_s2_w5": {
    "wordId": "ch1_p14_s2_w5",
    "translationFr": "liens féodaux",
    "literalTranslation": "liens féodaux de dépendance personnelle et hiérarchique (accusatif neutre pluriel)",
    "grammaticalRole": "Nom composé neutre pluriel (das Feudalband -> die Feudalbande) à l'accusatif pluriel, COD de « zerrissen ».",
    "etymology": "Composé associant : 1° l'adjectif « feudal » (du latin médiéval feudalis, fief) ; 2° « das Band » (le lien, l'attache, la chaîne, en moyen haut-allemand bant, vieux haut-allemand bant, déverbal apophonique du verbe fort binden = lier, attacher, proto-germanique *bindaną).",
    "philosophicalContext": "Sous la féodalité, les liens unissant le serf au seigneur étaient bariolés et multiples (hommage, foi, vasselage, obligations religieuses, coutumes locales). Le capitalisme a brisé impitoyablement ces chaînes traditionnelles pour ne laisser subsister qu'un seul lien : l'argent nu.",
    "syntaxNote": "Attention philologique : « Feudalbande » est ici le pluriel neutre régulier en -e du nom neutre « das Band » (le lien, l'attache physique ou morale, pluriel : die Bande), et nullement le substantif féminin singulier die Bande (la bande de malfaiteurs).",
    "cognatesFr": [
      "bande",
      "bandage",
      "fief"
    ],
    "relatedConcepts": [
      "comp_noun",
      "acc",
      "plural",
      "feudalism"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p14_s2_w5"
    ],
    "contextNote": "Lafargue traduit « les liens féodaux multicolores ». Strictement découplé de l'article « die » et de l'adjectif « buntscheckigen »."
  },
  "ch1_p14_s2_w13": {
    "wordId": "ch1_p14_s2_w13",
    "translationFr": "supérieurs / maîtres",
    "literalTranslation": "ceux placés au-dessus / chefs",
    "grammaticalRole": "Participe passé substantivé au datif pluriel.",
    "etymology": "Participe passé substantivé de « vorsetzen » (placer devant ou au-dessus).",
    "philosophicalContext": "Ironie mordante de Marx contre l'idéologie aristocratique qui présentait la domination du seigneur sur le paysan comme une hiérarchie « naturelle » providentiellement ordonnée par Dieu.",
    "relatedConcepts": [
      "acc",
      "decl"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p14_s2_w13"
    ]
  },
  "ch1_p14_s2_w14": {
    "wordId": "ch1_p14_s2_w14",
    "translationFr": "liaient / attachaient",
    "literalTranslation": "nouaient fermement par des nœuds (verbe faible au prétérit pluriel)",
    "grammaticalRole": "Verbe faible (knüpfen) à la 3e personne du pluriel du prétérit de l'indicatif. Rejeté en fin de proposition relative régie par « die ».",
    "etymology": "Issu du moyen haut-allemand « knüpfen / knüpfen », vieux haut-allemand « knuppen » (nouer fermement). Dérivé du substantif germanique *knuppaz (bouton, nœud serré, bosse, d'où proviennent l'allemand Knopf et Knorren).",
    "relatedConcepts": [
      "sub_clause"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p14_s2_w14"
    ]
  },
  "ch1_p14_s2_w16": {
    "wordId": "ch1_p14_s2_w16",
    "translationFr": "sans pitié / impitoyablement",
    "literalTranslation": "sans miséricorde dans le cœur, avec une dureté inflexible (adverbe de manière)",
    "grammaticalRole": "Adverbe de manière modifiant le participe verbal « zerrissen ».",
    "etymology": "Composé du préfixe privatif germanique « un- » et de l'adjectif « barmherzig » (miséricordieux), calque chrétien du vieux haut-allemand « armherzi » (VIIIe siècle) forgé sur le latin ecclésiastique « misericors » (*miser* = pauvre, indigent -> arm ; *cor* = cœur -> herza), renforcé en moyen haut-allemand par le préfixe bi- / be- (*be-arm-herzic*).",
    "relatedConcepts": [
      "adv",
      "latin_root"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p14_s2_w16"
    ]
  },
  "ch1_p14_s2_w17": {
    "wordId": "ch1_p14_s2_w17",
    "translationFr": "a déchiré / a brisé en morceaux",
    "literalTranslation": "a lacéré, rompu violemment en lambeaux (participe passé du verbe fort zerreißen)",
    "grammaticalRole": "Participe passé (Partizip II) du verbe fort transitif inséparable « zerreißen » (zerreißt, zerriss, zerrissen), formant le passé composé avec l'auxiliaire « hat ».",
    "etymology": "Composé du préfixe inséparable de rupture destructrice « zer- » (en morceaux, en lambeaux, en vieux haut-allemand zir- / zar-) et du verbe fort « reißen » (déchirer, arracher, fendre, en moyen haut-allemand rīzen, en vieux haut-allemand rīzan = fendre, graver des runes, proto-germanique *hrītanan, cognat direct de l'anglais write / écrire).",
    "relatedConcepts": [
      "prefix_verb"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p14_s2_w17"
    ]
  },
  "ch1_p14_s2_w26": {
    "wordId": "ch1_p14_s2_w26",
    "translationFr": "laissé subsister",
    "literalTranslation": "laissé en reste, réservé (participe passé de übrig|lassen)",
    "grammaticalRole": "Participe passé (Partizip II) du verbe composé séparable « übrig|lassen », dépendant de l'auxiliaire « hat ».",
    "etymology": "Composé du préverbe adjectival « übrig » (de reste, en surplus, en moyen haut-allemand überic, dérivé de über / au-dessus) et du verbe fort « lassen » (laisser, abandonner, en moyen haut-allemand lāzen, en vieux haut-allemand lāzzan, proto-germanique *lētaną, cognat de l'anglais let).",
    "relatedConcepts": [
      "sep_verb"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p14_s2_w26"
    ]
  },
  "ch1_p14_s2_w30": {
    "wordId": "ch1_p14_s2_w30",
    "translationFr": "intérêt",
    "literalTranslation": "intérêt matériel égoïste, avantage pécuniaire marchand (accusatif neutre singulier)",
    "grammaticalRole": "Nom neutre singulier (das Interesse) à l'accusatif singulier après « als das nackte ».",
    "wordIds": [
      "ch1_p14_s2_w30"
    ],
    "etymology": "Emprunt au XVIe siècle au latin classique « interesse » (être entre, participer, être important, infinitif présent substantivé de inter- « entre » et esse « être »). Substantivé en droit pour désigner le dédommagement pécuniaire d'une perte financière (« dommage et intérêt »), puis chez les philosophes des Lumières (Helvétius) pour désigner le mobile égoïste de l'action humaine.",
    "philosophicalContext": "La société bourgeoise a dépouillé toutes les relations humaines de leur parure spirituelle pour les réduire au calcul pécuniaire du profit immédiat.",
    "cognatesFr": [
      "intérêt",
      "intéresser"
    ],
    "relatedConcepts": [
      "acc",
      "latin_root"
    ],
    "difficulty": "intermediate",
    "contextNote": "Lafargue traduit « que le simple intérêt ». Strictement découplé de « das nackte »."
  },
  "ch1_p14_s2_w36": {
    "wordId": "ch1_p14_s2_w36",
    "translationFr": "au comptant / liquide",
    "literalTranslation": "nu, en espèces métalliques",
    "grammaticalRole": "Adjectif à l'accusatif féminin singulier, épithète de Zahlung.",
    "wordIds": [
      "ch1_p14_s2_w36"
    ],
    "etymology": "En moyen haut-allemand « bar » (nu, dénudé, sans parure, pur), en vieux haut-allemand « bar », proto-germanique *bazaz (nu, découvert, cognat de l'anglais bare). Dans le langage commercial, il a désigné l'argent payé à découvert sur la table, en espèces réelles immédiates.",
    "philosophicalContext": "Emprunt explicite à la critique du capitalisme de Thomas Carlyle dans 'Chartism' (1839) : le « cash payment » (paiement au comptant) est devenu le seul lien de société (« cash nexus »), rompant tout engagement d'entraide ou de fidélité communautaire.",
    "relatedConcepts": [
      "acc",
      "capital"
    ],
    "difficulty": "advanced"
  },
  "ch1_p14_s3_w5": {
    "wordId": "ch1_p14_s3_w5",
    "translationFr": "frissons",
    "literalTranslation": "frissons d'effroi ou de saisissement",
    "grammaticalRole": "Nom masculin pluriel (die Schauer) à l'accusatif, complément d'objet direct de ertränkt.",
    "wordIds": [
      "ch1_p14_s3_w5"
    ],
    "etymology": "Issu du moyen haut-allemand « schūr » (giboulée violente, averse soudaine, puis assaut, frisson d'horreur sacrée), vieux haut-allemand « scūr » (tempête, giboulée), d'origine proto-germanique *skūraz.",
    "philosophicalContext": "Marx évoque le tremblement sacré du fidèle dans la cathédrale gothique : le sentiment d'anéantissement devant le sacré religieux qui sanctifiait l'ordre féodal.",
    "relatedConcepts": [
      "acc",
      "decl"
    ],
    "difficulty": "intermediate"
  },
  "ch1_p14_s3_w8": {
    "wordId": "ch1_p14_s3_w8",
    "translationFr": "extase / exaltation mystique",
    "literalTranslation": "rêverie exaltée, exaltation mystique d'essaim (génitif neutre singulier)",
    "grammaticalRole": "Infinitif substantivé neutre (das Schwärmen), décliné au génitif neutre singulier fort en -s après l'article et l'adjectif « des frommen », premier complément de « Schauer ».",
    "wordIds": [
      "ch1_p14_s3_w8"
    ],
    "etymology": "Infinitif substantivé du verbe « schwärmen » (bourdonner, tournoyer en essaim comme des abeilles, en moyen haut-allemand swermen, dérivé du substantif Schwarm = essaim, foule en mouvement désordonné). Utilisé polémiquement par Martin Luther pour fustiger les anabaptistes et illuminés (« die Schwärmer »), puis au siècle des Lumières pour dénoncer le fanatisme religieux déréglé.",
    "philosophicalContext": "Marx démasque l'extase et la dévotion religieuse comme des narcotiques idéologiques qui sanctifiaient l'ordre féodal en détournant les masses de la contestation matérielle.",
    "relatedConcepts": [
      "gen"
    ],
    "difficulty": "advanced",
    "contextNote": "Complément déterminant « Schauer » (frissons sacrés). Rétablissement de l'analyse grammaticale rigoureuse (infinitif substantivé neutre et non nom féminin)."
  },
  "ch1_p14_s3_w12": {
    "wordId": "ch1_p14_s3_w12",
    "translationFr": "enthousiasme / ferveur",
    "literalTranslation": "transport d'esprit / animation sacrée",
    "grammaticalRole": "Nom féminin singulier (die Begeisterung) au génitif singulier après « der », deuxième complément de Schauer.",
    "wordIds": [
      "ch1_p14_s3_w12"
    ],
    "etymology": "Substantif en « -ung » formé sur le verbe « begeistern » (insuffler un esprit divin, enthousiasmer), forgé au XVIIIe siècle (notamment par Herder) sur « der Geist » (l'esprit, souffle, âme, en vieux haut-allemand geist, racine proto-germanique *gaistaz, cognat de l'anglais ghost).",
    "philosophicalContext": "L'idéal chevaleresque (prouesse, courtoisie, vœu de croisade) n'était qu'un fard poétique masquant la violence des seigneurs et l'assujettissement des serfs.",
    "relatedConcepts": [
      "gen",
      "feudalism"
    ],
    "difficulty": "intermediate"
  },
  "ch1_p14_s3_w16": {
    "wordId": "ch1_p14_s3_w16",
    "translationFr": "mélancolie / sentimentalité nostalgique",
    "literalTranslation": "tristesse d'âme, mélancolie douloureuse (génitif féminin singulier)",
    "grammaticalRole": "Nom féminin singulier (die Wehmut) au génitif singulier après « der spießbürgerlichen ».",
    "wordIds": [
      "ch1_p14_s3_w16"
    ],
    "etymology": "Issu du moyen haut-allemand « wēmuot », vieux haut-allemand « wēmuoti » (affliction d'âme, douleur intime, tristesse), composé germanique associant : 1° l'interjection de douleur « wē / wehe » (hélas, malheur, interjection germanique commune *wai, cognat du latin vae !) ; 2° « der Mut » (la disposition intérieure de l'âme, l'humeur, en vieux haut-allemand muot, proto-germanique *mōdaz, cognat de l'anglais mood).",
    "philosophicalContext": "La mélancolie petite-bourgeoise est l'expression affective de la classe condamnée par le progrès technique : elle pleure un passé corporatif idéalisé et refuse le combat révolutionnaire moderne.",
    "relatedConcepts": [
      "gen"
    ],
    "difficulty": "advanced",
    "contextNote": "Lafargue traduit « de la sentimentalité petite-bourgeoise ». Strictement découplé de l'adjectif « spießbürgerlichen ». Troisième complément de « Schauer »."
  },
  "ch1_p14_s3_w20": {
    "wordId": "ch1_p14_s3_w20",
    "translationFr": "eau",
    "literalTranslation": "eau, élément liquide froid et dissolvant (datif neutre singulier)",
    "grammaticalRole": "Nom neutre singulier (das Wasser) au datif singulier après « in dem eiskalten ».",
    "wordIds": [
      "ch1_p14_s3_w20"
    ],
    "etymology": "Issu du moyen haut-allemand « wazzer », vieux haut-allemand « wazzar » (l'eau, l'élément fluide), du proto-germanique *watōr, issu de la racine indo-européenne fondamentale *wódr̥ (d'où proviennent l'anglais water, le grec húdōr / hydre, et le slave voda / vodka).",
    "philosophicalContext": "Métaphore saisissante du baptême inversé : l'eau bourgeoise n'est pas l'eau tiède de la régénération chrétienne, mais l'eau glacée du calcul égoïste qui noie les illusions métaphysiques pour imposer la rationalité impitoyable du profit marchand.",
    "cognatesFr": [
      "eau",
      "onde",
      "hydro-"
    ],
    "relatedConcepts": [
      "dat"
    ],
    "difficulty": "intermediate",
    "contextNote": "Lafargue traduit « dans les eaux glacées ». Le mot isolé est le nom neutre singulier au datif, strictement découplé de « dem eiskalten »."
  },
  "ch1_p14_s3_w22": {
    "wordId": "ch1_p14_s3_w22",
    "translationFr": "calcul",
    "literalTranslation": "action de chiffrer / comput",
    "grammaticalRole": "Nom féminin singulier au génitif singulier, complément déterminatif de Wasser.",
    "wordIds": [
      "ch1_p14_s3_w22"
    ],
    "etymology": "Substantif en « -ung » dérivé du verbe transitif « berechnen » (calculer, chiffrer), formé sur « rechnen » (compter, en vieux haut-allemand rehhanōn, ordonner, évaluer).",
    "philosophicalContext": "La rationalité économique bourgeoise ne reconnaît qu'une seule valeur : la rentabilité comptable, où chaque être et chaque rapport est converti en colonne de débit et de crédit.",
    "cognatesFr": [
      "égoïste"
    ],
    "relatedConcepts": [
      "gen",
      "capital"
    ],
    "difficulty": "intermediate"
  },
  "ch1_p14_s3_w23": {
    "wordId": "ch1_p14_s3_w23",
    "translationFr": "a noyé",
    "literalTranslation": "a submergé dans l'eau jusqu'à ce que mort s'ensuive (participe passé causatif)",
    "grammaticalRole": "Participe passé (Partizip II) du verbe causatif faible « ertränken », fermant la proposition principale avec l'auxiliaire « hat ».",
    "etymology": "Verbe causatif en *-jan dérivé du verbe fort « trinken » (boire, en moyen haut-allemand trinken, en vieux haut-allemand trinkan, proto-germanique *trinkanan). en moyen haut-allemand trenken / ertrenken, en vieux haut-allemand trenken (faire boire, abreuver, submerger), avec préfixe perfectif destructif « er- » marquant l'anéantissement mortel.",
    "relatedConcepts": [
      "prefix_verb"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p14_s3_w23"
    ]
  },
  "ch1_p14_s4_w5": {
    "wordId": "ch1_p14_s4_w5",
    "translationFr": "dignité",
    "literalTranslation": "valeur / honneur intrinsèque",
    "grammaticalRole": "Nom féminin singulier (die Würde) à l'accusatif singulier, complément d'objet direct de aufgelöst.",
    "wordIds": [
      "ch1_p14_s4_w5"
    ],
    "etymology": "Issu du moyen haut-allemand « wirde / werde » (valeur, dignité, honneur, noblesse), vieux haut-allemand « wirdī », dérivé de l'adjectif « wert » (digne, estimable, de grand prix).",
    "philosophicalContext": "Contre Kant qui posait dans les 'Fondements de la métaphysique des mœurs' (1785) : « Ce qui a un prix peut être remplacé par autre chose d'équivalent ; ce qui est au-dessus de tout prix possède une dignité (Würde) », Marx constate avec amertume que le capitalisme anéantit cette frontière et assigne un prix marchand à l'être humain.",
    "relatedConcepts": [
      "acc",
      "capital"
    ],
    "difficulty": "intermediate"
  },
  "ch1_p14_s4_w8": {
    "wordId": "ch1_p14_s4_w8",
    "translationFr": "valeur d'échange",
    "literalTranslation": "valeur d'échange, proportion quantitative d'équivalence marchande (accusatif masculin singulier)",
    "grammaticalRole": "Nom composé masculin singulier (der Tauschwert) à l'accusatif singulier après « in den », terme de la dissolution de « die persönliche Würde ».",
    "etymology": "Composé économique unissant : 1° « der Tausch » (l'échange de biens, le troc, en moyen haut-allemand tūsch = tromperie, ruse de foire, troc, déverbal de tuschen = échanger, étymologie incertaine discutée par Pfeifer et Kluge) ; 2° « der Wert » (la valeur, le prix d'un bien, en moyen haut-allemand wert, vieux haut-allemand werd, du proto-germanique *werþaz = équivalent, digne de prix).",
    "philosophicalContext": "Théorie de l'aliénation et de la marchandise : le capitalisme convertit la dignité personnelle incommensurable en une simple grandeur marchande abstraite et négociable sur le marché.",
    "cognatesFr": [
      "valeur"
    ],
    "relatedConcepts": [
      "comp_noun",
      "acc",
      "bourgeoisie",
      "hist_mat"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p14_s4_w8"
    ],
    "contextNote": "Lafargue traduit « dans la valeur d'échange ». Strictement découplé de l'article « den »."
  },
  "ch1_p14_s4_w9": {
    "wordId": "ch1_p14_s4_w9",
    "translationFr": "a dissous / résolu",
    "literalTranslation": "a liquéfié, désagrégé complètement en solution (participe passé du verbe à particule auf|lösen)",
    "grammaticalRole": "Participe passé (Partizip II) du verbe à particule séparable « auf|lösen », formant le passé composé avec « hat ».",
    "etymology": "Composé séparable associant « auf » (vers le haut, ouverture complète, en vieux haut-allemand ūf) et le verbe faible « lösen » (délier, détacher, en moyen haut-allemand lœsen, en vieux haut-allemand lōsjan, dérivé de l'adjectif los = libre, détaché, proto-germanique *lausaz, racine indo-européenne *lewh₁- = délier, laver, cognat du grec lyein / λύειν = délier, dissoudre).",
    "philosophicalContext": "Terme de la chimie et de la dialectique : une consistance éthique concrète est dissoute dans l'acide universel de la monnaie.",
    "cognatesFr": [
      "analyse",
      "paralysie"
    ],
    "relatedConcepts": [
      "sep_verb"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p14_s4_w9"
    ]
  },
  "ch1_p14_s4_w16": {
    "wordId": "ch1_p14_s4_w16",
    "translationFr": "scellées / garanties par charte",
    "literalTranslation": "consignées par écrit sur lettre patente ou charte juridique (participe passé adjectivé)",
    "grammaticalRole": "Participe passé adjectivé du verbe « verbriefen », décliné au génitif féminin pluriel en -en après « der zahllosen ».",
    "etymology": "Composé du préfixe transitif « ver- » et du substantif « der Brief » (charte scellée, lettre, diplôme). en moyen haut-allemand brief, emprunt très ancien du VIIIe siècle au latin classique brevis (court), via le bas-latin breve / brevis libellus (écrit abrégé consignant un acte légal ou un privilège royal).",
    "philosophicalContext": "Désigne l'ensemble des chartes médiévales et immunités par lesquelles les rois et évêques reconnaissaient par écrit les privilèges corporatifs locaux.",
    "relatedConcepts": [
      "gen",
      "feudalism"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p14_s4_w16"
    ]
  },
  "ch1_p14_s4_w18": {
    "wordId": "ch1_p14_s4_w18",
    "translationFr": "si chèrement acquises / légitimes",
    "literalTranslation": "bien et légitimement acquises par un long labeur historique (génitif féminin pluriel)",
    "grammaticalRole": "Adjectif composé au génitif féminin pluriel en -en, coordonné à « verbrieften ».",
    "etymology": "Composé juridique traditionnel associant : 1° l'adverbe « wohl » (bien, légitimement, en vieux haut-allemand wola) ; 2° « erworben », participe passé du verbe fort « erwerben » (acquérir par le travail, en moyen haut-allemand erwerben, en vieux haut-allemand erwerban = s'affairer, accomplir par un effort soutenu, issu de hwerban = aller et venir, tourner). Formule juridique de l'Ancien Régime : les 'droits acquis' (wohlerworbene Rechte).",
    "relatedConcepts": [
      "gen",
      "comp_word"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p14_s4_w18"
    ]
  },
  "ch1_p14_s4_w19": {
    "wordId": "ch1_p14_s4_w19",
    "translationFr": "franchises / libertés",
    "literalTranslation": "libertés coutumières, privilèges féodaux locaux et franchises jurées (génitif féminin pluriel)",
    "grammaticalRole": "Nom féminin pluriel (die Freiheit -> die Freiheiten) au génitif pluriel après « der zahllosen verbrieften und wohlerworbenen ».",
    "etymology": "Dérivé abstrait en « -heit » de l'adjectif « frei » (libre, franc d'obligations serviles, en moyen haut-allemand vrī, vieux haut-allemand frī, proto-germanique *frijaz = aimé, chéri, de la racine indo-européenne *priyos = cher, aimé, qui a aussi donné Freund / ami).",
    "philosophicalContext": "Marx opère une distinction juridique fondamentale : les « libertés » médiévales au pluriel étaient en réalité des franchises locales, des exemptions de taxes et des privilèges corporatifs d'Ancien Régime. La bourgeoisie les liquide pour leur substituer la liberté unique et impitoyable du commerce.",
    "relatedConcepts": [
      "gen",
      "plural",
      "feudalism"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p14_s4_w19"
    ],
    "contextNote": "Lafargue traduit « libertés si chèrement conquises ». Strictement découplé de toute préposition française."
  },
  "ch1_p14_s4_w22": {
    "wordId": "ch1_p14_s4_w22",
    "translationFr": "impitoyable / sans scrupule",
    "literalTranslation": "dépourvue de toute conscience morale, éhontée (accusatif féminin singulier)",
    "grammaticalRole": "Adjectif qualificatif composé (gewissenlos) à l'accusatif féminin singulier en -e après « die eine », qualifiant « Handelsfreiheit ».",
    "etymology": "Composé associant : 1° « das Gewissen » (la conscience morale, en moyen haut-allemand gewizzen, calque chrétien savant du vieux haut-allemand giwizzani sur le latin conscientia, dérivé du verbe wissen = savoir) ; 2° le suffixe privatif « -los » (dépourvu de, sans, cognat de l'anglais -less).",
    "relatedConcepts": [
      "acc",
      "comp_word"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p14_s4_w22"
    ]
  },
  "ch1_p14_s4_w23": {
    "wordId": "ch1_p14_s4_w23",
    "translationFr": "liberté du commerce",
    "literalTranslation": "liberté du négoce marchand",
    "grammaticalRole": "Nom féminin composé à l'accusatif singulier.",
    "wordIds": [
      "ch1_p14_s4_w23"
    ],
    "etymology": "Composé associant : 1° « der Handel » (commerce, négoce, déverbal de handeln = agir, commercer, issu de Hand / main) ; 2° consonne de liaison -s- ; 3° « die Freiheit » (la liberté, vieux haut-allemand frīhals).",
    "philosophicalContext": "Coup de force critique magistral : à la place des multiples franchises protectrices du passé, la bourgeoisie n'érige qu'une seule liberté : celle d'exploiter sans entrave le travail d'autrui sur le marché.",
    "relatedConcepts": [
      "acc",
      "comp_noun",
      "capital"
    ],
    "difficulty": "advanced"
  },
  "ch1_p14_s5_w6": {
    "wordId": "ch1_p14_s5_w6",
    "translationFr": "mot / terme",
    "literalTranslation": "mot, parole",
    "grammaticalRole": "Nom neutre singulier au datif après « mit ».",
    "wordIds": [
      "ch1_p14_s5_w6"
    ],
    "etymology": "Du moyen haut-allemand « wort », vieux haut-allemand « wort » (parole, verbe). Proto-germanique *wurda- (cognat du latin verbum et de l'anglais word).",
    "cognatesFr": [
      "verbe"
    ],
    "relatedConcepts": [
      "dat"
    ],
    "difficulty": "basic"
  },
  "ch1_p14_s5_w16": {
    "wordId": "ch1_p14_s5_w16",
    "translationFr": "illusions",
    "literalTranslation": "illusions mystificatrices, fictions idéologiques trompeuses (datif féminin pluriel)",
    "grammaticalRole": "Nom féminin pluriel (die Illusion -> die Illusionen) au datif pluriel après « mit religiösen und politischen ».",
    "etymology": "Emprunt savant au latin classique « illusio » (raillerie, tromperie des sens, action de se jouer de quelqu'un), déverbal de « illudere » (se moquer, abuser, composé de in- « contre, sur » et ludere « jouer »).",
    "philosophicalContext": "Théorie du déchirement du voile mystique et de l'Entzauberung : sous la féodalité, le surtravail paysan était extorqué sous le couvert d'obligations sacrées, du droit divin et de la fidélité chevaleresque. La bourgeoisie déchire impitoyablement ces illusions pour révéler l'extorsion de surtravail dans sa vérité nue.",
    "cognatesFr": [
      "illusion",
      "illusoire"
    ],
    "relatedConcepts": [
      "dat",
      "plural",
      "latin_root",
      "hist_mat"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p14_s5_w16"
    ],
    "contextNote": "Complément instrumental après « mit ». Fiche enrichie au plus haut niveau conceptuel."
  },
  "ch1_p14_s5_w17": {
    "wordId": "ch1_p14_s5_w17",
    "translationFr": "voilée / masquée / dissimulée",
    "literalTranslation": "dissimulée sous un voile, enveloppée d'un manteau trompeur (participe passé au génitif féminin singulier)",
    "grammaticalRole": "Participe passé adjectivé du verbe inséparable « verhüllen », décliné au génitif féminin singulier en -en après « der », épithète de « Ausbeutung ».",
    "etymology": "Composé du préfixe verbal transitif d'occultation « ver- » et du verbe « hüllen » (envelopper, couvrir d'un voile, en moyen haut-allemand hüllen, vieux haut-allemand hullen), dérivé du substantif « die Hülle » (le voile, l'enveloppe protectrice, vieux haut-allemand hulla, du proto-germanique *huljaną = couvrir, cacher, issu de la racine indo-européenne *ḱel- = cacher, dérober, d'où proviennent le latin celare, occultere, et l'allemand hehlen).",
    "relatedConcepts": [
      "gen",
      "decl",
      "prefix_verb",
      "hist_mat"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p14_s5_w17"
    ],
    "contextNote": "Participe passé passif qualifiant la première forme d'exploitation (l'exploitation féodale).",
    "philosophicalContext": "Concept décisif d'Entzauberung (désenchantement du monde) et de déchirement du voile mystique : Marx anticipe Max Weber en montrant que le mode de production capitaliste procède à une laïcisation brutale et démystificatrice de la société. En déchirant le voile religieux qui sanctifiait l'ordre seigneurial, le capital contraint l'humanité à contempler avec lucidité ses conditions d'existence réelles."
  },
  "ch1_p14_s5_w18": {
    "wordId": "ch1_p14_s5_w18",
    "translationFr": "exploitation",
    "literalTranslation": "exploitation, extraction exhaustive d'un gisement ou d'une ressource (génitif féminin singulier)",
    "grammaticalRole": "Nom féminin singulier (die Ausbeutung) au génitif singulier après « der mit religiösen und politischen Illusionen verhüllten ».",
    "etymology": "Déverbal en « -ung » formé sur le verbe préfixé « ausbeuten » (extraire complètement le minerai d'une fosse, exploiter un filon jusqu'à épuisement). Le terme appartenait au lexique technique des mineurs saxons et du Harz (du moyen haut-allemand bōte, vieux haut-allemand būta, déverbal de « die Beute » = le butin, le gain utile). Marx opère un transfert métaphorique fondamental de l'exploitation minérale à l'exploitation économique de l'homme par l'homme : l'extraction systématique du surtravail et de la plus-value ouvrière.",
    "philosophicalContext": "L'exploitation n'a pas été inventée par la bourgeoisie : toutes les sociétés de classe reposent sur l'extorsion de surtravail au profit d'une minorité oisive. Mais le capitalisme en dépouille le mécanisme de toute légitimation extra-économique.",
    "cognatesFr": [
      "butin"
    ],
    "relatedConcepts": [
      "gen",
      "class_struggle",
      "hist_mat"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p14_s5_w18"
    ],
    "contextNote": "Premier terme du chiasme historique opposant l'exploitation féodale voilée à l'exploitation bourgeoise directe."
  },
  "ch1_p14_s5_w20": {
    "wordId": "ch1_p14_s5_w20",
    "translationFr": "ouverte",
    "literalTranslation": "ouverte au grand jour, non dissimulée (accusatif féminin singulier)",
    "grammaticalRole": "Adjectif qualificatif (offen) à l'accusatif féminin singulier en -e après « die », premier terme de l'énumération qualifiant « Ausbeutung ».",
    "etymology": "Issu du moyen haut-allemand « offen », vieux haut-allemand « offan » (ouvert, manifeste, public). Proto-germanique *upana- (ouvert, dressé vers le haut, cognat de l'anglais open, lié à la préposition auf / up).",
    "relatedConcepts": [
      "acc",
      "decl"
    ],
    "difficulty": "basic",
    "wordIds": [
      "ch1_p14_s5_w20"
    ]
  },
  "ch1_p14_s5_w22": {
    "wordId": "ch1_p14_s5_w22",
    "translationFr": "éhontée / sans pudeur",
    "literalTranslation": "dépourvue de toute honte ou retenue, impudente (accusatif féminin singulier)",
    "grammaticalRole": "Adjectif qualificatif (unverschämt) à l'accusatif féminin singulier en -e, deuxième épithète de l'énumération.",
    "etymology": "Composé du préfixe négatif « un- » et du participe « verschämt » (pudique, modeste), dérivé de « die Scham » (la honte, pudeur morale, en moyen haut-allemand scham, en vieux haut-allemand scama, proto-germanique *skamō = honte, issu de la racine indo-européenne *(s)kem- = couvrir, cacher).",
    "philosophicalContext": "Le capitalisme ne prend plus la peine de justifier l'inégalité par des mythes de sang noble : il revendique fièrement la recherche effrénée du profit.",
    "relatedConcepts": [
      "acc",
      "decl"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p14_s5_w22"
    ]
  },
  "ch1_p14_s5_w24": {
    "wordId": "ch1_p14_s5_w24",
    "translationFr": "directe",
    "literalTranslation": "directe, sans intermédiaire féodal ni médiation spirituelle (accusatif féminin singulier)",
    "grammaticalRole": "Adjectif qualificatif (direkt) à l'accusatif féminin singulier en -e, troisième épithète de l'énumération.",
    "etymology": "Emprunt au XVIIe siècle au latin classique « directus » (droit, en ligne droite, franc), participe passé de « dirigere » (aligner, diriger, composé de dis- et regere / mener droit).",
    "cognatesFr": [
      "direct",
      "direction"
    ],
    "relatedConcepts": [
      "acc",
      "latin_root"
    ],
    "difficulty": "basic",
    "wordIds": [
      "ch1_p14_s5_w24"
    ]
  },
  "ch1_p14_s5_w26": {
    "wordId": "ch1_p14_s5_w26",
    "translationFr": "aride / décharnée / sans fard",
    "literalTranslation": "sèche, aride, décharnée, dépouillée de tout ornement (adjectif à l'accusatif féminin singulier)",
    "grammaticalRole": "Adjectif qualificatif décliné à l'accusatif féminin singulier en -e après « die », épithète de « Ausbeutung ».",
    "etymology": "Issu du moyen haut-allemand « dürre », vieux haut-allemand « durri » (sec, aride, desséché, stérile, amaigri), du proto-germanique *þursuz (desséché par la soif), rattaché à la racine indo-européenne *ters- (sécher, soif, d'où proviennent le latin torrere, terra, et l'anglais thirst).",
    "philosophicalContext": "L'adjectif « dürr » (sec, aride, décharné) achève magistralement l'opération de désenchantement (Entzauberung) : le rapport d'exploitation capitaliste est d'une aridité clinique, sans poésie, sans fard moral ni paternalisme féodal, réduit à la froideur mathématique d'un bilan comptable.",
    "relatedConcepts": [
      "acc",
      "decl",
      "hist_mat"
    ],
    "difficulty": "advanced",
    "wordIds": [
      "ch1_p14_s5_w26"
    ],
    "contextNote": "Quatrième et ultime adjectif de la gradation impitoyable caractérisant l'exploitation capitaliste."
  },
  "ch1_p14_s5_w27": {
    "wordId": "ch1_p14_s5_w27",
    "translationFr": "exploitation",
    "literalTranslation": "exploitation nue et directe de la force de travail salariée (accusatif féminin singulier)",
    "grammaticalRole": "Nom féminin singulier (die Ausbeutung) à l'accusatif singulier après « die offene, unverschämte, direkte, dürre », COD de « gesetzt ».",
    "philosophicalContext": "Chiasme historique et anaphore antithétique monumentale qui clôt le paragraphe 14 : la bourgeoisie n'a nullement émancipé l'humanité de l'exploitation féodale ; elle a simplement substitué à une exploitation voilée d'illusions pieuses une exploitation ouverte, éhontée, directe et cynique, posant ainsi les conditions de sa destruction révolutionnaire.",
    "relatedConcepts": [
      "acc",
      "class_struggle",
      "bourgeoisie",
      "hist_mat"
    ],
    "difficulty": "advanced",
    "etymology": "Déverbal en « -ung » de « ausbeuten » (extraire exhaustivement le minerai d'une veine, du moyen haut-allemand būta / Beute). Terme de l'industrie minière saxonne transposé par Marx à l'extorsion méthodique de la plus-value sur le travail vivant.",
    "wordIds": [
      "ch1_p14_s5_w27"
    ],
    "contextNote": "Clôture anaphorique monumentale du paragraphe 14. Fiche autonome complète sans renvoi."
  },
  "ch1_p10_s3_w13": {
    "wordId": "ch1_p10_s3_w13",
    "translationFr": "la même / cette même",
    "literalTranslation": "dans cette même (mesure), dans la même proportion",
    "grammaticalRole": "Pronom / adjectif démonstratif d'identité (derselbe -> demselben) au datif neutre singulier, s'accordant avec « Maße » pour former la locution corrélative « in demselben Maße, worin... » (au fur et à mesure que).",
    "etymology": "Composé unissant l'article démonstratif « der » et le pronom germanique d'identité « selb » (identique, en vieux haut-allemand selbo, en moyen haut-allemand selbe, issu du proto-germanique *selbaz = de soi-même, propre, cognat de l'anglais self).",
    "syntaxNote": "Structure corrélative temporelle et quantitative : « in demselben Maße, worin » (au fur et à mesure que).",
    "relatedConcepts": [
      "dat"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p10_s3_w13"
    ]
  },
  "ch1_p10_s3_w28": {
    "wordId": "ch1_p10_s3_w28",
    "translationFr": "la même / cette même",
    "literalTranslation": "dans cette même (mesure), dans la même proportion",
    "grammaticalRole": "Pronom / adjectif démonstratif d'identité (derselbe -> demselben) au datif neutre singulier, s'accordant avec « Maße » pour introduire la proposition principale corrélative.",
    "etymology": "Composé de « der » et « selb » (en vieux haut-allemand selbo, en moyen haut-allemand selbe, issu du proto-germanique *selbaz = de soi-même, cognat de l'anglais self).",
    "relatedConcepts": [
      "dat"
    ],
    "difficulty": "intermediate",
    "wordIds": [
      "ch1_p10_s3_w28"
    ]
  },
  "ch1_p14_s3_w15": {
    "wordId": "ch1_p14_s3_w15",
    "translationFr": "petite-bourgeoise / philistine",
    "literalTranslation": "de petit-bourgeois étriqué, de philistin borné (génitif féminin singulier)",
    "grammaticalRole": "Adjectif qualificatif décliné au génitif féminin singulier en -en après l'article « der ».",
    "wordIds": [
      "ch1_p14_s3_w15"
    ],
    "etymology": "Dérivé au moyen du suffixe « -lich » de « Spießbürger » (petit-bourgeois borné, philistin). Composé historique associant : 1° « der Spieß » (la pique de fer, arme d'hast modeste des miliciens bourgeois gardant les remparts municipaux, en moyen haut-allemand spiez, vieux haut-allemand spioz, proto-germanique *speutaz) ; 2° « der Bürger » (le bourgeois). Étymologie documentée chez Kluge et Pfeifer : le milicien armé d'une simple pique, par opposition au noble armé d'une épée et d'un cheval, est devenu au XVIIIe siècle dans le jargon des étudiants une épithète méprisante désignant le boutiquier timoré et conformiste.",
    "philosophicalContext": "Marx stigmatise la sentimentalité régressive et pleurnicharde des petits artisans et boutiquiers qui se lamentent sur la ruine de leurs privilèges d'atelier sans comprendre la marche de l'histoire.",
    "relatedConcepts": [
      "gen",
      "decl",
      "bourgeoisie"
    ],
    "difficulty": "advanced",
    "contextNote": "Épithète de « Wehmut ». Strictement découplé du substantif « Wehmut »."
  },
  "ch1_p14_s3_w11": {
    "wordId": "ch1_p14_s3_w11",
    "translationFr": "chevaleresque",
    "literalTranslation": "propre aux chevaliers",
    "grammaticalRole": "Adjectif qualificatif au génitif féminin singulier, épithète de Begeisterung.",
    "wordIds": [
      "ch1_p14_s3_w11"
    ],
    "etymology": "Dérivé en « -lich » de « Ritter » (chevalier noble, cavalier d'armes), emprunt du bas-allemand ou néerlandais « ridder », issu du verbe fort « reiten » (chevaucher, en vieux haut-allemand rītan, proto-germanique *rīdanan).",
    "philosophicalContext": "L'idéal chevaleresque (prouesse, courtoisie, vœu de croisade) n'était qu'un fard poétique masquant la violence des seigneurs et l'assujettissement des serfs.",
    "relatedConcepts": [
      "gen",
      "feudalism"
    ],
    "difficulty": "intermediate"
  },
  "ch1_p14_s3_w7": {
    "wordId": "ch1_p14_s3_w7",
    "translationFr": "pieuse / religieuse",
    "literalTranslation": "dévote, pieuse",
    "grammaticalRole": "Adjectif qualificatif au génitif féminin singulier, épithète de Schwärmerei.",
    "wordIds": [
      "ch1_p14_s3_w7"
    ],
    "etymology": "Du moyen haut-allemand « vrum / vrom » (brave, vaillant, utile, pieux), vieux haut-allemand « fruma » (utilité, profit). Évolution sémantique de l'utilité chevaleresque vers la dévotion pieuse sous l'influence du christianisme médiéval.",
    "philosophicalContext": "La piété médiévale fournissait la caution transcendante légitimant l'ordre féodal hiérarchique.",
    "relatedConcepts": [
      "gen"
    ],
    "difficulty": "basic"
  },
  "ch1_p14_s3_w4": {
    "wordId": "ch1_p14_s3_w4",
    "translationFr": "sacrés",
    "literalTranslation": "sacrés, consacrés",
    "grammaticalRole": "Adjectif qualificatif à l'accusatif masculin pluriel, épithète de Schauer.",
    "wordIds": [
      "ch1_p14_s3_w4"
    ],
    "etymology": "Du moyen haut-allemand « heilic », vieux haut-allemand « heilig » (consacré, intact), dérivé de « heil » (sain, intègre, sauvé).",
    "relatedConcepts": [
      "acc"
    ],
    "difficulty": "basic"
  },
  "ch1_p14_s3_w19": {
    "wordId": "ch1_p14_s3_w19",
    "translationFr": "glacée / glaciale",
    "literalTranslation": "froide comme la glace",
    "grammaticalRole": "Adjectif composé au datif neutre singulier, épithète de Wasser.",
    "wordIds": [
      "ch1_p14_s3_w19"
    ],
    "etymology": "Composé de « das Eis » (la glace, vieux haut-allemand īs) + « kalt » (froid, vieux haut-allemand kalt, proto-germanique *kaldaz).",
    "relatedConcepts": [
      "dat",
      "comp_adj"
    ],
    "difficulty": "basic"
  },
  "ch1_p14_s3_w21": {
    "wordId": "ch1_p14_s3_w21",
    "translationFr": "égoïste",
    "literalTranslation": "rapporté à son propre intérêt",
    "grammaticalRole": "Adjectif au génitif féminin singulier, épithète de Berechnung.",
    "wordIds": [
      "ch1_p14_s3_w21"
    ],
    "etymology": "Emprunté au français « égoïste », forgé au XVIIIe siècle sur le pronom latin « ego » (moi, je).",
    "relatedConcepts": [
      "gen"
    ],
    "difficulty": "basic"
  },
  "ch1_p14_s2_w29": {
    "wordId": "ch1_p14_s2_w29",
    "translationFr": "nu / dépouillé",
    "literalTranslation": "nu, sans fard",
    "grammaticalRole": "Adjectif qualificatif à l'accusatif neutre singulier, épithète de Interesse.",
    "wordIds": [
      "ch1_p14_s2_w29"
    ],
    "etymology": "Du moyen haut-allemand « nacket », vieux haut-allemand « naccot », proto-germanique *nakwadaz (nu, dévêtu, cognat du latin nudus).",
    "relatedConcepts": [
      "acc"
    ],
    "difficulty": "basic"
  },
  "ch1_p14_s2_w37": {
    "wordId": "ch1_p14_s2_w37",
    "translationFr": "paiement / règlement",
    "literalTranslation": "action de compter les deniers, versement",
    "grammaticalRole": "Nom féminin singulier à l'accusatif singulier.",
    "wordIds": [
      "ch1_p14_s2_w37"
    ],
    "etymology": "Déverbal en « -ung » du verbe « zahlen » (payer, en vieux haut-allemand zālōn, énumérer, compter, de Zahl / nombre).",
    "relatedConcepts": [
      "acc"
    ],
    "difficulty": "basic"
  },
  "ch1_p14_s4_w4": {
    "wordId": "ch1_p14_s4_w4",
    "translationFr": "personnelle",
    "literalTranslation": "propre à la personne",
    "grammaticalRole": "Adjectif qualificatif à l'accusatif féminin singulier, épithète de Würde.",
    "wordIds": [
      "ch1_p14_s4_w4"
    ],
    "etymology": "Dérivé de « Person » (du latin persona, masque d'acteur, rôle, sujet de droit) avec le suffixe germanique « -lich ».",
    "relatedConcepts": [
      "acc"
    ],
    "difficulty": "basic"
  }
};

Object.assign(annotations, annotationsCh2);
Object.assign(annotations, annotationsCh3Ch4);
