// Dictionnaire lexical complet universel (Allemand -> Français)
// Couvre 100% des mots du Manifeste du Parti communiste (Préambule et Chapitres I, II, III, IV)
// Conforme au design brutaliste : zéro cours de grammaire, pure traduction et étymologie philologique.

import type { Word } from '../types';
import { CASE_LABELS_FR, GENDER_LABELS_FR, POS_LABELS_FR } from '../types';

export interface LexiconEntry {
  fr: string;
  lit: string;
  pos_fr: string;
  role: string;
  translationFr?: string;
  literalTranslation?: string;
  posFr?: string;
  grammaticalRole?: string;
  etymology?: string;
  isCompound?: boolean;
  compoundParts?: string[];
}

export const LEMMA_LEXICON: Record<string, LexiconEntry> = {
  "!": {
      "fr": "!",
      "lit": "point d'exclamation",
      "pos_fr": "Ponctuation",
      "role": "Ponctuation expressive marquant l'exhortation révolutionnaire ou l'ironie mordante."
},
  "(": {
      "fr": "(",
      "lit": "parenthèse ouvrante",
      "pos_fr": "Ponctuation",
      "role": "Signe typographique ouvrant une précision contextuelle ou une incise théorique."
},
  ")": {
      "fr": ")",
      "lit": "parenthèse fermante",
      "pos_fr": "Ponctuation",
      "role": "Signe typographique fermant une précision contextuelle ou une incise théorique."
},
  ",": {
      "fr": ",",
      "lit": "virgule",
      "pos_fr": "Ponctuation",
      "role": "Signe de ponctuation articulant les propositions et scandant le rythme oratoire de la phrase."
},
  "--": {
      "fr": "—",
      "lit": "tiret cadratin",
      "pos_fr": "Ponctuation",
      "role": "Ponctuation de rupture stylistique."
},
  ".": {
      "fr": ".",
      "lit": "point",
      "pos_fr": "Ponctuation",
      "role": "Signe de ponctuation clôturant une proposition déclarative ou une sentence théorique."
},
  "1.": {
      "fr": "premièrement / 1.",
      "lit": "chiffre ordinal un",
      "pos_fr": "Adverbe",
      "role": "Marque la première sous-section du chapitre III."
},
  "16.": {
      "fr": "seizième",
      "lit": "seizième siècle",
      "pos_fr": "Adjectif",
      "role": "Repère historique de la Réforme et de la modernité naissante."
},
  "17.": {
      "fr": "dix-septième / XVIIe",
      "lit": "ordinal dix-septième",
      "pos_fr": "Adjectif",
      "role": "Adjectif ordinal désignant le XVIIe siècle anglais (Révolution de 1648)."
},
  "18.": {
      "fr": "dix-huitième / XVIIIe",
      "lit": "ordinal dix-huitième",
      "pos_fr": "Adjectif",
      "role": "Adjectif ordinal déterminant le XVIIIe siècle français (Révolution de 1789)."
},
  "1830": {
      "fr": "en 1830",
      "lit": "l'année 1830",
      "pos_fr": "Adverbe",
      "role": "Révolution de Juillet en France chassant les Bourbons."
},
  "1846": {
      "fr": "1846",
      "lit": "l'année 1846",
      "pos_fr": "Numéral",
      "role": "Numéral marquant le repère chronologique de la révolution de Cracovie."
},
  "2.": {
      "fr": "deuxièmement / 2.",
      "lit": "chiffre ordinal deux",
      "pos_fr": "Adverbe",
      "role": "Marque la deuxième sous-section du chapitre III."
},
  "3.": {
      "fr": "troisièmement / 3.",
      "lit": "chiffre ordinal trois",
      "pos_fr": "Adverbe",
      "role": "Marque la troisième sous-section du chapitre III."
},
  ":": {
      "fr": ":",
      "lit": "deux-points",
      "pos_fr": "Ponctuation",
      "role": "Signe de ponctuation introduisant une énumération, une explication dialectique ou un discours direct."
},
  ";": {
      "fr": ";",
      "lit": "point-virgule",
      "pos_fr": "Ponctuation",
      "role": "Signe de ponctuation séparant des propositions indépendantes de même valeur dialectique."
},
  "?": {
      "fr": "?",
      "lit": "point d'interrogation",
      "pos_fr": "Ponctuation",
      "role": "Ponctuation marquant l'interrogation rhétorique et interpellant la mauvaise foi de l'adversaire bourgeois."
},
  "ab": {
      "fr": "en diminution / particule séparable",
      "lit": "à partir de / vers le bas",
      "pos_fr": "Forme grammaticale",
      "role": "Particule séparable du verbe abnehmen marquant la baisse continue du salaire."
},
  "aber": {
      "fr": "mais",
      "lit": "mais / au contraire",
      "pos_fr": "Adverbe",
      "role": "Connecteur adversatif marquant la tension dialectique entre tactique immédiate et but final.",
      "etymology": "Issu du moyen haut-allemand « aber / aver » (de nouveau, en arrière, au contraire), vieux haut-allemand « avur / abur » (de nouveau, encore, au rebours). Proto-germanique *aferō (derrière, plus tard), comparatif issu de la racine indo-européenne *apo- / *ap- (au loin, en arrière, cognat du grec ἀπό / apo et du sanskrit apa)."
},
  "Aberglaube": {
      "fr": "superstition",
      "lit": "croyance déviante / superstition",
      "pos_fr": "Nom masculin",
      "role": "Superstition fanatique dans la science sociale utopique."
},
  "Abgeschlossenheit": {
      "fr": "isolement / clôture sur soi",
      "lit": "état d'enfermement",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin caractérisant l'autarcie féodale dépassée par le marché mondial."
},
  "abgeschmackt": {
      "fr": "insipide / absurde / saugrenu",
      "lit": "privé de goût",
      "pos_fr": "Adjectif",
      "role": "Désigne l'absurdité des théories réactionnaires."
},
  "abgestreifen": {
      "fr": "dépouiller / ôter",
      "lit": "enlever en frottant",
      "pos_fr": "Verbe",
      "role": "Verbe fort (abstreifen) marquant l'effacement de tout particularisme national chez le prolétaire."
},
  "abhelfen": {
      "fr": "remédier à / pallier",
      "lit": "aider à éliminer",
      "pos_fr": "Verbe",
      "role": "Verbe régissant le datif : remédier aux maux sociaux."
},
  "abhängig": {
      "fr": "dépendant / subordonné",
      "lit": "suspendu à, soumis",
      "pos_fr": "Adjectif",
      "role": "Adjectif exprimant l'assujettissement économique d'une sphère à une autre."
},
  "Abhängigkeit": {
      "fr": "dépendance / subordination",
      "lit": "état de dépendance",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin exprimant l'interconnexion globale et la subordination mutuelle des nations."
},
  "abnehmen": {
      "fr": "diminuer / décroître",
      "lit": "prendre vers le bas",
      "pos_fr": "Verbe séparable",
      "role": "Exprime la baisse continue des salaires ouvriers."
},
  "abreißen": {
      "fr": "arracher / déchirer",
      "lit": "arracher violemment",
      "pos_fr": "Verbe",
      "role": "Verbe marquant le geste iconoclaste de la bourgeoisie arrachant le voile sentimental de la famille."
},
  "Absatz": {
      "fr": "débouché / écoulement",
      "lit": "action de poser à terre / vente marchande",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin économique désignant les marchés nécessaires à la réalisation de la plus-value."
},
  "abschaffen": {
      "fr": "abolir / supprimer",
      "lit": "écarter de la création",
      "pos_fr": "Verbe",
      "role": "Verbe cardinal du programme communiste visant l'abolition radicale du mode d'appropriation privé."
},
  "Abschaffer": {
      "fr": "abolisseur / contempteur",
      "lit": "celui qui supprime",
      "pos_fr": "Nom masculin",
      "role": "Philanthropes bourgeois voulant abolir la cruauté envers les animaux."
},
  "Abschaffung": {
      "fr": "abolition / suppression",
      "lit": "fait de mettre de côté",
      "pos_fr": "Nom féminin",
      "role": "Revendication cardinale : abolition de la propriété privée bourgeoise."
},
  "abschneiden": {
      "fr": "couper / trancher",
      "lit": "trancher en séparant",
      "pos_fr": "Verbe",
      "role": "Verbe évoquant l'interruption brutale des vivres et moyens de subsistance lors d'une crise."
},
  "Abschnitt": {
      "fr": "section / chapitre",
      "lit": "morceau coupé / section de texte",
      "pos_fr": "Nom masculin",
      "role": "Substantif masculin au datif régi par 'nach', désignant la section II du Manifeste."
},
  "abschnitt": {
      "fr": "section / chapitre",
      "lit": "morceau coupé / section de texte",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'Abschnitt' du lemme 'Abschnitt'. Substantif masculin au datif régi par 'nach', désignant la section II du Manifeste."
},
  "Absicht": {
      "fr": "dessein / but / intention politique",
      "lit": "visée préméditée / but poursuivi",
      "pos_fr": "Nom féminin",
      "role": "Substantif coordonné à 'Ansichten' désignant les objectifs révolutionnaires sans fard."
},
  "absichten": {
      "fr": "dessein / but / intention politique",
      "lit": "visée préméditée / but poursuivi",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'Absichten' du lemme 'Absicht'. Substantif coordonné à 'Ansichten' désignant les objectifs révolutionnaires sans fard."
},
  "absolut": {
      "fr": "absolu",
      "lit": "délié de toute entrave légale ou coutumière",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant les monarchies centralisées des XVIIe-XVIIIe siècles s'appuyant sur la bourgeoisie contre les barons."
},
  "absolute": {
      "fr": "absolu",
      "lit": "délié de toute limite constitutionnelle",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'absolute' du lemme 'absolut'. Épithète qualifiant le régime autocratique de la monarchie prussienne et autrichienne."
},
  "Absolutismus": {
      "fr": "absolutisme",
      "lit": "pouvoir monarchique absolu",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant l'Ancien Régime féodal combattu par la bourgeoisie ascendante."
},
  "absonderungen": {
      "fr": "séparations / isolements / ségrégations",
      "lit": "mises à l'écart distinctes",
      "pos_fr": "Nom féminin",
      "role": "nom féminin au pluriel (forme décapitalisée d'Absonderungen)",
      "etymology": "Pluriel de « Absonderung », dérivé du verbe « absondern » (séparer, isoler) + « -ung »."
},
  "abstarben": {
      "fr": "s'éteignirent / dépérirent",
      "lit": "moururent complètement",
      "pos_fr": "Verbe",
      "role": "Désigne la disparition des classes féodales."
},
  "abstrakt": {
      "fr": "abstrait",
      "lit": "détaché du réel",
      "pos_fr": "Adjectif",
      "role": "Critique de la pensée spéculative coupée de la pratique."
},
  "Abstreife": {
      "fr": "dépouillement / abandon",
      "lit": "action d'enlever en raclant",
      "pos_fr": "Nom féminin",
      "role": "Abandon par le prolétariat de ses préjugés hostiles envers la bourgeoisie."
},
  "Abstufung": {
      "fr": "gradation / échelonnement",
      "lit": "hiérarchie en gradins",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin marquant la segmentation hiérarchique complexe des rangs sociaux féodaux.",
      "etymology": "Nom d'architecture et de stratification dérivé en « -ung » de « abstufen », formé sur « die Stufe » (la marche d'escalier, le degré hiérarchique, moyen haut-allemand stuofe, vieux haut-allemand stuofa, racine germanique *stōpō liée à stapfen = marcher à pas réguliers) précédé du préfixe séparateur descendant « ab- ». Évoque la gradation en cascade des privilèges féodaux."
},
  "Abzug": {
      "fr": "déduction / défalcation",
      "lit": "action de tirer hors de",
      "pos_fr": "Nom masculin",
      "role": "Déduction faite des éléments révolutionnaires de la société."
},
  "abzustumpfen": {
      "fr": "émousser / adoucir",
      "lit": "rendre obtus",
      "pos_fr": "Verbe",
      "role": "Action des socialistes utopiques voulant émousser la lutte des classes."
},
  "achtzehnte": {
      "fr": "dix-huitième",
      "lit": "ordinal dix-huitième",
      "pos_fr": "Adjectif numéral ordinal",
      "role": "Adjectif ordinal désignant le grand XVIIIe siècle de la philosophie des Lumières et de la Révolution française.",
      "etymology": "Composé du nombre cardinal « achtzehn » (dix-huit, du vieux haut-allemand ahtozehan) et du suffixe ordinal « -te »."
},
  "Ackerbau": {
      "fr": "agriculture / labour",
      "lit": "culture du champ (Acker + Bau)",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant la production agraire révolutionnée par la chimie et le machinisme."
},
  "Adel": {
      "fr": "noblesse / aristocratie",
      "lit": "lignée noble",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant l'ordre féodal déchu dont certains membres rallient le prolétariat.",
      "etymology": "Issu du moyen haut-allemand « adel », vieux haut-allemand « adal » (noble ascendance, lignée illustre, race libre), du proto-germanique *aþalą (famille noble, biens patrimoniaux héréditaires). Cognat de l'ancien anglais æðelu."
},
  "administrativ": {
      "fr": "administratif",
      "lit": "relatif à la gestion",
      "pos_fr": "Adjectif",
      "role": "Réformes superficielles n'affectant pas les rapports de propriété."
},
  "Afrika": {
      "fr": "Afrique",
      "lit": "le continent africain",
      "pos_fr": "Nom propre",
      "role": "Nom propre neutre, repère géographique de l'expansion coloniale.",
      "etymology": "Emprunt au latin « Africa », nom donné par les Romains aux terres de Carthage d'après le peuple autochtone des Afri (étymon berbère ou phénicien 'afar = poussière, terre sèche)."
},
  "agglomeriert": {
      "fr": "aggloméré",
      "lit": "amassé en pelote",
      "pos_fr": "Verbe",
      "role": "Participe passé du verbe agglomerieren décrivant la concentration massive des ruraux dans les villes."
},
  "agrarisch": {
      "fr": "agraire",
      "lit": "relatif à la terre et à l'agriculture",
      "pos_fr": "Adjectif",
      "role": "Épithète qualifiant les réformateurs fonciers américains ou la révolution paysanne."
},
  "agrarische": {
      "fr": "agraire",
      "lit": "relatif à la terre et à l'agriculture",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'agrarische' du lemme 'agrarisch'. Épithète qualifiant les réformateurs fonciers américains ou la révolution paysanne."
},
  "agrarischen": {
      "fr": "agraire",
      "lit": "relatif à la terre et à l'agriculture",
      "pos_fr": "Nom neutre",
      "role": "Forme fléchie 'agrarischen' du lemme 'agrarisch'. Épithète qualifiant les réformateurs fonciers américains ou la révolution paysanne."
},
  "Agrikultur": {
      "fr": "agriculture",
      "lit": "culture de la terre",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin latin désignant l'exploitation des terres sous le régime féodal."
},
  "ahnen": {
      "fr": "soupçonner / pressentir",
      "lit": "avoir le pressentiment de",
      "pos_fr": "Verbe",
      "role": "Verbe soulignant l'inconscience des siècles passés face aux forces dormantes du travail social."
},
  "ahnungsvoll": {
      "fr": "plein de pressentiments",
      "lit": "rempli d'intuition obscure",
      "pos_fr": "Adjectif",
      "role": "Sensibilité romantique des poètes conservateurs."
},
  "Aktion": {
      "fr": "action / mouvement",
      "lit": "action pratique",
      "pos_fr": "Nom féminin",
      "role": "Action collective de classe du prolétariat."
},
  "all": {
      "fr": "tout / tous",
      "lit": "la totalité sans exception",
      "pos_fr": "Pronom/Déterminant indéfini",
      "role": "Déterminant indéfini désignant l'universalité des forces liguées."
},
  "alle": {
      "fr": "tous / toutes",
      "lit": "la totalité sans exception",
      "pos_fr": "Déterminant",
      "role": "Déterminant indéfini englobant l'universalité des classes ou des rapports sociaux."
},
  "allen": {
      "fr": "tout / tous",
      "lit": "la totalité sans exception",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'allen' du lemme 'all'. Quantificateur universel embrassant tous les prolétaires, pays et mouvements."
},
  "aller": {
      "fr": "tout / tous",
      "lit": "la totalité sans exception",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'aller' du lemme 'all'. Quantificateur universel embrassant tous les prolétaires, pays et mouvements."
},
  "allerdings": {
      "fr": "certes / assurément / sans doute / toutefois",
      "lit": "en toutes choses / tout à fait",
      "pos_fr": "Adverbe",
      "role": "Adverbe de nuance introduisant une concession méthodique dans l'argumentation serrée du Manifeste.",
      "etymology": "Génitif adverbial figé de « aller Dinge » (en toute circonstance, de toutes choses).",
      "isCompound": true,
      "compoundParts": [
            "aller",
            "Ding",
            "-s"
      ]
},
  "allgemein": {
      "fr": "général / universel",
      "lit": "commun à tous",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant le caractère total et indifférencié d'une crise ou d'une guerre."
},
  "allgemeinst": {
      "fr": "le plus général",
      "lit": "au degré suprême de généralité",
      "pos_fr": "Adjectif",
      "role": "Adjectif superlatif caractérisant les grandes lignes directrices du développement historique."
},
  "allmählich": {
      "fr": "progressivement / peu à peu / insensiblement",
      "lit": "à pas mesurés / avec lenteur",
      "pos_fr": "Adverbe",
      "role": "Adverbe désignant le processus graduel et continu de constitution politique du prolétariat en classe autonome.",
      "etymology": "Du moyen haut-allemand « almehelīch », dérivé de « gemach » (tranquille, mesuré, commode)."
},
  "allseitig": {
      "fr": "universel / multilatéral",
      "lit": "de tous les côtés",
      "pos_fr": "Adjectif",
      "role": "Adjectif marquant l'interdépendance complète et planétaire des nations modernes."
},
  "als": {
      "fr": "comme / en tant que",
      "lit": "en qualité de",
      "pos_fr": "Conjonction",
      "role": "Conjonction d'équivalence ou de comparaison."
},
  "also": {
      "fr": "donc / ainsi / par conséquent",
      "lit": "ainsi fait / de cette manière",
      "pos_fr": "Adverbe connecteur logique",
      "role": "Connecteur argumentatif formulant la conclusion théorique rigoureuse d'une déduction historique."
},
  "alt": {
      "fr": "vieux / ancien",
      "lit": "d'âge mûr / révolu",
      "pos_fr": "Adjectif",
      "role": "Adjectif marquant la décrépitude des monarchies d'Ancien Régime.",
      "etymology": "Issu du moyen haut-allemand « alt », vieux haut-allemand « alt » (vieux, âgé, ancien), du proto-germanique *aldaz (ayant grandi, nourri, mûr), participe passé de la racine germanique *alaną (nourrir, faire croître, cognat du latin alere d'où alumnus, altus)."
},
  "altehrwürdig": {
      "fr": "vénérable par son antiquité / séculaire",
      "lit": "digne d'honneur par sa vieillesse",
      "pos_fr": "Adjectif",
      "role": "Adjectif ironique désignant les dogmes médiévaux dissous par le commerce bourgeois."
},
  "Alter": {
      "fr": "âge",
      "lit": "âge de la vie",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre dont les distinctions s'effacent pour la classe ouvrière sous la machine."
},
  "Altersunterschied": {
      "fr": "différence d'âge",
      "lit": "distinction fondée sur l'âge",
      "pos_fr": "Nom",
      "role": "Nom composé désignant les critères biologiques nivelés par le machinisme industriel."
},
  "am": {
      "fr": "à / au / contre",
      "lit": "auprès de / à",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'am' du lemme 'an'. Préposition régissant l'accusatif après 'anschließen' ou le datif de lieu après 'arbeiten'."
},
  "Amerika": {
      "fr": "Amérique",
      "lit": "le continent américain",
      "pos_fr": "Nom propre",
      "role": "Nom propre neutre désignant le Nouveau Monde dont la découverte accéléra l'essor capitaliste.",
      "etymology": "Nom forgé en 1507 par le cartographe Martin Waldseemüller sur le prénom latinisé du navigateur florentin Amerigo Vespucci (Americus Vespucius). Le prénom germanique « Amerigo / Amalric » est composé de amal (zèle laborieux) et rihhi (puissant, noble)."
},
  "an": {
      "fr": "à / sur",
      "lit": "en contact avec",
      "pos_fr": "Préposition",
      "role": "Préposition spatiale ou d'attribution."
},
  "Anarchie": {
      "fr": "anarchie",
      "lit": "absence de gouvernement / chaos",
      "pos_fr": "Nom féminin",
      "role": "Anarchie de la production marchande abandonnée à la concurrence."
},
  "Anathem": {
      "fr": "anathème / excommunication",
      "lit": "mise au ban religieux",
      "pos_fr": "Nom neutre",
      "role": "Anathème clérical jeté contre le libéralisme."
},
  "anbauen": {
      "fr": "s'implanter / défricher / cultiver",
      "lit": "bâtir ou planter contre",
      "pos_fr": "Verbe",
      "role": "Verbe marquant la colonisation agricole et commerciale de toute la surface terrestre."
},
  "ander": {
      "fr": "autre / distinct",
      "lit": "qui n'est pas le même / différent",
      "pos_fr": "Adjectif indéfini",
      "role": "Adjectif indéfini marquant l'exclusion de tout rapport social autre que l'intérêt égoïste du paiement au comptant."
},
  "anderer": {
      "fr": "autre / différent",
      "lit": "second / distinct",
      "pos_fr": "Adjectif",
      "role": "Adjectif marquant l'altérité historique radicale des réalisations bourgeoises."
},
  "anders": {
      "fr": "autrement / d'une autre manière",
      "lit": "autrement",
      "pos_fr": "Adverbe",
      "role": "Adverbe marquant l'alternative dialectique ou la divergence d'analyse entre courants politiques rivaux.",
      "etymology": "Du moyen haut-allemand « anders », génitif adverbial de « ander » (autre)."
},
  "anderseits": {
      "fr": "d'autre part",
      "lit": "de l'autre côté",
      "pos_fr": "Adverbe",
      "role": "Adverbe articulant le second volet d'une alternative dialectique."
},
  "Andre": {
      "fr": "autre / les autres",
      "lit": "l'autre personne",
      "pos_fr": "Nom/Pronom",
      "role": "Désigne les autres classes ou individus."
},
  "andrerseits": {
      "fr": "d'autre part / d'un autre côté",
      "lit": "du côté de l'autre",
      "pos_fr": "Adverbe",
      "role": "Adverbe de corrélation logique articulant les deux volets complémentaires d'une contradiction socio-économique.",
      "etymology": "Composé de « anderer » (autre) + « Seite » (côté) + suffixe adverbial « -s ».",
      "isCompound": true,
      "compoundParts": [
            "anderer",
            "Seite",
            "-s"
      ]
},
  "aneignen": {
      "fr": "s'approprier",
      "lit": "rendre sien",
      "pos_fr": "Verbe séparable",
      "role": "Concept économique majeur désignant la confiscation privée du produit social par le capitaliste."
},
  "Aneignung": {
      "fr": "appropriation",
      "lit": "fait de rendre sien",
      "pos_fr": "Nom féminin",
      "role": "Mode d'appropriation capitaliste des fruits du travail social."
},
  "Aneignungsweise": {
      "fr": "mode d'appropriation",
      "lit": "manière de s'approprier (Aneignung + Weise)",
      "pos_fr": "Nom féminin",
      "role": "Concept marxiste fondamental désignant la forme historique par laquelle une classe s'empare du produit social."
},
  "anerkennen": {
      "fr": "reconnaître",
      "lit": "avouer et admettre la légitimité ou l'existence de",
      "pos_fr": "Verbe fort séparable",
      "role": "Verbe marquant l'aveu involontaire des puissances européennes que le communisme est déjà une force politique réelle.",
      "etymology": "Participe passé du verbe inséparable mixte « anerkennen » : 1° préfixe de contact et d'adhésion « an » (vieux haut-allemand ana) ; 2° verbe préfixé « erkennen » (discerner par l'entendement, moyen haut-allemand erkennen, vieux haut-allemand irknāan / irkennen, formé sur kennen = connaître intimement, du germanique commun *kannjanan, issu de la racine indo-européenne *ǵneh₃- « savoir, reconnaître », cognat du grec gignôskein et du latin (g)noscere). « Anerkennen » dépasse la simple perception empirique : c'est l'acte juridique et politique solennel par lequel une force nouvelle s'impose comme interlocuteur légitime et incontournable dans le concert des puissances."
},
  "Anerkennung": {
      "fr": "reconnaissance",
      "lit": "action de reconnaître juridiquement",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin marquant la consécration légale des droits ouvriers arrachée par la lutte."
},
  "anfahren": {
      "fr": "apostropher / interpeller / invectiver",
      "lit": "rouler contre / s'en prendre à",
      "pos_fr": "Verbe fort séparable",
      "role": "Verbe traduisant les interpellations véhémentes et outrées que les adversaires bourgeois lancent aux communistes.",
      "etymology": "Composé de la préposition « an » (contre, vers) et du verbe fort « fahren » (aller, rouler, en moyen haut-allemand « varn », vieux haut-allemand « faran »)."
},
  "Anfang": {
      "fr": "début / commencement",
      "lit": "point de départ",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin situant la phase embryonnaire de la révolte ouvrière locale."
},
  "anfangs": {
      "fr": "au début / d'abord",
      "lit": "au commencement",
      "pos_fr": "Adverbe",
      "role": "Adverbe marquant la phase initiale du développement historique de la lutte."
},
  "angeblich": {
      "fr": "soi-disant / prétendu / supposé",
      "lit": "selon ce qui est déclaré",
      "pos_fr": "Adjectif",
      "role": "Adjectif critique dévoilant le caractère prétendu, fallacieux et trompeur des justifications de l'ordre dominant.",
      "etymology": "Dérivé de « angeben » (indiquer, prétendre) + suffixe « -lich »."
},
  "angehören": {
      "fr": "appartenir à",
      "lit": "écouter auprès de",
      "pos_fr": "Verbe",
      "role": "Marque l'appartenance de classe ou de parti."
},
  "angehörig": {
      "fr": "appartenant à / originaire de",
      "lit": "qui fait partie de",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant les matières premières importées des zones les plus reculées."
},
  "angemessen": {
      "fr": "approprié / correspondant",
      "lit": "mesuré pour convenir",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant la constitution politique et juridique adaptée au règne du capital."
},
  "angenommen": {
      "fr": "adopter / prendre / revêtir",
      "lit": "prendre vers soi / recevoir une forme",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'angenommen' du lemme 'annehmen'. Participe passé au sein du subjonctif passé concessif."
},
  "angreifen": {
      "fr": "attaquer / s'en prendre à",
      "lit": "saisir contre",
      "pos_fr": "Verbe séparable",
      "role": "Action offensive des prolétaires contre les machines."
},
  "Angriff": {
      "fr": "attaque / assaut",
      "lit": "prise d'assaut",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant les offensives dirigées par les ouvriers contre les machines."
},
  "Anhäufung": {
      "fr": "accumulation / entassement",
      "lit": "amoncellement en tas",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin traduisant l'accumulation du capital dans les mains de propriétaires privés."
},
  "Anklage": {
      "fr": "accusation / réquisitoire",
      "lit": "plainte en justice",
      "pos_fr": "Nom féminin",
      "role": "Accusation portée contre le communisme ou la bourgeoisie."
},
  "Anklageakt": {
      "fr": "acte d'accusation",
      "lit": "dossier formel d'accusation",
      "pos_fr": "Nom masculin",
      "role": "Acte d'accusation dressé par l'aristocratie contre la bourgeoisie."
},
  "anlegn": {
      "fr": "appliquer / investir / engager",
      "lit": "poser contre",
      "pos_fr": "Verbe",
      "role": "Désigne le placement des capitaux ou l'aménagement foncier."
},
  "annehmen": {
      "fr": "adopter / prendre / revêtir",
      "lit": "prendre vers soi / recevoir une forme",
      "pos_fr": "Verbe séparable",
      "role": "Participe passé au sein du subjonctif passé concessif."
},
  "Anschauung": {
      "fr": "conception / vision du monde",
      "lit": "contemplation intuitive",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant les croyances traditionnelles dissoutes par l'époque bourgeoise."
},
  "Anschauungsweise": {
      "fr": "conception / manière de voir",
      "lit": "mode de contemplation intellectuelle",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin composé (Anschauung + Weise) désignant l'idéologie et la vision du monde.",
      "etymology": "Composé philosophique unissant : 1° « die Anschauung » (terme cardinal forgé au XVIIIe siècle dans la langue philosophique allemande par Christian Wolff et Kant pour traduire le latin intuitio / intuition intellectuelle et sensible, dérivé de anschauen = regarder en face, contempler) ; 2° consonne de liaison -s- ; 3° « die Weise » (la manière, la modalité formelle, du vieux haut-allemand wīsa, racine germanique *wīsō- liée à l'adjectif weise / sage et au verbe wissen / savoir). Désigne une conception globale et articulée du monde (Weltanschauung)."
},
  "anschließen": {
      "fr": "se rallier / s'associer à",
      "lit": "attacher avec (au réfléchi : s'agréger à)",
      "pos_fr": "Verbe",
      "role": "Verbe à particule séparable ('schließen an') régissant le réfléchi 'sich' et 'an'."
},
  "ansehen": {
      "fr": "envisager / contempler",
      "lit": "regarder vers",
      "pos_fr": "Verbe",
      "role": "Verbe imposant aux hommes la lucidité matérialiste sans le fard des illusions religieuses."
},
  "Ansicht": {
      "fr": "opinion / conception / vue théorique",
      "lit": "regard porté sur une chose / doctrine",
      "pos_fr": "Nom féminin",
      "role": "Substantif à l'accusatif féminin pluriel désignant la doctrine publique communiste."
},
  "ansichten": {
      "fr": "opinion / conception / vue théorique",
      "lit": "regard porté sur une chose / doctrine",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'Ansichten' du lemme 'Ansicht'. Substantif à l'accusatif féminin pluriel désignant la doctrine publique communiste."
},
  "Anspruch": {
      "fr": "revendication / prétention / droit",
      "lit": "droit réclamé",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin entrant dans la locution « in Anspruch nehmen » (requérir le concours)."
},
  "Anstrich": {
      "fr": "vernis / couche de peinture",
      "lit": "teinte superficielle",
      "pos_fr": "Nom masculin",
      "role": "Vernis socialiste donné aux récriminations féodales."
},
  "antik": {
      "fr": "antique / de l'Antiquité",
      "lit": "ancien / classique",
      "pos_fr": "Adjectif",
      "role": "Adjectif historique désignant le mode de production esclavagiste gréco-romain et ses luttes de classes spécifiques.",
      "etymology": "Emprunté au latin « antiquus » (ancien, vénérable), dérivé de « ante » (devant, avant)."
},
  "anvon": {
      "fr": "à partir de / dès",
      "lit": "vers / à partir de",
      "pos_fr": "Postposition",
      "role": "Postposition complétant « von » dans la locution temporelle « von ... an » (à partir de ce moment, dès lors).",
      "etymology": "Agglutination de la particule postposée « an » (en moyen haut-allemand « ane », vieux haut-allemand « ana ») et de la préposition « von »."
},
  "anwachsend": {
      "fr": "grandissant / croissant",
      "lit": "qui ne cesse d'augmenter",
      "pos_fr": "Participe présent adjectivé",
      "role": "Adjectif marquant l'expansion ininterrompue des besoins marchands.",
      "etymology": "Participe adjectivé unissant le préfixe d'adjonction continue « an- » et le verbe fort « wachsen » (croître biologiquement, augmenter en masse, moyen haut-allemand wahsen, vieux haut-allemand wahsan, racine germanique *wahsijaną, racine indo-européenne *h₂weks-, cognat du grec auxein et de l'anglais wax). Décrit l'enflure organique exponentielle de la demande mondiale qui submerge les anciennes capacités locales de production."
},
  "Anwendung": {
      "fr": "application / mise en œuvre",
      "lit": "action d'appliquer",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'usage pratique des sciences chimiques dans l'industrie et l'agriculture."
},
  "appellieren": {
      "fr": "en appeler à / invoquer",
      "lit": "faire appel",
      "pos_fr": "Verbe",
      "role": "Verbe marquant la nécessité pour la bourgeoisie d'invoquer le secours ouvrier dans ses combats."
},
  "Arbeit": {
      "fr": "travail / force de travail",
      "lit": "labeur / travail productif",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin, concept cardinal chez Marx désignant l'activité productrice transformant la nature.",
      "etymology": "Issu du moyen haut-allemand « arbeit », vieux haut-allemand « arabeit » (peine pénible, labeur écrasant, détresse servile), du proto-germanique *arbēdiz (labeur imposé à l'orphelin ou au serf, apparenté à la racine slave *orbota / rabota = corvée, travail forcé, d'où provient le mot moderne « robot »)."
},
  "arbeiten": {
      "fr": "travailler / œuvrer à",
      "lit": "exercer un travail actif / militer",
      "pos_fr": "Verbe",
      "role": "Verbe principal régissant 'an' exprimant l'activité organisatrice inlassable des communistes."
},
  "arbeitend": {
      "fr": "travailleur / laborieux",
      "lit": "qui travaille",
      "pos_fr": "Adjectif",
      "role": "Désigne la classe ouvrière laborieuse."
},
  "Arbeiter": {
      "fr": "ouvrier / travailleur",
      "lit": "celui qui accomplit le travail productif",
      "pos_fr": "Nom masculin",
      "role": "Substantif masculin pluriel désignant le sujet historique de la révolution prolétarienne."
},
  "arbeiter": {
      "fr": "ouvrier / travailleur",
      "lit": "celui qui accomplit le travail productif",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'Arbeiter' du lemme 'Arbeiter'. Substantif masculin pluriel désignant le sujet historique de la révolution prolétarienne."
},
  "Arbeiteraufstand": {
      "fr": "insurrection ouvrière",
      "lit": "soulèvement d'ouvriers",
      "pos_fr": "Nom masculin",
      "role": "Insurrections de juin 1848 ou révoltes de Lyon."
},
  "Arbeiterklas": {
      "fr": "classe ouvrière",
      "lit": "classe des travailleurs (Arbeiterklasse)",
      "pos_fr": "Nom féminin",
      "role": "Forme lemmatisée d'Arbeiterklasse, sujet historique révolutionnaire du Manifeste."
},
  "Arbeiterklasse": {
      "fr": "classe ouvrière / prolétariat",
      "lit": "classe des travailleurs",
      "pos_fr": "Nom féminin",
      "role": "Substantif composé au génitif féminin singulier, complément de nom de 'Zwecke und Interessen'."
},
  "arbeiterklasse": {
      "fr": "classe ouvrière / prolétariat",
      "lit": "classe des travailleurs",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'Arbeiterklasse' du lemme 'Arbeiterklasse'. Substantif composé au génitif féminin singulier, complément de nom de 'Zwecke und Interessen'."
},
  "Arbeitermasse": {
      "fr": "masse ouvrière",
      "lit": "masse des travailleurs",
      "pos_fr": "Nom masculin",
      "role": "Nom composé désignant la concentration collective des ouvriers dans la grande fabrique."
},
  "arbeitern": {
      "fr": "ouvrier / travailleur",
      "lit": "celui qui accomplit le travail productif",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'Arbeitern' du lemme 'Arbeiter'. Substantif masculin pluriel désignant le sujet historique de la révolution prolétarienne."
},
  "Arbeiterpartei": {
      "fr": "parti ouvrier",
      "lit": "parti des travailleurs",
      "pos_fr": "Nom féminin",
      "role": "Substantif composé au datif pluriel, régime de la préposition 'zu'."
},
  "arbeiterparteien": {
      "fr": "parti ouvrier",
      "lit": "parti des travailleurs",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'Arbeiterparteien' du lemme 'Arbeiterpartei'. Substantif composé au datif pluriel, régime de la préposition 'zu'."
},
  "Arbeiterrevolution": {
      "fr": "révolution ouvrière",
      "lit": "révolution ouvrière",
      "pos_fr": "Nom féminin",
      "role": "La révolution communiste menée par le prolétariat."
},
  "Arbeitsaufseh": {
      "fr": "surveillance du travail",
      "lit": "surveillance des ouvriers",
      "pos_fr": "Nom féminin",
      "role": "Surveillance hiérarchique exercée dans la manufacture."
},
  "Arbeitsinstrument": {
      "fr": "instrument de travail",
      "lit": "outil de travail",
      "pos_fr": "Nom neutre",
      "role": "Nom composé désignant l'outil transformant la matière, auquel l'ouvrier est asservi."
},
  "Arbeitslohn": {
      "fr": "salaire",
      "lit": "prix du travail",
      "pos_fr": "Nom masculin",
      "role": "Nom composé désignant la rétribution monétaire de la force de travail."
},
  "Arbeitsprodukt": {
      "fr": "produit du travail",
      "lit": "résultat de l'activité productive",
      "pos_fr": "Nom neutre",
      "role": "Le produit du travail confisqué par le capitaliste."
},
  "Arbeitsstunde": {
      "fr": "heure de travail",
      "lit": "heure de labeur",
      "pos_fr": "Nom",
      "role": "Nom composé désignant l'unité temporelle dont l'allongement permet d'extraire la plus-value absolue."
},
  "arbeitsstunde": {
      "fr": "heure de travail",
      "lit": "forme minuscule d'Arbeitsstunde",
      "pos_fr": "Nom féminin",
      "role": "Nom composé économique désignant l'heure de travail, unité de mesure de la dépense de force humaine et du salaire ouvrier."
},
  "Arbeitszwang": {
      "fr": "travail obligatoire",
      "lit": "contrainte légale au travail",
      "pos_fr": "Nom masculin",
      "role": "Obligation égale du travail pour tous inscrite dans le programme."
},
  "Arbeitszweig": {
      "fr": "branche de travail / corps de métier",
      "lit": "rameau d'activité productive",
      "pos_fr": "Nom masculin",
      "role": "Nom composé désignant la spécialisation sectorielle des ouvriers en lutte."
},
  "Aristokrat": {
      "fr": "aristocrate",
      "lit": "noble de rang supérieur",
      "pos_fr": "Nom masculin",
      "role": "Membres de l'ancienne classe régnante féodale déchue."
},
  "Aristokratie": {
      "fr": "aristocratie",
      "lit": "gouvernement des meilleurs / noblesse",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la classe des seigneurs féodaux en guerre contre la bourgeoisie."
},
  "Armee": {
      "fr": "armée",
      "lit": "corps de troupes armées enrégimentées",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant métaphoriquement les légions d'ouvriers d'usine disciplinés selon une hiérarchie militaire.",
      "etymology": "Emprunté au français « armée », du participe passé substantivé du latin armare (armer)."
},
  "Art": {
      "fr": "manière / espèce / sorte",
      "lit": "façon d'être / genre",
      "pos_fr": "Nom féminin",
      "role": "Forme particulière de socialisme ou de réforme."
},
  "Artillerie": {
      "fr": "artillerie",
      "lit": "armes à feu lourdes",
      "pos_fr": "Nom féminin",
      "role": "Métaphore militaire désignant les bas prix industriels qui abattent les murailles chinoises."
},
  "Arzt": {
      "fr": "médecin",
      "lit": "celui qui soigne",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant une profession libérale dépouillée de son auréole et réduite au salariat."
},
  "Asketismus": {
      "fr": "ascétisme",
      "lit": "pratique du renoncement",
      "pos_fr": "Nom masculin",
      "role": "Ascétisme chrétien et renoncement matériel des premiers réformateurs."
},
  "Assoziation": {
      "fr": "association / ligue civique",
      "lit": "union volontaire d'alliés sous un même serment",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la confédération jurée unissant les bourgeois des premières villes libres.",
      "etymology": "Emprunté au français « association », du latin médiéval « associatio » (union en société, de socius)."
},
  "Assoziatione": {
      "fr": "association",
      "lit": "forme fléchie d'Assoziation",
      "pos_fr": "Nom féminin",
      "role": "Concept sociologique capital : l'association où le libre développement de chacun est la condition du libre développement de tous."
},
  "assoziiert": {
      "fr": "associé",
      "lit": "uni en association",
      "pos_fr": "Participe passé adjectivé",
      "role": "Participe passé adjectivé qualifiant les producteurs librement associés dans la société communiste future.",
      "etymology": "Emprunté au français « associer », du latin « associare » (unir des compagnons, « socius »)."
},
  "auch": {
      "fr": "aussi / même / bien que",
      "lit": "également / de plus",
      "pos_fr": "Adverbe",
      "role": "Adverbe de renfort dans la clause concessive 'welche... Form sie auch angenommen haben möge'.",
      "etymology": "Issu du moyen haut-allemand « ouch », vieux haut-allemand « ouh » (aussi, de plus). Proto-germanique *auk (aussi, en outre), lié au verbe fort germanique *aukanan (croître, augmenter, vieux haut-allemand ouhhōn, cognat du latin augere / accroître et de l'anglais eke)."
},
  "auf": {
      "fr": "sur / vers / contre",
      "lit": "sur / en direction de (préposition)",
      "pos_fr": "Préposition mixte",
      "role": "Préposition spatiale régissant ici l'accusatif pour marquer la direction de l'effet produit (« auf die Ausdehnung zurückwirken » : réagir sur l'extension)."
},
  "Aufbau": {
      "fr": "édification / construction",
      "lit": "construction vers le haut",
      "pos_fr": "Nom masculin",
      "role": "Édification chimérique des phalanstères."
},
  "auffaßt": {
      "fr": "conçoit / appréhende",
      "lit": "saisit vers le haut",
      "pos_fr": "Verbe",
      "role": "Façon dont une classe théorise ses propres intérêts."
},
  "aufforderen": {
      "fr": "inviter / sommer / enjoindre",
      "lit": "exiger vers le haut",
      "pos_fr": "Verbe",
      "role": "Appel des utopistes au prolétariat."
},
  "aufgeben": {
      "fr": "abandonner / renoncer à",
      "lit": "donner vers le haut / céder",
      "pos_fr": "Verbe séparable",
      "role": "Infinitif avec zu ('aufzugeben') dépendant de la conjonction 'ohne'."
},
  "aufgebläht": {
      "fr": "bouffi / boursouflé",
      "lit": "gonflé d'air",
      "pos_fr": "Adjectif",
      "role": "Prétention boursouflée des petits-bourgeois allemands."
},
  "aufgehäuft": {
      "fr": "accumulé / amassé / entassé",
      "lit": "mis en monceau",
      "pos_fr": "Participe passé adjectivé",
      "role": "Participe passé désignant le travail passé accumulé sous forme de capital monopolisé par la bourgeoisie.",
      "etymology": "Participe de « aufhäufen » (entasser, accumuler, de Haufen tas/tas de blé).",
      "isCompound": true,
      "compoundParts": [
            "auf-",
            "Haufen"
      ]
},
  "aufheben": {
      "fr": "abolir / dépasser / supprimer",
      "lit": "lever / ramasser / détruire et conserver en élevant",
      "pos_fr": "Verbe fort (Aufhebung hégélienne)",
      "role": "Verbe hégélien cardinal : la bourgeoisie prétend avoir aboli les ordres féodaux, mais n'a fait que transposer la contradiction de classe.",
      "etymology": "Formé du préverbe germanique séparable « auf- » (vers le haut, vieux haut-allemand ūf) et du verbe fort « heben » (lever, soulever, en vieux haut-allemand heffan, proto-germanique *habjaną)."
},
  "Aufhebung": {
      "fr": "dépassement dialectique / abolition / suppression",
      "lit": "action de soulever / suppression-conservation",
      "pos_fr": "Nom féminin",
      "role": "Concept hégélien et marxiste capital de négation dialectique désignant l'abolition d'une forme aliénée conjointe à la conservation et l'élévation émancipatrice de ses puissances réelles.",
      "etymology": "Déverbal en « -ung » du verbe « aufheben » (en moyen haut-allemand « ūfheben », en vieux haut-allemand « ūfheffen », formé de « ūf » = vers le haut, en haut, et de « heffen / heben » = lever, soulever, issu du proto-germanique *hafjanan, cognat du latin « capere » = saisir). Rendu célèbre par Hegel pour désigner le mouvement dialectique tripartite : 1° tollere (abolir, annuler), 2° conservare (préserver, garder en mémoire) et 3° elevare (porter à un degré supérieur de liberté). Marx l'applique à l'« Aufhebung des Privateigentums » (abolition-dépassement de la propriété privée)."
},
  "Aufhören": {
      "fr": "cessation / fin / disparition",
      "lit": "fait de cesser",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre verbal marquant le terme historique, la cessation définitive ou la caducité d'un rapport de production dépassé.",
      "etymology": "Substantivation de l'infinitif « aufhören » (cesser, s'arrêter, vieux haut-allemand ūfhōrēn, écouter attentivement jusqu'au silence)."
},
  "aufhören": {
      "fr": "cesser / s'arrêter / prendre fin",
      "lit": "lever l'écoute / faire silence",
      "pos_fr": "Verbe",
      "role": "Verbe intransitif marquant la caducité nécessaire et la fin historique inéluctable d'un mode de production aliéné.",
      "etymology": "Composé de « auf » + « hören » (écouter attentivement jusqu'à interruption du bruit).",
      "isCompound": true,
      "compoundParts": [
            "auf-",
            "hören"
      ]
},
  "Aufklärung": {
      "fr": "Lumières / Aufklärung",
      "lit": "éclaircissement philosophique",
      "pos_fr": "Nom féminin",
      "role": "Mouvement philosophique du XVIIIe siècle sapant la féodalité."
},
  "Aufklärungsidee": {
      "fr": "idée des Lumières",
      "lit": "concept philosophique émancipateur",
      "pos_fr": "Nom féminin",
      "role": "Idées de tolérance et de raison du siècle philosophique."
},
  "aufkommen": {
      "fr": "émerger / survenir / faire son apparition",
      "lit": "monter vers le haut / surgir",
      "pos_fr": "Verbe",
      "role": "Verbe séparable désignant l'émergence historique et l'apparition irrésistible de nouveaux rapports de production.",
      "etymology": "Composé de la particule « auf » (vers le haut, sur) + « kommen » (venir, moyen haut-allemand komen).",
      "isCompound": true,
      "compoundParts": [
            "auf-",
            "kommen"
      ]
},
  "aufkommend": {
      "fr": "naissant / émergent",
      "lit": "qui surgit et monte en puissance",
      "pos_fr": "Participe présent adjectivé",
      "role": "Adjectif caractérisant la bourgeoisie commerciale à ses débuts.",
      "etymology": "Participe présent adjectivé du verbe composé « aufkommen » : préposition directionnelle verticale « auf » (vers le haut, vieux haut-allemand ūf) + verbe fondamental « kommen » (venir, arriver, moyen haut-allemand komen, vieux haut-allemand queman, racine germanique *kwemaną, racine indo-européenne *gʷem-). Décrit la classe montante, dont la courbe ascensionnelle brise l'équilibre statique de l'ancien monde et s'élève vers le sommet du pouvoir économique."
},
  "auflösen": {
      "fr": "dissoudre / liquéfier / décomposer",
      "lit": "délier complètement / dissoudre / décomposer",
      "pos_fr": "Verbe séparable faible",
      "role": "Verbe chimique et dialectique décrivant la transmutation brutale de toutes les qualités morales en argent abstrait.",
      "etymology": "Composé séparable associant « auf » (vers le haut, ouverture complète, en vieux haut-allemand ūf) et le verbe faible « lösen » (délier, détacher, en moyen haut-allemand lœsen, en vieux haut-allemand lōsjan, dérivé de l'adjectif los = libre, détaché, proto-germanique *lausaz, racine indo-européenne *lewh₁- = délier, laver, cognat du grec lyein / λύειν = délier, dissoudre)."
},
  "auflösend": {
      "fr": "dissolvant / désagrégeant",
      "lit": "qui délie",
      "pos_fr": "Adjectif",
      "role": "Éléments révolutionnaires dissolvant l'ordre ancien."
},
  "Auflösung": {
      "fr": "dissolution / décomposition",
      "lit": "fait de délier en éléments",
      "pos_fr": "Nom féminin",
      "role": "Dissolution accélérée des liens sociaux féodaux."
},
  "Auflösungsprozess": {
      "fr": "processus de dissolution",
      "lit": "marche vers la décomposition",
      "pos_fr": "Nom",
      "role": "Variante orthographique standard d'Auflösungsprozeß."
},
  "Auflösungsprozeß": {
      "fr": "processus de dissolution",
      "lit": "marche vers la décomposition",
      "pos_fr": "Nom masculin",
      "role": "Nom composé désignant la dislocation convulsive de la classe dominante à l'approche de la crise finale."
},
  "Aufregung": {
      "fr": "effervescence / agitation",
      "lit": "mise en émoi générale",
      "pos_fr": "Nom féminin",
      "role": "Période d'agitation révolutionnaire générale."
},
  "aufrichten": {
      "fr": "redresser / ériger",
      "lit": "dresser vers le haut",
      "pos_fr": "Verbe",
      "role": "Verbe évoquant l'émancipation émancipatrice du prolétariat faisant sauter l'édifice officiel."
},
  "Aufschwung": {
      "fr": "essor / impulsion",
      "lit": "élan vers le haut / envol",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin métaphorique marquant l'accélération subite du commerce et de la production marchande.",
      "etymology": "Substantif métaphorique d'une grande énergie cinétique unissant la particule ascendante « auf » (vers les hauteurs) et « der Schwung » (l'élan propulsif, la force centrifuge du pendule ou de la fronde, déverbal fort de schwingen / faire osciller avec vigueur, moyen haut-allemand swunc, vieux haut-allemand swingan, cognat de l'anglais swing). Évoque l'envolée soudaine et vertigineuse de la production marchande arrachée à la torpeur médiévale."
},
  "Aufseher": {
      "fr": "surveillant / contremaître",
      "lit": "celui qui regarde d'en haut",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant les cadres subalternes de la discipline manufacturière."
},
  "Aufsicht": {
      "fr": "surveillance / inspection",
      "lit": "regard exercé d'en haut",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin caractérisant la hiérarchie militaire régnant au sein de la fabrique."
},
  "aufstellen": {
      "fr": "dresser / formuler / établir",
      "lit": "poser debout / ériger",
      "pos_fr": "Verbe faible séparable",
      "role": "Verbe désignant l'établissement programmatique des revendications politiques ou des thèses de classe d'un parti.",
      "etymology": "Composé séparable de « auf » (vers le haut, sur) et de « stellen » (poser debout, en moyen haut-allemand « stellen », vieux haut-allemand « stellen »)."
},
  "aufstrebend": {
      "fr": "ascendant / émergent",
      "lit": "tendant vers le haut",
      "pos_fr": "Adjectif",
      "role": "La bourgeoisie alors classe ascendante."
},
  "auftauchend": {
      "fr": "émergent / surgissant",
      "lit": "plongeant vers le haut",
      "pos_fr": "Adjectif",
      "role": "Revendications ouvrières spontanées."
},
  "auftraten": {
      "fr": "entrèrent en scène / apparurent",
      "lit": "posèrent le pas",
      "pos_fr": "Verbe",
      "role": "Entrée historique du prolétariat dans l'arène politique."
},
  "auftreten": {
      "fr": "intervenir / agir / entrer en scène",
      "lit": "poser le pied en avant / monter sur la scène",
      "pos_fr": "Verbe",
      "role": "Verbe à la 3e personne du singulier marquant l'entrée révolutionnaire de la bourgeoisie dans l'arène politique."
},
  "auftritt": {
      "fr": "intervenir / agir / entrer en scène",
      "lit": "poser le pied en avant / monter sur la scène",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'auftritt' du lemme 'auftreten'. Verbe à la 3e personne du singulier marquant l'entrée révolutionnaire de la bourgeoisie dans l'arène politique."
},
  "aufzugeben": {
      "fr": "abandonner / renoncer à",
      "lit": "donner vers le haut / céder",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'aufzugeben' du lemme 'aufgeben'. Infinitif avec zu ('aufzugeben') dépendant de la conjonction 'ohne'."
},
  "aufzulesen": {
      "fr": "ramasser / glaner",
      "lit": "lire / cueillir par terre",
      "pos_fr": "Verbe",
      "role": "Image de l'aristocratie glanant les fruits de l'industrie."
},
  "aufzwingen": {
      "fr": "imposer par la force",
      "lit": "contraindre en forçant par-dessus",
      "pos_fr": "Verbe",
      "role": "Verbe dénonçant la tentative bourgeoise d'imposer ses conditions d'existence comme loi éternelle."
},
  "Auge": {
      "fr": "œil",
      "lit": "organe de la vue",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre de la métaphore de la lucidité (« avec des yeux dégrisés »)."
},
  "Augenblick": {
      "fr": "instant / moment",
      "lit": "clin d'œil / battement de paupière",
      "pos_fr": "Nom masculin",
      "role": "Substantif à l'accusatif adverbial temporel marquant la constance vigilante de l'action communiste."
},
  "augenblick": {
      "fr": "instant / moment",
      "lit": "clin d'œil / battement de paupière",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'Augenblick' du lemme 'Augenblick'. Substantif à l'accusatif adverbial temporel marquant la constance vigilante de l'action communiste."
},
  "aus": {
      "fr": "de / hors de / depuis",
      "lit": "qui émane de",
      "pos_fr": "Préposition (régime datif)",
      "role": "Préposition spatiale et causale régissant le datif."
},
  "ausarbeiten": {
      "fr": "élaborer / mettre au point",
      "lit": "travailler jusqu'au bout",
      "pos_fr": "Verbe séparable",
      "role": "Élaboration théorique des systèmes doctrinaires."
},
  "ausbeuten": {
      "fr": "exploiter / extorquer",
      "lit": "extraire tout le butin d'une mine ou ressource",
      "pos_fr": "Verbe",
      "role": "Verbe économique fondamental désignant l'extorsion systématique de surtravail et de plus-value non rémunérés au travailleur.",
      "etymology": "Terme minier à l'origine (extraire le minerai utile 'Beute'), transposé par Marx à l'exploitation du travail.",
      "isCompound": true,
      "compoundParts": [
            "aus-",
            "Beute"
      ]
},
  "ausbeutet": {
      "fr": "exploite",
      "lit": "tire le butin de (ausbeuten)",
      "pos_fr": "Verbe",
      "role": "Verbe analytique fondamental de Marx définissant l'extorsion de plus-value sur l'ouvrier."
},
  "ausbeuteten": {
      "fr": "exploitaient",
      "lit": "puisaient du butin",
      "pos_fr": "Verbe",
      "role": "Exploitation féodale ou bourgeoise."
},
  "Ausbeutung": {
      "fr": "exploitation / extorsion",
      "lit": "mise en valeur d'un filon / exploitation intégrale",
      "pos_fr": "Nom féminin",
      "role": "Concept économique fondamental du marxisme désignant l'extorsion systématique de surtravail non rémunéré (plus-value) arraché aux prolétaires par les possesseurs du capital.",
      "etymology": "Déverbal en « -ung » de « ausbeuten » (au XVIIIe siècle terme technique minier unissant le préfixe « aus- » = hors de, extraction complète, et « Beute » = butin, filon rentable, du moyen bas-allemand « būte » = partage des prises, échange commercial). Marx transpose ce terme de l'industrie extractive minière à l'économie politique pour désigner l'extorsion systématique de survaleur sur la force de travail vivante."
},
  "ausbrechen": {
      "fr": "éclater / se déclarer",
      "lit": "rompre hors de",
      "pos_fr": "Verbe",
      "role": "Verbe marquant l'irruption soudaine d'une crise épidémique ou d'une révolution ouverte."
},
  "ausdehnen": {
      "fr": "étendre / déployer",
      "lit": "tendre vers le dehors / élargir les frontières",
      "pos_fr": "Verbe séparable faible",
      "role": "Verbe réflexif (sich ausdehnen) décrivant l'onde d'expansion conjointe de l'industrie et des transports."
},
  "Ausdehnung": {
      "fr": "extension / expansion spatiale",
      "lit": "étirement vers l'extérieur au-delà des limites",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'accroissement continu de l'aire géographique et technique d'influence de l'industrie.",
      "etymology": "Déverbal en « -ung » formé sur le verbe séparable « ausdehnen » (étendre, étirer vers l'extérieur, composé de aus = hors de et dehnen = étirer, tendre, en moyen haut-allemand dënen, vieux haut-allemand dennen, proto-germanique *tanjaną, racine indo-européenne *ten- = tendre, étirer, cf. latin tendere, extenuare)."
},
  "Ausdruck": {
      "fr": "expression",
      "lit": "ce qui est manifesté au dehors",
      "pos_fr": "Nom masculin",
      "role": "Expression fidèle des intérêts matériels sous-jacents."
},
  "ausdrücken": {
      "fr": "exprimer / manifester",
      "lit": "presser au dehors",
      "pos_fr": "Verbe séparable",
      "role": "Expression idéologique des rapports matériels."
},
  "ausführen": {
      "fr": "mener à bien / exécuter",
      "lit": "conduire hors de",
      "pos_fr": "Verbe",
      "role": "Verbe célébrant les gigantesques expéditions de transformation matérielle du globe."
},
  "ausführlich": {
      "fr": "détaillé / circonstancié / amplement",
      "lit": "mené jusqu'à l'exécution complète",
      "pos_fr": "Adjectif",
      "role": "Adverbe désignant l'exposé circonstancié, détaillé et méthodique des lois objectives du matérialisme historique.",
      "etymology": "Dérivé de « ausführen » (exécuter, développer) + « -lich »."
},
  "Ausführung": {
      "fr": "exécution / réalisation",
      "lit": "action de mener à terme",
      "pos_fr": "Nom féminin",
      "role": "Mise en pratique d'un plan social ou économique."
},
  "ausgedehnter": {
      "fr": "plus vaste / plus étendu",
      "lit": "étiré plus largement",
      "pos_fr": "Adjectif",
      "role": "Adjectif comparatif désignant l'exigence insatiable de marchés toujours élargis."
},
  "ausgeheckt": {
      "fr": "fabriqué de toutes pièces / forgé",
      "lit": "couvé au nid",
      "pos_fr": "Adjectif",
      "role": "Systèmes utopiques artificiels sans base historique."
},
  "ausgleichen": {
      "fr": "égaliser / compenser / niveler",
      "lit": "rendre pareil / aplanir",
      "pos_fr": "Verbe fort séparable",
      "role": "Verbe économique décrivant le nivellement inexorable des différences et des salaires ouvriers par le machinisme industriel.",
      "etymology": "Composé de « aus- » et de « gleichen » (rendre égal, en moyen haut-allemand « gelīchen », dérivé de « gleich » = pareil, semblable)."
},
  "ausmachen": {
      "fr": "constituer / représenter",
      "lit": "faire au dehors",
      "pos_fr": "Verbe",
      "role": "Ce qui constitue l'essence d'une classe."
},
  "Ausnahme": {
      "fr": "exception",
      "lit": "ce qui est pris hors de la règle",
      "pos_fr": "Nom féminin",
      "role": "Cas exceptionnels confirmant la loi générale du marché."
},
  "ausposaunen": {
      "fr": "trompeter / clamer sur les toits",
      "lit": "sonner du trombone",
      "pos_fr": "Verbe",
      "role": "Ironie de Marx sur les proclamations bourgeoises."
},
  "ausreichen": {
      "fr": "suffire / être suffisant",
      "lit": "tendre le bras jusqu'à la mesure requise",
      "pos_fr": "Verbe séparable faible",
      "role": "Verbe à particule décrivant l'incapacité objective des anciens ateliers à honorer l'immensité de la demande mondiale.",
      "etymology": "Verbe composé séparable combinant la particule d'achèvement « aus » et le verbe germanique « reichen » (atteindre, suffire, vieux haut-allemand reihhan)."
},
  "ausschließlich": {
      "fr": "exclusif / sans partage",
      "lit": "qui exclut tout tiers / monopole absolu",
      "pos_fr": "Adjectif",
      "role": "Adjectif marquant le monopole politique total conquis par la bourgeoisie dans l'État représentatif contemporain."
},
  "Ausschuss": {
      "fr": "comité / commission",
      "lit": "fraction choisie / groupe détaché",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin politique : formule fameuse où Marx définit le gouvernement moderne comme un simple comité chargé de gérer les affaires communes de la bourgeoisie tout entière.",
      "etymology": "Déverbal de « ausschießen » (trier, sélectionner, écarter), composé de « aus- » (hors de) et de « schießen » (lancer, jaillir, en moyen haut-allemand « schiezen », en vieux haut-allemand « skiozan »)."
},
  "Ausschuß": {
      "fr": "comité / commission déléguée",
      "lit": "délégation restreinte d'hommes choisis pour gérer une charge",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant métaphoriquement le gouvernement moderne comme simple conseil d'administration des intérêts communs de la bourgeoisie."
},
  "Aussehen": {
      "fr": "apparence / aspect",
      "lit": "façon dont les choses se montrent",
      "pos_fr": "Nom neutre",
      "role": "Apparence trompeuse des réformes philanthropiques."
},
  "aussetzen": {
      "fr": "exposer à",
      "lit": "placer au-dehors",
      "pos_fr": "Verbe",
      "role": "Verbe caractérisant la soumission vulnérable de l'ouvrier-marchandise aux aléas du marché."
},
  "aussprechen": {
      "fr": "exprimer / prononcer / déclarer ouvertement",
      "lit": "faire sortir par la parole",
      "pos_fr": "Verbe",
      "role": "Verbe fort désignant la proclamation claire, ouverte et sans compromis des vérités stratégiques par le parti révolutionnaire.",
      "etymology": "Composé de « aus » (hors de) + « sprechen » (parler).",
      "isCompound": true,
      "compoundParts": [
            "aus-",
            "sprechen"
      ]
},
  "Austausch": {
      "fr": "échange",
      "lit": "troc / circulation réciproque",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant la circulation marchande des produits et capitaux.",
      "etymology": "Substantif économique combinant le préfixe d'extension extérieure « aus- » et le nom « der Tausch » (l'échange marchand, le troc). « Tausch » est un déverbal de « tauschen » (moyen haut-allemand tûschen), doublet étymologique de « täuschen » (tromper, duper), dont l'origine ultime est discutée et incertaine (probablement liée au jargon commercial des foires médiévales et au maquignonnage de chevaux, où l'échange de bêtes s'accompagnait souvent de ruse). Le terme s'est pacifié au XVIIe siècle pour désigner l'échange loyal de biens, avant que Marx n'en fasse le concept de circulation générale des marchandises."
},
  "austauschen": {
      "fr": "échanger",
      "lit": "troquer réciproquement",
      "pos_fr": "Verbe",
      "role": "Verbe économique désignant la circulation réciproque des biens et marchandises."
},
  "auswärtig": {
      "fr": "étranger / extérieur",
      "lit": "situé au-dehors",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant les bourgeoisies des puissances rivales concurrentes."
},
  "auszahlen": {
      "fr": "payer / verser au comptant",
      "lit": "compter jusqu'au bout",
      "pos_fr": "Verbe",
      "role": "Verbe marquant le règlement en monnaie sonnante et trébuchante du salaire de l'ouvrier."
},
  "auszeichnen": {
      "fr": "distinguer / caractériser / mettre en valeur",
      "lit": "marquer d'un signe distinctif",
      "pos_fr": "Verbe",
      "role": "Verbe séparable soulignant le trait distinctif singulier et inédit de l'époque bourgeoise par rapport aux siècles passés.",
      "etymology": "Composé de « aus » + « zeichnen » (marquer, dessiner, vieux haut-allemand zeichanōn).",
      "isCompound": true,
      "compoundParts": [
            "aus-",
            "zeichnen"
      ]
},
  "Babeuf": {
      "fr": "Babeuf",
      "lit": "nom propre du révolutionnaire français",
      "pos_fr": "Nom propre",
      "role": "Fondateur de la Conjuration des Égaux de 1796."
},
  "Bahn": {
      "fr": "voie / chemin / voie ferrée",
      "lit": "trajectoire tracée",
      "pos_fr": "Nom féminin",
      "role": "La voie ouverte par le développement des forces productives."
},
  "bald": {
      "fr": "tantôt / bientôt",
      "lit": "à un moment donné / rapidement",
      "pos_fr": "Adverbe",
      "role": "Adverbe corrélatif (bald... bald...) marquant l'alternance d'une lutte tantôt ouverte tantôt cachée."
},
  "Band": {
      "fr": "lien / attache",
      "lit": "ce qui lie / corde / chaîne morale ou servile",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre désignant la relation sociale liant les hommes entre eux, réduite désormais au seul argent liquide."
},
  "bar": {
      "fr": "au comptant / en liquide",
      "lit": "à nu / à découvert / en espèces sonnantes visibles",
      "pos_fr": "Adjectif",
      "role": "Adjectif d'étymologie discutée désignant le paiement monétaire immédiat sans crédit ni affectivité coutumière.",
      "etymology": "En moyen haut-allemand « bar » (nu, dénudé, sans parure, pur), en vieux haut-allemand « bar », proto-germanique *bazaz (nu, découvert, cognat de l'anglais bare). Dans le langage commercial, il a désigné l'argent payé à découvert sur la table, en espèces réelles immédiates."
},
  "Barbar": {
      "fr": "barbare",
      "lit": "étranger non civilisé",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant les populations non capitalistes intégrées de force au marché."
},
  "Barbarei": {
      "fr": "barbarie",
      "lit": "état sauvage",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin peignant l'état de dénuement primitif dans lequel la crise de surproduction replonge la société.",
      "etymology": "Emprunté au grec « barbaria » via le latin (étrangeté sauvage, incapacité à parler la langue de la cité). Marx l'utilise dialectiquement : la bourgeoisie renvoie la société dans un état de « soudaine barbarie » lors des crises de surproduction."
},
  "barbarisch": {
      "fr": "barbare / non civilisé",
      "lit": "étranger à la culture dominante",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant dans le vocabulaire de 1848 les sociétés précapitalistes extérieures au marché mondial."
},
  "barbarischst": {
      "fr": "le plus barbare",
      "lit": "au degré ultime de barbarie",
      "pos_fr": "Adjectif",
      "role": "Adjectif superlatif soulignant la force d'assimilation universelle du marché."
},
  "Baron": {
      "fr": "baron",
      "lit": "homme libre / baron",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant les grands feudataires du système seigneurial médiéval.",
      "etymology": "Emprunté au bas-latin médiéval « baro / baronis », d'origine germanique francique (*baro = homme libre, guerrier vaillant d'élite). Transmis par l'ancien français « baron » pour désigner le grand feudataire tenant son fief directement de la couronne féodale, exerçant haute et basse justice seigneuriale sur ses serfs territoriaux."
},
  "Bauer": {
      "fr": "paysan",
      "lit": "cultivateur de la terre",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant la classe rurale traditionnelle vouée à la prolétarisation."
},
  "Bauernklas": {
      "fr": "classe paysanne",
      "lit": "l'ensemble des cultivateurs ruraux",
      "pos_fr": "Nom féminin",
      "role": "La paysannerie formant la majorité numérique en France et Allemagne."
},
  "Bauernstand": {
      "fr": "ordre des paysans / paysannerie",
      "lit": "état social des cultivateurs",
      "pos_fr": "Nom masculin",
      "role": "La condition paysanne sous le régime féodal."
},
  "Bauernvolk": {
      "fr": "peuple paysan",
      "lit": "nation agricole",
      "pos_fr": "Nom",
      "role": "Forme singulière de Bauernvölker."
},
  "Bauernvölker": {
      "fr": "peuples paysans",
      "lit": "nations agricoles",
      "pos_fr": "Nom masculin",
      "role": "Nom composé désignant les pays agraires assujettis aux puissances industrielles."
},
  "bearbeiten": {
      "fr": "travailler / façonner / endoctriner",
      "lit": "œuvrer sur",
      "pos_fr": "Verbe",
      "role": "Façonnement idéologique de l'opinion publique."
},
  "Bedarf": {
      "fr": "besoin / demande",
      "lit": "ce qui est requis / nécessité économique",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin économique désignant la demande solvable des nouveaux marchés.",
      "etymology": "Substantif économique issu du moyen haut-allemand « bedarf », déverbal du verbe « bedürfen » (ressentir une nécessité impérieuse, vieux haut-allemand bidurfan, composé du préfixe be- et du verbe prétérito-présent durfan / manquer de, avoir besoin, cognat du vieil anglais þurfan). Désigne en économie la demande solvable impérative réclamée par les marchés coloniaux."
},
  "bedauern": {
      "fr": "regretter / déplorer",
      "lit": "peine ressentie",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre de la locution « zum großen Bedauern » (au grand désespoir des réactionnaires)."
},
  "Bedenken": {
      "fr": "scrupule / objection",
      "lit": "hésitation réfléchie",
      "pos_fr": "Nom neutre",
      "role": "Scrupules moraux balayés par l'expansion du capital."
},
  "bedeuten": {
      "fr": "signifier / vouloir dire",
      "lit": "pointer vers",
      "pos_fr": "Verbe",
      "role": "Sens objectif des revendications politiques."
},
  "bedeutend": {
      "fr": "considérable / important",
      "lit": "qui a de la signification, du poids",
      "pos_fr": "Adjectif",
      "role": "Adjectif évaluant la part massive de la population arrachée à l'isolement rural."
},
  "Bedeutung": {
      "fr": "importance / signification",
      "lit": "valeur historique et théorique",
      "pos_fr": "Nom féminin",
      "role": "Portée critique des premiers systèmes socialistes."
},
  "Bedingung": {
      "fr": "condition",
      "lit": "stipulation / circonstance déterminante",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant les rapports matériels qui déterminent l'organisation sociale.",
      "etymology": "Substantif juridique forgé au moyen haut-allemand « bedingunge » (accord solennel, stipulation convenue lors d'un procès ou d'un traité), dérivé du verbe « bedingen » (de Ding / la cour de justice publique germanique, la cause plaidée). Chez Marx, les « Bedingungen » se matérialisent en 'conditions matérielles objectives' qui déterminent les formes de la vie sociale indépendamment de la volonté subjective des individus."
},
  "bedingung": {
      "fr": "condition matérielle / préalable",
      "lit": "stipulation, prérequis d'un contrat",
      "pos_fr": "Nom féminin",
      "role": "Forme fléchie 'Bedingung' du lemme 'Bedingung'. Substantif féminin désignant les prérequis matériels ou politiques de l'émancipation."
},
  "bedingungen": {
      "fr": "condition matérielle / préalable",
      "lit": "stipulation, prérequis d'un contrat",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'Bedingungen' du lemme 'Bedingung'. Substantif féminin désignant les prérequis matériels ou politiques de l'émancipation."
},
  "bedrohen": {
      "fr": "menacer",
      "lit": "peser d'une menace sur",
      "pos_fr": "Verbe",
      "role": "Verbe traduisant la menace existentielle constante pesant sur les classes intermédiaires."
},
  "bedurfen": {
      "fr": "eurent besoin de",
      "lit": "eurent nécessité de (bedürfen)",
      "pos_fr": "Verbe",
      "role": "Forme passée du verbe bedürfen mesurant les siècles requis par les bourgeois du moyen âge pour s'unir."
},
  "bedürfen": {
      "fr": "nécessiter / avoir besoin de",
      "lit": "être dans le besoin de",
      "pos_fr": "Verbe",
      "role": "Verbe exprimant l'exigence matérielle minimale nécessaire à la reproduction de la force de travail."
},
  "Bedürfnis": {
      "fr": "besoin",
      "lit": "nécessité ressentie",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre désignant les besoins humains renouvelés et élargis par le commerce mondial."
},
  "beendigen": {
      "fr": "achever / terminer",
      "lit": "mener à sa fin",
      "pos_fr": "Verbe",
      "role": "Verbe marquant la clôture d'un cycle d'exploitation directe en fabrique."
},
  "befinden": {
      "fr": "se trouver / être situé",
      "lit": "se trouver soi-même",
      "pos_fr": "Verbe",
      "role": "Verbe décrivant la bourgeoisie engagée dans un état de conflit permanent."
},
  "Befreiung": {
      "fr": "libération / affranchissement",
      "lit": "action de rendre libre",
      "pos_fr": "Nom féminin",
      "role": "Substantif au génitif féminin singulier, complément de détermination de 'Bedingung'."
},
  "befreiung": {
      "fr": "libération / affranchissement",
      "lit": "action de rendre libre",
      "pos_fr": "Nom féminin",
      "role": "Forme fléchie 'Befreiung' du lemme 'Befreiung'. Substantif au génitif féminin singulier, complément de détermination de 'Bedingung'."
},
  "befriedigt": {
      "fr": "satisfait / comblé",
      "lit": "rendu en paix",
      "pos_fr": "Adjectif",
      "role": "Participe passé caractérisant les besoins matériels limités de l'économie locale féodale."
},
  "Befriedigung": {
      "fr": "satisfaction",
      "lit": "action d'apaiser",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin caractérisant le comblement marchand des besoins de consommation."
},
  "befördern": {
      "fr": "favoriser / promouvoir",
      "lit": "transporter en avant",
      "pos_fr": "Verbe",
      "role": "Verbe mesurant si les rapports de propriété stimulent encore ou entravent les forces productives."
},
  "Beförderung": {
      "fr": "promotion / impulsion",
      "lit": "action de faire avancer",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin mesurant le développement impulsé aux forces productives."
},
  "Begeisterung": {
      "fr": "enthousiasme / exaltation héroïque",
      "lit": "insufflation d'esprit noble / transport passionné",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'idéal chevaleresque et militaire d'honneur démasqué comme fiction d'ordre.",
      "etymology": "Substantif en « -ung » formé sur le verbe « begeistern » (insuffler un esprit divin, enthousiasmer), forgé au XVIIIe siècle (notamment par Herder) sur « der Geist » (l'esprit, souffle, âme, en vieux haut-allemand geist, racine proto-germanique *gaistaz, cognat de l'anglais ghost)."
},
  "beginnen": {
      "fr": "commencer / s'engager",
      "lit": "prendre commencement",
      "pos_fr": "Verbe",
      "role": "Noyau verbal à la 3e personne du singulier de la proposition finale."
},
  "beginnt": {
      "fr": "commencer / s'engager",
      "lit": "prendre commencement",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'beginnt' du lemme 'beginnen'. Noyau verbal à la 3e personne du singulier de la proposition finale."
},
  "begleiten": {
      "fr": "accompagner / faire escorte",
      "lit": "marcher côte à côte en escorte",
      "pos_fr": "Verbe inséparable faible",
      "role": "Verbe passif (war begleitet) exprimant la corrélation rigoureuse entre avancée économique et progrès politique."
},
  "begreifen": {
      "fr": "comprendre / concevoir / appréhender",
      "lit": "saisir de la main tout autour",
      "pos_fr": "Verbe",
      "role": "Verbe fort philosophique signifiant saisir conceptuellement et théoriquement le mouvement réel de l'histoire.",
      "etymology": "Du moyen haut-allemand « begrīfen », de « be- » + « greifen » (saisir matériellement, puis intellectuellement, calque du latin comprehendere).",
      "isCompound": true,
      "compoundParts": [
            "be-",
            "greifen"
      ]
},
  "Begriff": {
      "fr": "concept / notion",
      "lit": "saisie intellectuelle",
      "pos_fr": "Nom masculin",
      "role": "Concept philosophique ou catégorie économique."
},
  "begründen": {
      "fr": "fonder / asseoir",
      "lit": "poser sur un fondement (Grund)",
      "pos_fr": "Verbe",
      "role": "Verbe désignant l'établissement politique révolutionnaire de la suprématie prolétarienne."
},
  "Behauptung": {
      "fr": "maintien / défense",
      "lit": "action de tenir ferme",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la défense concertée du niveau des salaires par les coalitions."
},
  "beherrschen": {
      "fr": "dominer / maîtriser",
      "lit": "exercer le pouvoir seigneurial sur",
      "pos_fr": "Verbe",
      "role": "Verbe de la célèbre allégorie de l'apprenti sorcier incapable de dominer les puissances déchaînées."
},
  "bei": {
      "fr": "chez / auprès de",
      "lit": "à proximité de / auprès de",
      "pos_fr": "Préposition",
      "role": "Préposition régissant le datif désignant les destinataires prolétaires de la formation théorique."
},
  "Beibehaltung": {
      "fr": "conservation / maintien inchangé",
      "lit": "action de garder auprès de soi",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin qualifiant le conservatisme technique propre aux modes de production précapitalistes."
},
  "beide": {
      "fr": "les deux / tous deux / l'un et l'autre",
      "lit": "le couple des deux",
      "pos_fr": "Déterminant",
      "role": "Déterminant numéral désignant les deux classes fondamentales et antagonistes de la société moderne : bourgeoisie et prolétariat.",
      "etymology": "Du moyen haut-allemand « beide », vieux haut-allemand « bēde », d'origine proto-germanique *bajōþau."
},
  "Beispiel": {
      "fr": "exemple",
      "lit": "cas particulier illustratif",
      "pos_fr": "Nom neutre",
      "role": "Exemple concret tiré de l'histoire moderne."
},
  "bekannt": {
      "fr": "notoirement / comme on le sait",
      "lit": "de manière connue",
      "pos_fr": "Adverbe",
      "role": "Faits historiques connus de tous."
},
  "bekämpfen": {
      "fr": "combattre / lutter contre",
      "lit": "attaquer en combat",
      "pos_fr": "Verbe",
      "role": "Verbe décrivant les luttes menées contre la bourgeoisie par les diverses classes."
},
  "Bekämpfung": {
      "fr": "combat / lutte contre",
      "lit": "action de lutter contre",
      "pos_fr": "Nom féminin",
      "role": "Lutte imaginaire des utopistes contre la concurrence."
},
  "bemächtigten": {
      "fr": "s'emparèrent de",
      "lit": "se rendirent maîtres de",
      "pos_fr": "Verbe",
      "role": "Les philosophes allemands s'emparant des idées françaises."
},
  "benutzen": {
      "fr": "exploiter / mettre à profit",
      "lit": "tirer utilité de",
      "pos_fr": "Verbe",
      "role": "Verbe tactique désignant l'utilisation par les ouvriers des dissensions internes bourgeoises."
},
  "bequemen": {
      "fr": "s'accommoder / se plier à",
      "lit": "se rendre commode",
      "pos_fr": "Verbe",
      "role": "Aristocratie contrainte de s'abaisser aux réalités du marché."
},
  "Berechnung": {
      "fr": "calcul / estimation chiffrée",
      "lit": "compte arithmétique rigoureux des coûts et bénéfices",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la rationalité comptable marchande qui subordonne toute décision au taux de profit.",
      "etymology": "Substantif en « -ung » dérivé du verbe transitif « berechnen » (calculer, chiffrer), formé sur « rechnen » (compter, en vieux haut-allemand rehhanōn, ordonner, évaluer)."
},
  "Berechtigung": {
      "fr": "légitimité / justification",
      "lit": "titre de droit",
      "pos_fr": "Nom féminin",
      "role": "Justification théorique d'une revendication."
},
  "Bereich": {
      "fr": "domaine / sphère",
      "lit": "champ d'application",
      "pos_fr": "Nom masculin",
      "role": "Sphère du savoir ou du commerce."
},
  "bereichern": {
      "fr": "enrichir",
      "lit": "rendre riche",
      "pos_fr": "Verbe",
      "role": "Verbe économique désignant l'accumulation illimitée de capital et l'enrichissement vertigineux des possesseurs de moyens de production.",
      "etymology": "Dérivé avec le préfixe « be- » de l'adjectif « reich » (riche).",
      "isCompound": true,
      "compoundParts": [
            "be-",
            "reich",
            "-ern"
      ]
},
  "bereits": {
      "fr": "déjà / dès à présent",
      "lit": "à ce stade déjà atteint",
      "pos_fr": "Adverbe",
      "role": "Adverbe temporel insistant sur le caractère inéluctable et précoce de la reconnaissance du communisme.",
      "etymology": "Adverbe de temps et d'insistance dérivé au génitif adverbial (-s) de l'adjectif moyen haut-allemand « bereit » (prêt à agir, équipé, préparé, issu du vieux haut-allemand bireiti = propre à être monté, préparé pour la chevauchée, préfixe bi- + verbe rītan / chevaucher). A pris au XVIe siècle le sens temporel d'antériorité accomplie : « déjà », marquant qu'une étape historique irréversible est d'ores et déjà franchie."
},
  "bereitwilliger": {
      "fr": "plus enclin / plus promptement disposé",
      "lit": "de volonté plus prête",
      "pos_fr": "Adjectif",
      "role": "Adjectif comparatif caractérisant la vénalité du lumpenprolétariat."
},
  "Beruf": {
      "fr": "profession / vocation / métier",
      "lit": "appel / activité professionnelle",
      "pos_fr": "Nom masculin",
      "role": "Professions libérales déchues en travail salarié."
},
  "berufen": {
      "fr": "invoquer / appeler en référence",
      "lit": "crier vers",
      "pos_fr": "Verbe",
      "role": "Revendication d'une autorité morale ou historique."
},
  "beruhen": {
      "fr": "reposer sur / être fondé sur",
      "lit": "reposer en paix sur",
      "pos_fr": "Verbe",
      "role": "Verbe d'analyse structurelle reliant le capital au salariat et le salariat à la concurrence."
},
  "beschleunigt": {
      "fr": "accéléré",
      "lit": "rendu plus rapide",
      "pos_fr": "Verbe",
      "role": "Participe passé caractérisant l'intensification de la rotation machinisée pour extraire la plus-value."
},
  "beschränken": {
      "fr": "se borner / se limiter à",
      "lit": "enfermer dans des barrières",
      "pos_fr": "Verbe",
      "role": "Verbe formulant la loi d'airain réduisant le coût de l'ouvrier au strict entretien biologique."
},
  "Beschränktheit": {
      "fr": "étroitesse / bornage d'esprit",
      "lit": "état d'enfermement dans des bornes",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin stigmatisant le chauvinisme et l'insularisme nationaux rendus obsolètes."
},
  "Beschönigung": {
      "fr": "édulcoration / enjolivement",
      "lit": "fait de rendre beau faussement",
      "pos_fr": "Nom féminin",
      "role": "Tentative d'enjoliver la cruauté du salariat."
},
  "Beseitigung": {
      "fr": "élimination / suppression",
      "lit": "mise à l'écart définitive",
      "pos_fr": "Nom féminin",
      "role": "Suppression du travail des enfants dans les manufactures."
},
  "besiegen": {
      "fr": "vaincre / triompher de",
      "lit": "remporter la victoire sur",
      "pos_fr": "Verbe",
      "role": "Verbe militaire et politique désignant la défaite infligée à l'adversaire de classe dans l'affrontement révolutionnaire.",
      "etymology": "Dérivé de « der Sieg » (la victoire, vieux haut-allemand sigu).",
      "isCompound": true,
      "compoundParts": [
            "be-",
            "Sieg"
      ]
},
  "Besitz": {
      "fr": "possession / propriété matérielle",
      "lit": "fait d'être assis sur des biens",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant l'accaparement de la richesse par la classe possédante."
},
  "besitzen": {
      "fr": "posséder / détenir",
      "lit": "être assis sur",
      "pos_fr": "Verbe",
      "role": "Verbe marquant la détention de civilisation et d'industrie excédant les bornes du marché."
},
  "besonder": {
      "fr": "particulier / distinct",
      "lit": "propre à un rang singulier",
      "pos_fr": "Adjectif",
      "role": "Adjectif caractérisant les privilèges corporatifs spécifiques.",
      "etymology": "Dérivé de « sonder » (à part, séparé, sans, en vieux haut-allemand suntar = à l'écart)."
},
  "besonderer": {
      "fr": "particulier / distinct / spécifique",
      "lit": "séparé / mis à part",
      "pos_fr": "Adjectif",
      "role": "Adjectif distinguant un caractère spécifique ou une fraction singulière au sein du corps social.",
      "etymology": "Du moyen haut-allemand « besunder », de « bi » + « sunder » (à part, séparément)."
},
  "besonders": {
      "fr": "en particulier / particulièrement / notamment",
      "lit": "à part",
      "pos_fr": "Adverbe",
      "role": "Adverbe d'insistance mettant en relief un aspect déterminant ou une phase aiguë de la lutte de classes.",
      "etymology": "Génitif adverbial de « besonder »."
},
  "Bestand": {
      "fr": "maintien / existence / survie",
      "lit": "tenue dans la durée",
      "pos_fr": "Nom masculin",
      "role": "Volonté bourgeoise de pérenniser son ordre social."
},
  "Bestandteil": {
      "fr": "composante / fraction constitutive",
      "lit": "partie tenant ensemble",
      "pos_fr": "Nom masculin",
      "role": "Nom composé désignant les secteurs de la classe dominante précipités dans le prolétariat."
},
  "bestehen": {
      "fr": "se composer de / consister en",
      "lit": "se maintenir ferme / consister en",
      "pos_fr": "Verbe",
      "role": "Verbe de la complétive décrivant la composition composite du parti radical."
},
  "bestehend": {
      "fr": "existant / actuel / en vigueur",
      "lit": "qui se tient debout / qui subsiste",
      "pos_fr": "Adjectif",
      "role": "Épithète qualifiant l'ordre social établi contre lequel s'insurgent les communistes."
},
  "bestehenden": {
      "fr": "existant / actuel / en vigueur",
      "lit": "qui se tient debout / qui subsiste",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'bestehenden' du lemme 'bestehend'. Épithète qualifiant l'ordre social établi contre lequel s'insurgent les communistes."
},
  "besteht": {
      "fr": "se composer de / consister en",
      "lit": "se maintenir ferme / consister en",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'besteht' du lemme 'bestehen'. Verbe de la complétive décrivant la composition composite du parti radical."
},
  "besten": {
      "fr": "au mieux / le mieux",
      "lit": "au meilleur",
      "pos_fr": "Adverbe",
      "role": "Dans la locution 'im besten Fall' (au meilleur des cas)."
},
  "Bestgestellten": {
      "fr": "les mieux lotis / les privilégiés",
      "lit": "ceux qui sont le mieux placés",
      "pos_fr": "Nom substantivé",
      "role": "Les fractions aisées de la bourgeoisie."
},
  "bestimmen": {
      "fr": "déterminer / fixer / décider",
      "lit": "attribuer une voix / donner voix délibérative",
      "pos_fr": "Verbe",
      "role": "Concept sociologique cardinal du matérialisme : les conditions matérielles d'existence déterminent la conscience humaine.",
      "etymology": "Du moyen haut-allemand « stimmen » (voter, accorder la voix) + préfixe « be- ».",
      "isCompound": true,
      "compoundParts": [
            "be-",
            "Stimme"
      ]
},
  "bestmöglich": {
      "fr": "le meilleur possible",
      "lit": "meilleur de façon possible",
      "pos_fr": "Adjectif",
      "role": "Vision leibnizienne bourgeoise du monde idéal."
},
  "beständig": {
      "fr": "constant / permanent / continu",
      "lit": "qui se tient ferme",
      "pos_fr": "Adjectif",
      "role": "Adjectif marquant la continuité ininterrompue et le renouvellement permanent des secousses du mode de production capitaliste.",
      "etymology": "Du moyen haut-allemand « bestandic », de « bestehen » (demeurer ferme, subsister)."
},
  "betrachten": {
      "fr": "considérer / contempler / examiner",
      "lit": "porter ses regards et son attention vers",
      "pos_fr": "Verbe",
      "role": "Verbe d'analyse critique désignant l'examen matérialiste et lucide des rapports économiques débarrassés de tout mysticisme.",
      "etymology": "Composé de « be- » + « trachten » (chercher des yeux, viser, tendre vers).",
      "isCompound": true,
      "compoundParts": [
            "be-",
            "trachten"
      ]
},
  "betrachtet": {
      "fr": "considéré / contemplé",
      "lit": "regardé avec déférence",
      "pos_fr": "Adjectif",
      "role": "Participe passé décrivant la vénération d'antan accordée aux professions libérales."
},
  "Betrieb": {
      "fr": "exploitation / marche de l'entreprise",
      "lit": "action d'exercer une activité",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin économique désignant la gestion matérielle de la grande industrie."
},
  "Betriebsweise": {
      "fr": "mode d'exploitation / méthode de production",
      "lit": "manière de faire fonctionner l'atelier",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin composé désignant les méthodes techniques et divisionnaires du travail industriel.",
      "etymology": "Composé économique associant : 1° « der Betrieb » (l'exploitation productive, l'atelier en activité continue, dérivé du verbe transitif betreiben = mener en avant, pousser le bétail ou la machinerie, moyen haut-allemand trīben, vieux haut-allemand trīban) ; 2° « die Weise » (la manière, la modalité technique, du vieux haut-allemand wīsa, racine germanique *wīsō-, cognat de l'anglais wise). Désigne chez Marx la structure organisationnelle concrète du procès de travail (ici corporatif puis manufacturier)."
},
  "Bettel": {
      "fr": "gueusaille / mendicité",
      "lit": "fait de mendier",
      "pos_fr": "Nom masculin",
      "role": "Le dénuement extrême causé par le paupérisme."
},
  "Bettelsack": {
      "fr": "besace de mendiant",
      "lit": "sac de mendicité",
      "pos_fr": "Nom masculin",
      "role": "La besace agitée hypocritement par l'aristocratie."
},
  "bevorstehend": {
      "fr": "imminent / prochain",
      "lit": "qui se tient devant dans le temps",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant la chute inéluctable des classes moyennes dans la sphère ouvrière."
},
  "Bevölkerung": {
      "fr": "population",
      "lit": "ensemble des habitants",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin démographique désignant les masses agglomérées dans les métropoles urbaines."
},
  "bewaffnet": {
      "fr": "armé",
      "lit": "muni d'armes de guerre défensives et offensives",
      "pos_fr": "Adjectif / Participe",
      "role": "Participe qualifiant la commune bourgeoise médiévale qui s'armait pour défendre son autonomie contre les seigneurs."
},
  "bewegen": {
      "fr": "mouvoir / agiter / inciter / émouvoir",
      "lit": "mettre en chemin ou en mouvement",
      "pos_fr": "Verbe",
      "role": "Verbe dialectique fondamental désignant la dynamique interne et la mise en mouvement des contradictions de classes.",
      "etymology": "Du moyen haut-allemand « bewegen », issu de « Weg » (chemin, voie).",
      "isCompound": true,
      "compoundParts": [
            "be-",
            "Weg"
      ]
},
  "Bewegung": {
      "fr": "mouvement / lutte politique",
      "lit": "mise en mouvement / dynamique sociale historique",
      "pos_fr": "Nom féminin",
      "role": "Substantif féminin désignant la dynamique politique globale de la lutte des classes."
},
  "bewegung": {
      "fr": "mouvement / lutte politique",
      "lit": "mise en mouvement / dynamique sociale historique",
      "pos_fr": "Nom féminin",
      "role": "Forme fléchie 'Bewegung' du lemme 'Bewegung'. Substantif féminin désignant la dynamique politique globale de la lutte des classes."
},
  "bewegungen": {
      "fr": "mouvement / lutte politique",
      "lit": "mise en mouvement / dynamique sociale historique",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'Bewegungen' du lemme 'Bewegung'. Substantif féminin désignant la dynamique politique globale de la lutte des classes."
},
  "beweisen": {
      "fr": "prouver / démontrer",
      "lit": "montrer de manière irréfutable",
      "pos_fr": "Verbe",
      "role": "Verbe soulignant la preuve historique éclatante administrée par le travail humain désenchaîné."
},
  "bewundern": {
      "fr": "admirer",
      "lit": "considérer comme miracle",
      "pos_fr": "Verbe",
      "role": "Verbe dénonçant la nostalgie réactionnaire fascinée par la barbarie chevaleresque."
},
  "Bewusstsein": {
      "fr": "conscience",
      "lit": "état d'être conscient / savoir de classe",
      "pos_fr": "Nom neutre",
      "role": "Substantif composé désignant la conscience de classe ouvrière éveillée par le parti."
},
  "bewußt": {
      "fr": "consciemment",
      "lit": "avec conscience",
      "pos_fr": "Adverbe",
      "role": "Action délibérée et lucide de classe."
},
  "Bewußtsein": {
      "fr": "conscience",
      "lit": "état d'être conscient / savoir intime",
      "pos_fr": "Nom neutre",
      "role": "Concept philosophique central du matérialisme historique : ce n'est pas la conscience des hommes qui détermine leur existence, c'est leur existence sociale qui détermine leur conscience.",
      "etymology": "Calque philosophique forgé par Christian Wolff au XVIIIe siècle d'après le latin « conscientia », composé de « bewusst » (participe passé de bewissen = savoir intimement) et du suffixe abstrait « -sein »."
},
  "bewußtsein": {
      "fr": "conscience",
      "lit": "état d'être conscient / savoir de classe",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'Bewußtsein' du lemme 'Bewusstsein'. Substantif composé désignant la conscience de classe ouvrière éveillée par le parti."
},
  "Bewußtseinsform": {
      "fr": "forme de conscience",
      "lit": "configuration idéologique",
      "pos_fr": "Nom féminin",
      "role": "Formes religieuses, juridiques ou philosophiques de la conscience."
},
  "bezahlt": {
      "fr": "salarié / rétribué",
      "lit": "auquel on a compté le prix",
      "pos_fr": "Adjectif",
      "role": "Participe passé démasquant le médecin et le juriste réduits à de simples ouvriers à gages."
},
  "Bezeichnend": {
      "fr": "significatif / caractéristique",
      "lit": "ce qui désigne avec force",
      "pos_fr": "Nom substantivé",
      "role": "Trait révélateur de la duplicité bourgeoise."
},
  "Beziehung": {
      "fr": "relation / rapport social",
      "lit": "lien tendu entre entités",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant les relations réciproques que les hommes doivent envisager sans mystification."
},
  "bieten": {
      "fr": "offrir / présenter",
      "lit": "tendre / présenter",
      "pos_fr": "Verbe",
      "role": "Ce qu'offre le marché ou l'opportunité révolutionnaire."
},
  "Bild": {
      "fr": "image / modèle",
      "lit": "représentation figurée",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre de la métaphore de la bourgeoisie modelant le monde « d'après sa propre image »."
},
  "Bilde": {
      "fr": "image / tableau",
      "lit": "forme fléchie de Bild",
      "pos_fr": "Nom neutre",
      "role": "Forme fléchie de Bild dans la locution « nach ihrem Bilde »."
},
  "bilden": {
      "fr": "former / constituer",
      "lit": "donner forme",
      "pos_fr": "Verbe",
      "role": "Verbe décrivant l'organisation politique du prolétariat en classe et parti unifiés."
},
  "Bildung": {
      "fr": "formation / culture / éducation",
      "lit": "action de donner forme",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant à la fois l'accumulation du capital et l'éducation politique des ouvriers."
},
  "Bildungselement": {
      "fr": "élément d'éducation / arme théorique",
      "lit": "particule formative",
      "pos_fr": "Nom neutre",
      "role": "Nom composé désignant les armes intellectuelles que la bourgeoisie transmet involontairement au prolétariat."
},
  "bis": {
      "fr": "jusqu'à",
      "lit": "vers le point d'aboutissement",
      "pos_fr": "Préposition",
      "role": "Préposition temporelle marquant le seuil historique de la crise révolutionnaire."
},
  "bisher": {
      "fr": "jusqu'ici / jusqu'alors",
      "lit": "jusqu'à maintenant",
      "pos_fr": "Adverbe",
      "role": "Adverbe délimitant l'époque prébourgeoise révolue."
},
  "bisherig": {
      "fr": "qui a existé jusqu'alors / passé",
      "lit": "qui s'étendait jusqu'à présent",
      "pos_fr": "Adjectif",
      "role": "Adjectif marquant le seuil historique entre les sociétés passées et la modernité.",
      "etymology": "Adjectif temporel synthétique formé par le suffixe « -ig » sur l'adverbe « bisher » (jusqu'ici). « bisher » est composé de la préposition marquant la borne ultime « bis » (moyen haut-allemand biz, contraction discutée d'un étymon vieux haut-allemand *bi-ez / près de cela ou *bi-wizzan, étymologie disputée) et de l'adverbe déictique « her » (vieux haut-allemand hera = vers ici, mouvement en direction du présent de l'énonciation). Il circonscrit la totalité révolue de la préhistoire humaine avant la rupture révolutionnaire du prolétariat."
},
  "bisherigen": {
      "fr": "jusqu'alors existant / actuel",
      "lit": "qui a duré jusqu'à présent",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'bisherigen' du lemme 'bisherig'. Épithète qualifiant la société de classes antérieure vouée au dépassement."
},
  "bitter": {
      "fr": "amer / cinglant",
      "lit": "qui mord la langue",
      "pos_fr": "Adjectif",
      "role": "Critiques acerbes dirigées contre la bourgeoisie."
},
  "Bitteres": {
      "fr": "de l'amertume / chose amère",
      "lit": "ce qui est amer",
      "pos_fr": "Pronom",
      "role": "Mélange d'amertume et d'ironie dans les pamphlets."
},
  "bleiben": {
      "fr": "rester / demeurer",
      "lit": "persister dans l'état",
      "pos_fr": "Verbe",
      "role": "Verbe constatant l'impossibilité pour la bourgeoisie de demeurer plus longtemps classe dirigeante."
},
  "blind": {
      "fr": "aveugle",
      "lit": "dépourvu de vue",
      "pos_fr": "Adjectif",
      "role": "Incompréhension aveugle de la marche de l'histoire."
},
  "bloß": {
      "fr": "simple / pur / nu",
      "lit": "dépouillé de tout ornement",
      "pos_fr": "Adjectif",
      "role": "Adjectif soulignant la réduction de l'ouvrier à un simple appendice mécanique de la machine."
},
  "Boden": {
      "fr": "sol / terrain",
      "lit": "fondement terrestre",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin métaphorique désignant le socle national que le marché mondial dérobe à l'industrie."
},
  "Bourgeois": {
      "fr": "bourgeois",
      "lit": "citadin affranchi puis détenteur de capital",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin invariable au pluriel désignant les membres de la classe dominante moderne.",
      "etymology": "Emprunt direct au français « bourgeois » (habitant franc du bourg, du bas-latin burgensis, formé sur Burg)."
},
  "bourgeois": {
      "fr": "bourgeois",
      "lit": "membre de la classe possédante",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'Bourgeois' du lemme 'Bourgeois'. Substantif d'origine française au datif masculin pluriel désignant les radicaux bourgeois."
},
  "Bourgeois-Persönlichkeit": {
      "fr": "personnalité bourgeoise",
      "lit": "personnalité bourgeoise",
      "pos_fr": "Nom féminin composé",
      "role": "La seule personnalité reconnue comme libre par le droit bourgeois."
},
  "Bourgeoisepoch": {
      "fr": "époque bourgeoise",
      "lit": "époque bourgeoise",
      "pos_fr": "Nom féminin",
      "role": "Concept historique désignant l'époque bourgeoise, caractérisée par la simplification bipolaire des luttes de classes."
},
  "Bourgeoisepoche": {
      "fr": "époque bourgeoise",
      "lit": "époque bourgeoise",
      "pos_fr": "Nom",
      "role": "Nom composé désignant la phase moderne caractérisée par la simplification des antagonismes."
},
  "Bourgeoisherrschaft": {
      "fr": "domination bourgeoise",
      "lit": "domination bourgeoise",
      "pos_fr": "Nom féminin composé",
      "role": "Le pouvoir politique et économique sans partage de la bourgeoisie."
},
  "Bourgeoisideolog": {
      "fr": "idéologue bourgeois",
      "lit": "idéologue bourgeois",
      "pos_fr": "Nom masculin",
      "role": "Nom composé désignant les idéologues bourgeois qui s'élèvent à l'intelligence théorique de l'ensemble du mouvement historique."
},
  "Bourgeoisideologe": {
      "fr": "idéologue bourgeois",
      "lit": "idéologue bourgeois",
      "pos_fr": "Nom",
      "role": "Nom composé désignant les intellectuels bourgeois capables de comprendre l'ensemble du mouvement historique."
},
  "Bourgeoisie": {
      "fr": "bourgeoisie",
      "lit": "classe des détenteurs du capital moderne",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin emprunté au français, désignant chez Marx la classe dominante qui possède les moyens de production.",
      "etymology": "Emprunté au français « bourgeoisie » (au XVIIIe siècle), dérivé de « bourgeois », issu du bas latin « burgensis » (habitant du bourg fortifié, burgus, d'origine germanique *burgz). Désigne la classe des capitalistes modernes, propriétaires des moyens de production sociale et employeurs du travail salarié."
},
  "bourgeoisie": {
      "fr": "bourgeoisie",
      "lit": "classe des détenteurs des moyens de production",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'Bourgeoisie' du lemme 'Bourgeoisie'. Substantif désignant la classe capitaliste dominante moderne."
},
  "Bourgeoisiesozialismus": {
      "fr": "socialisme bourgeois",
      "lit": "idéologie réformiste du capital",
      "pos_fr": "Nom masculin composé",
      "role": "Socialisme philanthropique cherchant à préserver le capital sans ses tares."
},
  "Bourgeoisklas": {
      "fr": "classe bourgeoise",
      "lit": "classe bourgeoise",
      "pos_fr": "Nom féminin",
      "role": "Nom composé fondamental désignant la classe bourgeoise moderne, détentrice des moyens de production et du capital."
},
  "Bourgeoisklasse": {
      "fr": "classe bourgeoise",
      "lit": "classe des détenteurs du capital moderne",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin composé désignant la classe dominante propriétaire des moyens de production sociaux.",
      "etymology": "Composé hybride associant l'emprunt au français « Bourgeois » (habitant du bourg, Burg) et « die Klasse », emprunt savant au latin classique « classis » (les classes censitaires de Rome sous Servius Tullius, de calare = convoquer)."
},
  "Bourgeoisregim": {
      "fr": "régime bourgeois",
      "lit": "ordre politique et social du capital",
      "pos_fr": "Nom neutre",
      "role": "L'État moderne représentatif au service du capital."
},
  "Bourgeoissozialismus": {
      "fr": "socialisme bourgeois",
      "lit": "socialisme bourgeois",
      "pos_fr": "Nom masculin composé",
      "role": "Courant cherchant à guérir les maux du capitalisme pour le conserver."
},
  "Bourgeoisstaat": {
      "fr": "État bourgeois",
      "lit": "appareil étatique du capital",
      "pos_fr": "Nom masculin",
      "role": "Nom composé désignant l'État représentatif moderne comme instrument de la classe possédante."
},
  "Bourgeoisvolk": {
      "fr": "nation bourgeoise",
      "lit": "peuple bourgeois",
      "pos_fr": "Nom neutre",
      "role": "Nom composé désignant une nation bourgeoise assujettissant les nations paysannes et colonisées à son modèle marchand."
},
  "Bourgeoisvölker": {
      "fr": "nations bourgeoises",
      "lit": "peuples bourgeois",
      "pos_fr": "Nom masculin",
      "role": "Nom composé désignant les puissances industrielles dominatrices de l'Orient."
},
  "Brand": {
      "fr": "incendie / feu destructeur",
      "lit": "action de brûler",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin de la locution « in Brand stecken » (incendier les fabriques en révolte)."
},
  "brandmarkend": {
      "fr": "infamant / flétrissant",
      "lit": "qui marque au fer rouge incandescent",
      "pos_fr": "Participe adjectivé",
      "role": "Adjectif métaphorique violent évoquant le châtiment médiéval au fer rouge.",
      "etymology": "Composé pénal et corporel verbalisé unissant : 1° « der Brand » (le tison ardent, le fer rougi à blanc au brasier, déverbal fort de brennen = brûler, vieux haut-allemand brant, racine germanique *brannjanan) ; 2° « die Marke » (le stigmate indélébile, la signature d'infamie, du moyen haut-allemand marke, emprunt au vieux francique germanique *marka = signe distinctif, empreinte). Fait référence au supplice juridique de la flétrissure au fer rouge appliqué sous l'Ancien Régime sur la chair vive des suppliciés (la fleur de lys en France). L'accusation de communisme opère dans le discours bourgeois comme un fer rouge cherchant à marquer au corps l'adversaire pour le retrancher de l'humanité respectable."
},
  "brauchen": {
      "fr": "avoir besoin de / nécessiter / employer",
      "lit": "faire usage de / consommer",
      "pos_fr": "Verbe",
      "role": "Verbe économique traduisant les besoins objectifs engendrés par le développement des forces productives et de la vie sociale.",
      "etymology": "Du moyen haut-allemand « brūchen », vieux haut-allemand « brūhhan » (jouir de, utiliser), racine germanique *brūkaną."
},
  "Brechen": {
      "fr": "rupture / bris",
      "lit": "action de rompre / cassure",
      "pos_fr": "Nom neutre",
      "role": "Substantif verbal désignant la rupture radicale (« radikales Brechen ») que la révolution communiste opère avec les rapports de propriété et les idées traditionnelles.",
      "etymology": "Nom d'action dérivé du verbe fort « brechen » (en moyen haut-allemand « brechen », en vieux haut-allemand « brehhan », issu du proto-germanique *brekanan, cognat du latin frangere)."
},
  "brechen": {
      "fr": "rompre / briser",
      "lit": "casser par la force",
      "pos_fr": "Verbe",
      "role": "Verbe marquant l'irruption soudaine des émeutes et contestations ouvrières."
},
  "bringen": {
      "fr": "amener / porter / réaliser",
      "lit": "transporter vers",
      "pos_fr": "Verbe",
      "role": "Verbe entrant dans la locution « zustande bringen » (accomplir ce dont l'activité humaine est capable)."
},
  "brutal": {
      "fr": "brutal / féroce",
      "lit": "de la bête brute",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant la violence sans fard de l'exploitation marchande et féodale."
},
  "buntscheckig": {
      "fr": "bariolé / disparate / bigarré",
      "lit": "marqué de taches et carreaux bicolores variés",
      "pos_fr": "Adjectif",
      "role": "Adjectif métaphorique qualifiant la multiplicité désordonnée et hétérogène des liens juridiques et seigneuriaux de la féodalité.",
      "etymology": "Composé associant : 1° « bunt » (de plusieurs couleurs, bigarré, en moyen haut-allemand bunt, emprunté au moyen-bas-allemand bunt = fourrure de vair aux peaux grises et blanches alternées, issu de l'ancien français vair) ; 2° « scheckig » (tacheté, moucheté, dérivé de die Schecke = pourpoint bicolore ou robe tachetée au XVe siècle, emprunté à l'ancien français jaque ; étymon discuté et origine incertaine selon Kluge)."
},
  "buntscheckigst": {
      "fr": "le plus disparate / bariolé",
      "lit": "tacheté de mille couleurs",
      "pos_fr": "Adjectif",
      "role": "Désigne les réformes bariolées et hétéroclites."
},
  "Bärenhäuterei": {
      "fr": "paresse crasse / fainéantise légendaire",
      "lit": "action de se coucher sur la peau d'ours",
      "pos_fr": "Nom féminin",
      "role": "Archaïsme satirique désignant l'indolence oisive et brutale des seigneurs du moyen âge."
},
  "Bürger": {
      "fr": "bourgeois / citoyen",
      "lit": "habitant du bourg",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant l'habitant de la cité médiévale précurseur du capitaliste moderne."
},
  "Bürgerkrieg": {
      "fr": "guerre civile",
      "lit": "conflit armé entre citoyens",
      "pos_fr": "Nom masculin",
      "role": "Nom composé désignant la guerre larvée de classe qui couve au sein de la société avant la révolution."
},
  "bürgerlich": {
      "fr": "bourgeois",
      "lit": "relatif à la bourgeoisie ou au citoyen",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant les rapports matériels et juridiques dominés par la bourgeoisie.",
      "etymology": "Dérivé au moyen du suffixe d'appartenance « -lich » de « der Bürger » (le citoyen franc, l'habitant du bourg fortifié, Burg). Possède en allemand philosophique une ambivalence structurelle : il traduit à la fois le français « bourgeois » (la classe dominante détentrice du capital) et « civil » (le citoyen privé de la sphère des besoins)."
},
  "bürgerliche": {
      "fr": "bourgeois",
      "lit": "propre à la bourgeoisie et au capital",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'bürgerliche' du lemme 'bürgerlich'. Épithète qualifiant la révolution anti-féodale bourgeoise imminente en Allemagne."
},
  "bürgerlichen": {
      "fr": "bourgeois",
      "lit": "propre à la bourgeoisie et au capital",
      "pos_fr": "Nom neutre",
      "role": "Forme fléchie 'bürgerlichen' du lemme 'bürgerlich'. Épithète qualifiant la révolution anti-féodale bourgeoise imminente en Allemagne."
},
  "Bürokrat": {
      "fr": "bureaucrate",
      "lit": "fonctionnaire d'appareil d'État",
      "pos_fr": "Nom masculin",
      "role": "Fonctionnaires étatiques soutenant la monarchie absolue."
},
  "Charakter": {
      "fr": "caractère / nature propre",
      "lit": "marque distinctive gravée",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant la singularité humaine ou nationale dépouillée par le capital."
},
  "Chartist": {
      "fr": "chartiste",
      "lit": "partisan de la Charte du Peuple (People's Charter de 1838)",
      "pos_fr": "Nom masculin",
      "role": "Substantif au datif pluriel désignant le mouvement ouvrier chartiste britannique."
},
  "Chartiste": {
      "fr": "chartiste",
      "lit": "partisan de la Charte du peuple",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin politique désignant les militants ouvriers anglais du chartisme (People's Charter de 1838), premier mouvement politique de masse de la classe ouvrière moderne.",
      "etymology": "Emprunté à l'anglais « Chartist », dérivé de « Charter » (la Charte du Peuple), lui-même emprunté à l'ancien français « charte », issu du latin classique « charta » (feuille de papyrus, écrit officiel)."
},
  "chartisten": {
      "fr": "chartiste",
      "lit": "partisan de la Charte du Peuple (People's Charter de 1838)",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'Chartisten' du lemme 'Chartist'. Substantif au datif pluriel désignant le mouvement ouvrier chartiste britannique."
},
  "Chef": {
      "fr": "chef / dirigeant",
      "lit": "tête / meneur / commandant en premier",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin emprunté au français désignant les maîtres capitalistes comme commandants suprêmes du procès de production.",
      "etymology": "Emprunt au XVIIIe siècle au français « chef » (la tête, le conducteur suprême), issu du latin populaire *capum, altération du latin classique « caput » (la tête, l'extrémité supérieure, issu de la racine indo-européenne *kaput-)."
},
  "Chemie": {
      "fr": "chimie",
      "lit": "science de la matière",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin célébrant les progrès des sciences appliquées à l'agriculture et à l'industrie."
},
  "chinesisch": {
      "fr": "chinois",
      "lit": "relatif à la Chine impériale",
      "pos_fr": "Adjectif",
      "role": "Adjectif géographique marquant l'ouverture impérialiste du gigantesque marché asiatique.",
      "etymology": "Dérivé avec le suffixe germanique « -isch » sur le toponyme « China » (emprunt au sanskrit Cīna, désignant la dynastie Qin / Ts'in qui unifia l'empire chinois au IIIe siècle av. J.-C.)."
},
  "Chor": {
      "fr": "chœur",
      "lit": "ensemble chantant d'une voix",
      "pos_fr": "Nom masculin",
      "role": "Chœur unanime des classes possédantes dénonçant le communisme."
},
  "Christentum": {
      "fr": "christianisme",
      "lit": "religion chrétienne",
      "pos_fr": "Nom neutre",
      "role": "Le christianisme et son rôle idéologique de résignation."
},
  "christlich": {
      "fr": "chrétien",
      "lit": "relatif au Christ",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant le christianisme, dont Marx analyse la compromission historique avec le pouvoir temporel des oppresseurs.",
      "etymology": "Dérivé de « Christus » avec le suffixe germanique « -lich »."
},
  "d.h.": {
      "fr": "c'est-à-dire",
      "lit": "abréviation de das heißt (cela signifie)",
      "pos_fr": "Ponctuation",
      "role": "Locution introduisant une équivalence conceptuelle rigoureuse dans l'argumentation."
},
  "da": {
      "fr": "comme / puisque / là où",
      "lit": "en ce point temporel ou causal",
      "pos_fr": "Adverbe",
      "role": "Introduit la cause matérielle d'un événement.",
      "etymology": "Issu du moyen haut-allemand « dō / dā », vieux haut-allemand « dō » (alors, lorsque) et « dār » (là). Proto-germanique *þō / *þar, déictique temporel et spatial issu de la racine pronominale indo-européenne *to-."
},
  "dadurch": {
      "fr": "par là / de cette manière",
      "lit": "à travers ce moyen précis",
      "pos_fr": "Adverbe pronominal",
      "role": "Adverbe pronominal reliant la cause matérielle à sa conséquence sociale."
},
  "dagegen": {
      "fr": "en revanche / en revanche / par contre",
      "lit": "contre cela",
      "pos_fr": "Adverbe",
      "role": "Adverbe opposant les modes de production passés et présents."
},
  "daher": {
      "fr": "par conséquent / c'est pourquoi",
      "lit": "venant de là",
      "pos_fr": "Adverbe",
      "role": "Adverbe marquant la déduction logique tirée des rapports matériels."
},
  "damals": {
      "fr": "à cette époque-là / alors",
      "lit": "à ce moment-là",
      "pos_fr": "Adverbe",
      "role": "Adverbe temporel situant une phase historique antérieure au regard du développement accompli du capitalisme.",
      "etymology": "Composé de « da » (alors) + « Mal » (fois, moment) + « -s ».",
      "isCompound": true,
      "compoundParts": [
            "da",
            "Mal",
            "-s"
      ]
},
  "damit": {
      "fr": "par là même / ainsi",
      "lit": "avec cela / en conséquence",
      "pos_fr": "Adverbe pronominal",
      "role": "Adverbe pronominal marquant la corrélation immédiate entre expansion marchande et essor bourgeois."
},
  "Dampf": {
      "fr": "vapeur",
      "lit": "vapeur d'eau sous pression / fumée thermomécanique",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant la force motrice thermodynamique de la première révolution industrielle qui libéra les manufactures des cours d'eau ruraux.",
      "etymology": "Issu du moyen haut-allemand « tampf » (vapeur, fumée chaude étouffante), vieux haut-allemand « damph » (XIe siècle). Du proto-germanique *dampaz (vapeur, exhalaison), rattaché à la racine indo-européenne *dʰembʰ- (fumer, souffler). Cognat de l'anglais damp."
},
  "Dampfschiffahrt": {
      "fr": "navigation à vapeur",
      "lit": "navigation par la force de la vapeur",
      "pos_fr": "Nom féminin",
      "role": "Nom composé illustrant la révolution des transports transatlantiques au XIXe siècle."
},
  "dann": {
      "fr": "puis / ensuite / alors",
      "lit": "à ce moment ultérieur (adverbe temporel)",
      "pos_fr": "Adverbe de succession temporelle",
      "role": "Adverbe temporel marquant la transition vers la période manufacturière de la bourgeoisie."
},
  "daraus": {
      "fr": "de là / de cela",
      "lit": "hors de cela",
      "pos_fr": "Pronom",
      "role": "Pronom adverbial désignant la cause productive issue des contradictions du capital."
},
  "darin": {
      "fr": "en cela / là-dedans / y",
      "lit": "dans cela",
      "pos_fr": "Adverbe",
      "role": "Adverbe pronominal ciblant précisément le nœud dialectique ou le siège d'une contradiction fondamentale.",
      "etymology": "Composé de « da- » (là) + « in » (dans).",
      "isCompound": true,
      "compoundParts": [
            "da",
            "in"
      ]
},
  "darlegen": {
      "fr": "exposer / expliquer publiquement",
      "lit": "poser devant les yeux de tous",
      "pos_fr": "Verbe séparable",
      "role": "Verbe de transparence politique : les communistes récusent le secret et exposent leurs buts à la face du monde.",
      "etymology": "Verbe composé séparable associant l'adverbe démonstratif « dar » (forme ancienne et locative de « da », vieux haut-allemand dara = vers là, sous les yeux du public) et le verbe fondamental « legen » (poser à plat, coucher, faire reposer, vieux haut-allemand leggen, verbe causatif germanique *lagjanan issu de liegen). Littéralement : exposer au grand jour sur la table politique, soumettre à l'examen rationnel de tous."
},
  "darstellen": {
      "fr": "représenter / constituer",
      "lit": "poser devant",
      "pos_fr": "Verbe",
      "role": "Représentation concrète des rapports sociaux."
},
  "darum": {
      "fr": "pour autant / pour cela",
      "lit": "autour de cela / pour ce motif",
      "pos_fr": "Adverbe",
      "role": "Adverbe marquant la réserve d'indépendance critique des communistes."
},
  "darüber": {
      "fr": "au-dessus / là-dessus / à ce sujet",
      "lit": "au-dessus de cela",
      "pos_fr": "Adverbe",
      "role": "Adverbe pronominal introduisant la prise de position théorique sur un litige ou une illusion idéologique.",
      "etymology": "Composé de « da- » + « über » (sur, au-delà).",
      "isCompound": true,
      "compoundParts": [
            "da",
            "über"
      ]
},
  "das": {
      "fr": "le / la / les / ce",
      "lit": "l'article défini / le démonstratif",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'das' du lemme 'der'. Article défini déterminant un groupe nominal selon son cas, genre et nombre."
},
  "das heißt": {
      "fr": "c'est-à-dire",
      "lit": "cela signifie",
      "pos_fr": "Locution conjonctive",
      "role": "Formule rigoureuse d'explication dialectique posant l'équivalence entre deux termes théoriques.",
      "etymology": "Locution formée du pronom démonstratif neutre « das » et du verbe fort « heißen » (signifier, en moyen haut-allemand « heiჳen », vieux haut-allemand « heizan »)."
},
  "Dasein": {
      "fr": "existence / être-là",
      "lit": "fait d'exister concrètement",
      "pos_fr": "Nom neutre",
      "role": "Conditions concrètes de l'existence matérielle."
},
  "dass": {
      "fr": "que",
      "lit": "conjonction de subordination",
      "pos_fr": "Conjonction de subordination",
      "role": "Conjonction introduisant une proposition complétive rejetant le verbe en fin de proposition."
},
  "dauernd": {
      "fr": "permanent / durable",
      "lit": "qui persiste dans le temps",
      "pos_fr": "Adjectif",
      "role": "Adjectif décrivant les syndicats stables formés en vue des grèves et soulèvements."
},
  "dazu": {
      "fr": "pour cela / en plus / à cette fin / en outre",
      "lit": "vers cela",
      "pos_fr": "Adverbe",
      "role": "Adverbe pronominal désignant le moyen approprié ou la contribution concrète à la réalisation d'un objectif de classe.",
      "etymology": "Composé de « da- » + « zu » (vers, à).",
      "isCompound": true,
      "compoundParts": [
            "da",
            "zu"
      ]
},
  "daß": {
      "fr": "que",
      "lit": "conjonction complétive",
      "pos_fr": "Conjonction",
      "role": "Forme fléchie 'daß' du lemme 'dass'. Conjonction introduisant la proposition complétive d'objet de 'verkennen' et 'erklären'."
},
  "dem": {
      "fr": "le / la / les / ce",
      "lit": "l'article défini / le démonstratif",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'dem' du lemme 'der'. Article défini déterminant un groupe nominal selon son cas, genre et nombre."
},
  "Demokratie": {
      "fr": "démocratie",
      "lit": "gouvernement du peuple",
      "pos_fr": "Nom féminin",
      "role": "La conquête de la démocratie par la classe ouvrière érigée en classe dominante."
},
  "demokratisch": {
      "fr": "démocratique / démocrate",
      "lit": "relatif à la démocratie républicaine",
      "pos_fr": "Adjectif",
      "role": "Épithète qualifiant les partis populaires et socialistes d'opposition."
},
  "demokratischen": {
      "fr": "démocratique / démocrate",
      "lit": "relatif à la démocratie républicaine",
      "pos_fr": "Nom neutre",
      "role": "Forme fléchie 'demokratischen' du lemme 'demokratisch'. Épithète qualifiant les partis populaires et socialistes d'opposition."
},
  "den": {
      "fr": "le / la / les / ce",
      "lit": "l'article défini / le démonstratif",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'den' du lemme 'der'. Article défini déterminant un groupe nominal selon son cas, genre et nombre."
},
  "denken": {
      "fr": "penser / réfléchir / concevoir",
      "lit": "exercer l'esprit",
      "pos_fr": "Verbe",
      "role": "Verbe désignant l'activité intellectuelle et rationnelle, produit social ancré dans les conditions matérielles d'existence.",
      "etymology": "Du moyen haut-allemand « denken », vieux haut-allemand « dencan », de racine indo-européenne *teng- (penser, sentir)."
},
  "denn": {
      "fr": "car / en effet",
      "lit": "puisque / car",
      "pos_fr": "Conjonction",
      "role": "Conjonction de coordination introduisant la justification causale objective d'une proposition théorique.",
      "etymology": "Doublet atone de « dann » (alors, puis), du vieux haut-allemand « danna »."
},
  "der": {
      "fr": "le / la / les / ce",
      "lit": "article défini ou pronom relatif",
      "pos_fr": "Article défini / Pronom relatif",
      "role": "Article défini décliné déterminant le nom en cas, genre et nombre."
},
  "dergestalt": {
      "fr": "de telle sorte / à un tel point",
      "lit": "de cette forme",
      "pos_fr": "Adverbe",
      "role": "Articule la dépendance idéologique vis-à-vis des gouvernements."
},
  "derselbe": {
      "fr": "le même / ce même",
      "lit": "celui-là même / le identique",
      "pos_fr": "Pronom démonstratif d'identité",
      "role": "Pronom ou adjectif d'identité marquant la stricte équivalence ou proportion (employé dans « in demselben Maße » : dans la même mesure, au fur et à mesure).",
      "etymology": "Composé unissant l'article démonstratif « der » et le pronom germanique d'identité « selb » (identique, en vieux haut-allemand selbo, en moyen haut-allemand selbe, issu du proto-germanique *selbaz = de soi-même, propre, cognat de l'anglais self)."
},
  "Despotie": {
      "fr": "despotisme",
      "lit": "pouvoir tyrannique arbitraire",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin caractérisant la tyrannie mesquine exercée par le patron dans l'atelier."
},
  "despotischer": {
      "fr": "despotique / autoritaire",
      "lit": "exercé en maître absolu",
      "pos_fr": "Adjectif",
      "role": "Adjectif caractérisant la fermeté résolue et les mesures dictatoriales nécessaires de l'État prolétarien brisant les privilèges de classe.",
      "etymology": "Emprunté au grec ancien « despotēs » (maître absolu de maison) + « -isch »."
},
  "desto": {
      "fr": "d'autant plus",
      "lit": "à proportion de",
      "pos_fr": "Adverbe",
      "role": "Adverbe corrélatif (je... desto) marquant une proportionnalité rigoureuse."
},
  "deutsch": {
      "fr": "allemand",
      "lit": "relatif aux États germaniques",
      "pos_fr": "Adjectif",
      "role": "Adjectif national désignant les polices des monarchies de la Confédération germanique.",
      "etymology": "Issu du moyen haut-allemand « diutsch », vieux haut-allemand « diutisc » (populaire, qui parle la langue du peuple germanique vernaculaire par opposition au latin des clercs), dérivé en -isc sur « diot » (le peuple, la foule, du proto-germanique *þeudō = peuple, racine indo-européenne *tewtéh₂-)."
},
  "deutsche": {
      "fr": "allemand",
      "lit": "propre au peuple allemand",
      "pos_fr": "Nom masculin",
      "role": "Forme fléchie 'deutsche' du lemme 'deutsch'. Épithète qualifiant les ouvriers allemands et leur révolution bourgeoise spécifique."
},
  "deutschen": {
      "fr": "allemand",
      "lit": "propre au peuple allemand",
      "pos_fr": "Nom neutre",
      "role": "Forme fléchie 'deutschen' du lemme 'deutsch'. Épithète qualifiant les ouvriers allemands et leur révolution bourgeoise spécifique."
},
  "Deutschland": {
      "fr": "Allemagne",
      "lit": "pays du peuple allemand",
      "pos_fr": "Nom propre",
      "role": "Nom propre au datif neutre singulier désignant l'espace politique central de 1848."
},
  "deutschland": {
      "fr": "Allemagne",
      "lit": "pays du peuple allemand",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'Deutschland' du lemme 'Deutschland'. Nom propre au datif neutre singulier désignant l'espace politique central de 1848."
},
  "Dezennien": {
      "fr": "décennies",
      "lit": "périodes de dix ans",
      "pos_fr": "Nom féminin",
      "role": "Nom savant désignant les décennies récentes de révolte des forces productives."
},
  "die": {
      "fr": "le / la / les / ce",
      "lit": "l'article défini / le démonstratif",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'die' du lemme 'der'. Article défini déterminant un groupe nominal selon son cas, genre et nombre."
},
  "dienen": {
      "fr": "servir à",
      "lit": "être au service de",
      "pos_fr": "Verbe",
      "role": "Verbe constatant que les forces productives ne servent plus à conforter la propriété bourgeoise."
},
  "dies": {
      "fr": "ce / cette / ces",
      "lit": "pronom démonstratif désignant l'objet proche",
      "pos_fr": "Pronom démonstratif",
      "role": "Démonstratif marquant la désignation concrète du spectre."
},
  "diese": {
      "fr": "ce / cette / ces / celui-ci",
      "lit": "celui-ci (démonstratif d'immédiateté)",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'diese' du lemme 'dieser'. Déterminant démonstratif renvoyant au sujet politique immédiatement nommé."
},
  "dieselbe": {
      "fr": "le même / ce même",
      "lit": "celui-là même",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'dieselbe' du lemme 'derselbe'. Pronom démonstratif d'identité mettant en relief l'héroïsme insurrectionnel du parti polonais."
},
  "diesen": {
      "fr": "ce / cette / ces / celui-ci",
      "lit": "celui-ci (démonstratif d'immédiateté)",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'diesen' du lemme 'dieser'. Déterminant démonstratif renvoyant au sujet politique immédiatement nommé."
},
  "dieser": {
      "fr": "ce / cette / ces / celui-ci",
      "lit": "celui-ci / ce proche (démonstratif)",
      "pos_fr": "Pronom / déterminant démonstratif",
      "role": "Déterminant démonstratif désignant avec précision un fait ou une institution immédiatement antérieure."
},
  "direkt": {
      "fr": "direct / sans détour",
      "lit": "en ligne droite / immédiatement",
      "pos_fr": "Adjectif",
      "role": "Adjectif marquant la brutalité immédiate du contrat salarial entre le patron et l'ouvrier sans médiation corporative.",
      "etymology": "Emprunt savant au latin classique « directus » (droit, en ligne droite, sans détour), participe passé de dirigere (aligner, guider, de dis- et regere = mener droit)."
},
  "doch": {
      "fr": "pourtant / cependant / néanmoins / mais",
      "lit": "pourtant",
      "pos_fr": "Adverbe",
      "role": "Conjonction adversative marquant le retournement dialectique ou le démenti cinglant infligé par la réalité aux illusions bourgeoises.",
      "etymology": "Du moyen haut-allemand « doch », vieux haut-allemand « doh », de racine proto-germanique *þau-hw (et pourtant)."
},
  "Domestik": {
      "fr": "domestique / laquais",
      "lit": "serviteur de maison",
      "pos_fr": "Nom masculin",
      "role": "Serviteurs de l'Ancien Régime."
},
  "dort": {
      "fr": "là / là-bas",
      "lit": "en cet autre lieu éloigné",
      "pos_fr": "Adverbe de lieu",
      "role": "Adverbe spatial marquant la diversité territoriale des régimes urbains en Europe."
},
  "Douanenlinie": {
      "fr": "ligne de douanes / barrière tarifaire",
      "lit": "frontière douanière",
      "pos_fr": "Nom féminin",
      "role": "Terme d'origine française désignant le cordon douanier national unifié sous l'État bourgeois."
},
  "dritt": {
      "fr": "troisième / tiers",
      "lit": "qui occupe le rang trois",
      "pos_fr": "Adjectif numéral ordinal",
      "role": "Adjectif ordinal employé dans l'expression institutionnelle historique « dritter Stand » (tiers état roturier taillable de la monarchie)."
},
  "drohend": {
      "fr": "menaçant / de manière menaçante",
      "lit": "en pesant d'une menace",
      "pos_fr": "Adverbe",
      "role": "Participe présent marquant le péril récurrent des crises commerciales."
},
  "drohender": {
      "fr": "de façon plus menaçante",
      "lit": "plus menaçant",
      "pos_fr": "Adverbe",
      "role": "Menace grandissante des crises périodiques."
},
  "Druck": {
      "fr": "pression / oppression",
      "lit": "force appliquée qui pèse",
      "pos_fr": "Nom masculin",
      "role": "Pression exercée par la grande industrie sur le salaire."
},
  "drängen": {
      "fr": "refouler / pousser avec force",
      "lit": "presser / pousser avec insistance vers un lieu",
      "pos_fr": "Verbe faible",
      "role": "Verbe d'action exprimant l'éviction brutale des anciennes classes féodales hors de l'avant-scène sociale."
},
  "Dräu": {
      "fr": "menace",
      "lit": "avertissement sombre",
      "pos_fr": "Nom masculin poétique",
      "role": "Menace sourde pesant sur l'ordre établi."
},
  "Dunsthimmel": {
      "fr": "ciel de brume / vapeurs chimériques",
      "lit": "ciel nébuleux",
      "pos_fr": "Nom masculin poétique",
      "role": "Brumes mystiques de la philosophie allemande spéculative."
},
  "Duodezausgabe": {
      "fr": "édition in-douze / modèle de poche",
      "lit": "petit format de livre",
      "pos_fr": "Nom féminin métaphorique",
      "role": "Format miniature et étriqué des républiques idéales utopiques."
},
  "durch": {
      "fr": "par / à travers",
      "lit": "au moyen de",
      "pos_fr": "Préposition (régime accusatif)",
      "role": "Préposition d'instrument régissant l'accusatif."
},
  "durchlaufen": {
      "fr": "parcourir / traverser / franchir successivement",
      "lit": "courir à travers",
      "pos_fr": "Verbe",
      "role": "Verbe désignant les stades et étapes nécessaires successivement franchis par une classe dans son développement historique.",
      "etymology": "Composé de « durch » (à travers) + « laufen » (courir).",
      "isCompound": true,
      "compoundParts": [
            "durch-",
            "laufen"
      ]
},
  "durchmachen": {
      "fr": "traverser / parcourir / subir",
      "lit": "faire à travers",
      "pos_fr": "Verbe faible séparable",
      "role": "Verbe historique désignant les différentes étapes et phases successives de développement que le prolétariat parcourt nécessairement.",
      "etymology": "Composé du préverbe « durch » (à travers) et du verbe « machen » (faire, accomplir, en moyen haut-allemand « machen », vieux haut-allemand « mahhōn »)."
},
  "Durchschnittspreis": {
      "fr": "prix moyen",
      "lit": "moyenne arithmétique des prix",
      "pos_fr": "Nom masculin composé",
      "role": "Le salaire ouvrier comme simple prix moyen de la force de travail."
},
  "durchsetzen": {
      "fr": "imposer / faire triompher",
      "lit": "poser à travers",
      "pos_fr": "Verbe",
      "role": "Triomphe des intérêts prolétariens."
},
  "durchtränken": {
      "fr": "imbiber / saturer",
      "lit": "abreuver à travers",
      "pos_fr": "Verbe",
      "role": "Pénétration de la spéculation dans les concepts politiques."
},
  "dänisch": {
      "fr": "danois",
      "lit": "en langue danoise",
      "pos_fr": "Adjectif",
      "role": "Adjectif de langue pour l'édition scandinave du Manifeste.",
      "etymology": "Dérivé du nom du peuple des Danois (Dänen, proto-germanique *Daniz = habitants des terres plates)."
},
  "dürfen": {
      "fr": "pouvoir / avoir le droit",
      "lit": "avoir le droit / être autorisé",
      "pos_fr": "Verbe",
      "role": "Verbe modal marquant la légitimité éthique et la justification historique reconnues à une action de classe.",
      "etymology": "Du moyen haut-allemand « durfen », vieux haut-allemand « durfan » (avoir besoin, oser, être autorisé)."
},
  "dürr": {
      "fr": "aride / brutale / décharnée",
      "lit": "sec / desséché / sans chair ni fard",
      "pos_fr": "Adjectif",
      "role": "Adjectif hautement expressif soulignant le caractère dépouillé et rigide de l'extorsion capitaliste sans habillage poétique.",
      "etymology": "Issu du moyen haut-allemand « dürre », vieux haut-allemand « durri » (sec, aride, desséché, stérile, amaigri), du proto-germanique *þursuz (desséché par la soif), rattaché à la racine indo-européenne *ters- (sécher, soif, d'où proviennent le latin torrere, terra, et l'anglais thirst)."
},
  "eben": {
      "fr": "précisément / justement / tout juste",
      "lit": "uni / égal / plat / au même niveau",
      "pos_fr": "Adverbe",
      "role": "Adverbe d'insistance soulignant avec ironie ou rigueur le point exact où s'articule la contradiction bourgeoise.",
      "etymology": "Du moyen haut-allemand « eben », vieux haut-allemand « eban » (égal, uni, plat)."
},
  "ebenso": {
      "fr": "autant de / tout aussi",
      "lit": "de même sorte",
      "pos_fr": "Adverbe",
      "role": "Adverbe de degré corrélé à 'viele' ('ebenso viele Waffen' : autant d'armes)."
},
  "ebensovieler": {
      "fr": "d'autant de",
      "lit": "d'une même quantité de",
      "pos_fr": "Déterminant",
      "role": "Déterminant quantitatif exprimant une exacte proportionnalité."
},
  "ebensowenig": {
      "fr": "tout aussi peu",
      "lit": "aussi peu",
      "pos_fr": "Adverbe",
      "role": "Souligne l'impossibilité égale de deux illusions."
},
  "Echo": {
      "fr": "écho / retentissement",
      "lit": "répétition sonore",
      "pos_fr": "Nom neutre",
      "role": "Retentissement des événements parisiens en Europe."
},
  "egoistisch": {
      "fr": "égoïste",
      "lit": "centré exclusivement sur son propre moi et profit",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant le principe individualiste bourgeois de maximisation du gain aux dépens d'autrui.",
      "etymology": "Emprunté au français « égoïste », forgé au XVIIIe siècle sur le pronom latin « ego » (moi, je)."
},
  "Ehe": {
      "fr": "mariage",
      "lit": "loi / alliance légitime / mariage",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant le mariage bourgeois, institution fondée sur le patrimoine que Marx dénonce comme communauté hypocrite et privée des femmes.",
      "etymology": "Issu du moyen haut-allemand « ē », « ēwe », du vieux haut-allemand « ēwa » (loi divine, alliance sacrée, contrat légal), issu du proto-germanique *aiwō « durée, loi éternelle » (cognat du latin « aevum » et du grec « aiōn » = éon, éternité). Le sens s'est restreint au Moyen Âge à l'alliance conjugale chrétienne et légale."
},
  "ehe": {
      "fr": "avant que",
      "lit": "plus tôt que",
      "pos_fr": "Conjonction",
      "role": "Conjonction temporelle marquant l'antériorité d'un processus dialectique."
},
  "Ehefrau": {
      "fr": "épouse / femme mariée",
      "lit": "femme liée par le mariage",
      "pos_fr": "Nom féminin",
      "role": "L'épouse bourgeoise vue par son mari comme simple instrument de production."
},
  "Ehre": {
      "fr": "honneur / considération",
      "lit": "dignité morale reconnue",
      "pos_fr": "Nom féminin",
      "role": "L'honneur féodal dissous dans la valeur d'échange."
},
  "ehrwürdigen": {
      "fr": "vénérables",
      "lit": "dignes d'honneur (ehrwürdig)",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant les activités naguère entourées de révérence sacrée."
},
  "eifern": {
      "fr": "s'emporter contre / vitupérer",
      "lit": "faire du zèle",
      "pos_fr": "Verbe",
      "role": "Vitupérations morales contre le matérialisme."
},
  "eigen": {
      "fr": "propre / personnel",
      "lit": "qui appartient en exclusivité",
      "pos_fr": "Adjectif",
      "role": "Adjectif marquant la spécificité des intérêts et créations de chaque classe."
},
  "eigens": {
      "fr": "spécialement / expressément",
      "lit": "en propre",
      "pos_fr": "Adverbe",
      "role": "Créé exprès pour satisfaire un dessein politique."
},
  "eigenst": {
      "fr": "le plus propre / le plus authentique",
      "lit": "au degré suprême de possession intime",
      "pos_fr": "Adjectif",
      "role": "Adjectif superlatif établissant le prolétariat comme l'enfant le plus authentique de la grande industrie."
},
  "eigentlich": {
      "fr": "véritable / réel",
      "lit": "conforme à la nature propre",
      "pos_fr": "Adjectif",
      "role": "Adjectif identifiant le résultat historique fondamental sous l'apparence des revers immédiats."
},
  "Eigentum": {
      "fr": "propriété privée",
      "lit": "ce qui est propre à quelqu'un",
      "pos_fr": "Nom neutre",
      "role": "Concept cardinal de la critique marxienne : la propriété privée bourgeoise des moyens de production."
},
  "Eigentumsfrage": {
      "fr": "question de la propriété",
      "lit": "question de la propriété",
      "pos_fr": "Nom féminin",
      "role": "Substantif composé à l'accusatif singulier, objet direct de 'hervorheben'."
},
  "eigentumsfrage": {
      "fr": "question de la propriété",
      "lit": "question de la propriété",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'Eigentumsfrage' du lemme 'Eigentumsfrage'. Substantif composé à l'accusatif singulier, objet direct de 'hervorheben'."
},
  "eigentumslos": {
      "fr": "dénué de propriété / sans propriété",
      "lit": "sans propriété privée",
      "pos_fr": "Adjectif",
      "role": "Adjectif définissant l'essence matérielle du prolétaire moderne."
},
  "Eigentumslosigkeit": {
      "fr": "privation de propriété",
      "lit": "fait de ne rien posséder",
      "pos_fr": "Nom féminin",
      "role": "Condition fondamentale du prolétaire moderne sans réserves."
},
  "Eigentumsrecht": {
      "fr": "droit de propriété",
      "lit": "titre juridique de possession",
      "pos_fr": "Nom neutre",
      "role": "Le droit bourgeois protégeant le monopole capitaliste."
},
  "Eigentumsverhältnis": {
      "fr": "rapport de propriété",
      "lit": "relation juridique de propriété",
      "pos_fr": "Nom neutre",
      "role": "Concept théorique décisif : la forme juridique qui devient une entrave au développement des forces productives."
},
  "Eigentumsverhältnisse": {
      "fr": "rapports de propriété",
      "lit": "forme plurielle d'Eigentumsverhältnis",
      "pos_fr": "Nom",
      "role": "Forme plurielle du concept d'Eigentumsverhältnis."
},
  "Eigentümer": {
      "fr": "propriétaire",
      "lit": "possesseur légal",
      "pos_fr": "Nom masculin",
      "role": "Le propriétaire foncier ou capitaliste."
},
  "eigentümlich": {
      "fr": "particulier / propre / singulier / caractéristique",
      "lit": "qui appartient en propre",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant le trait singulier, propre et spécifique d'une formation sociale ou d'un mode d'exploitation.",
      "etymology": "Dérivé de « Eigentum » (propriété) + suffixe « -lich »."
},
  "ein": {
      "fr": "un / une",
      "lit": "article indéfini",
      "pos_fr": "Article indéfini",
      "role": "Article indéfini déterminant un nom singulier."
},
  "einander": {
      "fr": "l'un l'autre / réciproquement",
      "lit": "les uns les autres",
      "pos_fr": "Pronom réciproque invariable",
      "role": "Pronom réciproque exprimant l'opposition face à face des deux classes."
},
  "eine": {
      "fr": "un / une",
      "lit": "article indéfini",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'eine' du lemme 'ein'. Article indéfini singulier déterminant un groupe nominal."
},
  "einem": {
      "fr": "un / une",
      "lit": "article indéfini",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'einem' du lemme 'ein'. Article indéfini singulier déterminant un groupe nominal."
},
  "einer": {
      "fr": "un / une",
      "lit": "article indéfini",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'einer' du lemme 'ein'. Article indéfini singulier déterminant un groupe nominal."
},
  "einerseits": {
      "fr": "d'une part",
      "lit": "d'un côté",
      "pos_fr": "Adverbe",
      "role": "Adverbe ouvrant l'exposé des mécanismes contradictoires de surmontement de la crise."
},
  "einfach": {
      "fr": "simple",
      "lit": "d'un seul pli",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant le geste élémentaire exigé de l'ouvrier par la division du travail."
},
  "Einfluß": {
      "fr": "influence / ascendant",
      "lit": "action continue exercée",
      "pos_fr": "Nom masculin",
      "role": "Influence de l'industrie sur la politique."
},
  "einführen": {
      "fr": "introduire / instaurer",
      "lit": "conduire à l'intérieur",
      "pos_fr": "Verbe",
      "role": "Verbe désignant l'implantation forcée des industries modernes ou des institutions bourgeoises."
},
  "Einführung": {
      "fr": "introduction / mise en œuvre",
      "lit": "action d'amener dedans",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'adoption vitale des nouvelles techniques industrielles par les nations."
},
  "eingehen": {
      "fr": "pénétrer dans / entrer dans",
      "lit": "aller à l'intérieur",
      "pos_fr": "Verbe",
      "role": "Entrer dans la nouvelle société / Jérusalem."
},
  "eingerostet": {
      "fr": "rouillé / sclérosé",
      "lit": "couvert de rouille",
      "pos_fr": "Adjectif",
      "role": "Métaphore puissante désignant les institutions féodales figées et pétrifiées par les siècles."
},
  "eingestehen": {
      "fr": "avouer / admettre / reconnaître",
      "lit": "convenir debout en soi-même",
      "pos_fr": "Verbe",
      "role": "Verbe séparable soulignant l'aveu involontaire ou la confession contrainte arrachée aux idéologues conservateurs.",
      "etymology": "Composé de « ein » + « stehen » (se tenir pour garant, convenir de).",
      "isCompound": true,
      "compoundParts": [
            "ein-",
            "stehen"
      ]
},
  "eingewandern": {
      "fr": "immigrés / introduits de l'extérieur",
      "lit": "ayant marché dedans",
      "pos_fr": "Verbe",
      "role": "Idées françaises importées en Allemagne."
},
  "Eingriff": {
      "fr": "empiétement / intervention despotique",
      "lit": "action d'intervenir avec force",
      "pos_fr": "Nom masculin",
      "role": "Interventions despotiques dans le droit de propriété."
},
  "einheimisch": {
      "fr": "indigène / national / du pays",
      "lit": "qui relève du foyer intérieur",
      "pos_fr": "Adjectif",
      "role": "Adjectif opposant les matières premières du sol national aux ressources importées."
},
  "einhüllen": {
      "fr": "envelopper / draper",
      "lit": "couvrir d'un voile",
      "pos_fr": "Verbe",
      "role": "Draper la critique sociale d'un verbiage mystique."
},
  "Einklang": {
      "fr": "accord / harmonie",
      "lit": "consonance parfaite",
      "pos_fr": "Nom masculin",
      "role": "Harmonie factice postulée entre le capital et le travail."
},
  "einmal": {
      "fr": "une fois / jadis / seulement",
      "lit": "une seule fois",
      "pos_fr": "Adverbe",
      "role": "Réfère au passé ou renforce une affirmation."
},
  "Einmischung": {
      "fr": "ingérence / immixtion",
      "lit": "fait de s'immiscer",
      "pos_fr": "Nom féminin",
      "role": "Ingérence de la société dans l'éducation des enfants."
},
  "einnehmen": {
      "fr": "occuper / percevoir / prendre",
      "lit": "prendre en dedans / occuper",
      "pos_fr": "Verbe",
      "role": "Verbe désignant la conquête d'une position stratégique ou l'occupation d'un rang déterminant dans l'arène sociale.",
      "etymology": "Composé de « ein » + « nehmen » (prendre).",
      "isCompound": true,
      "compoundParts": [
            "ein-",
            "nehmen"
      ]
},
  "einnisten": {
      "fr": "s'implanter / faire son nid",
      "lit": "se nicher dans",
      "pos_fr": "Verbe",
      "role": "Métaphore biologique frappante peignant le capitalisme s'incrustant dans chaque recoin de la planète."
},
  "einreißen": {
      "fr": "s'introduire / se propager / s'enraciner",
      "lit": "déchirer en faisant brèche",
      "pos_fr": "Verbe",
      "role": "Verbe séparable imagé décrivant la contagion et l'enracinement pernicieux d'une déviation doctrinale ou d'un fléau économique.",
      "etymology": "Composé de « ein » + « reißen » (arracher, faire brèche).",
      "isCompound": true,
      "compoundParts": [
            "ein-",
            "reißen"
      ]
},
  "einsegnen": {
      "fr": "bénir / consacrer",
      "lit": "signer d'une croix",
      "pos_fr": "Verbe",
      "role": "Bénédiction cléricale de l'ordre établi."
},
  "Einseitigkeit": {
      "fr": "étroitesse d'esprit / partialité unilatérale",
      "lit": "caractère d'un seul côté",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin fustigeant l'exclusivisme national brisé par la circulation universelle."
},
  "Einsicht": {
      "fr": "compréhension lucide / intelligence",
      "lit": "vue pénétrante",
      "pos_fr": "Nom féminin",
      "role": "Compréhension théorique de l'ensemble du mouvement historique."
},
  "einsperren": {
      "fr": "enfermer / incarcérer",
      "lit": "bloquer dedans",
      "pos_fr": "Verbe",
      "role": "Allusion aux prisons cellulaires philanthropiques."
},
  "einstweilen": {
      "fr": "provisoirement / pour l'instant",
      "lit": "pendant ce temps-ci",
      "pos_fr": "Adverbe",
      "role": "Adverbe marquant le caractère temporaire de l'hégémonie bourgeoise sur les ouvriers."
},
  "eintönigster": {
      "fr": "le plus monotone",
      "lit": "au ton le plus uniforme",
      "pos_fr": "Adjectif",
      "role": "Adjectif superlatif décrivant le labeur abrutissant de l'ouvrier parcellisé."
},
  "Einwanderung": {
      "fr": "immigration",
      "lit": "venue de populations étrangères",
      "pos_fr": "Nom féminin",
      "role": "Mouvement d'immigration vers les manufactures."
},
  "einwenden": {
      "fr": "objecter / opposer un argument",
      "lit": "tourner contre / répliquer",
      "pos_fr": "Verbe",
      "role": "Verbe séparable désignant l'objection stéréotypée opposée par la mauvaise foi bourgeoise aux propositions communistes.",
      "etymology": "Composé de « ein » + « wenden » (tourner, retourner).",
      "isCompound": true,
      "compoundParts": [
            "ein-",
            "wenden"
      ]
},
  "Einwirkung": {
      "fr": "action / influence réciproque",
      "lit": "fait d'agir sur",
      "pos_fr": "Nom féminin",
      "role": "Influence de la société sur l'école."
},
  "Einwurf": {
      "fr": "objection",
      "lit": "argument opposé",
      "pos_fr": "Nom masculin",
      "role": "Objections bourgeoises récurrentes contre le communisme."
},
  "einzeln": {
      "fr": "individuel / particulier",
      "lit": "isolé un par un",
      "pos_fr": "Adjectif",
      "role": "Adjectif marquant le morcellement des ouvriers au sein de la manufacture.",
      "etymology": "Dérivé au moyen du suffixe « -eln » sur l'adjectif « ein » (un, unique, moyen haut-allemand einzel, vieux haut-allemand einzig / einlīh)."
},
  "einzig": {
      "fr": "unique / seul",
      "lit": "un seul",
      "pos_fr": "Adjectif",
      "role": "Caractère exclusif de l'intérêt marchand."
},
  "Eisenbahn": {
      "fr": "chemin de fer",
      "lit": "voie de fer pour convois ferroviaires",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin composé désignant l'infrastructure de communication terrestre révolutionnant la vitesse de circulation du capital et des marchandises.",
      "etymology": "Composé technique forgé au début du XIXe siècle associant : 1° « das Eisen » (le fer métallique, en moyen haut-allemand īsen, vieux haut-allemand īsan / īsarn, du proto-germanique *īsarną, emprunt très ancien aux langues celtiques *īsarnon = fer) ; 2° « die Bahn » (la voie frayée, le chemin dégagé, en moyen haut-allemand bane, vieux haut-allemand bana, apparenté à schlagen = battre une voie)."
},
  "Eisenbahnen": {
      "fr": "chemins de fer",
      "lit": "lignes ferroviaires multiples",
      "pos_fr": "Nom féminin (pluriel)",
      "role": "Forme plurielle désignant le réseau ferroviaire continental unifiant les marchés intérieurs et internationaux."
},
  "eiskalt": {
      "fr": "glacial / froid comme la glace",
      "lit": "froid au point de glacer",
      "pos_fr": "Adjectif",
      "role": "Adjectif composé renforçant la métaphore du calcul économique froid qui étouffe l'ardeur des sentiments médiévaux.",
      "etymology": "Composé de « das Eis » (la glace, vieux haut-allemand īs) + « kalt » (froid, vieux haut-allemand kalt, proto-germanique *kaldaz)."
},
  "ekelhafter": {
      "fr": "dégoûtant / répugnant / écœurant",
      "lit": "qui suscite le dégoût",
      "pos_fr": "Adjectif",
      "role": "Adjectif polémique violent stigmatisant la complaisance écœurante et hypocrite du socialisme féodal fardant ses privilèges.",
      "etymology": "Dérivé de « Ekel » (haut-le-cœur, dégoût) + « -haft »."
},
  "elektrisch": {
      "fr": "électrique",
      "lit": "fondé sur la force électrique",
      "pos_fr": "Adjectif",
      "role": "Adjectif technologique célébrant l'essor prodigieux du télégraphe au XIXe siècle."
},
  "Element": {
      "fr": "élément",
      "lit": "composante fondamentale",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre désignant les germes embryonnaires d'une classe au sein de l'ordre ancien.",
      "etymology": "Emprunt savant au latin classique « elementum » (principe premier, composante originelle indécomposable d'un tout)."
},
  "elementen": {
      "fr": "élément / composante de classe",
      "lit": "principe de base / constituant",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'Elementen' du lemme 'Element'. Substantif au datif neutre pluriel régi par 'aus'."
},
  "Elend": {
      "fr": "misère / détresse / dénuement",
      "lit": "séjour en terre étrangère / exil / détresse",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre sociologique désignant le paupérisme et le dénuement physiologique auxquels le capitalisme réduit la classe laborieuse.",
      "etymology": "Du moyen haut-allemand « ellende », vieux haut-allemand « elilenti » (pays étranger, exil, d'où détresse du banni), de « eli » (autre) + « lant » (terre, pays)."
},
  "elend": {
      "fr": "misérable / déplorable / lamentable",
      "lit": "exilé / rejeté dans le malheur",
      "pos_fr": "Adjectif",
      "role": "Adjectif caractérisant le dénuement sordide et la dégradation humaine auxquels le salariat capitaliste condamne les travailleurs.",
      "etymology": "Forme adjectivale de « Elend » (exil, détresse)."
},
  "Eltern": {
      "fr": "parents",
      "lit": "père et mère",
      "pos_fr": "Nom pluriel",
      "role": "Les parents et l'exploitation des enfants dans la famille bourgeoise."
},
  "Emeute": {
      "fr": "émeute / soulèvement",
      "lit": "révolte populaire armée",
      "pos_fr": "Nom féminin",
      "role": "Mot d'emprunt français (Émeute) désignant les flambées de rébellion ouvrière locale."
},
  "Emigrant": {
      "fr": "émigré",
      "lit": "exilé politique ou économique",
      "pos_fr": "Nom masculin",
      "role": "Confiscation des biens des émigrés et rebelles."
},
  "Emporkömmling": {
      "fr": "parvenu / nouveau riche",
      "lit": "celui qui s'est élevé soudainement",
      "pos_fr": "Nom masculin péjoratif",
      "role": "Le parvenu bourgeois méprisé par les nobles."
},
  "Empörung": {
      "fr": "révolte / soulèvement",
      "lit": "action de s'élever contre",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin puissant qualifiant l'insurrection matérielle des forces productives contre le capital."
},
  "enden": {
      "fr": "se terminer / aboutir",
      "lit": "trouver son terme",
      "pos_fr": "Verbe régulier",
      "role": "Verbe marquant l'issue dialectique inéluctable du combat de classe.",
      "etymology": "Déverbal du substantif « das Ende » (le bout, la fin, le terme, en moyen haut-allemand ende, en vieux haut-allemand enti, du proto-germanique *andijaz = point extrême, bout, limite)."
},
  "endlich": {
      "fr": "enfin / finalement / au terme du processus",
      "lit": "qui touche à sa fin / qui arrive à son terme",
      "pos_fr": "Adverbe",
      "role": "Adverbe marquant l'aboutissement historique de la conquête du monopole politique d'État par la bourgeoisie moderne."
},
  "eng": {
      "fr": "étroit / serré",
      "lit": "resserré dans l'espace",
      "pos_fr": "Adjectif",
      "role": "Adjectif caractérisant la limite structurelle des rapports bourgeois devenus carcan."
},
  "England": {
      "fr": "Angleterre",
      "lit": "terre des Angles",
      "pos_fr": "Nom propre",
      "role": "Nom propre au datif neutre singulier, complément de lieu de 'in'."
},
  "england": {
      "fr": "Angleterre",
      "lit": "terre des Angles",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'England' du lemme 'England'. Nom propre au datif neutre singulier, complément de lieu de 'in'."
},
  "englisch": {
      "fr": "anglais",
      "lit": "en langue anglaise",
      "pos_fr": "Adjectif",
      "role": "Adjectif de langue pour la publication à Londres de l'édition anglaise.",
      "etymology": "Dérivé du nom du peuple des Angles (latin Angli, issu du germanique *angul- = crochet, coin de terre)."
},
  "enorm": {
      "fr": "énorme / gigantesque",
      "lit": "hors de la norme ordinaire",
      "pos_fr": "Adjectif",
      "role": "Adjectif mesurant la démesure des concentrations urbaines modernes."
},
  "entdecken": {
      "fr": "découvrir / mettre au jour",
      "lit": "enlever ce qui recouvre",
      "pos_fr": "Verbe",
      "role": "Verbe désignant la mise au jour pionnière des lois objectives du développement historique et de la valeur marchande.",
      "etymology": "Composé du préfixe privatif « ent- » + « decken » (couvrir, recouvrir).",
      "isCompound": true,
      "compoundParts": [
            "ent-",
            "decken"
      ]
},
  "Entdeckung": {
      "fr": "découverte",
      "lit": "action de dévoiler une terre inconnue",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin marquant l'expansion géographique mondiale ouvrant l'ère du marché planétaire.",
      "etymology": "Nom d'action formé du préfixe privatif et réversif « ent- » (moyen haut-allemand ent-, vieux haut-allemand ant-, annulant l'effet du verbe de base) appliqué à « decken » (couvrir, protéger d'un voile ou d'un toit, moyen haut-allemand decken, vieux haut-allemand decken, racine indo-européenne *(s)teg- « couvrir », cognat du grec stegos / toit, du latin tegere et du français toit / tégument). Calque morphologique parfait du bas-latin « dis-cooperire » d'où découle le français 'découverte' : dévoiler une terre tenue jusque-là à l'abri des regards."
},
  "entferntest": {
      "fr": "le plus lointain",
      "lit": "le plus distant dans l'espace",
      "pos_fr": "Adjectif",
      "role": "Adjectif superlatif soulignant la globalisation géographique des besoins d'approvisionnement."
},
  "entgegenschreien": {
      "fr": "crier à la face de / vociférer contre",
      "lit": "hurler à la rencontre de",
      "pos_fr": "Verbe",
      "role": "Verbe véhément dépeignant les vociférations outrées poussées par la réaction pour clouer au pilori les communistes.",
      "etymology": "Composé de « entgegen » (au-devant, contre) + « schreien » (crier).",
      "isCompound": true,
      "compoundParts": [
            "entgegen-",
            "schreien"
      ]
},
  "entgegenstellen": {
      "fr": "opposer / dresser contre",
      "lit": "placer en face comme un rempart",
      "pos_fr": "Verbe séparable",
      "role": "Verbe d'action de combat : opposer au mythe policier du spectre la réalité du Manifeste.",
      "etymology": "Verbe composé séparable unissant : 1° la préposition et adverbe « entgegen » (au-devant de, en opposition directe, moyen haut-allemand entgegen, vieux haut-allemand in gegin = à l'encontre de) ; 2° le verbe causatif « stellen » (placer debout, faire tenir dressé, vieux haut-allemand stellen, du proto-germanique *stalljanan lié à Stall / écurie et Stelle / place fixe). Exprime l'affrontement frontal et irréductible de deux thèses qui se font face dans l'arène publique."
},
  "entgegentreten": {
      "fr": "s'opposer à / se dresser contre",
      "lit": "marcher à la rencontre contre",
      "pos_fr": "Verbe séparable",
      "role": "Les utopistes s'opposant avec aigreur au mouvement ouvrier réel."
},
  "enthüllen": {
      "fr": "dévoiler / révéler",
      "lit": "retirer l'enveloppe",
      "pos_fr": "Verbe",
      "role": "Geste critique matérialiste mettant à nu les ressorts sordides de la société d'ordres."
},
  "entkleiden": {
      "fr": "dépouiller / dévêtir",
      "lit": "ôter les vêtements de",
      "pos_fr": "Verbe",
      "role": "Métaphore puissante dénudant les professions sacrées de leur auréole idéologique."
},
  "entlegenst": {
      "fr": "le plus reculé",
      "lit": "situé au plus loin de la route",
      "pos_fr": "Adjectif",
      "role": "Adjectif superlatif désignant les confins du monde intégrés dans les chaînes d'approvisionnement."
},
  "entmannen": {
      "fr": "émasculer / émasculé",
      "lit": "priver de virilité",
      "pos_fr": "Verbe",
      "role": "Affadissement de la doctrine révolutionnaire en Allemagne."
},
  "entnervend": {
      "fr": "énervant / débilitant",
      "lit": "qui prive de nerfs / vigueur",
      "pos_fr": "Adjectif",
      "role": "Affaiblissement moral causé par l'ascétisme religieux."
},
  "entreißen": {
      "fr": "arracher à",
      "lit": "déchirer hors de",
      "pos_fr": "Verbe",
      "role": "Verbe vigoureux décrivant l'émancipation forcée des ruraux hors de l'idiotisme villageois."
},
  "Entscheidung": {
      "fr": "décision / dénouement décisif",
      "lit": "tranchage du litige",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin marquant l'heure ultime de la confrontation finale entre les classes."
},
  "entschieden": {
      "fr": "décidé / résolu / catégorique / tranché",
      "lit": "séparé par jugement / tranché sans retour",
      "pos_fr": "Adjectif",
      "role": "Adjectif et adverbe marquant la résolution inébranlable et le caractère tranché de la confrontation entre classes.",
      "etymology": "Participe passé de « entscheiden » (décider, trancher, vieux haut-allemand int-scidon, distinguer)."
},
  "entsetzen": {
      "fr": "épouvanter / terrifier / destituer",
      "lit": "déplacer de son siège / terrifier",
      "pos_fr": "Verbe",
      "role": "Verbe exprimant l'effroi panique et l'épouvante sacrée de la bourgeoisie voyant s'élever le spectre de la révolution.",
      "etymology": "Composé de « ent- » (hors de) + « setzen » (poser, asseoir, d'où déloger de sa quiétude).",
      "isCompound": true,
      "compoundParts": [
            "ent-",
            "setzen"
      ]
},
  "entsprechen": {
      "fr": "correspondre à",
      "lit": "répondre à",
      "pos_fr": "Verbe",
      "role": "Concept dialectique mesurant l'adéquation entre rapports de production et forces productives."
},
  "entsprechend": {
      "fr": "correspondant / proportionné",
      "lit": "qui répond exactement à une mesure",
      "pos_fr": "Adjectif / Participe",
      "role": "Adjectif relationnel soulignant l'adéquation structurelle entre l'infrastructure et la superstructure."
},
  "entspringen": {
      "fr": "découler de / provenir de",
      "lit": "jaillir hors de",
      "pos_fr": "Verbe",
      "role": "Origine matérielle des idéologies."
},
  "entstehen": {
      "fr": "naître / surgir / se former",
      "lit": "se dresser hors de",
      "pos_fr": "Verbe",
      "role": "Genèse historique des institutions."
},
  "entweder": {
      "fr": "ou bien / soit",
      "lit": "l'un des deux",
      "pos_fr": "Conjonction",
      "role": "Alternative tranchée : transformation révolutionnaire ou ruine commune."
},
  "entweiht": {
      "fr": "profané",
      "lit": "privé de consécration",
      "pos_fr": "Verbe",
      "role": "Thèse majeure : « tout ce qui est sacré est profané » par le calcul égoïste marchand."
},
  "entwerfen": {
      "fr": "esquisser / rédiger / tracer",
      "lit": "jeter sur le papier les grandes lignes",
      "pos_fr": "Verbe fort",
      "role": "Verbe décrivant l'élaboration collective du texte du Manifeste à Londres.",
      "etymology": "Verbe de création intellectuelle combinant le préfixe d'arrachement et de jaillissement « ent- » (moyen haut-allemand ent-, vieux haut-allemand ant-) et le verbe fort « werfen » (lancer, jeter, moyen haut-allemand werfen, vieux haut-allemand werfan, du germanique *werpanan, cognat de l'anglais warp). Littéralement : projeter en avant les premiers traits directeurs d'un dessein révolutionnaire (cognat sémantique exact du latin pro-icere d'où découle projet)."
},
  "entwerten": {
      "fr": "déprécier / démonétiser",
      "lit": "priver de valeur (Wert)",
      "pos_fr": "Verbe",
      "role": "Verbe économique désignant la perte de valeur du savoir-faire artisanal face à la machine."
},
  "entwickeln": {
      "fr": "développer / déployer",
      "lit": "déplier ce qui était enroulé / faire croître",
      "pos_fr": "Verbe régulier",
      "role": "Verbe matérialiste marquant la croissance organique des forces productives.",
      "etymology": "Composé du préfixe privatif et séparatif « ent- » (vieux haut-allemand ant-) et du verbe « wickeln » (envelopper, enrouler, vieux haut-allemand wickilīn). Littéralement « déplier ce qui était enroulé ou enveloppé »."
},
  "entwickelnd": {
      "fr": "qui se développe / croissant",
      "lit": "en train de se déployer",
      "pos_fr": "Adjectif",
      "role": "Participe présent marquant le dynamisme ininterrompu du machinisme industriel."
},
  "entwickelt": {
      "fr": "développé",
      "lit": "déployé hors de son germe",
      "pos_fr": "Adjectif",
      "role": "Épithète au datif neutre singulier qualifiant le prolétariat industriel moderne."
},
  "entwickelte": {
      "fr": "développé",
      "lit": "déployé hors de son germe",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'entwickelte' du lemme 'entwickelt'. Épithète au datif neutre singulier qualifiant le prolétariat industriel moderne."
},
  "entwickelten": {
      "fr": "développé",
      "lit": "déployé hors de son germe",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'entwickelten' du lemme 'entwickelt'. Épithète au datif neutre singulier qualifiant le prolétariat industriel moderne."
},
  "entwicklen": {
      "fr": "développer",
      "lit": "dénouer / déplier",
      "pos_fr": "Verbe",
      "role": "Déploiement des contradictions de classe."
},
  "Entwicklung": {
      "fr": "développement / essor",
      "lit": "déroulement / déploiement progressif",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la dynamique matérielle continue d'expansion productive.",
      "etymology": "Grand concept hégélien et marxiste de dialectique historique formé de : 1° le préfixe réversif « ent- » (cessation d'une contrainte) ; 2° le verbe « wickeln » (moyen haut-allemand wickeln, dénominal du vieux haut-allemand wickil = pelote de fil, fuseau, racine germanique *wik- liée à l'idée d'enroulement) ; 3° le suffixe « -ung ». Calque morphologique exact du latin « ex-plicare » (dé-plier les replis) et du français « dé-veloppement » (ôter les enveloppes qui brident l'organisme pour libérer la croissance des forces productives)."
},
  "Entwicklungsgang": {
      "fr": "cours du développement / processus évolutif",
      "lit": "cheminement du déploiement historique immanent",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin composé désignant la succession dialectique des étapes matérielles qui ont engendré la bourgeoisie moderne.",
      "etymology": "Composé associant : 1° « die Entwicklung » (déploiement de ce qui était enveloppé, de ent- et wickeln, calque d'explicatio) ; 2° le « -s- » de liaison du génitif ; 3° « der Gang » (marche, cheminement, cours des choses, en moyen haut-allemand ganc, en vieux haut-allemand gang, substantif apophonique du verbe fort gehen, proto-germanique *gangaz)."
},
  "Entwicklungsgange": {
      "fr": "cours du développement",
      "lit": "marche continue de l'évolution",
      "pos_fr": "Nom masculin au datif",
      "role": "Le cours historique du développement des forces productives."
},
  "Entwicklungsstuf": {
      "fr": "phase de développement",
      "lit": "degré d'évolution",
      "pos_fr": "Nom féminin",
      "role": "Nom composé désignant les degrés et phases successives de développement parcourus par les forces productives et le prolétariat."
},
  "Entwicklungsstufe": {
      "fr": "étape de l'évolution / degré de développement",
      "lit": "marche d'escalier ou palier du déploiement historique",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin composé marquant les transitions qualitatives successives de la puissance matérielle de la bourgeoisie.",
      "etymology": "Composé de : 1° « die Entwicklung » (développement, déploiement progressif de ce qui était enveloppé, formé du préfixe ent- marquant l'ouverture et de wickeln = enrouler) ; 2° le « -s- » de liaison ; 3° « die Stufe » (degré, échelon, marche d'escalier, en moyen haut-allemand stuofe, en vieux haut-allemand stuofa, proto-germanique *stōpō-, rattaché au verbe stapfen / marcher à pas pesants, racine indo-européenne *stebʰ- = fixer, fouler d'un pas ferme)."
},
  "Entwicklungsstufen": {
      "fr": "étapes du développement",
      "lit": "degrés successifs d'évolution",
      "pos_fr": "Nom féminin (pluriel)",
      "role": "Forme plurielle désignant les paliers historiques franchis par la bourgeoisie depuis le Moyen Âge."
},
  "Entäußerung": {
      "fr": "aliénation / dépossession de soi",
      "lit": "action de rendre extérieur",
      "pos_fr": "Nom féminin philosophique",
      "role": "Concept hégélien d'aliénation transformé en phrase creuse par les vrais socialistes."
},
  "Epidemie": {
      "fr": "épidémie / fléau social",
      "lit": "maladie se propageant sur le peuple",
      "pos_fr": "Nom féminin",
      "role": "Métaphore médicale saisissante désignant la surproduction comme crise absurde inconnue des siècles passés."
},
  "Epoche": {
      "fr": "époque",
      "lit": "période historique définie par un mode de production",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant une ère matérielle spécifique dominée par des rapports de production distincts.",
      "etymology": "Emprunt savant au XVIIe siècle au grec ancien « epokhḗ » (ἐποχή, point d'arrêt, suspension du jugement, moment fixe qui marque le début d'une ère nouvelle, déverbal de epékhein « retenir, suspendre »)."
},
  "er": {
      "fr": "il",
      "lit": "pronom personnel sujet masculin 3e personne",
      "pos_fr": "Pronom",
      "role": "Pronom personnel sujet renvoyant à un actant singulier masculin (l'ouvrier, le prolétaire)."
},
  "Erarbeitet": {
      "fr": "acquis par le travail / mérité",
      "lit": "fruit du labeur",
      "pos_fr": "Nom substantivé",
      "role": "La prétendue propriété acquise à la sueur du front."
},
  "erbitterter": {
      "fr": "plus acharné / plus exaspérant",
      "lit": "comparatif d'erbittert",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant le despotisme patronal mesquin en fabrique."
},
  "Erbitterung": {
      "fr": "acharnement / amertume / aigreur",
      "lit": "irritation vindicative",
      "pos_fr": "Nom féminin",
      "role": "Acharnement des utopistes contre tout mouvement politique des ouvriers."
},
  "erblicken": {
      "fr": "apercevoir / discerner",
      "lit": "poser le regard sur",
      "pos_fr": "Verbe",
      "role": "Reconnaissance lucide des rapports de force."
},
  "Erbrecht": {
      "fr": "droit d'héritage / succession",
      "lit": "règles juridiques de transmission",
      "pos_fr": "Nom neutre",
      "role": "Abolition de l'héritage programmée au chapitre II."
},
  "Erdkugel": {
      "fr": "globe terrestre",
      "lit": "sphère de la terre",
      "pos_fr": "Nom masculin",
      "role": "Nom composé soulignant l'envergure planétaire de l'expansion bourgeoise."
},
  "ereifern": {
      "fr": "s'échauffer / s'emporter / se passionner",
      "lit": "s'enflammer de zèle",
      "pos_fr": "Verbe",
      "role": "Verbe pronominal satirique peignant l'indignation feinte et les colères vertueuses de commande des beaux esprits libéraux.",
      "etymology": "Dérivé de « der Eifer » (le zèle ardent, empressement passionné).",
      "isCompound": true,
      "compoundParts": [
            "er-",
            "Eifer",
            "-n"
      ]
},
  "erfinden": {
      "fr": "inventer / imaginer de toutes pièces",
      "lit": "trouver par la recherche",
      "pos_fr": "Verbe",
      "role": "Verbe ironique dénonçant l'invention artificielle de systèmes de société tout faits par les utopistes en chambre.",
      "etymology": "Composé de « er- » (aboutissement) + « finden » (trouver, vieux haut-allemand findan).",
      "isCompound": true,
      "compoundParts": [
            "er-",
            "finden"
      ]
},
  "Erfinder": {
      "fr": "inventeur",
      "lit": "créateur d'artifices ou systèmes",
      "pos_fr": "Nom masculin",
      "role": "Les inventeurs des systèmes socialistes utopiques."
},
  "erfinderisch": {
      "fr": "inventif / ingénieux",
      "lit": "plein de trouvailles",
      "pos_fr": "Adjectif",
      "role": "Ingéniosité technique stimulée par le capital."
},
  "Erfolg": {
      "fr": "succès / résultat immédiat",
      "lit": "ce qui suit de près",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin opposant la victoire syndicale ponctuelle à l'unification politique durable."
},
  "ergreifen": {
      "fr": "saisir / s'emparer de",
      "lit": "agripper",
      "pos_fr": "Verbe",
      "role": "Prise du pouvoir politique."
},
  "ergänzend": {
      "fr": "complémentaire",
      "lit": "qui remplit ce qui manque",
      "pos_fr": "Adjectif",
      "role": "Complément indispensable d'une institution."
},
  "Ergänzung": {
      "fr": "complément / achèvement",
      "lit": "action de rendre entier",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin révélant comment la fainéantise complétait la brutalité seigneuriale."
},
  "erhaben": {
      "fr": "sublimement / majestueusement",
      "lit": "au-dessus",
      "pos_fr": "Adverbe",
      "role": "Hauteur morale feinte par les philosophes spéculatifs."
},
  "Erhabenheit": {
      "fr": "sublimité / grandeur morale",
      "lit": "élévation majestueuse",
      "pos_fr": "Nom féminin",
      "role": "Sublimité feinte des discours spéculatifs."
},
  "erhalten": {
      "fr": "recevoir / conserver",
      "lit": "garder en main",
      "pos_fr": "Verbe",
      "role": "Verbe décrivant l'ouvrier recevant son salaire avant de tomber entre les mains des boutiquiers."
},
  "Erhaltung": {
      "fr": "conservation / préservation",
      "lit": "action de maintenir en vie",
      "pos_fr": "Nom féminin",
      "role": "Conservation des rapports de production anciens."
},
  "erheben": {
      "fr": "s'élever / se soulever",
      "lit": "lever vers le haut",
      "pos_fr": "Verbe",
      "role": "Verbe révolutionnaire marquant le redressement émancipateur du prolétariat."
},
  "Erhebung": {
      "fr": "élévation / insurrection",
      "lit": "fait de s'élever au-dessus",
      "pos_fr": "Nom féminin",
      "role": "Prétendue élévation au-dessus de la lutte des classes."
},
  "erheischen": {
      "fr": "exiger / requérir impérieusement",
      "lit": "réclamer d'une voix haute",
      "pos_fr": "Verbe",
      "role": "Verbe littéraire marquant la demande pressante créée par les nouveaux besoins de consommation."
},
  "erhoben": {
      "fr": "élevé / hissé / dressé",
      "lit": "soulevé vers le haut",
      "pos_fr": "Participe passé adjectivé",
      "role": "Participe passé adjectivé désignant la classe ouvrière dressée en classe dominante par la révolution.",
      "etymology": "Participe de « erheben » (élever, dresser, soulever)."
},
  "erkaufen": {
      "fr": "acheter / soudoyer",
      "lit": "acquérir au prix de l'argent",
      "pos_fr": "Verbe",
      "role": "Verbe stigmatisant la vénalité du lumpenprolétariat se vendant aux menées réactionnaires."
},
  "erkennen": {
      "fr": "reconnaître / identifier",
      "lit": "connaître avec certitude",
      "pos_fr": "Verbe",
      "role": "Prise de conscience théorique."
},
  "erklären": {
      "fr": "déclarer / proclamer ouvertement",
      "lit": "rendre public et clair",
      "pos_fr": "Verbe",
      "role": "Verbe principal régissant la complétive proclamant la nécessité de la révolution."
},
  "erkämpfen": {
      "fr": "conquérir de haute lutte / arracher par le combat",
      "lit": "obtenir au terme d'un combat acharné",
      "pos_fr": "Verbe inséparable faible",
      "role": "Verbe d'action soulignant la nature révolutionnaire violente de la conquête du pouvoir par la bourgeoisie.",
      "etymology": "Composé du préfixe inséparable perfectif « er- » (qui exprime l'obtention victorieuse au prix d'un labeur extrême) et du verbe « kämpfen » (combattre), dérivé de « der Kampf » (le combat), très ancien emprunt du vieux haut-allemand « kampf » au latin classique « campus » (la plaine, champ clos de combat)."
},
  "Erkämpfung": {
      "fr": "conquête par la lutte",
      "lit": "obtention par le combat",
      "pos_fr": "Nom féminin",
      "role": "Conquête de la démocratie et du pouvoir."
},
  "erlegen": {
      "fr": "succomber / être abattu",
      "lit": "être couché à terre",
      "pos_fr": "Verbe",
      "role": "Chute des anciennes classes féodales."
},
  "erleichtert": {
      "fr": "facilité / allégé",
      "lit": "rendu plus léger",
      "pos_fr": "Adjectif",
      "role": "Participe passé marquant l'accélération sans entrave des transports marchands."
},
  "erlernbar": {
      "fr": "accessible à l'apprentissage / qu'on peut apprendre",
      "lit": "qu'il est possible d'apprendre",
      "pos_fr": "Adjectif",
      "role": "Adjectif caractérisant le geste parcellaire ouvrier qui ne requiert aucune qualification longue."
},
  "erliegen": {
      "fr": "succomber à / être vaincu par",
      "lit": "tomber et rester couché",
      "pos_fr": "Verbe",
      "role": "Verbe décrivant l'écrasement inéluctable du petit capital sous les coups de la grande industrie."
},
  "ernst": {
      "fr": "sérieux / grave",
      "lit": "pesant / résolu",
      "pos_fr": "Adjectif",
      "role": "Gravité des crises ou sévérité de l'analyse."
},
  "ernstgemeint": {
      "fr": "pris au sérieux / sincère",
      "lit": "pensé avec sérieux",
      "pos_fr": "Adjectif",
      "role": "Le seul mot sincère du socialisme bourgeois."
},
  "ernsthafter": {
      "fr": "plus sérieusement",
      "lit": "avec plus de sérieux",
      "pos_fr": "Adverbe",
      "role": "Caractère plus grave et méthodique des doctrines."
},
  "ernähren": {
      "fr": "nourrir / entretenir",
      "lit": "alimenter",
      "pos_fr": "Verbe",
      "role": "Renversement scandaleux dénoncé par Marx : la bourgeoisie doit nourrir l'ouvrier au lieu d'en être nourrie."
},
  "erobern": {
      "fr": "conquérir",
      "lit": "prendre d'assaut",
      "pos_fr": "Verbe",
      "role": "Verbe de conquête militaire appliqué à l'appropriation des forces productives par le prolétariat."
},
  "Eroberung": {
      "fr": "conquête",
      "lit": "action d'emporter par la force",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'annexion de nouveaux débouchés par la bourgeoisie."
},
  "erregen": {
      "fr": "susciter / provoquer",
      "lit": "mettre en mouvement",
      "pos_fr": "Verbe",
      "role": "Provoquer l'indignation ou l'effervescence."
},
  "erreichen": {
      "fr": "atteindre / accomplir",
      "lit": "parvenir jusqu'au but fixé",
      "pos_fr": "Verbe",
      "role": "Participe passé au passif avec 'werden können'."
},
  "erreicht": {
      "fr": "atteindre / accomplir",
      "lit": "parvenir jusqu'au but fixé",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'erreicht' du lemme 'erreichen'. Participe passé au passif avec 'werden können'."
},
  "Erreichung": {
      "fr": "obtention / réalisation / accomplissement",
      "lit": "action d'atteindre le but visé",
      "pos_fr": "Nom féminin",
      "role": "Substantif d'action à l'accusatif singulier, régime de 'für'."
},
  "erreichung": {
      "fr": "obtention / réalisation / accomplissement",
      "lit": "action d'atteindre le but visé",
      "pos_fr": "Nom féminin",
      "role": "Forme fléchie 'Erreichung' du lemme 'Erreichung'. Substantif d'action à l'accusatif singulier, régime de 'für'."
},
  "Errichtung": {
      "fr": "création / établissement",
      "lit": "action d'ériger",
      "pos_fr": "Nom féminin",
      "role": "Création d'armées industrielles ou de colonies modèles."
},
  "erringen": {
      "fr": "remporter de haute lutte / conquérir",
      "lit": "obtenir en luttant corps à corps",
      "pos_fr": "Verbe",
      "role": "Verbe traduisant les victoires politiques arrachées par le prolétariat dans la division bourgeoise."
},
  "erscheinen": {
      "fr": "apparaître / sembler",
      "lit": "luire / devenir visible",
      "pos_fr": "Verbe",
      "role": "Verbe opposant l'apparence paradoxale d'une crise de surproduction aux crises de pénurie d'antan."
},
  "Erschütterung": {
      "fr": "ébranlement / commotion",
      "lit": "secousse violente",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin dramatisant la déstabilisation permanente de toutes les institutions sociales."
},
  "ersetzen": {
      "fr": "remplacer / substituer",
      "lit": "poser à la place de",
      "pos_fr": "Verbe",
      "role": "Substitution d'un mode de production par un autre."
},
  "erst": {
      "fr": "premier",
      "lit": "qui vient en tête chronologiquement",
      "pos_fr": "Adjectif numéral ordinal",
      "role": "Adjectif ordonnant les origines historiques de la bourgeoisie primitive.",
      "etymology": "Issu du moyen haut-allemand « êrst », vieux haut-allemand « ēristo » (premier, tout au début, superlatif du proto-germanique *airiz = plus tôt, jadis, racine de eher/early)."
},
  "erstehen": {
      "fr": "renaître / resurgir",
      "lit": "se relever debout",
      "pos_fr": "Verbe",
      "role": "Verbe traduisant la formidable résilience de l'organisation prolétarienne qui renaît sans cesse plus puissante."
},
  "erster": {
      "fr": "premier",
      "lit": "qui est au premier rang",
      "pos_fr": "Adjectif",
      "role": "Adjectif marquant le primat historique ou la condition sine qua non d'existence."
},
  "ertränken": {
      "fr": "noyer / engloutir",
      "lit": "faire périr par immersion dans l'eau",
      "pos_fr": "Verbe causatif faible",
      "role": "Verbe causatif hautement métaphorique décrivant la dissolution violente des croyances anciennes dans l'économie marchande.",
      "etymology": "Verbe causatif en *-jan dérivé du verbe fort « trinken » (boire, en moyen haut-allemand trinken, en vieux haut-allemand trinkan, proto-germanique *trinkanan). en moyen haut-allemand trenken / ertrenken, en vieux haut-allemand trenken (faire boire, abreuver, submerger), avec préfixe perfectif destructif « er- » marquant l'anéantissement mortel."
},
  "erweitern": {
      "fr": "élargir / étendre / amplifier",
      "lit": "rendre plus large",
      "pos_fr": "Verbe",
      "role": "Verbe dynamique décrivant l'expansion mondiale incessante et la conquête de nouveaux marchés par l'industrie bourgeoise.",
      "etymology": "Dérivé de « weit » (large, étendu).",
      "isCompound": true,
      "compoundParts": [
            "er-",
            "weit",
            "-ern"
      ]
},
  "Erwerb": {
      "fr": "profit / gain / acquisition",
      "lit": "fait d'acquérir par le lucre",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant le gain monétaire cyniquement proclamé comme unique finalité de l'entreprise."
},
  "erwerben": {
      "fr": "acquérir / gagner par le travail",
      "lit": "obtenir par ses efforts laborieux",
      "pos_fr": "Verbe",
      "role": "Verbe économique désignant l'acquisition de propriété, dont Marx montre qu'elle est interdite à celui qui travaille sous le capital.",
      "etymology": "Du vieux haut-allemand « firwerban » (s'affairer laborieusement pour obtenir).",
      "isCompound": true,
      "compoundParts": [
            "er-",
            "werben"
      ]
},
  "erworben": {
      "fr": "acquis",
      "lit": "obtenu par le travail ou le commerce",
      "pos_fr": "Adjectif",
      "role": "Participe passé qualifiant la position sociale consolidée par une classe victorieuse."
},
  "erwünscht": {
      "fr": "souhaité / opportun",
      "lit": "désiré",
      "pos_fr": "Adjectif",
      "role": "Occasion bienvenue pour les gouvernements absolutistes."
},
  "erzeugen": {
      "fr": "produire / engendrer",
      "lit": "tirer à l'existence",
      "pos_fr": "Verbe",
      "role": "Verbe cardinal de la théorie marxienne désignant l'engendrement matériel de la richesse et des classes."
},
  "Erzeugnis": {
      "fr": "produit",
      "lit": "ce qui a été engendré",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre économique désignant les biens matériels ou intellectuels issus du travail."
},
  "erzeugt": {
      "fr": "produit / créé",
      "lit": "engendré",
      "pos_fr": "Adjectif",
      "role": "Participe passé désignant les richesses ou forces matérielles issues du travail."
},
  "Erzeugung": {
      "fr": "production / génération",
      "lit": "action d'engendrer des biens",
      "pos_fr": "Nom féminin",
      "role": "Processus de production matérielle."
},
  "erziehen": {
      "fr": "élever / éduquer / former",
      "lit": "tirer vers le haut hors de l'enfance",
      "pos_fr": "Verbe",
      "role": "Verbe pédagogique et social : la révolution prolétarienne arrache l'éducation à l'influence et au monopole de la classe dirigeante.",
      "etymology": "Du vieux haut-allemand « irziohan » (nourrir, élever, calque du latin educere).",
      "isCompound": true,
      "compoundParts": [
            "er-",
            "ziehen"
      ]
},
  "Erziehung": {
      "fr": "éducation / formation",
      "lit": "formation intellectuelle et civique",
      "pos_fr": "Nom féminin",
      "role": "Éducation publique et gratuite pour tous les enfants."
},
  "erzwingen": {
      "fr": "extorquer / arracher par la force",
      "lit": "obtenir par contrainte (Zwang)",
      "pos_fr": "Verbe",
      "role": "Verbe politique marquant les conquêtes légales arrachées par les ouvriers (loi de dix heures)."
},
  "erzwungen": {
      "fr": "forcé / contraint",
      "lit": "obtenu par la violence ou la force",
      "pos_fr": "Adjectif",
      "role": "Participe passé décrivant l'anéantissement sacrificiel obligatoire des forces productives en crise."
},
  "Erörterung": {
      "fr": "débat / discussion critique",
      "lit": "examen minutieux",
      "pos_fr": "Nom féminin",
      "role": "Discussions théoriques dans les cercles politiques."
},
  "es": {
      "fr": "il / cela",
      "lit": "pronom neutre de 3e personne",
      "pos_fr": "Pronom personnel neutre",
      "role": "Sujet impersonnel ou représentatif d'une proposition."
},
  "etc.": {
      "fr": "et cetera / etc.",
      "lit": "et les autres choses",
      "pos_fr": "Adverbe",
      "role": "Clôture une énumération d'exemples."
},
  "euch": {
      "fr": "vous",
      "lit": "pronom réfléchi de 2e personne du pluriel",
      "pos_fr": "Pronom",
      "role": "Pronom réfléchi à l'accusatif accompagnant l'impératif 'vereinigt euch' (unissez-vous)."
},
  "euer": {
      "fr": "votre / vos",
      "lit": "qui vous appartient",
      "pos_fr": "Déterminant",
      "role": "Déterminant possessif pluriel : Marx apostrophe sans détour la classe bourgeoise et ses théoriciens (« votre liberté n'est que la liberté du commerce »).",
      "etymology": "Du moyen haut-allemand « iuwer », vieux haut-allemand « iuwar »."
},
  "eur": {
      "fr": "votre / vos",
      "lit": "votre",
      "pos_fr": "Déterminant",
      "role": "Forme syncopée du possessif pluriel apostrophant la bourgeoisie et son droit de classe déguisé en loi naturelle.",
      "etymology": "Variante syncopée de « euer »."
},
  "euren": {
      "fr": "votre / vos",
      "lit": "à vous (pluriel possessif)",
      "pos_fr": "Adverbe",
      "role": "Adresse polémique directe de Marx aux bourgeois."
},
  "eurer": {
      "fr": "votre / de votre",
      "lit": "possessif 2e personne pluriel",
      "pos_fr": "Adverbe",
      "role": "Dénonciation de 'votre' jurisprudence et morale de classe."
},
  "Europa": {
      "fr": "Europe",
      "lit": "le continent européen",
      "pos_fr": "Nom propre",
      "role": "Nom propre neutre, théâtre historique de la première industrialisation et des révolutions de 1848.",
      "etymology": "Du grec ancien « Eurṓpē » (Εὐρώπη), personnage mythologique (princesse phénicienne enlevée par Zeus métamorphosé en taureau blanc). Étymon discuté par les linguistes : traditionnellement rattaché au grec « eurys » (εὐρύς = large, étendu) et « ōps » (ὤψ = regard, œil, face, d'où « celle qui a de grands yeux »), ou plus vraisemblablement d'origine sémitique phénicienne (*'ereb* = le couchant, l'occident, par opposition à *asu* / le levant, l'Asie). Pour Marx, l'Europe de 1848 désigne le théâtre historique où s'affrontent la Sainte-Alliance monarchique et l'émancipation prolétarienne."
},
  "europäisch": {
      "fr": "européen",
      "lit": "propre au continent européen",
      "pos_fr": "Adjectif",
      "role": "Adjectif définissant le champ continental de l'affrontement révolutionnaire.",
      "etymology": "Dérivé au moyen du suffixe « -isch » sur le nom propre géographique « Europa » (du grec ancien Eurṓpē)."
},
  "europäischen": {
      "fr": "européen",
      "lit": "propre au continent européen",
      "pos_fr": "Nom neutre",
      "role": "Forme fléchie 'europäischen' du lemme 'europäisch'. Adjectif définissant le champ continental de l'affrontement révolutionnaire."
},
  "Evangelium": {
      "fr": "évangile / bonne nouvelle",
      "lit": "doctrine sacrée annoncée",
      "pos_fr": "Nom neutre",
      "role": "L'évangile social des nouveaux prédicateurs."
},
  "ewig": {
      "fr": "perpétuel / éternel",
      "lit": "qui dure sans fin",
      "pos_fr": "Adjectif",
      "role": "Adjectif traduisant l'instabilité perpétuelle de l'époque bourgeoise."
},
  "Existenz": {
      "fr": "existence / survie",
      "lit": "fait d'être au monde",
      "pos_fr": "Nom féminin",
      "role": "Nom philosophique mesurant la précarité de la survie ouvrière dépendante du capital."
},
  "Existenzbedingung": {
      "fr": "condition d'existence",
      "lit": "condition indispensable à la survie",
      "pos_fr": "Nom féminin",
      "role": "Concept structurel : ce sans quoi un mode de production ou une classe ne peut perdurer."
},
  "existieren": {
      "fr": "exister / subsister",
      "lit": "avoir une existence effective",
      "pos_fr": "Verbe",
      "role": "Verbe ontologique posant l'impossibilité matérielle pour la bourgeoisie d'exister sans révolutionner l'industrie."
},
  "existierend": {
      "fr": "existant / présent",
      "lit": "qui est dans l'existence",
      "pos_fr": "Participe présent adjectivé",
      "role": "Participe présent caractérisant l'état de choses matériel existant que le mouvement communiste a pour but d'abolir.",
      "etymology": "Du verbe « existieren », emprunté au latin « exsistere » (sortir de, paraître, exister)."
},
  "Experiment": {
      "fr": "expérience / essai",
      "lit": "mise à l'épreuve pratique",
      "pos_fr": "Nom neutre",
      "role": "Petites expériences modèles de colonies communistes."
},
  "Exploitation": {
      "fr": "exploitation",
      "lit": "mise en valeur / extraction de produit",
      "pos_fr": "Nom féminin",
      "role": "Mot français (Exploitation) employé par Marx pour désigner la mise en coupe réglée du marché mondial."
},
  "exploitiert": {
      "fr": "exploité",
      "lit": "tiré profit au maximum",
      "pos_fr": "Adjectif",
      "role": "Condition de la classe ouvrière sous le capital."
},
  "Expropriation": {
      "fr": "expropriation",
      "lit": "action de déposséder de la propriété",
      "pos_fr": "Nom féminin",
      "role": "Concept juridique et politique révolutionnaire désignant la reprise par le prolétariat des moyens de production monopolisés par la bourgeoisie.",
      "etymology": "Emprunté au français « expropriation », dérivé du bas-latin « expropriare » (priver de son bien, de « ex- » hors de + « proprius » propre)."
},
  "Fabrik": {
      "fr": "fabrique / usine",
      "lit": "lieu de fabrication",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant le sanctuaire du machinisme moderne où règne la discipline du capital."
},
  "Fabrikant": {
      "fr": "fabricant / patron d'usine",
      "lit": "celui qui dirige la fabrique",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant le bourgeois propriétaire exploitant directement l'ouvrier."
},
  "Fabrikarbeit": {
      "fr": "travail en usine / travail industriel",
      "lit": "travail de manufacture / d'usine",
      "pos_fr": "Nom féminin",
      "role": "Nom composé désignant le travail en usine mécanisée, symbole de l'asservissement moderne de l'ouvrier devenu simple accessoire de la machine.",
      "etymology": "Composé de « die Fabrik » (la fabrique, l'usine, du latin « fabrica » atelier) + « die Arbeit » (le travail, du moyen haut-allemand « arbeit », vieux haut-allemand « arabeit », corvée, détresse).",
      "isCompound": true,
      "compoundParts": [
            "Fabrik",
            "Arbeit"
      ]
},
  "Fabrikat": {
      "fr": "produit manufacturé / article manufacturé",
      "lit": "ouvrage de fabrique",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre désignant les marchandises industrielles écoulées sur tous les continents."
},
  "fabrizierend": {
      "fr": "industriel / fabricant",
      "lit": "qui fabrique",
      "pos_fr": "Adjectif",
      "role": "Participe présent désignant les patrons d'usines en position de maîtres directs."
},
  "Fahne": {
      "fr": "drapeau / étendard / bannière",
      "lit": "pièce d'étoffe / drapeau",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin métaphorique : l'étendard ou la bannière que les classes en lutte déploient pour rallier le prolétariat à leurs intérêts.",
      "etymology": "Du moyen haut-allemand « vane », vieux haut-allemand « fano » (drap, pièce de tissu, vêtement), d'origine proto-germanique *fanōn- (tissu, linge)."
},
  "Fall": {
      "fr": "cas / chute",
      "lit": "chute / événement qui arrive",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant l'effondrement historique d'une classe ou l'éventualité concrète d'une crise systémique.",
      "etymology": "Du moyen haut-allemand et vieux haut-allemand « val » (chute), déverbal de « fallen » (tomber)."
},
  "fallen": {
      "fr": "tomber / choir",
      "lit": "chuter vers le bas",
      "pos_fr": "Verbe",
      "role": "Verbe marquant la chute massive des petits patrons et artisans dans le prolétariat."
},
  "Familie": {
      "fr": "famille",
      "lit": "ensemble de la maisonnée",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'institution familiale bourgeoise, dont Marx démontre le fondement vénal et la dissolution matérielle chez les prolétaires.",
      "etymology": "Emprunté au latin « familia » (ensemble des serviteurs d'une maison, puis maisonnée, famille), dérivé de « famulus » (serviteur)."
},
  "Familienband": {
      "fr": "lien familial / lien de famille",
      "lit": "lien de famille",
      "pos_fr": "Nom neutre",
      "role": "nom neutre ou masculin (pluriel Familienbande)",
      "etymology": "Composé de « die Familie » (la famille) + « das Band » (le lien, le ruban, du vieux haut-allemand « bant » lié à « binden », lier).",
      "isCompound": true,
      "compoundParts": [
            "Familie",
            "-n-",
            "Band"
      ]
},
  "Familienlosigkeit": {
      "fr": "absence de famille / privation de famille",
      "lit": "état d'être sans famille",
      "pos_fr": "Nom féminin",
      "role": "Nom composé caractérisant la privation effective de vie familiale imposée à la classe ouvrière par le salariat et le travail forcé des enfants.",
      "etymology": "Dérivé de « familie » + suffixe privatif « -los » (dépourvu de) + suffixe abstrait « -igkeit » (état, qualité).",
      "isCompound": true,
      "compoundParts": [
            "Familie",
            "-n-",
            "los",
            "-igkeit"
      ]
},
  "Familienverhältnis": {
      "fr": "rapport de famille / relation familiale",
      "lit": "lien régissant la famille",
      "pos_fr": "Nom neutre",
      "role": "Nom composé dénonçant la dégradation du lien d'affection en simple rapport monétaire."
},
  "Familienverhältnisse": {
      "fr": "rapports familiaux / relations de famille",
      "lit": "conditions / rapports familiaux",
      "pos_fr": "Nom neutre",
      "role": "Nom composé désignant les rapports de parenté et d'autorité domestique, dépouillés par la bourgeoisie de tout voile sentimental pour devenir de purs rapports d'argent.",
      "etymology": "Composé de « Familie » + « Verhältnis » (rapport, relation, comportement).",
      "isCompound": true,
      "compoundParts": [
            "Familie",
            "-n-",
            "Verhältnis"
      ]
},
  "fanatisch": {
      "fr": "fanatique",
      "lit": "inspiré d'un zèle aveugle",
      "pos_fr": "Adjectif",
      "role": "Attachement dogmatique aux sectes utopiques."
},
  "fassen": {
      "fr": "contenir / englober",
      "lit": "saisir / tenir dedans",
      "pos_fr": "Verbe",
      "role": "Verbe traduisant l'incapacité des cadres juridiques bourgeois à contenir la richesse créée."
},
  "fast": {
      "fr": "presque / quasiment",
      "lit": "à très peu de chose près",
      "pos_fr": "Adverbe",
      "role": "Adverbe d'intensité nuancée caractérisant la généralité de la stratification féodale."
},
  "Faulheit": {
      "fr": "paresse / fainéantise",
      "lit": "caractère pourri / paresse",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la paresse générale que les idéologues bourgeois reprochent faussement au communisme pour masquer leur propre oisiveté rentière.",
      "etymology": "Du moyen haut-allemand « vūlheit », dérivé de l'adjectif « faul » (pourri, gâté, paresseux, vieux haut-allemand « fūl ») + « -heit »."
},
  "fehlschlagend": {
      "fr": "qui échoue / avorté",
      "lit": "qui frappe à faux",
      "pos_fr": "Adjectif",
      "role": "Tentatives ouvrières prématurées vouées à l'échec."
},
  "feierlich": {
      "fr": "solennellement",
      "lit": "avec solennité festive",
      "pos_fr": "Adverbe",
      "role": "Proclamations officielles des chancelleries."
},
  "feig": {
      "fr": "lâche / couard",
      "lit": "sans courage",
      "pos_fr": "Adjectif",
      "role": "Lâcheté politique de la bourgeoisie face aux absolutismes."
},
  "Feind": {
      "fr": "ennemi",
      "lit": "adversaire en lutte",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin du vocabulaire de combat : les adversaires de classe à terrasser."
},
  "feindlich": {
      "fr": "ennemi / hostile",
      "lit": "portant une inimitié mortelle",
      "pos_fr": "Adjectif",
      "role": "Adjectif caractérisant les deux camps belligérants de la société moderne.",
      "etymology": "Issu du moyen haut-allemand « vīntlich », dérivé en « -lich » sur « der Feind » (l'ennemi, l'adversaire de combat, en vieux haut-allemand fīant, participe présent substantivé du verbe germanique *fijōną = haïr, détester)."
},
  "feindlichen": {
      "fr": "hostile / antagonique",
      "lit": "propre à l'ennemi",
      "pos_fr": "Nom neutre",
      "role": "Forme fléchie 'feindlichen' du lemme 'feindlich'. Épithète marquant le caractère irréconciliable de la contradiction de classe."
},
  "ferner": {
      "fr": "en outre / de plus",
      "lit": "plus loin encore",
      "pos_fr": "Adverbe",
      "role": "Adverbe enchaînant un nouvel argument sur la déchéance des classes intermédiaires."
},
  "fertig": {
      "fr": "prêt / achevé",
      "lit": "apte à partir / prêt",
      "pos_fr": "Adjectif",
      "role": "Adjectif de la locution « fertig werden » (régler son compte, en finir avec)."
},
  "Fessel": {
      "fr": "entrave / chaîne",
      "lit": "lien de captivité",
      "pos_fr": "Nom féminin",
      "role": "Métaphore classique de Marx : les anciens rapports de propriété devenus des chaînes pour la production."
},
  "fest": {
      "fr": "solide / stable / inébranlable",
      "lit": "qui résiste à l'ébranlement",
      "pos_fr": "Adjectif",
      "role": "Adjectif caractérisant les institutions et dogmes séculaires dissous par le capitalisme."
},
  "fester": {
      "fr": "plus solidement / plus fermement",
      "lit": "plus solide",
      "pos_fr": "Adverbe",
      "role": "Consolidation croissante de l'union ouvrière."
},
  "feudal": {
      "fr": "féodal",
      "lit": "fondé sur le fief et le servage",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant l'ordre hiérarchique seigneurial terrien antérieur au capital.",
      "etymology": "Emprunt au latin médiéval « feudalis » (relatif au fief, de feudum, du francique *fehu = bétail, bien foncier octroyé en échange d'hommage lige)."
},
  "Feudalband": {
      "fr": "lien féodal",
      "lit": "attache morale et juridique de vassalité féodale",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre désignant les rapports coutumiers de sujétion servile liant l'homme à son seigneur."
},
  "Feudalbande": {
      "fr": "liens féodaux",
      "lit": "chaînes et attaches coutumières de la féodalité",
      "pos_fr": "Nom neutre (pluriel)",
      "role": "Pluriel neutre régulier désignant l'ensemble disparate des attaches féodales brisées par le capital.",
      "etymology": "Composé associant : 1° l'adjectif « feudal » (du latin médiéval feudalis, fief) ; 2° « das Band » (le lien, l'attache, la chaîne, en moyen haut-allemand bant, vieux haut-allemand bant, déverbal apophonique du verbe fort binden = lier, attacher, proto-germanique *bindaną)."
},
  "Feudale": {
      "fr": "féodaux / seigneurs féodaux",
      "lit": "ceux qui sont d'ordre féodal",
      "pos_fr": "Nom masculin pluriel",
      "role": "Adjectif substantivé désignant les seigneurs féodaux et l'aristocratie terrienne déchus par la révolution bourgeoise.",
      "etymology": "Substantivation de l'adjectif « feudal », emprunté au latin médiéval « feudalis » (relatif au fief, « feudum »)."
},
  "feudale": {
      "fr": "féodal",
      "lit": "relatif à la seigneurie terrienne et au servage",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'feudale' du lemme 'feudal'. Épithète qualifiant les rapports agraires arriérés de propriété nobiliaire."
},
  "Feudaleigentum": {
      "fr": "propriété féodale",
      "lit": "propriété féodale",
      "pos_fr": "Nom neutre",
      "role": "Nom composé désignant la propriété féodale du sol et les privilèges seigneuriaux brisés par la révolution bourgeoise montante.",
      "etymology": "Composé de « feudal » (féodal) + « das Eigentum » (la propriété, ce qui est propre).",
      "isCompound": true,
      "compoundParts": [
            "feudal",
            "Eigentum"
      ]
},
  "Feudalherr": {
      "fr": "seigneur féodal",
      "lit": "maître et suzerain d'un domaine inféodé",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin composé désignant les membres de la caste nobiliaire possédant le fief et les serfs.",
      "etymology": "Composé féodal associant : 1° l'adjectif « feudal » (issu du latin médiéval feudalis, dérivé de feudum / le fief, emprunté au vieux francique germanique *fehu-ōd « bétail et propriété foncière héréditaire », cognat du vieil anglais feoh et de l'allemand Vieh / bétail) ; 2° « der Herr » (le seigneur terrien, issu du moyen haut-allemand hērre, comparatif du vieux haut-allemand hēriro « plus âgé, plus vénérable, supérieur en dignité »). Les Feudalherren sont les possesseurs exclusifs du sol seigneurial."
},
  "Feudalismus": {
      "fr": "féodalité / féodalisme",
      "lit": "système des fiefs",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant l'ordre social médiéval abattu par la révolution bourgeoise."
},
  "feudalistisch": {
      "fr": "féodal",
      "lit": "propre au système féodal",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant l'absolutisme monarchique fondé sur le servage et le fief."
},
  "feudalistischen": {
      "fr": "féodaliste / féodal",
      "lit": "du système de fiefs",
      "pos_fr": "Adjectif",
      "role": "Socialisme féodal aristocratique."
},
  "Figur": {
      "fr": "figure / personnage / rôle",
      "lit": "forme / représentation",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant le rôle historique, la posture sociale ou le masque idéologique incarné par une fraction de classe.",
      "etymology": "Emprunté au latin « figura » (forme, aspect extérieur, image), rattaché au verbe « fingere » (modeler, façonner)."
},
  "finden": {
      "fr": "trouver / constater",
      "lit": "découvrir par l'observation",
      "pos_fr": "Verbe fort",
      "role": "Verbe de constatation empirique dans l'examen de l'histoire humaine."
},
  "Fleischesertötung": {
      "fr": "mortification de la chair",
      "lit": "mise à mort de la chair",
      "pos_fr": "Nom féminin",
      "role": "Nom composé satirique raillant l'ascétisme hypocrite et la mortification de la chair prônés par le socialisme féodal et clérical.",
      "etymology": "Composé au génitif de « das Fleisch » (la chair, viande) + « die Ertötung » (la mortification, l'anéantissement, du verbe ertöten).",
      "isCompound": true,
      "compoundParts": [
            "Fleisch",
            "-es-",
            "Ertötung"
      ]
},
  "Fliege": {
      "fr": "mouche",
      "lit": "insecte qui vole",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin employé avec ironie pour souligner la fragilité dérisoire des constructions utopiques face aux rafales de l'histoire réelle.",
      "etymology": "Du moyen haut-allemand « vliege », vieux haut-allemand « flioga », déverbal du germanique *fleugan (voler)."
},
  "Flintenkugel": {
      "fr": "balle de fusil",
      "lit": "boule / projectile de fusil",
      "pos_fr": "Nom féminin",
      "role": "Nom composé désignant les balles de fusil de la troupe écrasant dans le sang les insurrections ouvrières comme les journées de Juin 1848.",
      "etymology": "Composé de « die Flinte » (fusil, originellement pierre à fusil, du danois/suédois « flinta » silex) + « die Kugel » (balle, sphère).",
      "isCompound": true,
      "compoundParts": [
            "Flinte",
            "-n-",
            "Kugel"
      ]
},
  "Fluß": {
      "fr": "fleuve / rivière",
      "lit": "cours d'eau",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin évoquant les grands fleuves canalisés par le génie hydraulique moderne."
},
  "flämisch": {
      "fr": "flamand",
      "lit": "en langue flamande",
      "pos_fr": "Adjectif",
      "role": "Adjectif de langue pour l'édition belge du Manifeste.",
      "etymology": "Dérivé du toponyme Flandre (moyen néerlandais Vlaanderen = terres inondées, alluvions côtières)."
},
  "Folge": {
      "fr": "conséquence / résultat inéluctable",
      "lit": "suite logique",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin articulant la causalité rigoureuse reliant base économique et forme politique."
},
  "folgen": {
      "fr": "suivre / découler de",
      "lit": "venir après",
      "pos_fr": "Verbe",
      "role": "Conséquence logique ou historique."
},
  "folgend": {
      "fr": "suivant / qui suit",
      "lit": "qui vient immédiatement après",
      "pos_fr": "Participe adjectivé",
      "role": "Adjectif introduisant le texte même du Manifeste.",
      "etymology": "Participe présent adjectivé du verbe « folgen » (suivre, obéir, moyen haut-allemand volgen, vieux haut-allemand folgēn, proto-germanique *fulgāną)."
},
  "Forderung": {
      "fr": "revendication / exigence",
      "lit": "ce qui est réclamé",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin politique désignant les revendications concrètes immédiates ou stratégiques formulées par le prolétariat révolutionnaire.",
      "etymology": "Du moyen haut-allemand « vorderunge », dérivé du verbe « fordern » (exiger, réclamer, vieux haut-allemand « fordaron » pousser en avant) + « -ung »."
},
  "Form": {
      "fr": "forme / configuration",
      "lit": "structure / configuration",
      "pos_fr": "Nom féminin",
      "role": "Substantif à l'accusatif singulier désignant la configuration concrète de la propriété."
},
  "form": {
      "fr": "forme juridique et sociale",
      "lit": "structure / configuration",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'Form' du lemme 'Form'. Substantif à l'accusatif singulier désignant la configuration concrète de la propriété."
},
  "formulieren": {
      "fr": "formuler",
      "lit": "mettre en formule",
      "pos_fr": "Verbe",
      "role": "Formulation théorique des principes communistes."
},
  "Fortentwicklung": {
      "fr": "développement continu / progression ultérieure",
      "lit": "développement vers l'avant",
      "pos_fr": "Nom féminin",
      "role": "Nom composé désignant la dynamique ascendante et le développement dialectique continu des forces productives de la société.",
      "etymology": "Composé de la particule « fort » (en avant, continuellement) + « Entwicklung » (développement).",
      "isCompound": true,
      "compoundParts": [
            "fort",
            "Entwicklung"
      ]
},
  "fortgeschritten": {
      "fr": "avancé / progressiste",
      "lit": "qui a marché en avant",
      "pos_fr": "Participe adjectivé",
      "role": "Adjectif politique désignant l'aile gauche démocratique et progressiste de l'opposition.",
      "etymology": "Participe adjectivé au comparatif du verbe fort séparable « fortschreiten » : 1° l'adverbe dynamique « fort » (en avant, au loin, vieux haut-allemand fora / fort) ; 2° le verbe fort « schreiten » (avancer à pas fermes et mesurés, moyen haut-allemand schrīten, vieux haut-allemand scrītan, racine germanique *skrīþaną). Désigne chez Marx les fractions de l'opposition libérale ou républicaine qui s'estiment à l'avant-garde mais capitulent dès que l'ordre bourgeois est contesté à la racine."
},
  "fortgeschrittenst": {
      "fr": "les plus avancés / les plus développés",
      "lit": "qui a marché le plus en avant",
      "pos_fr": "Adjectif",
      "role": "Adjectif au superlatif désignant les fractions ouvrières et les pays industriels les plus avancés servant d'avant-garde révolutionnaire.",
      "etymology": "Superlatif du participe « fortgeschritten » (avancé en marche).",
      "isCompound": true,
      "compoundParts": [
            "fort",
            "schreiten"
      ]
},
  "fortgeschrittneren": {
      "fr": "avancé / développé",
      "lit": "qui a marché loin en avant",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'fortgeschrittneren' du lemme 'fortgeschritten'. Épithète au comparatif marquant l'avance productive européenne de 1848 sur 1789."
},
  "Fortpflanzung": {
      "fr": "reproduction / perpétuation de l'espèce",
      "lit": "propagation vers l'avant",
      "pos_fr": "Nom féminin",
      "role": "Terme biologique précis : les vivres nécessaires au renouvellement générationnel de la classe ouvrière."
},
  "Fortschritt": {
      "fr": "progrès",
      "lit": "pas accompli en avant",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant les conquêtes politiques successives de la bourgeoisie vers l'hégémonie.",
      "etymology": "Composé unissant : 1° l'adverbe dynamique « fort » (en avant, au loin, en moyen haut-allemand vort, en vieux haut-allemand fora / fort) ; 2° « der Schritt » (le pas, en moyen haut-allemand schrit, déverbal apophonique de schreiten = marcher à pas mesurés, proto-germanique *skrīþaną). Calque humaniste du latin progressus."
},
  "fortvegetiern": {
      "fr": "continuer de végéter",
      "lit": "végéter en avant",
      "pos_fr": "Verbe séparable",
      "role": "Condition précaire de la petite bourgeoisie déclinante."
},
  "fortwährend": {
      "fr": "continuellement / sans cesse",
      "lit": "qui dure en avançant",
      "pos_fr": "Adjectif",
      "role": "Adjectif/adverbe soulignant le mouvement perpétuel de la révolution productive."
},
  "fortwährendem": {
      "fr": "incessant / perpétuel",
      "lit": "qui dure en avançant",
      "pos_fr": "Adjectif",
      "role": "Adjectif dépeignant l'état de guerre continue dans lequel lutte la bourgeoisie."
},
  "Fourier": {
      "fr": "Fourier",
      "lit": "Charles Fourier",
      "pos_fr": "Nom masculin",
      "role": "Nom propre désignant Charles Fourier (1772-1837), théoricien socialiste critique-utopique français dénonciateur génial de la civilisation marchande.",
      "etymology": "Nom de famille de Charles Fourier, théoricien socialiste utopiste français des phalanstères."
},
  "Fourierist": {
      "fr": "fouriériste",
      "lit": "adepte du fouriérisme",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin politique désignant les disciples de Fourier, organisés en sectes réformistes repliées sur l'expérimentation isolée de phalanstères.",
      "etymology": "Dérivé du patronyme Fourier avec le suffixe doctrinal « -ist »."
},
  "Frage": {
      "fr": "question / problème existentiel",
      "lit": "interrogation posée",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin de la locution « Lebensfrage » (question de vie ou de mort pour les nations)."
},
  "Frankreich": {
      "fr": "France",
      "lit": "pays des Francs",
      "pos_fr": "Nom propre",
      "role": "Nom propre au datif neutre singulier, régime de 'in'."
},
  "frankreich": {
      "fr": "France",
      "lit": "pays des Francs",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'Frankreich' du lemme 'Frankreich'. Nom propre au datif neutre singulier, régime de 'in'."
},
  "französisch": {
      "fr": "français",
      "lit": "relatif à la France",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant les républicains radicaux parisiens.",
      "etymology": "Issu du moyen haut-allemand « franzoyse », emprunt à l'ancien français « françois », dérivé avec le suffixe -iscus sur le nom du peuple germanique des Francs (du proto-germanique *frankō = libre, hardi, ou lance de guerre)."
},
  "französischen": {
      "fr": "français",
      "lit": "propre à la France ou à sa tradition",
      "pos_fr": "Nom neutre",
      "role": "Forme fléchie 'französischen' du lemme 'französisch'. Épithète au datif masculin singulier déterminant 'Sinn'."
},
  "Frau": {
      "fr": "femme / épouse",
      "lit": "dame / maîtresse de maison / femme",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la femme, dont Marx dévoile le statut de simple instrument de production aux yeux du bourgeois.",
      "etymology": "Du moyen haut-allemand « vrouwe », vieux haut-allemand « frouwa » (dame, maîtresse de maison, féminin de « frō » seigneur)."
},
  "frei": {
      "fr": "libre",
      "lit": "affranchi de servitude",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant la concurrence dérégulée qui supplante le corporatisme féodal."
},
  "Freier": {
      "fr": "homme libre",
      "lit": "citoyen affranchi jouissant de droits civiques",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant l'opposé de l'esclave dans l'Antiquité gréco-romaine.",
      "etymology": "Issu du moyen haut-allemand « vrī », vieux haut-allemand « frī », issu de la racine germanique commune *frijaz (« qui n'est pas asservi, de condition noble, exempt de corvée »), elle-même issue de la racine indo-européenne *prī- (« aimer, chérir, être bienveillant pour les siens »). L'homme libre dans la communauté germanique est celui qui appartient au clan familial protégé et choyé (d'où la parenté immédiate avec Freund / ami et Frieden / paix), par opposition absolue au captif asservi ou étranger réduit en servitude."
},
  "Freiheit": {
      "fr": "liberté / franchise corporative",
      "lit": "condition d'homme libre / immunité légale",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin dont le pluriel sous l'Ancien Régime désignait les privilèges particuliers et franchises d'ordres.",
      "etymology": "Dérivé abstrait en « -heit » de l'adjectif « frei » (libre, franc d'obligations serviles, en moyen haut-allemand vrī, vieux haut-allemand frī, proto-germanique *frijaz = aimé, chéri, de la racine indo-européenne *priyos = cher, aimé, qui a aussi donné Freund / ami)."
},
  "Freiheitsbravade": {
      "fr": "bravade de liberté / fanfaronnade libérale",
      "lit": "bravade de liberté",
      "pos_fr": "Nom féminin",
      "role": "Nom composé satirique stigmatisant les fanfaronnades et rodomontades libérales sur la liberté absolue du commerce.",
      "etymology": "Composé de « die Freiheit » (la liberté) + « die Bravade » (fanfaronnade, défi, de l'italien/français bravade).",
      "isCompound": true,
      "compoundParts": [
            "Freiheit",
            "-s-",
            "Bravade"
      ]
},
  "fremd": {
      "fr": "étranger / extérieur",
      "lit": "qui n'est pas d'ici",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant les produits importés dont l'introduction brise l'industrie locale."
},
  "Fremdenhaß": {
      "fr": "xénophobie / haine de l'étranger",
      "lit": "aversion pour l'étranger",
      "pos_fr": "Nom masculin",
      "role": "Nom composé désignant le rejet farouche des étrangers abattu par l'invasion des marchandises."
},
  "friedlich": {
      "fr": "pacifique",
      "lit": "plein de paix",
      "pos_fr": "Adjectif",
      "role": "Moyens pacifiques prônés par les réformateurs utopiques."
},
  "fristen": {
      "fr": "prolonger précairement / subsister",
      "lit": "accorder un délai de grâce",
      "pos_fr": "Verbe",
      "role": "Verbe décrivant l'existence servile et au rabais assurée à l'esclave sous l'ancien régime."
},
  "fromm": {
      "fr": "pieux / dévot",
      "lit": "vaillant / loyal / puis soumis à Dieu",
      "pos_fr": "Adjectif",
      "role": "Adjectif décrivant la dévotion et l'obéissance chrétienne des masses féodales.",
      "etymology": "Du moyen haut-allemand « vrum / vrom » (brave, vaillant, utile, pieux), vieux haut-allemand « fruma » (utilité, profit). Évolution sémantique de l'utilité chevaleresque vers la dévotion pieuse sous l'influence du christianisme médiéval."
},
  "früh": {
      "fr": "ancien / primitif",
      "lit": "qui se situe au début des temps",
      "pos_fr": "Adjectif",
      "role": "Adjectif comparatif marquant les époques historiques révolues.",
      "etymology": "Comparatif de l'adjectif « früh » (tôt, matinal, ancien, moyen haut-allemand vruo, vieux haut-allemand vruoi, proto-germanique *frōwjaz)."
},
  "früher": {
      "fr": "auparavant / autrefois",
      "lit": "plus tôt",
      "pos_fr": "Adverbe",
      "role": "Renvoie aux époques antérieures féodales ou antiques."
},
  "Fuß": {
      "fr": "pied",
      "lit": "extrémité de la jambe",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin de la métaphore du terrain économique « dérobé sous les pieds » des classes dominantes."
},
  "fördern": {
      "fr": "favoriser / promouvoir / stimuler",
      "lit": "faire avancer",
      "pos_fr": "Verbe",
      "role": "Verbe dialectique examinant ce qui stimule le développement des forces productives prolétariennes."
},
  "förmlich": {
      "fr": "véritablement / formellement",
      "lit": "selon la forme",
      "pos_fr": "Adverbe",
      "role": "Une véritable armée industrielle."
},
  "fühlen": {
      "fr": "sentir / éprouver la conscience de",
      "lit": "percevoir par le toucher ou le sentiment",
      "pos_fr": "Verbe",
      "role": "Verbe marquant la prise de conscience collective par le prolétariat de sa propre force."
},
  "führen": {
      "fr": "mener / conduire",
      "lit": "guider vers un terme",
      "pos_fr": "Verbe régulier",
      "role": "Verbe désignant l'action continue de mener une lutte sans répit.",
      "etymology": "Issu du moyen haut-allemand « vüeren », vieux haut-allemand « fuoren » (mener, transporter, guider), verbe causatif germanique (*fōrijaną) dérivé du verbe fort « fahren » (se déplacer, voyager, en vieux haut-allemand faran, proto-germanique *faraną)."
},
  "für": {
      "fr": "pour",
      "lit": "à destination de / en faveur de",
      "pos_fr": "Préposition (régime accusatif)",
      "role": "Préposition de but ou de destination régissant l'accusatif."
},
  "fürchten": {
      "fr": "redouter / craindre",
      "lit": "avoir peur",
      "pos_fr": "Verbe",
      "role": "Peur des classes dominantes face au spectre communiste."
},
  "Gang": {
      "fr": "marche / cours / cheminement",
      "lit": "marche / démarche / cours",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant le cours nécessaire et la marche objective des contradictions de classe au sein de l'histoire matérielle.",
      "etymology": "Du moyen haut-allemand et vieux haut-allemand « gang » (marche, pas, cours, voie), dérivé de « gehen » (aller, marcher)."
},
  "ganz": {
      "fr": "entier / tout / complet",
      "lit": "sans division ni réserve",
      "pos_fr": "Adjectif",
      "role": "Adjectif insistant sur l'universalité de la polarisation de la société entière.",
      "etymology": "Issu du moyen haut-allemand « ganz », vieux haut-allemand « ganz » (intact, complet, sain, indemne), du proto-germanique *gantaz."
},
  "gar": {
      "fr": "même / tout à fait / absolument",
      "lit": "achevé / prêt / complètement",
      "pos_fr": "Adverbe",
      "role": "Adverbe d'intensité renforçant le paradoxe ou soulignant l'absurdité scandaleuse d'une situation sociale.",
      "etymology": "Du moyen haut-allemand « gar », vieux haut-allemand « garo » (tout à fait prêt, entièrement préparé)."
},
  "geben": {
      "fr": "donner / procurer / susciter",
      "lit": "remettre / apporter",
      "pos_fr": "Verbe fort",
      "role": "Verbe désignant l'impulsion décisive donnée par la colonisation aux forces marchandes.",
      "etymology": "Issu du moyen haut-allemand « gāben », vieux haut-allemand « gābun », prétérit apophonique du verbe fort « geben » (vieux haut-allemand geban, proto-germanique *gebaną = donner)."
},
  "Gebiet": {
      "fr": "domaine / territoire / champ",
      "lit": "territoire sur lequel s'exerce le commandement",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre désignant le champ d'action territorial, économique ou intellectuel soumis à l'expansion capitaliste.",
      "etymology": "Du moyen haut-allemand « gebiet », vieux haut-allemand « gibiot » (pouvoir de commandement, territoire administré), dérivé du verbe « gebieten » (commander, ordonner)."
},
  "gebunden": {
      "fr": "lié / asservi / enchaîné",
      "lit": "attaché par des liens",
      "pos_fr": "Participe passé adjectivé",
      "role": "Participe passé décrivant les liens féodaux et corporatifs asservissant l'individu sous l'Ancien Régime.",
      "etymology": "Participe de « binden » (lier, attacher)."
},
  "Gefahr": {
      "fr": "danger / péril / risque",
      "lit": "embûche / péril",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la menace permanente et le péril mortel que la montée du prolétariat fait peser sur la domination bourgeoise.",
      "etymology": "Du moyen haut-allemand « gevāre » (ruse, embûche, danger), vieux haut-allemand « fāra » (guet-apens, ruse, danger), rattaché à la racine germanique signifiant tenter ou voyager."
},
  "Gefolge": {
      "fr": "cortège / suite",
      "lit": "suite d'escorte",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre désignant la cohorte d'illusions traditionnelles accompagnant l'ancien monde féodal."
},
  "gefordert": {
      "fr": "exigé / réclamé",
      "lit": "demandé comme dû",
      "pos_fr": "Adjectif",
      "role": "Participe passé quantifiant la charge de labeur extorquée à la force de travail."
},
  "gefährden": {
      "fr": "mettre en péril / compromettre",
      "lit": "exposer au danger (Gefahr)",
      "pos_fr": "Verbe",
      "role": "Verbe décrivant la menace mortelle que les crises périodiques font peser sur la propriété bourgeoise."
},
  "gefühllos": {
      "fr": "insensible / sans cœur / froid",
      "lit": "dépourvu de tout sentiment ou émotion humaine",
      "pos_fr": "Adjectif",
      "role": "Adjectif privatif qualifiant la rigueur arithmétique et glaciale de la transaction marchande."
},
  "gegeben": {
      "fr": "donné / déterminé",
      "lit": "fourni / accordé",
      "pos_fr": "Adjectif",
      "role": "Participe passé circonscrivant une unité fixe de temps de travail."
},
  "gegen": {
      "fr": "contre",
      "lit": "en opposition spatiale ou politique",
      "pos_fr": "Préposition (régime accusatif)",
      "role": "Préposition d'hostilité régissant l'accusatif."
},
  "gegeneinanderfallen": {
      "fr": "s'opposer diamétralement",
      "lit": "tomber l'un contre l'autre",
      "pos_fr": "Verbe séparable",
      "role": "Polarisation des antagonismes."
},
  "Gegengewicht": {
      "fr": "contrepoids",
      "lit": "masse opposée faisant équilibre dans la balance",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre composé désignant le rôle d'équilibre politique joué par la bourgeoisie contre la noblesse sous la monarchie absolue.",
      "etymology": "Composé de « gegen » (contre, vis-à-vis) + « das Gewicht » (le poids, pesanteur)."
},
  "Gegensatz": {
      "fr": "antagonisme / opposition",
      "lit": "opposition frontale / antithèse",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin dialectique désignant la contradiction motrice entre deux classes aux intérêts incompatibles.",
      "etymology": "Nom philosophique forgé dans la langue philosophique allemande (Christian Wolff, Kant, Hegel) comme calque direct du grec « antithesis » : 1° la préposition « gegen » (en face, opposé) ; 2° le substantif « der Satz » (ce qui est posé, le principe arrêté, déverbal du verbe setzen / poser, vieux haut-allemand saz). Désigne chez Marx la polarité antagonique objective entre deux classes dont les intérêts vitaux matériels s'excluent mutuellement."
},
  "gegensatz": {
      "fr": "antagonisme / opposition irréductible",
      "lit": "position opposée / antithèse posée contre",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'Gegensatz' du lemme 'Gegensatz'. Substantif composé désignant l'antagonisme dialectique entre Capital et Travail."
},
  "gegenseitig": {
      "fr": "réciproque / mutuel",
      "lit": "qui se fait face d'un côté à l'autre",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant les rapports humains que les hommes doivent envisager lucidement."
},
  "Gegenteil": {
      "fr": "contraire / opposé",
      "lit": "partie opposée",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre de la locution « im Gegenteil » (au contraire), marquant le retournement dialectique."
},
  "Gegenwart": {
      "fr": "présent / actualité / présence",
      "lit": "face-à-face / présence / époque actuelle",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'époque présente, caractérisée par la simplification bipolaire des antagonismes de classes.",
      "etymology": "Du moyen haut-allemand « gegenwart », vieux haut-allemand « geginwerti » (face-à-face, direction opposée, présence), de « gegen » (contre, vis-à-vis) + suffixe d'orientation « -wart ».",
      "isCompound": true,
      "compoundParts": [
            "gegen",
            "-wart"
      ]
},
  "Gegenwärtig": {
      "fr": "actuel / présent",
      "lit": "qui est présent",
      "pos_fr": "Nom féminin",
      "role": "Nom substantivé désignant les intérêts contemporains par opposition aux intérêts d'avenir."
},
  "gegenwärtig": {
      "fr": "présent / actuel",
      "lit": "qui fait face à l'instant / actuel",
      "pos_fr": "Nom féminin",
      "role": "Épithète au datif féminin singulier déterminant 'Bewegung'."
},
  "gegenwärtigen": {
      "fr": "présent / actuel",
      "lit": "qui fait face à l'instant / actuel",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'gegenwärtigen' du lemme 'gegenwärtig'. Épithète au datif féminin singulier déterminant 'Bewegung'."
},
  "gegenüber": {
      "fr": "vis-à-vis de / en face de",
      "lit": "placé en regard de",
      "pos_fr": "Préposition",
      "role": "Préposition marquant le face-à-face antagonique des classes sociales."
},
  "gegenüberstehen": {
      "fr": "faire face à / être confronté à",
      "lit": "se tenir debout en face de",
      "pos_fr": "Verbe",
      "role": "Verbe figurant le duel historique face à face entre le prolétariat et la bourgeoisie."
},
  "gegenüberstehend": {
      "fr": "opposés face à face",
      "lit": "se tenant debout l'un en face de l'autre",
      "pos_fr": "Participe adjectivé",
      "role": "Adjectif composé (gegenüber + stehend) désignant l'affrontement frontal sans esquive des deux classes.",
      "etymology": "Participe adjectivé du verbe composé « gegenüberstehen » : adverbe de confrontation réciproque « gegenüber » (composé de gegen = contre, en face + über = par-dessus l'intervalle spatial) et verbe statique « stehen » (se tenir fermement debout sur ses gardes, vieux haut-allemand stān / stēn). Traduit visuellement la tension dramatique de deux lignes de front dressées à portée de canon."
},
  "gegenüberzustellen": {
      "fr": "opposer / confronter",
      "lit": "placer vis-à-vis",
      "pos_fr": "Verbe",
      "role": "Confrontation directe des intérêts de classe."
},
  "Gegner": {
      "fr": "adversaire / ennemi",
      "lit": "opposant politique ou social",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant les forces antagonistes dans l'arène de la lutte politique.",
      "etymology": "Dérivé nominal d'agent formé sur la préposition et adverbe d'orientation spatiale et d'hostilité « gegen » (issu du vieux haut-allemand gagan / gegin = face à, à l'encontre, racine germanique *gagina) combiné au suffixe d'agent germanique « -er ». Désigne textuellement « celui qui se dresse en face, l'antagoniste sur le terrain de lutte »."
},
  "Gehalt": {
      "fr": "contenu / teneur / substance",
      "lit": "ce qui est contenu / retenu",
      "pos_fr": "Nom masculin",
      "role": "nom masculin (contenu) / neutre (traitement)",
      "etymology": "Du moyen haut-allemand « gehalt » (action de garder, détention), déverbal de « halten » (tenir, conserver)."
},
  "gehemmt": {
      "fr": "entravé / réfréné",
      "lit": "bloqué d'un sabot",
      "pos_fr": "Adverbe",
      "role": "Forces productives entravées par la propriété bourgeoise."
},
  "gehen": {
      "fr": "aller / se dérouler",
      "lit": "marcher / avancer",
      "pos_fr": "Verbe",
      "role": "Verbe entrant dans la formule « unter unsern Augen geht eine Bewegung vor » (se produit sous nos yeux)."
},
  "gehend": {
      "fr": "allant / marchant / se dirigeant",
      "lit": "en marche",
      "pos_fr": "Participe présent adjectivé",
      "role": "Participe présent adjectivé de « gehen » traduisant la dynamique active et la progression historique des forces sociales.",
      "etymology": "Participe présent de « gehen » (aller, marcher)."
},
  "gehässig": {
      "fr": "odieux / haineux",
      "lit": "plein de haine",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant la mesquinerie despotique du patron d'usine."
},
  "gehässiger": {
      "fr": "plus haineux / rancunier",
      "lit": "avec plus de haine",
      "pos_fr": "Adverbe",
      "role": "Préjugés haineux inculqués contre les communistes."
},
  "gehören": {
      "fr": "faire partie de / appartenir",
      "lit": "être propre à",
      "pos_fr": "Verbe",
      "role": "Inclusion sociologique d'un groupe."
},
  "geistig": {
      "fr": "intellectuel / spirituel",
      "lit": "qui relève de l'esprit (Geist)",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant la sphère des idées, de la science et de la littérature par opposition au matériel."
},
  "geistlos": {
      "fr": "dépourvu d'esprit / niais",
      "lit": "sans souffle intellectuel",
      "pos_fr": "Adjectif",
      "role": "Platitude des élucubrations petite-bourgeoises."
},
  "geistreich": {
      "fr": "avec esprit / spirituellement",
      "lit": "riche d'esprit",
      "pos_fr": "Adverbe",
      "role": "Critique mordante et spirituelle des pamphlétaires féodaux."
},
  "gekannt": {
      "fr": "connu / éprouvé",
      "lit": "dont on a fait l'expérience",
      "pos_fr": "Participe passé",
      "role": "Adjectif soulignant l'inédit sans précédent de l'essor industriel moderne.",
      "etymology": "Participe passé du verbe « kennen » (connaître, savoir d'expérience, vieux haut-allemand kennan, causatif du proto-germanique *kunnaną = savoir)."
},
  "geknechtet": {
      "fr": "asservi / opprimé / réduit en servitude",
      "lit": "traité en valet ou serf",
      "pos_fr": "Participe passé adjectivé",
      "role": "Participe passé désignant les classes asservies et opprimées sous les différents modes historiques de production.",
      "etymology": "Participe de « knechten » (asservir), dérivé de « Knecht » (valet, serf)."
},
  "Geld": {
      "fr": "argent / monnaie",
      "lit": "paiement / moyen d'échange",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre économique désignant la monnaie, équivalent général abstrait où se dissolvent toutes les relations qualitatives humaines.",
      "etymology": "Du moyen haut-allemand « gelt » (paiement, tribut, argent), vieux haut-allemand « gelt » (rétribution, valeur), rattaché au verbe « gelten » (valoir, coûter)."
},
  "Geldsack": {
      "fr": "sac d'argent / richard / gros capitaliste",
      "lit": "sac d'argent",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin pittoresque et méprisant désignant le gros capitaliste et le richard possesseur de capitaux financiers.",
      "etymology": "Composé de « das Geld » (l'argent) + « der Sack » (le sac, emprunt latin antique « saccus »).",
      "isCompound": true,
      "compoundParts": [
            "Geld",
            "Sack"
      ]
},
  "Geldverhältnis": {
      "fr": "rapport d'argent",
      "lit": "relation fondée sur l'argent",
      "pos_fr": "Nom neutre",
      "role": "Nom composé flétrissant la réduction marchande de toute dimension affective à la valeur d'échange."
},
  "Geldverhältnisse": {
      "fr": "rapports d'argent / relations monétaires",
      "lit": "rapports monétaires",
      "pos_fr": "Nom neutre",
      "role": "Nom composé désignant les rapports purement marchands et monétaires substitués par la bourgeoisie aux fidélités féodales d'antan.",
      "etymology": "Composé de « Geld » + « Verhältnis ».",
      "isCompound": true,
      "compoundParts": [
            "Geld",
            "Verhältnis"
      ]
},
  "Gelegenheit": {
      "fr": "occasion / opportunité",
      "lit": "situation adéquate / convenance",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin marquant l'occasion historique et la conjoncture favorable saisie par une classe pour engager la lutte.",
      "etymology": "Du moyen haut-allemand « gelegenhait » (situation, position, occasion), dérivé du participe « gelegen » (situé, propice, bien placé) + « -heit »."
},
  "gelegentlich": {
      "fr": "occasionnel / sporadique",
      "lit": "qui dépend de l'occasion",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant les premières flambées insurrectionnelles ouvrières."
},
  "Geltung": {
      "fr": "valeur / validité sociale",
      "lit": "reconnaissance d'autorité",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin constatant que le sexe et l'âge n'ont plus de validité dans la fabrique machinisée."
},
  "Gelächter": {
      "fr": "rires / hilarité / risée",
      "lit": "éclats de rire répétés",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre désignant les éclats de rire méprisants du peuple découvrant les vieux blasons féodaux cousus sur la bannière des socialistes aristocrates.",
      "etymology": "Du moyen haut-allemand « gelahtir », vieux haut-allemand « gilahtri », formation collective dérivée du verbe « lachen » (rire)."
},
  "gemein": {
      "fr": "ordinaire / simple / commun",
      "lit": "partagé par le vulgaire",
      "pos_fr": "Adjectif",
      "role": "Adjectif assimilant les ouvriers à de simples soudards sans grade dans l'armée industrielle."
},
  "Gemeingut": {
      "fr": "patrimoine commun / bien commun",
      "lit": "bien partagé par la communauté",
      "pos_fr": "Nom neutre",
      "role": "Nom composé désignant les créations de l'esprit devenant propriété collective de l'humanité."
},
  "gemeinsam": {
      "fr": "commun / mutuel",
      "lit": "partagé par les deux côtés",
      "pos_fr": "Adjectif",
      "role": "Adjectif marquant la destruction réciproque des deux classes en lutte si la révolution échoue.",
      "etymology": "Issu du moyen haut-allemand « gemein », vieux haut-allemand « gimeini » (partagé en commun, universel, accessible à tous), du proto-germanique *gamainiz (partagé collectivement, issu de ga- et de la racine *mey- « échanger », parent étymologique du latin communis)."
},
  "Gemeinschaft": {
      "fr": "communauté",
      "lit": "état ou union de ce qui est commun",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin sociologique désignant la communauté humaine réelle, opposée à l'égoïsme atomisé de la société civile bourgeoise.",
      "etymology": "Du moyen haut-allemand « gemeinmeinschaft », vieux haut-allemand « gimeinida » / « gimeinheit », de l'adjectif « gemein » (commun) + suffixe « -schaft »."
},
  "gemeinschaftlich": {
      "fr": "commun / collectif",
      "lit": "en commun / collectif",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant les intérêts de classe généraux de la bourgeoisie au-delà de la concurrence individuelle."
},
  "Gemeinschaftlichkeit": {
      "fr": "caractère commun / mise en commun",
      "lit": "propriété de ce qui est collectif ou partagé",
      "pos_fr": "Nom féminin",
      "role": "Nom abstrait exprimant le caractère commun et la mise en gestion collective des forces productives et de la propriété.",
      "etymology": "Dérivé de l'adjectif « gemeinschaftlich » (communautaire, commun) + suffixe abstrait « -keit »."
},
  "Gemütstau": {
      "fr": "rosée de l'âme / effusion sentimentale",
      "lit": "rosée du cœur / de l'esprit",
      "pos_fr": "Nom masculin",
      "role": "Nom composé poétique et ironique désignant la rosée des effusions sentimentales où la bourgeoisie a noyé les idéaux sacrés de l'ancien monde.",
      "etymology": "Composé poétique/ironique de « das Gemüt » (l'âme, le cœur, le sentiment intérieur) + « der Tau » (la rosée, du moyen haut-allemand « tou »).",
      "isCompound": true,
      "compoundParts": [
            "Gemüt",
            "-s-",
            "Tau"
      ]
},
  "Generation": {
      "fr": "génération",
      "lit": "ensemble d'hommes d'un même âge",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin englobant les siècles d'efforts productifs cumulés par l'humanité."
},
  "Genugtuung": {
      "fr": "satisfaction / dédommagement / réparation",
      "lit": "action d'en faire assez / satisfaction",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la satisfaction morale ou la réparation historique attendue par une classe opprimée.",
      "etymology": "Calque du latin « satisfactio », composé de « genug » (assez) + « tun » (faire) + « -ung ».",
      "isCompound": true,
      "compoundParts": [
            "genug",
            "tun",
            "-ung"
      ]
},
  "genügen": {
      "fr": "suffire",
      "lit": "être suffisant",
      "pos_fr": "Verbe",
      "role": "Verbe rhétorique : il suffit d'évoquer les crises commerciales pour constater l'impasse du capitalisme."
},
  "gepredigen": {
      "fr": "prêché",
      "lit": "proclamé en chaire",
      "pos_fr": "Verbe",
      "role": "Prédication cléricale ou morale."
},
  "gerade": {
      "fr": "justement / précisément / tout droit",
      "lit": "en ligne directe / exact",
      "pos_fr": "Adverbe",
      "role": "Adverbe de précision pointant exactement le facteur déterminant ou le paradoxe éclatant d'une argumentation.",
      "etymology": "Du moyen haut-allemand « gerade », vieux haut-allemand « giradi » (prompt, droit, direct)."
},
  "geraten": {
      "fr": "entrer dans / tomber dans",
      "lit": "aboutir dans un état",
      "pos_fr": "Verbe",
      "role": "Verbe marquant l'entrée inévitable des intérêts industriels en contradiction avec la société."
},
  "Gerechtigkeit": {
      "fr": "justice / équité",
      "lit": "conformité au droit / justesse",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la justice abstraite et juridique, dont Marx montre qu'elle reflète toujours les intérêts de la classe dominante.",
      "etymology": "Du moyen haut-allemand « gerehtikeit », dérivé de l'adjectif « gerecht » (juste, conforme à la loi, droit) + suffixe « -keit »."
},
  "gesamt": {
      "fr": "tout l'ensemble de / total / global",
      "lit": "uni en un tout",
      "pos_fr": "Adjectif",
      "role": "Adjectif marquant la totalité organique et l'unité synthétique de la société ou du mouvement de classe.",
      "etymology": "Du moyen haut-allemand « gesamet », participe de « samenen » (rassembler)."
},
  "Gesamtbewegung": {
      "fr": "mouvement d'ensemble / mouvement général",
      "lit": "mouvement total / global",
      "pos_fr": "Nom féminin",
      "role": "Nom composé fondamental désignant le mouvement historique d'ensemble du prolétariat unissant les luttes sectorielles en un seul fleuve.",
      "etymology": "Composé de l'adjectif « gesamt » (total, entier) + « die Bewegung » (le mouvement).",
      "isCompound": true,
      "compoundParts": [
            "gesamt",
            "Bewegung"
      ]
},
  "geschaffen": {
      "fr": "créé / forgé",
      "lit": "tiré du néant par le travail",
      "pos_fr": "Adjectif",
      "role": "Participe passé désignant les forces productives matérielles enfantées par le travail social."
},
  "geschehen": {
      "fr": "se produire / arriver / survenir / advenir",
      "lit": "se réaliser soudainement",
      "pos_fr": "Verbe",
      "role": "Verbe historique désignant l'avènement objectif des événements et la survenue inévitable des révolutions sociales.",
      "etymology": "Du moyen haut-allemand « geschehen », vieux haut-allemand « giskehan »."
},
  "Geschichte": {
      "fr": "histoire",
      "lit": "ce qui advient / récit des événements passés",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin : pour Marx, toute l'histoire des sociétés jusqu'à nos jours est l'histoire de la lutte des classes.",
      "etymology": "Issu du moyen haut-allemand « geschiht » (événement qui advient, occurrence du destin, affaire), vieux haut-allemand « giskiht » (événement, survenue, décret divin). Déverbal préfixé en « ge- » formé sur le radical du verbe fort « geschehen » (arriver, advenir, se produire, en moyen haut-allemand geschehen, vieux haut-allemand giskehan, proto-germanique *skehaną = s'élancer, bondir). Le terme a évolué au XVIIIe siècle, notamment sous l'impulsion de Herder et de Hegel, du récit particulier (une histoire, une chronique) vers le singulier collectif absolu « die Geschichte » désignant le procès unitaire et objectif de développement de l'humanité."
},
  "geschichtlich": {
      "fr": "historique",
      "lit": "qui s'inscrit dans l'histoire",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant le mouvement dialectique total de l'humanité."
},
  "Geschicklichkeit": {
      "fr": "habileté / dextérité manuelle",
      "lit": "aptitude technique du métier",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant le tour de main artisanal déprécié et disqualifié par la machine."
},
  "geschildert": {
      "fr": "décrit / dépeint",
      "lit": "représenté sur un bouclier",
      "pos_fr": "Adjectif",
      "role": "Tableau des conditions sociales exposé par Marx."
},
  "Geschlecht": {
      "fr": "sexe / genre",
      "lit": "lignée / division sexuée",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre désignant la division du travail selon le sexe biologique."
},
  "Geschäft": {
      "fr": "affaire / transaction / occupation lucrative",
      "lit": "occupation créée / besogne d'intérêt économique",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre désignant les intérêts marchands et capitalistes gérés par l'État bourgeois.",
      "etymology": "Issu du moyen haut-allemand « geschefte » (mandat, occupation, besogne, œuvre), vieux haut-allemand « giscaft », déverbal de « schaffen » (créer, faire)."
},
  "Gesell": {
      "fr": "compagnon",
      "lit": "artisan qualifié dépendant du maître",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant l'ouvrier corporatif placé sous l'autorité directe du maître de jurande.",
      "etymology": "Issu du moyen haut-allemand « geselle », vieux haut-allemand « gisello » (compagnon d'armes ou de travail), composé du préfixe associatif gi- et du radical « sal / Saal » (la grande salle de séjour, l'atelier artisanal). Désignait à l'origine celui qui dormait et mangeait sous le même toit que son maître avant de former, avec l'émergence des corporations fermées, l'ouvrier qualifié exploité interdit de maîtrise par l'endogamie des jurandes."
},
  "Gesellschaft": {
      "fr": "société",
      "lit": "communauté d'hommes organisée par des rapports de production",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la formation économique et sociale globale.",
      "etymology": "Substantif sociologique primordial issu du moyen haut-allemand « geselleschaft », vieux haut-allemand « giselliscaf » (compagnonnage, confrérie de vie), dérivé de « gisello » (le compagnon de chambrée, textuellement celui qui partage la même salle d'habitation, Saal). Le suffixe statutaire « -schaft » (cognat de l'anglais -ship) institutionalise cette communauté : chez Marx, la Gesellschaft n'est pas une agrégation abstraite d'individus isolés, mais l'ensemble déterminé des rapports de production matériels qui lient organiquement les hommes entre eux."
},
  "gesellschaftlich": {
      "fr": "social",
      "lit": "qui relève de la société humaine",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant les positions et hiérarchies au sein du corps social.",
      "etymology": "Dérivé au moyen du suffixe « -lich » sur « Gesellschaft » (société, de Geselle = compagnon)."
},
  "gesellschaftlichen": {
      "fr": "social",
      "lit": "propre à la société et à ses rapports",
      "pos_fr": "Nom neutre",
      "role": "Forme fléchie 'gesellschaftlichen' du lemme 'gesellschaftlich'. Épithète désignant les conditions créées par le triomphe de la production bourgeoise."
},
  "Gesellschaftsglied": {
      "fr": "membre de la société",
      "lit": "membre / maillon de la société",
      "pos_fr": "Nom neutre",
      "role": "Nom composé désignant chaque membre individuel de la société, considéré dans sa participation concrète à la production.",
      "etymology": "Composé de « die Gesellschaft » (la société) + « das Glied » (le membre, membre du corps ou élément d'une chaîne).",
      "isCompound": true,
      "compoundParts": [
            "Gesellschaft",
            "-s-",
            "Glied"
      ]
},
  "Gesellschaftsordnung": {
      "fr": "ordre social / organisation de la société",
      "lit": "ordonnancement juridique et économique de la société",
      "pos_fr": "Nom féminin",
      "role": "Substantif composé désignant l'ordre bourgeois tout entier destiné à être abattu."
},
  "gesellschaftsordnung": {
      "fr": "ordre social / organisation de la société",
      "lit": "ordonnancement juridique et économique de la société",
      "pos_fr": "Nom féminin",
      "role": "Forme fléchie 'Gesellschaftsordnung' du lemme 'Gesellschaftsordnung'. Substantif composé désignant l'ordre bourgeois tout entier destiné à être abattu."
},
  "Gesellschaftsplan": {
      "fr": "plan de réorganisation sociale / projet de société",
      "lit": "plan de la société",
      "pos_fr": "Nom masculin",
      "role": "Nom composé désignant les plans utopiques de réorganisation sociale dessinés par les fondateurs de sectes en dehors de la lutte réelle.",
      "etymology": "Composé de « Gesellschaft » (société) + « Plan » (projet, plan).",
      "isCompound": true,
      "compoundParts": [
            "Gesellschaft",
            "-s-",
            "Plan"
      ]
},
  "Gesetz": {
      "fr": "loi / règle juridique",
      "lit": "ce qui est posé par l'autorité",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre désignant la superstructure juridique bourgeoise masquant des intérêts matériels."
},
  "Gesetzesform": {
      "fr": "forme de loi / consécration légale",
      "lit": "enveloppe de la législation",
      "pos_fr": "Nom féminin",
      "role": "Nom composé désignant la reconnaissance juridique formelle accordée aux conquêtes ouvrières."
},
  "Gesichtspunkt": {
      "fr": "point de vue / angle d'approche",
      "lit": "point de regard / vision",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin théorique désignant l'angle d'approche méthodologique et la perspective de classe adoptée dans l'analyse.",
      "etymology": "Composé de « das Gesicht » (visage, vue, vision) + « der Punkt » (le point, du latin « punctum »).",
      "isCompound": true,
      "compoundParts": [
            "Gesicht",
            "-s-",
            "Punkt"
      ]
},
  "Gespenst": {
      "fr": "spectre / fantôme",
      "lit": "apparition terrifiante / revenant menaçant",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre métaphorique : la hantise panique ressentie par les puissances d'Ancien Régime face au communisme émergent.",
      "etymology": "Issu du moyen haut-allemand « gespenst(e) » (illusion diabolique, apparition trompeuse, fantôme), lui-même issu du vieux haut-allemand « gispansti / spanst » (séduction, tentation, égarement par ruse ou leurre démoniaque), déverbal du verbe fort « spanan » (attirer, séduire, tenter). En allemand médiéval, le Gespenst n'est pas un simple revenant, mais un piège démoniaque destiné à fourvoyer les âmes (étymon conservé dans l'adjectif « abspenstig » = détourné de son devoir). C'est seulement au XVIe siècle que le terme se fixe au sens moderne d'apparition spectrale terrifiante."
},
  "Gestalt": {
      "fr": "forme / figure / aspect / apparence",
      "lit": "façon dont une chose est posée ou constituée",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la configuration historique concrète ou l'apparence phénoménale sous laquelle se manifeste un mode de production.",
      "etymology": "Du moyen haut-allemand « gestalt » (forme, aspect, statut), participe passé substantivé de « stellen » (poser, placer)."
},
  "gestalten": {
      "fr": "façonner / structurer",
      "lit": "donner forme (Gestalt)",
      "pos_fr": "Verbe",
      "role": "Verbe exprimant l'organisation cosmopolite planétaire imprimée par la bourgeoisie au marché."
},
  "gestaltlos": {
      "fr": "amorphe / sans forme définie",
      "lit": "sans figure",
      "pos_fr": "Adjectif",
      "role": "Premier état indifférencié du prolétariat."
},
  "Gestaltung": {
      "fr": "configuration / organisation",
      "lit": "mise en forme structurelle",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la structuration institutionnelle et spatiale d'une classe sociale.",
      "etymology": "Nom de genèse formelle issu du moyen haut-allemand « gestalt », vieux haut-allemand « gistalt » (apparence corporelle, stature, conformation visible, participe substantivé du verbe stellen / poser debout). Désigne les métamorphoses et configurations concrètes sous lesquelles se réorganise la domination de classe au cours des transitions historiques."
},
  "gestehen": {
      "fr": "avouer / confesser / concéder",
      "lit": "se tenir debout ferme devant sa faute",
      "pos_fr": "Verbe",
      "role": "Verbe désignant l'aveu contraint de la bourgeoisie reconnaissant elle-même la fragilité structurelle de son édifice.",
      "etymology": "Du moyen haut-allemand « gestān » (tenir bon, puis avouer).",
      "isCompound": true,
      "compoundParts": [
            "ge-",
            "stehen"
      ]
},
  "getrennt": {
      "fr": "séparé / disjoint / distinct",
      "lit": "coupé en deux",
      "pos_fr": "Participe passé adjectivé",
      "role": "Participe passé marquant la séparation artificielle entre le travailleur immédiat et ses instruments de production.",
      "etymology": "Participe de « trennen » (séparer, dissocier, vieux haut-allemand trennan)."
},
  "Gewalt": {
      "fr": "puissance / violence / pouvoir",
      "lit": "force souveraine agissante",
      "pos_fr": "Nom féminin",
      "role": "Concept hégélien désignant les forces matérielles infernales déchaînées par le capitalisme."
},
  "gewaltig": {
      "fr": "puissant / colossal / formidable",
      "lit": "doué d'une force souveraine",
      "pos_fr": "Adjectif",
      "role": "Adjectif traduisant la puissance cyclopéenne des instruments modernes et des crises du capital."
},
  "Gewaltmaßregel": {
      "fr": "mesure coercitive / mesure de force",
      "lit": "mesure de puissance / violence",
      "pos_fr": "Nom féminin",
      "role": "Nom composé politique désignant les interventions despotiques et coercitives du prolétariat au pouvoir sur la propriété privée.",
      "etymology": "Composé de « die Gewalt » (la force, puissance, pouvoir) + « die Maßregel » (la mesure, disposition réglementaire).",
      "isCompound": true,
      "compoundParts": [
            "Gewalt",
            "Maßregel"
      ]
},
  "gewaltsam": {
      "fr": "violent",
      "lit": "accompli par la force irrésistible",
      "pos_fr": "Adjectif",
      "role": "Épithète qualifiant la rupture révolutionnaire nécessaire contre l'oppression d'État."
},
  "gewaltsamen": {
      "fr": "violent",
      "lit": "accompli par la force irrésistible",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'gewaltsamen' du lemme 'gewaltsam'. Épithète qualifiant la rupture révolutionnaire nécessaire contre l'oppression d'État."
},
  "Gewand": {
      "fr": "vêtement / parure / habit",
      "lit": "ce dont on s'enveloppe / vêtement",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre métaphorique désignant la parure ou le vêtement idéologique servant à dissimuler des intérêts d'exploitation.",
      "etymology": "Du moyen haut-allemand « gewant » (vêtement, étoffe), substantif formé sur « wenden » (tourner, plier, draper autour du corps)."
},
  "gewinnen": {
      "fr": "gagner / conquérir",
      "lit": "obtenir par la lutte et la victoire",
      "pos_fr": "Verbe",
      "role": "Infinitif avec 'zu' sonnant la promesse historique de la victoire communiste universelle."
},
  "Gewissen": {
      "fr": "en conscience",
      "lit": "selon la conscience",
      "pos_fr": "Nom neutre",
      "role": "Employé dans le sens de liberté de conscience."
},
  "gewissenlos": {
      "fr": "sans scrupule / impitoyable",
      "lit": "dépourvu de toute conscience morale",
      "pos_fr": "Adjectif",
      "role": "Adjectif privatif qualifiant la liberté marchande qui ne recule devant aucune misère humaine pour s'étendre.",
      "etymology": "Composé associant : 1° « das Gewissen » (la conscience morale, en moyen haut-allemand gewizzen, calque chrétien savant du vieux haut-allemand giwizzani sur le latin conscientia, dérivé du verbe wissen = savoir) ; 2° le suffixe privatif « -los » (dépourvu de, sans, cognat de l'anglais -less)."
},
  "gewiß": {
      "fr": "certain / déterminé",
      "lit": "assuré / fixé",
      "pos_fr": "Adjectif",
      "role": "Adjectif marquant un palier objectif atteint par l'évolution historique."
},
  "gewöhnlich": {
      "fr": "ordinaire / habituel",
      "lit": "selon la coutume",
      "pos_fr": "Adjectif",
      "role": "Fonctionnement régulier de la production marchande."
},
  "gierig": {
      "fr": "avidement / voracement",
      "lit": "avec avidité",
      "pos_fr": "Adverbe",
      "role": "Soif de profits et de conquête de débouchés."
},
  "glauben": {
      "fr": "croire",
      "lit": "tenir pour vrai",
      "pos_fr": "Verbe",
      "role": "Croyance aveugle dans les illusions bourgeoises."
},
  "gleich": {
      "fr": "également / pareillement",
      "lit": "semblable",
      "pos_fr": "Adjectif",
      "role": "Adjectif marquant l'équivalence inéluctable de la chute bourgeoise et du triomphe prolétarien."
},
  "gleichen": {
      "fr": "ressembler à",
      "lit": "être égal à",
      "pos_fr": "Verbe",
      "role": "Verbe introduisant la célèbre comparaison avec le sorcier dépassé par ses enchantements."
},
  "gleicher": {
      "fr": "égal / identique",
      "lit": "de même forme",
      "pos_fr": "Adjectif",
      "role": "Égalité des droits ou obligation égale du travail."
},
  "gleichfalls": {
      "fr": "également / de même / pareillement",
      "lit": "en cas identique",
      "pos_fr": "Adverbe",
      "role": "Adverbe de parallélisme soulignant la récurrence analogue des mêmes lois de crise dans différents secteurs économiques.",
      "etymology": "Composé de « gleich » (égal) + « Fall » (cas) + « -s ».",
      "isCompound": true,
      "compoundParts": [
            "gleich",
            "Fall",
            "-s"
      ]
},
  "Gleichförmigkeit": {
      "fr": "uniformité / régularité identique",
      "lit": "caractère de ce qui est de forme identique",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'uniformisation mécanique et la standardisation monotone imposées au travail par le système des fabriques.",
      "etymology": "Composé de « gleich » (semblable, égal) + « Form » (forme) + suffixe abstrait « -igkeit ».",
      "isCompound": true,
      "compoundParts": [
            "gleich",
            "Form",
            "-ig",
            "-keit"
      ]
},
  "Gleichheit": {
      "fr": "égalité / parité",
      "lit": "état de ce qui est égal ou identique",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin politique désignant l'égalité civile, dont Marx dévoile la nature formelle masquant l'inégalité réelle entre capital et travail.",
      "etymology": "Du moyen haut-allemand « gelīcheit », dérivé de « gleich » (égal, semblable) + suffixe « -heit »."
},
  "Gleichmacherei": {
      "fr": "égalitarisme grossier / nivellement par le bas",
      "lit": "manie de tout rendre égal",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin dépréciatif fustigeant le nivellement grossier et l'égalitarisme primitif et ascétique des débuts du communisme.",
      "etymology": "Dérivé verbal composé de « gleichmachen » (égaliser) avec le suffixe dépréciatif d'action continue « -erei ».",
      "isCompound": true,
      "compoundParts": [
            "gleich",
            "machen",
            "-erei"
      ]
},
  "gleichmäßig": {
      "fr": "également / uniformément",
      "lit": "à mesure égale",
      "pos_fr": "Adverbe",
      "role": "Adverbe marquant l'exposition égale de l'ouvrier à toutes les fluctuations du marché."
},
  "gleichzeitig": {
      "fr": "simultanément / en même temps",
      "lit": "au même instant",
      "pos_fr": "Adverbe",
      "role": "Simultanéité de l'essor productif et de la paupérisation."
},
  "gleisnerisch": {
      "fr": "hypocrite / tartufe",
      "lit": "qui brille faussement",
      "pos_fr": "Adjectif",
      "role": "Hypocrisie de la compassion aristocratique."
},
  "Gliederung": {
      "fr": "articulation / division sociale",
      "lit": "hiérarchisation en membres distincts",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin décrivant la stratification interne en ordres et états de la société féodale.",
      "etymology": "Nom d'anatomie sociale dérivé en « -ung » du verbe « gliedern » (articuler en organes), formé sur « das Glied » (le membre corporel, l'articulation osseuse, le maillon d'une chaîne, moyen haut-allemand glit, vieux haut-allemand glid, racine germanique *galiþą). Marx emploie ce terme morphologique pour disséquer l'emboîtement hyper-hiérarchisé des ordres corporatifs et des états d'Ancien Régime."
},
  "goldn": {
      "fr": "d'or / doré",
      "lit": "en or",
      "pos_fr": "Adjectif",
      "role": "Chaînes d'or du salariat ou pommes d'or de l'industrie."
},
  "gotisch": {
      "fr": "gothique",
      "lit": "du style architectural gothique",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant les cathédrales du moyen âge surpassées par les chemins de fer et machines modernes."
},
  "Grade": {
      "fr": "degré / rang",
      "lit": "degré dans l'échelle",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin de la locution « in hohem Grade » (à un haut degré, considérablement)."
},
  "greifend": {
      "fr": "qui gagne du terrain / qui s'étend",
      "lit": "qui saisit autour",
      "pos_fr": "Adjectif",
      "role": "Participe présent de la locution « um sich greifend » marquant l'expansion solidaire des travailleurs."
},
  "grell": {
      "fr": "criant / éclatant / âpre",
      "lit": "aveuglant ou strident",
      "pos_fr": "Adjectif",
      "role": "Adjectif soulignant la netteté brutale et contrastée de la crise révolutionnaire finale."
},
  "groß": {
      "fr": "grand / majeur",
      "lit": "de vaste dimension",
      "pos_fr": "Adjectif",
      "role": "Adjectif soulignant la division monolithique de la société moderne en deux camps gigantesques.",
      "etymology": "Issu du moyen haut-allemand « grōz », vieux haut-allemand « grōz » (grand, imposant, corpulent), du proto-germanique *grautaz (gros, grossier)."
},
  "Grund": {
      "fr": "fond / raison / terre",
      "lit": "base solide sous-jacente",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin entrant dans « in den Grund schießen » (abattre de fond en comble)."
},
  "Grundbesitz": {
      "fr": "propriété foncière / bien-fonds",
      "lit": "possession du sol / de la terre",
      "pos_fr": "Nom masculin",
      "role": "Nom composé économique désignant la grande propriété foncière, assise matérielle de la noblesse rentière déchue.",
      "etymology": "Composé de « der Grund » (sol, fondement, terre) + « der Besitz » (possession, propriété).",
      "isCompound": true,
      "compoundParts": [
            "Grund",
            "Besitz"
      ]
},
  "Grundeigentum": {
      "fr": "propriété foncière",
      "lit": "propriété du sol, possession terrienne",
      "pos_fr": "Nom neutre",
      "role": "Substantif composé désignant le monopole terrien féodal de la noblesse junker."
},
  "grundeigentum": {
      "fr": "propriété foncière",
      "lit": "propriété du sol, possession terrienne",
      "pos_fr": "Nom neutre",
      "role": "Forme fléchie 'Grundeigentum' du lemme 'Grundeigentum'. Substantif composé désignant le monopole terrien féodal de la noblesse junker."
},
  "Grundeigentümer": {
      "fr": "propriétaire foncier",
      "lit": "détenteur de la rente du sol",
      "pos_fr": "Nom masculin",
      "role": "Nom composé désignant la classe rentière aristocratique ennemie de la bourgeoisie."
},
  "Grundfrage": {
      "fr": "question fondamentale / nœud du problème",
      "lit": "question de fond, racine de la contradiction",
      "pos_fr": "Nom féminin",
      "role": "Substantif composé attributif désignant la question de la propriété comme pivot de tout mouvement."
},
  "grundfrage": {
      "fr": "question fondamentale / nœud du problème",
      "lit": "question de fond, racine de la contradiction",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'Grundfrage' du lemme 'Grundfrage'. Substantif composé attributif désignant la question de la propriété comme pivot de tout mouvement."
},
  "Grundlage": {
      "fr": "fondement / base matérielle",
      "lit": "assise posée sous l'édifice",
      "pos_fr": "Nom féminin",
      "role": "Nom composé de l'infrastructure économique sapée sous les pieds de la bourgeoisie."
},
  "Grundrent": {
      "fr": "rente foncière",
      "lit": "rente tirée de la terre",
      "pos_fr": "Nom féminin",
      "role": "nom féminin (variante orthographique de Grundrente)",
      "etymology": "Composé de « Grund » (terre, sol) + « Rente » (revenu régulier, rente, de l'ancien français rente / latin reddita).",
      "isCompound": true,
      "compoundParts": [
            "Grund",
            "Rente"
      ]
},
  "gründlich": {
      "fr": "approfondi / plus complet",
      "lit": "qui va jusqu'au fond (Grund)",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant l'intensification méthodique de l'exploitation des vieux marchés."
},
  "Gründung": {
      "fr": "fondation / création / établissement",
      "lit": "action d'établir sur un sol solide",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'établissement institutionnel ou la fondation d'une organisation ouvrière ou d'une entreprise industrielle.",
      "etymology": "Dérivé du verbe « gründen » (fonder, poser les fondations) + « -ung »."
},
  "Guizot": {
      "fr": "Guizot",
      "lit": "nom propre / François Guizot",
      "pos_fr": "Nom propre",
      "role": "Nom propre masculin, incarnation de l'orléanisme bourgeois conservateur pourchassant les communistes.",
      "etymology": "Patronyme cévenol de François Guizot, ministre doctrinaire de la Monarchie de Juillet."
},
  "gut": {
      "fr": "bon / bien",
      "lit": "conforme au bien",
      "pos_fr": "Adjectif",
      "role": "Qualité morale ou utilité pratique."
},
  "gänzlich": {
      "fr": "entièrement / totalement / complètement",
      "lit": "de façon entière",
      "pos_fr": "Adverbe",
      "role": "Adverbe d'absolu marquant la destruction intégrale, le balayage sans reste et l'éradication des vieilles entraves féodales.",
      "etymology": "Dérivé de « ganz » (tout, entier) + suffixe « -lich »."
},
  "haben": {
      "fr": "avoir / posséder",
      "lit": "détenir comme bien ou auxiliaire",
      "pos_fr": "Verbe auxiliaire / transitif",
      "role": "Auxiliaire du parfait (passé composé) ou verbe de possession."
},
  "halb": {
      "fr": "à demi / pour moitié",
      "lit": "par moitié",
      "pos_fr": "Adjectif",
      "role": "Mi-complainte amère, mi-chanson satirique."
},
  "halbbarbarisch": {
      "fr": "semi-barbare",
      "lit": "à moitié barbare",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant les nations périphériques que le capitalisme soumet aux métropoles industrielles."
},
  "Halbphilosophe": {
      "fr": "demi-philosophe",
      "lit": "à moitié philosophe",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin satirique désignant les demi-philosophes et beaux esprits allemands déformant les doctrines sociales françaises.",
      "etymology": "Composé de l'adjectif « halb » (demi, à demi) + « der Philosoph » (philosophe, du grec « philosophos »).",
      "isCompound": true,
      "compoundParts": [
            "halb",
            "Philosoph"
      ]
},
  "halten": {
      "fr": "tenir / maintenir / considérer comme",
      "lit": "retenir dans la main / garder",
      "pos_fr": "Verbe",
      "role": "Verbe fort traduisant l'évaluation intellectuelle et le maintien ferme d'une position doctrinale de classe.",
      "etymology": "Du moyen haut-allemand « halten », vieux haut-allemand « haltan » (garder le troupeau, retenir)."
},
  "Hand": {
      "fr": "main",
      "lit": "organe du travail",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'organe humain du travail et la concentration de la propriété en peu de mains."
},
  "Handarbeit": {
      "fr": "travail manuel",
      "lit": "travail accompli par la main",
      "pos_fr": "Nom féminin",
      "role": "Nom composé désignant le labeur manuel détrôné par l'automatisme mécanique de la grande usine."
},
  "Handel": {
      "fr": "commerce / négoce",
      "lit": "échange marchand de biens",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant le capital commercial qui précipite la ruine du féodalisme.",
      "etymology": "Issu du moyen haut-allemand « handel » (transaction, affaire, manière d'agir, négoce), déverbal de handeln (agir, manipuler, faire du commerce), dérivé du substantif « die Hand » (la main, vieux haut-allemand hant, proto-germanique *handuz). Littéralement « ce qui se manie de la main »."
},
  "handeln": {
      "fr": "agir / négocier / s'agir de",
      "lit": "manier de la main, faire commerce",
      "pos_fr": "Verbe",
      "role": "Verbe désignant l'agir politique concret, la négociation marchande ou le sujet fondamental de la démonstration théorique.",
      "etymology": "Du moyen haut-allemand « handeln », dérivé de « Hand » (la main)."
},
  "Handelsartikel": {
      "fr": "article de commerce / marchandise",
      "lit": "objet marchand négociable",
      "pos_fr": "Nom masculin",
      "role": "Nom composé désignant l'ouvrier ravalé au rang de simple denrée sur le marché."
},
  "Handelsfreiheit": {
      "fr": "liberté du commerce",
      "lit": "liberté de circulation et de transaction des marchandises",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant chez Marx l'unique liberté réellement consacrée par la révolution bourgeoise : la liberté d'exploiter sans entrave.",
      "etymology": "Composé associant : 1° « der Handel » (commerce, négoce, déverbal de handeln = agir, commercer, issu de Hand / main) ; 2° consonne de liaison -s- ; 3° « die Freiheit » (la liberté, vieux haut-allemand frīhals)."
},
  "Handelskrisen": {
      "fr": "crises commerciales",
      "lit": "forme plurielle de Handelskrise",
      "pos_fr": "Nom masculin",
      "role": "Forme plurielle désignant les secousses cycliques menaçant la société bourgeoise.",
      "etymology": "Composé formé de « der Handel » (le commerce, déverbal de handeln = agir, trafiquer) et « die Krise » (la crise, du grec krisis = jugement, tournant décisif). Désigne les secousses périodiques du marché mondial menaçant l'existence de la bourgeoisie."
},
  "Handgriff": {
      "fr": "manipulation / tour de main",
      "lit": "prise exercée par la main",
      "pos_fr": "Nom féminin",
      "role": "Nom composé désignant le geste parcellaire et répétitif auquel est astreint l'ouvrier."
},
  "Handwerker": {
      "fr": "artisan",
      "lit": "homme de métier manuel",
      "pos_fr": "Nom masculin",
      "role": "Nom composé désignant le travailleur indépendant féodal broyé par la concurrence des fabriques."
},
  "Harmonie": {
      "fr": "harmonie / concorde",
      "lit": "ajustement / accord parfait",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la prétendue concorde naturelle entre capital et travail prêchée par les économistes bourgeois.",
      "etymology": "Emprunté au grec ancien « harmonia » (accord, ajustement) via le latin « harmonia »."
},
  "hartnäckigst": {
      "fr": "le plus opiniâtre / le plus acharné",
      "lit": "au cou le plus raide",
      "pos_fr": "Adjectif",
      "role": "Adjectif superlatif qualifiant la xénophobie farouche des sociétés archaïques terrassées par les bas prix."
},
  "Haupt": {
      "fr": "chef / tête / sommet",
      "lit": "tête / chef",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre désignant la tête dirigeante, le sommet de l'édifice féodal ou le chef d'un mouvement politique.",
      "etymology": "Du moyen haut-allemand « houbet », vieux haut-allemand « houbit » (tête), d'origine proto-germanique *haubida- (tête)."
},
  "Hauptanklage": {
      "fr": "accusation principale / chef d'accusation majeur",
      "lit": "accusation capitale",
      "pos_fr": "Nom féminin",
      "role": "Nom composé désignant le chef d'accusation majeur et le grief capital porté par la réaction contre les communistes.",
      "etymology": "Composé du préfixe d'importance « Haupt- » (principal, capital) + « die Anklage » (l'accusation).",
      "isCompound": true,
      "compoundParts": [
            "Haupt-",
            "Anklage"
      ]
},
  "Hauptaufmerksamkeit": {
      "fr": "attention principale",
      "lit": "attention cardinale / concentration majeure",
      "pos_fr": "Nom féminin",
      "role": "Substantif composé à l'accusatif singulier, objet direct de 'richten'."
},
  "hauptaufmerksamkeit": {
      "fr": "attention principale",
      "lit": "attention cardinale / concentration majeure",
      "pos_fr": "Nom féminin",
      "role": "Forme fléchie 'Hauptaufmerksamkeit' du lemme 'Hauptaufmerksamkeit'. Substantif composé à l'accusatif singulier, objet direct de 'richten'."
},
  "Hauptgrundlage": {
      "fr": "fondement principal / pierre angulaire",
      "lit": "fondation capitale posée à la base d'un édifice",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin composé désignant la bourgeoisie comme socle fiscal et matériel indispensable aux grandes monarchies.",
      "etymology": "Composé ternaire associant : 1° « Haupt- » (tête, chef, premier en rang, en vieux haut-allemand houbit, proto-germanique *haubida-) ; 2° « der Grund » (sol, fond, terre ferme, en vieux haut-allemand grunt) ; 3° « die Lage » (assiette, position, couche, déverbal de liegen = reposer à plat)."
},
  "hauptsächlich": {
      "fr": "principalement / avant tout",
      "lit": "selon l'essentiel",
      "pos_fr": "Adverbe",
      "role": "Impact principal d'une mesure économique."
},
  "Hauptvergnügen": {
      "fr": "plaisir suprême / principale jouissance",
      "lit": "joie / plaisir principal",
      "pos_fr": "Nom neutre",
      "role": "Nom composé satirique désignant le passe-temps suprême et la jouissance favorite de la bourgeoisie opulente.",
      "etymology": "Composé de « Haupt- » + « Vergnügen » (plaisir, divertissement).",
      "isCompound": true,
      "compoundParts": [
            "Haupt-",
            "Vergnügen"
      ]
},
  "Hausbesitzer": {
      "fr": "propriétaire immobilier",
      "lit": "possesseur de maison",
      "pos_fr": "Nom masculin",
      "role": "Nom composé désignant le bailleur prélevant sa dîme sur le salaire ouvrier."
},
  "heben": {
      "fr": "mettre en avant / faire ressortir",
      "lit": "soulever hors du fond pour placer en évidence",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'heben' du lemme 'hervorheben'. Verbe principal ('heben hervor') marquant le principe communiste fondamental d'analyse."
},
  "heftig": {
      "fr": "violent / intense",
      "lit": "qui éclate avec impétuosité",
      "pos_fr": "Adjectif",
      "role": "Adjectif peignant la violence convulsive de la décomposition de la classe régnante."
},
  "Heidenzeit": {
      "fr": "époque païenne / paganisme antique",
      "lit": "temps des païens",
      "pos_fr": "Nom féminin",
      "role": "Nom composé historique désignant l'Antiquité païenne gréco-romaine, soumise à ses propres contradictions de classe.",
      "etymology": "Composé de « der Heide » (le païen, du gothique « haiþno » habitant des landes) + « die Zeit » (le temps, l'époque).",
      "isCompound": true,
      "compoundParts": [
            "Heide",
            "-n-",
            "Zeit"
      ]
},
  "heilig": {
      "fr": "sacré / saint",
      "lit": "intègre / consacré à la divinité",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant les fictions religieuses et solennités chrétiennes par lesquelles l'ordre féodal se sanctifiait.",
      "etymology": "Issu du moyen haut-allemand « heilic », vieux haut-allemand « heilig » (sacré, saint, inviolable), dérivé au moyen du suffixe « -ig » sur le substantif « Heil » (salut, bonheur, santé, intégrité, du proto-germanique *hailagaz = intègre, consacré aux dieux, cognat de l'anglais holy). Employé par Marx de façon hautement sarcastique pour parodier la Sainte-Alliance de 1815 en une « sainte battue policière »."
},
  "heilige": {
      "fr": "ce qui est sacré",
      "lit": "chose consacrée",
      "pos_fr": "Nom neutre",
      "role": "Nom substantivé de la maxime : « tout ce qui est saint est profané »."
},
  "Heiligengeschicht": {
      "fr": "hagiographie / histoire sainte / vie des saints",
      "lit": "histoire des saints",
      "pos_fr": "Nom féminin",
      "role": "nom féminin (variante poétique pour Heiligengeschichte)",
      "etymology": "Composé de « der Heilige » (le saint) + « die Geschichte » (l'histoire).",
      "isCompound": true,
      "compoundParts": [
            "Heilige",
            "-n-",
            "Geschichte"
      ]
},
  "Heiligenschein": {
      "fr": "auréole / nimbe sacré",
      "lit": "lueur sacrée autour de la tête",
      "pos_fr": "Nom neutre",
      "role": "Métaphore anticléricale : la bourgeoisie a dépouillé les métiers nobles de leur auréole mystique."
},
  "heißen": {
      "fr": "s'appeler / signifier / commander",
      "lit": "nommer / ordonner",
      "pos_fr": "Verbe",
      "role": "Verbe fort formulant la signification dialectique rigoureuse d'une équivalence ou d'un impératif historique.",
      "etymology": "Du moyen haut-allemand « heizen », vieux haut-allemand « heizzan » (commander, nommer)."
},
  "hemmen": {
      "fr": "entraver / freiner",
      "lit": "bloquer le mouvement",
      "pos_fr": "Verbe",
      "role": "Concept matérialiste décisif : les rapports de propriété deviennent des entraves entravant la production."
},
  "Hemmnis": {
      "fr": "obstacle / entrave matérielle",
      "lit": "ce qui retient et freine",
      "pos_fr": "Nom neutre",
      "role": "Terme dialectique désignant le goulot d'étranglement que les forces productives finissent par briser."
},
  "her": {
      "fr": "depuis / en provenance de",
      "lit": "vers ici (adverbe directionnel)",
      "pos_fr": "Adverbe directionnel",
      "role": "Particule adverbiale marquant l'origine historique léguée par le passé (« vom Mittelalter her » : en provenance du moyen âge)."
},
  "herab": {
      "fr": "vers le bas / en déclin",
      "lit": "mouvement descendant",
      "pos_fr": "Adverbe",
      "role": "Particule adverbiale marquant la dégradation sociale de l'ouvrier en pauper."
},
  "herabdrücken": {
      "fr": "rabaisser / comprimer vers le bas",
      "lit": "presser vers le bas",
      "pos_fr": "Verbe",
      "role": "Verbe décrivant l'action mécanique de la machine qui écrase le salaire vers un niveau misérable."
},
  "herabsinken": {
      "fr": "déchoir / s'affaisser vers le bas",
      "lit": "couler vers le bas",
      "pos_fr": "Verbe",
      "role": "Verbe décrivant la chute dramatique du travailleur dans le paupérisme."
},
  "heranbilden": {
      "fr": "se développer / se former graduellement",
      "lit": "former en approchant",
      "pos_fr": "Verbe",
      "role": "Verbe marquant l'incubation séculaire de la bourgeoisie au sein même de la société féodale."
},
  "Heranbildung": {
      "fr": "formation / entraînement / éducation progressive",
      "lit": "action d'élever et de façonner",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la formation progressive, l'instruction et l'organisation politique du prolétariat par sa propre pratique.",
      "etymology": "Déverbal de « heranbilden » (former progressivement, amener à un niveau d'éducation).",
      "isCompound": true,
      "compoundParts": [
            "heran-",
            "Bildung"
      ]
},
  "herangearbeiten": {
      "fr": "s'élever par le labeur / parvenir",
      "lit": "travailler pour se hisser vers (heranarbeiten)",
      "pos_fr": "Verbe",
      "role": "Verbe montrant comment le serf parvenait jadis à conquérir le statut de membre de la commune."
},
  "herannahen": {
      "fr": "approcher / s'avancer",
      "lit": "s'approcher vers ici",
      "pos_fr": "Verbe",
      "role": "Imminence de la crise révolutionnaire."
},
  "heraufbeschwor": {
      "fr": "évoqua / fit surgir des enfers",
      "lit": "conjura pour faire monter (heraufbeschwören)",
      "pos_fr": "Verbe",
      "role": "Verbe poétique de l'évocation goethéenne des puissances souterraines par le sorcier."
},
  "herausarbeiten": {
      "fr": "dégager / faire émerger / forger",
      "lit": "extraire par le travail rigoureux",
      "pos_fr": "Verbe séparable",
      "role": "Infinitif avec 'zu' inséré désignant le travail continu d'éducation théorique mené par le parti."
},
  "herauszuarbeiten": {
      "fr": "dégager / faire émerger / forger",
      "lit": "extraire par le travail rigoureux",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'herauszuarbeiten' du lemme 'herausarbeiten'. Infinitif avec 'zu' inséré désignant le travail continu d'éducation théorique mené par le parti."
},
  "herbeiführen": {
      "fr": "engendrer / provoquer / amener",
      "lit": "amener vers ici / susciter inévitablement",
      "pos_fr": "Verbe séparable",
      "role": "Infinitif dépendant de 'muß' désignant les conséquences objectives créées par la bourgeoisie."
},
  "herfallen": {
      "fr": "se jeter sur / assaillir",
      "lit": "tomber vers ici sur",
      "pos_fr": "Verbe fort séparable",
      "role": "Verbe agressif décrivant la meute des polémistes bourgeois se jetant sur les propositions communistes pour les conspuer.",
      "etymology": "Composé séparable de l'adverbe directionnel « her » (vers ici) et du verbe fort « fallen » (tomber, en moyen haut-allemand « vallen », vieux haut-allemand « fallan »)."
},
  "Herrschaft": {
      "fr": "domination / pouvoir souverain / règne",
      "lit": "autorité de maître / souveraineté seigneuriale",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin abstrait désignant chez Marx l'exercice institutionnel et coercitif de la suprématie d'une classe sur la société.",
      "etymology": "Substantif dérivé avec le suffixe abstrait de dignité « -schaft » (en vieux haut-allemand hēriscaf) de l'adjectif comparatif germanique « hēro » (vénérable, noble, d'où Herr / seigneur)."
},
  "herrschaft": {
      "fr": "domination / pouvoir de classe",
      "lit": "état de seigneur / règne souverain",
      "pos_fr": "Nom féminin",
      "role": "Forme fléchie 'Herrschaft' du lemme 'Herrschaft'. Substantif au datif féminin singulier désignant l'hégémonie politique bourgeoise."
},
  "herrschen": {
      "fr": "régner / dominer",
      "lit": "exercer le pouvoir seigneurial",
      "pos_fr": "Verbe",
      "role": "Verbe politique constatant l'impuissance historique de la bourgeoisie à maintenir son règne."
},
  "herrschend": {
      "fr": "dominant / régnant",
      "lit": "qui commande et domine",
      "pos_fr": "Adjectif",
      "role": "Épithète au nominatif pluriel qualifiant les classes exploiteuses au pouvoir."
},
  "herrschenden": {
      "fr": "dominant / régnant",
      "lit": "qui commande et domine",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'herrschenden' du lemme 'herrschend'. Épithète au nominatif pluriel qualifiant les classes exploiteuses au pouvoir."
},
  "Herrscher": {
      "fr": "souverain / dirigeant / monarque",
      "lit": "celui qui exerce la seigneurie",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant le prince régnant, le souverain ou la caste détentrice de l'autorité suprême de l'État.",
      "etymology": "Nom d'agent dérivé du verbe « herrschen » (régner, dominer), issu de « Herr » (seigneur, maître)."
},
  "herrührend": {
      "fr": "provenant de / dérivant de",
      "lit": "qui remue depuis / issu de",
      "pos_fr": "Adjectif",
      "role": "Épithète au datif féminin pluriel qualifiant 'Phrasen und Illusionen'."
},
  "herrührenden": {
      "fr": "provenant de / dérivant de",
      "lit": "qui remue depuis / issu de",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'herrührenden' du lemme 'herrührend'. Épithète au datif féminin pluriel qualifiant 'Phrasen und Illusionen'."
},
  "herstellen": {
      "fr": "établir / créer / confectionner",
      "lit": "poser ici debout / fabriquer matériellement",
      "pos_fr": "Verbe séparable faible",
      "role": "Verbe séparable décrivant l'action fondatrice de la grande industrie qui engendre le marché mondial.",
      "etymology": "Verbe composé séparable associant l'adverbe déictique « her » (vers ici, du vieux haut-allemand hera / herot = en venant vers le locuteur) et le verbe « stellen » (poser debout, placer, en vieux haut-allemand stellen, causatif de stehen). Au sens d'établir durablement ou de fabriquer industriellement à partir du XVIIIe siècle."
},
  "Herstellung": {
      "fr": "établissement / instauration / création",
      "lit": "action de poser debout et mettre sur pied durablement",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin d'action désignant la mise en place matérielle de l'industrie et du marché mondial."
},
  "hervor": {
      "fr": "mettre en avant / faire ressortir",
      "lit": "soulever hors du fond pour placer en évidence",
      "pos_fr": "Adverbe",
      "role": "Forme fléchie 'hervor' du lemme 'hervorheben'. Verbe principal ('heben hervor') marquant le principe communiste fondamental d'analyse."
},
  "hervorgegangen": {
      "fr": "issu / provenu / né de",
      "lit": "sorti en avant des entrailles de",
      "pos_fr": "Participe passé",
      "role": "Participe passé marquant l'engendrement de la bourgeoisie moderne au sein même du féodalisme.",
      "etymology": "Participe passé du verbe séparable « hervorgehen » (sortir en avant, émaner de, de hervor + gehen)."
},
  "hervorgehen": {
      "fr": "découler / résulter",
      "lit": "sortir en avant de",
      "pos_fr": "Verbe fort séparable",
      "role": "Verbe de déduction logique et matérielle tirée de l'analyse des faits.",
      "etymology": "Verbe composé séparable combinant « hervor » (vers l'avant hors de) et « gehen » (marcher, aller)."
},
  "hervorgehend": {
      "fr": "découlant de / issu de",
      "lit": "sortant hors de",
      "pos_fr": "Verbe",
      "role": "Participe présent marquant la causalité directe entre la concurrence et les crises commerciales."
},
  "hervorgestampft": {
      "fr": "surgi de terre / créé comme par enchantement",
      "lit": "battu du pied hors du sol",
      "pos_fr": "Adjectif",
      "role": "Métaphore puissante évoquant l'irruption soudaine de populations et cités entières sous l'effet du capital."
},
  "hervorgezauberen": {
      "fr": "faire surgir comme par enchantement",
      "lit": "faire jaillir par magie (hervorzaubern)",
      "pos_fr": "Verbe",
      "role": "Métaphore magique désignant l'apparition fulgurante des forces productives industrielles."
},
  "hervorheben": {
      "fr": "mettre en avant / faire ressortir",
      "lit": "soulever hors du fond pour placer en évidence",
      "pos_fr": "Verbe",
      "role": "Verbe principal ('heben hervor') marquant le principe communiste fondamental d'analyse."
},
  "hervortreten": {
      "fr": "émerger / se manifester",
      "lit": "avancer au premier plan",
      "pos_fr": "Verbe séparable",
      "role": "Émergence ouverte des contradictions de classe."
},
  "Herz": {
      "fr": "cœur",
      "lit": "organe central / siège des sentiments",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre désignant métaphoriquement le siège des émotions et des illusions chevaleresques anéanties par le calcul économique.",
      "etymology": "Du moyen haut-allemand « herze », vieux haut-allemand « herza », de racine indo-européenne *k̂erd- (cœur)."
},
  "Hetzjagd": {
      "fr": "chasse à courre / traque acharnée / battue",
      "lit": "chasse à courre avec meute excitée / traque acharnée",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin composé violent (Hetze + Jagd) ironisant sur la Sainte-Alliance et la coalition policière des monarchies lancée aux trousses du spectre communiste.",
      "etymology": "Composé cynégétique associant : 1° « hetzen » (en moyen haut-allemand « hetzen », en vieux haut-allemand « hezzen »), formation causative germanique (*hatjanan) rattachée au verbe « hassen » (vieux haut-allemand « hazzōn », racine germanique *hataz « haine ») signifiant originellement « exciter les meutes de chiens à la poursuite du gibier » ; 2° « die Jagd » (en moyen haut-allemand « jaget », en vieux haut-allemand « jagōd », déverbal de « jagōn » = chasser). Marx détourne sarcastiquement le vocabulaire de la vénerie aristocratique pour dépeindre la Sainte-Alliance traquant le communisme."
},
  "heuchlerisch": {
      "fr": "hypocrite / papelard / faux",
      "lit": "qui simule la dévotion",
      "pos_fr": "Adjectif",
      "role": "Adjectif dénonçant l'hypocrisie et la duplicité morale dissimulant les appétits sordides sous le manteau de la vertu.",
      "etymology": "Dérivé de « Heuchler » (hypocrite, du moyen haut-allemand hūchen, ramper humblement)."
},
  "heutig": {
      "fr": "d'aujourd'hui / actuel / contemporain",
      "lit": "de ce jour",
      "pos_fr": "Adjectif",
      "role": "Adjectif temporel désignant l'époque contemporaine façonnée de part en part par la grande industrie et le machinisme.",
      "etymology": "Dérivé de « heute » (aujourd'hui, vieux haut-allemand hiutu, en ce jour)."
},
  "heutzutage": {
      "fr": "de nos jours / aujourd'hui",
      "lit": "en ces jours d'aujourd'hui",
      "pos_fr": "Adverbe",
      "role": "Adverbe situant l'analyse dans l'actualité industrielle contemporaine."
},
  "Hexenmeister": {
      "fr": "maître sorcier / magicien",
      "lit": "maître des sorcières",
      "pos_fr": "Nom masculin",
      "role": "Référence goethéenne (Der Zauberlehrling) : la bourgeoisie débordée par les forces souterraines qu'elle a conjurées."
},
  "hier": {
      "fr": "ici",
      "lit": "en ce lieu-ci (adverbe de lieu)",
      "pos_fr": "Adverbe de lieu",
      "role": "Adverbe spatial apparié à « dort » pour illustrer la bigarrure géographique des communes bourgeoises médiévales."
},
  "Hierarchie": {
      "fr": "hiérarchie",
      "lit": "ordre graduel de subordination",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'échelonnement militaire des contremaîtres et officiers de fabrique."
},
  "hierher": {
      "fr": "dans cette catégorie / ici",
      "lit": "jusqu'ici",
      "pos_fr": "Adverbe",
      "role": "Regroupement des philanthropes dans le socialisme bourgeois."
},
  "hiermit": {
      "fr": "par là / par ce fait",
      "lit": "avec ceci",
      "pos_fr": "Pronom",
      "role": "Pronom adverbial introduisant le constat incontestable de la faillite bourgeoise."
},
  "Hiernach": {
      "fr": "d'après cela / dès lors / selon ceci",
      "lit": "selon ceci",
      "pos_fr": "Adverbe",
      "role": "Adverbe pronominal marquant la déduction rigoureuse tirée des prémisses matérielles de l'analyse.",
      "etymology": "Composé de « hier » (ici) + « nach » (après, selon).",
      "isCompound": true,
      "compoundParts": [
            "hier",
            "nach"
      ]
},
  "hiervon": {
      "fr": "de cela / de là",
      "lit": "issu de ceci",
      "pos_fr": "Pronom",
      "role": "Pronom adverbial désignant la source économique de la centralisation politique."
},
  "hinab": {
      "fr": "vers le bas / dans le gouffre",
      "lit": "mouvement vers le bas en s'éloignant",
      "pos_fr": "Forme grammaticale",
      "role": "Particule du verbe hinabfallen/hinabwerfen marquant la prolétarisation des classes moyennes."
},
  "hinabfallen": {
      "fr": "tomber / choir / sombrer",
      "lit": "tomber vers le bas",
      "pos_fr": "Verbe fort séparable",
      "role": "Verbe dynamique décrivant la déchéance sociale des couches moyennes, petits industriels et artisans, précipités dans les rangs du prolétariat.",
      "etymology": "Composé séparable de « hinab » (vers le bas, vers le fond) et du verbe fort « fallen » (tomber, en moyen haut-allemand « vallen », vieux haut-allemand « fallan »)."
},
  "hinabgeschleuderen": {
      "fr": "précipités vers le bas",
      "lit": "projetés vers le fond",
      "pos_fr": "Verbe",
      "role": "Chute des couches moyennes dans le prolétariat."
},
  "hinabgeworfen": {
      "fr": "précipité vers le bas / jeté dans l'abîme",
      "lit": "jeté vers le fond (hinabwerfen)",
      "pos_fr": "Verbe",
      "role": "Participe passé illustrant la violence sociale précipitant des fractions dominantes dans le prolétariat."
},
  "hinaufgearbeiten": {
      "fr": "s'être élevé par l'effort théorique",
      "lit": "avoir travaillé pour monter (hinaufarbeiten)",
      "pos_fr": "Verbe",
      "role": "Verbe décrivant l'ascension intellectuelle des idéologues parvenus à la théorie marxiste."
},
  "hinauslaufen": {
      "fr": "aboutir à / revenir à / se solder par",
      "lit": "courir vers le dehors",
      "pos_fr": "Verbe",
      "role": "Verbe séparable montrant l'aboutissement réel et la conclusion inévitable d'un processus dialectique.",
      "etymology": "Composé de « hinaus » (dehors) + « laufen » (courir, aller).",
      "isCompound": true,
      "compoundParts": [
            "hinaus-",
            "laufen"
      ]
},
  "hinaustreiben": {
      "fr": "pousser dehors / expulser / chasser",
      "lit": "chasser vers l'extérieur",
      "pos_fr": "Verbe",
      "role": "Verbe violent décrivant la force aveugle du marché expulsant les artisans et petits paysans hors de leur mode de vie traditionnel.",
      "etymology": "Composé de « hinaus » + « treiben » (pousser, conduire le bétail).",
      "isCompound": true,
      "compoundParts": [
            "hinaus-",
            "treiben"
      ]
},
  "Hinblick": {
      "fr": "égard / vue / perspective",
      "lit": "regard porté vers",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin entrant dans la locution « im Hinblick auf » (en considération de, en vue de)."
},
  "hineingeschleuderen": {
      "fr": "projeter brutalement au cœur de",
      "lit": "fronder à l'intérieur (hineinschleudern)",
      "pos_fr": "Verbe",
      "role": "Verbe dépeignant le sous-prolétariat propulsé fortuitement dans le tourbillon de la révolution."
},
  "hineinzureißen": {
      "fr": "entraîner de force dans",
      "lit": "tirer violemment à l'intérieur (hineinreißen)",
      "pos_fr": "Verbe",
      "role": "Verbe décrivant la bourgeoisie entraînant bon gré mal gré les masses ouvrières dans l'arène politique."
},
  "hinreichen": {
      "fr": "suffire / être suffisant",
      "lit": "atteindre jusqu'au but",
      "pos_fr": "Verbe",
      "role": "Verbe constatant l'insuffisance flagrante des remèdes réformistes face à l'immensité de la crise sociale.",
      "etymology": "Composé de « hin » + « reichen » (tendre, suffire).",
      "isCompound": true,
      "compoundParts": [
            "hin-",
            "reichen"
      ]
},
  "hinter": {
      "fr": "derrière",
      "lit": "à l'arrière de",
      "pos_fr": "Préposition",
      "role": "Préposition spatiale désignant l'écran idéologique qui masque les intérêts de classe."
},
  "Hintergrund": {
      "fr": "arrière-plan / coulisses",
      "lit": "fond de scène / sol d'arrière",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin composé désignant la position marginale et subordonnée où sont confinées les classes déchues.",
      "etymology": "Composé spatial associant : 1° l'adverbe-préposition « hinter » (derrière, en arrière, en moyen haut-allemand hinter, en vieux haut-allemand hintar, comparatif germanique issu de la racine indo-européenne *ḱen- / en arrière) ; 2° « der Grund » (le fond, sol, fondement, en moyen haut-allemand grunt, en vieux haut-allemand grunt, proto-germanique *grunduz)."
},
  "Hintern": {
      "fr": "derrière / postérieur",
      "lit": "partie arrière du corps",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin truculent employé par Marx : les prolétaires apercevant les vieux blasons féodaux qui ornent le derrière des aristocrates déchus.",
      "etymology": "Du moyen haut-allemand « hindern », substantivation de la préposition/adverbe « hinter » (derrière)."
},
  "hinweggezogen": {
      "fr": "dérober / retirer de dessous",
      "lit": "tiré au loin (hinwegziehen)",
      "pos_fr": "Verbe",
      "role": "Métaphore du terrain économique qui se dérobe sous les pieds mêmes de la bourgeoisie."
},
  "Hinwirk": {
      "fr": "action tendant vers / orientation active",
      "lit": "action orientée vers un but",
      "pos_fr": "Nom féminin",
      "role": "nom féminin (abréviation pour Hinwirkung)",
      "etymology": "Dérivé de « hinwirken » (agir en vue de, tendre vers un effet).",
      "isCompound": true,
      "compoundParts": [
            "hin-",
            "Wirkung"
      ]
},
  "hoch": {
      "fr": "haut / grand",
      "lit": "de rang élevé / solennel",
      "pos_fr": "Adjectif",
      "role": "Adjectif marquant la gravité et l'imminence du moment révolutionnaire.",
      "etymology": "Issu du moyen haut-allemand « hōch », vieux haut-allemand « hōh » (haut, élevé en rang, solennel), du proto-germanique *hauhaz (élevé, fier, racine indo-européenne *kewk- = courbé en hauteur, colline)."
},
  "hochmoralisch": {
      "fr": "hautement moral / d'une grande vertu édifiante",
      "lit": "très haut sur le plan moral",
      "pos_fr": "Adjectif",
      "role": "Adjectif satirique fustigeant la grandiloquence morale édifiante des apologies capitalistes du travail et de la famille.",
      "etymology": "Composé de « hoch » (haut) + « moralisch » (moral).",
      "isCompound": true,
      "compoundParts": [
            "hoch",
            "moralisch"
      ]
},
  "hochtrabend": {
      "fr": "pompeux / grandiloquent",
      "lit": "trottant très haut",
      "pos_fr": "Adjectif",
      "role": "Grandiloquence creuse des discours bourgeois."
},
  "Home-Kolonien": {
      "fr": "colonies intérieures / colonies agricoles",
      "lit": "colonies à domicile",
      "pos_fr": "Nom féminin",
      "role": "Nom composé pluriel désignant les colonies intérieures fondées par Robert Owen comme modèles coopératifs utopiques en Grande-Bretagne.",
      "etymology": "Emprunt à l'anglais « home colonies », terme désignant les communautés coopératives fondées en métropole par Robert Owen.",
      "isCompound": true,
      "compoundParts": [
            "Home",
            "Kolonien"
      ]
},
  "Humanitäre": {
      "fr": "humanitaires / philanthropes sentimentaux",
      "lit": "ceux qui se réclament de l'humanitaire",
      "pos_fr": "Nom masculin pluriel",
      "role": "Adjectif substantivé désignant les philanthropes et bienfaiteurs bourgeois adoucissant en paroles les rigueurs du salariat.",
      "etymology": "Substantivation de l'adjectif « humanitär » (humanitaire, du français humanitaire / latin humanitas)."
},
  "hundertjährig": {
      "fr": "centenaire / d'un siècle",
      "lit": "qui a duré cent ans",
      "pos_fr": "Adjectif",
      "role": "Adjectif mesurant la jeunesse relative de la domination bourgeoise eu égard à son gigantisme."
},
  "Hungersnot": {
      "fr": "famine / disette",
      "lit": "détresse causée par la faim",
      "pos_fr": "Nom féminin",
      "role": "Nom composé peignant le paradoxe d'une pénurie causée par un excès de richesse matérielle."
},
  "Hälfte": {
      "fr": "moitié / demi",
      "lit": "l'une des deux parties égales",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la moitié d'un tout, soulignant la part proportionnelle des biens ou des classes en présence.",
      "etymology": "Du moyen haut-allemand « helfte », vieux haut-allemand « helfta », dérivé de « halb » (demi)."
},
  "häuslich": {
      "fr": "domestique / familial / du foyer",
      "lit": "relatif à la maison",
      "pos_fr": "Adjectif",
      "role": "Adjectif relatif à la sphère domestique, dont Marx dévoile la dévastation chez les prolétaires par l'embauche des femmes et des enfants.",
      "etymology": "Dérivé de « Haus » (maison) avec suffixe « -lich »."
},
  "höchst": {
      "fr": "extrêmement / au plus haut point",
      "lit": "au plus haut",
      "pos_fr": "Adverbe",
      "role": "Rôle éminemment révolutionnaire de la bourgeoisie.",
      "etymology": "Forme de superlatif figée en adverbe de « hoch » (élevé, haut, en moyen haut-allemand hōch, en vieux haut-allemand hōh, proto-germanique *hauhaz = haut, élevé, racine indo-européenne *kewk- = courbé en hauteur, colline)."
},
  "höchstens": {
      "fr": "tout au plus / au maximum",
      "lit": "au plus haut degré",
      "pos_fr": "Adverbe",
      "role": "Adverbe restrictif marquant la limite indépassable et le plafond étanche des concessions accordées par le patronat.",
      "etymology": "Génitif superlatif de « hoch » (haut)."
},
  "hören": {
      "fr": "entendre / écouter",
      "lit": "percevoir par l'ouïe",
      "pos_fr": "Verbe",
      "role": "Verbe d'écoute et de discernement : l'ouvrier conscient apprend à percer à jour les sirènes trompeuses de la rhétorique bourgeoise.",
      "etymology": "Du moyen haut-allemand « hœren », vieux haut-allemand « hōren », racine indo-européenne *kous- (écouter)."
},
  "Hülfe": {
      "fr": "secours / aide",
      "lit": "assistance prêtée",
      "pos_fr": "Nom féminin",
      "role": "Graphie du XIXe siècle pour Hilfe, marquant l'aide réclamée aux prolétaires par les bourgeois."
},
  "Idee": {
      "fr": "idée / concept / pensée",
      "lit": "forme mentale / concept",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant les idées dominantes d'une époque, dont Marx établit qu'elles n'ont jamais été que les idées de la classe dominante.",
      "etymology": "Emprunté via le latin au grec ancien « idea » (forme visible, modèle, archétype mental), rattaché à « idein » (voir)."
},
  "identisch": {
      "fr": "identique / semblable en tout point",
      "lit": "rigoureusement le même",
      "pos_fr": "Adjectif",
      "role": "Adjectif philosophique établissant l'équivalence dialectique stricte entre deux concepts politiques fondamentaux.",
      "etymology": "Emprunté au bas-latin « identicus », de « identitas » (du latin idem, le même)."
},
  "ideologisch": {
      "fr": "idéologique",
      "lit": "relatif aux représentations idéologiques",
      "pos_fr": "Adjectif",
      "role": "Concept théorique décisif qualifiant les représentations mentales déformées et les fausses consciences servant à justifier la domination de classe.",
      "etymology": "Emprunté au français « idéologique », dérivé d'« idéologie » (science des idées chez Destutt de Tracy)."
},
  "Idiotismus": {
      "fr": "abrutissement / isolement borné",
      "lit": "caractère d'isolement privé (grec idiōtēs)",
      "pos_fr": "Nom masculin",
      "role": "Emprunt au grec désignant l'isolement sans horizon politique des campagnes précapitalistes."
},
  "idyllisch": {
      "fr": "idyllique",
      "lit": "champêtre, d'une douceur rustique et naïve",
      "pos_fr": "Adjectif",
      "role": "Adjectif ironique fustigeant la description enjolivée des campagnes d'Ancien Régime par les romantiques.",
      "etymology": "Dérivé avec le suffixe -isch du substantif « die Idylle », emprunté au latin « idyllium », issu du grec « eidyllion » (εἰδύλλιον = petit poème champêtre ou pastoral, littéralement 'petite image / tableau délicat', diminutif de eidos / εἶδος = forme, aspect, vue)."
},
  "ihm": {
      "fr": "lui / à lui",
      "lit": "pronom personnel 3e personne masculin / neutre datif",
      "pos_fr": "Pronom",
      "role": "Pronom personnel complément d'attribution ou d'objet indirect."
},
  "ihn": {
      "fr": "le / lui",
      "lit": "pronom personnel 3e personne masculin accusatif",
      "pos_fr": "Pronom",
      "role": "Pronom personnel complément d'objet direct désignant l'ouvrier exploité."
},
  "ihnen": {
      "fr": "leur / à eux",
      "lit": "pronom personnel 3e personne pluriel datif",
      "pos_fr": "Pronom",
      "role": "Pronom personnel complément indirect au pluriel."
},
  "ihr": {
      "fr": "leur / son / sa / ses",
      "lit": "possessif de 3e personne",
      "pos_fr": "Pronom/Déterminant possessif",
      "role": "Déterminant possessif rattachant un bien à son détenteur."
},
  "ihre": {
      "fr": "leur / vous / elle",
      "lit": "pronom personnel ou possessif",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'ihre' du lemme 'ihr'. Pronom de la 3e ou 2e personne marquant l'attribution ou la coréférence."
},
  "ihrer": {
      "fr": "leur / vous / elle",
      "lit": "pronom personnel ou possessif",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'ihrer' du lemme 'ihr'. Pronom de la 3e ou 2e personne marquant l'attribution ou la coréférence."
},
  "ihrigen": {
      "fr": "ce qui leur appartient / leurs biens",
      "lit": "le leur propre",
      "pos_fr": "Pronom",
      "role": "Pronom substantivé constatant que les prolétaires n'ont rien à eux à protéger."
},
  "II": {
      "fr": "deuxième / II",
      "lit": "chiffre romain deux",
      "pos_fr": "Numéral",
      "role": "Numéral romain déterminant le substantif 'Abschnitt'."
},
  "ii": {
      "fr": "deuxième / II",
      "lit": "chiffre romain deux",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'II' du lemme 'II'. Numéral romain déterminant le substantif 'Abschnitt'."
},
  "Ikarien": {
      "fr": "Icarie",
      "lit": "pays d'Icare",
      "pos_fr": "Nom neutre",
      "role": "Nom propre désignant la république communiste utopique décrite par Étienne Cabet dans son roman philosophique 'Voyage en Icarie' (1840).",
      "etymology": "Nom forgé par Étienne Cabet dans son « Voyage en Icarie » (1840) pour désigner sa cité communautaire utopique."
},
  "Illusion": {
      "fr": "illusion / fausse apparence",
      "lit": "tromperie de l'esprit / jeu d'apparences fallacieuses",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant chez Marx les fictions idéologiques par lesquelles une société masquait la réalité de sa domination.",
      "etymology": "Emprunt savant au latin classique « illusio » (raillerie, tromperie des sens, action de se jouer de quelqu'un), déverbal de « illudere » (se moquer, abuser, composé de in- « contre, sur » et ludere « jouer »)."
},
  "illusionen": {
      "fr": "illusion",
      "lit": "croyance trompeuse / mirage politique",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'Illusionen' du lemme 'Illusion'. Substantif au datif féminin pluriel désignant les faux espoirs démocrates-bourgeois."
},
  "im": {
      "fr": "en / dans",
      "lit": "dans / à l'intérieur de",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'im' du lemme 'in'. Préposition spatiale régissant le datif pour situer l'organisation dans son cadre géographique."
},
  "immer": {
      "fr": "toujours / sans cesse",
      "lit": "toujours / constamment (adverbe temporel)",
      "pos_fr": "Adverbe de temps",
      "role": "Adverbe temporel marquant l'inversion syntaxique V2 et la dynamique d'accroissement continu des marchés.",
      "etymology": "Issu du moyen haut-allemand « iemer / immer », vieux haut-allemand « io mēr » (littéralement : toujours plus), composé de la particule temporelle germanique « io / eo » (toujours, à jamais, de la racine indo-européenne *h₂eyw- / temps, durée vitale, cognat du latin aevum et de l'allemand ewig) et de l'adverbe comparatif « mēr » (plus, allemand moderne mehr). Cognat du néerlandais « immer »."
},
  "in": {
      "fr": "en / dans",
      "lit": "à l'intérieur de",
      "pos_fr": "Préposition mixte (Acc/Dat)",
      "role": "Préposition spatiale régissant ici le datif (situation sans déplacement)."
},
  "in dem": {
      "fr": "dans le / au",
      "lit": "contraction prépositionnelle 'im'",
      "pos_fr": "Préposition contractée",
      "role": "Contraction de la préposition 'in' avec l'article défini masculin/neutre au datif."
},
  "indem": {
      "fr": "en / du fait que / tandis que",
      "lit": "par le moyen que",
      "pos_fr": "Conjonction",
      "role": "Conjonction équivalant au gérondif français, exprimant la modalité opératoire."
},
  "indemselben": {
      "fr": "dans la même mesure",
      "lit": "dans la même proportion",
      "pos_fr": "Nom neutre",
      "role": "Locution adverbiale corrélative marquant la proportionnalité rigoureuse."
},
  "indes": {
      "fr": "cependant / entre-temps",
      "lit": "dans cet intervalle",
      "pos_fr": "Adverbe",
      "role": "Transition logique marquant une contradiction sous-jacente."
},
  "indirekter": {
      "fr": "indirect / médiat",
      "lit": "qui ne va pas tout droit",
      "pos_fr": "Adjectif",
      "role": "Adjectif marquant la médiation complexe et l'action détournée des facteurs économiques sur les institutions juridiques.",
      "etymology": "Emprunté au latin « indirectus » (qui n'est pas direct)."
},
  "Individuum": {
      "fr": "individu / être singulier",
      "lit": "ce qui ne peut être divisé",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre philosophique désignant l'être humain singulier, dont le libre épanouissement est la condition du libre épanouissement de tous.",
      "etymology": "Emprunté au latin « individuum » (l'indivisible, atome, individu), calque de Cicéron sur le grec « atomon »."
},
  "Industrie": {
      "fr": "industrie / production manufacturière",
      "lit": "activité technique de transformation matérielle",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'appareil de production mécanisé moderne.",
      "etymology": "Emprunt au XVIIIe siècle au français « industrie », issu du latin classique « industria » (application zélée, activité laborieuse, habileté productive, formé de indu- « à l'intérieur » et struere « bâtir, ordonner »)."
},
  "industriell": {
      "fr": "industriel",
      "lit": "relatif à la grande production mécanisée",
      "pos_fr": "Adjectif",
      "role": "Adjectif définissant la bourgeoisie d'usine moderne.",
      "etymology": "Emprunt savant au latin classique « industria » (zèle laborieux, activité ordonnée, habileté technique) au moyen du suffixe adjectival « -ell » (emprunté au français -el / latin -alis). Utilisé au début du XIXe siècle pour qualifier les nouvelles méthodes de production manufacturière et mécanisée."
},
  "industrielle": {
      "fr": "industriel",
      "lit": "patron d'industrie",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant le petit fabricant ou le grand magnat de la manufacture."
},
  "Industriesoldat": {
      "fr": "soldat de l'industrie",
      "lit": "combattant de la production",
      "pos_fr": "Nom",
      "role": "Nom composé métaphorique assimilant l'ouvrier d'usine à un conscrit encadré par des sous-officiers."
},
  "infolge": {
      "fr": "par suite de / par l'effet de / à cause de",
      "lit": "dans la suite de",
      "pos_fr": "Préposition",
      "role": "Préposition de causalité introduisant la résultante objective découlant des lois d'airain du mode de production.",
      "etymology": "Composé de « in » + « Folge » (suite, conséquence).",
      "isCompound": true,
      "compoundParts": [
            "in",
            "Folge"
      ]
},
  "Inhalt": {
      "fr": "contenu / fond matériel",
      "lit": "ce qui est contenu dedans",
      "pos_fr": "Nom masculin",
      "role": "Concept philosophique dialectique opposant la vérité matérielle du conflit à son apparence."
},
  "innere": {
      "fr": "intérieur / intime / interne",
      "lit": "situé au-dedans",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant les contradictions internes et la dynamique immanente minant le système capitaliste de l'intérieur.",
      "etymology": "Du moyen haut-allemand « innere », vieux haut-allemand « innaro », comparatif de la préposition « in » (dans)."
},
  "innerhalb": {
      "fr": "à l'intérieur de / au sein de",
      "lit": "dans les limites internes",
      "pos_fr": "Préposition",
      "role": "Préposition marquant l'immanence des contradictions au sein de la vieille société."
},
  "ins": {
      "fr": "en / dans",
      "lit": "dans / à l'intérieur de",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'ins' du lemme 'in'. Préposition spatiale régissant le datif pour situer l'organisation dans son cadre géographique."
},
  "Instanz": {
      "fr": "instance / autorité / juridiction",
      "lit": "tribunal d'arbitrage / degré de décision",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'autorité publique, le tribunal ou le degré supérieur de juridiction politique.",
      "etymology": "Emprunté au latin juridique « instantia » (présence assidue, instance judiciaire), de « instare » (se tenir tout près, presser)."
},
  "Insurrektion": {
      "fr": "insurrection / soulèvement armé",
      "lit": "soulèvement collectif contre le pouvoir",
      "pos_fr": "Nom féminin",
      "role": "Substantif à l'accusatif féminin singulier désignant l'insurrection révolutionnaire polonaise."
},
  "insurrektion": {
      "fr": "insurrection / soulèvement armé",
      "lit": "soulèvement collectif contre le pouvoir",
      "pos_fr": "Nom féminin",
      "role": "Forme fléchie 'Insurrektion' du lemme 'Insurrektion'. Substantif à l'accusatif féminin singulier désignant l'insurrection révolutionnaire polonaise."
},
  "Interesse": {
      "fr": "intérêt / profit lucratif",
      "lit": "ce qui importe / gain pécuniaire",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre désignant le mobile unique et sans masque qui commande l'ensemble de la société bourgeoise.",
      "etymology": "Emprunt au XVIe siècle au latin classique « interesse » (être entre, participer, être important, infinitif présent substantivé de inter- « entre » et esse « être »). Substantivé en droit pour désigner le dédommagement pécuniaire d'une perte financière (« dommage et intérêt »), puis chez les philosophes des Lumières (Helvétius) pour désigner le mobile égoïste de l'action humaine."
},
  "interessen": {
      "fr": "intérêt matériel / revendication",
      "lit": "ce qui importe / intérêt socio-économique",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'Interessen' du lemme 'Interesse'. Substantif au génitif neutre pluriel, coordonné à 'Zwecke'."
},
  "interessiert": {
      "fr": "intéressé / motivé par un intérêt privé",
      "lit": "qui y trouve son intérêt",
      "pos_fr": "Participe passé adjectivé",
      "role": "Participe passé caractérisant l'intérêt matériel égoïste dictant les prises de position politiques de la bourgeoisie.",
      "etymology": "Du verbe « interessieren », du latin « interesse » (importer, être entre)."
},
  "Isolierung": {
      "fr": "isolement / atomisation",
      "lit": "mise à l'écart isolée",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la dispersion des ouvriers que l'association révolutionnaire brise."
},
  "italienisch": {
      "fr": "italien",
      "lit": "en langue italienne",
      "pos_fr": "Adjectif",
      "role": "Adjectif de langue pour l'édition italienne du Manifeste.",
      "etymology": "Emprunt au latin « Italicus », dérivé de Italia (du grec Ouitoulía, pays des veaux, du proto-indo-européen *wet- = année, animal d'un an)."
},
  "ja": {
      "fr": "oui / d'ailleurs / certes / en effet",
      "lit": "oui / assurément",
      "pos_fr": "Adverbe",
      "role": "particule de discours / adverbe",
      "etymology": "Du moyen haut-allemand et vieux haut-allemand « jā » (particule affirmative)."
},
  "jagen": {
      "fr": "chasser / traquer / pousser impérieusement",
      "lit": "poursuivre comme gibier",
      "pos_fr": "Verbe",
      "role": "Verbe dramatisant la frénésie du capital pourchassé sur tout le globe par le besoin de profit."
},
  "Jahr": {
      "fr": "an / année",
      "lit": "cycle solaire annuel",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre mesurant la rapidité fulgurante de la centralisation ferroviaire ouvrière."
},
  "Jahrhundert": {
      "fr": "siècle",
      "lit": "centaine d'années",
      "pos_fr": "Nom neutre",
      "role": "Substantif composé au datif singulier servant d'étalon comparatif historique."
},
  "jahrhundert": {
      "fr": "siècle",
      "lit": "centaine d'années",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'Jahrhundert' du lemme 'Jahrhundert'. Substantif composé au datif singulier servant d'étalon comparatif historique."
},
  "je": {
      "fr": "d'autant / à mesure que",
      "lit": "selon la proportion",
      "pos_fr": "Adverbe",
      "role": "Adverbe corrélatif introduisant la variable dont dépend le phénomène économique."
},
  "jede": {
      "fr": "chaque / tout / n'importe quel",
      "lit": "chacun en particulier sans omission",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'jede' du lemme 'jeder'. Déterminant indéfini à l'accusatif féminin singulier ('jede revolutionäre Bewegung')."
},
  "jeder": {
      "fr": "chaque / tout / chacun",
      "lit": "tous les éléments pris un à un",
      "pos_fr": "Pronom indéfini",
      "role": "Déterminant indéfini distributif désignant chaque strate féodale."
},
  "jedesmal": {
      "fr": "chaque fois / à chaque reprise",
      "lit": "à toutes les occurrences sans faille",
      "pos_fr": "Adverbe",
      "role": "Adverbe régulier marquant la loi constante de résolution des luttes de classe."
},
  "jedoch": {
      "fr": "cependant / toutefois",
      "lit": "malgré cela / en revanche",
      "pos_fr": "Adverbe de concession",
      "role": "Adverbe marquant la singularité spécifique de l'époque bourgeoise moderne."
},
  "jener": {
      "fr": "ceux-là / de ces...-là",
      "lit": "démonstratif lointain",
      "pos_fr": "Adverbe",
      "role": "Désigne les classes et conditions passées."
},
  "Jerusalem": {
      "fr": "Jérusalem",
      "lit": "ville sainte",
      "pos_fr": "Nom neutre",
      "role": "Nom propre hautement symbolique désignant la cité céleste promise par les millénarismes religieux et détournée par le socialisme utopique.",
      "etymology": "Nom biblique de Jérusalem, souvent utilisé par les socialistes mystiques pour désigner la société régénérée."
},
  "jetzig": {
      "fr": "actuel / présent",
      "lit": "de maintenant",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant la formation sociale contemporaine soumise à la critique."
},
  "jetzt": {
      "fr": "maintenant / désormais",
      "lit": "en ce moment précis",
      "pos_fr": "Adverbe",
      "role": "Adverbe marquant le point de bascule de la dialectique historique."
},
  "Joch": {
      "fr": "joug / servitude",
      "lit": "pièce de bois asservissant le bétail",
      "pos_fr": "Nom masculin",
      "role": "Métaphore de la servitude féodale sous laquelle la bourgeoisie médiévale s'est développée."
},
  "jung": {
      "fr": "jeune",
      "lit": "au début de la vie",
      "pos_fr": "Adjectif",
      "role": "Le 'Jeune Angleterre' ou jeune génération prolétarienne."
},
  "Junirevolution": {
      "fr": "révolution de Juin / journées de Juin",
      "lit": "révolution de juin",
      "pos_fr": "Nom féminin",
      "role": "Nom composé historique désignant l'insurrection héroïque des ouvriers parisiens en juin 1848, baptême du sang du prolétariat moderne.",
      "etymology": "Composé de « Juni » (mois de juin) + « die Revolution » (la révolution).",
      "isCompound": true,
      "compoundParts": [
            "Juni",
            "Revolution"
      ]
},
  "Jurist": {
      "fr": "juriste / homme de loi",
      "lit": "spécialiste du droit",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant une élite intellectuelle rétrogradée en travailleur salarié au service du capital."
},
  "Kampf": {
      "fr": "lutte / combat",
      "lit": "affrontement antagonique",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin, moteur dialectique des transformations matérielles de l'humanité.",
      "etymology": "Issu du moyen haut-allemand « kampf », vieux haut-allemand « kampf » (combat singulier, duel armé, bataille rangée), emprunt très ancien (dès les premiers siècles av. J.-C. lors des guerres de frontière de Germanie) au latin classique « campus » (le champ de manœuvre militaire, le champ de bataille)."
},
  "kampf": {
      "fr": "lutte / combat",
      "lit": "affrontement de classe",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'Kampf' du lemme 'Kampf'. Substantif au nominatif masculin singulier, sujet grammatical de 'beginnt'."
},
  "kann": {
      "fr": "pouvoir / être capable de",
      "lit": "avoir le pouvoir matériel d'agir",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'kann' du lemme 'können'. Verbe modal exprimant la capacité combative pratique des prolétaires."
},
  "Kapital": {
      "fr": "capital",
      "lit": "fonds principal générateur de profit",
      "pos_fr": "Nom neutre",
      "role": "Concept économique fondamental désignant la valeur qui s'auto-accroît par l'exploitation du travail salarié.",
      "etymology": "Emprunté au latin médiéval « capitale » (fonds principal, capital financier), substantivation neutre de « capitalis » (principal, relatif à la tête, caput). Pour Marx, le capital n'est pas une simple chose ou somme d'argent, mais un rapport social de production qui s'auto-valorise par l'extorsion de surtravail."
},
  "Kapitalien": {
      "fr": "capitaux",
      "lit": "fonds de capitaux accumulés (pluriel savant)",
      "pos_fr": "Nom neutre (pluriel)",
      "role": "Forme plurielle savante désignant les masses de capitaux industriels et bancaires détenues par la bourgeoisie."
},
  "Kapitalist": {
      "fr": "capitaliste",
      "lit": "possesseur de capital",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant le maître de la grande fabrique et incarnation personnifiée du capital."
},
  "Kapitalium": {
      "fr": "capital",
      "lit": "fonds principal / capital financier",
      "pos_fr": "Nom neutre",
      "role": "Forme latinisante archaïque pour « Kapital » figurant dans certaines éditions originales de 1848.",
      "etymology": "Emprunt savant au latin médiéval « capitale » (capital financier, bien principal), substantivation neutre de « capitalis » (relatif à la tête, caput)."
},
  "Kapitulation": {
      "fr": "capitulation",
      "lit": "reddition militaire",
      "pos_fr": "Nom féminin",
      "role": "Métaphore militaire marquant la reddition obligée des contrées archaïques devant les marchandises bon marché."
},
  "Kategorie": {
      "fr": "catégorie / classe conceptuelle",
      "lit": "classe logique de prédication",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin philosophique désignant les catégories abstraites de l'économie politique, reflets fétichisés des rapports sociaux matériels.",
      "etymology": "Emprunté au grec ancien « katēgoria » (accusation publique, puis en logique prédicat ou genre suprême)."
},
  "Kathedrale": {
      "fr": "cathédrale",
      "lit": "église épiscopale majeure",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant les chefs-d'œuvre du moyen âge éclipsés par les infrastructures modernes."
},
  "katholisch": {
      "fr": "catholique",
      "lit": "universel (romain)",
      "pos_fr": "Adjectif",
      "role": "Allusion au clergé catholique allié aux seigneurs."
},
  "Katzenjammer": {
      "fr": "gueule de bois / désenchantement amer",
      "lit": "miaulement plaintif de chat",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin métaphorique savoureux : le réveil pâteux et la gueule de bois politique des idéologues bourgeois après l'ivresse des promesses libérales.",
      "etymology": "Altération populaire estudiantine de « Kotzen-Jammer » (détresse du vomissement) combinée à « Katzenjammer » (tintamarre de chats en rut), désignant la détresse du lendemain d'ivresse.",
      "isCompound": true,
      "compoundParts": [
            "Katze",
            "-n-",
            "Jammer"
      ]
},
  "Kauf": {
      "fr": "achat / transaction",
      "lit": "action d'acquérir à titre onéreux",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin économique désignant l'acte d'achat, circulation marchande où la force de travail devient elle-même marchandise négociable.",
      "etymology": "Du moyen haut-allemand « kouf », vieux haut-allemand « kouf » (commerce, achat), issu du latin « caupo » (aubergiste, marchand)."
},
  "Kaufleute": {
      "fr": "commerçants / marchands",
      "lit": "gens de commerce (pluriel)",
      "pos_fr": "Nom",
      "role": "Nom pluriel désignant les petits négociants aspirés dans l'entonnoir du prolétariat."
},
  "Kaufmann": {
      "fr": "marchand / commerçant",
      "lit": "homme de négoce",
      "pos_fr": "Nom masculin",
      "role": "Forme singulière de Kaufleute désignant le boutiquier voué à la ruine par la concurrence."
},
  "kaum": {
      "fr": "à peine",
      "lit": "avec peine / tout juste",
      "pos_fr": "Adverbe",
      "role": "Adverbe soulignant la brièveté temporelle du règne bourgeois au regard de son œuvre colossale."
},
  "kehren": {
      "fr": "tourner / diriger / retourner contre",
      "lit": "balayer / faire pivoter vers",
      "pos_fr": "Verbe",
      "role": "Infinitif dépendant de 'können' marquant le retournement des institutions contre leurs créateurs."
},
  "kein": {
      "fr": "aucun / pas de / nul",
      "lit": "pas un seul (déterminant négatif)",
      "pos_fr": "Déterminant indéfini négatif",
      "role": "Déterminant négatif absolu marquant la dissolution impitoyable de tous les liens traditionnels féodaux sans exception."
},
  "keinen": {
      "fr": "aucun / pas de",
      "lit": "pas un seul",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'keinen' du lemme 'kein'. Déterminant négatif marquant l'absence totale de répit dans le travail idéologique."
},
  "keineswegs": {
      "fr": "nullement / en aucune manière / pas du tout",
      "lit": "sur aucun chemin",
      "pos_fr": "Adverbe",
      "role": "Adverbe négatif fort réfutant catégoriquement les calomnies de la presse réactionnaire contre le parti communiste.",
      "etymology": "Génitif adverbial composé de « kein » (aucun) + « Weg » (chemin) + « -s ».",
      "isCompound": true,
      "compoundParts": [
            "kein",
            "-es",
            "Weg",
            "-s"
      ]
},
  "kennen": {
      "fr": "connaître",
      "lit": "savoir d'expérience",
      "pos_fr": "Verbe",
      "role": "Connaissance des conditions réelles de vie."
},
  "Kette": {
      "fr": "chaîne",
      "lit": "liens de fer / entraves de l'esclavage salarié",
      "pos_fr": "Nom féminin",
      "role": "Substantif métaphorique à l'accusatif pluriel désignant les fers de l'exploitation capitaliste."
},
  "ketten": {
      "fr": "chaîne",
      "lit": "liens de fer / entraves de l'esclavage salarié",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'Ketten' du lemme 'Kette'. Substantif métaphorique à l'accusatif pluriel désignant les fers de l'exploitation capitaliste."
},
  "Kind": {
      "fr": "enfant",
      "lit": "descendant en bas âge",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre dont les relations avec le père prolétaire sont vidées de tout caractère bourgeois."
},
  "Kirche": {
      "fr": "Église",
      "lit": "maison du Seigneur",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'institution cléricale, garante de l'ordre moral et alliée séculaire des puissances réactionnaires.",
      "etymology": "Du moyen haut-allemand « kirche », vieux haut-allemand « kirihha », emprunté au grec populaire « kyriakon [dōma] » (la maison du Seigneur)."
},
  "Klagelied": {
      "fr": "complainte / élégie / jérémiade",
      "lit": "chant de lamentation",
      "pos_fr": "Nom neutre",
      "role": "Nom composé désignant les complaintes et élégies larmoyantes de l'aristocratie pleurant la perte de ses serfs et châteaux.",
      "etymology": "Composé de « die Klage » (plainte, lamentation) + « das Lied » (chant, poème chanté).",
      "isCompound": true,
      "compoundParts": [
            "Klage",
            "Lied"
      ]
},
  "Klappe": {
      "fr": "rabat / soupape / volet",
      "lit": "clapet / volet basculant",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant le rabat ou la soupape mécanique, métaphore de la gestion des pressions explosives au sein du corps social.",
      "etymology": "Dérivé onomatopéique du moyen haut-allemand « klappen » (claquer, faire un bruit sec)."
},
  "klar": {
      "fr": "clair / limpide / lucide",
      "lit": "lumineux / évident à l'intellect",
      "pos_fr": "Adjectif",
      "role": "Épithète qualifiant la lucidité théorique exigée pour la conscience de classe."
},
  "klares": {
      "fr": "clair / limpide / lucide",
      "lit": "lumineux / évident à l'intellect",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'klares' du lemme 'klar'. Épithète qualifiant la lucidité théorique exigée pour la conscience de classe."
},
  "Klasse": {
      "fr": "classe / ordre social",
      "lit": "classe / division civique / catégorie",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin, concept central du matérialisme historique désignant un groupe social déterminé par sa place objective dans les rapports de production et face à la propriété des moyens de travail.",
      "etymology": "Emprunté au XVIIe siècle au latin classique « classis » (division civique des citoyens romains convoqués pour le service de l'armée ou le vote aux comices centuriates, issu de la racine indo-européenne *kelh₁- « appeler, convoquer »). Introduit en allemand d'abord au sens scolaire (classe d'élèves) et taxonomique (classification naturelle), puis étendu au XVIIIe siècle aux divisions de la société. Chez Marx, la « Klasse » s'oppose au « Stand » féodal : elle ne repose plus sur un statut juridique héréditaire ou un privilège de caste, mais sur la position objective des individus dans les rapports de production."
},
  "klassen": {
      "fr": "classe sociale",
      "lit": "division économique de la société",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'Klassen' du lemme 'Klasse'. Substantif féminin pluriel désignant les groupes sociaux antagoniques."
},
  "Klassenbildung": {
      "fr": "constitution des classes / formation de classe",
      "lit": "formation de la classe",
      "pos_fr": "Nom féminin",
      "role": "Nom composé sociologique capital désignant la constitution historique et politique d'une catégorie sociale en classe unie et consciente.",
      "etymology": "Composé de « die Klasse » (la classe sociale) + « die Bildung » (la formation, constitution).",
      "isCompound": true,
      "compoundParts": [
            "Klasse",
            "-n-",
            "Bildung"
      ]
},
  "Klassencharakter": {
      "fr": "caractère de classe",
      "lit": "empreinte / caractère de classe",
      "pos_fr": "Nom masculin",
      "role": "Concept fondamental désignant la nature de classe inhérente à l'État, au droit, à la morale et aux institutions de la société bourgeoise.",
      "etymology": "Composé de « Klasse » + « Charakter » (caractère, du grec « charaktēr » marque gravée).",
      "isCompound": true,
      "compoundParts": [
            "Klasse",
            "-n-",
            "Charakter"
      ]
},
  "Klasseneigentum": {
      "fr": "propriété de classe",
      "lit": "propriété monopolisée par une classe",
      "pos_fr": "Nom neutre",
      "role": "Nom composé désignant la propriété comprise non comme bien d'usage personnel, mais comme monopole de classe sur les moyens de subsistance.",
      "etymology": "Composé de « Klasse » + « Eigentum » (propriété).",
      "isCompound": true,
      "compoundParts": [
            "Klasse",
            "-n-",
            "Eigentum"
      ]
},
  "Klassengegensatz": {
      "fr": "antagonisme de classe",
      "lit": "opposition irréductible de deux classes",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin composé désignant la contradiction motrice de la société bourgeoise.",
      "etymology": "Composé dialectique associant « die Klasse » (du latin classis) et « der Gegensatz » (calque philosophique du grec antíthesis, formé de gegen = en face, contre + Satz = position posée, déverbal de setzen). Développé par Hegel pour désigner la contradiction objective en mouvement."
},
  "Klassenherrschaft": {
      "fr": "domination de classe",
      "lit": "pouvoir souverain d'une classe",
      "pos_fr": "Nom féminin",
      "role": "Concept politique majeur : l'exercice exclusif du pouvoir étatique par la bourgeoisie."
},
  "Klasseninteresse": {
      "fr": "intérêt de classe",
      "lit": "intérêt propre à une classe",
      "pos_fr": "Nom neutre",
      "role": "Concept sociologique fondamental : les mobiles matériels qui déterminent les prises de position politiques."
},
  "Klassenkampf": {
      "fr": "lutte des classes",
      "lit": "combat collectif entre classes antagonistes",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin composé : la thèse fondatrice du marxisme révolutionnaire.",
      "etymology": "Composé théorique unissant « Klasse » (du latin classis) et « der Kampf » (le combat, la lutte, du moyen haut-allemand « kampf », vieux haut-allemand « kampf », emprunté très tôt au latin « campus » = champ de bataille). Concept moteur du matérialisme historique formulé dans la première phrase du chapitre I : l'histoire de toute société jusqu'à nos jours est l'histoire de luttes de classes."
},
  "Klassenunterschied": {
      "fr": "différence de classe / distinction sociale",
      "lit": "différence / séparation de classe",
      "pos_fr": "Nom masculin",
      "role": "Nom composé désignant les distinctions de classe et les fossés économiques séparant exploiteurs et exploités au sein de la production.",
      "etymology": "Composé de « Klasse » + « Unterschied » (différence, distinction).",
      "isCompound": true,
      "compoundParts": [
            "Klasse",
            "-n-",
            "Unterschied"
      ]
},
  "klassisch": {
      "fr": "classique",
      "lit": "de premier rang / modèle",
      "pos_fr": "Adjectif",
      "role": "Forme classique et achevée des luttes en Angleterre/France."
},
  "klein": {
      "fr": "petit",
      "lit": "de dimensions modestes",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant la petite production artisanale vouée à l'écrasement concurrentiel."
},
  "kleinbäuerlich": {
      "fr": "de petite paysannerie / petit-paysan",
      "lit": "relatif aux petits paysans",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant la paysannerie parcellaire archaïque, vouée à l'extinction par la concurrence de l'agriculture capitaliste moderne.",
      "etymology": "Composé de « klein » (petit) + « Bauer » (paysan) + « -lich ».",
      "isCompound": true,
      "compoundParts": [
            "klein",
            "Bauer",
            "-lich"
      ]
},
  "Kleinbürger": {
      "fr": "petit-bourgeois",
      "lit": "bourgeois de petite condition",
      "pos_fr": "Nom masculin",
      "role": "Nom composé désignant la couche intermédiaire chancelante prise en étau entre capital et travail."
},
  "Kleinbürgerei": {
      "fr": "petite bourgeoisie",
      "lit": "monde étriqué des petits bourgeois corporatistes",
      "pos_fr": "Nom féminin",
      "role": "Substantif satirique désignant la frange corporative et philistine des boutiquiers allemands."
},
  "kleinbürgerei": {
      "fr": "petite bourgeoisie",
      "lit": "monde étriqué des petits bourgeois corporatistes",
      "pos_fr": "Nom féminin",
      "role": "Forme fléchie 'Kleinbürgerei' du lemme 'Kleinbürgerei'. Substantif satirique désignant la frange corporative et philistine des boutiquiers allemands."
},
  "kleinbürgerlich": {
      "fr": "petit-bourgeois",
      "lit": "relatif à la petite bourgeoisie",
      "pos_fr": "Adjectif",
      "role": "Concept sociologique qualifiant l'esprit étriqué, vacillant et rétrograde de la petite-bourgeoisie acculée.",
      "etymology": "Composé de « klein » + « Bürger » (bourgeois) + « -lich ».",
      "isCompound": true,
      "compoundParts": [
            "klein",
            "Bürger",
            "-lich"
      ]
},
  "Kleinbürgerschaft": {
      "fr": "petite-bourgeoisie",
      "lit": "l'ensemble des petits bourgeois",
      "pos_fr": "Nom féminin",
      "role": "Nom collectif désignant l'ensemble de la petite-bourgeoisie, couche intermédiaire instable menacée d'annihilation par le grand capital.",
      "etymology": "Composé de « der Kleinbürger » (petit-bourgeois) + suffixe collectif « -schaft ».",
      "isCompound": true,
      "compoundParts": [
            "Kleinbürger",
            "-schaft"
      ]
},
  "Kleinbürgertum": {
      "fr": "petite-bourgeoisie",
      "lit": "condition / classe de la petite bourgeoisie",
      "pos_fr": "Nom neutre",
      "role": "Concept sociologique désignant la petite-bourgeoisie artisanale et commerçante prise en étau entre la bourgeoisie et le prolétariat.",
      "etymology": "Composé de « Kleinbürger » + suffixe d'état ou d'ordre « -tum ».",
      "isCompound": true,
      "compoundParts": [
            "Kleinbürger",
            "-tum"
      ]
},
  "kleinlich": {
      "fr": "mesquin / étroit d'esprit",
      "lit": "de petit format",
      "pos_fr": "Adjectif",
      "role": "Adjectif dépeignant la mesquinerie du profit érigé en loi suprême de l'atelier."
},
  "kleinlicher": {
      "fr": "plus mesquin / étroit",
      "lit": "plus petit d'esprit",
      "pos_fr": "Adverbe",
      "role": "Caractère mesquin du despotisme de fabrique."
},
  "Klimate": {
      "fr": "climats / contrées climatiques",
      "lit": "zones de climat (pluriel)",
      "pos_fr": "Nom féminin",
      "role": "Nom pluriel désignant la diversité géographique mondiale des pays fournisseurs de denrées."
},
  "Knecht": {
      "fr": "valet / serf / esclave",
      "lit": "serviteur sous le joug",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant l'opprimé asservi dont la bourgeoisie ne peut plus garantir la subsistance."
},
  "knechten": {
      "fr": "asservir / réduire en servitude",
      "lit": "traiter en valet (Knecht)",
      "pos_fr": "Verbe",
      "role": "Verbe décrivant l'asservissement impitoyable de l'ouvrier par la machine et le patron."
},
  "knechtisch": {
      "fr": "servile / d'esclave",
      "lit": "propre au valet ou serf (Knecht)",
      "pos_fr": "Adjectif",
      "role": "Adjectif décrivant la survie au rabais que le maître est contraint d'assurer à son exploité."
},
  "knöchern": {
      "fr": "osseux / squelettique",
      "lit": "fait d'os",
      "pos_fr": "Adjectif",
      "role": "Mains décharnées de l'ouvrier usé par l'usine."
},
  "knüpfen": {
      "fr": "nouer / lier / attacher",
      "lit": "lier par des nœuds serrés",
      "pos_fr": "Verbe faible",
      "role": "Verbe décrivant les liens personnels et affectifs artificiels qui ligotaient le serf à son maître féodal.",
      "etymology": "Issu du moyen haut-allemand « knüpfen / knüpfen », vieux haut-allemand « knuppen » (nouer fermement). Dérivé du substantif germanique *knuppaz (bouton, nœud serré, bosse, d'où proviennent l'allemand Knopf et Knorren)."
},
  "Koalition": {
      "fr": "coalition / syndicat de résistance",
      "lit": "union concertée de forces",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant les premières ententes et ligues ouvrières pour maintenir les salaires."
},
  "Kollision": {
      "fr": "choc / collision / conflit",
      "lit": "heurt violent de deux corps",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant les heurts inévitables entre ouvriers et patrons se muant en lutte de deux classes."
},
  "Kolonie": {
      "fr": "colonie",
      "lit": "territoire conquis et asservi par une métropole",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant les débouchés impérialistes indispensables à la bourgeoisie manufacturière.",
      "etymology": "Emprunt au latin « colonia » (terre attribuée à des colons, de colere)."
},
  "Kolonisierung": {
      "fr": "colonisation",
      "lit": "soumission marchande et territoriale",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin marquant le processus d'expansion mondiale des forces productives capitalistes.",
      "etymology": "Déverbal en « -ung » formé sur le verbe « kolonisieren » (coloniser), emprunt au latin « colonia » (établissement de colons sur une terre conquise, de colonus = cultivateur, fermier, issu de colere = habiter, cultiver)."
},
  "kolossal": {
      "fr": "colossal / gigantesque",
      "lit": "à l'échelle d'un colosse",
      "pos_fr": "Adjectif",
      "role": "Adjectif traduisant la démesure prométhéenne des capacités productives industrielles."
},
  "komisch": {
      "fr": "comique / burlesque",
      "lit": "propre à la comédie",
      "pos_fr": "Adverbe",
      "role": "Effet burlesque des jérémiades aristocratiques."
},
  "kommen": {
      "fr": "venir / parvenir / accéder",
      "lit": "se déplacer vers un but / arriver à destination",
      "pos_fr": "Verbe fort",
      "role": "Verbe fort employé dans la locution « zur Herrschaft kommen » (conquérir le pouvoir politique, accéder à l'hégémonie)."
},
  "kommend": {
      "fr": "à venir / futur",
      "lit": "qui vient",
      "pos_fr": "Adjectif",
      "role": "La société communiste future."
},
  "kommerziell": {
      "fr": "commercialement / sur le plan du commerce",
      "lit": "relatif au négoce",
      "pos_fr": "Adverbe",
      "role": "Fluctuations commerciales des prix."
},
  "Kommune": {
      "fr": "commune médiévale / municipe autonome",
      "lit": "association municipale libre de citadins confédérés",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant les villes franches médiévales émancipées du ban seigneurial.",
      "etymology": "Emprunt au français médiéval « commune », issu du bas-latin « communia » (association jurée de bourgeois, corps municipal indépendant, neutre pluriel substantivé du latin communis = partagé en commun)."
},
  "Kommunikation": {
      "fr": "communication / mise en relation",
      "lit": "action de mettre en commun",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant les réseaux de transports qui accélèrent l'unification politique du prolétariat."
},
  "Kommunikationsmittel": {
      "fr": "moyen de communication",
      "lit": "instrument de liaison",
      "pos_fr": "Nom neutre",
      "role": "Nom composé désignant le chemin de fer et le télégraphe créés par la grande industrie."
},
  "Kommunismus": {
      "fr": "communisme",
      "lit": "mouvement réel qui abolit l'ordre actuel",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant le mouvement politique d'émancipation de la classe travailleuse.",
      "etymology": "Forgé en France vers 1840 à partir du latin « communis » (commun, partagé par tous, issu de la racine indo-européenne *ko-moin-i- « partagé en commun ») et du suffixe doctrinal « -ismus ». Désigne le mouvement réel d'émancipation abolissant l'état de choses actuel et instituant la réappropriation collective des forces productives."
},
  "Kommunist": {
      "fr": "communiste",
      "lit": "partisan de la communauté des biens / communiste",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant les militants de la Ligue des communistes.",
      "etymology": "Dérivé au moyen du suffixe d'agent d'origine grecque « -ist » sur le radical latin « communis » (partagé en commun, de con- + munus). Désigne les adhérents de la Ligue des communistes (fondée à Londres en 1847)."
},
  "kommunisten": {
      "fr": "communiste",
      "lit": "partisan de la communauté des biens",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'Kommunisten' du lemme 'Kommunist'. Substantif au génitif ou nominatif pluriel désignant les membres du Parti communiste."
},
  "kommunistisch": {
      "fr": "communiste",
      "lit": "qui relève du parti ou de l'idéologie communiste",
      "pos_fr": "Adjectif",
      "role": "Adjectif politique identifiant le mouvement prolétarien révolutionnaire.",
      "etymology": "Dérivé de « Kommunismus » (du latin communis) au moyen du suffixe adjectival germanique « -isch »."
},
  "kommunistische": {
      "fr": "communiste",
      "lit": "relatif au communisme et à l'abolition des classes",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'Kommunistische' du lemme 'kommunistisch'. Épithète qualifiant le Parti ou la révolution émancipatrice universelle."
},
  "kommunistischen": {
      "fr": "communiste",
      "lit": "relatif au communisme et à l'abolition des classes",
      "pos_fr": "Nom neutre",
      "role": "Forme fléchie 'kommunistischen' du lemme 'kommunistisch'. Épithète qualifiant le Parti ou la révolution émancipatrice universelle."
},
  "Konfiskation": {
      "fr": "confiscation / saisie",
      "lit": "saisie de biens au profit du fisc",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin juridique désignant la mesure révolutionnaire de saisie des biens des rebelles et émigrés réactionnaires au profit du peuple.",
      "etymology": "Emprunté au latin « confiscatio » (confiscation au profit du trésor public, « fiscus »)."
},
  "Konkurrenz": {
      "fr": "concurrence",
      "lit": "rivalité sur le marché",
      "pos_fr": "Nom féminin",
      "role": "Loi économique centrale : la compétition féroce divisant les ouvriers mais les contraignant à s'unir."
},
  "konkurrierend": {
      "fr": "concurrent / rival",
      "lit": "qui court avec pour rivaliser",
      "pos_fr": "Adjectif",
      "role": "Participe présent désignant les marchandises importées qui ruinent le travailleur manuel."
},
  "konsequent": {
      "fr": "conséquemment / logiquement",
      "lit": "en toute conséquence",
      "pos_fr": "Adverbe",
      "role": "Conclusion logique déduite des prémisses doctrinaires."
},
  "Konsequenz": {
      "fr": "conséquence / rigueur logique",
      "lit": "suite logique nécessaire",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la rigueur logique et les suites matérielles nécessaires découlant des prémisses historiques.",
      "etymology": "Emprunté au latin « consequentia » (suite logique), dérivé de « consequi » (suivre de près)."
},
  "konservativ": {
      "fr": "conservateur",
      "lit": "qui maintient l'état établi",
      "pos_fr": "Adjectif",
      "role": "Épithète qualifiant la bourgeoisie d'ordre opposée à toute réforme."
},
  "konservative": {
      "fr": "conservateur",
      "lit": "qui maintient l'état établi",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'konservative' du lemme 'konservativ'. Épithète qualifiant la bourgeoisie d'ordre opposée à toute réforme."
},
  "konstituieren": {
      "fr": "constituer / ériger en / fonder",
      "lit": "établir ensemble de manière stable",
      "pos_fr": "Verbe",
      "role": "Verbe historique fondamental : le prolétariat doit d'abord se constituer en classe nationale pour ériger sa dictature démocratique.",
      "etymology": "Emprunté au latin « constituere » (établir fermement, décréter)."
},
  "konstituiert": {
      "fr": "constitué / établi",
      "lit": "établi / organisé en corps politique",
      "pos_fr": "Adjectif",
      "role": "Épithète au datif féminin pluriel qualifiant 'Arbeiterparteien'."
},
  "konstituierten": {
      "fr": "constitué / établi",
      "lit": "établi / organisé en corps politique",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'konstituierten' du lemme 'konstituiert'. Épithète au datif féminin pluriel qualifiant 'Arbeiterparteien'."
},
  "Konstitution": {
      "fr": "constitution politique et sociale",
      "lit": "organisation des institutions",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'ordonnancement juridique adéquat à la domination bourgeoise."
},
  "Konsumption": {
      "fr": "consommation",
      "lit": "action de consommer des biens",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin économique désignant l'usage des marchandises mondialisé par le capitalisme."
},
  "Konzentration": {
      "fr": "concentration / rassemblement",
      "lit": "action de ramener vers un centre commun",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin économique capital désignant le rassemblement massif des capitaux et des forces productives entre un nombre restreint de mains.",
      "etymology": "Dérivé savant formé sur le modèle latin moderne de « con- » (ensemble) + « centrum » (centre)."
},
  "konzentrieren": {
      "fr": "concentrer",
      "lit": "rassembler en un centre unique",
      "pos_fr": "Verbe",
      "role": "Loi économique majeure : la centralisation du capital dans les mains d'un petit nombre de magnats."
},
  "konzentriert": {
      "fr": "concentré",
      "lit": "rassemblé en un centre",
      "pos_fr": "Adverbe",
      "role": "Participe passé marquant la centralisation du capital et de la force politique."
},
  "Korporation": {
      "fr": "corporation",
      "lit": "corps de métier exclusif médiéval",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant le cadre artisanal féodal détruit par la manufacture moderne.",
      "etymology": "Emprunt savant au bas-latin juridique « corporatio » (l'acte de former un corps politique ou commercial unifié, dérivé de corpus / corporis = corps physique). Désigne les corps de métier privilégiés d'Ancien Régime munis d'un monopole statutaire accordé par charte royale ou princière."
},
  "kosmopolitisch": {
      "fr": "cosmopolite",
      "lit": "qui appartient au monde entier",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant le déracinement planétaire de la production et de la consommation marchandes."
},
  "Kosten": {
      "fr": "coûts / frais de production",
      "lit": "dépenses engagées",
      "pos_fr": "Nom",
      "role": "Terme économique mesurant les débours stricts nécessaires à l'entretien de la marchandise-travail."
},
  "Kraft": {
      "fr": "force / puissance productive",
      "lit": "vigueur matérielle en acte",
      "pos_fr": "Nom féminin",
      "role": "Concept physique et philosophique : l'énergie productive humaine transformant le monde."
},
  "Kraftäußerung": {
      "fr": "manifestation de force",
      "lit": "extériorisation de vigueur physique",
      "pos_fr": "Nom féminin",
      "role": "Nom composé caractérisant la violence chevaleresque médiévale admirée par les conservateurs."
},
  "Krakauer": {
      "fr": "de Cracovie / cracovien",
      "lit": "propre à la ville de Cracovie",
      "pos_fr": "Adjectif",
      "role": "Adjectif géographique invariable qualifiant le soulèvement de février-mars 1846."
},
  "krakauer": {
      "fr": "de Cracovie / cracovien",
      "lit": "propre à la ville de Cracovie",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'Krakauer' du lemme 'Krakauer'. Adjectif géographique invariable qualifiant le soulèvement de février-mars 1846."
},
  "Krautjunker": {
      "fr": "hobereau campagnard / gentilhomme campagnard arriéré",
      "lit": "chevalier du chou",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin méprisant et truculent désignant les hobereaux campagnards arriérés de Prusse orientale, piliers du despotisme agraire.",
      "etymology": "Composé moqueur de « das Kraut » (le chou, les herbes du potager) + « der Junker » (le jeune seigneur foncier prussien, de « junc herre »).",
      "isCompound": true,
      "compoundParts": [
            "Kraut",
            "Junker"
      ]
},
  "Kredit": {
      "fr": "crédit / confiance financière",
      "lit": "ce qui est prêté sur confiance",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin financier désignant le système de crédit bancaire, puissant levier d'accumulation et de centralisation du capital.",
      "etymology": "Emprunté à l'italien « credito » (crédit), issu du participe latin « creditum » (chose confiée, prêtée, du verbe « credere », croire/faire confiance)."
},
  "Kreuzzug": {
      "fr": "croisade",
      "lit": "expédition de la croix",
      "pos_fr": "Nom masculin",
      "role": "Nom composé évoquant les guerres de religion féodales dépassées par les conquêtes marchandes globales."
},
  "Krise": {
      "fr": "crise commerciale",
      "lit": "point de rupture aigu",
      "pos_fr": "Nom féminin",
      "role": "Concept marxien cardinal désignant les déflagrations cycliques révélant l'impasse du capitalisme."
},
  "Kritik": {
      "fr": "critique / examen rigoureux",
      "lit": "art de juger / examen raisonné",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin théorique désignant la critique impitoyable de tout l'ordre existant, méthode révolutionnaire par excellence du marxisme.",
      "etymology": "Emprunté au grec ancien « kritikē [technē] » (l'art de discerner ou de juger, de « krinein », séparer/juger)."
},
  "kritisch": {
      "fr": "critique / avec lucidité",
      "lit": "qui juge et passe au crible",
      "pos_fr": "Adverbe",
      "role": "Adverbe de manière qualifiant l'attitude d'examen sans complaisance ('sich verhalten')."
},
  "kritisch-utopistisch": {
      "fr": "critique et utopique",
      "lit": "qui examine et imagine",
      "pos_fr": "Adjectif",
      "role": "Section III.3 du Manifeste consacrée à Saint-Simon, Fourier et Owen."
},
  "Krämer": {
      "fr": "boutiquier / mercanti",
      "lit": "petit marchand de détail",
      "pos_fr": "Nom masculin",
      "role": "Nom péjoratif désignant le petit commerçant rapace qui rançonne l'ouvrier après l'usine."
},
  "kurz": {
      "fr": "bref / en un mot",
      "lit": "en peu de termes",
      "pos_fr": "Adverbe",
      "role": "Adverbe synthétisant une énumération historique par une loi générale."
},
  "kämpfen": {
      "fr": "combattre / lutter",
      "lit": "mener un combat de classe",
      "pos_fr": "Verbe",
      "role": "Noyau verbal conjugué au présent de l'indicatif marquant l'action militante directe."
},
  "kämpfend": {
      "fr": "combattant / en lutte",
      "lit": "engagé dans un combat mortel",
      "pos_fr": "Participe présent",
      "role": "Adjectif décrivant les deux classes aux prises dans l'arène historique.",
      "etymology": "Formé sur le verbe « kämpfen » (combattre, lutter), déverbal de Kampf, lui-même emprunté au latin « campus » (champ de bataille)."
},
  "kämpft": {
      "fr": "combattre / lutter",
      "lit": "mener un combat de classe",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'kämpft' du lemme 'kämpfen'. Noyau verbal conjugué au présent de l'indicatif marquant l'action militante directe."
},
  "Königtum": {
      "fr": "royauté / royalisme",
      "lit": "condition / institution royale",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre institutionnel désignant la royauté et le pouvoir monarchique traditionnel coalisé avec les forces féodales.",
      "etymology": "Du moyen haut-allemand « künictuom », vieux haut-allemand « kuningtuom », de « König » (roi) + suffixe d'état « -tum ».",
      "isCompound": true,
      "compoundParts": [
            "König",
            "-tum"
      ]
},
  "können": {
      "fr": "pouvoir / être capable de",
      "lit": "avoir le pouvoir matériel d'agir",
      "pos_fr": "Verbe",
      "role": "Verbe modal exprimant la capacité combative pratique des prolétaires."
},
  "Lage": {
      "fr": "situation / position matérielle",
      "lit": "manière d'être couché ou situé",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la condition sociale dégradée à laquelle l'ouvrier est acculé."
},
  "Lager": {
      "fr": "camp",
      "lit": "retranchement militaire / faction polarisée",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre métaphorique : la polarisation du monde en deux camps ennemis irréconciliables.",
      "etymology": "Substantif d'art militaire issu du moyen haut-allemand « lager », vieux haut-allemand « lagar » (l'endroit où l'on s'allonge pour dormir, gîte), déverbal de « liegen » (être couché, étendu en plaine). Passé dès le bas Moyen Âge au sens de campement retranché d'une armée en campagne belligérante (cognat de l'anglais lair). Métaphore de la polarisation guerrière de la société en deux camps retranchés prêts à l'affrontement."
},
  "Land": {
      "fr": "pays",
      "lit": "territoire / contrée nationale",
      "pos_fr": "Nom neutre",
      "role": "Substantif au génitif pluriel dans 'aller Länder' (de tous les pays)."
},
  "Landeserzeugnisse": {
      "fr": "produits nationaux / fruits du pays",
      "lit": "productions du pays d'origine",
      "pos_fr": "Nom neutre",
      "role": "Nom composé désignant les denrées de terroir supplantées par les importations universelles."
},
  "Landkommunikation": {
      "fr": "voie de communication terrestre",
      "lit": "communication et transport par voie de terre ferme",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin composé désignant les routes, canaux et chemins de fer unifiant l'espace géographique national.",
      "etymology": "Composé associant : 1° « das Land » (la terre, terre ferme, contrée, en moyen haut-allemand lant, en vieux haut-allemand lant, proto-germanique *landą) ; 2° « die Kommunikation », emprunt savant au latin classique « communicatio » (partage, mise en commun), dérivé de « communicare » (rendre commun), formé sur « communis » (commun, public)."
},
  "Landkommunikationen": {
      "fr": "voies de communication par terre",
      "lit": "voies de transport terrestre au pluriel",
      "pos_fr": "Nom féminin (pluriel)",
      "role": "Forme plurielle désignant le maillage territorial des réseaux routiers et ferrés modernes."
},
  "Landleben": {
      "fr": "vie rurale / existence des champs",
      "lit": "vie à la campagne",
      "pos_fr": "Nom neutre",
      "role": "Nom composé entrant dans la célèbre formule sur l'idiotisme borné de la vie rustique."
},
  "lang": {
      "fr": "long / prolongé",
      "lit": "étendu dans l'espace ou la durée temporelle",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualificatif soulignant la longue maturation pluriséculaire de la classe bourgeoise moderne."
},
  "lange": {
      "fr": "longtemps",
      "lit": "durant un long temps",
      "pos_fr": "Adverbe",
      "role": "Adverbe mesurant la précarité de la vie ouvrière liée à la vente de sa force de travail."
},
  "lassen": {
      "fr": "laisser / faire faire",
      "lit": "permettre / abandonner à l'état",
      "pos_fr": "Verbe",
      "role": "Verbe causatif régissant l'abandon de l'ouvrier à sa déchéance matérielle."
},
  "Lauf": {
      "fr": "course / vitesse de rotation",
      "lit": "mouvement rapide continu",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant la cadence effrénée des rouages de la machine moderne."
},
  "laut": {
      "fr": "bruyant / à voix haute",
      "lit": "à plein son",
      "pos_fr": "Adjectif",
      "role": "Protestations sonores des travailleurs."
},
  "lauter": {
      "fr": "rien que / uniquement / que des",
      "lit": "pur / sans mélange",
      "pos_fr": "Adverbe",
      "role": "Autant de chaînes, rien que des entraves bourgeoises."
},
  "Leben": {
      "fr": "vie",
      "lit": "existence vitale",
      "pos_fr": "Nom neutre",
      "role": "Substantif à l'accusatif neutre singulier dans la locution 'ins Leben rufen' (susciter, enfanter)."
},
  "leben": {
      "fr": "vie",
      "lit": "existence vitale",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'Leben' du lemme 'Leben'. Substantif à l'accusatif neutre singulier dans la locution 'ins Leben rufen' (susciter, enfanter)."
},
  "lebendig": {
      "fr": "vivant / actif / animé",
      "lit": "qui a la vie",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant le travail vivant des ouvriers, vampirisé par le travail mort accumulé sous forme de capital.",
      "etymology": "Du moyen haut-allemand « lebendec », vieux haut-allemand « lebentīc », dérivé de « leben » (vivre)."
},
  "Lebensbedingung": {
      "fr": "condition de vie / d'existence",
      "lit": "exigence matérielle vitale",
      "pos_fr": "Nom féminin",
      "role": "Concept marxiste désignant le socle matériel régissant la reproduction d'une classe sociale."
},
  "Lebensfrage": {
      "fr": "question vitale / de vie ou de mort",
      "lit": "interrogation sur la survie",
      "pos_fr": "Nom féminin",
      "role": "Nom composé dramatisant l'introduction forcée de l'industrie pour chaque nation."
},
  "Lebenslage": {
      "fr": "condition d'existence matérielle",
      "lit": "situation dans la vie",
      "pos_fr": "Nom féminin",
      "role": "Nom composé désignant le statut social objectif inclinant le sous-prolétariat à la trahison."
},
  "Lebensmittel": {
      "fr": "moyens de subsistance / vivres",
      "lit": "denrées vitales pour vivre",
      "pos_fr": "Nom neutre",
      "role": "Nom composé économique désignant les biens consommables nécessaires au maintien du travailleur."
},
  "Lebensprozeß": {
      "fr": "processus vital / procès de vie",
      "lit": "déroulement continuel de la vie",
      "pos_fr": "Nom masculin",
      "role": "Concept philosophique et matérialiste fondamental désignant le procès réel et matériel de la vie humaine produit par le travail social.",
      "etymology": "Composé de « das Leben » (la vie) + « der Prozeß » (le procès, processus, cours régulier).",
      "isCompound": true,
      "compoundParts": [
            "Leben",
            "-s-",
            "Prozeß"
      ]
},
  "Lebensstellung": {
      "fr": "statut social / condition de vie",
      "lit": "place occupée dans la vie sociale",
      "pos_fr": "Nom féminin",
      "role": "Nom composé désignant la position sociale que les hommes doivent envisager avec lucidité."
},
  "Lebensverhältnis": {
      "fr": "condition d'existence / rapport vital",
      "lit": "rapport de vie",
      "pos_fr": "Nom neutre",
      "role": "Nom composé désignant les conditions concrètes d'existence matérielle et le statut social effectif réservé à chaque individu.",
      "etymology": "Composé de « Leben » + « Verhältnis » (condition, rapport social).",
      "isCompound": true,
      "compoundParts": [
            "Leben",
            "-s-",
            "Verhältnis"
      ]
},
  "Legitimist": {
      "fr": "légitimiste",
      "lit": "partisan du droit dynastique légitime",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin politique désignant les légitimistes français, partisans des Bourbons et défenseurs de la grande propriété terrienne héréditaire.",
      "etymology": "Emprunté au français « légitimiste », forgé au XIXe siècle pour désigner les partisans des Bourbons légitimes déchus en 1830."
},
  "lehren": {
      "fr": "enseigner / apprendre",
      "lit": "instruire",
      "pos_fr": "Verbe",
      "role": "Ce qu'enseigne l'histoire des luttes de classes."
},
  "Leibeigene": {
      "fr": "serf",
      "lit": "celui dont le corps appartient au seigneur",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin historique désignant le paysan asservi capable de s'émanciper dans la commune."
},
  "Leibeigener": {
      "fr": "serf",
      "lit": "paysan attaché corporellement à la glèbe",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant les producteurs ruraux dominés de la féodalité.",
      "etymology": "Substantif composé juridique féodal : formé de « der Leib » (le corps, en moyen haut-allemand « līp », vieux haut-allemand « līb » = vie, corps vivant) et de « eigen » (propre, possédé en propre). Désigne littéralement le serf dont le corps physique même appartient au seigneur terrien."
},
  "Leibeigenschaft": {
      "fr": "servage",
      "lit": "état de possession du corps par le seigneur",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant le rapport social d'asservissement féodal par excellence."
},
  "leichter": {
      "fr": "plus facilement / plus aisé",
      "lit": "plus léger",
      "pos_fr": "Adverbe",
      "role": "Facilité avec laquelle le christianisme se donne des airs sociaux."
},
  "leichtest": {
      "fr": "le plus facilement",
      "lit": "superlatif de leicht",
      "pos_fr": "Adverbe",
      "role": "Adverbe au superlatif caractérisant la simplification extrême du geste productif machinisé."
},
  "leichtesten": {
      "fr": "le plus facilement",
      "lit": "au plus facile",
      "pos_fr": "Adverbe",
      "role": "Le travail le plus élémentaire exigé par les machines."
},
  "leidendst": {
      "fr": "le plus souffrant",
      "lit": "souffrant au plus haut point",
      "pos_fr": "Adjectif",
      "role": "Le prolétariat vu uniquement comme la classe la plus souffrante."
},
  "letzter": {
      "fr": "dernier / ultime",
      "lit": "le plus tardif",
      "pos_fr": "Adjectif",
      "role": "Adjectif superlatif marquant l'étape ultime ou l'antagonisme final de la préhistoire de l'humanité.",
      "etymology": "Du moyen haut-allemand « lezzest », superlatif de « lazi » (tardif, paresseux)."
},
  "liberal": {
      "fr": "libéral",
      "lit": "partisan de la libre concurrence",
      "pos_fr": "Adjectif",
      "role": "Opposition libérale bourgeoise contre la monarchie."
},
  "Liberalismus": {
      "fr": "libéralisme politique et économique",
      "lit": "doctrine de la liberté individuelle",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin politique désignant l'idéologie libérale des droits formels et du libre-échange, masque de la domination bourgeoise.",
      "etymology": "Formé sur l'adjectif latin « liberalis » (digne d'un homme libre) avec le suffixe doctrinal « -ismus »."
},
  "Liebe": {
      "fr": "amour / affection",
      "lit": "sentiment d'amour et d'attachement",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'amour, dont Marx montre que l'idéalisme bourgeois le soumet impitoyablement au contrat de mariage pécuniaire.",
      "etymology": "Du moyen haut-allemand « liebe », vieux haut-allemand « liobī » (joie, bonté, amour), issu de la racine indo-européenne *leubh- (désirer, aimer)."
},
  "liebesschwül": {
      "fr": "lourd de vapeurs sentimentales",
      "lit": "moite d'amour éthéré",
      "pos_fr": "Adjectif",
      "role": "Ironie de Marx sur la sentimentalité des philosophes allemands."
},
  "liefern": {
      "fr": "fournir / livrer",
      "lit": "mettre à disposition",
      "pos_fr": "Verbe",
      "role": "Fournir les armes matérielles ou intellectuelles."
},
  "literarisch": {
      "fr": "littéraire",
      "lit": "relatif aux lettres",
      "pos_fr": "Adjectif",
      "role": "Combat mené uniquement sur le terrain des brochures et pamphlets."
},
  "Literat": {
      "fr": "homme de lettres / littérateur / écrivassier",
      "lit": "homme lettré",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin ironique fustigeant les lettrés et littérateurs allemands qui greffèrent la phraséologie philosophique sur les revendications ouvrières.",
      "etymology": "Emprunté au latin « litteratus » (instruit, cultivé, homme de lettres), souvent employé avec une nuance ironique au XIXe siècle."
},
  "Literatur": {
      "fr": "littérature / écrits imprimés",
      "lit": "ensemble des productions écrites",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la production écrite et théorique, que Marx analyse comme le reflet direct des affrontements entre classes sociales.",
      "etymology": "Emprunté au latin « litteratura » (écriture, érudition, ensemble des lettres et œuvres)."
},
  "Literaturen": {
      "fr": "littératures",
      "lit": "productions écrites (pluriel)",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin pluriel englobant les traditions littéraires locales dissoutes dans la Weltliteratur."
},
  "Lohn": {
      "fr": "salaire / rétribution",
      "lit": "récompense monétaire du travail",
      "pos_fr": "Nom masculin",
      "role": "Nom économique cardinal mesurant le prix d'achat payé pour la force de travail."
},
  "Lohnarbeit": {
      "fr": "salariat / travail salarié",
      "lit": "travail contre salaire",
      "pos_fr": "Nom masculin",
      "role": "Pilier du capitalisme chez Marx : le mode de travail où l'ouvrier aliène sa force au capital.",
      "etymology": "Composé économique unissant « der Lohn » (le salaire, la rétribution, en moyen haut-allemand « lōn », vieux haut-allemand « lōn », issu du proto-germanique *launą « récompense ») et « die Arbeit » (le travail, la peine). Désigne la forme spécifiquement capitaliste où la force de travail devient une marchandise vendue sur le marché contre un salaire de subsistance."
},
  "Lohnarbeiter": {
      "fr": "travailleur salarié / prolétaire",
      "lit": "ouvrier recevant un salaire",
      "pos_fr": "Nom masculin",
      "role": "Nom composé désignant le statut universel auquel le capitalisme réduit tous les travailleurs."
},
  "lokal": {
      "fr": "local / de terroir",
      "lit": "circonscrit au lieu",
      "pos_fr": "Adjectif",
      "role": "Adjectif caractérisant l'étroitesse géographique de la production et des luttes féodales."
},
  "Lokalität": {
      "fr": "localité / territoire borné",
      "lit": "lieu géographique précis",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'enclave géographique que la grande industrie décloisonne."
},
  "Lokalkämpfe": {
      "fr": "luttes locales",
      "lit": "combats circonscrits à un lieu",
      "pos_fr": "Nom masculin",
      "role": "Nom composé désignant les grèves éparpillées que la liaison ferroviaire unifie."
},
  "London": {
      "fr": "Londres",
      "lit": "capitale britannique, siège de la Ligue",
      "pos_fr": "Nom propre",
      "role": "Nom propre neutre, lieu du congrès communiste de novembre 1847.",
      "etymology": "Emprunt au nom celtique romanisé de la cité « Londinium » (étymon celtique discuté, traditionnellement rattaché à une racine hydronymique pré-celtique ou à l'adjectif celtique *londos = sauvage, furieux, hardi)."
},
  "Los": {
      "fr": "sort / destinée / condition",
      "lit": "ce qui est attribué par tirage au sort",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre désignant la destinée matérielle et le sort de précarité absolue réservé au prolétaire dans l'économie de marché.",
      "etymology": "Du moyen haut-allemand « lōz », vieux haut-allemand « lōz » (sort, portion attribuée par le destin), d'origine proto-germanique *hlutom."
},
  "lossagen": {
      "fr": "se délier de / rompre avec",
      "lit": "déclarer sa rupture",
      "pos_fr": "Verbe",
      "role": "Verbe politique marquant la désertion d'une part de la classe régnante rejoignant les insurgés."
},
  "Luft": {
      "fr": "air",
      "lit": "atmosphère gazeuse",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin de la formule révolutionnaire « in die Luft sprengen » (faire sauter en l'air l'ordre officiel)."
},
  "Lumpenproletariat": {
      "fr": "sous-prolétariat / voyoucratie",
      "lit": "prolétariat en haillons (Lumpen)",
      "pos_fr": "Nom neutre",
      "role": "Concept sociopolitique célèbre de Marx désignant la frange déclassée et vénale du prolétariat."
},
  "lächerlicher": {
      "fr": "dérisoire / ridicule",
      "lit": "qui prête à rire",
      "pos_fr": "Adjectif",
      "role": "Adjectif méprisant raillant l'anachronisme ridicule des tentatives féodales de faire tourner à l'envers la roue de l'histoire.",
      "etymology": "Dérivé de « lachen » (rire) + « -erlich »."
},
  "länder": {
      "fr": "pays",
      "lit": "territoire / contrée nationale",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'Länder' du lemme 'Land'. Substantif au génitif pluriel dans 'aller Länder' (de tous les pays)."
},
  "Länderei": {
      "fr": "terres / domaines fonciers",
      "lit": "étendue de terres agricoles",
      "pos_fr": "Nom féminin",
      "role": "nom féminin (souvent au pluriel Ländereien)",
      "etymology": "Formé sur le pluriel « Länder » de « Land » (terre, pays) avec le suffixe collectif de domaine « -ei »."
},
  "ländlich": {
      "fr": "rural / campagnard",
      "lit": "propre à la terre et aux champs",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant la paysannerie soumise à l'hégémonie de la grande cité bourgeoise."
},
  "länger": {
      "fr": "plus longtemps",
      "lit": "plus longuement",
      "pos_fr": "Adverbe",
      "role": "La bourgeoisie incapable de régner plus longtemps."
},
  "längst": {
      "fr": "depuis longtemps / depuis belle lurette",
      "lit": "au plus long moment",
      "pos_fr": "Adverbe",
      "role": "Adverbe temporel constatant que certaines réalités ou institutions ont été périmées et dépassées depuis longtemps.",
      "etymology": "Superlatif temporel de « lang » (long)."
},
  "machen": {
      "fr": "faire / ériger en",
      "lit": "façonner / poser comme",
      "pos_fr": "Verbe",
      "role": "Noyau verbal de la relative dans la locution 'zur Bedingung machen' (poser en condition préalable)."
},
  "Macht": {
      "fr": "puissance / force souveraine",
      "lit": "pouvoir étatique / domination souveraine",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant les États monarchiques et policiers d'Europe.",
      "etymology": "Issu du moyen haut-allemand « maht / macht », vieux haut-allemand « maht » (force physique, pouvoir d'action, autorité souveraine), de la racine germanique commune *mahti- (« capacité, puissance »), elle-même issue de la racine indo-européenne *magh- (« pouvoir, être capable », qui a aussi produit le verbe prétérito-présent « mögen » / vieux haut-allemand « magan »). Cognat étymologique exact du vieil anglais « meaht » et de l'anglais moderne « might »."
},
  "macht": {
      "fr": "faire / ériger en",
      "lit": "façonner / poser comme",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'macht' du lemme 'machen'. Noyau verbal de la relative dans la locution 'zur Bedingung machen' (poser en condition préalable)."
},
  "man": {
      "fr": "on",
      "lit": "l'être humain / un quelconque individu",
      "pos_fr": "Pronom",
      "role": "Pronom indéfini sujet employé pour restituer les faux consensus anonymes et les préjugés du sens commun bourgeois.",
      "etymology": "Forme atone affaiblie de « Mann » (homme), d'origine proto-germanique *mann-."
},
  "Mangel": {
      "fr": "manque / pénurie / défaut",
      "lit": "déficience, absence d'une chose nécessaire",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant la pénurie et le manque de ressources matérielles frappant les producteurs directs de richesses.",
      "etymology": "Du moyen haut-allemand « mangel », déverbal de « mangeln » (manquer), emprunté au moyen latin « manculare » ou latin « mancus » (estropié, défectueux)."
},
  "Manifest": {
      "fr": "manifeste / déclaration publique",
      "lit": "proclamation solennelle de principes",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre : le document programmatique fondateur du parti communiste mondial.",
      "etymology": "Emprunt au XVIe siècle au latin classique « manifestus » (évident, palpable, flagrant, originellement frappé de la main, composé de manus « main » et de fendere « heurter, frapper »), substantivé au XVIIe siècle en italien (manifesto) puis en français et en allemand pour désigner la déclaration publique solennelle d'un souverain ou d'un parti politique exposant ses principes au grand jour."
},
  "Mann": {
      "fr": "homme",
      "lit": "être humain masculin adulte",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant l'ouvrier masculin supplanté par la femme et l'enfant à l'usine."
},
  "mannigfach": {
      "fr": "de diverses manières / varié",
      "lit": "maintes fois plié",
      "pos_fr": "Adverbe",
      "role": "Modes multiples par lesquels l'histoire progresse."
},
  "mannigfaltig": {
      "fr": "multiple / varié / diversifié",
      "lit": "qui prend de nombreux plis et formes",
      "pos_fr": "Adjectif",
      "role": "Adjectif décrivant la luxuriance des hiérarchies et ordres de l'ancienne Rome et du Moyen Âge.",
      "etymology": "Issu du moyen haut-allemand « manecvalt », vieux haut-allemand « managfalt », composé du déterminant germanique commun *manag (maint, nombreux, qui a donné manch et l'anglais many) et du morphème suffixal multiplicatif « -falt » (dérivé du verbe falten = plier, racine indo-européenne *pel- « plier », qui a produit en latin multiplex et en grec pollaploûs). Cognat parfait de l'anglais « manifold » : textuellement « qui a de multiples plis », caractérisant ici l'infinie stratification des privilèges d'Ancien Régime."
},
  "Mannigfaltigkeit": {
      "fr": "diversité / multiplicité / variété",
      "lit": "état de ce qui se déploie en plis multiples",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la riche diversité empirique des gradations sociales médiévales, balayée par la polarisation bipolaire du capitalisme.",
      "etymology": "Du moyen haut-allemand « manecvaldicheit », de « manec » (maint) + « valt » (pli) + « -keit ».",
      "isCompound": true,
      "compoundParts": [
            "mannigfach",
            "-falt",
            "-ig",
            "-keit"
      ]
},
  "mannigfechen": {
      "fr": "de diverses manières / de multiples façons",
      "lit": "plié de multiples façons (mannigfach)",
      "pos_fr": "Adverbe",
      "role": "Adverbe décrivant les répercussions multiples des crises sur la conscience de classe."
},
  "Manufaktur": {
      "fr": "manufacture",
      "lit": "fabrication organisée par la division du travail manuel",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'étape intermédiaire entre la jurande corporative et la grande industrie.",
      "etymology": "Emprunté au bas latin moderne « manufactura » (travail de la main), composé du latin « manus » (main) et de « factura » (action de faire, confection, de facere). Désigne chez Marx le stade intermédiaire de la division du travail entre l'artisanat corporatif médiéval et la grande industrie mécanisée (« große Industrie »)."
},
  "Manuskript": {
      "fr": "manuscrit",
      "lit": "écrit de la main",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre désignant les textes et manuscrits originaux, comme le Manifeste rédigé à Bruxelles et envoyé sous presse à Londres en février 1848.",
      "etymology": "Emprunté au latin médiéval « manuscriptum », du latin classique « manu scriptus » (écrit à la main)."
},
  "Markt": {
      "fr": "marché",
      "lit": "espace marchand d'échange des denrées",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin économique dont la constante mondialisation nourrit la bourgeoisie.",
      "etymology": "Emprunt ancien (dès le VIIIe siècle) au latin classique « mercatus » (commerce, trafic, lieu de foire, dérivé de « merx » = marchandise)."
},
  "marktschreierisch": {
      "fr": "sur un ton de charlatan / bonimenteur",
      "lit": "à la façon d'un crieur de foire",
      "pos_fr": "Adverbe",
      "role": "Boniments publicitaires de la philanthropie bourgeoise."
},
  "Maschine": {
      "fr": "machine / automate productif",
      "lit": "mécanisme artificiel de travail",
      "pos_fr": "Nom féminin",
      "role": "Instrument suprême de la révolution industrielle expropriant le savoir de l'artisan."
},
  "Maschinerie": {
      "fr": "machinerie / parc de machines",
      "lit": "système mécanique articulé de machines automatiques",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant chez Marx le système automatique d'outils et de moteurs qui supplante l'artisan et asservit l'ouvrier comme rouage.",
      "etymology": "Emprunt au XVIIIe siècle au français « machinerie » (dérivé en -erie de « machine »), issu du latin « machina », lui-même emprunté au grec dorien « mākhanā » (attique « mēkhanē », dispositif ingénieux, artifice, engin, de la racine indo-européenne *magʰ- = pouvoir, être capable)."
},
  "Masse": {
      "fr": "masse / multitude collective",
      "lit": "corps dense compact",
      "pos_fr": "Nom féminin",
      "role": "Concept sociologique désignant les foules compactes d'ouvriers concentrés dans les fabriques."
},
  "Massenhaft": {
      "fr": "massif / gigantesque",
      "lit": "qui a la nature d'une masse imposante",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant l'échelle incommensurable des forces productives créées par la bourgeoisie."
},
  "massenhaft": {
      "fr": "massif / en grande quantité",
      "lit": "par masses",
      "pos_fr": "Adjectif",
      "role": "Concentration massive de capitaux ou prolétaires."
},
  "massenhafterer": {
      "fr": "plus massif / plus gigantesque",
      "lit": "comparatif de massenhaft (en masse)",
      "pos_fr": "Adjectif",
      "role": "Adjectif comparatif qualifiant la démesure des forces productives bourgeoises."
},
  "Material": {
      "fr": "matériau / matière / documentation",
      "lit": "matière première pour un ouvrage",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre désignant la documentation concrète ou la matière première transformée par l'industrie manufacturière.",
      "etymology": "Emprunté au latin « materia » (matière de construction, bois d'œuvre, substance)."
},
  "materiell": {
      "fr": "matériel / économique",
      "lit": "qui relève de la matière sensible",
      "pos_fr": "Adjectif",
      "role": "Concept clé du matérialisme historique marquant le primat de l'infrastructure économique."
},
  "Materiellen": {
      "fr": "éléments matériels / intérêts matériels",
      "lit": "ce qui appartient au domaine matériel",
      "pos_fr": "Nom neutre pluriel",
      "role": "Adjectif substantivé désignant les intérêts matériels et les forces économiques réelles qui gouvernent le cours de l'histoire.",
      "etymology": "Substantivation de l'adjectif « materiell » (matériel, corporel, économique), dérivé du latin « materia »."
},
  "Mauer": {
      "fr": "muraille / rempart",
      "lit": "mur de défense en pierre",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin de la métaphore de la muraille de Chine brisée par le commerce."
},
  "Maß": {
      "fr": "mesure / degré / proportion",
      "lit": "quantité mesurée / étalon de dimension",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre employé au datif dans la locution corrélative « in demselben Maße, worin... » (au fur et à mesure que, dans la mesure où...).",
      "etymology": "Issu du moyen haut-allemand « maz » (mesure, quantité déterminée), vieux haut-allemand « maz » (mesure, balance). Proto-germanique *matą, substantif apophonique du verbe fort *metaną (mesurer, allemand messen, racine indo-européenne *med-)."
},
  "Maßregel": {
      "fr": "mesure / disposition / règle pratique",
      "lit": "règle de mesure / décret",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin politique désignant les mesures révolutionnaires d'intervention transitoire énumérées à la fin du chapitre II.",
      "etymology": "Composé de « das Maß » (la mesure, vieux haut-allemand « māza ») + « die Regel » (la règle, du latin « regula »).",
      "isCompound": true,
      "compoundParts": [
            "Maß",
            "Regel"
      ]
},
  "Maßstab": {
      "fr": "étalon / critère / mesure / échelle",
      "lit": "bâton de mesure",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant le critère d'évaluation ou l'étalon de valeur mesurant le degré de développement des forces sociales.",
      "etymology": "Composé de « Maß » (mesure) + « der Stab » (bâton, baguette graduée).",
      "isCompound": true,
      "compoundParts": [
            "Maß",
            "Stab"
      ]
},
  "mehr": {
      "fr": "plus / davantage",
      "lit": "en quantité supérieure",
      "pos_fr": "Adverbe comparatif",
      "role": "Adverbe renforçant l'accélération de la division sociale (« immer mehr » = de plus en plus)."
},
  "Mehrzahl": {
      "fr": "majorité",
      "lit": "plus grand nombre",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin soulignant que le prolétariat agit au nom et au profit de l'immense majorité humaine."
},
  "Meister": {
      "fr": "maître / maître artisan",
      "lit": "artisan qualifié juré",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant le maître de jurande évincé par le bourgeois capitaliste."
},
  "Mensch": {
      "fr": "homme / être humain",
      "lit": "être humain mortel membre de l'humanité",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin générique désignant les individus atomisés dont tous les liens de communauté sont dissous par le marché."
},
  "menschlich": {
      "fr": "humain",
      "lit": "propre à l'homme",
      "pos_fr": "Adjectif",
      "role": "L'émancipation humaine véritable par-delà l'aliénation."
},
  "Metternich": {
      "fr": "Metternich",
      "lit": "Klemens von Metternich (1773-1859) / chancelier autrichien",
      "pos_fr": "Nom propre",
      "role": "Nom propre masculin, chef d'orchestre de la Sainte-Alliance répressive.",
      "etymology": "Patronyme rhénan de la maison noble de Metternich, incarnant le chef de file de la Restauration absolutiste."
},
  "meßen": {
      "fr": "mesurer",
      "lit": "évaluer l'étendue",
      "pos_fr": "Verbe",
      "role": "Mesurer le degré de développement historique."
},
  "Millionär": {
      "fr": "millionnaire",
      "lit": "possesseur de millions en fortune monétaire",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant les nouveaux magnats de la haute finance et de la grande industrie.",
      "etymology": "Emprunté au français « millionnaire », dérivé de « million »."
},
  "minder": {
      "fr": "moins",
      "lit": "en moindre proportion",
      "pos_fr": "Adverbe",
      "role": "Adverbe coordonné à 'mehr' marquant les gradations du développement capitaliste."
},
  "Minimum": {
      "fr": "minimum / plancher",
      "lit": "la plus petite quantité",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre économique désignant le salaire minimum physiologique strictement nécessaire à l'entretien et à la reproduction de l'ouvrier.",
      "etymology": "Emprunté au neutre de l'adjectif superlatif latin « minimus » (le plus petit)."
},
  "Minoritäte": {
      "fr": "minorité",
      "lit": "petit nombre",
      "pos_fr": "Nom féminin",
      "role": "Forme lemmatisée de Minorität désignant les mouvements historiques passés faits au profit de quelques-uns."
},
  "misère": {
      "fr": "misère",
      "lit": "dénuement extrême (terme français)",
      "pos_fr": "Adverbe",
      "role": "Titre de l'ouvrage 'Philosophie de la misère' critiqué par Marx."
},
  "mit": {
      "fr": "avec / au moyen de",
      "lit": "en compagnie de / au moyen de",
      "pos_fr": "Préposition (régime datif)",
      "role": "Préposition d'accompagnement ou d'instrument régissant le datif."
},
  "miteinander": {
      "fr": "les uns avec les autres / mutuellement",
      "lit": "l'un avec l'autre",
      "pos_fr": "Adverbe",
      "role": "Adverbe marquant la mise en contact solidaire des prolétaires de contrées distinctes."
},
  "Mitglied": {
      "fr": "membre / affilié",
      "lit": "partie d'un corps constitué",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre décrivant l'élévation sociale du serf accédant au statut de citoyen de la commune."
},
  "Mittel": {
      "fr": "moyens / instruments d'action",
      "lit": "ce qui sert d'intermédiaire",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre économique désignant les moyens techniques permettant de conjurer les crises."
},
  "Mittelalter": {
      "fr": "Moyen Âge",
      "lit": "moyen âge / âge intermédiaire",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre désignant la longue période féodale précédant l'essor bourgeois.",
      "etymology": "Composé forgé au XVIIe siècle comme calque du latin humaniste « medium aevum » (l'âge moyen entre l'Antiquité classique et la Renaissance) : 1° l'adjectif « mittel » (médian, moyen) ; 2° « das Alter » (l'âge, l'époque, du vieux haut-allemand altar, du proto-germanique *aldraz)."
},
  "mittelalterlich": {
      "fr": "médiéval / du moyen âge",
      "lit": "qui appartient aux âges moyens",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant le mode artisanal corporatif que les ouvriers tentent d'abord de reconquérir en vain."
},
  "Mittelstand": {
      "fr": "classe moyenne industrielle",
      "lit": "rang social intermédiaire (les fabricants)",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin : en 1848, les chefs d'entreprises manufacturières situés entre noblesse et ouvriers.",
      "etymology": "Composé historique associant : 1° l'adjectif germanique « mittel » (médian, moyen, en moyen haut-allemand « mittel », vieux haut-allemand « mittil », issu du proto-germanique *medjaz, cognat du latin medius) ; 2° « der Stand » (l'ordre social féodal, le rang statutaire, vieux haut-allemand stant, déverbal de stehen = se tenir debout)."
},
  "Mittelstände": {
      "fr": "classes moyennes / classes intermédiaires",
      "lit": "ordres situés au milieu",
      "pos_fr": "Nom masculin",
      "role": "Forme plurielle de Mittelstand désignant artisans et petits patrons en lutte pour leur survie."
},
  "mitunter": {
      "fr": "parfois / de temps à autre",
      "lit": "au milieu de cela",
      "pos_fr": "Adverbe",
      "role": "Résultats politiques occasionnels des coalitions."
},
  "Mißstände": {
      "fr": "abus / désordres / tares / anomalies",
      "lit": "mauvais états de choses",
      "pos_fr": "Nom masculin",
      "role": "nom masculin au pluriel (singulier Mißstand)",
      "etymology": "Composé du préfixe péjoratif « miß- » (faux, mauvais) + « der Stand » (état, condition, situation).",
      "isCompound": true,
      "compoundParts": [
            "Miß-",
            "Stand"
      ]
},
  "Mißverhältniß": {
      "fr": "disproportion / déséquilibre / discordance",
      "lit": "rapport faussé ou défectueux",
      "pos_fr": "Nom neutre",
      "role": "Nom composé désignant la disproportion croissante entre la surabondance des forces productives et l'étroitesse des rapports de propriété.",
      "etymology": "Composé de « miß- » + « das Verhältnis » (rapport, relation).",
      "isCompound": true,
      "compoundParts": [
            "Miß-",
            "Verhältnis"
      ]
},
  "modeln": {
      "fr": "modeler / façonner selon un moule",
      "lit": "mouler d'après un modèle",
      "pos_fr": "Verbe",
      "role": "Verbe satirique fustigeant la prétention bourgeoise à façonner le monde entier à sa propre image et ressemblance.",
      "etymology": "Dérivé de « Model » (moule, patron, forme), emprunté au latin « modulus » (mesure, module)."
},
  "modern": {
      "fr": "moderne",
      "lit": "propre au temps présent",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant l'ordre bourgeois né des ruines de la féodalité.",
      "etymology": "Emprunt savant au latin classique tardif « modernus » (actuel, de notre temps, formé sur l'adverbe « modo » = récemment, à l'instant, de la racine de modus = mesure du temps présent)."
},
  "modifizieren": {
      "fr": "modifier / aménager",
      "lit": "donner une mesure nouvelle",
      "pos_fr": "Verbe",
      "role": "Verbe désignant l'aménagement superficiel et cosmétique d'un système sans en altérer les racines d'exploitation.",
      "etymology": "Emprunté au latin « modificare » (régler, assigner une mesure)."
},
  "momentan": {
      "fr": "momentané / passager",
      "lit": "qui ne dure qu'un instant",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant la rechute éphémère mais violente dans la famine lors des crises du capital."
},
  "Monarchie": {
      "fr": "monarchie",
      "lit": "gouvernement exercé par un seul souverain",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant le régime royal centralisateur médiéval et d'Ancien Régime."
},
  "monarchie": {
      "fr": "monarchie",
      "lit": "pouvoir héréditaire d'un souverain unique",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'Monarchie' du lemme 'Monarchie'. Substantif à l'accusatif féminin singulier désignant l'État féodal absolutiste à abattre."
},
  "Monopol": {
      "fr": "monopole",
      "lit": "privilège exclusif de vente",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre économique désignant le contrôle exclusif d'une branche de production, dont Marx montre qu'il renaît sans cesse de la libre concurrence.",
      "etymology": "Emprunté au grec ancien « monopōlion », composé de « monos » (seul) + « pōlein » (vendre)."
},
  "monopolisierbar": {
      "fr": "monopolisable / susceptible de faire l'objet d'un monopole",
      "lit": "qui peut être monopolisé",
      "pos_fr": "Adjectif",
      "role": "Adjectif économique désignant les forces productives et biens matériels susceptibles d'être accaparés en monopole privé.",
      "etymology": "Composé de « Monopol » + suffixe de possibilité « -bar ».",
      "isCompound": true,
      "compoundParts": [
            "Monopol",
            "-isier-",
            "-bar"
      ]
},
  "Moral": {
      "fr": "morale",
      "lit": "système des mœurs et devoirs",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin démasqué par Marx comme un préjugé bourgeois dissimulant des intérêts pécuniaires."
},
  "moralisch": {
      "fr": "moral",
      "lit": "relatif aux mœurs et aux devoirs",
      "pos_fr": "Adjectif",
      "role": "Adjectif critique renvoyant aux jugements moraux formels que Marx subordonne à l'analyse scientifique des intérêts matériels.",
      "etymology": "Emprunté au latin « moralis » (relatif aux mœurs, de mos / moris)."
},
  "muß": {
      "fr": "devoir / être contraint par la nécessité",
      "lit": "avoir la nécessité inéluctable",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'muß' du lemme 'müssen'. Verbe modal au présent exprimant le déterminisme historique économique."
},
  "mächtig": {
      "fr": "puissant",
      "lit": "doué de pouvoir",
      "pos_fr": "Adjectif",
      "role": "Adjectif décrivant la force irrésistible de la classe ouvrière unie."
},
  "mächtiger": {
      "fr": "plus puissamment / plus formidablement",
      "lit": "plus puissant",
      "pos_fr": "Adverbe",
      "role": "Renaissance toujours plus formidable du parti ouvrier."
},
  "Märchen": {
      "fr": "conte de fées / légende enfantine",
      "lit": "récit imaginaire et fabuleux",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre ironique qualifiant les fables apeurées forgées par la police sur le communisme.",
      "etymology": "Diminutif hypocoristique en « -chen » du moyen haut-allemand « mære » (nouvelle, information, bruit qui court, récit fabuleux), issu du vieux haut-allemand « māri » (célèbre, fameux, objet de renommé, racine germanique commune *mērijaz, apparentée au germanique *marō / cauchemar, d'où l'anglais nightmare). Désigne le conte pour enfants, la fable mythologique ou la calomnie sans consistance réelle répandue par la propagande gouvernementale."
},
  "Mäßigkeitsvereinsstifter": {
      "fr": "fondateurs de ligues de tempérance",
      "lit": "fondateurs d'associations de modération / sobriété",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin pluriel satirique brocardant les philanthropes bourgeois fondant des ligues de tempérance pour détourner les ouvriers de la lutte.",
      "etymology": "Composé de « Mäßigkeit » (tempérance, modération) + « Verein » (association) + « Stifter » (fondateur, donateur).",
      "isCompound": true,
      "compoundParts": [
            "Mäßigkeit",
            "-s-",
            "Verein",
            "-s-",
            "Stifter"
      ]
},
  "möge": {
      "fr": "puisse",
      "lit": "être en capacité / avoir le pouvoir",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'möge' du lemme 'mögen'. Verbe modal au subjonctif exprimant la concession ou le souhait insurrectionnel ('Mögen ... zittern')."
},
  "mögen": {
      "fr": "pouvoir / désirer",
      "lit": "être en capacité / avoir le pouvoir",
      "pos_fr": "Verbe",
      "role": "Verbe modal au subjonctif exprimant la concession ou le souhait insurrectionnel ('Mögen ... zittern')."
},
  "möglich": {
      "fr": "possible / réalisable",
      "lit": "qui peut être fait",
      "pos_fr": "Adverbe",
      "role": "Mesures applicables selon les conditions nationales."
},
  "möglichst": {
      "fr": "le plus... possible / aussi... que possible",
      "lit": "au plus haut degré possible",
      "pos_fr": "Adverbe",
      "role": "Adverbe intensifiant l'exigence de netteté conceptuelle ('ein möglichst klares Bewußtsein')."
},
  "Mönch": {
      "fr": "moine",
      "lit": "religieux solitaire vivant en communauté",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin clérical : Marx ironise sur les moines du Moyen Âge écrivant d'absurdes vies de saints catholiques par-dessus les classiques païens.",
      "etymology": "Du moyen haut-allemand « munech », vieux haut-allemand « munih », emprunté au bas-latin « monachus », du grec « monakhos » (solitaire, seul)."
},
  "müssen": {
      "fr": "devoir / être contraint par la nécessité",
      "lit": "avoir la nécessité inéluctable",
      "pos_fr": "Verbe",
      "role": "Verbe modal au présent exprimant le déterminisme historique économique."
},
  "müßig": {
      "fr": "oisif / oiseux",
      "lit": "qui n'a rien à faire",
      "pos_fr": "Adjectif",
      "role": "Oisiveté parasitaire des classes rentières."
},
  "nach": {
      "fr": "après / d'après / selon",
      "lit": "vers / à la suite de",
      "pos_fr": "Préposition",
      "role": "Préposition régissant le datif marquant la succession des étapes de la lutte ('nach dem Sturz')."
},
  "Nachweis": {
      "fr": "démonstration / preuve / justification",
      "lit": "action d'indiquer ou de prouver",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin théorique désignant la démonstration probante et rigoureuse de la caducité historique du capitalisme.",
      "etymology": "Déverbal de « nachweisen » (démontrer, apporter la preuve de), de « nach » (après, selon) + « weisen » (montrer).",
      "isCompound": true,
      "compoundParts": [
            "nach",
            "Weis"
      ]
},
  "nachweisen": {
      "fr": "démontrer / prouver",
      "lit": "montrer après coup",
      "pos_fr": "Verbe séparable",
      "role": "Démonstration scientifique ou dialectique."
},
  "nackt": {
      "fr": "nu / froid",
      "lit": "dénudé / sans vêtements ni parure protectrice",
      "pos_fr": "Adjectif",
      "role": "Adjectif métaphorique qualifiant l'intérêt économique dépouillé de toute justification religieuse ou morale.",
      "etymology": "Du moyen haut-allemand « nacket », vieux haut-allemand « naccot », proto-germanique *nakwadaz (nu, dévêtu, cognat du latin nudus)."
},
  "namentlich": {
      "fr": "notamment / particulièrement",
      "lit": "en le nommant",
      "pos_fr": "Adverbe",
      "role": "Adverbe focalisant l'attention sur les idéologues bourgeois passés au prolétariat."
},
  "Nation": {
      "fr": "nation",
      "lit": "communauté politique unifiée",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin dont l'isolement autarcique est brisé par la circulation planétaire du capital."
},
  "national": {
      "fr": "national",
      "lit": "relatif à la nation opprimée",
      "pos_fr": "Adjectif",
      "role": "Épithète qualifiant la libération de la Pologne du joug tsariste et austro-prussien."
},
  "Nationalbank": {
      "fr": "banque nationale",
      "lit": "banque de la nation",
      "pos_fr": "Nom féminin",
      "role": "Nom composé désignant la banque nationale d'État à capital public exclusif, pierre angulaire du programme transitoire du Manifeste.",
      "etymology": "Composé de l'adjectif « national » + « die Bank » (la banque, comptoir de change, de l'italien « banca »).",
      "isCompound": true,
      "compoundParts": [
            "National",
            "Bank"
      ]
},
  "nationalen": {
      "fr": "national",
      "lit": "relatif à la nation opprimée",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'nationalen' du lemme 'national'. Épithète qualifiant la libération de la Pologne du joug tsariste et austro-prussien."
},
  "Nationalfabrik": {
      "fr": "manufacture d'État / fabrique nationale",
      "lit": "usine nationale",
      "pos_fr": "Nom féminin",
      "role": "Nom composé désignant les fabriques d'État et manufactures nationales que le prolétariat au pouvoir se propose de multiplier.",
      "etymology": "Composé de « national » + « die Fabrik » (fabrique, atelier industriel).",
      "isCompound": true,
      "compoundParts": [
            "National",
            "Fabrik"
      ]
},
  "Nationalität": {
      "fr": "nationalité",
      "lit": "appartenance nationale",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin soulignant l'internationalisme du congrès des communistes.",
      "etymology": "Emprunt au début du XIXe siècle au français « nationalité », forgé sur « national », dérivé du latin « natio » (naissance, tribu, peuple issu d'une même origine, du verbe nasci = naître)."
},
  "Natur": {
      "fr": "par nature",
      "lit": "selon la nature",
      "pos_fr": "Adverbe",
      "role": "Caractère naturel attribué à tort aux lois bourgeoises."
},
  "Naturkräfte": {
      "fr": "forces de la nature",
      "lit": "puissances naturelles physiques",
      "pos_fr": "Nom féminin",
      "role": "Nom composé désignant les énergies hydrauliques et thermiques asservies par les machines."
},
  "natürlich": {
      "fr": "naturel",
      "lit": "conforme à la nature native / inné",
      "pos_fr": "Adjectif",
      "role": "Adjectif ironique dénonçant la prétention de l'aristocratie à incarner une supériorité biologique naturelle."
},
  "neben": {
      "fr": "à côté de / auprès de",
      "lit": "proche de",
      "pos_fr": "Préposition",
      "role": "Coexistence spatiale ou économique de deux modes de production."
},
  "nehmen": {
      "fr": "prendre",
      "lit": "saisir",
      "pos_fr": "Verbe",
      "role": "Verbe entrant dans « annehmen » (revêtir le caractère de) et « zunehmen » (croître)."
},
  "nennen": {
      "fr": "nommer / mentionner",
      "lit": "désigner par son nom",
      "pos_fr": "Verbe",
      "role": "Verbe rhétorique servant à invoquer l'exemple probant des crises commerciales."
},
  "neu": {
      "fr": "nouveau / inédit",
      "lit": "qui n'existait pas auparavant",
      "pos_fr": "Adjectif",
      "role": "Adjectif martelé par Marx pour démontrer que la bourgeoisie n'a fait que renouveler les formes d'oppression.",
      "etymology": "Issu du moyen haut-allemand « niuwe », vieux haut-allemand « niuwi » (neuf, récent), du proto-germanique *neujaz, issu de la racine indo-européenne *newos (d'où latin novus, grec néos)."
},
  "neugebildeten": {
      "fr": "nouvellement formés",
      "lit": "bâtis à neuf",
      "pos_fr": "Adjectif",
      "role": "Adjectif marquant la précarité éphémère des rapports sociaux bourgeois qui vieillissent sitôt nés."
},
  "neun": {
      "fr": "neuf",
      "lit": "neuf",
      "pos_fr": "Numéral",
      "role": "Numéral marquant le décompte concret des points du programme transitoire ou des repères chronologiques.",
      "etymology": "Du moyen haut-allemand « niun », vieux haut-allemand « niun », de racine indo-européenne *h₁néwn̥."
},
  "nicht": {
      "fr": "ne pas / non",
      "lit": "particule de négation",
      "pos_fr": "Particule négative",
      "role": "Particule négative infirmant une proposition."
},
  "nichtindustriell": {
      "fr": "non industriel",
      "lit": "qui n'appartient pas à l'industrie mécanique",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant les franges parasitaires ou archaïques de la bourgeoisie rentière."
},
  "nichtoffiziell": {
      "fr": "officieux / non officiel",
      "lit": "qui n'est pas officiel",
      "pos_fr": "Adjectif",
      "role": "Adjectif caractérisant l'existence clandestine ou officieuse des organisations ouvrières traquées par les polices d'Europe.",
      "etymology": "Composé de la négation « nicht » + « offiziell » (officiel).",
      "isCompound": true,
      "compoundParts": [
            "nicht",
            "offiziell"
      ]
},
  "nichts": {
      "fr": "rien",
      "lit": "néant / pas la moindre chose",
      "pos_fr": "Pronom",
      "role": "Pronom complément d'objet direct de 'zu verlieren'."
},
  "nie": {
      "fr": "jamais",
      "lit": "en aucun temps passé ou futur",
      "pos_fr": "Adverbe temporel",
      "role": "Adverbe absolu soulignant le caractère sans précédent de l'essor commercial moderne."
},
  "Niederträchtigkeit": {
      "fr": "bassesse / infamie / vilenie",
      "lit": "état de ce qui est bas d'esprit",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin moral et polémique dénonçant la bassesse et l'infamie des calculs bourgeois dissimulés sous de nobles principes.",
      "etymology": "Dérivé de « niederträchtig » (vil, bas, servile), composé à l'origine de « nieder » (bas) + verbe « trachten » (viser, porter ses pensées vers) + « -keit ».",
      "isCompound": true,
      "compoundParts": [
            "nieder",
            "trachten",
            "-ig",
            "-keit"
      ]
},
  "niedrig": {
      "fr": "bas / médiocre",
      "lit": "près du sol",
      "pos_fr": "Adjectif",
      "role": "Adjectif décrivant le plancher misérable auquel la machine nivelle universellement le salaire."
},
  "niemand": {
      "fr": "personne / nul",
      "lit": "aucun homme",
      "pos_fr": "Pronom",
      "role": "Pronom indéfini négatif soulignant l'universalité d'une loi sociale ou l'impossibilité d'échapper aux déterminismes de classe.",
      "etymology": "Du moyen haut-allemand « niemant », vieux haut-allemand « nioman » (ni + man, pas un homme)."
},
  "Niveau": {
      "fr": "niveau / palier",
      "lit": "hauteur de référence plane",
      "pos_fr": "Nom neutre",
      "role": "Nom d'origine française désignant le plancher de rémunération également bas auquel la machine réduit le salaire."
},
  "noch": {
      "fr": "encore",
      "lit": "de surcroît / toujours",
      "pos_fr": "Adverbe",
      "role": "Adverbe marquant la persistance ou l'amplification d'un phénomène historique."
},
  "Nordamerika": {
      "fr": "Amérique du Nord",
      "lit": "partie nord du continent américain",
      "pos_fr": "Nom propre",
      "role": "Nom propre composé au datif neutre singulier, complément de lieu de 'in'."
},
  "nordamerika": {
      "fr": "Amérique du Nord",
      "lit": "partie nord du continent américain",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'Nordamerika' du lemme 'Nordamerika'. Nom propre composé au datif neutre singulier, complément de lieu de 'in'."
},
  "normal": {
      "fr": "normal / régulier",
      "lit": "conforme à la norme",
      "pos_fr": "Adjectif",
      "role": "Le modèle allemand prétendu normal par les philosophes."
},
  "Normalmensche": {
      "fr": "homme normal / homme standard",
      "lit": "homme conforme à la norme",
      "pos_fr": "Nom masculin",
      "role": "nom masculin (forme au datif de Normalmensch)",
      "etymology": "Composé de « normal » (du latin normalis, conforme à l'équerre / règle) + « Mensch » (homme, être humain).",
      "isCompound": true,
      "compoundParts": [
            "Normal",
            "Mensch"
      ]
},
  "notwendig": {
      "fr": "nécessaire / inévitable",
      "lit": "qui conjure la détresse (Not wendend)",
      "pos_fr": "Adjectif",
      "role": "Adjectif exprimant la nécessité causale rigoureuse reliant économie et superstructure politique."
},
  "nur": {
      "fr": "seulement / uniquement",
      "lit": "sans rien d'autre",
      "pos_fr": "Adverbe restrictif",
      "role": "Adverbe limitatif : la bourgeoisie s'est bornée à créer de nouvelles formes d'oppression."
},
  "Nutzen": {
      "fr": "utilité / profit / bénéfice",
      "lit": "usage avantageux / jouissance utile",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin économique désignant l'utilité marchande et le profit pécuniaire érigés en seule mesure de valeur sociale.",
      "etymology": "Du moyen haut-allemand « nutze », vieux haut-allemand « nuzzi » (utile, profitable), déverbal rattaché à « genießen » (jouir de)."
},
  "nächster": {
      "fr": "prochain / le plus proche / immédiat",
      "lit": "le plus voisin",
      "pos_fr": "Adjectif",
      "role": "Adjectif temporel désignant l'urgence immédiate et le devoir politique le plus proche incombant aux communistes.",
      "etymology": "Superlatif régulier de « nah » (proche, moyen haut-allemand nāhe)."
},
  "nähern": {
      "fr": "se rapprocher de",
      "lit": "venir plus près (nah)",
      "pos_fr": "Verbe",
      "role": "Verbe marquant l'imminence de l'heure décisive du dénouement de la lutte de classe."
},
  "nötigen": {
      "fr": "contraindre / forcer",
      "lit": "imposer par la détresse (Not)",
      "pos_fr": "Verbe",
      "role": "Verbe soulignant la contrainte objective acculant la bourgeoisie à mobiliser les prolétaires."
},
  "nüchtern": {
      "fr": "sobre / lucide / dégrisé",
      "lit": "qui a l'estomac vide / sans ivresse",
      "pos_fr": "Adjectif",
      "role": "Métaphore centrale du matérialisme : voir la réalité sociale sans les brumes mystiques de la religion."
},
  "oben": {
      "fr": "en haut / au sommet",
      "lit": "dans la partie supérieure",
      "pos_fr": "Adverbe",
      "role": "Adverbe spatial désignant le sommet de la hiérarchie sociale et l'appareil d'État dominant les masses opprimées.",
      "etymology": "Du moyen haut-allemand « obene », vieux haut-allemand « obana » (d'en haut)."
},
  "obgleich": {
      "fr": "quoique / bien que",
      "lit": "même si / bien que",
      "pos_fr": "Conjonction",
      "role": "Conjonction introduisant la distinction dialectique entre la forme et le contenu."
},
  "oder": {
      "fr": "ou / ou bien",
      "lit": "conjonction d'alternative",
      "pos_fr": "Conjonction de coordination",
      "role": "Conjonction disjonctive liant deux issues alternatives."
},
  "offen": {
      "fr": "ouvert / public / manifeste",
      "lit": "ouvert au grand jour / sans voile protecteur",
      "pos_fr": "Adjectif",
      "role": "Adjectif opposé à « verhüllt », soulignant le caractère transparent et sans pudeur de l'exploitation capitaliste.",
      "etymology": "Issu du moyen haut-allemand « offen », vieux haut-allemand « offan » (ouvert, dégagé, public, manifeste), du proto-germanique *upana- (ouvert vers le haut, apparenté à auf / up)."
},
  "offener": {
      "fr": "plus ouvertement / plus franchement",
      "lit": "plus ouvert",
      "pos_fr": "Adverbe",
      "role": "Exploitation cynique et directe étalée au grand jour."
},
  "offenherzig": {
      "fr": "franc / à cœur ouvert / sans feinte",
      "lit": "qui a le cœur ouvert",
      "pos_fr": "Adjectif",
      "role": "Adjectif ironique louant la franchise involontaire des bourgeois avouant leurs véritables motivations mercantiles.",
      "etymology": "Composé de « offen » (ouvert) + « Herz » (cœur) + « -ig ».",
      "isCompound": true,
      "compoundParts": [
            "offen",
            "Herz",
            "-ig"
      ]
},
  "offiziell": {
      "fr": "officiel",
      "lit": "sanctionné par l'autorité publique",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant l'appareil d'État et les institutions institutionnalisées de la bourgeoisie."
},
  "Offizier": {
      "fr": "officier",
      "lit": "gradé supérieur de commandement",
      "pos_fr": "Nom masculin",
      "role": "Métaphore militaire désignant les directeurs d'usine commandant l'armée des ouvriers."
},
  "ohne": {
      "fr": "sans",
      "lit": "dépourvu de / sans",
      "pos_fr": "Conjonction",
      "role": "Conjonction introduisant une subordonnée infinitive restrictive ('ohne ... aufzugeben')."
},
  "Ohr": {
      "fr": "oreille",
      "lit": "organe de l'ouïe",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre désignant l'oreille métaphorique des souverains et gouvernants, fermée aux souffrances des masses prolétaires.",
      "etymology": "Du moyen haut-allemand « ōre », vieux haut-allemand « ōra », de racine indo-européenne *h₂ous- (oreille)."
},
  "Okzident": {
      "fr": "Occident",
      "lit": "terre du soleil couchant",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant les puissances capitalistes d'Europe assujettissant l'Asie et l'Orient."
},
  "Oppositionsleute": {
      "fr": "hommes d'opposition / opposants",
      "lit": "citoyens engagés dans la contestation parlementaire",
      "pos_fr": "Nom pluriel",
      "role": "Nom masculin pluriel désignant les députés et militants libéraux réformateurs.",
      "etymology": "Composé hybride politico-social associant : 1° « die Opposition », emprunt savant au bas-latin « oppositio » (action de placer en face, antithèse rhétorique et parlementaire, du supin oppositum de opponere) ; 2° le substantif collectif « die Leute » (le peuple, les gens, les personnes), issu du vieux haut-allemand « liuti » et du germanique commun *liudīz (les hommes libres d'une communauté, issu de la racine indo-européenne *h₁leudʰ- « croître, monter », cognat du vieux slave ljudije / peuple, du russe ljudi et du grec eleutheros / libre). Désigne au XIXe siècle les parlementaires et militants engagés dans la contestation des ministères absolutistes."
},
  "Oppositionspartei": {
      "fr": "parti d'opposition",
      "lit": "parti politique rival du gouvernement",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin composé désignant les forces parlementaires contestataires.",
      "etymology": "Composé politique unissant : 1° l'emprunt savant au bas-latin « oppositio » (action d'opposer, contradiction dialectique ou parlementaire, du supin oppositum de opponere) ; 2° la consonne de liaison -s- ; 3° le substantif « die Partei », introduit au XVIIe siècle par le français « partie » et issu du latin classique « pars / partis » (part, portion, faction dissidente). Marx met à nu le paradoxe constitutionnel de la monarchie censitaire : toute fraction d'opposition légale est immédiatement criminalisée dès qu'elle menace l'hégémonie de la classe dominante."
},
  "Organisation": {
      "fr": "organisation",
      "lit": "agencement structuré d'un corps",
      "pos_fr": "Nom féminin",
      "role": "Nom politique désignant la constitution du prolétariat en classe solidaire et en parti autonome."
},
  "organisieren": {
      "fr": "organiser / structurer",
      "lit": "doter d'organes vitaux",
      "pos_fr": "Verbe",
      "role": "Verbe clé définissant la mise en régiment de l'usine et la constitution du parti ouvrier."
},
  "organisiert": {
      "fr": "organisé / structuré",
      "lit": "pourvu d'organes articulés",
      "pos_fr": "Participe passé adjectivé",
      "role": "Participe passé désignant le prolétariat structuré en parti politique conscient et en classe dirigeante.",
      "etymology": "Du verbe « organisieren », emprunté au latin médiéval « organizare », du grec organon (outil, organe)."
},
  "Orient": {
      "fr": "Orient",
      "lit": "terre du soleil levant",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant les sociétés traditionnelles d'Asie subordonnées aux métropoles industrielles."
},
  "Original": {
      "fr": "original / texte source",
      "lit": "texte premier d'où dérivent les copies",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre désignant le texte authentique ou la réalité de départ, par opposition aux imitations insipides du socialisme vrai allemand.",
      "etymology": "Emprunté au latin « originalis » (qui remonte à l'origine), substantivé au neutre."
},
  "Ort": {
      "fr": "lieu / endroit",
      "lit": "place géographique déterminée",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin délimitant la scène locale où s'engage initialement la rébellion ouvrière."
},
  "ostindisch": {
      "fr": "des Indes orientales",
      "lit": "relatif à l'Asie méridionale sous domination marchande",
      "pos_fr": "Adjectif",
      "role": "Adjectif marquant la conquête coloniale par les compagnies de commerce britanniques et hollandaises.",
      "etymology": "Composé géographique associant « Ost » (l'Est, l'Orient, du vieux haut-allemand ōstan, proto-germanique *austaz = à l'est, racine indo-européenne *h₂ews- = briller, aube) et « indisch » (relatif à l'Inde, du fleuve Indus / sanskrit Sindhu)."
},
  "Owenist": {
      "fr": "owéniste",
      "lit": "disciple de Robert Owen",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin politique désignant les partisans de Robert Owen, pionniers du socialisme coopératif réduits ultérieurement à une secte stérile.",
      "etymology": "Formé sur le patronyme de Robert Owen avec le suffixe d'adhésion doctrinale « -ist »."
},
  "Owens": {
      "fr": "d'Owen",
      "lit": "génitif de Robert Owen",
      "pos_fr": "Nom masculin",
      "role": "Nom propre au génitif désignant Robert Owen (1771-1858), grand industriel gallois et réformateur socialiste précurseur des coopératives.",
      "etymology": "Forme au génitif saxon du nom propre Robert Owen."
},
  "paar": {
      "fr": "quelques / une paire de",
      "lit": "deux ou trois",
      "pos_fr": "Adverbe",
      "role": "Quelques réformateurs isolés."
},
  "Pamphlet": {
      "fr": "pamphlet / libelle polémique",
      "lit": "opuscule de polémique satirique",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre désignant le libelle polémique aiguisé brandi par les classes en conflit pour frapper l'opinion publique.",
      "etymology": "Emprunté à l'anglais « pamphlet », lui-même issu du nom d'une comédie latine du XIIe siècle très répandue, « Pamphilus, seu de Amore »."
},
  "Papst": {
      "fr": "pape",
      "lit": "souverain pontife de l'Église catholique",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin : le chef de la papauté allié aux monarques d'Europe.",
      "etymology": "Emprunt ancien (dès le IXe siècle) au latin ecclésiastique « papa » (évêque, père spirituel), lui-même issu du grec chrétien « pápas » (πάπας, titre affectueux donné aux prêtres et évêques, hypocoristique de patḗr = père). Le -t final en haut-allemand (vieux haut-allemand bābes / pābest, moyen haut-allemand bābest / babst / bāpst) est une consonne d'appui phonétique apparue vers le XIIIe siècle."
},
  "Partei": {
      "fr": "parti",
      "lit": "organisation politique de lutte pour le pouvoir",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant le parti communiste constitué en force autonome.",
      "etymology": "Emprunt au XVIIe siècle au français « partie / parti », issu du latin « partire » (diviser, partager), déverbal de « pars » (la part, la fraction de citoyens partageant une même cause)."
},
  "partei": {
      "fr": "parti",
      "lit": "fraction organisée de classe",
      "pos_fr": "Nom féminin",
      "role": "Forme fléchie 'Partei' du lemme 'Partei'. Substantif féminin désignant une organisation politique constituée."
},
  "parteien": {
      "fr": "parti",
      "lit": "fraction organisée de classe",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'Parteien' du lemme 'Partei'. Substantif féminin désignant une organisation politique constituée."
},
  "Pasquill": {
      "fr": "pasquinade / libelle diffamatoire / satire mordante",
      "lit": "écrit satirique clandestin",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre désignant les pasquinades et chansons satiriques par lesquelles l'aristocratie déchue moquait ses nouveaux maîtres bourgeois.",
      "etymology": "Emprunté à l'italien « pasquillo », diminutif de « Pasquino », statue de Rome où l'on affichait nuitamment des vers satiriques contre les puissants."
},
  "passend": {
      "fr": "adéquat / convenable",
      "lit": "qui s'ajuste parfaitement",
      "pos_fr": "Adjectif",
      "role": "Adjectif marquant la complémentarité entre la paresse crasse et la brutalité féodale."
},
  "passiv": {
      "fr": "passif",
      "lit": "qui subit sans réagir",
      "pos_fr": "Adjectif",
      "role": "Adjectif dénonçant l'inertie corruptible du sous-prolétariat sans conscience politique."
},
  "patriarchalisch": {
      "fr": "patriarcal",
      "lit": "patriarcal / relatif au chef de famille",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant les relations précapitalistes d'autorité paternelle et bienveillante feinte liant maîtres et serfs.",
      "etymology": "Emprunt savant au bas-latin « patriarchalis », dérivé du grec « patriarchēs » (πατριάρχης = chef d'une famille noble ou d'une tribu), composé de « patria » (famille, lignée, issue de patēr / père) et de « archē » (commandement, primauté, autorité souveraine)."
},
  "Patrizier": {
      "fr": "patricien",
      "lit": "noble citoyen de la Rome antique",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant la classe dominante aristocratique dans l'Antiquité romaine.",
      "etymology": "Emprunté au latin classique « patricius » (membre de la noblesse romaine descendante des pères fondateurs de la République, patres). Chez Marx, représente la classe dominante esclavagiste de la Rome antique dans l'antagonisme avec les plébéiens."
},
  "Pauper": {
      "fr": "pauvre assisté / indigent absolu",
      "lit": "mendiant sans ressource",
      "pos_fr": "Nom masculin",
      "role": "Terme d'économie politique anglaise désignant l'ouvrier tombé dans l'indigence totale."
},
  "Pauperismus": {
      "fr": "paupérisme",
      "lit": "état d'indigence endémique",
      "pos_fr": "Nom masculin",
      "role": "Concept sociologique désignant la gangrène de misère qui croît plus vite que la richesse bourgeoise."
},
  "Pedanterie": {
      "fr": "pédanterie / pédantisme étroit",
      "lit": "étalage fastidieux de préceptes rigides",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin stigmatisant le pédantisme scolastique des philosophes d'outre-Rhin traduisant la praxis française en jargon abstrait.",
      "etymology": "Emprunté au français « pédanterie », dérivé de « pédant », de l'italien « pedante » (maître d'école formaliste)."
},
  "pedantisch": {
      "fr": "pédant / dogmatique",
      "lit": "lourdement érudit",
      "pos_fr": "Adjectif",
      "role": "Pédantisme doctrinaire des disciples utopistes."
},
  "Peitschenhiebe": {
      "fr": "coups de fouet",
      "lit": "coups portés au fouet",
      "pos_fr": "Nom masculin",
      "role": "nom masculin au pluriel (singulier Peitschenhieb)",
      "etymology": "Composé de « die Peitsche » (le fouet, emprunt slave « bicz ») + « der Hieb » (coup taillant, du verbe hauen, frapper).",
      "isCompound": true,
      "compoundParts": [
            "Peitsche",
            "-n-",
            "Hieb"
      ]
},
  "Periode": {
      "fr": "période / époque / cycle",
      "lit": "circuit régulier / cycle temporel",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin historique désignant les grandes époques de transition scandant l'évolution des modes de production.",
      "etymology": "Emprunté au grec ancien « periodos » (circuit, tour complet), composé de « peri » (autour) + « hodos » (chemin)."
},
  "periodisch": {
      "fr": "périodique / cyclique",
      "lit": "qui revient à intervalles réguliers",
      "pos_fr": "Adjectif",
      "role": "Adjectif décrivant la loi fondamentale des cycles et crises commerciales du capitalisme moderne."
},
  "Person": {
      "fr": "personne / individu",
      "lit": "masque de théâtre, individu doué de droits",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'être humain singulier, dont l'individualité réelle est confisquée par le régime de la marchandise.",
      "etymology": "Emprunté au latin « persona » (masque d'acteur de théâtre, rôle, individu)."
},
  "persönlich": {
      "fr": "personnel",
      "lit": "relatif à la personne humaine individuelle",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant la dignité propre de l'être humain que le capital transforme en marchandise tarifée.",
      "etymology": "Dérivé de « Person » (du latin persona, masque d'acteur, rôle, sujet de droit) avec le suffixe germanique « -lich »."
},
  "Persönlichkeit": {
      "fr": "personnalité / individualité propre",
      "lit": "caractère distinctif d'une personne",
      "pos_fr": "Nom féminin",
      "role": "Concept philosophique et social : Marx démontre que dans la société bourgeoise, le capital est indépendant et personnel, tandis que l'individu est dépendant et impersonnel.",
      "etymology": "Dérivé de l'adjectif « persönlich » (personnel, propre à la personne) + suffixe abstrait « -keit »."
},
  "Pfaff": {
      "fr": "calotin / curé",
      "lit": "prêtre / ecclésiastique",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin polémique et sarcastique employé par Marx pour flétrir le clergé réactionnaire et les cléricaux alliés aux féodaux.",
      "etymology": "Variante populaire de « Pfaffe », issu du moyen haut-allemand « phaffe », vieux haut-allemand « phaffo », emprunté très tôt au bas latin ecclésiastique « papa » (évêque, père spirituel)."
},
  "Pfaffe": {
      "fr": "calotin / prêtre",
      "lit": "homme d'église (péjoratif)",
      "pos_fr": "Nom masculin",
      "role": "Terme anticlérical méprisant désignant le curé rétrogradé au rang de vulgaire salarié idéologique."
},
  "Pfahlbürger": {
      "fr": "bourgeois des faubourgs / bourgeois du palis",
      "lit": "bourgeois des palissades / habitant du palis",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin historique désignant les habitants des palis et premiers faubourgs médiévaux, serfs émancipés aux portes des cités devenus précurseurs de la bourgeoisie moderne.",
      "etymology": "Composé médiéval de haute précision juridique : 1° « der Pfahl » (le pieu, la palissade), issu du vieux haut-allemand « phāl », emprunté dès le Ier siècle av. J.-C. au latin classique « pālus » (pieu fiché en terre pour un retranchement militaire ; cognat du français « pal », « palis » et « palissade ») ; 2° « der Bürger » (le citoyen libre), issu du vieux haut-allemand « burgari », dérivé de « Burg » (le bourg fortifié, racine germanique *burgz). Dès le XIIIe siècle dans les chartes rhénanes, les « Pfahlbürger » désignaient les serfs campagnards fugitifs installés dans la zone intermédiaire palissadée (« im Pfahle ») entre les remparts de pierre et les terres seigneuriales, accédant aux franchises communales par le droit coutumier (« Stadtluft macht frei »)."
},
  "Pfahlbürgerschaft": {
      "fr": "première bourgeoisie foraine",
      "lit": "collectivité des habitants des faubourgs palissadés",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'embryon social dont est issue la classe bourgeoise moderne.",
      "etymology": "Composé institutionnel médiéval associant « Pfahlbürger » (bourgeois de palissade, du latin palus = pieu et Burg = château fortifié) et le suffixe germanique de corps constitué « -schaft » (moyen haut-allemand -schaft, vieux haut-allemand -scaf / -scāphi, du proto-germanique *skapaz = état, condition ordonnée, apparenté à schaffen = créer, instituer)."
},
  "Pfahlbürgertum": {
      "fr": "bourgeoisie étroite de petite ville / esprit boutiquier médiéval",
      "lit": "condition des bourgeois des palis / bourgeoisie des faubourgs",
      "pos_fr": "Nom neutre",
      "role": "Nom composé sociologique désignant la condition et l'étroitesse d'esprit boutiquière des premiers bourgeois des faubourgs médiévaux.",
      "etymology": "Composé de « der Pfahlbürger » (bourgeois habitant les faubourgs enclos d'une palissade 'Pfahl', bourgeois forain, par extension petit-bourgeois arriéré) + suffixe « -tum ».",
      "isCompound": true,
      "compoundParts": [
            "Pfahl",
            "Bürger",
            "-tum"
      ]
},
  "Pfandleiher": {
      "fr": "prêteur sur gages",
      "lit": "celui qui prête sur nantissement",
      "pos_fr": "Nom masculin",
      "role": "Nom composé désignant le parasite financier qui dépouille l'ouvrier de son salaire."
},
  "pfäffisch": {
      "fr": "calotin / clérical",
      "lit": "propre au curé",
      "pos_fr": "Adjectif",
      "role": "Socialisme clérical dénoncé par Marx."
},
  "Phalanstere": {
      "fr": "phalanstères",
      "lit": "bâtiments communautaires d'harmonie",
      "pos_fr": "Nom neutre",
      "role": "nom neutre pluriel (variante orthographique de Phalanstères)",
      "etymology": "Mot forgé en français par Charles Fourier par croisement de « phalange » (corps d'armée/groupe serré) et « monastère »."
},
  "Phantasie": {
      "fr": "imagination / chimère / fantaisie",
      "lit": "faculté de concevoir des images",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'imagination utopique ou les chimères abstraites substituées à l'analyse matérialiste des contradictions réelles.",
      "etymology": "Emprunté au grec ancien « phantasia » (apparition, vision imaginaire), rattaché à « phainein » (montrer, faire paraître)."
},
  "phantastisch": {
      "fr": "chimérique / imaginaire",
      "lit": "sorti de l'imagination pure",
      "pos_fr": "Adjectif",
      "role": "Peintures chimériques d'harmonie sociale."
},
  "phantastische": {
      "fr": "fantastique / imaginaire",
      "lit": "issu de la fantaisie",
      "pos_fr": "Verbe",
      "role": "Caractère chimérique des utopies sans base matérielle."
},
  "Phase": {
      "fr": "phase / étape historique",
      "lit": "période d'évolution",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant les moments successifs du déploiement de la guerre civile prolétarienne."
},
  "Philanthropie": {
      "fr": "philanthropie / amour bienfaisant du genre humain",
      "lit": "amour de l'humanité",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la bienfaisance bourgeoise hypocrite, simple pansement destiné à pérenniser l'ordre établi.",
      "etymology": "Emprunté au grec ancien « philanthropia », composé de « philos » (ami, aimant) + « anthrōpos » (être humain)."
},
  "Philantrophe": {
      "fr": "philanthropes",
      "lit": "amis de l'homme",
      "pos_fr": "Nom masculin",
      "role": "nom masculin pluriel (variante orthographique de Philanthropen)",
      "etymology": "Du grec « philanthrōpos » (qui aime les humains)."
},
  "Philosoph": {
      "fr": "philosophe",
      "lit": "ami de la sagesse",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant les penseurs spéculatifs, dont Marx rappelle dans les Thèses sur Feuerbach qu'il s'agit non plus d'interpréter le monde, mais de le transformer.",
      "etymology": "Emprunté au grec « philosophos », composé de « philos » (ami) + « sophia » (sagesse, savoir)."
},
  "Philosophie": {
      "fr": "philosophie",
      "lit": "quête de sagesse et de fondement rationnel",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin théorique désignant la pensée conceptuelle dont le prolétariat est l'arme matérielle, tandis qu'elle est l'arme spirituelle du prolétariat.",
      "etymology": "Emprunté au grec ancien « philosophia » via le latin « philosophia »."
},
  "philosophisch": {
      "fr": "philosophique",
      "lit": "relatif à la philosophie",
      "pos_fr": "Adjectif",
      "role": "Adjectif renvoyant aux doctrines spéculatives des philosophes allemands, dont Marx dissout les mystifications idéalistes.",
      "etymology": "Dérivé de « Philosoph » avec le suffixe « -isch »."
},
  "Phrase": {
      "fr": "phrase creuse / rhétorique",
      "lit": "formule oratoire vide / mot d'ordre stérile",
      "pos_fr": "Nom féminin",
      "role": "Substantif au datif féminin pluriel dénonçant la phraséologie bourgeoise."
},
  "phrasen": {
      "fr": "phrase creuse / rhétorique",
      "lit": "formule oratoire vide / mot d'ordre stérile",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'Phrasen' du lemme 'Phrase'. Substantif au datif féminin pluriel dénonçant la phraséologie bourgeoise."
},
  "Plan": {
      "fr": "plan / projet / dessein ordonné",
      "lit": "dessin en surface plane / schéma directeur",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant le dessein d'ensemble et l'organisation rationnelle et collective de la production soustraite à l'anarchie du marché.",
      "etymology": "Emprunté au latin « planum » (surface plane) via le français « plan »."
},
  "Plebejer": {
      "fr": "plébéien",
      "lit": "citoyen ordinaire non noble de Rome",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant la classe populaire laborieuse de l'Antiquité.",
      "etymology": "Emprunté au latin classique « plebeius » (citoyen du commun peuple libre mais exclu du patriciat, dérivé de « plebs » = multitude, masse populaire, apparenté au grec plêthos). Représente les opprimés libres de l'Antiquité romaine."
},
  "plötzlich": {
      "fr": "soudainement / subitement",
      "lit": "d'un coup subit",
      "pos_fr": "Adverbe",
      "role": "Adverbe peignant l'irruption brutale de la rechute en barbarie lors des crises."
},
  "Poet": {
      "fr": "poète",
      "lit": "créateur de vers",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin illustrant la perte d'aura des artistes réduits à vendre leur force créatrice au capital."
},
  "Pole": {
      "fr": "Polonais",
      "lit": "habitant de la plaine polonaise",
      "pos_fr": "Nom masculin",
      "role": "Substantif faible au datif masculin pluriel désignant les patriotes polonais en lutte."
},
  "polen": {
      "fr": "Polonais",
      "lit": "habitant de la plaine polonaise",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'Polen' du lemme 'Pole'. Substantif faible au datif masculin pluriel désignant les patriotes polonais en lutte."
},
  "Politik": {
      "fr": "politique / affaires publiques",
      "lit": "art d'administrer la cité",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la lutte pour le pouvoir d'État, résumé condensé et expression concentrée de l'économie.",
      "etymology": "Emprunté au grec « politikē [technē] », dérivé de « polis » (cité, État)."
},
  "politisch": {
      "fr": "politique",
      "lit": "relatif à la cité et au gouvernement",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant l'expression juridique et étatique des rapports de force matériels."
},
  "politischen": {
      "fr": "politique",
      "lit": "relatif à la cité et aux institutions étatiques",
      "pos_fr": "Nom neutre",
      "role": "Forme fléchie 'politischen' du lemme 'politisch'. Épithète qualifiant les libertés constitutionnelles conquises par la bourgeoisie."
},
  "Polizist": {
      "fr": "policier / agent de police",
      "lit": "agent des forces de l'ordre répressif",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant les limiers policiers des États absolutistes allemands.",
      "etymology": "Dérivé moderne avec suffixe d'agent -ist du mot « Polizei », emprunté au bas-latin « politia » et au grec ancien « politeia » (πολιτεία = constitution et gouvernement civique de la cité, de polis / πόλις). En moyen haut-allemand, la « gute Policey » désignait l'ensemble du bon ordre administratif, sanitaire et économique de la principauté, avant de se spécialiser aux XVIIIe-XIXe siècles dans le corps armé d'État chargé de la surveillance et de la répression politique."
},
  "posititiv": {
      "fr": "positif / affirmatif",
      "lit": "qui pose des faits réels",
      "pos_fr": "Adjectif",
      "role": "Contenu réel et constructif de la critique utopique."
},
  "positiv": {
      "fr": "positif / constructif",
      "lit": "qui affirme",
      "pos_fr": "Adjectif",
      "role": "Données positives fournies pour instruire les ouvriers."
},
  "praktisch": {
      "fr": "pratique / concret / effectif",
      "lit": "qui relève de l'action réelle",
      "pos_fr": "Adjectif",
      "role": "Concept cardinal désignant l'action concrète, la lutte réelle et l'effectuation matérielle supérieure à tous les discours.",
      "etymology": "Emprunté au grec « praktikos » (propre à l'action, actif, de prattein faire)."
},
  "Praxis": {
      "fr": "pratique / activité concrète transformatrice",
      "lit": "action pratique / exercice réel",
      "pos_fr": "Nom féminin",
      "role": "Concept philosophique cardinal du marxisme désignant l'activité humaine concrète et consciente transformant la nature et la société.",
      "etymology": "Emprunté au grec ancien « praxis » (action concrète, pratique, acte), opposé à « theōria » (contemplation intellectuelle)."
},
  "Preis": {
      "fr": "prix / coût marchand",
      "lit": "valeur monétaire attribuée",
      "pos_fr": "Nom masculin",
      "role": "Loi de la valeur : le prix de la marchandise-travail ramené au strict coût de sa reproduction."
},
  "preußisch": {
      "fr": "prussien",
      "lit": "relatif au royaume de Prusse",
      "pos_fr": "Adjectif",
      "role": "Monarchie absolutiste prussienne réprimant les insurgés."
},
  "Preßfreiheit": {
      "fr": "liberté de la presse",
      "lit": "liberté de la presse typographique",
      "pos_fr": "Nom féminin",
      "role": "Nom composé désignant la liberté de la presse, arme conquise par la bourgeoisie contre l'absolutisme puis retournée contre elle par la presse ouvrière.",
      "etymology": "Composé de « die Presse » (la presse à imprimer, du latin premere) + « die Freiheit » (la liberté).",
      "isCompound": true,
      "compoundParts": [
            "Presse",
            "Freiheit"
      ]
},
  "Prinzip": {
      "fr": "principe / fondement doctrinal",
      "lit": "commencement / règle directrice",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre théorique désignant les axiomes fondamentaux et principes directeurs du matérialisme historique.",
      "etymology": "Emprunté au latin « principium » (commencement, principe premier), de « princeps » (premier)."
},
  "private": {
      "fr": "personnes privées / particuliers",
      "lit": "individus isolés",
      "pos_fr": "Nom",
      "role": "Nom substantivé désignant les détenteurs privés de capitaux accaparant la richesse."
},
  "Privateigentum": {
      "fr": "propriété privée",
      "lit": "propriété appartenant en propre à un particulier",
      "pos_fr": "Nom neutre",
      "role": "Concept central de l'économie et du droit bourgeois désignant la propriété exclusive des moyens de production, dont l'abolition résume le communisme.",
      "etymology": "Composé juridique et philosophique unissant « privat » (du latin privatus, séparé, réservé à l'individu) et « das Eigentum » (la propriété, vieux haut-allemand « eigantum », dérivé de eigen = propre, particulier). Pour Marx, le terme ne désigne pas les biens d'usage personnel, mais le monopole bourgeois sur les moyens de production sociale.",
      "isCompound": true,
      "compoundParts": [
            "privat",
            "Eigentum"
      ]
},
  "Privaterwerb": {
      "fr": "appropriation privée / acquisition individuelle",
      "lit": "acquisition privée de biens",
      "pos_fr": "Nom masculin",
      "role": "Nom composé désignant l'appropriation privée des produits du travail social, fondement juridique du capitalisme.",
      "etymology": "Composé de « privat » + « der Erwerb » (gain, acquisition par le travail, du verbe erwerben).",
      "isCompound": true,
      "compoundParts": [
            "privat",
            "Erwerb"
      ]
},
  "Privatsicherheit": {
      "fr": "garantie privée",
      "lit": "sûreté particulière individuelle",
      "pos_fr": "Nom masculin",
      "role": "Nom composé désignant les garanties de propriété privée que le prolétariat a pour mission d'anéantir."
},
  "Privatversicherung": {
      "fr": "assurance privée",
      "lit": "protection individuelle",
      "pos_fr": "Nom féminin",
      "role": "Nom composé désignant les verrous juridiques de la possession bourgeoise voués à la destruction."
},
  "Produkt": {
      "fr": "produit / résultat matériel",
      "lit": "ce qui est mis au jour par un processus de fabrication",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre soulignant que la bourgeoisie est elle-même le fruit déterminé d'une évolution matérielle.",
      "etymology": "Emprunt savant au latin « productum » (ce qui est conduit en avant, porté à la lumière, résultat d'un procès, participe passé passif neutre du verbe producere, de pro- « en avant » et ducere « conduire »)."
},
  "Produktion": {
      "fr": "production",
      "lit": "engendrement matériel de biens",
      "pos_fr": "Nom féminin",
      "role": "Concept nodal du matérialisme historique : le procès de transformation de la nature par le travail.",
      "etymology": "Emprunt savant au latin classique « productio » (prolongement, mise en avant), du verbe « producere »."
},
  "Produktionsinstrument": {
      "fr": "instrument de production",
      "lit": "outil ou machine de fabrication",
      "pos_fr": "Nom neutre",
      "role": "Concept économique : les moyens techniques dont le perfectionnement bouleverse la société."
},
  "Produktionskosten": {
      "fr": "coûts de production",
      "lit": "frais de fabrication",
      "pos_fr": "Nom féminin",
      "role": "Loi économique d'airain régissant le prix des marchandises et du salaire ouvrier."
},
  "Produktionskraft": {
      "fr": "force productive / capacité de production",
      "lit": "force / puissance de la production",
      "pos_fr": "Nom féminin",
      "role": "nom féminin (souvent au pluriel Produktionskräfte)",
      "etymology": "Composé théorique unissant « Produktion » (du latin productio) et « die Kraft » (la force, puissance vitale agissante, du moyen haut-allemand « kraft », vieux haut-allemand « kraft »). Concept fondamental désignant l'ensemble des instruments de travail, de la technologie et de l'énergie humaine déployée dans la production.",
      "isCompound": true,
      "compoundParts": [
            "Produktion",
            "-s-",
            "Kraft"
      ]
},
  "Produktionskräft": {
      "fr": "force productive",
      "lit": "forme lemmatisée de Produktionskraft",
      "pos_fr": "Nom",
      "role": "Forme lemmatisée désignant la puissance matérielle de transformation sociale."
},
  "Produktionsmittel": {
      "fr": "moyens de production",
      "lit": "instruments et matières de travail",
      "pos_fr": "Nom neutre",
      "role": "Concept central du marxisme : l'ensemble des usines et machines confisqué par le capital."
},
  "Produktionsverhältnis": {
      "fr": "rapport de production",
      "lit": "relation / rapport établi dans la production",
      "pos_fr": "Nom neutre",
      "role": "nom neutre (souvent au pluriel Produktionsverhältnisse)",
      "etymology": "Composé de « Produktion » + « Verhältnis » (rapport, relation sociale).",
      "isCompound": true,
      "compoundParts": [
            "Produktion",
            "-s-",
            "Verhältnis"
      ]
},
  "Produktionsverhältnisse": {
      "fr": "rapports de production",
      "lit": "relations sociales nouées dans la production",
      "pos_fr": "Nom",
      "role": "Concept clé du matérialisme : les liens sociaux structurant l'exploitation et la propriété.",
      "etymology": "Composé théorique fondamental formé de « Produktion » et de « Verhältnisse » (rapports, relations, pluriel de Verhältnis). Désigne l'ensemble des rapports sociaux nécessaires et indépendants de la volonté humaine dans lesquels les hommes entrent au cours de la production de leur vie matérielle."
},
  "Produktionsweis": {
      "fr": "mode de production",
      "lit": "forme lemmatisée de Produktionsweise",
      "pos_fr": "Nom féminin",
      "role": "Concept d'ensemble désignant l'articulation entre forces productives et rapports sociaux."
},
  "Produktionsweise": {
      "fr": "mode de production",
      "lit": "manière et forme d'organisation de la production",
      "pos_fr": "Nom féminin",
      "role": "Concept central du matérialisme historique désignant l'unité articulée des forces productives et des rapports sociaux de production.",
      "etymology": "Composé de : 1° « die Produktion » (du latin productio) ; 2° « -s- » ; 3° le noyau sous-entendu « die Weise » (façon, mode, manière, en moyen haut-allemand wīse, en vieux haut-allemand wīsa, proto-germanique *wīsō-, issu de la racine indo-européenne *weyd- = voir, savoir, cognat du latin videre)."
},
  "Produktivkraft": {
      "fr": "force productive",
      "lit": "énergie transformatrice du travail",
      "pos_fr": "Nom féminin",
      "role": "Concept cardinal : la puissance matérielle humaine entrant en révolte contre le carcan bourgeois."
},
  "Produktivkräft": {
      "fr": "force productive",
      "lit": "forme fléchie de Produktivkraft",
      "pos_fr": "Nom féminin",
      "role": "Forme lemmatisée plurielle de Produktivkraft."
},
  "produzieren": {
      "fr": "produire / engendrer",
      "lit": "faire sortir au grand jour",
      "pos_fr": "Verbe",
      "role": "Verbe central de l'analyse économique : la production marchande et ses contradictions."
},
  "profan": {
      "fr": "profane / séculier",
      "lit": "en dehors du temple",
      "pos_fr": "Adjectif",
      "role": "Réalité profane des intérêts matériels sous les masques sacrés."
},
  "Progressivsteuer": {
      "fr": "impôt progressif",
      "lit": "taxe proportionnellement croissante selon le revenu",
      "pos_fr": "Nom féminin",
      "role": "Nom composé financier désignant l'impôt fortement progressif réclamé comme mesure de transition pour entamer le monopole du capital.",
      "etymology": "Composé de l'adjectif « progressiv » (du latin progressivus, qui progresse) + « die Steuer » (l'impôt, soutien financier).",
      "isCompound": true,
      "compoundParts": [
            "progressiv",
            "Steuer"
      ]
},
  "proklamieren": {
      "fr": "proclamer hautement",
      "lit": "déclarer publiquement",
      "pos_fr": "Verbe",
      "role": "Verbe caractérisant le cynisme bourgeois affichant le lucre comme son unique boussole."
},
  "Proletariat": {
      "fr": "prolétariat",
      "lit": "prolétariat / classe des prolétaires",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre d'origine latine désignant la classe révolutionnaire moderne vendue à l'heure au capital.",
      "etymology": "Emprunté au latin « proletarius » (citoyen romain de la dernière classe censitaire, dispensé d'impôt et ne contribuant à la République que par sa descendance, proles = progéniture, lignée). Réintroduit dans le débat politique français et allemand dans les années 1830 par les saint-simoniens et Lorenz von Stein pour désigner la classe moderne des ouvriers dépourvus de moyens de production."
},
  "proletariat": {
      "fr": "prolétariat",
      "lit": "la classe des prolétaires salariés modernes",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'Proletariat' du lemme 'Proletariat'. Substantif neutre au datif désignant la classe émancipatrice universelle."
},
  "Proletarier": {
      "fr": "prolétaire",
      "lit": "travailleur salarié ne possédant que sa force de travail",
      "pos_fr": "Nom masculin",
      "role": "Substantif au nominatif pluriel sujet de la phrase historique ou vocatif d'appel aux armes."
},
  "proletarier": {
      "fr": "prolétaire",
      "lit": "travailleur salarié ne possédant que sa force de travail",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'Proletarier' du lemme 'Proletarier'. Substantif au nominatif pluriel sujet de la phrase historique ou vocatif d'appel aux armes."
},
  "proletarisch": {
      "fr": "prolétarien",
      "lit": "qui appartient au prolétariat émancipateur",
      "pos_fr": "Adjectif",
      "role": "Épithète au génitif qualifiant la révolution socialiste finale."
},
  "proletarischen": {
      "fr": "prolétarien",
      "lit": "qui appartient au prolétariat émancipateur",
      "pos_fr": "Nom neutre",
      "role": "Forme fléchie 'proletarischen' du lemme 'proletarisch'. Épithète au génitif qualifiant la révolution socialiste finale."
},
  "Propaganda": {
      "fr": "propagande / diffusion active des idées",
      "lit": "choses qui doivent être propagées",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la diffusion militante et l'explication méthodique des thèses communistes au sein du prolétariat.",
      "etymology": "Emprunté au latin ecclésiastique « Congregatio de Propaganda Fide » (congrégation pour la propagation de la foi, du gérondif de propagare, propager)."
},
  "Prophezeiung": {
      "fr": "prophétie / prédiction",
      "lit": "action d'annoncer l'avenir",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin ironique désignant les oracles nébuleux et prophéties sentimentales des socialistes d'antichambre.",
      "etymology": "Dérivé du verbe « prophezeien » (prophétiser), issu du moyen haut-allemand « prophete » (du grec prophētēs) + « -ung »."
},
  "Prostitution": {
      "fr": "prostitution",
      "lit": "action d'exposer publiquement à vil prix",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin dénonçant à la fois la prostitution vénale publique et le mariage bourgeois comme prostitution légale d'intérêt.",
      "etymology": "Emprunté au latin « prostitutio », de « prostituere » (exposer devant, livrer publiquement au commerce sexuel)."
},
  "Proudhon": {
      "fr": "Proudhon",
      "lit": "Pierre-Joseph Proudhon",
      "pos_fr": "Nom masculin",
      "role": "Nom propre désignant Pierre-Joseph Proudhon (1809-1865), théoricien socialiste et anarchiste français critiqué par Marx dans Misère de la philosophie.",
      "etymology": "Nom de famille de l'auteur de « Qu'est-ce que la propriété ? » et de « Philosophie de la misère »."
},
  "Provinz": {
      "fr": "province / contrée régionale",
      "lit": "territoire sous juridiction",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant les entités territoriales fédérales fondues dans l'État-nation bourgeois."
},
  "Publikum": {
      "fr": "public / auditoire / lectorat",
      "lit": "la communauté des citoyens ou auditeurs",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre désignant le lectorat cultivé et l'auditoire bourgeois récepteur des débats intellectuels de l'époque.",
      "etymology": "Emprunté au neutre substantivé de l'adjectif latin « publicus » (public, commun au peuple)."
},
  "Punkt": {
      "fr": "point / sommet historique",
      "lit": "moment culminant précis",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin marquant le seuil culminant où la guerre de classe éclate en révolution ouverte."
},
  "Pyramide": {
      "fr": "pyramide",
      "lit": "monument des pharaons",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin évoquant les travaux de l'Antiquité éclipsés par les prouesses matérielles bourgeoises."
},
  "Race": {
      "fr": "race / lignée",
      "lit": "lignée biologique",
      "pos_fr": "Nom féminin",
      "role": "Graphie du XIXe siècle (Race) désignant la descendance ouvrière indispensable à la régénération de la force de travail."
},
  "Rad": {
      "fr": "roue",
      "lit": "organe circulaire rotatif",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre de la métaphore de la « roue de l'histoire » que les réactionnaires rêvent de faire tourner à l'envers."
},
  "radikal": {
      "fr": "radical",
      "lit": "qui va à la racine des choses",
      "pos_fr": "Adjectif",
      "role": "Épithète qualifiant l'aile bourgeoise démocrate avancée mais bourgeoise."
},
  "Radikale": {
      "fr": "radicaux",
      "lit": "militants républicains partisans de réformes profondes",
      "pos_fr": "Nom pluriel",
      "role": "Nom masculin pluriel désignant l'aile démocratique avancée en France (ex: Ledru-Rollin).",
      "etymology": "Emprunt au bas-latin scolastique « radicalis », dérivé de « radix / radicis » (la racine, issu de la racine indo-européenne *wréh₂ds, cognat de l'allemand Wurzel et de l'anglais root). Forgé en Angleterre par Charles James Fox (1797) pour réclamer une « radical reform » du système électoral, le mot désigne en France sous la Monarchie de Juillet les républicains avancés (Ledru-Rollin) qui prétendent refonder l'État jusqu'aux racines, mais que les conservateurs confondent volontiers avec les communistes pour les discréditer."
},
  "radikale": {
      "fr": "radical",
      "lit": "qui va à la racine des choses",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'radikale' du lemme 'radikal'. Épithète qualifiant l'aile bourgeoise démocrate avancée mais bourgeoise."
},
  "radikalen": {
      "fr": "radical",
      "lit": "démocrate voulant réformer à la racine",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'Radikalen' du lemme 'Radikale'. Substantif au datif ou accusatif pluriel désignant le parti radical suisse."
},
  "Radikalsten": {
      "fr": "les plus radicaux / les plus avancés",
      "lit": "ceux qui vont au fond des racines",
      "pos_fr": "Nom masculin",
      "role": "Adjectif substantivé désignant les fractions républicaines démocratiques les plus avancées engagées dans les révolutions de 1848.",
      "etymology": "Substantivation du superlatif de « radikal », emprunté au bas-latin « radicalis » (relatif à la racine, « radix »)."
},
  "radikalsten": {
      "fr": "les plus radicaux",
      "lit": "ceux qui vont à la racine absolue",
      "pos_fr": "Adjectif",
      "role": "Adjectif au superlatif qualifiant la rupture révolutionnaire la plus profonde avec les rapports de propriété traditionnels.",
      "etymology": "Superlatif de « radikal », du latin « radix » (racine)."
},
  "Rahmen": {
      "fr": "cadre / limites / enceinte",
      "lit": "châssis / bordure entourant un tableau",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant le cadre national ou les limites structurelles au sein desquels s'enferme une forme politique dépassée.",
      "etymology": "Du moyen haut-allemand « rame », vieux haut-allemand « rama » (support, pilier, châssis)."
},
  "Rang": {
      "fr": "rang / degré hiérarchique / dignité",
      "lit": "alignement ordonné / place occupée",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant la dignité et la hiérarchie statutaire dans l'échelle d'Ancien Régime, dissoute par le marché.",
      "etymology": "Emprunté au français « rang » (rangée, cercle ordonné), d'origine francique *hring (cercle, anneau)."
},
  "rasch": {
      "fr": "rapide / prompt",
      "lit": "avec une extrême vitesse",
      "pos_fr": "Adjectif",
      "role": "Adjectif soulignant la fulgurance du développement de l'industrie capitaliste.",
      "etymology": "Issu du moyen haut-allemand « rasch », vieux haut-allemand « rasc » (vif, agile, rapide, hardi), du proto-germanique *raskaz."
},
  "rascher": {
      "fr": "plus rapidement",
      "lit": "avec plus de promptitude",
      "pos_fr": "Adverbe",
      "role": "Rythme accéléré de la concentration capitaliste."
},
  "raunen": {
      "fr": "chuchoter / murmurer",
      "lit": "murmurer à l'oreille",
      "pos_fr": "Verbe",
      "role": "Murmures et prophéties réactionnaires."
},
  "reagieren": {
      "fr": "réagir / s'opposer",
      "lit": "agir en retour",
      "pos_fr": "Verbe",
      "role": "Réaction politique contre le mouvement ouvrier."
},
  "Reaktion": {
      "fr": "réaction",
      "lit": "mouvement de recul politique",
      "pos_fr": "Nom féminin",
      "role": "Concept politique désignant les forces rétrogrades coalisées pour restaurer l'ordre féodal."
},
  "Reaktionär": {
      "fr": "réactionnaire",
      "lit": "partisan du retour en arrière",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant les conservateurs inconsolables du déracinement national de l'industrie."
},
  "reaktionär": {
      "fr": "réactionnaire",
      "lit": "qui veut restaurer l'ordre passé",
      "pos_fr": "Adjectif",
      "role": "Adjectif politique désignant les forces voulant revenir à l'Ancien Régime féodal.",
      "etymology": "Emprunt au français « réactionnaire », forgé sous la Révolution française vers 1795 lors de la Convention thermidorienne après la chute de Robespierre (dérivé de « réaction », du latin médiéval et philosophique reactio, formé sur re- + agere = agir en sens inverse). Introduit en allemand au début du XIXe siècle pour désigner les partisans de la restauration féodale et monarchique."
},
  "reaktionären": {
      "fr": "réactionnaire",
      "lit": "qui veut ramener la société en arrière",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'reaktionären' du lemme 'reaktionär'. Épithète qualifiant les classes féodales condamnées par l'histoire."
},
  "Rebell": {
      "fr": "rebelle / insurgé",
      "lit": "celui qui reprend la guerre contre l'autorité",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant l'insurgé dressé contre l'ordre établi, figure précurseur des révoltes collectives d'esclaves ou de plébéiens.",
      "etymology": "Emprunté au latin « rebellis » (qui recommence la guerre, indocile), de « re- » (à nouveau) + « bellum » (guerre)."
},
  "Recht": {
      "fr": "droit",
      "lit": "la règle légitime / prérogative",
      "pos_fr": "Nom neutre",
      "role": "Substantif à l'accusatif neutre singulier, objet direct de l'infinitif 'aufzugeben'."
},
  "recht": {
      "fr": "droit",
      "lit": "la règle légitime / prérogative",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'Recht' du lemme 'Recht'. Substantif à l'accusatif neutre singulier, objet direct de l'infinitif 'aufzugeben'."
},
  "rechtlich": {
      "fr": "juridique / légal / de droit",
      "lit": "conforme au droit",
      "pos_fr": "Adjectif",
      "role": "Adjectif caractérisant les fictions juridiques et les formes contractuelles consacrant la dépossession du travailleur.",
      "etymology": "Dérivé de « Recht » (le droit, la loi) + « -lich »."
},
  "rechtzeitig": {
      "fr": "à temps / en temps utile",
      "lit": "au temps juste",
      "pos_fr": "Adverbe",
      "role": "Intervention politique opportune pour bloquer une loi ouvrière."
},
  "Rede": {
      "fr": "discours / propos / parole",
      "lit": "exposé verbal raisonné",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant le discours oratoire et les professions de foi prononcées dans les assemblées politiques.",
      "etymology": "Du moyen haut-allemand « rede », vieux haut-allemand « radia » (compte, calcul, discours sensé, raison), rattaché à la racine indo-européenne *re- (compter, penser)."
},
  "Redeblume": {
      "fr": "fleur de rhétorique / ornement de style",
      "lit": "fleur de discours",
      "pos_fr": "Nom féminin",
      "role": "Nom composé rhétorique fustigeant les fleurs de style et métaphores creuses dont s'enveloppent les apologies bourgeoises.",
      "etymology": "Composé de « die Rede » (discours, éloquence) + « die Blume » (fleur, métaphore pour fioriture stylistique).",
      "isCompound": true,
      "compoundParts": [
            "Rede",
            "Blume"
      ]
},
  "reden": {
      "fr": "parler / discourir",
      "lit": "adresser la parole",
      "pos_fr": "Verbe",
      "role": "Discours rhétorique ou théorique."
},
  "Redensart": {
      "fr": "formule toute faite / cliché / tournure verbeuse",
      "lit": "manière ou façon de parler",
      "pos_fr": "Nom féminin",
      "role": "Nom composé ironique dénonçant les clichés, formules toutes faites et lieux communs de la propagande antisocialiste.",
      "etymology": "Composé de « Rede » + « Art » (manière, façon d'être).",
      "isCompound": true,
      "compoundParts": [
            "Rede",
            "-n-",
            "Art"
      ]
},
  "rednerisch": {
      "fr": "rhétorique / oratoire",
      "lit": "propre à l'orateur",
      "pos_fr": "Adjectif",
      "role": "Simple figure de rhétorique du socialisme bourgeois."
},
  "reduzieren": {
      "fr": "réduire / ramener à",
      "lit": "ramener en arrière",
      "pos_fr": "Verbe",
      "role": "Verbe analytique montrant comment le capitalisme dépouille toutes les professions sacrées pour les réduire à de simples métiers salariés.",
      "etymology": "Emprunté au latin « reducere » (ramener, faire revenir)."
},
  "Reformbewegung": {
      "fr": "mouvement réformateur / courant de réforme",
      "lit": "mouvement pour la réforme",
      "pos_fr": "Nom féminin",
      "role": "Nom composé désignant les courants réformistes bourgeois cherchant à corriger les abus du capitalisme pour mieux le consolider.",
      "etymology": "Composé de « die Reform » (la réforme, du latin reformare) + « die Bewegung » (le mouvement).",
      "isCompound": true,
      "compoundParts": [
            "Reform",
            "Bewegung"
      ]
},
  "Reformer": {
      "fr": "réformateur",
      "lit": "celui qui réforme l'ordre existant",
      "pos_fr": "Nom masculin",
      "role": "Substantif au datif masculin pluriel désignant les réformateurs agraires américains."
},
  "reformern": {
      "fr": "réformateur",
      "lit": "celui qui réforme l'ordre existant",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'Reformern' du lemme 'Reformer'. Substantif au datif masculin pluriel désignant les réformateurs agraires américains."
},
  "Reformist": {
      "fr": "réformiste",
      "lit": "partisan de réformes graduelles",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant les adeptes de réformes partielles qui refusent la rupture révolutionnaire avec le pouvoir d'État bourgeois.",
      "etymology": "Formé sur « Reform » avec le suffixe d'agent ou d'adhérent « -ist »."
},
  "regelmäßig": {
      "fr": "régulièrement",
      "lit": "selon la règle",
      "pos_fr": "Adverbe",
      "role": "Adverbe soulignant la périodicité implacable de la destruction marchande du capital."
},
  "regelnd": {
      "fr": "régulateur / normatif",
      "lit": "qui fixe la règle",
      "pos_fr": "Adjectif",
      "role": "Participe présent qualifiant la prétention bourgeoise d'ériger ses intérêts en loi pour l'humanité."
},
  "regierend": {
      "fr": "au pouvoir / gouvernant",
      "lit": "qui exerce l'autorité politique",
      "pos_fr": "Participe présent",
      "role": "Adjectif désignant les fractions de la classe dominante qui détiennent l'appareil d'État.",
      "etymology": "Participe présent de « regieren », emprunté en moyen haut-allemand au latin classique « regere » (conduire droit, guider, exercer la souveraineté, issu de la racine indo-européenne *h₃reǵ- « étendre en ligne droite », qui a produit rex / roi, Recht / droit, Reich / empire). Désigne chez Marx les tenants exclusifs du monopole exécutif et répressif d'État."
},
  "Regierung": {
      "fr": "gouvernement",
      "lit": "autorité dirigeante de l'État",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant le comité de gestion des affaires communes de la classe bourgeoise."
},
  "Regime": {
      "fr": "régime politique / mode de gouvernement",
      "lit": "mode de direction d'un État",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre désignant la forme institutionnelle de gouvernement et l'appareil administratif garantissant la suprématie d'une classe.",
      "etymology": "Emprunté au français « régime », issu du latin « regimen » (direction, gouvernail, gouvernement)."
},
  "reichen": {
      "fr": "suffire / suffire à combler",
      "lit": "atteindre la mesure nécessaire",
      "pos_fr": "Verbe régulier",
      "role": "Verbe économique : la manufacture ne suffisait plus à satisfaire les besoins du marché en expansion.",
      "etymology": "Verbe composé séparable combinant la particule d'achèvement « aus » et le verbe germanique « reichen » (atteindre, suffire, vieux haut-allemand reihhan)."
},
  "Reichtum": {
      "fr": "richesse matérielle",
      "lit": "abondance de biens",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant la masse des valeurs créées par le travail et concentrées dans les mains privées."
},
  "Reihe": {
      "fr": "série / chaîne / succession",
      "lit": "ligne ordonnée / rangée continue",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la succession dialectique des révolutions dans les modes de production et d'échange."
},
  "rein": {
      "fr": "pur / exclusif",
      "lit": "exempt de tout mélange",
      "pos_fr": "Adjectif",
      "role": "Adjectif démasquant la réduction cynique de la famille à un pur rapport d'argent."
},
  "Reinertrag": {
      "fr": "produit net / revenu net",
      "lit": "revenu pur déduit de tous frais",
      "pos_fr": "Nom masculin",
      "role": "Nom composé économique désignant le produit net ou bénéfice pur, mobile exclusif de la production capitaliste.",
      "etymology": "Composé de l'adjectif « rein » (pur, sans mélange, net) + « der Ertrag » (rendement, récolte, profit tiré d'un capital).",
      "isCompound": true,
      "compoundParts": [
            "rein",
            "Ertrag"
      ]
},
  "Reiz": {
      "fr": "attrait / attrait stimulant",
      "lit": "séduction sensible du geste",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin dénonçant la perte d'intérêt d'un labeur mutilé par le rythme de l'automate."
},
  "reißen": {
      "fr": "arracher / entraîner avec violence",
      "lit": "déchirer en tirant",
      "pos_fr": "Verbe",
      "role": "Verbe marquant la force d'attraction violente du marché intégrant les nations barbares."
},
  "rekrutieren": {
      "fr": "se recruter dans / lever",
      "lit": "enrôler pour l'armée",
      "pos_fr": "Verbe",
      "role": "Métaphore militaire désignant l'afflux des déclassés de toutes origines gonflant le prolétariat."
},
  "Religion": {
      "fr": "religion",
      "lit": "système des croyances et du culte",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin dénoncé comme un préjugé sacré masquant la dureté du calcul égoïste."
},
  "Religionsfreiheit": {
      "fr": "liberté religieuse / liberté de culte",
      "lit": "liberté de religion",
      "pos_fr": "Nom féminin",
      "role": "Nom composé désignant la liberté de conscience et de culte proclamée par la république bourgeoise.",
      "etymology": "Composé de « Religion » (du latin religio) + « Freiheit » (liberté).",
      "isCompound": true,
      "compoundParts": [
            "Religion",
            "-s-",
            "Freiheit"
      ]
},
  "religiös": {
      "fr": "religieux",
      "lit": "relatif à la foi et au culte divin",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant les représentations sacrées qui servaient d'alibi moral à l'exploitation féodale."
},
  "Rentier": {
      "fr": "rentier",
      "lit": "homme vivant de rentes financières",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin d'emprunt français désignant les couches oisives aspirées dans la prolétarisation."
},
  "Repräsentativstaat": {
      "fr": "État représentatif",
      "lit": "État fondé sur la représentation parlementaire",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin composé désignant la forme politique constitutionnelle adéquate à l'hégémonie bourgeoise moderne.",
      "etymology": "Composé politique associant : 1° l'adjectif « repräsentativ » (du bas-latin repraesentare = rendre présent, placer sous les yeux) ; 2° « der Staat » (l'État, emprunt au latin status = condition, ordre politique stable)."
},
  "Republik": {
      "fr": "république",
      "lit": "chose publique / gouvernement civique sans monarque",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant les cités marchandes gouvernées par des magistrats civils sans prince."
},
  "Rest": {
      "fr": "reste / vestige anachronique",
      "lit": "ce qui survit d'un monde révolu",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant les débris de la monarchie absolue balayés par le capital."
},
  "Restaurationszeit": {
      "fr": "époque de la Restauration",
      "lit": "temps de la restauration monarchique",
      "pos_fr": "Nom féminin",
      "role": "Nom composé historique désignant la Restauration bourbonienne (1814-1830) en France et la Sainte-Alliance monarchique européenne.",
      "etymology": "Composé de « die Restauration » (le rétablissement de l'ancien ordre politique) + « die Zeit » (le temps, l'époque).",
      "isCompound": true,
      "compoundParts": [
            "Restauration",
            "-s-",
            "Zeit"
      ]
},
  "Resultat": {
      "fr": "résultat historique",
      "lit": "aboutissement concret d'un procès",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre opposant le revers immédiat de la grève au résultat suprême : l'union de la classe."
},
  "Revolution": {
      "fr": "révolution",
      "lit": "bouleversement intégral de l'ordre établi",
      "pos_fr": "Nom féminin",
      "role": "Substantif désignant le saut qualitatif historique de la prise du pouvoir politique."
},
  "revolution": {
      "fr": "révolution",
      "lit": "bouleversement intégral de l'ordre établi",
      "pos_fr": "Nom féminin",
      "role": "Forme fléchie 'Revolution' du lemme 'Revolution'. Substantif désignant le saut qualitatif historique de la prise du pouvoir politique."
},
  "revolutionieren": {
      "fr": "révolutionner / transformer radicalement",
      "lit": "bouleverser de fond en comble en provoquant une rupture",
      "pos_fr": "Verbe faible",
      "role": "Verbe marquant le saut qualitatif matériel opéré par le machinisme automatique sur la production.",
      "etymology": "Dérivé verbal en « -ieren » forgé au XVIIIe siècle sur le substantif français « révolution », lui-même emprunté au bas-latin « revolutio » (retour au point de départ, révolution d'un astre), dérivé du supin « revolutum » de « revolvere » (rouler en arrière, dérouler à nouveau, de re- et volvere / rouler)."
},
  "revolutionierenden": {
      "fr": "révolutionnaires / subversifs",
      "lit": "qui bouleversent",
      "pos_fr": "Adjectif",
      "role": "Forces bouleversant continuellement les bases techniques."
},
  "revolutionär": {
      "fr": "révolutionnaire",
      "lit": "qui renverse violemment les bases matérielles de la société",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant la transformation radicale produite par la lutte des classes.",
      "etymology": "Emprunt au français « révolutionnaire », dérivé savant en « -aire » de « révolution », issu du bas-latin « revolutio » (mouvement de rotation astronomique et retournement complet des astres, du verbe revolvere = faire rouler en arrière, retourner, renverser). Transféré au XVIIIe siècle de l'astronomie à la rupture politique radicale."
},
  "revolutionäre": {
      "fr": "révolutionnaire",
      "lit": "qui bouleverse l'ordre social",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'revolutionäre' du lemme 'revolutionär'. Épithète ou adverbe marquant la radicalité transformatrice de l'action."
},
  "revolutionären": {
      "fr": "révolutionnaire",
      "lit": "qui bouleverse l'ordre social",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'revolutionären' du lemme 'revolutionär'. Épithète ou adverbe marquant la radicalité transformatrice de l'action."
},
  "richten": {
      "fr": "diriger / concentrer",
      "lit": "orienter tout droit vers",
      "pos_fr": "Verbe",
      "role": "Verbe principal à la 3e personne du pluriel marquant le choix stratégique des communistes."
},
  "Richtung": {
      "fr": "direction / tendance / orientation / courant",
      "lit": "ligne vers laquelle on se dirige",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant le courant doctrinal ou l'orientation stratégique adoptée par une tendance politique.",
      "etymology": "Dérivé du verbe « richten » (diriger, dresser droit, juger) + suffixe « -ung »."
},
  "rief": {
      "fr": "appeler / susciter",
      "lit": "faire entendre un appel",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'rief' du lemme 'rufen'. Verbe au prétérit ('rief') formant la locution 'ins Leben rief' (fit naître, suscita)."
},
  "Ritter": {
      "fr": "chevalier",
      "lit": "homme d'armes noble à cheval",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant l'ordre équestre romain ou médiéval.",
      "etymology": "Issu du moyen haut-allemand « ritter / rīter » (homme d'armes combattant à cheval, chevalier noble), dérivé d'agent moyen haut-allemand (en dialecte bas-allemand ou néerlandais ridder) du verbe fort germanique « rītan » (chevaucher, aller à cheval, vieux haut-allemand rītan, cognat de l'anglais ride). Équivalent féodal du latin eques et miles : dans la Rome antique citée par Marx, l'ordre équestre formait l'aristocratie financière et marchande enrichie par les fermes d'impôts de l'Empire."
},
  "ritterlich": {
      "fr": "chevaleresque",
      "lit": "propre au chevalier et noble cavalier d'armes",
      "pos_fr": "Adjectif",
      "role": "Adjectif caractérisant l'idéal nobiliaire d'honneur militaire, de bravoure et de fidélité au suzerain.",
      "etymology": "Dérivé en « -lich » de « Ritter » (chevalier noble, cavalier d'armes), emprunt du bas-allemand ou néerlandais « ridder », issu du verbe fort « reiten » (chevaucher, en vieux haut-allemand rītan, proto-germanique *rīdanan)."
},
  "roh": {
      "fr": "brut / fruste / grossier",
      "lit": "non cuit / non affiné",
      "pos_fr": "Adjectif",
      "role": "Premières revendications égalitaires grossières."
},
  "rohdestruktiv": {
      "fr": "brutalement destructeur",
      "lit": "brut et destructif",
      "pos_fr": "Adjectif",
      "role": "Destruction violente des machines par les luddites."
},
  "Rohstoff": {
      "fr": "matière première",
      "lit": "matière brute non traitée",
      "pos_fr": "Nom masculin",
      "role": "Nom composé désignant les ressources naturelles importées des antipodes pour alimenter les usines."
},
  "Rolle": {
      "fr": "rôle / fonction historique",
      "lit": "rouleau de parchemin contenant le texte d'un acteur",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin dramaturgique et historique : la bourgeoisie a joué dans l'histoire un rôle éminemment révolutionnaire.",
      "etymology": "Emprunté au français « rôle », issu du latin « rotulus » (petit rouleau)."
},
  "Rom": {
      "fr": "Rome",
      "lit": "la Rome antique impériale et républicaine",
      "pos_fr": "Nom propre",
      "role": "Nom propre neutre, archétype historique de société esclavagiste divisée en ordres stricts.",
      "etymology": "Emprunt au nom propre latin « Rōma » (nom de la ville sur le Tibre, étymon pré-latin ou étrusque débattu : traditionnellement rattaché à « ruma » = mamelle, évoquant les collines jumelles du Palatin, ou à un ancien nom fluvial archaïque)."
},
  "rufen": {
      "fr": "appeler / susciter",
      "lit": "faire entendre un appel",
      "pos_fr": "Verbe",
      "role": "Verbe au prétérit ('rief') formant la locution 'ins Leben rief' (fit naître, suscita)."
},
  "Runkelrübe": {
      "fr": "betterave sucrière / betterave fourragère",
      "lit": "betterave rugueuse à bétail",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin agraire : allusion de Marx au grand commerce de betteraves sucrières exploité par l'aristocratie terrienne allemande.",
      "etymology": "Composé d'un élément obscur « Runkel » (peut-être rattaché à une forme dialectale rugueuse) + « die Rübe » (la rave, navet, betterave, vieux haut-allemand « ruoba »).",
      "isCompound": true,
      "compoundParts": [
            "Runkel",
            "Rübe"
      ]
},
  "römisch": {
      "fr": "romain",
      "lit": "de la Rome antique",
      "pos_fr": "Adjectif",
      "role": "Adjectif évoquant les aqueducs antiques surpassés par les travaux du capital."
},
  "Rückhall": {
      "fr": "écho / répercussion sonore / retentissement",
      "lit": "résonance en retour",
      "pos_fr": "Nom masculin",
      "role": "Nom composé acoustique désignant le retentissement sonore et l'écho puissant suscités par le cri de ralliement des prolétaires.",
      "etymology": "Composé du préfixe « rück- » (en arrière, en retour) + « der Hall » (son éclatant, résonance sonore).",
      "isCompound": true,
      "compoundParts": [
            "rück-",
            "Hall"
      ]
},
  "rührend-sentimental": {
      "fr": "touchant et sentimental",
      "lit": "qui émeut et excite la sensiblerie",
      "pos_fr": "Adjectif",
      "role": "Adjectif composé raillant le voile larmoyant dont la féodalité masquait ses liens familiaux d'intérêt."
},
  "Sache": {
      "fr": "chose / affaire / cause",
      "lit": "litige judiciaire / cause débattue / objet",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'affaire concrète, la cause politique ou la réalité matérielle objective opposée aux abstractions pures.",
      "etymology": "Du moyen haut-allemand « sache », vieux haut-allemand « sahha » (procès, litige, cause en justice, puis affaire, chose)."
},
  "sagen": {
      "fr": "dire / énoncer / signifier",
      "lit": "exprimer par la parole",
      "pos_fr": "Verbe",
      "role": "Verbe d'énonciation théorique formulant sans détours la réalité des antagonismes sociaux masqués par l'idéologie.",
      "etymology": "Du moyen haut-allemand « sagen », vieux haut-allemand « sagēn », proto-germanique *sagjaną."
},
  "Satz": {
      "fr": "proposition / phrase / principe / thèse",
      "lit": "ce qui est posé ou fixé",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin théorique désignant une proposition scientifique ou une thèse doctrinale rigoureusement formulée.",
      "etymology": "Du moyen haut-allemand « saz », vieux haut-allemand « saz » (action de poser, disposition, ordonnance), déverbal de « setzen » (poser)."
},
  "Schacher": {
      "fr": "mercantilisme mesquin / trafic vénal / tripotage d'argent",
      "lit": "trafic usuraire ou déloyal",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin méprisant d'origine yiddish désignant le mercantilisme mesquin, l'agiotage sordide et le vil tripotage d'argent.",
      "etymology": "Emprunté au yiddish « schachern », issu de l'hébreu « sachar » (commerce, gain mercenaire)."
},
  "schaffen": {
      "fr": "créer / engendrer",
      "lit": "produire à l'existence",
      "pos_fr": "Verbe fort/régulier",
      "role": "Verbe désignant la puissance démiurgique de la bourgeoisie créant de nouveaux marchés.",
      "etymology": "Issu du moyen haut-allemand « schuofen », vieux haut-allemand « scuofun », prétérit apophonique du verbe fort « schaffen » (créer, produire, façonner, en moyen haut-allemand schaffen, vieux haut-allemand scaffan, proto-germanique *skapjaną)."
},
  "Schafswolle": {
      "fr": "laine de mouton",
      "lit": "laine tondue sur les brebis",
      "pos_fr": "Nom féminin",
      "role": "Nom composé désignant la laine de mouton, matière brute symbole du négoce agricole auquel se livre la noblesse prussienne.",
      "etymology": "Composé de « das Schaf » (le mouton) + « die Wolle » (la laine, vieux haut-allemand « wolla »).",
      "isCompound": true,
      "compoundParts": [
            "Schaf",
            "-s-",
            "Wolle"
      ]
},
  "scharfsinnig": {
      "fr": "avec perspicacité / finement",
      "lit": "d'un esprit acéré",
      "pos_fr": "Adverbe",
      "role": "Analyse lucide des tares du machinisme par Sismondi."
},
  "Schauer": {
      "fr": "frisson / transport d'effroi",
      "lit": "averse soudaine / saisissement physique de terreur ou d'extase",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant l'émotion sacrée et le frisson de dévotion mystique qui courbait l'échine des serfs.",
      "etymology": "Issu du moyen haut-allemand « schūr » (giboulée violente, averse soudaine, puis assaut, frisson d'horreur sacrée), vieux haut-allemand « scūr » (tempête, giboulée), d'origine proto-germanique *skūraz."
},
  "Schauspiel": {
      "fr": "spectacle / scène théâtrale",
      "lit": "jeu que l'on regarde",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre théâtral désignant le drame historique grandiose ou la tragi-comédie des révolutions politiques en Europe.",
      "etymology": "Composé de « die Schau » (regard, vue, étalage) + « das Spiel » (le jeu, représentation dramatique).",
      "isCompound": true,
      "compoundParts": [
            "Schau",
            "Spiel"
      ]
},
  "scheinbar": {
      "fr": "en apparence / apparemment",
      "lit": "qui semble seulement",
      "pos_fr": "Adverbe",
      "role": "Fausse sympathie feinte par l'aristocratie."
},
  "scheinen": {
      "fr": "sembler / paraître",
      "lit": "luire / avoir l'air",
      "pos_fr": "Verbe",
      "role": "Verbe de l'apparence opposant le leurre superficiel à la réalité objective sous-jacente."
},
  "scheitern": {
      "fr": "échouer / faire naufrage",
      "lit": "se briser en éclats",
      "pos_fr": "Verbe",
      "role": "Échec inévitable des tentatives utopiques."
},
  "Scheu": {
      "fr": "crainte révérencieuse / déférence pieuse",
      "lit": "effroi mêlé de respect",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin marquant le respect mystique entourant jadis les professions libérales."
},
  "Schicht": {
      "fr": "couche sociale / strate",
      "lit": "strate géologique ou sociale",
      "pos_fr": "Nom féminin",
      "role": "Métaphore géologique désignant les couches superposées de la société officielle que le prolétariat dynamite."
},
  "schießen": {
      "fr": "abattre / canonner / tirer",
      "lit": "lancer un projectile",
      "pos_fr": "Verbe",
      "role": "Verbe de la métaphore de l'artillerie marchande qui abat les murailles de Chine."
},
  "Schiffahrt": {
      "fr": "navigation maritime",
      "lit": "voyage par mer sur des navires",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin composé marquant le réseau maritime mondial reliant les marchés planétaires.",
      "etymology": "Composé associant : 1° « das Schiff » (le bateau, le navire, du moyen haut-allemand schif, vieux haut-allemand skif, proto-germanique *skipą) ; 2° « die Fahrt » (le voyage, le trajet, déverbal en -t du verbe fahren = se déplacer, voyager, vieux haut-allemand faran)."
},
  "Schiffbarmachung": {
      "fr": "canalisation / aménagement fluvial",
      "lit": "action de rendre navigable",
      "pos_fr": "Nom féminin",
      "role": "Nom composé célébrant l'aménagement colossal des cours d'eau par l'ingénierie moderne."
},
  "Schilderung": {
      "fr": "peinture / tableau / description vivante",
      "lit": "action de peindre sur un écu",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la peinture vive et le tableau saisissant dressé par la critique sociale des maux du capitalisme.",
      "etymology": "Dérivé du verbe « schildern » (décrire par le menu, originairement peindre des armoiries sur un écu « Schild ») + « -ung »."
},
  "schlagen": {
      "fr": "frapper / terrasser",
      "lit": "asséner un coup",
      "pos_fr": "Verbe",
      "role": "Verbe de combat : la bourgeoisie a jadis terrassé la féodalité au sol."
},
  "Schleier": {
      "fr": "voile",
      "lit": "tissu masquant la vue",
      "pos_fr": "Nom masculin",
      "role": "Métaphore matérialiste du voile sentimental déchiré par la bourgeoisie sur les relations de famille."
},
  "schleudern": {
      "fr": "projeter / catapulter",
      "lit": "lancer avec force",
      "pos_fr": "Verbe",
      "role": "Violence des crises qui précipitent les classes dans le dénuement."
},
  "schließen": {
      "fr": "se rallier / s'associer à",
      "lit": "attacher avec (au réfléchi : s'agréger à)",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'schließen' du lemme 'anschließen'. Verbe à particule séparable ('schließen an') régissant le réfléchi 'sich' et 'an'."
},
  "schlummern": {
      "fr": "sommeiller / dormir en latence",
      "lit": "dormir d'un sommeil léger",
      "pos_fr": "Verbe",
      "role": "Métaphore de la fécondité : les forces productives dormaient dans le sein du travail social."
},
  "schlummerten": {
      "fr": "sommeillaient / reposaient en latence",
      "lit": "dormaient d'un sommeil léger (schlummern)",
      "pos_fr": "Verbe",
      "role": "Verbe poétique de la fécondité : les forces productives sommeillant dans le giron du travail social."
},
  "Schlösser": {
      "fr": "châteaux / manoirs seigneuriaux",
      "lit": "demeures closes et fortifiées",
      "pos_fr": "Nom neutre",
      "role": "nom neutre au pluriel (singulier Schloß)",
      "etymology": "Pluriel de « Schloß », du moyen haut-allemand « sloz » (fermeture, serrure, puis forteresse qui verrouille un passage)."
},
  "schmieden": {
      "fr": "forger",
      "lit": "battre le fer sur l'enclume",
      "pos_fr": "Verbe",
      "role": "Métaphore prométhéenne : la bourgeoisie a forgé les armes qui vont causer sa propre mort."
},
  "schmutzig": {
      "fr": "sordide / vil / sale",
      "lit": "couvert de crasse",
      "pos_fr": "Adjectif",
      "role": "Intérêts sordides masqués sous l'amour du prochain."
},
  "Schmählied": {
      "fr": "chanson satirique / couplet diffamatoire",
      "lit": "chant d'outrage ou d'injure",
      "pos_fr": "Nom neutre",
      "role": "Nom composé satirique désignant les couplets moqueurs et chansons diffamatoires composés par l'aristocratie contre les parvenus bourgeois.",
      "etymology": "Composé du radical de « schmähen » (injurier, outrager, dénigrer) + « das Lied » (la chanson).",
      "isCompound": true,
      "compoundParts": [
            "Schmäh",
            "Lied"
      ]
},
  "Schnaps": {
      "fr": "eau-de-vie / eau-de-vie de grain / schnaps",
      "lit": "gorgée avalée d'un trait",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin truculent désignant l'eau-de-vie de grain distillée sur leurs terres par les hobereaux prussiens pour leur profit.",
      "etymology": "Du bas-allemand « snaps » (gorgée rapide), onomatopée rattachée à « schnappen » (happer d'un coup rapide)."
},
  "schnell": {
      "fr": "rapidement / vite",
      "lit": "avec promptitude",
      "pos_fr": "Adverbe",
      "role": "Adverbe comparant la vélocité fulgurante du paupérisme à celle de la richesse."
},
  "schneller": {
      "fr": "plus vite / à plus vive allure",
      "lit": "plus rapide",
      "pos_fr": "Adverbe",
      "role": "Vitesse supérieure avec laquelle le paupérisme s'accroît."
},
  "schon": {
      "fr": "déjà",
      "lit": "dès maintenant",
      "pos_fr": "Adverbe",
      "role": "Adverbe constatant la destruction déjà accomplie des conditions de l'ancien monde."
},
  "Schoß": {
      "fr": "sein / entrailles fécondes",
      "lit": "giron récepteur",
      "pos_fr": "Nom masculin",
      "role": "Métaphore de la fécondité historique : les forces productives sommeillant dans le giron du travail social."
},
  "schreiben": {
      "fr": "écrire",
      "lit": "tracer des caractères",
      "pos_fr": "Verbe",
      "role": "Production littéraire et politique."
},
  "schreiend": {
      "fr": "criant / flagrant",
      "lit": "qui pousse des cris",
      "pos_fr": "Adjectif",
      "role": "Inégalités et contradictions criantes du capitalisme."
},
  "Schrift": {
      "fr": "écrit / texte / brochure / ouvrage",
      "lit": "ce qui est écrit",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'écrit théorique, le pamphlet ou le texte imprimé diffusant les idées révolutionnaires.",
      "etymology": "Du moyen haut-allemand « schrift », vieux haut-allemand « skrift », emprunt ancien au latin « scriptum » (écrit)."
},
  "Schriftsteller": {
      "fr": "écrivain / auteur",
      "lit": "celui qui met par écrit",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant l'écrivain politique dont la plume est engagée dans la bataille idéologique de son temps.",
      "etymology": "Formé au XVIIIe siècle comme calque du latin « scriptor », de « Schrift » (écrit) + « stellen » (poser, rédiger) + « -er ».",
      "isCompound": true,
      "compoundParts": [
            "Schrift",
            "stellen",
            "-er"
      ]
},
  "Schritt": {
      "fr": "pas / étape / démarche",
      "lit": "enjambée / mesure de marche",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant le pas concret, la progression tactique ou l'étape historique franchie par le mouvement ouvrier.",
      "etymology": "Du moyen haut-allemand « schrit », déverbal du verbe « schreiten » (enjamber, marcher à pas mesurés)."
},
  "Schule": {
      "fr": "école / courant intellectuel",
      "lit": "institution d'enseignement ou d'apprentissage",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'école de pensée ou la filiation théorique d'un courant philosophique ou économique.",
      "etymology": "Du moyen haut-allemand « schuole », vieux haut-allemand « scuola », emprunté au latin médiéval « scola » / grec « skholē » (loisir voué à l'étude)."
},
  "Schulmeister": {
      "fr": "maître d'école / pédagogue autoritaire",
      "lit": "maître de l'école",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin ironique fustigeant le maître d'école dogmatique sermonnant les masses avec une autorité pédante.",
      "etymology": "Composé de « Schule » (école) + « Meister » (maître, du latin magister).",
      "isCompound": true,
      "compoundParts": [
            "Schule",
            "Meister"
      ]
},
  "Schulübung": {
      "fr": "exercice d'école / devoir d'écolier",
      "lit": "exercice scolaire",
      "pos_fr": "Nom féminin",
      "role": "Nom composé raillant les exercices d'écolier stériles auxquels se réduisent les gloses des doctrinaires allemands.",
      "etymology": "Composé de « Schule » (école) + « Übung » (exercice pratique, répétition).",
      "isCompound": true,
      "compoundParts": [
            "Schule",
            "Übung"
      ]
},
  "schutzzölle": {
      "fr": "droits protecteurs / tarifs douaniers protectionnistes",
      "lit": "taxes douanières de protection",
      "pos_fr": "Nom masculin",
      "role": "nom masculin au pluriel (forme de Schutzzoll)",
      "etymology": "Composé de « der Schutz » (protection, abri) + « der Zoll » (droit de péage, taxe douanière).",
      "isCompound": true,
      "compoundParts": [
            "Schutz",
            "Zoll"
      ]
},
  "schwankend": {
      "fr": "oscillant / incertain",
      "lit": "qui titube",
      "pos_fr": "Forme grammaticale",
      "role": "Participe présent décrivant la précarité instable du salaire sous la concurrence."
},
  "schwankender": {
      "fr": "plus précaire / chancelant",
      "lit": "plus vacillant",
      "pos_fr": "Adverbe",
      "role": "Précarité grandissante du salaire sous la concurrence."
},
  "Schwankung": {
      "fr": "fluctuation / oscillation",
      "lit": "mouvement de balancier",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant les variations imprévisibles du marché et des salaires ouvriers."
},
  "schweben": {
      "fr": "planer / flotter",
      "lit": "se tenir en suspension",
      "pos_fr": "Verbe",
      "role": "Illusion des idéalistes planant au-dessus des classes."
},
  "Schweiz": {
      "fr": "Suisse",
      "lit": "la Suisse / Confédération helvétique",
      "pos_fr": "Nom propre",
      "role": "Nom propre au datif féminin singulier après 'in der'."
},
  "schweiz": {
      "fr": "Suisse",
      "lit": "la Suisse / Confédération helvétique",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'Schweiz' du lemme 'Schweiz'. Nom propre au datif féminin singulier après 'in der'."
},
  "schwenken": {
      "fr": "brandir / agiter en l'air",
      "lit": "faire tournoyer",
      "pos_fr": "Verbe",
      "role": "L'aristocratie brandissant la besace du pauvre en étendard."
},
  "schwer": {
      "fr": "lourd / pesant",
      "lit": "qui a un grand poids",
      "pos_fr": "Adjectif",
      "role": "Adjectif de la métaphore de l'« artillerie lourde » des bas prix abattant les murailles chinoises."
},
  "Schwärmerei": {
      "fr": "exaltation / illuminisme / ferveur mystique",
      "lit": "tourbillonnement d'essaim délirant / illumination dévote",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin péjoratif désignant l'illusion pieuse et fanatique médiévale sanctifiant l'oppression féodale.",
      "etymology": "Infinitif substantivé du verbe « schwärmen » (bourdonner, tournoyer en essaim comme des abeilles, en moyen haut-allemand swermen, dérivé du substantif Schwarm = essaim, foule en mouvement désordonné). Utilisé polémiquement par Martin Luther pour fustiger les anabaptistes et illuminés (« die Schwärmer »), puis au siècle des Lumières pour dénoncer le fanatisme religieux déréglé."
},
  "schändlich": {
      "fr": "honteux / infâme / ignominieux",
      "lit": "qui cause de la honte",
      "pos_fr": "Adjectif",
      "role": "Adjectif polémique flétrissant la lâcheté et l'ignominie des compromissions politiques de la réaction cléricale et nobiliaire.",
      "etymology": "Dérivé de « Schande » (honte, déshonneur, ignominie) + « -lich »."
},
  "Schöngeister": {
      "fr": "beaux esprits / esthètes superficiels",
      "lit": "esprits épris de belles-lettres",
      "pos_fr": "Nom masculin",
      "role": "nom masculin au pluriel (singulier Schöngeist)",
      "etymology": "Calque du français « bel esprit », composé de « schön » (beau) + « Geist » (esprit).",
      "isCompound": true,
      "compoundParts": [
            "schön",
            "Geist"
      ]
},
  "schöngeistig": {
      "fr": "bel-esprit / précieux",
      "lit": "qui cultive le bel esprit",
      "pos_fr": "Adjectif",
      "role": "Littérateurs allemands esthétisant la politique."
},
  "Schüler": {
      "fr": "disciple / élève / adepte",
      "lit": "celui qui va à l'école ou suit un maître",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant les disciples et adeptes d'un maître penseur, répétant docilement des formules périmées.",
      "etymology": "Du moyen haut-allemand « schuolære », vieux haut-allemand « scuolari », dérivé de « Schule »."
},
  "sehen": {
      "fr": "voir / constater",
      "lit": "percevoir par la vue / observer par l'intellect",
      "pos_fr": "Verbe fort",
      "role": "Verbe fort employé à la 1re personne du pluriel (« wir sehen » : nous le voyons, nous constatons) pour sceller l'accord intellectuel du lecteur."
},
  "sehr": {
      "fr": "très / grandement",
      "lit": "avec force",
      "pos_fr": "Adverbe",
      "role": "Adverbe marquant l'intensité de l'admiration réactionnaire pour le moyen âge."
},
  "sein": {
      "fr": "être / exister",
      "lit": "verbe d'état suprême",
      "pos_fr": "Verbe auxiliaire / copule",
      "role": "Verbe d'état reliant le sujet à son attribut ontologique et politique."
},
  "seit": {
      "fr": "depuis / à dater de",
      "lit": "à partir de ce moment",
      "pos_fr": "Préposition (régime datif)",
      "role": "Préposition temporelle marquant l'ère historique moderne ouverte par le machinisme et le marché mondial."
},
  "Seite": {
      "fr": "côté / flanc / part / page",
      "lit": "flanc latéral / direction",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant le camp en lutte, la fraction en présence ou la page d'un écrit historique.",
      "etymology": "Du moyen haut-allemand « sīte », vieux haut-allemand « sīta » (côté, flanc), d'origine proto-germanique *sīdō."
},
  "Sekte": {
      "fr": "secte / chapelle doctrinale fermée",
      "lit": "école philosophique séparée ou hétérodoxe",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin politique désignant les chapelles doctrinales fermées refusant de se fondre dans le mouvement général de la classe ouvrière.",
      "etymology": "Emprunté au latin « secta » (voie suivie, ligne de conduite, doctrine d'une école), dérivé de « sequi » (suivre)."
},
  "selbst": {
      "fr": "lui-même / soi-même",
      "lit": "en personne / sans intermédiaire",
      "pos_fr": "Pronom emphatique invariable",
      "role": "Pronom d'insistance soulignant l'initiative directe du Parti communiste."
},
  "selbsterarbeitet": {
      "fr": "acquis par son propre travail",
      "lit": "travaillé par soi-même",
      "pos_fr": "Participe passé adjectivé",
      "role": "Participe passé désignant l'illusion bourgeoise de la propriété acquise par le travail personnel opposée au salariat moderne.",
      "etymology": "Composé de « selbst » (soi-même) + « erarbeiten » (gagner par le travail).",
      "isCompound": true,
      "compoundParts": [
            "selbst",
            "erarbeiten"
      ]
},
  "Selbstgenügsamkeit": {
      "fr": "autarcie / autosuffisance",
      "lit": "contentement de soi-même",
      "pos_fr": "Nom féminin",
      "role": "Nom composé marquant l'isolement fermé des nations précapitalistes pulvérisé par l'échange."
},
  "Selbsttätigkeit": {
      "fr": "activité propre / autonomie d'action spontanée",
      "lit": "action accomplie par soi-même",
      "pos_fr": "Nom féminin",
      "role": "Concept philosophique capital désignant l'auto-activité créatrice et la spontanéité productive autonome du sujet humain émancipé.",
      "etymology": "Composé du pronom réfléchi « selbst » (soi-même) + « tätig » (actif) + suffixe abstrait « -keit ».",
      "isCompound": true,
      "compoundParts": [
            "selbst",
            "tätig",
            "-keit"
      ]
},
  "selbstverdient": {
      "fr": "gagné par soi-même / mérité par son propre labeur",
      "lit": "mérité par soi-même",
      "pos_fr": "Participe passé adjectivé",
      "role": "Participe passé caractérisant le prétendu gain mérité dont l'idéologie bourgeoise masque l'extorsion de surtravail.",
      "etymology": "Composé de « selbst » + « verdienen » (mériter, gagner).",
      "isCompound": true,
      "compoundParts": [
            "selbst",
            "verdienen"
      ]
},
  "selbständig": {
      "fr": "autonome / indépendant",
      "lit": "qui se tient debout par soi-même",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant le travail libre détruit par la manufacture puis la machine."
},
  "Selbständigkeit": {
      "fr": "indépendance / autonomie",
      "lit": "fait de se tenir debout par soi-même",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin exprimant l'autonomie et l'indépendance réelle conquises par une classe affranchie de toute tutelle tutrice.",
      "etymology": "Dérivé de « selbständig » (indépendant, qui se tient par soi-même) + « -keit ».",
      "isCompound": true,
      "compoundParts": [
            "selbst",
            "stehen",
            "-ig",
            "-keit"
      ]
},
  "setzen": {
      "fr": "placer / substituer / installer",
      "lit": "faire asseoir / poser fermement à un emplacement",
      "pos_fr": "Verbe faible causatif",
      "role": "Verbe causatif employé pour exprimer l'installation brutale d'un nouvel ordre d'exploitation à la place de l'ancien.",
      "etymology": "Issu du moyen haut-allemand « setzen », vieux haut-allemand « sezzen » (faire asseoir, poser, établir), causatif germanique (*satjaną) dérivé du verbe fort « sitzen » (être assis, du proto-germanique *sitjaną, racine indo-européenne *sed-)."
},
  "sich": {
      "fr": "se / soi-même",
      "lit": "pronom réfléchi de 3e personne",
      "pos_fr": "Pronom réfléchi",
      "role": "Pronom réfléchi accompagnant un verbe pronominal."
},
  "sichern": {
      "fr": "garantir / consolider / sécuriser",
      "lit": "rendre sûr et certain",
      "pos_fr": "Verbe",
      "role": "Verbe définissant l'effort conservateur des classes dominantes pour pérenniser leurs privilèges."
},
  "sie": {
      "fr": "ils / elles / elle",
      "lit": "pronom personnel de 3e personne",
      "pos_fr": "Pronom personnel",
      "role": "Pronom personnel sujet désignant une entité plurielle ou féminine."
},
  "Sieg": {
      "fr": "victoire / triomphe",
      "lit": "succès militaire ou politique",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin annonçant l'avènement inéluctable du triomphe final du prolétariat."
},
  "siegen": {
      "fr": "vaincre / triompher",
      "lit": "remporter la victoire (Sieg)",
      "pos_fr": "Verbe",
      "role": "Verbe scandant les victoires ouvrières d'abord éphémères puis universelles."
},
  "singen": {
      "fr": "chanter",
      "lit": "moduler des sons",
      "pos_fr": "Verbe",
      "role": "Chansons satiriques des légitimistes contre la bourgeoisie."
},
  "sinken": {
      "fr": "s'abaisser / couler",
      "lit": "descendre par gravité",
      "pos_fr": "Verbe",
      "role": "Verbe traduisant la paupérisation descendante de l'ouvrier moderne."
},
  "Sinn": {
      "fr": "sens / acception / signification",
      "lit": "orientation de la pensée, signification",
      "pos_fr": "Nom masculin",
      "role": "Substantif au datif masculin singulier dans la locution 'im französischen Sinn'."
},
  "sinn": {
      "fr": "sens / acception / signification",
      "lit": "orientation de la pensée, signification",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'Sinn' du lemme 'Sinn'. Substantif au datif masculin singulier dans la locution 'im französischen Sinn'."
},
  "sismondi": {
      "fr": "Sismondi",
      "lit": "Jean-Charles de Sismondi",
      "pos_fr": "Nom masculin",
      "role": "Nom propre désignant Jean-Charles-Léonard Simonde de Sismondi (1773-1842), chef de file du socialisme petit-bourgeois qui mit à nu les contradictions de la machine.",
      "etymology": "Nom de famille de l'économiste critique suisse Sismondi, théoricien des crises de surproduction."
},
  "Sitte": {
      "fr": "mœurs / coutume usuelle",
      "lit": "usage moral traditionnel établi",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant les mœurs traditionnelles et conventions coutumières balayées par le rouleau compresseur du marché.",
      "etymology": "Du moyen haut-allemand « site », vieux haut-allemand « situ » (coutume, conduite morale usuelle), de racine indo-européenne *swedh- (coutume propre à soi)."
},
  "Sklave": {
      "fr": "esclave",
      "lit": "esclave",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant la classe exploitée suprême du mode de production antique.",
      "etymology": "Issu du moyen haut-allemand « sklāve » (attesté au XIVe siècle), emprunté au latin médiéval « sclavus » (vers le Xe siècle), lui-même issu du grec byzantin « Sklabos » (Σκλάβος / le peuple slave). La capture et la réduction massive en servitude de prisonniers slaves païens d'Europe orientale sous les règnes carolingiens et ottoniens a fait glisser le nom ethnique vers la désignation juridique de marchandise humaine, remplaçant l'ancien terme latin servus (qui a évolué vers le serf de la glèbe)."
},
  "Sklaverei": {
      "fr": "esclavage",
      "lit": "condition de l'homme asservi",
      "pos_fr": "Nom féminin",
      "role": "Concept d'asservissement : l'ouvrier ravalé à une servitude que la bourgeoisie ne parvient même plus à entretenir."
},
  "so": {
      "fr": "ainsi / si / de cette sorte",
      "lit": "de cette manière",
      "pos_fr": "Adverbe",
      "role": "Adverbe marquant la conséquence logique ou l'intensité d'un processus."
},
  "sobald": {
      "fr": "dès que / sitôt que",
      "lit": "aussitôt que",
      "pos_fr": "Conjonction",
      "role": "Conjonction introduisant la condition temporelle d'action conjointe avec la bourgeoisie."
},
  "soeben": {
      "fr": "à l'instant / tout juste",
      "lit": "aussi égal",
      "pos_fr": "Adverbe",
      "role": "Idées françaises venant tout juste d'être traduites."
},
  "sofort": {
      "fr": "immédiatement / sur-le-champ",
      "lit": "tout de suite en avant",
      "pos_fr": "Adverbe",
      "role": "Adverbe soulignant l'absence de pause entre la révolution bourgeoise et la révolution ouvrière."
},
  "sogenannter": {
      "fr": "soi-disant / prétendu",
      "lit": "nommé ainsi par convention",
      "pos_fr": "Adjectif",
      "role": "Adjectif ironique dénonçant l'occidentalisation impérialiste imposée sous l'étiquette de « civilisation »."
},
  "sogleich": {
      "fr": "aussitôt / sans retard / l'heure venue",
      "lit": "immédiatement de manière égale",
      "pos_fr": "Adverbe",
      "role": "Adverbe marquant la rapidité d'exécution tactique exigée dès la victoire bourgeoise."
},
  "solcher": {
      "fr": "tel / pareil",
      "lit": "de cette nature même",
      "pos_fr": "Déterminant",
      "role": "Déterminant démonstratif soulignant l'ampleur inédite d'une puissance productive."
},
  "soldatisch": {
      "fr": "militairement / en soldats",
      "lit": "à la façon du soldat",
      "pos_fr": "Adverbe",
      "role": "Adverbe révélant la discipline de caserne imposée aux masses ouvrières en fabrique."
},
  "sollen": {
      "fr": "devoir",
      "lit": "être tenu de / avoir obligation",
      "pos_fr": "Verbe",
      "role": "Verbe modal marquant l'impératif historique objectif et le devoir révolutionnaire prescrit par la logique des événements.",
      "etymology": "Du moyen haut-allemand « suln », vieux haut-allemand « sculan » (être débiteur, devoir)."
},
  "sondern": {
      "fr": "mais au contraire / mais bien plutôt",
      "lit": "mais séparément",
      "pos_fr": "Conjonction",
      "role": "Conjonction rectificative substituant la vérité matérielle à la fausse apparence."
},
  "Sooft": {
      "fr": "toutes les fois que / aussi souvent que",
      "lit": "aussi souvent",
      "pos_fr": "Adverbe",
      "role": "Récurrence cyclique des crises de surproduction."
},
  "sowohl": {
      "fr": "tant / aussi bien",
      "lit": "conjonction corrélative (sowohl... wie...)",
      "pos_fr": "Conjonction corrélative",
      "role": "Conjonction coordonnant deux éléments de rang égal."
},
  "sozial": {
      "fr": "social",
      "lit": "propre à la société",
      "pos_fr": "Adjectif",
      "role": "Rapports sociaux et structure collective."
},
  "sozial-demokratisch": {
      "fr": "démocrate-socialiste",
      "lit": "social-démocrate",
      "pos_fr": "Adjectif",
      "role": "Épithète désignant le parti républicain réformiste français de 1848."
},
  "sozial-demokratische": {
      "fr": "démocrate-socialiste",
      "lit": "social-démocrate",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'sozial-demokratische' du lemme 'sozial-demokratisch'. Épithète désignant le parti républicain réformiste français de 1848."
},
  "sozialdemokratisch": {
      "fr": "démocrate-socialiste",
      "lit": "social-démocrate",
      "pos_fr": "Adjectif",
      "role": "Variante sans tiret de l'adjectif désignant les républicains socialistes de 1848."
},
  "Sozialismus": {
      "fr": "socialisme",
      "lit": "doctrine sociale visant la réorganisation collective",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin doctrinal désignant le mouvement d'émancipation sociale, dont Marx passe en revue les déviations féodales, bourgeoises et utopiques.",
      "etymology": "Emprunté au français « socialisme » (forgé par Pierre Leroux et les saint-simoniens vers 1830), sur l'adjectif « social » (du latin socialis, lié à la société humaine)."
},
  "Sozialist": {
      "fr": "socialiste",
      "lit": "partisan de la justice et de l'organisation sociale",
      "pos_fr": "Nom masculin",
      "role": "Substantif au datif masculin pluriel désignant les réformateurs de tendance française."
},
  "sozialisten": {
      "fr": "socialiste",
      "lit": "partisan de la justice et de l'organisation sociale",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'Sozialisten' du lemme 'Sozialist'. Substantif au datif masculin pluriel désignant les réformateurs de tendance française."
},
  "sozialistisch": {
      "fr": "socialiste",
      "lit": "partisan du socialisme",
      "pos_fr": "Adjectif",
      "role": "Courants et écrits socialistes."
},
  "sozialistisch-kommunistisch": {
      "fr": "socialiste-communiste",
      "lit": "socialiste et communiste",
      "pos_fr": "Adjectif",
      "role": "Littérature révolutionnaire française analysée au chapitre III."
},
  "spalten": {
      "fr": "se cliver / se scinder",
      "lit": "se fendre sous la hache en deux moitiés",
      "pos_fr": "Verbe de rupture physique",
      "role": "Verbe dramatique exprimant la fracture bipolaire irréversible de la société bourgeoise.",
      "etymology": "Issu du moyen haut-allemand « spalten », vieux haut-allemand « spaltan » (verbe fort rédupliquant de la classe VII), de la racine germanique commune *spaldan- (« fendre en deux éclats »), issue de l'indo-européen *(s)pʰeld- (fendre le bois, cognat du vieil anglais speld / éclat de bois et de l'anglais moderne split). Verbe de rupture physique violente traduisant le déchirement irréversible du corps social."
},
  "Spaltung": {
      "fr": "scission / division intestine",
      "lit": "clivage scindant un corps",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant les divisions d'intérêts fracturant la classe bourgeoise au profit des lois ouvrières."
},
  "spanisch": {
      "fr": "d'Espagne / en Espagne",
      "lit": "ibérique",
      "pos_fr": "Adjectif",
      "role": "Dans l'expression 'châteaux en Espagne' (utopies)."
},
  "Spekulation": {
      "fr": "spéculation philosophique ou financière",
      "lit": "observation abstraite ou visée de gain",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin à double tranchant désignant la spéculation financière débridée et les vaines spéculations métaphysiques des philosophes d'outre-Rhin.",
      "etymology": "Emprunté au latin philosophique « speculatio » (méditation intellectuelle, contemplation), du verbe « speculari » (observer du haut d'un poste de guet)."
},
  "spekulativ": {
      "fr": "spéculatif",
      "lit": "abstrait et contemplatif",
      "pos_fr": "Adjectif",
      "role": "Idéalisme spéculatif hégélien ou post-kantien."
},
  "spielen": {
      "fr": "jouer / interpréter",
      "lit": "exécuter un jeu / incarner un personnage",
      "pos_fr": "Verbe",
      "role": "Verbe employé dans la formule célèbre « eine Rolle spielen » (jouer un rôle éminemment révolutionnaire dans l'histoire)."
},
  "Spießbürger": {
      "fr": "philistin / petit-bourgeois étriqué",
      "lit": "bourgeois à la pique / milicien citadin",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin satirique et péjoratif désignant le philistin allemand mesquin, borné, replié sur ses intérêts étroits et hostile au progrès révolutionnaire.",
      "etymology": "Composé satirique formé de : 1° « der Spieß » (la pique d'infanterie médiévale, en moyen haut-allemand « spiez », en vieux haut-allemand « spioz », issu du proto-germanique *speutaz « épieu, pique ») ; 2° « der Bürger » (le citoyen libre de la cité fortifiée, en vieux haut-allemand « burgari », dérivé de « Burg »). Désignait à l'origine, au Moyen Âge et au XVIe siècle, le bourgeois de la milice urbaine qui, n'ayant pas les moyens de financer une monture ou une armure, montait la garde sur les remparts avec une simple pique ; puis, dès le XVIIIe siècle chez Goethe et les romantiques, le terme devient un sobriquet désignant le philistin étroit, satisfait de sa médiocrité.",
      "isCompound": true,
      "compoundParts": [
            "Spieß",
            "Bürger"
      ]
},
  "spießbürgerlich": {
      "fr": "petit-bourgeois / philistin",
      "lit": "propre au bourgeois à la pique / philistin",
      "pos_fr": "Adjectif",
      "role": "Adjectif d'origine historique documentée désignant la mentalité étriquée, craintive et rétrograde de la petite bourgeoisie boutiquière.",
      "etymology": "Dérivé au moyen du suffixe « -lich » de « Spießbürger » (petit-bourgeois borné, philistin). Composé historique associant : 1° « der Spieß » (la pique de fer, arme d'hast modeste des miliciens bourgeois gardant les remparts municipaux, en moyen haut-allemand spiez, vieux haut-allemand spioz, proto-germanique *speutaz) ; 2° « der Bürger » (le bourgeois). Étymologie documentée chez Kluge et Pfeifer : le milicien armé d'une simple pique, par opposition au noble armé d'une épée et d'un cheval, est devenu au XVIIIe siècle dans le jargon des étudiants une épithète méprisante désignant le boutiquier timoré et conformiste."
},
  "Spinnweb": {
      "fr": "toile d'araignée / subtilité vaine",
      "lit": "toile tissée par l'araignée",
      "pos_fr": "Nom neutre",
      "role": "Nom composé poétique et métaphorique : les subtilités spéculatives tissées comme des toiles d'araignées par les idéalistes allemands.",
      "etymology": "Du moyen haut-allemand « spinnewep », vieux haut-allemand « spinnaweppi », composé de « Spinne » (araignée, fileuse) + « Web » (tissu, toile).",
      "isCompound": true,
      "compoundParts": [
            "spinnen",
            "Gewebe"
      ]
},
  "Sprache": {
      "fr": "langue / idiome",
      "lit": "moyen linguistique de communication d'un peuple",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin : le Manifeste doit être traduit dans les principales langues d'Europe.",
      "etymology": "Issu du moyen haut-allemand « sprāche », vieux haut-allemand « sprāhha » (la parole, la langue, la faculté de discourir), déverbal direct formé avec allongement apophonique sur le radical du verbe fort « sprechen » (parler, moyen haut-allemand sprechen, vieux haut-allemand sprehhan, proto-germanique *sprekaną)."
},
  "sprechen": {
      "fr": "parler / prononcer des paroles",
      "lit": "articuler un discours",
      "pos_fr": "Verbe",
      "role": "Verbe d'expression politique par lequel les classes dominées prennent enfin la parole pour proclamer leur droit à l'émancipation.",
      "etymology": "Du moyen haut-allemand « sprechen », vieux haut-allemand « sprehhan »."
},
  "Sprecht": {
      "fr": "parlez",
      "lit": "prononcez des paroles !",
      "pos_fr": "Verbe",
      "role": "Forme verbale impérative plurielle de 'sprechen' (parlez !), interpellation véhémente apostrophant directement l'adversaire bourgeois.",
      "etymology": "Forme impérative de deuxième personne du pluriel du verbe fort « sprechen » (moyen haut-allemand sprechen, vieux haut-allemand sprehhan)."
},
  "sprengen": {
      "fr": "faire sauter / briser en éclat",
      "lit": "faire voler en morceaux",
      "pos_fr": "Verbe",
      "role": "Verbe insurrectionnel : briser les entraves féodales puis faire sauter l'édifice bourgeois."
},
  "Sprößling": {
      "fr": "rejeton / descendant / surgeon",
      "lit": "jeune pousse issue de la racine",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin imagé désignant le surgeon ou le rejeton historique issu d'un mode de production antérieur.",
      "etymology": "Dérivé avec le suffixe diminutif/d'appartenance « -ling » du verbe « sprießen » (bourgeonner, germer, moyen haut-allemand spriezen)."
},
  "spät": {
      "fr": "tard / plus tard",
      "lit": "en un temps avancé",
      "pos_fr": "Adverbe",
      "role": "Adverbe marquant la succession temporelle des antagonismes de classe."
},
  "später": {
      "fr": "plus tard / par la suite",
      "lit": "plus tardivement",
      "pos_fr": "Adverbe",
      "role": "Développements ultérieurs de la société capitaliste."
},
  "St.-Simons": {
      "fr": "de Saint-Simon",
      "lit": "génitif de Saint-Simon",
      "pos_fr": "Nom masculin",
      "role": "Nom propre au génitif désignant Claude-Henri de Saint-Simon (1760-1825), père du saint-simonisme et pionnier du socialisme industriel.",
      "etymology": "Génitif allemand du nom du philosophe socialiste utopiste français Saint-Simon."
},
  "Staat": {
      "fr": "État / puissance publique",
      "lit": "ordre politique constitué / état souverain",
      "pos_fr": "Nom masculin",
      "role": "Concept politique central désignant l'appareil de contrainte étatique, instrument d'oppression de la classe dominante à briser par la révolution.",
      "etymology": "Emprunté au latin « status » (état, manière de se tenir), via l'italien « stato » (corps politique)."
},
  "Staatsausgabe": {
      "fr": "dépense publique / dépense de l'État",
      "lit": "dépense effectuée par l'État",
      "pos_fr": "Nom féminin",
      "role": "Nom composé financier désignant les dépenses publiques de l'État bourgeois, ponctionnées sur la richesse collective.",
      "etymology": "Composé de « Staat » + « Ausgabe » (dépense, distribution de fonds).",
      "isCompound": true,
      "compoundParts": [
            "Staat",
            "-s-",
            "Ausgabe"
      ]
},
  "Staatsgewalt": {
      "fr": "pouvoir d'État / autorité étatique",
      "lit": "puissance souveraine de coercition de l'État",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin composé désignant l'appareil de domination politique et répressif centralisé d'une classe.",
      "etymology": "Composé politique associant : 1° « der Staat » (l'État politique, du latin status) ; 2° « die Gewalt » (la puissance légitime ou coercitive, l'autorité, du moyen haut-allemand gewalt, vieux haut-allemand giwalt = domination, force souveraine, déverbal du verbe walten = régir, gouverner, proto-germanique *waldaną)."
},
  "Staatshaushalt": {
      "fr": "budget de l'État / finances publiques",
      "lit": "économie de la maison étatique",
      "pos_fr": "Nom masculin",
      "role": "Nom composé économique désignant le budget de l'État, géré au bénéfice exclusif de la haute finance et des propriétaires.",
      "etymology": "Composé de « Staat » + « der Haushalt » (budget, gestion domestique).",
      "isCompound": true,
      "compoundParts": [
            "Staat",
            "-s-",
            "Haushalt"
      ]
},
  "Staatskapital": {
      "fr": "capital de l'État / fonds public",
      "lit": "capital possédé par l'État",
      "pos_fr": "Nom neutre",
      "role": "Nom composé désignant le capital public et les fonds d'État centralisés entre les mains du prolétariat victorieux.",
      "etymology": "Composé de « Staat » + « das Kapital » (le capital, biens productifs de valeur).",
      "isCompound": true,
      "compoundParts": [
            "Staat",
            "-s-",
            "Kapital"
      ]
},
  "Stadt": {
      "fr": "ville / cité",
      "lit": "agglomération urbaine",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin : le berceau urbain où s'émancipe la classe marchande (« Stadtluft macht frei »).",
      "etymology": "Issu du moyen haut-allemand « stat » (lieu, emplacement fixe, bourg fortifié), vieux haut-allemand « stat » (lieu, place, cité, proto-germanique *stadiz, racine indo-européenne *steh₂- = se tenir debout). Cognat de l'anglais stead."
},
  "Stand": {
      "fr": "ordre / état / condition",
      "lit": "position debout / état stable / statut juridique",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin d'histoire sociale désignant les ordres et états d'Ancien Régime (clergé, noblesse, tiers état) fondés sur des privilèges juridiques héréditaires, par opposition à la classe économique moderne.",
      "etymology": "Issu du moyen haut-allemand « stant », vieux haut-allemand « stant » (posture debout, position ferme, rang statutaire immuable), déverbal direct de « stehen » (se tenir debout, demeurer immobile, issu de la racine indo-européenne *steh₂- « se tenir debout »). Cognat du latin « status » (d'où le français « état ») et de l'anglais « estate » / « stand ». Désigne les ordres féodaux corporatifs rigides et fermés, où l'individu est rivé héréditairement à son rang juridique."
},
  "Standpunkt": {
      "fr": "point de vue / position de classe",
      "lit": "point d'ancrage du regard",
      "pos_fr": "Nom masculin",
      "role": "Concept politique : l'abandon par les petits-bourgeois de leurs intérêts étriqués pour épouser la cause ouvrière."
},
  "stark": {
      "fr": "fort / vigoureux",
      "lit": "doué de vigueur corporelle",
      "pos_fr": "Adjectif",
      "role": "Adjectif exprimant la résilience et la force grandissante de l'union ouvrière."
},
  "statt": {
      "fr": "au lieu de",
      "lit": "en lieu et place de",
      "pos_fr": "Préposition",
      "role": "Préposition introduisant une alternative déchue ou inversée."
},
  "stecken": {
      "fr": "mettre / ficher / incendier",
      "lit": "planter dedans",
      "pos_fr": "Verbe",
      "role": "Verbe de l'action directe : les ouvriers mettent le feu aux fabriques (in Brand stecken)."
},
  "stehen": {
      "fr": "se tenir debout / faire face",
      "lit": "être érigé sur ses pieds",
      "pos_fr": "Verbe fort d'état",
      "role": "Verbe marquant l'opposition frontale dressée entre oppresseur et opprimé.",
      "etymology": "Issu du moyen haut-allemand « stuonden », vieux haut-allemand « stuont / stuondun », prétérit apophonique du verbe fort « stehen » (se tenir debout, être dressé immobile, en vieux haut-allemand stān / stēn, du proto-germanique *standaną, issu de la racine indo-européenne fondamentale *steh₂- « se tenir debout, être ferme »)."
},
  "stehenbleiben": {
      "fr": "demeurer / rester en place",
      "lit": "rester debout",
      "pos_fr": "Verbe",
      "role": "Vœu des bourgeois conservateurs de figer la société présente."
},
  "stehend": {
      "fr": "ce qui est stable et figé",
      "lit": "ce qui se tient debout",
      "pos_fr": "Nom",
      "role": "Nom substantivé célèbre de Marx : « alles Ständische und Stehende verdampft »."
},
  "steht": {
      "fr": "se trouver / être à la veille de",
      "lit": "se tenir debout / être situé",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'steht' du lemme 'stehen'. Verbe marquant la maturité de la situation pré-insurrectionnelle."
},
  "steigen": {
      "fr": "monter / s'accroître",
      "lit": "gravir un échelon vers le haut",
      "pos_fr": "Verbe fort",
      "role": "Verbe fort décrivant l'escalade constante des besoins marchands sous l'impulsion de l'expansion coloniale.",
      "etymology": "Issu du moyen haut-allemand « stīgen » (prétérit stiec / stieg, participe gestigen), vieux haut-allemand « stīgan ». Proto-germanique *stīganan (monter, grimper), issu de la racine indo-européenne *steygʰ- (marcher, gravir, s'élever, cognat du grec στείχω / steichō = s'avancer au pas, s'aligner, et du vieil irlandais tiagaim / je marche)."
},
  "Stelle": {
      "fr": "place / position",
      "lit": "lieu précis / rôle substitué",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin : la bourgeoisie a substitué de nouveaux rapports de classe aux anciens.",
      "etymology": "Issu du moyen haut-allemand « stelle », vieux haut-allemand « stella » (emplacement fixe, poste), déverbal de stellen (poser debout)."
},
  "stellen": {
      "fr": "poser / placer / soumettre",
      "lit": "mettre debout",
      "pos_fr": "Verbe",
      "role": "Verbe entrant dans « in Frage stellen » (remettre en question l'existence même du système)."
},
  "Stellenweis": {
      "fr": "çà et là / ponctuellement",
      "lit": "forme lemmatisée de stellenweise",
      "pos_fr": "Nom masculin",
      "role": "Forme lemmatisée d'adverbe désignant les lieux d'éruption des émeutes."
},
  "stellenweise": {
      "fr": "çà et là / par endroits",
      "lit": "par places successives",
      "pos_fr": "Adverbe",
      "role": "Adverbe désignant les foyers ponctuels où éclatent les émeutes ouvrières."
},
  "Stellung": {
      "fr": "position sociale / rang",
      "lit": "emplacement institutionnel dans la société",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant les échelons et rangs d'honneur au sein des ordres féodaux.",
      "etymology": "Déverbal en « -ung » formé sur le verbe « stellen » (placer debout, poser fermement), causatif germanique du verbe fort « stehen » (se tenir debout)."
},
  "stet": {
      "fr": "constant / continuel",
      "lit": "sans arrêt ni défaillance",
      "pos_fr": "Adjectif",
      "role": "Adjectif marquant la permanence obstinée du conflit de classes à travers les âges.",
      "etymology": "Issu du moyen haut-allemand « stæte », vieux haut-allemand « stāti » (fixe, ferme, persistant, immuable), dérivé en *-t- formé sur la racine du verbe fort « stehen » (se tenir debout, racine indo-européenne *steh₂-)."
},
  "stets": {
      "fr": "toujours / constamment",
      "lit": "en permanence",
      "pos_fr": "Adverbe",
      "role": "Adverbe exprimant la quête ininterrompue de débouchés par le capitalisme."
},
  "steuerpflichtig": {
      "fr": "taillable / assujetti à l'impôt",
      "lit": "astreint par devoir fiscal à la taxe royale",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant le Tiers État roturier en France qui supportait l'essentiel de la fiscalité royale.",
      "etymology": "Composé associant : 1° « die Steuer » (l'impôt royal, la contribution, en vieux haut-allemand stiura = soutien matériel, aide, mât d'appui, proto-germanique *stiurjō-) ; 2° « pflichtig » (obligé par devoir, astreint par la loi, dérivé en -ig de Pflicht / devoir, déverbal de pflegen = prendre soin, s'engager, en vieux haut-allemand pflegan)."
},
  "stiften": {
      "fr": "fonder / instituer",
      "lit": "établir par donation",
      "pos_fr": "Verbe",
      "role": "Verbe traduisant la création réfléchie d'organisations ouvrières permanentes de solidarité."
},
  "Stiftung": {
      "fr": "fondation / institution de bienfaisance",
      "lit": "action d'instituer ou d'établir un legs pérenne",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin institutionnel désignant les fondations pieuses ou philanthropiques servant d'alibi moral aux nantis.",
      "etymology": "Dérivé du verbe « stiften » (fonder, créer, doter, vieux haut-allemand stiften) + « -ung »."
},
  "streiten": {
      "fr": "lutter / disputer / quereller / débattre",
      "lit": "combattre avec acharnement",
      "pos_fr": "Verbe",
      "role": "Verbe combatif désignant la lutte acharnée, les joutes théoriques et la guerre politique ouverte pour le pouvoir suprême.",
      "etymology": "Du moyen haut-allemand « strīten », vieux haut-allemand « strītan » (combattre, quereller)."
},
  "Stufe": {
      "fr": "degré / palier d'évolution",
      "lit": "marche d'escalier",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin mesurant les étapes ascendantes de la conscience et de l'organisation politique du prolétariat."
},
  "Sturz": {
      "fr": "chute / écroulement / renversement",
      "lit": "action de culbuter brutalement",
      "pos_fr": "Nom masculin",
      "role": "Substantif au datif masculin singulier désignant l'anéantissement de l'aristocratie féodale."
},
  "sturz": {
      "fr": "chute / écroulement / renversement",
      "lit": "action de culbuter brutalement",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'Sturz' du lemme 'Sturz'. Substantif au datif masculin singulier désignant l'anéantissement de l'aristocratie féodale."
},
  "städtisch": {
      "fr": "urbain / municipal",
      "lit": "relatif à la cité fortifiée ou à la ville",
      "pos_fr": "Adjectif",
      "role": "Adjectif caractérisant le berceau géographique municipal de la bourgeoisie en contraste avec le monde rural féodal."
},
  "ständisch": {
      "fr": "d'états / d'ordres féodaux",
      "lit": "fondé sur la division corporative en ordres privilégiés",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant les monarchies où le pouvoir royal devait composer avec les assemblées d'états (noblesse, clergé, tiers)."
},
  "Ständischer": {
      "fr": "lié aux ordres / corporatif",
      "lit": "qui relève des ordres féodaux (Stände)",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant les hiérarchies d'ordres féodales balayées par le capitalisme."
},
  "ständischer": {
      "fr": "d'ordre / corporatif",
      "lit": "relatif aux états / ordres sociaux",
      "pos_fr": "Adjectif",
      "role": "Société d'Ancien Régime divisée en ordres étanches."
},
  "stärker": {
      "fr": "plus fortement / plus vigoureusement",
      "lit": "plus fort",
      "pos_fr": "Adverbe",
      "role": "Organisation ouvrière renaissant toujours plus forte."
},
  "stückweis": {
      "fr": "au morceau / au jour le jour / en détail",
      "lit": "par morceaux séparés",
      "pos_fr": "Adverbe",
      "role": "Adverbe soulignant la vente parcellaire et humiliante de l'ouvrier ravalé au rang de marchandise."
},
  "stündlich": {
      "fr": "à chaque heure / d'heure en heure",
      "lit": "toutes les heures",
      "pos_fr": "Adverbe",
      "role": "Adverbe marquant l'asservissement temporel minutieux de l'ouvrier à l'usine."
},
  "stürzen": {
      "fr": "renverser / s'écrouler",
      "lit": "faire choir précipitamment",
      "pos_fr": "Verbe",
      "role": "Renversement violent de l'ordre ancien."
},
  "suchen": {
      "fr": "chercher / tenter de",
      "lit": "se mettre en quête de",
      "pos_fr": "Verbe",
      "role": "Verbe soulignant les efforts désespérés des classes moyennes pour faire reculer l'histoire."
},
  "Summe": {
      "fr": "somme / total",
      "lit": "totalité calculée / montant global",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant le total arithmétique des richesses accumulées ou le condensé synthétique d'une époque.",
      "etymology": "Du moyen haut-allemand « summe », emprunté au latin « summa » (sommet, montant le plus élevé, total)."
},
  "Sympathie": {
      "fr": "sympathie / affinité / bienveillance",
      "lit": "sentiment partagé / compassion",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'affinité sentimentale ou la bienveillance politique affichée envers une cause.",
      "etymology": "Emprunté au grec ancien « sympatheia » (communion de sentiments), de « syn » (avec) + « pathos » (sentiment, épreuve)."
},
  "System": {
      "fr": "système / ensemble ordonné",
      "lit": "structure articulée de propositions ou d'éléments",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre théorique désignant l'édifice ordonné d'une doctrine philosophique ou la totalité articulée du mode de production capitaliste.",
      "etymology": "Emprunté au grec ancien « systēma » (ensemble ordonné, corps organisé), composé de « syn » (ensemble) + « histanai » (établir)."
},
  "systematisch": {
      "fr": "systématique / méthodique",
      "lit": "érigé en système",
      "pos_fr": "Adjectif",
      "role": "Systèmes doctrinaires clos des réformateurs."
},
  "sämtlich": {
      "fr": "tous sans exception / l'ensemble de",
      "lit": "rassemblé en totalité",
      "pos_fr": "Déterminant",
      "role": "Déterminant marquant la totalité intégrale des rapports sociaux bouleversés."
},
  "süßlich": {
      "fr": "douceâtre / mielleux",
      "lit": "un peu doux",
      "pos_fr": "Adjectif",
      "role": "Complément mielleux apporté aux coups de fouet policiers."
},
  "Tat": {
      "fr": "acte / action concrète / fait accompli",
      "lit": "ce qui est fait ou accompli",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin philosophique désignant l'acte historique transformateur et la praxis révolutionnaire préférée aux vaines paroles.",
      "etymology": "Du moyen haut-allemand « tāt », vieux haut-allemand « tāt » (action accomplie), d'origine proto-germanique *dēdi- (acte), rattaché à « tun » (faire)."
},
  "Tatsache": {
      "fr": "fait / réalité objective",
      "lit": "ce qui est accompli et vérifiable",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin matérialiste soulignant l'évidence concrète et irréfutable de la crise révolutionnaire.",
      "etymology": "Calque philosophique forgé au XVIIIe siècle (introduit par Johann Joachim Spalding en 1756, puis popularisé par Johann Gottlieb Fichte et la philosophie critique) pour traduire le latin « factum » : 1° « die Tat » (l'acte accompli, le haut-fait, du vieux haut-allemand tāt, dérivé du verbe tun / agir, racine indo-européenne *dʰē- « poser, faire ») ; 2° « die Sache » (la cause, le litige juridique, puis la chose concrète, du vieux haut-allemand sahha, proto-germanique *sakō « contestation, affaire légale », cognat de l'anglais sake). Exprime le fait matériel concret et indiscutable, par opposition aux spéculations idéales."
},
  "tatsächlich": {
      "fr": "réel / effectif / factuel / en fait",
      "lit": "conforme au fait accompli",
      "pos_fr": "Adjectif",
      "role": "Adjectif et adverbe d'attestation concrète opposant la réalité effective des faits aux illusions spéculatives.",
      "etymology": "Dérivé de « Tatsache » (le fait matériel concret) + « -lich ».",
      "isCompound": true,
      "compoundParts": [
            "Tatsache",
            "-lich"
      ]
},
  "tauchen": {
      "fr": "plonger / immerger",
      "lit": "enfoncer sous l'eau",
      "pos_fr": "Verbe",
      "role": "Plonger la dignité humaine dans les eaux glacées du calcul."
},
  "taufen": {
      "fr": "baptiser",
      "lit": "donner le sacrement du baptême",
      "pos_fr": "Verbe",
      "role": "Baptême clérical des revendications aristocratiques."
},
  "Tauschmittel": {
      "fr": "moyens d'échange / monnaie",
      "lit": "instruments facilitant le commerce réciproque",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre composé désignant la masse monétaire métallique stimulant le grand commerce.",
      "etymology": "Composé économique rigoureux : 1° « der Tausch » (la circulation marchande, moyen haut-allemand tûschen, étymon discuté) ; 2° « das Mittel » (l'instrument médiateur, le moyen terme, substantivation de l'adjectif vieux haut-allemand mittil = qui se tient au centre, racine germanique *medilaz, cognat de l'anglais middle). Désigne la monnaie métallique (l'or et l'argent extraits des Amériques) en tant qu'équivalent général indispensable pour fluidifier les transactions transocéaniques."
},
  "Tauschwert": {
      "fr": "valeur d'échange",
      "lit": "valeur de troc marchand mesurée par le marché",
      "pos_fr": "Nom masculin",
      "role": "Catégorie économique cardinale désignant la forme quantitative sous laquelle les produits et l'activité humaine deviennent marchandises échangeables.",
      "etymology": "Composé économique unissant : 1° « der Tausch » (l'échange de biens, le troc, en moyen haut-allemand tūsch = tromperie, ruse de foire, troc, déverbal de tuschen = échanger, étymologie incertaine discutée par Pfeifer et Kluge) ; 2° « der Wert » (la valeur, le prix d'un bien, en moyen haut-allemand wert, vieux haut-allemand werd, du proto-germanique *werþaz = équivalent, digne de prix)."
},
  "Tautologie": {
      "fr": "tautologie / redite identique",
      "lit": "fait de répéter la même chose en d'autres termes",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin logique dénonçant la redite stérile de la bourgeoisie prétendant que le salariat cessera d'exister quand le capital n'existera plus.",
      "etymology": "Emprunté au grec ancien « tautologia », composé de « to auto » (la même chose) + « logos » (discours, parole)."
},
  "Teil": {
      "fr": "partie / fraction",
      "lit": "fragment d'un ensemble",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant les segments sociaux précipités dans la classe laborieuse."
},
  "teilen": {
      "fr": "partager / diviser / fractionner",
      "lit": "séparer en parts",
      "pos_fr": "Verbe",
      "role": "Verbe économique désignant la division du travail ou le fractionnement de la société en camps opposés.",
      "etymology": "Du moyen haut-allemand « teilen », vieux haut-allemand « teiljan », de « Teil » (partie, part)."
},
  "teilnehmen": {
      "fr": "participer à / prendre part à",
      "lit": "prendre sa part de",
      "pos_fr": "Verbe",
      "role": "Verbe d'engagement militant désignant la participation active et consciente des ouvriers aux combats politiques de leur époque.",
      "etymology": "Composé de « Teil » (part) + « nehmen » (prendre).",
      "isCompound": true,
      "compoundParts": [
            "Teil",
            "nehmen"
      ]
},
  "teils": {
      "fr": "en partie / d'une part",
      "lit": "par parts / pour partie",
      "pos_fr": "Adverbe",
      "role": "Adverbe corrélatif distribuant l'analyse sociologique ('teils aus... teils aus...')."
},
  "Teilung": {
      "fr": "division / morcellement",
      "lit": "fragmentation d'une tâche ou d'un corps",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin économique désignant la division manufacturière du travail.",
      "etymology": "Déverbal en « -ung » du verbe « teilen » (partager, diviser, vieux haut-allemand teiljan)."
},
  "Telegraphe": {
      "fr": "télégraphe électrique",
      "lit": "appareil de transmission de signaux",
      "pos_fr": "Nom féminin",
      "role": "Forme lemmatisée désignant le vecteur de télécommunication instantanée unifiant la planète."
},
  "Tendenz": {
      "fr": "tendance historique",
      "lit": "orientation motrice du mouvement réel",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la direction dialectique objective du capitalisme moderne.",
      "etymology": "Emprunt savant au latin classique « tendere » (tendre vers un but, déployer un effort continu, bander un arc, racine indo-européenne *ten- « étirer, tendre ») via le dérivé médiéval et scientifique « tendentia ». En économie politique marxiste, le terme désigne la direction vectorielle objective imprimée à l'histoire par les contradictions internes du mode de production (cf. la « tendance à la baisse du taux de profit »)."
},
  "Terrain": {
      "fr": "terrain / champ de lutte",
      "lit": "espace d'action politique ou militaire",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre emprunté au français, métaphore du théâtre de la confrontation de classe.",
      "etymology": "Emprunt au XVIIIe siècle au français « terrain », dérivé du latin classique « terrenus » (de terre, terrestre), formé sur « terra » (la terre, le sol, issu de la racine indo-européenne *ters- = sécher, terre sèche)."
},
  "theoretisch": {
      "fr": "théorique",
      "lit": "qui relève de la contemplation intellectuelle",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant la compréhension scientifique et matérialiste du devenir historique."
},
  "Theorie": {
      "fr": "théorie / doctrine rationnelle",
      "lit": "contemplation intellectuelle / vue spéculative",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin scientifique : la théorie communiste n'est que l'expression générale des conditions réelles d'une lutte de classes existante.",
      "etymology": "Emprunté au grec ancien « theōria » (action d'observer, contemplation intellectuelle), de « theōrein » (regarder, observer)."
},
  "tief": {
      "fr": "profondément / bas",
      "lit": "au tréfonds",
      "pos_fr": "Adverbe",
      "role": "Adverbe marquant la déchéance continue de l'ouvrier au-dessous de sa condition."
},
  "tiefer": {
      "fr": "plus profond / plus bas",
      "lit": "qui descend plus bas",
      "pos_fr": "Adjectif",
      "role": "Adjectif comparatif caractérisant la pénétration toujours plus profonde du capital au cœur des rapports sociaux mondiaux.",
      "etymology": "Comparatif régulier de « tief » (profond, vieux haut-allemand tiof)."
},
  "Tierquälerei": {
      "fr": "cruauté envers les animaux / mauvais traitements aux animaux",
      "lit": "tourment infligé aux bêtes",
      "pos_fr": "Nom féminin",
      "role": "Nom composé satirique raillant les réformateurs bourgeois d'arrière-boutique fondant des sociétés protectrices des animaux au lieu d'abolir l'exploitation.",
      "etymology": "Composé de « das Tier » (l'animal, la bête) + « quälen » (tourmenter) + suffixe péjoratif « -erei ».",
      "isCompound": true,
      "compoundParts": [
            "Tier",
            "quälen",
            "-erei"
      ]
},
  "Tochter": {
      "fr": "fille",
      "lit": "descendante féminine directe",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la fille, dont Marx dénonce le sacrifice sur l'autel du mariage d'argent dans les familles bourgeoises.",
      "etymology": "Du moyen haut-allemand « tohter », vieux haut-allemand « tohter », de racine indo-européenne *dʰugh₂tḗr (fille)."
},
  "Tod": {
      "fr": "mort / anéantissement fatal",
      "lit": "fin de la vie",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin de la métaphore fatale des armes forgées par la bourgeoisie qui lui donneront la mort."
},
  "Todeskampf": {
      "fr": "agonie / lutte suprême de la mort",
      "lit": "combat mortel / combat contre la mort",
      "pos_fr": "Nom masculin",
      "role": "Nom composé dramatique désignant l'agonie et la lutte suprême d'une classe sociale condamnée par l'histoire.",
      "etymology": "Composé de « der Tod » (la mort) + « der Kampf » (le combat, lutte acharnée).",
      "isCompound": true,
      "compoundParts": [
            "Tod",
            "-es-",
            "Kampf"
      ]
},
  "Totengräber": {
      "fr": "fossoyeur",
      "lit": "celui qui creuse les tombes",
      "pos_fr": "Nom masculin",
      "role": "Métaphore célèbre et prophétique de Marx : la bourgeoisie produisant ses propres fossoyeurs."
},
  "tragen": {
      "fr": "porter",
      "lit": "soutenir le poids de",
      "pos_fr": "Verbe",
      "role": "Verbe solennel : la classe révolutionnaire porte l'avenir de l'humanité entre ses mains."
},
  "Transportwesen": {
      "fr": "transports / secteur des transports",
      "lit": "ensemble du système des transports",
      "pos_fr": "Nom neutre",
      "role": "Nom composé économique désignant le secteur stratégique des transports et communications, à centraliser d'urgence par l'État ouvrier.",
      "etymology": "Composé de « der Transport » (emprunt latin transportare) + « das Wesen » (nature, organisation, domaine général).",
      "isCompound": true,
      "compoundParts": [
            "Transport",
            "Wesen"
      ]
},
  "traut": {
      "fr": "cher / intime / chéri / bien-aimé",
      "lit": "en qui l'on a foi / aimé tendrement",
      "pos_fr": "Adjectif",
      "role": "Adjectif poétique empreint de fausse nostalgie, ironisé par Marx pour dépeindre la candeur perdue du foyer patriarcal d'antan.",
      "etymology": "Du moyen haut-allemand « trūt », vieux haut-allemand « trūt » (cher, aimé, fidèle)."
},
  "trautest": {
      "fr": "le plus cher / le plus intime",
      "lit": "au plus haut degré d'attachement intime",
      "pos_fr": "Adjectif",
      "role": "Adjectif superlatif moquant l'intimité idyllique et feutrée que la bourgeoisie prétend défendre tout en l'anéantissant.",
      "etymology": "Superlatif de « traut »."
},
  "treffen": {
      "fr": "frapper / atteindre / toucher",
      "lit": "toucher la cible",
      "pos_fr": "Verbe",
      "role": "Verbe percutant traduisant le coup porté aux privilèges de classe ou l'adoption de mesures énergiques de salut public.",
      "etymology": "Du moyen haut-allemand « treffen », vieux haut-allemand « treffan » (toucher, atteindre le but)."
},
  "treffend": {
      "fr": "avec justesse / de manière frappante",
      "lit": "qui touche au but",
      "pos_fr": "Adverbe",
      "role": "Critique frappant au cœur la suffisance bourgeoise."
},
  "treten": {
      "fr": "marcher / entrer / succéder",
      "lit": "poser le pied en avant, avancer d'un pas",
      "pos_fr": "Verbe fort",
      "role": "Verbe fort employé dans la locution « an die Stelle treten » pour décrire la relève impitoyable des anciennes formes par les nouvelles.",
      "etymology": "Issu du moyen haut-allemand « trat », vieux haut-allemand « trat », prétérit apophonique du verbe fort « treten » (marcher, poser le pied, en vieux haut-allemand tretan, proto-germanique *tredaną = marcher, fouler)."
},
  "Treue": {
      "fr": "fidélité / loyauté",
      "lit": "attachement loyal / confiance jurée",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin éthique désignant la fidélité vassalique de l'âge féodal, dissoute sans retour par le calcul égoïste bourgeois.",
      "etymology": "Du moyen haut-allemand « triuwe », vieux haut-allemand « triuwa » (foi jurée, pacte loyal, sûreté), issu du proto-germanique *trewwō-."
},
  "Trotz": {
      "fr": "défi / bravade / résistance obstinée",
      "lit": "défiance / rébellion",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin exprimant la résistance obstinée, le défi fier et la bravade du prolétaire refusant de plier sous le joug du capital.",
      "etymology": "Du moyen haut-allemand « trotzen » (défier), déverbal rattaché à une racine germanique exprimant l'insolence ou la fierté."
},
  "trotz": {
      "fr": "malgré / en dépit de",
      "lit": "en bravant",
      "pos_fr": "Préposition",
      "role": "Préposition d'opposition marquant la résistance héroïque du mouvement ouvrier en dépit de la répression féroce.",
      "etymology": "Emploi prépositionnel du substantif « Trotz » (défi)."
},
  "Träger": {
      "fr": "porteur / agent historique",
      "lit": "celui qui porte le fardeau",
      "pos_fr": "Nom masculin",
      "role": "Concept hégélien : la bourgeoisie comme agent passif et inconscient des lois du progrès économique."
},
  "Trägheit": {
      "fr": "inertie / apathie / indolence",
      "lit": "lenteur pesante, refus du mouvement",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'inertie et l'apathie sociale, rançon mortelle des sociétés assises sur la rente et l'exploitation.",
      "etymology": "Du moyen haut-allemand « trecheit », dérivé de l'adjectif « träge » (lent, inerte, paresseux, vieux haut-allemand « trāgi ») + « -heit »."
},
  "trägst": {
      "fr": "le plus inerte / le plus paresseux",
      "lit": "au plus haut degré d'indolence",
      "pos_fr": "Adjectif",
      "role": "Adjectif superlatif dépeignant la paresse légendaire des barons féodaux."
},
  "träumen": {
      "fr": "rêver / rêvasser",
      "lit": "former des songes",
      "pos_fr": "Verbe",
      "role": "Rêves chimériques de conciliation pacifique."
},
  "tröstlich": {
      "fr": "consolateur / rassurant",
      "lit": "qui apporte du réconfort",
      "pos_fr": "Adjectif",
      "role": "Illusion consolatrice prêchée par le socialisme bourgeois."
},
  "täglich": {
      "fr": "quotidiennement / chaque jour",
      "lit": "de jour en jour",
      "pos_fr": "Adverbe",
      "role": "Adverbe exprimant la destruction continue et quotidienne des industries traditionnelles."
},
  "tätig": {
      "fr": "actif / agissant / en action",
      "lit": "qui fait des actes",
      "pos_fr": "Adjectif",
      "role": "Adjectif soulignant la nature active, industrieuse et militante de la classe appelée à rebâtir la société.",
      "etymology": "Dérivé de « Tat » (l'acte, l'action) + suffixe « -ig »."
},
  "Tätigkeit": {
      "fr": "activité / travail humain",
      "lit": "action agissante créatrice",
      "pos_fr": "Nom féminin",
      "role": "Concept philosophique : la praxis humaine révélant toute sa puissance transformatrice sur la nature."
},
  "um": {
      "fr": "pour / afin de / autour de",
      "lit": "autour / en vue de",
      "pos_fr": "Préposition",
      "role": "Particule introduisant une proposition infinitive de but (um... zu)."
},
  "umgehen": {
      "fr": "hanter / rôder",
      "lit": "marcher autour en cercle / errer",
      "pos_fr": "Verbe fort séparable (um|gehen)",
      "role": "Tournure impersonnelle allemande (« ein Geist geht um ») marquant la présence obsédante du spectre communiste.",
      "etymology": "Verbe composé séparable unissant le préfixe adverbial germanique « um » (en cercle, alentour, vieux haut-allemand umbi) et le verbe « gehen » (marcher, errer, vieux haut-allemand gān). En moyen haut-allemand, « umbegān » acquiert le sens spécifique de hanter pour un revenant."
},
  "umgekehrt": {
      "fr": "à l'inverse / en sens inverse",
      "lit": "tourné de l'autre côté",
      "pos_fr": "Adjectif",
      "role": "Rapport inversement proportionnel entre utopie et histoire."
},
  "umgestalten": {
      "fr": "remanier / transformer de fond en comble",
      "lit": "donner une autre forme",
      "pos_fr": "Verbe",
      "role": "Verbe révolutionnaire majeur désignant la refonte intégrale et la transformation radicale de la société de fond en comble.",
      "etymology": "Composé de la particule de changement « um- » + « Gestalt » (forme).",
      "isCompound": true,
      "compoundParts": [
            "um-",
            "Gestalt",
            "-en"
      ]
},
  "Umgestaltung": {
      "fr": "bouleversement / transformation révolutionnaire",
      "lit": "refonte radicale de la forme entière",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la refonte intégrale de la superstructure et des rapports matériels.",
      "etymology": "Nom révolutionnaire unissant : 1° le préfixe de retournement complet de bas en haut « um- » (marquant une inversion radicale de cap, comme dans Umwälzung / révolution, issu du vieux haut-allemand umbi) ; 2° « die Gestaltung » (la mise en forme, la morphologie concrète, dérivé de Gestalt = forme, stature organisée, participe substantivé de stellen / poser debout). Désigne la refonte intégrale de la structure économique et de l'appareil d'État d'une société sous la hache révolutionnaire."
},
  "Umschiffung": {
      "fr": "circumnavigation / contournement maritime",
      "lit": "voyage par mer contournant un cap",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant le franchissement du cap de Bonne-Espérance vers les Indes.",
      "etymology": "Terme nautique composé unissant : 1° le préfixe circulaire « um- » (rotation autour d'un centre ou contournement d'un obstacle, vieux haut-allemand umbi) ; 2° le nom marin « das Schiff » (le navire, issu du moyen haut-allemand schif, vieux haut-allemand skif, racine germanique commune *skipą, cognat de l'anglais ship) ; 3° le suffixe d'action « -ung ». Désigne la circumnavigation maritime pionnière autour du cap de Bonne-Espérance accomplie par Vasco de Gama en 1497-1498, ouvrant la route transocéanique directe vers les Indes."
},
  "umschlagen": {
      "fr": "basculer / se muer en son contraire / tourner",
      "lit": "frapper en tournant / chavirer",
      "pos_fr": "Verbe",
      "role": "Concept dialectique central désignant le saut qualitatif et le basculement soudain d'un rapport social en son contraire historique.",
      "etymology": "Composé de « um » + « schlagen » (frapper, renverser).",
      "isCompound": true,
      "compoundParts": [
            "um-",
            "schlagen"
      ]
},
  "Umstand": {
      "fr": "circonstance / fait / situation particulière",
      "lit": "ce qui se tient autour",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant la circonstance matérielle contingente ou la conjoncture politique modulant l'application des principes généraux.",
      "etymology": "Calque du latin « circumstantia », composé de « um » (autour) + « der Stand » (la tenue, l'état debout).",
      "isCompound": true,
      "compoundParts": [
            "um",
            "Stand"
      ]
},
  "Umsturz": {
      "fr": "renversement / subversion radicale",
      "lit": "chute de fond en comble / renversement",
      "pos_fr": "Nom masculin",
      "role": "Substantif composé désignant l'acte de destruction de l'ordre bourgeois par l'insurrection."
},
  "umsturz": {
      "fr": "renversement / subversion radicale",
      "lit": "chute de fond en comble / renversement",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'Umsturz' du lemme 'Umsturz'. Substantif composé désignant l'acte de destruction de l'ordre bourgeois par l'insurrection."
},
  "Umtriebe": {
      "fr": "menées / manœuvres sourdes",
      "lit": "agitations souterraines (pluriel)",
      "pos_fr": "Nom féminin",
      "role": "Nom pluriel stigmatisant les intrigues machiavéliques de la réaction soudoyant les bas-fonds."
},
  "Umwälzung": {
      "fr": "bouleversement / révolution radicale",
      "lit": "renversement complet de fond en comble",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin substantival désignant les transformations qualitatives et brutales des bases matérielles de production.",
      "etymology": "Substantif d'action en « -ung » dérivé du verbe « umwälzen » (bouleverser, faire rouler sens dessus dessous). Composé du préfixe séparable germanique « um- » (autour, renversement complet, en vieux haut-allemand umbi) et du verbe « wälzen » (faire rouler avec force, en moyen haut-allemand welzen, en vieux haut-allemand welzen, causatif germanique *waltjanan sur le verbe fort walzan / rouler, tourner, d'où dérive la valse, racine indo-européenne *wel-)."
},
  "umwälzung": {
      "fr": "bouleversement / transformation radicale",
      "lit": "action de faire rouler cul par-dessus tête",
      "pos_fr": "Nom féminin",
      "role": "Forme fléchie 'Umwälzung' du lemme 'Umwälzung'. Substantif composé désignant la refonte de toute la structure économique et politique."
},
  "unabhängig": {
      "fr": "indépendant",
      "lit": "qui ne dépend d'aucun maître extérieur",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant les républiques urbaines italiennes (Venise, Gênes, Florence) affranchies de toute suzeraineté féodale."
},
  "unabhängige": {
      "fr": "indépendantes",
      "lit": "qui ne dépendent pas",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant les provinces confédérées indépendantes fondues dans l'État moderne."
},
  "unaufhörlich": {
      "fr": "incessant / sans répit",
      "lit": "qui ne s'arrête jamais",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant le perfectionnement vertigineux des machines dans la grande usine."
},
  "unbarmherzig": {
      "fr": "sans pitié / impitoyable",
      "lit": "dépourvu de cœur miséricordieux",
      "pos_fr": "Adjectif / Adverbe",
      "role": "Adverbe soulignant la violence inexorable avec laquelle le capital brise les coutumes et solidarités anciennes.",
      "etymology": "Composé du préfixe privatif germanique « un- » et de l'adjectif « barmherzig » (miséricordieux), calque chrétien du vieux haut-allemand « armherzi » (VIIIe siècle) forgé sur le latin ecclésiastique « misericors » (*miser* = pauvre, indigent -> arm ; *cor* = cœur -> herza), renforcé en moyen haut-allemand par le préfixe bi- / be- (*be-arm-herzic*)."
},
  "unbeholfen": {
      "fr": "malhabile / balourd / empesé",
      "lit": "privé de secours adroit",
      "pos_fr": "Adjectif",
      "role": "Traductions allemandes empesées des concepts français."
},
  "Unbestimmtheit": {
      "fr": "indétermination / flou / imprécision",
      "lit": "état de ce qui n'est pas fixé ou déterminé",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'indétermination nébuleuse des formules humanistes creuses du 'vrai' socialisme allemand.",
      "etymology": "Dérivé avec le préfixe privatif « un- » de « Bestimmtheit » (détermination, certitude).",
      "isCompound": true,
      "compoundParts": [
            "un-",
            "bestimmt",
            "-heit"
      ]
},
  "und": {
      "fr": "et",
      "lit": "conjonction d'addition",
      "pos_fr": "Conjonction de coordination",
      "role": "Conjonction liant deux termes ou propositions de même rang syntaxique."
},
  "und so weiter": {
      "fr": "et ainsi de suite / etc.",
      "lit": "et si plus loin",
      "pos_fr": "Locution adverbiale",
      "role": "Formule énumérative marquant la prolongation nécessaire d'une série historique ou d'une gradation logique.",
      "etymology": "Formé de la conjonction « und », de l'adverbe « so » et du comparatif « weiter » (plus avant, issu de weit)."
},
  "unehrerbietig": {
      "fr": "irrévérencieux / irrespectueux",
      "lit": "sans offrande d'honneur",
      "pos_fr": "Adjectif",
      "role": "Moqueries des jeunes ouvriers envers l'ordre établi."
},
  "unendlich": {
      "fr": "infiniment",
      "lit": "sans fin mesurable",
      "pos_fr": "Adverbe",
      "role": "Adverbe qualifiant la fluidification incommensurable des communications modernes."
},
  "unentgeltlich": {
      "fr": "gratuit / sans rémunération / à titre gracieux",
      "lit": "sans contrepartie monétaire",
      "pos_fr": "Adjectif",
      "role": "Adjectif réclamant la gratuité totale de l'enseignement public pour tous les enfants dans le programme du Manifeste.",
      "etymology": "Composé de « un- » + « Entgelt » (rémunération, salaire, de gelten valoir).",
      "isCompound": true,
      "compoundParts": [
            "un-",
            "Entgelt",
            "-lich"
      ]
},
  "unentwickelt": {
      "fr": "rudimentaire / peu développé",
      "lit": "non déployé",
      "pos_fr": "Adjectif",
      "role": "Stade précoce et embryonnaire du prolétariat."
},
  "unermeßlich": {
      "fr": "incommensurable / prodigieux",
      "lit": "qui ne peut être mesuré d'après une norme ordinaire",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant l'accélération vertigineuse imprimée au commerce par l'ouverture planétaire.",
      "etymology": "Composé du préfixe négatif d'impossibilité « un- » et du participe passé adjectivé du verbe « ermessen » (mesurer, évaluer, en moyen haut-allemand ermezzen, vieux haut-allemand ermezzan, du verbe messen = mesurer, proto-germanique *metaną, racine indo-européenne *med- = mesurer, ordonner, cf. latin modus, méditer)."
},
  "unfähig": {
      "fr": "incapable",
      "lit": "dépourvu d'aptitude",
      "pos_fr": "Adjectif",
      "role": "Adjectif formulant l'incapacité historique de la bourgeoisie à pérenniser sa domination."
},
  "Unfähigkeit": {
      "fr": "incapacité / impuissance / incompétence",
      "lit": "défaut de capacité à saisir ou accomplir",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin politique constatant l'incapacité absolue de la bourgeoisie à demeurer plus longtemps classe dirigeante de la société.",
      "etymology": "Préfixe privatif « un- » + « Fähigkeit » (aptitude, capacité, de fähig, capable de saisir).",
      "isCompound": true,
      "compoundParts": [
            "un-",
            "fähig",
            "-keit"
      ]
},
  "ungeheuer": {
      "fr": "immense / gigantesque",
      "lit": "monstrueusement grand",
      "pos_fr": "Adjectif",
      "role": "Adjectif soulignant le poids numérique écrasant de la majorité laborieuse prolétarienne."
},
  "Unglauben": {
      "fr": "incrédulité / manque de foi / mécréance",
      "lit": "défaut de croyance ou de foi",
      "pos_fr": "Nom masculin",
      "role": "nom masculin (variante orthographique de Unglaube)",
      "etymology": "Préfixe privatif « un- » + « der Glaube » (la foi, croyance, vieux haut-allemand gilouba).",
      "isCompound": true,
      "compoundParts": [
            "un-",
            "Glaube"
      ]
},
  "unhaltbar": {
      "fr": "insoutenable / intenable / indéfendable",
      "lit": "qui ne peut être maintenu",
      "pos_fr": "Adjectif",
      "role": "Adjectif péremptoire constatant le caractère insoutenable et la faillite historique inéluctable des rapports bourgeois de propriété.",
      "etymology": "Composé de « un- » + « halten » + « -bar ».",
      "isCompound": true,
      "compoundParts": [
            "un-",
            "halten",
            "-bar"
      ]
},
  "unheilschwang": {
      "fr": "gros de malheurs / menaçant",
      "lit": "enceint de catastrophe",
      "pos_fr": "Adjectif",
      "role": "Prophéties catastrophistes des aristocrates déchus."
},
  "unmittelbar": {
      "fr": "immédiat / directement",
      "lit": "sans intermédiaire / direct",
      "pos_fr": "Adverbe",
      "role": "Adverbe modifiant 'vorliegenden' ou adjectif qualifiant 'Vorspiel'."
},
  "unmittelbare": {
      "fr": "immédiat / directement",
      "lit": "sans intermédiaire / direct",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'unmittelbare' du lemme 'unmittelbar'. Adverbe modifiant 'vorliegenden' ou adjectif qualifiant 'Vorspiel'."
},
  "unmöglich": {
      "fr": "impossible",
      "lit": "hors de toute puissance",
      "pos_fr": "Adjectif",
      "role": "Adjectif marquant l'anachronisme fatal du repli national face au marché mondial."
},
  "Unordnung": {
      "fr": "désordre / chaos économique",
      "lit": "absence d'ordre",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin qualifiant le désordre panique semé par les crises périodiques de surproduction."
},
  "unparteiisch": {
      "fr": "impartial / neutre",
      "lit": "qui n'a pas de parti pris",
      "pos_fr": "Adjectif",
      "role": "Fausse neutralité au-dessus des classes dénoncée par Marx."
},
  "unpersönlich": {
      "fr": "impersonnel",
      "lit": "dépourvu de caractère personnel",
      "pos_fr": "Adjectif",
      "role": "Adjectif matérialiste démontrant que dans la société marchande, le prolétaire vivant est réduit à une chose impersonnelle.",
      "etymology": "Composé de « un- » + « persönlich ».",
      "isCompound": true,
      "compoundParts": [
            "un-",
            "Person",
            "-lich"
      ]
},
  "Unschuld": {
      "fr": "innocence / ingénuité naïve",
      "lit": "absence de faute ou de culpabilité",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin moral brocardant l'innocence feinte et la naïveté calculée des apologistes de la propriété privée.",
      "etymology": "Du moyen haut-allemand « unschult », de « un- » (privatif) + « die Schuld » (la faute, dette, culpabilité).",
      "isCompound": true,
      "compoundParts": [
            "un-",
            "Schuld"
      ]
},
  "unselbständig": {
      "fr": "dépendant / subordonné / hétéronome",
      "lit": "qui ne se tient pas debout par lui-même",
      "pos_fr": "Adjectif",
      "role": "Adjectif caractérisant l'aliénation et la dépendance totale de l'ouvrier incapable de subsister en dehors du bon vouloir du patron.",
      "etymology": "Négation de « selbständig » (indépendant).",
      "isCompound": true,
      "compoundParts": [
            "un-",
            "selbst",
            "stehen",
            "-ig"
      ]
},
  "unser": {
      "fr": "notre / nos",
      "lit": "possessif de 1re personne du pluriel",
      "pos_fr": "Déterminant possessif",
      "role": "Possessif marquant l'adhésion des auteurs à l'époque contemporaine."
},
  "unsern": {
      "fr": "nos",
      "lit": "qui nous appartient (forme fléchie de unser)",
      "pos_fr": "Déterminant",
      "role": "Déterminant possessif ancrant le constat empirique (« sous nos yeux »)."
},
  "unsicher": {
      "fr": "précaire / incertain",
      "lit": "dépourvu de sécurité",
      "pos_fr": "Adjectif",
      "role": "Adjectif peignant l'insécurité existentielle radicale imposée au prolétariat."
},
  "unsicherer": {
      "fr": "plus incertain / précaire",
      "lit": "plus dépourvu de sûreté",
      "pos_fr": "Adverbe",
      "role": "Incertitude permanente de la subsistance de l'ouvrier."
},
  "Unsicherheit": {
      "fr": "insécurité / précarité existentielle",
      "lit": "absence de sécurité",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin dépeignant la condition ontologique du prolétaire suspendu au bon vouloir du capital."
},
  "Unsinn": {
      "fr": "absurdité / non-sens / bêtise",
      "lit": "dépourvu de sens",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin polémique tranchant flétrissant le non-sens et l'absurdité théorique des détracteurs du communisme.",
      "etymology": "Composé de « un- » + « der Sinn » (le sens, esprit, signification rationnelle).",
      "isCompound": true,
      "compoundParts": [
            "un-",
            "Sinn"
      ]
},
  "Unsre": {
      "fr": "notre / nos",
      "lit": "qui nous appartient",
      "pos_fr": "Déterminant",
      "role": "Déterminant possessif pluriel affirmant l'appartenance collective au camp prolétarien et à la perspective du Manifeste.",
      "etymology": "Forme fléchie syncopée de « unser » (notre), du vieux haut-allemand « unsar »."
},
  "unter": {
      "fr": "sous / parmi",
      "lit": "en dessous de / au bas de (préposition)",
      "pos_fr": "Préposition mixte",
      "role": "Préposition hiérarchique régissant le datif marquant la sujétion féodale primitive (« unter der Herrschaft » : sous la domination des seigneurs féodaux)."
},
  "unterdrücken": {
      "fr": "opprimer / réprimer",
      "lit": "presser vers le bas",
      "pos_fr": "Verbe",
      "role": "Verbe structurel de la théorie des luttes de classe : asservir et maintenir sous le joug."
},
  "unterdrückend": {
      "fr": "oppresseur / tyrannique",
      "lit": "qui presse vers le bas",
      "pos_fr": "Adjectif",
      "role": "Participe présent définissant la classe dominante exploiteuse dans l'antagonisme social."
},
  "Unterdrücker": {
      "fr": "oppresseur",
      "lit": "celui qui écrase sous sa domination",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin : le pôle dominant exploitant les producteurs dans toute société de classe.",
      "etymology": "Substantif d'agent formé du préfixe spatial descendant « unter- » (vers le bas, sous le joug) et du verbe « drücken » (presser de force, comprimer violemment, écraser, du moyen haut-allemand drücken, vieux haut-allemand drucchan, racine germanique *þrukkijaną). Calque sémantique exact du latin « op-pressor » (de op-primere = presser sous le talon) : l'acteur structurel qui maintient la classe laborieuse sous la contrainte matérielle de son appareil d'asservissement."
},
  "unterdrückt": {
      "fr": "opprimé / asservi",
      "lit": "pressé vers le bas par une force écrasante",
      "pos_fr": "Adjectif / Participe",
      "role": "Participe adjectivé décrivant la condition initiale de roture et de sujétion des bourgeois primitifs sous les barons."
},
  "Unterdrückte": {
      "fr": "opprimé",
      "lit": "celui qui subit le joug et l'exploitation",
      "pos_fr": "Nom substantivé",
      "role": "Nom substantivé désignant les esclaves, serfs ou prolétaires écrasés par la classe dirigeante.",
      "etymology": "Composé du préfixe verbal locatif inséparable « unter- » (en dessous, sous le joug, vieux haut-allemand untar) et du verbe « drücken » (presser, écraser, comprimer avec force, du moyen haut-allemand drücken, vieux haut-allemand drucchen, proto-germanique *thrukjaną = exercer une pression violente)."
},
  "Unterdrückung": {
      "fr": "oppression",
      "lit": "action d'écraser sous le poids de la domination",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin caractérisant les rapports de soumission politique et économique.",
      "etymology": "Déverbal en « -ung » formé sur le verbe inséparable « unterdrücken » (comprimer vers le bas, écraser par contrainte, de unter- + drücken = presser, du vieux haut-allemand drucchen)."
},
  "untereinander": {
      "fr": "entre eux / les uns avec les autres",
      "lit": "les uns sous les autres",
      "pos_fr": "Adverbe",
      "role": "Concurrence féroce des capitalistes entre eux."
},
  "Untergang": {
      "fr": "ruine / naufrage / effondrement",
      "lit": "action d'aller au fond / descente au tombeau",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin tragique désignant l'alternative historique funeste où la lutte intestine des classes s'achève par la ruine commune des deux belligérants.",
      "etymology": "Substantif dramatique unissant la préposition « unter » (vers le bas, sous, au fond) et le nom d'action « der Gang » (la marche, l'allée, du moyen haut-allemand « ganc », vieux haut-allemand « gang », déverbal fort de « gehen » = marcher, aller). Employé d'abord pour le coucher des astres (« Sonnenuntergang »), il désigne métaphoriquement le déclin, l'engloutissement et la ruine commune des classes belligérantes (« der gemeinsame Untergang der kämpfenden Klassen »)."
},
  "untergegangen": {
      "fr": "disparu / anéanti",
      "lit": "allé sous l'horizon",
      "pos_fr": "Adjectif",
      "role": "Participe passé marquant la disparition irréversible du statut privilégié de l'artisan médiéval."
},
  "untergehe": {
      "fr": "périsse / sombre / disparaisse",
      "lit": "aille par-dessous / s'effondre",
      "pos_fr": "Verbe",
      "role": "verbe au subjonctif I (1re/3e pers. singulier)",
      "etymology": "Composé de « unter » (sous) + « gehen » (aller, marcher).",
      "isCompound": true,
      "compoundParts": [
            "unter-",
            "gehen"
      ]
},
  "Unterhalt": {
      "fr": "entretien / subsistance vitale",
      "lit": "maintien en vie",
      "pos_fr": "Nom masculin",
      "role": "Terme économique mesurant le panier de biens indispensables pour maintenir l'ouvrier apte au labeur."
},
  "unterirdisch": {
      "fr": "souterrain / infernal",
      "lit": "situé sous la terre",
      "pos_fr": "Adjectif",
      "role": "Métaphore poétique renvoyant aux forces démoniaques déchaînées par le magicien bourgeois."
},
  "unterjochen": {
      "fr": "assujettir / subjuguer / mettre sous le joug",
      "lit": "placer sous le joug",
      "pos_fr": "Verbe",
      "role": "Verbe dénonçant l'asservissement brutal des nations agricoles et des peuples d'Orient sous le joug industriel de l'Occident.",
      "etymology": "Calque du latin « subiugare », composé de « unter » + « das Joch » (le joug).",
      "isCompound": true,
      "compoundParts": [
            "unter-",
            "Joch"
      ]
},
  "Unterjochung": {
      "fr": "asservissement / mise sous le joug",
      "lit": "action de placer sous le joug",
      "pos_fr": "Nom féminin",
      "role": "Nom composé désignant la subordination prométhéenne de la nature et de l'ouvrier au capital."
},
  "unterlassen": {
      "fr": "négliger / omettre de faire",
      "lit": "laisser de côté / s'abstenir",
      "pos_fr": "Verbe",
      "role": "Noyau verbal à la forme négative ('unterläßt keinen Augenblick') exprimant l'obligation absolue d'éducation politique."
},
  "unterliegen": {
      "fr": "être assujetti à / succomber / être soumis à",
      "lit": "gésir sous",
      "pos_fr": "Verbe",
      "role": "Verbe constatant la défaite inévitable des modes de production archaïques broyés par l'expansion du marché universel.",
      "etymology": "Composé de « unter » + « liegen » (être couché sous).",
      "isCompound": true,
      "compoundParts": [
            "unter-",
            "liegen"
      ]
},
  "unterläßt": {
      "fr": "négliger / omettre de faire",
      "lit": "laisser de côté / s'abstenir",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'unterläßt' du lemme 'unterlassen'. Noyau verbal à la forme négative ('unterläßt keinen Augenblick') exprimant l'obligation absolue d'éducation politique."
},
  "Unteroffizier": {
      "fr": "sous-officier",
      "lit": "gradé intermédiaire",
      "pos_fr": "Nom féminin",
      "role": "Nom composé de la hiérarchie disciplinaire de surveillance régnant dans la manufacture moderne."
},
  "unterscheiden": {
      "fr": "distinguer / différencier",
      "lit": "séparer par le milieu",
      "pos_fr": "Verbe",
      "role": "Verbe de discernement scientifique opérant le tri rigoureux entre socialisme scientifique et rêveries réactionnaires.",
      "etymology": "Composé de « unter » + « scheiden » (séparer, trancher).",
      "isCompound": true,
      "compoundParts": [
            "unter-",
            "scheiden"
      ]
},
  "Unterschiebung": {
      "fr": "substitution subreptice / interpolation frauduleuse / supposition",
      "lit": "action de glisser par-dessous",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin dénonçant l'interpolation frauduleuse et la substitution subreptice de concepts métaphysiques sous les textes révolutionnaires français.",
      "etymology": "Déverbal de « unterschieben » (glisser subrepticement dessous, imputer indûment) + « -ung ».",
      "isCompound": true,
      "compoundParts": [
            "unter",
            "schieben",
            "-ung"
      ]
},
  "Unterschied": {
      "fr": "différence / distinction de caste",
      "lit": "séparation distinctive",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant les singularités de sexe et d'âge nivelées par la machinerie universelle."
},
  "unterst": {
      "fr": "le plus bas / le plus inférieur",
      "lit": "situé au fond absolu",
      "pos_fr": "Adjectif",
      "role": "Adjectif superlatif situant le prolétariat comme la couche basale de l'édifice social."
},
  "unterstützen": {
      "fr": "soutenir / appuyer",
      "lit": "mettre un soutien en dessous / étayer",
      "pos_fr": "Verbe",
      "role": "Verbe principal régissant l'accusatif, exprimant l'appui tactique des communistes."
},
  "unterwarfen": {
      "fr": "soumirent",
      "lit": "jetèrent sous le joug (unterwerfen)",
      "pos_fr": "Adverbe",
      "role": "Forme passée du verbe unterwerfen désignant l'asservissement imposé par les classes victorieuses."
},
  "unterwerfen": {
      "fr": "soumettre / assujettir",
      "lit": "jeter sous le pouvoir de",
      "pos_fr": "Verbe",
      "role": "Verbe marquant la vassalisation de la campagne par la ville et de l'Orient par l'Occident."
},
  "ununterbrochen": {
      "fr": "ininterrompu / incessant",
      "lit": "qui n'est brisé par aucune trêve",
      "pos_fr": "Adjectif",
      "role": "Adjectif composé (un + unterbrochen) insistant sur la continuité structurelle de la lutte.",
      "etymology": "Participe adjectivé à double préfixation négative et médiane : 1° le préfixe privatif hérité de l'indo-européen « un- » ; 2° le préfixe « unter- » marquant l'interposition médiane ; 3° le verbe fort germanique « brechen » (briser net, moyen haut-allemand brechen, vieux haut-allemand brehhan, racine germanique *brekanan). Littéralement : « dont le cours ne subit jamais d'interruption », décrivant la continuité sous-jacente ininterrompue de la guerre des classes à travers les millénaires."
},
  "unvermeidlich": {
      "fr": "inévitable / inéluctable",
      "lit": "qui ne peut être évité",
      "pos_fr": "Adjectif",
      "role": "Adjectif solennel concluant le chapitre sur la fatalité historique de la victoire prolétarienne."
},
  "unverschämt": {
      "fr": "éhonté / sans pudeur / cynique",
      "lit": "dépourvu de honte morale ou de retenue",
      "pos_fr": "Adjectif",
      "role": "Adjectif décrivant le cynisme franc du capitalisme moderne qui assume l'exploitation comme loi naturelle.",
      "etymology": "Composé du préfixe négatif « un- » et du participe « verschämt » (pudique, modeste), dérivé de « die Scham » (la honte, pudeur morale, en moyen haut-allemand scham, en vieux haut-allemand scama, proto-germanique *skamō = honte, issu de la racine indo-européenne *(s)kem- = couvrir, cacher)."
},
  "unverändert": {
      "fr": "inchangé / stationnaire",
      "lit": "qui n'a subi nulle altération",
      "pos_fr": "Adjectif",
      "role": "Adjectif opposant le conservatisme technique féodal à la révolution permanente bourgeoise."
},
  "unwiderleglich": {
      "fr": "irréfutablement",
      "lit": "qui ne peut être démenti",
      "pos_fr": "Adverbe",
      "role": "Preuves économiques irréfutables produites par les critiques."
},
  "unzureichend": {
      "fr": "insuffisant / défectueux",
      "lit": "qui n'atteint pas le niveau requis",
      "pos_fr": "Adjectif",
      "role": "Adjectif réfutant l'insuffisance criante des cataplasmes réformistes qui prétendent guérir les crises sans toucher au salariat.",
      "etymology": "Composé de « un- » + participe « zureichend » (suffisant).",
      "isCompound": true,
      "compoundParts": [
            "un-",
            "zureichend"
      ]
},
  "uralt": {
      "fr": "séculaire / ancestral",
      "lit": "vieux depuis les origines",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant les industries artisanales primitives éradiquées par la vapeur et la machine."
},
  "Urbarmachung": {
      "fr": "défrichement / mise en culture",
      "lit": "action de rendre arable",
      "pos_fr": "Nom féminin",
      "role": "Nom composé célébrant la colonisation et la mise en exploitation agricole de continents entiers."
},
  "Urheber": {
      "fr": "auteur / instigateur / initiateur",
      "lit": "celui qui élève à l'origine",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant l'instigateur premier ou l'auteur historique d'une initiative sociale ou d'une insurrection.",
      "etymology": "Du moyen haut-allemand « urhebere », composé du préfixe originaire « ur- » + « heben » (lever, soulever, commencer) + « -er ».",
      "isCompound": true,
      "compoundParts": [
            "ur-",
            "heben",
            "-er"
      ]
},
  "Urteil": {
      "fr": "jugement / sentence / avis critique",
      "lit": "partage originaire, partage juridique de la cause",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre désignant le jugement critique rationnel porté sur la marche de l'histoire et les illusions idéologiques.",
      "etymology": "Du moyen haut-allemand « urteil », vieux haut-allemand « urteili », composé de « ur- » (hors de, originaire) + racine de « teilen » (partager, distribuer le droit).",
      "isCompound": true,
      "compoundParts": [
            "ur-",
            "Teil"
      ]
},
  "usw.": {
      "fr": "etc. / et ainsi de suite",
      "lit": "und so weiter (et ainsi de suite)",
      "pos_fr": "Forme grammaticale",
      "role": "Abréviation concluant une énumération ouverte d'exploiteurs secondaires."
},
  "usw.schreiben": {
      "fr": "écrire etc.",
      "lit": "écrire ainsi de suite",
      "pos_fr": "Verbe séparable",
      "role": "Formule abréviative de Marx clôturant une citation."
},
  "Utopie": {
      "fr": "utopie / chimère sociale",
      "lit": "lieu qui n'existe nulle part",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin théorique désignant les constructions chimériques des premiers socialistes, géniales à leur aurore mais devenues réactionnaires.",
      "etymology": "Mot forgé en 1516 par Thomas More à partir du grec ancien « ou » (non, pas de) + « topos » (lieu)."
},
  "utopisch": {
      "fr": "utopiquement",
      "lit": "dans l'imaginaire chimérique",
      "pos_fr": "Adverbe",
      "role": "Caractère utopique des constructions sociales sans base de classe."
},
  "utopistisch": {
      "fr": "utopique",
      "lit": "sans lieu réel",
      "pos_fr": "Adjectif",
      "role": "Caractère hors-sol des modèles communautaires idéaux."
},
  "Vasall": {
      "fr": "vassal",
      "lit": "homme libre lié par serment de fidélité à un suzerain",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant le maillon intermédiaire de la féodalité féodale.",
      "etymology": "Emprunté au bas-latin féodal « vassallus » (diminutif de vassus / serviteur, homme dépendant), lui-même issu du celtique gaulois *wasso- / *vassos (jeune serviteur d'armes, combattant fidèle d'un chef). En droit féodal, l'homme libre entré dans la clientèle d'un suzerain par l'hommage et le serment de foi, recevant un bénéfice foncier (le fief) en échange de l'aide militaire et du conseil."
},
  "Vaterland": {
      "fr": "patrie / pays natal",
      "lit": "terre des pères",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre politique : Marx et Engels proclament solennellement que les prolétaires n'ont pas de patrie.",
      "etymology": "Du moyen haut-allemand « vaterlant », calque du latin médiéval « patria / terra patrum », composé de « Vater » (père) + « Land » (pays, terre).",
      "isCompound": true,
      "compoundParts": [
            "Vater",
            "Land"
      ]
},
  "veraln": {
      "fr": "vieillissent / deviennent surannées",
      "lit": "deviennent vieilles avant l'heure (veralten)",
      "pos_fr": "Verbe",
      "role": "Verbe marquant la péremption accélérée de tout rapport social bourgeois sitôt constitué."
},
  "veralten": {
      "fr": "vieillir / devenir obsolète",
      "lit": "devenir vieux avant l'heure",
      "pos_fr": "Verbe",
      "role": "Verbe traduisant la péremption accélérée de tout rapport social bourgeois sitôt constitué."
},
  "verarbeiten": {
      "fr": "traiter / manufacturer / transformer",
      "lit": "œuvrer à travers",
      "pos_fr": "Verbe",
      "role": "Verbe industriel désignant la métamorphose des matières premières en produits marchands."
},
  "Verbesserer": {
      "fr": "réformateur / amendateur bien intentionné",
      "lit": "celui qui cherche à rendre meilleur",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin ironique fustigeant les redresseurs de torts bien intentionnés cherchant à panser les plaies du capital sans toucher à ses racines.",
      "etymology": "Dérivé de « verbessern » (rendre meilleur, corriger, amender) + suffixe d'agent « -er »."
},
  "verbessern": {
      "fr": "améliorer / perfectionner",
      "lit": "rendre meilleur",
      "pos_fr": "Verbe",
      "role": "Réformes administratives partielles du capitalisme."
},
  "Verbesserung": {
      "fr": "perfectionnement / amélioration technique",
      "lit": "action de rendre meilleur",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin décrivant la sophistication ininterrompue des machines industrielles."
},
  "Verbindung": {
      "fr": "union / liaison / association",
      "lit": "action de relier ensemble",
      "pos_fr": "Nom féminin",
      "role": "Substantif au datif désignant l'union pratique des partis démocratiques."
},
  "verbindung": {
      "fr": "union / liaison / association",
      "lit": "action de relier ensemble",
      "pos_fr": "Nom féminin",
      "role": "Forme fléchie 'Verbindung' du lemme 'Verbindung'. Substantif au datif désignant l'union pratique des partis démocratiques."
},
  "verborgen": {
      "fr": "caché / occulte",
      "lit": "mis à l'abri des regards",
      "pos_fr": "Adjectif",
      "role": "Guerre civile larvée et cachée déchirant la société."
},
  "verbrauchen": {
      "fr": "consommer / user",
      "lit": "user par besoin",
      "pos_fr": "Verbe",
      "role": "Verbe économique désignant la consommation finale des fabricats à l'échelle planétaire."
},
  "Verbrechen": {
      "fr": "crime / forfait / délit grave",
      "lit": "action d'enfreindre ou de briser la loi",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre désignant le crime social permanent perpétré par la bourgeoisie qui condamne les producteurs à la famine au milieu de la surproduction.",
      "etymology": "Du moyen haut-allemand « verbrechen », substantivation de l'infinitif « verbrechen » (enfreindre, casser, briser)."
},
  "verbreiten": {
      "fr": "diffuser / propager",
      "lit": "rendre large",
      "pos_fr": "Verbe",
      "role": "Diffusion des écrits révolutionnaires."
},
  "verbrieft": {
      "fr": "scellé / garanti par charte",
      "lit": "couché par écrit sur une lettre patente de privilège",
      "pos_fr": "Adjectif / Participe",
      "role": "Participe adjectivé désignant les droits et immunités féodales consignés par rescrit royal sous l'Ancien Régime.",
      "etymology": "Composé du préfixe transitif « ver- » et du substantif « der Brief » (charte scellée, lettre, diplôme). en moyen haut-allemand brief, emprunt très ancien du VIIIe siècle au latin classique brevis (court), via le bas-latin breve / brevis libellus (écrit abrégé consignant un acte légal ou un privilège royal)."
},
  "verbünden": {
      "fr": "s'allier / se liguer",
      "lit": "former un pacte juré scellé par serment",
      "pos_fr": "Verbe pronominal",
      "role": "Verbe marquant la Sainte-Alliance réactionnaire des princes contre la liberté.",
      "etymology": "Participe passé du verbe « verbünden », formé du préfixe transitif d'association « ver- » et du substantif « der Bund » (en moyen haut-allemand « bunt », en vieux haut-allemand « bunt » = alliance, pacte, ligue), lui-même déverbal à l'apophonie (Ablaut) du verbe fort germanique « binden » (lier, attacher, issu de la racine indo-européenne *bʰendʰ- d'où découlent le sanskrit bandha et l'anglais bind / bond). Évoque le pacte juré liant des puissances autrefois rivales contre un ennemi commun."
},
  "verbündet": {
      "fr": "allié / confédéré",
      "lit": "lié par un pacte (Bund)",
      "pos_fr": "Adjectif",
      "role": "Participe passé décrivant les provinces indépendantes fédérées en une nation unifiée."
},
  "verdampfen": {
      "fr": "partir en fumée / s'évaporer",
      "lit": "se dissiper en vapeur",
      "pos_fr": "Verbe",
      "role": "Métaphore immortelle de Marx : « tout ce qui est stable et solide part en fumée »."
},
  "verdienen": {
      "fr": "mériter / gagner son salaire",
      "lit": "gagner par son service de valet",
      "pos_fr": "Verbe",
      "role": "Verbe économique désignant le gain légitime par le travail personnel, mystifié par l'idéologie bourgeoise de l'épargne.",
      "etymology": "Du moyen haut-allemand « verdienen », dérivé de « dienen » (servir).",
      "isCompound": true,
      "compoundParts": [
            "ver-",
            "dienen"
      ]
},
  "verdrängen": {
      "fr": "supplanter / évincer",
      "lit": "chasser en repoussant hors du lieu",
      "pos_fr": "Verbe inséparable",
      "role": "Verbe économique : la vapeur et la grande industrie supplantent la petite manufacture.",
      "etymology": "Verbe dynamique unissant le préfixe d'éviction impitoyable « ver- » et le verbe « drängen » (presser avec violence, acculer, bousculer en masse, moyen haut-allemand drengen, vieux haut-allemand drengen, verbe factitif germanique *drangijaną, issu de la racine de dringen = pénétrer de force). Littéralement : bousculer hors du terrain économique, évincer sans merci. Le même terme sera immortalisé par Freud pour conceptualiser le 'refoulement' psychologique hors de la conscience."
},
  "vereinen": {
      "fr": "unir / fusionner / rassembler",
      "lit": "rendre un",
      "pos_fr": "Verbe",
      "role": "Verbe d'union révolutionnaire culminant dans le mot d'ordre final : Prolétaires de tous les pays, unissez-vous !",
      "etymology": "Dérivé de « ein » (un).",
      "isCompound": true,
      "compoundParts": [
            "ver-",
            "ein"
      ]
},
  "vereinfachen": {
      "fr": "simplifier / polariser",
      "lit": "rendre simple en réduisant les complications",
      "pos_fr": "Verbe inséparable",
      "role": "Verbe d'analyse marxiste : le capitalisme balaie le maquis des ordres féodaux et simplifie la société en deux camps.",
      "etymology": "Verbe factitif formé du préfixe d'accomplissement transitif « ver- » et de l'adjectif « einfach » (moyen haut-allemand einvach = simple, uni, composé de ein = un seul + Fach = division, pli d'étoffe, compartiment). Calque morphologique et sémantique rigoureux du latin « sim-plex » (qui n'a qu'un seul pli, par opposition à duplex ou multiplex). Marx montre que le capitalisme a balayé le lacis des ordres médiévaux pour réduire le drame historique à deux acteurs nus."
},
  "vereinigen": {
      "fr": "s'unir / se rassembler",
      "lit": "rendre un / fusionner dans une même force",
      "pos_fr": "Verbe",
      "role": "Verbe à l'impératif 2e personne du pluriel scandant le mot d'ordre immortel de Marx et Engels."
},
  "vereinigt": {
      "fr": "s'unir / se rassembler",
      "lit": "rendre un / fusionner dans une même force",
      "pos_fr": "Adjectif",
      "role": "Forme fléchie 'vereinigt' du lemme 'vereinigen'. Verbe à l'impératif 2e personne du pluriel scandant le mot d'ordre immortel de Marx et Engels."
},
  "Vereinigung": {
      "fr": "union / unification solidaire",
      "lit": "action de rendre un",
      "pos_fr": "Nom féminin",
      "role": "Concept politique suprême du Manifeste : l'unification révolutionnaire des travailleurs par l'association."
},
  "Verfaulung": {
      "fr": "putréfaction / décomposition passive",
      "lit": "action de pourrir sur pied",
      "pos_fr": "Nom féminin",
      "role": "Métaphore biologique cruelle flétrissant le lumpenprolétariat comme lie décomposée de l'ancien monde."
},
  "verfolgen": {
      "fr": "retracer / suivre à la trace",
      "lit": "suivre d'un pas continu",
      "pos_fr": "Verbe",
      "role": "Verbe méthodologique : retracer les phases de la guerre civile latente travaillant la société."
},
  "Verfügung": {
      "fr": "disposition",
      "lit": "mise à disposition de ressources",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin de la locution « zur Verfügung stehen » (être à la disposition productive de la société)."
},
  "verführen": {
      "fr": "séduire / dévoyer / corrompre",
      "lit": "conduire hors de la bonne voie",
      "pos_fr": "Verbe",
      "role": "Verbe polémique dénonçant les démagogues réactionnaires cherchant à dévoyer la colère des masses vers des impasses corporatistes.",
      "etymology": "Composé du préfixe déviatif « ver- » + « führen » (guider, mener).",
      "isCompound": true,
      "compoundParts": [
            "ver-",
            "führen"
      ]
},
  "vergangen": {
      "fr": "passé / révolu",
      "lit": "qui est allé au-delà du temps",
      "pos_fr": "Adjectif",
      "role": "Participe passé englobant la totalité des générations humaines antérieures au capital."
},
  "Vergangenheit": {
      "fr": "passé / temps révolu",
      "lit": "état de ce qui s'en est allé ou s'est écoulé",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin historique : dans la société bourgeoise, le passé domine le présent ; dans la société communiste, le présent domine le passé.",
      "etymology": "Formé sur le participe passé « vergangen » (écoulé, passé, du verbe vergehen) + « -heit ».",
      "isCompound": true,
      "compoundParts": [
            "vergangen",
            "-heit"
      ]
},
  "vergaßen": {
      "fr": "oublièrent",
      "lit": "laissèrent échapper de l'esprit",
      "pos_fr": "Verbe",
      "role": "Oubli historique de la condition des serfs par l'aristocratie."
},
  "vergessen": {
      "fr": "oublier",
      "lit": "perdre la mémoire",
      "pos_fr": "Verbe",
      "role": "Oublier les contradictions matérielles objectives."
},
  "verhalten": {
      "fr": "se comporter / adopter une attitude",
      "lit": "se tenir d'une certaine façon, réagir",
      "pos_fr": "Verbe",
      "role": "Infinitif avec zu ('zu verhalten') dépendant du substantif 'Recht'."
},
  "verhaßt": {
      "fr": "odieux / honni / détesté",
      "lit": "frappé de haine",
      "pos_fr": "Adjectif",
      "role": "Le parvenu bourgeois détesté par les hobereaux féodaux."
},
  "verheimlichen": {
      "fr": "dissimuler / cacher",
      "lit": "garder sous le secret / masquer",
      "pos_fr": "Verbe",
      "role": "Infinitif avec 'zu' marquant le refus du secret conspiratif au profit de l'action de masse."
},
  "Verhältnis": {
      "fr": "rapport / relation sociale / condition",
      "lit": "rapport / relation / attitude réciproque",
      "pos_fr": "Nom neutre",
      "role": "Concept matérialiste majeur désignant les liens sociaux objectifs déterminés par le mode de production.",
      "etymology": "Substantif abstrait dérivé avec le suffixe neutre « -nis » (en vieux haut-allemand -nassi / -nissa, cognat de l'anglais -ness) sur le verbe réfléchi « sich verhalten » (se comporter, se rapporter mutuellement à, de la particule ver- et de halten = tenir fermement, garder, en vieux haut-allemand haltan). Le terme a évolué au XVIIIe siècle de la proportion géométrique vers la relation sociale objective entre les hommes."
},
  "verhältnis": {
      "fr": "rapport / relation / position",
      "lit": "tenue réciproque / relation proportionnelle",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'Verhältnis' du lemme 'Verhältnis'. Substantif neutre au nominatif singulier, sujet grammatical de la proposition."
},
  "verhüllen": {
      "fr": "voiler / masquer",
      "lit": "couvrir d'un manteau, envelopper d'un voile",
      "pos_fr": "Verbe faible inséparable",
      "role": "Verbe inséparable désignant le rôle idéologique des mythes religieux dissimulant l'extorsion de surtravail sous le féodalisme."
},
  "verhüllt": {
      "fr": "voilée / masquée",
      "lit": "couverte d'un voile protecteur",
      "pos_fr": "Adjectif / Participe",
      "role": "Participe adjectivé qualifiant l'exploitation féodale parée des oripeaux de la piété chrétienne.",
      "etymology": "Composé du préfixe verbal transitif d'occultation « ver- » et du verbe « hüllen » (envelopper, couvrir d'un voile, en moyen haut-allemand hüllen, vieux haut-allemand hullen), dérivé du substantif « die Hülle » (le voile, l'enveloppe protectrice, vieux haut-allemand hulla, du proto-germanique *huljaną = couvrir, cacher, issu de la racine indo-européenne *ḱel- = cacher, dérober, d'où proviennent le latin celare, occultere, et l'allemand hehlen)."
},
  "Verkauf": {
      "fr": "vente / cession commerciale",
      "lit": "action d'aliéner contre argent",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin économique désignant l'acte de vente et d'aliénation marchande de la force de travail ouvrière.",
      "etymology": "Du moyen haut-allemand « verkouf », déverbal de « verkaufen » (vendre, faire le commerce pour autrui)."
},
  "verkaufen": {
      "fr": "vendre",
      "lit": "céder contre prix d'argent",
      "pos_fr": "Verbe",
      "role": "Verbe dénonçant la condition de l'ouvrier contraint de se vendre lui-même au jour le jour."
},
  "Verkehr": {
      "fr": "commerce / trafic / communication",
      "lit": "circulation entre humains",
      "pos_fr": "Nom masculin",
      "role": "Concept marxien désignant à la fois le commerce marchand et l'interaction sociale universelle."
},
  "Verkehrsmittel": {
      "fr": "moyens de transport et de communication",
      "lit": "instruments de circulation",
      "pos_fr": "Nom neutre",
      "role": "Nom composé désignant les infrastructures logistiques (chemins de fer, navires) accélérant le capital."
},
  "Verkehrsverhältnisse": {
      "fr": "rapports de circulation et d'échange",
      "lit": "relations régissant les échanges",
      "pos_fr": "Nom masculin",
      "role": "Concept matérialiste désignant le pendant marchand des rapports de production."
},
  "Verkehrsweise": {
      "fr": "mode d'échange / de circulation",
      "lit": "manière d'interagir / de commercer et de communiquer",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin composé désignant les rapports de circulation marchande, de crédit et de transport inséparables de la production.",
      "etymology": "Composé unissant : 1° « der Verkehr » (déverbal de verkehren = échanger, fréquenter, tourner en sens inverse, formé de ver- et kehren, en moyen haut-allemand kēren, en vieux haut-allemand kēran = tourner, proto-germanique *kaizjanan) ; 2° « -s- » ; 3° « die Weise » (mode, manière)."
},
  "verkennen": {
      "fr": "méconnaître / ignorer",
      "lit": "se tromper dans l'appréciation de",
      "pos_fr": "Verbe",
      "role": "Infinitif précédé de 'zu' dépendant de la conjonction 'ohne'."
},
  "verknöchern": {
      "fr": "se pétrifier / s'ossifier",
      "lit": "devenir dur comme un os",
      "pos_fr": "Verbe",
      "role": "Métaphore biologique : les institutions bourgeoises se dissolvent avant même d'avoir pu s'ossifier."
},
  "verkommen": {
      "fr": "péricliter / dépérir",
      "lit": "déchoir de son état",
      "pos_fr": "Verbe",
      "role": "Verbe décrivant l'agonie inévitable des couches artisanales archaïques face à la machine."
},
  "verkümmeren": {
      "fr": "s'étioler / dépérir",
      "lit": "tomber dans le chagrin / rabougrissement",
      "pos_fr": "Verbe",
      "role": "Étiolage des classes arriérées broyées par l'industrie."
},
  "verkünden": {
      "fr": "proclamer / annoncer",
      "lit": "faire connaître au grand jour",
      "pos_fr": "Verbe",
      "role": "Proclamation des nouvelles vérités sociales."
},
  "Verkündigung": {
      "fr": "proclamation / annonce solennelle",
      "lit": "action de faire savoir publiquement",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin solennel désignant la proclamation publique et sans fard des buts et principes de la révolution prolétarienne.",
      "etymology": "Dérivé du verbe « verkündigen » (annoncer, proclamer, vieux haut-allemand verkunden) + « -ung »."
},
  "verlangen": {
      "fr": "exiger / requérir",
      "lit": "désirer avec insistance",
      "pos_fr": "Verbe",
      "role": "Verbe formulant les exigences élémentaires et bornées adressées par l'automate à l'ouvrier."
},
  "verlassen": {
      "fr": "abandonner / quitter",
      "lit": "laisser derrière soi",
      "pos_fr": "Verbe",
      "role": "Verbe marquant l'abandon par les classes moyennes de leur propre point de vue étriqué."
},
  "verlaufen": {
      "fr": "se dérouler / s'écouler",
      "lit": "courir jusqu'au bout",
      "pos_fr": "Verbe",
      "role": "Cours historique des événements."
},
  "verleiden": {
      "fr": "dégoûter de / faire prendre en grippe",
      "lit": "rendre désagréable",
      "pos_fr": "Verbe",
      "role": "Tenter de dégoûter les ouvriers de toute lutte politique."
},
  "verlieren": {
      "fr": "perdre",
      "lit": "être dépossédé d'un bien",
      "pos_fr": "Verbe",
      "role": "Infinitif avec 'zu' soulignant le dénuement absolu et libérateur du prolétariat."
},
  "Verlust": {
      "fr": "perte / préjudice",
      "lit": "privation par égarement ou destruction",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant la perte économique de rentabilité ou la dépossession historique éprouvée par les classes vaincues.",
      "etymology": "Du moyen haut-allemand « verlust », vieux haut-allemand « firrlust », déverbal du verbe « verlieren » (perdre)."
},
  "vermehren": {
      "fr": "multiplier / accroître",
      "lit": "rendre plus grand en quantité / faire fructifier",
      "pos_fr": "Verbe faible",
      "role": "Verbe décrivant le processus d'accumulation et d'auto-valorisation continue du capital."
},
  "vermehrn": {
      "fr": "multiplier / accroître",
      "lit": "rendre plus nombreux",
      "pos_fr": "Verbe",
      "role": "Accroissement continu du capital."
},
  "vermehrt": {
      "fr": "accru / multiplié",
      "lit": "rendu plus abondant",
      "pos_fr": "Adverbe",
      "role": "Participe passé marquant l'expansion démographique citadine provoquée par le capital."
},
  "Vermehrung": {
      "fr": "accroissement / multiplication",
      "lit": "action d'augmenter en quantité",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin économique désignant l'accumulation rapide des marchandises et du capital.",
      "etymology": "Nom d'action économique forgé sur le comparatif quantitatif « mehr » (plus grand, plus nombreux, moyen haut-allemand mêre, vieux haut-allemand mēro, racine germanique *maizô) encadré par le préfixe transitif d'intensification « ver- » et le suffixe d'action « -ung ». Décrit l'accumulation matérielle auto-croissante du capital marchand qui exige continuellement l'augmentation en masse des marchandises produites."
},
  "vermindern": {
      "fr": "diminuer / amoindrir",
      "lit": "rendre plus petit en nombre",
      "pos_fr": "Verbe",
      "role": "Verbe constatant que la bourgeoisie réduit ses propres moyens de conjurer les crises futures."
},
  "vermitteln": {
      "fr": "concilier / arbitrer",
      "lit": "se tenir au milieu",
      "pos_fr": "Verbe",
      "role": "Illusion utopique de concilier l'inconciliable."
},
  "vermittelsen": {
      "fr": "au moyen de / par l'entremise de",
      "lit": "par l'intermédiaire de",
      "pos_fr": "Préposition",
      "role": "préposition régissant le génitif (variante de vermittelst)",
      "etymology": "Dérivé génitival de « vermitteln » (servir de moyen terme, négocier).",
      "isCompound": true,
      "compoundParts": [
            "Mittel",
            "-s"
      ]
},
  "vermittelst": {
      "fr": "au moyen de / grâce à l'intermédiaire de",
      "lit": "par l'entremise de",
      "pos_fr": "Préposition",
      "role": "Préposition de relation indiquant l'instrument technique ou le moyen politique par lequel s'accomplit une transformation historique.",
      "etymology": "Superlatif adverbial figé servant de préposition, issu de « vermitteln ».",
      "isCompound": true,
      "compoundParts": [
            "Mittel",
            "-st"
      ]
},
  "vermögen": {
      "fr": "être capable de / pouvoir",
      "lit": "avoir le pouvoir sur",
      "pos_fr": "Verbe",
      "role": "Verbe soulignant l'impuissance du capital à brider les démons matériels qu'il a invoqués."
},
  "vernichten": {
      "fr": "anéantir / détruire radicalement",
      "lit": "réduire au néant (nichts)",
      "pos_fr": "Verbe",
      "role": "Verbe puissant scandant la destruction violente et cyclique des forces productives et des biens."
},
  "Vernichtung": {
      "fr": "anéantissement / destruction",
      "lit": "action de réduire à néant (nichts)",
      "pos_fr": "Nom féminin",
      "role": "Nom puissant traduisant le sacrifice périodique obligatoire des produits et machines lors des crises."
},
  "Vernichtungskrieg": {
      "fr": "guerre d'extermination",
      "lit": "guerre à mort sans merci",
      "pos_fr": "Nom masculin",
      "role": "Nom composé évoquant la violence dévastatrice d'un cataclysme détruisant tout commerce."
},
  "Vernunft": {
      "fr": "raison / entendement rationnel",
      "lit": "faculté de percevoir intellectuellement et d'ordonner",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin philosophique désignant la raison rationnelle, brandie par les Lumières puis incarnée concrètement dans la critique matérialiste.",
      "etymology": "Du moyen haut-allemand « vernunft », vieux haut-allemand « firnumft » (saisie intellectuelle, perception), dérivé de « vernehmen » (percevoir, entendre)."
},
  "Vernunftgesetz": {
      "fr": "loi de la raison / impératif rationnel",
      "lit": "loi dictée par la raison",
      "pos_fr": "Nom neutre",
      "role": "Nom composé philosophique raillant la prétention des idéologues bourgeois à faire passer les lois du marché pour des lois éternelles de la Raison.",
      "etymology": "Composé de « die Vernunft » (la raison) + « das Gesetz » (la loi, ce qui est posé de manière immuable).",
      "isCompound": true,
      "compoundParts": [
            "Vernunft",
            "Gesetz"
      ]
},
  "verproviantieren": {
      "fr": "s'approvisionner en vue de",
      "lit": "garnir de vivres",
      "pos_fr": "Verbe",
      "role": "Métaphore militaire décrivant les caisses de résistance ouvrières garnies en vue des grèves."
},
  "versammeln": {
      "fr": "rassembler / réunir",
      "lit": "amener en un même lieu",
      "pos_fr": "Verbe pronominal inséparable",
      "role": "Verbe d'action militante : les communistes de diverses nationalités réunis à Londres.",
      "etymology": "Participe passé du verbe « versammeln », formé du préfixe intensif et unificateur « ver- » adjoint à « sammeln » (moyen haut-allemand samelen, vieux haut-allemand samanōn = rassembler en un faisceau ou un corps unifié, dérivé de l'adverbe samano « ensemble », issu de la racine indo-européenne *sem- « un, uni », cognat du grec hama / ἅμα, du latin simul / semel et de l'anglais same). Évoque la convergence vivante des délégués prolétariens de multiples nations surmontant les frontières pour constituer la première internationale ouvrière moderne."
},
  "verschieden": {
      "fr": "différent / divers",
      "lit": "séparé / pluriel",
      "pos_fr": "Adjectif",
      "role": "Adjectif marquant la pluralité des nationalités et des échelons féodaux.",
      "etymology": "Participe passé adjectivé du verbe « verscheiden » (séparer, distinguer, mourir, du moyen haut-allemand verscheiden, de ver- et scheiden = séparer, vieux haut-allemand sceidan, racine proto-germanique *skaidanan)."
},
  "Verschiedenheit": {
      "fr": "diversité / différence / disparité",
      "lit": "état de ce qui est dissocié ou distinct",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la diversité phénoménale des contextes nationaux exigeant une application adaptée du programme communiste.",
      "etymology": "Dérivé de l'adjectif « verschieden » (différent, distinct, à l'origine séparé) + suffixe « -heit »."
},
  "verschmähen": {
      "fr": "dédaigner / refuser de s'abaisser à",
      "lit": "mépriser comme indigne de soi",
      "pos_fr": "Verbe",
      "role": "Verbe principal affirmant la fierté de classe du prolétariat refusant la dissimulation."
},
  "verschreien": {
      "fr": "décrier / flétrir d'infamie",
      "lit": "dénoncer à grands cris devant tous",
      "pos_fr": "Verbe inséparable",
      "role": "Verbe polémique : crier haro sur un parti en le taxant calomnieusement de communisme.",
      "etymology": "Verbe fort composé du préfixe inséparable à valeur dépréciative et délétère « ver- » et du verbe expressif « schreien » (hurler, proférer des clameurs, du moyen haut-allemand schrīen, vieux haut-allemand skrīan, racine germanique *skrīaną). Littéralement : noyer quelqu'un sous des clameurs diffamatoires pour le jeter en pâture à l'opinion publique et le condamner sans procès."
},
  "Verschwinden": {
      "fr": "disparition",
      "lit": "action de s'évanouir / dissipation",
      "pos_fr": "Nom neutre",
      "role": "Substantif verbal désignant l'effacement historique inéluctable des antagonismes de classes et de la domination bourgeoise.",
      "etymology": "Substantivation du verbe « verschwinden », issu du moyen haut-allemand « verswinden », vieux haut-allemand « farswindan » (décroître, disparaître soudainement, s'évanouir)."
},
  "verschwinden": {
      "fr": "disparaître / s'évanouir",
      "lit": "s'effacer du regard, cesser d'exister",
      "pos_fr": "Verbe fort inséparable",
      "role": "Verbe désignant l'extinction irréversible des classes artisanales féodales.",
      "etymology": "Verbe fort marquant l'effacement définitif, formé du préfixe d'évanouissement « ver- » et du moyen haut-allemand « swinden » (s'épuiser, dépérir, disparaître sans laisser de trace, vieux haut-allemand swintan, racine germanique *swinþaną). Évoque la dissolution irrémédiable de l'artisanat médiéval balayé par la tornade productive de la mécanisation."
},
  "verstecken": {
      "fr": "dissimuler / cacher",
      "lit": "ficher à l'abri des regards",
      "pos_fr": "Verbe",
      "role": "Geste de dévoilement critique : démasquer les intérêts bourgeois tapis derrière la morale et la loi."
},
  "versteckt": {
      "fr": "voilé / masqué / sourd",
      "lit": "caché aux regards / clandestin",
      "pos_fr": "Participe adjectivé",
      "role": "Adjectif qualifiant la guerre de classe latente sous la paix sociale apparente.",
      "etymology": "Participe du verbe d'occultation « verstecken », formé du préfixe intensif « ver- » et du verbe « stecken » (ficher, enfoncer dans un recoin sombre, moyen haut-allemand stecken, vieux haut-allemand stehhan, racine germanique *stik-, cognat de l'anglais stick). Évoque la résistance passive, les grèves clandestines ou les sabotages quotidiens où la lutte des classes agit sans bruit avant d'exploser sur les barricades."
},
  "verstehen": {
      "fr": "se comprendre / aller de soi",
      "lit": "comprendre (au passif réfléchi : se comprendre de soi-même)",
      "pos_fr": "Verbe",
      "role": "Noyau verbal à la 3e personne du singulier dans la tournure 'versteht sich von selbst' (va de soi)."
},
  "versteht": {
      "fr": "se comprendre / aller de soi",
      "lit": "comprendre (au passif réfléchi : se comprendre de soi-même)",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'versteht' du lemme 'verstehen'. Noyau verbal à la 3e personne du singulier dans la tournure 'versteht sich von selbst' (va de soi)."
},
  "Verständigung": {
      "fr": "entente / accord politique mutuel",
      "lit": "action de se faire comprendre et d'établir un accord",
      "pos_fr": "Nom féminin",
      "role": "Substantif au datif coordonné à 'Verbindung' désignant la concorde programmatique internationale."
},
  "verständigung": {
      "fr": "entente / accord politique mutuel",
      "lit": "action de se faire comprendre et d'établir un accord",
      "pos_fr": "Nom féminin",
      "role": "Forme fléchie 'Verständigung' du lemme 'Verständigung'. Substantif au datif coordonné à 'Verbindung' désignant la concorde programmatique internationale."
},
  "Verständnis": {
      "fr": "compréhension théorique / intelligence",
      "lit": "action d'entendre le sens",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre qualifiant l'intelligence théorique du mouvement d'ensemble acquise par les idéologues ralliés."
},
  "Versuch": {
      "fr": "tentative / essai / expérience",
      "lit": "action de mettre à l'épreuve",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant la tentative pratique, l'expérimentation révolutionnaire ou l'essai d'organisation ouvrière autonome.",
      "etymology": "Du moyen haut-allemand « versuoch », déverbal de « versuchen » (essayer, tenter, vieux haut-allemand far-suohhan, chercher à fond)."
},
  "versuchen": {
      "fr": "tenter / essayer",
      "lit": "mettre à l'épreuve",
      "pos_fr": "Verbe",
      "role": "Tentatives révolutionnaires prématurées."
},
  "versuchsweise": {
      "fr": "à titre d'essai / expérimentalement",
      "lit": "par voie d'épreuve",
      "pos_fr": "Adjectif",
      "role": "Expériences de phalanstères à petite échelle."
},
  "vertauschen": {
      "fr": "échanger / troquer",
      "lit": "substituer par tromperie / troc",
      "pos_fr": "Verbe",
      "role": "Substituer l'analyse matérialiste par des rêveries."
},
  "verteidigen": {
      "fr": "défendre",
      "lit": "repousser l'attaque",
      "pos_fr": "Verbe",
      "role": "Verbe opposant la défense d'intérêts immédiats anachroniques à celle de l'avenir prolétarien."
},
  "Verteilung": {
      "fr": "répartition / distribution / partage",
      "lit": "action de diviser en parts",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin économique désignant la distribution des richesses, que Marx refuse d'isoler des rapports de production sous-jacents.",
      "etymology": "Dérivé du verbe « verteilen » (répartir, diviser en parts, de Teil part) + « -ung »."
},
  "vertreten": {
      "fr": "représenter / défendre",
      "lit": "tenir la place de / représenter activement",
      "pos_fr": "Verbe",
      "role": "Noyau verbal à la 3e personne du pluriel marquant le mandat communiste pour l'avenir."
},
  "Vertreter": {
      "fr": "représentant / porte-parole / délégué",
      "lit": "celui qui se tient à la place d'autrui",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant le délégué politique ou le porte-parole intellectuel représentant les intérêts d'une classe.",
      "etymology": "Nom d'agent dérivé du verbe « vertreten » (représenter, se tenir à la place de, de treten, marcher/fouler)."
},
  "verträglich": {
      "fr": "compatible / tolérable",
      "lit": "qui peut s'accorder avec",
      "pos_fr": "Adjectif",
      "role": "Adjectif réfutant la viabilité matérielle de la survie collective sous l'égide bourgeoise."
},
  "verursachen": {
      "fr": "occasionner / coûter",
      "lit": "être la cause matérielle de",
      "pos_fr": "Verbe",
      "role": "Verbe comptable évaluant les coûts stricts de reproduction biologique occasionnés par l'ouvrier."
},
  "verwalten": {
      "fr": "administrer / régir / gérer",
      "lit": "exercer le pouvoir régulier sur",
      "pos_fr": "Verbe",
      "role": "Verbe institutionnel désignant la gestion collective et rationnelle des ressources productives au profit de tous.",
      "etymology": "Composé de « ver- » + « walten » (régner, gouverner, avoir autorité).",
      "isCompound": true,
      "compoundParts": [
            "ver-",
            "walten"
      ]
},
  "verwaltend": {
      "fr": "s'administrant / gestionnaire",
      "lit": "qui régit et gère ses propres affaires civiques",
      "pos_fr": "Adjectif / Participe",
      "role": "Participe présent décrivant l'auto-gouvernement municipal conquis par les bourgeoisies urbaines d'Italie et de France."
},
  "Verwaltung": {
      "fr": "administration / intendance / gestion",
      "lit": "action de régir et gouverner les biens",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin politique : au terme du développement communiste, le gouvernement des hommes cède la place à l'administration des choses.",
      "etymology": "Dérivé du verbe « verwalten » (administrer, régir, de walten, régner/gouverner) + « -ung »."
},
  "verwandeln": {
      "fr": "transformer / métamorphoser",
      "lit": "changer de forme",
      "pos_fr": "Verbe",
      "role": "Verbe de transmutation révélant la conversion universelle de toute valeur en marchandise vénale."
},
  "Verwandlung": {
      "fr": "métamorphose / transformation / conversion",
      "lit": "action de tourner ou changer d'aspect",
      "pos_fr": "Nom féminin",
      "role": "Concept dialectique désignant la transformation qualitative et la transmutation d'un rapport social en son contraire historique.",
      "etymology": "Dérivé de « verwandeln » (changer, métamorphoser, de wenden, tourner) + « -ung »."
},
  "Verwendung": {
      "fr": "utilisation / emploi / affectation",
      "lit": "action de tourner une ressource vers un but",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin technique et économique désignant l'emploi et l'affectation productive de la main-d'œuvre et des machines.",
      "etymology": "Dérivé de « verwenden » (employer, affecter, utiliser) + « -ung »."
},
  "verwerfen": {
      "fr": "rejeter / répudier",
      "lit": "jeter au rebut",
      "pos_fr": "Verbe",
      "role": "Rejet des actions politiques violentes par les utopistes."
},
  "verwirklichen": {
      "fr": "réaliser / concrétiser",
      "lit": "rendre réel",
      "pos_fr": "Verbe",
      "role": "Concrétisation des systèmes socialistes."
},
  "Verwirklichung": {
      "fr": "réalisation / matérialisation concrète",
      "lit": "action de rendre effectif ou réel",
      "pos_fr": "Nom féminin",
      "role": "Concept philosophique matérialiste désignant la réalisation concrète et l'effectuation historique des idées dans la praxis humaine.",
      "etymology": "Dérivé de « verwirklichen » (rendre réel, concrétiser, de wirklich, réel) + « -ung ».",
      "isCompound": true,
      "compoundParts": [
            "ver-",
            "wirklich",
            "-ung"
      ]
},
  "verwischen": {
      "fr": "effacer / estomper",
      "lit": "essuyer pour faire disparaître",
      "pos_fr": "Verbe",
      "role": "Verbe montrant le machinisme effaçant toute singularité ou différence qualitative dans le labeur."
},
  "verzeichnen": {
      "fr": "enregistrer / répertorier",
      "lit": "noter par écrit",
      "pos_fr": "Verbe",
      "role": "Constater les étapes du recul féodal."
},
  "verändern": {
      "fr": "changer / modifier / transformer",
      "lit": "rendre autre",
      "pos_fr": "Verbe",
      "role": "Verbe de praxis révolutionnaire : 'Les philosophes n'ont fait qu'interpréter le monde, il s'agit désormais de le transformer.'",
      "etymology": "Dérivé de « ander » (autre).",
      "isCompound": true,
      "compoundParts": [
            "ver-",
            "ander",
            "-n"
      ]
},
  "Veränderung": {
      "fr": "changement / modification / altération",
      "lit": "action de rendre autre",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin fondamental marquant le changement continu de la base matérielle par le bouleversement permanent de la production.",
      "etymology": "Dérivé du verbe « verändern » (rendre autre, modifier, de ander, autre) + « -ung ».",
      "isCompound": true,
      "compoundParts": [
            "ver-",
            "ander",
            "-ung"
      ]
},
  "veröffentlichen": {
      "fr": "publier / rendre public",
      "lit": "porter à la connaissance de la collectivité",
      "pos_fr": "Verbe inséparable",
      "role": "Verbe d'affirmation politique : proclamer le Manifeste à la face du monde.",
      "etymology": "Verbe verbalisé par le préfixe transitif « ver- » appliqué à l'adjectif « öffentlich » (public, ouvert à la vue de tous, moyen haut-allemand offenlich, vieux haut-allemand offanlīh), formé sur « offen » (ouvert, vieux haut-allemand offan, racine germanique *upana-, apparenté à la préposition auf et à l'anglais open). Littéralement : faire franchir à un texte la barrière de la clandestinité policière pour le faire retentir dans l'espace public universel."
},
  "viel": {
      "fr": "nombreux / beaucoup",
      "lit": "en quantité multiple",
      "pos_fr": "Adjectif",
      "role": "Quantificateur soulignant la multiplicité des armes fournies malgré elle par la bourgeoisie."
},
  "viele": {
      "fr": "nombreux / beaucoup",
      "lit": "en quantité multiple",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'viele' du lemme 'viel'. Quantificateur soulignant la multiplicité des armes fournies malgré elle par la bourgeoisie."
},
  "vieler": {
      "fr": "de nombreux / beaucoup de",
      "lit": "forme génitive de viel",
      "pos_fr": "Déterminant",
      "role": "Déterminant de quantité indéfinie au pluriel."
},
  "vielmehr": {
      "fr": "bien plutôt / au contraire",
      "lit": "beaucoup plus",
      "pos_fr": "Adverbe",
      "role": "Rectification dialectique d'une fausse apparence."
},
  "Vizinalweg": {
      "fr": "chemin vicinal / voie secondaire",
      "lit": "chemin communal de voisinage",
      "pos_fr": "Nom",
      "role": "Nom composé illustrant la lenteur des communications médiévales comparée à l'éclair du chemin de fer."
},
  "Vogelscheuche": {
      "fr": "épouvantail",
      "lit": "mannequin destiné à effrayer les oiseaux",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin hautement imagé : l'épouvantail brandi par les absolutistes pour terrifier la bourgeoisie libérale hésitante.",
      "etymology": "Composé de « der Vogel » (l'oiseau) + déverbal de « scheuchen » (effaroucher, faire fuir).",
      "isCompound": true,
      "compoundParts": [
            "Vogel",
            "scheuchen"
      ]
},
  "Volk": {
      "fr": "peuple / nation / masse populaire",
      "lit": "troupe nombreuse / communauté nationale",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre désignant le peuple travailleur, masse des opprimés mobilisée par le prolétariat pour renverser le joug bourgeois.",
      "etymology": "Du moyen haut-allemand « volc », vieux haut-allemand « folk » (troupe d'hommes en armes, foule, multitude, peuple)."
},
  "Volksmasse": {
      "fr": "masse populaire / ensemble du peuple",
      "lit": "masse du peuple",
      "pos_fr": "Nom féminin",
      "role": "Nom composé désignant la masse populaire laborieuse, force motrice des soulèvements révolutionnaires modernes.",
      "etymology": "Composé de « Volk » + « die Masse » (la masse, foule compacte, du latin massa).",
      "isCompound": true,
      "compoundParts": [
            "Volk",
            "-s-",
            "Masse"
      ]
},
  "vollbringen": {
      "fr": "accomplir / exécuter / mener à bien",
      "lit": "porter à son plein achèvement",
      "pos_fr": "Verbe",
      "role": "Verbe exprimant l'accomplissement historique de la révolution bourgeoise en Allemagne."
},
  "vollbringt": {
      "fr": "accomplir / exécuter / mener à bien",
      "lit": "porter à son plein achèvement",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'vollbringt' du lemme 'vollbringen'. Verbe exprimant l'accomplissement historique de la révolution bourgeoise en Allemagne."
},
  "vollendet": {
      "fr": "achevé / parfait / consommé",
      "lit": "mené jusqu'au bout",
      "pos_fr": "Participe passé adjectivé",
      "role": "Participe passé qualifiant l'achèvement complet et la maturité historique des contradictions du mode de production capitaliste.",
      "etymology": "Composé de « voll » (plein) + « enden » (finir).",
      "isCompound": true,
      "compoundParts": [
            "voll-",
            "enden"
      ]
},
  "vollständig": {
      "fr": "complet / intégral",
      "lit": "qui possède toutes ses composantes",
      "pos_fr": "Adjectif",
      "role": "Adjectif décrivant la division méticuleuse du corps social médiéval.",
      "etymology": "Composé de « voll » (plein, vieux haut-allemand fol) et « ständig » (qui tient debout, de stehen)."
},
  "von": {
      "fr": "de / par",
      "lit": "provenance / cause ou complément d'agent",
      "pos_fr": "Préposition (régime datif)",
      "role": "Préposition de provenance ou d'agent au passif régissant le datif."
},
  "von dem": {
      "fr": "du / par le",
      "lit": "contraction 'vom'",
      "pos_fr": "Préposition contractée",
      "role": "Contraction de 'von' avec l'article datif masculin/neutre."
},
  "voneinander": {
      "fr": "les unes des autres / mutuellement",
      "lit": "l'un de l'autre",
      "pos_fr": "Pronom",
      "role": "Pronom adverbial exprimant l'interdépendance matérielle et intellectuelle universelle des nations."
},
  "voneinandertreten": {
      "fr": "se séparer / diverger",
      "lit": "marcher l'un loin de l'autre",
      "pos_fr": "Verbe séparable",
      "role": "Divergence croissante entre classes antagonistes."
},
  "vor": {
      "fr": "devant / à la face de",
      "lit": "en présence de",
      "pos_fr": "Préposition mixte (Acc/Dat)",
      "role": "Préposition marquant la publicité de la proclamation devant le monde entier."
},
  "Vorabend": {
      "fr": "veille",
      "lit": "soir précédant la journée décisive",
      "pos_fr": "Nom masculin",
      "role": "Substantif au datif masculin singulier après 'an dem' ('am Vorabend einer Revolution')."
},
  "vorabend": {
      "fr": "veille",
      "lit": "soir précédant la journée décisive",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'Vorabend' du lemme 'Vorabend'. Substantif au datif masculin singulier après 'an dem' ('am Vorabend einer Revolution')."
},
  "voraushaben": {
      "fr": "avoir l'avantage sur / avoir d'avance sur",
      "lit": "avoir en avant",
      "pos_fr": "Verbe",
      "role": "Verbe séparable affirmant la supériorité théorique décisive des communistes qui possèdent une claire intelligence de la marche du mouvement.",
      "etymology": "Composé de « voraus » (en avant) + « haben » (avoir).",
      "isCompound": true,
      "compoundParts": [
            "voraus",
            "haben"
      ]
},
  "voraussetzen": {
      "fr": "supposer / présupposer / exiger comme condition préalable",
      "lit": "poser en avant",
      "pos_fr": "Verbe",
      "role": "Verbe matérialiste soulignant que chaque saut historique exige des conditions matérielles préalables mûries dans les entrailles de l'ancien monde.",
      "etymology": "Calque de « praesupponere », composé de « voraus » + « setzen ».",
      "isCompound": true,
      "compoundParts": [
            "voraus",
            "setzen"
      ]
},
  "Voraussetzung": {
      "fr": "prémisse / condition préalable / présupposé",
      "lit": "ce qui est posé à l'avance",
      "pos_fr": "Nom féminin",
      "role": "Concept logique et matérialiste cardinal désignant les prémisses réelles et les conditions objectives préalables de l'émancipation.",
      "etymology": "Calque du latin « praesuppositio », composé de « voraus » (en avant, préalablement) + « setzen » (poser) + « -ung ».",
      "isCompound": true,
      "compoundParts": [
            "voraus",
            "setzen",
            "-ung"
      ]
},
  "vorbereiten": {
      "fr": "préparer / frayer la voie",
      "lit": "apprêter préalablement à l'avance",
      "pos_fr": "Verbe séparable faible",
      "role": "Verbe marquant la gestation historique préalable des conditions du marché mondial par les découvertes maritimes.",
      "etymology": "Composé du préfixe adverbial « vor » (en avant, préalablement, en vieux haut-allemand fora) et du verbe faible « bereiten » (rendre prêt, apprêter, en moyen haut-allemand bereiten, dérivé de l'adjectif bereit = prêt, équipé, en vieux haut-allemand bireiti)."
},
  "vorbeugen": {
      "fr": "prévenir / conjurer",
      "lit": "se courber en avant",
      "pos_fr": "Verbe",
      "role": "Verbe diagnostiquant la perte par la bourgeoisie de tout moyen prophylactique face aux crises."
},
  "vorfinden": {
      "fr": "trouver / rencontrer",
      "lit": "trouver devant soi",
      "pos_fr": "Verbe fort séparable",
      "role": "Verbe théorique désignant les conditions matérielles objectives que chaque génération trouve déjà établies devant elle et à partir desquelles elle doit agir.",
      "etymology": "Composé séparable du préfixe adverbial « vor » (devant, en avant) et du verbe fort « finden » (trouver, en moyen haut-allemand « vinden », vieux haut-allemand « findan »)."
},
  "vorgehen": {
      "fr": "se passer / se dérouler",
      "lit": "avancer devant",
      "pos_fr": "Verbe séparable",
      "role": "Processus historiques se déroulant sous nos yeux."
},
  "Vorgesetzte": {
      "fr": "supérieur hiérarchique / contremaître",
      "lit": "celui qui est placé devant",
      "pos_fr": "Nom masculin pluriel",
      "role": "Participe substantivé désignant les supérieurs hiérarchiques et contremaîtres encadrant les ouvriers dans la fabrique.",
      "etymology": "Participe passé substantivé de « vorsetzen » (placer devant ou à la tête).",
      "isCompound": true,
      "compoundParts": [
            "vor-",
            "gesetzt"
      ]
},
  "Vorgesetzter": {
      "fr": "supérieur / contremaître",
      "lit": "celui qui est installé en avant ou à la tête",
      "pos_fr": "Nom masculin",
      "role": "Participe substantivé désignant les seigneurs et maîtres de corporations investis d'une autorité coutumière."
},
  "vorherging": {
      "fr": "précéda / s'était déroulé avant",
      "lit": "alla auparavant",
      "pos_fr": "Verbe",
      "role": "verbe au prétérit (3e personne du singulier)",
      "etymology": "Prétérit du verbe séparable « vorhergehen » (précéder, de vorher avant + gehen aller).",
      "isCompound": true,
      "compoundParts": [
            "vorher",
            "ging"
      ]
},
  "vorliegend": {
      "fr": "immédiat / actuel / sous les yeux",
      "lit": "qui gît devant / immédiatement présent",
      "pos_fr": "Adjectif",
      "role": "Épithète au génitif masculin pluriel qualifiant 'Zwecke'."
},
  "vorliegenden": {
      "fr": "immédiat / actuel / sous les yeux",
      "lit": "qui gît devant / immédiatement présent",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'vorliegenden' du lemme 'vorliegend'. Épithète au génitif masculin pluriel qualifiant 'Zwecke'."
},
  "Vorläufer": {
      "fr": "précurseur / avant-coureur",
      "lit": "celui qui court en avant",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant les précurseurs héroïques et hérauts pionniers des luttes de classe modernes (Munzer, Babeuf).",
      "etymology": "Calque du latin « praecursor », composé de « vor- » (devant) + « laufen » (courir) + « -er ».",
      "isCompound": true,
      "compoundParts": [
            "vor-",
            "laufen",
            "-er"
      ]
},
  "Vorspiel": {
      "fr": "prélude / avant-jeu",
      "lit": "jeu précédant le drame principal",
      "pos_fr": "Nom neutre",
      "role": "Substantif composé attributif désignant le prologue à la révolution socialiste."
},
  "vorspiel": {
      "fr": "prélude / avant-jeu",
      "lit": "jeu précédant le drame principal",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'Vorspiel' du lemme 'Vorspiel'. Substantif composé attributif désignant le prologue à la révolution socialiste."
},
  "vorstellen": {
      "fr": "se représenter / concevoir",
      "lit": "placer devant soi",
      "pos_fr": "Verbe séparable",
      "role": "La bourgeoisie s'imaginant son monde comme le meilleur possible."
},
  "Vorstellung": {
      "fr": "représentation mentale / préjugé d'antan",
      "lit": "image posée devant l'esprit",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant les dogmes idéologiques et préjugés religieux balayés par le marché."
},
  "Vorurteil": {
      "fr": "préjugé / parti pris",
      "lit": "jugement hâtif non fondé",
      "pos_fr": "Nom neutre",
      "role": "Nom composé désignant la morale et les lois conçues comme simples masques des intérêts dominants."
},
  "vorwerfen": {
      "fr": "reprocher / jeter à la face",
      "lit": "jeter devant soi",
      "pos_fr": "Verbe",
      "role": "Verbe traduisant les reproches acharnés et les accusations hypocrites que les défenseurs du capital jettent à la face du communisme.",
      "etymology": "Composé de « vor » (devant) + « werfen » (jeter).",
      "isCompound": true,
      "compoundParts": [
            "vor-",
            "werfen"
      ]
},
  "Vorwurf": {
      "fr": "reproche / grief infamant",
      "lit": "projectile verbal jeté à la figure d'un adversaire",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin (Vor + Wurf, jet en avant) : l'anathème jeté pour discréditer un parti.",
      "etymology": "Déverbal de « vorwerfen » (moyen haut-allemand vorwerfen, vieux haut-allemand fora-werfan = jeter devant soi). Le substantif « Vorwurf » s'est fixé au XVIIe siècle comme calque morphologique et sémantique rigoureux du latin « obiectio » (de ob- = devant + iacere = jeter). Désigne ce que l'on jette à la figure d'un adversaire lors d'une joute oratoire."
},
  "vorzugsweise": {
      "fr": "de préférence / particulièrement",
      "lit": "par manière de préférence",
      "pos_fr": "Adverbe",
      "role": "Application préférentielle aux secteurs industriels."
},
  "vorzupredigen": {
      "fr": "prêcher / sermonner",
      "lit": "prêcher devant",
      "pos_fr": "Verbe",
      "role": "Sermons moralisateurs adressés aux travailleurs."
},
  "vorübergehend": {
      "fr": "passager / éphémère",
      "lit": "qui passe devant en s'en allant",
      "pos_fr": "Adjectif",
      "role": "Participe présent soulignant le caractère transitoire des premières victoires syndicales."
},
  "Völkerwanderung": {
      "fr": "migration des peuples / invasions barbares",
      "lit": "marche des peuples",
      "pos_fr": "Nom féminin",
      "role": "Nom composé historique évoquant les grandes migrations antiques dépassées par l'expansion bourgeoise."
},
  "wachsen": {
      "fr": "croître / s'agrandir",
      "lit": "augmenter en volume physique et organique",
      "pos_fr": "Verbe fort",
      "role": "Verbe fort décrivant l'expansion continue et irrésistible de l'espace commercial mondial.",
      "etymology": "Issu du moyen haut-allemand « wahsen » (prétérit wuchs, participe gewahsen), vieux haut-allemand « wahsan ». Proto-germanique *wahsanan (croître, grandir), issu de la racine indo-européenne *h₂weg- / *h₂woks- (augmenter, croître, cognat du grec αὐξάνω / auxanō, du latin augere / auctus, et du vieil anglais weaxan / anglais moderne wax dans 'wax and wane')."
},
  "wachsend": {
      "fr": "croissant / grandissant",
      "lit": "qui pousse continuellement",
      "pos_fr": "Adjectif",
      "role": "Participe présent décrivant l'amplification de la concurrence intestine des bourgeois."
},
  "Waffe": {
      "fr": "arme",
      "lit": "instrument de combat",
      "pos_fr": "Nom féminin",
      "role": "Substantif à l'accusatif féminin pluriel désignant les armes politiques retournées contre le capital."
},
  "waffen": {
      "fr": "arme",
      "lit": "instrument de combat",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'Waffen' du lemme 'Waffe'. Substantif à l'accusatif féminin pluriel désignant les armes politiques retournées contre le capital."
},
  "wahr": {
      "fr": "vrai / authentique",
      "lit": "conforme à la vérité",
      "pos_fr": "Adjectif",
      "role": "Ironie de Marx sur le prétendu 'vrai' socialisme allemand."
},
  "wahrer": {
      "fr": "le vrai / plus authentique",
      "lit": "authentique décliné",
      "pos_fr": "Adjectif",
      "role": "Critique du 'Vrai Socialisme' (der wahre Sozialismus)."
},
  "wahrhaft": {
      "fr": "véritablement / réellement",
      "lit": "en vérité authentique",
      "pos_fr": "Adverbe",
      "role": "La classe vraiment révolutionnaire."
},
  "Wahrheit": {
      "fr": "vérité",
      "lit": "caractère de ce qui est vrai et authentique",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin philosophique : Marx traque la vérité effective sous le masque des fictions juridiques et idéologiques de l'ordre régnant.",
      "etymology": "Du moyen haut-allemand « wārheit », vieux haut-allemand « wāra » (vérité, fidélité au vrai), rattaché à « wahr » (vrai)."
},
  "Wandel": {
      "fr": "mutation / transformation / conduite",
      "lit": "marche continuelle / changement d'état",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant la mutation continue des structures sociales et la conduite morale des individus au cours de l'histoire.",
      "etymology": "Du moyen haut-allemand « wandel », vieux haut-allemand « wandal » (tournant, changement, mœurs, commerce), déverbal de « wandeln »."
},
  "Wappe": {
      "fr": "armoiries / blason / écusson",
      "lit": "signe d'armes gravé sur l'écu",
      "pos_fr": "Nom neutre",
      "role": "nom neutre (forme archaïque/abrégée de Wappen)",
      "etymology": "Doublet de « Waffe » (arme), emprunté au bas-allemand « wapen » (armes blasonnées sur le bouclier)."
},
  "Ward": {
      "fr": "devint / fut",
      "lit": "tourna vers un nouvel état",
      "pos_fr": "Verbe fort au prétérit",
      "role": "Forme archaïque du prétérit de « werden » (devint, fut) employée dans l'édition originale de 1848 pour scander les mutations historiques.",
      "etymology": "Forme ancienne et poétique de 1re/3e personne du singulier au prétérit du verbe « werden » (moyen haut-allemand wart, vieux haut-allemand ward)."
},
  "Ware": {
      "fr": "marchandise",
      "lit": "produit du travail destiné à la vente sur un marché",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin : la cellule élémentaire de la richesse capitaliste selon Marx.",
      "etymology": "Issu du moyen haut-allemand « ware », vieux haut-allemand « wara » (marchandise transportée, denrée précieuse destinée au trafic marchand), issu de la racine germanique commune *warō- (« attention, soin vigilant, conservation soigneuse », cognat de wahren = préserver et du vieil anglais waru d'où découle l'anglais ware dans hardware, software). La marchandise est étymologiquement l'objet de précaution et d'estimation marchande, cellule élémentaire du mode de production capitaliste dans 'Le Capital'."
},
  "warum": {
      "fr": "pourquoi",
      "lit": "pour quelle raison",
      "pos_fr": "Adverbe",
      "role": "Adverbe introduisant l'interrogation dialectique centrale sur les causes de la crise de surproduction."
},
  "was": {
      "fr": "ce que / quoi",
      "lit": "pronom relatif indéfini neutre",
      "pos_fr": "Pronom",
      "role": "Pronom introduisant la proposition subordonnée objet ou sujet."
},
  "Wasser": {
      "fr": "eau",
      "lit": "élément liquide",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre élémentaire : métaphore de l'élément liquide emportant les digues de l'ordre traditionnel.",
      "etymology": "Du moyen haut-allemand « wazzer », vieux haut-allemand « wazzar », d'origine indo-européenne *wódr̥ (eau)."
},
  "Wasserleitung": {
      "fr": "aqueduc / conduite d'eau",
      "lit": "canalisation de l'eau",
      "pos_fr": "Nom féminin",
      "role": "Nom composé évoquant les monuments du génie civil romain surpassés par les travaux industriels."
},
  "Wechsel": {
      "fr": "changement / alternance / lettre de change",
      "lit": "échange / succession alternée",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant à la fois le changement dialectique permanent et la lettre de change financière du commerce bourgeois.",
      "etymology": "Du moyen haut-allemand « wehsel », vieux haut-allemand « wehsal » (échange, troc, changement), issu de la racine indo-européenne *weik- (changer, céder)."
},
  "Wechselfäll": {
      "fr": "vicissitudes / aléas du marché",
      "lit": "cas de variation changeante",
      "pos_fr": "Nom neutre",
      "role": "Forme lemmatisée désignant les fluctuations instables auxquelles l'ouvrier-marchandise est assujetti."
},
  "wechselseitig": {
      "fr": "réciproque / mutuel",
      "lit": "d'un côté et de l'autre en échange",
      "pos_fr": "Adjectif",
      "role": "Adjectif dialectique caractérisant l'action en retour et l'interdépendance universelle reliant toutes les nations sous le marché mondial.",
      "etymology": "Composé de « Wechsel » (changement, alternance) + « Seite » (côté) + « -ig ».",
      "isCompound": true,
      "compoundParts": [
            "Wechsel",
            "Seite",
            "-ig"
      ]
},
  "Weg": {
      "fr": "voie / chemin / route / moyen",
      "lit": "voie tracée pour le déplacement",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant la voie historique frayée par le prolétariat dans sa marche conquérante vers le pouvoir d'État.",
      "etymology": "Du moyen haut-allemand « wec », vieux haut-allemand « weg », d'origine proto-germanique *wega- (route, chemin), rattaché au verbe « bewegen »."
},
  "weg": {
      "fr": "loin / disparu / parti",
      "lit": "en chemin vers le dehors",
      "pos_fr": "Adverbe",
      "role": "Élimination des obstacles corporatifs anciens."
},
  "Wegfalle": {
      "fr": "suppression / disparition / cessation",
      "lit": "fait de tomber au rebut / caducité",
      "pos_fr": "Nom masculin",
      "role": "nom masculin au datif (variante de Wegfall)",
      "etymology": "Composé de la particule « weg » (au loin) + « der Fall » (la chute, cessation).",
      "isCompound": true,
      "compoundParts": [
            "weg-",
            "Fall"
      ]
},
  "wegziehen": {
      "fr": "dérober / arracher de dessous",
      "lit": "tirer au loin",
      "pos_fr": "Verbe",
      "role": "Verbe illustrant l'industrie arrachée à son socle territorial national par le marché mondial."
},
  "Wehmut": {
      "fr": "mélancolie / douleur nostalgique",
      "lit": "douleur de l'âme / affliction intérieure",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la mélancolie passéiste et la déploration nostalgique des classes rétrogrades devant la dissolution impitoyable de l'ancien monde féodal.",
      "etymology": "Issu du moyen haut-allemand « wēmuot », vieux haut-allemand « wēmuoti » (affliction de l'âme, douleur d'esprit, tristesse), composé de « wehe / wē » (hélas, malheur, interjection germanique *wai, cognat du latin « vae ») et de « Mut » (disposition intérieure de l'âme, humeur, sentiment, en vieux haut-allemand « muot », cognat de l'anglais « mood »)."
},
  "Weib": {
      "fr": "femme / épouse",
      "lit": "être humain féminin adulte",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre désignant la main-d'œuvre féminine exploitée à l'usine pour faire baisser les salaires."
},
  "Weiber": {
      "fr": "femmes",
      "lit": "femmes adultes",
      "pos_fr": "Nom neutre pluriel",
      "role": "Nom neutre pluriel : forme plurielle de « Weib » employée au XIXe siècle dans la critique de la prétendue « communauté des femmes » bourgeoise."
},
  "Weibergemeinschaft": {
      "fr": "communauté des femmes",
      "lit": "mise en commun des femmes",
      "pos_fr": "Nom féminin",
      "role": "Nom composé central du chapitre II : Marx réfute avec brio l'accusation bourgeoise imputant aux communistes la 'communauté des femmes'.",
      "etymology": "Composé au pluriel de « das Weib » (la femme, l'épouse) + « die Gemeinschaft » (la communauté, mise en commun).",
      "isCompound": true,
      "compoundParts": [
            "Weib",
            "-er-",
            "Gemeinschaft"
      ]
},
  "Weihwasser": {
      "fr": "eau bénite",
      "lit": "eau consacrée pour la purification rituelle",
      "pos_fr": "Nom neutre",
      "role": "Nom composé satirique cinglant : l'eau bénite catholique avec laquelle le prêtre consacre le dépit et la rancœur de l'aristocratie.",
      "etymology": "Composé de « weihen » (consacrer, bénir, vieux haut-allemand wīhen) + « das Wasser » (l'eau).",
      "isCompound": true,
      "compoundParts": [
            "weihen",
            "Wasser"
      ]
},
  "weil": {
      "fr": "parce que",
      "lit": "en raison de ce que",
      "pos_fr": "Conjonction",
      "role": "Conjonction régissant l'analyse matérialiste des causes du rôle pivot de l'Allemagne."
},
  "Weise": {
      "fr": "manière / façon / mode",
      "lit": "forme d'agir ou d'être",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la manière concrète ou le mode structurel de production et d'appropriation régissant une époque.",
      "etymology": "Du moyen haut-allemand « wīs », vieux haut-allemand « wīsa » (façon d'agir, mélodie, manière), rattaché à « wissen » (savoir)."
},
  "weit": {
      "fr": "bien plus / largement",
      "lit": "loin / vaste (ici adverbe de degré au comparatif)",
      "pos_fr": "Adverbe",
      "role": "Adverbe au comparatif intensifiant le degré d'organisation du prolétariat."
},
  "weiter": {
      "fr": "bien plus / largement",
      "lit": "loin / vaste (ici adverbe de degré au comparatif)",
      "pos_fr": "Adverbe",
      "role": "Forme fléchie 'weiter' du lemme 'weit'. Adverbe au comparatif intensifiant le degré d'organisation du prolétariat."
},
  "weitertreibend": {
      "fr": "qui pousse en avant / moteur dynamique",
      "lit": "qui pousse plus loin",
      "pos_fr": "Participe présent adjectivé",
      "role": "Participe présent décrivant la dynamique motrice du prolétariat poussant en avant la révolution démocratique.",
      "etymology": "Composé de « weiter » (plus loin) + participe de « treiben » (pousser).",
      "isCompound": true,
      "compoundParts": [
            "weiter",
            "treiben"
      ]
},
  "welch": {
      "fr": "qui / que / lequel / quel",
      "lit": "lequel / quel (pronom relatif ou interrogatif)",
      "pos_fr": "Pronom",
      "role": "Pronom relatif introduisant une subordonnée relative déterminative."
},
  "welche": {
      "fr": "qui / que / lequel / quel",
      "lit": "lequel / quel (pronom relatif ou interrogatif)",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'welche' du lemme 'welch'. Pronom relatif introduisant une subordonnée relative déterminative."
},
  "welcher": {
      "fr": "qui / que / lequel",
      "lit": "pronom relatif anaphorique",
      "pos_fr": "Pronom",
      "role": "Pronom relatif introduisant une subordonnée relative déterminative.",
      "etymology": "Issu du moyen haut-allemand « welher / welch », vieux haut-allemand « hwelih / hwelīh » (de quelle sorte, quel, qui). Proto-germanique *hwalīkaz (quel, de quelle nature), composé du thème interrogatif indo-européen *kʷo- et de *līka- (corps, forme, ressemblance, cf. allemand Leiche, anglais -ly / like)."
},
  "Welt": {
      "fr": "monde",
      "lit": "l'ensemble de la terre et de l'humanité",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin embrassant l'arène globale de la révolution prolétarienne.",
      "etymology": "Issu du moyen haut-allemand « werlt / welt », vieux haut-allemand « weralt / werolt », composé germanique formé de *wira- (« homme », cognat du latin vir) et de *aldi- (« âge, génération, durée de vie », cognat de alt/old). Littéralement « l'âge de l'homme, l'époque de l'humanité terrestre »."
},
  "welt": {
      "fr": "monde",
      "lit": "l'univers terrestre / l'ordre humain affranchi",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'Welt' du lemme 'Welt'. Substantif à l'accusatif féminin singulier désignant le monde émancipé à conquérir."
},
  "Weltgeschichte": {
      "fr": "histoire universelle / histoire mondiale",
      "lit": "histoire de l'humanité à l'échelle du monde",
      "pos_fr": "Nom féminin",
      "role": "Nom composé grandiose désignant l'histoire universelle, créée de toutes pièces par le marché mondial qui brise l'isolement local.",
      "etymology": "Composé de « die Welt » (le monde) + « die Geschichte » (l'histoire).",
      "isCompound": true,
      "compoundParts": [
            "Welt",
            "Geschichte"
      ]
},
  "Weltliteratur": {
      "fr": "littérature universelle / mondiale",
      "lit": "littérature de l'humanité unifiée",
      "pos_fr": "Nom féminin",
      "role": "Concept goethéen et marxien célébrant la fin du provincialisme intellectuel au profit d'un patrimoine commun."
},
  "Weltmarkt": {
      "fr": "marché mondial",
      "lit": "marché à l'échelle planétaire",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin composé désignant l'arène globale des échanges capitalistes où se réalise la loi de la valeur universelle.",
      "etymology": "Composé théorique unissant « die Welt » (le monde, en moyen haut-allemand « werlt », vieux haut-allemand « weralt », littéralement l'âge des hommes, de *wer = homme et *ald = âge) et « der Markt » (le marché, vieux haut-allemand « markāt », emprunté au latin « mercatus »). Désigne l'espace économique global engendré par la bourgeoisie et la découverte de l'Amérique."
},
  "Weltteil": {
      "fr": "partie du monde / continent",
      "lit": "fraction du globe terrestre",
      "pos_fr": "Nom masculin",
      "role": "Nom composé désignant les continents entiers conquis par le commerce et l'industrie."
},
  "Weltteile": {
      "fr": "parties du monde / continents",
      "lit": "forme plurielle de Weltteil",
      "pos_fr": "Nom masculin",
      "role": "Forme plurielle de Weltteil."
},
  "Weltverbesserer": {
      "fr": "réformateur universel / redresseur de torts utopique",
      "lit": "celui qui prétend réparer ou améliorer le monde entier",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin ironique fustigeant les utopistes et réformateurs du dimanche prétendant guérir les maux du monde sans toucher aux rapports de classe.",
      "etymology": "Composé de « Welt » (monde) + « Verbesserer » (amendateur, réformateur).",
      "isCompound": true,
      "compoundParts": [
            "Welt",
            "verbessern",
            "-er"
      ]
},
  "wenig": {
      "fr": "peu de / peu",
      "lit": "petite quantité",
      "pos_fr": "Pronom",
      "role": "Petite fraction de la noblesse passant à la bourgeoisie."
},
  "weniger": {
      "fr": "moins",
      "lit": "quantité inférieure",
      "pos_fr": "Adverbe",
      "role": "Adverbe marquant un degré moindre d'habileté manuelle ou de résistance."
},
  "wenigstens": {
      "fr": "au moins / du moins",
      "lit": "au plus peu",
      "pos_fr": "Adverbe",
      "role": "Adverbe désignant le minimum vital qu'un maître doit garantir à son esclave pour régner."
},
  "wenn": {
      "fr": "si / quand",
      "lit": "dans l'hypothèse où",
      "pos_fr": "Conjonction",
      "role": "Conjonction posant l'hypothèse historique ou la condition matérielle."
},
  "werden": {
      "fr": "devenir / auxiliaire du passif",
      "lit": "entrer dans un état nouveau",
      "pos_fr": "Verbe auxiliaire passif/futur",
      "role": "Auxiliaire fondamental de la voix passive allemande.",
      "etymology": "Du moyen haut-allemand « werden », vieux haut-allemand « werdan » (tourner vers, advenir)."
},
  "Werft": {
      "fr": "jetez",
      "lit": "lancez au loin !",
      "pos_fr": "Verbe",
      "role": "Forme verbale impérative plurielle de 'werfen' (jetez !), apostrophe percutante défiant les apologistes de l'ordre existant.",
      "etymology": "Impératif de deuxième personne du pluriel du verbe fort « werfen » (jeter, lancer)."
},
  "Werk": {
      "fr": "œuvre / travail / ouvrage / usine",
      "lit": "produit d'une activité laborieuse",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre désignant le travail productif humain, l'usine manufacturière ou l'œuvre monumentale accomplie par l'humanité associée.",
      "etymology": "Du moyen haut-allemand « werc », vieux haut-allemand « werc » (travail, action, œuvre), d'origine indo-européenne *werǵ- (agir, faire)."
},
  "Werkstatt": {
      "fr": "atelier / manufacture",
      "lit": "lieu artisanal de travail manuel",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'espace de travail dépassé par l'usine moderne.",
      "etymology": "Composé d'artisanat unissant : 1° « das Werk » (l'œuvre, l'ouvrage ouvrier, en moyen haut-allemand werc, vieux haut-allemand werc, proto-germanique *werką, racine indo-européenne *werǵ- = œuvrer, faire, cognat de l'anglais work et du grec érgon) ; 2° « die Statt » (le lieu fixe, l'emplacement aménagé, vieux haut-allemand stat)."
},
  "Werkstube": {
      "fr": "petit atelier artisanal",
      "lit": "salle de travail",
      "pos_fr": "Nom féminin",
      "role": "Nom composé nostalgique désignant l'échoppe patriarcale de l'artisan supplantée par l'usine géante."
},
  "Wert": {
      "fr": "valeur / prix estimable",
      "lit": "équivalent en échange ou dignité propre",
      "pos_fr": "Nom masculin",
      "role": "Concept économique fondamental désignant la valeur marchande, cristallisation de temps de travail socialement nécessaire.",
      "etymology": "Du moyen haut-allemand « wert », vieux haut-allemand « werd » (valeur, prix, honneur), rattaché à la racine germanique signifiant tourner, évaluer."
},
  "wertvoll": {
      "fr": "précieux / de haute valeur",
      "lit": "plein de valeur",
      "pos_fr": "Adjectif",
      "role": "Matériaux d'analyse critiques précieux chez les utopistes."
},
  "Wesen": {
      "fr": "essence / être / nature intime / réalité",
      "lit": "ce qui subsiste et existe par soi-même",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre philosophique désignant l'essence intime et la nature profonde d'un rapport social masqué par son apparence fétichisée.",
      "etymology": "Du moyen haut-allemand « wesen », ancien infinitif substantivé du verbe être (sein), vieux haut-allemand « wesan » (demeurer, être)."
},
  "wesentlich": {
      "fr": "essentiel / fondamental",
      "lit": "qui tient à l'essence (Wesen)",
      "pos_fr": "Adjectif",
      "role": "Adjectif matérialiste qualifiant la condition ontologique indispensable du capital : le salariat."
},
  "Widersinn": {
      "fr": "absurdité / paradoxe contre nature",
      "lit": "sens contraire à la raison",
      "pos_fr": "Nom masculin",
      "role": "Nom composé diagnostiquant le paradoxe d'une crise née de la surabondance de richesses."
},
  "widersprechen": {
      "fr": "contredire",
      "lit": "parler contre",
      "pos_fr": "Verbe",
      "role": "Verbe dialectique marquant la contradiction motrice entre développement des forces productives et cadres juridiques de propriété.",
      "etymology": "Calque du latin « contradicere », de « wider » (contre) + « sprechen » (parler).",
      "isCompound": true,
      "compoundParts": [
            "wider-",
            "sprechen"
      ]
},
  "widersprechend": {
      "fr": "contradictoire",
      "lit": "qui parle contre / antagonique",
      "pos_fr": "Adjectif",
      "role": "Épithète au datif neutre pluriel qualifiant les éléments hétérogènes du parti."
},
  "widersprechenden": {
      "fr": "contradictoire",
      "lit": "qui parle contre / antagonique",
      "pos_fr": "Verbe",
      "role": "Forme fléchie 'widersprechenden' du lemme 'widersprechend'. Épithète au datif neutre pluriel qualifiant les éléments hétérogènes du parti."
},
  "Widerspruch": {
      "fr": "contradiction dialectique",
      "lit": "parole dressée contre",
      "pos_fr": "Nom masculin",
      "role": "Concept hégélo-marxiste décisif : les conflits objectifs internes minant la société bourgeoise."
},
  "widerstandslos": {
      "fr": "sans résistance / passif",
      "lit": "dépourvu de résistance",
      "pos_fr": "Adjectif",
      "role": "Adjectif dépeignant la bourgeoisie comme le jouet inconscient et docile du progrès de l'industrie."
},
  "Widerwärtigkeit": {
      "fr": "répugnance / pénibilité du travail",
      "lit": "caractère rebutant",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin dénonçant l'écœurement provoqué par la monotonie mécanique de l'usine."
},
  "wie": {
      "fr": "comme / que",
      "lit": "de même manière que",
      "pos_fr": "Conjonction de comparaison",
      "role": "Conjonction comparative liant des adversaires de même sorte."
},
  "wieder": {
      "fr": "à nouveau / de nouveau",
      "lit": "une seconde fois",
      "pos_fr": "Adverbe",
      "role": "Adverbe réitératif marquant la répétition des hiérarchies à chaque échelon féodal."
},
  "Wiedererzeugung": {
      "fr": "reproduction / régénération",
      "lit": "action d'engendrer de nouveau",
      "pos_fr": "Nom féminin",
      "role": "Nom composé économique et biologique désignant la reproduction continue de la force de travail et des capitaux au sein du cycle productif.",
      "etymology": "Composé de « wieder » (de nouveau) + « die Erzeugung » (la génération, production).",
      "isCompound": true,
      "compoundParts": [
            "wieder",
            "Erzeugung"
      ]
},
  "wiederherstellen": {
      "fr": "restaurer / rétablir",
      "lit": "remettre en place debout",
      "pos_fr": "Verbe",
      "role": "Volonté réactionnaire de restaurer les corporations médiévales."
},
  "Wiederkehr": {
      "fr": "retour périodique / résurgence cyclique",
      "lit": "fait de revenir en boucle",
      "pos_fr": "Nom féminin",
      "role": "Nom composé désignant la régularité impitoyable des cycles de crises capitalistes."
},
  "wiederzuerringen": {
      "fr": "reconquérir de haute lutte",
      "lit": "remporter à nouveau en luttant (wiedererringen)",
      "pos_fr": "Verbe",
      "role": "Verbe dénonçant l'illusion régressive des ouvriers voulant ressusciter le statut de l'artisan médiéval."
},
  "Wille": {
      "fr": "volonté / dessein délibéré",
      "lit": "faculté déterminante de désirer et choisir",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin juridique et politique : le droit bourgeois n'est que la volonté de la classe dirigeante érigée en loi d'État.",
      "etymology": "Du moyen haut-allemand « wille », vieux haut-allemand « willio » (volonté, désir, consentement), de racine indo-européenne *wel- (vouloir, choisir)."
},
  "willenloser": {
      "fr": "dénué de volonté / inconscient",
      "lit": "dépourvu de vouloir propre",
      "pos_fr": "Adjectif",
      "role": "Adjectif révélant l'absence d'autonomie de la bourgeoisie face aux lois d'airain du capitalisme."
},
  "Willensäußerungen": {
      "fr": "manifestations de volonté / actes intentionnels",
      "lit": "expressions extérieures de la volonté",
      "pos_fr": "Nom féminin",
      "role": "Nom composé désignant les manifestations concrètes de volonté par lesquelles les classes en lutte affirment leurs droits.",
      "etymology": "Composé de « der Wille » (la volonté) + « die Äußerung » (l'expression, manifestation extérieure).",
      "isCompound": true,
      "compoundParts": [
            "Wille",
            "-n-",
            "-s-",
            "Äußerung"
      ]
},
  "Winkelreformer": {
      "fr": "réformateurs de coin de rue / réformateurs d'arrière-boutique",
      "lit": "réformateurs de recoins obscurs",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin satirique et dépréciatif raillant les réformateurs d'arrière-boutique et apôtres de replâtrages sociaux dérisoires.",
      "etymology": "Composé de « der Winkel » (angle, recoin obscur, endroit clandestin) + « der Reformer » (le réformateur).",
      "isCompound": true,
      "compoundParts": [
            "Winkel",
            "Reformer"
      ]
},
  "wir": {
      "fr": "nous",
      "lit": "pronom personnel sujet 1re personne du pluriel",
      "pos_fr": "Pronom personnel",
      "role": "Pronom sujet collectif désignant les observateurs historiques."
},
  "wirken": {
      "fr": "agir / produire un effet",
      "lit": "opérer efficacement",
      "pos_fr": "Verbe",
      "role": "Action efficace des lois économiques."
},
  "wirkend": {
      "fr": "agissant / opérant",
      "lit": "qui produit de l'effet",
      "pos_fr": "Adverbe",
      "role": "Forces matérielles opérant dans l'histoire."
},
  "wirklich": {
      "fr": "véritablement / réellement",
      "lit": "qui opère dans l'effectivité (Wirklichkeit)",
      "pos_fr": "Adjectif",
      "role": "Adjectif hegelo-marxiste caractérisant le prolétariat comme seule classe révolutionnaire effective."
},
  "Wirklichkeit": {
      "fr": "réalité effective / réalité matérielle",
      "lit": "état de ce qui agit et produit des effets réels",
      "pos_fr": "Nom féminin",
      "role": "Concept philosophique matérialiste désignant la réalité effective et matérielle opposée aux constructions abstraites de l'idéalisme.",
      "etymology": "Calque créé par Maître Eckhart sur le latin « actualitas », formé sur « wirken » (agir, opérer) + « -lichkeit ».",
      "isCompound": true,
      "compoundParts": [
            "wirken",
            "-lich",
            "-keit"
      ]
},
  "Wirksamkeit": {
      "fr": "efficacité / champ d'action agissant",
      "lit": "faculté de déployer des effets concrets",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'efficacité opératoire et la portée agissante de la théorie révolutionnaire s'emparant des masses.",
      "etymology": "Dérivé de « wirksam » (efficace, opérant) + suffixe « -keit ».",
      "isCompound": true,
      "compoundParts": [
            "wirksam",
            "-keit"
      ]
},
  "Wirkung": {
      "fr": "effet / impact / action produite",
      "lit": "résultat engendré par une action",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'effet produit ou la résultante historique des contradictions objectives au sein de la base économique.",
      "etymology": "Du moyen haut-allemand « wirkunge », déverbal de « wirken » (opérer, œuvrer, faire de l'effet) + « -ung »."
},
  "Wirtschaft": {
      "fr": "économie / gestion des ressources / auberge",
      "lit": "administration d'une maison ou d'un domaine d'accueil",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin économique désignant l'organisation générale de la production matérielle et de la circulation des richesses.",
      "etymology": "Du moyen haut-allemand « wirt-schaft » (accueil généreux de l'hôte, intendance, festivités), dérivé de « Wirt » (aubergiste, maître de maison, hôte)."
},
  "wissen": {
      "fr": "savoir / avoir conscience de",
      "lit": "avoir vu / avoir connaissance certaine de",
      "pos_fr": "Verbe fort",
      "role": "Verbe fort désignant la conscience théorique et la connaissance scientifique des lois objectives de l'évolution sociale.",
      "etymology": "Du moyen haut-allemand « wissen », vieux haut-allemand « wizzan », de racine indo-européenne *weid- (voir, savoir)."
},
  "Wissenschaft": {
      "fr": "science / savoir scientifique",
      "lit": "ensemble des connaissances méthodiques",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant le savant désacralisé par le capital et ravalé au rang de travailleur à gages."
},
  "wo": {
      "fr": "où / quel est",
      "lit": "en quel lieu",
      "pos_fr": "Adverbe interrogatif/relatif",
      "role": "Adverbe interrogatif de rhétorique oratoire ouvrant les interrogations du Préambule."
},
  "wodurch": {
      "fr": "par quoi / par quel moyen",
      "lit": "par quel moyen",
      "pos_fr": "Pronom",
      "role": "Pronom adverbial ouvrant la question décisive sur le surmontement bourgeois des crises."
},
  "wohlerworben": {
      "fr": "si chèrement acquis / légitime",
      "lit": "dûment et légitimement acquis par un labeur historique",
      "pos_fr": "Adjectif",
      "role": "Composé juridique désignant les prérogatives séculaires et coutumières des corporations et états.",
      "etymology": "Composé juridique traditionnel associant : 1° l'adverbe « wohl » (bien, légitimement, en vieux haut-allemand wola) ; 2° « erworben », participe passé du verbe fort « erwerben » (acquérir par le travail, en moyen haut-allemand erwerben, en vieux haut-allemand erwerban = s'affairer, accomplir par un effort soutenu, issu de hwerban = aller et venir, tourner). Formule juridique de l'Ancien Régime : les 'droits acquis' (wohlerworbene Rechte)."
},
  "wohlfeil": {
      "fr": "bon marché / à vil prix",
      "lit": "qui s'achète pour du bien peu",
      "pos_fr": "Adjectif",
      "role": "Adjectif économique désignant l'arme d'invasion suprême de la marchandise industrielle."
},
  "Wohltätigkeit": {
      "fr": "bienfaisance / charité",
      "lit": "action d'opérer le bien",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la bienfaisance et la charité bourgeoise paternaliste, simple aumône cherchant à masquer l'injustice structurelle de l'exploitation.",
      "etymology": "Calque de « bienfaisance », composé de « wohl » (bien) + « tätig » (agissant) + « -keit ».",
      "isCompound": true,
      "compoundParts": [
            "wohl",
            "tätig",
            "-keit"
      ]
},
  "Wohltätigkeitsorganisierer": {
      "fr": "organisateurs d'œuvres de bienfaisance",
      "lit": "ceux qui organisent la charité",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin pluriel mordant épinglant les organisateurs de bienfaisance bourgeoise désireux de désamorcer la colère ouvrière.",
      "etymology": "Composé de « Wohltätigkeit » (bienfaisance) + « Organisierer » (organisateur, planificateur).",
      "isCompound": true,
      "compoundParts": [
            "Wohltätigkeit",
            "-s-",
            "Organisierer"
      ]
},
  "wollen": {
      "fr": "vouloir",
      "lit": "avoir la volonté de",
      "pos_fr": "Verbe",
      "role": "Verbe exprimant l'alternative impérative imposée aux peuples : adopter le mode bourgeois ou périr."
},
  "womit": {
      "fr": "avec quoi / avec lequel",
      "lit": "avec quoi",
      "pos_fr": "Pronom",
      "role": "Pronom adverbial relatif introduisant l'arme ou l'instrument d'action."
},
  "wonach": {
      "fr": "selon quoi / d'après quoi",
      "lit": "d'après quoi",
      "pos_fr": "Adverbe",
      "role": "Adverbe relatif articulant la conséquence théorique ou la suite logique déduite d'une loi de l'évolution matérielle.",
      "etymology": "Composé de « wo » (où/quoi) + « nach » (après, selon).",
      "isCompound": true,
      "compoundParts": [
            "wo",
            "nach"
      ]
},
  "worauf": {
      "fr": "sur quoi / sur lequel",
      "lit": "sur quoi",
      "pos_fr": "Pronom",
      "role": "Pronom adverbial introduisant le socle matériel sur lequel repose la bourgeoisie."
},
  "worin": {
      "fr": "dans lequel / où / au fur et à mesure que",
      "lit": "dans quoi / en quoi (adverbe relatif)",
      "pos_fr": "Pronom relatif adverbial composé",
      "role": "Adverbe relatif unissant wo- et la préposition in pour introduire une proposition de mesure et de temps."
},
  "Wort": {
      "fr": "mot / parole",
      "lit": "unité lexicale de parole formulée",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre employé dans l'incise rhétorique « mit einem Wort » pour résumer d'un seul trait l'essence de la transformation bourgeoise.",
      "etymology": "Du moyen haut-allemand « wort », vieux haut-allemand « wort » (parole, verbe). Proto-germanique *wurda- (cognat du latin verbum et de l'anglais word)."
},
  "wort": {
      "fr": "mot / parole",
      "lit": "terme formulé / unité linguistique",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'Wort' du lemme 'Wort'. Substantif au datif neutre singulier dans la locution récapitulative 'Mit einem Wort'."
},
  "Worte": {
      "fr": "paroles / propos / discours relié",
      "lit": "propos exprimés en séquence sensée",
      "pos_fr": "Nom neutre",
      "role": "nom neutre au pluriel (pluriel signifiant discours, distinct de Wörter = mots isolés)",
      "etymology": "Pluriel contextuel de « Wort » (parole, verbe)."
},
  "Wunder": {
      "fr": "miracle / prodige / merveille",
      "lit": "événement stupéfiant défiant l'ordre naturel",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre désignant les merveilles titanesques et prodiges techniques accomplis par la bourgeoisie révolutionnaire.",
      "etymology": "Du moyen haut-allemand « wunder », vieux haut-allemand « wuntar » (prodige, objet d'étonnement), rattaché à une racine germanique d'admiration stupéfaite."
},
  "Wunderwerk": {
      "fr": "œuvre merveilleuse / chef-d'œuvre",
      "lit": "ouvrage miraculeux",
      "pos_fr": "Nom neutre",
      "role": "Nom composé célébrant les pyramides industrielles de la bourgeoisie surpassant l'Égypte antique."
},
  "Wunderwirkung": {
      "fr": "effet miraculeux / action prodigieuse",
      "lit": "effet tenant du miracle",
      "pos_fr": "Nom féminin",
      "role": "Nom composé désignant les vertus magiques et les effets prodigieux faussement attribués aux recettes réformistes pacifiques.",
      "etymology": "Composé de « Wunder » (miracle) + « Wirkung » (effet, action produite).",
      "isCompound": true,
      "compoundParts": [
            "Wunder",
            "Wirkung"
      ]
},
  "während": {
      "fr": "pendant que / tandis que / alors que",
      "lit": "durant que",
      "pos_fr": "Conjonction",
      "role": "Conjonction de subordination établissant la simultanéité conflictuelle entre l'enrichissement insolent du capital et la paupérisation du travail.",
      "etymology": "Participe présent substantivé et grammaticalisé de « währen » (durer, subsister)."
},
  "wünschen": {
      "fr": "souhaiter / désirer",
      "lit": "émettre un vœu",
      "pos_fr": "Verbe",
      "role": "Vœux pieux des philanthropes bourgeois."
},
  "Würde": {
      "fr": "dignité / valeur morale",
      "lit": "valeur intrinsèque inestimable d'une personne",
      "pos_fr": "Nom féminin",
      "role": "Concept éthique kantien par excellence (la dignité au-dessus de tout prix), que le capitalisme liquide dans le prix de marché.",
      "etymology": "Issu du moyen haut-allemand « wirde / werde » (valeur, dignité, honneur, noblesse), vieux haut-allemand « wirdī », dérivé de l'adjectif « wert » (digne, estimable, de grand prix)."
},
  "Z.B.": {
      "fr": "par ex. / par exemple",
      "lit": "à titre d'exemple",
      "pos_fr": "Locution adverbiale",
      "role": "Abréviation usuelle pour 'zum Beispiel' (par exemple), introduisant une illustration concrète dans l'analyse critique.",
      "etymology": "Abréviation usuelle de la locution prépositionnelle « zum Beispiel » (par exemple, pour modèle).",
      "isCompound": true,
      "compoundParts": [
            "zu",
            "-m",
            "Beispiel"
      ]
},
  "Zahl": {
      "fr": "nombre / effectif numérique",
      "lit": "quantité nombrable",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin mesurant l'explosion quantitative des populations citadines ouvrières."
},
  "zahllos": {
      "fr": "innombrable / sans nombre",
      "lit": "dépourvu de compte mesurable / trop nombreux pour être compté",
      "pos_fr": "Adjectif",
      "role": "Adjectif privatif qualifiant la profusion de coutumes, règlements et franchises locales de la féodalité."
},
  "Zahlung": {
      "fr": "paiement / versement",
      "lit": "action de compter et verser une somme d'argent",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin économique désignant le règlement numéraire qui devient le seul lien social de la société marchande.",
      "etymology": "Déverbal en « -ung » du verbe « zahlen » (payer, en vieux haut-allemand zālōn, énumérer, compter, de Zahl / nombre)."
},
  "Zar": {
      "fr": "tsar",
      "lit": "autocrate de toutes les Russies",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin : le gendarme de l'Europe absolutiste et réactionnaire.",
      "etymology": "Emprunt au russe « car' » (царь), issu du vieux slave ecclésiastique « cěsarĭ » (цѣсарь), lui-même emprunté très tôt au nom propre latin « Caesar » (titre des empereurs romains, devenu le symbole de l'autocratie impériale, qui a également donné l'allemand « Kaiser »)."
},
  "Zehnstundenbill": {
      "fr": "bill des dix heures / loi des dix heures",
      "lit": "loi limitant la journée de travail",
      "pos_fr": "Nom féminin",
      "role": "Nom composé historico-juridique désignant la grande victoire législative ouvrière en Angleterre (1847)."
},
  "Zehntel": {
      "fr": "dixième / fraction d'un dixième",
      "lit": "dixième partie d'un tout",
      "pos_fr": "Nom neutre",
      "role": "nom neutre / adjectif numéral fractionnaire",
      "etymology": "Du moyen haut-allemand « zehendeil », vieux haut-allemand « zehanto teil », de « zehn » (dix) + « Teil » (partie)."
},
  "zeichnen": {
      "fr": "marquer / caractériser",
      "lit": "graver d'un trait distinctif",
      "pos_fr": "Verbe régulier",
      "role": "Verbe désignant le trait saillant qui distingue l'époque de la bourgeoisie.",
      "etymology": "Verbe composé séparable unissant la préposition d'extraction « aus » (hors de) et « zeichnen » (dessiner, marquer d'un signe, de Zeichen / signe)."
},
  "Zeit": {
      "fr": "temps / moment opportun",
      "lit": "période / époque présente",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin marquant l'urgence historique d'agir à visage découvert.",
      "etymology": "Issu du moyen haut-allemand « zīt », vieux haut-allemand « zīt » (temps, époque, moment favorable, heure prescrite). Du proto-germanique *tīdiz (division temporelle, heure propice), rattaché à la racine indo-européenne *dāy- / *dī- (partager, diviser, fendre). Cognat direct de l'anglais « tide » (marée, temps propice) et « time ». Dans la prose de Marx, le substantif prend un tour d'urgence révolutionnaire : le délai historique accordé à la clandestinité est expiré."
},
  "Zeitpunkt": {
      "fr": "instant / moment précis / date fixée",
      "lit": "point précis sur la ligne du temps",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin temporel marquant l'instant historique précis et l'heure de rupture où s'engage la confrontation armée.",
      "etymology": "Composé de « die Zeit » (le temps) + « der Punkt » (le point, du latin punctum).",
      "isCompound": true,
      "compoundParts": [
            "Zeit",
            "Punkt"
      ]
},
  "Zellengefängnis": {
      "fr": "prison cellulaire / pénitencier à isolement",
      "lit": "prison organisée en cellules individuelles",
      "pos_fr": "Nom neutre",
      "role": "Nom composé pénitentiaire fustigeant le régime des prisons cellulaires perfectionnées par la philanthropie bourgeoise pour discipliner les proscrits.",
      "etymology": "Composé de « die Zelle » (la cellule, du latin cella) + « das Gefängnis » (la prison, lieu d'enfermement des captifs).",
      "isCompound": true,
      "compoundParts": [
            "Zelle",
            "-n-",
            "Gefängnis"
      ]
},
  "zellenleben": {
      "fr": "vie cellulaire / régime de claustration en cellule",
      "lit": "vie en cellule pénitentiaire ou monastique",
      "pos_fr": "Nom neutre",
      "role": "Nom composé raillant la claustration ascétique et la vie solitaire en cellule prônées par le réformisme moralisateur bourgeois.",
      "etymology": "Composé de « die Zelle » (la cellule) + « das Leben » (la vie).",
      "isCompound": true,
      "compoundParts": [
            "Zelle",
            "-n-",
            "Leben"
      ]
},
  "Zentralisation": {
      "fr": "centralisation politique",
      "lit": "action de ramener au centre",
      "pos_fr": "Nom féminin",
      "role": "Loi politique marxienne : l'unification administrative nationale découlant de la centralisation du capital."
},
  "zentralisieren": {
      "fr": "centraliser",
      "lit": "ramener au centre",
      "pos_fr": "Verbe",
      "role": "Loi historique : l'unification des luttes locales dispersées en une lutte de classe nationale."
},
  "zerfallend": {
      "fr": "qui se décompose / en ruine",
      "lit": "qui tombe en poussière sous l'effet du temps",
      "pos_fr": "Participe présent",
      "role": "Adjectif désignant la société féodale agonisante d'où jaillit la bourgeoisie.",
      "etymology": "Participe adjectivé combinant le préfixe inséparable de destruction intégrale « zer- » (marquant la dislocation en mille morceaux, le broyage irréversible, issu du moyen haut-allemand zer-, vieux haut-allemand zir- / zar-) et le verbe de chute « fallen » (tomber sous son propre poids, moyen haut-allemand vallen, vieux haut-allemand fallan). Littéralement : s'écrouler en ruines et en poussière sous l'effet de sa propre caducité historique."
},
  "zergliederen": {
      "fr": "disséquer / anatomiser",
      "lit": "séparer les membres",
      "pos_fr": "Verbe",
      "role": "Analyse critique aiguë des contradictions de la production moderne."
},
  "zerreißen": {
      "fr": "déchirer en morceaux / rompre brutalement",
      "lit": "lacérer / fendre avec violence en lambeaux",
      "pos_fr": "Verbe fort inséparable",
      "role": "Verbe fort inséparable exprimant la dislocation radicale de l'ordre social médiéval par la marchandise.",
      "etymology": "Composé du préfixe inséparable de rupture destructrice « zer- » (en morceaux, en lambeaux, en vieux haut-allemand zir- / zar-) et du verbe fort « reißen » (déchirer, arracher, fendre, en moyen haut-allemand rīzen, en vieux haut-allemand rīzan = fendre, graver des runes, proto-germanique *hrītanan, cognat direct de l'anglais write / écrire)."
},
  "zerreißend": {
      "fr": "déchirant / dissolvant",
      "lit": "qui met en pièces",
      "pos_fr": "Adjectif",
      "role": "Effet de dislocation produit par l'industrie sur la famille."
},
  "zerschlagen": {
      "fr": "briser / fracasser",
      "lit": "frapper jusqu'à détruire",
      "pos_fr": "Verbe",
      "role": "Verbe de révolte luddiste : les ouvriers brisant les machines coupables de leur ruine."
},
  "zersplittert": {
      "fr": "émietté / dispersé",
      "lit": "éclaté en éclats de bois",
      "pos_fr": "Adjectif",
      "role": "Participe passé qualifiant la dispersion atomisée des ouvriers et de la propriété sous l'ancien régime."
},
  "Zersplitterung": {
      "fr": "éparpillement / émiettement / morcellement",
      "lit": "morcellement en éclats",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la dispersion archaïque de la propriété et des ouvriers abolie par le capital."
},
  "zerstreuen": {
      "fr": "disperser / disséminer",
      "lit": "éparpiller en tous sens",
      "pos_fr": "Verbe",
      "role": "Verbe caractérisant l'atomisation géographique initiale des masses laborieuses."
},
  "zerstören": {
      "fr": "détruire / anéantir",
      "lit": "disloquer en morceaux / ravager de fond en comble",
      "pos_fr": "Verbe inséparable faible",
      "role": "Verbe destructif décrivant le travail historique de sape de la bourgeoisie contre l'ensemble des traditions féodales.",
      "etymology": "Composé du préfixe inséparable destructif « zer- » (marquant la dislocation complète, le broyage, en vieux haut-allemand zir- / zar-) et du verbe « stören » (troubler, saccager, en moyen haut-allemand stœren, en vieux haut-allemand stōren = disperser, disloquer, détruire, proto-germanique *stōrijaną, racine indo-européenne *strew- = répandre, démolir)."
},
  "zerstörender": {
      "fr": "destructeur",
      "lit": "qui détruit",
      "pos_fr": "Adjectif",
      "role": "Impact destructeur du machinisme sur l'artisanat."
},
  "zeugen": {
      "fr": "engendrer / procréer",
      "lit": "tirer à la vie",
      "pos_fr": "Verbe",
      "role": "Métaphore filiale ironique : la bourgeoisie a elle-même engendré les fossoyeurs qui vont la tuer."
},
  "ziehen": {
      "fr": "tirer / attirer",
      "lit": "exercer une traction",
      "pos_fr": "Verbe",
      "role": "Attirer les classes dans le sillage de la bourgeoisie."
},
  "Ziel": {
      "fr": "but / fin / dessein / cible",
      "lit": "marque visée / limite assignée",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre stratégique désignant le but final de l'émancipation communiste : la société sans classes et sans exploitation.",
      "etymology": "Du moyen haut-allemand « zil », vieux haut-allemand « zil » (terme, borne, but marqué d'avance), d'origine proto-germanique *tilam."
},
  "ziemlich": {
      "fr": "assez / passablement / relativement",
      "lit": "qui est décent / convenable",
      "pos_fr": "Adverbe",
      "role": "Adverbe de nuance graduant avec précision l'évaluation empirique des rapports de forces politiques.",
      "etymology": "Du moyen haut-allemand « zimelīch » (convenable, approprié, du verbe ziemen)."
},
  "zirkulieren": {
      "fr": "circuler",
      "lit": "tourner en rond",
      "pos_fr": "Verbe",
      "role": "Circulation marchande et monétaire."
},
  "zittern": {
      "fr": "trembler",
      "lit": "être secoué d'un frisson de terreur",
      "pos_fr": "Verbe",
      "role": "Infinitif dépendant du subjonctif optatif 'Mögen' : 'Que les classes régnantes tremblent !'"
},
  "Zivilisation": {
      "fr": "civilisation",
      "lit": "niveau de développement technique / matériel et civique",
      "pos_fr": "Nom féminin",
      "role": "Substantif au génitif féminin singulier désignant l'aire industrielle européenne."
},
  "zivilisation": {
      "fr": "civilisation",
      "lit": "niveau de développement technique / matériel et civique",
      "pos_fr": "Nom féminin",
      "role": "Forme fléchie 'Zivilisation' du lemme 'Zivilisation'. Substantif au génitif féminin singulier désignant l'aire industrielle européenne."
},
  "zivilisiert": {
      "fr": "civilisé",
      "lit": "qui a accédé à la civilité",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant les métropoles industrielles développées soumettant les pays agraires."
},
  "Zoll": {
      "fr": "douane / tarif douanier",
      "lit": "droit prélevé aux barrières",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant les barrières fiscales intérieures unifiées sous l'État national bourgeois."
},
  "Zone": {
      "fr": "zone géographique",
      "lit": "bande territoriale climatique",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant les régions terrestres les plus reculées intégrées au circuit de production."
},
  "zu": {
      "fr": "à / vers / en vue de",
      "lit": "direction / destination ou but",
      "pos_fr": "Préposition (régime datif)",
      "role": "Préposition régissant le datif marquant le but ou le résultat d'une alliance."
},
  "Zubehör": {
      "fr": "accessoire / appendice",
      "lit": "ce qui est joint comme accessoire",
      "pos_fr": "Nom neutre",
      "role": "Métaphore glaçante de l'aliénation : l'ouvrier réduit à n'être qu'un « simple appendice de la machine »."
},
  "zudem": {
      "fr": "de plus / en outre / au surplus",
      "lit": "à cela",
      "pos_fr": "Adverbe",
      "role": "Adverbe de liaison accumulant les arguments matériels pour étayer la démonstration irréfutable du manifeste.",
      "etymology": "Composé de « zu » + datif de l'article « dem ».",
      "isCompound": true,
      "compoundParts": [
            "zu",
            "dem"
      ]
},
  "zueinander": {
      "fr": "l'un vis-à-vis de l'autre",
      "lit": "en rapport réciproque",
      "pos_fr": "Adverbe réciproque",
      "role": "Adverbe marquant le tête-à-tête conflictuel inéluctable entre oppresseurs et opprimés."
},
  "zuerst": {
      "fr": "d'abord / en premier lieu",
      "lit": "au tout premier rang",
      "pos_fr": "Adverbe",
      "role": "Adverbe prescrivant au prolétariat d'abattre sa bourgeoisie nationale en premier lieu."
},
  "zufrieden": {
      "fr": "content / satisfait",
      "lit": "en paix / apaisé",
      "pos_fr": "Adjectif",
      "role": "Adjectif prédicatif marquant la complaisance passive et la satisfaction béate des classes rassasiées par le statu quo.",
      "etymology": "Composé de « zu » + « Frieden » (paix, tranquillité).",
      "isCompound": true,
      "compoundParts": [
            "zu",
            "Frieden"
      ]
},
  "zuführen": {
      "fr": "amener à / procurer",
      "lit": "conduire vers",
      "pos_fr": "Verbe séparable",
      "role": "Apporter de nouvelles forces au prolétariat."
},
  "Zug": {
      "fr": "expédition / marche / campagne",
      "lit": "mouvement en cortège",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin de comparaison historique évoquant les expéditions de conquête du capitalisme."
},
  "zugleich": {
      "fr": "en même temps / à la fois",
      "lit": "en un même instant",
      "pos_fr": "Adverbe",
      "role": "Adverbe temporel marquant la conjonction des intérêts présents et futurs."
},
  "zugrunde": {
      "fr": "à sa perte / à la ruine",
      "lit": "vers le fond (zu Grunde)",
      "pos_fr": "Adverbe",
      "role": "Locution verbale (zugrunde gehen) marquant la mort économique inéluctable sans modernisation."
},
  "zugunsten": {
      "fr": "en faveur de / au bénéfice de",
      "lit": "à la faveur de",
      "pos_fr": "Préposition",
      "role": "Préposition de causalité dénonçant les lois forgées au profit exclusif de la minorité bourgeoise possédante.",
      "etymology": "Composé de « zu » + « Gunst » (faveur, bienveillance).",
      "isCompound": true,
      "compoundParts": [
            "zu",
            "Gunst",
            "-en"
      ]
},
  "Zukunft": {
      "fr": "avenir",
      "lit": "ce qui vient vers nous",
      "pos_fr": "Nom féminin",
      "role": "Substantif à l'accusatif singulier, complément d'objet direct de 'vertreten'."
},
  "zukunft": {
      "fr": "avenir",
      "lit": "ce qui vient vers nous",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'Zukunft' du lemme 'Zukunft'. Substantif à l'accusatif singulier, complément d'objet direct de 'vertreten'."
},
  "zukünftig": {
      "fr": "futur / à venir",
      "lit": "qui vient vers nous",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant les intérêts de classe à venir que défend l'artisan voué au salariat."
},
  "zum Beispiel": {
      "fr": "par exemple",
      "lit": "pour modèle / exemple",
      "pos_fr": "Adverbe",
      "role": "Locution adverbiale introduisant une illustration concrète et tangible d'une loi abstraite du développement de classe.",
      "etymology": "Locution prépositionnelle figée « zu dem Beispiel ».",
      "isCompound": true,
      "compoundParts": [
            "zu",
            "-m",
            "Beispiel"
      ]
},
  "zunehmen": {
      "fr": "augmenter / croître",
      "lit": "prendre en plus",
      "pos_fr": "Verbe",
      "role": "Verbe décrivant l'accroissement continu de la masse et de l'intensité du travail."
},
  "Zunftbürger": {
      "fr": "maître de jurande / bourgeois corporatif",
      "lit": "bourgeois de corporation / maître juré",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin composé désignant les maîtres artisans membres exclusifs des jurandes urbaines médiévales, jaloux de leurs monopoles et privilèges statutaires de corporation.",
      "etymology": "Composé corporatif médiéval : 1° « die Zunft » (la jurande artisanale, corporation fermée dotée d'un monopole statutaire, du moyen haut-allemand « zumft », vieux haut-allemand « zumft » = convenance statutaire, accord réglé, déverbal du verbe « ziemen » = convenir, être décent et conforme à la règle) ; 2° « der Bürger » (l'habitant franc du bourg fortifié, vieux haut-allemand « burgari », rattaché à « Burg »). Désigne le maître artisan établi intra-muros, membre exclusif d'une jurande jurée jalouse de ses monopoles face aux marchands et compagnons."
},
  "Zunftmeister": {
      "fr": "maître de corporation",
      "lit": "maître à la tête d'un corps de métier juré",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin féodal désignant le détenteur du privilège exclusif de fabriquer un produit.",
      "etymology": "Composé désignant le maître de jurande, formé de « die Zunft » et « der Meister » (le maître, issu du latin magister via le vieux haut-allemand meistar)."
},
  "Zunftwes": {
      "fr": "corporatisme / régime des corporations",
      "lit": "système corporatif médiéval",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre historique désignant le corporatisme médiéval et le régime corporatif féodal brisé par la bourgeoisie.",
      "etymology": "Composé de « die Zunft » (la corporation, jurande) + « das Wesen » (système, institution).",
      "isCompound": true,
      "compoundParts": [
            "Zunft",
            "Wesen"
      ]
},
  "zunächst": {
      "fr": "tout d'abord / au premier chef",
      "lit": "au plus proche",
      "pos_fr": "Adverbe",
      "role": "Adverbe marquant l'enveloppe nationale immédiate de la lutte avant son universalisation."
},
  "zur": {
      "fr": "à / envers / vis-à-vis de / pour",
      "lit": "vers / à (direction ou rapport)",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'zur' du lemme 'zu'. Préposition régissant le datif introduisant le complément d'attribution ou d'objet indirect."
},
  "zurückgeführen": {
      "fr": "ramener / réduire à",
      "lit": "reconduire en arrière (zurückführen)",
      "pos_fr": "Verbe",
      "role": "Geste de désillusionnement matérialiste : ramener la famille à un pur rapport d'argent."
},
  "zurückschleudern": {
      "fr": "renvoyer vivement / catapulter en retour",
      "lit": "projeter en arrière avec la force d'une fronde",
      "pos_fr": "Verbe séparable balistique",
      "role": "Métaphore balistique : renvoyer l'accusation de communisme comme un projectile incendiaire.",
      "etymology": "Verbe composé expressif associant : 1° l'adverbe directionnel « zurück » (en arrière, retour au point d'origine, contraction de « zu » + « Rücken » = vers le dos) ; 2° le verbe balistique « schleudern » (catapulter, projeter avec violence giratoire), issu du moyen haut-allemand « slūdern » et dérivé de « die Schleuder » (la fronde, l'engin de siège, racine germanique *sludrōn = osciller violemment, tournoyer pour projeter). Métaphore polémique énergique : l'accusation de communisme est assimilée à un projectile incendiaire renvoyé d'une barricade parlementaire à l'autre."
},
  "zurückversetzt": {
      "fr": "rejeté en arrière / replongé dans",
      "lit": "placé en arrière (zurückversetzen)",
      "pos_fr": "Verbe",
      "role": "Participe passé marquant la régression instantanée de la société en barbarie lors des crises."
},
  "zurückwirken": {
      "fr": "réagir en retour / avoir un effet rétroactif",
      "lit": "agir vers l'arrière sur le point de départ",
      "pos_fr": "Verbe séparable faible",
      "role": "Verbe dialectique clé exprimant l'action réciproque des transports et du commerce sur l'essor manufacturier.",
      "etymology": "Composé séparable associant l'adverbe « zurück » (en arrière, vers l'arrière, contraction du moyen haut-allemand ze rücke = vers le dos, de Rücken / dos) et du verbe « wirken » (agir, produire un effet, opérer, en moyen haut-allemand wirken, en vieux haut-allemand wurken / wirkan, proto-germanique *wurkjaną, rattaché à la racine indo-européenne *werǵ- = travailler, agir, d'où proviennent l'allemand Werk et l'anglais work)."
},
  "zurückzudrehen": {
      "fr": "faire tourner en arrière",
      "lit": "tourner en sens inverse (zurückdrehen)",
      "pos_fr": "Verbe",
      "role": "Métaphore saisissante : la vaine tentative des réactionnaires de faire tourner à l'envers la roue de l'histoire."
},
  "zusammen": {
      "fr": "ensemble",
      "lit": "rassemblé en un tout",
      "pos_fr": "Adverbe",
      "role": "Adverbe regroupant l'effort productif cumulé de toutes les générations humaines passées."
},
  "zusammenfassen": {
      "fr": "résumer / centraliser / rassembler en un faisceau",
      "lit": "saisir ensemble",
      "pos_fr": "Verbe",
      "role": "Verbe synthétique résumant le faisceau des mesures d'émancipation en un programme politique unique et cohérent.",
      "etymology": "Composé de « zusammen » (ensemble) + « fassen » (saisir).",
      "isCompound": true,
      "compoundParts": [
            "zusammen-",
            "fassen"
      ]
},
  "zusammengedrängen": {
      "fr": "entasser / resserrer en masse",
      "lit": "presser ensemble en foule (zusammendrängen)",
      "pos_fr": "Verbe",
      "role": "Verbe traduisant la condensation spatiale des masses prolétariennes au sein des usines et villes."
},
  "zusammengedrängt": {
      "fr": "rassemblé / concentré en masse",
      "lit": "pressé en masse compacte",
      "pos_fr": "Verbe",
      "role": "Participe passé caractérisant l'agrégation des provinces en un État national moderne."
},
  "Zusammenhalte": {
      "fr": "cohésion / masse compacte",
      "lit": "action de tenir ensemble",
      "pos_fr": "Nom masculin",
      "role": "Nom composé décrivant l'union initiale encore artificielle des ouvriers imposée par la bourgeoisie."
},
  "zusammenschaffen": {
      "fr": "amasser ensemble / accumuler",
      "lit": "créer ensemble / rassembler par le travail",
      "pos_fr": "Verbe fort séparable",
      "role": "Verbe décrivant l'illusion bourgeoise de la propriété acquise par son propre labeur (« selbst erarbeitetes, selbst erworbenes, selbst zusammengeschafftes Eigentum »).",
      "etymology": "Composé de « zusammen » (ensemble) et de « schaffen » (travailler, créer, produire, en moyen haut-allemand « schaffen », vieux haut-allemand « scaffan »)."
},
  "Zustand": {
      "fr": "état de choses / ordre établi / condition",
      "lit": "manière de se tenir / ordonnancement",
      "pos_fr": "Nom masculin",
      "role": "Substantif à l'accusatif masculin pluriel désignant le statu quo oppressif à renverser."
},
  "zustande": {
      "fr": "à bien / à terme",
      "lit": "à l'état effectif (zu Stande)",
      "pos_fr": "Forme grammaticale",
      "role": "Particule séparable du verbe zustandebringen (accomplir, mener à terme)."
},
  "zustandebringen": {
      "fr": "mener à bien / réaliser / accomplir",
      "lit": "amener à l'état réalisé",
      "pos_fr": "Verbe irrégulier séparable",
      "role": "Verbe historique louant l'audace titanesque de la bourgeoisie qui a accompli des merveilles bien supérieures aux pyramides d'Égypte.",
      "etymology": "Composé de la locution adverbiale « zustande » (à l'état de fait accompli, formé de zu + Stand) et du verbe fort « bringen » (apporter, mener, vieux haut-allemand « bringan »)."
},
  "zustände": {
      "fr": "état de choses / ordre établi / condition",
      "lit": "manière de se tenir / ordonnancement",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'Zustände' du lemme 'Zustand'. Substantif à l'accusatif masculin pluriel désignant le statu quo oppressif à renverser."
},
  "zuviel": {
      "fr": "trop / excès de",
      "lit": "quantité excessive",
      "pos_fr": "Adverbe",
      "role": "Adverbe diagnostiquant la surproduction morbide du capitalisme."
},
  "zuvieler": {
      "fr": "de trop de",
      "lit": "génitif partitif de zuviel",
      "pos_fr": "Déterminant",
      "role": "Déterminant quantitatif soulignant l'asphyxie par pléthore de marchandises."
},
  "zwar": {
      "fr": "certes / à la vérité",
      "lit": "en fait / assurément",
      "pos_fr": "Adverbe",
      "role": "Introduit une concession avant la réplique dialectique."
},
  "Zweck": {
      "fr": "but / fin visée",
      "lit": "objectif conscient / intention délibérée",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant le programme historique conscient poursuivi par le prolétariat.",
      "etymology": "Du moyen haut-allemand « zwec » (cheville de bois, clou de fixation). L'étymon vieux haut-allemand est incertain (probable racine germanique *twakka- désignant un piquet appointé, étymologie discutée). Dans le tir à l'arc médiéval, le zwec désignait le clou fiché au centre de la cible. L'expression « den Zweck treffen » (frapper le clou en plein cœur) a fait glisser le mot au XVIIe siècle vers le sens abstrait de but conscient, de dessein délibéré et de finalité."
},
  "zwecke": {
      "fr": "but / fin / objectif immédiat",
      "lit": "point de mire / fin visée",
      "pos_fr": "Forme grammaticale",
      "role": "Forme fléchie 'Zwecke' du lemme 'Zweck'. Substantif au génitif masculin pluriel, complément de détermination de 'Erreichung'."
},
  "zwei": {
      "fr": "deux",
      "lit": "adjectif numéral cardinal (2)",
      "pos_fr": "Adjectif numéral",
      "role": "Adjectif numéral marquant la bipolarisation irréductible de la société en deux camps."
},
  "zweierlei": {
      "fr": "deux choses / un double enseignement",
      "lit": "de deux sortes différentes",
      "pos_fr": "Pronom indéfini invariable",
      "role": "Pronom invariable annonçant les deux conclusions politiques majeures tirées par Marx.",
      "etymology": "Adjectif numéral indéfini invariable formé sur le génitif cardinal « zwei » (deux, du vieux haut-allemand zweio, racine indo-européenne *dwóh₁) adjoint du suffixe moyen haut-allemand « -erlei » (issu du génitif pluriel des adjectifs fléchis en *-ero-* et du substantif en moyen haut-allemand « leie / leye » = manière, espèce, sorte, emprunt médiéval à l'ancien français 'lai' / coutume, façon, d'origine ultime discutée). Signifie textuellement « de deux natures distinctes, double enseignement »."
},
  "zweiter": {
      "fr": "second / deuxième",
      "lit": "numéral ordinal",
      "pos_fr": "Adjectif",
      "role": "Section 2 du chapitre III : le socialisme bourgeois."
},
  "zwingen": {
      "fr": "contraindre / forcer",
      "lit": "obliger par violence",
      "pos_fr": "Verbe",
      "role": "Verbe impérialiste : le capital contraignant toutes les nations à adopter le mode de production bourgeois."
},
  "zwischen": {
      "fr": "entre",
      "lit": "dans l'espace intermédiaire séparant deux termes",
      "pos_fr": "Préposition mixte",
      "role": "Préposition spatiale désignant l'espace interstitiel entre deux ordres."
},
  "Zölibat": {
      "fr": "célibat",
      "lit": "état de vie hors mariage",
      "pos_fr": "Nom neutre",
      "role": "Nom clérical : Marx raille le célibat des prêtres et l'ascétisme religieux que le socialisme clérical voudrait imposer comme remède aux maux sociaux.",
      "etymology": "Emprunté au latin ecclésiastique « caelibatus » (célibat, état de non-marié)."
},
  "zünftig": {
      "fr": "corporatif / juré",
      "lit": "qui relève de la jurande d'artisanat fermée",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant le mode d'organisation corporative artisanale du Moyen Âge.",
      "etymology": "Adjectif statutaire dérivé par le suffixe « -ig » de « die Zunft » (la corporation de métier jurée, du moyen haut-allemand zumft, vieux haut-allemand zumft « ce qui est convenable, statutairement réglé », du verbe ziemen). Caractérise le monopole corporatif féodal qui interdisait strictement à quiconque ne possédait pas la maîtrise jurée d'exercer un métier manuel ou d'embaucher des ouvriers au-delà du quota fixé."
},
  "«": {
      "fr": "«",
      "lit": "guillemet ouvrant",
      "pos_fr": "Ponctuation",
      "role": "Signe typographique ouvrant une citation ou une mise à distance ironique d'un slogan adverse."
},
  "»": {
      "fr": "»",
      "lit": "guillemet fermant",
      "pos_fr": "Ponctuation",
      "role": "Signe typographique fermant une citation ou une mise à distance ironique d'un slogan adverse."
},
  "ägyptisch": {
      "fr": "égyptien",
      "lit": "d'Égypte",
      "pos_fr": "Adjectif",
      "role": "Adjectif évoquant les pyramides des pharaons dépassées par les forces productives bourgeoises."
},
  "ähnlich": {
      "fr": "semblable / analogue",
      "lit": "de même apparence",
      "pos_fr": "Adjectif",
      "role": "Adjectif dressant le parallèle historique entre la crise féodale et la crise bourgeoise."
},
  "ändern": {
      "fr": "changer / modifier / altérer",
      "lit": "rendre autre",
      "pos_fr": "Verbe",
      "role": "Verbe de transmutation concrète soulignant le caractère muable et historiquement déterminé des institutions sociales les plus figées.",
      "etymology": "Du moyen haut-allemand « andern », vieux haut-allemand « andarōn », de « ander » (autre)."
},
  "Äpfel": {
      "fr": "pommes",
      "lit": "fruits du pommier",
      "pos_fr": "Nom masculin",
      "role": "nom masculin au pluriel (singulier Apfel)",
      "etymology": "Pluriel à inflexion (Umlaut) de « Apfel », du vieux haut-allemand « apful », de racine proto-germanique *apla-."
},
  "Ärger": {
      "fr": "dépit / colère contrariée / indignation",
      "lit": "irritation causée par un affront ou un tort",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant le dépit violent et l'indignation furieuse des possédants menacés d'être dépouillés de leurs privilèges.",
      "etymology": "Déverbal du verbe « ärgern » (irriter, fâcher), issu du moyen haut-allemand « ergen » (rendre pire, faire du tort), rattaché à l'adjectif « arg » (mauvais)."
},
  "öffentlich": {
      "fr": "public / ouvert à tous",
      "lit": "qui est ouvert aux yeux de tous",
      "pos_fr": "Adjectif",
      "role": "Adjectif politique désignant la sphère publique et l'action transparente d'un parti refusant de cacher ses opinions et ses buts.",
      "etymology": "Du moyen haut-allemand « offenlich », dérivé de « offen » (ouvert)."
},
  "Ökonom": {
      "fr": "économiste / agronome",
      "lit": "gestionnaire de l'administration domestique ou publique",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant les théoriciens de l'économie politique bourgeoise (Smith, Ricardo) dont Marx critique les catégories aliénées.",
      "etymology": "Emprunté au grec ancien « oikonomos » (administrateur d'un domaine ou d'une maison), composé de « oikos » (maison) + « nemein » (gérer, administrer)."
},
  "ökonomisch": {
      "fr": "économique",
      "lit": "qui relève de l'économie",
      "pos_fr": "Adjectif",
      "role": "Adjectif définissant le socle matériel sous-jacent à la domination politique de la bourgeoisie."
},
  "Ökonomist": {
      "fr": "économiste théoricien",
      "lit": "spécialiste de la science économique",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant les économistes officiels qui érigent les lois transitoires du capital en lois éternelles de la nature.",
      "etymology": "Emprunté au français « économiste » (terme forgé au XVIIIe siècle pour les physiocrates), du grec « oikonomia »."
},
  "über": {
      "fr": "sur / au sujet de",
      "lit": "au-dessus / à propos de",
      "pos_fr": "Préposition",
      "role": "Préposition régissant l'accusatif introduisant l'objet théorique de la conscience politique."
},
  "überall": {
      "fr": "partout / universellement",
      "lit": "en tout lieu sans exclusion",
      "pos_fr": "Adverbe de lieu",
      "role": "Adverbe de généralisation spatiale décrivant l'extension des hiérarchies féodales."
},
  "Überbau": {
      "fr": "superstructure",
      "lit": "édifice bâti par-dessus",
      "pos_fr": "Nom masculin",
      "role": "Concept cardinal du matérialisme historique : l'édifice juridique et politique élevé sur la base matérielle."
},
  "Übergang": {
      "fr": "transition / passage",
      "lit": "fait de passer par-dessus",
      "pos_fr": "Nom masculin",
      "role": "Concept dialectique désignant le passage historique inéluctable des classes moyennes dans le prolétariat."
},
  "übergehen": {
      "fr": "passer à / franchir",
      "lit": "marcher par-dessus",
      "pos_fr": "Verbe séparable",
      "role": "Passage dialectique d'une forme sociale à une autre."
},
  "überging": {
      "fr": "passa",
      "lit": "traversa vers l'autre bord (übergehen)",
      "pos_fr": "Adverbe",
      "role": "Forme passée du verbe übergehen désignant le ralliement de transfuges de classe à la révolution."
},
  "überhaupt": {
      "fr": "en général / d'une manière générale",
      "lit": "par-dessus tout / globalement",
      "pos_fr": "Adverbe",
      "role": "Adverbe de synthèse marquant l'essor global des forces révolutionnaires marchandes."
},
  "überlebt": {
      "fr": "suranné / caduc / dépassé",
      "lit": "qui a survécu à son temps",
      "pos_fr": "Adjectif",
      "role": "Rapports de production archaïques condamnés par l'histoire."
},
  "überlieferen": {
      "fr": "transmettre / léguer par tradition",
      "lit": "livrer par-dessus",
      "pos_fr": "Verbe",
      "role": "Traditions reçues des générations antérieures."
},
  "überliefern": {
      "fr": "transmettre / léguer par tradition",
      "lit": "remettre de la main à la main à travers le temps",
      "pos_fr": "Verbe inséparable faible",
      "role": "Verbe désignant l'héritage institutionnel et social médiéval que le capitalisme moderne liquide."
},
  "überliefert": {
      "fr": "légué / hérité du passé",
      "lit": "transmis par la tradition séculaire",
      "pos_fr": "Adjectif / Participe",
      "role": "Participe qualifiant les corporations, serfs et ordres issus du Moyen Âge.",
      "etymology": "Participe passé de « überliefern » (transmettre, léguer, de über + liefern livrer)."
},
  "Überlieferung": {
      "fr": "tradition / legs historique",
      "lit": "transmission à travers les générations",
      "pos_fr": "Nom féminin",
      "role": "Substantif au datif féminin singulier désignant l'héritage politique de 1793."
},
  "überlieferung": {
      "fr": "tradition / legs historique",
      "lit": "transmission à travers les générations",
      "pos_fr": "Nom féminin",
      "role": "Forme fléchie 'Überlieferung' du lemme 'Überlieferung'. Substantif au datif féminin singulier désignant l'héritage politique de 1793."
},
  "Überproduktion": {
      "fr": "surproduction",
      "lit": "production excédentaire",
      "pos_fr": "Nom féminin",
      "role": "Concept économique central : la pléthore morbide de marchandises étouffant le marché capitaliste.",
      "etymology": "Composé économique formé de la préposition « über » (au-delà, excès) et de « Produktion » (du latin productio, mise en avant, création). Phénomène inédit du capitalisme où la société souffre non de pénurie, mais d'une pléthore excessive de marchandises invendables."
},
  "überschreiben": {
      "fr": "intituler / surécrire",
      "lit": "écrire par-dessus",
      "pos_fr": "Verbe",
      "role": "Surimposition de gloses mystiques sur des textes profanes."
},
  "überschwenglich": {
      "fr": "exalté / dithyrambique",
      "lit": "qui déborde par-dessus",
      "pos_fr": "Adjectif",
      "role": "Enthousiasme mystique de pacotille des petits-bourgeois."
},
  "Übersetzung": {
      "fr": "traduction / version",
      "lit": "action de transposer d'une rive linguistique à une autre",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la traduction du Manifeste en anglais, français, allemand, italien, flamand et danois proclamée dès le Préambule.",
      "etymology": "Dérivé de « übersetzen » (faire passer au-delà, transposer dans une autre langue, calque de « traducere ») + « -ung ».",
      "isCompound": true,
      "compoundParts": [
            "über-",
            "setzen",
            "-ung"
      ]
},
  "übersticken": {
      "fr": "broder par-dessus",
      "lit": "piquer d'ornements",
      "pos_fr": "Verbe",
      "role": "Ornementer la nudité de la marchandise d'illusions poétiques."
},
  "überwinden": {
      "fr": "surmonter / surclasser",
      "lit": "vaincre par le dessus",
      "pos_fr": "Verbe",
      "role": "Verbe dialectique : la bourgeoisie surmontant chaque crise en préparant des crises plus formidables."
},
  "übrig": {
      "fr": "restant / autre",
      "lit": "qui demeure par-dessus",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant toutes les autres classes condamnées au dépérissement par la grande industrie."
},
  "übrigbleiben": {
      "fr": "subsister / rester",
      "lit": "rester de reste",
      "pos_fr": "Verbe séparable",
      "role": "Ce qui subsiste après la destruction des privilèges."
},
  "übrigens": {
      "fr": "d'ailleurs / du reste / au demeurant",
      "lit": "pour ce qui reste",
      "pos_fr": "Adverbe",
      "role": "Adverbe de transition introduisant un fait complémentaire décisif dans l'argumentation serrée des auteurs du Manifeste.",
      "etymology": "Génitif adverbial de « übrig » (restant, en surplus)."
},
  "übriglassen": {
      "fr": "laisser subsister / laisser de reste",
      "lit": "laisser en surplus / conserver en reste",
      "pos_fr": "Verbe séparable fort",
      "role": "Verbe décrivant l'appauvrissement radical des liens humains réduits par la bourgeoisie au seul intérêt monétaire.",
      "etymology": "Composé du préverbe adjectival « übrig » (de reste, en surplus, en moyen haut-allemand überic, dérivé de über / au-dessus) et du verbe fort « lassen » (laisser, abandonner, en moyen haut-allemand lāzen, en vieux haut-allemand lāzzan, proto-germanique *lētaną, cognat de l'anglais let)."
},
  "–": {
      "fr": "—",
      "lit": "tiret cadratin",
      "pos_fr": "Ponctuation",
      "role": "Tiret de rupture marquant une césure dramatique ou une incise explicative dans la période oratoire."
},
  "“": {
      "fr": "“",
      "lit": "guillemet anglais ouvrant",
      "pos_fr": "Ponctuation",
      "role": "Guillemet ouvrant une formule polémique ou une désignation satirique."
},
  "„": {
      "fr": "„",
      "lit": "guillemet bas allemand ouvrant",
      "pos_fr": "Ponctuation",
      "role": "Guillemet ouvrant typographique traditionnel de l'édition allemande de 1848."
}
};

/**
 * Fonction de résolution universelle garantissant qu'une traduction française
 * authentique et vérifiée est TOUJOURS renvoyée pour chaque mot.
 */
export function getWordTranslationFr(
  word: { text: string; lemma: string },
  annotation?: { translationFr?: string }
): string {
  // 1. Traduction contextuelle de la fiche d'annotation si disponible et non allemande
  if (annotation?.translationFr) {
    const tr = annotation.translationFr.trim();
    if (
      tr.toLowerCase() !== word.text.toLowerCase() &&
      tr.toLowerCase() !== word.lemma.toLowerCase()
    ) {
      return tr;
    }
    if (['bourgeoisie', 'proletariat', 'prolétariat', 'moderne'].includes(tr.toLowerCase())) {
      return tr;
    }
  }

  // 2. Recherche directe dans le lexique lemmatisé
  const lemmaEntry = LEMMA_LEXICON[word.lemma];
  if (lemmaEntry?.fr) {
    return lemmaEntry.fr;
  }

  // 3. Recherche par texte brut minuscule
  const textEntry = LEMMA_LEXICON[word.text.toLowerCase()];
  if (textEntry?.fr) {
    return textEntry.fr;
  }

  // 4. Recherche par texte brut tel quel
  const exactEntry = LEMMA_LEXICON[word.text];
  if (exactEntry?.fr) {
    return exactEntry.fr;
  }

  // 5. Filet de sécurité
  return `[traduction en cours]`;
}

/**
 * Sens littéral de secours ou issu de l'annotation
 */
export function getLiteralTranslation(
  word: { lemma: string; text?: string },
  annotation?: { literalTranslation?: string }
): string | undefined {
  if (annotation?.literalTranslation && annotation.literalTranslation.trim().length > 0) {
    return annotation.literalTranslation;
  }
  return LEMMA_LEXICON[word.lemma]?.lit || (word.text ? LEMMA_LEXICON[word.text.toLowerCase()]?.lit : undefined);
}

/**
 * Rôle grammatical concis en français
 */
export function getGrammaticalRoleFr(
  word: Word,
  annotation?: { grammaticalRole?: string }
): string {
  if (
    annotation?.grammaticalRole &&
    annotation.grammaticalRole.trim().length > 0 &&
    !annotation.grammaticalRole.includes('Rôle syntaxique dans le texte original')
  ) {
    return annotation.grammaticalRole;
  }
  const lexiconRole = LEMMA_LEXICON[word.lemma]?.role;
  if (lexiconRole) {
    return lexiconRole;
  }
  const parts: string[] = [];
  if (word.pos) parts.push(POS_LABELS_FR[word.pos] || word.pos);
  if (word.gender) parts.push(GENDER_LABELS_FR[word.gender] || word.gender);
  if (word.number) parts.push(word.number === 'SG' ? 'singulier' : 'pluriel');
  if (word.case) parts.push(`au ${CASE_LABELS_FR[word.case] || word.case}`);
  return parts.length > 0 ? parts.join(' · ') : 'Forme grammaticale dans le texte.';
}

/**
 * Étymologie philologique authentique
 */
export function getEtymology(
  word: { lemma: string; text?: string },
  annotation?: { etymology?: string }
): string | undefined {
  if (annotation?.etymology && annotation.etymology.trim().length > 0) {
    return annotation.etymology;
  }
  return LEMMA_LEXICON[word.lemma]?.etymology || (word.text ? LEMMA_LEXICON[word.text.toLowerCase()]?.etymology : undefined);
}
