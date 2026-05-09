import type { Metadata } from 'next'
import { serializeJsonLd } from '@/lib/security'

const SITE_URL = 'https://www.morgenlicht-alltagshilfe.de'

export const metadata: Metadata = {
  title: 'Häufige Fragen zur Alltagshilfe: Kosten, Pflegegrad & Ablauf',
  description:
    'Antworten auf Ihre Fragen: Was kostet die Alltagshilfe? Wie funktioniert der 131 € Entlastungsbetrag? In welchen Bezirken ist Morgenlicht tätig? Alles Wichtige auf einen Blick.',
  alternates: { canonical: '/fragen' },
  openGraph: {
    title: 'FAQ – Morgenlicht Alltagshilfe Berlin',
    description: 'Alle Antworten zu Kosten, Pflegegrad, Entlastungsbetrag und Ablauf der Alltagshilfe in Berlin.',
    url: `${SITE_URL}/fragen`,
  },
}

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
