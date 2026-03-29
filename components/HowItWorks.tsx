"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function HowItWorks() {
    const headingRef = useRef<HTMLDivElement>(null);
    const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

    return (
        <section id="live-demo" className="relative bg-[#f2fcf1] py-24 sm:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <div className="text-center mb-16" ref={headingRef}>
                    <div className="overflow-hidden">
                        <motion.h2
                            className="text-[32px] sm:text-[44px] font-medium tracking-tight leading-[1.1] text-[#121212]"
                            initial={{ y: "100%" }}
                            animate={headingInView ? { y: "0%" } : {}}
                            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                        >
                            What a high-converting <br />
                            <span className="text-[#3D4935]/80">setup looks like</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        className="mt-6 text-[16px] leading-[1.6] text-[#4A5568] max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={headingInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Clean mobile preview. Clear contact CTAs. Built-in WhatsApp routing.
                    </motion.p>
                </div>

                <div className="flex justify-center">
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={headingInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative w-[320px] h-[640px] bg-white rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border-[#1A1A1A] border-[12px] overflow-hidden flex flex-col mx-auto"
                    >
                        {/* Status bar */}
                        <div className="h-6 w-full bg-white flex justify-center items-center absolute top-0 z-50">
                            <div className="w-32 h-[22px] bg-[#1A1A1A] rounded-b-[18px]"></div>
                        </div>
                        
                        {/* Mock App Content */}
                        <div className="flex-1 overflow-y-auto bg-gray-50 flex flex-col pt-6">
                            {/* Header */}
                            <div className="bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.05)] flex items-center justify-between z-10 sticky top-0">
                                <div className="font-bold text-[17px] text-[#1A1A1A]">Your Business</div>
                                <div className="text-[11px] font-bold tracking-wide uppercase bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">Open</div>
                            </div>
                            
                            {/* Hero Image Block */}
                            <div className="h-44 bg-gray-200 mt-3 mx-4 rounded-2xl flex items-center justify-center text-gray-400 border border-gray-100 relative overflow-hidden">
                                <span className="font-medium text-sm">[ High Quality Photo ]</span>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            </div>
                            
                            <div className="p-4 flex-1">
                                <h3 className="font-bold text-xl mb-1 text-[#121212]">Premium Services</h3>
                                <p className="text-gray-500 text-sm mb-5 font-medium">Book your appointment in 30 seconds.</p>
                                
                                <div className="space-y-3">
                                    <div className="h-14 bg-white rounded-xl border border-gray-100 flex items-center px-4 shadow-sm hover:border-gray-200 transition-colors">
                                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3">
                                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                        </div>
                                        <span className="text-[15px] font-semibold text-gray-800 flex-1">Consultation</span>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-gray-400"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                    </div>
                                    <div className="h-14 bg-white rounded-xl border border-gray-100 flex items-center px-4 shadow-sm hover:border-gray-200 transition-colors">
                                        <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center mr-3">
                                            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                        </div>
                                        <span className="text-[15px] font-semibold text-gray-800 flex-1">Priority Service</span>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-gray-400"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Sticky Bottom Actions */}
                            <div className="bg-white p-4 border-t border-gray-100 flex gap-2.5 pb-8 relative z-10 shadow-[0_-4px_12px_rgba(0,0,0,0.02)]">
                                <div className="flex-1 bg-[#25D366] text-white rounded-xl py-3.5 flex items-center justify-center font-bold text-[15px] shadow-[0_4px_12px_rgba(37,211,102,0.3)] hover:bg-[#20BE5A] transition-colors cursor-default">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.99 0C5.373 0 0 5.373 0 11.99c0 2.112.554 4.094 1.524 5.813L0 23.952l6.334-1.493A11.93 11.93 0 0011.99 24C18.607 24 24 18.627 24 11.99 24 5.373 18.627 0 11.99 0zm0 21.937a9.928 9.928 0 01-5.07-1.378l-.364-.216-3.762.887.9-3.663-.237-.376A9.928 9.928 0 012.063 11.99C2.063 6.513 6.513 2.063 11.99 2.063c5.477 0 9.927 4.45 9.927 9.927 0 5.477-4.45 9.947-9.927 9.947z"/></svg>
                                    WhatsApp Us
                                </div>
                                <div className="w-[52px] bg-[#121212] flex-shrink-0 text-white rounded-xl flex items-center justify-center shadow-[0_4px_12px_rgba(18,18,18,0.2)] hover:bg-black cursor-default">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[22px] h-[22px]"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
