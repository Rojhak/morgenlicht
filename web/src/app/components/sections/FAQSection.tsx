'use client'

import { useState, useId } from 'react'
import { Plus, Minus } from 'lucide-react'
import { homeFaqs } from '@/content/homeFaqs'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const baseId = useId()

  return (
    <section className="bg-[#F7F6F3] px-6 py-16 md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-[#134E4A] md:text-4xl">
            Häufige Fragen
          </h2>
          <p className="mb-0 mt-4 text-lg leading-relaxed text-[#4B5563]">
            Klare Antworten zu Leistungen, Pflegekasse und persönlicher Unterstützung.
          </p>
        </div>

        <div className="mt-10 border-y border-[#134E4A]/25">
          {homeFaqs.map((faq, index) => {
            const triggerId = `faq-trigger-${baseId}-${index}`
            const contentId = `faq-content-${baseId}-${index}`
            const isOpen = openIndex === index

            return (
              <article
                key={faq.question}
                className="border-b border-[#134E4A]/20 last:border-b-0"
              >
                <h3>
                  <button
                    id={triggerId}
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="group flex min-h-16 w-full items-center justify-between rounded-lg px-1 py-5 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFD54F] focus-visible:ring-inset"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                  >
                    <span className="pr-5 font-heading text-lg font-semibold leading-snug text-[#134E4A] md:text-xl">
                      {faq.question}
                    </span>
                    <span className="flex h-11 w-11 flex-none items-center justify-center text-[#134E4A] transition-colors group-hover:text-[#0F3F3C]">
                      {isOpen ? (
                        <Minus className="h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Plus className="h-6 w-6" aria-hidden="true" />
                      )}
                    </span>
                  </button>
                </h3>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={triggerId}
                  hidden={!isOpen}
                >
                  <p className="mb-0 max-w-3xl pb-6 pr-12 text-lg leading-relaxed text-[#4B5563]">
                    {faq.answer}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
