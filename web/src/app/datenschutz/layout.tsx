import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutz – Morgenlicht Alltagshilfe Berlin',
  description: 'Datenschutzerklärung von Morgenlicht Alltagshilfe Berlin gemäß DSGVO.',
  alternates: { canonical: '/datenschutz' },
  robots: { index: false, follow: true },
}

export default function DatenschutzLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
