import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, X } from 'lucide-react'
import { ContactBand } from '../components/site/ContactBand'
import { JsonLd } from '../components/site/JsonLd'
import { PageHero } from '../components/site/PageHero'
import { SITE, SITE_URL } from '@/config/site'
import { areaServedSchema, BUSINESS_ID, graph } from '@/lib/schema'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Leistungen der Alltagshilfe in Berlin | Morgenlicht',
  description:
    'Haushaltshilfe, Einkauf, Begleitung zu Terminen, Alltagsorganisation und soziale Begleitung für Senioren in Kreuzberg und Neukölln. Anerkannt nach § 45a SGB XI.',
  path: '/leistungen',
})

interface ServiceItem {
  title: string
  desc: string
}

interface ServiceArea {
  id: string
  title: string
  summary: string
  imageSrc?: string
  imageAlt?: string
  items: ServiceItem[]
  detailLink?: { href: string; label: string }
}

const serviceAreas: ServiceArea[] = [
  {
    id: 'haushalt',
    title: 'Haushalt',
    summary:
      'Hilfe bei Aufgaben, die im Haushalt schwerfallen – im vereinbarten Umfang und so, wie Sie es gewohnt sind.',
    imageSrc: '/images/hero_active_senior.jpg',
    imageAlt: 'Eine Alltagshilfe und eine ältere Frau bereiten gemeinsam eine Mahlzeit zu',
    items: [
      { title: 'Wohnungsreinigung', desc: 'Staubsaugen, Wischen und Staubwischen in den Wohnräumen.' },
      { title: 'Küche und Bad', desc: 'Arbeitsflächen, Spüle und Sanitärbereich reinigen.' },
      { title: 'Einfache Mahlzeiten', desc: 'Gemeinsam kochen, Geschirr spülen, Kühlschrank im Blick behalten.' },
      { title: 'Wäsche und Betten', desc: 'Waschen, Bügeln, Zusammenlegen und Betten frisch beziehen.' },
      { title: 'Fenster und Gardinen', desc: 'Fenster putzen, Gardinen abnehmen, waschen und aufhängen.' },
      { title: 'Ordnung', desc: 'Aufräumen, Müll entsorgen, Pflanzen gießen, Balkon in Ordnung halten.' },
    ],
    detailLink: { href: '/haushaltshilfe-pflegegrad-berlin', label: 'Haushaltshilfe mit Pflegegrad: Ablauf und Finanzierung' },
  },
  {
    id: 'einkauf',
    title: 'Einkauf und Erledigungen',
    summary:
      'Wir übernehmen Wege, die zu anstrengend geworden sind – oder begleiten Sie, wenn Sie selbst einkaufen möchten.',
    imageSrc: '/images/hero_helping_hand.jpg',
    imageAlt: 'Eine Begleitperson unterstützt eine ältere Person beim Einkauf auf dem Markt',
    items: [
      { title: 'Wocheneinkauf', desc: 'Einkaufsliste planen, einkaufen und Vorräte einräumen.' },
      { title: 'Apotheke', desc: 'Rezepte einlösen und Medikamente abholen.' },
      { title: 'Botengänge', desc: 'Post, Bank, Behörde oder andere Dienstleister im Kiez.' },
      { title: 'Besorgungen', desc: 'Drogerie- und Haushaltsartikel kaufen.' },
      { title: 'Einkaufsbegleitung', desc: 'Gemeinsam zum Supermarkt oder Wochenmarkt, mit Hilfe beim Tragen.' },
    ],
  },
  {
    id: 'begleitung',
    title: 'Begleitung und Mobilität',
    summary:
      'Sicher unterwegs zu Terminen, Behörden oder Verabredungen – mit jemandem an Ihrer Seite.',
    imageSrc: '/images/hero_daily_moments.jpg',
    imageAlt: 'Eine Begleitperson betrachtet gemeinsam mit einem älteren Mann ein Fotoalbum',
    items: [
      { title: 'Arzt und Therapie', desc: 'Begleitung zu Arztpraxis, Physiotherapie oder anderen Behandlungen.' },
      { title: 'Behördengänge', desc: 'Begleitung zum Bürgeramt, zur Kranken- oder Pflegekasse.' },
      { title: 'Dienstleister', desc: 'Zur Bank, zum Friseur oder zur Fußpflege.' },
      { title: 'Termine vorbereiten', desc: 'Unterlagen heraussuchen und den Weg gemeinsam planen.' },
      { title: 'Besuche und Freizeit', desc: 'Zu Familie, Freunden oder Freizeitangeboten.' },
      { title: 'Unterwegs mit Bus und Bahn', desc: 'Orientierung und sichere Begleitung im Straßenverkehr und ÖPNV.' },
    ],
    detailLink: { href: '/arztbegleitung-senioren-berlin', label: 'Arztbegleitung für Senioren: was dazugehört' },
  },
  {
    id: 'alltag',
    title: 'Alltag und Organisation',
    summary:
      'Den Überblick behalten: Post, Formulare und Termine gemeinsam ordnen – ohne Ihnen Entscheidungen abzunehmen.',
    items: [
      { title: 'Post und Dokumente', desc: 'Briefe gemeinsam öffnen, sichten und sortieren.' },
      { title: 'Schriftverkehr', desc: 'Einfache Briefe oder E-Mails zusammen verfassen.' },
      { title: 'Formulare', desc: 'Hilfe beim Ausfüllen von Formularen, etwa für Pflegekasse oder Behörden.' },
      { title: 'Fristen und Termine', desc: 'Wichtige Termine notieren und rechtzeitig daran erinnern.' },
      { title: 'Smartphone und Tablet', desc: 'Hilfe bei Messengern, Videoanrufen und anderen Apps.' },
      { title: 'Telefonate', desc: 'Unterstützung bei wichtigen Anrufen und bei der Planung von Terminen.' },
      { title: 'Tagesstruktur', desc: 'Den Tag gemeinsam planen und an Wichtiges erinnern.' },
      { title: 'Besuche vorbereiten', desc: 'Vorbereitung auf Pflegedienst oder Begutachtung durch den Medizinischen Dienst.' },
      { title: 'Wohnung in Abwesenheit', desc: 'Blumen gießen und Briefkasten leeren, wenn Sie nicht zu Hause sind.' },
    ],
  },
  {
    id: 'soziales',
    title: 'Soziale Teilhabe',
    summary:
      'Gesellschaft, Bewegung und Kontakte: gemeinsame Zeit, die den Alltag lebendiger macht.',
    imageSrc: '/images/seniors_hero.jpg',
    imageAlt: 'Ältere Menschen verbringen gemeinsam Zeit im Wohnzimmer',
    items: [
      { title: 'Gesellschaft', desc: 'Gespräche, Vorlesen, Zeitung lesen oder Gesellschaftsspiele.' },
      { title: 'Spaziergänge', desc: 'An die frische Luft, im eigenen Tempo und in Ihrem Kiez.' },
      { title: 'Kultur', desc: 'Begleitung zu Theater, Konzert oder Ausflug.' },
      { title: 'Kontakte pflegen', desc: 'Begleitung zu Seniorentreffs, Nachbarschaftscafés oder Besuchen.' },
      { title: 'Angebote finden', desc: 'Passende Angebote im Kiez suchen und auf Wunsch gemeinsam hingehen.' },
    ],
    detailLink: { href: '/soziale-begleitung-senioren-berlin', label: 'Soziale Begleitung für Senioren im Detail' },
  },
]

