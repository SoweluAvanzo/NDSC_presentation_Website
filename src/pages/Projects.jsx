import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Network, MapPin, TrendingUp, ShieldCheck, ExternalLink, ArrowDown, FileText } from 'lucide-react';

const projects = [
    {
        title: 'Estonian Economic Development Knowledge Graph',
        partner: "Tallinn University (BFM) · Funded by the Estonian Ministry of Economic Affairs and Communications (MKM)",
        status: 'Ongoing · 2025–2027',
        icon: Network,
        description:
            "Led by the Baltic Film, Media and Arts School (BFM) of Tallinn University, this project builds a linked dataset that unifies Estonian Public Broadcasting (ERR) content, the National Library of Estonia's digital archives, and economic data from Statistics Estonia and Eurostat. Machine learning then derives an economic knowledge graph offering a systematic, longitudinal view of how Estonia's economic and technological development is portrayed in the media and shapes the national innovation system.",
        contribution:
            "We prototyped the MKM DAO — a decentralized autonomous organization that enforces fine-grained access control over the data recorded in the Decentralized Knowledge Graph — and designed and built the NLP pipeline that transforms raw textual articles on the Estonian economy into structured knowledge-graph entries governed by that DAO.",
        links: [{ label: 'Tallinn University', href: 'https://www.tlu.ee/en', external: true }],
    },
    {
        title: 'Travelhive — Decentralized Destination Management',
        partner: 'Travelware S.R.L.',
        status: 'Consulting · Active',
        icon: MapPin,
        description:
            "Travelhive is a DAO-deployment platform that establishes Decentralized Destination Management Organizations (DDMOs), empowering the residents, businesses, and collectives of a region to collaboratively govern local tourism through on-chain deliberation. Its multi-DAO governance structure — spanning distinct roles, committees, and voting protocols — was specified with the DAO-ML visual modeling language and realized as gas-efficient Solidity smart contracts.",
        contribution:
            "As software-development consultants for Travelware S.R.L., we supported the implementation and validation of the smart contracts behind the Travelhive platform, whose DAOs serve as the in-vivo case study of our peer-reviewed GoodIT '25 publication on scalable, model-driven DAO code generation.",
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
            "Through a one-year research partnership with JSS University in Noida, India, we collaborate with two post-doctoral researchers on DeFi-focused algorithmic trading strategies. The joint team is supervised by Professor Mayank Singh and comprises Dr. Neha Yadav and Dr. Arun Kumar.",
        contribution:
            "Within this partnership we developed an AI-powered optimizer for Renko-chart-based trading strategies, tuning strategy parameters to prevailing market conditions to improve risk-adjusted performance.",
        links: [],
    },
    {
        title: 'Liquidity Hedge — Hedging Concentrated Liquidity Positions',
        partner: 'Norta DeSyCo research',
        status: 'Research · Proof-of-concept',
        icon: ShieldCheck,
        description:
            "Liquidity Hedge is a smart-contract protocol that lets liquidity providers on concentrated-liquidity market makers transfer the depreciation risk of their positions to risk-taking counterparties in exchange for a fairly priced premium, without relying on external options or perpetual markets. Following a Design Science Research methodology, we specified the protocol's requirements and pricing model and validated a proof-of-concept on a year of live SOL/USDC market data, demonstrating measurable risk reduction and economic sustainability.",
        contribution:
            "We designed the protocol, derived its risk-neutral pricing mechanism and value-neutrality guarantees, and implemented and evaluated the proof-of-concept, which was presented at the DLT2026 workshop in Pula, Italy.",
        links: [{ label: 'Related publication', href: '#pub-liquidity-hedge', external: false }],
    },
];

const publications = [
    {
        id: 'pub-dao-ml',
        title:
            'DAO-ML To Solidity: A Scalable Code Generation Approach for Decentralized Autonomous Organization Development',
        authors:
            'Sowelu Avanzo, Marco Ottina, Daniele Pautasso, Irene Domenicale, Alex Norta, Claudio Schifanella',
        venue:
            "International Conference on Information Technology for Social Good (GoodIT '25), September 3–5, 2025, Antwerp, Belgium. ACM.",
        doi: { label: '10.1145/3748699.3749812', href: 'https://doi.org/10.1145/3748699.3749812' },
        tag: 'Published',
    },
    {
        id: 'pub-liquidity-hedge',
        title: 'Designing a Decentralized Protocol for Hedging Concentrated Liquidity Positions',
        authors:
            'Sowelu Avanzo, Luca Pennella, Alex Norta, Neha Yadav, Arun Kumar, Mayank Singh, Aron Sunday, Giulio Peraldo, Claudio Schifanella',
        venue: 'Proceedings of DLT2026. Presented at the DLT2026 workshop, Pula, Italy.',
        tag: 'Forthcoming',
    },
];

function StatusBadge({ children }) {
    return (
        <span className="inline-block text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full border border-[#18C5FF]/40 text-[#18C5FF] bg-[#18C5FF]/10">
            {children}
        </span>
    );
}

