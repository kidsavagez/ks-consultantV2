import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <nav className="bg-white dark:bg-surface-dark rounded-full shadow-lg px-6 py-3 flex items-center justify-between w-full max-w-4xl border border-slate-100 dark:border-white/5 transition-colors">

                {/* Logo Section */}
                <div className="flex items-center gap-2">
                    <div className="text-maroon-600 dark:text-maroon-500 font-bold flex items-center">
                        <span className="material-symbols-outlined text-xl">domain</span>
                    </div>
                    <h2 className="text-slate-900 dark:text-white text-lg font-black tracking-tight uppercase">
                        KS Consulting
                    </h2>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {[
                        { name: 'About Us', href: '#about' },
                        { name: 'Practice Area', href: '#practice-area' },
                        { name: 'Contact', href: '#contact' }
                    ].map((item) => (
                        <a
                            key={item.name}
                            className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-bold uppercase tracking-widest transition-colors"
                            href={item.href}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    <button
                        className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors text-slate-500 dark:text-slate-400 flex items-center justify-center"
                        onClick={toggleTheme}
                    >
                        <span className="material-symbols-outlined text-lg">{theme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
                    </button>
                    <button className="hidden sm:flex bg-rose-900 hover:bg-rose-950 text-white text-sm font-bold px-6 py-2.5 rounded-full transition-colors shadow-md shadow-rose-900/30">
                        Consultation
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
