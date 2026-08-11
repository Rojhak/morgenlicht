import { serializeJsonLd } from '@/lib/security'
import { createPageMetadata } from '@/lib/seo'

const SITE_URL = 'https://www.morgenlicht-alltagshilfe.de'

export const metadata = createPageMetadata({
  title: '131 € Entlastungsbetrag & Kosten | Morgenlicht',
  description:
    '35,50 € pro Stunde, bis zu 131 € Entlastungsbetrag und mögliche Direktabrechnung: Kosten der Alltagshilfe verständlich erklärt.',
  path: '/kosten',
})

const schema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Kosten', item: `${SITE_URL}/kosten` },
  ],
}

export default function KostenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }} />
      {children}
    </>
  )
}
