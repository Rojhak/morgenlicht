import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { ContactBand } from '../components/site/ContactBand'
import { JsonLd } from '../components/site/JsonLd'
import { Kicker } from '../components/site/Kicker'
import { PageHero } from '../components/site/PageHero'
import { SunPortrait } from '../components/site/SunPortrait'
import { OFFICIAL_SOURCES, SITE, SITE_URL } from '@/config/site'
import { BUSINESS_ID, graph } from '@/lib/schema'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Über Morgenlicht Alltagshilfe Berlin | Asiye Duman',
  description:
    'Wer hinter Morgenlicht steht: Gründerin Asiye Duman, anerkanntes Angebot nach § 45a SGB XI, Sitz in Kreuzberg, Unterstützung auf Deutsch, Türkisch und Englisch.',
  path: '/ueber-uns',
})

const principles = [
  {
    title: 'Zuerst zuhören',
    text: 'Im Erstgespräch fragen wir nach Gewohnheiten, Sprache, Wünschen und Grenzen. Erst dann vereinbaren wir Aufgaben.',
  },
  {
    title: 'Möglichst feste Bezugspersonen',
    text: 'Es kann Überwindung kosten, eine fremde Person in die eigene Wohnung zu lassen. Deshalb planen wir auf Kontinuität.',
  },
  {
    title: 'Transparente Absprachen',
    text: 'Leistungen, Budget und mögliche Zusatzkosten sind vor Beginn klar. Ohne Ihre Zustimmung passiert nichts.',
  },
  {
    title: 'Selbstbestimmung',
    text: 'Wir unterstützen dort, wo Hilfe gewünscht ist. Entscheidungen bleiben bei der Person, die wir begleiten.',
  },
]

const facts: Array<[string, React.ReactNode]> = [
  ['Anbieter', SITE.legalName],
  ['Geschäftsführung', SITE.founder],
  ['Anerkennung', 'Angebot zur Unterstützung im Alltag nach § 45a SGB XI, anerkannt nach Berliner Landesrecht'],
  ['Abrechnung', `Institutionskennzeichen (IK) ${SITE.ik} für die Abrechnung mit Pflegekassen`],
  ['Handelsregister', `${SITE.register.court}, ${SITE.register.number}`],
  ['Geschäftsanschrift', `${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city} – kein Kundenempfang`],
  ['Einsatzgebiet', 'Berlin-Kreuzberg und Neukölln, Einsätze bei Ihnen zu Hause'],
  ['Sprachen', 'Deutsch, Türkisch, Englisch'],
]

const schema = graph(
  {
    '@type': 'AboutPage',
    '@id': `${SITE_URL}/ueber-uns#webpage`,
    url: `${SITE_URL}/ueber-uns`,
    name: 'Über Morgenlicht Alltagshilfe Berlin',
    inLanguage: 'de-DE',
    about: { '@id': BUSINESS_ID },
    mainEntity: { '@id': `${SITE_URL}/ueber-uns#asiye-duman` },
  },
  {
    '@type': 'Person',
    '@id': `${SITE_URL}/ueber-uns#asiye-duman`,
    name: SITE.founder,
    jobTitle: SITE.founderRole,
    image: `${SITE_URL}/images/asiye-duman.jpeg`,
    worksFor: { '@id': BUSINESS_ID },
  },
)

