import { PageHero } from '../components/site/PageHero'
import { createPageMetadata } from '@/lib/seo'
import { Scale, MapPin, Mail, Phone, FileText, ShieldAlert } from 'lucide-react'


export const metadata = createPageMetadata({
  title: 'Impressum | Morgenlicht Alltagshilfe Berlin',
  description: 'Impressum der Morgenlicht Alltagshilfe Berlin UG (haftungsbeschränkt): Anschrift, Kontakt, Handelsregister, Institutionskennzeichen, Aufsichtsbehörde.',
  path: '/impressum',
})

export default function ImpressumPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        crumbs={[{ name: 'Impressum', href: '/impressum' }]}
        kicker="Rechtliches"
        title="Impressum"
        lead={<p>Angaben zum Anbieter dieser Website nach § 5 DDG.</p>}
      />

      {/* Content Section */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div>
            <div className="rounded-2xl border border-line bg-white p-6 md:p-12">
              <div className="space-y-12 text-ink">
              {/* 1. Angaben gemäß § 5 DDG */}
              <div className="space-y-10">
                <div className="space-y-8">
                  {/* Main Headline */}
                  <h2 className="text-2xl font-bold font-heading text-forest">
                    Angaben gemäß § 5 DDG
                  </h2>

                  {/* Company Name as Sub-Headline */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold font-heading text-forest">
                      Morgenlicht Alltagshilfe Berlin UG (haftungsbeschränkt)
                    </h3>

                    {/* CEO Row */}
                    <div>
                      <p className="text-lg text-ink font-body">
                        <span className="font-bold text-forest mr-1">Geschäftsführerin:</span> Asiye Duman
                      </p>
                    </div>

                    {/* Location Row */}
                    <div className="flex items-start">
                      <div className="text-lg text-ink font-body -mt-0.5">
                        <p>
                          <span className="font-bold text-forest mr-1">Geschäftsanschrift:</span>
                          Urbanstraße 71, 10967 Berlin
                        </p>
                        <p className="mt-1">Kein Kundenempfang</p>
                      </div>
                    </div>

                    {/* Contact Row */}
                    <div className="flex items-start">
                      <div className="text-lg text-ink font-body space-y-2 -mt-0.5">
                        <p>
                          <span className="font-bold text-forest mr-1">Telefon:</span> 030 235 930 28
                        </p>
                        <p>
                          <span className="font-bold text-forest mr-1">Fax:</span> 030 530 59 389
                        </p>
                        <p>
                          <span className="font-bold text-forest mr-1">E-Mail:</span> info@morgenlicht-alltagshilfe.de
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Register */}
              <div className="space-y-4 border-t border-line pt-12">
                <h3 className="text-xl font-bold font-heading text-forest">Registereintrag</h3>
                <div className="text-lg font-body space-y-2">
                  <p>Registergericht: Amtsgericht Charlottenburg</p>
                  <p>Sitz der Gesellschaft: Berlin</p>
                  <p>Registernummer: HRB 283117 B</p>
                  <p>Institutionskennzeichen (IK): 461144697</p>
                </div>
              </div>

              {/* 4. Aufsichtsbehörde */}
              <div className="space-y-6 border-t border-line pt-12">
                <h2 className="text-2xl font-bold font-heading text-forest">Zuständige Aufsichtsbehörde</h2>
                <div className="">
                  <p className="text-lg font-bold">Senatsverwaltung für Wissenschaft, Gesundheit und Pflege</p>
                  <p className="text-lg font-medium text-forest mb-2 tracking-tight">Abteilung Pflege</p>
                  <div className="text-lg text-muted space-y-1">
                    <p>Oranienstr. 106, 10969 Berlin</p>
                    <p>Website: <a href="https://www.berlin.de/sen/wgp/" target="_blank" rel="noopener noreferrer" className="break-all text-forest underline">https://www.berlin.de/sen/wgp/</a></p>
                  </div>
                </div>
              </div>

              {/* 5. Streitschlichtung */}
              <div className="space-y-6 border-t border-line pt-12">
                <div className="flex items-center gap-3">
                  <Scale className="w-6 h-6 text-forest" />
                  <h2 className="text-2xl font-bold font-heading text-forest">Streitschlichtung</h2>
                </div>
                <p className="text-lg font-body leading-relaxed">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                  <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="ml-1 break-all font-bold text-forest underline">
                    https://ec.europa.eu/consumers/odr
                  </a>.
                </p>
                <p className="text-lg font-body italic flex gap-4 items-start p-6 bg-orange-50/30 rounded-lg text-orange-950/80 border border-orange-100/50">
                  <ShieldAlert className="w-6 h-6 shrink-0 mt-0.5 opacity-60" />
                  <span>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</span>
                </p>
              </div>

              {/* Haftungshinweise */}
              <div className="space-y-10 border-t border-line pt-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-heading text-forest">Haftung für Inhalte</h3>
                  <p className="text-lg font-body leading-relaxed">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-heading text-forest">Haftung für Links</h3>
                  <p className="text-lg font-body leading-relaxed">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-heading text-forest">Urheberrecht</h3>
                  <p className="text-lg font-body leading-relaxed">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                  </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
