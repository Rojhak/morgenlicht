'use client'

import { GlassCard } from '../components/glass'

export default function DatenschutzPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-[#37474F] mb-8">Datenschutzerklärung</h1>

        <GlassCard className="p-8">
          <div className="prose prose-lg text-[#37474F]">
            <h2>1. Datenschutz auf einen Blick</h2>

            <h3>Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <h3>Datenerfassung auf dieser Website</h3>
            <p>
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
              Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>

            <p>
              <strong>Wie erfassen wir Ihre Daten?</strong><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen.
              Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>

            <h2>2. Hosting</h2>
            <p>
              Wir hosten die Inhalte unserer Website bei Vercel Inc. Anbieter ist die
              Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
            </p>

            <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3>Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der
              gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3>Hinweis zur verantwortlichen Stelle</h3>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p>
              Morgenlicht Alltagshilfe<br />
              [Adresse]<br />
              Telefon: 069 12345678<br />
              E-Mail: info@morgenlicht-alltagshilfe.de
            </p>

            <h2>4. Datenerfassung auf dieser Website</h2>

            <h3>Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
              aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
              zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
              gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
              sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
              Durchführung vorvertraglicher Maßnahmen erforderlich ist.
            </p>
            <p>
              <strong>Welche Daten werden erfasst?</strong><br />
              - Name<br />
              - Telefonnummer
            </p>
            <p>
              <strong>Wie lange werden die Daten gespeichert?</strong><br />
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie
              uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder
              der Zweck für die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen –
              insbesondere Aufbewahrungsfristen – bleiben unberührt.
            </p>

            <h3>Anfrage per E-Mail oder Telefon</h3>
            <p>
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive
              aller daraus hervorgehenden personenbezogenen Daten zum Zwecke der Bearbeitung
              Ihres Anliegens bei uns gespeichert und verarbeitet.
            </p>

            <h2>5. Analyse-Tools und Werbung</h2>

            <h3>Plausible Analytics</h3>
            <p>
              Diese Website nutzt Plausible Analytics, einen datenschutzfreundlichen
              Webanalysedienst. Plausible verwendet keine Cookies und speichert keine
              personenbezogenen Daten. Die Analyse erfolgt vollständig anonymisiert.
            </p>
            <p>
              Weitere Informationen finden Sie in der Datenschutzerklärung von Plausible:
              https://plausible.io/privacy
            </p>

            <h2>6. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
              personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
              Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
            </p>
            <p>
              Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich
              jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
            </p>

            <h3>Recht auf Datenübertragbarkeit</h3>
            <p>
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in
              Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten
              in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
            </p>

            <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p>
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung
              möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen.
              Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom
              Widerruf unberührt.
            </p>

            <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
            <p>
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht
              bei einer Aufsichtsbehörde zu. Die zuständige Aufsichtsbehörde in Hessen ist:
            </p>
            <p>
              Der Hessische Beauftragte für Datenschutz und Informationsfreiheit<br />
              Gustav-Stresemann-Ring 1<br />
              65189 Wiesbaden
            </p>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
