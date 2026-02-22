import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <>
            {/* Mini Hero */}
            <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden bg-navy-950">
                <div className="absolute inset-0 z-0">
                    <img alt="Office overview" className="w-full h-full object-cover opacity-30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7lSCb3Uf3ODUPfALP9pao07eQLgdPp66r5vwhfYjog-edP-kbU1zVqVhcl_2fwADpXOtsY_EopfT6bL_Jgsp0CiMeFwhCXomYzYP_WA1Se2crw6PUoVUOo0mcOaaaWSPztouRT1OfxY8yEW75Q5iSlASTMPs1U0K3MPwu6Qi-nRToxhcOwMzQfwH1sl38B1t1oA1HHE5gRUMlMiS79fh2HTSEdgi140DBnGBgI6HLcRRbG11S_GPUeDNQL9afFTgLf_QP2m6NXbVZ" />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-950 to-transparent"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10 text-white">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-2 text-xs uppercase font-semibold tracking-widest text-slate-300 mb-4">
                            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                            <span className="material-symbols-outlined text-sm">chevron_right</span>
                            <span className="text-primary">About Us</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-semibold text-white">About Us</h1>
                    </motion.div>
                </div>
            </section>

            {/* Our Company Section - Using Home Grid Component */}
            <section className="py-24 relative overflow-hidden bg-white dark:bg-navy-900">
                <div className="absolute right-0 top-0 bottom-0 pointer-events-none select-none opacity-[0.03] dark:opacity-[0.05]">
                    <span className="text-vertical text-[6rem] md:text-[12rem] font-black uppercase tracking-[1rem] md:tracking-[2rem]">AGENCY</span>
                </div>
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="grid grid-cols-2 gap-2 md:gap-4 relative group/grid"
                        >
                            <div className="overflow-hidden rounded shadow-lg"><img alt="Team collaborating" className="w-full h-32 md:h-64 object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" /></div>
                            <div className="overflow-hidden rounded shadow-lg mt-4 md:mt-8"><img alt="Workplace" className="w-full h-32 md:h-64 object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" /></div>
                            <div className="overflow-hidden rounded shadow-lg -mt-4 md:-mt-8"><img alt="Tech office" className="w-full h-32 md:h-64 object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" /></div>
                            <div className="overflow-hidden rounded shadow-lg"><img alt="Meeting" className="w-full h-32 md:h-64 object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" /></div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
                                viewport={{ once: true }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white p-4 md:p-8 rounded shadow-2xl text-center min-w-[120px] md:min-w-[180px] hover:scale-110 hover:shadow-primary/50 transition-all cursor-default z-10"
                            >
                                <div className="text-xl md:text-2xl font-semibold">Modern</div>
                                <div className="text-xs md:text-sm font-semibold uppercase">Staffing<br />Solutions</div>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded text-xs font-semibold uppercase tracking-widest mb-4">Our Company</span>
                            <h2 className="text-4xl md:text-5xl font-semibold mb-8 leading-tight">Your Success, Our Commitment: <span className="text-primary relative inline-block group">Exceptional Staffing<span className="absolute bottom-0 left-0 w-0 h-1 bg-primary/30 transition-all duration-300 group-hover:w-full"></span></span> & IT Solutions</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed hover:text-slate-900 dark:hover:text-white transition-colors">
                                At Zest Technologies LLC, our mission is to empower your success by providing exceptional staffing and IT solutions. With a dedicated team of seasoned professionals, we strive to exceed your expectations and contribute to your growth.
                            </p>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed hover:text-slate-900 dark:hover:text-white transition-colors">
                                Our commitment to excellence is evident in every aspect of our work. From understanding your unique requirements to delivering tailored solutions that fit perfectly. We take the time to understand your business and its specific requirements before crafting solutions that align with your goals.
                            </p>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 font-semibold leading-relaxed shadow-sm border-l-4 border-primary pl-6 hover:text-slate-900 dark:hover:text-white transition-colors">
                                Trust Zest Technologies LLC to be your reliable partner in success, providing innovative and customized solutions that propel your business forward.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features List Section */}
            <section className="py-24 bg-slate-50 dark:bg-navy-950">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <span className="inline-block bg-primary text-white px-6 py-2 text-xs font-semibold uppercase tracking-widest mb-6 -ml-2 skew-x-[-15deg]"><span className="inline-block skew-x-[15deg]">Welcome to Zest Technologies</span></span>
                            <h2 className="text-4xl md:text-5xl font-semibold mb-10 leading-tight">Experienced <span className="text-primary">designers & developers</span></h2>

                            <div className="space-y-10">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="flex gap-6 group"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <span className="material-symbols-outlined font-semibold">check</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Best user interfaces</h4>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Modern, efficient, and visually appealing designs that maximize user retention and engagement.</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    viewport={{ once: true }}
                                    className="flex gap-6 group"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <span className="material-symbols-outlined font-semibold">check</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Smooth development</h4>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Streamlined workflows, cleaner code styling, and robust architecture to perform at scale.</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    viewport={{ once: true }}
                                    className="flex gap-6 group"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <span className="material-symbols-outlined font-semibold">check</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Quality web design</h4>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Engaging, accessible, and fast-loading web apps pushing technical boundaries completely.</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]"
                        >
                            <img alt="Team members" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white dark:bg-navy-900 border-t border-slate-100 dark:border-navy-950/50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="md:w-1/3"
                        >
                            <span className="inline-block bg-primary text-white px-4 py-1 text-xs font-semibold uppercase tracking-widest mb-6 skew-x-[-15deg]"><span className="inline-block skew-x-[15deg]">Why Choose Us</span></span>
                            <h2 className="text-4xl font-semibold leading-tight">Reasons to<br />Partner<br />with us</h2>
                            <div className="mt-8 flex gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary opacity-50 block"></span>
                                <span className="w-8 h-2 rounded-full bg-primary block"></span>
                                <span className="w-2 h-2 rounded-full bg-primary opacity-50 block"></span>
                            </div>
                        </motion.div>

                        <div className="md:w-2/3 grid sm:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-navy-800 p-8 rounded shadow-lg border-t-4 border-primary hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center"
                            >
                                <div className="text-primary mb-4 flex items-center justify-center bg-primary/10 w-16 h-16 rounded-full"><span className="material-symbols-outlined text-3xl">timer</span></div>
                                <h4 className="font-semibold text-xl mb-3">Fast Turnaround Time</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                    We quickly identify and deploy the right professionals so your projects stay on track, minimizing costly delays.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-navy-800 p-8 rounded shadow-lg border-t-4 border-primary hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center"
                            >
                                <div className="text-primary mb-4 flex items-center justify-center bg-primary/10 w-16 h-16 rounded-full"><span className="material-symbols-outlined text-3xl">verified_user</span></div>
                                <h4 className="font-semibold text-xl mb-3">Pre-Screened Candidates</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                    Every candidate undergoes rigorous technical and cultural vetting to ensure they are the perfect fit for your team.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-navy-800 p-8 rounded shadow-lg border-t-4 border-primary hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center"
                            >
                                <div className="text-primary mb-4 flex items-center justify-center bg-primary/10 w-16 h-16 rounded-full"><span className="material-symbols-outlined text-3xl">handshake</span></div>
                                <h4 className="font-semibold text-xl mb-3">Flexible Hiring Models</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                    From contract to full-time placement, we offer adaptable models designed specifically for your organization's budget.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-navy-800 p-8 rounded shadow-lg border-t-4 border-primary hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center"
                            >
                                <div className="text-primary mb-4 flex items-center justify-center bg-primary/10 w-16 h-16 rounded-full"><span className="material-symbols-outlined text-3xl">support_agent</span></div>
                                <h4 className="font-semibold text-xl mb-3">Dedicated Account Support</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                    Experience responsive, white-glove service from your personal account manager throughout the entire engagement.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reusable CTA */}
            <section className="container mx-auto px-6 py-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-[#001D3D] to-primary p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-white relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl font-semibold mb-2">Grow Fast Your Business</h2>
                        <p className="text-white/80">Have any project in your mind? Feel free to contact with us anytime.</p>
                    </div>
                    <button className="relative z-10 bg-white text-[#001D3D] px-10 py-4 rounded-full font-semibold hover:bg-slate-100 transition-all shadow-xl hover:-translate-y-1">Contact Now</button>
                </motion.div>
            </section>
        </>
    );
}
