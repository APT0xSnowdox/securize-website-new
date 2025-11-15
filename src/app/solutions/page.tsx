import Link from 'next/link';

export default function Solutions() {
  const solutions = [
    {
      title: 'Cloud Security',
      description: 'Comprehensive security solutions for cloud infrastructure and applications.',
      features: ['Multi-cloud support', 'Automated threat detection', 'Compliance management']
    },
    {
      title: 'Network Security',
      description: 'Protect your network infrastructure from advanced threats and attacks.',
      features: ['Firewall management', 'Intrusion detection', 'Traffic analysis']
    },
    {
      title: 'Endpoint Protection',
      description: 'Secure all endpoints across your organization with advanced protection.',
      features: ['Device management', 'Real-time scanning', 'Threat prevention']
    },
    {
      title: 'Data Protection',
      description: 'Safeguard sensitive data with encryption and access controls.',
      features: ['Data encryption', 'Access management', 'Backup solutions']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Security Solutions
            </h1>
            <p className="text-xl text-gray-300">
              Comprehensive security solutions for modern organizations
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="p-8 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {solution.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Our Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Enterprise-Grade Security
                </h3>
                <p className="text-gray-600">
                  Our solutions are built with enterprise-grade security features to protect your organization from the most advanced threats.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Easy Integration
                </h3>
                <p className="text-gray-600">
                  Seamlessly integrate with your existing infrastructure and workflows without disrupting your operations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  24/7 Monitoring
                </h3>
                <p className="text-gray-600">
                  Continuous monitoring and threat detection to keep your systems secure around the clock.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Expert Support
                </h3>
                <p className="text-gray-600">
                  Access to our team of security experts whenever you need assistance or have questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Secure Your Organization?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get in touch with us to learn more about our solutions and how they can help protect your business.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

