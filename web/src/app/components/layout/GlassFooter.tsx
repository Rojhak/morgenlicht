'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Heart, ArrowUp, Clock } from 'lucide-react'
import { useState } from 'react'

const PHONE = '069 12345678'
const EMAIL = 'info@morgenlicht-alltagshilfe.de'
const SERVICE_AREA = 'Berlin'

function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with newsletter backend
    console.log('Newsletter signup:', email)
    setSubscribed(true)
    setTimeout(() => {
      setSubscribed(false)
      setEmail('')
    }, 3000)
  }

  return (
    <div className="flex flex-col">
      <h4 className="font-display font-semibold text-[#0D6E64] mb-3">
        Newsletter
      </h4>
      <p className="text-sm text-[#37474F] mb-4">
        Bleiben Sie informiert über unsere Pflegeleistungen
      </p>
      {subscribed ? (
        <div className="glass rounded-lg px-4 py-3 text-center text-[#0D6E64] text-sm font-medium">
          Vielen Dank für Ihre Anmeldung!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ihre E-Mail"
            required
            className="flex-1 px-4 py-2.5 rounded-lg border border-[#26A69A]/30 bg-white/50 backdrop-blur-sm text-[#37474F] placeholder:text-[#78909C] focus:outline-none focus:ring-2 focus:ring-[#26A69A] focus:border-transparent transition-all"
            aria-label="E-Mail-Adresse für Newsletter"
          />
          <button
            type="submit"
            className="px-6 py-2.5 rounded-lg bg-[#FF8A65] text-white font-medium hover:bg-[#FF7043] transition-colors focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2 shadow-lg"
            aria-label="Newsletter anmelden"
          >
            Anmelden
          </button>
        </form>
      )}
    </div>
  )
}

function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      className="flex items-center gap-2 text-[#37474F] hover:text-[#26A69A] transition-colors text-sm focus:outline-none focus:ring-4 focus:ring-[#FFD54F] rounded px-2 py-1"
      aria-label="Zum Seitenanfang"
    >
      <ArrowUp className="w-4 h-4" aria-hidden="true" />
      <span>Nach oben</span>
    </button>
  )
}