export default function UeberUnsPage() {
  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        crumbs={[{ name: 'Über uns', href: '/ueber-uns' }]}
        kicker="Über Morgenlicht"
        title="Alltagshilfe aus Kreuzberg – persönlich und verlässlich"
        lead={
          <p>
            Morgenlicht unterstützt ältere und pflegebedürftige Menschen dabei, ihren Alltag zu
            Hause möglichst selbstbestimmt zu gestalten – und entlastet Angehörige, die an
            zeitliche Grenzen stoßen.
          </p>
        }
      />

      <section aria-labelledby="gruenderin-title" className="bg-white px-5 py-14 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SunPortrait widthClass="max-w-sm" sizes="(max-width: 1023px) 90vw, 384px" priority />
          <div>
            <Kicker>{SITE.founderRole}</Kicker>
            <h2 id="gruenderin-title" className="mt-4 font-heading text-3xl font-bold text-forest md:text-4xl">
              {SITE.founder}
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink">
              <p>
                Mit Morgenlicht möchte ich ältere und pflegebedürftige Menschen dabei unterstützen,
                ihren Alltag zu Hause möglichst selbstbestimmt zu gestalten. Dabei gilt für mich:
                Der Mensch steht im Mittelpunkt.
              </p>
              <p>
                Oft sind es ganz praktische Dinge, die plötzlich schwerfallen: Einkäufe tragen, die
                Wohnung in Ordnung halten oder einen Termin allein bewältigen. Angehörige möchten
                helfen, stoßen aber selbst an Grenzen. Hier setzt Morgenlicht an – mit klar
                vereinbarter Unterstützung und Begleitung auf Augenhöhe.
              </p>
            </div>
            <blockquote className="mt-8 border-l-4 border-sun pl-5">
              <p className="font-heading text-xl font-semibold leading-snug text-forest">
                „Jeder Mensch verdient Unterstützung, die Würde und Respekt zeigt – genau das wollen wir jeden Tag bei Morgenlicht leben.“
              </p>
              <footer className="mt-2 text-base text-muted">— {SITE.founder}</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section aria-labelledby="grundsaetze-title" className="bg-cream px-5 py-14 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 id="grundsaetze-title" className="font-heading text-3xl font-bold text-forest md:text-4xl">
            Wie wir arbeiten
          </h2>
          <ol className="mt-10 grid gap-x-12 border-t border-line md:grid-cols-2">
            {principles.map((principle, index) => (
              <li key={principle.title} className="grid grid-cols-[3rem_1fr] gap-2 border-b border-line py-6">
                <span className="font-heading text-lg font-bold text-muted" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-heading text-xl font-bold text-forest">{principle.title}</h3>
                  <p className="mt-2 text-lg leading-relaxed text-muted">{principle.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="fakten-title" className="bg-white px-5 py-14 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <h2 id="fakten-title" className="font-heading text-3xl font-bold text-forest md:text-4xl">
              Morgenlicht auf einen Blick
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Für die Anerkennung ist nach § 45a SGB XI unter anderem ein Konzept zur
              Qualitätssicherung und zur Schulung der Helfenden erforderlich. Nur für anerkannte
              Angebote kann der Entlastungsbetrag der Pflegekasse genutzt werden.
            </p>
            <div className="mt-6 flex flex-col items-start">
              <a
                href={SITE.hilfelotseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 text-lg font-bold text-forest underline decoration-sun decoration-2 underline-offset-4"
              >
                Eintrag beim Hilfelotsen Berlin prüfen
                <ExternalLink className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">(öffnet in neuem Fenster)</span>
              </a>
              <a
                href={OFFICIAL_SOURCES.bmgEntlastung.href}
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 text-lg font-semibold text-forest underline decoration-forest/30 underline-offset-4"
              >
                Was anerkannte Angebote leisten (BMG)
              </a>
            </div>
          </div>
          <dl className="border-t border-line">
            {facts.map(([term, value]) => (
              <div key={term} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[12rem_1fr] sm:gap-6">
                <dt className="text-base font-semibold text-muted">{term}</dt>
                <dd className="text-lg text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-label="Weiterlesen" className="border-t border-line bg-cream px-5 py-12 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:gap-10">
          <Link href="/leistungen" className="inline-flex min-h-12 items-center gap-2 text-lg font-bold text-forest underline decoration-sun decoration-2 underline-offset-4">
            Unsere Leistungen
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
          <Link href="/kosten" className="inline-flex min-h-12 items-center gap-2 text-lg font-bold text-forest underline decoration-sun decoration-2 underline-offset-4">
            Kosten und Pflegekasse
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
          <Link href="/tuerkischsprachige-alltagshilfe-berlin" className="inline-flex min-h-12 items-center gap-2 text-lg font-bold text-forest underline decoration-sun decoration-2 underline-offset-4">
            Türkischsprachige Alltagshilfe
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <ContactBand title="Lernen Sie uns kennen" text="Wir freuen uns auf ein unverbindliches Gespräch. Rufen Sie an oder schreiben Sie uns per WhatsApp." />
    </>
  )
}
