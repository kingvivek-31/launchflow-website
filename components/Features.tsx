"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 3l-8.5 9.5h7l-1.5 8.5L20 11h-7l1-8z" />
            </svg>
        ),
        title: "Managed Peace of Mind",
        description: "1 year of hosting, domain, and updates included. We handle the tech so you can focus on clients.",
        bg: "#fadc64",
        text: "#3D3000",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: "High-Conversion DNA",
        description: "Strategically designed to turn high-intent traffic into WhatsApp & call enquiries.",
        bg: "#d4cdf8",
        text: "#2D1F6E",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 14.5a2.5 2.5 0 002.5-2.5c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 002.5 2.5z" />
            </svg>
        ),
        title: "Launch in Days",
        description: "Your digital storefront live in 2-6 days depending on your chosen plan. No long waits.",
        bg: "#c1fb9e",
        text: "#1A3D0A",
    },
];

const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

// Animation 4: Individual card with stagger + left-border hover
function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 36, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.11,
            }}
            className="lf-feature-card rounded-[32px] p-8 pb-16 flex flex-col group cursor-default relative overflow-hidden"
            style={{ backgroundColor: feature.bg, color: feature.text }}
        >
            {/* Left-border hover element */}
            <div
                className="lf-card-border absolute left-0 top-0 bottom-0 w-[2px] rounded-l-[32px]"
                style={{ backgroundColor: "#c1fb9e" }}
            />

            {/* Icon */}
            <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center mb-auto bg-white/70 transition-transform duration-300 group-hover:scale-[1.06]"
                style={{ transitionTimingFunction: "ease" }}>
                {feature.icon}
            </div>

            {/* Card bg subtle lightening on hover handled via CSS in globals */}
            <div className="mt-16">
                <h3 className="text-xl font-semibold mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-sm leading-relaxed opacity-75">{feature.description}</p>
            </div>
        </motion.div>
    );
}

export default function Features() {
    const headingRef = useRef<HTMLDivElement>(null);
    const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

    return (
        <section id="features" className="py-24 sm:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">

                {/* Animation 3: Section heading clip-mask reveal */}
                <motion.div
                    ref={headingRef}
                    className="max-w-2xl mb-20"
                >
                    {/* Heading slide-up from overflow hidden container */}
                    <div className="overflow-hidden">
                        <motion.h2
                            className="text-[32px] sm:text-[44px] font-medium tracking-tight leading-[1.1] text-[#121212] mb-6"
                            initial={{ y: "100%" }}
                            animate={headingInView ? { y: "0%" } : {}}
                            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                        >
                            No Freelancers. <br />
                            <span className="text-[#4A5568]">No Surprises. Just Results.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        className="text-[16px] leading-[1.6] text-[#4A5568]"
                        initial={{ opacity: 0 }}
                        animate={headingInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 + 0.85 }}
                    >
                        LaunchFlow manages everything end-to-end. You get a fast, professional website that brings in leads — without touching a single technical thing.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, i) => (
                        <FeatureCard key={feature.title} feature={feature} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
