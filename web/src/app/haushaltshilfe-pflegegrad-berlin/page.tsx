import { IntentLandingPage } from '@/app/components/sections/IntentLandingPage'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Haushaltshilfe mit Pflegegrad in Berlin | Morgenlicht',
  description:
    'Anerkannte Haushaltshilfe mit Pflegegrad in Berlin-Kreuzberg und Neukölln. Bis zu 131 € Entlastungsbetrag, 35,50 €/Std. und mögliche Direktabrechnung verständlich erklärt.',
  path: '/haushaltshilfe-pflegegrad-berlin',
})

export default function HaushaltshilfePflegegradBerlinPage() {
  return (
    <IntentLandingPage
      content={{
        slug: 'haushaltshilfe-pflegegrad-berlin',
        serviceName: 'Haushaltshilfe mit Pflegegrad in Berlin',
        kicker: 'Anerkannte Hilfe in Kreuzberg und Neukölln',
        h1: 'Haushaltshilfe mit Pflegegrad in Berlin – persönlich und transparent',
        intro:
          'Morgenlicht unterstützt ältere und pflegebedürftige Menschen bei Haushalt, Einkauf und alltäglichen Aufgaben. Wir klären vor Beginn, welche Hilfe gewünscht ist, welches Pflegekassen-Budget verfügbar ist und ob eine Direktabrechnung vereinbart werden kann.',
        trustPoints: [
          'Nach Berliner Landesrecht als Angebot nach § 45a SGB XI anerkannt',
          'Unterstützung in Berlin-Kreuzberg und Neukölln',
          'Deutsch, Türkisch und Englisch',
          'Stundensatz 35,50 € – zusätzliche Kosten nur nach vorheriger Absprache',
        ],
        benefitsTitle: 'Was gute Haushaltshilfe im Alltag leisten soll',
        benefitsIntro:
          'Es geht nicht nur um eine saubere Wohnung. Verlässliche Unterstützung soll den Alltag leichter machen und vorhandene Selbstständigkeit erhalten.',
        benefits: [
          {
            title: 'Verlässliche Absprachen',
            text: 'Aufgaben, Termine und Grenzen werden vor dem Einsatz gemeinsam besprochen. So wissen alle Beteiligten, was vereinbart ist.',
          },
          {
            title: 'Möglichst feste Bezugsperson',
            text: 'Die Einsatzplanung ist auf Kontinuität ausgerichtet, damit nicht ständig eine neue Person in die Wohnung kommt.',
          },
          {
            title: 'Hilfe auf Augenhöhe',
            text: 'Wir unterstützen dort, wo Hilfe gewünscht ist. Entscheidungen bleiben bei der Kundin oder dem Kunden.',
          },
        ],
        includedTitle: 'Typische Unterstützung im Haushalt',
        included: [
          'Wohnräume, Küche und Bad im vereinbarten Umfang reinigen',
          'Wäschepflege, Bettwäsche wechseln und Ordnung schaffen',
          'Einkäufe und Apothekengänge übernehmen oder begleiten',
          'Einfache Mahlzeiten gemeinsam vorbereiten',
          'Post und Termine im Alltag übersichtlich ordnen',
        ],
        boundariesTitle: 'Was vor Beginn geklärt wird',
        boundaries: [
          'Morgenlicht bietet keine medizinische Behandlungspflege.',
          'Der genaue Leistungsumfang richtet sich nach der Anerkennung, dem Bedarf und der persönlichen Vereinbarung.',
          'Zusätzliche Stunden außerhalb des vorhandenen Budgets werden nicht ohne vorherige Zustimmung durchgeführt.',
          'Ob ein Einsatz an der konkreten Adresse möglich ist, wird im Erstgespräch geprüft.',
        ],
        financeTitle: 'Bis zu 131 € Entlastungsbetrag: ungefähr 3,6 Stunden zum Stundensatz von 35,50 €',
        financeText:
          'Pflegebedürftige in häuslicher Pflege können bis zu 131 € monatlich als Entlastungsbetrag nutzen. Rechnerisch entsprechen 131 € bei 35,50 € pro Stunde rund 3,6 Stunden. Entscheidend sind das tatsächlich verfügbare Budget, die anerkannten Leistungen und die vereinbarte Abrechnung.',
        financeLinkLabel: 'Kosten und Pflegekassen-Abrechnung im Detail',
        processTitle: 'So starten Sie mit Morgenlicht',
        process: [
          {
            title: 'Rückruf anfragen',
            text: 'Name und Telefonnummer genügen. Angaben zu Pflegegrad und gewünschter Hilfe sind freiwillig.',
          },
          {
            title: 'Bedarf und Budget klären',
            text: 'Wir sprechen über Wohnort, gewünschte Aufgaben, Häufigkeit und vorhandene Unterlagen.',
          },
          {
            title: 'Einsatz vereinbaren',
            text: 'Erst wenn Umfang, Kosten und Abrechnung geklärt sind, wird die Unterstützung gemeinsam geplant.',
          },
        ],
        faqTitle: 'Häufige Fragen zur Haushaltshilfe mit Pflegegrad',
        faqs: [
          {
            question: 'Reicht Pflegegrad 1 für Haushaltshilfe über den Entlastungsbetrag?',
            answer:
              'Ja. Der Entlastungsbetrag steht Menschen mit Pflegegrad 1 bis 5 in häuslicher Pflege zur Verfügung. Er kann für nach Landesrecht anerkannte Angebote zur Unterstützung im Alltag genutzt werden.',
          },
          {
            question: 'Ist die Haushaltshilfe automatisch kostenlos?',
            answer:
              'Nein, nicht pauschal. Im Rahmen des tatsächlich verfügbaren Pflegekassen-Budgets kann die anerkannte Hilfe ohne Eigenanteil möglich sein. Leistungen außerhalb des Budgets können Kosten verursachen und werden vorher besprochen.',
          },
          {
            question: 'Muss ich die Rechnung zuerst selbst bezahlen?',
            answer:
              'Wenn Pflegegrad, Budget und erforderliche Unterlagen vorliegen, kann eine Direktabrechnung vereinbart werden. Ob das im Einzelfall möglich ist, klären wir vor Beginn.',
          },
          {
            question: 'In welchen Bezirken bietet Morgenlicht Haushaltshilfe an?',
            answer:
              'Der Schwerpunkt liegt auf Berlin-Kreuzberg und Neukölln. Bei angrenzenden Adressen prüfen wir die aktuelle Einsatzmöglichkeit im persönlichen Gespräch.',
          },
        ],
        relatedTitle: 'Passende Informationen und Leistungen',
        relatedLinks: [
          { href: '/berlin-kreuzberg', label: 'Haushaltshilfe in Kreuzberg' },
          { href: '/berlin-neukoelln', label: 'Haushaltshilfe in Neukölln' },
          { href: '/blog/alltagshilfe-pflegegrad-entlastungsbetrag', label: '131 € Entlastungsbetrag verstehen' },
          { href: '/tuerkischsprachige-alltagshilfe-berlin', label: 'Türkischsprachige Alltagshilfe' },
          { href: '/leistungen', label: 'Alle Leistungen von Morgenlicht' },
          { href: '/kontakt#rueckruf', label: 'Kostenfreien Rückruf anfragen' },
        ],
        ctaTitle: 'Passt die Haushaltshilfe zu Ihrer Situation?',
        ctaText:
          'Schildern Sie uns kurz, wo und wobei Unterstützung benötigt wird. Wir prüfen Einsatzgebiet, Budget und nächsten Schritt transparent.',
        ctaLabel: 'Kostenfreien Rückruf anfragen',
      }}
    />
  )
}
