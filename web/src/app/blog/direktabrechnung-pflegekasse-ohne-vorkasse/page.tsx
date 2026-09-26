import Link from 'next/link'
import { SeoBlogArticle } from '../../components/sections/SeoBlogArticle'
import { OFFICIAL_SOURCES } from '@/config/site'
import { createPageMetadata } from '@/lib/seo'

const slug = 'direktabrechnung-pflegekasse-ohne-vorkasse'
const title = 'Direktabrechnung mit der Pflegekasse: Alltagshilfe ohne Vorkasse'
const description =
  'Wie die Direktabrechnung funktioniert, welche Voraussetzungen gelten und wann trotzdem Kosten entstehen – verständlich erklärt für Pflegebedürftige und Angehörige.'
const published = '2026-05-08'
const modified = '2026-09-26'

export const metadata = createPageMetadata({
  title: 'Direktabrechnung mit der Pflegekasse | Morgenlicht',
  description,
  path: `/blog/${slug}`,
  article: { publishedTime: published, modifiedTime: modified },
})

const faqItems = [
  {
    question: 'Muss ich bei Direktabrechnung Geld vorstrecken?',
    answer:
      'Wenn die Direktabrechnung vereinbart ist, die Unterlagen vorliegen und noch Budget verfügbar ist, müssen Sie für die darüber abgerechneten Leistungen in der Regel nicht in Vorkasse gehen.',
  },
  {
    question: 'Was ist eine Abtretungserklärung?',
    answer:
      'Mit der Abtretungserklärung erlauben Sie dem Anbieter, seine Rechnung für anerkannte Leistungen direkt bei Ihrer Pflegekasse einzureichen und das Geld von ihr zu erhalten.',
  },
  {
    question: 'Brauche ich dafür einen Pflegegrad?',
    answer: 'Ja. Der Entlastungsbetrag steht nur Menschen mit anerkanntem Pflegegrad (1 bis 5) zu, die zu Hause leben.',
  },
  {
    question: 'Was ist, wenn die Pflegekasse nicht zahlt?',
    answer:
      'Das kann passieren, wenn das Budget bereits aufgebraucht ist, zum Beispiel durch einen anderen Anbieter. Deshalb klären wir das verfügbare Budget vor Beginn und besprechen, was im Fall einer Ablehnung gilt.',
  },
]

export default function DirektabrechnungPage() {
  return (
    <SeoBlogArticle
      slug={slug}
      title={title}
      shortTitle="Direktabrechnung mit der Pflegekasse"
      description={description}
      eyebrow="Abrechnung mit der Pflegekasse"
      datePublished={published}
      dateModified={modified}
      readingTime="Lesedauer: ca. 4 Minuten"
      quickFacts={[
        'Der Anbieter rechnet direkt mit der Pflegekasse ab',
        'Meist ist eine Abtretungserklärung nötig',
        'Voraussetzung: Pflegegrad und freies Budget',
        'Kosten außerhalb des Budgets vorher klären',
      ]}
      faqItems={faqItems}
      relatedLinks={[
        { href: '/kosten', label: 'Kosten und Pflegekasse bei Morgenlicht' },
        { href: '/blog/alltagshilfe-pflegegrad-entlastungsbetrag', label: '131 € Entlastungsbetrag richtig nutzen' },
        { href: '/blog/pflegegrad-1-hilfe-leistungen', label: 'Pflegegrad 1: Welche Hilfe steht Ihnen zu?' },
        { href: '/haushaltshilfe-pflegegrad-berlin', label: 'Haushaltshilfe mit Pflegegrad in Berlin' },
      ]}
      sources={[OFFICIAL_SOURCES.bmgEntlastung, OFFICIAL_SOURCES.gesundBund]}
      ctaTitle="Alltagshilfe ohne Vorkasse prüfen"
      ctaText="Wir erklären Ihnen, welche Unterlagen die Pflegekasse braucht und ob in Ihrem Fall eine Direktabrechnung möglich ist."
    >
      <p>
        Beim Entlastungsbetrag denken viele Familien zuerst an Rechnungen, Formulare und
        Erstattung. Grundsätzlich erstattet die Pflegekasse die Kosten nachträglich gegen Beleg.
        Einfacher geht es mit der Direktabrechnung: Dann rechnet der anerkannte Anbieter direkt mit
        der Pflegekasse ab.
      </p>

      <h2>Was bedeutet Direktabrechnung?</h2>
      <p>
        Die Alltagshilfe wird erbracht, der Anbieter erstellt die Rechnung und reicht sie bei der
        Pflegekasse ein. Wenn Unterlagen und Budget vorher geklärt sind, müssen Sie für diese
        Leistungen kein Geld vorstrecken und keine Rechnungen sammeln.
      </p>

      <h2>Was braucht man dafür?</h2>
      <ul>
        <li>einen anerkannten Pflegegrad von 1 bis 5</li>
        <li>verfügbares Budget aus dem Entlastungsbetrag</li>
        <li>einen nach Landesrecht anerkannten Anbieter für Unterstützung im Alltag</li>
        <li>meist eine unterschriebene Abtretungserklärung</li>
      </ul>

      <h2>So läuft es ab</h2>
      <ol>
        <li><strong>Budget klären:</strong> Pflegegrad, Pflegekasse und noch verfügbarer Betrag werden geprüft.</li>
        <li><strong>Vereinbarung unterschreiben:</strong> Die Abtretungserklärung erlaubt die direkte Abrechnung.</li>
        <li><strong>Unterstützung nutzen:</strong> Der Anbieter rechnet die erbrachten Leistungen mit der Pflegekasse ab.</li>
      </ol>

      <h2>Warum ist das für Angehörige hilfreich?</h2>
      <p>
        Angehörige haben oft schon genug zu organisieren: Termine, Medikamente, Haushalt, Anträge
        und Beruf. Die Direktabrechnung reduziert Papierkram und macht regelmäßige Hilfe planbar.
      </p>

      <h2>Welche Leistungen können so abgerechnet werden?</h2>
      <p>
        Typisch sind Haushaltshilfe, Einkäufe, Apothekengänge, Begleitung zu Terminen und Hilfe bei
        der Alltagsorganisation. Welche Leistungen genau möglich sind, hängt vom anerkannten Angebot
        ab. Bei <Link href="/leistungen">Morgenlicht</Link> besprechen wir das vor Beginn.
      </p>

      <h2>Was passiert, wenn das Budget nicht reicht?</h2>
      <p>
        Dann entstehen Kosten, die Sie selbst tragen – außer es gibt weitere Ansprüche, etwa den
        Umwandlungsanspruch ab Pflegegrad 2. Wichtig ist eine klare Absprache vor Beginn. Bei
        Morgenlicht werden Stunden außerhalb des Budgets nur nach Ihrer Zustimmung geplant; der
        Stundensatz ist auf der Seite <Link href="/kosten">Kosten und Pflegekasse</Link> erklärt.
      </p>
    </SeoBlogArticle>
  )
}
