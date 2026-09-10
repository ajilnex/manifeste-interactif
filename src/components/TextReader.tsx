import React, { Fragment, useState } from 'react';
import type { Annotation, Chapter, Concept } from '../types';
import { GrammarPanel } from './GrammarPanel';
import { InteractiveWord } from './InteractiveWord';
import { PhilosophyNote } from './PhilosophyNote';
import { GRAMMAR_PANELS, PHILOSOPHY_NOTES } from '../data/excursus';

interface TextReaderProps {
  chapter: Chapter;
  annotations: Record<string, Annotation>;
  concepts: Record<string, Concept>;
  showGrammarColors: boolean;
  filterBasicWords: boolean;
  showInterlinearTranslations: boolean;
  showExcursus?: boolean;
  highlightedWordId: string | null;
  highlightedParagraphId: string | null;
  highlightedSentenceId: string | null;
  onWordHover: (wordId: string | null) => void;
  onParagraphHover: (paragraphId: string | null) => void;
  onSentenceHover: (sentenceId: string | null) => void;
}

const GRAMMAR_PANEL_PLACEMENTS: Record<string, (keyof typeof GRAMMAR_PANELS)[]> = {
  'ch0_p1': ['v2_word_order'],
  'ch0_p2': ['subjunctive_subclause'],
  'ch1_p1': ['german_cases'],
  'ch1_p3': ['compound_nouns'],
  'ch1_p7': ['verbal_prefixes'],
};

const PHILOSOPHY_NOTE_PLACEMENTS: Record<string, (keyof typeof PHILOSOPHY_NOTES)[]> = {
  'ch0_p1': ['gespenst'],
  'ch1_p1': ['klassenkampf'],
  'ch1_p4': ['bourgeoisie', 'aufhebung'],
  'ch1_p5': ['proletariat'],
  'ch1_p6': ['pfahlbuerger'],
};

export const TextReader: React.FC<TextReaderProps> = ({
  chapter,
  annotations,
  concepts,
  showGrammarColors,
  filterBasicWords,
  showInterlinearTranslations,
  showExcursus = true,
  highlightedWordId,
  highlightedParagraphId,
  highlightedSentenceId,
  onWordHover,
  onParagraphHover,
  onSentenceHover,
}) => {
  const [pinnedSentenceIds, setPinnedSentenceIds] = useState<Set<string>>(new Set());

  const handleSentenceClick = (sentenceId: string) => {
    setPinnedSentenceIds((prev) => {
      const next = new Set(prev);
      if (next.has(sentenceId)) {
        next.delete(sentenceId);
      } else {
        next.add(sentenceId);
      }
      return next;
    });
  };

  return (
    <article className={`max-w-[70ch] mx-auto ${showGrammarColors ? 'grammar-colors' : ''}`}>
      {/* En-tête architectural Bauhaus */}
      <header className="mb-14 pb-6 border-b border-black">
        <div className="flex items-center justify-end font-mono text-[11px] uppercase tracking-widest text-neutral-500 mb-4">
          <span>MEW BAND 4 · 1848</span>
        </div>
        
        <h2 className="font-bauhaus font-bold text-3xl md:text-4xl text-black tracking-tight leading-tight mb-2">
          {chapter.titleDe}
        </h2>
        
        <p className="font-reading text-lg text-neutral-600 italic">
          {chapter.titleFr}
        </p>
      </header>

      {/* Corps du texte avec lisibilité maximale */}
      <div className="space-y-12">
        {chapter.paragraphs.map((paragraph) => (
          <Fragment key={paragraph.id}>
            <section
              className={`relative transition-colors duration-100 ${
                highlightedParagraphId === paragraph.id ? 'bg-black/[0.015]' : ''
              }`}
              onMouseEnter={() => onParagraphHover(paragraph.id)}
              onMouseLeave={() => onParagraphHover(null)}
            >
              {/* Lignes de phrases avec espaces fixes réservés pour les traductions */}
              <div className="space-y-4">
                {paragraph.sentences.map((sentence) => {
                  const isSentenceHovered = highlightedSentenceId === sentence.id;
                  const isPinned = pinnedSentenceIds.has(sentence.id);
                  const showTranslationBox = isSentenceHovered || isPinned || showInterlinearTranslations;

                  return (
                    <div
                      key={sentence.id}
                      className={`transition-all duration-100 rounded-none cursor-default ${
                        showTranslationBox
                          ? 'border-l-2 border-black pl-4 -ml-4'
                          : 'border-l-2 border-transparent pl-4 -ml-4 hover:border-neutral-300'
                      }`}
                      onMouseEnter={() => onSentenceHover(sentence.id)}
                      onMouseLeave={() => onSentenceHover(null)}
                      onClick={() => handleSentenceClick(sentence.id)}
                    >
                      {/* Texte original allemand */}
                      <p className="font-reading text-[1.28rem] leading-[1.9] text-black tracking-[0.005em]">
                        {sentence.words.map((word, wIdx) => {
                          const needsSpace =
                            wIdx > 0 &&
                            word.pos !== 'PUNCT' &&
                            !['»', ')', ']', ',', '.', '!', '?', ':', ';', '–', '—'].includes(word.text);

                          return (
                            <Fragment key={word.id}>
                              {needsSpace && <span> </span>}
                              <InteractiveWord
                                word={word}
                                annotation={annotations[word.id]}
                                concepts={concepts}
                                showGrammarColors={showGrammarColors}
                                filterBasicWords={filterBasicWords}
                                isHighlighted={highlightedWordId === word.id}
                                onHover={onWordHover}
                              />
                            </Fragment>
                          );
                        })}
                      </p>

                      {/* Espace réservé fixe pour la traduction française : surface grisée avec typographie normale */}
                      <div
                        className={`my-2 px-3.5 py-2.5 border-l-2 transition-all duration-150 ${
                          showTranslationBox
                            ? 'opacity-100 bg-[#E8E8E1] border-neutral-600 pointer-events-auto'
                            : 'opacity-0 bg-transparent border-transparent select-none pointer-events-none'
                        }`}
                        aria-hidden={!showTranslationBox}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <p className="font-reading text-[1.06rem] font-normal not-italic text-black leading-relaxed">
                          {sentence.translationFr}
                          {isPinned && (
                            <span className="ml-2.5 font-mono text-[9.5px] font-bold text-neutral-500 uppercase tracking-widest inline-block border border-neutral-400 px-1 py-0.5 bg-white/70">
                              [ÉPINGLÉ]
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Excursus grammaticaux et Notes philosophiques (Masquables sur demande) */}
            {showExcursus && (
              <>
                {GRAMMAR_PANEL_PLACEMENTS[paragraph.id]?.map((panelKey) => {
                  const panel = GRAMMAR_PANELS[panelKey];
                  return panel ? (
                    <GrammarPanel
                      key={panelKey}
                      title={panel.title}
                      points={panel.points}
                    />
                  ) : null;
                })}

                {PHILOSOPHY_NOTE_PLACEMENTS[paragraph.id]?.map((noteKey) => {
                  const note = PHILOSOPHY_NOTES[noteKey];
                  return note ? (
                    <PhilosophyNote
                      key={noteKey}
                      {...note}
                    />
                  ) : null;
                })}
              </>
            )}
          </Fragment>
        ))}
      </div>
    </article>
  );
};
