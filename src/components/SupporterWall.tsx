import React, { useState } from 'react';
import { Heart, Shield, Sparkles, Plus } from 'lucide-react';
import { Donation } from '../types/fundraiser';
import { OpayIcon } from './OpayIcon';

interface SupporterWallProps {
  supporters: Donation[];
  onOpenDonate: () => void;
  onLikeSupporter: (id: string) => void;
}

export const SupporterWall: React.FC<SupporterWallProps> = ({
  supporters,
  onOpenDonate,
  onLikeSupporter
}) => {
  const [filter, setFilter] = useState<'all' | 'top' | 'recent'>('all');

  const filteredSupporters = [...supporters].sort((a, b) => {
    if (filter === 'top') {
      return b.amount - a.amount;
    }
    if (filter === 'recent') {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    // 'all' default - newest first
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  const formatDate = (isoString: string) => {
    try {
      const date = new Date(isoString);
      return date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    } catch {
      return 'Recently';
    }
  };

  return (
    <section id="supporters" className="py-12 sm:py-20 md:py-28 bg-[#0c0a09] border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-cinzel font-semibold text-[#d4af37]">
              Community Backers
            </span>
            <h2 className="mt-2 font-serif-luxury text-2xl sm:text-4xl md:text-5xl font-bold text-white [text-wrap:balance]">
              The Supporter Wall
            </h2>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-stone-300">
              Honoring the believers, patrons, and early advocates helping Comfortworld bring luxury comfort wear to life.
            </p>
          </div>

          {/* Interactive Filter Control & CTA */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {/* Filter buttons */}
            <div className="flex items-center p-1 bg-stone-900 border border-stone-800 rounded-lg overflow-x-auto max-w-full">
              <button
                onClick={() => setFilter('all')}
                className={`px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap active:scale-95 ${
                  filter === 'all'
                    ? 'bg-[#d4af37] text-stone-950 font-semibold'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                All ({supporters.length})
              </button>
              <button
                onClick={() => setFilter('top')}
                className={`px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap active:scale-95 ${
                  filter === 'top'
                    ? 'bg-[#d4af37] text-stone-950 font-semibold'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                Top Pledges
              </button>
              <button
                onClick={() => setFilter('recent')}
                className={`px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap active:scale-95 ${
                  filter === 'recent'
                    ? 'bg-[#d4af37] text-stone-950 font-semibold'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                Recent
              </button>
            </div>

            <button
              onClick={onOpenDonate}
              className="px-3.5 sm:px-4 py-2 text-xs font-bold text-stone-950 bg-gradient-to-r from-[#fef08a] via-[#d4af37] to-[#ca8a04] hover:brightness-105 rounded-lg flex items-center gap-1.5 transition-all shadow-sm shrink-0 active:scale-95"
            >
              <Plus className="w-3.5 h-3.5 text-stone-950" />
              <span>Join Backers</span>
            </button>
          </div>
        </div>

        {/* Supporters Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredSupporters.map((supporter) => {
            const isTop = supporter.amount >= 15000;
            return (
              <div
                key={supporter.id}
                className={`p-4 sm:p-5 rounded-2xl bg-stone-900/80 border transition-all flex flex-col justify-between group ${
                  isTop
                    ? 'border-[#d4af37]/40 shadow-lg shadow-[#d4af37]/5 bg-gradient-to-br from-stone-900 via-stone-900/90 to-stone-950'
                    : 'border-stone-800 hover:border-stone-700'
                }`}
              >
                <div>
                  {/* Top Header of Card */}
                  <div className="flex items-start justify-between gap-3 mb-2.5 sm:mb-3">
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center text-xs font-bold text-[#d4af37] shrink-0 font-serif-luxury">
                        {supporter.isAnonymous
                          ? 'CW'
                          : supporter.donorName.charAt(0).toUpperCase()}
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-xs sm:text-sm text-stone-100 flex items-center gap-1.5 truncate">
                          <span className="truncate">
                            {supporter.isAnonymous ? 'Anonymous Backer' : supporter.donorName}
                          </span>
                          {isTop && (
                            <span title="Top Contributor" className="shrink-0">
                              <Sparkles className="w-3.5 h-3.5 text-[#fef08a]" />
                            </span>
                          )}
                        </h4>
                        {/* Unboxed Metadata with · separator */}
                        <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-stone-400">
                          <span>{formatDate(supporter.createdAt)}</span>
                          <span aria-hidden="true">·</span>
                          <span className="flex items-center gap-1 text-emerald-400">
                            <OpayIcon size={12} />
                            <span>OPay</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Contributed Amount */}
                    <div className="text-right shrink-0">
                      <span className="font-serif-luxury text-base sm:text-lg font-bold text-[#fef08a] tabular-nums block">
                        ₦{supporter.amount.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Like Reaction & Verified Status */}
                <div className="mt-4 sm:mt-5 pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs">
                  <span className="text-[10px] sm:text-[11px] text-stone-400 flex items-center gap-1">
                    <Shield className="w-3 h-3 text-[#d4af37]" />
                    Verified Backer
                  </span>

                  <button
                    onClick={() => onLikeSupporter(supporter.id)}
                    className="flex items-center gap-1.5 text-stone-400 hover:text-rose-400 active:scale-125 transition-all px-2 py-1 rounded hover:bg-stone-800"
                    title="Send a heart to this supporter"
                  >
                    <Heart className="w-3.5 h-3.5 fill-rose-500/20 text-rose-400" />
                    <span className="tabular-nums font-medium text-xs">{supporter.likes}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action Banner */}
        <div className="mt-10 sm:mt-14 p-5 sm:p-8 rounded-2xl bg-gradient-to-r from-stone-900 via-stone-900/90 to-stone-950 border border-[#d4af37]/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
          <div>
            <h3 className="font-serif-luxury text-lg sm:text-2xl font-bold text-white">
              Want to see your name on this wall?
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 mt-1">
              Transfer to official OPay account <strong>8126315241</strong> starting from ₦1,000. You can also remain completely anonymous.
            </p>
          </div>
          <button
            onClick={onOpenDonate}
            className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-bold text-stone-950 bg-gradient-to-r from-[#fef08a] via-[#d4af37] to-[#ca8a04] hover:brightness-105 active:scale-[0.98] rounded-xl shadow-md whitespace-nowrap shrink-0 transition-all text-center"
          >
            Contribute to Fundraiser
          </button>
        </div>

      </div>
    </section>
  );
};
