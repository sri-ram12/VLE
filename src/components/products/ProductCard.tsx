import React, { useState, useEffect } from 'react';
import { MessageSquare, ArrowUpRight, Eye } from 'lucide-react';
import type { Product } from '../../types';
import { STORE_INFO } from '../../data/storeInfo';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onEnquire: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
  onEnquire
}) => {
  // Animated counting for demo price when card mounts or changes
  const [displayedPrice, setDisplayedPrice] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = product.demoPrice;
    const duration = 600; // ms
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = (end - start) / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplayedPrice(end);
        clearInterval(timer);
      } else {
        setDisplayedPrice(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [product.demoPrice]);

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'electricals':
        return {
          badge: 'bg-lime-50 text-lime-900 border-lime-300',
          dot: 'bg-lime-600'
        };
      case 'plumbing':
        return {
          badge: 'bg-teal-50 text-teal-900 border-teal-300',
          dot: 'bg-teal-600'
        };
      case 'sanitary':
        return {
          badge: 'bg-emerald-50 text-emerald-900 border-emerald-300',
          dot: 'bg-emerald-600'
        };
      case 'hardware':
        return {
          badge: 'bg-slate-100 text-slate-800 border-slate-300',
          dot: 'bg-slate-600'
        };
      default:
        return {
          badge: 'bg-slate-50 text-slate-700 border-slate-200',
          dot: 'bg-slate-400'
        };
    }
  };

  const theme = getCategoryTheme(product.category);

  const whatsappUrl = `https://wa.me/91${STORE_INFO.whatsappPhone}?text=${encodeURIComponent(
    `Hello Vijaya Lakshmi Electricals, I am interested in ${product.name} (${product.brand}) listed around ₹${product.demoPrice} / ${product.unit}. Could you please share live stock availability and pricing?`
  )}`;

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-lime-500/60 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      
      {/* Top Media & Image Header */}
      <div>
        <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-108"
            loading="lazy"
          />

          {/* Availability Badge */}
          <div className="absolute top-3 left-3">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold border shadow-2xs ${theme.badge} backdrop-blur-md`}>
              <span className={`w-1.5 h-1.5 rounded-full ${theme.dot}`} />
              {product.availability}
            </span>
          </div>

          {/* Quick View Button on Image */}
          <button
            onClick={() => onViewDetails(product)}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/95 backdrop-blur-md text-slate-700 hover:text-slate-950 hover:bg-lime-400 flex items-center justify-center shadow-md transition-all opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 border border-slate-200 cursor-pointer"
            title="Quick view product specifications"
          >
            <Eye className="w-4 h-4" />
          </button>

          {/* Brand Tag Overlay */}
          <div className="absolute bottom-2.5 left-3 bg-white/95 border border-slate-200 backdrop-blur-xs text-slate-900 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded shadow-2xs">
            {product.brand}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-5">
          {/* Subcategory & Name */}
          <div className="text-[11px] font-extrabold text-lime-700 uppercase tracking-wider mb-1">
            {product.subCategory}
          </div>
          
          <h3 
            onClick={() => onViewDetails(product)}
            className="text-base font-bold text-slate-900 line-clamp-1 group-hover:text-lime-700 transition-colors cursor-pointer"
            title={product.name}
          >
            {product.name}
          </h3>

          <p className="text-xs text-slate-500 line-clamp-2 mt-1.5 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Price & Unit Display (Animated Counter) */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-baseline justify-between">
            <div>
              <span className="text-[10px] font-semibold text-slate-400 block leading-none mb-1">
                Demo Price (Indicative)
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-lg sm:text-xl font-black text-lime-700 tracking-tight">
                  ₹{displayedPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-xs font-bold text-slate-500">
                  / {product.unit}
                </span>
              </div>
            </div>

            {/* Wholesale badge if available */}
            {product.isWholesaleBulk && (
              <span className="text-[10px] bg-lime-100 text-lime-900 font-bold px-2 py-0.5 rounded border border-lime-300">
                Bulk Rates
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="p-4 sm:p-5 pt-0 flex gap-2">
        <button
          onClick={() => onEnquire(product)}
          className="flex-1 py-2.5 px-3 bg-lime-500 hover:bg-lime-400 text-slate-950 font-black rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-xs transition-all cursor-pointer border border-lime-600/30"
        >
          <span>Enquire</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-300 text-slate-700 hover:text-emerald-700 transition-colors flex items-center justify-center cursor-pointer shadow-2xs"
          title="Direct WhatsApp Inquiry"
        >
          <MessageSquare className="w-4 h-4" />
        </a>
      </div>

    </div>
  );
};
