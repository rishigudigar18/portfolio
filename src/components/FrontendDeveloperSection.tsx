import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const BandCard = lazy(() => import("./BandCard"));

import { personalData } from "@/data/portfolioData";

export default function FrontendDeveloperSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.4 });

  const [showCard, setShowCard] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      ref={ref}
      id="hero-intro"
      initial={{
        x: 0,
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
      }}
      className="relative w-full min-h-screen bg-black text-white overflow-hidden flex flex-col justify-center px-6 md:px-20 py-20 select-none"
    >
      {/* TEXT CONTENT */}
      <div className="relative z-10 max-w-3xl">
        {/* Availability & Subtle Micro-Text */}
        <motion.div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-6">
          <div className="flex items-center">
            <motion.span
              animate={{
                width: ["0ch", "32ch", "32ch", "0ch"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.3, 0.8, 1],
              }}
              className="inline-block overflow-hidden whitespace-nowrap text-[11px] tracking-[0.3em] uppercase text-white/70 font-mono"
            >
              ✦ Available for projects
            </motion.span>

            <motion.span
              animate={{
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
              }}
              className="text-white/60 font-mono ml-[2px]"
            >
              |
            </motion.span>
          </div>

          <span className="hidden sm:inline text-white/30 font-mono text-xs">·</span>

          <span className="text-[11px] tracking-wider text-white/40 font-mono italic">
            "{personalData.microText}"
          </span>
        </motion.div>

        {/* Large Bold Typography */}
        <div className="space-y-1 sm:space-y-2 mb-6">
          <motion.h1
            initial={{ opacity: 0, scale: 0.88, y: 40 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.88, y: 40 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-extrabold leading-[0.92] tracking-tight text-white text-[clamp(44px,8vw,110px)]"
          >
            {personalData.heroHeading.line1}
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, x: -60, rotate: -2 }}
            animate={inView ? { opacity: 1, x: 0, rotate: 0 } : { opacity: 0, x: -60, rotate: -2 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-extrabold leading-[0.92] tracking-tight text-white text-[clamp(44px,8vw,110px)]"
          >
            {personalData.heroHeading.line2}
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-extrabold leading-[0.92] tracking-tight text-white/55 text-[clamp(44px,8vw,110px)]"
          >
            {personalData.heroHeading.line3}
          </motion.h1>
        </div>

        {/* Subtle tagline line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xs sm:text-sm font-mono tracking-[0.2em] text-white/50 uppercase mb-4"
        >
          {personalData.tagline}
        </motion.p>

        {/* Hero description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-[Poppins] text-white/80"
        >
          {personalData.heroDescription}
        </motion.p>

        {/* Skill Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-6 flex flex-wrap gap-2.5 sm:gap-3"
        >
          {personalData.heroSkills.map((tech) => (
            <div
              key={tech}
              className="
                relative group px-4 py-2 rounded-xl
                text-xs sm:text-sm font-medium text-white/85
                bg-white/5 backdrop-blur-xl
                border border-white/10
                overflow-hidden
                transition-all duration-300 hover:border-white/30 hover:text-white
              "
            >
              <span className="relative z-10">{tech}</span>
            </div>
          ))}
        </motion.div>

        {/* Hero Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          {/* VIEW MY WORK Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            onClick={() => scrollToSection("work")}
            className="inline-flex items-center gap-2 border border-white/80 bg-white text-black px-7 py-3 text-xs tracking-[0.2em] uppercase font-bold hover:bg-transparent hover:text-white hover:border-white transition-all duration-300 rounded-full shadow-lg shadow-white/10"
          >
            VIEW MY WORK →
          </motion.button>

          {/* ABOUT ME Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            onClick={() => scrollToSection("about")}
            className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-3 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-white/10 hover:border-white/40 rounded-full transition-all duration-300"
          >
            ABOUT ME
          </motion.button>

          {/* Interactive 3D ID Card toggle */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            onClick={() => setShowCard((s) => !s)}
            className="inline-flex items-center gap-1.5 text-white/40 hover:text-white text-xs font-mono tracking-wider transition-colors px-3 py-2"
          >
            {showCard ? "✕ Close 3D Card" : "✦ 3D Card"}
          </motion.button>
        </div>
      </div>

      {/* 3D ID CARD */}
      <AnimatePresence>
        {showCard && mounted && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 z-[5] pointer-events-none"
          >
            <Suspense fallback={null}>
              <BandCard />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}