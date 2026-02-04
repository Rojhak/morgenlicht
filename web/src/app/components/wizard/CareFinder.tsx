'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calculator, Phone, ArrowRight, HelpCircle, Check, Clock, ChevronDown } from 'lucide-react'
import { GlassCard, GlassButton } from '../glass'
import { getMonthlyBudget, formatHours, formatCurrency, CARE_RATES } from '@/config/rates'

const PFLEGEGRADE = [
  { value: 1, label: '1', description: 'Geringe Beeinträchtigung' },
  { value: 2, label: '2', description: 'Erhebliche Beeinträchtigung' },
  { value: 3, label: '3', description: 'Schwere Beeinträchtigung' },
  { value: 4, label: '4', description: 'Schwerste Beeinträchtigung' },
  { value: 5, label: '5', description: 'Schwerste mit Anforderungen' },
]

const PHONE = '069 12345678'

type Step = 'select' | 'sachleistung' | 'result'

export function CareFinder() {
  const [step, setStep] = useState<Step>('select')
  const [selectedGrad, setSelectedGrad] = useState<number | null>(null)
  const [usesSachleistungen, setUsesSachleistungen] = useState<boolean | null>(null)
  const [showDetails, setShowDetails] = useState(false)

  const handleGradSelect = (grad: number) => {
    setSelectedGrad(grad)
  }

  const handleNext = () => {
    if (selectedGrad === null) return

    if (selectedGrad === 1) {
      setUsesSachleistungen(false)
      setStep('result')
    } else {
      setStep('sachleistung')
    }
  }

  const handleSachleistungAnswer = (uses: boolean) => {
    setUsesSachleistungen(uses)
    setStep('result')
  }

  const handleReset = () => {
    setStep('select')
    setSelectedGrad(null)
    setUsesSachleistungen(null)
    setShowDetails(false)
  }

  const budget = selectedGrad
    ? getMonthlyBudget(selectedGrad, usesSachleistungen ?? false)
    : { base: 0, max: 0, convertible: 0, sachleistung: 0 }

  const hours = selectedGrad
    ? Math.floor((budget.max / CARE_RATES.hourlyRate) * 10) / 10
    : 0

  const hasExtra = budget.convertible > 0 && !usesSachleistungen

  return (
    <section className="py-20 px-4" aria-labelledby="calculator-title">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FFD54F] to-[#FFA726] rounded-2xl shadow-lg mb-5">
            <Calculator className="w-8 h-8 text-white" aria-hidden="true" />
          </div>
          <h2 id="calculator-title" className="text-3xl md:text-4xl font-bold text-[#37474F] mb-3">
            Ihr Pflegebudget-Rechner
          </h2>
          <p className="text-lg text-[#546E7A] max-w-xl mx-auto">
            In nur 2 Schritten Ihr persönliches Budget berechnen
          </p>
        </div>

        <GlassCard className="p-8 md:p-10 shadow-xl border-0">
          {/* Progress Indicator */}
          <div
            className="flex items-center justify-center gap-2 mb-8"
            role="progressbar"
            aria-label="Fortschritt"
            aria-valuenow={step === 'select' ? 1 : step === 'result' ? 2 : 1}
            aria-valuemin={1}
            aria-valuemax={2}
          >
            <div className={`h-1.5 rounded-full transition-all duration-300 ${step !== 'select' ? 'w-6 bg-[#26A69A]' : 'w-8 bg-[#26A69A]'}`} aria-hidden="true" />
            <div className={`h-1.5 rounded-full transition-all duration-300 ${step === 'result' ? 'w-8 bg-[#26A69A]' : 'w-6 bg-gray-200'}`} aria-hidden="true" />
          </div>

          {/* Step 1: Select Pflegegrad */}
          {step === 'select' && (
            <div className="space-y-8">
              <fieldset>
                <legend className="block text-xl font-semibold text-[#37474F] mb-8 text-center">
                  Welchen Pflegegrad haben Sie?
                </legend>
                <div className="grid grid-cols-5 gap-3 sm:gap-4">
                  {PFLEGEGRADE.map((grad) => (
                    <button
                      key={grad.value}
                      onClick={() => handleGradSelect(grad.value)}
                      className={`
                        aspect-square rounded-2xl font-bold text-2xl sm:text-3xl transition-all duration-300
                        flex flex-col items-center justify-center
                        focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2
                        ${selectedGrad === grad.value
                          ? 'bg-gradient-to-br from-[#0D6E64] to-[#26A69A] text-white shadow-xl scale-105'
                          : 'bg-white text-[#37474F] hover:bg-white/90 border-2 border-gray-200 hover:border-[#26A69A]'
                        }
                      `}
                      aria-pressed={selectedGrad === grad.value}
                    >
                      {grad.label}
                    </button>
                  ))}
                </div>
                <div className="mt-4 text-center text-base text-[#546E7A] font-medium">
                  {selectedGrad && PFLEGEGRADE.find(g => g.value === selectedGrad)?.description}
                </div>
              </fieldset>

              <Link
                href="/pflegegrad-guide"
                className="flex items-center justify-center gap-2 text-[#0D6E64] hover:underline
                           focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2 rounded py-2 font-medium"
              >
                <HelpCircle className="w-5 h-5" aria-hidden="true" />
                Ich kenne meinen Pflegegrad nicht
              </Link>

              <GlassButton
                variant="primary"
                size="lg"
                className="w-full shadow-lg"
                onClick={handleNext}
                disabled={selectedGrad === null}
              >
                Weiter
                <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </GlassButton>
            </div>
          )}

          {/* Step 2: Sachleistung Question - Plain Language */}
          {step === 'sachleistung' && (
            <div className="space-y-8">
              <div className="text-center">
                <p className="text-xl font-semibold text-[#37474F] mb-3">
                  Nutzen Sie bereits einen Pflegedienst?
                </p>
                <p className="text-[#546E7A]">
                  Zum Beispiel Hilfe beim Waschen oder medizinische Pflege
                </p>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <button
                  onClick={() => handleSachleistungAnswer(false)}
                  className="p-8 rounded-2xl bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] hover:from-[#C8E6C9] hover:to-[#A5D6A7] border-2 border-[#0D6E64]/20 hover:border-[#0D6E64]
                             transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1
                             focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2"
                >
                  <div className="text-4xl font-bold text-[#0D6E64] mb-3">Nein</div>
                  <div className="text-[#546E7A] font-medium">Mehr Budget verfügbar</div>
                </button>
                <button
                  onClick={() => handleSachleistungAnswer(true)}
                  className="p-8 rounded-2xl bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-[#546E7A]
                             transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1
                             focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2"
                >
                  <div className="text-4xl font-bold text-[#37474F] mb-3">Ja</div>
                  <div className="text-[#546E7A] font-medium">Nur Entlastungsbetrag</div>
                </button>
              </div>

              <button
                onClick={() => setStep('select')}
                className="flex items-center justify-center gap-2 w-full text-[#546E7A] hover:text-[#37474F]
                           focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2 rounded py-2 font-medium"
              >
                <ArrowRight className="w-5 h-5 rotate-180" aria-hidden="true" />
                Zurück
              </button>
            </div>
          )}

          {/* Step 3: Result - Premium Display */}
          {step === 'result' && hours > 0 && (
            <div className="space-y-8">
              {/* Main Result - Premium Hours Display */}
              <div className="text-center py-12 px-8 bg-gradient-to-br from-[#0D6E64] to-[#26A69A] rounded-3xl shadow-xl relative overflow-hidden">
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-10" aria-hidden="true">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl" />
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl" />
                </div>

                <div className="relative z-10">
                  <Clock className="w-12 h-12 text-[#FFD54F] mx-auto mb-4" aria-hidden="true" />
                  <p className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-2">
                    {formatHours(hours)}
                  </p>
                  <p className="text-xl md:text-2xl text-white/90 font-medium">
                    Stunden pro Monat
                  </p>
                  <p className="text-white/70 mt-3">
                    vollständig von Ihrer Pflegekasse übernommen
                  </p>
                </div>
              </div>

              {/* Optional Details Toggle */}
              <div className="bg-white/50 rounded-2xl">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="flex items-center justify-between w-full p-5 cursor-pointer hover:bg-white/70 rounded-2xl transition-colors select-none focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2"
                  aria-expanded={showDetails}
                  aria-controls="details-content"
                >
                  <span className="font-semibold text-[#37474F] text-lg">Details anzeigen</span>
                  <ChevronDown className={`w-6 h-6 text-[#546E7A] transition-transform duration-200 ${showDetails ? 'rotate-180' : ''}`} />
                </button>

                {showDetails && (
                  <div id="details-content" className="p-5 pt-2 space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-[#0D6E64]/10">
                      <span className="text-[#37474F] font-medium text-base">Entlastungsbetrag</span>
                      <span className="font-bold text-[#37474F] text-lg">{formatCurrency(budget.base)}</span>
                    </div>

                    {hasExtra && (
                      <>
                        <div className="flex justify-between items-center pb-4 border-b border-[#0D6E64]/10">
                          <div>
                            <div className="text-[#37474F] font-medium text-base">Zusätzliches Budget</div>
                            <div className="text-sm text-[#546E7A]">40% von {formatCurrency(budget.sachleistung)}</div>
                          </div>
                          <span className="font-bold text-[#37474F] text-lg">{formatCurrency(budget.convertible)}</span>
                        </div>

                        <div className="flex justify-between items-center pt-2">
                          <span className="font-semibold text-[#0D6E64] text-lg">Gesamt</span>
                          <span className="font-bold text-2xl text-[#0D6E64]">{formatCurrency(budget.max)}/Monat</span>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <GlassButton
                  variant="primary"
                  size="lg"
                  className="flex-1 shadow-lg"
                  as="link"
                  href="/kontakt"
                >
                  Kostenlos anfragen
                  <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                </GlassButton>
                <GlassButton
                  variant="outline"
                  size="lg"
                  onClick={handleReset}
                >
                  Neu berechnen
                </GlassButton>
              </div>
            </div>
          )}

          {/* Fallback for PG1 with no hours */}
          {step === 'result' && hours === 0 && (
            <div className="text-center space-y-6">
              <div className="py-6 px-4 bg-[#FFF3E0] rounded-xl">
                <p className="text-lg font-semibold text-[#37474F] mb-2">
                  Wir helfen Ihnen gerne weiter
                </p>
                <p className="text-[#455A64] mb-4">
                  Rufen Sie uns an – wir besprechen Ihre Möglichkeiten.
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
                onClick={handleReset}
              >
                <ArrowRight className="w-5 h-5 mr-2 rotate-180" aria-hidden="true" />
                Zurück
              </GlassButton>
            </div>
          )}
        </GlassCard>
      </div>
    </section>
  )
}
