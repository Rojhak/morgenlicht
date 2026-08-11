import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, CheckCircle, MapPin, Phone } from 'lucide-react'
import { FAQSection } from '@/app/components/sections/FAQSection'
import { homeFaqs } from '@/content/homeFaqs'
import { createPageMetadata } from '@/lib/seo'
import { serializeJsonLd } from '@/lib/security'

const SITE_URL = 'https://www.morgenlicht-alltagshilfe.de'

export const metadata = createPageMetadata({
  title: 'Alltagshilfe Berlin mit Pflegegrad | Morgenlicht',
  description:
    'Persönliche Alltagshilfe und Haushaltshilfe in Berlin-Kreuzberg und Neukölln. Für Menschen mit Pflegegrad, auf Deutsch, Türkisch und Englisch.',
  path: '/',
  languages: {
    'de-DE': `${SITE_URL}/`,
    'x-default': `${SITE_URL}/`,
  },
})

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${SITE_URL}/#faq`,
  mainEntity: homeFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

const focusClass =
  'focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFD54F] focus-visible:ring-offset-2'

const services = [
  {
    title: 'Haushaltshilfe mit Pflegegrad',
    description:
      'Unterstützung bei Reinigung, Wäsche und einfachen Aufgaben im Haushalt – klar vereinbart und persönlich.',
    href: '/haushaltshilfe-pflegegrad-berlin',
  },
  {
    title: 'Einkauf und Erledigungen',
    description:
      'Gemeinsam einkaufen oder Besorgungen übernehmen, damit der Alltag übersichtlich und gut versorgt bleibt.',
    href: '/leistungen',
  },
  {
    title: 'Begleitung zu Arztterminen',
    description:
      'Praktische Unterstützung auf dem Weg, beim Warten und bei der Organisation rund um einen Termin.',
    href: '/arztbegleitung-senioren-berlin',
  },
  {
    title: 'Soziale Begleitung',
    description:
      'Gespräche, Spaziergänge und gemeinsame Aktivitäten nach den persönlichen Wünschen der Kundin oder des Kunden.',
    href: '/soziale-begleitung-senioren-berlin',
  },
  {
    title: 'Alltag und Struktur',
    description:
      'Hilfe beim Ordnen von Post, Terminen und alltäglichen Aufgaben – ohne Entscheidungen abzunehmen.',
    href: '/leistungen',
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }}
      />

      <section className="overflow-hidden bg-[#FAF9F6] px-5 py-12 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div>
            <p className="border-l-4 border-[#FBBF24] pl-4 text-base font-bold text-[#134E4A]">
              Anerkannt nach § 45a SGB XI · in Kreuzberg und Neukölln
            </p>

            <h1 className="mt-6 max-w-3xl break-words font-heading text-[2.15rem] font-bold leading-[1.16] text-[#134E4A] sm:text-5xl lg:text-[3.45rem]">
              Persönliche Alltagshilfe in Berlin mit möglichst festen Bezugspersonen
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4B5563] md:text-xl">
              Morgenlicht unterstützt ältere und pflegebedürftige Menschen bei Haushalt,
              Einkauf, Terminen und sozialer Teilhabe – auf Deutsch, Türkisch oder Englisch.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/kontakt#rueckruf"
                className={`plausible-event-name=Rueckrufklick inline-flex min-h-14 items-center justify-center rounded-xl bg-[#134E4A] px-7 text-lg font-bold text-white transition hover:bg-[#0F3F3C] ${focusClass}`}
              >
                Rückruf anfragen
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
              <a
                href="tel:03023593028"
                className={`plausible-event-name=Telefonklick inline-flex min-h-14 items-center justify-center rounded-xl border-2 border-[#134E4A]/30 bg-white px-7 text-lg font-bold text-[#134E4A] transition hover:border-[#134E4A] ${focusClass}`}
              >
                <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                030 235 930 28
              </a>
            </div>

            <div className="mt-8 border-y border-[#134E4A]/15 py-5">
              <p className="flex max-w-2xl items-start gap-3 text-base leading-relaxed text-[#374151]">
                <CheckCircle className="mt-0.5 h-6 w-6 flex-none text-[#134E4A]" aria-hidden="true" />
                <span>
                  <strong className="text-[#134E4A]">Über Pflegekassen-Budget finanzierbar:</strong>{' '}
                  Bei Pflegegrad 1 bis 5 können bis zu 131 € Entlastungsbetrag monatlich genutzt
                  werden. Eine Direktabrechnung ist bei erfüllten Voraussetzungen möglich.
                </span>
              </p>
            </div>

            <ul className="mt-6 grid gap-x-8 gap-y-3 text-base text-[#374151] sm:grid-cols-2">
              {[
                'Persönliches Erstgespräch',
                'Möglichst feste Bezugsperson',
                'Kosten vor Beginn transparent',
                'Hilfe nur nach Ihrer Zustimmung',
              ].map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <Check className="h-5 w-5 flex-none text-[#134E4A]" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto w-full max-w-xl">
            <div className="grid h-[360px] grid-cols-[1.05fr_0.95fr] grid-rows-2 gap-3 sm:h-[460px] lg:h-[540px]">
              <div className="relative row-span-2 overflow-hidden rounded-2xl bg-white">
                <Image
                  src="/images/hero_helping_hand.jpg"
                  alt="Unterstützende Hände beim gemeinsamen Einkauf"
                  fill
                  priority
                  sizes="(max-width: 1023px) 48vw, 24vw"
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-white">
                <Image
                  src="/images/hero_daily_moments.jpg"
                  alt="Eine Begleitperson betrachtet mit einem älteren Mann ein Fotoalbum"
                  fill
                  priority
                  sizes="(max-width: 1023px) 42vw, 20vw"
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-white">
                <Image
                  src="/images/hero_active_senior.jpg"
                  alt="Alltagsbegleitung unterstützt eine ältere Frau in der Küche"
                  fill
                  sizes="(max-width: 1023px) 42vw, 20vw"
                  className="object-cover"
                />
              </div>
            </div>

            <Link
              href="/ueber-uns"
              className={`mt-5 inline-flex min-h-14 items-center gap-3 border-b border-[#134E4A]/25 pb-2 pr-4 text-left ${focusClass}`}
            >
              <Image
                src="/images/asiye-duman.jpeg"
                alt="Asiye Duman, Ansprechpartnerin bei Morgenlicht"
                width={52}
                height={52}
                className="h-[52px] w-[52px] rounded-full object-cover"
              />
              <span>
                <span className="block text-base text-[#4B5563]">Ihre Ansprechpartnerin</span>
                <span className="block font-heading text-lg font-bold text-[#134E4A]">Asiye Duman</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#134E4A] px-5 py-16 text-white sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#0F3F3C]">
            <Image
              src="/images/seniors_hero.jpg"
              alt="Ältere Menschen verbringen gemeinsam Zeit im Wohnzimmer"
              fill
              sizes="(max-width: 1023px) 92vw, 42vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-base font-bold text-[#FBBF24]">So arbeiten wir</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white md:text-4xl">
              Konkrete Absprachen statt großer Versprechen
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/90">
              Vor dem ersten Einsatz klären wir Bedarf, Aufgaben, Bezugsperson, Finanzierung
              und Grenzen. So wissen Kundinnen, Kunden und Angehörige, was vereinbart ist.
            </p>

            <ol className="mt-8 border-b border-white/20">
              {[
                ['01', 'Persönlich kennenlernen', 'Wir hören zu und fragen nach Gewohnheiten, Sprache und gewünschter Unterstützung.'],
                ['02', 'Transparent vereinbaren', 'Leistungsumfang, Termine, vorhandenes Budget und mögliche Zusatzkosten werden vorher besprochen.'],
                ['03', 'Gemeinsam anpassen', 'Was nicht passt, wird angesprochen. Entscheidungen bleiben bei der unterstützten Person.'],
              ].map(([number, title, text]) => (
                <li key={number} className="grid gap-2 border-t border-white/20 py-5 sm:grid-cols-[3rem_1fr]">
                  <span className="font-heading font-bold text-[#FBBF24]">{number}</span>
                  <span>
                    <strong className="block font-heading text-lg text-white">{title}</strong>
                    <span className="mt-1 block text-base leading-relaxed text-white/80">{text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="text-base font-bold text-[#134E4A]">Leistungen</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-[#134E4A] md:text-4xl">
              Unterstützung, die zu Ihrem Alltag passt
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#4B5563]">
              Wählen Sie das Thema, zu dem Sie konkrete Informationen suchen.
            </p>
            <Link
              href="/leistungen"
              className={`mt-6 inline-flex min-h-12 items-center font-bold text-[#134E4A] underline decoration-2 underline-offset-4 ${focusClass}`}
            >
              Alle Leistungen ansehen
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>

          <div className="border-b border-[#134E4A]/20">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className={`group grid min-h-32 gap-3 border-t border-[#134E4A]/20 py-6 sm:grid-cols-[3.25rem_1fr_auto] sm:items-start ${focusClass}`}
              >
                <span className="font-heading text-base font-bold text-[#6B7280]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>
                  <span className="block font-heading text-xl font-bold text-[#134E4A] group-hover:underline">
                    {service.title}
                  </span>
                  <span className="mt-2 block text-base leading-relaxed text-[#4B5563]">
                    {service.description}
                  </span>
                </span>
                <ArrowRight className="hidden h-5 w-5 text-[#134E4A] transition group-hover:translate-x-1 sm:block" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F0F7F3] px-5 py-16 sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div className="border-l-4 border-[#FBBF24] pl-6 md:pl-8">
            <p className="text-base font-bold text-[#134E4A]">Pflegekasse</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-[#134E4A]">
              Bis zu 131 € Entlastungsbetrag pro Monat
            </h2>
            <p className="mt-5 leading-relaxed text-[#4B5563]">
              Pflegebedürftige mit Pflegegrad 1 bis 5 in häuslicher Pflege können den
              Entlastungsbetrag für anerkannte Angebote zur Unterstützung im Alltag einsetzen.
              Bei 35,50 € pro Stunde entsprechen 131 € rechnerisch rund 3,6 Stunden.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#4B5563]">
              Maßgeblich sind das tatsächlich verfügbare Budget, die anerkannte Leistung und
              der vereinbarte Abrechnungsweg. Zusätzliche Kosten werden vor Beginn besprochen.
            </p>
            <Link
              href="/kosten"
              className={`mt-7 inline-flex min-h-12 items-center font-bold text-[#134E4A] underline decoration-2 underline-offset-4 ${focusClass}`}
            >
              Kosten und Finanzierung verständlich erklärt
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>

          <div>
            <h2 className="font-heading text-3xl font-bold text-[#134E4A]">In drei Schritten starten</h2>
            <ol className="mt-8 border-b border-[#134E4A]/20">
              {[
                ['1', 'Rückruf anfragen', 'Name und Telefonnummer genügen. Weitere Angaben sind freiwillig.'],
                ['2', 'Bedarf und Budget klären', 'Wir besprechen Wohnort, Aufgaben, Sprache, Häufigkeit und vorhandene Unterlagen.'],
                ['3', 'Unterstützung vereinbaren', 'Erst nach einer klaren Absprache zu Umfang, Termin und Kosten wird der Einsatz geplant.'],
              ].map(([number, title, text]) => (
                <li key={number} className="flex gap-4 border-t border-[#134E4A]/20 py-5">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#134E4A] font-bold text-white">
                    {number}
                  </span>
                  <span>
                    <strong className="block font-heading text-lg text-[#134E4A]">{title}</strong>
                    <span className="mt-1 block text-base leading-relaxed text-[#4B5563]">{text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl bg-[#F7F6F3]">
            <Image
              src="/images/asiye-duman.jpeg"
              alt="Asiye Duman, Ansprechpartnerin bei Morgenlicht Alltagshilfe"
              fill
              sizes="(max-width: 1023px) 80vw, 30vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-base font-bold text-[#134E4A]">Persönlicher Kontakt</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-[#134E4A] md:text-4xl">
              Eine Ansprechpartnerin, die Ihre Situation kennt
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#4B5563]">
              Asiye Duman ist Ihre Ansprechpartnerin bei Morgenlicht. Im Erstgespräch klärt sie,
              welche Unterstützung gewünscht ist, ob der Wohnort im Einsatzgebiet liegt und wie
              die Finanzierung aussehen kann.
            </p>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/ueber-uns"
                className={`inline-flex min-h-12 items-center font-bold text-[#134E4A] underline decoration-2 underline-offset-4 ${focusClass}`}
              >
                Morgenlicht kennenlernen
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
              <a
                href="https://www.hilfelotse-berlin.de/detail/morgenlicht-alltagshilfe-berlin"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex min-h-12 items-center font-bold text-[#134E4A] underline decoration-2 underline-offset-4 ${focusClass}`}
              >
                Eintrag beim Berliner Hilfelotsen
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF9F6] px-5 py-16 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-0">
          <article className="md:pr-12">
            <p className="text-base font-bold text-[#134E4A]">Sprachen</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-[#134E4A]">
              Beratung auf Deutsch, Türkisch und Englisch
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#4B5563]">
              Sprache, Gewohnheiten und persönliche Grenzen gehören zu einer guten Unterstützung.
              Welche Sprach- und Terminkapazität verfügbar ist, prüfen wir bei Ihrer Anfrage.
            </p>
            <Link
              href="/tuerkischsprachige-alltagshilfe-berlin"
              className={`mt-6 inline-flex min-h-12 items-center font-bold text-[#134E4A] underline decoration-2 underline-offset-4 ${focusClass}`}
            >
              Türkischsprachige Alltagshilfe
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </article>

          <article className="border-t border-[#134E4A]/20 pt-10 md:border-l md:border-t-0 md:pl-12 md:pt-0">
            <p className="text-base font-bold text-[#134E4A]">Vor Ort</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-[#134E4A]">
              Alltagshilfe in Kreuzberg und Neukölln
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#4B5563]">
              Kurze Wege erleichtern verlässliche Einsätze. Ob die konkrete Adresse und der
              gewünschte Termin möglich sind, klären wir persönlich.
            </p>
            <div className="mt-6 flex flex-col items-start gap-2">
              <Link href="/berlin-kreuzberg" className={`inline-flex min-h-12 items-center font-bold text-[#134E4A] underline decoration-2 underline-offset-4 ${focusClass}`}>
                <MapPin className="mr-2 h-5 w-5" aria-hidden="true" /> Alltagshilfe in Kreuzberg
              </Link>
              <Link href="/berlin-neukoelln" className={`inline-flex min-h-12 items-center font-bold text-[#134E4A] underline decoration-2 underline-offset-4 ${focusClass}`}>
                <MapPin className="mr-2 h-5 w-5" aria-hidden="true" /> Alltagshilfe in Neukölln
              </Link>
            </div>
          </article>
        </div>
      </section>

      <FAQSection />

      <section className="bg-[#134E4A] px-5 py-16 text-white sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-14">
          <div>
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
              Welche Hilfe würde Ihren Alltag erleichtern?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90">
              Eine kurze Rückrufanfrage genügt. Wir klären Einsatzgebiet, gewünschte Unterstützung
              und mögliche Finanzierung Schritt für Schritt.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/kontakt#rueckruf"
              className={`plausible-event-name=Rueckrufklick inline-flex min-h-14 items-center justify-center rounded-xl bg-[#FBBF24] px-7 text-lg font-bold text-[#134E4A] transition hover:bg-[#FDE68A] ${focusClass}`}
            >
              Rückruf anfragen
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
            <a
              href="tel:03023593028"
              className="plausible-event-name=Telefonklick inline-flex min-h-14 items-center justify-center rounded-xl border-2 border-white/40 px-7 text-lg font-bold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFD54F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#134E4A]"
            >
              <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
              030 235 930 28
            </a>
            <p className="text-center text-base text-white/80">Mo–Fr: 09:00–16:00 Uhr</p>
          </div>
        </div>
      </section>
    </>
  )
}
