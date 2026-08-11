import { CheckCircle, Mail, MessageCircle, Phone } from 'lucide-react'
import { InquiryForm } from '@/app/components/forms/InquiryForm'

const PHONE_LABEL = '030 235 930 28'
const PHONE_HREF = '03023593028'
const MOBILE_LABEL = '0151 560 573 65'
const WHATSAPP_HREF = 'https://wa.me/4915156057365'
const EMAIL = 'info@morgenlicht-alltagshilfe.de'

export default function KontaktPage() {
  const inquiryFormEnabled = Boolean(
    process.env.RESEND_API_KEY && process.env.EMAIL_TO && process.env.EMAIL_FROM,
  )

  return (
    <div className="min-h-screen bg-white text-[#1F2937]">
      <section className="bg-[#F7F6F3] px-6 py-16 text-center md:py-24">
        <div className="mx-auto max-w-4xl">
          <span className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#144E41]/15 bg-white px-5 text-base font-semibold text-[#144E41] shadow-sm">
            <Phone className="h-5 w-5" aria-hidden="true" />
            Persönlicher Erstkontakt
          </span>

          <h1 className="mt-7 font-heading text-3xl font-bold tracking-tight text-[#134E4A] sm:text-4xl md:text-5xl">
            Alltagshilfe in Berlin persönlich anfragen
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#4B5563] md:text-xl">
            Sagen Sie uns kurz, wobei Sie Unterstützung wünschen. Wir beraten Sie auf Deutsch,
            Türkisch oder Englisch und klären gemeinsam die nächsten Schritte.
          </p>

          <div className="mt-9 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <a
              href="#rueckruf"
              className="plausible-event-name=Rueckrufklick inline-flex min-h-14 items-center justify-center rounded-xl bg-[#134E4A] px-7 text-lg font-bold text-white shadow-lg transition hover:bg-[#0F3F3C] focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2"
            >
              Rückruf anfragen
            </a>
            <a
              href={`tel:${PHONE_HREF}`}
              className="plausible-event-name=Telefonklick inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border-2 border-[#134E4A]/25 bg-white px-7 text-lg font-bold text-[#134E4A] transition hover:border-[#134E4A] focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {PHONE_LABEL}
            </a>
          </div>
        </div>
      </section>

      <section id="rueckruf" aria-labelledby="rueckruf-title" className="scroll-mt-28 px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.65fr)]">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.07)] sm:p-8 md:p-10">
            <h2 id="rueckruf-title" className="font-heading text-2xl font-bold text-[#134E4A] md:text-3xl">
              Kostenfreien Rückruf anfragen
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4B5563] md:text-lg">
              Name und Telefonnummer genügen für den ersten Kontakt. Weitere Angaben sind
              freiwillig und helfen uns bei der Vorbereitung.
            </p>

            <div className="mt-8">
              {inquiryFormEnabled ? (
                <InquiryForm />
              ) : (
                <div className="rounded-2xl border border-[#134E4A]/15 bg-[#F0FDF4] p-6 sm:p-8">
                  <h3 className="font-heading text-xl font-bold text-[#134E4A]">
                    Rückruf direkt vereinbaren
                  </h3>
                  <p className="mt-3 leading-relaxed text-[#4B5563]">
                    Rufen Sie uns an oder senden Sie uns per WhatsApp Ihren Namen und das Wort
                    „Rückruf“. Bitte schicken Sie keine Diagnosen oder anderen Gesundheitsdaten.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={`tel:${PHONE_HREF}`}
                      className="plausible-event-name=Telefonklick inline-flex min-h-14 flex-1 items-center justify-center gap-2 rounded-xl bg-[#134E4A] px-5 font-bold text-white transition hover:bg-[#0F3F3C] focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2"
                    >
                      <Phone className="h-5 w-5" aria-hidden="true" />
                      Jetzt anrufen
                    </a>
                    <a
                      href={WHATSAPP_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="plausible-event-name=WhatsAppklick inline-flex min-h-14 flex-1 items-center justify-center gap-2 rounded-xl border-2 border-[#134E4A]/20 bg-white px-5 font-bold text-[#134E4A] transition hover:border-[#134E4A] focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2"
                    >
                      <MessageCircle className="h-5 w-5" aria-hidden="true" />
                      Rückruf per WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          <aside aria-labelledby="direktkontakt-title" className="space-y-6">
            <div className="rounded-2xl bg-[#134E4A] p-6 text-white shadow-lg sm:p-8">
              <h2 id="direktkontakt-title" className="font-heading text-2xl font-bold text-white">
                Lieber direkt Kontakt aufnehmen?
              </h2>
              <p className="mt-3 leading-relaxed text-white/90">
                Wählen Sie den Weg, der für Sie am einfachsten ist.
              </p>

              <div className="mt-7 space-y-4">
                <a
                  href={`tel:${PHONE_HREF}`}
                  className="plausible-event-name=Telefonklick flex min-h-16 items-center gap-4 rounded-xl bg-white px-5 text-[#134E4A] transition hover:bg-[#FFFBEB] focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2 focus:ring-offset-[#134E4A]"
                >
                  <Phone className="h-6 w-6 flex-none" aria-hidden="true" />
                  <span>
                    <span className="block text-sm font-semibold">Telefon</span>
                    <span className="block text-lg font-bold">{PHONE_LABEL}</span>
                  </span>
                </a>

                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="plausible-event-name=WhatsAppklick flex min-h-16 items-center gap-4 rounded-xl bg-white px-5 text-[#134E4A] transition hover:bg-[#FFFBEB] focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2 focus:ring-offset-[#134E4A]"
                >
                  <MessageCircle className="h-6 w-6 flex-none" aria-hidden="true" />
                  <span>
                    <span className="block text-sm font-semibold">WhatsApp</span>
                    <span className="block text-lg font-bold">{MOBILE_LABEL}</span>
                  </span>
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className="plausible-event-name=E-Mail-Klick flex min-h-16 items-center gap-4 rounded-xl bg-white px-5 text-[#134E4A] transition hover:bg-[#FFFBEB] focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2 focus:ring-offset-[#134E4A]"
                >
                  <Mail className="h-6 w-6 flex-none" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold">E-Mail</span>
                    <span className="block break-all text-base font-bold">{EMAIL}</span>
                  </span>
                </a>
              </div>

              <p className="mt-6 text-base text-white/90">Telefonisch erreichbar: Mo–Fr, 09:00–16:00 Uhr</p>
            </div>

            <div className="rounded-2xl border border-[#134E4A]/15 bg-[#F0FDF4] p-6 sm:p-8">
              <CheckCircle className="h-9 w-9 text-[#134E4A]" aria-hidden="true" />
              <h2 className="mt-4 font-heading text-xl font-bold text-[#134E4A]">
                Anerkannter Anbieter nach § 45a SGB XI
              </h2>
              <p className="mt-3 leading-relaxed text-[#4B5563]">
                Ab Pflegegrad 1 kann die Hilfe im verfügbaren Budget{' '}
                <strong className="text-[#134E4A]">ohne Eigenanteil</strong> möglich sein.
                Voraussetzungen und mögliche Zusatzkosten klären wir vor Beginn.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
