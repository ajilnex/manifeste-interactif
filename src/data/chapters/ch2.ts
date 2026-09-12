import type { Chapter, Paragraph, Word, PartOfSpeech } from '../../types';

const w = (id: string, text: string, lemma: string, pos: PartOfSpeech, extra: Partial<Word> = {}): Word => ({ id, text, lemma, pos, ...extra });

export const chapter2Paragraphs: Paragraph[] = [
  {
    id: 'ch2_p1',
    sentences: [
      {
        id: 'ch2_p1_s1',
        translationFr: 'Dans quel rapport les communistes se trouvent-ils à l\'égard des prolétaires en général ?',
        words: [
          w('ch2_p1_s1_w1', 'In', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p1_s1_w2', 'welchem', 'welcher', 'PRON', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p1_s1_w3', 'Verhältnis', 'Verhältnis', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p1_s1_w4', 'stehen', 'stehen', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p1_s1_w5', 'die', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p1_s1_w6', 'Kommunisten', 'Kommunist', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p1_s1_w7', 'zu', 'zu', 'PREP', { case: 'DAT' }),
          w('ch2_p1_s1_w8', 'den', 'der', 'ART', { case: 'DAT', gender: 'M', number: 'PL' }),
          w('ch2_p1_s1_w9', 'Proletariern', 'Proletarier', 'NOUN', { case: 'DAT', gender: 'M', number: 'PL' }),
          w('ch2_p1_s1_w10', 'überhaupt', 'überhaupt', 'ADV'),
          w('ch2_p1_s1_w11', '?', '?', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p1_s2',
        translationFr: 'Les communistes ne forment pas un parti distinct en face des autres partis ouvriers.',
        words: [
          w('ch2_p1_s2_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p1_s2_w2', 'Kommunisten', 'Kommunist', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p1_s2_w3', 'sind', 'sein', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p1_s2_w4', 'keine', 'kein', 'PRON', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p1_s2_w5', 'besondere', 'besonderer', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p1_s2_w6', 'Partei', 'Partei', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p1_s2_w7', 'gegenüber', 'gegenüber', 'PREP', { case: 'DAT' }),
          w('ch2_p1_s2_w8', 'den', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p1_s2_w9', 'andern', 'anderer', 'ADJ', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p1_s2_w10', 'Arbeiterparteien', 'Arbeiterpartei', 'NOUN', { case: 'DAT', gender: 'F', number: 'PL', isCompound: true, compoundParts: ['Arbeiter', 'Partei'] }),
          w('ch2_p1_s2_w11', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p1_s3',
        translationFr: 'Ils n\'ont point d\'intérêts séparés des intérêts de l\'ensemble du prolétariat.',
        words: [
          w('ch2_p1_s3_w1', 'Sie', 'sie', 'PRON', { case: 'NOM', number: 'PL', person: 3 }),
          w('ch2_p1_s3_w2', 'haben', 'haben', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p1_s3_w3', 'keine', 'kein', 'PRON', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p1_s3_w4', 'von', 'von', 'PREP', { case: 'DAT' }),
          w('ch2_p1_s3_w5', 'den', 'der', 'ART', { case: 'DAT', gender: 'N', number: 'PL' }),
          w('ch2_p1_s3_w6', 'Interessen', 'Interesse', 'NOUN', { case: 'DAT', gender: 'N', number: 'PL' }),
          w('ch2_p1_s3_w7', 'des', 'der', 'ART', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p1_s3_w8', 'ganzen', 'ganz', 'ADJ', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p1_s3_w9', 'Proletariats', 'Proletariat', 'NOUN', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p1_s3_w10', 'getrennten', 'getrennt', 'ADJ', { case: 'DAT', gender: 'N', number: 'PL' }),
          w('ch2_p1_s3_w11', 'Interessen', 'Interesse', 'NOUN', { case: 'DAT', gender: 'N', number: 'PL' }),
          w('ch2_p1_s3_w12', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p2',
    sentences: [
      {
        id: 'ch2_p2_s1',
        translationFr: 'Ils n\'établissent point de principes particuliers sur lesquels ils voudraient modeler le mouvement prolétarien.',
        words: [
          w('ch2_p2_s1_w1', 'Sie', 'sie', 'PRON', { case: 'NOM', number: 'PL', person: 3 }),
          w('ch2_p2_s1_w2', 'stellen', 'aufstellen', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND', separablePrefix: 'auf' }),
          w('ch2_p2_s1_w3', 'keine', 'kein', 'PRON', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch2_p2_s1_w4', 'besonderen', 'besonderer', 'ADJ', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch2_p2_s1_w5', 'Prinzipien', 'Prinzip', 'NOUN', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch2_p2_s1_w6', 'auf', 'aufstellen', 'PART'),
          w('ch2_p2_s1_w7', ',', ',', 'PUNCT'),
          w('ch2_p2_s1_w8', 'wonach', 'wonach', 'CONJ'),
          w('ch2_p2_s1_w9', 'sie', 'sie', 'PRON', { case: 'NOM', gender: 'F', number: 'SG', person: 3 }),
          w('ch2_p2_s1_w10', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p2_s1_w11', 'proletarische', 'proletarisch', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p2_s1_w12', 'Bewegung', 'Bewegung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p2_s1_w13', 'modeln', 'modeln', 'VERB'),
          w('ch2_p2_s1_w14', 'wollen', 'wollen', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p2_s1_w15', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p3',
    sentences: [
      {
        id: 'ch2_p3_s1',
        translationFr: 'Les communistes ne se distinguent des autres partis prolétariens que sur deux points : d\'une part, dans les différentes luttes nationales des prolétaires, ils mettent en avant et font valoir les intérêts communs à tout le prolétariat, indépendants de la nationalité ; d\'autre part, dans les différentes étapes de développement que traverse la lutte entre prolétariat et bourgeoisie, ils représentent toujours l\'intérêt du mouvement dans son ensemble.',
        words: [
          w('ch2_p3_s1_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p3_s1_w2', 'Kommunisten', 'Kommunist', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p3_s1_w3', 'unterscheiden', 'unterscheiden', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p3_s1_w4', 'sich', 'sich', 'PRON', { case: 'ACC', number: 'PL', person: 3 }),
          w('ch2_p3_s1_w5', 'von', 'von', 'PREP', { case: 'DAT' }),
          w('ch2_p3_s1_w6', 'den', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p3_s1_w7', 'übrigen', 'übrig', 'ADJ', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p3_s1_w8', 'proletarischen', 'proletarisch', 'ADJ', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p3_s1_w9', 'Parteien', 'Partei', 'NOUN', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p3_s1_w10', 'nur', 'nur', 'ADV'),
          w('ch2_p3_s1_w11', 'dadurch', 'dadurch', 'ADV'),
          w('ch2_p3_s1_w12', ',', ',', 'PUNCT'),
          w('ch2_p3_s1_w13', 'daß', 'daß', 'CONJ'),
          w('ch2_p3_s1_w14', 'sie', 'sie', 'PRON', { case: 'NOM', gender: 'F', number: 'SG', person: 3 }),
          w('ch2_p3_s1_w15', 'einerseits', 'einerseits', 'ADV'),
          w('ch2_p3_s1_w16', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p3_s1_w17', 'den', 'der', 'ART', { case: 'DAT', gender: 'M', number: 'PL' }),
          w('ch2_p3_s1_w18', 'verschiedenen', 'verschieden', 'ADJ', { case: 'DAT', gender: 'M', number: 'PL' }),
          w('ch2_p3_s1_w19', 'nationalen', 'national', 'ADJ', { case: 'DAT', gender: 'M', number: 'PL' }),
          w('ch2_p3_s1_w20', 'Kämpfen', 'Kampf', 'NOUN', { case: 'DAT', gender: 'M', number: 'PL' }),
          w('ch2_p3_s1_w21', 'der', 'der', 'ART', { case: 'GEN', gender: 'M', number: 'PL' }),
          w('ch2_p3_s1_w22', 'Proletarier', 'Proletarier', 'NOUN', { case: 'GEN', gender: 'M', number: 'PL' }),
          w('ch2_p3_s1_w23', 'die', 'der', 'ART', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch2_p3_s1_w24', 'gemeinsamen', 'gemeinsam', 'ADJ', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch2_p3_s1_w25', ',', ',', 'PUNCT'),
          w('ch2_p3_s1_w26', 'von', 'von', 'PREP', { case: 'DAT' }),
          w('ch2_p3_s1_w27', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p3_s1_w28', 'Nationalität', 'Nationalität', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p3_s1_w29', 'unabhängigen', 'unabhängig', 'ADJ', { case: 'DAT', gender: 'N', number: 'PL' }),
          w('ch2_p3_s1_w30', 'Interessen', 'Interesse', 'NOUN', { case: 'DAT', gender: 'N', number: 'PL' }),
          w('ch2_p3_s1_w31', 'des', 'der', 'ART', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p3_s1_w32', 'gesamten', 'gesamt', 'ADJ', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p3_s1_w33', 'Proletariats', 'Proletariat', 'NOUN', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p3_s1_w34', 'hervorheben', 'hervorheben', 'VERB'),
          w('ch2_p3_s1_w35', 'und', 'und', 'CONJ'),
          w('ch2_p3_s1_w36', 'zur', 'zu', 'PREP', { case: 'DAT' }),
          w('ch2_p3_s1_w37', 'Geltung', 'Geltung', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p3_s1_w38', 'bringen', 'bringen', 'VERB'),
          w('ch2_p3_s1_w39', ',', ',', 'PUNCT'),
          w('ch2_p3_s1_w40', 'andrerseits', 'andrerseits', 'ADV'),
          w('ch2_p3_s1_w41', 'dadurch', 'dadurch', 'ADV'),
          w('ch2_p3_s1_w42', ',', ',', 'PUNCT'),
          w('ch2_p3_s1_w43', 'daß', 'daß', 'CONJ'),
          w('ch2_p3_s1_w44', 'sie', 'sie', 'PRON', { case: 'NOM', gender: 'F', number: 'SG', person: 3 }),
          w('ch2_p3_s1_w45', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p3_s1_w46', 'den', 'der', 'ART', { case: 'DAT', gender: 'M', number: 'PL' }),
          w('ch2_p3_s1_w47', 'verschiedenen', 'verschieden', 'ADJ', { case: 'DAT', gender: 'M', number: 'PL' }),
          w('ch2_p3_s1_w48', 'Entwicklungsstufen', 'Entwicklungsstufe', 'NOUN', { case: 'DAT', gender: 'F', number: 'PL', isCompound: true, compoundParts: ['Entwicklungs', 'Stufe'] }),
          w('ch2_p3_s1_w49', ',', ',', 'PUNCT'),
          w('ch2_p3_s1_w50', 'welche', 'welcher', 'PRON', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch2_p3_s1_w51', 'der', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p3_s1_w52', 'Kampf', 'Kampf', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p3_s1_w53', 'zwischen', 'zwischen', 'PREP', { case: 'DAT' }),
          w('ch2_p3_s1_w54', 'Proletariat', 'Proletariat', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p3_s1_w55', 'und', 'und', 'CONJ'),
          w('ch2_p3_s1_w56', 'Bourgeoisie', 'Bourgeoisie', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p3_s1_w57', 'durchläuft', 'durchlaufen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p3_s1_w58', ',', ',', 'PUNCT'),
          w('ch2_p3_s1_w59', 'stets', 'stets', 'ADV'),
          w('ch2_p3_s1_w60', 'das', 'der', 'ART', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p3_s1_w61', 'Interesse', 'Interesse', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p3_s1_w62', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p3_s1_w63', 'Gesamtbewegung', 'Gesamtbewegung', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Gesamt', 'Bewegung'] }),
          w('ch2_p3_s1_w64', 'vertreten', 'vertreten', 'VERB', { tense: 'PERF' }),
          w('ch2_p3_s1_w65', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p4',
    sentences: [
      {
        id: 'ch2_p4_s1',
        translationFr: 'Pratiquement, les communistes sont donc la fraction la plus résolue des partis ouvriers de tous les pays, celle qui pousse toujours en avant ; théoriquement, ils ont sur le reste de la masse prolétarienne l\'avantage d\'une claire intelligence des conditions, de la marche et des résultats généraux du mouvement prolétarien.',
        words: [
          w('ch2_p4_s1_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p4_s1_w2', 'Kommunisten', 'Kommunist', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p4_s1_w3', 'sind', 'sein', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p4_s1_w4', 'also', 'also', 'ADV'),
          w('ch2_p4_s1_w5', 'praktisch', 'praktisch', 'ADV'),
          w('ch2_p4_s1_w6', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p4_s1_w7', 'entschiedenste', 'entschieden', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p4_s1_w8', ',', ',', 'PUNCT'),
          w('ch2_p4_s1_w9', 'immer', 'immer', 'ADV'),
          w('ch2_p4_s1_w10', 'weitertreibende', 'weitertreibend', 'ADJ', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p4_s1_w11', 'Teil', 'Teil', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p4_s1_w12', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch2_p4_s1_w13', 'Arbeiterparteien', 'Arbeiterpartei', 'NOUN', { case: 'GEN', gender: 'F', number: 'PL', isCompound: true, compoundParts: ['Arbeiter', 'Partei'] }),
          w('ch2_p4_s1_w14', 'aller', 'all', 'PRON', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p4_s1_w15', 'Länder', 'Land', 'NOUN', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p4_s1_w16', ';', ';', 'PUNCT'),
          w('ch2_p4_s1_w17', 'sie', 'sie', 'PRON', { case: 'NOM', number: 'PL', person: 3 }),
          w('ch2_p4_s1_w18', 'haben', 'voraushaben', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND', separablePrefix: 'voraus' }),
          w('ch2_p4_s1_w19', 'theoretisch', 'theoretisch', 'ADV'),
          w('ch2_p4_s1_w20', 'vor', 'vor', 'PREP', { case: 'DAT' }),
          w('ch2_p4_s1_w21', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p4_s1_w22', 'übrigen', 'übrig', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p4_s1_w23', 'Masse', 'Masse', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p4_s1_w24', 'des', 'der', 'ART', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p4_s1_w25', 'Proletariats', 'Proletariat', 'NOUN', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p4_s1_w26', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p4_s1_w27', 'Einsicht', 'Einsicht', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p4_s1_w28', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p4_s1_w29', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch2_p4_s1_w30', 'Bedingungen', 'Bedingung', 'NOUN', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch2_p4_s1_w31', ',', ',', 'PUNCT'),
          w('ch2_p4_s1_w32', 'den', 'der', 'ART', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p4_s1_w33', 'Gang', 'Gang', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p4_s1_w34', 'und', 'und', 'CONJ'),
          w('ch2_p4_s1_w35', 'die', 'der', 'ART', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch2_p4_s1_w36', 'allgemeinen', 'allgemein', 'ADJ', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch2_p4_s1_w37', 'Resultate', 'Resultat', 'NOUN', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch2_p4_s1_w38', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p4_s1_w39', 'proletarischen', 'proletarisch', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p4_s1_w40', 'Bewegung', 'Bewegung', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p4_s1_w41', 'voraus', 'voraushaben', 'PART'),
          w('ch2_p4_s1_w42', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p5',
    sentences: [
      {
        id: 'ch2_p5_s1',
        translationFr: 'Le but immédiat des communistes est le même que celui de tous les autres partis prolétariens : constitution du prolétariat en classe, renversement de la domination bourgeoise, conquête du pouvoir politique par le prolétariat.',
        words: [
          w('ch2_p5_s1_w1', 'Der', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p5_s1_w2', 'nächste', 'nächster', 'ADJ', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p5_s1_w3', 'Zweck', 'Zweck', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p5_s1_w4', 'der', 'der', 'ART', { case: 'GEN', gender: 'M', number: 'PL' }),
          w('ch2_p5_s1_w5', 'Kommunisten', 'Kommunist', 'NOUN', { case: 'GEN', gender: 'M', number: 'PL' }),
          w('ch2_p5_s1_w6', 'ist', 'sein', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p5_s1_w7', 'derselbe', 'derselbe', 'PRON', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p5_s1_w8', 'wie', 'wie', 'PREP'),
          w('ch2_p5_s1_w9', 'der', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p5_s1_w10', 'aller', 'all', 'PRON', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch2_p5_s1_w11', 'übrigen', 'übrig', 'ADJ', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch2_p5_s1_w12', 'proletarischen', 'proletarisch', 'ADJ', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch2_p5_s1_w13', 'Parteien', 'Partei', 'NOUN', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p5_s1_w14', ':', ':', 'PUNCT'),
          w('ch2_p5_s1_w15', 'Bildung', 'Bildung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p5_s1_w16', 'des', 'der', 'ART', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p5_s1_w17', 'Proletariats', 'Proletariat', 'NOUN', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p5_s1_w18', 'zur', 'zu', 'PREP', { case: 'DAT' }),
          w('ch2_p5_s1_w19', 'Klasse', 'Klasse', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p5_s1_w20', ',', ',', 'PUNCT'),
          w('ch2_p5_s1_w21', 'Sturz', 'Sturz', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p5_s1_w22', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p5_s1_w23', 'Bourgeoisherrschaft', 'Bourgeoisherrschaft', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Bourgeois', 'Herrschaft'] }),
          w('ch2_p5_s1_w24', ',', ',', 'PUNCT'),
          w('ch2_p5_s1_w25', 'Eroberung', 'Eroberung', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p5_s1_w26', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p5_s1_w27', 'politischen', 'politisch', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p5_s1_w28', 'Macht', 'Macht', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p5_s1_w29', 'durch', 'durch', 'PREP', { case: 'ACC' }),
          w('ch2_p5_s1_w30', 'das', 'der', 'ART', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p5_s1_w31', 'Proletariat', 'Proletariat', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p5_s1_w32', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p5_s2',
        translationFr: 'Les thèses théoriques des communistes ne reposent nullement sur des idées, des principes inventés ou découverts par tel ou tel réformateur du monde.',
        words: [
          w('ch2_p5_s2_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p5_s2_w2', 'theoretischen', 'theoretisch', 'ADJ', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p5_s2_w3', 'Sätze', 'Satz', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p5_s2_w4', 'der', 'der', 'ART', { case: 'GEN', gender: 'M', number: 'PL' }),
          w('ch2_p5_s2_w5', 'Kommunisten', 'Kommunist', 'NOUN', { case: 'GEN', gender: 'M', number: 'PL' }),
          w('ch2_p5_s2_w6', 'beruhen', 'beruhen', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p5_s2_w7', 'keineswegs', 'keineswegs', 'ADV'),
          w('ch2_p5_s2_w8', 'auf', 'auf', 'PREP', { case: 'ACC' }),
          w('ch2_p5_s2_w9', 'Ideen', 'Idee', 'NOUN', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch2_p5_s2_w10', ',', ',', 'PUNCT'),
          w('ch2_p5_s2_w11', 'auf', 'auf', 'PREP', { case: 'ACC' }),
          w('ch2_p5_s2_w12', 'Prinzipien', 'Prinzip', 'NOUN', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch2_p5_s2_w13', ',', ',', 'PUNCT'),
          w('ch2_p5_s2_w14', 'die', 'der', 'ART', { case: 'NOM', gender: 'N', number: 'PL' }),
          w('ch2_p5_s2_w15', 'von', 'von', 'PREP', { case: 'DAT' }),
          w('ch2_p5_s2_w16', 'diesem', 'dies', 'PRON', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p5_s2_w17', 'oder', 'oder', 'CONJ'),
          w('ch2_p5_s2_w18', 'jenem', 'jener', 'ADV'),
          w('ch2_p5_s2_w19', 'Weltverbesserer', 'Weltverbesserer', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Welt', 'Verbesserer'] }),
          w('ch2_p5_s2_w20', 'erfunden', 'erfinden', 'VERB', { tense: 'PERF' }),
          w('ch2_p5_s2_w21', 'oder', 'oder', 'CONJ'),
          w('ch2_p5_s2_w22', 'entdeckt', 'entdecken', 'VERB', { tense: 'PERF' }),
          w('ch2_p5_s2_w23', 'sind', 'sein', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p5_s2_w24', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p6',
    sentences: [
      {
        id: 'ch2_p6_s1',
        translationFr: 'Elles ne sont que l\'expression générale de conditions réelles d\'une lutte de classes existante, d\'un mouvement historique qui s\'accomplit sous nos yeux.',
        words: [
          w('ch2_p6_s1_w1', 'Sie', 'sie', 'PRON', { case: 'NOM', number: 'PL', person: 3 }),
          w('ch2_p6_s1_w2', 'sind', 'sein', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p6_s1_w3', 'nur', 'nur', 'ADV'),
          w('ch2_p6_s1_w4', 'allgemeine', 'allgemein', 'ADJ', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p6_s1_w5', 'Ausdrücke', 'Ausdruck', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p6_s1_w6', 'tatsächlicher', 'tatsächlich', 'ADJ', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p6_s1_w7', 'Verhältnisse', 'Verhältnis', 'NOUN', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p6_s1_w8', 'eines', 'ein', 'ART', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch2_p6_s1_w9', 'existierenden', 'existierend', 'ADJ', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch2_p6_s1_w10', 'Klassenkampfes', 'Klassenkampf', 'NOUN', { case: 'GEN', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Klassen', 'Kampf'] }),
          w('ch2_p6_s1_w11', ',', ',', 'PUNCT'),
          w('ch2_p6_s1_w12', 'einer', 'ein', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p6_s1_w13', 'unter', 'unter', 'PREP', { case: 'DAT' }),
          w('ch2_p6_s1_w14', 'unseren', 'unser', 'PRON', { case: 'DAT', gender: 'N', number: 'PL' }),
          w('ch2_p6_s1_w15', 'Augen', 'Auge', 'NOUN', { case: 'DAT', gender: 'N', number: 'PL' }),
          w('ch2_p6_s1_w16', 'vor', 'vor', 'PREP', { case: 'DAT' }),
          w('ch2_p6_s1_w17', 'sich', 'sich', 'PRON', { case: 'DAT', number: 'PL', person: 3 }),
          w('ch2_p6_s1_w18', 'gehenden', 'gehend', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p6_s1_w19', 'geschichtlichen', 'geschichtlich', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p6_s1_w20', 'Bewegung', 'Bewegung', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p6_s1_w21', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p6_s2',
        translationFr: 'L\'abolition des rapports de propriété qui ont existé jusqu\'ici n\'a rien qui caractérise en propre le communisme.',
        words: [
          w('ch2_p6_s2_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p6_s2_w2', 'Abschaffung', 'Abschaffung', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p6_s2_w3', 'bisheriger', 'bisherig', 'ADJ', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p6_s2_w4', 'Eigentumsverhältnisse', 'Eigentumsverhältnis', 'NOUN', { case: 'GEN', gender: 'N', number: 'PL', isCompound: true, compoundParts: ['Eigentums', 'Verhältnis'] }),
          w('ch2_p6_s2_w5', 'ist', 'sein', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p6_s2_w6', 'nichts', 'nichts', 'PRON', { gender: 'N' }),
          w('ch2_p6_s2_w7', 'den', 'der', 'ART', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p6_s2_w8', 'Kommunismus', 'Kommunismus', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p6_s2_w9', 'eigentümlich', 'eigentümlich', 'ADV'),
          w('ch2_p6_s2_w10', 'Bezeichnendes', 'Bezeichnend', 'NOUN', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p6_s2_w11', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p7',
    sentences: [
      {
        id: 'ch2_p7_s1',
        translationFr: 'Tous les rapports de propriété ont été soumis à une constante mutation historique, à un perpétuel changement historique.',
        words: [
          w('ch2_p7_s1_w1', 'Alle', 'all', 'PRON', { case: 'NOM', gender: 'N', number: 'PL' }),
          w('ch2_p7_s1_w2', 'Eigentumsverhältnisse', 'Eigentumsverhältnis', 'NOUN', { case: 'NOM', gender: 'N', number: 'PL', isCompound: true, compoundParts: ['Eigentums', 'Verhältnis'] }),
          w('ch2_p7_s1_w3', 'waren', 'sein', 'VERB', { number: 'PL', person: 3, tense: 'PAST', mood: 'IND' }),
          w('ch2_p7_s1_w4', 'einem', 'ein', 'ART', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p7_s1_w5', 'beständigen', 'beständig', 'ADJ', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p7_s1_w6', 'geschichtlichen', 'geschichtlich', 'ADJ', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p7_s1_w7', 'Wandel', 'Wandel', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p7_s1_w8', ',', ',', 'PUNCT'),
          w('ch2_p7_s1_w9', 'einer', 'ein', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p7_s1_w10', 'beständigen', 'beständig', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p7_s1_w11', 'geschichtlichen', 'geschichtlich', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p7_s1_w12', 'Veränderung', 'Veränderung', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p7_s1_w13', 'unterworfen', 'unterwerfen', 'VERB', { tense: 'PERF' }),
          w('ch2_p7_s1_w14', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p8',
    sentences: [
      {
        id: 'ch2_p8_s1',
        translationFr: 'La Révolution française, par exemple, a aboli la propriété féodale en faveur de la propriété bourgeoise.',
        words: [
          w('ch2_p8_s1_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p8_s1_w2', 'Französische', 'französisch', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p8_s1_w3', 'Revolution', 'Revolution', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p8_s1_w4', 'z.B.', 'zum Beispiel', 'ADV'),
          w('ch2_p8_s1_w5', 'schaffte', 'abschaffen', 'VERB', { number: 'SG', person: 3, tense: 'PAST', mood: 'IND', separablePrefix: 'ab' }),
          w('ch2_p8_s1_w6', 'das', 'der', 'ART', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p8_s1_w7', 'Feudaleigentum', 'Feudaleigentum', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG', isCompound: true, compoundParts: ['Feudal', 'Eigentum'] }),
          w('ch2_p8_s1_w8', 'zugunsten', 'zugunsten', 'PREP', { case: 'GEN' }),
          w('ch2_p8_s1_w9', 'des', 'der', 'ART', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p8_s1_w10', 'bürgerlichen', 'bürgerlich', 'NOUN', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch2_p8_s1_w11', 'ab', 'abschaffen', 'PART'),
          w('ch2_p8_s1_w12', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p9',
    sentences: [
      {
        id: 'ch2_p9_s1',
        translationFr: 'Ce qui caractérise le communisme, ce n\'est pas l\'abolition de la propriété en général, mais l\'abolition de la propriété bourgeoise.',
        words: [
          w('ch2_p9_s1_w1', 'Was', 'was', 'PRON', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p9_s1_w2', 'den', 'der', 'ART', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p9_s1_w3', 'Kommunismus', 'Kommunismus', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p9_s1_w4', 'auszeichnet', 'auszeichnen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p9_s1_w5', ',', ',', 'PUNCT'),
          w('ch2_p9_s1_w6', 'ist', 'sein', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p9_s1_w7', 'nicht', 'nicht', 'PART'),
          w('ch2_p9_s1_w8', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p9_s1_w9', 'Abschaffung', 'Abschaffung', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p9_s1_w10', 'des', 'der', 'ART', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p9_s1_w11', 'Eigentums', 'Eigentum', 'NOUN', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p9_s1_w12', 'überhaupt', 'überhaupt', 'ADV'),
          w('ch2_p9_s1_w13', ',', ',', 'PUNCT'),
          w('ch2_p9_s1_w14', 'sondern', 'sondern', 'CONJ'),
          w('ch2_p9_s1_w15', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p9_s1_w16', 'Abschaffung', 'Abschaffung', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p9_s1_w17', 'des', 'der', 'ART', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p9_s1_w18', 'bürgerlichen', 'bürgerlich', 'ADJ', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p9_s1_w19', 'Eigentums', 'Eigentum', 'NOUN', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p9_s1_w20', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p10',
    sentences: [
      {
        id: 'ch2_p10_s1',
        translationFr: 'Or, la propriété privée bourgeoise moderne est l\'expression ultime et la plus achevée de la production et de l\'appropriation des produits reposant sur des antagonismes de classes, sur l\'exploitation des uns par les autres.',
        words: [
          w('ch2_p10_s1_w1', 'Aber', 'aber', 'CONJ'),
          w('ch2_p10_s1_w2', 'das', 'der', 'ART', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p10_s1_w3', 'moderne', 'modern', 'ADJ', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p10_s1_w4', 'bürgerliche', 'bürgerlich', 'ADJ', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p10_s1_w5', 'Privateigentum', 'Privateigentum', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG', isCompound: true, compoundParts: ['Privat', 'Eigentum'] }),
          w('ch2_p10_s1_w6', 'ist', 'sein', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p10_s1_w7', 'der', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p10_s1_w8', 'letzte', 'letzter', 'ADJ', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p10_s1_w9', 'und', 'und', 'CONJ'),
          w('ch2_p10_s1_w10', 'vollendetste', 'vollendet', 'ADJ', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p10_s1_w11', 'Ausdruck', 'Ausdruck', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p10_s1_w12', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p10_s1_w13', 'Erzeugung', 'Erzeugung', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p10_s1_w14', 'und', 'und', 'CONJ'),
          w('ch2_p10_s1_w15', 'Aneignung', 'Aneignung', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p10_s1_w16', 'der', 'der', 'ART', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p10_s1_w17', 'Produkte', 'Produkt', 'NOUN', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p10_s1_w18', ',', ',', 'PUNCT'),
          w('ch2_p10_s1_w19', 'die', 'der', 'ART', { case: 'NOM', gender: 'N', number: 'PL' }),
          w('ch2_p10_s1_w20', 'auf', 'auf', 'PREP', { case: 'ACC' }),
          w('ch2_p10_s1_w21', 'Klassengegensätzen', 'Klassengegensatz', 'NOUN', { case: 'DAT', gender: 'M', number: 'PL', isCompound: true, compoundParts: ['Klassen', 'Gegensatz'] }),
          w('ch2_p10_s1_w22', ',', ',', 'PUNCT'),
          w('ch2_p10_s1_w23', 'auf', 'auf', 'PREP', { case: 'ACC' }),
          w('ch2_p10_s1_w24', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p10_s1_w25', 'Ausbeutung', 'Ausbeutung', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p10_s1_w26', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch2_p10_s1_w27', 'einen', 'ein', 'ART', { case: 'GEN', number: 'PL' }),
          w('ch2_p10_s1_w28', 'durch', 'durch', 'PREP', { case: 'ACC' }),
          w('ch2_p10_s1_w29', 'die', 'der', 'ART', { case: 'ACC', number: 'PL' }),
          w('ch2_p10_s1_w30', 'andern', 'anderer', 'PRON', { case: 'ACC', number: 'PL' }),
          w('ch2_p10_s1_w31', 'beruht', 'beruhen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p10_s1_w32', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p11',
    sentences: [
      {
        id: 'ch2_p11_s1',
        translationFr: 'En ce sens, les communistes peuvent résumer leur théorie en cette formule unique : abolition de la propriété privée.',
        words: [
          w('ch2_p11_s1_w1', 'In', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p11_s1_w2', 'diesem', 'dies', 'PRON', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p11_s1_w3', 'Sinn', 'Sinn', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p11_s1_w4', 'können', 'können', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p11_s1_w5', 'die', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p11_s1_w6', 'Kommunisten', 'Kommunist', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p11_s1_w7', 'ihre', 'ihr', 'PRON', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p11_s1_w8', 'Theorie', 'Theorie', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p11_s1_w9', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p11_s1_w10', 'dem', 'der', 'ART', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p11_s1_w11', 'einen', 'ein', 'ART', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p11_s1_w12', 'Ausdruck', 'Ausdruck', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p11_s1_w13', ':', ':', 'PUNCT'),
          w('ch2_p11_s1_w14', 'Aufhebung', 'Aufhebung', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p11_s1_w15', 'des', 'der', 'ART', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p11_s1_w16', 'Privateigentums', 'Privateigentum', 'NOUN', { case: 'GEN', gender: 'N', number: 'SG', isCompound: true, compoundParts: ['Privat', 'Eigentum'] }),
          w('ch2_p11_s1_w17', ',', ',', 'PUNCT'),
          w('ch2_p11_s1_w18', 'zusammenfassen', 'zusammenfassen', 'VERB'),
          w('ch2_p11_s1_w19', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p12',
    sentences: [
      {
        id: 'ch2_p12_s1',
        translationFr: 'On nous a reproché, à nous autres communistes, de vouloir abolir la propriété acquise personnellement, fruit du propre travail de chacun ; cette propriété qui formerait le fondement de toute liberté, de toute activité et de toute indépendance personnelles.',
        words: [
          w('ch2_p12_s1_w1', 'Man', 'man', 'PRON', { case: 'NOM', number: 'SG' }),
          w('ch2_p12_s1_w2', 'hat', 'haben', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p12_s1_w3', 'uns', 'wir', 'PRON', { case: 'ACC', gender: 'M', number: 'PL', person: 1 }),
          w('ch2_p12_s1_w4', 'Kommunisten', 'Kommunist', 'NOUN', { case: 'ACC', gender: 'M', number: 'PL' }),
          w('ch2_p12_s1_w5', 'vorgeworfen', 'vorwerfen', 'VERB', { tense: 'PERF' }),
          w('ch2_p12_s1_w6', ',', ',', 'PUNCT'),
          w('ch2_p12_s1_w7', 'wir', 'wir', 'PRON', { case: 'NOM', number: 'PL', person: 1 }),
          w('ch2_p12_s1_w8', 'wollten', 'wollen', 'VERB', { number: 'PL', person: 1, tense: 'PAST', mood: 'SUBJ' }),
          w('ch2_p12_s1_w9', 'das', 'der', 'ART', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p12_s1_w10', 'persönlich', 'persönlich', 'ADV'),
          w('ch2_p12_s1_w11', 'erworbene', 'erworben', 'ADJ', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p12_s1_w12', ',', ',', 'PUNCT'),
          w('ch2_p12_s1_w13', 'selbsterarbeitete', 'selbsterarbeitet', 'ADJ', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p12_s1_w14', 'Eigentum', 'Eigentum', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p12_s1_w15', 'abschaffen', 'abschaffen', 'VERB'),
          w('ch2_p12_s1_w16', ';', ';', 'PUNCT'),
          w('ch2_p12_s1_w17', 'das', 'der', 'ART', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p12_s1_w18', 'Eigentum', 'Eigentum', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p12_s1_w19', ',', ',', 'PUNCT'),
          w('ch2_p12_s1_w20', 'welches', 'welcher', 'PRON', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p12_s1_w21', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p12_s1_w22', 'Grundlage', 'Grundlage', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p12_s1_w23', 'aller', 'all', 'PRON', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p12_s1_w24', 'persönlichen', 'persönlich', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p12_s1_w25', 'Freiheit', 'Freiheit', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p12_s1_w26', ',', ',', 'PUNCT'),
          w('ch2_p12_s1_w27', 'Tätigkeit', 'Tätigkeit', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p12_s1_w28', 'und', 'und', 'CONJ'),
          w('ch2_p12_s1_w29', 'Selbständigkeit', 'Selbständigkeit', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p12_s1_w30', 'bilde', 'bilden', 'VERB', { number: 'SG', person: 3, tense: 'PAST', mood: 'IND' }),
          w('ch2_p12_s1_w31', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p13',
    sentences: [
      {
        id: 'ch2_p13_s1',
        translationFr: 'Propriété acquise par le travail, acquise par soi-même, méritée par soi-même !',
        words: [
          w('ch2_p13_s1_w1', 'Erarbeitetes', 'Erarbeitet', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p13_s1_w2', ',', ',', 'PUNCT'),
          w('ch2_p13_s1_w3', 'erworbenes', 'erworben', 'ADJ', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p13_s1_w4', ',', ',', 'PUNCT'),
          w('ch2_p13_s1_w5', 'selbstverdientes', 'selbstverdient', 'ADJ', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p13_s1_w6', 'Eigentum', 'Eigentum', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p13_s1_w7', '!', '!', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p13_s2',
        translationFr: 'Parlez-vous de la propriété du petit bourgeois, du petit paysan, qui a précédé la propriété bourgeoise ?',
        words: [
          w('ch2_p13_s2_w1', 'Sprecht', 'Sprecht', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p13_s2_w2', 'ihr', 'ihr', 'PRON', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p13_s2_w3', 'von', 'von', 'PREP', { case: 'DAT' }),
          w('ch2_p13_s2_w4', 'dem', 'der', 'ART', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p13_s2_w5', 'kleinbürgerlichen', 'kleinbürgerlich', 'ADJ', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p13_s2_w6', ',', ',', 'PUNCT'),
          w('ch2_p13_s2_w7', 'kleinbäuerlichen', 'kleinbäuerlich', 'ADJ', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p13_s2_w8', 'Eigentum', 'Eigentum', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p13_s2_w9', ',', ',', 'PUNCT'),
          w('ch2_p13_s2_w10', 'welches', 'welcher', 'PRON', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p13_s2_w11', 'dem', 'der', 'ART', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p13_s2_w12', 'bürgerlichen', 'bürgerlich', 'ADJ', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p13_s2_w13', 'Eigentum', 'Eigentum', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p13_s2_w14', 'vorherging', 'vorherging', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p13_s2_w15', '?', '?', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p13_s3',
        translationFr: 'Nous n\'avons pas besoin de l\'abolir : le développement de l\'industrie l\'a abolie et l\'abolit chaque jour.',
        words: [
          w('ch2_p13_s3_w1', 'Wir', 'wir', 'PRON', { case: 'NOM', number: 'PL', person: 1 }),
          w('ch2_p13_s3_w2', 'brauchen', 'brauchen', 'VERB', { number: 'PL', person: 1, tense: 'PRES', mood: 'IND' }),
          w('ch2_p13_s3_w3', 'es', 'es', 'PRON', { case: 'ACC', gender: 'N', number: 'SG', person: 3 }),
          w('ch2_p13_s3_w4', 'nicht', 'nicht', 'PART'),
          w('ch2_p13_s3_w5', 'abzuschaffen', 'abschaffen', 'VERB', { separablePrefix: 'ab' }),
          w('ch2_p13_s3_w6', ',', ',', 'PUNCT'),
          w('ch2_p13_s3_w7', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p13_s3_w8', 'Entwicklung', 'Entwicklung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p13_s3_w9', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p13_s3_w10', 'Industrie', 'Industrie', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p13_s3_w11', 'hat', 'haben', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p13_s3_w12', 'es', 'es', 'PRON', { case: 'ACC', gender: 'N', number: 'SG', person: 3 }),
          w('ch2_p13_s3_w13', 'abgeschafft', 'abschaffen', 'VERB', { tense: 'PERF' }),
          w('ch2_p13_s3_w14', 'und', 'und', 'CONJ'),
          w('ch2_p13_s3_w15', 'schafft', 'abschaffen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND', separablePrefix: 'ab' }),
          w('ch2_p13_s3_w16', 'es', 'es', 'PRON', { case: 'ACC', gender: 'N', number: 'SG', person: 3 }),
          w('ch2_p13_s3_w17', 'täglich', 'täglich', 'ADV'),
          w('ch2_p13_s3_w18', 'ab', 'abschaffen', 'PART'),
          w('ch2_p13_s3_w19', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p14',
    sentences: [
      {
        id: 'ch2_p14_s1',
        translationFr: 'Ou bien parlez-vous de la propriété privée bourgeoise moderne ?',
        words: [
          w('ch2_p14_s1_w1', 'Oder', 'oder', 'CONJ'),
          w('ch2_p14_s1_w2', 'sprecht', 'sprechen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p14_s1_w3', 'ihr', 'ihr', 'PRON', { case: 'DAT', gender: 'F', number: 'SG', person: 3 }),
          w('ch2_p14_s1_w4', 'vom', 'von', 'PREP', { case: 'DAT' }),
          w('ch2_p14_s1_w5', 'modernen', 'modern', 'ADJ', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p14_s1_w6', 'bürgerlichen', 'bürgerlich', 'ADJ', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p14_s1_w7', 'Privateigentum', 'Privateigentum', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG', isCompound: true, compoundParts: ['Privat', 'Eigentum'] }),
          w('ch2_p14_s1_w8', '?', '?', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p15',
    sentences: [
      {
        id: 'ch2_p15_s1',
        translationFr: 'Mais le travail salarié, le travail du prolétaire, lui crée-t-il de la propriété ?',
        words: [
          w('ch2_p15_s1_w1', 'Schafft', 'schaffen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p15_s1_w2', 'aber', 'aber', 'ADV'),
          w('ch2_p15_s1_w3', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p15_s1_w4', 'Lohnarbeit', 'Lohnarbeit', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Lohn', 'Arbeit'] }),
          w('ch2_p15_s1_w5', ',', ',', 'PUNCT'),
          w('ch2_p15_s1_w6', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p15_s1_w7', 'Arbeit', 'Arbeit', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p15_s1_w8', 'des', 'der', 'ART', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch2_p15_s1_w9', 'Proletariers', 'Proletarier', 'NOUN', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch2_p15_s1_w10', 'ihm', 'er', 'PRON', { case: 'DAT', gender: 'M', number: 'SG', person: 3 }),
          w('ch2_p15_s1_w11', 'Eigentum', 'Eigentum', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p15_s1_w12', '?', '?', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p15_s2',
        translationFr: 'Nullement.',
        words: [
          w('ch2_p15_s2_w1', 'Keineswegs', 'keineswegs', 'ADV'),
          w('ch2_p15_s2_w2', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p15_s3',
        translationFr: 'Il crée le capital, c\'est-à-dire la propriété qui exploite le travail salarié, et qui ne peut s\'accroître qu\'à la condition de produire du nouveau travail salarié afin de l\'exploiter à nouveau.',
        words: [
          w('ch2_p15_s3_w1', 'Sie', 'sie', 'PRON', { case: 'NOM', gender: 'F', number: 'SG', person: 3 }),
          w('ch2_p15_s3_w2', 'schafft', 'schaffen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p15_s3_w3', 'das', 'der', 'ART', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p15_s3_w4', 'Kapital', 'Kapital', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p15_s3_w5', ',', ',', 'PUNCT'),
          w('ch2_p15_s3_w6', 'd.h.', 'das heißt', 'ADV'),
          w('ch2_p15_s3_w7', 'das', 'der', 'ART', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p15_s3_w8', 'Eigentum', 'Eigentum', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p15_s3_w9', ',', ',', 'PUNCT'),
          w('ch2_p15_s3_w10', 'welches', 'welcher', 'PRON', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p15_s3_w11', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p15_s3_w12', 'Lohnarbeit', 'Lohnarbeit', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Lohn', 'Arbeit'] }),
          w('ch2_p15_s3_w13', 'ausbeutet', 'ausbeuten', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p15_s3_w14', ',', ',', 'PUNCT'),
          w('ch2_p15_s3_w15', 'welches', 'welcher', 'PRON', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p15_s3_w16', 'sich', 'sich', 'PRON', { case: 'ACC', number: 'SG', person: 3 }),
          w('ch2_p15_s3_w17', 'nur', 'nur', 'ADV'),
          w('ch2_p15_s3_w18', 'unter', 'unter', 'PREP', { case: 'DAT' }),
          w('ch2_p15_s3_w19', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p15_s3_w20', 'Bedingung', 'Bedingung', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p15_s3_w21', 'vermehren', 'vermehren', 'VERB'),
          w('ch2_p15_s3_w22', 'kann', 'können', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p15_s3_w23', ',', ',', 'PUNCT'),
          w('ch2_p15_s3_w24', 'daß', 'daß', 'CONJ'),
          w('ch2_p15_s3_w25', 'es', 'es', 'PRON', { case: 'NOM', gender: 'N', number: 'SG', person: 3 }),
          w('ch2_p15_s3_w26', 'neue', 'neu', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p15_s3_w27', 'Lohnarbeit', 'Lohnarbeit', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Lohn', 'Arbeit'] }),
          w('ch2_p15_s3_w28', 'erzeugt', 'erzeugen', 'VERB', { tense: 'PERF' }),
          w('ch2_p15_s3_w29', ',', ',', 'PUNCT'),
          w('ch2_p15_s3_w30', 'um', 'um', 'CONJ'),
          w('ch2_p15_s3_w31', 'sie', 'sie', 'PRON', { case: 'ACC', gender: 'F', number: 'PL', person: 3 }),
          w('ch2_p15_s3_w32', 'von', 'von', 'PREP', { case: 'DAT' }),
          w('ch2_p15_s3_w33', 'neuem', 'neu', 'ADJ', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p15_s3_w34', 'auszubeuten', 'ausbeuten', 'VERB', { separablePrefix: 'aus' }),
          w('ch2_p15_s3_w35', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p15_s4',
        translationFr: 'La propriété, dans sa forme actuelle, se meut dans l\'antagonisme du capital et du travail salarié.',
        words: [
          w('ch2_p15_s4_w1', 'Das', 'der', 'ART', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p15_s4_w2', 'Eigentum', 'Eigentum', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p15_s4_w3', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p15_s4_w4', 'seiner', 'sein', 'PRON', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p15_s4_w5', 'heutigen', 'heutig', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p15_s4_w6', 'Gestalt', 'Gestalt', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p15_s4_w7', 'bewegt', 'bewegen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p15_s4_w8', 'sich', 'sich', 'PRON', { case: 'ACC', number: 'SG', person: 3 }),
          w('ch2_p15_s4_w9', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p15_s4_w10', 'dem', 'der', 'ART', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p15_s4_w11', 'Gegensatz', 'Gegensatz', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p15_s4_w12', 'von', 'von', 'PREP', { case: 'DAT' }),
          w('ch2_p15_s4_w13', 'Kapital', 'Kapital', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p15_s4_w14', 'und', 'und', 'CONJ'),
          w('ch2_p15_s4_w15', 'Lohnarbeit', 'Lohnarbeit', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Lohn', 'Arbeit'] }),
          w('ch2_p15_s4_w16', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p15_s5',
        translationFr: 'Examinons les deux termes de cet antagonisme :',
        words: [
          w('ch2_p15_s5_w1', 'Betrachten', 'betrachten', 'VERB', { number: 'PL', person: 1, tense: 'PRES', mood: 'IND' }),
          w('ch2_p15_s5_w2', 'wir', 'wir', 'PRON', { case: 'NOM', number: 'PL', person: 1 }),
          w('ch2_p15_s5_w3', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch2_p15_s5_w4', 'beiden', 'beide', 'PRON', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch2_p15_s5_w5', 'Seiten', 'Seite', 'NOUN', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch2_p15_s5_w6', 'dieses', 'dies', 'PRON', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p15_s5_w7', 'Gegensatzes', 'Gegensatz', 'NOUN', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch2_p15_s5_w8', ':', ':', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p16',
    sentences: [
      {
        id: 'ch2_p16_s1',
        translationFr: 'Être capitaliste, ce n\'est pas seulement occuper une position purement personnelle, mais une position sociale dans la production.',
        words: [
          w('ch2_p16_s1_w1', 'Kapitalist', 'Kapitalist', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p16_s1_w2', 'sein', 'sein', 'VERB'),
          w('ch2_p16_s1_w3', ',', ',', 'PUNCT'),
          w('ch2_p16_s1_w4', 'heißt', 'heißen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p16_s1_w5', 'nicht', 'nicht', 'PART'),
          w('ch2_p16_s1_w6', 'nur', 'nur', 'ADV'),
          w('ch2_p16_s1_w7', 'eine', 'ein', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p16_s1_w8', 'rein', 'rein', 'ADV'),
          w('ch2_p16_s1_w9', 'persönliche', 'persönlich', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p16_s1_w10', ',', ',', 'PUNCT'),
          w('ch2_p16_s1_w11', 'sondern', 'sondern', 'CONJ'),
          w('ch2_p16_s1_w12', 'eine', 'ein', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p16_s1_w13', 'gesellschaftliche', 'gesellschaftlich', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p16_s1_w14', 'Stellung', 'Stellung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p16_s1_w15', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p16_s1_w16', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p16_s1_w17', 'Produktion', 'Produktion', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p16_s1_w18', 'einzunehmen', 'einnehmen', 'VERB'),
          w('ch2_p16_s1_w19', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p16_s2',
        translationFr: 'Le capital est un produit collectif et ne peut être mis en mouvement que par l\'activité commune de nombreux membres de la société, et même, en dernière instance, par l\'activité commune de tous les membres de la société.',
        words: [
          w('ch2_p16_s2_w1', 'Das', 'der', 'ART', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p16_s2_w2', 'Kapital', 'Kapital', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p16_s2_w3', 'ist', 'sein', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p16_s2_w4', 'ein', 'ein', 'ART', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p16_s2_w5', 'gemeinschaftliches', 'gemeinschaftlich', 'ADJ', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p16_s2_w6', 'Produkt', 'Produkt', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p16_s2_w7', 'und', 'und', 'CONJ'),
          w('ch2_p16_s2_w8', 'kann', 'können', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p16_s2_w9', 'nur', 'nur', 'ADV'),
          w('ch2_p16_s2_w10', 'durch', 'durch', 'PREP', { case: 'ACC' }),
          w('ch2_p16_s2_w11', 'eine', 'ein', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p16_s2_w12', 'gemeinsame', 'gemeinsam', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p16_s2_w13', 'Tätigkeit', 'Tätigkeit', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p16_s2_w14', 'vieler', 'vieler', 'ADV'),
          w('ch2_p16_s2_w15', 'Mitglieder', 'Mitglied', 'NOUN', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p16_s2_w16', ',', ',', 'PUNCT'),
          w('ch2_p16_s2_w17', 'ja', 'ja', 'ADV'),
          w('ch2_p16_s2_w18', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p16_s2_w19', 'letzter', 'letzter', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p16_s2_w20', 'Instanz', 'Instanz', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p16_s2_w21', 'nur', 'nur', 'ADV'),
          w('ch2_p16_s2_w22', 'durch', 'durch', 'PREP', { case: 'ACC' }),
          w('ch2_p16_s2_w23', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p16_s2_w24', 'gemeinsame', 'gemeinsam', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p16_s2_w25', 'Tätigkeit', 'Tätigkeit', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p16_s2_w26', 'aller', 'all', 'PRON', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p16_s2_w27', 'Mitglieder', 'Mitglied', 'NOUN', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p16_s2_w28', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p16_s2_w29', 'Gesellschaft', 'Gesellschaft', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p16_s2_w30', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p16_s2_w31', 'Bewegung', 'Bewegung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p16_s2_w32', 'gesetzt', 'setzen', 'VERB', { tense: 'PERF' }),
          w('ch2_p16_s2_w33', 'werden', 'werden', 'VERB'),
          w('ch2_p16_s2_w34', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p16_s3',
        translationFr: 'Le capital n\'est donc pas une puissance personnelle, c\'est une puissance sociale.',
        words: [
          w('ch2_p16_s3_w1', 'Das', 'der', 'ART', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p16_s3_w2', 'Kapital', 'Kapital', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p16_s3_w3', 'ist', 'sein', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p16_s3_w4', 'also', 'also', 'ADV'),
          w('ch2_p16_s3_w5', 'keine', 'kein', 'PRON', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p16_s3_w6', 'persönliche', 'persönlich', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p16_s3_w7', ',', ',', 'PUNCT'),
          w('ch2_p16_s3_w8', 'es', 'es', 'PRON', { case: 'NOM', gender: 'N', number: 'SG', person: 3 }),
          w('ch2_p16_s3_w9', 'ist', 'sein', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p16_s3_w10', 'eine', 'ein', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p16_s3_w11', 'gesellschaftliche', 'gesellschaftlich', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p16_s3_w12', 'Macht', 'Macht', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p16_s3_w13', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p17',
    sentences: [
      {
        id: 'ch2_p17_s1',
        translationFr: 'Dès lors, quand le capital est transformé en propriété commune, appartenant à tous les membres de la société, ce n\'est pas une propriété personnelle qui se transforme en propriété sociale.',
        words: [
          w('ch2_p17_s1_w1', 'Wenn', 'wenn', 'CONJ'),
          w('ch2_p17_s1_w2', 'also', 'also', 'ADV'),
          w('ch2_p17_s1_w3', 'das', 'der', 'ART', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p17_s1_w4', 'Kapital', 'Kapital', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p17_s1_w5', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p17_s1_w6', 'ein', 'ein', 'ART', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p17_s1_w7', 'gemeinschaftliches', 'gemeinschaftlich', 'ADJ', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p17_s1_w8', ',', ',', 'PUNCT'),
          w('ch2_p17_s1_w9', 'allen', 'all', 'PRON', { case: 'DAT', gender: 'N', number: 'PL' }),
          w('ch2_p17_s1_w10', 'Mitgliedern', 'Mitglied', 'NOUN', { case: 'DAT', gender: 'N', number: 'PL' }),
          w('ch2_p17_s1_w11', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p17_s1_w12', 'Gesellschaft', 'Gesellschaft', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p17_s1_w13', 'angehöriges', 'angehörig', 'ADJ', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p17_s1_w14', 'Eigentum', 'Eigentum', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p17_s1_w15', 'verwandelt', 'verwandeln', 'VERB', { tense: 'PERF' }),
          w('ch2_p17_s1_w16', 'wird', 'werden', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p17_s1_w17', ',', ',', 'PUNCT'),
          w('ch2_p17_s1_w18', 'so', 'so', 'ADV'),
          w('ch2_p17_s1_w19', 'verwandelt', 'verwandeln', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p17_s1_w20', 'sich', 'sich', 'PRON', { case: 'ACC', number: 'SG', person: 3 }),
          w('ch2_p17_s1_w21', 'nicht', 'nicht', 'PART'),
          w('ch2_p17_s1_w22', 'persönliches', 'persönlich', 'ADJ', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p17_s1_w23', 'Eigentum', 'Eigentum', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p17_s1_w24', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p17_s1_w25', 'gesellschaftliches', 'gesellschaftlich', 'ADJ', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p17_s1_w26', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p17_s2',
        translationFr: 'Seul le caractère social de la propriété se transforme.',
        words: [
          w('ch2_p17_s2_w1', 'Nur', 'nur', 'ADV'),
          w('ch2_p17_s2_w2', 'der', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p17_s2_w3', 'gesellschaftliche', 'gesellschaftlich', 'ADJ', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p17_s2_w4', 'Charakter', 'Charakter', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p17_s2_w5', 'des', 'der', 'ART', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p17_s2_w6', 'Eigentums', 'Eigentum', 'NOUN', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p17_s2_w7', 'verwandelt', 'verwandeln', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p17_s2_w8', 'sich', 'sich', 'PRON', { case: 'ACC', number: 'SG', person: 3 }),
          w('ch2_p17_s2_w9', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p17_s3',
        translationFr: 'Elle perd son caractère de classe.',
        words: [
          w('ch2_p17_s3_w1', 'Er', 'er', 'PRON', { case: 'NOM', gender: 'M', number: 'SG', person: 3 }),
          w('ch2_p17_s3_w2', 'verliert', 'verlieren', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p17_s3_w3', 'seinen', 'sein', 'PRON', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p17_s3_w4', 'Klassencharakter', 'Klassencharakter', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Klassen', 'Charakter'] }),
          w('ch2_p17_s3_w5', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p18',
    sentences: [
      {
        id: 'ch2_p18_s1',
        translationFr: 'Venons-en au travail salarié :',
        words: [
          w('ch2_p18_s1_w1', 'Kommen', 'kommen', 'VERB', { number: 'PL', person: 1, tense: 'PRES', mood: 'IND' }),
          w('ch2_p18_s1_w2', 'wir', 'wir', 'PRON', { case: 'NOM', number: 'PL', person: 1 }),
          w('ch2_p18_s1_w3', 'zur', 'zu', 'PREP', { case: 'DAT' }),
          w('ch2_p18_s1_w4', 'Lohnarbeit', 'Lohnarbeit', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Lohn', 'Arbeit'] }),
          w('ch2_p18_s1_w5', ':', ':', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p19',
    sentences: [
      {
        id: 'ch2_p19_s1',
        translationFr: 'Le prix moyen du travail salarié est le minimum du salaire, c\'est-à-dire la somme des moyens de subsistance nécessaires pour maintenir l\'ouvrier en vie en tant qu\'ouvrier.',
        words: [
          w('ch2_p19_s1_w1', 'Der', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p19_s1_w2', 'Durchschnittspreis', 'Durchschnittspreis', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Durchschnitts', 'Preis'] }),
          w('ch2_p19_s1_w3', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p19_s1_w4', 'Lohnarbeit', 'Lohnarbeit', 'NOUN', { case: 'GEN', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Lohn', 'Arbeit'] }),
          w('ch2_p19_s1_w5', 'ist', 'sein', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p19_s1_w6', 'das', 'der', 'ART', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p19_s1_w7', 'Minimum', 'Minimum', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p19_s1_w8', 'des', 'der', 'ART', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch2_p19_s1_w9', 'Arbeitslohnes', 'Arbeitslohn', 'NOUN', { case: 'GEN', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Arbeits', 'Lohn'] }),
          w('ch2_p19_s1_w10', ',', ',', 'PUNCT'),
          w('ch2_p19_s1_w11', 'd.h.', 'das heißt', 'ADV'),
          w('ch2_p19_s1_w12', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p19_s1_w13', 'Summe', 'Summe', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p19_s1_w14', 'der', 'der', 'ART', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p19_s1_w15', 'Lebensmittel', 'Lebensmittel', 'NOUN', { case: 'GEN', gender: 'N', number: 'PL', isCompound: true, compoundParts: ['Lebens', 'Mittel'] }),
          w('ch2_p19_s1_w16', ',', ',', 'PUNCT'),
          w('ch2_p19_s1_w17', 'die', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p19_s1_w18', 'notwendig', 'notwendig', 'ADV'),
          w('ch2_p19_s1_w19', 'sind', 'sein', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p19_s1_w20', ',', ',', 'PUNCT'),
          w('ch2_p19_s1_w21', 'um', 'um', 'CONJ'),
          w('ch2_p19_s1_w22', 'den', 'der', 'ART', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p19_s1_w23', 'Arbeiter', 'Arbeiter', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p19_s1_w24', 'als', 'als', 'PREP'),
          w('ch2_p19_s1_w25', 'Arbeiter', 'Arbeiter', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p19_s1_w26', 'am', 'an', 'PREP', { case: 'DAT' }),
          w('ch2_p19_s1_w27', 'Leben', 'Leben', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p19_s1_w28', 'zu', 'zu', 'PART'),
          w('ch2_p19_s1_w29', 'erhalten', 'erhalten', 'VERB'),
          w('ch2_p19_s1_w30', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p19_s2',
        translationFr: 'Ce que le salarié s\'approprie donc par son activité suffit tout juste à reproduire sa nue existence.',
        words: [
          w('ch2_p19_s2_w1', 'Was', 'was', 'PRON', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p19_s2_w2', 'also', 'also', 'ADV'),
          w('ch2_p19_s2_w3', 'der', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p19_s2_w4', 'Lohnarbeiter', 'Lohnarbeiter', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Lohn', 'Arbeiter'] }),
          w('ch2_p19_s2_w5', 'durch', 'durch', 'PREP', { case: 'ACC' }),
          w('ch2_p19_s2_w6', 'seine', 'sein', 'PRON', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p19_s2_w7', 'Tätigkeit', 'Tätigkeit', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p19_s2_w8', 'sich', 'sich', 'PRON', { case: 'ACC', number: 'SG', person: 3 }),
          w('ch2_p19_s2_w9', 'aneignet', 'aneignen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p19_s2_w10', ',', ',', 'PUNCT'),
          w('ch2_p19_s2_w11', 'reicht', 'hinreichen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND', separablePrefix: 'hin' }),
          w('ch2_p19_s2_w12', 'bloß', 'bloß', 'ADV'),
          w('ch2_p19_s2_w13', 'dazu', 'dazu', 'ADV'),
          w('ch2_p19_s2_w14', 'hin', 'hinreichen', 'PART'),
          w('ch2_p19_s2_w15', ',', ',', 'PUNCT'),
          w('ch2_p19_s2_w16', 'um', 'um', 'CONJ'),
          w('ch2_p19_s2_w17', 'sein', 'sein', 'PRON', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p19_s2_w18', 'nacktes', 'nackt', 'ADJ', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p19_s2_w19', 'Leben', 'Leben', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p19_s2_w20', 'wieder', 'wieder', 'ADV'),
          w('ch2_p19_s2_w21', 'zu', 'zu', 'PART'),
          w('ch2_p19_s2_w22', 'erzeugen', 'erzeugen', 'VERB'),
          w('ch2_p19_s2_w23', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p19_s3',
        translationFr: 'Nous ne voulons nullement abolir cette appropriation personnelle des produits du travail destinée à la reproduction de la vie immédiate, appropriation qui ne laisse aucun produit net conférant un pouvoir sur le travail d\'autrui.',
        words: [
          w('ch2_p19_s3_w1', 'Wir', 'wir', 'PRON', { case: 'NOM', number: 'PL', person: 1 }),
          w('ch2_p19_s3_w2', 'wollen', 'wollen', 'VERB', { number: 'PL', person: 1, tense: 'PRES', mood: 'IND' }),
          w('ch2_p19_s3_w3', 'diese', 'dies', 'PRON', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p19_s3_w4', 'persönliche', 'persönlich', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p19_s3_w5', 'Aneignung', 'Aneignung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p19_s3_w6', 'der', 'der', 'ART', { case: 'GEN', gender: 'M', number: 'PL' }),
          w('ch2_p19_s3_w7', 'Arbeitsprodukte', 'Arbeitsprodukt', 'NOUN', { case: 'GEN', gender: 'N', number: 'PL', isCompound: true, compoundParts: ['Arbeits', 'Produkt'] }),
          w('ch2_p19_s3_w8', 'zur', 'zu', 'PREP', { case: 'DAT' }),
          w('ch2_p19_s3_w9', 'Wiedererzeugung', 'Wiedererzeugung', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Wieder', 'Erzeugung'] }),
          w('ch2_p19_s3_w10', 'des', 'der', 'ART', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p19_s3_w11', 'unmittelbaren', 'unmittelbar', 'ADJ', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p19_s3_w12', 'Lebens', 'Leben', 'NOUN', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p19_s3_w13', 'keineswegs', 'keineswegs', 'ADV'),
          w('ch2_p19_s3_w14', 'abschaffen', 'abschaffen', 'VERB'),
          w('ch2_p19_s3_w15', ',', ',', 'PUNCT'),
          w('ch2_p19_s3_w16', 'eine', 'ein', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p19_s3_w17', 'Aneignung', 'Aneignung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p19_s3_w18', ',', ',', 'PUNCT'),
          w('ch2_p19_s3_w19', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p19_s3_w20', 'keinen', 'kein', 'PRON', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p19_s3_w21', 'Reinertrag', 'Reinertrag', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Rein', 'Ertrag'] }),
          w('ch2_p19_s3_w22', 'übrigläßt', 'übriglassen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p19_s3_w23', ',', ',', 'PUNCT'),
          w('ch2_p19_s3_w24', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p19_s3_w25', 'Macht', 'Macht', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p19_s3_w26', 'über', 'über', 'PREP', { case: 'ACC' }),
          w('ch2_p19_s3_w27', 'fremde', 'fremd', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p19_s3_w28', 'Arbeit', 'Arbeit', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p19_s3_w29', 'geben', 'geben', 'VERB'),
          w('ch2_p19_s3_w30', 'könnte', 'können', 'VERB', { number: 'SG', person: 3, tense: 'PAST', mood: 'SUBJ' }),
          w('ch2_p19_s3_w31', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p19_s4',
        translationFr: 'Nous voulons seulement supprimer le caractère misérable de cette appropriation, où l\'ouvrier ne vit que pour accroître le capital, et ne vit qu\'autant que l\'exige l\'intérêt de la classe dominante.',
        words: [
          w('ch2_p19_s4_w1', 'Wir', 'wir', 'PRON', { case: 'NOM', number: 'PL', person: 1 }),
          w('ch2_p19_s4_w2', 'wollen', 'wollen', 'VERB', { number: 'PL', person: 1, tense: 'PRES', mood: 'IND' }),
          w('ch2_p19_s4_w3', 'nur', 'nur', 'ADV'),
          w('ch2_p19_s4_w4', 'den', 'der', 'ART', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p19_s4_w5', 'elenden', 'elend', 'ADJ', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p19_s4_w6', 'Charakter', 'Charakter', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p19_s4_w7', 'dieser', 'dies', 'PRON', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p19_s4_w8', 'Aneignung', 'Aneignung', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p19_s4_w9', 'aufheben', 'aufheben', 'VERB'),
          w('ch2_p19_s4_w10', ',', ',', 'PUNCT'),
          w('ch2_p19_s4_w11', 'worin', 'worin', 'CONJ'),
          w('ch2_p19_s4_w12', 'der', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p19_s4_w13', 'Arbeiter', 'Arbeiter', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p19_s4_w14', 'nur', 'nur', 'ADV'),
          w('ch2_p19_s4_w15', 'lebt', 'leben', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p19_s4_w16', ',', ',', 'PUNCT'),
          w('ch2_p19_s4_w17', 'um', 'um', 'CONJ'),
          w('ch2_p19_s4_w18', 'das', 'der', 'ART', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p19_s4_w19', 'Kapital', 'Kapital', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p19_s4_w20', 'zu', 'zu', 'PART'),
          w('ch2_p19_s4_w21', 'vermehren', 'vermehren', 'VERB'),
          w('ch2_p19_s4_w22', ',', ',', 'PUNCT'),
          w('ch2_p19_s4_w23', 'nur', 'nur', 'ADV'),
          w('ch2_p19_s4_w24', 'so', 'so', 'ADV'),
          w('ch2_p19_s4_w25', 'weit', 'weit', 'ADV'),
          w('ch2_p19_s4_w26', 'lebt', 'leben', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p19_s4_w27', ',', ',', 'PUNCT'),
          w('ch2_p19_s4_w28', 'wie', 'wie', 'CONJ'),
          w('ch2_p19_s4_w29', 'es', 'es', 'PRON', { case: 'NOM', gender: 'N', number: 'SG', person: 3 }),
          w('ch2_p19_s4_w30', 'das', 'der', 'ART', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p19_s4_w31', 'Interesse', 'Interesse', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p19_s4_w32', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p19_s4_w33', 'herrschenden', 'herrschend', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p19_s4_w34', 'Klasse', 'Klasse', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p19_s4_w35', 'erheischt', 'erheischen', 'VERB', { tense: 'PERF' }),
          w('ch2_p19_s4_w36', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p19_s5',
        translationFr: 'Dans la société bourgeoise, le travail vivant n\'est qu\'un moyen d\'accroître le travail accumulé.',
        words: [
          w('ch2_p19_s5_w1', 'In', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p19_s5_w2', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p19_s5_w3', 'bürgerlichen', 'bürgerlich', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p19_s5_w4', 'Gesellschaft', 'Gesellschaft', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p19_s5_w5', 'ist', 'sein', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p19_s5_w6', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p19_s5_w7', 'lebendige', 'lebendig', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p19_s5_w8', 'Arbeit', 'Arbeit', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p19_s5_w9', 'nur', 'nur', 'ADV'),
          w('ch2_p19_s5_w10', 'ein', 'ein', 'ART', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p19_s5_w11', 'Mittel', 'Mittel', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p19_s5_w12', ',', ',', 'PUNCT'),
          w('ch2_p19_s5_w13', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p19_s5_w14', 'aufgehäufte', 'aufgehäuft', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p19_s5_w15', 'Arbeit', 'Arbeit', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p19_s5_w16', 'zu', 'zu', 'PART'),
          w('ch2_p19_s5_w17', 'vermehren', 'vermehren', 'VERB'),
          w('ch2_p19_s5_w18', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p19_s6',
        translationFr: 'Dans la société communiste, le travail accumulé n\'est qu\'un moyen d\'élargir, d\'enrichir, de promouvoir le processus vital des travailleurs.',
        words: [
          w('ch2_p19_s6_w1', 'In', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p19_s6_w2', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p19_s6_w3', 'kommunistischen', 'kommunistisch', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p19_s6_w4', 'Gesellschaft', 'Gesellschaft', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p19_s6_w5', 'ist', 'sein', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p19_s6_w6', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p19_s6_w7', 'aufgehäufte', 'aufgehäuft', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p19_s6_w8', 'Arbeit', 'Arbeit', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p19_s6_w9', 'nur', 'nur', 'ADV'),
          w('ch2_p19_s6_w10', 'ein', 'ein', 'ART', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p19_s6_w11', 'Mittel', 'Mittel', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p19_s6_w12', ',', ',', 'PUNCT'),
          w('ch2_p19_s6_w13', 'um', 'um', 'CONJ'),
          w('ch2_p19_s6_w14', 'den', 'der', 'ART', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p19_s6_w15', 'Lebensprozeß', 'Lebensprozeß', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Lebens', 'Prozeß'] }),
          w('ch2_p19_s6_w16', 'der', 'der', 'ART', { case: 'GEN', gender: 'M', number: 'PL' }),
          w('ch2_p19_s6_w17', 'Arbeiter', 'Arbeiter', 'NOUN', { case: 'GEN', gender: 'M', number: 'PL' }),
          w('ch2_p19_s6_w18', 'zu', 'zu', 'PART'),
          w('ch2_p19_s6_w19', 'erweitern', 'erweitern', 'VERB'),
          w('ch2_p19_s6_w20', ',', ',', 'PUNCT'),
          w('ch2_p19_s6_w21', 'zu', 'zu', 'PART'),
          w('ch2_p19_s6_w22', 'bereichern', 'bereichern', 'VERB'),
          w('ch2_p19_s6_w23', ',', ',', 'PUNCT'),
          w('ch2_p19_s6_w24', 'zu', 'zu', 'PART'),
          w('ch2_p19_s6_w25', 'befördern', 'befördern', 'VERB'),
          w('ch2_p19_s6_w26', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p20',
    sentences: [
      {
        id: 'ch2_p20_s1',
        translationFr: 'Dans la société bourgeoise, le passé domine donc le présent ; dans la société communiste, c\'est le présent qui domine le passé.',
        words: [
          w('ch2_p20_s1_w1', 'In', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p20_s1_w2', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p20_s1_w3', 'bürgerlichen', 'bürgerlich', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p20_s1_w4', 'Gesellschaft', 'Gesellschaft', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p20_s1_w5', 'herrscht', 'herrschen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p20_s1_w6', 'also', 'also', 'ADV'),
          w('ch2_p20_s1_w7', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p20_s1_w8', 'Vergangenheit', 'Vergangenheit', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p20_s1_w9', 'über', 'über', 'PREP', { case: 'ACC' }),
          w('ch2_p20_s1_w10', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p20_s1_w11', 'Gegenwart', 'Gegenwart', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p20_s1_w12', ',', ',', 'PUNCT'),
          w('ch2_p20_s1_w13', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p20_s1_w14', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p20_s1_w15', 'kommunistischen', 'kommunistisch', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p20_s1_w16', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p20_s1_w17', 'Gegenwart', 'Gegenwart', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p20_s1_w18', 'über', 'über', 'PREP', { case: 'ACC' }),
          w('ch2_p20_s1_w19', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p20_s1_w20', 'Vergangenheit', 'Vergangenheit', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p20_s1_w21', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p20_s2',
        translationFr: 'Dans la société bourgeoise, le capital est indépendant et personnel, tandis que l\'individu agissant est dépendant et impersonnel.',
        words: [
          w('ch2_p20_s2_w1', 'In', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p20_s2_w2', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p20_s2_w3', 'bürgerlichen', 'bürgerlich', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p20_s2_w4', 'Gesellschaft', 'Gesellschaft', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p20_s2_w5', 'ist', 'sein', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p20_s2_w6', 'das', 'der', 'ART', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p20_s2_w7', 'Kapital', 'Kapital', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p20_s2_w8', 'selbständig', 'selbständig', 'ADV'),
          w('ch2_p20_s2_w9', 'und', 'und', 'CONJ'),
          w('ch2_p20_s2_w10', 'persönlich', 'persönlich', 'ADV'),
          w('ch2_p20_s2_w11', ',', ',', 'PUNCT'),
          w('ch2_p20_s2_w12', 'während', 'während', 'CONJ'),
          w('ch2_p20_s2_w13', 'das', 'der', 'ART', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p20_s2_w14', 'tätige', 'tätig', 'ADJ', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p20_s2_w15', 'Individuum', 'Individuum', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p20_s2_w16', 'unselbständig', 'unselbständig', 'ADV'),
          w('ch2_p20_s2_w17', 'und', 'und', 'CONJ'),
          w('ch2_p20_s2_w18', 'unpersönlich', 'unpersönlich', 'ADV'),
          w('ch2_p20_s2_w19', 'ist', 'sein', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p20_s2_w20', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p21',
    sentences: [
      {
        id: 'ch2_p21_s1',
        translationFr: 'Et c\'est l\'abolition d\'un tel rapport que la bourgeoisie qualifie d\'abolition de la personnalité et de la liberté !',
        words: [
          w('ch2_p21_s1_w1', 'Und', 'und', 'CONJ'),
          w('ch2_p21_s1_w2', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p21_s1_w3', 'Aufhebung', 'Aufhebung', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p21_s1_w4', 'dieses', 'dies', 'PRON', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p21_s1_w5', 'Verhältnisses', 'Verhältnis', 'NOUN', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p21_s1_w6', 'nennt', 'nennen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p21_s1_w7', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p21_s1_w8', 'Bourgeoisie', 'Bourgeoisie', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p21_s1_w9', 'Aufhebung', 'Aufhebung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p21_s1_w10', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p21_s1_w11', 'Persönlichkeit', 'Persönlichkeit', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p21_s1_w12', 'und', 'und', 'CONJ'),
          w('ch2_p21_s1_w13', 'Freiheit', 'Freiheit', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p21_s1_w14', '!', '!', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p21_s2',
        translationFr: 'Et avec raison !',
        words: [
          w('ch2_p21_s2_w1', 'Und', 'und', 'CONJ'),
          w('ch2_p21_s2_w2', 'mit', 'mit', 'PREP', { case: 'DAT' }),
          w('ch2_p21_s2_w3', 'Recht', 'Recht', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p21_s2_w4', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p21_s3',
        translationFr: 'Car il s\'agit bel et bien d\'abolir la personnalité, l\'indépendance et la liberté bourgeoises.',
        words: [
          w('ch2_p21_s3_w1', 'Es', 'es', 'PRON', { case: 'NOM', gender: 'N', number: 'SG', person: 3 }),
          w('ch2_p21_s3_w2', 'handelt', 'handeln', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p21_s3_w3', 'sich', 'sich', 'PRON', { case: 'ACC', number: 'SG', person: 3 }),
          w('ch2_p21_s3_w4', 'allerdings', 'allerdings', 'ADV'),
          w('ch2_p21_s3_w5', 'um', 'um', 'PREP', { case: 'ACC' }),
          w('ch2_p21_s3_w6', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p21_s3_w7', 'Aufhebung', 'Aufhebung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p21_s3_w8', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p21_s3_w9', 'Bourgeois-Persönlichkeit', 'Bourgeois-Persönlichkeit', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Bourgeois', 'Persönlichkeit'] }),
          w('ch2_p21_s3_w10', ',', ',', 'PUNCT'),
          w('ch2_p21_s3_w11', '-Selbständigkeit', 'Selbständigkeit', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p21_s3_w12', 'und', 'und', 'CONJ'),
          w('ch2_p21_s3_w13', '-Freiheit', 'Freiheit', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p21_s3_w14', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p22',
    sentences: [
      {
        id: 'ch2_p22_s1',
        translationFr: 'Par liberté, on entend, dans le cadre des actuels rapports de production bourgeois, la liberté du commerce, la liberté d\'acheter et de vendre.',
        words: [
          w('ch2_p22_s1_w1', 'Unter', 'unter', 'PREP', { case: 'DAT' }),
          w('ch2_p22_s1_w2', 'Freiheit', 'Freiheit', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p22_s1_w3', 'versteht', 'verstehen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p22_s1_w4', 'man', 'man', 'PRON', { case: 'NOM', number: 'SG' }),
          w('ch2_p22_s1_w5', 'innerhalb', 'innerhalb', 'PREP'),
          w('ch2_p22_s1_w6', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p22_s1_w7', 'jetzigen', 'jetzig', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p22_s1_w8', 'bürgerlichen', 'bürgerlich', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p22_s1_w9', 'Produktionsverhältnisse', 'Produktionsverhältnis', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG', isCompound: true, compoundParts: ['Produktions', 'Verhältnis'] }),
          w('ch2_p22_s1_w10', 'den', 'der', 'ART', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p22_s1_w11', 'freien', 'frei', 'ADJ', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p22_s1_w12', 'Handel', 'Handel', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p22_s1_w13', ',', ',', 'PUNCT'),
          w('ch2_p22_s1_w14', 'den', 'der', 'ART', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p22_s1_w15', 'freien', 'frei', 'ADJ', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p22_s1_w16', 'Kauf', 'Kauf', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p22_s1_w17', 'und', 'und', 'CONJ'),
          w('ch2_p22_s1_w18', 'Verkauf', 'Verkauf', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p22_s1_w19', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p23',
    sentences: [
      {
        id: 'ch2_p23_s1',
        translationFr: 'Mais si le trafic s\'écroule, le libre trafic s\'écroule aussi.',
        words: [
          w('ch2_p23_s1_w1', 'Fällt', 'fallen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p23_s1_w2', 'aber', 'aber', 'ADV'),
          w('ch2_p23_s1_w3', 'der', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p23_s1_w4', 'Schacher', 'Schacher', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p23_s1_w5', ',', ',', 'PUNCT'),
          w('ch2_p23_s1_w6', 'so', 'so', 'ADV'),
          w('ch2_p23_s1_w7', 'fällt', 'fallen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p23_s1_w8', 'auch', 'auch', 'ADV'),
          w('ch2_p23_s1_w9', 'der', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p23_s1_w10', 'freie', 'frei', 'ADJ', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p23_s1_w11', 'Schacher', 'Schacher', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p23_s1_w12', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p23_s2',
        translationFr: 'Les déclamations sur le libre trafic, comme toutes les autres rodomontades libérales de notre bourgeoisie, n\'ont de sens qu\'en regard du trafic entravé, du bourgeois asservi du Moyen Âge, mais n\'en ont aucun face à l\'abolition communiste du trafic, des rapports de production bourgeois et de la bourgeoisie elle-même.',
        words: [
          w('ch2_p23_s2_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'PL' }),
          w('ch2_p23_s2_w2', 'Redensarten', 'Redensart', 'NOUN', { case: 'NOM', gender: 'F', number: 'PL' }),
          w('ch2_p23_s2_w3', 'vom', 'von', 'PREP', { case: 'DAT' }),
          w('ch2_p23_s2_w4', 'freien', 'frei', 'ADJ', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p23_s2_w5', 'Schacher', 'Schacher', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p23_s2_w6', ',', ',', 'PUNCT'),
          w('ch2_p23_s2_w7', 'wie', 'wie', 'PREP'),
          w('ch2_p23_s2_w8', 'alle', 'all', 'PRON', { case: 'NOM', gender: 'F', number: 'PL' }),
          w('ch2_p23_s2_w9', 'übrigen', 'übrig', 'ADJ', { case: 'NOM', gender: 'F', number: 'PL' }),
          w('ch2_p23_s2_w10', 'Freiheitsbravaden', 'Freiheitsbravade', 'NOUN', { case: 'NOM', gender: 'F', number: 'PL', isCompound: true, compoundParts: ['Freiheits', 'Bravade'] }),
          w('ch2_p23_s2_w11', 'unserer', 'unser', 'PRON', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p23_s2_w12', 'Bourgeoisie', 'Bourgeoisie', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p23_s2_w13', ',', ',', 'PUNCT'),
          w('ch2_p23_s2_w14', 'haben', 'haben', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p23_s2_w15', 'überhaupt', 'überhaupt', 'ADV'),
          w('ch2_p23_s2_w16', 'nur', 'nur', 'ADV'),
          w('ch2_p23_s2_w17', 'einen', 'ein', 'ART', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p23_s2_w18', 'Sinn', 'Sinn', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p23_s2_w19', 'gegenüber', 'gegenüber', 'PREP', { case: 'DAT' }),
          w('ch2_p23_s2_w20', 'dem', 'der', 'ART', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p23_s2_w21', 'gebundenen', 'gebunden', 'ADJ', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p23_s2_w22', 'Schacher', 'Schacher', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p23_s2_w23', ',', ',', 'PUNCT'),
          w('ch2_p23_s2_w24', 'gegenüber', 'gegenüber', 'PREP', { case: 'DAT' }),
          w('ch2_p23_s2_w25', 'dem', 'der', 'ART', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p23_s2_w26', 'geknechteten', 'geknechtet', 'ADJ', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p23_s2_w27', 'Bürger', 'Bürger', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p23_s2_w28', 'des', 'der', 'ART', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch2_p23_s2_w29', 'Mittelalters', 'Mittelalter', 'NOUN', { case: 'GEN', gender: 'N', number: 'SG', isCompound: true, compoundParts: ['Mittel', 'Alter'] }),
          w('ch2_p23_s2_w30', ',', ',', 'PUNCT'),
          w('ch2_p23_s2_w31', 'nicht', 'nicht', 'PART'),
          w('ch2_p23_s2_w32', 'aber', 'aber', 'ADV'),
          w('ch2_p23_s2_w33', 'gegenüber', 'gegenüber', 'PREP', { case: 'DAT' }),
          w('ch2_p23_s2_w34', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p23_s2_w35', 'kommunistischen', 'kommunistisch', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p23_s2_w36', 'Aufhebung', 'Aufhebung', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p23_s2_w37', 'des', 'der', 'ART', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch2_p23_s2_w38', 'Schachers', 'Schacher', 'NOUN', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch2_p23_s2_w39', ',', ',', 'PUNCT'),
          w('ch2_p23_s2_w40', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p23_s2_w41', 'bürgerlichen', 'bürgerlich', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p23_s2_w42', 'Produktionsverhältnisse', 'Produktionsverhältnis', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG', isCompound: true, compoundParts: ['Produktions', 'Verhältnis'] }),
          w('ch2_p23_s2_w43', 'und', 'und', 'CONJ'),
          w('ch2_p23_s2_w44', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p23_s2_w45', 'Bourgeoisie', 'Bourgeoisie', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p23_s2_w46', 'selbst', 'selbst', 'ADV'),
          w('ch2_p23_s2_w47', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p24',
    sentences: [
      {
        id: 'ch2_p24_s1',
        translationFr: 'Vous êtes saisis d\'horreur parce que nous voulons abolir la propriété privée.',
        words: [
          w('ch2_p24_s1_w1', 'Ihr', 'ihr', 'PRON', { case: 'NOM', number: 'PL', person: 2 }),
          w('ch2_p24_s1_w2', 'entsetzt', 'entsetzen', 'VERB', { number: 'PL', person: 2, tense: 'PRES', mood: 'IND' }),
          w('ch2_p24_s1_w3', 'euch', 'ihr', 'PRON', { case: 'DAT', number: 'PL', person: 2 }),
          w('ch2_p24_s1_w4', 'darüber', 'darüber', 'ADV'),
          w('ch2_p24_s1_w5', ',', ',', 'PUNCT'),
          w('ch2_p24_s1_w6', 'daß', 'daß', 'CONJ'),
          w('ch2_p24_s1_w7', 'wir', 'wir', 'PRON', { case: 'NOM', number: 'PL', person: 1 }),
          w('ch2_p24_s1_w8', 'das', 'der', 'ART', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p24_s1_w9', 'Privateigentum', 'Privateigentum', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG', isCompound: true, compoundParts: ['Privat', 'Eigentum'] }),
          w('ch2_p24_s1_w10', 'aufheben', 'aufheben', 'VERB'),
          w('ch2_p24_s1_w11', 'wollen', 'wollen', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p24_s1_w12', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p24_s2',
        translationFr: 'Mais dans votre société actuelle, la propriété privée est abolie pour les neuf dixièmes de ses membres ; elle n\'existe précisément que parce qu\'elle n\'existe pas pour ces neuf dixièmes.',
        words: [
          w('ch2_p24_s2_w1', 'Aber', 'aber', 'CONJ'),
          w('ch2_p24_s2_w2', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p24_s2_w3', 'eurer', 'eurer', 'ADV'),
          w('ch2_p24_s2_w4', 'bestehenden', 'bestehend', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p24_s2_w5', 'Gesellschaft', 'Gesellschaft', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p24_s2_w6', 'ist', 'sein', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p24_s2_w7', 'das', 'der', 'ART', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p24_s2_w8', 'Privateigentum', 'Privateigentum', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG', isCompound: true, compoundParts: ['Privat', 'Eigentum'] }),
          w('ch2_p24_s2_w9', 'für', 'für', 'PREP', { case: 'ACC' }),
          w('ch2_p24_s2_w10', 'neun', 'neun', 'ADV'),
          w('ch2_p24_s2_w11', 'Zehntel', 'Zehntel', 'NOUN', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch2_p24_s2_w12', 'ihrer', 'ihr', 'PRON', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p24_s2_w13', 'Mitglieder', 'Mitglied', 'NOUN', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p24_s2_w14', 'aufgehoben', 'aufheben', 'VERB', { tense: 'PERF' }),
          w('ch2_p24_s2_w15', ',', ',', 'PUNCT'),
          w('ch2_p24_s2_w16', 'es', 'es', 'PRON', { case: 'NOM', gender: 'N', number: 'SG', person: 3 }),
          w('ch2_p24_s2_w17', 'existiert', 'existieren', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p24_s2_w18', 'gerade', 'gerade', 'ADV'),
          w('ch2_p24_s2_w19', 'dadurch', 'dadurch', 'ADV'),
          w('ch2_p24_s2_w20', ',', ',', 'PUNCT'),
          w('ch2_p24_s2_w21', 'daß', 'daß', 'CONJ'),
          w('ch2_p24_s2_w22', 'es', 'es', 'PRON', { case: 'NOM', gender: 'N', number: 'SG', person: 3 }),
          w('ch2_p24_s2_w23', 'für', 'für', 'PREP', { case: 'ACC' }),
          w('ch2_p24_s2_w24', 'neun', 'neun', 'ADV'),
          w('ch2_p24_s2_w25', 'Zehntel', 'Zehntel', 'NOUN', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch2_p24_s2_w26', 'nicht', 'nicht', 'PART'),
          w('ch2_p24_s2_w27', 'existiert', 'existieren', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p24_s2_w28', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p24_s3',
        translationFr: 'Vous nous reprochez donc de vouloir abolir une propriété qui présuppose, comme condition nécessaire, la privation de toute propriété pour l\'immense majorité de la société.',
        words: [
          w('ch2_p24_s3_w1', 'Ihr', 'ihr', 'PRON', { case: 'NOM', number: 'PL', person: 2 }),
          w('ch2_p24_s3_w2', 'werft', 'vorwerfen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND', separablePrefix: 'vor' }),
          w('ch2_p24_s3_w3', 'uns', 'wir', 'PRON', { case: 'DAT', number: 'PL', person: 1 }),
          w('ch2_p24_s3_w4', 'also', 'also', 'ADV'),
          w('ch2_p24_s3_w5', 'vor', 'vorwerfen', 'PART'),
          w('ch2_p24_s3_w6', ',', ',', 'PUNCT'),
          w('ch2_p24_s3_w7', 'daß', 'daß', 'CONJ'),
          w('ch2_p24_s3_w8', 'wir', 'wir', 'PRON', { case: 'NOM', number: 'PL', person: 1 }),
          w('ch2_p24_s3_w9', 'ein', 'ein', 'ART', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p24_s3_w10', 'Eigentum', 'Eigentum', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p24_s3_w11', 'aufheben', 'aufheben', 'VERB'),
          w('ch2_p24_s3_w12', 'wollen', 'wollen', 'VERB'),
          w('ch2_p24_s3_w13', ',', ',', 'PUNCT'),
          w('ch2_p24_s3_w14', 'welches', 'welcher', 'PRON', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p24_s3_w15', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p24_s3_w16', 'Eigentumslosigkeit', 'Eigentumslosigkeit', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Eigentums', 'Losigkeit'] }),
          w('ch2_p24_s3_w17', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p24_s3_w18', 'ungeheuren', 'ungeheuer', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p24_s3_w19', 'Mehrzahl', 'Mehrzahl', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p24_s3_w20', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p24_s3_w21', 'Gesellschaft', 'Gesellschaft', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p24_s3_w22', 'als', 'als', 'PREP'),
          w('ch2_p24_s3_w23', 'notwendige', 'notwendig', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p24_s3_w24', 'Bedingung', 'Bedingung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p24_s3_w25', 'voraussetzt', 'voraussetzen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p24_s3_w26', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p25',
    sentences: [
      {
        id: 'ch2_p25_s1',
        translationFr: 'En un mot, vous nous reprochez de vouloir abolir votre propriété.',
        words: [
          w('ch2_p25_s1_w1', 'Ihr', 'ihr', 'PRON', { case: 'NOM', number: 'PL', person: 2 }),
          w('ch2_p25_s1_w2', 'werft', 'vorwerfen', 'VERB', { number: 'PL', person: 2, tense: 'PRES', mood: 'IND', separablePrefix: 'vor' }),
          w('ch2_p25_s1_w3', 'uns', 'wir', 'PRON', { case: 'ACC', number: 'PL', person: 1 }),
          w('ch2_p25_s1_w4', 'mit', 'mit', 'PREP', { case: 'DAT' }),
          w('ch2_p25_s1_w5', 'einem', 'ein', 'ART', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p25_s1_w6', 'Worte', 'Worte', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p25_s1_w7', 'vor', 'vorwerfen', 'PART'),
          w('ch2_p25_s1_w8', ',', ',', 'PUNCT'),
          w('ch2_p25_s1_w9', 'daß', 'daß', 'CONJ'),
          w('ch2_p25_s1_w10', 'wir', 'wir', 'PRON', { case: 'NOM', number: 'PL', person: 1 }),
          w('ch2_p25_s1_w11', 'euer', 'euer', 'PRON', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch2_p25_s1_w12', 'Eigentum', 'Eigentum', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p25_s1_w13', 'aufheben', 'aufheben', 'VERB'),
          w('ch2_p25_s1_w14', 'wollen', 'wollen', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p25_s1_w15', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p25_s2',
        translationFr: 'À la vérité, c\'est bien là ce que nous voulons.',
        words: [
          w('ch2_p25_s2_w1', 'Allerdings', 'allerdings', 'ADV'),
          w('ch2_p25_s2_w2', ',', ',', 'PUNCT'),
          w('ch2_p25_s2_w3', 'das', 'der', 'ART', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p25_s2_w4', 'wollen', 'wollen', 'VERB', { number: 'PL', person: 1, tense: 'PRES', mood: 'IND' }),
          w('ch2_p25_s2_w5', 'wir', 'wir', 'PRON', { case: 'NOM', number: 'PL', person: 1 }),
          w('ch2_p25_s2_w6', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p26',
    sentences: [
      {
        id: 'ch2_p26_s1',
        translationFr: 'Dès l\'instant où le travail ne peut plus être converti en capital, en argent, en rente foncière, bref, en une puissance sociale monopolisable, c\'est-à-dire dès l\'instant où la propriété personnelle ne peut plus se muer en propriété bourgeoise, en capital, dès cet instant vous déclarez que la personne est abolie.',
        words: [
          w('ch2_p26_s1_w1', 'Von', 'von', 'PREP', { case: 'DAT' }),
          w('ch2_p26_s1_w2', 'dem', 'der', 'ART', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p26_s1_w3', 'Augenblick', 'Augenblick', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p26_s1_w4', 'an', 'anvon', 'PART'),
          w('ch2_p26_s1_w5', ',', ',', 'PUNCT'),
          w('ch2_p26_s1_w6', 'wo', 'wo', 'CONJ'),
          w('ch2_p26_s1_w7', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p26_s1_w8', 'Arbeit', 'Arbeit', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p26_s1_w9', 'nicht', 'nicht', 'PART'),
          w('ch2_p26_s1_w10', 'mehr', 'mehr', 'ADV'),
          w('ch2_p26_s1_w11', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p26_s1_w12', 'Kapital', 'Kapital', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p26_s1_w13', ',', ',', 'PUNCT'),
          w('ch2_p26_s1_w14', 'Geld', 'Geld', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p26_s1_w15', ',', ',', 'PUNCT'),
          w('ch2_p26_s1_w16', 'Grundrente', 'Grundrent', 'NOUN', { case: 'NOM', gender: 'F', number: 'PL', isCompound: true, compoundParts: ['Grund', 'Rente'] }),
          w('ch2_p26_s1_w17', ',', ',', 'PUNCT'),
          w('ch2_p26_s1_w18', 'kurz', 'kurz', 'ADV'),
          w('ch2_p26_s1_w19', ',', ',', 'PUNCT'),
          w('ch2_p26_s1_w20', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p26_s1_w21', 'eine', 'ein', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p26_s1_w22', 'monopolisierbare', 'monopolisierbar', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p26_s1_w23', 'gesellschaftliche', 'gesellschaftlich', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p26_s1_w24', 'Macht', 'Macht', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p26_s1_w25', 'verwandelt', 'verwandeln', 'VERB', { tense: 'PERF' }),
          w('ch2_p26_s1_w26', 'werden', 'werden', 'VERB'),
          w('ch2_p26_s1_w27', 'kann', 'können', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p26_s1_w28', ',', ',', 'PUNCT'),
          w('ch2_p26_s1_w29', 'd.h.', 'das heißt', 'ADV'),
          w('ch2_p26_s1_w30', 'von', 'von', 'PREP', { case: 'DAT' }),
          w('ch2_p26_s1_w31', 'dem', 'der', 'ART', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p26_s1_w32', 'Augenblick', 'Augenblick', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p26_s1_w33', ',', ',', 'PUNCT'),
          w('ch2_p26_s1_w34', 'wo', 'wo', 'CONJ'),
          w('ch2_p26_s1_w35', 'das', 'der', 'ART', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p26_s1_w36', 'persönliche', 'persönlich', 'ADJ', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p26_s1_w37', 'Eigentum', 'Eigentum', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p26_s1_w38', 'nicht', 'nicht', 'PART'),
          w('ch2_p26_s1_w39', 'mehr', 'mehr', 'ADV'),
          w('ch2_p26_s1_w40', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p26_s1_w41', 'bürgerliches', 'bürgerlich', 'ADJ', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p26_s1_w42', 'umschlagen', 'umschlagen', 'VERB'),
          w('ch2_p26_s1_w43', 'kann', 'können', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p26_s1_w44', ',', ',', 'PUNCT'),
          w('ch2_p26_s1_w45', 'von', 'von', 'PREP', { case: 'DAT' }),
          w('ch2_p26_s1_w46', 'dem', 'der', 'ART', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p26_s1_w47', 'Augenblick', 'Augenblick', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p26_s1_w48', 'an', 'an', 'PREP', { case: 'DAT' }),
          w('ch2_p26_s1_w49', 'erklärt', 'erklären', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p26_s1_w50', 'ihr', 'ihr', 'PRON', { case: 'DAT', gender: 'F', number: 'SG', person: 3 }),
          w('ch2_p26_s1_w51', ',', ',', 'PUNCT'),
          w('ch2_p26_s1_w52', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p26_s1_w53', 'Person', 'Person', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p26_s1_w54', 'sei', 'sein', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'SUBJ' }),
          w('ch2_p26_s1_w55', 'aufgehoben', 'aufheben', 'VERB', { tense: 'PERF' }),
          w('ch2_p26_s1_w56', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p27',
    sentences: [
      {
        id: 'ch2_p27_s1',
        translationFr: 'Vous avouez donc que, par personne, vous n\'entendez nul autre que le bourgeois, le propriétaire bourgeois.',
        words: [
          w('ch2_p27_s1_w1', 'Ihr', 'ihr', 'PRON', { case: 'NOM', number: 'PL', person: 2 }),
          w('ch2_p27_s1_w2', 'gesteht', 'gestehen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p27_s1_w3', 'also', 'also', 'ADV'),
          w('ch2_p27_s1_w4', ',', ',', 'PUNCT'),
          w('ch2_p27_s1_w5', 'daß', 'daß', 'CONJ'),
          w('ch2_p27_s1_w6', 'ihr', 'ihr', 'PRON', { case: 'DAT', gender: 'F', number: 'SG', person: 3 }),
          w('ch2_p27_s1_w7', 'unter', 'unter', 'PREP', { case: 'DAT' }),
          w('ch2_p27_s1_w8', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p27_s1_w9', 'Person', 'Person', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p27_s1_w10', 'niemanden', 'niemand', 'PRON', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p27_s1_w11', 'anders', 'anders', 'ADV'),
          w('ch2_p27_s1_w12', 'versteht', 'verstehen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p27_s1_w13', 'als', 'als', 'PREP'),
          w('ch2_p27_s1_w14', 'den', 'der', 'ART', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p27_s1_w15', 'Bourgeois', 'Bourgeois', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p27_s1_w16', ',', ',', 'PUNCT'),
          w('ch2_p27_s1_w17', 'den', 'der', 'ART', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p27_s1_w18', 'bürgerlichen', 'bürgerlich', 'ADJ', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p27_s1_w19', 'Eigentümer', 'Eigentümer', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p27_s1_w20', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p27_s2',
        translationFr: 'Et cette personne-là, il est vrai, doit être abolie.',
        words: [
          w('ch2_p27_s2_w1', 'Und', 'und', 'CONJ'),
          w('ch2_p27_s2_w2', 'diese', 'dies', 'PRON', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p27_s2_w3', 'Person', 'Person', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p27_s2_w4', 'soll', 'sollen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p27_s2_w5', 'allerdings', 'allerdings', 'ADV'),
          w('ch2_p27_s2_w6', 'aufgehoben', 'aufheben', 'VERB', { tense: 'PERF' }),
          w('ch2_p27_s2_w7', 'werden', 'werden', 'VERB'),
          w('ch2_p27_s2_w8', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p28',
    sentences: [
      {
        id: 'ch2_p28_s1',
        translationFr: 'Le communisme n\'enlève à personne le pouvoir de s\'approprier des produits sociaux ; il n\'ôte que le pouvoir d\'assujettir le travail d\'autrui au moyen de cette appropriation.',
        words: [
          w('ch2_p28_s1_w1', 'Der', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p28_s1_w2', 'Kommunismus', 'Kommunismus', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p28_s1_w3', 'nimmt', 'nehmen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p28_s1_w4', 'keinem', 'kein', 'PRON', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p28_s1_w5', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p28_s1_w6', 'Macht', 'Macht', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p28_s1_w7', ',', ',', 'PUNCT'),
          w('ch2_p28_s1_w8', 'sich', 'sich', 'PRON', { case: 'ACC', number: 'SG', person: 3 }),
          w('ch2_p28_s1_w9', 'gesellschaftliche', 'gesellschaftlich', 'ADJ', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch2_p28_s1_w10', 'Produkte', 'Produkt', 'NOUN', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch2_p28_s1_w11', 'anzueignen', 'aneignen', 'VERB', { separablePrefix: 'an' }),
          w('ch2_p28_s1_w12', ',', ',', 'PUNCT'),
          w('ch2_p28_s1_w13', 'er', 'er', 'PRON', { case: 'NOM', gender: 'M', number: 'SG', person: 3 }),
          w('ch2_p28_s1_w14', 'nimmt', 'nehmen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p28_s1_w15', 'nur', 'nur', 'ADV'),
          w('ch2_p28_s1_w16', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p28_s1_w17', 'Macht', 'Macht', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p28_s1_w18', ',', ',', 'PUNCT'),
          w('ch2_p28_s1_w19', 'sich', 'sich', 'PRON', { case: 'ACC', number: 'SG', person: 3 }),
          w('ch2_p28_s1_w20', 'durch', 'durch', 'PREP', { case: 'ACC' }),
          w('ch2_p28_s1_w21', 'diese', 'dies', 'PRON', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p28_s1_w22', 'Aneignung', 'Aneignung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p28_s1_w23', 'fremde', 'fremd', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p28_s1_w24', 'Arbeit', 'Arbeit', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p28_s1_w25', 'zu', 'zu', 'PART'),
          w('ch2_p28_s1_w26', 'unterjochen', 'unterjochen', 'VERB'),
          w('ch2_p28_s1_w27', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p29',
    sentences: [
      {
        id: 'ch2_p29_s1',
        translationFr: 'On a objecté qu\'avec l\'abolition de la propriété privée toute activité cesserait et qu\'une paresse générale s\'emparerait du monde.',
        words: [
          w('ch2_p29_s1_w1', 'Man', 'man', 'PRON', { case: 'NOM', number: 'SG' }),
          w('ch2_p29_s1_w2', 'hat', 'haben', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p29_s1_w3', 'eingewendet', 'einwenden', 'VERB', { tense: 'PERF' }),
          w('ch2_p29_s1_w4', ',', ',', 'PUNCT'),
          w('ch2_p29_s1_w5', 'mit', 'mit', 'PREP', { case: 'DAT' }),
          w('ch2_p29_s1_w6', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p29_s1_w7', 'Aufhebung', 'Aufhebung', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p29_s1_w8', 'des', 'der', 'ART', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p29_s1_w9', 'Privateigentums', 'Privateigentum', 'NOUN', { case: 'GEN', gender: 'N', number: 'SG', isCompound: true, compoundParts: ['Privat', 'Eigentum'] }),
          w('ch2_p29_s1_w10', 'werde', 'werden', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'SUBJ' }),
          w('ch2_p29_s1_w11', 'alle', 'all', 'PRON', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p29_s1_w12', 'Tätigkeit', 'Tätigkeit', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p29_s1_w13', 'aufhören', 'aufhören', 'VERB'),
          w('ch2_p29_s1_w14', ',', ',', 'PUNCT'),
          w('ch2_p29_s1_w15', 'und', 'und', 'CONJ'),
          w('ch2_p29_s1_w16', 'eine', 'ein', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p29_s1_w17', 'allgemeine', 'allgemein', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p29_s1_w18', 'Faulheit', 'Faulheit', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p29_s1_w19', 'einreißen', 'einreißen', 'VERB', { tense: 'PERF' }),
          w('ch2_p29_s1_w20', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p30',
    sentences: [
      {
        id: 'ch2_p30_s1',
        translationFr: 'Si tel était le cas, il y a beau temps que la société bourgeoise aurait péri par l\'oisiveté ; car ceux qui y travaillent n\'acquièrent rien, et ceux qui y acquièrent ne travaillent pas.',
        words: [
          w('ch2_p30_s1_w1', 'Hiernach', 'Hiernach', 'NOUN', { case: 'NOM', number: 'SG' }),
          w('ch2_p30_s1_w2', 'müßte', 'müssen', 'VERB', { number: 'SG', person: 3, tense: 'PAST', mood: 'SUBJ' }),
          w('ch2_p30_s1_w3', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p30_s1_w4', 'bürgerliche', 'bürgerlich', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p30_s1_w5', 'Gesellschaft', 'Gesellschaft', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p30_s1_w6', 'längst', 'längst', 'ADV'),
          w('ch2_p30_s1_w7', 'an', 'an', 'PREP', { case: 'DAT' }),
          w('ch2_p30_s1_w8', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p30_s1_w9', 'Trägheit', 'Trägheit', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p30_s1_w10', 'zugrunde', 'zugrunde', 'ADV'),
          w('ch2_p30_s1_w11', 'gegangen', 'gehen', 'VERB', { tense: 'PERF' }),
          w('ch2_p30_s1_w12', 'sein', 'sein', 'VERB'),
          w('ch2_p30_s1_w13', ';', ';', 'PUNCT'),
          w('ch2_p30_s1_w14', 'denn', 'denn', 'CONJ'),
          w('ch2_p30_s1_w15', 'die', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p30_s1_w16', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p30_s1_w17', 'ihr', 'ihr', 'PRON', { case: 'DAT', gender: 'F', number: 'SG', person: 3 }),
          w('ch2_p30_s1_w18', 'arbeiten', 'arbeiten', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p30_s1_w19', ',', ',', 'PUNCT'),
          w('ch2_p30_s1_w20', 'erwerben', 'erwerben', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p30_s1_w21', 'nicht', 'nicht', 'PART'),
          w('ch2_p30_s1_w22', ',', ',', 'PUNCT'),
          w('ch2_p30_s1_w23', 'und', 'und', 'CONJ'),
          w('ch2_p30_s1_w24', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p30_s1_w25', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p30_s1_w26', 'ihr', 'ihr', 'PRON', { case: 'DAT', gender: 'F', number: 'SG', person: 3 }),
          w('ch2_p30_s1_w27', 'erwerben', 'erwerben', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p30_s1_w28', ',', ',', 'PUNCT'),
          w('ch2_p30_s1_w29', 'arbeiten', 'arbeiten', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p30_s1_w30', 'nicht', 'nicht', 'PART'),
          w('ch2_p30_s1_w31', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p30_s2',
        translationFr: 'Toute l\'objection se réduit à cette tautologie : il n\'y a plus de travail salarié dès lors qu\'il n\'y a plus de capital.',
        words: [
          w('ch2_p30_s2_w1', 'Das', 'der', 'ART', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p30_s2_w2', 'ganze', 'ganz', 'ADJ', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p30_s2_w3', 'Bedenken', 'Bedenken', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p30_s2_w4', 'läuft', 'hinauslaufen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND', separablePrefix: 'hinaus' }),
          w('ch2_p30_s2_w5', 'auf', 'auf', 'PREP', { case: 'ACC' }),
          w('ch2_p30_s2_w6', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p30_s2_w7', 'Tautologie', 'Tautologie', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p30_s2_w8', 'hinaus', 'hinauslaufen', 'PART'),
          w('ch2_p30_s2_w9', ',', ',', 'PUNCT'),
          w('ch2_p30_s2_w10', 'daß', 'daß', 'CONJ'),
          w('ch2_p30_s2_w11', 'es', 'es', 'PRON', { case: 'NOM', gender: 'N', number: 'SG', person: 3 }),
          w('ch2_p30_s2_w12', 'keine', 'kein', 'PRON', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p30_s2_w13', 'Lohnarbeit', 'Lohnarbeit', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Lohn', 'Arbeit'] }),
          w('ch2_p30_s2_w14', 'mehr', 'mehr', 'ADV'),
          w('ch2_p30_s2_w15', 'gibt', 'geben', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p30_s2_w16', ',', ',', 'PUNCT'),
          w('ch2_p30_s2_w17', 'sobald', 'sobald', 'CONJ'),
          w('ch2_p30_s2_w18', 'es', 'es', 'PRON', { case: 'NOM', gender: 'N', number: 'SG', person: 3 }),
          w('ch2_p30_s2_w19', 'kein', 'kein', 'PRON', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p30_s2_w20', 'Kapital', 'Kapital', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p30_s2_w21', 'mehr', 'mehr', 'ADV'),
          w('ch2_p30_s2_w22', 'gibt', 'geben', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p30_s2_w23', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p31',
    sentences: [
      {
        id: 'ch2_p31_s1',
        translationFr: 'Toutes les objections dirigées contre le mode d\'appropriation et de production communiste des produits matériels ont été de même étendues à l\'appropriation et à la production des produits intellectuels.',
        words: [
          w('ch2_p31_s1_w1', 'Alle', 'all', 'PRON', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p31_s1_w2', 'Einwürfe', 'Einwurf', 'NOUN', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch2_p31_s1_w3', ',', ',', 'PUNCT'),
          w('ch2_p31_s1_w4', 'die', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p31_s1_w5', 'gegen', 'gegen', 'PREP', { case: 'ACC' }),
          w('ch2_p31_s1_w6', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p31_s1_w7', 'kommunistische', 'kommunistisch', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p31_s1_w8', 'Aneignungs-', 'Aneignung', 'ADV'),
          w('ch2_p31_s1_w9', 'und', 'und', 'CONJ'),
          w('ch2_p31_s1_w10', 'Produktionsweise', 'Produktionsweis', 'NOUN', { case: 'NOM', gender: 'F', number: 'PL', isCompound: true, compoundParts: ['Produktions', 'Weise'] }),
          w('ch2_p31_s1_w11', 'der', 'der', 'ART', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p31_s1_w12', 'materiellen', 'materiell', 'ADJ', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p31_s1_w13', 'Produkte', 'Produkt', 'NOUN', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p31_s1_w14', 'gerichtet', 'richten', 'VERB', { tense: 'PERF' }),
          w('ch2_p31_s1_w15', 'werden', 'werden', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p31_s1_w16', ',', ',', 'PUNCT'),
          w('ch2_p31_s1_w17', 'sind', 'sein', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p31_s1_w18', 'ebenso', 'ebenso', 'ADV'),
          w('ch2_p31_s1_w19', 'auf', 'auf', 'PREP', { case: 'ACC' }),
          w('ch2_p31_s1_w20', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p31_s1_w21', 'Aneignung', 'Aneignung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p31_s1_w22', 'und', 'und', 'CONJ'),
          w('ch2_p31_s1_w23', 'Produktion', 'Produktion', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p31_s1_w24', 'der', 'der', 'ART', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p31_s1_w25', 'geistigen', 'geistig', 'ADJ', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p31_s1_w26', 'Produkte', 'Produkt', 'NOUN', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p31_s1_w27', 'ausgedehnt', 'ausdehnen', 'VERB', { tense: 'PERF' }),
          w('ch2_p31_s1_w28', 'worden', 'werden', 'VERB', { tense: 'PERF' }),
          w('ch2_p31_s1_w29', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p31_s2',
        translationFr: 'De même que pour le bourgeois la disparition de la propriété de classe équivaut à la disparition de la production elle-même, de même la disparition de la culture de classe est pour lui identique à la disparition de toute culture en général.',
        words: [
          w('ch2_p31_s2_w1', 'Wie', 'wie', 'PREP'),
          w('ch2_p31_s2_w2', 'für', 'für', 'PREP', { case: 'ACC' }),
          w('ch2_p31_s2_w3', 'den', 'der', 'ART', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p31_s2_w4', 'Bourgeois', 'Bourgeois', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p31_s2_w5', 'das', 'der', 'ART', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p31_s2_w6', 'Aufhören', 'Aufhören', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p31_s2_w7', 'des', 'der', 'ART', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p31_s2_w8', 'Klasseneigentums', 'Klasseneigentum', 'NOUN', { case: 'GEN', gender: 'N', number: 'SG', isCompound: true, compoundParts: ['Klassen', 'Eigentum'] }),
          w('ch2_p31_s2_w9', 'das', 'der', 'ART', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p31_s2_w10', 'Aufhören', 'Aufhören', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p31_s2_w11', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p31_s2_w12', 'Produktion', 'Produktion', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p31_s2_w13', 'selbst', 'selbst', 'ADV'),
          w('ch2_p31_s2_w14', 'ist', 'sein', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p31_s2_w15', ',', ',', 'PUNCT'),
          w('ch2_p31_s2_w16', 'so', 'so', 'ADV'),
          w('ch2_p31_s2_w17', 'ist', 'sein', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p31_s2_w18', 'für', 'für', 'PREP', { case: 'ACC' }),
          w('ch2_p31_s2_w19', 'ihn', 'er', 'PRON', { case: 'ACC', gender: 'M', number: 'SG', person: 3 }),
          w('ch2_p31_s2_w20', 'das', 'der', 'ART', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p31_s2_w21', 'Aufhören', 'Aufhören', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p31_s2_w22', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p31_s2_w23', 'Klassenbildung', 'Klassenbildung', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Klassen', 'Bildung'] }),
          w('ch2_p31_s2_w24', 'identisch', 'identisch', 'ADV'),
          w('ch2_p31_s2_w25', 'mit', 'mit', 'PREP', { case: 'DAT' }),
          w('ch2_p31_s2_w26', 'dem', 'der', 'ART', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p31_s2_w27', 'Aufhören', 'Aufhören', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p31_s2_w28', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p31_s2_w29', 'Bildung', 'Bildung', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p31_s2_w30', 'überhaupt', 'überhaupt', 'ADV'),
          w('ch2_p31_s2_w31', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p31_s3',
        translationFr: 'La culture dont il déplore la perte n\'est pour l\'immense majorité qu\'un dressage à devenir machine.',
        words: [
          w('ch2_p31_s3_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p31_s3_w2', 'Bildung', 'Bildung', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p31_s3_w3', ',', ',', 'PUNCT'),
          w('ch2_p31_s3_w4', 'deren', 'der', 'ADV'),
          w('ch2_p31_s3_w5', 'Verlust', 'Verlust', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p31_s3_w6', 'er', 'er', 'PRON', { case: 'NOM', gender: 'M', number: 'SG', person: 3 }),
          w('ch2_p31_s3_w7', 'bedauert', 'bedauern', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p31_s3_w8', ',', ',', 'PUNCT'),
          w('ch2_p31_s3_w9', 'ist', 'sein', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p31_s3_w10', 'für', 'für', 'PREP', { case: 'ACC' }),
          w('ch2_p31_s3_w11', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p31_s3_w12', 'enorme', 'enorm', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p31_s3_w13', 'Mehrzahl', 'Mehrzahl', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p31_s3_w14', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p31_s3_w15', 'Heranbildung', 'Heranbildung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Heran', 'Bildung'] }),
          w('ch2_p31_s3_w16', 'zur', 'zu', 'PREP', { case: 'DAT' }),
          w('ch2_p31_s3_w17', 'Maschine', 'Maschine', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p31_s3_w18', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p32',
    sentences: [
      {
        id: 'ch2_p32_s1',
        translationFr: 'Mais ne venez point polémiquer avec nous en mesurant l\'abolition de la propriété bourgeoise à l\'aune de vos représentations bourgeoises de liberté, de culture, de droit, etc.',
        words: [
          w('ch2_p32_s1_w1', 'Aber', 'aber', 'CONJ'),
          w('ch2_p32_s1_w2', 'streitet', 'streiten', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p32_s1_w3', 'nicht', 'nicht', 'PART'),
          w('ch2_p32_s1_w4', 'mit', 'mit', 'PREP', { case: 'DAT' }),
          w('ch2_p32_s1_w5', 'uns', 'wir', 'PRON', { case: 'DAT', number: 'PL', person: 1 }),
          w('ch2_p32_s1_w6', ',', ',', 'PUNCT'),
          w('ch2_p32_s1_w7', 'indem', 'indem', 'CONJ'),
          w('ch2_p32_s1_w8', 'ihr', 'ihr', 'PRON', { case: 'DAT', gender: 'F', number: 'SG', person: 3 }),
          w('ch2_p32_s1_w9', 'an', 'an', 'PREP', { case: 'DAT' }),
          w('ch2_p32_s1_w10', 'euren', 'euren', 'ADV'),
          w('ch2_p32_s1_w11', 'bürgerlichen', 'bürgerlich', 'ADJ', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p32_s1_w12', 'Vorstellungen', 'Vorstellung', 'NOUN', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p32_s1_w13', 'von', 'von', 'PREP', { case: 'DAT' }),
          w('ch2_p32_s1_w14', 'Freiheit', 'Freiheit', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p32_s1_w15', ',', ',', 'PUNCT'),
          w('ch2_p32_s1_w16', 'Bildung', 'Bildung', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p32_s1_w17', ',', ',', 'PUNCT'),
          w('ch2_p32_s1_w18', 'Recht', 'Recht', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p32_s1_w19', 'usw.', 'und so weiter', 'ADV'),
          w('ch2_p32_s1_w20', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p32_s1_w21', 'Abschaffung', 'Abschaffung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p32_s1_w22', 'des', 'der', 'ART', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p32_s1_w23', 'bürgerlichen', 'bürgerlich', 'ADJ', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p32_s1_w24', 'Eigentums', 'Eigentum', 'NOUN', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p32_s1_w25', 'meßt', 'meßen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p32_s1_w26', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p32_s2',
        translationFr: 'Vos idées elles-mêmes sont les produits des rapports bourgeois de production et de propriété, tout comme votre droit n\'est que la volonté de votre classe érigée en loi, volonté dont le contenu est déterminé par les conditions matérielles d\'existence de votre classe.',
        words: [
          w('ch2_p32_s2_w1', 'Eure', 'euer', 'ADV'),
          w('ch2_p32_s2_w2', 'Ideen', 'Idee', 'NOUN', { case: 'NOM', gender: 'F', number: 'PL' }),
          w('ch2_p32_s2_w3', 'selbst', 'selbst', 'ADV'),
          w('ch2_p32_s2_w4', 'sind', 'sein', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p32_s2_w5', 'Erzeugnisse', 'Erzeugnis', 'NOUN', { case: 'NOM', gender: 'N', number: 'PL' }),
          w('ch2_p32_s2_w6', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p32_s2_w7', 'bürgerlichen', 'bürgerlich', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p32_s2_w8', 'Produktions-', 'Produktionsweise', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Produktions', 'Weise'] }),
          w('ch2_p32_s2_w9', 'und', 'und', 'CONJ'),
          w('ch2_p32_s2_w10', 'Eigentumsverhältnisse', 'Eigentumsverhältnis', 'NOUN', { case: 'GEN', gender: 'N', number: 'PL', isCompound: true, compoundParts: ['Eigentums', 'Verhältnis'] }),
          w('ch2_p32_s2_w11', ',', ',', 'PUNCT'),
          w('ch2_p32_s2_w12', 'wie', 'wie', 'CONJ'),
          w('ch2_p32_s2_w13', 'euer', 'euer', 'PRON', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p32_s2_w14', 'Recht', 'Recht', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p32_s2_w15', 'nur', 'nur', 'ADV'),
          w('ch2_p32_s2_w16', 'der', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p32_s2_w17', 'zum', 'zu', 'PREP', { case: 'DAT' }),
          w('ch2_p32_s2_w18', 'Gesetz', 'Gesetz', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p32_s2_w19', 'erhobene', 'erhoben', 'ADJ', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p32_s2_w20', 'Wille', 'Wille', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p32_s2_w21', 'eurer', 'eurer', 'ADV'),
          w('ch2_p32_s2_w22', 'Klasse', 'Klasse', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p32_s2_w23', 'ist', 'sein', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p32_s2_w24', ',', ',', 'PUNCT'),
          w('ch2_p32_s2_w25', 'ein', 'ein', 'ART', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p32_s2_w26', 'Wille', 'Wille', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p32_s2_w27', ',', ',', 'PUNCT'),
          w('ch2_p32_s2_w28', 'dessen', 'der', 'ADV'),
          w('ch2_p32_s2_w29', 'Inhalt', 'Inhalt', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p32_s2_w30', 'gegeben', 'geben', 'VERB', { tense: 'PERF' }),
          w('ch2_p32_s2_w31', 'ist', 'sein', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p32_s2_w32', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p32_s2_w33', 'den', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p32_s2_w34', 'materiellen', 'materiell', 'ADJ', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p32_s2_w35', 'Lebensbedingungen', 'Lebensbedingung', 'NOUN', { case: 'DAT', gender: 'F', number: 'PL', isCompound: true, compoundParts: ['Lebens', 'Bedingung'] }),
          w('ch2_p32_s2_w36', 'eurer', 'eurer', 'ADV'),
          w('ch2_p32_s2_w37', 'Klasse', 'Klasse', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p32_s2_w38', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p33',
    sentences: [
      {
        id: 'ch2_p33_s1',
        translationFr: 'La conception intéressée par laquelle vous métamorphosez vos rapports de production et de propriété — de rapports historiques et transitoires au cours de la production qu\'ils sont — en lois éternelles de la nature et de la raison, vous la partagez avec toutes les classes dominantes disparues.',
        words: [
          w('ch2_p33_s1_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p33_s1_w2', 'interessierte', 'interessiert', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p33_s1_w3', 'Vorstellung', 'Vorstellung', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p33_s1_w4', ',', ',', 'PUNCT'),
          w('ch2_p33_s1_w5', 'worin', 'worin', 'CONJ'),
          w('ch2_p33_s1_w6', 'ihr', 'ihr', 'PRON', { case: 'DAT', gender: 'F', number: 'SG', person: 3 }),
          w('ch2_p33_s1_w7', 'eure', 'eur', 'ADJ', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p33_s1_w8', 'Produktions-', 'Produktionsweise', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Produktions', 'Weise'] }),
          w('ch2_p33_s1_w9', 'und', 'und', 'CONJ'),
          w('ch2_p33_s1_w10', 'Eigentumsverhältnisse', 'Eigentumsverhältnis', 'NOUN', { case: 'ACC', gender: 'N', number: 'PL', isCompound: true, compoundParts: ['Eigentums', 'Verhältnis'] }),
          w('ch2_p33_s1_w11', 'aus', 'aus', 'PREP', { case: 'DAT' }),
          w('ch2_p33_s1_w12', 'geschichtlichen', 'geschichtlich', 'ADJ', { case: 'DAT', gender: 'N', number: 'PL' }),
          w('ch2_p33_s1_w13', ',', ',', 'PUNCT'),
          w('ch2_p33_s1_w14', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p33_s1_w15', 'dem', 'der', 'ART', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p33_s1_w16', 'Lauf', 'Lauf', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p33_s1_w17', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p33_s1_w18', 'Produktion', 'Produktion', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p33_s1_w19', 'vorübergehenden', 'vorübergehend', 'ADJ', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p33_s1_w20', 'Verhältnissen', 'Verhältnis', 'NOUN', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p33_s1_w21', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p33_s1_w22', 'ewige', 'ewig', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p33_s1_w23', 'Natur-', 'Natur', 'ADV'),
          w('ch2_p33_s1_w24', 'und', 'und', 'CONJ'),
          w('ch2_p33_s1_w25', 'Vernunftgesetze', 'Vernunftgesetz', 'NOUN', { case: 'ACC', gender: 'N', number: 'PL', isCompound: true, compoundParts: ['Vernunft', 'Gesetz'] }),
          w('ch2_p33_s1_w26', 'verwandelt', 'verwandeln', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p33_s1_w27', ',', ',', 'PUNCT'),
          w('ch2_p33_s1_w28', 'teilt', 'teilen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p33_s1_w29', 'ihr', 'ihr', 'PRON', { case: 'DAT', gender: 'F', number: 'SG', person: 3 }),
          w('ch2_p33_s1_w30', 'mit', 'mit', 'PREP', { case: 'DAT' }),
          w('ch2_p33_s1_w31', 'allen', 'all', 'PRON', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p33_s1_w32', 'untergegangenen', 'untergegangen', 'ADJ', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p33_s1_w33', 'herrschenden', 'herrschend', 'ADJ', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p33_s1_w34', 'Klassen', 'Klasse', 'NOUN', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p33_s1_w35', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p33_s2',
        translationFr: 'Ce que vous comprenez pour la propriété antique, ce que vous comprenez pour la propriété féodale, il vous est interdit de le comprendre pour la propriété bourgeoise. —',
        words: [
          w('ch2_p33_s2_w1', 'Was', 'was', 'PRON', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p33_s2_w2', 'ihr', 'ihr', 'PRON', { case: 'DAT', gender: 'F', number: 'SG', person: 3 }),
          w('ch2_p33_s2_w3', 'für', 'für', 'PREP', { case: 'ACC' }),
          w('ch2_p33_s2_w4', 'das', 'der', 'ART', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p33_s2_w5', 'antike', 'antik', 'ADJ', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p33_s2_w6', 'Eigentum', 'Eigentum', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p33_s2_w7', 'begreift', 'begreifen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p33_s2_w8', ',', ',', 'PUNCT'),
          w('ch2_p33_s2_w9', 'was', 'was', 'PRON', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p33_s2_w10', 'ihr', 'ihr', 'PRON', { case: 'DAT', gender: 'F', number: 'SG', person: 3 }),
          w('ch2_p33_s2_w11', 'für', 'für', 'PREP', { case: 'ACC' }),
          w('ch2_p33_s2_w12', 'das', 'der', 'ART', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p33_s2_w13', 'feudale', 'feudal', 'ADJ', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p33_s2_w14', 'Eigentum', 'Eigentum', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p33_s2_w15', 'begreift', 'begreifen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p33_s2_w16', ',', ',', 'PUNCT'),
          w('ch2_p33_s2_w17', 'dürft', 'dürfen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p33_s2_w18', 'ihr', 'ihr', 'PRON', { case: 'DAT', gender: 'F', number: 'SG', person: 3 }),
          w('ch2_p33_s2_w19', 'nicht', 'nicht', 'PART'),
          w('ch2_p33_s2_w20', 'mehr', 'mehr', 'ADV'),
          w('ch2_p33_s2_w21', 'begreifen', 'begreifen', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p33_s2_w22', 'für', 'für', 'PREP', { case: 'ACC' }),
          w('ch2_p33_s2_w23', 'das', 'der', 'ART', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p33_s2_w24', 'bürgerliche', 'bürgerlich', 'ADJ', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p33_s2_w25', 'Eigentum', 'Eigentum', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p33_s2_w26', '.', '.', 'PUNCT'),
          w('ch2_p33_s2_w27', '–', '–', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p34',
    sentences: [
      {
        id: 'ch2_p34_s1',
        translationFr: 'Abolition de la famille !',
        words: [
          w('ch2_p34_s1_w1', 'Aufhebung', 'Aufhebung', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p34_s1_w2', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p34_s1_w3', 'Familie', 'Familie', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p34_s1_w4', '!', '!', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p34_s2',
        translationFr: 'Même les plus radicaux s\'indignent de cet infâme dessein des communistes.',
        words: [
          w('ch2_p34_s2_w1', 'Selbst', 'selbst', 'ADV'),
          w('ch2_p34_s2_w2', 'die', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p34_s2_w3', 'Radikalsten', 'Radikalsten', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p34_s2_w4', 'ereifern', 'ereifern', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p34_s2_w5', 'sich', 'sich', 'PRON', { case: 'ACC', number: 'SG', person: 3 }),
          w('ch2_p34_s2_w6', 'über', 'über', 'PREP', { case: 'ACC' }),
          w('ch2_p34_s2_w7', 'diese', 'dies', 'PRON', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p34_s2_w8', 'schändliche', 'schändlich', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p34_s2_w9', 'Absicht', 'Absicht', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p34_s2_w10', 'der', 'der', 'ART', { case: 'GEN', gender: 'M', number: 'PL' }),
          w('ch2_p34_s2_w11', 'Kommunisten', 'Kommunist', 'NOUN', { case: 'GEN', gender: 'M', number: 'PL' }),
          w('ch2_p34_s2_w12', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p35',
    sentences: [
      {
        id: 'ch2_p35_s1',
        translationFr: 'Sur quoi repose la famille actuelle, la famille bourgeoise ?',
        words: [
          w('ch2_p35_s1_w1', 'Worauf', 'worauf', 'ADV'),
          w('ch2_p35_s1_w2', 'beruht', 'beruhen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p35_s1_w3', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p35_s1_w4', 'gegenwärtige', 'gegenwärtig', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p35_s1_w5', ',', ',', 'PUNCT'),
          w('ch2_p35_s1_w6', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p35_s1_w7', 'bürgerliche', 'bürgerlich', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p35_s1_w8', 'Familie', 'Familie', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p35_s1_w9', '?', '?', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p35_s2',
        translationFr: 'Sur le capital, sur le gain privé.',
        words: [
          w('ch2_p35_s2_w1', 'Auf', 'auf', 'PREP', { case: 'ACC' }),
          w('ch2_p35_s2_w2', 'dem', 'der', 'ART', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p35_s2_w3', 'Kapital', 'Kapital', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p35_s2_w4', ',', ',', 'PUNCT'),
          w('ch2_p35_s2_w5', 'auf', 'auf', 'PREP', { case: 'ACC' }),
          w('ch2_p35_s2_w6', 'dem', 'der', 'ART', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p35_s2_w7', 'Privaterwerb', 'Privaterwerb', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Privat', 'Erwerb'] }),
          w('ch2_p35_s2_w8', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p35_s3',
        translationFr: 'Pleinement développée, elle n\'existe que pour la bourgeoisie ; mais elle trouve son complément dans l\'absence forcée de famille chez les prolétaires et dans la prostitution publique.',
        words: [
          w('ch2_p35_s3_w1', 'Vollständig', 'vollständig', 'ADV'),
          w('ch2_p35_s3_w2', 'entwickelt', 'entwickeln', 'VERB', { tense: 'PERF' }),
          w('ch2_p35_s3_w3', 'existiert', 'existieren', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p35_s3_w4', 'sie', 'sie', 'PRON', { case: 'NOM', gender: 'F', number: 'SG', person: 3 }),
          w('ch2_p35_s3_w5', 'nur', 'nur', 'ADV'),
          w('ch2_p35_s3_w6', 'für', 'für', 'PREP', { case: 'ACC' }),
          w('ch2_p35_s3_w7', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p35_s3_w8', 'Bourgeoisie', 'Bourgeoisie', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p35_s3_w9', ';', ';', 'PUNCT'),
          w('ch2_p35_s3_w10', 'aber', 'aber', 'CONJ'),
          w('ch2_p35_s3_w11', 'sie', 'sie', 'PRON', { case: 'NOM', gender: 'F', number: 'SG', person: 3 }),
          w('ch2_p35_s3_w12', 'findet', 'finden', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p35_s3_w13', 'ihre', 'ihr', 'PRON', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p35_s3_w14', 'Ergänzung', 'Ergänzung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p35_s3_w15', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p35_s3_w16', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p35_s3_w17', 'erzwungenen', 'erzwungen', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p35_s3_w18', 'Familienlosigkeit', 'Familienlosigkeit', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Familien', 'Losigkeit'] }),
          w('ch2_p35_s3_w19', 'der', 'der', 'ART', { case: 'GEN', gender: 'M', number: 'PL' }),
          w('ch2_p35_s3_w20', 'Proletarier', 'Proletarier', 'NOUN', { case: 'GEN', gender: 'M', number: 'PL' }),
          w('ch2_p35_s3_w21', 'und', 'und', 'CONJ'),
          w('ch2_p35_s3_w22', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p35_s3_w23', 'öffentlichen', 'öffentlich', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p35_s3_w24', 'Prostitution', 'Prostitution', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p35_s3_w25', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p36',
    sentences: [
      {
        id: 'ch2_p36_s1',
        translationFr: 'La famille bourgeoise s\'évanouit naturellement avec l\'évanouissement de ce complément qui est le sien, et toutes deux disparaissent avec la disparition du capital.',
        words: [
          w('ch2_p36_s1_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p36_s1_w2', 'Familie', 'Familie', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p36_s1_w3', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p36_s1_w4', 'Bourgeois', 'Bourgeois', 'NOUN', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch2_p36_s1_w5', 'fällt', 'fallen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p36_s1_w6', 'natürlich', 'natürlich', 'ADV'),
          w('ch2_p36_s1_w7', 'weg', 'weg', 'ADV'),
          w('ch2_p36_s1_w8', 'mit', 'mit', 'PREP', { case: 'DAT' }),
          w('ch2_p36_s1_w9', 'dem', 'der', 'ART', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p36_s1_w10', 'Wegfallen', 'Wegfalle', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p36_s1_w11', 'dieser', 'dies', 'PRON', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p36_s1_w12', 'ihrer', 'ihr', 'PRON', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p36_s1_w13', 'Ergänzung', 'Ergänzung', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p36_s1_w14', ',', ',', 'PUNCT'),
          w('ch2_p36_s1_w15', 'und', 'und', 'CONJ'),
          w('ch2_p36_s1_w16', 'beide', 'beide', 'PRON', { case: 'NOM', number: 'PL' }),
          w('ch2_p36_s1_w17', 'verschwinden', 'verschwinden', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p36_s1_w18', 'mit', 'mit', 'PREP', { case: 'DAT' }),
          w('ch2_p36_s1_w19', 'dem', 'der', 'ART', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p36_s1_w20', 'Verschwinden', 'verschwinden', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p36_s1_w21', 'des', 'der', 'ART', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p36_s1_w22', 'Kapitals', 'Kapital', 'NOUN', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p36_s1_w23', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p37',
    sentences: [
      {
        id: 'ch2_p37_s1',
        translationFr: 'Nous reprochez-vous de vouloir abolir l\'exploitation des enfants par leurs parents ?',
        words: [
          w('ch2_p37_s1_w1', 'Werft', 'Werft', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p37_s1_w2', 'ihr', 'ihr', 'PRON', { case: 'NOM', number: 'PL', person: 2 }),
          w('ch2_p37_s1_w3', 'uns', 'wir', 'PRON', { case: 'ACC', number: 'PL', person: 1 }),
          w('ch2_p37_s1_w4', 'vor', 'vor', 'PREP', { case: 'DAT' }),
          w('ch2_p37_s1_w5', ',', ',', 'PUNCT'),
          w('ch2_p37_s1_w6', 'daß', 'daß', 'CONJ'),
          w('ch2_p37_s1_w7', 'wir', 'wir', 'PRON', { case: 'NOM', number: 'PL', person: 1 }),
          w('ch2_p37_s1_w8', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p37_s1_w9', 'Ausbeutung', 'Ausbeutung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p37_s1_w10', 'der', 'der', 'ART', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p37_s1_w11', 'Kinder', 'Kind', 'NOUN', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p37_s1_w12', 'durch', 'durch', 'PREP', { case: 'ACC' }),
          w('ch2_p37_s1_w13', 'ihre', 'ihr', 'PRON', { case: 'ACC', number: 'PL' }),
          w('ch2_p37_s1_w14', 'Eltern', 'Eltern', 'NOUN', { case: 'ACC', number: 'PL' }),
          w('ch2_p37_s1_w15', 'aufheben', 'aufheben', 'VERB'),
          w('ch2_p37_s1_w16', 'wollen', 'wollen', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p37_s1_w17', '?', '?', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p37_s2',
        translationFr: 'Ce crime, nous l\'avouons.',
        words: [
          w('ch2_p37_s2_w1', 'Wir', 'wir', 'PRON', { case: 'NOM', number: 'PL', person: 1 }),
          w('ch2_p37_s2_w2', 'gestehen', 'eingestehen', 'VERB', { number: 'PL', person: 1, tense: 'PRES', mood: 'IND', separablePrefix: 'ein' }),
          w('ch2_p37_s2_w3', 'dieses', 'dies', 'PRON', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p37_s2_w4', 'Verbrechen', 'Verbrechen', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p37_s2_w5', 'ein', 'ein', 'ART'),
          w('ch2_p37_s2_w6', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p38',
    sentences: [
      {
        id: 'ch2_p38_s1',
        translationFr: 'Mais, dites-vous, nous détruisons les rapports les plus intimes en substituant l\'éducation sociale à l\'éducation domestique.',
        words: [
          w('ch2_p38_s1_w1', 'Aber', 'aber', 'CONJ'),
          w('ch2_p38_s1_w2', ',', ',', 'PUNCT'),
          w('ch2_p38_s1_w3', 'sagt', 'sagen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p38_s1_w4', 'ihr', 'ihr', 'PRON', { case: 'DAT', gender: 'F', number: 'SG', person: 3 }),
          w('ch2_p38_s1_w5', ',', ',', 'PUNCT'),
          w('ch2_p38_s1_w6', 'wir', 'wir', 'PRON', { case: 'NOM', number: 'PL', person: 1 }),
          w('ch2_p38_s1_w7', 'heben', 'aufheben', 'VERB', { number: 'PL', person: 1, tense: 'PRES', mood: 'IND', separablePrefix: 'auf' }),
          w('ch2_p38_s1_w8', 'die', 'der', 'ART', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch2_p38_s1_w9', 'trautesten', 'trautest', 'ADJ', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch2_p38_s1_w10', 'Verhältnisse', 'Verhältnis', 'NOUN', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch2_p38_s1_w11', 'auf', 'aufheben', 'PART'),
          w('ch2_p38_s1_w12', ',', ',', 'PUNCT'),
          w('ch2_p38_s1_w13', 'indem', 'indem', 'CONJ'),
          w('ch2_p38_s1_w14', 'wir', 'wir', 'PRON', { case: 'NOM', number: 'PL', person: 1 }),
          w('ch2_p38_s1_w15', 'an', 'an', 'PREP', { case: 'DAT' }),
          w('ch2_p38_s1_w16', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p38_s1_w17', 'Stelle', 'Stelle', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p38_s1_w18', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p38_s1_w19', 'häuslichen', 'häuslich', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p38_s1_w20', 'Erziehung', 'Erziehung', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p38_s1_w21', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p38_s1_w22', 'gesellschaftliche', 'gesellschaftlich', 'ADJ', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch2_p38_s1_w23', 'setzen', 'setzen', 'VERB'),
          w('ch2_p38_s1_w24', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p39',
    sentences: [
      {
        id: 'ch2_p39_s1',
        translationFr: 'Et votre éducation à vous, n\'est-elle pas, elle aussi, déterminée par la société ?',
        words: [
          w('ch2_p39_s1_w1', 'Und', 'und', 'CONJ'),
          w('ch2_p39_s1_w2', 'ist', 'sein', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p39_s1_w3', 'nicht', 'nicht', 'PART'),
          w('ch2_p39_s1_w4', 'auch', 'auch', 'ADV'),
          w('ch2_p39_s1_w5', 'eure', 'eur', 'ADV'),
          w('ch2_p39_s1_w6', 'Erziehung', 'Erziehung', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p39_s1_w7', 'durch', 'durch', 'PREP', { case: 'ACC' }),
          w('ch2_p39_s1_w8', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p39_s1_w9', 'Gesellschaft', 'Gesellschaft', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p39_s1_w10', 'bestimmt', 'bestimmen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p39_s1_w11', '?', '?', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p39_s2',
        translationFr: 'Déterminée par les rapports sociaux au sein desquels vous éduquez, par l\'intervention plus ou moins directe de la société, par le truchement de l\'école, etc. ?',
        words: [
          w('ch2_p39_s2_w1', 'Durch', 'durch', 'PREP', { case: 'ACC' }),
          w('ch2_p39_s2_w2', 'die', 'der', 'ART', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch2_p39_s2_w3', 'gesellschaftlichen', 'gesellschaftlich', 'ADJ', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch2_p39_s2_w4', 'Verhältnisse', 'Verhältnis', 'NOUN', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch2_p39_s2_w5', ',', ',', 'PUNCT'),
          w('ch2_p39_s2_w6', 'innerhalb', 'innerhalb', 'PREP'),
          w('ch2_p39_s2_w7', 'derer', 'der', 'PRON', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch2_p39_s2_w8', 'ihr', 'ihr', 'PRON', { case: 'DAT', gender: 'F', number: 'SG', person: 3 }),
          w('ch2_p39_s2_w9', 'erzieht', 'erziehen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p39_s2_w10', ',', ',', 'PUNCT'),
          w('ch2_p39_s2_w11', 'durch', 'durch', 'PREP', { case: 'ACC' }),
          w('ch2_p39_s2_w12', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p39_s2_w13', 'direktere', 'direkt', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p39_s2_w14', 'oder', 'oder', 'CONJ'),
          w('ch2_p39_s2_w15', 'indirektere', 'indirekter', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p39_s2_w16', 'Einmischung', 'Einmischung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p39_s2_w17', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p39_s2_w18', 'Gesellschaft', 'Gesellschaft', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p39_s2_w19', ',', ',', 'PUNCT'),
          w('ch2_p39_s2_w20', 'vermittelst', 'vermittelsen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p39_s2_w21', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p39_s2_w22', 'Schule', 'Schule', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p39_s2_w23', 'usw.', 'und so weiter', 'ADV'),
          w('ch2_p39_s2_w24', '?', '?', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p39_s3',
        translationFr: 'Les communistes n\'inventent pas l\'action de la société sur l\'éducation ; ils ne font qu\'en modifier le caractère et arracher l\'éducation à l\'influence de la classe dominante.',
        words: [
          w('ch2_p39_s3_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p39_s3_w2', 'Kommunisten', 'Kommunist', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p39_s3_w3', 'erfinden', 'erfinden', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p39_s3_w4', 'nicht', 'nicht', 'PART'),
          w('ch2_p39_s3_w5', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p39_s3_w6', 'Einwirkung', 'Einwirkung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p39_s3_w7', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p39_s3_w8', 'Gesellschaft', 'Gesellschaft', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p39_s3_w9', 'auf', 'auf', 'PREP', { case: 'ACC' }),
          w('ch2_p39_s3_w10', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p39_s3_w11', 'Erziehung', 'Erziehung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p39_s3_w12', ';', ';', 'PUNCT'),
          w('ch2_p39_s3_w13', 'sie', 'sie', 'PRON', { case: 'NOM', gender: 'F', number: 'SG', person: 3 }),
          w('ch2_p39_s3_w14', 'verändern', 'verändern', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p39_s3_w15', 'nur', 'nur', 'ADV'),
          w('ch2_p39_s3_w16', 'ihren', 'ihr', 'PRON', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p39_s3_w17', 'Charakter', 'Charakter', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p39_s3_w18', ',', ',', 'PUNCT'),
          w('ch2_p39_s3_w19', 'sie', 'sie', 'PRON', { case: 'NOM', number: 'PL', person: 3 }),
          w('ch2_p39_s3_w20', 'entreißen', 'entreißen', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p39_s3_w21', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p39_s3_w22', 'Erziehung', 'Erziehung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p39_s3_w23', 'dem', 'der', 'ART', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p39_s3_w24', 'Einfluß', 'Einfluß', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p39_s3_w25', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p39_s3_w26', 'herrschenden', 'herrschend', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p39_s3_w27', 'Klasse', 'Klasse', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p39_s3_w28', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p40',
    sentences: [
      {
        id: 'ch2_p40_s1',
        translationFr: 'Les déclamations bourgeoises sur la famille et l\'éducation, sur les doux rapports entre parents et enfants, deviennent d\'autant plus écœurantes qu\'avec le développement de la grande industrie tous les liens de famille sont brisés pour les prolétaires et les enfants transformés en simples articles de commerce et instruments de travail.',
        words: [
          w('ch2_p40_s1_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'PL' }),
          w('ch2_p40_s1_w2', 'bürgerlichen', 'bürgerlich', 'ADJ', { case: 'NOM', gender: 'F', number: 'PL' }),
          w('ch2_p40_s1_w3', 'Redensarten', 'Redensart', 'NOUN', { case: 'NOM', gender: 'F', number: 'PL' }),
          w('ch2_p40_s1_w4', 'über', 'über', 'PREP', { case: 'ACC' }),
          w('ch2_p40_s1_w5', 'Familie', 'Familie', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p40_s1_w6', 'und', 'und', 'CONJ'),
          w('ch2_p40_s1_w7', 'Erziehung', 'Erziehung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p40_s1_w8', ',', ',', 'PUNCT'),
          w('ch2_p40_s1_w9', 'über', 'über', 'PREP', { case: 'ACC' }),
          w('ch2_p40_s1_w10', 'das', 'der', 'ART', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p40_s1_w11', 'traute', 'traut', 'ADJ', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p40_s1_w12', 'Verhältnis', 'Verhältnis', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p40_s1_w13', 'von', 'von', 'PREP', { case: 'DAT' }),
          w('ch2_p40_s1_w14', 'Eltern', 'Eltern', 'NOUN', { case: 'DAT', number: 'PL' }),
          w('ch2_p40_s1_w15', 'und', 'und', 'CONJ'),
          w('ch2_p40_s1_w16', 'Kindern', 'Kind', 'NOUN', { case: 'DAT', gender: 'N', number: 'PL' }),
          w('ch2_p40_s1_w17', 'werden', 'werden', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p40_s1_w18', 'um', 'um', 'PREP', { case: 'ACC' }),
          w('ch2_p40_s1_w19', 'so', 'so', 'ADV'),
          w('ch2_p40_s1_w20', 'ekelhafter', 'ekelhafter', 'ADV'),
          w('ch2_p40_s1_w21', ',', ',', 'PUNCT'),
          w('ch2_p40_s1_w22', 'je', 'je', 'ADV'),
          w('ch2_p40_s1_w23', 'mehr', 'mehr', 'ADV'),
          w('ch2_p40_s1_w24', 'infolge', 'infolge', 'PREP', { case: 'GEN' }),
          w('ch2_p40_s1_w25', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p40_s1_w26', 'großen', 'groß', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p40_s1_w27', 'Industrie', 'Industrie', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p40_s1_w28', 'alle', 'all', 'PRON', { case: 'ACC', gender: 'M', number: 'PL' }),
          w('ch2_p40_s1_w29', 'Familienbande', 'Familienband', 'NOUN', { case: 'ACC', number: 'PL', isCompound: true, compoundParts: ['Familien', 'Bande'] }),
          w('ch2_p40_s1_w30', 'für', 'für', 'PREP', { case: 'ACC' }),
          w('ch2_p40_s1_w31', 'die', 'der', 'ART', { case: 'ACC', gender: 'M', number: 'PL' }),
          w('ch2_p40_s1_w32', 'Proletarier', 'Proletarier', 'NOUN', { case: 'ACC', gender: 'M', number: 'PL' }),
          w('ch2_p40_s1_w33', 'zerrissen', 'zerreißen', 'VERB', { tense: 'PERF' }),
          w('ch2_p40_s1_w34', 'und', 'und', 'CONJ'),
          w('ch2_p40_s1_w35', 'die', 'der', 'ART', { case: 'NOM', gender: 'N', number: 'PL' }),
          w('ch2_p40_s1_w36', 'Kinder', 'Kind', 'NOUN', { case: 'NOM', gender: 'N', number: 'PL' }),
          w('ch2_p40_s1_w37', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p40_s1_w38', 'einfache', 'einfach', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p40_s1_w39', 'Handelsartikel', 'Handelsartikel', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Handels', 'Artikel'] }),
          w('ch2_p40_s1_w40', 'und', 'und', 'CONJ'),
          w('ch2_p40_s1_w41', 'Arbeitsinstrumente', 'Arbeitsinstrument', 'NOUN', { case: 'NOM', gender: 'N', number: 'PL', isCompound: true, compoundParts: ['Arbeits', 'Instrument'] }),
          w('ch2_p40_s1_w42', 'verwandelt', 'verwandeln', 'VERB', { tense: 'PERF' }),
          w('ch2_p40_s1_w43', 'werden', 'werden', 'VERB'),
          w('ch2_p40_s1_w44', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p41',
    sentences: [
      {
        id: 'ch2_p41_s1',
        translationFr: 'Mais vous autres communistes, vous voulez introduire la communauté des femmes ! nous crie en chœur la bourgeoisie tout entière.',
        words: [
          w('ch2_p41_s1_w1', 'Aber', 'aber', 'CONJ'),
          w('ch2_p41_s1_w2', 'ihr', 'ihr', 'PRON', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p41_s1_w3', 'Kommunisten', 'Kommunist', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p41_s1_w4', 'wollt', 'wollen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p41_s1_w5', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p41_s1_w6', 'Weibergemeinschaft', 'Weibergemeinschaft', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Weiber', 'Gemeinschaft'] }),
          w('ch2_p41_s1_w7', 'einführen', 'einführen', 'VERB'),
          w('ch2_p41_s1_w8', ',', ',', 'PUNCT'),
          w('ch2_p41_s1_w9', 'schreit', 'entgegenschreien', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND', separablePrefix: 'entgegen' }),
          w('ch2_p41_s1_w10', 'uns', 'wir', 'PRON', { case: 'DAT', number: 'PL', person: 1 }),
          w('ch2_p41_s1_w11', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p41_s1_w12', 'ganze', 'ganz', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p41_s1_w13', 'Bourgeoisie', 'Bourgeoisie', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p41_s1_w14', 'im', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p41_s1_w15', 'Chor', 'Chor', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p41_s1_w16', 'entgegen', 'entgegenschreien', 'PART'),
          w('ch2_p41_s1_w17', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p42',
    sentences: [
      {
        id: 'ch2_p42_s1',
        translationFr: 'Le bourgeois ne voit dans sa femme qu\'un simple instrument de production.',
        words: [
          w('ch2_p42_s1_w1', 'Der', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p42_s1_w2', 'Bourgeois', 'Bourgeois', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p42_s1_w3', 'sieht', 'sehen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p42_s1_w4', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p42_s1_w5', 'seiner', 'sein', 'PRON', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p42_s1_w6', 'Frau', 'Frau', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p42_s1_w7', 'ein', 'ein', 'ART', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p42_s1_w8', 'bloßes', 'bloß', 'ADJ', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p42_s1_w9', 'Produktionsinstrument', 'Produktionsinstrument', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG', isCompound: true, compoundParts: ['Produktions', 'Instrument'] }),
          w('ch2_p42_s1_w10', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p42_s2',
        translationFr: 'Il entend dire que les instruments de production doivent être exploités en commun, et ne peut naturellement se représenter autre chose sinon que le sort de la mise en commun frappera tout autant les femmes.',
        words: [
          w('ch2_p42_s2_w1', 'Er', 'er', 'PRON', { case: 'NOM', gender: 'M', number: 'SG', person: 3 }),
          w('ch2_p42_s2_w2', 'hört', 'hören', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p42_s2_w3', ',', ',', 'PUNCT'),
          w('ch2_p42_s2_w4', 'daß', 'daß', 'CONJ'),
          w('ch2_p42_s2_w5', 'die', 'der', 'ART', { case: 'NOM', gender: 'N', number: 'PL' }),
          w('ch2_p42_s2_w6', 'Produktionsinstrumente', 'Produktionsinstrument', 'NOUN', { case: 'NOM', gender: 'N', number: 'PL', isCompound: true, compoundParts: ['Produktions', 'Instrument'] }),
          w('ch2_p42_s2_w7', 'gemeinschaftlich', 'gemeinschaftlich', 'ADV'),
          w('ch2_p42_s2_w8', 'ausgebeutet', 'ausbeuten', 'VERB', { tense: 'PERF' }),
          w('ch2_p42_s2_w9', 'werden', 'werden', 'VERB'),
          w('ch2_p42_s2_w10', 'sollen', 'sollen', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p42_s2_w11', ',', ',', 'PUNCT'),
          w('ch2_p42_s2_w12', 'und', 'und', 'CONJ'),
          w('ch2_p42_s2_w13', 'kann', 'können', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p42_s2_w14', 'sich', 'sich', 'PRON', { case: 'ACC', number: 'SG', person: 3 }),
          w('ch2_p42_s2_w15', 'natürlich', 'natürlich', 'ADV'),
          w('ch2_p42_s2_w16', 'nichts', 'nichts', 'PRON', { gender: 'N' }),
          w('ch2_p42_s2_w17', 'anderes', 'anderer', 'PRON', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p42_s2_w18', 'denken', 'denken', 'VERB'),
          w('ch2_p42_s2_w19', ',', ',', 'PUNCT'),
          w('ch2_p42_s2_w20', 'als', 'als', 'PREP'),
          w('ch2_p42_s2_w21', 'daß', 'daß', 'CONJ'),
          w('ch2_p42_s2_w22', 'das', 'der', 'ART', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p42_s2_w23', 'Los', 'Los', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p42_s2_w24', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p42_s2_w25', 'Gemeinschaftlichkeit', 'Gemeinschaftlichkeit', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p42_s2_w26', 'die', 'der', 'ART', { case: 'ACC', gender: 'M', number: 'PL' }),
          w('ch2_p42_s2_w27', 'Weiber', 'Weib', 'NOUN', { case: 'ACC', gender: 'M', number: 'PL' }),
          w('ch2_p42_s2_w28', 'gleichfalls', 'gleichfalls', 'ADV'),
          w('ch2_p42_s2_w29', 'treffen', 'treffen', 'VERB'),
          w('ch2_p42_s2_w30', 'wird', 'werden', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p42_s2_w31', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p43',
    sentences: [
      {
        id: 'ch2_p43_s1',
        translationFr: 'Il ne soupçonne pas qu\'il s\'agit précisément d\'abolir la condition faite aux femmes de n\'être que de simples instruments de production.',
        words: [
          w('ch2_p43_s1_w1', 'Er', 'er', 'PRON', { case: 'NOM', gender: 'M', number: 'SG', person: 3 }),
          w('ch2_p43_s1_w2', 'ahnt', 'ahnen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p43_s1_w3', 'nicht', 'nicht', 'PART'),
          w('ch2_p43_s1_w4', ',', ',', 'PUNCT'),
          w('ch2_p43_s1_w5', 'daß', 'daß', 'CONJ'),
          w('ch2_p43_s1_w6', 'es', 'es', 'PRON', { case: 'NOM', gender: 'N', number: 'SG', person: 3 }),
          w('ch2_p43_s1_w7', 'sich', 'sich', 'PRON', { case: 'ACC', number: 'SG', person: 3 }),
          w('ch2_p43_s1_w8', 'eben', 'eben', 'ADV'),
          w('ch2_p43_s1_w9', 'darum', 'darum', 'ADV'),
          w('ch2_p43_s1_w10', 'handelt', 'handeln', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p43_s1_w11', ',', ',', 'PUNCT'),
          w('ch2_p43_s1_w12', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p43_s1_w13', 'Stellung', 'Stellung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p43_s1_w14', 'der', 'der', 'ART', { case: 'GEN', gender: 'M', number: 'PL' }),
          w('ch2_p43_s1_w15', 'Weiber', 'Weib', 'NOUN', { case: 'GEN', gender: 'M', number: 'PL' }),
          w('ch2_p43_s1_w16', 'als', 'als', 'PREP'),
          w('ch2_p43_s1_w17', 'bloßer', 'bloß', 'ADJ', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p43_s1_w18', 'Produktionsinstrumente', 'Produktionsinstrument', 'NOUN', { case: 'GEN', gender: 'N', number: 'PL', isCompound: true, compoundParts: ['Produktions', 'Instrument'] }),
          w('ch2_p43_s1_w19', 'aufzuheben', 'aufheben', 'VERB', { separablePrefix: 'auf' }),
          w('ch2_p43_s1_w20', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p44',
    sentences: [
      {
        id: 'ch2_p44_s1',
        translationFr: 'Rien n\'est d\'ailleurs plus grotesque que l\'effroi ultra-moralisateur de nos bourgeois devant la prétendue communauté officielle des femmes chez les communistes.',
        words: [
          w('ch2_p44_s1_w1', 'Übrigens', 'übrigens', 'ADV'),
          w('ch2_p44_s1_w2', 'ist', 'sein', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p44_s1_w3', 'nichts', 'nichts', 'PRON', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p44_s1_w4', 'lächerlicher', 'lächerlicher', 'ADV'),
          w('ch2_p44_s1_w5', 'als', 'als', 'PREP'),
          w('ch2_p44_s1_w6', 'das', 'der', 'ART', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p44_s1_w7', 'hochmoralische', 'hochmoralisch', 'ADJ', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p44_s1_w8', 'Entsetzen', 'entsetzen', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p44_s1_w9', 'unserer', 'unser', 'PRON', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p44_s1_w10', 'Bourgeois', 'Bourgeois', 'NOUN', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch2_p44_s1_w11', 'über', 'über', 'PREP', { case: 'ACC' }),
          w('ch2_p44_s1_w12', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p44_s1_w13', 'angebliche', 'angeblich', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p44_s1_w14', 'offizielle', 'offiziell', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p44_s1_w15', 'Weibergemeinschaft', 'Weibergemeinschaft', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Weiber', 'Gemeinschaft'] }),
          w('ch2_p44_s1_w16', 'der', 'der', 'ART', { case: 'GEN', gender: 'M', number: 'PL' }),
          w('ch2_p44_s1_w17', 'Kommunisten', 'Kommunist', 'NOUN', { case: 'GEN', gender: 'M', number: 'PL' }),
          w('ch2_p44_s1_w18', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p44_s2',
        translationFr: 'Les communistes n\'ont pas besoin d\'introduire la communauté des femmes : elle a presque toujours existé.',
        words: [
          w('ch2_p44_s2_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p44_s2_w2', 'Kommunisten', 'Kommunist', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p44_s2_w3', 'brauchen', 'brauchen', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p44_s2_w4', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p44_s2_w5', 'Weibergemeinschaft', 'Weibergemeinschaft', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Weiber', 'Gemeinschaft'] }),
          w('ch2_p44_s2_w6', 'nicht', 'nicht', 'PART'),
          w('ch2_p44_s2_w7', 'einzuführen', 'einführen', 'VERB', { separablePrefix: 'ein' }),
          w('ch2_p44_s2_w8', ',', ',', 'PUNCT'),
          w('ch2_p44_s2_w9', 'sie', 'sie', 'PRON', { case: 'NOM', gender: 'F', number: 'SG', person: 3 }),
          w('ch2_p44_s2_w10', 'hat', 'haben', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p44_s2_w11', 'fast', 'fast', 'ADV'),
          w('ch2_p44_s2_w12', 'immer', 'immer', 'ADV'),
          w('ch2_p44_s2_w13', 'existiert', 'existieren', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p44_s2_w14', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p45',
    sentences: [
      {
        id: 'ch2_p45_s1',
        translationFr: 'Nos bourgeois, non contents d\'avoir à leur disposition les femmes et les filles de leurs prolétaires, sans même parler de la prostitution officielle, trouvent un plaisir suprême à séduire mutuellement leurs épouses.',
        words: [
          w('ch2_p45_s1_w1', 'Unsre', 'Unsre', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p45_s1_w2', 'Bourgeois', 'Bourgeois', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p45_s1_w3', ',', ',', 'PUNCT'),
          w('ch2_p45_s1_w4', 'nicht', 'nicht', 'PART'),
          w('ch2_p45_s1_w5', 'zufrieden', 'zufrieden', 'ADV'),
          w('ch2_p45_s1_w6', 'damit', 'damit', 'ADV'),
          w('ch2_p45_s1_w7', ',', ',', 'PUNCT'),
          w('ch2_p45_s1_w8', 'daß', 'daß', 'CONJ'),
          w('ch2_p45_s1_w9', 'ihnen', 'sie', 'PRON', { case: 'DAT', gender: 'M', number: 'PL', person: 3 }),
          w('ch2_p45_s1_w10', 'die', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p45_s1_w11', 'Weiber', 'Weib', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p45_s1_w12', 'und', 'und', 'CONJ'),
          w('ch2_p45_s1_w13', 'Töchter', 'Tochter', 'NOUN', { case: 'NOM', gender: 'F', number: 'PL' }),
          w('ch2_p45_s1_w14', 'ihrer', 'ihr', 'PRON', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p45_s1_w15', 'Proletarier', 'Proletarier', 'NOUN', { case: 'GEN', gender: 'M', number: 'PL' }),
          w('ch2_p45_s1_w16', 'zur', 'zu', 'PREP', { case: 'DAT' }),
          w('ch2_p45_s1_w17', 'Verfügung', 'Verfügung', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p45_s1_w18', 'stehen', 'stehen', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p45_s1_w19', ',', ',', 'PUNCT'),
          w('ch2_p45_s1_w20', 'von', 'von', 'PREP', { case: 'DAT' }),
          w('ch2_p45_s1_w21', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p45_s1_w22', 'offiziellen', 'offiziell', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p45_s1_w23', 'Prostitution', 'Prostitution', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p45_s1_w24', 'gar', 'gar', 'ADV'),
          w('ch2_p45_s1_w25', 'nicht', 'nicht', 'PART'),
          w('ch2_p45_s1_w26', 'zu', 'zu', 'PART'),
          w('ch2_p45_s1_w27', 'sprechen', 'sprechen', 'VERB'),
          w('ch2_p45_s1_w28', ',', ',', 'PUNCT'),
          w('ch2_p45_s1_w29', 'finden', 'finden', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p45_s1_w30', 'ein', 'ein', 'ART', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p45_s1_w31', 'Hauptvergnügen', 'Hauptvergnügen', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG', isCompound: true, compoundParts: ['Haupt', 'Vergnügen'] }),
          w('ch2_p45_s1_w32', 'darin', 'darin', 'ADV'),
          w('ch2_p45_s1_w33', ',', ',', 'PUNCT'),
          w('ch2_p45_s1_w34', 'ihre', 'ihr', 'PRON', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch2_p45_s1_w35', 'Ehefrauen', 'Ehefrau', 'NOUN', { case: 'ACC', gender: 'F', number: 'PL', isCompound: true, compoundParts: ['Ehe', 'Frau'] }),
          w('ch2_p45_s1_w36', 'wechselseitig', 'wechselseitig', 'ADV'),
          w('ch2_p45_s1_w37', 'zu', 'zu', 'PART'),
          w('ch2_p45_s1_w38', 'verführen', 'verführen', 'VERB'),
          w('ch2_p45_s1_w39', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p46',
    sentences: [
      {
        id: 'ch2_p46_s1',
        translationFr: 'Le mariage bourgeois est en réalité la communauté des femmes mariées.',
        words: [
          w('ch2_p46_s1_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p46_s1_w2', 'bürgerliche', 'bürgerlich', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p46_s1_w3', 'Ehe', 'Ehe', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p46_s1_w4', 'ist', 'sein', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p46_s1_w5', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p46_s1_w6', 'Wirklichkeit', 'Wirklichkeit', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p46_s1_w7', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p46_s1_w8', 'Gemeinschaft', 'Gemeinschaft', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p46_s1_w9', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch2_p46_s1_w10', 'Ehefrauen', 'Ehefrau', 'NOUN', { case: 'GEN', gender: 'F', number: 'PL', isCompound: true, compoundParts: ['Ehe', 'Frau'] }),
          w('ch2_p46_s1_w11', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p46_s2',
        translationFr: 'Tout au plus pourrait-on reprocher aux communistes de vouloir substituer à une communauté des femmes hypocritement dissimulée une communauté officielle et sans fard.',
        words: [
          w('ch2_p46_s2_w1', 'Man', 'man', 'PRON', { case: 'NOM', number: 'SG' }),
          w('ch2_p46_s2_w2', 'könnte', 'können', 'VERB', { number: 'SG', person: 3, tense: 'PAST', mood: 'SUBJ' }),
          w('ch2_p46_s2_w3', 'höchstens', 'höchstens', 'ADV'),
          w('ch2_p46_s2_w4', 'den', 'der', 'ART', { case: 'DAT', gender: 'M', number: 'PL' }),
          w('ch2_p46_s2_w5', 'Kommunisten', 'Kommunist', 'NOUN', { case: 'DAT', gender: 'M', number: 'PL' }),
          w('ch2_p46_s2_w6', 'vorwerfen', 'vorwerfen', 'VERB'),
          w('ch2_p46_s2_w7', ',', ',', 'PUNCT'),
          w('ch2_p46_s2_w8', 'daß', 'daß', 'CONJ'),
          w('ch2_p46_s2_w9', 'sie', 'sie', 'PRON', { case: 'NOM', gender: 'F', number: 'SG', person: 3 }),
          w('ch2_p46_s2_w10', 'an', 'an', 'PREP', { case: 'DAT' }),
          w('ch2_p46_s2_w11', 'Stelle', 'Stelle', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p46_s2_w12', 'einer', 'ein', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p46_s2_w13', 'heuchlerisch', 'heuchlerisch', 'ADV'),
          w('ch2_p46_s2_w14', 'versteckten', 'versteckt', 'VERB', { number: 'PL', person: 3, tense: 'PAST', mood: 'IND' }),
          w('ch2_p46_s2_w15', 'eine', 'ein', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p46_s2_w16', 'offizielle', 'offiziell', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p46_s2_w17', ',', ',', 'PUNCT'),
          w('ch2_p46_s2_w18', 'offenherzige', 'offenherzig', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p46_s2_w19', 'Weibergemeinschaft', 'Weibergemeinschaft', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Weiber', 'Gemeinschaft'] }),
          w('ch2_p46_s2_w20', 'einführen', 'einführen', 'VERB'),
          w('ch2_p46_s2_w21', 'wollten', 'wollen', 'VERB', { number: 'PL', person: 3, tense: 'PAST', mood: 'IND' }),
          w('ch2_p46_s2_w22', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p46_s3',
        translationFr: 'Il va d\'ailleurs de soi qu\'avec l\'abolition des rapports de production actuels disparaîtra aussi la communauté des femmes qui en dérive, c\'est-à-dire la prostitution officielle et clandestine.',
        words: [
          w('ch2_p46_s3_w1', 'Es', 'es', 'PRON', { case: 'NOM', gender: 'N', number: 'SG', person: 3 }),
          w('ch2_p46_s3_w2', 'versteht', 'verstehen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p46_s3_w3', 'sich', 'sich', 'PRON', { case: 'ACC', number: 'SG', person: 3 }),
          w('ch2_p46_s3_w4', 'übrigens', 'übrigens', 'ADV'),
          w('ch2_p46_s3_w5', 'von', 'von', 'PREP', { case: 'DAT' }),
          w('ch2_p46_s3_w6', 'selbst', 'selbst', 'ADV'),
          w('ch2_p46_s3_w7', ',', ',', 'PUNCT'),
          w('ch2_p46_s3_w8', 'daß', 'daß', 'CONJ'),
          w('ch2_p46_s3_w9', 'mit', 'mit', 'PREP', { case: 'DAT' }),
          w('ch2_p46_s3_w10', 'Aufhebung', 'Aufhebung', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p46_s3_w11', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p46_s3_w12', 'jetzigen', 'jetzig', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p46_s3_w13', 'Produktionsverhältnisse', 'Produktionsverhältnis', 'NOUN', { case: 'GEN', gender: 'N', number: 'SG', isCompound: true, compoundParts: ['Produktions', 'Verhältnis'] }),
          w('ch2_p46_s3_w14', 'auch', 'auch', 'ADV'),
          w('ch2_p46_s3_w15', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p46_s3_w16', 'aus', 'aus', 'PREP', { case: 'DAT' }),
          w('ch2_p46_s3_w17', 'ihnen', 'sie', 'PRON', { case: 'DAT', number: 'PL', person: 3 }),
          w('ch2_p46_s3_w18', 'hervorgehende', 'hervorgehend', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p46_s3_w19', 'Weibergemeinschaft', 'Weibergemeinschaft', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Weiber', 'Gemeinschaft'] }),
          w('ch2_p46_s3_w20', ',', ',', 'PUNCT'),
          w('ch2_p46_s3_w21', 'd.h.', 'das heißt', 'ADV'),
          w('ch2_p46_s3_w22', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p46_s3_w23', 'offizielle', 'offiziell', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p46_s3_w24', 'und', 'und', 'CONJ'),
          w('ch2_p46_s3_w25', 'nichtoffizielle', 'nichtoffiziell', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p46_s3_w26', 'Prostitution', 'Prostitution', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p46_s3_w27', ',', ',', 'PUNCT'),
          w('ch2_p46_s3_w28', 'verschwindet', 'verschwinden', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p46_s3_w29', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p47',
    sentences: [
      {
        id: 'ch2_p47_s1',
        translationFr: 'On a reproché en outre aux communistes de vouloir abolir la patrie, la nationalité.',
        words: [
          w('ch2_p47_s1_w1', 'Den', 'der', 'ART', { case: 'DAT', gender: 'M', number: 'PL' }),
          w('ch2_p47_s1_w2', 'Kommunisten', 'Kommunist', 'NOUN', { case: 'DAT', gender: 'M', number: 'PL' }),
          w('ch2_p47_s1_w3', 'ist', 'sein', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p47_s1_w4', 'ferner', 'ferner', 'ADV'),
          w('ch2_p47_s1_w5', 'vorgeworfen', 'vorwerfen', 'VERB', { tense: 'PERF' }),
          w('ch2_p47_s1_w6', 'worden', 'werden', 'VERB', { tense: 'PERF' }),
          w('ch2_p47_s1_w7', ',', ',', 'PUNCT'),
          w('ch2_p47_s1_w8', 'sie', 'sie', 'PRON', { case: 'NOM', number: 'PL', person: 3 }),
          w('ch2_p47_s1_w9', 'wollten', 'wollen', 'VERB', { number: 'PL', person: 3, tense: 'PAST', mood: 'IND' }),
          w('ch2_p47_s1_w10', 'das', 'der', 'ART', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p47_s1_w11', 'Vaterland', 'Vaterland', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p47_s1_w12', ',', ',', 'PUNCT'),
          w('ch2_p47_s1_w13', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p47_s1_w14', 'Nationalität', 'Nationalität', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p47_s1_w15', 'abschaffen', 'abschaffen', 'VERB'),
          w('ch2_p47_s1_w16', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p47_s2',
        translationFr: 'Les ouvriers n\'ont pas de patrie.',
        words: [
          w('ch2_p47_s2_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p47_s2_w2', 'Arbeiter', 'Arbeiter', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p47_s2_w3', 'haben', 'haben', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p47_s2_w4', 'kein', 'kein', 'PRON', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p47_s2_w5', 'Vaterland', 'Vaterland', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p47_s2_w6', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p47_s3',
        translationFr: 'On ne peut leur ravir ce qu\'ils n\'ont pas.',
        words: [
          w('ch2_p47_s3_w1', 'Man', 'man', 'PRON', { case: 'NOM', number: 'SG' }),
          w('ch2_p47_s3_w2', 'kann', 'können', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p47_s3_w3', 'ihnen', 'sie', 'PRON', { case: 'DAT', number: 'PL', person: 3 }),
          w('ch2_p47_s3_w4', 'nicht', 'nicht', 'PART'),
          w('ch2_p47_s3_w5', 'nehmen', 'nehmen', 'VERB'),
          w('ch2_p47_s3_w6', ',', ',', 'PUNCT'),
          w('ch2_p47_s3_w7', 'was', 'was', 'PRON', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p47_s3_w8', 'sie', 'sie', 'PRON', { case: 'NOM', gender: 'F', number: 'SG', person: 3 }),
          w('ch2_p47_s3_w9', 'nicht', 'nicht', 'PART'),
          w('ch2_p47_s3_w10', 'haben', 'haben', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p47_s3_w11', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p47_s4',
        translationFr: 'Comme le prolétariat doit d\'abord conquérir le pouvoir politique, s\'ériger en classe nationale, se constituer lui-même en nation, il est encore par là national lui-même, quoique nullement au sens où l\'entend la bourgeoisie.',
        words: [
          w('ch2_p47_s4_w1', 'Indem', 'indem', 'CONJ'),
          w('ch2_p47_s4_w2', 'das', 'der', 'ART', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p47_s4_w3', 'Proletariat', 'Proletariat', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p47_s4_w4', 'zunächst', 'zunächst', 'ADV'),
          w('ch2_p47_s4_w5', 'sich', 'sich', 'PRON', { case: 'ACC', number: 'SG', person: 3 }),
          w('ch2_p47_s4_w6', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p47_s4_w7', 'politische', 'politisch', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p47_s4_w8', 'Herrschaft', 'Herrschaft', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p47_s4_w9', 'erobern', 'erobern', 'VERB'),
          w('ch2_p47_s4_w10', ',', ',', 'PUNCT'),
          w('ch2_p47_s4_w11', 'sich', 'sich', 'PRON', { case: 'ACC', number: 'PL', person: 3 }),
          w('ch2_p47_s4_w12', 'zur', 'zu', 'PREP', { case: 'DAT' }),
          w('ch2_p47_s4_w13', 'nationalen', 'national', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p47_s4_w14', 'Klasse', 'Klasse', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p47_s4_w15', 'erheben', 'erheben', 'VERB'),
          w('ch2_p47_s4_w16', ',', ',', 'PUNCT'),
          w('ch2_p47_s4_w17', 'sich', 'sich', 'PRON', { case: 'ACC', number: 'SG', person: 3 }),
          w('ch2_p47_s4_w18', 'selbst', 'selbst', 'ADV'),
          w('ch2_p47_s4_w19', 'als', 'als', 'PREP'),
          w('ch2_p47_s4_w20', 'Nation', 'Nation', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p47_s4_w21', 'konstituieren', 'konstituieren', 'VERB'),
          w('ch2_p47_s4_w22', 'muß', 'müssen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p47_s4_w23', ',', ',', 'PUNCT'),
          w('ch2_p47_s4_w24', 'ist', 'sein', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p47_s4_w25', 'es', 'es', 'PRON', { case: 'NOM', gender: 'N', number: 'SG', person: 3 }),
          w('ch2_p47_s4_w26', 'selbst', 'selbst', 'ADV'),
          w('ch2_p47_s4_w27', 'noch', 'noch', 'ADV'),
          w('ch2_p47_s4_w28', 'national', 'national', 'ADV'),
          w('ch2_p47_s4_w29', ',', ',', 'PUNCT'),
          w('ch2_p47_s4_w30', 'wenn', 'wenn', 'CONJ'),
          w('ch2_p47_s4_w31', 'auch', 'auch', 'ADV'),
          w('ch2_p47_s4_w32', 'keineswegs', 'keineswegs', 'ADV'),
          w('ch2_p47_s4_w33', 'im', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p47_s4_w34', 'Sinne', 'Sinn', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p47_s4_w35', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p47_s4_w36', 'Bourgeoisie', 'Bourgeoisie', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p47_s4_w37', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p48',
    sentences: [
      {
        id: 'ch2_p48_s1',
        translationFr: 'Les démarcations nationales et les antagonismes entre peuples s\'effacent déjà de plus en plus avec le développement de la bourgeoisie, la liberté du commerce, le marché mondial, l\'uniformité de la production industrielle et les conditions d\'existence qui y correspondent.',
        words: [
          w('ch2_p48_s1_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p48_s1_w2', 'nationalen', 'national', 'ADJ', { case: 'NOM', number: 'PL' }),
          w('ch2_p48_s1_w3', 'Absonderungen', 'absonderungen', 'NOUN', { case: 'NOM', number: 'PL' }),
          w('ch2_p48_s1_w4', 'und', 'und', 'CONJ'),
          w('ch2_p48_s1_w5', 'Gegensätze', 'Gegensatz', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p48_s1_w6', 'der', 'der', 'ART', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p48_s1_w7', 'Völker', 'Volk', 'NOUN', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p48_s1_w8', 'verschwinden', 'verschwinden', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p48_s1_w9', 'mehr', 'mehr', 'ADV'),
          w('ch2_p48_s1_w10', 'und', 'und', 'CONJ'),
          w('ch2_p48_s1_w11', 'mehr', 'mehr', 'ADV'),
          w('ch2_p48_s1_w12', 'schon', 'schon', 'ADV'),
          w('ch2_p48_s1_w13', 'mit', 'mit', 'PREP', { case: 'DAT' }),
          w('ch2_p48_s1_w14', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p48_s1_w15', 'Entwicklung', 'Entwicklung', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p48_s1_w16', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p48_s1_w17', 'Bourgeoisie', 'Bourgeoisie', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p48_s1_w18', ',', ',', 'PUNCT'),
          w('ch2_p48_s1_w19', 'mit', 'mit', 'PREP', { case: 'DAT' }),
          w('ch2_p48_s1_w20', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p48_s1_w21', 'Handelsfreiheit', 'Handelsfreiheit', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Handels', 'Freiheit'] }),
          w('ch2_p48_s1_w22', ',', ',', 'PUNCT'),
          w('ch2_p48_s1_w23', 'dem', 'der', 'ART', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p48_s1_w24', 'Weltmarkt', 'Weltmarkt', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Welt', 'Markt'] }),
          w('ch2_p48_s1_w25', ',', ',', 'PUNCT'),
          w('ch2_p48_s1_w26', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p48_s1_w27', 'Gleichförmigkeit', 'Gleichförmigkeit', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p48_s1_w28', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p48_s1_w29', 'industriellen', 'industriell', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p48_s1_w30', 'Produktion', 'Produktion', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p48_s1_w31', 'und', 'und', 'CONJ'),
          w('ch2_p48_s1_w32', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch2_p48_s1_w33', 'ihr', 'ihr', 'PRON', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p48_s1_w34', 'entsprechenden', 'entsprechend', 'ADJ', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p48_s1_w35', 'Lebensverhältnisse', 'Lebensverhältnis', 'NOUN', { case: 'GEN', gender: 'N', number: 'PL', isCompound: true, compoundParts: ['Lebens', 'Verhältnis'] }),
          w('ch2_p48_s1_w36', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p49',
    sentences: [
      {
        id: 'ch2_p49_s1',
        translationFr: 'La domination du prolétariat les fera disparaître plus encore.',
        words: [
          w('ch2_p49_s1_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p49_s1_w2', 'Herrschaft', 'Herrschaft', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p49_s1_w3', 'des', 'der', 'ART', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p49_s1_w4', 'Proletariats', 'Proletariat', 'NOUN', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p49_s1_w5', 'wird', 'werden', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p49_s1_w6', 'sie', 'sie', 'PRON', { case: 'NOM', gender: 'F', number: 'SG', person: 3 }),
          w('ch2_p49_s1_w7', 'noch', 'noch', 'ADV'),
          w('ch2_p49_s1_w8', 'mehr', 'mehr', 'PRON'),
          w('ch2_p49_s1_w9', 'verschwinden', 'verschwinden', 'VERB'),
          w('ch2_p49_s1_w10', 'machen', 'machen', 'VERB'),
          w('ch2_p49_s1_w11', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p49_s2',
        translationFr: 'L\'action commune, au moins dans les pays civilisés, est l\'une des premières conditions de son émancipation.',
        words: [
          w('ch2_p49_s2_w1', 'Vereinigte', 'vereinigt', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p49_s2_w2', 'Aktion', 'Aktion', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p49_s2_w3', ',', ',', 'PUNCT'),
          w('ch2_p49_s2_w4', 'wenigstens', 'wenigstens', 'ADV'),
          w('ch2_p49_s2_w5', 'der', 'der', 'ART', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p49_s2_w6', 'zivilisierten', 'zivilisiert', 'ADJ', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p49_s2_w7', 'Länder', 'Land', 'NOUN', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p49_s2_w8', ',', ',', 'PUNCT'),
          w('ch2_p49_s2_w9', 'ist', 'sein', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p49_s2_w10', 'eine', 'ein', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p49_s2_w11', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch2_p49_s2_w12', 'ersten', 'erster', 'ADJ', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch2_p49_s2_w13', 'Bedingungen', 'Bedingung', 'NOUN', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch2_p49_s2_w14', 'seiner', 'sein', 'PRON', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p49_s2_w15', 'Befreiung', 'Befreiung', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p49_s2_w16', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p50',
    sentences: [
      {
        id: 'ch2_p50_s1',
        translationFr: 'À mesure qu\'est abolie l\'exploitation d\'un individu par un autre, l\'exploitation d\'une nation par une autre est abolie.',
        words: [
          w('ch2_p50_s1_w1', 'In', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p50_s1_w2', 'dem', 'der', 'ART', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p50_s1_w3', 'Maße', 'Maß', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p50_s1_w4', ',', ',', 'PUNCT'),
          w('ch2_p50_s1_w5', 'wie', 'wie', 'CONJ'),
          w('ch2_p50_s1_w6', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p50_s1_w7', 'Exploitation', 'Exploitation', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p50_s1_w8', 'des', 'der', 'ART', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p50_s1_w9', 'einen', 'ein', 'ART', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p50_s1_w10', 'Individuums', 'Individuum', 'NOUN', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p50_s1_w11', 'durch', 'durch', 'PREP', { case: 'ACC' }),
          w('ch2_p50_s1_w12', 'das', 'der', 'ART', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p50_s1_w13', 'andere', 'anderer', 'PRON', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p50_s1_w14', 'aufgehoben', 'aufheben', 'VERB', { tense: 'PERF' }),
          w('ch2_p50_s1_w15', 'wird', 'werden', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p50_s1_w16', ',', ',', 'PUNCT'),
          w('ch2_p50_s1_w17', 'wird', 'werden', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p50_s1_w18', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p50_s1_w19', 'Exploitation', 'Exploitation', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p50_s1_w20', 'einer', 'ein', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p50_s1_w21', 'Nation', 'Nation', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p50_s1_w22', 'durch', 'durch', 'PREP', { case: 'ACC' }),
          w('ch2_p50_s1_w23', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p50_s1_w24', 'andere', 'anderer', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p50_s1_w25', 'aufgehoben', 'aufheben', 'VERB', { tense: 'PERF' }),
          w('ch2_p50_s1_w26', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p50_s2',
        translationFr: 'Avec l\'antagonisme des classes à l\'intérieur de la nation tombe l\'hostilité entre les nations.',
        words: [
          w('ch2_p50_s2_w1', 'Mit', 'mit', 'PREP', { case: 'DAT' }),
          w('ch2_p50_s2_w2', 'dem', 'der', 'ART', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p50_s2_w3', 'Gegensatz', 'Gegensatz', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p50_s2_w4', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch2_p50_s2_w5', 'Klassen', 'Klasse', 'NOUN', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch2_p50_s2_w6', 'im', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p50_s2_w7', 'Innern', 'innere', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p50_s2_w8', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p50_s2_w9', 'Nation', 'Nation', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p50_s2_w10', 'fällt', 'gegeneinanderfallen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND', separablePrefix: 'gegeneinander' }),
          w('ch2_p50_s2_w11', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p50_s2_w12', 'feindliche', 'feindlich', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p50_s2_w13', 'Stellung', 'Stellung', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p50_s2_w14', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch2_p50_s2_w15', 'Nationen', 'Nation', 'NOUN', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch2_p50_s2_w16', 'gegeneinander', 'gegeneinanderfallen', 'PART'),
          w('ch2_p50_s2_w17', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p51',
    sentences: [
      {
        id: 'ch2_p51_s1',
        translationFr: 'Les accusations portées contre le communisme sous des angles religieux, philosophiques et généralement idéologiques ne méritent pas un examen plus approfondi.',
        words: [
          w('ch2_p51_s1_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'PL' }),
          w('ch2_p51_s1_w2', 'Anklagen', 'Anklage', 'NOUN', { case: 'NOM', gender: 'F', number: 'PL' }),
          w('ch2_p51_s1_w3', 'gegen', 'gegen', 'PREP', { case: 'ACC' }),
          w('ch2_p51_s1_w4', 'den', 'der', 'ART', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p51_s1_w5', 'Kommunismus', 'Kommunismus', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p51_s1_w6', ',', ',', 'PUNCT'),
          w('ch2_p51_s1_w7', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p51_s1_w8', 'von', 'von', 'PREP', { case: 'DAT' }),
          w('ch2_p51_s1_w9', 'religiösen', 'religiös', 'ADJ', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p51_s1_w10', ',', ',', 'PUNCT'),
          w('ch2_p51_s1_w11', 'philosophischen', 'philosophisch', 'ADJ', { case: 'DAT', gender: 'M', number: 'PL' }),
          w('ch2_p51_s1_w12', 'und', 'und', 'CONJ'),
          w('ch2_p51_s1_w13', 'ideologischen', 'ideologisch', 'ADJ', { case: 'DAT', gender: 'M', number: 'PL' }),
          w('ch2_p51_s1_w14', 'Gesichtspunkten', 'Gesichtspunkt', 'NOUN', { case: 'DAT', gender: 'M', number: 'PL' }),
          w('ch2_p51_s1_w15', 'überhaupt', 'überhaupt', 'ADV'),
          w('ch2_p51_s1_w16', 'erhoben', 'erheben', 'VERB', { tense: 'PERF' }),
          w('ch2_p51_s1_w17', 'werden', 'werden', 'VERB'),
          w('ch2_p51_s1_w18', ',', ',', 'PUNCT'),
          w('ch2_p51_s1_w19', 'verdienen', 'verdienen', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p51_s1_w20', 'keine', 'kein', 'PRON', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p51_s1_w21', 'ausführlichere', 'ausführlich', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p51_s1_w22', 'Erörterung', 'Erörterung', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p51_s1_w23', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p52',
    sentences: [
      {
        id: 'ch2_p52_s1',
        translationFr: 'Faut-il une perspicacité bien profonde pour comprendre qu\'avec les conditions de vie des hommes, avec leurs relations sociales, avec leur existence sociale, changent aussi leurs représentations, leurs conceptions et leurs notions, en un mot leur conscience ?',
        words: [
          w('ch2_p52_s1_w1', 'Bedarf', 'Bedarf', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p52_s1_w2', 'es', 'es', 'PRON', { case: 'NOM', gender: 'N', number: 'SG', person: 3 }),
          w('ch2_p52_s1_w3', 'tiefer', 'tiefer', 'ADV'),
          w('ch2_p52_s1_w4', 'Einsicht', 'Einsicht', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p52_s1_w5', ',', ',', 'PUNCT'),
          w('ch2_p52_s1_w6', 'um', 'um', 'CONJ'),
          w('ch2_p52_s1_w7', 'zu', 'zu', 'PART'),
          w('ch2_p52_s1_w8', 'begreifen', 'begreifen', 'VERB'),
          w('ch2_p52_s1_w9', ',', ',', 'PUNCT'),
          w('ch2_p52_s1_w10', 'daß', 'daß', 'CONJ'),
          w('ch2_p52_s1_w11', 'mit', 'mit', 'PREP', { case: 'DAT' }),
          w('ch2_p52_s1_w12', 'den', 'der', 'ART', { case: 'DAT', gender: 'M', number: 'PL' }),
          w('ch2_p52_s1_w13', 'Lebensverhältnissen', 'Lebensverhältnis', 'NOUN', { case: 'DAT', gender: 'N', number: 'PL', isCompound: true, compoundParts: ['Lebens', 'Verhältnis'] }),
          w('ch2_p52_s1_w14', 'der', 'der', 'ART', { case: 'GEN', gender: 'M', number: 'PL' }),
          w('ch2_p52_s1_w15', 'Menschen', 'Mensch', 'NOUN', { case: 'GEN', gender: 'M', number: 'PL' }),
          w('ch2_p52_s1_w16', ',', ',', 'PUNCT'),
          w('ch2_p52_s1_w17', 'mit', 'mit', 'PREP', { case: 'DAT' }),
          w('ch2_p52_s1_w18', 'ihren', 'ihr', 'PRON', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p52_s1_w19', 'gesellschaftlichen', 'gesellschaftlich', 'ADJ', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p52_s1_w20', 'Beziehungen', 'Beziehung', 'NOUN', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p52_s1_w21', ',', ',', 'PUNCT'),
          w('ch2_p52_s1_w22', 'mit', 'mit', 'PREP', { case: 'DAT' }),
          w('ch2_p52_s1_w23', 'ihrem', 'ihr', 'PRON', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p52_s1_w24', 'gesellschaftlichen', 'gesellschaftlich', 'ADJ', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p52_s1_w25', 'Dasein', 'Dasein', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p52_s1_w26', ',', ',', 'PUNCT'),
          w('ch2_p52_s1_w27', 'auch', 'auch', 'ADV'),
          w('ch2_p52_s1_w28', 'ihre', 'ihr', 'PRON', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch2_p52_s1_w29', 'Vorstellungen', 'Vorstellung', 'NOUN', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch2_p52_s1_w30', ',', ',', 'PUNCT'),
          w('ch2_p52_s1_w31', 'Anschauungen', 'Anschauung', 'NOUN', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch2_p52_s1_w32', 'und', 'und', 'CONJ'),
          w('ch2_p52_s1_w33', 'Begriffe', 'Begriff', 'NOUN', { case: 'ACC', gender: 'M', number: 'PL' }),
          w('ch2_p52_s1_w34', ',', ',', 'PUNCT'),
          w('ch2_p52_s1_w35', 'mit', 'mit', 'PREP', { case: 'DAT' }),
          w('ch2_p52_s1_w36', 'einem', 'ein', 'ART', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p52_s1_w37', 'Worte', 'Worte', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p52_s1_w38', 'auch', 'auch', 'ADV'),
          w('ch2_p52_s1_w39', 'ihr', 'ihr', 'PRON', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p52_s1_w40', 'Bewußtsein', 'Bewußtsein', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p52_s1_w41', 'sich', 'sich', 'PRON', { case: 'ACC', number: 'SG', person: 3 }),
          w('ch2_p52_s1_w42', 'ändert', 'ändern', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p52_s1_w43', '?', '?', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p53',
    sentences: [
      {
        id: 'ch2_p53_s1',
        translationFr: 'Que prouve l\'histoire des idées, sinon que la production intellectuelle se métamorphose avec la production matérielle ?',
        words: [
          w('ch2_p53_s1_w1', 'Was', 'was', 'PRON', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p53_s1_w2', 'beweist', 'beweisen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p53_s1_w3', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p53_s1_w4', 'Geschichte', 'Geschichte', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p53_s1_w5', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch2_p53_s1_w6', 'Ideen', 'Idee', 'NOUN', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch2_p53_s1_w7', 'anders', 'anders', 'ADV'),
          w('ch2_p53_s1_w8', ',', ',', 'PUNCT'),
          w('ch2_p53_s1_w9', 'als', 'als', 'CONJ'),
          w('ch2_p53_s1_w10', 'daß', 'daß', 'CONJ'),
          w('ch2_p53_s1_w11', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p53_s1_w12', 'geistige', 'geistig', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p53_s1_w13', 'Produktion', 'Produktion', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p53_s1_w14', 'sich', 'sich', 'PRON', { case: 'ACC', number: 'SG', person: 3 }),
          w('ch2_p53_s1_w15', 'mit', 'mit', 'PREP', { case: 'DAT' }),
          w('ch2_p53_s1_w16', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p53_s1_w17', 'materiellen', 'Materiellen', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p53_s1_w18', 'umgestaltet', 'umgestalten', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p53_s1_w19', '?', '?', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p53_s2',
        translationFr: 'Les idées dominantes d\'une époque n\'ont jamais été que les idées de la classe dominante.',
        words: [
          w('ch2_p53_s2_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'PL' }),
          w('ch2_p53_s2_w2', 'herrschenden', 'herrschend', 'ADJ', { case: 'NOM', gender: 'F', number: 'PL' }),
          w('ch2_p53_s2_w3', 'Ideen', 'Idee', 'NOUN', { case: 'NOM', gender: 'F', number: 'PL' }),
          w('ch2_p53_s2_w4', 'einer', 'ein', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p53_s2_w5', 'Zeit', 'Zeit', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p53_s2_w6', 'waren', 'sein', 'VERB', { number: 'PL', person: 3, tense: 'PAST', mood: 'IND' }),
          w('ch2_p53_s2_w7', 'stets', 'stets', 'ADV'),
          w('ch2_p53_s2_w8', 'nur', 'nur', 'ADV'),
          w('ch2_p53_s2_w9', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'PL' }),
          w('ch2_p53_s2_w10', 'Ideen', 'Idee', 'NOUN', { case: 'NOM', gender: 'F', number: 'PL' }),
          w('ch2_p53_s2_w11', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p53_s2_w12', 'herrschenden', 'herrschend', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p53_s2_w13', 'Klasse', 'Klasse', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p53_s2_w14', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p54',
    sentences: [
      {
        id: 'ch2_p54_s1',
        translationFr: 'Parle-t-on d\'idées qui révolutionnent une société tout entière, on ne fait qu\'énoncer le fait qu\'au sein de la vieille société se sont formés les éléments d\'une société nouvelle, et que la dissolution des vieilles idées va de pair avec la dissolution des anciennes conditions d\'existence.',
        words: [
          w('ch2_p54_s1_w1', 'Man', 'man', 'PRON', { case: 'NOM', number: 'SG' }),
          w('ch2_p54_s1_w2', 'spricht', 'sprechen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p54_s1_w3', 'von', 'von', 'PREP', { case: 'DAT' }),
          w('ch2_p54_s1_w4', 'Ideen', 'Idee', 'NOUN', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p54_s1_w5', ',', ',', 'PUNCT'),
          w('ch2_p54_s1_w6', 'welche', 'welcher', 'PRON', { case: 'NOM', gender: 'N', number: 'PL' }),
          w('ch2_p54_s1_w7', 'eine', 'ein', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p54_s1_w8', 'ganze', 'ganz', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p54_s1_w9', 'Gesellschaft', 'Gesellschaft', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p54_s1_w10', 'revolutionieren', 'revolutionieren', 'VERB'),
          w('ch2_p54_s1_w11', ';', ';', 'PUNCT'),
          w('ch2_p54_s1_w12', 'man', 'man', 'PRON', { case: 'NOM', number: 'SG' }),
          w('ch2_p54_s1_w13', 'spricht', 'aussprechen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND', separablePrefix: 'aus' }),
          w('ch2_p54_s1_w14', 'damit', 'damit', 'ADV'),
          w('ch2_p54_s1_w15', 'nur', 'nur', 'ADV'),
          w('ch2_p54_s1_w16', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p54_s1_w17', 'Tatsache', 'Tatsache', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p54_s1_w18', 'aus', 'aussprechen', 'PART'),
          w('ch2_p54_s1_w19', ',', ',', 'PUNCT'),
          w('ch2_p54_s1_w20', 'daß', 'daß', 'CONJ'),
          w('ch2_p54_s1_w21', 'sich', 'sich', 'PRON', { case: 'ACC', number: 'SG', person: 3 }),
          w('ch2_p54_s1_w22', 'innerhalb', 'innerhalb', 'PREP'),
          w('ch2_p54_s1_w23', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p54_s1_w24', 'alten', 'alt', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p54_s1_w25', 'Gesellschaft', 'Gesellschaft', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p54_s1_w26', 'die', 'der', 'ART', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch2_p54_s1_w27', 'Elemente', 'Element', 'NOUN', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch2_p54_s1_w28', 'einer', 'ein', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p54_s1_w29', 'neuen', 'neu', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p54_s1_w30', 'gebildet', 'bilden', 'VERB', { tense: 'PERF' }),
          w('ch2_p54_s1_w31', 'haben', 'haben', 'VERB'),
          w('ch2_p54_s1_w32', ',', ',', 'PUNCT'),
          w('ch2_p54_s1_w33', 'daß', 'daß', 'CONJ'),
          w('ch2_p54_s1_w34', 'mit', 'mit', 'PREP', { case: 'DAT' }),
          w('ch2_p54_s1_w35', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p54_s1_w36', 'Auflösung', 'Auflösung', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p54_s1_w37', 'der', 'der', 'ART', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p54_s1_w38', 'alten', 'alt', 'ADJ', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p54_s1_w39', 'Lebensverhältnisse', 'Lebensverhältnis', 'NOUN', { case: 'GEN', gender: 'N', number: 'PL', isCompound: true, compoundParts: ['Lebens', 'Verhältnis'] }),
          w('ch2_p54_s1_w40', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p54_s1_w41', 'Auflösung', 'Auflösung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p54_s1_w42', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch2_p54_s1_w43', 'alten', 'alt', 'ADJ', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch2_p54_s1_w44', 'Ideen', 'Idee', 'NOUN', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch2_p54_s1_w45', 'gleichen', 'gleich', 'ADJ', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p54_s1_w46', 'Schritt', 'Schritt', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p54_s1_w47', 'hält', 'halten', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p54_s1_w48', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p55',
    sentences: [
      {
        id: 'ch2_p55_s1',
        translationFr: 'Lorsque le monde antique était à son déclin, les vieilles religions furent vaincues par la religion chrétienne.',
        words: [
          w('ch2_p55_s1_w1', 'Als', 'als', 'CONJ'),
          w('ch2_p55_s1_w2', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p55_s1_w3', 'alte', 'alt', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p55_s1_w4', 'Welt', 'Welt', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p55_s1_w5', 'im', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p55_s1_w6', 'Untergehen', 'untergehe', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p55_s1_w7', 'begriffen', 'begreifen', 'VERB', { tense: 'PERF' }),
          w('ch2_p55_s1_w8', 'war', 'sein', 'VERB', { number: 'SG', person: 3, tense: 'PAST', mood: 'IND' }),
          w('ch2_p55_s1_w9', ',', ',', 'PUNCT'),
          w('ch2_p55_s1_w10', 'wurden', 'werden', 'VERB', { number: 'PL', person: 3, tense: 'PAST', mood: 'IND' }),
          w('ch2_p55_s1_w11', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'PL' }),
          w('ch2_p55_s1_w12', 'alten', 'alt', 'ADJ', { case: 'NOM', gender: 'F', number: 'PL' }),
          w('ch2_p55_s1_w13', 'Religionen', 'Religion', 'NOUN', { case: 'NOM', gender: 'F', number: 'PL' }),
          w('ch2_p55_s1_w14', 'von', 'von', 'PREP', { case: 'DAT' }),
          w('ch2_p55_s1_w15', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p55_s1_w16', 'christlichen', 'christlich', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p55_s1_w17', 'Religion', 'Religion', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p55_s1_w18', 'besiegt', 'besiegen', 'VERB', { tense: 'PERF' }),
          w('ch2_p55_s1_w19', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p55_s2',
        translationFr: 'Lorsque les idées chrétiennes succombèrent au XVIIIe siècle devant les idées des Lumières, la société féodale livrait son combat à mort contre la bourgeoisie, alors révolutionnaire.',
        words: [
          w('ch2_p55_s2_w1', 'Als', 'als', 'CONJ'),
          w('ch2_p55_s2_w2', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch2_p55_s2_w3', 'christlichen', 'christlich', 'ADJ', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch2_p55_s2_w4', 'Ideen', 'Idee', 'NOUN', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch2_p55_s2_w5', 'im', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p55_s2_w6', '18.', 'achtzehnte', 'ADJ', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p55_s2_w7', 'Jahrhundert', 'Jahrhundert', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG', isCompound: true, compoundParts: ['Jahr', 'Hundert'] }),
          w('ch2_p55_s2_w8', 'den', 'der', 'ART', { case: 'DAT', number: 'PL' }),
          w('ch2_p55_s2_w9', 'Aufklärungsideen', 'Aufklärungsidee', 'NOUN', { case: 'DAT', gender: 'F', number: 'PL', isCompound: true, compoundParts: ['Aufklärungs', 'Idee'] }),
          w('ch2_p55_s2_w10', 'unterlagen', 'unterliegen', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p55_s2_w11', ',', ',', 'PUNCT'),
          w('ch2_p55_s2_w12', 'rang', 'Rang', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p55_s2_w13', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p55_s2_w14', 'feudale', 'feudal', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p55_s2_w15', 'Gesellschaft', 'Gesellschaft', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p55_s2_w16', 'ihren', 'ihr', 'PRON', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p55_s2_w17', 'Todeskampf', 'Todeskampf', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Todes', 'Kampf'] }),
          w('ch2_p55_s2_w18', 'mit', 'mit', 'PREP', { case: 'DAT' }),
          w('ch2_p55_s2_w19', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p55_s2_w20', 'damals', 'damals', 'ADV'),
          w('ch2_p55_s2_w21', 'revolutionären', 'revolutionär', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p55_s2_w22', 'Bourgeoisie', 'Bourgeoisie', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p55_s2_w23', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p55_s3',
        translationFr: 'Les idées de liberté de conscience et de liberté religieuse ne firent que proclamer le règne de la libre concurrence dans le domaine du savoir.',
        words: [
          w('ch2_p55_s3_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'PL' }),
          w('ch2_p55_s3_w2', 'Ideen', 'Idee', 'NOUN', { case: 'NOM', gender: 'F', number: 'PL' }),
          w('ch2_p55_s3_w3', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p55_s3_w4', 'Gewissens-', 'Gewissen', 'ADV'),
          w('ch2_p55_s3_w5', 'und', 'und', 'CONJ'),
          w('ch2_p55_s3_w6', 'Religionsfreiheit', 'Religionsfreiheit', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Religions', 'Freiheit'] }),
          w('ch2_p55_s3_w7', 'sprachen', 'aussprechen', 'VERB', { number: 'PL', person: 3, tense: 'PAST', mood: 'IND', separablePrefix: 'aus' }),
          w('ch2_p55_s3_w8', 'nur', 'nur', 'ADV'),
          w('ch2_p55_s3_w9', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p55_s3_w10', 'Herrschaft', 'Herrschaft', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p55_s3_w11', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p55_s3_w12', 'freien', 'frei', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p55_s3_w13', 'Konkurrenz', 'Konkurrenz', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p55_s3_w14', 'auf', 'auf', 'PREP', { case: 'ACC' }),
          w('ch2_p55_s3_w15', 'dem', 'der', 'ART', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p55_s3_w16', 'Gebiete', 'Gebiet', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p55_s3_w17', 'des', 'der', 'ART', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p55_s3_w18', 'Wissens', 'wissen', 'NOUN', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p55_s3_w19', 'aus', 'aussprechen', 'PART'),
          w('ch2_p55_s3_w20', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p56',
    sentences: [
      {
        id: 'ch2_p56_s1',
        translationFr: '« Sans doute », dira-t-on, « les idées religieuses, morales, philosophiques, politiques, juridiques, etc., se sont modifiées au cours du développement historique.',
        words: [
          w('ch2_p56_s1_w1', '„', '„', 'PUNCT'),
          w('ch2_p56_s1_w2', 'Aber', 'aber', 'CONJ'),
          w('ch2_p56_s1_w3', '“', '“', 'PUNCT'),
          w('ch2_p56_s1_w4', ',', ',', 'PUNCT'),
          w('ch2_p56_s1_w5', 'wird', 'werden', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p56_s1_w6', 'man', 'man', 'PRON', { case: 'NOM', number: 'SG' }),
          w('ch2_p56_s1_w7', 'sagen', 'sagen', 'VERB'),
          w('ch2_p56_s1_w8', ',', ',', 'PUNCT'),
          w('ch2_p56_s1_w9', '„', '„', 'PUNCT'),
          w('ch2_p56_s1_w10', 'religiöse', 'religiös', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p56_s1_w11', ',', ',', 'PUNCT'),
          w('ch2_p56_s1_w12', 'moralische', 'moralisch', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p56_s1_w13', ',', ',', 'PUNCT'),
          w('ch2_p56_s1_w14', 'philosophische', 'philosophisch', 'ADJ', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch2_p56_s1_w15', ',', ',', 'PUNCT'),
          w('ch2_p56_s1_w16', 'politische', 'politisch', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p56_s1_w17', ',', ',', 'PUNCT'),
          w('ch2_p56_s1_w18', 'rechtliche', 'rechtlich', 'ADJ', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch2_p56_s1_w19', 'Ideen', 'Idee', 'NOUN', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch2_p56_s1_w20', 'usw.', 'und so weiter', 'ADV'),
          w('ch2_p56_s1_w21', 'modifizieren', 'modifizieren', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p56_s1_w22', 'sich', 'sich', 'PRON', { case: 'ACC', number: 'PL', person: 3 }),
          w('ch2_p56_s1_w23', 'allerdings', 'allerdings', 'ADV'),
          w('ch2_p56_s1_w24', 'im', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p56_s1_w25', 'Lauf', 'Lauf', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p56_s1_w26', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p56_s1_w27', 'geschichtlichen', 'geschichtlich', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p56_s1_w28', 'Entwicklung', 'Entwicklung', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p56_s1_w29', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p56_s2',
        translationFr: 'Mais la religion, la morale, la philosophie, la politique, le droit se maintenaient toujours à travers ces changements.',
        words: [
          w('ch2_p56_s2_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p56_s2_w2', 'Religion', 'Religion', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p56_s2_w3', ',', ',', 'PUNCT'),
          w('ch2_p56_s2_w4', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p56_s2_w5', 'Moral', 'Moral', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p56_s2_w6', ',', ',', 'PUNCT'),
          w('ch2_p56_s2_w7', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p56_s2_w8', 'Philosophie', 'Philosophie', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p56_s2_w9', ',', ',', 'PUNCT'),
          w('ch2_p56_s2_w10', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p56_s2_w11', 'Politik', 'Politik', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p56_s2_w12', ',', ',', 'PUNCT'),
          w('ch2_p56_s2_w13', 'das', 'der', 'ART', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p56_s2_w14', 'Recht', 'Recht', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p56_s2_w15', 'erhielten', 'erhalten', 'VERB', { number: 'PL', person: 3, tense: 'PAST', mood: 'IND' }),
          w('ch2_p56_s2_w16', 'sich', 'sich', 'PRON', { case: 'ACC', number: 'PL', person: 3 }),
          w('ch2_p56_s2_w17', 'stets', 'stets', 'ADV'),
          w('ch2_p56_s2_w18', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p56_s2_w19', 'diesem', 'dies', 'PRON', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p56_s2_w20', 'Wechsel', 'Wechsel', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p56_s2_w21', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p56_s3',
        translationFr: 'Il y a en outre des vérités éternelles, telles que la liberté, la justice, etc., qui sont communes à tous les états de la société.',
        words: [
          w('ch2_p56_s3_w1', 'Es', 'es', 'PRON', { case: 'NOM', gender: 'N', number: 'SG', person: 3 }),
          w('ch2_p56_s3_w2', 'gibt', 'geben', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p56_s3_w3', 'zudem', 'zudem', 'ADV'),
          w('ch2_p56_s3_w4', 'ewige', 'ewig', 'ADJ', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch2_p56_s3_w5', 'Wahrheiten', 'Wahrheit', 'NOUN', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch2_p56_s3_w6', ',', ',', 'PUNCT'),
          w('ch2_p56_s3_w7', 'wie', 'wie', 'PREP'),
          w('ch2_p56_s3_w8', 'Freiheit', 'Freiheit', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p56_s3_w9', ',', ',', 'PUNCT'),
          w('ch2_p56_s3_w10', 'Gerechtigkeit', 'Gerechtigkeit', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p56_s3_w11', 'usw.', 'und so weiter', 'ADV'),
          w('ch2_p56_s3_w12', ',', ',', 'PUNCT'),
          w('ch2_p56_s3_w13', 'die', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p56_s3_w14', 'allen', 'all', 'PRON', { case: 'DAT', gender: 'M', number: 'PL' }),
          w('ch2_p56_s3_w15', 'gesellschaftlichen', 'gesellschaftlich', 'ADJ', { case: 'DAT', gender: 'M', number: 'PL' }),
          w('ch2_p56_s3_w16', 'Zuständen', 'Zustand', 'NOUN', { case: 'DAT', gender: 'M', number: 'PL' }),
          w('ch2_p56_s3_w17', 'gemeinsam', 'gemeinsam', 'ADV'),
          w('ch2_p56_s3_w18', 'sind', 'sein', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p56_s3_w19', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p56_s4',
        translationFr: 'Or, le communisme abolit les vérités éternelles, il abolit la religion et la morale au lieu de leur donner une forme nouvelle ; il contredit donc tous les développements historiques antérieurs. »',
        words: [
          w('ch2_p56_s4_w1', 'Der', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p56_s4_w2', 'Kommunismus', 'Kommunismus', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p56_s4_w3', 'aber', 'aber', 'ADV'),
          w('ch2_p56_s4_w4', 'schafft', 'abschaffen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND', separablePrefix: 'ab' }),
          w('ch2_p56_s4_w5', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch2_p56_s4_w6', 'ewigen', 'ewig', 'ADJ', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch2_p56_s4_w7', 'Wahrheiten', 'Wahrheit', 'NOUN', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch2_p56_s4_w8', 'ab', 'abschaffen', 'PART'),
          w('ch2_p56_s4_w9', ',', ',', 'PUNCT'),
          w('ch2_p56_s4_w10', 'er', 'er', 'PRON', { case: 'NOM', gender: 'M', number: 'SG', person: 3 }),
          w('ch2_p56_s4_w11', 'schafft', 'abschaffen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND', separablePrefix: 'ab' }),
          w('ch2_p56_s4_w12', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p56_s4_w13', 'Religion', 'Religion', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p56_s4_w14', 'ab', 'abschaffen', 'PART'),
          w('ch2_p56_s4_w15', ',', ',', 'PUNCT'),
          w('ch2_p56_s4_w16', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p56_s4_w17', 'Moral', 'Moral', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p56_s4_w18', ',', ',', 'PUNCT'),
          w('ch2_p56_s4_w19', 'statt', 'statt', 'CONJ'),
          w('ch2_p56_s4_w20', 'sie', 'sie', 'PRON', { case: 'NOM', gender: 'M', number: 'PL', person: 3 }),
          w('ch2_p56_s4_w21', 'neu', 'neu', 'ADV'),
          w('ch2_p56_s4_w22', 'zu', 'zu', 'PART'),
          w('ch2_p56_s4_w23', 'gestalten', 'gestalten', 'VERB'),
          w('ch2_p56_s4_w24', ',', ',', 'PUNCT'),
          w('ch2_p56_s4_w25', 'er', 'er', 'PRON', { case: 'NOM', gender: 'M', number: 'SG', person: 3 }),
          w('ch2_p56_s4_w26', 'widerspricht', 'widersprechen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p56_s4_w27', 'also', 'also', 'ADV'),
          w('ch2_p56_s4_w28', 'allen', 'all', 'PRON', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p56_s4_w29', 'bisherigen', 'bisherig', 'ADJ', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p56_s4_w30', 'geschichtlichen', 'geschichtlich', 'ADJ', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p56_s4_w31', 'Entwicklungen', 'Entwicklung', 'NOUN', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p56_s4_w32', '.', '.', 'PUNCT'),
          w('ch2_p56_s4_w33', '“', '“', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p57',
    sentences: [
      {
        id: 'ch2_p57_s1',
        translationFr: 'À quoi se réduit cette accusation ?',
        words: [
          w('ch2_p57_s1_w1', 'Worauf', 'worauf', 'ADV'),
          w('ch2_p57_s1_w2', 'reduziert', 'reduzieren', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p57_s1_w3', 'sich', 'sich', 'PRON', { case: 'ACC', number: 'SG', person: 3 }),
          w('ch2_p57_s1_w4', 'diese', 'dies', 'PRON', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p57_s1_w5', 'Anklage', 'Anklage', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p57_s1_w6', '?', '?', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p57_s2',
        translationFr: 'L\'histoire de toute la société jusqu\'à nos jours s\'est déroulée dans des antagonismes de classes, qui ont revêtu des formes différentes selon les époques.',
        words: [
          w('ch2_p57_s2_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p57_s2_w2', 'Geschichte', 'Geschichte', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p57_s2_w3', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p57_s2_w4', 'ganzen', 'ganz', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p57_s2_w5', 'bisherigen', 'bisherig', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p57_s2_w6', 'Gesellschaft', 'Gesellschaft', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p57_s2_w7', 'bewegte', 'bewegen', 'VERB', { number: 'SG', person: 3, tense: 'PAST', mood: 'IND' }),
          w('ch2_p57_s2_w8', 'sich', 'sich', 'PRON', { case: 'ACC', number: 'SG', person: 3 }),
          w('ch2_p57_s2_w9', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p57_s2_w10', 'Klassengegensätzen', 'Klassengegensatz', 'NOUN', { case: 'DAT', gender: 'M', number: 'PL', isCompound: true, compoundParts: ['Klassen', 'Gegensatz'] }),
          w('ch2_p57_s2_w11', ',', ',', 'PUNCT'),
          w('ch2_p57_s2_w12', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'PL' }),
          w('ch2_p57_s2_w13', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p57_s2_w14', 'den', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p57_s2_w15', 'verschiedensten', 'verschieden', 'ADJ', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p57_s2_w16', 'Epochen', 'Epoche', 'NOUN', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p57_s2_w17', 'verschieden', 'verschieden', 'ADV'),
          w('ch2_p57_s2_w18', 'gestaltet', 'gestalten', 'VERB', { tense: 'PERF' }),
          w('ch2_p57_s2_w19', 'waren', 'sein', 'VERB', { number: 'PL', person: 3, tense: 'PAST', mood: 'IND' }),
          w('ch2_p57_s2_w20', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p57_s3',
        translationFr: 'Mais quelle que soit la forme qu\'ils aient prise, l\'exploitation d\'une partie de la société par l\'autre est un fait commun à tous les siècles passés.',
        words: [
          w('ch2_p57_s3_w1', 'Welche', 'welcher', 'PRON', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p57_s3_w2', 'Form', 'Form', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p57_s3_w3', 'sie', 'sie', 'PRON', { case: 'NOM', gender: 'F', number: 'SG', person: 3 }),
          w('ch2_p57_s3_w4', 'aber', 'aber', 'ADV'),
          w('ch2_p57_s3_w5', 'auch', 'auch', 'ADV'),
          w('ch2_p57_s3_w6', 'immer', 'immer', 'ADV'),
          w('ch2_p57_s3_w7', 'angenommen', 'annehmen', 'VERB', { tense: 'PERF' }),
          w('ch2_p57_s3_w8', ',', ',', 'PUNCT'),
          w('ch2_p57_s3_w9', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p57_s3_w10', 'Ausbeutung', 'Ausbeutung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p57_s3_w11', 'des', 'der', 'ART', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch2_p57_s3_w12', 'einen', 'ein', 'ART', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch2_p57_s3_w13', 'Teils', 'Teil', 'NOUN', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch2_p57_s3_w14', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p57_s3_w15', 'Gesellschaft', 'Gesellschaft', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p57_s3_w16', 'durch', 'durch', 'PREP', { case: 'ACC' }),
          w('ch2_p57_s3_w17', 'den', 'der', 'ART', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p57_s3_w18', 'andern', 'anderer', 'PRON', { case: 'DAT', number: 'PL' }),
          w('ch2_p57_s3_w19', 'ist', 'sein', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p57_s3_w20', 'eine', 'ein', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p57_s3_w21', 'allen', 'all', 'PRON', { case: 'DAT', gender: 'N', number: 'PL' }),
          w('ch2_p57_s3_w22', 'vergangenen', 'vergangen', 'ADJ', { case: 'NOM', gender: 'N', number: 'PL' }),
          w('ch2_p57_s3_w23', 'Jahrhunderten', 'Jahrhundert', 'NOUN', { case: 'DAT', gender: 'N', number: 'PL', isCompound: true, compoundParts: ['Jahr', 'Hundert'] }),
          w('ch2_p57_s3_w24', 'gemeinsame', 'gemeinsam', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p57_s3_w25', 'Tatsache', 'Tatsache', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p57_s3_w26', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p57_s4',
        translationFr: 'Rien d\'étonnant dès lors si la conscience sociale de tous les siècles, en dépit de toute multiplicité et diversité, se meut dans certaines formes communes, dans des formes de conscience qui ne se dissoudront complètement qu\'avec l\'entière disparition de l\'antagonisme des classes.',
        words: [
          w('ch2_p57_s4_w1', 'Kein', 'kein', 'PRON', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p57_s4_w2', 'Wunder', 'Wunder', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p57_s4_w3', 'daher', 'daher', 'ADV'),
          w('ch2_p57_s4_w4', ',', ',', 'PUNCT'),
          w('ch2_p57_s4_w5', 'daß', 'daß', 'CONJ'),
          w('ch2_p57_s4_w6', 'das', 'der', 'ART', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p57_s4_w7', 'gesellschaftliche', 'gesellschaftlich', 'ADJ', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p57_s4_w8', 'Bewußtsein', 'Bewußtsein', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p57_s4_w9', 'aller', 'all', 'PRON', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p57_s4_w10', 'Jahrhunderte', 'Jahrhundert', 'NOUN', { case: 'GEN', gender: 'N', number: 'PL', isCompound: true, compoundParts: ['Jahr', 'Hundert'] }),
          w('ch2_p57_s4_w11', ',', ',', 'PUNCT'),
          w('ch2_p57_s4_w12', 'aller', 'all', 'PRON', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p57_s4_w13', 'Mannigfaltigkeit', 'Mannigfaltigkeit', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p57_s4_w14', 'und', 'und', 'CONJ'),
          w('ch2_p57_s4_w15', 'Verschiedenheit', 'Verschiedenheit', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p57_s4_w16', 'zum', 'zu', 'PREP', { case: 'DAT' }),
          w('ch2_p57_s4_w17', 'Trotz', 'Trotz', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p57_s4_w18', ',', ',', 'PUNCT'),
          w('ch2_p57_s4_w19', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p57_s4_w20', 'gewissen', 'gewiß', 'ADJ', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p57_s4_w21', 'gemeinsamen', 'gemeinsam', 'ADJ', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p57_s4_w22', 'Formen', 'Form', 'NOUN', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p57_s4_w23', 'sich', 'sich', 'PRON', { case: 'ACC', number: 'PL', person: 3 }),
          w('ch2_p57_s4_w24', 'bewegt', 'bewegen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p57_s4_w25', ',', ',', 'PUNCT'),
          w('ch2_p57_s4_w26', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p57_s4_w27', 'Bewußtseinsformen', 'Bewußtseinsform', 'NOUN', { case: 'DAT', gender: 'F', number: 'PL', isCompound: true, compoundParts: ['Bewußtseins', 'Form'] }),
          w('ch2_p57_s4_w28', ',', ',', 'PUNCT'),
          w('ch2_p57_s4_w29', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'PL' }),
          w('ch2_p57_s4_w30', 'nur', 'nur', 'ADV'),
          w('ch2_p57_s4_w31', 'mit', 'mit', 'PREP', { case: 'DAT' }),
          w('ch2_p57_s4_w32', 'dem', 'der', 'ART', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p57_s4_w33', 'gänzlichen', 'gänzlich', 'ADJ', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p57_s4_w34', 'Verschwinden', 'Verschwinden', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p57_s4_w35', 'des', 'der', 'ART', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch2_p57_s4_w36', 'Klassengegensatzes', 'Klassengegensatz', 'NOUN', { case: 'GEN', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Klassen', 'Gegensatz'] }),
          w('ch2_p57_s4_w37', 'sich', 'sich', 'PRON', { case: 'ACC', number: 'SG', person: 3 }),
          w('ch2_p57_s4_w38', 'vollständig', 'vollständig', 'ADV'),
          w('ch2_p57_s4_w39', 'auflösen', 'auflösen', 'VERB'),
          w('ch2_p57_s4_w40', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p58',
    sentences: [
      {
        id: 'ch2_p58_s1',
        translationFr: 'La révolution communiste est la rupture la plus radicale avec les rapports de propriété traditionnels ; rien d\'étonnant si, dans le cours de son développement, elle rompt de la façon la plus radicale avec les idées traditionnelles.',
        words: [
          w('ch2_p58_s1_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p58_s1_w2', 'kommunistische', 'kommunistisch', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p58_s1_w3', 'Revolution', 'Revolution', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p58_s1_w4', 'ist', 'sein', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p58_s1_w5', 'das', 'der', 'ART', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p58_s1_w6', 'radikalste', 'radikal', 'ADJ', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p58_s1_w7', 'Brechen', 'Brechen', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p58_s1_w8', 'mit', 'mit', 'PREP', { case: 'DAT' }),
          w('ch2_p58_s1_w9', 'den', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p58_s1_w10', 'überlieferten', 'überliefert', 'ADJ', { case: 'DAT', gender: 'N', number: 'PL' }),
          w('ch2_p58_s1_w11', 'Eigentumsverhältnissen', 'Eigentumsverhältnis', 'NOUN', { case: 'DAT', gender: 'N', number: 'PL', isCompound: true, compoundParts: ['Eigentums', 'Verhältnis'] }),
          w('ch2_p58_s1_w12', ';', ';', 'PUNCT'),
          w('ch2_p58_s1_w13', 'kein', 'kein', 'PRON', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p58_s1_w14', 'Wunder', 'Wunder', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p58_s1_w15', ',', ',', 'PUNCT'),
          w('ch2_p58_s1_w16', 'daß', 'daß', 'CONJ'),
          w('ch2_p58_s1_w17', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p58_s1_w18', 'ihrem', 'ihr', 'PRON', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p58_s1_w19', 'Entwicklungsgange', 'Entwicklungsgange', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Entwicklungs', 'Gang'] }),
          w('ch2_p58_s1_w20', 'am', 'an', 'PREP', { case: 'DAT' }),
          w('ch2_p58_s1_w21', 'radikalsten', 'radikalsten', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p58_s1_w22', 'mit', 'mit', 'PREP', { case: 'DAT' }),
          w('ch2_p58_s1_w23', 'den', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p58_s1_w24', 'überlieferten', 'überliefert', 'ADJ', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p58_s1_w25', 'Ideen', 'Idee', 'NOUN', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p58_s1_w26', 'gebrochen', 'brechen', 'VERB', { tense: 'PERF' }),
          w('ch2_p58_s1_w27', 'wird', 'werden', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p58_s1_w28', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p59',
    sentences: [
      {
        id: 'ch2_p59_s1',
        translationFr: 'Mais laissons là les objections de la bourgeoisie contre le communisme.',
        words: [
          w('ch2_p59_s1_w1', 'Doch', 'doch', 'CONJ'),
          w('ch2_p59_s1_w2', 'lassen', 'lassen', 'VERB', { number: 'PL', person: 1, tense: 'PRES', mood: 'IND' }),
          w('ch2_p59_s1_w3', 'wir', 'wir', 'PRON', { case: 'NOM', number: 'PL', person: 1 }),
          w('ch2_p59_s1_w4', 'die', 'der', 'ART', { case: 'ACC', gender: 'M', number: 'PL' }),
          w('ch2_p59_s1_w5', 'Einwürfe', 'Einwurf', 'NOUN', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch2_p59_s1_w6', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p59_s1_w7', 'Bourgeoisie', 'Bourgeoisie', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p59_s1_w8', 'gegen', 'gegen', 'PREP', { case: 'ACC' }),
          w('ch2_p59_s1_w9', 'den', 'der', 'ART', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p59_s1_w10', 'Kommunismus', 'Kommunismus', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p59_s1_w11', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p59_s2',
        translationFr: 'Nous avons déjà vu plus haut que la première étape de la révolution ouvrière est la constitution du prolétariat en classe dominante, la conquête de la démocratie.',
        words: [
          w('ch2_p59_s2_w1', 'Wir', 'wir', 'PRON', { case: 'NOM', number: 'PL', person: 1 }),
          w('ch2_p59_s2_w2', 'sahen', 'sehen', 'VERB', { number: 'PL', person: 1, tense: 'PAST', mood: 'IND' }),
          w('ch2_p59_s2_w3', 'schon', 'schon', 'ADV'),
          w('ch2_p59_s2_w4', 'oben', 'oben', 'ADV'),
          w('ch2_p59_s2_w5', ',', ',', 'PUNCT'),
          w('ch2_p59_s2_w6', 'daß', 'daß', 'CONJ'),
          w('ch2_p59_s2_w7', 'der', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p59_s2_w8', 'erste', 'erster', 'ADJ', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p59_s2_w9', 'Schritt', 'Schritt', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p59_s2_w10', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p59_s2_w11', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p59_s2_w12', 'Arbeiterrevolution', 'Arbeiterrevolution', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Arbeiter', 'Revolution'] }),
          w('ch2_p59_s2_w13', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p59_s2_w14', 'Erhebung', 'Erhebung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p59_s2_w15', 'des', 'der', 'ART', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p59_s2_w16', 'Proletariats', 'Proletariat', 'NOUN', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p59_s2_w17', 'zur', 'zu', 'PREP', { case: 'DAT' }),
          w('ch2_p59_s2_w18', 'herrschenden', 'herrschend', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p59_s2_w19', 'Klasse', 'Klasse', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p59_s2_w20', ',', ',', 'PUNCT'),
          w('ch2_p59_s2_w21', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p59_s2_w22', 'Erkämpfung', 'Erkämpfung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p59_s2_w23', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p59_s2_w24', 'Demokratie', 'Demokratie', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p59_s2_w25', 'ist', 'sein', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p59_s2_w26', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p60',
    sentences: [
      {
        id: 'ch2_p60_s1',
        translationFr: 'Le prolétariat utilisera sa domination politique pour arracher peu à peu tout capital à la bourgeoisie, pour centraliser tous les instruments de production entre les mains de l\'État, c\'est-à-dire du prolétariat organisé en classe dominante, et pour accroître au plus vite la masse des forces productives.',
        words: [
          w('ch2_p60_s1_w1', 'Das', 'der', 'ART', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p60_s1_w2', 'Proletariat', 'Proletariat', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p60_s1_w3', 'wird', 'werden', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p60_s1_w4', 'seine', 'sein', 'PRON', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p60_s1_w5', 'politische', 'politisch', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p60_s1_w6', 'Herrschaft', 'Herrschaft', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p60_s1_w7', 'dazu', 'dazu', 'ADV'),
          w('ch2_p60_s1_w8', 'benutzen', 'benutzen', 'VERB'),
          w('ch2_p60_s1_w9', ',', ',', 'PUNCT'),
          w('ch2_p60_s1_w10', 'der', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p60_s1_w11', 'Bourgeoisie', 'Bourgeoisie', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p60_s1_w12', 'nach', 'nach', 'PREP', { case: 'DAT' }),
          w('ch2_p60_s1_w13', 'und', 'und', 'CONJ'),
          w('ch2_p60_s1_w14', 'nach', 'nach', 'PREP', { case: 'DAT' }),
          w('ch2_p60_s1_w15', 'alles', 'all', 'PRON', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p60_s1_w16', 'Kapital', 'Kapital', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p60_s1_w17', 'zu', 'zu', 'PART'),
          w('ch2_p60_s1_w18', 'entreißen', 'entreißen', 'VERB'),
          w('ch2_p60_s1_w19', ',', ',', 'PUNCT'),
          w('ch2_p60_s1_w20', 'alle', 'all', 'PRON', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch2_p60_s1_w21', 'Produktionsinstrumente', 'Produktionsinstrument', 'NOUN', { case: 'ACC', gender: 'N', number: 'PL', isCompound: true, compoundParts: ['Produktions', 'Instrument'] }),
          w('ch2_p60_s1_w22', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p60_s1_w23', 'den', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p60_s1_w24', 'Händen', 'Hand', 'NOUN', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p60_s1_w25', 'des', 'der', 'ART', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch2_p60_s1_w26', 'Staats', 'Staat', 'NOUN', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch2_p60_s1_w27', ',', ',', 'PUNCT'),
          w('ch2_p60_s1_w28', 'd.h.', 'das heißt', 'ADV'),
          w('ch2_p60_s1_w29', 'des', 'der', 'ART', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch2_p60_s1_w30', 'als', 'als', 'PREP'),
          w('ch2_p60_s1_w31', 'herrschende', 'herrschend', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p60_s1_w32', 'Klasse', 'Klasse', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p60_s1_w33', 'organisierten', 'organisiert', 'ADJ', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p60_s1_w34', 'Proletariats', 'Proletariat', 'NOUN', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p60_s1_w35', ',', ',', 'PUNCT'),
          w('ch2_p60_s1_w36', 'zu', 'zu', 'PART'),
          w('ch2_p60_s1_w37', 'zentralisieren', 'zentralisieren', 'VERB'),
          w('ch2_p60_s1_w38', 'und', 'und', 'CONJ'),
          w('ch2_p60_s1_w39', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p60_s1_w40', 'Masse', 'Masse', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p60_s1_w41', 'der', 'der', 'ART', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p60_s1_w42', 'Produktionskräfte', 'Produktionskraft', 'NOUN', { case: 'GEN', gender: 'F', number: 'PL', isCompound: true, compoundParts: ['Produktions', 'Kraft'] }),
          w('ch2_p60_s1_w43', 'möglichst', 'möglichst', 'ADV'),
          w('ch2_p60_s1_w44', 'rasch', 'rasch', 'ADV'),
          w('ch2_p60_s1_w45', 'zu', 'zu', 'PART'),
          w('ch2_p60_s1_w46', 'vermehren', 'vermehren', 'VERB'),
          w('ch2_p60_s1_w47', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p61',
    sentences: [
      {
        id: 'ch2_p61_s1',
        translationFr: 'Cela ne pourra naturellement s\'accomplir au début que par des interventions despotiques dans le droit de propriété et dans les rapports de production bourgeois, c\'est-à-dire par des mesures qui apparaissent économiquement insuffisantes et insoutenables, mais qui, au cours du mouvement, se dépassent elles-mêmes et sont inévitables comme moyens de bouleverser l\'ensemble du mode de production.',
        words: [
          w('ch2_p61_s1_w1', 'Es', 'es', 'PRON', { case: 'NOM', gender: 'N', number: 'SG', person: 3 }),
          w('ch2_p61_s1_w2', 'kann', 'können', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p61_s1_w3', 'dies', 'dies', 'PRON', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p61_s1_w4', 'natürlich', 'natürlich', 'ADV'),
          w('ch2_p61_s1_w5', 'zunächst', 'zunächst', 'ADV'),
          w('ch2_p61_s1_w6', 'nur', 'nur', 'ADV'),
          w('ch2_p61_s1_w7', 'geschehen', 'geschehen', 'VERB'),
          w('ch2_p61_s1_w8', 'vermittelst', 'vermittelst', 'ADJ', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p61_s1_w9', 'despotischer', 'despotischer', 'ADJ', { case: 'GEN', gender: 'M', number: 'PL' }),
          w('ch2_p61_s1_w10', 'Eingriffe', 'Eingriff', 'NOUN', { case: 'GEN', gender: 'M', number: 'PL' }),
          w('ch2_p61_s1_w11', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p61_s1_w12', 'das', 'der', 'ART', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch2_p61_s1_w13', 'Eigentumsrecht', 'Eigentumsrecht', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG', isCompound: true, compoundParts: ['Eigentums', 'Recht'] }),
          w('ch2_p61_s1_w14', 'und', 'und', 'CONJ'),
          w('ch2_p61_s1_w15', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p61_s1_w16', 'die', 'der', 'ART', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch2_p61_s1_w17', 'bürgerlichen', 'bürgerlich', 'ADJ', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch2_p61_s1_w18', 'Produktionsverhältnisse', 'Produktionsverhältnis', 'NOUN', { case: 'ACC', gender: 'N', number: 'PL', isCompound: true, compoundParts: ['Produktions', 'Verhältnis'] }),
          w('ch2_p61_s1_w19', ',', ',', 'PUNCT'),
          w('ch2_p61_s1_w20', 'durch', 'durch', 'PREP', { case: 'ACC' }),
          w('ch2_p61_s1_w21', 'Maßregeln', 'Maßregel', 'NOUN', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p61_s1_w22', 'also', 'also', 'ADV'),
          w('ch2_p61_s1_w23', ',', ',', 'PUNCT'),
          w('ch2_p61_s1_w24', 'die', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p61_s1_w25', 'ökonomisch', 'ökonomisch', 'ADV'),
          w('ch2_p61_s1_w26', 'unzureichend', 'unzureichend', 'ADV'),
          w('ch2_p61_s1_w27', 'und', 'und', 'CONJ'),
          w('ch2_p61_s1_w28', 'unhaltbar', 'unhaltbar', 'ADV'),
          w('ch2_p61_s1_w29', 'erscheinen', 'erscheinen', 'VERB'),
          w('ch2_p61_s1_w30', ',', ',', 'PUNCT'),
          w('ch2_p61_s1_w31', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p61_s1_w32', 'aber', 'aber', 'ADV'),
          w('ch2_p61_s1_w33', 'im', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p61_s1_w34', 'Lauf', 'Lauf', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p61_s1_w35', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p61_s1_w36', 'Bewegung', 'Bewegung', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p61_s1_w37', 'über', 'über', 'PREP', { case: 'ACC' }),
          w('ch2_p61_s1_w38', 'sich', 'sich', 'PRON', { case: 'ACC', number: 'SG', person: 3 }),
          w('ch2_p61_s1_w39', 'selbst', 'selbst', 'ADV'),
          w('ch2_p61_s1_w40', 'hinaustreiben', 'hinaustreiben', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p61_s1_w41', 'und', 'und', 'CONJ'),
          w('ch2_p61_s1_w42', 'als', 'als', 'PREP'),
          w('ch2_p61_s1_w43', 'Mittel', 'Mittel', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p61_s1_w44', 'zur', 'zu', 'PREP', { case: 'DAT' }),
          w('ch2_p61_s1_w45', 'Umwälzung', 'Umwälzung', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p61_s1_w46', 'der', 'der', 'ART', { case: 'GEN', gender: 'M', number: 'PL' }),
          w('ch2_p61_s1_w47', 'ganzen', 'ganz', 'ADJ', { case: 'GEN', gender: 'M', number: 'PL' }),
          w('ch2_p61_s1_w48', 'Produktionsweise', 'Produktionsweis', 'NOUN', { case: 'GEN', gender: 'F', number: 'PL', isCompound: true, compoundParts: ['Produktions', 'Weise'] }),
          w('ch2_p61_s1_w49', 'unvermeidlich', 'unvermeidlich', 'ADV'),
          w('ch2_p61_s1_w50', 'sind', 'sein', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p61_s1_w51', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p61_s2',
        translationFr: 'Ces mesures seront naturellement différentes selon les différents pays.',
        words: [
          w('ch2_p61_s2_w1', 'Diese', 'dies', 'PRON', { case: 'NOM', gender: 'F', number: 'PL' }),
          w('ch2_p61_s2_w2', 'Maßregeln', 'Maßregel', 'NOUN', { case: 'NOM', gender: 'F', number: 'PL' }),
          w('ch2_p61_s2_w3', 'werden', 'werden', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p61_s2_w4', 'natürlich', 'natürlich', 'ADV'),
          w('ch2_p61_s2_w5', 'je', 'je', 'ADV'),
          w('ch2_p61_s2_w6', 'nach', 'nach', 'PREP', { case: 'DAT' }),
          w('ch2_p61_s2_w7', 'den', 'der', 'ART', { case: 'DAT', gender: 'N', number: 'PL' }),
          w('ch2_p61_s2_w8', 'verschiedenen', 'verschieden', 'ADJ', { case: 'DAT', gender: 'N', number: 'PL' }),
          w('ch2_p61_s2_w9', 'Ländern', 'Land', 'NOUN', { case: 'DAT', gender: 'N', number: 'PL' }),
          w('ch2_p61_s2_w10', 'verschieden', 'verschieden', 'ADV'),
          w('ch2_p61_s2_w11', 'sein', 'sein', 'VERB'),
          w('ch2_p61_s2_w12', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p62',
    sentences: [
      {
        id: 'ch2_p62_s1',
        translationFr: 'Pour les pays les plus avancés, les mesures suivantes pourront toutefois être appliquées assez généralement :',
        words: [
          w('ch2_p62_s1_w1', 'Für', 'für', 'PREP', { case: 'ACC' }),
          w('ch2_p62_s1_w2', 'die', 'der', 'ART', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch2_p62_s1_w3', 'fortgeschrittensten', 'fortgeschrittenst', 'ADJ', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch2_p62_s1_w4', 'Länder', 'Land', 'NOUN', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch2_p62_s1_w5', 'werden', 'werden', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p62_s1_w6', 'jedoch', 'jedoch', 'ADV'),
          w('ch2_p62_s1_w7', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'PL' }),
          w('ch2_p62_s1_w8', 'folgenden', 'folgend', 'ADJ', { case: 'NOM', gender: 'F', number: 'PL' }),
          w('ch2_p62_s1_w9', 'ziemlich', 'ziemlich', 'ADV'),
          w('ch2_p62_s1_w10', 'allgemein', 'allgemein', 'ADV'),
          w('ch2_p62_s1_w11', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p62_s1_w12', 'Anwendung', 'Anwendung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p62_s1_w13', 'kommen', 'kommen', 'VERB'),
          w('ch2_p62_s1_w14', 'können', 'können', 'VERB'),
          w('ch2_p62_s1_w15', ':', ':', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p63',
    sentences: [
      {
        id: 'ch2_p63_s1',
        translationFr: '1. Expropriation de la propriété foncière et affectation de la rente foncière aux dépenses de l\'État.',
        words: [
          w('ch2_p63_s1_w1', 'Expropriation', 'Expropriation', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p63_s1_w2', 'des', 'der', 'ART', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p63_s1_w3', 'Grundeigentums', 'Grundeigentum', 'NOUN', { case: 'GEN', gender: 'N', number: 'SG', isCompound: true, compoundParts: ['Grund', 'Eigentum'] }),
          w('ch2_p63_s1_w4', 'und', 'und', 'CONJ'),
          w('ch2_p63_s1_w5', 'Verwendung', 'Verwendung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p63_s1_w6', 'der', 'der', 'ART', { case: 'GEN', gender: 'M', number: 'PL' }),
          w('ch2_p63_s1_w7', 'Grundrente', 'Grundrent', 'NOUN', { case: 'GEN', gender: 'F', number: 'PL', isCompound: true, compoundParts: ['Grund', 'Rente'] }),
          w('ch2_p63_s1_w8', 'zu', 'zu', 'PREP', { case: 'DAT' }),
          w('ch2_p63_s1_w9', 'Staatsausgaben', 'Staatsausgabe', 'NOUN', { case: 'DAT', gender: 'F', number: 'PL', isCompound: true, compoundParts: ['Staats', 'Ausgabe'] }),
          w('ch2_p63_s1_w10', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p64',
    sentences: [
      {
        id: 'ch2_p64_s1',
        translationFr: '2. Impôt fortement progressif.',
        words: [
          w('ch2_p64_s1_w1', 'Starke', 'stark', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p64_s1_w2', 'Progressivsteuer', 'Progressivsteuer', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Progressiv', 'Steuer'] }),
          w('ch2_p64_s1_w3', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p65',
    sentences: [
      {
        id: 'ch2_p65_s1',
        translationFr: '3. Abolition du droit d\'héritage.',
        words: [
          w('ch2_p65_s1_w1', 'Abschaffung', 'Abschaffung', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p65_s1_w2', 'des', 'der', 'ART', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p65_s1_w3', 'Erbrechts', 'Erbrecht', 'NOUN', { case: 'GEN', gender: 'N', number: 'SG', isCompound: true, compoundParts: ['Erb', 'Recht'] }),
          w('ch2_p65_s1_w4', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p66',
    sentences: [
      {
        id: 'ch2_p66_s1',
        translationFr: '4. Confiscation de la propriété de tous les émigrés et rebelles.',
        words: [
          w('ch2_p66_s1_w1', 'Konfiskation', 'Konfiskation', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p66_s1_w2', 'des', 'der', 'ART', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p66_s1_w3', 'Eigentums', 'Eigentum', 'NOUN', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p66_s1_w4', 'aller', 'all', 'PRON', { case: 'GEN', gender: 'M', number: 'PL' }),
          w('ch2_p66_s1_w5', 'Emigranten', 'Emigrant', 'NOUN', { case: 'GEN', gender: 'M', number: 'PL' }),
          w('ch2_p66_s1_w6', 'und', 'und', 'CONJ'),
          w('ch2_p66_s1_w7', 'Rebellen', 'Rebell', 'NOUN', { case: 'GEN', gender: 'M', number: 'PL' }),
          w('ch2_p66_s1_w8', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p67',
    sentences: [
      {
        id: 'ch2_p67_s1',
        translationFr: '5. Centralisation du crédit entre les mains de l\'État au moyen d\'une banque nationale à capital d\'État et à monopole exclusif.',
        words: [
          w('ch2_p67_s1_w1', 'Zentralisation', 'Zentralisation', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p67_s1_w2', 'des', 'der', 'ART', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch2_p67_s1_w3', 'Kredits', 'Kredit', 'NOUN', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch2_p67_s1_w4', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p67_s1_w5', 'den', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p67_s1_w6', 'Händen', 'Hand', 'NOUN', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p67_s1_w7', 'des', 'der', 'ART', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch2_p67_s1_w8', 'Staats', 'Staat', 'NOUN', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch2_p67_s1_w9', 'durch', 'durch', 'PREP', { case: 'ACC' }),
          w('ch2_p67_s1_w10', 'eine', 'ein', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p67_s1_w11', 'Nationalbank', 'Nationalbank', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['National', 'Bank'] }),
          w('ch2_p67_s1_w12', 'mit', 'mit', 'PREP', { case: 'DAT' }),
          w('ch2_p67_s1_w13', 'Staatskapital', 'Staatskapital', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG', isCompound: true, compoundParts: ['Staats', 'Kapital'] }),
          w('ch2_p67_s1_w14', 'und', 'und', 'CONJ'),
          w('ch2_p67_s1_w15', 'ausschließlichem', 'ausschließlich', 'ADJ', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p67_s1_w16', 'Monopol', 'Monopol', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p67_s1_w17', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p68',
    sentences: [
      {
        id: 'ch2_p68_s1',
        translationFr: '6. Centralisation de tous les transports entre les mains de l\'État.',
        words: [
          w('ch2_p68_s1_w1', 'Zentralisation', 'Zentralisation', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p68_s1_w2', 'des', 'der', 'ART', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p68_s1_w3', 'Transportwesens', 'Transportwesen', 'NOUN', { case: 'GEN', gender: 'N', number: 'SG', isCompound: true, compoundParts: ['Transport', 'Wesen'] }),
          w('ch2_p68_s1_w4', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p68_s1_w5', 'den', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p68_s1_w6', 'Händen', 'Hand', 'NOUN', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p68_s1_w7', 'des', 'der', 'ART', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch2_p68_s1_w8', 'Staats', 'Staat', 'NOUN', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch2_p68_s1_w9', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p69',
    sentences: [
      {
        id: 'ch2_p69_s1',
        translationFr: '7. Augmentation du nombre des fabriques nationales et des instruments de production, défrichement et amélioration de toutes les terres selon un plan concerté.',
        words: [
          w('ch2_p69_s1_w1', 'Vermehrung', 'Vermehrung', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p69_s1_w2', 'der', 'der', 'ART', { case: 'GEN', number: 'PL' }),
          w('ch2_p69_s1_w3', 'Nationalfabriken', 'Nationalfabrik', 'NOUN', { case: 'GEN', gender: 'F', number: 'PL', isCompound: true, compoundParts: ['National', 'Fabrik'] }),
          w('ch2_p69_s1_w4', ',', ',', 'PUNCT'),
          w('ch2_p69_s1_w5', 'Produktionsinstrumente', 'Produktionsinstrument', 'NOUN', { case: 'NOM', gender: 'N', number: 'PL', isCompound: true, compoundParts: ['Produktions', 'Instrument'] }),
          w('ch2_p69_s1_w6', ',', ',', 'PUNCT'),
          w('ch2_p69_s1_w7', 'Urbarmachung', 'Urbarmachung', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Urbar', 'Machung'] }),
          w('ch2_p69_s1_w8', 'und', 'und', 'CONJ'),
          w('ch2_p69_s1_w9', 'Verbesserung', 'Verbesserung', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p69_s1_w10', 'aller', 'all', 'PRON', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch2_p69_s1_w11', 'Ländereien', 'Länderei', 'NOUN', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch2_p69_s1_w12', 'nach', 'nach', 'PREP', { case: 'DAT' }),
          w('ch2_p69_s1_w13', 'einem', 'ein', 'ART', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p69_s1_w14', 'gemeinschaftlichen', 'gemeinschaftlich', 'ADJ', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p69_s1_w15', 'Plan', 'Plan', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p69_s1_w16', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p70',
    sentences: [
      {
        id: 'ch2_p70_s1',
        translationFr: '8. Travail obligatoire pour tous, levée d\'armées industrielles, particulièrement pour l\'agriculture.',
        words: [
          w('ch2_p70_s1_w1', 'Gleicher', 'gleicher', 'ADJ', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch2_p70_s1_w2', 'Arbeitszwang', 'Arbeitszwang', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Arbeits', 'Zwang'] }),
          w('ch2_p70_s1_w3', 'für', 'für', 'PREP', { case: 'ACC' }),
          w('ch2_p70_s1_w4', 'alle', 'all', 'PRON', { case: 'ACC', number: 'PL' }),
          w('ch2_p70_s1_w5', ',', ',', 'PUNCT'),
          w('ch2_p70_s1_w6', 'Errichtung', 'Errichtung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p70_s1_w7', 'industrieller', 'industriell', 'ADJ', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch2_p70_s1_w8', 'Armeen', 'Armee', 'NOUN', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch2_p70_s1_w9', ',', ',', 'PUNCT'),
          w('ch2_p70_s1_w10', 'besonders', 'besonders', 'ADV'),
          w('ch2_p70_s1_w11', 'für', 'für', 'PREP', { case: 'ACC' }),
          w('ch2_p70_s1_w12', 'den', 'der', 'ART', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p70_s1_w13', 'Ackerbau', 'Ackerbau', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p70_s1_w14', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p71',
    sentences: [
      {
        id: 'ch2_p71_s1',
        translationFr: '9. Unification de l\'agriculture et de l\'industrie, mesures tendant à éliminer graduellement la différence entre la ville et la campagne.',
        words: [
          w('ch2_p71_s1_w1', 'Vereinigung', 'Vereinigung', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p71_s1_w2', 'des', 'der', 'ART', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch2_p71_s1_w3', 'Betriebs', 'Betrieb', 'NOUN', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch2_p71_s1_w4', 'von', 'von', 'PREP', { case: 'DAT' }),
          w('ch2_p71_s1_w5', 'Ackerbau', 'Ackerbau', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p71_s1_w6', 'und', 'und', 'CONJ'),
          w('ch2_p71_s1_w7', 'Industrie', 'Industrie', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p71_s1_w8', ',', ',', 'PUNCT'),
          w('ch2_p71_s1_w9', 'Hinwirken', 'Hinwirk', 'NOUN', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch2_p71_s1_w10', 'auf', 'auf', 'PREP', { case: 'ACC' }),
          w('ch2_p71_s1_w11', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p71_s1_w12', 'allmähliche', 'allmählich', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p71_s1_w13', 'Beseitigung', 'Beseitigung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p71_s1_w14', 'des', 'der', 'ART', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch2_p71_s1_w15', 'Unterschieds', 'Unterschied', 'NOUN', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch2_p71_s1_w16', 'von', 'von', 'PREP', { case: 'DAT' }),
          w('ch2_p71_s1_w17', 'Stadt', 'Stadt', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p71_s1_w18', 'und', 'und', 'CONJ'),
          w('ch2_p71_s1_w19', 'Land', 'Land', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch2_p71_s1_w20', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p72',
    sentences: [
      {
        id: 'ch2_p72_s1',
        translationFr: '10. Éducation publique et gratuite de tous les enfants.',
        words: [
          w('ch2_p72_s1_w1', 'Öffentliche', 'öffentlich', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch2_p72_s1_w2', 'und', 'und', 'CONJ'),
          w('ch2_p72_s1_w3', 'unentgeltliche', 'unentgeltlich', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p72_s1_w4', 'Erziehung', 'Erziehung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p72_s1_w5', 'aller', 'all', 'PRON', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p72_s1_w6', 'Kinder', 'Kind', 'NOUN', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p72_s1_w7', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p72_s2',
        translationFr: 'Abolition du travail des enfants en fabrique sous sa forme actuelle.',
        words: [
          w('ch2_p72_s2_w1', 'Beseitigung', 'Beseitigung', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p72_s2_w2', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p72_s2_w3', 'Fabrikarbeit', 'Fabrikarbeit', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Fabrik', 'Arbeit'] }),
          w('ch2_p72_s2_w4', 'der', 'der', 'ART', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p72_s2_w5', 'Kinder', 'Kind', 'NOUN', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p72_s2_w6', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p72_s2_w7', 'ihrer', 'ihr', 'PRON', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p72_s2_w8', 'heutigen', 'heutig', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p72_s2_w9', 'Form', 'Form', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p72_s2_w10', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p72_s3',
        translationFr: 'Combinaison de l\'éducation avec la production matérielle, etc.',
        words: [
          w('ch2_p72_s3_w1', 'Vereinigung', 'Vereinigung', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p72_s3_w2', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p72_s3_w3', 'Erziehung', 'Erziehung', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p72_s3_w4', 'mit', 'mit', 'PREP', { case: 'DAT' }),
          w('ch2_p72_s3_w5', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p72_s3_w6', 'materiellen', 'materiell', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p72_s3_w7', 'Produktion', 'Produktion', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p72_s3_w8', 'usw.', 'und so weiter', 'ADV'),
          w('ch2_p72_s3_w9', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p72_s4',
        translationFr: 'Une fois que, dans le cours du développement, les différences de classes ont disparu et que toute la production est concentrée entre les mains des individus associés, le pouvoir public perd son caractère politique.',
        words: [
          w('ch2_p72_s4_w1', 'Sind', 'sein', 'VERB', { number: 'PL', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p72_s4_w2', 'im', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p72_s4_w3', 'Laufe', 'Lauf', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p72_s4_w4', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p72_s4_w5', 'Entwicklung', 'Entwicklung', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p72_s4_w6', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p72_s4_w7', 'Klassenunterschiede', 'Klassenunterschied', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Klassen', 'Unterschied'] }),
          w('ch2_p72_s4_w8', 'verschwunden', 'verschwinden', 'VERB', { tense: 'PERF' }),
          w('ch2_p72_s4_w9', 'und', 'und', 'CONJ'),
          w('ch2_p72_s4_w10', 'ist', 'sein', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p72_s4_w11', 'alle', 'all', 'PRON', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p72_s4_w12', 'Produktion', 'Produktion', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p72_s4_w13', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p72_s4_w14', 'den', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p72_s4_w15', 'Händen', 'Hand', 'NOUN', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p72_s4_w16', 'der', 'der', 'ART', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p72_s4_w17', 'assoziierten', 'assoziiert', 'ADJ', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p72_s4_w18', 'Individuen', 'Individuum', 'NOUN', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch2_p72_s4_w19', 'konzentriert', 'konzentrieren', 'VERB', { tense: 'PERF' }),
          w('ch2_p72_s4_w20', ',', ',', 'PUNCT'),
          w('ch2_p72_s4_w21', 'so', 'so', 'ADV'),
          w('ch2_p72_s4_w22', 'verliert', 'verlieren', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p72_s4_w23', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p72_s4_w24', 'öffentliche', 'öffentlich', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p72_s4_w25', 'Gewalt', 'Gewalt', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p72_s4_w26', 'den', 'der', 'ART', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p72_s4_w27', 'politischen', 'politisch', 'ADJ', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p72_s4_w28', 'Charakter', 'Charakter', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch2_p72_s4_w29', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p72_s5',
        translationFr: 'Le pouvoir politique au sens propre est le pouvoir organisé d\'une classe pour l\'oppression d\'une autre.',
        words: [
          w('ch2_p72_s5_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p72_s5_w2', 'politische', 'politisch', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p72_s5_w3', 'Gewalt', 'Gewalt', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p72_s5_w4', 'im', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p72_s5_w5', 'eigentlichen', 'eigentlich', 'ADJ', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p72_s5_w6', 'Sinne', 'Sinn', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p72_s5_w7', 'ist', 'sein', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p72_s5_w8', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p72_s5_w9', 'organisierte', 'organisiert', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p72_s5_w10', 'Gewalt', 'Gewalt', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p72_s5_w11', 'einer', 'ein', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p72_s5_w12', 'Klasse', 'Klasse', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p72_s5_w13', 'zur', 'zu', 'PREP', { case: 'DAT' }),
          w('ch2_p72_s5_w14', 'Unterdrückung', 'Unterdrückung', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p72_s5_w15', 'einer', 'ein', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p72_s5_w16', 'andern', 'anderer', 'VERB'),
          w('ch2_p72_s5_w17', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch2_p72_s6',
        translationFr: 'Si le prolétariat, dans sa lutte contre la bourgeoisie, s\'unit nécessairement en une classe, s\'érige par une révolution en classe dominante et, comme classe dominante, abolit violemment les anciens rapports de production, il abolit en même temps que ces rapports de production les conditions d\'existence de l\'antagonisme des classes, les classes en général, et supprime par là sa propre domination comme classe.',
        words: [
          w('ch2_p72_s6_w1', 'Wenn', 'wenn', 'CONJ'),
          w('ch2_p72_s6_w2', 'das', 'der', 'ART', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p72_s6_w3', 'Proletariat', 'Proletariat', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch2_p72_s6_w4', 'im', 'in', 'PREP', { case: 'DAT' }),
          w('ch2_p72_s6_w5', 'Kampfe', 'Kampf', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch2_p72_s6_w6', 'gegen', 'gegen', 'PREP', { case: 'ACC' }),
          w('ch2_p72_s6_w7', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p72_s6_w8', 'Bourgeoisie', 'Bourgeoisie', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p72_s6_w9', 'sich', 'sich', 'PRON', { case: 'ACC', number: 'PL', person: 3 }),
          w('ch2_p72_s6_w10', 'notwendig', 'notwendig', 'ADV'),
          w('ch2_p72_s6_w11', 'zur', 'zu', 'PREP', { case: 'DAT' }),
          w('ch2_p72_s6_w12', 'Klasse', 'Klasse', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p72_s6_w13', 'vereint', 'vereinen', 'VERB', { tense: 'PERF' }),
          w('ch2_p72_s6_w14', ',', ',', 'PUNCT'),
          w('ch2_p72_s6_w15', 'durch', 'durch', 'PREP', { case: 'ACC' }),
          w('ch2_p72_s6_w16', 'eine', 'ein', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p72_s6_w17', 'Revolution', 'Revolution', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p72_s6_w18', 'sich', 'sich', 'PRON', { case: 'ACC', number: 'SG', person: 3 }),
          w('ch2_p72_s6_w19', 'zur', 'zu', 'PREP', { case: 'DAT' }),
          w('ch2_p72_s6_w20', 'herrschenden', 'herrschend', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p72_s6_w21', 'Klasse', 'Klasse', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch2_p72_s6_w22', 'macht', 'machen', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p72_s6_w23', 'und', 'und', 'CONJ'),
          w('ch2_p72_s6_w24', 'als', 'als', 'PREP'),
          w('ch2_p72_s6_w25', 'herrschende', 'herrschend', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p72_s6_w26', 'Klasse', 'Klasse', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p72_s6_w27', 'gewaltsam', 'gewaltsam', 'ADV'),
          w('ch2_p72_s6_w28', 'die', 'der', 'ART', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch2_p72_s6_w29', 'alten', 'alt', 'ADJ', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch2_p72_s6_w30', 'Produktionsverhältnisse', 'Produktionsverhältnis', 'NOUN', { case: 'ACC', gender: 'N', number: 'PL', isCompound: true, compoundParts: ['Produktions', 'Verhältnis'] }),
          w('ch2_p72_s6_w31', 'aufhebt', 'aufheben', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p72_s6_w32', ',', ',', 'PUNCT'),
          w('ch2_p72_s6_w33', 'so', 'so', 'ADV'),
          w('ch2_p72_s6_w34', 'hebt', 'aufheben', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND', separablePrefix: 'auf' }),
          w('ch2_p72_s6_w35', 'es', 'es', 'PRON', { case: 'NOM', gender: 'N', number: 'SG', person: 3 }),
          w('ch2_p72_s6_w36', 'mit', 'mit', 'PREP', { case: 'DAT' }),
          w('ch2_p72_s6_w37', 'diesen', 'dies', 'PRON', { case: 'DAT', gender: 'N', number: 'PL' }),
          w('ch2_p72_s6_w38', 'Produktionsverhältnissen', 'Produktionsverhältnis', 'NOUN', { case: 'DAT', gender: 'N', number: 'PL', isCompound: true, compoundParts: ['Produktions', 'Verhältnis'] }),
          w('ch2_p72_s6_w39', 'die', 'der', 'ART', { case: 'ACC', number: 'PL' }),
          w('ch2_p72_s6_w40', 'Existenzbedingungen', 'Existenzbedingung', 'NOUN', { case: 'NOM', number: 'PL', isCompound: true, compoundParts: ['Existenz', 'Bedingung'] }),
          w('ch2_p72_s6_w41', 'des', 'der', 'ART', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch2_p72_s6_w42', 'Klassengegensatzes', 'Klassengegensatz', 'NOUN', { case: 'GEN', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Klassen', 'Gegensatz'] }),
          w('ch2_p72_s6_w43', ',', ',', 'PUNCT'),
          w('ch2_p72_s6_w44', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p72_s6_w45', 'Klassen', 'Klasse', 'NOUN', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch2_p72_s6_w46', 'überhaupt', 'überhaupt', 'ADV'),
          w('ch2_p72_s6_w47', ',', ',', 'PUNCT'),
          w('ch2_p72_s6_w48', 'und', 'und', 'CONJ'),
          w('ch2_p72_s6_w49', 'damit', 'damit', 'ADV'),
          w('ch2_p72_s6_w50', 'seine', 'sein', 'PRON', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p72_s6_w51', 'eigene', 'eigen', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p72_s6_w52', 'Herrschaft', 'Herrschaft', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p72_s6_w53', 'als', 'als', 'PREP'),
          w('ch2_p72_s6_w54', 'Klasse', 'Klasse', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p72_s6_w55', 'auf', 'aufheben', 'PART'),
          w('ch2_p72_s6_w56', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
  {
    id: 'ch2_p73',
    sentences: [
      {
        id: 'ch2_p73_s1',
        translationFr: 'À la place de l\'ancienne société bourgeoise, avec ses classes et ses antagonismes de classes, surgit une association où le libre développement de chacun est la condition du libre développement de tous.',
        words: [
          w('ch2_p73_s1_w1', 'An', 'an', 'PREP', { case: 'DAT' }),
          w('ch2_p73_s1_w2', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p73_s1_w3', 'Stelle', 'Stelle', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p73_s1_w4', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p73_s1_w5', 'alten', 'alt', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p73_s1_w6', 'bürgerlichen', 'bürgerlich', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p73_s1_w7', 'Gesellschaft', 'Gesellschaft', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch2_p73_s1_w8', 'mit', 'mit', 'PREP', { case: 'DAT' }),
          w('ch2_p73_s1_w9', 'ihren', 'ihr', 'PRON', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p73_s1_w10', 'Klassen', 'Klasse', 'NOUN', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch2_p73_s1_w11', 'und', 'und', 'CONJ'),
          w('ch2_p73_s1_w12', 'Klassengegensätzen', 'Klassengegensatz', 'NOUN', { case: 'DAT', gender: 'M', number: 'PL', isCompound: true, compoundParts: ['Klassen', 'Gegensatz'] }),
          w('ch2_p73_s1_w13', 'tritt', 'treten', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p73_s1_w14', 'eine', 'ein', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p73_s1_w15', 'Assoziation', 'Assoziation', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p73_s1_w16', ',', ',', 'PUNCT'),
          w('ch2_p73_s1_w17', 'worin', 'worin', 'CONJ'),
          w('ch2_p73_s1_w18', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p73_s1_w19', 'freie', 'frei', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p73_s1_w20', 'Entwicklung', 'Entwicklung', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch2_p73_s1_w21', 'eines', 'ein', 'ART', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch2_p73_s1_w22', 'jeden', 'jeder', 'PRON', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch2_p73_s1_w23', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p73_s1_w24', 'Bedingung', 'Bedingung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p73_s1_w25', 'für', 'für', 'PREP', { case: 'ACC' }),
          w('ch2_p73_s1_w26', 'freie', 'frei', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p73_s1_w27', 'Entwicklung', 'Entwicklung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch2_p73_s1_w28', 'aller', 'all', 'PRON', { case: 'GEN', number: 'PL' }),
          w('ch2_p73_s1_w29', 'ist', 'sein', 'VERB', { number: 'SG', person: 3, tense: 'PRES', mood: 'IND' }),
          w('ch2_p73_s1_w30', '.', '.', 'PUNCT')
        ]
      },
    ]
  },
];

export const chapter2French: Record<string, string[]> = {
  "ch2_p1": [
    "Dans quel rapport les communistes se trouvent-ils à l'égard des prolétaires en général ?",
    "Les communistes ne forment pas un parti distinct en face des autres partis ouvriers.",
    "Ils n'ont point d'intérêts séparés des intérêts de l'ensemble du prolétariat."
  ],
  "ch2_p2": [
    "Ils n'établissent point de principes particuliers sur lesquels ils voudraient modeler le mouvement prolétarien."
  ],
  "ch2_p3": [
    "Les communistes ne se distinguent des autres partis prolétariens que sur deux points : d'une part, dans les différentes luttes nationales des prolétaires, ils mettent en avant et font valoir les intérêts communs à tout le prolétariat, indépendants de la nationalité ; d'autre part, dans les différentes étapes de développement que traverse la lutte entre prolétariat et bourgeoisie, ils représentent toujours l'intérêt du mouvement dans son ensemble."
  ],
  "ch2_p4": [
    "Pratiquement, les communistes sont donc la fraction la plus résolue des partis ouvriers de tous les pays, celle qui pousse toujours en avant ; théoriquement, ils ont sur le reste de la masse prolétarienne l'avantage d'une claire intelligence des conditions, de la marche et des résultats généraux du mouvement prolétarien."
  ],
  "ch2_p5": [
    "Le but immédiat des communistes est le même que celui de tous les autres partis prolétariens : constitution du prolétariat en classe, renversement de la domination bourgeoise, conquête du pouvoir politique par le prolétariat.",
    "Les thèses théoriques des communistes ne reposent nullement sur des idées, des principes inventés ou découverts par tel ou tel réformateur du monde."
  ],
  "ch2_p6": [
    "Elles ne sont que l'expression générale de conditions réelles d'une lutte de classes existante, d'un mouvement historique qui s'accomplit sous nos yeux.",
    "L'abolition des rapports de propriété qui ont existé jusqu'ici n'a rien qui caractérise en propre le communisme."
  ],
  "ch2_p7": [
    "Tous les rapports de propriété ont été soumis à une constante mutation historique, à un perpétuel changement historique."
  ],
  "ch2_p8": [
    "La Révolution française, par exemple, a aboli la propriété féodale en faveur de la propriété bourgeoise."
  ],
  "ch2_p9": [
    "Ce qui caractérise le communisme, ce n'est pas l'abolition de la propriété en général, mais l'abolition de la propriété bourgeoise."
  ],
  "ch2_p10": [
    "Or, la propriété privée bourgeoise moderne est l'expression ultime et la plus achevée de la production et de l'appropriation des produits reposant sur des antagonismes de classes, sur l'exploitation des uns par les autres."
  ],
  "ch2_p11": [
    "En ce sens, les communistes peuvent résumer leur théorie en cette formule unique : abolition de la propriété privée."
  ],
  "ch2_p12": [
    "On nous a reproché, à nous autres communistes, de vouloir abolir la propriété acquise personnellement, fruit du propre travail de chacun ; cette propriété qui formerait le fondement de toute liberté, de toute activité et de toute indépendance personnelles."
  ],
  "ch2_p13": [
    "Propriété acquise par le travail, acquise par soi-même, méritée par soi-même !",
    "Parlez-vous de la propriété du petit bourgeois, du petit paysan, qui a précédé la propriété bourgeoise ?",
    "Nous n'avons pas besoin de l'abolir : le développement de l'industrie l'a abolie et l'abolit chaque jour."
  ],
  "ch2_p14": [
    "Ou bien parlez-vous de la propriété privée bourgeoise moderne ?"
  ],
  "ch2_p15": [
    "Mais le travail salarié, le travail du prolétaire, lui crée-t-il de la propriété ?",
    "Nullement.",
    "Il crée le capital, c'est-à-dire la propriété qui exploite le travail salarié, et qui ne peut s'accroître qu'à la condition de produire du nouveau travail salarié afin de l'exploiter à nouveau.",
    "La propriété, dans sa forme actuelle, se meut dans l'antagonisme du capital et du travail salarié.",
    "Examinons les deux termes de cet antagonisme :"
  ],
  "ch2_p16": [
    "Être capitaliste, ce n'est pas seulement occuper une position purement personnelle, mais une position sociale dans la production.",
    "Le capital est un produit collectif et ne peut être mis en mouvement que par l'activité commune de nombreux membres de la société, et même, en dernière instance, par l'activité commune de tous les membres de la société.",
    "Le capital n'est donc pas une puissance personnelle, c'est une puissance sociale."
  ],
  "ch2_p17": [
    "Dès lors, quand le capital est transformé en propriété commune, appartenant à tous les membres de la société, ce n'est pas une propriété personnelle qui se transforme en propriété sociale.",
    "Seul le caractère social de la propriété se transforme.",
    "Elle perd son caractère de classe."
  ],
  "ch2_p18": [
    "Venons-en au travail salarié :"
  ],
  "ch2_p19": [
    "Le prix moyen du travail salarié est le minimum du salaire, c'est-à-dire la somme des moyens de subsistance nécessaires pour maintenir l'ouvrier en vie en tant qu'ouvrier.",
    "Ce que le salarié s'approprie donc par son activité suffit tout juste à reproduire sa nue existence.",
    "Nous ne voulons nullement abolir cette appropriation personnelle des produits du travail destinée à la reproduction de la vie immédiate, appropriation qui ne laisse aucun produit net conférant un pouvoir sur le travail d'autrui.",
    "Nous voulons seulement supprimer le caractère misérable de cette appropriation, où l'ouvrier ne vit que pour accroître le capital, et ne vit qu'autant que l'exige l'intérêt de la classe dominante.",
    "Dans la société bourgeoise, le travail vivant n'est qu'un moyen d'accroître le travail accumulé.",
    "Dans la société communiste, le travail accumulé n'est qu'un moyen d'élargir, d'enrichir, de promouvoir le processus vital des travailleurs."
  ],
  "ch2_p20": [
    "Dans la société bourgeoise, le passé domine donc le présent ; dans la société communiste, c'est le présent qui domine le passé.",
    "Dans la société bourgeoise, le capital est indépendant et personnel, tandis que l'individu agissant est dépendant et impersonnel."
  ],
  "ch2_p21": [
    "Et c'est l'abolition d'un tel rapport que la bourgeoisie qualifie d'abolition de la personnalité et de la liberté !",
    "Et avec raison !",
    "Car il s'agit bel et bien d'abolir la personnalité, l'indépendance et la liberté bourgeoises."
  ],
  "ch2_p22": [
    "Par liberté, on entend, dans le cadre des actuels rapports de production bourgeois, la liberté du commerce, la liberté d'acheter et de vendre."
  ],
  "ch2_p23": [
    "Mais si le trafic s'écroule, le libre trafic s'écroule aussi.",
    "Les déclamations sur le libre trafic, comme toutes les autres rodomontades libérales de notre bourgeoisie, n'ont de sens qu'en regard du trafic entravé, du bourgeois asservi du Moyen Âge, mais n'en ont aucun face à l'abolition communiste du trafic, des rapports de production bourgeois et de la bourgeoisie elle-même."
  ],
  "ch2_p24": [
    "Vous êtes saisis d'horreur parce que nous voulons abolir la propriété privée.",
    "Mais dans votre société actuelle, la propriété privée est abolie pour les neuf dixièmes de ses membres ; elle n'existe précisément que parce qu'elle n'existe pas pour ces neuf dixièmes.",
    "Vous nous reprochez donc de vouloir abolir une propriété qui présuppose, comme condition nécessaire, la privation de toute propriété pour l'immense majorité de la société."
  ],
  "ch2_p25": [
    "En un mot, vous nous reprochez de vouloir abolir votre propriété.",
    "À la vérité, c'est bien là ce que nous voulons."
  ],
  "ch2_p26": [
    "Dès l'instant où le travail ne peut plus être converti en capital, en argent, en rente foncière, bref, en une puissance sociale monopolisable, c'est-à-dire dès l'instant où la propriété personnelle ne peut plus se muer en propriété bourgeoise, en capital, dès cet instant vous déclarez que la personne est abolie."
  ],
  "ch2_p27": [
    "Vous avouez donc que, par personne, vous n'entendez nul autre que le bourgeois, le propriétaire bourgeois.",
    "Et cette personne-là, il est vrai, doit être abolie."
  ],
  "ch2_p28": [
    "Le communisme n'enlève à personne le pouvoir de s'approprier des produits sociaux ; il n'ôte que le pouvoir d'assujettir le travail d'autrui au moyen de cette appropriation."
  ],
  "ch2_p29": [
    "On a objecté qu'avec l'abolition de la propriété privée toute activité cesserait et qu'une paresse générale s'emparerait du monde."
  ],
  "ch2_p30": [
    "Si tel était le cas, il y a beau temps que la société bourgeoise aurait péri par l'oisiveté ; car ceux qui y travaillent n'acquièrent rien, et ceux qui y acquièrent ne travaillent pas.",
    "Toute l'objection se réduit à cette tautologie : il n'y a plus de travail salarié dès lors qu'il n'y a plus de capital."
  ],
  "ch2_p31": [
    "Toutes les objections dirigées contre le mode d'appropriation et de production communiste des produits matériels ont été de même étendues à l'appropriation et à la production des produits intellectuels.",
    "De même que pour le bourgeois la disparition de la propriété de classe équivaut à la disparition de la production elle-même, de même la disparition de la culture de classe est pour lui identique à la disparition de toute culture en général.",
    "La culture dont il déplore la perte n'est pour l'immense majorité qu'un dressage à devenir machine."
  ],
  "ch2_p32": [
    "Mais ne venez point polémiquer avec nous en mesurant l'abolition de la propriété bourgeoise à l'aune de vos représentations bourgeoises de liberté, de culture, de droit, etc.",
    "Vos idées elles-mêmes sont les produits des rapports bourgeois de production et de propriété, tout comme votre droit n'est que la volonté de votre classe érigée en loi, volonté dont le contenu est déterminé par les conditions matérielles d'existence de votre classe."
  ],
  "ch2_p33": [
    "La conception intéressée par laquelle vous métamorphosez vos rapports de production et de propriété — de rapports historiques et transitoires au cours de la production qu'ils sont — en lois éternelles de la nature et de la raison, vous la partagez avec toutes les classes dominantes disparues.",
    "Ce que vous comprenez pour la propriété antique, ce que vous comprenez pour la propriété féodale, il vous est interdit de le comprendre pour la propriété bourgeoise. —"
  ],
  "ch2_p34": [
    "Abolition de la famille !",
    "Même les plus radicaux s'indignent de cet infâme dessein des communistes."
  ],
  "ch2_p35": [
    "Sur quoi repose la famille actuelle, la famille bourgeoise ?",
    "Sur le capital, sur le gain privé.",
    "Pleinement développée, elle n'existe que pour la bourgeoisie ; mais elle trouve son complément dans l'absence forcée de famille chez les prolétaires et dans la prostitution publique."
  ],
  "ch2_p36": [
    "La famille bourgeoise s'évanouit naturellement avec l'évanouissement de ce complément qui est le sien, et toutes deux disparaissent avec la disparition du capital."
  ],
  "ch2_p37": [
    "Nous reprochez-vous de vouloir abolir l'exploitation des enfants par leurs parents ?",
    "Ce crime, nous l'avouons."
  ],
  "ch2_p38": [
    "Mais, dites-vous, nous détruisons les rapports les plus intimes en substituant l'éducation sociale à l'éducation domestique."
  ],
  "ch2_p39": [
    "Et votre éducation à vous, n'est-elle pas, elle aussi, déterminée par la société ?",
    "Déterminée par les rapports sociaux au sein desquels vous éduquez, par l'intervention plus ou moins directe de la société, par le truchement de l'école, etc. ?",
    "Les communistes n'inventent pas l'action de la société sur l'éducation ; ils ne font qu'en modifier le caractère et arracher l'éducation à l'influence de la classe dominante."
  ],
  "ch2_p40": [
    "Les déclamations bourgeoises sur la famille et l'éducation, sur les doux rapports entre parents et enfants, deviennent d'autant plus écœurantes qu'avec le développement de la grande industrie tous les liens de famille sont brisés pour les prolétaires et les enfants transformés en simples articles de commerce et instruments de travail."
  ],
  "ch2_p41": [
    "Mais vous autres communistes, vous voulez introduire la communauté des femmes ! nous crie en chœur la bourgeoisie tout entière."
  ],
  "ch2_p42": [
    "Le bourgeois ne voit dans sa femme qu'un simple instrument de production.",
    "Il entend dire que les instruments de production doivent être exploités en commun, et ne peut naturellement se représenter autre chose sinon que le sort de la mise en commun frappera tout autant les femmes."
  ],
  "ch2_p43": [
    "Il ne soupçonne pas qu'il s'agit précisément d'abolir la condition faite aux femmes de n'être que de simples instruments de production."
  ],
  "ch2_p44": [
    "Rien n'est d'ailleurs plus grotesque que l'effroi ultra-moralisateur de nos bourgeois devant la prétendue communauté officielle des femmes chez les communistes.",
    "Les communistes n'ont pas besoin d'introduire la communauté des femmes : elle a presque toujours existé."
  ],
  "ch2_p45": [
    "Nos bourgeois, non contents d'avoir à leur disposition les femmes et les filles de leurs prolétaires, sans même parler de la prostitution officielle, trouvent un plaisir suprême à séduire mutuellement leurs épouses."
  ],
  "ch2_p46": [
    "Le mariage bourgeois est en réalité la communauté des femmes mariées.",
    "Tout au plus pourrait-on reprocher aux communistes de vouloir substituer à une communauté des femmes hypocritement dissimulée une communauté officielle et sans fard.",
    "Il va d'ailleurs de soi qu'avec l'abolition des rapports de production actuels disparaîtra aussi la communauté des femmes qui en dérive, c'est-à-dire la prostitution officielle et clandestine."
  ],
  "ch2_p47": [
    "On a reproché en outre aux communistes de vouloir abolir la patrie, la nationalité.",
    "Les ouvriers n'ont pas de patrie.",
    "On ne peut leur ravir ce qu'ils n'ont pas.",
    "Comme le prolétariat doit d'abord conquérir le pouvoir politique, s'ériger en classe nationale, se constituer lui-même en nation, il est encore par là national lui-même, quoique nullement au sens où l'entend la bourgeoisie."
  ],
  "ch2_p48": [
    "Les démarcations nationales et les antagonismes entre peuples s'effacent déjà de plus en plus avec le développement de la bourgeoisie, la liberté du commerce, le marché mondial, l'uniformité de la production industrielle et les conditions d'existence qui y correspondent."
  ],
  "ch2_p49": [
    "La domination du prolétariat les fera disparaître plus encore.",
    "L'action commune, au moins dans les pays civilisés, est l'une des premières conditions de son émancipation."
  ],
  "ch2_p50": [
    "À mesure qu'est abolie l'exploitation d'un individu par un autre, l'exploitation d'une nation par une autre est abolie.",
    "Avec l'antagonisme des classes à l'intérieur de la nation tombe l'hostilité entre les nations."
  ],
  "ch2_p51": [
    "Les accusations portées contre le communisme sous des angles religieux, philosophiques et généralement idéologiques ne méritent pas un examen plus approfondi."
  ],
  "ch2_p52": [
    "Faut-il une perspicacité bien profonde pour comprendre qu'avec les conditions de vie des hommes, avec leurs relations sociales, avec leur existence sociale, changent aussi leurs représentations, leurs conceptions et leurs notions, en un mot leur conscience ?"
  ],
  "ch2_p53": [
    "Que prouve l'histoire des idées, sinon que la production intellectuelle se métamorphose avec la production matérielle ?",
    "Les idées dominantes d'une époque n'ont jamais été que les idées de la classe dominante."
  ],
  "ch2_p54": [
    "Parle-t-on d'idées qui révolutionnent une société tout entière, on ne fait qu'énoncer le fait qu'au sein de la vieille société se sont formés les éléments d'une société nouvelle, et que la dissolution des vieilles idées va de pair avec la dissolution des anciennes conditions d'existence."
  ],
  "ch2_p55": [
    "Lorsque le monde antique était à son déclin, les vieilles religions furent vaincues par la religion chrétienne.",
    "Lorsque les idées chrétiennes succombèrent au XVIIIe siècle devant les idées des Lumières, la société féodale livrait son combat à mort contre la bourgeoisie, alors révolutionnaire.",
    "Les idées de liberté de conscience et de liberté religieuse ne firent que proclamer le règne de la libre concurrence dans le domaine du savoir."
  ],
  "ch2_p56": [
    "« Sans doute », dira-t-on, « les idées religieuses, morales, philosophiques, politiques, juridiques, etc., se sont modifiées au cours du développement historique.",
    "Mais la religion, la morale, la philosophie, la politique, le droit se maintenaient toujours à travers ces changements.",
    "Il y a en outre des vérités éternelles, telles que la liberté, la justice, etc., qui sont communes à tous les états de la société.",
    "Or, le communisme abolit les vérités éternelles, il abolit la religion et la morale au lieu de leur donner une forme nouvelle ; il contredit donc tous les développements historiques antérieurs. »"
  ],
  "ch2_p57": [
    "À quoi se réduit cette accusation ?",
    "L'histoire de toute la société jusqu'à nos jours s'est déroulée dans des antagonismes de classes, qui ont revêtu des formes différentes selon les époques.",
    "Mais quelle que soit la forme qu'ils aient prise, l'exploitation d'une partie de la société par l'autre est un fait commun à tous les siècles passés.",
    "Rien d'étonnant dès lors si la conscience sociale de tous les siècles, en dépit de toute multiplicité et diversité, se meut dans certaines formes communes, dans des formes de conscience qui ne se dissoudront complètement qu'avec l'entière disparition de l'antagonisme des classes."
  ],
  "ch2_p58": [
    "La révolution communiste est la rupture la plus radicale avec les rapports de propriété traditionnels ; rien d'étonnant si, dans le cours de son développement, elle rompt de la façon la plus radicale avec les idées traditionnelles."
  ],
  "ch2_p59": [
    "Mais laissons là les objections de la bourgeoisie contre le communisme.",
    "Nous avons déjà vu plus haut que la première étape de la révolution ouvrière est la constitution du prolétariat en classe dominante, la conquête de la démocratie."
  ],
  "ch2_p60": [
    "Le prolétariat utilisera sa domination politique pour arracher peu à peu tout capital à la bourgeoisie, pour centraliser tous les instruments de production entre les mains de l'État, c'est-à-dire du prolétariat organisé en classe dominante, et pour accroître au plus vite la masse des forces productives."
  ],
  "ch2_p61": [
    "Cela ne pourra naturellement s'accomplir au début que par des interventions despotiques dans le droit de propriété et dans les rapports de production bourgeois, c'est-à-dire par des mesures qui apparaissent économiquement insuffisantes et insoutenables, mais qui, au cours du mouvement, se dépassent elles-mêmes et sont inévitables comme moyens de bouleverser l'ensemble du mode de production.",
    "Ces mesures seront naturellement différentes selon les différents pays."
  ],
  "ch2_p62": [
    "Pour les pays les plus avancés, les mesures suivantes pourront toutefois être appliquées assez généralement :"
  ],
  "ch2_p63": [
    "1. Expropriation de la propriété foncière et affectation de la rente foncière aux dépenses de l'État."
  ],
  "ch2_p64": [
    "2. Impôt fortement progressif."
  ],
  "ch2_p65": [
    "3. Abolition du droit d'héritage."
  ],
  "ch2_p66": [
    "4. Confiscation de la propriété de tous les émigrés et rebelles."
  ],
  "ch2_p67": [
    "5. Centralisation du crédit entre les mains de l'État au moyen d'une banque nationale à capital d'État et à monopole exclusif."
  ],
  "ch2_p68": [
    "6. Centralisation de tous les transports entre les mains de l'État."
  ],
  "ch2_p69": [
    "7. Augmentation du nombre des fabriques nationales et des instruments de production, défrichement et amélioration de toutes les terres selon un plan concerté."
  ],
  "ch2_p70": [
    "8. Travail obligatoire pour tous, levée d'armées industrielles, particulièrement pour l'agriculture."
  ],
  "ch2_p71": [
    "9. Unification de l'agriculture et de l'industrie, mesures tendant à éliminer graduellement la différence entre la ville et la campagne."
  ],
  "ch2_p72": [
    "10. Éducation publique et gratuite de tous les enfants.",
    "Abolition du travail des enfants en fabrique sous sa forme actuelle.",
    "Combinaison de l'éducation avec la production matérielle, etc.",
    "Une fois que, dans le cours du développement, les différences de classes ont disparu et que toute la production est concentrée entre les mains des individus associés, le pouvoir public perd son caractère politique.",
    "Le pouvoir politique au sens propre est le pouvoir organisé d'une classe pour l'oppression d'une autre.",
    "Si le prolétariat, dans sa lutte contre la bourgeoisie, s'unit nécessairement en une classe, s'érige par une révolution en classe dominante et, comme classe dominante, abolit violemment les anciens rapports de production, il abolit en même temps que ces rapports de production les conditions d'existence de l'antagonisme des classes, les classes en général, et supprime par là sa propre domination comme classe."
  ],
  "ch2_p73": [
    "À la place de l'ancienne société bourgeoise, avec ses classes et ses antagonismes de classes, surgit une association où le libre développement de chacun est la condition du libre développement de tous."
  ],
};


export const chapter2: Chapter = {
  id: 'ch2',
  titleDe: 'II. Proletarier und Kommunisten',
  titleFr: 'II. Prolétaires et communistes',
  paragraphs: chapter2Paragraphs
};
