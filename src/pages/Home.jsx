import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import ConsultationFormModal from '../components/ConsultationFormModal';

/* ---------- hero ---------- */
function Hero({ onDiscuss }) {
  return (
    <section className="bg-[#ECEAE2] pt-28 sm:pt-36">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="max-w-5xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF3B14]">
            Research × Software Engineering × Digital Transformation
          </div>
          <h1 className="font-brk mt-6 text-[13vw] font-bold leading-[0.9] tracking-[-0.03em] text-[#121216] sm:text-7xl lg:text-[6.7rem]">
            We turn research<br className="hidden sm:block" /> into systems you<br className="hidden sm:block" /> can <span className="text-[#FF3B14]">trust</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#413F38] sm:text-xl">
            Norta DeSyCo is a research-driven software-engineering company — blockchain, AI, cybersecurity,
            decentralized identity, and autonomous software, taken from scientific validation to production.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button onClick={onDiscuss} className="group inline-flex items-center gap-2 rounded-full bg-[#FF3B14] px-7 py-3.5 text-base font-semibold text-white transition-transform hover:scale-[1.03]">
              Discuss a project
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <Link to={createPageUrl('Services')} className="inline-flex items-center gap-2 rounded-full border border-[#121216]/25 px-7 py-3.5 text-base font-semibold text-[#121216] transition-colors hover:border-[#121216] hover:bg-[#121216] hover:text-[#ECEAE2]">
              Explore capabilities
            </Link>
          </div>
        </div>

        {/* oversized metrics */}
        <div className="mt-20 grid grid-cols-1 gap-8 border-t border-[#121216]/15 pt-10 sm:grid-cols-3">
          {[
            { v: '11+', l: 'PhD researchers supervised' },
            { v: '200+', l: 'Peer-reviewed publications' },
            { v: '3,900+', l: 'Research citations' },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-brk text-6xl font-bold tracking-tight text-[#121216] sm:text-7xl">{s.v}</div>
              <div className="mt-2 text-sm font-medium uppercase tracking-wide text-[#5A574E]">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- kinetic marquee (signature) ---------- */
function Marquee() {
  const items = ['Blockchain', 'Artificial Intelligence', 'Cybersecurity', 'Decentralized Identity', 'Autonomous Agents', 'DeFi', 'Knowledge Graphs', 'Digital Transformation'];
  const Track = () => (
    <>
      {items.map((t, i) => (
        <span key={i} className="flex items-center whitespace-nowrap">
          <span className="font-brk px-8 text-3xl font-semibold text-[#ECEAE2] sm:text-4xl">{t}</span>
          <span className="text-2xl text-[#FF3B14]">✳</span>
        </span>
      ))}
    </>
  );
  return (
    <div className="mt-24 overflow-hidden border-y border-white/10 bg-[#0B0B0D] py-6">
      <div className="flex w-max v3-marquee">
        <Track />
        <Track />
      </div>
    </div>
  );
}

/* ---------- capabilities (dark) ---------- */
const CAPS = [
  { n: '01', name: 'Blockchain & Decentralized Systems', desc: 'Architecture, DAO governance, smart-contract engineering, tokenomics, and DeFi — design to audited implementation.' },
  { n: '02', name: 'Artificial Intelligence & Machine Learning', desc: 'Applied ML, explainable AI, anomaly detection, NLP pipelines, and edge/TinyML for production environments.' },
  { n: '03', name: 'Software Engineering & Cloud', desc: 'Full-stack development, model-driven engineering, distributed platforms, and cloud-native delivery.' },
  { n: '04', name: 'Cybersecurity, Identity & Digital Trust', desc: 'Threat modeling, formal verification, decentralized identity (DID/VC), and challenge-response authentication.' },
  { n: '05', name: 'Autonomous Agents & Automation', desc: 'Multi-agent systems, agent orchestration, and autonomous business workflows with governance built in.' },
  { n: '06', name: 'Research, Innovation & Validation', desc: 'Technical due diligence, consortium and proposal development, and scientific validation of emerging technology.' },
];

function Capabilities() {
  return (
    <section className="bg-[#0B0B0D] py-20 sm:py-28">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="font-brk max-w-2xl text-4xl font-bold leading-[0.98] tracking-tight text-white sm:text-6xl">
            One team, across the<br className="hidden sm:block" /> whole digital-systems stack.
          </h2>
          <p className="max-w-sm text-[#ABA79C]">
            DAO and DeFi engineering is our distinctive specialization — inside a far broader capability set.
          </p>
        </div>
        <div className="mt-14 border-t border-white/10">
          {CAPS.map((c) => (
            <div key={c.n} className="group grid grid-cols-1 gap-4 border-b border-white/10 py-8 transition-colors hover:bg-white/[0.03] sm:grid-cols-[5rem_1fr_1.1fr] sm:items-baseline sm:gap-8 sm:px-2">
              <div className="font-brk text-2xl font-semibold text-[#FF3B14]">{c.n}</div>
              <h3 className="font-brk text-2xl font-semibold text-white sm:text-3xl">{c.name}</h3>
              <p className="text-[#ABA79C]">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- vermilion evidence band ---------- */
function Evidence() {
  return (
    <section className="bg-[#FF3B14] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <h2 className="font-brk text-4xl font-bold leading-[0.98] tracking-tight sm:text-6xl">
            Every claim we make is backed by an evidence chain.
          </h2>
          <p className="text-lg leading-relaxed text-white/90">
            Named expertise → published method → delivered project → peer-reviewed result. We don’t sell
            aspiration; we ship systems you can verify — grounded in doctoral research and real
            implementations across Europe and the UAE.
          </p>
        </div>
        <div className="mt-14 flex flex-wrap gap-3">
          {['Peer-reviewed methods', 'International research partnerships', 'Industry implementations', 'Europe & UAE operations'].map((t) => (
            <span key={t} className="rounded-full border border-white/40 px-4 py-1.5 text-sm font-medium">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- competence areas (light editorial list) ---------- */
const AREAS = [
  { name: 'Blockchain, DAO & Digital-Trust Engineering', desc: 'Model-driven DAO development, governance and token-economy design, smart-contract generation, and decentralized identity.', items: 'DAO-ML · ET-DM · Tokenomics · DID / VC' },
  { name: 'Artificial Intelligence & Autonomous Systems', desc: 'Machine learning, explainable AI, NLP, and multi-agent automation applied to real organizational and market problems.', items: 'Applied ML · Explainable AI · NLP & KGs · AI agents' },
  { name: 'Cybersecurity, Verification & Software Assurance', desc: 'Formal methods, threat modeling, and smart-contract security that keep systems resilient under adversarial conditions.', items: 'Formal verification · Threat modeling · Contract security · Due diligence' },
  { name: 'Software, Cloud & Distributed Systems', desc: 'Production software engineering, cloud-native architectures, and distributed platforms — from prototype to deployment.', items: 'Full-stack · Cloud & DevOps · Distributed · Code generation' },
  { name: 'Research & Innovation Development', desc: 'Turning peer-reviewed research into funded projects, consortia, and validated proofs of concept.', items: 'Proposals · Consortia · Design science · Demonstrators' },
];

function Competence() {
  return (
    <section className="bg-[#ECEAE2] py-20 sm:py-28">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF3B14]">Competence areas</div>
        <h2 className="font-brk mt-5 max-w-3xl text-4xl font-bold leading-[0.98] tracking-tight text-[#121216] sm:text-6xl">
          Five connected areas of expertise.
        </h2>
        <div className="mt-14 border-t border-[#121216]/15">
          {AREAS.map((a) => (
            <div key={a.name} className="grid grid-cols-1 gap-3 border-b border-[#121216]/15 py-8 md:grid-cols-12 md:gap-8">
              <h3 className="font-brk text-2xl font-semibold text-[#121216] md:col-span-5">{a.name}</h3>
              <p className="text-[#413F38] md:col-span-5">{a.desc}</p>
              <div className="text-sm font-medium text-[#5A574E] md:col-span-2">{a.items}</div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link to={createPageUrl('Services')} className="group inline-flex items-center gap-2 text-lg font-semibold text-[#121216]">
            <span className="v3-link">See the full 12-service portfolio</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- specialization + methodology (dark) ---------- */
function Method() {
  const steps = [
    { n: '01', name: 'Model & specify', desc: 'DAO governance and token economies validated with our DAO-ML and ET-DM modeling languages.' },
    { n: '02', name: 'Generate & implement', desc: 'Low-code / no-code generation of DAOs, DApps, and deployment platforms from the validated model.' },
    { n: '03', name: 'Test & verify', desc: 'Automated test generation that checks real behavior against the specification before it ships.' },
  ];
  return (
    <section className="bg-[#0B0B0D] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF3B14]">Flagship specialization &amp; method</div>
            <h2 className="font-brk mt-5 text-4xl font-bold leading-[0.98] tracking-tight sm:text-6xl">
              Model-driven DAO &amp; token engineering.
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-[#ABA79C]">
              Our most established practice: from concept to deployment with model-driven engineering,
              hands-on training, and technical groundwork for regulatory alignment alongside qualified
              legal partners. It’s one published example of a method we apply across every domain — explore
              it in the defended PhD thesis and publications (
              <a href="https://tesidottorato.depositolegale.it/bitstream/20.500.14242/214884/1/ilovepdf_merged-8.pdf" target="_blank" rel="noopener noreferrer" className="font-medium text-white underline decoration-[#FF3B14] decoration-2 underline-offset-4">Avanzo, 2025</a>
              ).
            </p>
            <div className="mt-8">
              <Link to={createPageUrl('Projects')} className="group inline-flex items-center gap-2 text-lg font-semibold text-white">
                <span className="v3-link">View projects &amp; publications</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="border-t border-white/10">
            {steps.map((s) => (
              <div key={s.n} className="flex gap-6 border-b border-white/10 py-7">
                <div className="font-brk text-2xl font-semibold text-[#FF3B14]">{s.n}</div>
                <div>
                  <h3 className="font-brk text-xl font-semibold text-white">{s.name}</h3>
                  <p className="mt-1 text-[#ABA79C]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const onDiscuss = () => setOpen(true);
  return (
    <div className="bg-[#ECEAE2]">
      <Hero onDiscuss={onDiscuss} />
      <Marquee />
      <Capabilities />
      <Evidence />
      <Competence />
      <Method />
      <ConsultationFormModal open={open} onOpenChange={setOpen} />
    </div>
  );
}
