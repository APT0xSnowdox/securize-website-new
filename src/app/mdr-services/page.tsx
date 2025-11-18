import Link from 'next/link';

const MDR_CONTENT = {
  hero: {
    title: "Managed Detection and Response",
    subtitle: "24/7 security monitoring, threat detection, and rapid incident response. Let our expert security team protect your organization around the clock.",
    ctaText: "Get Started with MDR",
    ctaLink: "/contact",
  },
  introduction: {
    title: "What is Managed Detection and Response (MDR)?",
    content: "Managed Detection and Response (MDR) is a comprehensive cybersecurity service that provides 24/7 monitoring, threat detection, and incident response capabilities. Our security operations center (SOC) continuously analyzes your network, endpoints, and cloud environments to identify and respond to threats before they cause damage. With MDR, you get enterprise-grade security protection without the complexity and cost of building an in-house SOC."
  },
  capabilities: {
    title: "Comprehensive Security Capabilities",
    subtitle: "Our MDR service combines advanced technology with expert human analysis to provide comprehensive threat protection across your entire IT environment.",
    features: [
      {
        name: "24/7 Security Monitoring",
        description: "Continuous monitoring of your network, endpoints, cloud infrastructure, and applications. Our SOC analysts work around the clock to detect suspicious activities, anomalous behaviors, and potential security threats before they escalate into incidents.",
        icon: "monitoring"
      },
      {
        name: "Advanced Threat Detection",
        description: "Leveraging AI-powered analytics, behavioral analysis, and threat intelligence to identify sophisticated attacks including advanced persistent threats (APTs), zero-day exploits, ransomware, and insider threats. We correlate events across multiple data sources to detect complex attack patterns.",
        icon: "detection"
      },
      {
        name: "Rapid Incident Response",
        description: "When threats are detected, our incident response team immediately springs into action. We contain threats, investigate root causes, and remediate issues to minimize impact. Our response playbooks ensure consistent, effective handling of security incidents.",
        icon: "response"
      },
      {
        name: "Endpoint Detection and Response (EDR)",
        description: "Advanced endpoint protection that monitors and analyzes endpoint activities in real-time. We detect malicious behaviors, investigate suspicious processes, and respond to threats at the endpoint level, providing visibility and control across all devices.",
        icon: "endpoint"
      },
      {
        name: "Network Traffic Analysis",
        description: "Deep packet inspection and network flow analysis to identify malicious communications, data exfiltration attempts, and unauthorized access. We monitor both north-south and east-west traffic to detect lateral movement and command-and-control communications.",
        icon: "network"
      },
      {
        name: "Cloud Security Monitoring",
        description: "Comprehensive monitoring of your cloud infrastructure including AWS, Azure, and GCP. We detect misconfigurations, unauthorized access, suspicious API calls, and cloud-specific threats to ensure your cloud assets remain secure.",
        icon: "cloud"
      },
      {
        name: "Threat Intelligence Integration",
        description: "Integration with global threat intelligence feeds to stay ahead of emerging threats. We correlate your security events with known attack patterns, indicators of compromise (IOCs), and threat actor tactics to provide context-rich alerts and proactive protection.",
        icon: "intelligence"
      },
      {
        name: "Compliance and Reporting",
        description: "Regular security reports, compliance dashboards, and executive briefings keep you informed about your security posture. We provide detailed incident reports, threat trend analysis, and recommendations to improve your security posture over time.",
        icon: "reporting"
      }
    ]
  },
  benefits: {
    title: "Why Choose Our MDR Service?",
    items: [
      "24/7 expert security monitoring without the cost of building an in-house SOC.",
      "Faster threat detection and response times with dedicated security analysts.",
      "Access to advanced security tools and threat intelligence without capital investment.",
      "Reduced mean time to detect (MTTD) and mean time to respond (MTTR) to incidents.",
      "Expert incident response and remediation guidance from experienced security professionals.",
      "Scalable security operations that grow with your organization.",
      "Compliance support for regulations like GDPR, HIPAA, PCI-DSS, and ISO 27001.",
      "Peace of mind knowing your security is monitored by experts around the clock."
    ]
  },
  process: {
    title: "How Our MDR Service Works",
    subtitle: "Our MDR service follows a structured approach to ensure comprehensive threat protection and rapid incident response.",
    steps: [
      {
        step: "1",
        name: "Onboarding & Deployment",
        description: "We begin by understanding your environment, deploying monitoring agents and sensors, and configuring security tools. Our team works with you to establish baselines, define alerting thresholds, and integrate with your existing security infrastructure."
      },
      {
        step: "2",
        name: "Continuous Monitoring",
        description: "Our SOC analysts monitor your environment 24/7, analyzing security events, network traffic, endpoint activities, and cloud logs. Advanced analytics and AI-powered tools help identify anomalies and potential threats in real-time."
      },
      {
        step: "3",
        name: "Threat Detection & Analysis",
        description: "When suspicious activities are detected, our analysts investigate using threat intelligence, behavioral analysis, and forensic techniques. We determine the severity, scope, and potential impact of each threat to prioritize response actions."
      },
      {
        step: "4",
        name: "Incident Response",
        description: "For confirmed threats, our incident response team immediately contains the incident, isolates affected systems, and begins remediation. We work with your IT team to restore services and implement additional security controls to prevent recurrence."
      },
      {
        step: "5",
        name: "Ongoing Optimization",
        description: "We continuously tune detection rules, update threat intelligence, and refine security controls based on your environment and emerging threats. Regular reviews and recommendations help improve your security posture over time."
      }
    ]
  },
  coverage: {
    title: "What We Monitor",
    subtitle: "Our MDR service provides comprehensive coverage across your entire IT infrastructure.",
    areas: [
      {
        name: "Network Infrastructure",
        description: "Firewalls, switches, routers, and network traffic analysis"
      },
      {
        name: "Endpoints",
        description: "Servers, workstations, laptops, and mobile devices"
      },
      {
        name: "Cloud Environments",
        description: "AWS, Azure, GCP, SaaS applications, and cloud workloads"
      },
      {
        name: "Identity & Access",
        description: "Active Directory, authentication systems, and privileged access"
      },
      {
        name: "Applications",
        description: "Web applications, APIs, databases, and business-critical systems"
      },
      {
        name: "Email Security",
        description: "Email gateways, phishing detection, and malicious attachment analysis"
      }
    ]
  }
};

