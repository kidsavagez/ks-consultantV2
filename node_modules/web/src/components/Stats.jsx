import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const CountUp = ({ value, duration = 2 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = parseInt(value.replace(/[^0-9]/g, ''));
            if (start === end) return;

            let totalMiliseconds = duration * 1000;
            let incrementTime = totalMiliseconds / end;

            let timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start === end) clearInterval(timer);
            }, incrementTime);

            return () => clearInterval(timer);
        }
    }, [isInView, value, duration]);

    const suffix = value.replace(/[0-9]/g, '');

    return (
        <span ref={ref} className="text-4xl font-black text-accent-maroon dark:text-white">
            {count}{suffix}
        </span>
    );
};

const StatCard = ({ title, value, change, icon, progress, color }) => (
    <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="p-8 rounded-xl bg-background-light dark:bg-surface-dark border border-slate-200 dark:border-white/5 group hover:border-accent-maroon/20 dark:hover:border-primary/20 transition-all shadow-sm hover:shadow-md"
    >
        <div className="flex items-center justify-between mb-4">
            <span className="text-slate-500 dark:text-slate-500 font-bold text-sm uppercase tracking-wider">{title}</span>
            <span className="material-symbols-outlined text-accent-maroon dark:text-primary text-3xl opacity-20 group-hover:opacity-100 transition-opacity">{icon}</span>
        </div>
        <div className="flex items-baseline gap-2">
            <CountUp value={value} />
            <span className="text-emerald-600 text-sm font-bold flex items-center gap-0.5">
                <span className="material-symbols-outlined text-xs">{change.startsWith('+') || change.includes('add') ? 'add' : 'trending_up'}</span> {change}
            </span>
        </div>
        <div className="mt-4 h-1.5 w-full bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: progress }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className={`h-full ${color}`}
            ></motion.div>
        </div>
    </motion.div>
);

const Stats = () => {
    return (
        <section className="py-20 bg-white dark:bg-background-dark border-y border-slate-200 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <StatCard
                        title="Business Years"
                        value="10+"
                        change="1yr"
                        icon="history_edu"
                        progress="100%"
                        color="bg-primary"
                    />
                    <StatCard
                        title="Satisfied Clients"
                        value="100+"
                        change="5+"
                        icon="groups"
                        progress="100%"
                        color="bg-accent-maroon"
                    />
                    <StatCard
                        title="Cases Handled"
                        value="100+"
                        change="10+"
                        icon="gavel"
                        progress="100%"
                        color="bg-primary"
                    />
                </div>
            </div>
        </section>
    );
};

export default Stats;
