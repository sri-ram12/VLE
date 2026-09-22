import React from 'react';
import { Phone, MapPin, Play } from 'lucide-react';
import { STORE_INFO } from '../../data/storeInfo';

interface AnimatedRunningBannerProps {
  onReplayIntro: () => void;
}

export const AnimatedRunningBanner: React.FC<AnimatedRunningBannerProps> = ({ onReplayIntro }) => {
  const tickerItems = [
    '⚡ VIJAYA LAKSHMI ELECTRICALS ⚡',
    '💡 ELECTRICALS (Polycab • Havells • Legrand • Goldmedal)',
    '💧 PLUMBING (Astral CPVC • Sudhakar • Prince • Vectus)',
    '🛁 SANITARY (CERA Authorised • Designer Art Basins • Rain Showers)',
    '🔧 HARDWARE & TOOLS (Heavy Wrenches • Locks • Fasteners)',
    '🏪 SANGIVALASA MAIN ROAD (Opp. Mudu Ammavari Temple)',
    '📞 CALL: Ch. Vikram (9441160851) • Ch. Jagdish (7296856740)',
    '🏷️ WHOLESALE & RETAIL • CONTRACTOR BULK DISCOUNTS',
    '🚚 DIRECT STORE PICKUP & ON-SITE SUPPLY'
  ];

  return (
    <div className="relative z-40 bg-gradient-to-r from-lime-500 via-emerald-500 to-lime-500 text-slate-950 border-b border-lime-600/30 overflow-hidden select-none py-1.5 shadow-xs">
      
      {/* Background Animated Energy Stream */}
      <div className="absolute inset-0 bg-white/10 mix-blend-overlay pointer-events-none" />

      <div className="max-w-7xl mx-auto px-2 sm:px-4 flex items-center justify-between relative z-10 gap-2">
        
        {/* Left Interactive Replay Intro Button with White & Lime Theme */}
        <button
          onClick={onReplayIntro}
          className="shrink-0 inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1 rounded-full bg-white hover:bg-lime-50 text-lime-800 font-black text-[10px] sm:text-xs shadow-md border-2 border-lime-400 hover:border-lime-500 transition-all transform hover:scale-105 cursor-pointer"
          title="Watch the animated intro"
        >
          <Play className="w-3 h-3 fill-lime-600 text-lime-600" />
          <span className="hidden sm:inline font-extrabold">Play Intro</span>
          <span className="sm:hidden font-extrabold">Intro</span>
        </button>

        {/* Continuous Animated Running Marquee */}
        <div className="overflow-hidden flex-1 relative mask-marquee">
          <div className="flex w-max animate-marquee space-x-8 items-center text-xs font-bold tracking-wide">
            {tickerItems.concat(tickerItems).map((text, idx) => (
              <span 
                key={idx} 
                className="whitespace-nowrap flex items-center gap-2"
              >
                {text.includes('VIJAYA') ? (
                  <span className="inline-flex items-center gap-2 bg-white text-slate-950 font-black text-xs sm:text-sm px-3.5 py-1 rounded-full border-2 border-lime-500 shadow-md shadow-lime-600/20 animate-pulse-lime">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-600"></span>
                    </span>
                    <span className="text-lime-700 font-black tracking-tight">VIJAYA LAKSHMI</span>
                    <span className="bg-lime-600 text-white px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-black tracking-wider uppercase shadow-xs">
                      ELECTRICALS
                    </span>
                  </span>
                ) : (
                  <span className={text.includes('CALL') ? 'text-slate-950 font-black underline underline-offset-2' : 'text-slate-900 font-bold'}>
                    {text}
                  </span>
                )}
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900/60 inline-block"></span>
              </span>
            ))}
          </div>
        </div>

        {/* Right Quick Direct Dial */}
        <div className="shrink-0 hidden md:flex items-center gap-3 text-[11px] font-bold text-slate-950">
          <a 
            href={`tel:${STORE_INFO.contacts[0].phone}`}
            className="hover:text-slate-900 transition-colors flex items-center gap-1 font-mono font-black bg-white/60 px-2 py-0.5 rounded-md"
          >
            <Phone className="w-3 h-3 text-slate-900" />
            <span>9441160851</span>
          </a>
          <span className="text-slate-900/40">|</span>
          <a 
            href={STORE_INFO.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition-colors flex items-center gap-1 text-[11px]"
          >
            <MapPin className="w-3 h-3 text-slate-900" />
            <span>Sangivalasa</span>
          </a>
        </div>

      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};
