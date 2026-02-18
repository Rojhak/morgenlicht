'use client'

import { useState } from 'react'
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

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#134E4A] mb-12 text-center">
          Häufige Fragen
        </h2>

        {/* FAQ List */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-[12px] overflow-hidden transition-all duration-300 hover:border-[#134E4A]/30 hover:shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-white text-left group"
              >
                <span className="font-heading font-semibold text-lg text-[#144E41] pr-4">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-[#144E41] text-white' : 'bg-gray-50 text-gray-400 group-hover:text-[#144E41]'}`}>
                   {openIndex === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 font-body leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA Box */}
        <div className="bg-[#FAF9F6] rounded-[24px] p-8 md:p-10 text-center border border-gray-100">
          <h3 className="font-heading text-xl md:text-2xl font-bold text-[#134E4A] mb-4">
            Noch Fragen offen? Lassen Sie uns unverbindlich sprechen.
          </h3>
          <div className="flex justify-center mt-6">
            <Link
              href="/kontakt"
              className="inline-flex items-center bg-[#144E41] text-white hover:bg-[#0F3F3C] transition-all font-semibold text-lg px-8 py-3 rounded-xl shadow-md hover:shadow-lg"
            >
              Jetzt Kontakt aufnehmen
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
