import type { Metadata } from 'next'
import Link from 'next/link'
import { SeoBlogArticle } from '../../components/sections/SeoBlogArticle'

const title = 'Alltagshilfe oder Haushaltshilfe: Was ist der Unterschied?'
const description =
  'Alltagshilfe, Haushaltshilfe oder Pflegedienst? Wir erklären die Unterschiede, typische Aufgaben und die Abrechnung über die Pflegekasse.'

export const metadata: Metadata = {
  title: { absolute: 'Alltagshilfe oder Haushaltshilfe? Unterschiede erklärt' },
  description,
  alternates: { canonical: '/blog/alltagshilfe-oder-haushaltshilfe-unterschied' },
  openGraph: {
    title,
    description,
    type: 'article',
    locale: 'de_DE',
    publishedTime: '2026-07-11',
    modifiedTime: '2026-07-11',
    url: '/blog/alltagshilfe-oder-haushaltshilfe-unterschied',
    images: [{ url: '/images/hero_helping_hand.jpg', alt: 'Alltagshilfe unterstützt eine ältere Person zu Hause' }],
  },
}

const faqItems = [
  {
    question: 'Ist Alltagshilfe dasselbe wie Haushaltshilfe?',
    answer:
      'Nicht ganz. Haushaltshilfe konzentriert sich auf Aufgaben in der Wohnung. Alltagshilfe kann zusätzlich Einkauf, Begleitung, Organisation und soziale Teilhabe umfassen.',
  },
  {
    question: 'Übernimmt eine Alltagshilfe medizinische Pflege?',
    answer:
      'Nein. Spritzen, Verbandswechsel und andere medizinische Behandlungspflege gehören in die Hände entsprechend qualifizierter Pflegefachkräfte beziehungsweise eines Pflegedienstes.',
  },
  {
    question: 'Kann Haushaltshilfe über den Entlastungsbetrag bezahlt werden?',
    answer:
      'Ja, wenn die Hilfe als anerkanntes Angebot zur Unterstützung im Alltag erbracht wird und die Voraussetzungen der Pflegekasse erfüllt sind.',
  },
  {
    question: 'Welche Hilfe passt bei Einsamkeit oder Unsicherheit außer Haus?',
    answer:
      'Dann ist eine umfassendere Alltagshilfe oft passender, weil sie neben Haushalt auch Gespräche, Spaziergänge und Begleitung zu Terminen einschließen kann.',
  },
]

