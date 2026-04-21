import type { Metadata } from 'next'
import { DistrictPage } from '../components/sections/DistrictPage'

const SITE_URL = 'https://www.morgenlicht-alltagshilfe.de'

export const metadata: Metadata = {
  title: 'Morgenlicht | Berlin-Mitte | Alltagsbegleitung & Haushaltshilfe',
  description: 'Wir unterstützen Senioren in Berlin-Mitte bei Haushalt & Alltag. 0€ Kosten für Sie im Rahmen des 131€-Pflegebudgets (ab Pflegegrad 1).',
  alternates: { canonical: '/berlin-mitte' },
  openGraph: {
    title: 'Morgenlicht | Berlin-Mitte | Alltagsbegleitung & Haushaltshilfe',
    description: 'Wir unterstützen Senioren in Berlin-Mitte bei Haushalt & Alltag. 0€ Kosten für Sie im Rahmen des 131€-Pflegebudgets (ab Pflegegrad 1).',
    url: `${SITE_URL}/berlin-mitte`,
  },
}

export default function MittePage() {
  return (
    <DistrictPage
      content={{
        slug: 'berlin-mitte',
        district: 'Mitte',
        kicker: 'Ihre Alltagshilfe in Mitte',
        h1: 'Alltagshilfe in Berlin-Mitte',
        intro:
          'Morgenlicht ist Ihre herzliche Alltagshilfe in Berlin-Mitte – vom Brunnenviertel über Moabit bis in den alten Stadtkern. Wir begleiten Sie durch Ihren Alltag mit Zeit, Respekt und einer festen Ansprechpartnerin.',
        kiezParagraph:
          'Berlin-Mitte verbindet das historische Zentrum mit den lebendigen Kiezen von Wedding und Moabit. Viele Menschen leben hier seit Jahrzehnten – oft allein, mit kleinen Renten und langen Wegen zum nächsten Supermarkt. Wir nehmen uns Zeit für genau diese Wege und für die Geschichten, die dahinter stehen.',
        landmarks: [
          'Haushaltshilfe im Brunnenviertel, Tiergarten & Moabit',
          'Einkaufsbegleitung auf der Müllerstraße und am Leopoldplatz',
          'Begleitung zur Charité – Campus Mitte & Virchow-Klinikum',
          'Behördengänge zum Rathaus Mitte',
          'Spaziergänge im Großen Tiergarten und entlang der Spree',
          'Türkisch- und englischsprachige Begleitung',
        ],
        localPhrase:
          'Berlin-Mitte\'de yaşayan yaşlılar için Türkçe günlük yaşam yardımı – bakım sigortası üzerinden %100 ücretsiz.',
        neighboringDistricts: ['Kreuzberg', 'Neukölln'],
      }}
    />
  )
}
