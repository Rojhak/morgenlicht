'use client'

import { Phone, Mail, CheckCircle, Smartphone } from 'lucide-react'
import Image from 'next/image'

const PHONE_HREF = '03023593028'

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-12 md:pb-16 px-4 text-center bg-white">
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#144E41]/10 rounded-full text-xs sm:text-sm font-semibold tracking-wider text-[#144E41] mb-6 shadow-sm h-[34px]">
            <Phone className="w-4 h-4 text-[#144E41]" />
            <span>Wir sind für Sie da</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#144E41] mb-8 tracking-tighter">
            Anfrage & Kontakt
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            Gerne beraten wir Sie persönlich und barrierefrei auf Deutsch, Türkisch oder Englisch.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Personalization Section (Next to Box) */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end text-center lg:text-right pt-8">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl mb-6">
              <Image
                src="/images/asiye-duman.jpeg"
                alt="Asiye Duman"
                fill
                className="object-cover"
              />
            </div>
            <div className="max-w-[240px]">
              <span className="text-sm font-bold text-[#144E41] uppercase tracking-widest block mb-2">Asiye Duman</span>
              <p className="text-lg md:text-xl text-[#144E41] font-heading font-medium italic leading-snug">
                „Wir begleiten Sie mit Herz und Verstand“
              </p>
            </div>
          </div>

          {/* Contact Cards Box */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-[#134E4A] mb-12 font-heading text-center lg:text-left">
                Unsere Erreichbarkeit
              </h2>

              <div className="flex flex-col gap-12 max-w-md mx-auto lg:mx-0">
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 bg-[#F0FDF4] rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-[#144E41]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#134E4A] mb-1">Zentrale</h3>
                    <a href={`tel:${PHONE_HREF}`} className="text-xl font-bold text-[#134E4A] hover:text-[#0F3F3C] transition-colors block">
                      030 235 930 28
                    </a>
                    <p className="text-gray-500 text-sm italic mt-1">Mo–Fr: 09:00 – 16:00 Uhr</p>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 bg-[#F0FDF4] rounded-xl flex items-center justify-center shrink-0">
                     <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#144E41]" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#134E4A] mb-1">WhatsApp & Mobil</h3>
                    <a href="tel:015156057365" className="text-xl font-bold text-[#134E4A] hover:text-[#0F3F3C] transition-colors block">
                      0151 560 573 65
                    </a>
                    <p className="text-gray-500 text-sm italic mt-1">(Schnell & unkompliziert)</p>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 bg-[#F0FDF4] rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-[#144E41]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#134E4A] mb-1">E-Mail</h3>
                    <a href="mailto:info@morgenlicht-alltagshilfe.de" className="text-lg sm:text-xl font-bold text-[#134E4A] hover:text-[#0F3F3C] transition-colors break-words block">
                      info@morgenlicht-alltagshilfe.de
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-gray-100">
                <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                  <div className="w-12 h-12 bg-[#F0FDF4] rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle className="w-6 h-6 text-[#144E41]" />
                  </div>
                  <div className="text-[#144E41]">
                    <p className="text-xs text-gray-500 font-bold mb-2 uppercase tracking-widest">
                      Zertifizierte Qualität
                    </p>
                    <h3 className="font-heading font-bold text-lg mb-2">
                      Anerkannter Anbieter <span className="font-normal text-gray-400 text-sm italic">nach § 45a SGB XI</span>
                    </h3>
                    <p className="text-base leading-relaxed max-w-md">
                      <span className="font-bold">Kostenlos</span> ab Pflegegrad 1 durch direkte Abrechnung mit Ihrer Pflegekasse.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
