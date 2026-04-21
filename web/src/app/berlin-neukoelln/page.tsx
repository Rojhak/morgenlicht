import type { Metadata } from 'next'
import { DistrictPage } from '../components/sections/DistrictPage'

const SITE_URL = 'https://www.morgenlicht-alltagshilfe.de'

export const metadata: Metadata = {
  title: 'Morgenlicht | Berlin-Neukölln | Alltagsbegleitung & Haushaltshilfe',
  description: 'Wir unterstützen Senioren in Berlin-Neukölln bei Haushalt & Alltag. 0€ Kosten für Sie im Rahmen des 131€-Pflegebudgets (ab Pflegegrad 1).',
  alternates: { canonical: '/berlin-neukoelln' },
  openGraph: {
    title: 'Morgenlicht | Berlin-Neukölln | Alltagsbegleitung & Haushaltshilfe',
    description: 'Wir unterstützen Senioren in Berlin-Neukölln bei Haushalt & Alltag. 0€ Kosten für Sie im Rahmen des 131€-Pflegebudgets (ab Pflegegrad 1).',
    url: `${SITE_URL}/berlin-neukoelln`,
  },
}

export default function NeukoellnPage() {
  return (
    <DistrictPage
      content={{
        slug: 'berlin-neukoelln',
        district: 'Neukölln',
        kicker: 'Ihre Alltagshilfe in Neukölln',
        h1: 'Alltagshilfe in Berlin-Neukölln',
        intro:
          'Morgenlicht unterstützt Seniorinnen und Senioren in ganz Neukölln – vom Reuterkiez über den Richardplatz bis hinauf in die Gropiusstadt. Wir nehmen uns Zeit, hören zu und helfen herzlich und verlässlich im Alltag.',
        kiezParagraph:
          'Neukölln hat viele Gesichter: die gewachsene Nachbarschaft in Rixdorf, das bunte Leben rund um die Hermannstraße, die ruhigen Gartenkolonien und die großen Wohnanlagen der Gropiusstadt. Gerade in einem so vielfältigen Bezirk ist interkulturelle Sensibilität kein Zusatz, sondern Grundvoraussetzung – und genau dafür steht Morgenlicht.',
        landmarks: [
          'Haushaltshilfe im Schillerkiez, Reuterkiez & Richardplatz',
          'Einkaufsbegleitung zur Karl-Marx-Straße und Hermannstraße',
          'Begleitung zum Vivantes Klinikum Neukölln',
          'Behördengänge zum Rathaus Neukölln',
          'Spaziergänge im Körnerpark und Britzer Garten',
          'Türkischsprachige Betreuung für unsere Nachbarschaft',
        ],
        localPhrase:
          'Neukölln\'de yaşayan yaşlılar için Türkçe günlük yaşam yardımı – bakım sigortası üzerinden %100 ücretsiz.',
        neighboringDistricts: ['Kreuzberg', 'Mitte'],
      }}
    />
  )
}
