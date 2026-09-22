import React, { useState } from 'react';
import { Camera, Eye, MapPin, Sparkles, CheckCircle2, ArrowRight, X } from 'lucide-react';
import { STORE_INFO } from '../../data/storeInfo';

interface ShowroomGalleryProps {
  onSelectCategory?: (category: string) => void;
  onOpenEnquiry?: (subject?: string) => void;
}

export const ShowroomGallery: React.FC<ShowroomGalleryProps> = ({
  onSelectCategory: _onSelectCategory,
  onOpenEnquiry
}) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const showroomPhotos = [
    {
      id: 'basin-wall-goldmedal',
      title: 'Grand Ceramic Basin Wall & Smart Lighting',
      category: 'Sanitary & Electricals',
      description: 'Extensive showroom wall featuring 20+ designer countertop basins (gold mandala, Italian marble crackle, gold starburst, woodgrain) alongside the official Goldmedal smart modular lighting panel and storage water heaters.',
      image: '/images/showroom/showroom_basin_wall_goldmedal.png',
      tags: ['20+ Designer Basins', 'Goldmedal LED Board', 'Storage Geysers', 'Luxury Glazes']
    },
    {
      id: 'tabletop-basins',
      title: 'Countertop Art Basins & Grass Counter',
      category: 'Sanitary Highlights',
      description: 'Physical tabletop collection on artificial grass runner: lime green ZERA designer basin with leaf reliefs, pure white CIZARA square basin, terracotta wave-textured basin, and gloss white rectangular washbasin.',
      image: '/images/showroom/tabletop_basins_counter.png',
      tags: ['CIZARA Ceramic', 'ZERA Relief Basin', 'Terracotta Wave', 'Grass Runner Display']
    },
    {
      id: 'designer-pedestals',
      title: 'Hourglass Designer Pedestal Washbasins',
      category: 'Luxury Sanitary',
      description: 'Handcrafted architectural single-piece pedestal basins: gold-bronze crackle glaze, black pinstripe rings, crimson lace motifs, grey terrazzo floral art, and lotus petal patterns.',
      image: '/images/showroom/designer_pedestals_collection.png',
      tags: ['Monolithic Pedestals', 'Bronze Crackle', 'Crimson Lace', 'Terrazzo Art']
    },
    {
      id: 'shower-taps-wall',
      title: 'CERA Shower Mixers & Dual-Tone Faucet Wall',
      category: 'Bathroom Fittings',
      description: 'Official CERA wall with exposed 3-way thermostatic rain shower columns, dual-tone white & chrome faucets, wall bib taps, and Orient/Crompton BLDC fan stacks on top racks.',
      image: '/images/showroom/cera_shower_fittings_wall.png',
      tags: ['CERA 3-Way Mixers', 'Rain Shower Roses', 'Dual-Tone Taps', 'Orient BLDC+ Fans']
    },
    {
      id: 'pumps-corner',
      title: 'Domestic & Agricultural Water Pumps Corner',
      category: 'Pumps & Plumbing',
      description: 'Genuine water pump inventory: Havells Goldie series openwell submersibles, CRI self-priming pumps, Suguna monoblocs, Reliance borewell sets, and Dr. Fixit LW+ waterproofing drums.',
      image: '/images/showroom/pumps_havells_cri_suguna.jpg',
      tags: ['Havells Goldie', 'CRI Pumps', 'Suguna Monoblocs', 'Dr. Fixit LW+']
    },
    {
      id: 'pedestal-floor',
      title: 'Tree-Art Hourglass Pedestal & Fan Inventory',
      category: 'Sanitary & Electricals',
      description: 'Our signature showroom floor highlight: handcrafted yellow hourglass pedestal basin with sunset tree artwork silhouette, displayed beside Crompton Speedo Air BLDC energy fan stacks.',
      image: '/images/showroom/yellow_tree_pedestal_floor.jpg',
      tags: ['Signature Tree Art', 'Crompton Speedo Air', 'Showroom Floor', 'Instant Dispatch']
    },
    {
      id: 'pedestal-marble',
      title: 'Spiral Textured Pedestals & Water Pumps',
      category: 'Plumbing & Sanitary',
      description: 'Exclusive textured spiral pedestal basins, high-gloss Italian black marble vessels, and high-suction domestic monobloc water pumps ready for counter pickup.',
      image: '/images/showroom/marble_pedestals_row.png',
      tags: ['Spiral Textured Basins', 'Black Marble Columns', 'Water Pumps', 'Heavy Duty Glaze']
    },
    {
      id: 'brands-board',
      title: 'Authorised Lines & Infrastructure Piping',
      category: 'Wholesale & Retail',
      description: 'Comprehensive brand wall showing Astral, Sudhakar, Vectus water tanks, Prince pipes, Cona switchgear, Crompton pumps, and Finolex electrical cables.',
      image: '/images/showroom/banner_brands_board.jpg',
      tags: ['Vectus Water Tanks', 'Astral CPVC', 'Prince Pipes', 'Cona MCB & Switchgear']
    }
  ];

  return (
    <section id="showroom-gallery" className="py-20 bg-slate-50/80 text-slate-900 relative overflow-hidden border-y border-slate-200">
      
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lime-100 border border-lime-300 text-lime-900 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <Camera className="w-3.5 h-3.5 text-lime-700" />
              <span>Real Store Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Inside Our Sangivalasa Showroom
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              Authentic photographs from inside <strong>Vijaya Lakshmi Electricals</strong>. Inspect our designer basin gallery, live bathroom fixture panels, and comprehensive piping inventory.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-600 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs">
            <MapPin className="w-4 h-4 text-rose-500" />
            <span>Opp. Mudu Ammavari Temple, Main Road</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {showroomPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setActivePhotoIndex(idx)}
              className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl hover:border-lime-500/80 transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-lime-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                  {photo.category}
                </div>

                {/* Inspect Button Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs text-slate-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <Eye className="w-4 h-4 text-lime-700" />
                </div>

                {/* Bottom title overlay */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-base font-bold text-white group-hover:text-lime-300 transition-colors line-clamp-1 drop-shadow-sm">
                    {photo.title}
                  </h3>
                </div>
              </div>

              {/* Text Description & Tags */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-white">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                  {photo.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {photo.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-bold text-lime-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>On Display at Store</span>
                  </span>
                  <span className="font-bold text-lime-700 group-hover:text-lime-800 inline-flex items-center gap-1">
                    <span>Enlarge Photo</span>
                    <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>

            </div>
          ))}

          {/* 6th Callout Card: Walk In Today */}
          <div className="bg-gradient-to-br from-lime-600 via-emerald-600 to-teal-700 rounded-3xl border border-lime-400/50 p-6 sm:p-8 flex flex-col justify-between text-white shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-white mb-4 shadow-xs">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-lime-100 uppercase tracking-wider block mb-1">
                Walk-in Showroom
              </span>
              <h3 className="text-2xl font-black">
                Experience These Displays In Person
              </h3>
              <p className="text-xs sm:text-sm text-lime-50/90 mt-2 leading-relaxed">
                Visit our Sangivalasa showroom to touch the finishes, test the tap smoothness, and select custom sanitaryware sets with personalized guidance from <strong>Ch. Vikram</strong> and <strong>Ch. Jagdish</strong>.
              </p>
            </div>

            <div className="pt-6 border-t border-white/20 space-y-3">
              <div className="text-xs text-lime-100">
                Open All 7 Days • 8:00 AM – 9:00 PM
              </div>
              <div className="flex gap-2">
                <a
                  href={STORE_INFO.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 bg-white text-slate-950 rounded-xl text-xs font-black text-center hover:bg-lime-50 transition-colors shadow-sm"
                >
                  Get Directions
                </a>
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry('Showroom Visit / Product Check')}
                  className="flex-1 py-2.5 px-3 bg-slate-950/40 hover:bg-slate-950 text-white rounded-xl text-xs font-bold border border-white/20 transition-colors cursor-pointer"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal for enlarged photo */}
      {activePhotoIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="fixed inset-0" onClick={() => setActivePhotoIndex(null)} />

          <div className="relative max-w-4xl w-full bg-white rounded-3xl border border-slate-200 overflow-hidden z-10 shadow-2xl flex flex-col my-auto max-h-[90vh]">
            
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
              <div>
                <h4 className="text-base font-bold text-slate-900">
                  {showroomPhotos[activePhotoIndex].title}
                </h4>
                <span className="text-xs text-lime-700 font-semibold">
                  Vijaya Lakshmi Electricals • Sangivalasa Showroom
                </span>
              </div>
              <button
                onClick={() => setActivePhotoIndex(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Photo Body */}
            <div className="overflow-y-auto p-4 sm:p-6 flex flex-col items-center bg-slate-900">
              <img
                src={showroomPhotos[activePhotoIndex].image}
                alt={showroomPhotos[activePhotoIndex].title}
                className="max-h-[60vh] w-auto object-contain rounded-xl shadow-lg"
              />
              <p className="text-xs sm:text-sm text-slate-200 mt-4 text-center max-w-xl">
                {showroomPhotos[activePhotoIndex].description}
              </p>
            </div>

            {/* Footer actions */}
            <div className="px-6 py-3.5 border-t border-slate-200 bg-white flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">
                Photo {activePhotoIndex + 1} of {showroomPhotos.length}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    const next = (activePhotoIndex + 1) % showroomPhotos.length;
                    setActivePhotoIndex(next);
                  }}
                  className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-bold cursor-pointer"
                >
                  Next Photo
                </button>
                <button
                  onClick={() => setActivePhotoIndex(null)}
                  className="px-4 py-1.5 bg-lime-600 hover:bg-lime-500 text-white rounded-lg font-bold cursor-pointer"
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
