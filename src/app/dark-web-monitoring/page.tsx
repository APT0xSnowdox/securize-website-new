import Link from 'next/link';

const DARK_WEB_CONTENT = {
  hero: {
    title: "Dark Web Monitoring",
    subtitle: "Proactively identify threats, data breaches, and compromised credentials before they impact your organization. Stay ahead of cybercriminals with continuous dark web intelligence.",
    ctaText: "Get Started with Dark Web Monitoring",
    ctaLink: "/contact",
  },
  introduction: {
    title: "What is Dark Web Monitoring?",
    content: "Dark Web Monitoring is a proactive cybersecurity service that continuously scans underground forums, marketplaces, and communication channels where cybercriminals trade stolen data, credentials, and attack tools. By monitoring these hidden corners of the internet, we can alert you to compromised credentials, data breaches, and emerging threats targeting your organization before they're exploited."
  },
  methods: {
    title: "Intelligence Collection Methods",
    subtitle: "Our advanced monitoring capabilities leverage multiple intelligence sources and collection techniques to provide comprehensive threat visibility.",
    techniques: [
      {
        name: "Automated Forum Monitoring",
        description: "We deploy specialized crawlers and monitoring tools that continuously scan dark web forums, marketplaces, and chat channels where threat actors discuss targets, share stolen data, and trade access credentials. Our systems use advanced pattern matching and keyword intelligence to identify mentions of your organization, employees, or assets.",
        icon: "forum"
      },
      {
        name: "Credential Dump Analysis",
        description: "We monitor and analyze massive credential dumps from data breaches, identifying when your organization's email domains, usernames, or passwords appear in leaked databases. Our systems cross-reference these findings with your active directory and authentication systems to prioritize compromised accounts.",
        icon: "credentials"
      },
      {
        name: "Threat Actor Profiling",
        description: "We track and profile threat actors who may target organizations in your industry or geographic region. By understanding their tactics, tools, and preferred targets, we can provide early warning of potential attacks and help you prepare defensive measures.",
        icon: "profile"
      },
      {
        name: "Data Breach Intelligence",
        description: "We monitor for mentions of your organization in breach announcements, ransomware group leak sites, and data exfiltration claims. When your data appears in these channels, we provide immediate alerts with context about the breach scope and potential impact.",
        icon: "breach"
      },
      {
        name: "Infrastructure Monitoring",
        description: "We track mentions of your IP addresses, domain names, and infrastructure components in dark web discussions. This helps identify when threat actors are planning attacks, discussing reconnaissance findings, or selling access to compromised systems.",
        icon: "infrastructure"
      },
      {
        name: "Social Engineering Intelligence",
        description: "We monitor for phishing campaigns, social engineering attempts, and impersonation schemes targeting your brand or employees. This includes fake websites, malicious email campaigns, and social media impersonation accounts used in attacks.",
        icon: "social"
      }
    ]
  },
  benefits: {
    title: "Why Monitor the Dark Web?",
    items: [
      "Early detection of compromised credentials before they're used in attacks.",
      "Proactive identification of data breaches affecting your organization.",
      "Insight into threat actor discussions and attack planning.",
      "Reduced time-to-detection for security incidents.",
      "Protection of brand reputation through early breach notification.",
      "Compliance with data protection regulations requiring breach monitoring."
    ]
  },
  process: {
    title: "How It Works",
    subtitle: "Our dark web monitoring service operates continuously, providing real-time alerts and comprehensive intelligence reports.",
    steps: [
      {
        step: "1",
        name: "Scope Definition",
        description: "We work with you to define monitoring parameters, including domains, email addresses, IP ranges, and brand keywords to track across dark web channels."
      },
      {
        step: "2",
        name: "Continuous Monitoring",
        description: "Our automated systems continuously scan dark web forums, marketplaces, paste sites, and communication channels 24/7, using advanced pattern matching and AI-powered analysis."
      },
      {
        step: "3",
        name: "Threat Detection",
        description: "When matches are found, our analysts verify the intelligence, assess the threat level, and correlate findings with your organization's security posture."
      },
      {
        step: "4",
        name: "Alert & Response",
        description: "You receive immediate alerts with actionable intelligence, including compromised credentials, breach notifications, and threat actor discussions. We provide context and recommended remediation steps."
      },
      {
        step: "5",
        name: "Ongoing Intelligence",
        description: "Regular intelligence reports provide insights into threat trends, emerging attack vectors, and industry-specific risks, helping you stay ahead of evolving threats."
      }
    ]
  }
};

