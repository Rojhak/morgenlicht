import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Navbar } from './components/layout'
import { GlassFooter } from './components/layout'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
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
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex flex-col min-h-screen antialiased">
        <Navbar />
        <main id="main-content" className="flex-grow pt-16">
          {children}
        </main>
        <GlassFooter />
      </body>
    </html>
  )
}
