import Link from 'next/link'
import { SeoBlogArticle } from '../../components/sections/SeoBlogArticle'
import { OFFICIAL_SOURCES, SITE } from '@/config/site'
import { createPageMetadata } from '@/lib/seo'

const slug = 'pflegesachleistung-haushaltshilfe-umwandlungsanspruch'
const title = 'Pflegesachleistung für Haushaltshilfe: Pflegedienst oder Alltagshilfe?'
const description =
  'Ab Pflegegrad 2 kann ein Teil der Pflegesachleistung für Haushaltshilfe genutzt werden. Ein Vergleich mit Berliner Preisen zeigt, warum Sie über eine anerkannte Alltagshilfe oft doppelt so viele Stunden bekommen – und was dabei mit dem Pflegegeld passiert.'
const published = '2026-09-26'
const modified = '2026-09-26'

export const metadata = createPageMetadata({
  title: 'Haushaltshilfe über Pflegesachleistung: Kosten im Vergleich',
  description:
    'Pflegedienst oder Alltagshilfe? Mit Berliner Preisen gerechnet bringt derselbe Teil der Pflegesachleistung bei einer Alltagshilfe oft doppelt so viele Stunden.',
  path: `/blog/${slug}`,
  article: { publishedTime: published, modifiedTime: modified },
})

const tableClass = 'w-full border-collapse text-left text-base md:text-lg'
const thClass = 'border-b-2 border-forest py-3 pr-4 font-heading text-base text-forest'
const tdClass = 'border-b border-line py-3 pr-4 align-top'

const faqItems = [
  {
    question: 'Kann ich die Pflegesachleistung für eine Haushaltshilfe nutzen?',
    answer:
      'Ja, ab Pflegegrad 2. Die Pflegesachleistung umfasst auch Hilfen bei der Haushaltsführung durch einen zugelassenen Pflegedienst. Außerdem können bis zu 40 Prozent des Sachleistungsbetrags über den Umwandlungsanspruch für nach Landesrecht anerkannte Angebote zur Unterstützung im Alltag eingesetzt werden.',
  },
  {
    question: 'Muss ich den Umwandlungsanspruch vorher beantragen?',
    answer:
      'Nach Angaben des Bundesgesundheitsministeriums ist eine vorherige Antragstellung nicht erforderlich. Die Kosten werden nachträglich erstattet, wenn Sie Rechnung und Kostenerstattungsantrag bei der Pflegekasse einreichen. Es ist trotzdem sinnvoll, die Planung vorher mit der Pflegekasse zu besprechen.',
  },
  {
    question: 'Bekomme ich dann weniger Pflegegeld?',
    answer:
      'Ja, anteilig. Wer zum Beispiel 40 Prozent des Sachleistungsbetrags umwandelt und sonst keine Sachleistungen nutzt, erhält noch 60 Prozent des Pflegegeldes.',
  },
  {
    question: 'Kann ich Pflegedienst und Alltagshilfe kombinieren?',
    answer:
      'Ja. Die Pflegekasse rechnet zuerst die Leistungen des Pflegedienstes ab. Aus dem noch nicht verbrauchten Sachleistungsbetrag können Sie bis zu 40 Prozent des Höchstbetrags für die Alltagshilfe nutzen. Zusammen dürfen beide den Sachleistungsbetrag nicht überschreiten.',
  },
  {
    question: 'Gilt der Preisvergleich für jeden Pflegedienst?',
    answer:
      'Nein. Jeder Pflegedienst verhandelt seine Preise einzeln mit den Pflegekassen. Die Beispielwerte stammen aus den Orientierungswerten der Pflegestützpunkte Berlin. Fragen Sie beim Pflegedienst nach einem Kostenvoranschlag, bevor Sie sich entscheiden.',
  },
]

