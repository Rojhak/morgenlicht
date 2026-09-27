import { blogPosts } from '@/config/blogPosts'
import { SITE, SITE_URL } from '@/config/site'

// Plain-text overview for AI assistants and other automated readers (llms.txt convention).
// Generated from the same configuration as the visible pages, so facts stay consistent.
// Not a proven ranking factor; it only offers a compact, accurate summary.
export const dynamic = 'force-static'

export function GET() {
  const lines = [
    `# ${SITE.name}`,
    '',
    `> Nach Berliner Landesrecht anerkanntes Angebot zur Unterstützung im Alltag nach § 45a SGB XI. Hilfe im Haushalt, beim Einkauf, Begleitung zu Terminen, Alltagsorganisation und soziale Begleitung für ältere und pflegebedürftige Menschen in Berlin-Kreuzberg und Neukölln – auf Deutsch, Türkisch und Englisch.`,
    '',
    '## Fakten',
    `- Anbieter: ${SITE.legalName}, Geschäftsführerin ${SITE.founder}`,
    `- Geschäftsanschrift: ${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city} (kein Kundenempfang; die Unterstützung findet bei den Kundinnen und Kunden zu Hause statt)`,
    `- Einsatzgebiet: Berlin-${SITE.areas.join(' und Berlin-')}`,
    `- Telefon: ${SITE.phone.label} (${SITE.hours.label}), WhatsApp: ${SITE.whatsapp.label}, E-Mail: ${SITE.email}`,
    `- Stundensatz: ${SITE.hourlyRate}, Anfahrt inklusive`,
    '- Finanzierung: ab Pflegegrad 1 über den Entlastungsbetrag (bis zu 131 € pro Monat, § 45b SGB XI); Direktabrechnung mit der Pflegekasse bei erfüllten Voraussetzungen; ab Pflegegrad 2 zusätzlich Umwandlungsanspruch möglich; ohne Pflegegrad als Privatleistung',
    `- Institutionskennzeichen (IK): ${SITE.ik}; Handelsregister: ${SITE.register.court}, ${SITE.register.number}`,
    '- Nicht im Angebot: medizinische Behandlungspflege, Diagnosen, beeidigte Übersetzungen',
    `- Unabhängiger Eintrag: ${SITE.hilfelotseUrl}`,
    '',
    '## Seiten',
    `- [Leistungen](${SITE_URL}/leistungen): alle Leistungsbereiche im Detail`,
    `- [Kosten und Pflegekasse](${SITE_URL}/kosten): Stundensatz, Entlastungsbetrag, Abrechnung`,
    `- [Häufige Fragen](${SITE_URL}/fragen)`,
    `- [Über uns](${SITE_URL}/ueber-uns)`,
    `- [Kontakt](${SITE_URL}/kontakt)`,
    `- [Haushaltshilfe mit Pflegegrad in Berlin](${SITE_URL}/haushaltshilfe-pflegegrad-berlin)`,
    `- [Arztbegleitung für Senioren](${SITE_URL}/arztbegleitung-senioren-berlin)`,
    `- [Soziale Begleitung für Senioren](${SITE_URL}/soziale-begleitung-senioren-berlin)`,
    `- [Türkischsprachige Alltagshilfe](${SITE_URL}/tuerkischsprachige-alltagshilfe-berlin)`,
    `- [Türkçe bilgi](${SITE_URL}/tr/berlin-yasli-gunluk-yasam-destegi)`,
    `- [Alltagshilfe in Kreuzberg](${SITE_URL}/berlin-kreuzberg)`,
    `- [Alltagshilfe in Neukölln](${SITE_URL}/berlin-neukoelln)`,
    '',
    '## Ratgeber',
    `- [Pflegegrad-Begutachtung: Ablauf und Checkliste](${SITE_URL}/pflegegrad-guide)`,
    ...blogPosts.map((post) => `- [${post.title}](${SITE_URL}/blog/${post.slug}): ${post.excerpt}`),
    '',
  ]

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
