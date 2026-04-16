import Link from 'next/link'
import { ArrowRight, Phone, Check, MapPin, Heart, Home, ShoppingBag, Footprints, FileText, Handshake } from 'lucide-react'

export interface DistrictContent {
  slug: string
  district: string
  kicker: string
  h1: string
  intro: string
  kiezParagraph: string
  landmarks: string[]
  localPhrase: string
  neighboringDistricts: string[]
}

const services = [
  { icon: Home, title: 'Haushaltshilfe & Reinigung', desc: 'Putzen, Wäsche, Küche – damit Sie sich zuhause wieder wohlfühlen.' },
  { icon: ShoppingBag, title: 'Einkauf & Erledigungen', desc: 'Wocheneinkauf, Apotheke, Post – wir erledigen es für Sie.' },
  { icon: Footprints, title: 'Begleitung & Mobilität', desc: 'Sicher zum Arzt, zur Behörde oder zum Café um die Ecke.' },
  { icon: FileText, title: 'Alltag & Struktur', desc: 'Briefe, Termine und Telefonate – wir behalten den Überblick.' },
  { icon: Handshake, title: 'Soziale Teilhabe', desc: 'Spaziergänge, Gespräche, Kulturbegleitung – gegen Einsamkeit.' },
]

export function DistrictPage({ content }: { content: DistrictContent }) {
  const SITE_URL = 'https://www.morgenlicht-alltagshilfe.de'

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${SITE_URL}/${content.slug}#business-${content.slug}`,
        name: `Morgenlicht Alltagshilfe ${content.district}`,
        description: content.intro,
        url: `${SITE_URL}/${content.slug}`,
        telephone: '+493023593028',
        parentOrganization: { '@id': `${SITE_URL}/#business` },
        areaServed: { '@type': 'AdministrativeArea', name: `Berlin-${content.district}` },
        availableLanguage: ['German', 'Turkish', 'English'],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: `Berlin-${content.district}`, item: `${SITE_URL}/${content.slug}` },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative pt-20 md:pt-28 pb-12 md:pb-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#144E41]/10 rounded-full text-xs sm:text-sm font-semibold tracking-wider text-[#144E41] mb-6 shadow-sm">
            <MapPin className="w-4 h-4 text-[#144E41]" />
            <span>{content.kicker}</span>
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#144E41] mb-6 tracking-tighter">
            {content.h1}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
            {content.intro}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center bg-[#144E41] text-white hover:bg-[#0F3F3C] transition-all font-semibold text-lg px-8 py-4 rounded-xl shadow-lg"
            >
              Jetzt in {content.district} anfragen
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:03023593028"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl bg-white text-[#134E4A] border-2 border-[#134E4A]/20"
            >
              <Phone className="w-5 h-5 mr-3 text-[#144E41]" />
              030 235 930 28
            </a>
          </div>
        </div>
      </section>

      {/* Kiez paragraph */}
      <section className="py-16 md:py-20 px-6 bg-[#F7F6F3]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#134E4A] mb-6">
            Wir sind in Ihrem Kiez zuhause
          </h2>
          <p className="font-body text-lg text-[#4B5563] leading-relaxed mb-6">
            {content.kiezParagraph}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
            {content.landmarks.map((landmark) => (
              <li key={landmark} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#144E41] mt-1 flex-shrink-0" />
                <span className="font-body text-[#4B5563]">{landmark}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#134E4A] mb-10 text-center">
            Unsere Leistungen in {content.district}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-transparent hover:border-[#134E4A]/10">
                <div className="w-10 h-10 rounded-full bg-[#134E4A] flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#134E4A] mb-2">{s.title}</h3>
                <p className="font-body text-sm text-[#6B7280] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/leistungen" className="inline-flex items-center text-[#144E41] font-semibold hover:underline">
              Alle Leistungen im Detail ansehen <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Kostenlos Banner */}
      <section className="bg-[#F7F6F3] py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 text-center shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
          <Heart className="w-10 h-10 text-[#144E41] mx-auto mb-4" />
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#134E4A] mb-4">
            100 % kostenlos ab Pflegegrad 1
          </h2>
          <p className="font-body text-[#4B5563] text-lg leading-relaxed mb-6">
            Nutzen Sie Ihren monatlichen Entlastungsbetrag von 131 € nach § 45b SGB XI für unsere Alltagshilfe in {content.district}.
            Wir rechnen direkt mit Ihrer Pflegekasse ab – ohne Papierkram, ohne Vorkasse.
          </p>
          <Link
            href="/kosten"
            className="inline-flex items-center text-[#144E41] font-semibold hover:underline"
          >
            Alles zu Kosten & Pflegekasse <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      {/* Multilingual */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#134E4A] mb-6">
            Beratung in Ihrer Sprache
          </h2>
          <p className="font-body text-[#4B5563] mb-6 leading-relaxed">
            {content.district} ist vielfältig – und wir sind es auch. Wir beraten Sie persönlich in <strong>Deutsch</strong>, <strong>Türkisch (Türkçe)</strong> und <strong>Englisch (English)</strong>.
          </p>
          <p lang="tr" className="font-body italic text-[#6B7280] mb-2">
            {content.localPhrase}
          </p>
        </div>
      </section>

      {/* Neighboring districts link */}
      <section className="bg-[#F7F6F3] py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-[#6B7280] mb-4">Wir sind auch in angrenzenden Bezirken für Sie da:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {content.neighboringDistricts.map((d) => (
              <Link
                key={d.toLowerCase()}
                href={`/berlin-${d.toLowerCase().replace('ö', 'oe').replace('ü', 'ue').replace('ä', 'ae')}`}
                className="px-4 py-2 bg-white border border-[#144E41]/20 rounded-full text-sm font-semibold text-[#144E41] hover:bg-[#144E41] hover:text-white transition-colors"
              >
                Alltagshilfe {d}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#134E4A] mb-6">
            Jetzt unverbindlich beraten lassen
          </h2>
          <p className="font-body text-lg text-[#4B5563] mb-8">
            Wir nehmen uns Zeit für Ihre Situation – kostenlos, auf Augenhöhe und in {content.district}.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center bg-[#144E41] text-white hover:bg-[#0F3F3C] font-semibold text-lg px-10 py-4 rounded-xl shadow-lg"
          >
            Kontakt aufnehmen
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}
