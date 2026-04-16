import type { Metadata } from 'next'

const SITE_URL = 'https://www.morgenlicht-alltagshilfe.de'

export const metadata: Metadata = {
  title: 'Pflegegrad-Ratgeber Berlin: Antrag, Einstufung & Leistungen 2026',
  description:
    'Pflegegrad verstehen, beantragen und nutzen: So bekommen Sie Pflegegrad 1–5, was der MDK prüft und welche Leistungen Ihnen in Berlin zustehen. Schritt-für-Schritt erklärt.',
  alternates: { canonical: '/pflegegrad-guide' },
  openGraph: {
    title: 'Pflegegrad-Ratgeber – Morgenlicht Berlin',
    description: 'Alles zu Pflegegrad-Antrag, Einstufung, MDK-Begutachtung und Leistungen in Berlin.',
    url: `${SITE_URL}/pflegegrad-guide`,
  },
}

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {children}
    </>
  )
}
