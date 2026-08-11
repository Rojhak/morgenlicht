import { serializeJsonLd } from '@/lib/security'
import { createPageMetadata } from '@/lib/seo'

const SITE_URL = 'https://www.morgenlicht-alltagshilfe.de'

export const metadata = createPageMetadata({
  title: 'Über Morgenlicht Alltagshilfe Berlin',
  description:
    'Morgenlicht und Ansprechpartnerin Asiye Duman kennenlernen: anerkannte Alltagshilfe in Kreuzberg und Neukölln, mehrsprachig und persönlich.',
  path: '/ueber-uns',
})

const schema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Über uns', item: `${SITE_URL}/ueber-uns` },
  ],
}

export default function UeberUnsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }} />
      {children}
    </>
  )
}
