import React, { useEffect, useState, useRef } from 'react';
import { 
  Zap, 
  Droplets, 
  Bath, 
  Wrench, 
  Sparkles, 
  ArrowRight, 
  Eye,
  EyeOff
} from 'lucide-react';

interface CinematicIntroProps {
  onComplete: () => void;
  isOpen: boolean;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete, isOpen }) => {
  const [progress, setProgress] = useState(0);
  const [animationStep, setAnimationStep] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [hideUi, setHideUi] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Start video playback immediately and clearly
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }

    // Progression timer over ~5.2 seconds for full entrance experience
    const intervalTime = 52;
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
    const step1 = setTimeout(() => setAnimationStep(1), 300);   // Live entrance badge
    const step2 = setTimeout(() => setAnimationStep(2), 700);   // Shop name reveal
    const step3 = setTimeout(() => setAnimationStep(3), 1400);  // 4 Core category pills
    const step4 = setTimeout(() => setAnimationStep(4), 2100);  // Authorised dealer banner

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
      setHideUi(false);
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950 overflow-hidden transition-all duration-700 select-none ${
        isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* 1. Crystal-Clear Authentic Entrance Video Background (vide4.mp4 - 100% Silent) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
        <video
          ref={videoRef}
          src="/videos/vide4.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover transform scale-102 transition-transform duration-1000 ease-out"
        />

        {/* Lightweight Cinematic Vignette: Keeps Video Clear & Bright while maintaining high readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/70 pointer-events-none" />
        
        {/* Subtle Side Vignettes */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950/60 to-transparent pointer-events-none hidden sm:block" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950/60 to-transparent pointer-events-none hidden sm:block" />
      </div>

      {/* Floating Ambient Aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-lime-400/15 rounded-full blur-[110px] animate-pulse" />
      </div>

      {/* 2. Top Bar: Entrance Live Status & View Controls */}
      <div className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-8 flex items-center justify-between z-20">
        <div 
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 border border-lime-400/50 backdrop-blur-md shadow-lg transition-all duration-700 ${
            animationStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime-500" />
          </span>
          <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-lime-300">
            Live Storefront Entrance • Sangivalasa
          </span>
        </div>

        {/* Top Right Controls: Clear Video Toggle & Enter Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setHideUi(!hideUi)}
            className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-slate-950/80 hover:bg-slate-900 border border-white/20 text-white text-xs font-bold backdrop-blur-md transition-all flex items-center gap-1.5 cursor-pointer shadow-lg"
            title={hideUi ? 'Show Intro Text' : 'View Clear Video Only'}
          >
            {hideUi ? <Eye className="w-4 h-4 text-lime-400" /> : <EyeOff className="w-4 h-4 text-slate-300" />}
            <span className="hidden sm:inline">{hideUi ? 'Show Intro' : 'Clear Video'}</span>
          </button>

          <button
            onClick={triggerExit}
            className="px-4 py-1.5 rounded-full bg-lime-500 hover:bg-lime-400 text-slate-950 font-black text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-lg shadow-lime-500/30 transform hover:scale-105"
          >
            <span>Enter Store</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 3. Main Rolled-Back Typography & Shop Branding Overlay */}
      <div 
        className={`relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center transition-all duration-500 ${
          hideUi ? 'opacity-0 pointer-events-none scale-95' : 'opacity-100 scale-100'
        }`}
      >
        {/* Top Pre-badge with Live Indicator */}
        <div 
          className={`transition-all duration-700 transform ${
            animationStep >= 1 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-6 scale-90'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-lime-500/40 text-lime-300 text-xs sm:text-sm font-bold shadow-[0_0_25px_rgba(132,204,22,0.3)] backdrop-blur-md mb-4 sm:mb-6">
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-lime-500"></span>
            </span>
            <span className="tracking-wider sm:tracking-widest uppercase text-[10px] sm:text-xs font-black bg-gradient-to-r from-lime-300 via-white to-emerald-300 bg-clip-text text-transparent">
              LIVE DIGITAL SHOWROOM • SANGIVALASA
            </span>
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-lime-400 animate-spin shrink-0" style={{ animationDuration: '4s' }} />
          </div>
        </div>

        {/* Rolled-Back Cinematic Animated Shop Name in Vibrant Lime & White */}
        <div 
          className={`space-y-1 sm:space-y-3 transition-all duration-1000 transform max-w-full w-full px-2 ${
            animationStep >= 2 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-8'
          }`}
        >
          {/* Top Line: VIJAYA LAKSHMI */}
          <div className="relative inline-block max-w-full">
            <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight sm:leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-lime-300 to-white animate-gradient-x drop-shadow-[0_0_35px_rgba(163,230,53,0.6)] break-words">
              VIJAYA LAKSHMI
            </h1>
            {/* Glowing underline aura */}
            <div className="absolute -bottom-1.5 sm:-bottom-2 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-lime-400 via-white to-lime-400 rounded-full blur-[2px] opacity-90 animate-pulse" />
          </div>

          {/* Bottom Line: ELECTRICALS */}
          <div className="relative mt-1 sm:mt-2 max-w-full">
            <h2 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-wider sm:tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-white to-lime-300 animate-gradient-x drop-shadow-[0_0_30px_rgba(132,204,22,0.6)] break-words">
              ELECTRICALS
            </h2>
            <div className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-0.5 sm:py-1 rounded-full bg-lime-400 text-slate-950 font-black text-[9px] sm:text-xs uppercase tracking-wider sm:tracking-widest mt-2 sm:mt-3 shadow-lg shadow-lime-400/40 border border-white/50 max-w-full">
              WHOLESALE &amp; RETAIL SHOWROOM
            </div>
          </div>
        </div>

        {/* 4 Core Category Pills */}
        <div 
          className={`grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3.5 mt-5 sm:mt-8 w-full max-w-xs sm:max-w-2xl px-1 sm:px-2 transition-all duration-700 transform ${
            animationStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Electricals */}
          <div className="group relative p-2 sm:p-3 rounded-xl bg-slate-900/80 border border-lime-500/50 backdrop-blur-md flex items-center justify-center gap-1.5 sm:gap-2 shadow-[0_0_15px_rgba(132,204,22,0.2)] hover:border-lime-400 transition-all">
            <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-lime-400 group-hover:scale-110 transition-transform shrink-0" />
            <span className="text-[11px] sm:text-sm font-bold text-white tracking-wide">Electricals</span>
          </div>

          {/* Plumbing */}
          <div className="group relative p-2 sm:p-3 rounded-xl bg-slate-900/80 border border-teal-500/50 backdrop-blur-md flex items-center justify-center gap-1.5 sm:gap-2 shadow-[0_0_15px_rgba(20,184,166,0.2)] hover:border-teal-400 transition-all">
            <Droplets className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-400 group-hover:scale-110 transition-transform shrink-0" />
            <span className="text-[11px] sm:text-sm font-bold text-white tracking-wide">Plumbing</span>
          </div>

          {/* Sanitaryware */}
          <div className="group relative p-2 sm:p-3 rounded-xl bg-slate-900/80 border border-emerald-500/50 backdrop-blur-md flex items-center justify-center gap-1.5 sm:gap-2 shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:border-emerald-400 transition-all">
            <Bath className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 group-hover:scale-110 transition-transform shrink-0" />
            <span className="text-[11px] sm:text-sm font-bold text-white tracking-wide">Sanitary</span>
          </div>

          {/* Hardware */}
          <div className="group relative p-2 sm:p-3 rounded-xl bg-slate-900/80 border border-amber-500/50 backdrop-blur-md flex items-center justify-center gap-1.5 sm:gap-2 shadow-[0_0_15px_rgba(245,158,11,0.2)] hover:border-amber-400 transition-all">
            <Wrench className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 group-hover:scale-110 transition-transform shrink-0" />
            <span className="text-[11px] sm:text-sm font-bold text-white tracking-wide">Hardware</span>
          </div>
        </div>

        {/* Authorised Dealer Brand Ticker */}
        <div 
          className={`mt-4 sm:mt-6 text-[10px] sm:text-xs text-slate-300 font-medium px-2 max-w-full break-words transition-all duration-700 transform ${
            animationStep >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="text-lime-400 font-bold">Authorised Dealer:</span> Polycab • CERA • Havells • Astral • Goldmedal • Legrand • Crompton • Vectus
        </div>
      </div>

      {/* 4. Bottom Progress Bar & Instant Entry */}
      <div className="absolute bottom-6 sm:bottom-8 inset-x-4 sm:inset-x-8 flex flex-col items-center gap-2.5 z-20 max-w-lg mx-auto">
        <div className="w-full bg-white/20 rounded-full h-1.5 overflow-hidden backdrop-blur-md border border-white/20 shadow-inner">
          <div 
            className="h-full rounded-full bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-400 transition-all duration-100 ease-out shadow-[0_0_12px_rgba(163,230,53,0.9)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between w-full text-white text-xs font-mono font-bold px-1">
          <span className="flex items-center gap-1.5 text-white/90">
            <Sparkles className="w-3.5 h-3.5 text-lime-400 animate-spin" style={{ animationDuration: '3s' }} />
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

      {/* Custom Keyframes for Fluid Gradient Animation */}
      <style>{`
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
