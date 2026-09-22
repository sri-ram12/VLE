import React from 'react';
import { 
  Building2, 
  Layers, 
  Award, 
  MapPin, 
  PhoneCall, 
  CheckCircle 
} from 'lucide-react';
import { STORE_INFO } from '../../data/storeInfo';

export const TrustBar: React.FC = () => {
  const trustMetrics = [
    {
      icon: Layers,
      stat: '4+',
      label: 'Core Categories',
      detail: 'Electricals, Plumbing, Sanitary, Hardware',
      color: 'text-lime-700',
      bg: 'bg-lime-50 border border-lime-200'
    },
    {
      icon: Award,
      stat: '12+',
      label: 'Top Industry Brands',
      detail: 'Polycab, Astral, Havells, CERA, etc.',
      color: 'text-emerald-700',
      bg: 'bg-emerald-50 border border-emerald-200'
    },
    {
      icon: Building2,
      stat: 'Dual Model',
      label: 'Wholesale & Retail',
      detail: 'From single retail items to truck project loads',
      color: 'text-teal-700',
      bg: 'bg-teal-50 border border-teal-200'
    },
    {
      icon: MapPin,
      stat: 'Local Store',
      label: 'Sangivalasa Junction',
      detail: 'Direct store pickup & speedy counter billing',
      color: 'text-rose-600',
      bg: 'bg-rose-50 border border-rose-200'
    },
    {
      icon: PhoneCall,
      stat: 'Direct Owners',
      label: 'Vikram & Jagdish',
      detail: 'Instant quotes on 9441160851 / 7296856740',
      color: 'text-amber-700',
      bg: 'bg-amber-50 border border-amber-200'
    }
  ];

  return (
    <section className="bg-white border-y border-slate-200 py-8 relative z-20 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Mini Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600">
            <CheckCircle className="w-4 h-4 text-lime-600" />
            <span>Why Contractors &amp; Homeowners Rely On Us</span>
          </div>
          <div className="text-xs text-slate-500 font-mono">
            GSTIN: <span className="text-slate-900 font-bold">{STORE_INFO.gstin}</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {trustMetrics.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-white border border-slate-200/90 hover:border-lime-500 hover:shadow-lg hover:shadow-lime-500/10 transition-all duration-300 group shadow-2xs"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-10 h-10 rounded-lg ${item.bg} ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div className={`text-2xl font-black ${item.color} tracking-tight`}>
                  {item.stat}
                </div>
              </div>
              <div className="text-sm font-bold text-slate-900 group-hover:text-lime-700 transition-colors">
                {item.label}
              </div>
              <div className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                {item.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
