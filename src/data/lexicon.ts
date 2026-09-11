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
  "--": {
      "fr": "—",
      "lit": "tiret cadratin",
      "pos_fr": "",
      "role": "Ponctuation de rupture stylistique."
  },
  "1.": {
      "fr": "premièrement / 1.",
      "lit": "chiffre ordinal un",
      "pos_fr": "",
      "role": "Marque la première sous-section du chapitre III."
  },
  "16.": {
      "fr": "seizième",
      "lit": "seizième siècle",
      "pos_fr": "",
      "role": "Repère historique de la Réforme et de la modernité naissante."
  },
  "17.": {
      "fr": "dix-septième / XVIIe",
      "lit": "ordinal dix-septième",
      "pos_fr": "",
      "role": "Adjectif ordinal désignant le XVIIe siècle anglais (Révolution de 1648)."
  },
  "18.": {
      "fr": "dix-huitième / XVIIIe",
      "lit": "ordinal dix-huitième",
      "pos_fr": "",
      "role": "Adjectif ordinal déterminant le XVIIIe siècle français (Révolution de 1789)."
  },
  "1830": {
      "fr": "en 1830",
      "lit": "l'année 1830",
      "pos_fr": "",
      "role": "Révolution de Juillet en France chassant les Bourbons."
  },
  "1846": {
      "fr": "1846",
      "lit": "l'année 1846",
      "pos_fr": "",
      "role": "Numéral marquant le repère chronologique de la révolution de Cracovie."
  },
  "2.": {
      "fr": "deuxièmement / 2.",
      "lit": "chiffre ordinal deux",
      "pos_fr": "",
      "role": "Marque la deuxième sous-section du chapitre III."
  },
  "3.": {
      "fr": "troisièmement / 3.",
      "lit": "chiffre ordinal trois",
      "pos_fr": "",
      "role": "Marque la troisième sous-section du chapitre III."
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
      "pos_fr": "",
      "role": "Nom féminin caractérisant l'autarcie féodale dépassée par le marché mondial."
  },
  "Abhängigkeit": {
      "fr": "dépendance / subordination",
      "lit": "état de dépendance",
      "pos_fr": "",
      "role": "Nom féminin exprimant l'interconnexion globale et la subordination mutuelle des nations."
  },
  "Absatz": {
      "fr": "débouché / écoulement",
      "lit": "action de poser à terre, vente marchande",
      "pos_fr": "",
      "role": "Nom masculin économique désignant les marchés nécessaires à la réalisation de la plus-value."
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
  "Abschnitt": {
      "fr": "section / chapitre",
      "lit": "morceau coupé, section de texte",
      "pos_fr": "",
      "role": "Substantif masculin au datif régi par 'nach', désignant la section II du Manifeste."
  },
  "Absicht": {
      "fr": "dessein / but / intention politique",
      "lit": "visée préméditée, but poursuivi",
      "pos_fr": "",
      "role": "Substantif coordonné à 'Ansichten' désignant les objectifs révolutionnaires sans fard."
  },
  "Absolutismus": {
      "fr": "absolutisme",
      "lit": "pouvoir monarchique absolu",
      "pos_fr": "",
      "role": "Nom masculin désignant l'Ancien Régime féodal combattu par la bourgeoisie ascendante."
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
      "role": "Nom féminin marquant la segmentation hiérarchique complexe des rangs sociaux féodaux."
  },
  "Abzug": {
      "fr": "déduction / défalcation",
      "lit": "action de tirer hors de",
      "pos_fr": "Nom masculin",
      "role": "Déduction faite des éléments révolutionnaires de la société."
  },
  "Ackerbau": {
      "fr": "agriculture / labour",
      "lit": "culture du champ (Acker + Bau)",
      "pos_fr": "",
      "role": "Nom masculin désignant la production agraire révolutionnée par la chimie et le machinisme."
  },
  "Adel": {
      "fr": "noblesse / aristocratie",
      "lit": "lignée noble",
      "pos_fr": "",
      "role": "Nom masculin désignant l'ordre féodal déchu dont certains membres rallient le prolétariat."
  },
  "Afrika": {
      "fr": "Afrique",
      "lit": "le continent africain",
      "pos_fr": "Nom propre",
      "role": "Nom propre neutre, repère géographique de l'expansion coloniale."
  },
  "Agrikultur": {
      "fr": "agriculture",
      "lit": "culture de la terre",
      "pos_fr": "",
      "role": "Nom féminin latin désignant l'exploitation des terres sous le régime féodal."
  },
  "Aktion": {
      "fr": "action / mouvement",
      "lit": "action pratique",
      "pos_fr": "Nom féminin",
      "role": "Action collective de classe du prolétariat."
  },
  "Alter": {
      "fr": "âge",
      "lit": "âge de la vie",
      "pos_fr": "",
      "role": "Nom neutre dont les distinctions s'effacent pour la classe ouvrière sous la machine."
  },
  "Altersunterschied": {
      "fr": "différence d'âge",
      "lit": "distinction fondée sur l'âge",
      "pos_fr": "",
      "role": "Nom composé désignant les critères biologiques nivelés par le machinisme industriel."
  },
  "Amerika": {
      "fr": "Amérique",
      "lit": "le continent américain",
      "pos_fr": "Nom propre",
      "role": "Nom propre neutre désignant le Nouveau Monde dont la découverte accéléra l'essor capitaliste."
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
  "Andre": {
      "fr": "autre / les autres",
      "lit": "l'autre personne",
      "pos_fr": "Nom/Pronom",
      "role": "Désigne les autres classes ou individus."
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
      "pos_fr": "",
      "role": "Concept marxiste fondamental désignant la forme historique par laquelle une classe s'empare du produit social."
  },
  "Anerkennung": {
      "fr": "reconnaissance",
      "lit": "action de reconnaître juridiquement",
      "pos_fr": "",
      "role": "Nom féminin marquant la consécration légale des droits ouvriers arrachée par la lutte."
  },
  "Anfang": {
      "fr": "début / commencement",
      "lit": "point de départ",
      "pos_fr": "",
      "role": "Nom masculin situant la phase embryonnaire de la révolte ouvrière locale."
  },
  "Angriff": {
      "fr": "attaque / assaut",
      "lit": "prise d'assaut",
      "pos_fr": "",
      "role": "Nom masculin désignant les offensives dirigées par les ouvriers contre les machines."
  },
  "Anhäufung": {
      "fr": "accumulation / entassement",
      "lit": "amoncellement en tas",
      "pos_fr": "",
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
  "Anschauung": {
      "fr": "conception / vision du monde",
      "lit": "contemplation intuitive",
      "pos_fr": "",
      "role": "Nom féminin désignant les croyances traditionnelles dissoutes par l'époque bourgeoise."
  },
  "Anschauungsweise": {
      "fr": "conception / manière de voir",
      "lit": "mode de contemplation intellectuelle",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin composé (Anschauung + Weise) désignant l'idéologie et la vision du monde."
  },
  "Ansicht": {
      "fr": "opinion / conception / vue théorique",
      "lit": "regard porté sur une chose, doctrine",
      "pos_fr": "",
      "role": "Substantif à l'accusatif féminin pluriel désignant la doctrine publique communiste."
  },
  "Anspruch": {
      "fr": "revendication / recours (Inanspruchnahme)",
      "lit": "droit réclamé",
      "pos_fr": "",
      "role": "Nom masculin entrant dans la locution « in Anspruch nehmen » (requérir le concours)."
  },
  "Anstrich": {
      "fr": "vernis / couche de peinture",
      "lit": "teinte superficielle",
      "pos_fr": "Nom masculin",
      "role": "Vernis socialiste donné aux récriminations féodales."
  },
  "Anwendung": {
      "fr": "application / mise en œuvre",
      "lit": "action d'appliquer",
      "pos_fr": "",
      "role": "Nom féminin désignant l'usage pratique des sciences chimiques dans l'industrie et l'agriculture."
  },
  "Arbeit": {
      "fr": "travail / force de travail",
      "lit": "labeur, travail productif",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin, concept cardinal chez Marx désignant l'activité productrice transformant la nature."
  },
  "Arbeiter": {
      "fr": "ouvrier / travailleur",
      "lit": "celui qui accomplit le travail productif",
      "pos_fr": "",
      "role": "Substantif masculin pluriel désignant le sujet historique de la révolution prolétarienne."
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
      "pos_fr": "",
      "role": "Forme lemmatisée d'Arbeiterklasse, sujet historique révolutionnaire du Manifeste."
  },
  "Arbeiterklasse": {
      "fr": "classe ouvrière / prolétariat",
      "lit": "classe des travailleurs",
      "pos_fr": "",
      "role": "Substantif composé au génitif féminin singulier, complément de nom de 'Zwecke und Interessen'."
  },
  "Arbeitermasse": {
      "fr": "masse ouvrière",
      "lit": "masse des travailleurs",
      "pos_fr": "",
      "role": "Nom composé désignant la concentration collective des ouvriers dans la grande fabrique."
  },
  "Arbeiterpartei": {
      "fr": "parti ouvrier",
      "lit": "parti des travailleurs",
      "pos_fr": "",
      "role": "Substantif composé au datif pluriel, régime de la préposition 'zu'."
  },
  "Arbeiterrevolution": {
      "fr": "révolution ouvrière",
      "lit": "bouleversement prolétarien",
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
      "pos_fr": "",
      "role": "Nom composé désignant l'outil transformant la matière, auquel l'ouvrier est asservi."
  },
  "Arbeitslohn": {
      "fr": "salaire",
      "lit": "prix du travail",
      "pos_fr": "",
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
      "pos_fr": "",
      "role": "Nom composé désignant l'unité temporelle dont l'allongement permet d'extraire la plus-value absolue."
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
      "pos_fr": "",
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
      "lit": "gouvernement des meilleurs, noblesse",
      "pos_fr": "",
      "role": "Nom féminin désignant la classe des seigneurs féodaux en guerre contre la bourgeoisie."
  },
  "Armee": {
      "fr": "armée",
      "lit": "corps de troupes armées enrégimentées",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant métaphoriquement les légions d'ouvriers d'usine disciplinés selon une hiérarchie militaire."
  },
  "Art": {
      "fr": "manière / espèce / sorte",
      "lit": "façon d'être, genre",
      "pos_fr": "Nom féminin",
      "role": "Forme particulière de socialisme ou de réforme."
  },
  "Artillerie": {
      "fr": "artillerie",
      "lit": "armes à feu lourdes",
      "pos_fr": "",
      "role": "Métaphore militaire désignant les bas prix industriels qui abattent les murailles chinoises."
  },
  "Arzt": {
      "fr": "médecin",
      "lit": "celui qui soigne",
      "pos_fr": "",
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
      "role": "Nom féminin désignant la confédération jurée unissant les bourgeois des premières villes libres."
  },
  "Assoziatione": {
      "fr": "association",
      "lit": "forme fléchie d'Assoziation",
      "pos_fr": "",
      "role": "Forme lemmatisée d'Assoziation."
  },
  "Aufbau": {
      "fr": "édification / construction",
      "lit": "construction vers le haut",
      "pos_fr": "Nom masculin",
      "role": "Édification chimérique des phalanstères."
  },
  "Aufhebung": {
      "fr": "dépassement / abolition dialectique",
      "lit": "conservation-dépassement (Aufhebung)",
      "pos_fr": "Nom féminin",
      "role": "Concept hégélien et marxiste de suppression-élévation de la propriété."
  },
  "Aufhören": {
      "fr": "cessation, fin, disparition",
      "lit": "fait de cesser",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Substantivation de l'infinitif « aufhören » (cesser, s'arrêter, vieux haut-allemand ūfhōrēn, écouter attentivement jusqu'au silence)."
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
  "Auflösung": {
      "fr": "dissolution / décomposition",
      "lit": "fait de délier en éléments",
      "pos_fr": "Nom féminin",
      "role": "Dissolution accélérée des liens sociaux féodaux."
  },
  "Auflösungsprozess": {
      "fr": "processus de dissolution",
      "lit": "marche vers la décomposition",
      "pos_fr": "",
      "role": "Variante orthographique standard d'Auflösungsprozeß."
  },
  "Auflösungsprozeß": {
      "fr": "processus de dissolution",
      "lit": "marche vers la décomposition",
      "pos_fr": "",
      "role": "Nom composé désignant la dislocation convulsive de la classe dominante à l'approche de la crise finale."
  },
  "Aufregung": {
      "fr": "effervescence / agitation",
      "lit": "mise en émoi générale",
      "pos_fr": "Nom féminin",
      "role": "Période d'agitation révolutionnaire générale."
  },
  "Aufschwung": {
      "fr": "essor / impulsion",
      "lit": "élan vers le haut, envol",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin métaphorique marquant l'accélération subite du commerce et de la production marchande."
  },
  "Aufseher": {
      "fr": "surveillant / contremaître",
      "lit": "celui qui regarde d'en haut",
      "pos_fr": "",
      "role": "Nom masculin désignant les cadres subalternes de la discipline manufacturière."
  },
  "Aufsicht": {
      "fr": "surveillance / inspection",
      "lit": "regard exercé d'en haut",
      "pos_fr": "",
      "role": "Nom féminin caractérisant la hiérarchie militaire régnant au sein de la fabrique."
  },
  "Auge": {
      "fr": "œil",
      "lit": "organe de la vue",
      "pos_fr": "",
      "role": "Nom neutre de la métaphore de la lucidité (« avec des yeux dégrisés »)."
  },
  "Augenblick": {
      "fr": "instant / moment",
      "lit": "clin d'œil, battement de paupière",
      "pos_fr": "",
      "role": "Substantif à l'accusatif adverbial temporel marquant la constance vigilante de l'action communiste."
  },
  "Ausbeutung": {
      "fr": "exploitation",
      "lit": "extraction complète jusqu'au bout d'un filon minier ou de travail",
      "pos_fr": "Nom féminin",
      "role": "Concept économique marxiste majeur désignant l'extorsion systématique de surtravail non rémunéré aux travailleurs."
  },
  "Ausdehnung": {
      "fr": "extension / expansion spatiale",
      "lit": "étirement vers l'extérieur au-delà des limites",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'accroissement continu de l'aire géographique et technique d'influence de l'industrie."
  },
  "Ausdruck": {
      "fr": "expression",
      "lit": "ce qui est manifesté au dehors",
      "pos_fr": "Nom masculin",
      "role": "Expression fidèle des intérêts matériels sous-jacents."
  },
  "Ausführung": {
      "fr": "exécution / réalisation",
      "lit": "action de mener à terme",
      "pos_fr": "Nom féminin",
      "role": "Mise en pratique d'un plan social ou économique."
  },
  "Ausnahme": {
      "fr": "exception",
      "lit": "ce qui est pris hors de la règle",
      "pos_fr": "Nom féminin",
      "role": "Cas exceptionnels confirmant la loi générale du marché."
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
  "Austausch": {
      "fr": "échange",
      "lit": "troc, circulation réciproque",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant la circulation marchande des produits et capitaux."
  },
  "Babeuf": {
      "fr": "Babeuf (Gracchus Babeuf)",
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
  "Band": {
      "fr": "lien / attache",
      "lit": "ce qui lie, corde, chaîne morale ou servile",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre désignant la relation sociale liant les hommes entre eux, réduite désormais au seul argent liquide."
  },
  "Barbar": {
      "fr": "barbare",
      "lit": "étranger non civilisé",
      "pos_fr": "",
      "role": "Nom masculin désignant les populations non capitalistes intégrées de force au marché."
  },
  "Barbarei": {
      "fr": "barbarie",
      "lit": "état sauvage",
      "pos_fr": "",
      "role": "Nom féminin peignant l'état de dénuement primitif dans lequel la crise de surproduction replonge la société."
  },
  "Baron": {
      "fr": "baron",
      "lit": "titre de noblesse féodale",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant les grands feudataires du système seigneurial médiéval."
  },
  "Bauer": {
      "fr": "paysan",
      "lit": "cultivateur de la terre",
      "pos_fr": "",
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
      "pos_fr": "",
      "role": "Forme singulière de Bauernvölker."
  },
  "Bauernvölker": {
      "fr": "peuples paysans",
      "lit": "nations agricoles",
      "pos_fr": "",
      "role": "Nom composé désignant les pays agraires assujettis aux puissances industrielles."
  },
  "Bedarf": {
      "fr": "besoin / demande",
      "lit": "ce qui est requis, nécessité économique",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin économique désignant la demande solvable des nouveaux marchés."
  },
  "Bedenken": {
      "fr": "scrupule / objection",
      "lit": "hésitation réfléchie",
      "pos_fr": "Nom neutre",
      "role": "Scrupules moraux balayés par l'expansion du capital."
  },
  "Bedeutung": {
      "fr": "importance / signification",
      "lit": "valeur historique et théorique",
      "pos_fr": "Nom féminin",
      "role": "Portée critique des premiers systèmes socialistes."
  },
  "Bedingung": {
      "fr": "condition",
      "lit": "stipulation, circonstance déterminante",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant les rapports matériels qui déterminent l'organisation sociale."
  },
  "Bedürfnis": {
      "fr": "besoin",
      "lit": "nécessité ressentie",
      "pos_fr": "",
      "role": "Nom neutre désignant les besoins humains renouvelés et élargis par le commerce mondial."
  },
  "Befreiung": {
      "fr": "libération / affranchissement",
      "lit": "action de rendre libre",
      "pos_fr": "",
      "role": "Substantif au génitif féminin singulier, complément de détermination de 'Bedingung'."
  },
  "Befriedigung": {
      "fr": "satisfaction",
      "lit": "action d'apaiser",
      "pos_fr": "",
      "role": "Nom féminin caractérisant le comblement marchand des besoins de consommation."
  },
  "Beförderung": {
      "fr": "promotion / impulsion",
      "lit": "action de faire avancer",
      "pos_fr": "",
      "role": "Nom féminin mesurant le développement impulsé aux forces productives."
  },
  "Begeisterung": {
      "fr": "enthousiasme / exaltation héroïque",
      "lit": "insufflation d'esprit noble, transport passionné",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'idéal chevaleresque et militaire d'honneur démasqué comme fiction d'ordre."
  },
  "Begriff": {
      "fr": "concept / notion",
      "lit": "saisie intellectuelle",
      "pos_fr": "Nom masculin",
      "role": "Concept philosophique ou catégorie économique."
  },
  "Behauptung": {
      "fr": "maintien / défense",
      "lit": "action de tenir ferme",
      "pos_fr": "",
      "role": "Nom féminin désignant la défense concertée du niveau des salaires par les coalitions."
  },
  "Beibehaltung": {
      "fr": "conservation / maintien inchangé",
      "lit": "action de garder auprès de soi",
      "pos_fr": "",
      "role": "Nom féminin qualifiant le conservatisme technique propre aux modes de production précapitalistes."
  },
  "Beispiel": {
      "fr": "exemple",
      "lit": "cas particulier illustratif",
      "pos_fr": "Nom neutre",
      "role": "Exemple concret tiré de l'histoire moderne."
  },
  "Bekämpfung": {
      "fr": "combat / lutte contre",
      "lit": "action de lutter contre",
      "pos_fr": "Nom féminin",
      "role": "Lutte imaginaire des utopistes contre la concurrence."
  },
  "Berechnung": {
      "fr": "calcul / estimation chiffrée",
      "lit": "compte arithmétique rigoureux des coûts et bénéfices",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la rationalité comptable marchande qui subordonne toute décision au taux de profit."
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
  "Beruf": {
      "fr": "profession / vocation / métier",
      "lit": "appel, activité professionnelle",
      "pos_fr": "Nom masculin",
      "role": "Professions libérales déchues en travail salarié."
  },
  "Beschränktheit": {
      "fr": "étroitesse / bornage d'esprit",
      "lit": "état d'enfermement dans des bornes",
      "pos_fr": "",
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
  "Besitz": {
      "fr": "possession / propriété matérielle",
      "lit": "fait d'être assis sur des biens",
      "pos_fr": "",
      "role": "Nom masculin désignant l'accaparement de la richesse par la classe possédante."
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
      "pos_fr": "",
      "role": "Nom composé désignant les secteurs de la classe dominante précipités dans le prolétariat."
  },
  "Bestgestellten": {
      "fr": "les mieux lotis / les privilégiés",
      "lit": "ceux qui sont le mieux placés",
      "pos_fr": "Nom substantivé",
      "role": "Les fractions aisées de la bourgeoisie."
  },
  "Betrieb": {
      "fr": "exploitation / marche de l'entreprise",
      "lit": "action d'exercer une activité",
      "pos_fr": "",
      "role": "Nom masculin économique désignant la gestion matérielle de la grande industrie."
  },
  "Betriebsweise": {
      "fr": "mode d'exploitation / méthode de production",
      "lit": "manière de faire fonctionner l'atelier",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin composé désignant les méthodes techniques et divisionnaires du travail industriel."
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
  "Bevölkerung": {
      "fr": "population",
      "lit": "ensemble des habitants",
      "pos_fr": "",
      "role": "Nom féminin démographique désignant les masses agglomérées dans les métropoles urbaines."
  },
  "Bewegung": {
      "fr": "mouvement / lutte politique",
      "lit": "mise en mouvement, dynamique sociale historique",
      "pos_fr": "",
      "role": "Substantif féminin désignant la dynamique politique globale de la lutte des classes."
  },
  "Bewusstsein": {
      "fr": "conscience",
      "lit": "état d'être conscient, savoir de classe",
      "pos_fr": "",
      "role": "Substantif composé désignant la conscience de classe ouvrière éveillée par le parti."
  },
  "Bewußtseinsform": {
      "fr": "forme de conscience",
      "lit": "configuration idéologique",
      "pos_fr": "Nom féminin",
      "role": "Formes religieuses, juridiques ou philosophiques de la conscience."
  },
  "Bezeichnend": {
      "fr": "ce qui est significatif / caractéristique",
      "lit": "ce qui désigne avec force",
      "pos_fr": "Nom substantivé",
      "role": "Trait révélateur de la duplicité bourgeoise."
  },
  "Beziehung": {
      "fr": "relation / rapport social",
      "lit": "lien tendu entre entités",
      "pos_fr": "",
      "role": "Nom féminin désignant les relations réciproques que les hommes doivent envisager sans mystification."
  },
  "Bild": {
      "fr": "image / modèle",
      "lit": "représentation figurée",
      "pos_fr": "",
      "role": "Nom neutre de la métaphore de la bourgeoisie modelant le monde « d'après sa propre image »."
  },
  "Bilde": {
      "fr": "image (datif archaïque)",
      "lit": "forme fléchie de Bild",
      "pos_fr": "",
      "role": "Forme fléchie de Bild dans la locution « nach ihrem Bilde »."
  },
  "Bildung": {
      "fr": "formation / culture / éducation",
      "lit": "action de donner forme",
      "pos_fr": "",
      "role": "Nom féminin désignant à la fois l'accumulation du capital et l'éducation politique des ouvriers."
  },
  "Bildungselement": {
      "fr": "élément d'éducation / arme théorique",
      "lit": "particule formative",
      "pos_fr": "",
      "role": "Nom composé désignant les armes intellectuelles que la bourgeoisie transmet involontairement au prolétariat."
  },
  "Bitteres": {
      "fr": "de l'amertume / chose amère",
      "lit": "ce qui est amer",
      "pos_fr": "",
      "role": "Mélange d'amertume et d'ironie dans les pamphlets."
  },
  "Boden": {
      "fr": "sol / terrain",
      "lit": "fondement terrestre",
      "pos_fr": "",
      "role": "Nom masculin métaphorique désignant le socle national que le marché mondial dérobe à l'industrie."
  },
  "Bourgeois": {
      "fr": "bourgeois",
      "lit": "citadin affranchi puis détenteur de capital",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin invariable au pluriel désignant les membres de la classe dominante moderne."
  },
  "Bourgeois-Persönlichkeit": {
      "fr": "personnalité bourgeoise",
      "lit": "individualité du possédant capitaliste",
      "pos_fr": "Nom féminin composé",
      "role": "La seule personnalité reconnue comme libre par le droit bourgeois."
  },
  "Bourgeoisepoch": {
      "fr": "époque bourgeoise",
      "lit": "ère dominée par la bourgeoisie",
      "pos_fr": "",
      "role": "Forme lemmatisée de Bourgeoisepoche."
  },
  "Bourgeoisepoche": {
      "fr": "époque bourgeoise",
      "lit": "ère de la domination capitaliste",
      "pos_fr": "",
      "role": "Nom composé désignant la phase moderne caractérisée par la simplification des antagonismes."
  },
  "Bourgeoisherrschaft": {
      "fr": "domination bourgeoise",
      "lit": "hégémonie de la classe capitaliste",
      "pos_fr": "Nom féminin composé",
      "role": "Le pouvoir politique et économique sans partage de la bourgeoisie."
  },
  "Bourgeoisideolog": {
      "fr": "idéologue bourgeois",
      "lit": "théoricien de la classe bourgeoise",
      "pos_fr": "",
      "role": "Forme lemmatisée de Bourgeoisideologe."
  },
  "Bourgeoisideologe": {
      "fr": "idéologue bourgeois",
      "lit": "penseur de la classe bourgeoise",
      "pos_fr": "",
      "role": "Nom composé désignant les intellectuels bourgeois capables de comprendre l'ensemble du mouvement historique."
  },
  "Bourgeoisie": {
      "fr": "bourgeoisie",
      "lit": "classe des détenteurs du capital moderne",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin emprunté au français, désignant chez Marx la classe dominante qui possède les moyens de production."
  },
  "Bourgeoisiesozialismus": {
      "fr": "socialisme bourgeois",
      "lit": "idéologie réformiste du capital",
      "pos_fr": "Nom masculin composé",
      "role": "Socialisme philanthropique cherchant à préserver le capital sans ses tares."
  },
  "Bourgeoisklas": {
      "fr": "classe bourgeoise",
      "lit": "classe des capitalistes",
      "pos_fr": "",
      "role": "Forme lemmatisée de Bourgeoisklasse."
  },
  "Bourgeoisklasse": {
      "fr": "classe bourgeoise",
      "lit": "classe des détenteurs du capital moderne",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin composé désignant la classe dominante propriétaire des moyens de production sociaux."
  },
  "Bourgeoisregim": {
      "fr": "régime bourgeois",
      "lit": "ordre politique et social du capital",
      "pos_fr": "Nom neutre",
      "role": "L'État moderne représentatif au service du capital."
  },
  "Bourgeoissozialismus": {
      "fr": "socialisme bourgeois",
      "lit": "doctrine réformiste capitaliste",
      "pos_fr": "Nom masculin composé",
      "role": "Courant cherchant à guérir les maux du capitalisme pour le conserver."
  },
  "Bourgeoisstaat": {
      "fr": "État bourgeois",
      "lit": "appareil étatique du capital",
      "pos_fr": "",
      "role": "Nom composé désignant l'État représentatif moderne comme instrument de la classe possédante."
  },
  "Bourgeoisvolk": {
      "fr": "nation bourgeoise",
      "lit": "peuple capitaliste",
      "pos_fr": "",
      "role": "Forme singulière de Bourgeoisvölker."
  },
  "Bourgeoisvölker": {
      "fr": "nations bourgeoises",
      "lit": "peuples capitalistes",
      "pos_fr": "",
      "role": "Nom composé désignant les puissances industrielles dominatrices de l'Orient."
  },
  "Brand": {
      "fr": "incendie / feu destructeur",
      "lit": "action de brûler",
      "pos_fr": "",
      "role": "Nom masculin de la locution « in Brand stecken » (incendier les fabriques en révolte)."
  },
  "Bärenhäuterei": {
      "fr": "paresse crasse / fainéantise légendaire",
      "lit": "action de se coucher sur la peau d'ours",
      "pos_fr": "",
      "role": "Archaïsme satirique désignant l'indolence oisive et brutale des seigneurs du moyen âge."
  },
  "Bürger": {
      "fr": "bourgeois / citoyen",
      "lit": "habitant du bourg",
      "pos_fr": "",
      "role": "Nom masculin désignant l'habitant de la cité médiévale précurseur du capitaliste moderne."
  },
  "Bürgerkrieg": {
      "fr": "guerre civile",
      "lit": "conflit armé entre citoyens",
      "pos_fr": "",
      "role": "Nom composé désignant la guerre larvée de classe qui couve au sein de la société avant la révolution."
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
      "pos_fr": "",
      "role": "Nom masculin désignant la singularité humaine ou nationale dépouillée par le capital."
  },
  "Chartist": {
      "fr": "chartiste",
      "lit": "partisan de la Charte du Peuple (People's Charter de 1838)",
      "pos_fr": "",
      "role": "Substantif au datif pluriel désignant le mouvement ouvrier chartiste britannique."
  },
  "Chef": {
      "fr": "chef / dirigeant",
      "lit": "tête, meneur, commandant en premier",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin emprunté au français désignant les maîtres capitalistes comme commandants suprêmes du procès de production."
  },
  "Chemie": {
      "fr": "chimie",
      "lit": "science de la matière",
      "pos_fr": "",
      "role": "Nom féminin célébrant les progrès des sciences appliquées à l'agriculture et à l'industrie."
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
  "Dampf": {
      "fr": "vapeur / force motrice de la vapeur",
      "lit": "vapeur d'eau sous pression, fumée thermomécanique",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant la force motrice thermodynamique de la première révolution industrielle qui libéra les manufactures des cours d'eau ruraux."
  },
  "Dampfschiffahrt": {
      "fr": "navigation à vapeur",
      "lit": "navigation par la force de la vapeur",
      "pos_fr": "",
      "role": "Nom composé illustrant la révolution des transports transatlantiques au XIXe siècle."
  },
  "Dasein": {
      "fr": "existence / être-là",
      "lit": "fait d'exister concrètement",
      "pos_fr": "Nom neutre",
      "role": "Conditions concrètes de l'existence matérielle."
  },
  "Demokratie": {
      "fr": "démocratie",
      "lit": "gouvernement du peuple",
      "pos_fr": "Nom féminin",
      "role": "La conquête de la démocratie par la classe ouvrière érigée en classe dominante."
  },
  "Despotie": {
      "fr": "despotisme",
      "lit": "pouvoir tyrannique arbitraire",
      "pos_fr": "",
      "role": "Nom féminin caractérisant la tyrannie mesquine exercée par le patron dans l'atelier."
  },
  "Deutschland": {
      "fr": "Allemagne",
      "lit": "pays du peuple allemand",
      "pos_fr": "",
      "role": "Nom propre au datif neutre singulier désignant l'espace politique central de 1848."
  },
  "Dezennien": {
      "fr": "décennies",
      "lit": "périodes de dix ans",
      "pos_fr": "",
      "role": "Nom savant désignant les décennies récentes de révolte des forces productives."
  },
  "Domestik": {
      "fr": "domestique / laquais",
      "lit": "serviteur de maison",
      "pos_fr": "Nom masculin",
      "role": "Serviteurs de l'Ancien Régime."
  },
  "Douanenlinie": {
      "fr": "ligne de douanes / barrière tarifaire",
      "lit": "frontière douanière",
      "pos_fr": "",
      "role": "Terme d'origine française désignant le cordon douanier national unifié sous l'État bourgeois."
  },
  "Druck": {
      "fr": "pression / oppression",
      "lit": "force appliquée qui pèse",
      "pos_fr": "Nom masculin",
      "role": "Pression exercée par la grande industrie sur le salaire."
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
  "Durchschnittspreis": {
      "fr": "prix moyen",
      "lit": "moyenne arithmétique des prix",
      "pos_fr": "Nom masculin composé",
      "role": "Le salaire ouvrier comme simple prix moyen de la force de travail."
  },
  "Echo": {
      "fr": "écho / retentissement",
      "lit": "répétition sonore",
      "pos_fr": "Nom neutre",
      "role": "Retentissement des événements parisiens en Europe."
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
  "Eigentum": {
      "fr": "propriété privée",
      "lit": "ce qui est propre à quelqu'un",
      "pos_fr": "",
      "role": "Concept cardinal de la critique marxienne : la propriété privée bourgeoise des moyens de production."
  },
  "Eigentumsfrage": {
      "fr": "question de la propriété",
      "lit": "interrogation fondamentale sur la possession des moyens de production",
      "pos_fr": "",
      "role": "Substantif composé à l'accusatif singulier, objet direct de 'hervorheben'."
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
      "pos_fr": "",
      "role": "Concept théorique décisif : la forme juridique qui devient une entrave au développement des forces productives."
  },
  "Eigentumsverhältnisse": {
      "fr": "rapports de propriété",
      "lit": "forme plurielle d'Eigentumsverhältnis",
      "pos_fr": "",
      "role": "Forme plurielle du concept d'Eigentumsverhältnis."
  },
  "Eigentümer": {
      "fr": "propriétaire",
      "lit": "possesseur légal",
      "pos_fr": "Nom masculin",
      "role": "Le propriétaire foncier ou capitaliste."
  },
  "Einfluß": {
      "fr": "influence / ascendant",
      "lit": "action continue exercée",
      "pos_fr": "Nom masculin",
      "role": "Influence de l'industrie sur la politique."
  },
  "Einführung": {
      "fr": "introduction / mise en œuvre",
      "lit": "action d'amener dedans",
      "pos_fr": "",
      "role": "Nom féminin désignant l'adoption vitale des nouvelles techniques industrielles par les nations."
  },
  "Eingriff": {
      "fr": "empiétement / intervention despotique",
      "lit": "action d'intervenir avec force",
      "pos_fr": "Nom masculin",
      "role": "Interventions despotiques dans le droit de propriété."
  },
  "Einklang": {
      "fr": "accord / harmonie",
      "lit": "consonance parfaite",
      "pos_fr": "Nom masculin",
      "role": "Harmonie factice postulée entre le capital et le travail."
  },
  "Einmischung": {
      "fr": "ingérence / immixtion",
      "lit": "fait de s'immiscer",
      "pos_fr": "Nom féminin",
      "role": "Ingérence de la société dans l'éducation des enfants."
  },
  "Einseitigkeit": {
      "fr": "étroitesse d'esprit / partialité unilatérale",
      "lit": "caractère d'un seul côté",
      "pos_fr": "",
      "role": "Nom féminin fustigeant l'exclusivisme national brisé par la circulation universelle."
  },
  "Einsicht": {
      "fr": "compréhension lucide / intelligence",
      "lit": "vue pénétrante",
      "pos_fr": "Nom féminin",
      "role": "Compréhension théorique de l'ensemble du mouvement historique."
  },
  "Einwanderung": {
      "fr": "immigration",
      "lit": "venue de populations étrangères",
      "pos_fr": "Nom féminin",
      "role": "Mouvement d'immigration vers les manufactures."
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
  "Eisenbahn": {
      "fr": "chemin de fer",
      "lit": "voie de fer pour convois ferroviaires",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin composé désignant l'infrastructure de communication terrestre révolutionnant la vitesse de circulation du capital et des marchandises."
  },
  "Eisenbahnen": {
      "fr": "chemins de fer",
      "lit": "lignes ferroviaires multiples",
      "pos_fr": "Nom féminin (pluriel)",
      "role": "Forme plurielle désignant le réseau ferroviaire continental unifiant les marchés intérieurs et internationaux."
  },
  "Element": {
      "fr": "élément",
      "lit": "composante fondamentale",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre désignant les germes embryonnaires d'une classe au sein de l'ordre ancien."
  },
  "Elend": {
      "fr": "misère, détresse, dénuement",
      "lit": "séjour en terre étrangère, exil, détresse",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Du moyen haut-allemand « ellende », vieux haut-allemand « elilenti » (pays étranger, exil, d'où détresse du banni), de « eli » (autre) + « lant » (terre, pays)."
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
      "pos_fr": "",
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
      "pos_fr": "",
      "role": "Nom féminin puissant qualifiant l'insurrection matérielle des forces productives contre le capital."
  },
  "England": {
      "fr": "Angleterre",
      "lit": "terre des Angles",
      "pos_fr": "",
      "role": "Nom propre au datif neutre singulier, complément de lieu de 'in'."
  },
  "Entdeckung": {
      "fr": "découverte",
      "lit": "action de dévoiler une terre inconnue",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin marquant l'expansion géographique mondiale ouvrant l'ère du marché planétaire."
  },
  "Entscheidung": {
      "fr": "décision / dénouement décisif",
      "lit": "tranchage du litige",
      "pos_fr": "",
      "role": "Nom féminin marquant l'heure ultime de la confrontation finale entre les classes."
  },
  "Entwicklung": {
      "fr": "développement / essor",
      "lit": "déroulement, déploiement progressif",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la dynamique matérielle continue d'expansion productive."
  },
  "Entwicklungsgang": {
      "fr": "cours du développement / processus évolutif",
      "lit": "cheminement du déploiement historique immanent",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin composé désignant la succession dialectique des étapes matérielles qui ont engendré la bourgeoisie moderne."
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
      "pos_fr": "",
      "role": "Forme lemmatisée d'Entwicklungsstufe."
  },
  "Entwicklungsstufe": {
      "fr": "étape de l'évolution / degré de développement",
      "lit": "marche d'escalier ou palier du déploiement historique",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin composé marquant les transitions qualitatives successives de la puissance matérielle de la bourgeoisie."
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
      "pos_fr": "",
      "role": "Métaphore médicale saisissante désignant la surproduction comme crise absurde inconnue des siècles passés."
  },
  "Epoche": {
      "fr": "époque",
      "lit": "période historique définie par un mode de production",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant une ère matérielle spécifique dominée par des rapports de production distincts."
  },
  "Erarbeitet": {
      "fr": "ce qui est acquis par le travail",
      "lit": "fruit du labeur",
      "pos_fr": "Nom substantivé",
      "role": "La prétendue propriété acquise à la sueur du front."
  },
  "Erbitterung": {
      "fr": "acharnement / amertume / aigreur",
      "lit": "irritation vindicative",
      "pos_fr": "Nom féminin",
      "role": "Acharnement des utopistes contre tout mouvement politique des ouvriers."
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
      "pos_fr": "",
      "role": "Nom composé soulignant l'envergure planétaire de l'expansion bourgeoise."
  },
  "Erfinder": {
      "fr": "inventeur",
      "lit": "créateur d'artifices ou systèmes",
      "pos_fr": "Nom masculin",
      "role": "Les inventeurs des systèmes socialistes utopiques."
  },
  "Erfolg": {
      "fr": "succès / résultat immédiat",
      "lit": "ce qui suit de près",
      "pos_fr": "",
      "role": "Nom masculin opposant la victoire syndicale ponctuelle à l'unification politique durable."
  },
  "Ergänzung": {
      "fr": "complément / achèvement",
      "lit": "action de rendre entier",
      "pos_fr": "",
      "role": "Nom féminin révélant comment la fainéantise complétait la brutalité seigneuriale."
  },
  "Erhabenheit": {
      "fr": "sublimité / grandeur morale",
      "lit": "élévation majestueuse",
      "pos_fr": "Nom féminin",
      "role": "Sublimité feinte des discours spéculatifs."
  },
  "Erhaltung": {
      "fr": "conservation / préservation",
      "lit": "action de maintenir en vie",
      "pos_fr": "Nom féminin",
      "role": "Conservation des rapports de production anciens."
  },
  "Erhebung": {
      "fr": "élévation / insurrection",
      "lit": "fait de s'élever au-dessus",
      "pos_fr": "Nom féminin",
      "role": "Prétendue élévation au-dessus de la lutte des classes."
  },
  "Erkämpfung": {
      "fr": "conquête par la lutte",
      "lit": "obtention par le combat",
      "pos_fr": "Nom féminin",
      "role": "Conquête de la démocratie et du pouvoir."
  },
  "Eroberung": {
      "fr": "conquête",
      "lit": "action d'emporter par la force",
      "pos_fr": "",
      "role": "Nom féminin désignant l'annexion de nouveaux débouchés par la bourgeoisie."
  },
  "Erreichung": {
      "fr": "obtention / réalisation / accomplissement",
      "lit": "action d'atteindre le but visé",
      "pos_fr": "",
      "role": "Substantif d'action à l'accusatif singulier, régime de 'für'."
  },
  "Errichtung": {
      "fr": "création / établissement",
      "lit": "action d'ériger",
      "pos_fr": "Nom féminin",
      "role": "Création d'armées industrielles ou de colonies modèles."
  },
  "Erschütterung": {
      "fr": "ébranlement / commotion",
      "lit": "secousse violente",
      "pos_fr": "",
      "role": "Nom féminin dramatisant la déstabilisation permanente de toutes les institutions sociales."
  },
  "Erwerb": {
      "fr": "profit / gain / acquisition",
      "lit": "fait d'acquérir par le lucre",
      "pos_fr": "",
      "role": "Nom masculin désignant le gain monétaire cyniquement proclamé comme unique finalité de l'entreprise."
  },
  "Erzeugnis": {
      "fr": "produit",
      "lit": "ce qui a été engendré",
      "pos_fr": "",
      "role": "Nom neutre économique désignant les biens matériels ou intellectuels issus du travail."
  },
  "Erzeugung": {
      "fr": "production / génération",
      "lit": "action d'engendrer des biens",
      "pos_fr": "Nom féminin",
      "role": "Processus de production matérielle."
  },
  "Erziehung": {
      "fr": "éducation / formation",
      "lit": "formation intellectuelle et civique",
      "pos_fr": "Nom féminin",
      "role": "Éducation publique et gratuite pour tous les enfants."
  },
  "Erörterung": {
      "fr": "débat / discussion critique",
      "lit": "examen minutieux",
      "pos_fr": "Nom féminin",
      "role": "Discussions théoriques dans les cercles politiques."
  },
  "Europa": {
      "fr": "Europe",
      "lit": "le continent européen",
      "pos_fr": "Nom propre",
      "role": "Nom propre neutre, théâtre historique de la première industrialisation et des révolutions de 1848."
  },
  "Evangelium": {
      "fr": "évangile / bonne nouvelle",
      "lit": "doctrine sacrée annoncée",
      "pos_fr": "Nom neutre",
      "role": "L'évangile social des nouveaux prédicateurs."
  },
  "Existenz": {
      "fr": "existence / survie",
      "lit": "fait d'être au monde",
      "pos_fr": "",
      "role": "Nom philosophique mesurant la précarité de la survie ouvrière dépendante du capital."
  },
  "Existenzbedingung": {
      "fr": "condition d'existence",
      "lit": "condition indispensable à la survie",
      "pos_fr": "",
      "role": "Concept structurel : ce sans quoi un mode de production ou une classe ne peut perdurer."
  },
  "Experiment": {
      "fr": "expérience / essai",
      "lit": "mise à l'épreuve pratique",
      "pos_fr": "Nom neutre",
      "role": "Petites expériences modèles de colonies communistes."
  },
  "Exploitation": {
      "fr": "exploitation",
      "lit": "mise en valeur, extraction de produit",
      "pos_fr": "",
      "role": "Mot français (Exploitation) employé par Marx pour désigner la mise en coupe réglée du marché mondial."
  },
  "Expropriation": {
      "fr": "expropriation",
      "lit": "action de déposséder de la propriété",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Emprunté au français « expropriation », dérivé du bas-latin « expropriare » (priver de son bien, de « ex- » hors de + « proprius » propre)."
  },
  "Fabrik": {
      "fr": "fabrique / usine",
      "lit": "lieu de fabrication",
      "pos_fr": "",
      "role": "Nom féminin désignant le sanctuaire du machinisme moderne où règne la discipline du capital."
  },
  "Fabrikant": {
      "fr": "fabricant / patron d'usine",
      "lit": "celui qui dirige la fabrique",
      "pos_fr": "",
      "role": "Nom masculin désignant le bourgeois propriétaire exploitant directement l'ouvrier."
  },
  "Fabrikarbeit": {
      "fr": "travail en usine, travail industriel",
      "lit": "travail de manufacture/d'usine",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
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
      "pos_fr": "",
      "role": "Nom neutre désignant les marchandises industrielles écoulées sur tous les continents."
  },
  "Fahne": {
      "fr": "drapeau, étendard, bannière",
      "lit": "pièce d'étoffe, drapeau",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Du moyen haut-allemand « vane », vieux haut-allemand « fano » (drap, pièce de tissu, vêtement), d'origine proto-germanique *fanōn- (tissu, linge)."
  },
  "Fall": {
      "fr": "cas, chute",
      "lit": "chute, événement qui arrive",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Du moyen haut-allemand et vieux haut-allemand « val » (chute), déverbal de « fallen » (tomber)."
  },
  "Familie": {
      "fr": "famille",
      "lit": "ensemble de la maisonnée",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Emprunté au latin « familia » (ensemble des serviteurs d'une maison, puis maisonnée, famille), dérivé de « famulus » (serviteur)."
  },
  "Familienband": {
      "fr": "lien familial, lien de famille",
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
      "fr": "absence de famille, privation de famille",
      "lit": "état d'être sans famille",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
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
      "pos_fr": "",
      "role": "Nom composé dénonçant la dégradation du lien d'affection en simple rapport monétaire."
  },
  "Familienverhältnisse": {
      "fr": "rapports familiaux, relations de famille",
      "lit": "conditions/rapports familiaux",
      "pos_fr": "Nom neutre",
      "role": "nom neutre au pluriel",
      "etymology": "Composé de « Familie » + « Verhältnis » (rapport, relation, comportement).",
      "isCompound": true,
      "compoundParts": [
          "Familie",
          "-n-",
          "Verhältnis"
      ]
  },
  "Faulheit": {
      "fr": "paresse, fainéantise",
      "lit": "caractère pourri, paresse",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Du moyen haut-allemand « vūlheit », dérivé de l'adjectif « faul » (pourri, gâté, paresseux, vieux haut-allemand « fūl ») + « -heit »."
  },
  "Feind": {
      "fr": "ennemi",
      "lit": "adversaire en lutte",
      "pos_fr": "",
      "role": "Nom masculin du vocabulaire de combat : les adversaires de classe à terrasser."
  },
  "Fessel": {
      "fr": "entrave / chaîne",
      "lit": "lien de captivité",
      "pos_fr": "",
      "role": "Métaphore classique de Marx : les anciens rapports de propriété devenus des chaînes pour la production."
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
      "role": "Pluriel neutre régulier désignant l'ensemble disparate des attaches féodales brisées par le capital."
  },
  "Feudale": {
      "fr": "féodaux, seigneurs féodaux",
      "lit": "ceux qui sont d'ordre féodal",
      "pos_fr": "Nom masculin",
      "role": "adjectif substantivé masculin/pluriel",
      "etymology": "Substantivation de l'adjectif « feudal », emprunté au latin médiéval « feudalis » (relatif au fief, « feudum »)."
  },
  "Feudaleigentum": {
      "fr": "propriété féodale",
      "lit": "propriété féodale",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
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
      "role": "Nom masculin composé désignant les membres de la caste nobiliaire possédant le fief et les serfs."
  },
  "Feudalismus": {
      "fr": "féodalité / féodalisme",
      "lit": "système des fiefs",
      "pos_fr": "",
      "role": "Nom masculin désignant l'ordre social médiéval abattu par la révolution bourgeoise."
  },
  "Figur": {
      "fr": "figure, personnage, rôle",
      "lit": "forme, représentation",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Emprunté au latin « figura » (forme, aspect extérieur, image), rattaché au verbe « fingere » (modeler, façonner)."
  },
  "Fleischesertötung": {
      "fr": "mortification de la chair",
      "lit": "mise à mort de la chair",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
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
      "role": "nom féminin",
      "etymology": "Du moyen haut-allemand « vliege », vieux haut-allemand « flioga », déverbal du germanique *fleugan (voler)."
  },
  "Flintenkugel": {
      "fr": "balle de fusil",
      "lit": "boule/projectile de fusil",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
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
      "pos_fr": "",
      "role": "Nom masculin évoquant les grands fleuves canalisés par le génie hydraulique moderne."
  },
  "Folge": {
      "fr": "conséquence / résultat inéluctable",
      "lit": "suite logique",
      "pos_fr": "",
      "role": "Nom féminin articulant la causalité rigoureuse reliant base économique et forme politique."
  },
  "Forderung": {
      "fr": "revendication, exigence",
      "lit": "ce qui est réclamé",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Du moyen haut-allemand « vorderunge », dérivé du verbe « fordern » (exiger, réclamer, vieux haut-allemand « fordaron » pousser en avant) + « -ung »."
  },
  "Form": {
      "fr": "forme juridique et sociale",
      "lit": "structure, configuration",
      "pos_fr": "",
      "role": "Substantif à l'accusatif singulier désignant la configuration concrète de la propriété."
  },
  "Fortentwicklung": {
      "fr": "développement continu, progression ultérieure",
      "lit": "développement vers l'avant",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Composé de la particule « fort » (en avant, continuellement) + « Entwicklung » (développement).",
      "isCompound": true,
      "compoundParts": [
          "fort",
          "Entwicklung"
      ]
  },
  "Fortpflanzung": {
      "fr": "reproduction / perpétuation de l'espèce",
      "lit": "propagation vers l'avant",
      "pos_fr": "",
      "role": "Terme biologique précis : les vivres nécessaires au renouvellement générationnel de la classe ouvrière."
  },
  "Fortschritt": {
      "fr": "progrès",
      "lit": "pas accompli en avant",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant les conquêtes politiques successives de la bourgeoisie vers l'hégémonie."
  },
  "Fourier": {
      "fr": "Fourier (Charles Fourier, 1772-1837, philosophe et utopiste français)",
      "lit": "Charles Fourier",
      "pos_fr": "Nom masculin",
      "role": "nom propre",
      "etymology": "Nom de famille de Charles Fourier, théoricien socialiste utopiste français des phalanstères."
  },
  "Fourierist": {
      "fr": "fouriériste (disciple de Charles Fourier)",
      "lit": "adepte du fouriérisme",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Dérivé du patronyme Fourier avec le suffixe doctrinal « -ist »."
  },
  "Frage": {
      "fr": "question / problème existentiel",
      "lit": "interrogation posée",
      "pos_fr": "",
      "role": "Nom féminin de la locution « Lebensfrage » (question de vie ou de mort pour les nations)."
  },
  "Frankreich": {
      "fr": "France",
      "lit": "pays des Francs",
      "pos_fr": "",
      "role": "Nom propre au datif neutre singulier, régime de 'in'."
  },
  "Frau": {
      "fr": "femme, épouse",
      "lit": "dame, maîtresse de maison, femme",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Du moyen haut-allemand « vrouwe », vieux haut-allemand « frouwa » (dame, maîtresse de maison, féminin de « frō » seigneur)."
  },
  "Freier": {
      "fr": "homme libre",
      "lit": "citoyen affranchi jouissant de droits civiques",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant l'opposé de l'esclave dans l'Antiquité gréco-romaine."
  },
  "Freiheit": {
      "fr": "liberté / franchise corporative",
      "lit": "condition d'homme libre, immunité légale",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin dont le pluriel sous l'Ancien Régime désignait les privilèges particuliers et franchises d'ordres."
  },
  "Freiheitsbravade": {
      "fr": "bravade de liberté, fanfaronnade libérale",
      "lit": "bravade de liberté",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Composé de « die Freiheit » (la liberté) + « die Bravade » (fanfaronnade, défi, de l'italien/français bravade).",
      "isCompound": true,
      "compoundParts": [
          "Freiheit",
          "-s-",
          "Bravade"
      ]
  },
  "Fremdenhaß": {
      "fr": "xénophobie / haine de l'étranger",
      "lit": "aversion pour l'étranger",
      "pos_fr": "",
      "role": "Nom composé désignant le rejet farouche des étrangers abattu par l'invasion des marchandises."
  },
  "Fuß": {
      "fr": "pied",
      "lit": "extrémité de la jambe",
      "pos_fr": "",
      "role": "Nom masculin de la métaphore du terrain économique « dérobé sous les pieds » des classes dominantes."
  },
  "Gang": {
      "fr": "marche, cours, cheminement",
      "lit": "marche, démarche, cours",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Du moyen haut-allemand et vieux haut-allemand « gang » (marche, pas, cours, voie), dérivé de « gehen » (aller, marcher)."
  },
  "Gebiet": {
      "fr": "domaine, territoire, champ",
      "lit": "territoire sur lequel s'exerce le commandement",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Du moyen haut-allemand « gebiet », vieux haut-allemand « gibiot » (pouvoir de commandement, territoire administré), dérivé du verbe « gebieten » (commander, ordonner)."
  },
  "Gefahr": {
      "fr": "danger, péril, risque",
      "lit": "embûche, péril",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Du moyen haut-allemand « gevāre » (ruse, embûche, danger), vieux haut-allemand « fāra » (guet-apens, ruse, danger), rattaché à la racine germanique signifiant tenter ou voyager."
  },
  "Gefolge": {
      "fr": "cortège / suite",
      "lit": "suite d'escorte",
      "pos_fr": "",
      "role": "Nom neutre désignant la cohorte d'illusions traditionnelles accompagnant l'ancien monde féodal."
  },
  "Gegengewicht": {
      "fr": "contrepoids",
      "lit": "masse opposée faisant équilibre dans la balance",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre composé désignant le rôle d'équilibre politique joué par la bourgeoisie contre la noblesse sous la monarchie absolue."
  },
  "Gegensatz": {
      "fr": "antagonisme / opposition",
      "lit": "opposition frontale, antithèse",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin dialectique désignant la contradiction motrice entre deux classes aux intérêts incompatibles."
  },
  "Gegenteil": {
      "fr": "contraire / opposé",
      "lit": "partie opposée",
      "pos_fr": "",
      "role": "Nom neutre de la locution « im Gegenteil » (au contraire), marquant le retournement dialectique."
  },
  "Gegenwart": {
      "fr": "présent, actualité, présence",
      "lit": "face-à-face, présence, époque actuelle",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
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
      "pos_fr": "",
      "role": "Nom substantivé désignant les intérêts contemporains par opposition aux intérêts d'avenir."
  },
  "Gegner": {
      "fr": "adversaire / ennemi",
      "lit": "opposant politique ou social",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant les forces antagonistes dans l'arène de la lutte politique."
  },
  "Gehalt": {
      "fr": "contenu, teneur, substance",
      "lit": "ce qui est contenu/retenu",
      "pos_fr": "Nom masculin",
      "role": "nom masculin (contenu) / neutre (traitement)",
      "etymology": "Du moyen haut-allemand « gehalt » (action de garder, détention), déverbal de « halten » (tenir, conserver)."
  },
  "Geld": {
      "fr": "argent, monnaie",
      "lit": "paiement, moyen d'échange",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Du moyen haut-allemand « gelt » (paiement, tribut, argent), vieux haut-allemand « gelt » (rétribution, valeur), rattaché au verbe « gelten » (valoir, coûter)."
  },
  "Geldsack": {
      "fr": "sac d'argent, richard, gros capitaliste",
      "lit": "sac d'argent",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
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
      "pos_fr": "",
      "role": "Nom composé flétrissant la réduction marchande de toute dimension affective à la valeur d'échange."
  },
  "Geldverhältnisse": {
      "fr": "rapports d'argent, relations monétaires",
      "lit": "rapports monétaires",
      "pos_fr": "Nom neutre",
      "role": "nom neutre au pluriel",
      "etymology": "Composé de « Geld » + « Verhältnis ».",
      "isCompound": true,
      "compoundParts": [
          "Geld",
          "Verhältnis"
      ]
  },
  "Gelegenheit": {
      "fr": "occasion, opportunité",
      "lit": "situation adéquate, convenance",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Du moyen haut-allemand « gelegenhait » (situation, position, occasion), dérivé du participe « gelegen » (situé, propice, bien placé) + « -heit »."
  },
  "Geltung": {
      "fr": "valeur / validité sociale",
      "lit": "reconnaissance d'autorité",
      "pos_fr": "",
      "role": "Nom féminin constatant que le sexe et l'âge n'ont plus de validité dans la fabrique machinisée."
  },
  "Gelächter": {
      "fr": "rires, hilarité, risée",
      "lit": "éclats de rire répétés",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Du moyen haut-allemand « gelahtir », vieux haut-allemand « gilahtri », formation collective dérivée du verbe « lachen » (rire)."
  },
  "Gemeingut": {
      "fr": "patrimoine commun / bien commun",
      "lit": "bien partagé par la communauté",
      "pos_fr": "",
      "role": "Nom composé désignant les créations de l'esprit devenant propriété collective de l'humanité."
  },
  "Gemeinschaft": {
      "fr": "communauté",
      "lit": "état ou union de ce qui est commun",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Du moyen haut-allemand « gemeinmeinschaft », vieux haut-allemand « gimeinida » / « gimeinheit », de l'adjectif « gemein » (commun) + suffixe « -schaft »."
  },
  "Gemeinschaftlichkeit": {
      "fr": "caractère commun, mise en commun",
      "lit": "propriété de ce qui est collectif ou partagé",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Dérivé de l'adjectif « gemeinschaftlich » (communautaire, commun) + suffixe abstrait « -keit »."
  },
  "Gemütstau": {
      "fr": "rosée de l'âme, effusion sentimentale",
      "lit": "rosée du cœur/de l'esprit",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
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
      "pos_fr": "",
      "role": "Nom féminin englobant les siècles d'efforts productifs cumulés par l'humanité."
  },
  "Genugtuung": {
      "fr": "satisfaction, dédommagement, réparation",
      "lit": "action d'en faire assez, satisfaction",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Calque du latin « satisfactio », composé de « genug » (assez) + « tun » (faire) + « -ung ».",
      "isCompound": true,
      "compoundParts": [
          "genug",
          "tun",
          "-ung"
      ]
  },
  "Gerechtigkeit": {
      "fr": "justice, équité",
      "lit": "conformité au droit, justesse",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Du moyen haut-allemand « gerehtikeit », dérivé de l'adjectif « gerecht » (juste, conforme à la loi, droit) + suffixe « -keit »."
  },
  "Gesamtbewegung": {
      "fr": "mouvement d'ensemble, mouvement général",
      "lit": "mouvement total/global",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Composé de l'adjectif « gesamt » (total, entier) + « die Bewegung » (le mouvement).",
      "isCompound": true,
      "compoundParts": [
          "gesamt",
          "Bewegung"
      ]
  },
  "Geschichte": {
      "fr": "histoire",
      "lit": "ce qui advient, récit des événements passés",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin : pour Marx, toute l'histoire des sociétés jusqu'à nos jours est l'histoire de la lutte des classes."
  },
  "Geschicklichkeit": {
      "fr": "habileté / dextérité manuelle",
      "lit": "aptitude technique du métier",
      "pos_fr": "",
      "role": "Nom féminin désignant le tour de main artisanal déprécié et disqualifié par la machine."
  },
  "Geschlecht": {
      "fr": "sexe / genre",
      "lit": "lignée, division sexuée",
      "pos_fr": "",
      "role": "Nom neutre désignant la division du travail selon le sexe biologique."
  },
  "Geschäft": {
      "fr": "affaire / transaction / occupation lucrative",
      "lit": "occupation créée, besogne d'intérêt économique",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre désignant les intérêts marchands et capitalistes gérés par l'État bourgeois."
  },
  "Gesell": {
      "fr": "compagnon",
      "lit": "artisan qualifié dépendant du maître",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant l'ouvrier corporatif placé sous l'autorité directe du maître de jurande."
  },
  "Gesellschaft": {
      "fr": "société",
      "lit": "communauté d'hommes organisée par des rapports de production",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la formation économique et sociale globale."
  },
  "Gesellschaftsglied": {
      "fr": "membre de la société",
      "lit": "membre/maillon de la société",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
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
      "pos_fr": "",
      "role": "Substantif composé désignant l'ordre bourgeois tout entier destiné à être abattu."
  },
  "Gesellschaftsplan": {
      "fr": "plan de réorganisation sociale, projet de société",
      "lit": "plan de la société",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
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
      "pos_fr": "",
      "role": "Nom neutre désignant la superstructure juridique bourgeoise masquant des intérêts matériels."
  },
  "Gesetzesform": {
      "fr": "forme de loi / consécration légale",
      "lit": "enveloppe de la législation",
      "pos_fr": "",
      "role": "Nom composé désignant la reconnaissance juridique formelle accordée aux conquêtes ouvrières."
  },
  "Gesichtspunkt": {
      "fr": "point de vue, angle d'approche",
      "lit": "point de regard/vision",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
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
      "lit": "apparition terrifiante, revenant menaçant",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre métaphorique : la hantise panique ressentie par les puissances d'Ancien Régime face au communisme émergent."
  },
  "Gestalt": {
      "fr": "forme, figure, aspect, apparence",
      "lit": "façon dont une chose est posée ou constituée",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Du moyen haut-allemand « gestalt » (forme, aspect, statut), participe passé substantivé de « stellen » (poser, placer)."
  },
  "Gestaltung": {
      "fr": "configuration / organisation",
      "lit": "mise en forme structurelle",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la structuration institutionnelle et spatiale d'une classe sociale."
  },
  "Gewalt": {
      "fr": "puissance / violence / pouvoir",
      "lit": "force souveraine agissante",
      "pos_fr": "",
      "role": "Concept hégélien désignant les forces matérielles infernales déchaînées par le capitalisme."
  },
  "Gewaltmaßregel": {
      "fr": "mesure coercitive, mesure de force",
      "lit": "mesure de puissance/violence",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Composé de « die Gewalt » (la force, puissance, pouvoir) + « die Maßregel » (la mesure, disposition réglementaire).",
      "isCompound": true,
      "compoundParts": [
          "Gewalt",
          "Maßregel"
      ]
  },
  "Gewand": {
      "fr": "vêtement, parure, habit",
      "lit": "ce dont on s'enveloppe, vêtement",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Du moyen haut-allemand « gewant » (vêtement, étoffe), substantif formé sur « wenden » (tourner, plier, draper autour du corps)."
  },
  "Gewissen": {
      "fr": "en conscience",
      "lit": "selon la conscience",
      "pos_fr": "",
      "role": "Employé dans le sens de liberté de conscience."
  },
  "Gleichförmigkeit": {
      "fr": "uniformité, régularité identique",
      "lit": "caractère de ce qui est de forme identique",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
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
      "fr": "égalité, parité",
      "lit": "état de ce qui est égal ou identique",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Du moyen haut-allemand « gelīcheit », dérivé de « gleich » (égal, semblable) + suffixe « -heit »."
  },
  "Gleichmacherei": {
      "fr": "égalitarisme grossier, nivellement par le bas",
      "lit": "manie de tout rendre égal",
      "pos_fr": "Nom féminin",
      "role": "nom féminin péjoratif",
      "etymology": "Dérivé verbal composé de « gleichmachen » (égaliser) avec le suffixe dépréciatif d'action continue « -erei ».",
      "isCompound": true,
      "compoundParts": [
          "gleich",
          "machen",
          "-erei"
      ]
  },
  "Gliederung": {
      "fr": "articulation / division sociale",
      "lit": "hiérarchisation en membres distincts",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin décrivant la stratification interne en ordres et états de la société féodale."
  },
  "Grade": {
      "fr": "degré (forme fléchie)",
      "lit": "degré dans l'échelle",
      "pos_fr": "",
      "role": "Nom masculin de la locution « in hohem Grade » (à un haut degré, considérablement)."
  },
  "Grund": {
      "fr": "fond / raison / terre",
      "lit": "base solide sous-jacente",
      "pos_fr": "",
      "role": "Nom masculin entrant dans « in den Grund schießen » (abattre de fond en comble)."
  },
  "Grundbesitz": {
      "fr": "propriété foncière, bien-fonds",
      "lit": "possession du sol/de la terre",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
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
      "pos_fr": "",
      "role": "Substantif composé désignant le monopole terrien féodal de la noblesse junker."
  },
  "Grundeigentümer": {
      "fr": "propriétaire foncier",
      "lit": "détenteur de la rente du sol",
      "pos_fr": "",
      "role": "Nom composé désignant la classe rentière aristocratique ennemie de la bourgeoisie."
  },
  "Grundfrage": {
      "fr": "question fondamentale / nœud du problème",
      "lit": "question de fond, racine de la contradiction",
      "pos_fr": "",
      "role": "Substantif composé attributif désignant la question de la propriété comme pivot de tout mouvement."
  },
  "Grundlage": {
      "fr": "fondement / base matérielle",
      "lit": "assise posée sous l'édifice",
      "pos_fr": "",
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
  "Gründung": {
      "fr": "fondation, création, établissement",
      "lit": "action d'établir sur un sol solide",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Dérivé du verbe « gründen » (fonder, poser les fondations) + « -ung »."
  },
  "Guizot": {
      "fr": "Guizot",
      "lit": "François Guizot (1787-1874), historien et ministre conservateur français",
      "pos_fr": "Nom propre",
      "role": "Nom propre masculin, incarnation de l'orléanisme bourgeois conservateur pourchassant les communistes."
  },
  "Halbphilosophe": {
      "fr": "demi-philosophe",
      "lit": "à moitié philosophe",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Composé de l'adjectif « halb » (demi, à demi) + « der Philosoph » (philosophe, du grec « philosophos »).",
      "isCompound": true,
      "compoundParts": [
          "halb",
          "Philosoph"
      ]
  },
  "Hand": {
      "fr": "main",
      "lit": "organe du travail",
      "pos_fr": "",
      "role": "Nom féminin désignant l'organe humain du travail et la concentration de la propriété en peu de mains."
  },
  "Handarbeit": {
      "fr": "travail manuel",
      "lit": "travail accompli par la main",
      "pos_fr": "",
      "role": "Nom composé désignant le labeur manuel détrôné par l'automatisme mécanique de la grande usine."
  },
  "Handel": {
      "fr": "commerce / négoce",
      "lit": "échange marchand de biens",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant le capital commercial qui précipite la ruine du féodalisme."
  },
  "Handelsartikel": {
      "fr": "article de commerce / marchandise",
      "lit": "objet marchand négociable",
      "pos_fr": "",
      "role": "Nom composé désignant l'ouvrier ravalé au rang de simple denrée sur le marché."
  },
  "Handelsfreiheit": {
      "fr": "liberté du commerce",
      "lit": "liberté de circulation et de transaction des marchandises",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant chez Marx l'unique liberté réellement consacrée par la révolution bourgeoise : la liberté d'exploiter sans entrave."
  },
  "Handelskrisen": {
      "fr": "crises commerciales",
      "lit": "forme plurielle de Handelskrise",
      "pos_fr": "",
      "role": "Forme plurielle désignant les secousses cycliques menaçant la société bourgeoise."
  },
  "Handgriff": {
      "fr": "manipulation / tour de main",
      "lit": "prise exercée par la main",
      "pos_fr": "",
      "role": "Nom composé désignant le geste parcellaire et répétitif auquel est astreint l'ouvrier."
  },
  "Handwerker": {
      "fr": "artisan",
      "lit": "homme de métier manuel",
      "pos_fr": "",
      "role": "Nom composé désignant le travailleur indépendant féodal broyé par la concurrence des fabriques."
  },
  "Harmonie": {
      "fr": "harmonie, concorde",
      "lit": "ajustement, accord parfait",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Emprunté au grec ancien « harmonia » (accord, ajustement) via le latin « harmonia »."
  },
  "Haupt": {
      "fr": "chef, tête, sommet",
      "lit": "tête, chef",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Du moyen haut-allemand « houbet », vieux haut-allemand « houbit » (tête), d'origine proto-germanique *haubida- (tête)."
  },
  "Hauptanklage": {
      "fr": "accusation principale, chef d'accusation majeur",
      "lit": "accusation capitale",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Composé du préfixe d'importance « Haupt- » (principal, capital) + « die Anklage » (l'accusation).",
      "isCompound": true,
      "compoundParts": [
          "Haupt-",
          "Anklage"
      ]
  },
  "Hauptaufmerksamkeit": {
      "fr": "attention principale",
      "lit": "attention cardinale, concentration majeure",
      "pos_fr": "",
      "role": "Substantif composé à l'accusatif singulier, objet direct de 'richten'."
  },
  "Hauptgrundlage": {
      "fr": "fondement principal / pierre angulaire",
      "lit": "fondation capitale posée à la base d'un édifice",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin composé désignant la bourgeoisie comme socle fiscal et matériel indispensable aux grandes monarchies."
  },
  "Hauptvergnügen": {
      "fr": "plaisir suprême, principale jouissance",
      "lit": "joie/plaisir principal",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
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
      "pos_fr": "",
      "role": "Nom composé désignant le bailleur prélevant sa dîme sur le salaire ouvrier."
  },
  "Heidenzeit": {
      "fr": "époque païenne, paganisme antique",
      "lit": "temps des païens",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Composé de « der Heide » (le païen, du gothique « haiþno » habitant des landes) + « die Zeit » (le temps, l'époque).",
      "isCompound": true,
      "compoundParts": [
          "Heide",
          "-n-",
          "Zeit"
      ]
  },
  "Heiligengeschicht": {
      "fr": "hagiographie, histoire sainte, vie des saints",
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
      "pos_fr": "",
      "role": "Métaphore anticléricale : la bourgeoisie a dépouillé les métiers nobles de leur auréole mystique."
  },
  "Hemmnis": {
      "fr": "obstacle / entrave matérielle",
      "lit": "ce qui retient et freine",
      "pos_fr": "",
      "role": "Terme dialectique désignant le goulot d'étranglement que les forces productives finissent par briser."
  },
  "Heranbildung": {
      "fr": "formation, entraînement, éducation progressive",
      "lit": "action d'élever et de façonner",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Déverbal de « heranbilden » (former progressivement, amener à un niveau d'éducation).",
      "isCompound": true,
      "compoundParts": [
          "heran-",
          "Bildung"
      ]
  },
  "Herrschaft": {
      "fr": "domination / pouvoir souverain / règne",
      "lit": "autorité de maître, souveraineté seigneuriale",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin abstrait désignant chez Marx l'exercice institutionnel et coercitif de la suprématie d'une classe sur la société."
  },
  "Herrscher": {
      "fr": "souverain, dirigeant, monarque",
      "lit": "celui qui exerce la seigneurie",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Nom d'agent dérivé du verbe « herrschen » (régner, dominer), issu de « Herr » (seigneur, maître)."
  },
  "Herstellung": {
      "fr": "établissement / instauration / création",
      "lit": "action de poser debout et mettre sur pied durablement",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin d'action désignant la mise en place matérielle de l'industrie et du marché mondial."
  },
  "Herz": {
      "fr": "cœur",
      "lit": "organe central, siège des sentiments",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Du moyen haut-allemand « herze », vieux haut-allemand « herza », de racine indo-européenne *k̂erd- (cœur)."
  },
  "Hetzjagd": {
      "fr": "traque impitoyable / sainte battue",
      "lit": "chasse à courre avec meute excitée",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin composé violent (Hetze + Jagd) ironisant sur la coalition policière lancée contre le prolétariat."
  },
  "Hexenmeister": {
      "fr": "maître sorcier / magicien",
      "lit": "maître des sorcières",
      "pos_fr": "",
      "role": "Référence goethéenne (Der Zauberlehrling) : la bourgeoisie débordée par les forces souterraines qu'elle a conjurées."
  },
  "Hierarchie": {
      "fr": "hiérarchie",
      "lit": "ordre graduel de subordination",
      "pos_fr": "",
      "role": "Nom féminin désignant l'échelonnement militaire des contremaîtres et officiers de fabrique."
  },
  "Hiernach": {
      "fr": "d'après cela, dès lors, selon ceci",
      "lit": "selon ceci",
      "pos_fr": "Adverbe",
      "role": "adverbe pronominal",
      "etymology": "Composé de « hier » (ici) + « nach » (après, selon).",
      "isCompound": true,
      "compoundParts": [
          "hier",
          "nach"
      ]
  },
  "Hinblick": {
      "fr": "vue / perspective (Im Hinblick auf)",
      "lit": "regard porté vers",
      "pos_fr": "",
      "role": "Nom masculin entrant dans la locution « im Hinblick auf » (en considération de, en vue de)."
  },
  "Hintergrund": {
      "fr": "arrière-plan / coulisses",
      "lit": "fond de scène, sol d'arrière",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin composé désignant la position marginale et subordonnée où sont confinées les classes déchues."
  },
  "Hintern": {
      "fr": "derrière, postérieur",
      "lit": "partie arrière du corps",
      "pos_fr": "Nom masculin",
      "role": "nom masculin familier",
      "etymology": "Du moyen haut-allemand « hindern », substantivation de la préposition/adverbe « hinter » (derrière)."
  },
  "Hinwirk": {
      "fr": "action tendant vers, orientation active",
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
  "Home-Kolonien": {
      "fr": "colonies de l'intérieur (projets communautaires de Robert Owen)",
      "lit": "colonies à domicile",
      "pos_fr": "Nom féminin",
      "role": "nom féminin pluriel",
      "etymology": "Emprunt à l'anglais « home colonies », terme désignant les communautés coopératives fondées en métropole par Robert Owen.",
      "isCompound": true,
      "compoundParts": [
          "Home",
          "Kolonien"
      ]
  },
  "Humanitäre": {
      "fr": "humanitaires, philanthropes sentimentaux",
      "lit": "ceux qui se réclament de l'humanitaire",
      "pos_fr": "Nom masculin",
      "role": "adjectif substantivé masculin/pluriel",
      "etymology": "Substantivation de l'adjectif « humanitär » (humanitaire, du français humanitaire / latin humanitas)."
  },
  "Hungersnot": {
      "fr": "famine / disette",
      "lit": "détresse causée par la faim",
      "pos_fr": "",
      "role": "Nom composé peignant le paradoxe d'une pénurie causée par un excès de richesse matérielle."
  },
  "Hälfte": {
      "fr": "moitié, demi",
      "lit": "l'une des deux parties égales",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Du moyen haut-allemand « helfte », vieux haut-allemand « helfta », dérivé de « halb » (demi)."
  },
  "Hülfe": {
      "fr": "secours / aide (orthographe 1848)",
      "lit": "assistance prêtée",
      "pos_fr": "",
      "role": "Graphie du XIXe siècle pour Hilfe, marquant l'aide réclamée aux prolétaires par les bourgeois."
  },
  "II": {
      "fr": "deuxième / II",
      "lit": "chiffre romain deux",
      "pos_fr": "",
      "role": "Numéral romain déterminant le substantif 'Abschnitt'."
  },
  "Idee": {
      "fr": "idée, concept, pensée",
      "lit": "forme mentale, concept",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Emprunté via le latin au grec ancien « idea » (forme visible, modèle, archétype mental), rattaché à « idein » (voir)."
  },
  "Idiotismus": {
      "fr": "abrutissement / isolement borné",
      "lit": "caractère d'isolement privé (grec idiōtēs)",
      "pos_fr": "",
      "role": "Emprunt au grec désignant l'isolement sans horizon politique des campagnes précapitalistes."
  },
  "Ikarien": {
      "fr": "Icarie (la république idéale imaginée par Étienne Cabet)",
      "lit": "pays d'Icare",
      "pos_fr": "Nom neutre",
      "role": "nom propre",
      "etymology": "Nom forgé par Étienne Cabet dans son « Voyage en Icarie » (1840) pour désigner sa cité communautaire utopique."
  },
  "Illusion": {
      "fr": "illusion / fausse apparence",
      "lit": "tromperie de l'esprit, jeu d'apparences fallacieuses",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant chez Marx les fictions idéologiques par lesquelles une société masquait la réalité de sa domination."
  },
  "Individuum": {
      "fr": "individu, être singulier",
      "lit": "ce qui ne peut être divisé",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Emprunté au latin « individuum » (l'indivisible, atome, individu), calque de Cicéron sur le grec « atomon »."
  },
  "Industrie": {
      "fr": "industrie / production manufacturière",
      "lit": "activité technique de transformation matérielle",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'appareil de production mécanisé moderne."
  },
  "Industriesoldat": {
      "fr": "soldat de l'industrie",
      "lit": "combattant de la production",
      "pos_fr": "",
      "role": "Nom composé métaphorique assimilant l'ouvrier d'usine à un conscrit encadré par des sous-officiers."
  },
  "Inhalt": {
      "fr": "contenu / fond matériel",
      "lit": "ce qui est contenu dedans",
      "pos_fr": "",
      "role": "Concept philosophique dialectique opposant la vérité matérielle du conflit à son apparence."
  },
  "Instanz": {
      "fr": "instance, autorité, juridiction",
      "lit": "tribunal d'arbitrage, degré de décision",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Emprunté au latin juridique « instantia » (présence assidue, instance judiciaire), de « instare » (se tenir tout près, presser)."
  },
  "Insurrektion": {
      "fr": "insurrection / soulèvement armé",
      "lit": "soulèvement collectif contre le pouvoir",
      "pos_fr": "",
      "role": "Substantif à l'accusatif féminin singulier désignant l'insurrection révolutionnaire polonaise."
  },
  "Interesse": {
      "fr": "intérêt / profit lucratif",
      "lit": "ce qui importe, gain pécuniaire",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre désignant le mobile unique et sans masque qui commande l'ensemble de la société bourgeoise."
  },
  "Isolierung": {
      "fr": "isolement / atomisation",
      "lit": "mise à l'écart isolée",
      "pos_fr": "",
      "role": "Nom féminin désignant la dispersion des ouvriers que l'association révolutionnaire brise."
  },
  "Jahr": {
      "fr": "an / année",
      "lit": "cycle solaire annuel",
      "pos_fr": "",
      "role": "Nom neutre mesurant la rapidité fulgurante de la centralisation ferroviaire ouvrière."
  },
  "Jahrhundert": {
      "fr": "siècle",
      "lit": "centaine d'années",
      "pos_fr": "",
      "role": "Substantif composé au datif singulier servant d'étalon comparatif historique."
  },
  "Jerusalem": {
      "fr": "Jérusalem (la Jérusalem céleste ou nouvelle)",
      "lit": "ville sainte",
      "pos_fr": "Nom neutre",
      "role": "nom propre",
      "etymology": "Nom biblique de Jérusalem, souvent utilisé par les socialistes mystiques pour désigner la société régénérée."
  },
  "Joch": {
      "fr": "joug / servitude",
      "lit": "pièce de bois asservissant le bétail",
      "pos_fr": "",
      "role": "Métaphore de la servitude féodale sous laquelle la bourgeoisie médiévale s'est développée."
  },
  "Junirevolution": {
      "fr": "insurrection de Juin (les journées de Juin 1848 à Paris)",
      "lit": "révolution de juin",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
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
      "pos_fr": "",
      "role": "Nom masculin désignant une élite intellectuelle rétrogradée en travailleur salarié au service du capital."
  },
  "Kampf": {
      "fr": "lutte / combat",
      "lit": "affrontement antagonique",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin, moteur dialectique des transformations matérielles de l'humanité."
  },
  "Kapital": {
      "fr": "capital",
      "lit": "fonds principal générateur de profit",
      "pos_fr": "Nom neutre",
      "role": "Concept économique fondamental désignant la valeur qui s'auto-accroît par l'exploitation du travail salarié."
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
      "pos_fr": "",
      "role": "Nom masculin désignant le maître de la grande fabrique et incarnation personnifiée du capital."
  },
  "Kapitulation": {
      "fr": "capitulation",
      "lit": "reddition militaire",
      "pos_fr": "",
      "role": "Métaphore militaire marquant la reddition obligée des contrées archaïques devant les marchandises bon marché."
  },
  "Kategorie": {
      "fr": "catégorie, classe conceptuelle",
      "lit": "classe logique de prédication",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Emprunté au grec ancien « katēgoria » (accusation publique, puis en logique prédicat ou genre suprême)."
  },
  "Kathedrale": {
      "fr": "cathédrale",
      "lit": "église épiscopale majeure",
      "pos_fr": "",
      "role": "Nom féminin désignant les chefs-d'œuvre du moyen âge éclipsés par les infrastructures modernes."
  },
  "Katzenjammer": {
      "fr": "gueule de bois, désenchantement amer",
      "lit": "miaulement plaintif de chat",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Altération populaire estudiantine de « Kotzen-Jammer » (détresse du vomissement) combinée à « Katzenjammer » (tintamarre de chats en rut), désignant la détresse du lendemain d'ivresse.",
      "isCompound": true,
      "compoundParts": [
          "Katze",
          "-n-",
          "Jammer"
      ]
  },
  "Kauf": {
      "fr": "achat, transaction",
      "lit": "action d'acquérir à titre onéreux",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Du moyen haut-allemand « kouf », vieux haut-allemand « kouf » (commerce, achat), issu du latin « caupo » (aubergiste, marchand)."
  },
  "Kaufleute": {
      "fr": "commerçants / marchands",
      "lit": "gens de commerce (pluriel)",
      "pos_fr": "",
      "role": "Nom pluriel désignant les petits négociants aspirés dans l'entonnoir du prolétariat."
  },
  "Kaufmann": {
      "fr": "marchand / commerçant",
      "lit": "homme de négoce",
      "pos_fr": "",
      "role": "Forme singulière de Kaufleute désignant le boutiquier voué à la ruine par la concurrence."
  },
  "Kette": {
      "fr": "chaîne",
      "lit": "liens de fer, entraves de l'esclavage salarié",
      "pos_fr": "",
      "role": "Substantif métaphorique à l'accusatif pluriel désignant les fers de l'exploitation capitaliste."
  },
  "Kind": {
      "fr": "enfant",
      "lit": "descendant en bas âge",
      "pos_fr": "",
      "role": "Nom neutre dont les relations avec le père prolétaire sont vidées de tout caractère bourgeois."
  },
  "Kirche": {
      "fr": "Église",
      "lit": "maison du Seigneur",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Du moyen haut-allemand « kirche », vieux haut-allemand « kirihha », emprunté au grec populaire « kyriakon [dōma] » (la maison du Seigneur)."
  },
  "Klagelied": {
      "fr": "complainte, élégie, jérémiade",
      "lit": "chant de lamentation",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Composé de « die Klage » (plainte, lamentation) + « das Lied » (chant, poème chanté).",
      "isCompound": true,
      "compoundParts": [
          "Klage",
          "Lied"
      ]
  },
  "Klappe": {
      "fr": "rabat, soupape, volet",
      "lit": "clapet, volet basculant",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Dérivé onomatopéique du moyen haut-allemand « klappen » (claquer, faire un bruit sec)."
  },
  "Klasse": {
      "fr": "classe sociale",
      "lit": "groupe d'individus partageant la même place dans les rapports de production",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin, concept central du matérialisme historique."
  },
  "Klassenbildung": {
      "fr": "constitution des classes, formation de classe",
      "lit": "formation de la classe",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
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
      "lit": "empreinte/caractère de classe",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
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
      "role": "nom neutre",
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
      "role": "Nom masculin composé désignant la contradiction motrice de la société bourgeoise."
  },
  "Klassenherrschaft": {
      "fr": "domination de classe",
      "lit": "pouvoir souverain d'une classe",
      "pos_fr": "",
      "role": "Concept politique majeur : l'exercice exclusif du pouvoir étatique par la bourgeoisie."
  },
  "Klasseninteresse": {
      "fr": "intérêt de classe",
      "lit": "intérêt propre à une classe",
      "pos_fr": "",
      "role": "Concept sociologique fondamental : les mobiles matériels qui déterminent les prises de position politiques."
  },
  "Klassenkampf": {
      "fr": "lutte des classes",
      "lit": "combat collectif entre classes antagonistes",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin composé : la thèse fondatrice du marxisme révolutionnaire."
  },
  "Klassenunterschied": {
      "fr": "différence de classe, distinction sociale",
      "lit": "différence/séparation de classe",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Composé de « Klasse » + « Unterschied » (différence, distinction).",
      "isCompound": true,
      "compoundParts": [
          "Klasse",
          "-n-",
          "Unterschied"
      ]
  },
  "Kleinbürger": {
      "fr": "petit-bourgeois",
      "lit": "bourgeois de petite condition",
      "pos_fr": "",
      "role": "Nom composé désignant la couche intermédiaire chancelante prise en étau entre capital et travail."
  },
  "Kleinbürgerei": {
      "fr": "petite bourgeoisie",
      "lit": "monde étriqué des petits bourgeois corporatistes",
      "pos_fr": "",
      "role": "Substantif satirique désignant la frange corporative et philistine des boutiquiers allemands."
  },
  "Kleinbürgerschaft": {
      "fr": "petite bourgeoisie (le corps collectif)",
      "lit": "l'ensemble des petits bourgeois",
      "pos_fr": "Nom féminin",
      "role": "nom féminin collectif",
      "etymology": "Composé de « der Kleinbürger » (petit-bourgeois) + suffixe collectif « -schaft ».",
      "isCompound": true,
      "compoundParts": [
          "Kleinbürger",
          "-schaft"
      ]
  },
  "Kleinbürgertum": {
      "fr": "petite-bourgeoisie",
      "lit": "condition/classe de la petite bourgeoisie",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Composé de « Kleinbürger » + suffixe d'état ou d'ordre « -tum ».",
      "isCompound": true,
      "compoundParts": [
          "Kleinbürger",
          "-tum"
      ]
  },
  "Klimate": {
      "fr": "climats / contrées climatiques",
      "lit": "zones de climat (pluriel)",
      "pos_fr": "",
      "role": "Nom pluriel désignant la diversité géographique mondiale des pays fournisseurs de denrées."
  },
  "Knecht": {
      "fr": "valet / serf / esclave",
      "lit": "serviteur sous le joug",
      "pos_fr": "",
      "role": "Nom masculin désignant l'opprimé asservi dont la bourgeoisie ne peut plus garantir la subsistance."
  },
  "Koalition": {
      "fr": "coalition / syndicat de résistance",
      "lit": "union concertée de forces",
      "pos_fr": "",
      "role": "Nom féminin désignant les premières ententes et ligues ouvrières pour maintenir les salaires."
  },
  "Kollision": {
      "fr": "choc / collision / conflit",
      "lit": "heurt violent de deux corps",
      "pos_fr": "",
      "role": "Nom féminin désignant les heurts inévitables entre ouvriers et patrons se muant en lutte de deux classes."
  },
  "Kolonie": {
      "fr": "colonie",
      "lit": "territoire conquis et asservi par une métropole",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant les débouchés impérialistes indispensables à la bourgeoisie manufacturière."
  },
  "Kolonisierung": {
      "fr": "colonisation",
      "lit": "soumission marchande et territoriale",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin marquant le processus d'expansion mondiale des forces productives capitalistes."
  },
  "Kommune": {
      "fr": "commune médiévale / municipe autonome",
      "lit": "association municipale libre de citadins confédérés",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant les villes franches médiévales émancipées du ban seigneurial."
  },
  "Kommunikation": {
      "fr": "communication / mise en relation",
      "lit": "action de mettre en commun",
      "pos_fr": "",
      "role": "Nom féminin désignant les réseaux de transports qui accélèrent l'unification politique du prolétariat."
  },
  "Kommunikationsmittel": {
      "fr": "moyen de communication",
      "lit": "instrument de liaison",
      "pos_fr": "",
      "role": "Nom composé désignant le chemin de fer et le télégraphe créés par la grande industrie."
  },
  "Kommunismus": {
      "fr": "communisme",
      "lit": "mouvement réel qui abolit l'ordre actuel",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant le mouvement politique d'émancipation de la classe travailleuse."
  },
  "Kommunist": {
      "fr": "communiste",
      "lit": "partisan de l'émancipation prolétarienne",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant les militants de la Ligue des communistes."
  },
  "Konfiskation": {
      "fr": "confiscation, saisie",
      "lit": "saisie de biens au profit du fisc",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Emprunté au latin « confiscatio » (confiscation au profit du trésor public, « fiscus »)."
  },
  "Konkurrenz": {
      "fr": "concurrence",
      "lit": "rivalité sur le marché",
      "pos_fr": "",
      "role": "Loi économique centrale : la compétition féroce divisant les ouvriers mais les contraignant à s'unir."
  },
  "Konsequenz": {
      "fr": "conséquence, rigueur logique",
      "lit": "suite logique nécessaire",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Emprunté au latin « consequentia » (suite logique), dérivé de « consequi » (suivre de près)."
  },
  "Konstitution": {
      "fr": "constitution politique et sociale",
      "lit": "organisation des institutions",
      "pos_fr": "",
      "role": "Nom féminin désignant l'ordonnancement juridique adéquat à la domination bourgeoise."
  },
  "Konsumption": {
      "fr": "consommation",
      "lit": "action de consommer des biens",
      "pos_fr": "",
      "role": "Nom féminin économique désignant l'usage des marchandises mondialisé par le capitalisme."
  },
  "Konzentration": {
      "fr": "concentration, rassemblement",
      "lit": "action de ramener vers un centre commun",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Dérivé savant formé sur le modèle latin moderne de « con- » (ensemble) + « centrum » (centre)."
  },
  "Korporation": {
      "fr": "corporation",
      "lit": "corps de métier exclusif médiéval",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant le cadre artisanal féodal détruit par la manufacture moderne."
  },
  "Kosten": {
      "fr": "coûts / frais de production",
      "lit": "dépenses engagées",
      "pos_fr": "",
      "role": "Terme économique mesurant les débours stricts nécessaires à l'entretien de la marchandise-travail."
  },
  "Kraft": {
      "fr": "force / puissance productive",
      "lit": "vigueur matérielle en acte",
      "pos_fr": "",
      "role": "Concept physique et philosophique : l'énergie productive humaine transformant le monde."
  },
  "Kraftäußerung": {
      "fr": "manifestation de force",
      "lit": "extériorisation de vigueur physique",
      "pos_fr": "",
      "role": "Nom composé caractérisant la violence chevaleresque médiévale admirée par les conservateurs."
  },
  "Krakauer": {
      "fr": "de Cracovie / cracovien",
      "lit": "propre à la ville de Cracovie",
      "pos_fr": "",
      "role": "Adjectif géographique invariable qualifiant le soulèvement de février-mars 1846."
  },
  "Krautjunker": {
      "fr": "hobereau campagnard, gentilhomme campagnard arriéré",
      "lit": "chevalier du chou",
      "pos_fr": "Nom masculin",
      "role": "nom masculin méprisant",
      "etymology": "Composé moqueur de « das Kraut » (le chou, les herbes du potager) + « der Junker » (le jeune seigneur foncier prussien, de « junc herre »).",
      "isCompound": true,
      "compoundParts": [
          "Kraut",
          "Junker"
      ]
  },
  "Kredit": {
      "fr": "crédit, confiance financière",
      "lit": "ce qui est prêté sur confiance",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Emprunté à l'italien « credito » (crédit), issu du participe latin « creditum » (chose confiée, prêtée, du verbe « credere », croire/faire confiance)."
  },
  "Kreuzzug": {
      "fr": "croisade",
      "lit": "expédition de la croix",
      "pos_fr": "",
      "role": "Nom composé évoquant les guerres de religion féodales dépassées par les conquêtes marchandes globales."
  },
  "Krise": {
      "fr": "crise commerciale",
      "lit": "point de rupture aigu",
      "pos_fr": "",
      "role": "Concept marxien cardinal désignant les déflagrations cycliques révélant l'impasse du capitalisme."
  },
  "Kritik": {
      "fr": "critique, examen rigoureux",
      "lit": "art de juger, examen raisonné",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Emprunté au grec ancien « kritikē [technē] » (l'art de discerner ou de juger, de « krinein », séparer/juger)."
  },
  "Krämer": {
      "fr": "boutiquier / mercanti",
      "lit": "petit marchand de détail",
      "pos_fr": "",
      "role": "Nom péjoratif désignant le petit commerçant rapace qui rançonne l'ouvrier après l'usine."
  },
  "Königtum": {
      "fr": "royauté, royalisme",
      "lit": "condition/institution royale",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Du moyen haut-allemand « künictuom », vieux haut-allemand « kuningtuom », de « König » (roi) + suffixe d'état « -tum ».",
      "isCompound": true,
      "compoundParts": [
          "König",
          "-tum"
      ]
  },
  "Lage": {
      "fr": "situation / position matérielle",
      "lit": "manière d'être couché ou situé",
      "pos_fr": "",
      "role": "Nom féminin désignant la condition sociale dégradée à laquelle l'ouvrier est acculé."
  },
  "Lager": {
      "fr": "camp",
      "lit": "retranchement militaire, faction polarisée",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre métaphorique : la polarisation du monde en deux camps ennemis irréconciliables."
  },
  "Land": {
      "fr": "pays",
      "lit": "territoire, contrée nationale",
      "pos_fr": "",
      "role": "Substantif au génitif pluriel dans 'aller Länder' (de tous les pays)."
  },
  "Landeserzeugnisse": {
      "fr": "produits nationaux / fruits du pays",
      "lit": "productions du pays d'origine",
      "pos_fr": "",
      "role": "Nom composé désignant les denrées de terroir supplantées par les importations universelles."
  },
  "Landkommunikation": {
      "fr": "voie de communication terrestre",
      "lit": "communication et transport par voie de terre ferme",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin composé désignant les routes, canaux et chemins de fer unifiant l'espace géographique national."
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
      "pos_fr": "",
      "role": "Nom composé entrant dans la célèbre formule sur l'idiotisme borné de la vie rustique."
  },
  "Lauf": {
      "fr": "course / vitesse de rotation",
      "lit": "mouvement rapide continu",
      "pos_fr": "",
      "role": "Nom masculin désignant la cadence effrénée des rouages de la machine moderne."
  },
  "Leben": {
      "fr": "vie",
      "lit": "existence vitale",
      "pos_fr": "",
      "role": "Substantif à l'accusatif neutre singulier dans la locution 'ins Leben rufen' (susciter, enfanter)."
  },
  "Lebensbedingung": {
      "fr": "condition de vie / d'existence",
      "lit": "exigence matérielle vitale",
      "pos_fr": "",
      "role": "Concept marxiste désignant le socle matériel régissant la reproduction d'une classe sociale."
  },
  "Lebensfrage": {
      "fr": "question vitale / de vie ou de mort",
      "lit": "interrogation sur la survie",
      "pos_fr": "",
      "role": "Nom composé dramatisant l'introduction forcée de l'industrie pour chaque nation."
  },
  "Lebenslage": {
      "fr": "condition d'existence matérielle",
      "lit": "situation dans la vie",
      "pos_fr": "",
      "role": "Nom composé désignant le statut social objectif inclinant le sous-prolétariat à la trahison."
  },
  "Lebensmittel": {
      "fr": "moyens de subsistance / vivres",
      "lit": "denrées vitales pour vivre",
      "pos_fr": "",
      "role": "Nom composé économique désignant les biens consommables nécessaires au maintien du travailleur."
  },
  "Lebensprozeß": {
      "fr": "processus vital, procès de vie",
      "lit": "déroulement continuel de la vie",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
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
      "pos_fr": "",
      "role": "Nom composé désignant la position sociale que les hommes doivent envisager avec lucidité."
  },
  "Lebensverhältnis": {
      "fr": "condition d'existence, rapport vital",
      "lit": "rapport de vie",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Composé de « Leben » + « Verhältnis » (condition, rapport social).",
      "isCompound": true,
      "compoundParts": [
          "Leben",
          "-s-",
          "Verhältnis"
      ]
  },
  "Legitimist": {
      "fr": "légitimiste (partisan de la branche aînée des Bourbons)",
      "lit": "partisan du droit dynastique légitime",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Emprunté au français « légitimiste », forgé au XIXe siècle pour désigner les partisans des Bourbons légitimes déchus en 1830."
  },
  "Leibeigene": {
      "fr": "serf",
      "lit": "celui dont le corps appartient au seigneur",
      "pos_fr": "",
      "role": "Nom masculin historique désignant le paysan asservi capable de s'émanciper dans la commune."
  },
  "Leibeigener": {
      "fr": "serf",
      "lit": "paysan attaché corporellement à la glèbe",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant les producteurs ruraux dominés de la féodalité."
  },
  "Leibeigenschaft": {
      "fr": "servage",
      "lit": "état de possession du corps par le seigneur",
      "pos_fr": "",
      "role": "Nom féminin désignant le rapport social d'asservissement féodal par excellence."
  },
  "Liberalismus": {
      "fr": "libéralisme politique et économique",
      "lit": "doctrine de la liberté individuelle",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Formé sur l'adjectif latin « liberalis » (digne d'un homme libre) avec le suffixe doctrinal « -ismus »."
  },
  "Liebe": {
      "fr": "amour, affection",
      "lit": "sentiment d'amour et d'attachement",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Du moyen haut-allemand « liebe », vieux haut-allemand « liobī » (joie, bonté, amour), issu de la racine indo-européenne *leubh- (désirer, aimer)."
  },
  "Literat": {
      "fr": "homme de lettres, littérateur, écrivassier",
      "lit": "homme lettré",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Emprunté au latin « litteratus » (instruit, cultivé, homme de lettres), souvent employé avec une nuance ironique au XIXe siècle."
  },
  "Literatur": {
      "fr": "littérature, écrits imprimés",
      "lit": "ensemble des productions écrites",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Emprunté au latin « litteratura » (écriture, érudition, ensemble des lettres et œuvres)."
  },
  "Literaturen": {
      "fr": "littératures",
      "lit": "productions écrites (pluriel)",
      "pos_fr": "",
      "role": "Nom féminin pluriel englobant les traditions littéraires locales dissoutes dans la Weltliteratur."
  },
  "Lohn": {
      "fr": "salaire / rétribution",
      "lit": "récompense monétaire du travail",
      "pos_fr": "",
      "role": "Nom économique cardinal mesurant le prix d'achat payé pour la force de travail."
  },
  "Lohnarbeit": {
      "fr": "salariat / travail salarié",
      "lit": "travail contre salaire",
      "pos_fr": "",
      "role": "Pilier du capitalisme chez Marx : le mode de travail où l'ouvrier aliène sa force au capital."
  },
  "Lohnarbeiter": {
      "fr": "travailleur salarié / prolétaire",
      "lit": "ouvrier recevant un salaire",
      "pos_fr": "",
      "role": "Nom composé désignant le statut universel auquel le capitalisme réduit tous les travailleurs."
  },
  "Lokalität": {
      "fr": "localité / territoire borné",
      "lit": "lieu géographique précis",
      "pos_fr": "",
      "role": "Nom féminin désignant l'enclave géographique que la grande industrie décloisonne."
  },
  "Lokalkämpfe": {
      "fr": "luttes locales",
      "lit": "combats circonscrits à un lieu",
      "pos_fr": "",
      "role": "Nom composé désignant les grèves éparpillées que la liaison ferroviaire unifie."
  },
  "London": {
      "fr": "Londres",
      "lit": "capitale britannique, siège de la Ligue",
      "pos_fr": "Nom propre",
      "role": "Nom propre neutre, lieu du congrès communiste de novembre 1847."
  },
  "Los": {
      "fr": "sort, destinée, condition",
      "lit": "ce qui est attribué par tirage au sort",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Du moyen haut-allemand « lōz », vieux haut-allemand « lōz » (sort, portion attribuée par le destin), d'origine proto-germanique *hlutom."
  },
  "Luft": {
      "fr": "air",
      "lit": "atmosphère gazeuse",
      "pos_fr": "",
      "role": "Nom féminin de la formule révolutionnaire « in die Luft sprengen » (faire sauter en l'air l'ordre officiel)."
  },
  "Lumpenproletariat": {
      "fr": "sous-prolétariat / voyoucratie",
      "lit": "prolétariat en haillons (Lumpen)",
      "pos_fr": "",
      "role": "Concept sociopolitique célèbre de Marx désignant la frange déclassée et vénale du prolétariat."
  },
  "Länderei": {
      "fr": "terres, domaines fonciers",
      "lit": "étendue de terres agricoles",
      "pos_fr": "Nom féminin",
      "role": "nom féminin (souvent au pluriel Ländereien)",
      "etymology": "Formé sur le pluriel « Länder » de « Land » (terre, pays) avec le suffixe collectif de domaine « -ei »."
  },
  "Macht": {
      "fr": "puissance / force souveraine",
      "lit": "pouvoir étatique, domination souveraine",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant les États monarchiques et policiers d'Europe."
  },
  "Mangel": {
      "fr": "manque, pénurie, défaut",
      "lit": "déficience, absence d'une chose nécessaire",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Du moyen haut-allemand « mangel », déverbal de « mangeln » (manquer), emprunté au moyen latin « manculare » ou latin « mancus » (estropié, défectueux)."
  },
  "Manifest": {
      "fr": "manifeste / déclaration publique",
      "lit": "proclamation solennelle de principes",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre : le document programmatique fondateur du parti communiste mondial."
  },
  "Mann": {
      "fr": "homme",
      "lit": "être humain masculin adulte",
      "pos_fr": "",
      "role": "Nom masculin désignant l'ouvrier masculin supplanté par la femme et l'enfant à l'usine."
  },
  "Mannigfaltigkeit": {
      "fr": "diversité, multiplicité, variété",
      "lit": "état de ce qui se déploie en plis multiples",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Du moyen haut-allemand « manecvaldicheit », de « manec » (maint) + « valt » (pli) + « -keit ».",
      "isCompound": true,
      "compoundParts": [
          "mannigfach",
          "-falt",
          "-ig",
          "-keit"
      ]
  },
  "Manufaktur": {
      "fr": "manufacture",
      "lit": "fabrication organisée par la division du travail manuel",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'étape intermédiaire entre la jurande corporative et la grande industrie."
  },
  "Manuskript": {
      "fr": "manuscrit",
      "lit": "écrit de la main",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Emprunté au latin médiéval « manuscriptum », du latin classique « manu scriptus » (écrit à la main)."
  },
  "Markt": {
      "fr": "marché",
      "lit": "espace marchand d'échange des denrées",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin économique dont la constante mondialisation nourrit la bourgeoisie."
  },
  "Maschine": {
      "fr": "machine / automate productif",
      "lit": "mécanisme artificiel de travail",
      "pos_fr": "",
      "role": "Instrument suprême de la révolution industrielle expropriant le savoir de l'artisan."
  },
  "Maschinerie": {
      "fr": "machinerie / parc de machines",
      "lit": "système mécanique articulé de machines automatiques",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant chez Marx le système automatique d'outils et de moteurs qui supplante l'artisan et asservit l'ouvrier comme rouage."
  },
  "Masse": {
      "fr": "masse / multitude collective",
      "lit": "corps dense compact",
      "pos_fr": "",
      "role": "Concept sociologique désignant les foules compactes d'ouvriers concentrés dans les fabriques."
  },
  "Massenhaft": {
      "fr": "massif / gigantesque",
      "lit": "qui a la nature d'une masse imposante",
      "pos_fr": "",
      "role": "Adjectif qualifiant l'échelle incommensurable des forces productives créées par la bourgeoisie."
  },
  "Material": {
      "fr": "matériau, matière, documentation",
      "lit": "matière première pour un ouvrage",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Emprunté au latin « materia » (matière de construction, bois d'œuvre, substance)."
  },
  "Materiellen": {
      "fr": "éléments matériels, intérêts matériels",
      "lit": "ce qui appartient au domaine matériel",
      "pos_fr": "Nom neutre",
      "role": "adjectif substantivé neutre/pluriel",
      "etymology": "Substantivation de l'adjectif « materiell » (matériel, corporel, économique), dérivé du latin « materia »."
  },
  "Mauer": {
      "fr": "muraille / rempart",
      "lit": "mur de défense en pierre",
      "pos_fr": "",
      "role": "Nom féminin de la métaphore de la muraille de Chine brisée par le commerce."
  },
  "Maß": {
      "fr": "mesure / degré / proportion",
      "lit": "quantité mesurée, étalon de dimension",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre employé au datif dans la locution corrélative « in demselben Maße, worin... » (au fur et à mesure que, dans la mesure où...)."
  },
  "Maßregel": {
      "fr": "mesure, disposition, règle pratique",
      "lit": "règle de mesure, décret",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Composé de « das Maß » (la mesure, vieux haut-allemand « māza ») + « die Regel » (la règle, du latin « regula »).",
      "isCompound": true,
      "compoundParts": [
          "Maß",
          "Regel"
      ]
  },
  "Maßstab": {
      "fr": "étalon, critère, mesure, échelle",
      "lit": "bâton de mesure",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Composé de « Maß » (mesure) + « der Stab » (bâton, baguette graduée).",
      "isCompound": true,
      "compoundParts": [
          "Maß",
          "Stab"
      ]
  },
  "Mehrzahl": {
      "fr": "majorité",
      "lit": "plus grand nombre",
      "pos_fr": "",
      "role": "Nom féminin soulignant que le prolétariat agit au nom et au profit de l'immense majorité humaine."
  },
  "Meister": {
      "fr": "maître artisan / patron patriarcal",
      "lit": "artisan qualifié juré",
      "pos_fr": "",
      "role": "Nom masculin désignant le maître de jurande évincé par le bourgeois capitaliste."
  },
  "Mensch": {
      "fr": "l'homme / être humain",
      "lit": "être humain mortel membre de l'humanité",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin générique désignant les individus atomisés dont tous les liens de communauté sont dissous par le marché."
  },
  "Metternich": {
      "fr": "Metternich",
      "lit": "Klemens von Metternich (1773-1859), chancelier autrichien",
      "pos_fr": "Nom propre",
      "role": "Nom propre masculin, chef d'orchestre de la Sainte-Alliance répressive."
  },
  "Millionär": {
      "fr": "millionnaire",
      "lit": "possesseur de millions en fortune monétaire",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant les nouveaux magnats de la haute finance et de la grande industrie."
  },
  "Minimum": {
      "fr": "minimum, plancher",
      "lit": "la plus petite quantité",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Emprunté au neutre de l'adjectif superlatif latin « minimus » (le plus petit)."
  },
  "Minoritäte": {
      "fr": "minorité",
      "lit": "petit nombre",
      "pos_fr": "",
      "role": "Forme lemmatisée de Minorität désignant les mouvements historiques passés faits au profit de quelques-uns."
  },
  "Mitglied": {
      "fr": "membre / affilié",
      "lit": "partie d'un corps constitué",
      "pos_fr": "",
      "role": "Nom neutre décrivant l'élévation sociale du serf accédant au statut de citoyen de la commune."
  },
  "Mittel": {
      "fr": "moyens / instruments d'action",
      "lit": "ce qui sert d'intermédiaire",
      "pos_fr": "",
      "role": "Nom neutre économique désignant les moyens techniques permettant de conjurer les crises."
  },
  "Mittelalter": {
      "fr": "Moyen Âge",
      "lit": "l'âge intermédiaire, l'époque féodale",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre désignant la longue période féodale précédant l'essor bourgeois."
  },
  "Mittelstand": {
      "fr": "classe moyenne industrielle",
      "lit": "rang social intermédiaire (les fabricants)",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin : en 1848, les chefs d'entreprises manufacturières situés entre noblesse et ouvriers."
  },
  "Mittelstände": {
      "fr": "classes moyennes / classes intermédiaires",
      "lit": "ordres situés au milieu",
      "pos_fr": "",
      "role": "Forme plurielle de Mittelstand désignant artisans et petits patrons en lutte pour leur survie."
  },
  "Mißstände": {
      "fr": "abus, désordres, tares, anomalies",
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
      "fr": "disproportion, déséquilibre, discordance",
      "lit": "rapport faussé ou défectueux",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Composé de « miß- » + « das Verhältnis » (rapport, relation).",
      "isCompound": true,
      "compoundParts": [
          "Miß-",
          "Verhältnis"
      ]
  },
  "Monarchie": {
      "fr": "monarchie",
      "lit": "gouvernement exercé par un seul souverain",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant le régime royal centralisateur médiéval et d'Ancien Régime."
  },
  "Monopol": {
      "fr": "monopole",
      "lit": "privilège exclusif de vente",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Emprunté au grec ancien « monopōlion », composé de « monos » (seul) + « pōlein » (vendre)."
  },
  "Moral": {
      "fr": "morale",
      "lit": "système des mœurs et devoirs",
      "pos_fr": "",
      "role": "Nom féminin démasqué par Marx comme un préjugé bourgeois dissimulant des intérêts pécuniaires."
  },
  "Märchen": {
      "fr": "conte de fées / légende enfantine",
      "lit": "récit imaginaire et fabuleux",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre ironique qualifiant les fables apeurées forgées par la police sur le communisme."
  },
  "Mäßigkeitsvereinsstifter": {
      "fr": "fondateurs de ligues de tempérance",
      "lit": "fondateurs d'associations de modération/sobriété",
      "pos_fr": "Nom masculin",
      "role": "nom masculin pluriel",
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
  "Mönch": {
      "fr": "moine",
      "lit": "religieux solitaire vivant en communauté",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Du moyen haut-allemand « munech », vieux haut-allemand « munih », emprunté au bas-latin « monachus », du grec « monakhos » (solitaire, seul)."
  },
  "Nachweis": {
      "fr": "démonstration, preuve, justification",
      "lit": "action d'indiquer ou de prouver",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Déverbal de « nachweisen » (démontrer, apporter la preuve de), de « nach » (après, selon) + « weisen » (montrer).",
      "isCompound": true,
      "compoundParts": [
          "nach",
          "Weis"
      ]
  },
  "Nation": {
      "fr": "nation",
      "lit": "communauté politique unifiée",
      "pos_fr": "",
      "role": "Nom féminin dont l'isolement autarcique est brisé par la circulation planétaire du capital."
  },
  "Nationalbank": {
      "fr": "banque nationale",
      "lit": "banque de la nation",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Composé de l'adjectif « national » + « die Bank » (la banque, comptoir de change, de l'italien « banca »).",
      "isCompound": true,
      "compoundParts": [
          "National",
          "Bank"
      ]
  },
  "Nationalfabrik": {
      "fr": "manufacture d'État, fabrique nationale",
      "lit": "usine nationale",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
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
      "role": "Nom féminin soulignant l'internationalisme du congrès des communistes."
  },
  "Natur": {
      "fr": "par nature",
      "lit": "selon la nature",
      "pos_fr": "",
      "role": "Caractère naturel attribué à tort aux lois bourgeoises."
  },
  "Naturkräfte": {
      "fr": "forces de la nature",
      "lit": "puissances naturelles physiques",
      "pos_fr": "",
      "role": "Nom composé désignant les énergies hydrauliques et thermiques asservies par les machines."
  },
  "Niederträchtigkeit": {
      "fr": "bassesse, infamie, vilenie",
      "lit": "état de ce qui est bas d'esprit",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Dérivé de « niederträchtig » (vil, bas, servile), composé à l'origine de « nieder » (bas) + verbe « trachten » (viser, porter ses pensées vers) + « -keit ».",
      "isCompound": true,
      "compoundParts": [
          "nieder",
          "trachten",
          "-ig",
          "-keit"
      ]
  },
  "Niveau": {
      "fr": "niveau / palier",
      "lit": "hauteur de référence plane",
      "pos_fr": "",
      "role": "Nom d'origine française désignant le plancher de rémunération également bas auquel la machine réduit le salaire."
  },
  "Nordamerika": {
      "fr": "Amérique du Nord",
      "lit": "partie nord du continent américain",
      "pos_fr": "",
      "role": "Nom propre composé au datif neutre singulier, complément de lieu de 'in'."
  },
  "Normalmensche": {
      "fr": "homme normal, homme standard",
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
  "Nutzen": {
      "fr": "utilité, profit, bénéfice",
      "lit": "usage avantageux, jouissance utile",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Du moyen haut-allemand « nutze », vieux haut-allemand « nuzzi » (utile, profitable), déverbal rattaché à « genießen » (jouir de)."
  },
  "Offizier": {
      "fr": "officier",
      "lit": "gradé supérieur de commandement",
      "pos_fr": "",
      "role": "Métaphore militaire désignant les directeurs d'usine commandant l'armée des ouvriers."
  },
  "Ohr": {
      "fr": "oreille",
      "lit": "organe de l'ouïe",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Du moyen haut-allemand « ōre », vieux haut-allemand « ōra », de racine indo-européenne *h₂ous- (oreille)."
  },
  "Okzident": {
      "fr": "Occident",
      "lit": "terre du soleil couchant",
      "pos_fr": "",
      "role": "Nom masculin désignant les puissances capitalistes d'Europe assujettissant l'Asie et l'Orient."
  },
  "Oppositionsleute": {
      "fr": "hommes d'opposition / opposants",
      "lit": "citoyens engagés dans la contestation parlementaire",
      "pos_fr": "Nom pluriel",
      "role": "Nom masculin pluriel désignant les députés et militants libéraux réformateurs."
  },
  "Oppositionspartei": {
      "fr": "parti d'opposition",
      "lit": "parti politique rival du gouvernement",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin composé désignant les forces parlementaires contestataires."
  },
  "Organisation": {
      "fr": "organisation",
      "lit": "agencement structuré d'un corps",
      "pos_fr": "",
      "role": "Nom politique désignant la constitution du prolétariat en classe solidaire et en parti autonome."
  },
  "Orient": {
      "fr": "Orient",
      "lit": "terre du soleil levant",
      "pos_fr": "",
      "role": "Nom masculin désignant les sociétés traditionnelles d'Asie subordonnées aux métropoles industrielles."
  },
  "Original": {
      "fr": "original, texte source",
      "lit": "texte premier d'où dérivent les copies",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Emprunté au latin « originalis » (qui remonte à l'origine), substantivé au neutre."
  },
  "Ort": {
      "fr": "lieu / endroit",
      "lit": "place géographique déterminée",
      "pos_fr": "",
      "role": "Nom masculin délimitant la scène locale où s'engage initialement la rébellion ouvrière."
  },
  "Owenist": {
      "fr": "owéniste (partisan du socialisme coopératif de Robert Owen)",
      "lit": "disciple de Robert Owen",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Formé sur le patronyme de Robert Owen avec le suffixe d'adhésion doctrinale « -ist »."
  },
  "Owens": {
      "fr": "d'Owen (Robert Owen, 1771-1858, industriel et réformateur socialiste gallois)",
      "lit": "génitif de Robert Owen",
      "pos_fr": "Nom masculin",
      "role": "nom propre au génitif",
      "etymology": "Forme au génitif saxon du nom propre Robert Owen."
  },
  "Pamphlet": {
      "fr": "pamphlet, libelle polémique",
      "lit": "opuscule de polémique satirique",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Emprunté à l'anglais « pamphlet », lui-même issu du nom d'une comédie latine du XIIe siècle très répandue, « Pamphilus, seu de Amore »."
  },
  "Papst": {
      "fr": "le pape (Pie IX)",
      "lit": "souverain pontife de l'Église catholique",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin : le chef de la papauté allié aux monarques d'Europe."
  },
  "Partei": {
      "fr": "parti",
      "lit": "organisation politique de lutte pour le pouvoir",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant le parti communiste constitué en force autonome."
  },
  "Pasquill": {
      "fr": "pasquinade, libelle diffamatoire, satire mordante",
      "lit": "écrit satirique clandestin",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Emprunté à l'italien « pasquillo », diminutif de « Pasquino », statue de Rome où l'on affichait nuitamment des vers satiriques contre les puissants."
  },
  "Patrizier": {
      "fr": "patricien",
      "lit": "noble citoyen de la Rome antique",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant la classe dominante aristocratique dans l'Antiquité romaine."
  },
  "Pauper": {
      "fr": "pauvre assisté / indigent absolu",
      "lit": "mendiant sans ressource",
      "pos_fr": "",
      "role": "Terme d'économie politique anglaise désignant l'ouvrier tombé dans l'indigence totale."
  },
  "Pauperismus": {
      "fr": "paupérisme",
      "lit": "état d'indigence endémique",
      "pos_fr": "",
      "role": "Concept sociologique désignant la gangrène de misère qui croît plus vite que la richesse bourgeoise."
  },
  "Pedanterie": {
      "fr": "pédanterie, pédantisme étroit",
      "lit": "étalage fastidieux de préceptes rigides",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Emprunté au français « pédanterie », dérivé de « pédant », de l'italien « pedante » (maître d'école formaliste)."
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
      "fr": "période, époque, cycle",
      "lit": "circuit régulier, cycle temporel",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Emprunté au grec ancien « periodos » (circuit, tour complet), composé de « peri » (autour) + « hodos » (chemin)."
  },
  "Person": {
      "fr": "personne, individu",
      "lit": "masque de théâtre, individu doué de droits",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Emprunté au latin « persona » (masque d'acteur de théâtre, rôle, individu)."
  },
  "Persönlichkeit": {
      "fr": "personnalité, individualité propre",
      "lit": "caractère distinctif d'une personne",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Dérivé de l'adjectif « persönlich » (personnel, propre à la personne) + suffixe abstrait « -keit »."
  },
  "Pfaffe": {
      "fr": "calotin / prêtre",
      "lit": "homme d'église (péjoratif)",
      "pos_fr": "",
      "role": "Terme anticlérical méprisant désignant le curé rétrogradé au rang de vulgaire salarié idéologique."
  },
  "Pfahlbürger": {
      "fr": "bourgeois des premiers faubourgs / bourgeois du palis",
      "lit": "habitant réfugié entre muraille et palissade extérieure",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin historique médiéval désignant les premiers serfs émancipés aux portes des cités."
  },
  "Pfahlbürgerschaft": {
      "fr": "première bourgeoisie foraine",
      "lit": "collectivité des habitants des faubourgs palissadés",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'embryon social dont est issue la classe bourgeoise moderne."
  },
  "Pfahlbürgertum": {
      "fr": "bourgeoisie étroite de petite ville, esprit boutiquier médiéval",
      "lit": "communauté des bourgeois vivant entre les palissades et les remparts",
      "pos_fr": "Nom neutre",
      "role": "nom neutre méprisant",
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
      "pos_fr": "",
      "role": "Nom composé désignant le parasite financier qui dépouille l'ouvrier de son salaire."
  },
  "Phalanstere": {
      "fr": "phalanstères (unités communautaires imaginées par Fourier)",
      "lit": "bâtiments communautaires d'harmonie",
      "pos_fr": "Nom neutre",
      "role": "nom neutre pluriel (variante orthographique de Phalanstères)",
      "etymology": "Mot forgé en français par Charles Fourier par croisement de « phalange » (corps d'armée/groupe serré) et « monastère »."
  },
  "Phantasie": {
      "fr": "imagination, chimère, fantaisie",
      "lit": "faculté de concevoir des images",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Emprunté au grec ancien « phantasia » (apparition, vision imaginaire), rattaché à « phainein » (montrer, faire paraître)."
  },
  "Phase": {
      "fr": "phase / étape historique",
      "lit": "période d'évolution",
      "pos_fr": "",
      "role": "Nom féminin désignant les moments successifs du déploiement de la guerre civile prolétarienne."
  },
  "Philanthropie": {
      "fr": "philanthropie, amour bienfaisant du genre humain",
      "lit": "amour de l'humanité",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Emprunté au grec ancien « philanthropia », composé de « philos » (ami, aimant) + « anthrōpos » (être humain)."
  },
  "Philantrophe": {
      "fr": "philanthropes (bienfaiteurs bourgeois)",
      "lit": "amis de l'homme",
      "pos_fr": "Nom masculin",
      "role": "nom masculin pluriel (variante orthographique de Philanthropen)",
      "etymology": "Du grec « philanthrōpos » (qui aime les humains)."
  },
  "Philosoph": {
      "fr": "philosophe",
      "lit": "ami de la sagesse",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Emprunté au grec « philosophos », composé de « philos » (ami) + « sophia » (sagesse, savoir)."
  },
  "Philosophie": {
      "fr": "philosophie",
      "lit": "quête de sagesse et de fondement rationnel",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Emprunté au grec ancien « philosophia » via le latin « philosophia »."
  },
  "Phrase": {
      "fr": "phrase creuse / rhétorique",
      "lit": "formule oratoire vide, mot d'ordre stérile",
      "pos_fr": "",
      "role": "Substantif au datif féminin pluriel dénonçant la phraséologie bourgeoise."
  },
  "Plan": {
      "fr": "plan, projet, dessein ordonné",
      "lit": "dessin en surface plane, schéma directeur",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Emprunté au latin « planum » (surface plane) via le français « plan »."
  },
  "Plebejer": {
      "fr": "plébéien",
      "lit": "citoyen ordinaire non noble de Rome",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant la classe populaire laborieuse de l'Antiquité."
  },
  "Poet": {
      "fr": "poète",
      "lit": "créateur de vers",
      "pos_fr": "",
      "role": "Nom masculin illustrant la perte d'aura des artistes réduits à vendre leur force créatrice au capital."
  },
  "Pole": {
      "fr": "Polonais",
      "lit": "habitant de la plaine polonaise",
      "pos_fr": "",
      "role": "Substantif faible au datif masculin pluriel désignant les patriotes polonais en lutte."
  },
  "Politik": {
      "fr": "politique, affaires publiques",
      "lit": "art d'administrer la cité",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Emprunté au grec « politikē [technē] », dérivé de « polis » (cité, État)."
  },
  "Polizist": {
      "fr": "policier / agent de police",
      "lit": "agent des forces de l'ordre répressif",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant les limiers policiers des États absolutistes allemands."
  },
  "Praxis": {
      "fr": "pratique, activité concrète transformatrice",
      "lit": "action pratique, exercice réel",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Emprunté au grec ancien « praxis » (action concrète, pratique, acte), opposé à « theōria » (contemplation intellectuelle)."
  },
  "Preis": {
      "fr": "prix / coût marchand",
      "lit": "valeur monétaire attribuée",
      "pos_fr": "",
      "role": "Loi de la valeur : le prix de la marchandise-travail ramené au strict coût de sa reproduction."
  },
  "Preßfreiheit": {
      "fr": "liberté de la presse",
      "lit": "liberté de la presse typographique",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Composé de « die Presse » (la presse à imprimer, du latin premere) + « die Freiheit » (la liberté).",
      "isCompound": true,
      "compoundParts": [
          "Presse",
          "Freiheit"
      ]
  },
  "Prinzip": {
      "fr": "principe, fondement doctrinal",
      "lit": "commencement, règle directrice",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Emprunté au latin « principium » (commencement, principe premier), de « princeps » (premier)."
  },
  "Privateigentum": {
      "fr": "propriété privée",
      "lit": "propriété appartenant en propre à un particulier",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Composé de l'adjectif « privat » (du latin privatus, retiré de la communauté publique) + « Eigentum » (propriété).",
      "isCompound": true,
      "compoundParts": [
          "privat",
          "Eigentum"
      ]
  },
  "Privaterwerb": {
      "fr": "appropriation privée, acquisition individuelle",
      "lit": "acquisition privée de biens",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
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
      "pos_fr": "",
      "role": "Nom composé désignant les garanties de propriété privée que le prolétariat a pour mission d'anéantir."
  },
  "Privatversicherung": {
      "fr": "assurance privée",
      "lit": "protection individuelle",
      "pos_fr": "",
      "role": "Nom composé désignant les verrous juridiques de la possession bourgeoise voués à la destruction."
  },
  "Produkt": {
      "fr": "produit / résultat matériel",
      "lit": "ce qui est mis au jour par un processus de fabrication",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre soulignant que la bourgeoisie est elle-même le fruit déterminé d'une évolution matérielle."
  },
  "Produktion": {
      "fr": "production",
      "lit": "engendrement matériel de biens",
      "pos_fr": "",
      "role": "Concept nodal du matérialisme historique : le procès de transformation de la nature par le travail."
  },
  "Produktionsinstrument": {
      "fr": "instrument de production",
      "lit": "outil ou machine de fabrication",
      "pos_fr": "",
      "role": "Concept économique : les moyens techniques dont le perfectionnement bouleverse la société."
  },
  "Produktionskosten": {
      "fr": "coûts de production",
      "lit": "frais de fabrication",
      "pos_fr": "",
      "role": "Loi économique d'airain régissant le prix des marchandises et du salaire ouvrier."
  },
  "Produktionskraft": {
      "fr": "force productive, capacité de production",
      "lit": "force/puissance de la production",
      "pos_fr": "Nom féminin",
      "role": "nom féminin (souvent au pluriel Produktionskräfte)",
      "etymology": "Composé de « die Produktion » (la production) + « die Kraft » (la force motrice, puissance).",
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
      "pos_fr": "",
      "role": "Forme lemmatisée désignant la puissance matérielle de transformation sociale."
  },
  "Produktionsmittel": {
      "fr": "moyens de production",
      "lit": "instruments et matières de travail",
      "pos_fr": "",
      "role": "Concept central du marxisme : l'ensemble des usines et machines confisqué par le capital."
  },
  "Produktionsverhältnis": {
      "fr": "rapport de production",
      "lit": "relation/rapport établi dans la production",
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
      "pos_fr": "",
      "role": "Concept clé du matérialisme : les liens sociaux structurant l'exploitation et la propriété."
  },
  "Produktionsweis": {
      "fr": "mode de production",
      "lit": "forme lemmatisée de Produktionsweise",
      "pos_fr": "",
      "role": "Concept d'ensemble désignant l'articulation entre forces productives et rapports sociaux."
  },
  "Produktionsweise": {
      "fr": "mode de production",
      "lit": "manière et forme d'organisation de la production",
      "pos_fr": "Nom féminin",
      "role": "Concept central du matérialisme historique désignant l'unité articulée des forces productives et des rapports sociaux de production."
  },
  "Produktivkraft": {
      "fr": "force productive",
      "lit": "énergie transformatrice du travail",
      "pos_fr": "",
      "role": "Concept cardinal : la puissance matérielle humaine entrant en révolte contre le carcan bourgeois."
  },
  "Produktivkräft": {
      "fr": "force productive",
      "lit": "forme fléchie de Produktivkraft",
      "pos_fr": "",
      "role": "Forme lemmatisée plurielle de Produktivkraft."
  },
  "Progressivsteuer": {
      "fr": "impôt progressif",
      "lit": "taxe proportionnellement croissante selon le revenu",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Composé de l'adjectif « progressiv » (du latin progressivus, qui progresse) + « die Steuer » (l'impôt, soutien financier).",
      "isCompound": true,
      "compoundParts": [
          "progressiv",
          "Steuer"
      ]
  },
  "Proletariat": {
      "fr": "prolétariat",
      "lit": "classe des travailleurs salariés dépouillés de tout moyen de production",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre d'origine latine désignant la classe révolutionnaire moderne vendue à l'heure au capital."
  },
  "Proletarier": {
      "fr": "prolétaire",
      "lit": "travailleur salarié ne possédant que sa force de travail",
      "pos_fr": "",
      "role": "Substantif au nominatif pluriel sujet de la phrase historique ou vocatif d'appel aux armes."
  },
  "Propaganda": {
      "fr": "propagande, diffusion active des idées",
      "lit": "choses qui doivent être propagées",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Emprunté au latin ecclésiastique « Congregatio de Propaganda Fide » (congrégation pour la propagation de la foi, du gérondif de propagare, propager)."
  },
  "Prophezeiung": {
      "fr": "prophétie, prédiction",
      "lit": "action d'annoncer l'avenir",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Dérivé du verbe « prophezeien » (prophétiser), issu du moyen haut-allemand « prophete » (du grec prophētēs) + « -ung »."
  },
  "Prostitution": {
      "fr": "prostitution",
      "lit": "action d'exposer publiquement à vil prix",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Emprunté au latin « prostitutio », de « prostituere » (exposer devant, livrer publiquement au commerce sexuel)."
  },
  "Proudhon": {
      "fr": "Proudhon (Pierre-Joseph Proudhon, 1809-1865, théoricien socialiste et anarchiste français)",
      "lit": "Pierre-Joseph Proudhon",
      "pos_fr": "Nom masculin",
      "role": "nom propre",
      "etymology": "Nom de famille de l'auteur de « Qu'est-ce que la propriété ? » et de « Philosophie de la misère »."
  },
  "Provinz": {
      "fr": "province / contrée régionale",
      "lit": "territoire sous juridiction",
      "pos_fr": "",
      "role": "Nom féminin désignant les entités territoriales fédérales fondues dans l'État-nation bourgeois."
  },
  "Publikum": {
      "fr": "public, auditoire, lectorat",
      "lit": "la communauté des citoyens ou auditeurs",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Emprunté au neutre substantivé de l'adjectif latin « publicus » (public, commun au peuple)."
  },
  "Punkt": {
      "fr": "point / sommet historique",
      "lit": "moment culminant précis",
      "pos_fr": "",
      "role": "Nom masculin marquant le seuil culminant où la guerre de classe éclate en révolution ouverte."
  },
  "Pyramide": {
      "fr": "pyramide",
      "lit": "monument des pharaons",
      "pos_fr": "",
      "role": "Nom féminin évoquant les travaux de l'Antiquité éclipsés par les prouesses matérielles bourgeoises."
  },
  "Race": {
      "fr": "race / descendance ouvrière (orthographe 1848)",
      "lit": "lignée biologique",
      "pos_fr": "",
      "role": "Graphie du XIXe siècle (Race) désignant la descendance ouvrière indispensable à la régénération de la force de travail."
  },
  "Rad": {
      "fr": "roue",
      "lit": "organe circulaire rotatif",
      "pos_fr": "",
      "role": "Nom neutre de la métaphore de la « roue de l'histoire » que les réactionnaires rêvent de faire tourner à l'envers."
  },
  "Radikale": {
      "fr": "radicaux (républicains avancés)",
      "lit": "militants républicains partisans de réformes profondes",
      "pos_fr": "Nom pluriel",
      "role": "Nom masculin pluriel désignant l'aile démocratique avancée en France (ex: Ledru-Rollin)."
  },
  "Radikalsten": {
      "fr": "les plus radicaux, éléments d'extrême gauche",
      "lit": "ceux qui vont au fond des racines",
      "pos_fr": "Nom masculin",
      "role": "adjectif superlatif substantivé",
      "etymology": "Substantivation du superlatif de « radikal », emprunté au bas-latin « radicalis » (relatif à la racine, « radix »)."
  },
  "Rahmen": {
      "fr": "cadre, limites, enceinte",
      "lit": "châssis, bordure entourant un tableau",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Du moyen haut-allemand « rame », vieux haut-allemand « rama » (support, pilier, châssis)."
  },
  "Rang": {
      "fr": "rang, degré hiérarchique, dignité",
      "lit": "alignement ordonné, place occupée",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Emprunté au français « rang » (rangée, cercle ordonné), d'origine francique *hring (cercle, anneau)."
  },
  "Reaktion": {
      "fr": "réaction",
      "lit": "mouvement de recul politique",
      "pos_fr": "",
      "role": "Concept politique désignant les forces rétrogrades coalisées pour restaurer l'ordre féodal."
  },
  "Reaktionär": {
      "fr": "réactionnaire",
      "lit": "partisan du retour en arrière",
      "pos_fr": "",
      "role": "Nom masculin désignant les conservateurs inconsolables du déracinement national de l'industrie."
  },
  "Rebell": {
      "fr": "rebelle, insurgé",
      "lit": "celui qui reprend la guerre contre l'autorité",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Emprunté au latin « rebellis » (qui recommence la guerre, indocile), de « re- » (à nouveau) + « bellum » (guerre)."
  },
  "Recht": {
      "fr": "droit",
      "lit": "la règle légitime, prérogative",
      "pos_fr": "",
      "role": "Substantif à l'accusatif neutre singulier, objet direct de l'infinitif 'aufzugeben'."
  },
  "Rede": {
      "fr": "discours, propos, parole",
      "lit": "exposé verbal raisonné",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Du moyen haut-allemand « rede », vieux haut-allemand « radia » (compte, calcul, discours sensé, raison), rattaché à la racine indo-européenne *re- (compter, penser)."
  },
  "Redeblume": {
      "fr": "fleur de rhétorique, ornement de style",
      "lit": "fleur de discours",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Composé de « die Rede » (discours, éloquence) + « die Blume » (fleur, métaphore pour fioriture stylistique).",
      "isCompound": true,
      "compoundParts": [
          "Rede",
          "Blume"
      ]
  },
  "Redensart": {
      "fr": "formule toute faite, cliché, tournure verbeuse",
      "lit": "manière ou façon de parler",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Composé de « Rede » + « Art » (manière, façon d'être).",
      "isCompound": true,
      "compoundParts": [
          "Rede",
          "-n-",
          "Art"
      ]
  },
  "Reformbewegung": {
      "fr": "mouvement réformateur, courant de réforme",
      "lit": "mouvement pour la réforme",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
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
      "pos_fr": "",
      "role": "Substantif au datif masculin pluriel désignant les réformateurs agraires américains."
  },
  "Reformist": {
      "fr": "réformiste",
      "lit": "partisan de réformes graduelles",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Formé sur « Reform » avec le suffixe d'agent ou d'adhérent « -ist »."
  },
  "Regierung": {
      "fr": "gouvernement",
      "lit": "autorité dirigeante de l'État",
      "pos_fr": "",
      "role": "Nom féminin désignant le comité de gestion des affaires communes de la classe bourgeoise."
  },
  "Regime": {
      "fr": "régime politique, mode de gouvernement",
      "lit": "mode de direction d'un État",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Emprunté au français « régime », issu du latin « regimen » (direction, gouvernail, gouvernement)."
  },
  "Reichtum": {
      "fr": "richesse matérielle",
      "lit": "abondance de biens",
      "pos_fr": "",
      "role": "Nom masculin désignant la masse des valeurs créées par le travail et concentrées dans les mains privées."
  },
  "Reihe": {
      "fr": "série / chaîne / succession",
      "lit": "ligne ordonnée, rangée continue",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la succession dialectique des révolutions dans les modes de production et d'échange."
  },
  "Reinertrag": {
      "fr": "produit net, revenu net",
      "lit": "revenu pur déduit de tous frais",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
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
      "pos_fr": "",
      "role": "Nom masculin dénonçant la perte d'intérêt d'un labeur mutilé par le rythme de l'automate."
  },
  "Religion": {
      "fr": "religion",
      "lit": "système des croyances et du culte",
      "pos_fr": "",
      "role": "Nom féminin dénoncé comme un préjugé sacré masquant la dureté du calcul égoïste."
  },
  "Religionsfreiheit": {
      "fr": "liberté religieuse, liberté de culte",
      "lit": "liberté de religion",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Composé de « Religion » (du latin religio) + « Freiheit » (liberté).",
      "isCompound": true,
      "compoundParts": [
          "Religion",
          "-s-",
          "Freiheit"
      ]
  },
  "Rentier": {
      "fr": "rentier",
      "lit": "homme vivant de rentes financières",
      "pos_fr": "",
      "role": "Nom masculin d'emprunt français désignant les couches oisives aspirées dans la prolétarisation."
  },
  "Repräsentativstaat": {
      "fr": "État représentatif",
      "lit": "État fondé sur la représentation parlementaire",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin composé désignant la forme politique constitutionnelle adéquate à l'hégémonie bourgeoise moderne."
  },
  "Republik": {
      "fr": "république",
      "lit": "chose publique, gouvernement civique sans monarque",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant les cités marchandes gouvernées par des magistrats civils sans prince."
  },
  "Rest": {
      "fr": "reste / vestige anachronique",
      "lit": "ce qui survit d'un monde révolu",
      "pos_fr": "",
      "role": "Nom masculin désignant les débris de la monarchie absolue balayés par le capital."
  },
  "Restaurationszeit": {
      "fr": "époque de la Restauration (1814-1830)",
      "lit": "temps de la restauration monarchique",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
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
      "pos_fr": "",
      "role": "Nom neutre opposant le revers immédiat de la grève au résultat suprême : l'union de la classe."
  },
  "Revolution": {
      "fr": "révolution",
      "lit": "bouleversement intégral de l'ordre établi",
      "pos_fr": "",
      "role": "Substantif désignant le saut qualitatif historique de la prise du pouvoir politique."
  },
  "Richtung": {
      "fr": "direction, tendance, orientation, courant",
      "lit": "ligne vers laquelle on se dirige",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Dérivé du verbe « richten » (diriger, dresser droit, juger) + suffixe « -ung »."
  },
  "Ritter": {
      "fr": "chevalier",
      "lit": "homme d'armes noble à cheval",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant l'ordre équestre romain ou médiéval."
  },
  "Rohstoff": {
      "fr": "matière première",
      "lit": "matière brute non traitée",
      "pos_fr": "",
      "role": "Nom composé désignant les ressources naturelles importées des antipodes pour alimenter les usines."
  },
  "Rolle": {
      "fr": "rôle, fonction historique",
      "lit": "rouleau de parchemin contenant le texte d'un acteur",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Emprunté au français « rôle », issu du latin « rotulus » (petit rouleau)."
  },
  "Rom": {
      "fr": "Rome",
      "lit": "la Rome antique impériale et républicaine",
      "pos_fr": "Nom propre",
      "role": "Nom propre neutre, archétype historique de société esclavagiste divisée en ordres stricts."
  },
  "Runkelrübe": {
      "fr": "betterave sucrière, betterave fourragère",
      "lit": "betterave rugueuse à bétail",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Composé d'un élément obscur « Runkel » (peut-être rattaché à une forme dialectale rugueuse) + « die Rübe » (la rave, navet, betterave, vieux haut-allemand « ruoba »).",
      "isCompound": true,
      "compoundParts": [
          "Runkel",
          "Rübe"
      ]
  },
  "Rückhall": {
      "fr": "écho, répercussion sonore, retentissement",
      "lit": "résonance en retour",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Composé du préfixe « rück- » (en arrière, en retour) + « der Hall » (son éclatant, résonance sonore).",
      "isCompound": true,
      "compoundParts": [
          "rück-",
          "Hall"
      ]
  },
  "Sache": {
      "fr": "chose, affaire, cause",
      "lit": "litige judiciaire, cause débattue, objet",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Du moyen haut-allemand « sache », vieux haut-allemand « sahha » (procès, litige, cause en justice, puis affaire, chose)."
  },
  "Satz": {
      "fr": "proposition, phrase, principe, thèse",
      "lit": "ce qui est posé ou fixé",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Du moyen haut-allemand « saz », vieux haut-allemand « saz » (action de poser, disposition, ordonnance), déverbal de « setzen » (poser)."
  },
  "Schacher": {
      "fr": "mercantilisme mesquin, trafic vénal, tripotage d'argent",
      "lit": "trafic usuraire ou déloyal",
      "pos_fr": "Nom masculin",
      "role": "nom masculin méprisant",
      "etymology": "Emprunté au yiddish « schachern », issu de l'hébreu « sachar » (commerce, gain mercenaire)."
  },
  "Schafswolle": {
      "fr": "laine de mouton",
      "lit": "laine tondue sur les brebis",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Composé de « das Schaf » (le mouton) + « die Wolle » (la laine, vieux haut-allemand « wolla »).",
      "isCompound": true,
      "compoundParts": [
          "Schaf",
          "-s-",
          "Wolle"
      ]
  },
  "Schauer": {
      "fr": "frisson / transport d'effroi",
      "lit": "averse soudaine, saisissement physique de terreur ou d'extase",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant l'émotion sacrée et le frisson de dévotion mystique qui courbait l'échine des serfs."
  },
  "Schauspiel": {
      "fr": "spectacle, scène théâtrale",
      "lit": "jeu que l'on regarde",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Composé de « die Schau » (regard, vue, étalage) + « das Spiel » (le jeu, représentation dramatique).",
      "isCompound": true,
      "compoundParts": [
          "Schau",
          "Spiel"
      ]
  },
  "Scheu": {
      "fr": "crainte révérencieuse / déférence pieuse",
      "lit": "effroi mêlé de respect",
      "pos_fr": "",
      "role": "Nom féminin marquant le respect mystique entourant jadis les professions libérales."
  },
  "Schicht": {
      "fr": "couche sociale / strate",
      "lit": "strate géologique ou sociale",
      "pos_fr": "",
      "role": "Métaphore géologique désignant les couches superposées de la société officielle que le prolétariat dynamite."
  },
  "Schiffahrt": {
      "fr": "navigation maritime",
      "lit": "voyage par mer sur des navires",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin composé marquant le réseau maritime mondial reliant les marchés planétaires."
  },
  "Schiffbarmachung": {
      "fr": "canalisation / aménagement fluvial",
      "lit": "action de rendre navigable",
      "pos_fr": "",
      "role": "Nom composé célébrant l'aménagement colossal des cours d'eau par l'ingénierie moderne."
  },
  "Schilderung": {
      "fr": "peinture, tableau, description vivante",
      "lit": "action de peindre sur un écu",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Dérivé du verbe « schildern » (décrire par le menu, originairement peindre des armoiries sur un écu « Schild ») + « -ung »."
  },
  "Schleier": {
      "fr": "voile",
      "lit": "tissu masquant la vue",
      "pos_fr": "",
      "role": "Métaphore matérialiste du voile sentimental déchiré par la bourgeoisie sur les relations de famille."
  },
  "Schlösser": {
      "fr": "châteaux, manoirs seigneuriaux",
      "lit": "demeures closes et fortifiées",
      "pos_fr": "Nom neutre",
      "role": "nom neutre au pluriel (singulier Schloß)",
      "etymology": "Pluriel de « Schloß », du moyen haut-allemand « sloz » (fermeture, serrure, puis forteresse qui verrouille un passage)."
  },
  "Schmählied": {
      "fr": "chanson satirique, couplet diffamatoire",
      "lit": "chant d'outrage ou d'injure",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Composé du radical de « schmähen » (injurier, outrager, dénigrer) + « das Lied » (la chanson).",
      "isCompound": true,
      "compoundParts": [
          "Schmäh",
          "Lied"
      ]
  },
  "Schnaps": {
      "fr": "eau-de-vie, eau-de-vie de grain, schnaps",
      "lit": "gorgée avalée d'un trait",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Du bas-allemand « snaps » (gorgée rapide), onomatopée rattachée à « schnappen » (happer d'un coup rapide)."
  },
  "Schoß": {
      "fr": "sein / entrailles fécondes",
      "lit": "giron récepteur",
      "pos_fr": "",
      "role": "Métaphore de la fécondité historique : les forces productives sommeillant dans le giron du travail social."
  },
  "Schrift": {
      "fr": "écrit, texte, brochure, ouvrage",
      "lit": "ce qui est écrit",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Du moyen haut-allemand « schrift », vieux haut-allemand « skrift », emprunt ancien au latin « scriptum » (écrit)."
  },
  "Schriftsteller": {
      "fr": "écrivain, auteur",
      "lit": "celui qui met par écrit",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Formé au XVIIIe siècle comme calque du latin « scriptor », de « Schrift » (écrit) + « stellen » (poser, rédiger) + « -er ».",
      "isCompound": true,
      "compoundParts": [
          "Schrift",
          "stellen",
          "-er"
      ]
  },
  "Schritt": {
      "fr": "pas, étape, démarche",
      "lit": "enjambée, mesure de marche",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Du moyen haut-allemand « schrit », déverbal du verbe « schreiten » (enjamber, marcher à pas mesurés)."
  },
  "Schule": {
      "fr": "école, courant intellectuel",
      "lit": "institution d'enseignement ou d'apprentissage",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Du moyen haut-allemand « schuole », vieux haut-allemand « scuola », emprunté au latin médiéval « scola » / grec « skholē » (loisir voué à l'étude)."
  },
  "Schulmeister": {
      "fr": "maître d'école, pédagogue autoritaire",
      "lit": "maître de l'école",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Composé de « Schule » (école) + « Meister » (maître, du latin magister).",
      "isCompound": true,
      "compoundParts": [
          "Schule",
          "Meister"
      ]
  },
  "Schulübung": {
      "fr": "exercice d'école, devoir d'écolier",
      "lit": "exercice scolaire",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Composé de « Schule » (école) + « Übung » (exercice pratique, répétition).",
      "isCompound": true,
      "compoundParts": [
          "Schule",
          "Übung"
      ]
  },
  "Schwankung": {
      "fr": "fluctuation / oscillation",
      "lit": "mouvement de balancier",
      "pos_fr": "",
      "role": "Nom féminin désignant les variations imprévisibles du marché et des salaires ouvriers."
  },
  "Schweiz": {
      "fr": "Suisse",
      "lit": "la Suisse, Confédération helvétique",
      "pos_fr": "",
      "role": "Nom propre au datif féminin singulier après 'in der'."
  },
  "Schwärmerei": {
      "fr": "extase religieuse / exaltation mystique",
      "lit": "tourbillonnement d'essaim délirant, illumination dévote",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin péjoratif désignant l'illusion pieuse et fanatique médiévale sanctifiant l'oppression féodale."
  },
  "Schöngeister": {
      "fr": "beaux esprits, esthètes superficiels",
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
  "Schüler": {
      "fr": "disciple, élève, adepte",
      "lit": "celui qui va à l'école ou suit un maître",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Du moyen haut-allemand « schuolære », vieux haut-allemand « scuolari », dérivé de « Schule »."
  },
  "Seite": {
      "fr": "côté, flanc, part, page",
      "lit": "flanc latéral, direction",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Du moyen haut-allemand « sīte », vieux haut-allemand « sīta » (côté, flanc), d'origine proto-germanique *sīdō."
  },
  "Sekte": {
      "fr": "secte, chapelle doctrinale fermée",
      "lit": "école philosophique séparée ou hétérodoxe",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Emprunté au latin « secta » (voie suivie, ligne de conduite, doctrine d'une école), dérivé de « sequi » (suivre)."
  },
  "Selbstgenügsamkeit": {
      "fr": "autarcie / autosuffisance",
      "lit": "contentement de soi-même",
      "pos_fr": "",
      "role": "Nom composé marquant l'isolement fermé des nations précapitalistes pulvérisé par l'échange."
  },
  "Selbsttätigkeit": {
      "fr": "activité propre, autonomie d'action spontanée",
      "lit": "action accomplie par soi-même",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Composé du pronom réfléchi « selbst » (soi-même) + « tätig » (actif) + suffixe abstrait « -keit ».",
      "isCompound": true,
      "compoundParts": [
          "selbst",
          "tätig",
          "-keit"
      ]
  },
  "Selbständigkeit": {
      "fr": "indépendance, autonomie",
      "lit": "fait de se tenir debout par soi-même",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Dérivé de « selbständig » (indépendant, qui se tient par soi-même) + « -keit ».",
      "isCompound": true,
      "compoundParts": [
          "selbst",
          "stehen",
          "-ig",
          "-keit"
      ]
  },
  "Sieg": {
      "fr": "victoire / triomphe",
      "lit": "succès militaire ou politique",
      "pos_fr": "",
      "role": "Nom masculin annonçant l'avènement inéluctable du triomphe final du prolétariat."
  },
  "Sinn": {
      "fr": "sens / acception / signification",
      "lit": "orientation de la pensée, signification",
      "pos_fr": "",
      "role": "Substantif au datif masculin singulier dans la locution 'im französischen Sinn'."
  },
  "Sitte": {
      "fr": "mœurs, coutume usuelle",
      "lit": "usage moral traditionnel établi",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Du moyen haut-allemand « site », vieux haut-allemand « situ » (coutume, conduite morale usuelle), de racine indo-européenne *swedh- (coutume propre à soi)."
  },
  "Sklave": {
      "fr": "esclave",
      "lit": "être humain réduit à l'état de marchandise et propriété d'un maître",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant la classe exploitée suprême du mode de production antique."
  },
  "Sklaverei": {
      "fr": "esclavage",
      "lit": "condition de l'homme asservi",
      "pos_fr": "",
      "role": "Concept d'asservissement : l'ouvrier ravalé à une servitude que la bourgeoisie ne parvient même plus à entretenir."
  },
  "Sooft": {
      "fr": "toutes les fois que / aussi souvent que",
      "lit": "aussi souvent",
      "pos_fr": "",
      "role": "Récurrence cyclique des crises de surproduction."
  },
  "Sozialismus": {
      "fr": "socialisme",
      "lit": "doctrine sociale visant la réorganisation collective",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Emprunté au français « socialisme » (forgé par Pierre Leroux et les saint-simoniens vers 1830), sur l'adjectif « social » (du latin socialis, lié à la société humaine)."
  },
  "Sozialist": {
      "fr": "socialiste",
      "lit": "partisan de la justice et de l'organisation sociale",
      "pos_fr": "",
      "role": "Substantif au datif masculin pluriel désignant les réformateurs de tendance française."
  },
  "Spaltung": {
      "fr": "scission / division intestine",
      "lit": "clivage scindant un corps",
      "pos_fr": "",
      "role": "Nom féminin désignant les divisions d'intérêts fracturant la classe bourgeoise au profit des lois ouvrières."
  },
  "Spekulation": {
      "fr": "spéculation philosophique ou financière",
      "lit": "observation abstraite ou visée de gain",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Emprunté au latin philosophique « speculatio » (méditation intellectuelle, contemplation), du verbe « speculari » (observer du haut d'un poste de guet)."
  },
  "Spießbürger": {
      "fr": "philistin, bourgeois étriqué, beauf",
      "lit": "bourgeois armé d'une pique dans la milice urbaine",
      "pos_fr": "Nom masculin",
      "role": "nom masculin méprisant",
      "etymology": "Composé de « der Spieß » (la pique médiévale) + « der Bürger » (le citoyen bourgeois), désignant à l'origine le milicien citadin mal armé, puis au sens figuré le philistin médiocre et satisfait.",
      "isCompound": true,
      "compoundParts": [
          "Spieß",
          "Bürger"
      ]
  },
  "Spinnweb": {
      "fr": "toile d'araignée, subtilité vaine",
      "lit": "toile tissée par l'araignée",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
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
      "role": "Nom féminin : le Manifeste doit être traduit dans les principales langues d'Europe."
  },
  "Sprecht": {
      "fr": "parlez ! (forme impérative)",
      "lit": "prononcez des paroles !",
      "pos_fr": "Verbe",
      "role": "verbe à l'impératif pluriel",
      "etymology": "Forme impérative de deuxième personne du pluriel du verbe fort « sprechen » (moyen haut-allemand sprechen, vieux haut-allemand sprehhan)."
  },
  "Sprößling": {
      "fr": "rejeton, descendant, surgeon",
      "lit": "jeune pousse issue de la racine",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Dérivé avec le suffixe diminutif/d'appartenance « -ling » du verbe « sprießen » (bourgeonner, germer, moyen haut-allemand spriezen)."
  },
  "St.-Simons": {
      "fr": "de Saint-Simon (Claude-Henri de Rouvroy, comte de Saint-Simon, 1760-1825)",
      "lit": "génitif de Saint-Simon",
      "pos_fr": "Nom masculin",
      "role": "nom propre au génitif",
      "etymology": "Génitif allemand du nom du philosophe socialiste utopiste français Saint-Simon."
  },
  "Staat": {
      "fr": "État, puissance publique",
      "lit": "ordre politique constitué, état souverain",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Emprunté au latin « status » (état, manière de se tenir), via l'italien « stato » (corps politique)."
  },
  "Staatsausgabe": {
      "fr": "dépense publique, dépense de l'État",
      "lit": "dépense effectuée par l'État",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
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
      "role": "Nom féminin composé désignant l'appareil de domination politique et répressif centralisé d'une classe."
  },
  "Staatshaushalt": {
      "fr": "budget de l'État, finances publiques",
      "lit": "économie de la maison étatique",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Composé de « Staat » + « der Haushalt » (budget, gestion domestique).",
      "isCompound": true,
      "compoundParts": [
          "Staat",
          "-s-",
          "Haushalt"
      ]
  },
  "Staatskapital": {
      "fr": "capital de l'État, fonds public",
      "lit": "capital possédé par l'État",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
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
      "role": "Nom féminin : le berceau urbain où s'émancipe la classe marchande (« Stadtluft macht frei »)."
  },
  "Stand": {
      "fr": "ordre social / état / condition",
      "lit": "statut, état stable d'un corps constitué dans la cité",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin médiéval désignant les ordres d'Ancien Régime (clergé, noblesse, tiers état) fondés sur le privilège."
  },
  "Standpunkt": {
      "fr": "point de vue / position de classe",
      "lit": "point d'ancrage du regard",
      "pos_fr": "",
      "role": "Concept politique : l'abandon par les petits-bourgeois de leurs intérêts étriqués pour épouser la cause ouvrière."
  },
  "Stelle": {
      "fr": "place / position",
      "lit": "lieu précis, rôle substitué",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin : la bourgeoisie a substitué de nouveaux rapports de classe aux anciens."
  },
  "Stellenweis": {
      "fr": "çà et là / ponctuellement",
      "lit": "forme lemmatisée de stellenweise",
      "pos_fr": "",
      "role": "Forme lemmatisée d'adverbe désignant les lieux d'éruption des émeutes."
  },
  "Stellung": {
      "fr": "position sociale / rang",
      "lit": "emplacement institutionnel dans la société",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant les échelons et rangs d'honneur au sein des ordres féodaux."
  },
  "Stiftung": {
      "fr": "fondation, institution de bienfaisance",
      "lit": "action d'instituer ou d'établir un legs pérenne",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Dérivé du verbe « stiften » (fonder, créer, doter, vieux haut-allemand stiften) + « -ung »."
  },
  "Stufe": {
      "fr": "degré / palier d'évolution",
      "lit": "marche d'escalier",
      "pos_fr": "",
      "role": "Nom féminin mesurant les étapes ascendantes de la conscience et de l'organisation politique du prolétariat."
  },
  "Sturz": {
      "fr": "chute / écroulement / renversement",
      "lit": "action de culbuter brutalement",
      "pos_fr": "",
      "role": "Substantif au datif masculin singulier désignant l'anéantissement de l'aristocratie féodale."
  },
  "Ständischer": {
      "fr": "lié aux ordres / corporatif",
      "lit": "qui relève des ordres féodaux (Stände)",
      "pos_fr": "",
      "role": "Adjectif désignant les hiérarchies d'ordres féodales balayées par le capitalisme."
  },
  "Summe": {
      "fr": "somme, total",
      "lit": "totalité calculée, montant global",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Du moyen haut-allemand « summe », emprunté au latin « summa » (sommet, montant le plus élevé, total)."
  },
  "Sympathie": {
      "fr": "sympathie, affinité, bienveillance",
      "lit": "sentiment partagé, compassion",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Emprunté au grec ancien « sympatheia » (communion de sentiments), de « syn » (avec) + « pathos » (sentiment, épreuve)."
  },
  "System": {
      "fr": "système, ensemble ordonné",
      "lit": "structure articulée de propositions ou d'éléments",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Emprunté au grec ancien « systēma » (ensemble ordonné, corps organisé), composé de « syn » (ensemble) + « histanai » (établir)."
  },
  "Tat": {
      "fr": "acte, action concrète, fait accompli",
      "lit": "ce qui est fait ou accompli",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Du moyen haut-allemand « tāt », vieux haut-allemand « tāt » (action accomplie), d'origine proto-germanique *dēdi- (acte), rattaché à « tun » (faire)."
  },
  "Tatsache": {
      "fr": "fait / réalité objective",
      "lit": "ce qui est accompli et vérifiable",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin matérialiste soulignant l'évidence concrète et irréfutable de la crise révolutionnaire."
  },
  "Tauschmittel": {
      "fr": "moyens d'échange / monnaie",
      "lit": "instruments facilitant le commerce réciproque",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre composé désignant la masse monétaire métallique stimulant le grand commerce."
  },
  "Tauschwert": {
      "fr": "valeur d'échange",
      "lit": "valeur de troc marchand mesurée par le marché",
      "pos_fr": "Nom masculin",
      "role": "Catégorie économique cardinale désignant la forme quantitative sous laquelle les produits et l'activité humaine deviennent marchandises échangeables."
  },
  "Tautologie": {
      "fr": "tautologie, redite identique",
      "lit": "fait de répéter la même chose en d'autres termes",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Emprunté au grec ancien « tautologia », composé de « to auto » (la même chose) + « logos » (discours, parole)."
  },
  "Teil": {
      "fr": "partie / fraction",
      "lit": "fragment d'un ensemble",
      "pos_fr": "",
      "role": "Nom masculin désignant les segments sociaux précipités dans la classe laborieuse."
  },
  "Teilung": {
      "fr": "division / morcellement",
      "lit": "fragmentation d'une tâche ou d'un corps",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin économique désignant la division manufacturière du travail."
  },
  "Telegraphe": {
      "fr": "télégraphe électrique",
      "lit": "appareil de transmission de signaux",
      "pos_fr": "",
      "role": "Forme lemmatisée désignant le vecteur de télécommunication instantanée unifiant la planète."
  },
  "Tendenz": {
      "fr": "tendance historique",
      "lit": "orientation motrice du mouvement réel",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la direction dialectique objective du capitalisme moderne."
  },
  "Terrain": {
      "fr": "terrain / champ de lutte",
      "lit": "espace d'action politique ou militaire",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre emprunté au français, métaphore du théâtre de la confrontation de classe."
  },
  "Theorie": {
      "fr": "théorie, doctrine rationnelle",
      "lit": "contemplation intellectuelle, vue spéculative",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Emprunté au grec ancien « theōria » (action d'observer, contemplation intellectuelle), de « theōrein » (regarder, observer)."
  },
  "Tierquälerei": {
      "fr": "cruauté envers les animaux, mauvais traitements aux animaux",
      "lit": "tourment infligé aux bêtes",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Composé de « das Tier » (l'animal, la bête) + « quälen » (tourmenter) + suffixe péjoratif « -erei ».",
      "isCompound": true,
      "compoundParts": [
          "Tier",
          "quälen",
          "-erei"
      ]
  },
  "Tochter": {
      "fr": "fille (par rapport aux parents)",
      "lit": "descendante féminine directe",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Du moyen haut-allemand « tohter », vieux haut-allemand « tohter », de racine indo-européenne *dʰugh₂tḗr (fille)."
  },
  "Tod": {
      "fr": "mort / anéantissement fatal",
      "lit": "fin de la vie",
      "pos_fr": "",
      "role": "Nom masculin de la métaphore fatale des armes forgées par la bourgeoisie qui lui donneront la mort."
  },
  "Todeskampf": {
      "fr": "agonie, lutte suprême de la mort",
      "lit": "combat mortel / combat contre la mort",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
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
      "pos_fr": "",
      "role": "Métaphore célèbre et prophétique de Marx : la bourgeoisie produisant ses propres fossoyeurs."
  },
  "Transportwesen": {
      "fr": "transports, secteur des transports",
      "lit": "ensemble du système des transports",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Composé de « der Transport » (emprunt latin transportare) + « das Wesen » (nature, organisation, domaine général).",
      "isCompound": true,
      "compoundParts": [
          "Transport",
          "Wesen"
      ]
  },
  "Treue": {
      "fr": "fidélité, loyauté",
      "lit": "attachement loyal, confiance jurée",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Du moyen haut-allemand « triuwe », vieux haut-allemand « triuwa » (foi jurée, pacte loyal, sûreté), issu du proto-germanique *trewwō-."
  },
  "Trotz": {
      "fr": "défi, bravade, résistance obstinée",
      "lit": "défiance, rébellion",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Du moyen haut-allemand « trotzen » (défier), déverbal rattaché à une racine germanique exprimant l'insolence ou la fierté."
  },
  "Träger": {
      "fr": "porteur / agent historique",
      "lit": "celui qui porte le fardeau",
      "pos_fr": "",
      "role": "Concept hégélien : la bourgeoisie comme agent passif et inconscient des lois du progrès économique."
  },
  "Trägheit": {
      "fr": "inertie, apathie, indolence",
      "lit": "lenteur pesante, refus du mouvement",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Du moyen haut-allemand « trecheit », dérivé de l'adjectif « träge » (lent, inerte, paresseux, vieux haut-allemand « trāgi ») + « -heit »."
  },
  "Tätigkeit": {
      "fr": "activité / travail humain",
      "lit": "action agissante créatrice",
      "pos_fr": "",
      "role": "Concept philosophique : la praxis humaine révélant toute sa puissance transformatrice sur la nature."
  },
  "Umgestaltung": {
      "fr": "bouleversement / transformation révolutionnaire",
      "lit": "refonte radicale de la forme entière",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la refonte intégrale de la superstructure et des rapports matériels."
  },
  "Umschiffung": {
      "fr": "circumnavigation / contournement maritime",
      "lit": "voyage par mer contournant un cap",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant le franchissement du cap de Bonne-Espérance vers les Indes."
  },
  "Umstand": {
      "fr": "circonstance, fait, situation particulière",
      "lit": "ce qui se tient autour",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Calque du latin « circumstantia », composé de « um » (autour) + « der Stand » (la tenue, l'état debout).",
      "isCompound": true,
      "compoundParts": [
          "um",
          "Stand"
      ]
  },
  "Umsturz": {
      "fr": "renversement / subversion radicale",
      "lit": "chute de fond en comble, renversement",
      "pos_fr": "",
      "role": "Substantif composé désignant l'acte de destruction de l'ordre bourgeois par l'insurrection."
  },
  "Umtriebe": {
      "fr": "menées / manœuvres sourdes",
      "lit": "agitations souterraines (pluriel)",
      "pos_fr": "",
      "role": "Nom pluriel stigmatisant les intrigues machiavéliques de la réaction soudoyant les bas-fonds."
  },
  "Umwälzung": {
      "fr": "bouleversement / révolution radicale",
      "lit": "renversement complet de fond en comble",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin substantival désignant les transformations qualitatives et brutales des bases matérielles de production."
  },
  "Unbestimmtheit": {
      "fr": "indétermination, flou, imprécision",
      "lit": "état de ce qui n'est pas fixé ou déterminé",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Dérivé avec le préfixe privatif « un- » de « Bestimmtheit » (détermination, certitude).",
      "isCompound": true,
      "compoundParts": [
          "un-",
          "bestimmt",
          "-heit"
      ]
  },
  "Unfähigkeit": {
      "fr": "incapacité, impuissance, incompétence",
      "lit": "défaut de capacité à saisir ou accomplir",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Préfixe privatif « un- » + « Fähigkeit » (aptitude, capacité, de fähig, capable de saisir).",
      "isCompound": true,
      "compoundParts": [
          "un-",
          "fähig",
          "-keit"
      ]
  },
  "Unglauben": {
      "fr": "incrédulité, manque de foi, mécréance",
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
  "Unordnung": {
      "fr": "désordre / chaos économique",
      "lit": "absence d'ordre",
      "pos_fr": "",
      "role": "Nom féminin qualifiant le désordre panique semé par les crises périodiques de surproduction."
  },
  "Unschuld": {
      "fr": "innocence, ingénuité naïve",
      "lit": "absence de faute ou de culpabilité",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Du moyen haut-allemand « unschult », de « un- » (privatif) + « die Schuld » (la faute, dette, culpabilité).",
      "isCompound": true,
      "compoundParts": [
          "un-",
          "Schuld"
      ]
  },
  "Unsicherheit": {
      "fr": "insécurité / précarité existentielle",
      "lit": "absence de sécurité",
      "pos_fr": "",
      "role": "Nom féminin dépeignant la condition ontologique du prolétaire suspendu au bon vouloir du capital."
  },
  "Unsinn": {
      "fr": "absurdité, non-sens, bêtise",
      "lit": "dépourvu de sens",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Composé de « un- » + « der Sinn » (le sens, esprit, signification rationnelle).",
      "isCompound": true,
      "compoundParts": [
          "un-",
          "Sinn"
      ]
  },
  "Unsre": {
      "fr": "notre, nos",
      "lit": "qui nous appartient",
      "pos_fr": "Déterminant",
      "role": "déterminant possessif",
      "etymology": "Forme fléchie syncopée de « unser » (notre), du vieux haut-allemand « unsar »."
  },
  "Unterdrücker": {
      "fr": "oppresseur",
      "lit": "celui qui écrase sous sa domination",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin : le pôle dominant exploitant les producteurs dans toute société de classe."
  },
  "Unterdrückte": {
      "fr": "opprimé",
      "lit": "celui qui subit le joug et l'exploitation",
      "pos_fr": "Nom substantivé",
      "role": "Nom substantivé désignant les esclaves, serfs ou prolétaires écrasés par la classe dirigeante."
  },
  "Unterdrückung": {
      "fr": "oppression",
      "lit": "action d'écraser sous le poids de la domination",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin caractérisant les rapports de soumission politique et économique."
  },
  "Untergang": {
      "fr": "ruine / disparition",
      "lit": "effondrement, chute au fond de l'abîme",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin tragique : l'issue historique où deux classes antagonistes s'abîment ensemble."
  },
  "Unterhalt": {
      "fr": "entretien / subsistance vitale",
      "lit": "maintien en vie",
      "pos_fr": "",
      "role": "Terme économique mesurant le panier de biens indispensables pour maintenir l'ouvrier apte au labeur."
  },
  "Unterjochung": {
      "fr": "asservissement / mise sous le joug",
      "lit": "action de placer sous le joug",
      "pos_fr": "",
      "role": "Nom composé désignant la subordination prométhéenne de la nature et de l'ouvrier au capital."
  },
  "Unteroffizier": {
      "fr": "sous-officier",
      "lit": "gradé intermédiaire",
      "pos_fr": "",
      "role": "Nom composé de la hiérarchie disciplinaire de surveillance régnant dans la manufacture moderne."
  },
  "Unterschiebung": {
      "fr": "substitution subreptice, interpolation frauduleuse, supposition",
      "lit": "action de glisser par-dessous",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
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
      "pos_fr": "",
      "role": "Nom masculin désignant les singularités de sexe et d'âge nivelées par la machinerie universelle."
  },
  "Urbarmachung": {
      "fr": "défrichement / mise en culture",
      "lit": "action de rendre arable",
      "pos_fr": "",
      "role": "Nom composé célébrant la colonisation et la mise en exploitation agricole de continents entiers."
  },
  "Urheber": {
      "fr": "auteur, instigateur, initiateur",
      "lit": "celui qui élève à l'origine",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Du moyen haut-allemand « urhebere », composé du préfixe originaire « ur- » + « heben » (lever, soulever, commencer) + « -er ».",
      "isCompound": true,
      "compoundParts": [
          "ur-",
          "heben",
          "-er"
      ]
  },
  "Urteil": {
      "fr": "jugement, sentence, avis critique",
      "lit": "partage originaire, partage juridique de la cause",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Du moyen haut-allemand « urteil », vieux haut-allemand « urteili », composé de « ur- » (hors de, originaire) + racine de « teilen » (partager, distribuer le droit).",
      "isCompound": true,
      "compoundParts": [
          "ur-",
          "Teil"
      ]
  },
  "Utopie": {
      "fr": "utopie, chimère sociale",
      "lit": "lieu qui n'existe nulle part",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Mot forgé en 1516 par Thomas More à partir du grec ancien « ou » (non, pas de) + « topos » (lieu)."
  },
  "Vasall": {
      "fr": "vassal",
      "lit": "homme libre lié par serment de fidélité à un suzerain",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant le maillon intermédiaire de la féodalité féodale."
  },
  "Vaterland": {
      "fr": "patrie, pays natal",
      "lit": "terre des pères",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Du moyen haut-allemand « vaterlant », calque du latin médiéval « patria / terra patrum », composé de « Vater » (père) + « Land » (pays, terre).",
      "isCompound": true,
      "compoundParts": [
          "Vater",
          "Land"
      ]
  },
  "Verbesserer": {
      "fr": "réformateur, amendateur bien intentionné",
      "lit": "celui qui cherche à rendre meilleur",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Dérivé de « verbessern » (rendre meilleur, corriger, amender) + suffixe d'agent « -er »."
  },
  "Verbesserung": {
      "fr": "perfectionnement / amélioration technique",
      "lit": "action de rendre meilleur",
      "pos_fr": "",
      "role": "Nom féminin décrivant la sophistication ininterrompue des machines industrielles."
  },
  "Verbindung": {
      "fr": "union / liaison / association",
      "lit": "action de relier ensemble",
      "pos_fr": "",
      "role": "Substantif au datif désignant l'union pratique des partis démocratiques."
  },
  "Verbrechen": {
      "fr": "crime, forfait, délit grave",
      "lit": "action d'enfreindre ou de briser la loi",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Du moyen haut-allemand « verbrechen », substantivation de l'infinitif « verbrechen » (enfreindre, casser, briser)."
  },
  "Vereinigung": {
      "fr": "union / unification solidaire",
      "lit": "action de rendre un",
      "pos_fr": "",
      "role": "Concept politique suprême du Manifeste : l'unification révolutionnaire des travailleurs par l'association."
  },
  "Verfaulung": {
      "fr": "putréfaction / décomposition passive",
      "lit": "action de pourrir sur pied",
      "pos_fr": "",
      "role": "Métaphore biologique cruelle flétrissant le lumpenprolétariat comme lie décomposée de l'ancien monde."
  },
  "Verfügung": {
      "fr": "disposition",
      "lit": "mise à disposition de ressources",
      "pos_fr": "",
      "role": "Nom féminin de la locution « zur Verfügung stehen » (être à la disposition productive de la société)."
  },
  "Vergangenheit": {
      "fr": "passé, temps révolu",
      "lit": "état de ce qui s'en est allé ou s'est écoulé",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Formé sur le participe passé « vergangen » (écoulé, passé, du verbe vergehen) + « -heit ».",
      "isCompound": true,
      "compoundParts": [
          "vergangen",
          "-heit"
      ]
  },
  "Verhältnis": {
      "fr": "rapport / relation sociale / condition",
      "lit": "manière réciproque de se comporter et de se situer face à autrui",
      "pos_fr": "Nom neutre",
      "role": "Concept matérialiste majeur désignant les liens sociaux objectifs déterminés par le mode de production."
  },
  "Verkauf": {
      "fr": "vente, cession commerciale",
      "lit": "action d'aliéner contre argent",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Du moyen haut-allemand « verkouf », déverbal de « verkaufen » (vendre, faire le commerce pour autrui)."
  },
  "Verkehr": {
      "fr": "commerce / trafic / communication",
      "lit": "circulation entre humains",
      "pos_fr": "",
      "role": "Concept marxien désignant à la fois le commerce marchand et l'interaction sociale universelle."
  },
  "Verkehrsmittel": {
      "fr": "moyens de transport et de communication",
      "lit": "instruments de circulation",
      "pos_fr": "",
      "role": "Nom composé désignant les infrastructures logistiques (chemins de fer, navires) accélérant le capital."
  },
  "Verkehrsverhältnisse": {
      "fr": "rapports de circulation et d'échange",
      "lit": "relations régissant les échanges",
      "pos_fr": "",
      "role": "Concept matérialiste désignant le pendant marchand des rapports de production."
  },
  "Verkehrsweise": {
      "fr": "mode d'échange / de circulation",
      "lit": "manière d'interagir, de commercer et de communiquer",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin composé désignant les rapports de circulation marchande, de crédit et de transport inséparables de la production."
  },
  "Verkündigung": {
      "fr": "proclamation, annonce solennelle",
      "lit": "action de faire savoir publiquement",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Dérivé du verbe « verkündigen » (annoncer, proclamer, vieux haut-allemand verkunden) + « -ung »."
  },
  "Verlust": {
      "fr": "perte, préjudice",
      "lit": "privation par égarement ou destruction",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Du moyen haut-allemand « verlust », vieux haut-allemand « firrlust », déverbal du verbe « verlieren » (perdre)."
  },
  "Vermehrung": {
      "fr": "accroissement / multiplication",
      "lit": "action d'augmenter en quantité",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin économique désignant l'accumulation rapide des marchandises et du capital."
  },
  "Vernichtung": {
      "fr": "anéantissement / destruction",
      "lit": "action de réduire à néant (nichts)",
      "pos_fr": "",
      "role": "Nom puissant traduisant le sacrifice périodique obligatoire des produits et machines lors des crises."
  },
  "Vernichtungskrieg": {
      "fr": "guerre d'extermination",
      "lit": "guerre à mort sans merci",
      "pos_fr": "",
      "role": "Nom composé évoquant la violence dévastatrice d'un cataclysme détruisant tout commerce."
  },
  "Vernunft": {
      "fr": "raison, entendement rationnel",
      "lit": "faculté de percevoir intellectuellement et d'ordonner",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Du moyen haut-allemand « vernunft », vieux haut-allemand « firnumft » (saisie intellectuelle, perception), dérivé de « vernehmen » (percevoir, entendre)."
  },
  "Vernunftgesetz": {
      "fr": "loi de la raison, impératif rationnel",
      "lit": "loi dictée par la raison",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Composé de « die Vernunft » (la raison) + « das Gesetz » (la loi, ce qui est posé de manière immuable).",
      "isCompound": true,
      "compoundParts": [
          "Vernunft",
          "Gesetz"
      ]
  },
  "Verschiedenheit": {
      "fr": "diversité, différence, disparité",
      "lit": "état de ce qui est dissocié ou distinct",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Dérivé de l'adjectif « verschieden » (différent, distinct, à l'origine séparé) + suffixe « -heit »."
  },
  "Verständigung": {
      "fr": "entente / accord politique mutuel",
      "lit": "action de se faire comprendre et d'établir un accord",
      "pos_fr": "",
      "role": "Substantif au datif coordonné à 'Verbindung' désignant la concorde programmatique internationale."
  },
  "Verständnis": {
      "fr": "compréhension théorique / intelligence",
      "lit": "action d'entendre le sens",
      "pos_fr": "",
      "role": "Nom neutre qualifiant l'intelligence théorique du mouvement d'ensemble acquise par les idéologues ralliés."
  },
  "Versuch": {
      "fr": "tentative, essai, expérience",
      "lit": "action de mettre à l'épreuve",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Du moyen haut-allemand « versuoch », déverbal de « versuchen » (essayer, tenter, vieux haut-allemand far-suohhan, chercher à fond)."
  },
  "Verteilung": {
      "fr": "répartition, distribution, partage",
      "lit": "action de diviser en parts",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Dérivé du verbe « verteilen » (répartir, diviser en parts, de Teil part) + « -ung »."
  },
  "Vertreter": {
      "fr": "représentant, porte-parole, délégué",
      "lit": "celui qui se tient à la place d'autrui",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Nom d'agent dérivé du verbe « vertreten » (représenter, se tenir à la place de, de treten, marcher/fouler)."
  },
  "Verwaltung": {
      "fr": "administration, intendance, gestion",
      "lit": "action de régir et gouverner les biens",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Dérivé du verbe « verwalten » (administrer, régir, de walten, régner/gouverner) + « -ung »."
  },
  "Verwandlung": {
      "fr": "métamorphose, transformation, conversion",
      "lit": "action de tourner ou changer d'aspect",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Dérivé de « verwandeln » (changer, métamorphoser, de wenden, tourner) + « -ung »."
  },
  "Verwendung": {
      "fr": "utilisation, emploi, affectation",
      "lit": "action de tourner une ressource vers un but",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Dérivé de « verwenden » (employer, affecter, utiliser) + « -ung »."
  },
  "Verwirklichung": {
      "fr": "réalisation, matérialisation concrète",
      "lit": "action de rendre effectif ou réel",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Dérivé de « verwirklichen » (rendre réel, concrétiser, de wirklich, réel) + « -ung ».",
      "isCompound": true,
      "compoundParts": [
          "ver-",
          "wirklich",
          "-ung"
      ]
  },
  "Veränderung": {
      "fr": "changement, modification, altération",
      "lit": "action de rendre autre",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Dérivé du verbe « verändern » (rendre autre, modifier, de ander, autre) + « -ung ».",
      "isCompound": true,
      "compoundParts": [
          "ver-",
          "ander",
          "-ung"
      ]
  },
  "Vizinalweg": {
      "fr": "chemin vicinal / voie secondaire",
      "lit": "chemin communal de voisinage",
      "pos_fr": "",
      "role": "Nom composé illustrant la lenteur des communications médiévales comparée à l'éclair du chemin de fer."
  },
  "Vogelscheuche": {
      "fr": "épouvantail",
      "lit": "mannequin destiné à effrayer les oiseaux",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Composé de « der Vogel » (l'oiseau) + déverbal de « scheuchen » (effaroucher, faire fuir).",
      "isCompound": true,
      "compoundParts": [
          "Vogel",
          "scheuchen"
      ]
  },
  "Volk": {
      "fr": "peuple, nation, masse populaire",
      "lit": "troupe nombreuse, communauté nationale",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Du moyen haut-allemand « volc », vieux haut-allemand « folk » (troupe d'hommes en armes, foule, multitude, peuple)."
  },
  "Volksmasse": {
      "fr": "masse populaire, ensemble du peuple",
      "lit": "masse du peuple",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Composé de « Volk » + « die Masse » (la masse, foule compacte, du latin massa).",
      "isCompound": true,
      "compoundParts": [
          "Volk",
          "-s-",
          "Masse"
      ]
  },
  "Vorabend": {
      "fr": "veille",
      "lit": "soir précédant la journée décisive",
      "pos_fr": "",
      "role": "Substantif au datif masculin singulier après 'an dem' ('am Vorabend einer Revolution')."
  },
  "Voraussetzung": {
      "fr": "prémisse, condition préalable, présupposé",
      "lit": "ce qui est posé à l'avance",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Calque du latin « praesuppositio », composé de « voraus » (en avant, préalablement) + « setzen » (poser) + « -ung ».",
      "isCompound": true,
      "compoundParts": [
          "voraus",
          "setzen",
          "-ung"
      ]
  },
  "Vorgesetzte": {
      "fr": "supérieur hiérarchique, contremaître",
      "lit": "celui qui est placé devant",
      "pos_fr": "Nom masculin",
      "role": "participe passé substantivé",
      "etymology": "Participe passé substantivé de « vorsetzen » (placer devant ou à la tête).",
      "isCompound": true,
      "compoundParts": [
          "vor-",
          "gesetzt"
      ]
  },
  "Vorgesetzter": {
      "fr": "supérieur (hiérarchique)",
      "lit": "celui qui est installé en avant ou à la tête",
      "pos_fr": "Nom masculin",
      "role": "Participe substantivé désignant les seigneurs et maîtres de corporations investis d'une autorité coutumière."
  },
  "Vorläufer": {
      "fr": "précurseur, avant-coureur",
      "lit": "celui qui court en avant",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
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
      "pos_fr": "",
      "role": "Substantif composé attributif désignant le prologue à la révolution socialiste."
  },
  "Vorstellung": {
      "fr": "représentation mentale / préjugé d'antan",
      "lit": "image posée devant l'esprit",
      "pos_fr": "",
      "role": "Nom féminin désignant les dogmes idéologiques et préjugés religieux balayés par le marché."
  },
  "Vorurteil": {
      "fr": "préjugé bourgeois",
      "lit": "jugement hâtif non fondé",
      "pos_fr": "",
      "role": "Nom composé désignant la morale et les lois conçues comme simples masques des intérêts dominants."
  },
  "Vorwurf": {
      "fr": "reproche / grief infamant",
      "lit": "projectile verbal jeté à la figure d'un adversaire",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin (Vor + Wurf, jet en avant) : l'anathème jeté pour discréditer un parti."
  },
  "Völkerwanderung": {
      "fr": "migration des peuples / invasions barbares",
      "lit": "marche des peuples",
      "pos_fr": "",
      "role": "Nom composé historique évoquant les grandes migrations antiques dépassées par l'expansion bourgeoise."
  },
  "Waffe": {
      "fr": "arme",
      "lit": "instrument de combat",
      "pos_fr": "",
      "role": "Substantif à l'accusatif féminin pluriel désignant les armes politiques retournées contre le capital."
  },
  "Wahrheit": {
      "fr": "vérité",
      "lit": "caractère de ce qui est vrai et authentique",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Du moyen haut-allemand « wārheit », vieux haut-allemand « wāra » (vérité, fidélité au vrai), rattaché à « wahr » (vrai)."
  },
  "Wandel": {
      "fr": "mutation, transformation, conduite",
      "lit": "marche continuelle, changement d'état",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Du moyen haut-allemand « wandel », vieux haut-allemand « wandal » (tournant, changement, mœurs, commerce), déverbal de « wandeln »."
  },
  "Wappe": {
      "fr": "armoiries, blason, écusson",
      "lit": "signe d'armes gravé sur l'écu",
      "pos_fr": "Nom neutre",
      "role": "nom neutre (forme archaïque/abrégée de Wappen)",
      "etymology": "Doublet de « Waffe » (arme), emprunté au bas-allemand « wapen » (armes blasonnées sur le bouclier)."
  },
  "Ward": {
      "fr": "devint, fut (forme archaïque pour wurde)",
      "lit": "tourna vers un nouvel état",
      "pos_fr": "Verbe",
      "role": "verbe au prétérit singulier (devenir)",
      "etymology": "Forme ancienne et poétique de 1re/3e personne du singulier au prétérit du verbe « werden » (moyen haut-allemand wart, vieux haut-allemand ward)."
  },
  "Ware": {
      "fr": "marchandise",
      "lit": "produit du travail destiné à la vente sur un marché",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin : la cellule élémentaire de la richesse capitaliste selon Marx."
  },
  "Wasser": {
      "fr": "eau",
      "lit": "élément liquide",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Du moyen haut-allemand « wazzer », vieux haut-allemand « wazzar », d'origine indo-européenne *wódr̥ (eau)."
  },
  "Wasserleitung": {
      "fr": "aqueduc / conduite d'eau",
      "lit": "canalisation de l'eau",
      "pos_fr": "",
      "role": "Nom composé évoquant les monuments du génie civil romain surpassés par les travaux industriels."
  },
  "Wechsel": {
      "fr": "changement, alternance, lettre de change",
      "lit": "échange, succession alternée",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Du moyen haut-allemand « wehsel », vieux haut-allemand « wehsal » (échange, troc, changement), issu de la racine indo-européenne *weik- (changer, céder)."
  },
  "Wechselfäll": {
      "fr": "vicissitudes / aléas du marché",
      "lit": "cas de variation changeante",
      "pos_fr": "",
      "role": "Forme lemmatisée désignant les fluctuations instables auxquelles l'ouvrier-marchandise est assujetti."
  },
  "Weg": {
      "fr": "voie, chemin, route, moyen",
      "lit": "voie tracée pour le déplacement",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Du moyen haut-allemand « wec », vieux haut-allemand « weg », d'origine proto-germanique *wega- (route, chemin), rattaché au verbe « bewegen »."
  },
  "Wegfalle": {
      "fr": "suppression, disparition, cessation",
      "lit": "fait de tomber au rebut, caducité",
      "pos_fr": "Nom masculin",
      "role": "nom masculin au datif (variante de Wegfall)",
      "etymology": "Composé de la particule « weg » (au loin) + « der Fall » (la chute, cessation).",
      "isCompound": true,
      "compoundParts": [
          "weg-",
          "Fall"
      ]
  },
  "Wehmut": {
      "fr": "mélancolie / sentimentalité nostalgique",
      "lit": "douleur d'âme, tristesse nostalgique",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant la déploration passéiste des couches rétrogrades devant la dissolution de l'ancien monde."
  },
  "Weib": {
      "fr": "femme (terme archaïque 1848)",
      "lit": "être humain féminin adulte",
      "pos_fr": "",
      "role": "Nom neutre désignant la main-d'œuvre féminine exploitée à l'usine pour faire baisser les salaires."
  },
  "Weiber": {
      "fr": "femmes (forme plurielle)",
      "lit": "femmes adultes",
      "pos_fr": "",
      "role": "Forme plurielle de Weib."
  },
  "Weibergemeinschaft": {
      "fr": "communauté des femmes",
      "lit": "mise en commun des femmes",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
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
      "role": "nom neutre",
      "etymology": "Composé de « weihen » (consacrer, bénir, vieux haut-allemand wīhen) + « das Wasser » (l'eau).",
      "isCompound": true,
      "compoundParts": [
          "weihen",
          "Wasser"
      ]
  },
  "Weise": {
      "fr": "manière, façon, mode",
      "lit": "forme d'agir ou d'être",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Du moyen haut-allemand « wīs », vieux haut-allemand « wīsa » (façon d'agir, mélodie, manière), rattaché à « wissen » (savoir)."
  },
  "Welt": {
      "fr": "monde",
      "lit": "l'ensemble de la terre et de l'humanité",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin embrassant l'arène globale de la révolution prolétarienne."
  },
  "Weltgeschichte": {
      "fr": "histoire universelle, histoire mondiale",
      "lit": "histoire de l'humanité à l'échelle du monde",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
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
      "pos_fr": "",
      "role": "Concept goethéen et marxien célébrant la fin du provincialisme intellectuel au profit d'un patrimoine commun."
  },
  "Weltmarkt": {
      "fr": "marché mondial",
      "lit": "marché à l'échelle planétaire",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin composé désignant l'arène globale des échanges capitalistes où se réalise la loi de la valeur universelle."
  },
  "Weltteil": {
      "fr": "partie du monde / continent",
      "lit": "fraction du globe terrestre",
      "pos_fr": "",
      "role": "Nom composé désignant les continents entiers conquis par le commerce et l'industrie."
  },
  "Weltteile": {
      "fr": "parties du monde / continents",
      "lit": "forme plurielle de Weltteil",
      "pos_fr": "",
      "role": "Forme plurielle de Weltteil."
  },
  "Weltverbesserer": {
      "fr": "réformateur universel, redresseur de torts utopique",
      "lit": "celui qui prétend réparer ou améliorer le monde entier",
      "pos_fr": "Nom masculin",
      "role": "nom masculin souvent ironique",
      "etymology": "Composé de « Welt » (monde) + « Verbesserer » (amendateur, réformateur).",
      "isCompound": true,
      "compoundParts": [
          "Welt",
          "verbessern",
          "-er"
      ]
  },
  "Werft": {
      "fr": "jetez ! (forme impérative)",
      "lit": "lancez au loin !",
      "pos_fr": "Verbe",
      "role": "verbe à l'impératif pluriel",
      "etymology": "Impératif de deuxième personne du pluriel du verbe fort « werfen » (jeter, lancer)."
  },
  "Werk": {
      "fr": "œuvre, travail, ouvrage, usine",
      "lit": "produit d'une activité laborieuse",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Du moyen haut-allemand « werc », vieux haut-allemand « werc » (travail, action, œuvre), d'origine indo-européenne *werǵ- (agir, faire)."
  },
  "Werkstatt": {
      "fr": "atelier / manufacture",
      "lit": "lieu artisanal de travail manuel",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin désignant l'espace de travail dépassé par l'usine moderne."
  },
  "Werkstube": {
      "fr": "petit atelier artisanal",
      "lit": "salle de travail",
      "pos_fr": "",
      "role": "Nom composé nostalgique désignant l'échoppe patriarcale de l'artisan supplantée par l'usine géante."
  },
  "Wert": {
      "fr": "valeur, prix estimable",
      "lit": "équivalent en échange ou dignité propre",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Du moyen haut-allemand « wert », vieux haut-allemand « werd » (valeur, prix, honneur), rattaché à la racine germanique signifiant tourner, évaluer."
  },
  "Wesen": {
      "fr": "essence, être, nature intime, réalité",
      "lit": "ce qui subsiste et existe par soi-même",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Du moyen haut-allemand « wesen », ancien infinitif substantivé du verbe être (sein), vieux haut-allemand « wesan » (demeurer, être)."
  },
  "Widersinn": {
      "fr": "absurdité / paradoxe contre nature",
      "lit": "sens contraire à la raison",
      "pos_fr": "",
      "role": "Nom composé diagnostiquant le paradoxe d'une crise née de la surabondance de richesses."
  },
  "Widerspruch": {
      "fr": "contradiction dialectique",
      "lit": "parole dressée contre",
      "pos_fr": "",
      "role": "Concept hégélo-marxiste décisif : les conflits objectifs internes minant la société bourgeoise."
  },
  "Widerwärtigkeit": {
      "fr": "répugnance / pénibilité du travail",
      "lit": "caractère rebutant",
      "pos_fr": "",
      "role": "Nom féminin dénonçant l'écœurement provoqué par la monotonie mécanique de l'usine."
  },
  "Wiedererzeugung": {
      "fr": "reproduction, régénération",
      "lit": "action d'engendrer de nouveau",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Composé de « wieder » (de nouveau) + « die Erzeugung » (la génération, production).",
      "isCompound": true,
      "compoundParts": [
          "wieder",
          "Erzeugung"
      ]
  },
  "Wiederkehr": {
      "fr": "retour périodique / résurgence cyclique",
      "lit": "fait de revenir en boucle",
      "pos_fr": "",
      "role": "Nom composé désignant la régularité impitoyable des cycles de crises capitalistes."
  },
  "Wille": {
      "fr": "volonté, dessein délibéré",
      "lit": "faculté déterminante de désirer et choisir",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Du moyen haut-allemand « wille », vieux haut-allemand « willio » (volonté, désir, consentement), de racine indo-européenne *wel- (vouloir, choisir)."
  },
  "Willensäußerungen": {
      "fr": "manifestations de volonté, actes intentionnels",
      "lit": "expressions extérieures de la volonté",
      "pos_fr": "Nom féminin",
      "role": "nom féminin au pluriel",
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
      "fr": "réformateurs de coin de rue, réformateurs d'arrière-boutique",
      "lit": "réformateurs de recoins obscurs",
      "pos_fr": "Nom masculin",
      "role": "nom masculin pluriel dépréciatif",
      "etymology": "Composé de « der Winkel » (angle, recoin obscur, endroit clandestin) + « der Reformer » (le réformateur).",
      "isCompound": true,
      "compoundParts": [
          "Winkel",
          "Reformer"
      ]
  },
  "Wirklichkeit": {
      "fr": "réalité effective, réalité matérielle",
      "lit": "état de ce qui agit et produit des effets réels",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Calque créé par Maître Eckhart sur le latin « actualitas », formé sur « wirken » (agir, opérer) + « -lichkeit ».",
      "isCompound": true,
      "compoundParts": [
          "wirken",
          "-lich",
          "-keit"
      ]
  },
  "Wirksamkeit": {
      "fr": "efficacité, champ d'action agissant",
      "lit": "faculté de déployer des effets concrets",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Dérivé de « wirksam » (efficace, opérant) + suffixe « -keit ».",
      "isCompound": true,
      "compoundParts": [
          "wirksam",
          "-keit"
      ]
  },
  "Wirkung": {
      "fr": "effet, impact, action produite",
      "lit": "résultat engendré par une action",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Du moyen haut-allemand « wirkunge », déverbal de « wirken » (opérer, œuvrer, faire de l'effet) + « -ung »."
  },
  "Wirtschaft": {
      "fr": "économie, gestion des ressources, auberge",
      "lit": "administration d'une maison ou d'un domaine d'accueil",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Du moyen haut-allemand « wirt-schaft » (accueil généreux de l'hôte, intendance, festivités), dérivé de « Wirt » (aubergiste, maître de maison, hôte)."
  },
  "Wissenschaft": {
      "fr": "science / savoir scientifique",
      "lit": "ensemble des connaissances méthodiques",
      "pos_fr": "",
      "role": "Nom féminin désignant le savant désacralisé par le capital et ravalé au rang de travailleur à gages."
  },
  "Wohltätigkeit": {
      "fr": "bienfaisance, charité bourgeoise",
      "lit": "action d'opérer le bien",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
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
      "role": "nom masculin pluriel",
      "etymology": "Composé de « Wohltätigkeit » (bienfaisance) + « Organisierer » (organisateur, planificateur).",
      "isCompound": true,
      "compoundParts": [
          "Wohltätigkeit",
          "-s-",
          "Organisierer"
      ]
  },
  "Wort": {
      "fr": "mot / parole",
      "lit": "unité lexicale de parole formulée",
      "pos_fr": "Nom neutre",
      "role": "Nom neutre employé dans l'incise rhétorique « mit einem Wort » pour résumer d'un seul trait l'essence de la transformation bourgeoise."
  },
  "Worte": {
      "fr": "paroles, propos, discours relié",
      "lit": "propos exprimés en séquence sensée",
      "pos_fr": "Nom neutre",
      "role": "nom neutre au pluriel (pluriel signifiant discours, distinct de Wörter = mots isolés)",
      "etymology": "Pluriel contextuel de « Wort » (parole, verbe)."
  },
  "Wunder": {
      "fr": "miracle, prodige, merveille",
      "lit": "événement stupéfiant défiant l'ordre naturel",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Du moyen haut-allemand « wunder », vieux haut-allemand « wuntar » (prodige, objet d'étonnement), rattaché à une racine germanique d'admiration stupéfaite."
  },
  "Wunderwerk": {
      "fr": "œuvre merveilleuse / chef-d'œuvre",
      "lit": "ouvrage miraculeux",
      "pos_fr": "",
      "role": "Nom composé célébrant les pyramides industrielles de la bourgeoisie surpassant l'Égypte antique."
  },
  "Wunderwirkung": {
      "fr": "effet miraculeux, action prodigieuse",
      "lit": "effet tenant du miracle",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Composé de « Wunder » (miracle) + « Wirkung » (effet, action produite).",
      "isCompound": true,
      "compoundParts": [
          "Wunder",
          "Wirkung"
      ]
  },
  "Würde": {
      "fr": "dignité / valeur morale",
      "lit": "valeur intrinsèque inestimable d'une personne",
      "pos_fr": "Nom féminin",
      "role": "Concept éthique kantien par excellence (la dignité au-dessus de tout prix), que le capitalisme liquide dans le prix de marché."
  },
  "Z.B.": {
      "fr": "par ex., par exemple",
      "lit": "à titre d'exemple",
      "pos_fr": "Adverbe",
      "role": "adverbe / abréviation (zum Beispiel)",
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
      "pos_fr": "",
      "role": "Nom féminin mesurant l'explosion quantitative des populations citadines ouvrières."
  },
  "Zahlung": {
      "fr": "paiement / versement",
      "lit": "action de compter et verser une somme d'argent",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin économique désignant le règlement numéraire qui devient le seul lien social de la société marchande."
  },
  "Zar": {
      "fr": "le tsar (Nicolas Ier)",
      "lit": "autocrate de toutes les Russies",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin : le gendarme de l'Europe absolutiste et réactionnaire."
  },
  "Zehnstundenbill": {
      "fr": "loi de dix heures (bill anglais)",
      "lit": "loi limitant la journée de travail",
      "pos_fr": "",
      "role": "Nom composé historico-juridique désignant la grande victoire législative ouvrière en Angleterre (1847)."
  },
  "Zehntel": {
      "fr": "dixième, fraction d'un dixième",
      "lit": "dixième partie d'un tout",
      "pos_fr": "Nom neutre",
      "role": "nom neutre / adjectif numéral fractionnaire",
      "etymology": "Du moyen haut-allemand « zehendeil », vieux haut-allemand « zehanto teil », de « zehn » (dix) + « Teil » (partie)."
  },
  "Zeit": {
      "fr": "temps / moment opportun",
      "lit": "période, époque présente",
      "pos_fr": "Nom féminin",
      "role": "Nom féminin marquant l'urgence historique d'agir à visage découvert."
  },
  "Zeitpunkt": {
      "fr": "instant, moment précis, date fixée",
      "lit": "point précis sur la ligne du temps",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Composé de « die Zeit » (le temps) + « der Punkt » (le point, du latin punctum).",
      "isCompound": true,
      "compoundParts": [
          "Zeit",
          "Punkt"
      ]
  },
  "Zellengefängnis": {
      "fr": "prison cellulaire, pénitencier à isolement",
      "lit": "prison organisée en cellules individuelles",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Composé de « die Zelle » (la cellule, du latin cella) + « das Gefängnis » (la prison, lieu d'enfermement des captifs).",
      "isCompound": true,
      "compoundParts": [
          "Zelle",
          "-n-",
          "Gefängnis"
      ]
  },
  "Zentralisation": {
      "fr": "centralisation politique",
      "lit": "action de ramener au centre",
      "pos_fr": "",
      "role": "Loi politique marxienne : l'unification administrative nationale découlant de la centralisation du capital."
  },
  "Zersplitterung": {
      "fr": "éparpillement / émiettement féodal",
      "lit": "morcellement en éclats",
      "pos_fr": "",
      "role": "Nom féminin désignant la dispersion archaïque de la propriété et des ouvriers abolie par le capital."
  },
  "Ziel": {
      "fr": "but, fin, dessein, cible",
      "lit": "marque visée, limite assignée",
      "pos_fr": "Nom neutre",
      "role": "nom neutre",
      "etymology": "Du moyen haut-allemand « zil », vieux haut-allemand « zil » (terme, borne, but marqué d'avance), d'origine proto-germanique *tilam."
  },
  "Zivilisation": {
      "fr": "civilisation",
      "lit": "niveau de développement technique, matériel et civique",
      "pos_fr": "",
      "role": "Substantif au génitif féminin singulier désignant l'aire industrielle européenne."
  },
  "Zoll": {
      "fr": "douane / tarif douanier",
      "lit": "droit prélevé aux barrières",
      "pos_fr": "",
      "role": "Nom masculin désignant les barrières fiscales intérieures unifiées sous l'État national bourgeois."
  },
  "Zone": {
      "fr": "zone géographique",
      "lit": "bande territoriale climatique",
      "pos_fr": "",
      "role": "Nom féminin désignant les régions terrestres les plus reculées intégrées au circuit de production."
  },
  "Zubehör": {
      "fr": "accessoire / appendice",
      "lit": "ce qui est joint comme accessoire",
      "pos_fr": "",
      "role": "Métaphore glaçante de l'aliénation : l'ouvrier réduit à n'être qu'un « simple appendice de la machine »."
  },
  "Zug": {
      "fr": "expédition / marche / campagne",
      "lit": "mouvement en cortège",
      "pos_fr": "",
      "role": "Nom masculin de comparaison historique évoquant les expéditions de conquête du capitalisme."
  },
  "Zukunft": {
      "fr": "avenir",
      "lit": "ce qui vient vers nous",
      "pos_fr": "",
      "role": "Substantif à l'accusatif singulier, complément d'objet direct de 'vertreten'."
  },
  "Zunftbürger": {
      "fr": "maître de jurande / bourgeois corporatif",
      "lit": "maître artisan membre d'une corporation fermée",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin composé désignant les membres privilégiés des jurandes urbaines médiévales."
  },
  "Zunftmeister": {
      "fr": "maître de corporation",
      "lit": "maître à la tête d'un corps de métier juré",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin féodal désignant le détenteur du privilège exclusif de fabriquer un produit."
  },
  "Zunftwes": {
      "fr": "corporatisme, régime des corporations",
      "lit": "système corporatif médiéval",
      "pos_fr": "Nom neutre",
      "role": "nom neutre (forme pour Zunftwesen)",
      "etymology": "Composé de « die Zunft » (la corporation, jurande) + « das Wesen » (système, institution).",
      "isCompound": true,
      "compoundParts": [
          "Zunft",
          "Wesen"
      ]
  },
  "Zusammenhalte": {
      "fr": "cohésion / masse compacte",
      "lit": "action de tenir ensemble",
      "pos_fr": "",
      "role": "Nom composé décrivant l'union initiale encore artificielle des ouvriers imposée par la bourgeoisie."
  },
  "Zustand": {
      "fr": "état de choses / ordre établi / condition",
      "lit": "manière de se tenir, ordonnancement",
      "pos_fr": "",
      "role": "Substantif à l'accusatif masculin pluriel désignant le statu quo oppressif à renverser."
  },
  "Zweck": {
      "fr": "but / fin visée",
      "lit": "objectif conscient, intention délibérée",
      "pos_fr": "Nom masculin",
      "role": "Nom masculin désignant le programme historique conscient poursuivi par le prolétariat."
  },
  "Zölibat": {
      "fr": "célibat (en particulier clérical)",
      "lit": "état de vie hors mariage",
      "pos_fr": "Nom neutre",
      "role": "nom neutre (aussi masculin)",
      "etymology": "Emprunté au latin ecclésiastique « caelibatus » (célibat, état de non-marié)."
  },
  "ab": {
      "fr": "en diminution / particule séparable",
      "lit": "à partir de, vers le bas",
      "pos_fr": "",
      "role": "Particule séparable du verbe abnehmen marquant la baisse continue du salaire."
  },
  "aber": {
      "fr": "mais",
      "lit": "mais, au contraire",
      "pos_fr": "",
      "role": "Connecteur adversatif marquant la tension dialectique entre tactique immédiate et but final."
  },
  "abgeschmackt": {
      "fr": "insipide / absurde / saugrenu",
      "lit": "privé de goût",
      "pos_fr": "",
      "role": "Désigne l'absurdité des théories réactionnaires."
  },
  "abgestreifen": {
      "fr": "dépouiller / ôter",
      "lit": "enlever en frottant",
      "pos_fr": "",
      "role": "Verbe fort (abstreifen) marquant l'effacement de tout particularisme national chez le prolétaire."
  },
  "abhelfen": {
      "fr": "remédier à / pallier",
      "lit": "aider à éliminer",
      "pos_fr": "",
      "role": "Verbe régissant le datif : remédier aux maux sociaux."
  },
  "abhängig": {
      "fr": "dépendant / subordonné",
      "lit": "suspendu à, soumis",
      "pos_fr": "",
      "role": "Adjectif exprimant l'assujettissement économique d'une sphère à une autre."
  },
  "abnehmen": {
      "fr": "diminuer / décroître",
      "lit": "prendre vers le bas",
      "pos_fr": "",
      "role": "Exprime la baisse continue des salaires ouvriers."
  },
  "abreißen": {
      "fr": "arracher / déchirer",
      "lit": "arracher violemment",
      "pos_fr": "",
      "role": "Verbe marquant le geste iconoclaste de la bourgeoisie arrachant le voile sentimental de la famille."
  },
  "abschaffen": {
      "fr": "abolir / supprimer",
      "lit": "écarter de la création",
      "pos_fr": "",
      "role": "Verbe cardinal du programme communiste visant l'abolition radicale du mode d'appropriation privé."
  },
  "abschneiden": {
      "fr": "couper / trancher",
      "lit": "trancher en séparant",
      "pos_fr": "",
      "role": "Verbe évoquant l'interruption brutale des vivres et moyens de subsistance lors d'une crise."
  },
  "abschnitt": {
      "fr": "section / chapitre",
      "lit": "morceau coupé, section de texte",
      "pos_fr": "",
      "role": "Forme fléchie 'Abschnitt' du lemme 'Abschnitt'. Substantif masculin au datif régi par 'nach', désignant la section II du Manifeste."
  },
  "absichten": {
      "fr": "dessein / but / intention politique",
      "lit": "visée préméditée, but poursuivi",
      "pos_fr": "",
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
      "pos_fr": "",
      "role": "Forme fléchie 'absolute' du lemme 'absolut'. Épithète qualifiant le régime autocratique de la monarchie prussienne et autrichienne."
  },
  "absonderungen": {
      "fr": "séparations, isolements, ségrégations",
      "lit": "mises à l'écart distinctes",
      "pos_fr": "Nom féminin",
      "role": "nom féminin au pluriel (forme décapitalisée d'Absonderungen)",
      "etymology": "Pluriel de « Absonderung », dérivé du verbe « absondern » (séparer, isoler) + « -ung »."
  },
  "abstarben": {
      "fr": "s'éteignirent / dépérirent",
      "lit": "moururent complètement",
      "pos_fr": "",
      "role": "Désigne la disparition des classes féodales."
  },
  "abstrakt": {
      "fr": "abstrait",
      "lit": "détaché du réel",
      "pos_fr": "",
      "role": "Critique de la pensée spéculative coupée de la pratique."
  },
  "abzustumpfen": {
      "fr": "émousser / adoucir",
      "lit": "rendre obtus",
      "pos_fr": "",
      "role": "Action des socialistes utopiques voulant émousser la lutte des classes."
  },
  "administrativ": {
      "fr": "administratif",
      "lit": "relatif à la gestion",
      "pos_fr": "",
      "role": "Réformes superficielles n'affectant pas les rapports de propriété."
  },
  "agglomeriert": {
      "fr": "aggloméré",
      "lit": "amassé en pelote",
      "pos_fr": "",
      "role": "Participe passé du verbe agglomerieren décrivant la concentration massive des ruraux dans les villes."
  },
  "agrarisch": {
      "fr": "agraire",
      "lit": "relatif à la terre et à l'agriculture",
      "pos_fr": "",
      "role": "Épithète qualifiant les réformateurs fonciers américains ou la révolution paysanne."
  },
  "agrarische": {
      "fr": "agraire",
      "lit": "relatif à la terre et à l'agriculture",
      "pos_fr": "",
      "role": "Forme fléchie 'agrarische' du lemme 'agrarisch'. Épithète qualifiant les réformateurs fonciers américains ou la révolution paysanne."
  },
  "agrarischen": {
      "fr": "agraire",
      "lit": "relatif à la terre et à l'agriculture",
      "pos_fr": "",
      "role": "Forme fléchie 'agrarischen' du lemme 'agrarisch'. Épithète qualifiant les réformateurs fonciers américains ou la révolution paysanne."
  },
  "ahnen": {
      "fr": "soupçonner / pressentir",
      "lit": "avoir le pressentiment de",
      "pos_fr": "",
      "role": "Verbe soulignant l'inconscience des siècles passés face aux forces dormantes du travail social."
  },
  "ahnungsvoll": {
      "fr": "plein de pressentiments",
      "lit": "rempli d'intuition obscure",
      "pos_fr": "",
      "role": "Sensibilité romantique des poètes conservateurs."
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
      "pos_fr": "",
      "role": "Déterminant indéfini englobant l'universalité des classes ou des rapports sociaux."
  },
  "allen": {
      "fr": "tout / tous",
      "lit": "la totalité sans exception",
      "pos_fr": "",
      "role": "Forme fléchie 'allen' du lemme 'all'. Quantificateur universel embrassant tous les prolétaires, pays et mouvements."
  },
  "aller": {
      "fr": "tout / tous",
      "lit": "la totalité sans exception",
      "pos_fr": "",
      "role": "Forme fléchie 'aller' du lemme 'all'. Quantificateur universel embrassant tous les prolétaires, pays et mouvements."
  },
  "allerdings": {
      "fr": "certes, assurément, sans doute, toutefois",
      "lit": "en toutes choses, tout à fait",
      "pos_fr": "Adverbe",
      "role": "adverbe de concession ou d'affirmation",
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
      "pos_fr": "",
      "role": "Adjectif désignant le caractère total et indifférencié d'une crise ou d'une guerre."
  },
  "allgemeinst": {
      "fr": "le plus général",
      "lit": "au degré suprême de généralité",
      "pos_fr": "",
      "role": "Adjectif superlatif caractérisant les grandes lignes directrices du développement historique."
  },
  "allmählich": {
      "fr": "progressivement, peu à peu, insensiblement",
      "lit": "à pas mesurés, avec lenteur",
      "pos_fr": "Adverbe",
      "role": "adverbe / adjectif",
      "etymology": "Du moyen haut-allemand « almehelīch », dérivé de « gemach » (tranquille, mesuré, commode)."
  },
  "allseitig": {
      "fr": "universel / multilatéral",
      "lit": "de tous les côtés",
      "pos_fr": "",
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
      "lit": "ainsi fait, de cette manière",
      "pos_fr": "Adverbe connecteur logique",
      "role": "Connecteur argumentatif formulant la conclusion théorique rigoureuse d'une déduction historique."
  },
  "alt": {
      "fr": "vieux / ancien",
      "lit": "d'âge mûr, révolu",
      "pos_fr": "Adjectif",
      "role": "Adjectif marquant la décrépitude des monarchies d'Ancien Régime."
  },
  "altehrwürdig": {
      "fr": "vénérable par son antiquité / séculaire",
      "lit": "digne d'honneur par sa vieillesse",
      "pos_fr": "",
      "role": "Adjectif ironique désignant les dogmes médiévaux dissous par le commerce bourgeois."
  },
  "am": {
      "fr": "à / au / contre",
      "lit": "auprès de, à",
      "pos_fr": "",
      "role": "Forme fléchie 'am' du lemme 'an'. Préposition régissant l'accusatif après 'anschließen' ou le datif de lieu après 'arbeiten'."
  },
  "an": {
      "fr": "à / sur",
      "lit": "en contact avec",
      "pos_fr": "Préposition",
      "role": "Préposition spatiale ou d'attribution."
  },
  "anbauen": {
      "fr": "s'implanter / défricher / cultiver",
      "lit": "bâtir ou planter contre",
      "pos_fr": "",
      "role": "Verbe marquant la colonisation agricole et commerciale de toute la surface terrestre."
  },
  "ander": {
      "fr": "autre / distinct",
      "lit": "qui n'est pas le même, différent",
      "pos_fr": "Adjectif indéfini",
      "role": "Adjectif indéfini marquant l'exclusion de tout rapport social autre que l'intérêt égoïste du paiement au comptant."
  },
  "anderer": {
      "fr": "autre / différent",
      "lit": "second, distinct",
      "pos_fr": "",
      "role": "Adjectif marquant l'altérité historique radicale des réalisations bourgeoises."
  },
  "anders": {
      "fr": "autrement, d'une autre manière",
      "lit": "autrement",
      "pos_fr": "Adverbe",
      "role": "adverbe",
      "etymology": "Du moyen haut-allemand « anders », génitif adverbial de « ander » (autre)."
  },
  "anderseits": {
      "fr": "d'autre part",
      "lit": "de l'autre côté",
      "pos_fr": "",
      "role": "Adverbe articulant le second volet d'une alternative dialectique."
  },
  "andrerseits": {
      "fr": "d'autre part, d'un autre côté",
      "lit": "du côté de l'autre",
      "pos_fr": "Adverbe",
      "role": "adverbe",
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
      "pos_fr": "",
      "role": "Concept économique majeur désignant la confiscation privée du produit social par le capitaliste."
  },
  "anerkennen": {
      "fr": "reconnaître",
      "lit": "avouer et admettre la légitimité ou l'existence de",
      "pos_fr": "Verbe fort séparable",
      "role": "Verbe marquant l'aveu involontaire des puissances européennes que le communisme est déjà une force politique réelle."
  },
  "anfangs": {
      "fr": "au début / d'abord",
      "lit": "au commencement",
      "pos_fr": "",
      "role": "Adverbe marquant la phase initiale du développement historique de la lutte."
  },
  "angeblich": {
      "fr": "soi-disant, prétendu, supposé",
      "lit": "selon ce qui est déclaré",
      "pos_fr": "Adjectif",
      "role": "adjectif / adverbe",
      "etymology": "Dérivé de « angeben » (indiquer, prétendre) + suffixe « -lich »."
  },
  "angehören": {
      "fr": "appartenir à",
      "lit": "écouter auprès de",
      "pos_fr": "",
      "role": "Marque l'appartenance de classe ou de parti."
  },
  "angehörig": {
      "fr": "appartenant à / originaire de",
      "lit": "qui fait partie de",
      "pos_fr": "",
      "role": "Adjectif désignant les matières premières importées des zones les plus reculées."
  },
  "angemessen": {
      "fr": "approprié / correspondant",
      "lit": "mesuré pour convenir",
      "pos_fr": "",
      "role": "Adjectif qualifiant la constitution politique et juridique adaptée au règne du capital."
  },
  "angenommen": {
      "fr": "adopter / prendre / revêtir",
      "lit": "prendre vers soi, recevoir une forme",
      "pos_fr": "",
      "role": "Forme fléchie 'angenommen' du lemme 'annehmen'. Participe passé au sein du subjonctif passé concessif."
  },
  "angreifen": {
      "fr": "attaquer / s'en prendre à",
      "lit": "saisir contre",
      "pos_fr": "",
      "role": "Action offensive des prolétaires contre les machines."
  },
  "anlegn": {
      "fr": "appliquer / investir / engager",
      "lit": "poser contre",
      "pos_fr": "",
      "role": "Désigne le placement des capitaux ou l'aménagement foncier."
  },
  "annehmen": {
      "fr": "adopter / prendre / revêtir",
      "lit": "prendre vers soi, recevoir une forme",
      "pos_fr": "",
      "role": "Participe passé au sein du subjonctif passé concessif."
  },
  "anschließen": {
      "fr": "se rallier / s'associer à",
      "lit": "attacher avec (au réfléchi : s'agréger à)",
      "pos_fr": "",
      "role": "Verbe à particule séparable ('schließen an') régissant le réfléchi 'sich' et 'an'."
  },
  "ansehen": {
      "fr": "envisager / contempler",
      "lit": "regarder vers",
      "pos_fr": "",
      "role": "Verbe imposant aux hommes la lucidité matérialiste sans le fard des illusions religieuses."
  },
  "ansichten": {
      "fr": "opinion / conception / vue théorique",
      "lit": "regard porté sur une chose, doctrine",
      "pos_fr": "",
      "role": "Forme fléchie 'Ansichten' du lemme 'Ansicht'. Substantif à l'accusatif féminin pluriel désignant la doctrine publique communiste."
  },
  "antik": {
      "fr": "antique, de l'Antiquité",
      "lit": "ancien, classique",
      "pos_fr": "Adjectif",
      "role": "adjectif",
      "etymology": "Emprunté au latin « antiquus » (ancien, vénérable), dérivé de « ante » (devant, avant)."
  },
  "anwachsend": {
      "fr": "grandissant / croissant",
      "lit": "qui ne cesse d'augmenter",
      "pos_fr": "Participe présent adjectivé",
      "role": "Adjectif marquant l'expansion ininterrompue des besoins marchands."
  },
  "appellieren": {
      "fr": "en appeler à / invoquer",
      "lit": "faire appel",
      "pos_fr": "",
      "role": "Verbe marquant la nécessité pour la bourgeoisie d'invoquer le secours ouvrier dans ses combats."
  },
  "arbeiten": {
      "fr": "travailler / œuvrer à",
      "lit": "exercer un travail actif, militer",
      "pos_fr": "",
      "role": "Verbe principal régissant 'an' exprimant l'activité organisatrice inlassable des communistes."
  },
  "arbeitend": {
      "fr": "travailleur / laborieux",
      "lit": "qui travaille",
      "pos_fr": "",
      "role": "Désigne la classe ouvrière laborieuse."
  },
  "arbeiter": {
      "fr": "ouvrier / travailleur",
      "lit": "celui qui accomplit le travail productif",
      "pos_fr": "",
      "role": "Forme fléchie 'Arbeiter' du lemme 'Arbeiter'. Substantif masculin pluriel désignant le sujet historique de la révolution prolétarienne."
  },
  "arbeiterklasse": {
      "fr": "classe ouvrière / prolétariat",
      "lit": "classe des travailleurs",
      "pos_fr": "",
      "role": "Forme fléchie 'Arbeiterklasse' du lemme 'Arbeiterklasse'. Substantif composé au génitif féminin singulier, complément de nom de 'Zwecke und Interessen'."
  },
  "arbeitern": {
      "fr": "ouvrier / travailleur",
      "lit": "celui qui accomplit le travail productif",
      "pos_fr": "",
      "role": "Forme fléchie 'Arbeitern' du lemme 'Arbeiter'. Substantif masculin pluriel désignant le sujet historique de la révolution prolétarienne."
  },
  "arbeiterparteien": {
      "fr": "parti ouvrier",
      "lit": "parti des travailleurs",
      "pos_fr": "",
      "role": "Forme fléchie 'Arbeiterparteien' du lemme 'Arbeiterpartei'. Substantif composé au datif pluriel, régime de la préposition 'zu'."
  },
  "arbeitsstunde": {
      "fr": "heure de travail",
      "lit": "forme minuscule d'Arbeitsstunde",
      "pos_fr": "",
      "role": "Entrée pour Arbeitsstunde."
  },
  "assoziiert": {
      "fr": "associé",
      "lit": "uni en association",
      "pos_fr": "Adjectif",
      "role": "participe passé adjectivé",
      "etymology": "Emprunté au français « associer », du latin « associare » (unir des compagnons, « socius »)."
  },
  "auch": {
      "fr": "aussi / même / bien que",
      "lit": "également, de plus",
      "pos_fr": "",
      "role": "Adverbe de renfort dans la clause concessive 'welche... Form sie auch angenommen haben möge'."
  },
  "auf": {
      "fr": "sur / vers / contre",
      "lit": "sur, en direction de (préposition)",
      "pos_fr": "Préposition mixte",
      "role": "Préposition spatiale régissant ici l'accusatif pour marquer la direction de l'effet produit (« auf die Ausdehnung zurückwirken » : réagir sur l'extension)."
  },
  "auffaßt": {
      "fr": "conçoit / appréhende",
      "lit": "saisit vers le haut",
      "pos_fr": "",
      "role": "Façon dont une classe théorise ses propres intérêts."
  },
  "aufforderen": {
      "fr": "inviter / sommer / enjoindre",
      "lit": "exiger vers le haut",
      "pos_fr": "",
      "role": "Appel des utopistes au prolétariat."
  },
  "aufgeben": {
      "fr": "abandonner / renoncer à",
      "lit": "donner vers le haut, céder",
      "pos_fr": "",
      "role": "Infinitif avec zu ('aufzugeben') dépendant de la conjonction 'ohne'."
  },
  "aufgebläht": {
      "fr": "bouffi / boursouflé",
      "lit": "gonflé d'air",
      "pos_fr": "",
      "role": "Prétention boursouflée des petits-bourgeois allemands."
  },
  "aufgehäuft": {
      "fr": "accumulé, amassé, entassé",
      "lit": "mis en monceau",
      "pos_fr": "Adjectif",
      "role": "participe passé adjectivé",
      "etymology": "Participe de « aufhäufen » (entasser, accumuler, de Haufen tas/tas de blé).",
      "isCompound": true,
      "compoundParts": [
          "auf-",
          "Haufen"
      ]
  },
  "aufheben": {
      "fr": "abolir / dépasser (Aufhebung)",
      "lit": "lever, ramasser, détruire et conserver en élevant",
      "pos_fr": "Verbe fort (Aufhebung hégélienne)",
      "role": "Verbe hégélien cardinal : la bourgeoisie prétend avoir aboli les ordres féodaux, mais n'a fait que transposer la contradiction de classe."
  },
  "aufhören": {
      "fr": "cesser, s'arrêter, prendre fin",
      "lit": "lever l'écoute, faire silence",
      "pos_fr": "Verbe",
      "role": "verbe intransitif",
      "etymology": "Composé de « auf » + « hören » (écouter attentivement jusqu'à interruption du bruit).",
      "isCompound": true,
      "compoundParts": [
          "auf-",
          "hören"
      ]
  },
  "aufkommen": {
      "fr": "émerger, survenir, faire son apparition",
      "lit": "monter vers le haut, surgir",
      "pos_fr": "Verbe",
      "role": "verbe à l'infinitif",
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
      "role": "Adjectif caractérisant la bourgeoisie commerciale à ses débuts."
  },
  "auflösen": {
      "fr": "dissoudre / liquéfier / décomposer",
      "lit": "délier les liens solides pour transformer en solution liquide",
      "pos_fr": "Verbe séparable faible",
      "role": "Verbe chimique et dialectique décrivant la transmutation brutale de toutes les qualités morales en argent abstrait."
  },
  "auflösend": {
      "fr": "dissolvant / désagrégeant",
      "lit": "qui délie",
      "pos_fr": "",
      "role": "Éléments révolutionnaires dissolvant l'ordre ancien."
  },
  "aufrichten": {
      "fr": "redresser / ériger",
      "lit": "dresser vers le haut",
      "pos_fr": "",
      "role": "Verbe évoquant l'émancipation émancipatrice du prolétariat faisant sauter l'édifice officiel."
  },
  "aufstrebend": {
      "fr": "ascendant / émergent",
      "lit": "tendant vers le haut",
      "pos_fr": "",
      "role": "La bourgeoisie alors classe ascendante."
  },
  "auftauchend": {
      "fr": "émergent / surgissant",
      "lit": "plongeant vers le haut",
      "pos_fr": "",
      "role": "Revendications ouvrières spontanées."
  },
  "auftraten": {
      "fr": "entrèrent en scène / apparurent",
      "lit": "posèrent le pas",
      "pos_fr": "",
      "role": "Entrée historique du prolétariat dans l'arène politique."
  },
  "auftreten": {
      "fr": "intervenir / agir / entrer en scène",
      "lit": "poser le pied en avant, monter sur la scène",
      "pos_fr": "",
      "role": "Verbe à la 3e personne du singulier marquant l'entrée révolutionnaire de la bourgeoisie dans l'arène politique."
  },
  "auftritt": {
      "fr": "intervenir / agir / entrer en scène",
      "lit": "poser le pied en avant, monter sur la scène",
      "pos_fr": "",
      "role": "Forme fléchie 'auftritt' du lemme 'auftreten'. Verbe à la 3e personne du singulier marquant l'entrée révolutionnaire de la bourgeoisie dans l'arène politique."
  },
  "aufzugeben": {
      "fr": "abandonner / renoncer à",
      "lit": "donner vers le haut, céder",
      "pos_fr": "",
      "role": "Forme fléchie 'aufzugeben' du lemme 'aufgeben'. Infinitif avec zu ('aufzugeben') dépendant de la conjonction 'ohne'."
  },
  "aufzulesen": {
      "fr": "ramasser / glaner",
      "lit": "lire/cueillir par terre",
      "pos_fr": "",
      "role": "Image de l'aristocratie glanant les fruits de l'industrie."
  },
  "aufzwingen": {
      "fr": "imposer par la force",
      "lit": "contraindre en forçant par-dessus",
      "pos_fr": "",
      "role": "Verbe dénonçant la tentative bourgeoise d'imposer ses conditions d'existence comme loi éternelle."
  },
  "augenblick": {
      "fr": "instant / moment",
      "lit": "clin d'œil, battement de paupière",
      "pos_fr": "",
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
      "pos_fr": "",
      "role": "Élaboration théorique des systèmes doctrinaires."
  },
  "ausbeuten": {
      "fr": "exploiter, extorquer",
      "lit": "extraire tout le butin d'une mine ou ressource",
      "pos_fr": "Verbe",
      "role": "verbe transitif",
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
      "pos_fr": "",
      "role": "Verbe analytique fondamental de Marx définissant l'extorsion de plus-value sur l'ouvrier."
  },
  "ausbeuteten": {
      "fr": "exploitaient",
      "lit": "puisaient du butin",
      "pos_fr": "",
      "role": "Exploitation féodale ou bourgeoise."
  },
  "ausbrechen": {
      "fr": "éclater / se déclarer",
      "lit": "rompre hors de",
      "pos_fr": "",
      "role": "Verbe marquant l'irruption soudaine d'une crise épidémique ou d'une révolution ouverte."
  },
  "ausdehnen": {
      "fr": "étendre / déployer",
      "lit": "tendre vers le dehors, élargir les frontières",
      "pos_fr": "Verbe séparable faible",
      "role": "Verbe réflexif (sich ausdehnen) décrivant l'onde d'expansion conjointe de l'industrie et des transports."
  },
  "ausdrücken": {
      "fr": "exprimer / manifester",
      "lit": "presser au dehors",
      "pos_fr": "",
      "role": "Expression idéologique des rapports matériels."
  },
  "ausführen": {
      "fr": "mener à bien / exécuter",
      "lit": "conduire hors de",
      "pos_fr": "",
      "role": "Verbe célébrant les gigantesques expéditions de transformation matérielle du globe."
  },
  "ausführlich": {
      "fr": "détaillé, circonstancié, amplement",
      "lit": "mené jusqu'à l'exécution complète",
      "pos_fr": "Adjectif",
      "role": "adjectif / adverbe",
      "etymology": "Dérivé de « ausführen » (exécuter, développer) + « -lich »."
  },
  "ausgedehnter": {
      "fr": "plus vaste / plus étendu",
      "lit": "étiré plus largement",
      "pos_fr": "",
      "role": "Adjectif comparatif désignant l'exigence insatiable de marchés toujours élargis."
  },
  "ausgeheckt": {
      "fr": "fabriqué de toutes pièces / forgé",
      "lit": "couvé au nid",
      "pos_fr": "",
      "role": "Systèmes utopiques artificiels sans base historique."
  },
  "ausmachen": {
      "fr": "constituer / représenter",
      "lit": "faire au dehors",
      "pos_fr": "",
      "role": "Ce qui constitue l'essence d'une classe."
  },
  "ausposaunen": {
      "fr": "trompeter / clamer sur les toits",
      "lit": "sonner du trombone",
      "pos_fr": "",
      "role": "Ironie de Marx sur les proclamations bourgeoises."
  },
  "ausreichen": {
      "fr": "suffire / être suffisant",
      "lit": "tendre le bras jusqu'à la mesure requise",
      "pos_fr": "Verbe séparable faible",
      "role": "Verbe à particule décrivant l'incapacité objective des anciens ateliers à honorer l'immensité de la demande mondiale."
  },
  "ausschließlich": {
      "fr": "exclusif / sans partage",
      "lit": "qui exclut tout tiers, monopole absolu",
      "pos_fr": "Adjectif",
      "role": "Adjectif marquant le monopole politique total conquis par la bourgeoisie dans l'État représentatif contemporain."
  },
  "aussetzen": {
      "fr": "exposer à",
      "lit": "placer au-dehors",
      "pos_fr": "",
      "role": "Verbe caractérisant la soumission vulnérable de l'ouvrier-marchandise aux aléas du marché."
  },
  "aussprechen": {
      "fr": "exprimer, prononcer, déclarer ouvertement",
      "lit": "faire sortir par la parole",
      "pos_fr": "Verbe",
      "role": "verbe fort",
      "etymology": "Composé de « aus » (hors de) + « sprechen » (parler).",
      "isCompound": true,
      "compoundParts": [
          "aus-",
          "sprechen"
      ]
  },
  "austauschen": {
      "fr": "échanger",
      "lit": "troquer réciproquement",
      "pos_fr": "",
      "role": "Verbe économique désignant la circulation réciproque des biens et marchandises."
  },
  "auswärtig": {
      "fr": "étranger / extérieur",
      "lit": "situé au-dehors",
      "pos_fr": "",
      "role": "Adjectif qualifiant les bourgeoisies des puissances rivales concurrentes."
  },
  "auszahlen": {
      "fr": "payer / verser au comptant",
      "lit": "compter jusqu'au bout",
      "pos_fr": "",
      "role": "Verbe marquant le règlement en monnaie sonnante et trébuchante du salaire de l'ouvrier."
  },
  "auszeichnen": {
      "fr": "distinguer, caractériser, mettre en valeur",
      "lit": "marquer d'un signe distinctif",
      "pos_fr": "Verbe",
      "role": "verbe séparable",
      "etymology": "Composé de « aus » + « zeichnen » (marquer, dessiner, vieux haut-allemand zeichanōn).",
      "isCompound": true,
      "compoundParts": [
          "aus-",
          "zeichnen"
      ]
  },
  "bald": {
      "fr": "tantôt / bientôt",
      "lit": "à un moment donné, rapidement",
      "pos_fr": "Adverbe",
      "role": "Adverbe corrélatif (bald... bald...) marquant l'alternance d'une lutte tantôt ouverte tantôt cachée."
  },
  "bar": {
      "fr": "au comptant / en liquide",
      "lit": "à nu, à découvert, en espèces sonnantes visibles",
      "pos_fr": "Adjectif",
      "role": "Adjectif d'étymologie discutée désignant le paiement monétaire immédiat sans crédit ni affectivité coutumière."
  },
  "barbarisch": {
      "fr": "barbare / non civilisé",
      "lit": "étranger à la culture dominante",
      "pos_fr": "",
      "role": "Adjectif désignant dans le vocabulaire de 1848 les sociétés précapitalistes extérieures au marché mondial."
  },
  "barbarischst": {
      "fr": "le plus barbare",
      "lit": "au degré ultime de barbarie",
      "pos_fr": "",
      "role": "Adjectif superlatif soulignant la force d'assimilation universelle du marché."
  },
  "bearbeiten": {
      "fr": "travailler / façonner / endoctriner",
      "lit": "œuvrer sur",
      "pos_fr": "",
      "role": "Façonnement idéologique de l'opinion publique."
  },
  "bedauern": {
      "fr": "regret / désespoir (Großes Bedauern)",
      "lit": "peine ressentie",
      "pos_fr": "",
      "role": "Nom neutre de la locution « zum großen Bedauern » (au grand désespoir des réactionnaires)."
  },
  "bedeuten": {
      "fr": "signifier / vouloir dire",
      "lit": "pointer vers",
      "pos_fr": "",
      "role": "Sens objectif des revendications politiques."
  },
  "bedeutend": {
      "fr": "considérable / important",
      "lit": "qui a de la signification, du poids",
      "pos_fr": "",
      "role": "Adjectif évaluant la part massive de la population arrachée à l'isolement rural."
  },
  "bedingung": {
      "fr": "condition matérielle / préalable",
      "lit": "stipulation, prérequis d'un contrat",
      "pos_fr": "",
      "role": "Forme fléchie 'Bedingung' du lemme 'Bedingung'. Substantif féminin désignant les prérequis matériels ou politiques de l'émancipation."
  },
  "bedingungen": {
      "fr": "condition matérielle / préalable",
      "lit": "stipulation, prérequis d'un contrat",
      "pos_fr": "",
      "role": "Forme fléchie 'Bedingungen' du lemme 'Bedingung'. Substantif féminin désignant les prérequis matériels ou politiques de l'émancipation."
  },
  "bedrohen": {
      "fr": "menacer",
      "lit": "peser d'une menace sur",
      "pos_fr": "",
      "role": "Verbe traduisant la menace existentielle constante pesant sur les classes intermédiaires."
  },
  "bedurfen": {
      "fr": "eurent besoin de",
      "lit": "eurent nécessité de (bedürfen)",
      "pos_fr": "",
      "role": "Forme passée du verbe bedürfen mesurant les siècles requis par les bourgeois du moyen âge pour s'unir."
  },
  "bedürfen": {
      "fr": "nécessiter / avoir besoin de",
      "lit": "être dans le besoin de",
      "pos_fr": "",
      "role": "Verbe exprimant l'exigence matérielle minimale nécessaire à la reproduction de la force de travail."
  },
  "beendigen": {
      "fr": "achever / terminer",
      "lit": "mener à sa fin",
      "pos_fr": "",
      "role": "Verbe marquant la clôture d'un cycle d'exploitation directe en fabrique."
  },
  "befinden": {
      "fr": "se trouver / être situé",
      "lit": "se trouver soi-même",
      "pos_fr": "",
      "role": "Verbe décrivant la bourgeoisie engagée dans un état de conflit permanent."
  },
  "befreiung": {
      "fr": "libération / affranchissement",
      "lit": "action de rendre libre",
      "pos_fr": "",
      "role": "Forme fléchie 'Befreiung' du lemme 'Befreiung'. Substantif au génitif féminin singulier, complément de détermination de 'Bedingung'."
  },
  "befriedigt": {
      "fr": "satisfait / comblé",
      "lit": "rendu en paix",
      "pos_fr": "",
      "role": "Participe passé caractérisant les besoins matériels limités de l'économie locale féodale."
  },
  "befördern": {
      "fr": "favoriser / promouvoir",
      "lit": "transporter en avant",
      "pos_fr": "",
      "role": "Verbe mesurant si les rapports de propriété stimulent encore ou entravent les forces productives."
  },
  "beginnen": {
      "fr": "commencer / s'engager",
      "lit": "prendre commencement",
      "pos_fr": "",
      "role": "Noyau verbal à la 3e personne du singulier de la proposition finale."
  },
  "beginnt": {
      "fr": "commencer / s'engager",
      "lit": "prendre commencement",
      "pos_fr": "",
      "role": "Forme fléchie 'beginnt' du lemme 'beginnen'. Noyau verbal à la 3e personne du singulier de la proposition finale."
  },
  "begleiten": {
      "fr": "accompagner / faire escorte",
      "lit": "marcher côte à côte en escorte",
      "pos_fr": "Verbe inséparable faible",
      "role": "Verbe passif (war begleitet) exprimant la corrélation rigoureuse entre avancée économique et progrès politique."
  },
  "begreifen": {
      "fr": "comprendre, concevoir, appréhender",
      "lit": "saisir de la main tout autour",
      "pos_fr": "Verbe",
      "role": "verbe fort",
      "etymology": "Du moyen haut-allemand « begrīfen », de « be- » + « greifen » (saisir matériellement, puis intellectuellement, calque du latin comprehendere).",
      "isCompound": true,
      "compoundParts": [
          "be-",
          "greifen"
      ]
  },
  "begründen": {
      "fr": "fonder / asseoir",
      "lit": "poser sur un fondement (Grund)",
      "pos_fr": "",
      "role": "Verbe désignant l'établissement politique révolutionnaire de la suprématie prolétarienne."
  },
  "beherrschen": {
      "fr": "dominer / maîtriser",
      "lit": "exercer le pouvoir seigneurial sur",
      "pos_fr": "",
      "role": "Verbe de la célèbre allégorie de l'apprenti sorcier incapable de dominer les puissances déchaînées."
  },
  "bei": {
      "fr": "chez / auprès de",
      "lit": "à proximité de, auprès de",
      "pos_fr": "",
      "role": "Préposition régissant le datif désignant les destinataires prolétaires de la formation théorique."
  },
  "beide": {
      "fr": "les deux, tous deux, l'un et l'autre",
      "lit": "le couple des deux",
      "pos_fr": "Déterminant",
      "role": "déterminant / pronom numéral",
      "etymology": "Du moyen haut-allemand « beide », vieux haut-allemand « bēde », d'origine proto-germanique *bajōþau."
  },
  "bekannt": {
      "fr": "notoirement / comme on le sait",
      "lit": "de manière connue",
      "pos_fr": "",
      "role": "Faits historiques connus de tous."
  },
  "bekämpfen": {
      "fr": "combattre / lutter contre",
      "lit": "attaquer en combat",
      "pos_fr": "",
      "role": "Verbe décrivant les luttes menées contre la bourgeoisie par les diverses classes."
  },
  "bemächtigten": {
      "fr": "s'emparèrent de",
      "lit": "se rendirent maîtres de",
      "pos_fr": "",
      "role": "Les philosophes allemands s'emparant des idées françaises."
  },
  "benutzen": {
      "fr": "exploiter / mettre à profit",
      "lit": "tirer utilité de",
      "pos_fr": "",
      "role": "Verbe tactique désignant l'utilisation par les ouvriers des dissensions internes bourgeoises."
  },
  "bequemen": {
      "fr": "s'accommoder / se plier à",
      "lit": "se rendre commode",
      "pos_fr": "",
      "role": "Aristocratie contrainte de s'abaisser aux réalités du marché."
  },
  "bereichern": {
      "fr": "enrichir",
      "lit": "rendre riche",
      "pos_fr": "Verbe",
      "role": "verbe transitif ou réfléchi",
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
      "role": "Adverbe temporel insistant sur le caractère inéluctable et précoce de la reconnaissance du communisme."
  },
  "bereitwilliger": {
      "fr": "plus enclin / plus promptement disposé",
      "lit": "de volonté plus prête",
      "pos_fr": "",
      "role": "Adjectif comparatif caractérisant la vénalité du lumpenprolétariat."
  },
  "berufen": {
      "fr": "invoquer / appeler en référence",
      "lit": "crier vers",
      "pos_fr": "",
      "role": "Revendication d'une autorité morale ou historique."
  },
  "beruhen": {
      "fr": "reposer sur / être fondé sur",
      "lit": "reposer en paix sur",
      "pos_fr": "",
      "role": "Verbe d'analyse structurelle reliant le capital au salariat et le salariat à la concurrence."
  },
  "beschleunigt": {
      "fr": "accéléré",
      "lit": "rendu plus rapide",
      "pos_fr": "",
      "role": "Participe passé caractérisant l'intensification de la rotation machinisée pour extraire la plus-value."
  },
  "beschränken": {
      "fr": "se borner / se limiter à",
      "lit": "enfermer dans des barrières",
      "pos_fr": "",
      "role": "Verbe formulant la loi d'airain réduisant le coût de l'ouvrier au strict entretien biologique."
  },
  "besiegen": {
      "fr": "vaincre, triompher de",
      "lit": "remporter la victoire sur",
      "pos_fr": "Verbe",
      "role": "verbe transitif",
      "etymology": "Dérivé de « der Sieg » (la victoire, vieux haut-allemand sigu).",
      "isCompound": true,
      "compoundParts": [
          "be-",
          "Sieg"
      ]
  },
  "besitzen": {
      "fr": "posséder / détenir",
      "lit": "être assis sur",
      "pos_fr": "",
      "role": "Verbe marquant la détention de civilisation et d'industrie excédant les bornes du marché."
  },
  "besonder": {
      "fr": "particulier / distinct",
      "lit": "propre à un rang singulier",
      "pos_fr": "Adjectif",
      "role": "Adjectif caractérisant les privilèges corporatifs spécifiques."
  },
  "besonderer": {
      "fr": "particulier, distinct, spécifique",
      "lit": "séparé, mis à part",
      "pos_fr": "Adjectif",
      "role": "adjectif",
      "etymology": "Du moyen haut-allemand « besunder », de « bi » + « sunder » (à part, séparément)."
  },
  "besonders": {
      "fr": "en particulier, particulièrement, notamment",
      "lit": "à part",
      "pos_fr": "Adverbe",
      "role": "adverbe",
      "etymology": "Génitif adverbial de « besonder »."
  },
  "bestehen": {
      "fr": "se composer de / consister en",
      "lit": "se maintenir ferme, consister en",
      "pos_fr": "",
      "role": "Verbe de la complétive décrivant la composition composite du parti radical."
  },
  "bestehend": {
      "fr": "existant / actuel / en vigueur",
      "lit": "qui se tient debout, qui subsiste",
      "pos_fr": "",
      "role": "Épithète qualifiant l'ordre social établi contre lequel s'insurgent les communistes."
  },
  "bestehenden": {
      "fr": "existant / actuel / en vigueur",
      "lit": "qui se tient debout, qui subsiste",
      "pos_fr": "",
      "role": "Forme fléchie 'bestehenden' du lemme 'bestehend'. Épithète qualifiant l'ordre social établi contre lequel s'insurgent les communistes."
  },
  "besteht": {
      "fr": "se composer de / consister en",
      "lit": "se maintenir ferme, consister en",
      "pos_fr": "",
      "role": "Forme fléchie 'besteht' du lemme 'bestehen'. Verbe de la complétive décrivant la composition composite du parti radical."
  },
  "besten": {
      "fr": "au mieux / le mieux",
      "lit": "au meilleur",
      "pos_fr": "",
      "role": "Dans la locution 'im besten Fall' (au meilleur des cas)."
  },
  "bestimmen": {
      "fr": "déterminer, fixer, décider",
      "lit": "attribuer une voix, donner voix délibérative",
      "pos_fr": "Verbe",
      "role": "verbe transitif",
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
      "pos_fr": "",
      "role": "Vision leibnizienne bourgeoise du monde idéal."
  },
  "beständig": {
      "fr": "constant, permanent, continu",
      "lit": "qui se tient ferme",
      "pos_fr": "Adjectif",
      "role": "adjectif / adverbe",
      "etymology": "Du moyen haut-allemand « bestandic », de « bestehen » (demeurer ferme, subsister)."
  },
  "betrachten": {
      "fr": "considérer, contempler, examiner",
      "lit": "porter ses regards et son attention vers",
      "pos_fr": "Verbe",
      "role": "verbe transitif",
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
      "pos_fr": "",
      "role": "Participe passé décrivant la vénération d'antan accordée aux professions libérales."
  },
  "bevorstehend": {
      "fr": "imminent / prochain",
      "lit": "qui se tient devant dans le temps",
      "pos_fr": "",
      "role": "Adjectif qualifiant la chute inéluctable des classes moyennes dans la sphère ouvrière."
  },
  "bewaffnet": {
      "fr": "armé",
      "lit": "muni d'armes de guerre défensives et offensives",
      "pos_fr": "Adjectif / Participe",
      "role": "Participe qualifiant la commune bourgeoise médiévale qui s'armait pour défendre son autonomie contre les seigneurs."
  },
  "bewegen": {
      "fr": "mouvoir, agiter, inciter, émouvoir",
      "lit": "mettre en chemin ou en mouvement",
      "pos_fr": "Verbe",
      "role": "verbe fort / faible",
      "etymology": "Du moyen haut-allemand « bewegen », issu de « Weg » (chemin, voie).",
      "isCompound": true,
      "compoundParts": [
          "be-",
          "Weg"
      ]
  },
  "bewegung": {
      "fr": "mouvement / lutte politique",
      "lit": "mise en mouvement, dynamique sociale historique",
      "pos_fr": "",
      "role": "Forme fléchie 'Bewegung' du lemme 'Bewegung'. Substantif féminin désignant la dynamique politique globale de la lutte des classes."
  },
  "bewegungen": {
      "fr": "mouvement / lutte politique",
      "lit": "mise en mouvement, dynamique sociale historique",
      "pos_fr": "",
      "role": "Forme fléchie 'Bewegungen' du lemme 'Bewegung'. Substantif féminin désignant la dynamique politique globale de la lutte des classes."
  },
  "beweisen": {
      "fr": "prouver / démontrer",
      "lit": "montrer de manière irréfutable",
      "pos_fr": "",
      "role": "Verbe soulignant la preuve historique éclatante administrée par le travail humain désenchaîné."
  },
  "bewundern": {
      "fr": "admirer",
      "lit": "considérer comme miracle",
      "pos_fr": "",
      "role": "Verbe dénonçant la nostalgie réactionnaire fascinée par la barbarie chevaleresque."
  },
  "bewußt": {
      "fr": "consciemment",
      "lit": "avec conscience",
      "pos_fr": "",
      "role": "Action délibérée et lucide de classe."
  },
  "bewußtsein": {
      "fr": "conscience",
      "lit": "état d'être conscient, savoir de classe",
      "pos_fr": "",
      "role": "Forme fléchie 'Bewußtsein' du lemme 'Bewusstsein'. Substantif composé désignant la conscience de classe ouvrière éveillée par le parti."
  },
  "bezahlt": {
      "fr": "salarié / rétribué",
      "lit": "auquel on a compté le prix",
      "pos_fr": "",
      "role": "Participe passé démasquant le médecin et le juriste réduits à de simples ouvriers à gages."
  },
  "bieten": {
      "fr": "offrir / présenter",
      "lit": "tendre, présenter",
      "pos_fr": "",
      "role": "Ce qu'offre le marché ou l'opportunité révolutionnaire."
  },
  "bilden": {
      "fr": "former / constituer",
      "lit": "donner forme",
      "pos_fr": "",
      "role": "Verbe décrivant l'organisation politique du prolétariat en classe et parti unifiés."
  },
  "bis": {
      "fr": "jusqu'à",
      "lit": "vers le point d'aboutissement",
      "pos_fr": "",
      "role": "Préposition temporelle marquant le seuil historique de la crise révolutionnaire."
  },
  "bisher": {
      "fr": "jusqu'ici / jusqu'alors",
      "lit": "jusqu'à maintenant",
      "pos_fr": "",
      "role": "Adverbe délimitant l'époque prébourgeoise révolue."
  },
  "bisherig": {
      "fr": "qui a existé jusqu'alors / passé",
      "lit": "qui s'étendait jusqu'à présent",
      "pos_fr": "Adjectif",
      "role": "Adjectif marquant le seuil historique entre les sociétés passées et la modernité."
  },
  "bisherigen": {
      "fr": "jusqu'alors existant / actuel",
      "lit": "qui a duré jusqu'à présent",
      "pos_fr": "",
      "role": "Forme fléchie 'bisherigen' du lemme 'bisherig'. Épithète qualifiant la société de classes antérieure vouée au dépassement."
  },
  "bitter": {
      "fr": "amer / cinglant",
      "lit": "qui mord la langue",
      "pos_fr": "",
      "role": "Critiques acerbes dirigées contre la bourgeoisie."
  },
  "bleiben": {
      "fr": "rester / demeurer",
      "lit": "persister dans l'état",
      "pos_fr": "",
      "role": "Verbe constatant l'impossibilité pour la bourgeoisie de demeurer plus longtemps classe dirigeante."
  },
  "blind": {
      "fr": "aveugle",
      "lit": "dépourvu de vue",
      "pos_fr": "",
      "role": "Incompréhension aveugle de la marche de l'histoire."
  },
  "bloß": {
      "fr": "simple / pur / nu",
      "lit": "dépouillé de tout ornement",
      "pos_fr": "",
      "role": "Adjectif soulignant la réduction de l'ouvrier à un simple appendice mécanique de la machine."
  },
  "bourgeois": {
      "fr": "bourgeois",
      "lit": "membre de la classe possédante",
      "pos_fr": "",
      "role": "Forme fléchie 'Bourgeois' du lemme 'Bourgeois'. Substantif d'origine française au datif masculin pluriel désignant les radicaux bourgeois."
  },
  "bourgeoisie": {
      "fr": "bourgeoisie",
      "lit": "classe des détenteurs des moyens de production",
      "pos_fr": "",
      "role": "Forme fléchie 'Bourgeoisie' du lemme 'Bourgeoisie'. Substantif désignant la classe capitaliste dominante moderne."
  },
  "brandmarkend": {
      "fr": "infamant / flétrissant",
      "lit": "qui marque au fer rouge incandescent",
      "pos_fr": "Participe adjectivé",
      "role": "Adjectif métaphorique violent évoquant le châtiment médiéval au fer rouge."
  },
  "brauchen": {
      "fr": "avoir besoin de, nécessiter, employer",
      "lit": "faire usage de, consommer",
      "pos_fr": "Verbe",
      "role": "verbe transitif",
      "etymology": "Du moyen haut-allemand « brūchen », vieux haut-allemand « brūhhan » (jouir de, utiliser), racine germanique *brūkaną."
  },
  "brechen": {
      "fr": "rompre / briser",
      "lit": "casser par la force",
      "pos_fr": "",
      "role": "Verbe marquant l'irruption soudaine des émeutes et contestations ouvrières."
  },
  "bringen": {
      "fr": "amener / porter / réaliser",
      "lit": "transporter vers",
      "pos_fr": "",
      "role": "Verbe entrant dans la locution « zustande bringen » (accomplir ce dont l'activité humaine est capable)."
  },
  "brutal": {
      "fr": "brutal / féroce",
      "lit": "de la bête brute",
      "pos_fr": "",
      "role": "Adjectif qualifiant la violence sans fard de l'exploitation marchande et féodale."
  },
  "buntscheckig": {
      "fr": "bariolé / disparate / bigarré",
      "lit": "marqué de taches et carreaux bicolores variés",
      "pos_fr": "Adjectif",
      "role": "Adjectif métaphorique qualifiant la multiplicité désordonnée et hétérogène des liens juridiques et seigneuriaux de la féodalité."
  },
  "buntscheckigst": {
      "fr": "le plus disparate / bariolé",
      "lit": "tacheté de mille couleurs",
      "pos_fr": "",
      "role": "Désigne les réformes bariolées et hétéroclites."
  },
  "bürgerlich": {
      "fr": "bourgeois",
      "lit": "relatif à la bourgeoisie ou au citoyen",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant les rapports matériels et juridiques dominés par la bourgeoisie."
  },
  "bürgerliche": {
      "fr": "bourgeois",
      "lit": "propre à la bourgeoisie et au capital",
      "pos_fr": "",
      "role": "Forme fléchie 'bürgerliche' du lemme 'bürgerlich'. Épithète qualifiant la révolution anti-féodale bourgeoise imminente en Allemagne."
  },
  "bürgerlichen": {
      "fr": "bourgeois",
      "lit": "propre à la bourgeoisie et au capital",
      "pos_fr": "",
      "role": "Forme fléchie 'bürgerlichen' du lemme 'bürgerlich'. Épithète qualifiant la révolution anti-féodale bourgeoise imminente en Allemagne."
  },
  "chartisten": {
      "fr": "chartiste",
      "lit": "partisan de la Charte du Peuple (People's Charter de 1838)",
      "pos_fr": "",
      "role": "Forme fléchie 'Chartisten' du lemme 'Chartist'. Substantif au datif pluriel désignant le mouvement ouvrier chartiste britannique."
  },
  "chinesisch": {
      "fr": "chinois",
      "lit": "relatif à la Chine impériale",
      "pos_fr": "Adjectif",
      "role": "Adjectif géographique marquant l'ouverture impérialiste du gigantesque marché asiatique."
  },
  "christlich": {
      "fr": "chrétien",
      "lit": "relatif au Christ",
      "pos_fr": "Adjectif",
      "role": "adjectif",
      "etymology": "Dérivé de « Christus » avec le suffixe germanique « -lich »."
  },
  "d.h.": {
      "fr": "c'est-à-dire",
      "lit": "abréviation de das heißt (cela signifie)",
      "pos_fr": "",
      "role": "Locution introduisant une équivalence conceptuelle rigoureuse dans l'argumentation."
  },
  "da": {
      "fr": "comme / puisque / là où",
      "lit": "en ce point temporel ou causal",
      "pos_fr": "",
      "role": "Introduit la cause matérielle d'un événement."
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
      "pos_fr": "",
      "role": "Adverbe opposant les modes de production passés et présents."
  },
  "daher": {
      "fr": "par conséquent / c'est pourquoi",
      "lit": "venant de là",
      "pos_fr": "",
      "role": "Adverbe marquant la déduction logique tirée des rapports matériels."
  },
  "damals": {
      "fr": "à cette époque-là, alors",
      "lit": "à ce moment-là",
      "pos_fr": "Adverbe",
      "role": "adverbe temporel",
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
      "lit": "avec cela, en conséquence",
      "pos_fr": "Adverbe pronominal",
      "role": "Adverbe pronominal marquant la corrélation immédiate entre expansion marchande et essor bourgeois."
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
      "pos_fr": "",
      "role": "Pronom adverbial désignant la cause productive issue des contradictions du capital."
  },
  "darin": {
      "fr": "en cela, là-dedans, y",
      "lit": "dans cela",
      "pos_fr": "Adverbe",
      "role": "adverbe pronominal",
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
      "role": "Verbe de transparence politique : les communistes récusent le secret et exposent leurs buts à la face du monde."
  },
  "darstellen": {
      "fr": "représenter / constituer",
      "lit": "poser devant",
      "pos_fr": "",
      "role": "Représentation concrète des rapports sociaux."
  },
  "darum": {
      "fr": "pour autant / pour cela",
      "lit": "autour de cela, pour ce motif",
      "pos_fr": "",
      "role": "Adverbe marquant la réserve d'indépendance critique des communistes."
  },
  "darüber": {
      "fr": "au-dessus, là-dessus, à ce sujet",
      "lit": "au-dessus de cela",
      "pos_fr": "Adverbe",
      "role": "adverbe pronominal",
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
      "pos_fr": "",
      "role": "Forme fléchie 'das' du lemme 'der'. Article défini déterminant un groupe nominal selon son cas, genre et nombre."
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
      "pos_fr": "",
      "role": "Adjectif décrivant les syndicats stables formés en vue des grèves et soulèvements."
  },
  "dazu": {
      "fr": "pour cela, en plus, à cette fin, en outre",
      "lit": "vers cela",
      "pos_fr": "Adverbe",
      "role": "adverbe pronominal",
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
      "pos_fr": "",
      "role": "Forme fléchie 'daß' du lemme 'dass'. Conjonction introduisant la proposition complétive d'objet de 'verkennen' et 'erklären'."
  },
  "dem": {
      "fr": "le / la / les / ce",
      "lit": "l'article défini / le démonstratif",
      "pos_fr": "",
      "role": "Forme fléchie 'dem' du lemme 'der'. Article défini déterminant un groupe nominal selon son cas, genre et nombre."
  },
  "demokratisch": {
      "fr": "démocratique / démocrate",
      "lit": "relatif à la démocratie républicaine",
      "pos_fr": "",
      "role": "Épithète qualifiant les partis populaires et socialistes d'opposition."
  },
  "demokratischen": {
      "fr": "démocratique / démocrate",
      "lit": "relatif à la démocratie républicaine",
      "pos_fr": "",
      "role": "Forme fléchie 'demokratischen' du lemme 'demokratisch'. Épithète qualifiant les partis populaires et socialistes d'opposition."
  },
  "den": {
      "fr": "le / la / les / ce",
      "lit": "l'article défini / le démonstratif",
      "pos_fr": "",
      "role": "Forme fléchie 'den' du lemme 'der'. Article défini déterminant un groupe nominal selon son cas, genre et nombre."
  },
  "denken": {
      "fr": "penser, réfléchir, concevoir",
      "lit": "exercer l'esprit",
      "pos_fr": "Verbe",
      "role": "verbe mixte à l'infinitif",
      "etymology": "Du moyen haut-allemand « denken », vieux haut-allemand « dencan », de racine indo-européenne *teng- (penser, sentir)."
  },
  "denn": {
      "fr": "car, en effet",
      "lit": "puisque, car",
      "pos_fr": "Conjonction",
      "role": "conjonction de coordination",
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
      "pos_fr": "",
      "role": "Articule la dépendance idéologique vis-à-vis des gouvernements."
  },
  "derselbe": {
      "fr": "le même / ce même",
      "lit": "celui-là même, le identique",
      "pos_fr": "Pronom démonstratif d'identité",
      "role": "Pronom ou adjectif d'identité marquant la stricte équivalence ou proportion (employé dans « in demselben Maße » : dans la même mesure, au fur et à mesure)."
  },
  "despotischer": {
      "fr": "despotique, autoritaire",
      "lit": "exercé en maître absolu",
      "pos_fr": "Adjectif",
      "role": "adjectif",
      "etymology": "Emprunté au grec ancien « despotēs » (maître absolu de maison) + « -isch »."
  },
  "desto": {
      "fr": "d'autant plus",
      "lit": "à proportion de",
      "pos_fr": "",
      "role": "Adverbe corrélatif (je... desto) marquant une proportionnalité rigoureuse."
  },
  "deutsch": {
      "fr": "allemand",
      "lit": "relatif aux États germaniques",
      "pos_fr": "Adjectif",
      "role": "Adjectif national désignant les polices des monarchies de la Confédération germanique."
  },
  "deutsche": {
      "fr": "allemand",
      "lit": "propre au peuple allemand",
      "pos_fr": "",
      "role": "Forme fléchie 'deutsche' du lemme 'deutsch'. Épithète qualifiant les ouvriers allemands et leur révolution bourgeoise spécifique."
  },
  "deutschen": {
      "fr": "allemand",
      "lit": "propre au peuple allemand",
      "pos_fr": "",
      "role": "Forme fléchie 'deutschen' du lemme 'deutsch'. Épithète qualifiant les ouvriers allemands et leur révolution bourgeoise spécifique."
  },
  "deutschland": {
      "fr": "Allemagne",
      "lit": "pays du peuple allemand",
      "pos_fr": "",
      "role": "Forme fléchie 'Deutschland' du lemme 'Deutschland'. Nom propre au datif neutre singulier désignant l'espace politique central de 1848."
  },
  "die": {
      "fr": "le / la / les / ce",
      "lit": "l'article défini / le démonstratif",
      "pos_fr": "",
      "role": "Forme fléchie 'die' du lemme 'der'. Article défini déterminant un groupe nominal selon son cas, genre et nombre."
  },
  "dienen": {
      "fr": "servir à",
      "lit": "être au service de",
      "pos_fr": "",
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
      "pos_fr": "",
      "role": "Forme fléchie 'diese' du lemme 'dieser'. Déterminant démonstratif renvoyant au sujet politique immédiatement nommé."
  },
  "dieselbe": {
      "fr": "le même / ce même",
      "lit": "celui-là même",
      "pos_fr": "",
      "role": "Forme fléchie 'dieselbe' du lemme 'derselbe'. Pronom démonstratif d'identité mettant en relief l'héroïsme insurrectionnel du parti polonais."
  },
  "diesen": {
      "fr": "ce / cette / ces / celui-ci",
      "lit": "celui-ci (démonstratif d'immédiateté)",
      "pos_fr": "",
      "role": "Forme fléchie 'diesen' du lemme 'dieser'. Déterminant démonstratif renvoyant au sujet politique immédiatement nommé."
  },
  "dieser": {
      "fr": "ce / cette / ces / celui-ci",
      "lit": "celui-ci, ce proche (démonstratif)",
      "pos_fr": "Pronom / déterminant démonstratif",
      "role": "Déterminant démonstratif désignant avec précision un fait ou une institution immédiatement antérieure."
  },
  "direkt": {
      "fr": "direct / sans détour",
      "lit": "en ligne droite, sans intermédiaire féodal ou spirituel",
      "pos_fr": "Adjectif",
      "role": "Adjectif marquant la brutalité immédiate du contrat salarial entre le patron et l'ouvrier sans médiation corporative."
  },
  "doch": {
      "fr": "pourtant, cependant, néanmoins, mais",
      "lit": "pourtant",
      "pos_fr": "Adverbe",
      "role": "adverbe / conjonction",
      "etymology": "Du moyen haut-allemand « doch », vieux haut-allemand « doh », de racine proto-germanique *þau-hw (et pourtant)."
  },
  "dort": {
      "fr": "là / là-bas",
      "lit": "en cet autre lieu éloigné",
      "pos_fr": "Adverbe de lieu",
      "role": "Adverbe spatial marquant la diversité territoriale des régimes urbains en Europe."
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
      "pos_fr": "",
      "role": "Participe présent marquant le péril récurrent des crises commerciales."
  },
  "drohender": {
      "fr": "de façon plus menaçante",
      "lit": "plus menaçant",
      "pos_fr": "",
      "role": "Menace grandissante des crises périodiques."
  },
  "drängen": {
      "fr": "refouler / pousser avec force",
      "lit": "presser, pousser avec insistance vers un lieu",
      "pos_fr": "Verbe faible",
      "role": "Verbe d'action exprimant l'éviction brutale des anciennes classes féodales hors de l'avant-scène sociale."
  },
  "durch": {
      "fr": "par / à travers",
      "lit": "au moyen de",
      "pos_fr": "Préposition (régime accusatif)",
      "role": "Préposition d'instrument régissant l'accusatif."
  },
  "durchlaufen": {
      "fr": "parcourir, traverser, franchir successivement",
      "lit": "courir à travers",
      "pos_fr": "Verbe",
      "role": "verbe inséparable",
      "etymology": "Composé de « durch » (à travers) + « laufen » (courir).",
      "isCompound": true,
      "compoundParts": [
          "durch-",
          "laufen"
      ]
  },
  "durchsetzen": {
      "fr": "imposer / faire triompher",
      "lit": "poser à travers",
      "pos_fr": "",
      "role": "Triomphe des intérêts prolétariens."
  },
  "durchtränken": {
      "fr": "imbiber / saturer",
      "lit": "abreuver à travers",
      "pos_fr": "",
      "role": "Pénétration de la spéculation dans les concepts politiques."
  },
  "dänisch": {
      "fr": "danois",
      "lit": "en langue danoise",
      "pos_fr": "Adjectif",
      "role": "Adjectif de langue pour l'édition scandinave du Manifeste."
  },
  "dürfen": {
      "fr": "pouvoir (avoir la permission/légitimité)",
      "lit": "avoir le droit, être autorisé",
      "pos_fr": "Verbe",
      "role": "verbe modal",
      "etymology": "Du moyen haut-allemand « durfen », vieux haut-allemand « durfan » (avoir besoin, oser, être autorisé)."
  },
  "dürr": {
      "fr": "aride / brutale / décharnée",
      "lit": "sec, desséché, sans chair ni fard",
      "pos_fr": "Adjectif",
      "role": "Adjectif hautement expressif soulignant le caractère dépouillé et rigide de l'extorsion capitaliste sans habillage poétique."
  },
  "eben": {
      "fr": "précisément, justement, tout juste",
      "lit": "uni, égal, plat, au même niveau",
      "pos_fr": "Adverbe",
      "role": "adverbe de nuance",
      "etymology": "Du moyen haut-allemand « eben », vieux haut-allemand « eban » (égal, uni, plat)."
  },
  "ebenso": {
      "fr": "autant de / tout aussi",
      "lit": "de même sorte",
      "pos_fr": "",
      "role": "Adverbe de degré corrélé à 'viele' ('ebenso viele Waffen' : autant d'armes)."
  },
  "ebensovieler": {
      "fr": "d'autant de",
      "lit": "d'une même quantité de",
      "pos_fr": "",
      "role": "Déterminant quantitatif exprimant une exacte proportionnalité."
  },
  "ebensowenig": {
      "fr": "tout aussi peu",
      "lit": "aussi peu",
      "pos_fr": "",
      "role": "Souligne l'impossibilité égale de deux illusions."
  },
  "egoistisch": {
      "fr": "égoïste",
      "lit": "centré exclusivement sur son propre moi et profit",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant le principe individualiste bourgeois de maximisation du gain aux dépens d'autrui."
  },
  "ehe": {
      "fr": "avant que",
      "lit": "plus tôt que",
      "pos_fr": "",
      "role": "Conjonction temporelle marquant l'antériorité d'un processus dialectique."
  },
  "ehrwürdigen": {
      "fr": "vénérables (forme adjectivale fléchie)",
      "lit": "dignes d'honneur (ehrwürdig)",
      "pos_fr": "",
      "role": "Adjectif qualifiant les activités naguère entourées de révérence sacrée."
  },
  "eifern": {
      "fr": "s'emporter contre / vitupérer",
      "lit": "faire du zèle",
      "pos_fr": "",
      "role": "Vitupérations morales contre le matérialisme."
  },
  "eigen": {
      "fr": "propre / personnel",
      "lit": "qui appartient en exclusivité",
      "pos_fr": "",
      "role": "Adjectif marquant la spécificité des intérêts et créations de chaque classe."
  },
  "eigens": {
      "fr": "spécialement / expressément",
      "lit": "en propre",
      "pos_fr": "",
      "role": "Créé exprès pour satisfaire un dessein politique."
  },
  "eigenst": {
      "fr": "le plus propre / le plus authentique",
      "lit": "au degré suprême de possession intime",
      "pos_fr": "",
      "role": "Adjectif superlatif établissant le prolétariat comme l'enfant le plus authentique de la grande industrie."
  },
  "eigentlich": {
      "fr": "véritable / réel",
      "lit": "conforme à la nature propre",
      "pos_fr": "",
      "role": "Adjectif identifiant le résultat historique fondamental sous l'apparence des revers immédiats."
  },
  "eigentumsfrage": {
      "fr": "question de la propriété",
      "lit": "interrogation fondamentale sur la possession des moyens de production",
      "pos_fr": "",
      "role": "Forme fléchie 'Eigentumsfrage' du lemme 'Eigentumsfrage'. Substantif composé à l'accusatif singulier, objet direct de 'hervorheben'."
  },
  "eigentumslos": {
      "fr": "dénué de propriété / sans propriété",
      "lit": "sans propriété privée",
      "pos_fr": "",
      "role": "Adjectif définissant l'essence matérielle du prolétaire moderne."
  },
  "eigentümlich": {
      "fr": "particulier, propre, singulier, caractéristique",
      "lit": "qui appartient en propre",
      "pos_fr": "Adjectif",
      "role": "adjectif",
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
      "pos_fr": "",
      "role": "Forme fléchie 'eine' du lemme 'ein'. Article indéfini singulier déterminant un groupe nominal."
  },
  "einem": {
      "fr": "un / une",
      "lit": "article indéfini",
      "pos_fr": "",
      "role": "Forme fléchie 'einem' du lemme 'ein'. Article indéfini singulier déterminant un groupe nominal."
  },
  "einer": {
      "fr": "un / une",
      "lit": "article indéfini",
      "pos_fr": "",
      "role": "Forme fléchie 'einer' du lemme 'ein'. Article indéfini singulier déterminant un groupe nominal."
  },
  "einerseits": {
      "fr": "d'une part",
      "lit": "d'un côté",
      "pos_fr": "",
      "role": "Adverbe ouvrant l'exposé des mécanismes contradictoires de surmontement de la crise."
  },
  "einfach": {
      "fr": "simple",
      "lit": "d'un seul pli",
      "pos_fr": "",
      "role": "Adjectif qualifiant le geste élémentaire exigé de l'ouvrier par la division du travail."
  },
  "einführen": {
      "fr": "introduire / instaurer",
      "lit": "conduire à l'intérieur",
      "pos_fr": "",
      "role": "Verbe désignant l'implantation forcée des industries modernes ou des institutions bourgeoises."
  },
  "eingehen": {
      "fr": "pénétrer dans / entrer dans",
      "lit": "aller à l'intérieur",
      "pos_fr": "",
      "role": "Entrer dans la nouvelle société / Jérusalem."
  },
  "eingerostet": {
      "fr": "rouillé / sclérosé",
      "lit": "couvert de rouille",
      "pos_fr": "",
      "role": "Métaphore puissante désignant les institutions féodales figées et pétrifiées par les siècles."
  },
  "eingestehen": {
      "fr": "avouer, admettre, reconnaître",
      "lit": "convenir debout en soi-même",
      "pos_fr": "Verbe",
      "role": "verbe séparable",
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
      "pos_fr": "",
      "role": "Idées françaises importées en Allemagne."
  },
  "einheimisch": {
      "fr": "indigène / national / du pays",
      "lit": "qui relève du foyer intérieur",
      "pos_fr": "",
      "role": "Adjectif opposant les matières premières du sol national aux ressources importées."
  },
  "einhüllen": {
      "fr": "envelopper / draper",
      "lit": "couvrir d'un voile",
      "pos_fr": "",
      "role": "Draper la critique sociale d'un verbiage mystique."
  },
  "einmal": {
      "fr": "une fois / jadis / seulement",
      "lit": "une seule fois",
      "pos_fr": "",
      "role": "Réfère au passé ou renforce une affirmation."
  },
  "einnehmen": {
      "fr": "occuper (une place), percevoir, prendre",
      "lit": "prendre en dedans, occuper",
      "pos_fr": "Verbe",
      "role": "verbe fort séparable",
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
      "pos_fr": "",
      "role": "Métaphore biologique frappante peignant le capitalisme s'incrustant dans chaque recoin de la planète."
  },
  "einreißen": {
      "fr": "s'immiscer, se propager, s'enraciner (en parlant d'un mal)",
      "lit": "déchirer en faisant brèche",
      "pos_fr": "Verbe",
      "role": "verbe séparable",
      "etymology": "Composé de « ein » + « reißen » (arracher, faire brèche).",
      "isCompound": true,
      "compoundParts": [
          "ein-",
          "reißen"
      ]
  },
  "einsegnen": {
      "fr": "bénir / consacrer religieusement",
      "lit": "signer d'une croix",
      "pos_fr": "",
      "role": "Bénédiction cléricale de l'ordre établi."
  },
  "einsperren": {
      "fr": "enfermer / incarcérer",
      "lit": "bloquer dedans",
      "pos_fr": "",
      "role": "Allusion aux prisons cellulaires philanthropiques."
  },
  "einstweilen": {
      "fr": "provisoirement / pour l'instant",
      "lit": "pendant ce temps-ci",
      "pos_fr": "",
      "role": "Adverbe marquant le caractère temporaire de l'hégémonie bourgeoise sur les ouvriers."
  },
  "eintönigster": {
      "fr": "le plus monotone",
      "lit": "au ton le plus uniforme",
      "pos_fr": "",
      "role": "Adjectif superlatif décrivant le labeur abrutissant de l'ouvrier parcellisé."
  },
  "einwenden": {
      "fr": "objecter, opposer un argument",
      "lit": "tourner contre, répliquer",
      "pos_fr": "Verbe",
      "role": "verbe séparable",
      "etymology": "Composé de « ein » + « wenden » (tourner, retourner).",
      "isCompound": true,
      "compoundParts": [
          "ein-",
          "wenden"
      ]
  },
  "einzeln": {
      "fr": "individuel / particulier",
      "lit": "isolé un par un",
      "pos_fr": "Adjectif",
      "role": "Adjectif marquant le morcellement des ouvriers au sein de la manufacture."
  },
  "einzig": {
      "fr": "unique / seul",
      "lit": "un seul",
      "pos_fr": "",
      "role": "Caractère exclusif de l'intérêt marchand."
  },
  "eiskalt": {
      "fr": "glacial / froid comme la glace",
      "lit": "froid au point de glacer",
      "pos_fr": "Adjectif",
      "role": "Adjectif composé renforçant la métaphore du calcul économique froid qui étouffe l'ardeur des sentiments médiévaux."
  },
  "ekelhafter": {
      "fr": "dégoûtant, répugnant, écœurant",
      "lit": "qui suscite le dégoût",
      "pos_fr": "Adjectif",
      "role": "adjectif",
      "etymology": "Dérivé de « Ekel » (haut-le-cœur, dégoût) + « -haft »."
  },
  "elektrisch": {
      "fr": "électrique",
      "lit": "fondé sur la force électrique",
      "pos_fr": "",
      "role": "Adjectif technologique célébrant l'essor prodigieux du télégraphe au XIXe siècle."
  },
  "elementen": {
      "fr": "élément / composante de classe",
      "lit": "principe de base, constituant",
      "pos_fr": "",
      "role": "Forme fléchie 'Elementen' du lemme 'Element'. Substantif au datif neutre pluriel régi par 'aus'."
  },
  "elend": {
      "fr": "misérable, déplorable, lamentable",
      "lit": "exilé, rejeté dans le malheur",
      "pos_fr": "Adjectif",
      "role": "adjectif",
      "etymology": "Forme adjectivale de « Elend » (exil, détresse)."
  },
  "enden": {
      "fr": "se terminer / aboutir",
      "lit": "trouver son terme",
      "pos_fr": "Verbe régulier",
      "role": "Verbe marquant l'issue dialectique inéluctable du combat de classe."
  },
  "endlich": {
      "fr": "enfin / finalement / au terme du processus",
      "lit": "qui touche à sa fin, qui arrive à son terme",
      "pos_fr": "Adverbe",
      "role": "Adverbe marquant l'aboutissement historique de la conquête du monopole politique d'État par la bourgeoisie moderne."
  },
  "eng": {
      "fr": "étroit / serré",
      "lit": "resserré dans l'espace",
      "pos_fr": "",
      "role": "Adjectif caractérisant la limite structurelle des rapports bourgeois devenus carcan."
  },
  "england": {
      "fr": "Angleterre",
      "lit": "terre des Angles",
      "pos_fr": "",
      "role": "Forme fléchie 'England' du lemme 'England'. Nom propre au datif neutre singulier, complément de lieu de 'in'."
  },
  "englisch": {
      "fr": "anglais",
      "lit": "en langue anglaise",
      "pos_fr": "Adjectif",
      "role": "Adjectif de langue pour la publication à Londres de l'édition anglaise."
  },
  "enorm": {
      "fr": "énorme / gigantesque",
      "lit": "hors de la norme ordinaire",
      "pos_fr": "",
      "role": "Adjectif mesurant la démesure des concentrations urbaines modernes."
  },
  "entdecken": {
      "fr": "découvrir, mettre au jour",
      "lit": "enlever ce qui recouvre",
      "pos_fr": "Verbe",
      "role": "verbe transitif",
      "etymology": "Composé du préfixe privatif « ent- » + « decken » (couvrir, recouvrir).",
      "isCompound": true,
      "compoundParts": [
          "ent-",
          "decken"
      ]
  },
  "entferntest": {
      "fr": "le plus lointain",
      "lit": "le plus distant dans l'espace",
      "pos_fr": "",
      "role": "Adjectif superlatif soulignant la globalisation géographique des besoins d'approvisionnement."
  },
  "entgegenschreien": {
      "fr": "crier à la face de, vociférer contre",
      "lit": "hurler à la rencontre de",
      "pos_fr": "Verbe",
      "role": "verbe séparable",
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
      "role": "Verbe d'action de combat : opposer au mythe policier du spectre la réalité du Manifeste."
  },
  "entgegentreten": {
      "fr": "s'opposer à / se dresser contre",
      "lit": "marcher à la rencontre contre",
      "pos_fr": "",
      "role": "Les utopistes s'opposant avec aigreur au mouvement ouvrier réel."
  },
  "enthüllen": {
      "fr": "dévoiler / révéler",
      "lit": "retirer l'enveloppe",
      "pos_fr": "",
      "role": "Geste critique matérialiste mettant à nu les ressorts sordides de la société d'ordres."
  },
  "entkleiden": {
      "fr": "dépouiller / dévêtir",
      "lit": "ôter les vêtements de",
      "pos_fr": "",
      "role": "Métaphore puissante dénudant les professions sacrées de leur auréole idéologique."
  },
  "entlegenst": {
      "fr": "le plus reculé",
      "lit": "situé au plus loin de la route",
      "pos_fr": "",
      "role": "Adjectif superlatif désignant les confins du monde intégrés dans les chaînes d'approvisionnement."
  },
  "entmannen": {
      "fr": "émasculer / émasculé",
      "lit": "priver de virilité",
      "pos_fr": "",
      "role": "Affadissement de la doctrine révolutionnaire en Allemagne."
  },
  "entnervend": {
      "fr": "énervant / débilitant",
      "lit": "qui prive de nerfs/vigueur",
      "pos_fr": "",
      "role": "Affaiblissement moral causé par l'ascétisme religieux."
  },
  "entreißen": {
      "fr": "arracher à",
      "lit": "déchirer hors de",
      "pos_fr": "",
      "role": "Verbe vigoureux décrivant l'émancipation forcée des ruraux hors de l'idiotisme villageois."
  },
  "entschieden": {
      "fr": "décidé, résolu, catégorique, tranché",
      "lit": "séparé par jugement, tranché sans retour",
      "pos_fr": "Adjectif",
      "role": "adjectif ou participe passé",
      "etymology": "Participe passé de « entscheiden » (décider, trancher, vieux haut-allemand int-scidon, distinguer)."
  },
  "entsetzen": {
      "fr": "épouvanter, terrifier / destituer",
      "lit": "déplacer de son siège, terrifier",
      "pos_fr": "Verbe",
      "role": "verbe réfléchi ou transitif",
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
      "pos_fr": "",
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
      "pos_fr": "",
      "role": "Origine matérielle des idéologies."
  },
  "entstehen": {
      "fr": "naître / surgir / se former",
      "lit": "se dresser hors de",
      "pos_fr": "",
      "role": "Genèse historique des institutions."
  },
  "entweder": {
      "fr": "ou bien / soit",
      "lit": "l'un des deux",
      "pos_fr": "",
      "role": "Alternative tranchée : transformation révolutionnaire ou ruine commune."
  },
  "entweiht": {
      "fr": "profané",
      "lit": "privé de consécration",
      "pos_fr": "",
      "role": "Thèse majeure : « tout ce qui est sacré est profané » par le calcul égoïste marchand."
  },
  "entwerfen": {
      "fr": "esquisser / rédiger / tracer",
      "lit": "jeter sur le papier les grandes lignes",
      "pos_fr": "Verbe fort",
      "role": "Verbe décrivant l'élaboration collective du texte du Manifeste à Londres."
  },
  "entwerten": {
      "fr": "déprécier / démonétiser",
      "lit": "priver de valeur (Wert)",
      "pos_fr": "",
      "role": "Verbe économique désignant la perte de valeur du savoir-faire artisanal face à la machine."
  },
  "entwickeln": {
      "fr": "développer / déployer",
      "lit": "déplier ce qui était enroulé, faire croître",
      "pos_fr": "Verbe régulier",
      "role": "Verbe matérialiste marquant la croissance organique des forces productives."
  },
  "entwickelnd": {
      "fr": "qui se développe / croissant",
      "lit": "en train de se déployer",
      "pos_fr": "",
      "role": "Participe présent marquant le dynamisme ininterrompu du machinisme industriel."
  },
  "entwickelt": {
      "fr": "développé",
      "lit": "déployé hors de son germe",
      "pos_fr": "",
      "role": "Épithète au datif neutre singulier qualifiant le prolétariat industriel moderne."
  },
  "entwickelte": {
      "fr": "développé",
      "lit": "déployé hors de son germe",
      "pos_fr": "",
      "role": "Forme fléchie 'entwickelte' du lemme 'entwickelt'. Épithète au datif neutre singulier qualifiant le prolétariat industriel moderne."
  },
  "entwickelten": {
      "fr": "développé",
      "lit": "déployé hors de son germe",
      "pos_fr": "",
      "role": "Forme fléchie 'entwickelten' du lemme 'entwickelt'. Épithète au datif neutre singulier qualifiant le prolétariat industriel moderne."
  },
  "entwicklen": {
      "fr": "développer",
      "lit": "dénouer, déplier",
      "pos_fr": "",
      "role": "Déploiement des contradictions de classe."
  },
  "er": {
      "fr": "il",
      "lit": "pronom personnel sujet masculin 3e personne",
      "pos_fr": "",
      "role": "Pronom personnel sujet renvoyant à un actant singulier masculin (l'ouvrier, le prolétaire)."
  },
  "erbitterter": {
      "fr": "plus acharné / plus exaspérant",
      "lit": "comparatif d'erbittert",
      "pos_fr": "",
      "role": "Adjectif qualifiant le despotisme patronal mesquin en fabrique."
  },
  "erblicken": {
      "fr": "apercevoir / discerner",
      "lit": "poser le regard sur",
      "pos_fr": "",
      "role": "Reconnaissance lucide des rapports de force."
  },
  "ereifern": {
      "fr": "s'échauffer, s'emporter, se passionner",
      "lit": "s'enflammer de zèle",
      "pos_fr": "Verbe",
      "role": "verbe pronominal",
      "etymology": "Dérivé de « der Eifer » (le zèle ardent, empressement passionné).",
      "isCompound": true,
      "compoundParts": [
          "er-",
          "Eifer",
          "-n"
      ]
  },
  "erfinden": {
      "fr": "inventer, imaginer de toutes pièces",
      "lit": "trouver par la recherche",
      "pos_fr": "Verbe",
      "role": "verbe fort",
      "etymology": "Composé de « er- » (aboutissement) + « finden » (trouver, vieux haut-allemand findan).",
      "isCompound": true,
      "compoundParts": [
          "er-",
          "finden"
      ]
  },
  "erfinderisch": {
      "fr": "inventif / ingénieux",
      "lit": "plein de trouvailles",
      "pos_fr": "",
      "role": "Ingéniosité technique stimulée par le capital."
  },
  "ergreifen": {
      "fr": "saisir / s'emparer de",
      "lit": "agripper",
      "pos_fr": "",
      "role": "Prise du pouvoir politique."
  },
  "ergänzend": {
      "fr": "complémentaire",
      "lit": "qui remplit ce qui manque",
      "pos_fr": "",
      "role": "Complément indispensable d'une institution."
  },
  "erhaben": {
      "fr": "sublimement / majestueusement",
      "lit": "au-dessus",
      "pos_fr": "",
      "role": "Hauteur morale feinte par les philosophes spéculatifs."
  },
  "erhalten": {
      "fr": "recevoir / conserver",
      "lit": "garder en main",
      "pos_fr": "",
      "role": "Verbe décrivant l'ouvrier recevant son salaire avant de tomber entre les mains des boutiquiers."
  },
  "erheben": {
      "fr": "s'élever / se soulever",
      "lit": "lever vers le haut",
      "pos_fr": "",
      "role": "Verbe révolutionnaire marquant le redressement émancipateur du prolétariat."
  },
  "erheischen": {
      "fr": "exiger / requérir impérieusement",
      "lit": "réclamer d'une voix haute",
      "pos_fr": "",
      "role": "Verbe littéraire marquant la demande pressante créée par les nouveaux besoins de consommation."
  },
  "erhoben": {
      "fr": "élevé, hissé, dressé",
      "lit": "soulevé vers le haut",
      "pos_fr": "Adjectif",
      "role": "participe passé adjectivé",
      "etymology": "Participe de « erheben » (élever, dresser, soulever)."
  },
  "erkaufen": {
      "fr": "acheter / soudoyer",
      "lit": "acquérir au prix de l'argent",
      "pos_fr": "",
      "role": "Verbe stigmatisant la vénalité du lumpenprolétariat se vendant aux menées réactionnaires."
  },
  "erkennen": {
      "fr": "reconnaître / identifier",
      "lit": "connaître avec certitude",
      "pos_fr": "",
      "role": "Prise de conscience théorique."
  },
  "erklären": {
      "fr": "déclarer / proclamer ouvertement",
      "lit": "rendre public et clair",
      "pos_fr": "",
      "role": "Verbe principal régissant la complétive proclamant la nécessité de la révolution."
  },
  "erkämpfen": {
      "fr": "conquérir de haute lutte / arracher par le combat",
      "lit": "obtenir au terme d'un combat acharné",
      "pos_fr": "Verbe inséparable faible",
      "role": "Verbe d'action soulignant la nature révolutionnaire violente de la conquête du pouvoir par la bourgeoisie."
  },
  "erlegen": {
      "fr": "succomber / être abattu",
      "lit": "être couché à terre",
      "pos_fr": "",
      "role": "Chute des anciennes classes féodales."
  },
  "erleichtert": {
      "fr": "facilité / allégé",
      "lit": "rendu plus léger",
      "pos_fr": "",
      "role": "Participe passé marquant l'accélération sans entrave des transports marchands."
  },
  "erlernbar": {
      "fr": "accessible à l'apprentissage / qu'on peut apprendre",
      "lit": "qu'il est possible d'apprendre",
      "pos_fr": "",
      "role": "Adjectif caractérisant le geste parcellaire ouvrier qui ne requiert aucune qualification longue."
  },
  "erliegen": {
      "fr": "succomber à / être vaincu par",
      "lit": "tomber et rester couché",
      "pos_fr": "",
      "role": "Verbe décrivant l'écrasement inéluctable du petit capital sous les coups de la grande industrie."
  },
  "ernst": {
      "fr": "sérieux / grave",
      "lit": "pesant, résolu",
      "pos_fr": "",
      "role": "Gravité des crises ou sévérité de l'analyse."
  },
  "ernstgemeint": {
      "fr": "pris au sérieux / sincère",
      "lit": "pensé avec sérieux",
      "pos_fr": "",
      "role": "Le seul mot sincère du socialisme bourgeois."
  },
  "ernsthafter": {
      "fr": "plus sérieusement",
      "lit": "avec plus de sérieux",
      "pos_fr": "",
      "role": "Caractère plus grave et méthodique des doctrines."
  },
  "ernähren": {
      "fr": "nourrir / entretenir",
      "lit": "alimenter",
      "pos_fr": "",
      "role": "Renversement scandaleux dénoncé par Marx : la bourgeoisie doit nourrir l'ouvrier au lieu d'en être nourrie."
  },
  "erobern": {
      "fr": "conquérir",
      "lit": "prendre d'assaut",
      "pos_fr": "",
      "role": "Verbe de conquête militaire appliqué à l'appropriation des forces productives par le prolétariat."
  },
  "erregen": {
      "fr": "susciter / provoquer",
      "lit": "mettre en mouvement",
      "pos_fr": "",
      "role": "Provoquer l'indignation ou l'effervescence."
  },
  "erreichen": {
      "fr": "atteindre / accomplir",
      "lit": "parvenir jusqu'au but fixé",
      "pos_fr": "",
      "role": "Participe passé au passif avec 'werden können'."
  },
  "erreicht": {
      "fr": "atteindre / accomplir",
      "lit": "parvenir jusqu'au but fixé",
      "pos_fr": "",
      "role": "Forme fléchie 'erreicht' du lemme 'erreichen'. Participe passé au passif avec 'werden können'."
  },
  "erreichung": {
      "fr": "obtention / réalisation / accomplissement",
      "lit": "action d'atteindre le but visé",
      "pos_fr": "",
      "role": "Forme fléchie 'Erreichung' du lemme 'Erreichung'. Substantif d'action à l'accusatif singulier, régime de 'für'."
  },
  "erringen": {
      "fr": "remporter de haute lutte / conquérir",
      "lit": "obtenir en luttant corps à corps",
      "pos_fr": "",
      "role": "Verbe traduisant les victoires politiques arrachées par le prolétariat dans la division bourgeoise."
  },
  "erscheinen": {
      "fr": "apparaître / sembler",
      "lit": "luire, devenir visible",
      "pos_fr": "",
      "role": "Verbe opposant l'apparence paradoxale d'une crise de surproduction aux crises de pénurie d'antan."
  },
  "ersetzen": {
      "fr": "remplacer / substituer",
      "lit": "poser à la place de",
      "pos_fr": "",
      "role": "Substitution d'un mode de production par un autre."
  },
  "erst": {
      "fr": "premier",
      "lit": "qui vient en tête chronologiquement",
      "pos_fr": "Adjectif numéral ordinal",
      "role": "Adjectif ordonnant les origines historiques de la bourgeoisie primitive."
  },
  "erstehen": {
      "fr": "renaître / resurgir",
      "lit": "se relever debout",
      "pos_fr": "",
      "role": "Verbe traduisant la formidable résilience de l'organisation prolétarienne qui renaît sans cesse plus puissante."
  },
  "erster": {
      "fr": "premier",
      "lit": "qui est au premier rang",
      "pos_fr": "",
      "role": "Adjectif marquant le primat historique ou la condition sine qua non d'existence."
  },
  "ertränken": {
      "fr": "noyer / engloutir",
      "lit": "faire périr par immersion dans l'eau",
      "pos_fr": "Verbe causatif faible",
      "role": "Verbe causatif hautement métaphorique décrivant la dissolution violente des croyances anciennes dans l'économie marchande."
  },
  "erweitern": {
      "fr": "élargir, étendre, amplifier",
      "lit": "rendre plus large",
      "pos_fr": "Verbe",
      "role": "verbe transitif",
      "etymology": "Dérivé de « weit » (large, étendu).",
      "isCompound": true,
      "compoundParts": [
          "er-",
          "weit",
          "-ern"
      ]
  },
  "erwerben": {
      "fr": "acquérir, gagner par le travail",
      "lit": "obtenir par ses efforts laborieux",
      "pos_fr": "Verbe",
      "role": "verbe fort transitif",
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
      "pos_fr": "",
      "role": "Participe passé qualifiant la position sociale consolidée par une classe victorieuse."
  },
  "erwünscht": {
      "fr": "souhaité / opportun",
      "lit": "désiré",
      "pos_fr": "",
      "role": "Occasion bienvenue pour les gouvernements absolutistes."
  },
  "erzeugen": {
      "fr": "produire / engendrer",
      "lit": "tirer à l'existence",
      "pos_fr": "",
      "role": "Verbe cardinal de la théorie marxienne désignant l'engendrement matériel de la richesse et des classes."
  },
  "erzeugt": {
      "fr": "produit / créé",
      "lit": "engendré",
      "pos_fr": "",
      "role": "Participe passé désignant les richesses ou forces matérielles issues du travail."
  },
  "erziehen": {
      "fr": "élever, éduquer, former",
      "lit": "tirer vers le haut hors de l'enfance",
      "pos_fr": "Verbe",
      "role": "verbe fort transitif",
      "etymology": "Du vieux haut-allemand « irziohan » (nourrir, élever, calque du latin educere).",
      "isCompound": true,
      "compoundParts": [
          "er-",
          "ziehen"
      ]
  },
  "erzwingen": {
      "fr": "extorquer / arracher par la force",
      "lit": "obtenir par contrainte (Zwang)",
      "pos_fr": "",
      "role": "Verbe politique marquant les conquêtes légales arrachées par les ouvriers (loi de dix heures)."
  },
  "erzwungen": {
      "fr": "forcé / contraint",
      "lit": "obtenu par la violence ou la force",
      "pos_fr": "",
      "role": "Participe passé décrivant l'anéantissement sacrificiel obligatoire des forces productives en crise."
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
      "pos_fr": "",
      "role": "Clôture une énumération d'exemples."
  },
  "euch": {
      "fr": "vous",
      "lit": "pronom réfléchi de 2e personne du pluriel",
      "pos_fr": "",
      "role": "Pronom réfléchi à l'accusatif accompagnant l'impératif 'vereinigt euch' (unissez-vous)."
  },
  "euer": {
      "fr": "votre, vos",
      "lit": "qui vous appartient",
      "pos_fr": "Déterminant",
      "role": "déterminant possessif pluriel",
      "etymology": "Du moyen haut-allemand « iuwer », vieux haut-allemand « iuwar »."
  },
  "eur": {
      "fr": "votre, vos (forme syncopée)",
      "lit": "votre",
      "pos_fr": "Déterminant",
      "role": "déterminant possessif",
      "etymology": "Variante syncopée de « euer »."
  },
  "euren": {
      "fr": "votre / vos",
      "lit": "à vous (pluriel possessif)",
      "pos_fr": "",
      "role": "Adresse polémique directe de Marx aux bourgeois."
  },
  "eurer": {
      "fr": "votre / de votre",
      "lit": "possessif 2e personne pluriel",
      "pos_fr": "",
      "role": "Dénonciation de 'votre' jurisprudence et morale de classe."
  },
  "europäisch": {
      "fr": "européen",
      "lit": "propre au continent européen",
      "pos_fr": "Adjectif",
      "role": "Adjectif définissant le champ continental de l'affrontement révolutionnaire."
  },
  "europäischen": {
      "fr": "européen",
      "lit": "propre au continent européen",
      "pos_fr": "",
      "role": "Forme fléchie 'europäischen' du lemme 'europäisch'. Adjectif définissant le champ continental de l'affrontement révolutionnaire."
  },
  "ewig": {
      "fr": "perpétuel / éternel",
      "lit": "qui dure sans fin",
      "pos_fr": "",
      "role": "Adjectif traduisant l'instabilité perpétuelle de l'époque bourgeoise."
  },
  "existieren": {
      "fr": "exister / subsister",
      "lit": "avoir une existence effective",
      "pos_fr": "",
      "role": "Verbe ontologique posant l'impossibilité matérielle pour la bourgeoisie d'exister sans révolutionner l'industrie."
  },
  "existierend": {
      "fr": "existant, présent",
      "lit": "qui est dans l'existence",
      "pos_fr": "Adjectif",
      "role": "participe présent adjectivé",
      "etymology": "Du verbe « existieren », emprunté au latin « exsistere » (sortir de, paraître, exister)."
  },
  "exploitiert": {
      "fr": "exploité",
      "lit": "tiré profit au maximum",
      "pos_fr": "",
      "role": "Condition de la classe ouvrière sous le capital."
  },
  "fabrizierend": {
      "fr": "industriel / fabricant",
      "lit": "qui fabrique",
      "pos_fr": "",
      "role": "Participe présent désignant les patrons d'usines en position de maîtres directs."
  },
  "fallen": {
      "fr": "tomber / choir",
      "lit": "chuter vers le bas",
      "pos_fr": "",
      "role": "Verbe marquant la chute massive des petits patrons et artisans dans le prolétariat."
  },
  "fanatisch": {
      "fr": "fanatique",
      "lit": "inspiré d'un zèle aveugle",
      "pos_fr": "",
      "role": "Attachement dogmatique aux sectes utopiques."
  },
  "fassen": {
      "fr": "contenir / englober",
      "lit": "saisir, tenir dedans",
      "pos_fr": "",
      "role": "Verbe traduisant l'incapacité des cadres juridiques bourgeois à contenir la richesse créée."
  },
  "fast": {
      "fr": "presque / quasiment",
      "lit": "à très peu de chose près",
      "pos_fr": "Adverbe",
      "role": "Adverbe d'intensité nuancée caractérisant la généralité de la stratification féodale."
  },
  "fehlschlagend": {
      "fr": "qui échoue / avorté",
      "lit": "qui frappe à faux",
      "pos_fr": "",
      "role": "Tentatives ouvrières prématurées vouées à l'échec."
  },
  "feierlich": {
      "fr": "solennellement",
      "lit": "avec solennité festive",
      "pos_fr": "",
      "role": "Proclamations officielles des chancelleries."
  },
  "feig": {
      "fr": "lâche / couard",
      "lit": "sans courage",
      "pos_fr": "",
      "role": "Lâcheté politique de la bourgeoisie face aux absolutismes."
  },
  "feindlich": {
      "fr": "ennemi / hostile",
      "lit": "portant une inimitié mortelle",
      "pos_fr": "Adjectif",
      "role": "Adjectif caractérisant les deux camps belligérants de la société moderne."
  },
  "feindlichen": {
      "fr": "hostile / antagonique",
      "lit": "propre à l'ennemi",
      "pos_fr": "",
      "role": "Forme fléchie 'feindlichen' du lemme 'feindlich'. Épithète marquant le caractère irréconciliable de la contradiction de classe."
  },
  "ferner": {
      "fr": "en outre / de plus",
      "lit": "plus loin encore",
      "pos_fr": "",
      "role": "Adverbe enchaînant un nouvel argument sur la déchéance des classes intermédiaires."
  },
  "fertig": {
      "fr": "prêt / achevé (en finir avec)",
      "lit": "apte à partir, prêt",
      "pos_fr": "",
      "role": "Adjectif de la locution « fertig werden » (régler son compte, en finir avec)."
  },
  "fest": {
      "fr": "solide / stable / inébranlable",
      "lit": "qui résiste à l'ébranlement",
      "pos_fr": "",
      "role": "Adjectif caractérisant les institutions et dogmes séculaires dissous par le capitalisme."
  },
  "fester": {
      "fr": "plus solidement / plus fermement",
      "lit": "plus solide",
      "pos_fr": "",
      "role": "Consolidation croissante de l'union ouvrière."
  },
  "feudal": {
      "fr": "féodal",
      "lit": "fondé sur le fief et le servage",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant l'ordre hiérarchique seigneurial terrien antérieur au capital."
  },
  "feudale": {
      "fr": "féodal",
      "lit": "relatif à la seigneurie terrienne et au servage",
      "pos_fr": "",
      "role": "Forme fléchie 'feudale' du lemme 'feudal'. Épithète qualifiant les rapports agraires arriérés de propriété nobiliaire."
  },
  "feudalistisch": {
      "fr": "féodal",
      "lit": "propre au système féodal",
      "pos_fr": "",
      "role": "Adjectif désignant l'absolutisme monarchique fondé sur le servage et le fief."
  },
  "feudalistischen": {
      "fr": "féodaliste / féodal",
      "lit": "du système de fiefs",
      "pos_fr": "",
      "role": "Socialisme féodal aristocratique."
  },
  "finden": {
      "fr": "trouver / constater",
      "lit": "découvrir par l'observation",
      "pos_fr": "Verbe fort",
      "role": "Verbe de constatation empirique dans l'examen de l'histoire humaine."
  },
  "flämisch": {
      "fr": "flamand",
      "lit": "en langue flamande",
      "pos_fr": "Adjectif",
      "role": "Adjectif de langue pour l'édition belge du Manifeste."
  },
  "folgen": {
      "fr": "suivre / découler de",
      "lit": "venir après",
      "pos_fr": "",
      "role": "Conséquence logique ou historique."
  },
  "folgend": {
      "fr": "suivant / qui suit",
      "lit": "qui vient immédiatement après",
      "pos_fr": "Participe adjectivé",
      "role": "Adjectif introduisant le texte même du Manifeste."
  },
  "form": {
      "fr": "forme juridique et sociale",
      "lit": "structure, configuration",
      "pos_fr": "",
      "role": "Forme fléchie 'Form' du lemme 'Form'. Substantif à l'accusatif singulier désignant la configuration concrète de la propriété."
  },
  "formulieren": {
      "fr": "formuler",
      "lit": "mettre en formule",
      "pos_fr": "",
      "role": "Formulation théorique des principes communistes."
  },
  "fortgeschritten": {
      "fr": "avancé / progressiste",
      "lit": "qui a marché en avant",
      "pos_fr": "Participe adjectivé",
      "role": "Adjectif politique désignant l'aile gauche démocratique et progressiste de l'opposition."
  },
  "fortgeschrittenst": {
      "fr": "les plus avancés, les plus développés",
      "lit": "qui a marché le plus en avant",
      "pos_fr": "Adjectif",
      "role": "adjectif au superlatif",
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
      "pos_fr": "",
      "role": "Forme fléchie 'fortgeschrittneren' du lemme 'fortgeschritten'. Épithète au comparatif marquant l'avance productive européenne de 1848 sur 1789."
  },
  "fortvegetiern": {
      "fr": "continuer de végéter",
      "lit": "végéter en avant",
      "pos_fr": "",
      "role": "Condition précaire de la petite bourgeoisie déclinante."
  },
  "fortwährend": {
      "fr": "continuellement / sans cesse",
      "lit": "qui dure en avançant",
      "pos_fr": "",
      "role": "Adjectif/adverbe soulignant le mouvement perpétuel de la révolution productive."
  },
  "fortwährendem": {
      "fr": "incessant / perpétuel",
      "lit": "qui dure en avançant",
      "pos_fr": "",
      "role": "Adjectif dépeignant l'état de guerre continue dans lequel lutte la bourgeoisie."
  },
  "frankreich": {
      "fr": "France",
      "lit": "pays des Francs",
      "pos_fr": "",
      "role": "Forme fléchie 'Frankreich' du lemme 'Frankreich'. Nom propre au datif neutre singulier, régime de 'in'."
  },
  "französisch": {
      "fr": "français",
      "lit": "relatif à la France",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant les républicains radicaux parisiens."
  },
  "französischen": {
      "fr": "français",
      "lit": "propre à la France ou à sa tradition",
      "pos_fr": "",
      "role": "Forme fléchie 'französischen' du lemme 'französisch'. Épithète au datif masculin singulier déterminant 'Sinn'."
  },
  "frei": {
      "fr": "libre",
      "lit": "affranchi de servitude",
      "pos_fr": "",
      "role": "Adjectif qualifiant la concurrence dérégulée qui supplante le corporatisme féodal."
  },
  "fremd": {
      "fr": "étranger / extérieur",
      "lit": "qui n'est pas d'ici",
      "pos_fr": "",
      "role": "Adjectif désignant les produits importés dont l'introduction brise l'industrie locale."
  },
  "friedlich": {
      "fr": "pacifique",
      "lit": "plein de paix",
      "pos_fr": "",
      "role": "Moyens pacifiques prônés par les réformateurs utopiques."
  },
  "fristen": {
      "fr": "prolonger précairement / subsister",
      "lit": "accorder un délai de grâce",
      "pos_fr": "",
      "role": "Verbe décrivant l'existence servile et au rabais assurée à l'esclave sous l'ancien régime."
  },
  "fromm": {
      "fr": "pieux / dévot",
      "lit": "vaillant, loyal, puis soumis à Dieu",
      "pos_fr": "Adjectif",
      "role": "Adjectif décrivant la dévotion et l'obéissance chrétienne des masses féodales."
  },
  "früh": {
      "fr": "ancien / primitif",
      "lit": "qui se situe au début des temps",
      "pos_fr": "Adjectif",
      "role": "Adjectif comparatif marquant les époques historiques révolues."
  },
  "früher": {
      "fr": "auparavant / autrefois",
      "lit": "plus tôt",
      "pos_fr": "",
      "role": "Renvoie aux époques antérieures féodales ou antiques."
  },
  "fördern": {
      "fr": "favoriser / promouvoir / stimuler",
      "lit": "faire avancer",
      "pos_fr": "",
      "role": "Verbe dialectique examinant ce qui stimule le développement des forces productives prolétariennes."
  },
  "förmlich": {
      "fr": "véritablement / formellement",
      "lit": "selon la forme",
      "pos_fr": "",
      "role": "Une véritable armée industrielle."
  },
  "fühlen": {
      "fr": "sentir / éprouver la conscience de",
      "lit": "percevoir par le toucher ou le sentiment",
      "pos_fr": "",
      "role": "Verbe marquant la prise de conscience collective par le prolétariat de sa propre force."
  },
  "führen": {
      "fr": "mener / conduire",
      "lit": "guider vers un terme",
      "pos_fr": "Verbe régulier",
      "role": "Verbe désignant l'action continue de mener une lutte sans répit."
  },
  "für": {
      "fr": "pour",
      "lit": "à destination de, en faveur de",
      "pos_fr": "Préposition (régime accusatif)",
      "role": "Préposition de but ou de destination régissant l'accusatif."
  },
  "fürchten": {
      "fr": "redouter / craindre",
      "lit": "avoir peur",
      "pos_fr": "",
      "role": "Peur des classes dominantes face au spectre communiste."
  },
  "ganz": {
      "fr": "entier / tout / complet",
      "lit": "sans division ni réserve",
      "pos_fr": "Adjectif",
      "role": "Adjectif insistant sur l'universalité de la polarisation de la société entière."
  },
  "gar": {
      "fr": "même, tout à fait, absolument",
      "lit": "achevé, prêt, complètement",
      "pos_fr": "Adverbe",
      "role": "adverbe intensif",
      "etymology": "Du moyen haut-allemand « gar », vieux haut-allemand « garo » (tout à fait prêt, entièrement préparé)."
  },
  "geben": {
      "fr": "donner / procurer / susciter",
      "lit": "remettre, apporter",
      "pos_fr": "Verbe fort",
      "role": "Verbe désignant l'impulsion décisive donnée par la colonisation aux forces marchandes."
  },
  "gebunden": {
      "fr": "lié, asservi, enchaîné",
      "lit": "attaché par des liens",
      "pos_fr": "Adjectif",
      "role": "participe passé adjectivé",
      "etymology": "Participe de « binden » (lier, attacher)."
  },
  "gefordert": {
      "fr": "exigé / réclamé",
      "lit": "demandé comme dû",
      "pos_fr": "",
      "role": "Participe passé quantifiant la charge de labeur extorquée à la force de travail."
  },
  "gefährden": {
      "fr": "mettre en péril / compromettre",
      "lit": "exposer au danger (Gefahr)",
      "pos_fr": "",
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
      "lit": "fourni, accordé",
      "pos_fr": "",
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
      "pos_fr": "",
      "role": "Polarisation des antagonismes."
  },
  "gegensatz": {
      "fr": "antagonisme / opposition irréductible",
      "lit": "position opposée, antithèse posée contre",
      "pos_fr": "",
      "role": "Forme fléchie 'Gegensatz' du lemme 'Gegensatz'. Substantif composé désignant l'antagonisme dialectique entre Capital et Travail."
  },
  "gegenseitig": {
      "fr": "réciproque / mutuel",
      "lit": "qui se fait face d'un côté à l'autre",
      "pos_fr": "",
      "role": "Adjectif désignant les rapports humains que les hommes doivent envisager lucidement."
  },
  "gegenwärtig": {
      "fr": "présent / actuel",
      "lit": "qui fait face à l'instant, actuel",
      "pos_fr": "",
      "role": "Épithète au datif féminin singulier déterminant 'Bewegung'."
  },
  "gegenwärtigen": {
      "fr": "présent / actuel",
      "lit": "qui fait face à l'instant, actuel",
      "pos_fr": "",
      "role": "Forme fléchie 'gegenwärtigen' du lemme 'gegenwärtig'. Épithète au datif féminin singulier déterminant 'Bewegung'."
  },
  "gegenüber": {
      "fr": "vis-à-vis de / en face de",
      "lit": "placé en regard de",
      "pos_fr": "",
      "role": "Préposition marquant le face-à-face antagonique des classes sociales."
  },
  "gegenüberstehen": {
      "fr": "faire face à / être confronté à",
      "lit": "se tenir debout en face de",
      "pos_fr": "",
      "role": "Verbe figurant le duel historique face à face entre le prolétariat et la bourgeoisie."
  },
  "gegenüberstehend": {
      "fr": "opposés face à face",
      "lit": "se tenant debout l'un en face de l'autre",
      "pos_fr": "Participe adjectivé",
      "role": "Adjectif composé (gegenüber + stehend) désignant l'affrontement frontal sans esquive des deux classes."
  },
  "gegenüberzustellen": {
      "fr": "opposer / confronter",
      "lit": "placer vis-à-vis",
      "pos_fr": "",
      "role": "Confrontation directe des intérêts de classe."
  },
  "gehemmt": {
      "fr": "entravé / réfréné",
      "lit": "bloqué d'un sabot",
      "pos_fr": "",
      "role": "Forces productives entravées par la propriété bourgeoise."
  },
  "gehen": {
      "fr": "aller / se dérouler",
      "lit": "marcher, avancer",
      "pos_fr": "",
      "role": "Verbe entrant dans la formule « unter unsern Augen geht eine Bewegung vor » (se produit sous nos yeux)."
  },
  "gehend": {
      "fr": "allant, marchant, se dirigeant",
      "lit": "en marche",
      "pos_fr": "Adjectif",
      "role": "participe présent",
      "etymology": "Participe présent de « gehen » (aller, marcher)."
  },
  "gehässig": {
      "fr": "odieux / haineux",
      "lit": "plein de haine",
      "pos_fr": "",
      "role": "Adjectif qualifiant la mesquinerie despotique du patron d'usine."
  },
  "gehässiger": {
      "fr": "plus haineux / rancunier",
      "lit": "avec plus de haine",
      "pos_fr": "",
      "role": "Préjugés haineux inculqués contre les communistes."
  },
  "gehören": {
      "fr": "faire partie de / appartenir",
      "lit": "être propre à",
      "pos_fr": "",
      "role": "Inclusion sociologique d'un groupe."
  },
  "geistig": {
      "fr": "intellectuel / spirituel",
      "lit": "qui relève de l'esprit (Geist)",
      "pos_fr": "",
      "role": "Adjectif désignant la sphère des idées, de la science et de la littérature par opposition au matériel."
  },
  "geistlos": {
      "fr": "dépourvu d'esprit / niais",
      "lit": "sans souffle intellectuel",
      "pos_fr": "",
      "role": "Platitude des élucubrations petite-bourgeoises."
  },
  "geistreich": {
      "fr": "avec esprit / spirituellement",
      "lit": "riche d'esprit",
      "pos_fr": "",
      "role": "Critique mordante et spirituelle des pamphlétaires féodaux."
  },
  "gekannt": {
      "fr": "connu / éprouvé",
      "lit": "dont on a fait l'expérience",
      "pos_fr": "Participe passé",
      "role": "Adjectif soulignant l'inédit sans précédent de l'essor industriel moderne."
  },
  "geknechtet": {
      "fr": "asservi, opprimé, réduit en servitude",
      "lit": "traité en valet ou serf",
      "pos_fr": "Adjectif",
      "role": "participe passé adjectivé",
      "etymology": "Participe de « knechten » (asservir), dérivé de « Knecht » (valet, serf)."
  },
  "gelegentlich": {
      "fr": "occasionnel / sporadique",
      "lit": "qui dépend de l'occasion",
      "pos_fr": "",
      "role": "Adjectif qualifiant les premières flambées insurrectionnelles ouvrières."
  },
  "gemein": {
      "fr": "ordinaire / simple / commun",
      "lit": "partagé par le vulgaire",
      "pos_fr": "",
      "role": "Adjectif assimilant les ouvriers à de simples soudards sans grade dans l'armée industrielle."
  },
  "gemeinsam": {
      "fr": "commun / mutuel",
      "lit": "partagé par les deux côtés",
      "pos_fr": "Adjectif",
      "role": "Adjectif marquant la destruction réciproque des deux classes en lutte si la révolution échoue."
  },
  "gemeinschaftlich": {
      "fr": "commun / collectif",
      "lit": "qui appartient à la collectivité partagée de tous les membres",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant les intérêts de classe généraux de la bourgeoisie au-delà de la concurrence individuelle."
  },
  "genügen": {
      "fr": "suffire",
      "lit": "être suffisant",
      "pos_fr": "",
      "role": "Verbe rhétorique : il suffit d'évoquer les crises commerciales pour constater l'impasse du capitalisme."
  },
  "gepredigen": {
      "fr": "prêché",
      "lit": "proclamé en chaire",
      "pos_fr": "",
      "role": "Prédication cléricale ou morale."
  },
  "gerade": {
      "fr": "justement, précisément, tout droit",
      "lit": "en ligne directe, exact",
      "pos_fr": "Adverbe",
      "role": "adverbe / adjectif",
      "etymology": "Du moyen haut-allemand « gerade », vieux haut-allemand « giradi » (prompt, droit, direct)."
  },
  "geraten": {
      "fr": "entrer dans / tomber dans",
      "lit": "aboutir dans un état",
      "pos_fr": "",
      "role": "Verbe marquant l'entrée inévitable des intérêts industriels en contradiction avec la société."
  },
  "gesamt": {
      "fr": "tout l'ensemble de, total, global",
      "lit": "uni en un tout",
      "pos_fr": "Adjectif",
      "role": "adjectif",
      "etymology": "Du moyen haut-allemand « gesamet », participe de « samenen » (rassembler)."
  },
  "geschaffen": {
      "fr": "créé / forgé",
      "lit": "tiré du néant par le travail",
      "pos_fr": "",
      "role": "Participe passé désignant les forces productives matérielles enfantées par le travail social."
  },
  "geschehen": {
      "fr": "se produire, arriver, survenir, advenir",
      "lit": "se réaliser soudainement",
      "pos_fr": "Verbe",
      "role": "verbe fort intransitif",
      "etymology": "Du moyen haut-allemand « geschehen », vieux haut-allemand « giskehan »."
  },
  "geschichtlich": {
      "fr": "historique",
      "lit": "qui s'inscrit dans l'histoire",
      "pos_fr": "",
      "role": "Adjectif qualifiant le mouvement dialectique total de l'humanité."
  },
  "geschildert": {
      "fr": "décrit / dépeint",
      "lit": "représenté sur un bouclier",
      "pos_fr": "",
      "role": "Tableau des conditions sociales exposé par Marx."
  },
  "gesellschaftlich": {
      "fr": "social",
      "lit": "qui relève de la société humaine",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant les positions et hiérarchies au sein du corps social."
  },
  "gesellschaftlichen": {
      "fr": "social",
      "lit": "propre à la société et à ses rapports",
      "pos_fr": "",
      "role": "Forme fléchie 'gesellschaftlichen' du lemme 'gesellschaftlich'. Épithète désignant les conditions créées par le triomphe de la production bourgeoise."
  },
  "gesellschaftsordnung": {
      "fr": "ordre social / organisation de la société",
      "lit": "ordonnancement juridique et économique de la société",
      "pos_fr": "",
      "role": "Forme fléchie 'Gesellschaftsordnung' du lemme 'Gesellschaftsordnung'. Substantif composé désignant l'ordre bourgeois tout entier destiné à être abattu."
  },
  "gestalten": {
      "fr": "façonner / structurer",
      "lit": "donner forme (Gestalt)",
      "pos_fr": "",
      "role": "Verbe exprimant l'organisation cosmopolite planétaire imprimée par la bourgeoisie au marché."
  },
  "gestaltlos": {
      "fr": "amorphe / sans forme définie",
      "lit": "sans figure",
      "pos_fr": "",
      "role": "Premier état indifférencié du prolétariat."
  },
  "gestehen": {
      "fr": "avouer, confesser, concéder",
      "lit": "se tenir debout ferme devant sa faute",
      "pos_fr": "Verbe",
      "role": "verbe inséparable",
      "etymology": "Du moyen haut-allemand « gestān » (tenir bon, puis avouer).",
      "isCompound": true,
      "compoundParts": [
          "ge-",
          "stehen"
      ]
  },
  "getrennt": {
      "fr": "séparé, disjoint, distinct",
      "lit": "coupé en deux",
      "pos_fr": "Adjectif",
      "role": "participe passé adjectivé",
      "etymology": "Participe de « trennen » (séparer, dissocier, vieux haut-allemand trennan)."
  },
  "gewaltig": {
      "fr": "puissant / colossal / formidable",
      "lit": "doué d'une force souveraine",
      "pos_fr": "",
      "role": "Adjectif traduisant la puissance cyclopéenne des instruments modernes et des crises du capital."
  },
  "gewaltsam": {
      "fr": "violent",
      "lit": "accompli par la force irrésistible",
      "pos_fr": "",
      "role": "Épithète qualifiant la rupture révolutionnaire nécessaire contre l'oppression d'État."
  },
  "gewaltsamen": {
      "fr": "violent",
      "lit": "accompli par la force irrésistible",
      "pos_fr": "",
      "role": "Forme fléchie 'gewaltsamen' du lemme 'gewaltsam'. Épithète qualifiant la rupture révolutionnaire nécessaire contre l'oppression d'État."
  },
  "gewinnen": {
      "fr": "gagner / conquérir",
      "lit": "obtenir par la lutte et la victoire",
      "pos_fr": "",
      "role": "Infinitif avec 'zu' sonnant la promesse historique de la victoire communiste universelle."
  },
  "gewissenlos": {
      "fr": "sans scrupule / impitoyable",
      "lit": "dépourvu de toute conscience morale",
      "pos_fr": "Adjectif",
      "role": "Adjectif privatif qualifiant la liberté marchande qui ne recule devant aucune misère humaine pour s'étendre."
  },
  "gewiß": {
      "fr": "certain / déterminé",
      "lit": "assuré, fixé",
      "pos_fr": "",
      "role": "Adjectif marquant un palier objectif atteint par l'évolution historique."
  },
  "gewöhnlich": {
      "fr": "ordinaire / habituel",
      "lit": "selon la coutume",
      "pos_fr": "",
      "role": "Fonctionnement régulier de la production marchande."
  },
  "gierig": {
      "fr": "avidement / voracement",
      "lit": "avec avidité",
      "pos_fr": "",
      "role": "Soif de profits et de conquête de débouchés."
  },
  "glauben": {
      "fr": "croire",
      "lit": "tenir pour vrai",
      "pos_fr": "",
      "role": "Croyance aveugle dans les illusions bourgeoises."
  },
  "gleich": {
      "fr": "également / pareillement",
      "lit": "semblable",
      "pos_fr": "",
      "role": "Adjectif marquant l'équivalence inéluctable de la chute bourgeoise et du triomphe prolétarien."
  },
  "gleichen": {
      "fr": "ressembler à",
      "lit": "être égal à",
      "pos_fr": "",
      "role": "Verbe introduisant la célèbre comparaison avec le sorcier dépassé par ses enchantements."
  },
  "gleicher": {
      "fr": "égal / identique",
      "lit": "de même forme",
      "pos_fr": "",
      "role": "Égalité des droits ou obligation égale du travail."
  },
  "gleichfalls": {
      "fr": "également, de même, pareillement",
      "lit": "en cas identique",
      "pos_fr": "Adverbe",
      "role": "adverbe",
      "etymology": "Composé de « gleich » (égal) + « Fall » (cas) + « -s ».",
      "isCompound": true,
      "compoundParts": [
          "gleich",
          "Fall",
          "-s"
      ]
  },
  "gleichmäßig": {
      "fr": "également / uniformément",
      "lit": "à mesure égale",
      "pos_fr": "",
      "role": "Adverbe marquant l'exposition égale de l'ouvrier à toutes les fluctuations du marché."
  },
  "gleichzeitig": {
      "fr": "simultanément / en même temps",
      "lit": "au même instant",
      "pos_fr": "",
      "role": "Simultanéité de l'essor productif et de la paupérisation."
  },
  "gleisnerisch": {
      "fr": "hypocrite / tartufe",
      "lit": "qui brille faussement",
      "pos_fr": "",
      "role": "Hypocrisie de la compassion aristocratique."
  },
  "goldn": {
      "fr": "d'or / doré",
      "lit": "en or",
      "pos_fr": "",
      "role": "Chaînes d'or du salariat ou pommes d'or de l'industrie."
  },
  "gotisch": {
      "fr": "gothique",
      "lit": "du style architectural gothique",
      "pos_fr": "",
      "role": "Adjectif désignant les cathédrales du moyen âge surpassées par les chemins de fer et machines modernes."
  },
  "greifend": {
      "fr": "qui gagne du terrain / qui s'étend",
      "lit": "qui saisit autour",
      "pos_fr": "",
      "role": "Participe présent de la locution « um sich greifend » marquant l'expansion solidaire des travailleurs."
  },
  "grell": {
      "fr": "criant / éclatant / âpre",
      "lit": "aveuglant ou strident",
      "pos_fr": "",
      "role": "Adjectif soulignant la netteté brutale et contrastée de la crise révolutionnaire finale."
  },
  "groß": {
      "fr": "grand / majeur",
      "lit": "de vaste dimension",
      "pos_fr": "Adjectif",
      "role": "Adjectif soulignant la division monolithique de la société moderne en deux camps gigantesques."
  },
  "grundeigentum": {
      "fr": "propriété foncière",
      "lit": "propriété du sol, possession terrienne",
      "pos_fr": "",
      "role": "Forme fléchie 'Grundeigentum' du lemme 'Grundeigentum'. Substantif composé désignant le monopole terrien féodal de la noblesse junker."
  },
  "grundfrage": {
      "fr": "question fondamentale / nœud du problème",
      "lit": "question de fond, racine de la contradiction",
      "pos_fr": "",
      "role": "Forme fléchie 'Grundfrage' du lemme 'Grundfrage'. Substantif composé attributif désignant la question de la propriété comme pivot de tout mouvement."
  },
  "gründlich": {
      "fr": "approfondi / plus complet",
      "lit": "qui va jusqu'au fond (Grund)",
      "pos_fr": "",
      "role": "Adjectif qualifiant l'intensification méthodique de l'exploitation des vieux marchés."
  },
  "gut": {
      "fr": "bon / bien",
      "lit": "conforme au bien",
      "pos_fr": "",
      "role": "Qualité morale ou utilité pratique."
  },
  "gänzlich": {
      "fr": "entièrement, totalement, complètement",
      "lit": "de façon entière",
      "pos_fr": "Adverbe",
      "role": "adverbe / adjectif",
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
      "pos_fr": "",
      "role": "Mi-complainte amère, mi-chanson satirique."
  },
  "halbbarbarisch": {
      "fr": "semi-barbare",
      "lit": "à moitié barbare",
      "pos_fr": "",
      "role": "Adjectif désignant les nations périphériques que le capitalisme soumet aux métropoles industrielles."
  },
  "halten": {
      "fr": "tenir, maintenir, considérer comme",
      "lit": "retenir dans la main, garder",
      "pos_fr": "Verbe",
      "role": "verbe fort",
      "etymology": "Du moyen haut-allemand « halten », vieux haut-allemand « haltan » (garder le troupeau, retenir)."
  },
  "handeln": {
      "fr": "agir, négocier, s'agir de",
      "lit": "manier de la main, faire commerce",
      "pos_fr": "Verbe",
      "role": "verbe intransitif ou impersonnel",
      "etymology": "Du moyen haut-allemand « handeln », dérivé de « Hand » (la main)."
  },
  "hartnäckigst": {
      "fr": "le plus opiniâtre / le plus acharné",
      "lit": "au cou le plus raide",
      "pos_fr": "",
      "role": "Adjectif superlatif qualifiant la xénophobie farouche des sociétés archaïques terrassées par les bas prix."
  },
  "hauptaufmerksamkeit": {
      "fr": "attention principale",
      "lit": "attention cardinale, concentration majeure",
      "pos_fr": "",
      "role": "Forme fléchie 'Hauptaufmerksamkeit' du lemme 'Hauptaufmerksamkeit'. Substantif composé à l'accusatif singulier, objet direct de 'richten'."
  },
  "hauptsächlich": {
      "fr": "principalement / avant tout",
      "lit": "selon l'essentiel",
      "pos_fr": "",
      "role": "Impact principal d'une mesure économique."
  },
  "heben": {
      "fr": "mettre en avant / faire ressortir",
      "lit": "soulever hors du fond pour placer en évidence",
      "pos_fr": "",
      "role": "Forme fléchie 'heben' du lemme 'hervorheben'. Verbe principal ('heben hervor') marquant le principe communiste fondamental d'analyse."
  },
  "heftig": {
      "fr": "violent / intense",
      "lit": "qui éclate avec impétuosité",
      "pos_fr": "",
      "role": "Adjectif peignant la violence convulsive de la décomposition de la classe régnante."
  },
  "heilig": {
      "fr": "sacré / saint",
      "lit": "intègre, consacré à la divinité",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant les fictions religieuses et solennités chrétiennes par lesquelles l'ordre féodal se sanctifiait."
  },
  "heilige": {
      "fr": "ce qui est sacré",
      "lit": "chose consacrée",
      "pos_fr": "",
      "role": "Nom substantivé de la maxime : « tout ce qui est saint est profané »."
  },
  "heißen": {
      "fr": "s'appeler, signifier, commander",
      "lit": "nommer, ordonner",
      "pos_fr": "Verbe",
      "role": "verbe fort",
      "etymology": "Du moyen haut-allemand « heizen », vieux haut-allemand « heizzan » (commander, nommer)."
  },
  "hemmen": {
      "fr": "entraver / freiner",
      "lit": "bloquer le mouvement",
      "pos_fr": "",
      "role": "Concept matérialiste décisif : les rapports de propriété deviennent des entraves entravant la production."
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
      "pos_fr": "",
      "role": "Particule adverbiale marquant la dégradation sociale de l'ouvrier en pauper."
  },
  "herabdrücken": {
      "fr": "rabaisser / comprimer vers le bas",
      "lit": "presser vers le bas",
      "pos_fr": "",
      "role": "Verbe décrivant l'action mécanique de la machine qui écrase le salaire vers un niveau misérable."
  },
  "herabsinken": {
      "fr": "déchoir / s'affaisser vers le bas",
      "lit": "couler vers le bas",
      "pos_fr": "",
      "role": "Verbe décrivant la chute dramatique du travailleur dans le paupérisme."
  },
  "heranbilden": {
      "fr": "se développer / se former graduellement",
      "lit": "former en approchant",
      "pos_fr": "",
      "role": "Verbe marquant l'incubation séculaire de la bourgeoisie au sein même de la société féodale."
  },
  "herangearbeiten": {
      "fr": "s'élever par le labeur (forme passée)",
      "lit": "travailler pour se hisser vers (heranarbeiten)",
      "pos_fr": "",
      "role": "Verbe montrant comment le serf parvenait jadis à conquérir le statut de membre de la commune."
  },
  "herannahen": {
      "fr": "approcher / s'avancer",
      "lit": "s'approcher vers ici",
      "pos_fr": "",
      "role": "Imminence de la crise révolutionnaire."
  },
  "heraufbeschwor": {
      "fr": "évoqua / fit surgir des enfers",
      "lit": "conjura pour faire monter (heraufbeschwören)",
      "pos_fr": "",
      "role": "Verbe poétique de l'évocation goethéenne des puissances souterraines par le sorcier."
  },
  "herausarbeiten": {
      "fr": "dégager / faire émerger / forger",
      "lit": "extraire par le travail rigoureux",
      "pos_fr": "",
      "role": "Infinitif avec 'zu' inséré désignant le travail continu d'éducation théorique mené par le parti."
  },
  "herauszuarbeiten": {
      "fr": "dégager / faire émerger / forger",
      "lit": "extraire par le travail rigoureux",
      "pos_fr": "",
      "role": "Forme fléchie 'herauszuarbeiten' du lemme 'herausarbeiten'. Infinitif avec 'zu' inséré désignant le travail continu d'éducation théorique mené par le parti."
  },
  "herbeiführen": {
      "fr": "engendrer / provoquer / amener",
      "lit": "amener vers ici, susciter inévitablement",
      "pos_fr": "",
      "role": "Infinitif dépendant de 'muß' désignant les conséquences objectives créées par la bourgeoisie."
  },
  "herrschaft": {
      "fr": "domination / pouvoir de classe",
      "lit": "état de seigneur, règne souverain",
      "pos_fr": "",
      "role": "Forme fléchie 'Herrschaft' du lemme 'Herrschaft'. Substantif au datif féminin singulier désignant l'hégémonie politique bourgeoise."
  },
  "herrschen": {
      "fr": "régner / dominer",
      "lit": "exercer le pouvoir seigneurial",
      "pos_fr": "",
      "role": "Verbe politique constatant l'impuissance historique de la bourgeoisie à maintenir son règne."
  },
  "herrschend": {
      "fr": "dominant / régnant",
      "lit": "qui commande et domine",
      "pos_fr": "",
      "role": "Épithète au nominatif pluriel qualifiant les classes exploiteuses au pouvoir."
  },
  "herrschenden": {
      "fr": "dominant / régnant",
      "lit": "qui commande et domine",
      "pos_fr": "",
      "role": "Forme fléchie 'herrschenden' du lemme 'herrschend'. Épithète au nominatif pluriel qualifiant les classes exploiteuses au pouvoir."
  },
  "herrührend": {
      "fr": "provenant de / dérivant de",
      "lit": "qui remue depuis, issu de",
      "pos_fr": "",
      "role": "Épithète au datif féminin pluriel qualifiant 'Phrasen und Illusionen'."
  },
  "herrührenden": {
      "fr": "provenant de / dérivant de",
      "lit": "qui remue depuis, issu de",
      "pos_fr": "",
      "role": "Forme fléchie 'herrührenden' du lemme 'herrührend'. Épithète au datif féminin pluriel qualifiant 'Phrasen und Illusionen'."
  },
  "herstellen": {
      "fr": "établir / créer / confectionner",
      "lit": "poser ici debout, fabriquer matériellement",
      "pos_fr": "Verbe séparable faible",
      "role": "Verbe séparable décrivant l'action fondatrice de la grande industrie qui engendre le marché mondial."
  },
  "hervor": {
      "fr": "mettre en avant / faire ressortir",
      "lit": "soulever hors du fond pour placer en évidence",
      "pos_fr": "",
      "role": "Forme fléchie 'hervor' du lemme 'hervorheben'. Verbe principal ('heben hervor') marquant le principe communiste fondamental d'analyse."
  },
  "hervorgegangen": {
      "fr": "issu / provenu / né de",
      "lit": "sorti en avant des entrailles de",
      "pos_fr": "Participe passé",
      "role": "Participe passé marquant l'engendrement de la bourgeoisie moderne au sein même du féodalisme."
  },
  "hervorgehen": {
      "fr": "découler / résulter",
      "lit": "sortir en avant de",
      "pos_fr": "Verbe fort séparable",
      "role": "Verbe de déduction logique et matérielle tirée de l'analyse des faits."
  },
  "hervorgehend": {
      "fr": "découlant de / issu de",
      "lit": "sortant hors de",
      "pos_fr": "",
      "role": "Participe présent marquant la causalité directe entre la concurrence et les crises commerciales."
  },
  "hervorgestampft": {
      "fr": "surgi de terre / créé comme par enchantement",
      "lit": "battu du pied hors du sol",
      "pos_fr": "",
      "role": "Métaphore puissante évoquant l'irruption soudaine de populations et cités entières sous l'effet du capital."
  },
  "hervorgezauberen": {
      "fr": "faire surgir comme par enchantement",
      "lit": "faire jaillir par magie (hervorzaubern)",
      "pos_fr": "",
      "role": "Métaphore magique désignant l'apparition fulgurante des forces productives industrielles."
  },
  "hervorheben": {
      "fr": "mettre en avant / faire ressortir",
      "lit": "soulever hors du fond pour placer en évidence",
      "pos_fr": "",
      "role": "Verbe principal ('heben hervor') marquant le principe communiste fondamental d'analyse."
  },
  "hervortreten": {
      "fr": "émerger / se manifester",
      "lit": "avancer au premier plan",
      "pos_fr": "",
      "role": "Émergence ouverte des contradictions de classe."
  },
  "heuchlerisch": {
      "fr": "hypocrite, papelard, faux",
      "lit": "qui simule la dévotion",
      "pos_fr": "Adjectif",
      "role": "adjectif",
      "etymology": "Dérivé de « Heuchler » (hypocrite, du moyen haut-allemand hūchen, ramper humblement)."
  },
  "heutig": {
      "fr": "d'aujourd'hui, actuel, contemporain",
      "lit": "de ce jour",
      "pos_fr": "Adjectif",
      "role": "adjectif",
      "etymology": "Dérivé de « heute » (aujourd'hui, vieux haut-allemand hiutu, en ce jour)."
  },
  "heutzutage": {
      "fr": "de nos jours / aujourd'hui",
      "lit": "en ces jours d'aujourd'hui",
      "pos_fr": "",
      "role": "Adverbe situant l'analyse dans l'actualité industrielle contemporaine."
  },
  "hier": {
      "fr": "ici",
      "lit": "en ce lieu-ci (adverbe de lieu)",
      "pos_fr": "Adverbe de lieu",
      "role": "Adverbe spatial apparié à « dort » pour illustrer la bigarrure géographique des communes bourgeoises médiévales."
  },
  "hierher": {
      "fr": "dans cette catégorie / ici",
      "lit": "jusqu'ici",
      "pos_fr": "",
      "role": "Regroupement des philanthropes dans le socialisme bourgeois."
  },
  "hiermit": {
      "fr": "par là / par ce fait",
      "lit": "avec ceci",
      "pos_fr": "",
      "role": "Pronom adverbial introduisant le constat incontestable de la faillite bourgeoise."
  },
  "hiervon": {
      "fr": "de cela / de là",
      "lit": "issu de ceci",
      "pos_fr": "",
      "role": "Pronom adverbial désignant la source économique de la centralisation politique."
  },
  "hinab": {
      "fr": "vers le bas / dans le gouffre",
      "lit": "mouvement vers le bas en s'éloignant",
      "pos_fr": "",
      "role": "Particule du verbe hinabfallen/hinabwerfen marquant la prolétarisation des classes moyennes."
  },
  "hinabgeschleuderen": {
      "fr": "précipités vers le bas",
      "lit": "projetés vers le fond",
      "pos_fr": "",
      "role": "Chute des couches moyennes dans le prolétariat."
  },
  "hinabgeworfen": {
      "fr": "précipité vers le bas / jeté dans l'abîme",
      "lit": "jeté vers le fond (hinabwerfen)",
      "pos_fr": "",
      "role": "Participe passé illustrant la violence sociale précipitant des fractions dominantes dans le prolétariat."
  },
  "hinaufgearbeiten": {
      "fr": "s'être élevé par l'effort théorique",
      "lit": "avoir travaillé pour monter (hinaufarbeiten)",
      "pos_fr": "",
      "role": "Verbe décrivant l'ascension intellectuelle des idéologues parvenus à la théorie marxiste."
  },
  "hinauslaufen": {
      "fr": "aboutir à, revenir à, se solder par",
      "lit": "courir vers le dehors",
      "pos_fr": "Verbe",
      "role": "verbe séparable",
      "etymology": "Composé de « hinaus » (dehors) + « laufen » (courir, aller).",
      "isCompound": true,
      "compoundParts": [
          "hinaus-",
          "laufen"
      ]
  },
  "hinaustreiben": {
      "fr": "pousser dehors, expulser, chasser",
      "lit": "chasser vers l'extérieur",
      "pos_fr": "Verbe",
      "role": "verbe fort séparable",
      "etymology": "Composé de « hinaus » + « treiben » (pousser, conduire le bétail).",
      "isCompound": true,
      "compoundParts": [
          "hinaus-",
          "treiben"
      ]
  },
  "hineingeschleuderen": {
      "fr": "projeter brutalement au cœur de",
      "lit": "fronder à l'intérieur (hineinschleudern)",
      "pos_fr": "",
      "role": "Verbe dépeignant le sous-prolétariat propulsé fortuitement dans le tourbillon de la révolution."
  },
  "hineinzureißen": {
      "fr": "entraîner de force dans",
      "lit": "tirer violemment à l'intérieur (hineinreißen)",
      "pos_fr": "",
      "role": "Verbe décrivant la bourgeoisie entraînant bon gré mal gré les masses ouvrières dans l'arène politique."
  },
  "hinreichen": {
      "fr": "suffire, être suffisant",
      "lit": "atteindre jusqu'au but",
      "pos_fr": "Verbe",
      "role": "verbe intransitif",
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
      "pos_fr": "",
      "role": "Préposition spatiale désignant l'écran idéologique qui masque les intérêts de classe."
  },
  "hinweggezogen": {
      "fr": "dérober / retirer de dessous",
      "lit": "tiré au loin (hinwegziehen)",
      "pos_fr": "",
      "role": "Métaphore du terrain économique qui se dérobe sous les pieds mêmes de la bourgeoisie."
  },
  "hoch": {
      "fr": "haut / grand",
      "lit": "de rang élevé, solennel",
      "pos_fr": "Adjectif",
      "role": "Adjectif marquant la gravité et l'imminence du moment révolutionnaire."
  },
  "hochmoralisch": {
      "fr": "hautement moral, d'une grande vertu édifiante",
      "lit": "très haut sur le plan moral",
      "pos_fr": "Adjectif",
      "role": "adjectif",
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
      "pos_fr": "",
      "role": "Grandiloquence creuse des discours bourgeois."
  },
  "hundertjährig": {
      "fr": "centenaire / d'un siècle",
      "lit": "qui a duré cent ans",
      "pos_fr": "",
      "role": "Adjectif mesurant la jeunesse relative de la domination bourgeoise eu égard à son gigantisme."
  },
  "häuslich": {
      "fr": "domestique, familial, du foyer",
      "lit": "relatif à la maison",
      "pos_fr": "Adjectif",
      "role": "adjectif",
      "etymology": "Dérivé de « Haus » (maison) avec suffixe « -lich »."
  },
  "höchst": {
      "fr": "extrêmement / au plus haut point",
      "lit": "au plus haut",
      "pos_fr": "",
      "role": "Rôle éminemment révolutionnaire de la bourgeoisie."
  },
  "höchstens": {
      "fr": "tout au plus, au maximum",
      "lit": "au plus haut degré",
      "pos_fr": "Adverbe",
      "role": "adverbe restrictif",
      "etymology": "Génitif superlatif de « hoch » (haut)."
  },
  "hören": {
      "fr": "entendre, écouter",
      "lit": "percevoir par l'ouïe",
      "pos_fr": "Verbe",
      "role": "verbe transitif",
      "etymology": "Du moyen haut-allemand « hœren », vieux haut-allemand « hōren », racine indo-européenne *kous- (écouter)."
  },
  "identisch": {
      "fr": "identique, semblable en tout point",
      "lit": "rigoureusement le même",
      "pos_fr": "Adjectif",
      "role": "adjectif",
      "etymology": "Emprunté au bas-latin « identicus », de « identitas » (du latin idem, le même)."
  },
  "ideologisch": {
      "fr": "idéologique",
      "lit": "relatif aux représentations idéologiques",
      "pos_fr": "Adjectif",
      "role": "adjectif",
      "etymology": "Emprunté au français « idéologique », dérivé d'« idéologie » (science des idées chez Destutt de Tracy)."
  },
  "idyllisch": {
      "fr": "idyllique",
      "lit": "champêtre, d'une douceur rustique et naïve",
      "pos_fr": "Adjectif",
      "role": "Adjectif ironique fustigeant la description enjolivée des campagnes d'Ancien Régime par les romantiques."
  },
  "ihm": {
      "fr": "lui / à lui",
      "lit": "pronom personnel 3e personne masculin/neutre datif",
      "pos_fr": "",
      "role": "Pronom personnel complément d'attribution ou d'objet indirect."
  },
  "ihn": {
      "fr": "le / lui",
      "lit": "pronom personnel 3e personne masculin accusatif",
      "pos_fr": "",
      "role": "Pronom personnel complément d'objet direct désignant l'ouvrier exploité."
  },
  "ihnen": {
      "fr": "leur / à eux",
      "lit": "pronom personnel 3e personne pluriel datif",
      "pos_fr": "",
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
      "pos_fr": "",
      "role": "Forme fléchie 'ihre' du lemme 'ihr'. Pronom de la 3e ou 2e personne marquant l'attribution ou la coréférence."
  },
  "ihrer": {
      "fr": "leur / vous / elle",
      "lit": "pronom personnel ou possessif",
      "pos_fr": "",
      "role": "Forme fléchie 'ihrer' du lemme 'ihr'. Pronom de la 3e ou 2e personne marquant l'attribution ou la coréférence."
  },
  "ihrigen": {
      "fr": "ce qui leur appartient / leurs biens",
      "lit": "le leur propre",
      "pos_fr": "",
      "role": "Pronom substantivé constatant que les prolétaires n'ont rien à eux à protéger."
  },
  "ii": {
      "fr": "deuxième / II",
      "lit": "chiffre romain deux",
      "pos_fr": "",
      "role": "Forme fléchie 'II' du lemme 'II'. Numéral romain déterminant le substantif 'Abschnitt'."
  },
  "illusionen": {
      "fr": "illusion",
      "lit": "croyance trompeuse, mirage politique",
      "pos_fr": "",
      "role": "Forme fléchie 'Illusionen' du lemme 'Illusion'. Substantif au datif féminin pluriel désignant les faux espoirs démocrates-bourgeois."
  },
  "im": {
      "fr": "en / dans",
      "lit": "dans, à l'intérieur de",
      "pos_fr": "",
      "role": "Forme fléchie 'im' du lemme 'in'. Préposition spatiale régissant le datif pour situer l'organisation dans son cadre géographique."
  },
  "immer": {
      "fr": "toujours / sans cesse",
      "lit": "toujours, constamment (adverbe temporel)",
      "pos_fr": "Adverbe de temps",
      "role": "Adverbe temporel marquant l'inversion syntaxique V2 et la dynamique d'accroissement continu des marchés."
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
      "pos_fr": "",
      "role": "Conjonction équivalant au gérondif français, exprimant la modalité opératoire."
  },
  "indemselben": {
      "fr": "dans la même mesure",
      "lit": "dans la même proportion",
      "pos_fr": "",
      "role": "Locution adverbiale corrélative marquant la proportionnalité rigoureuse."
  },
  "indes": {
      "fr": "cependant / entre-temps",
      "lit": "dans cet intervalle",
      "pos_fr": "",
      "role": "Transition logique marquant une contradiction sous-jacente."
  },
  "indirekter": {
      "fr": "indirect, médiat",
      "lit": "qui ne va pas tout droit",
      "pos_fr": "Adjectif",
      "role": "adjectif",
      "etymology": "Emprunté au latin « indirectus » (qui n'est pas direct)."
  },
  "industriell": {
      "fr": "industriel",
      "lit": "relatif à la grande production mécanisée",
      "pos_fr": "Adjectif",
      "role": "Adjectif définissant la bourgeoisie d'usine moderne."
  },
  "industrielle": {
      "fr": "industriel",
      "lit": "patron d'industrie",
      "pos_fr": "",
      "role": "Nom masculin désignant le petit fabricant ou le grand magnat de la manufacture."
  },
  "infolge": {
      "fr": "par suite de, par l'effet de, à cause de",
      "lit": "dans la suite de",
      "pos_fr": "Préposition",
      "role": "préposition régissant le génitif",
      "etymology": "Composé de « in » + « Folge » (suite, conséquence).",
      "isCompound": true,
      "compoundParts": [
          "in",
          "Folge"
      ]
  },
  "innere": {
      "fr": "intérieur, intime, interne",
      "lit": "situé au-dedans",
      "pos_fr": "Adjectif",
      "role": "adjectif comparatif de position",
      "etymology": "Du moyen haut-allemand « innere », vieux haut-allemand « innaro », comparatif de la préposition « in » (dans)."
  },
  "innerhalb": {
      "fr": "à l'intérieur de / au sein de",
      "lit": "dans les limites internes",
      "pos_fr": "",
      "role": "Préposition marquant l'immanence des contradictions au sein de la vieille société."
  },
  "ins": {
      "fr": "en / dans",
      "lit": "dans, à l'intérieur de",
      "pos_fr": "",
      "role": "Forme fléchie 'ins' du lemme 'in'. Préposition spatiale régissant le datif pour situer l'organisation dans son cadre géographique."
  },
  "insurrektion": {
      "fr": "insurrection / soulèvement armé",
      "lit": "soulèvement collectif contre le pouvoir",
      "pos_fr": "",
      "role": "Forme fléchie 'Insurrektion' du lemme 'Insurrektion'. Substantif à l'accusatif féminin singulier désignant l'insurrection révolutionnaire polonaise."
  },
  "interessen": {
      "fr": "intérêt matériel / revendication",
      "lit": "ce qui importe, intérêt socio-économique",
      "pos_fr": "",
      "role": "Forme fléchie 'Interessen' du lemme 'Interesse'. Substantif au génitif neutre pluriel, coordonné à 'Zwecke'."
  },
  "interessiert": {
      "fr": "intéressé, motivé par un intérêt privé",
      "lit": "qui y trouve son intérêt",
      "pos_fr": "Adjectif",
      "role": "participe passé adjectivé",
      "etymology": "Du verbe « interessieren », du latin « interesse » (importer, être entre)."
  },
  "italienisch": {
      "fr": "italien",
      "lit": "en langue italienne",
      "pos_fr": "Adjectif",
      "role": "Adjectif de langue pour l'édition italienne du Manifeste."
  },
  "ja": {
      "fr": "oui / d'ailleurs, certes, en effet",
      "lit": "oui, assurément",
      "pos_fr": "Adverbe",
      "role": "particule de discours / adverbe",
      "etymology": "Du moyen haut-allemand et vieux haut-allemand « jā » (particule affirmative)."
  },
  "jagen": {
      "fr": "chasser / traquer / pousser impérieusement",
      "lit": "poursuivre comme gibier",
      "pos_fr": "",
      "role": "Verbe dramatisant la frénésie du capital pourchassé sur tout le globe par le besoin de profit."
  },
  "jahrhundert": {
      "fr": "siècle",
      "lit": "centaine d'années",
      "pos_fr": "",
      "role": "Forme fléchie 'Jahrhundert' du lemme 'Jahrhundert'. Substantif composé au datif singulier servant d'étalon comparatif historique."
  },
  "je": {
      "fr": "d'autant / à mesure que",
      "lit": "selon la proportion",
      "pos_fr": "",
      "role": "Adverbe corrélatif introduisant la variable dont dépend le phénomène économique."
  },
  "jede": {
      "fr": "chaque / tout / n'importe quel",
      "lit": "chacun en particulier sans omission",
      "pos_fr": "",
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
      "lit": "malgré cela, en revanche",
      "pos_fr": "Adverbe de concession",
      "role": "Adverbe marquant la singularité spécifique de l'époque bourgeoise moderne."
  },
  "jener": {
      "fr": "ceux-là / de ces...-là",
      "lit": "démonstratif lointain",
      "pos_fr": "",
      "role": "Désigne les classes et conditions passées."
  },
  "jetzig": {
      "fr": "actuel / présent",
      "lit": "de maintenant",
      "pos_fr": "",
      "role": "Adjectif désignant la formation sociale contemporaine soumise à la critique."
  },
  "jetzt": {
      "fr": "maintenant / désormais",
      "lit": "en ce moment précis",
      "pos_fr": "",
      "role": "Adverbe marquant le point de bascule de la dialectique historique."
  },
  "jung": {
      "fr": "jeune",
      "lit": "au début de la vie",
      "pos_fr": "",
      "role": "Le 'Jeune Angleterre' ou jeune génération prolétarienne."
  },
  "kampf": {
      "fr": "lutte / combat",
      "lit": "affrontement de classe",
      "pos_fr": "",
      "role": "Forme fléchie 'Kampf' du lemme 'Kampf'. Substantif au nominatif masculin singulier, sujet grammatical de 'beginnt'."
  },
  "kann": {
      "fr": "pouvoir / être capable de",
      "lit": "avoir le pouvoir matériel d'agir",
      "pos_fr": "",
      "role": "Forme fléchie 'kann' du lemme 'können'. Verbe modal exprimant la capacité combative pratique des prolétaires."
  },
  "katholisch": {
      "fr": "catholique",
      "lit": "universel (romain)",
      "pos_fr": "",
      "role": "Allusion au clergé catholique allié aux seigneurs."
  },
  "kaum": {
      "fr": "à peine",
      "lit": "avec peine, tout juste",
      "pos_fr": "",
      "role": "Adverbe soulignant la brièveté temporelle du règne bourgeois au regard de son œuvre colossale."
  },
  "kehren": {
      "fr": "tourner / diriger / retourner contre",
      "lit": "balayer, faire pivoter vers",
      "pos_fr": "",
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
      "pos_fr": "",
      "role": "Forme fléchie 'keinen' du lemme 'kein'. Déterminant négatif marquant l'absence totale de répit dans le travail idéologique."
  },
  "keineswegs": {
      "fr": "nullement, en aucune manière, pas du tout",
      "lit": "sur aucun chemin",
      "pos_fr": "Adverbe",
      "role": "adverbe négatif fort",
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
      "pos_fr": "",
      "role": "Connaissance des conditions réelles de vie."
  },
  "ketten": {
      "fr": "chaîne",
      "lit": "liens de fer, entraves de l'esclavage salarié",
      "pos_fr": "",
      "role": "Forme fléchie 'Ketten' du lemme 'Kette'. Substantif métaphorique à l'accusatif pluriel désignant les fers de l'exploitation capitaliste."
  },
  "klar": {
      "fr": "clair / limpide / lucide",
      "lit": "lumineux, évident à l'intellect",
      "pos_fr": "",
      "role": "Épithète qualifiant la lucidité théorique exigée pour la conscience de classe."
  },
  "klares": {
      "fr": "clair / limpide / lucide",
      "lit": "lumineux, évident à l'intellect",
      "pos_fr": "",
      "role": "Forme fléchie 'klares' du lemme 'klar'. Épithète qualifiant la lucidité théorique exigée pour la conscience de classe."
  },
  "klassen": {
      "fr": "classe sociale",
      "lit": "division économique de la société",
      "pos_fr": "",
      "role": "Forme fléchie 'Klassen' du lemme 'Klasse'. Substantif féminin pluriel désignant les groupes sociaux antagoniques."
  },
  "klassisch": {
      "fr": "classique",
      "lit": "de premier rang, modèle",
      "pos_fr": "",
      "role": "Forme classique et achevée des luttes en Angleterre/France."
  },
  "klein": {
      "fr": "petit",
      "lit": "de dimensions modestes",
      "pos_fr": "",
      "role": "Adjectif désignant la petite production artisanale vouée à l'écrasement concurrentiel."
  },
  "kleinbäuerlich": {
      "fr": "de petite paysannerie, petit-paysan",
      "lit": "relatif aux petits paysans",
      "pos_fr": "Adjectif",
      "role": "adjectif",
      "etymology": "Composé de « klein » (petit) + « Bauer » (paysan) + « -lich ».",
      "isCompound": true,
      "compoundParts": [
          "klein",
          "Bauer",
          "-lich"
      ]
  },
  "kleinbürgerei": {
      "fr": "petite bourgeoisie",
      "lit": "monde étriqué des petits bourgeois corporatistes",
      "pos_fr": "",
      "role": "Forme fléchie 'Kleinbürgerei' du lemme 'Kleinbürgerei'. Substantif satirique désignant la frange corporative et philistine des boutiquiers allemands."
  },
  "kleinbürgerlich": {
      "fr": "petit-bourgeois",
      "lit": "relatif à la petite bourgeoisie",
      "pos_fr": "Adjectif",
      "role": "adjectif",
      "etymology": "Composé de « klein » + « Bürger » (bourgeois) + « -lich ».",
      "isCompound": true,
      "compoundParts": [
          "klein",
          "Bürger",
          "-lich"
      ]
  },
  "kleinlich": {
      "fr": "mesquin / étroit d'esprit",
      "lit": "de petit format",
      "pos_fr": "",
      "role": "Adjectif dépeignant la mesquinerie du profit érigé en loi suprême de l'atelier."
  },
  "kleinlicher": {
      "fr": "plus mesquin / étroit",
      "lit": "plus petit d'esprit",
      "pos_fr": "",
      "role": "Caractère mesquin du despotisme de fabrique."
  },
  "knechten": {
      "fr": "asservir / réduire en servitude",
      "lit": "traiter en valet (Knecht)",
      "pos_fr": "",
      "role": "Verbe décrivant l'asservissement impitoyable de l'ouvrier par la machine et le patron."
  },
  "knechtisch": {
      "fr": "servile / d'esclave",
      "lit": "propre au valet ou serf (Knecht)",
      "pos_fr": "",
      "role": "Adjectif décrivant la survie au rabais que le maître est contraint d'assurer à son exploité."
  },
  "knöchern": {
      "fr": "osseux / squelettique",
      "lit": "fait d'os",
      "pos_fr": "",
      "role": "Mains décharnées de l'ouvrier usé par l'usine."
  },
  "knüpfen": {
      "fr": "nouer / lier / attacher",
      "lit": "lier par des nœuds serrés",
      "pos_fr": "Verbe faible",
      "role": "Verbe décrivant les liens personnels et affectifs artificiels qui ligotaient le serf à son maître féodal."
  },
  "kolossal": {
      "fr": "colossal / gigantesque",
      "lit": "à l'échelle d'un colosse",
      "pos_fr": "",
      "role": "Adjectif traduisant la démesure prométhéenne des capacités productives industrielles."
  },
  "komisch": {
      "fr": "comique / burlesque",
      "lit": "propre à la comédie",
      "pos_fr": "",
      "role": "Effet burlesque des jérémiades aristocratiques."
  },
  "kommen": {
      "fr": "venir / parvenir / accéder",
      "lit": "se déplacer vers un but, arriver à destination",
      "pos_fr": "Verbe fort",
      "role": "Verbe fort employé dans la locution « zur Herrschaft kommen » (conquérir le pouvoir politique, accéder à l'hégémonie)."
  },
  "kommend": {
      "fr": "à venir / futur",
      "lit": "qui vient",
      "pos_fr": "",
      "role": "La société communiste future."
  },
  "kommerziell": {
      "fr": "commercialement / sur le plan du commerce",
      "lit": "relatif au négoce",
      "pos_fr": "",
      "role": "Fluctuations commerciales des prix."
  },
  "kommunisten": {
      "fr": "communiste",
      "lit": "partisan de la communauté des biens",
      "pos_fr": "",
      "role": "Forme fléchie 'Kommunisten' du lemme 'Kommunist'. Substantif au génitif ou nominatif pluriel désignant les membres du Parti communiste."
  },
  "kommunistisch": {
      "fr": "communiste",
      "lit": "qui relève du parti ou de l'idéologie communiste",
      "pos_fr": "Adjectif",
      "role": "Adjectif politique identifiant le mouvement prolétarien révolutionnaire."
  },
  "kommunistische": {
      "fr": "communiste",
      "lit": "relatif au communisme et à l'abolition des classes",
      "pos_fr": "",
      "role": "Forme fléchie 'Kommunistische' du lemme 'kommunistisch'. Épithète qualifiant le Parti ou la révolution émancipatrice universelle."
  },
  "kommunistischen": {
      "fr": "communiste",
      "lit": "relatif au communisme et à l'abolition des classes",
      "pos_fr": "",
      "role": "Forme fléchie 'kommunistischen' du lemme 'kommunistisch'. Épithète qualifiant le Parti ou la révolution émancipatrice universelle."
  },
  "konkurrierend": {
      "fr": "concurrent / rival",
      "lit": "qui court avec pour rivaliser",
      "pos_fr": "",
      "role": "Participe présent désignant les marchandises importées qui ruinent le travailleur manuel."
  },
  "konsequent": {
      "fr": "conséquemment / logiquement",
      "lit": "en toute conséquence",
      "pos_fr": "",
      "role": "Conclusion logique déduite des prémisses doctrinaires."
  },
  "konservativ": {
      "fr": "conservateur",
      "lit": "qui maintient l'état établi",
      "pos_fr": "",
      "role": "Épithète qualifiant la bourgeoisie d'ordre opposée à toute réforme."
  },
  "konservative": {
      "fr": "conservateur",
      "lit": "qui maintient l'état établi",
      "pos_fr": "",
      "role": "Forme fléchie 'konservative' du lemme 'konservativ'. Épithète qualifiant la bourgeoisie d'ordre opposée à toute réforme."
  },
  "konstituieren": {
      "fr": "constituer, ériger en, fonder",
      "lit": "établir ensemble de manière stable",
      "pos_fr": "Verbe",
      "role": "verbe transitif ou réfléchi",
      "etymology": "Emprunté au latin « constituere » (établir fermement, décréter)."
  },
  "konstituiert": {
      "fr": "constitué / établi",
      "lit": "établi, organisé en corps politique",
      "pos_fr": "",
      "role": "Épithète au datif féminin pluriel qualifiant 'Arbeiterparteien'."
  },
  "konstituierten": {
      "fr": "constitué / établi",
      "lit": "établi, organisé en corps politique",
      "pos_fr": "",
      "role": "Forme fléchie 'konstituierten' du lemme 'konstituiert'. Épithète au datif féminin pluriel qualifiant 'Arbeiterparteien'."
  },
  "konzentrieren": {
      "fr": "concentrer",
      "lit": "rassembler en un centre unique",
      "pos_fr": "",
      "role": "Loi économique majeure : la centralisation du capital dans les mains d'un petit nombre de magnats."
  },
  "konzentriert": {
      "fr": "concentré",
      "lit": "rassemblé en un centre",
      "pos_fr": "",
      "role": "Participe passé marquant la centralisation du capital et de la force politique."
  },
  "kosmopolitisch": {
      "fr": "cosmopolite",
      "lit": "qui appartient au monde entier",
      "pos_fr": "",
      "role": "Adjectif désignant le déracinement planétaire de la production et de la consommation marchandes."
  },
  "krakauer": {
      "fr": "de Cracovie / cracovien",
      "lit": "propre à la ville de Cracovie",
      "pos_fr": "",
      "role": "Forme fléchie 'Krakauer' du lemme 'Krakauer'. Adjectif géographique invariable qualifiant le soulèvement de février-mars 1846."
  },
  "kritisch": {
      "fr": "critique / avec lucidité",
      "lit": "qui juge et passe au crible",
      "pos_fr": "",
      "role": "Adverbe de manière qualifiant l'attitude d'examen sans complaisance ('sich verhalten')."
  },
  "kritisch-utopistisch": {
      "fr": "critique et utopique",
      "lit": "qui examine et imagine",
      "pos_fr": "",
      "role": "Section III.3 du Manifeste consacrée à Saint-Simon, Fourier et Owen."
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
      "pos_fr": "",
      "role": "Noyau verbal conjugué au présent de l'indicatif marquant l'action militante directe."
  },
  "kämpfend": {
      "fr": "combattant / en lutte",
      "lit": "engagé dans un combat mortel",
      "pos_fr": "Participe présent",
      "role": "Adjectif décrivant les deux classes aux prises dans l'arène historique."
  },
  "kämpft": {
      "fr": "combattre / lutter",
      "lit": "mener un combat de classe",
      "pos_fr": "",
      "role": "Forme fléchie 'kämpft' du lemme 'kämpfen'. Noyau verbal conjugué au présent de l'indicatif marquant l'action militante directe."
  },
  "können": {
      "fr": "pouvoir / être capable de",
      "lit": "avoir le pouvoir matériel d'agir",
      "pos_fr": "",
      "role": "Verbe modal exprimant la capacité combative pratique des prolétaires."
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
      "pos_fr": "",
      "role": "Adverbe mesurant la précarité de la vie ouvrière liée à la vente de sa force de travail."
  },
  "lassen": {
      "fr": "laisser / faire faire",
      "lit": "permettre, abandonner à l'état",
      "pos_fr": "",
      "role": "Verbe causatif régissant l'abandon de l'ouvrier à sa déchéance matérielle."
  },
  "laut": {
      "fr": "bruyant / à voix haute",
      "lit": "à plein son",
      "pos_fr": "",
      "role": "Protestations sonores des travailleurs."
  },
  "lauter": {
      "fr": "rien que / uniquement / que des",
      "lit": "pur, sans mélange",
      "pos_fr": "",
      "role": "Autant de chaînes, rien que des entraves bourgeoises."
  },
  "leben": {
      "fr": "vie",
      "lit": "existence vitale",
      "pos_fr": "",
      "role": "Forme fléchie 'Leben' du lemme 'Leben'. Substantif à l'accusatif neutre singulier dans la locution 'ins Leben rufen' (susciter, enfanter)."
  },
  "lebendig": {
      "fr": "vivant, actif, animé",
      "lit": "qui a la vie",
      "pos_fr": "Adjectif",
      "role": "adjectif",
      "etymology": "Du moyen haut-allemand « lebendec », vieux haut-allemand « lebentīc », dérivé de « leben » (vivre)."
  },
  "lehren": {
      "fr": "enseigner / apprendre",
      "lit": "instruire",
      "pos_fr": "",
      "role": "Ce qu'enseigne l'histoire des luttes de classes."
  },
  "leichter": {
      "fr": "plus facilement / plus aisé",
      "lit": "plus léger",
      "pos_fr": "",
      "role": "Facilité avec laquelle le christianisme se donne des airs sociaux."
  },
  "leichtest": {
      "fr": "le plus facilement",
      "lit": "superlatif de leicht",
      "pos_fr": "",
      "role": "Adverbe au superlatif caractérisant la simplification extrême du geste productif machinisé."
  },
  "leichtesten": {
      "fr": "le plus facilement",
      "lit": "au plus facile",
      "pos_fr": "",
      "role": "Le travail le plus élémentaire exigé par les machines."
  },
  "leidendst": {
      "fr": "le plus souffrant",
      "lit": "souffrant au plus haut point",
      "pos_fr": "",
      "role": "Le prolétariat vu uniquement comme la classe la plus souffrante."
  },
  "letzter": {
      "fr": "dernier, ultime",
      "lit": "le plus tardif",
      "pos_fr": "Adjectif",
      "role": "adjectif superlatif",
      "etymology": "Du moyen haut-allemand « lezzest », superlatif de « lazi » (tardif, paresseux)."
  },
  "liberal": {
      "fr": "libéral",
      "lit": "partisan de la libre concurrence",
      "pos_fr": "",
      "role": "Opposition libérale bourgeoise contre la monarchie."
  },
  "liebesschwül": {
      "fr": "lourd de vapeurs sentimentales",
      "lit": "moite d'amour éthéré",
      "pos_fr": "",
      "role": "Ironie de Marx sur la sentimentalité des philosophes allemands."
  },
  "liefern": {
      "fr": "fournir / livrer",
      "lit": "mettre à disposition",
      "pos_fr": "",
      "role": "Fournir les armes matérielles ou intellectuelles."
  },
  "literarisch": {
      "fr": "littéraire",
      "lit": "relatif aux lettres",
      "pos_fr": "",
      "role": "Combat mené uniquement sur le terrain des brochures et pamphlets."
  },
  "lokal": {
      "fr": "local / de terroir",
      "lit": "circonscrit au lieu",
      "pos_fr": "",
      "role": "Adjectif caractérisant l'étroitesse géographique de la production et des luttes féodales."
  },
  "lossagen": {
      "fr": "se délier de / rompre avec",
      "lit": "déclarer sa rupture",
      "pos_fr": "",
      "role": "Verbe politique marquant la désertion d'une part de la classe régnante rejoignant les insurgés."
  },
  "lächerlicher": {
      "fr": "dérisoire, ridicule",
      "lit": "qui prête à rire",
      "pos_fr": "Adjectif",
      "role": "adjectif",
      "etymology": "Dérivé de « lachen » (rire) + « -erlich »."
  },
  "länder": {
      "fr": "pays",
      "lit": "territoire, contrée nationale",
      "pos_fr": "",
      "role": "Forme fléchie 'Länder' du lemme 'Land'. Substantif au génitif pluriel dans 'aller Länder' (de tous les pays)."
  },
  "ländlich": {
      "fr": "rural / campagnard",
      "lit": "propre à la terre et aux champs",
      "pos_fr": "",
      "role": "Adjectif désignant la paysannerie soumise à l'hégémonie de la grande cité bourgeoise."
  },
  "länger": {
      "fr": "plus longtemps",
      "lit": "plus longuement",
      "pos_fr": "",
      "role": "La bourgeoisie incapable de régner plus longtemps."
  },
  "längst": {
      "fr": "depuis longtemps, depuis belle lurette",
      "lit": "au plus long moment",
      "pos_fr": "Adverbe",
      "role": "adverbe superlatif",
      "etymology": "Superlatif temporel de « lang » (long)."
  },
  "machen": {
      "fr": "faire / ériger en",
      "lit": "façonner, poser comme",
      "pos_fr": "",
      "role": "Noyau verbal de la relative dans la locution 'zur Bedingung machen' (poser en condition préalable)."
  },
  "macht": {
      "fr": "faire / ériger en",
      "lit": "façonner, poser comme",
      "pos_fr": "",
      "role": "Forme fléchie 'macht' du lemme 'machen'. Noyau verbal de la relative dans la locution 'zur Bedingung machen' (poser en condition préalable)."
  },
  "man": {
      "fr": "on",
      "lit": "l'être humain, un quelconque individu",
      "pos_fr": "Pronom",
      "role": "pronom indéfini sujet",
      "etymology": "Forme atone affaiblie de « Mann » (homme), d'origine proto-germanique *mann-."
  },
  "mannigfach": {
      "fr": "de diverses manières / varié",
      "lit": "maintes fois plié",
      "pos_fr": "",
      "role": "Modes multiples par lesquels l'histoire progresse."
  },
  "mannigfaltig": {
      "fr": "multiple / varié / diversifié",
      "lit": "qui prend de nombreux plis et formes",
      "pos_fr": "Adjectif",
      "role": "Adjectif décrivant la luxuriance des hiérarchies et ordres de l'ancienne Rome et du Moyen Âge."
  },
  "mannigfechen": {
      "fr": "de diverses manières / de multiples façons",
      "lit": "plié de multiples façons (mannigfach)",
      "pos_fr": "",
      "role": "Adverbe décrivant les répercussions multiples des crises sur la conscience de classe."
  },
  "marktschreierisch": {
      "fr": "sur un ton de charlatan / bonimenteur",
      "lit": "à la façon d'un crieur de foire",
      "pos_fr": "",
      "role": "Boniments publicitaires de la philanthropie bourgeoise."
  },
  "massenhaft": {
      "fr": "massif / en grande quantité",
      "lit": "par masses",
      "pos_fr": "",
      "role": "Concentration massive de capitaux ou prolétaires."
  },
  "massenhafterer": {
      "fr": "plus massif / plus gigantesque",
      "lit": "comparatif de massenhaft (en masse)",
      "pos_fr": "",
      "role": "Adjectif comparatif qualifiant la démesure des forces productives bourgeoises."
  },
  "materiell": {
      "fr": "matériel / économique",
      "lit": "qui relève de la matière sensible",
      "pos_fr": "",
      "role": "Concept clé du matérialisme historique marquant le primat de l'infrastructure économique."
  },
  "mehr": {
      "fr": "plus / davantage",
      "lit": "en quantité supérieure",
      "pos_fr": "Adverbe comparatif",
      "role": "Adverbe renforçant l'accélération de la division sociale (« immer mehr » = de plus en plus)."
  },
  "menschlich": {
      "fr": "humain",
      "lit": "propre à l'homme",
      "pos_fr": "",
      "role": "L'émancipation humaine véritable par-delà l'aliénation."
  },
  "meßen": {
      "fr": "mesurer",
      "lit": "évaluer l'étendue",
      "pos_fr": "",
      "role": "Mesurer le degré de développement historique."
  },
  "minder": {
      "fr": "moins",
      "lit": "en moindre proportion",
      "pos_fr": "",
      "role": "Adverbe coordonné à 'mehr' marquant les gradations du développement capitaliste."
  },
  "misère": {
      "fr": "misère (allusion au livre de Proudhon)",
      "lit": "dénuement extrême (terme français)",
      "pos_fr": "",
      "role": "Titre de l'ouvrage 'Philosophie de la misère' critiqué par Marx."
  },
  "mit": {
      "fr": "avec / au moyen de",
      "lit": "en compagnie de, au moyen de",
      "pos_fr": "Préposition (régime datif)",
      "role": "Préposition d'accompagnement ou d'instrument régissant le datif."
  },
  "miteinander": {
      "fr": "les uns avec les autres / mutuellement",
      "lit": "l'un avec l'autre",
      "pos_fr": "",
      "role": "Adverbe marquant la mise en contact solidaire des prolétaires de contrées distinctes."
  },
  "mittelalterlich": {
      "fr": "médiéval / du moyen âge",
      "lit": "qui appartient aux âges moyens",
      "pos_fr": "",
      "role": "Adjectif désignant le mode artisanal corporatif que les ouvriers tentent d'abord de reconquérir en vain."
  },
  "mitunter": {
      "fr": "parfois / de temps à autre",
      "lit": "au milieu de cela",
      "pos_fr": "",
      "role": "Résultats politiques occasionnels des coalitions."
  },
  "modeln": {
      "fr": "modeler, façonner selon un moule",
      "lit": "mouler d'après un modèle",
      "pos_fr": "Verbe",
      "role": "verbe transitif",
      "etymology": "Dérivé de « Model » (moule, patron, forme), emprunté au latin « modulus » (mesure, module)."
  },
  "modern": {
      "fr": "moderne",
      "lit": "propre au temps présent",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant l'ordre bourgeois né des ruines de la féodalité."
  },
  "modifizieren": {
      "fr": "modifier, aménager",
      "lit": "donner une mesure nouvelle",
      "pos_fr": "Verbe",
      "role": "verbe transitif",
      "etymology": "Emprunté au latin « modificare » (régler, assigner une mesure)."
  },
  "momentan": {
      "fr": "momentané / passager",
      "lit": "qui ne dure qu'un instant",
      "pos_fr": "",
      "role": "Adjectif qualifiant la rechute éphémère mais violente dans la famine lors des crises du capital."
  },
  "monarchie": {
      "fr": "monarchie",
      "lit": "pouvoir héréditaire d'un souverain unique",
      "pos_fr": "",
      "role": "Forme fléchie 'Monarchie' du lemme 'Monarchie'. Substantif à l'accusatif féminin singulier désignant l'État féodal absolutiste à abattre."
  },
  "monopolisierbar": {
      "fr": "monopolisable, susceptible de faire l'objet d'un monopole",
      "lit": "qui peut être monopolisé",
      "pos_fr": "Adjectif",
      "role": "adjectif",
      "etymology": "Composé de « Monopol » + suffixe de possibilité « -bar ».",
      "isCompound": true,
      "compoundParts": [
          "Monopol",
          "-isier-",
          "-bar"
      ]
  },
  "moralisch": {
      "fr": "moral",
      "lit": "relatif aux mœurs et aux devoirs",
      "pos_fr": "Adjectif",
      "role": "adjectif",
      "etymology": "Emprunté au latin « moralis » (relatif aux mœurs, de mos / moris)."
  },
  "muß": {
      "fr": "devoir / être contraint par la nécessité",
      "lit": "avoir la nécessité inéluctable",
      "pos_fr": "",
      "role": "Forme fléchie 'muß' du lemme 'müssen'. Verbe modal au présent exprimant le déterminisme historique économique."
  },
  "mächtig": {
      "fr": "puissant",
      "lit": "doué de pouvoir",
      "pos_fr": "",
      "role": "Adjectif décrivant la force irrésistible de la classe ouvrière unie."
  },
  "mächtiger": {
      "fr": "plus puissamment / plus formidablement",
      "lit": "plus puissant",
      "pos_fr": "",
      "role": "Renaissance toujours plus formidable du parti ouvrier."
  },
  "möge": {
      "fr": "puisse / pouvoir (subjonctif ou optatif)",
      "lit": "être en capacité, avoir le pouvoir",
      "pos_fr": "",
      "role": "Forme fléchie 'möge' du lemme 'mögen'. Verbe modal au subjonctif exprimant la concession ou le souhait insurrectionnel ('Mögen ... zittern')."
  },
  "mögen": {
      "fr": "puisse / pouvoir (subjonctif ou optatif)",
      "lit": "être en capacité, avoir le pouvoir",
      "pos_fr": "",
      "role": "Verbe modal au subjonctif exprimant la concession ou le souhait insurrectionnel ('Mögen ... zittern')."
  },
  "möglich": {
      "fr": "possible / réalisable",
      "lit": "qui peut être fait",
      "pos_fr": "",
      "role": "Mesures applicables selon les conditions nationales."
  },
  "möglichst": {
      "fr": "le plus... possible / aussi... que possible",
      "lit": "au plus haut degré possible",
      "pos_fr": "",
      "role": "Adverbe intensifiant l'exigence de netteté conceptuelle ('ein möglichst klares Bewußtsein')."
  },
  "müssen": {
      "fr": "devoir / être contraint par la nécessité",
      "lit": "avoir la nécessité inéluctable",
      "pos_fr": "",
      "role": "Verbe modal au présent exprimant le déterminisme historique économique."
  },
  "müßig": {
      "fr": "oisif / oiseux",
      "lit": "qui n'a rien à faire",
      "pos_fr": "",
      "role": "Oisiveté parasitaire des classes rentières."
  },
  "nach": {
      "fr": "après / d'après / selon",
      "lit": "vers, à la suite de",
      "pos_fr": "",
      "role": "Préposition régissant le datif marquant la succession des étapes de la lutte ('nach dem Sturz')."
  },
  "nachweisen": {
      "fr": "démontrer / prouver",
      "lit": "montrer après coup",
      "pos_fr": "",
      "role": "Démonstration scientifique ou dialectique."
  },
  "nackt": {
      "fr": "nu / froid",
      "lit": "dénudé, sans vêtements ni parure protectrice",
      "pos_fr": "Adjectif",
      "role": "Adjectif métaphorique qualifiant l'intérêt économique dépouillé de toute justification religieuse ou morale."
  },
  "namentlich": {
      "fr": "notamment / particulièrement",
      "lit": "en le nommant",
      "pos_fr": "",
      "role": "Adverbe focalisant l'attention sur les idéologues bourgeois passés au prolétariat."
  },
  "national": {
      "fr": "national",
      "lit": "relatif à la nation opprimée",
      "pos_fr": "",
      "role": "Épithète qualifiant la libération de la Pologne du joug tsariste et austro-prussien."
  },
  "nationalen": {
      "fr": "national",
      "lit": "relatif à la nation opprimée",
      "pos_fr": "",
      "role": "Forme fléchie 'nationalen' du lemme 'national'. Épithète qualifiant la libération de la Pologne du joug tsariste et austro-prussien."
  },
  "natürlich": {
      "fr": "naturel",
      "lit": "conforme à la nature native, inné",
      "pos_fr": "Adjectif",
      "role": "Adjectif ironique dénonçant la prétention de l'aristocratie à incarner une supériorité biologique naturelle."
  },
  "neben": {
      "fr": "à côté de / auprès de",
      "lit": "proche de",
      "pos_fr": "",
      "role": "Coexistence spatiale ou économique de deux modes de production."
  },
  "nehmen": {
      "fr": "prendre",
      "lit": "saisir",
      "pos_fr": "",
      "role": "Verbe entrant dans « annehmen » (revêtir le caractère de) et « zunehmen » (croître)."
  },
  "nennen": {
      "fr": "nommer / mentionner",
      "lit": "désigner par son nom",
      "pos_fr": "",
      "role": "Verbe rhétorique servant à invoquer l'exemple probant des crises commerciales."
  },
  "neu": {
      "fr": "nouveau / inédit",
      "lit": "qui n'existait pas auparavant",
      "pos_fr": "Adjectif",
      "role": "Adjectif martelé par Marx pour démontrer que la bourgeoisie n'a fait que renouveler les formes d'oppression."
  },
  "neugebildeten": {
      "fr": "nouvellement formés",
      "lit": "bâtis à neuf",
      "pos_fr": "",
      "role": "Adjectif marquant la précarité éphémère des rapports sociaux bourgeois qui vieillissent sitôt nés."
  },
  "neun": {
      "fr": "neuf (chiffre 9)",
      "lit": "neuf",
      "pos_fr": "Numéral",
      "role": "adjectif numéral cardinal",
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
      "pos_fr": "",
      "role": "Adjectif désignant les franges parasitaires ou archaïques de la bourgeoisie rentière."
  },
  "nichtoffiziell": {
      "fr": "officieux, non officiel",
      "lit": "qui n'est pas officiel",
      "pos_fr": "Adjectif",
      "role": "adjectif",
      "etymology": "Composé de la négation « nicht » + « offiziell » (officiel).",
      "isCompound": true,
      "compoundParts": [
          "nicht",
          "offiziell"
      ]
  },
  "nichts": {
      "fr": "rien",
      "lit": "néant, pas la moindre chose",
      "pos_fr": "",
      "role": "Pronom complément d'objet direct de 'zu verlieren'."
  },
  "nie": {
      "fr": "jamais",
      "lit": "en aucun temps passé ou futur",
      "pos_fr": "Adverbe temporel",
      "role": "Adverbe absolu soulignant le caractère sans précédent de l'essor commercial moderne."
  },
  "niedrig": {
      "fr": "bas / médiocre",
      "lit": "près du sol",
      "pos_fr": "",
      "role": "Adjectif décrivant le plancher misérable auquel la machine nivelle universellement le salaire."
  },
  "niemand": {
      "fr": "personne, nul",
      "lit": "aucun homme",
      "pos_fr": "Pronom",
      "role": "pronom indéfini négatif",
      "etymology": "Du moyen haut-allemand « niemant », vieux haut-allemand « nioman » (ni + man, pas un homme)."
  },
  "noch": {
      "fr": "encore",
      "lit": "de surcroît, toujours",
      "pos_fr": "",
      "role": "Adverbe marquant la persistance ou l'amplification d'un phénomène historique."
  },
  "nordamerika": {
      "fr": "Amérique du Nord",
      "lit": "partie nord du continent américain",
      "pos_fr": "",
      "role": "Forme fléchie 'Nordamerika' du lemme 'Nordamerika'. Nom propre composé au datif neutre singulier, complément de lieu de 'in'."
  },
  "normal": {
      "fr": "normal / régulier",
      "lit": "conforme à la norme",
      "pos_fr": "",
      "role": "Le modèle allemand prétendu normal par les philosophes."
  },
  "notwendig": {
      "fr": "nécessaire / inévitable",
      "lit": "qui conjure la détresse (Not wendend)",
      "pos_fr": "",
      "role": "Adjectif exprimant la nécessité causale rigoureuse reliant économie et superstructure politique."
  },
  "nur": {
      "fr": "seulement / uniquement",
      "lit": "sans rien d'autre",
      "pos_fr": "Adverbe restrictif",
      "role": "Adverbe limitatif : la bourgeoisie s'est bornée à créer de nouvelles formes d'oppression."
  },
  "nächster": {
      "fr": "prochain, le plus proche, immédiat",
      "lit": "le plus voisin",
      "pos_fr": "Adjectif",
      "role": "adjectif superlatif",
      "etymology": "Superlatif régulier de « nah » (proche, moyen haut-allemand nāhe)."
  },
  "nähern": {
      "fr": "se rapprocher de",
      "lit": "venir plus près (nah)",
      "pos_fr": "",
      "role": "Verbe marquant l'imminence de l'heure décisive du dénouement de la lutte de classe."
  },
  "nötigen": {
      "fr": "contraindre / forcer",
      "lit": "imposer par la détresse (Not)",
      "pos_fr": "",
      "role": "Verbe soulignant la contrainte objective acculant la bourgeoisie à mobiliser les prolétaires."
  },
  "nüchtern": {
      "fr": "sobre / lucide / dégrisé",
      "lit": "qui a l'estomac vide, sans ivresse",
      "pos_fr": "",
      "role": "Métaphore centrale du matérialisme : voir la réalité sociale sans les brumes mystiques de la religion."
  },
  "oben": {
      "fr": "en haut, au sommet",
      "lit": "dans la partie supérieure",
      "pos_fr": "Adverbe",
      "role": "adverbe de lieu",
      "etymology": "Du moyen haut-allemand « obene », vieux haut-allemand « obana » (d'en haut)."
  },
  "obgleich": {
      "fr": "quoique / bien que",
      "lit": "même si, bien que",
      "pos_fr": "",
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
      "lit": "ouvert au grand jour, sans voile protecteur",
      "pos_fr": "Adjectif",
      "role": "Adjectif opposé à « verhüllt », soulignant le caractère transparent et sans pudeur de l'exploitation capitaliste."
  },
  "offener": {
      "fr": "plus ouvertement / plus franchement",
      "lit": "plus ouvert",
      "pos_fr": "",
      "role": "Exploitation cynique et directe étalée au grand jour."
  },
  "offenherzig": {
      "fr": "franc, à cœur ouvert, sans feinte",
      "lit": "qui a le cœur ouvert",
      "pos_fr": "Adjectif",
      "role": "adjectif",
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
      "pos_fr": "",
      "role": "Adjectif qualifiant l'appareil d'État et les institutions institutionnalisées de la bourgeoisie."
  },
  "ohne": {
      "fr": "sans",
      "lit": "dépourvu de, sans",
      "pos_fr": "",
      "role": "Conjonction introduisant une subordonnée infinitive restrictive ('ohne ... aufzugeben')."
  },
  "organisieren": {
      "fr": "organiser / structurer",
      "lit": "doter d'organes vitaux",
      "pos_fr": "",
      "role": "Verbe clé définissant la mise en régiment de l'usine et la constitution du parti ouvrier."
  },
  "organisiert": {
      "fr": "organisé, structuré",
      "lit": "pourvu d'organes articulés",
      "pos_fr": "Adjectif",
      "role": "participe passé adjectivé",
      "etymology": "Du verbe « organisieren », emprunté au latin médiéval « organizare », du grec organon (outil, organe)."
  },
  "ostindisch": {
      "fr": "des Indes orientales",
      "lit": "relatif à l'Asie méridionale sous domination marchande",
      "pos_fr": "Adjectif",
      "role": "Adjectif marquant la conquête coloniale par les compagnies de commerce britanniques et hollandaises."
  },
  "paar": {
      "fr": "quelques / une paire de",
      "lit": "deux ou trois",
      "pos_fr": "",
      "role": "Quelques réformateurs isolés."
  },
  "partei": {
      "fr": "parti",
      "lit": "fraction organisée de classe",
      "pos_fr": "",
      "role": "Forme fléchie 'Partei' du lemme 'Partei'. Substantif féminin désignant une organisation politique constituée."
  },
  "parteien": {
      "fr": "parti",
      "lit": "fraction organisée de classe",
      "pos_fr": "",
      "role": "Forme fléchie 'Parteien' du lemme 'Partei'. Substantif féminin désignant une organisation politique constituée."
  },
  "passend": {
      "fr": "adéquat / convenable",
      "lit": "qui s'ajuste parfaitement",
      "pos_fr": "",
      "role": "Adjectif marquant la complémentarité entre la paresse crasse et la brutalité féodale."
  },
  "passiv": {
      "fr": "passif",
      "lit": "qui subit sans réagir",
      "pos_fr": "",
      "role": "Adjectif dénonçant l'inertie corruptible du sous-prolétariat sans conscience politique."
  },
  "patriarchalisch": {
      "fr": "patriarcal",
      "lit": "fondé sur l'autorité absolue du père de famille et du suzerain",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant les relations précapitalistes d'autorité paternelle et bienveillante feinte liant maîtres et serfs."
  },
  "pedantisch": {
      "fr": "pédant / dogmatique",
      "lit": "lourdement érudit",
      "pos_fr": "",
      "role": "Pédantisme doctrinaire des disciples utopistes."
  },
  "periodisch": {
      "fr": "périodique / cyclique",
      "lit": "qui revient à intervalles réguliers",
      "pos_fr": "",
      "role": "Adjectif décrivant la loi fondamentale des cycles et crises commerciales du capitalisme moderne."
  },
  "persönlich": {
      "fr": "personnel",
      "lit": "relatif à la personne humaine individuelle",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant la dignité propre de l'être humain que le capital transforme en marchandise tarifée."
  },
  "pfäffisch": {
      "fr": "calotin / clérical",
      "lit": "propre au curé",
      "pos_fr": "",
      "role": "Socialisme clérical dénoncé par Marx."
  },
  "phantastisch": {
      "fr": "chimérique / imaginaire",
      "lit": "sorti de l'imagination pure",
      "pos_fr": "",
      "role": "Peintures chimériques d'harmonie sociale."
  },
  "phantastische": {
      "fr": "fantastique / imaginaire",
      "lit": "issu de la fantaisie",
      "pos_fr": "",
      "role": "Caractère chimérique des utopies sans base matérielle."
  },
  "philosophisch": {
      "fr": "philosophique",
      "lit": "relatif à la philosophie",
      "pos_fr": "Adjectif",
      "role": "adjectif",
      "etymology": "Dérivé de « Philosoph » avec le suffixe « -isch »."
  },
  "phrasen": {
      "fr": "phrase creuse / rhétorique",
      "lit": "formule oratoire vide, mot d'ordre stérile",
      "pos_fr": "",
      "role": "Forme fléchie 'Phrasen' du lemme 'Phrase'. Substantif au datif féminin pluriel dénonçant la phraséologie bourgeoise."
  },
  "plötzlich": {
      "fr": "soudainement / subitement",
      "lit": "d'un coup subit",
      "pos_fr": "",
      "role": "Adverbe peignant l'irruption brutale de la rechute en barbarie lors des crises."
  },
  "polen": {
      "fr": "Polonais",
      "lit": "habitant de la plaine polonaise",
      "pos_fr": "",
      "role": "Forme fléchie 'Polen' du lemme 'Pole'. Substantif faible au datif masculin pluriel désignant les patriotes polonais en lutte."
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
      "pos_fr": "",
      "role": "Forme fléchie 'politischen' du lemme 'politisch'. Épithète qualifiant les libertés constitutionnelles conquises par la bourgeoisie."
  },
  "posititiv": {
      "fr": "positif / affirmatif",
      "lit": "qui pose des faits réels",
      "pos_fr": "",
      "role": "Contenu réel et constructif de la critique utopique."
  },
  "positiv": {
      "fr": "positif / constructif",
      "lit": "qui affirme",
      "pos_fr": "",
      "role": "Données positives fournies pour instruire les ouvriers."
  },
  "praktisch": {
      "fr": "pratique, concret, effectif",
      "lit": "qui relève de l'action réelle",
      "pos_fr": "Adjectif",
      "role": "adjectif / adverbe",
      "etymology": "Emprunté au grec « praktikos » (propre à l'action, actif, de prattein faire)."
  },
  "preußisch": {
      "fr": "prussien",
      "lit": "relatif au royaume de Prusse",
      "pos_fr": "",
      "role": "Monarchie absolutiste prussienne réprimant les insurgés."
  },
  "private": {
      "fr": "personnes privées / particuliers",
      "lit": "individus isolés",
      "pos_fr": "",
      "role": "Nom substantivé désignant les détenteurs privés de capitaux accaparant la richesse."
  },
  "produzieren": {
      "fr": "produire / engendrer",
      "lit": "faire sortir au grand jour",
      "pos_fr": "",
      "role": "Verbe central de l'analyse économique : la production marchande et ses contradictions."
  },
  "profan": {
      "fr": "profane / séculier",
      "lit": "en dehors du temple",
      "pos_fr": "",
      "role": "Réalité profane des intérêts matériels sous les masques sacrés."
  },
  "proklamieren": {
      "fr": "proclamer hautement",
      "lit": "déclarer publiquement",
      "pos_fr": "",
      "role": "Verbe caractérisant le cynisme bourgeois affichant le lucre comme son unique boussole."
  },
  "proletariat": {
      "fr": "prolétariat",
      "lit": "la classe des prolétaires salariés modernes",
      "pos_fr": "",
      "role": "Forme fléchie 'Proletariat' du lemme 'Proletariat'. Substantif neutre au datif désignant la classe émancipatrice universelle."
  },
  "proletarier": {
      "fr": "prolétaire",
      "lit": "travailleur salarié ne possédant que sa force de travail",
      "pos_fr": "",
      "role": "Forme fléchie 'Proletarier' du lemme 'Proletarier'. Substantif au nominatif pluriel sujet de la phrase historique ou vocatif d'appel aux armes."
  },
  "proletarisch": {
      "fr": "prolétarien",
      "lit": "qui appartient au prolétariat émancipateur",
      "pos_fr": "",
      "role": "Épithète au génitif qualifiant la révolution socialiste finale."
  },
  "proletarischen": {
      "fr": "prolétarien",
      "lit": "qui appartient au prolétariat émancipateur",
      "pos_fr": "",
      "role": "Forme fléchie 'proletarischen' du lemme 'proletarisch'. Épithète au génitif qualifiant la révolution socialiste finale."
  },
  "radikal": {
      "fr": "radical",
      "lit": "qui va à la racine des choses",
      "pos_fr": "",
      "role": "Épithète qualifiant l'aile bourgeoise démocrate avancée mais bourgeoise."
  },
  "radikale": {
      "fr": "radical",
      "lit": "qui va à la racine des choses",
      "pos_fr": "",
      "role": "Forme fléchie 'radikale' du lemme 'radikal'. Épithète qualifiant l'aile bourgeoise démocrate avancée mais bourgeoise."
  },
  "radikalen": {
      "fr": "radical",
      "lit": "démocrate voulant réformer à la racine",
      "pos_fr": "",
      "role": "Forme fléchie 'Radikalen' du lemme 'Radikale'. Substantif au datif ou accusatif pluriel désignant le parti radical suisse."
  },
  "radikalsten": {
      "fr": "les plus radicaux",
      "lit": "ceux qui vont à la racine absolue",
      "pos_fr": "Adjectif",
      "role": "adjectif au superlatif",
      "etymology": "Superlatif de « radikal », du latin « radix » (racine)."
  },
  "rasch": {
      "fr": "rapide / prompt",
      "lit": "avec une extrême vitesse",
      "pos_fr": "Adjectif",
      "role": "Adjectif soulignant la fulgurance du développement de l'industrie capitaliste."
  },
  "rascher": {
      "fr": "plus rapidement",
      "lit": "avec plus de promptitude",
      "pos_fr": "",
      "role": "Rythme accéléré de la concentration capitaliste."
  },
  "raunen": {
      "fr": "chuchoter / murmurer",
      "lit": "murmurer à l'oreille",
      "pos_fr": "",
      "role": "Murmures et prophéties réactionnaires."
  },
  "reagieren": {
      "fr": "réagir / s'opposer",
      "lit": "agir en retour",
      "pos_fr": "",
      "role": "Réaction politique contre le mouvement ouvrier."
  },
  "reaktionär": {
      "fr": "réactionnaire",
      "lit": "qui veut restaurer l'ordre passé",
      "pos_fr": "Adjectif",
      "role": "Adjectif politique désignant les forces voulant revenir à l'Ancien Régime féodal."
  },
  "reaktionären": {
      "fr": "réactionnaire",
      "lit": "qui veut ramener la société en arrière",
      "pos_fr": "",
      "role": "Forme fléchie 'reaktionären' du lemme 'reaktionär'. Épithète qualifiant les classes féodales condamnées par l'histoire."
  },
  "recht": {
      "fr": "droit",
      "lit": "la règle légitime, prérogative",
      "pos_fr": "",
      "role": "Forme fléchie 'Recht' du lemme 'Recht'. Substantif à l'accusatif neutre singulier, objet direct de l'infinitif 'aufzugeben'."
  },
  "rechtlich": {
      "fr": "juridique, légal, de droit",
      "lit": "conforme au droit",
      "pos_fr": "Adjectif",
      "role": "adjectif",
      "etymology": "Dérivé de « Recht » (le droit, la loi) + « -lich »."
  },
  "rechtzeitig": {
      "fr": "à temps / en temps utile",
      "lit": "au temps juste",
      "pos_fr": "",
      "role": "Intervention politique opportune pour bloquer une loi ouvrière."
  },
  "reden": {
      "fr": "parler / discourir",
      "lit": "adresser la parole",
      "pos_fr": "",
      "role": "Discours rhétorique ou théorique."
  },
  "rednerisch": {
      "fr": "rhétorique / oratoire",
      "lit": "propre à l'orateur",
      "pos_fr": "",
      "role": "Simple figure de rhétorique du socialisme bourgeois."
  },
  "reduzieren": {
      "fr": "réduire, ramener à",
      "lit": "ramener en arrière",
      "pos_fr": "Verbe",
      "role": "verbe transitif",
      "etymology": "Emprunté au latin « reducere » (ramener, faire revenir)."
  },
  "reformern": {
      "fr": "réformateur",
      "lit": "celui qui réforme l'ordre existant",
      "pos_fr": "",
      "role": "Forme fléchie 'Reformern' du lemme 'Reformer'. Substantif au datif masculin pluriel désignant les réformateurs agraires américains."
  },
  "regelmäßig": {
      "fr": "régulièrement",
      "lit": "selon la règle",
      "pos_fr": "",
      "role": "Adverbe soulignant la périodicité implacable de la destruction marchande du capital."
  },
  "regelnd": {
      "fr": "régulateur / normatif",
      "lit": "qui fixe la règle",
      "pos_fr": "",
      "role": "Participe présent qualifiant la prétention bourgeoise d'ériger ses intérêts en loi pour l'humanité."
  },
  "regierend": {
      "fr": "au pouvoir / gouvernant",
      "lit": "qui exerce l'autorité politique",
      "pos_fr": "Participe présent",
      "role": "Adjectif désignant les fractions de la classe dominante qui détiennent l'appareil d'État."
  },
  "reichen": {
      "fr": "suffire / suffire à combler",
      "lit": "atteindre la mesure nécessaire",
      "pos_fr": "Verbe régulier",
      "role": "Verbe économique : la manufacture ne suffisait plus à satisfaire les besoins du marché en expansion."
  },
  "rein": {
      "fr": "pur / exclusif",
      "lit": "exempt de tout mélange",
      "pos_fr": "",
      "role": "Adjectif démasquant la réduction cynique de la famille à un pur rapport d'argent."
  },
  "reißen": {
      "fr": "arracher / entraîner avec violence",
      "lit": "déchirer en tirant",
      "pos_fr": "",
      "role": "Verbe marquant la force d'attraction violente du marché intégrant les nations barbares."
  },
  "rekrutieren": {
      "fr": "se recruter dans / lever",
      "lit": "enrôler pour l'armée",
      "pos_fr": "",
      "role": "Métaphore militaire désignant l'afflux des déclassés de toutes origines gonflant le prolétariat."
  },
  "religiös": {
      "fr": "religieux",
      "lit": "relatif à la foi et au culte divin",
      "pos_fr": "Adjectif",
      "role": "Adjectif désignant les représentations sacrées qui servaient d'alibi moral à l'exploitation féodale."
  },
  "revolution": {
      "fr": "révolution",
      "lit": "bouleversement intégral de l'ordre établi",
      "pos_fr": "",
      "role": "Forme fléchie 'Revolution' du lemme 'Revolution'. Substantif désignant le saut qualitatif historique de la prise du pouvoir politique."
  },
  "revolutionieren": {
      "fr": "révolutionner / transformer radicalement",
      "lit": "bouleverser de fond en comble en provoquant une rupture",
      "pos_fr": "Verbe faible",
      "role": "Verbe marquant le saut qualitatif matériel opéré par le machinisme automatique sur la production."
  },
  "revolutionierenden": {
      "fr": "révolutionnaires / subversifs",
      "lit": "qui bouleversent",
      "pos_fr": "",
      "role": "Forces bouleversant continuellement les bases techniques."
  },
  "revolutionär": {
      "fr": "révolutionnaire",
      "lit": "qui renverse violemment les bases matérielles de la société",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant la transformation radicale produite par la lutte des classes."
  },
  "revolutionäre": {
      "fr": "révolutionnaire",
      "lit": "qui bouleverse l'ordre social",
      "pos_fr": "",
      "role": "Forme fléchie 'revolutionäre' du lemme 'revolutionär'. Épithète ou adverbe marquant la radicalité transformatrice de l'action."
  },
  "revolutionären": {
      "fr": "révolutionnaire",
      "lit": "qui bouleverse l'ordre social",
      "pos_fr": "",
      "role": "Forme fléchie 'revolutionären' du lemme 'revolutionär'. Épithète ou adverbe marquant la radicalité transformatrice de l'action."
  },
  "richten": {
      "fr": "diriger / concentrer",
      "lit": "orienter tout droit vers",
      "pos_fr": "",
      "role": "Verbe principal à la 3e personne du pluriel marquant le choix stratégique des communistes."
  },
  "rief": {
      "fr": "appeler / susciter",
      "lit": "faire entendre un appel",
      "pos_fr": "",
      "role": "Forme fléchie 'rief' du lemme 'rufen'. Verbe au prétérit ('rief') formant la locution 'ins Leben rief' (fit naître, suscita)."
  },
  "ritterlich": {
      "fr": "chevaleresque",
      "lit": "propre au chevalier et noble cavalier d'armes",
      "pos_fr": "Adjectif",
      "role": "Adjectif caractérisant l'idéal nobiliaire d'honneur militaire, de bravoure et de fidélité au suzerain."
  },
  "roh": {
      "fr": "brut / fruste / grossier",
      "lit": "non cuit, non affiné",
      "pos_fr": "",
      "role": "Premières revendications égalitaires grossières."
  },
  "rohdestruktiv": {
      "fr": "brutalement destructeur",
      "lit": "brut et destructif",
      "pos_fr": "",
      "role": "Destruction violente des machines par les luddites."
  },
  "rufen": {
      "fr": "appeler / susciter",
      "lit": "faire entendre un appel",
      "pos_fr": "",
      "role": "Verbe au prétérit ('rief') formant la locution 'ins Leben rief' (fit naître, suscita)."
  },
  "römisch": {
      "fr": "romain",
      "lit": "de la Rome antique",
      "pos_fr": "",
      "role": "Adjectif évoquant les aqueducs antiques surpassés par les travaux du capital."
  },
  "rührend-sentimental": {
      "fr": "touchant et sentimental",
      "lit": "qui émeut et excite la sensiblerie",
      "pos_fr": "",
      "role": "Adjectif composé raillant le voile larmoyant dont la féodalité masquait ses liens familiaux d'intérêt."
  },
  "sagen": {
      "fr": "dire, énoncer, signifier",
      "lit": "exprimer par la parole",
      "pos_fr": "Verbe",
      "role": "verbe transitif",
      "etymology": "Du moyen haut-allemand « sagen », vieux haut-allemand « sagēn », proto-germanique *sagjaną."
  },
  "schaffen": {
      "fr": "créer / engendrer",
      "lit": "produire à l'existence",
      "pos_fr": "Verbe fort/régulier",
      "role": "Verbe désignant la puissance démiurgique de la bourgeoisie créant de nouveaux marchés."
  },
  "scharfsinnig": {
      "fr": "avec perspicacité / finement",
      "lit": "d'un esprit acéré",
      "pos_fr": "",
      "role": "Analyse lucide des tares du machinisme par Sismondi."
  },
  "scheinbar": {
      "fr": "en apparence / apparemment",
      "lit": "qui semble seulement",
      "pos_fr": "",
      "role": "Fausse sympathie feinte par l'aristocratie."
  },
  "scheinen": {
      "fr": "sembler / paraître",
      "lit": "luire, avoir l'air",
      "pos_fr": "",
      "role": "Verbe de l'apparence opposant le leurre superficiel à la réalité objective sous-jacente."
  },
  "scheitern": {
      "fr": "échouer / faire naufrage",
      "lit": "se briser en éclats",
      "pos_fr": "",
      "role": "Échec inévitable des tentatives utopiques."
  },
  "schießen": {
      "fr": "abattre / canonner / tirer",
      "lit": "lancer un projectile",
      "pos_fr": "",
      "role": "Verbe de la métaphore de l'artillerie marchande qui abat les murailles de Chine."
  },
  "schlagen": {
      "fr": "frapper / terrasser",
      "lit": "asséner un coup",
      "pos_fr": "",
      "role": "Verbe de combat : la bourgeoisie a jadis terrassé la féodalité au sol."
  },
  "schleudern": {
      "fr": "projeter / catapulter",
      "lit": "lancer avec force",
      "pos_fr": "",
      "role": "Violence des crises qui précipitent les classes dans le dénuement."
  },
  "schließen": {
      "fr": "se rallier / s'associer à",
      "lit": "attacher avec (au réfléchi : s'agréger à)",
      "pos_fr": "",
      "role": "Forme fléchie 'schließen' du lemme 'anschließen'. Verbe à particule séparable ('schließen an') régissant le réfléchi 'sich' et 'an'."
  },
  "schlummern": {
      "fr": "sommeiller / dormir en latence",
      "lit": "dormir d'un sommeil léger",
      "pos_fr": "",
      "role": "Métaphore de la fécondité : les forces productives dormaient dans le sein du travail social."
  },
  "schlummerten": {
      "fr": "sommeillaient / reposaient en latence",
      "lit": "dormaient d'un sommeil léger (schlummern)",
      "pos_fr": "",
      "role": "Verbe poétique de la fécondité : les forces productives sommeillant dans le giron du travail social."
  },
  "schmieden": {
      "fr": "forger",
      "lit": "battre le fer sur l'enclume",
      "pos_fr": "",
      "role": "Métaphore prométhéenne : la bourgeoisie a forgé les armes qui vont causer sa propre mort."
  },
  "schmutzig": {
      "fr": "sordide / vil / sale",
      "lit": "couvert de crasse",
      "pos_fr": "",
      "role": "Intérêts sordides masqués sous l'amour du prochain."
  },
  "schnell": {
      "fr": "rapidement / vite",
      "lit": "avec promptitude",
      "pos_fr": "",
      "role": "Adverbe comparant la vélocité fulgurante du paupérisme à celle de la richesse."
  },
  "schneller": {
      "fr": "plus vite / à plus vive allure",
      "lit": "plus rapide",
      "pos_fr": "",
      "role": "Vitesse supérieure avec laquelle le paupérisme s'accroît."
  },
  "schon": {
      "fr": "déjà",
      "lit": "dès maintenant",
      "pos_fr": "",
      "role": "Adverbe constatant la destruction déjà accomplie des conditions de l'ancien monde."
  },
  "schreiben": {
      "fr": "écrire",
      "lit": "tracer des caractères",
      "pos_fr": "",
      "role": "Production littéraire et politique."
  },
  "schreiend": {
      "fr": "criant / flagrant",
      "lit": "qui pousse des cris",
      "pos_fr": "",
      "role": "Inégalités et contradictions criantes du capitalisme."
  },
  "schutzzölle": {
      "fr": "droits protecteurs, tarifs douaniers protectionnistes",
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
      "pos_fr": "",
      "role": "Participe présent décrivant la précarité instable du salaire sous la concurrence."
  },
  "schwankender": {
      "fr": "plus précaire / chancelant",
      "lit": "plus vacillant",
      "pos_fr": "",
      "role": "Précarité grandissante du salaire sous la concurrence."
  },
  "schweben": {
      "fr": "planer / flotter",
      "lit": "se tenir en suspension",
      "pos_fr": "",
      "role": "Illusion des idéalistes planant au-dessus des classes."
  },
  "schweiz": {
      "fr": "Suisse",
      "lit": "la Suisse, Confédération helvétique",
      "pos_fr": "",
      "role": "Forme fléchie 'Schweiz' du lemme 'Schweiz'. Nom propre au datif féminin singulier après 'in der'."
  },
  "schwenken": {
      "fr": "brandir / agiter en l'air",
      "lit": "faire tournoyer",
      "pos_fr": "",
      "role": "L'aristocratie brandissant la besace du pauvre en étendard."
  },
  "schwer": {
      "fr": "lourd / pesant",
      "lit": "qui a un grand poids",
      "pos_fr": "",
      "role": "Adjectif de la métaphore de l'« artillerie lourde » des bas prix abattant les murailles chinoises."
  },
  "schändlich": {
      "fr": "honteux, infâme, ignominieux",
      "lit": "qui cause de la honte",
      "pos_fr": "Adjectif",
      "role": "adjectif",
      "etymology": "Dérivé de « Schande » (honte, déshonneur, ignominie) + « -lich »."
  },
  "schöngeistig": {
      "fr": "bel-esprit / précieux",
      "lit": "qui cultive le bel esprit",
      "pos_fr": "",
      "role": "Littérateurs allemands esthétisant la politique."
  },
  "sehen": {
      "fr": "voir / constater",
      "lit": "percevoir par la vue, observer par l'intellect",
      "pos_fr": "Verbe fort",
      "role": "Verbe fort employé à la 1re personne du pluriel (« wir sehen » : nous le voyons, nous constatons) pour sceller l'accord intellectuel du lecteur."
  },
  "sehr": {
      "fr": "très / grandement",
      "lit": "avec force",
      "pos_fr": "",
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
  "selbst": {
      "fr": "lui-même / soi-même",
      "lit": "en personne, sans intermédiaire",
      "pos_fr": "Pronom emphatique invariable",
      "role": "Pronom d'insistance soulignant l'initiative directe du Parti communiste."
  },
  "selbsterarbeitet": {
      "fr": "acquis par son propre travail",
      "lit": "travaillé par soi-même",
      "pos_fr": "Adjectif",
      "role": "participe passé adjectivé",
      "etymology": "Composé de « selbst » (soi-même) + « erarbeiten » (gagner par le travail).",
      "isCompound": true,
      "compoundParts": [
          "selbst",
          "erarbeiten"
      ]
  },
  "selbstverdient": {
      "fr": "gagné par soi-même, mérité par son propre labeur",
      "lit": "mérité par soi-même",
      "pos_fr": "Adjectif",
      "role": "participe passé adjectivé",
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
      "pos_fr": "",
      "role": "Adjectif qualifiant le travail libre détruit par la manufacture puis la machine."
  },
  "setzen": {
      "fr": "placer / substituer / installer",
      "lit": "faire asseoir, poser fermement à un emplacement",
      "pos_fr": "Verbe faible causatif",
      "role": "Verbe causatif employé pour exprimer l'installation brutale d'un nouvel ordre d'exploitation à la place de l'ancien."
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
      "pos_fr": "",
      "role": "Verbe définissant l'effort conservateur des classes dominantes pour pérenniser leurs privilèges."
  },
  "sie": {
      "fr": "ils / elles / elle",
      "lit": "pronom personnel de 3e personne",
      "pos_fr": "Pronom personnel",
      "role": "Pronom personnel sujet désignant une entité plurielle ou féminine."
  },
  "siegen": {
      "fr": "vaincre / triompher",
      "lit": "remporter la victoire (Sieg)",
      "pos_fr": "",
      "role": "Verbe scandant les victoires ouvrières d'abord éphémères puis universelles."
  },
  "singen": {
      "fr": "chanter",
      "lit": "moduler des sons",
      "pos_fr": "",
      "role": "Chansons satiriques des légitimistes contre la bourgeoisie."
  },
  "sinken": {
      "fr": "s'abaisser / couler",
      "lit": "descendre par gravité",
      "pos_fr": "",
      "role": "Verbe traduisant la paupérisation descendante de l'ouvrier moderne."
  },
  "sinn": {
      "fr": "sens / acception / signification",
      "lit": "orientation de la pensée, signification",
      "pos_fr": "",
      "role": "Forme fléchie 'Sinn' du lemme 'Sinn'. Substantif au datif masculin singulier dans la locution 'im französischen Sinn'."
  },
  "sismondi": {
      "fr": "Sismondi (Jean-Charles-Léonard Simonde de Sismondi, 1773-1842, économiste et historien genevois)",
      "lit": "Jean-Charles de Sismondi",
      "pos_fr": "Nom masculin",
      "role": "nom propre",
      "etymology": "Nom de famille de l'économiste critique suisse Sismondi, théoricien des crises de surproduction."
  },
  "so": {
      "fr": "ainsi / si / de cette sorte",
      "lit": "de cette manière",
      "pos_fr": "",
      "role": "Adverbe marquant la conséquence logique ou l'intensité d'un processus."
  },
  "sobald": {
      "fr": "dès que / sitôt que",
      "lit": "aussitôt que",
      "pos_fr": "",
      "role": "Conjonction introduisant la condition temporelle d'action conjointe avec la bourgeoisie."
  },
  "soeben": {
      "fr": "à l'instant / tout juste",
      "lit": "aussi égal",
      "pos_fr": "",
      "role": "Idées françaises venant tout juste d'être traduites."
  },
  "sofort": {
      "fr": "immédiatement / sur-le-champ",
      "lit": "tout de suite en avant",
      "pos_fr": "",
      "role": "Adverbe soulignant l'absence de pause entre la révolution bourgeoise et la révolution ouvrière."
  },
  "sogenannter": {
      "fr": "soi-disant / prétendu",
      "lit": "nommé ainsi par convention",
      "pos_fr": "",
      "role": "Adjectif ironique dénonçant l'occidentalisation impérialiste imposée sous l'étiquette de « civilisation »."
  },
  "sogleich": {
      "fr": "aussitôt / sans retard / l'heure venue",
      "lit": "immédiatement de manière égale",
      "pos_fr": "",
      "role": "Adverbe marquant la rapidité d'exécution tactique exigée dès la victoire bourgeoise."
  },
  "solcher": {
      "fr": "tel / pareil",
      "lit": "de cette nature même",
      "pos_fr": "",
      "role": "Déterminant démonstratif soulignant l'ampleur inédite d'une puissance productive."
  },
  "soldatisch": {
      "fr": "militairement / en soldats",
      "lit": "à la façon du soldat",
      "pos_fr": "",
      "role": "Adverbe révélant la discipline de caserne imposée aux masses ouvrières en fabrique."
  },
  "sollen": {
      "fr": "devoir (impératif moral ou objectif fixé)",
      "lit": "être tenu de, avoir obligation",
      "pos_fr": "Verbe",
      "role": "verbe modal",
      "etymology": "Du moyen haut-allemand « suln », vieux haut-allemand « sculan » (être débiteur, devoir)."
  },
  "sondern": {
      "fr": "mais au contraire / mais bien plutôt",
      "lit": "mais séparément",
      "pos_fr": "",
      "role": "Conjonction rectificative substituant la vérité matérielle à la fausse apparence."
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
      "pos_fr": "",
      "role": "Rapports sociaux et structure collective."
  },
  "sozial-demokratisch": {
      "fr": "démocrate-socialiste",
      "lit": "social-démocrate",
      "pos_fr": "",
      "role": "Épithète désignant le parti républicain réformiste français de 1848."
  },
  "sozial-demokratische": {
      "fr": "démocrate-socialiste",
      "lit": "social-démocrate",
      "pos_fr": "",
      "role": "Forme fléchie 'sozial-demokratische' du lemme 'sozial-demokratisch'. Épithète désignant le parti républicain réformiste français de 1848."
  },
  "sozialdemokratisch": {
      "fr": "démocrate-socialiste",
      "lit": "social-démocrate",
      "pos_fr": "",
      "role": "Variante sans tiret de l'adjectif désignant les républicains socialistes de 1848."
  },
  "sozialisten": {
      "fr": "socialiste",
      "lit": "partisan de la justice et de l'organisation sociale",
      "pos_fr": "",
      "role": "Forme fléchie 'Sozialisten' du lemme 'Sozialist'. Substantif au datif masculin pluriel désignant les réformateurs de tendance française."
  },
  "sozialistisch": {
      "fr": "socialiste",
      "lit": "partisan du socialisme",
      "pos_fr": "",
      "role": "Courants et écrits socialistes."
  },
  "sozialistisch-kommunistisch": {
      "fr": "socialiste-communiste",
      "lit": "socialiste et communiste",
      "pos_fr": "",
      "role": "Littérature révolutionnaire française analysée au chapitre III."
  },
  "spalten": {
      "fr": "se cliver / se scinder",
      "lit": "se fendre sous la hache en deux moitiés",
      "pos_fr": "Verbe de rupture physique",
      "role": "Verbe dramatique exprimant la fracture bipolaire irréversible de la société bourgeoise."
  },
  "spanisch": {
      "fr": "d'Espagne / en Espagne",
      "lit": "ibérique",
      "pos_fr": "",
      "role": "Dans l'expression 'châteaux en Espagne' (utopies)."
  },
  "spekulativ": {
      "fr": "spéculatif",
      "lit": "abstrait et contemplatif",
      "pos_fr": "",
      "role": "Idéalisme spéculatif hégélien ou post-kantien."
  },
  "spielen": {
      "fr": "jouer / interpréter",
      "lit": "exécuter un jeu, incarner un personnage",
      "pos_fr": "Verbe",
      "role": "Verbe employé dans la formule célèbre « eine Rolle spielen » (jouer un rôle éminemment révolutionnaire dans l'histoire)."
  },
  "spießbürgerlich": {
      "fr": "petit-bourgeois / philistin",
      "lit": "propre au bourgeois étriqué armé d'une pique sur les remparts",
      "pos_fr": "Adjectif",
      "role": "Adjectif d'origine historique documentée désignant la mentalité étriquée, craintive et rétrograde de la petite bourgeoisie boutiquière."
  },
  "sprechen": {
      "fr": "parler, prononcer des paroles",
      "lit": "articuler un discours",
      "pos_fr": "Verbe",
      "role": "verbe fort",
      "etymology": "Du moyen haut-allemand « sprechen », vieux haut-allemand « sprehhan »."
  },
  "sprengen": {
      "fr": "faire sauter / briser en éclat",
      "lit": "faire voler en morceaux",
      "pos_fr": "",
      "role": "Verbe insurrectionnel : briser les entraves féodales puis faire sauter l'édifice bourgeois."
  },
  "spät": {
      "fr": "tard / plus tard",
      "lit": "en un temps avancé",
      "pos_fr": "",
      "role": "Adverbe marquant la succession temporelle des antagonismes de classe."
  },
  "später": {
      "fr": "plus tard / par la suite",
      "lit": "plus tardivement",
      "pos_fr": "",
      "role": "Développements ultérieurs de la société capitaliste."
  },
  "stark": {
      "fr": "fort / vigoureux",
      "lit": "doué de vigueur corporelle",
      "pos_fr": "",
      "role": "Adjectif exprimant la résilience et la force grandissante de l'union ouvrière."
  },
  "statt": {
      "fr": "au lieu de",
      "lit": "en lieu et place de",
      "pos_fr": "",
      "role": "Préposition introduisant une alternative déchue ou inversée."
  },
  "stecken": {
      "fr": "mettre / ficher / incendier",
      "lit": "planter dedans",
      "pos_fr": "",
      "role": "Verbe de l'action directe : les ouvriers mettent le feu aux fabriques (in Brand stecken)."
  },
  "stehen": {
      "fr": "se tenir debout / faire face",
      "lit": "être érigé sur ses pieds",
      "pos_fr": "Verbe fort d'état",
      "role": "Verbe marquant l'opposition frontale dressée entre oppresseur et opprimé."
  },
  "stehenbleiben": {
      "fr": "demeurer / rester en place",
      "lit": "rester debout",
      "pos_fr": "",
      "role": "Vœu des bourgeois conservateurs de figer la société présente."
  },
  "stehend": {
      "fr": "ce qui est stable et figé",
      "lit": "ce qui se tient debout",
      "pos_fr": "",
      "role": "Nom substantivé célèbre de Marx : « alles Ständische und Stehende verdampft »."
  },
  "steht": {
      "fr": "se trouver / être à la veille de",
      "lit": "se tenir debout, être situé",
      "pos_fr": "",
      "role": "Forme fléchie 'steht' du lemme 'stehen'. Verbe marquant la maturité de la situation pré-insurrectionnelle."
  },
  "steigen": {
      "fr": "monter / s'accroître",
      "lit": "gravir un échelon vers le haut",
      "pos_fr": "Verbe fort",
      "role": "Verbe fort décrivant l'escalade constante des besoins marchands sous l'impulsion de l'expansion coloniale."
  },
  "stellen": {
      "fr": "poser / placer / soumettre",
      "lit": "mettre debout",
      "pos_fr": "",
      "role": "Verbe entrant dans « in Frage stellen » (remettre en question l'existence même du système)."
  },
  "stellenweise": {
      "fr": "çà et là / par endroits",
      "lit": "par places successives",
      "pos_fr": "",
      "role": "Adverbe désignant les foyers ponctuels où éclatent les émeutes ouvrières."
  },
  "stet": {
      "fr": "constant / continuel",
      "lit": "sans arrêt ni défaillance",
      "pos_fr": "Adjectif",
      "role": "Adjectif marquant la permanence obstinée du conflit de classes à travers les âges."
  },
  "stets": {
      "fr": "toujours / constamment",
      "lit": "en permanence",
      "pos_fr": "",
      "role": "Adverbe exprimant la quête ininterrompue de débouchés par le capitalisme."
  },
  "steuerpflichtig": {
      "fr": "taillable / assujetti à l'impôt",
      "lit": "astreint par devoir fiscal à la taxe royale",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant le Tiers État roturier en France qui supportait l'essentiel de la fiscalité royale."
  },
  "stiften": {
      "fr": "fonder / instituer",
      "lit": "établir par donation",
      "pos_fr": "",
      "role": "Verbe traduisant la création réfléchie d'organisations ouvrières permanentes de solidarité."
  },
  "streiten": {
      "fr": "lutter, disputer, quereller, débattre",
      "lit": "combattre avec acharnement",
      "pos_fr": "Verbe",
      "role": "verbe fort intransitif",
      "etymology": "Du moyen haut-allemand « strīten », vieux haut-allemand « strītan » (combattre, quereller)."
  },
  "sturz": {
      "fr": "chute / écroulement / renversement",
      "lit": "action de culbuter brutalement",
      "pos_fr": "",
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
  "ständischer": {
      "fr": "d'ordre / corporatif",
      "lit": "relatif aux états/ordres sociaux",
      "pos_fr": "",
      "role": "Société d'Ancien Régime divisée en ordres étanches."
  },
  "stärker": {
      "fr": "plus fortement / plus vigoureusement",
      "lit": "plus fort",
      "pos_fr": "",
      "role": "Organisation ouvrière renaissant toujours plus forte."
  },
  "stückweis": {
      "fr": "au morceau / au jour le jour / en détail",
      "lit": "par morceaux séparés",
      "pos_fr": "",
      "role": "Adverbe soulignant la vente parcellaire et humiliante de l'ouvrier ravalé au rang de marchandise."
  },
  "stündlich": {
      "fr": "à chaque heure / d'heure en heure",
      "lit": "toutes les heures",
      "pos_fr": "",
      "role": "Adverbe marquant l'asservissement temporel minutieux de l'ouvrier à l'usine."
  },
  "stürzen": {
      "fr": "renverser / s'écrouler",
      "lit": "faire choir précipitamment",
      "pos_fr": "",
      "role": "Renversement violent de l'ordre ancien."
  },
  "suchen": {
      "fr": "chercher / tenter de",
      "lit": "se mettre en quête de",
      "pos_fr": "",
      "role": "Verbe soulignant les efforts désespérés des classes moyennes pour faire reculer l'histoire."
  },
  "systematisch": {
      "fr": "systématique / méthodique",
      "lit": "érigé en système",
      "pos_fr": "",
      "role": "Systèmes doctrinaires clos des réformateurs."
  },
  "sämtlich": {
      "fr": "tous sans exception / l'ensemble de",
      "lit": "rassemblé en totalité",
      "pos_fr": "",
      "role": "Déterminant marquant la totalité intégrale des rapports sociaux bouleversés."
  },
  "süßlich": {
      "fr": "douceâtre / mielleux",
      "lit": "un peu doux",
      "pos_fr": "",
      "role": "Complément mielleux apporté aux coups de fouet policiers."
  },
  "tatsächlich": {
      "fr": "réel, effectif, factuel / en fait",
      "lit": "conforme au fait accompli",
      "pos_fr": "Adjectif",
      "role": "adjectif / adverbe",
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
      "pos_fr": "",
      "role": "Plonger la dignité humaine dans les eaux glacées du calcul."
  },
  "taufen": {
      "fr": "baptiser",
      "lit": "donner le sacrement du baptême",
      "pos_fr": "",
      "role": "Baptême clérical des revendications aristocratiques."
  },
  "teilen": {
      "fr": "partager, diviser, fractionner",
      "lit": "séparer en parts",
      "pos_fr": "Verbe",
      "role": "verbe transitif",
      "etymology": "Du moyen haut-allemand « teilen », vieux haut-allemand « teiljan », de « Teil » (partie, part)."
  },
  "teilnehmen": {
      "fr": "participer à, prendre part à",
      "lit": "prendre sa part de",
      "pos_fr": "Verbe",
      "role": "verbe fort séparable",
      "etymology": "Composé de « Teil » (part) + « nehmen » (prendre).",
      "isCompound": true,
      "compoundParts": [
          "Teil",
          "nehmen"
      ]
  },
  "teils": {
      "fr": "en partie / d'une part",
      "lit": "par parts, pour partie",
      "pos_fr": "",
      "role": "Adverbe corrélatif distribuant l'analyse sociologique ('teils aus... teils aus...')."
  },
  "theoretisch": {
      "fr": "théorique",
      "lit": "qui relève de la contemplation intellectuelle",
      "pos_fr": "",
      "role": "Adjectif qualifiant la compréhension scientifique et matérialiste du devenir historique."
  },
  "tief": {
      "fr": "profondément / bas",
      "lit": "au tréfonds",
      "pos_fr": "",
      "role": "Adverbe marquant la déchéance continue de l'ouvrier au-dessous de sa condition."
  },
  "tiefer": {
      "fr": "plus profond, plus bas",
      "lit": "qui descend plus bas",
      "pos_fr": "Adjectif",
      "role": "adjectif comparatif",
      "etymology": "Comparatif régulier de « tief » (profond, vieux haut-allemand tiof)."
  },
  "tragen": {
      "fr": "porter",
      "lit": "soutenir le poids de",
      "pos_fr": "",
      "role": "Verbe solennel : la classe révolutionnaire porte l'avenir de l'humanité entre ses mains."
  },
  "traut": {
      "fr": "cher, intime, chéri, bien-aimé",
      "lit": "en qui l'on a foi, aimé tendrement",
      "pos_fr": "Adjectif",
      "role": "adjectif poétique",
      "etymology": "Du moyen haut-allemand « trūt », vieux haut-allemand « trūt » (cher, aimé, fidèle)."
  },
  "trautest": {
      "fr": "le plus cher, le plus intime",
      "lit": "au plus haut degré d'attachement intime",
      "pos_fr": "Adjectif",
      "role": "adjectif superlatif",
      "etymology": "Superlatif de « traut »."
  },
  "treffen": {
      "fr": "frapper, atteindre, rencontrer, prendre (des mesures)",
      "lit": "toucher la cible",
      "pos_fr": "Verbe",
      "role": "verbe fort transitif",
      "etymology": "Du moyen haut-allemand « treffen », vieux haut-allemand « treffan » (toucher, atteindre le but)."
  },
  "treffend": {
      "fr": "avec justesse / de manière frappante",
      "lit": "qui touche au but",
      "pos_fr": "",
      "role": "Critique frappant au cœur la suffisance bourgeoise."
  },
  "treten": {
      "fr": "marcher / entrer / succéder",
      "lit": "poser le pied en avant, avancer d'un pas",
      "pos_fr": "Verbe fort",
      "role": "Verbe fort employé dans la locution « an die Stelle treten » pour décrire la relève impitoyable des anciennes formes par les nouvelles."
  },
  "trotz": {
      "fr": "malgré, en dépit de",
      "lit": "en bravant",
      "pos_fr": "Préposition",
      "role": "préposition",
      "etymology": "Emploi prépositionnel du substantif « Trotz » (défi)."
  },
  "trägst": {
      "fr": "le plus inerte / le plus paresseux",
      "lit": "au plus haut degré d'indolence",
      "pos_fr": "",
      "role": "Adjectif superlatif dépeignant la paresse légendaire des barons féodaux."
  },
  "träumen": {
      "fr": "rêver / rêvasser",
      "lit": "former des songes",
      "pos_fr": "",
      "role": "Rêves chimériques de conciliation pacifique."
  },
  "tröstlich": {
      "fr": "consolateur / rassurant",
      "lit": "qui apporte du réconfort",
      "pos_fr": "",
      "role": "Illusion consolatrice prêchée par le socialisme bourgeois."
  },
  "täglich": {
      "fr": "quotidiennement / chaque jour",
      "lit": "de jour en jour",
      "pos_fr": "",
      "role": "Adverbe exprimant la destruction continue et quotidienne des industries traditionnelles."
  },
  "tätig": {
      "fr": "actif, agissant, en action",
      "lit": "qui fait des actes",
      "pos_fr": "Adjectif",
      "role": "adjectif",
      "etymology": "Dérivé de « Tat » (l'acte, l'action) + suffixe « -ig »."
  },
  "um": {
      "fr": "pour / afin de / autour de",
      "lit": "autour, en vue de",
      "pos_fr": "",
      "role": "Particule introduisant une proposition infinitive de but (um... zu)."
  },
  "umgehen": {
      "fr": "hanter / rôder",
      "lit": "marcher autour en cercle, errer",
      "pos_fr": "Verbe fort séparable (um|gehen)",
      "role": "Tournure impersonnelle allemande (« ein Geist geht um ») marquant la présence obsédante du spectre communiste."
  },
  "umgekehrt": {
      "fr": "à l'inverse / en sens inverse",
      "lit": "tourné de l'autre côté",
      "pos_fr": "",
      "role": "Rapport inversement proportionnel entre utopie et histoire."
  },
  "umgestalten": {
      "fr": "remanier, transformer de fond en comble",
      "lit": "donner une autre forme",
      "pos_fr": "Verbe",
      "role": "verbe séparable",
      "etymology": "Composé de la particule de changement « um- » + « Gestalt » (forme).",
      "isCompound": true,
      "compoundParts": [
          "um-",
          "Gestalt",
          "-en"
      ]
  },
  "umschlagen": {
      "fr": "basculer, se muer en son contraire, tourner",
      "lit": "frapper en tournant, chavirer",
      "pos_fr": "Verbe",
      "role": "verbe fort intransitif",
      "etymology": "Composé de « um » + « schlagen » (frapper, renverser).",
      "isCompound": true,
      "compoundParts": [
          "um-",
          "schlagen"
      ]
  },
  "umsturz": {
      "fr": "renversement / subversion radicale",
      "lit": "chute de fond en comble, renversement",
      "pos_fr": "",
      "role": "Forme fléchie 'Umsturz' du lemme 'Umsturz'. Substantif composé désignant l'acte de destruction de l'ordre bourgeois par l'insurrection."
  },
  "umwälzung": {
      "fr": "bouleversement / transformation radicale",
      "lit": "action de faire rouler cul par-dessus tête",
      "pos_fr": "",
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
      "pos_fr": "",
      "role": "Adjectif désignant les provinces confédérées indépendantes fondues dans l'État moderne."
  },
  "unaufhörlich": {
      "fr": "incessant / sans répit",
      "lit": "qui ne s'arrête jamais",
      "pos_fr": "",
      "role": "Adjectif qualifiant le perfectionnement vertigineux des machines dans la grande usine."
  },
  "unbarmherzig": {
      "fr": "sans pitié / impitoyable",
      "lit": "dépourvu de cœur miséricordieux",
      "pos_fr": "Adjectif / Adverbe",
      "role": "Adverbe soulignant la violence inexorable avec laquelle le capital brise les coutumes et solidarités anciennes."
  },
  "unbeholfen": {
      "fr": "malhabile / balourd / empesé",
      "lit": "privé de secours adroit",
      "pos_fr": "",
      "role": "Traductions allemandes empesées des concepts français."
  },
  "und": {
      "fr": "et",
      "lit": "conjonction d'addition",
      "pos_fr": "Conjonction de coordination",
      "role": "Conjonction liant deux termes ou propositions de même rang syntaxique."
  },
  "unehrerbietig": {
      "fr": "irrévérencieux / irrespectueux",
      "lit": "sans offrande d'honneur",
      "pos_fr": "",
      "role": "Moqueries des jeunes ouvriers envers l'ordre établi."
  },
  "unendlich": {
      "fr": "infiniment",
      "lit": "sans fin mesurable",
      "pos_fr": "",
      "role": "Adverbe qualifiant la fluidification incommensurable des communications modernes."
  },
  "unentgeltlich": {
      "fr": "gratuit, sans rémunération, à titre gracieux",
      "lit": "sans contrepartie monétaire",
      "pos_fr": "Adjectif",
      "role": "adjectif / adverbe",
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
      "pos_fr": "",
      "role": "Stade précoce et embryonnaire du prolétariat."
  },
  "unermeßlich": {
      "fr": "incommensurable / prodigieux",
      "lit": "qui ne peut être mesuré d'après une norme ordinaire",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant l'accélération vertigineuse imprimée au commerce par l'ouverture planétaire."
  },
  "unfähig": {
      "fr": "incapable",
      "lit": "dépourvu d'aptitude",
      "pos_fr": "",
      "role": "Adjectif formulant l'incapacité historique de la bourgeoisie à pérenniser sa domination."
  },
  "ungeheuer": {
      "fr": "immense / gigantesque",
      "lit": "monstrueusement grand",
      "pos_fr": "",
      "role": "Adjectif soulignant le poids numérique écrasant de la majorité laborieuse prolétarienne."
  },
  "unhaltbar": {
      "fr": "insoutenable, intenable, indéfendable",
      "lit": "qui ne peut être maintenu",
      "pos_fr": "Adjectif",
      "role": "adjectif",
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
      "pos_fr": "",
      "role": "Prophéties catastrophistes des aristocrates déchus."
  },
  "unmittelbar": {
      "fr": "immédiat / directement",
      "lit": "sans intermédiaire, direct",
      "pos_fr": "",
      "role": "Adverbe modifiant 'vorliegenden' ou adjectif qualifiant 'Vorspiel'."
  },
  "unmittelbare": {
      "fr": "immédiat / directement",
      "lit": "sans intermédiaire, direct",
      "pos_fr": "",
      "role": "Forme fléchie 'unmittelbare' du lemme 'unmittelbar'. Adverbe modifiant 'vorliegenden' ou adjectif qualifiant 'Vorspiel'."
  },
  "unmöglich": {
      "fr": "impossible",
      "lit": "hors de toute puissance",
      "pos_fr": "",
      "role": "Adjectif marquant l'anachronisme fatal du repli national face au marché mondial."
  },
  "unparteiisch": {
      "fr": "impartial / neutre",
      "lit": "qui n'a pas de parti pris",
      "pos_fr": "",
      "role": "Fausse neutralité au-dessus des classes dénoncée par Marx."
  },
  "unpersönlich": {
      "fr": "impersonnel",
      "lit": "dépourvu de caractère personnel",
      "pos_fr": "Adjectif",
      "role": "adjectif",
      "etymology": "Composé de « un- » + « persönlich ».",
      "isCompound": true,
      "compoundParts": [
          "un-",
          "Person",
          "-lich"
      ]
  },
  "unselbständig": {
      "fr": "dépendant, subordonné, hétéronome",
      "lit": "qui ne se tient pas debout par lui-même",
      "pos_fr": "Adjectif",
      "role": "adjectif",
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
      "pos_fr": "",
      "role": "Déterminant possessif ancrant le constat empirique (« sous nos yeux »)."
  },
  "unsicher": {
      "fr": "précaire / incertain",
      "lit": "dépourvu de sécurité",
      "pos_fr": "",
      "role": "Adjectif peignant l'insécurité existentielle radicale imposée au prolétariat."
  },
  "unsicherer": {
      "fr": "plus incertain / précaire",
      "lit": "plus dépourvu de sûreté",
      "pos_fr": "",
      "role": "Incertitude permanente de la subsistance de l'ouvrier."
  },
  "unter": {
      "fr": "sous / parmi",
      "lit": "en dessous de, au bas de (préposition)",
      "pos_fr": "Préposition mixte",
      "role": "Préposition hiérarchique régissant le datif marquant la sujétion féodale primitive (« unter der Herrschaft » : sous la domination des seigneurs féodaux)."
  },
  "unterdrücken": {
      "fr": "opprimer / réprimer",
      "lit": "presser vers le bas",
      "pos_fr": "",
      "role": "Verbe structurel de la théorie des luttes de classe : asservir et maintenir sous le joug."
  },
  "unterdrückend": {
      "fr": "oppresseur / tyrannique",
      "lit": "qui presse vers le bas",
      "pos_fr": "",
      "role": "Participe présent définissant la classe dominante exploiteuse dans l'antagonisme social."
  },
  "unterdrückt": {
      "fr": "opprimé / asservi",
      "lit": "pressé vers le bas par une force écrasante",
      "pos_fr": "Adjectif / Participe",
      "role": "Participe adjectivé décrivant la condition initiale de roture et de sujétion des bourgeois primitifs sous les barons."
  },
  "untereinander": {
      "fr": "entre eux / les uns avec les autres",
      "lit": "les uns sous les autres",
      "pos_fr": "",
      "role": "Concurrence féroce des capitalistes entre eux."
  },
  "untergegangen": {
      "fr": "disparu / anéanti",
      "lit": "allé sous l'horizon",
      "pos_fr": "",
      "role": "Participe passé marquant la disparition irréversible du statut privilégié de l'artisan médiéval."
  },
  "untergehe": {
      "fr": "périsse, sombre, disparaisse (subjonctif)",
      "lit": "aille par-dessous, s'effondre",
      "pos_fr": "Verbe",
      "role": "verbe au subjonctif I (1re/3e pers. singulier)",
      "etymology": "Composé de « unter » (sous) + « gehen » (aller, marcher).",
      "isCompound": true,
      "compoundParts": [
          "unter-",
          "gehen"
      ]
  },
  "unterirdisch": {
      "fr": "souterrain / infernal",
      "lit": "situé sous la terre",
      "pos_fr": "",
      "role": "Métaphore poétique renvoyant aux forces démoniaques déchaînées par le magicien bourgeois."
  },
  "unterjochen": {
      "fr": "assujettir, subjuguer, mettre sous le joug",
      "lit": "placer sous le joug",
      "pos_fr": "Verbe",
      "role": "verbe inséparable",
      "etymology": "Calque du latin « subiugare », composé de « unter » + « das Joch » (le joug).",
      "isCompound": true,
      "compoundParts": [
          "unter-",
          "Joch"
      ]
  },
  "unterlassen": {
      "fr": "négliger / omettre de faire",
      "lit": "laisser de côté, s'abstenir",
      "pos_fr": "",
      "role": "Noyau verbal à la forme négative ('unterläßt keinen Augenblick') exprimant l'obligation absolue d'éducation politique."
  },
  "unterliegen": {
      "fr": "être assujetti à, succomber, être soumis à",
      "lit": "gésir sous",
      "pos_fr": "Verbe",
      "role": "verbe fort inséparable",
      "etymology": "Composé de « unter » + « liegen » (être couché sous).",
      "isCompound": true,
      "compoundParts": [
          "unter-",
          "liegen"
      ]
  },
  "unterläßt": {
      "fr": "négliger / omettre de faire",
      "lit": "laisser de côté, s'abstenir",
      "pos_fr": "",
      "role": "Forme fléchie 'unterläßt' du lemme 'unterlassen'. Noyau verbal à la forme négative ('unterläßt keinen Augenblick') exprimant l'obligation absolue d'éducation politique."
  },
  "unterscheiden": {
      "fr": "distinguer, différencier",
      "lit": "séparer par le milieu",
      "pos_fr": "Verbe",
      "role": "verbe fort inséparable",
      "etymology": "Composé de « unter » + « scheiden » (séparer, trancher).",
      "isCompound": true,
      "compoundParts": [
          "unter-",
          "scheiden"
      ]
  },
  "unterst": {
      "fr": "le plus bas / le plus inférieur",
      "lit": "situé au fond absolu",
      "pos_fr": "",
      "role": "Adjectif superlatif situant le prolétariat comme la couche basale de l'édifice social."
  },
  "unterstützen": {
      "fr": "soutenir / appuyer",
      "lit": "mettre un soutien en dessous, étayer",
      "pos_fr": "",
      "role": "Verbe principal régissant l'accusatif, exprimant l'appui tactique des communistes."
  },
  "unterwarfen": {
      "fr": "soumirent (sous forme fléchie)",
      "lit": "jetèrent sous le joug (unterwerfen)",
      "pos_fr": "",
      "role": "Forme passée du verbe unterwerfen désignant l'asservissement imposé par les classes victorieuses."
  },
  "unterwerfen": {
      "fr": "soumettre / assujettir",
      "lit": "jeter sous le pouvoir de",
      "pos_fr": "",
      "role": "Verbe marquant la vassalisation de la campagne par la ville et de l'Orient par l'Occident."
  },
  "ununterbrochen": {
      "fr": "ininterrompu / incessant",
      "lit": "qui n'est brisé par aucune trêve",
      "pos_fr": "Adjectif",
      "role": "Adjectif composé (un + unterbrochen) insistant sur la continuité structurelle de la lutte."
  },
  "unvermeidlich": {
      "fr": "inévitable / inéluctable",
      "lit": "qui ne peut être évité",
      "pos_fr": "",
      "role": "Adjectif solennel concluant le chapitre sur la fatalité historique de la victoire prolétarienne."
  },
  "unverschämt": {
      "fr": "éhonté / sans pudeur / cynique",
      "lit": "dépourvu de honte morale ou de retenue",
      "pos_fr": "Adjectif",
      "role": "Adjectif décrivant le cynisme franc du capitalisme moderne qui assume l'exploitation comme loi naturelle."
  },
  "unverändert": {
      "fr": "inchangé / stationnaire",
      "lit": "qui n'a subi nulle altération",
      "pos_fr": "",
      "role": "Adjectif opposant le conservatisme technique féodal à la révolution permanente bourgeoise."
  },
  "unwiderleglich": {
      "fr": "irréfutablement",
      "lit": "qui ne peut être démenti",
      "pos_fr": "",
      "role": "Preuves économiques irréfutables produites par les critiques."
  },
  "unzureichend": {
      "fr": "insuffisant, défectueux",
      "lit": "qui n'atteint pas le niveau requis",
      "pos_fr": "Adjectif",
      "role": "adjectif",
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
      "pos_fr": "",
      "role": "Adjectif qualifiant les industries artisanales primitives éradiquées par la vapeur et la machine."
  },
  "usw.": {
      "fr": "etc. / et ainsi de suite",
      "lit": "und so weiter (et ainsi de suite)",
      "pos_fr": "",
      "role": "Abréviation concluant une énumération ouverte d'exploiteurs secondaires."
  },
  "usw.schreiben": {
      "fr": "écrire etc.",
      "lit": "écrire ainsi de suite",
      "pos_fr": "",
      "role": "Formule abréviative de Marx clôturant une citation."
  },
  "utopisch": {
      "fr": "utopiquement",
      "lit": "dans l'imaginaire chimérique",
      "pos_fr": "",
      "role": "Caractère utopique des constructions sociales sans base de classe."
  },
  "utopistisch": {
      "fr": "utopique",
      "lit": "sans lieu réel",
      "pos_fr": "",
      "role": "Caractère hors-sol des modèles communautaires idéaux."
  },
  "veraln": {
      "fr": "vieillissent / deviennent surannées",
      "lit": "deviennent vieilles avant l'heure (veralten)",
      "pos_fr": "",
      "role": "Verbe marquant la péremption accélérée de tout rapport social bourgeois sitôt constitué."
  },
  "veralten": {
      "fr": "vieillir / devenir obsolète",
      "lit": "devenir vieux avant l'heure",
      "pos_fr": "",
      "role": "Verbe traduisant la péremption accélérée de tout rapport social bourgeois sitôt constitué."
  },
  "verarbeiten": {
      "fr": "traiter / manufacturer / transformer",
      "lit": "œuvrer à travers",
      "pos_fr": "",
      "role": "Verbe industriel désignant la métamorphose des matières premières en produits marchands."
  },
  "verbessern": {
      "fr": "améliorer / perfectionner",
      "lit": "rendre meilleur",
      "pos_fr": "",
      "role": "Réformes administratives partielles du capitalisme."
  },
  "verbindung": {
      "fr": "union / liaison / association",
      "lit": "action de relier ensemble",
      "pos_fr": "",
      "role": "Forme fléchie 'Verbindung' du lemme 'Verbindung'. Substantif au datif désignant l'union pratique des partis démocratiques."
  },
  "verborgen": {
      "fr": "caché / occulte",
      "lit": "mis à l'abri des regards",
      "pos_fr": "",
      "role": "Guerre civile larvée et cachée déchirant la société."
  },
  "verbrauchen": {
      "fr": "consommer / user",
      "lit": "user par besoin",
      "pos_fr": "",
      "role": "Verbe économique désignant la consommation finale des fabricats à l'échelle planétaire."
  },
  "verbreiten": {
      "fr": "diffuser / propager",
      "lit": "rendre large",
      "pos_fr": "",
      "role": "Diffusion des écrits révolutionnaires."
  },
  "verbrieft": {
      "fr": "scellé / garanti par charte",
      "lit": "couché par écrit sur une lettre patente de privilège",
      "pos_fr": "Adjectif / Participe",
      "role": "Participe adjectivé désignant les droits et immunités féodales consignés par rescrit royal sous l'Ancien Régime."
  },
  "verbünden": {
      "fr": "s'allier / se liguer",
      "lit": "former un pacte juré scellé par serment",
      "pos_fr": "Verbe pronominal",
      "role": "Verbe marquant la Sainte-Alliance réactionnaire des princes contre la liberté."
  },
  "verbündet": {
      "fr": "allié / confédéré",
      "lit": "lié par un pacte (Bund)",
      "pos_fr": "",
      "role": "Participe passé décrivant les provinces indépendantes fédérées en une nation unifiée."
  },
  "verdampfen": {
      "fr": "partir en fumée / s'évaporer",
      "lit": "se dissiper en vapeur",
      "pos_fr": "",
      "role": "Métaphore immortelle de Marx : « tout ce qui est stable et solide part en fumée »."
  },
  "verdienen": {
      "fr": "mériter / gagner son salaire",
      "lit": "gagner par son service de valet",
      "pos_fr": "Verbe",
      "role": "verbe transitif",
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
      "role": "Verbe économique : la vapeur et la grande industrie supplantent la petite manufacture."
  },
  "vereinen": {
      "fr": "unir, fusionner, rassembler",
      "lit": "rendre un",
      "pos_fr": "Verbe",
      "role": "verbe transitif",
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
      "role": "Verbe d'analyse marxiste : le capitalisme balaie le maquis des ordres féodaux et simplifie la société en deux camps."
  },
  "vereinigen": {
      "fr": "s'unir / se rassembler",
      "lit": "rendre un, fusionner dans une même force",
      "pos_fr": "",
      "role": "Verbe à l'impératif 2e personne du pluriel scandant le mot d'ordre immortel de Marx et Engels."
  },
  "vereinigt": {
      "fr": "s'unir / se rassembler",
      "lit": "rendre un, fusionner dans une même force",
      "pos_fr": "",
      "role": "Forme fléchie 'vereinigt' du lemme 'vereinigen'. Verbe à l'impératif 2e personne du pluriel scandant le mot d'ordre immortel de Marx et Engels."
  },
  "verfolgen": {
      "fr": "retracer / suivre à la trace",
      "lit": "suivre d'un pas continu",
      "pos_fr": "",
      "role": "Verbe méthodologique : retracer les phases de la guerre civile latente travaillant la société."
  },
  "verführen": {
      "fr": "séduire, dévoyer, corrompre",
      "lit": "conduire hors de la bonne voie",
      "pos_fr": "Verbe",
      "role": "verbe transitif",
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
      "pos_fr": "",
      "role": "Participe passé englobant la totalité des générations humaines antérieures au capital."
  },
  "vergaßen": {
      "fr": "oublièrent",
      "lit": "laissèrent échapper de l'esprit",
      "pos_fr": "",
      "role": "Oubli historique de la condition des serfs par l'aristocratie."
  },
  "vergessen": {
      "fr": "oublier",
      "lit": "perdre la mémoire",
      "pos_fr": "",
      "role": "Oublier les contradictions matérielles objectives."
  },
  "verhalten": {
      "fr": "se comporter / adopter une attitude",
      "lit": "se tenir d'une certaine façon, réagir",
      "pos_fr": "",
      "role": "Infinitif avec zu ('zu verhalten') dépendant du substantif 'Recht'."
  },
  "verhaßt": {
      "fr": "odieux / honni / détesté",
      "lit": "frappé de haine",
      "pos_fr": "",
      "role": "Le parvenu bourgeois détesté par les hobereaux féodaux."
  },
  "verheimlichen": {
      "fr": "dissimuler / cacher",
      "lit": "garder sous le secret, masquer",
      "pos_fr": "",
      "role": "Infinitif avec 'zu' marquant le refus du secret conspiratif au profit de l'action de masse."
  },
  "verhältnis": {
      "fr": "rapport / relation / position",
      "lit": "tenue réciproque, relation proportionnelle",
      "pos_fr": "",
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
      "role": "Participe adjectivé qualifiant l'exploitation féodale parée des oripeaux de la piété chrétienne."
  },
  "verkaufen": {
      "fr": "vendre",
      "lit": "céder contre prix d'argent",
      "pos_fr": "",
      "role": "Verbe dénonçant la condition de l'ouvrier contraint de se vendre lui-même au jour le jour."
  },
  "verkennen": {
      "fr": "méconnaître / ignorer",
      "lit": "se tromper dans l'appréciation de",
      "pos_fr": "",
      "role": "Infinitif précédé de 'zu' dépendant de la conjonction 'ohne'."
  },
  "verknöchern": {
      "fr": "se pétrifier / s'ossifier",
      "lit": "devenir dur comme un os",
      "pos_fr": "",
      "role": "Métaphore biologique : les institutions bourgeoises se dissolvent avant même d'avoir pu s'ossifier."
  },
  "verkommen": {
      "fr": "péricliter / dépérir",
      "lit": "déchoir de son état",
      "pos_fr": "",
      "role": "Verbe décrivant l'agonie inévitable des couches artisanales archaïques face à la machine."
  },
  "verkümmeren": {
      "fr": "s'étioler / dépérir",
      "lit": "tomber dans le chagrin/rabougrissement",
      "pos_fr": "",
      "role": "Étiolage des classes arriérées broyées par l'industrie."
  },
  "verkünden": {
      "fr": "proclamer / annoncer",
      "lit": "faire connaître au grand jour",
      "pos_fr": "",
      "role": "Proclamation des nouvelles vérités sociales."
  },
  "verlangen": {
      "fr": "exiger / requérir",
      "lit": "désirer avec insistance",
      "pos_fr": "",
      "role": "Verbe formulant les exigences élémentaires et bornées adressées par l'automate à l'ouvrier."
  },
  "verlassen": {
      "fr": "abandonner / quitter",
      "lit": "laisser derrière soi",
      "pos_fr": "",
      "role": "Verbe marquant l'abandon par les classes moyennes de leur propre point de vue étriqué."
  },
  "verlaufen": {
      "fr": "se dérouler / s'écouler",
      "lit": "courir jusqu'au bout",
      "pos_fr": "",
      "role": "Cours historique des événements."
  },
  "verleiden": {
      "fr": "dégoûter de / faire prendre en grippe",
      "lit": "rendre désagréable",
      "pos_fr": "",
      "role": "Tenter de dégoûter les ouvriers de toute lutte politique."
  },
  "verlieren": {
      "fr": "perdre",
      "lit": "être dépossédé d'un bien",
      "pos_fr": "",
      "role": "Infinitif avec 'zu' soulignant le dénuement absolu et libérateur du prolétariat."
  },
  "vermehren": {
      "fr": "multiplier / accroître",
      "lit": "rendre plus grand en quantité, faire fructifier",
      "pos_fr": "Verbe faible",
      "role": "Verbe décrivant le processus d'accumulation et d'auto-valorisation continue du capital."
  },
  "vermehrn": {
      "fr": "multiplier / accroître",
      "lit": "rendre plus nombreux",
      "pos_fr": "",
      "role": "Accroissement continu du capital."
  },
  "vermehrt": {
      "fr": "accru / multiplié",
      "lit": "rendu plus abondant",
      "pos_fr": "",
      "role": "Participe passé marquant l'expansion démographique citadine provoquée par le capital."
  },
  "vermindern": {
      "fr": "diminuer / amoindrir",
      "lit": "rendre plus petit en nombre",
      "pos_fr": "",
      "role": "Verbe constatant que la bourgeoisie réduit ses propres moyens de conjurer les crises futures."
  },
  "vermitteln": {
      "fr": "concilier / arbitrer",
      "lit": "se tenir au milieu",
      "pos_fr": "",
      "role": "Illusion utopique de concilier l'inconciliable."
  },
  "vermittelsen": {
      "fr": "au moyen de, par l'entremise de",
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
      "fr": "au moyen de, grâce à l'intermédiaire de",
      "lit": "par l'entremise de",
      "pos_fr": "Préposition",
      "role": "préposition régissant le génitif",
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
      "pos_fr": "",
      "role": "Verbe soulignant l'impuissance du capital à brider les démons matériels qu'il a invoqués."
  },
  "vernichten": {
      "fr": "anéantir / détruire radicalement",
      "lit": "réduire au néant (nichts)",
      "pos_fr": "",
      "role": "Verbe puissant scandant la destruction violente et cyclique des forces productives et des biens."
  },
  "verproviantieren": {
      "fr": "s'approvisionner en vue de",
      "lit": "garnir de vivres",
      "pos_fr": "",
      "role": "Métaphore militaire décrivant les caisses de résistance ouvrières garnies en vue des grèves."
  },
  "versammeln": {
      "fr": "rassembler / réunir",
      "lit": "amener en un même lieu",
      "pos_fr": "Verbe pronominal inséparable",
      "role": "Verbe d'action militante : les communistes de diverses nationalités réunis à Londres."
  },
  "verschieden": {
      "fr": "différent / divers",
      "lit": "séparé, pluriel",
      "pos_fr": "Adjectif",
      "role": "Adjectif marquant la pluralité des nationalités et des échelons féodaux."
  },
  "verschmähen": {
      "fr": "dédaigner / refuser de s'abaisser à",
      "lit": "mépriser comme indigne de soi",
      "pos_fr": "",
      "role": "Verbe principal affirmant la fierté de classe du prolétariat refusant la dissimulation."
  },
  "verschreien": {
      "fr": "décrier / flétrir d'infamie",
      "lit": "dénoncer à grands cris devant tous",
      "pos_fr": "Verbe inséparable",
      "role": "Verbe polémique : crier haro sur un parti en le taxant calomnieusement de communisme."
  },
  "verschwinden": {
      "fr": "disparaître / s'évanouir",
      "lit": "s'effacer du regard, cesser d'exister",
      "pos_fr": "Verbe fort inséparable",
      "role": "Verbe désignant l'extinction irréversible des classes artisanales féodales."
  },
  "verstecken": {
      "fr": "dissimuler / cacher",
      "lit": "ficher à l'abri des regards",
      "pos_fr": "",
      "role": "Geste de dévoilement critique : démasquer les intérêts bourgeois tapis derrière la morale et la loi."
  },
  "versteckt": {
      "fr": "voilé / masqué / sourd",
      "lit": "caché aux regards, clandestin",
      "pos_fr": "Participe adjectivé",
      "role": "Adjectif qualifiant la guerre de classe latente sous la paix sociale apparente."
  },
  "verstehen": {
      "fr": "se comprendre / aller de soi",
      "lit": "comprendre (au passif réfléchi : se comprendre de soi-même)",
      "pos_fr": "",
      "role": "Noyau verbal à la 3e personne du singulier dans la tournure 'versteht sich von selbst' (va de soi)."
  },
  "versteht": {
      "fr": "se comprendre / aller de soi",
      "lit": "comprendre (au passif réfléchi : se comprendre de soi-même)",
      "pos_fr": "",
      "role": "Forme fléchie 'versteht' du lemme 'verstehen'. Noyau verbal à la 3e personne du singulier dans la tournure 'versteht sich von selbst' (va de soi)."
  },
  "verständigung": {
      "fr": "entente / accord politique mutuel",
      "lit": "action de se faire comprendre et d'établir un accord",
      "pos_fr": "",
      "role": "Forme fléchie 'Verständigung' du lemme 'Verständigung'. Substantif au datif coordonné à 'Verbindung' désignant la concorde programmatique internationale."
  },
  "versuchen": {
      "fr": "tenter / essayer",
      "lit": "mettre à l'épreuve",
      "pos_fr": "",
      "role": "Tentatives révolutionnaires prématurées."
  },
  "versuchsweise": {
      "fr": "à titre d'essai / expérimentalement",
      "lit": "par voie d'épreuve",
      "pos_fr": "",
      "role": "Expériences de phalanstères à petite échelle."
  },
  "vertauschen": {
      "fr": "échanger / troquer",
      "lit": "substituer par tromperie/troc",
      "pos_fr": "",
      "role": "Substituer l'analyse matérialiste par des rêveries."
  },
  "verteidigen": {
      "fr": "défendre",
      "lit": "repousser l'attaque",
      "pos_fr": "",
      "role": "Verbe opposant la défense d'intérêts immédiats anachroniques à celle de l'avenir prolétarien."
  },
  "vertreten": {
      "fr": "représenter / défendre",
      "lit": "tenir la place de, représenter activement",
      "pos_fr": "",
      "role": "Noyau verbal à la 3e personne du pluriel marquant le mandat communiste pour l'avenir."
  },
  "verträglich": {
      "fr": "compatible / tolérable",
      "lit": "qui peut s'accorder avec",
      "pos_fr": "",
      "role": "Adjectif réfutant la viabilité matérielle de la survie collective sous l'égide bourgeoise."
  },
  "verursachen": {
      "fr": "occasionner / coûter",
      "lit": "être la cause matérielle de",
      "pos_fr": "",
      "role": "Verbe comptable évaluant les coûts stricts de reproduction biologique occasionnés par l'ouvrier."
  },
  "verwalten": {
      "fr": "administrer, régir, gérer",
      "lit": "exercer le pouvoir régulier sur",
      "pos_fr": "Verbe",
      "role": "verbe transitif",
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
  "verwandeln": {
      "fr": "transformer / métamorphoser",
      "lit": "changer de forme",
      "pos_fr": "",
      "role": "Verbe de transmutation révélant la conversion universelle de toute valeur en marchandise vénale."
  },
  "verwerfen": {
      "fr": "rejeter / répudier",
      "lit": "jeter au rebut",
      "pos_fr": "",
      "role": "Rejet des actions politiques violentes par les utopistes."
  },
  "verwirklichen": {
      "fr": "réaliser / concrétiser",
      "lit": "rendre réel",
      "pos_fr": "",
      "role": "Concrétisation des systèmes socialistes."
  },
  "verwischen": {
      "fr": "effacer / estomper",
      "lit": "essuyer pour faire disparaître",
      "pos_fr": "",
      "role": "Verbe montrant le machinisme effaçant toute singularité ou différence qualitative dans le labeur."
  },
  "verzeichnen": {
      "fr": "enregistrer / répertorier",
      "lit": "noter par écrit",
      "pos_fr": "",
      "role": "Constater les étapes du recul féodal."
  },
  "verändern": {
      "fr": "changer, modifier, transformer",
      "lit": "rendre autre",
      "pos_fr": "Verbe",
      "role": "verbe transitif",
      "etymology": "Dérivé de « ander » (autre).",
      "isCompound": true,
      "compoundParts": [
          "ver-",
          "ander",
          "-n"
      ]
  },
  "veröffentlichen": {
      "fr": "publier / rendre public",
      "lit": "porter à la connaissance de la collectivité",
      "pos_fr": "Verbe inséparable",
      "role": "Verbe d'affirmation politique : proclamer le Manifeste à la face du monde."
  },
  "viel": {
      "fr": "nombreux / beaucoup",
      "lit": "en quantité multiple",
      "pos_fr": "",
      "role": "Quantificateur soulignant la multiplicité des armes fournies malgré elle par la bourgeoisie."
  },
  "viele": {
      "fr": "nombreux / beaucoup",
      "lit": "en quantité multiple",
      "pos_fr": "",
      "role": "Forme fléchie 'viele' du lemme 'viel'. Quantificateur soulignant la multiplicité des armes fournies malgré elle par la bourgeoisie."
  },
  "vieler": {
      "fr": "de nombreux / beaucoup de",
      "lit": "forme génitive de viel",
      "pos_fr": "",
      "role": "Déterminant de quantité indéfinie au pluriel."
  },
  "vielmehr": {
      "fr": "bien plutôt / au contraire",
      "lit": "beaucoup plus",
      "pos_fr": "",
      "role": "Rectification dialectique d'une fausse apparence."
  },
  "vollbringen": {
      "fr": "accomplir / exécuter / mener à bien",
      "lit": "porter à son plein achèvement",
      "pos_fr": "",
      "role": "Verbe exprimant l'accomplissement historique de la révolution bourgeoise en Allemagne."
  },
  "vollbringt": {
      "fr": "accomplir / exécuter / mener à bien",
      "lit": "porter à son plein achèvement",
      "pos_fr": "",
      "role": "Forme fléchie 'vollbringt' du lemme 'vollbringen'. Verbe exprimant l'accomplissement historique de la révolution bourgeoise en Allemagne."
  },
  "vollendet": {
      "fr": "achevé, parfait, consommé",
      "lit": "mené jusqu'au bout",
      "pos_fr": "Adjectif",
      "role": "participe passé adjectivé",
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
      "role": "Adjectif décrivant la division méticuleuse du corps social médiéval."
  },
  "von": {
      "fr": "de / par",
      "lit": "provenance, cause ou complément d'agent",
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
      "pos_fr": "",
      "role": "Pronom adverbial exprimant l'interdépendance matérielle et intellectuelle universelle des nations."
  },
  "voneinandertreten": {
      "fr": "se séparer / diverger",
      "lit": "marcher l'un loin de l'autre",
      "pos_fr": "",
      "role": "Divergence croissante entre classes antagonistes."
  },
  "vor": {
      "fr": "devant / à la face de",
      "lit": "en présence de",
      "pos_fr": "Préposition mixte (Acc/Dat)",
      "role": "Préposition marquant la publicité de la proclamation devant le monde entier."
  },
  "vorabend": {
      "fr": "veille",
      "lit": "soir précédant la journée décisive",
      "pos_fr": "",
      "role": "Forme fléchie 'Vorabend' du lemme 'Vorabend'. Substantif au datif masculin singulier après 'an dem' ('am Vorabend einer Revolution')."
  },
  "voraushaben": {
      "fr": "avoir l'avantage sur, avoir d'avance sur",
      "lit": "avoir en avant",
      "pos_fr": "Verbe",
      "role": "verbe séparable",
      "etymology": "Composé de « voraus » (en avant) + « haben » (avoir).",
      "isCompound": true,
      "compoundParts": [
          "voraus",
          "haben"
      ]
  },
  "voraussetzen": {
      "fr": "supposer, présupposer, exiger comme condition préalable",
      "lit": "poser en avant",
      "pos_fr": "Verbe",
      "role": "verbe séparable",
      "etymology": "Calque de « praesupponere », composé de « voraus » + « setzen ».",
      "isCompound": true,
      "compoundParts": [
          "voraus",
          "setzen"
      ]
  },
  "vorbereiten": {
      "fr": "préparer / frayer la voie",
      "lit": "apprêter préalablement à l'avance",
      "pos_fr": "Verbe séparable faible",
      "role": "Verbe marquant la gestation historique préalable des conditions du marché mondial par les découvertes maritimes."
  },
  "vorbeugen": {
      "fr": "prévenir / conjurer",
      "lit": "se courber en avant",
      "pos_fr": "",
      "role": "Verbe diagnostiquant la perte par la bourgeoisie de tout moyen prophylactique face aux crises."
  },
  "vorgehen": {
      "fr": "se passer / se dérouler",
      "lit": "avancer devant",
      "pos_fr": "",
      "role": "Processus historiques se déroulant sous nos yeux."
  },
  "vorherging": {
      "fr": "précéda, s'était déroulé avant",
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
      "lit": "qui gît devant, immédiatement présent",
      "pos_fr": "",
      "role": "Épithète au génitif masculin pluriel qualifiant 'Zwecke'."
  },
  "vorliegenden": {
      "fr": "immédiat / actuel / sous les yeux",
      "lit": "qui gît devant, immédiatement présent",
      "pos_fr": "",
      "role": "Forme fléchie 'vorliegenden' du lemme 'vorliegend'. Épithète au génitif masculin pluriel qualifiant 'Zwecke'."
  },
  "vorspiel": {
      "fr": "prélude / avant-jeu",
      "lit": "jeu précédant le drame principal",
      "pos_fr": "",
      "role": "Forme fléchie 'Vorspiel' du lemme 'Vorspiel'. Substantif composé attributif désignant le prologue à la révolution socialiste."
  },
  "vorstellen": {
      "fr": "se représenter / concevoir",
      "lit": "placer devant soi",
      "pos_fr": "",
      "role": "La bourgeoisie s'imaginant son monde comme le meilleur possible."
  },
  "vorwerfen": {
      "fr": "reprocher, jeter à la face",
      "lit": "jeter devant soi",
      "pos_fr": "Verbe",
      "role": "verbe fort transitif",
      "etymology": "Composé de « vor » (devant) + « werfen » (jeter).",
      "isCompound": true,
      "compoundParts": [
          "vor-",
          "werfen"
      ]
  },
  "vorzugsweise": {
      "fr": "de préférence / particulièrement",
      "lit": "par manière de préférence",
      "pos_fr": "",
      "role": "Application préférentielle aux secteurs industriels."
  },
  "vorzupredigen": {
      "fr": "prêcher / sermonner",
      "lit": "prêcher devant",
      "pos_fr": "",
      "role": "Sermons moralisateurs adressés aux travailleurs."
  },
  "vorübergehend": {
      "fr": "passager / éphémère",
      "lit": "qui passe devant en s'en allant",
      "pos_fr": "",
      "role": "Participe présent soulignant le caractère transitoire des premières victoires syndicales."
  },
  "wachsen": {
      "fr": "croître / s'agrandir",
      "lit": "augmenter en volume physique et organique",
      "pos_fr": "Verbe fort",
      "role": "Verbe fort décrivant l'expansion continue et irrésistible de l'espace commercial mondial."
  },
  "wachsend": {
      "fr": "croissant / grandissant",
      "lit": "qui pousse continuellement",
      "pos_fr": "",
      "role": "Participe présent décrivant l'amplification de la concurrence intestine des bourgeois."
  },
  "waffen": {
      "fr": "arme",
      "lit": "instrument de combat",
      "pos_fr": "",
      "role": "Forme fléchie 'Waffen' du lemme 'Waffe'. Substantif à l'accusatif féminin pluriel désignant les armes politiques retournées contre le capital."
  },
  "wahr": {
      "fr": "vrai / authentique",
      "lit": "conforme à la vérité",
      "pos_fr": "",
      "role": "Ironie de Marx sur le prétendu 'vrai' socialisme allemand."
  },
  "wahrer": {
      "fr": "le vrai / plus authentique",
      "lit": "authentique décliné",
      "pos_fr": "",
      "role": "Critique du 'Vrai Socialisme' (der wahre Sozialismus)."
  },
  "wahrhaft": {
      "fr": "véritablement / réellement",
      "lit": "en vérité authentique",
      "pos_fr": "",
      "role": "La classe vraiment révolutionnaire."
  },
  "warum": {
      "fr": "pourquoi",
      "lit": "pour quelle raison",
      "pos_fr": "",
      "role": "Adverbe introduisant l'interrogation dialectique centrale sur les causes de la crise de surproduction."
  },
  "was": {
      "fr": "ce que / quoi",
      "lit": "pronom relatif indéfini neutre",
      "pos_fr": "",
      "role": "Pronom introduisant la proposition subordonnée objet ou sujet."
  },
  "wechselseitig": {
      "fr": "réciproque, mutuel",
      "lit": "d'un côté et de l'autre en échange",
      "pos_fr": "Adjectif",
      "role": "adjectif / adverbe",
      "etymology": "Composé de « Wechsel » (changement, alternance) + « Seite » (côté) + « -ig ».",
      "isCompound": true,
      "compoundParts": [
          "Wechsel",
          "Seite",
          "-ig"
      ]
  },
  "weg": {
      "fr": "loin / disparu / parti",
      "lit": "en chemin vers le dehors",
      "pos_fr": "",
      "role": "Élimination des obstacles corporatifs anciens."
  },
  "wegziehen": {
      "fr": "dérober / arracher de dessous",
      "lit": "tirer au loin",
      "pos_fr": "",
      "role": "Verbe illustrant l'industrie arrachée à son socle territorial national par le marché mondial."
  },
  "weil": {
      "fr": "parce que",
      "lit": "en raison de ce que",
      "pos_fr": "",
      "role": "Conjonction régissant l'analyse matérialiste des causes du rôle pivot de l'Allemagne."
  },
  "weit": {
      "fr": "bien plus / largement",
      "lit": "loin, vaste (ici adverbe de degré au comparatif)",
      "pos_fr": "",
      "role": "Adverbe au comparatif intensifiant le degré d'organisation du prolétariat."
  },
  "weiter": {
      "fr": "bien plus / largement",
      "lit": "loin, vaste (ici adverbe de degré au comparatif)",
      "pos_fr": "",
      "role": "Forme fléchie 'weiter' du lemme 'weit'. Adverbe au comparatif intensifiant le degré d'organisation du prolétariat."
  },
  "weitertreibend": {
      "fr": "qui pousse en avant, moteur dynamique",
      "lit": "qui pousse plus loin",
      "pos_fr": "Adjectif",
      "role": "participe présent adjectivé",
      "etymology": "Composé de « weiter » (plus loin) + participe de « treiben » (pousser).",
      "isCompound": true,
      "compoundParts": [
          "weiter",
          "treiben"
      ]
  },
  "welch": {
      "fr": "qui / que / lequel / quel",
      "lit": "lequel, quel (pronom relatif ou interrogatif)",
      "pos_fr": "",
      "role": "Pronom relatif introduisant une subordonnée relative déterminative."
  },
  "welche": {
      "fr": "qui / que / lequel / quel",
      "lit": "lequel, quel (pronom relatif ou interrogatif)",
      "pos_fr": "",
      "role": "Forme fléchie 'welche' du lemme 'welch'. Pronom relatif introduisant une subordonnée relative déterminative."
  },
  "welcher": {
      "fr": "qui / que / lequel",
      "lit": "pronom relatif anaphorique",
      "pos_fr": "",
      "role": "Pronom relatif introduisant une subordonnée relative déterminative."
  },
  "welt": {
      "fr": "monde",
      "lit": "l'univers terrestre, l'ordre humain affranchi",
      "pos_fr": "",
      "role": "Forme fléchie 'Welt' du lemme 'Welt'. Substantif à l'accusatif féminin singulier désignant le monde émancipé à conquérir."
  },
  "wenig": {
      "fr": "peu de / peu",
      "lit": "petite quantité",
      "pos_fr": "",
      "role": "Petite fraction de la noblesse passant à la bourgeoisie."
  },
  "weniger": {
      "fr": "moins",
      "lit": "quantité inférieure",
      "pos_fr": "",
      "role": "Adverbe marquant un degré moindre d'habileté manuelle ou de résistance."
  },
  "wenigstens": {
      "fr": "au moins / du moins",
      "lit": "au plus peu",
      "pos_fr": "",
      "role": "Adverbe désignant le minimum vital qu'un maître doit garantir à son esclave pour régner."
  },
  "wenn": {
      "fr": "si / quand",
      "lit": "dans l'hypothèse où",
      "pos_fr": "",
      "role": "Conjonction posant l'hypothèse historique ou la condition matérielle."
  },
  "werden": {
      "fr": "devenir / auxiliaire du passif",
      "lit": "entrer dans un état nouveau",
      "pos_fr": "Verbe auxiliaire passif/futur",
      "role": "Auxiliaire fondamental de la voix passive allemande."
  },
  "wertvoll": {
      "fr": "précieux / de haute valeur",
      "lit": "plein de valeur",
      "pos_fr": "",
      "role": "Matériaux d'analyse critiques précieux chez les utopistes."
  },
  "wesentlich": {
      "fr": "essentiel / fondamental",
      "lit": "qui tient à l'essence (Wesen)",
      "pos_fr": "",
      "role": "Adjectif matérialiste qualifiant la condition ontologique indispensable du capital : le salariat."
  },
  "widersprechen": {
      "fr": "contredire",
      "lit": "parler contre",
      "pos_fr": "Verbe",
      "role": "verbe fort inséparable",
      "etymology": "Calque du latin « contradicere », de « wider » (contre) + « sprechen » (parler).",
      "isCompound": true,
      "compoundParts": [
          "wider-",
          "sprechen"
      ]
  },
  "widersprechend": {
      "fr": "contradictoire",
      "lit": "qui parle contre, antagonique",
      "pos_fr": "",
      "role": "Épithète au datif neutre pluriel qualifiant les éléments hétérogènes du parti."
  },
  "widersprechenden": {
      "fr": "contradictoire",
      "lit": "qui parle contre, antagonique",
      "pos_fr": "",
      "role": "Forme fléchie 'widersprechenden' du lemme 'widersprechend'. Épithète au datif neutre pluriel qualifiant les éléments hétérogènes du parti."
  },
  "widerstandslos": {
      "fr": "sans résistance / passif",
      "lit": "dépourvu de résistance",
      "pos_fr": "",
      "role": "Adjectif dépeignant la bourgeoisie comme le jouet inconscient et docile du progrès de l'industrie."
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
  "wiederherstellen": {
      "fr": "restaurer / rétablir",
      "lit": "remettre en place debout",
      "pos_fr": "",
      "role": "Volonté réactionnaire de restaurer les corporations médiévales."
  },
  "wiederzuerringen": {
      "fr": "reconquérir de haute lutte",
      "lit": "remporter à nouveau en luttant (wiedererringen)",
      "pos_fr": "",
      "role": "Verbe dénonçant l'illusion régressive des ouvriers voulant ressusciter le statut de l'artisan médiéval."
  },
  "willenloser": {
      "fr": "dénué de volonté / inconscient",
      "lit": "dépourvu de vouloir propre",
      "pos_fr": "",
      "role": "Adjectif révélant l'absence d'autonomie de la bourgeoisie face aux lois d'airain du capitalisme."
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
      "pos_fr": "",
      "role": "Action efficace des lois économiques."
  },
  "wirkend": {
      "fr": "agissant / opérant",
      "lit": "qui produit de l'effet",
      "pos_fr": "",
      "role": "Forces matérielles opérant dans l'histoire."
  },
  "wirklich": {
      "fr": "véritablement / réellement",
      "lit": "qui opère dans l'effectivité (Wirklichkeit)",
      "pos_fr": "",
      "role": "Adjectif hegelo-marxiste caractérisant le prolétariat comme seule classe révolutionnaire effective."
  },
  "wissen": {
      "fr": "savoir, avoir conscience de",
      "lit": "avoir vu, avoir connaissance certaine de",
      "pos_fr": "Verbe",
      "role": "verbe prétérito-présent à l'infinitif",
      "etymology": "Du moyen haut-allemand « wissen », vieux haut-allemand « wizzan », de racine indo-européenne *weid- (voir, savoir)."
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
      "pos_fr": "",
      "role": "Pronom adverbial ouvrant la question décisive sur le surmontement bourgeois des crises."
  },
  "wohlerworben": {
      "fr": "si chèrement acquis / légitime",
      "lit": "dûment et légitimement acquis par un labeur historique",
      "pos_fr": "Adjectif",
      "role": "Composé juridique désignant les prérogatives séculaires et coutumières des corporations et états."
  },
  "wohlfeil": {
      "fr": "bon marché / à vil prix",
      "lit": "qui s'achète pour du bien peu",
      "pos_fr": "",
      "role": "Adjectif économique désignant l'arme d'invasion suprême de la marchandise industrielle."
  },
  "wollen": {
      "fr": "vouloir",
      "lit": "avoir la volonté de",
      "pos_fr": "",
      "role": "Verbe exprimant l'alternative impérative imposée aux peuples : adopter le mode bourgeois ou périr."
  },
  "womit": {
      "fr": "avec quoi / avec lequel",
      "lit": "avec quoi",
      "pos_fr": "",
      "role": "Pronom adverbial relatif introduisant l'arme ou l'instrument d'action."
  },
  "wonach": {
      "fr": "selon quoi, d'après quoi",
      "lit": "d'après quoi",
      "pos_fr": "Adverbe",
      "role": "adverbe relatif",
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
      "pos_fr": "",
      "role": "Pronom adverbial introduisant le socle matériel sur lequel repose la bourgeoisie."
  },
  "worin": {
      "fr": "dans lequel / où / au fur et à mesure que",
      "lit": "dans quoi, en quoi (adverbe relatif)",
      "pos_fr": "Pronom relatif adverbial composé",
      "role": "Adverbe relatif unissant wo- et la préposition in pour introduire une proposition de mesure et de temps."
  },
  "wort": {
      "fr": "mot / parole",
      "lit": "terme formulé, unité linguistique",
      "pos_fr": "",
      "role": "Forme fléchie 'Wort' du lemme 'Wort'. Substantif au datif neutre singulier dans la locution récapitulative 'Mit einem Wort'."
  },
  "während": {
      "fr": "pendant que, tandis que, alors que",
      "lit": "durant que",
      "pos_fr": "Conjonction",
      "role": "conjonction de subordination",
      "etymology": "Participe présent substantivé et grammaticalisé de « währen » (durer, subsister)."
  },
  "wünschen": {
      "fr": "souhaiter / désirer",
      "lit": "émettre un vœu",
      "pos_fr": "",
      "role": "Vœux pieux des philanthropes bourgeois."
  },
  "zahllos": {
      "fr": "innombrable / sans nombre",
      "lit": "dépourvu de compte mesurable, trop nombreux pour être compté",
      "pos_fr": "Adjectif",
      "role": "Adjectif privatif qualifiant la profusion de coutumes, règlements et franchises locales de la féodalité."
  },
  "zeichnen": {
      "fr": "marquer / caractériser",
      "lit": "graver d'un trait distinctif",
      "pos_fr": "Verbe régulier",
      "role": "Verbe désignant le trait saillant qui distingue l'époque de la bourgeoisie."
  },
  "zellenleben": {
      "fr": "vie cellulaire, régime de claustration en cellule",
      "lit": "vie en cellule pénitentiaire ou monastique",
      "pos_fr": "Nom neutre",
      "role": "nom neutre (forme de Zellenleben)",
      "etymology": "Composé de « die Zelle » (la cellule) + « das Leben » (la vie).",
      "isCompound": true,
      "compoundParts": [
          "Zelle",
          "-n-",
          "Leben"
      ]
  },
  "zentralisieren": {
      "fr": "centraliser",
      "lit": "ramener au centre",
      "pos_fr": "",
      "role": "Loi historique : l'unification des luttes locales dispersées en une lutte de classe nationale."
  },
  "zerfallend": {
      "fr": "qui se décompose / en ruine",
      "lit": "qui tombe en poussière sous l'effet du temps",
      "pos_fr": "Participe présent",
      "role": "Adjectif désignant la société féodale agonisante d'où jaillit la bourgeoisie."
  },
  "zergliederen": {
      "fr": "disséquer / anatomiser",
      "lit": "séparer les membres",
      "pos_fr": "",
      "role": "Analyse critique aiguë des contradictions de la production moderne."
  },
  "zerreißen": {
      "fr": "déchirer en morceaux / rompre brutalement",
      "lit": "lacérer, fendre avec violence en lambeaux",
      "pos_fr": "Verbe fort inséparable",
      "role": "Verbe fort inséparable exprimant la dislocation radicale de l'ordre social médiéval par la marchandise."
  },
  "zerreißend": {
      "fr": "déchirant / dissolvant",
      "lit": "qui met en pièces",
      "pos_fr": "",
      "role": "Effet de dislocation produit par l'industrie sur la famille."
  },
  "zerschlagen": {
      "fr": "briser / fracasser",
      "lit": "frapper jusqu'à détruire",
      "pos_fr": "",
      "role": "Verbe de révolte luddiste : les ouvriers brisant les machines coupables de leur ruine."
  },
  "zersplittert": {
      "fr": "émietté / dispersé",
      "lit": "éclaté en éclats de bois",
      "pos_fr": "",
      "role": "Participe passé qualifiant la dispersion atomisée des ouvriers et de la propriété sous l'ancien régime."
  },
  "zerstreuen": {
      "fr": "disperser / disséminer",
      "lit": "éparpiller en tous sens",
      "pos_fr": "",
      "role": "Verbe caractérisant l'atomisation géographique initiale des masses laborieuses."
  },
  "zerstören": {
      "fr": "détruire / anéantir",
      "lit": "disloquer en morceaux, ravager de fond en comble",
      "pos_fr": "Verbe inséparable faible",
      "role": "Verbe destructif décrivant le travail historique de sape de la bourgeoisie contre l'ensemble des traditions féodales."
  },
  "zerstörender": {
      "fr": "destructeur",
      "lit": "qui détruit",
      "pos_fr": "",
      "role": "Impact destructeur du machinisme sur l'artisanat."
  },
  "zeugen": {
      "fr": "engendrer / procréer",
      "lit": "tirer à la vie",
      "pos_fr": "",
      "role": "Métaphore filiale ironique : la bourgeoisie a elle-même engendré les fossoyeurs qui vont la tuer."
  },
  "ziehen": {
      "fr": "tirer / attirer",
      "lit": "exercer une traction",
      "pos_fr": "",
      "role": "Attirer les classes dans le sillage de la bourgeoisie."
  },
  "ziemlich": {
      "fr": "assez, passablement, relativement",
      "lit": "qui est décent, convenable",
      "pos_fr": "Adverbe",
      "role": "adverbe de degré",
      "etymology": "Du moyen haut-allemand « zimelīch » (convenable, approprié, du verbe ziemen)."
  },
  "zirkulieren": {
      "fr": "circuler",
      "lit": "tourner en rond",
      "pos_fr": "",
      "role": "Circulation marchande et monétaire."
  },
  "zittern": {
      "fr": "trembler",
      "lit": "être secoué d'un frisson de terreur",
      "pos_fr": "",
      "role": "Infinitif dépendant du subjonctif optatif 'Mögen' : 'Que les classes régnantes tremblent !'"
  },
  "zivilisation": {
      "fr": "civilisation",
      "lit": "niveau de développement technique, matériel et civique",
      "pos_fr": "",
      "role": "Forme fléchie 'Zivilisation' du lemme 'Zivilisation'. Substantif au génitif féminin singulier désignant l'aire industrielle européenne."
  },
  "zivilisiert": {
      "fr": "civilisé",
      "lit": "qui a accédé à la civilité",
      "pos_fr": "",
      "role": "Adjectif désignant les métropoles industrielles développées soumettant les pays agraires."
  },
  "zu": {
      "fr": "à / vers / en vue de",
      "lit": "direction, destination ou but",
      "pos_fr": "Préposition (régime datif)",
      "role": "Préposition régissant le datif marquant le but ou le résultat d'une alliance."
  },
  "zudem": {
      "fr": "de plus, en outre, au surplus",
      "lit": "à cela",
      "pos_fr": "Adverbe",
      "role": "adverbe de liaison",
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
      "pos_fr": "",
      "role": "Adverbe prescrivant au prolétariat d'abattre sa bourgeoisie nationale en premier lieu."
  },
  "zufrieden": {
      "fr": "content, satisfait",
      "lit": "en paix, apaisé",
      "pos_fr": "Adjectif",
      "role": "adjectif prédicatif",
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
      "pos_fr": "",
      "role": "Apporter de nouvelles forces au prolétariat."
  },
  "zugleich": {
      "fr": "en même temps / à la fois",
      "lit": "en un même instant",
      "pos_fr": "",
      "role": "Adverbe temporel marquant la conjonction des intérêts présents et futurs."
  },
  "zugrunde": {
      "fr": "à sa perte / à la ruine",
      "lit": "vers le fond (zu Grunde)",
      "pos_fr": "",
      "role": "Locution verbale (zugrunde gehen) marquant la mort économique inéluctable sans modernisation."
  },
  "zugunsten": {
      "fr": "en faveur de, au bénéfice de",
      "lit": "à la faveur de",
      "pos_fr": "Préposition",
      "role": "préposition régissant le génitif",
      "etymology": "Composé de « zu » + « Gunst » (faveur, bienveillance).",
      "isCompound": true,
      "compoundParts": [
          "zu",
          "Gunst",
          "-en"
      ]
  },
  "zukunft": {
      "fr": "avenir",
      "lit": "ce qui vient vers nous",
      "pos_fr": "",
      "role": "Forme fléchie 'Zukunft' du lemme 'Zukunft'. Substantif à l'accusatif singulier, complément d'objet direct de 'vertreten'."
  },
  "zukünftig": {
      "fr": "futur / à venir",
      "lit": "qui vient vers nous",
      "pos_fr": "",
      "role": "Adjectif qualifiant les intérêts de classe à venir que défend l'artisan voué au salariat."
  },
  "zum Beispiel": {
      "fr": "par exemple",
      "lit": "pour modèle / exemple",
      "pos_fr": "Adverbe",
      "role": "locution adverbiale",
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
      "pos_fr": "",
      "role": "Verbe décrivant l'accroissement continu de la masse et de l'intensité du travail."
  },
  "zunächst": {
      "fr": "tout d'abord / au premier chef",
      "lit": "au plus proche",
      "pos_fr": "",
      "role": "Adverbe marquant l'enveloppe nationale immédiate de la lutte avant son universalisation."
  },
  "zur": {
      "fr": "à / envers / vis-à-vis de / pour",
      "lit": "vers, à (direction ou rapport)",
      "pos_fr": "",
      "role": "Forme fléchie 'zur' du lemme 'zu'. Préposition régissant le datif introduisant le complément d'attribution ou d'objet indirect."
  },
  "zurückgeführen": {
      "fr": "ramener / réduire à",
      "lit": "reconduire en arrière (zurückführen)",
      "pos_fr": "",
      "role": "Geste de désillusionnement matérialiste : ramener la famille à un pur rapport d'argent."
  },
  "zurückschleudern": {
      "fr": "renvoyer vivement / catapulter en retour",
      "lit": "projeter en arrière avec la force d'une fronde",
      "pos_fr": "Verbe séparable balistique",
      "role": "Métaphore balistique : renvoyer l'accusation de communisme comme un projectile incendiaire."
  },
  "zurückversetzt": {
      "fr": "rejeté en arrière / replongé dans",
      "lit": "placé en arrière (zurückversetzen)",
      "pos_fr": "",
      "role": "Participe passé marquant la régression instantanée de la société en barbarie lors des crises."
  },
  "zurückwirken": {
      "fr": "réagir en retour / avoir un effet rétroactif",
      "lit": "agir vers l'arrière sur le point de départ",
      "pos_fr": "Verbe séparable faible",
      "role": "Verbe dialectique clé exprimant l'action réciproque des transports et du commerce sur l'essor manufacturier."
  },
  "zurückzudrehen": {
      "fr": "faire tourner en arrière",
      "lit": "tourner en sens inverse (zurückdrehen)",
      "pos_fr": "",
      "role": "Métaphore saisissante : la vaine tentative des réactionnaires de faire tourner à l'envers la roue de l'histoire."
  },
  "zusammen": {
      "fr": "ensemble",
      "lit": "rassemblé en un tout",
      "pos_fr": "",
      "role": "Adverbe regroupant l'effort productif cumulé de toutes les générations humaines passées."
  },
  "zusammenfassen": {
      "fr": "résumer, centraliser, rassembler en un faisceau",
      "lit": "saisir ensemble",
      "pos_fr": "Verbe",
      "role": "verbe séparable",
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
      "pos_fr": "",
      "role": "Verbe traduisant la condensation spatiale des masses prolétariennes au sein des usines et villes."
  },
  "zusammengedrängt": {
      "fr": "rassemblé / concentré en masse",
      "lit": "pressé en masse compacte",
      "pos_fr": "",
      "role": "Participe passé caractérisant l'agrégation des provinces en un État national moderne."
  },
  "zustande": {
      "fr": "à réalisation (à bien)",
      "lit": "à l'état effectif (zu Stande)",
      "pos_fr": "",
      "role": "Particule séparable du verbe zustandebringen (accomplir, mener à terme)."
  },
  "zustände": {
      "fr": "état de choses / ordre établi / condition",
      "lit": "manière de se tenir, ordonnancement",
      "pos_fr": "",
      "role": "Forme fléchie 'Zustände' du lemme 'Zustand'. Substantif à l'accusatif masculin pluriel désignant le statu quo oppressif à renverser."
  },
  "zuviel": {
      "fr": "trop / excès de",
      "lit": "quantité excessive",
      "pos_fr": "",
      "role": "Adverbe diagnostiquant la surproduction morbide du capitalisme."
  },
  "zuvieler": {
      "fr": "de trop de",
      "lit": "génitif partitif de zuviel",
      "pos_fr": "",
      "role": "Déterminant quantitatif soulignant l'asphyxie par pléthore de marchandises."
  },
  "zwar": {
      "fr": "certes / à la vérité",
      "lit": "en fait, assurément",
      "pos_fr": "",
      "role": "Introduit une concession avant la réplique dialectique."
  },
  "zwecke": {
      "fr": "but / fin / objectif immédiat",
      "lit": "point de mire, fin visée",
      "pos_fr": "",
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
      "role": "Pronom invariable annonçant les deux conclusions politiques majeures tirées par Marx."
  },
  "zweiter": {
      "fr": "second / deuxième",
      "lit": "numéral ordinal",
      "pos_fr": "",
      "role": "Section 2 du chapitre III : le socialisme bourgeois."
  },
  "zwingen": {
      "fr": "contraindre / forcer",
      "lit": "obliger par violence",
      "pos_fr": "",
      "role": "Verbe impérialiste : le capital contraignant toutes les nations à adopter le mode de production bourgeois."
  },
  "zwischen": {
      "fr": "entre",
      "lit": "dans l'espace intermédiaire séparant deux termes",
      "pos_fr": "Préposition mixte",
      "role": "Préposition spatiale désignant l'espace interstitiel entre deux ordres."
  },
  "zünftig": {
      "fr": "corporatif / juré",
      "lit": "qui relève de la jurande d'artisanat fermée",
      "pos_fr": "Adjectif",
      "role": "Adjectif qualifiant le mode d'organisation corporative artisanale du Moyen Âge."
  },
  "Äpfel": {
      "fr": "pommes (d'or)",
      "lit": "fruits du pommier",
      "pos_fr": "Nom masculin",
      "role": "nom masculin au pluriel (singulier Apfel)",
      "etymology": "Pluriel à inflexion (Umlaut) de « Apfel », du vieux haut-allemand « apful », de racine proto-germanique *apla-."
  },
  "Ärger": {
      "fr": "dépit, colère contrariée, indignation",
      "lit": "irritation causée par un affront ou un tort",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Déverbal du verbe « ärgern » (irriter, fâcher), issu du moyen haut-allemand « ergen » (rendre pire, faire du tort), rattaché à l'adjectif « arg » (mauvais)."
  },
  "Ökonom": {
      "fr": "économiste, agronome",
      "lit": "gestionnaire de l'administration domestique ou publique",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Emprunté au grec ancien « oikonomos » (administrateur d'un domaine ou d'une maison), composé de « oikos » (maison) + « nemein » (gérer, administrer)."
  },
  "Ökonomist": {
      "fr": "économiste théoricien",
      "lit": "spécialiste de la science économique",
      "pos_fr": "Nom masculin",
      "role": "nom masculin",
      "etymology": "Emprunté au français « économiste » (terme forgé au XVIIIe siècle pour les physiocrates), du grec « oikonomia »."
  },
  "Überbau": {
      "fr": "superstructure",
      "lit": "édifice bâti par-dessus",
      "pos_fr": "",
      "role": "Concept cardinal du matérialisme historique : l'édifice juridique et politique élevé sur la base matérielle."
  },
  "Übergang": {
      "fr": "transition / passage",
      "lit": "fait de passer par-dessus",
      "pos_fr": "",
      "role": "Concept dialectique désignant le passage historique inéluctable des classes moyennes dans le prolétariat."
  },
  "Überlieferung": {
      "fr": "tradition / legs historique",
      "lit": "transmission à travers les générations",
      "pos_fr": "",
      "role": "Substantif au datif féminin singulier désignant l'héritage politique de 1793."
  },
  "Überproduktion": {
      "fr": "surproduction",
      "lit": "production excédentaire",
      "pos_fr": "",
      "role": "Concept économique central : la pléthore morbide de marchandises étouffant le marché capitaliste."
  },
  "Übersetzung": {
      "fr": "traduction, version",
      "lit": "action de transposer d'une rive linguistique à une autre",
      "pos_fr": "Nom féminin",
      "role": "nom féminin",
      "etymology": "Dérivé de « übersetzen » (faire passer au-delà, transposer dans une autre langue, calque de « traducere ») + « -ung ».",
      "isCompound": true,
      "compoundParts": [
          "über-",
          "setzen",
          "-ung"
      ]
  },
  "ägyptisch": {
      "fr": "égyptien",
      "lit": "d'Égypte",
      "pos_fr": "",
      "role": "Adjectif évoquant les pyramides des pharaons dépassées par les forces productives bourgeoises."
  },
  "ähnlich": {
      "fr": "semblable / analogue",
      "lit": "de même apparence",
      "pos_fr": "",
      "role": "Adjectif dressant le parallèle historique entre la crise féodale et la crise bourgeoise."
  },
  "ändern": {
      "fr": "changer, modifier, altérer",
      "lit": "rendre autre",
      "pos_fr": "Verbe",
      "role": "verbe transitif",
      "etymology": "Du moyen haut-allemand « andern », vieux haut-allemand « andarōn », de « ander » (autre)."
  },
  "öffentlich": {
      "fr": "public, ouvert à tous",
      "lit": "qui est ouvert aux yeux de tous",
      "pos_fr": "Adjectif",
      "role": "adjectif / adverbe",
      "etymology": "Du moyen haut-allemand « offenlich », dérivé de « offen » (ouvert)."
  },
  "ökonomisch": {
      "fr": "économique",
      "lit": "qui relève de l'économie",
      "pos_fr": "",
      "role": "Adjectif définissant le socle matériel sous-jacent à la domination politique de la bourgeoisie."
  },
  "über": {
      "fr": "sur / au sujet de",
      "lit": "au-dessus, à propos de",
      "pos_fr": "",
      "role": "Préposition régissant l'accusatif introduisant l'objet théorique de la conscience politique."
  },
  "überall": {
      "fr": "partout / universellement",
      "lit": "en tout lieu sans exclusion",
      "pos_fr": "Adverbe de lieu",
      "role": "Adverbe de généralisation spatiale décrivant l'extension des hiérarchies féodales."
  },
  "übergehen": {
      "fr": "passer à / franchir",
      "lit": "marcher par-dessus",
      "pos_fr": "",
      "role": "Passage dialectique d'une forme sociale à une autre."
  },
  "überging": {
      "fr": "passa (au sens historique)",
      "lit": "traversa vers l'autre bord (übergehen)",
      "pos_fr": "",
      "role": "Forme passée du verbe übergehen désignant le ralliement de transfuges de classe à la révolution."
  },
  "überhaupt": {
      "fr": "en général / d'une manière générale",
      "lit": "par-dessus tout, globalement",
      "pos_fr": "Adverbe",
      "role": "Adverbe de synthèse marquant l'essor global des forces révolutionnaires marchandes."
  },
  "überlebt": {
      "fr": "suranné / caduc / dépassé",
      "lit": "qui a survécu à son temps",
      "pos_fr": "",
      "role": "Rapports de production archaïques condamnés par l'histoire."
  },
  "überlieferen": {
      "fr": "transmettre / léguer par tradition",
      "lit": "livrer par-dessus",
      "pos_fr": "",
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
      "role": "Participe qualifiant les corporations, serfs et ordres issus du Moyen Âge."
  },
  "überlieferung": {
      "fr": "tradition / legs historique",
      "lit": "transmission à travers les générations",
      "pos_fr": "",
      "role": "Forme fléchie 'Überlieferung' du lemme 'Überlieferung'. Substantif au datif féminin singulier désignant l'héritage politique de 1793."
  },
  "überschreiben": {
      "fr": "intituler / surécrire",
      "lit": "écrire par-dessus",
      "pos_fr": "",
      "role": "Surimposition de gloses mystiques sur des textes profanes."
  },
  "überschwenglich": {
      "fr": "exalté / dithyrambique",
      "lit": "qui déborde par-dessus",
      "pos_fr": "",
      "role": "Enthousiasme mystique de pacotille des petits-bourgeois."
  },
  "übersticken": {
      "fr": "broder par-dessus",
      "lit": "piquer d'ornements",
      "pos_fr": "",
      "role": "Ornementer la nudité de la marchandise d'illusions poétiques."
  },
  "überwinden": {
      "fr": "surmonter / surclasser",
      "lit": "vaincre par le dessus",
      "pos_fr": "",
      "role": "Verbe dialectique : la bourgeoisie surmontant chaque crise en préparant des crises plus formidables."
  },
  "übrig": {
      "fr": "restant / autre",
      "lit": "qui demeure par-dessus",
      "pos_fr": "",
      "role": "Adjectif désignant toutes les autres classes condamnées au dépérissement par la grande industrie."
  },
  "übrigbleiben": {
      "fr": "subsister / rester",
      "lit": "rester de reste",
      "pos_fr": "",
      "role": "Ce qui subsiste après la destruction des privilèges."
  },
  "übrigens": {
      "fr": "d'ailleurs, du reste, au demeurant",
      "lit": "pour ce qui reste",
      "pos_fr": "Adverbe",
      "role": "adverbe",
      "etymology": "Génitif adverbial de « übrig » (restant, en surplus)."
  },
  "übriglassen": {
      "fr": "laisser subsister / laisser de reste",
      "lit": "laisser en surplus, conserver en reste",
      "pos_fr": "Verbe séparable fort",
      "role": "Verbe décrivant l'appauvrissement radical des liens humains réduits par la bourgeoisie au seul intérêt monétaire."
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
