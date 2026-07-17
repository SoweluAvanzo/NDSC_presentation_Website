import React from 'react';

const modelDrivenEngineeringTeam = [
{
  name: 'Alex Norta, PhD',
  role: 'Owner & CEO',
  imageUrl: '/media/bf3cb3524_profile_pic_Alex.png',
  bio: 'Former Associate Professor at TalTech Estonia, blockchain entrepreneur since 2015. PhD thesis supervisor. Chair of the IEEE Blockchain Finland / Estonia Group.'
},
{
  name: 'Sowelu Avanzo, PhD',
  role: 'Owner & CTO',
  imageUrl: '/media/53114f37d_profile-pic-Sowelu.png',
  bio: 'Research fellow in Computer Science at the University of Torino, Italy, MSc in Finance. PhD thesis on Model Driven Development for DAOs. Developed the first modeling languages for designing organizational structures and token economies of DAOs. Expert in network analysis of blockchain-based systems.'
},
{
  name: 'Marco Ottina, MSc',
  role: 'Owner & DAO Development Consultant',
  imageUrl: '/media/6b7777576_profile-pic-Marco.png',
  bio: 'Full-stack developer and Software Engineer, with a wide background in Artificial Intelligence (competencies in Distributed and Multi-Agent Systems, interested in Economic Systems formalization).'
}];


const defiMLTeam = [
{
  name: 'Muhammad Yasir Shabir, PhD',
  role: 'Data Science & AI Specialist',
  imageUrl: '/media/9ee2baf93_ProfilePicYasir.jpeg',
  bio: 'PhD in Computer Science from the University of Turin and a specialist in Data Science, TinyML, and Edge AI, with over 10 years of experience across academia, research, and industry. His work focuses on real-time AI optimization for IoT and embedded devices, designing model-compression and compiler-assisted techniques to deploy AI efficiently on constrained hardware.'
},
{
  name: 'Muhammad Rashid, PhD',
  role: 'Explainable AI & Anomaly Detection Expert',
  imageUrl: '/media/24c906a8a_ProfilePicRashid.jpeg',
  bio: 'PhD researcher at the University of Turin specializing in Explainable AI (XAI), anomaly detection, and precise object localization. He builds explainable anomaly-detection pipelines for transactions, graphs, and images, combining cutting-edge research with practical deployment to create trustworthy AI systems for real-world applications.'
},
{
  name: 'Luca Pennella, PhD Candidate',
  role: 'DeFi & Blockchain Analytics Researcher',
  imageUrl: '/media/2a3eb62a0_ProfilePicLucaPennella.jpeg',
  bio: 'PhD candidate in Applied Data Science and AI at the University of Trieste and a Guest Scholar at IMT of Lucca. His research focuses on Machine Learning applications in DeFi, Blockchain, and survey data, with a particular focus on explainable AI. Brings over three years of experience in data analysis from various consulting firms in Italy.'
}];


