import {
  CheckCircle,
  Clock3,
  Languages,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from 'lucide-react'

const PHONE_LABEL = '030 235 930 28'
const PHONE_HREF = '03023593028'
const MOBILE_LABEL = '0151 560 573 65'
const WHATSAPP_HREF = 'https://wa.me/4915156057365'
const EMAIL = 'info@morgenlicht-alltagshilfe.de'

const focusClass =
  'focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFD54F] focus-visible:ring-offset-2'

const trustFacts = [
  {
    title: 'Anerkannter Anbieter',
    text: 'Anerkannt nach § 45a SGB XI',
    icon: ShieldCheck,
  },
  {
    title: 'Pflegekassen-Budget',
    text: 'Direktabrechnung ist bei erfüllten Voraussetzungen möglich',
    icon: CheckCircle,
  },
  {
    title: 'Beratung in drei Sprachen',
    text: 'Deutsch, Türkisch und Englisch',
    icon: Languages,
  },
  {
    title: 'Einsatzgebiet',
    text: 'Berlin mit Schwerpunkt Kreuzberg und Neukölln',
    icon: MapPin,
  },
]

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-white text-[#1F2937]">
      <header className="bg-[#F7F6F3] px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h1 className="max-w-3xl font-heading text-3xl font-bold leading-tight text-[#134E4A] sm:text-4xl md:text-5xl">
            Persönliche Beratung zur Alltagshilfe
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#4B5563] md:text-xl">
            Rufen Sie uns an oder schreiben Sie uns per WhatsApp oder E-Mail. Wir klären gemeinsam,
            welche Unterstützung benötigt wird und welche Finanzierung möglich ist.
          </p>
        </div>
      </header>

      <section
        id="kontaktwege"
        aria-labelledby="kontaktwege-title"
        className="scroll-mt-28 px-6 py-14 md:py-20"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(18rem,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <aside aria-labelledby="kontaktwege-title">
            <h2 id="kontaktwege-title" className="font-heading text-2xl font-bold text-[#134E4A] md:text-3xl">
              Direkt Kontakt aufnehmen
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#4B5563]">
              Wählen Sie den Kontaktweg, der für Sie am einfachsten ist.
            </p>

            <div className="mt-7 divide-y divide-[#134E4A]/15 border-y border-[#134E4A]/15">
              <a
                href={`tel:${PHONE_HREF}`}
                className={`plausible-event-name=Telefonklick flex min-h-20 items-center gap-4 px-2 py-4 text-[#134E4A] transition hover:bg-[#F7F6F3] ${focusClass}`}
              >
                <Phone className="h-6 w-6 flex-none" aria-hidden="true" />
                <span>
                  <span className="block text-base font-semibold text-[#4B5563]">Telefon</span>
                  <span className="block text-xl font-bold">{PHONE_LABEL}</span>
                </span>
              </a>

              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className={`plausible-event-name=WhatsAppklick flex min-h-20 items-center gap-4 px-2 py-4 text-[#134E4A] transition hover:bg-[#F7F6F3] ${focusClass}`}
              >
                <MessageCircle className="h-6 w-6 flex-none" aria-hidden="true" />
                <span>
                  <span className="block text-base font-semibold text-[#4B5563]">WhatsApp</span>
                  <span className="block text-xl font-bold">{MOBILE_LABEL}</span>
                </span>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className={`plausible-event-name=E-Mail-Klick flex min-h-20 items-center gap-4 px-2 py-4 text-[#134E4A] transition hover:bg-[#F7F6F3] ${focusClass}`}
              >
                <Mail className="h-6 w-6 flex-none" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block text-base font-semibold text-[#4B5563]">E-Mail</span>
                  <span className="block break-all text-base font-bold sm:text-lg">{EMAIL}</span>
                </span>
              </a>

              <div className="flex min-h-20 items-center gap-4 px-2 py-4">
                <Clock3 className="h-6 w-6 flex-none text-[#134E4A]" aria-hidden="true" />
                <span>
                  <span className="block text-base font-semibold text-[#4B5563]">Erreichbarkeit</span>
                  <span className="block text-lg font-bold text-[#1F2937]">Mo–Fr, 09:00–16:00 Uhr</span>
                </span>
              </div>
            </div>

            <p className="mt-6 text-base leading-relaxed text-[#4B5563]">
              Für den ersten Kontakt genügen Ihr Name und Ihr Anliegen. Bitte senden Sie keine
              Diagnosen oder anderen Gesundheitsdaten.
            </p>
          </aside>

          <div className="border-t border-[#134E4A]/15 pt-10 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
            <section aria-labelledby="naechste-schritte-title">
              <h2
                id="naechste-schritte-title"
                className="font-heading text-2xl font-bold text-[#134E4A] md:text-3xl"
              >
                So geht es weiter
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#4B5563]">
                Wir besprechen, welche Hilfe im Alltag passt und ob eine Finanzierung über
                vorhandenes Pflegekassen-Budget möglich ist.
              </p>
              <div className="mt-8 border-l-4 border-[#134E4A] pl-6">
                <h3 className="font-heading text-xl font-bold text-[#134E4A]">
                  Für den ersten Kontakt
                </h3>
                <ol className="mt-4 space-y-3 text-lg leading-relaxed text-[#4B5563]">
                  <li>1. Telefon, WhatsApp oder E-Mail auswählen.</li>
                  <li>2. Ihren Namen und Ihr Anliegen nennen.</li>
                  <li>3. Keine Diagnosen oder anderen Gesundheitsdaten senden.</li>
                </ol>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section aria-labelledby="vertrauen-title" className="bg-[#F0F7F3] px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 id="vertrauen-title" className="font-heading text-2xl font-bold text-[#134E4A]">
            Gut zu wissen
          </h2>
          <dl className="mt-7 grid gap-y-7 border-t border-[#134E4A]/15 pt-7 md:grid-cols-2 md:gap-x-10 lg:grid-cols-4">
            {trustFacts.map((fact) => (
              <div key={fact.title} className="flex gap-3">
                <fact.icon className="mt-0.5 h-6 w-6 flex-none text-[#134E4A]" aria-hidden="true" />
                <div>
                  <dt className="font-heading font-bold text-[#134E4A]">{fact.title}</dt>
                  <dd className="mt-1 text-base leading-relaxed text-[#4B5563]">{fact.text}</dd>
                </div>
              </div>
            ))}
          </dl>
          <p className="mt-8 max-w-3xl border-t border-[#134E4A]/15 pt-6 text-base leading-relaxed text-[#4B5563]">
            Leistungen können ab Pflegegrad 1 im Rahmen des tatsächlich verfügbaren Budgets ohne
            Eigenanteil möglich sein. Voraussetzungen und mögliche Zusatzkosten klären wir vor
            Beginn.
          </p>
        </div>
      </section>
    </div>
  )
}
