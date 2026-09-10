import React, { useState } from 'react';

interface GrammarPanelProps {
  title: string;
  points: GrammarPoint[];
  defaultOpen?: boolean;
}

interface GrammarPoint {
  label: string;
  explanation: string;
  example?: {
    de: string;
    fr: string;
    highlight?: string;
  };
}

export const GrammarPanel: React.FC<GrammarPanelProps> = ({
  title,
  points,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-black bg-white shadow-[3px_3px_0px_0px_#111111] my-8 overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-4 py-3 text-left bg-neutral-50 hover:bg-neutral-100 transition-colors border-b border-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] font-bold bg-black text-white px-1.5 py-0.5 tracking-wider uppercase">
            EXCURSUS
          </span>
          <span className="font-bauhaus font-bold text-sm text-black tracking-tight">
            {title}
          </span>
        </div>
        <span className="font-mono text-xs text-black font-bold">
          {isOpen ? '[-] RÉDUIRE' : '[+] DÉPLIER'}
        </span>
      </button>
      
      {isOpen && (
        <div className="p-5 space-y-4">
          {points.map((point, idx) => (
            <div key={idx} className="text-sm font-sans">
              <p className="font-bauhaus font-bold text-black uppercase tracking-wide text-xs mb-1">
                {String(idx + 1).padStart(2, '0')}. {point.label}
              </p>
              <p className="text-neutral-700 leading-relaxed text-xs md:text-sm">
                {point.explanation}
              </p>
              {point.example && (
                <div className="mt-2.5 bg-neutral-50 border-l-2 border-black pl-3 pr-2 py-2 font-mono text-xs">
                  <div className="text-black font-semibold">
                    <span className="text-neutral-400 select-none mr-2">DE //</span>
                    {point.example.de}
                  </div>
                  <div className="text-neutral-600 mt-1 font-reading italic text-sm">
                    <span className="text-neutral-400 select-none mr-2 font-mono not-italic text-xs">FR //</span>
                    {point.example.fr}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

