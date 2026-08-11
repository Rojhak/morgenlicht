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
      'Viele Familien wissen nicht, welche Hilfe im Haushalt über Pflegeleistungen möglich ist. Der Beitrag erklärt Entlastungsbetrag, anerkannte Anbieter und direkte Abrechnung.',
    date: '2026-05-08',
    modified: '2026-05-08',
    tags: ['haushaltshilfe', 'pflegekasse', 'pflegegrad'],
  },
  {
    slug: 'pflegegrad-1-hilfe-leistungen',
    title: 'Pflegegrad 1: Welche Hilfe steht Ihnen zu?',
    excerpt:
      'Auch mit Pflegegrad 1 gibt es bereits Unterstützung. Einfach erklärt: Entlastungsbetrag, Beratung, Alltagshilfe und wichtige nächste Schritte.',
    date: '2026-05-08',
    modified: '2026-05-08',
    tags: ['pflegegrad-1', 'entlastungsbetrag', 'alltagshilfe'],
  },
  {
    slug: 'direktabrechnung-pflegekasse-ohne-vorkasse',
    title: 'Direktabrechnung mit der Pflegekasse: Alltagshilfe ohne Vorkasse',
    excerpt:
      'So funktioniert die Abrechnung direkt mit der Pflegekasse: weniger Papierkram, keine Vorkasse und klare Schritte für Angehörige.',
    date: '2026-05-08',
    modified: '2026-05-08',
    tags: ['direktabrechnung', 'pflegekasse', 'alltagshilfe'],
  },
  {
    slug: 'alltagshilfe-pflegegrad-entlastungsbetrag',
    title: 'Alltagshilfe bei Pflegegrad: 131 € Entlastungsbetrag richtig nutzen',
    excerpt:
      'Viele Menschen mit Pflegegrad nutzen den Entlastungsbetrag nicht, obwohl ihnen monatlich 131 € für Alltagshilfe zustehen. Einfach erklärt: Anspruch, Leistungen und Abrechnung mit der Pflegekasse.',
    date: '2026-05-06',
    modified: '2026-05-06',
    tags: ['entlastungsbetrag', 'alltagshilfe', 'pflegekasse'],
  },
  {
    slug: 'pflegegrad-beantragen-schritt-fuer-schritt',
    title: 'Pflegegrad beantragen: Schritt für Schritt zum Erfolg',
    excerpt:
      'Der Weg zum Pflegegrad kann kompliziert erscheinen. Mit unserer Anleitung meistern Sie den Antrag problemlos.',
    date: '2026-01-05',
    modified: '2026-05-06',
    tags: ['rechtliches', 'pflege-tipps'],
  },
  {
    slug: 'sturzpraevention-im-alltag',
    title: 'Sturzprävention im Alltag: 7 einfache Tipps für mehr Sicherheit',
    excerpt:
      'Stürze sind eine der häufigsten Unfallursachen im Alter. Mit diesen Tipps machen Sie Ihr Zuhause sicherer.',
    date: '2025-12-28',
    modified: '2026-05-08',
    tags: ['pflege-tipps', 'alltagshilfe'],
  },
]

export const blogTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)))
