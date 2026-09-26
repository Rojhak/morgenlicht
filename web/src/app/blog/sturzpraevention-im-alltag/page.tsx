import Link from 'next/link'
import { SeoBlogArticle } from '../../components/sections/SeoBlogArticle'
import { createPageMetadata } from '@/lib/seo'

const slug = 'sturzpraevention-im-alltag'
const title = 'Sturzprävention im Alltag: 7 einfache Tipps für mehr Sicherheit zu Hause'
const description =
  'Mit einfachen Maßnahmen wird die Wohnung sicherer: Stolperfallen, Licht, Haltegriffe, Schuhe, Bewegung, Medikamente und Sehen – eine Checkliste.'
const published = '2025-12-28'
const modified = '2026-09-26'

export const metadata = createPageMetadata({
  title: 'Sturzprävention zu Hause: 7 Tipps für Senioren',
  description,
  path: `/blog/${slug}`,
  article: { publishedTime: published, modifiedTime: modified },
})

const faqItems = [
  {
    question: 'Zahlt die Pflegekasse Haltegriffe oder einen Umbau im Bad?',
    answer:
      'Mit Pflegegrad kann die Pflegekasse Zuschüsse für wohnumfeldverbessernde Maßnahmen gewähren, zum Beispiel für Haltegriffe oder eine bodengleiche Dusche. Der Antrag sollte vor dem Umbau gestellt werden.',
  },
  {
    question: 'Wer berät zur sicheren Wohnung?',
    answer:
      'Kostenfreie Beratung bieten die Pflegestützpunkte Berlin und die Pflegeberatung der Pflegekassen. Bei gesundheitlichen Ursachen von Unsicherheit ist die Hausarztpraxis die richtige Anlaufstelle.',
  },
  {
    question: 'Kann eine Alltagshilfe beim Vorbeugen helfen?',
    answer:
      'Ja, im Alltag: Eine Alltagshilfe kann Wege abnehmen, beim Einkauf tragen, auf Spaziergängen begleiten und auf Stolperfallen in der Wohnung hinweisen. Medizinische Maßnahmen gehören nicht dazu.',
  },
]

export default function SturzpraeventionPage() {
  return (
    <SeoBlogArticle
      slug={slug}
      title={title}
      shortTitle="Sturzprävention im Alltag"
      description={description}
      eyebrow="Sicher zu Hause"
      datePublished={published}
      dateModified={modified}
      readingTime="Lesedauer: ca. 4 Minuten"
      quickFacts={[
        'Stolperfallen entfernen und für gutes Licht sorgen',
        'Haltegriffe in Bad und Flur anbringen',
        'Bewegung und Gleichgewicht trainieren',
        'Medikamente, Augen und Ohren prüfen lassen',
      ]}
      faqItems={faqItems}
      relatedLinks={[
        { href: '/leistungen#begleitung', label: 'Begleitung und Mobilität' },
        { href: '/soziale-begleitung-senioren-berlin', label: 'Spaziergänge und soziale Begleitung' },
        { href: '/blog/seniorenhilfe-zuhause-berlin', label: 'Seniorenhilfe zu Hause in Berlin' },
        { href: '/pflegegrad-guide', label: 'Pflegegrad-Begutachtung vorbereiten' },
      ]}
      ctaTitle="Mehr Sicherheit im Alltag"
      ctaText="Wir begleiten zu Terminen, übernehmen Einkäufe und gehen mit Ihnen spazieren – damit anstrengende Wege nicht allein bewältigt werden müssen."
    >
      <p>
        Mit zunehmendem Alter steigt das Risiko zu stürzen, und die Folgen wiegen oft schwerer.
        Viele Stürze passieren in der eigenen Wohnung. Die gute Nachricht: Schon kleine
        Veränderungen machen den Alltag deutlich sicherer.
      </p>

      <h2>1. Stolperfallen entfernen</h2>
      <ul>
        <li>Lose Teppiche mit rutschfesten Unterlagen sichern oder entfernen</li>
        <li>Kabel an der Wand entlang führen und befestigen</li>
        <li>Wege durch die Wohnung freihalten, besonders nachts zum Bad</li>
      </ul>

      <h2>2. Für gutes Licht sorgen</h2>
      <ul>
        <li>Nachtlichter in Flur und Bad</li>
        <li>Bewegungsmelder in dunklen Ecken</li>
        <li>Lichtschalter gut erreichbar, auch direkt am Bett</li>
      </ul>

      <h2>3. Haltegriffe und Hilfsmittel nutzen</h2>
      <ul>
        <li>Haltegriffe neben Toilette und Dusche</li>
        <li>Duschhocker oder Duschstuhl</li>
        <li>Erhöhter Toilettensitz, der das Aufstehen erleichtert</li>
      </ul>
      <p>
        Mit Pflegegrad kann die Pflegekasse Umbauten wie Haltegriffe oder eine bodengleiche Dusche
        bezuschussen. Fragen Sie vor dem Umbau nach.
      </p>

      <h2>4. Das richtige Schuhwerk</h2>
      <ul>
        <li>Feste Schuhe mit rutschfester Sohle, auch in der Wohnung</li>
        <li>Keine offenen Hausschuhe ohne Halt an der Ferse</li>
      </ul>

      <h2>5. Bewegung und Gleichgewicht</h2>
      <ul>
        <li>Regelmäßige Gleichgewichtsübungen, zum Beispiel in Kursen oder mit Physiotherapie</li>
        <li>Spaziergänge stärken Muskeln und Sicherheit beim Gehen</li>
        <li>Krankenkassen unterstützen häufig Präventionskurse – fragen Sie dort nach</li>
      </ul>

      <h2>6. Medikamente überprüfen lassen</h2>
      <p>
        Manche Medikamente können Schwindel oder Benommenheit auslösen, vor allem in Kombination.
        Lassen Sie Ihren Medikamentenplan regelmäßig in der Hausarztpraxis oder Apotheke prüfen.
      </p>

      <h2>7. Augen und Ohren prüfen lassen</h2>
      <p>
        Wer schlecht sieht oder hört, übersieht Hindernisse leichter. Regelmäßige Kontrollen und
        eine passende Brille oder ein Hörgerät helfen im Alltag.
      </p>

      <h2>Wie Alltagshilfe unterstützen kann</h2>
      <p>
        Eine <Link href="/leistungen">Alltagshilfe</Link> nimmt anstrengende Wege ab, trägt Einkäufe,
        begleitet zu Terminen und geht mit spazieren. Mit Pflegegrad kann dafür der{' '}
        <Link href="/blog/alltagshilfe-pflegegrad-entlastungsbetrag">Entlastungsbetrag</Link> genutzt
        werden.
      </p>
    </SeoBlogArticle>
  )
}
