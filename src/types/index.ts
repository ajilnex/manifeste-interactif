// ============================================================
// Types for the Interactive Manifesto
// ============================================================

// --- Text Structure ---

export type PartOfSpeech =
  | 'NOUN'       // Substantiv
  | 'VERB'       // Verb
  | 'ADJ'        // Adjektiv
  | 'ADV'        // Adverb
  | 'ART'        // Artikel
  | 'PRON'       // Pronomen
  | 'PREP'       // Präposition
  | 'CONJ'       // Konjunktion
  | 'PART'       // Partikel
  | 'NUM'        // Numerale
  | 'INTERJ'     // Interjektion
  | 'PUNCT';     // Satzzeichen

export type GrammaticalCase = 'NOM' | 'ACC' | 'DAT' | 'GEN';
export type Gender = 'M' | 'F' | 'N';
export type GrammaticalNumber = 'SG' | 'PL';
export type Tense = 'PRES' | 'PAST' | 'PERF' | 'PLUPERF' | 'FUT';
export type Mood = 'IND' | 'SUBJ' | 'IMP';

export interface Word {
  id: string;
  text: string;
  lemma: string;
  pos: PartOfSpeech;
  case?: GrammaticalCase;
  gender?: Gender;
  number?: GrammaticalNumber;
  person?: 1 | 2 | 3;
  tense?: Tense;
  mood?: Mood;
  separablePrefix?: string;  // For separable verbs like "um|gehen"
  isCompound?: boolean;      // Compound nouns
  compoundParts?: string[];  // e.g. ["Klassen", "kampf"]
}

export interface Sentence {
  id: string;
  words: Word[];
  translationFr: string;
}

export interface Paragraph {
  id: string;
  sentences: Sentence[];
  footnotes?: Footnote[];
}

export interface Footnote {
  id: string;
  marker: string;
  textDe: string;
  textFr: string;
}

export interface Chapter {
  id: string;
  titleDe: string;
  titleFr: string;
  paragraphs: Paragraph[];
}

export interface ManifestoData {
  chapters: Chapter[];
}

// --- Annotations ---

export type AnnotationCategory = 'grammar' | 'etymology' | 'philosophy' | 'syntax' | 'vocabulary';

export interface Annotation {
  wordId: string;
  wordIds?: string[];           // For multi-word expressions
  translationFr: string;
  literalTranslation?: string;  // Traduction mot à mot brute vérifiée au dictionnaire
  contextNote?: string;         // Explication précise du choix de traduction dans le contexte de la phrase
  grammaticalRole: string;      // Human-readable description
  etymology?: string;
  philosophicalContext?: string;
  syntaxNote?: string;
  cognatesFr?: string[];        // French cognates
  relatedConcepts?: string[];   // Concept IDs
  difficulty?: 'basic' | 'intermediate' | 'advanced';
}

// --- Concept Graph (for nested tooltips) ---

export type ConceptCategory = 'grammar' | 'philosophy' | 'history' | 'vocabulary';

export interface Concept {
  id: string;
  nameDe: string;
  nameFr: string;
  category: ConceptCategory;
  explanation: string;         // For a French-speaking beginner
  relatedConcepts: string[];
  examples?: ConceptExample[];
  icon?: string;               // Emoji icon
}

export interface ConceptExample {
  textDe: string;
  textFr: string;
  source?: string;             // e.g. "Chapitre I, §3"
}

// --- UI State ---

export interface TooltipState {
  wordId: string;
  level: number;               // Nesting depth (0 = root)
  parentId?: string;           // Parent tooltip wordId
  isLocked: boolean;
  position: { x: number; y: number };
}

export interface ReaderState {
  currentChapter: string;
  currentParagraph: string;
  showTranslation: boolean;
  showGrammarColors: boolean;
  showPhilosophyNotes: boolean;
  activeTooltips: TooltipState[];
}

// --- Color mapping for POS ---

export const POS_COLORS: Record<PartOfSpeech, string> = {
  NOUN:   'text-blue-700 bg-blue-50',
  VERB:   'text-red-700 bg-red-50',
  ADJ:    'text-emerald-700 bg-emerald-50',
  ADV:    'text-emerald-600 bg-emerald-50',
  ART:    'text-amber-700 bg-amber-50',
  PRON:   'text-amber-600 bg-amber-50',
  PREP:   'text-slate-600 bg-slate-50',
  CONJ:   'text-slate-500 bg-slate-50',
  PART:   'text-slate-400 bg-slate-50',
  NUM:    'text-purple-600 bg-purple-50',
  INTERJ: 'text-pink-600 bg-pink-50',
  PUNCT:  'text-gray-400',
};

export const POS_LABELS_FR: Record<PartOfSpeech, string> = {
  NOUN:   'Nom (Substantiv)',
  VERB:   'Verbe (Verb)',
  ADJ:    'Adjectif (Adjektiv)',
  ADV:    'Adverbe (Adverb)',
  ART:    'Article (Artikel)',
  PRON:   'Pronom (Pronomen)',
  PREP:   'Préposition (Präposition)',
  CONJ:   'Conjonction (Konjunktion)',
  PART:   'Particule (Partikel)',
  NUM:    'Numéral (Numerale)',
  INTERJ: 'Interjection (Interjektion)',
  PUNCT:  'Ponctuation',
};

export const CASE_LABELS_FR: Record<GrammaticalCase, string> = {
  NOM: 'Nominatif (sujet)',
  ACC: 'Accusatif (COD)',
  DAT: 'Datif (COI)',
  GEN: 'Génitif (complément du nom)',
};

export const GENDER_LABELS_FR: Record<Gender, string> = {
  M: 'Masculin (der)',
  F: 'Féminin (die)',
  N: 'Neutre (das)',
};
