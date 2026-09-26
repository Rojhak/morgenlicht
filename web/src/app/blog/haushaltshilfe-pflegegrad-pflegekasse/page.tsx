import Link from 'next/link'
import { SeoBlogArticle } from '../../components/sections/SeoBlogArticle'
import { OFFICIAL_SOURCES } from '@/config/site'
import { createPageMetadata } from '@/lib/seo'

const slug = 'haushaltshilfe-pflegegrad-pflegekasse'
const title = 'Haushaltshilfe bei Pflegegrad: Was zahlt die Pflegekasse?'
const description =
  'Wann die Pflegekasse eine Haushaltshilfe bezahlt, welche Aufgaben dazugehören und warum der Anbieter anerkannt sein muss – einfach erklärt.'
const published = '2026-05-08'
const modified = '2026-09-26'

export const metadata = createPageMetadata({
  title: 'Haushaltshilfe bei Pflegegrad: Was zahlt die Pflegekasse?',
  description,
  path: `/blog/${slug}`,
  article: { publishedTime: published, modifiedTime: modified },
})

const faqItems = [
  {
    question: 'Zahlt die Pflegekasse eine Haushaltshilfe?',
    answer:
      'Ja, über den Entlastungsbetrag von bis zu 131 € im Monat – vorausgesetzt, es liegt ein Pflegegrad vor, die Person lebt zu Hause und die Haushaltshilfe wird von einem anerkannten Anbieter erbracht.',
  },
  {
    question: 'Kann ich jede Haushaltshilfe nehmen?',
    answer:
      'Nein. Für die Erstattung muss der Anbieter nach Landesrecht anerkannt sein. Private Hilfe ohne Anerkennung, etwa eine Reinigungskraft ohne entsprechende Zulassung, wird in der Regel nicht erstattet.',
  },
  {
    question: 'Wird mein Pflegegeld dadurch gekürzt?',
    answer:
      'Nein. Der Entlastungsbetrag ist eine eigene Leistung und wird nicht vom Pflegegeld abgezogen. Anders ist es beim Umwandlungsanspruch ab Pflegegrad 2, der ein anteiliges Pflegegeld verringern kann.',
  },
]

export default function HaushaltshilfePflegegradPage() {
  return (
    <SeoBlogArticle
      slug={slug}
      title={title}
      shortTitle="Haushaltshilfe bei Pflegegrad"
      description={description}
      eyebrow="Haushaltshilfe und Pflegekasse"
      datePublished={published}
      dateModified={modified}
      readingTime="Lesedauer: ca. 4 Minuten"
      quickFacts={[
        'Finanzierung über den Entlastungsbetrag',
        'Der Anbieter muss anerkannt sein',
        'Das Pflegegeld wird nicht gekürzt',
        'Direktabrechnung kann Vorkasse vermeiden',
      ]}
      faqItems={faqItems}
      relatedLinks={[
        { href: '/haushaltshilfe-pflegegrad-berlin', label: 'Haushaltshilfe mit Pflegegrad in Berlin' },
        { href: '/blog/alltagshilfe-oder-haushaltshilfe-unterschied', label: 'Alltagshilfe oder Haushaltshilfe?' },
        { href: '/blog/direktabrechnung-pflegekasse-ohne-vorkasse', label: 'Direktabrechnung ohne Vorkasse' },
        { href: '/kosten', label: 'Kosten und Pflegekasse' },
      ]}
      sources={[OFFICIAL_SOURCES.bmgEntlastung, OFFICIAL_SOURCES.gesundBund, OFFICIAL_SOURCES.berlinAuA]}
      ctaTitle="Haushaltshilfe in Berlin organisieren"
      ctaText="Wir erklären Ihnen, welche Unterstützung passt und wie die Abrechnung über die Pflegekasse laufen kann."
    >
      <p>
        Viele Menschen mit Pflegegrad brauchen keine umfangreiche Pflege, aber praktische Hilfe im
        Haushalt. Reinigung, Wäsche, Einkauf und kleine Erledigungen geben Sicherheit und
        entlasten Angehörige.
      </p>

      <h2>Welche Leistung der Pflegekasse kann genutzt werden?</h2>
      <p>
        Ab Pflegegrad 1 gibt es den Entlastungsbetrag von bis zu 131 € im Monat. Er ist
        zweckgebunden und kann unter anderem für nach Landesrecht anerkannte Angebote zur
        Unterstützung im Alltag eingesetzt werden. Zu diesen Angeboten gehören ausdrücklich auch
        praktische Hilfen im Haushalt.
      </p>
      <p>
        Der Betrag wird nicht frei ausgezahlt. Er wird für konkrete Leistungen genutzt und per
        Rechnung oder <Link href="/blog/direktabrechnung-pflegekasse-ohne-vorkasse">Direktabrechnung mit der Pflegekasse</Link>{' '}
        abgerechnet.
      </p>

      <h2>Was gehört zur Haushaltshilfe?</h2>
      <ul>
        <li>Wohnung reinigen, Staub saugen und wischen</li>
        <li>Küche und Bad sauber halten</li>
        <li>Wäsche waschen, aufhängen und zusammenlegen</li>
        <li>Bettwäsche wechseln</li>
        <li>einfache Mahlzeiten vorbereiten</li>
        <li>Einkäufe und Apothekengänge erledigen</li>
      </ul>

      <h2>Warum der Anbieter anerkannt sein muss</h2>
      <p>
        Die Pflegekasse erstattet nur Leistungen von Angeboten, die nach dem jeweiligen Landesrecht
        anerkannt sind. Für die Anerkennung ist unter anderem ein Konzept zur Qualitätssicherung
        und zur Schulung der Helfenden erforderlich.{' '}
        <Link href="/ueber-uns">Morgenlicht Alltagshilfe Berlin</Link> ist als Angebot nach § 45a
        SGB XI anerkannt.
      </p>

      <h2>Wie viel Haushaltshilfe ist möglich?</h2>
      <p>
        Das hängt vom Stundensatz des Anbieters ab. Bei Morgenlicht kostet eine Stunde 35,50 €. Mit
        131 € sind damit rechnerisch etwa 3 Stunden und 41 Minuten im Monat möglich. Ab Pflegegrad
        2 kann zusätzlich der Umwandlungsanspruch genutzt werden; Details dazu auf der Seite{' '}
        <Link href="/kosten">Kosten und Pflegekasse</Link>.
      </p>

      <h2>Für wen ist Haushaltshilfe besonders sinnvoll?</h2>
      <p>
        Wenn Angehörige berufstätig sind, die Wohnung nicht mehr regelmäßig gepflegt werden kann
        oder Einkäufe körperlich zu anstrengend werden. Früh genutzt verhindert Haushaltshilfe oft,
        dass die Belastung zu Hause zu groß wird.
      </p>
    </SeoBlogArticle>
  )
}
