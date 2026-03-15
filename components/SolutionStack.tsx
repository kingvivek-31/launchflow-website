"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const techStack = [
    {
        name: "Next.js",
        category: "Frontend Framework",
        description: "Lightning-fast React framework with server-side rendering and automatic optimization",
        features: ["Sub-3s load times", "SEO optimization", "Mobile-first responsive", "Progressive Web App"],
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.5429.0445h-.4387l-.1091-.0696c-.0459-.0371-.1182-.1077-.1474-.1487-.0346-.0587-.0346-.0716-.0346-2.2934v-2.2544l.0617-.0795c.0459-.0678.1143-.1213.1903-.148.0587-.0207 2.0808-.0207 2.1396 0 .0788.0207.2319.1155.2927.1818l.0515.0547v.8468c0 .467.0093.8468.0206.8468.0139 0 .5429-.7877 1.1719-1.7498l1.1452-1.7498.0693-.0928c.0459-.0587.1397-.1077.2092-.1077.0788 0 2.8535.0067 2.8535.0067.0067 0-.7643 1.1451-1.7076 2.5357l-1.7143 2.5357 1.8423 2.7457c1.0139 1.5117 1.8489 2.752 1.8556 2.7587.0067.0067-.8854.0067-1.9689.0067l-1.9689-.0067-1.4973-2.2218c-.823-1.2215-1.5003-2.222-1.5003-2.222-.0067-.0067-.0206.996-.0206 2.2274v2.2408l-.0515.0794c-.0459.0678-.1143.1213-.1970.148-.0587.0207-2.0808.0207-2.1396 0-.0788-.0207-.2319-.1155-.2927-.1818l-.0515-.0547V3.5162c0-2.2544.0093-2.2673.0346-2.2934.0292-.041.1015-.1116.1474-.1487l.1091-.0696h.4387c.4021 0 .4678.0071.5429.0445.096.0516.1454.0984.2064.2134.0423.0798.0449.2159.0516 3.596.0048 1.9303.014 3.5116.0235 3.509.0094 0 .098-1.5996 2.4211-3.556L19.9611 4.02l1.919-2.592C22.9357 0.279 23.8146-.903 23.8339-.903c.0281.0236-.0118.0517-.2183.1573-1.3465.6873-2.712 1.0857-4.3237 1.2643-.3636.04-1.9354.04-2.299 0-.9337-.1032-1.7548-.2744-2.5337-.5255C10.8845 0.5899 7.677-1.2491 4.2684-4.5564 2.2461-7.3829 1.5259-9.1655 1.2539-11.054c-.0962-.659-.108-.8537-.108-1.7474s.012-1.0884.108-1.7476c.652-4.506 3.8591-8.2919 8.2087-9.6945.7789-.2511 1.6-.4223 2.5337-.5255.3636-.04 1.9354-.04 2.299 0 1.6117.1783 2.9772.577 4.3237 1.2643.2065.1056.2464.1337.2183.1573-.0188.0139-.8987 1.1938-1.9543 2.62l-1.919 2.592-2.4047 3.5583c-1.3231 1.9564-2.4117 3.556-2.4211 3.556-.0094.0026-.0187-1.5787-.0235-3.509-.0067-3.3802-.0093-3.5162-.0516-3.596-.061-.115-.108-.1618-.2064-.2134-.075-.0374-.1408-.0445-.5429-.0445h-.4387l-.1091.0696c-.0459.0371-.1182.1077-.1474.1487-.0346.0587-.0346.0716-.0346 2.2934v2.2544l.0617.0795c.0459.0678.1143.1213.1903.148.0587.0207 2.0808.0207 2.1396 0 .0788-.0207.2319-.1155.2927-.1818l.0515-.0547v-.8468c0-.467.0093-.8468.0206-.8468.0139 0 .5429.7877 1.1719 1.7498l1.1452 1.7498.0693.0928c.0459.0587.1397.1077.2092.1077.0788 0 2.8535-.0067 2.8535-.0067.0067 0-.7643-1.1451-1.7076-2.5357l-1.7143-2.5357 1.8423-2.7457c1.0139-1.5117 1.8489-2.752 1.8556-2.7587.0067-.0067-.8854-.0067-1.9689-.0067l-1.9689.0067-1.4973 2.2218c-.823 1.2215-1.5003 2.222-1.5003 2.222-.0067.0067-.0206-.996-.0206-2.2274v-2.2408l-.0515-.0794c-.0459-.0678-.1143-.1213-.1970-.148-.0587-.0207-2.0808-.0207-2.1396 0-.0788.0207-.2319.1155-.2927.1818l-.0515.0547v13.4788c0 12.2544-.0093 12.4673-.0346 12.4934-.0292.041-.1015.1116-.1474.1487l-.1091.0696h-.4387c-.4021 0-.4678-.0071-.5429-.0445-.096-.0516-.1454-.0984-.2064-.2134-.0423-.0798-.0449-.2159-.0516-3.596-.0048-1.9303-.014-3.5116-.0235-3.509-.0094 0-.098 1.5996-2.4211 3.556L4.2684 19.5564l-1.919 2.592c-.823 1.2215-1.5003 2.222-1.5003 2.222M11.5725 0"/>
            </svg>
        ),
        gradient: "from-blue-600 to-blue-800",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        version: "v14.1"
    },
    {
        name: "WhatsApp Lead Engines",
        category: "Instant Qualification",
        description: "Instant qualification bots that answer FAQs, calculate fees, and route hot leads to your front desk — without a single human touchpoint.",
        features: ["FAQ auto-responder", "Fee calculator bot", "Hot lead routing", "Instant first response"],
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M11.99 0C5.373 0 0 5.373 0 11.99c0 2.112.554 4.094 1.524 5.813L0 23.952l6.334-1.493A11.93 11.93 0 0011.99 24C18.607 24 24 18.627 24 11.99 24 5.373 18.627 0 11.99 0zm0 21.937a9.928 9.928 0 01-5.07-1.378l-.364-.216-3.762.887.9-3.663-.237-.376A9.928 9.928 0 012.063 11.99C2.063 6.513 6.513 2.063 11.99 2.063c5.477 0 9.927 4.45 9.927 9.927 0 5.477-4.45 9.947-9.927 9.947z"/>
            </svg>
        ),
        gradient: "from-green-500 to-emerald-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-200",
        version: "24/7"
    },
    {
        name: "Local SEO Engine",
        category: "Search Optimization",
        description: "Advanced local search optimization with schema markup, Google My Business integration, and citation management",
        features: ["Schema markup", "GMB optimization", "Local citations", "Review management"],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.2-5.2m0 0A7.5 7.5 0 1 0 10.8 10.8a7.5 7.5 0 0 0 5 5z" />
            </svg>
        ),
        gradient: "from-purple-600 to-purple-800", 
        bgColor: "bg-purple-50",
        borderColor: "border-purple-200",
        version: "Pro"
    },
    {
        name: "AI Voice Receptionists",
        category: "24/7 Lead Capture",
        description: "Stop losing ₹10k clients to missed after-hours calls. Our AI answers, qualifies, and books directly into your calendar 24/7.",
        features: ["After-hours coverage", "Live appointment booking", "Lead qualification", "CRM integration"],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
        ),
        gradient: "from-orange-500 to-red-600",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-200",
        version: "GPT-4"
    }
];

