import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <section className="relative h-[85vh] flex items-center overflow-hidden bg-navy-950">
                <div className="absolute inset-0 z-0">
                    <div className="hero-slide">
                        <img alt="Corporate team meeting" className="w-full h-full object-cover" src="/images/1.jpg" />
                    </div>
                    <div className="hero-slide">
                        <img alt="Professional IT office" className="w-full h-full object-cover" src="/images/2.jpg" />
                    </div>
                    <div className="hero-slide">
                        <img alt="Data Infrastructure" className="w-full h-full object-cover" src="/images/3.jpg" />
                    </div>
                    <div className="absolute inset-0 hero-gradient z-10"></div>
                </div>
                <div className="container mx-auto px-6 relative z-20">
                    <div className="max-w-3xl">
                        <span className="inline-block bg-primary/20 text-primary border border-primary/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 backdrop-blur-sm">
                            Tech Talent Solutions For You
                        </span>
                        <h1 className="text-5xl md:text-7xl font-semibold text-white mb-6 leading-[1.1]">
                            Expert IT Staffing for <span className="text-primary">Your Business Growth</span>
                        </h1>
                        <p className="text-lg text-slate-300 mb-10 max-w-xl leading-relaxed">
                            Connecting world-class enterprises with elite technology professionals. We bridge the gap between innovation and execution with tailored staffing strategies.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/jobseekers" className="inline-block bg-primary hover:bg-orange-600 text-white px-10 py-4 rounded font-semibold transition-all transform hover:-translate-y-1 hover:shadow-xl">Explore Now</Link>
                            <Link to="/contact" className="inline-block bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded font-semibold transition-all hover:border-white">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 dark:bg-navy-900 py-16">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="bg-white dark:bg-navy-800 p-8 rounded shadow-sm border-l-4 border-primary group hover:shadow-xl hover:-translate-y-2 transition-all"
                        >
                            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-4xl">workspace_premium</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Award winning Company</h3>
                            <p className="text-slate-500 dark:text-slate-400">Recognized for excellence in IT staffing and solution delivery across North America.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="bg-navy-950 p-8 rounded shadow-xl text-white group hover:shadow-2xl hover:-translate-y-2 transition-all"
                        >
                            <div className="w-16 h-16 bg-primary rounded flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-4xl">verified</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Best quality work</h3>
                            <p className="text-slate-400">Delivering top-notch talent and expertise for exceptional results in every project engagement.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="bg-white dark:bg-navy-800 p-8 rounded shadow-sm border-l-4 border-primary group hover:shadow-xl hover:-translate-y-2 transition-all"
                        >
                            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-4xl">sentiment_satisfied</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Satisfaction guarantee</h3>
                            <p className="text-slate-500 dark:text-slate-400">Ensuring your complete satisfaction with our tailored IT services and dedicated support.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-24 relative overflow-hidden">
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
                            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded text-xs font-semibold uppercase tracking-widest mb-4 hover:bg-primary/20 transition-colors cursor-default">Zest Technologies LLC</span>
                            <h2 className="text-4xl md:text-5xl font-semibold mb-8 leading-tight">Your Partner for <span className="text-primary relative inline-block group">Elite IT Staffing<span className="absolute bottom-0 left-0 w-0 h-1 bg-primary/30 transition-all duration-300 group-hover:w-full"></span></span></h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed hover:text-slate-900 dark:hover:text-white transition-colors">
                                Welcome to Zest Technologies LLC, your trusted partner in IT staffing and technology talent solutions. We specialize in delivering customized staffing services designed to align with your unique business objectives and technical requirements.
                            </p>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed hover:text-slate-900 dark:hover:text-white transition-colors">
                                Whether you're looking to build a high-performing IT team or need assistance with a specific project, we've got you covered. At Zest Technologies LLC, we understand the challenges of today's fast-paced IT landscape, and we're here to support you every step of the way.
                            </p>
                            <ul className="space-y-4 mb-10">
                                <li className="flex items-center gap-3 group/li"><span className="material-symbols-outlined text-primary font-semibold group-hover/li:scale-125 transition-transform">check_circle</span> <span className="font-semibold group-hover/li:text-primary transition-colors">Tailored Staffing Solutions</span></li>
                                <li className="flex items-center gap-3 group/li"><span className="material-symbols-outlined text-primary font-semibold group-hover/li:scale-125 transition-transform">check_circle</span> <span className="font-semibold group-hover/li:text-primary transition-colors">Top 1% Industry Talent</span></li>
                                <li className="flex items-center gap-3 group/li"><span className="material-symbols-outlined text-primary font-semibold group-hover/li:scale-125 transition-transform">check_circle</span> <span className="font-semibold group-hover/li:text-primary transition-colors">End-to-End Project Management</span></li>
                            </ul>
                            <button className="bg-[#001D3D] dark:bg-white dark:text-[#001D3D] text-white px-8 py-3.5 rounded font-semibold hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-1 transition-all active:scale-95">Learn More About Us</button>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-50 dark:bg-navy-950">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="text-center mb-16"
                    >
                        <span className="bg-primary/10 text-primary px-4 py-1 rounded text-xs font-semibold uppercase tracking-widest mb-4 inline-block hover:bg-primary/20 transition-colors cursor-default">Our Services</span>
                        <h2 className="text-4xl font-semibold">Enterprise Technology <span className="text-primary relative inline-block group">Capabilities<span className="absolute bottom-0 left-0 w-0 h-1 bg-primary/30 transition-all duration-300 group-hover:w-full"></span></span></h2>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="relative overflow-hidden group rounded-xl shadow-lg h-[400px] cursor-pointer hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
                        >
                            <img alt="IT Staffing" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent group-hover:via-navy-950/60 transition-colors duration-500"></div>
                            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                <h3 className="text-xl font-semibold mb-3 text-white transition-colors duration-300 group-hover:text-primary">IT Staffing Solutions</h3>
                                <p className="text-slate-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Scalable staffing models to support your internal teams with elite technology professionals.</p>
                                <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase">Read More <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-2">arrow_forward</span></div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="relative overflow-hidden group rounded-xl shadow-lg h-[400px] cursor-pointer hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
                        >
                            <img alt="IT Consulting" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80" />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent group-hover:via-navy-950/60 transition-colors duration-500"></div>
                            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                <h3 className="text-xl font-semibold mb-3 text-white transition-colors duration-300 group-hover:text-primary">Project-Based IT Consulting</h3>
                                <p className="text-slate-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">End-to-end strategic planning and technical execution for your most critical business projects.</p>
                                <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase">Read More <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-2">arrow_forward</span></div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="relative overflow-hidden group rounded-xl shadow-lg h-[400px] cursor-pointer hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
                        >
                            <img alt="Big Data" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent group-hover:via-navy-950/60 transition-colors duration-500"></div>
                            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                <h3 className="text-xl font-semibold mb-3 text-white transition-colors duration-300 group-hover:text-primary">Big Data and Analytics</h3>
                                <p className="text-slate-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Extracting actionable insights from complex datasets to drive data-informed decisions.</p>
                                <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase">Read More <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-2">arrow_forward</span></div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="relative overflow-hidden group rounded-xl shadow-lg h-[400px] cursor-pointer hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
                        >
                            <img alt="AI & ML" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent group-hover:via-navy-950/60 transition-colors duration-500"></div>
                            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                <h3 className="text-xl font-semibold mb-3 text-white transition-colors duration-300 group-hover:text-primary">AI & Machine Learning</h3>
                                <p className="text-slate-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Implementing intelligent automation and predictive modeling for next-gen operations.</p>
                                <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase">Read More <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-2">arrow_forward</span></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="relative py-24 text-white">
                <div className="absolute inset-0 z-0">
                    <img alt="Modern technical infrastructure" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80" />
                    <div className="absolute inset-0 bg-[#001D3D]/85 backdrop-blur-[2px]"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="bg-primary p-12 rounded shadow-2xl"
                        >
                            <h2 className="text-4xl font-semibold mb-6 leading-tight">Delivering Top-Notch IT Solutions</h2>
                            <p className="text-white/95 mb-6 text-lg">At Zest Technologies LLC, we pride ourselves on delivering top-notch IT solutions tailored to your unique needs.</p>
                            <p className="text-white/80 text-sm italic border-l-4 border-white/30 pl-4">"Our dedicated team ensures excellence in every aspect, providing robust and innovative solutions for your business challenges."</p>
                        </motion.div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 lg:mt-0">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                className="glass-card p-8 rounded flex flex-col items-center text-center hover:bg-white/10 transition-colors"
                            >
                                <span className="material-symbols-outlined text-primary text-5xl mb-4">language</span>
                                <h4 className="text-xl font-semibold mb-2">Web Design</h4>
                                <p className="text-xs text-slate-300">Innovative designs that captivate and engage your audience.</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true, margin: "-50px" }}
                                className="glass-card p-8 rounded flex flex-col items-center text-center hover:bg-white/10 transition-colors"
                            >
                                <span className="material-symbols-outlined text-primary text-5xl mb-4">rocket_launch</span>
                                <h4 className="text-xl font-semibold mb-2">App Development</h4>
                                <p className="text-xs text-slate-300">Customized applications tailored for seamless experiences.</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true, margin: "-50px" }}
                                className="glass-card p-8 rounded flex flex-col items-center text-center hover:bg-white/10 transition-colors"
                            >
                                <span className="material-symbols-outlined text-primary text-5xl mb-4">cloud_done</span>
                                <h4 className="text-xl font-semibold mb-2">Cloud Service</h4>
                                <p className="text-xs text-slate-300">Scalable and secure cloud solutions for efficient operations.</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                viewport={{ once: true, margin: "-50px" }}
                                className="glass-card p-8 rounded flex flex-col items-center text-center hover:bg-white/10 transition-colors"
                            >
                                <span className="material-symbols-outlined text-primary text-5xl mb-4">campaign</span>
                                <h4 className="text-xl font-semibold mb-2">Digital Marketing</h4>
                                <p className="text-xs text-slate-300">Strategic campaigns that elevate your brand and visibility.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img alt="Industries background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80" />
                    <div className="absolute inset-0 bg-navy-950/90"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center text-white">
                    <h2 className="text-3xl font-semibold mb-4">Industries We Serve</h2>
                    <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
                    <p className="max-w-3xl mx-auto text-slate-300 mb-16 text-sm uppercase tracking-wider">Explore opportunities and innovation across sectors. Find your ideal career path with our insights into various industries.</p>
                </div>

                <div className="relative w-full overflow-hidden flex z-10 py-4">
                    <motion.div
                        className="flex gap-8 whitespace-nowrap w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                    >
                        {[...Array(2)].map((_, idx) => (
                            <div key={idx} className="flex gap-8">
                                <div className="glass-card w-[350px] p-10 rounded text-left text-white border border-white/10 hover:border-primary/50 transition-colors flex-shrink-0">
                                    <div className="text-primary mb-6"><span className="material-symbols-outlined text-5xl">computer</span></div>
                                    <h3 className="text-2xl font-semibold mb-4">IT & Software</h3>
                                    <p className="text-slate-300 text-sm whitespace-normal">Empowering tech companies with top-tier developers, engineers, and product experts to build scalable solutions.</p>
                                </div>
                                <div className="glass-card w-[350px] p-10 rounded text-left text-white border border-white/10 hover:border-primary/50 transition-colors flex-shrink-0">
                                    <div className="text-primary mb-6"><span className="material-symbols-outlined text-5xl">health_and_safety</span></div>
                                    <h3 className="text-2xl font-semibold mb-4">Healthcare</h3>
                                    <p className="text-slate-300 text-sm whitespace-normal">Providing compliant and secure IT staffing to modernize healthcare and streamline operations.</p>
                                </div>
                                <div className="glass-card w-[350px] p-10 rounded text-left text-white border border-white/10 hover:border-primary/50 transition-colors flex-shrink-0">
                                    <div className="text-primary mb-6"><span className="material-symbols-outlined text-5xl">account_balance</span></div>
                                    <h3 className="text-2xl font-semibold mb-4">Finance</h3>
                                    <p className="text-slate-300 text-sm whitespace-normal">Supplying specialists in fintech, cybersecurity, and data analysis to secure and grow your financial services.</p>
                                </div>
                                <div className="glass-card w-[350px] p-10 rounded text-left text-white border border-white/10 hover:border-primary/50 transition-colors flex-shrink-0">
                                    <div className="text-primary mb-6"><span className="material-symbols-outlined text-5xl">rocket_launch</span></div>
                                    <h3 className="text-2xl font-semibold mb-4">Startups & SMBs</h3>
                                    <p className="text-slate-300 text-sm whitespace-normal">Helping growing businesses scale quickly with flexible, cost-effective staffing and agile technology talent.</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="container mx-auto px-6 py-12">
                <div className="bg-gradient-to-r from-[#001D3D] to-primary p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-white relative overflow-hidden group">
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl font-semibold mb-2">Grow Fast Your Business</h2>
                        <p className="text-white/80">Have any project in your mind? Feel free to contact with us anytime.</p>
                    </div>
                    <Link to="/contact" className="relative z-10 bg-white text-[#001D3D] px-10 py-4 rounded-full font-semibold hover:bg-slate-100 transition-all shadow-xl hover:-translate-y-1 block md:inline-block">Contact Now</Link>
                </div>
            </section>
        </>
    );
}
