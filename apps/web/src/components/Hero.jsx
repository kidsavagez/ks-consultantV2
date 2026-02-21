import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
    const { theme } = useTheme();

    return (
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-white dark:bg-background-dark">
            <div className="absolute inset-0 z-0">
                <motion.img
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: theme === 'dark' ? 0.7 : 0.3 }}
                    transition={{ duration: 1.5 }}
                    className="w-full h-full object-cover"
                    alt="Cityscape"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi5Itd9ZdQbKmiNq2niggc3aCbmUgx5N4kQ3XJJjc_3yDf7vj6Ok43-8ESbRR0w8OI7ogNQ7wsGGkUrqcFaoFJOLrNt8oEwEx6NQ8K1REA52wz_6x4cmh-Hf1EQ_B0YpSNfQD-YpNbvCfN--rNU-9gLaZ96JF99YGcle3RqhVW8c1pSs9xmZnZa5ei0IoA--u7FMsHm7_F1dYEBgEWRpsPYlmvM9z3hORD1YOb9OUDYBInr8wYgGsYdL27iG8QUGDYlezXt6SyXjZV"
                />
                <div className="absolute inset-0 hero-gradient-light dark:hidden"></div>
                <div className="absolute inset-0 hidden dark:block hero-gradient"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="inline-flex items-center gap-2 bg-accent-maroon/5 dark:bg-accent-maroon/30 border border-accent-maroon/20 dark:border-accent-maroon/50 px-4 py-1.5 rounded-full mb-8"
                >
                    <span className="size-2 rounded-full bg-accent-maroon dark:bg-primary animate-pulse"></span>
                    <span className="text-accent-maroon dark:text-primary text-xs font-bold uppercase tracking-widest">The Safe and Proven</span>
                </motion.div>

                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="text-5xl md:text-7xl font-black text-accent-maroon dark:text-white leading-[1.1] tracking-tight mb-8"
                >
                    Strategic Legal & <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-maroon via-accent-maroon to-primary dark:from-primary dark:via-primary/80 dark:to-primary">Business Advisory</span>
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
                >
                    Navigating legal complexities with precision and care. We provide comprehensive legal and business consulting services tailored to your unique needs.
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button className="w-full sm:w-auto px-8 py-4 bg-primary text-accent-maroon font-black rounded-lg hover:shadow-[0_10px_30px_rgba(244,192,37,0.3)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                        Free Consultation
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                    <button className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/10 text-accent-maroon dark:text-white font-bold rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 hover:-translate-y-1 transition-all">
                        View Practice Areas
                    </button>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-maroon dark:text-slate-400">Discover More</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-px h-12 bg-gradient-to-b from-accent-maroon dark:from-primary to-transparent"
                ></motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
