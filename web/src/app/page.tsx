import Link from 'next/link'
import { Heart, Shield, Users, ArrowRight, Phone, Award, Quote, HandHeart, Home, ShoppingBag, Stethoscope, FileText, Handshake, Star, CheckCircle, Sparkles, MapPin } from 'lucide-react'
import { CareFinder } from '@/app/components/wizard'

export default function HomePage() {
  return (
    <>
      {/* Sektion 1: Hero - Warm Off-White Background - UPDATED */}
      <section className="relative flex items-center bg-[#FAF9F6] py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left z-10 space-y-8">
              {/* Kicker & Headline Group */}
              <div>
                <div className="flex flex-col lg:items-start items-center gap-3 mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
                    <Star className="w-4 h-4 text-[#FBBF24] fill-current" />
                    <span className="text-sm font-semibold text-[#1F2937]">Anerkannt nach § 45a SGB XI</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FEFCE8] rounded-full shadow-sm border border-yellow-100">
                    <span className="text-base">📍</span>
                    <span className="text-sm font-semibold text-[#854D0E]">Alltagshilfe für Senioren & Pflegebedürftige in Berlin</span>
                  </div>
                </div>

                <h1 className="font-heading font-bold text-[#1F2937] text-4xl sm:text-5xl lg:text-[48px] leading-tight mb-8">
                  <span className="text-[#134E4A]">Herzlich & Würdevoll:</span> <br className="hidden lg:block"/>
                  Ihre Alltagshilfe in Berlin
                </h1>

                <p className="font-body font-medium text-[#4B5563] text-lg sm:text-[18px] leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                  Selbstbestimmt leben im eigenen Zuhause. Wir entlasten Sie in der Hauswirtschaft und im Alltag – herzlich, zuverlässig und unkompliziert.
                </p>
              </div>

              {/* 0€ Benefit Box (Redesign) */}
              <div className="bg-[#F0FDF4] border-l-4 border-[#134E4A] rounded-r-xl rounded-l-sm shadow-sm p-6 max-w-xl mx-auto lg:mx-0">
                 <h3 className="font-heading font-bold text-[#1F2937] text-xl mb-2">
                   100% Kostenübernahme ab Pflegegrad 1
                 </h3>
                 <p className="font-body text-[#4B5563] text-base leading-relaxed">
                   Nutzen Sie Ihren Entlastungsbetrag für Haushaltshilfe. Sie zahlen 0 € dazu – wir übernehmen die direkte Abrechnung mit Ihrer Pflegekasse.
                 </p>
              </div>

              {/* Action Block */}
              <div className="mt-8 flex flex-col xl:flex-row items-center gap-6 justify-center lg:justify-start">
                <Link
                  href="/kontakt"
                  className="bg-[#FBBF24] text-[#000000] hover:bg-yellow-400 transition-all font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center flex-shrink-0"
                >
                  Jetzt kostenfrei beraten lassen
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <div className="text-[#1F2937] font-bold text-lg flex flex-col items-center lg:items-start gap-1">
                   <div className="flex flex-col md:flex-row items-center gap-2">
                     <span className="flex items-center gap-2">📞 030 / 123 456 78</span>
                   </div>
                   <span className="font-normal text-[#4B5563] text-sm hidden lg:inline">– Oder rufen Sie uns direkt an</span>
                   <span className="font-normal text-[#4B5563] text-sm lg:hidden">Oder rufen Sie uns direkt an</span>
                </div>
              </div>

              {/* Trust Icons (Grid 2x2) */}
              <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0 pt-2 text-[#4B5563]">
                 {[
                   "Zertifiziert nach § 45a",
                   "Feste Bezugsperson",
                   "Keine Bürokratie",
                   "Alle Pflegekassen"
                 ].map((text, i) => (
                   <div key={i} className="flex items-center gap-2.5 justify-center lg:justify-start">
                     <div className="w-5 h-5 rounded-full bg-[#134E4A] flex items-center justify-center flex-shrink-0">
                       <CheckCircle className="w-3.5 h-3.5 text-white" />
                     </div>
                     <span className="text-sm font-medium">{text}</span>
                   </div>
                 ))}
              </div>
            </div>

            {/* Right Image/Card (Multi-Image Layout) */}
            <div className="relative mt-8 lg:mt-0 lg:h-full flex flex-col justify-center items-center lg:items-end">
               <div className="relative w-full max-w-[600px] h-[500px] lg:h-[600px]">

                  {/* Decorative Background Blob */}
                  <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#F0FDF4] rounded-full blur-3xl opacity-60 mix-blend-multiply"></div>

                  {/* Image 1: Top Left (Helping Hand) */}
                  <div className="absolute top-0 left-4 w-48 h-64 md:w-56 md:h-72 shadow-xl rounded-2xl overflow-hidden transform -rotate-3 z-10 border-4 border-white">
                    <img
                      src="/images/hero_helping_hand.png"
                      alt="Helfende Hände Alltagshilfe"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Image 2: Top Right (Active Senior) - Larger */}
                  <div className="absolute top-8 right-0 w-56 h-72 md:w-64 md:h-80 shadow-2xl rounded-2xl overflow-hidden transform rotate-2 z-20 border-4 border-white">
                     <img
                       src="/images/hero_active_senior.png"
                       alt="Aktive Senioren Berlin"
                       className="w-full h-full object-cover"
                     />
                  </div>

                  {/* Image 3: Bottom Center (Daily Moments) - Placeholder if needed */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-56 md:w-52 md:h-64 shadow-xl rounded-2xl overflow-hidden transform -rotate-1 z-30 border-4 border-white">
                     <img
                       src="/images/hero_daily_moments.png"
                       alt="Gemeinsame Momente"
                       className="w-full h-full object-cover"
                     />
                  </div>

                  {/* Asiye Trust Badge (Overlapping Bottom Image) */}
                  {/* Asiye Trust Badge (Overlapping Bottom Image) */}
                  <Link
                    href="/ueber-uns"
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-xl py-2 px-4 shadow-xl flex items-center gap-3 z-40 border border-gray-100 hover:scale-105 transition-transform duration-300 cursor-pointer whitespace-nowrap"
                  >
                    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border border-gray-100 shadow-sm">
                      <img
                        src="/images/asiye-duman.jpeg"
                        alt="Asiye Duman"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-[#1F2937] font-medium">
                      <span className="text-[#6B7280]">Ihre persönliche Ansprechpartnerin:</span> <span className="font-semibold"> Asiye Duman</span>
                    </p>
                  </Link>

               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sektion 2: Budget Rechner - Pale Sun Background */}
      <div id="calculator" className="bg-[#FFFBEB] py-24 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          {/* Note: CareFinder component internally needs to be checked if it conforms.
              Ideally we wrap it or strict styles within it.
              The wrapper here ensures the section background is correct. */}
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#134E4A] mb-4">
              Ihr Persönlicher Budget-Rechner
            </h2>
            <p className="text-[#1F2937] text-lg max-w-2xl mx-auto">
              Prüfen Sie in weniger als 2 Minuten Ihren Anspruch auf kostenfreie Unterstützung.
            </p>
          </div>

          {/* Card Container for Calculator - White with Gold Border */}
          <div className="bg-white rounded-[16px] border-2 border-[#FBBF24] shadow-md p-6 md:p-10 max-w-4xl mx-auto">
            <CareFinder />
          </div>
        </div>
      </div>

      {/* Sektion 3: Leistungen - Creme Background */}
      <section className="bg-[#FAF9F6] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#134E4A] mb-6">
              Unsere Leistungen
            </h2>
            <p className="text-[#1F2937] text-lg max-w-2xl mx-auto font-body">
              Maßgeschneiderte Unterstützung für Ihren Alltag in Berlin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Haushalt & Reinigung', desc: 'Saugen, Wischen, Fensterputzen und Wäschepflege.', icon: Home },
              { title: 'Einkaufsservice', desc: 'Wir übernehmen Wocheneinkäufe und Besorgungen.', icon: ShoppingBag },
              { title: 'Begleitung außer Haus', desc: 'Zu Ärzten, Behörden, Friseur oder Cafés.', icon: MapPin }, // Using MapPin as substitute if Stethoscope not ideal? Or keep icons
              { title: 'Betreuung & Gesellschaft', desc: 'Gespräche, Vorlesen, Spiele und Spaziergänge.', icon: Heart },
              { title: 'Organisatorisches', desc: 'Hilfe bei Anträgen, Post und Telefonaten.', icon: FileText },
              { title: 'Pflegegrad Beratung', desc: 'Unterstützung bei Einstufung und Widersprüchen.', icon: Award },
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:border-[#134E4A] hover:shadow-md transition-all group">
                <div className="w-14 h-14 bg-[#F0FDF4] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#134E4A] transition-colors">
                  <service.icon className="w-7 h-7 text-[#134E4A] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#134E4A] mb-3">{service.title}</h3>
                <p className="text-[#4B5563] leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/leistungen"
              className="inline-flex items-center font-bold text-[#134E4A] hover:text-[#0F3F3C] hover:underline"
            >
              Alle Leistungen ansehen <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sektion 4: Warum uns wählen - Soft Mint Background */}
      <section className="bg-[#F0FDF4] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#134E4A] mb-6">
              Warum Morgenlicht?
            </h2>
            <p className="text-[#1F2937] text-lg max-w-2xl mx-auto">
              Wir setzen auf Qualität, Herzlichkeit und absolute Verlässlichkeit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Kostenfreie Abrechnung',
                desc: 'Wir rechnen direkt mit der Pflegekasse ab. Sie müssen nicht in Vorleistung gehen.',
                icon: Shield
              },
              {
                title: 'Feste Bezugspersonen',
                desc: 'Kein ständiger Wechsel. Sie bekommen eine vertraute Alltagsbegleitung.',
                icon: Users
              },
              {
                title: 'Berliner Herz',
                desc: 'Wir kennen die Stadt und die Menschen. Vielfalt ist unsere Stärke.',
                icon: Heart
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:border-[#134E4A] transition-all">
                <div className="w-12 h-12 bg-[#FFFBEB] rounded-full flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-[#FBBF24]" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#134E4A] mb-3">{item.title}</h3>
                <p className="text-[#4B5563] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sektion 5: Kontakt Abschluss - Creme/White */}
      <section className="bg-[#FAF9F6] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#134E4A] mb-6">
            Wir sind für Sie da
          </h2>
          <p className="text-[#1F2937] text-lg mb-10 font-medium">
            Rufen Sie uns an. Wir beraten Sie gerne persönlich und unverbindlich.
          </p>

          <div className="inline-block bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <a href="tel:06912345678" className="flex items-center justify-center gap-4 group">
              <div className="w-12 h-12 bg-[#134E4A] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading font-bold text-3xl sm:text-4xl text-[#134E4A] group-hover:text-[#0F3F3C] transition-colors">
                069 12345678
              </span>
            </a>
            <p className="mt-4 text-sm text-[#6B7280]">
              Mo–Fr: 8:00 – 18:00 Uhr • Kostenlos aus dem deutschen Festnetz
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
