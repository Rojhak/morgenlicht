import { serializeJsonLd } from '@/lib/security'
import { createPageMetadata } from '@/lib/seo'

const SITE_URL = 'https://www.morgenlicht-alltagshilfe.de'

export const metadata = createPageMetadata({
  title: 'Fragen zu Alltagshilfe & Pflegekasse | Morgenlicht',
  description:
    'Antworten zu Pflegegrad, 131 € Entlastungsbetrag, Kosten, Abrechnung und Ablauf der Alltagshilfe in Berlin.',
  path: '/fragen',
})

const schema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Fragen', item: `${SITE_URL}/fragen` },
  ],
}

export default function FragenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }} />
      {children}
    </>
  )
}
