import React, { Fragment } from 'react';
import type { Annotation, Chapter } from '../types';
import { InteractiveWord } from './InteractiveWord';

interface TextReaderProps {
  chapter: Chapter;
  annotations: Record<string, Annotation>;
  showGrammarColors: boolean;
  translateAllWords: boolean;
  showInterlinearTranslations: boolean;
  isCollapsingTranslations?: boolean;
  highlightedWordId: string | null;
  highlightedParagraphId: string | null;
  onWordHover: (wordId: string | null) => void;
  onParagraphHover: (paragraphId: string | null) => void;
  hasSeenTutorial?: boolean;
  onDismissTutorial?: () => void;
}

const renderInvertedFrench = (text: string) => {
  // Découpe le texte sur les balises *mot*, _mot_ ou <em>mot</em> pour appliquer l'inversion typographique :
  // Le texte global français étant en italique, les éléments mis en valeur dans l'original s'affichent en romain droit (not-italic).
  const parts = text.split(/(\*[^*]+\*|_[^_]+_|<em>.*?<\/em>)/g);
  return parts.map((part, idx) => {
    if (
      (part.startsWith('*') && part.endsWith('*')) ||
      (part.startsWith('_') && part.endsWith('_'))
    ) {
      const clean = part.slice(1, -1);
      return (
        <span key={idx} className="not-italic font-normal">
          {clean}
        </span>
      );
    }
    if (part.startsWith('<em>') && part.endsWith('</em>')) {
      const clean = part.slice(4, -5);
      return (
        <span key={idx} className="not-italic font-normal">
          {clean}
        </span>
      );
    }
    return <Fragment key={idx}>{part}</Fragment>;
  });
};

export const TextReader: React.FC<TextReaderProps> = ({
  chapter,
  annotations,
  showGrammarColors,
  translateAllWords,
  showInterlinearTranslations,
  isCollapsingTranslations = false,
  highlightedWordId,
  highlightedParagraphId,
  onWordHover,
  onParagraphHover,
  hasSeenTutorial = true,
  onDismissTutorial,
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
                      className="group/sentence border-l-2 border-[#D4D2CB] hover:border-[#B5B2AA] pl-3.5 -ml-3.5 transition-colors duration-150"
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
                                showGrammarColors={showGrammarColors}
                                translateAllWords={translateAllWords}
                                isHighlighted={highlightedWordId === word.id}
                                onHover={onWordHover}
                                showNudge={word.id === 'ch0_p1_s1_w2' && !hasSeenTutorial}
                                onInteraction={onDismissTutorial}
                              />
                            </Fragment>
                          );
                        })}
                      </p>

                      {/* Espace de traduction française : coussin grisé généreux, bordure gauche assourdie, zéro bande droite */}
                      <div
                        className={`my-3 px-4 py-3.5 bg-[#E7E5DE] border-l-2 border-[#9E9B93] select-text ${
                          isCollapsingTranslations
                            ? 'animate-translation-slab-exit'
                            : 'animate-translation-slab'
                        }`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <p className="font-reading text-[1.12rem] font-normal italic text-black leading-relaxed">
                          {renderInvertedFrench(sentence.translationFr)}
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
                              showGrammarColors={showGrammarColors}
                              translateAllWords={translateAllWords}
                              isHighlighted={highlightedWordId === word.id}
                              onHover={onWordHover}
                              showNudge={word.id === 'ch0_p1_s1_w2' && !hasSeenTutorial}
                              onInteraction={onDismissTutorial}
                            />
                          </Fragment>
                        );
                      })}
                    </Fragment>
                  ))}
                </p>
              )}
            </section>
          </Fragment>
        ))}
      </div>
    </article>
  );
};
