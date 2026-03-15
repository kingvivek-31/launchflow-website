"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const comparisons = [
  { before: "Lost in page 3", after: "Top of Google Maps", icon: "📍" },
  { before: "Zero calls after hours", after: "Leads arrive while you sleep", icon: "📞" },
  { before: "Website takes 10 seconds", after: "Loads in under 2 seconds", icon: "⚡" },
  { before: "\"Where's your website?\"", after: "\"I found you on Google Maps\"", icon: "🗺" },
  { before: "Tourists visit, nobody converts", after: "Visitors tap 'WhatsApp Us' instantly", icon: "💬" },
  { before: "3 Google reviews, all old", after: "Fresh reviews every week", icon: "⭐" },
];

function CompRow({ item, index }: { item: typeof comparisons[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
      className="grid grid-cols-[2.5rem_1fr_2rem_1fr] gap-4 items-center bg-white border border-black/[0.06] rounded-[20px] px-8 py-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-black/10 transition-all duration-300 group hover:-translate-y-0.5"
    >
      <span className="text-xl leading-none">{item.icon}</span>

      {/* Before */}
      <div className="flex items-center gap-2.5">
        <div className="w-2 h-2 rounded-full bg-red-200 border border-red-300 shrink-0" />
        <span className="text-[#9ca3af] text-[14px] sm:text-[15px] line-through decoration-red-300/60">{item.before}</span>
      </div>

      {/* Arrow */}
      <div className="flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#c1fb9e] group-hover:translate-x-0.5 transition-transform duration-200">
          <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
        </svg>
      </div>

      {/* After */}
      <div className="flex items-center gap-2.5">
        <div className="w-2 h-2 rounded-full bg-[#c1fb9e] border border-[#a8e68e] shrink-0" />
        <span className="text-[#121212] font-semibold text-[14px] sm:text-[15px] tracking-[-0.01em]">{item.after}</span>
      </div>
    </motion.div>
  );
}

export default function TheTransformation() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });

  return (
    <section className="relative py-32 sm:py-48 bg-[#f7f7f7] overflow-hidden">
      {/* Subtle crosshatch */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:52px_52px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">

        {/* Chapter heading */}
        <div ref={headingRef} className="mb-14 sm:mb-20 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={headingInView ? { opacity: 1 } : {}}
            className="inline-flex items-center gap-3 text-[#3D4935]/40 text-[11px] font-mono tracking-[0.25em] uppercase mb-8"
          >
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-[#3D4935]/20" />
            The Impact
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-[#3D4935]/20" />
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              className="text-[42px] sm:text-[56px] md:text-[68px] font-extrabold text-[#121212] tracking-[-0.04em] leading-[1.02]"
              initial={{ y: "105%" }}
              animate={headingInView ? { y: "0%" } : {}}
              transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            >
              Before LaunchFlow.<br />
              <span className="text-[#c1fb9e]">After LaunchFlow.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={headingInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-[17px] sm:text-[18px] text-[#6b7280] mt-6 max-w-md mx-auto leading-[1.7] font-light"
          >
            This is what changes when your Google presence actually works for you.
          </motion.p>
        </div>

        {/* Column headers */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-[2.5rem_1fr_2rem_1fr] gap-4 items-center mb-3 px-6"
        >
          <div />
          <div className="text-[11px] font-bold text-red-400/70 uppercase tracking-[0.15em]">Before</div>
          <div />
          <div className="text-[11px] font-bold text-[#3D4935]/70 uppercase tracking-[0.15em]">After</div>
        </motion.div>

        {/* Rows */}
        <div className="flex flex-col gap-2.5">
          {comparisons.map((item, i) => (
            <CompRow key={i} item={item} index={i} />
          ))}
        </div>

        {/* Closing statement — dark card */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 sm:mt-16 bg-[#0f0f0f] rounded-[24px] p-10 sm:p-14 text-center border border-white/[0.06]"
          style={{ boxShadow: "0 20px 80px rgba(0,0,0,0.3)" }}
        >
          <p className="text-[28px] sm:text-[34px] font-extrabold text-white mb-3 leading-[1.1] tracking-[-0.03em]">
            The difference isn't just visibility.<br />
            <span className="text-[#c1fb9e]">It's revenue.</span>
          </p>
          <p className="text-[16px] text-white/36 max-w-sm mx-auto leading-[1.7] font-light mt-5">
            Every missed call, every unanswered search, every lost customer adds up. LaunchFlow closes that gap.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
