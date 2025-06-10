"use client";

import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog-data";

export default function BlogPage() {
  return (
    <div className="relative min-h-screen bg-black selection:bg-sky-500/20 overflow-hidden">
      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10 min-h-screen">
        <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03),transparent_50%)]" />
        <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.04),transparent_70%)]" />
      </div>

      <main className="relative px-6 pt-32">
        <div className="mx-auto max-w-7xl">
          {/* Header Section */}
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex h-9 items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 text-sm text-sky-400">
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
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              Safety Knowledge
            </div>

            <h1 className="mt-8 bg-gradient-to-b from-white to-white/80 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
              Emergency Awareness Blog
              <span className="block text-2xl mt-4 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                Stay Informed, Stay Safe
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Explore our comprehensive guides on handling emergencies, preventing
              crime, and staying safe in various situations. Knowledge is your best
              defense against unexpected events.
            </p>
          </div>

          {/* Blog Topics Grid */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group flex flex-col overflow-hidden rounded-2xl bg-zinc-900/70 border border-white/5 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-sky-500/20 hover:shadow-sky-500/5"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/80 z-10" />
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${post.coverImage})` }}
                  />
                  <div className="absolute top-4 left-4 z-20 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                    {post.icon}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                  <p className="text-zinc-400 mb-6 flex-1">{post.excerpt}</p>
                  <div className="flex items-center text-sky-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                    Read More
                    <svg
                      className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
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

          {/* CTA Section */}
          <div className="mt-24 mb-20 text-center">
            <div className="rounded-2xl bg-gradient-to-b from-sky-500/10 to-sky-500/5 border border-sky-500/20 p-8 md:p-12">
              <h2 className="text-2xl font-bold text-white mb-4">
                Stay Informed About Safety
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
                Knowledge is your first line of defense. Explore our blog articles to learn
                how to stay safe and prepare for emergencies before they happen.
              </p>
              <Link
                href="/submit-report"
                className="group relative inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-sky-500 px-8 text-sm font-medium text-white transition-all hover:bg-sky-400"
              >
                Report an Emergency
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M12 5l7 7-7 7"
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