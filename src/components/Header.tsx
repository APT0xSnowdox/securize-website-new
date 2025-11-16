'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  { name: 'Red Team Ops', href: '/red-team-ops' },
  { name: 'MDR', href: '/mdr-services' },
  { name: 'Dark Web Monitoring', href: '/dark-web-monitoring' },
  { name: 'PDPA and ISO 27001', href: '/services#pdpa-iso-27001' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6 lg:px-8">
      <nav className="container mx-auto max-w-5xl">
        <div className="flex items-center justify-between relative bg-gray-900/90 backdrop-blur-md rounded-2xl pl-40 md:pl-52 lg:pl-64 pr-6 py-4 lg:px-8 lg:py-6 shadow-2xl border border-gray-800/50">
          {/* Logo */}
          <Link 
            href="/" 
            className="absolute left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 flex items-center hover:opacity-80 transition-opacity duration-200 z-10"
          >
            <Image
              src="/com.png"
              alt="Company Logo"
              width={200}
              height={200}
              className="h-20 w-auto md:h-20 lg:h-35"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-5 ml-auto">
            <Link 
              href="/about" 
              className="px-3 py-2 text-gray-400 hover:text-gray-200 transition-all duration-200 font-medium text-sm lg:text-base"
            >
              About
            </Link>
            {/* Services Dropdown */}
            <div className="relative group">
              <div
                className="px-3 py-2 text-gray-400 hover:text-gray-200 transition-all duration-200 font-medium text-sm lg:text-base flex items-center gap-1 cursor-pointer"
              >
                Services
                <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 bg-gray-900/90 backdrop-blur-md rounded-xl shadow-2xl border border-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                <div className="p-2 pt-0">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-lime-400/10 rounded-lg transition-all duration-200"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link 
              href="/blog" 
              className="px-3 py-2 text-gray-400 hover:text-gray-200 transition-all duration-200 font-medium text-sm lg:text-base"
            >
              Blog
            </Link>
            <Link 
              href="/careers" 
              className="px-3 py-2 text-gray-400 hover:text-gray-200 transition-all duration-200 font-medium text-sm lg:text-base"
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-gray-200 text-black rounded-lg hover:bg-white transition-all duration-200 font-medium text-sm lg:text-base"
            >
              Contact Sales
            </Link>
            <Link
              href="/pentest"
              className="px-5 py-2.5 bg-lime-400 text-black rounded-lg font-semibold hover:bg-lime-300 transition-all duration-200 text-sm lg:text-base"
            >
              Start a Pentest
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 z-10">
            <button
              className="p-2 text-gray-400 hover:text-gray-200 hover:bg-gray-800/40 rounded-lg transition-all duration-200 active:scale-95"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 bg-gray-900/90 backdrop-blur-md rounded-2xl px-6 py-4 space-y-2 shadow-2xl border border-gray-800/50">
            <Link
              href="/about"
              className="block px-3 py-2.5 text-gray-400 hover:text-gray-200 transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            {/* Mobile Services Menu */}
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex justify-between items-center px-3 py-2.5 text-gray-400 hover:text-gray-200 transition-all duration-200 font-medium"
              >
                Services
                <svg className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {isServicesOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-lime-400/20">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-3 py-2 text-gray-400 hover:text-white hover:bg-lime-400/10 rounded-md transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/blog"
              className="block px-3 py-2.5 text-gray-400 hover:text-gray-200 transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/careers"
              className="block px-3 py-2.5 text-gray-400 hover:text-gray-200 transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="block px-5 py-2.5 bg-gray-200 text-black rounded-lg hover:bg-white transition-all duration-200 text-center font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Sales
            </Link>
            <Link
              href="/pentest"
              className="block px-5 py-2.5 bg-lime-400 text-black rounded-lg font-semibold hover:bg-lime-300 transition-all duration-200 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Start a Pentest
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
