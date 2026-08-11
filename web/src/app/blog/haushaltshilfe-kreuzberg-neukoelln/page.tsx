import type { Metadata } from 'next'
import Link from 'next/link'
import { SeoBlogArticle } from '../../components/sections/SeoBlogArticle'

const title = 'Haushaltshilfe in Kreuzberg und Neukölln: Kosten, Pflegekasse und Leistungen'
const description =
  'Haushaltshilfe in Kreuzberg und Neukölln: Erfahren Sie, welche Leistungen möglich sind, was die Pflegekasse übernimmt und wie Morgenlicht unterstützt.'

export const metadata: Metadata = {
  title: { absolute: 'Haushaltshilfe Kreuzberg & Neukölln | Pflegekasse' },
  description,
  alternates: { canonical: '/blog/haushaltshilfe-kreuzberg-neukoelln' },
  openGraph: {
    title,
    description,
    type: 'article',
    locale: 'de_DE',
    publishedTime: '2026-07-11',
    modifiedTime: '2026-07-11',
    url: '/blog/haushaltshilfe-kreuzberg-neukoelln',
    images: [{ url: '/images/hero_daily_moments.jpg', alt: 'Haushaltshilfe für eine Seniorin in Berlin' }],
  },
}

const faqItems = [
  {
    question: 'Gibt es Haushaltshilfe in Kreuzberg und Neukölln über die Pflegekasse?',
    answer:
      'Ja. Menschen mit Pflegegrad 1 bis 5 können den Entlastungsbetrag für anerkannte Unterstützung im Alltag einsetzen. Dazu können in Berlin auch Hilfen bei der Haushaltsführung gehören.',
  },
  {
    question: 'Welche Arbeiten übernimmt eine Haushaltshilfe für Senioren?',
    answer:
      'Typisch sind Reinigung, Wäschepflege, Bettwäsche wechseln, einfache Mahlzeiten, Einkauf und Apothekengänge. Welche Aufgaben vereinbart werden, hängt vom persönlichen Bedarf und vom Angebot des Anbieters ab.',
  },
  {
    question: 'Muss ich die Haushaltshilfe zuerst selbst bezahlen?',
    answer:
      'Bei einer Direktabrechnung kann ein anerkannter Anbieter die vereinbarten Leistungen im verfügbaren Budget direkt mit der Pflegekasse abrechnen. Die Voraussetzungen werden vor Beginn geklärt.',
  },
  {
    question: 'In welchen Kiezen ist Morgenlicht tätig?',
    answer:
      'Der Schwerpunkt liegt unter anderem in Kreuzberg und Neukölln. Ob ein Einsatz in Ihrem Kiez möglich ist, klären wir persönlich anhand von Adresse, Bedarf und aktueller Kapazität.',
  },
]