export default function SolutionStack() {
    const [activeTab, setActiveTab] = useState(0);
    const headingRef = useRef<HTMLDivElement>(null);
    const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

    return (
        <section id="solution-stack" className="py-24 sm:py-32 bg-white relative overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-30 pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
                
                {/* Section header */}
                <div className="text-center mb-16" ref={headingRef}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={headingInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-700 text-sm font-medium px-4 py-2 rounded-full mb-6"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path d="M17.004 10.407c.138.435-.216.842-.672.842h-3.465a.75.75 0 01-.65-.375l-1.732-3c-.229-.396-.053-.907.393-1.004a5.252 5.252 0 016.126 3.537zM8.12 8.464c.307-.338.838-.235 1.066.16l1.732 3a.75.75 0 010 .75l-1.732 3c-.229.397-.76.5-1.067.161A5.23 5.23 0 016.75 12c0-1.362.519-2.603 1.37-3.536zM10.878 17.13c-.447-.098-.623-.608-.394-1.004l1.733-3.002a.75.75 0 01.65-.375h3.465c.457 0 .81.407.672.842a5.252 5.252 0 01-6.126 3.539z" />
                            <path fillRule="evenodd" d="M21 12.75a.75.75 0 000-1.5h-.783a8.22 8.22 0 00-.237-1.357l.734-.267a.75.75 0 10-.513-1.41l-.735.268a8.24 8.24 0 00-.689-1.191l.6-.504a.75.75 0 10-.964-1.149l-.6.504a8.3 8.3 0 00-1.054-.885l.391-.678a.75.75 0 10-1.299-.75l-.39.677a8.188 8.188 0 00-1.295-.471l.136-.77a.75.75 0 00-1.477-.26l-.136.77a8.364 8.364 0 00-1.377 0l-.136-.77a.75.75 0 10-1.477.26l.136.77c-.448.121-.88.28-1.294.47l-.39-.676a.75.75 0 00-1.3.75l.392.678a8.29 8.29 0 00-1.054.885l-.6-.504a.75.75 0 00-.965 1.149l.6.503a8.243 8.243 0 00-.689 1.192L3.8 8.216a.75.75 0 10-.513 1.41l.735.267a8.222 8.222 0 00-.238 1.355h-.783a.75.75 0 000 1.5h.783c.042.464.122.917.238 1.356l-.735.268a.75.75 0 10.513 1.41l.735-.268c.197.417.428.816.69 1.191l-.6.504a.75.75 0 10.963 1.149l.601-.505c.326.323.679.62 1.054.885l-.392.68a.75.75 0 101.3.75l.39-.679c.414.192.847.35 1.294.471l-.136.771a.75.75 0 101.477.26l.137-.772a8.376 8.376 0 001.376 0l.136.773a.75.75 0 101.477-.26l-.136-.772a8.19 8.19 0 001.294-.47l.391.677a.75.75 0 101.3-.75l-.393-.679a8.282 8.282 0 001.054-.885l.601.504a.75.75 0 10.964-1.15l-.6-.503a8.24 8.24 0 00.69-1.191l.735.268a.75.75 0 10.512-1.41l-.734-.268c.115-.438.195-.892.237-1.356h.784zm-2.657-3.06a6.744 6.744 0 00-1.19-2.053 6.784 6.784 0 00-2.053-1.19A6.704 6.704 0 0012 5.25a6.704 6.704 0 00-3.1.447 6.784 6.784 0 00-2.053 1.19A6.75 6.75 0 005.25 12c0 1.171.301 2.294.797 3.269a6.784 6.784 0 001.19 2.053 6.784 6.784 0 002.053 1.19A6.704 6.704 0 0012 18.75a6.704 6.704 0 003.1-.447 6.784 6.784 0 002.053-1.19A6.784 6.784 0 0018.75 15c0-1.171-.301-2.294-.797-3.269z" clipRule="evenodd" />
                        </svg>
                        AI Automation Layer
                    </motion.div>
                    
                    <div className="overflow-hidden mb-6">
                        <motion.h2
                            className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900"
                            initial={{ y: "100%" }}
                            animate={headingInView ? { y: "0%" } : {}}
                            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                        >
                            The Automation Layer
                        </motion.h2>
                    </div>
                    
                    <motion.p
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={headingInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        After we get you found, our AI layer makes sure you never lose a lead to a missed call or slow response again.
                    </motion.p>
                </div>

                {/* Tech stack grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {techStack.map((tech, i) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, y: 40 }}
                            animate={headingInView ? { opacity: 1, y: 0 } : {}}
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ duration: 0.8, delay: 0.1 * i, type: "spring", stiffness: 200 }}
                            className={`${tech.bgColor} ${tech.borderColor} border-2 rounded-2xl p-8 group hover:shadow-2xl transition-all duration-500 cursor-default relative overflow-hidden`}
                            onMouseEnter={() => setActiveTab(i)}
                        >
                            {/* Gradient overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                            
                            {/* Header */}
                            <div className="flex items-start justify-between mb-6">
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${tech.gradient} text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                    {tech.icon}
                                </div>
                                <span className={`text-xs font-mono bg-gradient-to-r ${tech.gradient} bg-clip-text text-transparent font-semibold`}>
                                    {tech.version}
                                </span>
                            </div>
                            
                            {/* Content */}
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                        {tech.name}
                                    </h3>
                                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                                        {tech.category}
                                    </p>
                                </div>
                                
                                <p className="text-gray-700 leading-relaxed">
                                    {tech.description}
                                </p>
                                
                                {/* Features list */}
                                <div className="pt-4 border-t border-gray-200">
                                    <div className="grid grid-cols-2 gap-2">
                                        {tech.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${tech.gradient}`} />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Integration showcase */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={headingInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-center"
                >
                    <h3 className="text-3xl font-bold text-white mb-4">
                        One unified lead acquisition machine.
                    </h3>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Local SEO, sub-second Next.js speed, AI voice, and WhatsApp — all talking to each other, all working 24/7.
                    </p>
                    
                    {/* Integration flow */}
                    <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
                        {techStack.map((tech, i) => (
                            <div key={tech.name} className="flex items-center">
                                <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur text-white flex items-center justify-center">
                                    {tech.icon}
                                </div>
                                {i < techStack.length - 1 && (
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-300 mx-2">
                                        <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06L19.19 12l-2.47-2.47a.75.75 0 010-1.06zM1.25 12a.75.75 0 01.75-.75h16a.75.75 0 010 1.5H2a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </div>
                        ))}
                    </div>
                    
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#simple-pricing"
                        className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                        See Implementation Packages
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}