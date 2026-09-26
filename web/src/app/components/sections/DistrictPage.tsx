import Link from 'next/link'
import { ArrowRight, Check, MapPin } from 'lucide-react'
import { SITE, SITE_URL } from '@/config/site'
import { BUSINESS_ID, faqSchema, graph } from '@/lib/schema'
import { ContactActions } from '../site/ContactActions'
import { ContactBand } from '../site/ContactBand'
import { JsonLd } from '../site/JsonLd'
import { Kicker } from '../site/Kicker'
import { PageHero } from '../site/PageHero'

export interface DistrictContent {
  slug: string
  district: string
  kicker: string
  h1: string
  intro: string
  kiezParagraph: string
  landmarks: string[]
  localPhrase: string
  neighboringDistricts: string[]
}

const services = [
  { title: 'Haushaltshilfe', desc: 'Reinigung, Wäsche, Küche und Bad – im vereinbarten Umfang.', href: '/haushaltshilfe-pflegegrad-berlin' },
  { title: 'Einkauf und Erledigungen', desc: 'Wocheneinkauf, Apotheke und Post – erledigt oder gemeinsam unterwegs.', href: '/leistungen#einkauf' },
  { title: 'Begleitung zu Terminen', desc: 'Zur Arztpraxis, zur Behörde oder zum Café um die Ecke.', href: '/arztbegleitung-senioren-berlin' },
  { title: 'Alltag und Organisation', desc: 'Briefe, Termine und Telefonate gemeinsam im Blick behalten.', href: '/leistungen#alltag' },
  { title: 'Soziale Begleitung', desc: 'Spaziergänge, Gespräche und Kultur – gegen Einsamkeit.', href: '/soziale-begleitung-senioren-berlin' },
]

function districtSlug(name: string) {
  return `/berlin-${name.toLowerCase().replace('ö', 'oe').replace('ü', 'ue').replace('ä', 'ae')}`
}

