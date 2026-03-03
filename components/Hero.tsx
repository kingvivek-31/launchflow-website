"use client";

import { motion } from "framer-motion";

const TICKER_ITEMS = [
    "GYMS", "WELLNESS CENTERS", "COACHING", "BOXING GYMS", "YOGA STUDIOS", "FITNESS BRANDS"
];
const TICKER_FULL = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

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

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">

            {/* Soft gradient background matching Humanity.org */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#f2fcf1] to-[#ffffff] pointer-events-none" />

            {/* Dynamic Animated Background Objects (Optimized) */}
            <motion.div
                animate={{ y: [0, -50, 0], x: [0, 20, 0], rotate: [0, 90, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                className="absolute top-[15%] left-[8%] w-20 h-72 bg-gradient-to-br from-[#c1fb9e]/80 to-[#c1fb9e]/20 rounded-full hidden xl:block blur-[2px] pointer-events-none will-change-transform"
            />
            <motion.div
                animate={{ y: [0, 50, 0], x: [0, -30, 0], rotate: [0, -180, 0], scale: [1, 1.15, 1] }}
                transition={{ duration: 7, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-[10%] right-[8%] w-[320px] h-[320px] border-[24px] border-[#fadc64]/40 rounded-full hidden xl:block blur-[1px] pointer-events-none will-change-transform"
            />
            <motion.div
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ duration: 12, ease: "linear", repeat: Infinity }}
                className="absolute top-[25%] left-[45%] w-48 h-48 border-[3px] border-dashed border-[#d4cdf8]/80 rounded-full hidden lg:block opacity-90 pointer-events-none will-change-transform"
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
                            Managed websites for gyms, wellness & coaching.
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl sm:text-6xl md:text-[76px] font-[500] leading-[1.05] tracking-tight text-[#121212] mb-6 relative z-20"
                        >
                            Don&apos;t lose clients <br className="hidden md:block" />
                            to a <span className="text-[#3D4935]/80 italic">bad website.</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl text-[#4A5568] max-w-xl mb-10 relative z-20 leading-relaxed"
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
                                See Plans & Pricing
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

                    {/* Right / Information Card (similar to humanity identity card design) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                        className="w-full md:w-[420px] shrink-0 relative z-20"
                    >
                        <motion.div
                            whileHover={{ y: -8 }}
                            transition={{ type: "spring" as any as any, stiffness: 300, damping: 20 }}
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

            {/* Ticker at the bottom */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="w-full bg-white border-y border-black/5 py-5 overflow-hidden mt-auto relative z-30"
            >
                <div className="animate-marquee flex gap-12 text-[#4A5568] text-sm font-medium tracking-wide uppercase">
                    {TICKER_FULL.map((item, i) => (
                        <span key={i} className="flex-shrink-0">{item}</span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
