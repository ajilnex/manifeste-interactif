import type { Concept } from '../types';

export const concepts: Record<string, Concept> = {
  // Grammar concepts
  'nom': {
    id: 'nom',
    nameDe: 'Nominativ',
    nameFr: 'Nominatif',
    category: 'grammar',
    explanation: 'Le cas du sujet. Il répond à la question "Qui est-ce qui ?" (Wer oder was?). En allemand, il détermine la forme de l\'article (der/die/das/die).',
    relatedConcepts: ['decl', 'acc', 'dat', 'gen'],
    examples: [
      { textDe: 'Ein Gespenst geht um...', textFr: 'Un spectre hante...' }
    ],
    icon: '§'
  },
  'acc': {
    id: 'acc',
    nameDe: 'Akkusativ',
    nameFr: 'Accusatif',
    category: 'grammar',
    explanation: 'Le cas du complément d\'objet direct (COD) et de certaines prépositions (comme gegen). Il répond à la question "Qui/Quoi ?" (Wen oder was?). Seul l\'article masculin change par rapport au nominatif (der -> den).',
    relatedConcepts: ['decl', 'nom', 'dat', 'gen', 'prep'],
    examples: [
      { textDe: '...gegen dies Gespenst', textFr: '...contre ce spectre' }
    ],
    icon: '→'
  },
  'dat': {
    id: 'dat',
    nameDe: 'Dativ',
    nameFr: 'Datif',
    category: 'grammar',
    explanation: 'Le cas du complément d\'objet indirect (COI), du lieu (sans mouvement) et de certaines prépositions (aus, bei, mit, nach, seit, von, zu).',
    relatedConcepts: ['decl', 'nom', 'acc', 'gen', 'prep'],
    examples: [
      { textDe: 'In den früheren Epochen...', textFr: 'Dans les premières époques...' }
    ],
    icon: '◆'
  },
  'gen': {
    id: 'gen',
    nameDe: 'Genitiv',
    nameFr: 'Génitif',
    category: 'grammar',
    explanation: 'Le cas du complément du nom, marquant souvent la possession ou l\'appartenance. En allemand, le nom masculin/neutre au génitif prend souvent un -s ou -es final.',
    relatedConcepts: ['decl', 'nom', 'acc', 'dat', 'comp_noun'],
    examples: [
      { textDe: 'das Gespenst des Kommunismus', textFr: 'le spectre du communisme' },
      { textDe: 'aller bisherigen Gesellschaft', textFr: 'de toute société passée' }
    ],
    icon: '◇'
  },
  'v2': {
    id: 'v2',
    nameDe: 'Verbzweitstellung',
    nameFr: 'Verbe en position 2 (V2)',
    category: 'grammar',
    explanation: 'Règle fondamentale de la syntaxe allemande: dans une proposition principale, le verbe conjugué doit toujours être en deuxième position. Si le premier élément n\'est pas le sujet, le sujet se place juste après le verbe (inversion).',
    relatedConcepts: ['sub_clause', 'sep_verb'],
    examples: [
      { textDe: 'Zu diesem Zweck haben sich Kommunisten...', textFr: 'À cette fin, des communistes se sont...' }
    ],
    icon: '№'
  },
  'decl': {
    id: 'decl',
    nameDe: 'Deklination',
    nameFr: 'Déclinaison',
    category: 'grammar',
    explanation: 'La modification de la forme d\'un mot (article, adjectif, nom) pour indiquer son rôle grammatical (cas), son genre et son nombre dans la phrase.',
    relatedConcepts: ['nom', 'acc', 'dat', 'gen', 'gender', 'plural'],
    icon: '※'
  },
  'gender': {
    id: 'gender',
    nameDe: 'Grammatisches Geschlecht',
    nameFr: 'Genre grammatical',
    category: 'grammar',
    explanation: 'Les noms allemands ont un genre grammatical (Masculin, Féminin ou Neutre) qui ne correspond pas toujours à leur sexe biologique ou à leur genre en français. Ce genre détermine les articles (der/die/das).',
    relatedConcepts: ['decl', 'def_art', 'indef_art'],
    icon: '¶'
  },
  'sub_clause': {
    id: 'sub_clause',
    nameDe: 'Nebensatz',
    nameFr: 'Proposition subordonnée',
    category: 'grammar',
    explanation: 'Dans une proposition subordonnée (introduite par dass, weil, wenn, ou un pronom relatif), le verbe conjugué est rejeté à la toute fin de la phrase.',
    relatedConcepts: ['v2', 'conj'],
    examples: [
      { textDe: '...daß sie die Klassengegensätze vereinfacht hat.', textFr: '...qu\'elle a simplifié les antagonismes de classe.' }
    ],
    icon: '↳'
  },
  'sep_verb': {
    id: 'sep_verb',
    nameDe: 'Trennbare Verben',
    nameFr: 'Verbe à particule séparable',
    category: 'grammar',
    explanation: 'Certains verbes allemands ont un préfixe qui se détache et se place à la fin de la proposition principale (ex: um|gehen -> geht ... um).',
    relatedConcepts: ['v2'],
    examples: [
      { textDe: 'Ein Gespenst geht um...', textFr: 'Un spectre hante... (verbe umgehen)' }
    ],
    icon: '‡'
  },
  'comp_noun': {
    id: 'comp_noun',
    nameDe: 'Kompositum',
    nameFr: 'Composé nominal',
    category: 'grammar',
    explanation: 'L\'allemand permet de créer de nouveaux mots en collant plusieurs noms ensemble. Le dernier mot donne le genre et détermine le sens principal, le premier apporte une précision (ex: Klassen + Kampf = Klassenkampf).',
    relatedConcepts: ['comp_word'],
    examples: [
      { textDe: 'Klassenkampf', textFr: 'Lutte des classes (Klassen + Kampf)' }
    ],
    icon: '■'
  },
  'def_art': {
    id: 'def_art',
    nameDe: 'Bestimmter Artikel',
    nameFr: 'Article défini',
    category: 'grammar',
    explanation: 'L\'article défini (le, la, les) prend la forme der, die, das au nominatif, et se décline selon le cas et le genre du nom qui suit.',
    relatedConcepts: ['decl', 'gender', 'indef_art'],
    icon: '·'
  },
  'indef_art': {
    id: 'indef_art',
    nameDe: 'Unbestimmter Artikel',
    nameFr: 'Article indéfini',
    category: 'grammar',
    explanation: 'L\'article indéfini (un, une) prend la forme ein, eine, ein au nominatif. Il n\'y a pas d\'article indéfini au pluriel ("des" se traduit souvent par l\'absence d\'article).',
    relatedConcepts: ['decl', 'gender', 'def_art'],
    icon: '·'
  },
  'plural': {
    id: 'plural',
    nameDe: 'Plural',
    nameFr: 'Pluriel',
    category: 'grammar',
    explanation: 'Contrairement au français qui ajoute généralement un "s", l\'allemand forme le pluriel de multiples façons (-e, -er, -n, -en, ou un changement de voyelle (Umlaut) comme dans Kampf -> Kämpfe).',
    relatedConcepts: ['decl', 'gender'],
    examples: [
      { textDe: 'Mächte (sing. Macht)', textFr: 'Puissances' }
    ],
    icon: '≠'
  },

  // Philosophy concepts
  'gespenst': {
    id: 'gespenst',
    nameDe: 'Gespenst',
    nameFr: 'Spectre',
    category: 'philosophy',
    explanation: 'Une métaphore récurrente chez Marx. Le communisme est vu par les puissances européennes comme une menace diffuse, irrationnelle et effrayante (un fantôme). Marx retourne cette image pour affirmer la réalité matérielle et inéluctable du mouvement ouvrier.',
    relatedConcepts: ['communism'],
    icon: '◆'
  },
  'bourgeoisie': {
    id: 'bourgeoisie',
    nameDe: 'Bourgeoisie',
    nameFr: 'Bourgeoisie',
    category: 'philosophy',
    explanation: 'La classe sociale qui possède les moyens de production capitalistes et emploie le travail salarié. Pour Marx, elle est issue du déclin de la société féodale et a joué un rôle historiquement révolutionnaire avant de devenir la classe dominante et oppressive.',
    relatedConcepts: ['proletariat', 'class_struggle', 'capital', 'feudalism'],
    icon: '▲'
  },
  'proletariat': {
    id: 'proletariat',
    nameDe: 'Proletariat',
    nameFr: 'Prolétariat',
    category: 'philosophy',
    explanation: 'La classe des travailleurs salariés modernes qui, ne possédant pas de moyens de production, sont contraints de vendre leur force de travail pour survivre. C\'est la classe que la bourgeoisie exploite, mais aussi celle qui détruira la domination bourgeoise.',
    relatedConcepts: ['bourgeoisie', 'class_struggle', 'exploitation'],
    icon: '■'
  },
  'class_struggle': {
    id: 'class_struggle',
    nameDe: 'Klassenkampf',
    nameFr: 'Lutte des classes',
    category: 'philosophy',
    explanation: 'Concept central du Manifeste : l\'histoire humaine est propulsée par le conflit permanent entre la classe dominante (oppresseurs) et la classe dominée (opprimés) à travers les différents modes de production.',
    relatedConcepts: ['bourgeoisie', 'proletariat', 'hist_mat'],
    icon: '✕'
  },
  'hist_mat': {
    id: 'hist_mat',
    nameDe: 'Historischer Materialismus',
    nameFr: 'Matérialisme historique',
    category: 'philosophy',
    explanation: 'La méthode marxiste de compréhension de l\'histoire. Elle affirme que ce ne sont pas les idées qui dirigent le monde, mais l\'évolution des structures économiques (le mode de production) qui détermine l\'organisation sociale et politique d\'une époque.',
    relatedConcepts: ['prod_rel', 'class_struggle'],
    icon: '§'
  },
  'prod_rel': {
    id: 'prod_rel',
    nameDe: 'Produktionsverhältnisse',
    nameFr: 'Rapports de production',
    category: 'philosophy',
    explanation: 'Les relations sociales et économiques que les hommes nouent entre eux pour produire. Dans le capitalisme, c\'est la relation d\'exploitation entre le capitaliste propriétaire et le travailleur salarié.',
    relatedConcepts: ['hist_mat', 'capital', 'exploitation'],
    icon: '■'
  },
  'property': {
    id: 'property',
    nameDe: 'Eigentum',
    nameFr: 'Propriété (privée)',
    category: 'philosophy',
    explanation: 'Pour Marx, il ne s\'agit pas de la propriété personnelle des biens de consommation, mais de la propriété privée des "moyens de production" (usines, terres, machines) qui permet l\'exploitation du travail d\'autrui.',
    relatedConcepts: ['capital', 'bourgeoisie', 'exploitation'],
    icon: '·'
  },
  'revolution': {
    id: 'revolution',
    nameDe: 'Revolution',
    nameFr: 'Révolution',
    category: 'philosophy',
    explanation: 'La transformation radicale d\'un mode de production et du système politique qui l\'accompagne. Le Manifeste décrit la révolution bourgeoise passée (contre le féodalisme) et annonce la révolution prolétarienne à venir (contre le capitalisme).',
    relatedConcepts: ['class_struggle', 'hist_mat'],
    icon: '▲'
  },
  'capital': {
    id: 'capital',
    nameDe: 'Kapital',
    nameFr: 'Capital',
    category: 'philosophy',
    explanation: 'De la valeur qui s\'accroît en exploitant le travail salarié. Ce n\'est pas simplement de l\'argent, mais un rapport social: de l\'argent investi pour acheter de la force de travail et des moyens de production dans le but de générer du profit.',
    relatedConcepts: ['bourgeoisie', 'property', 'exploitation'],
    icon: '◆'
  },
  'exploitation': {
    id: 'exploitation',
    nameDe: 'Ausbeutung',
    nameFr: 'Exploitation',
    category: 'philosophy',
    explanation: 'Le processus par lequel le capitaliste s\'approprie la "plus-value" (la valeur créée par le travailleur qui excède ce qu\'il coûte en salaire).',
    relatedConcepts: ['capital', 'proletariat', 'prod_rel'],
    icon: '※'
  },
  'communism': {
    id: 'communism',
    nameDe: 'Kommunismus',
    nameFr: 'Communisme',
    category: 'philosophy',
    explanation: 'À l\'époque de Marx, ce terme désigne l\'aile la plus radicale du mouvement ouvrier, qui ne cherche pas seulement à améliorer les conditions de vie mais à abolir la propriété privée des moyens de production et la société de classes.',
    relatedConcepts: ['revolution', 'property', 'comm_league'],
    icon: '◆'
  },

  // History concepts
  'rev_1848': {
    id: 'rev_1848',
    nameDe: 'Revolution von 1848',
    nameFr: 'Révolution de 1848 (Le Printemps des peuples)',
    category: 'history',
    explanation: 'Une série de soulèvements révolutionnaires à travers l\'Europe. Le Manifeste a été publié quelques semaines avant le début de cette vague de révolutions.',
    relatedConcepts: ['holy_alliance', 'comm_league'],
    icon: '·'
  },
  'holy_alliance': {
    id: 'holy_alliance',
    nameDe: 'Heilige Allianz',
    nameFr: 'Sainte-Alliance',
    category: 'history',
    explanation: 'Une coalition des monarchies conservatrices européennes (notamment la Russie, l\'Autriche et la Prusse) formée après la défaite de Napoléon pour réprimer les mouvements libéraux, démocratiques et socialistes.',
    relatedConcepts: ['rev_1848'],
    examples: [
      { textDe: '...der Papst und der Zar, Metternich und Guizot...', textFr: '...le pape et le tsar, Metternich et Guizot...' }
    ],
    icon: '▲'
  },
  'feudalism': {
    id: 'feudalism',
    nameDe: 'Feudalismus',
    nameFr: 'Féodalisme',
    category: 'history',
    explanation: 'Le système social, économique et politique du Moyen Âge, basé sur la propriété foncière de la noblesse et l\'exploitation du travail des serfs. Il a été renversé par la montée de la bourgeoisie.',
    relatedConcepts: ['bourgeoisie', 'hist_mat'],
    icon: '■'
  },
  'ind_rev': {
    id: 'ind_rev',
    nameDe: 'Industrielle Revolution',
    nameFr: 'Révolution industrielle',
    category: 'history',
    explanation: 'Le passage d\'une économie agraire et artisanale à une économie dominée par l\'industrie et la fabrication mécanique. Ce bouleversement économique est ce qui a permis l\'ascension de la bourgeoisie moderne et la création du prolétariat industriel.',
    relatedConcepts: ['bourgeoisie', 'proletariat', 'capital'],
    icon: '■'
  },
  'comm_league': {
    id: 'comm_league',
    nameDe: 'Bund der Kommunisten',
    nameFr: 'Ligue des communistes',
    category: 'history',
    explanation: 'Organisation internationale secrète de travailleurs exilés. C\'est cette organisation qui a commandé à Marx et Engels la rédaction du Manifeste du Parti Communiste lors de son congrès à Londres en 1847.',
    relatedConcepts: ['communism', 'rev_1848'],
    icon: '◇'
  },

  // Vocabulary concepts
  'comp_word': {
    id: 'comp_word',
    nameDe: 'Wortzusammensetzung',
    nameFr: 'Mots composés allemands',
    category: 'vocabulary',
    explanation: 'L\'allemand combine souvent des mots pour en créer de nouveaux. Le mot final (le "noyau") détermine le genre et le cas, tandis que le ou les mots précédents le qualifient. Par exemple "Hetzjagd" (chasse à courre) vient de Hetze (traque) + Jagd (chasse).',
    relatedConcepts: ['comp_noun'],
    icon: '◇'
  },
  'false_friend': {
    id: 'false_friend',
    nameDe: 'Falscher Freund',
    nameFr: 'Faux amis (DE/FR)',
    category: 'vocabulary',
    explanation: 'Des mots qui se ressemblent dans les deux langues mais ont un sens différent. Par exemple "Konkurrenz" (concurrence, mais souvent dans le sens de compétition).',
    relatedConcepts: [],
    icon: '!'
  },
  'formal_german': {
    id: 'formal_german',
    nameDe: 'Formelles Deutsch',
    nameFr: 'Allemand formel/archaïque',
    category: 'vocabulary',
    explanation: 'Le Manifeste emploie le vocabulaire et le style formel du milieu du 19ème siècle, incluant des tournures syntaxiques (comme des génitifs étendus) et des mots (comme "Zunftbürger") qui sont rares dans l\'allemand moderne quotidien.',
    relatedConcepts: ['gen', 'v2'],
    icon: '·'
  },
  'latin_root': {
    id: 'latin_root',
    nameDe: 'Lateinischer Ursprung',
    nameFr: 'Racines latines partagées',
    category: 'vocabulary',
    explanation: 'Le Manifeste, en tant que texte politique, emploie de nombreux "Fremdwörter" (mots d\'origine étrangère, souvent latine ou grecque) qui ont un équivalent presque identique en français. Ces mots (ex: Oppositionspartei, Kommunismus) finissent souvent par -ion ou -ismus.',
    relatedConcepts: [],
    examples: [
      { textDe: 'Opposition, Nation, proletarisch...', textFr: 'Opposition, Nation, prolétarien...' }
    ],
    icon: '§'
  },
  'aufhebung': {
    id: 'aufhebung',
    nameDe: 'Aufhebung',
    nameFr: 'Dépassement dialectique (Aufhebung)',
    category: 'philosophy',
    explanation: 'Terme clé de la philosophie hégélienne et marxiste, intraduisible par un seul mot en français. Il condense trois mouvements simultanés : 1. Abolir/annuler (tollere), 2. Conserver/préserver le noyau de vérité (conservare), 3. Élever à un niveau de conscience ou d\'organisation supérieur (elevare).',
    relatedConcepts: ['hist_mat', 'class_struggle', 'revolution'],
    examples: [
      { textDe: '...hat die Klassengegensätze nicht aufgehoben', textFr: '...n\'a pas aboli les antagonismes de classes' }
    ],
    icon: '◆'
  },
  'subj_ii': {
    id: 'subj_ii',
    nameDe: 'Konjunktiv II',
    nameFr: 'Subjonctif II (Irréel / Hypothèse)',
    category: 'grammar',
    explanation: 'Mode verbal exprimant l\'irréel du présent ou du passé, la supposition ou le regret (« aurait été », « eût fait »). Dans les propositions interrogatives ou polémiques de Marx, il sert à poser l\'universalité d\'une situation en contestant qu\'une seule exception pût exister.',
    relatedConcepts: ['sub_clause', 'v2'],
    examples: [
      { textDe: '...als kommunistisch verschrien worden wäre', textFr: '...aurait été décriée comme communiste' }
    ],
    icon: '§'
  },
  'passive': {
    id: 'passive',
    nameDe: 'Passiv',
    nameFr: 'Voix passive (Vorgangspassiv)',
    category: 'grammar',
    explanation: 'Formée avec l\'auxiliaire "werden" + participe passé (Partizip II). Au parfait/plus-que-parfait passif, "werden" prend la forme spéciale "worden" sans préfixe ge-. Le complément d\'agent s\'introduit par "von" (+ datif).',
    relatedConcepts: ['sub_clause', 'dat'],
    examples: [
      { textDe: '...wird bereits von allen Mächten anerkannt', textFr: '...est déjà reconnu par toutes les puissances' }
    ],
    icon: '→'
  },
  'prefix_verb': {
    id: 'prefix_verb',
    nameDe: 'Präfixverben',
    nameFr: 'Préfixes verbaux (inséparables & séparables)',
    category: 'grammar',
    explanation: 'Les préfixes modifient radicalement le sens du verbe. Les inséparables (be-, emp-, ent-, er-, ge-, miss-, ver-, zer-) restent toujours soudés et ne prennent pas -ge- au participe. "ver-" indique souvent un achèvement, un éloignement ou un dommage ; "ent-" l\'origine ou le détachement ; "zer-" la dislocation.',
    relatedConcepts: ['sep_verb'],
    examples: [
      { textDe: 'entwerfen, verbünden, zerfallen, verdrängen...', textFr: 'concevoir, s\'allier, se disloquer, refouler...' }
    ],
    icon: '■'
  }
};
