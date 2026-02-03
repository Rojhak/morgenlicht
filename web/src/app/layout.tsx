import type { Metadata } from 'next'
import { Crimson_Pro, Work_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Navbar } from './components/layout'
import { GlassFooter } from './components/layout'

// Crimson Pro - Sharp, editorial display font with character
// NOT overused like Playfair Display, more distinctive
const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-crimson',
  weight: ['400', '600', '700'],
})

// Work Sans - Warm humanist sans, NOT Inter/Roboto
// Excellent German support, quirky personality
const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
  weight: ['400', '500', '600'],
})

// Space Grotesk - Geometric but personality-filled
// Great for labels, tags, emphasis
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
  weight: ['500', '700'],
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
    <html lang="de" className={`${crimsonPro.variable} ${workSans.variable} ${spaceGrotesk.variable}`}>
      <body className="flex flex-col min-h-screen antialiased font-work-sans">
        <Navbar />
        <main id="main-content" className="flex-grow pt-16">
          {children}
        </main>
        <GlassFooter />
      </body>
    </html>
  )
}
