import React, { useState } from 'react';
import { 
  Camera, 
  MapPin, 
  PhoneCall, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { STORE_INFO } from '../../data/storeInfo';

interface HighlightItem {
  id: string;
  title: string;
  headline: string;
  category: string;
  image: string;
  description: string;
  keyFeatures: string[];
  inStockBadge: string;
}

export const ShowroomHighlightsReel: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const highlights: HighlightItem[] = [
    {
      id: 'basin-wall-goldmedal',
      title: 'Grand Ceramic Basin Wall & Goldmedal Lighting',
      headline: 'Full Showroom Display Wall of Designer Art Basins & Smart LED Panel',
      category: 'Sanitary & Electrical Highlight',
      image: '/images/showroom/showroom_basin_wall_goldmedal.png',
      description: 'Our most expansive showroom wall showcasing over 20+ designer countertop washbasins: gold mandala centerpieces, spiderweb marble crackle, gold starburst iris basins, deep woodgrain finishes, glossy black vessels, and white vitreous ceramics alongside the official Goldmedal smart modular lighting panel and storage water heaters.',
      keyFeatures: ['20+ Designer Art Basins', 'Gold Mandala Motif', 'Goldmedal Smart LED Board', 'Storage Water Heaters'],
      inStockBadge: 'Showroom Spotlight'
    },
    {
      id: 'tabletop-basins',
      title: 'Countertop Tabletop Basins Counter',
      headline: 'Lime Green, CIZARA White & Terracotta Wave Basins',
      category: 'Sanitaryware Highlight',
      image: '/images/showroom/tabletop_basins_counter.png',
      description: 'Physical display on counter artificial grass runner featuring lime green ZERA designer basin with floral side-reliefs, white CIZARA square basin, terracotta ripple-carved ceramic basin, and gloss white rectangular washbasin.',
      keyFeatures: ['CIZARA Ceramic', 'Terracotta Textured Wave', 'Lime Green ZERA Relief', 'High-Gloss Stainproof Glaze'],
      inStockBadge: 'Live Counter Display'
    },
    {
      id: 'designer-pedestals',
      title: 'Luxury Hourglass Pedestal Basins Collection',
      headline: 'Bronze Crackle, Crimson Lace, Grey Terrazzo & Lotus Motifs',
      category: 'Luxury Sanitary Highlight',
      image: '/images/showroom/designer_pedestals_collection.png',
      description: 'Stunning row of monolithic floor-mounted hourglass washbasins. Includes gold & bronze spider-web crackle, black pinstripe ringed column, crimson red lace pattern, grey terrazzo with floral motifs, and brown-and-white lotus petal basin.',
      keyFeatures: ['Monolithic Pedestals', 'Architectural Hourglass Form', 'Dual-Tone Designer Glazes', 'Pre-Drilled Waste Outlet'],
      inStockBadge: 'Ready for Dispatch'
    },
    {
      id: 'marble-pedestals',
      title: 'Spiral Textured Pedestals & Domestic Water Pumps',
      headline: 'Spiral Carved Marble Finish, Black Marble Columns & Pumps',
      category: 'Plumbing & Sanitary Highlight',
      image: '/images/showroom/marble_pedestals_row.png',
      description: 'Showroom aisle featuring spiral-textured warm marble pedestals, segmented fluted columns, Italian black marble veined basins, and boxed domestic monobloc water pumps in background.',
      keyFeatures: ['Spiral Sculpted Body', 'Italian Black Vein Marble', 'Domestic Water Pumps', 'Heavy Counter Weight'],
      inStockBadge: 'Wholesale & Retail'
    },
    {
      id: 'tree-pedestal-fans',
      title: 'Signature Tree-Art Pedestal & Energy Fan Stacks',
      headline: 'Yellow Sunset Tree Basin with Crompton Speedo Air BLDC Fans',
      category: 'Electrical & Sanitary Highlight',
      image: '/images/showroom/yellow_tree_pedestal_floor.jpg',
      description: 'Our most popular showroom floor attraction: handcrafted single-piece yellow hourglass pedestal basin painted with tree silhouette artwork, stacked beside genuine Crompton Speedo Air BLDC ceiling fan cartons.',
      keyFeatures: ['Signature Tree Art Motif', 'Crompton Speedo Air Fans', 'High Gloss Ceramic Finish', 'Yellow Showroom Corner'],
      inStockBadge: 'Showroom Signature'
    },
    {
      id: 'cera-shower-wall',
      title: 'CERA Shower Mixer & Dual-Tone Faucet Wall',
      headline: 'Exposed 3-Way Rain Columns, Mixers & BLDC Fan Stocks',
      category: 'Bathroom Fittings Highlight',
      image: '/images/showroom/cera_shower_fittings_wall.png',
      description: 'Full official CERA showroom wall with exposed thermostatic 3-way shower systems, overhead rain shower roses, dual-tone white and chrome single lever basin mixers, wall bib taps, and Orient & Crompton BLDC+ ceiling fan cartons above.',
      keyFeatures: ['CERA Authorised Display', '3-Way Exposed Rain Shower', 'Dual-Tone Faucets', 'Orient & Crompton BLDC+'],
      inStockBadge: 'CERA Authorized'
    },
    {
      id: 'pumps-havells-suguna',
      title: 'Domestic Water Pumps & Construction Chemicals',
      headline: 'Havells Goldie, CRI, Suguna Monobloc Pumps & Dr. Fixit LW+',
      category: 'Pumps & Hardware Highlight',
      image: '/images/showroom/pumps_havells_cri_suguna.jpg',
      description: 'Our physical water pump corner: boxed Havells Goldie series openwell submersibles, CRI self-priming pumps, Suguna monobloc water pumps, Reliance pump sets, and stacked Dr. Fixit 101 LW+ waterproofing compound drums.',
      keyFeatures: ['Havells Goldie Series', 'CRI High-Lift Pumps', 'Suguna Monoblocs', 'Dr. Fixit LW+ Drums'],
      inStockBadge: 'Wholesale Stocks'
    },
    {
      id: 'reliance-submersible-cables',
      title: 'Reliance Borewell Submersibles & Submersible Cables',
      headline: 'V4 Agricultural Submersible Pumps & 3-Core Submersible Flat Cables',
      category: 'Plumbing & Electricals Highlight',
      image: '/images/showroom/pumps_submersible_reliance.png',
      description: 'Stacked inventory of genuine Reliance Borewell Submersible Pump sets wrapped in protective film, alongside packaged Champion 3-core submersible flat cables and winding coils ready for immediate agricultural and domestic borewell delivery.',
      keyFeatures: ['Reliance V4 Submersibles', 'Stainless Steel Pump Bodies', 'Champion Flat Cables', 'Direct Borewell Supply'],
      inStockBadge: 'In-Store Ready'
    }
  ];

  const handlePrev = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex - 1 + highlights.length) % highlights.length);
  };

  const handleNext = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex + 1) % highlights.length);
  };

  return (
    <section id="shop-highlights" className="py-16 bg-slate-50/80 text-slate-900 relative overflow-hidden border-b border-slate-200">
      {/* Glow Effects */}
      <div className="absolute -top-24 left-1/3 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lime-100 border border-lime-300 text-lime-900 text-xs font-bold uppercase tracking-wider mb-2.5 shadow-2xs">
              <Camera className="w-3.5 h-3.5 text-lime-700" />
              <span>Authentic Shop Highlights</span>
              <span className="w-1.5 h-1.5 rounded-full bg-lime-600 animate-pulse"></span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Real Inventory Inside Our Sangivalasa Store
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              Photographs taken directly inside <strong>Vijaya Lakshmi Electricals</strong>. Inspect our live CERA fixtures, designer washbasins, and branded electrical stacks.
            </p>
          </div>

          {/* Location pill */}
          <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-700 shadow-xs">
            <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
            <div>
              <div className="font-bold text-slate-900">Opp. Mudu Ammavari Temple</div>
              <div className="text-[11px] text-slate-500">Main Road, Sangivalasa</div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhotoIndex(idx)}
              className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-lime-500/70 transition-all duration-300 overflow-hidden flex flex-col cursor-pointer transform hover:-translate-y-1"
            >
              {/* Image Frame */}
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                
                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs border border-white/10">
                  {item.category}
                </div>

                {/* Stock Tag */}
                <div className="absolute top-3 right-3 bg-lime-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded shadow-xs">
                  {item.inStockBadge}
                </div>

                {/* Zoom icon on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/30 backdrop-blur-xs">
                  <div className="px-3.5 py-1.5 rounded-lg bg-lime-500 text-slate-950 text-xs font-black shadow-lg flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Inspect High-Def Photo</span>
                  </div>
                </div>

                {/* Bottom title inside image */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-base font-bold text-white group-hover:text-lime-300 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-200 line-clamp-1 mt-0.5 font-medium">
                    {item.headline}
                  </p>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {item.keyFeatures.map((feat, fIdx) => (
                    <span
                      key={fIdx}
                      className="text-[10px] font-bold bg-slate-50 text-slate-700 px-2 py-0.5 rounded border border-slate-200"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                {/* Card Action */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-lime-700 font-bold flex items-center gap-1 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>In-Store Verified</span>
                  </span>
                  
                  <span className="text-lime-700 group-hover:text-lime-800 font-black flex items-center gap-1">
                    <span>Click to Zoom</span>
                    <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>

            </div>
          ))}

          {/* 6th Card: Visit Store / Direct Call */}
          <div className="bg-gradient-to-br from-lime-600 via-lime-700 to-emerald-800 rounded-2xl border border-lime-500/50 p-6 flex flex-col justify-between text-white shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              
              <span className="text-xs font-bold text-lime-200 uppercase tracking-wider block mb-1">
                Direct Counter Access
              </span>
              
              <h3 className="text-2xl font-black">
                See All Displays in Person
              </h3>
              
              <p className="text-xs sm:text-sm text-lime-100 mt-2 leading-relaxed">
                Visit our Sangivalasa main road showroom to view the actual glaze finishes, test water taps, and get wholesale project pricing directly from <strong>Ch. Vikram</strong> and <strong>Ch. Jagdish</strong>.
              </p>
            </div>

            <div className="pt-6 border-t border-white/20 space-y-3">
              <div className="flex items-center justify-between text-xs text-lime-100">
                <span>All 7 Days Open</span>
                <span className="font-bold text-white">8:00 AM – 9:00 PM</span>
              </div>

              <div className="flex gap-2">
                <a
                  href="tel:9441160851"
                  className="flex-1 py-2.5 px-3 bg-white text-slate-950 rounded-xl text-xs font-black text-center hover:bg-lime-50 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-lime-700" />
                  <span>Call Vikram</span>
                </a>

                <a
                  href={STORE_INFO.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 bg-slate-950/40 hover:bg-slate-950 text-white rounded-xl text-xs font-bold text-center border border-white/20 transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Enlarged HD Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md animate-in fade-in duration-200">
          <div className="fixed inset-0" onClick={() => setSelectedPhotoIndex(null)} />

          <div className="relative max-w-5xl w-full bg-white rounded-2xl border border-slate-200 overflow-hidden z-10 shadow-2xl flex flex-col my-auto max-h-[92vh]">
            
            {/* Lightbox Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 bg-slate-50">
              <div className="pr-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-lime-500 text-slate-950">
                    {highlights[selectedPhotoIndex].category}
                  </span>
                  <span className="text-xs text-lime-700 font-bold">
                    {highlights[selectedPhotoIndex].inStockBadge}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                  {highlights[selectedPhotoIndex].title}
                </h4>
              </div>

              <button
                onClick={() => setSelectedPhotoIndex(null)}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200 cursor-pointer shrink-0"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Image View with Navigation */}
            <div className="relative overflow-hidden p-4 bg-slate-950 flex items-center justify-center min-h-[50vh] max-h-[70vh]">
              <img
                src={highlights[selectedPhotoIndex].image}
                alt={highlights[selectedPhotoIndex].title}
                className="max-h-[65vh] w-auto object-contain rounded-lg border border-slate-800"
              />

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-lime-500 hover:text-slate-950 text-white border border-slate-700 transition-colors cursor-pointer"
                title="Previous Highlight"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-lime-500 hover:text-slate-950 text-white border border-slate-700 transition-colors cursor-pointer"
                title="Next Highlight"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Footer Info */}
            <div className="px-5 py-3.5 border-t border-slate-200 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div>
                <p className="text-slate-600 max-w-2xl font-medium">
                  {highlights[selectedPhotoIndex].description}
                </p>
                <div className="text-[11px] text-slate-400 mt-1">
                  Photo {selectedPhotoIndex + 1} of {highlights.length} • Vijaya Lakshmi Electricals (Sangivalasa)
                </div>
              </div>

              <div className="flex gap-2 w-full sm:w-auto">
                <a
                  href={`tel:${STORE_INFO.contacts[0].phone}`}
                  className="px-4 py-2 bg-lime-500 hover:bg-lime-400 text-slate-950 font-black rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call to Check Stock</span>
                </a>
                
                <button
                  onClick={() => setSelectedPhotoIndex(null)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
