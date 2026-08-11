'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Heart, Users, Award, ArrowRight, Sparkles, MapPin, Handshake, Quote, Clock, Phone, ShieldCheck, Zap } from 'lucide-react'
import { ScrollRevealSection } from '../components/animations/ScrollReveal'
import { GlassCard, GlassButton } from '../components/glass'


export default function UeberUnsPage() {
  return (
    <>
      {/* Hero Section - Matching other pages */}
      <section className="relative pt-20 md:pt-32 pb-12 md:pb-24 px-4 bg-white">
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#144E41]/10 rounded-full text-xs sm:text-sm font-semibold tracking-wider text-[#144E41] mb-6 shadow-sm h-[34px]">
            <Heart className="w-4 h-4 text-[#144E41]" />
            <span>Das Herz hinter Morgenlicht</span>
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#144E41] mb-8 tracking-tighter">
            Morgenlicht: Ihre Alltagshilfe in Berlin.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            Unterstützung auf Augenhöhe – mit Herz, Hand und Verstand. Wir helfen Senioren und Pflegebedürftigen dabei, so lange und selbstbestimmt wie möglich im eigenen Zuhause zu leben. Wir entlasten Sie und Ihre Angehörigen. <span className="font-semibold text-[#134E4A]">(anerkannte Anbieter nach § 45a SGB XI)</span>.
          </p>
        </div>
      </section>

      {/* Founder Story - Premium Design - Beige */}
      <ScrollRevealSection className="py-16 md:py-24 px-4 bg-[#F7F6F3]" delay={100}>
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo Side */}
            <div className="relative order-2 lg:order-1">
              <div className="relative w-[90%] mx-auto lg:w-full mb-6 lg:mb-0">
                {/* Decorative background */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#134E4A]/5 via-transparent to-[#FBBF24]/5 rounded-[32px] blur-2xl" />

                {/* Main photo frame */}
                <div className="relative bg-white rounded-[24px] p-2 shadow-xl border border-gray-100">
                  <div className="relative rounded-[16px] overflow-hidden aspect-[4/5]">
                    <Image
                      src="/images/asiye-duman.jpeg"
                      alt="Asiye Duman - Gründerin und Geschäftsführerin von Morgenlicht Alltagshilfe Berlin"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Floating badge - Scaled on mobile (~65%) */}
                <div className="absolute -bottom-2 -right-2 md:-bottom-6 md:-right-6 bg-white rounded-2xl shadow-lg p-3 md:p-4 border border-gray-100 flex items-center gap-2 md:gap-3 scale-[0.7] sm:scale-[0.85] md:scale-100 origin-bottom-right">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FFFBEB] rounded-xl flex items-center justify-center border border-[#FBBF24]/20">
                    <Award className="w-5 h-5 md:w-6 md:h-6 text-[#FBBF24]" />
                  </div>
                  <div>
                    <div className="text-[10px] md:text-xs font-semibold text-[#144E41] bg-white px-2 py-0.5 rounded-full border border-[#144E41]/10 tracking-widest mb-1">Anerkannt</div>
                    <div className="text-sm md:text-base font-bold font-heading text-[#134E4A]">§ 45a SGB XI</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full mb-6 border border-[#144E41]/10">
                <Sparkles className="w-4 h-4 text-[#144E41]" />
                <span className="text-sm font-semibold font-body text-[#144E41] tracking-wider">Gründerin & Geschäftsführerin</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#134E4A] mb-4 tracking-tight">
                Asiye Duman
              </h2>

              <p className="text-lg font-body text-[#134E4A] font-semibold mb-8">
                Morgenlicht Alltagshilfe Berlin
              </p>

              <div className="space-y-6 text-gray-600 font-body leading-relaxed">
                <p>
                  Mit Morgenlicht möchte ich ältere und pflegebedürftige Menschen dabei unterstützen, ihren Alltag zu Hause möglichst selbstbestimmt zu gestalten.
                </p>

                <p>
                  Dabei gilt für mich: <strong className="text-[#134E4A]">Der Mensch muss im Mittelpunkt stehen.</strong>
                </p>

                <p>
                  Oft sind es ganz praktische Dinge, die plötzlich schwerfallen: Einkäufe tragen, die Wohnung in Ordnung halten oder einen Termin allein bewältigen. Angehörige möchten helfen, stoßen aber selbst an zeitliche Grenzen.
                </p>

                <p>
                  Genau hier setzt Morgenlicht an: mit klar vereinbarter Unterstützung und einer <strong className="text-[#134E4A]">würdevollen Begleitung auf Augenhöhe</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollRevealSection>

      {/* Personal Quote - White */}
      <ScrollRevealSection className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -top-8 -left-8 text-9xl text-[#C0A080]/10 font-serif" aria-hidden="true">
              "
            </div>
            <div className="p-10 md:p-16 text-center relative bg-white rounded-[24px] shadow-sm border border-gray-100">
              <Quote className="w-12 h-12 text-[#FBBF24] mx-auto mb-6" />
              <blockquote className="mb-0">
                <p className="text-2xl text-[#134E4A] font-medium font-body leading-relaxed italic">
                  "Jeder Mensch verdient Unterstützung, die Würde und Respekt zeigt – genau das wollen wir jeden Tag bei Morgenlicht leben."
                </p>
              </blockquote>
              <cite className="text-[#134E4A] font-bold font-heading not-italic">
                — Asiye Duman
              </cite>
            </div>
          </div>
        </div>
      </ScrollRevealSection>

      {/* Unser Versprechen Section - Beige (Rhythm Alignment) */}
      <section className="py-24 px-4 md:px-8 bg-[#F7F6F3] relative">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollRevealSection className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#134E4A] mb-5 tracking-tight">
              Unser Versprechen an Sie
            </h2>
          </ScrollRevealSection>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {[
              {
                icon: Heart,
                title: 'Individuelle Hilfe',
                text: 'Wir fragen nach: Was erleichtert Ihren Alltag? Aufgaben, Wünsche und Grenzen werden im Erstgespräch gemeinsam vereinbart.'
              },
              {
                icon: ShieldCheck,
                title: 'Professionalität & Respekt',
                text: 'Morgenlicht ist als Angebot nach § 45a SGB XI anerkannt. Würde, Respekt, transparente Absprachen und die Zustimmung der unterstützten Person sind unser Maßstab.'
              },
              {
                icon: Zap,
                title: 'Transparent & Einfach',
                text: 'Wir unterstützen bei den notwendigen Unterlagen. Wenn Pflegegrad, Budget und Unterlagen vorliegen, kann eine Direktabrechnung vereinbart und die Hilfe im verfügbaren Budget ohne Eigenanteil genutzt werden.'
              }
            ].map((promise, idx) => {
              const Icon = promise.icon
              return (
                <ScrollRevealSection
                  key={promise.title}
                  delay={idx * 150}
                  className="bg-white rounded-[12px] p-6 md:p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-center"
                >
                  <div className="w-14 h-14 bg-[#F0FDF4] rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#144E41]" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#134E4A] mb-4">
                    {promise.title}
                  </h3>
                  <p className="text-base text-gray-600 font-body leading-relaxed">
                    {promise.text}
                  </p>
                </ScrollRevealSection>
              )
            })}
          </div>

          <ScrollRevealSection delay={500} className="max-w-3xl mx-auto mt-16">
            <p className="text-base md:text-lg text-gray-600 font-body leading-relaxed mb-6">
              Bei Morgenlicht verbinden wir klare Absprachen mit <span className="text-[#134E4A] font-semibold">menschlicher Wärme</span>. Wir wissen: Es kann Überwindung kosten, Hilfe anzunehmen und eine zunächst fremde Person in die eigene Wohnung zu lassen.
            </p>
            <p className="text-base md:text-lg text-gray-600 font-body leading-relaxed">
              Genau deshalb planen wir mit <span className="text-[#134E4A] font-semibold">möglichst festen Bezugspersonen</span>. Wir nehmen uns Zeit, zuzuhören und die vereinbarte Unterstützung an Ihre persönlichen Bedürfnisse anzupassen.
            </p>
          </ScrollRevealSection>
        </div>
      </section>

      {/* Trust Badge - Compact & Matching Design */}
      <ScrollRevealSection className="py-24 px-4 bg-white">
        <div className="max-w-2xl mx-auto mb-12 md:mb-0">
          <div className="bg-[#FFFFFF] rounded-[12px] p-8 md:p-10 text-center border border-gray-100 shadow-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFFBEB] rounded-2xl shadow-sm border border-[#FBBF24]/20 mb-6">
              <Award className="w-8 h-8 text-[#FBBF24]" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-[#134E4A] mb-4 tracking-tight">
              Anerkannter Anbieter nach § 45a SGB XI
            </h3>
            <p className="text-base font-body text-gray-600 max-w-lg mx-auto leading-relaxed">
              Morgenlicht Alltagshilfe ist als Anbieter nach § 45a SGB XI anerkannt. Der Entlastungsbetrag kann für unsere anerkannten Leistungen eingesetzt werden. <span className="font-bold text-[#134E4A]">Die Voraussetzungen und mögliche Kosten außerhalb des Budgets klären wir vor Beginn.</span>
            </p>
          </div>
        </div>
      </ScrollRevealSection>

      {/* CTA Section - Premium - Beige */}
      <section className="py-24 px-4 bg-[#F7F6F3] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#134E4A] mb-6 tracking-tight">
            Lernen Sie uns kennen
          </h2>
          <p className="text-xl font-body text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Wir freuen uns auf ein unverbindliches Gespräch mit Ihnen. Rufen Sie uns einfach an oder schreiben Sie uns eine Nachricht.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              href="/kontakt"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-[#134E4A] hover:bg-[#0F3F3C] text-white text-lg font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Jetzt anfragen
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>

            <a
              href="tel:03023593028"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-white text-[#134E4A] text-lg font-bold rounded-xl border-2 border-[#134E4A]/20 hover:border-[#134E4A]/40 transition-all shadow-sm"
            >
              <Phone className="w-5 h-5 mr-3" />
              030 235 930 28
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-12 text-gray-500 font-body">
            <div className="flex items-center gap-2 text-sm font-medium">
              Mo–Fr: 09:00 – 16:00 Uhr
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
