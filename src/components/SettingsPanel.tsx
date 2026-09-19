import React, { useEffect } from 'react';

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  translateAllWords: boolean;
  onToggleTranslateAllWords: () => void;
  showInterlinearTranslations: boolean;
  onToggleInterlinearTranslations: () => void;
  showGrammarColors: boolean;
  onToggleGrammarColors: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onResetTutorial?: () => void;
}

export const SettingsPanel: React.FC<SettingsPanelProps> = ({
  isOpen,
  onClose,
  translateAllWords,
  onToggleTranslateAllWords,
  showInterlinearTranslations,
  onToggleInterlinearTranslations,
  showGrammarColors,
  onToggleGrammarColors,
  isFullscreen,
  onToggleFullscreen,
  onResetTutorial,
}) => {
  // Fermeture par touche Echap
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

  if (!isOpen) return null;

  return (
    <>
      {/* Arrière-plan semi-transparent pour focus */}
      <div
        className="fixed inset-0 bg-black/20 z-40 backdrop-blur-[1px] transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Volet latéral droit Bauhaus */}
      <aside
        className="fixed top-0 right-0 h-screen w-80 md:w-88 bg-white border-l-2 border-black z-50 p-6 overflow-y-auto shadow-[-5px_0px_0px_0px_#111111] animate-in slide-in-from-right duration-200 flex flex-col text-black font-sans"
        role="dialog"
        aria-label="Panneau de réglages"
      >
        {/* En-tête architectural */}
        <div className="flex items-start justify-between pb-4 mb-6 border-b border-black shrink-0">
          <div>
            <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 block mb-1">
              CONFIGURATION
            </span>
            <h2 className="font-bauhaus font-bold text-lg leading-tight uppercase tracking-tight text-black">
              Réglages de lecture
            </h2>
            <p className="font-mono text-[10px] text-neutral-500 mt-1 uppercase tracking-wider">
              Outils & Ergonomie
            </p>
          </div>
          <button
            onClick={onClose}
            className="font-mono text-xs font-bold border border-black px-2.5 py-1.5 hover:bg-black hover:text-white transition-colors cursor-pointer select-none"
            title="Fermer les réglages"
            aria-label="Fermer les réglages"
          >
            ✕
          </button>
        </div>

        {/* Options de lecture */}
        <div className="space-y-2 mb-6">
          <h3 className="font-mono text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-3">
            01 / OPTIONS D'APPRENTISSAGE
          </h3>

          {/* Traduire tous les mots (y compris élémentaires) */}
          <button
            type="button"
            onClick={onToggleTranslateAllWords}
            className="w-full flex items-center justify-between p-2.5 border border-black bg-white hover:bg-neutral-50 transition-colors text-left cursor-pointer"
          >
            <div className="flex flex-col pr-2">
              <span className="font-mono text-[11px] font-bold uppercase text-black">
                Traduire tous les mots
              </span>
              <span className="text-[10px] text-neutral-500 leading-tight">
                Inclure les mots élémentaires (« und », « der », « in »...)
              </span>
            </div>
            <span
              className={`font-mono text-[10px] font-bold px-2 py-0.5 border transition-colors ${
                translateAllWords
                  ? 'bg-black text-white border-black'
                  : 'bg-neutral-100 text-neutral-400 border-neutral-300'
              }`}
            >
              {translateAllWords ? 'ACTIF' : 'INACTIF'}
            </span>
          </button>

          {/* Traduction française bilingue sous chaque phrase */}
          <button
            type="button"
            onClick={onToggleInterlinearTranslations}
            className="w-full flex items-center justify-between p-2.5 border border-black bg-white hover:bg-neutral-50 transition-colors text-left cursor-pointer"
          >
            <div className="flex flex-col pr-2">
              <span className="font-mono text-[11px] font-bold uppercase text-black flex items-center gap-1.5">
                <span
                  className={`w-2 h-2 transition-colors duration-200 ${
                    showInterlinearTranslations ? 'bg-[#D42B1E]' : 'border border-black bg-white'
                  }`}
                />
                Traduction française
              </span>
              <span className="text-[10px] text-neutral-500 leading-tight mt-0.5">
                Afficher sous chaque phrase (décalage du texte)
              </span>
            </div>
            <span
              className={`font-mono text-[10px] font-bold px-2 py-0.5 border transition-colors ${
                showInterlinearTranslations
                  ? 'bg-black text-white border-black'
                  : 'bg-neutral-100 text-neutral-400 border-neutral-300'
              }`}
            >
              {showInterlinearTranslations ? 'BILINGUE' : 'ALLEMAND SEUL'}
            </span>
          </button>

          {/* Couleurs syntaxiques */}
          <button
            type="button"
            onClick={onToggleGrammarColors}
            className="w-full flex items-center justify-between p-2.5 border border-black bg-white hover:bg-neutral-50 transition-colors text-left cursor-pointer"
          >
            <div className="flex flex-col pr-2">
              <span className="font-mono text-[11px] font-bold uppercase text-black">
                Code couleur syntaxique
              </span>
              <span className="text-[10px] text-neutral-500 leading-tight">
                Soulignement catégoriel des termes
              </span>
            </div>
            <span
              className={`font-mono text-[10px] font-bold px-2 py-0.5 border ${
                showGrammarColors
                  ? 'bg-black text-white border-black'
                  : 'bg-neutral-100 text-neutral-400 border-neutral-300'
              }`}
            >
              {showGrammarColors ? 'ACTIF' : 'INACTIF'}
            </span>
          </button>

          {/* Mode Plein Écran */}
          <button
            type="button"
            onClick={onToggleFullscreen}
            className="w-full flex items-center justify-between p-2.5 border border-black bg-white hover:bg-neutral-50 transition-colors text-left cursor-pointer"
          >
            <div className="flex flex-col pr-2">
              <span className="font-mono text-[11px] font-bold uppercase text-black">
                Mode Plein Écran
              </span>
              <span className="text-[10px] text-neutral-500 leading-tight">
                Masque l'interface du navigateur
              </span>
            </div>
            <span
              className={`font-mono text-[10px] font-bold px-2 py-0.5 border ${
                isFullscreen
                  ? 'bg-black text-white border-black'
                  : 'bg-neutral-100 text-neutral-400 border-neutral-300'
              }`}
            >
              {isFullscreen ? 'ACTIF' : 'INACTIF'}
            </span>
          </button>

          {/* Guide d'accueil initial */}
          {onResetTutorial && (
            <button
              type="button"
              onClick={onResetTutorial}
              className="w-full flex items-center justify-between p-2.5 border border-black bg-white hover:bg-neutral-50 transition-colors text-left cursor-pointer"
            >
              <div className="flex flex-col pr-2">
                <span className="font-mono text-[11px] font-bold uppercase text-black">
                  Guide d'accueil
                </span>
                <span className="text-[10px] text-neutral-500 leading-tight">
                  Réafficher l'indicateur d'accueil sur « Gespenst »
                </span>
              </div>
              <span className="font-mono text-[10px] font-bold px-2 py-0.5 border border-black bg-neutral-100 hover:bg-black hover:text-white transition-colors">
                RÉINITIALISER
              </span>
            </button>
          )}
        </div>

        {/* Légende syntaxique dynamique */}
        {showGrammarColors && (
          <div className="mb-6 p-3.5 border border-black bg-neutral-50 text-xs font-mono">
            <h4 className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2.5">
              // LÉGENDE SYNTAXIQUE
            </h4>
            <div className="space-y-1.5 text-[11px]">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 bg-blue-700 border border-black shrink-0" />
                <span>Noms (Substantive)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 bg-red-700 border border-black shrink-0" />
                <span>Verbes (Verben)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 bg-emerald-700 border border-black shrink-0" />
                <span>Adjectifs / Adverbes</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 bg-amber-600 border border-black shrink-0" />
                <span>Articles / Pronoms</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 bg-neutral-600 border border-black shrink-0" />
                <span>Prépositions / Conjonctions</span>
              </div>
            </div>
          </div>
        )}

        {/* Instructions d'ergonomie */}
        <div className="mt-auto p-3.5 border border-black bg-neutral-100 text-[10.5px] font-mono leading-relaxed">
          <span className="font-bold text-black uppercase tracking-wider block mb-1.5">
            // GUIDE D'INTERACTION
          </span>
          <ul className="text-neutral-700 space-y-1">
            <li>• <strong>Survol phrase</strong> : traduction en contexte immédiate</li>
            <li>• <strong>Clic phrase</strong> : épingle la phrase traduite</li>
            <li>• <strong>Survol mot</strong> : analyse morphologique & étymologie</li>
            <li>• <strong>Clic verrou</strong> : fige la fiche d'un mot</li>
            <li>• <strong>Touche ÉCHAP</strong> : ferme réglages, sommaire & fiches</li>
          </ul>
        </div>
      </aside>
    </>
  );
};
