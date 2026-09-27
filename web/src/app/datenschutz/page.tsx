import { PageHero } from '../components/site/PageHero'
import { createPageMetadata } from '@/lib/seo'
import { ShieldCheck } from 'lucide-react'


export const metadata = createPageMetadata({
  title: 'Datenschutzerklärung | Morgenlicht Alltagshilfe',
  description: 'Datenschutzerklärung von Morgenlicht Alltagshilfe Berlin gemäß DSGVO: verantwortliche Stelle, Hosting, Kontaktwege und Ihre Rechte.',
  path: '/datenschutz',
  noindex: true,
})

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        crumbs={[{ name: 'Datenschutz', href: '/datenschutz' }]}
        kicker="Rechtliches"
        title="Datenschutzerklärung"
        lead={<p>Hier erläutern wir, welche personenbezogenen Daten beim Besuch dieser Website und bei einer Kontaktaufnahme verarbeitet werden.</p>}
      />

      {/* Content Section */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div>
            <div className="rounded-2xl border border-line bg-white p-6 md:p-12">
              <div className="space-y-12 text-ink">
                {/* Intro Section with Callout */}
                <div className="space-y-8">
                  <h2 className="text-2xl md:text-3xl font-bold font-heading text-forest">1. Datenschutz auf einen Blick</h2>

                  {/* Callout Box - Rechenbeispiel Style */}
                  <div className="bg-[#144E41] text-white rounded-xl p-8 shadow-lg">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 !text-white">
                      <ShieldCheck className="w-6 h-6 text-[#FFD54F]" />
                      Gut zu wissen
                    </h3>
                    <p className="text-lg text-white/90 leading-relaxed font-body">
                      Wir nutzen Ihre Daten ausschließlich zur Bearbeitung Ihrer Anfrage. Wir verkaufen keine Daten an Dritte und nutzen modernste Verschlüsselung, um Ihre Privatsphäre zu schützen.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold font-heading text-forest">Allgemeine Hinweise</h3>
                    <p className="text-lg font-body leading-relaxed">
                      Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                      personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                      Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl font-bold font-heading text-forest">Datenerfassung auf dieser Website</h3>
                    <div className="space-y-3">
                      <p className="text-lg font-bold text-forest font-heading">Wer ist verantwortlich für die Datenerfassung?</p>
                      <p className="text-lg font-body leading-relaxed">
                        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
                        Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <p className="text-lg font-bold text-forest font-heading">Wie erfassen wir Ihre Daten?</p>
                      <p className="text-lg font-body leading-relaxed">
                        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen.
                        Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. Hosting */}
                <div className="space-y-6 border-t border-line pt-12">
                  <h2 className="text-2xl font-bold font-heading text-forest">2. Hosting</h2>
                  <p className="text-lg font-body leading-relaxed">
                    Wir hosten die Inhalte unserer Website bei der STRATO AG. Anbieter ist die STRATO AG, Otto-Ostrowski-Straße 7, 10249 Berlin (nachfolgend: „Strato“).
                  </p>
                  <p className="text-lg font-body leading-relaxed">
                    Wenn Sie unsere Website besuchen, erfasst Strato verschiedene Logfiles inklusive Ihrer IP-Adressen.
                  </p>
                  <p className="text-lg font-body leading-relaxed">
                    Die Verwendung von Strato erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.
                  </p>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold font-heading text-forest">Auftragsverarbeitung</h3>
                    <p className="text-lg font-body leading-relaxed italic border-l-4 border-[#144E41]/20 pl-4">
                      Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit dem oben genannten Anbieter geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
                    </p>
                  </div>
                </div>

                {/* 3. Pflichtinformationen */}
                <div className="space-y-6 border-t border-line pt-12">
                  <h2 className="text-2xl font-bold font-heading text-forest">3. Pflichtinformationen</h2>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold font-heading text-forest">Datenschutz</h3>
                    <p className="text-lg font-body leading-relaxed">
                      Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
                      Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der
                      gesetzlichen Vorschriften.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold font-heading text-forest">Verantwortliche Stelle</h3>
                    <p className="text-lg font-body leading-relaxed">
                      Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                    </p>
                    <div className="bg-[#FAF9F6] p-8 rounded-xl border border-line shadow-sm text-forest">
                      <p className="text-xl font-bold mb-3 font-heading">Morgenlicht Alltagshilfe Berlin UG (haftungsbeschränkt)</p>
                      <p className="text-lg font-body">3. Hof, Aufgang links, 1. OG</p>
                      <p className="text-lg font-body">Geschäftsanschrift: Urbanstraße 71, 10967 Berlin</p>
                      <p className="text-lg font-body">Kein Kundenempfang</p>
                      <div className="mt-6 pt-6 border-t border-line flex flex-col gap-2 text-base font-medium">
                        <p><span className="font-bold">Telefon:</span> 030 235 930 28</p>
                        <p><span className="font-bold">Fax:</span> 030 530 59 389</p>
                        <p><span className="font-bold">E-Mail:</span> info@morgenlicht-alltagshilfe.de</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Datenerfassung auf dieser Website */}
                <div className="space-y-6 border-t border-line pt-12">
                  <h2 className="text-2xl font-bold font-heading text-forest">4. Datenerfassung auf dieser Website</h2>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold font-heading text-forest">Kontaktformular</h3>
                      <p className="text-lg font-body leading-relaxed">
                        Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                      </p>
                      <p className="text-lg font-body leading-relaxed italic border-l-4 border-[#144E41]/20 pl-4">
                        Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
                      </p>

                      <div className="space-y-3">
                        <h4 className="text-lg font-bold text-forest font-heading">Technischer E-Mail-Versand über Resend</h4>
                        <p className="text-lg font-body leading-relaxed">
                          Für den technischen Versand Ihrer Formularanfrage an Morgenlicht nutzen wir den Dienst Resend der Plus Five Five, Inc., 2261 Market Street #5039, San Francisco, CA 94114, USA. Dabei werden Name, Telefonnummer und der freiwillige Nachrichtentext an Resend übermittelt, damit die Anfrage als E-Mail zugestellt werden kann. Eine Verarbeitung in den USA ist möglich. Resend stellt ein Data Processing Addendum mit Standardvertragsklauseln bereit und verweist auf seine Teilnahme am EU-US Data Privacy Framework.
                        </p>
                        <p className="text-base font-body leading-relaxed">
                          Weitere Informationen:{' '}
                          <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="font-bold text-forest underline underline-offset-2">
                            Datenschutzerklärung von Resend
                          </a>{' '}
                          und{' '}
                          <a href="https://resend.com/legal/dpa" target="_blank" rel="noopener noreferrer" className="font-bold text-forest underline underline-offset-2">
                            Data Processing Addendum
                          </a>.
                        </p>
                      </div>

                      <div className="bg-[#FAF9F6] p-8 rounded-xl border border-line">
                        <p className="text-lg font-bold text-forest mb-4 font-heading">Welche Daten werden erfasst?</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            'Name',
                            'Telefonnummer',
                            'E-Mail-Adresse (falls im Text angegeben)',
                            'Ihre Nachricht / Ihr Anliegen'
                          ].map(item => (
                            <li key={item} className="flex items-center gap-3 text-base font-medium">
                              <div className="w-2 h-2 rounded-full bg-[#144E41]" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <p className="text-lg font-bold text-forest font-heading">Wie lange werden die Daten gespeichert?</p>
                        <p className="text-lg font-body leading-relaxed">
                          Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 pt-8 border-t border-line">
                      <h3 className="text-xl font-bold font-heading text-forest">Anfrage per E-Mail oder Telefon</h3>
                      <p className="text-lg font-body leading-relaxed">
                        Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
                      </p>
                    </div>

                    {/* 4a. WhatsApp */}
                    <div className="space-y-4 pt-8 border-t border-line">
                      <h3 className="text-xl font-bold font-heading text-forest">Kommunikation über WhatsApp</h3>
                      <p className="text-lg font-body leading-relaxed">
                        Für die Kommunikation mit unseren Kunden und Interessenten nutzen wir unter anderem den Instant-Messaging-Dienst WhatsApp. Anbieter ist die WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.
                      </p>
                      <p className="text-lg font-body leading-relaxed">
                        Die Kommunikation erfolgt über eine Ende-zu-Ende-Verschlüsselung (Peer-to-Peer), die verhindert, dass WhatsApp oder Dritte Zugriff auf die Kommunikationsinhalte erlangen. WhatsApp erhält jedoch Zugriff auf Metadaten (z. B. Absender, Empfänger, Zeitpunkt). Wir weisen darauf hin, dass WhatsApp personenbezogene Daten an Server des Mutterkonzerns Meta Platforms Inc. in den USA weiterleiten kann.
                      </p>
                      <p className="text-base italic font-body text-[#6B7280]">
                        Die Nutzung von WhatsApp erfolgt auf Grundlage unseres berechtigten Interesses an einer möglichst schnellen und effektiven Kommunikation (Art. 6 Abs. 1 lit. f DSGVO).
                      </p>
                    </div>
                  </div>
                </div>

                {/* 5. Analyse-Tools und Werbung */}
                <div className="space-y-6 border-t border-line pt-12">
                  <h2 className="text-2xl font-bold font-heading text-forest">5. Analyse-Tools und Werbung</h2>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold font-heading text-forest">Plausible Analytics</h3>
                    <p className="text-lg font-body leading-relaxed">
                      Sofern die Analysefunktion aktiviert ist, nutzt diese Website Plausible Analytics. Plausible verwendet keine Cookies. Morgenlicht erfasst dabei nur zusammengefasste Seitenaufrufe sowie nicht personenbezogene Ereignisse wie Telefon-, WhatsApp- oder Formular-Klicks; Namen, Telefonnummern und Nachrichtentexte werden nicht an Plausible übermittelt.
                    </p>
                    <p className="text-lg font-body leading-relaxed border-l-4 border-[#144E41]/20 pl-4 italic">
                      Weitere Informationen finden Sie in der Datenschutzerklärung von Plausible:
                      <a href="https://plausible.io/privacy" target="_blank" rel="noopener noreferrer" className="text-forest font-bold underline ml-1">
                        https://plausible.io/privacy
                      </a>
                    </p>
                  </div>
                </div>

                {/* 6. Ihre Rechte */}
                <div className="space-y-8 border-t border-line pt-12">
                  <h2 className="text-2xl font-bold font-heading text-forest">6. Ihre Rechte</h2>

                  <div className="space-y-4">
                    <p className="text-lg font-body leading-relaxed">
                      Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
                    </p>
                    <p className="text-lg font-body leading-relaxed font-bold text-forest">
                      Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold font-heading text-forest">Recht auf Datenübertragbarkeit</h3>
                    <p className="text-lg font-body leading-relaxed">
                      Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags zusammenhängt automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold font-heading text-forest">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                    <p className="text-lg font-body leading-relaxed">
                      Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold font-heading text-forest">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                    <div className="bg-[#FAF9F6] p-8 rounded-xl border border-line text-forest">
                      <p className="text-lg font-body leading-relaxed mb-6">
                        Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu. Die für uns zuständige Aufsichtsbehörde ist:
                      </p>
                      <p className="font-bold font-heading text-xl mb-3">Berliner Beauftragte für Datenschutz und Informationsfreiheit</p>
                      <div className="space-y-2 font-body text-base">
                        <p>Alt-Moabit 59-61, 10555 Berlin</p>
                        <p className="pt-2"><span className="font-bold">Telefon:</span> 030 13889-0</p>
                        <p><span className="font-bold">E-Mail:</span> mailbox@datenschutz-berlin.de</p>
                      </div>
                    </div>
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
