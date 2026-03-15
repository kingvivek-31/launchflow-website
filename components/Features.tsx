"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
        ),
        title: "Google Maps Presence",
        description: "We optimize your Google Business Profile so you show up when customers search for businesses like yours in your area.",
        bg: "#fadc64",
        text: "#3D3000",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
        ),
        title: "Customer Trust",
        description: "Your business profile showcases positive reviews, professional photos, and complete information that builds instant credibility.",
        bg: "#d4cdf8",
        text: "#2D1F6E",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
        ),
        title: "Local Search Dominance",
        description: "A website is useless if nobody finds it. We completely overhaul your Google Business Profile and link it to a sub-second Next.js conversion page to capture high-intent local walk-ins.",
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
            whileHover={{ y: -8, scale: 1.02 }}
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
                            The LaunchFlow Infrastructure <br />
                            <span className="text-[#4A5568]">Three engineered systems.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        className="text-[16px] leading-[1.6] text-[#4A5568]"
                        initial={{ opacity: 0 }}
                        animate={headingInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 + 0.85 }}
                    >
                        We don&apos;t sell websites. We engineer the full local search acquisition stack — from Google rank to closed deal.
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
