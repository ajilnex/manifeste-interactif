import { useCallback, useState } from 'react';

export function useHighlight() {
  const [highlightedWordId, setHighlightedWordId] = useState<string | null>(null);
  const [highlightedParagraphId, setHighlightedParagraphId] = useState<string | null>(null);

  const highlightWord = useCallback((wordId: string | null) => {
    setHighlightedWordId(wordId);
  }, []);

  const highlightParagraph = useCallback((paragraphId: string | null) => {
    setHighlightedParagraphId(paragraphId);
  }, []);

  const isWordHighlighted = useCallback((wordId: string) => {
    return highlightedWordId === wordId;
  }, [highlightedWordId]);

  const isParagraphHighlighted = useCallback((paragraphId: string) => {
    return highlightedParagraphId === paragraphId;
  }, [highlightedParagraphId]);

  return {
    highlightedWordId,
    highlightedParagraphId,
    highlightWord,
    highlightParagraph,
    isWordHighlighted,
    isParagraphHighlighted,
  };
}
