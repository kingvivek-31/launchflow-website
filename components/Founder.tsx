"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Founder() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="about" className="py-24 sm:py-32 bg-white">
            <div className="max-w-4xl mx-auto px-6 sm:px-8">

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col md:flex-row gap-12 items-start"
                >
                    {/* Photo placeholder */}
                    <div className="flex-shrink-0">
                        <div className="w-48 h-56 rounded-3xl bg-[#f2fcf1] border-2 border-dashed border-[#a8e68e]/60 flex flex-col items-center justify-center gap-2 text-[#4A5568] mx-auto md:mx-0">
                            {/* [FOUNDER PHOTO — a genuine, approachable headshot, not a stock photo] */}
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10 text-[#a8e68e]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            <span className="text-xs text-center px-2 text-[#a8e68e] font-medium">[Founder Photo]</span>
                        </div>
                    </div>

                    {/* Story */}
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="inline-flex items-center gap-2 bg-[#c1fb9e]/20 border border-[#a8e68e]/30 text-[#1A3D0A] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest"
                        >
                            About LaunchFlow
                        </motion.div>

                        <div className="overflow-hidden mb-4">
                            <motion.h2
                                className="text-[28px] sm:text-[38px] font-bold text-[#121212] tracking-tight leading-[1.1]"
                                initial={{ y: "100%" }}
                                animate={inView ? { y: "0%" } : {}}
                                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                            >
                                I&apos;m a gym member who got fed up watching good gyms lose to bad marketing.
                            </motion.h2>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="space-y-4 text-[#4A5568] text-base leading-relaxed"
                        >
                            <p>
                                My name is Vivek, and I&apos;ve been a gym member in Delhi NCR for years. I&apos;ve trained at 6 different gyms across Rohini, Pitampura, and Dwarka. Some of the best gyms I&apos;ve ever trained at were half-empty — while mediocre gyms down the road were packed.
                            </p>
                            <p>
                                The difference wasn&apos;t quality. It was visibility. The packed gym showed up on Google. The better gym didn&apos;t.
                            </p>
                            <p>
                                I started LaunchFlow to fix exactly this. I&apos;m not an agency with 50 clients and a junior handling your account. I work personally with a small number of gym owners in Delhi NCR and treat each one like my own business.
                            </p>
                            <p className="text-[#121212] font-semibold">
                                If your gym is genuinely good — you deserve to be found.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="mt-8 flex flex-wrap gap-3"
                        >
                            <div className="bg-[#f2fcf1] border border-[#a8e68e]/30 rounded-2xl px-4 py-3 text-sm">
                                <span className="font-bold text-[#121212]">Based in Delhi NCR</span>
                            </div>
                            <div className="bg-[#f2fcf1] border border-[#a8e68e]/30 rounded-2xl px-4 py-3 text-sm">
                                <span className="font-bold text-[#121212]">Gym member for 6+ years</span>
                            </div>
                            <div className="bg-[#f2fcf1] border border-[#a8e68e]/30 rounded-2xl px-4 py-3 text-sm">
                                <span className="font-bold text-[#121212]">You talk to me, not an intern</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
