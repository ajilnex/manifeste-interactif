import React, { useCallback, useRef, useState } from 'react';
import type { Annotation, Word } from '../types';
import { isBasicWord } from '../utils/language';
import { getWordTranslationFr } from '../data/lexicon';
import { Tooltip } from './Tooltip';

interface InteractiveWordProps {
  word: Word;
  annotation?: Annotation;
  showGrammarColors: boolean;
  filterBasicWords: boolean;
  isHighlighted: boolean;
  onHover?: (wordId: string | null) => void;
}

const POS_CLASS_MAP: Record<string, string> = {
  NOUN: 'word-noun',
  VERB: 'word-verb',
  ADJ: 'word-adj',
  ADV: 'word-adv',
  ART: 'word-art',
  PRON: 'word-pron',
  PREP: 'word-prep',
  CONJ: 'word-conj',
  PART: 'word-part',
  NUM: 'word-noun',
  INTERJ: 'word-noun',
  PUNCT: 'word-punct',
};

export const InteractiveWord: React.FC<InteractiveWordProps> = ({
  word,
  annotation,
  showGrammarColors,
  filterBasicWords,
  isHighlighted,
  onHover,
}) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLSpanElement | null>(null);
  const openTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isPunctuation = word.pos === 'PUNCT';
  const isBasic = isBasicWord(word);
  // Si le filtre des mots élémentaires est activé, et que ce mot est élémentaire,
  // on ne le rend pas interactif avec un tooltip pour ne pas polluer la lecture.
  const isExcluded = filterBasicWords && isBasic;

  const clearTimers = () => {
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const handleMouseEnter = useCallback(() => {
    if (isPunctuation || isExcluded) return;
    onHover?.(word.id);
    clearTimers();

    // Délai très court (140ms) avant d'ouvrir pour une réactivité naturelle sans effet flash
    openTimerRef.current = setTimeout(() => {
      setIsTooltipOpen(true);
    }, 140);
  }, [isPunctuation, isExcluded, onHover, word.id]);

  const handleMouseLeave = useCallback(() => {
    if (isPunctuation || isExcluded) return;
    onHover?.(null);
    clearTimers();

    // Si la boîte n'est pas verrouillée manuellement, on programme sa fermeture
    // avec un court répit de 120ms au cas où la souris se dirige vers la boîte
    if (!isLocked) {
      closeTimerRef.current = setTimeout(() => {
        setIsTooltipOpen(false);
      }, 120);
    }
  }, [isPunctuation, isExcluded, onHover, isLocked]);

  const handleTooltipMouseEnter = useCallback(() => {
    // La souris est entrée dans le tooltip : on annule la fermeture
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const handleTooltipMouseLeave = useCallback(() => {
    // La souris quitte le tooltip : si non verrouillé manuellement, fermer immédiatement
    if (!isLocked) {
      closeTimerRef.current = setTimeout(() => {
        setIsTooltipOpen(false);
      }, 80);
    }
  }, [isLocked]);

  const handleToggleLock = useCallback(() => {
    setIsLocked(prev => !prev);
  }, []);

  const handleClose = useCallback(() => {
    clearTimers();
    setIsLocked(false);
    setIsTooltipOpen(false);
  }, []);

  const handleClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPunctuation || isExcluded) return;
    // Un clic permet d'ouvrir ou de fermer sans forcer un verrouillage automatique
    if (isTooltipOpen) {
      if (!isLocked) {
        setIsLocked(true);
      } else {
        handleClose();
      }
    } else {
      setIsTooltipOpen(true);
    }
  }, [isPunctuation, isExcluded, isTooltipOpen, isLocked, handleClose]);

  // Si c'est de la ponctuation, simple rendu
  if (isPunctuation) {
    return <span className="text-gray-500">{word.text}</span>;
  }

  // Si le mot est élémentaire et filtré : simple rendu de texte sans tooltip
  if (isExcluded) {
    return (
      <span className={`transition-colors ${isHighlighted ? 'word-highlighted font-medium' : ''}`}>
        {word.text}
      </span>
    );
  }

  const posClass = POS_CLASS_MAP[word.pos] || '';
  const highlightClass = isHighlighted ? 'word-highlighted' : '';
  const lockedClass = isLocked && isTooltipOpen ? 'word-locked' : '';

  return (
    <>
      <span
        ref={setAnchorEl}
        className={`word-interactive ${showGrammarColors ? posClass : ''} ${highlightClass} ${lockedClass} transition-colors duration-100`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            e.stopPropagation();
            handleClick(e as unknown as React.MouseEvent);
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`${word.text} — ${getWordTranslationFr(word, annotation)}`}
      >
        {word.text}
      </span>
      <Tooltip
        word={word}
        annotation={annotation}
        isOpen={isTooltipOpen}
        isLocked={isLocked}
        anchorEl={anchorEl}
        onToggleLock={handleToggleLock}
        onClose={handleClose}
        onMouseEnter={handleTooltipMouseEnter}
        onMouseLeave={handleTooltipMouseLeave}
      />
    </>
  );
};
