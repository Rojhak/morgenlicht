'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calculator, Phone, ArrowRight, HelpCircle } from 'lucide-react'
import { GlassCard, GlassButton } from '../glass'
import { calculateCoveredHours, formatHours, formatCurrency, CARE_RATES } from '@/config/rates'

const PFLEGEGRADE = [
  { value: 1, label: 'Pflegegrad 1' },
  { value: 2, label: 'Pflegegrad 2' },
  { value: 3, label: 'Pflegegrad 3' },
  { value: 4, label: 'Pflegegrad 4' },
  { value: 5, label: 'Pflegegrad 5' },
]

const PHONE = '069 12345678'

export function CareFinder() {
  const [selectedGrad, setSelectedGrad] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)

  const handleCalculate = () => {
    if (selectedGrad !== null) {
      setShowResult(true)
    }
  }

  const hours = selectedGrad ? calculateCoveredHours(selectedGrad) : 0

  return (
    <section className="py-16 px-4" aria-labelledby="wizard-title">
      <div className="max-w-2xl mx-auto">
        <GlassCard className="p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-[#26A69A]/10 rounded-full mb-4">
              <Calculator className="w-7 h-7 text-[#0D6E64]" aria-hidden="true" />
            </div>
            <h2 id="wizard-title" className="text-2xl font-bold text-[#37474F] mb-2">
              Ihr persönlicher Pflegebudget-Rechner
            </h2>
            <p className="text-[#455A64]">
              Finden Sie heraus, wie viele Stunden Unterstützung Ihnen zustehen
            </p>
          </div>

          {!showResult ? (
            <div className="space-y-6">
              <fieldset>
                <legend className="block text-sm font-medium text-[#37474F] mb-3">
                  Ihr Pflegegrad
                </legend>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {PFLEGEGRADE.map((grad) => (
                    <button
                      key={grad.value}
                      onClick={() => setSelectedGrad(grad.value)}
                      className={`
                        h-12 px-4 rounded-xl font-medium transition-all duration-200
                        flex items-center justify-center
                        border shadow-sm
                        focus:outline-none focus:ring-4 focus:ring-gold-500 focus:ring-offset-2
                        ${selectedGrad === grad.value
                          ? 'bg-teal-800 border-teal-800 text-white shadow-md transform scale-[1.02]'
                          : 'bg-white border-teal-100 text-teal-900 hover:border-teal-300 hover:bg-teal-50 hover:shadow-md'
                        }
                      `}
                      aria-pressed={selectedGrad === grad.value}
                    >
                      {grad.label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <Link
                href="/pflegegrad-guide"
                className="flex items-center gap-2 text-sm text-[#0D6E64] hover:underline
                           focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2 rounded"
              >
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                Ich habe noch keinen Pflegegrad
              </Link>

              <GlassButton
                variant="primary"
                size="lg"
                className="w-full"
                onClick={handleCalculate}
                disabled={selectedGrad === null}
              >
                Berechnen
                <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </GlassButton>
            </div>
          ) : hours > 0 ? (
            <div className="text-center space-y-6">
              <div className="py-6 px-4 bg-[#E0F2F1] rounded-xl">
                <p className="text-sm text-[#0D6E64] mb-2">Ihr Ergebnis</p>
                <p className="text-5xl font-bold text-[#0D6E64] mb-1">
                  {formatHours(hours)}
                </p>
                <p className="text-lg text-[#37474F]">Stunden pro Monat</p>
                <p className="text-sm text-[#455A64] mt-2">
                  vollständig durch Ihre Pflegekasse abgedeckt
                </p>
              </div>

              <p className="text-sm text-[#455A64]">
                Berechnung basiert auf dem Entlastungsbetrag von {formatCurrency(CARE_RATES.entlastungsbetrag)} monatlich
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <GlassButton
                  variant="primary"
                  size="lg"
                  className="flex-1"
                  onClick={() => window.location.href = '/kontakt'}
                >
                  Jetzt anfragen
                </GlassButton>
                <GlassButton
                  variant="ghost"
                  size="lg"
                  onClick={() => {
                    setShowResult(false)
                    setSelectedGrad(null)
                  }}
                >
                  Neu berechnen
                </GlassButton>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-6">
              <div className="py-6 px-4 bg-[#FFF3E0] rounded-xl">
                <p className="text-lg font-semibold text-[#37474F] mb-2">
                  Wir helfen Ihnen weiter
                </p>
                <p className="text-[#455A64] mb-4">
                  Rufen Sie uns direkt an und wir besprechen Ihre Möglichkeiten.
                </p>
                <a
                  href={`tel:${PHONE.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 text-xl font-bold text-[#B8472A]
                             hover:underline focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2 rounded"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  {PHONE}
                </a>
              </div>

              <GlassButton
                variant="ghost"
                size="lg"
                onClick={() => {
                  setShowResult(false)
                  setSelectedGrad(null)
                }}
              >
                Zurück
              </GlassButton>
            </div>
          )}
        </GlassCard>
      </div>
    </section>
  )
}
