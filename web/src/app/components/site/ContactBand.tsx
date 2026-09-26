import Image from 'next/image'
import Link from 'next/link'
import { SITE } from '@/config/site'
import { ContactActions } from './ContactActions'
import { Kicker } from './Kicker'

interface ContactBandProps {
  title?: string
  text?: string
  headingId?: string
  lang?: 'de' | 'tr'
}

const COPY = {
  de: {
    kicker: 'Persönliche Beratung',
    person: 'Ihre Ansprechpartnerin:',
    hours: `Telefonisch erreichbar ${SITE.hours.label} · Beratung auf Deutsch, Türkisch und Englisch`,
    actions: {},
  },
  tr: {
    kicker: 'Kişisel danışmanlık',
    person: 'İletişim kişiniz:',
    hours: 'Telefonla ulaşım: Pazartesi–Cuma, 09:00–16:00 · Almanca, Türkçe ve İngilizce',
    actions: {
      phoneLabel: `Arayın: ${SITE.phone.label}`,
      whatsappLabel: 'WhatsApp ile yazın',
      contactLinkLabel: 'Tüm iletişim bilgileri (Almanca)',
    },
  },
} as const

/** Closing call to action with the real contact person, used at the end of content pages. */
export function ContactBand({
  title = 'Sprechen Sie mit uns über Ihre Situation',
  text = 'Im kostenfreien Erstgespräch klären wir, welche Hilfe gewünscht ist, ob Ihre Adresse im Einsatzgebiet liegt und wie die Pflegekasse beteiligt werden kann.',
  headingId = 'kontakt-band-title',
  lang = 'de',
}: ContactBandProps) {
  const copy = COPY[lang]

  return (
    <section aria-labelledby={headingId} lang={lang} className="on-dark bg-forest px-5 py-14 text-white sm:px-6 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
        <div>
          <Kicker tone="dark">{copy.kicker}</Kicker>
          <h2 id={headingId} className="mt-4 font-heading text-3xl font-bold leading-tight text-white md:text-4xl">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90">{text}</p>
          <div className="mt-7 flex items-center gap-4">
            <Image
              src="/images/asiye-duman.jpeg"
              alt=""
              width={64}
              height={64}
              className="h-16 w-16 rounded-full object-cover ring-2 ring-sun"
            />
            <p className="text-base leading-snug text-white/90">
              {copy.person}
              <Link href="/ueber-uns" className="block font-heading text-lg font-bold text-white underline decoration-sun decoration-2 underline-offset-4 hover:decoration-white">
                {SITE.founder}
              </Link>
            </p>
          </div>
        </div>
        <div className="lg:justify-self-end">
          <ContactActions tone="dark" {...copy.actions} />
          <p className="mt-5 text-base text-white/85">{copy.hours}</p>
        </div>
      </div>
    </section>
  )
}
