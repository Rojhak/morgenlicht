import Link from 'next/link'
import { SeoBlogArticle } from '../../components/sections/SeoBlogArticle'
import { OFFICIAL_SOURCES } from '@/config/site'
import { createPageMetadata } from '@/lib/seo'

const slug = 'alltagshilfe-pflegegrad-entlastungsbetrag'
const title = 'Alltagshilfe bei Pflegegrad: So nutzen Sie den Entlastungsbetrag richtig'
const description =
  'Ab Pflegegrad 1 gibt es bis zu 131 € im Monat für Alltagshilfe. Wer Anspruch hat, wofür das Geld genutzt werden kann und wie die Abrechnung funktioniert.'
const published = '2026-05-06'
const modified = '2026-09-26'

export const metadata = createPageMetadata({
  title: 'Alltagshilfe bei Pflegegrad: 131 € Entlastungsbetrag richtig nutzen',
  description,
  path: `/blog/${slug}`,
  article: { publishedTime: published, modifiedTime: modified },
})

const faqItems = [
  {
    question: 'Bekomme ich die 131 € automatisch ausgezahlt?',
    answer:
      'Nein. Der Entlastungsbetrag wird nicht wie Pflegegeld überwiesen. Er wird für anerkannte Leistungen genutzt und über Rechnung oder Direktabrechnung mit der Pflegekasse abgerechnet.',
  },
  {
    question: 'Gibt es den Entlastungsbetrag schon ab Pflegegrad 1?',
    answer: 'Ja. Menschen mit Pflegegrad 1 bis 5 haben Anspruch, wenn sie zu Hause gepflegt oder betreut werden.',
  },
  {
    question: 'Kann ich damit eine Haushaltshilfe bezahlen?',
    answer:
      'Ja, wenn die Haushaltshilfe über ein nach Landesrecht anerkanntes Angebot zur Unterstützung im Alltag erfolgt. Typisch sind Reinigung, Wäsche, Einkauf und andere Hilfen im Alltag.',
  },
  {
    question: 'Verfällt der Entlastungsbetrag?',
    answer:
      'Nicht sofort. Nicht genutzte Beträge werden in die folgenden Monate übertragen. Was am Ende des Kalenderjahres übrig ist, kann bis zum 30. Juni des Folgejahres genutzt werden.',
  },
]

