import { motion } from "framer-motion";
import { Terminal, Palette, Hammer, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import { personalData } from "@/data/portfolioData";

export default function WelcomeScreen() {
  const creativePillars = [
    { label: "CODE", Icon: Terminal, desc: "Software" },
    { label: "ART", Icon: Palette, desc: "RishiDraws" },
    { label: "CRAFT", Icon: Hammer, desc: "RishiCreates" },
  ];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.03,
        filter: "blur(8px)",
        transition: {
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black overflow-hidden p-6 select-none"
    >
      {/* Background Subtle Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] blur-[150px] rounded-full" />
        <div className="absolute top-[-100px] right-[-100px] w-[350px] h-[350px] bg-purple-500/[0.04] blur-[120px] rounded-full" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[350px] h-[350px] bg-amber-500/[0.03] blur-[120px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative text-center text-white flex flex-col items-center gap-6 w-full max-w-xl"
      >
        {/* Three Minimal Labels / Icons (CODE · ART · CRAFT) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap"
        >
          {creativePillars.map((item, i) => {
            const Icon = item.Icon;
            return (
              <motion.div
                key={item.label}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                    scale: 0.8,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  },
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.03)]"
              >
                <Icon size={12} className="text-white/60" />
                <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-white/80 uppercase">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Giant Heading: I BUILD. I DRAW. I CREATE. */}
        <div className="flex flex-col items-center justify-center space-y-0.5 sm:space-y-1">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[clamp(32px,7.5vw,68px)] font-black tracking-tight leading-[0.95] text-white"
          >
            I BUILD.
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.55,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[clamp(32px,7.5vw,68px)] font-black tracking-tight leading-[0.95] text-white"
          >
            I DRAW.
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.7,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[clamp(32px,7.5vw,68px)] font-black tracking-tight leading-[0.95] bg-gradient-to-b from-white via-white/80 to-white/40 bg-clip-text text-transparent"
          >
            I CREATE.
          </motion.h1>
        </div>

        {/* Subtitle Lines */}
        <div className="space-y-2 max-w-md">
          {/* Engineering student · Artist · Maker */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.9,
              duration: 0.8,
            }}
            className="text-xs sm:text-sm font-mono tracking-[0.2em] text-white/70 uppercase"
          >
            Engineering student · Artist · Maker
          </motion.p>

          {/* Somewhere between code, emotions and sawdust. */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.1,
              duration: 0.8,
            }}
            className="text-xs sm:text-sm font-serif italic text-white/50 tracking-wide"
          >
            “Somewhere between code, emotions and sawdust.”
          </motion.p>
        </div>

        {/* Two Clean Buttons: GITHUB → and INSTAGRAM → */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.3,
            duration: 0.8,
          }}
          className="flex items-center justify-center gap-3 pt-2"
        >
          {/* GITHUB → */}
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider bg-white/10 hover:bg-white hover:text-black border border-white/20 transition-all duration-300"
          >
            GITHUB →
          </a>

          {/* INSTAGRAM → */}
          <a
            href={personalData.instagramPersonal}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider bg-white text-black hover:bg-white/85 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          >
            INSTAGRAM →
          </a>
        </motion.div>

        {/* Bottom Loading / Entrance Line */}
        <div className="mt-8 w-[180px] bg-white/15 h-[1.5px] overflow-hidden rounded-full">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 4.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-full bg-white/80"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}