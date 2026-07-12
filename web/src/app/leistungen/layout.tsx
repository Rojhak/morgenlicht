import type { Metadata } from 'next'
import { serializeJsonLd } from '@/lib/security'

const SITE_URL = 'https://www.morgenlicht-alltagshilfe.de'

export const metadata: Metadata = {
  title: 'Leistungen: Haushaltshilfe, Einkauf, Begleitung & Alltag in Berlin',
  description:
    '5 Leistungsbereiche für Senioren: Haushaltshilfe, Einkauf, Begleitung zu Ärzten, Alltagsorganisation und Freizeitbegleitung in Berlin-Kreuzberg und Neukölln. Finanzierung über die Pflegekasse ab Pflegegrad 1 möglich.',
  alternates: { canonical: '/leistungen' },
  openGraph: {
    title: 'Leistungen der Morgenlicht Alltagshilfe Berlin',
    description: 'Haushaltshilfe, Einkauf, Begleitung, Alltagsstruktur und Freizeit in Kreuzberg und Neukölln – persönlich und verlässlich.',
    url: `${SITE_URL}/leistungen`,
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      serviceType: 'Alltagshilfe und Haushaltshilfe für Senioren',
      provider: { '@id': `${SITE_URL}/#business` },
      areaServed: 'Berlin',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: `${SITE_URL}/kontakt`,
        servicePhone: { '@type': 'ContactPoint', telephone: '+493023593028' },
      },
      offers: {
        '@type': 'Offer',
        description: 'Anerkannte Unterstützung im Alltag. Finanzierung über das verfügbare Pflegekassen-Budget ab Pflegegrad 1 möglich.',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Startseite', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Leistungen', item: `${SITE_URL}/leistungen` },
      ],
    },
  ],
}

export default function LeistungenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }} />
      {children}
    </>
  )
}
