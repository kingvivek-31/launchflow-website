"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const TICKER_ITEMS = [
    "GYMS", "WELLNESS CENTERS", "COACHING", "BOXING GYMS", "YOGA STUDIOS", "FITNESS BRANDS"
];

// Triple the items for seamless infinite loop
const TICKER_ROW = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

const springTransition = {
    type: "spring" as any,
    damping: 25,
    stiffness: 120,
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: springTransition
    }
};

// Word-by-word headline animation
function AnimatedHeadline() {
    const words = ["Don't", "lose", "clients", "to", "a"];
    const italicWords = ["bad", "website."];
    const allWords = words.length;
    const lastWordDelay = allWords * 0.07;

    return (
        <h1 className="text-5xl sm:text-6xl md:text-[76px] font-[500] leading-[1.05] tracking-tight text-[#121212] mb-6 relative z-20">
            {/* Regular words */}
            {words.map((word, i) => (
                <span
                    key={i}
                    className="inline-block overflow-hidden mr-[0.22em]"
                    aria-hidden="true"
                >
                    <motion.span
                        className="inline-block"
                        initial={{ y: "110%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{
                            duration: 0.65,
                            ease: [0.16, 1, 0.3, 1],
                            delay: i * 0.07,
                        }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
            {/* Line break on md+ */}
            <br className="hidden md:block" />
            {/* Italic accent words */}
            {italicWords.map((word, i) => (
                <span
                    key={`italic-${i}`}
                    className="inline-block overflow-hidden mr-[0.22em] pr-2 pb-2 -mr-2 -mb-2 relative"
                    aria-hidden="true"
                >
                    <motion.span
                        className="inline-block text-[#2c3725] italic font-['Playfair_Display',serif] font-medium"
                        initial={{ y: "110%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{
                            duration: 0.65,
                            ease: [0.16, 1, 0.3, 1],
                            delay: (allWords + i) * 0.07,
                        }}
                    >
                        {word}
                    </motion.span>
                    {/* Red strikethrough line for "bad website" phrase */}
                    {(allWords + i >= 5) && (
                        <motion.span
                            className="absolute left-0 top-1/2 -translate-y-1/2 h-[2.5px] bg-[#ef4444] rounded-full origin-left"
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1 }}
                            transition={{
                                duration: 0.55,
                                ease: [0.34, 1.56, 0.64, 1],
                                delay: (allWords + i) * 0.07 + 0.48,
                            }}
                            style={{ width: "100%" }}
                        />
                    )}
                </span>
            ))}
            {/* Visually hidden full text for screen readers */}
            <span className="sr-only">Don&apos;t lose clients to a bad website.</span>
        </h1>
    );
}

export default function Hero() {
    const subheadlineWords = ["Don't", "lose", "clients", "to", "a", "bad", "website."];
    const subheadlineDelay = subheadlineWords.length * 0.07 + 0.2;

    return (
        <section id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">

            {/* Soft gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#f2fcf1] to-[#ffffff] pointer-events-none" />

            {/* ── Background Animated Objects ─────────────────── */}

            {/* 1. Tall green pill — drifts up/down + slight sway */}
            <motion.div
                animate={{ y: [0, -44, 0], x: [0, 14, 0], rotate: [0, 8, 0] }}
                transition={{ duration: 9, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
                className="absolute top-[12%] left-[6%] w-16 h-64 bg-gradient-to-b from-[#c1fb9e]/70 to-[#c1fb9e]/10 rounded-full hidden xl:block blur-[3px] pointer-events-none will-change-transform"
            />

            {/* 2. Large soft yellow ring — slow counter-rotation + float */}
            <motion.div
                animate={{ rotate: [0, -360], y: [0, 30, 0] }}
                transition={{ rotate: { duration: 28, ease: "linear", repeat: Infinity }, y: { duration: 8, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" } }}
                className="absolute bottom-[8%] right-[5%] w-[300px] h-[300px] border-[20px] border-[#fadc64]/35 rounded-full hidden xl:block blur-[1px] pointer-events-none will-change-transform"
            />

            {/* 3. Small dashed lavender circle — spins fast, top-center */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 14, ease: "linear", repeat: Infinity }}
                className="absolute top-[18%] left-[42%] w-40 h-40 border-[2.5px] border-dashed border-[#d4cdf8]/70 rounded-full hidden lg:block pointer-events-none will-change-transform"
            />

            {/* 4. Medium green blurred square — rotates + breathes, top-right */}
            <motion.div
                animate={{ rotate: [12, 52, 12], scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
                transition={{ duration: 11, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
                className="absolute top-[8%] right-[10%] w-28 h-28 bg-[#c1fb9e]/40 rounded-[28px] hidden lg:block blur-[6px] pointer-events-none will-change-transform"
            />

            {/* 5. Tiny lavender dot cluster — orbits in a slow ellipse, mid-left */}
            <motion.div
                animate={{ x: [0, 30, 0, -30, 0], y: [0, -20, 0, 20, 0] }}
                transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
                className="absolute top-[50%] left-[2%] flex gap-2 pointer-events-none hidden xl:block will-change-transform"
            >
                {[0, 1, 2].map((i) => (
                    <motion.span
                        key={i}
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.6 }}
                        className="block w-2 h-2 rounded-full bg-[#d4cdf8]"
                    />
                ))}
            </motion.div>

            {/* 6. Small dark filled circle — bounces softly, bottom-left */}
            <motion.div
                animate={{ y: [0, -22, 0], x: [0, 10, 0] }}
                transition={{ duration: 5.5, ease: "easeInOut", repeat: Infinity, repeatType: "mirror", delay: 1 }}
                className="absolute bottom-[20%] left-[14%] w-5 h-5 bg-[#121212]/10 rounded-full hidden lg:block pointer-events-none will-change-transform"
            />

            {/* 7. Thin long horizontal stroke — drifts left/right, below center */}
            <motion.div
                animate={{ x: [0, 40, 0], opacity: [0.15, 0.35, 0.15] }}
                transition={{ duration: 13, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
                className="absolute bottom-[35%] right-[12%] w-48 h-[2px] bg-gradient-to-r from-transparent via-[#a8e68e]/60 to-transparent rounded-full hidden lg:block pointer-events-none will-change-transform"
            />

            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 pb-12">
                <div className="flex flex-col md:flex-row gap-16 md:gap-8 items-start md:items-center">

                    {/* Left / Title area */}
                    <motion.div
                        className="flex-1"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="inline-block bg-[#121212] text-white text-xs font-medium px-4 py-1.5 rounded-full mb-8 relative z-20"
                        >
                            Managed websites for gyms, wellness &amp; coaching.
                        </motion.div>

                        {/* Animation 1: Word-by-word headline reveal */}
                        <AnimatedHeadline />

                        {/* Subheadline fades in 200ms after last word */}
                        <motion.p
                            className="text-lg md:text-xl text-[#4A5568] max-w-xl mb-10 relative z-20 leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.65,
                                ease: "easeOut",
                                delay: subheadlineDelay,
                            }}
                        >
                            We build and manage fast, lead-generating websites for gyms, wellness centers, and coaching businesses. First year of management included in every plan.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 mt-12 relative z-20"
                        >
                            <motion.a
                                whileHover={{ scale: 0.98 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring" as any, stiffness: 400, damping: 15 }}
                                href="#pricing"
                                className="inline-flex items-center justify-center bg-[#121212] text-white text-base font-medium px-8 py-4 rounded-xl hover:bg-black transition-colors"
                            >
                                See Plans &amp; Pricing
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 0.98 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring" as any, stiffness: 400, damping: 15 }}
                                href="#how-it-works"
                                className="inline-flex items-center justify-center bg-[#c1fb9e] text-[#121212] text-base font-medium px-8 py-4 rounded-xl hover:bg-[#b5f58c] transition-colors"
                            >
                                How It Works
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Right / Information Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                        className="w-full md:w-[420px] shrink-0 relative z-20"
                    >
                        <motion.div
                            whileHover={{ y: -8 }}
                            transition={{ type: "spring" as any, stiffness: 300, damping: 20 }}
                            className="bg-[#c1fb9e] rounded-[32px] p-8 pb-12 shadow-sm border border-[#a8e68e]/50 text-[#121212] cursor-default group"
                        >
                            <div className="flex items-center justify-between mb-16">
                                <div
                                    className="w-10 h-10 rounded-full bg-[#121212] flex items-center justify-center text-white origin-center transition-transform duration-500 group-hover:rotate-180"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2L2 7l10 5 10-5-10-5z" /></svg>
                                </div>
                                <span className="text-xs font-semibold tracking-wide uppercase">Always Managed</span>
                            </div>
                            <h2 className="text-3xl font-semibold tracking-tight leading-tight mb-2">
                                More leads. Zero tech headaches.
                            </h2>
                            <p className="text-[#3D4935] text-sm mt-4">
                                We handle the website. You focus on running your business.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Animation 2: Dual-Row Opposing Marquee Ticker */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="lf-ticker w-full bg-white border-y border-black/5 py-4 overflow-hidden mt-auto relative z-30"
            >
                {/* Row 1: scrolls left */}
                <div className="lf-ticker-row-1 flex gap-10 text-[#4A5568] text-sm font-medium tracking-wide uppercase mb-3 w-max">
                    {TICKER_ROW.map((item, i) => (
                        <span key={i} className="flex-shrink-0">
                            {item}
                            <span className="ml-10 text-[#c1fb9e]">·</span>
                        </span>
                    ))}
                </div>
                {/* Row 2: scrolls right */}
                <div className="lf-ticker-row-2 flex gap-10 text-[#4A5568] text-sm font-medium tracking-wide uppercase w-max">
                    {TICKER_ROW.map((item, i) => (
                        <span key={i} className="flex-shrink-0">
                            {item}
                            <span className="ml-10 text-[#c1fb9e]">·</span>
                        </span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
