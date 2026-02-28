import { motion } from 'framer-motion';

import { Briefcase, Target, TrendingUp, Users } from 'lucide-react';

export default function Jobseekers() {



    return (
        <div className="bg-slate-50 dark:bg-navy-950">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-navy-950 text-white">
                <div className="absolute inset-0 z-0">
                    <img alt="Professional walking confidently" className="w-full h-full object-cover opacity-20" src="/images/2.jpg" />
                    <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 to-navy-950"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="flex flex-col gap-2 mb-6">
                            <span className="inline-block bg-light-teal text-primary px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest self-start mx-auto">
                                For Jobseekers
                            </span>
                            <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase">Energy. Expertise. Excellence.</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Elevate Your Career with <span className="text-primary">Zest Technologies</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
                            Transcend the standard application cycle. We provide elite technical specialists with direct access to high-impact opportunities at global enterprises. Let's architect your professional evolution.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#book-call" className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded font-semibold transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 flex items-center justify-center gap-2">
                                Book a Discovery Call <TrendingUp size={18} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* How We Help Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-950 dark:text-white mb-4">How We Fast-Track Your Placement</h2>
                        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Our role extends beyond candidate placement. We function as your dedicated career strategists, providing deep-market intelligence, rigorous preparation, and direct entry into executive decision-making circles.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-navy-900 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all"
                        >
                            <div className="w-14 h-14 bg-light-teal rounded-lg flex items-center justify-center text-primary mb-6">
                                <Users size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-navy-950 dark:text-white mb-3">Direct Network Access</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Bypass the saturation of public job boards. Leverage our established alliances with technical leadership at Fortune 500 enterprises and hyper-growth disruptors.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-navy-900 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all"
                        >
                            <div className="w-14 h-14 bg-light-teal rounded-lg flex items-center justify-center text-primary mb-6">
                                <Target size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-navy-950 dark:text-white mb-3">Role Matching</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">We prioritize long-term compatibility over transactional placement. Our consultants perform a multi-dimensional analysis of your technical mastery, cultural values, and fiscal objectives to identify precision-aligned opportunities.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-navy-900 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all"
                        >
                            <div className="w-14 h-14 bg-light-teal rounded-lg flex items-center justify-center text-primary mb-6">
                                <TrendingUp size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-navy-950 dark:text-white mb-3">Interview Prep</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Approach high-stakes interviews with complete confidence. We equip you with proprietary knowledge regarding organizational culture, technical benchmarks, and specific leadership expectations.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-navy-900 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all"
                        >
                            <div className="w-14 h-14 bg-light-teal rounded-lg flex items-center justify-center text-primary mb-6">
                                <Briefcase size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-navy-950 dark:text-white mb-3">Offer Negotiation</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Our strategists manage the complexities of offer finalization. We expertly negotiate total compensation packages, including equity and benefits, to ensure your financial milestones are realized.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Calendar Embed Section */}
            <section id="book-call" className="w-full bg-[#1e1e1e]">
                <div style={{ width: "100%", height: "100vh", position: "relative" }}>
                    <iframe
                        title="Book a Discovery Call"
                        src="https://cal.com/zest-tech-wwk9de/30min?overlayCalendar=true"
                        style={{ border: 0, width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
        </div>
    );
}
