import Link from 'next/link';
import Image from 'next/image';

// Hero Section Content - Easy to modify
const HERO_CONTENT = {
  headline: "Enterprise-Grade Security Testing at Machine Speed",
  description: "AI-powered penetration testing that delivers comprehensive vulnerability assessments in hours, not weeks.",
  ctaText: "Start a Pentest",
  ctaLink: "/pentest"
};

// Statistics Section Content - Easy to modify
const STATS_CONTENT = {
  heading: "Real vulnerabilities.\nValidated and reproducible.",
  stats: [
    {
      value: "15+",
      description: "Secured Businesses"
    },
    {
      value: "500+",
      description: "Application vulnerabilities discovered"
    },
    {
      value: "80x",
      description: "Faster than traditional pentesting"
    }
  ]
};

// Features Section Content - Easy to modify
const FEATURES_CONTENT = {
  heading: "Your AI security force multiplier",
  subtitle: "Deploy autonomous AI agents that work in parallel to discover, validate, and exploit vulnerabilities across your entire attack surface—without human intervention",
  features: [
    {
      title: "Autonomous AI Agents",
      description: "AI-powered agents trained on extensive attack patterns execute comprehensive penetration testing across web applications, APIs, and infrastructure at machine speed."
    },
    {
      title: "On-demand Pentesting",
      description: "Launch security assessments in hours, not weeks. Seamlessly integrate into CI/CD pipelines for continuous security validation throughout your development cycle."
    },
    {
      title: "Complete Attack Surface Coverage",
      description: "Systematic testing of every endpoint, parameter, and authentication mechanism ensures comprehensive coverage with zero blind spots."
    },
    {
      title: "Proven Results",
      description: "Validated against real-world vulnerabilities with 500+ application vulnerabilities discovered since September 2025, delivering reproducible proof-of-concepts."
    }
  ]
};

// Comprehensive Security Section Content - Easy to modify
const COMPREHENSIVE_SECURITY_CONTENT = {
  title: "AI-powered vulnerability identification and exploitation",
  subtitle: "Autonomous AI agents that identify, validate, and exploit vulnerabilities across your entire application stack",
  features: [
    {
      title: "Intelligent Vulnerability Discovery",
      description: "Our AI pentesting solution automatically identifies vulnerabilities across web applications, APIs, and infrastructure. Advanced algorithms detect security flaws including SQL injection, XSS, authentication bypasses, and more."
    },
    {
      title: "Automated Exploitation",
      description: "AI agents not only identify vulnerabilities but also exploit them safely to demonstrate impact. Generate proof-of-concept exploits that validate security issues and provide actionable remediation guidance."
    },
    {
      title: "Comprehensive Vulnerability Coverage",
      description: "Systematically test every endpoint, parameter, and attack vector. Our AI solution identifies vulnerabilities across OWASP Top 10, authentication mechanisms, authorization flaws, and business logic vulnerabilities."
    },
    {
      title: "Real-time Security Assessment",
      description: "Continuous AI-powered scanning identifies and exploits vulnerabilities as they emerge. Integrate into your development workflow for real-time security validation with detailed exploit reports and remediation steps."
    }
  ]
};

