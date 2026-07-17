import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, Menu, X, MapPin } from 'lucide-react';
import ConsultationFormModal from './components/ConsultationFormModal';

const navigation = [
    { name: 'Home', href: createPageUrl('Home') },
    { name: 'Services', href: createPageUrl('Services') },
    { name: 'Projects', href: createPageUrl('Projects') },
    { name: 'About', href: createPageUrl('About') },
    { name: 'Contact', href: createPageUrl('Contact') },
];

function Logo() {
    return (
        <Link to={createPageUrl('Home')} className="flex items-center gap-2">
            <img 
                src="/media/d28b25fdf_NDSCLogoBlack.jpeg" 
                alt="Norta DeSyCo Logo"
                className="h-16"
            />
        </Link>
    );
}

function Header({ currentPageName, onOpenConsultation }) {
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Close the mobile menu whenever the route changes (covers link taps and
    // browser back/forward navigation).
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    // Track scroll so the header turns into a blurred, solid bar once the user
    // leaves the very top of the page.
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const solid = scrolled || mobileMenuOpen;
    // Keep the Home hero clean: reveal the logo only once the bar turns solid.
    const showLogo = currentPageName !== 'Home' || solid;

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 ${
                solid
                    ? 'bg-[#050713]/85 backdrop-blur-md border-b border-[#18C5FF]/10 shadow-lg shadow-black/40'
                    : 'bg-transparent border-b border-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className={`transition-opacity duration-300 ${showLogo ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        <Logo />
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`text-sm font-medium transition-colors ${
                                    location.pathname === item.href
                                        ? 'text-[#18C5FF]'
                                        : 'text-[#C3C8E5] hover:text-[#18C5FF]'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                    <div className="hidden md:block">
                        <Button
                            onClick={onOpenConsultation}
                            className="bg-[#2563FF] hover:bg-[#1d4ed8] text-white"
                        >
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile hamburger toggle */}
                    <button
                        type="button"
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-[#C3C8E5] hover:text-[#18C5FF] hover:bg-white/5 transition-colors"
                        aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-menu"
                        onClick={() => setMobileMenuOpen((open) => !open)}
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu panel */}
            {mobileMenuOpen && (
                <div
                    id="mobile-menu"
                    className="md:hidden mt-3 mx-4 rounded-xl border border-[#18C5FF]/20 bg-[#0a0f1e]/95 backdrop-blur-md shadow-2xl"
                >
                    <nav aria-label="Mobile" className="flex flex-col p-4 gap-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                                    location.pathname === item.href
                                        ? 'text-[#18C5FF] bg-[#18C5FF]/10'
                                        : 'text-[#C3C8E5] hover:text-[#18C5FF] hover:bg-white/5'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button
                            onClick={() => {
                                setMobileMenuOpen(false);
                                onOpenConsultation();
                            }}
                            className="mt-3 w-full bg-[#2563FF] hover:bg-[#1d4ed8] text-white"
                        >
                            Get Started
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="relative bg-gradient-to-b from-[#0a0f1e] to-[#050713] border-t border-[#18C5FF]/20">
            {/* Subtle cyan glow line along the very top edge of the footer. */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#18C5FF]/50 to-transparent" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-5">
                        <img
                            src="/media/d28b25fdf_NDSCLogoBlack.jpeg"
                            alt="Norta DeSyCo"
                            className="h-14 w-auto"
                        />
                        <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#B7BCDB]">
                            Research-driven software engineering for trustworthy digital systems —
                            blockchain, AI, cybersecurity, decentralized identity, and autonomous
                            software, from scientific validation to production implementation.
                        </p>
                        <div className="mt-6 flex items-center gap-3">
                            <a
                                href="https://www.linkedin.com/company/norta-desyco/?viewAsMember=true"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Norta DeSyCo on LinkedIn"
                                className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-[#18C5FF]/20 text-[#C3C8E5] hover:text-[#18C5FF] hover:border-[#18C5FF]/50 hover:bg-[#18C5FF]/10 transition-colors"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                                href="mailto:alex.norta@nortadesyco.xyz"
                                aria-label="Email Norta DeSyCo"
                                className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-[#18C5FF]/20 text-[#C3C8E5] hover:text-[#18C5FF] hover:border-[#18C5FF]/50 hover:bg-[#18C5FF]/10 transition-colors"
                            >
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Navigate */}
                    <div className="lg:col-span-3">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F5F7FF]">
                            Navigate
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.href}
                                        className="text-sm text-[#A5AAC9] hover:text-[#18C5FF] transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F5F7FF]">
                            Get in touch
                        </h3>
                        <ul className="mt-4 space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <Mail className="h-4 w-4 mt-0.5 text-[#18C5FF] flex-shrink-0" />
                                <a
                                    href="mailto:alex.norta@nortadesyco.xyz"
                                    className="text-[#B7BCDB] hover:text-[#18C5FF] transition-colors break-words"
                                >
                                    alex.norta@nortadesyco.xyz
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="h-4 w-4 mt-0.5 text-[#18C5FF] flex-shrink-0" />
                                <a
                                    href="mailto:sowelu.avanzo@nortadesyco.xyz"
                                    className="text-[#B7BCDB] hover:text-[#18C5FF] transition-colors break-words"
                                >
                                    sowelu.avanzo@nortadesyco.xyz
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="h-4 w-4 mt-0.5 text-[#18C5FF] flex-shrink-0" />
                                <span className="text-[#A5AAC9]">
                                    Tallinn, Estonia&nbsp;·&nbsp;Ras Al Khaimah, UAE
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-[#18C5FF]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-[#A5AAC9]">
                        &copy; {year} Norta DeSyCo OÜ. All rights reserved.
                    </p>
                    <p className="text-xs tracking-wide text-[#8b90b3]">
                        Research · Software Engineering · Digital Transformation
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default function Layout({ children, currentPageName }) {
    const [consultationModalOpen, setConsultationModalOpen] = useState(false);

    return (
        <div className="bg-[#050713] font-sans antialiased">
            <style>{`
                /* Inter is self-hosted via @fontsource-variable/inter
                   (imported in main.jsx) — no external font CDN. */
                body {
                    font-family: 'Inter Variable', 'Inter', sans-serif;
                }
                .bg-primary-blue { background-color: #4285F4; }
                .text-primary-blue { color: #4285F4; }
                .border-primary-blue { border-color: #4285F4; }
                .hover\\:bg-primary-blue-dark:hover { background-color: #357ae8; }
            `}</style>
            <Header currentPageName={currentPageName} onOpenConsultation={() => setConsultationModalOpen(true)} />
            <main>{children}</main>
            <Footer />
            <ConsultationFormModal 
                open={consultationModalOpen} 
                onOpenChange={setConsultationModalOpen}
            />
        </div>
    );
}