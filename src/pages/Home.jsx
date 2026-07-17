import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowUpRight, ArrowRight, Boxes, Brain, Code, Shield, Bot, FlaskConical, Sparkles } from 'lucide-react';
import ConsultationFormModal from '../components/ConsultationFormModal';

function GhostBtn({ to, children }) {
  return (
    <Link to={to} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-white/30 hover:bg-white/10">
      {children}
    </Link>
  );
}

function Hero({ onDiscuss }) {
  return (
    <section className="relative overflow-hidden">
      <div className="v4-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="v4-blob left-[-8%] top-[-6%] h-[460px] w-[460px] bg-[#22D3EE]/25" aria-hidden="true" />
      <div className="v4-blob right-[-6%] top-[2%] h-[520px] w-[520px] bg-[#A855F7]/25" style={{ animationDelay: '3s' }} aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,transparent_30%,#06070E_78%)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl px-5 pt-36 pb-16 text-center sm:px-8 sm:pt-44 sm:pb-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-xs font-medium text-[#C7D2FE] backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-[#67E8F9]" />
          Research-driven blockchain, AI &amp; digital-systems engineering
        </div>
        <h1 className="font-sora mx-auto mt-8 max-w-4xl text-5xl font-bold leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Engineering <span className="v4-grad">trustworthy</span> digital systems.
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-[#92A0BD]">
          Norta DeSyCo turns peer-reviewed research into production systems — across blockchain, AI,
          cybersecurity, decentralized identity, and autonomous software, from scientific validation to launch.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button onClick={onDiscuss} className="v4-btn group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-white">
            Discuss a project
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <GhostBtn to={createPageUrl('Services')}>Explore capabilities</GhostBtn>
        </div>

        {/* glass stat strip */}
        <div className="v4-glass mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4 rounded-2xl p-6 sm:p-8">
          {[
            { v: '11+', l: 'PhD researchers supervised' },
            { v: '200+', l: 'Peer-reviewed publications' },
            { v: '3,900+', l: 'Research citations' },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-sora text-3xl font-bold text-white sm:text-4xl">{s.v}</div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-[#7d8aa8] sm:text-xs">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-medium uppercase tracking-wider text-[#5f6b86]">
          {['Blockchain', 'Artificial Intelligence', 'Cybersecurity', 'Decentralized Identity', 'Autonomous Agents', 'Digital Transformation'].map((d, i) => (
            <span key={d} className="flex items-center gap-3">
              {i > 0 && <span className="text-[#38BDF8]/40">◆</span>}{d}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const CAPS = [
  { icon: Boxes, name: 'Blockchain & Decentralized Systems', desc: 'Architecture, DAO governance, smart-contract engineering, tokenomics, and DeFi — design to audited implementation.' },
  { icon: Brain, name: 'Artificial Intelligence & ML', desc: 'Applied ML, explainable AI, anomaly detection, NLP pipelines, and edge/TinyML for production environments.' },
  { icon: Code, name: 'Software Engineering & Cloud', desc: 'Full-stack development, model-driven engineering, distributed platforms, and cloud-native delivery.' },
  { icon: Shield, name: 'Cybersecurity, Identity & Trust', desc: 'Threat modeling, formal verification, decentralized identity (DID/VC), and challenge-response authentication.' },
  { icon: Bot, name: 'Autonomous Agents & Automation', desc: 'Multi-agent systems, agent orchestration, and autonomous business workflows with governance built in.' },
  { icon: FlaskConical, name: 'Research, Innovation & Validation', desc: 'Technical due diligence, consortium and proposal development, and scientific validation of emerging technology.' },
];

function Capabilities() {
  return (
    <section className="relative border-t border-white/[0.06] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#67E8F9]">Capabilities</div>
          <h2 className="font-sora mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            One team, across the whole <span className="v4-grad">digital-systems stack</span>.
          </h2>
          <p className="mt-4 text-[#92A0BD]">
            DAO and DeFi engineering is our distinctive specialization — inside a far broader capability set.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAPS.map((c) => (
            <div key={c.name} className="v4-glass rounded-2xl p-7">
              <div className="v4-chip flex h-12 w-12 items-center justify-center rounded-xl">
                <c.icon className="h-6 w-6 text-[#8FE9FF]" />
              </div>
              <h3 className="font-sora mt-6 text-lg font-semibold text-white">{c.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#92A0BD]">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const AREAS = [
  { name: 'Blockchain, DAO & Digital-Trust Engineering', desc: 'Model-driven DAO development, governance and token-economy design, smart-contract generation, and decentralized identity.' },
  { name: 'Artificial Intelligence & Autonomous Systems', desc: 'Machine learning, explainable AI, NLP, and multi-agent automation applied to real organizational and market problems.' },
  { name: 'Cybersecurity, Verification & Software Assurance', desc: 'Formal methods, threat modeling, and smart-contract security that keep systems resilient under adversarial conditions.' },
  { name: 'Software, Cloud & Distributed Systems', desc: 'Production software engineering, cloud-native architectures, and distributed platforms — from prototype to deployment.' },
  { name: 'Research & Innovation Development', desc: 'Turning peer-reviewed research into funded projects, consortia, and validated proofs of concept.' },
];

function Competence() {
  return (
    <section className="relative border-t border-white/[0.06] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#67E8F9]">Competence areas</div>
            <h2 className="font-sora mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Five connected areas of expertise.</h2>
            <p className="mt-4 text-[#92A0BD]">Delivered by researchers and engineers who build what they publish.</p>
            <Link to={createPageUrl('Services')} className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#67E8F9]">
              See the full 12-service portfolio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
            {AREAS.map((a) => (
              <div key={a.name} className="py-6 transition-colors hover:bg-white/[0.02]">
                <h3 className="font-sora text-lg font-semibold text-white">{a.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#92A0BD]">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Method() {
  const steps = [
    { n: '01', name: 'Model & specify', desc: 'DAO governance and token economies validated with our DAO-ML and ET-DM modeling languages.' },
    { n: '02', name: 'Generate & implement', desc: 'Low-code / no-code generation of DAOs, DApps, and deployment platforms from the validated model.' },
    { n: '03', name: 'Test & verify', desc: 'Automated test generation that checks real behavior against the specification before it ships.' },
  ];
  return (
    <section className="relative border-t border-white/[0.06] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#67E8F9]">Flagship specialization &amp; method</div>
            <h2 className="font-sora mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Model-driven <span className="v4-grad">DAO &amp; token</span> engineering.
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-[#92A0BD]">
              Our most established practice: from concept to deployment with model-driven engineering,
              hands-on training, and technical groundwork for regulatory alignment alongside qualified legal
              partners. It’s one published example of a method we apply everywhere — explore it in the
              defended PhD thesis and publications (
              <a href="https://tesidottorato.depositolegale.it/bitstream/20.500.14242/214884/1/ilovepdf_merged-8.pdf" target="_blank" rel="noopener noreferrer" className="font-medium text-[#67E8F9] underline decoration-[#38BDF8]/40 underline-offset-4 hover:decoration-[#67E8F9]">Avanzo, 2025</a>
              ).
            </p>
            <Link to={createPageUrl('Projects')} className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#67E8F9]">
              View projects &amp; publications
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.n} className="v4-glass flex gap-5 rounded-2xl p-6">
                <div className="font-sora text-xl font-bold v4-grad">{s.n}</div>
                <div>
                  <h3 className="font-sora text-base font-semibold text-white">{s.name}</h3>
                  <p className="mt-1 text-sm text-[#92A0BD]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA({ onDiscuss }) {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0B1230] via-[#0A0E1F] to-[#160C2A] px-6 py-16 text-center sm:px-12 sm:py-20">
          <div className="v4-blob left-1/4 top-0 h-64 w-64 bg-[#22D3EE]/25" aria-hidden="true" />
          <div className="v4-blob right-1/4 bottom-0 h-64 w-64 bg-[#A855F7]/25" aria-hidden="true" />
          <div className="relative">
            <h2 className="font-sora mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to build a system worth trusting?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[#AEB8D4]">
              A blockchain platform, an AI system, a research consortium, or a software assignment — we take it from scientific validation to production.
            </p>
            <div className="mt-9 flex justify-center">
              <button onClick={onDiscuss} className="v4-btn group inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white">
                Discuss a project
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
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
    <div className="bg-[#06070E]">
      <Hero onDiscuss={onDiscuss} />
      <Capabilities />
      <Competence />
      <Method />
      <CTA onDiscuss={onDiscuss} />
      <ConsultationFormModal open={open} onOpenChange={setOpen} />
    </div>
  );
}
