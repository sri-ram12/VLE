import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Send, X } from 'lucide-react';
import { STORE_INFO } from '../../data/storeInfo';

interface MobileActionBarProps {
  onOpenEnquiry: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenEnquiry }) => {
  const [showCallOptions, setShowCallOptions] = useState(false);

  return (
    <>
      {/* Slide up Call Sheet when user taps 'Call' */}
      {showCallOptions && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm p-4 sm:hidden animate-in fade-in duration-200">
          <div className="w-full bg-white rounded-3xl p-5 shadow-2xl space-y-3 border border-slate-200 text-slate-900">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Choose Store Contact
              </span>
              <button
                onClick={() => setShowCallOptions(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              <a
                href="tel:9441160851"
                onClick={() => setShowCallOptions(false)}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-lime-500/80 text-slate-900 transition-colors"
              >
                <div>
                  <div className="text-sm font-black text-slate-950">Ch. Vikram</div>
                  <div className="text-xs text-lime-700 font-medium">Sales &amp; Wholesale Inquiries</div>
                </div>
                <span className="text-xs font-mono font-bold bg-lime-100 text-lime-800 px-2.5 py-1 rounded-lg shadow-2xs border border-lime-300">
                  9441160851
                </span>
              </a>

              <a
                href="tel:7296856740"
                onClick={() => setShowCallOptions(false)}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-lime-500/80 text-slate-900 transition-colors"
              >
                <div>
                  <div className="text-sm font-black text-slate-950">Ch. Jagdish</div>
                  <div className="text-xs text-slate-500 font-medium">Retail &amp; Store Counter</div>
                </div>
                <span className="text-xs font-mono font-bold bg-slate-200 text-slate-800 px-2.5 py-1 rounded-lg shadow-2xs border border-slate-300">
                  7296856740
                </span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Bottom Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200 py-2 px-3 shadow-2xl">
        <div className="grid grid-cols-4 gap-1.5 text-center">
          
          {/* Call button */}
          <button
            onClick={() => setShowCallOptions(true)}
            className="flex flex-col items-center justify-center p-1.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center mb-0.5">
              <Phone className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold">Call Store</span>
          </button>

          {/* WhatsApp button */}
          <a
            href={`https://wa.me/91${STORE_INFO.whatsappPhone}?text=${encodeURIComponent('Hello Vijaya Lakshmi Electricals, I would like to inquire about products and prices.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-1.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 flex items-center justify-center mb-0.5">
              <MessageSquare className="w-4 h-4 fill-current" />
            </div>
            <span className="text-[10px] font-bold">WhatsApp</span>
          </a>

          {/* Directions button */}
          <a
            href={STORE_INFO.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-1.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-rose-100 border border-rose-200 text-rose-600 flex items-center justify-center mb-0.5">
              <MapPin className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold">Directions</span>
          </a>

          {/* Enquire modal button */}
          <button
            onClick={onOpenEnquiry}
            className="flex flex-col items-center justify-center p-1.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-lime-100 border border-lime-300 text-lime-800 flex items-center justify-center mb-0.5">
              <Send className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold">Enquire</span>
          </button>

        </div>
      </div>
    </>
  );
};
