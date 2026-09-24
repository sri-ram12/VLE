import React, { useEffect, useState, useRef } from 'react';
import { 
  Zap, 
  Droplets, 
  Bath, 
  Wrench, 
  Sparkles, 
  ArrowRight,
  Store
} from 'lucide-react';

interface CinematicIntroProps {
  onComplete: () => void;
  isOpen: boolean;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete, isOpen }) => {
  const [progress, setProgress] = useState(0);
  const [animationStep, setAnimationStep] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Autoplay the video immediately and silently
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }

    // Progression timer over ~5.0 seconds
    const intervalTime = 50;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          triggerExit();
          return 100;
        }
        return prev + 1;
      });
    }, intervalTime);

    // Staggered animation triggers
    const step1 = setTimeout(() => setAnimationStep(1), 250);   // Live badge
    const step2 = setTimeout(() => setAnimationStep(2), 600);   // Shop name + Intro Video reveal
    const step3 = setTimeout(() => setAnimationStep(3), 1200);  // 4 Core category pills
    const step4 = setTimeout(() => setAnimationStep(4), 1800);  // Authorised dealer banner

    return () => {
      clearInterval(timer);
      clearTimeout(step1);
      clearTimeout(step2);
      clearTimeout(step3);
      clearTimeout(step4);
    };
  }, [isOpen]);

  const triggerExit = () => {
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
      setIsExiting(false);
      setProgress(0);
      setAnimationStep(0);
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-slate-950 overflow-y-auto sm:overflow-hidden transition-all duration-700 select-none p-3 sm:p-6 ${
        isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* 1. Dynamic Animated Ambient Glows & Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-gradient-to-tr from-lime-500/20 via-emerald-500/15 to-teal-500/10 rounded-full blur-[140px] animate-pulse duration-[3000ms]" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-lime-400/15 rounded-full blur-[110px] animate-blob" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-500/15 rounded-full blur-[110px] animate-blob animation-delay-2000" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-teal-400/10 rounded-full blur-[90px] animate-blob animation-delay-4000" />

        {/* Ambient Grid Blueprint Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] opacity-70" />
      </div>

      {/* Floating Animated Sparks & Energy Particles in Lime & White */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${(i % 4) * 1.5 + 2.5}px`,
              height: `${(i % 4) * 1.5 + 2.5}px`,
              left: `${(i * 19 + 11) % 96}%`,
              top: `${(i * 27 + 5) % 94}%`,
              backgroundColor: ['#A3E635', '#84CC16', '#10B981', '#FFFFFF', '#4ADE80'][i % 5],
              boxShadow: `0 0 12px ${['#A3E635', '#84CC16', '#10B981', '#FFFFFF', '#4ADE80'][i % 5]}`,
              animation: `float-particle ${3.5 + (i % 3)}s ease-in-out infinite alternate`,
              opacity: 0.85
            }}
          />
        ))}
      </div>

      {/* 2. Top Header Bar: Storefront Badge & Direct Entry */}
      <div className="relative w-full max-w-4xl flex items-center justify-between z-20 shrink-0 pt-1 sm:pt-2">
        <div 
          className={`flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-slate-900/90 border border-lime-400/50 backdrop-blur-md shadow-lg transition-all duration-700 ${
            animationStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-lime-500" />
          </span>
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-lime-300">
            Wholesale &amp; Retail Showroom • Sangivalasa
          </span>
        </div>

        <button
          onClick={triggerExit}
          className="px-3.5 sm:px-4 py-1.5 rounded-full bg-lime-500 hover:bg-lime-400 text-slate-950 font-black text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-lg shadow-lime-500/30 transform hover:scale-105"
        >
          <span>Enter Store</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 3. Main Central Branding & Intro Video Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto my-auto px-2 sm:px-6 py-2 sm:py-4 text-center flex flex-col items-center justify-center shrink-0">
        
        {/* Top Pre-badge with Live Indicator */}
        <div 
          className={`transition-all duration-700 transform ${
            animationStep >= 1 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-90'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1 rounded-full bg-slate-900/90 border border-lime-500/40 text-lime-300 text-xs font-bold shadow-[0_0_20px_rgba(132,204,22,0.25)] backdrop-blur-md mb-2 sm:mb-3">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
            </span>
            <span className="tracking-wider sm:tracking-widest uppercase text-[9px] sm:text-xs font-black bg-gradient-to-r from-lime-300 via-white to-emerald-300 bg-clip-text text-transparent">
              LIVE DIGITAL SHOWROOM • SANGIVALASA
            </span>
            <Sparkles className="w-3 h-3 text-lime-400 animate-spin shrink-0" style={{ animationDuration: '4s' }} />
          </div>
        </div>

        {/* Rolled-Back Shop Name Typography */}
        <div 
          className={`space-y-0.5 sm:space-y-1.5 transition-all duration-1000 transform max-w-full w-full px-2 ${
            animationStep >= 2 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-6'
          }`}
        >
          {/* Top Line: VIJAYA LAKSHMI */}
          <div className="relative inline-block max-w-full">
            <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-lime-300 to-white animate-gradient-x drop-shadow-[0_0_30px_rgba(163,230,53,0.55)] break-words">
              VIJAYA LAKSHMI
            </h1>
            {/* Glowing underline aura */}
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-lime-400 via-white to-lime-400 rounded-full blur-[2px] opacity-90 animate-pulse" />
          </div>

          {/* Bottom Line: ELECTRICALS */}
          <div className="relative mt-0.5 max-w-full">
            <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-black tracking-wider sm:tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-white to-lime-300 animate-gradient-x drop-shadow-[0_0_25px_rgba(132,204,22,0.55)] break-words">
              ELECTRICALS
            </h2>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-lime-400 text-slate-950 font-black text-[9px] sm:text-xs uppercase tracking-wider sm:tracking-widest mt-1 shadow-md shadow-lime-400/40 border border-white/50 max-w-full">
              WHOLESALE &amp; RETAIL SHOWROOM
            </div>
          </div>
        </div>

        {/* 🎬 INTRO VIDEO OF THE SHOP - PLACED JUST BELOW THE SHOP NAME */}
        <div 
          className={`mt-3 sm:mt-4 w-full max-w-xs sm:max-w-md md:max-w-lg transition-all duration-700 transform ${
            animationStep >= 2 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-6'
          }`}
        >
          <div className="relative rounded-2xl overflow-hidden border-2 border-lime-400/60 shadow-[0_0_35px_rgba(132,204,22,0.35)] bg-black aspect-video group">
            {/* Silent Authentic Video Walkthrough of Store Entrance */}
            <video
              ref={videoRef}
              src="/videos/vide4.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover transform scale-101"
            />

            {/* Subtle Gradient Vignette Over Video */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40 pointer-events-none" />

            {/* Top-Left Live Recording Badge */}
            <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 flex items-center gap-1.5 px-2.5 py-0.5 sm:py-1 rounded-full bg-slate-950/85 border border-lime-400/60 backdrop-blur-md shadow-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500" />
              </span>
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-lime-300">
                Storefront &amp; Entrance Tour
              </span>
            </div>

            {/* Bottom Location Overlay */}
            <div className="absolute bottom-2 inset-x-2 sm:bottom-2.5 sm:inset-x-2.5 flex items-center justify-between text-[9px] sm:text-[11px] text-white/95 font-medium px-2.5 py-1 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10">
              <div className="flex items-center gap-1.5 text-lime-300 font-bold truncate">
                <Store className="w-3 h-3 text-lime-400 shrink-0" />
                <span className="truncate">Opp. Mudu Ammavari Temple • Sangivalasa</span>
              </div>
              <span className="text-[8.5px] sm:text-[9.5px] font-mono font-bold bg-lime-500/20 text-lime-300 px-1.5 py-0.5 rounded border border-lime-400/30 shrink-0 ml-1">
                Live Video
              </span>
            </div>
          </div>
        </div>

        {/* 4 Core Category Pills */}
        <div 
          className={`grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 mt-3 sm:mt-4 w-full max-w-xs sm:max-w-xl px-1 transition-all duration-700 transform ${
            animationStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {/* Electricals */}
          <div className="group relative p-1.5 sm:p-2 rounded-xl bg-slate-900/80 border border-lime-500/50 backdrop-blur-md flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(132,204,22,0.15)] hover:border-lime-400 transition-all">
            <Zap className="w-3.5 h-3.5 text-lime-400 group-hover:scale-110 transition-transform shrink-0" />
            <span className="text-[11px] sm:text-xs font-bold text-white tracking-wide">Electricals</span>
          </div>

          {/* Plumbing */}
          <div className="group relative p-1.5 sm:p-2 rounded-xl bg-slate-900/80 border border-teal-500/50 backdrop-blur-md flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(20,184,166,0.15)] hover:border-teal-400 transition-all">
            <Droplets className="w-3.5 h-3.5 text-teal-400 group-hover:scale-110 transition-transform shrink-0" />
            <span className="text-[11px] sm:text-xs font-bold text-white tracking-wide">Plumbing</span>
          </div>

          {/* Sanitaryware */}
          <div className="group relative p-1.5 sm:p-2 rounded-xl bg-slate-900/80 border border-emerald-500/50 backdrop-blur-md flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:border-emerald-400 transition-all">
            <Bath className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform shrink-0" />
            <span className="text-[11px] sm:text-xs font-bold text-white tracking-wide">Sanitary</span>
          </div>

          {/* Hardware */}
          <div className="group relative p-1.5 sm:p-2 rounded-xl bg-slate-900/80 border border-amber-500/50 backdrop-blur-md flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(245,158,11,0.15)] hover:border-amber-400 transition-all">
            <Wrench className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform shrink-0" />
            <span className="text-[11px] sm:text-xs font-bold text-white tracking-wide">Hardware</span>
          </div>
        </div>

        {/* Authorised Dealer Brand Ticker */}
        <div 
          className={`mt-2.5 sm:mt-3 text-[9.5px] sm:text-xs text-slate-300 font-medium px-2 max-w-full break-words transition-all duration-700 transform ${
            animationStep >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="text-lime-400 font-bold">Authorised Dealer:</span> Polycab • CERA • Havells • Astral • Goldmedal • Legrand • Crompton
        </div>
      </div>

      {/* 4. Bottom Progress Bar & Instant Entry */}
      <div className="relative w-full max-w-md flex flex-col items-center gap-2 z-20 shrink-0 pb-1 sm:pb-2">
        <div className="w-full bg-white/20 rounded-full h-1.5 overflow-hidden backdrop-blur-md border border-white/20 shadow-inner">
          <div 
            className="h-full rounded-full bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-400 transition-all duration-100 ease-out shadow-[0_0_12px_rgba(163,230,53,0.9)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between w-full text-white text-xs font-mono font-bold px-1">
          <span className="flex items-center gap-1.5 text-white/90 text-[11px] sm:text-xs">
            <Store className="w-3.5 h-3.5 text-lime-400 shrink-0" />
            <span>Entering Sangivalasa Showroom ({progress}%)</span>
          </span>

          <button
            onClick={triggerExit}
            className="text-lime-300 hover:text-white underline text-[11px] cursor-pointer"
          >
            Skip Intro →
          </button>
        </div>
      </div>

      {/* Custom Keyframes for Fluid Gradient and Particle Animations */}
      <style>{`
        @keyframes float-particle {
          0% { transform: translateY(0px) scale(0.8); }
          100% { transform: translateY(-24px) scale(1.2); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
      `}</style>
    </div>
  );
};
