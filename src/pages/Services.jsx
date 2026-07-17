import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import {
    Boxes, Network, Code, TrendingUp, Brain, Shield, Cloud, Fingerprint,
    Bot, FlaskConical, SearchCheck, Cpu, Palette, Shapes, TestTube, CheckCircle
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

// Twelve-service portfolio. DAO / DeFi remain distinctive specializations
// inside a broader research-and-engineering offering.
const services = [
    {
        title: 'Blockchain Strategy & Decentralized-System Architecture',
        icon: Boxes,
        description: 'Feasibility, architecture, and technology selection for blockchain and decentralized systems — from first principles to a build-ready design.'
    },
    {
        title: 'DAO Engineering, Governance & Token-Economy Design',
        icon: Network,
        description: 'Model-driven design and validation of DAO governance and tokenomics using our DAO-ML and ET-DM languages, with technical groundwork for regulatory alignment delivered alongside qualified legal partners.'
    },
    {
        title: 'Model-Driven Smart-Contract & Blockchain Development',
        icon: Code,
        description: 'Visual specification of on-chain logic translated to gas-efficient, tested Solidity through automated code generation — validated in peer-reviewed work and live client platforms.'
    },
    {
        title: 'DeFi, Digital Assets & Algorithmic Market Systems',
        icon: TrendingUp,
        description: 'Protocol design, risk modeling, on-chain analytics, and algorithmic trading systems for decentralized finance and digital-asset markets.'
    },
    {
        title: 'Artificial Intelligence & Machine-Learning Engineering',
        icon: Brain,
        description: 'Applied ML, explainable AI, anomaly detection, NLP pipelines, and edge/TinyML — designed for trustworthy, production-grade deployment.'
    },
    {
        title: 'Cybersecurity & Resilient Digital-System Design',
        icon: Shield,
        description: 'Threat modeling, formal verification, and resilience engineering that keep governance and software systems secure under adversarial and crisis conditions.'
    },
    {
        title: 'Software Engineering, Cloud & Distributed Platforms',
        icon: Cloud,
        description: 'Full-stack software engineering, cloud-native architecture, and distributed platforms — taking systems from prototype to reliable production.'
    },
    {
        title: 'Decentralized Identity & Digital-Trust Solutions',
        icon: Fingerprint,
        description: 'Self-sovereign identity, DIDs and verifiable credentials, and configurable challenge-response authentication for real-world-asset and inter-organizational trust.'
    },
    {
        title: 'AI Agent Engineering & Autonomous Business Systems',
        icon: Bot,
        description: 'Multi-agent systems, agent orchestration, and autonomous business workflows with governance and accountability designed in from the start.'
    },
    {
        title: 'Research & Innovation Project Development',
        icon: FlaskConical,
        description: 'Consortium formation, proposal development, and design-science research that turn ideas into funded, publishable, and deployable outcomes.'
    },
    {
        title: 'Blockchain Security, Verification & Technical Due Diligence',
        icon: SearchCheck,
        description: 'Independent smart-contract review, formal verification, and technical due diligence for ventures, investors, and integrators.'
    },
    {
        title: 'Custom Research & Emerging-Technology Labs',
        icon: Cpu,
        description: 'Dedicated applied-research engagements that explore, prototype, and validate emerging technologies against your specific problem.'
    },
];

const techServices = [
    {
        title: 'Visual Editor for DAO design and code generation (DAO-ML)',
        icon: Palette,
        description: 'Leverage our visual editor to model DAO architectures with DAO-ML and automatically generate the underlying smart contracts.'
    },
    {
        title: 'Token Economy Design Language (ET-DM)',
        icon: Shapes,
        description: 'Utilize our Extended Trusted DApp Modeling language to formally specify and verify tokenomics and trust parameters.'
    },
    {
        title: 'Test Generation Framework for DAOs',
        icon: TestTube,
        description: 'An automated framework for generating comprehensive test suites to validate the organizational structures and governance rules of your DAO.'
    },
];

function MethodologySection() {
    return (
         <div className="py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative p-8 sm:p-12 bg-gradient-to-br from-[#0a1628] to-[#0f1a2e] text-white rounded-2xl shadow-xl border border-[#18C5FF]/20">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-[#F5F7FF]">Research and Industry Applications</h2>
                    <p className="mt-4 text-lg text-[#C3C8E5] max-w-3xl">
                        Our PhD-backed, model-driven approach for designing and implementing DAOs introduces DAO-ML and ET-DM to specify governance, tokenomics, and trust architectures, enabling automatic smart contract generation. This methodology significantly reduces development time and improves reliability.
                    </p>
                    <p className="mt-6 text-lg text-[#C3C8E5] max-w-3xl">
                        We are actively applying these and related methods across industry and research, with ongoing projects in key areas such as:
                    </p>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-[#C3C8E5] max-w-4xl">
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-[#18C5FF] mr-3 mt-1 flex-shrink-0" /><span><strong>Knowledge Graphs &amp; NLP:</strong> Turning raw text into governed, structured economic data.</span></li>
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-[#18C5FF] mr-3 mt-1 flex-shrink-0" /><span><strong>Decentralized Healthcare:</strong> Privacy-preserving health-data integration.</span></li>
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-[#18C5FF] mr-3 mt-1 flex-shrink-0" /><span><strong>Decentralized Destination Management:</strong> Innovating in the tourism sector.</span></li>
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-[#18C5FF] mr-3 mt-1 flex-shrink-0" /><span><strong>Ethical &amp; Trustworthy AI:</strong> Auditability, governance, and privacy for AI systems.</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default function ServicesPage() {
    return (
        <div className="bg-gradient-to-b from-[#050713] via-[#0a0f1e] to-[#0f1629]">
            <div className="pt-24 sm:pt-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                     <h1 className="text-4xl font-extrabold tracking-tight text-[#F5F7FF] sm:text-5xl md:text-6xl">
                        Our Capabilities
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-xl text-[#C3C8E5]">
                        A full-spectrum research-and-engineering portfolio — from blockchain, AI, and cybersecurity to software, cloud, and applied research. Every engagement is backed by named expertise, published methods, and delivered projects.
                    </p>
                </div>
            </div>

            <div className="py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-[#F5F7FF] text-center mb-12">Service Portfolio</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service) => (
                            <Card key={service.title} className="flex flex-col h-full shadow-lg hover:shadow-xl hover:border-[#18C5FF]/40 transition-all border border-[#18C5FF]/20 bg-gradient-to-br from-[#0a1628] to-[#0f1a2e]">
                                <CardHeader className="pb-3">
                                    <div className="w-12 h-12 rounded-lg bg-[#18C5FF]/10 flex items-center justify-center mb-4">
                                        <service.icon className="w-6 h-6 text-[#18C5FF]" />
                                    </div>
                                    <CardTitle className="text-lg font-bold text-[#F5F7FF] leading-snug">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-sm text-[#B7BCDB] leading-relaxed">{service.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <Button asChild size="lg" className="bg-[#2563FF] hover:bg-[#1d4ed8] text-white rounded-md px-8 py-6 text-base font-semibold">
                            <Link to={createPageUrl('Contact')}>Discuss a Project</Link>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-b from-[#0f1629] to-[#131b35] py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-[#F5F7FF] text-center mb-4">Proprietary Technologies</h2>
                    <p className="text-lg text-[#C3C8E5] text-center max-w-3xl mx-auto mb-12">
                        Tooling we have built to make model-driven DAO and DApp engineering faster and more reliable.
                    </p>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {techServices.map((service) => (
                             <Card key={service.title} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-[#0a1628] to-[#0f1a2e] border border-[#18C5FF]/20">
                                <CardHeader>
                                    <div className="flex justify-between items-center">
                                        <CardTitle className="text-base font-bold text-[#F5F7FF]">{service.title}</CardTitle>
                                         <div className="p-2 bg-[#18C5FF]/10 rounded-lg flex-shrink-0 ml-4">
                                            <service.icon className="w-6 h-6 text-[#18C5FF]"/>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-sm text-[#C3C8E5]">{service.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            <MethodologySection />
        </div>
    );
}
