import Link from 'next/link'
import { Heart, Shield, Users, ArrowRight, Phone, Award, Quote, HandHeart, Home, ShoppingBag, Stethoscope, FileText, Handshake, Star, CheckCircle, Check, Sparkles, MapPin } from 'lucide-react'
import { CareFinder } from '@/app/components/wizard'

export default function HomePage() {
  return (
    <>
      <section className="relative flex items-center bg-[#FAF9F6] py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left z-10 space-y-8">
              {/* Kicker & Headline Group */}
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full shadow-sm border border-gray-100 h-[28px]">
                    <Check className="w-4 h-4 text-[#144E41] stroke-[1.5]" />
                    <span className="font-inter text-[13px] font-medium text-slate-800 tracking-wide whitespace-nowrap">Anerkannt nach § 45a SGB XI</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full shadow-sm border border-gray-100 h-[28px]">
                    <Heart className="w-4 h-4 text-[#FBBF24] stroke-[1.5]" />
                    <span className="font-inter text-[13px] font-medium text-slate-800 tracking-wide whitespace-nowrap">Alltagshilfe für Senioren & Pflegebedürftige</span>
                  </div>
                </div>

                <h1 className="font-body font-bold text-[#134E4A] text-4xl sm:text-5xl lg:text-[48px] leading-[1.1] mb-8">
                  Herzlich & Würdevoll: <br className="hidden lg:block"/>
                  Ihre Alltagshilfe in Berlin
                </h1>

                <p className="font-body font-medium text-[#4B5563] text-lg sm:text-[18px] leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                  Selbstbestimmt leben im eigenen Zuhause. Wir entlasten Sie in der Hauswirtschaft und im Alltag – herzlich, zuverlässig und unkompliziert.
                </p>
              </div>

              {/* Action Block - Vertical Layout */}
              <div className="mt-10 flex flex-col items-center lg:items-start">
                {/* Primary Button */}
                <Link
                  href="/kontakt"
                  className="bg-[#144E41] text-white hover:bg-[#0F3F3C] transition-all font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center"
                >
                  Jetzt kostenfrei beraten lassen
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>

                {/* Phone Number */}
                <a href="tel:03012345678" className="mt-5 flex items-center gap-2 hover:opacity-80 transition-opacity">
                   <Phone className="w-5 h-5 text-[#FBBF24]" />
                   <span><span className="text-[#6B7280]">Oder rufen Sie uns direkt an: </span><span className="font-bold text-[#144E41]">030 / 123 456 78</span></span>
                </a>

                {/* 0€ Benefit Box - Foundation element */}
                <div className="mt-8 bg-[#F0FDF4] border border-[#134E4A]/20 rounded-xl px-6 py-3 max-w-xl flex items-center">
                   <div className="w-8 h-8 rounded-full bg-[#134E4A] flex items-center justify-center flex-shrink-0 mr-4">
                     <CheckCircle className="w-5 h-5 text-white" />
                   </div>
                   <div className="flex flex-col">
                     <span className="font-heading font-bold text-[#134E4A] text-base">
                       100% Kostenübernahme ab Pflegegrad 1
                     </span>
                     <span className="font-body text-[#4B5563] text-sm">
                       Direkte Abrechnung mit der Pflegekasse. Für Sie 0€ Kosten.
                     </span>
                   </div>
                </div>
              </div>

              {/* Trust Bar - Pill Badges */}
              <div className="mt-8 py-8">
                 <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                   {[
                     "Staatlich anerkannt",
                     "Alle Pflegekassen",
                     "Feste Bezugsperson",
                     "Wir übernehmen alle Formalitäten"
                   ].map((text, i) => (
                     <div key={i} className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-100 shadow-sm">
                       <CheckCircle className="w-4 h-4 text-[#134E4A]" />
                       <span className="font-body font-medium text-[13px] text-[#134E4A]">{text}</span>
                     </div>
                   ))}
                 </div>
              </div>
            </div>

            {/* Right Image/Card (Multi-Image Layout) */}
            {/* Right Image/Card (Collage Layout) */}
            <div className="relative mt-8 lg:mt-0 lg:h-full flex items-center justify-center lg:justify-end">
               <div className="flex gap-4 items-start">

                  {/* Left Column (Img 1 & 3) */}
                  <div className="flex flex-col gap-4">
                     {/* Image 1: Top Left */}
                     <div className="w-48 h-64 md:w-56 md:h-72 rounded-[24px] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.05)] border-4 border-white transform transition-transform hover:scale-[1.02]">
                       <img
                         src="/images/hero_helping_hand.png"
                         alt="Helfende Hände Alltagshilfe"
                         className="w-full h-full object-cover"
                       />
                     </div>

                     {/* Image 3: Bottom Left (+ Asiye Badge) */}
                     <div className="relative w-48 h-56 md:w-52 md:h-64">
                        <div className="w-full h-full rounded-[24px] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.05)] border-4 border-white transform transition-transform hover:scale-[1.02]">
                          <img
                            src="/images/hero_daily_moments.png"
                            alt="Gemeinsame Momente"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Asiye Badge (Overlapping Bottom Left) */}
                        <Link
                          href="/ueber-uns"
                          className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-full py-2 pl-2 pr-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-4 border border-gray-100/50 z-50 group min-w-[240px]"
                        >
                          <img
                            src="/images/asiye-duman.jpeg"
                            alt="Asiye Duman"
                            className="w-10 h-10 rounded-full object-cover border border-gray-100 shadow-sm ml-1"
                          />
                          <div className="flex flex-col text-left">
                             <span className="font-inter text-xs font-medium text-slate-800 tracking-wide leading-tight">
                               Ihre persönliche Ansprechpartnerin
                             </span>
                             <span className="font-inter text-[13px] font-bold text-[#144E41] tracking-wide leading-tight group-hover:text-[#134E4A] transition-colors">
                               Asiye Duman
                             </span>
                          </div>
                        </Link>
                     </div>
                  </div>

                  {/* Right Column (Img 2) */}
                  <div className="flex flex-col gap-4 pt-16">
                     {/* Image 2: Top Right (Offset) */}
                     <div className="w-56 h-72 md:w-64 md:h-80 rounded-[24px] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.05)] border-4 border-white transform transition-transform hover:scale-[1.02]">
                        <img
                          src="/images/hero_active_senior.png"
                          alt="Aktive Senioren Berlin"
                          className="w-full h-full object-cover"
                        />
                     </div>
                  </div>

               </div>

               {/* Background Blob (Behind Grid) */}
               <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[#F0FDF4] rounded-full blur-3xl opacity-60 mix-blend-multiply pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Empathy Section - Full Width Image Background */}
      <section className="relative w-full py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_helping_hand.png"
            alt="Helfende Hände"
            className="w-full h-full object-cover opacity-90"
          />
        </div>

        {/* Dark Green Overlay */}
        <div className="absolute inset-0 bg-[#144E41]/85 z-10"></div>

        {/* Content Container */}
        <div className="relative z-20 container mx-auto px-6 text-center text-white flex flex-col items-center justify-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl leading-tight mb-6">
            Sie sind nicht allein – wir sind an Ihrer Seite.
          </h2>

          <p className="font-body text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-white/95 mb-12">
            Den Alltag allein zu meistern, kostet Kraft. Wir wissen, wie schwer es sein kann, Hilfe anzunehmen.
            Morgenlicht ist die Hand, die hilft, und das offene Ohr, das zuhört.
            Damit wieder Raum für das Wesentliche bleibt.
          </p>

          <p className="font-body text-sm text-white/70 tracking-wide uppercase font-medium">
            Professioneller als Nachbarschaftshilfe, herzlicher als anonyme Plattformen.
          </p>
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
