"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function TheCallToAction() {
  const ghostRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

  useEffect(() => {
    const bgText = ghostRef.current;
    if (!bgText) return;
    const onScroll = () => {
      const offset = window.scrollY * 0.035;
      bgText.style.transform = `translateX(${-offset}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative py-36 sm:py-52 bg-[#070707] text-white overflow-hidden">
      {/* Ghost parallax text */}
      <div
        ref={ghostRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        aria-hidden
      >
        <span
          className="whitespace-nowrap font-black text-white select-none"
          style={{
            fontSize: "clamp(90px, 18vw, 220px)",
            opacity: 0.022,
            fontWeight: 900,
            letterSpacing: "-0.05em",
          }}
        >
          LAUNCHFLOW
        </span>
      </div>

      {/* Multi-layer green glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_50%_55%,rgba(193,251,158,0.055),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_50%_50%,rgba(193,251,158,0.04),transparent)] pointer-events-none" />

      {/* Top separator line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff12 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center relative z-10" ref={headingRef}>

        {/* Chapter label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={headingInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 text-[#c1fb9e]/35 text-[11px] font-mono tracking-[0.25em] uppercase mb-12"
        >
          <span className="w-10 h-px bg-gradient-to-r from-transparent to-[#c1fb9e]/25" />
          Next Steps
          <span className="w-10 h-px bg-gradient-to-l from-transparent to-[#c1fb9e]/25" />
        </motion.div>

        {/* Pulsing logo icon */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={headingInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, type: "spring", stiffness: 180, damping: 16 }}
          className="relative w-16 h-16 mx-auto mb-12"
        >
          <motion.span
            className="absolute inset-0 rounded-[18px] bg-[#c1fb9e]/10"
            animate={{ scale: 2.2, opacity: 0 }}
            transition={{ duration: 2.0, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
          />
          <motion.span
            className="absolute inset-0 rounded-[18px] bg-[#c1fb9e]/6"
            animate={{ scale: 1.7, opacity: 0 }}
            transition={{ duration: 2.0, repeat: Infinity, ease: "easeOut", delay: 0.8 }}
          />
          <div className="w-full h-full rounded-[18px] bg-[#c1fb9e] text-[#121212] flex items-center justify-center relative z-10"
            style={{ boxShadow: "0 0 60px rgba(193,251,158,0.25)" }}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 2L2 7l10 5 10-5-10-5z" /></svg>
          </div>
        </motion.div>

        {/* Heading */}
        <div className="overflow-hidden mb-8">
          <motion.h2
            className="text-[44px] sm:text-[58px] md:text-[72px] font-extrabold tracking-[-0.04em] leading-[1.0]"
            initial={{ y: "105%" }}
            animate={headingInView ? { y: "0%" } : {}}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          >
            Your next customer<br />
            <span className="text-white/22 font-light">is already searching.</span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={headingInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-[17px] sm:text-[18px] text-white/40 mb-12 max-w-[480px] mx-auto leading-[1.75] font-light"
        >
          Book a free, no-pressure Google audit. We'll show you exactly how your business appears on Google compared to your top local competitors.
        </motion.p>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={headingInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-12 text-[13px] text-white/28"
        >
          {["No long-term commitment", "Delivered in under a week", "Built for local fitness"].map((t, i) => (
            <span key={i} className="flex items-center gap-2 font-medium">
              <span className="text-[#c1fb9e]/70">✓</span> {t}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-3.5 justify-center items-center"
        >
          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="https://wa.me/918595669560"
            className="inline-flex items-center justify-center gap-2.5 bg-[#c1fb9e] text-[#0a0a0a] px-10 py-5 rounded-full font-bold text-[16px] hover:bg-white transition-all duration-300 shadow-[0_0_50px_rgba(193,251,158,0.20)] hover:shadow-[0_0_70px_rgba(193,251,158,0.30)]"
          >
            Book Free Google Audit
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="mailto:hello@launchflow.co.in"
            className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/20 text-white px-10 py-5 rounded-full font-medium text-[16px] hover:bg-white/10 hover:border-white/40 transition-all duration-300"
          >
            Quick Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
