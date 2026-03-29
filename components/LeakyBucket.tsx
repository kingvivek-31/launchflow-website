"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const problems = [
    {
        number: "01",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.2-5.2m0 0A7.5 7.5 0 1 0 10.8 10.8a7.5 7.5 0 0 0 5 5z" />
            </svg>
        ),
        title: "They search. Your competitor appears. You don't.",
        scenario: "Someone in Rohini types 'gym near me' at 8pm. Google shows 3 gyms in the Maps box. Your gym is not one of them — even though you're 2 minutes away. That person joins the other gym. This happens 15 times every week.",
        pill: "Invisible on Google Maps",
        pillColor: "bg-red-100 text-red-700",
        accent: "#ef4444",
    },
    {
        number: "02",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3z" />
            </svg>
        ),
        title: "They find you. Your website loses them in 4 seconds.",
        scenario: "A potential member clicks your gym's name on Google. The page takes 6 seconds to load. When it finally opens, there's no price, no photos, no WhatsApp button. They press back. Your competitor's site has a 'Chat Now' button. They join there instead.",
        pill: "Visitors leave, rivals win",
        pillColor: "bg-orange-100 text-orange-700",
        accent: "#f97316",
    },
    {
        number: "03",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
            </svg>
        ),
        title: "They try to contact you. No reply. They're gone.",
        scenario: "Someone sends a WhatsApp at 11am asking 'what's the monthly fee?'. You're with a client. You reply at 4pm. They've already joined the gym down the road. In Delhi, whoever replies first almost always gets the member.",
        pill: "Slow reply = lost member",
        pillColor: "bg-yellow-100 text-yellow-700",
        accent: "#eab308",
    },
];

export default function LeakyBucket() {
    const headingRef = useRef<HTMLDivElement>(null);
    const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

    return (
        <section className="py-24 sm:py-32 bg-gradient-to-br from-gray-900 via-[#0e0e0e] to-gray-900 relative overflow-hidden">
            {/* Background texture */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(193,251,158,0.04),transparent)] pointer-events-none" />
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.06]"
                style={{
                    backgroundImage: "radial-gradient(circle, #ffffff18 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="max-w-5xl mx-auto px-6 sm:px-8">

                {/* Section heading */}
                <div className="mb-16" ref={headingRef}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={headingInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-widest"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z" clipRule="evenodd" />
                        </svg>
                        The Leaky Bucket
                    </motion.div>

                    <div className="overflow-hidden">
                        <motion.h2
                            className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
                            initial={{ y: "100%" }}
                            animate={headingInView ? { y: "0%" } : {}}
                            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                        >
                            You're losing members <br className="hidden sm:block" />
                            <span className="italic text-[#c1fb9e]" style={{ fontFamily: "'Playfair Display', serif" }}>right now.</span>
                        </motion.h2>
                    </div>

                    <motion.p
                        className="text-gray-400 text-lg max-w-2xl leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={headingInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Not because your gym is bad. Because of three invisible gaps between you and the customer. Here's exactly what's happening:
                    </motion.p>
                </div>

                {/* Problem cards */}
                <div className="space-y-6">
                    {problems.map((problem, i) => (
                        <motion.div
                            key={problem.number}
                            initial={{ opacity: 0, x: -30 }}
                            animate={headingInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white/[0.04] border border-white/[0.08] rounded-3xl p-8 flex flex-col sm:flex-row gap-6 group hover:bg-white/[0.07] transition-colors duration-300 cursor-default"
                        >
                            {/* Number + Icon */}
                            <div className="flex-shrink-0 flex sm:flex-col items-center sm:items-start gap-4">
                                <span className="text-5xl font-black text-white/10 leading-none select-none">{problem.number}</span>
                                <div
                                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white"
                                    style={{ backgroundColor: `${problem.accent}20`, color: problem.accent }}
                                >
                                    {problem.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-tight">
                                    {problem.title}
                                </h3>
                                <p className="text-gray-400 text-base leading-relaxed mb-5">
                                    {problem.scenario}
                                </p>
                                <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${problem.pillColor}`}>
                                    📍 {problem.pill}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Transition line */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={headingInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="text-center mt-16 pt-12 border-t border-white/[0.06]"
                >
                    <p className="text-white/50 text-lg mb-2">
                        These aren&apos;t big problems. They have a simple fix.
                    </p>
                    <p className="text-[#c1fb9e] text-xl font-semibold">
                        Here&apos;s exactly what we do — in 3 steps. ↓
                    </p>
                </motion.div>
            </div>
        </section>
    );
}