'use client'

import { useState, useId } from 'react'
import { Plus, Minus, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const faqs = [
  {
    question: 'Entstehen für mich zusätzliche Kosten?',
    answer: 'Nein. Ab Pflegegrad 1 stehen Ihnen monatlich 131 € Entlastungsbetrag zu. Wir rechnen direkt mit Ihrer Pflegekasse ab, sodass Sie nichts vorstrecken müssen und Ihr Pflegegeld nicht gekürzt wird.'
  },
  {
    question: 'Muss ich mich um den Papierkram kümmern?',
    answer: 'Wir nehmen Ihnen die Last ab. Von der Aktivierung des Budgets bis zur monatlichen Abrechnung erledigen wir alle Formalitäten mit der Pflegekasse für Sie.'
  },
  {
    question: 'Kann ich die Hilfe auch kurzfristig testen oder kündigen?',
    answer: 'Absolute Freiheit ist uns wichtig. Es gibt keine langen Vertragslaufzeiten. Sie können unsere Unterstützung jederzeit anpassen oder pausieren – ganz so, wie es Ihr Alltag erfordert.'
  },
  {
    question: 'Sind Ihre Mitarbeiter für diese Aufgaben qualifiziert?',
    answer: 'Ja, wir sind ein nach Landesrecht (§ 45a SGB XI) anerkannter Dienstleister. Unsere Alltagsbegleiter sind geschult, herzlich und zuverlässig, um Ihnen die bestmögliche Qualität zu bieten.'
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const baseId = useId()

  return (
    <>

      <section className="bg-[#F7F6F3] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#134E4A] mb-12 text-center">
            Häufige Fragen
          </h2>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-transparent rounded-[12px] overflow-hidden transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-lg"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 bg-white text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#144E41] rounded-[12px]"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-content-${baseId}-${index}`}
                >
                  <span className="font-heading font-semibold text-lg text-[#144E41] pr-4">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-[#144E41] text-white rotate-180' : 'bg-gray-50 text-gray-400 group-hover:text-[#144E41]'}`}>
                     {openIndex === index ? (
                      <Minus className="w-4 h-4" aria-hidden="true" />
                    ) : (
                      <Plus className="w-4 h-4" aria-hidden="true" />
                    )}
                  </div>
                </button>

                <div
                  id={`faq-content-${baseId}-${index}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 pt-0 text-gray-600 font-body leading-relaxed border-t border-gray-50">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
