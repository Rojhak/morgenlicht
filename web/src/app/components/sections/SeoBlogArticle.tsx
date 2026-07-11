import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen, Calendar, CheckCircle, HelpCircle } from 'lucide-react'
import { serializeJsonLd } from '@/lib/security'

const SITE_URL = 'https://www.morgenlicht-alltagshilfe.de'

interface FaqItem {
  question: string
  answer: string
}

interface RelatedLink {
  href: string
  label: string
}

interface SourceLink {
  href: string
  label: string
}

interface SeoBlogArticleProps {
  slug: string
  title: string
  description: string
  eyebrow: string
  datePublished: string
  dateModified: string
  dateLabel: string
  readingTime: string
  imageSrc: string
  imageAlt: string
  quickFacts: string[]
  faqItems: FaqItem[]
  relatedLinks: RelatedLink[]
  sources?: SourceLink[]
  children: ReactNode
}

export function SeoBlogArticle({
  slug,
  title,
  description,
  eyebrow,
  datePublished,
  dateModified,
  dateLabel,
  readingTime,
  imageSrc,
  imageAlt,
  quickFacts,
  faqItems,
  relatedLinks,
  sources = [],
  children,
}: SeoBlogArticleProps) {
  const pageUrl = `${SITE_URL}/blog/${slug}`
  const imageUrl = `${SITE_URL}${imageSrc}`

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${pageUrl}#article`,
        headline: title,
        description,
        image: imageUrl,
        datePublished,
        dateModified,
        inLanguage: 'de-DE',
        author: { '@id': `${SITE_URL}/#business` },
        publisher: { '@id': `${SITE_URL}/#business` },
        mainEntityOfPage: pageUrl,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: `${SITE_URL}/blog` },
          { '@type': 'ListItem', position: 3, name: title, item: pageUrl },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
      />

      <article className="bg-white">
        <header className="bg-[#F7F6F3] px-4 pb-12 pt-10 md:pb-14 md:pt-16">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/blog"
              className="inline-flex min-h-12 items-center rounded text-sm font-semibold text-[#134E4A] hover:underline focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2"
            >
              Ratgeber
            </Link>

            <p className="mt-3 text-sm font-bold uppercase text-[#0D6E64]">{eyebrow}</p>
            <h1 className="mt-4 max-w-4xl font-heading text-3xl font-bold leading-tight text-[#134E4A] sm:text-4xl md:text-5xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#455A64] md:text-xl">
              {description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#455A64]">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                <time dateTime={datePublished}>{dateLabel}</time>
              </span>
              <span>{readingTime}</span>
            </div>
          </div>
        </header>

        <div className="px-4 py-12 md:py-16">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
            <div className="min-w-0">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={960}
                height={640}
                className="mb-10 aspect-[3/2] w-full rounded-lg object-cover"
                priority
              />

              <div className="space-y-6 text-base leading-relaxed text-[#374151] md:text-lg [&_a]:font-semibold [&_a]:text-[#0D6E64] [&_a]:underline-offset-4 [&_a:hover]:underline [&_h2]:pt-6 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:text-[#134E4A] [&_h3]:pt-3 [&_h3]:font-heading [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#134E4A] [&_li]:ml-6 [&_li]:list-disc [&_ul]:space-y-3">
                {children}
              </div>

              <section className="my-12 bg-[#F7F6F3] p-6 md:p-8" aria-labelledby={`${slug}-faq-heading`}>
                <div className="mb-6 flex items-center gap-3">
                  <HelpCircle className="h-7 w-7 text-[#134E4A]" aria-hidden="true" />
                  <h2 id={`${slug}-faq-heading`} className="font-heading text-2xl font-bold text-[#134E4A] md:text-3xl">
                    Häufige Fragen
                  </h2>
                </div>
                <div className="space-y-5">
                  {faqItems.map((item) => (
                    <div key={item.question}>
                      <h3 className="font-heading text-lg font-bold text-[#134E4A]">{item.question}</h3>
                      <p className="mt-2 leading-relaxed text-[#455A64]">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="border-t border-[#144E41]/15 pt-8" aria-labelledby={`${slug}-related-heading`}>
                <h2 id={`${slug}-related-heading`} className="font-heading text-2xl font-bold text-[#134E4A]">
                  Passende Informationen
                </h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {relatedLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="inline-flex min-h-12 items-center justify-between gap-3 border border-[#144E41]/15 px-4 py-3 font-semibold text-[#134E4A] hover:bg-[#F7F6F3] focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2"
                    >
                      {item.label}
                      <ArrowRight className="h-4 w-4 flex-none" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </section>

              <section className="mt-12 bg-[#134E4A] p-6 text-white md:p-8">
                <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">
                  Haushaltshilfe in Berlin anfragen
                </h2>
                <p className="mt-4 leading-relaxed text-white/90">
                  Wir erklären Ihnen persönlich, welche Unterstützung zu Ihrer Situation passt und wie die Abrechnung mit der Pflegekasse funktioniert.
                </p>
                <Link
                  href="/kontakt"
                  className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-[#134E4A] hover:bg-[#FFFBEB] focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2 focus:ring-offset-[#134E4A]"
                >
                  Unverbindlich Kontakt aufnehmen
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </section>
            </div>

            <aside className="h-fit space-y-6 lg:sticky lg:top-28">
              <div className="border border-[#144E41]/15 bg-[#F7F6F3] p-5">
                <h2 className="font-heading text-lg font-bold text-[#134E4A]">Kurz erklärt</h2>
                <ul className="mt-4 space-y-3 text-sm text-[#455A64]">
                  {quickFacts.map((fact) => (
                    <li key={fact} className="flex gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-none text-[#134E4A]" aria-hidden="true" />
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>

              {sources.length > 0 && (
                <div className="border border-[#144E41]/15 p-5">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-[#134E4A]" aria-hidden="true" />
                    <h2 className="font-heading text-lg font-bold text-[#134E4A]">Offizielle Quellen</h2>
                  </div>
                  <ul className="mt-4 space-y-3 text-sm">
                    {sources.map((source) => (
                      <li key={source.href}>
                        <a
                          href={source.href}
                          className="font-semibold text-[#0D6E64] underline-offset-4 hover:underline focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2"
                        >
                          {source.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </article>
    </>
  )
}
