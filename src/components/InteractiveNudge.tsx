import React from 'react';

interface InteractiveNudgeProps {
  isVisible: boolean;
}

export const InteractiveNudge: React.FC<InteractiveNudgeProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <span
      className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center animate-nudge-float select-none"
      aria-hidden="true"
    >
      <span className="bg-black text-white text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 border border-black shadow-[2px_2px_0px_0px_#D42B1E] whitespace-nowrap flex items-center gap-1.5">
        <span className="nudge-hover-text">Survoler pour traduire</span>
        <span className="nudge-touch-text">Toucher pour traduire</span>
        <span className="text-[#D42B1E] text-xs leading-none">↓</span>
      </span>
      {/* Pointe de flèche directionnelle */}
      <span className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-black -mt-[1px]" />
    </span>
  );
};
