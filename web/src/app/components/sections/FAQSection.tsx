import Link from 'next/link'
import { ArrowRight, Plus } from 'lucide-react'
import type { QA } from '@/lib/schema'

interface FAQSectionProps {
  items: QA[]
  title?: string
  intro?: string
  headingId?: string
  headingLevel?: 'h2' | 'h3'
  moreLink?: { href: string; label: string }
}

/**
 * Accessible FAQ built on native <details>: answers are always part of the HTML,
 * work without JavaScript and are announced correctly by screen readers.
 */
export function FAQList({ items, headingLevel = 'h3' }: { items: QA[]; headingLevel?: 'h2' | 'h3' }) {
  const Heading = headingLevel

  return (
    <div className="border-y border-line">
      {items.map((faq, index) => (
        <details key={faq.question} className="group border-b border-line last:border-b-0" open={index === 0}>
          <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-4 rounded-lg px-1 py-5 text-left">
            <Heading className="font-heading text-lg font-semibold leading-snug text-forest md:text-xl">
              {faq.question}
            </Heading>
            <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-forest/25 text-forest transition group-open:rotate-45 group-open:bg-forest group-open:text-white">
              <Plus className="h-6 w-6" aria-hidden="true" />
            </span>
          </summary>
          <p className="max-w-3xl pb-6 pr-2 text-lg leading-relaxed text-muted md:pr-14">{faq.answer}</p>
        </details>
      ))}
    </div>
  )
}

export function FAQSection({
  items,
  title = 'Häufige Fragen',
  intro = 'Klare Antworten zu Leistungen, Pflegekasse und persönlicher Unterstützung.',
  headingId = 'faq-title',
  moreLink,
}: FAQSectionProps) {
  return (
    <section aria-labelledby={headingId} className="bg-sand px-5 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 id={headingId} className="font-heading text-3xl font-bold text-forest md:text-4xl">
          {title}
        </h2>
        {intro && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>}
        <div className="mt-10">
          <FAQList items={items} />
        </div>
        {moreLink && (
          <Link
            href={moreLink.href}
            className="mt-6 inline-flex min-h-12 items-center gap-2 text-lg font-bold text-forest underline decoration-sun decoration-2 underline-offset-4 hover:decoration-forest"
          >
            {moreLink.label}
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        )}
      </div>
    </section>
  )
}
