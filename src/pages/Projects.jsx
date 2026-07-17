import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Network, MapPin, TrendingUp, ShieldCheck, ExternalLink, ArrowDown, ArrowUpRight, FileText } from 'lucide-react';

function Eyebrow({ children, muted }) {
  return <div className={`nd-label nd-tick ${muted ? 'nd-label--muted' : ''}`}>{children}</div>;
}

const projects = [
  {
    title: 'Estonian Economic Development Knowledge Graph',
    partner: 'Tallinn University (BFM) · Funded by the Estonian Ministry of Economic Affairs and Communications (MKM)',
    status: 'Ongoing · 2025–2027',
    icon: Network,
    description:
      "Led by the Baltic Film, Media and Arts School (BFM) of Tallinn University, this project builds a linked dataset that unifies Estonian Public Broadcasting (ERR) content, the National Library of Estonia's digital archives, and economic data from Statistics Estonia and Eurostat. Machine learning then derives an economic knowledge graph offering a systematic, longitudinal view of how Estonia's economic and technological development is portrayed in the media and shapes the national innovation system.",
    contribution:
      'We prototyped the MKM DAO — a decentralized autonomous organization that enforces fine-grained access control over the data recorded in the Decentralized Knowledge Graph — and designed and built the NLP pipeline that transforms raw textual articles on the Estonian economy into structured knowledge-graph entries governed by that DAO.',
    tags: ['Knowledge Graphs', 'NLP / Machine Learning', 'Decentralized Access Control', 'Public-Sector R&I'],
    links: [{ label: 'Tallinn University', href: 'https://www.tlu.ee/en', external: true }],
  },
  {
    title: 'Travelhive — Decentralized Destination Management',
    partner: 'Travelware S.R.L.',
    status: 'Consulting · Active',
    icon: MapPin,
    description:
      'Travelhive is a DAO-deployment platform that establishes Decentralized Destination Management Organizations (DDMOs), empowering the residents, businesses, and collectives of a region to collaboratively govern local tourism through on-chain deliberation. Its multi-DAO governance structure — spanning distinct roles, committees, and voting protocols — was specified with the DAO-ML visual modeling language and realized as gas-efficient Solidity smart contracts.',
    contribution:
      "As software-development consultants for Travelware S.R.L., we supported the implementation and validation of the smart contracts behind the Travelhive platform, whose DAOs serve as the in-vivo case study of our peer-reviewed GoodIT '25 publication on scalable, model-driven DAO code generation.",
    tags: ['DAO Systems', 'Model-Driven Development', 'Smart Contracts'],
    links: [
      { label: 'travelware.tech', href: 'https://www.travelware.tech/', external: true },
      { label: 'Related publication', href: '#pub-dao-ml', external: false },
    ],
  },
  {
    title: 'AI-Optimized DeFi Trading Strategies',
    partner: 'JSS University, Noida (India)',
    status: 'Research partnership · 1 year',
    icon: TrendingUp,
    description:
      'Through a one-year research partnership with JSS University in Noida, India, we collaborate with two post-doctoral researchers on DeFi-focused algorithmic trading strategies. The joint team is supervised by Professor Mayank Singh and comprises Dr. Neha Yadav and Dr. Arun Kumar.',
    contribution:
      'Within this partnership we developed an AI-powered optimizer for Renko-chart-based trading strategies, tuning strategy parameters to prevailing market conditions to improve risk-adjusted performance.',
    tags: ['AI / Machine Learning', 'DeFi', 'Algorithmic Trading'],
    links: [],
  },
  {
    title: 'Liquidity Hedge — Hedging Concentrated Liquidity Positions',
    partner: 'Norta DeSyCo research',
    status: 'Research · Proof-of-concept',
    icon: ShieldCheck,
    description:
      'Liquidity Hedge is a smart-contract protocol that lets liquidity providers on concentrated-liquidity market makers transfer the depreciation risk of their positions to risk-taking counterparties in exchange for a fairly priced premium, without relying on external options or perpetual markets. Following a Design Science Research methodology, we specified the protocol’s requirements and pricing model and validated a proof-of-concept on a year of live SOL/USDC market data, demonstrating measurable risk reduction and economic sustainability.',
    contribution:
      'We designed the protocol, derived its risk-neutral pricing mechanism and value-neutrality guarantees, and implemented and evaluated the proof-of-concept, which was presented at the DLT2026 workshop in Pula, Italy.',
    tags: ['DeFi', 'Protocol Design', 'Design-Science Research'],
    links: [{ label: 'Related publication', href: '#pub-liquidity-hedge', external: false }],
  },
];

