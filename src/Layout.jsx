import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Linkedin, Mail, Menu, X, MapPin, ArrowUpRight } from 'lucide-react';
import ConsultationFormModal from './components/ConsultationFormModal';

const navigation = [
    { name: 'Home', href: createPageUrl('Home') },
    { name: 'Capabilities', href: createPageUrl('Services') },
    { name: 'Projects', href: createPageUrl('Projects') },
    { name: 'About', href: createPageUrl('About') },
    { name: 'Contact', href: createPageUrl('Contact') },
];

/* Typographic logotype — a small node mark + wordmark, in the display face.
   Replaces the legacy image logo (which read "DAO Blockchain Systems"). */
function Wordmark({ onClick }) {
    return (
        <Link to={createPageUrl('Home')} onClick={onClick} className="group inline-flex items-center gap-3">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true" className="flex-shrink-0">
                <rect x="1" y="1" width="24" height="24" rx="5" stroke="#18C5FF" strokeOpacity="0.5" />
                <circle cx="8" cy="8" r="2" fill="#18C5FF" />
                <circle cx="18" cy="8" r="2" fill="#18C5FF" fillOpacity="0.5" />
                <circle cx="13" cy="18" r="2" fill="#18C5FF" fillOpacity="0.5" />
                <path d="M8 8 L18 8 M8 8 L13 18 M18 8 L13 18" stroke="#18C5FF" strokeOpacity="0.5" strokeWidth="1" />
            </svg>
            <span className="font-display text-[#E8ECFB] text-lg font-semibold tracking-tight">
                Norta<span className="text-[#18C5FF]"> DeSyCo</span>
            </span>
        </Link>
    );
}

function Header({ onOpenConsultation }) {
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => { setMobileMenuOpen(false); }, [location.pathname]);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const solid = scrolled || mobileMenuOpen;

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                solid
                    ? 'bg-[#04060d]/85 backdrop-blur-md border-b border-[#18C5FF]/12'
                    : 'bg-transparent border-b border-transparent'
            }`}
        >
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
                <div className="flex h-16 items-center justify-between">
                    <Wordmark />

                    <nav className="hidden md:flex items-center gap-9">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`text-sm transition-colors ${
                                    location.pathname === item.href
                                        ? 'text-[#18C5FF]'
                                        : 'text-[#8A93B8] hover:text-[#E8ECFB]'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden md:block">
                        <button
                            onClick={onOpenConsultation}
                            className="group inline-flex items-center gap-1.5 rounded-md border border-[#18C5FF]/40 bg-[#18C5FF]/10 px-4 py-2 text-sm font-medium text-[#E8ECFB] transition-colors hover:bg-[#18C5FF]/20 hover:border-[#18C5FF]/70"
                        >
                            Discuss a Project
                            <ArrowUpRight className="h-4 w-4 text-[#18C5FF] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>
                    </div>

                    <button
                        type="button"
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-[#8A93B8] hover:text-[#18C5FF] transition-colors"
                        aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-menu"
                        onClick={() => setMobileMenuOpen((o) => !o)}
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div id="mobile-menu" className="md:hidden mx-5 mt-2 rounded-xl border border-[#18C5FF]/20 bg-[#0a0f1c]/95 backdrop-blur-md">
                    <nav aria-label="Mobile" className="flex flex-col p-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`px-3 py-2.5 rounded-md text-base transition-colors ${
                                    location.pathname === item.href
                                        ? 'text-[#18C5FF] bg-[#18C5FF]/10'
                                        : 'text-[#8A93B8] hover:text-[#E8ECFB] hover:bg-white/5'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <button
                            onClick={() => { setMobileMenuOpen(false); onOpenConsultation(); }}
                            className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-md border border-[#18C5FF]/40 bg-[#18C5FF]/10 px-4 py-2.5 text-base font-medium text-[#E8ECFB]"
                        >
                            Discuss a Project
                            <ArrowUpRight className="h-4 w-4 text-[#18C5FF]" />
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="relative border-t border-[#18C5FF]/15 bg-[#04060d]">
            <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                    <div className="md:col-span-5">
                        <Wordmark />
                        <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#8A93B8]">
                            Research-driven software engineering for trustworthy digital systems —
                            blockchain, AI, cybersecurity, decentralized identity, and autonomous
                            software, from scientific validation to production.
                        </p>
                        <div className="mt-6 flex items-center gap-3">
                            <a href="https://www.linkedin.com/company/norta-desyco/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="Norta DeSyCo on LinkedIn"
                               className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#18C5FF]/20 text-[#8A93B8] transition-colors hover:text-[#18C5FF] hover:border-[#18C5FF]/50">
                                <Linkedin className="h-4.5 w-4.5" style={{ width: 18, height: 18 }} />
                            </a>
                            <a href="mailto:alex.norta@nortadesyco.xyz" aria-label="Email Norta DeSyCo"
                               className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#18C5FF]/20 text-[#8A93B8] transition-colors hover:text-[#18C5FF] hover:border-[#18C5FF]/50">
                                <Mail style={{ width: 18, height: 18 }} />
                            </a>
                        </div>
                    </div>

                    <div className="md:col-span-3">
                        <div className="nd-label nd-label--muted">Navigate</div>
                        <ul className="mt-4 space-y-3">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <Link to={item.href} className="text-sm text-[#8A93B8] transition-colors hover:text-[#18C5FF]">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-4">
                        <div className="nd-label nd-label--muted">Get in touch</div>
                        <ul className="mt-4 space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#18C5FF]" />
                                <a href="mailto:alex.norta@nortadesyco.xyz" className="text-[#8A93B8] transition-colors hover:text-[#18C5FF] break-words">alex.norta@nortadesyco.xyz</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#18C5FF]" />
                                <a href="mailto:sowelu.avanzo@nortadesyco.xyz" className="text-[#8A93B8] transition-colors hover:text-[#18C5FF] break-words">sowelu.avanzo@nortadesyco.xyz</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#18C5FF]" />
                                <span className="text-[#8A93B8]">Tallinn, Estonia&nbsp;·&nbsp;Ras Al Khaimah, UAE</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#18C5FF]/10 pt-6">
                    <p className="text-xs text-[#8A93B8]">&copy; {year} Norta DeSyCo OÜ. All rights reserved.</p>
                    <p className="font-mono2 text-[11px] tracking-[0.15em] text-[#5b6488] uppercase">Research · Software Engineering · Digital Transformation</p>
                </div>
            </div>
        </footer>
    );
}

export default function Layout({ children }) {
    const [consultationModalOpen, setConsultationModalOpen] = useState(false);
    return (
        <div className="bg-[#04060d] font-sans antialiased">
            <style>{`body { font-family: 'Inter Variable', 'Inter', sans-serif; background:#04060d; }`}</style>
            <Header onOpenConsultation={() => setConsultationModalOpen(true)} />
            <main>{children}</main>
            <Footer />
            <ConsultationFormModal open={consultationModalOpen} onOpenChange={setConsultationModalOpen} />
        </div>
    );
}
