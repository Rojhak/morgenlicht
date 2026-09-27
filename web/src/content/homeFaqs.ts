import type { QA } from '@/lib/schema'

export type HomeFaq = QA

export const homeFaqs: HomeFaq[] = [
  {
    question: 'Was bietet Morgenlicht Alltagshilfe an?',
    answer:
      'Morgenlicht unterstützt ältere und pflegebedürftige Menschen in Berlin-Kreuzberg und Neukölln bei Haushalt, Einkauf, Terminen, Alltagsorganisation und sozialer Teilhabe. Umfang, Häufigkeit und Grenzen werden vor Beginn persönlich vereinbart. Medizinische Behandlungspflege gehört nicht zum Angebot.',
  },
  {
    question: 'Kann ich den Entlastungsbetrag von 131 € für Morgenlicht nutzen?',
    answer:
      'Ja, wenn ein Pflegegrad von 1 bis 5 vorliegt und die Pflege zu Hause stattfindet. Morgenlicht ist als Angebot zur Unterstützung im Alltag nach § 45a SGB XI anerkannt, deshalb kann der Entlastungsbetrag von bis zu 131 € im Monat eingesetzt werden. Entscheidend ist das tatsächlich noch verfügbare Budget.',
  },
  {
    question: 'Wie viele Stunden Hilfe sind mit 131 € möglich?',
    answer:
      'Bei einem Stundensatz von 35,50 € entsprechen 131 € rechnerisch etwa 3 Stunden und 41 Minuten Unterstützung im Monat. Nicht genutzte Beträge werden in die Folgemonate übertragen und können bis zum 30. Juni des Folgejahres verwendet werden.',
  },
  {
    question: 'Ist eine Direktabrechnung mit der Pflegekasse möglich?',
    answer:
      'Wenn Pflegegrad, verfügbares Budget und die erforderlichen Unterlagen vorliegen, kann eine Direktabrechnung vereinbart werden. Dann müssen Sie für die anerkannten Leistungen im verfügbaren Budget nicht in Vorkasse gehen. Ob zusätzliche Kosten entstehen, klären wir vor dem ersten Einsatz.',
  },
  {
    question: 'Gibt es ab Pflegegrad 2 weitere Finanzierungsmöglichkeiten?',
    answer:
      'Bei Pflegegrad 2 bis 5 können bis zu 40 % eines nicht genutzten Betrags für ambulante Pflegesachleistungen für anerkannte Angebote zur Unterstützung im Alltag verwendet werden (Umwandlungsanspruch). Das ist keine pauschale Zusatzleistung: Die Pflegekasse rechnet individuell, und ein anteiliges Pflegegeld kann sich dadurch verringern.',
  },
  {
    question: 'Kommt möglichst dieselbe Bezugsperson?',
    answer:
      'Die Einsatzplanung ist auf Kontinuität ausgerichtet. Eine ausnahmslose Garantie ist wegen Krankheit, Urlaub und Kapazität nicht möglich. Änderungen werden möglichst früh besprochen.',
  },
  {
    question: 'In welchen Sprachen und Bezirken ist Morgenlicht tätig?',
    answer:
      'Der Schwerpunkt liegt auf Berlin-Kreuzberg und Neukölln. Beratung und Unterstützung sind auf Deutsch, Türkisch und Englisch möglich; die passende Sprach- und Terminkapazität wird bei der Anfrage geprüft.',
  },
]
