import { useState, useRef, useEffect } from "react";
import { personalData, mainWorkAreas, type WorkAreaItem } from "@/data/portfolioData";
import { ArrowUpRight, Github, Instagram, Palette, Hammer, Terminal, Sparkles, Compass, Volume2, VolumeX, Play, Pause } from "lucide-react";

function RishiDrawsCard({ item }: { item: WorkAreaItem }) {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const mediaList = [
    {
      title: item.title,
      tagline: item.tagline || "Some feelings are easier to draw than explain.",
      caption: "Feelings & Sketches · Ongoing Collection",
      tag: "FEATURED PROCESS",
      videoUrl: item.videoUrl,
      imageUrl: item.imageUrl,
    },
    ...(item.galleryImages || []).map((g) => ({
      title: g.title,
      tagline: g.caption,
      caption: g.caption,
      tag: "SKETCH VIGNETTE",
      videoUrl: g.videoUrl,
      imageUrl: g.url,
    })),
  ];

  const currentMedia = mediaList[activeMediaIndex] || mediaList[0];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            setIsPlaying(false);
          });
      }
    }
  }, [activeMediaIndex]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <div
      key={item.id}
      className="group relative rounded-2xl sm:rounded-3xl border border-purple-500/20 bg-gradient-to-b from-purple-950/20 via-zinc-950/90 to-black p-5 sm:p-8 md:p-14 overflow-hidden shadow-[0_20px_80px_rgba(168,85,247,0.07)] hover:border-purple-400/40 transition-all duration-700"
    >
      {/* Atmospheric emotional background aura */}
      <div className="absolute top-0 right-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-pink-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 space-y-8 sm:space-y-12">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-purple-500/15">
          <div className="flex items-center gap-4 sm:gap-5">
            <span className="text-4xl sm:text-6xl md:text-7xl font-black font-mono tracking-tighter text-purple-400/80">
              01
            </span>
            <div className="h-8 sm:h-10 w-px bg-purple-400/20" />
            <div>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-mono text-purple-300/60 block">
                PERSONAL ART SPACE & VISUAL STORIES
              </span>
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-mono font-bold text-purple-300">
                EMOTIONS, TURNED INTO ART.
              </span>
            </div>
          </div>

          {/* Instagram Handle & Direct Button */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={item.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center justify-center inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 text-white hover:brightness-110 shadow-lg shadow-purple-500/25 transition-all duration-300 hover:scale-[1.03]"
            >
              <Instagram size={14} />
              {item.buttonText || "VIEW RISSHHIIIDRAWSS →"}
            </a>
          </div>
        </div>

        {/* Main Art & Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left: Emotional narrative and context */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <h3 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-white lowercase">
                {item.title}
              </h3>
              {/* Small Tagline */}
              <p className="text-xs sm:text-base font-serif italic text-purple-200/90 tracking-wide border-l-2 border-purple-500/40 pl-3">
                “Some feelings are easier to draw than explain.”
              </p>
            </div>

            {/* Emotional Story Description */}
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed font-sans">
              <p className="text-white font-medium text-sm sm:text-base md:text-lg">
                "I draw what I can't always put into words."
              </p>
              <p className="text-zinc-400">
                RishiDraws is my personal art space where I turn emotions, thoughts, memories, loneliness, and random moments into sketches and visual stories.
              </p>
            </div>

            {/* Focus Areas / Emotional Tags */}
            <div className="space-y-2 pt-1 sm:pt-2">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-mono text-purple-300/50 block">
                Focus & Mediums
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {item.techOrMedia.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[10px] sm:text-xs font-mono rounded-lg sm:rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-200 transition-colors hover:bg-purple-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Instagram Handle Direct Link & Active Indicator */}
            <div className="pt-1 sm:pt-2 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-xs font-mono text-zinc-500">Instagram:</span>
                <a
                  href={item.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-bold text-purple-300 hover:text-white underline decoration-purple-500/50 underline-offset-4 transition-colors"
                >
                  {item.instagramHandle || "@risshhiiidrawss"}
                </a>
              </div>

              {activeMediaIndex !== 0 && (
                <button
                  type="button"
                  onClick={() => setActiveMediaIndex(0)}
                  className="text-[11px] font-mono text-purple-400 hover:text-purple-200 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  ↺ Reset to main video
                </button>
              )}
            </div>
          </div>

          {/* Right: Visual Storytelling Gallery Frame Layout with Video Support */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            {/* Main Showcase Art Frame */}
            <div
              onClick={togglePlay}
              className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-purple-500/30 bg-zinc-950 aspect-[4/3] group/frame shadow-2xl cursor-pointer"
            >
              {currentMedia.videoUrl ? (
                <video
                  key={currentMedia.videoUrl}
                  ref={videoRef}
                  src={currentMedia.videoUrl}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onLoadedData={(e) => {
                    const vid = e.currentTarget;
                    vid.play().then(() => setIsPlaying(true)).catch(() => {});
                  }}
                  className="w-full h-full object-cover group-hover/frame:scale-105 transition-transform duration-700"
                />
              ) : (
                <img
                  src={currentMedia.imageUrl}
                  alt={currentMedia.title}
                  className="w-full h-full object-cover group-hover/frame:scale-105 transition-transform duration-700 opacity-90 group-hover/frame:opacity-100"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

              {/* Floating Top Controls (Status badge & Audio/Play controls) */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between z-20">
                <div className="flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-purple-500/40 text-[9px] sm:text-[10px] font-mono text-purple-200 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                  <span>{currentMedia.videoUrl ? "PROCESS VIDEO" : "ARTWORK"}</span>
                </div>

                {currentMedia.videoUrl && (
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMute();
                      }}
                      className="p-1.5 sm:p-2 rounded-full bg-black/60 backdrop-blur-md border border-purple-500/40 text-purple-200 hover:text-white hover:border-purple-300 transition-colors shadow-lg cursor-pointer"
                      title={isMuted ? "Unmute audio" : "Mute audio"}
                    >
                      {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePlay();
                      }}
                      className="p-1.5 sm:p-2 rounded-full bg-black/60 backdrop-blur-md border border-purple-500/40 text-purple-200 hover:text-white hover:border-purple-300 transition-colors shadow-lg cursor-pointer"
                      title={isPlaying ? "Pause video" : "Play video"}
                    >
                      {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                    </button>
                  </div>
                )}
              </div>

              {/* Center Play indicator when paused */}
              {currentMedia.videoUrl && !isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                  <div className="w-12 h-12 rounded-full bg-purple-600/80 backdrop-blur-md flex items-center justify-center text-white shadow-xl shadow-purple-900/50">
                    <Play size={20} className="ml-0.5" />
                  </div>
                </div>
              )}

              {/* Frame overlay text */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-end justify-between z-20 pointer-events-none">
                <div className="space-y-0.5 sm:space-y-1 max-w-[75%]">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-widest font-mono text-purple-300/90 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-purple-500/30 inline-block">
                    {currentMedia.tag}
                  </span>
                  <p className="text-[11px] sm:text-xs md:text-sm font-serif italic text-white/95 truncate">
                    {currentMedia.title} · {currentMedia.caption}
                  </p>
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono text-purple-300/80">
                  {item.instagramHandle || "@risshhiiidrawss"}
                </span>
              </div>
            </div>

            {/* Mini Gallery Strip: 3 Narrative Mood Vignettes with Video Previews */}
            {item.galleryImages && item.galleryImages.length > 0 && (
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {item.galleryImages.map((img, idx) => {
                  const mediaIndex = idx + 1;
                  const isActive = activeMediaIndex === mediaIndex;
                  return (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => setActiveMediaIndex(mediaIndex)}
                      className={`group/mini relative rounded-lg sm:rounded-xl overflow-hidden border aspect-[4/3] text-left transition-all duration-300 focus:outline-none cursor-pointer ${
                        isActive
                          ? "border-purple-400 ring-2 ring-purple-400/80 shadow-lg shadow-purple-500/25 scale-[1.02]"
                          : "border-purple-500/25 bg-zinc-900/60 hover:border-purple-400/60 opacity-80 hover:opacity-100"
                      }`}
                    >
                      {img.videoUrl ? (
                        <video
                          src={img.videoUrl}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover group-hover/mini:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <img
                          src={img.url}
                          alt={img.title || "Artwork preview"}
                          className="w-full h-full object-cover group-hover/mini:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-between p-1.5 sm:p-2 pointer-events-none">
                        <div className="flex justify-between items-start">
                          {img.videoUrl && (
                            <span className="text-[7px] sm:text-[8px] font-mono px-1 py-0.5 rounded bg-black/70 backdrop-blur-xs border border-purple-500/40 text-purple-200">
                              VID
                            </span>
                          )}
                          {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
                          )}
                        </div>
                        <span className="text-[8px] sm:text-[9px] font-mono text-purple-200 truncate">
                          {img.title}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function RishiCreatesCard({ item }: { item: WorkAreaItem }) {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const mediaList = [
    {
      title: item.title,
      tagline: item.tagline || "Where digital design meets physical craftsmanship.",
      caption: "Digital Fabrication & Wood-Relief Process",
      tag: "FEATURED CRAFT",
      videoUrl: item.videoUrl,
      imageUrl: item.imageUrl,
    },
    ...(item.galleryImages || []).map((g) => ({
      title: g.title,
      tagline: g.caption,
      caption: g.caption,
      tag: "FABRICATION VIGNETTE",
      videoUrl: g.videoUrl,
      imageUrl: g.url,
    })),
  ];

  const currentMedia = mediaList[activeMediaIndex] || mediaList[0];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            setIsPlaying(false);
          });
      }
    }
  }, [activeMediaIndex]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <div
      key={item.id}
      className="group relative rounded-2xl sm:rounded-3xl border border-amber-500/25 bg-gradient-to-b from-amber-950/20 via-zinc-950/90 to-black p-5 sm:p-8 md:p-14 overflow-hidden shadow-[0_20px_80px_rgba(245,158,11,0.07)] hover:border-amber-400/40 transition-all duration-700"
    >
      {/* Atmospheric craft background aura */}
      <div className="absolute top-0 right-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 space-y-8 sm:space-y-12">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-amber-500/15">
          <div className="flex items-center gap-4 sm:gap-5">
            <span className="text-4xl sm:text-6xl md:text-7xl font-black font-mono tracking-tighter text-amber-400/80">
              02
            </span>
            <div className="h-8 sm:h-10 w-px bg-amber-400/20" />
            <div>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-mono text-amber-300/60 block">
                {item.categoryTag}
              </span>
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-mono font-bold text-amber-300">
                {item.subtitle}
              </span>
            </div>
          </div>

          {/* Instagram Handle & Direct Button */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {item.instagramUrl && (
              <a
                href={item.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center justify-center inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 text-black hover:brightness-110 shadow-lg shadow-amber-500/25 transition-all duration-300 hover:scale-[1.03]"
              >
                <Instagram size={14} />
                {item.buttonText || "VIEW RISSHHIIICREATES →"}
              </a>
            )}
          </div>
        </div>

        {/* Main Craft & Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left: Fabrication narrative and context */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div className="space-y-2">
              <h3 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-white lowercase">
                {item.title}
              </h3>
              <p className="text-xs sm:text-base font-serif italic text-amber-200/90 tracking-wide border-l-2 border-amber-500/40 pl-3">
                “{item.tagline || "Where digital design meets physical craftsmanship."}”
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed font-sans">
              <p className="text-white font-medium text-sm sm:text-base md:text-lg">
                "Where digital precision meets the warmth of raw timber."
              </p>
              <p className="text-zinc-400">
                {item.description}
              </p>
            </div>

            {/* Focus Areas / Tools */}
            <div className="space-y-2 pt-1 sm:pt-2">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-mono text-amber-300/50 block">
                Fabrication & Tools
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {item.techOrMedia.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[10px] sm:text-xs font-mono rounded-lg sm:rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 transition-colors hover:bg-amber-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links and Reset */}
            <div className="pt-1 sm:pt-2 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-xs font-mono text-zinc-500">Instagram:</span>
                <a
                  href={item.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-bold text-amber-300 hover:text-white underline decoration-amber-500/50 underline-offset-4 transition-colors"
                >
                  {item.instagramHandle || "@risshhiiicreates"}
                </a>
              </div>

              {activeMediaIndex !== 0 && (
                <button
                  type="button"
                  onClick={() => setActiveMediaIndex(0)}
                  className="text-[11px] font-mono text-amber-400 hover:text-amber-200 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  ↺ Reset to main video
                </button>
              )}
            </div>
          </div>

          {/* Right: Visual Storytelling Gallery Frame Layout with Video Support */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            {/* Main Showcase Frame */}
            <div
              onClick={togglePlay}
              className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-amber-500/30 bg-zinc-950 aspect-[4/3] group/frame shadow-2xl cursor-pointer"
            >
              {currentMedia.videoUrl ? (
                <video
                  key={currentMedia.videoUrl}
                  ref={videoRef}
                  src={currentMedia.videoUrl}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onLoadedData={(e) => {
                    const vid = e.currentTarget;
                    vid.play().then(() => setIsPlaying(true)).catch(() => {});
                  }}
                  className="w-full h-full object-cover group-hover/frame:scale-105 transition-transform duration-700"
                />
              ) : (
                <img
                  src={currentMedia.imageUrl}
                  alt={currentMedia.title}
                  className="w-full h-full object-cover group-hover/frame:scale-105 transition-transform duration-700 opacity-90 group-hover/frame:opacity-100"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

              {/* Floating Top Controls (Status badge & Audio/Play controls) */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between z-20">
                <div className="flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-amber-500/40 text-[9px] sm:text-[10px] font-mono text-amber-200 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  <span>{currentMedia.videoUrl ? "CRAFT PROCESS VIDEO" : "SHOWCASE"}</span>
                </div>

                {currentMedia.videoUrl && (
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMute();
                      }}
                      className="p-1.5 sm:p-2 rounded-full bg-black/60 backdrop-blur-md border border-amber-500/40 text-amber-200 hover:text-white hover:border-amber-300 transition-colors shadow-lg cursor-pointer"
                      title={isMuted ? "Unmute audio" : "Mute audio"}
                    >
                      {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePlay();
                      }}
                      className="p-1.5 sm:p-2 rounded-full bg-black/60 backdrop-blur-md border border-amber-500/40 text-amber-200 hover:text-white hover:border-amber-300 transition-colors shadow-lg cursor-pointer"
                      title={isPlaying ? "Pause video" : "Play video"}
                    >
                      {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                    </button>
                  </div>
                )}
              </div>

              {/* Center Play indicator when paused */}
              {currentMedia.videoUrl && !isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                  <div className="w-12 h-12 rounded-full bg-amber-600/80 backdrop-blur-md flex items-center justify-center text-white shadow-xl shadow-amber-900/50">
                    <Play size={20} className="ml-0.5" />
                  </div>
                </div>
              )}

              {/* Frame overlay text */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-end justify-between z-20 pointer-events-none">
                <div className="space-y-0.5 sm:space-y-1 max-w-[75%]">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-widest font-mono text-amber-300/90 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-amber-500/30 inline-block">
                    {currentMedia.tag}
                  </span>
                  <p className="text-[11px] sm:text-xs md:text-sm font-serif italic text-white/95 truncate">
                    {currentMedia.title} · {currentMedia.caption}
                  </p>
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono text-amber-300/80">
                  {item.instagramHandle || "@risshhiiicreates"}
                </span>
              </div>
            </div>

            {/* Mini Gallery Strip: 3 Narrative Mood Vignettes with Video Previews */}
            {item.galleryImages && item.galleryImages.length > 0 && (
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {item.galleryImages.map((img, idx) => {
                  const mediaIndex = idx + 1;
                  const isActive = activeMediaIndex === mediaIndex;
                  return (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => setActiveMediaIndex(mediaIndex)}
                      className={`group/mini relative rounded-lg sm:rounded-xl overflow-hidden border aspect-[4/3] text-left transition-all duration-300 focus:outline-none cursor-pointer ${
                        isActive
                          ? "border-amber-400 ring-2 ring-amber-400/80 shadow-lg shadow-amber-500/25 scale-[1.02]"
                          : "border-amber-500/25 bg-zinc-900/60 hover:border-amber-400/60 opacity-80 hover:opacity-100"
                      }`}
                    >
                      {img.videoUrl ? (
                        <video
                          src={img.videoUrl}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover group-hover/mini:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <img
                          src={img.url}
                          alt={img.title || "Craft preview"}
                          className="w-full h-full object-cover group-hover/mini:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-between p-1.5 sm:p-2 pointer-events-none">
                        <div className="flex justify-between items-start">
                          {img.videoUrl && (
                            <span className="text-[7px] sm:text-[8px] font-mono px-1 py-0.5 rounded bg-black/70 backdrop-blur-xs border border-amber-500/40 text-amber-200">
                              VID
                            </span>
                          )}
                          {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                          )}
                        </div>
                        <span className="text-[8px] sm:text-[9px] font-mono text-amber-200 truncate">
                          {img.title}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShowcaseSection() {
  return (
    <section id="work" className="relative w-full min-h-screen bg-black text-white px-4 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/[0.02] rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-20 sm:space-y-32">
        {/* ========================================================================= */}
        {/* SECTION 1: WORK (RISHIDRAWS & RISHICREATS)                                */}
        {/* ========================================================================= */}
        <div>
          {/* Section Header */}
          <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-20">
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <div className="w-8 sm:w-12 h-px bg-white/20" />
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.35em] sm:tracking-[0.45em] text-white/40 font-mono">
                Art · Craft · Expression
              </span>
              <div className="w-8 sm:w-12 h-px bg-white/20" />
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none text-white">
              SELECTED WORK
            </h2>

            <p className="text-xs sm:text-sm text-white/50 max-w-lg mx-auto font-mono tracking-wider px-2">
              Two distinct creative expressions: Emotional Visual Art & Precision CNC Digital Woodcraft.
            </p>
          </div>

          {/* The 2 Work Areas */}
          <div className="space-y-12 sm:space-y-20 md:space-y-28">
            {mainWorkAreas.map((item) => {
              const isArt = item.type === "art";
              const isCraft = item.type === "craft";

              /* ----------------------------------------------------------- */
              /* 01 — RISHIDRAWS: ARTISTIC VISUAL STORYTELLING & GALLERY    */
              /* ----------------------------------------------------------- */
              if (isArt) {
                return <RishiDrawsCard key={item.id} item={item} />;
              }

              /* ----------------------------------------------------------- */
              /* 02 — RISHICREATS: DIGITAL FABRICATION & WOOD-RELIEF CRAFT  */
              /* ----------------------------------------------------------- */
              if (isCraft) {
                return <RishiCreatesCard key={item.id} item={item} />;
              }

              return null;
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 2: WHAT I DO (BUILD · DRAW · MAKE)                               */}
        {/* ========================================================================= */}
        <div className="border-t border-white/10 pt-16 sm:pt-24">
          <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <div className="w-8 sm:w-12 h-px bg-white/20" />
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.35em] sm:tracking-[0.45em] text-white/40 font-mono">
                Multidisciplinary
              </span>
              <div className="w-8 sm:w-12 h-px bg-white/20" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">
              WHAT I DO
            </h2>

            <p className="text-xs sm:text-sm text-white/50 max-w-md mx-auto font-mono px-2">
              Bridging computing, artistic expression, and physical digital fabrication.
            </p>
          </div>

          {/* 3 Large Pillars: BUILD · DRAW · MAKE */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {personalData.whatIDo.map((item, idx) => (
              <div
                key={item.num}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 hover:border-white/25 hover:bg-white/[0.04] transition-all duration-300 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-white/30 group-hover:text-white transition-colors">
                      {item.num}
                    </span>
                    {idx === 0 ? (
                      <Terminal size={18} className="text-blue-400/80" />
                    ) : idx === 1 ? (
                      <Palette size={18} className="text-purple-400/80" />
                    ) : (
                      <Hammer size={18} className="text-amber-400/80" />
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 sm:pt-4 border-t border-white/5">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-mono rounded bg-white/5 border border-white/10 text-white/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
