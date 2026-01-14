'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, CheckCircle, FileText, Users, Calendar, ClipboardList, HeartHandshake } from 'lucide-react'
import { GlassCard, GlassButton } from '../components/glass'

const steps = [
  {
    id: 'what',
    icon: FileText,
    title: 'Was ist ein Pflegegrad?',
    content: `Der Pflegegrad bestimmt, welche Leistungen Ihnen von der Pflegekasse zustehen. Es gibt fünf Pflegegrade (1-5), die den Grad der Beeinträchtigung der Selbstständigkeit widerspiegeln.

Je höher der Pflegegrad, desto mehr Unterstützung erhalten Sie. Bereits ab Pflegegrad 1 haben Sie Anspruch auf den Entlastungsbetrag von 125€ monatlich.`,
    tips: [
      'Pflegegrad 1: Geringe Beeinträchtigung',
      'Pflegegrad 2-3: Erhebliche bis schwere Beeinträchtigung',
      'Pflegegrad 4-5: Schwerste Beeinträchtigung',
    ]
  },
  {
    id: 'how',
    icon: Users,
    title: 'Wie wird er festgestellt?',
    content: `Ein Gutachter des Medizinischen Dienstes (MD, früher MDK) besucht Sie zu Hause und bewertet Ihre Selbstständigkeit in sechs Lebensbereichen:

• Mobilität
• Kognitive und kommunikative Fähigkeiten
• Verhaltensweisen und psychische Problemlagen
• Selbstversorgung
• Umgang mit krankheitsbedingten Anforderungen
• Gestaltung des Alltagslebens`,
    tips: [
      'Der Gutachter kommt zu Ihnen nach Hause',
      'Die Begutachtung dauert ca. 1 Stunde',
      'Angehörige können dabei sein',
    ]
  },
  {
    id: 'expect',
    icon: Calendar,
    title: 'Was Sie erwartet',
    content: `Nach Ihrem Antrag bei der Pflegekasse wird innerhalb von 25 Arbeitstagen ein Termin für die Begutachtung vereinbart. Der Gutachter stellt Fragen zu Ihrem Alltag und beobachtet, wie selbstständig Sie verschiedene Aktivitäten durchführen können.

Seien Sie ehrlich über Ihre Einschränkungen – der Gutachter ist dafür ausgebildet, Ihre Situation fair zu bewerten.`,
    tips: [
      'Zeigen Sie Ihren normalen Alltag',
      'Spielen Sie keine Beschwerden herunter',
      'Bitten Sie einen Angehörigen dabei zu sein',
    ]
  },
  {
    id: 'checklist',
    icon: ClipboardList,
    title: 'Ihre Checkliste',
    content: `Bereiten Sie folgende Unterlagen für den Gutachterbesuch vor:

• Aktuelle Arztberichte und Diagnosen
• Medikamentenliste
• Krankenhausentlassungsberichte
• Pflegedokumentation (falls vorhanden)
• Schwerbehindertenausweis (falls vorhanden)

Notieren Sie auch typische Schwierigkeiten im Alltag und wann Sie Hilfe benötigen.`,
    tips: [
      'Sammeln Sie alle medizinischen Unterlagen',
      'Führen Sie ein Pflegetagebuch',
      'Notieren Sie Stürze oder Notfälle',
    ]
  },
  {
    id: 'help',
    icon: HeartHandshake,
    title: 'Wie wir helfen',
    content: `Bei Morgenlicht unterstützen wir Sie nicht nur nach der Pflegegradeinstufung, sondern auch davor:

• Wir helfen beim Ausfüllen des Antrags
• Wir bereiten Sie auf den Gutachterbesuch vor
• Wir begleiten Sie auf Wunsch beim Termin
• Nach der Einstufung übernehmen wir die Abrechnung mit Ihrer Pflegekasse

Selbst wenn Sie noch keinen Pflegegrad haben, können wir gemeinsam herausfinden, ob ein Antrag für Sie sinnvoll ist.`,
    tips: [
      'Kostenlose Erstberatung',
      'Hilfe bei der Antragstellung',
      'Unterstützung beim Gutachtertermin',
    ]
  },
]

export default function PflegegradGuide() {
  const [currentStep, setCurrentStep] = useState(0)

  const step = steps[currentStep]
  const IconComponent = step.icon
  const progress = ((currentStep + 1) / steps.length) * 100

  return (
    <div className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#37474F] mb-2">
            Pflegegrad verstehen
          </h1>
          <p className="text-lg text-[#455A64]">
            Schritt für Schritt zu Ihrem Anspruch
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-[#455A64] mb-2">
            <span>Schritt {currentStep + 1} von {steps.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-white/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#26A69A] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <GlassCard className="p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#26A69A]/10 rounded-full">
              <IconComponent className="w-6 h-6 text-[#0D6E64]" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold text-[#37474F]">{step.title}</h2>
          </div>

          <div className="prose prose-lg text-[#37474F] mb-8 whitespace-pre-line">
            {step.content}
          </div>

          {/* Tips */}
          <div className="bg-[#E0F2F1] rounded-xl p-6">
            <h3 className="font-semibold text-[#0D6E64] mb-4">Wichtige Hinweise</h3>
            <ul className="space-y-2">
              {step.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#0D6E64] mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-[#37474F]">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </GlassCard>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <GlassButton
            variant="ghost"
            size="lg"
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="order-2 sm:order-1"
          >
            <ArrowLeft className="w-5 h-5 mr-2" aria-hidden="true" />
            Zurück
          </GlassButton>

          {currentStep < steps.length - 1 ? (
            <GlassButton
              variant="primary"
              size="lg"
              onClick={() => setCurrentStep(currentStep + 1)}
              className="order-1 sm:order-2"
            >
              Weiter
              <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
            </GlassButton>
          ) : (
            <GlassButton
              variant="primary"
              size="lg"
              className="order-1 sm:order-2"
            >
              <Link href="/kontakt" className="flex items-center gap-2">
                Kostenlose Beratung anfragen
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </GlassButton>
          )}
        </div>

        {/* Step Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {steps.map((s, index) => (
            <button
              key={s.id}
              onClick={() => setCurrentStep(index)}
              className={`w-3 h-3 rounded-full transition-colors
                         focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2
                         ${index === currentStep
                           ? 'bg-[#26A69A]'
                           : index < currentStep
                             ? 'bg-[#26A69A]/50'
                             : 'bg-white/50'
                         }`}
              aria-label={`Gehe zu Schritt ${index + 1}: ${s.title}`}
              aria-current={index === currentStep ? 'step' : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
