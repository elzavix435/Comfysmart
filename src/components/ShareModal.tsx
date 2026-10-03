import React, { useState } from 'react';
import { X, Copy, Check, MessageCircle, Share2 } from 'lucide-react';
import { Logo } from './Logo';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = window.location.href;
  const shareTitle = "Support Comfortworld: Where Comfort Meets Confidence";
  const shareText = "I'm supporting Comfortworld's launch campaign! Join in backing high-quality comfort wear in Nigeria:";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + currentUrl)}`, '_blank');
  };

  const handleTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-md bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl p-6">
        
        <div className="flex items-center justify-between pb-4 border-b border-stone-800">
          <div className="flex items-center gap-2">
            <Share2 className="w-5 h-5 text-[#d4af37]" />
            <h3 className="font-serif-luxury text-lg font-bold text-white">
              Share Fundraiser
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-white rounded-md"
            aria-label="Close share modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-6 text-center space-y-3">
          <Logo variant="badge-only" size="md" />
          <h4 className="font-serif-luxury text-xl font-bold text-white">
            Help Comfortworld Reach ₦100,000!
          </h4>
          <p className="text-xs text-stone-300 leading-relaxed max-w-xs mx-auto">
            Sharing this campaign with family, friends, and community groups doubles our impact.
          </p>
        </div>

        {/* Share buttons */}
        <div className="space-y-3">
          <button
            onClick={handleWhatsApp}
            className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Share via WhatsApp</span>
          </button>

          <button
            onClick={handleTwitter}
            className="w-full py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            <span>Share on X (Twitter)</span>
          </button>

          {/* Copy Link Input */}
          <div className="pt-2">
            <span className="text-[11px] text-stone-400 block mb-1">Campaign Link</span>
            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={currentUrl}
                className="w-full px-3 py-2 text-xs bg-stone-950 border border-stone-800 rounded-lg text-stone-300 select-all focus:outline-none"
              />
              <button
                onClick={handleCopyLink}
                className="px-3 py-2 text-xs font-semibold text-stone-950 bg-[#d4af37] hover:brightness-105 rounded-lg flex items-center gap-1.5 shrink-0 transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-stone-950" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
