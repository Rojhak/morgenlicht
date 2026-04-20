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

const SITE_URL = 'https://www.morgenlicht-alltagshilfe.de'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Morgenlicht | Alltagsbegleitung & Haushaltshilfe Senioren in Berlin',
    template: '%s | Morgenlicht Alltagshilfe Berlin',
  },
  description: 'Wir unterstützen Senioren in Kreuzberg, Neukölln & Mitte bei Haushalt & Alltag. 100 % Kostenübernahme über die 131 € der Pflegekasse ab Pflegegrad 1.',
  keywords: [
    'Alltagshilfe Berlin', 'Haushaltshilfe Berlin', 'Haushaltshilfe Pflegekasse Berlin',
    'Seniorenbetreuung Berlin', 'Haushaltshilfe Kreuzberg', 'Haushaltshilfe Neukölln',
    'Alltagshilfe Mitte', 'Alltagshilfe Neukölln', 'Alltagshilfe Kreuzberg',
    'Entlastungsbetrag Berlin', '131 Euro Entlastungsbetrag', '125 Euro Haushaltshilfe',
    'Pflegegrad 1 Haushaltshilfe', 'Pflegegrad Kostenübernahme', '§ 45a SGB XI Berlin',
    'Angebote zur Unterstützung im Alltag Berlin', 'anerkannte Alltagshilfe Berlin',
    'Alltagshilfe türkisch Berlin', 'Haushaltshilfe türkisch Berlin',
    'türkischsprachige Seniorenbetreuung', 'interkulturelle Alltagshilfe Berlin',
    'Yaşlı bakım Berlin', 'Ev yardımı Berlin', 'Türkçe bakım danışmanlığı Berlin',
    'Entlastung pflegende Angehörige', 'Betreuungsdienst Berlin',
    'Hauswirtschaftshilfe Berlin', 'Seniorenhilfe Berlin', 'Einkaufshilfe Senioren Berlin',
    'Begleitung Arzttermin Berlin', 'Demenzbetreuung Berlin',
    'würdevolle Seniorenbetreuung Berlin', 'persönliche Alltagshilfe Berlin',
    'Verhinderungspflege Berlin', 'Pflegesachleistung umwandeln',
    'Morgenlicht Alltagshilfe',
  ],
  authors: [{ name: 'Morgenlicht Alltagshilfe' }],
  alternates: {
    canonical: '/',
    languages: {
      'de-DE': SITE_URL,
      'x-default': SITE_URL,
    },
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
    title: 'Morgenlicht | Alltagsbegleitung & Haushaltshilfe Senioren in Berlin',
    description: 'Wir unterstützen Senioren in Kreuzberg, Neukölln & Mitte bei Haushalt & Alltag. 100 % Kostenübernahme über die 131 € der Pflegekasse ab Pflegegrad 1.',
    type: 'website',
    locale: 'de_DE',
    url: `${SITE_URL}/`,
    siteName: 'Morgenlicht Alltagshilfe',
    images: [
      {
        url: '/images/hero_helping_hand.png',
        width: 1200,
        height: 630,
        alt: 'Morgenlicht Alltagshilfe Berlin – Alltagshelferin hält die Hand einer Seniorin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morgenlicht | Alltagsbegleitung & Haushaltshilfe Senioren in Berlin',
    description: 'Wir unterstützen Senioren in Kreuzberg, Neukölln & Mitte bei Haushalt & Alltag. 100 % Kostenübernahme über die 131 € der Pflegekasse ab Pflegegrad 1.',
    images: ['/images/hero_helping_hand.png'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#business`,
      name: 'Morgenlicht Alltagshilfe Berlin',
      alternateName: ['Morgenlicht Alltagshilfe', 'Morgenlicht Berlin'],
      description:
        'Staatlich anerkannte Alltagshilfe für Senioren in Berlin Kreuzberg, Neukölln und Mitte. Haushaltshilfe, Einkaufshilfe, Begleitung und Alltagsbetreuung – 100 % kostenlos über den Entlastungsbetrag (131 €/Monat) ab Pflegegrad 1. Beratung auf Deutsch, Türkisch und Englisch.',
      url: SITE_URL,
      telephone: '+493023593028',
      email: 'info@morgenlicht-alltagshilfe.de',
      image: `${SITE_URL}/images/hero_helping_hand.png`,
      logo: `${SITE_URL}/trans_logo.svg`,
      priceRange: '0€ über Pflegekasse · 35,50€/Std. privat',
      slogan: 'Herzlich. Würdevoll. Verlässlich.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Berlin',
        addressRegion: 'Berlin',
        addressCountry: 'DE',
      },
      areaServed: [
        { '@type': 'City', name: 'Berlin' },
        { '@type': 'AdministrativeArea', name: 'Berlin-Kreuzberg' },
        { '@type': 'AdministrativeArea', name: 'Berlin-Neukölln' },
        { '@type': 'AdministrativeArea', name: 'Berlin-Mitte' },
      ],
      knowsLanguage: ['de', 'tr', 'en'],
      availableLanguage: ['German', 'Turkish', 'English'],
      openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '16:00',
      }],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Alltagshilfe-Leistungen',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Haushaltshilfe für Senioren',
              description: 'Zuverlässige Reinigung, Wäschepflege und Haushaltsführung für Senioren in Berlin.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Einkaufshilfe & Erledigungen',
              description: 'Wocheneinkauf, Apothekengang, Behördenbesuch – wir erledigen alles.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Begleitung & Mobilität',
              description: 'Sichere Begleitung zu Ärzten, Behörden und Freizeitterminen im Kiez.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Alltag & Struktur',
              description: 'Hilfe bei Post, Terminen, Telefonaten und digitaler Teilhabe.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Soziale Teilhabe & Freizeitbegleitung',
              description: 'Gemeinsame Spaziergänge, Kulturbegleitung, Gesellschaft gegen Einsamkeit.',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Morgenlicht Alltagshilfe Berlin',
      inLanguage: 'de-DE',
      publisher: { '@id': `${SITE_URL}/#business` },
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Was ist Morgenlicht Alltagshilfe?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Morgenlicht ist Ihre herzliche und zuverlässige Alltagshilfe in Berlin. Wir helfen Senioren und Pflegebedürftigen dabei, so lange und selbstbestimmt wie möglich im eigenen Zuhause zu leben. Als staatlich anerkannter Anbieter nach § 45a SGB XI rechnen wir direkt mit der Pflegekasse ab.',
          },
        },
        {
          '@type': 'Question',
          name: 'Was kostet die Alltagshilfe von Morgenlicht?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ab Pflegegrad 1 ist unsere Hilfe für Sie komplett kostenlos. Sie nutzen Ihren monatlichen Entlastungsbetrag von 131 € – wir rechnen direkt mit Ihrer Pflegekasse ab. Ohne Pflegegrad beträgt unser Stundensatz 35,50 €.',
          },
        },
        {
          '@type': 'Question',
          name: 'In welchen Sprachen bietet Morgenlicht Beratung an?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Wir beraten und unterstützen Sie auf Deutsch, Türkisch und Englisch. Interkulturelle Sensibilität ist uns besonders wichtig.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wird mein Pflegegeld durch den Entlastungsbetrag gekürzt?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nein. Der Entlastungsbetrag von 131 € monatlich ist eine zusätzliche Leistung. Ihr reguläres Pflegegeld bleibt vollständig unangetastet.',
          },
        },
        {
          '@type': 'Question',
          name: 'Gibt es neben den 131 € noch weitere Budgets?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja, ab Pflegegrad 2 können Sie bis zu 40 % Ihrer ungenutzten Pflegesachleistungen für unsere Unterstützung umwandeln. So stehen Ihnen bis zu 10 Stunden Hilfe pro Monat zur Verfügung.',
          },
        },
        {
          '@type': 'Question',
          name: 'In welchen Berliner Bezirken ist Morgenlicht tätig?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Unser Schwerpunkt liegt auf Berlin-Kreuzberg, Neukölln und Mitte. Wir prüfen gerne, ob wir auch in angrenzenden Bezirken für Sie da sein können.',
          },
        },
        {
          '@type': 'Question',
          name: 'Muss ich in Vorkasse gehen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nein. Wir erledigen den gesamten Papierkram und rechnen direkt mit Ihrer Pflegekasse ab. Für Sie entstehen keine Kosten.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wie starte ich mit Morgenlicht?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In 3 Schritten: 1. Kurzes Telefonat oder Nachricht an uns. 2. Kennenlerngespräch vor Ort oder per Telefon. 3. Wir kümmern uns um alles Weitere und Sie genießen die Entlastung.',
          },
        },
      ],
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
      <head>
        <link rel="alternate" hrefLang="de" href={SITE_URL} />
        <link rel="alternate" hrefLang="x-default" href={SITE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
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
