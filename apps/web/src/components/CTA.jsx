import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section id="contact" className="py-24 bg-slate-50 dark:bg-background-dark">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white dark:bg-gradient-to-br dark:from-surface-dark dark:to-background-dark border border-slate-200 dark:border-white/5 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden group shadow-2xl dark:shadow-none"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-accent-maroon/5 dark:from-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <h2 className="text-3xl md:text-5xl font-black text-accent-maroon dark:text-white mb-6 relative z-10">Ready to secure your strategy?</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 max-w-xl mx-auto relative z-10">
                        Contact our executive briefing team to discuss how we can support your business objectives.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
                        <input
                            className="w-full sm:w-80 bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-white/10 rounded-lg px-6 py-4 text-slate-900 dark:text-white focus:outline-none focus:border-accent-maroon dark:focus:border-primary transition-all shadow-inner"
                            placeholder="Enter your business email"
                            type="email"
                        />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-10 py-4 bg-primary text-accent-maroon font-black rounded-lg hover:shadow-[0_10px_20px_rgba(244,192,37,0.4)] transition-all"
                        >
                            Get Started
                        </motion.button>
                    </div>

                    <p className="mt-8 text-slate-500 text-xs font-bold uppercase tracking-widest relative z-10">
                        Confidentiality Guaranteed • Response within 2 hours
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
