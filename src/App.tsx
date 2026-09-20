import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import favicon from "/favicon.ico";

import heroImg from "@/assets/rishi.jpg";

import WelcomeScreen from "@/components/WelcomeScreen";
import FrontendDeveloperSection from "@/components/FrontendDeveloperSection";
import Showcase from "./components/Showcase";
import ContactSection from "@/components/ContactSection";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";

import { personalData } from "./data/portfolioData";

const logos = personalData.logos;

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [time, setTime] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  const text = personalData.displayName;
  const [displayed, setDisplayed] = useState("");
  const [colorMode, setColorMode] = useState(0);

  const colors = [
    "bg-gradient-to-b from-white via-gray-200 via-gray-500 to-black text-transparent bg-clip-text",
    "text-white",
    "bg-gradient-to-b from-black via-gray-500 via-gray-200 to-white text-transparent bg-clip-text",
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showWelcome || mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showWelcome, mobileMenu]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    function type() {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i < text.length) setTimeout(type, 200);
    }
    type();
  }, [text]);

  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
          <AnimatePresence>{showWelcome && <WelcomeScreen />}</AnimatePresence>

          <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-12 py-3.5 sm:py-5 backdrop-blur-xl bg-black/40 border-b border-white/10">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <img
                src={favicon}
                alt="Logo"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
              />

              <span className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-white/80 uppercase font-medium truncate max-w-[210px] sm:max-w-none">
                {personalData.name} · PORTFOLIO
              </span>
            </div>
            <ul className="hidden md:flex items-center gap-10 text-xs tracking-widest text-white/70 uppercase">
              <li
                onClick={() =>
                  document.getElementById("Home")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="relative hover:text-white transition-colors cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </li>

              <li
                onClick={() =>
                  document.getElementById("about")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="relative hover:text-white transition-colors cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                About
              </li>

              <li
                onClick={() =>
                  document.getElementById("work")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="relative hover:text-white transition-colors cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Work
              </li>

              <li
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="relative hover:text-white transition-colors cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Contact
              </li>
            </ul>

            <div className="hidden md:block text-[10px] tracking-[0.3em] text-white/70 uppercase">
              {time}
            </div>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden text-white z-50 p-1"
              aria-label="Toggle Menu"
            >
              {mobileMenu ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>


          {mobileMenu && (
            <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10 text-white uppercase tracking-[0.3em] text-sm md:hidden">

              <div className="absolute top-28 text-center">
                <p className="text-[10px] text-white/40 tracking-[0.3em] mb-2">
                  TIME
                </p>

                <h2 className="text-2xl tracking-widest font-semibold">
                  {time}
                </h2>
              </div>

              <button
                onClick={() => {
                  document.getElementById("Home")?.scrollIntoView({
                    behavior: "smooth",
                  });
                  setMobileMenu(false);
                }}
                className="relative after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
              >
                Home
              </button>

              <button
                onClick={() => {
                  document.getElementById("about")?.scrollIntoView({
                    behavior: "smooth",
                  });
                  setMobileMenu(false);
                }}
                className="relative after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
              >
                About
              </button>

              <button
                onClick={() => {
                  document.getElementById("work")?.scrollIntoView({
                    behavior: "smooth",
                  });
                  setMobileMenu(false);
                }}
                className="relative after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
              >
                Work
              </button>

              <button
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                  setMobileMenu(false);
                }}
                className="relative after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
              >
                Contact
              </button>
            </div>
          )}

          <section
            id="Home"
            className="relative w-full min-h-0 md:min-h-screen md:h-screen overflow-hidden bg-black flex flex-col justify-between"
          >
            {/* Background image presentation */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative h-full md:h-[85%] w-full sm:w-[85%] max-w-xl flex items-center justify-center overflow-hidden rounded-none md:rounded-3xl">
                <img
                  src={heroImg}
                  alt="Rishi Gudigar"
                  className="h-full w-full object-cover object-top opacity-50 md:opacity-75 filter contrast-105 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 md:to-black/70" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-transparent to-black/95 md:from-black/80 md:to-black/80" />
              </div>
            </div>

            <div className="relative z-10 w-full flex-1 flex flex-col justify-between px-5 sm:px-8 md:px-12 pt-20 sm:pt-24 pb-8 md:pb-10">
              {/* Giant Name Display - Desktop */}
              <div className="hidden md:block">
                <h1
                  onClick={() => setColorMode((prev) => (prev + 1) % colors.length)}
                  className={`font-display uppercase leading-[0.85] tracking-[-0.03em] text-[14vw] lg:text-[13rem] cursor-pointer transition-all duration-300 select-none ${colors[colorMode]}`}
                >
                  {displayed || "\u00A0"}
                </h1>
              </div>

              {/* Tagline & Identity Statement */}
              <div className="md:absolute md:top-28 md:right-12 mt-2 md:mt-0 text-left md:text-right max-w-md">
                {/* 3 Minimal Badges: CODE · ART · CRAFT */}
                <div className="flex md:justify-end items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-widest bg-white/10 text-white/80 border border-white/15 uppercase">CODE</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-widest bg-purple-500/15 text-purple-300 border border-purple-500/30 uppercase">ART</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-widest bg-amber-500/15 text-amber-300 border border-amber-500/30 uppercase">CRAFT</span>
                </div>

                <p className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl leading-[1.08] font-black tracking-tight text-white">
                  I BUILD.<br />
                  I DRAW.<br />
                  <span className="text-white/50">I CREATE.</span>
                </p>
                <p className="text-[11px] sm:text-xs font-mono tracking-wider text-white/50 uppercase mt-2 md:mt-3">
                  "{personalData.tagline}"
                </p>
              </div>

              {/* Description and CTA Buttons */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mt-6 md:mt-auto pt-2 md:pt-6">
                <p className="relative text-xs sm:text-sm md:text-base leading-relaxed max-w-lg font-[Poppins] font-normal text-white/75">
                  {personalData.heroDescription}
                </p>

                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                  <a
                    href={personalData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial text-center justify-center inline-flex items-center gap-2 bg-white/10 text-white px-5 py-2.5 text-xs font-mono tracking-wider uppercase font-bold hover:bg-white hover:text-black border border-white/20 transition-all duration-300 rounded-full"
                  >
                    GITHUB →
                  </a>
                  <a
                    href={personalData.instagramPersonal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial text-center justify-center inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 text-xs font-mono tracking-wider uppercase font-bold hover:bg-white/80 transition-all duration-300 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.12)]"
                  >
                    INSTAGRAM →
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-black border-t border-white/10 py-5 overflow-hidden">
            <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
              {[...logos, ...logos, ...logos].map((logo, i) => (
                <span
                  key={i}
                  className="text-white/40 text-xs tracking-[0.3em] uppercase font-medium"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>


          <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
      `}</style>

          <section id="about">
            <FrontendDeveloperSection />
          </section>
          <section id="work">
            <Showcase />
          </section>
          <section id="contact">
            <ContactSection />
          </section>
        </div>
      } 
    />

      <Route path="/about" element={<About />} />
    </Routes>

  );
}