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
    default: 'Morgenlicht | Herzliche Alltagshilfe in Berlin & 100% Kostenübernahme',
    template: '%s | Morgenlicht Alltagshilfe Berlin',
  },
  description: 'Zertifizierte Alltagshilfe, Seniorenbetreuung & Haushaltshilfe in Berlin Mitte, Kreuzberg & Neukölln für Senioren & Pflegebedürftige. 100% Kostenübernahme ab Pflegegrad 1. Jetzt beraten lassen!',
  keywords: ['Alltagshilfe Berlin', 'Seniorenbetreuung Berlin', 'Haushaltshilfe Kreuzberg', 'Haushaltshilfe Neukölln', 'Alltagshilfe Mitte', 'Entlastungsbetrag', 'Pflegegrad 1 Kostenübernahme', 'Morgenlicht Alltagshilfe', 'Entlastung Pflegendeangehörige'],
  authors: [{ name: 'Morgenlicht Alltagshilfe' }],
  openGraph: {
    title: 'Morgenlicht | Herzliche Alltagshilfe in Berlin & 100% Kostenübernahme',
    description: 'Zertifizierte Alltagshilfe, Seniorenbetreuung & Haushaltshilfe in Berlin Mitte, Kreuzberg & Neukölln für Senioren & Pflegebedürftige. 100% Kostenübernahme ab Pflegegrad 1. Jetzt beraten lassen!',
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
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
