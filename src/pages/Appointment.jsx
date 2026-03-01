import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Appointment() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden bg-navy-950">
                <div className="absolute inset-0 z-0">
                    <img alt="Calendar meeting" className="w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1506784919141-93554627964b?auto=format&fit=crop&w=1200&q=80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex flex-col gap-4 mb-6">
                            <div className="flex items-center justify-center gap-2 text-xs uppercase font-bold tracking-widest text-slate-300">
                                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                                <span className="material-symbols-outlined text-sm">chevron_right</span>
                                <span className="text-primary">Discovery Call</span>
                            </div>
                            <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase">Energy. Expertise. Excellence.</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">Book a <span className="text-primary">Discovery Call</span></h1>
                        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 bg-white dark:bg-navy-900">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-slate-50 dark:bg-navy-950 p-12 rounded-3xl border border-slate-100 dark:border-navy-800 shadow-2xl overflow-hidden relative"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

                            <div className="text-center mb-12 relative z-10">
                                <h2 className="text-3xl font-bold text-[#001D3D] dark:text-white mb-4">Let's Discuss Your Project</h2>
                                <p className="text-slate-600 dark:text-slate-400">Select a convenient time for a detailed strategic consultation with our technical specialists.</p>
                            </div>

                            {/* This is a placeholder for a real scheduling widget like Calendly */}
                            <div className="aspect-video bg-navy-900 rounded-2xl flex flex-col items-center justify-center text-white p-8 border border-white/10 relative z-10 group overflow-hidden">
                                <span className="material-symbols-outlined text-7xl text-primary mb-6 group-hover:scale-110 transition-transform duration-500">calendar_month</span>
                                <h3 className="text-2xl font-bold mb-4">Scheduling Infrastructure Loading...</h3>
                                <p className="text-slate-400 max-w-md text-center mb-8">We are connecting you to our real-time availability calendar. Thank you for your patience.</p>
                                <div className="flex gap-4">
                                    <div className="w-3 h-3 bg-primary rounded-full animate-bounce delay-0"></div>
                                    <div className="w-3 h-3 bg-primary rounded-full animate-bounce delay-150"></div>
                                    <div className="w-3 h-3 bg-primary rounded-full animate-bounce delay-300"></div>
                                </div>
                            </div>

                            <div className="mt-12 grid md:grid-cols-3 gap-8 relative z-10">
                                <div className="flex flex-col items-center p-6 bg-white dark:bg-navy-800 rounded-2xl shadow-sm border border-slate-100 dark:border-navy-700">
                                    <span className="material-symbols-outlined text-primary mb-4">schedule</span>
                                    <h4 className="font-bold text-sm uppercase tracking-wider mb-2">Duration</h4>
                                    <p className="text-slate-500 text-sm">30 Minutes</p>
                                </div>
                                <div className="flex flex-col items-center p-6 bg-white dark:bg-navy-800 rounded-2xl shadow-sm border border-slate-100 dark:border-navy-700">
                                    <span className="material-symbols-outlined text-primary mb-4">video_call</span>
                                    <h4 className="font-bold text-sm uppercase tracking-wider mb-2">Meeting Type</h4>
                                    <p className="text-slate-500 text-sm">Google Meet / Zoom</p>
                                </div>
                                <div className="flex flex-col items-center p-6 bg-white dark:bg-navy-800 rounded-2xl shadow-sm border border-slate-100 dark:border-navy-700">
                                    <span className="material-symbols-outlined text-primary mb-4">payments</span>
                                    <h4 className="font-bold text-sm uppercase tracking-wider mb-2">Cost</h4>
                                    <p className="text-slate-500 text-sm">Complimentary</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
