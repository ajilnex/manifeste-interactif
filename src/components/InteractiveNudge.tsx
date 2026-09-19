import React from 'react';

interface InteractiveNudgeProps {
  isVisible: boolean;
}

export const InteractiveNudge: React.FC<InteractiveNudgeProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <span
      className="absolute top-0 left-0 pointer-events-none select-none z-30"
      aria-hidden="true"
    >
      {/* 1. Disposition Écran Large / Ordinateur (>= lg / 1024px) :
          Le badge est situé complètement à gauche du texte, dans la marge vierge,
          sans jamais recouvrir aucun mot. Une flèche rouge dynamique en arc
          traverse la marge et aboutit avec précision sur le mot « Gespenst ». */}
      <span className="hidden lg:flex items-center absolute right-[calc(100%+70px)] top-1/2 animate-nudge-desktop">
        {/* Badge brutaliste grand format (taille doublée) */}
        <span className="bg-black text-white text-sm sm:text-base font-mono font-bold uppercase tracking-wider px-5 py-2.5 border-2 border-black shadow-[4px_4px_0px_0px_#D42B1E] whitespace-nowrap flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D42B1E] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D42B1E]" />
          </span>
          <span>Cliquez sur un mot !</span>
        </span>

        {/* Trait & Flèche dynamique directionnelle rouge vers « Gespenst » */}
        <svg
          className="w-[74px] h-[36px] overflow-visible shrink-0 ml-1.5"
          viewBox="0 0 74 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ligne arquée au-dessus de « Ein » dans l'interligne vierge */}
          <path
            d="M 2 18 C 24 4, 48 6, 62 16"
            stroke="#D42B1E"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Pointe de flèche affûtée pointant droit sur l'initiale de « Gespenst » */}
          <polygon
            points="60,10 72,18 59,24"
            fill="#D42B1E"
          />
        </svg>
      </span>

      {/* 2. Disposition Mobile / Écran Étroit (< 1024px) :
          Le badge est positionné dans l'espace vierge supérieur au-dessus de la phrase,
          calé sur la gauche, avec une flèche rouge incurvée qui plonge vers « Gespenst ». */}
      <span className="flex lg:hidden flex-col items-start absolute bottom-[calc(100%+12px)] left-[-36px] animate-nudge-mobile">
        {/* Badge mobile brutaliste doublé */}
        <span className="bg-black text-white text-xs sm:text-sm font-mono font-bold uppercase tracking-wider px-4 py-2 border-2 border-black shadow-[3px_3px_0px_0px_#D42B1E] whitespace-nowrap flex items-center gap-2.5">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D42B1E] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D42B1E]" />
          </span>
          <span>Cliquez sur un mot !</span>
        </span>

        {/* Flèche incurvée descendant sur « Gespenst » */}
        <svg
          className="w-[52px] h-[28px] overflow-visible ml-8 -mt-0.5"
          viewBox="0 0 52 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 6 2 C 12 12, 28 18, 40 22"
            stroke="#D42B1E"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <polygon
            points="34,24 45,25 39,15"
            fill="#D42B1E"
          />
        </svg>
      </span>
    </span>
  );
};