const notIncluded = [
  'Medizinische Behandlungspflege, zum Beispiel Spritzen, Verbandswechsel oder Medikamentengabe durch Fachpflege',
  'Diagnosen, medizinische oder rechtliche Beratung',
  'Beeidigte Übersetzungen, etwa bei Arztgesprächen oder Behörden',
  'Entscheidungen ohne die Zustimmung der unterstützten Person',
]

const schema = graph({
  '@type': 'Service',
  '@id': `${SITE_URL}/leistungen#service`,
  name: 'Alltagshilfe und Haushaltshilfe für Senioren in Berlin',
  serviceType: 'Angebot zur Unterstützung im Alltag nach § 45a SGB XI',
  url: `${SITE_URL}/leistungen`,
  provider: { '@id': BUSINESS_ID },
  areaServed: areaServedSchema,
  availableLanguage: ['de', 'tr', 'en'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Leistungsbereiche',
    itemListElement: serviceAreas.map((area) => ({
      '@type': 'OfferCatalog',
      name: area.title,
      url: `${SITE_URL}/leistungen#${area.id}`,
      itemListElement: area.items.map((item) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: item.title, description: item.desc },
      })),
    })),
  },
  offers: {
    '@type': 'Offer',
    price: '35.50',
    priceCurrency: 'EUR',
    description: 'Stundensatz. Finanzierung über den Entlastungsbetrag der Pflegekasse ab Pflegegrad 1 möglich.',
  },
})

