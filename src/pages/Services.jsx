import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import {
  Boxes, Network, Code, TrendingUp, Brain, Shield, Cloud, Fingerprint,
  Bot, FlaskConical, SearchCheck, Cpu, Palette, Shapes, TestTube, ArrowUpRight, CheckCircle,
} from 'lucide-react';

function Eyebrow({ children, muted }) {
  return <div className={`nd-label nd-tick ${muted ? 'nd-label--muted' : ''}`}>{children}</div>;
}

const SERVICES = [
  { tag: 'BLK', icon: Boxes, title: 'Blockchain Strategy & Decentralized-System Architecture', desc: 'Feasibility, architecture, and technology selection for blockchain and decentralized systems — from first principles to a build-ready design.' },
  { tag: 'DAO', icon: Network, title: 'DAO Engineering, Governance & Token-Economy Design', desc: 'Model-driven design and validation of DAO governance and tokenomics with our DAO-ML and ET-DM languages, with technical groundwork for regulatory alignment delivered alongside qualified legal partners.' },
  { tag: 'BLK', icon: Code, title: 'Model-Driven Smart-Contract & Blockchain Development', desc: 'Visual specification of on-chain logic translated to gas-efficient, tested Solidity through automated code generation — validated in peer-reviewed work and live client platforms.' },
  { tag: 'DEFI', icon: TrendingUp, title: 'DeFi, Digital Assets & Algorithmic Market Systems', desc: 'Protocol design, risk modeling, on-chain analytics, and algorithmic trading systems for decentralized finance and digital-asset markets.' },
  { tag: 'AI', icon: Brain, title: 'Artificial Intelligence & Machine-Learning Engineering', desc: 'Applied ML, explainable AI, anomaly detection, NLP pipelines, and edge/TinyML — designed for trustworthy, production-grade deployment.' },
  { tag: 'SEC', icon: Shield, title: 'Cybersecurity & Resilient Digital-System Design', desc: 'Threat modeling, formal verification, and resilience engineering that keep governance and software systems secure under adversarial and crisis conditions.' },
  { tag: 'SW', icon: Cloud, title: 'Software Engineering, Cloud & Distributed Platforms', desc: 'Full-stack software engineering, cloud-native architecture, and distributed platforms — taking systems from prototype to reliable production.' },
  { tag: 'ID', icon: Fingerprint, title: 'Decentralized Identity & Digital-Trust Solutions', desc: 'Self-sovereign identity, DIDs and verifiable credentials, and configurable challenge-response authentication for real-world-asset and inter-organizational trust.' },
  { tag: 'AGT', icon: Bot, title: 'AI Agent Engineering & Autonomous Business Systems', desc: 'Multi-agent systems, agent orchestration, and autonomous business workflows with governance and accountability designed in from the start.' },
  { tag: 'RSCH', icon: FlaskConical, title: 'Research & Innovation Project Development', desc: 'Consortium formation, proposal development, and design-science research that turn ideas into funded, publishable, and deployable outcomes.' },
  { tag: 'DD', icon: SearchCheck, title: 'Blockchain Security, Verification & Technical Due Diligence', desc: 'Independent smart-contract review, formal verification, and technical due diligence for ventures, investors, and integrators.' },
  { tag: 'LAB', icon: Cpu, title: 'Custom Research & Emerging-Technology Labs', desc: 'Dedicated applied-research engagements that explore, prototype, and validate emerging technologies against your specific problem.' },
];

const TECH = [
  { title: 'Visual Editor for DAO design (DAO-ML)', icon: Palette, desc: 'Model DAO architectures with DAO-ML and automatically generate the underlying smart contracts.' },
  { title: 'Token Economy Design Language (ET-DM)', icon: Shapes, desc: 'Formally specify and verify tokenomics and trust parameters with our Extended Trusted DApp Modeling language.' },
  { title: 'Test Generation Framework for DAOs', icon: TestTube, desc: 'Automatically generate comprehensive test suites that validate a DAO’s organizational structures and governance rules.' },
];

