import { createPageUrl } from '@/utils';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

function Eyebrow({ children, muted }) {
  return <div className={`nd-label nd-tick ${muted ? 'nd-label--muted' : ''}`}>{children}</div>;
}

const UNIT_ONE = {
  name: 'Model-Driven Engineering for DAOs & Decentralized Systems',
  desc: 'Applying Model-Driven Engineering to design, validate, formally verify, and implement complex blockchain-enabled systems — robust methodologies that ensure the reliability and correctness of decentralized autonomous organizations through rigorous mathematical modeling and automated verification.',
  people: [
    { name: 'Alex Norta, PhD', role: 'Owner & CEO', img: '/media/bf3cb3524_profile_pic_Alex.png', bio: 'Former Associate Professor at TalTech Estonia, blockchain entrepreneur since 2015. PhD thesis supervisor. Chair of the IEEE Blockchain Finland / Estonia Group.' },
    { name: 'Sowelu Avanzo, PhD', role: 'Owner & CTO', img: '/media/53114f37d_profile-pic-Sowelu.png', bio: 'Research fellow in Computer Science at the University of Torino, MSc in Finance. PhD on Model-Driven Development for DAOs. Developed the first modeling languages for DAO organizational structures and token economies. Expert in network analysis of blockchain-based systems.' },
    { name: 'Marco Ottina, MSc', role: 'Owner & DAO Development Consultant', img: '/media/6b7777576_profile-pic-Marco.png', bio: 'Full-stack developer and Software Engineer, with a wide background in Artificial Intelligence — competencies in Distributed and Multi-Agent Systems, interested in economic-systems formalization.' },
  ],
};

const UNIT_TWO = {
  name: 'Decentralized Finance & Machine Learning',
  desc: 'Predictive analytics for tokenomics, custom algorithmic trading strategy development, risk management and performance-optimization frameworks, decentralized multi-agent systems, and economic-sustainability analysis — advanced machine learning combined with deep financial expertise for the DeFi ecosystem.',
  people: [
    { name: 'Muhammad Yasir Shabir, PhD', role: 'Data Science & AI Specialist', img: '/media/9ee2baf93_ProfilePicYasir.jpeg', bio: 'PhD in Computer Science from the University of Turin; specialist in Data Science, TinyML, and Edge AI with 10+ years across academia, research, and industry. Focuses on real-time AI optimization for IoT and embedded devices — model compression and compiler-assisted techniques for constrained hardware.' },
    { name: 'Muhammad Rashid, PhD', role: 'Explainable AI & Anomaly Detection Expert', img: '/media/24c906a8a_ProfilePicRashid.jpeg', bio: 'PhD researcher at the University of Turin specializing in Explainable AI (XAI), anomaly detection, and precise object localization. Builds explainable anomaly-detection pipelines for transactions, graphs, and images, pairing cutting-edge research with practical deployment.' },
    { name: 'Luca Pennella, PhD Candidate', role: 'DeFi & Blockchain Analytics Researcher', img: '/media/2a3eb62a0_ProfilePicLucaPennella.jpeg', bio: 'PhD candidate in Applied Data Science and AI at the University of Trieste and a Guest Scholar at IMT Lucca. Researches Machine Learning applications in DeFi, blockchain, and survey data, with a focus on explainable AI. 3+ years of data-analysis experience across Italian consulting firms.' },
  ],
};

const PARTNERS = [
  { name: 'Tallinn University', logo: '/media/partners/tallinn-university.png' },
  { name: 'University of Turin', logo: '/media/partners/university-turin.svg' },
  { name: 'Travelware S.R.L.', logo: '/media/partners/travelware.png' },
  { name: 'JSS University, Noida', logo: '/media/partners/jss-university.png' },
  { name: 'IEEE Blockchain (Estonia / Finland)' },
];

function Person({ p }) {
  return (
    <div>
      <div className="aspect-square w-full overflow-hidden rounded-xl bg-[#0a0f1c] ring-1 ring-[#18C5FF]/15">
        <img src={p.img} alt={`Profile of ${p.name}`} loading="lazy" className="h-full w-full object-cover object-top" />
      </div>
      <h4 className="font-display mt-4 text-base font-semibold text-[#E8ECFB]">{p.name}</h4>
      <div className="font-mono2 mt-1 text-[11px] uppercase tracking-[0.12em] text-[#18C5FF]">{p.role}</div>
      <p className="mt-3 text-sm leading-relaxed text-[#8A93B8]">{p.bio}</p>
    </div>
  );
}

function Unit({ unit }) {
  return (
    <div>
      <h3 className="font-display text-xl font-semibold text-[#E8ECFB]">{unit.name}</h3>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#8A93B8]">{unit.desc}</p>
      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {unit.people.map((p) => <Person key={p.name} p={p} />)}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-[#04060d]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="nd-grid nd-grid-fade absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 pt-36 pb-14 sm:px-8 sm:pt-40 sm:pb-16">
          <Eyebrow>About</Eyebrow>
          <h1 className="font-display mt-6 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-[#E8ECFB] sm:text-5xl lg:text-6xl">
            A research-driven engineering company
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#8A93B8]">
            Norta DeSyCo specializes in trustworthy digital systems. We combine scientific method,
            advanced software architecture, and practical implementation across blockchain, artificial
            intelligence, cybersecurity, decentralized identity, autonomous agents, and distributed systems.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="border-t border-[#18C5FF]/10">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="nd-module rounded-2xl p-8 sm:p-12">
            <div className="nd-label nd-label--muted">Our mission</div>
            <p className="font-display mt-6 max-w-4xl text-2xl font-medium leading-snug text-[#E8ECFB] sm:text-3xl lg:text-4xl">
              To accelerate trustworthy digital transformation — turning advanced research into secure,
              verifiable, and production-ready systems that solve concrete organizational and societal problems.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-[#18C5FF]/10 bg-[#0a0f1c]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Eyebrow>The team</Eyebrow>
          <h2 className="font-display mt-5 max-w-3xl text-3xl font-bold tracking-tight text-[#E8ECFB] sm:text-4xl">Meet the team</h2>
          <p className="mt-4 max-w-3xl text-[#8A93B8]">
            A core team of owners and permanent engineers, extended by a network of research fellows and
            associated specialists across AI, data science, and blockchain — so we can scale delivery
            without diluting expertise.
          </p>
          <div className="mt-16 space-y-20">
            <Unit unit={UNIT_ONE} />
            <Unit unit={UNIT_TWO} />
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="border-t border-[#18C5FF]/10">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Eyebrow>Partners &amp; collaborators</Eyebrow>
          <p className="mt-5 max-w-2xl text-[#8A93B8]">
            We deliver alongside universities, public institutions, and industry — the partners behind
            our funded research and applied projects.
          </p>
          <ul className="mt-10 flex flex-wrap items-stretch gap-4 sm:gap-5">
            {PARTNERS.map((p) => (
              <li key={p.name} className="flex h-24 w-44 items-center justify-center rounded-xl bg-white px-6 py-4 shadow-sm transition-transform duration-200 hover:-translate-y-1">
                {p.logo
                  ? <img src={p.logo} alt={`${p.name} logo`} loading="lazy" className="max-h-14 max-w-full object-contain" />
                  : <span className="text-center text-sm font-semibold text-[#0a1628]">{p.name}</span>}
              </li>
            ))}
          </ul>

          <div className="mt-14">
            <Link to={createPageUrl('Contact')} className="group inline-flex items-center gap-2 rounded-md bg-[#18C5FF] px-6 py-3 text-sm font-semibold text-[#04060d] transition-colors hover:bg-[#5bd6ff]">
              Work with us
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
