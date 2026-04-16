import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum – Morgenlicht Alltagshilfe Berlin',
  description: 'Impressum und Anbieterkennzeichnung von Morgenlicht Alltagshilfe, Berlin.',
  alternates: { canonical: '/impressum' },
  robots: { index: false, follow: true },
}

export default function ImpressumLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
