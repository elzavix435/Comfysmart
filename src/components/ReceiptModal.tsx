import React from 'react';
import { X, CheckCircle, Printer, Share2, Heart, ExternalLink, Sparkles } from 'lucide-react';
import { Donation } from '../types/fundraiser';
import { Logo } from './Logo';
import { OpayIcon } from './OpayIcon';

interface ReceiptModalProps {
  donation: Donation | null;
  onClose: () => void;
}

export const ReceiptModal: React.FC<ReceiptModalProps> = ({ donation, onClose }) => {
  if (!donation) return null;

  const handlePrint = () => {
    window.print();
  };

  const shareText = encodeURIComponent(
    `I just backed the official launch of Comfortworld ("Where Comfort Meets Confidence") via OPay (8126315241)! Support the movement here:`
  );
  const shareUrl = encodeURIComponent(window.location.href);

  const handleWhatsAppShare = () => {
    window.open(`https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-stone-900 border border-[#d4af37]/40 rounded-2xl shadow-2xl overflow-hidden my-4 sm:my-6 max-h-[95vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-3.5 sm:p-4 border-b border-stone-800 bg-stone-950/90 shrink-0">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#fef08a]">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Thank You For Your Support!</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-md"
            aria-label="Close receipt"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Printable Receipt Paper Container */}
        <div id="printable-receipt" className="p-5 sm:p-8 bg-[#141210] text-stone-200 space-y-5 sm:space-y-6 overflow-y-auto flex-1">
          
          {/* Receipt Brand Header */}
          <div className="flex flex-col items-center text-center pb-5 sm:pb-6 border-b border-stone-800">
            <Logo variant="badge-only" size="md" />
            <h3 className="mt-2 font-serif-luxury text-xl sm:text-2xl font-bold text-white">
              <span className="gold-gradient-text">Comfort</span> World
            </h3>
            <p className="text-[10px] tracking-[0.2em] uppercase font-cinzel text-[#d4af37] font-semibold mt-0.5">
              Where Comfort Meets Confidence
            </p>
            <span className="mt-2 text-[11px] font-mono text-emerald-400 uppercase tracking-widest bg-emerald-950/50 px-3 py-0.5 rounded border border-emerald-500/30 inline-flex items-center gap-1.5">
              <OpayIcon size={14} />
              <span>Official Donation Receipt</span>
            </span>
          </div>

          {/* Amount Badge */}
          <div className="text-center py-3.5 sm:py-4 bg-stone-900/90 rounded-xl border border-[#d4af37]/30">
            <span className="text-[11px] text-stone-400 block uppercase tracking-wider">
              Contribution Amount
            </span>
            <span className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#fef08a] tabular-nums mt-1 block">
              ₦{donation.amount.toLocaleString()}
            </span>
            <span className="text-[11px] text-emerald-400 font-medium mt-1 inline-flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Status: Verified & Allocated
            </span>
          </div>

          {/* Detailed Receipt Ledger */}
          <div className="space-y-2.5 sm:space-y-3 text-xs border-b border-stone-800 pb-4 sm:pb-5">
            <div className="flex justify-between py-1">
              <span className="text-stone-400">Reference Number</span>
              <span className="font-mono text-stone-200 font-semibold">{donation.reference}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-stone-400">Supporter Name</span>
              <span className="font-semibold text-white">
                {donation.isAnonymous ? 'Anonymous Backer' : donation.donorName}
              </span>
            </div>
            {donation.email && (
              <div className="flex justify-between py-1">
                <span className="text-stone-400">Receipt Email</span>
                <span className="text-stone-300">{donation.email}</span>
              </div>
            )}
            <div className="flex justify-between py-1">
              <span className="text-stone-400">Date & Time</span>
              <span className="text-stone-300">
                {new Date(donation.createdAt).toLocaleString('en-GB', {
                  dateStyle: 'medium',
                  timeStyle: 'short'
                })}
              </span>
            </div>
            <div className="flex justify-between py-1 items-center">
              <span className="text-stone-400">Payment Channel</span>
              <span className="text-emerald-300 font-semibold flex items-center gap-1">
                <OpayIcon size={14} />
                <span>OPay Transfer (8126315241)</span>
              </span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-stone-400">Campaign Purpose</span>
              <span className="text-stone-300">Comfortworld Launch & Stock</span>
            </div>
          </div>

          {/* Appreciation Message */}
          <div className="text-xs text-stone-300 leading-relaxed italic bg-stone-900/60 p-3.5 rounded-lg border border-stone-800/80">
            "Your generosity fuels our mission to redefine luxury comfort wear in Nigeria. Thank you for walking this journey with us and believing in Comfortworld!"
            <span className="block mt-2 font-semibold not-italic text-stone-400">— The Comfortworld Team</span>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 space-y-2.5">
            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={handlePrint}
                className="py-3 px-3 rounded-xl text-xs font-semibold text-stone-200 bg-stone-800 hover:bg-stone-700 flex items-center justify-center gap-1.5 transition-colors active:scale-95"
              >
                <Printer className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Print Receipt</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppShare}
                className="py-3 px-3 rounded-xl text-xs font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 flex items-center justify-center gap-1.5 transition-colors active:scale-95"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share WhatsApp</span>
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-3 sm:py-3.5 rounded-xl text-xs font-bold text-stone-950 bg-gradient-to-r from-[#fef08a] via-[#d4af37] to-[#ca8a04] hover:brightness-105 transition-all shadow-md active:scale-98"
            >
              Return to Campaign
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
