import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { formatDateDe } from '../components/sections/SeoBlogArticle'
import { ContactBand } from '../components/site/ContactBand'
import { JsonLd } from '../components/site/JsonLd'
import { PageHero } from '../components/site/PageHero'
import { blogPosts } from '@/config/blogPosts'
import { SITE_URL } from '@/config/site'
import { BUSINESS_ID, graph } from '@/lib/schema'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Ratgeber Pflegegrad & Alltagshilfe | Morgenlicht',
  description:
    'Verständliche Ratgeber zu Pflegegrad, Entlastungsbetrag, Direktabrechnung und Haushaltshilfe – für Seniorinnen, Senioren und Angehörige in Berlin.',
  path: '/blog',
})

const topics = [
  {
    id: 'pflegekasse',
    title: 'Pflegekasse und Kosten',
    slugs: ['alltagshilfe-pflegegrad-entlastungsbetrag', 'direktabrechnung-pflegekasse-ohne-vorkasse', 'haushaltshilfe-pflegegrad-pflegekasse'],
  },
  {
    id: 'pflegegrad',
    title: 'Pflegegrad',
    slugs: ['pflegegrad-beantragen-schritt-fuer-schritt', 'pflegegrad-1-hilfe-leistungen'],
  },
  {
    id: 'alltag',
    title: 'Unterstützung im Alltag',
    slugs: ['alltagshilfe-oder-haushaltshilfe-unterschied', 'seniorenhilfe-zuhause-berlin', 'haushaltshilfe-kreuzberg-neukoelln', 'sturzpraevention-im-alltag'],
  },
]

const schema = graph({
  '@type': 'CollectionPage',
  '@id': `${SITE_URL}/blog#webpage`,
  name: 'Ratgeber von Morgenlicht Alltagshilfe Berlin',
  url: `${SITE_URL}/blog`,
  inLanguage: 'de-DE',
  publisher: { '@id': BUSINESS_ID },
  hasPart: [
    { '@type': 'Article', name: 'Pflegegrad-Begutachtung: Ablauf, sechs Lebensbereiche und Checkliste', url: `${SITE_URL}/pflegegrad-guide` },
    ...blogPosts.map((post) => ({
      '@type': 'Article',
      name: post.title,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.date,
      dateModified: post.modified,
    })),
  ],
})

export default function BlogPage() {
  const bySlug = new Map(blogPosts.map((post) => [post.slug, post]))

  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        crumbs={[{ name: 'Ratgeber', href: '/blog' }]}
        kicker="Ratgeber"
        title="Ratgeber zu Pflegegrad, Pflegekasse und Alltagshilfe"
        lead={
          <p>
            Verständliche Antworten für Seniorinnen, Senioren und Angehörige in Berlin. Alle
            Beträge und Fristen mit Quellenangabe und Datum der letzten Prüfung.
          </p>
        }
      >
        <Link
          href="/pflegegrad-guide"
          className="flex max-w-xl items-center justify-between gap-4 rounded-2xl border-t-4 border-sun bg-white p-5 shadow-[0_10px_30px_rgba(19,78,74,0.08)] transition hover:shadow-[0_14px_36px_rgba(19,78,74,0.14)]"
        >
          <span>
            <span className="block text-base font-semibold text-muted">Ausführlicher Leitfaden</span>
            <span className="mt-1 block font-heading text-xl font-bold text-forest">
              Pflegegrad-Begutachtung vorbereiten: Ablauf und Checkliste
            </span>
          </span>
          <ArrowRight className="h-6 w-6 flex-none text-forest" aria-hidden="true" />
        </Link>
      </PageHero>

      <div className="bg-white px-5 py-14 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl space-y-16">
          {topics.map((topic) => (
            <section key={topic.id} aria-labelledby={`${topic.id}-title`}>
              <h2 id={`${topic.id}-title`} className="font-heading text-2xl font-bold text-forest md:text-3xl">
                {topic.title}
              </h2>
              <ul className="mt-6 grid gap-x-10 border-t border-line md:grid-cols-2">
                {topic.slugs.map((slug) => {
                  const post = bySlug.get(slug)
                  if (!post) return null
                  return (
                    <li key={post.slug} className="border-b border-line py-6">
                      <article>
                        <h3 className="font-heading text-xl font-bold leading-snug text-forest">
                          <Link href={`/blog/${post.slug}`} className="underline decoration-forest/25 underline-offset-4 hover:decoration-forest">
                            {post.title}
                          </Link>
                        </h3>
                        <p className="mt-2 text-lg leading-relaxed text-muted">{post.excerpt}</p>
                        <p className="mt-3 text-base text-muted">
                          {post.modified !== post.date ? 'Aktualisiert am ' : 'Veröffentlicht am '}
                          <time dateTime={post.modified}>{formatDateDe(post.modified)}</time>
                        </p>
                      </article>
                    </li>
                  )
                })}
              </ul>
            </section>
          ))}
        </div>
      </div>

      <ContactBand title="Fragen zu einem Thema?" text="Wir beraten Sie gern persönlich zu Pflegegrad, Pflegekasse und Alltagshilfe – kostenfrei und unverbindlich." />
    </>
  )
}
