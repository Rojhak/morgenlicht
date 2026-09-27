import { DistrictPage } from '../components/sections/DistrictPage'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Haushaltshilfe Kreuzberg | Pflegekasse & Seniorenhilfe',
  description:
    'Haushaltshilfe und Alltagshilfe in Berlin-Kreuzberg für Senioren mit Pflegegrad: Reinigung, Einkauf, Begleitung. Abrechnung mit der Pflegekasse möglich.',
  path: '/berlin-kreuzberg',
})

export default function KreuzbergPage() {
  return (
    <DistrictPage
      content={{
        slug: 'berlin-kreuzberg',
        district: 'Kreuzberg',
        kicker: 'Haushaltshilfe direkt im Kiez',
        h1: 'Haushaltshilfe und Alltagshilfe in Berlin-Kreuzberg',
        intro:
          'Morgenlicht bietet anerkannte Haushaltshilfe, Seniorenhilfe und Alltagshilfe in Berlin-Kreuzberg. Ob Reinigung im Graefekiez, Einkaufsbegleitung am Maybachufer oder ein Spaziergang am Landwehrkanal: Wir unterstützen Sie persönlich ab Pflegegrad 1.',
        kiezParagraph:
          'Kreuzberg ist laut, lebendig und vielfältig – und für viele Seniorinnen und Senioren vor allem eines: ihr Zuhause seit Jahrzehnten. Wir kennen die kurzen Wege im Graefekiez, die Apotheken in der Bergmannstraße und die ruhigen Bänke am Landwehrkanal. So können Sie so lange wie möglich selbstbestimmt in Ihrer vertrauten Umgebung leben.',
        landmarks: [
          'Haushaltshilfe im Graefekiez, Wrangelkiez & Bergmannkiez',
          'Einkaufsbegleitung zum Wochenmarkt am Maybachufer',
          'Begleitung zum Urban-Krankenhaus und umliegenden Arztpraxen',
          'Behördengänge zum Bezirksamt Friedrichshain-Kreuzberg',
          'Spaziergänge entlang Landwehrkanal & Prinzessinnengarten',
          'Kulturbegleitung ins Tempodrom oder HAU',
        ],
        localPhrase:
          'Kreuzberg\'de yaşayan yaşlılar için Türkçe günlük yaşam desteği – mevcut bakım sigortası bütçesi üzerinden karşılanabilir.',
        neighboringDistricts: ['Neukölln'],
      }}
    />
  )
}
