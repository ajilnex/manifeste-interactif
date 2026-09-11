import React, { Fragment } from 'react';
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
  onWordHover: (wordId: string | null) => void;
  onParagraphHover: (paragraphId: string | null) => void;
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
  'ch1_p10': ['weltmarkt'],
  'ch1_p12': ['repraesentativstaat'],
  'ch1_p14': ['tauschwert'],
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
  onWordHover,
  onParagraphHover,
}) => {
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
              {showInterlinearTranslations ? (
                /* Mode Traduction bilingue : Chaque phrase forme une unité architecturale avec sa dalle française */
                <div className="space-y-6">
                  {paragraph.sentences.map((sentence) => (
                    <div
                      key={sentence.id}
                      className="group/sentence border-l-2 border-transparent hover:border-black/20 pl-3 -ml-3 transition-colors duration-150"
                    >
                      {/* Phrase allemande originale */}
                      <p className="font-reading text-[1.28rem] leading-[1.85] text-black tracking-[0.005em]">
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

                      {/* Dalle de traduction française avec animation de guillotine mécanique brutaliste */}
                      <div
                        className="mt-2.5 mb-2 pl-4 pr-4 py-3 bg-[#EAE8E2] border-l-[3px] border-black shadow-[3px_3px_0px_0px_#111111] animate-translation-slab select-text"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex items-center justify-between mb-1.5 border-b border-black/10 pb-1">
                          <span className="font-mono text-[9px] font-bold text-black uppercase tracking-widest flex items-center gap-1.5">
                            <span className="inline-block w-2 h-2 bg-[#D42B1E]" />
                            FRANÇAIS · {sentence.id.replace('ch', 'CH. ').replace('_p', ' §').replace('_s', ' : ')}
                          </span>
                          <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-wider">
                            Trad. Laura Lafargue
                          </span>
                        </div>
                        <p className="font-reading text-[1.08rem] font-normal not-italic text-black leading-relaxed">
                          {sentence.translationFr}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Mode Allemand Seul : Paragraphe continu pur et fluide sans aucun espace blanc artificiel */
                <p className="font-reading text-[1.28rem] leading-[1.9] text-black tracking-[0.005em]">
                  {paragraph.sentences.map((sentence, sIdx) => (
                    <Fragment key={sentence.id}>
                      {sIdx > 0 && <span> </span>}
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
                    </Fragment>
                  ))}
                </p>
              )}
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
