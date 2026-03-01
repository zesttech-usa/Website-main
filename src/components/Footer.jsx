import { Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <>
            <footer className="bg-navy-950 text-white py-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-12 mb-16">
                        <div className="space-y-6">
                            <div className="flex flex-col gap-2">
                                <img src="/logo.png" alt="Zest Technologies Logo" className="h-16 w-auto object-contain" />
                                <span className="text-primary font-bold tracking-[0.2em] text-[10px] uppercase">Energy. Expertise. Excellence.</span>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Zest Technologies LLC is a leading architect of specialized IT staffing and agile technology solutions. We provide high-impact, tailored services designed to synchronize with your strategic organizational objectives.
                            </p>
                            <div className="flex items-center gap-4">
                                <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" href="https://www.linkedin.com/company/zest-technologies-llc" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" href="mailto:HR@zesttechus.com">
                                    <span className="material-symbols-outlined text-sm">alternate_email</span>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold mb-8 flex items-center gap-2">Links <span className="h-1 w-8 bg-primary"></span></h4>
                            <ul className="space-y-4 text-slate-400 text-sm">
                                <li><a className="hover:text-primary transition-colors" href="/">Home</a></li>
                                <li><a className="hover:text-primary transition-colors" href="/about">About</a></li>
                                <li><a className="hover:text-primary transition-colors" href="/services">Services</a></li>
                                <li><a className="hover:text-primary transition-colors" href="/industries">Industries</a></li>
                                <li><a className="hover:text-primary transition-colors" href="/">Blog</a></li>
                                <li><a className="hover:text-primary transition-colors" href="/careers">Career</a></li>
                                <li><a className="hover:text-primary transition-colors" href="/contact">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold mb-8 flex items-center gap-2">Services <span className="h-1 w-8 bg-primary"></span></h4>
                            <ul className="space-y-4 text-slate-400 text-sm">
                                <li><a className="hover:text-primary transition-colors" href="/services">IT Staffing Solutions</a></li>
                                <li><a className="hover:text-primary transition-colors" href="/services">Technical Recruitment</a></li>
                                <li><a className="hover:text-primary transition-colors" href="/services">AI & Machine Learning</a></li>
                                <li><a className="hover:text-primary transition-colors" href="/services">Big Data & Analytics</a></li>
                                <li><a className="hover:text-primary transition-colors" href="/services">Web & App Development</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold mb-8 flex items-center gap-2">Contact Details <span className="h-1 w-8 bg-primary"></span></h4>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary flex-shrink-0 flex items-center justify-center"><span className="material-symbols-outlined text-xl">location_on</span></div>
                                    <div>
                                        <h5 className="font-semibold mb-1 text-sm">Address</h5>
                                        <p className="text-xs text-slate-400 leading-relaxed">Location: 1 Mid America Plaza, Suite 300 PMB 7084, Oakbrook Terrace, IL 60181, United States</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary flex-shrink-0 flex items-center justify-center"><span className="material-symbols-outlined text-xl">mail</span></div>
                                    <div>
                                        <h5 className="font-semibold mb-1 text-sm">Email</h5>
                                        <p className="text-xs text-slate-400">hr@zesttechus.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary flex-shrink-0 flex items-center justify-center"><span className="material-symbols-outlined text-xl">call</span></div>
                                    <div>
                                        <h5 className="font-semibold mb-1 text-sm">Call</h5>
                                        <p className="text-xs text-slate-400">+1 6304898943</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                        <p>© 2024 ZEST TECHNOLOGIES LLC All Rights Reserved.</p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <a className="hover:text-primary" href="/contact">Privacy Policy</a>
                            <a className="hover:text-primary" href="/contact">Terms of Use</a>
                            <a className="hover:text-primary" href="/contact">Cookie Settings</a>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="fixed bottom-8 right-8 z-[100]">
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-primary text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform hover:shadow-primary/40">
                    <span className="material-symbols-outlined">expand_less</span>
                </button>
            </div>
        </>
    );
}
