"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
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
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${scrolled ? "bg-[#f2fcf1]/80 backdrop-blur-xl border-b border-black/5" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <div className="flex items-center justify-between h-14">
                    {/* Logo */}
                    <a href="#hero" className="flex items-center gap-2 font-bold text-xl tracking-tight text-[#121212]">
                        {/* Minimal humanity-ish icon */}
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        LaunchFlow
                    </a>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-[#4A5568] hover:text-[#121212] transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* CTAs */}
                    <div className="flex items-center gap-3">
                        <motion.a
                            href="mailto:hello@launchflow.dev"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="hidden sm:inline-flex items-center justify-center bg-[#121212] text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-black transition-colors"
                        >
                            Get in touch
                        </motion.a>
                        <motion.a
                            href="#pricing"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="hidden sm:inline-flex items-center justify-center bg-[#c1fb9e] text-[#121212] text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-[#b5f58c] transition-colors"
                        >
                            Learn more
                        </motion.a>

                        <MobileMenu navLinks={navLinks} />
                    </div>
                </div>
            </div>
        </header>
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
