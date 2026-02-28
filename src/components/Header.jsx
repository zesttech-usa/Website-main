import * as React from "react"
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Info, Settings, Linkedin, Menu, Sun, Moon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/jobseekers", label: "Jobseekers" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
    { href: "/contact", label: "Contact" },
]

export default function Header() {
    const [isDark, setIsDark] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const { pathname } = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [isDark])

    const toggleDarkMode = () => setIsDark(!isDark)

    return (
        <>
            <div className="hidden lg:block bg-navy-950 text-white py-2 text-sm border-b border-white/10 transition-colors">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center space-x-6">
                        <a className="flex items-center gap-2 hover:text-primary transition-colors" href="mailto:Info@zesttechus.com">
                            <Info size={14} className="text-primary" /> Info@zesttechus.com
                        </a>
                        <span className="flex items-center gap-2 opacity-80">
                            <Settings size={14} className="text-primary" /> 1 Mid America Plaza, 3rd Floor, Suite 300 PMB 7084, Oakbrook Terrace, IL 60181, United States
                        </span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="https://www.linkedin.com/company/zest-technologies-llc" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                            <Linkedin size={16} />
                        </a>
                    </div>
                </div>
            </div>

            <header className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300 border-b",
                isScrolled
                    ? "bg-white/80 dark:bg-navy-950/80 backdrop-blur-md py-2 border-slate-100 dark:border-slate-800 shadow-sm"
                    : "bg-white dark:bg-navy-950 py-4 border-transparent"
            )}>
                <div className="container mx-auto px-6 flex h-14 items-center gap-8">
                    {/* Logo - Stays left */}
                    <Link to="/" className="flex flex-col flex-shrink-0">
                        <img src="/logo.png" alt="Zest Technologies Logo" className="h-9 w-auto object-contain" />
                        <span className="text-primary font-bold tracking-[0.2em] text-[8px] uppercase -mt-1 hidden sm:block leading-none">Energy. Expertise. Excellence.</span>
                    </Link>

                    {/* Centered Navigation */}
                    <div className="flex-grow flex justify-center">
                        <nav className="hidden md:flex items-center gap-1">
                            {navigationLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    to={link.href}
                                    className={cn(
                                        "text-navy-950/70 dark:text-white/70 hover:text-primary dark:hover:text-primary px-3 py-2 font-semibold uppercase text-xs tracking-wider transition-colors",
                                        pathname === link.href && "text-primary dark:text-primary"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Actions - Stays right */}
                    <div className="flex items-center gap-3 flex-shrink-0">
                        <button
                            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-navy-900 transition-colors text-navy-950 dark:text-white"
                            onClick={toggleDarkMode}
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <div className="hidden sm:flex items-center gap-3">
                            <Button asChild size="sm" className="bg-primary hover:bg-primary-hover text-white font-semibold text-xs uppercase tracking-wider px-6">
                                <Link to="/careers">Job Openings</Link>
                            </Button>
                        </div>

                        <div className="md:hidden">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="ghost" size="icon" className="text-navy-950 dark:text-white">
                                        <Menu size={24} />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent align="end" className="w-[80vw] p-4 bg-white dark:bg-navy-950 dark:border-slate-800">
                                    <div className="flex flex-col gap-4">
                                        {navigationLinks.map((link, index) => (
                                            <div key={index} className="flex flex-col gap-2">
                                                <Link
                                                    to={link.href}
                                                    className={cn(
                                                        "text-navy-950 dark:text-white hover:text-primary px-2 py-1 text-sm font-bold uppercase tracking-wider",
                                                        pathname === link.href && "text-primary dark:text-primary"
                                                    )}
                                                >
                                                    {link.label}
                                                </Link>
                                                {index < navigationLinks.length - 1 && <div className="h-px bg-slate-100 dark:bg-slate-800 my-1" />}
                                            </div>
                                        ))}
                                        <div className="flex flex-col gap-2 mt-2">
                                            <Button asChild className="w-full bg-primary hover:bg-primary-hover">
                                                <Link to="/careers">Job Openings</Link>
                                            </Button>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
