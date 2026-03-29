"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const TICKER_ITEMS = [
    "ROHINI", "DWARKA", "JANAKPURI", "PITAMPURA", "RAJOURI GARDEN", "PATEL NAGAR", "LAXMI NAGAR", "GREATER KAILASH", "SAKET", "NOIDA", "GURGAON", "FARIDABAD"
];

const TICKER_ROW = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

const springTransition = {
    type: "spring" as const,
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

function AnimatedHeadline() {
    const line1 = ["Get", "15+", "new", "members"];
    const line2Words = ["every"];
    const italicWords = ["single month."];

    return (
        <h1 className="text-5xl sm:text-6xl md:text-[72px] font-[700] leading-[1.05] tracking-tight text-[#121212] mb-6 relative z-20">
            {line1.map((word, i) => (
                <span
                    key={i}
                    className="inline-block overflow-hidden mr-[0.2em]"
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
            <br />
            {line2Words.map((word, i) => (
                <span
                    key={`l2-${i}`}
                    className="inline-block overflow-hidden mr-[0.2em]"
                    aria-hidden="true"
                >
                    <motion.span
                        className="inline-block"
                        initial={{ y: "110%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{
                            duration: 0.65,
                            ease: [0.16, 1, 0.3, 1],
                            delay: (line1.length + i) * 0.07,
                        }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
            {italicWords.map((word, i) => (
                <span
                    key={`italic-${i}`}
                    className="inline-block overflow-hidden mr-[0.2em] relative"
                    aria-hidden="true"
                >
                    <motion.span
                        className="inline-block text-[#2c3725] italic font-['Playfair_Display',serif] font-medium"
                        initial={{ y: "110%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{
                            duration: 0.65,
                            ease: [0.16, 1, 0.3, 1],
                            delay: (line1.length + line2Words.length + i) * 0.07,
                        }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
            <span className="sr-only">Get 15+ new members every single month.</span>
        </h1>
    );
}

export default function Hero() {
    const totalWords = 4 + 1 + 1; // line1 + line2 + italic
    const subheadlineDelay = totalWords * 0.07 + 0.2;

    return (
        <section id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">

            {/* Soft gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#f2fcf1] to-[#ffffff] pointer-events-none" />

            {/* Background animated objects */}
            <motion.div
                animate={{ y: [0, -44, 0], x: [0, 14, 0], rotate: [0, 8, 0] }}
                transition={{ duration: 9, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
                className="absolute top-[12%] left-[6%] w-16 h-64 bg-gradient-to-b from-[#c1fb9e]/70 to-[#c1fb9e]/10 rounded-full hidden xl:block blur-[3px] pointer-events-none will-change-transform"
            />
            <motion.div
                animate={{ rotate: [0, -360], y: [0, 30, 0] }}
                transition={{ rotate: { duration: 28, ease: "linear", repeat: Infinity }, y: { duration: 8, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" } }}
                className="absolute bottom-[8%] right-[5%] w-[300px] h-[300px] border-[20px] border-[#fadc64]/35 rounded-full hidden xl:block blur-[1px] pointer-events-none will-change-transform"
            />
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 14, ease: "linear", repeat: Infinity }}
                className="absolute top-[18%] left-[42%] w-40 h-40 border-[2.5px] border-dashed border-[#d4cdf8]/70 rounded-full hidden lg:block pointer-events-none will-change-transform"
            />
            <motion.div
                animate={{ rotate: [12, 52, 12], scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
                transition={{ duration: 11, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
                className="absolute top-[8%] right-[10%] w-28 h-28 bg-[#c1fb9e]/40 rounded-[28px] hidden lg:block blur-[6px] pointer-events-none will-change-transform"
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
                            For gyms & fitness studios in Delhi NCR
                        </motion.div>

                        <AnimatedHeadline />

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
                            We put your gym on page 1 of Google so that when someone in your area searches "gym near me" — they find <em>you</em>, walk in, and join. No paid ads. No cold calls. Just consistent enquiries.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 mt-12 relative z-20"
                        >
                            <motion.a
                                whileHover={{ scale: 0.98 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring" as const, stiffness: 400, damping: 15 }}
                                href="https://wa.me/918595669560?text=Hi%20LaunchFlow%2C%20I%20want%20to%20get%20more%20members%20for%20my%20gym"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white text-base font-semibold px-8 py-4 rounded-xl hover:bg-[#20BE5A] transition-colors shadow-[0_4px_20px_rgba(37,211,102,0.3)]"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                                    <path d="M11.99 0C5.373 0 0 5.373 0 11.99c0 2.112.554 4.094 1.524 5.813L0 23.952l6.334-1.493A11.93 11.93 0 0011.99 24C18.607 24 24 18.627 24 11.99 24 5.373 18.627 0 11.99 0zm0 21.937a9.928 9.928 0 01-5.07-1.378l-.364-.216-3.762.887.9-3.663-.237-.376A9.928 9.928 0 012.063 11.99C2.063 6.513 6.513 2.063 11.99 2.063c5.477 0 9.927 4.45 9.927 9.927 0 5.477-4.45 9.947-9.927 9.947z"/>
                                </svg>
                                WhatsApp Us — Free Audit
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 0.98 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring" as const, stiffness: 400, damping: 15 }}
                                href="#pricing"
                                className="inline-flex items-center justify-center bg-[#121212] text-white text-base font-medium px-8 py-4 rounded-xl hover:bg-black transition-colors"
                            >
                                See Plans & Pricing
                            </motion.a>
                        </motion.div>

                        <motion.p
                            className="mt-5 text-sm text-[#4A5568] relative z-20"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: subheadlineDelay + 0.4 }}
                        >
                            🤝 15+ enquiries/month guaranteed — or we work free until you get them
                        </motion.p>
                    </motion.div>

                    {/* Right / Stat Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                        className="w-full md:w-[380px] shrink-0 relative z-20"
                    >
                        <motion.div
                            whileHover={{ y: -8 }}
                            transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
                            className="bg-[#121212] rounded-[32px] p-8 pb-10 shadow-2xl text-white cursor-default group"
                        >
                            <div className="flex items-center justify-between mb-12">
                                <div className="w-10 h-10 rounded-full bg-[#c1fb9e] flex items-center justify-center text-[#121212] origin-center transition-transform duration-500 group-hover:rotate-180">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                    </svg>
                                </div>
                                <span className="text-xs font-semibold tracking-wide uppercase text-white/40">Live Results</span>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">New enquiries this month</p>
                                    <p className="text-[#c1fb9e] text-4xl font-bold">23</p>
                                </div>
                                <div className="h-px bg-white/10" />
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-white/40 text-xs mb-1">Avg. cost per lead</p>
                                        <p className="text-white font-semibold text-lg">₹0</p>
                                        <p className="text-white/30 text-xs">No paid ads</p>
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-xs mb-1">Google rank</p>
                                        <p className="text-white font-semibold text-lg">#1–3</p>
                                        <p className="text-white/30 text-xs">Local Maps pack</p>
                                    </div>
                                </div>
                                <div className="h-px bg-white/10" />
                                <p className="text-white/50 text-xs leading-relaxed">
                                    📍 Serving gyms across Rohini, Dwarka, Pitampura, Patel Nagar & more
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Ticker — Delhi NCR areas */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="lf-ticker w-full bg-white border-y border-black/5 py-4 overflow-hidden mt-auto relative z-30"
            >
                <div className="lf-ticker-row-1 flex gap-10 text-[#4A5568] text-sm font-medium tracking-wide uppercase mb-3 w-max">
                    {TICKER_ROW.map((item, i) => (
                        <span key={i} className="flex-shrink-0">
                            {item}
                            <span className="ml-10 text-[#c1fb9e]">·</span>
                        </span>
                    ))}
                </div>
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
