import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Ratgeber zu Pflegegrad & Alltagshilfe | Morgenlicht',
  description:
    'Ratgeber zu Haushaltshilfe, Alltagshilfe, Pflegegrad und Pflegekasse in Berlin – verständlich für Senioren und Angehörige.',
  path: '/blog',
})

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
