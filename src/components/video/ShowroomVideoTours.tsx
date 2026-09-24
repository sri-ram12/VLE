import React, { useRef, useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  VolumeX, 
  Maximize2, 
  X, 
  CheckCircle2, 
  PhoneCall, 
  MapPin, 
  Sparkles,
  Video,
  DoorOpen,
  LayoutGrid,
  Store,
  Layers,
  Warehouse
} from 'lucide-react';
import { STORE_INFO } from '../../data/storeInfo';

export interface VideoTour {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  badge: string;
  tags: string[];
  aspectRatio: '16/9' | '9/16';
  filterTag: 'all' | 'entrance' | 'counter' | 'sanitary' | 'godown';
  accentColor: 'lime' | 'emerald' | 'teal' | 'amber';
}

export const VIDEO_TOURS: VideoTour[] = [
  {
    id: 'vide4',
    src: '/videos/vide4.mp4',
    title: 'Tour 1: Grand Store Entrance & Night Storefront',
    subtitle: 'Live walkthrough from the illuminated storefront, Sudhakar pipes & glass entrance',
    category: 'Store Entrance & Night Exterior',
    description: 'Authentic walkthrough starting from our illuminated storefront on Sangivalasa Main Road. Shows our glowing 3D LED building signboards, Sudhakar pipes on the front porch, and entering through the grand glass sliding doors into the main showroom.',
    badge: 'Entrance Tour 01',
    tags: ['Night Facade', 'Glass Sliding Doors', 'Sudhakar Pipes', 'Goldmedal Neon Sign'],
    aspectRatio: '16/9',
    filterTag: 'entrance',
    accentColor: 'lime'
  },
  {
    id: 'vide2',
    src: '/videos/vide2.mp4',
    title: 'Tour 2: Customer Counter, CCTV & Switchboard Wall',
    subtitle: 'Walkthrough of our sales counter, pooja mandir, CCTV security & Goldmedal switchboard wall',
    category: 'Customer Counter & Electrical Switches',
    description: 'Detailed walkthrough behind the main sales counter: our traditional pooja mandir, live 6-channel CCTV security monitor, interactive Goldmedal modular switch display board, customer reception area, and decorative ceiling chandeliers.',
    badge: 'Showroom Tour 02',
    tags: ['Goldmedal Modular Switches', 'CCTV Monitor Wall', 'Pooja Mandir', 'Counter Sales Desk'],
    aspectRatio: '16/9',
    filterTag: 'counter',
    accentColor: 'teal'
  },
  {
    id: 'vide3',
    src: '/videos/vide3.mp4',
    title: 'Tour 3: Designer Ceramic Basins, Pedestals & Cable Aisles',
    subtitle: 'Lime green ZERA basins, marble pedestals & floor-to-ceiling Finolex cable shelves',
    category: 'Sanitaryware & Deep Electrical Inventory',
    description: 'Close-up video walkthrough of our luxury sanitary collection: lime green ZERA basins on turf runner, terracotta wave ceramics, monolithic marble hourglass pedestals, followed by deep aisles stacked high with Finolex, RR Kabel, and Goldmedal switch cartons.',
    badge: 'Basins & Cables Tour 03',
    tags: ['ZERA Basins', 'Marble Pedestals', 'Finolex Cables', 'Deep Stock Aisles'],
    aspectRatio: '16/9',
    filterTag: 'sanitary',
    accentColor: 'emerald'
  },
  {
    id: 'vide1',
    src: '/videos/vide1.mp4',
    title: 'Tour 4: Wholesale Godown & Water Storage Tanks',
    subtitle: '108s walkthrough of bulk Plasto/Vectus water tanks, Champion pipes & Crompton fan stacks',
    category: 'Wholesale Godown & Bulk Storage',
    description: 'Full 108-second authentic walkthrough inside our wholesale warehouse: stacked Plasto & Vectus water tanks, Champion garden & suction pipe coils, stacks of Crompton Speedo Air BLDC fans, Saffron cisterns, and wholesale Havells cartons.',
    badge: 'Warehouse Tour 04',
    tags: ['Plasto & Vectus Tanks', 'Champion Pipe Coils', 'Crompton Fan Stacks', 'Havells Bulk Stock'],
    aspectRatio: '9/16',
    filterTag: 'godown',
    accentColor: 'amber'
  }
];

