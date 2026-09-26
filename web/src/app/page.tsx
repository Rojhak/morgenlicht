import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, ExternalLink, MapPin } from 'lucide-react'
import { FAQSection } from '@/app/components/sections/FAQSection'
import { ContactActions } from '@/app/components/site/ContactActions'
import { ContactBand } from '@/app/components/site/ContactBand'
import { JsonLd } from '@/app/components/site/JsonLd'
import { Kicker } from '@/app/components/site/Kicker'
import { SunPortrait } from '@/app/components/site/SunPortrait'
import { SITE, SITE_URL } from '@/config/site'
import { homeFaqs } from '@/content/homeFaqs'
import { faqSchema, graph } from '@/lib/schema'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Alltagshilfe Berlin mit Pflegegrad | Morgenlicht',
  description:
    'Alltagshilfe für Senioren in Kreuzberg und Neukölln: Haushalt, Einkauf, Begleitung. Anerkannt nach § 45a SGB XI, ab Pflegegrad 1 über die Pflegekasse.',
  path: '/',
  languages: {
    'de-DE': `${SITE_URL}/`,
    'x-default': `${SITE_URL}/`,
  },
})

const textLink =
  'inline-flex min-h-12 items-center gap-2 text-lg font-bold text-forest underline decoration-sun decoration-2 underline-offset-4 hover:decoration-forest'

const audiences = [
  'Menschen mit Pflegegrad 1 bis 5, die zu Hause leben',
  'Angehörige, die Entlastung im Alltag suchen',
  `Ohne Pflegegrad als Privatleistung (${SITE.hourlyRate} pro Stunde)`,
]

const services = [
  {
    title: 'Haushaltshilfe',
    description: 'Reinigung, Wäsche, Betten beziehen und einfache Mahlzeiten – im vereinbarten Umfang.',
    href: '/haushaltshilfe-pflegegrad-berlin',
    linkLabel: 'Haushaltshilfe mit Pflegegrad',
  },
  {
    title: 'Einkauf und Erledigungen',
    description: 'Wocheneinkauf, Apotheke, Post oder Bank – allein erledigt oder gemeinsam unterwegs.',
    href: '/leistungen#einkauf',
    linkLabel: 'Einkaufshilfe im Überblick',
  },
  {
    title: 'Begleitung zu Arztterminen',
    description: 'Auf dem Weg, im Wartezimmer und bei der Organisation rund um den Termin.',
    href: '/arztbegleitung-senioren-berlin',
    linkLabel: 'Arztbegleitung für Senioren',
  },
  {
    title: 'Alltag und Struktur',
    description: 'Post sortieren, Termine im Blick behalten, Formulare gemeinsam ausfüllen.',
    href: '/leistungen#alltag',
    linkLabel: 'Hilfe bei der Alltagsorganisation',
  },
  {
    title: 'Soziale Begleitung',
    description: 'Gespräche, Spaziergänge und gemeinsame Aktivitäten – gegen Einsamkeit im Alltag.',
    href: '/soziale-begleitung-senioren-berlin',
    linkLabel: 'Soziale Begleitung für Senioren',
  },
]

