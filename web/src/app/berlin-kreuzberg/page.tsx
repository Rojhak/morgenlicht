import type { Metadata } from 'next'
import { DistrictPage } from '../components/sections/DistrictPage'

const SITE_URL = 'https://www.morgenlicht-alltagshilfe.de'

export const metadata: Metadata = {
  title: {
    absolute: 'Haushaltshilfe Kreuzberg | Pflegekasse & Seniorenhilfe',
  },
  description:
    'Haushaltshilfe in Berlin-Kreuzberg für Senioren und Menschen mit Pflegegrad. Anerkannte Alltagshilfe, Einkauf und Begleitung über die Pflegekasse.',
  alternates: { canonical: '/berlin-kreuzberg' },
  openGraph: {
    title: 'Haushaltshilfe und Alltagshilfe in Berlin-Kreuzberg',
    description:
      'Anerkannte Haushaltshilfe, Einkaufshilfe und Begleitung in Kreuzberg. Finanzierung über den Entlastungsbetrag ab Pflegegrad 1 möglich.',
    url: `${SITE_URL}/berlin-kreuzberg`,
  },
}

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
        neighboringDistricts: ['Neukölln', 'Mitte'],
      }}
    />
  )
}
