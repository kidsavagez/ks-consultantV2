import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-background-dark border-t border-slate-100 dark:border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <h2 className="text-accent-maroon dark:text-slate-100 text-lg tracking-tight"><span className="material-symbols-outlined text-xl">domain</span><span className="font-extrabold"> KS</span> <span className="font-serif">Business & Legal Consulting</span></h2>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 font-medium pr-4">
                            Providing strategic legal and business advisory services with integrity, expertise, and a commitment to your success.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-accent-maroon dark:text-white font-bold mb-8 uppercase tracking-widest text-xs">Quick Links</h4>
                        <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm font-medium">
                            {['About Us', 'Services'].map(link => (
                                <li key={link}><a className="hover:text-accent-maroon dark:hover:text-primary transition-colors" href="#">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-accent-maroon dark:text-white font-bold mb-8 uppercase tracking-widest text-xs">Services</h4>
                        <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm font-medium">
                            {['Notary Services', 'Business Licenses', 'Immigration', 'Due Diligence'].map(link => (
                                <li key={link}><a className="hover:text-accent-maroon dark:hover:text-primary transition-colors" href="#">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-accent-maroon dark:text-white font-bold mb-8 uppercase tracking-widest text-xs">Get In Touch</h4>
                        <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm font-medium mb-6">
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-lg text-slate-400 dark:text-slate-500">call</span>
                                <span>+6281236971023</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-lg text-slate-400 dark:text-slate-500">mail</span>
                                <span>ks@legalbusinesses.org</span>
                            </li>
                        </ul>
                        <div className="flex gap-4">
                            <a
                                className="size-8 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 hover:text-accent-maroon dark:hover:text-primary hover:border-accent-maroon dark:hover:border-primary transition-all bg-slate-50 dark:bg-white/5"
                                href="https://www.linkedin.com/in/stefanus-agung-28a4542bb/"
                            >
                                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-slate-100 dark:border-white/5 flex justify-center items-center">
                    <p className="text-slate-500 text-xs font-medium">© 2026 KS Business & Legal Consulting. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