export default function LeistungenPage() {
  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        crumbs={[{ name: 'Leistungen', href: '/leistungen' }]}
        kicker="Anerkannte Unterstützung im Alltag nach § 45a SGB XI"
        title="Leistungen der Alltagshilfe: Haushalt, Einkauf, Begleitung"
        lead={
          <p>
            Morgenlicht unterstützt ältere und pflegebedürftige Menschen in Kreuzberg und Neukölln
            in fünf Bereichen. Was genau übernommen wird, vereinbaren wir vor dem ersten Einsatz
            gemeinsam mit Ihnen.
          </p>
        }
        aside={
          <dl className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line">
            {[
              ['Stundensatz', `${SITE.hourlyRate}, Anfahrt inklusive`],
              ['Finanzierung', 'Ab Pflegegrad 1 bis zu 131 € im Monat über die Pflegekasse'],
              ['Einsatzgebiet', 'Berlin-Kreuzberg und Neukölln'],
              ['Sprachen', 'Deutsch, Türkisch, Englisch'],
            ].map(([term, value]) => (
              <div key={term} className="bg-white px-5 py-4">
                <dt className="text-base text-muted">{term}</dt>
                <dd className="mt-0.5 text-lg font-semibold text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        }
      >
        <nav aria-labelledby="leistungen-sprungmarken">
          <h2 id="leistungen-sprungmarken" className="text-base font-bold text-forest">
            Auf dieser Seite
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {serviceAreas.map((area) => (
              <li key={area.id}>
                <a
                  href={`#${area.id}`}
                  className="inline-flex min-h-12 items-center rounded-full border border-forest/30 bg-white px-5 text-base font-semibold text-forest transition hover:border-forest hover:bg-sun-soft"
                >
                  {area.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      {serviceAreas.map((area, index) => (
        <section
          key={area.id}
          id={area.id}
          aria-labelledby={`${area.id}-title`}
          className={`scroll-mt-24 px-5 py-14 sm:px-6 md:py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-cream'}`}
        >
          <div className="mx-auto max-w-6xl">
            <div className={`grid gap-8 ${area.imageSrc ? 'md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] md:items-center md:gap-12' : ''}`}>
              <div>
                <p className="font-heading text-base font-bold text-muted" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')} / {String(serviceAreas.length).padStart(2, '0')}
                </p>
                <h2 id={`${area.id}-title`} className="mt-2 font-heading text-3xl font-bold text-forest md:text-4xl">
                  {area.title}
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">{area.summary}</p>
              </div>
              {area.imageSrc && (
                <div className="relative mx-auto aspect-[4/3] w-full max-w-sm overflow-hidden rounded-2xl bg-sand md:max-w-none">
                  <Image
                    src={area.imageSrc}
                    alt={area.imageAlt ?? ''}
                    fill
                    sizes="(max-width: 767px) 90vw, 30vw"
                    className="object-cover"
                  />
                </div>
              )}
            </div>

            <ul className="mt-10 grid border-t border-line sm:grid-cols-2 lg:grid-cols-3">
              {area.items.map((item) => (
                <li key={item.title} className="flex gap-3 border-b border-line py-5 pr-6">
                  <Check className="mt-1 h-5 w-5 flex-none text-forest" aria-hidden="true" />
                  <div>
                    <h3 className="font-heading text-lg font-bold text-forest">{item.title}</h3>
                    <p className="mt-1 text-base leading-relaxed text-muted md:text-lg">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
              {area.detailLink && (
                <Link
                  href={area.detailLink.href}
                  className="inline-flex min-h-12 items-center gap-2 text-lg font-bold text-forest underline decoration-sun decoration-2 underline-offset-4 hover:decoration-forest"
                >
                  {area.detailLink.label}
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              )}
              <a
                href={SITE.phone.href}
                className="plausible-event-name=Telefonklick inline-flex min-h-12 items-center gap-2 text-lg font-semibold text-forest underline decoration-forest/30 underline-offset-4 hover:decoration-forest"
              >
                Zu „{area.title}“ beraten lassen: {SITE.phone.label}
              </a>
            </div>
          </div>
        </section>
      ))}

      <section aria-labelledby="leistungen-ratgeber" className="border-t border-line bg-white px-5 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 id="leistungen-ratgeber" className="font-heading text-2xl font-bold text-forest">
            Ratgeber zu Finanzierung und Alltag
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: '/blog/haushaltshilfe-pflegegrad-pflegekasse', label: 'Haushaltshilfe bei Pflegegrad: Was zahlt die Pflegekasse?' },
              { href: '/blog/pflegesachleistung-haushaltshilfe-umwandlungsanspruch', label: 'Ab Pflegegrad 2: doppelt so viel Haushaltshilfe' },
              { href: '/blog/seniorenhilfe-zuhause-berlin', label: 'Seniorenhilfe zu Hause: Welche Unterstützung passt?' },
              { href: '/blog/sturzpraevention-im-alltag', label: 'Sturzprävention: 7 Tipps für mehr Sicherheit' },
            ].map((guide) => (
              <li key={guide.href}>
                <Link
                  href={guide.href}
                  className="flex h-full min-h-14 items-center justify-between gap-3 rounded-xl border border-line px-4 py-3 text-lg font-semibold leading-snug text-forest transition hover:border-forest hover:bg-cream"
                >
                  {guide.label}
                  <ArrowRight className="h-5 w-5 flex-none" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="grenzen-title" className="bg-sun-soft px-5 py-14 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <h2 id="grenzen-title" className="font-heading text-3xl font-bold text-forest">
              Was nicht dazugehört
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink">
              Morgenlicht ist kein Pflegedienst. Für medizinische Pflege sind ambulante
              Pflegedienste zuständig. Wenn Sie beides brauchen, lassen sich Pflegedienst und
              Alltagshilfe gut kombinieren.
            </p>
            <Link
              href="/blog/alltagshilfe-oder-haushaltshilfe-unterschied"
              className="mt-5 inline-flex min-h-12 items-center gap-2 text-lg font-bold text-forest underline decoration-forest/40 decoration-2 underline-offset-4 hover:decoration-forest"
            >
              Alltagshilfe, Haushaltshilfe, Pflegedienst: der Unterschied
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
          <ul className="border-t border-forest/20">
            {notIncluded.map((item) => (
              <li key={item} className="flex gap-3 border-b border-forest/20 py-4 text-lg text-ink">
                <X className="mt-1 h-5 w-5 flex-none text-forest" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactBand
        title="Welche Unterstützung passt zu Ihnen?"
        text="Erzählen Sie uns kurz, wobei Sie Hilfe wünschen. Wir sagen Ihnen offen, was möglich ist, wie oft wir kommen können und was es kostet."
      />
    </>
  )
}
