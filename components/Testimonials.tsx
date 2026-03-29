"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 sm:py-28 bg-[#f9f9f9] border-t border-black/5">
            <div className="max-w-4xl mx-auto px-6 sm:px-8">

                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-[#fadc64]/30 border border-[#fadc64]/50 text-[#3D3000] text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
                        Results
                    </div>
                    <h2 className="text-[28px] sm:text-[40px] font-bold text-[#121212] tracking-tight mb-3">
                        What gym owners are saying
                    </h2>
                    <p className="text-[#4A5568] text-base max-w-md mx-auto">
                        Early results from our first gyms. More testimonials coming soon.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* [TESTIMONIAL] 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-white border-2 border-dashed border-[#a8e68e]/50 rounded-3xl p-7"
                    >
                        <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} viewBox="0 0 24 24" fill="#fadc64" className="w-4 h-4">
                                    <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5z" />
                                </svg>
                            ))}
                        </div>
                        <p className="text-[#4A5568] text-sm italic mb-5 leading-relaxed">
                            &ldquo;[TESTIMONIAL — Add quote from a gym owner here. Mention specific result, e.g. number of new members or enquiries received.]&rdquo;
                        </p>
                        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                            <div className="w-9 h-9 rounded-full bg-[#c1fb9e]/40 border-2 border-dashed border-[#a8e68e] flex items-center justify-center text-xs font-black text-[#1A3D0A]">?</div>
                            <div>
                                <p className="font-semibold text-sm text-[#121212]">[Owner Name]</p>
                                <p className="text-xs text-[#4A5568]">[Gym Name] · [Area]</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* [TESTIMONIAL] 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white border-2 border-dashed border-[#a8e68e]/50 rounded-3xl p-7"
                    >
                        <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} viewBox="0 0 24 24" fill="#fadc64" className="w-4 h-4">
                                    <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5z" />
                                </svg>
                            ))}
                        </div>
                        <p className="text-[#4A5568] text-sm italic mb-5 leading-relaxed">
                            &ldquo;[TESTIMONIAL — Add quote from a gym owner here. Make it specific to their situation — e.g. footfall increase, WhatsApp enquiries, Google ranking.]&rdquo;
                        </p>
                        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                            <div className="w-9 h-9 rounded-full bg-[#c1fb9e]/40 border-2 border-dashed border-[#a8e68e] flex items-center justify-center text-xs font-black text-[#1A3D0A]">?</div>
                            <div>
                                <p className="font-semibold text-sm text-[#121212]">[Owner Name]</p>
                                <p className="text-xs text-[#4A5568]">[Gym Name] · [Area]</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* [TESTIMONIAL] 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-white border-2 border-dashed border-[#a8e68e]/50 rounded-3xl p-7"
                    >
                        <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} viewBox="0 0 24 24" fill="#fadc64" className="w-4 h-4">
                                    <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5z" />
                                </svg>
                            ))}
                        </div>
                        <p className="text-[#4A5568] text-sm italic mb-5 leading-relaxed">
                            &ldquo;[TESTIMONIAL — Add quote here. Can be a before/after story. E.g. 'Maine pehle 3 agencies try ki thi, koi result nahi mila — LaunchFlow ne 30 din mein dikha diya.']&rdquo;
                        </p>
                        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                            <div className="w-9 h-9 rounded-full bg-[#c1fb9e]/40 border-2 border-dashed border-[#a8e68e] flex items-center justify-center text-xs font-black text-[#1A3D0A]">?</div>
                            <div>
                                <p className="font-semibold text-sm text-[#121212]">[Owner Name]</p>
                                <p className="text-xs text-[#4A5568]">[Gym Name] · [Area]</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