export default function AlltagshilfeOderHaushaltshilfePage() {
  return (
    <SeoBlogArticle
      slug="alltagshilfe-oder-haushaltshilfe-unterschied"
      title={title}
      description={description}
      eyebrow="Begriffe einfach erklärt"
      datePublished="2026-07-11"
      dateModified="2026-07-11"
      dateLabel="11. Juli 2026"
      readingTime="Lesedauer: ca. 6 Minuten"
      imageSrc="/images/hero_helping_hand.jpg"
      imageAlt="Alltagshilfe unterstützt eine Seniorin zu Hause"
      quickFacts={[
        'Haushaltshilfe: Schwerpunkt Wohnung und Wäsche',
        'Alltagshilfe: zusätzlich Begleitung und Organisation',
        'Pflegedienst: pflegerische und medizinische Aufgaben',
        'Pflegekasse nur bei erfüllten Voraussetzungen',
      ]}
      faqItems={faqItems}
      relatedLinks={[
        { href: '/leistungen', label: 'Leistungen von Morgenlicht' },
        { href: '/blog/haushaltshilfe-pflegegrad-pflegekasse', label: 'Haushaltshilfe bei Pflegegrad' },
        { href: '/kosten', label: 'Kosten und Pflegekasse' },
        { href: '/pflegegrad-guide', label: 'Pflegegrad verstehen' },
      ]}
      sources={[
        { href: 'https://gesund.bund.de/entlastungsbetrag', label: 'gesund.bund.de: Entlastungsbetrag' },
        { href: 'https://www.berlin.de/sen/pflege/pflege-und-rehabilitation/pflege-zu-hause/angebote-zur-unterstuetzung-im-alltag/', label: 'Berlin.de: Anerkannte Angebote' },
      ]}
    >
      <p>
        Wer Unterstützung für Eltern, Partner oder sich selbst sucht, stößt auf viele Begriffe: <strong>Haushaltshilfe, Alltagshilfe, Seniorenhilfe, Betreuungsdienst und Pflegedienst</strong>. Sie klingen ähnlich, beschreiben aber unterschiedliche Schwerpunkte. Die richtige Einordnung hilft, ein passendes Angebot zu finden und Missverständnisse bei der Pflegekasse zu vermeiden.
      </p>

      <h2>Was macht eine Haushaltshilfe?</h2>
      <p>
        Eine Haushaltshilfe unterstützt bei Aufgaben in der Wohnung. Sie ist sinnvoll, wenn Reinigung, Wäsche oder Einkäufe körperlich zu anstrengend werden oder Angehörige diese Aufgaben nicht regelmäßig übernehmen können.
      </p>
      <ul>
        <li>Staubsaugen, Wischen sowie Küche und Bad reinigen</li>
        <li>Wäsche waschen und Bettwäsche wechseln</li>
        <li>Lebensmittel einkaufen und Besorgungen erledigen</li>
        <li>einfache Mahlzeiten vorbereiten</li>
        <li>Ordnung und eine sichere Wohnumgebung erhalten</li>
      </ul>

      <h2>Was umfasst Alltagshilfe?</h2>
      <p>
        Alltagshilfe ist breiter. Sie kann Haushaltshilfe einschließen, geht aber darüber hinaus. Ziel ist, Selbstständigkeit und soziale Teilhabe zu erhalten und Angehörige zu entlasten.
      </p>
      <ul>
        <li>Begleitung zum Arzt, zur Behörde oder zum Einkauf</li>
        <li>Unterstützung bei Post, Terminen und einfachen Telefonaten</li>
        <li>Spaziergänge, Gespräche und gemeinsame Aktivitäten</li>
        <li>Hilfe, den Tagesablauf übersichtlich zu gestalten</li>
      </ul>
      <p>
        Genau diese Verbindung aus <Link href="/leistungen">Haushalt, Einkauf, Begleitung, Alltag und sozialer Teilhabe</Link> bietet Morgenlicht in Berlin.
      </p>

      <h2>Wann braucht man einen Pflegedienst?</h2>
      <p>
        Ein Pflegedienst wird benötigt, wenn pflegerische oder medizinische Aufgaben im Vordergrund stehen. Dazu können körperbezogene Pflege, Medikamentengabe, Verbandswechsel oder andere verordnete Behandlungspflege gehören. Alltagshilfe ersetzt diese Fachleistungen nicht.
      </p>
      <p>
        Bei Pflegegrad 1 gelten für den Einsatz des Entlastungsbetrags teilweise andere Möglichkeiten als bei Pflegegrad 2 bis 5. Im Zweifel sollte die geplante Leistung vor Beginn mit der Pflegekasse oder einer Pflegeberatung geklärt werden.
      </p>

      <h2>Welche Unterstützung passt zu welcher Situation?</h2>
      <h3>Die Wohnung wird zunehmend schwer sauber zu halten</h3>
      <p>
        Dann ist Haushaltshilfe der passende Schwerpunkt. Wenn gleichzeitig Einkäufe oder Termine schwierig werden, ist ein umfassenderes Alltagshilfe-Angebot sinnvoll.
      </p>
      <h3>Eine Person fühlt sich außer Haus unsicher</h3>
      <p>
        Hier hilft Begleitung im Alltag: gemeinsam zum Arzt, zur Apotheke oder zu einem sozialen Angebot gehen.
      </p>
      <h3>Es geht um Waschen, Anziehen oder Medikamente</h3>
      <p>
        Dann sollte geprüft werden, ob ein ambulanter Pflegedienst oder eine andere qualifizierte Fachleistung gebraucht wird.
      </p>

      <h2>Wie kann die Pflegekasse helfen?</h2>
      <p>
        Für Menschen mit Pflegegrad 1 bis 5 steht bei häuslicher Pflege der Entlastungsbetrag von bis zu 131 Euro monatlich zur Verfügung. Das Budget kann für anerkannte Angebote eingesetzt werden. In Berlin gehören dazu je nach Angebot auch haushaltsnahe Dienstleistungen und weitere Unterstützung im Alltag.
      </p>
      <p>
        Wichtig ist nicht nur die Bezeichnung „Haushaltshilfe“, sondern ob der Anbieter anerkannt ist und die konkrete Leistung über die Pflegekasse abgerechnet werden kann. Unsere Seite zu <Link href="/kosten">Kosten und Pflegekasse</Link> erklärt den Ablauf.
      </p>
    </SeoBlogArticle>
  )
}