export default function MDRServicesPage() {
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
                Managed Security Service
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {MDR_CONTENT.hero.title}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              {MDR_CONTENT.hero.subtitle}
            </p>
            <Link
              href={MDR_CONTENT.hero.ctaLink}
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-400 text-black rounded-lg font-semibold text-base hover:bg-cyan-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-400/30 hover:scale-[1.02]"
            >
              {MDR_CONTENT.hero.ctaText}
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
              {MDR_CONTENT.introduction.title}
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              {MDR_CONTENT.introduction.content}
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center">
              <div className="inline-block mb-4">
                <span className="text-cyan-400 text-sm font-mono tracking-widest uppercase border border-cyan-400/30 px-4 py-2 rounded-full">
                  Capabilities
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {MDR_CONTENT.capabilities.title}
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                {MDR_CONTENT.capabilities.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {MDR_CONTENT.capabilities.features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-xl p-6 lg:p-8 border border-cyan-400/20 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center mb-4 group-hover:bg-cyan-400/20 transition-colors">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
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
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <div className="inline-block mb-4">
                <span className="text-cyan-400 text-sm font-mono tracking-widest uppercase border border-cyan-400/30 px-4 py-2 rounded-full">
                  Process
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {MDR_CONTENT.process.title}
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                {MDR_CONTENT.process.subtitle}
              </p>
            </div>

            <div className="space-y-8">
              {MDR_CONTENT.process.steps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-xl p-6 lg:p-8 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
                      <span className="text-2xl font-bold text-cyan-400">{step.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {step.name}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <div className="inline-block mb-4">
                <span className="text-cyan-400 text-sm font-mono tracking-widest uppercase border border-cyan-400/30 px-4 py-2 rounded-full">
                  Coverage
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {MDR_CONTENT.coverage.title}
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                {MDR_CONTENT.coverage.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MDR_CONTENT.coverage.areas.map((area, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-2">
                    {area.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <div className="inline-block mb-4">
                <span className="text-cyan-400 text-sm font-mono tracking-widest uppercase border border-cyan-400/30 px-4 py-2 rounded-full">
                  Benefits
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {MDR_CONTENT.benefits.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MDR_CONTENT.benefits.items.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-xl p-6 border border-cyan-400/20"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
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
            <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl p-12 border border-cyan-400/20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Enhance Your Security Posture?
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                Get 24/7 security monitoring and expert incident response without the complexity of building an in-house SOC. Contact us to learn how our MDR service can protect your organization.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-400 text-black rounded-lg font-semibold text-base hover:bg-cyan-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-400/30 hover:scale-[1.02]"
              >
                Contact Sales
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

