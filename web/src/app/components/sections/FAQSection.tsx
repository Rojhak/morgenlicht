'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'Entstehen für mich Kosten?',
    answer: 'Nein, ab Pflegegrad 1 übernimmt die Kasse die 131 € vollumfänglich.'
  },
  {
    question: 'Habe ich eine feste Person?',
    answer: 'Ja, Beständigkeit und Vertrauen stehen bei uns an erster Stelle.'
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
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#134E4A]/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-white text-left group"
              >
                <span className="font-heading font-semibold text-lg text-[#134E4A]">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#134E4A]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-[#134E4A] transition-colors" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 font-body leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
