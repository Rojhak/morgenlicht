import Link from 'next/link'
import { Heart, Shield, Users, ArrowRight, Phone, Award, Quote, HandHeart, Home, ShoppingBag, Stethoscope, FileText, Handshake, Star, CheckCircle, Check, Sparkles, MapPin } from 'lucide-react'
import { CareFinder } from '@/app/components/wizard'
import { FAQSection } from '@/app/components/sections/FAQSection'

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

                <h1 className="font-heading font-bold text-[#134E4A] text-4xl sm:text-5xl lg:text-[48px] leading-[1.1] mb-8">
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
                <a href="tel:03023593028" className="mt-5 flex items-center gap-2 hover:opacity-80 transition-opacity">
                   <Phone className="w-5 h-5 text-[#FBBF24]" />
                   <span><span className="text-[#6B7280]">Oder rufen Sie uns direkt an: </span><span className="font-bold text-[#144E41] whitespace-nowrap">030 23593028 / 015156057365030</span></span>
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
             <div className="relative mt-8 lg:mt-0 lg:h-full flex items-center justify-center lg:justify-end px-4 lg:px-0">
                <div className="flex gap-3 md:gap-4 items-start">

                  {/* Left Column (Img 1 & 3) */}
                  <div className="flex flex-col gap-4">
                     {/* Image 1: Top Left */}
                     <div className="w-36 h-48 md:w-56 md:h-72 rounded-[24px] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.05)] border-4 border-white transform transition-transform hover:scale-[1.02]">
                       <img
                         src="/images/hero_helping_hand.png"
                         alt="Helfende Hände Alltagshilfe"
                         className="w-full h-full object-cover"
                       />
                     </div>

                     {/* Image 3: Bottom Left (+ Asiye Badge) */}
                     <div className="relative w-36 h-48 md:w-52 md:h-64">
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
                           className="absolute -bottom-6 -left-2 md:bottom-4 md:left-4 bg-white/95 backdrop-blur-sm rounded-full py-2 pl-2 pr-4 md:pr-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 md:gap-4 border border-gray-100/50 z-50 group min-w-[200px] md:min-w-[240px]"
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
                     <div className="w-40 h-60 md:w-64 md:h-80 rounded-[24px] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.05)] border-4 border-white transform transition-transform hover:scale-[1.02]">
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

      {/* Empathy Section - Compact & Modern */}
      <section className="relative w-full py-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_helping_hand.png"
            alt="Helfende Hände"
            className="w-full h-full object-cover opacity-90"
          />
        </div>

        {/* Dark Green Overlay - Stronger for text focus */}
        <div className="absolute inset-0 bg-[#144E41]/90 z-10"></div>

        {/* Content Container */}
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl leading-tight mb-4 max-w-2xl mx-auto" style={{ color: '#FFFBEB' }}>
            Sie sind nicht allein – wir sind an Ihrer Seite.
          </h2>

          <p className="font-body text-base md:text-lg leading-relaxed max-w-xl mx-auto mt-4" style={{ color: '#F3F4F6', opacity: 0.9 }}>
            Wir wissen, wie schwer es sein kann, Hilfe anzunehmen.
            Morgenlicht ist die Hand, die hilft, und das offene Ohr, das zuhört –
            damit wieder Raum für die schönen Momente bleibt.
          </p>

          <p className="font-body text-sm italic mt-8 max-w-lg mx-auto" style={{ color: '#E5E7EB', opacity: 0.7 }}>
            Professioneller als Nachbarschaftshilfe, herzlicher als anonyme Plattformen.
          </p>
        </div>
      </section>

      {/* Sektion 2: Leistungen - Ganzheitliche Unterstützung */}
      {/* Sektion 2: Leistungen - Ganzheitliche Unterstützung */}
      <section className="bg-[#F9FBFB] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#134E4A] mb-6">
              Ganzheitliche Unterstützung für Ihr Zuhause
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                title: 'Haushalt & Wohlbefinden',
                desc: 'Unterstützung beim Reinigen, Kochen und der Wäschepflege – für ein Zuhause, in dem Sie sich rundum wohlfühlen.',
                icon: Sparkles
              },
              {
                title: 'Einkauf & Erledigungen',
                desc: 'Wir übernehmen den Wocheneinkauf, Besorgungen in der Apotheke oder den Gang zur Post.',
                icon: ShoppingBag
              },
              {
                title: 'Begleitung & Mobilität',
                desc: 'Sicherer Begleitung zu Ärzten, Behörden, zum Friseur oder zu Ihren Terminen im Kiez.',
                icon: MapPin
              },
              {
                title: 'Alltag & Struktur',
                desc: 'Hilfe bei der Organisation von Post, Terminen und Telefonaten – wir behalten für Sie den Überblick.',
                icon: FileText
              },
              {
                title: 'Soziale Teilhabe & Freizeit',
                desc: 'Gemeinsame Spaziergänge, gemeinsames Einkaufen oder Begleitung zu kulturellen Veranstaltungen.',
                icon: Users
              },
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-[24px] p-8 shadow-sm border border-transparent hover:border-[#134E4A]/10 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] flex flex-col">
                <div className="w-14 h-14 bg-[#F0FDF4] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#144E41] transition-colors">
                  <service.icon className="w-7 h-7 text-[#144E41] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#134E4A] mb-3">{service.title}</h3>
                <p className="font-body text-gray-600 font-normal leading-relaxed text-left">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/leistungen"
              className="inline-flex items-center justify-center bg-[#144E41] text-white px-8 py-3 rounded-[12px] font-bold font-body text-lg hover:bg-[#0e3a37] hover:scale-[1.02] transition-all shadow-sm"
            >
              Alle Leistungen ansehen <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sektion 3: Was Ihnen zusteht - Yellow Background */}
      <section className="bg-[#FFFBEB] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[24px] p-10 md:p-14 text-center shadow-sm">
            <span className="inline-block bg-[#F0FDF4] text-[#134E4A] px-4 py-1.5 rounded-full text-sm font-body font-semibold tracking-wide uppercase mb-6">
              WICHTIG ZU WISSEN
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#134E4A] mb-6">
              Ihr Recht auf Unterstützung: 131 € monatlich geschenkt.
            </h2>
            <p className="font-body text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
              Haben Sie Pflegegrad 1 oder höher? Dann steht Ihnen der Entlastungsbetrag von <span className="font-bold text-[#144E41]">131 €</span> pro Monat zu. <span className="text-gray-900 font-medium decoration-[#FBBF24]/60 underline decoration-2 underline-offset-4">Dieses Budget verfällt, wenn es nicht genutzt wird.</span> Wir wandeln diesen Anspruch in echte Hilfe um – ohne dass Ihr Pflegegeld gekürzt wird.
            </p>
            <div className="flex flex-col items-center gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center bg-[#144E41] text-white px-8 py-4 rounded-[12px] font-bold font-body text-lg hover:bg-[#0e3a37] hover:scale-[1.02] transition-all shadow-sm group"
              >
                Jetzt Anspruch prüfen lassen
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <span className="text-xs font-body text-gray-500 opacity-60 font-medium mt-2">
                Unverbindlich & Kostenfrei
              </span>
            </div>
          </div>
        </div>
      </section>


      {/* Sektion 4: In 3 Schritten zur Entlastung - White Background */}
      <section className="bg-[#F9FBFB] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#134E4A] mb-6">
              In 3 Schritten zur Entlastung
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                step: '01',
                title: 'Erstkontakt',
                desc: 'Ein kurzes Telefonat oder eine Nachricht genügt. Wir besprechen unverbindlich Ihre Situation.'
              },
              {
                step: '02',
                title: 'Kennenlernen',
                desc: 'Ob persönlich vor Ort oder flexibel per Telefon – wir nehmen uns Zeit für Ihre Fragen und Wünsche.'
              },
              {
                step: '03',
                title: 'Sorglos starten',
                desc: 'Wir regeln alles mit der Kasse. Ihre feste Hilfe startet und entlastet Sie direkt im Alltag.'
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="mb-6">
                  <span className="font-heading font-bold text-6xl text-[#144E41] opacity-90">{item.step}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-[#134E4A] mb-3">{item.title}</h3>
                <p className="font-body text-gray-600 leading-relaxed max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sektion 5: Häufige Fragen */}
      <FAQSection />





      {/* Sektion 5: Kontakt Abschluss - Creme/White */}
      {/* Sektion 5: Kontakt Abschluss - Mint Background */}
      <section className="bg-[#F9FBFB] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#134E4A] mb-6">
              Wir sind für Sie da
            </h2>
            <p className="text-[#1F2937] text-lg font-medium">
              Rufen Sie uns an oder schreiben Sie uns. Wir beraten Sie gerne persönlich.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Landline Tile */}
            <div className="bg-white rounded-[12px] p-8 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:border-[#134E4A]/30 transition-colors">
              <div className="w-12 h-12 bg-[#134E4A] rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#134E4A] mb-2">Zentrale</h3>
              <a href="tel:03023593028" className="font-heading font-bold text-2xl text-[#134E4A] hover:text-[#0F3F3C] transition-colors mb-2">
                030 235 930 28
              </a>
              <p className="text-sm text-[#6B7280]">
                Mo–Fr: 8:00 – 18:00 Uhr
              </p>
            </div>

            {/* Mobile & WhatsApp Tile */}
            <div className="bg-white rounded-[12px] p-8 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:border-[#134E4A]/30 transition-colors">
              <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <h3 className="font-heading font-bold text-xl text-[#134E4A] mb-2">WhatsApp & Mobil</h3>
              <a href="tel:015156057365" className="font-heading font-bold text-2xl text-[#134E4A] hover:text-[#0F3F3C] transition-colors mb-2">
                0151 560 573 65
              </a>
              <a
                href="https://wa.me/4915156057365"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#25D366] font-semibold hover:underline mt-1"
              >
                Gerne auch per WhatsApp
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
