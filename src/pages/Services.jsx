import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Services() {
    const servicesList = [
        {
            title: "IT Staffing Solutions",
            desc: "Dynamic resource allocation strategies that fortify your internal teams with premier technical talent, accelerating your strategic growth.",
            icon: "groups"
        },
        {
            title: "Project-Based IT Consulting",
            desc: "Comprehensive project lifecycles, from high-level strategic architecture to specialized technical deployment for your most complex corporate initiatives.",
            icon: "monitoring"
        },
        {
            title: "Technical Recruitment Services",
            desc: "Facilitating high-performance matches between world-class technical specialists and your organization's unique culture and operational needs.",
            icon: "manage_search"
        },
        {
            title: "IT Contract Staffing",
            desc: "Agile, on-demand technical resources engineered to address your immediate project requirements and specialized short-term surges.",
            icon: "assignment_ind"
        },
        {
            title: "Big Data & Analytics",
            desc: "Synthesizing raw data into powerful strategic intelligence, empowering your leadership to make precision-based, data-driven decisions.",
            icon: "insights"
        },
        {
            title: "AI & Machine Learning",
            desc: "Deploying sophisticated neural networks and predictive analytics to future-proof your workflows and maximize operational throughput.",
            icon: "smart_toy"
        },
        {
            title: "Digital Marketing Services",
            desc: "Precision-targeted marketing architectures designed to amplify your market authority and maximize audience resonance through data-driven engagement.",
            icon: "campaign"
        },
        {
            title: "Web & App Development",
            desc: "Engineering resilient, high-availability digital platforms and intuitive mobile journeys specifically calibrated to your enterprise requirements.",
            icon: "devices"
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50 dark:bg-navy-900 border-b border-slate-200 dark:border-navy-800">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">

                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="lg:w-1/2"
                        >
                            <div className="flex items-center gap-2 text-xs uppercase font-semibold tracking-widest text-slate-500 dark:text-slate-400 mb-6 font-semibold">
                                <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1"><span className="material-symbols-outlined text-sm">home</span> Home</Link>
                                <span className="material-symbols-outlined text-sm">chevron_right</span>
                                <span className="text-primary font-semibold">Services</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-semibold text-[#001D3D] dark:text-white mb-6 leading-tight">
                                Powering Progress <br className="hidden md:block" />Through <span className="text-primary">Technology</span>
                            </h1>
                            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-xl leading-relaxed">
                                We deliver pioneering, secure, and elastic IT infrastructures that overcome complex hurdles and generate quantifiable impact for your expanding enterprise.
                            </p>
                            <button className="bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-1">
                                Get Started
                            </button>
                        </motion.div>

                        {/* Right Content Grid (like the reference image) */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:w-1/2 w-full grid grid-cols-2 gap-4"
                        >
                            <div className="row-span-2 overflow-hidden rounded-2xl shadow-lg relative group h-full min-h-[250px] lg:min-h-full">
                                <img alt="Office discussion" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80" />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent"></div>
                            </div>

                            <div className="bg-light-teal dark:bg-primary/20 rounded-2xl p-6 flex flex-col justify-center shadow-lg relative overflow-hidden group">
                                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-light-teal rounded-full blur-2xl group-hover:bg-primary/30 transition-colors"></div>
                                <h3 className="text-slate-700 dark:text-slate-300 font-semibold mb-2">Satisfied<br />Customers</h3>
                                <div className="text-4xl md:text-5xl font-black text-[#001D3D] dark:text-white mb-4">Smart Hiring,</div>
                                <div className="flex -space-x-3 relative z-10">
                                    <img className="w-10 h-10 rounded-full border-2 border-white dark:border-navy-900 shadow-sm" src="https://ui-avatars.com/api/?name=J+D&background=random" alt="User 1" />
                                    <img className="w-10 h-10 rounded-full border-2 border-white dark:border-navy-900 shadow-sm" src="https://ui-avatars.com/api/?name=S+R&background=random" alt="User 2" />
                                    <img className="w-10 h-10 rounded-full border-2 border-white dark:border-navy-900 shadow-sm" src="https://ui-avatars.com/api/?name=E+K&background=random" alt="User 3" />
                                    <div className="w-10 h-10 rounded-full border-2 border-white dark:border-navy-900 shadow-sm bg-navy-950 text-white flex justify-center items-center text-xs font-semibold">+</div>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-2xl shadow-lg relative group h-[150px] lg:h-[200px]">
                                <img alt="Data Center" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Grid Section */}
            <section className="py-24 bg-white dark:bg-navy-950 text-slate-800 dark:text-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="max-w-2xl"
                        >
                            <div className="flex flex-col gap-2 mb-4">
                                <span className="text-primary font-semibold uppercase tracking-widest text-sm">Our Service</span>
                                <span className="text-primary/70 font-bold tracking-[0.1em] text-xs uppercase">Energy. Expertise. Excellence.</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-[#001D3D] dark:text-white">
                                Comprehensive Solutions,<br />All in One Place
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="lg:max-w-md border-l-2 border-[#001D3D]/10 dark:border-white/10 pl-6"
                        >
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                From resilient cloud architectures and defensive cybersecurity to bespoke software engineering—we provide comprehensive technical leadership designed to catalyze exponential organizational scale.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {servicesList.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                className="bg-slate-50/50 dark:bg-navy-900 border border-slate-100 dark:border-navy-800 p-8 rounded-2xl group hover:shadow-2xl hover:bg-white dark:hover:bg-navy-800 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col h-full"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                                <div className="w-14 h-14 bg-white dark:bg-navy-950 shadow-sm border border-slate-100 dark:border-navy-800 rounded-xl flex items-center justify-center text-[#001D3D] dark:text-white mb-8 group-hover:bg-[#001D3D] dark:group-hover:bg-primary group-hover:text-white transition-colors duration-300 relative z-10">
                                    <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                                </div>

                                <h3 className="text-xl font-semibold mb-4 text-[#001D3D] dark:text-white group-hover:text-primary transition-colors duration-300 pr-4 relative z-10 leading-tight">
                                    {service.title}
                                </h3>

                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-10 flex-grow relative z-10">
                                    {service.desc}
                                </p>


                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white dark:bg-navy-950 border-t border-slate-100 dark:border-navy-900">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="max-w-xl"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-primary font-semibold uppercase tracking-widest text-sm">Why Choose Us</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-[#001D3D] dark:text-white">
                                Reasons to Partner<br />With Us
                            </h2>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="lg:max-w-md border-l-2 border-[#001D3D]/10 dark:border-white/10 pl-6"
                        >
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                We are committed to sourcing exceptional technical intellect and providing a standard of service that ensures the total success of your digital transformation.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-navy-900 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-navy-800 flex flex-col items-center text-center"
                        >
                            <div className="text-primary mb-4 flex items-center justify-center bg-light-teal w-16 h-16 rounded-full"><span className="material-symbols-outlined text-3xl">timer</span></div>
                            <h4 className="font-semibold text-xl mb-3 text-[#001D3D] dark:text-white">Fast Turnaround Time</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Our agile recruitment protocols enable the rapid deployment of specialized experts, ensuring your high-priority projects remain on schedule.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-navy-900 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-navy-800 flex flex-col items-center text-center"
                        >
                            <div className="text-primary mb-4 flex items-center justify-center bg-light-teal w-16 h-16 rounded-full"><span className="material-symbols-outlined text-3xl">verified_user</span></div>
                            <h4 className="font-semibold text-xl mb-3 text-[#001D3D] dark:text-white">Pre-Screened Candidates</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Each technical specialist is subjected to a deep-dive screening process, evaluating both technical expertise and cultural synergy to guarantee an optimal team fit.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-navy-900 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-navy-800 flex flex-col items-center text-center"
                        >
                            <div className="text-primary mb-4 flex items-center justify-center bg-light-teal w-16 h-16 rounded-full"><span className="material-symbols-outlined text-3xl">handshake</span></div>
                            <h4 className="font-semibold text-xl mb-3 text-[#001D3D] dark:text-white">Flexible Hiring Models</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Whether you need transient project support or permanent technical leadership, our engagement models are architected to align with your fiscal strategy.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-navy-900 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-navy-800 flex flex-col items-center text-center"
                        >
                            <div className="text-primary mb-4 flex items-center justify-center bg-light-teal w-16 h-16 rounded-full"><span className="material-symbols-outlined text-3xl">support_agent</span></div>
                            <h4 className="font-semibold text-xl mb-3 text-[#001D3D] dark:text-white">Dedicated Account Support</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Receive dedicated, high-touch support from a personal account strategist who provides proactive consultation through every phase of our partnership.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Hero CTA section from reference image */}
            <section className="bg-gradient-to-br from-[#c1d9b3] to-[#8ebc88] dark:from-[#001D3D] dark:to-navy-950 py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <span className="text-[#001D3D]/60 dark:text-primary font-semibold uppercase tracking-widest text-sm mb-4 inline-block">Work Showcase</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#001D3D] dark:text-white mb-8 leading-tight">
                            Ready to Take Your<br />Business to the Next Level with<br />Powerful IT Solutions? <span className="material-symbols-outlined align-middle inline-block rotate-180 text-5xl hidden sm:inline-block">arrow_right_alt</span>
                        </h2>
                        <p className="text-[#001D3D]/80 dark:text-slate-300 md:text-lg mb-10 max-w-xl leading-relaxed">
                            Leveraging deep-domain expertise in cloud engineering, enterprise logic, and bespoke development, we enable organizations to navigate technical shifts with absolute precision and speed.
                        </p>
                        <button className="bg-white text-[#001D3D] px-10 py-5 rounded-full font-semibold shadow-2xl shadow-[#001D3D]/10 hover:shadow-xl hover:scale-105 transition-all">
                            Get a Free Consultation
                        </button>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
