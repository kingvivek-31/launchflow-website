"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function CTA() {
    const ghostRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

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
        <section id="contact" className="py-24 sm:py-32 bg-[#121212] text-white overflow-hidden relative">

            {/* Ghost text */}
            <div
                ref={ghostRef}
                className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
                aria-hidden="true"
            >
                <span
                    className="whitespace-nowrap font-black text-white leading-none"
                    style={{ fontSize: "clamp(72px, 14vw, 160px)", opacity: 0.03, fontWeight: 900 }}
                >
                    LAUNCHFLOW
                </span>
            </div>

            {/* Ambient glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(193,251,158,0.06),transparent)] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="max-w-3xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center relative z-10"
            >
                {/* Urgency signal */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-white/[0.06] border border-white/[0.1] rounded-full px-5 py-2 mb-10 text-sm text-white/60 font-medium"
                >
                    🔴 Only taking 3 new gyms this month in Delhi NCR
                </motion.div>

                {/* Heading */}
                <div className="overflow-hidden mb-6" ref={headingRef}>
                    <motion.h2
                        className="text-4xl sm:text-5xl md:text-[60px] font-black tracking-tight leading-[1.05]"
                        initial={{ y: "100%" }}
                        animate={headingInView ? { y: "0%" } : {}}
                        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Ready to fill your gym?
                    </motion.h2>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-white/60 text-lg font-medium mb-4 max-w-xl mx-auto leading-relaxed"
                >
                    Send us a WhatsApp right now. Tell us your gym name and area. We&apos;ll do a free Google audit within 24 hours and show you exactly where you&apos;re losing members.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.65 }}
                    className="text-white/30 text-sm mb-12"
                >
                    No pitch. No pressure. Just a straight answer.
                </motion.p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    {/* Primary — WhatsApp */}
                    <motion.a
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        href="https://wa.me/918595669560?text=Hi%20LaunchFlow%2C%20I%20want%20a%20free%20Google%20audit%20for%20my%20gym"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#20BE5A] transition-colors shadow-[0_4px_20px_rgba(37,211,102,0.3)] text-lg"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52c.149-.174.198-.298.298-.497c.099-.198.05-.371-.025-.52c-.075-.149-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51c-.173-.008-.371-.01-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413c.248-.694.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347z"/>
                            <path d="M11.99 0C5.373 0 0 5.373 0 11.99c0 2.112.554 4.094 1.524 5.813L0 23.952l6.334-1.493A11.93 11.93 0 0 0 11.99 24C18.607 24 24 18.627 24 11.99C24 5.373 18.627 0 11.99 0zm0 21.937a9.928 9.928 0 0 1-5.07-1.378l-.364-.216l-3.762.887l.9-3.663l-.237-.376A9.928 9.928 0 0 1 2.063 11.99C2.063 6.513 6.513 2.063 11.99 2.063c5.477 0 9.927 4.45 9.927 9.927c0 5.477-4.45 9.947-9.927 9.947z"/>
                        </svg>
                        WhatsApp Us Now
                    </motion.a>

                    {/* Secondary — Call */}
                    <motion.a
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        href="tel:+918595669560"
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 bg-white/[0.08] border border-white/[0.12] text-white px-8 py-4 rounded-xl font-medium hover:bg-white/[0.14] transition-colors text-lg"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
                        </svg>
                        Call Us
                    </motion.a>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="mt-8 text-white/25 text-sm"
                >
                    🤝 15+ enquiries/month — or we keep working free. That&apos;s the deal.
                </motion.p>
            </motion.div>
        </section>
    );
}
