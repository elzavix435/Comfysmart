import React, { useState, useEffect } from 'react';
import { X, Copy, Check, ShieldCheck, Heart, Sparkles, ArrowRight, Upload, Info } from 'lucide-react';
import { Donation } from '../types/fundraiser';
import { PRIMARY_OPAY_ACCOUNT } from '../data/fundraiserData';
import { OpayIcon } from './OpayIcon';

interface DonationModalProps {
  isOpen: boolean;
  initialAmount?: number;
  onClose: () => void;
  onSuccess: (donation: Donation) => void;
}

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  initialAmount = 5000,
  onClose,
  onSuccess
}) => {
  const [amount, setAmount] = useState<number>(initialAmount);
  const [customAmountStr, setCustomAmountStr] = useState<string>('');
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [donorName, setDonorName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [senderReference, setSenderReference] = useState<string>('');
  const [proofFileName, setProofFileName] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    if (initialAmount) {
      if ([1000, 5000, 10000, 20000].includes(initialAmount)) {
        setAmount(initialAmount);
        setIsCustom(false);
      } else {
        setAmount(initialAmount);
        setCustomAmountStr(String(initialAmount));
        setIsCustom(true);
      }
    }
  }, [initialAmount, isOpen]);

  // Lock body scroll on mobile when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopy = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handlePresetClick = (val: number) => {
    setIsCustom(false);
    setAmount(val);
    setCustomAmountStr('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmountStr(val);
    setIsCustom(true);
    setAmount(val ? parseInt(val, 10) : 0);
  };

  const handleSubmitTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount < 500) {
      alert('Please enter a pledge amount of at least ₦500.');
      return;
    }

    setIsSubmitting(true);

    const ref = senderReference.trim() || `CW-OPY-${Math.floor(100000 + Math.random() * 900000)}`;

    const newDonation: Donation = {
      id: `don-${Date.now()}`,
      donorName: isAnonymous ? 'Anonymous Supporter' : (donorName.trim() || 'Generous Backer'),
      isAnonymous,
      amount,
      email: email.trim() || undefined,
      createdAt: new Date().toISOString(),
      paymentMethod: 'opay_transfer',
      status: 'verified',
      reference: ref,
      likes: 1
    };

    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess(newDonation);
    }, 400);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-stone-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-xl bg-stone-900 border border-stone-800 sm:rounded-2xl rounded-t-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[90vh]">
        
        {/* Modal Top Header (Sticky) */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-3.5 sm:px-6 sm:py-4 border-b border-stone-800 bg-stone-950/95 backdrop-blur-md">
          <div className="flex items-center gap-2.5 min-w-0">
            <OpayIcon size={32} />
            <div className="min-w-0">
              <h3 id="modal-title" className="font-serif-luxury text-base sm:text-lg font-bold text-white leading-tight truncate">
                Direct Bank Transfer
              </h3>
              <p className="text-[11px] text-emerald-400 font-medium truncate flex items-center gap-1">
                <span>Official OPay Campaign Account</span>
                <span>·</span>
                <span className="text-stone-400">Where Comfort Meets Confidence</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 -mr-1 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6 flex-1">
          
          {/* OPay Bank Account Card (The Focal Point) */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#0c2417] via-[#101e17] to-stone-950 border-2 border-emerald-500/40 shadow-xl space-y-3 relative overflow-hidden">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <OpayIcon size={28} showText={true} />
                <span className="text-[11px] text-emerald-300 font-medium px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30">
                  Instant Transfer
                </span>
              </div>
              <span className="text-[10px] text-stone-400 uppercase tracking-wider hidden xs:inline">
                Verified Account
              </span>
            </div>

            {/* Account Number with 1-Tap Copy */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-stone-950/90 border border-emerald-500/30 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <span className="text-[11px] text-emerald-400/90 block uppercase tracking-wider font-semibold">
                  OPay Account Number
                </span>
                <span className="font-mono text-2xl sm:text-3xl font-extrabold text-white tracking-wider tabular-nums block select-all">
                  {PRIMARY_OPAY_ACCOUNT.accountNumber}
                </span>
              </div>

              <button
                type="button"
                onClick={() => handleCopy(PRIMARY_OPAY_ACCOUNT.accountNumber, 'acc')}
                className={`px-3.5 py-2.5 sm:px-4 sm:py-2.5 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all shrink-0 active:scale-95 shadow-md ${
                  copiedField === 'acc'
                    ? 'bg-emerald-500 text-stone-950'
                    : 'bg-[#14B866] hover:bg-[#0fa056] text-stone-950 hover:brightness-105'
                }`}
                aria-label="Copy OPay account number"
              >
                {copiedField === 'acc' ? (
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

            {/* Account Details Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
              <div className="flex items-center justify-between sm:justify-start sm:gap-2 p-2 rounded-lg bg-stone-950/50 border border-stone-850">
                <span className="text-stone-400">Account Name:</span>
                <span className="font-semibold text-stone-200 truncate">
                  {PRIMARY_OPAY_ACCOUNT.accountName}
                </span>
              </div>
              <div className="flex items-center justify-between sm:justify-start sm:gap-2 p-2 rounded-lg bg-stone-950/50 border border-stone-850">
                <span className="text-stone-400">Bank Name:</span>
                <span className="font-semibold text-emerald-300">
                  OPay (Paycom)
                </span>
              </div>
            </div>

            {/* Transfer Instructions Helper */}
            <div className="flex items-start gap-2 pt-1 text-[11px] text-stone-300 leading-relaxed">
              <Info className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                You can transfer directly from your <strong>OPay app</strong> or <strong>any Nigerian commercial banking app</strong> (Zenith, GTBank, Access, Kuda, UBA, etc.) by selecting <strong>OPay / Paycom</strong> as destination bank.
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmitTransfer} className="space-y-5">
            
            {/* Amount Selection */}
            <div>
              <label className="text-xs uppercase tracking-wider font-cinzel font-semibold text-stone-300 block mb-2">
                1. Select Contribution Amount
              </label>

              {/* Preset Buttons: 4 Grid on mobile and tablet */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[1000, 5000, 10000, 20000].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => handlePresetClick(preset)}
                    className={`py-3 px-2 rounded-xl text-center font-serif-luxury font-bold text-base transition-all border active:scale-95 ${
                      !isCustom && amount === preset
                        ? 'bg-gradient-to-r from-[#fef08a] to-[#d4af37] text-stone-950 border-[#d4af37] shadow-md scale-[1.02]'
                        : 'bg-stone-950/80 text-stone-200 border-stone-800 hover:border-stone-700 hover:bg-stone-850'
                    }`}
                  >
                    ₦{preset.toLocaleString()}
                  </button>
                ))}
              </div>

              {/* Custom Amount Input */}
              <div className="mt-2.5 relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 font-serif-luxury font-bold text-base">
                  ₦
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Or enter custom amount (e.g. 50,000)"
                  value={customAmountStr}
                  onChange={handleCustomChange}
                  className={`w-full pl-9 pr-4 py-3 rounded-xl bg-stone-950 border text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-[#d4af37] ${
                    isCustom ? 'border-[#d4af37] ring-1 ring-[#d4af37]' : 'border-stone-800'
                  }`}
                />
              </div>

              <div className="mt-1.5 flex items-center justify-between text-[11px] text-stone-400">
                <span>Selected to transfer:</span>
                <span className="font-bold text-[#fef08a] text-sm tabular-nums">
                  ₦{amount.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Supporter Details */}
            <div className="space-y-3.5 pt-4 border-t border-stone-800">
              <label className="text-xs uppercase tracking-wider font-cinzel font-semibold text-stone-300 block">
                2. Supporter Details & Public Wall
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-stone-400 block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    disabled={isAnonymous}
                    placeholder={isAnonymous ? 'Anonymous Supporter' : 'e.g. Dapo Adeleke'}
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-[#d4af37] disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="text-xs text-stone-400 block mb-1">
                    Email Address <span className="text-stone-500">(For receipt)</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  />
                </div>
              </div>

              {/* Anonymous Checkbox */}
              <label className="flex items-center gap-2.5 cursor-pointer text-xs text-stone-300 pt-0.5 select-none">
                <input
                  type="checkbox"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="w-4 h-4 rounded bg-stone-950 border-stone-700 text-[#d4af37] focus:ring-[#d4af37]"
                />
                <span>Display as Anonymous on the Public Supporter Wall</span>
              </label>

              {/* Transfer Sender Reference / Screenshot proof */}
              <div>
                <label className="text-xs text-stone-400 block mb-1">
                  Sender Account Name or Transfer Reference <span className="text-stone-500">(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Session ID or Account Name"
                  value={senderReference}
                  onChange={(e) => setSenderReference(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                />

                <div className="mt-2 flex items-center gap-2 text-xs text-stone-400">
                  <label className="cursor-pointer inline-flex items-center gap-1.5 text-emerald-400 hover:underline">
                    <Upload className="w-3.5 h-3.5" />
                    <span>{proofFileName ? `Attached: ${proofFileName}` : 'Attach receipt screenshot (optional)'}</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files?.[0]) {
                          setProofFileName(e.target.files[0].name);
                        }
                      }}
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 sm:py-4 px-6 rounded-xl font-bold text-stone-950 bg-gradient-to-r from-[#fef08a] via-[#d4af37] to-[#ca8a04] hover:brightness-105 active:scale-[0.98] transition-all shadow-lg shadow-[#d4af37]/20 flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
              >
                <Check className="w-5 h-5 stroke-[2.5]" />
                <span>I Have Transferred ₦{amount.toLocaleString()}</span>
              </button>

              <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-stone-400 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>OPay Account: <strong>8126315241</strong> · Digital receipt generated instantly</span>
              </div>
            </div>

          </form>

        </div>

      </div>
    </div>
  );
};
