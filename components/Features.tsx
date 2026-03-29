"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "We put your gym on the Google Map",
        description: "We set up and optimise your Google Business Profile so you appear in the top 3 spots when someone in your area searches 'gym near me' or 'fitness studio in [area].' This is where 80% of members come from.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0z" />
            </svg>
        ),
        accent: "#c1fb9e",
        accentText: "#1A3D0A",
        result: "Found before competitors",
    },
    {
        number: "02",
        title: "We build a website that converts visitors into enquiries",
        description: "A fast, mobile-first website with clear pricing, real photos, and a WhatsApp button that's impossible to miss. Built so a person decides to join within 30 seconds of landing — without talking to anyone.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-6 3h.008v.008H7.5v-.008zm3 0h.008v.008H10.5v-.008zm3 0h.008v.008H13.5v-.008z" />
            </svg>
        ),
        accent: "#fadc64",
        accentText: "#3D3000",
        result: "Visitors become enquiries",
    },
    {
        number: "03",
        title: "We make sure every enquiry gets an instant reply",
        description: "A WhatsApp system that instantly answers common questions (fees, timings, location, trial offer) 24/7 — even at midnight. So you never lose a lead because you were busy training someone.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
        ),
        accent: "#d4cdf8",
        accentText: "#2D1F6E",
        result: "No lead left behind",
    },
];

export default function Features() {
    const headingRef = useRef<HTMLDivElement>(null);
    const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

    return (
        <section id="how-it-works" className="py-24 sm:py-32 bg-white">
            <div className="max-w-5xl mx-auto px-6 sm:px-8">

                <div className="mb-16" ref={headingRef}>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={headingInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 bg-[#c1fb9e]/30 border border-[#a8e68e]/40 text-[#1A3D0A] text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-widest"
                    >
                        How It Works
                    </motion.div>

                    <div className="overflow-hidden">
                        <motion.h2
                            className="text-[32px] sm:text-[48px] font-bold tracking-tight leading-[1.1] text-[#121212] mb-4"
                            initial={{ y: "100%" }}
                            animate={headingInView ? { y: "0%" } : {}}
                            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                        >
                            3 steps. <span className="text-[#4A5568] font-medium">Predictable results.</span>
                        </motion.h2>
                    </div>

                    <motion.p
                        className="text-lg text-[#4A5568] max-w-2xl leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={headingInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        No complex strategy. No monthly retainer calls. Just a simple system that brings you enquiries on autopilot.
                    </motion.p>
                </div>

                {/* Steps */}
                <div className="space-y-6">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 32 }}
                            animate={headingInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
                            className="lf-step-card flex flex-col sm:flex-row gap-6 p-8 rounded-3xl bg-[#f9f9f9] border border-black/5 hover:border-black/10 transition-colors duration-300 group cursor-default"
                        >
                            {/* Number + icon */}
                            <div className="flex-shrink-0 flex sm:flex-col items-center sm:items-start gap-4 sm:w-20">
                                <span className="text-5xl font-black text-black/10 leading-none select-none">{step.number}</span>
                                <div
                                    className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                                    style={{ backgroundColor: step.accent, color: step.accentText }}
                                >
                                    {step.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <h3 className="text-xl sm:text-2xl font-bold text-[#121212] mb-3 leading-tight relative">
                                    {step.title}
                                    <span className="lf-step-underline" />
                                </h3>
                                <p className="text-[#4A5568] text-base leading-relaxed mb-5">
                                    {step.description}
                                </p>
                                <span
                                    className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full"
                                    style={{ backgroundColor: `${step.accent}40`, color: step.accentText }}
                                >
                                    ✓ {step.result}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Summary bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={headingInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="mt-12 bg-[#121212] rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
                >
                    <div>
                        <p className="text-white/60 text-sm mb-1">The result of all 3 steps together:</p>
                        <p className="text-white text-xl font-semibold">15+ qualified enquiries every month — without paid ads.</p>
                    </div>
                    <a
                        href="#pricing"
                        className="flex-shrink-0 inline-flex items-center gap-2 bg-[#c1fb9e] text-[#121212] font-semibold px-6 py-3 rounded-xl hover:bg-[#b5f58c] transition-colors whitespace-nowrap"
                    >
                        See Plans →
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