const publications = [
  {
    id: 'pub-dao-ml',
    title: 'DAO-ML To Solidity: A Scalable Code Generation Approach for Decentralized Autonomous Organization Development',
    authors: 'Sowelu Avanzo, Marco Ottina, Daniele Pautasso, Irene Domenicale, Alex Norta, Claudio Schifanella',
    venue: "International Conference on Information Technology for Social Good (GoodIT '25), September 3–5, 2025, Antwerp, Belgium. ACM.",
    doi: { label: '10.1145/3748699.3749812', href: 'https://doi.org/10.1145/3748699.3749812' },
    tag: 'Published',
  },
  {
    id: 'pub-liquidity-hedge',
    title: 'Designing a Decentralized Protocol for Hedging Concentrated Liquidity Positions',
    authors: 'Sowelu Avanzo, Luca Pennella, Alex Norta, Neha Yadav, Arun Kumar, Mayank Singh, Aron Sunday, Giulio Peraldo, Claudio Schifanella',
    venue: 'Proceedings of DLT2026. Presented at the DLT2026 workshop, Pula, Italy.',
    tag: 'Forthcoming',
  },
];

function ProjectLink({ link }) {
  const Icon = link.external ? ExternalLink : ArrowDown;
  return (
    <a
      href={link.href}
      {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#18C5FF] transition-colors hover:text-[#5bd6ff]"
    >
      {link.label}
      <Icon className="h-3.5 w-3.5" />
    </a>
  );
}

export default function ProjectsPage() {
  return (
    <div className="bg-[#04060d]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="nd-grid nd-grid-fade absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 pt-36 pb-14 sm:px-8 sm:pt-40 sm:pb-16">
          <Eyebrow>Portfolio</Eyebrow>
          <h1 className="font-display mt-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-[#E8ECFB] sm:text-5xl lg:text-6xl">
            Projects, systems &amp; research results
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#8A93B8]">
            Applied-research and engineering projects we have delivered and are actively working on —
            spanning AI and NLP, knowledge graphs, DAO governance, decentralized identity, and DeFi —
            together with the peer-reviewed publications they produce.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="border-t border-[#18C5FF]/10">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <Eyebrow muted>Selected work</Eyebrow>
          <div className="mt-8 space-y-6">
            {projects.map((p) => (
              <article key={p.title} className="nd-module scroll-mt-24 rounded-xl p-7 sm:p-9">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-8">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#18C5FF]/25 bg-[#18C5FF]/10">
                        <p.icon className="h-5 w-5 text-[#18C5FF]" />
                      </div>
                      <span className="font-mono2 text-[11px] uppercase tracking-[0.14em] text-[#18C5FF]">{p.status}</span>
                    </div>
                    <h2 className="font-display mt-5 text-xl font-semibold leading-snug text-[#E8ECFB] sm:text-2xl">{p.title}</h2>
                    <div className="mt-2 text-sm text-[#8A93B8]">{p.partner}</div>
                    <p className="mt-5 leading-relaxed text-[#8A93B8]">{p.description}</p>
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span key={t} className="font-mono2 rounded border border-[#18C5FF]/15 px-2 py-0.5 text-[11px] text-[#8A93B8]">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-4 lg:border-l lg:border-[#18C5FF]/10 lg:pl-8">
                    <div className="nd-label nd-label--muted">Our contribution</div>
                    <p className="mt-4 text-sm leading-relaxed text-[#8A93B8]">{p.contribution}</p>
                    {p.links.length > 0 && (
                      <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#18C5FF]/10 pt-5">
                        {p.links.map((l) => <ProjectLink key={l.href} link={l} />)}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="border-t border-[#18C5FF]/10 bg-[#0a0f1c]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Eyebrow>Publications</Eyebrow>
          <div className="mt-10 space-y-5">
            {publications.map((pub) => (
              <div key={pub.id} id={pub.id} className="nd-module scroll-mt-24 rounded-xl p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border border-[#18C5FF]/25 bg-[#18C5FF]/10">
                    <FileText className="h-4.5 w-4.5 text-[#18C5FF]" style={{ width: 18, height: 18 }} />
                  </div>
                  <div>
                    <span className="font-mono2 text-[11px] uppercase tracking-[0.14em] text-[#18C5FF]">{pub.tag}</span>
                    <h3 className="font-display mt-2 text-lg font-semibold leading-snug text-[#E8ECFB]">{pub.title}</h3>
                    <p className="mt-2 text-sm text-[#8A93B8]">{pub.authors}</p>
                    <p className="font-mono2 mt-1 text-xs text-[#5b6488]">{pub.venue}</p>
                    {pub.doi && (
                      <a href={pub.doi.href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[#18C5FF] transition-colors hover:text-[#5bd6ff]">
                        DOI: {pub.doi.label}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#18C5FF]/10">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <h2 className="font-display text-3xl font-bold tracking-tight text-[#E8ECFB] sm:text-4xl">Interested in collaborating?</h2>
          <p className="mt-4 max-w-2xl text-[#8A93B8]">
            We partner with universities, public institutions, and companies on AI and data engineering,
            blockchain and digital trust, cybersecurity, and applied research.
          </p>
          <div className="mt-8">
            <Link to={createPageUrl('Contact')} className="group inline-flex items-center gap-2 rounded-md bg-[#18C5FF] px-6 py-3 text-sm font-semibold text-[#04060d] transition-colors hover:bg-[#5bd6ff]">
              Get in touch
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
