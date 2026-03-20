import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { Navbar, Footer } from './components/layout'

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
    default: 'Morgenlicht Alltagshilfe Berlin | Haushaltshilfe & Betreuung ab Pflegegrad 1',
    template: '%s | Morgenlicht Alltagshilfe Berlin',
  },
  description: 'Wir entlasten Senioren in Berlin liebevoll im Alltag & Haushalt. 100% Kostenübernahme durch die Pflegekasse ab Pflegegrad 1. Jetzt kostenfrei beraten lassen!',
  keywords: ['Alltagshilfe', 'Seniorenbetreuung', 'Entlastungsbetrag', 'Pflegegrad', 'SGB XI', 'Berlin'],
  authors: [{ name: 'Morgenlicht Alltagshilfe' }],
  openGraph: {
    title: 'Morgenlicht Alltagshilfe Berlin | Haushaltshilfe & Betreuung ab Pflegegrad 1',
    description: 'Wir entlasten Senioren in Berlin liebevoll im Alltag & Haushalt. 100% Kostenübernahme durch die Pflegekasse ab Pflegegrad 1. Jetzt kostenfrei beraten lassen!',
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-[#134E4A] focus:text-white focus:rounded-br-lg focus:outline-none focus:ring-2 focus:ring-[#FBBF24] focus:top-0 focus:left-0"
        >
          Zum Hauptinhalt springen
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-grow focus:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
