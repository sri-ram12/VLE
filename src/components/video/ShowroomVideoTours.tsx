import React, { useRef, useState } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  X, 
  CheckCircle2, 
  PhoneCall, 
  MapPin, 
  Sparkles,
  Video
} from 'lucide-react';
import { STORE_INFO } from '../../data/storeInfo';

interface VideoTour {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  badge: string;
  tags: string[];
}

export const ShowroomVideoTours: React.FC = () => {
  const videoTours: VideoTour[] = [
    {
      id: 'vid1',
      src: '/videos/vid1.mp4',
      title: 'Showroom Tour 1: Sanitaryware & Designer Basins',
      subtitle: 'Walkthrough of our art washbasins, hourglass pedestals & CERA shower fittings',
      category: 'Sanitaryware & Fittings',
      description: 'Authentic mobile video walkthrough showcasing our live countertop display with lime green ZERA basins, terracotta wave ceramics, monolithic hourglass pedestals, and the official CERA exposed shower column wall.',
      badge: 'Showroom Tour 01',
      tags: ['CERA Showers', 'Hourglass Pedestals', 'Artisan Tabletop Basins', 'Grass Runner Display']
    },
    {
      id: 'vid2',
      src: '/videos/vid2.mp4',
      title: 'Showroom Tour 2: Pumps, Electricals & Showroom Floor',
      subtitle: 'Walkthrough of water pumps, Crompton BLDC fans & electrical inventory',
      category: 'Pumps, Electricals & Hardware',
      description: 'Physical video walkthrough capturing our front showroom floor: Havells Goldie series monobloc pumps, CRI and Suguna domestic water pumps, Reliance borewell submersible sets, and Crompton Speedo Air fans.',
      badge: 'Showroom Tour 02',
      tags: ['Havells & CRI Pumps', 'Reliance Submersibles', 'BLDC Fan Stacks', 'Dr. Fixit Chemical Drums']
    }
  ];

  // Video playback states
  const [isPlaying1, setIsPlaying1] = useState(true);
  const [isPlaying2, setIsPlaying2] = useState(true);
  const [isMuted1, setIsMuted1] = useState(true);
  const [isMuted2, setIsMuted2] = useState(true);
  const [fullscreenVideo, setFullscreenVideo] = useState<VideoTour | null>(null);

  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const togglePlay1 = () => {
    if (!videoRef1.current) return;
    if (videoRef1.current.paused) {
      videoRef1.current.play();
      setIsPlaying1(true);
    } else {
      videoRef1.current.pause();
      setIsPlaying1(false);
    }
  };

  const togglePlay2 = () => {
    if (!videoRef2.current) return;
    if (videoRef2.current.paused) {
      videoRef2.current.play();
      setIsPlaying2(true);
    } else {
      videoRef2.current.pause();
      setIsPlaying2(false);
    }
  };

  const toggleMute1 = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef1.current) return;
    videoRef1.current.muted = !videoRef1.current.muted;
    setIsMuted1(videoRef1.current.muted);
  };

  const toggleMute2 = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef2.current) return;
    videoRef2.current.muted = !videoRef2.current.muted;
    setIsMuted2(videoRef2.current.muted);
  };

  return (
    <section id="showroom-videos" className="py-20 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200">
      
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-lime-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-100 border border-lime-300 text-lime-900 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Video className="w-3.5 h-3.5 text-lime-700 animate-pulse" />
            <span>Real In-Store Video Walkthroughs</span>
            <span className="w-1.5 h-1.5 rounded-full bg-lime-600 animate-ping"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Inside Our Showroom:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-700 via-emerald-600 to-teal-700">
              Live Video Tours
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Watch real footage recorded directly inside <strong>Vijaya Lakshmi Electricals</strong> in Sangivalasa. Inspect our designer washbasins, live CERA shower displays, and branded pump inventory with zero distortion.
          </p>
        </div>

        {/* 2-Column Balanced Video Showcase with Expanded Width & Seamless Border Fit */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl xl:max-w-6xl mx-auto items-stretch">
          
          {/* Video 1 Card: Sanitaryware & Basins */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:border-lime-500/70 transition-all duration-300 flex flex-col overflow-hidden group">
            
            {/* Video Frame: Flush Edge-to-Edge with Card to Eliminate Border Gaps */}
            <div className="relative w-full aspect-[9/16] sm:aspect-[4/5] md:aspect-[9/16] lg:aspect-[4/5] bg-slate-950 overflow-hidden">
              <video
                ref={videoRef1}
                src={videoTours[0].src}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                autoPlay
                muted={isMuted1}
                loop
                playsInline
                onClick={togglePlay1}
              />

              {/* Top Video Overlay Bar */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                <div className="bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] font-bold text-white border border-white/20 flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
                  <span className="text-lime-300 font-extrabold">{videoTours[0].badge}</span>
                  <span className="text-slate-300 text-[10px] hidden sm:inline">• {videoTours[0].category}</span>
                </div>

                <div className="flex gap-2 pointer-events-auto">
                  <button
                    onClick={toggleMute1}
                    className="p-2.5 rounded-full bg-slate-950/80 hover:bg-lime-500 hover:text-slate-950 text-white transition-all cursor-pointer border border-white/20 shadow-lg backdrop-blur-md"
                    title={isMuted1 ? 'Unmute audio' : 'Mute audio'}
                  >
                    {isMuted1 ? <VolumeX className="w-4 h-4 text-slate-300" /> : <Volume2 className="w-4 h-4 text-lime-400" />}
                  </button>
                  <button
                    onClick={() => setFullscreenVideo(videoTours[0])}
                    className="p-2.5 rounded-full bg-slate-950/80 hover:bg-lime-500 hover:text-slate-950 text-white transition-all cursor-pointer border border-white/20 shadow-lg backdrop-blur-md"
                    title="Fullscreen view"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Play/Pause Overlay Button */}
              <button
                onClick={togglePlay1}
                className={`absolute inset-0 flex items-center justify-center bg-slate-950/25 transition-opacity cursor-pointer z-10 ${
                  isPlaying1 ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-lime-500/90 text-slate-950 flex items-center justify-center shadow-2xl backdrop-blur-sm transform transition-all group-hover:scale-110">
                  {isPlaying1 ? <Pause className="w-7 h-7 fill-current" /> : <Play className="w-7 h-7 fill-current ml-1" />}
                </div>
              </button>

              {/* Bottom Subtle Gradient for Video Info readability */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />
              
              {/* Bottom Pill on video */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs pointer-events-none z-10">
                <span className="font-semibold text-white/90 drop-shadow-sm flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" />
                  Recorded in Sangivalasa Showroom
                </span>
                <span className="text-[10px] bg-lime-500/90 text-slate-950 font-black px-2 py-0.5 rounded shadow-sm">
                  1080p HD
                </span>
              </div>
            </div>

            {/* Video Details Card Body */}
            <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-white">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-lime-100 text-lime-800 text-[11px] font-bold border border-lime-300">
                    {videoTours[0].badge}
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    {videoTours[0].category}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-950 leading-snug">
                  {videoTours[0].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {videoTours[0].description}
                </p>
              </div>

              {/* Tags & Action */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {videoTours[0].tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setFullscreenVideo(videoTours[0])}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-lime-700 hover:text-lime-800 hover:underline cursor-pointer ml-auto"
                >
                  <span>Expand video</span>
                  <Maximize2 className="w-3 h-3" />
                </button>
              </div>
            </div>

          </div>

          {/* Video 2 Card: Pumps & Electricals */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:border-emerald-500/70 transition-all duration-300 flex flex-col overflow-hidden group">
            
            {/* Video Frame: Flush Edge-to-Edge with Card to Eliminate Border Gaps */}
            <div className="relative w-full aspect-[9/16] sm:aspect-[4/5] md:aspect-[9/16] lg:aspect-[4/5] bg-slate-950 overflow-hidden">
              <video
                ref={videoRef2}
                src={videoTours[1].src}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                autoPlay
                muted={isMuted2}
                loop
                playsInline
                onClick={togglePlay2}
              />

              {/* Top Video Overlay Bar */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                <div className="bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] font-bold text-white border border-white/20 flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-emerald-300 font-extrabold">{videoTours[1].badge}</span>
                  <span className="text-slate-300 text-[10px] hidden sm:inline">• {videoTours[1].category}</span>
                </div>

                <div className="flex gap-2 pointer-events-auto">
                  <button
                    onClick={toggleMute2}
                    className="p-2.5 rounded-full bg-slate-950/80 hover:bg-emerald-500 hover:text-slate-950 text-white transition-all cursor-pointer border border-white/20 shadow-lg backdrop-blur-md"
                    title={isMuted2 ? 'Unmute audio' : 'Mute audio'}
                  >
                    {isMuted2 ? <VolumeX className="w-4 h-4 text-slate-300" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                  </button>
                  <button
                    onClick={() => setFullscreenVideo(videoTours[1])}
                    className="p-2.5 rounded-full bg-slate-950/80 hover:bg-emerald-500 hover:text-slate-950 text-white transition-all cursor-pointer border border-white/20 shadow-lg backdrop-blur-md"
                    title="Fullscreen view"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Play/Pause Overlay Button */}
              <button
                onClick={togglePlay2}
                className={`absolute inset-0 flex items-center justify-center bg-slate-950/25 transition-opacity cursor-pointer z-10 ${
                  isPlaying2 ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/90 text-slate-950 flex items-center justify-center shadow-2xl backdrop-blur-sm transform transition-all group-hover:scale-110">
                  {isPlaying2 ? <Pause className="w-7 h-7 fill-current" /> : <Play className="w-7 h-7 fill-current ml-1" />}
                </div>
              </button>

              {/* Bottom Subtle Gradient for Video Info readability */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />
              
              {/* Bottom Pill on video */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs pointer-events-none z-10">
                <span className="font-semibold text-white/90 drop-shadow-sm flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Recorded in Sangivalasa Showroom
                </span>
                <span className="text-[10px] bg-emerald-500/90 text-slate-950 font-black px-2 py-0.5 rounded shadow-sm">
                  1080p HD
                </span>
              </div>
            </div>

            {/* Video Details Card Body */}
            <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-white">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[11px] font-bold border border-emerald-300">
                    {videoTours[1].badge}
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    {videoTours[1].category}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-950 leading-snug">
                  {videoTours[1].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {videoTours[1].description}
                </p>
              </div>

              {/* Tags & Action */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {videoTours[1].tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setFullscreenVideo(videoTours[1])}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:underline cursor-pointer ml-auto"
                >
                  <span>Expand video</span>
                  <Maximize2 className="w-3 h-3" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Callout Bar */}
        <div className="mt-14 max-w-4xl mx-auto bg-gradient-to-r from-lime-600 via-lime-700 to-emerald-800 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-white shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Want to Inspect Stock Live or Request a Video Quote?
              </h4>
              <p className="text-xs text-lime-100">
                Call Ch. Vikram (9441160851) or Ch. Jagdish (7296856740) for WhatsApp live stock video demo.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
            <a
              href={`tel:${STORE_INFO.contacts[0].phone}`}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-white text-slate-950 text-xs font-black flex items-center justify-center gap-1.5 shadow-sm hover:bg-lime-50 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-lime-700" />
              <span>Call Store</span>
            </a>
            <a
              href={STORE_INFO.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-lime-950/40 hover:bg-lime-950 text-white text-xs font-bold flex items-center justify-center gap-1.5 border border-white/20 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-lime-300" />
              <span>Visit Us</span>
            </a>
          </div>
        </div>

      </div>

      {/* Fullscreen Video Modal */}
      {fullscreenVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md animate-in fade-in duration-200">
          <div className="fixed inset-0" onClick={() => setFullscreenVideo(null)} />

          <div className="relative max-w-lg w-full bg-white rounded-2xl border border-slate-200 overflow-hidden z-10 shadow-2xl flex flex-col my-auto max-h-[95vh]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-slate-50">
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-lime-500 text-slate-950 uppercase">
                  {fullscreenVideo.badge}
                </span>
                <h4 className="text-sm font-bold text-slate-900 mt-0.5 line-clamp-1">
                  {fullscreenVideo.title}
                </h4>
              </div>
              <button
                onClick={() => setFullscreenVideo(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Video Container */}
            <div className="relative p-2 bg-black flex items-center justify-center max-h-[75vh]">
              <video
                ref={modalVideoRef}
                src={fullscreenVideo.src}
                className="max-h-[70vh] w-auto rounded-lg object-contain"
                autoPlay
                controls
                playsInline
              />
            </div>

            {/* Modal Footer */}
            <div className="px-4 py-3 border-t border-slate-200 bg-white flex items-center justify-between text-xs">
              <span className="text-slate-500 text-[11px] font-medium line-clamp-1">
                Vijaya Lakshmi Electricals • Sangivalasa
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
