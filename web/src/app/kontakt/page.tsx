import { Check, Clock3, Mail, MapPin, MessageCircle, Phone, Printer } from 'lucide-react'
import { InquiryForm } from '@/app/components/forms/InquiryForm'
import { JsonLd } from '../components/site/JsonLd'
import { Kicker } from '../components/site/Kicker'
import { PageHero } from '../components/site/PageHero'
import { ContactActions } from '../components/site/ContactActions'
import { SITE, SITE_URL } from '@/config/site'
import { BUSINESS_ID, graph } from '@/lib/schema'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Kontakt zur Alltagshilfe in Berlin | Morgenlicht',
  description:
    'Morgenlicht anrufen (030 235 930 28), per WhatsApp oder E-Mail schreiben. Kostenfreie Beratung zur Alltagshilfe auf Deutsch, Türkisch oder Englisch.',
  path: '/kontakt',
})

const whatsappPrefill = `${SITE.whatsapp.href}?text=${encodeURIComponent(
  'Hallo Morgenlicht, ich interessiere mich für Alltagshilfe. Mein Name: … Meine Postleitzahl: … Bitte rufen Sie mich zurück.',
)}`

const questions = [
  'Wo wohnt die Person, die Unterstützung braucht? (Postleitzahl genügt)',
  'Wobei wird Hilfe gewünscht – Haushalt, Einkauf, Begleitung, Alltag?',
  'Wie oft und zu welchen Tageszeiten ungefähr?',
  'Liegt ein Pflegegrad vor, und bei welcher Pflegekasse?',
  'In welcher Sprache sollen Gespräche und Einsätze stattfinden?',
  'Wer ist Ansprechperson – Sie selbst oder Angehörige?',
]

const schema = graph({
  '@type': 'ContactPage',
  '@id': `${SITE_URL}/kontakt#webpage`,
  name: 'Kontakt zu Morgenlicht Alltagshilfe Berlin',
  url: `${SITE_URL}/kontakt`,
  inLanguage: 'de-DE',
  about: { '@id': BUSINESS_ID },
})

