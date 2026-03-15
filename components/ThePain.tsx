"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pains = [
  {
    stat: "53%",
    label: "of visitors abandon sites that take 3+ seconds to load",
    body: "Your website takes 8 seconds to load. By the time it's ready, the customer is already calling your competitor.",
    accent: "#ff6b6b",
    chapter: "01 / Insight",
  },
  {
    stat: "76%",
    label: "of customers check your Google profile before visiting",
    body: "Incomplete hours. No recent photos. Zero reviews. That blank Google profile is silently costing you memberships every single day.",
    accent: "#ff9f43",
    chapter: "02 / Insight",
  },
  {
    stat: "60%",
    label: "of fitness inquiries happen outside business hours",
    body: "Someone has an itch to join a gym at 11 PM. They can't reach you. They call the next place. You never even knew they existed.",
    accent: "#ffd32a",
    chapter: "03 / Insight",
  },
];

function PainCard({ pain, index }: { pain: typeof pains[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 64 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
      className="relative flex flex-col gap-7 p-8 sm:p-10 rounded-[24px] border border-white/[0.05] bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.035] transition-colors duration-500 group"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-8 right-8 h-px" style={{ background: `linear-gradient(to right, transparent, ${pain.accent}60, transparent)` }} />

      {/* Chapter tag */}
      <span className="text-[11px] font-mono tracking-[0.22em] uppercase" style={{ color: pain.accent + "70" }}>
        {pain.chapter}
      </span>

      {/* Stat — huge display number */}
      <div
        className="text-[80px] sm:text-[96px] lg:text-[112px] font-extrabold leading-none tracking-[-0.04em] tabular-nums"
        style={{
          color: pain.accent,
          textShadow: `0 0 80px ${pain.accent}30`,
        }}
      >
        {pain.stat}
      </div>

      {/* Label */}
      <p className="text-[15px] font-medium leading-snug text-white/40 max-w-[240px]">{pain.label}</p>

      {/* Divider */}
      <div className="h-px w-12" style={{ background: pain.accent + "30" }} />

      {/* Body */}
      <p className="text-[16px] sm:text-[17px] text-white/60 leading-[1.75] font-light">
        {pain.body}
      </p>
    </motion.div>
  );
}

export default function ThePain() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });

  return (
    <section id="the-pain" className="relative py-32 sm:py-48 bg-[#080808] overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

      {/* Red-tinted ambient glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(255,107,107,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">

        {/* Section heading */}
        <div ref={headingRef} className="mb-20 sm:mb-28 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 text-[#ff6b6b]/45 text-[11px] font-mono tracking-[0.25em] uppercase mb-8"
          >
            <span className="w-10 h-px bg-gradient-to-r from-[#ff6b6b]/30 to-transparent" />
            The Cost
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              className="text-[42px] sm:text-[54px] md:text-[64px] font-extrabold text-white tracking-[-0.035em] leading-[1.0]"
              initial={{ y: "105%" }}
              animate={headingInView ? { y: "0%" } : {}}
              transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            >
              Your business is losing money<br />
              <span className="text-white/22 font-light">every hour it stays invisible.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={headingInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-[17px] sm:text-[18px] text-white/38 mt-7 max-w-xl leading-[1.75] font-light"
          >
            Most fitness businesses have no idea this is happening. The customers are searching. They just can't find you.
          </motion.p>
        </div>

        {/* Pain cards — 3 col */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {pains.map((pain, i) => (
            <PainCard key={i} pain={pain} index={i} />
          ))}
        </div>

        {/* Quote divider */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 sm:mt-28 border border-white/[0.07] rounded-[28px] p-10 sm:p-16 text-center bg-gradient-to-b from-white/[0.025] to-transparent"
        >
          <p className="text-[20px] sm:text-[24px] md:text-[26px] text-white/45 font-light leading-[1.6] italic tracking-[-0.01em] max-w-3xl mx-auto">
            "Current solutions — a basic website or a half-filled Google listing — weren't built to{" "}
            <span className="text-white not-italic font-semibold">convert strangers into customers.</span>{" "}
            They were built to check a box."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
