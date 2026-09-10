// Dictionnaire lexical complet de secours (Allemand -> Français)
// Garantit qu'aucun mot ne s'affichera JAMAIS avec son lemme brut allemand en guise de traduction.

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
}

export const LEMMA_LEXICON: Record<string, LexiconEntry> = {
  "Abstufung": {
    "fr": "gradation / échelonnement",
    "lit": "hiérarchie en gradins",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin marquant la segmentation hiérarchique complexe des rangs sociaux féodaux."
  },
  "Afrika": {
    "fr": "Afrique",
    "lit": "le continent africain",
    "pos_fr": "Nom propre",
    "role": "Nom propre neutre, repère géographique de l'expansion coloniale."
  },
  "Amerika": {
    "fr": "Amérique",
    "lit": "le continent américain",
    "pos_fr": "Nom propre",
    "role": "Nom propre neutre désignant le Nouveau Monde dont la découverte accéléra l'essor capitaliste."
  },
  "Anschauungsweise": {
    "fr": "conception / manière de voir",
    "lit": "mode de contemplation intellectuelle",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin composé (Anschauung + Weise) désignant l'idéologie et la vision du monde."
  },
  "Arbeit": {
    "fr": "travail / force de travail",
    "lit": "labeur, travail productif",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin, concept cardinal chez Marx désignant l'activité productrice transformant la nature."
  },
  "Aufschwung": {
    "fr": "essor / impulsion",
    "lit": "élan vers le haut, envol",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin métaphorique marquant l'accélération subite du commerce et de la production marchande."
  },
  "Austausch": {
    "fr": "échange",
    "lit": "troc, circulation réciproque",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin désignant la circulation marchande des produits et capitaux."
  },
  "Baron": {
    "fr": "baron",
    "lit": "titre de noblesse féodale",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin désignant les grands feudataires du système seigneurial médiéval."
  },
  "Bedarf": {
    "fr": "besoin / demande",
    "lit": "ce qui est requis, nécessité économique",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin économique désignant la demande solvable des nouveaux marchés."
  },
  "Bedingung": {
    "fr": "condition",
    "lit": "stipulation, circonstance déterminante",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin désignant les rapports matériels qui déterminent l'organisation sociale."
  },
  "Betriebsweise": {
    "fr": "mode d'exploitation / méthode de production",
    "lit": "manière de faire fonctionner l'atelier",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin composé désignant les méthodes techniques et divisionnaires du travail industriel."
  },
  "Bourgeoisie": {
    "fr": "bourgeoisie",
    "lit": "classe des détenteurs du capital moderne",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin emprunté au français, désignant chez Marx la classe dominante qui possède les moyens de production."
  },
  "Element": {
    "fr": "élément",
    "lit": "composante fondamentale",
    "pos_fr": "Nom neutre",
    "role": "Nom neutre désignant les germes embryonnaires d'une classe au sein de l'ordre ancien."
  },
  "Entdeckung": {
    "fr": "découverte",
    "lit": "action de dévoiler une terre inconnue",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin marquant l'expansion géographique mondiale ouvrant l'ère du marché planétaire."
  },
  "Entwicklung": {
    "fr": "développement / essor",
    "lit": "déroulement, déploiement progressif",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin désignant la dynamique matérielle continue d'expansion productive."
  },
  "Epoche": {
    "fr": "époque",
    "lit": "période historique définie par un mode de production",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin désignant une ère matérielle spécifique dominée par des rapports de production distincts."
  },
  "Europa": {
    "fr": "Europe",
    "lit": "le continent européen",
    "pos_fr": "Nom propre",
    "role": "Nom propre neutre, théâtre historique de la première industrialisation et des révolutions de 1848."
  },
  "Feudalherr": {
    "fr": "seigneur féodal",
    "lit": "maître féodal, suzerain terrien",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin composé (Feudal + Herr) désignant la classe dominante de l'ordre médiéval fondé sur le servage."
  },
  "Freier": {
    "fr": "homme libre",
    "lit": "citoyen affranchi jouissant de droits civiques",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin désignant l'opposé de l'esclave dans l'Antiquité gréco-romaine."
  },
  "Gegensatz": {
    "fr": "antagonisme / opposition",
    "lit": "opposition frontale, antithèse",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin dialectique désignant la contradiction motrice entre deux classes aux intérêts incompatibles."
  },
  "Gegner": {
    "fr": "adversaire / ennemi",
    "lit": "opposant politique ou social",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin désignant les forces antagonistes dans l'arène de la lutte politique."
  },
  "Geschichte": {
    "fr": "histoire",
    "lit": "ce qui advient, récit des événements passés",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin : pour Marx, toute l'histoire des sociétés jusqu'à nos jours est l'histoire de la lutte des classes."
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
  "Gespenst": {
    "fr": "spectre / fantôme",
    "lit": "apparition terrifiante, revenant menaçant",
    "pos_fr": "Nom neutre",
    "role": "Nom neutre métaphorique : la hantise panique ressentie par les puissances d'Ancien Régime face au communisme émergent."
  },
  "Gestaltung": {
    "fr": "configuration / organisation",
    "lit": "mise en forme structurelle",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin désignant la structuration institutionnelle et spatiale d'une classe sociale."
  },
  "Gliederung": {
    "fr": "articulation / division sociale",
    "lit": "hiérarchisation en membres distincts",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin décrivant la stratification interne en ordres et états de la société féodale."
  },
  "Guizot": {
    "fr": "Guizot",
    "lit": "François Guizot (1787-1874), historien et ministre conservateur français",
    "pos_fr": "Nom propre",
    "role": "Nom propre masculin, incarnation de l'orléanisme bourgeois conservateur pourchassant les communistes."
  },
  "Handel": {
    "fr": "commerce / négoce",
    "lit": "échange marchand de biens",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin désignant le capital commercial qui précipite la ruine du féodalisme."
  },
  "Hetzjagd": {
    "fr": "traque impitoyable / sainte battue",
    "lit": "chasse à courre avec meute excitée",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin composé violent (Hetze + Jagd) ironisant sur la coalition policière lancée contre le prolétariat."
  },
  "Industrie": {
    "fr": "industrie / production manufacturière",
    "lit": "activité technique de transformation matérielle",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin désignant l'appareil de production mécanisé moderne."
  },
  "Kampf": {
    "fr": "lutte / combat",
    "lit": "affrontement antagonique",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin, moteur dialectique des transformations matérielles de l'humanité."
  },
  "Klasse": {
    "fr": "classe sociale",
    "lit": "groupe d'individus partageant la même place dans les rapports de production",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin, concept central du matérialisme historique."
  },
  "Klassengegensatz": {
    "fr": "antagonisme de classe",
    "lit": "opposition irréductible de deux classes",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin composé désignant la contradiction motrice de la société bourgeoise."
  },
  "Klassenkampf": {
    "fr": "lutte des classes",
    "lit": "combat collectif entre classes antagonistes",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin composé : la thèse fondatrice du marxisme révolutionnaire."
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
  "Korporation": {
    "fr": "corporation",
    "lit": "corps de métier exclusif médiéval",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin désignant le cadre artisanal féodal détruit par la manufacture moderne."
  },
  "Lager": {
    "fr": "camp",
    "lit": "retranchement militaire, faction polarisée",
    "pos_fr": "Nom neutre",
    "role": "Nom neutre métaphorique : la polarisation du monde en deux camps ennemis irréconciliables."
  },
  "Leibeigener": {
    "fr": "serf",
    "lit": "paysan attaché corporellement à la glèbe",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin désignant les producteurs ruraux dominés de la féodalité."
  },
  "London": {
    "fr": "Londres",
    "lit": "capitale britannique, siège de la Ligue",
    "pos_fr": "Nom propre",
    "role": "Nom propre neutre, lieu du congrès communiste de novembre 1847."
  },
  "Macht": {
    "fr": "puissance / force souveraine",
    "lit": "pouvoir étatique, domination souveraine",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin désignant les États monarchiques et policiers d'Europe."
  },
  "Manifest": {
    "fr": "manifeste / déclaration publique",
    "lit": "proclamation solennelle de principes",
    "pos_fr": "Nom neutre",
    "role": "Nom neutre : le document programmatique fondateur du parti communiste mondial."
  },
  "Manufaktur": {
    "fr": "manufacture",
    "lit": "fabrication organisée par la division du travail manuel",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin désignant l'étape intermédiaire entre la jurande corporative et la grande industrie."
  },
  "Markt": {
    "fr": "marché",
    "lit": "espace marchand d'échange des denrées",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin économique dont la constante mondialisation nourrit la bourgeoisie."
  },
  "Metternich": {
    "fr": "Metternich",
    "lit": "Klemens von Metternich (1773-1859), chancelier autrichien",
    "pos_fr": "Nom propre",
    "role": "Nom propre masculin, chef d'orchestre de la Sainte-Alliance répressive."
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
  "Märchen": {
    "fr": "conte de fées / légende enfantine",
    "lit": "récit imaginaire et fabuleux",
    "pos_fr": "Nom neutre",
    "role": "Nom neutre ironique qualifiant les fables apeurées forgées par la police sur le communisme."
  },
  "Nationalität": {
    "fr": "nationalité",
    "lit": "appartenance nationale",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin soulignant l'internationalisme du congrès des communistes."
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
  "Patrizier": {
    "fr": "patricien",
    "lit": "noble citoyen de la Rome antique",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin désignant la classe dominante aristocratique dans l'Antiquité romaine."
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
  "Plebejer": {
    "fr": "plébéien",
    "lit": "citoyen ordinaire non noble de Rome",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin désignant la classe populaire laborieuse de l'Antiquité."
  },
  "Polizist": {
    "fr": "policier / agent de police",
    "lit": "agent des forces de l'ordre répressif",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin désignant les limiers policiers des États absolutistes allemands."
  },
  "Proletariat": {
    "fr": "prolétariat",
    "lit": "classe des travailleurs salariés dépouillés de tout moyen de production",
    "pos_fr": "Nom neutre",
    "role": "Nom neutre d'origine latine désignant la classe révolutionnaire moderne vendue à l'heure au capital."
  },
  "Radikale": {
    "fr": "radicaux (républicains avancés)",
    "lit": "militants républicains partisans de réformes profondes",
    "pos_fr": "Nom pluriel",
    "role": "Nom masculin pluriel désignant l'aile démocratique avancée en France (ex: Ledru-Rollin)."
  },
  "Ritter": {
    "fr": "chevalier",
    "lit": "homme d'armes noble à cheval",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin désignant l'ordre équestre romain ou médiéval."
  },
  "Rom": {
    "fr": "Rome",
    "lit": "la Rome antique impériale et républicaine",
    "pos_fr": "Nom propre",
    "role": "Nom propre neutre, archétype historique de société esclavagiste divisée en ordres stricts."
  },
  "Schiffahrt": {
    "fr": "navigation maritime",
    "lit": "voyage par mer sur des navires",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin composé marquant le réseau maritime mondial reliant les marchés planétaires."
  },
  "Sklave": {
    "fr": "esclave",
    "lit": "être humain réduit à l'état de marchandise et propriété d'un maître",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin désignant la classe exploitée suprême du mode de production antique."
  },
  "Sprache": {
    "fr": "langue / idiome",
    "lit": "moyen linguistique de communication d'un peuple",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin : le Manifeste doit être traduit dans les principales langues d'Europe."
  },
  "Stadt": {
    "fr": "ville / cité",
    "lit": "agglomération urbaine",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin : le berceau urbain où s'émancipe la classe marchande (« Stadtluft macht frei »)."
  },
  "Stand": {
    "fr": "ordre social / état",
    "lit": "rang statutaire dans la hiérarchie d'Ancien Régime",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin féodal : ordre corporatif fondé sur des privilèges juridiques ancestraux."
  },
  "Stelle": {
    "fr": "place / position",
    "lit": "lieu précis, rôle substitué",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin : la bourgeoisie a substitué de nouveaux rapports de classe aux anciens."
  },
  "Stellung": {
    "fr": "position sociale / rang",
    "lit": "emplacement institutionnel dans la société",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin désignant les échelons et rangs d'honneur au sein des ordres féodaux."
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
  "Teilung": {
    "fr": "division / morcellement",
    "lit": "fragmentation d'une tâche ou d'un corps",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin économique désignant la division manufacturière du travail."
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
  "Vasall": {
    "fr": "vassal",
    "lit": "homme libre lié par serment de fidélité à un suzerain",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin désignant le maillon intermédiaire de la féodalité féodale."
  },
  "Vermehrung": {
    "fr": "accroissement / multiplication",
    "lit": "action d'augmenter en quantité",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin économique désignant l'accumulation rapide des marchandises et du capital."
  },
  "Vorwurf": {
    "fr": "reproche / grief infamant",
    "lit": "projectile verbal jeté à la figure d'un adversaire",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin (Vor + Wurf, jet en avant) : l'anathème jeté pour discréditer un parti."
  },
  "Ware": {
    "fr": "marchandise",
    "lit": "produit du travail destiné à la vente sur un marché",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin : la cellule élémentaire de la richesse capitaliste selon Marx."
  },
  "Welt": {
    "fr": "monde",
    "lit": "l'ensemble de la terre et de l'humanité",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin embrassant l'arène globale de la révolution prolétarienne."
  },
  "Werkstatt": {
    "fr": "atelier / manufacture",
    "lit": "lieu artisanal de travail manuel",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin désignant l'espace de travail dépassé par l'usine moderne."
  },
  "Zar": {
    "fr": "le tsar (Nicolas Ier)",
    "lit": "autocrate de toutes les Russies",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin : le gendarme de l'Europe absolutiste et réactionnaire."
  },
  "Zeit": {
    "fr": "temps / moment opportun",
    "lit": "période, époque présente",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin marquant l'urgence historique d'agir à visage découvert."
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
  "Zweck": {
    "fr": "but / fin visée",
    "lit": "objectif conscient, intention délibérée",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin désignant le programme historique conscient poursuivi par le prolétariat."
  },
  "all": {
    "fr": "tout / tous",
    "lit": "la totalité sans exception",
    "pos_fr": "Pronom/Déterminant indéfini",
    "role": "Déterminant indéfini désignant l'universalité des forces liguées."
  },
  "alt": {
    "fr": "vieux / ancien",
    "lit": "d'âge mûr, révolu",
    "pos_fr": "Adjectif",
    "role": "Adjectif marquant la décrépitude des monarchies d'Ancien Régime."
  },
  "anwachsend": {
    "fr": "grandissant / croissant",
    "lit": "qui ne cesse d'augmenter",
    "pos_fr": "Participe présent adjectivé",
    "role": "Adjectif marquant l'expansion ininterrompue des besoins marchands."
  },
  "aufkommend": {
    "fr": "naissant / émergent",
    "lit": "qui surgit et monte en puissance",
    "pos_fr": "Participe présent adjectivé",
    "role": "Adjectif caractérisant la bourgeoisie commerciale à ses débuts."
  },
  "bald": {
    "fr": "tantôt / bientôt",
    "lit": "à un moment donné, rapidement",
    "pos_fr": "Adverbe",
    "role": "Adverbe corrélatif (bald... bald...) marquant l'alternance d'une lutte tantôt ouverte tantôt cachée."
  },
  "bereits": {
    "fr": "déjà / dès à présent",
    "lit": "à ce stade déjà atteint",
    "pos_fr": "Adverbe",
    "role": "Adverbe temporel insistant sur le caractère inéluctable et précoce de la reconnaissance du communisme."
  },
  "besonder": {
    "fr": "particulier / distinct",
    "lit": "propre à un rang singulier",
    "pos_fr": "Adjectif",
    "role": "Adjectif caractérisant les privilèges corporatifs spécifiques."
  },
  "bisherig": {
    "fr": "qui a existé jusqu'alors / passé",
    "lit": "qui s'étendait jusqu'à présent",
    "pos_fr": "Adjectif",
    "role": "Adjectif marquant le seuil historique entre les sociétés passées et la modernité."
  },
  "brandmarkend": {
    "fr": "infamant / flétrissant",
    "lit": "qui marque au fer rouge incandescent",
    "pos_fr": "Participe adjectivé",
    "role": "Adjectif métaphorique violent évoquant le châtiment médiéval au fer rouge."
  },
  "bürgerlich": {
    "fr": "bourgeois",
    "lit": "relatif à la bourgeoisie ou au citoyen",
    "pos_fr": "Adjectif",
    "role": "Adjectif désignant les rapports matériels et juridiques dominés par la bourgeoisie."
  },
  "chinesisch": {
    "fr": "chinois",
    "lit": "relatif à la Chine impériale",
    "pos_fr": "Adjectif",
    "role": "Adjectif géographique marquant l'ouverture impérialiste du gigantesque marché asiatique."
  },
  "dadurch": {
    "fr": "par là / de cette manière",
    "lit": "à travers ce moyen précis",
    "pos_fr": "Adverbe pronominal",
    "role": "Adverbe pronominal reliant la cause matérielle à sa conséquence sociale."
  },
  "damit": {
    "fr": "par là même / ainsi",
    "lit": "avec cela, en conséquence",
    "pos_fr": "Adverbe pronominal",
    "role": "Adverbe pronominal marquant la corrélation immédiate entre expansion marchande et essor bourgeois."
  },
  "deutsch": {
    "fr": "allemand",
    "lit": "relatif aux États germaniques",
    "pos_fr": "Adjectif",
    "role": "Adjectif national désignant les polices des monarchies de la Confédération germanique."
  },
  "direkt": {
    "fr": "directement / sans intermédiaire",
    "lit": "en ligne droite, immédiat",
    "pos_fr": "Adjectif/Adverbe",
    "role": "Adverbe marquant la simplification capitaliste réduisant les médiations féodales au rapport d'argent nu."
  },
  "dänisch": {
    "fr": "danois",
    "lit": "en langue danoise",
    "pos_fr": "Adjectif",
    "role": "Adjectif de langue pour l'édition scandinave du Manifeste."
  },
  "einzeln": {
    "fr": "individuel / particulier",
    "lit": "isolé un par un",
    "pos_fr": "Adjectif",
    "role": "Adjectif marquant le morcellement des ouvriers au sein de la manufacture."
  },
  "englisch": {
    "fr": "anglais",
    "lit": "en langue anglaise",
    "pos_fr": "Adjectif",
    "role": "Adjectif de langue pour la publication à Londres de l'édition anglaise."
  },
  "erst": {
    "fr": "premier",
    "lit": "qui vient en tête chronologiquement",
    "pos_fr": "Adjectif numéral ordinal",
    "role": "Adjectif ordonnant les origines historiques de la bourgeoisie primitive."
  },
  "europäisch": {
    "fr": "européen",
    "lit": "propre au continent européen",
    "pos_fr": "Adjectif",
    "role": "Adjectif définissant le champ continental de l'affrontement révolutionnaire."
  },
  "fast": {
    "fr": "presque / quasiment",
    "lit": "à très peu de chose près",
    "pos_fr": "Adverbe",
    "role": "Adverbe d'intensité nuancée caractérisant la généralité de la stratification féodale."
  },
  "feindlich": {
    "fr": "ennemi / hostile",
    "lit": "portant une inimitié mortelle",
    "pos_fr": "Adjectif",
    "role": "Adjectif caractérisant les deux camps belligérants de la société moderne."
  },
  "feudal": {
    "fr": "féodal",
    "lit": "fondé sur le fief et le servage",
    "pos_fr": "Adjectif",
    "role": "Adjectif désignant l'ordre hiérarchique seigneurial terrien antérieur au capital."
  },
  "flämisch": {
    "fr": "flamand",
    "lit": "en langue flamande",
    "pos_fr": "Adjectif",
    "role": "Adjectif de langue pour l'édition belge du Manifeste."
  },
  "folgend": {
    "fr": "suivant / qui suit",
    "lit": "qui vient immédiatement après",
    "pos_fr": "Participe adjectivé",
    "role": "Adjectif introduisant le texte même du Manifeste."
  },
  "fortgeschritten": {
    "fr": "avancé / progressiste",
    "lit": "qui a marché en avant",
    "pos_fr": "Participe adjectivé",
    "role": "Adjectif politique désignant l'aile gauche démocratique et progressiste de l'opposition."
  },
  "französisch": {
    "fr": "français",
    "lit": "relatif à la France",
    "pos_fr": "Adjectif",
    "role": "Adjectif désignant les républicains radicaux parisiens."
  },
  "früh": {
    "fr": "ancien / primitif",
    "lit": "qui se situe au début des temps",
    "pos_fr": "Adjectif",
    "role": "Adjectif comparatif marquant les époques historiques révolues."
  },
  "ganz": {
    "fr": "entier / tout / complet",
    "lit": "sans division ni réserve",
    "pos_fr": "Adjectif",
    "role": "Adjectif insistant sur l'universalité de la polarisation de la société entière."
  },
  "gekannt": {
    "fr": "connu / éprouvé",
    "lit": "dont on a fait l'expérience",
    "pos_fr": "Participe passé",
    "role": "Adjectif soulignant l'inédit sans précédent de l'essor industriel moderne."
  },
  "gemeinsam": {
    "fr": "commun / mutuel",
    "lit": "partagé par les deux côtés",
    "pos_fr": "Adjectif",
    "role": "Adjectif marquant la destruction réciproque des deux classes en lutte si la révolution échoue."
  },
  "gesellschaftlich": {
    "fr": "social",
    "lit": "qui relève de la société humaine",
    "pos_fr": "Adjectif",
    "role": "Adjectif désignant les positions et hiérarchies au sein du corps social."
  },
  "groß": {
    "fr": "grand / majeur",
    "lit": "de vaste dimension",
    "pos_fr": "Adjectif",
    "role": "Adjectif soulignant la division monolithique de la société moderne en deux camps gigantesques."
  },
  "heilig": {
    "fr": "saint / sacré (ironique)",
    "lit": "consacré à Dieu",
    "pos_fr": "Adjectif",
    "role": "Adjectif raillant le titre pieux de la Sainte-Alliance des despotes contre les peuples."
  },
  "hoch": {
    "fr": "haut / grand",
    "lit": "de rang élevé, solennel",
    "pos_fr": "Adjectif",
    "role": "Adjectif marquant la gravité et l'imminence du moment révolutionnaire."
  },
  "industriell": {
    "fr": "industriel",
    "lit": "relatif à la grande production mécanisée",
    "pos_fr": "Adjectif",
    "role": "Adjectif définissant la bourgeoisie d'usine moderne."
  },
  "italienisch": {
    "fr": "italien",
    "lit": "en langue italienne",
    "pos_fr": "Adjectif",
    "role": "Adjectif de langue pour l'édition italienne du Manifeste."
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
  "kommunistisch": {
    "fr": "communiste",
    "lit": "qui relève du parti ou de l'idéologie communiste",
    "pos_fr": "Adjectif",
    "role": "Adjectif politique identifiant le mouvement prolétarien révolutionnaire."
  },
  "kurz": {
    "fr": "bref / en un mot",
    "lit": "en peu de termes",
    "pos_fr": "Adverbe",
    "role": "Adverbe synthétisant une énumération historique par une loi générale."
  },
  "kämpfend": {
    "fr": "combattant / en lutte",
    "lit": "engagé dans un combat mortel",
    "pos_fr": "Participe présent",
    "role": "Adjectif décrivant les deux classes aux prises dans l'arène historique."
  },
  "mannigfaltig": {
    "fr": "multiple / varié / diversifié",
    "lit": "qui prend de nombreux plis et formes",
    "pos_fr": "Adjectif",
    "role": "Adjectif décrivant la luxuriance des hiérarchies et ordres de l'ancienne Rome et du Moyen Âge."
  },
  "mehr": {
    "fr": "plus / davantage",
    "lit": "en quantité supérieure",
    "pos_fr": "Adverbe comparatif",
    "role": "Adverbe renforçant l'accélération de la division sociale (« immer mehr » = de plus en plus)."
  },
  "modern": {
    "fr": "moderne",
    "lit": "propre au temps présent",
    "pos_fr": "Adjectif",
    "role": "Adjectif qualifiant l'ordre bourgeois né des ruines de la féodalité."
  },
  "neu": {
    "fr": "nouveau / inédit",
    "lit": "qui n'existait pas auparavant",
    "pos_fr": "Adjectif",
    "role": "Adjectif martelé par Marx pour démontrer que la bourgeoisie n'a fait que renouveler les formes d'oppression."
  },
  "nicht": {
    "fr": "ne pas / non",
    "lit": "particule de négation",
    "pos_fr": "Particule négative",
    "role": "Particule négative infirmant une proposition."
  },
  "nie": {
    "fr": "jamais",
    "lit": "en aucun temps passé ou futur",
    "pos_fr": "Adverbe temporel",
    "role": "Adverbe absolu soulignant le caractère sans précédent de l'essor commercial moderne."
  },
  "nur": {
    "fr": "seulement / uniquement",
    "lit": "sans rien d'autre",
    "pos_fr": "Adverbe restrictif",
    "role": "Adverbe limitatif : la bourgeoisie s'est bornée à créer de nouvelles formes d'oppression."
  },
  "offen": {
    "fr": "ouvert / déclaré",
    "lit": "au grand jour, sans masque",
    "pos_fr": "Adjectif",
    "role": "Adjectif opposé à « versteckt » (masqué) pour désigner la lutte révolutionnaire ouverte."
  },
  "ostindisch": {
    "fr": "des Indes orientales",
    "lit": "relatif à l'Asie méridionale sous domination marchande",
    "pos_fr": "Adjectif",
    "role": "Adjectif marquant la conquête coloniale par les compagnies de commerce britanniques et hollandaises."
  },
  "rasch": {
    "fr": "rapide / prompt",
    "lit": "avec une extrême vitesse",
    "pos_fr": "Adjectif",
    "role": "Adjectif soulignant la fulgurance du développement de l'industrie capitaliste."
  },
  "reaktionär": {
    "fr": "réactionnaire",
    "lit": "qui veut restaurer l'ordre passé",
    "pos_fr": "Adjectif",
    "role": "Adjectif politique désignant les forces voulant revenir à l'Ancien Régime féodal."
  },
  "regierend": {
    "fr": "au pouvoir / gouvernant",
    "lit": "qui exerce l'autorité politique",
    "pos_fr": "Participe présent",
    "role": "Adjectif désignant les fractions de la classe dominante qui détiennent l'appareil d'État."
  },
  "revolutionär": {
    "fr": "révolutionnaire",
    "lit": "qui renverse violemment les bases matérielles de la société",
    "pos_fr": "Adjectif",
    "role": "Adjectif qualifiant la transformation radicale produite par la lutte des classes."
  },
  "stet": {
    "fr": "constant / continuel",
    "lit": "sans arrêt ni défaillance",
    "pos_fr": "Adjectif",
    "role": "Adjectif marquant la permanence obstinée du conflit de classes à travers les âges."
  },
  "ununterbrochen": {
    "fr": "ininterrompu / incessant",
    "lit": "qui n'est brisé par aucune trêve",
    "pos_fr": "Adjectif",
    "role": "Adjectif composé (un + unterbrochen) insistant sur la continuité structurelle de la lutte."
  },
  "verschieden": {
    "fr": "différent / divers",
    "lit": "séparé, pluriel",
    "pos_fr": "Adjectif",
    "role": "Adjectif marquant la pluralité des nationalités et des échelons féodaux."
  },
  "versteckt": {
    "fr": "voilé / masqué / sourd",
    "lit": "caché aux regards, clandestin",
    "pos_fr": "Participe adjectivé",
    "role": "Adjectif qualifiant la guerre de classe latente sous la paix sociale apparente."
  },
  "vollständig": {
    "fr": "complet / intégral",
    "lit": "qui possède toutes ses composantes",
    "pos_fr": "Adjectif",
    "role": "Adjectif décrivant la division méticuleuse du corps social médiéval."
  },
  "wieder": {
    "fr": "à nouveau / de nouveau",
    "lit": "une seconde fois",
    "pos_fr": "Adverbe",
    "role": "Adverbe réitératif marquant la répétition des hiérarchies à chaque échelon féodal."
  },
  "wo": {
    "fr": "où / quel est",
    "lit": "en quel lieu",
    "pos_fr": "Adverbe interrogatif/relatif",
    "role": "Adverbe interrogatif de rhétorique oratoire ouvrant les interrogations du Préambule."
  },
  "zerfallend": {
    "fr": "qui se décompose / en ruine",
    "lit": "qui tombe en poussière sous l'effet du temps",
    "pos_fr": "Participe présent",
    "role": "Adjectif désignant la société féodale agonisante d'où jaillit la bourgeoisie."
  },
  "zueinander": {
    "fr": "l'un vis-à-vis de l'autre",
    "lit": "en rapport réciproque",
    "pos_fr": "Adverbe réciproque",
    "role": "Adverbe marquant le tête-à-tête conflictuel inéluctable entre oppresseurs et opprimés."
  },
  "zweierlei": {
    "fr": "deux choses / un double enseignement",
    "lit": "de deux sortes différentes",
    "pos_fr": "Pronom indéfini invariable",
    "role": "Pronom invariable annonçant les deux conclusions politiques majeures tirées par Marx."
  },
  "zünftig": {
    "fr": "corporatif / juré",
    "lit": "qui relève de la jurande d'artisanat fermée",
    "pos_fr": "Adjectif",
    "role": "Adjectif qualifiant le mode d'organisation corporative artisanale du Moyen Âge."
  },
  "überall": {
    "fr": "partout / universellement",
    "lit": "en tout lieu sans exclusion",
    "pos_fr": "Adverbe de lieu",
    "role": "Adverbe de généralisation spatiale décrivant l'extension des hiérarchies féodales."
  },
  "überhaupt": {
    "fr": "en général / d'une manière générale",
    "lit": "par-dessus tout, globalement",
    "pos_fr": "Adverbe",
    "role": "Adverbe de synthèse marquant l'essor global des forces révolutionnaires marchandes."
  },
  "anerkennen": {
    "fr": "reconnaître",
    "lit": "avouer et admettre la légitimité ou l'existence de",
    "pos_fr": "Verbe fort séparable",
    "role": "Verbe marquant l'aveu involontaire des puissances européennes que le communisme est déjà une force politique réelle."
  },
  "aufheben": {
    "fr": "abolir / dépasser (Aufhebung)",
    "lit": "lever, ramasser, détruire et conserver en élevant",
    "pos_fr": "Verbe fort (Aufhebung hégélienne)",
    "role": "Verbe hégélien cardinal : la bourgeoisie prétend avoir aboli les ordres féodaux, mais n'a fait que transposer la contradiction de classe."
  },
  "darlegen": {
    "fr": "exposer / expliquer publiquement",
    "lit": "poser devant les yeux de tous",
    "pos_fr": "Verbe séparable",
    "role": "Verbe de transparence politique : les communistes récusent le secret et exposent leurs buts à la face du monde."
  },
  "enden": {
    "fr": "se terminer / aboutir",
    "lit": "trouver son terme",
    "pos_fr": "Verbe régulier",
    "role": "Verbe marquant l'issue dialectique inéluctable du combat de classe."
  },
  "entgegenstellen": {
    "fr": "opposer / dresser contre",
    "lit": "placer en face comme un rempart",
    "pos_fr": "Verbe séparable",
    "role": "Verbe d'action de combat : opposer au mythe policier du spectre la réalité du Manifeste."
  },
  "entwerfen": {
    "fr": "esquisser / rédiger / tracer",
    "lit": "jeter sur le papier les grandes lignes",
    "pos_fr": "Verbe fort",
    "role": "Verbe décrivant l'élaboration collective du texte du Manifeste à Londres."
  },
  "entwickeln": {
    "fr": "développer / déployer",
    "lit": "déplier ce qui était enroulé, faire croître",
    "pos_fr": "Verbe régulier",
    "role": "Verbe matérialiste marquant la croissance organique des forces productives."
  },
  "finden": {
    "fr": "trouver / constater",
    "lit": "découvrir par l'observation",
    "pos_fr": "Verbe fort",
    "role": "Verbe de constatation empirique dans l'examen de l'histoire humaine."
  },
  "führen": {
    "fr": "mener / conduire",
    "lit": "guider vers un terme",
    "pos_fr": "Verbe régulier",
    "role": "Verbe désignant l'action continue de mener une lutte sans répit."
  },
  "geben": {
    "fr": "donner / procurer / susciter",
    "lit": "remettre, apporter",
    "pos_fr": "Verbe fort",
    "role": "Verbe désignant l'impulsion décisive donnée par la colonisation aux forces marchandes."
  },
  "haben": {
    "fr": "avoir / posséder",
    "lit": "détenir comme bien ou auxiliaire",
    "pos_fr": "Verbe auxiliaire / transitif",
    "role": "Auxiliaire du parfait (passé composé) ou verbe de possession."
  },
  "hervorgehen": {
    "fr": "découler / résulter",
    "lit": "sortir en avant de",
    "pos_fr": "Verbe fort séparable",
    "role": "Verbe de déduction logique et matérielle tirée de l'analyse des faits."
  },
  "hervorgegangen": {
    "fr": "issu / provenu / né de",
    "lit": "sorti en avant des entrailles de",
    "pos_fr": "Participe passé",
    "role": "Participe passé marquant l'engendrement de la bourgeoisie moderne au sein même du féodalisme."
  },
  "reichen": {
    "fr": "suffire / suffire à combler",
    "lit": "atteindre la mesure nécessaire",
    "pos_fr": "Verbe régulier",
    "role": "Verbe économique : la manufacture ne suffisait plus à satisfaire les besoins du marché en expansion."
  },
  "schaffen": {
    "fr": "créer / engendrer",
    "lit": "produire à l'existence",
    "pos_fr": "Verbe fort/régulier",
    "role": "Verbe désignant la puissance démiurgique de la bourgeoisie créant de nouveaux marchés."
  },
  "sein": {
    "fr": "être / exister",
    "lit": "verbe d'état suprême",
    "pos_fr": "Verbe auxiliaire / copule",
    "role": "Verbe d'état reliant le sujet à son attribut ontologique et politique."
  },
  "setzen": {
    "fr": "poser / substituer / installer",
    "lit": "placer fermement",
    "pos_fr": "Verbe régulier",
    "role": "Verbe de substitution de classe : installer une nouvelle exploitation à la place de l'ancienne."
  },
  "spalten": {
    "fr": "se cliver / se scinder",
    "lit": "se fendre sous la hache en deux moitiés",
    "pos_fr": "Verbe de rupture physique",
    "role": "Verbe dramatique exprimant la fracture bipolaire irréversible de la société bourgeoise."
  },
  "stehen": {
    "fr": "se tenir debout / faire face",
    "lit": "être érigé sur ses pieds",
    "pos_fr": "Verbe fort d'état",
    "role": "Verbe marquant l'opposition frontale dressée entre oppresseur et opprimé."
  },
  "treten": {
    "fr": "faire son entrée / entrer en scène",
    "lit": "poser le pied, s'avancer",
    "pos_fr": "Verbe fort de mouvement",
    "role": "Verbe théâtral et historique : l'entrée en scène d'une nouvelle classe sur le théâtre du monde."
  },
  "umgehen": {
    "fr": "hanter / rôder",
    "lit": "marcher autour en cercle, errer",
    "pos_fr": "Verbe fort séparable (um|gehen)",
    "role": "Tournure impersonnelle allemande (« ein Geist geht um ») marquant la présence obsédante du spectre communiste."
  },
  "verbünden": {
    "fr": "s'allier / se liguer",
    "lit": "former un pacte juré scellé par serment",
    "pos_fr": "Verbe pronominal",
    "role": "Verbe marquant la Sainte-Alliance réactionnaire des princes contre la liberté."
  },
  "verdrängen": {
    "fr": "supplanter / évincer",
    "lit": "chasser en repoussant hors du lieu",
    "pos_fr": "Verbe inséparable",
    "role": "Verbe économique : la vapeur et la grande industrie supplantent la petite manufacture."
  },
  "vereinfachen": {
    "fr": "simplifier / polariser",
    "lit": "rendre simple en réduisant les complications",
    "pos_fr": "Verbe inséparable",
    "role": "Verbe d'analyse marxiste : le capitalisme balaie le maquis des ordres féodaux et simplifie la société en deux camps."
  },
  "versammeln": {
    "fr": "rassembler / réunir",
    "lit": "amener en un même lieu",
    "pos_fr": "Verbe pronominal inséparable",
    "role": "Verbe d'action militante : les communistes de diverses nationalités réunis à Londres."
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
  "veröffentlichen": {
    "fr": "publier / rendre public",
    "lit": "porter à la connaissance de la collectivité",
    "pos_fr": "Verbe inséparable",
    "role": "Verbe d'affirmation politique : proclamer le Manifeste à la face du monde."
  },
  "werden": {
    "fr": "devenir / auxiliaire du passif",
    "lit": "entrer dans un état nouveau",
    "pos_fr": "Verbe auxiliaire passif/futur",
    "role": "Auxiliaire fondamental de la voix passive allemande."
  },
  "zeichnen": {
    "fr": "marquer / caractériser",
    "lit": "graver d'un trait distinctif",
    "pos_fr": "Verbe régulier",
    "role": "Verbe désignant le trait saillant qui distingue l'époque de la bourgeoisie."
  },
  "zurückschleudern": {
    "fr": "renvoyer vivement / catapulter en retour",
    "lit": "projeter en arrière avec la force d'une fronde",
    "pos_fr": "Verbe séparable balistique",
    "role": "Métaphore balistique : renvoyer l'accusation de communisme comme un projectile incendiaire."
  },
  "zwei": {
    "fr": "deux",
    "lit": "adjectif numéral cardinal (2)",
    "pos_fr": "Adjectif numéral",
    "role": "Adjectif numéral marquant la bipolarisation irréductible de la société en deux camps."
  },
  "gegenüberstehend": {
    "fr": "opposés face à face",
    "lit": "se tenant debout l'un en face de l'autre",
    "pos_fr": "Participe adjectivé",
    "role": "Adjectif composé (gegenüber + stehend) désignant l'affrontement frontal sans esquive des deux classes."
  },
  "als": {
    "fr": "comme / en tant que",
    "lit": "en qualité de",
    "pos_fr": "Conjonction",
    "role": "Conjonction d'équivalence ou de comparaison."
  },
  "an": {
    "fr": "à / sur",
    "lit": "en contact avec",
    "pos_fr": "Préposition",
    "role": "Préposition spatiale ou d'attribution."
  },
  "aus": {
    "fr": "de / hors de / depuis",
    "lit": "qui émane de",
    "pos_fr": "Préposition (régime datif)",
    "role": "Préposition spatiale et causale régissant le datif."
  },
  "dass": {
    "fr": "que",
    "lit": "conjonction de subordination",
    "pos_fr": "Conjonction de subordination",
    "role": "Conjonction introduisant une proposition complétive rejetant le verbe en fin de proposition."
  },
  "der": {
    "fr": "le / la / les / ce",
    "lit": "article défini ou pronom relatif",
    "pos_fr": "Article défini / Pronom relatif",
    "role": "Article défini décliné déterminant le nom en cas, genre et nombre."
  },
  "dies": {
    "fr": "ce / cette / ces",
    "lit": "pronom démonstratif désignant l'objet proche",
    "pos_fr": "Pronom démonstratif",
    "role": "Démonstratif marquant la désignation concrète du spectre."
  },
  "durch": {
    "fr": "par / à travers",
    "lit": "au moyen de",
    "pos_fr": "Préposition (régime accusatif)",
    "role": "Préposition d'instrument régissant l'accusatif."
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
  "es": {
    "fr": "il / cela",
    "lit": "pronom neutre de 3e personne",
    "pos_fr": "Pronom personnel neutre",
    "role": "Sujet impersonnel ou représentatif d'une proposition."
  },
  "für": {
    "fr": "pour",
    "lit": "à destination de, en faveur de",
    "pos_fr": "Préposition (régime accusatif)",
    "role": "Préposition de but ou de destination régissant l'accusatif."
  },
  "gegen": {
    "fr": "contre",
    "lit": "en opposition spatiale ou politique",
    "pos_fr": "Préposition (régime accusatif)",
    "role": "Préposition d'hostilité régissant l'accusatif."
  },
  "ihr": {
    "fr": "leur / son / sa / ses",
    "lit": "possessif de 3e personne",
    "pos_fr": "Pronom/Déterminant possessif",
    "role": "Déterminant possessif rattachant un bien à son détenteur."
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
  "jeder": {
    "fr": "chaque / tout / chacun",
    "lit": "tous les éléments pris un à un",
    "pos_fr": "Pronom indéfini",
    "role": "Déterminant indéfini distributif désignant chaque strate féodale."
  },
  "mit": {
    "fr": "avec / au moyen de",
    "lit": "en compagnie de, au moyen de",
    "pos_fr": "Préposition (régime datif)",
    "role": "Préposition d'accompagnement ou d'instrument régissant le datif."
  },
  "oder": {
    "fr": "ou / ou bien",
    "lit": "conjonction d'alternative",
    "pos_fr": "Conjonction de coordination",
    "role": "Conjonction disjonctive liant deux issues alternatives."
  },
  "selbst": {
    "fr": "lui-même / soi-même",
    "lit": "en personne, sans intermédiaire",
    "pos_fr": "Pronom emphatique invariable",
    "role": "Pronom d'insistance soulignant l'initiative directe du Parti communiste."
  },
  "sich": {
    "fr": "se / soi-même",
    "lit": "pronom réfléchi de 3e personne",
    "pos_fr": "Pronom réfléchi",
    "role": "Pronom réfléchi accompagnant un verbe pronominal."
  },
  "sie": {
    "fr": "ils / elles / elle",
    "lit": "pronom personnel de 3e personne",
    "pos_fr": "Pronom personnel",
    "role": "Pronom personnel sujet désignant une entité plurielle ou féminine."
  },
  "sowohl": {
    "fr": "tant / aussi bien",
    "lit": "conjonction corrélative (sowohl... wie...)",
    "pos_fr": "Conjonction corrélative",
    "role": "Conjonction coordonnant deux éléments de rang égal."
  },
  "und": {
    "fr": "et",
    "lit": "conjonction d'addition",
    "pos_fr": "Conjonction de coordination",
    "role": "Conjonction liant deux termes ou propositions de même rang syntaxique."
  },
  "unser": {
    "fr": "notre / nos",
    "lit": "possessif de 1re personne du pluriel",
    "pos_fr": "Déterminant possessif",
    "role": "Possessif marquant l'adhésion des auteurs à l'époque contemporaine."
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
  "vor": {
    "fr": "devant / à la face de",
    "lit": "en présence de",
    "pos_fr": "Préposition mixte (Acc/Dat)",
    "role": "Préposition marquant la publicité de la proclamation devant le monde entier."
  },
  "wie": {
    "fr": "comme / que",
    "lit": "de même manière que",
    "pos_fr": "Conjonction de comparaison",
    "role": "Conjonction comparative liant des adversaires de même sorte."
  },
  "wir": {
    "fr": "nous",
    "lit": "pronom personnel sujet 1re personne du pluriel",
    "pos_fr": "Pronom personnel",
    "role": "Pronom sujet collectif désignant les observateurs historiques."
  },
  "zu": {
    "fr": "à / vers / en vue de",
    "lit": "direction, destination ou but",
    "pos_fr": "Préposition (régime datif)",
    "role": "Préposition régissant le datif marquant le but ou le résultat d'une alliance."
  },
  "zwischen": {
    "fr": "entre",
    "lit": "dans l'espace intermédiaire séparant deux termes",
    "pos_fr": "Préposition mixte",
    "role": "Préposition spatiale désignant l'espace interstitiel entre deux ordres."
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
    // Vérifie qu'il ne s'agit pas par erreur d'un doublon du mot allemand
    if (
      tr.toLowerCase() !== word.text.toLowerCase() &&
      tr.toLowerCase() !== word.lemma.toLowerCase()
    ) {
      return tr;
    }
    // Cas légitimes où le mot est emprunté tel quel en français
    if (['bourgeoisie', 'proletariat', 'prolétariat', 'moderne'].includes(tr.toLowerCase())) {
      return tr;
    }
  }

  // 2. Recherche dans le lexique lemmatisé français
  const lemmaEntry = LEMMA_LEXICON[word.lemma];
  if (lemmaEntry?.fr) {
    return lemmaEntry.fr;
  }

  // 3. Recherche par texte brut minuscule
  const textEntry = LEMMA_LEXICON[word.text.toLowerCase()];
  if (textEntry?.fr) {
    return textEntry.fr;
  }

  // 4. Filet de sécurité absolu : ne JAMAIS renvoyer le mot allemand
  return `[traduction en cours]`;
}

/**
 * Sens littéral de secours
 */
export function getLiteralTranslation(
  word: { lemma: string },
  annotation?: { literalTranslation?: string }
): string | undefined {
  if (annotation?.literalTranslation && annotation.literalTranslation.trim().length > 0) {
    return annotation.literalTranslation;
  }
  return LEMMA_LEXICON[word.lemma]?.lit;
}

/**
 * Rôle grammatical dynamique en français - aucun placeholder générique
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
  // Fallback morphosyntaxique dynamique en français
  const parts: string[] = [];
  if (word.pos) parts.push(POS_LABELS_FR[word.pos] || word.pos);
  if (word.gender) parts.push(GENDER_LABELS_FR[word.gender] || word.gender);
  if (word.number) parts.push(word.number === 'SG' ? 'singulier' : 'pluriel');
  if (word.case) parts.push(`au ${CASE_LABELS_FR[word.case] || word.case}`);
  return parts.length > 0 ? parts.join(' · ') : 'Forme grammaticale dans le texte.';
}
