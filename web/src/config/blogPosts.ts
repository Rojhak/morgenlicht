export interface BlogPostSummary {
  slug: string
  title: string
  excerpt: string
  date: string
  modified: string
  tags: string[]
}

export const blogPosts: BlogPostSummary[] = [
  {
    slug: 'haushaltshilfe-kreuzberg-neukoelln',
    title: 'Haushaltshilfe in Kreuzberg und Neukölln: Kosten, Pflegekasse und Leistungen',
    excerpt:
      'Welche Haushaltshilfe es in Kreuzberg und Neukölln gibt, was die Pflegekasse übernimmt und woran Sie einen anerkannten Anbieter erkennen.',
    date: '2026-07-11',
    modified: '2026-07-11',
    tags: ['haushaltshilfe', 'kreuzberg', 'neukölln'],
  },
  {
    slug: 'alltagshilfe-oder-haushaltshilfe-unterschied',
    title: 'Alltagshilfe oder Haushaltshilfe: Was ist der Unterschied?',
    excerpt:
      'Haushaltshilfe, Alltagshilfe und Pflegedienst werden oft verwechselt. Wir erklären verständlich, welche Unterstützung zu Ihrer Situation passt.',
    date: '2026-07-11',
    modified: '2026-07-11',
    tags: ['alltagshilfe', 'haushaltshilfe', 'pflegekasse'],
  },
  {
    slug: 'seniorenhilfe-zuhause-berlin',
    title: 'Seniorenhilfe zu Hause in Berlin: Welche Unterstützung passt?',
    excerpt:
      'Von Einkaufshilfe bis Begleitung: Dieser Ratgeber zeigt, welche Unterstützung ältere Menschen zu Hause entlastet und wie Familien Hilfe organisieren.',
    date: '2026-07-11',
    modified: '2026-07-11',
    tags: ['seniorenhilfe', 'berlin', 'unterstützung'],
  },
  {
    slug: 'haushaltshilfe-pflegegrad-pflegekasse',
    title: 'Haushaltshilfe bei Pflegegrad: Was zahlt die Pflegekasse?',
    excerpt:
      'Wann die Pflegekasse eine Haushaltshilfe bezahlt, welche Aufgaben dazugehören und warum der Anbieter anerkannt sein muss.',
    date: '2026-05-08',
    modified: '2026-09-26',
    tags: ['haushaltshilfe', 'pflegekasse', 'pflegegrad'],
  },
  {
    slug: 'pflegegrad-1-hilfe-leistungen',
    title: 'Pflegegrad 1: Welche Hilfe steht Ihnen zu?',
    excerpt:
      'Auch mit Pflegegrad 1 gibt es Unterstützung: vor allem den Entlastungsbetrag von bis zu 131 € im Monat. Einfach erklärt mit den nächsten Schritten.',
    date: '2026-05-08',
    modified: '2026-09-26',
    tags: ['pflegegrad-1', 'entlastungsbetrag', 'alltagshilfe'],
  },
  {
    slug: 'direktabrechnung-pflegekasse-ohne-vorkasse',
    title: 'Direktabrechnung mit der Pflegekasse: Alltagshilfe ohne Vorkasse',
    excerpt:
      'Wie die Direktabrechnung funktioniert, welche Voraussetzungen gelten und wann trotzdem Kosten entstehen.',
    date: '2026-05-08',
    modified: '2026-09-26',
    tags: ['direktabrechnung', 'pflegekasse', 'alltagshilfe'],
  },
  {
    slug: 'alltagshilfe-pflegegrad-entlastungsbetrag',
    title: 'Alltagshilfe bei Pflegegrad: 131 € Entlastungsbetrag richtig nutzen',
    excerpt:
      'Viele Menschen mit Pflegegrad nutzen den Entlastungsbetrag nicht, obwohl ihnen monatlich bis zu 131 € für Alltagshilfe zustehen. Anspruch, Leistungen und Abrechnung einfach erklärt.',
    date: '2026-05-06',
    modified: '2026-09-26',
    tags: ['entlastungsbetrag', 'alltagshilfe', 'pflegekasse'],
  },
  {
    slug: 'pflegegrad-beantragen-schritt-fuer-schritt',
    title: 'Pflegegrad beantragen: Schritt für Schritt erklärt',
    excerpt:
      'Antrag bei der Pflegekasse, Hilfebedarf sammeln, Begutachtung vorbereiten, Bescheid prüfen – mit Fristen und Tipps für Angehörige.',
    date: '2026-01-05',
    modified: '2026-09-26',
    tags: ['rechtliches', 'pflege-tipps'],
  },
  {
    slug: 'sturzpraevention-im-alltag',
    title: 'Sturzprävention im Alltag: 7 einfache Tipps für mehr Sicherheit zu Hause',
    excerpt:
      'Stolperfallen, Licht, Haltegriffe, Schuhe, Bewegung, Medikamente und Sehen: eine Checkliste für eine sicherere Wohnung.',
    date: '2025-12-28',
    modified: '2026-09-26',
    tags: ['pflege-tipps', 'alltagshilfe'],
  },
]

export const blogTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)))
