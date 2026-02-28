"use client";

import { motion } from "framer-motion";

const features = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 3l-8.5 9.5h7l-1.5 8.5L20 11h-7l1-8z" />
            </svg>
        ),
        title: "0.5s Load Times",
        description: "Built on modern static code. No slow themes.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: "Zero Risk",
        description: "We build the layout first. Don't like it? We walk away.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 14.5a2.5 2.5 0 002.5-2.5c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 002.5 2.5z" />
            </svg>
        ),
        title: "Live in 48 Hours",
        description: "Once approved, your site is up and running in 2 days.",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
};

export default function Features() {
    return (
        <section id="features" className="py-24 sm:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.div variants={titleVariants} className="max-w-2xl mb-20">
                        <h2 className="text-[32px] sm:text-[44px] font-medium tracking-tight leading-[1.1] text-[#121212] mb-6">
                            No Freelancer Chaos. <br />
                            <span className="text-[#4A5568]">Just Results.</span>
                        </h2>
                        <p className="text-[16px] leading-[1.6] text-[#4A5568]">
                            We streamline the entire process of launching your digital storefront. High quality, technical precision, and absolute transparency.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {features.map((feature) => (
                            <motion.div
                                key={feature.title}
                                variants={cardVariants}
                                whileHover={{ y: -8 }}
                                transition={{ y: { type: "spring" as any, stiffness: 300, damping: 20 } }}
                                className="bg-[#fadc64] text-[#121212] rounded-[32px] p-8 pb-16 flex flex-col group cursor-default"
                                style={{ backgroundColor: feature.title.includes('Risk') ? '#d4cdf8' : feature.title.includes('48') ? '#f2fcf1' : '#fadc64' }}
                            >
                                <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center mb-auto text-black/80 bg-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                                    {feature.icon}
                                </div>
                                <div className="mt-16">
                                    <h3 className="text-xl font-semibold mb-3 tracking-tight">{feature.title}</h3>
                                    <p className="text-[#3D4935] text-sm leading-relaxed">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