const APPLICATIONS = [
  { k: 'Knowledge Graphs & NLP', v: 'Turning raw text into governed, structured economic data.' },
  { k: 'Decentralized Healthcare', v: 'Privacy-preserving health-data integration.' },
  { k: 'Destination Management', v: 'Decentralized governance for the tourism sector.' },
  { k: 'Ethical & Trustworthy AI', v: 'Auditability, governance, and privacy for AI systems.' },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#04060d]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="nd-grid nd-grid-fade absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 pt-36 pb-14 sm:px-8 sm:pt-40 sm:pb-16">
          <Eyebrow>Capabilities</Eyebrow>
          <h1 className="font-display mt-6 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-[#E8ECFB] sm:text-5xl lg:text-6xl">
            A full-spectrum research-and-engineering portfolio
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#8A93B8]">
            From blockchain, AI, and cybersecurity to software, cloud, and applied research. Every
            engagement is backed by named expertise, published methods, and delivered projects.
          </p>
        </div>
      </section>

      {/* 12-service grid */}
      <section className="border-t border-[#18C5FF]/10">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <Eyebrow muted>Service portfolio · 12 offerings</Eyebrow>
          <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-[#18C5FF]/15 bg-[#18C5FF]/10 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <div key={i} className="group bg-[#04060d] p-7 transition-colors hover:bg-[#0a0f1c]">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#18C5FF]/25 bg-[#18C5FF]/10">
                    <s.icon className="h-5 w-5 text-[#18C5FF]" />
                  </div>
                  <span className="font-mono2 text-xs tracking-[0.15em] text-[#5b6488]">{s.tag}</span>
                </div>
                <h3 className="font-display mt-5 text-base font-semibold leading-snug text-[#E8ECFB]">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#8A93B8]">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <button className="hidden" aria-hidden="true" />
            <Link to={createPageUrl('Contact')} className="group inline-flex items-center gap-2 rounded-md bg-[#18C5FF] px-6 py-3 text-sm font-semibold text-[#04060d] transition-colors hover:bg-[#5bd6ff]">
              Discuss a Project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Proprietary technologies */}
      <section className="border-t border-[#18C5FF]/10 bg-[#0a0f1c]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Eyebrow>Proprietary technologies</Eyebrow>
          <h2 className="font-display mt-5 max-w-3xl text-3xl font-bold tracking-tight text-[#E8ECFB] sm:text-4xl">
            Tooling that makes model-driven engineering faster
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {TECH.map((t) => (
              <div key={t.title} className="nd-module rounded-xl p-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#18C5FF]/25 bg-[#18C5FF]/10">
                  <t.icon className="h-5 w-5 text-[#18C5FF]" />
                </div>
                <h3 className="font-display mt-5 text-base font-semibold text-[#E8ECFB]">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#8A93B8]">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & industry applications */}
      <section className="border-t border-[#18C5FF]/10">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>Research &amp; industry applications</Eyebrow>
              <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-[#E8ECFB] sm:text-4xl">
                Methods proven in the field
              </h2>
              <p className="mt-5 leading-relaxed text-[#8A93B8]">
                Our research-backed, model-driven approach introduces DAO-ML and ET-DM to specify
                governance, tokenomics, and trust architectures, enabling automatic smart-contract
                generation — reducing development time and improving reliability. We apply these and
                related methods across active industry and research projects.
              </p>
            </div>
            <div className="divide-y divide-[#18C5FF]/10 border-t border-[#18C5FF]/10 lg:border-t-0">
              {APPLICATIONS.map((a) => (
                <div key={a.k} className="py-5">
                  <div className="font-display text-base font-semibold text-[#E8ECFB]">{a.k}</div>
                  <div className="mt-1 text-sm text-[#8A93B8]">{a.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