const steps = [
  ['Anrufen oder schreiben', `Telefon ${SITE.phone.label} oder WhatsApp. Name und Anliegen genügen für den Anfang.`],
  ['Bedarf und Budget klären', 'Wir besprechen Wohnort, Aufgaben, Sprache, Häufigkeit und ob ein Pflegegrad vorliegt.'],
  ['Unterstützung vereinbaren', 'Erst nach klarer Absprache zu Umfang, Termin und Kosten wird der erste Einsatz geplant.'],
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={graph(faqSchema(homeFaqs, `${SITE_URL}/#faq`))} />

      <section aria-labelledby="hero-title" className="sunrise overflow-hidden border-b border-line bg-cream px-5 pb-14 pt-8 sm:px-6 md:pb-20 md:pt-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16">
          <div>
            <Kicker>Anerkannt nach § 45a SGB XI · Kreuzberg und Neukölln</Kicker>

            <h1 id="hero-title" className="mt-5 max-w-3xl font-heading text-[2.1rem] font-bold leading-[1.12] text-forest sm:text-5xl lg:text-[3.4rem]">
              Alltagshilfe zu Hause in Kreuzberg und Neukölln
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink md:text-xl">
              Wir unterstützen ältere und pflegebedürftige Menschen bei Haushalt, Einkauf,
              Arztterminen und im Alltag – auf Deutsch, Türkisch oder Englisch und möglichst
              immer mit derselben Person.
            </p>

            <p className="mt-4 max-w-2xl border-l-4 border-sun pl-4 text-lg leading-relaxed text-muted">
              <strong className="text-forest">Ab Pflegegrad 1 bis zu 131 € im Monat über die Pflegekasse.</strong>{' '}
              Bei erfüllten Voraussetzungen rechnen wir direkt mit ihr ab.
            </p>

            <ContactActions className="mt-8" />
            <p className="mt-3 text-base text-muted">
              Erstgespräch kostenfrei · telefonisch erreichbar {SITE.hours.label}
            </p>
          </div>

          <div className="mx-auto w-full max-w-xl">
            <div className="grid h-[320px] grid-cols-[1.05fr_0.95fr] grid-rows-2 gap-3 sm:h-[440px] lg:h-[500px]">
              <div className="relative row-span-2 overflow-hidden rounded-2xl bg-white">
                <Image
                  src="/images/hero_helping_hand.jpg"
                  alt="Eine Begleitperson reicht einer älteren Person beim Einkauf auf dem Markt die Hand"
                  fill
                  priority
                  sizes="(max-width: 1023px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-white">
                <Image
                  src="/images/hero_daily_moments.jpg"
                  alt="Eine Begleitperson betrachtet mit einem älteren Mann ein Fotoalbum"
                  fill
                  sizes="(max-width: 1023px) 45vw, 20vw"
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-white">
                <Image
                  src="/images/hero_active_senior.jpg"
                  alt="Eine Alltagsbegleiterin und eine ältere Frau bereiten gemeinsam in der Küche etwas zu"
                  fill
                  sizes="(max-width: 1023px) 45vw, 20vw"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="mt-3 text-sm text-muted">Symbolbilder</p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-line pt-8">
          <h2 className="font-heading text-lg font-bold text-forest">Für wen ist Morgenlicht da?</h2>
          <ul className="mt-4 grid gap-3 text-lg text-ink md:grid-cols-3 md:gap-8">
            {audiences.map((audience) => (
              <li key={audience} className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-none text-forest" aria-hidden="true" />
                {audience}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="leistungen-title" className="bg-white px-5 py-16 sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <Kicker>Leistungen</Kicker>
            <h2 id="leistungen-title" className="mt-4 font-heading text-3xl font-bold text-forest md:text-4xl">
              Wobei wir im Alltag helfen
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Praktische Hilfe zu Hause und unterwegs. Was genau übernommen wird, legen Sie
              gemeinsam mit uns fest – Entscheidungen bleiben bei Ihnen.
            </p>
            <Link href="/leistungen" className={`mt-6 ${textLink}`}>
              Alle Leistungen im Detail
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>

          <ol className="border-b border-line">
            {services.map((service, index) => (
              <li key={service.title} className="grid gap-2 border-t border-line py-6 sm:grid-cols-[3.25rem_1fr]">
                <span className="font-heading text-base font-bold text-muted" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-heading text-xl font-bold text-forest">{service.title}</h3>
                  <p className="mt-2 text-lg leading-relaxed text-muted">{service.description}</p>
                  <Link href={service.href} className="mt-2 inline-flex min-h-11 items-center gap-2 font-semibold text-forest underline decoration-forest/30 underline-offset-4 hover:decoration-forest">
                    {service.linkLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="pflegekasse-title" className="bg-mint px-5 py-16 sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Kicker>Pflegekasse</Kicker>
            <h2 id="pflegekasse-title" className="mt-4 font-heading text-3xl font-bold text-forest md:text-4xl">
              Bis zu 131 € Entlastungsbetrag im Monat
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink">
              Wer einen Pflegegrad von 1 bis 5 hat und zu Hause lebt, kann den Entlastungsbetrag
              für anerkannte Angebote zur Unterstützung im Alltag einsetzen. Bei unserem
              Stundensatz von {SITE.hourlyRate} entspricht das rechnerisch etwa 3 Stunden und
              41 Minuten Hilfe pro Monat.
            </p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ['131 €', 'pro Monat ab Pflegegrad 1'],
                [SITE.hourlyRate, 'pro Stunde, Anfahrt inklusive'],
                ['30. Juni', 'Restbetrag aus dem Vorjahr nutzbar bis'],
              ].map(([value, label]) => (
                <div key={label} className="border-t-4 border-sun bg-white px-4 py-4">
                  <dt className="text-base leading-snug text-muted">{label}</dt>
                  <dd className="mt-1 font-heading text-2xl font-bold text-forest">{value}</dd>
                </div>
              ))}
            </dl>
            <Link href="/kosten" className={`mt-7 ${textLink}`}>
              Kosten und Abrechnung verständlich erklärt
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-forest md:text-3xl">In drei Schritten zur Unterstützung</h2>
            <ol className="mt-8 border-b border-line">
              {steps.map(([title, text], index) => (
                <li key={title} className="flex gap-4 border-t border-line py-5">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-forest font-bold text-white" aria-hidden="true">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-forest">{title}</h3>
                    <p className="mt-1 text-lg leading-relaxed text-muted">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section aria-labelledby="arbeitsweise-title" className="on-dark bg-forest px-5 py-16 text-white sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl bg-forest-deep lg:max-w-none">
            <Image
              src="/images/seniors_hero.jpg"
              alt="Ältere Menschen verbringen gemeinsam Zeit im Wohnzimmer"
              fill
              sizes="(max-width: 1023px) 90vw, 40vw"
              className="object-cover"
            />
          </div>

          <div>
            <Kicker tone="dark">So arbeiten wir</Kicker>
            <h2 id="arbeitsweise-title" className="mt-4 font-heading text-3xl font-bold text-white md:text-4xl">
              Klare Absprachen von Anfang an
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/90">
              Vor dem ersten Einsatz klären wir Aufgaben, Bezugsperson, Finanzierung und Grenzen.
              So wissen Kundinnen, Kunden und Angehörige genau, was vereinbart ist.
            </p>
            <ul className="mt-8 border-b border-white/20">
              {[
                ['Möglichst feste Bezugsperson', 'Damit nicht ständig eine neue Person in die Wohnung kommt.'],
                ['Kosten vor Beginn transparent', 'Zusätzliche Stunden außerhalb des Budgets nur nach Ihrer Zustimmung.'],
                ['Hilfe auf Augenhöhe', 'Wir unterstützen, wo Hilfe gewünscht ist. Entscheidungen bleiben bei Ihnen.'],
              ].map(([title, text]) => (
                <li key={title} className="border-t border-white/20 py-5">
                  <h3 className="font-heading text-lg font-bold text-white">{title}</h3>
                  <p className="mt-1 text-lg leading-relaxed text-white/85">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="ansprechpartnerin-title" className="bg-white px-5 py-16 sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <SunPortrait sizes="320px" />
          <div>
            <Kicker>Persönlicher Kontakt</Kicker>
            <h2 id="ansprechpartnerin-title" className="mt-4 font-heading text-3xl font-bold text-forest md:text-4xl">
              Eine Ansprechpartnerin, die Ihre Situation kennt
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              {SITE.founder} hat Morgenlicht gegründet und ist Ihre Ansprechpartnerin. Im
              Erstgespräch klärt sie, welche Unterstützung gewünscht ist, ob Ihre Adresse im
              Einsatzgebiet liegt und wie die Finanzierung aussehen kann.
            </p>
            <ul className="mt-6 grid gap-3 text-lg text-ink sm:grid-cols-2">
              {[
                'Anerkannt nach § 45a SGB XI',
                'Beratung auf Deutsch, Türkisch und Englisch',
                'Direktabrechnung mit der Pflegekasse möglich',
                'Institutionskennzeichen (IK) vorhanden',
              ].map((fact) => (
                <li key={fact} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-none text-forest" aria-hidden="true" />
                  {fact}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-col gap-2 sm:flex-row sm:gap-8">
              <Link href="/ueber-uns" className={textLink}>
                Morgenlicht kennenlernen
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <a href={SITE.hilfelotseUrl} target="_blank" rel="noopener noreferrer" className={textLink}>
                Eintrag beim Hilfelotsen Berlin
                <ExternalLink className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">(öffnet in neuem Fenster)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Sprachen und Einsatzgebiet" className="border-t border-line bg-cream px-5 py-16 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-0">
          <article className="md:pr-12">
            <Kicker>Sprachen</Kicker>
            <h2 className="mt-4 font-heading text-3xl font-bold text-forest">
              Beratung auf Deutsch, Türkisch und Englisch
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Sprache, Gewohnheiten und persönliche Grenzen gehören zu guter Unterstützung.
              Welche Sprach- und Terminkapazität verfügbar ist, prüfen wir bei Ihrer Anfrage.
            </p>
            <div className="mt-6 flex flex-col items-start">
              <Link href="/tuerkischsprachige-alltagshilfe-berlin" className={textLink}>
                Türkischsprachige Alltagshilfe
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link href="/tr/berlin-yasli-gunluk-yasam-destegi" lang="tr" className={textLink}>
                Türkçe bilgi sayfası
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </article>

          <article className="border-t border-line pt-12 md:border-l md:border-t-0 md:pl-12 md:pt-0">
            <Kicker>Einsatzgebiet</Kicker>
            <h2 className="mt-4 font-heading text-3xl font-bold text-forest">
              Wir kommen zu Ihnen nach Hause
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Unser Schwerpunkt liegt auf Kreuzberg und Neukölln. Kurze Wege machen verlässliche
              Einsätze möglich. Ob Ihre Adresse und der gewünschte Termin passen, klären wir
              persönlich. Es gibt keinen Kundenempfang an der Geschäftsanschrift.
            </p>
            <div className="mt-6 flex flex-col items-start">
              <Link href="/berlin-kreuzberg" className={textLink}>
                <MapPin className="h-5 w-5" aria-hidden="true" /> Alltagshilfe in Kreuzberg
              </Link>
              <Link href="/berlin-neukoelln" className={textLink}>
                <MapPin className="h-5 w-5" aria-hidden="true" /> Alltagshilfe in Neukölln
              </Link>
            </div>
          </article>
        </div>
      </section>

      <FAQSection items={homeFaqs} />

      <ContactBand title="Welche Hilfe würde Ihren Alltag erleichtern?" />
    </>
  )
}
