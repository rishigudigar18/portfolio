import { personalData, mainWorkAreas } from "@/data/portfolioData";
import { ArrowUpRight, Github, Instagram, Palette, Hammer, Terminal, Sparkles, Compass } from "lucide-react";

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

                          {/* Instagram Handle Direct Link */}
                          <div className="pt-1 sm:pt-2 flex items-center gap-2 sm:gap-3">
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
                        </div>

                        {/* Right: Visual Storytelling Gallery Frame Layout */}
                        <div className="lg:col-span-6 space-y-3 sm:space-y-4">
                          {/* Main Showcase Art Frame */}
                          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-purple-500/30 bg-zinc-950 aspect-[4/3] group/frame shadow-2xl">
                            <img
                              src={item.imageUrl}
                              alt="RishiDraws Artwork"
                              className="w-full h-full object-cover group-hover/frame:scale-105 transition-transform duration-700 opacity-90 group-hover/frame:opacity-100"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                            {/* Frame overlay text */}
                            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-end justify-between">
                              <div className="space-y-0.5 sm:space-y-1">
                                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest font-mono text-purple-300/80 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-purple-500/30">
                                  VISUAL STORYTELLING
                                </span>
                                <p className="text-[11px] sm:text-xs md:text-sm font-serif italic text-white/90">
                                  Feelings & Sketches · Ongoing Collection
                                </p>
                              </div>
                              <span className="text-[10px] sm:text-[11px] font-mono text-purple-300/70">{item.instagramHandle || "@risshhiiidrawss"}</span>
                            </div>
                          </div>

                          {/* Mini Gallery Strip: 3 Narrative Mood Vignettes */}
                          <div className="grid grid-cols-3 gap-2 sm:gap-3">
                            <div className="relative rounded-lg sm:rounded-xl overflow-hidden border border-purple-500/20 bg-zinc-900/60 aspect-[4/3] group/mini">
                              <img
                                src="https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&auto=format&fit=crop&q=80"
                                alt="Emotional sketches"
                                className="w-full h-full object-cover group-hover/mini:scale-110 transition-transform duration-500 opacity-70 group-hover/mini:opacity-100"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-1.5 sm:p-2">
                                <span className="text-[8px] sm:text-[9px] font-mono text-purple-200 truncate">Solitude & Lines</span>
                              </div>
                            </div>

                            <div className="relative rounded-lg sm:rounded-xl overflow-hidden border border-purple-500/20 bg-zinc-900/60 aspect-[4/3] group/mini">
                              <img
                                src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=500&auto=format&fit=crop&q=80"
                                alt="Anime-inspired artwork"
                                className="w-full h-full object-cover group-hover/mini:scale-110 transition-transform duration-500 opacity-70 group-hover/mini:opacity-100"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-1.5 sm:p-2">
                                <span className="text-[8px] sm:text-[9px] font-mono text-purple-200 truncate">Anime Moods</span>
                              </div>
                            </div>

                            <div className="relative rounded-lg sm:rounded-xl overflow-hidden border border-purple-500/20 bg-zinc-900/60 aspect-[4/3] group/mini">
                              <img
                                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=80"
                                alt="Memories in Ink"
                                className="w-full h-full object-cover group-hover/mini:scale-110 transition-transform duration-500 opacity-70 group-hover/mini:opacity-100"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-1.5 sm:p-2">
                                <span className="text-[8px] sm:text-[9px] font-mono text-purple-200 truncate">Visual Stories</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              /* ----------------------------------------------------------- */
              /* 02 — RISHICREATS: DIGITAL FABRICATION & WOOD-RELIEF CRAFT  */
              /* ----------------------------------------------------------- */
              return (
                <div
                  key={item.id}
                  className="group relative rounded-2xl sm:rounded-3xl border border-amber-500/25 bg-gradient-to-br from-amber-950/15 via-zinc-950 to-black hover:border-amber-400/50 shadow-[0_10px_40px_rgba(245,158,11,0.06)] transition-all duration-500 overflow-hidden p-5 sm:p-8 md:p-12"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left Details Column */}
                    <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                      {/* Top Meta: Big Number & Type Tag */}
                      <div className="flex items-center gap-4">
                        <span className="text-4xl sm:text-6xl font-black font-mono tracking-tighter text-amber-400/75">
                          {item.num}
                        </span>

                        <span className="h-6 w-px bg-white/20" />

                        <div className="space-y-0.5">
                          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-mono text-white/40 block">
                            {item.categoryTag}
                          </span>
                          <span className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-amber-300">
                            {item.subtitle}
                          </span>
                        </div>
                      </div>

                      {/* Main Title */}
                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight lowercase">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm md:text-base text-white/75 leading-relaxed font-sans">
                        {item.description}
                      </p>

                      {/* Tech / Medium Tags */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
                        {item.techOrMedia.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-mono rounded-lg border bg-amber-500/10 border-amber-500/20 text-amber-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 pt-2 sm:pt-4">
                        {item.instagramUrl && (
                          <a
                            href={item.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 sm:flex-initial text-center justify-center inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all duration-200"
                          >
                            <Instagram size={14} />
                            {item.buttonText || "VIEW RISSHHIIICREATES →"}
                          </a>
                        )}
                        <a
                          href={item.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-initial text-center justify-center inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white hover:text-black border border-white/20 transition-all duration-200"
                        >
                          <Hammer size={14} />
                          VIEW WORK
                        </a>
                      </div>
                    </div>

                    {/* Right Visual Presentation Column */}
                    <div className="lg:col-span-5">
                      <div className="relative w-full h-56 sm:h-72 md:h-80 rounded-xl sm:rounded-2xl overflow-hidden border border-amber-500/30 group-hover:border-amber-400/50 transition-all duration-500">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                        {/* Floating Badge */}
                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                          <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-mono uppercase tracking-widest backdrop-blur-md border bg-amber-500/20 border-amber-400/30 text-amber-200">
                            {item.subtitle}
                          </span>
                        </div>

                        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between text-[11px] sm:text-xs font-mono text-white/50">
                          <span>{item.categoryTag}</span>
                          <span>#{item.num}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
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
