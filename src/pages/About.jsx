import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowUpRight } from 'lucide-react';

const UNITS = [
  {
    name: 'Model-Driven Engineering for DAOs & Decentralized Systems',
    desc: 'Applying Model-Driven Engineering to design, validate, formally verify, and implement complex blockchain-enabled systems — robust methodologies that ensure the reliability and correctness of decentralized autonomous organizations.',
    people: [
      { name: 'Alex Norta, PhD', role: 'Owner & CEO', img: '/media/bf3cb3524_profile_pic_Alex.png', bio: 'Former Associate Professor at TalTech Estonia, blockchain entrepreneur since 2015. PhD thesis supervisor. Chair of the IEEE Blockchain Finland / Estonia Group.' },
      { name: 'Sowelu Avanzo, PhD', role: 'Owner & CTO', img: '/media/53114f37d_profile-pic-Sowelu.png', bio: 'Research fellow in Computer Science at the University of Torino, MSc in Finance. PhD on Model-Driven Development for DAOs. Developed the first modeling languages for DAO structures and token economies. Expert in network analysis of blockchain systems.' },
      { name: 'Marco Ottina, MSc', role: 'Owner & DAO Development Consultant', img: '/media/6b7777576_profile-pic-Marco.png', bio: 'Full-stack developer and Software Engineer with a wide background in Artificial Intelligence — competencies in Distributed and Multi-Agent Systems, interested in economic-systems formalization.' },
    ],
  },
  {
    name: 'Decentralized Finance & Machine Learning',
    desc: 'Predictive analytics for tokenomics, algorithmic trading strategy development, risk management and performance-optimization frameworks, decentralized multi-agent systems, and economic-sustainability analysis for the DeFi ecosystem.',
    people: [
      { name: 'Muhammad Yasir Shabir, PhD', role: 'Data Science & AI Specialist', img: '/media/9ee2baf93_ProfilePicYasir.jpeg', bio: 'PhD in Computer Science from the University of Turin; specialist in Data Science, TinyML, and Edge AI with 10+ years across academia, research, and industry. Focuses on real-time AI optimization for IoT and embedded devices.' },
      { name: 'Muhammad Rashid, PhD', role: 'Explainable AI & Anomaly Detection Expert', img: '/media/24c906a8a_ProfilePicRashid.jpeg', bio: 'PhD researcher at the University of Turin specializing in Explainable AI, anomaly detection, and precise object localization. Builds explainable anomaly-detection pipelines for transactions, graphs, and images.' },
      { name: 'Luca Pennella, PhD Candidate', role: 'DeFi & Blockchain Analytics Researcher', img: '/media/2a3eb62a0_ProfilePicLucaPennella.jpeg', bio: 'PhD candidate in Applied Data Science and AI at the University of Trieste and Guest Scholar at IMT Lucca. Researches Machine Learning in DeFi, blockchain, and survey data, with a focus on explainable AI.' },
    ],
  },
];

const PARTNERS = [
  { name: 'Tallinn University', logo: '/media/partners/tallinn-university.png' },
  { name: 'University of Turin', logo: '/media/partners/university-turin.svg' },
  { name: 'Travelware S.R.L.', logo: '/media/partners/travelware.png' },
  { name: 'JSS University, Noida', logo: '/media/partners/jss-university.png' },
  { name: 'IEEE Blockchain (Estonia / Finland)' },
];

export default function AboutPage() {
  return (
    <div className="bg-[#ECEAE2]">
      {/* Hero */}
      <section className="pt-28 pb-4 sm:pt-36">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF3B14]">About</div>
          <h1 className="font-brk mt-6 max-w-4xl text-5xl font-bold leading-[0.92] tracking-[-0.02em] text-[#121216] sm:text-7xl lg:text-8xl">
            A research-driven engineering company.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[#413F38] sm:text-xl">
            Norta DeSyCo specializes in trustworthy digital systems. We combine scientific method,
            advanced software architecture, and practical implementation across blockchain, artificial
            intelligence, cybersecurity, decentralized identity, autonomous agents, and distributed systems.
          </p>
        </div>
      </section>

      {/* Mission (dark) */}
      <section className="mt-12 bg-[#0B0B0D] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF3B14]">Our mission</div>
          <p className="font-brk mt-6 max-w-5xl text-3xl font-semibold leading-[1.04] tracking-tight sm:text-5xl">
            To accelerate trustworthy digital transformation — turning advanced research into secure,
            verifiable, and production-ready systems that solve concrete organizational and societal problems.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF3B14]">The team</div>
          <h2 className="font-brk mt-5 max-w-3xl text-4xl font-bold leading-[0.98] tracking-tight text-[#121216] sm:text-6xl">Meet the team.</h2>
          <p className="mt-5 max-w-3xl text-[#413F38]">
            A core team of owners and permanent engineers, extended by a network of research fellows and
            associated specialists across AI, data science, and blockchain — so we scale delivery without
            diluting expertise.
          </p>
          <div className="mt-16 space-y-20">
            {UNITS.map((u) => (
              <div key={u.name}>
                <h3 className="font-brk text-2xl font-semibold text-[#121216]">{u.name}</h3>
                <p className="mt-3 max-w-3xl text-[#5A574E]">{u.desc}</p>
                <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                  {u.people.map((p) => (
                    <div key={p.name}>
                      <div className="aspect-square w-full overflow-hidden rounded-2xl bg-[#E3E0D6]">
                        <img src={p.img} alt={`Profile of ${p.name}`} loading="lazy" className="h-full w-full object-cover object-top" />
                      </div>
                      <h4 className="font-brk mt-5 text-xl font-semibold text-[#121216]">{p.name}</h4>
                      <div className="mt-1 text-sm font-semibold uppercase tracking-wide text-[#FF3B14]">{p.role}</div>
                      <p className="mt-3 text-sm leading-relaxed text-[#5A574E]">{p.bio}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="pb-24">
        <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF3B14]">Partners &amp; collaborators</div>
          <p className="mt-5 max-w-2xl text-[#413F38]">
            We deliver alongside universities, public institutions, and industry — the partners behind our
            funded research and applied projects.
          </p>
          <ul className="mt-10 flex flex-wrap items-stretch gap-4 sm:gap-5">
            {PARTNERS.map((p) => (
              <li key={p.name} className="v3-lift flex h-24 w-44 items-center justify-center rounded-2xl bg-white px-6 shadow-sm">
                {p.logo
                  ? <img src={p.logo} alt={`${p.name} logo`} loading="lazy" className="max-h-14 max-w-full object-contain" />
                  : <span className="text-center text-sm font-semibold text-[#121216]">{p.name}</span>}
              </li>
            ))}
          </ul>
          <div className="mt-14">
            <Link to={createPageUrl('Contact')} className="group inline-flex items-center gap-2 rounded-full bg-[#FF3B14] px-7 py-3.5 text-base font-semibold text-white transition-transform hover:scale-[1.03]">
              Work with us <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
