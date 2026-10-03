import React, { useState } from 'react';
import { Heart, Menu, X, Share2 } from 'lucide-react';
import { OpayIcon } from './OpayIcon';
import { PRIMARY_OPAY_ACCOUNT } from '../data/fundraiserData';

interface NavbarProps {
  onOpenDonate: () => void;
  onOpenShare: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDonate, onOpenShare }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0c0a09]/95 border-b border-[#292524] transition-all">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-15 sm:h-20">
          
          {/* Zone 1: Single text element wordmark in display face */}
          <a
            href="#"
            className="flex items-center gap-2 group text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
            aria-label="Comfortworld Home"
          >
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#d4af37]/40 flex items-center justify-center bg-stone-900 shadow-sm shrink-0">
              <span className="font-serif-luxury text-[11px] sm:text-xs font-bold text-[#d4af37]">CW</span>
            </span>
            <span className="font-serif-luxury text-base sm:text-xl font-bold tracking-tight text-white whitespace-nowrap">
              <span className="gold-gradient-text">Comfort</span>
              <span className="text-stone-200 ml-1">World</span>
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links (hidden on mobile, visible on desktop) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-sm font-medium text-stone-300">
            <a
              href="#about"
              className="hover:text-[#d4af37] transition-colors whitespace-nowrap"
            >
              Our Story
            </a>
            <a
              href="#goal"
              className="hover:text-[#d4af37] transition-colors whitespace-nowrap"
            >
              Fundraiser Goal
            </a>
            <a
              href="#transparency"
              className="hover:text-[#d4af37] transition-colors whitespace-nowrap"
            >
              Transparency
            </a>
            <a
              href="#supporters"
              className="hover:text-[#d4af37] transition-colors whitespace-nowrap"
            >
              Supporters
            </a>
            <a
              href="#contact"
              className="hover:text-[#d4af37] transition-colors whitespace-nowrap"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: Actions */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            <button
              onClick={onOpenShare}
              className="p-2 sm:px-3 sm:py-2 text-xs font-medium text-stone-300 hover:text-white bg-stone-900/80 hover:bg-stone-800 border border-stone-800 rounded-lg transition-colors flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#d4af37] active:scale-95"
              title="Share Fundraiser"
              aria-label="Share Fundraiser"
            >
              <Share2 className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="hidden sm:inline">Share</span>
            </button>

            <button
              onClick={onOpenDonate}
              className="px-3 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold text-stone-950 bg-gradient-to-r from-[#fef08a] via-[#d4af37] to-[#ca8a04] hover:brightness-105 active:scale-[0.98] rounded-lg shadow-sm shadow-[#d4af37]/20 transition-all flex items-center gap-1.5 sm:gap-2 whitespace-nowrap cursor-pointer"
            >
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-stone-950 text-stone-950" />
              <span className="hidden xs:inline">Support Comfortworld</span>
              <span className="xs:hidden">Support</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 md:hidden text-stone-400 hover:text-white rounded-lg focus-visible:ring-2 focus-visible:ring-[#d4af37]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-800 bg-[#0f0d0b] px-4 pt-3 pb-5 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          
          {/* Quick OPay Account Bar in Drawer */}
          <div className="p-3 rounded-xl bg-stone-950 border border-emerald-500/30 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <OpayIcon size={20} />
              <span className="text-xs text-stone-300">
                OPay: <strong className="text-white font-mono">{PRIMARY_OPAY_ACCOUNT.accountNumber}</strong>
              </span>
            </div>
            <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950 px-2 py-0.5 rounded">
              Direct Transfer
            </span>
          </div>

          <nav className="flex flex-col space-y-1 text-sm font-medium text-stone-300">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-900 hover:text-[#d4af37] transition-colors"
            >
              Our Story & Products
            </a>
            <a
              href="#goal"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-900 hover:text-[#d4af37] transition-colors"
            >
              Fundraiser Goal & Progress
            </a>
            <a
              href="#transparency"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-900 hover:text-[#d4af37] transition-colors"
            >
              Budget Transparency (₦100,000)
            </a>
            <a
              href="#supporters"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-900 hover:text-[#d4af37] transition-colors"
            >
              Supporters Wall
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-900 hover:text-[#d4af37] transition-colors"
            >
              Contact & Social Channels
            </a>
          </nav>

          <div className="pt-2 border-t border-stone-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDonate();
              }}
              className="w-full py-3 text-center text-sm font-bold text-stone-950 bg-gradient-to-r from-[#fef08a] via-[#d4af37] to-[#ca8a04] rounded-lg shadow-md active:scale-98"
            >
              Support Comfortworld Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
