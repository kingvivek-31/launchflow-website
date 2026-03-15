"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    phase: "Week 1",
    title: "Google Maps Domination",
    desc: "We audit, claim, and fully optimise your Google Business Profile — categories, photos, hours, services, attributes, Q&A. Everything a customer needs to choose you is instantly visible.",
    outcome: "Your business appears in 'near me' searches and the Google Map Pack.",
    color: "#fadc64",
  },
  {
    number: "02",
    phase: "Week 1–2",
    title: "Reviews & Trust System",
    desc: "We build your review strategy and put it on autopilot. Positive reviews are showcased front and centre. Your profile becomes the one with credibility in a sea of blank listings.",
    outcome: "Instant trust — before a customer even visits your website.",
    color: "#d4cdf8",
  },
  {
    number: "03",
    phase: "Week 2–3",
    title: "Conversion Website",
    desc: "A fast, mobile-first website built to turn visitors into leads. With clear pricing, gallery, WhatsApp button, and a single focused call-to-action — so nothing gets in the way of the sale.",
    outcome: "Visitors contact you directly. No confusion. No dropped leads.",
    color: "#c1fb9e",
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: index * 0.14 }}
      className="relative flex flex-col group"
    >
      {/* Step number */}
      <div className="flex items-end gap-4 mb-8">
        <span
          className="text-[64px] sm:text-[80px] font-black leading-none tabular-nums tracking-[-0.04em]"
          style={{ color: step.color, filter: `drop-shadow(0 0 40px ${step.color}30)` }}
        >
          {step.number}
        </span>
        <div className="pb-2 flex flex-col gap-1">
          <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/28">{step.phase}</span>
          <div className="w-14 h-[1.5px]" style={{ background: `linear-gradient(to right, ${step.color}50, transparent)` }} />
        </div>
      </div>

      {/* Card body */}
      <div
        className="flex-1 rounded-[32px] p-9 sm:p-12 border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-transparent group-hover:border-white/[0.12] group-hover:from-white/[0.06] transition-all duration-400 hover:-translate-y-1"
        style={{ boxShadow: `inset 0 1px 0 ${step.color}15` }}
      >
        {/* Top color bar */}
        <div className="w-10 h-[2.5px] rounded-full mb-8" style={{ background: step.color }} />

        <h3 className="text-[22px] sm:text-[24px] font-bold text-white tracking-[-0.025em] mb-4">{step.title}</h3>
        <p className="text-[15px] sm:text-[16px] text-white/50 leading-[1.75] font-light mb-7">{step.desc}</p>

        {/* Outcome pill */}
        <div className="flex items-start gap-3 mt-auto">
          <div className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ background: step.color }} />
          <span className="text-[14px] font-medium leading-snug" style={{ color: step.color + "bb" }}>
            {step.outcome}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function TheProcess() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });

  return (
    <section id="how-it-works" className="relative py-32 sm:py-48 bg-[#0a0a0a] overflow-hidden">
      {/* Subtle vertical center glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/[0.04] to-transparent pointer-events-none" />

      {/* Green glow from bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[radial-gradient(ellipse,rgba(193,251,158,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">

        {/* Chapter heading */}
        <div ref={headingRef} className="mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0 }}
            animate={headingInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 text-[#c1fb9e]/40 text-[11px] font-mono tracking-[0.25em] uppercase mb-8"
          >
            <span className="w-10 h-px bg-gradient-to-r from-[#c1fb9e]/30 to-transparent" />
            Our Approach
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              className="text-[42px] sm:text-[56px] md:text-[68px] font-extrabold text-white tracking-[-0.04em] leading-[1.0]"
              initial={{ y: "105%" }}
              animate={headingInView ? { y: "0%" } : {}}
              transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            >
              Three moves.<br />
              <span className="text-white/20 font-light">One system. No guesswork.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={headingInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-[17px] sm:text-[18px] text-white/38 mt-7 max-w-lg leading-[1.75] font-light"
          >
            The LaunchFlow system runs in 3 phases. Each one builds on the last to create an acquisition engine that works 24/7.
          </motion.p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>

        {/* Integration callout */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-20 rounded-[24px] border border-[#c1fb9e]/15 bg-gradient-to-br from-[#c1fb9e]/[0.06] to-transparent p-10 sm:p-14 text-center"
          style={{ boxShadow: "0 0 80px rgba(193,251,158,0.04)" }}
        >
          <h3 className="text-[26px] sm:text-[30px] font-extrabold text-white tracking-[-0.03em] mb-4">
            Everything works together.
          </h3>
          <p className="text-[16px] sm:text-[17px] text-white/40 max-w-xl mx-auto leading-[1.75] font-light">
            Google Maps brings them in. Your profile convinces them. Your website closes them. One seamless customer acquisition machine — we build and manage the whole thing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
