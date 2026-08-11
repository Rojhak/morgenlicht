import { serializeJsonLd } from '@/lib/security'
import { createPageMetadata } from '@/lib/seo'

const SITE_URL = 'https://www.morgenlicht-alltagshilfe.de'

export const metadata = createPageMetadata({
  title: 'Pflegegrad beantragen & nutzen | Morgenlicht',
  description:
    'Pflegegrad-Antrag, Begutachtung, Entscheidung und Leistungen verständlich erklärt – inklusive Entlastungsbetrag und Alltagshilfe.',
  path: '/pflegegrad-guide',
})

const schema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Pflegegrad-Ratgeber', item: `${SITE_URL}/pflegegrad-guide` },
  ],
}

export default function PflegegradLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }} />
      {children}
    </>
  )
}
