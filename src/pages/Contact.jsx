import { useState } from 'react';
import { Mail, MapPin, Linkedin, ArrowUpRight } from 'lucide-react';
import ConsultationFormModal from '../components/ConsultationFormModal';

export default function ContactPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#ECEAE2]">
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF3B14]">Contact</div>
          <h1 className="font-brk mt-6 max-w-4xl text-5xl font-bold leading-[0.92] tracking-[-0.02em] text-[#121216] sm:text-7xl lg:text-8xl">
            Let’s discuss your project.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[#413F38] sm:text-xl">
            Discuss a software-engineering, research, or emerging-technology project with us. We work with
            companies, universities, public institutions, investors, and technology ventures on the design,
            validation, and implementation of trustworthy digital systems.
          </p>
          <div className="mt-10">
            <button onClick={() => setOpen(true)} className="group inline-flex items-center gap-2 rounded-full bg-[#FF3B14] px-8 py-4 text-base font-semibold text-white transition-transform hover:scale-[1.03]">
              Start a project inquiry
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-[#121216]/15 bg-[#121216]/15 md:grid-cols-3">
            <div className="bg-[#ECEAE2] p-8">
              <Mail className="h-6 w-6 text-[#FF3B14]" />
              <div className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#5A574E]">Email</div>
              <div className="mt-4 space-y-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-[#8b877c]">CEO</div>
                  <a href="mailto:alex.norta@nortadesyco.xyz" className="font-medium text-[#121216] hover:text-[#FF3B14] break-words">alex.norta@nortadesyco.xyz</a>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-[#8b877c]">CTO</div>
                  <a href="mailto:sowelu.avanzo@nortadesyco.xyz" className="font-medium text-[#121216] hover:text-[#FF3B14] break-words">sowelu.avanzo@nortadesyco.xyz</a>
                </div>
              </div>
            </div>
            <div className="bg-[#ECEAE2] p-8">
              <Linkedin className="h-6 w-6 text-[#FF3B14]" />
              <div className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#5A574E]">LinkedIn</div>
              <p className="mt-4 text-[#5A574E]">Connect with us professionally.</p>
              <a href="https://www.linkedin.com/company/norta-desyco/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 font-semibold text-[#FF3B14] hover:underline">
                Visit our page <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="bg-[#ECEAE2] p-8">
              <MapPin className="h-6 w-6 text-[#FF3B14]" />
              <div className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#5A574E]">Locations</div>
              <div className="mt-4 space-y-4 text-sm">
                <div>
                  <div className="font-semibold text-[#121216]">Norta DeSyCo OÜ</div>
                  <div className="text-[#5A574E]">Tallinn, Estonia</div>
                </div>
                <div>
                  <div className="font-semibold text-[#121216]">Norta DeSyCo Limited</div>
                  <div className="text-[#5A574E]">Jazeera - Al Riffa, Ras Al Khaimah, UAE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationFormModal open={open} onOpenChange={setOpen} />
    </div>
  );
}
