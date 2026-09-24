import React, { useState, useRef } from 'react';
import { 
  Users, 
  Building, 
  CheckCircle2, 
  ArrowRight, 
  BadgePercent, 
  ReceiptText, 
  Clock,
  Video,
  Play,
  Pause,
  Maximize2,
  VolumeX,
  X
} from 'lucide-react';

interface WholesaleRetailProps {
  onBrowseRetail: () => void;
  onRequestBulk: () => void;
}

export const WholesaleRetailSection: React.FC<WholesaleRetailProps> = ({
  onBrowseRetail,
  onRequestBulk
}) => {
  const [wholesaleMediaMode, setWholesaleMediaMode] = useState<'photo' | 'video'>('video');
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideoPlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
      setIsVideoPlaying(true);
    } else {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  return (
    <section id="wholesale" className="py-20 bg-slate-50/80 relative overflow-hidden border-t border-slate-200 text-slate-900">
      
      {/* Background accents */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="px-3.5 py-1.5 rounded-full bg-lime-100 border border-lime-300 text-lime-900 text-xs font-bold uppercase tracking-wider inline-block mb-3 shadow-2xs">
            Wholesale &amp; Retail Model
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            From One Piece to Bulk Requirements
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            For individual customers, contractors, electricians, plumbers, builders, and business requirements. 
            Enjoy transparent counter sales or tiered contractor volume discounts.
          </p>
        </div>

        {/* Dual Cards: Retail & Wholesale */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: RETAIL */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:border-lime-500/70 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-lime-500/10 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-lime-100 border border-lime-300 text-lime-800 flex items-center justify-center shadow-xs">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-lime-700 uppercase tracking-wider block">
                    Individual &amp; Household Needs
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-950">
                    Retail Customers
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                Whether you need a single replacement switch, a garden tap, a ceiling fan, or bathroom floor drains for weekend home improvements.
              </p>

              {/* Retail Real Store Visual */}
              <div className="relative aspect-16/9 rounded-2xl overflow-hidden mb-6 border border-slate-200 shadow-sm group">
                <img
                  src="/images/storefront/storefront_interior_glass_view.png"
                  alt="Vijaya Lakshmi Electricals Walk-in Retail Counter"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 bg-slate-900/80 border border-white/20 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                  Sangivalasa Counter Sales
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Ideal For:
                </div>
                {[
                  'Homeowners & tenants',
                  'Individual maintenance & DIY replacements',
                  'Single piece counter sales',
                  'Instant walk-in store assistance'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-lime-600" />
                <span>Open 7 Days (8 AM – 9 PM)</span>
              </div>

              <button
                onClick={onBrowseRetail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-lime-600 hover:bg-lime-500 text-white font-bold text-sm transition-all shadow-md shadow-lime-600/20 cursor-pointer"
              >
                <span>Browse Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: WHOLESALE */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:border-emerald-500/70 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-800 flex items-center justify-center shadow-xs">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
                    Commercial &amp; Project Supply
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-950">
                    Wholesale &amp; Contractors
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                Direct wholesale supply with tiered volume pricing, GST compliant billing, and prioritized fulfillment for construction sites across Visakha district.
              </p>

              {/* Wholesale Real Stock Visual: Video vs Photo Toggle */}
              <div className="mb-6">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-slate-500">Live Inventory Verification:</span>
                  <div className="flex bg-slate-100 p-0.5 rounded-lg border border-slate-200">
                    <button
                      onClick={() => setWholesaleMediaMode('video')}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold flex items-center gap-1 transition-all cursor-pointer ${
                        wholesaleMediaMode === 'video'
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Video className="w-3.5 h-3.5" />
                      <span>Live Godown Video</span>
                    </button>
                    <button
                      onClick={() => setWholesaleMediaMode('photo')}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
                        wholesaleMediaMode === 'photo'
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <span>Yard Photo</span>
                    </button>
                  </div>
                </div>

                <div className="relative aspect-16/9 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-950 group">
                  {wholesaleMediaMode === 'video' ? (
                    <div className="relative w-full h-full cursor-pointer" onClick={toggleVideoPlay}>
                      <video
                        ref={videoRef}
                        src="/videos/vide1.mp4"
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                      
                      {/* Video Top Badges */}
                      <div className="absolute top-2 left-2 right-2 flex items-center justify-between pointer-events-none z-10">
                        <div className="bg-emerald-700/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-sm flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                          <span>Warehouse Godown Tour (vide1)</span>
                        </div>

                        <div className="flex items-center gap-1 pointer-events-auto">
                          <span className="bg-slate-950/80 text-amber-300 border border-amber-400/30 text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-xs flex items-center gap-1">
                            <VolumeX className="w-3 h-3 text-amber-400" />
                            <span>Silent</span>
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsModalOpen(true);
                            }}
                            className="p-1.5 bg-slate-950/80 hover:bg-white hover:text-slate-950 text-white rounded cursor-pointer border border-white/20 transition-colors"
                            title="Expand video"
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Play/Pause Overlay */}
                      <div className={`absolute inset-0 flex items-center justify-center bg-slate-950/20 transition-opacity ${
                        isVideoPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
                      }`}>
                        <div className="w-12 h-12 rounded-full bg-emerald-500/90 text-slate-950 flex items-center justify-center shadow-lg">
                          {isVideoPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                        </div>
                      </div>

                      {/* Video Bottom Info */}
                      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] text-white pointer-events-none z-10 bg-black/50 px-2.5 py-1 rounded backdrop-blur-xs">
                        <span>Plasto/Vectus Tanks • Crompton Fans • Pipes</span>
                        <span className="font-mono font-bold text-emerald-300">1m 48s Walkthrough</span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <img
                        src="/images/storefront/astral_tanks_sudhakar_yard.png"
                        alt="Astral Water Tanks & Sudhakar Piping Bulk Yard"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2 left-2 bg-emerald-700/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                        Astral &amp; Sudhakar Bulk Storage Yard
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Ideal For:
                </div>
                {[
                  'Civil contractors & building developers',
                  'Professional electrical & plumbing contractors',
                  'Architects & interior site supervisors',
                  'Commercial complexes & apartment associations'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <ReceiptText className="w-4 h-4 text-emerald-600" />
                  <span>GST Billing</span>
                </span>
                <span className="flex items-center gap-1">
                  <BadgePercent className="w-4 h-4 text-lime-600" />
                  <span>Tiered Margins</span>
                </span>
              </div>

              <button
                onClick={onRequestBulk}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-md shadow-emerald-600/20 cursor-pointer"
              >
                <span>Request Bulk Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Godown Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md animate-in fade-in duration-200">
          <div className="fixed inset-0" onClick={() => setIsModalOpen(false)} />

          <div className="relative max-w-md w-full bg-slate-950 rounded-2xl border border-white/20 overflow-hidden z-10 shadow-2xl flex flex-col my-auto max-h-[95vh]">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-slate-900 text-white">
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500 text-slate-950 uppercase">
                  Wholesale Godown Walkthrough
                </span>
                <h4 className="text-sm font-bold text-white mt-1">
                  Water Tanks, Bulk Pipes &amp; Fan Stocks
                </h4>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative p-2 bg-black flex items-center justify-center max-h-[75vh]">
              <video
                src="/videos/vide1.mp4"
                className="max-h-[70vh] w-auto rounded-lg object-contain"
                autoPlay
                controls
                muted
                playsInline
                disableRemotePlayback
                controlsList="nodownload nofullscreen noremoteplayback"
                onVolumeChange={(e) => {
                  e.currentTarget.muted = true;
                  e.currentTarget.volume = 0;
                }}
              />
            </div>

            <div className="px-4 py-3 border-t border-white/10 bg-slate-900 flex items-center justify-between text-xs text-white">
              <span className="text-slate-400 text-[11px]">
                Vijaya Lakshmi Electricals • Wholesale Godown
              </span>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-lg font-bold cursor-pointer"
              >
                Close Video
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
