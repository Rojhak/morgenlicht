import { IntentLandingPage } from '@/app/components/sections/IntentLandingPage'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Soziale Begleitung für Senioren in Berlin | Morgenlicht',
  description:
    'Gesellschaft, Spaziergänge und Alltagsbegleitung für Senioren in Berlin-Kreuzberg und Neukölln. Persönlich, mehrsprachig und nach Absprache.',
  path: '/soziale-begleitung-senioren-berlin',
})

export default function SozialeBegleitungSeniorenBerlinPage() {
  return (
    <IntentLandingPage
      content={{
        slug: 'soziale-begleitung-senioren-berlin',
        serviceName: 'Soziale Begleitung für Senioren in Berlin',
        kicker: 'Zeit für Gespräche und gemeinsame Aktivitäten',
        h1: 'Soziale Begleitung für Senioren in Berlin – damit Alltag gemeinsam leichter wird',
        intro:
          'Morgenlicht begleitet ältere Menschen in Kreuzberg und Neukölln bei Spaziergängen, kleinen Unternehmungen und alltäglichen Wegen. Im Mittelpunkt stehen persönliche Wünsche, vertraute Abläufe und Begegnung auf Augenhöhe.',
        trustPoints: [
          'Aktivitäten nur nach persönlicher Zustimmung',
          'Möglichst bekannte Bezugsperson',
          'Deutsch, Türkisch und Englisch',
          'Angehörige können nach Zustimmung eine direkte Ansprechpartnerin einbeziehen',
        ],
        benefitsTitle: 'Begleitung, die zur Person passt',
        benefitsIntro:
          'Nicht jeder Mensch wünscht dieselbe Art von Gesellschaft. Deshalb wird gemeinsam besprochen, was guttut und was ausdrücklich nicht gewünscht ist.',
        benefits: [
          {
            title: 'Vertraute Gespräche',
            text: 'Zuhören, erzählen und gemeinsam Zeit verbringen – ohne Zeitdruck und ohne anonyme Plattform.',
          },
          {
            title: 'Gemeinsam aktiv bleiben',
            text: 'Spaziergänge, Einkäufe oder ein Cafébesuch können Struktur geben und soziale Teilhabe erleichtern.',
          },
          {
            title: 'Angehörige entlasten',
            text: 'Regelmäßige, klar vereinbarte Begleitung schafft verlässliche Zeitfenster für Familien und Pflegepersonen.',
          },
        ],
        includedTitle: 'Beispiele für soziale Alltagsbegleitung',
        included: [
          'Gespräche und gemeinsame Beschäftigung zu Hause',
          'Spaziergänge und kleine Wege im vertrauten Kiez',
          'Gemeinsame Einkäufe oder Cafébesuche',
          'Begleitung zu Seniorentreffs und kulturellen Angeboten',
          'Unterstützung bei Telefonaten, Post und digitalen Alltagsfragen',
        ],
        boundariesTitle: 'Selbstbestimmung bleibt der Maßstab',
        boundaries: [
          'Es wird nichts ohne Zustimmung organisiert oder an Dritte weitergegeben.',
          'Soziale Begleitung ersetzt keine Psychotherapie, medizinische Pflege oder Krisenhilfe.',
          'Aktivitäten, Wege und mögliche Ausgaben werden vorher vereinbart.',
          'Bei akuten Notfällen sind Rettungsdienst oder ärztliche Hilfe zuständig.',
        ],
        financeTitle: 'Alltagsbegleitung über den Entlastungsbetrag nutzen',
        financeText:
          'Pflegebedürftige in häuslicher Pflege können bis zu 131 € monatlich für qualitätsgesicherte Entlastungsleistungen einsetzen. Als nach Landesrecht anerkanntes Angebot kann Morgenlicht bei erfüllten Voraussetzungen über vorhandenes Budget finanziert werden.',
        financeLinkLabel: '131 € Entlastungsbetrag und Kosten verstehen',
        processTitle: 'So finden wir eine passende Begleitung',
        process: [
          {
            title: 'Wünsche kennenlernen',
            text: 'Wir fragen, welche Aktivitäten, Sprache, Gewohnheiten und Grenzen wichtig sind.',
          },
          {
            title: 'Rahmen vereinbaren',
            text: 'Häufigkeit, Dauer, Bezugsperson, Budget und Kontaktweg werden transparent besprochen.',
          },
          {
            title: 'Behutsam starten',
            text: 'Der erste Einsatz dient auch dem Kennenlernen. Anpassungen erfolgen gemeinsam.',
          },
        ],
        faqTitle: 'Häufige Fragen zur sozialen Begleitung',
        faqs: [
          {
            question: 'Ist soziale Begleitung nur für alleinlebende Menschen gedacht?',
            answer:
              'Nein. Auch Menschen, die mit Angehörigen leben, können sich zusätzliche Gespräche, Spaziergänge oder gemeinsame Aktivitäten wünschen.',
          },
          {
            question: 'Kann immer dieselbe Person kommen?',
            answer:
              'Die Planung ist auf möglichst feste Bezugspersonen ausgerichtet. Eine ausnahmslose Garantie ist wegen Urlaub, Krankheit oder Kapazität nicht möglich; Änderungen werden so früh wie möglich besprochen.',
          },
          {
            question: 'Bestimmt Morgenlicht, welche Aktivitäten gemacht werden?',
            answer:
              'Nein. Wünsche und Grenzen der Kundin oder des Kunden sind maßgeblich. Vorschläge werden nur gemacht und erst nach Zustimmung umgesetzt.',
          },
          {
            question: 'Kann die Pflegekasse die Begleitung bezahlen?',
            answer:
              'Das kann über den Entlastungsbetrag oder ein anderes tatsächlich verfügbares Budget möglich sein. Pflegegrad, anerkannte Leistung und Abrechnungsweg werden vorher geprüft.',
          },
        ],
        relatedTitle: 'Passende Seiten für Ihre Situation',
        relatedLinks: [
          { href: '/arztbegleitung-senioren-berlin', label: 'Begleitung zu Arztterminen' },
          { href: '/haushaltshilfe-pflegegrad-berlin', label: 'Haushaltshilfe mit Pflegegrad' },
          { href: '/tuerkischsprachige-alltagshilfe-berlin', label: 'Türkischsprachige Unterstützung' },
          { href: '/berlin-kreuzberg', label: 'Alltagshilfe in Kreuzberg' },
          { href: '/berlin-neukoelln', label: 'Alltagshilfe in Neukölln' },
          { href: '/kontakt#rueckruf', label: 'Persönliche Begleitung anfragen' },
        ],
        ctaTitle: 'Welche Begleitung würde Ihren Alltag erleichtern?',
        ctaText:
          'Ein kurzer Rückruf genügt, um Wünsche, Einsatzgebiet und mögliche Finanzierung gemeinsam zu klären.',
        ctaLabel: 'Kostenfreien Rückruf anfragen',
      }}
    />
  )
}