// Single Video Card Component with Scrubber & Aspect Ratio Preference
const VideoCard: React.FC<{
  tour: VideoTour;
  onOpenFullscreen: (tour: VideoTour) => void;
}> = ({ tour, onOpenFullscreen }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const handleTimeUpdate = () => setCurrentTime(v.currentTime);
    const handleLoadedMetadata = () => setDuration(v.duration);
    const handleEnded = () => setIsPlaying(false);

    v.addEventListener('timeupdate', handleTimeUpdate);
    v.addEventListener('loadedmetadata', handleLoadedMetadata);
    v.addEventListener('ended', handleEnded);

    return () => {
      v.removeEventListener('timeupdate', handleTimeUpdate);
      v.removeEventListener('loadedmetadata', handleLoadedMetadata);
      v.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const colorStyles = {
    lime: {
      borderHover: 'hover:border-lime-500/80',
      badgeBg: 'bg-lime-100 text-lime-900 border-lime-300',
      pulseDot: 'bg-lime-500',
      btnPlay: 'bg-lime-500 text-slate-950',
      progressBar: 'accent-lime-500',
      expandText: 'text-lime-700 hover:text-lime-800'
    },
    teal: {
      borderHover: 'hover:border-teal-500/80',
      badgeBg: 'bg-teal-100 text-teal-900 border-teal-300',
      pulseDot: 'bg-teal-500',
      btnPlay: 'bg-teal-500 text-slate-950',
      progressBar: 'accent-teal-500',
      expandText: 'text-teal-700 hover:text-teal-800'
    },
    emerald: {
      borderHover: 'hover:border-emerald-500/80',
      badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      pulseDot: 'bg-emerald-500',
      btnPlay: 'bg-emerald-500 text-slate-950',
      progressBar: 'accent-emerald-500',
      expandText: 'text-emerald-700 hover:text-emerald-800'
    },
    amber: {
      borderHover: 'hover:border-amber-500/80',
      badgeBg: 'bg-amber-100 text-amber-900 border-amber-300',
      pulseDot: 'bg-amber-500',
      btnPlay: 'bg-amber-500 text-slate-950',
      progressBar: 'accent-amber-500',
      expandText: 'text-amber-700 hover:text-amber-800'
    }
  }[tour.accentColor];

  // Native Aspect Ratio handling: 16:9 for landscape, 9:16 for vertical
  const aspectClass = tour.aspectRatio === '9/16' 
    ? 'aspect-[9/16] max-h-[520px] mx-auto w-auto' 
    : 'aspect-video w-full';

  return (
    <div 
      className={`bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl ${colorStyles.borderHover} transition-all duration-300 flex flex-col overflow-hidden group`}
    >
      {/* Video Container (Strictly respects video natural aspect ratio preference) */}
      <div className="relative w-full bg-slate-950 overflow-hidden flex items-center justify-center min-h-[220px]">
        <div className={`relative ${aspectClass} overflow-hidden cursor-pointer`} onClick={togglePlay}>
          <video
            ref={videoRef}
            src={tour.src}
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
            autoPlay
            muted
            loop
            playsInline
          />

          {/* Top Overlay Badge Bar */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
            <div className="bg-slate-950/85 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-white border border-white/20 flex items-center gap-2 shadow-lg">
              <span className={`w-2 h-2 rounded-full ${colorStyles.pulseDot} animate-pulse`} />
              <span className="font-extrabold">{tour.badge}</span>
            </div>

            <div className="flex items-center gap-1.5 pointer-events-auto">
              {/* Silent Walkthrough Indicator Badge */}
              <span 
                className="px-2.5 py-1 rounded-full bg-slate-950/85 text-amber-300 border border-amber-400/30 text-[10px] font-bold backdrop-blur-md shadow-lg flex items-center gap-1"
                title="This tour is recorded without audio"
              >
                <VolumeX className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">No Audio</span>
              </span>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenFullscreen(tour);
                }}
                className="p-1.5 sm:p-2 rounded-full bg-slate-950/85 hover:bg-white hover:text-slate-950 text-white transition-all cursor-pointer border border-white/20 shadow-lg backdrop-blur-md"
                title="Fullscreen walkthrough"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Center Play/Pause Overlay */}
          <div
            className={`absolute inset-0 flex items-center justify-center bg-slate-950/20 transition-opacity z-10 ${
              isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
            }`}
          >
            <div className={`w-14 h-14 rounded-full ${colorStyles.btnPlay} flex items-center justify-center shadow-2xl backdrop-blur-sm transform transition-all group-hover:scale-110`}>
              {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-0.5" />}
            </div>
          </div>

          {/* Bottom Timeline Scrubber */}
          <div className="absolute inset-x-0 bottom-0 pt-6 pb-2.5 px-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-auto z-10 flex flex-col gap-1">
            <div className="flex items-center gap-2 text-[10px] text-white/90 font-mono font-bold">
              <span className="shrink-0">{formatTime(currentTime)}</span>
              <input
                type="range"
                min="0"
                max={duration || 100}
                step="0.1"
                value={currentTime}
                onChange={handleSeek}
                className={`w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer ${colorStyles.progressBar}`}
                onClick={(e) => e.stopPropagation()}
              />
              <span className="shrink-0">{formatTime(duration)}</span>
            </div>

            <div className="flex items-center justify-between text-white text-[10px] pointer-events-none">
              <span className="font-semibold text-white/90 drop-shadow-sm flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-lime-400 shrink-0" />
                <span className="truncate">Sangivalasa Store</span>
              </span>
              <span className="bg-white/20 text-white font-black px-1.5 py-0.2 rounded backdrop-blur-xs text-[9px]">
                {tour.aspectRatio === '9/16' ? '9:16 Mobile' : '16:9 HD'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-white">
        <div>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold border ${colorStyles.badgeBg}`}>
              {tour.badge}
            </span>
            <span className="text-xs font-bold text-slate-500">
              {tour.category}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-black text-slate-950 leading-snug">
            {tour.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            {tour.description}
          </p>
        </div>

        {/* Tags & Action */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {tour.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            onClick={() => onOpenFullscreen(tour)}
            className={`inline-flex items-center gap-1.5 text-xs font-bold ${colorStyles.expandText} hover:underline cursor-pointer ml-auto`}
          >
            <span>Expand Video</span>
            <Maximize2 className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export const ShowroomVideoTours: React.FC = () => {
  const [fullscreenVideo, setFullscreenVideo] = useState<VideoTour | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'entrance' | 'counter' | 'sanitary' | 'godown'>('all');
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const filteredTours = activeFilter === 'all' 
    ? VIDEO_TOURS 
    : VIDEO_TOURS.filter(t => t.filterTag === activeFilter);

  return (
    <section id="showroom-videos" className="py-20 bg-slate-50/70 text-slate-900 relative overflow-hidden border-b border-slate-200">
      
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-lime-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-amber-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-100 border border-lime-300 text-lime-900 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Video className="w-3.5 h-3.5 text-lime-700 animate-pulse" />
            <span>4 Authentic In-Store Video Walkthroughs</span>
            <span className="w-1.5 h-1.5 rounded-full bg-lime-600 animate-ping" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Inside Our Showroom &amp; Godown:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-700 via-emerald-600 to-amber-700">
              Live Video Tours
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Real footage recorded directly inside <strong>Vijaya Lakshmi Electricals</strong> in Sangivalasa. 
            Tour our illuminated night entrance, billing counter, designer sanitaryware gallery, and wholesale bulk storage yard.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-4xl mx-auto">
          {[
            { id: 'all', label: 'All Tours (4 Videos)', icon: LayoutGrid },
            { id: 'entrance', label: 'Tour 1: Entrance (vide4)', icon: DoorOpen },
            { id: 'counter', label: 'Tour 2: Counter & CCTV (vide2)', icon: Store },
            { id: 'sanitary', label: 'Tour 3: Basins & Cables (vide3)', icon: Layers },
            { id: 'godown', label: 'Tour 4: Wholesale Godown (vide1)', icon: Warehouse }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  isActive 
                    ? 'bg-slate-950 text-white shadow-md shadow-slate-950/20 scale-102 border border-slate-800' 
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-lime-400' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Responsive Grid: 2 Columns on Tablet/Desktop for Optimal Video Playback */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {filteredTours.map((tour) => (
            <VideoCard 
              key={tour.id} 
              tour={tour} 
              onOpenFullscreen={setFullscreenVideo} 
            />
          ))}
        </div>

        {/* Bottom Callout Bar */}
        <div className="mt-14 max-w-5xl mx-auto bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl text-white border border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-lime-500/20 border border-lime-400/30 flex items-center justify-center text-lime-400 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Need a Custom Live WhatsApp Video Walkthrough?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Call Ch. Vikram (9441160851) or Ch. Jagdish (7296856740). We can show you any basin, pump, wire gauge, or water tank over live WhatsApp video.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href={`tel:${STORE_INFO.contacts[0].phone}`}
              className="flex-1 md:flex-initial px-5 py-3 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 text-xs font-black flex items-center justify-center gap-2 shadow-lg transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-slate-950" />
              <span>Call Store</span>
            </a>
            <a
              href={STORE_INFO.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-initial px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center justify-center gap-2 border border-white/20 transition-colors"
            >
              <MapPin className="w-4 h-4 text-lime-400" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

      </div>

      {/* Fullscreen Video Modal */}
      {fullscreenVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md animate-in fade-in duration-200">
          <div className="fixed inset-0" onClick={() => setFullscreenVideo(null)} />

          <div className="relative max-w-3xl w-full bg-slate-950 rounded-2xl border border-white/20 overflow-hidden z-10 shadow-2xl flex flex-col my-auto max-h-[95vh]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-slate-900/90 text-white">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-lime-500 text-slate-950 uppercase">
                    {fullscreenVideo.badge}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Silent Walkthrough (No Audio)
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mt-1 line-clamp-1">
                  {fullscreenVideo.title}
                </h4>
              </div>
              <button
                onClick={() => setFullscreenVideo(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Video Container */}
            <div className="relative p-2 bg-black flex items-center justify-center max-h-[75vh]">
              <video
                ref={modalVideoRef}
                src={fullscreenVideo.src}
                className="max-h-[70vh] w-full rounded-lg object-contain"
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

            {/* Modal Footer */}
            <div className="px-4 py-3 border-t border-white/10 bg-slate-900 flex items-center justify-between text-xs text-white">
              <span className="text-slate-400 text-[11px] font-medium line-clamp-1">
                Vijaya Lakshmi Electricals • {fullscreenVideo.category}
              </span>
              <button
                onClick={() => setFullscreenVideo(null)}
                className="px-4 py-1.5 bg-lime-500 hover:bg-lime-400 text-slate-950 rounded-lg font-bold cursor-pointer"
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
