export default function Footer() {
    return (
        <>
            <footer className="bg-navy-950 text-white py-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-12 mb-16">
                        <div className="space-y-6">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-xl">Z</div>
                                <span className="text-2xl font-semibold tracking-tight uppercase">Zest Technologies</span>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Welcome to Zest Technologies LLC, your premier destination for IT staffing and technology solutions. We specialize in providing tailored services to meet your unique business needs.
                            </p>
                            <div className="flex items-center gap-4">
                                <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" href="#"><span className="material-symbols-outlined text-sm">share</span></a>
                                <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" href="#"><span className="material-symbols-outlined text-sm">alternate_email</span></a>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold mb-8 flex items-center gap-2">Useful Links <span className="h-1 w-8 bg-primary"></span></h4>
                            <ul className="space-y-4 text-slate-400 text-sm">
                                <li><a className="hover:text-primary transition-colors" href="/">Home</a></li>
                                <li><a className="hover:text-primary transition-colors" href="/about">About</a></li>
                                <li><a className="hover:text-primary transition-colors" href="/services">Services</a></li>
                                <li><a className="hover:text-primary transition-colors" href="/industries">Industries</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">Blog</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">Career</a></li>
                                <li><a className="hover:text-primary transition-colors" href="/contact">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold mb-8 flex items-center gap-2">Our Services <span className="h-1 w-8 bg-primary"></span></h4>
                            <ul className="space-y-4 text-slate-400 text-sm">
                                <li><a className="hover:text-primary transition-colors" href="#">IT Staffing Solutions</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">Technical Recruitment</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">AI & Machine Learning</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">Big Data & Analytics</a></li>
                                <li><a className="hover:text-primary transition-colors" href="#">Web & App Development</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold mb-8 flex items-center gap-2">Contact Details <span className="h-1 w-8 bg-primary"></span></h4>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary flex-shrink-0 flex items-center justify-center"><span className="material-symbols-outlined text-xl">location_on</span></div>
                                    <div>
                                        <h5 className="font-semibold mb-1 text-sm">Address</h5>
                                        <p className="text-xs text-slate-400 leading-relaxed">Head Office: 10130 Mallard Creek Rd, Suite 300, Charlotte, NC 28262, US</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary flex-shrink-0 flex items-center justify-center"><span className="material-symbols-outlined text-xl">mail</span></div>
                                    <div>
                                        <h5 className="font-semibold mb-1 text-sm">Email</h5>
                                        <p className="text-xs text-slate-400">info@zesttechnologies.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary flex-shrink-0 flex items-center justify-center"><span className="material-symbols-outlined text-xl">call</span></div>
                                    <div>
                                        <h5 className="font-semibold mb-1 text-sm">Call</h5>
                                        <p className="text-xs text-slate-400">+1 (980) 265-0635</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                        <p>© 2024 ZEST TECHNOLOGIES LLC All Rights Reserved.</p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <a className="hover:text-primary" href="#">Privacy Policy</a>
                            <a className="hover:text-primary" href="#">Terms of Use</a>
                            <a className="hover:text-primary" href="#">Cookie Settings</a>
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
