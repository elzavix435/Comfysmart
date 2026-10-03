import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GoalTracker } from './components/GoalTracker';
import { AboutSection } from './components/AboutSection';
import { TransparencySection } from './components/TransparencySection';
import { SupporterWall } from './components/SupporterWall';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DonationModal } from './components/DonationModal';
import { ReceiptModal } from './components/ReceiptModal';
import { ShareModal } from './components/ShareModal';
import { Donation } from './types/fundraiser';
import { INITIAL_GOAL, INITIAL_SUPPORTERS } from './data/fundraiserData';
import { Heart, Sparkles } from 'lucide-react';

export default function App() {
  const [goal, setGoal] = useState<number>(INITIAL_GOAL);
  
  // Persistent supporters in localStorage (starting at exactly 1% with ₦1,000 seed)
  const [supporters, setSupporters] = useState<Donation[]>(() => {
    try {
      // Purge all legacy storage caches that may contain old mock comments or legacy names
      localStorage.removeItem('comfortworld_supporters_v1');
      localStorage.removeItem('comfortworld_supporters_v2');
      localStorage.removeItem('comfortworld_supporters_v3');
      const saved = localStorage.getItem('comfortworld_supporters_v4');
      if (saved) {
        const parsed: Donation[] = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Sanitize: remove any occurrence of Elijah or Savage, and ensure no message/comment exists
          return parsed.map((s) => ({
            ...s,
            donorName: /elijah|savage/i.test(s.donorName || '') ? 'First Backer' : s.donorName
          }));
        }
      }
    } catch (e) {
      console.error('Error loading supporters from storage', e);
    }
    return INITIAL_SUPPORTERS;
  });

  const [isDonateOpen, setIsDonateOpen] = useState<boolean>(false);
  const [donateInitialAmount, setDonateInitialAmount] = useState<number>(5000);
  const [activeReceipt, setActiveReceipt] = useState<Donation | null>(null);
  const [isShareOpen, setIsShareOpen] = useState<boolean>(false);

  // Sync supporters to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('comfortworld_supporters_v4', JSON.stringify(supporters));
    } catch (e) {
      console.error('Error saving supporters to storage', e);
    }
  }, [supporters]);

  // Real-time calculation of total raised (starts at ₦1,000 which is 1% of ₦100,000)
  const totalRaised = supporters.length > 0 
    ? supporters.reduce((acc, curr) => acc + curr.amount, 0)
    : 1000;

  const handleOpenDonate = (initialAmt: number = 5000) => {
    setDonateInitialAmount(initialAmt);
    setIsDonateOpen(true);
  };

  const handleDonationSuccess = (newDonation: Donation) => {
    // Add to top of list
    setSupporters((prev) => [newDonation, ...prev]);
    setIsDonateOpen(false);
    // Show digital receipt
    setActiveReceipt(newDonation);
  };

  const handleLikeSupporter = (id: string) => {
    setSupporters((prev) =>
      prev.map((s) => (s.id === id ? { ...s, likes: s.likes + 1 } : s))
    );
  };

  return (
    <div className="min-h-screen bg-[#0c0a09] text-[#f5f5f4] flex flex-col font-sans selection:bg-[#d4af37]/30 selection:text-[#fef08a]">
      {/* 3-Zone Top Navigation Bar */}
      <Navbar
        onOpenDonate={() => handleOpenDonate(5000)}
        onOpenShare={() => setIsShareOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Home / Hero section with authentic CW emblem, slogan, short story, live stats */}
        <Hero
          totalRaised={totalRaised}
          goal={goal}
          donorCount={supporters.length}
          onOpenDonate={() => handleOpenDonate(5000)}
        />

        {/* 3. Fundraising Goal Dashboard with animated progress bar, milestones & impact calculator */}
        <GoalTracker
          totalRaised={totalRaised}
          goal={goal}
          donorCount={supporters.length}
          onOpenDonateWithAmount={(amt) => handleOpenDonate(amt)}
        />

        {/* 2. About Comfortworld: Mission, Vision, Products & Services, Founder Story */}
        <AboutSection />

        {/* 7. Transparency Section: Exact ₦100,000 budget table and purpose allocation */}
        <TransparencySection />

        {/* 5. Supporter Page / Backers Wall with filter controls & heart reactions */}
        <SupporterWall
          supporters={supporters}
          onOpenDonate={() => handleOpenDonate(5000)}
          onLikeSupporter={handleLikeSupporter}
        />

        {/* 6. Contact & Social Channels (WhatsApp, Phone, Instagram, TikTok, Email, Form) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenDonate={() => handleOpenDonate(5000)} />

      {/* Floating Quick Pledge Button (Mobile & Desktop corner) */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30">
        <button
          onClick={() => handleOpenDonate(5000)}
          className="group px-3.5 py-2.5 sm:px-5 sm:py-3.5 rounded-full bg-gradient-to-r from-[#fef08a] via-[#d4af37] to-[#ca8a04] text-stone-950 font-bold text-xs sm:text-sm shadow-2xl shadow-[#d4af37]/30 flex items-center gap-2 hover:scale-105 active:scale-95 transition-all border border-[#fef08a]/40"
          aria-label="Direct OPay Transfer"
        >
          <Heart className="w-4 h-4 fill-stone-950 text-stone-950 group-hover:scale-110 transition-transform" />
          <span className="whitespace-nowrap font-bold">Transfer via OPay</span>
        </button>
      </div>

      {/* Donation & Payment Processing Modal */}
      <DonationModal
        isOpen={isDonateOpen}
        initialAmount={donateInitialAmount}
        onClose={() => setIsDonateOpen(false)}
        onSuccess={handleDonationSuccess}
      />

      {/* Digital Receipt & Social Share Modal */}
      <ReceiptModal
        donation={activeReceipt}
        onClose={() => setActiveReceipt(null)}
      />

      {/* Campaign Share Modal */}
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
      />
    </div>
  );
}
