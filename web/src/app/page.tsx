import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  CalendarCheck,
  Check,
  CheckCircle,
  FileText,
  Footprints,
  HandHeart,
  Heart,
  Home,
  Languages,
  MapPin,
  Phone,
  ShoppingBag,
  Users,
} from 'lucide-react'
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
    icon: Home,
  },
  {
    title: 'Einkauf und Erledigungen',
    description:
      'Gemeinsam einkaufen oder Besorgungen übernehmen, damit der Alltag übersichtlich und gut versorgt bleibt.',
    href: '/leistungen',
    icon: ShoppingBag,
  },
  {
    title: 'Begleitung zu Arztterminen',
    description:
      'Praktische Unterstützung auf dem Weg, beim Warten und bei der Organisation rund um einen Termin.',
    href: '/arztbegleitung-senioren-berlin',
    icon: CalendarCheck,
  },
  {
    title: 'Soziale Begleitung',
    description:
      'Gespräche, Spaziergänge und gemeinsame Aktivitäten nach den persönlichen Wünschen der Kundin oder des Kunden.',
    href: '/soziale-begleitung-senioren-berlin',
    icon: Users,
  },
  {
    title: 'Alltag und Struktur',
    description:
      'Hilfe beim Ordnen von Post, Terminen und alltäglichen Aufgaben – ohne Entscheidungen abzunehmen.',
    href: '/leistungen',
    icon: FileText,
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }}
      />

      <section className="overflow-hidden bg-white px-6 pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex min-h-9 items-center gap-2 rounded-full border border-[#134E4A]/15 bg-[#F7F6F3] px-4 py-1.5 text-sm font-bold text-[#134E4A]">
                <Check className="h-4 w-4" aria-hidden="true" />
                Anerkannt nach § 45a SGB XI
              </span>
              <span className="inline-flex min-h-9 items-center gap-2 rounded-full border border-[#134E4A]/15 bg-[#F7F6F3] px-4 py-1.5 text-sm font-bold text-[#134E4A]">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Kreuzberg und Neukölln
              </span>
            </div>

            <h1 className="mt-8 max-w-3xl break-words font-heading text-[2.05rem] font-bold leading-[1.18] text-[#134E4A] sm:text-5xl sm:leading-tight lg:text-[3.5rem]">
              Persönliche Alltagshilfe in Berlin mit möglichst festen Bezugspersonen
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4B5563] md:text-xl">
              Morgenlicht unterstützt ältere und pflegebedürftige Menschen bei Haushalt,
              Einkauf, Terminen und sozialer Teilhabe – in Kreuzberg und Neukölln sowie auf
              Deutsch, Türkisch oder Englisch.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kontakt#rueckruf"
                className={`plausible-event-name=Rueckrufklick inline-flex min-h-14 items-center justify-center rounded-xl bg-[#134E4A] px-8 text-lg font-bold text-white shadow-lg transition hover:bg-[#0F3F3C] ${focusClass}`}
              >
                Kostenfreien Rückruf anfragen
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
              <a
                href="tel:03023593028"
                className={`plausible-event-name=Telefonklick inline-flex min-h-14 items-center justify-center rounded-xl border-2 border-[#134E4A]/20 bg-white px-7 text-lg font-bold text-[#134E4A] transition hover:border-[#134E4A]/50 ${focusClass}`}
              >
                <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                030 235 930 28
              </a>
            </div>

            <div className="mt-8 flex max-w-2xl items-start gap-4 rounded-2xl border border-[#134E4A]/15 bg-[#F7F6F3] p-5">
              <CheckCircle className="mt-0.5 h-6 w-6 flex-none text-[#134E4A]" aria-hidden="true" />
              <p className="text-base leading-relaxed text-[#4B5563]">
                <strong className="text-[#134E4A]">Über Pflegekassen-Budget finanzierbar:</strong>{' '}
                Bei Pflegegrad 1 bis 5 können bis zu 131 € Entlastungsbetrag monatlich genutzt
                werden. Eine Direktabrechnung ist bei erfüllten Voraussetzungen möglich.
              </p>
            </div>

            <ul className="mt-7 grid gap-3 text-base text-[#37474F] sm:grid-cols-2">
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

          <div className="relative mx-auto w-full max-w-xl">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-4 border-white bg-[#F7F6F3] shadow-[0_25px_60px_-20px_rgba(19,78,74,0.35)]">
              <Image
                src="/images/hero_daily_moments.jpg"
                alt="Illustration einer unterstützenden Alltagssituation zu Hause"
                fill
                priority
                sizes="(max-width: 1023px) 92vw, 42vw"
                className="object-cover"
              />
              <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#4B5563] backdrop-blur-sm">
                Illustrative Darstellung
              </span>
            </div>
            <Link
              href="/ueber-uns"
              className={`absolute -bottom-7 left-4 flex min-h-16 items-center gap-3 rounded-2xl border border-[#134E4A]/10 bg-white p-3 pr-5 shadow-xl transition hover:-translate-y-0.5 sm:left-8 ${focusClass}`}
            >
              <Image
                src="/images/asiye-duman.jpeg"
                alt="Asiye Duman, Ansprechpartnerin bei Morgenlicht"
                width={56}
                height={56}
                className="h-14 w-14 rounded-xl object-cover"
              />
              <span className="text-left">
                <span className="block text-xs font-medium text-[#6B7280]">Ihre Ansprechpartnerin</span>
                <span className="block font-heading font-bold text-[#134E4A]">Asiye Duman</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#134E4A] px-6 py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#FFD54F]">So arbeiten wir</p>
            <h2 className="mt-4 font-heading text-3xl font-bold text-white md:text-4xl">
              Konkrete Absprachen statt großer Versprechen
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/90">
              Vor dem ersten Einsatz klären wir Bedarf, Aufgaben, Bezugsperson, Finanzierung
              und Grenzen. So wissen Kundinnen, Kunden und Angehörige, was vereinbart ist.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                title: 'Persönlich kennenlernen',
                text: 'Wir hören zu und fragen nach Gewohnheiten, Sprache und gewünschter Unterstützung.',
                icon: Heart,
              },
              {
                title: 'Transparent vereinbaren',
                text: 'Leistungsumfang, Termine, vorhandenes Budget und mögliche Zusatzkosten werden vorher besprochen.',
                icon: HandHeart,
              },
              {
                title: 'Gemeinsam anpassen',
                text: 'Was nicht passt, wird angesprochen. Entscheidungen bleiben bei der unterstützten Person.',
                icon: Footprints,
              },
            ].map((standard) => (
              <article key={standard.title} className="rounded-2xl border border-white/15 bg-white/10 p-7">
                <standard.icon className="h-8 w-8 text-[#FFD54F]" aria-hidden="true" />
                <h3 className="mt-5 font-heading text-xl font-bold text-white">{standard.title}</h3>
                <p className="mt-3 leading-relaxed text-white/85">{standard.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#134E4A]">Leistungen</p>
            <h2 className="mt-4 font-heading text-3xl font-bold text-[#134E4A] md:text-4xl">
              Unterstützung, die zu Ihrem Alltag passt
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#4B5563]">
              Wählen Sie das Thema, zu dem Sie konkrete Informationen suchen.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className={`group flex min-h-64 flex-col rounded-2xl border border-[#134E4A]/10 bg-white p-7 shadow-[0_10px_35px_rgba(0,0,0,0.07)] transition hover:-translate-y-1 hover:border-[#134E4A]/30 ${focusClass}`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#134E4A] text-white transition group-hover:bg-[#FBBF24]">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-heading text-xl font-bold text-[#134E4A]">{service.title}</h3>
                <p className="mt-3 flex-grow leading-relaxed text-[#4B5563]">{service.description}</p>
                <span className="mt-6 inline-flex items-center font-bold text-[#134E4A]">
                  Mehr erfahren <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F6F3] px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.07)] md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#134E4A]">Pflegekasse</p>
            <h2 className="mt-4 font-heading text-3xl font-bold text-[#134E4A]">
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
            <ol className="mt-8 space-y-5">
              {[
                ['1', 'Rückruf anfragen', 'Name und Telefonnummer genügen. Weitere Angaben sind freiwillig.'],
                ['2', 'Bedarf und Budget klären', 'Wir besprechen Wohnort, Aufgaben, Sprache, Häufigkeit und vorhandene Unterlagen.'],
                ['3', 'Unterstützung vereinbaren', 'Erst nach einer klaren Absprache zu Umfang, Termin und Kosten wird der Einsatz geplant.'],
              ].map(([number, title, text]) => (
                <li key={number} className="flex gap-4 rounded-2xl bg-white p-5">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#134E4A] font-bold text-white">
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

      <section className="bg-white px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl bg-[#F7F6F3]">
            <Image
              src="/images/asiye-duman.jpeg"
              alt="Asiye Duman, Ansprechpartnerin bei Morgenlicht Alltagshilfe"
              fill
              sizes="(max-width: 1023px) 80vw, 30vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#134E4A]">Persönlicher Kontakt</p>
            <h2 className="mt-4 font-heading text-3xl font-bold text-[#134E4A] md:text-4xl">
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

      <section className="bg-[#F7F6F3] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <Languages className="mx-auto h-9 w-9 text-[#134E4A]" aria-hidden="true" />
          <h2 className="mt-5 font-heading text-3xl font-bold text-[#134E4A]">
            Beratung auf Deutsch, Türkisch und Englisch
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-[#4B5563]">
            Sprache, Gewohnheiten und persönliche Grenzen gehören zu einer guten Unterstützung.
            Welche Sprach- und Terminkapazität verfügbar ist, prüfen wir bei Ihrer Anfrage.
          </p>
          <Link
            href="/tuerkischsprachige-alltagshilfe-berlin"
            className={`mt-7 inline-flex min-h-12 items-center font-bold text-[#134E4A] underline decoration-2 underline-offset-4 ${focusClass}`}
          >
            Türkischsprachige Alltagshilfe in Berlin
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#134E4A]">Vor Ort</p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-[#134E4A]">
            Alltagshilfe in Kreuzberg und Neukölln
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-[#4B5563]">
            Kurze Wege erleichtern verlässliche Einsätze. Ob die konkrete Adresse und der
            gewünschte Termin möglich sind, klären wir persönlich.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/berlin-kreuzberg"
              className={`inline-flex min-h-14 items-center justify-center rounded-xl border-2 border-[#134E4A]/20 px-7 font-bold text-[#134E4A] transition hover:bg-[#F7F6F3] ${focusClass}`}
            >
              <MapPin className="mr-2 h-5 w-5" aria-hidden="true" />
              Alltagshilfe in Kreuzberg
            </Link>
            <Link
              href="/berlin-neukoelln"
              className={`inline-flex min-h-14 items-center justify-center rounded-xl border-2 border-[#134E4A]/20 px-7 font-bold text-[#134E4A] transition hover:bg-[#F7F6F3] ${focusClass}`}
            >
              <MapPin className="mr-2 h-5 w-5" aria-hidden="true" />
              Alltagshilfe in Neukölln
            </Link>
          </div>
        </div>
      </section>

      <FAQSection />

      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-4xl rounded-3xl bg-[#134E4A] p-8 text-center text-white shadow-xl md:p-14">
          <HandHeart className="mx-auto h-10 w-10 text-[#FFD54F]" aria-hidden="true" />
          <h2 className="mt-5 font-heading text-3xl font-bold text-white md:text-4xl">
            Welche Hilfe würde Ihren Alltag erleichtern?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/90">
            Eine kurze Rückrufanfrage genügt. Wir klären Einsatzgebiet, gewünschte Unterstützung
            und mögliche Finanzierung Schritt für Schritt.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/kontakt#rueckruf"
              className={`plausible-event-name=Rueckrufklick inline-flex min-h-14 items-center justify-center rounded-xl bg-[#FFD54F] px-8 text-lg font-bold text-[#134E4A] transition hover:bg-[#FFE082] ${focusClass}`}
            >
              Kostenfreien Rückruf anfragen
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
            <a
              href="tel:03023593028"
              className="plausible-event-name=Telefonklick inline-flex min-h-14 items-center justify-center rounded-xl border-2 border-white/40 px-8 text-lg font-bold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFD54F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#134E4A]"
            >
              <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
              030 235 930 28
            </a>
          </div>
          <p className="mt-6 text-base text-white/80">Mo–Fr: 09:00–16:00 Uhr</p>
        </div>
      </section>
    </>
  )
}
