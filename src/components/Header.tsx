'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6 lg:px-8">
      <nav className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between bg-gray-900/90 backdrop-blur-md rounded-2xl px-6 py-3 lg:px-8 lg:py-4 shadow-2xl border border-gray-800/50">
          {/* Logo */}
          <Link href="/" className="flex items-center group flex-shrink-0">
            <Image
              src="/logo.png"
              alt="SECURIZE Logo"
              width={2400}
              height={600}
              className="h-8 sm:h-10 lg:h-10 w-auto transition-all duration-300 group-hover:scale-105 group-hover:opacity-90"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-5">
            <Link 
              href="/about" 
              className="px-3 py-2 text-gray-400 hover:text-gray-200 transition-all duration-200 font-medium text-sm lg:text-base"
            >
              About
            </Link>
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
              className="px-5 py-2.5 bg-gray-700/80 text-gray-200 rounded-lg hover:bg-gray-600/80 transition-all duration-200 font-medium text-sm lg:text-base"
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
          <button
            className="md:hidden p-2 text-gray-400 hover:text-gray-200 hover:bg-gray-800/40 rounded-lg transition-all duration-200 active:scale-95"
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
              className="block px-5 py-2.5 bg-gray-700/80 text-gray-200 rounded-lg hover:bg-gray-600/80 transition-all duration-200 text-center font-medium"
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
