import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden bg-navy-950">
                <div className="absolute inset-0 z-0">
                    <img alt="Office discussion" className="w-full h-full object-cover opacity-20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrc6pAIwCoMqOTZZjEeijwcnN6FIEuZnCXlT2NC1OAQxU56LcPTB96k7hIrR8RQZqe7FZeGsX9KctyyyCWhN6-Y26QuWiSVH6cA2H4kjUDEWzTH0kRs5LJa2pSQPSv5KyGdwJ9Zn_ya8Ccj3EauBAYq6N3gczymX9Gbh3Vmh4i0spvXaqlD5xlrwojEaEo58-iiOkPNaQyqpyadyjr1K-ruj2h_S6RXTgB_cahA8k8UWvXgN25m7Qwul8O_RneJk2dm-9tFSOVsUiT" />
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
                                <span className="text-primary">Contact Us</span>
                            </div>
                            <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase">Energy. Expertise. Excellence.</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">Get In <span className="text-primary">Touch</span></h1>
                        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                    </motion.div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-24 bg-white dark:bg-navy-900 border-b border-slate-100 dark:border-navy-800">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-5 gap-16">

                        {/* Contact Information (Left) */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="lg:col-span-2 space-y-12"
                        >
                            <div>
                                <span className="inline-block bg-light-teal text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-primary/20">
                                    Connect With Us
                                </span>
                                <h2 className="text-4xl font-extrabold mb-6 text-[#001D3D] dark:text-white leading-tight">
                                    Ready to Start Your Next <span className="text-primary">Project?</span>
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                                    Whether your requirements involve premier technical staffing, bespoke software architecture, or high-level enterprise consultation, our specialists are engineered to deliver precision-targeted results. Initiate a dialogue with us today.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex gap-6 group">
                                    <div className="w-16 h-16 rounded-xl bg-[#001D3D]/5 dark:bg-navy-800 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm border border-slate-100 dark:border-navy-700">
                                        <span className="material-symbols-outlined text-3xl">location_on</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 text-[#001D3D] dark:text-white group-hover:text-primary transition-colors">Location</h4>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">1 Mid America Plaza<br />Suite 300 PMB 7084<br />Oakbrook Terrace, IL 60181, United States</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 group">
                                    <div className="w-16 h-16 rounded-xl bg-[#001D3D]/5 dark:bg-navy-800 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm border border-slate-100 dark:border-navy-700">
                                        <span className="material-symbols-outlined text-3xl">call</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 text-[#001D3D] dark:text-white group-hover:text-primary transition-colors">Call Us Directly</h4>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                            <a href="tel:+16304898943" className="hover:text-primary transition-colors text-lg font-semibold">+1 6304898943</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6 group">
                                    <div className="w-16 h-16 rounded-xl bg-[#001D3D]/5 dark:bg-navy-800 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm border border-slate-100 dark:border-navy-700">
                                        <span className="material-symbols-outlined text-3xl">mail</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 text-[#001D3D] dark:text-white group-hover:text-primary transition-colors">Email Address</h4>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                            <a href="mailto:HR@zesttechus.com" className="hover:text-primary transition-colors font-semibold">hr@zesttechus.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form (Right) */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="lg:col-span-3"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="mb-8"
                            >
                                <Link
                                    to="/appointment"
                                    className="w-full bg-light-teal dark:bg-primary/20 text-primary font-bold py-6 rounded-2xl border-2 border-dashed border-primary/30 flex items-center justify-center gap-4 hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/30 transition-all group shadow-sm"
                                >
                                    <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">event_available</span>
                                    <div className="text-left">
                                        <h4 className="text-lg leading-tight">Book a Discovery Call Appointment</h4>
                                        <p className="text-xs text-primary/70 font-semibold uppercase tracking-wider">Schedule a strategic consultation on our calendar</p>
                                    </div>
                                    <span className="material-symbols-outlined ml-auto mr-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">arrow_forward</span>
                                </Link>
                            </motion.div>

                            <div className="bg-white dark:bg-navy-950 p-10 md:p-12 rounded-2xl shadow-2xl border border-slate-100 dark:border-navy-800 relative overflow-hidden group/form">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 group-hover/form:bg-light-teal transition-colors duration-700 pointer-events-none"></div>

                                <h3 className="text-3xl font-bold mb-8 text-[#001D3D] dark:text-white border-b border-slate-100 dark:border-navy-800 pb-6 relative z-10">Send Us a Message</h3>

                                <form action="https://submit-form.com/m6IdZVWOG" method="POST" className="space-y-6 relative z-10">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="full-name" className="text-sm font-bold text-[#001D3D] dark:text-slate-300">Full Name</label>
                                            <input
                                                type="text"
                                                id="full-name"
                                                name="full_name"
                                                required
                                                className="w-full bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-700 rounded-lg px-4 py-3 text-slate-700 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                                placeholder="Enter your full name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-bold text-[#001D3D] dark:text-slate-300">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                className="w-full bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-700 rounded-lg px-4 py-3 text-slate-700 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                                placeholder="Enter your email address"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-sm font-bold text-[#001D3D] dark:text-slate-300">Phone Number</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                required
                                                className="w-full bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-700 rounded-lg px-4 py-3 text-slate-700 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                                placeholder="Enter your phone number"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="subject" className="text-sm font-bold text-[#001D3D] dark:text-slate-300">Subject</label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                required
                                                className="w-full bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-700 rounded-lg px-4 py-3 text-slate-700 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                                placeholder="Enter subject"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-bold text-[#001D3D] dark:text-slate-300">Your Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows="5"
                                            className="w-full bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-700 rounded-lg px-4 py-3 text-slate-700 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                                            placeholder="Define your technical objectives or inquiries here"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-primary hover:bg-primary-hover text-white font-bold text-lg py-4 rounded-lg shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1 transition-all group/btn flex justify-center items-center gap-2"
                                    >
                                        Send Message
                                        <span className="material-symbols-outlined text-lg group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform">send</span>
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Embedded Map Section */}
            <section className="h-[400px] w-full bg-slate-200 dark:bg-navy-950 relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.0699965701847!2d-87.96098072398095!3d41.84832017124501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e4c44708436f9%3A0xea9d41a5c59670d5!2s1%20Mid%20America%20Plaza%2C%20Oakbrook%20Terrace%2C%20IL%2060181%2C%20USA!5e0!3m2!1sen!2sin!4v1772294409725!5m2!1sen!2sin"
                    className="absolute inset-0 w-full h-full border-0 grayscale opacity-90 dark:opacity-70 dark:invert-[0.9] dark:hue-rotate-180 dark:contrast-150 transition-all duration-300 hover:grayscale-0 hover:opacity-100 mix-blend-multiply dark:mix-blend-screen"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location Map"
                ></iframe>
            </section>
        </>
    );
}
