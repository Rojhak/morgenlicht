import { MessageCircle, Phone } from 'lucide-react'

const actionClass =
  'flex min-h-14 flex-1 items-center justify-center gap-3 px-4 py-3 text-base font-bold focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#FFD54F]'

export function MobileContactBar() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-[60] flex border-t border-[#134E4A]/20 bg-white pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_rgba(0,0,0,0.12)] md:hidden"
      aria-label="Schneller Kontakt"
    >
      <a
        href="tel:03023593028"
        className={`${actionClass} plausible-event-name=Telefonklick bg-[#134E4A] text-white`}
      >
        <Phone className="h-6 w-6" aria-hidden="true" />
        Anrufen
      </a>
      <a
        href="https://wa.me/4915156057365"
        target="_blank"
        rel="noopener noreferrer"
        className={`${actionClass} plausible-event-name=WhatsAppklick text-[#134E4A]`}
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
        WhatsApp
      </a>
    </nav>
  )
}
