'use client'

import Link from 'next/link'
import { Heart, Shield, Users, ArrowRight, Phone, Award, Quote, HandHeart, Home, ShoppingBag, Stethoscope, Coffee, CheckCircle, Sparkles } from 'lucide-react'
import { GlassCard, GlassButton } from '@/app/components/glass'
import { CareFinder } from '@/app/components/wizard'

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Premium Design */}
      <section className="relative min-h-[85vh] flex items-center px-4 overflow-hidden" aria-labelledby="hero-title">
        {/* Sophisticated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAFA] via-[#F5F5F0] to-[#E8F5E9]" />

        {/* Subtle decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#FFD54F]/8 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#26A69A]/8 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Premium Trust Badge */}
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg border border-gray-100 mb-10">
                <div className="w-10 h-10 bg-gradient-to-br from-[#B8472A] to-[#FFD54F] rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <span className="text-base font-semibold text-[#37474F]">Anerkannt nach § 45a SGB XI</span>
              </div>

              <h1 id="hero-title" className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-display text-[#0D6E64] mb-8 leading-tight">
                Würdevolle Unterstützung<br />
                <span className="text-[#26A69A]">im Alltag</span>
              </h1>

              <p className="text-2xl sm:text-3xl text-[#546E7A] leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0">
                Liebevolle Alltagsbegleitung für Senioren in Berlin —
                <span className="font-semibold text-[#0D6E64]">100% kostenfrei</span> über Ihre Pflegekasse.
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
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm text-[#546E7A]">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#26A69A]" />
                  <span>Keine versteckten Kosten</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#26A69A]" />
                  <span>Feste Ansprechpartner</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#26A69A]" />
                  <span>Flexibel & zuverlässig</span>
                </div>
              </div>
            </div>

            {/* Right - Visual Card */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-96 h-96 bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center justify-center relative border border-gray-100">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#FFD54F] via-[#FFA726] to-[#FF8F65] rounded-3xl flex items-center justify-center mb-6 shadow-xl">
                    <HandHeart className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-xl font-bold text-[#37474F] text-center mb-2">Mit Herz und Hand</p>
                  <p className="text-[#546E7A] text-center">Für ein würdevolles Älterwerden</p>

                  {/* Mini stats */}
                  <div className="flex items-center gap-6 mt-6 pt-6 border-t border-gray-100">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#0D6E64]">500+</div>
                      <div className="text-xs text-[#546E7A]">Kunden</div>
                    </div>
                    <div className="w-px h-12 bg-gray-200" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#0D6E64]">4.9★</div>
                      <div className="text-xs text-[#546E7A]">Bewertung</div>
                    </div>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-[#FFD54F]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Calculator - Prominent */}
      <div id="calculator" className="py-16 px-4 bg-gradient-to-b from-[#E8F5E9] to-white scroll-mt-24">
        <CareFinder />
      </div>

      {/* Benefits Section - Clean Cards */}
      <section className="py-24 px-4" aria-labelledby="benefits-title">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#FFD54F] to-[#FFA726] rounded-2xl shadow-lg mb-6">
              <Award className="w-7 h-7 text-white" />
            </div>
            <h2 id="benefits-title" className="text-4xl md:text-5xl font-bold text-[#37474F] mb-5">
              Warum uns wählen?
            </h2>
            <p className="text-xl text-[#546E7A] max-w-2xl mx-auto leading-relaxed">
              Drei gute Gründe für Morgenlicht Alltagshilfe
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Ihre Wünsche im Mittelpunkt',
                desc: 'Maßgeschneiderte Unterstützung, die genau zu Ihrem Lebensrhythmus passt. Wir hören zu und gestalten gemeinsam.',
                color: 'from-[#FFD54F] to-[#FFA726]',
                bgLight: 'bg-[#FFF8E1]'
              },
              {
                icon: Shield,
                title: '100% Kostenfrei für Sie',
                desc: 'Wir rechnen direkt mit der Pflegekasse ab. Keine versteckten Kosten, keine Vorabzahlung.',
                color: 'from-[#26A69A] to-[#00897B]',
                bgLight: 'bg-[#E0F2F1]'
              },
              {
                icon: Users,
                title: 'Feste Ansprechpartner',
                desc: 'Regelmäßige Zeiten mit vertrauten Menschen. Kontinuität und Verlässlichkeit sind unser Versprechen.',
                color: 'from-[#7B1FA2] to-[#9C27B0]',
                bgLight: 'bg-[#F3E5F5]'
              },
            ].map((benefit, i) => (
              <div key={i} className="group">
                <div className={`h-full rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 ${benefit.bgLight}`}>
                  <div className={`w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-3xl flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#37474F] mb-4">{benefit.title}</h3>
                  <p className="text-[#546E7A] leading-relaxed text-lg">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - 9 Categories Grid */}
      <section className="py-24 px-4 bg-[#FAFAFA]" aria-labelledby="services-title">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 id="services-title" className="text-4xl md:text-5xl font-bold text-[#37474F] mb-5">
              Unsere Leistungen
            </h2>
            <p className="text-xl text-[#546E7A] max-w-2xl mx-auto leading-relaxed">
              Umfassende Unterstützung für Ihren Alltag — genau das, was Sie brauchen.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { title: 'Haushalt', desc: 'Reinigung, Kochen, Wäsche & Einkauf', emoji: '🏠', color: 'from-[#FFE0B2] to-[#FFD54F]' },
              { title: 'Körperpflege', desc: 'Hilfe beim Waschen, Duschen & Anziehen', emoji: '🛁', color: 'from-[#B3E5FC] to-[#64B5F6]' },
              { title: 'Begleitung', desc: 'Arzt, Behörde, Ausflüge & Spaziergänge', emoji: '🏥', color: 'from-[#C8E6C9] to-[#81C784]' },
              { title: 'Gesellschaft', desc: 'Gespräche, Vorlesen, gemeinsame Zeit', emoji: '💬', color: 'from-[#F8BBD0] to-[#F48FB1]' },
              { title: 'Einkaufshilfe', desc: 'Wocheneinkauf & Erledigungen übernehmen', emoji: '🛒', color: 'from-[#FFCC80] to-[#FFA726]' },
              { title: 'Mahlzeiten', desc: 'Kochen zusammen oder warmes Essen', emoji: '🍲', color: 'from-[#FFAB91] to-[#FF8A65]' },
              { title: 'Botengänge', desc: 'Post, Apotheke & Behördenerledigungen', emoji: '📦', color: 'from-[#CE93D8] to-[#AB47BC]' },
              { title: 'Nachtwache', desc: 'Sicherheit & Unterstützung in der Nacht', emoji: '🌙', color: 'from-[#9FA8DA] to-[#7986CB]' },
              { title: 'Zeitverschwendung', desc: 'Gemeinsame Freizeit & Unternehmungen', emoji: '♟️', color: 'from-[#80CBC4] to-[#26A69A]' },
            ].map((service) => (
              <div key={service.title} className="group">
                <div className="h-full bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center hover:-translate-y-2">
                  <div className={`w-16 h-16 mx-auto mb-5 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-3xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {service.emoji}
                  </div>
                  <h3 className="font-bold text-[#37474F] mb-3 text-xl">{service.title}</h3>
                  <p className="text-[#546E7A] leading-relaxed">{service.desc}</p>
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

      {/* Testimonial - Premium Design */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#FAFAFA] to-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#0D6E64] to-[#26A69A] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
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
            <div className="absolute top-8 left-8 text-8xl text-white/10 font-serif" aria-hidden="true">
              "
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg mb-8">
                <Quote className="w-10 h-10 text-[#FFD54F]" />
              </div>

              <div className="flex justify-center mb-6 gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-3xl text-[#FFD54F]" aria-hidden="true">★</span>
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

      {/* Final CTA - Clean & Strong - High Contrast for Accessibility */}
      <section className="py-24 px-4 bg-[#E0F2F1]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#37474F] mb-6">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-xl text-[#546E7A] mb-10 max-w-2xl mx-auto font-medium">
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
              className="inline-flex items-center justify-center px-10 h-16 text-lg font-bold rounded-xl bg-white/50 hover:bg-white text-[#0D6E64] border-2 border-[#0D6E64]/20 hover:border-[#0D6E64] transition-all"
            >
              <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
              069 12345678
            </a>
          </div>

          <p className="text-[#546E7A] text-sm mt-8 font-medium">
            Mo–Fr: 8:00 – 18:00 Uhr • Kostenlos aus dem deutschen Festnetz
          </p>
        </div>
      </section>
    </>
  )
}
