import React, { useEffect, useState } from 'react';
import { 
  Zap, 
  Droplets, 
  Bath, 
  Wrench, 
  Sparkles, 
  ArrowRight, 
  Volume2, 
  VolumeX,
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
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    // Progression timer over ~3.8 seconds
    const interval = 38;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          triggerExit();
          return 100;
        }
        return prev + 1;
      });
    }, interval);

    // Staggered animation triggers
    const step1 = setTimeout(() => setAnimationStep(1), 300);   // Live badge
    const step2 = setTimeout(() => setAnimationStep(2), 800);   // Shop Name Reveal
    const step3 = setTimeout(() => setAnimationStep(3), 1500);  // Category Badges
    const step4 = setTimeout(() => setAnimationStep(4), 2200);  // Brand wall ticker

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
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950 overflow-hidden transition-all duration-700 select-none ${
        isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Dynamic Animated Fresh Lime & Emerald Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-lime-500/25 via-emerald-500/25 to-teal-500/20 rounded-full blur-[130px] animate-pulse duration-[3000ms]" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-lime-400/20 rounded-full blur-[100px] animate-blob" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-teal-400/15 rounded-full blur-[90px] animate-blob animation-delay-4000" />

        {/* Ambient Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] opacity-70" />
      </div>

      {/* Floating Animated Sparks & Energy Particles in Lime & White */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#A3E635', '#84CC16', '#10B981', '#FFFFFF', '#65A30D'][i % 5],
              boxShadow: `0 0 14px ${['#A3E635', '#84CC16', '#10B981', '#FFFFFF', '#65A30D'][i % 5]}`,
              animation: `float-particle ${Math.random() * 4 + 3}s ease-in-out infinite alternate`,
              opacity: 0.85
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center">
        
        {/* Top Pre-badge with Lime Energy Rings */}
        <div 
          className={`transition-all duration-700 transform ${
            animationStep >= 1 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-6 scale-90'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-lime-500/40 text-lime-300 text-xs sm:text-sm font-bold shadow-[0_0_25px_rgba(132,204,22,0.3)] backdrop-blur-md mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime-500"></span>
            </span>
            <span className="tracking-widest uppercase text-[11px] sm:text-xs font-black bg-gradient-to-r from-lime-300 via-white to-emerald-300 bg-clip-text text-transparent">
              LIVE DIGITAL SHOWROOM • SANGIVALASA
            </span>
            <Sparkles className="w-3.5 h-3.5 text-lime-400 animate-spin" style={{ animationDuration: '4s' }} />
          </div>
        </div>

        {/* Cinematic Animated Shop Name in Vibrant Lime & White */}
        <div 
          className={`space-y-2 sm:space-y-3 transition-all duration-1000 transform ${
            animationStep >= 2 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-8'
          }`}
        >
          {/* Top Line: VIJAYA LAKSHMI */}
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-lime-300 to-emerald-400 animate-gradient-x drop-shadow-[0_0_35px_rgba(132,204,22,0.45)]">
              VIJAYA LAKSHMI
            </h1>
            {/* Glowing underline aura */}
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-400 rounded-full blur-[2px] opacity-80" />
          </div>

          {/* Bottom Line: ELECTRICALS */}
          <div className="relative">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-300 to-white drop-shadow-[0_0_30px_rgba(132,204,22,0.5)]">
              ELECTRICALS
            </h2>
            <div className="text-[11px] sm:text-sm font-black tracking-[0.3em] uppercase text-lime-300/90 mt-1">
              WHOLESALE &amp; RETAIL SHOWROOM
            </div>
          </div>
        </div>

        {/* Category Pills (Animated Entrance) */}
        <div 
          className={`grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mt-8 w-full max-w-2xl transition-all duration-700 transform ${
            animationStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Electricals */}
          <div className="group relative p-3 rounded-xl bg-slate-900/80 border border-lime-500/50 backdrop-blur-md flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(132,204,22,0.2)] hover:border-lime-400 transition-all">
            <Zap className="w-4 h-4 text-lime-400 group-hover:scale-110 transition-transform" />
            <span className="text-xs sm:text-sm font-bold text-white tracking-wide">Electricals</span>
          </div>

          {/* Plumbing */}
          <div className="group relative p-3 rounded-xl bg-slate-900/80 border border-teal-500/50 backdrop-blur-md flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(20,184,166,0.2)] hover:border-teal-400 transition-all">
            <Droplets className="w-4 h-4 text-teal-400 group-hover:scale-110 transition-transform" />
            <span className="text-xs sm:text-sm font-bold text-white tracking-wide">Plumbing</span>
          </div>

          {/* Sanitary */}
          <div className="group relative p-3 rounded-xl bg-slate-900/80 border border-emerald-500/50 backdrop-blur-md flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:border-emerald-400 transition-all">
            <Bath className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span className="text-xs sm:text-sm font-bold text-white tracking-wide">Sanitary</span>
          </div>

          {/* Hardware */}
          <div className="group relative p-3 rounded-xl bg-slate-900/80 border border-amber-500/50 backdrop-blur-md flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:border-amber-400 transition-all">
            <Wrench className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
            <span className="text-xs sm:text-sm font-bold text-white tracking-wide">Hardware</span>
          </div>
        </div>

        {/* Brand Wall Ticker Pill */}
        <div 
          className={`mt-6 text-xs text-slate-300 font-medium transition-all duration-700 transform ${
            animationStep >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="text-lime-400 font-bold">Authorised Dealer:</span> Polycab • CERA • Havells • Astral • Goldmedal • Legrand • Crompton • Vectus
        </div>

        {/* Animated Progress Conduit & Skip Controls */}
        <div className="mt-10 w-full max-w-md flex flex-col items-center gap-3">
          
          {/* Sleek Progress Bar in Lime Gradient */}
          <div className="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden p-0.5 border border-slate-700/60 shadow-inner">
            <div 
              className="h-full rounded-full bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-400 transition-all duration-100 ease-out shadow-[0_0_15px_rgba(132,204,22,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between w-full px-1 text-xs">
            <span className="text-slate-300 font-mono text-[11px] flex items-center gap-1 font-bold">
              <Store className="w-3.5 h-3.5 text-lime-400" />
              <span>Loading Showroom {progress}%</span>
            </span>

            {/* Skip Button */}
            <button
              onClick={triggerExit}
              className="inline-flex items-center gap-1.5 text-xs font-black text-slate-950 bg-lime-400 hover:bg-lime-300 px-4 py-1.5 rounded-full shadow-md shadow-lime-400/30 transition-all cursor-pointer transform hover:scale-105"
            >
              <span>Enter Store</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

      {/* Ambient Sound / Mute Toggle in Corner */}
      <button
        onClick={() => setSoundEnabled(!soundEnabled)}
        className="absolute bottom-6 right-6 p-2 rounded-full bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white transition-colors text-xs flex items-center gap-1 cursor-pointer"
        title="Audio Effect Toggle"
      >
        {soundEnabled ? <Volume2 className="w-4 h-4 text-lime-400" /> : <VolumeX className="w-4 h-4" />}
      </button>

      {/* Inline styles for custom animations */}
      <style>{`
        @keyframes float-particle {
          0% { transform: translateY(0px) scale(0.8); }
          100% { transform: translateY(-30px) scale(1.2); }
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
