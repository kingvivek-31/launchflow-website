"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function CTA() {
    const ghostRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

    // Animation 7: Parallax ghost text moves at 50% scroll speed
    useEffect(() => {
        const bgText = ghostRef.current;
        if (!bgText) return;

        const onScroll = () => {
            const offset = window.scrollY * 0.05;
            bgText.style.transform = `translateX(${-offset}px)`;
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <section className="py-24 sm:py-32 bg-[#121212] text-white overflow-hidden relative">

            {/* Animation 7: Ghost parallax text */}
            <div
                ref={ghostRef}
                className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
                aria-hidden="true"
            >
                <span
                    className="whitespace-nowrap font-black text-white leading-none"
                    style={{
                        fontSize: "clamp(72px, 14vw, 160px)",
                        opacity: 0.03,
                        fontWeight: 900,
                    }}
                >
                    LAUNCHFLOW
                </span>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center relative z-10"
            >

                <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1, type: "spring" as any, stiffness: 200, damping: 18 }}
                    className="relative w-16 h-16 mb-8"
                >
                    {/* Pulse ring */}
                    <motion.span
                        className="absolute inset-0 rounded-2xl bg-[#f2fcf1]/20"
                        initial={{ scale: 1, opacity: 0.6 }}
                        animate={{ scale: 1.7, opacity: 0 }}
                        transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
                    />
                    <div className="w-full h-full rounded-2xl bg-[#f2fcf1] text-[#121212] flex items-center justify-center relative z-10">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 2L2 7l10 5 10-5-10-5z" /></svg>
                    </div>
                </motion.div>

                {/* Animation 3: CTA heading clip-mask reveal */}
                <div className="overflow-hidden mb-8" ref={headingRef}>
                    <motion.h2
                        className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.05]"
                        initial={{ y: "100%" }}
                        animate={headingInView ? { y: "0%" } : {}}
                        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Your future clients are searching right now. <br className="hidden md:block" />
                        <span className="text-white/60">Is your website ready for them?</span>
                    </motion.h2>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 1.1 }}
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        href="https://wa.me/919582915196"
                        className="bg-[#c1fb9e] text-[#121212] px-8 py-4 rounded-xl font-medium hover:bg-[#b5f58c] transition-colors inline-block"
                    >
                        WhatsApp Us Now
                    </motion.a>
                    <motion.a
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        href="mailto:hello@launchflow.co.in"
                        className="bg-white/10 text-white px-8 py-4 rounded-xl font-medium hover:bg-white/20 transition-colors inline-block"
                    >
                        Send an Email
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
}
