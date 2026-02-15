'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Calculator, ArrowRight, HelpCircle, Check, Clock } from 'lucide-react'
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

  const stepContainerRef = useRef<HTMLDivElement>(null)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    stepContainerRef.current?.focus()
  }, [step])

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
    <div className="w-full">
      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <div className={`h-1.5 rounded-full transition-all duration-300 ${step !== 'select' ? 'w-6 bg-[#134E4A]' : 'w-8 bg-[#134E4A]'}`} />
        <div className={`h-1.5 rounded-full transition-all duration-300 ${step === 'result' ? 'w-8 bg-[#134E4A]' : 'w-6 bg-gray-200'}`} />
      </div>

      {/* Step 1: Select Pflegegrad */}
      {step === 'select' && (
        <div
          ref={stepContainerRef}
          tabIndex={-1}
          className="space-y-8 focus:outline-none scroll-mt-32"
        >
          <fieldset>
            <legend className="block text-xl font-bold text-[#1F2937] mb-8 text-center font-heading">
              Welchen Pflegegrad haben Sie?
            </legend>
            <div className="grid grid-cols-5 gap-3 sm:gap-4">
              {PFLEGEGRADE.map((grad) => (
                <button
                  key={grad.value}
                  onClick={() => handleGradSelect(grad.value)}
                  className={`
                    aspect-square rounded-xl font-bold text-2xl sm:text-3xl transition-all duration-200
                    flex flex-col items-center justify-center
                    focus:outline-none focus:ring-4 focus:ring-[#FBBF24] focus:ring-offset-2
                    ${selectedGrad === grad.value
                      ? 'bg-[#134E4A] text-white shadow-lg scale-105'
                      : 'bg-white text-[#1F2937] hover:bg-gray-50 border border-gray-200 hover:border-[#134E4A]'
                    }
                  `}
                  aria-pressed={selectedGrad === grad.value}
                >
                  {grad.label}
                </button>
              ))}
            </div>
            <div className="mt-4 text-center text-base text-[#4B5563] font-medium">
              {selectedGrad ? PFLEGEGRADE.find(g => g.value === selectedGrad)?.description : 'Bitte wählen Sie einen Pflegegrad'}
            </div>
          </fieldset>

          <Link
            href="/pflegegrad-guide"
            className="flex items-center justify-center gap-2 text-[#134E4A] hover:underline font-medium"
          >
            <HelpCircle className="w-5 h-5" aria-hidden="true" />
            Ich kenne meinen Pflegegrad nicht
          </Link>

          <button
            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-md
              ${selectedGrad === null
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-[#134E4A] text-white hover:bg-[#0F3F3C] hover:scale-[1.02]'
              }`}
            onClick={handleNext}
            disabled={selectedGrad === null}
          >
            Weiter
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      )}

      {/* Step 2: Sachleistung Question */}
      {step === 'sachleistung' && (
        <div
          ref={stepContainerRef}
          tabIndex={-1}
          className="space-y-8 focus:outline-none scroll-mt-32"
        >
          <div className="text-center">
            <h2 className="text-xl font-bold text-[#1F2937] mb-3 font-heading">
              Nutzen Sie bereits einen Pflegedienst?
            </h2>
            <p className="text-[#4B5563]">
              Zum Beispiel Hilfe beim Waschen oder medizinische Pflege
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <button
              onClick={() => handleSachleistungAnswer(false)}
              className="p-8 rounded-xl bg-[#F0FDF4] hover:bg-[#DCFCE7] border-2 border-transparent hover:border-[#134E4A]
                         transition-all duration-200 shadow-sm hover:shadow-md text-left group
                         focus:outline-none focus:ring-4 focus:ring-[#FBBF24]"
            >
              <div className="text-3xl font-bold text-[#134E4A] mb-2">Nein</div>
              <div className="text-[#4B5563] font-medium group-hover:text-[#134E4A]">Mehr Budget verfügbar</div>
            </button>
            <button
              onClick={() => handleSachleistungAnswer(true)}
              className="p-8 rounded-xl bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-[#4B5563]
                         transition-all duration-200 shadow-sm hover:shadow-md text-left
                         focus:outline-none focus:ring-4 focus:ring-[#FBBF24]"
            >
              <div className="text-3xl font-bold text-[#1F2937] mb-2">Ja</div>
              <div className="text-[#4B5563] font-medium">Nur Entlastungsbetrag</div>
            </button>
          </div>

          <button
            onClick={() => setStep('select')}
            className="flex items-center justify-center gap-2 w-full text-[#4B5563] hover:text-[#1F2937] font-medium"
          >
            <ArrowRight className="w-5 h-5 rotate-180" aria-hidden="true" />
            Zurück
          </button>
        </div>
      )}

      {/* Step 3: Result */}
      {step === 'result' && hours > 0 && (
        <div
          ref={stepContainerRef}
          tabIndex={-1}
          className="space-y-8 focus:outline-none scroll-mt-32"
        >
          {/* Main Result */}
          <div className="text-center py-10 px-6 bg-[#134E4A] rounded-2xl shadow-lg">
            <Clock className="w-10 h-10 text-[#FBBF24] mx-auto mb-4" aria-hidden="true" />
            <p className="text-6xl font-bold text-white mb-2 font-heading">
              {formatHours(hours)}
            </p>
            <p className="text-xl text-white/90 font-medium">
              Stunden pro Monat
            </p>
            <p className="text-white/70 mt-4 text-sm bg-white/10 inline-block px-4 py-1 rounded-full">
              100% kostenfrei über die Pflegekasse
            </p>
          </div>

          {/* Details Toggle */}
          <details className="bg-gray-50 rounded-xl border border-gray-200">
            <summary
              onClick={(e) => { e.preventDefault(); setShowDetails(!showDetails) }}
              className="flex items-center justify-between w-full p-4 cursor-pointer hover:bg-gray-100 rounded-xl transition-colors select-none"
            >
              <span className="font-semibold text-[#1F2937]">Details zum Budget</span>
              <span className={`text-[#4B5563] transition-transform ${showDetails ? 'rotate-180' : ''}`}>▼</span>
            </summary>

            {showDetails && (
              <div className="p-4 pt-2 space-y-3 border-t border-gray-200">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#4B5563]">Entlastungsbetrag</span>
                  <span className="font-bold text-[#1F2937]">{formatCurrency(budget.base)}</span>
                </div>

                {hasExtra && (
                  <>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-[#4B5563]">Umwandlung (40%)</span>
                      <span className="font-bold text-[#1F2937]">{formatCurrency(budget.convertible)}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                      <span className="font-bold text-[#134E4A]">Gesamtbudget</span>
                      <span className="font-bold text-[#134E4A]">{formatCurrency(budget.max)}</span>
                    </div>
                  </>
                )}
              </div>
            )}
          </details>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/kontakt"
              className="flex-1 bg-[#FBBF24] text-[#1F2937] hover:bg-[#F59E0B] font-bold py-4 px-6 rounded-xl shadow-md text-center flex items-center justify-center gap-2 transition-colors"
            >
              Kostenlos anfragen
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <button
              onClick={handleReset}
              className="flex-1 bg-white text-[#1F2937] border border-gray-200 hover:bg-gray-50 font-medium py-4 px-6 rounded-xl transition-colors"
            >
              Neu berechnen
            </button>
          </div>
        </div>
      )}

      {/* Fallback for PG1 */}
      {step === 'result' && hours === 0 && (
        <div
          ref={stepContainerRef}
          tabIndex={-1}
          className="text-center space-y-6 focus:outline-none scroll-mt-32"
        >
          <div className="py-6 px-4 bg-[#FFFBEB] rounded-xl border border-[#FBBF24]">
            <p className="text-lg font-bold text-[#1F2937] mb-2">
              Pflegegrad 1
            </p>
            <p className="text-[#4B5563] mb-4">
              Ihnen stehen 125 € Entlastungsbetrag zu. Lassen Sie uns besprechen, wie wir das für Sie nutzen können.
            </p>
            <a
              href={`tel:${PHONE.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 text-xl font-bold text-[#134E4A] hover:underline"
            >
              {PHONE}
            </a>
          </div>

          <button
            onClick={handleReset}
            className="text-[#4B5563] hover:text-[#1F2937] font-medium flex items-center justify-center w-full gap-2"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Zurück
          </button>
        </div>
      )}
    </div>
  )
}
