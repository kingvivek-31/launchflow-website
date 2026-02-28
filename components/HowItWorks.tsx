"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "We Walk In",
        desc: "We visit your store, understand your brand, and pitch a custom workflow.",
    },
    {
        number: "02",
        title: "Live Demo",
        desc: "We design the storefront layout directly for your approval.",
    },
    {
        number: "03",
        title: "You Approve",
        desc: "If you love it, we build it out fully. Zero advance fee.",
    },
    {
        number: "04",
        title: "Go Live",
        desc: "We push it to production—capturing leads for you within 48 hours.",
    },
];

export default function HowItWorks() {
    const targetRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        // Start animation when the top of the container hits the top of the viewport
        offset: ["start start", "end end"]
    });

    // Enhanced horizontal scroll map: moves from left (5%) to left (-65%)
    const x = useTransform(scrollYProgress, [0, 1], ["5%", "-65%"]);

    // Add a slight tilt/skew to the cards as you scroll down
    const rotate = useTransform(scrollYProgress, [0, 1], [3, -3]);
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.3, 1, 1, 0.4]);

    return (
        <section id="how-it-works" ref={targetRef} className="relative h-auto lg:h-[180vh] bg-[#f2fcf1] overflow-hidden py-32 lg:py-0">

            {/* Faster Animated Floating Background Elements (Optimized) */}
            <motion.div
                animate={{ rotate: -360, scale: [1, 1.05, 1] }}
                transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                className="absolute top-[5%] left-[5%] w-[500px] h-[500px] border-[4px] border-[#a8e68e]/50 rounded-full border-dashed pointer-events-none hidden lg:block opacity-70 will-change-transform"
            />
            <motion.div
                animate={{ y: [0, -80, 0], x: [0, -30, 0], rotate: [15, 45, 15], scale: [1, 1.1, 1] }}
                transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
                className="absolute top-[50%] right-[5%] w-48 h-48 bg-gradient-to-tr from-[#d4cdf8] to-[#d4cdf8]/30 rounded-[2.5rem] opacity-60 pointer-events-none hidden lg:block blur-[1px] will-change-transform"
            />

            <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center overflow-hidden">
                {/* Subtle top gradient overlay on desktop */}
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#f2fcf1] to-transparent z-10 pointer-events-none hidden lg:block" />

                {/* Header Section */}
                <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 mb-12 lg:mb-16 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-[32px] sm:text-[44px] font-medium tracking-tight leading-[1.1] text-[#121212]">
                            From Hello to Live <br />
                            <span className="text-[#3D4935]/80">in 4 Steps.</span>
                        </h2>
                    </motion.div>
                </div>

                {/* DESKTOP: Sliding Cards Container */}
                <motion.div
                    style={{ x, opacity }}
                    className="hidden lg:flex gap-12 w-[180vw] px-8 relative z-20 items-center justify-start"
                >
                    {/* SVG Connector Line */}
                    <div className="absolute top-1/2 left-12 right-[100vw] h-1 -translate-y-1/2 z-0 pointer-events-none">
                        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                            <motion.line
                                x1="0" y1="50%" x2="100%" y2="50%"
                                stroke="#a8e68e" strokeWidth="4" strokeDasharray="12 12" strokeLinecap="round"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 0.6 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
                            />
                        </svg>
                    </div>

                    {steps.map((step, i) => {
                        const yOffset = i % 2 === 0 ? 15 : -15;
                        return (
                            <motion.div
                                key={step.number}
                                style={{ rotate }}
                                animate={{ y: yOffset }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                className="w-[380px] shrink-0 bg-white rounded-[32px] p-10 flex flex-col group hover:border-black/10 transition-all shadow-[0_10px_40px_rgba(0,0,0,0.05)] cursor-default relative z-10 border border-black/5"
                            >
                                <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#c1fb9e]/50 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="text-[64px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#8bdc6d] to-[#c1fb9e] tracking-tighter mb-16 drop-shadow-[0_0_15px_rgba(168,230,142,0.4)] transition-all duration-300 transform group-hover:scale-110 origin-left">
                                    {step.number}
                                </div>
                                <div className="mt-auto">
                                    <h3 className="text-2xl font-bold text-[#121212] mb-3">{step.title}</h3>
                                    <p className="text-[#4A5568] text-[16px] leading-[1.6] font-medium">{step.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* MOBILE: Vertical Stacked Cards */}
                <div className="flex lg:hidden flex-col gap-6 px-6 sm:px-8 relative z-20 mt-4 pb-20">
                    {/* SVG Connector Line Vertical */}
                    <div className="absolute top-12 bottom-12 left-[48px] w-1 z-0 pointer-events-none">
                        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                            <motion.line
                                x1="50%" y1="0" x2="50%" y2="100%"
                                stroke="#a8e68e" strokeWidth="3" strokeDasharray="8 8" strokeLinecap="round"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 0.5 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                        </svg>
                    </div>

                    {steps.map((step, i) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, x: -20, y: 20 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="w-full bg-white rounded-[24px] p-8 flex flex-col shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-black/5 relative z-10 overflow-hidden"
                        >
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#c1fb9e]/40 blur-xl rounded-full pointer-events-none" />

                            <div className="text-[48px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#8bdc6d] to-[#c1fb9e] tracking-tighter mb-8 drop-shadow-[0_0_10px_rgba(168,230,142,0.3)] inline-block">
                                {step.number}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#121212] mb-2">{step.title}</h3>
                                <p className="text-[#4A5568] text-[15px] leading-[1.6] font-medium">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
