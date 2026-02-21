import React, { useState } from 'react';
import { motion } from 'framer-motion';

const areas = [
    {
        title: 'Notary Services',
        desc: 'Notarial and legal documentation services to ensure every agreement, deed, and corporate action complies with Indonesian law and carries strong legal standing.',
        icon: 'history_edu',
        img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Business License',
        desc: 'We manage business establishment and licensing processes, ensuring your company is legally operational and regulatory-ready.',
        icon: 'domain',
        img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Immigration',
        desc: 'End-to-end immigration assistance for investors, professionals, and families, handled efficiently and in full compliance with regulations.',
        icon: 'flight_takeoff',
        img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Architecture & Civil Contractor',
        desc: 'Integrated architectural and construction services supported by strong legal oversight, from planning to project execution.',
        icon: 'architecture',
        img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Due Diligence',
        desc: 'Comprehensive legal due diligence to identify risks, verify compliance, and support informed decision-making in business and property transactions.',
        icon: 'search',
        img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'PBG & SLF',
        desc: 'We assist property owners and developers in securing Persetujuan Bangunan Gedung (PBG) and Sertifikat Laik Fungsi (SLF) to ensure buildings comply with technical and regulatory requirements.',
        icon: 'apartment',
        img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Apostille',
        desc: 'We handle apostille processing to ensure your Indonesian documents are legally recognized abroad under international conventions.',
        icon: 'verified_user',
        img: 'https://images.unsplash.com/photo-1554224154-26032ffc0d04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Intellectual Property Rights (IPR)',
        desc: 'We provide legal assistance for the registration and protection of intellectual property to safeguard your business identity and innovations.',
        icon: 'lightbulb',
        img: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
];

const Specializations = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const visibleAreas = isExpanded ? areas : areas.slice(0, 4);

    return (
        <section id="practice-area" className="py-32 bg-white dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-xl">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-accent-maroon dark:text-primary font-bold text-sm uppercase tracking-[0.3em] mb-4"
                        >
                            Practice Area
                        </motion.h3>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-5xl font-black text-accent-maroon dark:text-white leading-tight"
                        >
                            How We Can Help <br /><span className="text-slate-400 dark:text-slate-500 italic">visionary enterprises.</span>
                        </motion.h2>
                    </div>
                    <motion.button
                        whileHover={{ x: 5 }}
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-accent-maroon dark:hover:text-white transition-colors group cursor-pointer"
                    >
                        <span className="font-bold text-sm uppercase tracking-widest">{isExpanded ? 'Show Less' : 'Explore all areas'}</span>
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">{isExpanded ? 'arrow_upward' : 'arrow_right_alt'}</span>
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {visibleAreas.map((area, idx) => (
                        <motion.div
                            key={area.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative aspect-[3/4] overflow-hidden rounded-xl glow-border cursor-pointer"
                        >
                            <img
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                alt={area.title}
                                src={area.img}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-accent-maroon via-accent-maroon/20 dark:from-background-dark dark:via-background-dark/40 to-transparent dark:block hidden"></div>
                            <div className="absolute inset-0 card-overlay-light dark:hidden"></div>
                            <div className="absolute bottom-0 p-8 w-full translate-y-25 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="material-symbols-outlined text-primary mb-4 text-3xl">{area.icon}</span>
                                <h4 className="text-xl font-bold text-black dark:text-white mb-2">{area.title}</h4>
                                <p className="text-slate-1000 dark:text-slate-400 text-sm line-clamp-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {area.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Specializations;
