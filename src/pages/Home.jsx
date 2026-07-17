import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import {
  ArrowUpRight, ArrowRight, Boxes, Brain, Code, Shield, Bot, FlaskConical,
  Network, CheckCircle,
} from 'lucide-react';
import ConsultationFormModal from '../components/ConsultationFormModal';

/* ---------- reusable bits ---------- */
function Eyebrow({ children, muted }) {
  return <div className={`nd-label nd-tick ${muted ? 'nd-label--muted' : ''}`}>{children}</div>;
}

function CTAButtons({ onDiscuss }) {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={onDiscuss}
        className="group inline-flex items-center gap-2 rounded-md bg-[#18C5FF] px-6 py-3 text-sm font-semibold text-[#04060d] transition-colors hover:bg-[#5bd6ff]"
      >
        Discuss a Project
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
      <Link
        to={createPageUrl('Services')}
        className="inline-flex items-center gap-2 rounded-md border border-[#18C5FF]/30 px-6 py-3 text-sm font-semibold text-[#E8ECFB] transition-colors hover:border-[#18C5FF]/70 hover:bg-[#18C5FF]/5"
      >
        Explore Capabilities
      </Link>
    </div>
  );
}

/* ---------- signature: the evidence chain ---------- */
const CHAIN = [
  { k: 'Claim', v: 'What we assert' },
  { k: 'Expertise', v: 'Named specialists' },
  { k: 'Method', v: 'Published models' },
  { k: 'Project', v: 'Delivered systems' },
  { k: 'Publication', v: 'Peer review' },
];

