import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { Navbar, Footer } from './components/layout'
import { MobileContactBar } from './components/layout/MobileContactBar'
import { PlausibleAnalytics } from './components/analytics/PlausibleAnalytics'
import { serializeJsonLd } from '@/lib/security'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['400', '500', '600'],
})

const SITE_URL = 'https://www.morgenlicht-alltagshilfe.de'
const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Alltagshilfe Berlin mit Pflegegrad | Morgenlicht',
    template: '%s | Morgenlicht',
  },
  description:
    'Anerkannte Alltagshilfe und Haushaltshilfe mit Pflegegrad in Berlin-Kreuzberg und Neukölln. Persönlich auf Deutsch, Türkisch und Englisch.',
  authors: [{ name: 'Morgenlicht Alltagshilfe' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-icon.png', type: 'image/png', sizes: '180x180' }],
    shortcut: ['/favicon.ico'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Alltagshilfe Berlin mit Pflegegrad | Morgenlicht',
    description:
      'Persönliche Unterstützung bei Haushalt, Einkauf und Begleitung in Kreuzberg und Neukölln.',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Morgenlicht Alltagshilfe',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Morgenlicht Alltagshilfe Berlin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alltagshilfe Berlin mit Pflegegrad | Morgenlicht',
    description:
      'Persönliche Unterstützung bei Haushalt, Einkauf und Begleitung in Kreuzberg und Neukölln.',
    images: ['/opengraph-image'],
  },
  verification: GOOGLE_SITE_VERIFICATION
    ? { google: GOOGLE_SITE_VERIFICATION }
    : undefined,
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#business`,
      name: 'Morgenlicht Alltagshilfe Berlin',
      legalName: 'Morgenlicht Alltagshilfe Berlin UG (haftungsbeschränkt)',
      description:
        'Nach Berliner Landesrecht anerkanntes Angebot zur Unterstützung im Alltag. Mobiler Service in Berlin-Kreuzberg und Neukölln auf Deutsch, Türkisch und Englisch; kein Kundenempfang an der Geschäftsanschrift.',
      url: SITE_URL,
      telephone: '+493023593028',
      faxNumber: '+493053059389',
      email: 'info@morgenlicht-alltagshilfe.de',
      image: `${SITE_URL}/images/hero_helping_hand.jpg`,
      logo: `${SITE_URL}/morgen.png`,
      priceRange: '35,50 €/Std.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Urbanstraße 71',
        postalCode: '10967',
        addressLocality: 'Berlin',
        addressRegion: 'Berlin',
        addressCountry: 'DE',
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Berlin-Kreuzberg' },
        { '@type': 'AdministrativeArea', name: 'Berlin-Neukölln' },
      ],
      knowsLanguage: ['de', 'tr', 'en'],
      sameAs: [
        'https://www.hilfelotse-berlin.de/detail/morgenlicht-alltagshilfe-berlin',
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '16:00',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Angebote zur Unterstützung im Alltag',
        itemListElement: [
          'Haushaltshilfe',
          'Einkaufshilfe',
          'Begleitung zu Terminen',
          'Alltagsorganisation',
          'Soziale Begleitung',
        ].map((name) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name },
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Morgenlicht Alltagshilfe Berlin',
      inLanguage: ['de-DE', 'tr-TR'],
      publisher: { '@id': `${SITE_URL}/#business` },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col bg-[#FAF9F6] pb-[calc(3.5rem+env(safe-area-inset-bottom))] font-body text-lg leading-relaxed text-[#1F2937] antialiased md:pb-0">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[100] focus:rounded-lg focus:bg-[#134E4A] focus:px-5 focus:py-3 focus:text-white focus:ring-4 focus:ring-[#FFD54F]"
        >
          Zum Hauptinhalt springen
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
        />
        <PlausibleAnalytics />
        <Navbar />
        <main id="main-content" className="flex-grow" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <MobileContactBar />
      </body>
    </html>
  )
}
