// ============================================================
// Annotations philologiques, historiques et conceptuelles des Chapitres 3 & 4
// Normes strictes (AGENTS.md) :
// - Découplage strict mot-à-mot (zéro saignement entre mots adjacents)
// - wordIds: [wordId] unitaire
// - literalTranslation strict et décomposé
// - Étymologies complètes DWDS/Pfeifer, Kluge, Duden, Grimm
// - Formes historiques obligatoirement en toutes lettres : « en moyen haut-allemand », « en vieux haut-allemand » (zéro abréviations)
// - Autonomie absolue de chaque encart (aucun renvoi antérieur ou ultérieur)
// ============================================================

import type { Annotation } from '../types';

export const annotationsCh3Ch4: Record<string, Annotation> = {
  // ------------------------------------------------------------
  // SECTION 1.A : Le Socialisme féodal & clérical
  // ------------------------------------------------------------

  // ch3_p2_s2_w18 : Emporkömmling
  "ch3_p2_s2_w18": {
    "wordId": "ch3_p2_s2_w18",
    "wordIds": ["ch3_p2_s2_w18"],
    "translationFr": "parvenu / arriviste",
    "literalTranslation": "celui qui monte, arriviste, parvenu issu d'en bas",
    "contextNote": "Marx emploie ce substantif à forte charge sarcastique (« dem verhaßten Emporkömmling erlegen ») pour qualifier la bourgeoisie triomphante de la monarchie de Juillet et du Reform Act anglais de 1832, vue à travers le mépris hautain de l'aristocratie déchue.",
    "grammaticalRole": "Nom masculin singulier au datif (der Emporkömmling, complément d'attribution régi par le participe passif « erlegen »).",
    "etymology": "Substantif masculin dérivé avec le suffixe germanique d'appartenance et d'agent « -ling » (issu du vieux haut-allemand « -ling », moyen haut-allemand « -linc », servant fréquemment à forger des termes dépréciatifs ou diminutifs) du verbe séparable « emporkommen » (s'élever, monter, faire fortune). Le préverbe « empor » remonte au moyen haut-allemand « enbor / embor », formé par contraction de la locution prépositionnelle du vieux haut-allemand « in bore » (en hauteur, vers le haut, de « bor » / hauteur, soulèvement). Le verbe « kommen » est issu du moyen haut-allemand « komen », vieux haut-allemand « queman », issu du proto-germanique « *kwemaną » (venir, arriver, rattaché à la racine indo-européenne « *gʷem- »).",
    "philosophicalContext": "Ce terme condense toute l'ambivalence du drame aristocratique : les grands seigneurs féodaux ne pardonnent pas aux banquiers et maîtres de forges leur extraction plébéienne et leur enrichissement mercantile soudain.",
    "relatedConcepts": ["dat", "compound_noun", "class_struggle"],
    "difficulty": "advanced"
  },

  // ch3_p3_s1_w4 : Klagelied
  "ch3_p3_s1_w4": {
    "wordId": "ch3_p3_s1_w4",
    "wordIds": ["ch3_p3_s1_w4"],
    "translationFr": "complainte / jérémiade",
    "literalTranslation": "chant de plainte, élégie larmoyante",
    "contextNote": "Premier élément du célèbre quatuor antithétique dressé par Marx pour caractériser le socialisme féodal : « halb Klagelied, halb Pasquill, halb Rückhall der Vergangenheit, halb Dräuen der Zukunft ».",
    "grammaticalRole": "Nom neutre composé au nominatif singulier (das Klagelied), en apposition prédicative.",
    "etymology": "Composé nominal unissant « Klage » (plainte, lamentation, réclamation en justice) et « Lied » (chant, poème lyrique). Le nom « Klage » remonte au moyen haut-allemand « klage », vieux haut-allemand « klaga » (lamentation funèbre, accusation judiciaire, de racine expressive germanique). Le second élément « Lied » remonte au moyen haut-allemand « liet », vieux haut-allemand « liod » (chant, poème, strophe), issu du proto-germanique « *leuþą » (cognat du vieux norrois « ljóð » / strophe magique, d'origine disputée). En allemand de la Réforme, Martin Luther employa « Klagelieder » pour traduire le livre biblique des « Lamentations » du prophète Jérémie.",
    "philosophicalContext": "Marx fustige les complaintes élégiaques de l'aristocratie qui pleure la perte de son ordre patriarcal sans comprendre le caractère irréversible de l'histoire.",
    "cognatesFr": ["lied"],
    "relatedConcepts": ["nom", "compound_noun"],
    "difficulty": "intermediate"
  },

  // ch3_p3_s1_w5 : Pasquill
  "ch3_p3_s1_w5": {
    "wordId": "ch3_p3_s1_w5",
    "wordIds": ["ch3_p3_s1_w5"],
    "translationFr": "pasquinade / libelle satirique",
    "literalTranslation": "pamphlet satirique diffamatoire, pasquinade",
    "contextNote": "Second terme du portrait mordant du socialisme aristocratique. Après la lamentation éplorée (« Klagelied »), l'aristocratie se livre à la caricature féroce et venimeuse de son adversaire bourgeois.",
    "grammaticalRole": "Nom neutre singulier au nominatif (das Pasquill), employé sans article dans l'énumération binaire « halb Klagelied, halb Pasquill ».",
    "etymology": "Emprunt à l'italien « pasquillo » (court écrit satirique anonyme affiché publiquement), dérivé de « Pasquino », nom populaire donné à une statue antique mutilée (sans doute un torse de Ménélas portant le corps de Patrocle) déterrée à Rome en 1501 près du palais Orsini. Les Romains avaient coutume d'y coller la nuit des épigrammes acerbes et anonymes raillant la curie papale et les cardinaux. Le terme est passé en français sous la forme « pasquinade » et a été acclimaté en allemand dès le XVIe siècle sous la forme « Pasquill ».",
    "philosophicalContext": "Marx utilise ce terme d'origine romaine pour souligner la nature polémique d'opérette de la littérature aristocratique : une satire de cour impuissante à infléchir le cours de la production capitaliste.",
    "cognatesFr": ["pasquinade", "pasquin"],
    "relatedConcepts": ["nom", "satire"],
    "difficulty": "advanced"
  },

  // ch3_p3_s1_w6 : feudalistische (Feudalsozialismus - adjectif)
  "ch3_p3_s1_w6": {
    "wordId": "ch3_p3_s1_w6",
    "wordIds": ["ch3_p3_s1_w6"],
    "translationFr": "féodal",
    "literalTranslation": "féodal, relatif à la féodalité et au régime seigneurial",
    "contextNote": "Adjectif déterminant le nom « Sozialismus ». Marx baptise ici la posture rhétorique adoptée par les factions déchues de l'aristocratie britannique (les Tories du groupe Young England) et française (les légitimistes partisans des Bourbons), qui se parent d'oripeaux socialistes pour fustiger la bourgeoisie industrielle parvenue.",
    "grammaticalRole": "Adjectif qualificatif au nominatif masculin singulier (déclinaison faible en « -e » après l'article défini « der »).",
    "etymology": "Dérivé avec le suffixe savant « -istisch » (d'origine gréco-latine) de l'adjectif « feudal » (féodal). Ce dernier est un emprunt savant au latin médiéval « feudalis » (relatif au fief), formé sur « feudum » (fief, domaine alloué sous serment de foi et d'hommage). Le terme latin médiéval « feudum » est lui-même issu du germanique occidental, reconstruit sous la forme « *fehu-od » (possession mobilière de bétail valant richesse, composé apparenté au vieux haut-allemand « fihu » / bétail, allemand moderne « Vieh », et au vieux haut-allemand « ōt » / richesse, héritage). Le mot a été diffusé dans la pensée juridique européenne par les juristes humanistes, puis popularisé au XVIIIe siècle par Montesquieu dans « L'Esprit des lois ».",
    "philosophicalContext": "Marx et Engels dévoilent le noyau idéologique du « socialisme féodal » : il s'agit d'une réaction nostalgique qui masque la rapine des anciens seigneurs sous des prétextes chrétiens et patriarcaux, incapable d'admettre que la bourgeoisie est le propre rejeton nécessaire du monde féodal décomposé.",
    "cognatesFr": ["féodal", "féodalité", "fief"],
    "relatedConcepts": ["nom", "adj", "feudalism"],
    "difficulty": "advanced"
  },

  // ch3_p3_s1_w7 : Sozialismus (Feudalsozialismus - nom)
  "ch3_p3_s1_w7": {
    "wordId": "ch3_p3_s1_w7",
    "wordIds": ["ch3_p3_s1_w7"],
    "translationFr": "socialisme",
    "literalTranslation": "socialisme (nom masculin singulier)",
    "contextNote": "Noyau nominal du syntagme « der feudalistische Sozialismus ». Marx inaugure dans ce Chapitre 3 sa grande taxinomie matérialiste des doctrines socialistes prémarxistes.",
    "grammaticalRole": "Nom commun masculin au nominatif singulier (der Sozialismus). Sujet de la proposition principale.",
    "etymology": "Emprunt néologique savant formé à partir de la racine latine « socialis » (sociable, commun, relatif aux alliés ou à la communauté civique, dérivé de « socius » / compagnon, associé) augmentée du suffixe d'obédience doctrinale d'origine grecque « -ismus » (-isme). Le néologisme politique moderne est apparu presque simultanément vers 1830 en Angleterre chez les disciples de Robert Owen (dans « The Cooperative Magazine », 1827) et en France sous la plume des réformateurs saint-simoniens et de Pierre Leroux (qui revendique la paternité du terme en 1834 dans la « Revue encyclopédique »). Le mot pénètre en Allemagne au début des années 1840 sous la plume de Lorenz von Stein (« Der Socialismus und Communismus des heutigen Frankreichs », 1842).",
    "philosophicalContext": "Pour Marx et Engels, le terme « socialisme » en 1847 désignait encore une constellation hétérogène de mouvements bourgeois ou réformistes de salon, tandis que le mot « communisme » désignait le mouvement d'auto-émancipation autonome des ouvriers de fabrique.",
    "cognatesFr": ["socialisme", "social", "société", "sociologue"],
    "relatedConcepts": ["nom", "socialism"],
    "difficulty": "intermediate"
  },

  // ch3_p4_s1_w3 : Bettelsack
  "ch3_p4_s1_w3": {
    "wordId": "ch3_p4_s1_w3",
    "wordIds": ["ch3_p4_s1_w3"],
    "translationFr": "besace de mendiant",
    "literalTranslation": "sac de mendicité, besace pour mendier son pain",
    "contextNote": "Métaphore pamphlétaire fulgurante : « Den proletarischen Bettelsack schwenkten sie als Fahne in der Hand » (ils brandissaient en guise d'étendard la besace de mendiant du prolétariat). L'aristocratie se donne l'allure d'un protecteur des pauvres pour rallier le peuple à sa cause contre la finance bourgeoise.",
    "grammaticalRole": "Nom masculin composé à l'accusatif singulier (der Bettelsack), régi par le verbe transitif « schwenkten ».",
    "etymology": "Substantif composé réunissant le nom d'action « Bettel » (mendicité, pauvreté dérisoire, bagatelle sans valeur) et « Sack » (sac, besace). Le terme « Bettel » est issu du moyen haut-allemand « betel / betele », dérivé du verbe fort « bitten » (demander, prier instamment, moyen haut-allemand « bitten », vieux haut-allemand « bitten », issu du proto-germanique « *bidjaną »). Le second terme « Sack » remonte au moyen haut-allemand « sac », vieux haut-allemand « sac », emprunt très ancien au latin « saccus », lui-même issu du grec ancien « sákkos » (σάκκος) et ultimement d'origine sémitique phénicienne.",
    "philosophicalContext": "L'image du « Bettelsack » résume l'imposture aristocratique : les lords prétendent défendre la misère ouvrière tout en refusant l'émancipation réelle du prolétariat par le travail et l'organisation politique.",
    "cognatesFr": ["sac", "besace"],
    "relatedConcepts": ["acc", "compound_noun"],
    "difficulty": "intermediate"
  },

  // ch3_p4_s2_w10 : Hintern
  "ch3_p4_s2_w10": {
    "wordId": "ch3_p4_s2_w10",
    "wordIds": ["ch3_p4_s2_w10"],
    "translationFr": "derrière / fesses",
    "literalTranslation": "partie arrière du corps, derrière, fessier",
    "contextNote": "Pointe comique et carnavalesque d'anthologie (« erblickte es auf ihrem Hintern die alten feudalen Wappen »). Dès que les ouvriers se retournent vers leurs prétendus bienfaiteurs, ils voient l'emblème féodal cousu sur leur cul et éclatent d'un rire dévastateur.",
    "grammaticalRole": "Nom masculin singulier au datif après la préposition spatiale « auf ».",
    "etymology": "Substantivation familière de l'adverbe et préposition « hinter » (derrière). Issu du moyen haut-allemand « hinter / hinder », vieux haut-allemand « hintar » (en arrière, derrière), lui-même issu du proto-germanique « *hinder » (cognat de l'anglais « hinder » / entraver et du vieil anglais « hindan » / par derrière). La fixation lexicale désignant la croupe ou le siège anatomique s'est imposée dès le moyen haut-allemand comme euphémisme populaire avant d'acquérir une charge ironique chez les humanistes allemands (Ulrich von Hutten, Luther).",
    "philosophicalContext": "Marx convoque ici la tradition rabelaisienne et carnavalesque du rire populaire libérateur : le blason noble est dégradé de la tête au postérieur, démasquant le cynisme des hobereaux.",
    "relatedConcepts": ["dat", "satire"],
    "difficulty": "intermediate"
  },

  // ch3_p9_s1_w38 : Schacher (Kassensturz / mercantilisme nobiliaire)
  "ch3_p9_s1_w38": {
    "wordId": "ch3_p9_s1_w38",
    "wordIds": ["ch3_p9_s1_w38"],
    "translationFr": "trafic sordide / brocanterie mercantile",
    "literalTranslation": "maquignonnage cupide, trafic d'argent et de marchandises, brocanterie",
    "contextNote": "Moment du bilan comptable brutal et du règlement de comptes financier des aristocrates féodaux (« mit dem Schacher in Schafswolle, Runkelrüben und Schnaps zu vertauschen »). Marx expose le grand écart entre la chevalerie idéologique affichée et le sordide calcul boutiquier où les nobles spéculent sur l'eau-de-vie et la laine.",
    "grammaticalRole": "Nom masculin singulier au datif après la préposition « mit » (der Schacher).",
    "etymology": "Emprunt au yiddish occidental « schachern » (marchander de façon serrée, brocanter, faire du troc sordide), lui-même issu de l'hébreu biblique « sāḥar » (סָחַר = circuler pour négocier, faire le commerce ambulant, trafiquer). Le mot a pénétré le lexique familier de l'allemand urbain au cours du XVIIIe siècle pour désigner un commerce rapace d'aubaine ou un maquignonnage âpre au gain sans production de valeur réelle.",
    "philosophicalContext": "Marx utilise ce terme d'une extrême crudité commerciale pour dénoncer la capitulation de l'aristocratie prussienne devant l'argent liquide : derrière l'idéalisme romantique des hobereaux se cache la gestionnaire cynique d'exploitations agricoles capitalistes.",
    "relatedConcepts": ["dat", "capitalism"],
    "difficulty": "advanced"
  },

  // ch3_p10_s1_w3 : Pfaffe (Pfaffensozialismus - nom)
  "ch3_p10_s1_w3": {
    "wordId": "ch3_p10_s1_w3",
    "wordIds": ["ch3_p10_s1_w3"],
    "translationFr": "calotin / curé",
    "literalTranslation": "prêtre catholique, calotin, cureton (terme éminemment polémique et dépréciatif)",
    "contextNote": "Sujet de la comparaison percutante : « Wie der Pfaffe immer Hand in Hand ging mit dem Feudalen... ».",
    "grammaticalRole": "Nom masculin faible au nominatif singulier (der Pfaffe).",
    "etymology": "Attesté en vieux haut-allemand sous la forme « pfaffo » (clerc, ecclésiastique, prêtre ordonné), puis en moyen haut-allemand sous la forme « phaffe / pfafe ». Il s'agit d'un emprunt paléochrétien au bas-latin ecclésiastique « papa » (évêque, père spirituel, d'où est également issu le français « pape »), lui-même calqué sur le grec de l'Église « papas » (πάπας = père, patriarche). Si le terme constituait un titre honorifique et neutre au Moyen Âge pour désigner tout membre du clergé, il s'est chargé d'une vive connotation satirique et hostile dès le XVIe siècle lors des controverses de la Réforme luthérienne, désignant le prêtre débauché, obscurantiste ou servilement soumis à la hiérarchie romaine.",
    "philosophicalContext": "Marx retient délibérément le mot de combat des paysans insurgés de 1525 et de la Réforme pour souligner la continuité séculaire de l'alliance contre nature entre la crosse et l'épée contre les opprimés.",
    "cognatesFr": ["pape", "papal"],
    "relatedConcepts": ["nom", "religion"],
    "difficulty": "intermediate"
  },

  // ch3_p10_s1_w15 : pfäffische (Pfaffensozialismus - adjectif)
  "ch3_p10_s1_w15": {
    "wordId": "ch3_p10_s1_w15",
    "wordIds": ["ch3_p10_s1_w15"],
    "translationFr": "calotin / clérical",
    "literalTranslation": "de curé, clérical, calotin (ton résolument dépréciatif)",
    "contextNote": "Adjectif qualifiant le socialisme clérical (« so der pfäffische Sozialismus mit dem feudalistischen »). Marx refuse expressément le terme neutre « christlich » ou « klerikal » pour lui infliger le stigmate voltairien du calotinisme.",
    "grammaticalRole": "Adjectif qualificatif au nominatif masculin singulier (déclinaison faible en « -e »).",
    "etymology": "Dérivé à l'aide du suffixe adjectival « -isch » (formant des épithètes d'appartenance souvent teintées de mépris) du substantif « Pfaffe » (prêtre, calotin). Le substantif remonte au moyen haut-allemand « phaffe », vieux haut-allemand « pfaffo », emprunt au bas-latin « papa » (père spirituel, évêque), d'origine grecque (« papas » / πάπας).",
    "philosophicalContext": "Marx cible ici les théoriciens catholiques ultramontains (Lamennais dans sa première phase, Villeneuve-Bargemont) qui récupèrent le lexique de la pauvreté pour réconcilier les ouvriers avec la résignation spirituelle et le joug féodal.",
    "cognatesFr": ["pape"],
    "relatedConcepts": ["nom", "adj", "religion"],
    "difficulty": "advanced"
  },

  // ch3_p11_s4_w2 : christliche
  "ch3_p11_s4_w2": {
    "wordId": "ch3_p11_s4_w2",
    "wordIds": ["ch3_p11_s4_w2"],
    "translationFr": "chrétien",
    "literalTranslation": "chrétien, relatif au Christ et au christianisme",
    "contextNote": "Épithète dans « Der christliche Sozialismus ist nur das Weihwasser... ». Marx démasque l'instrumentalisation dogmatique de la foi religieuse au service du ressentiment nobiliaire.",
    "grammaticalRole": "Adjectif qualificatif au nominatif masculin singulier (déclinaison faible après « der »).",
    "etymology": "Issu du moyen haut-allemand « kristenlich / kristenlīch », vieux haut-allemand « kristīn / christānlīh », formé sur le nom de « Christus » avec le suffixe adjectival germanique « -lich ». Emprunt au latin « christianus », lui-même calqué sur le grec du Nouveau Testament « christianós » (χριστιανός = partisan ou disciple du Christ), dérivé du grec « Christós » (Χριστός = celui qui a reçu l'onction, traduction de l'hébreu « Māšîaḥ » / Messie, du verbe « chríein » / oindre).",
    "philosophicalContext": "Pour Marx, le socialisme chrétien de 1848 opère comme une mystification idéologique : en sanctifiant la pauvreté comme vertu évangélique et en promettant une récompense dans l'au-delà, il désamorce la révolte matérielle ici-bas.",
    "cognatesFr": ["chrétien", "christianisme", "christique"],
    "relatedConcepts": ["nom", "adj", "religion"],
    "difficulty": "basic"
  },

  // ch3_p11_s4_w3 : Sozialismus (christliche Sozialismus)
  "ch3_p11_s4_w3": {
    "wordId": "ch3_p11_s4_w3",
    "wordIds": ["ch3_p11_s4_w3"],
    "translationFr": "socialisme",
    "literalTranslation": "socialisme (doctrine d'organisation sociale)",
    "contextNote": "Noyau nominal du sujet dans la célèbre sentence du bénitier : « Der christliche Sozialismus ist nur das Weihwasser, womit der Pfaffe den Ärger des Aristokraten einsegnet ».",
    "grammaticalRole": "Nom masculin singulier au nominatif (der Sozialismus).",
    "etymology": "Emprunt savant formé sur la racine latine « socialis » (sociable, commun) et le suffixe doctrinaire « -ismus ». Diffusé en Europe occidentale entre 1830 et 1840 par les courants owenistes, saint-simoniens et fouriéristes.",
    "relatedConcepts": ["nom", "socialism"],
    "difficulty": "basic"
  },

  // ------------------------------------------------------------
  // SECTION 1.B : Le Socialisme petit-bourgeois (Sismondi)
  // ------------------------------------------------------------

  // ch3_p14_s3_w1 : Sismondi
  "ch3_p14_s3_w1": {
    "wordId": "ch3_p14_s3_w1",
    "wordIds": ["ch3_p14_s3_w1"],
    "translationFr": "Sismondi",
    "literalTranslation": "Jean-Charles Léonard Simonde de Sismondi (nom propre d'économiste)",
    "contextNote": "Économiste et historien genevois (1773-1842), désigné par Marx comme « le chef de file de cette littérature non seulement pour la France, mais aussi pour l'Angleterre ».",
    "grammaticalRole": "Nom propre masculin singulier au nominatif, sujet grammatical de la phrase.",
    "etymology": "Nom propre d'origine toponymique et patricienne italienne (famille noble originaire de Pise émigrée en Suisse à la Renaissance). L'auteur a publié en 1819 ses célèbres « Nouveaux principes d'économie politique », première critique systématique des crises de surproduction et du machinisme dans l'économie politique classique.",
    "philosophicalContext": "Marx et Engels reconnaissent une immense dette théorique envers Sismondi : il a le premier mis à nu les effets dévastateurs de la machine, la paupérisation des ouvriers et l'inévitabilité des crises de surproduction. Mais ils réfutent son horizon politique rétrograde : vouloir enfermer l'industrie moderne dans le carcan des corporations médiévales relève d'une utopie réactionnaire.",
    "relatedConcepts": ["nom", "sismondi", "political_economy"],
    "difficulty": "intermediate"
  },

  // ch3_p17_s1_w11 : Katzenjammer
  "ch3_p17_s1_w11": {
    "wordId": "ch3_p17_s1_w11",
    "wordIds": ["ch3_p17_s1_w11"],
    "translationFr": "gueule de bois / dégrisement pleurnichard",
    "literalTranslation": "lamentations de chats, détresse du lendemain d'ivresse, gueule de bois",
    "contextNote": "Conclusion cinglante du sous-chapitre sur le socialisme petit-bourgeois (« In ihrer weiteren Entwicklung hat sich diese Richtung in einen feigen Katzenjammer verlaufen »). Marx ridiculise l'effondrement moral d'une doctrine qui, après de grands accès d'indignation éthique, se délite en un lâche gémissement de désenivrement devant l'essor irrésistible de la grande industrie.",
    "grammaticalRole": "Nom masculin composé à l'accusatif singulier après la préposition régissante « in » (der Katzenjammer).",
    "etymology": "Substantif composé du lexique estudiantin populaire du XVIIIe siècle unissant « Katze » (chat, issu du moyen haut-allemand « katze », vieux haut-allemand « kazza », emprunt tardif au bas-latin « cattus ») et « Jammer » (détresse, lamentation, affliction bruyante, issu du moyen haut-allemand « jāmer », vieux haut-allemand « jāmar » / affliction poignante). À l'origine, le mot s'appliquait aux miaulements discordants des chats en rut (« Katzenmusik » / charivari), avant d'être transposé par calembour phonétique estudiantin sur le grec « katárhoos » (catarrhe, toux) ou pour imiter la voix rauque et les gémissements plaintifs d'un individu terrassé par l'excès d'alcool au lendemain de beuverie.",
    "philosophicalContext": "Le recours au terme trivial de « Katzenjammer » anéantit les prétentions du romantisme économique : la désillusion des petits-bourgeois n'a aucune grandeur tragique, c'est l'hébétude honteuse d'une classe dépassée par la dialectique du capital.",
    "relatedConcepts": ["acc", "compound_noun", "satire"],
    "difficulty": "advanced"
  },

  // ------------------------------------------------------------
  // SECTION 1.C : Le « Vrai » Socialisme allemand
  // ------------------------------------------------------------

  // ch3_p20_s4_w11 : Entäußerung
  "ch3_p20_s4_w11": {
    "wordId": "ch3_p20_s4_w11",
    "wordIds": ["ch3_p20_s4_w11"],
    "translationFr": "aliénation / dessaisissement",
    "literalTranslation": "action de rendre extérieur, extériorisation, aliénation",
    "contextNote": "Marx épingle ironiquement le jargon néo-hégélien des « vrais socialistes » : sous l'analyse économique française des fonctions de la monnaie, ils se bornent à coller l'étiquette spéculative « Entäußerung des menschlichen Wesens » (aliénation de l'essence humaine).",
    "grammaticalRole": "Nom féminin singulier à l'accusatif (die Entäußerung).",
    "etymology": "Substantif d'action en « -ung » formé sur le verbe réfléchi « sich entäußern » (se défaire de, se dépouiller de, se dessaisir). Le verbe est dérivé du comparatif « äußer » (extérieur, de l'adverbe « aus » / dehors) avec le préfixe privatif germanique « ent- » (vieux haut-allemand « ant- / int- », marquant la séparation ou l'éloignement). En philosophie idéaliste (chez Hegel puis Ludwig Feuerbach), le mot a pris le sens technique de dessaisissement de l'Esprit ou de l'Homme projetant ses propres facultés dans des objets extérieurs (l'argent, Dieu, l'État).",
    "philosophicalContext": "Ce passage est capital dans l'autocritique de Marx : en 1844 (« Manuscrits de Paris »), Marx employait lui-même abondamment « Entäußerung » et « Entfremdung ». En 1848, dans le Manifeste, il dénonce la réduction de la lutte politique prolétarienne à une gymnastique verbale métaphysique qui noie les rapports réels d'exploitation économique sous une brume spéculative.",
    "cognatesFr": ["aliénation"],
    "relatedConcepts": ["acc", "hegel", "philosophy"],
    "difficulty": "advanced"
  },

  // ch3_p20_s4_w26 : Aufhebung
  "ch3_p20_s4_w26": {
    "wordId": "ch3_p20_s4_w26",
    "wordIds": ["ch3_p20_s4_w26"],
    "translationFr": "dépassement / abolition conservatrice",
    "literalTranslation": "action de soulever, abolition, dépassement dialectique",
    "contextNote": "Deuxième exemple du charabia philosophique des doctrinaires allemands : pour traduire la critique matérialiste de l'État bourgeois, ils écrivent doctoralement « Aufhebung der Herrschaft des abstrakten Allgemeinen » (dépassement de la domination de l'universel abstrait).",
    "grammaticalRole": "Nom féminin singulier à l'accusatif (die Aufhebung).",
    "etymology": "Déverbal en « -ung » du verbe composé séparable « aufheben » (soulever, ramasser, mais aussi abolir, conserver, supprimer une loi). Le verbe réunit la particule prépositionnelle « auf » (sur, en haut, moyen haut-allemand « ūf », vieux haut-allemand « ūf ») et le verbe fort « heben » (lever, soulever, moyen haut-allemand « heben », vieux haut-allemand « heffan », issu du proto-germanique « *habjaną », cognat du latin « capere » / saisir). C'est Georg Wilhelm Friedrich Hegel qui a consacré ce terme comme le concept moteur de sa dialectique tripartite : « aufheben » signifie simultanément nier, préserver et élever à un degré supérieur de rationalité.",
    "philosophicalContext": "Marx tourne en dérision l'usage scolastique de la dialectique hégélienne par des épigones qui substituent la contemplation de catégories logiques éthérées au renversement pratique et armé de l'appareil répressif d'État.",
    "cognatesFr": ["dépassement"],
    "relatedConcepts": ["acc", "hegel", "aufhebung"],
    "difficulty": "advanced"
  },

  // ch3_p21_s1_w19 : wahrer (Wahre Sozialismus - adjectif)
  "ch3_p21_s1_w19": {
    "wordId": "ch3_p21_s1_w19",
    "wordIds": ["ch3_p21_s1_w19"],
    "translationFr": "vrai",
    "literalTranslation": "vrai, authentique, véritable",
    "contextNote": "Épithète mise entre guillemets de dérision par Marx (« „wahrer Sozialismus“ »). Formule phare forgée par Karl Grün, Moses Hess et leurs disciples, qui prétendaient purifier le socialisme français de son « unilatéralité politique » en le fondant sur la philosophie allemande de la nature humaine.",
    "grammaticalRole": "Adjectif qualificatif au nominatif masculin singulier (déclinaison forte en « -er »).",
    "etymology": "Issu du moyen haut-allemand « wār » (vrai, authentique, digne de foi), lui-même issu du vieux haut-allemand « wār » (véridique), issu du proto-germanique « *wēraz ». Cette racine germanique remonte à la racine indo-européenne « *wē-ro- » (vrai, fiable, bienveillant), d'où dérivent directement le latin « verus » (vrai), le vieux slave « věra » (foi, croyance) et l'allemand moderne « Wahrheit » (vérité).",
    "philosophicalContext": "Le « vrai » socialisme représente l'impuissance idéologique de l'Allemagne morcelée : n'ayant pas encore accompli sa révolution bourgeoise de 1789, elle projette les exigences des ouvriers parisiens dans le domaine des vérités éternelles et abstraites de l'Homme, désarmant les prolétaires au profit de la censure prussienne.",
    "cognatesFr": ["vrai", "vérité"],
    "relatedConcepts": ["nom", "adj", "philosophy"],
    "difficulty": "advanced"
  },

  // ch3_p21_s1_w20 : Sozialismus (Wahre Sozialismus - nom)
  "ch3_p21_s1_w20": {
    "wordId": "ch3_p21_s1_w20",
    "wordIds": ["ch3_p21_s1_w20"],
    "translationFr": "socialisme",
    "literalTranslation": "socialisme (nom masculin singulier)",
    "contextNote": "Noyau nominal de la dénomination d'école « wahrer Sozialismus ».",
    "grammaticalRole": "Nom masculin au nominatif singulier (der Sozialismus).",
    "etymology": "Emprunt savant formé sur l'adjectif latin « socialis » (relatif à la communauté d'associés, de « socius ») et le suffixe doctrinal « -ismus ».",
    "relatedConcepts": ["nom", "socialism"],
    "difficulty": "basic"
  },

  // ch3_p22_s1_w8 : entmannt
  "ch3_p22_s1_w8": {
    "wordId": "ch3_p22_s1_w8",
    "wordIds": ["ch3_p22_s1_w8"],
    "translationFr": "émasculée / châtrée",
    "literalTranslation": "dépouillée de sa virilité, émasculée, castrée",
    "contextNote": "Formule pamphlétaire d'une rare férocité anatomique : « Die französische sozialistisch-kommunistische Literatur wurde so förmlich entmannt » (la littérature socialiste et communiste française fut ainsi littéralement émasculée). En expurgeant les textes français de leur venin révolutionnaire et de leur appel à la lutte des classes, les idéologues allemands lui ont ôté toute force de frappe historique.",
    "grammaticalRole": "Participe passé passif du verbe transitif « entmannen » (utilisé avec l'auxiliaire « wurde » pour former le passif-processus au prétérit).",
    "etymology": "Verbe préfixé dérivé du substantif « Mann » (homme viril, époux, guerrier) à l'aide du préfixe privatif germanique « ent- » (vieux haut-allemand « ant- / int- », marquant la privation ou le retrait). Le nom « Mann » remonte au moyen haut-allemand « man », vieux haut-allemand « man », issu du proto-germanique « *mann- » (être humain mâle, individu pourvu de ses attributs virils). Attesté en moyen haut-allemand sous la forme « entmannen » avec le sens littéral de castrer ou priver de courage chevaleresque.",
    "philosophicalContext": "Marx utilise délibérément une métaphore d'émasculation pour railler l'hypocrisie des intellectuels teutons : sous prétexte d'élever les écrits révolutionnaires vers la sérénité métaphysique, ils les ont réduits à une contemplation eunuque et inoffensive pour la police féodale.",
    "relatedConcepts": ["verb", "satire"],
    "difficulty": "advanced"
  },

  // ch3_p25_s1_w13 : Krautjunkern
  "ch3_p25_s1_w13": {
    "wordId": "ch3_p25_s1_w13",
    "wordIds": ["ch3_p25_s1_w13"],
    "translationFr": "hobereaux campagnards / junkers arriérés",
    "literalTranslation": "nobliaux du chou, gentilshommes terriens provinciaux arriérés",
    "contextNote": "Portrait satirique au vitriol de la camarilla féodale prussienne : « mit ihrem Gefolge von Pfaffen, Schulmeistern, Krautjunkern und Bürokraten » (avec leur cortège de prêtres, de maîtres d'école, de hobereaux campagnards et de bureaucrates).",
    "grammaticalRole": "Nom masculin pluriel au datif régi par la préposition « von » (der Krautjunker, die Krautjunker).",
    "etymology": "Composé satirique populaire associant « Kraut » (chou, herbe potagère, verdure de potager) et « Junker » (jeune seigneur, gentilhomme campagnard). Le substantif « Kraut » remonte au moyen haut-allemand « krūt », vieux haut-allemand « krūt » (plante potagère, herbe comestible, chou, proto-germanique « *krūdą »). Le second élément « Junker » est issu de la contraction en moyen haut-allemand de « juncherre / junc-hērro » (littéralement « jeune seigneur », du vieux haut-allemand « jung » et « hērro » / supérieur, maître). Aux XVIIe et XVIIIe siècles, le composé ironique « Krautjunker » s'est fixé dans la langue littéraire pour désigner avec dédain le petit noble campagnard fruste, inculte et borné à la gestion de ses champs de choux en Poméranie ou en Brandebourg.",
    "philosophicalContext": "Marx fustige la classe sociale la plus rétrograde de l'Europe centrale : les Junkers prussiens, propriétaires de domaines seigneuriaux à corvées, piliers indéfectibles du despotisme des Hohenzollern.",
    "relatedConcepts": ["dat", "compound_noun", "satire"],
    "difficulty": "advanced"
  },

  // ch3_p27_s1_w4 : wahre (forme faible définie)
  "ch3_p27_s1_w4": {
    "wordId": "ch3_p27_s1_w4",
    "wordIds": ["ch3_p27_s1_w4"],
    "translationFr": "vrai",
    "literalTranslation": "vrai, authentique",
    "contextNote": "Occurrence définie dans « Ward der „wahre“ Sozialismus dergestalt eine Waffe in der Hand der Regierungen... ».",
    "grammaticalRole": "Adjectif qualificatif au nominatif masculin singulier après article défini (terminaison faible « -e »).",
    "etymology": "Issu du moyen haut-allemand « wār », vieux haut-allemand « wār », du proto-germanique « *wēraz » (vrai, digne de foi), racine indo-européenne « *wē-ro- » (cognat du latin « verus »).",
    "relatedConcepts": ["nom", "adj"],
    "difficulty": "basic"
  },

  // ch3_p27_s1_w5 : Sozialismus
  "ch3_p27_s1_w5": {
    "wordId": "ch3_p27_s1_w5",
    "wordIds": ["ch3_p27_s1_w5"],
    "translationFr": "socialisme",
    "literalTranslation": "socialisme",
    "contextNote": "Noyau nominal dans le syntagme « der „wahre“ Sozialismus ».",
    "grammaticalRole": "Nom masculin singulier au nominatif.",
    "etymology": "Emprunt savant formé sur la racine latine « socialis » (associé) et le suffixe « -ismus ».",
    "relatedConcepts": ["nom", "socialism"],
    "difficulty": "basic"
  },

  // ch3_p30_s1_w13 : Spießbürger
  "ch3_p30_s1_w13": {
    "wordId": "ch3_p30_s1_w13",
    "wordIds": ["ch3_p30_s1_w13"],
    "translationFr": "bourgeois philistin / boutiquier étriqué",
    "literalTranslation": "bourgeois armé d'une pique, philistin peureux et borné",
    "contextNote": "Point culminant du réquisitoire contre le socialisme allemand : « Er proklamierte die deutsche Nation als die normale Nation und den deutschen Spießbürger als den Normalmenschen » (il proclama la nation allemande comme la nation normale et le bourgeois philistin allemand comme l'homme normal).",
    "grammaticalRole": "Nom masculin composé à l'accusatif singulier (der Spießbürger), régi par la préposition « als » régissant l'attribut du COD.",
    "etymology": "Substantif composé combinant le nom « Spieß » (pique, lance, arme d'hast pointue) et « Bürger » (bourgeois, citoyen urbain). Le nom « Spieß » est issu du moyen haut-allemand « spieʒ », vieux haut-allemand « spioʒ » (épieu de chasse ou pique de fantassin, issu du proto-germanique « *speutaz »). Le second élément « Bürger » remonte au moyen haut-allemand « bürger / burgaere », vieux haut-allemand « burgāri » (habitant d'une forteresse ou cité fortifiée, dérivé de « burg » / bourg fortifié, rattaché au verbe « bergen » / abriter, protéger). Historiquement, aux XVIIe et XVIIIe siècles, les « Spießbürger » étaient les habitants des petites corporations urbaines qui montaient la garde municipale armés de vieilles piques médiévales démodées, par contraste avec les troupes régulières équipées d'armes à feu modernes. Dès la fin du XVIIIe siècle (chez Wieland, Goethe et Jean Paul), le terme prend le sens figuré et cinglant d'homme encroûté, mesquin, conformiste et timoré.",
    "philosophicalContext": "Marx met en lumière le fond sociologique réel de la philosophie idéaliste allemande : derrière « l'Homme » majuscule et universel que chantent les vrais socialistes se dissimule en vérité le boutiquier peureux et servile des petites principautés rhénanes ou saxonnes.",
    "cognatesFr": ["bourgeois", "bourg"],
    "relatedConcepts": ["acc", "compound_noun", "satire"],
    "difficulty": "advanced"
  },

  // ------------------------------------------------------------
  // SECTION 2 : Le Socialisme conservateur ou bourgeois (Proudhon)
  // ------------------------------------------------------------

  // ch3_p31_s1_w5 : Bourgeoissozialismus
  "ch3_p31_s1_w5": {
    "wordId": "ch3_p31_s1_w5",
    "wordIds": ["ch3_p31_s1_w5"],
    "translationFr": "socialisme bourgeois",
    "literalTranslation": "socialisme de la bourgeoisie, socialisme bourgeois et conservateur",
    "contextNote": "Titre programmatique de la Section 2 du Chapitre 3 (« Der konservative oder Bourgeoissozialismus »). Marx y analyse la tentative réformiste de conjurer les antagonismes de classe par des concessions philanthropiques tout en préservant le salariat et le capital.",
    "grammaticalRole": "Nom composé masculin au nominatif singulier (der Bourgeoissozialismus).",
    "etymology": "Composé hybride franco-allemand formé de l'emprunt français « Bourgeois » (attesté en moyen français au XIIe siècle, habitant d'un bourg franc détenant des franchises juridiques, dérivé de « bourg », lui-même d'origine germanique occidentale « *burg » / place forte) et du substantif doctrinal « Sozialismus » (forgé sur le latin « socialis » avec le suffixe doctrinal « -ismus »).",
    "philosophicalContext": "Marx dénonce l'illusion fondatrice de tout réformisme bourgeois : « vouloir la bourgeoisie sans le prolétariat », c'est-à-dire vouloir les bénéfices du capitalisme sans accepter les luttes de classe qui en découlent fatalement. Ce socialisme se résume au mot d'ordre hypocrite : « les bourgeois sont des bourgeois — dans l'intérêt de la classe ouvrière ».",
    "cognatesFr": ["bourgeois", "socialisme"],
    "relatedConcepts": ["nom", "compound_noun", "capitalism"],
    "difficulty": "advanced"
  },

  // ch3_p34_s1_w4 : Proudhons
  "ch3_p34_s1_w4": {
    "wordId": "ch3_p34_s1_w4",
    "wordIds": ["ch3_p34_s1_w4"],
    "translationFr": "de Proudhon",
    "literalTranslation": "de Pierre-Joseph Proudhon (nom propre au génitif saxon)",
    "contextNote": "Marx cite nommément l'auteur français : « Als Beispiel führen wir Proudhons Philosophie de la misère an » (Nous citerons comme exemple la Philosophie de la misère de Proudhon).",
    "grammaticalRole": "Nom propre masculin au génitif singulier avec désinence en « -s » (complément déterminatif du titre d'ouvrage).",
    "etymology": "Nom de famille d'origine franc-comtoise (Besançon), patronyme dérivé de l'ancien français « proud / prod » (vaillant, sage, intègre, issu du bas-latin « prodis », forme régressive du latin classique « prodesse » / être utile, faire du bien). Pierre-Joseph Proudhon (1809-1865) est l'auteur en 1840 de « Qu'est-ce que la propriété ? » puis en 1846 du « Système des contradictions économiques ou Philosophie de la misère ».",
    "philosophicalContext": "Marx a rédigé en 1847 une réplique dévastatrice à Proudhon dans « Misère de la philosophie ». Il y démonte l'illusion proudhonienne d'une dialectique abstraite divisant chaque réalité économique en « bon côté » et « mauvais côté » : en voulant conserver la production marchande et le crédit tout en abolissant le profit capitaliste, Proudhon théorise l'idéal rétrograde du petit producteur indépendant.",
    "relatedConcepts": ["gen", "proudhon", "political_economy"],
    "difficulty": "intermediate"
  },

  // ------------------------------------------------------------
  // SECTION 3 : Le Socialisme et Communisme critico-utopiques
  // ------------------------------------------------------------

  // ch3_p40_s1_w3 : kritisch-utopistische
  "ch3_p40_s1_w3": {
    "wordId": "ch3_p40_s1_w3",
    "wordIds": ["ch3_p40_s1_w3"],
    "translationFr": "critico-utopique",
    "literalTranslation": "critico-utopique, alliant la critique lucide à la construction imaginaire",
    "contextNote": "Titre fondamental de la Section 3 du Chapitre 3 (« Der kritisch-utopistische Sozialismus oder Kommunismus »). Marx et Engels établissent une distinction dialectique essentielle entre la valeur critique historique des fondateurs (Saint-Simon, Fourier, Owen) et l'impasse sectaire de leurs disciples.",
    "grammaticalRole": "Adjectif composé au nominatif masculin singulier (déclinaison faible en « -e »).",
    "etymology": "Adjectif composé associant « kritisch » (critique, issu du grec ancien « kritikós » / κριτικός = capable de juger, discerner ou trancher, dérivé du verbe « krínein » / κρίνειν) et « utopistisch » (utopiste/utopique, dérivé d'« Utopie », néologisme grec forgé en 1516 par l'humaniste anglais Thomas More pour son traité politique, combinant l'adverbe de négation « ou » / οὐ et le nom « tópos » / τόπος = lieu, signifiant littéralement « lieu de nulle part » ou « contrée qui n'existe en aucun lieu »).",
    "philosophicalContext": "Marx et Engels reconnaissent la valeur inestimable des fondateurs des systèmes utopiques : ils ont fourni des matériaux capitaux pour éclairer la classe ouvrière en dénonçant le salariat, l'opposition ville/campagne et l'État bourgeois. Cependant, faute de conditions matérielles suffisantes dans un capitalisme encore juvénile, ils ont cru pouvoir substituer leur propre génie inventif à la dynamique réelle de la lutte des classes.",
    "cognatesFr": ["critique", "utopique", "utopie"],
    "relatedConcepts": ["nom", "adj", "utopian_socialism"],
    "difficulty": "advanced"
  },

  // ch3_p50_s1_w4 : kritisch-utopistischen
  "ch3_p50_s1_w4": {
    "wordId": "ch3_p50_s1_w4",
    "wordIds": ["ch3_p50_s1_w4"],
    "translationFr": "critico-utopique",
    "literalTranslation": "critico-utopique (au génitif)",
    "contextNote": "Formule dialectique célèbre énonçant la loi historique de caducité des utopies : « Die Bedeutung des kritisch-utopistischen Sozialismus oder Kommunismus steht im umgekehrten Verhältnis zur geschichtlichen Entwicklung » (l'importance du socialisme et du communisme critico-utopiques est en raison inverse du développement historique).",
    "grammaticalRole": "Adjectif composé au génitif masculin singulier (désinence faible en « -en » régie par l'article défini « des »).",
    "etymology": "Composé savant de « kritisch » (du grec « kritikós » / apte à juger) et « utopistisch » (du grec « ou-tópos » / non-lieu).",
    "philosophicalContext": "Plus la lutte de classe réelle s'organise et devient consciente sur le terrain industriel et politique, plus la posture utopiste d'échappatoire expérimentale perd toute valeur théorique et devient une entrave réactionnaire.",
    "cognatesFr": ["critique", "utopique"],
    "relatedConcepts": ["gen", "adj"],
    "difficulty": "intermediate"
  },

  // ch3_p50_s6_w14 : Phalanstere
  "ch3_p50_s6_w14": {
    "wordId": "ch3_p50_s6_w14",
    "wordIds": ["ch3_p50_s6_w14"],
    "translationFr": "phalanstères",
    "literalTranslation": "phalanstères (palais communautaires agro-industriels fouriéristes)",
    "contextNote": "Première référence explicite aux modèles concrets de l'utopisme : « Stiftung einzelner Phalanstere » (fondation de phalanstères isolés). Réfère directement au système de Charles Fourier.",
    "grammaticalRole": "Nom neutre pluriel (das Phalanstere, die Phalanstere), complément du nom verbal « Stiftung ».",
    "etymology": "Emprunt au français « phalanstère », mot-valise créé par le théoricien socialiste utopiste Charles Fourier (1772-1837) dans son « Traité de l'association domestique-agricole » (1822). Il combine le substantif « phalange » (du grec ancien « phálanx » / φάλαγξ = corps de troupes d'infanterie pesante rangé en ligne serrée) et « monastère » (du bas-latin « monasterium », lui-même issu du grec ancien « monastērion » / ermitage, lieu où l'on vit seul, de « mónos » / seul). Chez Fourier, le phalanstère désigne le palais d'habitation et de production d'une « phalange » sociétaire idéale regroupant environ 1620 sociétaires organisés en séries passionnées afin d'harmoniser les désirs humains et d'émanciper le travail par l'attraction passionnelle.",
    "philosophicalContext": "Marx apprécie chez Fourier l'ironie décapante et la critique géniale de l'aliénation domestique et de la famille bourgeoise, mais il raille l'illusion de penser que l'on pourrait financer de telles oasis en dehors du bouleversement révolutionnaire de la production générale.",
    "cognatesFr": ["phalanstère", "phalange", "monastère"],
    "relatedConcepts": ["fourier", "utopian_socialism"],
    "difficulty": "advanced"
  },

  // ch3_p50_s6_w18 : Home-Kolonien
  "ch3_p50_s6_w18": {
    "wordId": "ch3_p50_s6_w18",
    "wordIds": ["ch3_p50_s6_w18"],
    "translationFr": "colonies à l'intérieur / Home-colonies",
    "literalTranslation": "colonies intérieures, colonies coopératives métropolitaines",
    "contextNote": "Deuxième projet utopique répertorié par Marx : « Gründung von Home-Kolonien » (création de colonies de l'intérieur). Réfère sans équivoque aux projets coopératifs communautaires de Robert Owen en Grande-Bretagne.",
    "grammaticalRole": "Nom composé féminin pluriel précédé de la préposition « von » (die Home-Kolonie, die Home-Kolonien).",
    "etymology": "Emprunt composé direct à l'anglais « home colonies ». Le premier élément « home » remonte au vieil anglais « hām » (village, foyer familial, maison natale, issu du proto-germanique « *haimaz », cognat de l'allemand « Heim »). Le second élément « Kolonie » est un emprunt au latin « colonia » (domaine agricole, terre allouée à des fermiers, de « colonus » / cultivateur, colon, du verbe « colere » / habiter, cultiver, soigner). Robert Owen désignait ainsi des villages industriels modèles et coopératifs établis en métropole anglaise pour résorber le chômage ouvrier sans recourir à l'émigration coloniale lointaine.",
    "philosophicalContext": "Tout en saluant les initiatives concrètes d'Owen à New Lanark (crèches, limitation de la journée de travail), Marx montre que la concurrence capitaliste étouffera inévitablement toute colonie isolée qui refuse la lutte politique pour le contrôle de l'appareil d'État.",
    "cognatesFr": ["colonie", "colonial"],
    "relatedConcepts": ["owen", "compound_noun"],
    "difficulty": "intermediate"
  },

  // ch3_p50_s6_w23 : Ikariens
  "ch3_p50_s6_w23": {
    "wordId": "ch3_p50_s6_w23",
    "wordIds": ["ch3_p50_s6_w23"],
    "translationFr": "d'Icarie",
    "literalTranslation": "d'Icarie (république communautaire idéale conçue par Cabet)",
    "contextNote": "Troisième système communautaire ciblé : « Errichtung eines kleinen Ikariens » (érection d'une petite Icarie). Réfère à la doctrine du communisme icarien d'Étienne Cabet.",
    "grammaticalRole": "Nom propre neutre au génitif singulier avec désinence en « -s » (das Ikarien).",
    "etymology": "Nom propre forgé par l'avocat et publiciste communiste français Étienne Cabet (1788-1856) dans son roman philosophique à succès « Voyage en Icarie » (1840). Il est dérivé du nom du héros mythologique grec Icare (« Íkaros » / Ἴκαρος, fils de l'architecte Dédale, dont les ailes confectionnées de plumes et de cire fondirent lorsqu'il s'approcha trop près du soleil). Les partisans de cette doctrine communautaire se désignaient sous le nom d'« Icariens » (*Ikararier*). En 1848, au moment où paraît le Manifeste, les premiers contingents d'icariens s'embarquaient pour fonder une colonie modèle au Texas.",
    "philosophicalContext": "Le choix d'Icare contient une cruelle ironie objective : comme le héros mythique tombé dans la mer, les colonies de Cabet aux États-Unis s'effondrèrent rapidement sous le choc des rivalités personnelles et des dures réalités économiques.",
    "cognatesFr": ["Icarie", "icarien", "Icare"],
    "relatedConcepts": ["gen", "cabet", "utopian_socialism"],
    "difficulty": "advanced"
  },

  // ch3_p50_s6_w25 : Duodezausgabe (Taschenausgabe de Jérusalem)
  "ch3_p50_s6_w25": {
    "wordId": "ch3_p50_s6_w25",
    "wordIds": ["ch3_p50_s6_w25"],
    "translationFr": "édition in-douze / format de poche",
    "literalTranslation": "édition au format in-douze (minuscule livret de poche de douze feuillets pliés)",
    "contextNote": "Trait d'esprit ravageur de Marx placé entre deux tirets d'incise : « Errichtung eines kleinen Ikariens – Duodezausgabe des neuen Jerusalems – » (érection d'une petite Icarie — édition in-douze du nouveau Jérusalem). Marx contraste le format d'imprimerie minuscule (l'in-douze, l'ancêtre du format de poche) avec la prophétie millénariste grandiose de la Nouvelle Jérusalem céleste de l'Apocalypse, réduisant l'utopie à un modèle miniature ridicule.",
    "grammaticalRole": "Nom composé féminin au nominatif singulier (die Duodezausgabe), placé en apposition ironique.",
    "etymology": "Composé bibliographique unissant l'élément savant latin « duodez » (issu du latin « duodecim » = douze, de « duo » / deux et « decem » / dix) et le substantif allemand « Ausgabe » (édition, tirage, publication d'un livre). Le nom « Ausgabe » est un déverbal du verbe composé séparable « ausgeben » (dépenser, distribuer, éditer, issu du moyen haut-allemand « ūzgeben », vieux haut-allemand « ūzgëban »). En imprimerie traditionnelle, le format « in-douze » (in-12°) est obtenu en pliant chaque feuille imprimée en douze feuillets (soit 24 pages), produisant un tout petit livre de poche de format réduit. Par extension familière en allemand, le préfixe « Duodez- » sert à désigner ironiquement une entité lilliputienne, mesquine ou d'opérette (comme les minuscules principautés allemandes appelées « Duodezfürstentümer »).",
    "philosophicalContext": "Marx fustige la prétention de vouloir réaliser la libération totale du genre humain sous la forme d'un échantillon miniature de laboratoire social dépendant du bon vouloir des mécènes bourgeois.",
    "cognatesFr": ["in-douze", "douzaine", "édition"],
    "relatedConcepts": ["nom", "compound_noun", "satire"],
    "difficulty": "advanced"
  },

  // ch3_p50_s6_w47 : Geldsäcke (Kassensturz / bourses bourgeoises)
  "ch3_p50_s6_w47": {
    "wordId": "ch3_p50_s6_w47",
    "wordIds": ["ch3_p50_s6_w47"],
    "translationFr": "bourses / coffres-forts des bourgeois",
    "literalTranslation": "sacs d'argent, gros sous, caisses financières bourgeoises",
    "contextNote": "Chute impitoyable du paragraphe 50 : pour financer leurs châteaux en Espagne, les apôtres de la fraternité universelle sont contraints de faire les comptes et de mendier auprès des bourses des capitalistes (« an die Philanthropie der bürgerlichen Herzen und Geldsäcke appellieren »).",
    "grammaticalRole": "Nom composé masculin pluriel à l'accusatif après la préposition régissante « an » (der Geldsack, die Geldsäcke).",
    "etymology": "Substantif composé réunissant « Geld » (argent monnayé, numéraire, richesse financière) et « Sack » (sac, bourse de monnaie). Le mot « Geld » remonte au moyen haut-allemand « gelt » (paiement, valeur légale, moyen d'échange), lui-même issu du vieux haut-allemand « gelt » (rétribution, offrande sacrificielle, impôt versé, déverbal du verbe fort « gelten » / payer, valoir, issu du proto-germanique « *geldaną »). Le second élément « Sack » remonte au moyen haut-allemand « sac », vieux haut-allemand « sac », emprunt très ancien au latin classique « saccus », lui-même issu du grec ancien « sákkos » (σάκκος) et ultimement d'origine sémitique phénicienne.",
    "philosophicalContext": "Cette métaphores des « sacs d'argent » achève la démolition de l'utopisme : quiconque refuse l'expropriation politique de la bourgeoisie finit inévitablement par quémander des subsides à sa table.",
    "cognatesFr": ["sac", "saccoche"],
    "relatedConcepts": ["acc", "compound_noun", "capitalism"],
    "difficulty": "intermediate"
  },

  // ch3_p52_s1_w14 : Chartisten (Chapitre 3)
  "ch3_p52_s1_w14": {
    "wordId": "ch3_p52_s1_w14",
    "wordIds": ["ch3_p52_s1_w14"],
    "translationFr": "chartistes",
    "literalTranslation": "chartistes, partisans de la Charte du Peuple en Angleterre",
    "contextNote": "Marx dénonce l'inconséquence réactionnaire des owenistes qui attaquent le parti chartiste : « Die Owenisten in England [...] reagieren dort gegen die Chartisten ».",
    "grammaticalRole": "Nom masculin pluriel à l'accusatif régi par la préposition « gegen » (der Chartist, die Chartisten).",
    "etymology": "Emprunt à l'anglais « Chartist », substantif forgé à partir de « Charter » (la Charte). Le mot anglais « charter » est un emprunt à l'ancien français « chartre / charte », issu du latin « charta » (feuille de papyrus, document officiel scellé), lui-même emprunté au grec ancien « chártēs » (χάρτης = feuille d'écriture). Le terme désigne les partisans de la « Charte du Peuple » (*People's Charter*) rédigée en 1838 par William Lovett et Feargus O'Connor, qui réclamait six points cardinaux : le suffrage universel masculin, des parlements annuels, le scrutin secret, l'abolition du cens d'éligibilité et l'indemnité parlementaire.",
    "philosophicalContext": "Pour Marx et Engels, le chartisme constituait la première expression historique d'un parti de classe prolétarien indépendant et de masse, armé de revendications politiques directes contre l'oligarchie parlementaire anglaise.",
    "cognatesFr": ["chartiste", "charte"],
    "relatedConcepts": ["acc", "chartism", "politics"],
    "difficulty": "intermediate"
  },

  // ch3_p52_s1_w19 : Reformisten (Chapitre 3)
  "ch3_p52_s1_w19": {
    "wordId": "ch3_p52_s1_w19",
    "wordIds": ["ch3_p52_s1_w19"],
    "translationFr": "réformistes",
    "literalTranslation": "réformistes, partisans démocrates républicains de La Réforme",
    "contextNote": "Pendant français des chartistes : « die Fourieristen in Frankreich reagieren [...] hier gegen die Reformisten ». Les fouriéristes de l'école sociétaire de Victor Considerant combattaient les républicains radicaux qui préparaient la révolution de 1848.",
    "grammaticalRole": "Nom masculin pluriel à l'accusatif régi par la préposition « gegen » (der Reformist, die Reformisten).",
    "etymology": "Emprunt savant formé à partir de la racine latine « reformare » (reformer, renouveler, transformer, de « re- » marquant le retour et « formare » / donner une forme) avec le suffixe d'adhésion « -ist ». En France, dans les années 1840, le terme désignait les républicains de gauche et socialistes démocrates regroupés autour du quotidien « La Réforme », fondé en 1843 par Alexandre Ledru-Rollin, avec la participation active de Louis Blanc et Ferdinand Flocon (qui collaborèrent directement avec Marx et Engels à Paris).",
    "philosophicalContext": "Marx condamne l'abstentionnisme sectaire des disciples de Fourier : en rejetant l'action politique aux côtés des réformistes républicains, ils désertaient le terrain où se jouait l'émancipation concrète de la classe ouvrière.",
    "cognatesFr": ["réformiste", "réforme"],
    "relatedConcepts": ["acc", "politics", "french_revolution"],
    "difficulty": "intermediate"
  },

  // ------------------------------------------------------------
  // CHAPITRE 4 : Tactique, Alliances & Appel Final
  // ------------------------------------------------------------

  // ch4_p1_s1_w23 : Chartisten (Chapitre 4)
  "ch4_p1_s1_w23": {
    "wordId": "ch4_p1_s1_w23",
    "wordIds": ["ch4_p1_s1_w23"],
    "translationFr": "chartistes",
    "literalTranslation": "chartistes, membres du mouvement chartiste en Grande-Bretagne",
    "contextNote": "Ouverture tactique du Chapitre 4 : les communistes soutiennent résolument les partis ouvriers déjà constitués, au premier rang desquels figurent les chartistes anglais.",
    "grammaticalRole": "Nom masculin pluriel au datif régi par la préposition « zu » (den Chartisten).",
    "etymology": "Emprunt à l'anglais « Chartist », dérivé de « Charter » (charte constitutionnelle, issu de l'ancien français « charte », du latin « charta » / papyrus, feuille officielle, du grec « chártēs »). Réfère à la People's Charter de 1838.",
    "philosophicalContext": "Ce paragraphe pose le grand principe de la tactique communiste marxiste : faire cause commune avec le mouvement ouvrier réel tel qu'il existe historiquement, sans lui imposer de catéchisme dogmatique abstrait, tout en incarnant l'avenir global du mouvement révolutionnaire.",
    "relatedConcepts": ["dat", "chartism"],
    "difficulty": "basic"
  },

  // ch4_p4_s1_w26 : Krakauer (Krakauer Revolution / Insurrektion)
  "ch4_p4_s1_w26": {
    "wordId": "ch4_p4_s1_w26",
    "wordIds": ["ch4_p4_s1_w26"],
    "translationFr": "de Cracovie",
    "literalTranslation": "cracovien, relatif à la ville libre de Cracovie",
    "contextNote": "Épithète toponymique définissant l'insurrection polonaise de 1846 (« die Krakauer Insurrektion von 1846 »). Ralliement sans faille des communistes aux patriotes polonais révolutionnaires.",
    "grammaticalRole": "Adjectif relationnel toponymique en « -er », invariable en allemand.",
    "etymology": "Formé sur le toponyme polonais « Kraków » (Cracovie, ancienne capitale royale de Pologne, dont le nom légendaire est rattaché au prince mythique Krakus) avec le suffixe dérivationnel germanique « -er » servant à former les adjectifs toponymiques et gentilés invariables (attesté depuis le vieux haut-allemand « -āri », moyen haut-allemand « -aere »).",
    "philosophicalContext": "L'insurrection de Cracovie (février 1846) est l'événement fondateur de la géopolitique révolutionnaire de Marx : pour briser la Sainte-Alliance autrichienne et russe, les insurgés cracoviens ont aboli les corvées seigneuriales et proclamé l'égalité des paysans, reliant ainsi la libération nationale polonaise à la révolution agraire démocratique.",
    "cognatesFr": ["cracovien"],
    "relatedConcepts": ["adj", "krakow_revolution", "poland"],
    "difficulty": "advanced"
  },

  // ch4_p4_s1_w27 : Insurrektion (Krakauer Revolution / Insurrektion)
  "ch4_p4_s1_w27": {
    "wordId": "ch4_p4_s1_w27",
    "wordIds": ["ch4_p4_s1_w27"],
    "translationFr": "insurrection / soulèvement en armes",
    "literalTranslation": "soulèvement insurrectionnel armé",
    "contextNote": "Substantif désignant la révolution de Cracovie de février 1846 (« dieselbe Partei, welche die Krakauer Insurrektion von 1846 ins Leben rief »).",
    "grammaticalRole": "Nom féminin singulier à l'accusatif (die Insurrektion), COD de la locution verbale « ins Leben rief ».",
    "etymology": "Emprunt savant au latin tardif « insurrectio » (soulèvement, action de se dresser), substantif d'action formé sur le supin « insurrectum » du verbe classique « insurgere » (se lever contre, s'élever, se dresser en armes), lui-même composé de la préposition « in- » (contre, vers) et de « surgere » (se lever, surgir). Le terme est entré dans le vocabulaire républicain européen lors des révolutions de 1789 et de 1830.",
    "philosophicalContext": "Marx et Engels ont célébré l'insurrection de Cracovie lors d'un meeting international le 22 février 1848 à Bruxelles, déclarant que les révolutionnaires polonais de 1846 avaient inauguré une ère nouvelle en devenant « des démocrates prolétariens » associant la cause nationale à la destruction du servage féodal.",
    "cognatesFr": ["insurrection", "insurgé", "surgir"],
    "relatedConcepts": ["acc", "krakow_revolution", "revolution"],
    "difficulty": "advanced"
  },

  // ch4_p9_s1_w3 : verschmähen
  "ch4_p9_s1_w3": {
    "wordId": "ch4_p9_s1_w3",
    "wordIds": ["ch4_p9_s1_w3"],
    "translationFr": "dédaignent / repoussent avec mépris",
    "literalTranslation": "dédaignent avec fierté, rejettent comme indigne d'eux",
    "contextNote": "Ouverture magistrale de la conclusion solennelle du Manifeste : « Die Kommunisten verschmähen es, ihre Ansichten und Absichten zu verheimlichen » (Les communistes dédaignent de dissimuler leurs opinions et leurs desseins). Rupture absolue avec les conspirations secrètes conspiratives de type carbonariste ou babouviste.",
    "grammaticalRole": "Verbe transitif au présent de l'indicatif (3e personne du pluriel), régissant la proposition infinitive « zu verheimlichen » introduite par le pronom corrélatif anticipateur « es ».",
    "etymology": "Verbe préfixé inséparable unissant le préfixe germanique d'intensité et de mépris « ver- » (vieux haut-allemand « far- / fir- ») et le radical verbal « schmähen » (injurier, mépriser, diffamer). Le verbe « schmähen » remonte au moyen haut-allemand « smæhen », vieux haut-allemand « smāhēn » (rabaisser, traiter avec dédain), dérivé de l'adjectif vieux haut-allemand « smāhi » (petit, mesquin, indigne, méprisable, issu du proto-germanique « *smēhaz »).",
    "philosophicalContext": "Cette formule marque le passage historique des sociétés secrètes aux partis ouvriers de masse à visage découvert : le communisme scientifique refuse le masque des conjurations clandestines car la force du prolétariat repose sur la conscience claire et publique de ses buts historiques.",
    "relatedConcepts": ["verb", "v2", "manifesto_conclusion"],
    "difficulty": "advanced"
  },

  // ch4_p9_s2_w15 : gewaltsamen (Gewaltsamer Umsturz - adjectif)
  "ch4_p9_s2_w15": {
    "wordId": "ch4_p9_s2_w15",
    "wordIds": ["ch4_p9_s2_w15"],
    "translationFr": "violent / par la force",
    "literalTranslation": "violent, par usage de la force ouverte",
    "contextNote": "Épithète qualifiant « Umsturz » dans la profession de foi révolutionnaire : « durch den gewaltsamen Umsturz aller bisherigen Gesellschaftsordnung » (par le renversement violent de tout l'ordre social passé).",
    "grammaticalRole": "Adjectif qualificatif à l'accusatif masculin singulier (déclinaison faible en « -en » après l'article défini « den »).",
    "etymology": "Dérivé du substantif « Gewalt » (force, puissance, pouvoir légitime ou violent) à l'aide du suffixe adjectival « -sam » (exprimant la prédisposition ou la qualité intrinsèque, vieux haut-allemand « -sam »). Le nom « Gewalt » remonte au moyen haut-allemand « gewalt » (puissance, domination, force supérieure), lui-même issu du vieux haut-allemand « giwalt » (autorité souveraine, pouvoir d'action), formé avec le préfixe collectif « gi- / ge- » sur la racine verbale forte « waltan » (gouverner, régner, disposer souverainement, issue du proto-germanique « *waldaną », rattachée à la racine indo-européenne « *wal- » / être fort, prévaloir, d'où dérive le latin « valere » / être vigoureux, avoir du pouvoir).",
    "philosophicalContext": "Pour Marx, la « Gewalt » (la violence révolutionnaire) n'est pas une fin en soi ni un terrorisme nihiliste, mais une nécessité dialectique imposée par la nature même de la domination bourgeoise : les classes possédantes ne renonçant jamais de leur plein gré à la propriété privée des moyens de production, la force seule peut briser leur résistance étatique.",
    "cognatesFr": ["valeur", "valide"],
    "relatedConcepts": ["acc", "adj", "gewalt", "revolution"],
    "difficulty": "advanced"
  },

  // ch4_p9_s2_w16 : Umsturz (Gewaltsamer Umsturz - nom)
  "ch4_p9_s2_w16": {
    "wordId": "ch4_p9_s2_w16",
    "wordIds": ["ch4_p9_s2_w16"],
    "translationFr": "renversement / subversion radicale",
    "literalTranslation": "culbute totale, renversement de fond en comble, subversion complète",
    "contextNote": "Noyau nominal de la déclaration finale : « durch den gewaltsamen Umsturz aller bisherigen Gesellschaftsordnung ».",
    "grammaticalRole": "Nom masculin singulier à l'accusatif régi par la préposition spatio-causale « durch » (der Umsturz).",
    "etymology": "Substantif déverbal direct du verbe composé séparable « umstürzen » (faire s'écrouler, renverser d'un coup, culbuter). Le préverbe « um- » (issu du moyen haut-allemand « umbe », vieux haut-allemand « umbi », proto-germanique « *umbi » / autour, à l'envers) exprime le basculement complet de bas en haut. Le verbe radical « stürzen » remonte au moyen haut-allemand « stürzen » (précipiter avec force, jeter à terre, faire basculer), lui-même issu du vieux haut-allemand « sturzen / sturzjan » (renverser violemment, issu du proto-germanique « *sturtijaną » / faire tourner brusquement, trébucher).",
    "philosophicalContext": "Le concept d'« Umsturz » récuse tout gradualisme réformiste : la révolution prolétarienne ne vise pas à aménager les institutions existantes, mais à les renverser de fond en comble pour transformer l'infrastructure économique et abolir la société de classes.",
    "relatedConcepts": ["acc", "revolution"],
    "difficulty": "advanced"
  },

  // ch4_p9_s4_w8 : Ketten
  "ch4_p9_s4_w8": {
    "wordId": "ch4_p9_s4_w8",
    "wordIds": ["ch4_p9_s4_w8"],
    "translationFr": "chaînes / fers",
    "literalTranslation": "chaînes (métalliques ou d'esclavage)",
    "contextNote": "Pénultième formule emblématique du Manifeste : « Die Proletarier haben nichts in ihr zu verlieren als ihre Ketten » (Les prolétaires n'y ont rien à perdre que leurs chaînes).",
    "grammaticalRole": "Nom féminin pluriel à l'accusatif (die Kette, die Ketten), régi par la locution comparative restrictive « nichts [...] als ».",
    "etymology": "Issu du moyen haut-allemand « kette / ketene », vieux haut-allemand « ketina / chetina » (chaîne métallique, liens de fer). Emprunt très ancien au latin classique « catena » (chaîne, lien, entrave, d'étymologie discutée). Le mot est apparenté au français « chaîne » et à l'anglais « chain ».",
    "philosophicalContext": "Marx oppose le dénuement absolu du prolétaire moderne (dépouillé de tout moyen de production propre, ne possédant que sa force de travail) à l'universalité de sa mission historique : n'ayant aucun intérêt corporatif particulier à préserver, il ne peut s'émanciper qu'en émancipant l'humanité entière.",
    "cognatesFr": ["chaîne", "chaînette", "enchaîner"],
    "relatedConcepts": ["acc", "proletariat"],
    "difficulty": "intermediate"
  },

  // ch4_p9_s5_w4 : Welt
  "ch4_p9_s5_w4": {
    "wordId": "ch4_p9_s5_w4",
    "wordIds": ["ch4_p9_s5_w4"],
    "translationFr": "monde",
    "literalTranslation": "monde, univers, terre entière",
    "contextNote": "Réponse lumineuse à la phrase précédente : « Sie haben eine Welt zu gewinnen » (Ils ont un monde à gagner).",
    "grammaticalRole": "Nom féminin singulier à l'accusatif (die Welt), COD du verbe à l'infinitif « zu gewinnen ».",
    "etymology": "Remonte au moyen haut-allemand « werlt / welt », vieux haut-allemand « weralt / werolt », issu du proto-germanique « *weralōdiz » (littéralement « l'âge de l'homme », composé étymologique réunissant « *weraz » / homme adulte mâle, cognat du latin « vir », et « *aldiz » / époque, âge, génération, rattaché à l'adjectif « alt » / vieux). Le mot désignait initialement la durée de la vie humaine et l'ensemble de l'existence terrestre des mortels, avant d'élargir son sens à l'univers habité et à l'espace cosmopolitique mondial.",
    "philosophicalContext": "L'affirmation d'« un monde à gagner » consacre la dimension universelle et planétaire de la révolution communiste, qui abolit l'étroitesse nationale pour fonder la communauté des producteurs associés.",
    "cognatesFr": ["monde"],
    "relatedConcepts": ["acc", "internationalism"],
    "difficulty": "intermediate"
  },

  // ch4_p10_s1_w5 : vereinigt (Vereinigt euch!)
  "ch4_p10_s1_w5": {
    "wordId": "ch4_p10_s1_w5",
    "wordIds": ["ch4_p10_s1_w5"],
    "translationFr": "unissez-vous",
    "literalTranslation": "unissez, faites un (forme impérative pluriel)",
    "contextNote": "L'appel historique qui clôt le Manifeste : « Proletarier aller Länder, vereinigt euch! » (Prolétaires de tous les pays, unissez-vous !). Devise officielle de la Ligue des communistes adoptée en 1847 à Londres à l'initiative de Marx et Engels, remplaçant la devise moralisatrice et sentimentale de la Ligue des justes (« Tous les hommes sont frères »).",
    "grammaticalRole": "Verbe réfléchi conjugué à l'impératif présent, 2e personne du pluriel (avec le pronom réfléchi à l'accusatif « euch »).",
    "etymology": "Forme impérative du verbe transitif et réfléchi « vereinigen » (unir, rassembler en une seule entité, concilier). Verbe dérivé formé avec le préfixe germanique de transformation et d'accomplissement parfait « ver- » (vieux haut-allemand « far- / fir- ») et le radical numéral « ein » (un). Le numéral remonte au moyen haut-allemand « ein », vieux haut-allemand « ein », lui-même issu du proto-germanique « *ainaz », issu de la racine indo-européenne « *oi-no- » (unique, seul, un, cognat direct du latin « unus » et du grec « oînos » / l'as aux dés). Le verbe signifie au sens étymologique le plus strict : « amener des éléments distincts et dispersés à ne faire plus qu'un ».",
    "philosophicalContext": "Cet impératif suprême couronne l'édifice matérialiste du Manifeste : le capitalisme mondialisé organisant la concurrence acharnée entre les prolétaires de toutes les nations, l'émancipation ouvrière ne peut triompher que par l'union internationale de tous les travailleurs au-dessus des frontières bourgeoises.",
    "cognatesFr": ["unir", "union", "unitaire"],
    "relatedConcepts": ["verb", "imp", "internationalism", "proletariat"],
    "difficulty": "advanced"
  }
};
