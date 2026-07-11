import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ratgeber für Haushaltshilfe und Pflegekasse',
  description:
    'Ratgeber zu Haushaltshilfe, Alltagshilfe, Pflegegrad und Pflegekasse in Berlin – verständlich für Senioren und Angehörige.',
  alternates: { canonical: '/blog' },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
