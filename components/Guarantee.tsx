"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Guarantee() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="guarantee" className="py-20 sm:py-28 bg-[#121212] relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(193,251,158,0.07),transparent)] pointer-events-none" />

            <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center relative z-10" ref={ref}>
                <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 18 }}
                    className="w-20 h-20 rounded-3xl bg-[#c1fb9e] flex items-center justify-center mx-auto mb-8 text-[#121212]"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12z" />
                    </svg>
                </motion.div>

                <div className="overflow-hidden mb-6">
                    <motion.h2
                        className="text-[36px] sm:text-[54px] font-black text-white leading-[1.05] tracking-tight"
                        initial={{ y: "100%" }}
                        animate={inView ? { y: "0%" } : {}}
                        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                    >
                        15 enquiries a month. <br />
                        <span className="text-[#c1fb9e]">Or we work free.</span>
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto"
                >
                    <p>
                        If we set up your system and you don't get at least 15 verified enquiries in the first month, we keep working at no extra charge until you do.
                    </p>
                    <p className="mt-4 text-white/40 text-base">
                        No fine print. No escape clause. This is a handshake, not a contract.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href="https://wa.me/918595669560?text=Hi%20LaunchFlow%2C%20I%20want%20to%20know%20more%20about%20the%20guarantee"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-[#c1fb9e] text-[#121212] font-bold px-8 py-4 rounded-xl hover:bg-[#b5f58c] transition-colors"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52c.149-.174.198-.298.298-.497c.099-.198.05-.371-.025-.52c-.075-.149-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51c-.173-.008-.371-.01-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413c.248-.694.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347z"/>
                            <path d="M11.99 0C5.373 0 0 5.373 0 11.99c0 2.112.554 4.094 1.524 5.813L0 23.952l6.334-1.493A11.93 11.93 0 0 0 11.99 24C18.607 24 24 18.627 24 11.99C24 5.373 18.627 0 11.99 0zm0 21.937a9.928 9.928 0 0 1-5.07-1.378l-.364-.216l-3.762.887l.9-3.663l-.237-.376A9.928 9.928 0 0 1 2.063 11.99C2.063 6.513 6.513 2.063 11.99 2.063c5.477 0 9.927 4.45 9.927 9.927c0 5.477-4.45 9.947-9.927 9.947z"/>
                        </svg>
                        Claim the Guarantee
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
