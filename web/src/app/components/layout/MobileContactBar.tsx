import Link from 'next/link'
import { MessageCircle, Phone, PhoneCall } from 'lucide-react'

const actionClass =
  'flex min-h-14 flex-1 flex-col items-center justify-center gap-0.5 px-2 text-xs font-bold focus:outline-none focus:ring-4 focus:ring-inset focus:ring-[#FFD54F]'

export function MobileContactBar() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-[60] flex border-t border-[#134E4A]/20 bg-white shadow-[0_-8px_24px_rgba(0,0,0,0.12)] md:hidden"
      aria-label="Schneller Kontakt"
    >
      <a
        href="tel:03023593028"
        className={`${actionClass} plausible-event-name=Telefonklick text-[#134E4A]`}
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        Anrufen
      </a>
      <a
        href="https://wa.me/4915156057365"
        target="_blank"
        rel="noopener noreferrer"
        className={`${actionClass} plausible-event-name=WhatsAppklick border-x border-[#134E4A]/15 text-[#134E4A]`}
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        WhatsApp
      </a>
      <Link
        href="/kontakt#rueckruf"
        className={`${actionClass} plausible-event-name=Rueckrufklick bg-[#134E4A] text-white`}
      >
        <PhoneCall className="h-5 w-5" aria-hidden="true" />
        Rückruf
      </Link>
    </nav>
  )
}
