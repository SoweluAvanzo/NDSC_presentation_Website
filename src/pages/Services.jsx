import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowUpRight } from 'lucide-react';

const SERVICES = [
  { n: '01', title: 'Blockchain Strategy & Decentralized-System Architecture', desc: 'Feasibility, architecture, and technology selection for blockchain and decentralized systems — from first principles to a build-ready design.' },
  { n: '02', title: 'DAO Engineering, Governance & Token-Economy Design', desc: 'Model-driven design and validation of DAO governance and tokenomics with our DAO-ML and ET-DM languages, with technical groundwork for regulatory alignment alongside qualified legal partners.' },
  { n: '03', title: 'Model-Driven Smart-Contract & Blockchain Development', desc: 'Visual specification of on-chain logic translated to gas-efficient, tested Solidity through automated code generation — validated in peer-reviewed work and live client platforms.' },
  { n: '04', title: 'DeFi, Digital Assets & Algorithmic Market Systems', desc: 'Protocol design, risk modeling, on-chain analytics, and algorithmic trading systems for decentralized finance and digital-asset markets.' },
  { n: '05', title: 'Artificial Intelligence & Machine-Learning Engineering', desc: 'Applied ML, explainable AI, anomaly detection, NLP pipelines, and edge/TinyML — designed for trustworthy, production-grade deployment.' },
  { n: '06', title: 'Cybersecurity & Resilient Digital-System Design', desc: 'Threat modeling, formal verification, and resilience engineering that keep governance and software systems secure under adversarial and crisis conditions.' },
  { n: '07', title: 'Software Engineering, Cloud & Distributed Platforms', desc: 'Full-stack software engineering, cloud-native architecture, and distributed platforms — taking systems from prototype to reliable production.' },
  { n: '08', title: 'Decentralized Identity & Digital-Trust Solutions', desc: 'Self-sovereign identity, DIDs and verifiable credentials, and configurable challenge-response authentication for real-world-asset and inter-organizational trust.' },
  { n: '09', title: 'AI Agent Engineering & Autonomous Business Systems', desc: 'Multi-agent systems, agent orchestration, and autonomous business workflows with governance and accountability designed in from the start.' },
  { n: '10', title: 'Research & Innovation Project Development', desc: 'Consortium formation, proposal development, and design-science research that turn ideas into funded, publishable, and deployable outcomes.' },
  { n: '11', title: 'Blockchain Security, Verification & Technical Due Diligence', desc: 'Independent smart-contract review, formal verification, and technical due diligence for ventures, investors, and integrators.' },
  { n: '12', title: 'Custom Research & Emerging-Technology Labs', desc: 'Dedicated applied-research engagements that explore, prototype, and validate emerging technologies against your specific problem.' },
];

const TECH = [
  { title: 'Visual Editor for DAO design (DAO-ML)', desc: 'Model DAO architectures with DAO-ML and automatically generate the underlying smart contracts.' },
  { title: 'Token Economy Design Language (ET-DM)', desc: 'Formally specify and verify tokenomics and trust parameters with our Extended Trusted DApp Modeling language.' },
  { title: 'Test Generation Framework for DAOs', desc: 'Automatically generate comprehensive test suites that validate a DAO’s organizational structures and governance rules.' },
];

const APPS = [
  ['Knowledge Graphs & NLP', 'Turning raw text into governed, structured economic data.'],
  ['Decentralized Healthcare', 'Privacy-preserving health-data integration.'],
  ['Destination Management', 'Decentralized governance for the tourism sector.'],
  ['Ethical & Trustworthy AI', 'Auditability, governance, and privacy for AI systems.'],
];

export default function ServicesPage() {
  return (
    <div className="bg-[#ECEAE2]">
      {/* Hero */}
      <section className="pt-28 pb-4 sm:pt-36">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF3B14]">Capabilities</div>
          <h1 className="font-brk mt-6 max-w-5xl text-5xl font-bold leading-[0.92] tracking-[-0.02em] text-[#121216] sm:text-7xl lg:text-8xl">
            A full-spectrum research-&amp;-engineering portfolio.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#413F38] sm:text-xl">
            From blockchain, AI, and cybersecurity to software, cloud, and applied research. Every
            engagement is backed by named expertise, published methods, and delivered projects.
          </p>
        </div>
      </section>

      {/* 12 services */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5A574E]">Service portfolio — 12 offerings</div>
          <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden border border-[#121216]/15 bg-[#121216]/15 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.n} className="v3-lift bg-[#ECEAE2] p-7 hover:bg-[#E3E0D6]">
                <div className="font-brk text-xl font-semibold text-[#FF3B14]">{s.n}</div>
                <h3 className="font-brk mt-4 text-xl font-semibold leading-snug text-[#121216]">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5A574E]">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to={createPageUrl('Contact')} className="group inline-flex items-center gap-2 rounded-full bg-[#FF3B14] px-7 py-3.5 text-base font-semibold text-white transition-transform hover:scale-[1.03]">
              Discuss a project <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies (dark) */}
      <section className="bg-[#0B0B0D] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF3B14]">Proprietary technologies</div>
          <h2 className="font-brk mt-5 max-w-3xl text-4xl font-bold leading-[0.98] tracking-tight sm:text-6xl">
            Tooling that makes model-driven engineering faster.
          </h2>
          <div className="mt-14 border-t border-white/10">
            {TECH.map((t, i) => (
              <div key={t.title} className="grid grid-cols-1 gap-4 border-b border-white/10 py-7 sm:grid-cols-[4rem_1fr_1.2fr] sm:items-baseline sm:gap-8">
                <div className="font-brk text-xl font-semibold text-[#FF3B14]">0{i + 1}</div>
                <h3 className="font-brk text-2xl font-semibold">{t.title}</h3>
                <p className="text-[#ABA79C]">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF3B14]">Research &amp; industry applications</div>
              <h2 className="font-brk mt-5 text-4xl font-bold leading-[0.98] tracking-tight text-[#121216] sm:text-6xl">Methods proven in the field.</h2>
              <p className="mt-6 max-w-md leading-relaxed text-[#413F38]">
                Our research-backed, model-driven approach introduces DAO-ML and ET-DM to specify
                governance, tokenomics, and trust architectures — enabling automatic smart-contract
                generation, reducing development time, and improving reliability across active industry
                and research projects.
              </p>
            </div>
            <div className="border-t border-[#121216]/15">
              {APPS.map(([k, v]) => (
                <div key={k} className="border-b border-[#121216]/15 py-6">
                  <div className="font-brk text-xl font-semibold text-[#121216]">{k}</div>
                  <div className="mt-1 text-[#5A574E]">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
