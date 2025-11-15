import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      {/* About Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        {/* Diagonal Grid Pattern Background */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 20px,
                  rgba(255, 255, 255, 0.03) 20px,
                  rgba(255, 255, 255, 0.03) 40px
                ),
                repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 20px,
                  rgba(255, 255, 255, 0.03) 20px,
                  rgba(255, 255, 255, 0.03) 40px
                )
              `
            }}
          />
        </div>

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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="text-lime-400 text-sm font-mono tracking-widest uppercase border border-lime-400/40 px-4 py-2 rounded-full">
                About Securize
              </span>
            </div>

            {/* Title */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-10 leading-tight tracking-tight">
              About
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-14 leading-relaxed max-w-4xl mx-auto">
              Securize is <span className="text-lime-400 font-semibold">Asia's first AI-powered penetration testing platform</span>. Since October 2025, we've discovered <span className="text-lime-400 font-semibold">500+ application vulnerabilities</span> using autonomous AI agents that deliver human-level security testing at machine speed.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/careers"
                className="group px-8 py-4 bg-lime-400 text-black rounded-lg font-semibold text-base hover:bg-lime-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-lime-400/50 hover:scale-105 active:scale-100"
              >
                See open positions
              </Link>
              <Link
                href="/contact"
                className="group px-8 py-4 bg-white text-black rounded-lg font-semibold text-base hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-100"
              >
                Email us
              </Link>
            </div>

            {/* Accent Line */}
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-lime-400 to-transparent mx-auto mt-12" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
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
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-lime-400 opacity-30" />
        <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-lime-400 opacity-30" />
        <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-lime-400 opacity-30" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-lime-400 opacity-30" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 lg:mb-20">
              <div className="inline-block mb-4">
                <span className="text-lime-400 text-sm font-mono tracking-widest uppercase border border-lime-400/30 px-4 py-2 rounded-full">
                  Our Team
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Meet the Experts
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                World-class security researchers building the future of AI-powered penetration testing
              </p>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-lime-400 to-transparent mx-auto mt-6" />
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Team Member 1 */}
              <div className="group text-center">
                <div className="relative w-56 h-56 mx-auto mb-6">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-lime-400/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Image Container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black border-2 border-gray-700 group-hover:border-lime-400/50 transition-all duration-300 shadow-xl group-hover:shadow-2xl group-hover:shadow-lime-400/20">
                    <Image
                      src="/founder.jpg"
                      alt="Nathaneal Meththananda"
                      width={224}
                      height={224}
                      className="w-full h-full rounded-full object-cover object-center grayscale group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-lime-400 rounded-full border-2 border-black shadow-lg" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-lime-400 transition-colors">
                  Nathaneal Meththananda
                </h3>
                <p className="text-gray-400 text-lg mb-3">Founder and CEO</p>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse" />
                  <span className="text-xs text-lime-400/80 font-mono uppercase tracking-wider">Active</span>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="group text-center">
                <div className="relative w-56 h-56 mx-auto mb-6">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-lime-400/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Image Container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black border-2 border-gray-700 group-hover:border-lime-400/50 transition-all duration-300 shadow-xl group-hover:shadow-2xl group-hover:shadow-lime-400/20">
                    {/* Placeholder for team member image */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 flex items-center justify-center">
                      <span className="text-gray-500 text-sm font-medium">Team Member 2</span>
                    </div>
                    {/* Uncomment and replace with actual image when available */}
                    {/* <Image
                      src="/team/team-member-2.jpg"
                      alt="Team Member 2"
                      width={224}
                      height={224}
                      className="w-full h-full rounded-full object-cover object-center grayscale group-hover:scale-110 transition-all duration-300"
                    /> */}
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-lime-400 rounded-full border-2 border-black shadow-lg" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-lime-400 transition-colors">
                  Team Member 2
                </h3>
                <p className="text-gray-400 text-lg mb-3">Head of Security</p>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse" />
                  <span className="text-xs text-lime-400/80 font-mono uppercase tracking-wider">Active</span>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="group text-center">
                <div className="relative w-56 h-56 mx-auto mb-6">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-lime-400/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Image Container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black border-2 border-gray-700 group-hover:border-lime-400/50 transition-all duration-300 shadow-xl group-hover:shadow-2xl group-hover:shadow-lime-400/20">
                    <Image
                      src="/amika-full.jpg"
                      alt="Amika Deshapriya"
                      width={224}
                      height={224}
                      className="w-full h-full rounded-full object-cover object-center grayscale group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-lime-400 rounded-full border-2 border-black shadow-lg" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-lime-400 transition-colors">
                  Amika Deshapriya
                </h3>
                <p className="text-gray-400 text-lg mb-3">Head of AI</p>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse" />
                  <span className="text-xs text-lime-400/80 font-mono uppercase tracking-wider">Active</span>
                </div>
              </div>

              {/* Team Member 4 */}
              <div className="group text-center">
                <div className="relative w-56 h-56 mx-auto mb-6">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-lime-400/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Image Container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black border-2 border-gray-700 group-hover:border-lime-400/50 transition-all duration-300 shadow-xl group-hover:shadow-2xl group-hover:shadow-lime-400/20">
                    {/* Placeholder for team member image */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 flex items-center justify-center">
                      <span className="text-gray-500 text-sm font-medium">Team Member 4</span>
                    </div>
                    {/* Uncomment and replace with actual image when available */}
                    {/* <Image
                      src="/team/team-member-4.jpg"
                      alt="Team Member 4"
                      width={224}
                      height={224}
                      className="w-full h-full rounded-full object-cover object-center grayscale group-hover:scale-110 transition-all duration-300"
                    /> */}
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-lime-400 rounded-full border-2 border-black shadow-lg" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-lime-400 transition-colors">
                  Team Member 4
                </h3>
                <p className="text-gray-400 text-lg mb-3">Team Member</p>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse" />
                  <span className="text-xs text-lime-400/80 font-mono uppercase tracking-wider">Active</span>
                </div>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="mt-16 flex items-center justify-center space-x-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-lime-400" />
              <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-lime-400" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