export default function DarkWebMonitoringPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900/50" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="text-cyan-400 text-sm font-mono tracking-widest uppercase border border-cyan-400/40 px-4 py-2 rounded-full">
                Threat Intelligence Service
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {DARK_WEB_CONTENT.hero.title}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              {DARK_WEB_CONTENT.hero.subtitle}
            </p>
            <Link
              href={DARK_WEB_CONTENT.hero.ctaLink}
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-400 text-black rounded-lg font-semibold text-base hover:bg-cyan-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-400/30 hover:scale-[1.02]"
            >
              {DARK_WEB_CONTENT.hero.ctaText}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              {DARK_WEB_CONTENT.introduction.title}
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              {DARK_WEB_CONTENT.introduction.content}
            </p>
          </div>
        </div>
      </section>

      {/* Methods Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Scan Line Effect */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 3px,
              rgba(6, 182, 212, 0.03) 3px,
              rgba(6, 182, 212, 0.03) 6px
            )`,
            animation: 'pulse-glow 4s ease-in-out infinite'
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 lg:mb-20">
              <div className="inline-block mb-4">
                <span className="text-cyan-400 text-sm font-mono tracking-widest uppercase border border-cyan-400/30 px-4 py-2 rounded-full">
                  Intelligence Collection
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {DARK_WEB_CONTENT.methods.title}
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                {DARK_WEB_CONTENT.methods.subtitle}
              </p>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-6" />
            </div>

            {/* Methods Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {DARK_WEB_CONTENT.methods.techniques.map((method, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-800/80 via-gray-900/90 to-black rounded-xl p-8 lg:p-10 border border-cyan-400/20 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-400/20 transition-all duration-500 overflow-hidden"
                >
                  {/* Animated Accent Bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan-400 via-cyan-500 to-cyan-400 rounded-l-xl opacity-80 group-hover:opacity-100 transition-opacity"
                    style={{
                      boxShadow: '0 0 15px rgba(6, 182, 212, 0.6)',
                      animation: 'pulse-glow 2s ease-in-out infinite'
                    }}
                  />

                  {/* Tech Pattern Overlay */}
                  <div className="absolute inset-0 opacity-5 rounded-xl overflow-hidden">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `linear-gradient(45deg, transparent 30%, rgba(6, 182, 212, 0.1) 50%, transparent 70%)`,
                      backgroundSize: '200% 200%',
                      animation: 'pulse-glow 5s ease-in-out infinite'
                    }} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 pl-6 text-left">
                    {/* Icon Placeholder */}
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
                        <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {method.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      {method.description}
                    </p>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                {DARK_WEB_CONTENT.process.title}
              </h2>
              <p className="text-lg text-gray-400">
                {DARK_WEB_CONTENT.process.subtitle}
              </p>
            </div>

            <div className="space-y-8">
              {DARK_WEB_CONTENT.process.steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-black font-bold text-xl border-4 border-black shadow-lg">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-2xl font-bold text-cyan-400 mb-3">
                        {step.name}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {index < DARK_WEB_CONTENT.process.steps.length - 1 && (
                    <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/50 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                {DARK_WEB_CONTENT.benefits.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {DARK_WEB_CONTENT.benefits.items.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-800/50 to-black/50 rounded-xl border border-cyan-400/20">
                  <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-lg text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden border-t border-cyan-400/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Monitor the Dark Web?
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Get started with comprehensive dark web monitoring and stay ahead of cyber threats targeting your organization.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-400 text-black rounded-lg font-semibold text-base hover:bg-cyan-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-400/30 hover:scale-[1.02]"
            >
              Contact Us to Get Started
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

