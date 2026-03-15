"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.2-5.2m0 0A7.5 7.5 0 1 0 10.8 10.8a7.5 7.5 0 0 0 5 5z" />
            </svg>
        ),
        title: "Customer searches",
        description: "\"gym near me\""
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
        ),
        title: "Sees Google Maps",
        description: "Compares top results"
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
        ),
        title: "Compares businesses",
        description: "Reviews, photos, website"
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
        ),
        title: "Calls or WhatsApps",
        description: "Becomes a customer"
    }
];

export default function CustomerJourney() {
    const headingRef = useRef<HTMLDivElement>(null);
    const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

    return (
        <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-6 sm:px-8">
                
                {/* Section heading */}
                <div className="text-center mb-12" ref={headingRef}>
                    <div className="overflow-hidden">
                        <motion.h2
                            className="text-[28px] sm:text-[36px] font-medium tracking-tight leading-[1.1] text-[#121212] mb-4"
                            initial={{ y: "100%" }}
                            animate={headingInView ? { y: "0%" } : {}}
                            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                        >
                            How customers find businesses today
                        </motion.h2>
                    </div>
                    <motion.p
                        className="text-[16px] leading-[1.6] text-[#4A5568] max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={headingInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                    >
                        Understanding this process is key to getting more customers for your business.
                    </motion.p>
                </div>

                {/* Customer journey steps */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={headingInView ? { opacity: 1, y: 0 } : {}}
                            whileHover={{ y: -8, scale: 1.03 }}
                            transition={{ duration: 0.6, delay: 0.3 + (i * 0.1), type: "spring", stiffness: 300 }}
                            className="text-center relative bg-white p-6 rounded-2xl hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow cursor-default"
                        >
                            {/* Step number */}
                            <div className="w-12 h-12 bg-[#c1fb9e] rounded-full flex items-center justify-center mx-auto mb-4 text-[#1A3D0A]">
                                {step.icon}
                            </div>
                            
                            {/* Arrow connector (except for last item) */}
                            {i < steps.length - 1 && (
                                <div className="hidden md:block absolute top-6 left-[calc(100%_-_12px)] w-6 text-[#c1fb9e]">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06L19.19 12l-2.47-2.47a.75.75 0 010-1.06zM1.25 12a.75.75 0 01.75-.75h16a.75.75 0 010 1.5H2a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            )}
                            
                            <h3 className="text-lg font-semibold text-[#121212] mb-2">{step.title}</h3>
                            <p className="text-sm text-[#4A5568] font-medium">{step.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* LaunchFlow optimization callout */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={headingInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="bg-[#f2fcf1] border border-[#a8e68e]/30 rounded-[24px] p-8 text-center"
                >
                    <h3 className="text-xl font-semibold text-[#121212] mb-3">
                        LaunchFlow optimizes this entire process
                    </h3>
                    <p className="text-[#3D4935] text-[15px] leading-relaxed max-w-2xl mx-auto">
                        We make sure your business shows up prominently on Google Maps, looks professional and trustworthy,
                        and has a fast website that converts visitors into customers through clear calls-to-action.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}