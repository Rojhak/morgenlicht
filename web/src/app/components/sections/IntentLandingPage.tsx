import Link from 'next/link'
import { ArrowRight, Check, X } from 'lucide-react'
import { SITE, SITE_URL } from '@/config/site'
import { areaServedSchema, BUSINESS_ID, faqSchema, graph } from '@/lib/schema'
import { ContactActions } from '../site/ContactActions'
import { ContactBand } from '../site/ContactBand'
import { JsonLd } from '../site/JsonLd'
import { Kicker } from '../site/Kicker'
import { PageHero } from '../site/PageHero'

export interface IntentLandingPoint {
  title: string
  text: string
}

export interface IntentLandingFaq {
  question: string
  answer: string
}

export interface IntentLandingLink {
  href: string
  label: string
  lang?: string
}

export interface IntentLandingContent {
  slug: string
  lang?: 'de' | 'tr'
  serviceName: string
  breadcrumbName?: string
  kicker: string
  h1: string
  intro: string
  trustPoints: string[]
  benefitsTitle: string
  benefitsIntro: string
  benefits: IntentLandingPoint[]
  includedTitle: string
  included: string[]
  boundariesTitle: string
  boundaries: string[]
  financeTitle: string
  financeText: string
  financeLinkLabel: string
  processTitle: string
  process: IntentLandingPoint[]
  faqTitle: string
  faqs: IntentLandingFaq[]
  relatedTitle: string
  relatedLinks: IntentLandingLink[]
  ctaTitle: string
  ctaText: string
  ctaLabel: string
  phoneLabel?: string
}

const UI = {
  de: { home: 'Startseite', crumbs: 'Brotkrumennavigation', whatsapp: 'WhatsApp schreiben', contactLink: 'Alle Kontaktwege', phonePrefix: 'Anrufen' },
  tr: { home: 'Ana sayfa', crumbs: 'Sayfa yolu', whatsapp: 'WhatsApp ile yazın', contactLink: 'Tüm iletişim bilgileri (Almanca)', phonePrefix: 'Arayın' },
} as const

const textLink =
  'inline-flex min-h-12 items-center gap-2 text-lg font-bold text-forest underline decoration-sun decoration-2 underline-offset-4 hover:decoration-forest'

export function IntentLandingPage({ content }: { content: IntentLandingContent }) {
  const lang = content.lang ?? 'de'
  const ui = UI[lang]
  const pageUrl = `${SITE_URL}/${content.slug}`
  const idBase = content.slug.replace(/\//g, '-')

  const structuredData = graph(
    {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: content.serviceName,
      description: content.intro,
      url: pageUrl,
      inLanguage: lang === 'tr' ? 'tr-TR' : 'de-DE',
      serviceType: content.serviceName,
      provider: { '@id': BUSINESS_ID },
      areaServed: areaServedSchema,
      availableLanguage: ['de', 'tr', 'en'],
    },
    faqSchema(content.faqs),
  )

  return (
    <div lang={lang}>
      <JsonLd data={structuredData} />

      <PageHero
        crumbs={[{ name: content.breadcrumbName ?? content.serviceName, href: `/${content.slug}` }]}
        homeLabel={ui.home}
        breadcrumbLabel={ui.crumbs}
        kicker={content.kicker}
        title={content.h1}
        lead={<p>{content.intro}</p>}
        aside={
          <ul className="border-t border-line">
            {content.trustPoints.map((point) => (
              <li key={point} className="flex gap-3 border-b border-line py-4 text-lg leading-snug text-ink">
                <Check className="mt-0.5 h-5 w-5 flex-none text-forest" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        }
      >
        <ContactActions
          phoneLabel={content.phoneLabel ?? `${ui.phonePrefix}: ${SITE.phone.label}`}
          whatsappLabel={ui.whatsapp}
          contactLinkLabel={ui.contactLink}
        />
      </PageHero>

      <section aria-labelledby={`${idBase}-benefits`} className="bg-white px-5 py-14 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h2 id={`${idBase}-benefits`} className="font-heading text-3xl font-bold text-forest md:text-4xl">
              {content.benefitsTitle}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted md:text-xl">{content.benefitsIntro}</p>
          </div>
          <ol className="mt-10 grid gap-x-10 border-t border-line md:grid-cols-3">
            {content.benefits.map((benefit, index) => (
              <li key={benefit.title} className="border-b border-line py-6">
                <span className="font-heading text-base font-bold text-muted" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-heading text-xl font-bold text-forest">{benefit.title}</h3>
                <p className="mt-2 text-lg leading-relaxed text-muted">{benefit.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-label={`${content.includedTitle} / ${content.boundariesTitle}`} className="bg-cream px-5 py-14 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-heading text-2xl font-bold text-forest md:text-3xl">{content.includedTitle}</h2>
            <ul className="mt-6 border-t border-line">
              {content.included.map((item) => (
                <li key={item} className="flex gap-3 border-b border-line py-4 text-lg leading-snug text-ink">
                  <Check className="mt-0.5 h-5 w-5 flex-none text-forest" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-sun-soft p-6 md:p-8">
            <h2 className="font-heading text-2xl font-bold text-forest md:text-3xl">{content.boundariesTitle}</h2>
            <ul className="mt-6 space-y-4">
              {content.boundaries.map((item) => (
                <li key={item} className="flex gap-3 text-lg leading-snug text-ink">
                  <X className="mt-0.5 h-5 w-5 flex-none text-forest" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby={`${idBase}-finance`} className="bg-mint px-5 py-14 sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl">
          <Kicker>{lang === 'tr' ? 'Bakım sigortası' : 'Pflegekasse'}</Kicker>
          <h2 id={`${idBase}-finance`} className="mt-4 font-heading text-3xl font-bold text-forest">
            {content.financeTitle}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink">{content.financeText}</p>
          <Link href="/kosten" className={`mt-6 ${textLink}`} {...(lang === 'tr' ? { hrefLang: 'de' } : {})}>
            {content.financeLinkLabel}
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section aria-labelledby={`${idBase}-process`} className="bg-white px-5 py-14 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 id={`${idBase}-process`} className="font-heading text-3xl font-bold text-forest md:text-4xl">
            {content.processTitle}
          </h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {content.process.map((step, index) => (
              <li key={step.title} className="flex gap-4 md:block">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-forest font-bold text-white" aria-hidden="true">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-heading text-xl font-bold text-forest md:mt-4">{step.title}</h3>
                  <p className="mt-2 text-lg leading-relaxed text-muted">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby={`${idBase}-faq-title`} className="bg-sand px-5 py-14 sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 id={`${idBase}-faq-title`} className="font-heading text-3xl font-bold text-forest">
            {content.faqTitle}
          </h2>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {content.faqs.map((faq) => (
              <div key={faq.question} className="py-6">
                <h3 className="font-heading text-xl font-bold text-forest">{faq.question}</h3>
                <p className="mt-3 text-lg leading-relaxed text-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby={`${idBase}-related`} className="bg-white px-5 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 id={`${idBase}-related`} className="font-heading text-2xl font-bold text-forest">
            {content.relatedTitle}
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {content.relatedLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  lang={link.lang}
                  className="flex min-h-14 items-center justify-between gap-3 rounded-xl border border-line px-5 py-3 text-lg font-semibold text-forest transition hover:border-forest hover:bg-cream"
                >
                  {link.label}
                  <ArrowRight className="h-5 w-5 flex-none" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactBand title={content.ctaTitle} text={content.ctaText} lang={lang} headingId={`${idBase}-cta`} />
    </div>
  )
}
