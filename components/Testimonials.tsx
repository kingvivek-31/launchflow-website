"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 sm:py-32 bg-[#f2fcf1] relative border-t border-black/5">
            {/* 
              This section has been intentionally left blank 
              for a future testimonials block, as per user request. 
            */}
            <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col items-center justify-center min-h-[40vh]">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full max-w-2xl text-center border-2 border-dashed border-[#a8e68e]/50 rounded-[32px] p-12 bg-white/50"
                >
                    <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#121212] mb-4">
                        Testimonials (Coming Soon)
                    </h2>
                    <p className="text-[#4A5568]">
                        Empty section reserved for customer reviews and quotes.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
