import { Metadata } from 'next'
import Link from 'next/link'
import { Heart, Users, Award, ArrowRight } from 'lucide-react'
import { GlassCard, GlassButton } from '../components/glass'

export const metadata: Metadata = {
  title: 'Über uns',
  description: 'Lernen Sie Morgenlicht Alltagshilfe kennen – unser Team, unsere Mission und unsere Werte.',
}

const values = [
  {
    icon: Heart,
    title: 'Würde',
    description: 'Jeder Mensch verdient Respekt und Wertschätzung – in jedem Alter und jeder Lebenssituation.',
  },
  {
    icon: Users,
    title: 'Vertrauen',
    description: 'Wir bauen langfristige Beziehungen auf. Unsere Kunden und ihre Familien können sich auf uns verlassen.',
  },
  {
    icon: Award,
    title: 'Qualität',
    description: 'Als anerkannter Anbieter nach § 45a SGB XI erfüllen wir höchste Standards in der Alltagsbegleitung.',
  },
]

export default function UeberUnsPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#37474F] mb-4">
            Über uns
          </h1>
          <p className="text-lg text-[#455A64] max-w-2xl mx-auto">
            Menschen helfen, selbstbestimmt zu leben – das ist unsere Mission.
          </p>
        </div>

        {/* Mission Statement */}
        <GlassCard className="p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-[#37474F] mb-6">Unsere Mission</h2>
          <div className="prose prose-lg text-[#37474F]">
            <p>
              Wir glauben daran, dass jeder Mensch das Recht auf ein würdevolles und
              selbstbestimmtes Leben hat – in jedem Alter. Bei Morgenlicht Alltagshilfe
              setzen wir uns täglich dafür ein, Senioren und ihren Familien genau die
              Unterstützung zu bieten, die sie brauchen.
            </p>
            <p>
              Unsere Alltagsbegleiter sind mehr als nur Helfer – sie sind vertrauensvolle
              Begleiter, die mit Einfühlungsvermögen und Respekt zur Seite stehen. Ob beim
              Einkaufen, bei Arztbesuchen oder einfach bei einem Gespräch bei einer Tasse
              Kaffee – wir sind da.
            </p>
          </div>
        </GlassCard>

        {/* Values */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#37474F] mb-8 text-center">
            Unsere Werte
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value) => {
              const IconComponent = value.icon
              return (
                <GlassCard key={value.title} className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-[#26A69A]/10 rounded-full mb-4">
                    <IconComponent className="w-7 h-7 text-[#0D6E64]" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#37474F] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-[#455A64]">{value.description}</p>
                </GlassCard>
              )
            })}
          </div>
        </div>

        {/* Team Section */}
        <GlassCard className="p-8 md:p-12 mb-12 bg-[#E0F2F1]">
          <h2 className="text-2xl font-bold text-[#37474F] mb-6">Unser Team</h2>
          <div className="prose prose-lg text-[#37474F]">
            <p>
              Unser Team besteht aus erfahrenen Alltagsbegleitern, die speziell für die
              Arbeit mit Senioren geschult sind. Wir legen großen Wert auf:
            </p>
            <ul>
              <li>Einfühlungsvermögen und Geduld</li>
              <li>Zuverlässigkeit und Pünktlichkeit</li>
              <li>Regelmäßige Fortbildungen</li>
              <li>Erfahrung im Umgang mit demenzerkrankten Menschen</li>
            </ul>
            <p>
              Alle unsere Mitarbeiter sind sorgfältig ausgewählt und verfügen über
              einwandfreie Führungszeugnisse.
            </p>
          </div>
        </GlassCard>

        {/* Trust Badge */}
        <GlassCard className="p-8 text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFD54F]/20 rounded-full mb-4">
            <Award className="w-8 h-8 text-[#B8472A]" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-semibold text-[#37474F] mb-2">
            Anerkannter Anbieter
          </h3>
          <p className="text-[#455A64]">
            Morgenlicht Alltagshilfe ist als Anbieter nach § 45a SGB XI anerkannt.
            Ihre Pflegekasse übernimmt die Kosten im Rahmen des Entlastungsbetrags.
          </p>
        </GlassCard>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#37474F] mb-4">
            Lernen Sie uns kennen
          </h2>
          <p className="text-[#455A64] mb-6">
            Wir freuen uns auf ein unverbindliches Gespräch mit Ihnen.
          </p>
          <GlassButton as="link" href="/kontakt" variant="primary" size="lg">
            Kontakt aufnehmen
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </GlassButton>
        </div>
      </div>
    </div>
  )
}