export function DistrictPage({ content }: { content: DistrictContent }) {
  const pageUrl = `${SITE_URL}/${content.slug}`
  const faqItems = [
    {
      question: `Zahlt die Pflegekasse eine Haushaltshilfe in ${content.district}?`,
      answer: `Menschen mit Pflegegrad 1 bis 5, die zu Hause leben, können den Entlastungsbetrag von bis zu 131 € im Monat für anerkannte Angebote zur Unterstützung im Alltag nutzen. Dazu gehören auch Hilfen im Haushalt. Morgenlicht ist als solches Angebot nach § 45a SGB XI anerkannt.`,
    },
    {
      question: `Welche Aufgaben übernimmt eine Haushaltshilfe in ${content.district}?`,
      answer:
        'Typisch sind Reinigung, Wäschepflege, Betten beziehen, einfache Mahlzeiten, Einkauf und Apothekengänge. Der genaue Umfang wird persönlich vereinbart.',
    },
    {
      question: 'Muss ich bei Morgenlicht in Vorkasse gehen?',
      answer:
        'Wenn Pflegegrad, verfügbares Budget und die nötigen Unterlagen vorliegen, kann eine Direktabrechnung mit der Pflegekasse vereinbart werden. Die Voraussetzungen klären wir vor Beginn.',
    },
    {
      question: `Gibt es türkischsprachige Seniorenhilfe in ${content.district}?`,
      answer:
        'Ja. Morgenlicht berät und unterstützt auf Deutsch, Türkisch und Englisch. Welche Sprache bei den Einsätzen möglich ist, prüfen wir bei der Anfrage.',
    },
  ]

  const schema = graph(
    {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: `Haushaltshilfe und Alltagshilfe in Berlin-${content.district}`,
      description: content.intro,
      url: pageUrl,
      serviceType: ['Haushaltshilfe', 'Alltagshilfe', 'Seniorenhilfe', 'Angebot zur Unterstützung im Alltag'],
      provider: { '@id': BUSINESS_ID },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: `Berlin-${content.district}`,
        containedInPlace: { '@type': 'City', name: 'Berlin' },
      },
      availableLanguage: ['de', 'tr', 'en'],
    },
    faqSchema(faqItems),
  )

  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        crumbs={[{ name: `Berlin-${content.district}`, href: `/${content.slug}` }]}
        kicker={content.kicker}
        title={content.h1}
        lead={<p>{content.intro}</p>}
        aside={
          <div className="rounded-2xl border-t-4 border-sun bg-white p-6 shadow-[0_10px_40px_rgba(19,78,74,0.08)]">
            <h2 className="flex items-center gap-2 font-heading text-lg font-bold text-forest">
              <MapPin className="h-5 w-5" aria-hidden="true" />
              Auf einen Blick
            </h2>
            <ul className="mt-4 space-y-3 text-lg leading-snug text-ink">
              {[
                `Einsätze bei Ihnen zu Hause in ${content.district}`,
                'Ab Pflegegrad 1 über die Pflegekasse finanzierbar',
                `${SITE.hourlyRate} pro Stunde, Anfahrt inklusive`,
                'Deutsch, Türkisch, Englisch',
              ].map((fact) => (
                <li key={fact} className="flex gap-3">
                  <Check className="mt-0.5 h-5 w-5 flex-none text-forest" aria-hidden="true" />
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        }
      >
        <ContactActions />
      </PageHero>

      <section aria-labelledby={`${content.slug}-kiez`} className="bg-white px-5 py-14 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Kicker>{content.district}</Kicker>
            <h2 id={`${content.slug}-kiez`} className="mt-4 font-heading text-3xl font-bold text-forest md:text-4xl">
              Unterwegs in Ihrem Kiez
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink">{content.kiezParagraph}</p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Ob Ihre Adresse und der gewünschte Termin passen, klären wir im Erstgespräch.
            </p>
          </div>
          <ul className="border-t border-line">
            {content.landmarks.map((landmark) => (
              <li key={landmark} className="flex gap-3 border-b border-line py-4 text-lg leading-snug text-ink">
                <Check className="mt-0.5 h-5 w-5 flex-none text-forest" aria-hidden="true" />
                {landmark}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby={`${content.slug}-services`} className="bg-cream px-5 py-14 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 id={`${content.slug}-services`} className="font-heading text-3xl font-bold text-forest md:text-4xl">
            Haushaltshilfe und Seniorenhilfe in {content.district}
          </h2>
          <ul className="mt-8 grid gap-x-10 border-t border-line md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service.title} className="border-b border-line py-6">
                <h3 className="font-heading text-xl font-bold text-forest">{service.title}</h3>
                <p className="mt-2 text-lg leading-relaxed text-muted">{service.desc}</p>
                <Link href={service.href} className="mt-2 inline-flex min-h-11 items-center gap-2 font-semibold text-forest underline decoration-forest/30 underline-offset-4 hover:decoration-forest">
                  Mehr zu {service.title}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby={`${content.slug}-finance`} className="bg-mint px-5 py-14 sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 id={`${content.slug}-finance`} className="font-heading text-3xl font-bold text-forest">
            Über die Pflegekasse finanzierbar ab Pflegegrad 1
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink">
            Nutzen Sie den Entlastungsbetrag von bis zu 131 € im Monat nach § 45b SGB XI für
            anerkannte Alltagshilfe in {content.district}. Bei erfüllten Voraussetzungen rechnen
            wir direkt mit Ihrer Pflegekasse ab.
          </p>
          <Link href="/kosten" className="mt-6 inline-flex min-h-12 items-center gap-2 text-lg font-bold text-forest underline decoration-sun decoration-2 underline-offset-4">
            Kosten und Abrechnung erklärt
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section aria-labelledby={`${content.slug}-faq-heading`} className="bg-white px-5 py-14 sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 id={`${content.slug}-faq-heading`} className="font-heading text-3xl font-bold text-forest">
            Häufige Fragen zur Haushaltshilfe in {content.district}
          </h2>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {faqItems.map((item) => (
              <div key={item.question} className="py-6">
                <h3 className="font-heading text-xl font-bold text-forest">{item.question}</h3>
                <p className="mt-3 text-lg leading-relaxed text-muted">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby={`${content.slug}-more`} className="border-t border-line bg-cream px-5 py-12 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <h2 id={`${content.slug}-more`} className="font-heading text-2xl font-bold text-forest">
              Beratung in Ihrer Sprache
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-muted">
              Wir beraten auf Deutsch, Türkisch und Englisch.
            </p>
            <p lang="tr" className="mt-3 text-lg leading-relaxed text-ink">
              {content.localPhrase}
            </p>
            <Link href="/tr/berlin-yasli-gunluk-yasam-destegi" lang="tr" className="mt-3 inline-flex min-h-12 items-center gap-2 text-lg font-bold text-forest underline decoration-sun decoration-2 underline-offset-4">
              Türkçe bilgi
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-forest">Weiterlesen</h2>
            <ul className="mt-3">
              {content.neighboringDistricts.map((district) => (
                <li key={district}>
                  <Link href={districtSlug(district)} className="inline-flex min-h-12 items-center gap-2 text-lg font-semibold text-forest underline decoration-forest/30 underline-offset-4 hover:decoration-forest">
                    Alltagshilfe in {district}
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog/haushaltshilfe-kreuzberg-neukoelln" className="inline-flex min-h-12 items-center gap-2 text-lg font-semibold text-forest underline decoration-forest/30 underline-offset-4 hover:decoration-forest">
                  Ratgeber: Haushaltshilfe in Kreuzberg und Neukölln
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link href="/blog/alltagshilfe-oder-haushaltshilfe-unterschied" className="inline-flex min-h-12 items-center gap-2 text-lg font-semibold text-forest underline decoration-forest/30 underline-offset-4 hover:decoration-forest">
                  Alltagshilfe oder Haushaltshilfe?
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <ContactBand title={`Alltagshilfe in ${content.district} anfragen`} headingId={`${content.slug}-cta`} />
    </>
  )
}
