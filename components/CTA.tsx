"use client";

import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section className="py-24 sm:py-32 bg-[#121212] text-white overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center"
            >

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1, type: "spring" as any }}
                    className="w-16 h-16 rounded-2xl bg-[#f2fcf1] text-[#121212] flex items-center justify-center mb-8"
                >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 2L2 7l10 5 10-5-10-5z" /></svg>
                </motion.div>

                <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.05] mb-8">
                    Your future clients are searching right now. <br className="hidden md:block" />
                    <span className="text-white/60">Is your website ready for them?</span>
                </h2>

                <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a
                        whileHover={{ scale: 0.98 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring" as any, stiffness: 400, damping: 15 }}
                        href="https://wa.me/919582915196"
                        className="bg-[#c1fb9e] text-[#121212] px-8 py-4 rounded-xl font-medium hover:bg-[#b5f58c] transition-colors inline-block"
                    >
                        WhatsApp Us Now
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 0.98 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring" as any, stiffness: 400, damping: 15 }}
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
