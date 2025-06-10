"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog-data";
import { notFound } from "next/navigation";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;

  const post = BLOG_POSTS.find((post) => post.id === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-black selection:bg-sky-500/20 overflow-hidden">
      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10 min-h-screen">
        <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03),transparent_50%)]" />
        <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.04),transparent_70%)]" />
      </div>

      <main className="relative px-6 pt-32 pb-20">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center text-sm text-zinc-500">
            <Link href="/blog" className="hover:text-zinc-300 transition-colors">
              Blog
            </Link>
            <svg
              className="mx-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-zinc-300">{post.title}</span>
          </div>

          {/* Header Section */}
          <div className="mb-12">
            <div className="inline-flex h-9 items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 text-sm text-sky-400 mb-6">
              {post.icon}
              {post.category}
            </div>
            <h1 className="text-4xl font-bold text-white mb-6">{post.title}</h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          {/* Cover Image */}
          <div className="rounded-2xl overflow-hidden mb-12 border border-white/10">
            <div className="relative h-96 w-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${post.coverImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            {post.content.map((section, index) => (
              <div key={index} className="mb-12">
                {section.title && (
                  <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                )}
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-zinc-300 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-4 space-y-2">
                    {section.list.map((item, lIndex) => (
                      <li key={lIndex} className="flex items-start">
                        <span className="mr-2 mt-1 text-sky-400">•</span>
                        <span className="text-zinc-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.image && (
                  <div className="my-8 rounded-xl overflow-hidden border border-white/10">
                    <div
                      className="relative h-64 w-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${section.image})` }}
                    />
                  </div>
                )}
                {section.quote && (
                  <blockquote className="border-l-4 border-sky-500 pl-4 my-6">
                    <p className="text-lg italic text-zinc-300">{section.quote}</p>
                    {section.quoteAuthor && (
                      <cite className="text-sm text-zinc-500 block mt-2">
                        — {section.quoteAuthor}
                      </cite>
                    )}
                  </blockquote>
                )}
              </div>
            ))}
          </div>

          {/* Related Posts */}
          <div className="mt-16 border-t border-zinc-800 pt-12">
            <h3 className="text-2xl font-bold text-white mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {BLOG_POSTS
                .filter((p) => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.id}`}
                    className="group flex flex-col overflow-hidden rounded-xl bg-zinc-900/70 border border-white/5 transition-all duration-300 hover:border-sky-500/20"
                  >
                    <div
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${relatedPost.coverImage})` }}
                    />
                    <div className="p-5">
                      <h4 className="text-lg font-semibold text-white mb-2">{relatedPost.title}</h4>
                      <p className="text-zinc-400 line-clamp-2">{relatedPost.excerpt}</p>
                      <div className="mt-4 flex items-center text-sky-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                        Read More
                        <svg
                          className="ml-2 h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-2xl bg-gradient-to-b from-sky-500/10 to-sky-500/5 border border-sky-500/20 p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Need to Report an Emergency?</h3>
                <p className="text-zinc-400">Use our secure platform to report incidents anonymously.</p>
              </div>
              <Link
                href="/submit-report"
                className="flex h-12 items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 text-sm font-medium text-white transition-all hover:bg-sky-400 whitespace-nowrap"
              >
                Submit a Report
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 