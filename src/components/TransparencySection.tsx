import React from 'react';
import { Package, Box, Megaphone, Sparkles, Truck, CheckCircle2, ShieldCheck, FileText } from 'lucide-react';
import { TRANSPARENCY_BUDGET } from '../data/fundraiserData';

export const TransparencySection: React.FC = () => {
  const totalBudget = TRANSPARENCY_BUDGET.reduce((acc, item) => acc + item.amount, 0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Package': return <Package className="w-5 h-5 text-[#fef08a]" />;
      case 'Box': return <Box className="w-5 h-5 text-amber-400" />;
      case 'Megaphone': return <Megaphone className="w-5 h-5 text-amber-300" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-yellow-300" />;
      case 'Truck': return <Truck className="w-5 h-5 text-yellow-400" />;
      default: return <Package className="w-5 h-5 text-[#d4af37]" />;
    }
  };

  return (
    <section id="transparency" className="py-12 sm:py-20 md:py-28 bg-stone-950/80 border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-cinzel font-semibold text-[#d4af37]">
            Full Financial Integrity
          </span>
          <h2 className="mt-2 font-serif-luxury text-2xl sm:text-4xl md:text-5xl font-bold text-white [text-wrap:balance]">
            Transparency & Fund Allocation
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-stone-300 leading-relaxed font-normal">
            We believe trust is earned through radical clarity. Below is the exact allocation breakdown for the entire ₦100,000 fundraising goal, detailing how each contribution moves production forward.
          </p>
        </div>

        {/* Visual Allocation Stack Bar */}
        <div className="mt-8 sm:mt-12 bg-stone-900/90 rounded-2xl border border-stone-800 p-4 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-5 border-b border-stone-800 gap-2">
            <div>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-stone-400 font-semibold block">
                Target Allocation Model
              </span>
              <span className="text-xs sm:text-sm font-medium text-stone-200">
                100% of funds mapped directly to tangible production costs
              </span>
            </div>
            <div className="font-serif-luxury text-lg sm:text-xl font-bold text-[#fef08a] tabular-nums">
              Total Budget: ₦{totalBudget.toLocaleString()}
            </div>
          </div>

          {/* Segmented Distribution Bar */}
          <div className="mt-4 sm:mt-6">
            <div className="w-full h-4 sm:h-5 bg-stone-950 rounded-xl overflow-hidden flex p-0.5 sm:p-1 border border-stone-800 gap-0.5 sm:gap-1">
              <div
                style={{ width: '50%' }}
                className="h-full bg-gradient-to-r from-amber-600 to-[#d4af37] rounded-sm sm:rounded-md transition-all hover:opacity-90"
                title="Stock/Product: 50% (₦50,000)"
              />
              <div
                style={{ width: '10%' }}
                className="h-full bg-amber-400/90 rounded-sm sm:rounded-md transition-all hover:opacity-90"
                title="Packaging: 10% (₦10,000)"
              />
              <div
                style={{ width: '15%' }}
                className="h-full bg-yellow-500/90 rounded-sm sm:rounded-md transition-all hover:opacity-90"
                title="Marketing: 15% (₦15,000)"
              />
              <div
                style={{ width: '15%' }}
                className="h-full bg-amber-300/80 rounded-sm sm:rounded-md transition-all hover:opacity-90"
                title="Custom Accessories: 15% (₦15,000)"
              />
              <div
                style={{ width: '10%' }}
                className="h-full bg-amber-200/70 rounded-sm sm:rounded-md transition-all hover:opacity-90"
                title="Logistics: 10% (₦10,000)"
              />
            </div>

            {/* Visual Legend */}
            <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-1.5 sm:gap-y-2 text-[11px] sm:text-xs text-stone-300">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37]" />
                <span>Stock (50%)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span>Packaging (10%)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <span>Marketing (15%)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-300" />
                <span>Accessories (15%)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-200" />
                <span>Logistics (10%)</span>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE CARD VIEW (< sm screens) */}
        <div className="block sm:hidden mt-6 space-y-3">
          {TRANSPARENCY_BUDGET.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-xl bg-stone-900/80 border border-stone-800 space-y-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-stone-850 border border-stone-750 flex items-center justify-center shrink-0">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="font-bold text-white text-sm">
                    {item.purpose}
                  </span>
                </div>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20">
                  {item.percentage}%
                </span>
              </div>

              <div className="flex items-baseline justify-between pt-1">
                <span className="text-xs text-stone-400">Allocated Amount:</span>
                <span className="font-serif-luxury font-bold text-lg text-[#fef08a] tabular-nums">
                  ₦{item.amount.toLocaleString()}
                </span>
              </div>

              <p className="text-xs text-stone-400 leading-relaxed pt-1 border-t border-stone-800/60">
                {item.description}
              </p>
            </div>
          ))}

          {/* Mobile Total Card */}
          <div className="p-4 rounded-xl bg-stone-950 border-2 border-[#d4af37]/40 flex items-center justify-between">
            <span className="font-serif-luxury font-bold text-sm text-stone-200">
              Total Budget
            </span>
            <span className="font-serif-luxury font-bold text-xl text-[#fef08a] tabular-nums">
              ₦{totalBudget.toLocaleString()}
            </span>
          </div>
        </div>

        {/* DESKTOP TABLE VIEW (>= sm screens) */}
        <div className="hidden sm:block mt-10 overflow-hidden rounded-2xl border border-stone-800 bg-stone-900/60 shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-stone-800 bg-stone-950/80 text-xs uppercase tracking-wider text-stone-400 font-semibold font-cinzel">
                  <th scope="col" className="py-4 px-6">Purpose</th>
                  <th scope="col" className="py-4 px-6 text-right">Amount (₦)</th>
                  <th scope="col" className="py-4 px-6 text-right">Share (%)</th>
                  <th scope="col" className="py-4 px-6">Operational Deliverables</th>
                  <th scope="col" className="py-4 px-6 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/80 text-sm">
                {TRANSPARENCY_BUDGET.map((item) => (
                  <tr key={item.id} className="hover:bg-stone-800/30 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-stone-800/80 border border-stone-700/80 flex items-center justify-center shrink-0">
                          {getIcon(item.iconName)}
                        </div>
                        <span className="font-semibold text-white">
                          {item.purpose}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-right font-serif-luxury font-bold text-[#fef08a] tabular-nums whitespace-nowrap">
                      ₦{item.amount.toLocaleString()}
                    </td>
                    <td className="py-4 px-6 text-right text-stone-300 tabular-nums font-medium whitespace-nowrap">
                      {item.percentage}%
                    </td>
                    <td className="py-4 px-6 text-xs text-stone-400 max-w-xs leading-relaxed">
                      {item.description}
                    </td>
                    <td className="py-4 px-6 text-center whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 text-xs text-amber-300/90 font-medium bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-stone-950/90 font-bold border-t-2 border-[#d4af37]/40 text-stone-100">
                  <td className="py-4 px-6 font-serif-luxury text-base sm:text-lg">
                    Total Campaign Budget
                  </td>
                  <td className="py-4 px-6 text-right font-serif-luxury text-base sm:text-lg text-[#fef08a] tabular-nums">
                    ₦{totalBudget.toLocaleString()}
                  </td>
                  <td className="py-4 px-6 text-right text-base tabular-nums text-white">
                    100%
                  </td>
                  <td className="py-4 px-6 text-xs text-stone-400 font-normal">
                    Comprehensive launch allocation from raw materials to customer doorstep.
                  </td>
                  <td className="py-4 px-6 text-center text-xs text-emerald-400 font-semibold">
                    100% Mapped
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Backer Assurance Card */}
        <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-stone-900 to-stone-900/60 border border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#d4af37] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white">
                Backer Accountability Promise
              </h4>
              <p className="text-[11px] sm:text-xs text-stone-400 mt-1 max-w-xl">
                Every supporter who backs Comfortworld receives digital email receipt confirmations and quarterly photographic update bulletins showing materials purchased and pieces delivered.
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2 text-xs text-[#d4af37] font-semibold bg-[#d4af37]/10 px-3.5 py-2 rounded-lg border border-[#d4af37]/20 self-start sm:self-auto">
            <FileText className="w-4 h-4" />
            <span>Audited & Tracked</span>
          </div>
        </div>

      </div>
    </section>
  );
};
