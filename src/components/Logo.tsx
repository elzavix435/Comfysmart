import React from 'react';

interface LogoProps {
  variant?: 'full' | 'badge-only' | 'wordmark' | 'compact';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'full', className = '', size = 'md' }) => {
  const getBadgeDimensions = () => {
    switch (size) {
      case 'sm': return { width: 34, height: 34 };
      case 'lg': return { width: 72, height: 72 };
      case 'xl': return { width: 110, height: 110 };
      case 'md':
      default: return { width: 48, height: 48 };
    }
  };

  const dim = getBadgeDimensions();

  // Circular Badge Emblem with CW Monogram and "WHERE COMFORT MEETS CONFIDENCE"
  const BadgeSVG = () => (
    <svg
      width={dim.width}
      height={dim.height}
      viewBox="0 0 160 160"
      className="shrink-0 drop-shadow-[0_4px_12px_rgba(212,175,55,0.25)] select-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="goldRadial" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#fff2a8" />
          <stop offset="45%" stopColor="#d4af37" />
          <stop offset="85%" stopColor="#996515" />
          <stop offset="100%" stopColor="#633e08" />
        </radialGradient>
        <linearGradient id="goldLinear" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#a16207" />
        </linearGradient>
        <linearGradient id="badgeDark" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a140f" />
          <stop offset="100%" stopColor="#080706" />
        </linearGradient>
        <path
          id="upperArc"
          d="M 28 80 A 52 52 0 0 1 132 80"
          fill="none"
        />
        <path
          id="lowerArc"
          d="M 132 80 A 52 52 0 0 1 28 80"
          fill="none"
        />
      </defs>

      {/* Outer golden rim ring */}
      <circle cx="80" cy="80" r="76" stroke="url(#goldLinear)" strokeWidth="2.5" opacity="0.9" />
      <circle cx="80" cy="80" r="72" stroke="url(#goldLinear)" strokeWidth="0.8" opacity="0.5" strokeDasharray="3 3" />
      
      {/* Background circle */}
      <circle cx="80" cy="80" r="70" fill="url(#badgeDark)" />

      {/* Inner dotted star constellation ring */}
      <circle cx="80" cy="80" r="48" stroke="url(#goldLinear)" strokeWidth="1" strokeDasharray="2 6" opacity="0.6" />

      {/* Decorative Stars */}
      {/* Top star */}
      <polygon points="80,34 81.8,38.5 86.5,40.5 81.8,42.5 80,47 78.2,42.5 73.5,40.5 78.2,38.5" fill="url(#goldLinear)" />
      {/* Left star */}
      <polygon points="40,80 44.5,81.8 46.5,86.5 44.5,88.2 40,90 38.2,85.5 33.5,83.5 38.2,81.8" fill="url(#goldLinear)" />
      {/* Right star */}
      <polygon points="120,80 124.5,81.8 126.5,86.5 124.5,88.2 120,90 118.2,85.5 113.5,83.5 118.2,81.8" fill="url(#goldLinear)" />
      {/* Bottom star */}
      <polygon points="80,126 81.8,121.5 86.5,119.5 81.8,117.5 80,113 78.2,117.5 73.5,119.5 78.2,121.5" fill="url(#goldLinear)" />

      {/* Curved upper text */}
      <text fill="url(#goldLinear)" fontSize="10.5" fontWeight="600" letterSpacing="0.22em" fontFamily="'Cinzel', serif">
        <textPath href="#upperArc" startOffset="50%" textAnchor="middle">
          WHERE COMFORT
        </textPath>
      </text>

      {/* Curved lower text */}
      <text fill="url(#goldLinear)" fontSize="10" fontWeight="600" letterSpacing="0.2em" fontFamily="'Cinzel', serif">
        <textPath href="#lowerArc" startOffset="50%" textAnchor="middle">
          MEETS CONFIDENCE
        </textPath>
      </text>

      {/* Central Monogram CW */}
      <text
        x="80"
        y="93"
        textAnchor="middle"
        fill="url(#goldRadial)"
        fontSize="44"
        fontWeight="700"
        fontFamily="'Playfair Display', Georgia, serif"
        letterSpacing="-0.03em"
        style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))' }}
      >
        CW
      </text>
    </svg>
  );

  if (variant === 'badge-only') {
    return <BadgeSVG />;
  }

  if (variant === 'wordmark') {
    return (
      <span className={`font-serif-luxury font-bold tracking-tight text-white ${className}`}>
        <span className="gold-gradient-text">Comfort</span>
        <span className="text-[#f5f5f4] ml-1.5">World</span>
      </span>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        <BadgeSVG />
        <div className="flex flex-col text-left">
          <span className="font-serif-luxury font-bold text-base leading-tight tracking-tight text-stone-100">
            <span className="gold-gradient-text">Comfort</span> World
          </span>
          <span className="text-[10px] tracking-wider text-[#d4af37]/80 uppercase font-medium">
            Where Comfort Meets Confidence
          </span>
        </div>
      </div>
    );
  }

  // Full Hero / Showcase variant
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <BadgeSVG />
      <div className="mt-3">
        <h1 className="font-serif-luxury font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight">
          <span className="gold-gradient-text">Comfort</span>{' '}
          <span className="text-stone-100">World</span>
        </h1>
        <p className="mt-1 text-xs sm:text-sm tracking-[0.25em] text-[#d4af37] font-cinzel font-semibold uppercase">
          Where Comfort Meets Confidence
        </p>
      </div>
    </div>
  );
};