export function GlassFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      role="contentinfo"
      className="relative mt-auto"
      style={{
        background: 'linear-gradient(135deg, rgba(38, 166, 154, 0.12) 0%, rgba(13, 110, 100, 0.08) 100%)',
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.25)',
        boxShadow: '0 -8px 32px rgba(13, 110, 100, 0.08)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Brand + Newsletter */}
        <div className="py-12 border-b border-[#0D6E64]/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Brand Section */}
            <div className="flex flex-col">
              <Link href="/" className="inline-flex items-center gap-3 group mb-4">
                <Image
                  src="/trans_logo.svg"
                  alt="Morgenlicht Logo"
                  width={56}
                  height={56}
                  className="w-14 h-14"
                />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold font-display leading-none tracking-tight text-[#0D6E64]">
                    Morgenlicht
                  </span>
                  <span className="text-sm uppercase tracking-wide font-semibold text-[#26A69A] leading-tight mt-1">
                    Alltagshilfe Berlin
                  </span>
                </div>
              </Link>
              <p className="text-[#37474F] text-sm leading-relaxed max-w-sm mb-4">
                Interculturale Alltagsbegleitung und Entlastung für Senioren und ihre Angehörigen in Berlin.
              </p>
              <div className="flex items-center gap-2 text-sm text-[#0D6E64] font-medium">
                <Heart className="w-4 h-4 text-[#FF8A65]" aria-hidden="true" />
                <span>Anerkannt nach § 45a SGB XI</span>
              </div>
            </div>

            {/* Newsletter Section */}
            <NewsletterSignup />
          </div>
        </div>

        {/* Main Grid: 4 Columns */}
        <div className="py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Column 1: Über uns */}
            <div>
              <h4 className="font-display font-semibold text-[#0D6E64] mb-4 text-sm uppercase tracking-wide">
                Über uns
              </h4>
              <nav aria-label="Footer-Navigation: Über uns">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/ueber-uns"
                      className="text-[#37474F] hover:text-[#26A69A] transition-colors underline-offset-2 hover:underline text-sm focus:outline-none focus:ring-4 focus:ring-[#FFD54F] rounded px-2 py-1 -ml-2"
                    >
                      Über uns
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-[#37474F] hover:text-[#26A69A] transition-colors underline-offset-2 hover:underline text-sm focus:outline-none focus:ring-4 focus:ring-[#FFD54F] rounded px-2 py-1 -ml-2"
                    >
                      Blog & Ratgeber
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/kontakt"
                      className="text-[#37474F] hover:text-[#26A69A] transition-colors underline-offset-2 hover:underline text-sm focus:outline-none focus:ring-4 focus:ring-[#FFD54F] rounded px-2 py-1 -ml-2"
                    >
                      Karriere
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/kontakt"
                      className="text-[#37474F] hover:text-[#26A69A] transition-colors underline-offset-2 hover:underline text-sm focus:outline-none focus:ring-4 focus:ring-[#FFD54F] rounded px-2 py-1 -ml-2"
                    >
                      Kontakt
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Column 2: Leistungen */}
            <div>
              <h4 className="font-display font-semibold text-[#0D6E64] mb-4 text-sm uppercase tracking-wide">
                Leistungen
              </h4>
              <nav aria-label="Footer-Navigation: Leistungen">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/leistungen"
                      className="text-[#37474F] hover:text-[#26A69A] transition-colors underline-offset-2 hover:underline text-sm focus:outline-none focus:ring-4 focus:ring-[#FFD54F] rounded px-2 py-1 -ml-2"
                    >
                      Unsere Leistungen
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pflegegrad-guide"
                      className="text-[#37474F] hover:text-[#26A69A] transition-colors underline-offset-2 hover:underline text-sm focus:outline-none focus:ring-4 focus:ring-[#FFD54F] rounded px-2 py-1 -ml-2"
                    >
                      Pflegegrad Guide
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/kosten"
                      className="text-[#37474F] hover:text-[#26A69A] transition-colors underline-offset-2 hover:underline text-sm focus:outline-none focus:ring-4 focus:ring-[#FFD54F] rounded px-2 py-1 -ml-2"
                    >
                      Kosten & Förderung
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/fragen"
                      className="text-[#37474F] hover:text-[#26A69A] transition-colors underline-offset-2 hover:underline text-sm focus:outline-none focus:ring-4 focus:ring-[#FFD54F] rounded px-2 py-1 -ml-2"
                    >
                      Häufige Fragen
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Column 3: Kontakt */}
            <div>
              <h4 className="font-display font-semibold text-[#0D6E64] mb-4 text-sm uppercase tracking-wide">
                Kontakt
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`tel:${PHONE.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 text-[#37474F] hover:text-[#26A69A] transition-colors focus:outline-none focus:ring-4 focus:ring-[#FFD54F] rounded px-2 py-1 -ml-2 group"
                  >
                    <Phone className="w-4 h-4 text-[#26A69A] flex-shrink-0" aria-hidden="true" />
                    <div className="flex flex-col">
                      <span className="font-medium text-base group-hover:underline">{PHONE}</span>
                      <span className="text-xs text-[#78909C]">Telefon</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-3 text-[#37474F] hover:text-[#26A69A] transition-colors focus:outline-none focus:ring-4 focus:ring-[#FFD54F] rounded px-2 py-1 -ml-2 group"
                  >
                    <Mail className="w-4 h-4 text-[#26A69A] flex-shrink-0" aria-hidden="true" />
                    <div className="flex flex-col">
                      <span className="font-medium text-sm group-hover:underline">{EMAIL}</span>
                      <span className="text-xs text-[#78909C]">E-Mail</span>
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-[#37474F]">
                  <MapPin className="w-4 h-4 text-[#26A69A] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="flex flex-col">
                    <span className="text-sm">Raum {SERVICE_AREA}</span>
                    <div className="flex items-center gap-1.5 text-xs text-[#78909C] mt-0.5">
                      <Clock className="w-3 h-3" aria-hidden="true" />
                      <span>Mo-Fr: 8:00 - 18:00</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Column 4: Rechtliches */}
            <div>
              <h4 className="font-display font-semibold text-[#0D6E64] mb-4 text-sm uppercase tracking-wide">
                Rechtliches
              </h4>
              <nav aria-label="Footer-Navigation: Rechtliches">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/impressum"
                      className="text-[#37474F] hover:text-[#26A69A] transition-colors underline-offset-2 hover:underline text-sm focus:outline-none focus:ring-4 focus:ring-[#FFD54F] rounded px-2 py-1 -ml-2"
                    >
                      Impressum
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/datenschutz"
                      className="text-[#37474F] hover:text-[#26A69A] transition-colors underline-offset-2 hover:underline text-sm focus:outline-none focus:ring-4 focus:ring-[#FFD54F] rounded px-2 py-1 -ml-2"
                    >
                      Datenschutz
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        // TODO: Open cookie consent banner
                        console.log('Open cookie settings')
                      }}
                      className="text-[#37474F] hover:text-[#26A69A] transition-colors underline-offset-2 hover:underline text-sm text-left focus:outline-none focus:ring-4 focus:ring-[#FFD54F] rounded px-2 py-1 -ml-2 w-full"
                    >
                      Cookie-Einstellungen
                    </button>
                  </li>
                  <li>
                    <Link
                      href="/datenschutz#barrierefreiheit"
                      className="text-[#37474F] hover:text-[#26A69A] transition-colors underline-offset-2 hover:underline text-sm focus:outline-none focus:ring-4 focus:ring-[#FFD54F] rounded px-2 py-1 -ml-2"
                    >
                      Barrierefreiheit
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-[#0D6E64]/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[#78909C] text-sm text-center sm:text-left">
              © {currentYear} Morgenlicht Alltagshilfe • Berlin • Für alle Kulturen
            </p>
            <BackToTop />
          </div>
        </div>
      </div>
    </footer>
  )
}
