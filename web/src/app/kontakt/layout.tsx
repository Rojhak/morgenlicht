import { serializeJsonLd } from '@/lib/security'
import { createPageMetadata } from '@/lib/seo'

const SITE_URL = 'https://www.morgenlicht-alltagshilfe.de'

export const metadata = createPageMetadata({
  title: 'Alltagshilfe Berlin: Rückruf anfragen | Morgenlicht',
  description:
    'Rückruf zur Alltagshilfe in Kreuzberg und Neukölln anfragen. Name und Telefon genügen; Beratung auf Deutsch, Türkisch oder Englisch.',
  path: '/kontakt',
})

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      name: 'Kontakt zu Morgenlicht Alltagshilfe Berlin',
      url: `${SITE_URL}/kontakt`,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Startseite', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Kontakt', item: `${SITE_URL}/kontakt` },
      ],
    },
  ],
}

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }} />
      {children}
    </>
  )
}
