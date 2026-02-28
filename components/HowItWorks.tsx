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
        <section id="how-it-works" ref={targetRef} className="relative h-[180vh] bg-[#f2fcf1] overflow-hidden">

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

            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

                {/* Sticky Header Section */}
                <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 mb-16 relative z-10">
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

                {/* Sliding Cards Container */}
                <motion.div
                    style={{ x, opacity }}
                    className="flex gap-8 lg:gap-12 w-[350vw] sm:w-[250vw] lg:w-[180vw] px-6 sm:px-8 relative z-20"
                >
                    {steps.map((step, i) => {
                        // Apply alternating vertical offsets to make them bob relative to each other
                        const yOffset = i % 2 === 0 ? 10 : -10;

                        return (
                            <motion.div
                                key={step.number}
                                style={{ rotate }}
                                animate={{ y: yOffset }}
                                className="w-[280px] sm:w-[350px] shrink-0 bg-white rounded-[32px] p-8 sm:p-10 border border-black/5 flex flex-col group hover:border-black/10 transition-colors shadow-sm cursor-default"
                            >
                                <div className="text-[48px] sm:text-[56px] font-[500] text-[#c1fb9e] tracking-tighter mb-12 sm:mb-16 transition-colors duration-300 group-hover:text-[#121212]">
                                    {step.number}
                                </div>
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-semibold text-[#121212] mb-3">{step.title}</h3>
                                    <p className="text-[#4A5568] text-[15px] sm:text-[16px] leading-[1.6]">{step.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
