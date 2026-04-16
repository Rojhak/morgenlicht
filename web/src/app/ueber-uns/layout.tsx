import type { Metadata } from 'next'

const SITE_URL = 'https://www.morgenlicht-alltagshilfe.de'

export const metadata: Metadata = {
  title: 'Über Morgenlicht: Interkulturelle Alltagshilfe Berlin | § 45a SGB XI',
  description:
    'Morgenlicht ist Ihre herzliche Alltagshilfe in Berlin-Kreuzberg. Anerkannt nach § 45a SGB XI, interkulturell, mehrsprachig (Deutsch, Türkisch, Englisch). Ihre Ansprechpartnerin: Asiye Duman.',
  alternates: { canonical: '/ueber-uns' },
  openGraph: {
    title: 'Über Morgenlicht – Herzliche Alltagshilfe in Berlin',
    description: 'Eine feste Ansprechpartnerin, interkulturell sensibel, mehrsprachig. Lernen Sie das Team hinter Morgenlicht kennen.',
    url: `${SITE_URL}/ueber-uns`,
  },
}

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {children}
    </>
  )
}
