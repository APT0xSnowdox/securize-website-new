import Link from 'next/link';
import Image from 'next/image';

const RED_TEAM_CONTENT = {
  hero: {
    title: "Red Team Operations",
    subtitle: "Simulate real-world attacks to test your organization's detection and response capabilities before adversaries do.",
    ctaText: "Scope a Red Team exercise",
    ctaLink: "/contact",
  },
  introduction: {
    title: "What is Red Teaming?",
    content: "Red Teaming is a full-scope, multi-layered attack simulation designed to measure how well your organization's people, processes, and technology can withstand a real-world attack. Unlike traditional penetration testing, which focuses on finding as many vulnerabilities as possible, a red team exercise is a goal-oriented assessment that mimics the tactics, techniques, and procedures (TTPs) of specific threat actors."
  },
  methodology: {
    title: "Our Methodology",
    subtitle: "We follow a structured approach that mirrors the attack lifecycle of sophisticated adversaries, ensuring a realistic and thorough assessment.",
    steps: [
      {
        name: "Reconnaissance",
        description: "We gather intelligence from open-source (OSINT), technical, and human sources to identify potential attack vectors and map your external footprint."
      },
      {
        name: "Initial Compromise",
        description: "Using the intelligence gathered, we gain an initial foothold in your environment through methods like phishing, exploiting external vulnerabilities, or social engineering."
      },
      {
        name: "Persistence & Escalation",
        description: "Once inside, we establish a persistent presence and seek to escalate privileges, moving laterally through your network to gain access to sensitive systems."
      },
      {
        name: "Achieve Objectives",
        description: "We work towards predefined objectives, such as exfiltrating specific data, accessing critical systems, or demonstrating impact, all while attempting to evade your security controls."
      },
      {
        name: "Reporting & Debrief",
        description: "We provide a comprehensive report detailing the entire attack narrative, key findings, and strategic recommendations to improve your security posture. We then conduct a debrief to discuss the results and remediation steps."
      }
    ]
  },
  benefits: {
    title: "Why Invest in Red Teaming?",
    items: [
      "Test your detection and response capabilities in a real-world scenario.",
      "Identify gaps in your security controls, processes, and employee awareness.",
      "Understand your organization's true risk from a determined attacker.",
      "Train and improve your Blue Team's (defensive) capabilities.",
      "Justify security investments and prioritize remediation efforts effectively."
    ]
  }
};

export default function RedTeamOpsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden border-b border-lime-400/20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="text-lime-400 text-sm font-mono tracking-widest uppercase border border-lime-400/40 px-4 py-2 rounded-full">
                Offensive Security Service
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {RED_TEAM_CONTENT.hero.title}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              {RED_TEAM_CONTENT.hero.subtitle}
            </p>
            <Link
              href={RED_TEAM_CONTENT.hero.ctaLink}
              className="inline-flex items-center gap-2 px-8 py-4 bg-lime-400 text-black rounded-lg font-semibold text-base hover:bg-lime-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-lime-400/30 hover:scale-[1.02]"
            >
              {RED_TEAM_CONTENT.hero.ctaText}
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              {RED_TEAM_CONTENT.introduction.title}
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              {RED_TEAM_CONTENT.introduction.content}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12">
              {RED_TEAM_CONTENT.benefits.title}
            </h2>
            <ul className="space-y-4 text-left max-w-2xl mx-auto">
              {RED_TEAM_CONTENT.benefits.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-lime-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className="text-lg text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
