import Link from 'next/link'
import { ArrowRight, MessageCircle, Phone } from 'lucide-react'
import { SITE } from '@/config/site'

interface ContactActionsProps {
  tone?: 'light' | 'dark'
  showContactLink?: boolean
  contactLinkLabel?: string
  phoneLabel?: string
  whatsappLabel?: string
  className?: string
}

/**
 * Primary conversion actions. Calling is the fastest route for older people and
 * relatives, WhatsApp is the written alternative; the contact page lists everything.
 */
export function ContactActions({
  tone = 'light',
  showContactLink = true,
  contactLinkLabel = 'Alle Kontaktwege',
  phoneLabel = `Anrufen: ${SITE.phone.label}`,
  whatsappLabel = 'WhatsApp schreiben',
  className = '',
}: ContactActionsProps) {
  const dark = tone === 'dark'

  return (
    <div className={className}>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a
          href={SITE.phone.href}
          className={`plausible-event-name=Telefonklick inline-flex min-h-14 items-center justify-center gap-3 rounded-xl px-6 text-lg font-bold transition ${
            dark ? 'bg-sun text-forest-deep hover:bg-[#FCD34D]' : 'bg-forest text-white hover:bg-forest-deep'
          }`}
        >
          <Phone className="h-5 w-5 flex-none" aria-hidden="true" />
          {phoneLabel}
        </a>
        <a
          href={SITE.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`plausible-event-name=WhatsAppklick inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border-2 px-6 text-lg font-bold transition ${
            dark
              ? 'border-white/60 text-white hover:bg-white/10'
              : 'border-forest/35 bg-white text-forest hover:border-forest'
          }`}
        >
          <MessageCircle className="h-5 w-5 flex-none" aria-hidden="true" />
          {whatsappLabel}
          <span className="sr-only"> (öffnet WhatsApp in neuem Fenster)</span>
        </a>
      </div>
      {showContactLink && (
        <Link
          href="/kontakt"
          className={`plausible-event-name=Kontaktklick mt-4 inline-flex min-h-11 items-center gap-2 text-lg font-semibold underline decoration-2 underline-offset-4 ${
            dark ? 'text-white decoration-sun' : 'text-forest decoration-sun'
          }`}
        >
          {contactLinkLabel}
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
      )}
    </div>
  )
}
