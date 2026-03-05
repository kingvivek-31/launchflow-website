"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const placeholders = [
    { id: 1, label: "Project Coming Soon", tag: "Gym" },
    { id: 2, label: "Project Coming Soon", tag: "Wellness Center" },
    { id: 3, label: "Project Coming Soon", tag: "Coaching Brand" },
    { id: 4, label: "Project Coming Soon", tag: "Yoga Studio" },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function OurWork() {
    return (
        <main className="relative min-h-screen bg-[#f2fcf1]">
            <Navbar />

            <section className="pt-40 pb-24 px-6 sm:px-8 max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-2xl mb-16"
                >
                    <span className="inline-block bg-[#121212] text-white text-xs font-medium px-4 py-1.5 rounded-full mb-6">
                        Our Portfolio
                    </span>
                    <h1 className="text-[40px] sm:text-[56px] font-medium tracking-tight leading-[1.05] text-[#121212] mb-5">
                        Work We&apos;re <br />
                        <span className="text-[#3D4935]/80 italic">Proud Of.</span>
                    </h1>
                    <p className="text-[17px] text-[#4A5568] leading-relaxed">
                        Real websites built for real businesses. More case studies dropping soon.
                    </p>
                </motion.div>

                {/* Placeholder Grid */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                    {placeholders.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={cardVariants}
                            whileHover={{ y: -6 }}
                            transition={{ y: { type: "spring", stiffness: 300, damping: 20 } }}
                            className="group relative bg-white rounded-[32px] border border-black/5 overflow-hidden cursor-default shadow-sm"
                        >
                            {/* Placeholder image area */}
                            <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-[#f0fce8] to-[#e8f5d0] flex items-center justify-center">
                                <div className="flex flex-col items-center gap-3 opacity-40">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-12 h-12 text-[#3D4935]">
                                        <rect x="3" y="3" width="18" height="18" rx="3" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l4-4 4 4 4-4 4 4" />
                                        <circle cx="8.5" cy="14.5" r="1.5" />
                                    </svg>
                                    <span className="text-sm font-medium text-[#3D4935]">Image Placeholder</span>
                                </div>

                                {/* Tag badge */}
                                <span className="absolute top-4 left-4 bg-[#121212] text-white text-[11px] font-semibold uppercase tracking-wide px-3 py-1 rounded-full">
                                    {item.tag}
                                </span>
                            </div>

                            {/* Card footer */}
                            <div className="p-6 flex items-center justify-between">
                                <div>
                                    <p className="text-[13px] font-semibold text-[#4A5568] uppercase tracking-wide mb-1">{item.tag}</p>
                                    <h3 className="text-lg font-semibold text-[#121212]">{item.label}</h3>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-[#f2fcf1] border border-[#a8e68e]/40 flex items-center justify-center text-[#3D4935] group-hover:bg-[#121212] group-hover:text-white transition-colors duration-300">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-20 text-center"
                >
                    <p className="text-[#4A5568] mb-6 text-[16px]">Want your gym or coaching brand on this page?</p>
                    <a
                        href="https://wa.me/918595669560"
                        className="inline-flex items-center justify-center bg-[#121212] text-white text-base font-medium px-8 py-4 rounded-xl hover:bg-black transition-colors"
                    >
                        Let&apos;s Build Yours
                    </a>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
