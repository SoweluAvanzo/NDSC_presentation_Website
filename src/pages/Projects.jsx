import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ExternalLink, ArrowDown, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Estonian Economic Development Knowledge Graph',
    partner: 'Tallinn University (BFM) · Funded by the Estonian Ministry of Economic Affairs and Communications (MKM)',
    status: 'Ongoing · 2025–2027',
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

function PLink({ link }) {
  const Icon = link.external ? ExternalLink : ArrowDown;
  return (
    <a href={link.href} {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
       className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF3B14] hover:underline">
      {link.label}<Icon className="h-3.5 w-3.5" />
    </a>
  );
}

export default function ProjectsPage() {
  return (
    <div className="bg-[#ECEAE2]">
      {/* Hero */}
      <section className="pt-28 pb-4 sm:pt-36">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF3B14]">Portfolio</div>
          <h1 className="font-brk mt-6 max-w-5xl text-5xl font-bold leading-[0.92] tracking-[-0.02em] text-[#121216] sm:text-7xl lg:text-8xl">
            Projects, systems &amp; research results.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[#413F38] sm:text-xl">
            Applied-research and engineering projects we have delivered and are actively working on —
            spanning AI and NLP, knowledge graphs, DAO governance, decentralized identity, and DeFi —
            together with the peer-reviewed publications they produce.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8 border-t border-[#121216]/15">
          {projects.map((p) => (
            <article key={p.title} className="grid grid-cols-1 gap-8 border-b border-[#121216]/15 py-12 scroll-mt-24 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="text-sm font-semibold uppercase tracking-wide text-[#FF3B14]">{p.status}</div>
                <h2 className="font-brk mt-4 text-3xl font-semibold leading-[1.02] tracking-tight text-[#121216] sm:text-4xl">{p.title}</h2>
                <div className="mt-3 text-sm font-medium text-[#5A574E]">{p.partner}</div>
                <p className="mt-6 leading-relaxed text-[#413F38]">{p.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-[#121216]/20 px-3 py-1 text-xs font-medium text-[#5A574E]">{t}</span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-4 lg:col-start-9 lg:border-l lg:border-[#121216]/15 lg:pl-8">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5A574E]">Our contribution</div>
                <p className="mt-4 text-sm leading-relaxed text-[#413F38]">{p.contribution}</p>
                {p.links.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#121216]/15 pt-5">
                    {p.links.map((l) => <PLink key={l.href} link={l} />)}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Publications (dark) */}
      <section className="bg-[#0B0B0D] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF3B14]">Publications</div>
          <div className="mt-10 border-t border-white/10">
            {publications.map((pub) => (
              <div key={pub.id} id={pub.id} className="border-b border-white/10 py-9 scroll-mt-24">
                <div className="text-sm font-semibold uppercase tracking-wide text-[#FF3B14]">{pub.tag}</div>
                <h3 className="font-brk mt-3 max-w-4xl text-2xl font-semibold leading-snug">{pub.title}</h3>
                <p className="mt-3 text-[#ABA79C]">{pub.authors}</p>
                <p className="mt-1 text-sm text-[#77746B]">{pub.venue}</p>
                {pub.doi && (
                  <a href={pub.doi.href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF3B14] hover:underline">
                    DOI: {pub.doi.label}<ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link to={createPageUrl('Contact')} className="group inline-flex items-center gap-2 rounded-full bg-[#FF3B14] px-7 py-3.5 text-base font-semibold text-white transition-transform hover:scale-[1.03]">
              Get in touch <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
