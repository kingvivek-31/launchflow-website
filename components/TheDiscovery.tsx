"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function TheDiscovery() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-32 sm:py-48 bg-[#f5fcf2] overflow-hidden">
      {/* Green-tinted ambient blobs */}
      <motion.div
        animate={{ scale: [1, 1.07, 1], x: [0, 18, 0] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-[-12%] left-[-10%] w-[560px] h-[560px] bg-[#c1fb9e]/20 rounded-full blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.05, 1], x: [0, -22, 0] }}
        transition={{ duration: 19, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-[-10%] right-[-8%] w-[440px] h-[440px] bg-[#d4cdf8]/15 rounded-full blur-[110px] pointer-events-none"
      />

      {/* Subtle crosshatch */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:56px_56px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10" ref={ref}>

        {/* Chapter label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 text-[#3D4935]/45 text-[11px] font-mono tracking-[0.25em] uppercase mb-10 sm:mb-12"
        >
          <span className="w-10 h-px bg-gradient-to-r from-[#3D4935]/30 to-transparent" />
          The Solution
        </motion.div>

        {/* Heading */}
        <div className="overflow-hidden mb-8">
          <motion.h2
            className="text-[40px] sm:text-[54px] md:text-[64px] font-extrabold text-[#121212] tracking-[-0.04em] leading-[1.0]"
            initial={{ y: "105%" }}
            animate={inView ? { y: "0%" } : {}}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          >
            What if your gym showed up{" "}
            <br className="hidden md:block" />
            <em
              className="not-italic text-[#2c3725]"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
            >
              first
            </em>{" "}
            every time someone searched?
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-[18px] sm:text-[20px] text-[#4A5568] max-w-2xl leading-[1.75] mb-16 sm:mb-20 font-light"
        >
          That's not a dream — it's a system. A done-for-you Google presence built specifically for local fitness and wellness businesses. It's called{" "}
          <strong className="text-[#121212] font-bold">LaunchFlow</strong>.
        </motion.p>

        {/* Two-column cards */}
        <motion.div
          initial={{ opacity: 0, y: 44 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14 sm:mb-16"
        >
          {/* Left card — white */}
          <div className="bg-white rounded-[32px] p-10 sm:p-12 border border-black/[0.06] shadow-[0_2px_40px_rgba(0,0,0,0.04)] group hover:shadow-[0_4px_60px_rgba(0,0,0,0.08)] transition-all duration-400 hover:-translate-y-1">
            <div className="w-11 h-11 rounded-2xl bg-[#121212] flex items-center justify-center text-white mb-7 group-hover:scale-105 transition-transform duration-300">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2L2 7l10 5 10-5-10-5z" /></svg>
            </div>
            <h3 className="text-[22px] font-bold text-[#121212] mb-3 tracking-[-0.02em]">Built for local businesses</h3>
            <p className="text-[15px] text-[#4A5568] leading-[1.7] font-light">
              LaunchFlow was designed from the ground up for gyms, wellness centres, yoga studios, and boxing academies — because Google customer acquisition for local fitness is a completely different game than generic web design.
            </p>
          </div>

          {/* Right card — dark */}
          <div className="bg-[#121212] rounded-[32px] p-10 sm:p-12 text-white border border-white/5 shadow-[0_2px_40px_rgba(0,0,0,0.2)] group hover:shadow-[0_4px_60px_rgba(193,251,158,0.15)] transition-all duration-400 hover:-translate-y-1">
            <div className="w-11 h-11 rounded-2xl bg-[#c1fb9e] flex items-center justify-center text-[#121212] mb-7 group-hover:scale-105 transition-transform duration-300">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <h3 className="text-[22px] font-bold mb-3 tracking-[-0.02em]">When customers search "gym near me"</h3>
            <p className="text-[15px] text-white/60 leading-[1.7] font-light">
              They should find <em className="text-white/90 not-italic font-medium">you</em> — with full business info, glowing reviews, professional photos, and a website that instantly makes them want to book a trial.
            </p>
          </div>
        </motion.div>

        {/* Industry tagline strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-2.5 text-[11px] text-[#3D4935]/50 font-semibold tracking-[0.18em] uppercase"
        >
          {["Gyms", "Wellness Centers", "Coaching", "Boxing", "Yoga Studios", "Fitness Brands"].map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#c1fb9e]/60" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
