import Link from 'next/link'
import {
  ArrowRight,
  CalendarCheck,
  FileText,
  HandHeart,
  Home,
  Languages,
  MapPin,
  Phone,
} from 'lucide-react'

const options = [
  {
    title: 'Hilfe im Haushalt',
    text: 'Reinigung, Wäsche, Ordnung und einfache Aufgaben zu Hause.',
    href: '/haushaltshilfe-pflegegrad-berlin',
    icon: Home,
  },
  {
    title: 'Begleitung zu Terminen',
    text: 'Organisation und persönliche Begleitung zu Arzt, Therapie oder Behörde.',
    href: '/arztbegleitung-senioren-berlin',
    icon: CalendarCheck,
  },
  {
    title: 'Gesellschaft und Spaziergänge',
    text: 'Gespräche und gemeinsame Aktivitäten nach persönlichen Wünschen.',
    href: '/soziale-begleitung-senioren-berlin',
    icon: HandHeart,
  },
  {
    title: 'Türkischsprachige Unterstützung',
    text: 'Beratung und Alltagshilfe auf Türkisch anfragen.',
    href: '/tuerkischsprachige-alltagshilfe-berlin',
    icon: Languages,
  },
  {
    title: 'Kosten und Pflegekasse',
    text: '131 € Entlastungsbetrag, Stundensatz und Abrechnung verstehen.',
    href: '/kosten',
    icon: FileText,
  },
  {
    title: 'Hilfe in meinem Bezirk',
    text: 'Informationen für Kreuzberg und Neukölln ansehen.',
    href: '/berlin-kreuzberg',
    icon: MapPin,
  },
]

const focusClass =
  'focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFD54F] focus-visible:ring-offset-2'

export default function SuchePage() {
  return (
    <div className="min-h-screen bg-[#F7F6F3] px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#134E4A]">Leistungswegweiser</p>
          <h1 className="mt-4 font-heading text-3xl font-bold text-[#134E4A] sm:text-4xl md:text-5xl">
            Welche Alltagshilfe passt zu Ihrer Situation?
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#4B5563]">
            Wählen Sie ein Thema. Auf der nächsten Seite sehen Sie Leistungen, Grenzen,
            mögliche Finanzierung und den passenden Kontaktweg.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {options.map((option) => (
            <Link
              key={option.title}
              href={option.href}
              className={`group flex min-h-64 flex-col rounded-2xl border border-[#134E4A]/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#134E4A]/30 hover:shadow-lg ${focusClass}`}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#134E4A] text-white">
                <option.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-6 font-heading text-xl font-bold text-[#134E4A]">{option.title}</h2>
              <p className="mt-3 flex-grow leading-relaxed text-[#4B5563]">{option.text}</p>
              <span className="mt-6 inline-flex items-center font-bold text-[#134E4A]">
                Informationen ansehen
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-3xl rounded-3xl bg-[#134E4A] p-8 text-center text-white md:p-10">
          <h2 className="font-heading text-2xl font-bold text-white">Sie sind noch unsicher?</h2>
          <p className="mt-4 leading-relaxed text-white/90">
            Im kostenfreien Erstkontakt klären wir kurz, welches Angebot und welcher nächste
            Schritt zu Ihrer Situation passen könnten.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/kontakt"
              className="inline-flex min-h-14 items-center justify-center rounded-xl bg-[#FFD54F] px-7 font-bold text-[#134E4A] focus:outline-none focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#134E4A]"
            >
              Kontakt aufnehmen <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
            <a
              href="tel:03023593028"
              className="inline-flex min-h-14 items-center justify-center rounded-xl border-2 border-white/40 px-7 font-bold text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFD54F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#134E4A]"
            >
              <Phone className="mr-2 h-5 w-5" aria-hidden="true" /> 030 235 930 28
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