export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-[#050713] via-[#0a0f1e] to-[#0f1629]">
            <div className="pt-24 sm:pt-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight text-[#F5F7FF] sm:text-5xl md:text-6xl">About Norta DeSyCo</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-xl text-[#C3C8E5]">
                            Norta DeSyCo is a research-driven software-engineering company specializing in trustworthy digital systems. We combine scientific method, advanced software architecture, and practical implementation across blockchain, artificial intelligence, cybersecurity, decentralized identity, autonomous agents, and distributed systems.
                        </p>
                    </div>
                </div>
            </div>

            <div className="py-20 sm:py-28">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="relative p-8 sm:p-12 bg-gradient-to-br from-[#0a1628] to-[#0f1a2e] rounded-3xl shadow-2xl text-center border border-[#18C5FF]/20">
                        <h2 className="text-3xl font-extrabold text-[#F5F7FF] sm:text-4xl">Our Mission</h2>
                        <blockquote className="mt-8 text-white">
                           <p className="text-xl font-medium sm:text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed text-[#C3C8E5]">To accelerate trustworthy digital transformation — turning advanced research into secure, verifiable, and production-ready systems that solve concrete organizational and societal problems.

          </p>
                        </blockquote>
                     </div>
                </div>
            </div>

            <div className="bg-gradient-to-b from-[#0f1629] to-[#131b35] py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none text-center">
                            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-[#F5F7FF]">Meet The Team</h2>
                            <p className="text-xl text-[#C3C8E5] max-w-3xl mx-auto">
                                A core team of owners and permanent engineers, extended by a network of research fellows and associated specialists across AI, data science, and blockchain — so we can scale delivery without diluting expertise.
                            </p>
                        </div>

                        {/* Model Driven Engineering Unit */}
                        <div className="space-y-8">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-[#F5F7FF]">Model Driven Engineering for DAOs and Decentralized Systems Unit</h3>
                                <p className="mt-3 text-lg text-[#C3C8E5] max-w-4xl mx-auto">
                                    Focused on applying Model-Driven Engineering to design, validate, formally verify and implement complex blockchain-enabled systems. This unit specializes in creating robust methodologies that ensure the reliability and correctness of decentralized autonomous organizations through rigorous mathematical modeling and automated verification processes.
                                </p>
                            </div>
                            <ul role="list" className="space-y-12 sm:grid sm:grid-cols-1 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
                                {modelDrivenEngineeringTeam.map((person) =>
    <li key={person.name} className="space-y-4">
                                        <div className="w-full aspect-square overflow-hidden bg-[#0a1628] rounded-xl shadow-lg ring-1 ring-[#18C5FF]/20">
                                            <img className="w-full h-full object-cover object-top" src={person.imageUrl} alt={`Profile of ${person.name}`} />
                                        </div>
                                        <div className="text-lg leading-6 font-medium space-y-1">
                                            <h3 className="text-[#F5F7FF]">{person.name}</h3>
                                            <p className="text-[#18C5FF]">{person.role}</p>
                                        </div>
                                        <div className="text-base">
                                            <p className="text-[#C3C8E5]">{person.bio}</p>
                                        </div>
                                    </li>
    )}
                            </ul>
                        </div>

                        {/* DeFi and ML Unit */}
                        <div className="space-y-8">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-[#F5F7FF]">Decentralized Finance and Machine Learning Unit</h3>
                                <p className="mt-3 text-lg text-[#C3C8E5] max-w-4xl mx-auto">
                                    Specializes in predictive analytics for tokenomics, custom algorithmic trading strategy development, risk management and performance optimization frameworks, decentralized multi-agent system development, and economic sustainability analysis of crypto projects. This unit combines advanced machine learning techniques with deep financial expertise to create intelligent, data-driven solutions for the DeFi ecosystem.
                                </p>
                            </div>
                            <ul role="list" className="space-y-12 sm:grid sm:grid-cols-1 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
                                {defiMLTeam.map((person) =>
    <li key={person.name} className="space-y-4">
                                        <div className="w-full aspect-square overflow-hidden bg-[#0a1628] rounded-xl shadow-lg ring-1 ring-[#18C5FF]/20">
                                            <img className="w-full h-full object-cover object-top" src={person.imageUrl} alt={`Profile of ${person.name}`} />
                                        </div>
                                        <div className="text-lg leading-6 font-medium space-y-1">
                                            <h3 className="text-[#F5F7FF]">{person.name}</h3>
                                            <p className="text-[#18C5FF]">{person.role}</p>
                                        </div>
                                        <div className="text-base">
                                            <p className="text-[#C3C8E5]">{person.bio}</p>
                                        </div>
                                    </li>
    )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Partners & Collaborators */}
            <div className="py-20 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-[#F5F7FF]">Partners &amp; Collaborators</h2>
                        <p className="mt-3 text-lg text-[#C3C8E5] max-w-3xl mx-auto">
                            We deliver alongside universities, public institutions, and industry — the partners behind our funded research and applied projects.
                        </p>
                    </div>
                    <ul className="flex flex-wrap items-stretch justify-center gap-4 sm:gap-5">
                        {[
                            { name: 'Tallinn University', logo: '/media/partners/tallinn-university.png' },
                            { name: 'University of Turin', logo: '/media/partners/university-turin.svg' },
                            { name: 'Travelware S.R.L.', logo: '/media/partners/travelware.png' },
                            { name: 'JSS University, Noida', logo: '/media/partners/jss-university.png' },
                            { name: 'IEEE Blockchain (Estonia / Finland)' }
                        ].map((p) => (
                            <li
                                key={p.name}
                                className="flex h-24 w-44 items-center justify-center rounded-xl bg-white px-6 py-4 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                            >
                                {p.logo ? (
                                    <img
                                        src={p.logo}
                                        alt={`${p.name} logo`}
                                        loading="lazy"
                                        className="max-h-14 max-w-full object-contain"
                                    />
                                ) : (
                                    <span className="text-center text-sm font-semibold text-[#0a1628]">{p.name}</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>);

}