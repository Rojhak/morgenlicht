import Link from 'next/link'
import { Heart, Shield, Users, Clock, Award, ArrowRight, Sparkles, ShoppingCart, Car, Home, Coffee, HeartHandshake, Quote, Sun } from 'lucide-react'
import { GlassCard, GlassButton } from './components/glass'
import { CareFinder } from './components/wizard'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden" aria-labelledby="hero-title">
        {/* Decorative Background - colors OK since purely decorative */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-[#FFD54F]/25 via-[#FFAB91]/15 to-transparent rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-[#26A69A]/20 via-[#4DB6AC]/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-gradient-to-l from-[#FFCCBC]/20 to-transparent rounded-full blur-3xl animate-float" />
          <div className="absolute top-32 left-[10%] w-4 h-4 bg-[#FFD54F]/40 rounded-full animate-float" />
          <div className="absolute top-48 right-[15%] w-3 h-3 bg-[#26A69A]/40 rounded-full animate-float-slow" />
          <div className="absolute bottom-32 left-[20%] w-2 h-2 bg-[#FF8A65]/40 rounded-full animate-float" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Main Headline */}
          <div className="text-center mb-16 md:mb-20">
            {/* Trust Badge - accessible text colors */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/70 backdrop-blur-sm border border-white/50 rounded-full text-sm font-medium text-[#0D6E64] mb-8 shadow-lg shadow-black/5">
              <Award className="w-4 h-4" aria-hidden="true" />
              <span>Pflegekasse anerkannt</span>
              <span className="sr-only">-</span>
              <span className="text-[#455A64]">§45a SGB XI</span>
            </div>

            <h1 id="hero-title" className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display text-teal-900 mb-8 tracking-tight drop-shadow-sm">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-900 via-teal-800 to-teal-900">
                Würdevolle
              </span>
              <span className="block mt-2 text-teal-800 italic pr-2">
                Unterstützung im Alltag
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-teal-700/80 max-w-2xl mx-auto leading-relaxed mb-4 font-serif italic">
              Liebevolle Alltagsbegleitung für Senioren.
            </p>
            <p className="text-lg md:text-xl text-teal-900 font-medium max-w-2xl mx-auto">
              100% durch Ihre Pflegekasse abgedeckt.
            </p>
          </div>

          {/* Pathway Selection */}
          <div className="mb-8">
            <p className="text-center text-[#455A64] mb-6 font-medium">
              Für wen suchen Sie Unterstützung?
            </p>
          </div>

          {/* Dual Pathway Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Path A: Seniors */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFD54F] to-[#FF8A65] rounded-3xl opacity-0 group-hover:opacity-50 blur-lg transition-all duration-500" aria-hidden="true" />

              <GlassCard className="relative p-8 md:p-10 card-lift h-full border-2 border-transparent group-hover:border-[#FFD54F]/40">
                <div className="h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gold-500/30 rounded-2xl blur-md animate-shimmer" aria-hidden="true" />
                      <div className="relative w-16 h-16 bg-gradient-to-br from-gold-500/40 to-coral-600/30 rounded-2xl flex items-center justify-center">
                        <Heart className="w-8 h-8 text-coral-600" aria-hidden="true" />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold font-display text-teal-900">
                        Für mich selbst
                      </h2>
                      <p className="text-teal-800/80 mt-1 font-medium">
                        Selbstbestimmt leben
                      </p>
                    </div>
                  </div>

                  {/* Benefits */}
                  <ul className="space-y-4 mb-8 flex-grow">
                    {[
                      { icon: Clock, text: 'Flexible Zeiten nach Ihrem Rhythmus' },
                      { icon: Users, text: 'Vertraute Begleiter an Ihrer Seite' },
                      { icon: Shield, text: 'Keine Kosten – Pflegekasse zahlt' },
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-white/60 to-white/30 hover:from-white/80 hover:to-white/50 transition-all">
                        <div className="w-10 h-10 rounded-xl bg-[#E8F5E9] flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-[#0D6E64]" aria-hidden="true" />
                        </div>
                        <span className="text-[#37474F] font-medium">{item.text}</span>
                      </li>
                    ))}
                  </ul>

                  <GlassButton as="link" href="#calculator" variant="primary" size="lg" className="w-full btn-shadow-orange group/btn">
                    Möglichkeiten entdecken
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                  </GlassButton>
                </div>
              </GlassCard>
            </div>

            {/* Path B: Relatives */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#26A69A] to-[#4DB6AC] rounded-3xl opacity-0 group-hover:opacity-50 blur-lg transition-all duration-500" aria-hidden="true" />

              <GlassCard className="relative p-8 md:p-10 card-lift h-full border-2 border-transparent group-hover:border-[#26A69A]/40">
                <div className="h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-teal-400/30 rounded-2xl blur-md animate-shimmer" aria-hidden="true" />
                      <div className="relative w-16 h-16 bg-gradient-to-br from-teal-400/40 to-teal-800/30 rounded-2xl flex items-center justify-center">
                        <Shield className="w-8 h-8 text-teal-900" aria-hidden="true" />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold font-display text-teal-900">
                        Für meine Eltern
                      </h2>
                      <p className="text-teal-800/80 mt-1 font-medium">
                        Entlastung für Sie
                      </p>
                    </div>
                  </div>

                  {/* Benefits */}
                  <ul className="space-y-4 mb-8 flex-grow">
                    {[
                      { icon: Clock, text: 'Zuverlässige Betreuung jederzeit' },
                      { icon: Users, text: 'Regelmäßige Updates für Sie' },
                      { icon: Shield, text: 'Wir regeln die Abrechnung' },
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-white/60 to-white/30 hover:from-white/80 hover:to-white/50 transition-all">
                        <div className="w-10 h-10 rounded-xl bg-[#E0F2F1] flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-[#0D6E64]" aria-hidden="true" />
                        </div>
                        <span className="text-[#37474F] font-medium">{item.text}</span>
                      </li>
                    ))}
                  </ul>

                  <GlassButton as="link" href="#calculator" variant="secondary" size="lg" className="w-full btn-shadow-teal group/btn">
                    Entlastung finden
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                  </GlassButton>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Scroll Hint - accessible colors */}
          <div className="flex justify-center mt-16">
            <Link
              href="#calculator"
              className="flex flex-col items-center gap-3 text-[#455A64] hover:text-[#0D6E64] transition-colors group"
            >
              <span className="text-sm font-medium tracking-wide uppercase">Budget berechnen</span>
              <div className="w-8 h-12 border-2 border-current rounded-full flex justify-center p-2">
                <div className="w-1.5 h-3 bg-current rounded-full animate-bounce" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Care-Finder Wizard */}
      <div id="calculator" className="scroll-mt-20">
        <CareFinder />
      </div>

      {/* Social Proof / Testimonials Section */}
      <section className="py-20 px-4 section-warm" aria-labelledby="testimonials-title">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {/* Badge with accessible text color */}
            <span className="inline-block px-4 py-1.5 bg-[#FFF8E1] rounded-full text-sm font-medium text-[#B8472A] mb-4">
              Familien erzählen
            </span>
            <h2 id="testimonials-title" className="text-3xl md:text-4xl font-bold font-display text-teal-900">
              Stimmen unserer Familien
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Testimonial 1 - Featured */}
            <GlassCard className="p-8 md:p-10 relative overflow-hidden md:row-span-2">
              <div className="absolute top-6 right-6 text-[#FFD54F]/20" aria-hidden="true">
                <Quote className="w-20 h-20" />
              </div>
              <div className="relative z-10 h-full flex flex-col">
                <blockquote className="flex-grow">
                  <p className="text-xl md:text-2xl text-[#37474F] italic leading-relaxed mb-8">
                    „Meine Mutter blüht richtig auf, seit Frau Weber jede Woche kommt.
                    Die beiden backen zusammen, gehen spazieren – und ich höre endlich wieder
                    ein echtes Lachen am Telefon. Das ist unbezahlbar."
                  </p>
                </blockquote>
                <footer className="flex items-center gap-4 pt-6 border-t border-[#0D6E64]/20">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#26A69A] to-[#4DB6AC] flex items-center justify-center shadow-lg shadow-[#26A69A]/20">
                    <span className="text-white font-bold text-lg">MH</span>
                  </div>
                  <div>
                    <cite className="not-italic font-semibold text-[#37474F] text-lg">Mehmet H.</cite>
                    <p className="text-[#455A64]">Sohn einer Kundin aus Sachsenhausen</p>
                  </div>
                </footer>
              </div>
            </GlassCard>

            {/* Testimonial 2 */}
            <GlassCard className="p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-[#FF8A65]/15" aria-hidden="true">
                <Quote className="w-12 h-12" />
              </div>
              <blockquote className="relative z-10">
                <p className="text-lg text-[#37474F] italic leading-relaxed mb-6">
                  „Endlich kann ich beruhigt zur Arbeit gehen. Zu wissen, dass Papa
                  in guten Händen ist, nimmt mir so viel Last von den Schultern."
                </p>
                <footer className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#FFD54F] to-[#FF8A65] flex items-center justify-center">
                    <span className="text-white font-bold">SK</span>
                  </div>
                  <div>
                    <cite className="not-italic font-semibold text-[#37474F]">Sandra K.</cite>
                    <p className="text-sm text-[#455A64]">Berufstätige Tochter</p>
                  </div>
                </footer>
              </blockquote>
            </GlassCard>

            {/* Testimonial 3 */}
            <GlassCard className="p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-[#26A69A]/15" aria-hidden="true">
                <Quote className="w-12 h-12" />
              </div>
              <blockquote className="relative z-10">
                <p className="text-lg text-[#37474F] italic leading-relaxed mb-6">
                  „Ich war skeptisch, ob fremde Hilfe das Richtige ist. Aber nach dem
                  ersten Besuch wusste ich: Das ist keine fremde Hilfe – das ist wie Familie."
                </p>
                <footer className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#26A69A] to-[#4DB6AC] flex items-center justify-center">
                    <span className="text-white font-bold">ER</span>
                  </div>
                  <div>
                    <cite className="not-italic font-semibold text-[#37474F]">Elisabeth R.</cite>
                    <p className="text-sm text-[#455A64]">82 Jahre, Pflegegrad 2</p>
                  </div>
                </footer>
              </blockquote>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4" aria-labelledby="services-title">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            {/* Badge with accessible text color */}
            <span className="inline-block px-4 py-1.5 bg-[#E0F2F1] rounded-full text-sm font-medium text-[#0D6E64] mb-4">
              Unsere Leistungen
            </span>
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold font-display text-teal-900 mb-4">
              Unterstützung, die zu Ihnen passt
            </h2>
            <p className="text-lg text-[#455A64] max-w-2xl mx-auto">
              Von der Einkaufshilfe bis zur liebevollen Alltagsbegleitung – wir sind für Sie da.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: ShoppingCart,
                title: 'Einkaufshilfe',
                description: 'Gemeinsam einkaufen oder wir erledigen es für Sie',
                color: 'from-[#FFD54F]/20 to-[#FFE082]/10',
                iconBg: 'bg-[#FFF8E1]',
                iconColor: 'text-[#B8472A]',
              },
              {
                icon: Car,
                title: 'Begleitdienste',
                description: 'Zu Arztterminen, Behörden oder auf Ausflüge',
                color: 'from-[#26A69A]/20 to-[#4DB6AC]/10',
                iconBg: 'bg-[#E0F2F1]',
                iconColor: 'text-[#0D6E64]',
              },
              {
                icon: Home,
                title: 'Haushaltshilfe',
                description: 'Unterstützung bei alltäglichen Aufgaben',
                color: 'from-[#FFCCBC]/30 to-[#FFAB91]/10',
                iconBg: 'bg-[#FBE9E7]',
                iconColor: 'text-[#B8472A]',
              },
              {
                icon: Coffee,
                title: 'Alltagsbegleitung',
                description: 'Gesellschaft und gemeinsame Aktivitäten',
                color: 'from-[#E8F5E9]/50 to-[#C8E6C9]/20',
                iconBg: 'bg-[#E8F5E9]',
                iconColor: 'text-[#0D6E64]',
              },
              {
                icon: HeartHandshake,
                title: 'Entlastung für Angehörige',
                description: 'Zeit für sich, während wir uns kümmern',
                color: 'from-[#FFD54F]/15 to-[#FFECB3]/10',
                iconBg: 'bg-[#FFF8E1]',
                iconColor: 'text-[#B8472A]',
              },
              {
                icon: Sparkles,
                title: 'Gedächtnistraining',
                description: 'Spielerische Übungen für geistige Fitness',
                color: 'from-[#E0F2F1]/60 to-[#B2DFDB]/20',
                iconBg: 'bg-[#E0F2F1]',
                iconColor: 'text-[#0D6E64]',
              },
            ].map((service) => (
              <GlassCard
                key={service.title}
                className={`p-6 card-lift bg-gradient-to-br ${service.color}`}
              >
                <div className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center mb-5`}>
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-[#37474F] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#455A64] leading-relaxed">{service.description}</p>
              </GlassCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <GlassButton as="link" href="/leistungen" variant="ghost" size="lg" className="group">
              Alle Leistungen ansehen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </GlassButton>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 section-teal relative overflow-hidden" aria-labelledby="trust-title">
        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#26A69A]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFD54F]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-14">
            {/* Badge with accessible text color */}
            <span className="inline-block px-4 py-1.5 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-[#0D6E64] mb-4 border border-white/50">
              Vertrauen & Sicherheit
            </span>
            <h2 id="trust-title" className="text-3xl md:text-4xl font-bold font-display text-teal-900 mb-4">
              Warum Familien uns vertrauen
            </h2>
            <p className="text-lg text-[#455A64] max-w-2xl mx-auto">
              Staatlich anerkannt, persönlich für Sie da
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                stat: '§45a',
                label: 'SGB XI anerkannt',
                description: 'Offiziell zugelassener Anbieter',
                bgColor: 'bg-[#E0F2F1]',
                statColor: 'text-[#0D6E64]',
              },
              {
                stat: '100%',
                label: 'Kostenübernahme',
                description: 'Durch Ihre Pflegekasse',
                bgColor: 'bg-[#FFF8E1]',
                statColor: 'text-[#B8472A]',
              },
              {
                stat: '24h',
                label: 'Schnelle Antwort',
                description: 'Auf Ihre Anfrage',
                bgColor: 'bg-[#FBE9E7]',
                statColor: 'text-[#B8472A]',
              },
            ].map((item) => (
              <GlassCard key={item.stat} className="p-8 text-center card-lift group">
                <div className={`w-20 h-20 ${item.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-105 transition-transform`}>
                  <span className={`text-3xl font-bold ${item.statColor}`}>
                    {item.stat}
                  </span>
                </div>
                <div className="text-xl font-semibold text-[#37474F] mb-2">
                  {item.label}
                </div>
                <p className="text-[#455A64]">
                  {item.description}
                </p>
              </GlassCard>
            ))}
          </div>

          {/* Checkmarks - enhanced */}
          <div className="mt-12 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/50">
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
              {[
                { text: 'Geschulte Alltagsbegleiter', icon: Users },
                { text: 'Flexible Termine', icon: Clock },
                { text: 'Regionale Betreuung', icon: Heart },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-[#37474F]">
                  <div className="w-8 h-8 bg-[#E8F5E9] rounded-lg flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-[#0D6E64]" aria-hidden="true" />
                  </div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - white text on teal background is accessible */}
      <section className="py-20 px-4 relative overflow-hidden" aria-labelledby="cta-title">
        {/* Teal gradient background - white text on this has good contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D6E64] via-[#0D7D72] to-[#0D6E64]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30" aria-hidden="true" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Sun className="w-8 h-8 text-[#FFD54F]" aria-hidden="true" />
          </div>

          <h2 id="cta-title" className="text-3xl md:text-4xl font-bold font-display !text-white mb-4">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Wir beraten Sie kostenlos und unverbindlich. Gemeinsam finden wir die perfekte Unterstützung.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GlassButton
              as="link"
              href="/kontakt"
              variant="primary"
              size="lg"
              className="bg-white text-[#0D6E64] hover:bg-white/95 shadow-xl font-semibold"
            >
              Kostenlos anfragen
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </GlassButton>
            <GlassButton
              as="link"
              href="tel:06912345678"
              variant="ghost"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 font-semibold"
            >
              069 12345678
            </GlassButton>
          </div>
        </div>
      </section>
    </>
  )
}
