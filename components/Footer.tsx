"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Footer() {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });

    return (
        <motion.footer
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border-t border-black/5 py-12 text-[#121212] overflow-hidden relative"
        >
            {/* Animated brand accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-transparent via-[#c1fb9e] to-transparent"
                    initial={{ x: "-100%" }}
                    animate={inView ? { x: "100%" } : {}}
                    transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                {/* Logo */}
                <motion.a
                    href="/"
                    initial={{ opacity: 0, x: -12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                    className="flex items-center gap-2 font-bold text-lg group"
                >
                    <motion.svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                        whileHover={{ rotate: 20, scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 14 }}
                    >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </motion.svg>
                    LaunchFlow
                </motion.a>

                {/* Copyright */}
                <motion.div
                    className="text-sm text-[#4A5568]"
                    initial={{ opacity: 0, x: 12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
                >
                    © 2026 LaunchFlow. All rights reserved.
                </motion.div>
            </div>
        </motion.footer>
    );
}
