import React from 'react';
import { Sparkles, Compass, Shield, Award, CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-20 md:py-28 bg-[#0c0a09] border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-cinzel font-semibold text-[#d4af37]">
            The Comfortworld DNA
          </span>
          <h2 className="mt-2 font-serif-luxury text-2xl sm:text-4xl md:text-5xl font-bold text-white [text-wrap:balance]">
            Crafting Garments That Redefine How You Feel & Show Up.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-stone-300 leading-relaxed font-normal">
            Comfortworld is a contemporary lifestyle and luxury comfort wear label founded on a single conviction: you shouldn’t have to sacrifice poise and confidence to feel absolute, all-day comfort.
          </p>
        </div>

        {/* Mission & Vision Bento Cards */}
        <div className="mt-8 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          
          {/* Mission Card */}
          <div className="p-5 sm:p-8 md:p-10 rounded-2xl bg-stone-900/80 border border-stone-800 hover:border-[#d4af37]/40 transition-colors relative group">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-5 sm:mb-6">
              <Compass className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#d4af37] font-cinzel font-semibold block">
              Our Core Mission
            </span>
            <h3 className="mt-1.5 sm:mt-2 font-serif-luxury text-xl sm:text-2xl font-bold text-white">
              Democratizing Tactile Luxury
            </h3>
            <p className="mt-2.5 sm:mt-3 text-stone-300 text-xs sm:text-base leading-relaxed">
              To engineer premium-grade, durable, and thoughtfully tailored apparel that elevates everyday routines. From early morning commutes to relaxed evening gatherings, we produce essentials that feel luxurious on the skin and inspire personal confidence.
            </p>
            <ul className="mt-5 sm:mt-6 space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-stone-400">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Heavyweight, breathable fabrics tailored for the African climate</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Zero compromises on stitching strength and rib longevity</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Locally inspired designs with global streetwear sensibilities</span>
              </li>
            </ul>
          </div>

          {/* Vision Card */}
          <div className="p-5 sm:p-8 md:p-10 rounded-2xl bg-stone-900/80 border border-stone-800 hover:border-[#d4af37]/40 transition-colors relative group">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-5 sm:mb-6">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#d4af37] font-cinzel font-semibold block">
              Our Long-Term Vision
            </span>
            <h3 className="mt-1.5 sm:mt-2 font-serif-luxury text-xl sm:text-2xl font-bold text-white">
              Africa’s Definitive Comfort Brand
            </h3>
            <p className="mt-2.5 sm:mt-3 text-stone-300 text-xs sm:text-base leading-relaxed">
              To establish Comfortworld as the undisputed reference for everyday sophistication across the continent and beyond. We envision a community of empowered individuals whose wardrobe starts with comfort and ends with boldness.
            </p>
            <ul className="mt-5 sm:mt-6 space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-stone-400">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Sustainable, ethical production partnerships in Nigeria</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Flagship tactile experience lounges in Lagos and Abuja</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Empowering local tailors, craftsmen, and textile artisans</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Products & Services Showcase */}
        <div className="mt-12 sm:mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 gap-3 sm:gap-4">
            <div>
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-cinzel font-semibold text-[#d4af37]">
                What We Offer
              </span>
              <h3 className="mt-1 font-serif-luxury text-xl sm:text-3xl md:text-4xl font-bold text-white">
                Our Signature Products & Services
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 max-w-md">
              Designed with obsessive attention to seam placement, collar retention, and luxurious unboxing aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            
            {/* Product 1: The Signature Hoodie */}
            <div className="group rounded-2xl overflow-hidden border border-stone-800 bg-stone-900/60 hover:border-[#d4af37]/40 transition-all flex flex-col">
              <div className="aspect-[4/3] relative overflow-hidden bg-stone-950">
                <img
                  src="/src/assets/images/comfort_hoodie_showcase_1790523941505.jpg"
                  alt="Comfortworld Signature Heavyweight Hoodie"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-semibold text-[#fef08a] border border-[#d4af37]/30">
                  Core Drop
                </div>
              </div>
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif-luxury text-lg sm:text-xl font-bold text-white">
                    Signature Heavyweight Fleece
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-stone-400 leading-relaxed">
                    Custom-milled 380 GSM cotton fleece with pre-shrunk finish, double-lined hood, and subtle metallic gold embroidery of the CW emblem.
                  </p>
                </div>
                <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-stone-800/80 flex items-center justify-between text-[11px] sm:text-xs text-stone-300">
                  <span className="text-[#d4af37] font-medium">Unisex Tailored Silhouette</span>
                  <span>Sizes XS to 3XL</span>
                </div>
              </div>
            </div>

            {/* Product 2: Bespoke Accessories */}
            <div className="group rounded-2xl overflow-hidden border border-stone-800 bg-stone-900/60 hover:border-[#d4af37]/40 transition-all flex flex-col">
              <div className="aspect-[4/3] relative overflow-hidden bg-stone-950">
                <img
                  src="/src/assets/images/comfort_accessories_flatlay_1790523951424.jpg"
                  alt="Comfortworld Bespoke Lifestyle Accessories"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-semibold text-[#fef08a] border border-[#d4af37]/30">
                  Accessories
                </div>
              </div>
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif-luxury text-lg sm:text-xl font-bold text-white">
                    Bespoke Lifestyle Accents
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-stone-400 leading-relaxed">
                    Heavy-duty canvas totes with gold foil branding, satin-lined comfort caps, brass engraved key accessories, and premium socks.
                  </p>
                </div>
                <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-stone-800/80 flex items-center justify-between text-[11px] sm:text-xs text-stone-300">
                  <span className="text-[#d4af37] font-medium">Custom Branded Hardware</span>
                  <span>Collector Editions</span>
                </div>
              </div>
            </div>

            {/* Product 3: Luxury Unboxing & Services */}
            <div className="group rounded-2xl overflow-hidden border border-stone-800 bg-stone-900/60 hover:border-[#d4af37]/40 transition-all flex flex-col">
              <div className="aspect-[4/3] relative overflow-hidden bg-stone-950">
                <img
                  src="/src/assets/images/comfort_luxury_packaging_1790523961996.jpg"
                  alt="Comfortworld Luxury Unboxing Experience"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-semibold text-[#fef08a] border border-[#d4af37]/30">
                  Experience
                </div>
              </div>
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif-luxury text-lg sm:text-xl font-bold text-white">
                    Signature Unboxing & Services
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-stone-400 leading-relaxed">
                    Rigid matte black gift boxes lined with gold tissue, wax-sealed certificates of authenticity, plus made-to-measure corporate gifting capsules.
                  </p>
                </div>
                <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-stone-800/80 flex items-center justify-between text-[11px] sm:text-xs text-stone-300">
                  <span className="text-[#d4af37] font-medium">Premium Presentation</span>
                  <span>Corporate & Personal</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* The Founder's Story & Why We Started */}
        <div className="mt-12 sm:mt-20 p-5 sm:p-8 md:p-12 rounded-3xl bg-gradient-to-br from-stone-900 via-stone-900/95 to-stone-950 border border-stone-800 relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-cinzel font-semibold text-[#d4af37]">
              The Genesis
            </span>
            <h3 className="mt-1.5 sm:mt-2 font-serif-luxury text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Why We Started Comfortworld
            </h3>
            
            <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-stone-300 text-xs sm:text-base leading-relaxed">
              <p>
                "Comfortworld began from personal frustration with modern fashion. High-end apparel looked sleek but felt restrictive and fragile. On the other end, casual loungewear was comfy but felt too sloppy to wear into professional meetings, creative spaces, or social outings."
              </p>
              <p>
                "We asked a simple question: <strong className="text-white font-medium">Why can't comfort and confidence live in the exact same garment?</strong> Why shouldn’t a hoodie or track set make you feel both grounded in personal ease and ready to take on the world?"
              </p>
              <p>
                "That sparked our journey: months of researching fabric densities, testing ribbing elasticity, sketching timeless cuts, and refining our identity. Now, we are ready to take Comfortworld from sample swatches into hands across the country. Your contribution to this ₦100,000 fundraiser directly empowers this vision."
              </p>
            </div>

            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-stone-800 flex items-center gap-3 sm:gap-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center font-serif-luxury text-xs sm:text-sm font-bold text-[#d4af37]">
                CW
              </div>
              <div>
                <span className="text-xs sm:text-sm font-semibold text-white block">
                  The Comfortworld Team
                </span>
                <span className="text-[11px] sm:text-xs text-stone-400 block">
                  Founders & Creative Directors
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
