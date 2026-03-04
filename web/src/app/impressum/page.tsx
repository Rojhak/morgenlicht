'use client'

import { GlassCard } from '../components/glass'


export default function ImpressumPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-white">
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block px-5 py-2 bg-white border border-[#144E41]/20 rounded-xl text-sm font-bold font-heading text-[#144E41] mb-6">
            Gesetzliche Angaben
          </span>
          <h1 className="text-5xl font-bold font-heading text-[#144E41] mb-8 tracking-tight">
            Impressum
          </h1>
          <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            Informationen über den Diensteanbieter und die Verantwortlichkeiten dieser Website.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-4 bg-[#F7F6F3]">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-8 md:p-12 bg-white/80 backdrop-blur-sm">
            <div className="space-y-12 text-[#455A64]">
              {/* Angaben gemäß § 5 TMG */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold font-heading text-[#144E41]">Angaben gemäß § 5 TMG</h2>
                <div className="bg-[#FAF9F6] p-6 rounded-xl border border-[#144E41]/10 shadow-sm text-[#144E41]">
                  <p className="font-bold text-lg mb-2">Morgenlicht Alltagshilfe Berlin UG (haftungsbeschränkt)</p>
                  <p className="font-body">3. Hof, Aufgang links, 1. OG</p>
                  <p className="font-body">Urbanstr. 71</p>
                  <p className="font-body">10967 Berlin</p>
                </div>
              </div>

              {/* Kontakt */}
              <div className="space-y-6 border-t border-[#144E41]/10 pt-12">
                <h2 className="text-2xl font-bold font-heading text-[#144E41]">Kontakt</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-[#144E41] w-20">Telefon:</span>
                    <p className="font-body">030 235 930 28</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-[#144E41] w-20">E-Mail:</span>
                    <p className="font-body">info@morgenlicht-alltagshilfe.de</p>
                  </div>
                </div>
              </div>

              {/* Vertreten durch */}
              <div className="space-y-6 border-t border-[#144E41]/10 pt-12">
                <h2 className="text-2xl font-bold font-heading text-[#144E41]">Vertreten durch</h2>
                <p className="text-lg font-body leading-relaxed">
                  [Geschäftsführer/in Name]
                </p>
              </div>

              {/* Registereintrag */}
              <div className="space-y-6 border-t border-[#144E41]/10 pt-12">
                <h2 className="text-2xl font-bold font-heading text-[#144E41]">Registereintrag</h2>
                <div className="space-y-2">
                  <p className="font-body leading-relaxed">Eintragung im Handelsregister.</p>
                  <p className="font-body leading-relaxed">Registergericht: Amtsgericht Frankfurt am Main</p>
                  <p className="font-body leading-relaxed">Registernummer: [HRB XXXXX]</p>
                </div>
              </div>

              {/* Umsatzsteuer-ID */}
              <div className="space-y-6 border-t border-[#144E41]/10 pt-12">
                <h2 className="text-2xl font-bold font-heading text-[#144E41]">Umsatzsteuer-ID</h2>
                <p className="text-lg font-body leading-relaxed">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  <span className="font-bold">DE [XXX XXX XXX]</span>
                </p>
              </div>

              {/* Aufsichtsbehörde */}
              <div className="space-y-6 border-t border-[#144E41]/10 pt-12">
                <h2 className="text-2xl font-bold font-heading text-[#144E41]">Aufsichtsbehörde</h2>
                <p className="font-body leading-relaxed">
                  Zuständige Aufsichtsbehörde für die Anerkennung nach § 45a SGB XI:
                </p>
                <div className="bg-[#FAF9F6] p-6 rounded-xl border border-[#144E41]/10 shadow-sm">
                  <p className="font-bold text-[#144E41]">[Zuständige Behörde]</p>
                  <p className="font-body">[Adresse der Behörde]</p>
                </div>
              </div>

              {/* Streitschlichtung */}
              <div className="space-y-6 border-t border-[#144E41]/10 pt-12">
                <h2 className="text-2xl font-bold font-heading text-[#144E41]">Streitschlichtung</h2>
                <p className="text-lg font-body leading-relaxed">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                  <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#144E41] font-bold underline ml-1">
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="text-lg font-body leading-relaxed italic">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>

              {/* Haftungshinweise */}
              <div className="space-y-8 border-t border-[#144E41]/10 pt-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold font-heading text-[#144E41]">Haftung für Inhalte</h3>
                  <p className="text-lg font-body leading-relaxed">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold font-heading text-[#144E41]">Haftung für Links</h3>
                  <p className="text-lg font-body leading-relaxed">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold font-heading text-[#144E41]">Urheberrecht</h3>
                  <p className="text-lg font-body leading-relaxed">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  )
}
