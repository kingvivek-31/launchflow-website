"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const plans = [
  {
    name: "Quick Start",
    price: "₹10,000",
    tagline: "Get found. Start getting leads fast.",
    bestFor: "New gyms with zero online presence",
    features: [
      "Google Business Profile setup & optimisation",
      "Fast, mobile-friendly conversion website",
      "WhatsApp + phone lead capture",
      "Ready in 3–5 days",
    ],
    cta: "Book Free Audit",
    ctaHref: "https://wa.me/919582915196",
    highlight: false,
  },
  {
    name: "Growth Package",
    price: "₹25,000",
    badge: "Most Popular",
    tagline: "Win Google searches. Convert visitors into members.",
    bestFor: "Established gyms ready to dominate locally",
    features: [
      "Everything in Quick Start",
      "Full business website with gallery section",
      "Customer testimonials section",
      "SEO optimisation for local searches",
      "Ready in 5–7 days",
    ],
    cta: "Book Free Audit",
    ctaHref: "https://wa.me/919582915196",
    highlight: true,
  },
  {
    name: "Premium Setup",
    price: "₹45,000+",
    tagline: "Full authority. Total control.",
    bestFor: "Multi-location or high-growth fitness brands",
    features: [
      "Everything in Growth Package",
      "Advanced booking system integration",
      "Custom branding & premium design",
      "Priority delivery & support",
    ],
    cta: "Let's Talk",
    ctaHref: "https://wa.me/919582915196",
    highlight: false,
  },
];

function PlanCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  if (plan.highlight) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
        className="relative flex flex-col"
      >
        {/* Outer glow */}
        <div className="absolute -inset-px rounded-[28px] bg-gradient-to-b from-[#a8e68e] to-[#c1fb9e]/30 pointer-events-none" style={{ zIndex: 0 }} />
        <div className="relative z-10 flex flex-col h-full bg-[#e8fedb] rounded-[27px] p-10 sm:p-12">
          {/* Badge */}
          <div className="absolute top-6 right-6 bg-[#121212] text-[#c1fb9e] text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full">
            {plan.badge}
          </div>

          <div className="mb-8">
            <p className="text-[11px] font-mono tracking-[0.18em] uppercase text-[#3D4935]/50 mb-2">{plan.bestFor}</p>
            <h3 className="text-[24px] font-extrabold text-[#121212] tracking-[-0.03em] mb-1.5">{plan.name}</h3>
            <p className="text-[14px] text-[#3D4935]/70">{plan.tagline}</p>
          </div>

          <div className="flex items-baseline gap-2 mb-9">
            <span className="text-[56px] sm:text-[64px] font-extrabold text-[#121212] tracking-[-0.04em] leading-none">{plan.price}</span>
            <span className="text-[14px] text-[#3D4935]/60 font-medium">one-time setup</span>
          </div>

          <ul className="space-y-3.5 mb-10 flex-1 border-b border-[#121212]/10 pb-9">
            {plan.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-[14px]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4 shrink-0 mt-0.5 text-[#3D4935]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
                </svg>
                <span className="text-[#3D4935] font-medium">{f}</span>
              </li>
            ))}
          </ul>

          <a
            href={plan.ctaHref}
            className="w-full py-[18px] rounded-full font-bold text-[16px] text-center bg-[#121212] text-white hover:bg-[#1e1e1e] transition-colors duration-200 shadow-[0_2px_20px_rgba(0,0,0,0.2)]"
          >
            {plan.cta}
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
      className="relative flex flex-col bg-white rounded-[28px] p-10 sm:p-12 border border-black/[0.07] shadow-[0_2px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_48px_rgba(0,0,0,0.1)] hover:border-black/[0.1] hover:-translate-y-1 transition-all duration-400"
    >
      <div className="mb-8">
        <p className="text-[11px] font-mono tracking-[0.18em] uppercase text-[#9ca3af] mb-2">{plan.bestFor}</p>
        <h3 className="text-[24px] font-extrabold text-[#121212] tracking-[-0.03em] mb-1.5">{plan.name}</h3>
        <p className="text-[14px] text-[#6b7280]">{plan.tagline}</p>
      </div>

      <div className="flex items-baseline gap-2 mb-9">
        <span className="text-[56px] sm:text-[64px] font-extrabold text-[#121212] tracking-[-0.04em] leading-none">{plan.price}</span>
        <span className="text-[14px] text-[#9ca3af] font-medium">one-time setup</span>
      </div>

      <ul className="space-y-3.5 mb-10 flex-1 border-b border-black/[0.06] pb-9">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start gap-3 text-[14px]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 shrink-0 mt-0.5 text-[#3D4935]">
              <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
            </svg>
            <span className="text-[#4A5568]">{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={plan.ctaHref}
        className="w-full py-[18px] rounded-full font-bold text-[16px] text-center bg-[#121212] text-white hover:bg-[#1e1e1e] transition-colors duration-200"
      >
        {plan.cta}
      </a>
    </motion.div>
  );
}

export default function TheOffer() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });

  return (
    <section id="pricing" className="relative py-32 sm:py-48 bg-[#fafafa] overflow-hidden">
      {/* Top gradient fade from dark */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">

        {/* Chapter heading */}
        <div ref={headingRef} className="mb-16 sm:mb-24 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={headingInView ? { opacity: 1 } : {}}
            className="inline-flex items-center gap-3 text-[#3D4935]/38 text-[11px] font-mono tracking-[0.25em] uppercase mb-8"
          >
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-[#3D4935]/20" />
            Investment
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-[#3D4935]/20" />
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              className="text-[42px] sm:text-[56px] md:text-[68px] font-extrabold text-[#121212] tracking-[-0.04em] leading-[1.02]"
              initial={{ y: "105%" }}
              animate={headingInView ? { y: "0%" } : {}}
              transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            >
              Pick your starting point.<br />
              <span className="text-[#9ca3af] font-light">We'll take it from there.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={headingInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-[17px] sm:text-[18px] text-[#6b7280] mt-6 max-w-md mx-auto leading-[1.7] font-light"
          >
            One-time setup. No lock-ins. No hidden retainer fees. Just results.
          </motion.p>
        </div>

        {/* Plan grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-start">
          {plans.map((plan, i) => (
            <PlanCard key={i} plan={plan} index={i} />
          ))}
        </div>

        {/* Care plan add-on */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 bg-white rounded-[24px] border border-black/[0.07] p-9 sm:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.05)]"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-7">
            <div>
              <span className="inline-block text-[11px] font-mono tracking-[0.18em] uppercase text-[#9ca3af] mb-2">Optional Add-On</span>
              <h4 className="text-[22px] font-extrabold text-[#121212] tracking-[-0.025em] mb-2">LaunchFlow Care Plan</h4>
              <p className="text-[15px] text-[#6b7280] max-w-md leading-[1.7] font-light">
                We handle hosting, domain renewal, security, monitoring, and up to 5 small content updates per year. You run your gym — we run your website.
              </p>
            </div>
            <div className="shrink-0 text-left md:text-right">
              <div className="text-[44px] font-extrabold text-[#121212] leading-none tracking-[-0.04em]">₹1,000</div>
              <div className="text-[13px] text-[#9ca3af] mt-1">per year · after 3 months</div>
              <p className="text-[12px] text-[#b0b8c1] mt-1.5">Or self-manage with our full documentation</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
