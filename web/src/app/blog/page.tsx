import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Tag, ArrowRight } from 'lucide-react'
import { GlassCard, GlassButton } from '../components/glass'
import { blogPosts, blogTags } from '@/config/blogPosts'

export const metadata: Metadata = {
  title: 'Ratgeber: Haushaltshilfe, Pflegegrad & Pflegekasse',
  description:
    'Ratgeber zu Haushaltshilfe und Alltagshilfe in Berlin, Pflegegrad, Entlastungsbetrag und Pflegekasse – mit Informationen für Kreuzberg und Neukölln.',
  alternates: {
    canonical: '/blog',
  },
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function BlogPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#37474F] mb-4">
            Ratgeber für Haushaltshilfe in Berlin
          </h1>
          <p className="text-lg text-[#455A64] max-w-2xl mx-auto">
            Verständliche Informationen zu Haushaltshilfe, Alltagshilfe, Pflegegrad und Pflegekasse in Kreuzberg und Neukölln.
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {blogTags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-3 py-1 bg-white/50 rounded-full text-sm text-[#455A64]"
            >
              <Tag className="w-3 h-3" aria-hidden="true" />
              {tag}
            </span>
          ))}
        </div>

        {/* Blog Posts */}
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <GlassCard key={post.slug} className="p-6 hover:shadow-lg transition-shadow">
              <article>
                <div className="flex items-center gap-4 text-sm text-[#455A64] mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </span>
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-[#26A69A]/10 rounded text-xs text-[#0D6E64]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h2 className="text-xl font-semibold text-[#37474F] mb-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-[#0D6E64] transition-colors
                               focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2 rounded"
                  >
                    {post.title}
                  </Link>
                </h2>

                <p className="text-[#455A64] mb-4">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-[#0D6E64] hover:underline
                             focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2 rounded"
                >
                  Weiterlesen
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </article>
            </GlassCard>
          ))}
        </div>

        {/* Newsletter CTA */}
        <GlassCard className="p-8 mt-12 text-center bg-[#E0F2F1]">
          <h2 className="text-xl font-semibold text-[#37474F] mb-2">
            Fragen zu einem Thema?
          </h2>
          <p className="text-[#455A64] mb-6">
            Wir beraten Sie gerne persönlich zu allen Fragen rund um Pflege und Alltagshilfe.
          </p>
          <GlassButton as="link" href="/kontakt" variant="primary">
            Kontakt aufnehmen
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </GlassButton>
        </GlassCard>
      </div>
    </div>
  )
}
