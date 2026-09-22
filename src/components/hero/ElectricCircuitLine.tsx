import React from 'react';

export const ElectricCircuitLine: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-40">
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0266C8" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient id="waterGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.2" />
            <stop offset="60%" stopColor="#0284C7" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0D9488" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Primary Electrical Energy Conduit Path */}
        <path
          d="M -50 180 L 320 180 L 460 260 L 820 260 L 980 140 L 1500 140"
          stroke="url(#circuitGrad)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="8 6"
          className="opacity-40"
        />
        <path
          d="M -50 180 L 320 180 L 460 260 L 820 260 L 980 140 L 1500 140"
          stroke="#0284C7"
          strokeWidth="3"
          fill="none"
          className="animate-energy-line"
        />

        {/* Secondary Plumbing Fluid Conduit Path */}
        <path
          d="M 1500 480 L 1100 480 L 940 380 L 520 380 L 380 490 L -50 490"
          stroke="url(#waterGrad)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="10 8"
          className="opacity-30"
        />
        <path
          d="M 1500 480 L 1100 480 L 940 380 L 520 380 L 380 490 L -50 490"
          stroke="#06B6D4"
          strokeWidth="3"
          fill="none"
          className="animate-water-flow"
        />

        {/* Engineering Junction Nodes */}
        <circle cx="320" cy="180" r="4" fill="#0266C8" className="animate-ping" style={{ animationDuration: '3s' }} />
        <circle cx="320" cy="180" r="3" fill="#38BDF8" />
        <circle cx="820" cy="260" r="4" fill="#0266C8" />
        <circle cx="980" cy="140" r="3" fill="#F59E0B" />

        <circle cx="940" cy="380" r="4" fill="#06B6D4" className="animate-ping" style={{ animationDuration: '4s' }} />
        <circle cx="940" cy="380" r="3" fill="#0891B2" />
        <circle cx="520" cy="380" r="4" fill="#0D9488" />
      </svg>
    </div>
  );
};
