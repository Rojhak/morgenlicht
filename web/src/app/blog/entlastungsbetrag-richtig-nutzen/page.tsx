import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Euro,
  HelpCircle,
  Home,
  Info,
  ShoppingBag,
  Users,
  FileText,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Entlastungsbetrag richtig nutzen: 131 Euro monatlich für Pflegebedürftige',
  description:
    'Der Entlastungsbetrag von 131 Euro monatlich steht Pflegebedürftigen ab Pflegegrad 1 zu. Erfahren Sie, wofür Sie das Geld nutzen können und wie Sie es beantragen.',
  keywords: [
    'Entlastungsbetrag',
    '131 Euro Pflegegrad',
    'Pflegekasse Entlastungsbetrag',
    'Alltagshilfe Berlin',
    'Unterstützung im Alltag',
    'Pflegegrad 1 Entlastungsbetrag',
  ],
  alternates: {
    canonical: '/blog/entlastungsbetrag-richtig-nutzen',
  },
  openGraph: {
    title: 'Entlastungsbetrag richtig nutzen: 131 Euro monatlich für Pflegebedürftige',
    description:
      'Der Entlastungsbetrag von 131 Euro monatlich steht Pflegebedürftigen ab Pflegegrad 1 zu. Erfahren Sie, wofür Sie das Geld nutzen können.',
  },
}

export default function EntlastungsbetragPage() {
  return (
    <div className="py-12 px-4">
      <article className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[#455A64] hover:text-[#37474F] mb-8 transition-colors"
        >
          <ArrowRight className="w-4 h-4 rotate-180" aria-hidden="true" />
          Zurück zum Blog
        </Link>

        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-[#78909C] mb-4">
          <Calendar className="w-4 h-4" aria-hidden="true" />
          <time dateTime="2026-05-08">8. Mai 2026</time>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#37474F] mb-6 leading-tight">
          Entlastungsbetrag richtig nutzen: 131 Euro monatlich für Pflegebedürftige
        </h1>

        {/* Content */}
        <div className="prose prose-gray max-w-none space-y-6 text-[#455A64] leading-relaxed">
          <h2 className="text-2xl font-bold text-[#37474F] mt-10 mb-4">Was ist der Entlastungsbetrag?</h2>
          <p>
            Der Entlastungsbetrag ist ein monatlicher Zuschuss in Höhe von <strong>131 Euro</strong>, der Pflegebedürftigen
            ab <strong>Pflegegrad 1</strong> zusteht. Er soll dazu dienen, pflegende Angehörige zu entlasten und die
            häusliche Pflege zu unterstützen.
          </p>

          <h2 className="text-2xl font-bold text-[#37474F] mt-10 mb-4">Wofür kann der Entlastungsbetrag verwendet werden?</h2>
          <p>Der Betrag ist zweckgebunden und kann für folgende Leistungen eingesetzt werden:</p>

          <h3 className="text-xl font-semibold text-[#37474F] mt-8 mb-3">1. Tages- und Nachtpflege</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Besuch einer Tagespflegeeinrichtung</li>
            <li>Nächtliche Betreuung in einer Nachtpflege</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#37474F] mt-8 mb-3">2. Kurzzeitpflege</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Vorübergehende stationäre Pflege (z.B. nach Krankenhausaufenthalt)</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#37474F] mt-8 mb-3">3. Ambulante Pflegedienste</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Grundpflege wie Körperpflege, Ernährung, Mobilität</li>
            <li>Hauswirtschaftliche Versorgung</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#37474F] mt-8 mb-3">4. Betreuungs- und Entlastungsangebote</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Betreuungsgruppen für demenziell Erkrankte</li>
            <li>Helferinnen und Helfer im Alltag (Einkaufshilfe, Begleitung)</li>
            <li>Alltagsbegleiter, Pflegebegleiter</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#37474F] mt-8 mb-3">5. Leistungen der zusätzlichen Betreuung und Aktivierung (§ 45b SGB XI)</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Kreativangebote, Gedächtnistraining</li>
            <li>Bewegungsangebote</li>
            <li>Gesprächskreise</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#37474F] mt-10 mb-4">Wie beantrage ich den Entlastungsbetrag?</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Sie benötigen einen anerkannten Pflegegrad (1-5).</li>
            <li>Wählen Sie einen geeigneten Anbieter aus (Pflegedienst, Tagespflege, Betreuungsangebot).</li>
            <li>Reichen Sie die Rechnung bei Ihrer Pflegekasse ein.</li>
            <li>Die Pflegekasse erstattet Ihnen die Kosten bis zu 131 Euro monatlich.</li>
          </ol>

          <div className="bg-[#E8F5E9] border border-[#A5D6A7] rounded-lg p-6 mt-8">
            <p className="font-semibold text-[#37474F] mb-2">Wichtig:</p>
            <p className="text-[#455A64]">
              Der Anspruch verfällt nicht, wenn Sie ihn nicht nutzen. Nicht verbrauchte Beträge können in den Folgemonat
              übertragen werden.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#37474F] mt-10 mb-4">Beratungsstellen in Berlin</h2>
          <p>
            Bei Fragen zum Entlastungsbetrag oder zur Pflege allgemein helfen Ihnen die Pflegestützpunkte in Berlin
            kostenlos weiter. Auch Morgenlicht Alltagshilfe berät Sie gern zu den Möglichkeiten der Unterstützung im
            Alltag.
          </p>
          <p className="text-sm text-[#78909C] mt-8">Stand: Mai 2026</p>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-br from-[#E3F2FD] to-[#F3E5F5] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-[#37474F] mb-3">
            Brauchen Sie Unterstützung im Alltag?
          </h3>
          <p className="text-[#455A64] mb-6">
            Morgenlicht Alltagshilfe bietet Ihnen Hilfe bei der Haushaltsführung, Begleitung und mehr.
          </p>
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1565C0] text-white rounded-lg font-semibold hover:bg-[#1976D2] transition-colors"
          >
            Unsere Leistungen <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </article>
    </div>
  )
}