export default function HaushaltshilfeKreuzbergNeukoellnPage() {
  return (
    <SeoBlogArticle
      slug="haushaltshilfe-kreuzberg-neukoelln"
      title={title}
      description={description}
      eyebrow="Lokaler Ratgeber für Berlin"
      datePublished="2026-07-11"
      dateModified="2026-07-11"
      dateLabel="11. Juli 2026"
      readingTime="Lesedauer: ca. 7 Minuten"
      imageSrc="/images/hero_daily_moments.jpg"
      imageAlt="Seniorin erhält Haushaltshilfe in Kreuzberg und Neukölln"
      quickFacts={[
        'Entlastungsbetrag ab Pflegegrad 1',
        'Anerkannter Anbieter in Berlin erforderlich',
        'Hilfe bei Haushalt, Einkauf und Begleitung',
        'Direktabrechnung kann Vorkasse vermeiden',
      ]}
      faqItems={faqItems}
      relatedLinks={[
        { href: '/berlin-kreuzberg', label: 'Haushaltshilfe in Kreuzberg' },
        { href: '/berlin-neukoelln', label: 'Haushaltshilfe in Neukölln' },
        { href: '/kosten', label: 'Kosten und Pflegekasse' },
        { href: '/leistungen', label: 'Alle Leistungen' },
      ]}
      sources={[
        { href: 'https://gesund.bund.de/entlastungsbetrag', label: 'gesund.bund.de: Entlastungsbetrag' },
        { href: 'https://www.berlin.de/sen/pflege/pflege-und-rehabilitation/pflege-zu-hause/angebote-zur-unterstuetzung-im-alltag/', label: 'Berlin.de: Angebote zur Unterstützung im Alltag' },
      ]}
    >
      <p>
        Wer nach einer <strong>Haushaltshilfe in Kreuzberg oder Neukölln</strong> sucht, braucht meist schnell eine klare Antwort: Welche Hilfe ist möglich, wer bezahlt sie und wie findet man einen anerkannten Anbieter? Für ältere oder pflegebedürftige Menschen geht es dabei nicht nur um eine saubere Wohnung. Regelmäßige Unterstützung kann helfen, länger sicher und selbstbestimmt zu Hause zu leben.
      </p>

      <h2>Was eine Haushaltshilfe im Alltag übernehmen kann</h2>
      <p>
        Haushaltshilfe ist praktische Unterstützung in der eigenen Wohnung. Der genaue Umfang wird gemeinsam vereinbart. Häufig geht es um Aufgaben, die körperlich anstrengend geworden sind oder Angehörige zeitlich nicht regelmäßig übernehmen können.
      </p>
      <ul>
        <li>Staubsaugen, Wischen sowie Küche und Bad reinigen</li>
        <li>Wäsche waschen, aufhängen, zusammenlegen und Bettwäsche wechseln</li>
        <li>Lebensmittel einkaufen und notwendige Besorgungen erledigen</li>
        <li>einfache Mahlzeiten vorbereiten</li>
        <li>Ordnung im Haushalt erhalten und kleine Alltagsaufgaben strukturieren</li>
      </ul>
      <p>
        Morgenlicht verbindet diese hauswirtschaftlichen Hilfen mit <Link href="/leistungen">Unterstützung im Alltag</Link>. Dazu können auch Einkaufshilfe, Begleitung zu Terminen, Spaziergänge oder Hilfe bei Post und Alltagsorganisation gehören.
      </p>

      <h2>Haushaltshilfe in Kreuzberg</h2>
      <p>
        In Kreuzberg sind kurze Wege trotzdem nicht immer leicht: Einkäufe am Kottbusser Damm, ein Arzttermin nahe dem Urban-Krankenhaus oder Treppen in einem Altbau können mit zunehmenden Einschränkungen belastend werden. Eine verlässliche Haushaltshilfe entlastet dort, wo der Alltag tatsächlich stattfindet.
      </p>
      <p>
        Auf unserer Bezirksseite finden Sie weitere Informationen zur <Link href="/berlin-kreuzberg">Haushaltshilfe und Alltagshilfe in Berlin-Kreuzberg</Link>, unter anderem für Graefekiez, Wrangelkiez und Bergmannkiez.
      </p>

      <h2>Haushaltshilfe in Neukölln</h2>
      <p>
        Neukölln reicht vom Reuterkiez und Schillerkiez bis nach Britz und Gropiusstadt. Die Bedürfnisse unterscheiden sich: Manche Menschen benötigen vor allem Hilfe bei Reinigung und Wäsche, andere wünschen eine Einkaufsbegleitung oder Unterstützung bei Terminen. Wichtig ist ein Angebot, das zum persönlichen Alltag passt.
      </p>
      <p>
        Mehr zu Einsatzgebieten und Unterstützung vor Ort steht auf unserer Seite zur <Link href="/berlin-neukoelln">Haushaltshilfe und Alltagshilfe in Berlin-Neukölln</Link>.
      </p>

      <h2>Was übernimmt die Pflegekasse?</h2>
      <p>
        Pflegebedürftige Menschen mit Pflegegrad 1 bis 5, die zu Hause leben, haben Anspruch auf den monatlichen Entlastungsbetrag von bis zu 131 Euro. Das Budget ist zweckgebunden. Es wird nicht wie Pflegegeld frei ausgezahlt, sondern für anerkannte Leistungen verwendet.
      </p>
      <p>
        In Berlin können anerkannte Angebote zur Unterstützung im Alltag auch bei der Haushaltsführung helfen. Entscheidend ist, dass der Anbieter nach den Berliner Vorgaben anerkannt ist. Morgenlicht ist ein anerkanntes Angebot nach § 45a SGB XI. Einzelheiten zu Budget und Abrechnung finden Sie unter <Link href="/kosten">Kosten und Pflegekasse</Link>.
      </p>

      <h2>Woran erkenne ich einen passenden Anbieter?</h2>
      <ul>
        <li>Die Anerkennung für Angebote zur Unterstützung im Alltag ist nachvollziehbar.</li>
        <li>Leistungen, Zeiten und mögliche Eigenkosten werden vor Beginn erklärt.</li>
        <li>Eine feste Ansprechperson ist erreichbar.</li>
        <li>Die Unterstützung wird an den tatsächlichen Bedarf angepasst.</li>
        <li>Sprache, Kultur und persönliche Gewohnheiten werden respektiert.</li>
      </ul>

      <h2>So starten Sie mit Haushaltshilfe</h2>
      <p>
        Für ein erstes Gespräch reichen wenige Angaben: Wohnbezirk, Pflegegrad, gewünschte Aufgaben und bevorzugte Zeiten. Danach lässt sich prüfen, welches Budget vorhanden ist und ob eine direkte Abrechnung mit der Pflegekasse möglich ist. So wissen Familien vor Beginn, welche Unterstützung realistisch organisiert werden kann.
      </p>
    </SeoBlogArticle>
  )
}