export default function KontaktPage() {
  const inquiryFormEnabled = Boolean(
    process.env.RESEND_API_KEY && process.env.EMAIL_TO && process.env.EMAIL_FROM,
  )

  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        crumbs={[{ name: 'Kontakt', href: '/kontakt' }]}
        kicker="Kostenfreie Erstberatung"
        title="Kontakt und Beratung zur Alltagshilfe"
        lead={
          <p>
            Rufen Sie uns an oder schreiben Sie per WhatsApp oder E-Mail. Wir klären gemeinsam,
            welche Unterstützung passt und ob die Pflegekasse die Kosten übernehmen kann.
          </p>
        }
      >
        <ContactActions showContactLink={false} />
        <p className="mt-3 text-base text-muted">Telefonisch erreichbar {SITE.hours.label}</p>
      </PageHero>

      <section aria-labelledby="kontaktwege-title" className="bg-white px-5 py-14 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <h2 id="kontaktwege-title" className="font-heading text-2xl font-bold text-forest md:text-3xl">
              So erreichen Sie uns
            </h2>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              <li>
                <a href={SITE.phone.href} className="plausible-event-name=Telefonklick flex min-h-20 items-center gap-4 px-2 py-4 text-forest transition hover:bg-cream">
                  <Phone className="h-6 w-6 flex-none" aria-hidden="true" />
                  <span>
                    <span className="block text-base font-semibold text-muted">Telefon</span>
                    <span className="block text-xl font-bold">{SITE.phone.label}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={whatsappPrefill} target="_blank" rel="noopener noreferrer" className="plausible-event-name=WhatsAppklick flex min-h-20 items-center gap-4 px-2 py-4 text-forest transition hover:bg-cream">
                  <MessageCircle className="h-6 w-6 flex-none" aria-hidden="true" />
                  <span>
                    <span className="block text-base font-semibold text-muted">WhatsApp (mit vorbereiteter Nachricht)</span>
                    <span className="block text-xl font-bold">{SITE.whatsapp.label}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="plausible-event-name=E-Mail-Klick flex min-h-20 items-center gap-4 px-2 py-4 text-forest transition hover:bg-cream">
                  <Mail className="h-6 w-6 flex-none" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block text-base font-semibold text-muted">E-Mail</span>
                    <span className="block break-all text-lg font-bold">{SITE.email}</span>
                  </span>
                </a>
              </li>
              <li className="flex min-h-20 items-center gap-4 px-2 py-4">
                <Printer className="h-6 w-6 flex-none text-forest" aria-hidden="true" />
                <span>
                  <span className="block text-base font-semibold text-muted">Fax</span>
                  <span className="block text-lg font-bold text-ink">{SITE.fax.label}</span>
                </span>
              </li>
              <li className="flex min-h-20 items-center gap-4 px-2 py-4">
                <Clock3 className="h-6 w-6 flex-none text-forest" aria-hidden="true" />
                <span>
                  <span className="block text-base font-semibold text-muted">Telefonisch erreichbar</span>
                  <span className="block text-lg font-bold text-ink">{SITE.hours.label}</span>
                </span>
              </li>
              <li className="flex min-h-20 items-start gap-4 px-2 py-4">
                <MapPin className="mt-1 h-6 w-6 flex-none text-forest" aria-hidden="true" />
                <span>
                  <span className="block text-base font-semibold text-muted">Geschäftsanschrift</span>
                  <span className="block text-lg font-bold text-ink">
                    {SITE.address.street}, {SITE.address.postalCode} {SITE.address.city}
                  </span>
                  <span className="mt-1 block text-base text-muted">
                    Kein Kundenempfang – die Unterstützung findet bei Ihnen zu Hause statt.
                  </span>
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:border-l lg:border-line lg:pl-16">
            {inquiryFormEnabled ? (
              <section aria-labelledby="rueckruf-title">
                <h2 id="rueckruf-title" className="font-heading text-2xl font-bold text-forest md:text-3xl">
                  Rückruf anfragen
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">
                  Name und Telefonnummer genügen. Wir melden uns telefonisch bei Ihnen.
                </p>
                <div className="mt-8">
                  <InquiryForm />
                </div>
              </section>
            ) : (
              <section aria-labelledby="vorbereitung-title">
                <Kicker>Gut vorbereitet ins Gespräch</Kicker>
                <h2 id="vorbereitung-title" className="mt-4 font-heading text-2xl font-bold text-forest md:text-3xl">
                  Das fragen wir im ersten Gespräch
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">
                  Sie müssen nicht alles sofort wissen. Diese Punkte helfen uns aber, schnell zu
                  sagen, ob und wie wir helfen können.
                </p>
                <ul className="mt-6 border-t border-line">
                  {questions.map((question) => (
                    <li key={question} className="flex gap-3 border-b border-line py-4 text-lg leading-snug text-ink">
                      <Check className="mt-0.5 h-5 w-5 flex-none text-forest" aria-hidden="true" />
                      {question}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-l-4 border-sun bg-cream p-4 text-base leading-relaxed text-ink">
                  <strong className="text-forest">Bitte schicken Sie uns keine Diagnosen oder Arztberichte</strong>{' '}
                  per WhatsApp oder E-Mail. Solche Fragen besprechen wir am Telefon oder persönlich.
                </p>
              </section>
            )}
          </div>
        </div>
      </section>

      <section aria-labelledby="gut-zu-wissen-title" className="bg-mint px-5 py-12 sm:px-6 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 id="gut-zu-wissen-title" className="font-heading text-2xl font-bold text-forest">
            Gut zu wissen
          </h2>
          <ul className="mt-6 grid gap-x-10 gap-y-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['Anerkannter Anbieter', 'Angebot zur Unterstützung im Alltag nach § 45a SGB XI'],
              ['Pflegekassen-Budget', 'Direktabrechnung bei erfüllten Voraussetzungen möglich'],
              ['Drei Sprachen', 'Deutsch, Türkisch und Englisch'],
              ['Einsatzgebiet', 'Berlin-Kreuzberg und Neukölln'],
            ].map(([title, text]) => (
              <li key={title} className="border-t-4 border-sun bg-white p-4">
                <h3 className="font-heading text-lg font-bold text-forest">{title}</h3>
                <p className="mt-1 text-base leading-relaxed text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
