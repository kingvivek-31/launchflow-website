"use client";

import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 sm:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.div variants={titleVariants} className="max-w-2xl mx-auto text-center mb-16">
                        <h2 className="text-[32px] sm:text-[44px] font-medium tracking-tight leading-[1] text-[#121212] mb-4">
                            Simple Pricing.
                        </h2>
                        <p className="text-[17px] text-[#4A5568]">
                            No Hidden Fees. We provide clarity from day one.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                        {/* Plan 1 */}
                        <motion.div
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                            transition={{ y: { type: "spring" as any, stiffness: 300, damping: 20 } }}
                            className="bg-[#f2fcf1] border border-[#a8e68e]/30 rounded-[32px] p-10 flex flex-col cursor-default"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-xl font-bold text-[#121212]">The Digital Storefront</h3>
                                <span className="bg-[#121212] text-[#f2fcf1] text-[11px] font-[600] uppercase tracking-wide px-3 py-1 rounded-full">Recommended</span>
                            </div>
                            <p className="text-[#3D4935] text-[15px] mb-8">Perfect for gyms, cafes, & local businesses.</p>

                            <div className="flex items-baseline gap-2 mb-10">
                                <span className="text-[44px] tracking-tight font-medium text-[#121212]">₹10,000</span>
                                <span className="text-[#4A5568] line-through text-sm">₹15,000</span>
                            </div>

                            <ul className="space-y-4 mb-10 pb-8 flex-1 border-b border-black/5">
                                {["Premium Mobile Design", "Lightning Fast", "Lead Capture Form", "Live in 1–2 Days"].map((feat, i) => (
                                    <li key={i} className="flex gap-3 items-center text-[#121212] font-medium text-[15px]">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#3D4935]"><path d="M12 2L2 7l10 5 10-5-10-5z" /></svg>
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <motion.a
                                whileHover={{ scale: 0.98 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring" as any, stiffness: 400, damping: 15 }}
                                href="https://wa.me/919582915196"
                                className="w-full bg-[#121212] flex items-center justify-center text-white py-4 rounded-xl font-[500] transition-colors"
                            >
                                Claim via WhatsApp
                            </motion.a>
                        </motion.div>

                        {/* Plan 2 */}
                        <motion.div
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                            transition={{ y: { type: "spring" as any, stiffness: 300, damping: 20 } }}
                            className="bg-white border border-black/5 rounded-[32px] p-10 flex flex-col shadow-sm cursor-default"
                        >
                            <h3 className="text-xl font-bold text-[#121212] mb-6">Dynamic & E-Commerce</h3>
                            <p className="text-[#4A5568] text-[15px] mb-8">For businesses needing logins, payments, or updates.</p>

                            <div className="flex items-baseline gap-2 mb-10">
                                <span className="text-[44px] tracking-tight font-medium text-[#121212]">Custom</span>
                            </div>

                            <ul className="space-y-4 mb-10 flex-1">
                                {["Custom CMS", "Payments", "Booking Systems", "Databases"].map((feat, i) => (
                                    <li key={i} className="flex gap-3 items-center text-[#4A5568] text-[15px]">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" /></svg>
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <motion.a
                                whileHover={{ scale: 0.98 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring" as any, stiffness: 400, damping: 15 }}
                                href="mailto:hello@launchflow.dev"
                                className="w-full bg-[#f4f4f5] text-[#121212] flex items-center justify-center py-4 rounded-xl font-[500] hover:bg-[#e4e4e7] transition-colors"
                            >
                                Email for details
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
