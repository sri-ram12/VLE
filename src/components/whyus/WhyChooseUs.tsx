import React from 'react';
import { 
  Boxes, 
  Building2, 
  Layers, 
  Award, 
  MapPin, 
  Headphones
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Boxes,
      title: 'Wide Product Selection',
      description: 'Comprehensive inventory from heavy-duty CPVC pipes and industrial cables down to fine stainless screws and designer modular faceplates.',
      color: 'text-blue-400',
      bg: 'bg-blue-500/15 border border-blue-500/30'
    },
    {
      icon: Building2,
      title: 'Wholesale & Retail',
      description: 'Flexible transaction model accommodating single-item DIY homeowners as well as scheduled truckloads for major construction projects.',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/15 border border-emerald-500/30'
    },
    {
      icon: Layers,
      title: 'Multiple Categories',
      description: 'Four dedicated building trades under one roof: Electricals, Plumbing, Sanitary, and Hardware, eliminating multi-store errands.',
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/15 border border-indigo-500/30'
    },
    {
      icon: Award,
      title: 'Trusted Product Brands',
      description: 'Sourced from reputable manufacturers like Polycab, Havells, Astral, Jaquar, and Parryware with ISI/ISO quality benchmarks.',
      color: 'text-amber-400',
      bg: 'bg-amber-500/15 border border-amber-500/30'
    },
    {
      icon: MapPin,
      title: 'Local Accessibility',
      description: 'Centrally located on Main Road, Sangivalasa opposite Mudu Ammavari Temple for easy parking, loading, and instant contractor pickup.',
      color: 'text-rose-400',
      bg: 'bg-rose-500/15 border border-rose-500/30'
    },
    {
      icon: Headphones,
      title: 'Direct Customer Support',
      description: 'Personalized guidance from Ch. Vikram and Ch. Jagdish with technical advice on pipe fittings, load ratings, and sanitary layouts.',
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/15 border border-cyan-500/30'
    }
  ];

  return (
    <section className="py-20 bg-slate-50/80 relative border-t border-slate-200 text-slate-900">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-400/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-lime-100 border border-lime-300 text-lime-900 text-xs font-bold uppercase tracking-wider inline-block mb-3 shadow-2xs">
            The Vijaya Lakshmi Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            One Store. Multiple Solutions.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Consolidate your hardware, electrical, and plumbing procurement with a reliable, community-trusted partner in Thagarapuvalasa.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 hover:border-lime-500/80 hover:shadow-xl hover:shadow-lime-500/10 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-xs`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-slate-900 group-hover:text-lime-700 transition-colors mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-lime-700">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-500"></span>
                <span>Verified Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
