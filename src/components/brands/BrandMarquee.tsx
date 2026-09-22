import React from 'react';
import { Award, ShieldCheck, ArrowRight } from 'lucide-react';
import { BRANDS_DATA } from '../../data/brands';

interface BrandMarqueeProps {
  onSelectBrand?: (brandName: string) => void;
}

export const BrandMarquee: React.FC<BrandMarqueeProps> = ({ onSelectBrand }) => {
  // Duplicate for seamless infinite marquee loop
  const marqueeItems = [...BRANDS_DATA, ...BRANDS_DATA];

  return (
    <section id="brands" className="py-16 bg-white text-slate-900 overflow-hidden relative border-t border-slate-200">
      
      {/* Background Subtle Patterns */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#84cc16_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lime-100 border border-lime-300 text-lime-900 text-xs font-bold uppercase tracking-wider mb-2 shadow-2xs">
          <Award className="w-3.5 h-3.5 text-lime-700" />
          <span>Industry Recognized Quality</span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
          Brands &amp; Products We Deal In
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
          We stock genuine electrical, plumbing, sanitary, and motor pump lines from trusted national manufacturers.
        </p>
      </div>

      {/* Infinite Scrolling Horizontal Marquee */}
      <div className="relative w-full overflow-hidden py-4">
        
        {/* Edge Fade Gradients for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Marquee Inner Track */}
        <div className="animate-marquee-track flex gap-4 sm:gap-6">
          {marqueeItems.map((brand, idx) => (
            <div
              key={`${brand.id}-${idx}`}
              onClick={() => onSelectBrand && onSelectBrand(brand.name)}
              className="flex-shrink-0 w-56 sm:w-64 p-4 rounded-2xl bg-slate-50/90 hover:bg-lime-50/50 border border-slate-200 hover:border-lime-500/70 transition-all duration-300 cursor-pointer group shadow-xs hover:shadow-lg"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 group-hover:text-lime-700 transition-colors uppercase">
                  {brand.name}
                </span>
                <ShieldCheck className="w-4 h-4 text-emerald-600 opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="text-[11px] font-bold text-lime-700 mb-1">
                {brand.category}
              </div>

              <div className="text-[11px] text-slate-500 line-clamp-1">
                {brand.tagline}
              </div>

              <div className="mt-3 pt-2 border-t border-slate-200/80 flex items-center justify-between text-[10px] text-slate-500 group-hover:text-slate-800">
                <span>Selected Lines In Stock</span>
                <ArrowRight className="w-3 h-3 text-lime-600 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Marquee Disclaimer Note */}
      <div className="text-center mt-6 text-[11px] text-slate-500 px-4">
        * Brand names and trademarks are property of their respective manufacturers. Selected genuine models available at store counter.
      </div>
    </section>
  );
};
