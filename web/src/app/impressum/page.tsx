import { Metadata } from 'next'
import { GlassCard } from '../components/glass'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und rechtliche Informationen der Morgenlicht Alltagshilfe.',
}

export default function ImpressumPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-[#37474F] mb-8">Impressum</h1>

        <GlassCard className="p-8">
          <div className="prose prose-lg text-[#37474F]">
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              Morgenlicht Alltagshilfe<br />
              [Straße und Hausnummer]<br />
              [PLZ] Frankfurt am Main
            </p>

            <h2>Kontakt</h2>
            <p>
              Telefon: 069 12345678<br />
              E-Mail: info@morgenlicht-alltagshilfe.de
            </p>

            <h2>Vertreten durch</h2>
            <p>
              [Geschäftsführer/in Name]
            </p>

            <h2>Registereintrag</h2>
            <p>
              Eintragung im Handelsregister.<br />
              Registergericht: Amtsgericht Frankfurt am Main<br />
              Registernummer: [HRB XXXXX]
            </p>

            <h2>Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE [XXX XXX XXX]
            </p>

            <h2>Aufsichtsbehörde</h2>
            <p>
              Zuständige Aufsichtsbehörde für die Anerkennung nach § 45a SGB XI:<br />
              [Zuständige Behörde]<br />
              [Adresse der Behörde]
            </p>

            <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p>
              Anerkannter Anbieter von Angeboten zur Unterstützung im Alltag nach § 45a SGB XI<br />
              Verliehen in: Deutschland
            </p>

            <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              [Name]<br />
              [Adresse]
            </p>

            <h2>Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit: https://ec.europa.eu/consumers/odr/
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2>Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind
              wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte
              fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>

            <h2>Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
              Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich.
            </p>

            <h2>Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
