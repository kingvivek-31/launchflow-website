"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const forList = [
    { icon: "💪", text: "You own or manage a gym, CrossFit box, yoga studio, pilates studio, Zumba centre, or any fitness space" },
    { icon: "📍", text: "Your gym is in Delhi, Noida, Gurgaon, Faridabad, or Ghaziabad" },
    { icon: "😤", text: "You're frustrated that neighbouring gyms are getting members even though yours is better" },
    { icon: "📱", text: "Most of your potential members are on their phones at 8–11pm searching for gyms" },
    { icon: "📉", text: "You're spending on flyers, hoardings, or local ads with no way to track what's working" },
    { icon: "🤝", text: "You want a straight-talking partner, not an agency that sends monthly PDF reports you can't read" },
];

const notForList = [
    "You already have 200+ members and a full in-house digital team",
    "You want overnight results without any setup time (2–4 weeks to see traction)",
    "You're outside Delhi NCR — we focus deep, not wide",
    "You want flashy ads — we don't run paid ads, we build organic visibility",
];

const areas = [
    "Rohini", "Dwarka", "Pitampura", "Patel Nagar", "Janakpuri",
    "Rajouri Garden", "Laxmi Nagar", "Saket", "Greater Kailash",
    "Noida Sec 18–62", "Gurgaon", "Faridabad", "Ghaziabad"
];

export default function WhoWeEngineerFor() {
    const headingRef = useRef<HTMLDivElement>(null);
    const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

    return (
        <section id="who-we-serve" className="py-24 sm:py-32 bg-[#080808] relative overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.08]"
                style={{
                    backgroundImage: "radial-gradient(circle, #ffffff18 1px, transparent 1px)",
                    backgroundSize: "36px 36px",
                }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(193,251,158,0.06),transparent)] pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">

                {/* Heading */}
                <div ref={headingRef} className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={headingInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 border border-white/10 text-white/40 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest"
                    >
                        <span className="w-1 h-1 rounded-full bg-[#c1fb9e]/60" />
                        Is This For You?
                    </motion.div>

                    <div className="overflow-hidden">
                        <motion.h2
                            className="text-[32px] sm:text-[48px] font-extrabold text-white tracking-tight leading-[1.05]"
                            initial={{ y: "100%" }}
                            animate={headingInView ? { y: "0%" } : {}}
                            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                        >
                            Built for gym owners in{" "}
                            <span className="italic text-[#c1fb9e]" style={{ fontFamily: "'Playfair Display', serif" }}>
                                Delhi NCR.
                            </span>
                        </motion.h2>
                    </div>

                    <motion.p
                        className="text-white/40 text-lg mt-4 max-w-xl leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={headingInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        We don't work with everyone. We work deeply with the right people.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* This IS for you */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={headingInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="bg-[#0e0e0e] border border-white/[0.06] rounded-3xl p-8"
                    >
                        <h3 className="text-lg font-bold text-[#c1fb9e] mb-6 flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-[#c1fb9e] text-[#0e0e0e] flex items-center justify-center text-xs font-black">✓</span>
                            This is for you if…
                        </h3>
                        <ul className="space-y-4">
                            {forList.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={headingInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
                                    className="flex gap-3 text-white/70 text-sm leading-relaxed"
                                >
                                    <span className="text-lg">{item.icon}</span>
                                    {item.text}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* This is NOT for you */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={headingInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="bg-[#0e0e0e] border border-white/[0.06] rounded-3xl p-8"
                    >
                        <h3 className="text-lg font-bold text-red-400 mb-6 flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-red-400/20 text-red-400 flex items-center justify-center text-xs font-black">✕</span>
                            This is NOT for you if…
                        </h3>
                        <ul className="space-y-4 mb-8">
                            {notForList.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={headingInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
                                    className="flex gap-3 text-white/40 text-sm leading-relaxed"
                                >
                                    <span className="text-red-400/60 mt-0.5 shrink-0">—</span>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>

                        {/* Areas */}
                        <div className="pt-6 border-t border-white/[0.06]">
                            <p className="text-white/30 text-xs uppercase tracking-widest mb-3 font-semibold">Areas we serve</p>
                            <div className="flex flex-wrap gap-2">
                                {areas.map((area) => (
                                    <span
                                        key={area}
                                        className="bg-white/[0.05] border border-white/[0.08] text-white/50 text-xs px-3 py-1 rounded-full"
                                    >
                                        {area}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
