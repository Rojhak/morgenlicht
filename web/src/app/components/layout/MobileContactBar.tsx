import { MessageCircle, Phone } from 'lucide-react'
import { SITE } from '@/config/site'

const actionClass =
  'flex min-h-14 flex-1 items-center justify-center gap-3 px-4 py-3 text-lg font-bold focus-visible:outline-offset-[-4px]'

export function MobileContactBar() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-[60] flex border-t border-line bg-white pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_rgba(0,0,0,0.12)] md:hidden"
      aria-label="Schneller Kontakt"
    >
      <a
        href={SITE.phone.href}
        className={`${actionClass} plausible-event-name=Telefonklick bg-forest text-white focus-visible:outline-sun`}
      >
        <Phone className="h-6 w-6" aria-hidden="true" />
        Anrufen
      </a>
      <a
        href={SITE.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${actionClass} plausible-event-name=WhatsAppklick text-forest`}
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
        WhatsApp
      </a>
    </nav>
  )
}
