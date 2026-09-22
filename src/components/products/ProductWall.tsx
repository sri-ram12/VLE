import React from 'react';
import type { Product } from '../../types';
import { ArrowUpRight, Sparkles, Layers } from 'lucide-react';

interface ProductWallProps {
  products: Product[];
  onViewProduct: (product: Product) => void;
}

export const ProductWall: React.FC<ProductWallProps> = ({ products, onViewProduct }) => {
  // Select a visually diverse curated set of 12 products for the showroom wall
  const wallProducts = products.slice(0, 12);

  return (
    <section className="py-20 bg-slate-50/70 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lime-100 border border-lime-300 text-lime-900 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-lime-600" />
              <span>Digital Hardware Showroom</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Interactive Product Wall
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              Walk through our curated digital gallery. Inspect fittings, sanitary ceramics, tools, and industrial wiring up close.
            </p>
          </div>

          <div className="text-xs text-slate-500 flex items-center gap-2 font-medium">
            <Layers className="w-4 h-4 text-lime-600" />
            <span>Click any item for full engineering specifications</span>
          </div>
        </div>

        {/* Asymmetric Masonry / Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[200px] sm:auto-rows-[240px]">
          {wallProducts.map((product, index) => {
            // Apply asymmetric spans for dynamic editorial gallery rhythm
            const isLarge = index === 0 || index === 7;
            const isWide = index === 3 || index === 8;

            let spanClass = 'col-span-1 row-span-1';
            if (isLarge) spanClass = 'col-span-2 row-span-2';
            else if (isWide) spanClass = 'col-span-2 row-span-1';

            return (
              <div
                key={product.id}
                onClick={() => onViewProduct(product)}
                className={`group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-lime-500/80 transition-all duration-300 cursor-pointer ${spanClass}`}
              >
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent transition-opacity duration-300" />

                {/* Floating Top Brand Tag */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider bg-white/95 border border-slate-200 backdrop-blur-md text-slate-900 px-2.5 py-0.5 rounded shadow-xs">
                    {product.brand}
                  </span>
                  <span className="text-[10px] font-bold bg-slate-900/80 backdrop-blur-md text-lime-300 px-2 py-0.5 rounded hidden sm:inline-block">
                    {product.category}
                  </span>
                </div>

                {/* Interactive View Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-lime-500 text-slate-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 shadow-lg font-bold">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Bottom Overlay Content */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-xs sm:text-sm lg:text-base font-bold line-clamp-1 group-hover:text-lime-300 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-[11px] sm:text-xs font-mono font-black text-lime-400">
                      ₹{product.demoPrice.toLocaleString('en-IN')} <span className="text-[10px] text-slate-300 font-normal">/ {product.unit}</span>
                    </span>
                    <span className="text-[10px] text-white font-medium bg-slate-900/80 border border-white/20 px-2 py-0.5 rounded backdrop-blur-xs">
                      {product.availability}
                    </span>
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
