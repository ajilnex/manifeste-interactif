import type { Word } from '../types';

/**
 * Liste des lemmes et mots élémentaires de l'allemand
 * (articles, prépositions de base, conjonctions courantes, pronoms basiques, auxiliaires au présent).
 * Ces mots sont supposés connus d'un lecteur ayant les bases fondamentales.
 */
export const BASIC_WORDS = new Set([
  // Articles définis et indéfinis
  'der', 'die', 'das', 'des', 'dem', 'den',
  'ein', 'eine', 'einer', 'einem', 'einen', 'eines',
  
  // Conjonctions élémentaires
  'und', 'oder', 'aber', 'denn', 'als', 'wie', 'daß', 'dass',
  
  // Prépositions très courantes seules
  'in', 'im', 'an', 'am', 'auf', 'aus', 'von', 'vom', 'zu', 'zum', 'zur', 'mit', 'für', 'vor',
  
  // Pronoms personnels & possessifs de base
  'er', 'sie', 'es', 'wir', 'ihr', 'sich', 'ich', 'du',
  'mein', 'dein', 'sein', 'ihr', 'unser', 'euer',
  
  // Démonstratifs basiques
  'dies', 'diese', 'dieser', 'diesem', 'diesen', 'dieses',
  
  // Adverbes et particules très simples
  'nicht', 'so', 'auch', 'sehr', 'nur', 'hier', 'da', 'wo',
  
  // Formes élémentaires du verbe sein et haben
  'ist', 'sind', 'war', 'waren', 'hat', 'haben',
  
  // Ponctuation
  '.', ',', ':', ';', '!', '?', '–', '—', '«', '»', '"', '(', ')', '[', ']'
]);

/**
 * Vérifie si un mot est considéré comme élémentaire.
 */
export function isBasicWord(word: Word): boolean {
  if (word.pos === 'PUNCT') return true;
  
  const textLower = word.text.toLowerCase().replace(/^[«"'(]+|[»"')]+$/g, '');
  const lemmaLower = (word.lemma || '').toLowerCase();
  
  if (BASIC_WORDS.has(textLower) || BASIC_WORDS.has(lemmaLower)) {
    return true;
  }
  
  // Articles
  if (word.pos === 'ART') {
    return true;
  }
  
  return false;
}
