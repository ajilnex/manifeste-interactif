import type { Chapter, Paragraph, Word, PartOfSpeech } from '../../types';

const w = (
  id: string,
  text: string,
  lemma: string,
  pos: PartOfSpeech,
  extra: Partial<Word> = {}
): Word => ({
  id,
  text,
  lemma,
  pos,
  ...extra
});

export const chapter4Paragraphs: Paragraph[] = [
  // Paragraph 1
  {
    id: 'ch4_p1',
    sentences: [
      {
        id: 'ch4_p1_s1',
        translationFr: "D’après ce que nous avons dit plus haut (voir Section II), la position des communistes vis-à-vis des partis ouvriers déjà constitués, s’explique d’elle-même, et, partant, leur position vis-à-vis des Chartistes en Angleterre et des réformateurs agraires dans l’Amérique du Nord.",
        words: [
          w('ch4_p1_s1_w1', 'Nach', 'nach', 'PREP', { case: 'DAT' }),
          w('ch4_p1_s1_w2', 'Abschnitt', 'Abschnitt', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch4_p1_s1_w3', 'II', 'II', 'NUM', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch4_p1_s1_w4', 'versteht', 'verstehen', 'VERB', { person: 3, number: 'SG', tense: 'PRES', mood: 'IND' }),
          w('ch4_p1_s1_w5', 'sich', 'sich', 'PRON', { case: 'ACC', person: 3, number: 'SG' }),
          w('ch4_p1_s1_w6', 'das', 'der', 'ART', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch4_p1_s1_w7', 'Verhältnis', 'Verhältnis', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch4_p1_s1_w8', 'der', 'der', 'ART', { case: 'GEN', gender: 'M', number: 'PL' }),
          w('ch4_p1_s1_w9', 'Kommunisten', 'Kommunist', 'NOUN', { case: 'GEN', gender: 'M', number: 'PL' }),
          w('ch4_p1_s1_w10', 'zu', 'zu', 'PREP', { case: 'DAT' }),
          w('ch4_p1_s1_w11', 'den', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch4_p1_s1_w12', 'bereits', 'bereits', 'ADV'),
          w('ch4_p1_s1_w13', 'konstituierten', 'konstituiert', 'ADJ', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch4_p1_s1_w14', 'Arbeiterparteien', 'Arbeiterpartei', 'NOUN', { case: 'DAT', gender: 'F', number: 'PL', isCompound: true, compoundParts: ['Arbeiter', 'Partei'] }),
          w('ch4_p1_s1_w15', 'von', 'von', 'PREP', { case: 'DAT' }),
          w('ch4_p1_s1_w16', 'selbst', 'selbst', 'ADV'),
          w('ch4_p1_s1_w17', ',', ',', 'PUNCT'),
          w('ch4_p1_s1_w18', 'also', 'also', 'ADV'),
          w('ch4_p1_s1_w19', 'ihr', 'ihr', 'PRON', { case: 'NOM', gender: 'N', number: 'SG', person: 3 }),
          w('ch4_p1_s1_w20', 'Verhältnis', 'Verhältnis', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch4_p1_s1_w21', 'zu', 'zu', 'PREP', { case: 'DAT' }),
          w('ch4_p1_s1_w22', 'den', 'der', 'ART', { case: 'DAT', gender: 'M', number: 'PL' }),
          w('ch4_p1_s1_w23', 'Chartisten', 'Chartist', 'NOUN', { case: 'DAT', gender: 'M', number: 'PL' }),
          w('ch4_p1_s1_w24', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch4_p1_s1_w25', 'England', 'England', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch4_p1_s1_w26', 'und', 'und', 'CONJ'),
          w('ch4_p1_s1_w27', 'den', 'der', 'ART', { case: 'DAT', gender: 'M', number: 'PL' }),
          w('ch4_p1_s1_w28', 'agrarischen', 'agrarisch', 'ADJ', { case: 'DAT', gender: 'M', number: 'PL' }),
          w('ch4_p1_s1_w29', 'Reformern', 'Reformer', 'NOUN', { case: 'DAT', gender: 'M', number: 'PL' }),
          w('ch4_p1_s1_w30', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch4_p1_s1_w31', 'Nordamerika', 'Nordamerika', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG', isCompound: true, compoundParts: ['Nord', 'Amerika'] }),
          w('ch4_p1_s1_w32', '.', '.', 'PUNCT')
        ]
      }
    ]
  },
  // Paragraph 2
  {
    id: 'ch4_p2',
    sentences: [
      {
        id: 'ch4_p2_s1',
        translationFr: "Ils combattent pour les intérêts et les buts immédiats de la classe ouvrière, mais dans le mouvement du présent, ils défendent et représentent en même temps l’avenir du mouvement.",
        words: [
          w('ch4_p2_s1_w1', 'Sie', 'sie', 'PRON', { case: 'NOM', number: 'PL', person: 3 }),
          w('ch4_p2_s1_w2', 'kämpfen', 'kämpfen', 'VERB', { person: 3, number: 'PL', tense: 'PRES', mood: 'IND' }),
          w('ch4_p2_s1_w3', 'für', 'für', 'PREP', { case: 'ACC' }),
          w('ch4_p2_s1_w4', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p2_s1_w5', 'Erreichung', 'Erreichung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p2_s1_w6', 'der', 'der', 'ART', { case: 'GEN', gender: 'M', number: 'PL' }),
          w('ch4_p2_s1_w7', 'unmittelbar', 'unmittelbar', 'ADV'),
          w('ch4_p2_s1_w8', 'vorliegenden', 'vorliegend', 'ADJ', { case: 'GEN', gender: 'M', number: 'PL' }),
          w('ch4_p2_s1_w9', 'Zwecke', 'Zweck', 'NOUN', { case: 'GEN', gender: 'M', number: 'PL' }),
          w('ch4_p2_s1_w10', 'und', 'und', 'CONJ'),
          w('ch4_p2_s1_w11', 'Interessen', 'Interesse', 'NOUN', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch4_p2_s1_w12', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch4_p2_s1_w13', 'Arbeiterklasse', 'Arbeiterklasse', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Arbeiter', 'Klasse'] }),
          w('ch4_p2_s1_w14', ',', ',', 'PUNCT'),
          w('ch4_p2_s1_w15', 'aber', 'aber', 'CONJ'),
          w('ch4_p2_s1_w16', 'sie', 'sie', 'PRON', { case: 'NOM', number: 'PL', person: 3 }),
          w('ch4_p2_s1_w17', 'vertreten', 'vertreten', 'VERB', { person: 3, number: 'PL', tense: 'PRES', mood: 'IND' }),
          w('ch4_p2_s1_w18', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch4_p2_s1_w19', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch4_p2_s1_w20', 'gegenwärtigen', 'gegenwärtig', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch4_p2_s1_w21', 'Bewegung', 'Bewegung', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch4_p2_s1_w22', 'zugleich', 'zugleich', 'ADV'),
          w('ch4_p2_s1_w23', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p2_s1_w24', 'Zukunft', 'Zukunft', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p2_s1_w25', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch4_p2_s1_w26', 'Bewegung', 'Bewegung', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch4_p2_s1_w27', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch4_p2_s2',
        translationFr: "En France, les communistes se rallient au parti démocrate-socialiste contre la bourgeoisie conservatrice et radicale, tout en se réservant le droit de critiquer les phrases et les illusions léguées par la tradition révolutionnaire.",
        words: [
          w('ch4_p2_s2_w1', 'In', 'in', 'PREP', { case: 'DAT' }),
          w('ch4_p2_s2_w2', 'Frankreich', 'Frankreich', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch4_p2_s2_w3', 'schließen', 'anschließen', 'VERB', { person: 3, number: 'PL', tense: 'PRES', mood: 'IND', separablePrefix: 'an' }),
          w('ch4_p2_s2_w4', 'sich', 'sich', 'PRON', { case: 'ACC', person: 3, number: 'PL' }),
          w('ch4_p2_s2_w5', 'die', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch4_p2_s2_w6', 'Kommunisten', 'Kommunist', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch4_p2_s2_w7', 'an', 'an', 'PREP', { case: 'ACC' }),
          w('ch4_p2_s2_w8', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p2_s2_w9', 'sozial-demokratische', 'sozial-demokratisch', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['sozial', 'demokratisch'] }),
          w('ch4_p2_s2_w10', 'Partei', 'Partei', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p2_s2_w11', 'an', 'anschließen', 'PART'),
          w('ch4_p2_s2_w12', 'gegen', 'gegen', 'PREP', { case: 'ACC' }),
          w('ch4_p2_s2_w13', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p2_s2_w14', 'konservative', 'konservativ', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p2_s2_w15', 'und', 'und', 'CONJ'),
          w('ch4_p2_s2_w16', 'radikale', 'radikal', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p2_s2_w17', 'Bourgeoisie', 'Bourgeoisie', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p2_s2_w18', ',', ',', 'PUNCT'),
          w('ch4_p2_s2_w19', 'ohne', 'ohne', 'CONJ'),
          w('ch4_p2_s2_w20', 'darum', 'darum', 'ADV'),
          w('ch4_p2_s2_w21', 'das', 'der', 'ART', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch4_p2_s2_w22', 'Recht', 'Recht', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch4_p2_s2_w23', 'aufzugeben', 'aufgeben', 'VERB', { separablePrefix: 'auf' }),
          w('ch4_p2_s2_w24', ',', ',', 'PUNCT'),
          w('ch4_p2_s2_w25', 'sich', 'sich', 'PRON', { case: 'ACC', person: 3, number: 'PL' }),
          w('ch4_p2_s2_w26', 'kritisch', 'kritisch', 'ADV'),
          w('ch4_p2_s2_w27', 'zu', 'zu', 'PREP', { case: 'DAT' }),
          w('ch4_p2_s2_w28', 'den', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch4_p2_s2_w29', 'aus', 'aus', 'PREP', { case: 'DAT' }),
          w('ch4_p2_s2_w30', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch4_p2_s2_w31', 'revolutionären', 'revolutionär', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch4_p2_s2_w32', 'Überlieferung', 'Überlieferung', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch4_p2_s2_w33', 'herrührenden', 'herrührend', 'ADJ', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch4_p2_s2_w34', 'Phrasen', 'Phrase', 'NOUN', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch4_p2_s2_w35', 'und', 'und', 'CONJ'),
          w('ch4_p2_s2_w36', 'Illusionen', 'Illusion', 'NOUN', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch4_p2_s2_w37', 'zu', 'zu', 'PART'),
          w('ch4_p2_s2_w38', 'verhalten', 'verhalten', 'VERB'),
          w('ch4_p2_s2_w39', '.', '.', 'PUNCT')
        ]
      }
    ]
  },
  // Paragraph 3
  {
    id: 'ch4_p3',
    sentences: [
      {
        id: 'ch4_p3_s1',
        translationFr: "En Suisse ils appuient les radicaux, sans méconnaître que ce parti se compose d’éléments contradictoires, moitié de démocrates socialistes, dans l’acception française du mot, moitié de bourgeois radicaux.",
        words: [
          w('ch4_p3_s1_w1', 'In', 'in', 'PREP', { case: 'DAT' }),
          w('ch4_p3_s1_w2', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch4_p3_s1_w3', 'Schweiz', 'Schweiz', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch4_p3_s1_w4', 'unterstützen', 'unterstützen', 'VERB', { person: 3, number: 'PL', tense: 'PRES', mood: 'IND' }),
          w('ch4_p3_s1_w5', 'sie', 'sie', 'PRON', { case: 'NOM', number: 'PL', person: 3 }),
          w('ch4_p3_s1_w6', 'die', 'der', 'ART', { case: 'ACC', gender: 'M', number: 'PL' }),
          w('ch4_p3_s1_w7', 'Radikalen', 'Radikale', 'NOUN', { case: 'ACC', gender: 'M', number: 'PL' }),
          w('ch4_p3_s1_w8', ',', ',', 'PUNCT'),
          w('ch4_p3_s1_w9', 'ohne', 'ohne', 'CONJ'),
          w('ch4_p3_s1_w10', 'zu', 'zu', 'PART'),
          w('ch4_p3_s1_w11', 'verkennen', 'verkennen', 'VERB'),
          w('ch4_p3_s1_w12', ',', ',', 'PUNCT'),
          w('ch4_p3_s1_w13', 'daß', 'dass', 'CONJ'),
          w('ch4_p3_s1_w14', 'diese', 'dieser', 'PRON', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch4_p3_s1_w15', 'Partei', 'Partei', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch4_p3_s1_w16', 'aus', 'aus', 'PREP', { case: 'DAT' }),
          w('ch4_p3_s1_w17', 'widersprechenden', 'widersprechend', 'ADJ', { case: 'DAT', gender: 'N', number: 'PL' }),
          w('ch4_p3_s1_w18', 'Elementen', 'Element', 'NOUN', { case: 'DAT', gender: 'N', number: 'PL' }),
          w('ch4_p3_s1_w19', 'besteht', 'bestehen', 'VERB', { person: 3, number: 'SG', tense: 'PRES', mood: 'IND' }),
          w('ch4_p3_s1_w20', ',', ',', 'PUNCT'),
          w('ch4_p3_s1_w21', 'teils', 'teils', 'ADV'),
          w('ch4_p3_s1_w22', 'aus', 'aus', 'PREP', { case: 'DAT' }),
          w('ch4_p3_s1_w23', 'demokratischen', 'demokratisch', 'ADJ', { case: 'DAT', gender: 'M', number: 'PL' }),
          w('ch4_p3_s1_w24', 'Sozialisten', 'Sozialist', 'NOUN', { case: 'DAT', gender: 'M', number: 'PL' }),
          w('ch4_p3_s1_w25', 'im', 'in', 'PREP', { case: 'DAT' }),
          w('ch4_p3_s1_w26', 'französischen', 'französisch', 'ADJ', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch4_p3_s1_w27', 'Sinn', 'Sinn', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch4_p3_s1_w28', ',', ',', 'PUNCT'),
          w('ch4_p3_s1_w29', 'teils', 'teils', 'ADV'),
          w('ch4_p3_s1_w30', 'aus', 'aus', 'PREP', { case: 'DAT' }),
          w('ch4_p3_s1_w31', 'radikalen', 'radikal', 'ADJ', { case: 'DAT', gender: 'M', number: 'PL' }),
          w('ch4_p3_s1_w32', 'Bourgeois', 'Bourgeois', 'NOUN', { case: 'DAT', gender: 'M', number: 'PL' }),
          w('ch4_p3_s1_w33', '.', '.', 'PUNCT')
        ]
      }
    ]
  },
  // Paragraph 4
  {
    id: 'ch4_p4',
    sentences: [
      {
        id: 'ch4_p4_s1',
        translationFr: "En Pologne les communistes soutiennent le parti qui voit dans une révolution agraire la condition de l’affranchissement national, c’est-à-dire le parti qui fit la révolution de Cracovie en 1846.",
        words: [
          w('ch4_p4_s1_w1', 'Unter', 'unter', 'PREP', { case: 'DAT' }),
          w('ch4_p4_s1_w2', 'den', 'der', 'ART', { case: 'DAT', gender: 'M', number: 'PL' }),
          w('ch4_p4_s1_w3', 'Polen', 'Pole', 'NOUN', { case: 'DAT', gender: 'M', number: 'PL' }),
          w('ch4_p4_s1_w4', 'unterstützen', 'unterstützen', 'VERB', { person: 3, number: 'PL', tense: 'PRES', mood: 'IND' }),
          w('ch4_p4_s1_w5', 'die', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch4_p4_s1_w6', 'Kommunisten', 'Kommunist', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch4_p4_s1_w7', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p4_s1_w8', 'Partei', 'Partei', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p4_s1_w9', ',', ',', 'PUNCT'),
          w('ch4_p4_s1_w10', 'welche', 'welch', 'PRON', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch4_p4_s1_w11', 'eine', 'ein', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p4_s1_w12', 'agrarische', 'agrarisch', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p4_s1_w13', 'Revolution', 'Revolution', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p4_s1_w14', 'zur', 'zu', 'PREP', { case: 'DAT' }),
          w('ch4_p4_s1_w15', 'Bedingung', 'Bedingung', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch4_p4_s1_w16', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch4_p4_s1_w17', 'nationalen', 'national', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch4_p4_s1_w18', 'Befreiung', 'Befreiung', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch4_p4_s1_w19', 'macht', 'machen', 'VERB', { person: 3, number: 'SG', tense: 'PRES', mood: 'IND' }),
          w('ch4_p4_s1_w20', ',', ',', 'PUNCT'),
          w('ch4_p4_s1_w21', 'dieselbe', 'derselbe', 'PRON', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p4_s1_w22', 'Partei', 'Partei', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p4_s1_w23', ',', ',', 'PUNCT'),
          w('ch4_p4_s1_w24', 'welche', 'welch', 'PRON', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch4_p4_s1_w25', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p4_s1_w26', 'Krakauer', 'Krakauer', 'ADJ'),
          w('ch4_p4_s1_w27', 'Insurrektion', 'Insurrektion', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p4_s1_w28', 'von', 'von', 'PREP', { case: 'DAT' }),
          w('ch4_p4_s1_w29', '1846', '1846', 'NUM'),
          w('ch4_p4_s1_w30', 'ins', 'in', 'PREP', { case: 'ACC' }),
          w('ch4_p4_s1_w31', 'Leben', 'Leben', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch4_p4_s1_w32', 'rief', 'rufen', 'VERB', { person: 3, number: 'SG', tense: 'PAST', mood: 'IND' }),
          w('ch4_p4_s1_w33', '.', '.', 'PUNCT')
        ]
      }
    ]
  },
  // Paragraph 5
  {
    id: 'ch4_p5',
    sentences: [
      {
        id: 'ch4_p5_s1',
        translationFr: "En Allemagne le parti communiste lutte d’accord avec la bourgeoisie, toutes les fois que la bourgeoisie agit révolutionnairement, contre la monarchie absolue, la propriété foncière féodale et la petite bourgeoisie.",
        words: [
          w('ch4_p5_s1_w1', 'In', 'in', 'PREP', { case: 'DAT' }),
          w('ch4_p5_s1_w2', 'Deutschland', 'Deutschland', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch4_p5_s1_w3', 'kämpft', 'kämpfen', 'VERB', { person: 3, number: 'SG', tense: 'PRES', mood: 'IND' }),
          w('ch4_p5_s1_w4', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch4_p5_s1_w5', 'Kommunistische', 'kommunistisch', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch4_p5_s1_w6', 'Partei', 'Partei', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch4_p5_s1_w7', ',', ',', 'PUNCT'),
          w('ch4_p5_s1_w8', 'sobald', 'sobald', 'CONJ'),
          w('ch4_p5_s1_w9', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch4_p5_s1_w10', 'Bourgeoisie', 'Bourgeoisie', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch4_p5_s1_w11', 'revolutionär', 'revolutionär', 'ADV'),
          w('ch4_p5_s1_w12', 'auftritt', 'auftreten', 'VERB', { person: 3, number: 'SG', tense: 'PRES', mood: 'IND', separablePrefix: 'auf' }),
          w('ch4_p5_s1_w13', ',', ',', 'PUNCT'),
          w('ch4_p5_s1_w14', 'gemeinsam', 'gemeinsam', 'ADV'),
          w('ch4_p5_s1_w15', 'mit', 'mit', 'PREP', { case: 'DAT' }),
          w('ch4_p5_s1_w16', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch4_p5_s1_w17', 'Bourgeoisie', 'Bourgeoisie', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch4_p5_s1_w18', 'gegen', 'gegen', 'PREP', { case: 'ACC' }),
          w('ch4_p5_s1_w19', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p5_s1_w20', 'absolute', 'absolut', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p5_s1_w21', 'Monarchie', 'Monarchie', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p5_s1_w22', ',', ',', 'PUNCT'),
          w('ch4_p5_s1_w23', 'das', 'der', 'ART', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch4_p5_s1_w24', 'feudale', 'feudal', 'ADJ', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch4_p5_s1_w25', 'Grundeigentum', 'Grundeigentum', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG', isCompound: true, compoundParts: ['Grund', 'Eigentum'] }),
          w('ch4_p5_s1_w26', 'und', 'und', 'CONJ'),
          w('ch4_p5_s1_w27', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p5_s1_w28', 'Kleinbürgerei', 'Kleinbürgerei', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Klein', 'Bürgerei'] }),
          w('ch4_p5_s1_w29', '.', '.', 'PUNCT')
        ]
      }
    ]
  },
  // Paragraph 6
  {
    id: 'ch4_p6',
    sentences: [
      {
        id: 'ch4_p6_s1',
        translationFr: "Mais jamais, à aucun moment, ce parti ne néglige d’éveiller chez les ouvriers une conscience claire et nette de l’antagonisme profond qui existe entre la bourgeoisie et le prolétariat, afin que, l’heure venue, les ouvriers allemands sachent convertir les conditions sociales et politiques, créées par le régime bourgeois, en autant d’armes contre la bourgeoisie ; afin que, sitôt les classes réactionnaires de l’Allemagne détruites, la lutte puisse s’engager contre la bourgeoisie elle-même.",
        words: [
          w('ch4_p6_s1_w1', 'Sie', 'sie', 'PRON', { case: 'NOM', gender: 'F', number: 'SG', person: 3 }),
          w('ch4_p6_s1_w2', 'unterläßt', 'unterlassen', 'VERB', { person: 3, number: 'SG', tense: 'PRES', mood: 'IND' }),
          w('ch4_p6_s1_w3', 'aber', 'aber', 'ADV'),
          w('ch4_p6_s1_w4', 'keinen', 'kein', 'PRON', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch4_p6_s1_w5', 'Augenblick', 'Augenblick', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Auge', 'Blick'] }),
          w('ch4_p6_s1_w6', ',', ',', 'PUNCT'),
          w('ch4_p6_s1_w7', 'bei', 'bei', 'PREP', { case: 'DAT' }),
          w('ch4_p6_s1_w8', 'den', 'der', 'ART', { case: 'DAT', gender: 'M', number: 'PL' }),
          w('ch4_p6_s1_w9', 'Arbeitern', 'Arbeiter', 'NOUN', { case: 'DAT', gender: 'M', number: 'PL' }),
          w('ch4_p6_s1_w10', 'ein', 'ein', 'ART', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch4_p6_s1_w11', 'möglichst', 'möglichst', 'ADV'),
          w('ch4_p6_s1_w12', 'klares', 'klar', 'ADJ', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch4_p6_s1_w13', 'Bewußtsein', 'Bewusstsein', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG', isCompound: true, compoundParts: ['bewusst', 'Sein'] }),
          w('ch4_p6_s1_w14', 'über', 'über', 'PREP', { case: 'ACC' }),
          w('ch4_p6_s1_w15', 'den', 'der', 'ART', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch4_p6_s1_w16', 'feindlichen', 'feindlich', 'ADJ', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch4_p6_s1_w17', 'Gegensatz', 'Gegensatz', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Gegen', 'Satz'] }),
          w('ch4_p6_s1_w18', 'zwischen', 'zwischen', 'PREP', { case: 'DAT' }),
          w('ch4_p6_s1_w19', 'Bourgeoisie', 'Bourgeoisie', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch4_p6_s1_w20', 'und', 'und', 'CONJ'),
          w('ch4_p6_s1_w21', 'Proletariat', 'Proletariat', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch4_p6_s1_w22', 'herauszuarbeiten', 'herausarbeiten', 'VERB', { separablePrefix: 'heraus' }),
          w('ch4_p6_s1_w23', ',', ',', 'PUNCT'),
          w('ch4_p6_s1_w24', 'damit', 'damit', 'CONJ'),
          w('ch4_p6_s1_w25', 'die', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch4_p6_s1_w26', 'deutschen', 'deutsch', 'ADJ', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch4_p6_s1_w27', 'Arbeiter', 'Arbeiter', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch4_p6_s1_w28', 'sogleich', 'sogleich', 'ADV'),
          w('ch4_p6_s1_w29', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch4_p6_s1_w30', 'gesellschaftlichen', 'gesellschaftlich', 'ADJ', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch4_p6_s1_w31', 'und', 'und', 'CONJ'),
          w('ch4_p6_s1_w32', 'politischen', 'politisch', 'ADJ', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch4_p6_s1_w33', 'Bedingungen', 'Bedingung', 'NOUN', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch4_p6_s1_w34', ',', ',', 'PUNCT'),
          w('ch4_p6_s1_w35', 'welche', 'welch', 'PRON', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch4_p6_s1_w36', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch4_p6_s1_w37', 'Bourgeoisie', 'Bourgeoisie', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch4_p6_s1_w38', 'mit', 'mit', 'PREP', { case: 'DAT' }),
          w('ch4_p6_s1_w39', 'ihrer', 'ihr', 'PRON', { case: 'DAT', gender: 'F', number: 'SG', person: 3 }),
          w('ch4_p6_s1_w40', 'Herrschaft', 'Herrschaft', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch4_p6_s1_w41', 'herbeiführen', 'herbeiführen', 'VERB', { separablePrefix: 'herbei' }),
          w('ch4_p6_s1_w42', 'muß', 'müssen', 'VERB', { person: 3, number: 'SG', tense: 'PRES', mood: 'IND' }),
          w('ch4_p6_s1_w43', ',', ',', 'PUNCT'),
          w('ch4_p6_s1_w44', 'als', 'als', 'PREP'),
          w('ch4_p6_s1_w45', 'ebenso', 'ebenso', 'ADV'),
          w('ch4_p6_s1_w46', 'viele', 'viel', 'ADJ', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch4_p6_s1_w47', 'Waffen', 'Waffe', 'NOUN', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch4_p6_s1_w48', 'gegen', 'gegen', 'PREP', { case: 'ACC' }),
          w('ch4_p6_s1_w49', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p6_s1_w50', 'Bourgeoisie', 'Bourgeoisie', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p6_s1_w51', 'kehren', 'kehren', 'VERB'),
          w('ch4_p6_s1_w52', 'können', 'können', 'VERB', { person: 3, number: 'PL', tense: 'PRES', mood: 'IND' }),
          w('ch4_p6_s1_w53', ',', ',', 'PUNCT'),
          w('ch4_p6_s1_w54', 'damit', 'damit', 'CONJ'),
          w('ch4_p6_s1_w55', ',', ',', 'PUNCT'),
          w('ch4_p6_s1_w56', 'nach', 'nach', 'PREP', { case: 'DAT' }),
          w('ch4_p6_s1_w57', 'dem', 'der', 'ART', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch4_p6_s1_w58', 'Sturz', 'Sturz', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch4_p6_s1_w59', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch4_p6_s1_w60', 'reaktionären', 'reaktionär', 'ADJ', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch4_p6_s1_w61', 'Klassen', 'Klasse', 'NOUN', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch4_p6_s1_w62', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch4_p6_s1_w63', 'Deutschland', 'Deutschland', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch4_p6_s1_w64', ',', ',', 'PUNCT'),
          w('ch4_p6_s1_w65', 'sofort', 'sofort', 'ADV'),
          w('ch4_p6_s1_w66', 'der', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch4_p6_s1_w67', 'Kampf', 'Kampf', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch4_p6_s1_w68', 'gegen', 'gegen', 'PREP', { case: 'ACC' }),
          w('ch4_p6_s1_w69', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p6_s1_w70', 'Bourgeoisie', 'Bourgeoisie', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p6_s1_w71', 'selbst', 'selbst', 'ADV'),
          w('ch4_p6_s1_w72', 'beginnt', 'beginnen', 'VERB', { person: 3, number: 'SG', tense: 'PRES', mood: 'IND' }),
          w('ch4_p6_s1_w73', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch4_p6_s2',
        translationFr: "C’est vers l’Allemagne surtout que se tourne l’attention des communistes, parce que l’Allemagne se trouve à la veille d’une révolution bourgeoise, et parce qu’elle accomplira cette révolution dans des conditions plus avancées de la civilisation européenne et avec un prolétariat infiniment plus développé que l’Angleterre et la France n’en possédaient au XVIIe et au XVIIIe siècles, et que, par conséquent, la révolution bourgeoise allemande ne saurait être que le court prélude d’une révolution prolétarienne.",
        words: [
          w('ch4_p6_s2_w1', 'Auf', 'auf', 'PREP', { case: 'ACC' }),
          w('ch4_p6_s2_w2', 'Deutschland', 'Deutschland', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch4_p6_s2_w3', 'richten', 'richten', 'VERB', { person: 3, number: 'PL', tense: 'PRES', mood: 'IND' }),
          w('ch4_p6_s2_w4', 'die', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch4_p6_s2_w5', 'Kommunisten', 'Kommunist', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch4_p6_s2_w6', 'ihre', 'ihr', 'PRON', { case: 'ACC', gender: 'F', number: 'SG', person: 3 }),
          w('ch4_p6_s2_w7', 'Hauptaufmerksamkeit', 'Hauptaufmerksamkeit', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Haupt', 'Aufmerksamkeit'] }),
          w('ch4_p6_s2_w8', ',', ',', 'PUNCT'),
          w('ch4_p6_s2_w9', 'weil', 'weil', 'CONJ'),
          w('ch4_p6_s2_w10', 'Deutschland', 'Deutschland', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch4_p6_s2_w11', 'am', 'an', 'PREP', { case: 'DAT' }),
          w('ch4_p6_s2_w12', 'Vorabend', 'Vorabend', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Vor', 'Abend'] }),
          w('ch4_p6_s2_w13', 'einer', 'ein', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch4_p6_s2_w14', 'bürgerlichen', 'bürgerlich', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch4_p6_s2_w15', 'Revolution', 'Revolution', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch4_p6_s2_w16', 'steht', 'stehen', 'VERB', { person: 3, number: 'SG', tense: 'PRES', mood: 'IND' }),
          w('ch4_p6_s2_w17', 'und', 'und', 'CONJ'),
          w('ch4_p6_s2_w18', 'weil', 'weil', 'CONJ'),
          w('ch4_p6_s2_w19', 'es', 'es', 'PRON', { case: 'NOM', gender: 'N', number: 'SG', person: 3 }),
          w('ch4_p6_s2_w20', 'diese', 'dieser', 'PRON', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p6_s2_w21', 'Umwälzung', 'Umwälzung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Um', 'Wälzung'] }),
          w('ch4_p6_s2_w22', 'unter', 'unter', 'PREP', { case: 'DAT' }),
          w('ch4_p6_s2_w23', 'fortgeschrittneren', 'fortgeschritten', 'ADJ', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch4_p6_s2_w24', 'Bedingungen', 'Bedingung', 'NOUN', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch4_p6_s2_w25', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch4_p6_s2_w26', 'europäischen', 'europäisch', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch4_p6_s2_w27', 'Zivilisation', 'Zivilisation', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch4_p6_s2_w28', 'überhaupt', 'überhaupt', 'ADV'),
          w('ch4_p6_s2_w29', 'und', 'und', 'CONJ'),
          w('ch4_p6_s2_w30', 'mit', 'mit', 'PREP', { case: 'DAT' }),
          w('ch4_p6_s2_w31', 'einem', 'ein', 'ART', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch4_p6_s2_w32', 'viel', 'viel', 'ADV'),
          w('ch4_p6_s2_w33', 'weiter', 'weit', 'ADV'),
          w('ch4_p6_s2_w34', 'entwickelten', 'entwickelt', 'ADJ', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch4_p6_s2_w35', 'Proletariat', 'Proletariat', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch4_p6_s2_w36', 'vollbringt', 'vollbringen', 'VERB', { person: 3, number: 'SG', tense: 'PRES', mood: 'IND' }),
          w('ch4_p6_s2_w37', 'als', 'als', 'CONJ'),
          w('ch4_p6_s2_w38', 'England', 'England', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch4_p6_s2_w39', 'im', 'in', 'PREP', { case: 'DAT' }),
          w('ch4_p6_s2_w40', '17.', '17.', 'NUM', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch4_p6_s2_w41', 'und', 'und', 'CONJ'),
          w('ch4_p6_s2_w42', 'Frankreich', 'Frankreich', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch4_p6_s2_w43', 'im', 'in', 'PREP', { case: 'DAT' }),
          w('ch4_p6_s2_w44', '18.', '18.', 'NUM', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch4_p6_s2_w45', 'Jahrhundert', 'Jahrhundert', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG', isCompound: true, compoundParts: ['Jahr', 'Hundert'] }),
          w('ch4_p6_s2_w46', ',', ',', 'PUNCT'),
          w('ch4_p6_s2_w47', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch4_p6_s2_w48', 'deutsche', 'deutsch', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch4_p6_s2_w49', 'bürgerliche', 'bürgerlich', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch4_p6_s2_w50', 'Revolution', 'Revolution', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch4_p6_s2_w51', 'also', 'also', 'ADV'),
          w('ch4_p6_s2_w52', 'nur', 'nur', 'ADV'),
          w('ch4_p6_s2_w53', 'das', 'der', 'ART', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch4_p6_s2_w54', 'unmittelbare', 'unmittelbar', 'ADJ', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch4_p6_s2_w55', 'Vorspiel', 'Vorspiel', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG', isCompound: true, compoundParts: ['Vor', 'Spiel'] }),
          w('ch4_p6_s2_w56', 'einer', 'ein', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch4_p6_s2_w57', 'proletarischen', 'proletarisch', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch4_p6_s2_w58', 'Revolution', 'Revolution', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch4_p6_s2_w59', 'sein', 'sein', 'VERB'),
          w('ch4_p6_s2_w60', 'kann', 'können', 'VERB', { person: 3, number: 'SG', tense: 'PRES', mood: 'IND' }),
          w('ch4_p6_s2_w61', '.', '.', 'PUNCT')
        ]
      }
    ]
  },
  // Paragraph 7
  {
    id: 'ch4_p7',
    sentences: [
      {
        id: 'ch4_p7_s1',
        translationFr: "En somme, les communistes appuient partout tout mouvement révolutionnaire contre l’état de choses social et politique existant.",
        words: [
          w('ch4_p7_s1_w1', 'Mit', 'mit', 'PREP', { case: 'DAT' }),
          w('ch4_p7_s1_w2', 'einem', 'ein', 'ART', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch4_p7_s1_w3', 'Wort', 'Wort', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch4_p7_s1_w4', ',', ',', 'PUNCT'),
          w('ch4_p7_s1_w5', 'die', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch4_p7_s1_w6', 'Kommunisten', 'Kommunist', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch4_p7_s1_w7', 'unterstützen', 'unterstützen', 'VERB', { person: 3, number: 'PL', tense: 'PRES', mood: 'IND' }),
          w('ch4_p7_s1_w8', 'überall', 'überall', 'ADV'),
          w('ch4_p7_s1_w9', 'jede', 'jeder', 'PRON', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p7_s1_w10', 'revolutionäre', 'revolutionär', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p7_s1_w11', 'Bewegung', 'Bewegung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p7_s1_w12', 'gegen', 'gegen', 'PREP', { case: 'ACC' }),
          w('ch4_p7_s1_w13', 'die', 'der', 'ART', { case: 'ACC', gender: 'M', number: 'PL' }),
          w('ch4_p7_s1_w14', 'bestehenden', 'bestehend', 'ADJ', { case: 'ACC', gender: 'M', number: 'PL' }),
          w('ch4_p7_s1_w15', 'gesellschaftlichen', 'gesellschaftlich', 'ADJ', { case: 'ACC', gender: 'M', number: 'PL' }),
          w('ch4_p7_s1_w16', 'und', 'und', 'CONJ'),
          w('ch4_p7_s1_w17', 'politischen', 'politisch', 'ADJ', { case: 'ACC', gender: 'M', number: 'PL' }),
          w('ch4_p7_s1_w18', 'Zustände', 'Zustand', 'NOUN', { case: 'ACC', gender: 'M', number: 'PL' }),
          w('ch4_p7_s1_w19', '.', '.', 'PUNCT')
        ]
      }
    ]
  },
  // Paragraph 8
  {
    id: 'ch4_p8',
    sentences: [
      {
        id: 'ch4_p8_s1',
        translationFr: "Dans tous ces mouvements, ils mettent en avant la question de la propriété, quelle que soit la forme plus ou moins développée qu’elle ait revêtue, comme la question fondamentale du mouvement.",
        words: [
          w('ch4_p8_s1_w1', 'In', 'in', 'PREP', { case: 'DAT' }),
          w('ch4_p8_s1_w2', 'allen', 'all', 'PRON', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch4_p8_s1_w3', 'diesen', 'dieser', 'PRON', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch4_p8_s1_w4', 'Bewegungen', 'Bewegung', 'NOUN', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch4_p8_s1_w5', 'heben', 'hervorheben', 'VERB', { person: 3, number: 'PL', tense: 'PRES', mood: 'IND', separablePrefix: 'hervor' }),
          w('ch4_p8_s1_w6', 'sie', 'sie', 'PRON', { case: 'NOM', number: 'PL', person: 3 }),
          w('ch4_p8_s1_w7', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p8_s1_w8', 'Eigentumsfrage', 'Eigentumsfrage', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Eigentum', 'Frage'] }),
          w('ch4_p8_s1_w9', ',', ',', 'PUNCT'),
          w('ch4_p8_s1_w10', 'welche', 'welch', 'PRON', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p8_s1_w11', 'mehr', 'mehr', 'ADV'),
          w('ch4_p8_s1_w12', 'oder', 'oder', 'CONJ'),
          w('ch4_p8_s1_w13', 'minder', 'minder', 'ADV'),
          w('ch4_p8_s1_w14', 'entwickelte', 'entwickelt', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p8_s1_w15', 'Form', 'Form', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p8_s1_w16', 'sie', 'sie', 'PRON', { case: 'NOM', gender: 'F', number: 'SG', person: 3 }),
          w('ch4_p8_s1_w17', 'auch', 'auch', 'ADV'),
          w('ch4_p8_s1_w18', 'angenommen', 'annehmen', 'VERB', { tense: 'PERF', separablePrefix: 'an' }),
          w('ch4_p8_s1_w19', 'haben', 'haben', 'VERB'),
          w('ch4_p8_s1_w20', 'möge', 'mögen', 'VERB', { person: 3, number: 'SG', tense: 'PRES', mood: 'SUBJ' }),
          w('ch4_p8_s1_w21', ',', ',', 'PUNCT'),
          w('ch4_p8_s1_w22', 'als', 'als', 'PREP'),
          w('ch4_p8_s1_w23', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p8_s1_w24', 'Grundfrage', 'Grundfrage', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Grund', 'Frage'] }),
          w('ch4_p8_s1_w25', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch4_p8_s1_w26', 'Bewegung', 'Bewegung', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch4_p8_s1_w27', 'hervor', 'hervorheben', 'PART'),
          w('ch4_p8_s1_w28', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch4_p8_s2',
        translationFr: "Enfin les communistes travaillent à l’union et à l’entente des partis démocratiques de tous les pays.",
        words: [
          w('ch4_p8_s2_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch4_p8_s2_w2', 'Kommunisten', 'Kommunist', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch4_p8_s2_w3', 'arbeiten', 'arbeiten', 'VERB', { person: 3, number: 'PL', tense: 'PRES', mood: 'IND' }),
          w('ch4_p8_s2_w4', 'endlich', 'endlich', 'ADV'),
          w('ch4_p8_s2_w5', 'überall', 'überall', 'ADV'),
          w('ch4_p8_s2_w6', 'an', 'an', 'PREP', { case: 'DAT' }),
          w('ch4_p8_s2_w7', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch4_p8_s2_w8', 'Verbindung', 'Verbindung', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch4_p8_s2_w9', 'und', 'und', 'CONJ'),
          w('ch4_p8_s2_w10', 'Verständigung', 'Verständigung', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch4_p8_s2_w11', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch4_p8_s2_w12', 'demokratischen', 'demokratisch', 'ADJ', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch4_p8_s2_w13', 'Parteien', 'Partei', 'NOUN', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch4_p8_s2_w14', 'aller', 'all', 'PRON', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch4_p8_s2_w15', 'Länder', 'Land', 'NOUN', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch4_p8_s2_w16', '.', '.', 'PUNCT')
        ]
      }
    ]
  },
  // Paragraph 9
  {
    id: 'ch4_p9',
    sentences: [
      {
        id: 'ch4_p9_s1',
        translationFr: "Les communistes ne s’abaissent pas à dissimuler leurs opinions et leurs buts.",
        words: [
          w('ch4_p9_s1_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch4_p9_s1_w2', 'Kommunisten', 'Kommunist', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch4_p9_s1_w3', 'verschmähen', 'verschmähen', 'VERB', { person: 3, number: 'PL', tense: 'PRES', mood: 'IND' }),
          w('ch4_p9_s1_w4', 'es', 'es', 'PRON', { case: 'ACC', gender: 'N', number: 'SG', person: 3 }),
          w('ch4_p9_s1_w5', ',', ',', 'PUNCT'),
          w('ch4_p9_s1_w6', 'ihre', 'ihr', 'PRON', { case: 'ACC', gender: 'F', number: 'PL', person: 3 }),
          w('ch4_p9_s1_w7', 'Ansichten', 'Ansicht', 'NOUN', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch4_p9_s1_w8', 'und', 'und', 'CONJ'),
          w('ch4_p9_s1_w9', 'Absichten', 'Absicht', 'NOUN', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch4_p9_s1_w10', 'zu', 'zu', 'PART'),
          w('ch4_p9_s1_w11', 'verheimlichen', 'verheimlichen', 'VERB'),
          w('ch4_p9_s1_w12', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch4_p9_s2',
        translationFr: "Ils proclament hautement que ces buts ne pourront être atteints sans le renversement violent de tout ordre social actuel.",
        words: [
          w('ch4_p9_s2_w1', 'Sie', 'sie', 'PRON', { case: 'NOM', number: 'PL', person: 3 }),
          w('ch4_p9_s2_w2', 'erklären', 'erklären', 'VERB', { person: 3, number: 'PL', tense: 'PRES', mood: 'IND' }),
          w('ch4_p9_s2_w3', 'es', 'es', 'PRON', { case: 'ACC', gender: 'N', number: 'SG', person: 3 }),
          w('ch4_p9_s2_w4', 'offen', 'offen', 'ADV'),
          w('ch4_p9_s2_w5', ',', ',', 'PUNCT'),
          w('ch4_p9_s2_w6', 'daß', 'dass', 'CONJ'),
          w('ch4_p9_s2_w7', 'ihre', 'ihr', 'PRON', { case: 'NOM', gender: 'M', number: 'PL', person: 3 }),
          w('ch4_p9_s2_w8', 'Zwecke', 'Zweck', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch4_p9_s2_w9', 'nur', 'nur', 'ADV'),
          w('ch4_p9_s2_w10', 'erreicht', 'erreichen', 'VERB', { tense: 'PERF' }),
          w('ch4_p9_s2_w11', 'werden', 'werden', 'VERB'),
          w('ch4_p9_s2_w12', 'können', 'können', 'VERB', { person: 3, number: 'PL', tense: 'PRES', mood: 'IND' }),
          w('ch4_p9_s2_w13', 'durch', 'durch', 'PREP', { case: 'ACC' }),
          w('ch4_p9_s2_w14', 'den', 'der', 'ART', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch4_p9_s2_w15', 'gewaltsamen', 'gewaltsam', 'ADJ', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch4_p9_s2_w16', 'Umsturz', 'Umsturz', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Um', 'Sturz'] }),
          w('ch4_p9_s2_w17', 'aller', 'all', 'PRON', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch4_p9_s2_w18', 'bisherigen', 'bisherig', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch4_p9_s2_w19', 'Gesellschaftsordnung', 'Gesellschaftsordnung', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Gesellschaft', 'Ordnung'] }),
          w('ch4_p9_s2_w20', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch4_p9_s3',
        translationFr: "Que les classes régnantes tremblent à l’idée d’une révolution communiste.",
        words: [
          w('ch4_p9_s3_w1', 'Mögen', 'mögen', 'VERB', { person: 3, number: 'PL', tense: 'PRES', mood: 'SUBJ' }),
          w('ch4_p9_s3_w2', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'PL' }),
          w('ch4_p9_s3_w3', 'herrschenden', 'herrschend', 'ADJ', { case: 'NOM', gender: 'F', number: 'PL' }),
          w('ch4_p9_s3_w4', 'Klassen', 'Klasse', 'NOUN', { case: 'NOM', gender: 'F', number: 'PL' }),
          w('ch4_p9_s3_w5', 'vor', 'vor', 'PREP', { case: 'DAT' }),
          w('ch4_p9_s3_w6', 'einer', 'ein', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch4_p9_s3_w7', 'kommunistischen', 'kommunistisch', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch4_p9_s3_w8', 'Revolution', 'Revolution', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch4_p9_s3_w9', 'zittern', 'zittern', 'VERB'),
          w('ch4_p9_s3_w10', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch4_p9_s4',
        translationFr: "Les prolétaires n’ont rien à y perdre, hors leurs chaînes.",
        words: [
          w('ch4_p9_s4_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch4_p9_s4_w2', 'Proletarier', 'Proletarier', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch4_p9_s4_w3', 'haben', 'haben', 'VERB', { person: 3, number: 'PL', tense: 'PRES', mood: 'IND' }),
          w('ch4_p9_s4_w4', 'nichts', 'nichts', 'PRON', { case: 'ACC' }),
          w('ch4_p9_s4_w5', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch4_p9_s4_w6', 'ihr', 'sie', 'PRON', { case: 'DAT', gender: 'F', number: 'SG', person: 3 }),
          w('ch4_p9_s4_w7', 'zu', 'zu', 'PART'),
          w('ch4_p9_s4_w8', 'verlieren', 'verlieren', 'VERB'),
          w('ch4_p9_s4_w9', 'als', 'als', 'CONJ'),
          w('ch4_p9_s4_w10', 'ihre', 'ihr', 'PRON', { case: 'ACC', gender: 'F', number: 'PL', person: 3 }),
          w('ch4_p9_s4_w11', 'Ketten', 'Kette', 'NOUN', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch4_p9_s4_w12', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch4_p9_s5',
        translationFr: "Ils ont un monde à gagner.",
        words: [
          w('ch4_p9_s5_w1', 'Sie', 'sie', 'PRON', { case: 'NOM', number: 'PL', person: 3 }),
          w('ch4_p9_s5_w2', 'haben', 'haben', 'VERB', { person: 3, number: 'PL', tense: 'PRES', mood: 'IND' }),
          w('ch4_p9_s5_w3', 'eine', 'ein', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p9_s5_w4', 'Welt', 'Welt', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch4_p9_s5_w5', 'zu', 'zu', 'PART'),
          w('ch4_p9_s5_w6', 'gewinnen', 'gewinnen', 'VERB'),
          w('ch4_p9_s5_w7', '.', '.', 'PUNCT')
        ]
      }
    ]
  },
  // Paragraph 10
  {
    id: 'ch4_p10',
    sentences: [
      {
        id: 'ch4_p10_s1',
        translationFr: "Prolétaires de tous les pays, unissez-vous !",
        words: [
          w('ch4_p10_s1_w1', 'Proletarier', 'Proletarier', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch4_p10_s1_w2', 'aller', 'all', 'PRON', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch4_p10_s1_w3', 'Länder', 'Land', 'NOUN', { case: 'GEN', gender: 'N', number: 'PL' }),
          w('ch4_p10_s1_w4', ',', ',', 'PUNCT'),
          w('ch4_p10_s1_w5', 'vereinigt', 'vereinigen', 'VERB', { person: 2, number: 'PL', mood: 'IMP' }),
          w('ch4_p10_s1_w6', 'euch', 'ihr', 'PRON', { case: 'ACC', person: 2, number: 'PL' }),
          w('ch4_p10_s1_w7', '!', '!', 'PUNCT')
        ]
      }
    ]
  }
];

export const chapter4French: Record<string, string[]> = {
  'ch4_p1': [
    "D’après ce que nous avons dit plus haut (voir Section II), la position des communistes vis-à-vis des partis ouvriers déjà constitués, s’explique d’elle-même, et, partant, leur position vis-à-vis des Chartistes en Angleterre et des réformateurs agraires dans l’Amérique du Nord."
  ],
  'ch4_p2': [
    "Ils combattent pour les intérêts et les buts immédiats de la classe ouvrière, mais dans le mouvement du présent, ils défendent et représentent en même temps l’avenir du mouvement.",
    "En France, les communistes se rallient au parti démocrate-socialiste contre la bourgeoisie conservatrice et radicale, tout en se réservant le droit de critiquer les phrases et les illusions léguées par la tradition révolutionnaire."
  ],
  'ch4_p3': [
    "En Suisse ils appuient les radicaux, sans méconnaître que ce parti se compose d’éléments contradictoires, moitié de démocrates socialistes, dans l’acception française du mot, moitié de bourgeois radicaux."
  ],
  'ch4_p4': [
    "En Pologne les communistes soutiennent le parti qui voit dans une révolution agraire la condition de l’affranchissement national, c’est-à-dire le parti qui fit la révolution de Cracovie en 1846."
  ],
  'ch4_p5': [
    "En Allemagne le parti communiste lutte d’accord avec la bourgeoisie, toutes les fois que la bourgeoisie agit révolutionnairement, contre la monarchie absolue, la propriété foncière féodale et la petite bourgeoisie."
  ],
  'ch4_p6': [
    "Mais jamais, à aucun moment, ce parti ne néglige d’éveiller chez les ouvriers une conscience claire et nette de l’antagonisme profond qui existe entre la bourgeoisie et le prolétariat, afin que, l’heure venue, les ouvriers allemands sachent convertir les conditions sociales et politiques, créées par le régime bourgeois, en autant d’armes contre la bourgeoisie ; afin que, sitôt les classes réactionnaires de l’Allemagne détruites, la lutte puisse s’engager contre la bourgeoisie elle-même.",
    "C’est vers l’Allemagne surtout que se tourne l’attention des communistes, parce que l’Allemagne se trouve à la veille d’une révolution bourgeoise, et parce qu’elle accomplira cette révolution dans des conditions plus avancées de la civilisation européenne et avec un prolétariat infiniment plus développé que l’Angleterre et la France n’en possédaient au XVIIe et au XVIIIe siècles, et que, par conséquent, la révolution bourgeoise allemande ne saurait être que le court prélude d’une révolution prolétarienne."
  ],
  'ch4_p7': [
    "En somme, les communistes appuient partout tout mouvement révolutionnaire contre l’état de choses social et politique existant."
  ],
  'ch4_p8': [
    "Dans tous ces mouvements, ils mettent en avant la question de la propriété, quelle que soit la forme plus ou moins développée qu’elle ait revêtue, comme la question fondamentale du mouvement.",
    "Enfin les communistes travaillent à l’union et à l’entente des partis démocratiques de tous les pays."
  ],
  'ch4_p9': [
    "Les communistes ne s’abaissent pas à dissimuler leurs opinions et leurs buts.",
    "Ils proclament hautement que ces buts ne pourront être atteints sans le renversement violent de tout ordre social actuel.",
    "Que les classes régnantes tremblent à l’idée d’une révolution communiste.",
    "Les prolétaires n’ont rien à y perdre, hors leurs chaînes.",
    "Ils ont un monde à gagner."
  ],
  'ch4_p10': [
    "Prolétaires de tous les pays, unissez-vous !"
  ]
};


export const chapter4: Chapter = {
  id: 'ch4',
  titleDe: 'IV. Stellung der Kommunisten zu den verschiedenen oppositionellen Parteien',
  titleFr: 'IV. Position des communistes envers les différents partis d’opposition',
  paragraphs: chapter4Paragraphs
};
