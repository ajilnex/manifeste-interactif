import {
  FloatingPortal,
  autoUpdate,
  flip,
  offset,
  shift,
  size,
  useFloating,
} from '@floating-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import type { Annotation, Word } from '../types';
import {
  CASE_LABELS_FR,
  GENDER_LABELS_FR,
  POS_LABELS_FR,
} from '../types';
import {
  getEtymology,
  getGrammaticalRoleFr,
  getLiteralTranslation,
  getWordTranslationFr,
} from '../data/lexicon';

interface TooltipProps {
  word: Word;
  annotation?: Annotation;
  isOpen: boolean;
  isLocked: boolean;
  anchorEl: HTMLElement | null;
  onToggleLock: () => void;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const Tooltip: React.FC<TooltipProps> = ({
  word,
  annotation,
  isOpen,
  isLocked,
  anchorEl,
  onToggleLock,
  onClose,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [tabSelection, setTabSelection] = useState<{
    wordId: string;
    tab: 'grammar' | 'etymology';
  } | null>(null);
  const activeTab = tabSelection?.wordId === word.id ? tabSelection.tab : 'grammar';

  // Floating UI en mode fixed pour un ancrage infaillible au défilement
  const { refs, floatingStyles, update } = useFloating({
    open: isOpen,
    strategy: 'fixed',
    placement: 'top',
    middleware: [
      offset(8),
      flip({
        fallbackPlacements: ['bottom', 'top-start', 'bottom-start', 'top-end', 'bottom-end'],
        padding: 12,
      }),
      shift({ padding: 12 }),
      size({
        padding: 12,
        apply({ availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${Math.max(140, availableHeight)}px`,
          });
        },
      }),
    ],
    whileElementsMounted: autoUpdate,
    elements: {
      reference: anchorEl,
    },
  });

  useEffect(() => {
    if (anchorEl) {
      refs.setReference(anchorEl);
    }
  }, [anchorEl, refs]);

  useEffect(() => {
    if (isOpen && anchorEl) {
      update();
    }
  }, [isOpen, anchorEl, update]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  const etymologyDisplay = getEtymology(word, annotation);
  const hasEtymology = Boolean(etymologyDisplay);
  const translationDisplay = getWordTranslationFr(word, annotation);
  const literalDisplay = getLiteralTranslation(word, annotation);
  const grammaticalRoleDisplay = getGrammaticalRoleFr(word, annotation);

  return (
    <AnimatePresence>
      {isOpen && (
        <FloatingPortal>
          <div
            ref={(node) => refs.setFloating(node)}
            style={{
              ...floatingStyles,
              zIndex: 9999,
            }}
            className="tooltip-container flex flex-col"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onMouseUp={(e) => e.stopPropagation()}
            onPointerDown={(e) => e.stopPropagation()}
          >
            <motion.div
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 3 }}
              transition={{ duration: 0.1 }}
              onClick={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
              className={`relative bg-white border ${
                isLocked ? 'border-black ring-2 ring-black shadow-[5px_5px_0px_0px_#111111]' : 'border-black shadow-[4px_4px_0px_0px_#111111]'
              } p-4 font-sans text-xs text-black flex flex-col max-h-[inherit] w-80 sm:w-96 max-w-[calc(100vw-24px)]`}
            >
              {/* En-tête architectural Bauhaus épuré */}
              <div className="flex items-center justify-between gap-3 pb-2.5 mb-3 border-b border-black">
                <div className="flex flex-wrap items-center gap-2">
                  {word.lemma && word.lemma.toLowerCase() !== word.text.toLowerCase() ? (
                    <span className="text-[10px] text-neutral-600 font-mono font-semibold uppercase tracking-wider">
                      Forme de base : <strong className="text-black font-serif text-xs">{word.lemma}</strong>
                    </span>
                  ) : (
                    <span className="font-mono text-[9.5px] font-bold text-neutral-400 uppercase tracking-widest">
                      // ANALYSE LEXICALE
                    </span>
                  )}
                  {word.separablePrefix && (
                    <span className="text-[9.5px] font-mono font-bold text-red-700 bg-red-50 border border-red-200 px-1.5 py-0.5 tracking-wider uppercase">
                      Séparable : {word.separablePrefix} + {word.lemma.replace(word.separablePrefix, '')}
                    </span>
                  )}
                  {word.isCompound && word.compoundParts && (
                    <span className="text-[9.5px] font-mono text-neutral-600 bg-neutral-100 border border-neutral-300 px-1.5 py-0.5 uppercase tracking-wider">
                      Composé : {word.compoundParts.join(' + ')}
                    </span>
                  )}
                </div>

                {/* Bouton de verrouillage brutaliste */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleLock();
                  }}
                  className={`font-mono text-[10px] font-bold px-2 py-1 border transition-colors uppercase tracking-wider shrink-0 cursor-pointer ${
                    isLocked
                      ? 'bg-black text-white border-black'
                      : 'bg-neutral-100 text-black border-black hover:bg-neutral-200'
                  }`}
                  title={isLocked ? "Cliquer pour désépingler" : "Épingler cette note pour la maintenir ouverte"}
                >
                  {isLocked ? 'ÉPINGLÉ ●' : 'ÉPINGLER ○'}
                </button>
              </div>

              {/* Bloc traduction française et sens littéral vérifié */}
              <div className="bg-neutral-50 border-l-2 border-black pl-3 pr-2.5 py-2 mb-3">
                <span className="text-[9px] font-mono font-bold text-neutral-500 uppercase tracking-widest block mb-0.5">
                  TRADUCTION EN CONTEXTE
                </span>
                <p className="text-sm font-serif font-medium italic text-black leading-snug">
                  {translationDisplay}
                </p>
                {literalDisplay && (
                  <div className="mt-2 pt-1.5 border-t border-neutral-200 flex items-baseline gap-1.5 font-mono text-[10.5px]">
                    <span className="font-bold text-neutral-700 uppercase tracking-wider shrink-0">
                      SENS LITTÉRAL :
                    </span>
                    <span className="text-neutral-900 font-sans italic">
                      {literalDisplay}
                    </span>
                  </div>
                )}
              </div>

              {/* Badges morphosyntaxiques structuraux */}
              <div className="flex flex-wrap gap-1 mb-3">
                {word.pos && (
                  <span className="border border-black bg-white px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider">
                    {POS_LABELS_FR[word.pos] || word.pos}
                  </span>
                )}
                {word.case && (
                  <span className="border border-black bg-neutral-100 px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider">
                    {CASE_LABELS_FR[word.case] || word.case}
                  </span>
                )}
                {word.gender && (
                  <span className="border border-neutral-300 bg-white px-1.5 py-0.5 text-[9px] font-mono text-neutral-700 uppercase">
                    {GENDER_LABELS_FR[word.gender] || word.gender}
                  </span>
                )}
                {word.number && (
                  <span className="border border-neutral-300 bg-white px-1.5 py-0.5 text-[9px] font-mono text-neutral-700 uppercase">
                    {word.number === 'SG' ? 'Singulier' : 'Pluriel'}
                  </span>
                )}
                {word.tense && (
                  <span className="border border-neutral-300 bg-white px-1.5 py-0.5 text-[9px] font-mono text-neutral-700 uppercase">
                    {word.tense === 'PRES' ? 'Présent' : word.tense === 'PAST' ? 'Prétérit' : word.tense === 'PERF' ? 'Parfait' : word.tense}
                  </span>
                )}
                {word.mood === 'SUBJ' && (
                  <span className="border border-red-600 bg-red-50 text-red-700 px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase">
                    Subjonctif
                  </span>
                )}
              </div>

              {/* Onglets structurels Bauhaus si étymologie présente */}
              {hasEtymology && (
                <div className="flex border-b border-black mb-3 text-[10px] font-mono uppercase tracking-wider">
                  <button
                    className={`px-3 py-1.5 font-bold transition-colors cursor-pointer ${
                      activeTab === 'grammar'
                        ? 'bg-black text-white'
                        : 'bg-white text-neutral-600 hover:text-black hover:bg-neutral-100'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setTabSelection({ wordId: word.id, tab: 'grammar' });
                    }}
                  >
                    01 / Analyse
                  </button>
                  <button
                    className={`px-3 py-1.5 font-bold transition-colors cursor-pointer ${
                      activeTab === 'etymology'
                        ? 'bg-black text-white'
                        : 'bg-white text-neutral-600 hover:text-black hover:bg-neutral-100'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setTabSelection({ wordId: word.id, tab: 'etymology' });
                    }}
                  >
                    02 / Étymologie
                  </button>
                </div>
              )}

              {/* Corps de l'analyse ou de l'étymologie */}
              <div className="text-xs leading-relaxed overflow-y-auto pr-1 flex-1 min-h-0">
                {activeTab === 'grammar' && (
                  <div className="space-y-2.5">
                    <p className="font-sans text-neutral-800">
                      {grammaticalRoleDisplay}
                    </p>
                    {annotation?.syntaxNote && (
                      <div className="border-l-2 border-neutral-400 bg-neutral-100 pl-2.5 py-1.5 font-mono text-[11px] leading-normal text-black">
                        <span className="font-bold">SYNTAXE :</span> {annotation.syntaxNote}
                      </div>
                    )}
                    {annotation?.cognatesFr && annotation.cognatesFr.length > 0 && (
                      <div className="text-[11px] text-neutral-600 pt-1.5 border-t border-neutral-200">
                        <span className="font-mono uppercase font-bold text-black">Cognats :</span>{' '}
                        {annotation.cognatesFr.join(', ')}
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'etymology' && hasEtymology && (
                  <div className="p-2.5 bg-neutral-50 border border-neutral-300 font-sans text-neutral-900 leading-normal">
                    <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-neutral-200">
                      <span className="font-mono text-[9px] font-bold text-black uppercase tracking-wider">
                        // ÉTYMOLOGIE PHILOLOGIQUE
                      </span>
                      <span className="font-mono text-[8.5px] text-neutral-500 uppercase tracking-wider">
                        DWDS / Pfeifer · Duden · Kluge
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed text-neutral-800">{etymologyDisplay}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </FloatingPortal>
      )}
    </AnimatePresence>
  );
};
