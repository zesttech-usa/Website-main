import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Industries() {
    const industries = [
        {
            title: "Banking & Finance",
            icon: "account_balance",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
            items: ["Commercial Lending", "Mortgage Origination", "Retail Banking Logic", "Treasury Management"]
        },
        {
            title: "Insurance",
            icon: "assured_workload",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
            items: ["Claims Processing Automation", "Life Underwriting Logic", "P&C Underwriting", "Risk Assessment Tools"]
        },
        {
            title: "Manufacturing",
            icon: "precision_manufacturing",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
            items: ["Defect Tracking Software", "Error Proofing Models", "Supply Chain Optimization", "IoT Integration"]
        },
        {
            title: "Healthcare",
            icon: "health_and_safety",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
            items: ["EMR / EHR Systems", "Telehealth Platforms", "HIPAA Compliance Tooling", "Diagnostic Analytics"]
        }
    ];

    return (
        <>
            <SEO
                title="Industries We Serve"
                description="Explore the diverse industries Zest Technologies provides IT staffing and consulting for, including Banking, Healthcare, Manufacturing, and Insurance."
                url="/industries"
            />
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden bg-navy-950">
                <div className="absolute inset-0 z-0">
                    <img alt="Cityscape background" className="w-full h-full object-cover opacity-20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7X3fHi20dq4IC12GttRv5jqA6Vzr4eKOvCjKO0vXa805LW7HYNxNsOQ8mddfumvSoMLwUA8jXog_ku_KEomLsFB8LbCicW32Z7ACU7HnoULgtmbNNCm9QMCv5gilUkxVoB8eLM89Bjb7Vw0UxJbgz4brkceDN0HpaKI6rFRBAt7YDDHqpzan2LsqO8AsM27Dt0Z8VVyPLuybZ1StQ0fYNir5pXTwUIgWbBcAQXXl2vC_YSo0uBqrBwJzZfZceLMrskHYXrENgalL-" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center justify-center gap-2 text-xs uppercase font-semibold tracking-widest text-slate-300 mb-6">
                            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                            <span className="material-symbols-outlined text-sm">chevron_right</span>
                            <span className="text-primary">Industries</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-semibold text-white mb-6 leading-tight">Navigating Diverse <br /><span className="text-primary">Industries</span></h1>
                        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                        <p className="max-w-2xl mx-auto text-slate-300 text-lg">Explore emerging digital paradigms and strategic innovations across global markets. Leverage our proprietary industry intelligence to define your technological future.</p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 bg-white dark:bg-navy-900 border-b border-slate-100 dark:border-navy-800">
                <div className="container mx-auto px-6 flex flex-col gap-24">
                    {industries.map((ind, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
                            {/* Image Block */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 !== 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                viewport={{ once: true, margin: "-50px" }}
                                className="lg:w-1/2 w-full relative group"
                            >
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
                                    <div className="absolute inset-0 bg-light-teal mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                                    <img src={ind.image} loading="lazy" alt={ind.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                {/* Floating Icon Decoration */}
                                <div className={`absolute top-10 ${index % 2 !== 0 ? '-left-8' : '-right-8'} bg-white dark:bg-navy-950 p-6 rounded-xl shadow-xl z-20 flex hidden md:flex items-center justify-center text-primary group-hover:-translate-y-4 group-hover:shadow-primary/20 transition-all duration-500`}>
                                    <span className="material-symbols-outlined text-5xl">{ind.icon}</span>
                                </div>
                            </motion.div>

                            {/* Text Block */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 !== 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                                viewport={{ once: true, margin: "-50px" }}
                                className="lg:w-1/2 w-full"
                            >
                                <div className="flex flex-col gap-2 mb-6">
                                    <span className="inline-block bg-light-teal text-primary px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-primary/20 self-start">
                                        Sector Focus
                                    </span>
                                    <span className="text-primary/70 font-bold tracking-[0.1em] text-xs uppercase">Energy. Expertise. Excellence.</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-semibold mb-8 leading-tight text-[#001D3D] dark:text-white">
                                    {ind.title}
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg leading-relaxed border-l-4 border-slate-200 dark:border-navy-800 pl-6">
                                    We specialize in architecting high-performance IT ecosystems and deploying specialized technical leadership engineered specifically to navigate the intricate demands of the {ind.title.toLowerCase()} landscape.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8">
                                    {ind.items.map((item, itemIdx) => (
                                        <motion.div
                                            key={itemIdx}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: 0.3 + (itemIdx * 0.1) }}
                                            viewport={{ once: true }}
                                            className="flex items-center gap-3 group/item border border-slate-100 dark:border-navy-800 p-4 rounded-lg bg-slate-50 dark:bg-navy-950/50 hover:bg-white dark:hover:bg-navy-800 hover:shadow-md transition-all cursor-default"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-light-teal text-primary flex items-center justify-center group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                                                <span className="material-symbols-outlined text-sm font-semibold">arrow_forward</span>
                                            </div>
                                            <span className="font-semibold text-sm text-[#001D3D] dark:text-white group-hover/item:text-primary transition-colors">{item}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Reusable CTA */}
            <section className="container mx-auto px-6 py-24">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-[#001D3D] to-primary p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-white relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl font-semibold mb-2">Drive Innovation Today</h2>
                        <p className="text-white/80">Do you require expert-level IT consultation tailored to the unique regulatory and operational requirements of your industry?</p>
                    </div>
                    <Link to="/contact" className="relative z-10 bg-white text-[#001D3D] px-10 py-4 rounded-full font-semibold hover:bg-slate-100 transition-all shadow-xl hover:-translate-y-1 block md:inline-block text-center">Get Started</Link>
                </motion.div>
            </section>
        </>
    );
}
