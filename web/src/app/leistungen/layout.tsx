import { serializeJsonLd } from '@/lib/security'
import { createPageMetadata } from '@/lib/seo'

const SITE_URL = 'https://www.morgenlicht-alltagshilfe.de'

export const metadata = createPageMetadata({
  title: 'Alltagshilfe in Berlin: Leistungen | Morgenlicht',
  description:
    'Haushaltshilfe, Einkauf, Arztbegleitung, Alltagsorganisation und soziale Begleitung in Berlin-Kreuzberg und Neukölln.',
  path: '/leistungen',
})

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      serviceType: 'Alltagshilfe und Haushaltshilfe für Senioren',
      provider: { '@id': `${SITE_URL}/#business` },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Berlin-Kreuzberg' },
        { '@type': 'AdministrativeArea', name: 'Berlin-Neukölln' },
      ],
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
