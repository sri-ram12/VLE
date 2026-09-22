import React from 'react';
import { ArrowRight, Zap, Pipette, Bath, Wrench, CheckCircle2 } from 'lucide-react';
import { CATEGORIES_CONFIG } from '../../data/products';
import type { ProductCategory } from '../../types';

interface CategorySectionProps {
  onSelectCategory: (category: ProductCategory) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ onSelectCategory }) => {
  const getCategoryIcon = (id: ProductCategory) => {
    switch (id) {
      case 'electricals':
        return Zap;
      case 'plumbing':
        return Pipette;
      case 'sanitary':
        return Bath;
      case 'hardware':
        return Wrench;
    }
  };

  return (
    <section id="categories" className="py-20 bg-slate-50/60 relative overflow-hidden border-t border-slate-200">
      
      {/* Background Subtle Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lime-100 border border-lime-300 text-lime-900 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            Core Department Showrooms
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Everything for Your Project
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Electrical, plumbing, sanitary, and hardware products under one roof. 
            Engineered for long-lasting performance in domestic, commercial, and construction sites.
          </p>
        </div>

        {/* 4 Large Animated Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CATEGORIES_CONFIG.map((category) => {
            const Icon = getCategoryIcon(category.id);

            return (
              <div
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className="group relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-lime-500/60 transition-all duration-300 overflow-hidden flex flex-col cursor-pointer transform hover:-translate-y-1"
              >
                {/* Visual Image Header */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md flex items-center justify-center text-lime-700 border border-slate-200 shadow-md group-hover:bg-lime-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-white/20">
                      {category.itemCount}
                    </span>
                  </div>

                  {/* Bottom Image Overlay Text */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-lime-300 text-xs font-bold uppercase tracking-wider block mb-1">
                      {category.tagline}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {category.name}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {category.description}
                    </p>

                    {/* Sub-item Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {category.items.map((item, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 text-[11px] font-semibold bg-slate-50 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200 group-hover:border-lime-400 transition-colors"
                        >
                          <CheckCircle2 className="w-3 h-3 text-lime-600 shrink-0" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Footer */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Wholesale &amp; Retail
                    </span>
                    <div className="inline-flex items-center gap-2 text-sm font-black text-lime-700 group-hover:text-lime-800 transition-colors">
                      <span>Explore {category.name} Catalog</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
