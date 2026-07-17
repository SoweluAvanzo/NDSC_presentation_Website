import { useState } from 'react';
import { Mail, MapPin, Linkedin, ArrowUpRight } from 'lucide-react';
import ConsultationFormModal from '../components/ConsultationFormModal';

function Eyebrow({ children, muted }) {
  return <div className={`nd-label nd-tick ${muted ? 'nd-label--muted' : ''}`}>{children}</div>;
}

export default function ContactPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#04060d]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="nd-grid nd-grid-fade absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 pt-36 pb-16 sm:px-8 sm:pt-40 sm:pb-20">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="font-display mt-6 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-[#E8ECFB] sm:text-5xl lg:text-6xl">
            Let’s discuss your project
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#8A93B8]">
            Discuss a software-engineering, research, or emerging-technology project with us. We work
            with companies, universities, public institutions, investors, and technology ventures on
            the design, validation, and implementation of trustworthy digital systems.
          </p>
          <div className="mt-9">
            <button onClick={() => setOpen(true)} className="group inline-flex items-center gap-2 rounded-md bg-[#18C5FF] px-7 py-3.5 text-sm font-semibold text-[#04060d] transition-colors hover:bg-[#5bd6ff]">
              Start a Project Inquiry
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="border-t border-[#18C5FF]/10">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="nd-module rounded-xl p-7">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#18C5FF]" />
                <div className="nd-label nd-label--muted">Email</div>
              </div>
              <ul className="mt-5 space-y-4 text-sm">
                <li>
                  <div className="font-mono2 text-[11px] uppercase tracking-[0.12em] text-[#5b6488]">CEO</div>
                  <a href="mailto:alex.norta@nortadesyco.xyz" className="text-[#E8ECFB] transition-colors hover:text-[#18C5FF] break-words">alex.norta@nortadesyco.xyz</a>
                </li>
                <li>
                  <div className="font-mono2 text-[11px] uppercase tracking-[0.12em] text-[#5b6488]">CTO</div>
                  <a href="mailto:sowelu.avanzo@nortadesyco.xyz" className="text-[#E8ECFB] transition-colors hover:text-[#18C5FF] break-words">sowelu.avanzo@nortadesyco.xyz</a>
                </li>
              </ul>
            </div>

            <div className="nd-module rounded-xl p-7">
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-[#18C5FF]" />
                <div className="nd-label nd-label--muted">LinkedIn</div>
              </div>
              <p className="mt-5 text-sm text-[#8A93B8]">Connect with us professionally.</p>
              <a href="https://www.linkedin.com/company/norta-desyco/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[#18C5FF] transition-colors hover:text-[#5bd6ff]">
                Visit our page
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="nd-module rounded-xl p-7">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#18C5FF]" />
                <div className="nd-label nd-label--muted">Locations</div>
              </div>
              <ul className="mt-5 space-y-4 text-sm">
                <li>
                  <div className="text-[#E8ECFB]">Norta DeSyCo OÜ</div>
                  <div className="text-[#8A93B8]">Tallinn, Estonia</div>
                </li>
                <li>
                  <div className="text-[#E8ECFB]">Norta DeSyCo Limited</div>
                  <div className="text-[#8A93B8]">Jazeera - Al Riffa, Ras Al Khaimah, UAE</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ConsultationFormModal open={open} onOpenChange={setOpen} />
    </div>
  );
}
