import type { Metadata } from 'next'
import { serializeJsonLd } from '@/lib/security'

const SITE_URL = 'https://www.morgenlicht-alltagshilfe.de'

export const metadata: Metadata = {
  title: 'Kontakt: Kostenlose Beratung zur Alltagshilfe Berlin | ☎ 030 235 930 28',
  description:
    'Jetzt unverbindlich anfragen: Kostenlose Beratung zu Alltagshilfe, Haushaltshilfe und Entlastungsbetrag in Berlin. Auf Deutsch, Türkisch und Englisch. Mo–Fr 09:00–16:00 Uhr.',
  alternates: { canonical: '/kontakt' },
  openGraph: {
    title: 'Kontakt – Morgenlicht Alltagshilfe Berlin',
    description: 'Kostenlose, unverbindliche Beratung auf Deutsch, Türkisch und Englisch. ☎ 030 235 930 28.',
    url: `${SITE_URL}/kontakt`,
  },
}

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
