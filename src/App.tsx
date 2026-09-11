import { useState, useCallback, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { SettingsPanel } from './components/SettingsPanel';
import { TextReader } from './components/TextReader';
import { manifestoData } from './data/manifesto_de';
import { annotations } from './data/annotations';
import { concepts } from './data/concepts';
import {
  HammerSickleIcon,
  FullscreenEnterIcon,
  FullscreenExitIcon,
  GearIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from './components/Icons';

function App() {
  const [currentChapterId, setCurrentChapterId] = useState('ch0');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [showGrammarColors, setShowGrammarColors] = useState(false);
  const [filterBasicWords, setFilterBasicWords] = useState(true);
  const [showInterlinearTranslations, setShowInterlinearTranslations] = useState(false);
  const [showExcursus, setShowExcursus] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const [highlightedWordId, setHighlightedWordId] = useState<string | null>(null);
  const [highlightedParagraphId, setHighlightedParagraphId] = useState<string | null>(null);

  // Synchronisation de l'état plein écran avec le navigateur
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  // Détection du défilement pour n'afficher les flèches de navigation qu'en haut ou en bas de page
  useEffect(() => {
    const checkScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      const isNonScrollable = scrollHeight <= windowHeight + 60;

      if (isNonScrollable) {
        setIsAtTop(true);
        setIsAtBottom(true);
      } else {
        setIsAtTop(scrollY <= 40);
        setIsAtBottom(windowHeight + scrollY >= scrollHeight - 60);
      }
    };

    checkScroll();
    window.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [currentChapterId, showInterlinearTranslations, showExcursus]);

  const currentChapterIndex = manifestoData.chapters.findIndex((ch) => ch.id === currentChapterId);
  const currentChapter =
    (currentChapterIndex >= 0 ? manifestoData.chapters[currentChapterIndex] : null) ??
    manifestoData.chapters[0];

  const prevChapter = currentChapterIndex > 0 ? manifestoData.chapters[currentChapterIndex - 1] : null;
  const nextChapter =
    currentChapterIndex >= 0 && currentChapterIndex < manifestoData.chapters.length - 1
      ? manifestoData.chapters[currentChapterIndex + 1]
      : null;

  const isAtExtremity = isAtTop || isAtBottom;
  const showPrev = Boolean(prevChapter) && isAtExtremity;
  const showNext = Boolean(nextChapter) && isAtExtremity;

  const handleChapterSelect = useCallback((chapterId: string) => {
    setCurrentChapterId(chapterId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleToggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev);
    setSettingsOpen(false);
  }, []);

  const handleToggleSettings = useCallback(() => {
    setSettingsOpen((prev) => !prev);
    setSidebarOpen(false);
  }, []);

  const handleToggleGrammarColors = useCallback(() => {
    setShowGrammarColors((prev) => !prev);
  }, []);

  const handleToggleFilterBasicWords = useCallback(() => {
    setFilterBasicWords((prev) => !prev);
  }, []);

  const handleToggleInterlinearTranslations = useCallback(() => {
    if (typeof document !== 'undefined' && 'startViewTransition' in document) {
      (document as unknown as { startViewTransition: (cb: () => void) => void }).startViewTransition(() => {
        setShowInterlinearTranslations((prev) => !prev);
      });
    } else {
      setShowInterlinearTranslations((prev) => !prev);
    }
  }, []);

  const handleToggleShowExcursus = useCallback(() => {
    setShowExcursus((prev) => !prev);
  }, []);

  const handleWordHover = useCallback((wordId: string | null) => {
    setHighlightedWordId(wordId);
  }, []);

  const handleParagraphHover = useCallback((paragraphId: string | null) => {
    setHighlightedParagraphId(paragraphId);
  }, []);

  const handleToggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.warn('Erreur passage plein écran:', err);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch((err) => {
          console.warn('Erreur sortie plein écran:', err);
        });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col font-sans selection:bg-black selection:text-white relative">
      {/* 1. Bandeau supérieur architectural permanent avec titre */}
      <header className="sticky top-0 z-40 bg-white border-b-2 border-black h-13 shadow-[0_1px_0_0_#111111] flex items-center justify-between px-0">
        {/* Languette Sommaire collée au bord gauche de l'écran */}
        <div className="flex items-center h-full">
          <button
            onClick={handleToggleSidebar}
            className="group flex items-center h-full bg-black text-white hover:bg-neutral-800 border-r-2 border-black pl-3.5 pr-4 transition-all duration-300 ease-out cursor-pointer select-none"
            title={sidebarOpen ? "Fermer le sommaire" : "Ouvrir le sommaire"}
            aria-label="Sommaire"
          >
            <span className="shrink-0 flex items-center justify-center">
              <HammerSickleIcon className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-200" />
            </span>
            <span className="max-w-0 opacity-0 group-hover:max-w-28 group-hover:opacity-100 group-hover:ml-2.5 overflow-hidden whitespace-nowrap font-mono text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ease-out">
              Sommaire
            </span>
          </button>

          {/* Titre de l'œuvre */}
          <div className="pl-4 sm:pl-6 flex flex-col justify-center">
            <h1 className="font-bauhaus font-bold text-sm sm:text-base leading-none uppercase tracking-tight text-black">
              Manifest der Kommunistischen Partei
            </h1>
            <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider mt-1">
              Marx & Engels · 1848
            </p>
          </div>
        </div>

        {/* Languettes Réglages & Plein écran collées au bord droit de l'écran */}
        <div className="flex items-center h-full">
          {/* Languette Bascule Traduction bilingue */}
          <button
            onClick={handleToggleInterlinearTranslations}
            className={`group flex items-center h-full border-l-2 border-black pl-3 pr-3 transition-all duration-300 ease-out cursor-pointer select-none ${
              showInterlinearTranslations
                ? 'bg-black text-white hover:bg-neutral-800'
                : 'bg-white text-black hover:bg-neutral-100'
            }`}
            title={showInterlinearTranslations ? "Désactiver la traduction (Allemand seul)" : "Activer la traduction française (Bilingue)"}
            aria-label="Traduction française"
          >
            <span
              className={`w-2 h-2 shrink-0 transition-colors duration-200 ${
                showInterlinearTranslations ? 'bg-[#D42B1E]' : 'border border-black bg-white'
              }`}
            />
            <span className="ml-1.5 font-mono text-[11px] font-bold uppercase tracking-wider">
              FR
            </span>
            <span className="max-w-0 opacity-0 group-hover:max-w-28 group-hover:opacity-100 group-hover:ml-1.5 overflow-hidden whitespace-nowrap font-mono text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ease-out">
              {showInterlinearTranslations ? '(Bilingue)' : '(Allemand seul)'}
            </span>
          </button>

          {/* Languette Réglages (Engrenage situé à gauche du plein écran) */}
          <button
            onClick={handleToggleSettings}
            className="group flex items-center h-full bg-white text-black hover:bg-neutral-100 border-l-2 border-black pl-3.5 pr-3 transition-all duration-300 ease-out cursor-pointer select-none"
            title={settingsOpen ? "Fermer les réglages" : "Ouvrir les réglages"}
            aria-label="Réglages"
          >
            <span className="max-w-0 opacity-0 group-hover:max-w-24 group-hover:opacity-100 group-hover:mr-2 overflow-hidden whitespace-nowrap font-mono text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ease-out">
              Réglages
            </span>
            <GearIcon className="w-4 h-4 text-black group-hover:rotate-45 transition-transform duration-300 shrink-0" />
          </button>

          {/* Languette Plein écran */}
          <button
            onClick={handleToggleFullscreen}
            className="group flex items-center h-full bg-white text-black hover:bg-neutral-100 border-l-2 border-black pl-3 pr-3.5 transition-all duration-300 ease-out cursor-pointer select-none"
            title={isFullscreen ? "Quitter le plein écran" : "Passer en mode plein écran"}
            aria-label={isFullscreen ? "Quitter le plein écran" : "Plein écran"}
          >
            <span className="max-w-0 opacity-0 group-hover:max-w-28 group-hover:opacity-100 group-hover:mr-2 overflow-hidden whitespace-nowrap font-mono text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ease-out">
              {isFullscreen ? 'Réduire' : 'Plein écran'}
            </span>
            <span className="shrink-0">
              {isFullscreen ? (
                <FullscreenExitIcon className="w-4 h-4 text-black group-hover:scale-110 transition-transform duration-200" />
              ) : (
                <FullscreenEnterIcon className="w-4 h-4 text-black group-hover:scale-110 transition-transform duration-200" />
              )}
            </span>
          </button>
        </div>
      </header>

      {/* 2. Flèche dépliable en bas à gauche (Section précédente si applicable) */}
      {prevChapter && (
        <div
          className={`fixed bottom-6 left-0 z-30 transition-all duration-300 ease-out ${
            showPrev
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 translate-y-3 pointer-events-none'
          }`}
        >
          <button
            onClick={() => handleChapterSelect(prevChapter.id)}
            className="group flex items-center h-10 bg-white text-black hover:bg-neutral-100 border-y-2 border-r-2 border-black pl-3 pr-3.5 transition-all duration-300 ease-out cursor-pointer select-none"
            title={`Section précédente : ${prevChapter.titleDe}`}
            aria-label={`Section précédente : ${prevChapter.titleDe}`}
          >
            <ArrowLeftIcon className="w-4 h-4 text-black group-hover:-translate-x-1 transition-transform duration-200 shrink-0" />
            <div className="max-w-0 opacity-0 group-hover:max-w-72 group-hover:opacity-100 group-hover:ml-2.5 overflow-hidden whitespace-nowrap transition-all duration-300 ease-out text-left">
              <span className="font-mono text-[9px] block text-neutral-500 uppercase tracking-widest leading-none mb-0.5">
                SECTION PRÉCÉDENTE
              </span>
              <span className="font-bauhaus font-bold text-xs uppercase tracking-tight text-black block truncate">
                {prevChapter.titleDe}
              </span>
            </div>
          </button>
        </div>
      )}

      {/* 3. Flèche dépliable en bas à droite (Section suivante si applicable) */}
      {nextChapter && (
        <div
          className={`fixed bottom-6 right-0 z-30 transition-all duration-300 ease-out ${
            showNext
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 translate-y-3 pointer-events-none'
          }`}
        >
          <button
            onClick={() => handleChapterSelect(nextChapter.id)}
            className="group flex items-center h-10 bg-white text-black hover:bg-neutral-100 border-y-2 border-l-2 border-black pl-3.5 pr-3 transition-all duration-300 ease-out cursor-pointer select-none"
            title={`Section suivante : ${nextChapter.titleDe}`}
            aria-label={`Section suivante : ${nextChapter.titleDe}`}
          >
            <div className="max-w-0 opacity-0 group-hover:max-w-72 group-hover:opacity-100 group-hover:mr-2.5 overflow-hidden whitespace-nowrap transition-all duration-300 ease-out text-right">
              <span className="font-mono text-[9px] block text-neutral-500 uppercase tracking-widest leading-none mb-0.5">
                SECTION SUIVANTE
              </span>
              <span className="font-bauhaus font-bold text-xs uppercase tracking-tight text-black block truncate">
                {nextChapter.titleDe}
              </span>
            </div>
            <ArrowRightIcon className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform duration-200 shrink-0" />
          </button>
        </div>
      )}

      {/* 4. Panneau Sommaire latéral gauche (Exclusif au sommaire) */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 z-40 backdrop-blur-[1px] transition-opacity"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
          <aside
            className="fixed top-0 left-0 h-screen w-80 bg-white border-r-2 border-black z-50 p-6 overflow-y-auto shadow-[5px_0px_0px_0px_#111111] animate-in slide-in-from-left duration-200"
            role="dialog"
            aria-label="Sommaire du texte"
          >
            <Navigation
              chapters={manifestoData.chapters}
              currentChapterId={currentChapterId}
              onChapterSelect={(id) => {
                handleChapterSelect(id);
                setSidebarOpen(false);
              }}
              onCloseSidebar={() => setSidebarOpen(false)}
            />
          </aside>
        </>
      )}

      {/* 5. Panneau Réglages latéral droit */}
      <SettingsPanel
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        filterBasicWords={filterBasicWords}
        onToggleFilterBasicWords={handleToggleFilterBasicWords}
        showInterlinearTranslations={showInterlinearTranslations}
        onToggleInterlinearTranslations={handleToggleInterlinearTranslations}
        showGrammarColors={showGrammarColors}
        onToggleGrammarColors={handleToggleGrammarColors}
        showExcursus={showExcursus}
        onToggleShowExcursus={handleToggleShowExcursus}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
      />

      {/* 6. Zone de lecture principale Bauhaus épurée et centrée */}
      <main className="flex-1 px-6 sm:px-12 py-12 max-w-4xl w-full mx-auto">
        <TextReader
          chapter={currentChapter}
          annotations={annotations}
          concepts={concepts}
          showGrammarColors={showGrammarColors}
          filterBasicWords={filterBasicWords}
          showInterlinearTranslations={showInterlinearTranslations}
          showExcursus={showExcursus}
          highlightedWordId={highlightedWordId}
          highlightedParagraphId={highlightedParagraphId}
          onWordHover={handleWordHover}
          onParagraphHover={handleParagraphHover}
        />
      </main>
    </div>
  );
}

export default App;
