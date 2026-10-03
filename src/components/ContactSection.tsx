import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Instagram, Send, CheckCircle, ExternalLink, ShieldCheck, MapPin, Copy, Check } from 'lucide-react';
import { CONTACT_INFO, PRIMARY_OPAY_ACCOUNT } from '../data/fundraiserData';
import { OpayIcon } from './OpayIcon';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Fundraiser Support');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(PRIMARY_OPAY_ACCOUNT.accountNumber);
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 2500);
  };

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Comfortworld! I am reaching out regarding your launch fundraiser and would love to connect.'
  )}`;

  return (
    <section id="contact" className="py-12 sm:py-20 md:py-28 bg-[#0c0a09] border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-cinzel font-semibold text-[#d4af37]">
            Connect With The Founders
          </span>
          <h2 className="mt-2 font-serif-luxury text-2xl sm:text-4xl md:text-5xl font-bold text-white [text-wrap:balance]">
            Get in Touch With Comfortworld
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-stone-300 leading-relaxed font-normal">
            Have questions about the fundraiser, wholesale inquiries, brand partnerships, or want to verify an OPay bank transfer? Our team is always ready to talk.
          </p>
        </div>

        <div className="mt-8 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Direct Channels Grid */}
          <div className="lg:col-span-6 space-y-3.5 sm:space-y-4">
            
            {/* OPay Dedicated Transfer Card in Contact */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#0c2417] via-[#101e17] to-stone-950 border-2 border-emerald-500/40 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <OpayIcon size={34} />
                <div>
                  <span className="text-[10px] text-emerald-400 font-semibold block uppercase tracking-wider">
                    Official OPay Transfer Account
                  </span>
                  <span className="font-mono text-xl sm:text-2xl font-black text-white tracking-wider block">
                    {PRIMARY_OPAY_ACCOUNT.accountNumber}
                  </span>
                  <span className="text-[11px] text-stone-300 block">
                    {PRIMARY_OPAY_ACCOUNT.accountName}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyAccount}
                className={`self-start sm:self-center px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shrink-0 active:scale-95 shadow-md ${
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
                    <span>Copy Account</span>
                  </>
                )}
              </button>
            </div>

            {/* WhatsApp Card */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-5 rounded-2xl bg-stone-900/90 border border-stone-800 hover:border-emerald-500/50 hover:bg-stone-900 transition-all flex items-center justify-between group active:scale-[0.99]"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] text-stone-400 font-medium block">
                    Direct WhatsApp Chat
                  </span>
                  <span className="font-semibold text-white text-sm sm:text-base group-hover:text-emerald-300 transition-colors truncate block">
                    {CONTACT_INFO.phoneDisplay}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-emerald-400 block mt-0.5">
                    Fast response · 24/7 Backer Support
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-stone-500 group-hover:text-emerald-400 transition-colors shrink-0" />
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="p-4 sm:p-5 rounded-2xl bg-stone-900/90 border border-stone-800 hover:border-[#d4af37]/50 hover:bg-stone-900 transition-all flex items-center justify-between group active:scale-[0.99]"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#d4af37] group-hover:scale-105 transition-transform shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] text-stone-400 font-medium block">
                    Direct Telephone Call
                  </span>
                  <span className="font-semibold text-white text-sm sm:text-base group-hover:text-[#fef08a] transition-colors truncate block">
                    {CONTACT_INFO.phoneDisplay}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-stone-400 block mt-0.5">
                    Mon – Sat, 9:00 AM – 7:00 PM WAT
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-stone-500 group-hover:text-[#d4af37] transition-colors shrink-0" />
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="p-4 sm:p-5 rounded-2xl bg-stone-900/90 border border-stone-800 hover:border-[#d4af37]/50 hover:bg-stone-900 transition-all flex items-center justify-between group active:scale-[0.99]"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-400 group-hover:scale-105 transition-transform shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] text-stone-400 font-medium block">
                    Official Email
                  </span>
                  <span className="font-semibold text-white text-sm sm:text-base group-hover:text-[#fef08a] transition-colors truncate block">
                    {CONTACT_INFO.email}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-stone-400 block mt-0.5">
                    Official inquiries & confirmations
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-stone-500 group-hover:text-[#d4af37] transition-colors shrink-0" />
            </a>

            {/* Social Grid: Instagram & TikTok */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Instagram */}
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 sm:p-4 rounded-2xl bg-stone-900/90 border border-stone-800 hover:border-pink-500/40 transition-all flex flex-col justify-between group active:scale-[0.98]"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 group-hover:scale-105 transition-transform">
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-500 group-hover:text-pink-400" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs text-stone-400 block">Instagram</span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-pink-300 truncate block">
                    {CONTACT_INFO.instagramHandle}
                  </span>
                </div>
              </a>

              {/* TikTok */}
              <a
                href={CONTACT_INFO.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 sm:p-4 rounded-2xl bg-stone-900/90 border border-stone-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group active:scale-[0.98]"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.01 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-500 group-hover:text-cyan-400" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs text-stone-400 block">TikTok</span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 truncate block">
                    {CONTACT_INFO.tiktokHandle}
                  </span>
                </div>
              </a>
            </div>

            {/* Location Notice */}
            <div className="p-3 sm:p-4 rounded-xl bg-stone-900/50 border border-stone-800/80 flex items-center gap-3 text-xs text-stone-400">
              <MapPin className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span>Headquartered in Lagos & Abuja, Nigeria · Serving Nationwide Backers</span>
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-6 bg-stone-900/90 rounded-2xl border border-stone-800 p-4 sm:p-8 shadow-xl">
            <h3 className="font-serif-luxury text-lg sm:text-2xl font-bold text-white mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 mb-5 sm:mb-6">
              Reach out directly to the founders for custom support amounts, sponsorship questions, or press inquiries.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-in zoom-in-95 duration-200">
                <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="font-serif-luxury text-lg font-bold text-white">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs text-stone-300">
                  Thank you for reaching out to Comfortworld. We will respond to your email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                <div>
                  <label className="text-xs text-stone-300 font-medium block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tunde Balogun"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl bg-stone-950 border border-stone-800 text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  />
                </div>

                <div>
                  <label className="text-xs text-stone-300 font-medium block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="tunde@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl bg-stone-950 border border-stone-800 text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  />
                </div>

                <div>
                  <label className="text-xs text-stone-300 font-medium block mb-1">
                    Inquiry Subject
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl bg-stone-950 border border-stone-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  >
                    <option value="Fundraiser Support">Fundraiser Support / Confirmation</option>
                    <option value="Brand Partnership">Brand Partnership & Collaborations</option>
                    <option value="Pre-order Inquiries">Wholesale & Pre-order Inquiries</option>
                    <option value="Other">Other Question</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-stone-300 font-medium block mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can we help or collaborate with you?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl bg-stone-950 border border-stone-800 text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-[#d4af37] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-stone-950 bg-gradient-to-r from-[#fef08a] via-[#d4af37] to-[#ca8a04] hover:brightness-105 active:scale-[0.99] transition-all shadow-md flex items-center justify-center gap-2 text-sm cursor-pointer"
                >
                  <Send className="w-4 h-4 text-stone-950" />
                  <span>Send Message to Comfortworld</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
