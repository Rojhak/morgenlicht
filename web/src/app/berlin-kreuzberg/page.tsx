import type { Metadata } from 'next'
import { DistrictPage } from '../components/sections/DistrictPage'

const SITE_URL = 'https://www.morgenlicht-alltagshilfe.de'

export const metadata: Metadata = {
  title: {
    absolute: 'Morgenlicht | Alltagshilfe Berlin-Kreuzberg | Haushaltshilfe für Senioren',
  },
  description:
    'Ihre herzliche Alltagshilfe in Berlin-Kreuzberg. Seniorenbetreuung & Haushaltshilfe ab Pflegegrad 1. 0€ Kosten über Ihr 131€-Pflegebudget.',
  alternates: { canonical: '/berlin-kreuzberg' },
  openGraph: {
    title: 'Morgenlicht | Alltagshilfe Berlin-Kreuzberg | Seniorenbetreuung',
    description:
      'Herzliche Alltagshilfe direkt im Kiez: Graefekiez, Bergmannstraße, Landwehrkanal. 0€ Kosten ab Pflegegrad 1 über Ihr 131€-Pflegebudget.',
    url: `${SITE_URL}/berlin-kreuzberg`,
  },
}

export default function KreuzbergPage() {
  return (
    <DistrictPage
      content={{
        slug: 'berlin-kreuzberg',
        district: 'Kreuzberg',
        kicker: 'Ihre Alltagshilfe im Kiez',
        h1: 'Alltagshilfe in Berlin-Kreuzberg',
        intro:
          'Morgenlicht ist Ihre herzliche Alltagshilfe direkt in Berlin-Kreuzberg. Ob Haushaltshilfe rund um den Graefekiez, Einkaufsbegleitung am Maybachufer oder ein Spaziergang am Landwehrkanal – wir sind in Ihrem Kiez zuhause.',
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
          'Kreuzberg\'de yaşayan yaşlılar için Türkçe günlük yaşam yardımı – bakım sigortası üzerinden %100 ücretsiz.',
        neighboringDistricts: ['Neukölln', 'Mitte'],
      }}
    />
  )
}
