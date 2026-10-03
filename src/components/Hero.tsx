import React, { useState } from 'react';
import { Heart, ArrowUpRight, ShieldCheck, Sparkles, Users, Copy, Check } from 'lucide-react';
import { Logo } from './Logo';
import { OpayIcon } from './OpayIcon';
import { PRIMARY_OPAY_ACCOUNT } from '../data/fundraiserData';

interface HeroProps {
  totalRaised: number;
  goal: number;
  donorCount: number;
  onOpenDonate: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  totalRaised,
  goal,
  donorCount,
  onOpenDonate
}) => {
  const [copied, setCopied] = useState(false);
  const percentage = Math.max(1, Math.min(100, Math.round((totalRaised / goal) * 100)));
  const remaining = Math.max(0, goal - totalRaised);

  const handleCopyHero = () => {
    navigator.clipboard.writeText(PRIMARY_OPAY_ACCOUNT.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-12 sm:pb-20 md:pt-14 md:pb-24 border-b border-stone-800/80">
      {/* Background Ambient Glow & Subtle Pattern */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#d4af37]/10 via-[#d4af37]/5 to-transparent blur-3xl opacity-60" />
        <div className="absolute -top-32 right-10 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Brand Story & Call to Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Authentic Brand Emblem & Slogan */}
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <Logo variant="badge-only" size="sm" />
              <div>
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-cinzel font-semibold text-[#d4af37]">
                  Official Campaign
                </span>
                <p className="text-xs text-stone-400 font-medium">
                  Where Comfort Meets Confidence
                </p>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] [text-wrap:balance]">
              Where Comfort Meets{' '}
              <span className="gold-gradient-text">Confidence.</span>
            </h1>

            {/* Short Brand Story */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-stone-300 leading-relaxed max-w-2xl font-normal">
              Comfortworld was created to transform everyday lifestyle wear into an experience of effortless luxury. We craft ultra-soft, tailored apparel and bespoke accessories that feel like a second skin while commanding presence in every room. 
            </p>

            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-stone-400 leading-relaxed max-w-2xl">
              This fundraiser powers our critical launch milestone: procuring premium heavyweight fleece stock, crafting bespoke gold-embossed packaging, producing customized accessories, and building a reliable logistics framework across Nigeria.
            </p>

            {/* Real-time Quick Progress Box in Hero */}
            <div className="w-full mt-6 sm:mt-8 p-4 sm:p-5 rounded-2xl bg-stone-900/90 border border-[#d4af37]/20 shadow-xl max-w-xl backdrop-blur-sm">
              <div className="flex items-baseline justify-between mb-2">
                <div>
                  <span className="text-[10px] sm:text-xs font-medium text-stone-400 uppercase tracking-wider block">
                    Amount Raised
                  </span>
                  <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white tabular-nums">
                    ₦{totalRaised.toLocaleString()}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] sm:text-xs font-medium text-stone-400 uppercase tracking-wider block">
                    Fundraising Goal
                  </span>
                  <span className="text-base sm:text-xl font-semibold text-stone-300 tabular-nums">
                    ₦{goal.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 bg-stone-950 rounded-full overflow-hidden p-0.5 border border-stone-800">
                <div
                  className="h-full bg-gradient-to-r from-[#ca8a04] via-[#d4af37] to-[#fef08a] rounded-full transition-all duration-700 ease-out shadow-[0_0_12px_rgba(212,175,55,0.4)]"
                  style={{ width: `${Math.max(percentage, 1)}%`, minWidth: '6px' }}
                />
              </div>

              {/* Progress Stats Sub-row */}
              <div className="mt-3 flex items-center justify-between text-xs text-stone-400 font-medium">
                <div className="flex items-center gap-1.5 text-[#fef08a]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="tabular-nums font-semibold">{percentage}% Funded</span>
                </div>
                <span className="text-stone-400 hidden xs:inline">
                  <span className="text-stone-200 font-semibold tabular-nums">₦{remaining.toLocaleString()}</span> to goal
                </span>
                <div className="flex items-center gap-1 text-stone-300">
                  <Users className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span className="tabular-nums font-semibold">{donorCount} Backers</span>
                </div>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="mt-6 sm:mt-8 flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenDonate}
                className="w-full xs:w-auto px-6 py-3.5 sm:px-7 sm:py-3.5 text-sm sm:text-base font-bold text-stone-950 bg-gradient-to-r from-[#fef08a] via-[#d4af37] to-[#ca8a04] hover:brightness-105 active:scale-[0.98] rounded-xl shadow-lg shadow-[#d4af37]/25 transition-all flex items-center justify-center gap-2.5 whitespace-nowrap cursor-pointer"
              >
                <Heart className="w-5 h-5 fill-stone-950 text-stone-950 shrink-0" />
                <span>Support Comfortworld</span>
              </button>

              <a
                href="#goal"
                className="w-full xs:w-auto px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-medium text-stone-200 hover:text-white bg-stone-900/80 hover:bg-stone-850 border border-stone-700 hover:border-stone-600 rounded-xl transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>View Goal Breakdown</span>
                <ArrowUpRight className="w-4 h-4 text-[#d4af37] shrink-0" />
              </a>
            </div>

            {/* OPay Quick Account Bar in Hero */}
            <div className="mt-5 w-full max-w-xl p-3 sm:p-3.5 rounded-xl bg-stone-950/80 border border-emerald-500/30 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5 min-w-0">
                <OpayIcon size={24} />
                <div className="min-w-0">
                  <span className="text-[10px] text-emerald-400 font-semibold block uppercase tracking-wider">
                    OPay Transfer Account
                  </span>
                  <span className="font-mono text-sm sm:text-base font-extrabold text-white tracking-wider truncate block">
                    {PRIMARY_OPAY_ACCOUNT.accountNumber}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCopyHero}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 transition-all shrink-0 active:scale-95 ${
                  copied
                    ? 'bg-emerald-500 text-stone-950'
                    : 'bg-[#14B866] hover:bg-[#0fa056] text-stone-950'
                }`}
                aria-label="Copy OPay account number"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Trust Signals */}
            <div className="mt-6 pt-4 border-t border-stone-800/80 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-stone-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Direct Bank Transfer</span>
              </div>
              <span className="hidden sm:inline text-stone-600">·</span>
              <div>Open Transparent Ledger</div>
              <span className="hidden sm:inline text-stone-600">·</span>
              <div>Instant Digital Receipt</div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#d4af37]/30 via-transparent to-[#d4af37]/10 blur-sm -z-10" />

              <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/30 bg-stone-900 shadow-2xl">
                {/* Hero Editorial Photography */}
                <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] relative">
                  <img
                    src="/src/assets/images/hero_comfort_apparel_1790523930951.jpg"
                    alt="Comfortworld Luxury Apparel Craftsmanship"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />
                  
                  {/* Floating Brand Badge Overlay */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-stone-950/80 backdrop-blur-md px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg border border-[#d4af37]/30">
                    <span className="text-[10px] sm:text-[11px] font-cinzel font-semibold tracking-wider text-[#fef08a] uppercase">
                      New Collection Drop 01
                    </span>
                  </div>

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 p-3.5 sm:p-4 rounded-xl bg-stone-950/85 backdrop-blur-md border border-stone-800">
                    <p className="font-serif-luxury text-sm sm:text-base font-bold text-white">
                      The Comfortworld Standard
                    </p>
                    <p className="text-[11px] sm:text-xs text-stone-300 mt-0.5">
                      380 GSM Heavyweight Organic Fabric & Bespoke Gold Finish
                    </p>
                    <div className="mt-2 flex items-center justify-between text-[10px] sm:text-[11px] text-stone-400">
                      <span className="text-[#d4af37] font-semibold">Production Ready</span>
                      <span>Target: Lagos, Abuja & Beyond</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
