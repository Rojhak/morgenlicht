import type { Metadata } from 'next'
import Link from 'next/link'
import { SeoBlogArticle } from '../../components/sections/SeoBlogArticle'

const title = 'Seniorenhilfe zu Hause in Berlin: Welche Unterstützung passt?'
const description =
  'Seniorenhilfe zu Hause in Berlin: praktische Unterstützung bei Haushalt, Einkauf, Begleitung und Alltagsorganisation für ältere Menschen und Angehörige.'

export const metadata: Metadata = {
  title: { absolute: 'Seniorenhilfe zu Hause in Berlin | Alltag & Haushalt' },
  description,
  alternates: { canonical: '/blog/seniorenhilfe-zuhause-berlin' },
  openGraph: {
    title,
    description,
    type: 'article',
    locale: 'de_DE',
    publishedTime: '2026-07-11',
    modifiedTime: '2026-07-11',
    url: '/blog/seniorenhilfe-zuhause-berlin',
    images: [{ url: '/images/hero_active_senior.jpg', alt: 'Seniorin lebt mit Unterstützung selbstständig zu Hause' }],
  },
}

const faqItems = [
  {
    question: 'Was versteht man unter Seniorenhilfe zu Hause?',
    answer:
      'Seniorenhilfe ist ein Sammelbegriff für praktische und soziale Unterstützung älterer Menschen. Dazu können Haushalt, Einkauf, Begleitung, Organisation und gemeinsame Aktivitäten gehören.',
  },
  {
    question: 'Braucht man für Seniorenhilfe einen Pflegegrad?',
    answer:
      'Nein, Hilfe kann auch privat vereinbart werden. Für eine Finanzierung über den Entlastungsbetrag ist jedoch ein anerkannter Pflegegrad erforderlich.',
  },
  {
    question: 'Kann Seniorenhilfe Angehörige entlasten?',
    answer:
      'Ja. Regelmäßige Unterstützung übernimmt planbare Aufgaben und gibt Angehörigen mehr Sicherheit, besonders wenn sie arbeiten oder weiter entfernt wohnen.',
  },
  {
    question: 'Gibt es mehrsprachige Seniorenhilfe in Berlin?',
    answer:
      'Morgenlicht berät und unterstützt auf Deutsch, Türkisch und Englisch. Sprache und kulturelle Gewohnheiten werden bei der Planung berücksichtigt.',
  },
]

