import Link from 'next/link'
import { SeoBlogArticle } from '../../components/sections/SeoBlogArticle'
import { OFFICIAL_SOURCES } from '@/config/site'
import { createPageMetadata } from '@/lib/seo'

const slug = 'pflegegrad-beantragen-schritt-fuer-schritt'
const title = 'Pflegegrad beantragen: Schritt für Schritt erklärt'
const description =
  'So beantragen Sie einen Pflegegrad: Antrag bei der Pflegekasse, Hilfebedarf sammeln, Begutachtung vorbereiten, Bescheid prüfen – mit Fristen und Tipps für Angehörige.'
const published = '2026-01-05'
const modified = '2026-09-26'

const metaDescription =
  'Pflegegrad beantragen: Antrag bei der Pflegekasse, Begutachtung vorbereiten, Bescheid prüfen – mit Fristen und Tipps für Angehörige.'

export const metadata = createPageMetadata({
  title: 'Pflegegrad beantragen: Schritt für Schritt erklärt',
  description: metaDescription,
  path: `/blog/${slug}`,
  article: { publishedTime: published, modifiedTime: modified },
})

const faqItems = [
  {
    question: 'Wo beantrage ich einen Pflegegrad?',
    answer:
      'Bei der Pflegekasse. Sie ist bei Ihrer Krankenkasse angesiedelt. Der Antrag kann telefonisch, schriftlich oder über ein Formular der Kasse gestellt werden.',
  },
  {
    question: 'Muss ich den Antrag ausführlich begründen?',
    answer:
      'Nein. Für den Start reicht ein kurzer Satz. Wichtig ist danach die gute Vorbereitung auf die Begutachtung.',
  },
  {
    question: 'Wie lange dauert es bis zur Entscheidung?',
    answer:
      'Die Pflegekasse muss grundsätzlich spätestens 25 Arbeitstage nach Eingang des Antrags schriftlich entscheiden (§ 18c SGB XI).',
  },
  {
    question: 'Was mache ich, wenn der Pflegegrad abgelehnt wird oder zu niedrig ist?',
    answer:
      'Sie können innerhalb eines Monats nach Erhalt des Bescheids schriftlich Widerspruch bei der Pflegekasse einlegen. Prüfen Sie dazu das mitgeschickte Gutachten genau.',
  },
]

export default function PflegegradBeantragenPage() {
  return (
    <SeoBlogArticle
      slug={slug}
      title={title}
      shortTitle="Pflegegrad beantragen"
      description={description}
      eyebrow="Pflegegrad und Antrag"
      datePublished={published}
      dateModified={modified}
      readingTime="Lesedauer: ca. 5 Minuten"
      quickFacts={[
        'Antrag formlos bei der Pflegekasse stellen',
        'Hilfebedarf im Alltag konkret notieren',
        'Entscheidung spätestens nach 25 Arbeitstagen',
        'Widerspruch innerhalb eines Monats möglich',
      ]}
      faqItems={faqItems}
      relatedLinks={[
        { href: '/pflegegrad-guide', label: 'Begutachtung vorbereiten: Checkliste' },
        { href: '/blog/pflegegrad-1-hilfe-leistungen', label: 'Pflegegrad 1: Welche Hilfe steht Ihnen zu?' },
        { href: '/blog/alltagshilfe-pflegegrad-entlastungsbetrag', label: '131 € Entlastungsbetrag nutzen' },
        { href: '/kosten', label: 'Kosten und Pflegekasse' },
      ]}
      sources={[OFFICIAL_SOURCES.sgb11Par18c, OFFICIAL_SOURCES.sgb11Par15, OFFICIAL_SOURCES.bmgEntlastung]}
      ctaTitle="Hilfe im Alltag nach dem Pflegegrad"
      ctaText="Mit Pflegegrad kann der Entlastungsbetrag für Alltagshilfe genutzt werden. Wir erklären Ihnen, wie das in Ihrem Fall funktioniert."
    >
      <p>
        Ein Pflegegrad öffnet den Zugang zu Leistungen der Pflegeversicherung, etwa Pflegegeld,
        Pflegesachleistungen und dem Entlastungsbetrag für Unterstützung im Alltag. Viele Familien
        warten zu lange mit dem Antrag. Dabei ist er oft der wichtigste erste Schritt.
      </p>
      <p>
        Wer im Haushalt, bei Terminen, beim Einkaufen, bei der Körperpflege, bei der Orientierung
        oder der Tagesstruktur voraussichtlich dauerhaft – mindestens sechs Monate – Unterstützung
        braucht, sollte den Anspruch prüfen lassen.
      </p>

      <h2>1. Antrag bei der Pflegekasse stellen</h2>
      <p>
        Die Pflegekasse gehört zur Krankenkasse. Für den Start reicht ein kurzer Satz: „Ich
        beantrage Leistungen der Pflegeversicherung.“ Wichtig ist das Datum: Leistungen gibt es in
        der Regel frühestens ab dem Monat der Antragstellung. Schieben Sie den Antrag deshalb nicht
        unnötig auf.
      </p>

      <h2>2. Hilfebedarf ehrlich sammeln</h2>
      <p>
        Für die Begutachtung zählt nicht, was an einem besonders guten Tag noch klappt, sondern
        welche Unterstützung im normalen Alltag regelmäßig nötig ist. Diese Fragen helfen:
      </p>
      <ul>
        <li>Fällt das Aufstehen, Waschen, Duschen oder Anziehen schwer?</li>
        <li>Werden Medikamente, Termine oder Mahlzeiten vergessen?</li>
        <li>Ist der Einkauf körperlich zu anstrengend?</li>
        <li>Bleiben Haushalt, Wäsche oder Post liegen?</li>
        <li>Gibt es Sturzangst, Unsicherheit außer Haus oder Einsamkeit?</li>
      </ul>

      <h2>3. Begutachtung vorbereiten</h2>
      <p>
        Nach dem Antrag meldet sich der Medizinische Dienst, bei privat Versicherten Medicproof.
        Beim Termin sollte eine Person dabei sein, die den Alltag gut kennt. Hilfreich sind
        Arztberichte, Medikamentenplan, Krankenhausberichte und eine kurze Liste mit konkreten
        Alltagssituationen. Eine ausführliche Checkliste und die sechs geprüften Lebensbereiche
        finden Sie im Ratgeber <Link href="/pflegegrad-guide">Pflegegrad-Begutachtung vorbereiten</Link>.
      </p>

      <h2>4. Bescheid prüfen</h2>
      <p>
        Die Pflegekasse muss grundsätzlich spätestens 25 Arbeitstage nach Eingang des Antrags
        entscheiden. Mit dem Bescheid kommt das Gutachten. Wenn das Ergebnis nicht zur
        tatsächlichen Situation passt, können Sie innerhalb eines Monats Widerspruch einlegen.
      </p>

      <h2>5. Leistungen sinnvoll nutzen</h2>
      <p>
        Schon ab Pflegegrad 1 gibt es den{' '}
        <Link href="/blog/alltagshilfe-pflegegrad-entlastungsbetrag">Entlastungsbetrag</Link> von
        bis zu 131 € im Monat. Er kann für anerkannte Unterstützung im Alltag genutzt werden, zum
        Beispiel für <Link href="/leistungen">Haushalt, Einkauf, Begleitung und Alltagsorganisation</Link>.
        Wie die Abrechnung funktioniert, erklären wir auf der Seite{' '}
        <Link href="/kosten">Kosten und Pflegekasse</Link>.
      </p>
    </SeoBlogArticle>
  )
}