// Demo Section Content - Easy to modify
const DEMO_SECTION_CONTENT = {
  heading: {
    line1: "Watch Securize hunt for",
    line2: "vulnerabilities in your",
    line3: "applications"
  },
  ctaButton: {
    text: "Get a Demo",
    link: "/demo"
  },
  dashboard: {
    project: "Securize Demo",
    tabs: [
      { name: "Redmine", active: true },
      { name: "Assessments", active: false }
    ],
    findings: {
      title: "Redmine",
      count: "3 findings",
      severity: [
        { level: "Critical", count: 1, color: "red" },
        { level: "High", count: 2, color: "orange" },
        { level: "Medium", count: 0, color: "yellow" },
        { level: "Low", count: 0, color: "gray" },
        { level: "Informational", count: 0, color: "slate" }
      ],
      table: [
        {
          id: "#9",
          name: "Information Disclosure/Broken Access Control on...",
          path: "/projects.json",
          severity: "Critical",
          status: "Open",
          lastSeen: "2025-06-06 10:30"
        },
        {
          id: "#8",
          name: "Cross-Site Scripting (XSS) on /news/preview",
          path: "text",
          severity: "High",
          status: "Open",
          lastSeen: "2025-06-06 06:18"
        },
        {
          id: "#2",
          name: "XSS (Cross-Site Scripting) on /preview/text",
          path: "text is",
          severity: "High",
          status: "Open",
          lastSeen: "2025-06-06 06:42"
        }
      ]
    },
    testCoverage: {
      title: "Test coverage",
      project: "Redmine #3",
      endpoints: [
        "/issues.json",
        "/issues.atom",
        "/issues"
      ],
      categories: [
        "XSS",
        "SQL INJECTION",
        "OPEN REDIRECT",
        "EXPOSED SECRETS",
        "CACHE POISONING"
      ]
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-24 pb-16">
        {/* Subtle Grid Pattern Background */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(132, 204, 22, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(132, 204, 22, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900/50" />

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-lime-400/20 bg-lime-400/5 backdrop-blur-sm">
              <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
              <span className="text-xs font-mono text-lime-400/80 uppercase tracking-wider">AI-Powered Security Platform</span>
            </div>

            {/* Main Headline - Professional Typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              {HERO_CONTENT.headline}
            </h1>

            {/* Description - Concise and Professional */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              {HERO_CONTENT.description}
            </p>

            {/* CTA Button - Professional Styling */}
            <Link
              href={HERO_CONTENT.ctaLink}
              className="inline-flex items-center gap-2 px-8 py-4 bg-lime-400 text-black rounded-lg font-semibold text-base hover:bg-lime-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-lime-400/30 hover:scale-[1.02]"
            >
              {HERO_CONTENT.ctaText}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            {/* Trust Indicators */}
            <div className="mt-16 pt-8 border-t border-gray-800/50">
              <p className="text-sm text-gray-500 font-mono tracking-wider uppercase">Trusted by Security Teams</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section - AI Pentesting Vibe */}
      <section className="py-24 lg:py-40 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(132, 204, 22, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(132, 204, 22, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Animated Scan Lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(132, 204, 22, 0.03) 2px,
              rgba(132, 204, 22, 0.03) 4px
            )`,
            animation: 'pulse-glow 3s ease-in-out infinite'
          }} />
        </div>

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-lime-400 opacity-30" />
        <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-lime-400 opacity-30" />
        <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-lime-400 opacity-30" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-lime-400 opacity-30" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Professional Container with Tech Aesthetic */}
            <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl p-8 lg:p-16 shadow-2xl border border-lime-400/20 relative overflow-hidden">
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-50" style={{
                background: `linear-gradient(135deg, rgba(132, 204, 22, 0.1) 0%, transparent 50%, rgba(132, 204, 22, 0.1) 100%)`,
                filter: 'blur(20px)'
              }} />

              {/* Inner Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-lime-400/5 via-transparent to-lime-400/5 pointer-events-none" />

              <div className="relative z-10">
                {/* Heading with Tech Typography */}
                <div className="text-center mb-16 lg:mb-20">
                  <div className="inline-block mb-4">
                    <span className="text-lime-400 text-sm font-mono tracking-widest uppercase">AI-Powered Security</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                    <span className="block">{STATS_CONTENT.heading.split('\n')[0]}</span>
                    <span className="block text-lime-400">{STATS_CONTENT.heading.split('\n')[1]}</span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-transparent via-lime-400 to-transparent mx-auto mt-6" />
                </div>

                {/* Statistics Grid with Professional Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                  {STATS_CONTENT.stats.map((stat, index) => (
                    <div
                      key={index}
                      className="group relative bg-gradient-to-br from-gray-800/50 to-black/50 rounded-xl p-6 lg:p-8 border border-lime-400/20 hover:border-lime-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-lime-400/20"
                    >
                      {/* Animated Accent Bar */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-lime-400 via-lime-500 to-lime-400 rounded-l-xl opacity-80 group-hover:opacity-100 transition-opacity" 
                        style={{
                          boxShadow: '0 0 10px rgba(132, 204, 22, 0.5)',
                          animation: 'pulse-glow 2s ease-in-out infinite'
                        }}
                      />
                      
                      {/* Tech Pattern Overlay */}
                      <div className="absolute inset-0 opacity-5 rounded-xl overflow-hidden">
                        <div className="absolute inset-0" style={{
                          backgroundImage: `linear-gradient(45deg, transparent 30%, rgba(132, 204, 22, 0.1) 50%, transparent 70%)`,
                          backgroundSize: '200% 200%',
                          animation: 'pulse-glow 4s ease-in-out infinite'
                        }} />
                      </div>

                      {/* Content */}
                      <div className="relative z-10 text-left">
                        {/* Stat Value with Tech Font */}
                        <div className="mb-4">
                          <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-lime-300 to-lime-400 font-mono tracking-tight">
                            {stat.value}
                          </div>
                          {/* Animated Underline */}
                          <div className="h-0.5 bg-gradient-to-r from-transparent via-lime-400 to-transparent mt-2 w-0 group-hover:w-full transition-all duration-500" />
                        </div>
                        
                        {/* Description */}
                        <div className="text-gray-300 text-sm sm:text-base leading-relaxed text-left">
                          {stat.description}
                        </div>

                        {/* Tech Indicator */}
                        <div className="mt-4 flex items-center space-x-2 text-left">
                          <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
                          <span className="text-xs text-lime-400/80 font-mono uppercase tracking-wider">Verified</span>
                        </div>
                      </div>

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-lime-400/0 via-lime-400/5 to-lime-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  ))}
                </div>

                {/* Bottom Tech Accent */}
                <div className="mt-12 flex items-center justify-center space-x-4">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-lime-400" />
                  <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-lime-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Professional Cybersecurity Theme */}
      <section className="py-24 lg:py-40 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Cybersecurity Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(132, 204, 22, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(132, 204, 22, 0.1) 1px, transparent 1px)
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
              rgba(132, 204, 22, 0.05) 3px,
              rgba(132, 204, 22, 0.05) 6px
            )`,
            animation: 'pulse-glow 4s ease-in-out infinite'
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Professional Heading */}
            <div className="text-center mb-16 lg:mb-20">
              <div className="inline-block mb-4">
                <span className="text-lime-400 text-sm font-mono tracking-widest uppercase border border-lime-400/30 px-4 py-2 rounded-full">
                  Enterprise Security Platform
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                {FEATURES_CONTENT.heading}
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {FEATURES_CONTENT.subtitle}
              </p>
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-lime-400 to-transparent mx-auto mt-8" />
            </div>

            {/* Features Grid - Professional Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {FEATURES_CONTENT.features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-800/80 via-gray-900/90 to-black rounded-xl p-8 lg:p-10 border border-lime-400/20 hover:border-lime-400/50 hover:shadow-2xl hover:shadow-lime-400/20 transition-all duration-500 overflow-hidden"
                >
                  {/* Animated Accent Bar with Glow */}
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-lime-400 via-lime-500 to-lime-400 rounded-l-xl opacity-80 group-hover:opacity-100 transition-opacity"
                    style={{
                      boxShadow: '0 0 15px rgba(132, 204, 22, 0.6)',
                      animation: 'pulse-glow 2s ease-in-out infinite'
                    }}
                  />
                  
                  {/* Tech Pattern Overlay */}
                  <div className="absolute inset-0 opacity-5 rounded-xl overflow-hidden">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `linear-gradient(45deg, transparent 30%, rgba(132, 204, 22, 0.1) 50%, transparent 70%)`,
                      backgroundSize: '200% 200%',
                      animation: 'pulse-glow 5s ease-in-out infinite'
                    }} />
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-lime-400/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-lime-400/30 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Content */}
                  <div className="relative z-10 pl-6 text-left">
                    {/* Icon with Enhanced Styling */}
                    <div className="mb-6">
                      {index === 0 && (
                        <div className="relative w-16 h-16">
                          {/* Hexagonal Network Icon */}
                          <svg viewBox="0 0 100 100" className="w-full h-full">
                            {/* Central hexagon */}
                            <polygon
                              points="50,20 70,30 70,50 50,60 30,50 30,30"
                              fill="#84cc16"
                              className="group-hover:fill-lime-500 transition-colors"
                            />
                            {/* Radiating hexagons */}
                            <polygon points="50,5 60,10 60,20 50,25 40,20 40,10" fill="#84cc16" opacity="0.8" className="group-hover:opacity-100 transition-opacity" />
                            <polygon points="80,30 90,35 90,45 80,50 70,45 70,35" fill="#84cc16" opacity="0.8" className="group-hover:opacity-100 transition-opacity" />
                            <polygon points="80,50 90,55 90,65 80,70 70,65 70,55" fill="#84cc16" opacity="0.8" className="group-hover:opacity-100 transition-opacity" />
                            <polygon points="50,75 60,80 60,90 50,95 40,90 40,80" fill="#84cc16" opacity="0.8" className="group-hover:opacity-100 transition-opacity" />
                            <polygon points="20,50 30,55 30,65 20,70 10,65 10,55" fill="#84cc16" opacity="0.8" className="group-hover:opacity-100 transition-opacity" />
                            <polygon points="20,30 30,35 30,45 20,50 10,45 10,35" fill="#84cc16" opacity="0.8" className="group-hover:opacity-100 transition-opacity" />
                            {/* Connection lines */}
                            <line x1="50" y1="25" x2="50" y2="30" stroke="#84cc16" strokeWidth="2" strokeDasharray="4,4" />
                            <line x1="70" y1="40" x2="75" y2="40" stroke="#84cc16" strokeWidth="2" strokeDasharray="4,4" />
                            <line x1="70" y1="60" x2="75" y2="60" stroke="#84cc16" strokeWidth="2" strokeDasharray="4,4" />
                            <line x1="50" y1="70" x2="50" y2="75" stroke="#84cc16" strokeWidth="2" strokeDasharray="4,4" />
                            <line x1="30" y1="60" x2="25" y2="60" stroke="#84cc16" strokeWidth="2" strokeDasharray="4,4" />
                            <line x1="30" y1="40" x2="25" y2="40" stroke="#84cc16" strokeWidth="2" strokeDasharray="4,4" />
                          </svg>
                        </div>
                      )}
                      {index === 1 && (
                        <div className="relative w-16 h-16">
                          {/* Stopwatch Icon */}
                          <svg viewBox="0 0 100 100" className="w-full h-full">
                            <circle cx="50" cy="50" r="35" fill="#84cc16" className="group-hover:fill-lime-500 transition-colors" />
                            <circle cx="50" cy="50" r="30" fill="none" stroke="#000" strokeWidth="3" />
                            <line x1="50" y1="50" x2="50" y2="35" stroke="#000" strokeWidth="3" strokeLinecap="round" />
                            <line x1="50" y1="50" x2="60" y2="50" stroke="#000" strokeWidth="2" strokeLinecap="round" />
                            <circle cx="50" cy="50" r="2" fill="#000" />
                            {/* Arrow pointing right */}
                            <path d="M70 50 L80 50 M75 45 L80 50 L75 55" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            {/* Pipeline/Cylinder */}
                            <rect x="15" y="45" width="8" height="10" rx="2" fill="#84cc16" opacity="0.6" />
                            <line x1="15" y1="48" x2="23" y2="48" stroke="#000" strokeWidth="1" />
                            <line x1="15" y1="52" x2="23" y2="52" stroke="#000" strokeWidth="1" />
                          </svg>
                        </div>
                      )}
                      {index === 2 && (
                        <div className="relative w-16 h-16">
                          {/* Coverage/Network Icon */}
                          <svg viewBox="0 0 100 100" className="w-full h-full">
                            <circle cx="50" cy="50" r="30" fill="none" stroke="#84cc16" strokeWidth="3" className="group-hover:stroke-lime-500 transition-colors" />
                            <circle cx="30" cy="30" r="8" fill="#84cc16" className="group-hover:fill-lime-500 transition-colors" />
                            <circle cx="70" cy="30" r="8" fill="#84cc16" className="group-hover:fill-lime-500 transition-colors" />
                            <circle cx="30" cy="70" r="8" fill="#84cc16" className="group-hover:fill-lime-500 transition-colors" />
                            <circle cx="70" cy="70" r="8" fill="#84cc16" className="group-hover:fill-lime-500 transition-colors" />
                            <circle cx="50" cy="20" r="8" fill="#84cc16" className="group-hover:fill-lime-500 transition-colors" />
                            <circle cx="50" cy="80" r="8" fill="#84cc16" className="group-hover:fill-lime-500 transition-colors" />
                            <line x1="30" y1="30" x2="50" y2="50" stroke="#84cc16" strokeWidth="2" />
                            <line x1="70" y1="30" x2="50" y2="50" stroke="#84cc16" strokeWidth="2" />
                            <line x1="30" y1="70" x2="50" y2="50" stroke="#84cc16" strokeWidth="2" />
                            <line x1="70" y1="70" x2="50" y2="50" stroke="#84cc16" strokeWidth="2" />
                            <line x1="50" y1="20" x2="50" y2="50" stroke="#84cc16" strokeWidth="2" />
                            <line x1="50" y1="80" x2="50" y2="50" stroke="#84cc16" strokeWidth="2" />
                          </svg>
                        </div>
                      )}
                      {index === 3 && (
                        <div className="relative w-16 h-16">
                          {/* Shield/Battle Icon */}
                          <svg viewBox="0 0 100 100" className="w-full h-full">
                            <path d="M50 20 L70 25 L75 45 L50 80 L25 45 L30 25 Z" fill="#84cc16" className="group-hover:fill-lime-500 transition-colors" />
                            <path d="M50 25 L65 29 L69 45 L50 75 L31 45 L35 29 Z" fill="#000" opacity="0.2" />
                            <path d="M50 35 L58 37 L60 45 L50 60 L40 45 L42 37 Z" fill="#84cc16" />
                            <line x1="50" y1="20" x2="50" y2="35" stroke="#000" strokeWidth="2" />
                            <line x1="50" y1="60" x2="50" y2="80" stroke="#000" strokeWidth="2" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-lime-400 transition-colors">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      {feature.description}
                    </p>

                    {/* Tech Indicator */}
                    <div className="mt-6 flex items-center space-x-2 pt-4 border-t border-lime-400/20 text-left">
                      <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
                      <span className="text-xs text-lime-400/80 font-mono uppercase tracking-wider">AI-Powered</span>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-lime-400/0 via-lime-400/5 to-lime-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Subtle Inner Glow */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-lime-400/0 via-transparent to-lime-400/0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Security Section - Professional Cybersecurity Theme */}
      <section className="relative min-h-screen flex flex-col lg:flex-row py-24 lg:py-0 bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Left Column - Dark Background with Enhanced Graphic */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden flex items-center justify-center p-8 lg:p-16">
          {/* Enhanced Tech Grid Pattern Background */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(132, 204, 22, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(132, 204, 22, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }} />
          </div>

          {/* Isometric Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="isometric-grid-enhanced" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 0 20 L 20 10 L 40 20 L 40 40 L 20 50 L 0 40 Z" fill="none" stroke="rgba(132, 204, 22, 0.4)" strokeWidth="0.5" />
                  <path d="M 20 10 L 20 50" fill="none" stroke="rgba(132, 204, 22, 0.4)" strokeWidth="0.5" />
                  <path d="M 0 20 L 40 20" fill="none" stroke="rgba(132, 204, 22, 0.4)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#isometric-grid-enhanced)" />
            </svg>
          </div>

          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-lime-400/40" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-lime-400/40" />

          {/* Content */}
          <div className="relative z-10 max-w-lg text-center lg:text-left">
            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="text-lime-400 text-xs font-mono tracking-widest uppercase border border-lime-400/40 px-3 py-1.5 rounded-full">
                Enterprise Platform
              </span>
            </div>
            
            {/* Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              {COMPREHENSIVE_SECURITY_CONTENT.title}
            </h2>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
              {COMPREHENSIVE_SECURITY_CONTENT.subtitle}
            </p>
            
            {/* Accent Line */}
            <div className="w-20 h-0.5 bg-gradient-to-r from-lime-400 to-transparent" />

            {/* Enhanced Network Visualization */}
            <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                {/* Animated Background Glow */}
                <defs>
                  <radialGradient id="nodeGlow">
                    <stop offset="0%" stopColor="#84cc16" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#84cc16" stopOpacity="0" />
                  </radialGradient>
                </defs>
                
                {/* Node positions (hexagonal pattern) */}
                {[
                  { cx: 200, cy: 200, id: 'center' },
                  { cx: 200, cy: 100, id: 'top' },
                  { cx: 300, cy: 150, id: 'top-right' },
                  { cx: 300, cy: 250, id: 'bottom-right' },
                  { cx: 200, cy: 300, id: 'bottom' },
                  { cx: 100, cy: 250, id: 'bottom-left' },
                  { cx: 100, cy: 150, id: 'top-left' }
                ].map((node, index) => (
                  <g key={node.id}>
                    {/* Enhanced Radiating circles with glow */}
                    <circle cx={node.cx} cy={node.cy} r="50" fill="url(#nodeGlow)" opacity="0.2" />
                    <circle cx={node.cx} cy={node.cy} r="45" fill="none" stroke="#84cc16" strokeWidth="2" opacity="0.4" />
                    <circle cx={node.cx} cy={node.cy} r="35" fill="none" stroke="#84cc16" strokeWidth="1.5" opacity="0.5" />
                    <circle cx={node.cx} cy={node.cy} r="25" fill="none" stroke="#84cc16" strokeWidth="1" opacity="0.6" />
                    
                    {/* Enhanced 3D Cube Node */}
                    <g transform={`translate(${node.cx}, ${node.cy})`}>
                      {/* Cube faces with gradient */}
                      <polygon points="-15,-15 15,-15 15,15 -15,15" fill="#84cc16" opacity="0.8" />
                      <polygon points="15,-15 25,-5 25,15 15,15" fill="#a3e635" opacity="0.6" />
                      <polygon points="15,-15 25,-5 5,-5 -15,-15" fill="#84cc16" opacity="0.7" />
                      
                      {/* Enhanced Starburst icon */}
                      <g transform="translate(0, -20)">
                        <path d="M0,-8 L2,-2 L8,-2 L3,1 L5,7 L0,4 L-5,7 L-3,1 L-8,-2 L-2,-2 Z" fill="white" opacity="1" />
                        <circle cx="0" cy="0" r="3" fill="#84cc16" />
                      </g>
                    </g>
                  </g>
                ))}

                {/* Enhanced Connection lines with animation effect */}
                <line x1="200" y1="200" x2="200" y2="100" stroke="#84cc16" strokeWidth="2" strokeDasharray="4,4" opacity="0.5" />
                <line x1="200" y1="200" x2="300" y2="150" stroke="#84cc16" strokeWidth="2" strokeDasharray="4,4" opacity="0.5" />
                <line x1="200" y1="200" x2="300" y2="250" stroke="#84cc16" strokeWidth="2" strokeDasharray="4,4" opacity="0.5" />
                <line x1="200" y1="200" x2="200" y2="300" stroke="#84cc16" strokeWidth="2" strokeDasharray="4,4" opacity="0.5" />
                <line x1="200" y1="200" x2="100" y2="250" stroke="#84cc16" strokeWidth="2" strokeDasharray="4,4" opacity="0.5" />
                <line x1="200" y1="200" x2="100" y2="150" stroke="#84cc16" strokeWidth="2" strokeDasharray="4,4" opacity="0.5" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Column - Professional Dark Theme with Feature List */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-gray-900 via-black to-gray-900 p-8 lg:p-16 flex items-center relative overflow-hidden">
          {/* Tech Pattern Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, lime 1px, transparent 0)`,
              backgroundSize: '30px 30px'
            }} />
          </div>

          {/* Scan Line Effect */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              background: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(132, 204, 22, 0.03) 2px,
                rgba(132, 204, 22, 0.03) 4px
              )`,
              animation: 'pulse-glow 3s ease-in-out infinite'
            }} />
          </div>

          <div className="w-full max-w-2xl mx-auto space-y-6 lg:space-y-8 relative z-10">
            {COMPREHENSIVE_SECURITY_CONTENT.features.map((feature, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-gray-800/50 via-gray-900/70 to-black/50 rounded-xl p-6 lg:p-8 border border-lime-400/20 hover:border-lime-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-lime-400/10"
              >
                {/* Animated Accent Bar with Glow */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-lime-400 via-lime-500 to-lime-400 rounded-l-xl opacity-80 group-hover:opacity-100 transition-opacity"
                  style={{
                    boxShadow: '0 0 10px rgba(132, 204, 22, 0.5)',
                    animation: 'pulse-glow 2s ease-in-out infinite'
                  }}
                />
                
                {/* Tech Pattern Overlay */}
                <div className="absolute inset-0 opacity-5 rounded-xl overflow-hidden">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(45deg, transparent 30%, rgba(132, 204, 22, 0.1) 50%, transparent 70%)`,
                    backgroundSize: '200% 200%',
                    animation: 'pulse-glow 4s ease-in-out infinite'
                  }} />
                </div>

                {/* Content */}
                <div className="relative z-10 pl-6 text-left">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-lime-400 transition-colors text-left">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base text-left">
                    {feature.description}
                  </p>
                  
                  {/* Tech Indicator */}
                  <div className="mt-4 flex items-center space-x-2 pt-3 border-t border-lime-400/20 text-left">
                    <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
                    <span className="text-xs text-lime-400/80 font-mono uppercase tracking-wider">Enterprise Grade</span>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-lime-400/0 via-lime-400/5 to-lime-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section - Professional Compact Card */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(132, 204, 22, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(132, 204, 22, 0.1) 1px, transparent 1px)
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
              rgba(132, 204, 22, 0.03) 3px,
              rgba(132, 204, 22, 0.03) 6px
            )`,
            animation: 'pulse-glow 4s ease-in-out infinite'
          }} />
        </div>

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-lime-400/30" />
        <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-lime-400/30" />
        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-lime-400/30" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-lime-400/30" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Compact Professional Card Container */}
            <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-xl p-6 lg:p-8 shadow-2xl border border-lime-400/20 relative overflow-hidden">
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 rounded-xl opacity-40" style={{
                background: `linear-gradient(135deg, rgba(132, 204, 22, 0.08) 0%, transparent 50%, rgba(132, 204, 22, 0.08) 100%)`,
                filter: 'blur(15px)'
              }} />

              {/* Inner Glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-lime-400/3 via-transparent to-lime-400/3 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
                  {/* Left Column - Marketing Content */}
                  <div className="lg:w-2/5 text-center lg:text-left">
                    {/* Badge */}
                    <div className="inline-block mb-4">
                      <span className="text-lime-400 text-xs font-mono tracking-widest uppercase border border-lime-400/40 px-3 py-1 rounded-full">
                        Live Dashboard
                      </span>
                    </div>

                    {/* Heading - Smaller and Refined */}
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight text-center lg:text-left">
                      <span className="block">{DEMO_SECTION_CONTENT.heading.line1}</span>
                      <span className="block">{DEMO_SECTION_CONTENT.heading.line2}</span>
                      <span className="block text-lime-400">{DEMO_SECTION_CONTENT.heading.line3}</span>
                    </h2>

                    {/* Description - Smaller */}
                    <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
                      Experience real-time penetration testing insights and AI-powered analysis through our comprehensive security dashboard.
                    </p>

                    {/* CTA Button - Smaller */}
                    <Link
                      href={DEMO_SECTION_CONTENT.ctaButton.link}
                      className="inline-block px-6 py-3 bg-lime-400 text-black rounded-lg font-semibold text-base hover:bg-lime-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-lime-400/50"
                    >
                      {DEMO_SECTION_CONTENT.ctaButton.text}
                    </Link>

                    {/* Accent Line */}
                    <div className="w-16 h-0.5 bg-gradient-to-r from-lime-400 to-transparent mt-6 mx-auto lg:mx-0" />
                  </div>

                  {/* Right Column - Dashboard Image */}
                  <div className="lg:w-3/5 relative">
                    {/* Glow Effect Behind Image */}
                    <div className="absolute inset-0 bg-gradient-to-r from-lime-400/15 via-lime-400/8 to-transparent rounded-lg blur-2xl opacity-40" />
                    
                    {/* Image Container with Professional Styling */}
                    <div className="relative rounded-lg overflow-hidden border border-lime-400/30 shadow-xl hover:shadow-lime-400/20 transition-all duration-300 group">
                      {/* Top Glow Bar */}
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-lime-400 to-transparent opacity-40 z-10" />
                      
                      {/* Dashboard Image */}
            <Image
                        src="/dash.jpg"
                        alt="Securize Dashboard - Real-time penetration testing insights"
                        width={1200}
                        height={800}
                        className="w-full h-auto object-cover"
                        priority
                      />
                      
                      {/* Overlay Glow on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-lime-400/0 via-lime-400/0 to-lime-400/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>

                    {/* Bottom Tech Indicator - Smaller */}
                    <div className="mt-4 flex items-center justify-center space-x-3">
                      <div className="h-px w-12 bg-gradient-to-r from-transparent to-lime-400" />
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse" />
                        <span className="text-xs text-lime-400/80 font-mono uppercase tracking-wider text-[10px]">Live Data</span>
                      </div>
                      <div className="h-px w-12 bg-gradient-to-l from-transparent to-lime-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
