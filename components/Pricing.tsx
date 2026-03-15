"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

// Animation 6: Pricing shimmer card
function ShimmerCard({ children, className }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);

    // Trigger shimmer once on load (after 1.2s) and again on hover
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
        // Force reflow so the animation replays
        void el.offsetWidth;
        el.classList.add("lf-shimmer-active");
        setTimeout(() => el.classList.remove("lf-shimmer-active"), 900);
    };

    return (
        <div
            ref={ref}
            className={`lf-shimmer-card ${className ?? ""}`}
            onMouseEnter={handleMouseEnter}
        >
            {children}
        </div>
    );
}

export default function Pricing() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

    const leftCardRef = useRef<HTMLDivElement>(null);
    const leftCardInView = useInView(leftCardRef, { once: true, margin: "-80px" });

    const midCardRef = useRef<HTMLDivElement>(null);
    const midCardInView = useInView(midCardRef, { once: true, margin: "-80px" });

    const rightCardRef = useRef<HTMLDivElement>(null);
    const rightCardInView = useInView(rightCardRef, { once: true, margin: "-80px" });

    return (
        <section id="pricing" className="py-24 sm:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8" ref={sectionRef}>

                {/* Section heading with problems and solutions */}
                <div className="max-w-4xl mx-auto text-center mb-20" ref={headingRef}>
                    <div className="overflow-hidden">
                        <motion.h2
                            className="text-[32px] sm:text-[44px] font-medium tracking-tight leading-[1] text-[#121212] mb-4"
                            initial={{ y: "100%" }}
                            animate={headingInView ? { y: "0%" } : {}}
                            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                        >
                            Why Most Local Business Websites Fail
                        </motion.h2>
                    </div>
                    <motion.p
                        className="text-[17px] text-[#4A5568] mb-12"
                        initial={{ opacity: 0 }}
                        animate={headingInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.85 + 0.15 }}
                    >
                        Most gyms and wellness centers have websites that actually hurt their business. Here are the biggest problems:
                    </motion.p>

                    {/* Problem cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={headingInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="bg-red-50 border border-red-100 rounded-[20px] p-6 text-left"
                        >
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 text-red-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Slow & Broken</h3>
                            <p className="text-sm text-gray-600">Takes 10+ seconds to load. Crashes on mobile. Customers leave before they can even see your services.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={headingInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="bg-orange-50 border border-orange-100 rounded-[20px] p-6 text-left"
                        >
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 text-orange-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">No Lead Capture</h3>
                            <p className="text-sm text-gray-600">Visitors can't easily contact you. No clear calls-to-action. No phone or WhatsApp buttons. Leads slip away.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={headingInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="bg-yellow-50 border border-yellow-100 rounded-[20px] p-6 text-left"
                        >
                            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 text-yellow-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Invisible on Google</h3>
                            <p className="text-sm text-gray-600">Poor SEO. Incomplete Google Business Profile. When customers search "gym near me", they find your competitors.</p>
                        </motion.div>
                    </div>

                    {/* How LaunchFlow fixes it */}
                    <div className="overflow-hidden">
                        <motion.h3
                            className="text-[28px] sm:text-[36px] font-medium tracking-tight leading-[1.1] text-[#121212] mb-6"
                            initial={{ y: "100%" }}
                            animate={headingInView ? { y: "0%" } : {}}
                            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                        >
                            How LaunchFlow Fixes It
                        </motion.h3>
                    </div>
                    <motion.p
                        className="text-[17px] text-[#4A5568] mb-12"
                        initial={{ opacity: 0 }}
                        animate={headingInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
                    >
                        We build fast, conversion-focused websites with Google optimization that actually bring you customers:
                    </motion.p>

                    {/* Solution cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={headingInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.7 }}
                            className="bg-green-50 border border-green-100 rounded-[20px] p-6 text-left"
                        >
                            <div className="w-12 h-12 bg-[#c1fb9e] rounded-full flex items-center justify-center mb-4">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 text-green-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Lightning Fast</h3>
                            <p className="text-sm text-gray-600">Loads in under 2 seconds. Perfect on mobile. Customers can browse your services without frustration.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={headingInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.8 }}
                            className="bg-blue-50 border border-blue-100 rounded-[20px] p-6 text-left"
                        >
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 text-blue-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">WhatsApp Leads</h3>
                            <p className="text-sm text-gray-600">Clear contact buttons. Easy WhatsApp integration. Visitors can reach you instantly when they're ready to join.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={headingInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.9 }}
                            className="bg-purple-50 border border-purple-100 rounded-[20px] p-6 text-left"
                        >
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 text-purple-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.2-5.2m0 0A7.5 7.5 0 1 0 10.8 10.8a7.5 7.5 0 0 0 5 5z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Found on Google</h3>
                            <p className="text-sm text-gray-600">Optimized Google Business Profile. SEO-ready website. When customers search "gym near me", they find YOU first.</p>
                        </motion.div>
                    </div>

                    <motion.h3
                        id="simple-pricing"
                        className="text-[28px] sm:text-[36px] font-medium tracking-tight leading-[1.1] text-[#121212] mb-6"
                        initial={{ opacity: 0 }}
                        animate={headingInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 1.1 }}
                    >
                        Simple Pricing
                    </motion.h3>
                    <motion.p
                        className="text-[17px] text-[#4A5568]"
                        initial={{ opacity: 0 }}
                        animate={headingInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
                    >
                        One-time setup. Ongoing management keeps everything running smoothly.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">

                    {/* Plan 1: Starter — enters from left */}
                    <motion.div
                        ref={leftCardRef}
                        initial={{ opacity: 0, x: -24 }}
                        animate={leftCardInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ y: -8, scale: 1.01 }}
                        style={{ ["--hover-transition" as any]: "y 0.35s cubic-bezier(0.16, 1, 0.3, 1)" }}
                        className="bg-white border border-black/5 rounded-[32px] p-8 flex flex-col shadow-sm cursor-default"
                    >
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-[#121212]">Quick Start</h3>
                        </div>
                        <p className="text-[#4A5568] text-[16px] mb-6">Get found on Google Maps and start getting leads fast.</p>

                        <div className="flex items-baseline gap-2 mb-8">
                            <span className="text-[42px] tracking-tight font-medium text-[#121212]">₹12,000</span>
                            <span className="text-[#4A5568] text-sm">setup</span>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1 border-b border-black/5 pb-8">
                            {[
                                "Google Business Profile optimization",
                                "Fast, mobile-friendly website",
                                "WhatsApp and phone lead capture",
                                "Ready in 3-5 days",
                            ].map((feat, i) => (
                                <li key={i} className="flex gap-3 items-center text-[#4A5568] text-[15px]">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 shrink-0 text-[#3D4935]"><path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" /></svg>
                                    {feat}
                                </li>
                            ))}
                        </ul>

                        <motion.a
                            whileHover={{ scale: 0.98 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring" as any, stiffness: 400, damping: 15 }}
                            href="https://wa.me/919582915196"
                            className="w-full bg-[#121212] text-white py-4 rounded-xl font-[500] hover:bg-[#2d2d2d] transition-colors text-center"
                        >
                            Book Free Audit
                        </motion.a>
                    </motion.div>

                    {/* Plan 2: Growth — center, no directional slide, shimmer effect */}
                    <motion.div
                        ref={midCardRef}
                        initial={{ opacity: 0, y: 24 }}
                        animate={midCardInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
                        whileHover={{ y: -8, scale: 1.01 }}
                        className="cursor-default"
                    >
                        <ShimmerCard className="bg-[#f2fcf1] border border-[#a8e68e]/30 rounded-[32px] p-8 flex flex-col h-full relative overflow-hidden">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-2xl font-bold text-[#121212]">Growth Package</h3>
                                <span className="bg-[#121212] text-[#f2fcf1] text-[10px] font-[600] uppercase tracking-wide px-3 py-1 rounded-full">most popular</span>
                            </div>
                            <p className="text-[#3D4935] text-[16px] mb-6">Complete system to win Google searches and convert visitors into customers.</p>

                            <div className="flex items-baseline gap-2 mb-8">
                                <span className="text-[42px] tracking-tight font-medium text-[#121212]">₹25,000</span>
                                <span className="text-[#3D4935] text-sm">setup</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1 border-b border-black/5 pb-8">
                                {[
                                    "Everything in Quick Start",
                                    "Full business website with gallery",
                                    "Customer testimonials section",
                                    "SEO optimization for local searches",
                                    "Ready in 5-7 days",
                                ].map((feat, i) => (
                                    <li key={i} className="flex gap-3 items-center text-[#121212] font-medium text-[15px]">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0 text-[#3D4935]"><path d="M12 2L2 7l10 5 10-5-10-5z" /></svg>
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <motion.a
                                whileHover={{ scale: 0.98 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring" as any, stiffness: 400, damping: 15 }}
                                href="https://wa.me/919582915196"
                                className="w-full bg-[#121212] text-white py-4 rounded-xl font-[500] hover:bg-[#2d2d2d] transition-colors text-center"
                            >
                                Book Free Audit
                            </motion.a>
                        </ShimmerCard>
                    </motion.div>

                    {/* Plan 3: Authority — enters from right */}
                    <motion.div
                        ref={rightCardRef}
                        initial={{ opacity: 0, x: 24 }}
                        animate={rightCardInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        whileHover={{ y: -8, scale: 1.01 }}
                        className="bg-white border border-black/5 rounded-[32px] p-8 flex flex-col shadow-sm cursor-default"
                    >
                        <h3 className="text-2xl font-bold text-[#121212] mb-6">Premium Setup</h3>
                        <p className="text-[#4A5568] text-[16px] mb-6">For established businesses that want to dominate local search results.</p>

                        <div className="flex items-baseline gap-2 mb-8">
                            <span className="text-[42px] tracking-tight font-medium text-[#121212]">₹45,000+</span>
                            <span className="text-[#4A5568] text-sm">setup</span>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1 border-b border-black/5 pb-8">
                            {[
                                "Everything in Growth Package",
                                "Advanced booking system integration",
                                "Custom branding and design",
                                "Priority support and delivery",
                            ].map((feat, i) => (
                                <li key={i} className="flex gap-3 items-center text-[#4A5568] text-[15px]">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 shrink-0 text-[#3D4935]"><path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" /></svg>
                                    {feat}
                                </li>
                            ))}
                        </ul>

                        <motion.a
                            whileHover={{ scale: 0.98 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring" as any, stiffness: 400, damping: 15 }}
                            href="https://wa.me/919582915196"
                            className="w-full bg-[#f4f4f5] text-[#121212] py-4 rounded-xl font-[500] hover:bg-[#e4e4e7] transition-colors text-center"
                        >
                            Contact for Details
                        </motion.a>
                    </motion.div>
                </div>

                {/* LaunchFlow Care Plan Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-16 max-w-4xl mx-auto bg-[#f8f9fa] rounded-[32px] p-10 border border-black/5"
                >
                    <div className="text-center mb-8">
                        <h4 className="text-2xl font-bold text-[#121212] mb-4">
                            LaunchFlow Care Plan (Optional)
                        </h4>
                        <div className="flex items-baseline justify-center gap-2 mb-4">
                            <span className="text-3xl font-bold text-[#121212]">₹5,000</span>
                            <span className="text-[#4A5568] text-lg">per year</span>
                            <span className="text-sm text-[#4A5568]/70">after the first year</span>
                        </div>
                        <p className="text-[#4A5568] text-[16px] max-w-2xl mx-auto">
                            We handle all the technical details so you can focus on your business.
                            You can also choose to manage the website yourself if you prefer.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h5 className="text-lg font-semibold text-[#121212] mb-4">What's Included:</h5>
                            <ul className="space-y-3">
                                {[
                                    "Hosting and security",
                                    "Domain renewal",
                                    "Website monitoring",
                                    "Up to 5 small updates per year",
                                    "Technical support"
                                ].map((feat, i) => (
                                    <li key={i} className="flex gap-3 items-center text-[#4A5568] text-[14px]">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 shrink-0 text-[#3D4935]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                        </svg>
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h5 className="text-lg font-semibold text-[#121212] mb-4">Alternative Option:</h5>
                            <div className="bg-white rounded-[20px] p-6 border border-[#e2e2e2]">
                                <h6 className="font-semibold text-[#121212] mb-2">Self-Managed</h6>
                                <p className="text-[#4A5568] text-sm">
                                    Prefer to handle hosting and updates yourself? We'll provide full training and documentation to manage your website independently.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
