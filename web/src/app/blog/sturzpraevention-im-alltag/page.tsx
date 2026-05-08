import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Calendar,
  Home,
  Lightbulb,
  Heart,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sturzprävention im Alltag: 7 einfache Tipps für mehr Sicherheit',
  description:
    'Stürze sind eine der häufigsten Unfallursachen im Alter. Erfahren Sie, wie Sie mit einfachen Maßnahmen Ihr Zuhause sicherer machen und Stürzen vorbeugen können.',
  keywords: [
    'Sturzprävention',
    'Sturz im Alter',
    'Wohnraumanpassung',
    'Sicherheit zuhause',
    'Pflege Berlin',
    'Alltagshilfe',
  ],
  alternates: {
    canonical: '/blog/sturzpraevention-im-alltag',
  },
  openGraph: {
    title: 'Sturzprävention im Alltag: 7 einfache Tipps für mehr Sicherheit',
    description:
      'Stürze sind eine der häufigsten Unfallursachen im Alter. Mit einfachen Maßnahmen machen Sie Ihr Zuhause sicherer.',
  },
}

export default function SturzpraeventionPage() {
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
          Sturzprävention im Alltag: 7 einfache Tipps für mehr Sicherheit zuhause
        </h1>

        {/* Content */}
        <div className="prose prose-gray max-w-none space-y-6 text-[#455A64] leading-relaxed">
          <h2 className="text-2xl font-bold text-[#37474F] mt-10 mb-4">Warum ist Sturzprävention wichtig?</h2>
          <p>
            Jährlich erleiden Hunderttausende ältere Menschen in Deutschland einen Sturz mit schwerwiegenden Folgen.
            Besonders in Berlin, wo viele Seniorinnen und Senioren allein leben, ist die Sturzprävention ein zentrales
            Thema der Altenpflege und Gesundheitsvorsorge.
          </p>

          <h2 className="text-2xl font-bold text-[#37474F] mt-10 mb-4">7 einfache Maßnahmen für mehr Sicherheit</h2>

          <h3 className="text-xl font-semibold text-[#37474F] mt-8 mb-3">1. Stolperfallen entfernen</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Lose Teppiche durch rutschfeste Unterlagen sichern oder ganz entfernen</li>
            <li>Kabel ordentlich verlegen und mit Kabelbindern fixieren</li>
            <li>Schwellen zwischen Räumen abbauen oder mit Rampen versehen</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#37474F] mt-8 mb-3">2. Gute Beleuchtung</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Nachtlichter in Flur und Bad installieren</li>
            <li>Bewegungsmelder für automatisches Licht in dunklen Ecken</li>
            <li>Helle, blendfreie LED-Beleuchtung in Treppenhäusern</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#37474F] mt-8 mb-3">3. Haltegriffe und Hilfsmittel</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Haltegriffe neben Toilette und Dusche anbringen</li>
            <li>Duschhocker oder Duschstuhl für mehr Stabilität</li>
            <li>Erhöhter Toilettensitz erleichtert das Aufstehen</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#37474F] mt-8 mb-3">4. Das richtige Schuhwerk</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Festes, rutschfestes Schuhwerk mit dünner Sohle</li>
            <li>Keine weichen Hausschuhe ohne Fersenfixierung</li>
            <li>Orthopädische Einlagen bei Gangunsicherheit</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#37474F] mt-8 mb-3">5. Bewegung und Gleichgewicht</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Regelmäßige Gleichgewichtsübungen (Tai Chi, Yoga, Physiotherapie)</li>
            <li>Viele Krankenkassen bieten kostenlose Sturzpräventionskurse an</li>
            <li>Spaziergänge an der frischen Luft stärken die Muskulatur</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#37474F] mt-8 mb-3">6. Medikamenten-Check</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Lassen Sie Ihre Medikamente regelmäßig vom Arzt überprüfen</li>
            <li>Einige Medikamente können Schwindel und Benommenheit auslösen</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#37474F] mt-8 mb-3">7. Seh- und Hörtest</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Regelmäßige Seh- und Hörtests beim Facharzt</li>
            <li>Angepasste Brille oder Hörgerät reduziert Sturzrisiko erheblich</li>
          </ul>

          <div className="bg-[#FFF3E0] border border-[#FFCC80] rounded-lg p-6 mt-8">
            <p className="font-semibold text-[#37474F] mb-2">Professionelle Beratung:</p>
            <p className="text-[#455A64]">
              Wenn Sie unsicher sind, welche Maßnahmen für Ihre Wohnsituation geeignet sind, suchen Sie eine
              Beratungsstelle auf. Der Pflegestützpunkt oder der Medizinische Dienst der Krankenversicherung (MDK)
              beraten Sie kostenlos.
            </p>
          </div>

          <p className="text-sm text-[#78909C] mt-8">Stand: Mai 2026</p>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-br from-[#E3F2FD] to-[#F3E5F5] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-[#37474F] mb-3">
            Wir unterstützen Sie im Alltag
          </h3>
          <p className="text-[#455A64] mb-6">
            Morgenlicht Alltagshilfe begleitet Sie im Alltag, hilft bei Besorgungen und sorgt für mehr Lebensqualität.
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
