import React from 'react';
import type { Chapter } from '../types';

interface NavigationProps {
  chapters: Chapter[];
  currentChapterId: string;
  onChapterSelect: (chapterId: string) => void;
  onCloseSidebar: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  chapters,
  currentChapterId,
  onChapterSelect,
  onCloseSidebar,
}) => {
  return (
    <nav className="font-sans flex flex-col h-full text-black">
      {/* En-tête architectural Bauhaus */}
      <div className="flex items-start justify-between pb-4 mb-6 border-b border-black">
        <div>
          <h1 className="font-bauhaus font-bold text-lg leading-tight uppercase tracking-tight text-black">
            Manifest der
            <br />
            Kommunistischen
            <br />
            Partei
          </h1>
          <p className="font-mono text-[10px] text-neutral-500 mt-1 uppercase tracking-wider">
            Marx & Engels · 1848
          </p>
        </div>
        <button
          onClick={onCloseSidebar}
          className="font-mono text-xs font-bold border border-black px-2.5 py-1.5 hover:bg-black hover:text-white transition-colors cursor-pointer select-none"
          title="Fermer le sommaire"
          aria-label="Fermer le sommaire"
        >
          ✕
        </button>
      </div>

      {/* Sommaire des chapitres */}
      <div className="flex-1 overflow-y-auto pr-1">
        <h2 className="font-mono text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-3">
          01 / SOMMAIRE DU TEXTE
        </h2>
        <ul className="space-y-2 font-sans">
          {chapters.map((chapter, idx) => {
            const isActive = currentChapterId === chapter.id;
            return (
              <li key={chapter.id}>
                <button
                  onClick={() => onChapterSelect(chapter.id)}
                  className={`w-full text-left px-3.5 py-3 transition-colors border cursor-pointer ${
                    isActive
                      ? 'bg-black text-white border-black font-semibold shadow-[3px_3px_0px_0px_#111111]'
                      : 'border-transparent text-neutral-800 hover:border-black hover:bg-neutral-100'
                  }`}
                >
                  <span className="font-mono text-[10px] block opacity-70 mb-0.5 uppercase tracking-wider">
                    {String(idx).padStart(2, '0')} // SECTION
                  </span>
                  <span className="font-bauhaus font-bold text-xs uppercase block tracking-tight">
                    {chapter.titleDe}
                  </span>
                  <span className={`font-reading text-xs italic block mt-0.5 ${isActive ? 'text-neutral-300' : 'text-neutral-500'}`}>
                    {chapter.titleFr}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Pied de page informatif discret */}
      <div className="mt-auto pt-4 border-t border-neutral-200 text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
        MEW Band 4 · Dietz Verlag Berlin
      </div>
    </nav>
  );
};
