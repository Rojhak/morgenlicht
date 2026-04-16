import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog: Pflege, Entlastungsbetrag & Alltag – Morgenlicht Berlin',
  description:
    'Ratgeber rund um Pflege, Pflegegrade, Entlastungsbetrag und Alltag in Berlin. Verständlich, aktuell und hilfreich – für Senioren und Angehörige.',
  alternates: { canonical: '/blog' },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
