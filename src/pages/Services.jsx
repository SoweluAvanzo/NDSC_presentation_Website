import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Code, Shield, CheckCircle, Brain, TrendingUp, Palette, Shapes, TestTube, ShieldAlert } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const consultingServices = [
    {
        title: 'Complete DAO Launch Consulting & MiCA Compliance',
        icon: Shield,
        description: 'End-to-end support for launching tokens and DAOs with full regulatory compliance. We guide you through every stage from initial concept to market deployment, ensuring your project meets MiCA requirements and international regulatory standards while maintaining technical excellence and economic sustainability.',
        highlights: [
            'Token economy design and launch strategy modeling',
            'MiCA regulatory compliance and legal framework alignment',
            'Comprehensive governance architecture development',
            'Post-launch monitoring and optimization services'
        ]
    },
    {
        title: 'Formal Verification and Governance Structures Crisis Response',
        icon: ShieldAlert,
        description: 'In an era of increasing governance complexity and security threats, resilient systems are essential. We provide advanced formal verification and multi-agent simulation services to ensure governance structures remain secure, operational, and effective during both routine operations and emergency scenarios. Our expertise in DAO-based governance frameworks demonstrates how decentralized systems can strengthen the resilience and security of organizational and societal governance structures against sophisticated attacks and crisis situations.',
        highlights: [
            'Multi-agent simulation of governance attacks',
            'Evaluation of existing governance process security and resilience against malevolent attacks',
            'Governance threat detection',
            'Formal modeling and verification to ensure security and resilience of governance system against complex governance attacks'
        ]
    },
    {
        title: 'Training & Workshops on DAO and DeFi Markets',
        icon: Brain,
        description: 'Comprehensive educational programs designed to empower your team with cutting-edge knowledge in DAO development and DeFi market systems. Our expert-led workshops combine theoretical foundations with hands-on practical implementation, ensuring participants gain both deep understanding and actionable skills in decentralized governance and finance.',
        highlights: [
            'DAO design and deployment workshops',
            'DeFi protocol development and integration training',
            'DeFi market analysis',
            'Custom team training programs and consultations'
        ]
    },
    {
        title: 'Governance and Token Economy Design & Verification',
        icon: CheckCircle,
        description: 'We adopt formal methods to validate blockchain-based decentralized governance models. Our systematic approach ensures that your governance mechanisms and tokenomics are mathematically sound, economically sustainable, and aligned with your organizational goals.',
        highlights: [
            'Formal governance model validation',
            'Token economy mathematical modeling',
            'Incentive mechanism design and verification',
            'Economic sustainability analysis'
        ]
    },
    {
        title: 'Crypto Market Analysis & Automated Trading Systems',
        icon: TrendingUp,
        description: 'We combine advanced market analytics with sophisticated algorithmic trading solutions. Leveraging data science, on-chain analytics, and automated trading strategies, we help clients navigate cryptocurrency markets with intelligence and precision.',
        highlights: [
            'Real-time on-chain data analysis and market forecasting',
            'Custom algorithmic trading strategy development',
            'Predictive analytics for tokenomics',
            'Risk management and performance optimization frameworks'
        ]
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
                        We are actively applying these methods in both industry and research, with ongoing projects in key areas such as:
                    </p>
                    <ul className="mt-4 space-y-2 text-[#C3C8E5] max-w-3xl">
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-[#18C5FF] mr-3 mt-1 flex-shrink-0" /><span><strong>Decentralized Science (DeSci):</strong> Creating new models for collaborative, transparent research.</span></li>
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-[#18C5FF] mr-3 mt-1 flex-shrink-0" /><span><strong>Decentralized Healthcare:</strong> Developing secure data management systems.</span></li>
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-[#18C5FF] mr-3 mt-1 flex-shrink-0" /><span><strong>Decentralized Destination Management:</strong> Innovating in the tourism sector.</span></li>
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-[#18C5FF] mr-3 mt-1 flex-shrink-0" /><span><strong>Public Administration:</strong> Facilitating participatory budgeting with DAOs.</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default function ServicesPage() {
    return (
        <div className="bg-gradient-to-b from-[#050713] via-[#0a0f1e] to-[#0f1629]">
            <div className="pt-24 sm:pt-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                     <h1 className="text-4xl font-extrabold tracking-tight text-[#F5F7FF] sm:text-5xl md:text-6xl">
                        Consulting Services
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-[#C3C8E5]">
                        From complete DAO launches to specialized training, we provide comprehensive support for advancing decentralized systems and finance.
                    </p>
                </div>
            </div>

            <div className="py-20 sm:pb-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-[#F5F7FF] text-center mb-12">Our Complete Service Portfolio</h2>
                    <div className="space-y-12">
                        {consultingServices.map((service, index) => (
                            <Card key={service.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-2 border-[#18C5FF]/30 bg-gradient-to-br from-[#0a1628] to-[#0f1a2e]">
                                <div className="grid md:grid-cols-3 gap-8">
                                    <div className="md:col-span-2 p-8">
                                        <CardHeader className="p-0 mb-6">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="p-3 rounded-lg bg-[#18C5FF]/10">
                                                    <service.icon className="w-8 h-8 text-[#18C5FF]"/>
                                                </div>
                                                <CardTitle className="text-xl font-bold text-[#F5F7FF]">
                                                    {service.title}
                                                </CardTitle>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="p-0">
                                            <p className="text-[#C3C8E5] text-lg leading-relaxed">
                                                {service.description}
                                            </p>
                                        </CardContent>
                                    </div>
                                    <div className="p-8 bg-[#0a0f1e]/50">
                                        <h4 className="font-semibold text-[#F5F7FF] mb-4">Key Capabilities:</h4>
                                        <ul className="space-y-3">
                                            {service.highlights.map((highlight, idx) => (
                                                <li key={idx} className="flex items-start text-sm">
                                                    <CheckCircle className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0 text-[#18C5FF]" />
                                                    <span className="text-[#C3C8E5]">{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-b from-[#0f1629] to-[#131b35] py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-[#F5F7FF] text-center mb-12">Technologies</h2>
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