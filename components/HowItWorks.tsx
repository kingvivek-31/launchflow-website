"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Discovery Call",
        desc: "We learn about your business, your goals, and the kind of clients you want to attract.",
    },
    {
        number: "02",
        title: "Design & Build",
        desc: "We create a fast, conversion-focused website tailored to your brand. No templates. No shortcuts.",
    },
    {
        number: "03",
        title: "You Review & Approve",
        desc: "We share the site for your feedback, make revisions, and get your sign-off before going live.",
    },
    {
        number: "04",
        title: "Live & Managed",
        desc: "Your site goes live. We handle hosting, uptime, and minor updates — all year, every year.",
    },
];

const CARD_EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

// Animation 5: Process step with border-draw + slide-in content
function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <div
            ref={ref}
            className="lf-step-card bg-white rounded-[28px] p-8 sm:p-10 flex flex-col shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-black/5 relative overflow-hidden group cursor-default"
        >
            {/* Top border draw animation */}
            <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden rounded-t-[28px]">
                <motion.div
                    className="h-full bg-[#c1fb9e] origin-left"
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
                />
            </div>

            {/* Hover glow */}
            <div className="absolute -top-6 -left-6 w-28 h-28 bg-[#c1fb9e]/40 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Step number — fades in simultaneously with border draw */}
            <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={inView ? { opacity: 1, scale: [1, 1.06, 1] } : {}}
                transition={{
                    opacity: { duration: 0.4, ease: "easeOut", delay: index * 0.12 },
                    scale: { duration: 0.5, ease: "easeOut", delay: index * 0.12 + 0.25 },
                }}
                className="text-[56px] sm:text-[64px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#8bdc6d] to-[#c1fb9e] tracking-tighter mb-10 leading-none select-none origin-left transition-colors duration-250 group-hover:[filter:drop-shadow(0_0_12px_rgba(139,220,109,0.35))]"
                style={{
                    filter: inView ? "drop-shadow(0 0 12px rgba(139,220,109,0.35))" : "none",
                }}
            >
                {/* Step number turns green on hover handled via CSS class */}
                {step.number}
            </motion.div>

            <div className="mt-auto">
                {/* Title slides in */}
                <motion.h3
                    className="lf-step-title text-xl sm:text-2xl font-bold text-[#121212] mb-3 tracking-tight relative"
                    initial={{ opacity: 0, x: -14 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.55, ease: CARD_EASE, delay: index * 0.12 + 0.08 }}
                >
                    {step.title}
                    {/* Green underline slides in from left on hover */}
                    <span className="lf-step-underline absolute bottom-0 left-0 h-[2px] bg-[#c1fb9e] w-0 group-hover:w-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </motion.h3>

                {/* Description slides in */}
                <motion.p
                    className="text-[#4A5568] text-[15px] sm:text-[16px] leading-[1.65] font-medium"
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.55, ease: CARD_EASE, delay: index * 0.12 + 0.15 }}
                >
                    {step.desc}
                </motion.p>
            </div>
        </div>
    );
}

function ConnectorLine() {
    const ref = useRef<SVGSVGElement>(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <div className="hidden lg:flex items-center justify-center w-full px-4 pointer-events-none" aria-hidden>
            <svg ref={ref} viewBox="0 0 900 4" fill="none" className="w-full max-w-5xl h-1 overflow-visible">
                <motion.line
                    x1="0" y1="2" x2="900" y2="2"
                    stroke="#a8e68e"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="10 8"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={inView ? { pathLength: 1, opacity: 0.7 } : {}}
                    transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1], delay: 0.05 }}
                />
            </svg>
        </div>
    );
}

export default function HowItWorks() {
    const headingRef = useRef<HTMLDivElement>(null);
    const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

    return (
        <section id="how-it-works" className="relative bg-[#f2fcf1] py-24 sm:py-32 overflow-hidden">

            {/* Static decorative background rings */}
            <div className="absolute top-[4%] left-[3%] w-[420px] h-[420px] border-[3px] border-[#a8e68e]/25 rounded-full border-dashed pointer-events-none hidden lg:block opacity-60" />
            <div className="absolute bottom-[6%] right-[4%] w-48 h-48 bg-gradient-to-tr from-[#d4cdf8]/30 to-transparent rounded-[2.5rem] pointer-events-none hidden lg:block" />

            <div className="max-w-7xl mx-auto px-6 sm:px-8">

                {/* Animation 3: Section heading clip-mask reveal */}
                <div className="max-w-2xl mb-14 sm:mb-16" ref={headingRef}>
                    <div className="overflow-hidden">
                        <motion.h2
                            className="text-[32px] sm:text-[44px] font-medium tracking-tight leading-[1.1] text-[#121212]"
                            initial={{ y: "100%" }}
                            animate={headingInView ? { y: "0%" } : {}}
                            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                        >
                            From First Call to <br />
                            <span className="text-[#3D4935]/80">Live &amp; Generating Leads.</span>
                        </motion.h2>
                    </div>
                </div>

                {/* Desktop: 4-column grid */}
                <div className="hidden lg:block">
                    <div className="grid grid-cols-4 gap-5">
                        {steps.map((step, i) => (
                            <StepCard key={step.number} step={step} index={i} />
                        ))}
                    </div>
                    <div className="mt-5">
                        <ConnectorLine />
                    </div>
                </div>

                {/* Mobile: vertical stack */}
                <div className="flex lg:hidden flex-col gap-5 relative">
                    {/* Vertical thread */}
                    <div className="absolute left-[36px] top-4 bottom-4 w-[2px] pointer-events-none overflow-hidden" aria-hidden>
                        <motion.div
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
                            className="w-full h-full bg-gradient-to-b from-[#a8e68e]/70 to-[#a8e68e]/10 origin-top"
                        />
                    </div>

                    {steps.map((step, i) => (
                        <StepCard key={step.number} step={step} index={i} />
                    ))}
                </div>

            </div>
        </section>
    );
}
