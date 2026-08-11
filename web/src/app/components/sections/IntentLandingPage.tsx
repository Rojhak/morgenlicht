import Link from 'next/link'
import { ArrowRight, Check, HeartHandshake, Phone, ShieldCheck } from 'lucide-react'
import { serializeJsonLd } from '@/lib/security'

const SITE_URL = 'https://www.morgenlicht-alltagshilfe.de'

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
}

export interface IntentLandingContent {
  slug: string
  lang?: 'de' | 'tr'
  serviceName: string
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

export function IntentLandingPage({ content }: { content: IntentLandingContent }) {
  const pageUrl = `${SITE_URL}/${content.slug}`
  const phoneLabel = content.phoneLabel ?? 'Direkt anrufen: 030 235 930 28'

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: content.serviceName,
        description: content.intro,
        url: pageUrl,
        inLanguage: content.lang === 'tr' ? 'tr-TR' : 'de-DE',
        serviceType: content.serviceName,
        provider: { '@id': `${SITE_URL}/#business` },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Berlin-Kreuzberg' },
          { '@type': 'AdministrativeArea', name: 'Berlin-Neukölln' },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Morgenlicht', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: content.serviceName, item: pageUrl },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: content.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  }

  return (
    <article lang={content.lang ?? 'de'}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
      />

      <section className="bg-white px-6 pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex min-h-9 items-center gap-2 rounded-full border border-[#134E4A]/15 bg-[#F7F6F3] px-4 py-1.5 text-sm font-bold text-[#134E4A]">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            {content.kicker}
          </span>
          <h1 className="mx-auto mt-7 max-w-4xl font-heading text-3xl font-bold leading-tight text-[#134E4A] sm:text-4xl md:text-5xl">
            {content.h1}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#4B5563] md:text-xl">
            {content.intro}
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/kontakt"
              className="plausible-event-name=Kontaktklick inline-flex min-h-14 items-center justify-center rounded-xl bg-[#134E4A] px-8 text-lg font-bold text-white shadow-lg transition hover:bg-[#0F3F3C] focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2"
            >
              {content.ctaLabel}
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
            <a
              href="tel:03023593028"
              className="plausible-event-name=Telefonklick inline-flex min-h-14 items-center justify-center rounded-xl border-2 border-[#134E4A]/20 bg-white px-8 text-lg font-bold text-[#134E4A] transition hover:border-[#134E4A]/50 focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2"
            >
              <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
              {phoneLabel}
            </a>
          </div>

          <ul className="mx-auto mt-10 grid max-w-4xl gap-3 text-left sm:grid-cols-2">
            {content.trustPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 rounded-xl bg-[#F7F6F3] px-4 py-3 text-[#37474F]">
                <Check className="mt-0.5 h-5 w-5 flex-none text-[#134E4A]" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#F7F6F3] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold text-[#134E4A] md:text-4xl">{content.benefitsTitle}</h2>
            <p className="mt-5 text-lg leading-relaxed text-[#4B5563]">{content.benefitsIntro}</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {content.benefits.map((benefit) => (
              <section key={benefit.title} className="rounded-2xl border border-[#134E4A]/10 bg-white p-7 shadow-sm">
                <HeartHandshake className="h-8 w-8 text-[#134E4A]" aria-hidden="true" />
                <h3 className="mt-5 font-heading text-xl font-bold text-[#134E4A]">{benefit.title}</h3>
                <p className="mt-3 leading-relaxed text-[#4B5563]">{benefit.text}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-[#134E4A]/12 p-7 md:p-9">
            <h2 className="font-heading text-2xl font-bold text-[#134E4A]">{content.includedTitle}</h2>
            <ul className="mt-6 space-y-4">
              {content.included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#4B5563]">
                  <Check className="mt-0.5 h-5 w-5 flex-none text-[#134E4A]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-[#FFFBEB] p-7 md:p-9">
            <h2 className="font-heading text-2xl font-bold text-[#134E4A]">{content.boundariesTitle}</h2>
            <ul className="mt-6 space-y-4">
              {content.boundaries.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#4B5563]">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-[#134E4A]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#134E4A] px-6 py-16 text-white md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-3xl font-bold text-white">{content.financeTitle}</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/90">{content.financeText}</p>
          <Link
            href="/kosten"
            className="mt-7 inline-flex min-h-12 items-center font-bold text-[#FFD54F] underline decoration-2 underline-offset-4 focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2 focus:ring-offset-[#134E4A]"
          >
            {content.financeLinkLabel}
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-heading text-3xl font-bold text-[#134E4A] md:text-4xl">{content.processTitle}</h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {content.process.map((step, index) => (
              <li key={step.title} className="rounded-2xl bg-[#F7F6F3] p-7">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#134E4A] font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold text-[#134E4A]">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-[#4B5563]">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#F7F6F3] px-6 py-16 md:py-24" aria-labelledby={`${content.slug}-faq-title`}>
        <div className="mx-auto max-w-4xl">
          <h2 id={`${content.slug}-faq-title`} className="text-center font-heading text-3xl font-bold text-[#134E4A]">
            {content.faqTitle}
          </h2>
          <div className="mt-10 divide-y divide-[#134E4A]/15 border-y border-[#134E4A]/15">
            {content.faqs.map((faq) => (
              <section key={faq.question} className="py-6">
                <h3 className="font-heading text-xl font-bold text-[#134E4A]">{faq.question}</h3>
                <p className="mt-3 leading-relaxed text-[#4B5563]">{faq.answer}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-2xl font-bold text-[#134E4A]">{content.relatedTitle}</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {content.relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex min-h-14 items-center justify-between gap-3 rounded-xl border border-[#134E4A]/15 bg-white px-5 py-3 font-semibold text-[#134E4A] transition hover:bg-[#FFFBEB] focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2"
              >
                {link.label}
                <ArrowRight className="h-4 w-4 flex-none" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F6F3] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 text-center shadow-[0_10px_40px_rgba(0,0,0,0.08)] md:p-12">
          <h2 className="font-heading text-3xl font-bold text-[#134E4A]">{content.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#4B5563]">{content.ctaText}</p>
          <Link
            href="/kontakt"
            className="plausible-event-name=Kontaktklick mt-8 inline-flex min-h-14 items-center justify-center rounded-xl bg-[#134E4A] px-9 text-lg font-bold text-white shadow-lg transition hover:bg-[#0F3F3C] focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2"
          >
            {content.ctaLabel}
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </article>
  )
}
