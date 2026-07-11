import type { Metadata } from 'next'
import { DistrictPage } from '../components/sections/DistrictPage'

const SITE_URL = 'https://www.morgenlicht-alltagshilfe.de'

export const metadata: Metadata = {
  title: {
    absolute: 'Haushaltshilfe Neukölln | Pflegekasse & Seniorenhilfe',
  },
  description:
    'Haushaltshilfe in Berlin-Neukölln für Senioren und Menschen mit Pflegegrad. Anerkannte Alltagshilfe, Einkauf und Begleitung über die Pflegekasse.',
  alternates: { canonical: '/berlin-neukoelln' },
  openGraph: {
    title: 'Haushaltshilfe und Alltagshilfe in Berlin-Neukölln',
    description:
      'Anerkannte Haushaltshilfe, Einkaufshilfe und Begleitung in Neukölln. Finanzierung über den Entlastungsbetrag ab Pflegegrad 1 möglich.',
    url: `${SITE_URL}/berlin-neukoelln`,
  },
}

export default function NeukoellnPage() {
  return (
    <DistrictPage
      content={{
        slug: 'berlin-neukoelln',
        district: 'Neukölln',
        kicker: 'Haushaltshilfe in Neukölln',
        h1: 'Haushaltshilfe und Alltagshilfe in Berlin-Neukölln',
        intro:
          'Morgenlicht bietet anerkannte Haushaltshilfe, Seniorenhilfe und Alltagshilfe in Berlin-Neukölln. Vom Reuterkiez über den Richardplatz bis zur Gropiusstadt unterstützen wir bei Haushalt, Einkauf, Begleitung und Alltagsorganisation.',
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
          'Neukölln\'de yaşayan yaşlılar için Türkçe günlük yaşam desteği – mevcut bakım sigortası bütçesi üzerinden karşılanabilir.',
        neighboringDistricts: ['Kreuzberg', 'Mitte'],
      }}
    />
  )
}
