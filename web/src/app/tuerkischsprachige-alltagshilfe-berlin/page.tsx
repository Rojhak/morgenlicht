import { IntentLandingPage } from '@/app/components/sections/IntentLandingPage'
import { createPageMetadata } from '@/lib/seo'

const GERMAN_URL = 'https://www.morgenlicht-alltagshilfe.de/tuerkischsprachige-alltagshilfe-berlin'
const TURKISH_URL = 'https://www.morgenlicht-alltagshilfe.de/tr/berlin-yasli-gunluk-yasam-destegi'

export const metadata = createPageMetadata({
  title: 'Türkischsprachige Alltagshilfe Berlin | Morgenlicht',
  description:
    'Türkischsprachige Alltagshilfe für Senioren in Berlin-Kreuzberg und Neukölln. Haushalt, Einkauf und Begleitung persönlich anfragen.',
  path: '/tuerkischsprachige-alltagshilfe-berlin',
  languages: {
    'de-DE': GERMAN_URL,
    'tr-TR': TURKISH_URL,
    'x-default': GERMAN_URL,
  },
})

export default function TuerkischsprachigeAlltagshilfeBerlinPage() {
  return (
    <IntentLandingPage
      content={{
        slug: 'tuerkischsprachige-alltagshilfe-berlin',
        serviceName: 'Türkischsprachige Alltagshilfe in Berlin',
        kicker: 'Deutsch und Türkisch im persönlichen Gespräch',
        h1: 'Türkischsprachige Alltagshilfe für Senioren in Berlin',
        intro:
          'Morgenlicht unterstützt ältere und pflegebedürftige Menschen in Kreuzberg und Neukölln bei Haushalt, Einkauf, Terminen und sozialer Teilhabe. Beratung und Einsätze können auf Türkisch angefragt werden; die passende Sprach- und Terminkapazität prüfen wir vor der Vereinbarung.',
        trustPoints: [
          'Türkische Beratung ohne unnötige Fachbegriffe',
          'Einsatzschwerpunkt Kreuzberg und Neukölln',
          'Nach Berliner Landesrecht anerkanntes Angebot',
          'Aufgaben und Kosten werden vor Beginn besprochen',
        ],
        benefitsTitle: 'Unterstützung, die Sprache und Gewohnheiten berücksichtigt',
        benefitsIntro:
          'Gute Alltagshilfe beginnt mit Verstehen. Deshalb klären wir nicht nur Aufgaben, sondern auch Sprache, Routinen, persönliche Grenzen und den gewünschten Kontakt zu Angehörigen.',
        benefits: [
          {
            title: 'Verständliche Beratung',
            text: 'Pflegegrad, Entlastungsbetrag, mögliche Abrechnung und nächste Schritte werden auf Wunsch auf Türkisch erklärt.',
          },
          {
            title: 'Respekt für den Alltag',
            text: 'Essgewohnheiten, religiöse oder kulturelle Wünsche und persönliche Routinen werden erfragt und respektiert.',
          },
          {
            title: 'Möglichst vertraute Person',
            text: 'Die Einsatzplanung ist auf Kontinuität ausgerichtet. Urlaubs-, Krankheits- und Kapazitätsgrenzen werden offen besprochen.',
          },
        ],
        includedTitle: 'Mögliche Hilfe im Alltag',
        included: [
          'Unterstützung bei Reinigung, Wäsche und Ordnung',
          'Gemeinsamer Einkauf oder vereinbarte Besorgungen',
          'Begleitung zu Arzt-, Therapie- oder Behördenterminen',
          'Spaziergänge, Gespräche und gemeinsame Aktivitäten',
          'Hilfe beim Ordnen von Post und Terminen',
        ],
        boundariesTitle: 'Was vor dem Einsatz wichtig ist',
        boundaries: [
          'Türkischsprachige Unterstützung ist von der aktuellen Personal- und Terminkapazität abhängig.',
          'Morgenlicht bietet keine medizinische Behandlungspflege und keine vereidigte Übersetzung.',
          'Es wird nichts ohne Zustimmung der Kundin oder des Kunden organisiert.',
          'Leistungen außerhalb eines vorhandenen Pflegekassen-Budgets können Kosten verursachen und werden vorher vereinbart.',
        ],
        financeTitle: 'Entlastungsbetrag und Kosten verständlich klären',
        financeText:
          'Bei Pflegegrad 1 bis 5 können bis zu 131 € Entlastungsbetrag pro Monat für anerkannte Unterstützung im Alltag genutzt werden. Der Stundensatz beträgt 35,50 €. Ob Budget vorhanden ist und eine Direktabrechnung vereinbart werden kann, prüfen wir im Einzelfall.',
        financeLinkLabel: 'Kosten und Pflegekassen-Budget ansehen',
        processTitle: 'So fragen Sie türkischsprachige Hilfe an',
        process: [
          {
            title: 'Rückruf wünschen',
            text: 'Name und Telefonnummer genügen. Schreiben Sie gern „Türkisch“ in das freiwillige Nachrichtenfeld.',
          },
          {
            title: 'Situation besprechen',
            text: 'Wir klären Wohnort, gewünschte Aufgaben, Pflegegrad, Budget und Sprachwunsch.',
          },
          {
            title: 'Einsatz transparent planen',
            text: 'Erst nach der Klärung von Person, Termin, Umfang und Kosten wird die Unterstützung vereinbart.',
          },
        ],
        faqTitle: 'Häufige Fragen zur türkischsprachigen Alltagshilfe',
        faqs: [
          {
            question: 'Ist bei jedem Termin eine türkischsprachige Person verfügbar?',
            answer:
              'Das kann nicht pauschal garantiert werden. Sprachwunsch, Bezirk, Termin und gewünschte Leistung werden gemeinsam geprüft, bevor etwas vereinbart wird.',
          },
          {
            question: 'Können Angehörige am Erstgespräch teilnehmen?',
            answer:
              'Ja, wenn die unterstützte Person das wünscht. Ihre Entscheidungen und ihre Zustimmung bleiben dabei maßgeblich.',
          },
          {
            question: 'Kann Morgenlicht medizinische Gespräche übersetzen?',
            answer:
              'Morgenlicht kann organisatorisch begleiten und sprachlich im Alltag unterstützen, bietet aber keine vereidigte Fachübersetzung und keine medizinische Beratung.',
          },
          {
            question: 'Welche Berliner Bezirke werden bedient?',
            answer:
              'Der aktuelle Schwerpunkt liegt auf Kreuzberg und Neukölln. Die konkrete Adresse und verfügbare Kapazität werden bei der Anfrage geprüft.',
          },
        ],
        relatedTitle: 'Weitere hilfreiche Seiten',
        relatedLinks: [
          { href: '/tr/berlin-yasli-gunluk-yasam-destegi', label: 'Diese Seite auf Türkisch lesen' },
          { href: '/haushaltshilfe-pflegegrad-berlin', label: 'Haushaltshilfe mit Pflegegrad' },
          { href: '/arztbegleitung-senioren-berlin', label: 'Begleitung zu Arztterminen' },
          { href: '/berlin-kreuzberg', label: 'Alltagshilfe in Kreuzberg' },
          { href: '/berlin-neukoelln', label: 'Alltagshilfe in Neukölln' },
          { href: '/kontakt#rueckruf', label: 'Türkischen Rückruf anfragen' },
        ],
        ctaTitle: 'Möchten Sie auf Türkisch zurückgerufen werden?',
        ctaText:
          'Teilen Sie uns Name und Telefonnummer mit. Wir prüfen Sprachkapazität, Einsatzgebiet und den passenden nächsten Schritt.',
        ctaLabel: 'Türkischen Rückruf anfragen',
      }}
    />
  )
}
