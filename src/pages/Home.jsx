import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Home() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Zest Technologies LLC",
        "url": "https://zesttech.com",
        "logo": "https://zesttech.com/images/default-logo.png",
        "description": "Zest Technologies provides premium IT solutions, staffing, and technical expertise.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "1 Mid America Plaza Suite 300 PMB 7084",
            "addressLocality": "Oakbrook Terrace",
            "addressRegion": "IL",
            "postalCode": "60181",
            "addressCountry": "US"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1 6304898943",
            "contactType": "customer service"
        }
    };

    return (
        <>
            <SEO
                title="Home"
                description="Zest Technologies LLC provides expert IT staffing solutions, project-based IT consulting, big data and analytics, and AI/ML services."
                url="/"
                schema={organizationSchema}
            />
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
                        <div className="flex flex-col gap-2 mb-6">
                            <span className="inline-block bg-light-teal text-primary border border-primary/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest backdrop-blur-sm self-start">
                                Tech Talent Solutions For You
                            </span>
                            <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase">Energy. Expertise. Excellence.</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-semibold text-white mb-6 leading-[1.1]">
                            Expert IT Staffing for <span className="text-primary">Your Business Growth</span>
                        </h1>
                        <p className="text-lg text-slate-300 mb-10 max-w-xl leading-relaxed">
                            Uniting global industry leaders with top-tier technical specialists. We translate technological vision into operational reality through precision-targeted talent acquisition.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/jobseekers" className="inline-block bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded font-semibold transition-all transform hover:-translate-y-1 hover:shadow-xl">Explore Now</Link>
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
                            <div className="w-16 h-16 bg-light-teal dark:bg-primary/20 rounded flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-4xl">psychology</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Expert Technical Vetting</h3>
                            <p className="text-slate-500 dark:text-slate-400">Every candidate undergoes rigorous technical assessments and strategic screening to ensure they possess the precise expertise your projects demand.</p>
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
                            <p className="text-slate-400">Supplying premier technical proficiency and high-impact human capital to ensure superior outcomes for every corporate initiative.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="bg-white dark:bg-navy-800 p-8 rounded shadow-sm border-l-4 border-primary group hover:shadow-xl hover:-translate-y-2 transition-all"
                        >
                            <div className="w-16 h-16 bg-light-teal dark:bg-primary/20 rounded flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-4xl">sentiment_satisfied</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Satisfaction guarantee</h3>
                            <p className="text-slate-500 dark:text-slate-400">Guaranteeing seamless alignment with your business goals through customized IT solutions and tireless operational support.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-24 relative overflow-hidden">

                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="grid grid-cols-2 gap-2 md:gap-4 relative group/grid"
                        >
                            <div className="overflow-hidden rounded shadow-lg"><img alt="Team collaborating" loading="lazy" className="w-full h-32 md:h-64 object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" /></div>
                            <div className="overflow-hidden rounded shadow-lg mt-4 md:mt-8"><img alt="Workplace" loading="lazy" className="w-full h-32 md:h-64 object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" /></div>
                            <div className="overflow-hidden rounded shadow-lg -mt-4 md:-mt-8"><img alt="Tech office" loading="lazy" className="w-full h-32 md:h-64 object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" /></div>
                            <div className="overflow-hidden rounded shadow-lg"><img alt="Meeting" loading="lazy" className="w-full h-32 md:h-64 object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" /></div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <div className="flex flex-col gap-2 mb-4">
                                <span className="inline-block bg-light-teal text-primary px-5 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-light-teal transition-colors cursor-default self-start">Zest Technologies LLC</span>
                                <span className="text-primary/80 font-bold tracking-wider text-xs uppercase">Energy. Expertise. Excellence.</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-semibold mb-8 leading-tight">Your Reliable <span className="text-primary relative inline-block group">IT Staffing Partner<span className="absolute bottom-0 left-0 w-0 h-1 bg-primary/30 transition-all duration-300 group-hover:w-full"></span></span></h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed hover:text-slate-900 dark:hover:text-white transition-colors">
                                Welcome to Zest Technologies LLC, your premier ally in strategic IT recruitment and technical resource optimization. We excel at providing bespoke staffing architectures specifically engineered to meet your organization's distinct goals and infrastructure needs.
                            </p>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed hover:text-slate-900 dark:hover:text-white transition-colors">
                                From assembling elite cross-functional engineering teams to providing surgical expertise for mission-critical projects, our capabilities are comprehensive. We navigate the complexities of the modern digital landscape so you can focus on core innovation while we handle the technical depth.
                            </p>
                            <ul className="space-y-4 mb-10">
                                <li className="flex items-center gap-3 group/li"><span className="material-symbols-outlined text-primary font-semibold group-hover/li:scale-125 transition-transform">check_circle</span> <span className="font-semibold group-hover/li:text-primary transition-colors">Tailored Staffing Solutions</span></li>
                                <li className="flex items-center gap-3 group/li"><span className="material-symbols-outlined text-primary font-semibold group-hover/li:scale-125 transition-transform">check_circle</span> <span className="font-semibold group-hover/li:text-primary transition-colors">Top 1% Industry Talent</span></li>
                                <li className="flex items-center gap-3 group/li"><span className="material-symbols-outlined text-primary font-semibold group-hover/li:scale-125 transition-transform">check_circle</span> <span className="font-semibold group-hover/li:text-primary transition-colors">End-to-End Project Management</span></li>
                            </ul>
                            <Link to="/about" className="inline-block bg-[#001D3D] dark:bg-white dark:text-[#001D3D] text-white px-8 py-3.5 rounded font-semibold hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-1 transition-all active:scale-95">Learn More About Us</Link>
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
                        <span className="bg-light-teal text-primary px-4 py-1 rounded text-xs font-semibold uppercase tracking-widest mb-4 inline-block hover:bg-light-teal transition-colors cursor-default">Our Services</span>
                        <h2 className="text-4xl font-semibold">Enterprise Technology <span className="text-primary relative inline-block group">Capabilities<span className="absolute bottom-0 left-0 w-0 h-1 bg-primary/30 transition-all duration-300 group-hover:w-full"></span></span></h2>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Link
                            to="/services"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="relative overflow-hidden group rounded-xl shadow-lg h-[400px] cursor-pointer hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 block"
                        >
                            <img alt="IT Staffing" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent group-hover:via-navy-950/60 transition-colors duration-500"></div>
                            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                <h3 className="text-xl font-semibold mb-3 text-white transition-colors duration-300 group-hover:text-primary">IT Staffing Solutions</h3>
                                <p className="text-slate-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Dynamic resource allocation strategies that fortify your internal capabilities with world-class technical experts.</p>
                                <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase">Read More <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-2">arrow_forward</span></div>
                            </div>
                        </Link>
                        <Link
                            to="/services"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="relative overflow-hidden group rounded-xl shadow-lg h-[400px] cursor-pointer hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 block"
                        >
                            <img alt="IT Consulting" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80" />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent group-hover:via-navy-950/60 transition-colors duration-500"></div>
                            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                <h3 className="text-xl font-semibold mb-3 text-white transition-colors duration-300 group-hover:text-primary">Project-Based IT Consulting</h3>
                                <p className="text-slate-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Comprehensive project lifecycles, from high-level strategic architecture to full-stack technical deployment for your key priorities.</p>
                                <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase">Read More <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-2">arrow_forward</span></div>
                            </div>
                        </Link>
                        <Link
                            to="/services"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="relative overflow-hidden group rounded-xl shadow-lg h-[400px] cursor-pointer hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 block"
                        >
                            <img alt="Big Data" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent group-hover:via-navy-950/60 transition-colors duration-500"></div>
                            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                <h3 className="text-xl font-semibold mb-3 text-white transition-colors duration-300 group-hover:text-primary">Big Data and Analytics</h3>
                                <p className="text-slate-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Transforming raw data into strategic intelligence, enabling your leadership to make precision-based, data-driven decisions.</p>
                                <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase">Read More <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-2">arrow_forward</span></div>
                            </div>
                        </Link>
                        <Link
                            to="/services"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="relative overflow-hidden group rounded-xl shadow-lg h-[400px] cursor-pointer hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 block"
                        >
                            <img alt="AI & ML" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent group-hover:via-navy-950/60 transition-colors duration-500"></div>
                            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                <h3 className="text-xl font-semibold mb-3 text-white transition-colors duration-300 group-hover:text-primary">AI & Machine Learning</h3>
                                <p className="text-slate-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Deploying advanced neural networks and predictive analytics to future-proof your workflows and operational efficiency.</p>
                                <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase">Read More <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-2">arrow_forward</span></div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="relative py-24 text-white">
                <div className="absolute inset-0 z-0">
                    <img alt="Modern technical infrastructure" loading="lazy" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80" />
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
                            <h2 className="text-4xl font-semibold mb-6 leading-tight">Driving innovation through IT expertise</h2>
                            <p className="text-white/95 mb-6 text-lg">Zest Technologies LLC is committed to engineering high-caliber IT ecosystems that are precisely calibrated to your specific enterprise demands.</p>
                            <p className="text-white/80 text-sm italic border-l-4 border-white/30 pl-4">"Our specialist consultants maintain a standard of total excellence, architecting resilient and pioneering solutions for the most complex corporate hurdles."</p>
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
                                <p className="text-xs text-slate-300">Cutting-edge visual architectures designed to maximize user engagement and brand resonance.</p>
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
                                <p className="text-xs text-slate-300">Custom-built digital platforms engineered for high performance and intuitive user journeys.</p>
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
                                <p className="text-xs text-slate-300">Robust, high-availability cloud infrastructures that empower secure and streamlined global operations.</p>
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
                                <p className="text-xs text-slate-300">Data-driven marketing strategies that significantly amplify your market presence and brand authority.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img alt="Industries background" loading="lazy" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80" />
                    <div className="absolute inset-0 bg-navy-950/90"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center text-white">
                    <h2 className="text-3xl font-semibold mb-4">Industries We Serve</h2>
                    <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
                    <p className="max-w-3xl mx-auto text-slate-300 mb-16 text-sm uppercase tracking-wider">Investigate emerging trends and innovative breakthroughs across diverse sectors. Leverage our deep industry intelligence to map your professional trajectory.</p>
                </div>

                <div className="relative w-full overflow-hidden flex z-10 py-4">
                    <motion.div
                        className="flex gap-8 whitespace-nowrap w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                    >
                        {[...Array(2)].map((_, idx) => (
                            <div key={idx} className="flex gap-8">
                                <Link to="/industries" className="glass-card w-[350px] p-10 rounded text-left text-white border border-white/10 hover:border-primary/50 transition-all flex-shrink-0 block hover:scale-[1.02] active:scale-95 group">
                                    <div className="text-primary mb-6 transition-transform group-hover:scale-110"><span className="material-symbols-outlined text-5xl">computer</span></div>
                                    <h3 className="text-2xl font-semibold mb-4">IT & Software</h3>
                                    <p className="text-slate-300 text-sm whitespace-normal">Fueling technology leaders with elite software architects and product visionaries to build more scalable, resilient platforms.</p>
                                </Link>
                                <Link to="/industries" className="glass-card w-[350px] p-10 rounded text-left text-white border border-white/10 hover:border-primary/50 transition-all flex-shrink-0 block hover:scale-[1.02] active:scale-95 group">
                                    <div className="text-primary mb-6 transition-transform group-hover:scale-110"><span className="material-symbols-outlined text-5xl">health_and_safety</span></div>
                                    <h3 className="text-2xl font-semibold mb-4">Healthcare</h3>
                                    <p className="text-slate-300 text-sm whitespace-normal">Delivering fully compliant and hyper-secure technical talent to accelerate digital transformation in modern healthcare.</p>
                                </Link>
                                <Link to="/industries" className="glass-card w-[350px] p-10 rounded text-left text-white border border-white/10 hover:border-primary/50 transition-all flex-shrink-0 block hover:scale-[1.02] active:scale-95 group">
                                    <div className="text-primary mb-6 transition-transform group-hover:scale-110"><span className="material-symbols-outlined text-5xl">account_balance</span></div>
                                    <h3 className="text-2xl font-semibold mb-4">Finance</h3>
                                    <p className="text-slate-300 text-sm whitespace-normal">Provisioning specialized experts in fintech architecture and cybersecurity to safeguard and expand your financial infrastructure.</p>
                                </Link>
                                <Link to="/industries" className="glass-card w-[350px] p-10 rounded text-left text-white border border-white/10 hover:border-primary/50 transition-all flex-shrink-0 block hover:scale-[1.02] active:scale-95 group">
                                    <div className="text-primary mb-6 transition-transform group-hover:scale-110"><span className="material-symbols-outlined text-5xl">rocket_launch</span></div>
                                    <h3 className="text-2xl font-semibold mb-4">Startups & SMBs</h3>
                                    <p className="text-slate-300 text-sm whitespace-normal">Empowering high-growth ventures to expand rapidly through adaptable, budget-conscious talent acquisition and agile technical resources.</p>
                                </Link>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>


        </>
    );
}
