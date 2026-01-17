'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calculator, Phone, ArrowRight, ArrowLeft, HelpCircle, Check, Clock } from 'lucide-react'
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

  const handleGradSelect = (grad: number) => {
    setSelectedGrad(grad)
  }

  const handleNext = () => {
    if (selectedGrad === null) return

    if (selectedGrad === 1) {
      // PG1 has no Sachleistungen, skip to result
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
  }

  const budget = selectedGrad
    ? getMonthlyBudget(selectedGrad, usesSachleistungen ?? false)
    : { base: 0, max: 0, convertible: 0, sachleistung: 0 }

  const hours = selectedGrad
    ? Math.floor((budget.max / CARE_RATES.hourlyRate) * 10) / 10
    : 0

  const hasExtra = budget.convertible > 0 && !usesSachleistungen

  // Progress indicator
  const getProgress = () => {
    if (step === 'select') return 1
    if (step === 'sachleistung') return 2
    return 3
  }

  return (
    <section className="py-16 px-4" aria-labelledby="wizard-title" id="calculator">
      <div className="max-w-2xl mx-auto">
        <GlassCard className="p-6 sm:p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-[#26A69A]/10 rounded-full mb-4">
              <Calculator className="w-7 h-7 text-[#0D6E64]" aria-hidden="true" />
            </div>
            <h2 id="wizard-title" className="text-2xl font-bold text-[#37474F] mb-2">
              Ihr Pflegebudget-Rechner
            </h2>
            <p className="text-[#455A64]">
              Berechnen Sie Ihre monatlichen Stunden in nur 2 Schritten
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-2 mb-8" aria-hidden="true">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center">
                <div
                  className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors
                    ${getProgress() >= num
                      ? 'bg-[#0D6E64] text-white'
                      : 'bg-gray-200 text-gray-500'
                    }
                  `}
                >
                  {getProgress() > num ? <Check className="w-4 h-4" /> : num}
                </div>
                {num < 3 && (
                  <div className={`w-8 sm:w-12 h-1 mx-1 rounded ${getProgress() > num ? 'bg-[#0D6E64]' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Select Pflegegrad */}
          {step === 'select' && (
            <div className="space-y-6">
              <fieldset>
                <legend className="block text-base font-semibold text-[#37474F] mb-4 text-center">
                  Welchen Pflegegrad haben Sie?
                </legend>
                <div className="grid grid-cols-5 gap-2 sm:gap-3">
                  {PFLEGEGRADE.map((grad) => (
                    <button
                      key={grad.value}
                      onClick={() => handleGradSelect(grad.value)}
                      className={`
                        aspect-square rounded-xl font-bold text-xl sm:text-2xl transition-all duration-200
                        flex flex-col items-center justify-center
                        focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2
                        ${selectedGrad === grad.value
                          ? 'bg-[#0D6E64] text-white shadow-lg scale-105'
                          : 'bg-white/60 text-[#37474F] hover:bg-white/80 border-2 border-transparent hover:border-[#0D6E64]/30'
                        }
                      `}
                      aria-pressed={selectedGrad === grad.value}
                      title={grad.description}
                    >
                      {grad.label}
                    </button>
                  ))}
                </div>
                <div className="mt-3 text-center text-sm text-[#455A64]">
                  {selectedGrad && PFLEGEGRADE.find(g => g.value === selectedGrad)?.description}
                </div>
              </fieldset>

              <Link
                href="/pflegegrad-guide"
                className="flex items-center justify-center gap-2 text-sm text-[#0D6E64] hover:underline
                           focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2 rounded py-2"
              >
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                Ich kenne meinen Pflegegrad nicht
              </Link>

              <GlassButton
                variant="primary"
                size="lg"
                className="w-full"
                onClick={handleNext}
                disabled={selectedGrad === null}
              >
                Weiter
                <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </GlassButton>
            </div>
          )}

          {/* Step 2: Sachleistung Question */}
          {step === 'sachleistung' && (
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-base font-semibold text-[#37474F] mb-2">
                  Nutzen Sie bereits ambulante Pflegesachleistungen?
                </p>
                <p className="text-sm text-[#455A64]">
                  Z.B. Hilfe beim Waschen, Anziehen oder medizinische Pflege durch einen Pflegedienst
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => handleSachleistungAnswer(false)}
                  className="p-6 rounded-xl bg-[#E8F5E9] hover:bg-[#C8E6C9] border-2 border-transparent
                             hover:border-[#0D6E64] transition-all duration-200
                             focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2"
                >
                  <div className="text-2xl font-bold text-[#0D6E64] mb-2">Nein</div>
                  <div className="text-sm text-[#455A64]">Mehr Budget verfügbar</div>
                </button>
                <button
                  onClick={() => handleSachleistungAnswer(true)}
                  className="p-6 rounded-xl bg-white/60 hover:bg-white/80 border-2 border-transparent
                             hover:border-[#455A64] transition-all duration-200
                             focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2"
                >
                  <div className="text-2xl font-bold text-[#37474F] mb-2">Ja</div>
                  <div className="text-sm text-[#455A64]">Nur Entlastungsbetrag</div>
                </button>
              </div>

              <button
                onClick={() => setStep('select')}
                className="flex items-center justify-center gap-2 w-full text-sm text-[#455A64] hover:text-[#37474F]
                           focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2 rounded py-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Zurück
              </button>
            </div>
          )}

          {/* Step 3: Result */}
          {step === 'result' && hours > 0 && (
            <div className="space-y-6">
              {/* Main Result - Prominent Hours Display */}
              <div className="relative py-8 px-6 bg-gradient-to-br from-[#E0F2F1] to-[#B2DFDB] rounded-2xl text-center">
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/80 rounded-full text-xs font-medium text-[#0D6E64]">
                    <Check className="w-3 h-3" /> Pflegegrad {selectedGrad}
                  </span>
                </div>

                <div className="flex items-center justify-center gap-3 mb-2">
                  <Clock className="w-8 h-8 text-[#0D6E64]" aria-hidden="true" />
                </div>

                <p className="text-6xl sm:text-7xl font-bold text-[#0D6E64] mb-2">
                  {formatHours(hours)}
                </p>
                <p className="text-xl text-[#37474F] font-medium">
                  Stunden pro Monat
                </p>
                <p className="text-sm text-[#455A64] mt-2">
                  vollständig von Ihrer Pflegekasse übernommen
                </p>
              </div>

              {/* Budget Details */}
              <div className="bg-white/50 rounded-xl p-5 space-y-4">
                <h3 className="font-semibold text-[#37474F] text-sm uppercase tracking-wide">
                  Ihr monatliches Budget
                </h3>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-[#37474F] font-medium">Entlastungsbetrag</span>
                      <span className="text-xs text-[#455A64] block">§45b SGB XI</span>
                    </div>
                    <span className="font-bold text-[#37474F]">{formatCurrency(budget.base)}</span>
                  </div>

                  {hasExtra && (
                    <>
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-[#37474F] font-medium">+ Umwandlungsanspruch</span>
                          <span className="text-xs text-[#455A64] block">40% von {formatCurrency(budget.sachleistung)}</span>
                        </div>
                        <span className="font-bold text-[#37474F]">{formatCurrency(budget.convertible)}</span>
                      </div>

                      <div className="border-t border-[#0D6E64]/20 pt-3 flex justify-between items-center">
                        <span className="font-semibold text-[#37474F]">Gesamt</span>
                        <span className="font-bold text-xl text-[#0D6E64]">{formatCurrency(budget.max)}/Monat</span>
                      </div>
                    </>
                  )}

                  {!hasExtra && selectedGrad && selectedGrad > 1 && (
                    <p className="text-xs text-[#455A64] bg-[#FFF8E1] rounded-lg p-3">
                      💡 <strong>Tipp:</strong> Ohne ambulante Pflegesachleistungen könnten Sie bis zu {formatCurrency(getMonthlyBudget(selectedGrad, false).max)}/Monat erhalten.
                    </p>
                  )}
                </div>
              </div>

              {/* Hourly Rate Info */}
              <p className="text-center text-sm text-[#455A64]">
                Berechnet mit unserem Stundensatz von {formatCurrency(CARE_RATES.hourlyRate)}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <GlassButton
                  variant="primary"
                  size="lg"
                  className="flex-1"
                  as="link"
                  href="/kontakt"
                >
                  Kostenlos anfragen
                  <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                </GlassButton>
                <GlassButton
                  variant="ghost"
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
                  Rufen Sie uns an – wir besprechen Ihre persönlichen Möglichkeiten.
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
                <ArrowLeft className="w-5 h-5 mr-2" aria-hidden="true" />
                Zurück
              </GlassButton>
            </div>
          )}
        </GlassCard>
      </div>
    </section>
  )
}
