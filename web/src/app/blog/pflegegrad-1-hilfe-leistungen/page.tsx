import Link from 'next/link'
import { SeoBlogArticle } from '../../components/sections/SeoBlogArticle'
import { OFFICIAL_SOURCES } from '@/config/site'
import { createPageMetadata } from '@/lib/seo'

const slug = 'pflegegrad-1-hilfe-leistungen'
const title = 'Pflegegrad 1: Welche Hilfe steht Ihnen zu?'
const description =
  'Pflegegrad 1 bedeutet geringe Beeinträchtigungen – und trotzdem gibt es Unterstützung: vor allem den Entlastungsbetrag von bis zu 131 € im Monat für Alltagshilfe.'
const published = '2026-05-08'
const modified = '2026-09-26'

export const metadata = createPageMetadata({
  title: 'Pflegegrad 1 Leistungen: Welche Hilfe steht Ihnen zu?',
  description,
  path: `/blog/${slug}`,
  article: { publishedTime: published, modifiedTime: modified },
})

const faqItems = [
  {
    question: 'Gibt es bei Pflegegrad 1 Pflegegeld?',
    answer:
      'Nein. Pflegegeld und Pflegesachleistungen gibt es erst ab Pflegegrad 2. Bei Pflegegrad 1 ist der Entlastungsbetrag von bis zu 131 € im Monat die wichtigste Leistung für Hilfe im Alltag.',
  },
  {
    question: 'Kann ich mit Pflegegrad 1 eine Haushaltshilfe bezahlen?',
    answer:
      'Ja, wenn die Haushaltshilfe von einem nach Landesrecht anerkannten Angebot zur Unterstützung im Alltag erbracht wird. Dann kann der Entlastungsbetrag dafür eingesetzt werden.',
  },
  {
    question: 'Muss ich den Entlastungsbetrag extra beantragen?',
    answer:
      'Ein eigener Antrag vorab ist nicht nötig; der Pflegegrad muss aber anerkannt sein. Die Kosten werden gegen Rechnung erstattet oder bei vereinbarter Direktabrechnung vom Anbieter mit der Pflegekasse abgerechnet.',
  },
]

export default function PflegegradEinsPage() {
  return (
    <SeoBlogArticle
      slug={slug}
      title={title}
      shortTitle="Pflegegrad 1"
      description={description}
      eyebrow="Leistungen bei Pflegegrad 1"
      datePublished={published}
      dateModified={modified}
      readingTime="Lesedauer: ca. 4 Minuten"
      quickFacts={[
        'Bis zu 131 € Entlastungsbetrag im Monat',
        'Kein Pflegegeld bei Pflegegrad 1',
        'Nutzbar für anerkannte Alltagshilfe',
        'Nicht genutztes Budget wird übertragen',
      ]}
      faqItems={faqItems}
      relatedLinks={[
        { href: '/blog/alltagshilfe-pflegegrad-entlastungsbetrag', label: '131 € Entlastungsbetrag richtig nutzen' },
        { href: '/haushaltshilfe-pflegegrad-berlin', label: 'Haushaltshilfe mit Pflegegrad in Berlin' },
        { href: '/pflegegrad-guide', label: 'Pflegegrad-Begutachtung vorbereiten' },
        { href: '/kosten', label: 'Kosten und Pflegekasse' },
      ]}
      sources={[OFFICIAL_SOURCES.bmgEntlastung, OFFICIAL_SOURCES.sgb11Par15, OFFICIAL_SOURCES.gesundBund]}
      ctaTitle="Pflegegrad 1 sinnvoll nutzen"
      ctaText="Wir prüfen mit Ihnen, welche Alltagshilfe mit Ihrem Budget möglich ist und wie die Abrechnung funktioniert."
    >
      <p>
        Pflegegrad 1 wird häufig unterschätzt. Viele Betroffene schaffen noch vieles selbst,
        brauchen aber regelmäßig Unterstützung, damit der Alltag sicher und geordnet bleibt. Genau
        dafür gibt es schon ab Pflegegrad 1 Geld von der Pflegekasse.
      </p>

      <h2>Was bedeutet Pflegegrad 1?</h2>
      <p>
        Pflegegrad 1 steht für geringe Beeinträchtigungen der Selbstständigkeit. Bei der
        Begutachtung wurden zwischen 12,5 und unter 27 Punkten erreicht. Im Alltag heißt das oft:
        Einkaufen fällt schwer, die Wohnung bleibt liegen, Briefe werden unübersichtlich oder
        Termine sind ohne Begleitung belastend. Wie die Punkte zustande kommen, erklärt unser
        Ratgeber zur <Link href="/pflegegrad-guide">Pflegegrad-Begutachtung</Link>.
      </p>

      <h2>Die wichtigste Leistung: der Entlastungsbetrag</h2>
      <p>
        Wer Pflegegrad 1 hat und zu Hause lebt, kann bis zu <strong>131 € im Monat</strong> für
        zweckgebundene Unterstützung nutzen – im Jahr bis zu 1.572 €. Der Betrag wird nicht
        ausgezahlt, sondern für Leistungen verwendet, zum Beispiel von nach Landesrecht anerkannten
        Angeboten zur Unterstützung im Alltag.
      </p>
      <p>
        Eine Besonderheit gilt nur bei Pflegegrad 1: Der Entlastungsbetrag darf auch für Hilfen
        eines zugelassenen Pflegedienstes bei der körperbezogenen Selbstversorgung eingesetzt
        werden, etwa beim Duschen.
      </p>

      <h2>Wofür Alltagshilfe bei Pflegegrad 1 genutzt wird</h2>
      <ul>
        <li>Hilfe im Haushalt und bei der Wäsche</li>
        <li>Einkäufe und Apothekengänge</li>
        <li>Begleitung zu Arzt, Behörde oder Krankenkasse</li>
        <li>Unterstützung bei Post, Terminen und Alltagsorganisation</li>
        <li>Spaziergänge, Gespräche und soziale Teilhabe</li>
      </ul>
      <p>
        Bei einem Stundensatz von 35,50 € entsprechen 131 € rechnerisch etwa 3 Stunden und
        41 Minuten Hilfe im Monat. Nicht genutzte Beträge werden in die Folgemonate übertragen und
        können bis zum 30. Juni des Folgejahres verwendet werden.
      </p>

      <h2>Weitere Leistungen</h2>
      <p>
        Auch bei Pflegegrad 1 besteht Anspruch auf Pflegeberatung. Weitere Leistungen wie
        Pflegehilfsmittel oder Zuschüsse für Umbauten in der Wohnung können in Betracht kommen –
        Voraussetzungen und Beträge nennt Ihnen Ihre Pflegekasse.
      </p>

      <h2>Was ist der nächste Schritt?</h2>
      <p>
        Wenn Pflegegrad 1 bereits anerkannt ist, lohnt sich ein Blick darauf, ob der
        Entlastungsbetrag bisher ungenutzt geblieben ist. Wenn noch kein Pflegegrad besteht, hilft
        der Beitrag <Link href="/blog/pflegegrad-beantragen-schritt-fuer-schritt">Pflegegrad beantragen</Link>{' '}
        bei der Vorbereitung.
      </p>
    </SeoBlogArticle>
  )
}
