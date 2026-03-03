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

                {/* Animation 3: Section heading clip-mask reveal */}
                <div className="max-w-2xl mx-auto text-center mb-16" ref={headingRef}>
                    <div className="overflow-hidden">
                        <motion.h2
                            className="text-[32px] sm:text-[44px] font-medium tracking-tight leading-[1] text-[#121212] mb-4"
                            initial={{ y: "100%" }}
                            animate={headingInView ? { y: "0%" } : {}}
                            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                        >
                            Transparent Pricing.
                        </motion.h2>
                    </div>
                    <motion.p
                        className="text-[17px] text-[#4A5568]"
                        initial={{ opacity: 0 }}
                        animate={headingInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.85 + 0.15 }}
                    >
                        One-time build fee. First year of full management included in every plan.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">

                    {/* Plan 1: Starter — enters from left */}
                    <motion.div
                        ref={leftCardRef}
                        initial={{ opacity: 0, x: -24 }}
                        animate={leftCardInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ y: -8 }}
                        style={{ ["--hover-transition" as any]: "y 0.35s cubic-bezier(0.16, 1, 0.3, 1)" }}
                        className="bg-white border border-black/5 rounded-[32px] p-8 flex flex-col shadow-sm cursor-default"
                    >
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-[#121212]">Starter Lead Page</h3>
                        </div>
                        <p className="text-[#4A5568] text-[14px] mb-6">One powerful landing page built to generate calls and enquiries.</p>

                        <div className="flex items-baseline gap-2 mb-8">
                            <span className="text-[36px] tracking-tight font-medium text-[#121212]">₹12,000</span>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1 border-b border-black/5 pb-8">
                            {[
                                "One high-conversion landing page",
                                "Mobile-first design",
                                "Call & WhatsApp enquiry buttons",
                                "Delivered in 2–3 days",
                                "1 year management included",
                            ].map((feat, i) => (
                                <li key={i} className="flex gap-3 items-center text-[#4A5568] text-[14px]">
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
                            className="w-full bg-[#121212] flex items-center justify-center text-white py-3 rounded-xl font-[500] transition-colors"
                        >
                            Get Started
                        </motion.a>
                    </motion.div>

                    {/* Plan 2: Growth — center, no directional slide, shimmer effect */}
                    <motion.div
                        ref={midCardRef}
                        initial={{ opacity: 0, y: 24 }}
                        animate={midCardInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
                        whileHover={{ y: -8 }}
                        className="cursor-default"
                    >
                        <ShimmerCard className="bg-[#f2fcf1] border border-[#a8e68e]/30 rounded-[32px] p-8 flex flex-col h-full relative overflow-hidden">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-xl font-bold text-[#121212]">Growth Website</h3>
                                <span className="bg-[#121212] text-[#f2fcf1] text-[10px] font-[600] uppercase tracking-wide px-3 py-1 rounded-full">recommended</span>
                            </div>
                            <p className="text-[#3D4935] text-[14px] mb-6">A full business website that builds trust and converts visitors into enquiries.</p>

                            <div className="flex items-baseline gap-2 mb-8">
                                <span className="text-[36px] tracking-tight font-medium text-[#121212]">₹25,000</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1 border-b border-black/5 pb-8">
                                {[
                                    "3–5 page business website",
                                    "Services, gallery & testimonials",
                                    "Conversion-focused layout",
                                    "Delivered in 4–6 days",
                                    "1 year management included",
                                ].map((feat, i) => (
                                    <li key={i} className="flex gap-3 items-center text-[#121212] font-medium text-[14px]">
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
                                className="w-full bg-[#121212] flex items-center justify-center text-white py-3 rounded-xl font-[500] transition-colors"
                            >
                                WhatsApp Enquiry
                            </motion.a>
                        </ShimmerCard>
                    </motion.div>

                    {/* Plan 3: Authority — enters from right */}
                    <motion.div
                        ref={rightCardRef}
                        initial={{ opacity: 0, x: 24 }}
                        animate={rightCardInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        whileHover={{ y: -8 }}
                        className="bg-white border border-black/5 rounded-[32px] p-8 flex flex-col shadow-sm cursor-default"
                    >
                        <h3 className="text-xl font-bold text-[#121212] mb-6">Authority Setup</h3>
                        <p className="text-[#4A5568] text-[14px] mb-6">For established gyms and coaching brands that want the best.</p>

                        <div className="flex items-baseline gap-2 mb-8">
                            <span className="text-[36px] tracking-tight font-medium text-[#121212]">₹45,000+</span>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1 border-b border-black/5 pb-8">
                            {[
                                "Premium, fully tailored website",
                                "Advanced enquiry flow & CMS",
                                "Priority delivery & support",
                                "1 year management included",
                            ].map((feat, i) => (
                                <li key={i} className="flex gap-3 items-center text-[#4A5568] text-[14px]">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 shrink-0 text-[#3D4935]"><path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" /></svg>
                                    {feat}
                                </li>
                            ))}
                        </ul>

                        <motion.a
                            whileHover={{ scale: 0.98 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring" as any, stiffness: 400, damping: 15 }}
                            href="mailto:hello@launchflow.dev"
                            className="w-full bg-[#f4f4f5] text-[#121212] flex items-center justify-center py-3 rounded-xl font-[500] hover:bg-[#e4e4e7] transition-colors"
                        >
                            Email for details
                        </motion.a>
                    </motion.div>
                </div>

                {/* Management & Buyout Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-16 max-w-4xl mx-auto bg-[#f8f9fa] rounded-[32px] p-10 border border-black/5"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                        <div>
                            <h4 className="text-xl font-bold text-[#121212] mb-4 flex items-center gap-2">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-[#3D4935]"><path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H5.25a2.25 2.25 0 00-2.25 2.25v1.312c0 .346.065.686.188 1.003L4.5 22.5h15l1.312-4.195a2.25 2.25 0 00.188-1.003V18a2.25 2.25 0 00-2.25-2.25h-3.004c-.703 0-1.402.03-2.09.09m-4.5 0c.85.076 1.698.13 2.55.162m-2.55-.162L10 12h4l.45 3.84m.001 0c.852-.032 1.7-.086 2.55-.162m-2.55.162L14 12h-4l-.45-3.84M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                Website Management
                            </h4>
                            <ul className="space-y-3 text-[#4A5568] text-[14px]">
                                <li><strong className="text-[#121212]">First year:</strong> Included with every plan — no extras.</li>
                                <li><strong className="text-[#121212]">Annual renewal from year 2:</strong>
                                    <ul className="mt-1.5 ml-4 space-y-1 text-[13px]">
                                        <li>Starter — ₹3,000 / year</li>
                                        <li>Growth — ₹5,000 / year</li>
                                        <li>Authority — ₹8,000–10,000 / year</li>
                                    </ul>
                                </li>
                                <li className="pt-1"><strong className="text-[#121212]">Included in management:</strong> Hosting, domain, uptime monitoring, and minor content updates (text, images, contact info).</li>
                                <li className="text-[12px] text-[#4A5568]/70">Redesigns, new pages, and new features are quoted separately.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-[#121212] mb-4 flex items-center gap-2">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-[#3D4935]"><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>
                                How Ownership Works
                            </h4>
                            <ul className="space-y-3 text-[#4A5568] text-[14px]">
                                <li>All websites are delivered as <strong className="text-[#121212]">fully managed services</strong> by default. Hosting and code remain under LaunchFlow.</li>
                                <li>This keeps your site fast, secure, and always up — without you lifting a finger.</li>
                                <li className="pt-1 text-[13px] text-[#4A5568]/80">
                                    <strong className="text-[#121212]">Optional code buyout</strong> (one-time):
                                    <ul className="mt-1.5 ml-4 space-y-1">
                                        <li>Starter — ₹25,000</li>
                                        <li>Growth — ₹40,000</li>
                                        <li>Authority — on request</li>
                                    </ul>
                                </li>
                                <li className="text-[12px] text-[#4A5568]/70">After buyout, client manages hosting and changes independently. LaunchFlow management ends.</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
