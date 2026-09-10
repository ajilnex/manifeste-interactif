import React, { useState } from 'react';

interface PhilosophyNoteProps {
  title: string;
  termDe: string;
  termFr: string;
  content: string;
  context?: string;
  furtherReading?: string;
  defaultOpen?: boolean;
}

export const PhilosophyNote: React.FC<PhilosophyNoteProps> = ({
  title,
  termDe,
  termFr,
  content,
  context,
  furtherReading,
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
            CONCEPT
          </span>
          <span className="font-bauhaus font-bold text-sm text-black tracking-tight">
            {title}
          </span>
          <span className="font-mono text-xs text-neutral-500 hidden sm:inline">
            [{termDe} → {termFr}]
          </span>
        </div>
        <span className="font-mono text-xs text-black font-bold">
          {isOpen ? '[-] FERMER' : '[+] LIRE L\'ANALYSE'}
        </span>
      </button>
      
      {isOpen && (
        <div className="p-5 space-y-4 text-xs md:text-sm">
          <p className="font-reading text-base leading-relaxed text-black">
            {content}
          </p>

          {context && (
            <div className="border-l-2 border-black pl-3.5 py-2 bg-neutral-50">
              <span className="font-mono text-[10px] font-bold text-neutral-500 uppercase tracking-widest block mb-1">
                PORTÉE DANS LE MANIFESTE (1848)
              </span>
              <p className="font-sans text-xs md:text-sm text-neutral-800 leading-relaxed">
                {context}
              </p>
            </div>
          )}

          {furtherReading && (
            <div className="font-mono text-[11px] text-neutral-600 pt-2 border-t border-neutral-200">
              <span className="font-bold text-black uppercase mr-1">RÉFÉRENCE //</span>
              {furtherReading}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

