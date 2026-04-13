'use client'

import { Phone, Mail, CheckCircle, Globe, MessageCircle } from 'lucide-react'
import Image from 'next/image'

const PHONE_HREF = 'tel:03023593028'
const WHATSAPP_HREF = 'https://wa.me/4915156057365'

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] selection:bg-[#144E41]/10 selection:text-[#144E41]">
      {/* Hero Section */}
      <section className="pt-24 md:pt-36 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white border border-[#144E41]/10 rounded-full text-sm font-bold tracking-tight text-[#144E41] mb-10 shadow-sm">
            <Globe className="w-4 h-4 text-[#FBBF24]" />
            <span>Wir sprechen Ihre Sprache</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-heading text-[#144E41] mb-8 tracking-tighter">
            Anfrage & Kontakt
          </h1>

          <p className="text-xl md:text-2xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed font-body font-light">
            Gerne beraten wir Sie persönlich und barrierefrei auf <span className="text-[#144E41] font-semibold">Deutsch, Türkisch</span> oder <span className="text-[#144E41] font-semibold">Englisch</span>.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-32 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Personalization Section */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end text-center lg:text-right pt-6">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-[#FBBF24] rounded-full blur-2xl opacity-20 animate-pulse" />
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-2xl overflow-hidden grayscale-[0.2]">
                  <Image
                    src="/images/asiye-duman.jpeg"
                    alt="Asiye Duman"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold font-heading text-[#144E41] mb-1">
                Asiye Duman
              </h3>
              <p className="text-sm font-bold uppercase tracking-widest text-[#FBBF24]">
                Ihre Ansprechpartnerin
              </p>
              <p className="mt-4 text-[#6B7280] leading-relaxed max-w-[200px]">
                „Wir begleiten Sie mit Herz und Verstand – in Ihrer Sprache.“
              </p>
            </div>

            {/* Contact Cards Section */}
            <div className="lg:col-span-8 space-y-6">

              {/* Phone Card */}
              <div className="group bg-white rounded-[24px] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-gray-100 transition-all hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-[#F0FDF4] rounded-2xl text-[#144E41]">
                        <Phone className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold font-heading text-[#134E4A]">Zentrale</h3>
                    </div>
                    <a href={PHONE_HREF} className="text-3xl md:text-4xl font-bold text-[#144E41] hover:text-[#217362] transition-colors block tracking-tighter">
                      030 235 930 28
                    </a>
                  </div>
                  <div className="flex flex-col items-start md:items-end">
                    <p className="text-sm font-bold uppercase tracking-widest text-[#6B7280]/60 mb-1">Erreichbarkeit</p>
                    <p className="text-lg font-medium text-[#6B7280]">Mo–Fr: 09:00 – 16:00 Uhr</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Card - Featured */}
              <div className="group relative bg-[#144E41] rounded-[24px] p-8 md:p-10 shadow-2xl shadow-[#144E41]/20 transition-all hover:shadow-[0_25px_70px_rgba(20,78,65,0.3)] hover:-translate-y-1 overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 scale-150 rotate-12">
                   <WhatsAppIcon className="w-32 h-32 text-white" />
                </div>

                <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl text-white">
                        <WhatsAppIcon className="w-6 h-6" />
                      </div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold font-heading text-white">WhatsApp</h3>
                        <span className="hidden sm:inline-block px-3 py-1 bg-[#FBBF24] text-[#144E41] text-[10px] font-black uppercase tracking-widest rounded-full">
                          Schnell & Unkompliziert
                        </span>
                      </div>
                    </div>
                    <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="text-3xl md:text-4xl font-bold text-white hover:text-[#FBBF24] transition-colors block tracking-tighter">
                      0151 560 573 65
                    </a>
                  </div>

                  <div className="flex flex-col items-start md:items-end">
                    <p className="text-white/60 text-sm leading-relaxed max-w-[200px] md:text-right">
                      Senden Sie uns einfach eine Nachricht – wir antworten zeitnah.
                    </p>
                  </div>
                </div>

                {/* Mobile-only badge */}
                <div className="sm:hidden mt-6">
                   <span className="inline-block px-4 py-1.5 bg-[#FBBF24] text-[#144E41] text-[10px] font-black uppercase tracking-widest rounded-full">
                      Schnell & Unkompliziert
                    </span>
                </div>
              </div>

              {/* Email Row - Minimalist */}
              <div className="flex items-center justify-center pt-8">
                <a href="mailto:info@morgenlicht-alltagshilfe.de" className="flex items-center gap-3 group px-8 py-3 rounded-full hover:bg-[#144E41]/5 transition-all">
                  <Mail className="w-5 h-5 text-[#6B7280] group-hover:text-[#144E41] transition-colors" />
                  <span className="text-lg font-medium text-[#6B7280] group-hover:text-[#144E41] transition-colors">info@morgenlicht-alltagshilfe.de</span>
                </a>
              </div>

            </div>
          </div>

          {/* Bottom Trust Section */}
          <div className="mt-24 pt-16 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: CheckCircle, title: 'Staatlich anerkannt', text: 'Anerkannter Anbieter nach § 45a SGB XI für alle Pflegekassen.' },
              { icon: Globe, title: 'Mehrsprachige Beratung', text: 'Hilfe und Beratung auf Deutsch, Türkisch und Englisch.' },
              { icon: MessageCircle, title: 'Persönlicher Kontakt', text: 'Keine Warteschleifen. Wir beraten Sie direkt im persönlichen Gespräch.' }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#F0FDF4] flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-[#144E41]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#144E41] mb-1 font-heading">{item.title}</h4>
                  <p className="text-sm text-[#6B7280] leading-relaxed italic">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