export default function SeniorenhilfeZuhauseBerlinPage() {
  return (
    <SeoBlogArticle
      slug="seniorenhilfe-zuhause-berlin"
      title={title}
      description={description}
      eyebrow="Ratgeber für ältere Menschen und Angehörige"
      datePublished="2026-07-11"
      dateModified="2026-07-11"
      dateLabel="11. Juli 2026"
      readingTime="Lesedauer: ca. 6 Minuten"
      imageSrc="/images/hero_active_senior.jpg"
      imageAlt="Ältere Frau lebt mit Seniorenhilfe selbstständig zu Hause in Berlin"
      quickFacts={[
        'Hilfe ist auch ohne Pflegegrad privat möglich',
        'Pflegegrad eröffnet Finanzierungsmöglichkeiten',
        'Unterstützung wird nach Bedarf kombiniert',
        'Beratung auf Deutsch, Türkisch und Englisch',
      ]}
      faqItems={faqItems}
      relatedLinks={[
        { href: '/leistungen', label: 'Unterstützung im Alltag' },
        { href: '/pflegegrad-guide', label: 'Pflegegrad-Guide' },
        { href: '/blog/alltagshilfe-oder-haushaltshilfe-unterschied', label: 'Alltagshilfe oder Haushaltshilfe?' },
        { href: '/kontakt', label: 'Persönliche Beratung' },
      ]}
      sources={[
        { href: 'https://gesund.bund.de/pflege-zu-hause', label: 'gesund.bund.de: Pflege zu Hause' },
        { href: 'https://www.berlin.de/sen/pflege/pflege-und-rehabilitation/pflege-zu-hause/angebote-zur-unterstuetzung-im-alltag/', label: 'Berlin.de: Unterstützung im Alltag' },
      ]}
    >
      <p>
        Viele ältere Menschen möchten in ihrer eigenen Wohnung bleiben, auch wenn einzelne Aufgaben schwerer werden. <strong>Seniorenhilfe zu Hause in Berlin</strong> kann genau dort ansetzen: nicht erst, wenn der Alltag gar nicht mehr funktioniert, sondern frühzeitig und passend zum persönlichen Bedarf.
      </p>

      <h2>Seniorenhilfe ist mehr als Unterstützung beim Putzen</h2>
      <p>
        Der Begriff Seniorenhilfe wird unterschiedlich verwendet. Gemeint ist meist eine Kombination aus praktischer Hilfe, Begleitung und persönlicher Unterstützung. Welche Aufgaben sinnvoll sind, hängt davon ab, was eine Person noch selbstständig erledigen kann und wobei Sicherheit fehlt.
      </p>
      <ul>
        <li>Haushalt und Wäsche zuverlässig organisieren</li>
        <li>Einkäufe, Apotheke und kleine Besorgungen erledigen</li>
        <li>zu Arztterminen, Behörden oder Freizeitangeboten begleiten</li>
        <li>bei Post, Terminen und Alltagsstruktur unterstützen</li>
        <li>Gesellschaft leisten, spazieren gehen und soziale Kontakte fördern</li>
      </ul>

      <h2>Woran erkennt man, dass Unterstützung sinnvoll wird?</h2>
      <p>
        Häufig verändert sich der Alltag schrittweise. Die Wohnung wird seltener gereinigt, schwere Einkäufe werden vermieden oder Termine werden abgesagt, weil der Weg zu anstrengend ist. Auch Rückzug und Einsamkeit können Hinweise sein.
      </p>
      <ul>
        <li>Wäsche, Reinigung oder Post bleiben wiederholt liegen.</li>
        <li>Lebensmittel fehlen oder Einkäufe werden körperlich zu belastend.</li>
        <li>Außer-Haus-Termine werden aus Unsicherheit vermieden.</li>
        <li>Angehörige können die regelmäßige Hilfe nicht mehr allein leisten.</li>
        <li>Die Person wünscht mehr Kontakt und Begleitung.</li>
      </ul>

      <h2>Welche Hilfe passt zu Hause?</h2>
      <p>
        Gute Seniorenhilfe beginnt mit einer kleinen Bestandsaufnahme. Wird hauptsächlich Hilfe in der Wohnung gebraucht, liegt der Schwerpunkt auf Haushaltshilfe. Geht es zusätzlich um Termine, Einkäufe und soziale Teilhabe, ist eine umfassende Alltagshilfe passender. Der Beitrag <Link href="/blog/alltagshilfe-oder-haushaltshilfe-unterschied">Alltagshilfe oder Haushaltshilfe</Link> erklärt die Unterschiede genauer.
      </p>

      <h2>Wie Angehörige entlastet werden</h2>
      <p>
        Angehörige übernehmen oft viele kleine Aufgaben, die zusammen sehr viel Zeit beanspruchen. Eine planbare Unterstützung kann feste Termine übernehmen und früh melden, wenn sich der Bedarf verändert. Das ersetzt die Familie nicht, schafft aber Raum für gemeinsame Zeit ohne ständigen Organisationsdruck.
      </p>

      <h2>Finanzierung mit und ohne Pflegegrad</h2>
      <p>
        Ohne Pflegegrad kann Seniorenhilfe privat vereinbart werden. Besteht ein Pflegegrad, kommen Leistungen der Pflegeversicherung infrage. Menschen mit Pflegegrad 1 bis 5 können bei häuslicher Pflege den Entlastungsbetrag für anerkannte Unterstützung im Alltag nutzen.
      </p>
      <p>
        Morgenlicht ist in Berlin als Angebot nach § 45a SGB XI anerkannt. Vor Beginn wird geklärt, welche Leistungen gewünscht sind, welches Budget verfügbar ist und ob eine <Link href="/blog/direktabrechnung-pflegekasse-ohne-vorkasse">Direktabrechnung mit der Pflegekasse</Link> möglich ist.
      </p>

      <h2>Seniorenhilfe in Kreuzberg und Neukölln</h2>
      <p>
        Morgenlicht unterstützt ältere und pflegebedürftige Menschen insbesondere in <Link href="/berlin-kreuzberg">Berlin-Kreuzberg</Link> und <Link href="/berlin-neukoelln">Berlin-Neukölln</Link>. Beratung und Begleitung sind auf Deutsch, Türkisch und Englisch möglich. Ob aktuell ein Einsatz an Ihrer Adresse möglich ist, wird im persönlichen Gespräch geprüft.
      </p>

      <h2>Ein guter Start: klein, konkret und regelmäßig</h2>
      <p>
        Oft ist es sinnvoll, mit den zwei oder drei wichtigsten Aufgaben zu beginnen. Ein fester Termin für Haushalt, Einkauf oder Begleitung bringt schnell Entlastung. Danach lässt sich gemeinsam prüfen, ob die Unterstützung ausreicht oder angepasst werden sollte.
      </p>
    </SeoBlogArticle>
  )
}
