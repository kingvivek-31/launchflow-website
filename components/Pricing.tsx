"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

function ShimmerCard({ children, className }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const timer = setTimeout(() => {
            el.classList.add("lf-shimmer-active");
            setTimeout(() => el.classList.remove("lf-shimmer-active"), 900);
        }, 1200);
        return () => clearTimeout(timer);
    }, []);

    const handleMouseEnter = () => {
        const el = ref.current;
        if (!el) return;
        el.classList.remove("lf-shimmer-active");
        void el.offsetWidth;
        el.classList.add("lf-shimmer-active");
        setTimeout(() => el.classList.remove("lf-shimmer-active"), 900);
    };

    return (
        <div ref={ref} className={`lf-shimmer-card ${className ?? ""}`} onMouseEnter={handleMouseEnter}>
            {children}
        </div>
    );
}

const packages = [
    {
        id: "foundation",
        name: "Foundation",
        tag: "One-Time Setup",
        price: "₹15,000",
        priceSuffix: "– ₹25,000",
        priceNote: "One-time. Yours forever.",
        outcome: "Appear on Google and stop being invisible to people searching for a gym in your area.",
        outcomes: [
            "Professional gym website (mobile-first, fast)",
            "Google Business Profile fully optimised",
            "Show up in 'gym near me' searches",
            "WhatsApp enquiry button",
            "First-year domain & hosting included",
        ],
        cta: "Get Started",
        accentBg: "bg-white",
        accentBorder: "border-gray-200",
        ctaStyle: "bg-gray-100 text-[#121212] border border-gray-300 hover:bg-gray-200",
        isPopular: false,
    },
    {
        id: "growth",
        name: "Growth",
        tag: "Monthly Subscription",
        price: "₹3,999",
        priceSuffix: "– ₹5,999/mo",
        priceNote: "Cancel anytime.",
        outcome: "Instant WhatsApp replies to every enquiry, 24/7 — so you never lose a member because you were busy.",
        outcomes: [
            "WhatsApp auto-responder live 24/7",
            "Answers fees, timings, location, trial offers",
            "Enquiry tracking dashboard",
            "Monthly Google ranking report",
            "Priority support",
        ],
        cta: "Start Growing",
        accentBg: "bg-[#121212]",
        accentBorder: "border-[#121212]",
        ctaStyle: "bg-[#c1fb9e] text-[#121212] hover:bg-[#b5f58c] font-bold shadow-[0_0_20px_rgba(193,251,158,0.3)]",
        isPopular: true,
    },
    {
        id: "full-system",
        name: "Full System",
        tag: "Best Value",
        price: "₹6,000",
        priceSuffix: "/year",
        priceNote: "Website + GBP managed for you.",
        outcome: "We maintain your website and Google profile every month so your ranking stays strong and your gym keeps getting found.",
        outcomes: [
            "Everything in Foundation",
            "Annual website maintenance",
            "Google Business Profile managed monthly",
            "Review generation system",
            "Content updates & photo refreshes",
        ],
        cta: "Talk to Us",
        accentBg: "bg-white",
        accentBorder: "border-gray-200",
        ctaStyle: "bg-gray-100 text-[#121212] border border-gray-300 hover:bg-gray-200",
        isPopular: false,
    },
];

const CheckIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
);

