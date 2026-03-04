'use client'

import { GlassCard } from '../components/glass'


export default function DatenschutzPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-white">
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block px-5 py-2 bg-white border border-[#144E41]/20 rounded-xl text-sm font-bold font-heading text-[#144E41] mb-6">
            Rechtliches
          </span>
          <h1 className="text-5xl font-bold font-heading text-[#144E41] mb-8 tracking-tight">
            Datenschutzerklärung
          </h1>
          <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            Ihre Privatsphäre ist uns wichtig. Hier erläutern wir transparent, wie wir mit Ihren Daten umgehen.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-4 bg-[#F7F6F3]">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-8 md:p-12 bg-white/80 backdrop-blur-sm">
            <div className="space-y-12 text-[#455A64]">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold font-heading text-[#144E41]">1. Datenschutz auf einen Blick</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold font-heading text-[#144E41]">Allgemeine Hinweise</h3>
                  <p className="text-lg font-body leading-relaxed">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                    personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                    Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold font-heading text-[#144E41]">Datenerfassung auf dieser Website</h3>
                  <div className="space-y-2">
                    <p className="font-bold text-[#144E41]">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
                    <p className="text-lg font-body leading-relaxed">
                      Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
                      Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-bold text-[#144E41]">Wie erfassen wir Ihre Daten?</p>
                    <p className="text-lg font-body leading-relaxed">
                      Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen.
                      Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                    </p>
                  </div>
                </div>
              </div>

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
                  <h3 className="text-xl font-semibold font-heading text-[#144E41]">Auftragsverarbeitung</h3>
                  <p className="text-lg font-body leading-relaxed">
                    Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit dem oben genannten Anbieter geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
                  </p>
                </div>
              </div>

              <div className="space-y-6 border-t border-[#144E41]/10 pt-12">
                <h2 className="text-2xl font-bold font-heading text-[#144E41]">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold font-heading text-[#144E41]">Datenschutz</h3>
                  <p className="text-lg font-body leading-relaxed">
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
                    Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der
                    gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold font-heading text-[#144E41]">Hinweis zur verantwortlichen Stelle</h3>
                  <p className="text-lg font-body leading-relaxed">
                    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                  </p>
                  <div className="bg-[#FAF9F6] p-6 rounded-xl border border-[#144E41]/10 shadow-sm text-[#144E41]">
                    <p className="font-bold mb-2">Morgenlicht Alltagshilfe Berlin UG (haftungsbeschränkt)</p>
                    <p>3. Hof, Aufgang links, 1. OG</p>
                    <p>Urbanstr. 71</p>
                    <p>10967 Berlin</p>
                    <div className="mt-4 pt-4 border-t border-[#144E41]/10">
                      <p>Telefon: 030 235 930 28</p>
                      <p>E-Mail: info@morgenlicht-alltagshilfe.de</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 border-t border-[#144E41]/10 pt-12">
                <h2 className="text-2xl font-bold font-heading text-[#144E41]">4. Datenerfassung auf dieser Website</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold font-heading text-[#144E41]">Kontaktformular</h3>
                  <p className="text-lg font-body leading-relaxed">
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
                    aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
                    zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
                    gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                  </p>
                  <p className="text-lg font-body leading-relaxed italic">
                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                    sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
                    Durchführung vorvertraglicher Maßnahmen erforderlich ist.
                  </p>
                  <div className="bg-[#FAF9F6] p-6 rounded-xl border border-[#144E41]/10">
                    <p className="font-bold text-[#144E41] mb-2">Welche Daten werden erfasst?</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Name</li>
                      <li>Telefonnummer</li>
                      <li>E-Mail-Adresse (falls im Text angegeben)</li>
                      <li>Ihre Nachricht / Ihr Anliegen</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-bold text-[#144E41]">Wie lange werden die Daten gespeichert?</p>
                    <p className="text-lg font-body leading-relaxed">
                      Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie
                      uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder
                      der Zweck für die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen –
                      insbesondere Aufbewahrungsfristen – bleiben unberührt.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-6">
                  <h3 className="text-xl font-semibold font-heading text-[#144E41]">Anfrage per E-Mail oder Telefon</h3>
                  <p className="text-lg font-body leading-relaxed">
                    Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive
                    aller daraus hervorgehenden personenbezogenen Daten zum Zwecke der Bearbeitung
                    Ihres Anliegens bei uns gespeichert und verarbeitet.
                  </p>
                </div>

                <div className="space-y-4 pt-6">
                  <h3 className="text-xl font-semibold font-heading text-[#144E41]">Kommunikation über WhatsApp</h3>
                  <p className="text-lg font-body leading-relaxed">
                    Für die Kommunikation mit unseren Kunden und Interessenten nutzen wir unter anderem den Instant-Messaging-Dienst WhatsApp. Anbieter ist die WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.
                  </p>
                  <p className="text-lg font-body leading-relaxed">
                    Die Kommunikation erfolgt über eine Ende-zu-Ende-Verschlüsselung (Peer-to-Peer), die verhindert, dass WhatsApp oder Dritte Zugriff auf die Kommunikationsinhalte erlangen. WhatsApp erhält jedoch Zugriff auf Metadaten (z. B. Absender, Empfänger, Zeitpunkt). Wir weisen darauf hin, dass WhatsApp personenbezogene Daten an Server des Mutterkonzerns Meta Platforms Inc. in den USA weiterleiten kann.
                  </p>
                  <p className="text-lg font-body leading-relaxed italic">
                    Die Nutzung von WhatsApp erfolgt auf Grundlage unseres berechtigten Interesses an einer möglichst schnellen und effektiven Kommunikation (Art. 6 Abs. 1 lit. f DSGVO).
                  </p>
                </div>
              </div>

              <div className="space-y-6 border-t border-[#144E41]/10 pt-12">
                <h2 className="text-2xl font-bold font-heading text-[#144E41]">5. Analyse-Tools und Werbung</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold font-heading text-[#144E41]">Plausible Analytics</h3>
                  <p className="text-lg font-body leading-relaxed">
                    Diese Website nutzt Plausible Analytics, einen datenschutzfreundlichen
                    Webanalysedienst. Plausible verwendet keine Cookies und speichert keine
                    personenbezogenen Daten. Die Analyse erfolgt vollständig anonymisiert.
                  </p>
                  <p className="text-lg font-body leading-relaxed border-l-4 border-[#144E41] pl-4 italic">
                    Weitere Informationen finden Sie in der Datenschutzerklärung von Plausible:
                    https://plausible.io/privacy
                  </p>
                </div>
              </div>

              <div className="space-y-6 border-t border-[#144E41]/10 pt-12">
                <h2 className="text-2xl font-bold font-heading text-[#144E41]">6. Ihre Rechte</h2>
                <p className="text-lg font-body leading-relaxed">
                  Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
                  personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
                  Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
                </p>
                <p className="text-lg font-body leading-relaxed">
                  Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich
                  jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold font-heading text-[#144E41]">Recht auf Datenübertragbarkeit</h3>
                  <p className="text-lg font-body leading-relaxed">
                    Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in
                    Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten
                    in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold font-heading text-[#144E41]">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                  <p className="text-lg font-body leading-relaxed">
                    Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung
                    möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen.
                    Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom
                    Widerruf unberührt.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold font-heading text-[#144E41]">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                  <p className="text-lg font-body leading-relaxed">
                    Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu. Die für uns zuständige Aufsichtsbehörde ist:
                  </p>
                  <div className="bg-[#FAF9F6] p-6 rounded-xl border border-[#144E41]/10 text-[#144E41]">
                    <p className="font-bold">Berliner Beauftragte für Datenschutz und Informationsfreiheit</p>
                    <p>Alt-Moabit 59-61</p>
                    <p>10555 Berlin</p>
                    <p className="mt-2">Telefon: 030 13889-0</p>
                    <p>E-Mail: mailbox@datenschutz-berlin.de</p>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  )
}
