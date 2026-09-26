// Single source of truth for provider details shown on the site and in structured data.
// Only verified facts belong here (Impressum, Hilfelotse Berlin, existing site content).

export const SITE_URL = 'https://www.morgenlicht-alltagshilfe.de'

export const SITE = {
  name: 'Morgenlicht Alltagshilfe Berlin',
  shortName: 'Morgenlicht',
  legalName: 'Morgenlicht Alltagshilfe Berlin UG (haftungsbeschränkt)',
  founder: 'Asiye Duman',
  founderRole: 'Gründerin und Geschäftsführerin',
  phone: { label: '030 235 930 28', href: 'tel:+493023593028', e164: '+493023593028' },
  whatsapp: {
    label: '0151 560 573 65',
    href: 'https://wa.me/4915156057365',
    e164: '+4915156057365',
  },
  fax: { label: '030 530 59 389', e164: '+493053059389' },
  email: 'info@morgenlicht-alltagshilfe.de',
  address: {
    street: 'Urbanstraße 71',
    postalCode: '10967',
    city: 'Berlin',
    district: 'Kreuzberg',
  },
  hours: { label: 'Mo–Fr, 9–16 Uhr', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '16:00' },
  areas: ['Kreuzberg', 'Neukölln'],
  languages: [
    { code: 'de', label: 'Deutsch' },
    { code: 'tr', label: 'Türkisch' },
    { code: 'en', label: 'Englisch' },
  ],
  hourlyRate: '35,50 €',
  register: { court: 'Amtsgericht Charlottenburg', number: 'HRB 283117 B' },
  ik: '461144697',
  hilfelotseUrl: 'https://www.hilfelotse-berlin.de/detail/morgenlicht-alltagshilfe-berlin',
} as const

export const OFFICIAL_SOURCES = {
  bmgEntlastung: {
    href: 'https://www.bundesgesundheitsministerium.de/pflege-zu-hause/weitere-leistungen-und-angebote-zur-unterstuetzung-im-alltag',
    label: 'Bundesgesundheitsministerium: Entlastungsbetrag und Angebote zur Unterstützung im Alltag',
  },
  gesundBund: {
    href: 'https://gesund.bund.de/entlastungsbetrag',
    label: 'gesund.bund.de: Entlastungsbetrag',
  },
  berlinAuA: {
    href: 'https://www.berlin.de/sen/pflege/pflege-und-rehabilitation/pflege-zu-hause/angebote-zur-unterstuetzung-im-alltag/',
    label: 'Berlin.de: Angebote zur Unterstützung im Alltag',
  },
  vzBerlin: {
    href: 'https://www.verbraucherzentrale-berlin.de/wissen/gesundheit-pflege/so-nutzen-pflegebeduerftige-den-entlastungsbetrag-richtig-113767',
    label: 'Verbraucherzentrale Berlin: Entlastungsbetrag richtig nutzen',
  },
  sgb11Par15: {
    href: 'https://www.gesetze-im-internet.de/sgb_11/__15.html',
    label: '§ 15 SGB XI: Ermittlung des Pflegegrades, Begutachtungsinstrument',
  },
  sgb11Par18c: {
    href: 'https://www.gesetze-im-internet.de/sgb_11/__18c.html',
    label: '§ 18c SGB XI: Entscheidung über den Antrag, Fristen',
  },
  hilfelotse: {
    href: 'https://www.hilfelotse-berlin.de/detail/morgenlicht-alltagshilfe-berlin',
    label: 'Hilfelotse Berlin: Eintrag Morgenlicht Alltagshilfe Berlin',
  },
} as const

export type SourceLink = { href: string; label: string }
