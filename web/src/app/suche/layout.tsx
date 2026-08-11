import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Suche nach Alltagshilfe in Berlin',
  description: 'Durchsuchen Sie die Angebote von Morgenlicht Alltagshilfe in Berlin.',
  alternates: { canonical: '/suche' },
  robots: { index: false, follow: true },
}

export default function SucheLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
