"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const problems = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
        ),
        title: "Slow Load Times",
        description: "Your website takes 8+ seconds to load. 53% of mobile users abandon sites that take longer than 3 seconds. You're bleeding potential customers.",
        stat: "53% abandon after 3s",
        color: "from-red-500 to-red-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-200"
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
        ),
        title: "Dead-End Google Maps Profiles",
        description: "Incomplete profiles, no reviews management, outdated photos. Customers can't find basic info like hours, services, or how to contact you.",
        stat: "76% check hours first",
        color: "from-orange-500 to-orange-600", 
        bgColor: "bg-orange-50",
        borderColor: "border-orange-200"
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
        ),
        title: "Missed After-Hours Calls",
        description: "60% of fitness inquiries happen outside business hours. No automated responses, no lead capture system. Prospects call competitors instead.",
        stat: "60% call after hours", 
        color: "from-yellow-500 to-yellow-600",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-200"
    }
];

export default function LeakyBucket() {
    const headingRef = useRef<HTMLDivElement>(null);
    const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

    return (
        <section className="py-24 sm:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent)] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                
                {/* Section heading */}
                <div className="text-center mb-16" ref={headingRef}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={headingInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium px-4 py-2 rounded-full mb-6"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                        </svg>
                        The Leaky Bucket Problem
                    </motion.div>
                    
                    <div className="overflow-hidden">
                        <motion.h2
                            className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6"
                            initial={{ y: "100%" }}
                            animate={headingInView ? { y: "0%" } : {}}
                            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                        >
                            Your business is bleeding customers
                        </motion.h2>
                    </div>
                    
                    <motion.p
                        className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={headingInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Every day, potential customers find your business online but slip away due to these critical gaps. 
                        Here's what's costing you money right now.
                    </motion.p>
                </div>

                {/* Problem cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {problems.map((problem, i) => (
                        <motion.div
                            key={problem.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={headingInView ? { opacity: 1, y: 0 } : {}}
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ duration: 0.8, delay: 0.1 * i, type: "spring", stiffness: 200 }}
                            className={`${problem.bgColor} ${problem.borderColor} border-2 rounded-3xl p-8 relative group cursor-default overflow-hidden`}
                        >
                            {/* Gradient overlay on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${problem.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                            
                            {/* Icon with gradient background */}
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${problem.color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {problem.icon}
                            </div>
                            
                            {/* Content */}
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                                {problem.title}
                            </h3>
                            
                            <p className="text-gray-700 text-base leading-relaxed mb-6">
                                {problem.description}
                            </p>
                            
                            {/* Stat callout */}
                            <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${problem.color} text-white text-sm font-semibold px-4 py-2 rounded-full`}>
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5V3z" clipRule="evenodd" />
                                </svg>
                                {problem.stat}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={headingInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-300 text-lg mb-6">
                        Ready to plug the leaks and start capturing more customers?
                    </p>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#solution-stack"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                        See Our Solution Stack
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}