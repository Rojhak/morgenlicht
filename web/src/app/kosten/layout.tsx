import type { Metadata } from 'next'

const SITE_URL = 'https://www.morgenlicht-alltagshilfe.de'

export const metadata: Metadata = {
  title: 'Kosten & Pflegekasse: 131 € Entlastungsbetrag | 0 € für Sie',
  description:
    'Transparente Preise: 35,50 €/Std., aber für Sie 0 € dank Entlastungsbetrag (131 €/Monat) nach § 45b SGB XI. Ab Pflegegrad 2 bis zu 10 Std./Monat möglich. Wir rechnen direkt mit Ihrer Pflegekasse ab.',
  alternates: { canonical: '/kosten' },
  openGraph: {
    title: 'Kosten & 131 € Entlastungsbetrag – Morgenlicht Alltagshilfe Berlin',
    description: 'Für Sie 0 € über den Entlastungsbetrag. Ab Pflegegrad 1 voll erstattet durch die Pflegekasse.',
    url: `${SITE_URL}/kosten`,
  },
}

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {children}
    </>
  )
}
