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
      <img src="/media/d28b25fdf_NDSCLogoBlack.jpeg" alt="Norta DeSyCo" className="h-9 w-auto" />
    </Link>
  );
}

function Header({ onOpenConsultation }) {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#0B0B0D] border-b border-white/10">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.href ? 'text-[#FF3B14]' : 'text-[#D8D5CC] hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <button
              onClick={onOpenConsultation}
              className="group inline-flex items-center gap-1.5 rounded-full bg-[#FF3B14] px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Discuss a project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 text-[#D8D5CC] hover:text-white"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="m-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div id="m-menu" className="md:hidden border-t border-white/10 bg-[#0B0B0D]">
          <nav className="flex flex-col px-5 py-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setOpen(false)}
                className={`py-3 text-base font-medium ${location.pathname === item.href ? 'text-[#FF3B14]' : 'text-[#D8D5CC]'}`}
              >
                {item.name}
              </Link>
            ))}
            <button onClick={() => { setOpen(false); onOpenConsultation(); }} className="mt-2 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[#FF3B14] px-5 py-3 text-base font-semibold text-white">
              Discuss a project <ArrowUpRight className="h-4 w-4" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer({ onOpenConsultation }) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0B0B0D] text-[#D8D5CC]">
      {/* Big CTA band */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-24">
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <h2 className="font-brk text-4xl font-bold leading-[0.98] tracking-tight text-white sm:text-6xl">
              Let’s build something<br />worth trusting.
            </h2>
            <button
              onClick={onOpenConsultation}
              className="group inline-flex w-max items-center gap-2 rounded-full bg-[#FF3B14] px-7 py-4 text-base font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Discuss a project
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[88rem] px-5 py-12 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <img src="/media/d28b25fdf_NDSCLogoBlack.jpeg" alt="Norta DeSyCo" className="h-10 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#8F8C83]">
              Research-driven software engineering for trustworthy digital systems — blockchain, AI,
              cybersecurity, decentralized identity, and autonomous software, from scientific validation
              to production.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://www.linkedin.com/company/norta-desyco/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[#D8D5CC] transition-colors hover:border-[#FF3B14] hover:text-[#FF3B14]">
                <Linkedin style={{ width: 17, height: 17 }} />
              </a>
              <a href="mailto:alex.norta@nortadesyco.xyz" aria-label="Email" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[#D8D5CC] transition-colors hover:border-[#FF3B14] hover:text-[#FF3B14]">
                <Mail style={{ width: 17, height: 17 }} />
              </a>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6f6c63]">Navigate</div>
            <ul className="mt-4 space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-sm text-[#D8D5CC] transition-colors hover:text-[#FF3B14]">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6f6c63]">Get in touch</div>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="mailto:alex.norta@nortadesyco.xyz" className="text-[#D8D5CC] transition-colors hover:text-[#FF3B14] break-words">alex.norta@nortadesyco.xyz</a></li>
              <li><a href="mailto:sowelu.avanzo@nortadesyco.xyz" className="text-[#D8D5CC] transition-colors hover:text-[#FF3B14] break-words">sowelu.avanzo@nortadesyco.xyz</a></li>
              <li className="text-[#8F8C83]">Tallinn, Estonia&nbsp;·&nbsp;Ras Al Khaimah, UAE</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#6f6c63]">&copy; {year} Norta DeSyCo OÜ. All rights reserved.</p>
          <p className="text-xs uppercase tracking-[0.16em] text-[#6f6c63]">Research · Software Engineering · Digital Transformation</p>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#ECEAE2] font-sans antialiased">
      <style>{`body { font-family: 'Inter Variable','Inter',sans-serif; background:#ECEAE2; }`}</style>
      <Header onOpenConsultation={() => setOpen(true)} />
      <main>{children}</main>
      <Footer onOpenConsultation={() => setOpen(true)} />
      <ConsultationFormModal open={open} onOpenChange={setOpen} />
    </div>
  );
}
