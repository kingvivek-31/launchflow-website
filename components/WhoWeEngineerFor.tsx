"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const industries = [
    {
        label: "Healthcare",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m-3-3h6" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        verticals: [
            "Private Clinics",
            "Dentists & Orthodontists",
            "Aesthetic Dermatology",
        ],
        accent: "#c1fb9e",
        accentText: "#1A3D0A",
        tag: "High LTV · Repeat Visits",
    },
    {
        label: "Fitness",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
        verticals: [
            "Premium Gyms",
            "Pilates Studios",
            "Hybrid Training Centers",
        ],
        accent: "#fadc64",
        accentText: "#3D3000",
        tag: "Subscription Revenue · Walk-ins",
    },
    {
        label: "Education",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
        ),
        verticals: [
            "Private Schools",
            "Academies & Coaching",
            "JEE / NEET Consultancies",
        ],
        accent: "#d4cdf8",
        accentText: "#2D1F6E",
        tag: "Admissions Season · High Stakes",
    },
];

export default function WhoWeEngineerFor() {
    const headingRef = useRef<HTMLDivElement>(null);
    const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

    return (
        <section id="who-we-engineer-for" className="py-24 sm:py-32 bg-[#080808] relative overflow-hidden">
            {/* Dot grid texture */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.12]"
                style={{
                    backgroundImage: "radial-gradient(circle, #ffffff18 1px, transparent 1px)",
                    backgroundSize: "36px 36px",
                }}
            />

            {/* Ambient glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(193,251,158,0.07),transparent)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">

                {/* Section header */}
                <div ref={headingRef} className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={headingInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 border border-white/10 text-white/40 text-xs font-medium px-4 py-1.5 rounded-full mb-8 tracking-[0.08em] uppercase"
                    >
                        <span className="w-1 h-1 rounded-full bg-[#c1fb9e]/60" />
                        Who We Engineer For
                    </motion.div>

                    <div className="overflow-hidden">
                        <motion.h2
                            className="text-[36px] sm:text-[52px] font-extrabold text-white tracking-[-0.03em] leading-[1.05]"
                            initial={{ y: "100%" }}
                            animate={headingInView ? { y: "0%" } : {}}
                            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                        >
                            We specialise in three verticals.{" "}
                            <span
                                className="italic text-[#c1fb9e]"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                Deeply.
                            </span>
                        </motion.h2>
                    </div>

                    <motion.p
                        className="text-white/40 text-lg mt-6 max-w-xl mx-auto leading-relaxed font-light"
                        initial={{ opacity: 0 }}
                        animate={headingInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        Deep vertical specialisation means faster results, better copy, and proven playbooks — not a generic template.
                    </motion.p>
                </div>

                {/* 3-column grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-3xl overflow-hidden border border-white/[0.06]">
                    {industries.map((industry, i) => (
                        <motion.div
                            key={industry.label}
                            initial={{ opacity: 0, y: 32 }}
                            animate={headingInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 * i }}
                            className="bg-[#0e0e0e] p-10 flex flex-col gap-8 group hover:bg-[#141414] transition-colors duration-300 cursor-default"
                        >
                            {/* Icon */}
                            <div
                                className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                                style={{ backgroundColor: industry.accent, color: industry.accentText }}
                            >
                                {industry.icon}
                            </div>

                            {/* Label */}
                            <div>
                                <h3 className="text-white text-2xl font-bold tracking-tight mb-1">{industry.label}</h3>
                                <span
                                    className="text-xs font-semibold tracking-[0.06em] uppercase px-2.5 py-1 rounded-full"
                                    style={{ backgroundColor: `${industry.accent}20`, color: industry.accent }}
                                >
                                    {industry.tag}
                                </span>
                            </div>

                            {/* Verticals list */}
                            <ul className="space-y-3 mt-auto">
                                {industry.verticals.map((v) => (
                                    <li key={v} className="flex items-center gap-3 text-white/60 text-[15px] font-light">
                                        <span
                                            className="w-1.5 h-1.5 rounded-full shrink-0"
                                            style={{ backgroundColor: industry.accent }}
                                        />
                                        {v}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA strip */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={headingInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <p className="text-white/25 text-sm tracking-[0.04em] uppercase font-medium">
                        Not in this list?{" "}
                        <a href="#simple-pricing" className="text-[#c1fb9e]/60 hover:text-[#c1fb9e] transition-colors duration-200 underline underline-offset-4">
                            Let&apos;s talk anyway →
                        </a>
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
