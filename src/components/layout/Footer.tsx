import React from 'react';
import { 
  MapPin, 
  ShieldCheck, 
  ArrowUp, 
  Clock, 
  ExternalLink
} from 'lucide-react';
import { STORE_INFO } from '../../data/storeInfo';

interface FooterProps {
  onSelectCategory: (cat: string) => void;
  onOpenAdminPreview: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onOpenAdminPreview }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 sm:pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier: Brand, Address & Quick Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Store Bio & Identity (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-lime-600 text-white flex items-center justify-center font-black text-lg shadow-md shadow-lime-600/30">
                VL
              </div>
              <div>
                <h3 className="text-lg font-black text-white uppercase tracking-tight">
                  {STORE_INFO.name}
                </h3>
                <span className="text-xs font-bold text-lime-400 tracking-wider uppercase block">
                  Wholesale &amp; Retail Showroom
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Leading wholesale and retail provider of Electricals, Plumbing, Sanitaryware, and Hardware materials in Sangivalasa, Thagarapuvalasa. Reliable contractor deliveries and walk-in counter sales.
            </p>

            <div className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>GSTIN: <strong className="text-white">{STORE_INFO.gstin}</strong></span>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-lime-400" />
                <span>Mon–Sun: 8:00 AM – 9:00 PM</span>
              </span>
            </div>
          </div>

          {/* Col 2: Four Core Departments (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Departments
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectCategory('electricals')}
                  className="hover:text-lime-400 transition-colors cursor-pointer"
                >
                  Electricals (Wires, MCBs, Fans)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('plumbing')}
                  className="hover:text-lime-400 transition-colors cursor-pointer"
                >
                  Plumbing (CPVC, PVC, Valves)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('sanitary')}
                  className="hover:text-lime-400 transition-colors cursor-pointer"
                >
                  Sanitary (Basins, Taps, EWCs)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('hardware')}
                  className="hover:text-lime-400 transition-colors cursor-pointer"
                >
                  Hardware (Tools, Locks, Screws)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-lime-400 transition-colors">Home Showcase</a></li>
              <li><a href="#categories" className="hover:text-lime-400 transition-colors">Categories</a></li>
              <li><a href="#products" className="hover:text-lime-400 transition-colors">Product Catalog</a></li>
              <li><a href="#brands" className="hover:text-lime-400 transition-colors">Brands We Deal In</a></li>
              <li><a href="#wholesale" className="hover:text-lime-400 transition-colors">Wholesale &amp; Retail</a></li>
              <li><a href="#store" className="hover:text-lime-400 transition-colors">Store &amp; Location</a></li>
              <li>
                <button
                  onClick={onOpenAdminPreview}
                  className="text-lime-400 hover:text-lime-300 font-semibold inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Admin Preview</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Store Location & Direct Phones (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Store Contact
            </div>
            
            <div className="text-xs text-slate-400 space-y-1">
              <div className="font-semibold text-slate-200">
                {STORE_INFO.address.doorNo},
              </div>
              <div>{STORE_INFO.address.landmark},</div>
              <div>{STORE_INFO.address.street},</div>
              <div>{STORE_INFO.address.area},</div>
              <div>{STORE_INFO.address.district} - {STORE_INFO.address.pincode}</div>
            </div>

            <div className="space-y-1.5 pt-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Ch. Vikram:</span>
                <a href="tel:9441160851" className="font-mono font-bold text-lime-400 hover:underline">
                  9441160851
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Ch. Jagdish:</span>
                <a href="tel:7296856740" className="font-mono font-bold text-lime-400 hover:underline">
                  7296856740
                </a>
              </div>
            </div>

            <a
              href={STORE_INFO.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-lime-400 hover:text-lime-300 underline underline-offset-2 pt-1"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Open in Google Maps</span>
            </a>
          </div>

        </div>

        {/* Demo Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          
          {/* Mandatory Demo Disclaimer */}
          <div className="max-w-2xl text-center md:text-left text-[11px] text-slate-400 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
            <strong>Website Demonstration Notice:</strong> Demo prices and specifications shown for web demonstration purposes. Actual counter prices, taxes, and stock availability may vary. Please contact the store directly for live quotes.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-lime-600 text-slate-300 hover:text-white transition-colors border border-slate-800 flex items-center gap-1.5 text-xs cursor-pointer"
              title="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-6 pt-6 border-t border-slate-800/60 text-center text-[11px] text-slate-500">
          © 2026 Vijaya Lakshmi Electricals. All rights reserved. • Designed &amp; Engineered for Wholesale &amp; Retail Excellence.
        </div>

      </div>
    </footer>
  );
};