export default function PflegesachleistungHaushaltshilfePage() {
  return (
    <SeoBlogArticle
      slug={slug}
      title={title}
      shortTitle="Pflegesachleistung für Haushaltshilfe"
      description={description}
      eyebrow="Pflegegrad 2 bis 5"
      datePublished={published}
      dateModified={modified}
      readingTime="Lesedauer: ca. 7 Minuten"
      quickFacts={[
        'Ab Pflegegrad 2: Sachleistung auch für Haushaltshilfe',
        'Bis zu 40 % für anerkannte Alltagshilfe nutzbar',
        'Berliner Pflegedienst-Beispiel: rund 73 € pro Stunde',
        'Pflegegeld sinkt anteilig mit',
      ]}
      faqItems={faqItems}
      relatedLinks={[
        { href: '/kosten', label: 'Kosten und Pflegekasse bei Morgenlicht' },
        { href: '/blog/alltagshilfe-pflegegrad-entlastungsbetrag', label: '131 € Entlastungsbetrag richtig nutzen' },
        { href: '/haushaltshilfe-pflegegrad-berlin', label: 'Haushaltshilfe mit Pflegegrad in Berlin' },
        { href: '/blog/alltagshilfe-oder-haushaltshilfe-unterschied', label: 'Alltagshilfe, Haushaltshilfe, Pflegedienst' },
      ]}
      sources={[
        OFFICIAL_SOURCES.sgb11Par36,
        OFFICIAL_SOURCES.sgb11Par37,
        OFFICIAL_SOURCES.sgb11Par45a,
        OFFICIAL_SOURCES.bmgEntlastung,
        OFFICIAL_SOURCES.pflegestuetzpunkteIb36,
        OFFICIAL_SOURCES.berlinVerguetung,
      ]}
      ctaTitle="Wie viele Stunden sind bei Ihnen möglich?"
      ctaText="Wir rechnen mit Ihnen durch, welches Budget vorhanden ist, wie viele Stunden Alltagshilfe damit möglich sind und was das für Ihr Pflegegeld bedeutet."
    >
      <p>
        Ab Pflegegrad 2 zahlt die Pflegekasse jeden Monat einen Betrag für Pflegesachleistungen.
        Viele Familien nutzen ihn ausschließlich über einen Pflegedienst – auch für Aufgaben wie
        Putzen, Wäsche oder Einkaufen. Dabei gibt es einen zweiten Weg, der für Hilfe im Haushalt
        oft deutlich mehr Stunden bringt: den Umwandlungsanspruch für anerkannte Angebote zur
        Unterstützung im Alltag.
      </p>

      <h2>Zwei Wege, die Pflegesachleistung für den Haushalt zu nutzen</h2>
      <p>
        <strong>Über einen Pflegedienst:</strong> Die Pflegesachleistung umfasst neben körperbezogener
        Pflege und Betreuung ausdrücklich auch Hilfen bei der Haushaltsführung (§ 36 SGB XI). Ein
        zugelassener Pflegedienst kann den Sachleistungsbetrag vollständig nutzen.
      </p>
      <p>
        <strong>Über eine anerkannte Alltagshilfe:</strong> Mit dem Umwandlungsanspruch (§ 45a
        Abs. 4 SGB XI) dürfen bis zu 40 Prozent des Sachleistungs-Höchstbetrags für nach
        Landesrecht anerkannte Angebote zur Unterstützung im Alltag eingesetzt werden. Voraussetzung
        ist, dass dieser Teil nicht schon durch einen Pflegedienst verbraucht wurde, denn dessen
        Leistungen werden vorrangig abgerechnet.
      </p>

      <div className="overflow-x-auto">
        <table className={tableClass}>
          <caption className="pb-3 text-left text-base text-muted">
            Monatlicher Sachleistungsbetrag nach § 36 SGB XI und davon höchstens umwandelbar (40 %)
          </caption>
          <thead>
            <tr>
              <th scope="col" className={thClass}>Pflegegrad</th>
              <th scope="col" className={thClass}>Sachleistung</th>
              <th scope="col" className={thClass}>davon bis zu 40 %</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['2', '796 €', '318,40 €'],
              ['3', '1.497 €', '598,80 €'],
              ['4', '1.859 €', '743,60 €'],
              ['5', '2.299 €', '919,60 €'],
            ].map(([grade, amount, share]) => (
              <tr key={grade}>
                <th scope="row" className={`${tdClass} font-heading font-bold text-forest`}>{grade}</th>
                <td className={`${tdClass} tabular-nums`}>{amount}</td>
                <td className={`${tdClass} tabular-nums`}>{share}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Was Hilfe im Haushalt beim Pflegedienst in Berlin kostet</h2>
      <p>
        Berliner Pflegedienste rechnen meist nach Leistungskomplexen ab, also mit einem festen Preis
        je Aufgabe, oder nach Zeiteinheiten von 5 Minuten. Die genauen Preise verhandelt jeder
        Pflegedienst einzeln. Die Pflegestützpunkte Berlin veröffentlichen Orientierungswerte
        (Informationsblatt Nr. 36, Stand 07/2026), unter anderem:
      </p>
      <div className="overflow-x-auto">
        <table className={tableClass}>
          <caption className="pb-3 text-left text-base text-muted">
            Orientierungswerte Berliner Leistungskomplexe 2026 (Auswahl)
          </caption>
          <thead>
            <tr>
              <th scope="col" className={thClass}>Leistungskomplex</th>
              <th scope="col" className={thClass}>Preis je Einsatz</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['LK 11b Reinigen der Wohnung', '23,67 €'],
              ['LK 12 Wechseln und Waschen der Wäsche', '42,08 €'],
              ['LK 13 Einkaufen', '21,04 €'],
              ['LK 14 Zubereitung einer warmen Mahlzeit', '23,67 €'],
              ['LK 20 Betreuungsmaßnahmen (je Einheit)', '8,77 €'],
              ['LK 17 Einsatzpauschale (werktags 6–22 Uhr)', '5,70 €'],
            ].map(([lk, price]) => (
              <tr key={lk}>
                <td className={tdClass}>{lk}</td>
                <td className={`${tdClass} tabular-nums`}>{price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Hinzu kommen im Schnitt 2,5 Prozent Investitionskosten, die die Pflegekasse nicht übernimmt
        und die Sie selbst zahlen, sowie ein Ausbildungszuschlag.
      </p>
      <p>
        <strong>Beispiel für eine Stunde:</strong> Ein Berliner Pflegedienst bietet eine
        60-minütige Haushaltsreinigung mit Begleitung als Paket an und rechnet sie als einmal
        LK 11b, fünfmal LK 20 und eine Einsatzpauschale ab. Mit den Orientierungswerten sind das
        23,67 € + 43,85 € + 5,70 € = <strong>73,22 € pro Stunde</strong>, zuzüglich rund 1,83 €
        Investitionskosten.
      </p>
      <p>
        Rechnet ein Pflegedienst nach Zeit ab, nennen die Pflegestützpunkte als Beispiel 4,42 € je
        5 Minuten für Körperpflege – das sind 53,04 € pro Stunde plus Wegepauschale. Preise für
        hauswirtschaftliche Zeiteinheiten erfragen Sie beim jeweiligen Pflegedienst.
      </p>
      <p>
        Zum Vergleich: Bei Morgenlicht kostet eine Stunde Alltagshilfe {SITE.hourlyRate}, Anfahrt
        und Verwaltung sind enthalten. Anerkannte Angebote zur Unterstützung im Alltag legen ihre
        Preise in dem Konzept fest, mit dem sie anerkannt werden.
      </p>

      <h2>Rechenbeispiel: Wie viele Stunden bringt derselbe Betrag?</h2>
      <p>
        Angenommen, es werden 40 Prozent des Sachleistungsbetrags für Hilfe im Haushalt verwendet
        und sonst keine Sachleistungen. Dann sinkt das Pflegegeld in beiden Fällen gleich stark.
        Der Unterschied liegt allein darin, wie viele Stunden Hilfe Sie für diesen Betrag bekommen:
      </p>
      <div className="overflow-x-auto">
        <table className={tableClass}>
          <caption className="pb-3 text-left text-base text-muted">
            Stunden pro Monat für 40 Prozent der Sachleistung, gerundet
          </caption>
          <thead>
            <tr>
              <th scope="col" className={thClass}><span className="sr-only">Kennzahl</span></th>
              <th scope="col" className={thClass}>Pflegegrad 2</th>
              <th scope="col" className={thClass}>Pflegegrad 3</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Budget (40 % der Sachleistung)', '318,40 €', '598,80 €', false],
              ['Pflegedienst (Beispiel 73,22 € pro Stunde)', 'ca. 4 Std. 21 Min.', 'ca. 8 Std. 11 Min.', false],
              [`Alltagshilfe (${SITE.hourlyRate} pro Stunde)`, 'ca. 8 Std. 58 Min.', 'ca. 16 Std. 52 Min.', true],
              ['Pflegegeld danach', '208,20 € statt 347 €', '359,40 € statt 599 €', false],
            ].map(([label, pg2, pg3, highlight]) => (
              <tr key={String(label)}>
                <th scope="row" className={`${tdClass} font-semibold text-ink`}>{label}</th>
                <td className={`${tdClass} tabular-nums ${highlight ? 'font-bold text-forest' : ''}`}>{pg2}</td>
                <td className={`${tdClass} tabular-nums ${highlight ? 'font-bold text-forest' : ''}`}>{pg3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Für denselben Teil des Budgets – und dieselbe Kürzung beim Pflegegeld – sind bei einer
        anerkannten Alltagshilfe in diesem Beispiel also etwa doppelt so viele Stunden Hilfe im
        Haushalt möglich. Zusätzlich steht ab Pflegegrad 1 der{' '}
        <Link href="/blog/alltagshilfe-pflegegrad-entlastungsbetrag">Entlastungsbetrag</Link> von
        bis zu 131 € im Monat zur Verfügung; bei {SITE.hourlyRate} sind das weitere rund 3 Stunden
        und 41 Minuten.
      </p>

      <h2>Der Haken: Das Pflegegeld wird anteilig gekürzt</h2>
      <p>
        Der umgewandelte Betrag zählt so, als hätten Sie in dieser Höhe Sachleistungen bezogen.
        Deshalb erhalten Sie nur noch ein anteiliges Pflegegeld: bei 40 Prozent Umwandlung noch 60
        Prozent. Bei Pflegegrad 2 sind das 138,80 € weniger Pflegegeld im Monat, bei Pflegegrad 3
        239,60 € weniger.
      </p>
      <p>
        Ob sich das lohnt, hängt davon ab, wofür das Pflegegeld bisher gebraucht wird – zum Beispiel
        als Anerkennung für Angehörige, die pflegen. Rechnen Sie beides nebeneinander. Die
        Pflegeberatung Ihrer Pflegekasse kann dafür einen Versorgungsplan erstellen.
      </p>

      <h2>Wann der Pflegedienst die richtige Wahl ist</h2>
      <ul>
        <li>Für Körperpflege wie Waschen, Duschen oder Anziehen bei Pflegegrad 2 bis 5</li>
        <li>Für medizinische Behandlungspflege, die ärztlich verordnet wird</li>
        <li>Wenn mehr als 40 Prozent des Sachleistungsbetrags gebraucht werden</li>
      </ul>
      <p>
        Oft ist eine Kombination sinnvoll: Der Pflegedienst übernimmt die Pflege, eine anerkannte
        Alltagshilfe den Haushalt und die Begleitung. Der Unterschied zwischen beiden Angeboten ist
        im Beitrag{' '}
        <Link href="/blog/alltagshilfe-oder-haushaltshilfe-unterschied">Alltagshilfe, Haushaltshilfe oder Pflegedienst</Link>{' '}
        erklärt.
      </p>

      <h2>So nutzen Sie den Umwandlungsanspruch</h2>
      <ol>
        <li>Klären Sie mit Ihrer Pflegekasse, wie viel Sachleistung bereits durch einen Pflegedienst verbraucht wird.</li>
        <li>Wählen Sie ein nach Landesrecht anerkanntes Angebot zur Unterstützung im Alltag – nur dann erstattet die Pflegekasse.</li>
        <li>Reichen Sie Rechnung und Kostenerstattungsantrag bei der Pflegekasse ein. Ein Antrag vorab ist laut Bundesgesundheitsministerium nicht erforderlich.</li>
        <li>Beachten Sie: Wurde für den Monat schon volles Pflegegeld gezahlt, verrechnet die Pflegekasse den zu viel gezahlten Teil mit der Erstattung.</li>
      </ol>
      <p>
        Morgenlicht ist als Angebot zur Unterstützung im Alltag nach § 45a SGB XI anerkannt. Welche
        Unterlagen Sie brauchen und wie die Abrechnung in Ihrem Fall abläuft, besprechen wir vor
        Beginn – ebenso wie die Frage, ob sich die Umwandlung für Sie rechnet. Mehr dazu auf der
        Seite <Link href="/kosten">Kosten und Pflegekasse</Link>.
      </p>
    </SeoBlogArticle>
  )
}
