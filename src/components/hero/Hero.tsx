import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  PhoneCall, 
  CheckCircle2, 
  Sparkles, 
  ShieldAlert, 
  Store, 
  Zap, 
  Pipette, 
  Bath, 
  Wrench,
  Maximize2,
  X,
  Video
} from 'lucide-react';
import { STORE_INFO } from '../../data/storeInfo';
import { ElectricCircuitLine } from './ElectricCircuitLine';

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onContactClick }) => {
  // Mode toggle: 'shop' (Real Shop Highlights) vs 'products' (HD Catalog Products)
  const [highlightMode, setHighlightMode] = useState<'shop' | 'products'>('shop');

  // Real Authentic Showroom Highlights (User Provided Photos)
  const shopHighlights = [
    {
      id: 'storefront-interior-glass',
      title: 'Grand Glass Showroom & Reception Counter',
      subtitle: 'Warm LED Reception Desk, ZERA Sanitary Displays & Electrical Walls',
      category: 'Sangivalasa Main Showroom',
      tag: 'Glass Entrance View',
      badge: 'Live Showroom',
      note: 'Wide view showing illuminated reception desk, fan inventory & ZERA sets',
      image: '/images/storefront/storefront_interior_glass_view.png',
      icon: Store
    },
    {
      id: 'store-building-night',
      title: 'Illuminated 2-Storey Commercial Building',
      subtitle: 'Glowing Vijaya Lakshmi Electricals & Goldmedal Neon Signs at Night',
      category: 'Sangivalasa Landmark',
      tag: 'Night Exterior',
      badge: 'Storefront View',
      note: 'Located opposite Mudu Ammavari Temple, Main Road',
      image: '/images/storefront/store_building_night_view.jpg',
      icon: Store
    },
    {
      id: 'basin-wall-goldmedal',
      title: 'Grand Ceramic Basin Wall & Goldmedal Lighting',
      subtitle: 'Countertop Art Basins Wall, Italian Marbles & Smart Lighting Board',
      category: 'Sanitary & Electrical Highlight',
      tag: 'Grand Showroom Wall',
      badge: 'Full Display Wall',
      note: 'Gold mandala basins, marble crackle, and Goldmedal smart LED display',
      image: '/images/showroom/showroom_basin_wall_goldmedal.png',
      icon: Bath
    },
    {
      id: 'tabletop-basins',
      title: 'Countertop Art Basins Counter',
      subtitle: 'Lime Green ZERA, CIZARA White & Terracotta Wave Carved Basins',
      category: 'Sanitaryware Highlight',
      tag: 'Tabletop Collection',
      badge: 'Live Counter Display',
      note: 'Glazed scratch-proof ceramic on artificial turf runner',
      image: '/images/showroom/tabletop_basins_counter.png',
      icon: Bath
    },
    {
      id: 'designer-pedestals',
      title: 'Designer Hourglass Pedestal Basins',
      subtitle: 'Bronze Crackle, Crimson Lace, Grey Terrazzo & Lotus Art Pedestals',
      category: 'Luxury Sanitary Highlight',
      tag: 'Monolithic Pedestals',
      badge: 'Single-Piece Ceramic',
      note: 'Floor-standing architectural washbasins ready for installation',
      image: '/images/showroom/designer_pedestals_collection.png',
      icon: Bath
    },
    {
      id: 'marble-pedestals',
      title: 'Spiral Textured Marble Pedestals & Pumps',
      subtitle: 'Spiral Marble Pillars, High-Gloss Black Vessels & Water Pumps',
      category: 'Plumbing & Sanitary Highlight',
      tag: 'Pillar & Vessel Series',
      badge: 'High-Luster Finish',
      note: 'Paired with high-suction monobloc domestic water pumps',
      image: '/images/showroom/marble_pedestals_row.png',
      icon: Pipette
    },
    {
      id: 'yellow-tree-pedestal',
      title: 'Tree-Art Hourglass Basin & BLDC Fans',
      subtitle: 'Sunset Tree Motif Pedestal with Crompton Speedo Air Fan Stacks',
      category: 'Electrical & Sanitary Highlight',
      tag: 'Signature Showroom Item',
      badge: 'Customer Favorite',
      note: 'Full showroom floor inventory ready for instant counter dispatch',
      image: '/images/showroom/yellow_tree_pedestal_floor.jpg',
      icon: Zap
    },
    {
      id: 'cera-shower-wall',
      title: 'CERA Shower Mixer & Dual-Tone Tap Wall',
      subtitle: 'Exposed 3-Way Rain Columns, White/Chrome Mixers & BLDC Stocks',
      category: 'Bathroom Fittings Highlight',
      tag: 'CERA Authorised Wall',
      badge: 'Live Experience Panel',
      note: 'Featuring multi-mode overhead rain showers & brass diverters',
      image: '/images/showroom/cera_shower_fittings_wall.png',
      icon: Wrench
    }
  ];

  // HD Catalog Product Highlights
  const productHighlights = [
    {
      id: 'polycab-fr',
      title: 'Polycab FR House Wires',
      subtitle: '99.97% Pure Oxygen-Free Copper 90m Coils',
      category: 'Electricals Highlight',
      tag: 'Flame Retardant FR',
      badge: 'ISI Certified',
      note: 'Bulk rolls in Red, Blue, Yellow, Green & Black',
      indicativePrice: '₹1,850',
      image: '/images/products/wires_cables_coils.jpg',
      icon: Zap
    },
    {
      id: 'astral-cpvc',
      title: 'Astral CPVC Pro High-Pressure Pipes',
      subtitle: 'Hot & Cold Potable Water Plumbing Systems',
      category: 'Plumbing Highlight',
      tag: 'SDR 11 & SDR 13.5',
      badge: 'NSF Certified',
      note: 'Heavy duty brass elbows, tees & solvent cement',
      indicativePrice: '₹420',
      image: '/images/products/astral_cpvc_pipes.jpg',
      icon: Pipette
    },
    {
      id: 'rain-shower',
      title: 'Exposed 3-Way Rain Shower System',
      subtitle: 'Triple Chrome Plated Solid Brass Diverter Column',
      category: 'Sanitary Highlight',
      tag: 'Overhead Rain + Handset',
      badge: 'CERA & Jaquar Grade',
      note: 'Anti-clog silicone nozzles with high pressure spray',
      indicativePrice: '₹4,850',
      image: '/images/products/luxury_rain_shower_column.jpg',
      icon: Bath
    },
    {
      id: 'bldc-fan',
      title: 'Crompton Speedo Air BLDC Fan',
      subtitle: '5-Star Energy Saver with RF Smart Remote',
      category: 'Electricals Highlight',
      tag: '28W BLDC Motor',
      badge: '60% Power Saving',
      note: 'High-RPM air thrust with timer & sleep modes',
      indicativePrice: '₹3,200',
      image: '/images/products/ceiling_fan_cartons.jpg',
      icon: Zap
    },
    {
      id: 'modular-plate',
      title: 'Goldmedal Curv Modular Switch Plate',
      subtitle: 'Silver Inlaid Spark-Proof Switches & Sockets',
      category: 'Electricals Highlight',
      tag: 'Fire Retardant Polycarbonate',
      badge: '100,000+ Cycles',
      note: 'Complete modular grid available from 2M to 18M plates',
      indicativePrice: '₹380',
      image: '/images/products/goldmedal_switches.jpg',
      icon: Zap
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalImage, setModalImage] = useState<{ title: string; image: string; tag: string } | null>(null);

  const activeList = highlightMode === 'shop' ? shopHighlights : productHighlights;

  // Auto rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activeList.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeList.length, highlightMode]);

  // Reset index on mode change
  const handleModeChange = (mode: 'shop' | 'products') => {
    setHighlightMode(mode);
    setCurrentIndex(0);
  };

  const activeItem = activeList[currentIndex] || activeList[0];

  return (
    <section id="hero" className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center bg-gradient-to-b from-lime-50/50 via-white to-slate-50/80 overflow-hidden pt-6 pb-16">
      {/* Background Energy & Flow Conduit */}
      <ElectricCircuitLine />

      {/* Decorative subtle ambient glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-lime-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Credibility & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Store Type Badge */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-lime-100/90 border border-lime-300 text-lime-900 text-[11px] sm:text-sm font-bold shadow-xs max-w-full">
              <span className="w-2 h-2 rounded-full bg-lime-600 animate-pulse shrink-0"></span>
              <span className="tracking-wide">WHOLESALE &amp; RETAIL SHOWROOM</span>
              <span className="text-lime-400 hidden xs:inline">|</span>
              <span className="text-lime-800 font-medium">Sangivalasa, Visakhapatnam</span>
            </div>

            {/* Main Headline with Animated Shop Name */}
            <div className="space-y-3 w-full max-w-full">
              {/* Animated White & Lime Green Brand Badge */}
              <div className="inline-flex flex-wrap items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white border-2 border-lime-400 shadow-md shadow-lime-500/20 relative overflow-hidden group max-w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-lime-200/50 to-transparent animate-shine-sweep pointer-events-none" />
                <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-lime-600"></span>
                </span>
                <span className="text-lime-800 uppercase tracking-wider sm:tracking-widest font-black text-[11px] sm:text-xs flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-lime-600 animate-spin shrink-0" style={{ animationDuration: '4s' }} />
                  <span>VIJAYA LAKSHMI</span>
                </span>
                <span className="bg-lime-600 text-white text-[9px] sm:text-[10px] font-black uppercase px-2 py-0.5 rounded-full tracking-wider shadow-xs">
                  ELECTRICALS
                </span>
              </div>

              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.08] break-words max-w-full">
                {/* Dynamic White & Lime Green Animated Shop Name */}
                <span className="block relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 via-emerald-600 to-lime-500 animate-text-shimmer font-black tracking-tight inline-block drop-shadow-xs">
                    VIJAYA LAKSHMI
                  </span>{' '}
                  <span className="text-slate-950 font-black inline-block relative">
                    ELECTRICALS
                    <span className="absolute -bottom-1 sm:-bottom-1.5 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-lime-500 via-emerald-400 to-transparent rounded-full animate-pulse" />
                  </span>
                </span>
                <span className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 mt-2 sm:mt-3 block">
                  Everything You Need.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 via-emerald-600 to-teal-600">
                    One Trusted Store.
                  </span>
                </span>
              </h1>
              
              {/* Supporting Category Headline */}
              <div className="text-xs sm:text-base md:text-lg font-bold text-slate-700 tracking-wide flex flex-wrap items-center gap-x-2 gap-y-1.5 pt-1">
                <span className="px-2 sm:px-2.5 py-0.5 rounded-md bg-lime-50 text-lime-900 border border-lime-200 shadow-2xs font-bold text-xs sm:text-sm">⚡ Electricals</span>
                <span className="text-slate-300">•</span>
                <span className="px-2 sm:px-2.5 py-0.5 rounded-md bg-teal-50 text-teal-900 border border-teal-200 shadow-2xs font-bold text-xs sm:text-sm">💧 Plumbing</span>
                <span className="text-slate-300">•</span>
                <span className="px-2 sm:px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-900 border border-emerald-200 shadow-2xs font-bold text-xs sm:text-sm">🛁 Sanitary</span>
                <span className="text-slate-300">•</span>
                <span className="px-2 sm:px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-900 border border-slate-200 shadow-2xs font-bold text-xs sm:text-sm">🔧 Hardware</span>
              </div>
            </div>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Quality materials for homes, commercial complexes, contractors, and everyday installations. 
              Serving individual homeowners, civil contractors, electricians, and plumbers with honest wholesale and retail pricing.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl text-xs sm:text-sm text-slate-800 pt-1">
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0" />
                <span className="font-bold">Authorised Top Brands</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0" />
                <span className="font-bold">Direct Store Pickup</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0" />
                <span className="font-bold">Bulk Contractor Rates</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              {/* Primary CTA */}
              <button
                onClick={onExploreClick}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-black text-sm sm:text-base shadow-md shadow-lime-500/25 transition-all hover:translate-y-[-1px] cursor-pointer"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={onContactClick}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm sm:text-base border border-slate-300 shadow-xs transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-lime-600" />
                <span>Contact Store</span>
              </button>

              {/* Watch Video Tours CTA */}
              <button
                onClick={() => {
                  const el = document.querySelector('#showroom-videos');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-lime-300 font-bold text-xs sm:text-sm border border-lime-500/40 shadow-sm transition-all hover:scale-102 cursor-pointer"
              >
                <Video className="w-4 h-4 text-lime-400" />
                <span>Video Tours</span>
                <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse"></span>
              </button>

              {/* Get Directions CTA */}
              <a
                href={STORE_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm border border-slate-200 transition-colors"
                title="Open location in Google Maps"
              >
                <MapPin className="w-4 h-4 text-rose-500" />
                <span>Directions</span>
              </a>
            </div>

            {/* Quick Contact Micro Info */}
            <div className="flex items-center gap-4 text-xs text-slate-600 pt-2 flex-wrap">
              <span className="font-bold text-slate-800">Call Now:</span>
              <a href="tel:9441160851" className="hover:text-lime-700 transition-colors font-mono font-bold text-slate-900">
                Ch. Vikram (9441160851)
              </a>
              <span className="text-slate-300">•</span>
              <a href="tel:7296856740" className="hover:text-lime-700 transition-colors font-mono font-bold text-slate-900">
                Ch. Jagdish (7296856740)
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic Highlight Card (Featuring Shop Images & HD Products) */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient Backing Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-lime-400 to-emerald-400 rounded-3xl blur-2xl opacity-20 transform -rotate-1 group-hover:rotate-0 transition duration-500"></div>

            {/* Main Interactive Showcase Card */}
            <div className="relative bg-white rounded-2xl border border-slate-200 shadow-xl p-4 sm:p-5 overflow-hidden">
              
              {/* Top Tabs: Shop Highlights vs HD Products */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
                  <button
                    onClick={() => handleModeChange('shop')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      highlightMode === 'shop'
                        ? 'bg-lime-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Store className="w-3.5 h-3.5" />
                    <span>Shop Highlights</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-300 animate-ping"></span>
                  </button>

                  <button
                    onClick={() => handleModeChange('products')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      highlightMode === 'products'
                        ? 'bg-lime-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-lime-300" />
                    <span>HD Catalog</span>
                  </button>
                </div>

                <span className="text-[11px] bg-lime-100 text-lime-900 font-bold px-2 py-0.5 rounded-full border border-lime-300">
                  {activeItem.badge}
                </span>
              </div>

              {/* Title Header */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-[10px] font-extrabold text-lime-700 uppercase tracking-wider block">
                    {activeItem.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {activeItem.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                    {activeItem.subtitle}
                  </p>
                </div>

                {/* Enlarge Button */}
                <button
                  onClick={() => setModalImage({ title: activeItem.title, image: activeItem.image, tag: activeItem.tag })}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-lime-700 hover:bg-lime-50 transition-colors cursor-pointer shrink-0 ml-2"
                  title="Click to zoom in high definition"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* High Definition Visual Showcase Container */}
              <div 
                onClick={() => setModalImage({ title: activeItem.title, image: activeItem.image, tag: activeItem.tag })}
                className="relative aspect-4/3 rounded-xl overflow-hidden bg-slate-100 mb-3 group cursor-pointer border border-slate-200 shadow-inner"
              >
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Subtle Gradient Shade */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/10 pointer-events-none" />

                {/* Live Tag Overlay */}
                <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md text-slate-900 text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs border border-slate-200 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-600 animate-pulse"></span>
                  <span>{activeItem.tag}</span>
                </div>

                {/* Zoom Hint Indicator */}
                <div className="absolute top-2.5 right-2.5 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3 h-3 text-lime-300" />
                  <span>Click to Zoom</span>
                </div>

                {/* Bottom Details Overlay on Image */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-end justify-between">
                  <div className="text-[11px] text-white font-medium bg-slate-950/80 backdrop-blur-xs px-2.5 py-1 rounded border border-white/20 max-w-[70%] line-clamp-1">
                    {activeItem.note}
                  </div>

                  {'indicativePrice' in activeItem && (
                    <div className="bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md shadow-md text-right border border-lime-300">
                      <div className="text-[9px] text-slate-500 font-bold uppercase">Indicative</div>
                      <div className="text-xs font-black text-lime-700 leading-none">
                        {(activeItem as { indicativePrice: string }).indicativePrice}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Thumbnail Clickable Previews */}
              <div className="flex gap-1.5 mb-3 overflow-x-auto pb-1 scrollbar-none">
                {activeList.map((item, i) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentIndex(i)}
                    className={`relative w-14 sm:w-16 shrink-0 aspect-4/3 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      i === currentIndex 
                        ? 'border-lime-600 ring-2 ring-lime-500/40 scale-102' 
                        : 'border-slate-200 opacity-70 hover:opacity-100 hover:border-slate-400'
                    }`}
                    title={item.title}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    {i === currentIndex && (
                      <div className="absolute inset-0 bg-lime-600/10" />
                    )}
                  </button>
                ))}
              </div>

              {/* Card Footer Navigation & Link */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-lime-600"></span>
                  <span>Highlight {currentIndex + 1} of {activeList.length}</span>
                </div>

                <button
                  onClick={onExploreClick}
                  className="font-bold text-lime-700 hover:text-lime-800 inline-flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Explore Full Catalog</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Real Store Verification Badge */}
              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <div className="flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-lime-600 shrink-0" />
                  <span className="font-semibold text-slate-700">Real Sangivalasa Showroom Inventory</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">Opp. Mudu Ammavari</span>
              </div>
            </div>

            {/* Floating Trust Pill */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white text-slate-900 p-3 rounded-xl shadow-xl border border-slate-200 items-center gap-2.5 z-20">
              <div className="w-8 h-8 rounded-lg bg-lime-100 border border-lime-300 flex items-center justify-center text-lime-700 shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">100% Genuine Display Stock</div>
                <div className="text-[10px] text-slate-500">CERA • Polycab • Havells • Astral • Goldmedal</div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Full Resolution HD Lightbox Modal */}
      {modalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="fixed inset-0" onClick={() => setModalImage(null)} />
          <div className="relative max-w-4xl w-full bg-white rounded-3xl border border-slate-200 overflow-hidden z-10 shadow-2xl flex flex-col my-auto max-h-[90vh] text-slate-900">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
              <div>
                <h4 className="text-base font-black text-slate-950 flex items-center gap-2">
                  <span>{modalImage.title}</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-md bg-lime-600 text-white font-bold">
                    {modalImage.tag}
                  </span>
                </h4>
                <p className="text-xs text-lime-700 font-semibold mt-0.5">Vijaya Lakshmi Electricals • Sangivalasa Showroom Display</p>
              </div>
              <button
                onClick={() => setModalImage(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 sm:p-6 overflow-y-auto flex flex-col items-center justify-center bg-slate-900">
              <img
                src={modalImage.image}
                alt={modalImage.title}
                className="max-h-[65vh] w-auto object-contain rounded-2xl shadow-2xl"
              />
            </div>
            <div className="px-6 py-3.5 border-t border-slate-200 bg-white flex items-center justify-between text-xs text-slate-500">
              <span className="font-medium">1080p HD Store Original</span>
              <button
                onClick={() => setModalImage(null)}
                className="px-4 py-1.5 bg-lime-600 hover:bg-lime-500 text-white rounded-xl font-bold cursor-pointer transition-colors shadow-xs"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
