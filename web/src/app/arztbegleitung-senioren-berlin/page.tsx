import { IntentLandingPage } from '@/app/components/sections/IntentLandingPage'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Arztbegleitung für Senioren in Berlin | Morgenlicht',
  description:
    'Persönliche Begleitung zu Arztterminen für Senioren in Berlin-Kreuzberg und Neukölln. Auf Wunsch auf Deutsch, Türkisch oder Englisch.',
  path: '/arztbegleitung-senioren-berlin',
})

export default function ArztbegleitungSeniorenBerlinPage() {
  return (
    <IntentLandingPage
      content={{
        slug: 'arztbegleitung-senioren-berlin',
        serviceName: 'Arztbegleitung für Senioren in Berlin',
        kicker: 'Sicherer und ruhiger zum Termin',
        h1: 'Arztbegleitung für Senioren in Berlin-Kreuzberg und Neukölln',
        intro:
          'Ein Arzttermin kann anstrengend sein – besonders wenn der Weg, das Warten oder viele Informationen allein bewältigt werden müssen. Morgenlicht begleitet auf Wunsch persönlich und hilft dabei, den Termin im Alltag gut zu organisieren.',
        trustPoints: [
          'Begleitung nach persönlicher Absprache',
          'Deutsch, Türkisch und Englisch',
          'Möglichst vertraute Bezugsperson',
          'Keine medizinischen Entscheidungen über den Kopf des Kunden hinweg',
        ],
        benefitsTitle: 'Was eine persönliche Terminbegleitung erleichtert',
        benefitsIntro:
          'Die Begleitperson ersetzt keine medizinische Fachkraft. Sie gibt praktische Sicherheit und hilft, dass die Kundin oder der Kunde selbstbestimmt am Termin teilnehmen kann.',
        benefits: [
          {
            title: 'Ruhige Vorbereitung',
            text: 'Termin, Adresse, Unterlagen und gewünschte Unterstützung werden vorher gemeinsam besprochen.',
          },
          {
            title: 'Begleitung vor Ort',
            text: 'Wir begleiten zum vereinbarten Termin, warten mit und unterstützen bei der Orientierung in Praxis oder Einrichtung.',
          },
          {
            title: 'Überblick danach',
            text: 'Auf Wunsch helfen wir, mitgegebene Unterlagen und nächste Termine geordnet abzulegen – ohne medizinische Bewertung.',
          },
        ],
        includedTitle: 'Mögliche Unterstützung rund um den Termin',
        included: [
          'Termin und benötigte Unterlagen gemeinsam vorbereiten',
          'Begleitung zu Arztpraxis, Therapie oder Behörde',
          'Unterstützung bei Anmeldung, Warten und Orientierung',
          'Auf Wunsch wichtige organisatorische Hinweise notieren',
          'Folgetermine und Unterlagen im Alltag ordnen',
        ],
        boundariesTitle: 'Klare Grenzen schaffen Sicherheit',
        boundaries: [
          'Morgenlicht gibt keine medizinische, rechtliche oder pflegerische Fachberatung.',
          'Diagnosen, Behandlungen und Einwilligungen bespricht die Kundin oder der Kunde mit dem medizinischen Fachpersonal.',
          'Eine Dolmetsch- oder Übersetzungsleistung wird nicht als vereidigte Fachübersetzung angeboten.',
          'Transport, Wartezeit und Rückweg werden vor dem Termin konkret vereinbart.',
        ],
        financeTitle: 'Kann die Pflegekasse eine Arztbegleitung finanzieren?',
        financeText:
          'Begleitung kann als anerkannte Unterstützung im Alltag über vorhandenes Pflegekassen-Budget finanzierbar sein. Ob der Entlastungsbetrag genutzt und eine Direktabrechnung vereinbart werden kann, hängt von Pflegegrad, Budget, Unterlagen und konkreter Leistung ab.',
        financeLinkLabel: 'Finanzierung und Stundensatz prüfen',
        processTitle: 'So planen wir die Begleitung',
        process: [
          {
            title: 'Termin nennen',
            text: 'Teilen Sie uns Datum, Ort, ungefähre Dauer und gewünschte Unterstützung mit.',
          },
          {
            title: 'Machbarkeit klären',
            text: 'Wir prüfen Einsatzgebiet, Kapazität, Weg, Budget und den genauen Auftrag.',
          },
          {
            title: 'Begleitung vereinbaren',
            text: 'Sie erhalten eine klare Absprache zu Treffpunkt, Umfang und möglichen Kosten.',
          },
        ],
        faqTitle: 'Häufige Fragen zur Arztbegleitung',
        faqs: [
          {
            question: 'Spricht die Begleitperson für mich mit der Ärztin oder dem Arzt?',
            answer:
              'Nur soweit Sie das ausdrücklich wünschen. Entscheidungen und medizinische Gespräche bleiben bei Ihnen und dem behandelnden Fachpersonal. Die Begleitung kann organisatorisch unterstützen.',
          },
          {
            question: 'Kann eine türkischsprachige Begleitung angefragt werden?',
            answer:
              'Ja. Morgenlicht bietet Beratung und Unterstützung auf Deutsch, Türkisch und Englisch an. Ob zum gewünschten Termin eine passende Person verfügbar ist, wird vorher geprüft.',
          },
          {
            question: 'Begleitet Morgenlicht auch zu Behörden oder Therapieterminen?',
            answer:
              'Begleitungen zu Behörden und anderen vereinbarten Terminen gehören ebenfalls zum Angebot. Der konkrete Auftrag und die verfügbare Kapazität werden vorab geklärt.',
          },
          {
            question: 'In welchen Teilen Berlins ist eine Begleitung möglich?',
            answer:
              'Der Schwerpunkt liegt auf Kreuzberg und Neukölln. Startpunkt, Ziel und Dauer müssen in der Einsatzplanung zusammenpassen.',
          },
        ],
        relatedTitle: 'Weitere Unterstützung von Morgenlicht',
        relatedLinks: [
          { href: '/soziale-begleitung-senioren-berlin', label: 'Soziale Begleitung für Senioren' },
          { href: '/haushaltshilfe-pflegegrad-berlin', label: 'Haushaltshilfe mit Pflegegrad' },
          { href: '/tuerkischsprachige-alltagshilfe-berlin', label: 'Türkischsprachige Alltagshilfe' },
          { href: '/leistungen', label: 'Alle Leistungen im Überblick' },
          { href: '/kosten', label: 'Kosten und Pflegekasse' },
          { href: '/kontakt', label: 'Begleitung unverbindlich anfragen' },
        ],
        ctaTitle: 'Sie wünschen Begleitung zu einem Termin?',
        ctaText:
          'Nennen Sie uns Termin, Bezirk und gewünschte Unterstützung. Wir prüfen gemeinsam, was konkret möglich ist.',
        ctaLabel: 'Begleitung unverbindlich anfragen',
      }}
    />
  )
}
