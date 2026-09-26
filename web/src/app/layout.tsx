import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { Navbar, Footer } from './components/layout'
import { MobileContactBar } from './components/layout/MobileContactBar'
import { PlausibleAnalytics } from './components/analytics/PlausibleAnalytics'
import { JsonLd } from './components/site/JsonLd'
import { SITE, SITE_URL } from '@/config/site'
import { areaServedSchema, BUSINESS_ID, graph } from '@/lib/schema'

// Variable fonts: one file per family covers all weights, so bold text is never synthesised.
const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-montserrat',
})

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-inter',
})

const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION

const DEFAULT_TITLE = 'Alltagshilfe Berlin mit Pflegegrad | Morgenlicht'
const DEFAULT_DESCRIPTION =
  'Anerkannte Alltagshilfe und Haushaltshilfe mit Pflegegrad in Berlin-Kreuzberg und Neukölln. Persönlich auf Deutsch, Türkisch und Englisch.'

export const viewport: Viewport = {
  themeColor: '#134E4A',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: '%s | Morgenlicht',
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE_URL }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  formatDetection: { telephone: false, address: false, email: false },
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
    title: DEFAULT_TITLE,
    description:
      'Persönliche Unterstützung bei Haushalt, Einkauf und Begleitung in Kreuzberg und Neukölln.',
    type: 'website',
    locale: 'de_DE',
    siteName: SITE.name,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description:
      'Persönliche Unterstützung bei Haushalt, Einkauf und Begleitung in Kreuzberg und Neukölln.',
    images: ['/opengraph-image'],
  },
  verification: GOOGLE_SITE_VERIFICATION
    ? { google: GOOGLE_SITE_VERIFICATION }
    : undefined,
}

// Provider entity. Mobile service without customer reception: the address is the legal
// business address, the hours describe telephone availability (ContactPoint), not a visitable office.
const structuredData = graph(
  {
    '@type': 'LocalBusiness',
    '@id': BUSINESS_ID,
    name: SITE.name,
    alternateName: 'Morgenlicht Alltagshilfe',
    legalName: SITE.legalName,
    description:
      'Nach Berliner Landesrecht anerkanntes Angebot zur Unterstützung im Alltag nach § 45a SGB XI: Hilfe im Haushalt, Einkauf, Begleitung zu Terminen, Alltagsorganisation und soziale Begleitung für ältere und pflegebedürftige Menschen. Mobiler Service in Berlin-Kreuzberg und Neukölln auf Deutsch, Türkisch und Englisch; kein Kundenempfang an der Geschäftsanschrift.',
    url: `${SITE_URL}/`,
    telephone: SITE.phone.e164,
    faxNumber: SITE.fax.e164,
    email: SITE.email,
    image: `${SITE_URL}/images/asiye-duman.jpeg`,
    logo: `${SITE_URL}/morgen.png`,
    priceRange: `${SITE.hourlyRate} pro Stunde`,
    currenciesAccepted: 'EUR',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      postalCode: SITE.address.postalCode,
      addressLocality: SITE.address.city,
      addressRegion: 'Berlin',
      addressCountry: 'DE',
    },
    areaServed: areaServedSchema,
    knowsLanguage: SITE.languages.map((language) => language.code),
    founder: {
      '@type': 'Person',
      '@id': `${SITE_URL}/ueber-uns#asiye-duman`,
      name: SITE.founder,
      jobTitle: SITE.founderRole,
      worksFor: { '@id': BUSINESS_ID },
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: SITE.phone.e164,
        email: SITE.email,
        availableLanguage: ['German', 'Turkish', 'English'],
        areaServed: 'DE-BE',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: SITE.hours.days,
          opens: SITE.hours.opens,
          closes: SITE.hours.closes,
        },
      },
    ],
    identifier: [
      { '@type': 'PropertyValue', propertyID: 'Handelsregister', value: `${SITE.register.court}, ${SITE.register.number}` },
      { '@type': 'PropertyValue', propertyID: 'Institutionskennzeichen (IK)', value: SITE.ik },
    ],
    sameAs: [SITE.hilfelotseUrl],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Angebote zur Unterstützung im Alltag',
      itemListElement: [
        { name: 'Haushaltshilfe', url: `${SITE_URL}/haushaltshilfe-pflegegrad-berlin` },
        { name: 'Einkauf und Erledigungen', url: `${SITE_URL}/leistungen#einkauf` },
        { name: 'Begleitung zu Arztterminen', url: `${SITE_URL}/arztbegleitung-senioren-berlin` },
        { name: 'Alltagsorganisation', url: `${SITE_URL}/leistungen#alltag` },
        { name: 'Soziale Begleitung', url: `${SITE_URL}/soziale-begleitung-senioren-berlin` },
      ].map((service) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: service.name, url: service.url },
      })),
    },
  },
  {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: SITE.name,
    inLanguage: 'de-DE',
    publisher: { '@id': BUSINESS_ID },
  },
)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col bg-cream pb-[calc(3.5rem+env(safe-area-inset-bottom))] font-body text-lg leading-relaxed text-ink antialiased md:pb-0">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[100] focus:rounded-lg focus:bg-forest focus:px-5 focus:py-3 focus:text-white"
        >
          Zum Hauptinhalt springen
        </a>
        <JsonLd data={structuredData} />
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