function EvidenceChain() {
  return (
    <div className="nd-module rounded-xl p-6 sm:p-8">
      <div className="nd-label nd-label--muted mb-6">How our claims are backed — the evidence chain</div>
      <ol className="grid grid-cols-2 gap-y-6 sm:grid-cols-5 sm:gap-y-0">
        {CHAIN.map((step, i) => (
          <li key={step.k} className="relative flex flex-col">
            <div className="flex items-center">
              <span className="h-2.5 w-2.5 rounded-full bg-[#18C5FF]" />
              {i < CHAIN.length - 1 && (
                <span className="ml-2 hidden h-px flex-1 bg-gradient-to-r from-[#18C5FF]/50 to-[#18C5FF]/10 sm:block" />
              )}
            </div>
            <div className="mt-3 font-display text-base font-semibold text-[#E8ECFB]">{step.k}</div>
            <div className="font-mono2 mt-1 text-[11px] uppercase tracking-[0.12em] text-[#8A93B8]">{step.v}</div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Hero({ onDiscuss }) {
  return (
    <section className="relative overflow-hidden">
      <div className="nd-grid nd-grid-fade absolute inset-0" aria-hidden="true" />
      <div className="nd-glow pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[#18C5FF]/12 blur-[120px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 pt-36 pb-16 sm:px-8 sm:pt-40 sm:pb-24">
        <div className="max-w-3xl">
          <Eyebrow>Research · Software Engineering · Digital Transformation</Eyebrow>
          <h1 className="font-display mt-6 text-5xl font-bold leading-[1.02] tracking-tight text-[#E8ECFB] sm:text-6xl lg:text-7xl">
            Engineering trustworthy digital systems
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#8A93B8]">
            Norta DeSyCo is a research-driven software-engineering company. We design, validate, and
            implement trustworthy digital systems across blockchain, artificial intelligence,
            cybersecurity, decentralized identity, and autonomous software — from scientific
            validation to production.
          </p>
          <div className="mt-9">
            <CTAButtons onDiscuss={onDiscuss} />
          </div>
        </div>
        <div className="mt-16">
          <EvidenceChain />
        </div>
      </div>
    </section>
  );
}

/* ---------- capabilities ---------- */
const CAPS = [
  { code: 'BLK', name: 'Blockchain & Decentralized Systems', icon: Boxes, desc: 'Architecture, DAO governance, smart-contract engineering, tokenomics, and DeFi — design to audited implementation.' },
  { code: 'AI', name: 'Artificial Intelligence & Machine Learning', icon: Brain, desc: 'Applied ML, explainable AI, anomaly detection, NLP pipelines, and edge/TinyML for production.' },
  { code: 'SW', name: 'Software Engineering & Cloud', icon: Code, desc: 'Full-stack development, model-driven engineering, distributed platforms, and cloud-native delivery.' },
  { code: 'SEC', name: 'Cybersecurity, Identity & Digital Trust', icon: Shield, desc: 'Threat modeling, formal verification, decentralized identity (DID/VC), and challenge-response auth.' },
  { code: 'AGT', name: 'Autonomous Agents & Automation', icon: Bot, desc: 'Multi-agent systems, agent orchestration, and autonomous business workflows with governance built in.' },
  { code: 'RSCH', name: 'Research, Innovation & Validation', icon: FlaskConical, desc: 'Technical due diligence, consortium and proposal development, and scientific validation of new tech.' },
];

function Capabilities() {
  return (
    <section className="border-t border-[#18C5FF]/10">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Eyebrow>Capabilities</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl font-bold tracking-tight text-[#E8ECFB] sm:text-4xl">
          One team, across the digital-systems stack
        </h2>
        <p className="mt-4 max-w-2xl text-[#8A93B8]">
          From scientific method to production system — with DAO and DeFi engineering as a distinctive
          specialization inside a broader capability set.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-[#18C5FF]/15 bg-[#18C5FF]/10 sm:grid-cols-2 lg:grid-cols-3">
          {CAPS.map((c) => (
            <div key={c.code} className="group bg-[#04060d] p-7 transition-colors hover:bg-[#0a0f1c]">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#18C5FF]/25 bg-[#18C5FF]/10">
                  <c.icon className="h-5 w-5 text-[#18C5FF]" />
                </div>
                <span className="font-mono2 text-xs tracking-[0.15em] text-[#5b6488]">{c.code}</span>
              </div>
              <h3 className="font-display mt-5 text-lg font-semibold text-[#E8ECFB]">{c.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8A93B8]">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- evidence / metrics ---------- */
const STATS = [
  { value: '11+', label: 'PhD researchers supervised' },
  { value: '200+', label: 'Peer-reviewed publications' },
  { value: '3,900+', label: 'Research citations' },
];
const EVIDENCE_TAGS = ['International research partnerships', 'Industry implementations', 'Europe & UAE operations'];

function Evidence() {
  return (
    <section className="border-t border-[#18C5FF]/10 bg-[#0a0f1c]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Eyebrow muted>Built on a deep research foundation</Eyebrow>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-display text-5xl font-bold tracking-tight text-[#E8ECFB] sm:text-6xl">{s.value}</div>
              <div className="font-mono2 mt-3 text-xs uppercase tracking-[0.12em] text-[#8A93B8]">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-x-3 gap-y-2">
          {EVIDENCE_TAGS.map((t) => (
            <span key={t} className="rounded-full border border-[#18C5FF]/20 px-3 py-1 text-xs text-[#8A93B8]">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- competence areas (editorial index) ---------- */
const AREAS = [
  { tag: 'Blockchain', icon: Network, name: 'Blockchain, DAO & Digital-Trust Engineering', desc: 'Model-driven DAO development, governance and token-economy design, smart-contract generation, and decentralized identity.', items: ['DAO-ML & ET-DM', 'Tokenomics', 'Contract audit', 'DID / VC'] },
  { tag: 'AI', icon: Brain, name: 'Artificial Intelligence & Autonomous Systems', desc: 'Machine learning, explainable AI, NLP, and multi-agent automation applied to real organizational and market problems.', items: ['Applied ML', 'Explainable AI', 'NLP & KGs', 'AI agents'] },
  { tag: 'Security', icon: Shield, name: 'Cybersecurity, Verification & Software Assurance', desc: 'Formal methods, threat modeling, and smart-contract security to keep systems resilient under adversarial conditions.', items: ['Formal verification', 'Threat modeling', 'Contract security', 'Due diligence'] },
  { tag: 'Software', icon: Code, name: 'Software, Cloud & Distributed Systems', desc: 'Production software engineering, cloud-native architectures, and distributed platforms — from prototype to deployment.', items: ['Full-stack', 'Cloud & DevOps', 'Distributed', 'Codegen'] },
  { tag: 'Research', icon: FlaskConical, name: 'Research & Innovation Development', desc: 'Turning peer-reviewed research into funded projects, consortia, and validated proofs of concept.', items: ['Proposals', 'Consortia', 'Design science', 'Demonstrators'] },
];

function Competence() {
  return (
    <section className="border-t border-[#18C5FF]/10">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Eyebrow>Competence areas</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl font-bold tracking-tight text-[#E8ECFB] sm:text-4xl">
          Five connected areas of expertise
        </h2>
        <p className="mt-4 max-w-2xl text-[#8A93B8]">Delivered by researchers and engineers who build what they publish.</p>

        <div className="mt-12 divide-y divide-[#18C5FF]/10 border-y border-[#18C5FF]/10">
          {AREAS.map((a) => (
            <div key={a.tag} className="group grid grid-cols-1 gap-4 py-7 transition-colors hover:bg-[#0a0f1c] md:grid-cols-12 md:gap-8 md:px-4">
              <div className="flex items-center gap-3 md:col-span-3">
                <a.icon className="h-5 w-5 flex-shrink-0 text-[#18C5FF]" />
                <span className="font-mono2 text-xs uppercase tracking-[0.15em] text-[#5b6488]">{a.tag}</span>
              </div>
              <div className="md:col-span-6">
                <h3 className="font-display text-lg font-semibold text-[#E8ECFB]">{a.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#8A93B8]">{a.desc}</p>
              </div>
              <div className="flex flex-wrap content-start gap-1.5 md:col-span-3">
                {a.items.map((it) => (
                  <span key={it} className="font-mono2 rounded border border-[#18C5FF]/15 px-2 py-0.5 text-[11px] text-[#8A93B8]">{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link to={createPageUrl('Services')} className="group inline-flex items-center gap-2 text-sm font-semibold text-[#18C5FF]">
            See the full 12-service portfolio
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- flagship specialization (DAO) ---------- */
function Specialization() {
  const dao = [
    'Token economy design and launch strategy modeling',
    'Technical groundwork for MiCA alignment (with legal partners)',
    'Complete governance architecture development',
    'Post-launch monitoring & optimization services',
  ];
  const training = [
    'DAO design & deployment workshops',
    'DeFi protocol development and integration training',
    'Custom team training programs and consultations',
  ];
  return (
    <section className="border-t border-[#18C5FF]/10 bg-[#0a0f1c]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Eyebrow>Flagship specialization</Eyebrow>
        <h2 className="font-display mt-5 max-w-3xl text-3xl font-bold tracking-tight text-[#E8ECFB] sm:text-4xl">
          End-to-end DAO &amp; token engineering
        </h2>
        <p className="mt-4 max-w-2xl text-[#8A93B8]">
          Our most established practice: from concept to deployment, with model-driven engineering,
          hands-on training, and technical support for regulatory alignment alongside qualified legal partners.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {[{ title: 'DAO & token launch', list: dao }, { title: 'Training & workshops', list: training }].map((col) => (
            <div key={col.title} className="nd-module rounded-xl p-7">
              <h3 className="font-display text-xl font-semibold text-[#E8ECFB]">{col.title}</h3>
              <ul className="mt-5 space-y-3">
                {col.list.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#18C5FF]" />
                    <span className="text-sm text-[#8A93B8]">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- methodology ---------- */
function Methodology() {
  const methods = [
    { name: 'DAO governance & token-economy design', desc: 'Validated with DAO-ML and ET-DM modeling languages.' },
    { name: 'Tool-supported implementation', desc: 'Low-code / no-code generation of DAOs and deployment platforms.' },
    { name: 'Automated testing frameworks', desc: 'Test generation that validates behavior against the specification.' },
  ];
  return (
    <section className="border-t border-[#18C5FF]/10">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Our approach</Eyebrow>
            <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-[#E8ECFB] sm:text-4xl">
              A research-backed, model-driven methodology
            </h2>
            <p className="mt-5 leading-relaxed text-[#8A93B8]">
              Across every domain we work in, we transform complex requirements into secure,
              production-ready systems by leveraging rigorous academic research — dedicated tool
              support, software-engineering methods, languages, and models. Our model-driven approach
              to DAOs and DApps is one published example; explore the method and case studies in the
              defended PhD thesis and publications (
              <a href="https://tesidottorato.depositolegale.it/bitstream/20.500.14242/214884/1/ilovepdf_merged-8.pdf" target="_blank" rel="noopener noreferrer" className="font-medium text-[#18C5FF] underline decoration-[#18C5FF]/40 underline-offset-4 hover:decoration-[#18C5FF]">Avanzo, 2025</a>
              ).
            </p>
            <div className="mt-8">
              <Link to={createPageUrl('Projects')} className="group inline-flex items-center gap-2 text-sm font-semibold text-[#18C5FF]">
                View projects &amp; publications
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="divide-y divide-[#18C5FF]/10 border-t border-[#18C5FF]/10 lg:border-t-0">
            {methods.map((m, i) => (
              <div key={m.name} className="flex gap-5 py-6">
                <span className="font-mono2 pt-1 text-sm text-[#18C5FF]">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-base font-semibold text-[#E8ECFB]">{m.name}</h3>
                  <p className="mt-1 text-sm text-[#8A93B8]">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- closing CTA ---------- */
function CTA({ onDiscuss }) {
  return (
    <section className="relative overflow-hidden border-t border-[#18C5FF]/10">
      <div className="nd-grid nd-grid-fade absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32 text-center">
        <h2 className="font-display mx-auto max-w-3xl text-4xl font-bold tracking-tight text-[#E8ECFB] sm:text-5xl">
          Ready to build a trustworthy digital system?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[#8A93B8]">
          A blockchain platform, an AI system, a research consortium, or a software-engineering
          assignment — we take projects from scientific validation to production.
        </p>
        <div className="mt-9 flex justify-center">
          <button onClick={onDiscuss} className="group inline-flex items-center gap-2 rounded-md bg-[#18C5FF] px-7 py-3.5 text-sm font-semibold text-[#04060d] transition-colors hover:bg-[#5bd6ff]">
            Discuss a Project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const onDiscuss = () => setOpen(true);
  return (
    <div className="bg-[#04060d]">
      <Hero onDiscuss={onDiscuss} />
      <Capabilities />
      <Evidence />
      <Competence />
      <Specialization />
      <Methodology />
      <CTA onDiscuss={onDiscuss} />
      <ConsultationFormModal open={open} onOpenChange={setOpen} />
    </div>
  );
}
