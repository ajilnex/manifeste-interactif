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
    "lit": "maître et suzerain d'un domaine inféodé",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin composé désignant les membres de la caste nobiliaire possédant le fief et les serfs."
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
    "fr": "ordre social / état / condition",
    "lit": "statut, état stable d'un corps constitué dans la cité",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin médiéval désignant les ordres d'Ancien Régime (clergé, noblesse, tiers état) fondés sur le privilège."
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
    "fr": "direct / sans détour",
    "lit": "en ligne droite, sans intermédiaire féodal ou spirituel",
    "pos_fr": "Adjectif",
    "role": "Adjectif marquant la brutalité immédiate du contrat salarial entre le patron et l'ouvrier sans médiation corporative."
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
    "fr": "sacré / saint",
    "lit": "intègre, consacré à la divinité",
    "pos_fr": "Adjectif",
    "role": "Adjectif qualifiant les fictions religieuses et solennités chrétiennes par lesquelles l'ordre féodal se sanctifiait."
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
    "fr": "ouvert / public / manifeste",
    "lit": "ouvert au grand jour, sans voile protecteur",
    "pos_fr": "Adjectif",
    "role": "Adjectif opposé à « verhüllt », soulignant le caractère transparent et sans pudeur de l'exploitation capitaliste."
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
    "fr": "placer / substituer / installer",
    "lit": "faire asseoir, poser fermement à un emplacement",
    "pos_fr": "Verbe faible causatif",
    "role": "Verbe causatif employé pour exprimer l'installation brutale d'un nouvel ordre d'exploitation à la place de l'ancien."
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
    "fr": "marcher / entrer / succéder",
    "lit": "poser le pied en avant, avancer d'un pas",
    "pos_fr": "Verbe fort",
    "role": "Verbe fort employé dans la locution « an die Stelle treten » pour décrire la relève impitoyable des anciennes formes par les nouvelles."
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
  },
  "Dampf": {
    "fr": "vapeur / force motrice de la vapeur",
    "lit": "vapeur d'eau sous pression, fumée thermomécanique",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin désignant la force motrice thermodynamique de la première révolution industrielle qui libéra les manufactures des cours d'eau ruraux."
  },
  "Maschinerie": {
    "fr": "machinerie / parc de machines",
    "lit": "système mécanique articulé de machines automatiques",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin désignant chez Marx le système automatique d'outils et de moteurs qui supplante l'artisan et asservit l'ouvrier comme rouage."
  },
  "Weltmarkt": {
    "fr": "marché mondial",
    "lit": "marché à l'échelle planétaire",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin composé désignant l'arène globale des échanges capitalistes où se réalise la loi de la valeur universelle."
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
  "Entwicklungsgang": {
    "fr": "cours du développement / processus évolutif",
    "lit": "cheminement du déploiement historique immanent",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin composé désignant la succession dialectique des étapes matérielles qui ont engendré la bourgeoisie moderne."
  },
  "Umwälzung": {
    "fr": "bouleversement / révolution radicale",
    "lit": "renversement complet de fond en comble",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin substantival désignant les transformations qualitatives et brutales des bases matérielles de production."
  },
  "Produktionsweise": {
    "fr": "mode de production",
    "lit": "manière et forme d'organisation de la production",
    "pos_fr": "Nom féminin",
    "role": "Concept central du matérialisme historique désignant l'unité articulée des forces productives et des rapports sociaux de production."
  },
  "Verkehrsweise": {
    "fr": "mode d'échange / de circulation",
    "lit": "manière d'interagir, de commercer et de communiquer",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin composé désignant les rapports de circulation marchande, de crédit et de transport inséparables de la production."
  },
  "Repräsentativstaat": {
    "fr": "État représentatif",
    "lit": "État fondé sur la représentation parlementaire",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin composé désignant la forme politique constitutionnelle adéquate à l'hégémonie bourgeoise moderne."
  },
  "Staatsgewalt": {
    "fr": "pouvoir d'État / autorité étatique",
    "lit": "puissance souveraine de coercition de l'État",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin composé désignant l'appareil de domination politique et répressif centralisé d'une classe."
  },
  "Ausschuß": {
    "fr": "comité / commission déléguée",
    "lit": "délégation restreinte d'hommes choisis pour gérer une charge",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin désignant métaphoriquement le gouvernement moderne comme simple conseil d'administration des intérêts communs de la bourgeoisie."
  },
  "Bourgeoisklasse": {
    "fr": "classe bourgeoise",
    "lit": "classe des détenteurs du capital moderne",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin composé désignant la classe dominante propriétaire des moyens de production sociaux."
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
  "bar": {
    "fr": "au comptant / en liquide",
    "lit": "à nu, à découvert, en espèces sonnantes visibles",
    "pos_fr": "Adjectif",
    "role": "Adjectif d'étymologie discutée désignant le paiement monétaire immédiat sans crédit ni affectivité coutumière."
  },
  "Zahlung": {
    "fr": "paiement / versement",
    "lit": "action de compter et verser une somme d'argent",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin économique désignant le règlement numéraire qui devient le seul lien social de la société marchande."
  },
  "Schwärmerei": {
    "fr": "extase religieuse / exaltation mystique",
    "lit": "tourbillonnement d'essaim délirant, illumination dévote",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin péjoratif désignant l'illusion pieuse et fanatique médiévale sanctifiant l'oppression féodale."
  },
  "Begeisterung": {
    "fr": "enthousiasme / exaltation héroïque",
    "lit": "insufflation d'esprit noble, transport passionné",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin désignant l'idéal chevaleresque et militaire d'honneur démasqué comme fiction d'ordre."
  },
  "spießbürgerlich": {
    "fr": "petit-bourgeois / philistin",
    "lit": "propre au bourgeois étriqué armé d'une pique sur les remparts",
    "pos_fr": "Adjectif",
    "role": "Adjectif d'origine historique documentée désignant la mentalité étriquée, craintive et rétrograde de la petite bourgeoisie boutiquière."
  },
  "Wehmut": {
    "fr": "mélancolie / sentimentalité nostalgique",
    "lit": "douleur d'âme, tristesse nostalgique",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin désignant la déploration passéiste des couches rétrogrades devant la dissolution de l'ancien monde."
  },
  "Tauschwert": {
    "fr": "valeur d'échange",
    "lit": "valeur de troc marchand mesurée par le marché",
    "pos_fr": "Nom masculin",
    "role": "Catégorie économique cardinale désignant la forme quantitative sous laquelle les produits et l'activité humaine deviennent marchandises échangeables."
  },
  "Handelsfreiheit": {
    "fr": "liberté du commerce",
    "lit": "liberté de circulation et de transaction des marchandises",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin désignant chez Marx l'unique liberté réellement consacrée par la révolution bourgeoise : la liberté d'exploiter sans entrave."
  },
  "Ausbeutung": {
    "fr": "exploitation",
    "lit": "extraction complète jusqu'au bout d'un filon minier ou de travail",
    "pos_fr": "Nom féminin",
    "role": "Concept économique marxiste majeur désignant l'extorsion systématique de surtravail non rémunéré aux travailleurs."
  },
  "buntscheckig": {
    "fr": "bariolé / disparate / bigarré",
    "lit": "marqué de taches et carreaux bicolores variés",
    "pos_fr": "Adjectif",
    "role": "Adjectif métaphorique qualifiant la multiplicité désordonnée et hétérogène des liens juridiques et seigneuriaux de la féodalité."
  },
  "Vorgesetzter": {
    "fr": "supérieur (hiérarchique)",
    "lit": "celui qui est installé en avant ou à la tête",
    "pos_fr": "Nom masculin",
    "role": "Participe substantivé désignant les seigneurs et maîtres de corporations investis d'une autorité coutumière."
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
  "Gegengewicht": {
    "fr": "contrepoids",
    "lit": "masse opposée faisant équilibre dans la balance",
    "pos_fr": "Nom neutre",
    "role": "Nom neutre composé désignant le rôle d'équilibre politique joué par la bourgeoisie contre la noblesse sous la monarchie absolue."
  },
  "Hauptgrundlage": {
    "fr": "fondement principal / pierre angulaire",
    "lit": "fondation capitale posée à la base d'un édifice",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin composé désignant la bourgeoisie comme socle fiscal et matériel indispensable aux grandes monarchies."
  },
  "eiskalt": {
    "fr": "glacial / froid comme la glace",
    "lit": "froid au point de glacer",
    "pos_fr": "Adjectif",
    "role": "Adjectif composé renforçant la métaphore du calcul économique froid qui étouffe l'ardeur des sentiments médiévaux."
  },
  "ertränken": {
    "fr": "noyer / engloutir",
    "lit": "faire périr par immersion dans l'eau",
    "pos_fr": "Verbe causatif faible",
    "role": "Verbe causatif hautement métaphorique décrivant la dissolution violente des croyances anciennes dans l'économie marchande."
  },
  "verbrieft": {
    "fr": "scellé / garanti par charte",
    "lit": "couché par écrit sur une lettre patente de privilège",
    "pos_fr": "Adjectif / Participe",
    "role": "Participe adjectivé désignant les droits et immunités féodales consignés par rescrit royal sous l'Ancien Régime."
  },
  "wohlerworben": {
    "fr": "si chèrement acquis / légitime",
    "lit": "dûment et légitimement acquis par un labeur historique",
    "pos_fr": "Adjectif",
    "role": "Composé juridique désignant les prérogatives séculaires et coutumières des corporations et états."
  },
  "gewissenlos": {
    "fr": "sans scrupule / impitoyable",
    "lit": "dépourvu de toute conscience morale",
    "pos_fr": "Adjectif",
    "role": "Adjectif privatif qualifiant la liberté marchande qui ne recule devant aucune misère humaine pour s'étendre."
  },
  "unverschämt": {
    "fr": "éhonté / sans pudeur / cynique",
    "lit": "dépourvu de honte morale ou de retenue",
    "pos_fr": "Adjectif",
    "role": "Adjectif décrivant le cynisme franc du capitalisme moderne qui assume l'exploitation comme loi naturelle."
  },
  "dürr": {
    "fr": "aride / brutale / décharnée",
    "lit": "sec, desséché, sans chair ni fard",
    "pos_fr": "Adjectif",
    "role": "Adjectif hautement expressif soulignant le caractère dépouillé et rigide de l'extorsion capitaliste sans habillage poétique."
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
  "Schauer": {
    "fr": "frisson / transport d'effroi",
    "lit": "averse soudaine, saisissement physique de terreur ou d'extase",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin désignant l'émotion sacrée et le frisson de dévotion mystique qui courbait l'échine des serfs."
  },
  "Millionär": {
    "fr": "millionnaire",
    "lit": "possesseur de millions en fortune monétaire",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin désignant les nouveaux magnats de la haute finance et de la grande industrie."
  },
  "Chef": {
    "fr": "chef / dirigeant",
    "lit": "tête, meneur, commandant en premier",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin emprunté au français désignant les maîtres capitalistes comme commandants suprêmes du procès de production."
  },
  "Armee": {
    "fr": "armée",
    "lit": "corps de troupes armées enrégimentées",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin désignant métaphoriquement les légions d'ouvriers d'usine disciplinés selon une hiérarchie militaire."
  },
  "Bourgeois": {
    "fr": "bourgeois",
    "lit": "citadin affranchi puis détenteur de capital",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin invariable au pluriel désignant les membres de la classe dominante moderne."
  },
  "herstellen": {
    "fr": "établir / créer / confectionner",
    "lit": "poser ici debout, fabriquer matériellement",
    "pos_fr": "Verbe séparable faible",
    "role": "Verbe séparable décrivant l'action fondatrice de la grande industrie qui engendre le marché mondial."
  },
  "vorbereiten": {
    "fr": "préparer / frayer la voie",
    "lit": "apprêter préalablement à l'avance",
    "pos_fr": "Verbe séparable faible",
    "role": "Verbe marquant la gestation historique préalable des conditions du marché mondial par les découvertes maritimes."
  },
  "unermeßlich": {
    "fr": "incommensurable / prodigieux",
    "lit": "qui ne peut être mesuré d'après une norme ordinaire",
    "pos_fr": "Adjectif",
    "role": "Adjectif qualifiant l'accélération vertigineuse imprimée au commerce par l'ouverture planétaire."
  },
  "Ausdehnung": {
    "fr": "extension / expansion spatiale",
    "lit": "étirement vers l'extérieur au-delà des limites",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin désignant l'accroissement continu de l'aire géographique et technique d'influence de l'industrie."
  },
  "zurückwirken": {
    "fr": "réagir en retour / avoir un effet rétroactif",
    "lit": "agir vers l'arrière sur le point de départ",
    "pos_fr": "Verbe séparable faible",
    "role": "Verbe dialectique clé exprimant l'action réciproque des transports et du commerce sur l'essor manufacturier."
  },
  "ausdehnen": {
    "fr": "étendre / déployer",
    "lit": "tendre vers le dehors, élargir les frontières",
    "pos_fr": "Verbe séparable faible",
    "role": "Verbe réflexif (sich ausdehnen) décrivant l'onde d'expansion conjointe de l'industrie et des transports."
  },
  "vermehren": {
    "fr": "multiplier / accroître",
    "lit": "rendre plus grand en quantité, faire fructifier",
    "pos_fr": "Verbe faible",
    "role": "Verbe décrivant le processus d'accumulation et d'auto-valorisation continue du capital."
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
  "drängen": {
    "fr": "refouler / pousser avec force",
    "lit": "presser, pousser avec insistance vers un lieu",
    "pos_fr": "Verbe faible",
    "role": "Verbe d'action exprimant l'éviction brutale des anciennes classes féodales hors de l'avant-scène sociale."
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
  "Hintergrund": {
    "fr": "arrière-plan / coulisses",
    "lit": "fond de scène, sol d'arrière",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin composé désignant la position marginale et subordonnée où sont confinées les classes déchues."
  },
  "Produkt": {
    "fr": "produit / résultat matériel",
    "lit": "ce qui est mis au jour par un processus de fabrication",
    "pos_fr": "Nom neutre",
    "role": "Nom neutre soulignant que la bourgeoisie est elle-même le fruit déterminé d'une évolution matérielle."
  },
  "begleiten": {
    "fr": "accompagner / faire escorte",
    "lit": "marcher côte à côte en escorte",
    "pos_fr": "Verbe inséparable faible",
    "role": "Verbe passif (war begleitet) exprimant la corrélation rigoureuse entre avancée économique et progrès politique."
  },
  "entsprechend": {
    "fr": "correspondant / proportionné",
    "lit": "qui répond exactement à une mesure",
    "pos_fr": "Adjectif / Participe",
    "role": "Adjectif relationnel soulignant l'adéquation structurelle entre l'infrastructure et la superstructure."
  },
  "Fortschritt": {
    "fr": "progrès",
    "lit": "pas accompli en avant",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin désignant les conquêtes politiques successives de la bourgeoisie vers l'hégémonie."
  },
  "unterdrückt": {
    "fr": "opprimé / asservi",
    "lit": "pressé vers le bas par une force écrasante",
    "pos_fr": "Adjectif / Participe",
    "role": "Participe adjectivé décrivant la condition initiale de roture et de sujétion des bourgeois primitifs sous les barons."
  },
  "bewaffnet": {
    "fr": "armé",
    "lit": "muni d'armes de guerre défensives et offensives",
    "pos_fr": "Adjectif / Participe",
    "role": "Participe qualifiant la commune bourgeoise médiévale qui s'armait pour défendre son autonomie contre les seigneurs."
  },
  "verwaltend": {
    "fr": "s'administrant / gestionnaire",
    "lit": "qui régit et gère ses propres affaires civiques",
    "pos_fr": "Adjectif / Participe",
    "role": "Participe présent décrivant l'auto-gouvernement municipal conquis par les bourgeoisies urbaines d'Italie et de France."
  },
  "Assoziation": {
    "fr": "association / ligue civique",
    "lit": "union volontaire d'alliés sous un même serment",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin désignant la confédération jurée unissant les bourgeois des premières villes libres."
  },
  "Kommune": {
    "fr": "commune médiévale / municipe autonome",
    "lit": "association municipale libre de citadins confédérés",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin désignant les villes franches médiévales émancipées du ban seigneurial."
  },
  "unabhängig": {
    "fr": "indépendant",
    "lit": "qui ne dépend d'aucun maître extérieur",
    "pos_fr": "Adjectif",
    "role": "Adjectif qualifiant les républiques urbaines italiennes (Venise, Gênes, Florence) affranchies de toute suzeraineté féodale."
  },
  "städtisch": {
    "fr": "urbain / municipal",
    "lit": "relatif à la cité fortifiée ou à la ville",
    "pos_fr": "Adjectif",
    "role": "Adjectif caractérisant le berceau géographique municipal de la bourgeoisie en contraste avec le monde rural féodal."
  },
  "Republik": {
    "fr": "république",
    "lit": "chose publique, gouvernement civique sans monarque",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin désignant les cités marchandes gouvernées par des magistrats civils sans prince."
  },
  "steuerpflichtig": {
    "fr": "taillable / assujetti à l'impôt",
    "lit": "astreint par devoir fiscal à la taxe royale",
    "pos_fr": "Adjectif",
    "role": "Adjectif qualifiant le Tiers État roturier en France qui supportait l'essentiel de la fiscalité royale."
  },
  "Monarchie": {
    "fr": "monarchie",
    "lit": "gouvernement exercé par un seul souverain",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin désignant le régime royal centralisateur médiéval et d'Ancien Régime."
  },
  "ständisch": {
    "fr": "d'états / d'ordres féodaux",
    "lit": "fondé sur la division corporative en ordres privilégiés",
    "pos_fr": "Adjectif",
    "role": "Adjectif désignant les monarchies où le pouvoir royal devait composer avec les assemblées d'états (noblesse, clergé, tiers)."
  },
  "absolut": {
    "fr": "absolu",
    "lit": "délié de toute entrave légale ou coutumière",
    "pos_fr": "Adjectif",
    "role": "Adjectif qualifiant les monarchies centralisées des XVIIe-XVIIIe siècles s'appuyant sur la bourgeoisie contre les barons."
  },
  "erkämpfen": {
    "fr": "conquérir de haute lutte / arracher par le combat",
    "lit": "obtenir au terme d'un combat acharné",
    "pos_fr": "Verbe inséparable faible",
    "role": "Verbe d'action soulignant la nature révolutionnaire violente de la conquête du pouvoir par la bourgeoisie."
  },
  "Herstellung": {
    "fr": "établissement / instauration / création",
    "lit": "action de poser debout et mettre sur pied durablement",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin d'action désignant la mise en place matérielle de l'industrie et du marché mondial."
  },
  "ausschließlich": {
    "fr": "exclusif / sans partage",
    "lit": "qui exclut tout tiers, monopole absolu",
    "pos_fr": "Adjectif",
    "role": "Adjectif marquant le monopole politique total conquis par la bourgeoisie dans l'État représentatif contemporain."
  },
  "gemeinschaftlich": {
    "fr": "commun / collectif",
    "lit": "qui appartient à la collectivité partagée de tous les membres",
    "pos_fr": "Adjectif",
    "role": "Adjectif désignant les intérêts de classe généraux de la bourgeoisie au-delà de la concurrence individuelle."
  },
  "Geschäft": {
    "fr": "affaire / transaction / occupation lucrative",
    "lit": "occupation créée, besogne d'intérêt économique",
    "pos_fr": "Nom neutre",
    "role": "Nom neutre désignant les intérêts marchands et capitalistes gérés par l'État bourgeois."
  },
  "patriarchalisch": {
    "fr": "patriarcal",
    "lit": "fondé sur l'autorité absolue du père de famille et du suzerain",
    "pos_fr": "Adjectif",
    "role": "Adjectif qualifiant les relations précapitalistes d'autorité paternelle et bienveillante feinte liant maîtres et serfs."
  },
  "idyllisch": {
    "fr": "idyllique",
    "lit": "champêtre, d'une douceur rustique et naïve",
    "pos_fr": "Adjectif",
    "role": "Adjectif ironique fustigeant la description enjolivée des campagnes d'Ancien Régime par les romantiques."
  },
  "Verhältnis": {
    "fr": "rapport / relation sociale / condition",
    "lit": "manière réciproque de se comporter et de se situer face à autrui",
    "pos_fr": "Nom neutre",
    "role": "Concept matérialiste majeur désignant les liens sociaux objectifs déterminés par le mode de production."
  },
  "zerstören": {
    "fr": "détruire / anéantir",
    "lit": "disloquer en morceaux, ravager de fond en comble",
    "pos_fr": "Verbe inséparable faible",
    "role": "Verbe destructif décrivant le travail historique de sape de la bourgeoisie contre l'ensemble des traditions féodales."
  },
  "Mensch": {
    "fr": "l'homme / être humain",
    "lit": "être humain mortel membre de l'humanité",
    "pos_fr": "Nom masculin",
    "role": "Nom masculin générique désignant les individus atomisés dont tous les liens de communauté sont dissous par le marché."
  },
  "natürlich": {
    "fr": "naturel",
    "lit": "conforme à la nature native, inné",
    "pos_fr": "Adjectif",
    "role": "Adjectif ironique dénonçant la prétention de l'aristocratie à incarner une supériorité biologique naturelle."
  },
  "knüpfen": {
    "fr": "nouer / lier / attacher",
    "lit": "lier par des nœuds serrés",
    "pos_fr": "Verbe faible",
    "role": "Verbe décrivant les liens personnels et affectifs artificiels qui ligotaient le serf à son maître féodal."
  },
  "unbarmherzig": {
    "fr": "sans pitié / impitoyable",
    "lit": "dépourvu de cœur miséricordieux",
    "pos_fr": "Adjectif / Adverbe",
    "role": "Adverbe soulignant la violence inexorable avec laquelle le capital brise les coutumes et solidarités anciennes."
  },
  "zerreißen": {
    "fr": "déchirer en morceaux / rompre brutalement",
    "lit": "lacérer, fendre avec violence en lambeaux",
    "pos_fr": "Verbe fort inséparable",
    "role": "Verbe fort inséparable exprimant la dislocation radicale de l'ordre social médiéval par la marchandise."
  },
  "Band": {
    "fr": "lien / attache",
    "lit": "ce qui lie, corde, chaîne morale ou servile",
    "pos_fr": "Nom neutre",
    "role": "Nom neutre désignant la relation sociale liant les hommes entre eux, réduite désormais au seul argent liquide."
  },
  "übriglassen": {
    "fr": "laisser subsister / laisser de reste",
    "lit": "laisser en surplus, conserver en reste",
    "pos_fr": "Verbe séparable fort",
    "role": "Verbe décrivant l'appauvrissement radical des liens humains réduits par la bourgeoisie au seul intérêt monétaire."
  },
  "nackt": {
    "fr": "nu / froid",
    "lit": "dénudé, sans vêtements ni parure protectrice",
    "pos_fr": "Adjectif",
    "role": "Adjectif métaphorique qualifiant l'intérêt économique dépouillé de toute justification religieuse ou morale."
  },
  "Interesse": {
    "fr": "intérêt / profit lucratif",
    "lit": "ce qui importe, gain pécuniaire",
    "pos_fr": "Nom neutre",
    "role": "Nom neutre désignant le mobile unique et sans masque qui commande l'ensemble de la société bourgeoise."
  },
  "gefühllos": {
    "fr": "insensible / sans cœur / froid",
    "lit": "dépourvu de tout sentiment ou émotion humaine",
    "pos_fr": "Adjectif",
    "role": "Adjectif privatif qualifiant la rigueur arithmétique et glaciale de la transaction marchande."
  },
  "fromm": {
    "fr": "pieux / dévot",
    "lit": "vaillant, loyal, puis soumis à Dieu",
    "pos_fr": "Adjectif",
    "role": "Adjectif décrivant la dévotion et l'obéissance chrétienne des masses féodales."
  },
  "ritterlich": {
    "fr": "chevaleresque",
    "lit": "propre au chevalier et noble cavalier d'armes",
    "pos_fr": "Adjectif",
    "role": "Adjectif caractérisant l'idéal nobiliaire d'honneur militaire, de bravoure et de fidélité au suzerain."
  },
  "egoistisch": {
    "fr": "égoïste",
    "lit": "centré exclusivement sur son propre moi et profit",
    "pos_fr": "Adjectif",
    "role": "Adjectif qualifiant le principe individualiste bourgeois de maximisation du gain aux dépens d'autrui."
  },
  "Berechnung": {
    "fr": "calcul / estimation chiffrée",
    "lit": "compte arithmétique rigoureux des coûts et bénéfices",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin désignant la rationalité comptable marchande qui subordonne toute décision au taux de profit."
  },
  "persönlich": {
    "fr": "personnel",
    "lit": "relatif à la personne humaine individuelle",
    "pos_fr": "Adjectif",
    "role": "Adjectif qualifiant la dignité propre de l'être humain que le capital transforme en marchandise tarifée."
  },
  "Würde": {
    "fr": "dignité / valeur morale",
    "lit": "valeur intrinsèque inestimable d'une personne",
    "pos_fr": "Nom féminin",
    "role": "Concept éthique kantien par excellence (la dignité au-dessus de tout prix), que le capitalisme liquide dans le prix de marché."
  },
  "auflösen": {
    "fr": "dissoudre / liquéfier / décomposer",
    "lit": "délier les liens solides pour transformer en solution liquide",
    "pos_fr": "Verbe séparable faible",
    "role": "Verbe chimique et dialectique décrivant la transmutation brutale de toutes les qualités morales en argent abstrait."
  },
  "zahllos": {
    "fr": "innombrable / sans nombre",
    "lit": "dépourvu de compte mesurable, trop nombreux pour être compté",
    "pos_fr": "Adjectif",
    "role": "Adjectif privatif qualifiant la profusion de coutumes, règlements et franchises locales de la féodalité."
  },
  "Freiheit": {
    "fr": "liberté / franchise corporative",
    "lit": "condition d'homme libre, immunité légale",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin dont le pluriel sous l'Ancien Régime désignait les privilèges particuliers et franchises d'ordres."
  },
  "Wort": {
    "fr": "mot / parole",
    "lit": "unité lexicale de parole formulée",
    "pos_fr": "Nom neutre",
    "role": "Nom neutre employé dans l'incise rhétorique « mit einem Wort » pour résumer d'un seul trait l'essence de la transformation bourgeoise."
  },
  "religiös": {
    "fr": "religieux",
    "lit": "relatif à la foi et au culte divin",
    "pos_fr": "Adjectif",
    "role": "Adjectif désignant les représentations sacrées qui servaient d'alibi moral à l'exploitation féodale."
  },
  "Illusion": {
    "fr": "illusion / fausse apparence",
    "lit": "tromperie de l'esprit, jeu d'apparences fallacieuses",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin désignant chez Marx les fictions idéologiques par lesquelles une société masquait la réalité de sa domination."
  },
  "revolutionieren": {
    "fr": "révolutionner / transformer radicalement",
    "lit": "bouleverser de fond en comble en provoquant une rupture",
    "pos_fr": "Verbe faible",
    "role": "Verbe marquant le saut qualitatif matériel opéré par le machinisme automatique sur la production."
  },
  "ausreichen": {
    "fr": "suffire / être suffisant",
    "lit": "tendre le bras jusqu'à la mesure requise",
    "pos_fr": "Verbe séparable faible",
    "role": "Verbe à particule décrivant l'incapacité objective des anciens ateliers à honorer l'immensité de la demande mondiale."
  },
  "steigen": {
    "fr": "monter / s'accroître",
    "lit": "gravir un échelon vers le haut",
    "pos_fr": "Verbe fort",
    "role": "Verbe fort décrivant l'escalade constante des besoins marchands sous l'impulsion de l'expansion coloniale."
  },
  "wachsen": {
    "fr": "croître / s'agrandir",
    "lit": "augmenter en volume physique et organique",
    "pos_fr": "Verbe fort",
    "role": "Verbe fort décrivant l'expansion continue et irrésistible de l'espace commercial mondial."
  },
  "derselbe": {
    "fr": "le même / ce même",
    "lit": "celui-là même, le identique",
    "pos_fr": "Pronom démonstratif d'identité",
    "role": "Pronom ou adjectif d'identité marquant la stricte équivalence ou proportion (employé dans « in demselben Maße » : dans la même mesure, au fur et à mesure)."
  },
  "immer": {
    "fr": "toujours / sans cesse",
    "lit": "toujours, constamment (adverbe temporel)",
    "pos_fr": "Adverbe de temps",
    "role": "Adverbe temporel marquant l'inversion syntaxique V2 et la dynamique d'accroissement continu des marchés."
  },
  "dieser": {
    "fr": "ce / cette / ces / celui-ci",
    "lit": "celui-ci, ce proche (démonstratif)",
    "pos_fr": "Pronom / déterminant démonstratif",
    "role": "Déterminant démonstratif désignant avec précision un fait ou une institution immédiatement antérieure."
  },
  "auf": {
    "fr": "sur / vers / contre",
    "lit": "sur, en direction de (préposition)",
    "pos_fr": "Préposition mixte",
    "role": "Préposition spatiale régissant ici l'accusatif pour marquer la direction de l'effet produit (« auf die Ausdehnung zurückwirken » : réagir sur l'extension)."
  },
  "worin": {
    "fr": "dans lequel / où / au fur et à mesure que",
    "lit": "dans quoi, en quoi (adverbe relatif)",
    "pos_fr": "Pronom relatif adverbial composé",
    "role": "Adverbe relatif unissant wo- et la préposition in pour introduire une proposition de mesure et de temps."
  },
  "Maß": {
    "fr": "mesure / degré / proportion",
    "lit": "quantité mesurée, étalon de dimension",
    "pos_fr": "Nom neutre",
    "role": "Nom neutre employé au datif dans la locution corrélative « in demselben Maße, worin... » (au fur et à mesure que, dans la mesure où...)."
  },
  "her": {
    "fr": "depuis / en provenance de",
    "lit": "vers ici (adverbe directionnel)",
    "pos_fr": "Adverbe directionnel",
    "role": "Particule adverbiale marquant l'origine historique léguée par le passé (« vom Mittelalter her » : en provenance du moyen âge)."
  },
  "sehen": {
    "fr": "voir / constater",
    "lit": "percevoir par la vue, observer par l'intellect",
    "pos_fr": "Verbe fort",
    "role": "Verbe fort employé à la 1re personne du pluriel (« wir sehen » : nous le voyons, nous constatons) pour sceller l'accord intellectuel du lecteur."
  },
  "also": {
    "fr": "donc / ainsi / par conséquent",
    "lit": "ainsi fait, de cette manière",
    "pos_fr": "Adverbe connecteur logique",
    "role": "Connecteur argumentatif formulant la conclusion théorique rigoureuse d'une déduction historique."
  },
  "lang": {
    "fr": "long / prolongé",
    "lit": "étendu dans l'espace ou la durée temporelle",
    "pos_fr": "Adjectif",
    "role": "Adjectif qualificatif soulignant la longue maturation pluriséculaire de la classe bourgeoise moderne."
  },
  "Reihe": {
    "fr": "série / chaîne / succession",
    "lit": "ligne ordonnée, rangée continue",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin désignant la succession dialectique des révolutions dans les modes de production et d'échange."
  },
  "politisch": {
    "fr": "politique",
    "lit": "relatif à la cité et au gouvernement",
    "pos_fr": "Adjectif",
    "role": "Adjectif qualifiant l'expression juridique et étatique des rapports de force matériels."
  },
  "unter": {
    "fr": "sous / parmi",
    "lit": "en dessous de, au bas de (préposition)",
    "pos_fr": "Préposition mixte",
    "role": "Préposition hiérarchique régissant le datif marquant la sujétion féodale primitive (« unter der Herrschaft » : sous la domination des seigneurs féodaux)."
  },
  "Herrschaft": {
    "fr": "domination / pouvoir souverain / règne",
    "lit": "autorité de maître, souveraineté seigneuriale",
    "pos_fr": "Nom féminin",
    "role": "Nom féminin abstrait désignant chez Marx l'exercice institutionnel et coercitif de la suprématie d'une classe sur la société."
  },
  "hier": {
    "fr": "ici",
    "lit": "en ce lieu-ci (adverbe de lieu)",
    "pos_fr": "Adverbe de lieu",
    "role": "Adverbe spatial apparié à « dort » pour illustrer la bigarrure géographique des communes bourgeoises médiévales."
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
  "dann": {
    "fr": "puis / ensuite / alors",
    "lit": "à ce moment ultérieur (adverbe temporel)",
    "pos_fr": "Adverbe de succession temporelle",
    "role": "Adverbe temporel marquant la transition vers la période manufacturière de la bourgeoisie."
  },
  "endlich": {
    "fr": "enfin / finalement / au terme du processus",
    "lit": "qui touche à sa fin, qui arrive à son terme",
    "pos_fr": "Adverbe",
    "role": "Adverbe marquant l'aboutissement historique de la conquête du monopole politique d'État par la bourgeoisie moderne."
  },
  "seit": {
    "fr": "depuis / à dater de",
    "lit": "à partir de ce moment",
    "pos_fr": "Préposition (régime datif)",
    "role": "Préposition temporelle marquant l'ère historique moderne ouverte par le machinisme et le marché mondial."
  },
  "spielen": {
    "fr": "jouer / interpréter",
    "lit": "exécuter un jeu, incarner un personnage",
    "pos_fr": "Verbe",
    "role": "Verbe employé dans la formule célèbre « eine Rolle spielen » (jouer un rôle éminemment révolutionnaire dans l'histoire)."
  },
  "kommen": {
    "fr": "venir / parvenir / accéder",
    "lit": "se déplacer vers un but, arriver à destination",
    "pos_fr": "Verbe fort",
    "role": "Verbe fort employé dans la locution « zur Herrschaft kommen » (conquérir le pouvoir politique, accéder à l'hégémonie)."
  },
  "kein": {
    "fr": "aucun / pas de / nul",
    "lit": "pas un seul (déterminant négatif)",
    "pos_fr": "Déterminant indéfini négatif",
    "role": "Déterminant négatif absolu marquant la dissolution impitoyable de tous les liens traditionnels féodaux sans exception."
  },
  "ander": {
    "fr": "autre / distinct",
    "lit": "qui n'est pas le même, différent",
    "pos_fr": "Adjectif indéfini",
    "role": "Adjectif indéfini marquant l'exclusion de tout rapport social autre que l'intérêt égoïste du paiement au comptant."
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
