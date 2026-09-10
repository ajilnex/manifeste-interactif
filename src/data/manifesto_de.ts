import type { ManifestoData, Word, PartOfSpeech } from '../types';

const w = (
  id: string, text: string, lemma: string, pos: PartOfSpeech, 
  extra: Partial<Word> = {}
): Word => ({
  id, text, lemma, pos, ...extra
});

export const manifestoData: ManifestoData = {
  chapters: [
    {
      id: 'ch0',
      titleDe: 'Manifest der Kommunistischen Partei',
      titleFr: 'Manifeste du Parti communiste',
      paragraphs: [
        {
          id: 'ch0_p1',
          sentences: [
            {
              id: 'ch0_p1_s1',
              translationFr: "Un spectre hante l'Europe : le spectre du communisme.",
              words: [
                w('ch0_p1_s1_w1', 'Ein', 'ein', 'ART', { case: 'NOM', gender: 'N', number: 'SG' }),
                w('ch0_p1_s1_w2', 'Gespenst', 'Gespenst', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
                w('ch0_p1_s1_w3', 'geht', 'umgehen', 'VERB', { person: 3, number: 'SG', tense: 'PRES', mood: 'IND', separablePrefix: 'um' }),
                w('ch0_p1_s1_w4', 'um', 'umgehen', 'PART'),
                w('ch0_p1_s1_w5', 'in', 'in', 'PREP', { case: 'DAT' }),
                w('ch0_p1_s1_w6', 'Europa', 'Europa', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
                w('ch0_p1_s1_w7', '–', '–', 'PUNCT'),
                w('ch0_p1_s1_w8', 'das', 'der', 'ART', { case: 'NOM', gender: 'N', number: 'SG' }),
                w('ch0_p1_s1_w9', 'Gespenst', 'Gespenst', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
                w('ch0_p1_s1_w10', 'des', 'der', 'ART', { case: 'GEN', gender: 'M', number: 'SG' }),
                w('ch0_p1_s1_w11', 'Kommunismus', 'Kommunismus', 'NOUN', { case: 'GEN', gender: 'M', number: 'SG' }),
                w('ch0_p1_s1_w12', '.', '.', 'PUNCT')
              ]
            },
            {
              id: 'ch0_p1_s2',
              translationFr: "Toutes les puissances de la vieille Europe se sont unies en une Sainte-Alliance pour traquer ce spectre : le pape et le tsar, Metternich et Guizot, les radicaux de France et les policiers d'Allemagne.",
              words: [
                w('ch0_p1_s2_w1', 'Alle', 'all', 'PRON', { case: 'NOM', number: 'PL' }),
                w('ch0_p1_s2_w2', 'Mächte', 'Macht', 'NOUN', { case: 'NOM', gender: 'F', number: 'PL' }),
                w('ch0_p1_s2_w3', 'des', 'der', 'ART', { case: 'GEN', gender: 'N', number: 'SG' }),
                w('ch0_p1_s2_w4', 'alten', 'alt', 'ADJ', { case: 'GEN', gender: 'N', number: 'SG' }),
                w('ch0_p1_s2_w5', 'Europa', 'Europa', 'NOUN', { case: 'GEN', gender: 'N', number: 'SG' }),
                w('ch0_p1_s2_w6', 'haben', 'haben', 'VERB', { person: 3, number: 'PL', tense: 'PRES', mood: 'IND' }),
                w('ch0_p1_s2_w7', 'sich', 'sich', 'PRON', { case: 'ACC', person: 3, number: 'PL' }),
                w('ch0_p1_s2_w8', 'zu', 'zu', 'PREP', { case: 'DAT' }),
                w('ch0_p1_s2_w9', 'einer', 'ein', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch0_p1_s2_w10', 'heiligen', 'heilig', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch0_p1_s2_w11', 'Hetzjagd', 'Hetzjagd', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Hetz', 'Jagd'] }),
                w('ch0_p1_s2_w12', 'gegen', 'gegen', 'PREP', { case: 'ACC' }),
                w('ch0_p1_s2_w13', 'dies', 'dies', 'PRON', { case: 'ACC', gender: 'N', number: 'SG' }),
                w('ch0_p1_s2_w14', 'Gespenst', 'Gespenst', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
                w('ch0_p1_s2_w15', 'verbündet', 'verbünden', 'VERB', { tense: 'PERF' }),
                w('ch0_p1_s2_w16', ':', ':', 'PUNCT'),
                w('ch0_p1_s2_w17', 'der', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'SG' }),
                w('ch0_p1_s2_w18', 'Papst', 'Papst', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
                w('ch0_p1_s2_w19', 'und', 'und', 'CONJ'),
                w('ch0_p1_s2_w20', 'der', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'SG' }),
                w('ch0_p1_s2_w21', 'Zar', 'Zar', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
                w('ch0_p1_s2_w22', ',', ',', 'PUNCT'),
                w('ch0_p1_s2_w23', 'Metternich', 'Metternich', 'NOUN', { case: 'NOM', number: 'SG' }),
                w('ch0_p1_s2_w24', 'und', 'und', 'CONJ'),
                w('ch0_p1_s2_w25', 'Guizot', 'Guizot', 'NOUN', { case: 'NOM', number: 'SG' }),
                w('ch0_p1_s2_w26', ',', ',', 'PUNCT'),
                w('ch0_p1_s2_w27', 'französische', 'französisch', 'ADJ', { case: 'NOM', number: 'PL' }),
                w('ch0_p1_s2_w28', 'Radikale', 'Radikale', 'NOUN', { case: 'NOM', number: 'PL' }),
                w('ch0_p1_s2_w29', 'und', 'und', 'CONJ'),
                w('ch0_p1_s2_w30', 'deutsche', 'deutsch', 'ADJ', { case: 'NOM', number: 'PL' }),
                w('ch0_p1_s2_w31', 'Polizisten', 'Polizist', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
                w('ch0_p1_s2_w32', '.', '.', 'PUNCT')
              ]
            }
          ]
        },
        {
          id: 'ch0_p2',
          sentences: [
            {
              id: 'ch0_p2_s1',
              translationFr: "Quelle est l'opposition qui n'a pas été accusée de communisme par ses adversaires au pouvoir ?",
              words: [
                w('ch0_p2_s1_w1', 'Wo', 'wo', 'ADV'),
                w('ch0_p2_s1_w2', 'ist', 'sein', 'VERB', { person: 3, number: 'SG', tense: 'PRES' }),
                w('ch0_p2_s1_w3', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch0_p2_s1_w4', 'Oppositionspartei', 'Oppositionspartei', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG', isCompound: true }),
                w('ch0_p2_s1_w5', ',', ',', 'PUNCT'),
                w('ch0_p2_s1_w6', 'die', 'der', 'PRON', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch0_p2_s1_w7', 'nicht', 'nicht', 'PART'),
                w('ch0_p2_s1_w8', 'von', 'von', 'PREP', { case: 'DAT' }),
                w('ch0_p2_s1_w9', 'ihren', 'ihr', 'PRON', { case: 'DAT', number: 'PL' }),
                w('ch0_p2_s1_w10', 'regierenden', 'regierend', 'ADJ', { case: 'DAT', number: 'PL' }),
                w('ch0_p2_s1_w11', 'Gegnern', 'Gegner', 'NOUN', { case: 'DAT', gender: 'M', number: 'PL' }),
                w('ch0_p2_s1_w12', 'als', 'als', 'CONJ'),
                w('ch0_p2_s1_w13', 'kommunistisch', 'kommunistisch', 'ADJ'),
                w('ch0_p2_s1_w14', 'verschrien', 'verschreien', 'VERB', { tense: 'PERF' }),
                w('ch0_p2_s1_w15', 'worden', 'werden', 'VERB', { tense: 'PERF' }),
                w('ch0_p2_s1_w16', 'wäre', 'sein', 'VERB', { person: 3, number: 'SG', mood: 'SUBJ' }),
                w('ch0_p2_s1_w17', '?', '?', 'PUNCT')
              ]
            },
            {
              id: 'ch0_p2_s2',
              translationFr: "Quelle est l'opposition qui, à son tour, n'a pas renvoyé l'épithète infamante de communiste, tant aux adversaires plus avancés qu'à ses ennemis réactionnaires ?",
              words: [
                w('ch0_p2_s2_w1', 'Wo', 'wo', 'ADV'),
                w('ch0_p2_s2_w2', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch0_p2_s2_w3', 'Oppositionspartei', 'Oppositionspartei', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG', isCompound: true }),
                w('ch0_p2_s2_w4', ',', ',', 'PUNCT'),
                w('ch0_p2_s2_w5', 'die', 'der', 'PRON', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch0_p2_s2_w6', 'den', 'der', 'ART', { case: 'DAT', number: 'PL' }),
                w('ch0_p2_s2_w7', 'fortgeschrittneren', 'fortgeschritten', 'ADJ', { case: 'DAT', number: 'PL' }),
                w('ch0_p2_s2_w8', 'Oppositionsleuten', 'Oppositionsleute', 'NOUN', { case: 'DAT', gender: 'M', number: 'PL', isCompound: true }),
                w('ch0_p2_s2_w9', 'sowohl', 'sowohl', 'CONJ'),
                w('ch0_p2_s2_w10', 'wie', 'wie', 'CONJ'),
                w('ch0_p2_s2_w11', 'ihren', 'ihr', 'PRON', { case: 'DAT', number: 'PL' }),
                w('ch0_p2_s2_w12', 'reaktionären', 'reaktionär', 'ADJ', { case: 'DAT', number: 'PL' }),
                w('ch0_p2_s2_w13', 'Gegnern', 'Gegner', 'NOUN', { case: 'DAT', gender: 'M', number: 'PL' }),
                w('ch0_p2_s2_w14', 'den', 'der', 'ART', { case: 'ACC', gender: 'M', number: 'SG' }),
                w('ch0_p2_s2_w15', 'brandmarkenden', 'brandmarkend', 'ADJ', { case: 'ACC', gender: 'M', number: 'SG' }),
                w('ch0_p2_s2_w16', 'Vorwurf', 'Vorwurf', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG' }),
                w('ch0_p2_s2_w17', 'des', 'der', 'ART', { case: 'GEN', gender: 'M', number: 'SG' }),
                w('ch0_p2_s2_w18', 'Kommunismus', 'Kommunismus', 'NOUN', { case: 'GEN', gender: 'M', number: 'SG' }),
                w('ch0_p2_s2_w19', 'nicht', 'nicht', 'PART'),
                w('ch0_p2_s2_w20', 'zurückgeschleudert', 'zurückschleudern', 'VERB', { tense: 'PERF', separablePrefix: 'zurück' }),
                w('ch0_p2_s2_w21', 'hätte', 'haben', 'VERB', { person: 3, number: 'SG', mood: 'SUBJ' }),
                w('ch0_p2_s2_w22', '?', '?', 'PUNCT')
              ]
            }
          ]
        },
        {
          id: 'ch0_p3',
          sentences: [
            {
              id: 'ch0_p3_s1',
              translationFr: "De ce fait, il résulte un double enseignement.",
              words: [
                w('ch0_p3_s1_w1', 'Zweierlei', 'zweierlei', 'PRON'),
                w('ch0_p3_s1_w2', 'geht', 'hervorgehen', 'VERB', { person: 3, number: 'SG', tense: 'PRES' }),
                w('ch0_p3_s1_w3', 'aus', 'aus', 'PREP', { case: 'DAT' }),
                w('ch0_p3_s1_w4', 'dieser', 'dies', 'PRON', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch0_p3_s1_w5', 'Tatsache', 'Tatsache', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch0_p3_s1_w6', 'hervor', 'hervorgehen', 'PART'),
                w('ch0_p3_s1_w7', '.', '.', 'PUNCT')
              ]
            }
          ]
        },
        {
          id: 'ch0_p4',
          sentences: [
            {
              id: 'ch0_p4_s1',
              translationFr: "Déjà le communisme est reconnu par toutes les puissances d'Europe comme une puissance.",
              words: [
                w('ch0_p4_s1_w1', 'Der', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'SG' }),
                w('ch0_p4_s1_w2', 'Kommunismus', 'Kommunismus', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
                w('ch0_p4_s1_w3', 'wird', 'werden', 'VERB', { person: 3, number: 'SG', tense: 'PRES' }),
                w('ch0_p4_s1_w4', 'bereits', 'bereits', 'ADV'),
                w('ch0_p4_s1_w5', 'von', 'von', 'PREP', { case: 'DAT' }),
                w('ch0_p4_s1_w6', 'allen', 'all', 'PRON', { case: 'DAT', number: 'PL' }),
                w('ch0_p4_s1_w7', 'europäischen', 'europäisch', 'ADJ', { case: 'DAT', number: 'PL' }),
                w('ch0_p4_s1_w8', 'Mächten', 'Macht', 'NOUN', { case: 'DAT', gender: 'F', number: 'PL' }),
                w('ch0_p4_s1_w9', 'als', 'als', 'CONJ'),
                w('ch0_p4_s1_w10', 'eine', 'ein', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch0_p4_s1_w11', 'Macht', 'Macht', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch0_p4_s1_w12', 'anerkannt', 'anerkennen', 'VERB', { tense: 'PERF' }),
                w('ch0_p4_s1_w13', '.', '.', 'PUNCT')
              ]
            }
          ]
        },
        {
          id: 'ch0_p5',
          sentences: [
            {
              id: 'ch0_p5_s1',
              translationFr: "Il est grand temps que les communistes exposent à la face du monde entier, leurs conceptions, leurs buts et leurs tendances ; qu'ils opposent au conte du spectre communiste un manifeste du Parti lui-même.",
              words: [
                w('ch0_p5_s1_w1', 'Es', 'es', 'PRON', { case: 'NOM', gender: 'N', number: 'SG' }),
                w('ch0_p5_s1_w2', 'ist', 'sein', 'VERB', { person: 3, number: 'SG', tense: 'PRES' }),
                w('ch0_p5_s1_w3', 'hohe', 'hoch', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch0_p5_s1_w4', 'Zeit', 'Zeit', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch0_p5_s1_w5', ',', ',', 'PUNCT'),
                w('ch0_p5_s1_w6', 'daß', 'dass', 'CONJ'),
                w('ch0_p5_s1_w7', 'die', 'der', 'ART', { case: 'NOM', number: 'PL' }),
                w('ch0_p5_s1_w8', 'Kommunisten', 'Kommunist', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
                w('ch0_p5_s1_w9', 'ihre', 'ihr', 'PRON', { case: 'ACC', number: 'PL' }),
                w('ch0_p5_s1_w10', 'Anschauungsweise', 'Anschauungsweise', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
                w('ch0_p5_s1_w11', ',', ',', 'PUNCT'),
                w('ch0_p5_s1_w12', 'ihre', 'ihr', 'PRON', { case: 'ACC', number: 'PL' }),
                w('ch0_p5_s1_w13', 'Zwecke', 'Zweck', 'NOUN', { case: 'ACC', gender: 'M', number: 'PL' }),
                w('ch0_p5_s1_w14', ',', ',', 'PUNCT'),
                w('ch0_p5_s1_w15', 'ihre', 'ihr', 'PRON', { case: 'ACC', number: 'PL' }),
                w('ch0_p5_s1_w16', 'Tendenzen', 'Tendenz', 'NOUN', { case: 'ACC', gender: 'F', number: 'PL' }),
                w('ch0_p5_s1_w17', 'vor', 'vor', 'PREP', { case: 'DAT' }),
                w('ch0_p5_s1_w18', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch0_p5_s1_w19', 'ganzen', 'ganz', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch0_p5_s1_w20', 'Welt', 'Welt', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch0_p5_s1_w21', 'offen', 'offen', 'ADJ'),
                w('ch0_p5_s1_w22', 'darlegen', 'darlegen', 'VERB', { person: 3, number: 'PL', tense: 'PRES' }),
                w('ch0_p5_s1_w23', 'und', 'und', 'CONJ'),
                w('ch0_p5_s1_w24', 'dem', 'der', 'ART', { case: 'DAT', gender: 'N', number: 'SG' }),
                w('ch0_p5_s1_w25', 'Märchen', 'Märchen', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
                w('ch0_p5_s1_w26', 'vom', 'von dem', 'PREP', { case: 'DAT' }),
                w('ch0_p5_s1_w27', 'Gespenst', 'Gespenst', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
                w('ch0_p5_s1_w28', 'des', 'der', 'ART', { case: 'GEN', gender: 'M', number: 'SG' }),
                w('ch0_p5_s1_w29', 'Kommunismus', 'Kommunismus', 'NOUN', { case: 'GEN', gender: 'M', number: 'SG' }),
                w('ch0_p5_s1_w30', 'ein', 'ein', 'ART', { case: 'ACC', gender: 'N', number: 'SG' }),
                w('ch0_p5_s1_w31', 'Manifest', 'Manifest', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
                w('ch0_p5_s1_w32', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
                w('ch0_p5_s1_w33', 'Partei', 'Partei', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
                w('ch0_p5_s1_w34', 'selbst', 'selbst', 'PRON'),
                w('ch0_p5_s1_w35', 'entgegenstellen', 'entgegenstellen', 'VERB', { person: 3, number: 'PL', tense: 'PRES' }),
                w('ch0_p5_s1_w36', '.', '.', 'PUNCT')
              ]
            }
          ]
        },
        {
          id: 'ch0_p6',
          sentences: [
            {
              id: 'ch0_p6_s1',
              translationFr: "C'est à cette fin que des communistes de diverses nationalités se sont réunis à Londres et ont rédigé le Manifeste suivant, qui sera publié en anglais, français, allemand, italien, flamand et danois.",
              words: [
                w('ch0_p6_s1_w1', 'Zu', 'zu', 'PREP', { case: 'DAT' }),
                w('ch0_p6_s1_w2', 'diesem', 'dies', 'PRON', { case: 'DAT', gender: 'M', number: 'SG' }),
                w('ch0_p6_s1_w3', 'Zweck', 'Zweck', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
                w('ch0_p6_s1_w4', 'haben', 'haben', 'VERB', { person: 3, number: 'PL', tense: 'PRES' }),
                w('ch0_p6_s1_w5', 'sich', 'sich', 'PRON', { case: 'ACC', number: 'PL' }),
                w('ch0_p6_s1_w6', 'Kommunisten', 'Kommunist', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
                w('ch0_p6_s1_w7', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
                w('ch0_p6_s1_w8', 'verschiedensten', 'verschieden', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
                w('ch0_p6_s1_w9', 'Nationalität', 'Nationalität', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
                w('ch0_p6_s1_w10', 'in', 'in', 'PREP', { case: 'DAT' }),
                w('ch0_p6_s1_w11', 'London', 'London', 'NOUN', { case: 'DAT', number: 'SG' }),
                w('ch0_p6_s1_w12', 'versammelt', 'versammeln', 'VERB', { tense: 'PERF' }),
                w('ch0_p6_s1_w13', 'und', 'und', 'CONJ'),
                w('ch0_p6_s1_w14', 'das', 'der', 'ART', { case: 'ACC', gender: 'N', number: 'SG' }),
                w('ch0_p6_s1_w15', 'folgende', 'folgend', 'ADJ', { case: 'ACC', gender: 'N', number: 'SG' }),
                w('ch0_p6_s1_w16', 'Manifest', 'Manifest', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
                w('ch0_p6_s1_w17', 'entworfen', 'entwerfen', 'VERB', { tense: 'PERF' }),
                w('ch0_p6_s1_w18', ',', ',', 'PUNCT'),
                w('ch0_p6_s1_w19', 'das', 'der', 'PRON', { case: 'NOM', gender: 'N', number: 'SG' }),
                w('ch0_p6_s1_w20', 'in', 'in', 'PREP', { case: 'DAT' }),
                w('ch0_p6_s1_w21', 'englischer', 'englisch', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch0_p6_s1_w22', ',', ',', 'PUNCT'),
                w('ch0_p6_s1_w23', 'französischer', 'französisch', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch0_p6_s1_w24', ',', ',', 'PUNCT'),
                w('ch0_p6_s1_w25', 'deutscher', 'deutsch', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch0_p6_s1_w26', ',', ',', 'PUNCT'),
                w('ch0_p6_s1_w27', 'italienischer', 'italienisch', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch0_p6_s1_w28', ',', ',', 'PUNCT'),
                w('ch0_p6_s1_w29', 'flämischer', 'flämisch', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch0_p6_s1_w30', 'und', 'und', 'CONJ'),
                w('ch0_p6_s1_w31', 'dänischer', 'dänisch', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch0_p6_s1_w32', 'Sprache', 'Sprache', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch0_p6_s1_w33', 'veröffentlicht', 'veröffentlichen', 'VERB', { tense: 'PERF' }),
                w('ch0_p6_s1_w34', 'wird', 'werden', 'VERB', { person: 3, number: 'SG', tense: 'PRES' }),
                w('ch0_p6_s1_w35', '.', '.', 'PUNCT')
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'ch1',
      titleDe: 'I. Bourgeois und Proletarier',
      titleFr: 'I. Bourgeois et Prolétaires',
      paragraphs: [
        {
          id: 'ch1_p1',
          sentences: [
            {
              id: 'ch1_p1_s1',
              translationFr: "L'histoire de toute société jusqu'à nos jours n'a été que l'histoire de luttes de classes.",
              words: [
                w('ch1_p1_s1_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p1_s1_w2', 'Geschichte', 'Geschichte', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p1_s1_w3', 'aller', 'all', 'PRON', { case: 'GEN', gender: 'F', number: 'SG' }),
                w('ch1_p1_s1_w4', 'bisherigen', 'bisherig', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
                w('ch1_p1_s1_w5', 'Gesellschaft', 'Gesellschaft', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
                w('ch1_p1_s1_w6', 'ist', 'sein', 'VERB', { person: 3, number: 'SG', tense: 'PRES' }),
                w('ch1_p1_s1_w7', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p1_s1_w8', 'Geschichte', 'Geschichte', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p1_s1_w9', 'von', 'von', 'PREP', { case: 'DAT' }),
                w('ch1_p1_s1_w10', 'Klassenkämpfen', 'Klassenkampf', 'NOUN', { case: 'DAT', gender: 'M', number: 'PL', isCompound: true, compoundParts: ['Klassen', 'Kämpfen'] }),
                w('ch1_p1_s1_w11', '.', '.', 'PUNCT')
              ]
            }
          ]
        },
        {
          id: 'ch1_p2',
          sentences: [
            {
              id: 'ch1_p2_s1',
              translationFr: "Homme libre et esclave, patricien et plébéien, baron et serf, maître de jurande et compagnon, en un mot oppresseurs et opprimés, en opposition constante, ont mené une guerre ininterrompue, tantôt dissimulée, tantôt ouverte, une guerre qui finissait toujours soit par une transformation révolutionnaire de la société tout entière, soit par la destruction des deux classes en lutte.",
              words: [
                w('ch1_p2_s1_w1', 'Freier', 'Freier', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
                w('ch1_p2_s1_w2', 'und', 'und', 'CONJ'),
                w('ch1_p2_s1_w3', 'Sklave', 'Sklave', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
                w('ch1_p2_s1_w4', ',', ',', 'PUNCT'),
                w('ch1_p2_s1_w5', 'Patrizier', 'Patrizier', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
                w('ch1_p2_s1_w6', 'und', 'und', 'CONJ'),
                w('ch1_p2_s1_w7', 'Plebejer', 'Plebejer', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
                w('ch1_p2_s1_w8', ',', ',', 'PUNCT'),
                w('ch1_p2_s1_w9', 'Baron', 'Baron', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
                w('ch1_p2_s1_w10', 'und', 'und', 'CONJ'),
                w('ch1_p2_s1_w11', 'Leibeigener', 'Leibeigener', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
                w('ch1_p2_s1_w12', ',', ',', 'PUNCT'),
                w('ch1_p2_s1_w13', 'Zunftbürger', 'Zunftbürger', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG', isCompound: true }),
                w('ch1_p2_s1_w14', 'und', 'und', 'CONJ'),
                w('ch1_p2_s1_w15', 'Gesell', 'Gesell', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
                w('ch1_p2_s1_w16', ',', ',', 'PUNCT'),
                w('ch1_p2_s1_w17', 'kurz', 'kurz', 'ADV'),
                w('ch1_p2_s1_w18', ',', ',', 'PUNCT'),
                w('ch1_p2_s1_w19', 'Unterdrücker', 'Unterdrücker', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
                w('ch1_p2_s1_w20', 'und', 'und', 'CONJ'),
                w('ch1_p2_s1_w21', 'Unterdrückte', 'Unterdrückte', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
                w('ch1_p2_s1_w22', 'standen', 'stehen', 'VERB', { person: 3, number: 'PL', tense: 'PAST' }),
                w('ch1_p2_s1_w23', 'in', 'in', 'PREP', { case: 'DAT' }),
                w('ch1_p2_s1_w24', 'stetem', 'stet', 'ADJ', { case: 'DAT', gender: 'M', number: 'SG' }),
                w('ch1_p2_s1_w25', 'Gegensatz', 'Gegensatz', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
                w('ch1_p2_s1_w26', 'zueinander', 'zueinander', 'ADV'),
                w('ch1_p2_s1_w27', ',', ',', 'PUNCT'),
                w('ch1_p2_s1_w28', 'führten', 'führen', 'VERB', { person: 3, number: 'PL', tense: 'PAST' }),
                w('ch1_p2_s1_w29', 'einen', 'ein', 'ART', { case: 'ACC', gender: 'M', number: 'SG' }),
                w('ch1_p2_s1_w30', 'ununterbrochenen', 'ununterbrochen', 'ADJ', { case: 'ACC', gender: 'M', number: 'SG' }),
                w('ch1_p2_s1_w31', ',', ',', 'PUNCT'),
                w('ch1_p2_s1_w32', 'bald', 'bald', 'ADV'),
                w('ch1_p2_s1_w33', 'versteckten', 'versteckt', 'ADJ', { case: 'ACC', gender: 'M', number: 'SG' }),
                w('ch1_p2_s1_w34', ',', ',', 'PUNCT'),
                w('ch1_p2_s1_w35', 'bald', 'bald', 'ADV'),
                w('ch1_p2_s1_w36', 'offenen', 'offen', 'ADJ', { case: 'ACC', gender: 'M', number: 'SG' }),
                w('ch1_p2_s1_w37', 'Kampf', 'Kampf', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG' }),
                w('ch1_p2_s1_w38', ',', ',', 'PUNCT'),
                w('ch1_p2_s1_w39', 'einen', 'ein', 'ART', { case: 'ACC', gender: 'M', number: 'SG' }),
                w('ch1_p2_s1_w40', 'Kampf', 'Kampf', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG' }),
                w('ch1_p2_s1_w41', ',', ',', 'PUNCT'),
                w('ch1_p2_s1_w42', 'der', 'der', 'PRON', { case: 'NOM', gender: 'M', number: 'SG' }),
                w('ch1_p2_s1_w43', 'jedesmal', 'jedesmal', 'ADV'),
                w('ch1_p2_s1_w44', 'mit', 'mit', 'PREP', { case: 'DAT' }),
                w('ch1_p2_s1_w45', 'einer', 'ein', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch1_p2_s1_w46', 'revolutionären', 'revolutionär', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch1_p2_s1_w47', 'Umgestaltung', 'Umgestaltung', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch1_p2_s1_w48', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
                w('ch1_p2_s1_w49', 'ganzen', 'ganz', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
                w('ch1_p2_s1_w50', 'Gesellschaft', 'Gesellschaft', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
                w('ch1_p2_s1_w51', 'endete', 'enden', 'VERB', { person: 3, number: 'SG', tense: 'PAST' }),
                w('ch1_p2_s1_w52', 'oder', 'oder', 'CONJ'),
                w('ch1_p2_s1_w53', 'mit', 'mit', 'PREP', { case: 'DAT' }),
                w('ch1_p2_s1_w54', 'dem', 'der', 'ART', { case: 'DAT', gender: 'M', number: 'SG' }),
                w('ch1_p2_s1_w55', 'gemeinsamen', 'gemeinsam', 'ADJ', { case: 'DAT', gender: 'M', number: 'SG' }),
                w('ch1_p2_s1_w56', 'Untergang', 'Untergang', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
                w('ch1_p2_s1_w57', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'PL' }),
                w('ch1_p2_s1_w58', 'kämpfenden', 'kämpfend', 'ADJ', { case: 'GEN', gender: 'F', number: 'PL' }),
                w('ch1_p2_s1_w59', 'Klassen', 'Klasse', 'NOUN', { case: 'GEN', gender: 'F', number: 'PL' }),
                w('ch1_p2_s1_w60', '.', '.', 'PUNCT')
              ]
            }
          ]
        },
        {
          id: 'ch1_p3',
          sentences: [
            {
              id: 'ch1_p3_s1',
              translationFr: "Dans les premières époques historiques, nous constatons presque partout une organisation complète de la société en classes distinctes, une échelle graduée de conditions sociales.",
              words: [
                w('ch1_p3_s1_w1', 'In', 'in', 'PREP', { case: 'DAT' }),
                w('ch1_p3_s1_w2', 'den', 'der', 'ART', { case: 'DAT', number: 'PL' }),
                w('ch1_p3_s1_w3', 'früheren', 'früh', 'ADJ', { case: 'DAT', number: 'PL' }),
                w('ch1_p3_s1_w4', 'Epochen', 'Epoche', 'NOUN', { case: 'DAT', gender: 'F', number: 'PL' }),
                w('ch1_p3_s1_w5', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
                w('ch1_p3_s1_w6', 'Geschichte', 'Geschichte', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
                w('ch1_p3_s1_w7', 'finden', 'finden', 'VERB', { person: 1, number: 'PL', tense: 'PRES' }),
                w('ch1_p3_s1_w8', 'wir', 'wir', 'PRON', { case: 'NOM', person: 1, number: 'PL' }),
                w('ch1_p3_s1_w9', 'fast', 'fast', 'ADV'),
                w('ch1_p3_s1_w10', 'überall', 'überall', 'ADV'),
                w('ch1_p3_s1_w11', 'eine', 'ein', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
                w('ch1_p3_s1_w12', 'vollständige', 'vollständig', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
                w('ch1_p3_s1_w13', 'Gliederung', 'Gliederung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
                w('ch1_p3_s1_w14', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
                w('ch1_p3_s1_w15', 'Gesellschaft', 'Gesellschaft', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
                w('ch1_p3_s1_w16', 'in', 'in', 'PREP', { case: 'ACC' }),
                w('ch1_p3_s1_w17', 'verschiedene', 'verschieden', 'ADJ', { case: 'ACC', number: 'PL' }),
                w('ch1_p3_s1_w18', 'Stände', 'Stand', 'NOUN', { case: 'ACC', gender: 'M', number: 'PL' }),
                w('ch1_p3_s1_w19', ',', ',', 'PUNCT'),
                w('ch1_p3_s1_w20', 'eine', 'ein', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
                w('ch1_p3_s1_w21', 'mannigfaltige', 'mannigfaltig', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
                w('ch1_p3_s1_w22', 'Abstufung', 'Abstufung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
                w('ch1_p3_s1_w23', 'der', 'der', 'ART', { case: 'GEN', number: 'PL' }),
                w('ch1_p3_s1_w24', 'gesellschaftlichen', 'gesellschaftlich', 'ADJ', { case: 'GEN', number: 'PL' }),
                w('ch1_p3_s1_w25', 'Stellungen', 'Stellung', 'NOUN', { case: 'GEN', gender: 'F', number: 'PL' }),
                w('ch1_p3_s1_w26', '.', '.', 'PUNCT')
              ]
            },
            {
              id: 'ch1_p3_s2',
              translationFr: "Dans la Rome antique, nous trouvons des patriciens, des chevaliers, des plébéiens, des esclaves; au moyen âge, des seigneurs, des vassaux, des maîtres de corporation, des compagnons, des serfs et, de plus, dans chacune de ces classes, une hiérarchie particulière.",
              words: [
                w('ch1_p3_s2_w1', 'Im', 'in dem', 'PREP', { case: 'DAT' }),
                w('ch1_p3_s2_w2', 'alten', 'alt', 'ADJ', { case: 'DAT', gender: 'N', number: 'SG' }),
                w('ch1_p3_s2_w3', 'Rom', 'Rom', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
                w('ch1_p3_s2_w4', 'haben', 'haben', 'VERB', { person: 1, number: 'PL', tense: 'PRES' }),
                w('ch1_p3_s2_w5', 'wir', 'wir', 'PRON', { case: 'NOM', person: 1, number: 'PL' }),
                w('ch1_p3_s2_w6', 'Patrizier', 'Patrizier', 'NOUN', { case: 'ACC', gender: 'M', number: 'PL' }),
                w('ch1_p3_s2_w7', ',', ',', 'PUNCT'),
                w('ch1_p3_s2_w8', 'Ritter', 'Ritter', 'NOUN', { case: 'ACC', gender: 'M', number: 'PL' }),
                w('ch1_p3_s2_w9', ',', ',', 'PUNCT'),
                w('ch1_p3_s2_w10', 'Plebejer', 'Plebejer', 'NOUN', { case: 'ACC', gender: 'M', number: 'PL' }),
                w('ch1_p3_s2_w11', ',', ',', 'PUNCT'),
                w('ch1_p3_s2_w12', 'Sklaven', 'Sklave', 'NOUN', { case: 'ACC', gender: 'M', number: 'PL' }),
                w('ch1_p3_s2_w13', ';', ';', 'PUNCT'),
                w('ch1_p3_s2_w14', 'im', 'in dem', 'PREP', { case: 'DAT' }),
                w('ch1_p3_s2_w15', 'Mittelalter', 'Mittelalter', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
                w('ch1_p3_s2_w16', 'Feudalherren', 'Feudalherr', 'NOUN', { case: 'ACC', gender: 'M', number: 'PL' }),
                w('ch1_p3_s2_w17', ',', ',', 'PUNCT'),
                w('ch1_p3_s2_w18', 'Vasallen', 'Vasall', 'NOUN', { case: 'ACC', gender: 'M', number: 'PL' }),
                w('ch1_p3_s2_w19', ',', ',', 'PUNCT'),
                w('ch1_p3_s2_w20', 'Zunftbürger', 'Zunftbürger', 'NOUN', { case: 'ACC', gender: 'M', number: 'PL' }),
                w('ch1_p3_s2_w21', ',', ',', 'PUNCT'),
                w('ch1_p3_s2_w22', 'Gesellen', 'Gesell', 'NOUN', { case: 'ACC', gender: 'M', number: 'PL' }),
                w('ch1_p3_s2_w23', ',', ',', 'PUNCT'),
                w('ch1_p3_s2_w24', 'Leibeigene', 'Leibeigener', 'NOUN', { case: 'ACC', gender: 'M', number: 'PL' }),
                w('ch1_p3_s2_w25', ',', ',', 'PUNCT'),
                w('ch1_p3_s2_w26', 'und', 'und', 'CONJ'),
                w('ch1_p3_s2_w27', 'fast', 'fast', 'ADV'),
                w('ch1_p3_s2_w28', 'in', 'in', 'PREP', { case: 'DAT' }),
                w('ch1_p3_s2_w29', 'jeder', 'jeder', 'PRON', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch1_p3_s2_w30', 'dieser', 'dies', 'PRON', { case: 'GEN', number: 'PL' }),
                w('ch1_p3_s2_w31', 'Klassen', 'Klasse', 'NOUN', { case: 'GEN', gender: 'F', number: 'PL' }),
                w('ch1_p3_s2_w32', 'wieder', 'wieder', 'ADV'),
                w('ch1_p3_s2_w33', 'besondere', 'besonder', 'ADJ', { case: 'ACC', number: 'PL' }),
                w('ch1_p3_s2_w34', 'Abstufungen', 'Abstufung', 'NOUN', { case: 'ACC', gender: 'F', number: 'PL' }),
                w('ch1_p3_s2_w35', '.', '.', 'PUNCT')
              ]
            }
          ]
        },
        {
          id: 'ch1_p4',
          sentences: [
            {
              id: 'ch1_p4_s1',
              translationFr: "La société bourgeoise moderne, élevée sur les ruines de la société féodale, n'a pas aboli les antagonismes de classes.",
              words: [
                w('ch1_p4_s1_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p4_s1_w2', 'aus', 'aus', 'PREP', { case: 'DAT' }),
                w('ch1_p4_s1_w3', 'dem', 'der', 'ART', { case: 'DAT', gender: 'M', number: 'SG' }),
                w('ch1_p4_s1_w4', 'Untergange', 'Untergang', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
                w('ch1_p4_s1_w5', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
                w('ch1_p4_s1_w6', 'feudalen', 'feudal', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
                w('ch1_p4_s1_w7', 'Gesellschaft', 'Gesellschaft', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
                w('ch1_p4_s1_w8', 'hervorgegangene', 'hervorgegangen', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p4_s1_w9', 'moderne', 'modern', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p4_s1_w10', 'bürgerliche', 'bürgerlich', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p4_s1_w11', 'Gesellschaft', 'Gesellschaft', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p4_s1_w12', 'hat', 'haben', 'VERB', { person: 3, number: 'SG', tense: 'PRES' }),
                w('ch1_p4_s1_w13', 'die', 'der', 'ART', { case: 'ACC', number: 'PL' }),
                w('ch1_p4_s1_w14', 'Klassengegensätze', 'Klassengegensatz', 'NOUN', { case: 'ACC', gender: 'M', number: 'PL', isCompound: true }),
                w('ch1_p4_s1_w15', 'nicht', 'nicht', 'PART'),
                w('ch1_p4_s1_w16', 'aufgehoben', 'aufheben', 'VERB', { tense: 'PERF' }),
                w('ch1_p4_s1_w17', '.', '.', 'PUNCT')
              ]
            },
            {
              id: 'ch1_p4_s2',
              translationFr: "Elle n'a fait que substituer de nouvelles classes, de nouvelles conditions d'oppression, de nouvelles formes de lutte à celles d'autrefois.",
              words: [
                w('ch1_p4_s2_w1', 'Sie', 'sie', 'PRON', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p4_s2_w2', 'hat', 'haben', 'VERB', { person: 3, number: 'SG', tense: 'PRES' }),
                w('ch1_p4_s2_w3', 'nur', 'nur', 'ADV'),
                w('ch1_p4_s2_w4', 'neue', 'neu', 'ADJ', { case: 'ACC', number: 'PL' }),
                w('ch1_p4_s2_w5', 'Klassen', 'Klasse', 'NOUN', { case: 'ACC', gender: 'F', number: 'PL' }),
                w('ch1_p4_s2_w6', ',', ',', 'PUNCT'),
                w('ch1_p4_s2_w7', 'neue', 'neu', 'ADJ', { case: 'ACC', number: 'PL' }),
                w('ch1_p4_s2_w8', 'Bedingungen', 'Bedingung', 'NOUN', { case: 'ACC', gender: 'F', number: 'PL' }),
                w('ch1_p4_s2_w9', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
                w('ch1_p4_s2_w10', 'Unterdrückung', 'Unterdrückung', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
                w('ch1_p4_s2_w11', ',', ',', 'PUNCT'),
                w('ch1_p4_s2_w12', 'neue', 'neu', 'ADJ', { case: 'ACC', number: 'PL' }),
                w('ch1_p4_s2_w13', 'Gestaltungen', 'Gestaltung', 'NOUN', { case: 'ACC', gender: 'F', number: 'PL' }),
                w('ch1_p4_s2_w14', 'des', 'der', 'ART', { case: 'GEN', gender: 'M', number: 'SG' }),
                w('ch1_p4_s2_w15', 'Kampfes', 'Kampf', 'NOUN', { case: 'GEN', gender: 'M', number: 'SG' }),
                w('ch1_p4_s2_w16', 'an', 'an', 'PREP', { case: 'ACC' }),
                w('ch1_p4_s2_w17', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
                w('ch1_p4_s2_w18', 'Stelle', 'Stelle', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
                w('ch1_p4_s2_w19', 'der', 'der', 'ART', { case: 'GEN', number: 'PL' }),
                w('ch1_p4_s2_w20', 'alten', 'alt', 'ADJ', { case: 'GEN', number: 'PL' }),
                w('ch1_p4_s2_w21', 'gesetzt', 'setzen', 'VERB', { tense: 'PERF' }),
                w('ch1_p4_s2_w22', '.', '.', 'PUNCT')
              ]
            }
          ]
        },
        {
          id: 'ch1_p5',
          sentences: [
            {
              id: 'ch1_p5_s1',
              translationFr: "Cependant, le caractère distinctif de notre époque, de l'époque de la bourgeoisie, est d'avoir simplifié les antagonismes de classes.",
              words: [
                w('ch1_p5_s1_w1', 'Unsere', 'unser', 'PRON', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p5_s1_w2', 'Epoche', 'Epoche', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p5_s1_w3', ',', ',', 'PUNCT'),
                w('ch1_p5_s1_w4', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p5_s1_w5', 'Epoche', 'Epoche', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p5_s1_w6', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
                w('ch1_p5_s1_w7', 'Bourgeoisie', 'Bourgeoisie', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
                w('ch1_p5_s1_w8', ',', ',', 'PUNCT'),
                w('ch1_p5_s1_w9', 'zeichnet', 'zeichnen', 'VERB', { person: 3, number: 'SG', tense: 'PRES' }),
                w('ch1_p5_s1_w10', 'sich', 'sich', 'PRON', { case: 'ACC', person: 3, number: 'SG' }),
                w('ch1_p5_s1_w11', 'jedoch', 'jedoch', 'ADV'),
                w('ch1_p5_s1_w12', 'dadurch', 'dadurch', 'ADV'),
                w('ch1_p5_s1_w13', 'aus', 'aus', 'PART'),
                w('ch1_p5_s1_w14', ',', ',', 'PUNCT'),
                w('ch1_p5_s1_w15', 'daß', 'dass', 'CONJ'),
                w('ch1_p5_s1_w16', 'sie', 'sie', 'PRON', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p5_s1_w17', 'die', 'der', 'ART', { case: 'ACC', number: 'PL' }),
                w('ch1_p5_s1_w18', 'Klassengegensätze', 'Klassengegensatz', 'NOUN', { case: 'ACC', gender: 'M', number: 'PL' }),
                w('ch1_p5_s1_w19', 'vereinfacht', 'vereinfachen', 'VERB', { tense: 'PERF' }),
                w('ch1_p5_s1_w20', 'hat', 'haben', 'VERB', { person: 3, number: 'SG', tense: 'PRES' }),
                w('ch1_p5_s1_w21', '.', '.', 'PUNCT')
              ]
            },
            {
              id: 'ch1_p5_s2',
              translationFr: "La société se divise de plus en plus en deux vastes camps ennemis, en deux grandes classes diamétralement opposées : la bourgeoisie et le prolétariat.",
              words: [
                w('ch1_p5_s2_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p5_s2_w2', 'ganze', 'ganz', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p5_s2_w3', 'Gesellschaft', 'Gesellschaft', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p5_s2_w4', 'spaltet', 'spalten', 'VERB', { person: 3, number: 'SG', tense: 'PRES' }),
                w('ch1_p5_s2_w5', 'sich', 'sich', 'PRON', { case: 'ACC', person: 3, number: 'SG' }),
                w('ch1_p5_s2_w6', 'mehr', 'mehr', 'ADV'),
                w('ch1_p5_s2_w7', 'und', 'und', 'CONJ'),
                w('ch1_p5_s2_w8', 'mehr', 'mehr', 'ADV'),
                w('ch1_p5_s2_w9', 'in', 'in', 'PREP', { case: 'ACC' }),
                w('ch1_p5_s2_w10', 'zwei', 'zwei', 'NUM'),
                w('ch1_p5_s2_w11', 'große', 'groß', 'ADJ', { case: 'ACC', number: 'PL' }),
                w('ch1_p5_s2_w12', 'feindliche', 'feindlich', 'ADJ', { case: 'ACC', number: 'PL' }),
                w('ch1_p5_s2_w13', 'Lager', 'Lager', 'NOUN', { case: 'ACC', gender: 'N', number: 'PL' }),
                w('ch1_p5_s2_w14', ',', ',', 'PUNCT'),
                w('ch1_p5_s2_w15', 'in', 'in', 'PREP', { case: 'ACC' }),
                w('ch1_p5_s2_w16', 'zwei', 'zwei', 'NUM'),
                w('ch1_p5_s2_w17', 'große', 'groß', 'ADJ', { case: 'ACC', number: 'PL' }),
                w('ch1_p5_s2_w18', ',', ',', 'PUNCT'),
                w('ch1_p5_s2_w19', 'einander', 'einander', 'PRON', { case: 'DAT' }),
                w('ch1_p5_s2_w20', 'direkt', 'direkt', 'ADJ'),
                w('ch1_p5_s2_w21', 'gegenüberstehende', 'gegenüberstehend', 'ADJ', { case: 'ACC', number: 'PL' }),
                w('ch1_p5_s2_w22', 'Klassen', 'Klasse', 'NOUN', { case: 'ACC', gender: 'F', number: 'PL' }),
                w('ch1_p5_s2_w23', ':', ':', 'PUNCT'),
                w('ch1_p5_s2_w24', 'Bourgeoisie', 'Bourgeoisie', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p5_s2_w25', 'und', 'und', 'CONJ'),
                w('ch1_p5_s2_w26', 'Proletariat', 'Proletariat', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
                w('ch1_p5_s2_w27', '.', '.', 'PUNCT')
              ]
            }
          ]
        },
        {
          id: 'ch1_p6',
          sentences: [
            {
              id: 'ch1_p6_s1',
              translationFr: "Des serfs du moyen âge naquirent les bourgeois des premières agglomérations urbaines; de cette population municipale sortirent les premiers éléments de la bourgeoisie.",
              words: [
                w('ch1_p6_s1_w1', 'Aus', 'aus', 'PREP', { case: 'DAT' }),
                w('ch1_p6_s1_w2', 'den', 'der', 'ART', { case: 'DAT', number: 'PL' }),
                w('ch1_p6_s1_w3', 'Leibeigenen', 'Leibeigener', 'NOUN', { case: 'DAT', gender: 'M', number: 'PL' }),
                w('ch1_p6_s1_w4', 'des', 'der', 'ART', { case: 'GEN', gender: 'N', number: 'SG' }),
                w('ch1_p6_s1_w5', 'Mittelalters', 'Mittelalter', 'NOUN', { case: 'GEN', gender: 'N', number: 'SG' }),
                w('ch1_p6_s1_w6', 'gingen', 'hervorgehen', 'VERB', { person: 3, number: 'PL', tense: 'PAST' }),
                w('ch1_p6_s1_w7', 'die', 'der', 'ART', { case: 'NOM', number: 'PL' }),
                w('ch1_p6_s1_w8', 'Pfahlbürger', 'Pfahlbürger', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
                w('ch1_p6_s1_w9', 'der', 'der', 'ART', { case: 'GEN', number: 'PL' }),
                w('ch1_p6_s1_w10', 'ersten', 'erst', 'ADJ', { case: 'GEN', number: 'PL' }),
                w('ch1_p6_s1_w11', 'Städte', 'Stadt', 'NOUN', { case: 'GEN', gender: 'F', number: 'PL' }),
                w('ch1_p6_s1_w12', 'hervor', 'hervorgehen', 'PART'),
                w('ch1_p6_s1_w13', ';', ';', 'PUNCT'),
                w('ch1_p6_s1_w14', 'aus', 'aus', 'PREP', { case: 'DAT' }),
                w('ch1_p6_s1_w15', 'dieser', 'dies', 'PRON', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch1_p6_s1_w16', 'Pfahlbürgerschaft', 'Pfahlbürgerschaft', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch1_p6_s1_w17', 'entwickelten', 'entwickeln', 'VERB', { person: 3, number: 'PL', tense: 'PAST' }),
                w('ch1_p6_s1_w18', 'sich', 'sich', 'PRON', { case: 'ACC', number: 'PL' }),
                w('ch1_p6_s1_w19', 'die', 'der', 'ART', { case: 'NOM', number: 'PL' }),
                w('ch1_p6_s1_w20', 'ersten', 'erst', 'ADJ', { case: 'NOM', number: 'PL' }),
                w('ch1_p6_s1_w21', 'Elemente', 'Element', 'NOUN', { case: 'NOM', gender: 'N', number: 'PL' }),
                w('ch1_p6_s1_w22', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
                w('ch1_p6_s1_w23', 'Bourgeoisie', 'Bourgeoisie', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
                w('ch1_p6_s1_w24', '.', '.', 'PUNCT')
              ]
            }
          ]
        },
        {
          id: 'ch1_p7',
          sentences: [
            {
              id: 'ch1_p7_s1',
              translationFr: "La découverte de l'Amérique, la circumnavigation de l'Afrique offrirent à la bourgeoisie naissante un nouveau champ d'action.",
              words: [
                w('ch1_p7_s1_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p7_s1_w2', 'Entdeckung', 'Entdeckung', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p7_s1_w3', 'Amerikas', 'Amerika', 'NOUN', { case: 'GEN', gender: 'N', number: 'SG' }),
                w('ch1_p7_s1_w4', ',', ',', 'PUNCT'),
                w('ch1_p7_s1_w5', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p7_s1_w6', 'Umschiffung', 'Umschiffung', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p7_s1_w7', 'Afrikas', 'Afrika', 'NOUN', { case: 'GEN', gender: 'N', number: 'SG' }),
                w('ch1_p7_s1_w8', 'schufen', 'schaffen', 'VERB', { person: 3, number: 'PL', tense: 'PAST' }),
                w('ch1_p7_s1_w9', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch1_p7_s1_w10', 'aufkommenden', 'aufkommend', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch1_p7_s1_w11', 'Bourgeoisie', 'Bourgeoisie', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch1_p7_s1_w12', 'ein', 'ein', 'ART', { case: 'ACC', gender: 'N', number: 'SG' }),
                w('ch1_p7_s1_w13', 'neues', 'neu', 'ADJ', { case: 'ACC', gender: 'N', number: 'SG' }),
                w('ch1_p7_s1_w14', 'Terrain', 'Terrain', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
                w('ch1_p7_s1_w15', '.', '.', 'PUNCT')
              ]
            },
            {
              id: 'ch1_p7_s2',
              translationFr: "Les marchés des Indes Orientales et de la Chine, la colonisation de l'Amérique, le commerce colonial, la multiplication des moyens d'échange et, en général, des marchandises donnèrent un essor jusqu'alors inconnu au négoce, à la navigation, à l'industrie et assurèrent, en conséquence, un développement rapide à l'élément révolutionnaire de la société féodale en dissolution.",
              words: [
                w('ch1_p7_s2_w1', 'Der', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'SG' }),
                w('ch1_p7_s2_w2', 'ostindische', 'ostindisch', 'ADJ', { case: 'NOM', gender: 'M', number: 'SG' }),
                w('ch1_p7_s2_w3', 'und', 'und', 'CONJ'),
                w('ch1_p7_s2_w4', 'chinesische', 'chinesisch', 'ADJ', { case: 'NOM', gender: 'M', number: 'SG' }),
                w('ch1_p7_s2_w5', 'Markt', 'Markt', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
                w('ch1_p7_s2_w6', ',', ',', 'PUNCT'),
                w('ch1_p7_s2_w7', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p7_s2_w8', 'Kolonisierung', 'Kolonisierung', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p7_s2_w9', 'von', 'von', 'PREP', { case: 'DAT' }),
                w('ch1_p7_s2_w10', 'Amerika', 'Amerika', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
                w('ch1_p7_s2_w11', ',', ',', 'PUNCT'),
                w('ch1_p7_s2_w12', 'der', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'SG' }),
                w('ch1_p7_s2_w13', 'Austausch', 'Austausch', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
                w('ch1_p7_s2_w14', 'mit', 'mit', 'PREP', { case: 'DAT' }),
                w('ch1_p7_s2_w15', 'den', 'der', 'ART', { case: 'DAT', number: 'PL' }),
                w('ch1_p7_s2_w16', 'Kolonien', 'Kolonie', 'NOUN', { case: 'DAT', gender: 'F', number: 'PL' }),
                w('ch1_p7_s2_w17', ',', ',', 'PUNCT'),
                w('ch1_p7_s2_w18', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p7_s2_w19', 'Vermehrung', 'Vermehrung', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p7_s2_w20', 'der', 'der', 'ART', { case: 'GEN', number: 'PL' }),
                w('ch1_p7_s2_w21', 'Tauschmittel', 'Tauschmittel', 'NOUN', { case: 'GEN', gender: 'N', number: 'PL' }),
                w('ch1_p7_s2_w22', 'und', 'und', 'CONJ'),
                w('ch1_p7_s2_w23', 'der', 'der', 'ART', { case: 'GEN', number: 'PL' }),
                w('ch1_p7_s2_w24', 'Waren', 'Ware', 'NOUN', { case: 'GEN', gender: 'F', number: 'PL' }),
                w('ch1_p7_s2_w25', 'überhaupt', 'überhaupt', 'ADV'),
                w('ch1_p7_s2_w26', 'gaben', 'geben', 'VERB', { person: 3, number: 'PL', tense: 'PAST' }),
                w('ch1_p7_s2_w27', 'dem', 'der', 'ART', { case: 'DAT', gender: 'M', number: 'SG' }),
                w('ch1_p7_s2_w28', 'Handel', 'Handel', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
                w('ch1_p7_s2_w29', ',', ',', 'PUNCT'),
                w('ch1_p7_s2_w30', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch1_p7_s2_w31', 'Schiffahrt', 'Schiffahrt', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch1_p7_s2_w32', ',', ',', 'PUNCT'),
                w('ch1_p7_s2_w33', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch1_p7_s2_w34', 'Industrie', 'Industrie', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch1_p7_s2_w35', 'einen', 'ein', 'ART', { case: 'ACC', gender: 'M', number: 'SG' }),
                w('ch1_p7_s2_w36', 'nie', 'nie', 'ADV'),
                w('ch1_p7_s2_w37', 'gekannten', 'gekannt', 'ADJ', { case: 'ACC', gender: 'M', number: 'SG' }),
                w('ch1_p7_s2_w38', 'Aufschwung', 'Aufschwung', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG' }),
                w('ch1_p7_s2_w39', 'und', 'und', 'CONJ'),
                w('ch1_p7_s2_w40', 'damit', 'damit', 'ADV'),
                w('ch1_p7_s2_w41', 'dem', 'der', 'ART', { case: 'DAT', gender: 'N', number: 'SG' }),
                w('ch1_p7_s2_w42', 'revolutionären', 'revolutionär', 'ADJ', { case: 'DAT', gender: 'N', number: 'SG' }),
                w('ch1_p7_s2_w43', 'Element', 'Element', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
                w('ch1_p7_s2_w44', 'in', 'in', 'PREP', { case: 'DAT' }),
                w('ch1_p7_s2_w45', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch1_p7_s2_w46', 'zerfallenden', 'zerfallend', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch1_p7_s2_w47', 'feudalen', 'feudal', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch1_p7_s2_w48', 'Gesellschaft', 'Gesellschaft', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch1_p7_s2_w49', 'eine', 'ein', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
                w('ch1_p7_s2_w50', 'rasche', 'rasch', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
                w('ch1_p7_s2_w51', 'Entwicklung', 'Entwicklung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
                w('ch1_p7_s2_w52', '.', '.', 'PUNCT')
              ]
            }
          ]
        },
        {
          id: 'ch1_p8',
          sentences: [
            {
              id: 'ch1_p8_s1',
              translationFr: "L'ancien mode d'exploitation féodal ou corporatif de l'industrie ne suffisait plus aux besoins qui croissaient avec les nouveaux marchés.",
              words: [
                w('ch1_p8_s1_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p8_s1_w2', 'bisherige', 'bisherig', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p8_s1_w3', 'feudale', 'feudal', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p8_s1_w4', 'oder', 'oder', 'CONJ'),
                w('ch1_p8_s1_w5', 'zünftige', 'zünftig', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p8_s1_w6', 'Betriebsweise', 'Betriebsweise', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p8_s1_w7', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
                w('ch1_p8_s1_w8', 'Industrie', 'Industrie', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
                w('ch1_p8_s1_w9', 'reichte', 'reichen', 'VERB', { person: 3, number: 'SG', tense: 'PAST' }),
                w('ch1_p8_s1_w10', 'nicht', 'nicht', 'PART'),
                w('ch1_p8_s1_w11', 'mehr', 'mehr', 'ADV'),
                w('ch1_p8_s1_w12', 'aus', 'aus', 'PART'),
                w('ch1_p8_s1_w13', 'für', 'für', 'PREP', { case: 'ACC' }),
                w('ch1_p8_s1_w14', 'den', 'der', 'ART', { case: 'ACC', gender: 'M', number: 'SG' }),
                w('ch1_p8_s1_w15', 'mit', 'mit', 'PREP', { case: 'DAT' }),
                w('ch1_p8_s1_w16', 'den', 'der', 'ART', { case: 'DAT', number: 'PL' }),
                w('ch1_p8_s1_w17', 'neuen', 'neu', 'ADJ', { case: 'DAT', number: 'PL' }),
                w('ch1_p8_s1_w18', 'Märkten', 'Markt', 'NOUN', { case: 'DAT', gender: 'M', number: 'PL' }),
                w('ch1_p8_s1_w19', 'anwachsenden', 'anwachsend', 'ADJ', { case: 'ACC', gender: 'M', number: 'SG' }),
                w('ch1_p8_s1_w20', 'Bedarf', 'Bedarf', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG' }),
                w('ch1_p8_s1_w21', '.', '.', 'PUNCT')
              ]
            },
            {
              id: 'ch1_p8_s2',
              translationFr: "La manufacture prit sa place.",
              words: [
                w('ch1_p8_s2_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p8_s2_w2', 'Manufaktur', 'Manufaktur', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p8_s2_w3', 'trat', 'treten', 'VERB', { person: 3, number: 'SG', tense: 'PAST' }),
                w('ch1_p8_s2_w4', 'an', 'an', 'PREP', { case: 'ACC' }),
                w('ch1_p8_s2_w5', 'ihre', 'ihr', 'PRON', { case: 'ACC', gender: 'F', number: 'SG' }),
                w('ch1_p8_s2_w6', 'Stelle', 'Stelle', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
                w('ch1_p8_s2_w7', '.', '.', 'PUNCT')
              ]
            },
            {
              id: 'ch1_p8_s3',
              translationFr: "Les maîtres de jurande furent refoulés par la classe moyenne industrielle; la division du travail entre les différentes corporations céda la place à la division du travail au sein de l'atelier même.",
              words: [
                w('ch1_p8_s3_w1', 'Die', 'der', 'ART', { case: 'NOM', number: 'PL' }),
                w('ch1_p8_s3_w2', 'Zunftmeister', 'Zunftmeister', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
                w('ch1_p8_s3_w3', 'wurden', 'werden', 'VERB', { person: 3, number: 'PL', tense: 'PAST' }),
                w('ch1_p8_s3_w4', 'verdrängt', 'verdrängen', 'VERB', { tense: 'PERF' }),
                w('ch1_p8_s3_w5', 'durch', 'durch', 'PREP', { case: 'ACC' }),
                w('ch1_p8_s3_w6', 'den', 'der', 'ART', { case: 'ACC', gender: 'M', number: 'SG' }),
                w('ch1_p8_s3_w7', 'industriellen', 'industriell', 'ADJ', { case: 'ACC', gender: 'M', number: 'SG' }),
                w('ch1_p8_s3_w8', 'Mittelstand', 'Mittelstand', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG' }),
                w('ch1_p8_s3_w9', ';', ';', 'PUNCT'),
                w('ch1_p8_s3_w10', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p8_s3_w11', 'Teilung', 'Teilung', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
                w('ch1_p8_s3_w12', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
                w('ch1_p8_s3_w13', 'Arbeit', 'Arbeit', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
                w('ch1_p8_s3_w14', 'zwischen', 'zwischen', 'PREP', { case: 'DAT' }),
                w('ch1_p8_s3_w15', 'den', 'der', 'ART', { case: 'DAT', number: 'PL' }),
                w('ch1_p8_s3_w16', 'verschiedenen', 'verschieden', 'ADJ', { case: 'DAT', number: 'PL' }),
                w('ch1_p8_s3_w17', 'Korporationen', 'Korporation', 'NOUN', { case: 'DAT', gender: 'F', number: 'PL' }),
                w('ch1_p8_s3_w18', 'verschwand', 'verschwinden', 'VERB', { person: 3, number: 'SG', tense: 'PAST' }),
                w('ch1_p8_s3_w19', 'vor', 'vor', 'PREP', { case: 'DAT' }),
                w('ch1_p8_s3_w20', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch1_p8_s3_w21', 'Teilung', 'Teilung', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch1_p8_s3_w22', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
                w('ch1_p8_s3_w23', 'Arbeit', 'Arbeit', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
                w('ch1_p8_s3_w24', 'in', 'in', 'PREP', { case: 'DAT' }),
                w('ch1_p8_s3_w25', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch1_p8_s3_w26', 'einzelnen', 'einzeln', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch1_p8_s3_w27', 'Werkstatt', 'Werkstatt', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
                w('ch1_p8_s3_w28', 'selbst', 'selbst', 'PRON'),
                w('ch1_p8_s3_w29', '.', '.', 'PUNCT')
              ]
            }
          ]
        },
  // Paragraph 9
  {
    id: 'ch1_p9',
    sentences: [
      {
        id: 'ch1_p9_s1',
        translationFr: "Mais les marchés s'agrandissaient sans cesse : les besoins s'accroissaient toujours.",
        words: [
          w('ch1_p9_s1_w1', 'Aber', 'aber', 'CONJ'),
          w('ch1_p9_s1_w2', 'immer', 'immer', 'ADV'),
          w('ch1_p9_s1_w3', 'wuchsen', 'wachsen', 'VERB', { person: 3, number: 'PL', tense: 'PAST', mood: 'IND' }),
          w('ch1_p9_s1_w4', 'die', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch1_p9_s1_w5', 'Märkte', 'Markt', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch1_p9_s1_w6', ',', ',', 'PUNCT'),
          w('ch1_p9_s1_w7', 'immer', 'immer', 'ADV'),
          w('ch1_p9_s1_w8', 'stieg', 'steigen', 'VERB', { person: 3, number: 'SG', tense: 'PAST', mood: 'IND' }),
          w('ch1_p9_s1_w9', 'der', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch1_p9_s1_w10', 'Bedarf', 'Bedarf', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch1_p9_s1_w11', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch1_p9_s2',
        translationFr: "La manufacture, elle-même, ne suffisait plus.",
        words: [
          w('ch1_p9_s2_w1', 'Auch', 'auch', 'ADV'),
          w('ch1_p9_s2_w2', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch1_p9_s2_w3', 'Manufaktur', 'Manufaktur', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch1_p9_s2_w4', 'reichte', 'ausreichen', 'VERB', { person: 3, number: 'SG', tense: 'PAST', mood: 'IND', separablePrefix: 'aus' }),
          w('ch1_p9_s2_w5', 'nicht', 'nicht', 'PART'),
          w('ch1_p9_s2_w6', 'mehr', 'mehr', 'ADV'),
          w('ch1_p9_s2_w7', 'aus', 'ausreichen', 'PART'),
          w('ch1_p9_s2_w8', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch1_p9_s3',
        translationFr: "Alors la vapeur et la machine révolutionnèrent la production industrielle.",
        words: [
          w('ch1_p9_s3_w1', 'Da', 'da', 'ADV'),
          w('ch1_p9_s3_w2', 'revolutionierte', 'revolutionieren', 'VERB', { person: 3, number: 'SG', tense: 'PAST', mood: 'IND' }),
          w('ch1_p9_s3_w3', 'der', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch1_p9_s3_w4', 'Dampf', 'Dampf', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch1_p9_s3_w5', 'und', 'und', 'CONJ'),
          w('ch1_p9_s3_w6', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch1_p9_s3_w7', 'Maschinerie', 'Maschinerie', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch1_p9_s3_w8', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p9_s3_w9', 'industrielle', 'industriell', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p9_s3_w10', 'Produktion', 'Produktion', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p9_s3_w11', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch1_p9_s4',
        translationFr: "La grande industrie moderne supplanta la manufacture ; la classe moyenne industrielle céda la place aux millionnaires de l'industrie, aux chefs de véritables armées industrielles, aux bourgeois modernes.",
        words: [
          w('ch1_p9_s4_w1', 'An', 'an', 'PREP', { case: 'ACC' }),
          w('ch1_p9_s4_w2', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p9_s4_w3', 'Stelle', 'Stelle', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p9_s4_w4', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch1_p9_s4_w5', 'Manufaktur', 'Manufaktur', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch1_p9_s4_w6', 'trat', 'treten', 'VERB', { person: 3, number: 'SG', tense: 'PAST', mood: 'IND' }),
          w('ch1_p9_s4_w7', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch1_p9_s4_w8', 'moderne', 'modern', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch1_p9_s4_w9', 'große', 'groß', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch1_p9_s4_w10', 'Industrie', 'Industrie', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch1_p9_s4_w11', ',', ',', 'PUNCT'),
          w('ch1_p9_s4_w12', 'an', 'an', 'PREP', { case: 'ACC' }),
          w('ch1_p9_s4_w13', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p9_s4_w14', 'Stelle', 'Stelle', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p9_s4_w15', 'des', 'der', 'ART', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch1_p9_s4_w16', 'industriellen', 'industriell', 'ADJ', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch1_p9_s4_w17', 'Mittelstandes', 'Mittelstand', 'NOUN', { case: 'GEN', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Mittel', 'Stand'] }),
          w('ch1_p9_s4_w18', 'traten', 'treten', 'VERB', { person: 3, number: 'PL', tense: 'PAST', mood: 'IND' }),
          w('ch1_p9_s4_w19', 'die', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch1_p9_s4_w20', 'industriellen', 'industriell', 'ADJ', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch1_p9_s4_w21', 'Millionäre', 'Millionär', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch1_p9_s4_w22', ',', ',', 'PUNCT'),
          w('ch1_p9_s4_w23', 'die', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch1_p9_s4_w24', 'Chefs', 'Chef', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch1_p9_s4_w25', 'ganzer', 'ganz', 'ADJ', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch1_p9_s4_w26', 'industrieller', 'industriell', 'ADJ', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch1_p9_s4_w27', 'Armeen', 'Armee', 'NOUN', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch1_p9_s4_w28', ',', ',', 'PUNCT'),
          w('ch1_p9_s4_w29', 'die', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch1_p9_s4_w30', 'modernen', 'modern', 'ADJ', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch1_p9_s4_w31', 'Bourgeois', 'Bourgeois', 'NOUN', { case: 'NOM', gender: 'M', number: 'PL' }),
          w('ch1_p9_s4_w32', '.', '.', 'PUNCT')
        ]
      }
    ]
  },

  // Paragraph 10
  {
    id: 'ch1_p10',
    sentences: [
      {
        id: 'ch1_p10_s1',
        translationFr: "La grande industrie a créé le marché mondial, préparé par la découverte de l'Amérique.",
        words: [
          w('ch1_p10_s1_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch1_p10_s1_w2', 'große', 'groß', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch1_p10_s1_w3', 'Industrie', 'Industrie', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch1_p10_s1_w4', 'hat', 'haben', 'VERB', { person: 3, number: 'SG', tense: 'PRES', mood: 'IND' }),
          w('ch1_p10_s1_w5', 'den', 'der', 'ART', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch1_p10_s1_w6', 'Weltmarkt', 'Weltmarkt', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Welt', 'Markt'] }),
          w('ch1_p10_s1_w7', 'hergestellt', 'herstellen', 'VERB', { tense: 'PERF', separablePrefix: 'her' }),
          w('ch1_p10_s1_w8', ',', ',', 'PUNCT'),
          w('ch1_p10_s1_w9', 'welchen', 'welcher', 'PRON', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch1_p10_s1_w10', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch1_p10_s1_w11', 'Entdeckung', 'Entdeckung', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch1_p10_s1_w12', 'Amerikas', 'Amerika', 'NOUN', { case: 'GEN', gender: 'N', number: 'SG' }),
          w('ch1_p10_s1_w13', 'vorbereitete', 'vorbereiten', 'VERB', { person: 3, number: 'SG', tense: 'PAST', mood: 'IND', separablePrefix: 'vor' }),
          w('ch1_p10_s1_w14', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch1_p10_s2',
        translationFr: "Le marché mondial a donné un essor prodigieux au commerce, à la navigation, aux voies de communication par terre.",
        words: [
          w('ch1_p10_s2_w1', 'Der', 'der', 'ART', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch1_p10_s2_w2', 'Weltmarkt', 'Weltmarkt', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Welt', 'Markt'] }),
          w('ch1_p10_s2_w3', 'hat', 'haben', 'VERB', { person: 3, number: 'SG', tense: 'PRES', mood: 'IND' }),
          w('ch1_p10_s2_w4', 'dem', 'der', 'ART', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch1_p10_s2_w5', 'Handel', 'Handel', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch1_p10_s2_w6', ',', ',', 'PUNCT'),
          w('ch1_p10_s2_w7', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch1_p10_s2_w8', 'Schiffahrt', 'Schiffahrt', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Schiff', 'Fahrt'] }),
          w('ch1_p10_s2_w9', ',', ',', 'PUNCT'),
          w('ch1_p10_s2_w10', 'den', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch1_p10_s2_w11', 'Landkommunikationen', 'Landkommunikation', 'NOUN', { case: 'DAT', gender: 'F', number: 'PL', isCompound: true, compoundParts: ['Land', 'Kommunikation'] }),
          w('ch1_p10_s2_w12', 'eine', 'ein', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p10_s2_w13', 'unermeßliche', 'unermeßlich', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p10_s2_w14', 'Entwicklung', 'Entwicklung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p10_s2_w15', 'gegeben', 'geben', 'VERB', { tense: 'PERF' }),
          w('ch1_p10_s2_w16', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch1_p10_s3',
        translationFr: "Ce développement a réagi à son tour sur l'extension de l'industrie ; et, au fur et à mesure que l'industrie, le commerce, la navigation, les chemins de fer se développaient, la bourgeoisie grandissait, décuplait ses capitaux et reléguait à l'arrière-plan toutes les classes léguées par le moyen âge.",
        words: [
          w('ch1_p10_s3_w1', 'Diese', 'dieser', 'PRON', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch1_p10_s3_w2', 'hat', 'haben', 'VERB', { person: 3, number: 'SG', tense: 'PRES', mood: 'IND' }),
          w('ch1_p10_s3_w3', 'wieder', 'wieder', 'ADV'),
          w('ch1_p10_s3_w4', 'auf', 'auf', 'PREP', { case: 'ACC' }),
          w('ch1_p10_s3_w5', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p10_s3_w6', 'Ausdehnung', 'Ausdehnung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p10_s3_w7', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch1_p10_s3_w8', 'Industrie', 'Industrie', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch1_p10_s3_w9', 'zurückgewirkt', 'zurückwirken', 'VERB', { tense: 'PERF', separablePrefix: 'zurück' }),
          w('ch1_p10_s3_w10', ',', ',', 'PUNCT'),
          w('ch1_p10_s3_w11', 'und', 'und', 'CONJ'),
          w('ch1_p10_s3_w12', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch1_p10_s3_w13', 'demselben', 'derselbe', 'PRON', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch1_p10_s3_w14', 'Maße', 'Maß', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch1_p10_s3_w15', ',', ',', 'PUNCT'),
          w('ch1_p10_s3_w16', 'worin', 'worin', 'ADV'),
          w('ch1_p10_s3_w17', 'Industrie', 'Industrie', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch1_p10_s3_w18', ',', ',', 'PUNCT'),
          w('ch1_p10_s3_w19', 'Handel', 'Handel', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch1_p10_s3_w20', ',', ',', 'PUNCT'),
          w('ch1_p10_s3_w21', 'Schiffahrt', 'Schiffahrt', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Schiff', 'Fahrt'] }),
          w('ch1_p10_s3_w22', ',', ',', 'PUNCT'),
          w('ch1_p10_s3_w23', 'Eisenbahnen', 'Eisenbahn', 'NOUN', { case: 'NOM', gender: 'F', number: 'PL', isCompound: true, compoundParts: ['Eisen', 'Bahn'] }),
          w('ch1_p10_s3_w24', 'sich', 'sich', 'PRON', { case: 'ACC', person: 3, number: 'PL' }),
          w('ch1_p10_s3_w25', 'ausdehnten', 'ausdehnen', 'VERB', { person: 3, number: 'PL', tense: 'PAST', mood: 'IND', separablePrefix: 'aus' }),
          w('ch1_p10_s3_w26', ',', ',', 'PUNCT'),
          w('ch1_p10_s3_w27', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch1_p10_s3_w28', 'demselben', 'derselbe', 'PRON', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch1_p10_s3_w29', 'Maße', 'Maß', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch1_p10_s3_w30', 'entwickelte', 'entwickeln', 'VERB', { person: 3, number: 'SG', tense: 'PAST', mood: 'IND' }),
          w('ch1_p10_s3_w31', 'sich', 'sich', 'PRON', { case: 'ACC', person: 3, number: 'SG' }),
          w('ch1_p10_s3_w32', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch1_p10_s3_w33', 'Bourgeoisie', 'Bourgeoisie', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch1_p10_s3_w34', ',', ',', 'PUNCT'),
          w('ch1_p10_s3_w35', 'vermehrte', 'vermehren', 'VERB', { person: 3, number: 'SG', tense: 'PAST', mood: 'IND' }),
          w('ch1_p10_s3_w36', 'sie', 'sie', 'PRON', { case: 'NOM', gender: 'F', number: 'SG', person: 3 }),
          w('ch1_p10_s3_w37', 'ihre', 'ihr', 'PRON', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch1_p10_s3_w38', 'Kapitalien', 'Kapital', 'NOUN', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch1_p10_s3_w39', ',', ',', 'PUNCT'),
          w('ch1_p10_s3_w40', 'drängte', 'drängen', 'VERB', { person: 3, number: 'SG', tense: 'PAST', mood: 'IND' }),
          w('ch1_p10_s3_w41', 'sie', 'sie', 'PRON', { case: 'NOM', gender: 'F', number: 'SG', person: 3 }),
          w('ch1_p10_s3_w42', 'alle', 'all', 'PRON', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch1_p10_s3_w43', 'vom', 'von', 'PREP', { case: 'DAT' }),
          w('ch1_p10_s3_w44', 'Mittelalter', 'Mittelalter', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG', isCompound: true, compoundParts: ['Mittel', 'Alter'] }),
          w('ch1_p10_s3_w45', 'her', 'her', 'ADV'),
          w('ch1_p10_s3_w46', 'überlieferten', 'überliefert', 'ADJ', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch1_p10_s3_w47', 'Klassen', 'Klasse', 'NOUN', { case: 'ACC', gender: 'F', number: 'PL' }),
          w('ch1_p10_s3_w48', 'in', 'in', 'PREP', { case: 'ACC' }),
          w('ch1_p10_s3_w49', 'den', 'der', 'ART', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch1_p10_s3_w50', 'Hintergrund', 'Hintergrund', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Hinter', 'Grund'] }),
          w('ch1_p10_s3_w51', '.', '.', 'PUNCT')
        ]
      }
    ]
  },

  // Paragraph 11
  {
    id: 'ch1_p11',
    sentences: [
      {
        id: 'ch1_p11_s1',
        translationFr: "La bourgeoisie moderne, nous le voyons, est elle-même le produit d'un long développement, d'une série de révolutions dans les modes de production et d'échange.",
        words: [
          w('ch1_p11_s1_w1', 'Wir', 'wir', 'PRON', { case: 'NOM', person: 1, number: 'PL' }),
          w('ch1_p11_s1_w2', 'sehen', 'sehen', 'VERB', { person: 1, number: 'PL', tense: 'PRES', mood: 'IND' }),
          w('ch1_p11_s1_w3', 'also', 'also', 'ADV'),
          w('ch1_p11_s1_w4', ',', ',', 'PUNCT'),
          w('ch1_p11_s1_w5', 'wie', 'wie', 'CONJ'),
          w('ch1_p11_s1_w6', 'die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch1_p11_s1_w7', 'moderne', 'modern', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch1_p11_s1_w8', 'Bourgeoisie', 'Bourgeoisie', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch1_p11_s1_w9', 'selbst', 'selbst', 'PRON'),
          w('ch1_p11_s1_w10', 'das', 'der', 'ART', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch1_p11_s1_w11', 'Produkt', 'Produkt', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG' }),
          w('ch1_p11_s1_w12', 'eines', 'ein', 'ART', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch1_p11_s1_w13', 'langen', 'lang', 'ADJ', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch1_p11_s1_w14', 'Entwicklungsganges', 'Entwicklungsgang', 'NOUN', { case: 'GEN', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Entwicklungs', 'Gang'] }),
          w('ch1_p11_s1_w15', ',', ',', 'PUNCT'),
          w('ch1_p11_s1_w16', 'einer', 'ein', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch1_p11_s1_w17', 'Reihe', 'Reihe', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch1_p11_s1_w18', 'von', 'von', 'PREP', { case: 'DAT' }),
          w('ch1_p11_s1_w19', 'Umwälzungen', 'Umwälzung', 'NOUN', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch1_p11_s1_w20', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch1_p11_s1_w21', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch1_p11_s1_w22', 'Produktions-', 'Produktionsweise', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Produktions', 'Weise'] }),
          w('ch1_p11_s1_w23', 'und', 'und', 'CONJ'),
          w('ch1_p11_s1_w24', 'Verkehrsweise', 'Verkehrsweise', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Verkehrs', 'Weise'] }),
          w('ch1_p11_s1_w25', 'ist', 'sein', 'VERB', { person: 3, number: 'SG', tense: 'PRES', mood: 'IND' }),
          w('ch1_p11_s1_w26', '.', '.', 'PUNCT')
        ]
      }
    ]
  },

  // Paragraph 12
  {
    id: 'ch1_p12',
    sentences: [
      {
        id: 'ch1_p12_s1',
        translationFr: "Chaque étape de l'évolution parcourue par la bourgeoisie s'accompagnait d'un progrès politique correspondant.",
        words: [
          w('ch1_p12_s1_w1', 'Jede', 'jeder', 'PRON', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch1_p12_s1_w2', 'dieser', 'dieser', 'PRON', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch1_p12_s1_w3', 'Entwicklungsstufen', 'Entwicklungsstufe', 'NOUN', { case: 'GEN', gender: 'F', number: 'PL', isCompound: true, compoundParts: ['Entwicklungs', 'Stufe'] }),
          w('ch1_p12_s1_w4', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch1_p12_s1_w5', 'Bourgeoisie', 'Bourgeoisie', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch1_p12_s1_w6', 'war', 'sein', 'VERB', { person: 3, number: 'SG', tense: 'PAST', mood: 'IND' }),
          w('ch1_p12_s1_w7', 'begleitet', 'begleiten', 'VERB', { tense: 'PERF' }),
          w('ch1_p12_s1_w8', 'von', 'von', 'PREP', { case: 'DAT' }),
          w('ch1_p12_s1_w9', 'einem', 'ein', 'ART', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch1_p12_s1_w10', 'entsprechenden', 'entsprechend', 'ADJ', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch1_p12_s1_w11', 'politischen', 'politisch', 'ADJ', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch1_p12_s1_w12', 'Fortschritte', 'Fortschritt', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Fort', 'Schritt'] }),
          w('ch1_p12_s1_w13', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch1_p12_s2',
        translationFr: "Ordre opprimé sous le pouvoir des seigneurs féodaux, association armée s'administrant elle-même dans la commune, ici république urbaine indépendante, là tiers état taillable et corvéable de la monarchie, puis, durant la période manufacturière, contrepoids de la noblesse dans les monarchies féodales ou absolues, pierre angulaire des grandes monarchies en général, la bourgeoisie, depuis l'établissement de la grande industrie et du marché mondial, s'est enfin emparée de la souveraineté politique exclusive dans l'État représentatif moderne.",
        words: [
          w('ch1_p12_s2_w1', 'Unterdrückter', 'unterdrückt', 'ADJ', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch1_p12_s2_w2', 'Stand', 'Stand', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch1_p12_s2_w3', 'unter', 'unter', 'PREP', { case: 'DAT' }),
          w('ch1_p12_s2_w4', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch1_p12_s2_w5', 'Herrschaft', 'Herrschaft', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch1_p12_s2_w6', 'der', 'der', 'ART', { case: 'GEN', gender: 'M', number: 'PL' }),
          w('ch1_p12_s2_w7', 'Feudalherren', 'Feudalherr', 'NOUN', { case: 'GEN', gender: 'M', number: 'PL', isCompound: true, compoundParts: ['Feudal', 'Herr'] }),
          w('ch1_p12_s2_w8', ',', ',', 'PUNCT'),
          w('ch1_p12_s2_w9', 'bewaffnete', 'bewaffnet', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch1_p12_s2_w10', 'und', 'und', 'CONJ'),
          w('ch1_p12_s2_w11', 'sich', 'sich', 'PRON', { case: 'ACC', person: 3, number: 'SG' }),
          w('ch1_p12_s2_w12', 'selbst', 'selbst', 'PRON'),
          w('ch1_p12_s2_w13', 'verwaltende', 'verwaltend', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch1_p12_s2_w14', 'Assoziation', 'Assoziation', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch1_p12_s2_w15', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch1_p12_s2_w16', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch1_p12_s2_w17', 'Kommune', 'Kommune', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch1_p12_s2_w18', ',', ',', 'PUNCT'),
          w('ch1_p12_s2_w19', 'hier', 'hier', 'ADV'),
          w('ch1_p12_s2_w20', 'unabhängige', 'unabhängig', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch1_p12_s2_w21', 'städtische', 'städtisch', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch1_p12_s2_w22', 'Republik', 'Republik', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch1_p12_s2_w23', ',', ',', 'PUNCT'),
          w('ch1_p12_s2_w24', 'dort', 'dort', 'ADV'),
          w('ch1_p12_s2_w25', 'dritter', 'dritt', 'ADJ', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch1_p12_s2_w26', 'steuerpflichtiger', 'steuerpflichtig', 'ADJ', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch1_p12_s2_w27', 'Stand', 'Stand', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch1_p12_s2_w28', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch1_p12_s2_w29', 'Monarchie', 'Monarchie', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch1_p12_s2_w30', ',', ',', 'PUNCT'),
          w('ch1_p12_s2_w31', 'dann', 'dann', 'ADV'),
          w('ch1_p12_s2_w32', 'zur', 'zu', 'PREP', { case: 'DAT' }),
          w('ch1_p12_s2_w33', 'Zeit', 'Zeit', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch1_p12_s2_w34', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch1_p12_s2_w35', 'Manufaktur', 'Manufaktur', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch1_p12_s2_w36', 'Gegengewicht', 'Gegengewicht', 'NOUN', { case: 'NOM', gender: 'N', number: 'SG', isCompound: true, compoundParts: ['Gegen', 'Gewicht'] }),
          w('ch1_p12_s2_w37', 'gegen', 'gegen', 'PREP', { case: 'ACC' }),
          w('ch1_p12_s2_w38', 'den', 'der', 'ART', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch1_p12_s2_w39', 'Adel', 'Adel', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch1_p12_s2_w40', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch1_p12_s2_w41', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch1_p12_s2_w42', 'ständischen', 'ständisch', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch1_p12_s2_w43', 'oder', 'oder', 'CONJ'),
          w('ch1_p12_s2_w44', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch1_p12_s2_w45', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch1_p12_s2_w46', 'absoluten', 'absolut', 'ADJ', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch1_p12_s2_w47', 'Monarchie', 'Monarchie', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch1_p12_s2_w48', ',', ',', 'PUNCT'),
          w('ch1_p12_s2_w49', 'Hauptgrundlage', 'Hauptgrundlage', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Haupt', 'Grundlage'] }),
          w('ch1_p12_s2_w50', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch1_p12_s2_w51', 'großen', 'groß', 'ADJ', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch1_p12_s2_w52', 'Monarchien', 'Monarchie', 'NOUN', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch1_p12_s2_w53', 'überhaupt', 'überhaupt', 'ADV'),
          w('ch1_p12_s2_w54', ',', ',', 'PUNCT'),
          w('ch1_p12_s2_w55', 'erkämpfte', 'erkämpfen', 'VERB', { person: 3, number: 'SG', tense: 'PAST', mood: 'IND' }),
          w('ch1_p12_s2_w56', 'sie', 'sie', 'PRON', { case: 'NOM', gender: 'F', number: 'SG', person: 3 }),
          w('ch1_p12_s2_w57', 'sich', 'sich', 'PRON', { case: 'DAT', person: 3, number: 'SG' }),
          w('ch1_p12_s2_w58', 'endlich', 'endlich', 'ADV'),
          w('ch1_p12_s2_w59', 'seit', 'seit', 'PREP', { case: 'DAT' }),
          w('ch1_p12_s2_w60', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch1_p12_s2_w61', 'Herstellung', 'Herstellung', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch1_p12_s2_w62', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch1_p12_s2_w63', 'großen', 'groß', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch1_p12_s2_w64', 'Industrie', 'Industrie', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch1_p12_s2_w65', 'und', 'und', 'CONJ'),
          w('ch1_p12_s2_w66', 'des', 'der', 'ART', { case: 'GEN', gender: 'M', number: 'SG' }),
          w('ch1_p12_s2_w67', 'Weltmarktes', 'Weltmarkt', 'NOUN', { case: 'GEN', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Welt', 'Markt'] }),
          w('ch1_p12_s2_w68', 'im', 'in', 'PREP', { case: 'DAT' }),
          w('ch1_p12_s2_w69', 'modernen', 'modern', 'ADJ', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch1_p12_s2_w70', 'Repräsentativstaat', 'Repräsentativstaat', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Repräsentativ', 'Staat'] }),
          w('ch1_p12_s2_w71', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p12_s2_w72', 'ausschließliche', 'ausschließlich', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p12_s2_w73', 'politische', 'politisch', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p12_s2_w74', 'Herrschaft', 'Herrschaft', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p12_s2_w75', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch1_p12_s3',
        translationFr: "Le gouvernement moderne n'est qu'un comité qui gère les affaires communes de la classe bourgeoise tout entière.",
        words: [
          w('ch1_p12_s3_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch1_p12_s3_w2', 'moderne', 'modern', 'ADJ', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch1_p12_s3_w3', 'Staatsgewalt', 'Staatsgewalt', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Staat', 'Gewalt'] }),
          w('ch1_p12_s3_w4', 'ist', 'sein', 'VERB', { person: 3, number: 'SG', tense: 'PRES', mood: 'IND' }),
          w('ch1_p12_s3_w5', 'nur', 'nur', 'ADV'),
          w('ch1_p12_s3_w6', 'ein', 'ein', 'ART', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch1_p12_s3_w7', 'Ausschuß', 'Ausschuss', 'NOUN', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch1_p12_s3_w8', ',', ',', 'PUNCT'),
          w('ch1_p12_s3_w9', 'der', 'der', 'PRON', { case: 'NOM', gender: 'M', number: 'SG' }),
          w('ch1_p12_s3_w10', 'die', 'der', 'ART', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch1_p12_s3_w11', 'gemeinschaftlichen', 'gemeinschaftlich', 'ADJ', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch1_p12_s3_w12', 'Geschäfte', 'Geschäft', 'NOUN', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch1_p12_s3_w13', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch1_p12_s3_w14', 'ganzen', 'ganz', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch1_p12_s3_w15', 'Bourgeoisklasse', 'Bourgeoisklasse', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Bourgeois', 'Klasse'] }),
          w('ch1_p12_s3_w16', 'verwaltet', 'verwalten', 'VERB', { person: 3, number: 'SG', tense: 'PRES', mood: 'IND' }),
          w('ch1_p12_s3_w17', '.', '.', 'PUNCT')
        ]
      }
    ]
  },

  // Paragraph 13
  {
    id: 'ch1_p13',
    sentences: [
      {
        id: 'ch1_p13_s1',
        translationFr: "La bourgeoisie a joué dans l'histoire un rôle éminemment révolutionnaire.",
        words: [
          w('ch1_p13_s1_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch1_p13_s1_w2', 'Bourgeoisie', 'Bourgeoisie', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch1_p13_s1_w3', 'hat', 'haben', 'VERB', { person: 3, number: 'SG', tense: 'PRES', mood: 'IND' }),
          w('ch1_p13_s1_w4', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch1_p13_s1_w5', 'der', 'der', 'ART', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch1_p13_s1_w6', 'Geschichte', 'Geschichte', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch1_p13_s1_w7', 'eine', 'ein', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p13_s1_w8', 'höchst', 'höchst', 'ADV'),
          w('ch1_p13_s1_w9', 'revolutionäre', 'revolutionär', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p13_s1_w10', 'Rolle', 'Rolle', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p13_s1_w11', 'gespielt', 'spielen', 'VERB', { tense: 'PERF' }),
          w('ch1_p13_s1_w12', '.', '.', 'PUNCT')
        ]
      }
    ]
  },

  // Paragraph 14
  {
    id: 'ch1_p14',
    sentences: [
      {
        id: 'ch1_p14_s1',
        translationFr: "Partout où elle a conquis le pouvoir, elle a foulé aux pieds les relations féodales, patriarcales et idylliques.",
        words: [
          w('ch1_p14_s1_w1', 'Die', 'der', 'ART', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch1_p14_s1_w2', 'Bourgeoisie', 'Bourgeoisie', 'NOUN', { case: 'NOM', gender: 'F', number: 'SG' }),
          w('ch1_p14_s1_w3', ',', ',', 'PUNCT'),
          w('ch1_p14_s1_w4', 'wo', 'wo', 'ADV'),
          w('ch1_p14_s1_w5', 'sie', 'sie', 'PRON', { case: 'NOM', gender: 'F', number: 'SG', person: 3 }),
          w('ch1_p14_s1_w6', 'zur', 'zu', 'PREP', { case: 'DAT' }),
          w('ch1_p14_s1_w7', 'Herrschaft', 'Herrschaft', 'NOUN', { case: 'DAT', gender: 'F', number: 'SG' }),
          w('ch1_p14_s1_w8', 'gekommen', 'kommen', 'VERB', { tense: 'PERF' }),
          w('ch1_p14_s1_w9', ',', ',', 'PUNCT'),
          w('ch1_p14_s1_w10', 'hat', 'haben', 'VERB', { person: 3, number: 'SG', tense: 'PRES', mood: 'IND' }),
          w('ch1_p14_s1_w11', 'alle', 'all', 'PRON', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch1_p14_s1_w12', 'feudalen', 'feudal', 'ADJ', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch1_p14_s1_w13', ',', ',', 'PUNCT'),
          w('ch1_p14_s1_w14', 'patriarchalischen', 'patriarchalisch', 'ADJ', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch1_p14_s1_w15', ',', ',', 'PUNCT'),
          w('ch1_p14_s1_w16', 'idyllischen', 'idyllisch', 'ADJ', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch1_p14_s1_w17', 'Verhältnisse', 'Verhältnis', 'NOUN', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch1_p14_s1_w18', 'zerstört', 'zerstören', 'VERB', { tense: 'PERF' }),
          w('ch1_p14_s1_w19', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch1_p14_s2',
        translationFr: "Tous les liens bariolés qui unissaient l'homme féodal à ses supérieurs naturels, elle les a brisés sans pitié pour ne laisser subsister d'autre lien, entre l'homme et l'homme, que le froid intérêt, les dures exigences du « paiement au comptant ».",
        words: [
          w('ch1_p14_s2_w1', 'Sie', 'sie', 'PRON', { case: 'NOM', gender: 'F', number: 'SG', person: 3 }),
          w('ch1_p14_s2_w2', 'hat', 'haben', 'VERB', { person: 3, number: 'SG', tense: 'PRES', mood: 'IND' }),
          w('ch1_p14_s2_w3', 'die', 'der', 'ART', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch1_p14_s2_w4', 'buntscheckigen', 'buntscheckig', 'ADJ', { case: 'ACC', gender: 'N', number: 'PL' }),
          w('ch1_p14_s2_w5', 'Feudalbande', 'Feudalbande', 'NOUN', { case: 'ACC', gender: 'N', number: 'PL', isCompound: true, compoundParts: ['Feudal', 'Band'] }),
          w('ch1_p14_s2_w6', ',', ',', 'PUNCT'),
          w('ch1_p14_s2_w7', 'die', 'der', 'PRON', { case: 'NOM', gender: 'N', number: 'PL' }),
          w('ch1_p14_s2_w8', 'den', 'der', 'ART', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch1_p14_s2_w9', 'Menschen', 'Mensch', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch1_p14_s2_w10', 'an', 'an', 'PREP', { case: 'ACC' }),
          w('ch1_p14_s2_w11', 'seinen', 'sein', 'PRON', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch1_p14_s2_w12', 'natürlichen', 'natürlich', 'ADJ', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch1_p14_s2_w13', 'Vorgesetzten', 'Vorgesetzte', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch1_p14_s2_w14', 'knüpften', 'knüpfen', 'VERB', { person: 3, number: 'PL', tense: 'PAST', mood: 'IND' }),
          w('ch1_p14_s2_w15', ',', ',', 'PUNCT'),
          w('ch1_p14_s2_w16', 'unbarmherzig', 'unbarmherzig', 'ADV'),
          w('ch1_p14_s2_w17', 'zerrissen', 'zerreißen', 'VERB', { tense: 'PERF' }),
          w('ch1_p14_s2_w18', 'und', 'und', 'CONJ'),
          w('ch1_p14_s2_w19', 'kein', 'kein', 'PRON', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch1_p14_s2_w20', 'anderes', 'ander', 'ADJ', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch1_p14_s2_w21', 'Band', 'Band', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch1_p14_s2_w22', 'zwischen', 'zwischen', 'PREP', { case: 'DAT' }),
          w('ch1_p14_s2_w23', 'Mensch', 'Mensch', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch1_p14_s2_w24', 'und', 'und', 'CONJ'),
          w('ch1_p14_s2_w25', 'Mensch', 'Mensch', 'NOUN', { case: 'DAT', gender: 'M', number: 'SG' }),
          w('ch1_p14_s2_w26', 'übriggelassen', 'übriglassen', 'VERB', { tense: 'PERF', separablePrefix: 'übrig' }),
          w('ch1_p14_s2_w27', 'als', 'als', 'CONJ'),
          w('ch1_p14_s2_w28', 'das', 'der', 'ART', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch1_p14_s2_w29', 'nackte', 'nackt', 'ADJ', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch1_p14_s2_w30', 'Interesse', 'Interesse', 'NOUN', { case: 'ACC', gender: 'N', number: 'SG' }),
          w('ch1_p14_s2_w31', ',', ',', 'PUNCT'),
          w('ch1_p14_s2_w32', 'als', 'als', 'CONJ'),
          w('ch1_p14_s2_w33', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p14_s2_w34', 'gefühllose', 'gefühllos', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p14_s2_w35', '»', '»', 'PUNCT'),
          w('ch1_p14_s2_w36', 'bare', 'bar', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p14_s2_w37', 'Zahlung', 'Zahlung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p14_s2_w38', '«', '«', 'PUNCT'),
          w('ch1_p14_s2_w39', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch1_p14_s3',
        translationFr: "Elle a noyé les frissons sacrés de l'extase religieuse, de l'enthousiasme chevaleresque, de la sentimentalité petite-bourgeoise dans les eaux glacées du calcul égoïste.",
        words: [
          w('ch1_p14_s3_w1', 'Sie', 'sie', 'PRON', { case: 'NOM', gender: 'F', number: 'SG', person: 3 }),
          w('ch1_p14_s3_w2', 'hat', 'haben', 'VERB', { person: 3, number: 'SG', tense: 'PRES', mood: 'IND' }),
          w('ch1_p14_s3_w3', 'die', 'der', 'ART', { case: 'ACC', gender: 'M', number: 'PL' }),
          w('ch1_p14_s3_w4', 'heiligen', 'heilig', 'ADJ', { case: 'ACC', gender: 'M', number: 'PL' }),
          w('ch1_p14_s3_w5', 'Schauer', 'Schauer', 'NOUN', { case: 'ACC', gender: 'M', number: 'PL' }),
          w('ch1_p14_s3_w6', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch1_p14_s3_w7', 'frommen', 'fromm', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch1_p14_s3_w8', 'Schwärmerei', 'Schwärmerei', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch1_p14_s3_w9', ',', ',', 'PUNCT'),
          w('ch1_p14_s3_w10', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch1_p14_s3_w11', 'ritterlichen', 'ritterlich', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch1_p14_s3_w12', 'Begeisterung', 'Begeisterung', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch1_p14_s3_w13', ',', ',', 'PUNCT'),
          w('ch1_p14_s3_w14', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch1_p14_s3_w15', 'spießbürgerlichen', 'spießbürgerlich', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch1_p14_s3_w16', 'Wehmut', 'Wehmut', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Weh', 'Mut'] }),
          w('ch1_p14_s3_w17', 'in', 'in', 'PREP', { case: 'DAT' }),
          w('ch1_p14_s3_w18', 'dem', 'der', 'ART', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch1_p14_s3_w19', 'eiskalten', 'eiskalt', 'ADJ', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch1_p14_s3_w20', 'Wasser', 'Wasser', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch1_p14_s3_w21', 'egoistischer', 'egoistisch', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch1_p14_s3_w22', 'Berechnung', 'Berechnung', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch1_p14_s3_w23', 'ertränkt', 'ertränken', 'VERB', { tense: 'PERF' }),
          w('ch1_p14_s3_w24', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch1_p14_s4',
        translationFr: "Elle a dissous la dignité de la personne dans la valeur d'échange et substitué aux innombrables libertés reconnues et chèrement acquises l'unique et impitoyable liberté du commerce.",
        words: [
          w('ch1_p14_s4_w1', 'Sie', 'sie', 'PRON', { case: 'NOM', gender: 'F', number: 'SG', person: 3 }),
          w('ch1_p14_s4_w2', 'hat', 'haben', 'VERB', { person: 3, number: 'SG', tense: 'PRES', mood: 'IND' }),
          w('ch1_p14_s4_w3', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p14_s4_w4', 'persönliche', 'persönlich', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p14_s4_w5', 'Würde', 'Würde', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p14_s4_w6', 'in', 'in', 'PREP', { case: 'ACC' }),
          w('ch1_p14_s4_w7', 'den', 'der', 'ART', { case: 'ACC', gender: 'M', number: 'SG' }),
          w('ch1_p14_s4_w8', 'Tauschwert', 'Tauschwert', 'NOUN', { case: 'ACC', gender: 'M', number: 'SG', isCompound: true, compoundParts: ['Tausch', 'Wert'] }),
          w('ch1_p14_s4_w9', 'aufgelöst', 'auflösen', 'VERB', { tense: 'PERF', separablePrefix: 'auf' }),
          w('ch1_p14_s4_w10', 'und', 'und', 'CONJ'),
          w('ch1_p14_s4_w11', 'an', 'an', 'PREP', { case: 'ACC' }),
          w('ch1_p14_s4_w12', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p14_s4_w13', 'Stelle', 'Stelle', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p14_s4_w14', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch1_p14_s4_w15', 'zahllosen', 'zahllos', 'ADJ', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch1_p14_s4_w16', 'verbrieften', 'verbrieft', 'ADJ', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch1_p14_s4_w17', 'und', 'und', 'CONJ'),
          w('ch1_p14_s4_w18', 'wohlerworbenen', 'wohlerworben', 'ADJ', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch1_p14_s4_w19', 'Freiheiten', 'Freiheit', 'NOUN', { case: 'GEN', gender: 'F', number: 'PL' }),
          w('ch1_p14_s4_w20', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p14_s4_w21', 'eine', 'ein', 'NUM', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p14_s4_w22', 'gewissenlose', 'gewissenlos', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p14_s4_w23', 'Handelsfreiheit', 'Handelsfreiheit', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG', isCompound: true, compoundParts: ['Handel', 'Freiheit'] }),
          w('ch1_p14_s4_w24', 'gesetzt', 'setzen', 'VERB', { tense: 'PERF' }),
          w('ch1_p14_s4_w25', '.', '.', 'PUNCT')
        ]
      },
      {
        id: 'ch1_p14_s5',
        translationFr: "En un mot, à la place de l'exploitation que masquaient les illusions religieuses et politiques, elle a mis une exploitation ouverte, éhontée, directe, brutale.",
        words: [
          w('ch1_p14_s5_w1', 'Sie', 'sie', 'PRON', { case: 'NOM', gender: 'F', number: 'SG', person: 3 }),
          w('ch1_p14_s5_w2', 'hat', 'haben', 'VERB', { person: 3, number: 'SG', tense: 'PRES', mood: 'IND' }),
          w('ch1_p14_s5_w3', ',', ',', 'PUNCT'),
          w('ch1_p14_s5_w4', 'mit', 'mit', 'PREP', { case: 'DAT' }),
          w('ch1_p14_s5_w5', 'einem', 'ein', 'ART', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch1_p14_s5_w6', 'Wort', 'Wort', 'NOUN', { case: 'DAT', gender: 'N', number: 'SG' }),
          w('ch1_p14_s5_w7', ',', ',', 'PUNCT'),
          w('ch1_p14_s5_w8', 'an', 'an', 'PREP', { case: 'ACC' }),
          w('ch1_p14_s5_w9', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p14_s5_w10', 'Stelle', 'Stelle', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p14_s5_w11', 'der', 'der', 'ART', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch1_p14_s5_w12', 'mit', 'mit', 'PREP', { case: 'DAT' }),
          w('ch1_p14_s5_w13', 'religiösen', 'religiös', 'ADJ', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch1_p14_s5_w14', 'und', 'und', 'CONJ'),
          w('ch1_p14_s5_w15', 'politischen', 'politisch', 'ADJ', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch1_p14_s5_w16', 'Illusionen', 'Illusion', 'NOUN', { case: 'DAT', gender: 'F', number: 'PL' }),
          w('ch1_p14_s5_w17', 'verhüllten', 'verhüllt', 'ADJ', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch1_p14_s5_w18', 'Ausbeutung', 'Ausbeutung', 'NOUN', { case: 'GEN', gender: 'F', number: 'SG' }),
          w('ch1_p14_s5_w19', 'die', 'der', 'ART', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p14_s5_w20', 'offene', 'offen', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p14_s5_w21', ',', ',', 'PUNCT'),
          w('ch1_p14_s5_w22', 'unverschämte', 'unverschämt', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p14_s5_w23', ',', ',', 'PUNCT'),
          w('ch1_p14_s5_w24', 'direkte', 'direkt', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p14_s5_w25', ',', ',', 'PUNCT'),
          w('ch1_p14_s5_w26', 'dürre', 'dürr', 'ADJ', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p14_s5_w27', 'Ausbeutung', 'Ausbeutung', 'NOUN', { case: 'ACC', gender: 'F', number: 'SG' }),
          w('ch1_p14_s5_w28', 'gesetzt', 'setzen', 'VERB', { tense: 'PERF' }),
          w('ch1_p14_s5_w29', '.', '.', 'PUNCT')
        ]
      }
    ]
  }
      ]
    }
  ]
};
