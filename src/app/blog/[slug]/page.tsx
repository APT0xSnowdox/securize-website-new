'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { blogPosts, BlogPost } from '@/data/blog';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Note: generateStaticParams removed as we're using client-side rendering for dynamic content

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [slug, setSlug] = useState<string>('');

  useEffect(() => {
    params.then((resolvedParams) => {
      setSlug(resolvedParams.slug);
    });
  }, [params]);

  useEffect(() => {
    if (!slug) return;

    // Load from localStorage first, then fallback to default
    const savedPosts = localStorage.getItem('blogPosts');
    let postsToSearch = blogPosts;
    
    if (savedPosts) {
      try {
        const parsed = JSON.parse(savedPosts);
        if (Array.isArray(parsed) && parsed.length > 0) {
          postsToSearch = parsed;
        }
      } catch (error) {
        console.error('Error loading saved posts:', error);
      }
    }
    
    const foundPost = postsToSearch.find(p => p.slug === slug);
    if (foundPost) {
      setPost(foundPost);
    }
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
          <Link href="/blog" className="text-lime-400 hover:text-lime-300">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Simple markdown-like rendering for content
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let currentParagraph: string[] = [];
    let inCodeBlock = false;
    let codeBlockContent: string[] = [];

    lines.forEach((line, index) => {
      // Code blocks
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          elements.push(
            <pre key={`code-${index}`} className="bg-gray-900 border border-lime-400/20 rounded-lg p-4 overflow-x-auto my-4">
              <code className="text-gray-300 text-sm font-mono">{codeBlockContent.join('\n')}</code>
            </pre>
          );
          codeBlockContent = [];
          inCodeBlock = false;
        } else {
          if (currentParagraph.length > 0) {
            elements.push(
              <p key={`p-${index}`} className="text-gray-300 mb-4 leading-relaxed">
                {currentParagraph.join(' ')}
              </p>
            );
            currentParagraph = [];
          }
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeBlockContent.push(line);
        return;
      }

      // Headings
      if (line.startsWith('# ')) {
        if (currentParagraph.length > 0) {
          elements.push(
            <p key={`p-before-h1-${index}`} className="text-gray-300 mb-4 leading-relaxed">
              {currentParagraph.join(' ')}
            </p>
          );
          currentParagraph = [];
        }
        elements.push(
          <h1 key={`h1-${index}`} className="text-4xl font-bold text-white mb-6 mt-8">
            {line.substring(2)}
          </h1>
        );
        return;
      }

      if (line.startsWith('## ')) {
        if (currentParagraph.length > 0) {
          elements.push(
            <p key={`p-before-h2-${index}`} className="text-gray-300 mb-4 leading-relaxed">
              {currentParagraph.join(' ')}
            </p>
          );
          currentParagraph = [];
        }
        elements.push(
          <h2 key={`h2-${index}`} className="text-3xl font-bold text-white mb-4 mt-8">
            {line.substring(3)}
          </h2>
        );
        return;
      }

      if (line.startsWith('### ')) {
        if (currentParagraph.length > 0) {
          elements.push(
            <p key={`p-before-h3-${index}`} className="text-gray-300 mb-4 leading-relaxed">
              {currentParagraph.join(' ')}
            </p>
          );
          currentParagraph = [];
        }
        elements.push(
          <h3 key={`h3-${index}`} className="text-2xl font-bold text-lime-400 mb-3 mt-6">
            {line.substring(4)}
          </h3>
        );
        return;
      }

      // Lists
      if (line.startsWith('- ')) {
        if (currentParagraph.length > 0) {
          elements.push(
            <p key={`p-before-list-${index}`} className="text-gray-300 mb-4 leading-relaxed">
              {currentParagraph.join(' ')}
            </p>
          );
          currentParagraph = [];
        }
        elements.push(
          <li key={`li-${index}`} className="text-gray-300 mb-2 ml-6 list-disc">
            {line.substring(2)}
          </li>
        );
        return;
      }

      // Empty line
      if (line.trim() === '') {
        if (currentParagraph.length > 0) {
          elements.push(
            <p key={`p-${index}`} className="text-gray-300 mb-4 leading-relaxed">
              {currentParagraph.join(' ')}
            </p>
          );
          currentParagraph = [];
        }
        return;
      }

      // Regular text
      currentParagraph.push(line);
    });

    // Add remaining paragraph
    if (currentParagraph.length > 0) {
      elements.push(
        <p key="p-final" className="text-gray-300 mb-4 leading-relaxed">
          {currentParagraph.join(' ')}
        </p>
      );
    }

    return elements;
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-12 overflow-hidden">
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
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center text-lime-400 hover:text-lime-300 mb-8 transition-colors group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>

            {/* Category */}
            <div className="mb-6">
              <span className="text-lime-400 text-sm font-mono uppercase tracking-wider border border-lime-400/40 px-4 py-2 rounded-full">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-8 pb-8 border-b border-gray-800">
              <div className="flex items-center space-x-2">
                <span className="text-lime-400 font-semibold">{post.author}</span>
                <span className="text-lime-400/60">•</span>
                <span>{post.authorRole}</span>
              </div>
              <span className="text-lime-400/60">•</span>
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              <span className="text-lime-400/60">•</span>
              <span>{post.readTime}</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-lime-400/80 font-mono uppercase tracking-wider border border-lime-400/30 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(132, 204, 22, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(132, 204, 22, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Article Content */}
            <article className="prose prose-invert prose-lg max-w-none">
              <div className="bg-gradient-to-br from-gray-900/50 via-black/50 to-gray-900/50 rounded-xl p-8 lg:p-12 border border-lime-400/20">
                <div className="text-gray-300 leading-relaxed">
                  {renderContent(post.content)}
                </div>
              </div>
            </article>

            {/* Author Section */}
            <div className="mt-16 pt-8 border-t border-gray-800">
              <div className="bg-gradient-to-br from-gray-900/50 via-black/50 to-gray-900/50 rounded-xl p-8 border border-lime-400/20">
                <div className="flex items-start space-x-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{post.author}</h3>
                    <p className="text-lime-400 text-sm mb-4">{post.authorRole}</p>
                    <p className="text-gray-400 text-sm">
                      Expert in AI-powered penetration testing and cybersecurity innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 flex justify-between items-center">
              <Link
                href="/blog"
                className="inline-flex items-center text-lime-400 hover:text-lime-300 transition-colors group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                All Posts
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-lime-400 text-black rounded-lg font-semibold hover:bg-lime-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-lime-400/50"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

