'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { blogPosts, getFeaturedPosts, BlogPost } from '@/data/blog';

export default function BlogPage() {
  const [allPosts, setAllPosts] = useState<BlogPost[]>(blogPosts);
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>(getFeaturedPosts());

  useEffect(() => {
    // Load posts from localStorage if available
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      try {
        const parsed = JSON.parse(savedPosts);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setAllPosts(parsed);
          setFeaturedPosts(parsed.filter((post: BlogPost) => post.featured));
        }
      } catch (error) {
        console.error('Error loading saved posts:', error);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
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
                Blog
              </span>
            </div>

            {/* Title */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-6 leading-tight tracking-tight">
              Security Insights
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Expert insights on AI-powered penetration testing, cybersecurity best practices, and the future of application security.
            </p>

            {/* Accent Line */}
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-lime-400 to-transparent mx-auto" />
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
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

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12 text-center">
                <div className="inline-block mb-4">
                  <span className="text-lime-400 text-sm font-mono tracking-widest uppercase border border-lime-400/30 px-4 py-2 rounded-full">
                    Featured
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Featured Articles
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {featuredPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block"
                  >
                    <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-xl p-8 lg:p-10 border border-lime-400/20 hover:border-lime-400/50 hover:shadow-2xl hover:shadow-lime-400/20 transition-all duration-500 overflow-hidden h-full">
                      {/* Animated Accent Bar */}
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

                      <div className="relative z-10 pl-6">
                        {/* Category */}
                        <div className="mb-4">
                          <span className="text-lime-400 text-xs font-mono uppercase tracking-wider border border-lime-400/30 px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-lime-400 transition-colors">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {post.excerpt}
                        </p>

                        {/* Meta Info */}
                        <div className="flex items-center justify-between text-sm text-gray-400">
                          <div className="flex items-center space-x-4">
                            <span>{post.author}</span>
                            <span className="text-lime-400/60">•</span>
                            <span>{post.readTime}</span>
                          </div>
                          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>

                        {/* Tags */}
                        <div className="mt-6 flex flex-wrap gap-2">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs text-lime-400/80 font-mono uppercase tracking-wider border border-lime-400/20 px-2 py-1 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-lime-400/0 via-lime-400/5 to-lime-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Posts Section */}
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center">
              <div className="inline-block mb-4">
                <span className="text-lime-400 text-sm font-mono tracking-widest uppercase border border-lime-400/30 px-4 py-2 rounded-full">
                  All Articles
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Latest Posts
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-lime-400 to-transparent mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {allPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <div className="relative bg-gradient-to-br from-gray-800/80 via-gray-900/90 to-black rounded-xl p-6 lg:p-8 border border-lime-400/20 hover:border-lime-400/50 hover:shadow-xl hover:shadow-lime-400/10 transition-all duration-300 overflow-hidden h-full">
                    {/* Animated Accent Bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-lime-400 via-lime-500 to-lime-400 rounded-l-xl opacity-80 group-hover:opacity-100 transition-opacity"
                      style={{
                        boxShadow: '0 0 10px rgba(132, 204, 22, 0.5)',
                        animation: 'pulse-glow 2s ease-in-out infinite'
                      }}
                    />

                    <div className="relative z-10 pl-6">
                      {/* Category */}
                      <div className="mb-3">
                        <span className="text-lime-400 text-xs font-mono uppercase tracking-wider border border-lime-400/30 px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-lime-400 transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                        <div className="flex items-center space-x-3">
                          <span>{post.author}</span>
                          <span className="text-lime-400/60">•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Date */}
                      <div className="text-xs text-lime-400/80 font-mono">
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-lime-400/0 via-lime-400/5 to-lime-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