function ProjectLink({ link }) {
    if (link.external) {
        return (
            <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#18C5FF] hover:text-[#60a5fa] transition-colors"
            >
                {link.label}
                <ExternalLink className="w-3.5 h-3.5" />
            </a>
        );
    }
    return (
        <a
            href={link.href}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#18C5FF] hover:text-[#60a5fa] transition-colors"
        >
            {link.label}
            <ArrowDown className="w-3.5 h-3.5" />
        </a>
    );
}

export default function ProjectsPage() {
    return (
        <div className="bg-gradient-to-b from-[#050713] via-[#0a0f1e] to-[#0f1629]">
            {/* Hero */}
            <div className="pt-24 sm:pt-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-[#F5F7FF] sm:text-5xl md:text-6xl">
                        Projects &amp; Publications
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-xl text-[#C3C8E5]">
                        A selection of the applied-research and engineering projects Norta DeSyCo has delivered
                        and is actively working on — spanning decentralized knowledge graphs, DAO governance, and
                        DeFi — together with the peer-reviewed publications they produce.
                    </p>
                </div>
            </div>

            {/* Projects */}
            <div className="py-20 sm:pb-28 sm:pt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-[#F5F7FF] text-center mb-12">Projects</h2>
                    <div className="space-y-12">
                        {projects.map((project) => (
                            <Card
                                key={project.title}
                                className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-2 border-[#18C5FF]/30 bg-gradient-to-br from-[#0a1628] to-[#0f1a2e] scroll-mt-28"
                            >
                                <div className="grid md:grid-cols-3 gap-0">
                                    <div className="md:col-span-2 p-8">
                                        <CardHeader className="p-0 mb-6">
                                            <div className="flex items-start gap-4">
                                                <div className="p-3 rounded-lg bg-[#18C5FF]/10 flex-shrink-0">
                                                    <project.icon className="w-8 h-8 text-[#18C5FF]" />
                                                </div>
                                                <div className="space-y-2">
                                                    <StatusBadge>{project.status}</StatusBadge>
                                                    <CardTitle className="text-xl font-bold text-[#F5F7FF] leading-snug">
                                                        {project.title}
                                                    </CardTitle>
                                                    <p className="text-sm text-[#18C5FF]">{project.partner}</p>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="p-0">
                                            <p className="text-[#C3C8E5] text-lg leading-relaxed">{project.description}</p>
                                        </CardContent>
                                    </div>
                                    <div className="p-8 bg-[#0a0f1e]/60 flex flex-col">
                                        <h4 className="font-semibold text-[#F5F7FF] mb-3">Our contribution</h4>
                                        <p className="text-sm text-[#C3C8E5] leading-relaxed flex-grow">
                                            {project.contribution}
                                        </p>
                                        {project.links.length > 0 && (
                                            <div className="mt-6 pt-4 border-t border-[#18C5FF]/15 flex flex-wrap gap-x-5 gap-y-2">
                                                {project.links.map((link) => (
                                                    <ProjectLink key={link.href} link={link} />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Publications */}
            <div className="bg-gradient-to-b from-[#0f1629] to-[#131b35] py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-[#F5F7FF] text-center mb-12">Publications</h2>
                    <div className="space-y-6 max-w-5xl mx-auto">
                        {publications.map((pub) => (
                            <Card
                                key={pub.id}
                                id={pub.id}
                                className="shadow-lg bg-gradient-to-br from-[#0a1628] to-[#0f1a2e] border border-[#18C5FF]/20 scroll-mt-28"
                            >
                                <CardHeader className="pb-3">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2.5 rounded-lg bg-[#18C5FF]/10 flex-shrink-0">
                                            <FileText className="w-6 h-6 text-[#18C5FF]" />
                                        </div>
                                        <div className="space-y-2">
                                            <StatusBadge>{pub.tag}</StatusBadge>
                                            <CardTitle className="text-lg font-bold text-[#F5F7FF] leading-snug">
                                                {pub.title}
                                            </CardTitle>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-0 pl-[4.75rem]">
                                    <p className="text-sm text-[#C3C8E5]">{pub.authors}</p>
                                    <p className="mt-1 text-sm italic text-[#A5AAC9]">{pub.venue}</p>
                                    {pub.doi && (
                                        <a
                                            href={pub.doi.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[#18C5FF] hover:text-[#60a5fa] transition-colors"
                                        >
                                            DOI: {pub.doi.label}
                                            <ExternalLink className="w-3.5 h-3.5" />
                                        </a>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative p-8 sm:p-12 bg-gradient-to-br from-[#0a1628] to-[#0f1a2e] rounded-3xl shadow-2xl border border-[#18C5FF]/20 text-center">
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-[#F5F7FF]">
                            Interested in collaborating?
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-[#C3C8E5]">
                            We partner with universities, public institutions, and companies on decentralized
                            governance, knowledge graphs, and DeFi. Let&apos;s discuss how we can help your project.
                        </p>
                        <div className="mt-8">
                            <Link to={createPageUrl('Contact')}>
                                <Button className="bg-[#2563FF] hover:bg-[#1d4ed8] text-white px-8 py-6 text-base">
                                    Get in touch
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
