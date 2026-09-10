import React from 'react';

/**
 * Icône vectorielle de la faucille et du marteau.
 * Silhouette classique, équilibrée et immédiatement reconnaissable.
 */
export const HammerSickleIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 550 550"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <g transform="translate(18.000002,-824.0001)">
      {/* Marteau ouvrier */}
      <path d="m 157.54301,922.36336 -16.97149,16.9707 -45.256019,45.2539 -56.570993,56.57034 62.227502,62.2246 56.571,-56.5684 299.82842,299.8124 a 32.001491,31.999993 0 0 0 45.25601,0 32.001491,31.999993 0 0 0 0,-45.2539 l -299.82646,-299.8143 16.9715,-16.97074 50.91448,-50.91015 z" />
      {/* Faucille paysanne */}
      <path d="m 255.989,844.0001 c 0,0 168.00781,127.99997 168.00783,256 C 423.99684,1164 367.99425,1236 271.98975,1236 c -64.00296,0 -104.24119,-47.7637 -104.24119,-47.7637 l -11.31302,11.3125 a 16.000745,15.999996 0 0 0 -22.62801,0 16.000745,15.999996 0 0 0 -2.47863,3.2227 32.001491,31.999993 0 0 0 -31.464359,8.0918 32.001491,31.999993 0 0 0 -9.330512,21.5449 C 65.101725,1246.1605 22.969246,1272.9834 4.2643862,1308 l 0.029298,0.029 A 32.001491,31.999993 0 0 0 4.2643862,1340 32.001491,31.999993 0 0 0 47.979313,1351.7129 c 35.025561,-18.708 61.854737,-60.8518 75.605087,-86.2813 a 32.001491,31.999993 0 0 0 21.53616,-9.3144 32.001491,31.999993 0 0 0 7.93201,-13.2012 c 24.51647,23.0544 71.44493,57.084 134.93792,57.084 96.00451,0 200.00932,-72 200.00932,-199.9999 0,-160.00002 -232.01081,-256 -232.01081,-256 z" />
    </g>
  </svg>
);

/**
 * Icône d'entrée en plein écran - coins vectoriels géométriques Bauhaus.
 * Remplace avantageusement les caractères Unicode buggés (⛶).
 */
export const FullscreenEnterIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="square"
    strokeLinejoin="miter"
    className={className}
    aria-hidden="true"
  >
    {/* Coin supérieur gauche */}
    <path d="M4 9V4h5" />
    {/* Coin supérieur droit */}
    <path d="M20 9V4h-5" />
    {/* Coin inférieur gauche */}
    <path d="M4 15v5h5" />
    {/* Coin inférieur droit */}
    <path d="M20 15v5h-5" />
  </svg>
);

/**
 * Icône de sortie de plein écran - coins vectoriels contractés.
 * Remplace les caractères Unicode buggés (🗗).
 */
export const FullscreenExitIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="square"
    strokeLinejoin="miter"
    className={className}
    aria-hidden="true"
  >
    {/* Coin supérieur gauche contracté */}
    <path d="M9 4v5H4" />
    {/* Coin supérieur droit contracté */}
    <path d="M15 4v5h5" />
    {/* Coin inférieur gauche contracté */}
    <path d="M9 20v-5H4" />
    {/* Coin inférieur droit contracté */}
    <path d="M15 20v-5h5" />
  </svg>
);

/**
 * Icône d'engrenage Bauhaus géométrique.
 */
export const GearIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="square"
    strokeLinejoin="miter"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
  </svg>
);

/**
 * Flèche gauche géométrique Bauhaus.
 */
export const ArrowLeftIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="square"
    strokeLinejoin="miter"
    className={className}
    aria-hidden="true"
  >
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

/**
 * Flèche droite géométrique Bauhaus.
 */
export const ArrowRightIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="square"
    strokeLinejoin="miter"
    className={className}
    aria-hidden="true"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
