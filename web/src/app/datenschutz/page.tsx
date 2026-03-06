'use client'

import { GlassCard } from '../components/glass'
import { ScrollRevealSection } from '../components/animations/ScrollReveal'
import { ShieldCheck } from 'lucide-react'


export default function DatenschutzPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-10 px-4 bg-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#144E41]/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#144E41]/5 to-transparent rounded-full blur-3xl" />
        </div>

        <ScrollRevealSection className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block px-5 py-2 bg-white border border-[#144E41]/20 rounded-xl text-sm font-bold font-heading text-[#144E41] mb-6 shadow-sm">
            Rechtliches
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-[#144E41] mb-8 tracking-tight">
            Datenschutzerklärung
          </h1>
          <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed font-body">
            Ihre Privatsphäre ist uns wichtig. Hier erläutern wir transparent, wie wir mit Ihren Daten umgehen.
          </p>
        </ScrollRevealSection>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 bg-[#F7F6F3]">
        <div className="max-w-4xl mx-auto">
          <ScrollRevealSection delay={100}>
            <GlassCard className="p-8 md:p-12 bg-white/80 backdrop-blur-md border border-[#144E41]/10 shadow-xl overflow-hidden">
              <div className="space-y-12 text-[#455A64]">
                {/* Intro Section with Callout */}
                <div className="space-y-8">
                  <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#144E41]">1. Datenschutz auf einen Blick</h2>

                  {/* Callout Box - Rechenbeispiel Style */}
                  <div className="bg-[#144E41] text-white rounded-xl p-8 shadow-lg">
                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2 !text-white">
                      <ShieldCheck className="w-6 h-6 text-[#FFD54F]" />
                      Gut zu wissen
                    </h4>
                    <p className="text-lg text-white/90 leading-relaxed font-body">
                      Wir nutzen Ihre Daten ausschließlich zur Bearbeitung Ihrer Anfrage. Wir verkaufen keine Daten an Dritte und nutzen modernste Verschlüsselung, um Ihre Privatsphäre zu schützen.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold font-heading text-[#144E41]">Allgemeine Hinweise</h3>
                    <p className="text-lg font-body leading-relaxed">
                      Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                      personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                      Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl font-bold font-heading text-[#144E41]">Datenerfassung auf dieser Website</h3>
                    <div className="space-y-3">
                      <p className="text-lg font-bold text-[#144E41] font-heading">Wer ist verantwortlich für die Datenerfassung?</p>
                      <p className="text-lg font-body leading-relaxed">
                        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
                        Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <p className="text-lg font-bold text-[#144E41] font-heading">Wie erfassen wir Ihre Daten?</p>
                      <p className="text-lg font-body leading-relaxed">
                        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen.
                        Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. Hosting */}
                <div className="space-y-6 border-t border-[#144E41]/10 pt-12">
                  <h2 className="text-2xl font-bold font-heading text-[#144E41]">2. Hosting</h2>
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
                    <h3 className="text-xl font-bold font-heading text-[#144E41]">Auftragsverarbeitung</h3>
                    <p className="text-lg font-body leading-relaxed italic border-l-4 border-[#144E41]/20 pl-4">
                      Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit dem oben genannten Anbieter geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
                    </p>
                  </div>
                </div>

                {/* 3. Pflichtinformationen */}
                <div className="space-y-6 border-t border-[#144E41]/10 pt-12">
                  <h2 className="text-2xl font-bold font-heading text-[#144E41]">3. Pflichtinformationen</h2>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold font-heading text-[#144E41]">Datenschutz</h3>
                    <p className="text-lg font-body leading-relaxed">
                      Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
                      Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der
                      gesetzlichen Vorschriften.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold font-heading text-[#144E41]">Verantwortliche Stelle</h3>
                    <p className="text-lg font-body leading-relaxed">
                      Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                    </p>
                    <div className="bg-[#FAF9F6] p-8 rounded-xl border border-[#144E41]/10 shadow-sm text-[#144E41]">
                      <p className="text-xl font-bold mb-3 font-heading">Morgenlicht Alltagshilfe Berlin UG (haftungsbeschränkt)</p>
                      <p className="text-lg font-body">3. Hof, Aufgang links, 1. OG</p>
                      <p className="text-lg font-body">Urbanstr. 71, 10967 Berlin</p>
                      <div className="mt-6 pt-6 border-t border-[#144E41]/10 flex flex-col gap-2 text-base font-medium">
                        <p><span className="font-bold">Telefon:</span> 030 235 930 28</p>
                        <p><span className="font-bold">Fax:</span> 030 544 533 139</p>
                        <p><span className="font-bold">E-Mail:</span> info@morgenlicht-alltagshilfe.de</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Datenerfassung auf dieser Website */}
                <div className="space-y-6 border-t border-[#144E41]/10 pt-12">
                  <h2 className="text-2xl font-bold font-heading text-[#144E41]">4. Datenerfassung auf dieser Website</h2>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold font-heading text-[#144E41]">Kontaktformular</h3>
                      <p className="text-lg font-body leading-relaxed">
                        Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                      </p>
                      <p className="text-lg font-body leading-relaxed italic border-l-4 border-[#144E41]/20 pl-4">
                        Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
                      </p>

                      <div className="bg-[#FAF9F6] p-8 rounded-xl border border-[#144E41]/10">
                        <p className="text-lg font-bold text-[#144E41] mb-4 font-heading">Welche Daten werden erfasst?</p>
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
                        <p className="text-lg font-bold text-[#144E41] font-heading">Wie lange werden die Daten gespeichert?</p>
                        <p className="text-lg font-body leading-relaxed">
                          Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 pt-8 border-t border-[#144E41]/10">
                      <h3 className="text-xl font-bold font-heading text-[#144E41]">Anfrage per E-Mail oder Telefon</h3>
                      <p className="text-lg font-body leading-relaxed">
                        Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
                      </p>
                    </div>

                    {/* 4a. WhatsApp */}
                    <div className="space-y-4 pt-8 border-t border-[#144E41]/10">
                      <h3 className="text-xl font-bold font-heading text-[#144E41]">Kommunikation über WhatsApp</h3>
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
                <div className="space-y-6 border-t border-[#144E41]/10 pt-12">
                  <h2 className="text-2xl font-bold font-heading text-[#144E41]">5. Analyse-Tools und Werbung</h2>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold font-heading text-[#144E41]">Plausible Analytics</h3>
                    <p className="text-lg font-body leading-relaxed">
                      Diese Website nutzt Plausible Analytics, einen datenschutzfreundlichen Webanalysedienst. Plausible verwendet keine Cookies und speichert keine personenbezogenen Daten. Die Analyse erfolgt vollständig anonymisiert.
                    </p>
                    <p className="text-lg font-body leading-relaxed border-l-4 border-[#144E41]/20 pl-4 italic">
                      Weitere Informationen finden Sie in der Datenschutzerklärung von Plausible:
                      <a href="https://plausible.io/privacy" target="_blank" rel="noopener noreferrer" className="text-[#144E41] font-bold underline ml-1">
                        https://plausible.io/privacy
                      </a>
                    </p>
                  </div>
                </div>

                {/* 6. Ihre Rechte */}
                <div className="space-y-8 border-t border-[#144E41]/10 pt-12">
                  <h2 className="text-2xl font-bold font-heading text-[#144E41]">6. Ihre Rechte</h2>

                  <div className="space-y-4">
                    <p className="text-lg font-body leading-relaxed">
                      Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
                    </p>
                    <p className="text-lg font-body leading-relaxed font-bold text-[#144E41]">
                      Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold font-heading text-[#144E41]">Recht auf Datenübertragbarkeit</h3>
                    <p className="text-lg font-body leading-relaxed">
                      Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags zusammenhängt automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold font-heading text-[#144E41]">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                    <p className="text-lg font-body leading-relaxed">
                      Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold font-heading text-[#144E41]">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                    <div className="bg-[#FAF9F6] p-8 rounded-xl border border-[#144E41]/10 text-[#144E41]">
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
            </GlassCard>
          </ScrollRevealSection>
        </div>
      </section>
    </main>
  )
}
