import Link from 'next/link'
import { Heart, Shield, Users, ArrowRight, Phone, Award, Quote, HandHeart, Home, ShoppingBag, Stethoscope, FileText, Handshake, Star, CheckCircle, Sparkles } from 'lucide-react'
import { GlassCard, GlassButton } from '@/app/components/glass'
import { CareFinder } from '@/app/components/wizard'

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Design System Compliant */}
      <section className="relative min-h-[85vh] flex items-center px-4 overflow-hidden bg-[#FAF9F6]" aria-labelledby="hero-title">
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FBBF24]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#134E4A]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Premium Trust Badge */}
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg border border-gray-100 mb-10">
                <div className="w-10 h-10 bg-[#FBBF24] rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <span className="text-base font-semibold text-[#1F2937]">Anerkannt nach § 45a SGB XI</span>
              </div>

              <h1 id="hero-title" className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#134E4A] mb-8 leading-tight">
                Würdevolle Unterstützung<br />
                <span className="text-[#134E4A]">im Alltag</span>
              </h1>

              <p className="text-intro text-[#1F2937] leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0">
                Liebevolle Alltagsbegleitung für Senioren in Berlin —
                <span className="font-semibold text-[#134E4A]">100% kostenfrei</span> über Ihre Pflegekasse.
              </p>

              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <GlassButton as="link" href="#calculator" variant="primary" size="lg" className="shadow-lg hover:shadow-xl px-8">
                  <Shield className="w-5 h-5 mr-2" aria-hidden="true" />
                  Budget prüfen
                </GlassButton>
                <GlassButton as="link" href="/kontakt" variant="outline" size="lg" className="px-8">
                  Kontakt aufnehmen
                </GlassButton>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm text-[#1F2937]">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#134E4A]" />
                  <span>Keine versteckten Kosten</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#134E4A]" />
                  <span>Feste Ansprechpartner</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#134E4A]" />
                  <span>Flexibel & zuverlässig</span>
                </div>
              </div>
            </div>

            {/* Right - Visual Card */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-96 h-96 bg-white rounded-2xl shadow-2xl p-10 flex flex-col items-center justify-center relative border border-gray-100">
                  <div className="w-24 h-24 bg-[#FBBF24] rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                    <HandHeart className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-xl font-bold text-[#134E4A] text-center mb-2">Mit Herz und Hand</p>
                  <p className="text-[#1F2937] text-center">Für ein würdevolles Älterwerden</p>

                  {/* Mini stats */}
                  <div className="flex items-center gap-6 mt-6 pt-6 border-t border-gray-100">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#134E4A]">500+</div>
                      <div className="text-xs text-[#1F2937]">Kunden</div>
                    </div>
                    <div className="w-px h-12 bg-gray-200" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#134E4A]">4.9<Star className="w-4 h-4 inline text-[#FBBF24] fill-current" /></div>
                      <div className="text-xs text-[#1F2937]">Bewertung</div>
                    </div>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-[#FBBF24]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Calculator - Pale Sun Background with Gold Border */}
      <div id="calculator" className="py-16 px-4 bg-[#FFFBEB] scroll-mt-24">
        <CareFinder />
      </div>

      {/* Benefits Section - Soft Mint Background with Gold Icons */}
      <section className="py-24 px-4 bg-[#F0FDF4]" aria-labelledby="benefits-title">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-[#FBBF24] rounded-2xl shadow-lg mb-6">
              <Award className="w-7 h-7 text-white" />
            </div>
            <h2 id="benefits-title" className="font-heading text-4xl md:text-5xl font-bold text-[#134E4A] mb-5">
              Warum uns wählen?
            </h2>
            <p className="text-xl text-[#1F2937] max-w-2xl mx-auto leading-relaxed">
              Drei gute Gründe für Morgenlicht Alltagshilfe
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Ihre Wünsche im Mittelpunkt',
                desc: 'Maßgeschneiderte Unterstützung, die genau zu Ihrem Lebensrhythmus passt. Wir hören zu und gestalten gemeinsam.',
              },
              {
                icon: Shield,
                title: '100% Kostenfrei für Sie',
                desc: 'Wir rechnen direkt mit der Pflegekasse ab. Keine versteckten Kosten, keine Vorabzahlung.',
              },
              {
                icon: Users,
                title: 'Feste Ansprechpartner',
                desc: 'Regelmäßige Zeiten mit vertrauten Menschen. Kontinuität und Verlässlichkeit sind unser Versprechen.',
              },
            ].map((benefit, i) => (
              <div key={i} className="group">
                <div className="h-full bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-[#FBBF24] rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#134E4A] mb-3">{benefit.title}</h3>
                  <p className="text-[#1F2937] leading-relaxed text-base">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Creme Background with Forest Icons */}
      <section className="py-24 px-4 bg-[#FAF9F6]" aria-labelledby="services-title">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 id="services-title" className="font-heading text-4xl md:text-5xl font-bold text-[#134E4A] mb-5">
              Unsere Leistungen
            </h2>
            <p className="text-xl text-[#1F2937] max-w-2xl mx-auto leading-relaxed">
              Umfassende Unterstützung für Ihren Alltag — genau das, was Sie brauchen.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { title: 'Haushalt & Wohlbefinden', desc: 'Reinigung, Kochen, Wäsche & Einkauf', icon: Home },
              { title: 'Einkauf & Erledigungen', desc: 'Wocheneinkauf & Erledigungen übernehmen', icon: ShoppingBag },
              { title: 'Begleitung & Mobilität', desc: 'Arzt, Behörde, Ausflüge & Spaziergänge', icon: Stethoscope },
              { title: 'Alltag & Struktur', desc: 'Post, Anträge & Termin-Management', icon: FileText },
              { title: 'Soziale Teilhabe', desc: 'Gesellschaft, Freizeit & Unternehmungen', icon: Handshake },
            ].map((service) => (
              <div key={service.title} className="group">
                <div className="h-full bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 text-center hover:-translate-y-2">
                  <div className="w-16 h-16 mx-auto mb-5 bg-[#134E4A] rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 text-white">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-bold text-[#134E4A] mb-3 text-xl">{service.title}</h3>
                  <p className="text-[#1F2937] leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <GlassButton as="link" href="/leistungen" variant="primary" size="lg" className="px-10 shadow-lg">
              Alle Leistungen entdecken
              <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
            </GlassButton>
          </div>
        </div>
      </section>

      {/* Testimonial - Pale Sun Background with Gold Quotes */}
      <section className="py-24 px-4 bg-[#FFFBEB]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#134E4A] rounded-2xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-10" aria-hidden="true">
              <div className="absolute top-8 left-8 w-4 h-4 bg-white rounded-full" />
              <div className="absolute top-8 right-8 w-4 h-4 bg-white rounded-full" />
              <div className="absolute bottom-8 left-8 w-4 h-4 bg-white rounded-full" />
              <div className="absolute bottom-8 right-8 w-4 h-4 bg-white rounded-full" />
              <div className="absolute top-1/2 left-8 w-2 h-2 bg-white rounded-full" />
              <div className="absolute top-1/2 right-8 w-2 h-2 bg-white rounded-full" />
            </div>

            {/* Decorative quote mark */}
            <div className="absolute top-8 left-8 text-8xl text-[#FBBF24]/30 font-serif" aria-hidden="true">
              "
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg mb-8">
                <Quote className="w-10 h-10 text-[#FBBF24]" />
              </div>

              <div className="flex justify-center mb-6 gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-8 h-8 text-[#FBBF24] fill-current" aria-hidden="true" />
                ))}
              </div>

              <blockquote className="mb-10">
                <p className="text-2xl md:text-3xl lg:text-4xl text-white font-medium leading-relaxed">
                  "Meine Mutter blüht richtig auf, seit Frau Weber jede Woche kommt. Das ist unbezahlbar."
                </p>
              </blockquote>

              <cite className="flex items-center justify-center gap-5 text-white not-italic">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border-2 border-white/30">
                  <span className="text-2xl font-bold text-white">MH</span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-xl">Michael Hofmann</div>
                  <div className="text-white/80">Sohn einer Kundin aus Berlin</div>
                </div>
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Creme Background with Large Phone Number */}
      <section className="py-24 px-4 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#134E4A] mb-6">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-xl text-[#1F2937] mb-10 max-w-2xl mx-auto font-medium">
            Wir beraten Sie kostenlos und unverbindlich. Rufen Sie an oder schreiben Sie uns.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <GlassButton
              as="link"
              href="/kontakt"
              variant="primary"
              size="lg"
              className="shadow-xl font-bold px-10"
            >
              Jetzt anfragen
              <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
            </GlassButton>
            <a
              href="tel:06912345678"
              className="inline-flex items-center justify-center px-10 h-16 text-lg font-bold rounded-xl bg-white hover:bg-gray-50 text-[#134E4A] border-2 border-[#134E4A]/20 hover:border-[#134E4A] transition-all shadow-md"
            >
              <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
              <span className="text-[32px] leading-none">069 12345678</span>
            </a>
          </div>

          <p className="text-[#1F2937] text-sm mt-8 font-medium">
            Mo–Fr: 8:00 – 18:00 Uhr • Kostenlos aus dem deutschen Festnetz
          </p>
        </div>
      </section>
    </>
  )
}
