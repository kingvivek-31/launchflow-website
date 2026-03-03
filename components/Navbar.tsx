"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "The Process", href: "/#how-it-works" },
        { label: "Our Work", href: "/our-work" },
        { label: "Pricing", href: "/#pricing" },
    ];

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={mounted ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 py-4 transition-[background-color,backdrop-filter,border-color] duration-400 ease-in-out ${scrolled
                ? "bg-[#f2fcf1]/85 backdrop-blur-[12px] border-b border-white/[0.06]"
                : "bg-transparent border-b border-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <div className="flex items-center justify-between h-14">

                    {/* Logo — subtle scale-in */}
                    <motion.a
                        href="/"
                        initial={{ opacity: 0, x: -12 }}
                        animate={mounted ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
                        className="flex items-center gap-2 font-bold text-xl tracking-tight text-[#121212]"
                    >
                        <motion.svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                            whileHover={{ rotate: 15, scale: 1.15 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </motion.svg>
                        LaunchFlow
                    </motion.a>

                    {/* Desktop nav — staggered link entrance */}
                    <nav className="hidden md:flex items-center gap-10">
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                initial={{ opacity: 0, y: -8 }}
                                animate={mounted ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.07 }}
                                className="relative text-sm font-medium text-[#4A5568] hover:text-[#121212] transition-colors group py-1"
                            >
                                {link.label}
                                {/* Animated underline on hover */}
                                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#121212] rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                            </motion.a>
                        ))}
                    </nav>

                    {/* CTAs — staggered entrance */}
                    <div className="flex items-center gap-3">
                        <motion.a
                            href="mailto:hello@launchflow.dev"
                            initial={{ opacity: 0, x: 12 }}
                            animate={mounted ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            className="hidden sm:inline-flex items-center justify-center bg-[#121212] text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-black transition-colors"
                        >
                            Get in touch
                        </motion.a>
                        <motion.a
                            href="/#pricing"
                            initial={{ opacity: 0, x: 12 }}
                            animate={mounted ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.42 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            className="hidden sm:inline-flex items-center justify-center bg-[#c1fb9e] text-[#121212] text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-[#b5f58c] transition-colors"
                        >
                            See Plans
                        </motion.a>

                        <MobileMenu navLinks={navLinks} />
                    </div>
                </div>
            </div>
        </motion.header>
    );
}

function MobileMenu({ navLinks }: { navLinks: { label: string; href: string }[] }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="md:hidden relative">
            <button
                onClick={() => setOpen(!open)}
                className="p-2 text-[#4A5568] hover:text-[#121212] transition-colors"
            >
                <div className="w-5 flex flex-col gap-1.5">
                    <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${open ? "opacity-0" : ""}`} />
                    <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
                </div>
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-14 right-0 w-64 bg-white border border-black/5 rounded-3xl p-3 shadow-xl origin-top-right"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="block px-4 py-3 text-sm font-medium text-[#4A5568] hover:text-[#121212] hover:bg-gray-50 rounded-xl transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="mt-2 space-y-2">
                            <a
                                href="/our-work"
                                onClick={() => setOpen(false)}
                                className="block text-center bg-[#c1fb9e] text-[#121212] text-sm font-medium px-4 py-3 rounded-xl"
                            >
                                Our Work
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
