import React from 'react';
import { motion } from 'framer-motion';

const Legacy = () => {
    return (
        <section id="about" className="py-24 bg-white dark:bg-surface-dark overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="absolute -top-10 -left-10 size-40 bg-accent-maroon/10 dark:bg-accent-maroon/20 rounded-full blur-[80px]"
                    ></motion.div>
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="absolute -bottom-10 -right-10 size-40 bg-primary/10 rounded-full blur-[80px]"
                    ></motion.div>
                    <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative z-10 rounded-2xl grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl dark:shadow-none"
                        alt="Law firm office"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3wBNeHQYIqK12gEnUBrAgszmk9rhXzwgwErwVeUA9FSgapy4YP0eWH5C6ckMmfOovlErVTb694c7PQj0I1-YHq8Nhb35DThdIUr8khWRqqrHoIIlu388UvtRF0Yl_V5MWOLuD0VaBgm5HxX-Z0L1Fg4rNmRciy_qHFIm3n1OHZc9nkk1JUg0863V4k4TW8AWiVd4gnfqYq_YGZyXe79L8Ou7yRugBfd1iRuV5Kc3DAWdsgQaT2F0kPZ_ADYXh8eTHMmbx9DsEAn-A"
                    />
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="absolute bottom-8 left-8 z-20 bg-white dark:bg-background-dark/80 backdrop-blur-md p-6 rounded-xl border border-slate-200 dark:border-white/10 max-w-[240px] shadow-xl dark:shadow-none"
                    >
                        <div className="flex text-primary mb-2">
                            {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-symbols-outlined fill-1">star</span>)}
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 italic font-medium">"The benchmark for strategic legal advisory in the EMEA region."</p>
                        <p className="text-xs text-accent-maroon dark:text-white font-bold mt-2">— Forbes Legal Insight</p>
                    </motion.div>
                </div>

                <div>
                    <motion.h3
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-accent-maroon dark:text-primary font-bold text-sm uppercase tracking-[0.3em] mb-6"
                    >
                        About Us
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl font-black text-accent-maroon dark:text-white mb-8 leading-tight"
                    >
                        Defining the future of <br />legal excellence.
                    </motion.h2>
                    <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        <p>
                            Over the years, we have successfully handled a wide range of complex legal matters, offering both preventive legal advice and representation in disputes. Our approach combines deep legal expertise with clear communication, responsive service, and a genuine commitment to client success.
                        </p>
                        <p>
                            With more than 10 years of experience and a forward-looking mindset, we remain a reliable legal partner for clients across Indonesia and beyond.
                        </p>
                    </div>
                    <div className="mt-12 flex flex-wrap gap-10">
                        {[
                            { label: 'Business Years', value: '10+' },
                            { label: 'Satisfied Clients', value: '100+' },
                            { label: 'Cases Handled', value: '100+' }
                        ].map((stat, idx) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 + 0.4 }}
                                className="flex flex-col"
                            >
                                <span className="text-3xl font-black text-accent-maroon dark:text-white">{stat.value}</span>
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mt-1">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Legacy;