export default function EntlastungsbetragBlogPage() {
  return (
    <SeoBlogArticle
      slug={slug}
      title={title}
      shortTitle="Entlastungsbetrag richtig nutzen"
      description={description}
      eyebrow="Entlastungsbetrag ab Pflegegrad 1"
      datePublished={published}
      dateModified={modified}
      readingTime="Lesedauer: ca. 7 Minuten"
      quickFacts={[
        'Bis zu 131 € im Monat, 1.572 € im Jahr',
        'Ab Pflegegrad 1, bei Pflege zu Hause',
        'Nur für anerkannte Angebote',
        'Restbeträge bis 30. Juni des Folgejahres nutzbar',
      ]}
      faqItems={faqItems}
      relatedLinks={[
        { href: '/kosten', label: 'Kosten und Pflegekasse bei Morgenlicht' },
        { href: '/blog/direktabrechnung-pflegekasse-ohne-vorkasse', label: 'Direktabrechnung ohne Vorkasse' },
        { href: '/blog/pflegegrad-1-hilfe-leistungen', label: 'Pflegegrad 1: Welche Hilfe steht Ihnen zu?' },
        { href: '/haushaltshilfe-pflegegrad-berlin', label: 'Haushaltshilfe mit Pflegegrad in Berlin' },
      ]}
      sources={[OFFICIAL_SOURCES.bmgEntlastung, OFFICIAL_SOURCES.gesundBund, OFFICIAL_SOURCES.vzBerlin, OFFICIAL_SOURCES.berlinAuA]}
      ctaTitle="Entlastungsbetrag in Berlin nutzen"
      ctaText="Wir prüfen mit Ihnen, welche Unterstützung passt und wie die Abrechnung mit der Pflegekasse funktioniert."
    >
      <p>
        Im Jahr 2026 beträgt der Entlastungsbetrag <strong>bis zu 131 € pro Monat</strong>, also bis
        zu <strong>1.572 € im Jahr</strong>. Er steht bereits ab Pflegegrad 1 zur Verfügung und
        kommt zusätzlich zu anderen Pflegeleistungen.
      </p>
      <p>
        Gerade diese Leistung bleibt oft ungenutzt. Viele Familien wissen nicht, dass sie Anspruch
        haben, oder denken, das Geld werde automatisch ausgezahlt. Das stimmt nicht: Der
        Entlastungsbetrag ist zweckgebunden und kann nur für bestimmte anerkannte Angebote verwendet
        werden.
      </p>

      <h2>Was ist der Entlastungsbetrag?</h2>
      <p>
        Eine Leistung der Pflegeversicherung nach § 45b SGB XI für Menschen, die zu Hause gepflegt
        oder betreut werden. Sie soll pflegebedürftige Menschen im Alltag unterstützen und pflegende
        Angehörige entlasten. Das Geld wird nicht monatlich überwiesen, sondern für konkrete
        Leistungen eingesetzt – zum Beispiel für eine anerkannte Alltagshilfe oder Haushaltshilfe.
      </p>

      <h2>Wer hat Anspruch?</h2>
      <p>
        Menschen mit Pflegegrad 1 bis 5, die zu Hause gepflegt oder betreut werden. Dabei spielt es
        keine Rolle, ob die Pflege durch Angehörige, Freunde oder einen Pflegedienst organisiert
        wird.
      </p>
      <p>
        Die Leistung muss von einem Anbieter erbracht werden, der nach Landesrecht anerkannt ist.{' '}
        <Link href="/ueber-uns">Morgenlicht Alltagshilfe Berlin</Link> ist als Angebot nach § 45a
        SGB XI anerkannt und unterstützt in den Bereichen{' '}
        <Link href="/leistungen">Haushalt, Einkauf, Begleitung, Alltag und Soziales</Link>.
      </p>

      <h2>Wofür kann der Entlastungsbetrag genutzt werden?</h2>
      <h3>Haushalt und Reinigung</h3>
      <p>
        Wohnung reinigen, Küche und Bad putzen, Wäsche waschen, Betten beziehen oder einfache
        Mahlzeiten vorbereiten.
      </p>
      <h3>Einkauf und Erledigungen</h3>
      <p>Wocheneinkauf, Apothekengänge, Post, Bank, Drogerie oder andere notwendige Besorgungen.</p>
      <h3>Begleitung außer Haus</h3>
      <p>Begleitung zum Arzt, zur Behörde, zur Krankenkasse, zum Einkauf oder zu Freizeitangeboten.</p>
      <h3>Alltagsorganisation und soziale Teilhabe</h3>
      <p>
        Post sortieren, Termine im Blick behalten, einfache Formulare ausfüllen – aber auch
        Gespräche, Spaziergänge, Vorlesen oder die Begleitung zu Seniorentreffs. Gerade bei
        Einsamkeit im Alter ist diese Unterstützung oft genauso wichtig wie Hilfe im Haushalt.
      </p>

      <h2>Was nicht über den Entlastungsbetrag bezahlt wird</h2>
      <ul>
        <li>medizinische Behandlungspflege, etwa Spritzen, Verbandswechsel oder Medikamentengabe durch Fachpflege</li>
        <li>Leistungen von Anbietern ohne Anerkennung</li>
        <li>frei ausgezahlte Geldleistungen ohne Rechnung</li>
      </ul>
      <p>
        Bei Pflegegrad 2 bis 5 gilt außerdem: Hilfen eines Pflegedienstes bei der körperbezogenen
        Selbstversorgung, etwa Waschen oder Anziehen, können nicht über den Entlastungsbetrag
        abgerechnet werden. Bei Pflegegrad 1 ist das ausnahmsweise möglich.
      </p>

      <h2>Wie funktioniert die Abrechnung?</h2>
      <p>
        Grundsätzlich gilt das Erstattungsprinzip: Die Leistung wird erbracht, es gibt eine Rechnung,
        und diese wird bei der Pflegekasse eingereicht. Wer kein Geld vorstrecken möchte, kann mit
        manchen anerkannten Anbietern eine{' '}
        <Link href="/blog/direktabrechnung-pflegekasse-ohne-vorkasse">Direktabrechnung</Link>{' '}
        vereinbaren. Dafür wird in der Regel eine Abtretungserklärung unterschrieben.
      </p>

      <h2>Wird das Pflegegeld gekürzt?</h2>
      <p>
        Nein. Der Entlastungsbetrag kommt zusätzlich zum Pflegegeld. Pflegegeld und
        Entlastungsbetrag haben unterschiedliche Zwecke.
      </p>

      <h2>Kann man ungenutzte Beträge ansparen?</h2>
      <p>
        Ja. Nicht genutzte Beträge werden in die folgenden Monate übertragen. Was am Ende eines
        Kalenderjahres übrig ist, kann bis zum 30. Juni des Folgejahres genutzt werden. Danach
        verfällt der Rest.
      </p>

      <h2>Was, wenn 131 € im Monat nicht reichen?</h2>
      <p>
        Ab Pflegegrad 2 können unter bestimmten Voraussetzungen zusätzlich bis zu 40 % der nicht
        genutzten ambulanten Pflegesachleistungen für Angebote zur Unterstützung im Alltag
        eingesetzt werden (Umwandlungsanspruch). Das kann ein anteiliges Pflegegeld verringern und
        sollte vorher mit der Pflegekasse geklärt werden. Wie viele Stunden das bringt, zeigt unser{' '}
        <Link href="/blog/pflegesachleistung-haushaltshilfe-umwandlungsanspruch">Rechenbeispiel zur Pflegesachleistung</Link>.
      </p>

      <h2>Warum Alltagshilfe oft zu spät genutzt wird</h2>
      <p>
        Viele Familien organisieren Unterstützung erst, wenn die Belastung schon sehr hoch ist.
        Früh eingesetzt kann Alltagshilfe Überforderung vermeiden, zum Beispiel wenn:
      </p>
      <ul>
        <li>Angehörige arbeiten und nicht jede Woche beim Haushalt helfen können,</li>
        <li>Arzttermine, Briefe und Anträge unübersichtlich werden,</li>
        <li>Einkäufe körperlich zu anstrengend sind,</li>
        <li>die pflegebedürftige Person kaum noch rausgeht oder</li>
        <li>nach einem Krankenhausaufenthalt vorübergehend Unterstützung fehlt.</li>
      </ul>
      <p>
        Wer noch keinen Pflegegrad hat, sollte den{' '}
        <Link href="/blog/pflegegrad-beantragen-schritt-fuer-schritt">Pflegegrad beantragen</Link> und
        die <Link href="/pflegegrad-guide">Begutachtung gut vorbereiten</Link>.
      </p>

      <h2>Fazit</h2>
      <p>
        Der Entlastungsbetrag ist eine wichtige, aber oft übersehene Leistung der
        Pflegeversicherung. Ab Pflegegrad 1 stehen monatlich bis zu 131 € für Unterstützung im
        Alltag zur Verfügung – für Haushalt, Einkauf, Begleitung, Alltagsorganisation und soziale
        Teilhabe, sofern der Anbieter anerkannt ist.
      </p>
    </SeoBlogArticle>
  )
}
