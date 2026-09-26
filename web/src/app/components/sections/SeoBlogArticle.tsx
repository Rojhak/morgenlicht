import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { SITE, SITE_URL, type SourceLink } from '@/config/site'
import { BUSINESS_ID, faqSchema, graph, type QA } from '@/lib/schema'
import { Breadcrumbs } from '../site/Breadcrumbs'
import { ContactBand } from '../site/ContactBand'
import { JsonLd } from '../site/JsonLd'
import { Kicker } from '../site/Kicker'

interface RelatedLink {
  href: string
  label: string
}

interface SeoBlogArticleProps {
  slug: string
  title: string
  shortTitle?: string
  description: string
  eyebrow: string
  datePublished: string
  dateModified: string
  readingTime: string
  quickFacts: string[]
  faqItems: QA[]
  relatedLinks: RelatedLink[]
  sources?: SourceLink[]
  ctaTitle?: string
  ctaText?: string
  children: ReactNode
  /** @deprecated kept for older call sites; dates are formatted automatically */
  dateLabel?: string
  /** @deprecated article pages no longer show a stock photo */
  imageSrc?: string
  /** @deprecated article pages no longer show a stock photo */
  imageAlt?: string
}

export function formatDateDe(isoDate: string): string {
  return new Date(`${isoDate}T12:00:00Z`).toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Europe/Berlin',
  })
}

export const articleBodyClass =
  'space-y-6 text-lg leading-relaxed text-ink [&_a]:font-semibold [&_a]:text-forest [&_a]:underline [&_a]:decoration-forest/40 [&_a]:underline-offset-4 [&_a:hover]:decoration-forest [&_h2]:scroll-mt-24 [&_h2]:pt-6 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:text-forest md:[&_h2]:text-3xl [&_h3]:pt-2 [&_h3]:font-heading [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-forest [&_ol]:list-decimal [&_ol]:space-y-3 [&_ol]:pl-6 [&_ul]:list-disc [&_ul]:space-y-3 [&_ul]:pl-6 [&_li]:marker:text-forest [&_strong]:text-ink'

export function SeoBlogArticle({
  slug,
  title,
  shortTitle,
  description,
  eyebrow,
  datePublished,
  dateModified,
  readingTime,
  quickFacts,
  faqItems,
  relatedLinks,
  sources = [],
  ctaTitle = 'Unterstützung im Alltag anfragen',
  ctaText = 'Wir erklären Ihnen persönlich, welche Hilfe zu Ihrer Situation passt und wie die Abrechnung mit der Pflegekasse funktioniert.',
  children,
}: SeoBlogArticleProps) {
  const pageUrl = `${SITE_URL}/blog/${slug}`
  const wasUpdated = dateModified !== datePublished

  const schema = graph(
    {
      '@type': 'Article',
      '@id': `${pageUrl}#article`,
      headline: title,
      description,
      image: `${SITE_URL}/opengraph-image`,
      datePublished,
      dateModified,
      inLanguage: 'de-DE',
      author: { '@id': BUSINESS_ID },
      publisher: { '@id': BUSINESS_ID },
      mainEntityOfPage: pageUrl,
      ...(sources.length > 0 ? { citation: sources.map((source) => source.href) } : {}),
    },
    ...(faqItems.length > 0 ? [faqSchema(faqItems)] : []),
  )

  return (
    <>
      <JsonLd data={schema} />

      <article>
        <header className="sunrise overflow-hidden border-b border-line bg-cream px-5 pb-12 pt-6 sm:px-6 md:pb-14 md:pt-8">
          <div className="mx-auto max-w-6xl">
            <Breadcrumbs
              crumbs={[
                { name: 'Ratgeber', href: '/blog' },
                { name: shortTitle ?? title, href: `/blog/${slug}` },
              ]}
            />
            <div className="mt-8 max-w-3xl md:mt-10">
              <Kicker>{eyebrow}</Kicker>
              <h1 className="mt-4 font-heading text-[2rem] font-bold leading-[1.15] text-forest sm:text-5xl sm:leading-[1.1]">
                {title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted md:text-xl">{description}</p>
              <p className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-base text-muted">
                <span>
                  Veröffentlicht am <time dateTime={datePublished}>{formatDateDe(datePublished)}</time>
                </span>
                {wasUpdated && (
                  <span>
                    Aktualisiert am <time dateTime={dateModified}>{formatDateDe(dateModified)}</time>
                  </span>
                )}
                <span>{readingTime}</span>
                <span>Herausgeber: {SITE.name}</span>
              </p>
            </div>
          </div>
        </header>

        <div className="bg-white px-5 py-12 sm:px-6 md:py-16">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
            <div className="h-fit rounded-2xl border-t-4 border-sun bg-cream p-5 lg:sticky lg:top-28 lg:order-2">
              <h2 className="font-heading text-lg font-bold text-forest">Kurz erklärt</h2>
              <ul className="mt-3 space-y-3">
                {quickFacts.map((fact) => (
                  <li key={fact} className="flex gap-3 text-base leading-snug text-ink">
                    <Check className="mt-0.5 h-5 w-5 flex-none text-forest" aria-hidden="true" />
                    {fact}
                  </li>
                ))}
              </ul>
              <a
                href={SITE.phone.href}
                className="plausible-event-name=Telefonklick mt-5 flex min-h-12 items-center justify-center rounded-xl bg-forest px-4 text-base font-bold text-white hover:bg-forest-deep"
              >
                Fragen? {SITE.phone.label}
              </a>
            </div>
            <div className="min-w-0 max-w-3xl lg:order-1">
              <div className={articleBodyClass}>{children}</div>

              {faqItems.length > 0 && (
                <section className="mt-14 border-t border-line pt-10" aria-labelledby={`${slug}-faq-heading`}>
                  <h2 id={`${slug}-faq-heading`} className="font-heading text-2xl font-bold text-forest md:text-3xl">
                    Häufige Fragen
                  </h2>
                  <div className="mt-6 divide-y divide-line border-y border-line">
                    {faqItems.map((item) => (
                      <div key={item.question} className="py-5">
                        <h3 className="font-heading text-lg font-bold text-forest md:text-xl">{item.question}</h3>
                        <p className="mt-2 text-lg leading-relaxed text-muted">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {sources.length > 0 && (
                <section className="mt-12 border-l-4 border-sun bg-cream p-5" aria-labelledby={`${slug}-sources-heading`}>
                  <h2 id={`${slug}-sources-heading`} className="font-heading text-lg font-bold text-forest">
                    Quellen
                  </h2>
                  <ul className="mt-2 space-y-1 text-base">
                    {sources.map((source) => (
                      <li key={source.href}>
                        <a href={source.href} rel="noopener noreferrer" className="inline-flex min-h-11 items-center font-semibold text-forest underline underline-offset-4">
                          {source.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <section className="mt-12" aria-labelledby={`${slug}-related-heading`}>
                <h2 id={`${slug}-related-heading`} className="font-heading text-2xl font-bold text-forest">
                  Passende Informationen
                </h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {relatedLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="flex min-h-14 items-center justify-between gap-3 rounded-xl border border-line px-4 py-3 text-lg font-semibold text-forest transition hover:border-forest hover:bg-cream"
                      >
                        {item.label}
                        <ArrowRight className="h-5 w-5 flex-none" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

          </div>
        </div>
      </article>

      <ContactBand title={ctaTitle} text={ctaText} headingId={`${slug}-contact-title`} />
    </>
  )
}
