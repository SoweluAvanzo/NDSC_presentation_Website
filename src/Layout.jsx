import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Linkedin, Mail, Menu, X, ArrowUpRight } from 'lucide-react';
import ConsultationFormModal from './components/ConsultationFormModal';

const navigation = [
  { name: 'Home', href: createPageUrl('Home') },
  { name: 'Capabilities', href: createPageUrl('Services') },
  { name: 'Projects', href: createPageUrl('Projects') },
  { name: 'About', href: createPageUrl('About') },
  { name: 'Contact', href: createPageUrl('Contact') },
];

function Logo({ onClick }) {
  return (
    <Link to={createPageUrl('Home')} onClick={onClick} className="flex items-center" aria-label="Norta DeSyCo — home">
      <img src="/media/d28b25fdf_NDSCLogoBlack.jpeg" alt="Norta DeSyCo" className="h-9 w-auto rounded-md" />
    </Link>
  );
}

function Header({ onOpenConsultation }) {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const solid = scrolled || open;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solid ? 'bg-[#06070E]/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent border-b border-transparent'}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link key={item.name} to={item.href}
                className={`text-sm font-medium transition-colors ${location.pathname === item.href ? 'text-white' : 'text-[#92A0BD] hover:text-white'}`}>
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <button onClick={onOpenConsultation} className="v4-btn group inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-semibold text-white">
              Discuss a project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
          <button type="button" className="md:hidden inline-flex items-center justify-center p-2 text-[#92A0BD] hover:text-white"
            aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="m-menu" onClick={() => setOpen((o) => !o)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div id="m-menu" className="md:hidden border-t border-white/10 bg-[#06070E]/95 backdrop-blur-xl">
          <nav className="flex flex-col px-5 py-3">
            {navigation.map((item) => (
              <Link key={item.name} to={item.href} onClick={() => setOpen(false)}
                className={`py-3 text-base font-medium ${location.pathname === item.href ? 'text-white' : 'text-[#92A0BD]'}`}>
                {item.name}
              </Link>
            ))}
            <button onClick={() => { setOpen(false); onOpenConsultation(); }} className="v4-btn mt-2 inline-flex w-full items-center justify-center gap-1.5 rounded-full px-5 py-3 text-base font-semibold text-white">
              Discuss a project <ArrowUpRight className="h-4 w-4" />
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
    <footer className="relative border-t border-white/10 bg-[#06070E]">
      <div className="v4-hair absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <img src="/media/d28b25fdf_NDSCLogoBlack.jpeg" alt="Norta DeSyCo" className="h-11 w-auto rounded-md" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#92A0BD]">
              Research-driven software engineering for trustworthy digital systems — blockchain, AI,
              cybersecurity, decentralized identity, and autonomous software, from scientific validation
              to production.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://www.linkedin.com/company/norta-desyco/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 text-[#92A0BD] transition-colors hover:border-[#38BDF8]/60 hover:text-[#67E8F9]">
                <Linkedin style={{ width: 17, height: 17 }} />
              </a>
              <a href="mailto:alex.norta@nortadesyco.xyz" aria-label="Email" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 text-[#92A0BD] transition-colors hover:border-[#38BDF8]/60 hover:text-[#67E8F9]">
                <Mail style={{ width: 17, height: 17 }} />
              </a>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5f6b86]">Navigate</div>
            <ul className="mt-4 space-y-3">
              {navigation.map((item) => (
                <li key={item.name}><Link to={item.href} className="text-sm text-[#92A0BD] transition-colors hover:text-white">{item.name}</Link></li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5f6b86]">Get in touch</div>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="mailto:alex.norta@nortadesyco.xyz" className="text-[#92A0BD] transition-colors hover:text-white break-words">alex.norta@nortadesyco.xyz</a></li>
              <li><a href="mailto:sowelu.avanzo@nortadesyco.xyz" className="text-[#92A0BD] transition-colors hover:text-white break-words">sowelu.avanzo@nortadesyco.xyz</a></li>
              <li className="text-[#6b7796]">Tallinn, Estonia&nbsp;·&nbsp;Ras Al Khaimah, UAE</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#5f6b86]">&copy; {year} Norta DeSyCo OÜ. All rights reserved.</p>
          <p className="text-xs uppercase tracking-[0.16em] text-[#5f6b86]">Research · Software Engineering · Digital Transformation</p>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#06070E] font-sans antialiased">
      <style>{`body { font-family: 'Inter Variable','Inter',sans-serif; background:#06070E; }`}</style>
      <Header onOpenConsultation={() => setOpen(true)} />
      <main>{children}</main>
      <Footer />
      <ConsultationFormModal open={open} onOpenChange={setOpen} />
    </div>
  );
}
