import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Barrierefreiheit bei Morgenlicht Alltagshilfe Berlin',
  description:
    'Digitale Barrierefreiheit nach WCAG 2.1 AA bei Morgenlicht: Kontraste, Schriftgrößen, Tastaturbedienung und Screenreader-Unterstützung für alle Nutzerinnen und Nutzer.',
  alternates: { canonical: '/barrierefreiheit' },
}

export default function BarrierefreiheitLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
