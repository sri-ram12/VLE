import React, { useEffect, useState, useRef } from 'react';
import { 
  Zap, 
  Droplets, 
  Bath, 
  Wrench, 
  Sparkles, 
  ArrowRight, 
  Store,
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
    const step2 = setTimeout(() => setAnimationStep(2), 700);   // Signboard reveal
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
      {/* 1. Crystal-Clear Authentic Entrance Video Background (vide4.mp4) */}
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

        {/* Lightweight Cinematic Vignette: Keeps Video Super Clear & Bright while making text legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-slate-950/70 pointer-events-none" />
        
        {/* Subtle Side Vignettes */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950/60 to-transparent pointer-events-none hidden sm:block" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950/60 to-transparent pointer-events-none hidden sm:block" />
      </div>

      {/* Floating Ambient Aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-lime-400/10 rounded-full blur-[100px] animate-pulse" />
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
            title={hideUi ? 'Show Signboard' : 'View Clear Video Only'}
          >
            {hideUi ? <Eye className="w-4 h-4 text-lime-400" /> : <EyeOff className="w-4 h-4 text-slate-300" />}
            <span className="hidden sm:inline">{hideUi ? 'Show Signboard' : 'Clear Video'}</span>
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

      {/* 3. Main Signboard Replica Overlay - Exact Match to Entrance Video */}
      <div 
        className={`relative z-10 w-full max-w-4xl mx-auto px-3 sm:px-6 text-center flex flex-col items-center justify-center transition-all duration-500 ${
          hideUi ? 'opacity-0 pointer-events-none scale-95' : 'opacity-100 scale-100'
        }`}
      >
        {/* Physical 3D Signboard Box Design from Video */}
        <div 
          className={`w-full max-w-3xl mx-auto transition-all duration-1000 transform ${
            animationStep >= 2 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-6'
          }`}
        >
          {/* Signboard Outer Box with Illumination Shadow */}
          <div className="relative rounded-2xl sm:rounded-3xl bg-slate-950/90 border border-white/30 p-4 sm:p-6 sm:px-8 shadow-[0_15px_60px_rgba(0,0,0,0.95)] backdrop-blur-md overflow-hidden">
            
            {/* Top Signboard Row: Left Goldmedal Badge & Right Telugu Script */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mb-3 border-b border-white/10 pb-3">
              {/* Left: Official Goldmedal Switch to the Amazing Logo (Matches Signboard in Video) */}
              <div className="flex items-center gap-2 bg-black/80 px-3 py-1.5 rounded-lg border border-white/20 shadow-sm shrink-0">
                <div className="w-5 h-5 rounded bg-white text-slate-950 flex items-center justify-center font-black text-xs shadow-xs">
                  G
                </div>
                <div className="text-left">
                  <div className="text-white font-black text-xs tracking-wider leading-none">
                    Goldmedal
                  </div>
                  <div className="text-[7.5px] text-slate-400 font-extrabold uppercase tracking-wider leading-tight mt-0.5">
                    SWITCH TO THE AMAZING
                  </div>
                </div>
              </div>

              {/* Right: Authentic Glowing Telugu Script Name from Signboard */}
              <div className="text-center sm:text-right">
                <h3 className="text-amber-300 font-black text-sm sm:text-base md:text-lg tracking-wide drop-shadow-[0_0_14px_rgba(252,211,77,0.85)] font-sans">
                  విజయలక్ష్మి ఎలక్ట్రికల్స్, హార్డ్వేర్ &amp; ప్లంబింగ్
                </h3>
              </div>
            </div>

            {/* Center: Main 3D LED Illuminated Channel Letters: VIJAYA LAKSHMI ELECTRICALS */}
            <div className="py-1 sm:py-2">
              <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-black tracking-wider sm:tracking-widest uppercase text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.95)] drop-shadow-[0_4px_14px_rgba(0,0,0,1)] leading-tight">
                VIJAYA LAKSHMI ELECTRICALS
              </h1>
            </div>

            {/* Bottom Row: Electric Blue Lightbox Ribbon (Matches Video Signboard Lower Bar) */}
            <div className="mt-3.5 py-1.5 px-3 rounded-xl bg-gradient-to-r from-blue-700 via-sky-600 to-blue-700 border border-sky-300/40 text-white shadow-[0_0_20px_rgba(2,132,199,0.6)] flex flex-wrap items-center justify-between text-[9px] sm:text-xs font-bold gap-2">
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="bg-white/20 px-1.5 py-0.5 rounded text-[8px] sm:text-[9px] font-black uppercase tracking-wider">
                  PM CONA
                </span>
                <span className="hidden xs:inline">•</span>
                <span className="text-sky-100 flex items-center gap-1">
                  <Store className="w-3 h-3 text-sky-200 inline" />
                  <span>Opp. Mudu Ammavari Temple</span>
                </span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[9px] sm:text-[10px] shrink-0">
                <span className="text-white">Sangivalasa, Vizag</span>
                <span className="bg-sky-950/70 px-2 py-0.5 rounded text-sky-200 font-bold border border-sky-400/30">
                  Ph: 9441160851 / 7296856740
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Core Showrooms Pills */}
        <div 
          className={`grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-5 sm:mt-6 w-full max-w-xs sm:max-w-2xl transition-all duration-700 transform ${
            animationStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="px-3 py-2 rounded-xl bg-slate-950/80 border border-lime-400/40 backdrop-blur-md flex items-center justify-center gap-2 shadow-lg">
            <Zap className="w-4 h-4 text-lime-400" />
            <span className="text-xs font-bold text-white">Electricals</span>
          </div>

          <div className="px-3 py-2 rounded-xl bg-slate-950/80 border border-teal-400/40 backdrop-blur-md flex items-center justify-center gap-2 shadow-lg">
            <Droplets className="w-4 h-4 text-teal-400" />
            <span className="text-xs font-bold text-white">Plumbing</span>
          </div>

          <div className="px-3 py-2 rounded-xl bg-slate-950/80 border border-emerald-400/40 backdrop-blur-md flex items-center justify-center gap-2 shadow-lg">
            <Bath className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold text-white">Sanitaryware</span>
          </div>

          <div className="px-3 py-2 rounded-xl bg-slate-950/80 border border-amber-400/40 backdrop-blur-md flex items-center justify-center gap-2 shadow-lg">
            <Wrench className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-bold text-white">Hardware</span>
          </div>
        </div>

        {/* Brand Banner */}
        <div 
          className={`mt-4 text-[10px] sm:text-xs text-white/90 font-medium px-4 py-1.5 rounded-full bg-slate-950/60 border border-white/10 backdrop-blur-xs transition-all duration-700 transform ${
            animationStep >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="text-lime-300 font-bold">Authorised Dealer:</span> Polycab • CERA • Havells • Astral • Goldmedal • Legrand • Crompton
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

    </div>
  );
};
