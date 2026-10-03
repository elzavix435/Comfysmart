import React from 'react';
import { Heart, Instagram, MessageCircle, Mail } from 'lucide-react';
import { Logo } from './Logo';
import { CONTACT_INFO } from '../data/fundraiserData';

interface FooterProps {
  onOpenDonate: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDonate }) => {
  return (
    <footer className="bg-stone-950 text-stone-400 border-t border-stone-800 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-stone-850">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Logo variant="badge-only" size="sm" />
              <span className="font-serif-luxury text-xl font-bold text-white tracking-tight">
                <span className="gold-gradient-text">Comfort</span> World
              </span>
            </div>
            
            <p className="text-xs uppercase font-cinzel font-semibold tracking-widest text-[#d4af37]">
              Where Comfort Meets Confidence
            </p>

            <p className="text-xs text-stone-400 max-w-sm leading-relaxed">
              Official fundraising campaign powering initial production inventory, custom packaging, accessories, and national logistics for Nigeria’s emerging premier comfort wear label.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenDonate}
                className="px-4 py-2 text-xs font-semibold text-stone-950 bg-gradient-to-r from-[#fef08a] to-[#d4af37] hover:brightness-105 rounded-lg transition-all shadow-sm flex items-center gap-1.5"
              >
                <Heart className="w-3.5 h-3.5 fill-stone-950" />
                <span>Support Comfortworld</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-cinzel font-semibold text-stone-200">
              Campaign Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Our Story & Mission
                </a>
              </li>
              <li>
                <a href="#goal" className="hover:text-white transition-colors">
                  Fundraiser Goal (₦100,000)
                </a>
              </li>
              <li>
                <a href="#transparency" className="hover:text-white transition-colors">
                  Financial Transparency Table
                </a>
              </li>
              <li>
                <a href="#supporters" className="hover:text-white transition-colors">
                  Backers Wall
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details & Banking */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-cinzel font-semibold text-stone-200">
              Official Campaign Banking
            </h4>
            <div className="p-3 rounded-xl bg-stone-900 border border-emerald-500/30 text-xs space-y-1">
              <span className="text-[10px] text-emerald-400 font-semibold block uppercase">
                OPay Digital Services (Paycom)
              </span>
              <span className="font-mono text-base font-bold text-white block select-all">
                8126315241
              </span>
              <span className="text-[11px] text-stone-300 block">
                COMFORTWORLD
              </span>
            </div>

            <ul className="space-y-2 text-xs text-stone-300 pt-1">
              <li>
                <span className="text-stone-500 block">WhatsApp / Phone</span>
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-[#d4af37]">
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </li>
              <li>
                <span className="text-stone-500 block">Email Address</span>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-[#d4af37]">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <span className="text-stone-500 block">Social Media</span>
                <div className="flex items-center gap-3 mt-1">
                  <a href={CONTACT_INFO.instagram} target="_blank" rel="noreferrer" className="text-stone-400 hover:text-white">
                    Instagram: {CONTACT_INFO.instagramHandle}
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Quiet Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-4">
          <p>
            © {new Date().getFullYear()} Comfortworld Apparel & Ventures. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-stone-400">
            <span>Where Comfort Meets Confidence</span>
            <span>·</span>
            <span>Fundraiser Edition</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
