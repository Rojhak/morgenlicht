import Link from 'next/link'
import { Heart, Shield, Users, ArrowRight, Phone, Award, Quote, HandHeart, Home, ShoppingBag, Stethoscope, FileText, Handshake, Star, CheckCircle, Sparkles, MapPin } from 'lucide-react'
import { CareFinder } from '@/app/components/wizard'

export default function HomePage() {
  return (
    <>
      {/* Sektion 1: Hero - Creme Background */}
      <section className="relative flex items-center bg-[#FAF9F6] py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 mb-8">
                <Star className="w-4 h-4 text-[#FBBF24] fill-current" />
                <span className="text-sm font-semibold text-[#1F2937]">Anerkannt nach § 45a SGB XI</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#134E4A] mb-6 leading-tight">
                Würdevolle Unterstützung<br />
                <span className="text-[#134E4A]">im Alltag</span>
              </h1>

              <p className="text-[#1F2937] text-lg sm:text-xl leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0 font-body">
                Liebevolle Alltagsbegleitung für Senioren in Berlin —
                <span className="font-bold text-[#134E4A]"> 100% kostenfrei</span> über Ihre Pflegekasse.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="#calculator"
                  className="bg-[#134E4A] text-white hover:bg-[#0F3F3C] transition-all font-bold text-lg px-8 py-4 rounded-xl shadow-sm flex items-center justify-center gap-2"
                >
                  <Shield className="w-5 h-5" />
                  Budget prüfen
                </Link>
                <Link
                  href="/kontakt"
                  className="bg-white text-[#134E4A] border border-[#134E4A] hover:bg-gray-50 transition-all font-bold text-lg px-8 py-4 rounded-xl shadow-sm flex items-center justify-center"
                >
                  Kontakt aufnehmen
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6 text-sm font-medium text-[#4B5563]">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#134E4A]" />
                  <span>Keine versteckten Kosten</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#134E4A]" />
                  <span>Feste Ansprechpartner</span>
                </div>
              </div>
            </div>

            {/* Right Image/Card */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-[400px] h-[500px] bg-white rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center justify-center p-8 relative z-10">
                  <div className="w-24 h-24 bg-[#FFFBEB] rounded-full flex items-center justify-center mb-6">
                    <HandHeart className="w-12 h-12 text-[#134E4A]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#134E4A] mb-2 text-center">Fürsorge & Vertrauen</h3>
                  <p className="text-center text-[#4B5563] mb-8">
                    Wir sind für Sie da, wenn Sie uns brauchen.
                  </p>

                  <div className="w-full h-px bg-gray-100 mb-8" />

                  <div className="flex justify-between w-full px-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#134E4A]">500+</div>
                      <div className="text-sm text-[#6B7280]">Glückliche Kunden</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#134E4A]">4.9</div>
                      <div className="text-sm text-[#6B7280]">Sterne Bewertung</div>
                    </div>
                  </div>
                </div>
                {/* Decorative blob behind */}
                <div className="absolute top-10 -right-10 w-full h-full bg-[#F0FDF4] rounded-3xl -z-0" />
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
