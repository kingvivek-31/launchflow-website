"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const problemLines = [
  "You built a real business.",
  "But your Google presence is invisible.",
  "Your competitors are eating your customers.",
];

export default function StoryHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineIndex, setLineIndex] = useState(0);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  useEffect(() => {
    const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
    const run = async () => {
      await delay(500);
      setLineIndex(1);
      await delay(850);
      setLineIndex(2);
      await delay(850);
      setLineIndex(3);
    };
    run();
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#080808]"
    >
      {/* Multi-layer ambient glow system */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-5%,rgba(193,251,158,0.10),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_80%,rgba(212,205,248,0.05),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_35%_at_80%_70%,rgba(193,251,158,0.04),transparent)] pointer-events-none" />

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff18 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Noise grain overlay */}
      <div className="absolute inset-0 opacity-[0.035] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')] pointer-events-none" />

      {/* Subtle top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c1fb9e]/30 to-transparent pointer-events-none" />

      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 text-center">



        {/* Cinematic problem lines */}
        <div className="space-y-4 mb-20 lg:mb-24">
          {problemLines.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.p
                className={`text-[22px] sm:text-[28px] md:text-[32px] font-light leading-[1.3] tracking-[-0.01em] ${
                  i === 2
                    ? "text-white/28 font-normal"
                    : "text-white/55"
                }`}
                initial={{ y: "115%" }}
                animate={lineIndex > i ? { y: "0%" } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {line}
              </motion.p>
            </div>
          ))}
        </div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 2.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[64px] sm:text-[80px] md:text-[96px] lg:text-[110px] xl:text-[120px] font-extrabold text-white tracking-[-0.04em] leading-[0.9] mb-12 lg:mb-14"
        >
          Rank Higher. Convert Faster.<br />
          <span
            className="italic font-bold text-[#c1fb9e]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Automate the Rest.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 3.5 }}
          className="text-[18px] sm:text-[20px] text-white/40 max-w-[580px] mx-auto mb-16 lg:mb-20 leading-[1.7] font-light tracking-[0.002em]"
        >
          LaunchFlow is a done-for-you digital infrastructure system for premium offline businesses — local SEO, Next.js speed, and AI automation in one stack.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.95 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#solution-stack"
            className="group inline-flex items-center justify-center gap-3 bg-[#c1fb9e] text-[#0a0a0a] text-[16px] font-bold px-10 py-5 rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_40px_rgba(193,251,158,0.2)] hover:shadow-[0_0_60px_rgba(193,251,158,0.35)] hover:-translate-y-1"
          >
            Upgrade Your Infrastructure
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
              <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href="#solution-stack"
            className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/20 text-white text-[16px] font-medium px-10 py-5 rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300"
          >
            View the Stack
          </a>
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 4.4 }}
          className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[13px] text-white/22 font-medium tracking-[0.04em] uppercase"
        >
          {["Private Clinics", "Premium Gyms", "Pilates Studios", "JEE Academies", "Dental Clinics", "Dermatology Clinics"].map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#c1fb9e]/40" />
              {item}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.8, duration: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-white/30 text-[11px] tracking-[0.25em] font-mono uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[#c1fb9e]/60 to-transparent origin-top"
        />
      </motion.div>
    </section>
  );
}