export default function Pricing() {
    const headingRef = useRef<HTMLDivElement>(null);
    const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

    return (
        <section id="pricing" className="py-24 sm:py-32 bg-[#f9f9f9]">
            <div className="max-w-5xl mx-auto px-6 sm:px-8">

                {/* Heading */}
                <div className="text-center mb-16" ref={headingRef}>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={headingInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 bg-[#c1fb9e]/30 border border-[#a8e68e]/40 text-[#1A3D0A] text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-widest"
                    >
                        Packages
                    </motion.div>

                    <div className="overflow-hidden">
                        <motion.h2
                            className="text-[32px] sm:text-[48px] font-bold tracking-tight leading-[1.1] text-[#121212] mb-4"
                            initial={{ y: "100%" }}
                            animate={headingInView ? { y: "0%" } : {}}
                            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                        >
                            Pick your starting point.
                        </motion.h2>
                    </div>

                    <motion.p
                        className="text-[#4A5568] text-lg max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={headingInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        All packages come with the same guarantee — 15+ enquiries/month or we work free.
                    </motion.p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    {packages.map((pkg, i) => (
                        <motion.div
                            key={pkg.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={headingInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.15 * i }}
                            className={`relative ${pkg.isPopular ? "z-10 md:-mx-2" : ""}`}
                        >
                            {pkg.isPopular ? (
                                <ShimmerCard className={`${pkg.accentBg} border ${pkg.accentBorder} rounded-[32px] p-8 flex flex-col h-full shadow-2xl`}>
                                    <PopularCardContent pkg={pkg} />
                                </ShimmerCard>
                            ) : (
                                <div className={`${pkg.accentBg} border ${pkg.accentBorder} rounded-[32px] p-8 flex flex-col h-full hover:border-black/20 transition-colors md:scale-[0.96] md:mt-0`}>
                                    <RegularCardContent pkg={pkg} />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Testimonials placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={headingInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                    {[1, 2].map((n) => (
                        <div
                            key={n}
                            className="bg-white border-2 border-dashed border-[#a8e68e]/50 rounded-3xl p-8"
                        >
                            {/* [TESTIMONIAL] */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} viewBox="0 0 24 24" fill="#fadc64" className="w-5 h-5">
                                        <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-[#4A5568] text-base italic mb-4 leading-relaxed">
                                &ldquo;[TESTIMONIAL — Real quote from a gym owner goes here]&rdquo;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#c1fb9e]/40 border-2 border-dashed border-[#a8e68e] flex items-center justify-center text-xs font-bold text-[#1A3D0A]">
                                    ?
                                </div>
                                <div>
                                    <p className="font-semibold text-sm text-[#121212]">[Gym Owner Name]</p>
                                    <p className="text-xs text-[#4A5568]">[Gym Name], [Area] — [City]</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function PopularCardContent({ pkg }: { pkg: typeof packages[0] }) {
    return (
        <>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#c1fb9e] text-[#121212] text-xs font-black uppercase tracking-widest py-1.5 px-5 rounded-b-xl">
                Most Popular
            </div>
            <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                    <span className="text-xs font-semibold bg-white/10 text-white/60 px-2.5 py-1 rounded-full">{pkg.tag}</span>
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-black text-white">{pkg.price}</span>
                    <span className="text-white/60 text-sm">{pkg.priceSuffix}</span>
                </div>
                <p className="text-white/40 text-xs mb-6">{pkg.priceNote}</p>
                <p className="text-white/70 text-sm leading-relaxed mb-6 pb-6 border-b border-white/10">
                    {pkg.outcome}
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                    {pkg.outcomes.map((o) => (
                        <li key={o} className="flex gap-3 text-sm text-white/70">
                            <span className="text-[#c1fb9e] mt-0.5"><CheckIcon /></span>
                            {o}
                        </li>
                    ))}
                </ul>
            </div>
            <a
                href="https://wa.me/918595669560?text=Hi%20LaunchFlow%2C%20I'm%20interested%20in%20the%20Growth%20plan"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full block text-center py-4 rounded-xl mt-auto transition-colors ${pkg.ctaStyle}`}
            >
                {pkg.cta}
            </a>
        </>
    );
}

function RegularCardContent({ pkg }: { pkg: typeof packages[0] }) {
    const waText = encodeURIComponent(`Hi LaunchFlow, I'm interested in the ${pkg.name} package`);
    return (
        <>
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-[#121212]">{pkg.name}</h3>
                <span className="text-xs font-semibold bg-gray-100 text-[#4A5568] px-2.5 py-1 rounded-full">{pkg.tag}</span>
            </div>
            <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-black text-[#121212]">{pkg.price}</span>
                <span className="text-[#4A5568] text-sm">{pkg.priceSuffix}</span>
            </div>
            <p className="text-[#4A5568] text-xs mb-6">{pkg.priceNote}</p>
            <p className="text-[#4A5568] text-sm leading-relaxed mb-6 pb-6 border-b border-gray-100 flex-1">
                {pkg.outcome}
            </p>
            <ul className="space-y-3 mb-8 flex-1">
                {pkg.outcomes.map((o) => (
                    <li key={o} className="flex gap-3 text-sm text-[#4A5568]">
                        <span className="text-gray-800 mt-0.5"><CheckIcon /></span>
                        {o}
                    </li>
                ))}
            </ul>
            <a
                href={`https://wa.me/918595669560?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full block text-center py-3.5 rounded-xl mt-auto transition-colors ${pkg.ctaStyle}`}
            >
                {pkg.cta}
            </a>
        </>
    );
}
