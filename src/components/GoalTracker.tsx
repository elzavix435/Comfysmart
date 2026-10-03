import React, { useState } from 'react';
import { Target, Heart, CheckCircle2, TrendingUp, Sparkles, Users, ArrowRight, Copy, Check, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { TRANSPARENCY_BUDGET, PRIMARY_OPAY_ACCOUNT } from '../data/fundraiserData';
import { OpayIcon } from './OpayIcon';

interface GoalTrackerProps {
  totalRaised: number;
  goal: number;
  donorCount: number;
  onOpenDonateWithAmount: (amount: number) => void;
}

export const GoalTracker: React.FC<GoalTrackerProps> = ({
  totalRaised,
  goal,
  donorCount,
  onOpenDonateWithAmount,
}) => {
  const percentage = Math.max(1, Math.min(100, Math.round((totalRaised / goal) * 100)));
  const remaining = Math.max(0, goal - totalRaised);
  const avgDonation = donorCount > 0 ? Math.round(totalRaised / donorCount) : 0;

  // Impact simulation calculator state
  const [selectedImpactAmount, setSelectedImpactAmount] = useState<number>(5000);
  const [copiedAccount, setCopiedAccount] = useState<boolean>(false);

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(PRIMARY_OPAY_ACCOUNT.accountNumber);
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 2500);
  };

  const getImpactDescription = (amt: number) => {
    if (amt >= 20000) {
      return 'Covers an essential batch of 380 GSM fleece and partial brand photo shoot production.';
    }
    if (amt >= 10000) {
      return 'Funds 1 full roll of heavy combed organic fleece fabric or custom engraved brass hardware.';
    }
    if (amt >= 5000) {
      return 'Sponsors 10 luxury unboxing packaging sets (rigid magnetic gift boxes with gold embossed foil).';
    }
    return 'Funds custom woven neck labels and protective water-resistant delivery satchels for 5 orders.';
  };

  return (
    <section id="goal" className="py-12 sm:py-20 md:py-24 bg-stone-950/60 border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-cinzel font-semibold text-[#d4af37]">
            Campaign Objective
          </span>
          <h2 className="mt-2 font-serif-luxury text-2xl sm:text-4xl md:text-5xl font-bold text-white [text-wrap:balance]">
            Our Launch Goal: <span className="gold-gradient-text">₦{goal.toLocaleString()}</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-stone-300">
            Every contribution directly funds our inaugural commercial release. Track our real-time progress and see how each Naira moves Comfortworld forward.
          </p>
        </div>

        {/* Big Progress Card */}
        <div className="mt-8 sm:mt-12 bg-stone-900/90 rounded-2xl border border-stone-800 p-4 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden">
          {/* Subtle top sheen */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />

          {/* Top Metric Grid: Responsive 2-col on mobile, 4-col on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-stone-800">
            <div className="p-3 sm:p-0 rounded-xl bg-stone-950/50 sm:bg-transparent border border-stone-850 sm:border-none">
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-stone-400 font-medium block truncate">
                Total Raised
              </span>
              <span className="mt-1 font-serif-luxury text-xl sm:text-3xl lg:text-4xl font-bold text-[#fef08a] tabular-nums block truncate">
                ₦{totalRaised.toLocaleString()}
              </span>
              <span className="text-[10px] sm:text-[11px] text-emerald-400 font-medium mt-0.5 block">
                {percentage}% of target
              </span>
            </div>

            <div className="p-3 sm:p-0 rounded-xl bg-stone-950/50 sm:bg-transparent border border-stone-850 sm:border-none">
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-stone-400 font-medium block truncate">
                Remaining
              </span>
              <span className="mt-1 font-serif-luxury text-xl sm:text-3xl lg:text-4xl font-bold text-white tabular-nums block truncate">
                ₦{remaining.toLocaleString()}
              </span>
              <span className="text-[10px] sm:text-[11px] text-stone-400 font-medium mt-0.5 block truncate">
                Goal: ₦{goal.toLocaleString()}
              </span>
            </div>

            <div className="p-3 sm:p-0 rounded-xl bg-stone-950/50 sm:bg-transparent border border-stone-850 sm:border-none">
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-stone-400 font-medium block truncate">
                Backers
              </span>
              <span className="mt-1 font-serif-luxury text-xl sm:text-3xl lg:text-4xl font-bold text-stone-100 tabular-nums block">
                {donorCount}
              </span>
              <span className="text-[10px] sm:text-[11px] text-stone-400 font-medium mt-0.5 block">
                Verified supporters
              </span>
            </div>

            <div className="p-3 sm:p-0 rounded-xl bg-stone-950/50 sm:bg-transparent border border-stone-850 sm:border-none">
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-stone-400 font-medium block truncate">
                Avg Gift
              </span>
              <span className="mt-1 font-serif-luxury text-xl sm:text-3xl lg:text-4xl font-bold text-stone-200 tabular-nums block truncate">
                ₦{avgDonation.toLocaleString()}
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#d4af37] font-medium mt-0.5 block">
                High trust
              </span>
            </div>
          </div>

          {/* Main Visual Progress Bar */}
          <div className="mt-6 sm:mt-8">
            <div className="flex items-center justify-between text-xs sm:text-sm font-medium mb-2.5">
              <span className="text-stone-300 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-[#d4af37]" />
                Live Campaign Velocity
              </span>
              <span className="font-cinzel font-bold text-[#fef08a] tabular-nums">
                {percentage}% Achieved
              </span>
            </div>

            <div className="w-full h-3.5 sm:h-5 bg-stone-950 rounded-full overflow-hidden p-0.5 sm:p-1 border border-stone-800 shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-[#b48628] via-[#d4af37] to-[#fef08a] rounded-full transition-all duration-1000 ease-out shadow-[0_0_16px_rgba(212,175,55,0.4)]"
                style={{ width: `${Math.max(percentage, 1)}%`, minWidth: '8px' }}
              />
            </div>

            {/* Milestones markers */}
            <div className="mt-3 sm:mt-4 grid grid-cols-4 text-center text-[10px] sm:text-xs text-stone-400 border-t border-stone-800/60 pt-3 gap-1">
              <div className="flex flex-col items-center">
                <span className={percentage >= 25 ? 'text-[#fef08a] font-semibold' : ''}>25% (₦25k)</span>
                <span className="text-[9px] sm:text-[10px] text-stone-500 leading-tight mt-0.5">Fabric Deposit</span>
              </div>
              <div className="flex flex-col items-center">
                <span className={percentage >= 50 ? 'text-[#fef08a] font-semibold' : ''}>50% (₦50k)</span>
                <span className="text-[9px] sm:text-[10px] text-stone-500 leading-tight mt-0.5">Stock Procured</span>
              </div>
              <div className="flex flex-col items-center">
                <span className={percentage >= 75 ? 'text-[#fef08a] font-semibold' : ''}>75% (₦75k)</span>
                <span className="text-[9px] sm:text-[10px] text-stone-500 leading-tight mt-0.5">Packaging</span>
              </div>
              <div className="flex flex-col items-center">
                <span className={percentage >= 100 ? 'text-[#fef08a] font-semibold' : ''}>100% (₦100k)</span>
                <span className="text-[9px] sm:text-[10px] text-stone-500 leading-tight mt-0.5">Launch & Ship</span>
              </div>
            </div>
          </div>

          {/* Official OPay Bank Transfer Quick Card (Visible right on the page!) */}
          <div className="mt-8 p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-[#0c2417] via-[#101e17] to-stone-950 border-2 border-emerald-500/40 shadow-xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              
              {/* Account Branding & Details */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <OpayIcon size={26} showText={true} />
                  <span className="text-[10px] sm:text-xs font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
                    Official Campaign Transfer Account
                  </span>
                </div>
                <h4 className="font-serif-luxury text-base sm:text-lg font-bold text-white pt-1">
                  Send Direct Bank Transfer to Comfortworld
                </h4>
                <p className="text-xs text-stone-300 max-w-xl">
                  Transfer directly from your <strong>OPay app</strong> or <strong>any commercial bank app</strong> (Zenith, GTBank, Access, Kuda, UBA, etc.) to the verified account below:
                </p>
              </div>

              {/* Number and 1-Tap Copy Action */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                <div className="p-3 rounded-xl bg-stone-950/90 border border-emerald-500/40 flex items-center justify-between sm:justify-start gap-4">
                  <div>
                    <span className="text-[10px] text-emerald-400/90 uppercase font-semibold tracking-wider block">
                      OPay Account No.
                    </span>
                    <span className="font-mono text-xl sm:text-2xl font-black text-white tracking-widest block select-all">
                      {PRIMARY_OPAY_ACCOUNT.accountNumber}
                    </span>
                  </div>

                  <button
                    onClick={handleCopyAccount}
                    className={`px-3.5 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all shrink-0 active:scale-95 shadow-md ${
                      copiedAccount
                        ? 'bg-emerald-500 text-stone-950'
                        : 'bg-[#14B866] hover:bg-[#0fa056] text-stone-950'
                    }`}
                    aria-label="Copy OPay account number"
                  >
                    {copiedAccount ? (
                      <>
                        <Check className="w-4 h-4 stroke-[3]" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 stroke-[2.5]" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <button
                  onClick={() => onOpenDonateWithAmount(5000)}
                  className="px-5 py-3 text-xs sm:text-sm font-bold text-stone-950 bg-gradient-to-r from-[#fef08a] via-[#d4af37] to-[#ca8a04] hover:brightness-105 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 shrink-0 active:scale-95"
                >
                  <Heart className="w-4 h-4 fill-stone-950" />
                  <span>Confirm Transfer</span>
                </button>
              </div>

            </div>

            {/* Quick Metadata line */}
            <div className="mt-3 pt-3 border-t border-emerald-950/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-300">
              <div className="flex items-center gap-3">
                <span>Account Name: <strong className="text-white">{PRIMARY_OPAY_ACCOUNT.accountName}</strong></span>
                <span>·</span>
                <span>Bank: <strong className="text-emerald-300">OPay Digital Services (Paycom)</strong></span>
              </div>
              <div className="text-stone-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Direct Bank Transfer Only</span>
              </div>
            </div>
          </div>

          {/* Interactive "Select Your Impact" Slider/Buttons */}
          <div className="mt-8 p-4 sm:p-5 rounded-xl bg-stone-950/90 border border-[#d4af37]/30">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#d4af37] font-semibold block">
                  Choose Your Impact Tier
                </span>
                <p className="text-xs sm:text-sm text-stone-300 mt-0.5">
                  See what your support accomplishes right now:
                </p>
              </div>

              {/* Quick Select Buttons */}
              <div className="grid grid-cols-4 sm:flex gap-1.5 sm:gap-2">
                {[1000, 5000, 10000, 20000].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setSelectedImpactAmount(amt)}
                    className={`px-2.5 sm:px-3 py-2 text-xs font-semibold rounded-lg transition-all tabular-nums text-center active:scale-95 ${
                      selectedImpactAmount === amt
                        ? 'bg-[#d4af37] text-stone-950 shadow-sm'
                        : 'bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800'
                    }`}
                  >
                    ₦{amt.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            {/* Impact Result Card */}
            <div className="mt-3.5 p-3.5 sm:p-4 rounded-lg bg-stone-900 border border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-[#fef08a] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-stone-200 block">
                    Your ₦{selectedImpactAmount.toLocaleString()} Contribution:
                  </span>
                  <p className="text-xs text-stone-400 mt-0.5">
                    {getImpactDescription(selectedImpactAmount)}
                  </p>
                </div>
              </div>

              <button
                onClick={() => onOpenDonateWithAmount(selectedImpactAmount)}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-bold text-stone-950 bg-gradient-to-r from-[#fef08a] to-[#d4af37] hover:brightness-105 rounded-lg whitespace-nowrap flex items-center justify-center gap-1.5 transition-all shrink-0 active:scale-95"
              >
                <span>Pledge ₦{selectedImpactAmount.toLocaleString()} via OPay</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
