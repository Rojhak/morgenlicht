import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Tag, ArrowRight } from 'lucide-react'
import { GlassCard, GlassButton } from '../components/glass'

export const metadata: Metadata = {
  title: 'Blog: Pflegegrad, Entlastungsbetrag & Alltagshilfe',
  description:
    'Ratgeber von Morgenlicht Alltagshilfe Berlin zu Pflegegrad, Entlastungsbetrag, Haushaltshilfe, Pflegekasse und Unterstützung im Alltag.',
  alternates: {
    canonical: '/blog',
  },
}

// Sample blog posts - in production, these would come from MDX files
const blogPosts = [
  {
    slug: 'haushaltshilfe-pflegegrad-pflegekasse',
    title: 'Haushaltshilfe bei Pflegegrad: Was zahlt die Pflegekasse?',
    excerpt:
      'Viele Familien wissen nicht, welche Hilfe im Haushalt über Pflegeleistungen möglich ist. Der Beitrag erklärt Entlastungsbetrag, anerkannte Anbieter und direkte Abrechnung.',
    date: '2026-05-08',
    tags: ['haushaltshilfe', 'pflegekasse', 'pflegegrad'],
  },
  {
    slug: 'pflegegrad-1-hilfe-leistungen',
    title: 'Pflegegrad 1: Welche Hilfe steht Ihnen zu?',
    excerpt:
      'Auch mit Pflegegrad 1 gibt es bereits Unterstützung. Einfach erklärt: Entlastungsbetrag, Beratung, Alltagshilfe und wichtige nächste Schritte.',
    date: '2026-05-08',
    tags: ['pflegegrad-1', 'entlastungsbetrag', 'alltagshilfe'],
  },
  {
    slug: 'direktabrechnung-pflegekasse-ohne-vorkasse',
    title: 'Direktabrechnung mit der Pflegekasse: Alltagshilfe ohne Vorkasse',
    excerpt:
      'So funktioniert die Abrechnung direkt mit der Pflegekasse: weniger Papierkram, keine Vorkasse und klare Schritte für Angehörige.',
    date: '2026-05-08',
    tags: ['direktabrechnung', 'pflegekasse', 'alltagshilfe'],
  },
  {
    slug: 'alltagshilfe-pflegegrad-entlastungsbetrag',
    title: 'Alltagshilfe bei Pflegegrad: 131 € Entlastungsbetrag richtig nutzen',
    excerpt:
      'Viele Menschen mit Pflegegrad nutzen den Entlastungsbetrag nicht, obwohl ihnen monatlich 131 € für Alltagshilfe zustehen. Einfach erklärt: Anspruch, Leistungen und Abrechnung mit der Pflegekasse.',
    date: '2026-05-06',
    tags: ['entlastungsbetrag', 'alltagshilfe', 'pflegekasse'],
  },
  {
    slug: 'entlastungsbetrag-richtig-nutzen',
    title: 'Entlastungsbetrag richtig nutzen: So holen Sie das Maximum heraus',
    excerpt: 'Der Entlastungsbetrag von 131 € monatlich steht Menschen mit Pflegegrad zu. Wir zeigen, wie Sie ihn im Alltag sinnvoll einsetzen.',
    date: '2026-01-10',
    tags: ['rechtliches', 'pflege-tipps'],
  },
  {
    slug: 'pflegegrad-beantragen-schritt-fuer-schritt',
    title: 'Pflegegrad beantragen: Schritt für Schritt zum Erfolg',
    excerpt: 'Der Weg zum Pflegegrad kann kompliziert erscheinen. Mit unserer Anleitung meistern Sie den Antrag problemlos.',
    date: '2026-01-05',
    tags: ['rechtliches', 'pflege-tipps'],
  },
  {
    slug: 'sturzpraevention-im-alltag',
    title: 'Sturzprävention im Alltag: 7 einfache Tipps für mehr Sicherheit',
    excerpt: 'Stürze sind eine der häufigsten Unfallursachen im Alter. Mit diesen Tipps machen Sie Ihr Zuhause sicherer.',
    date: '2025-12-28',
    tags: ['pflege-tipps', 'alltagshilfe'],
  },
]

const allTags = ['entlastungsbetrag', 'alltagshilfe', 'pflegekasse', 'pflegegrad', 'haushaltshilfe', 'pflege-tipps', 'rechtliches']

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
            Blog
          </h1>
          <p className="text-lg text-[#455A64] max-w-2xl mx-auto">
            Tipps, Informationen und Neuigkeiten rund um Pflege und Alltagshilfe
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {allTags.map((tag) => (
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
