import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { Navbar } from './components/layout'
import { GlassFooter } from './components/layout'

// Montserrat - Modern, geometrische Schrift für Überschriften und Logo
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
})

// Inter - Maximale Lesbarkeit für Fließtext
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: {
    default: 'Morgenlicht Alltagshilfe',
    template: '%s | Morgenlicht Alltagshilfe',
  },
  description: 'Alltagsbegleitung und Entlastung für Senioren und Angehörige. Anerkannter Anbieter nach § 45a SGB XI.',
  keywords: ['Alltagshilfe', 'Seniorenbetreuung', 'Entlastungsbetrag', 'Pflegegrad', 'SGB XI', 'Frankfurt'],
  authors: [{ name: 'Morgenlicht Alltagshilfe' }],
  openGraph: {
    title: 'Morgenlicht Alltagshilfe',
    description: 'Würdevolle Unterstützung im Alltag für Senioren und Angehörige',
    type: 'website',
    locale: 'de_DE',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="flex flex-col min-h-screen antialiased font-body text-lg text-[#1F2937] leading-relaxed bg-[#FAF9F6]">
        <Navbar />
        <main id="main-content" className="flex-grow pt-16">
          {children}
        </main>
        <GlassFooter />
      </body>
    </html>
  )
}
