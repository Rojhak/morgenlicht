import { IntentLandingPage } from '@/app/components/sections/IntentLandingPage'
import { createPageMetadata } from '@/lib/seo'

const GERMAN_URL = 'https://www.morgenlicht-alltagshilfe.de/tuerkischsprachige-alltagshilfe-berlin'
const TURKISH_URL = 'https://www.morgenlicht-alltagshilfe.de/tr/berlin-yasli-gunluk-yasam-destegi'

export const metadata = createPageMetadata({
  title: 'Berlin Türkçe günlük yaşam desteği | Morgenlicht',
  description:
    'Berlin Kreuzberg ve Neukölln’de yaşlılar için Türkçe ev ve günlük yaşam desteği. Ev işleri, alışveriş ve randevu refakati.',
  path: '/tr/berlin-yasli-gunluk-yasam-destegi',
  locale: 'tr_TR',
  languages: {
    'de-DE': GERMAN_URL,
    'tr-TR': TURKISH_URL,
    'x-default': GERMAN_URL,
  },
})

export default function BerlinTurkceGunlukYasamDestegiPage() {
  return (
    <IntentLandingPage
      content={{
        slug: 'tr/berlin-yasli-gunluk-yasam-destegi',
        lang: 'tr',
        serviceName: 'Berlin Türkçe günlük yaşam desteği',
        kicker: 'Kreuzberg ve Neukölln’de kişisel destek',
        h1: 'Berlin’de yaşlılar için Türkçe günlük yaşam ve ev desteği',
        intro:
          'Morgenlicht; ev işleri, alışveriş, randevular ve sosyal yaşam konusunda destek sunar. Türkçe danışmanlık ve destek talep edebilirsiniz. Uygun personel ve saat durumu, hizmet başlamadan önce kontrol edilir.',
        trustPoints: [
          'Berlin eyalet hukukuna göre tanınmış destek hizmeti',
          'Kreuzberg ve Neukölln hizmet bölgesi',
          'Almanca, Türkçe ve İngilizce iletişim imkânı',
          'Görevler ve masraflar önceden açıklanır',
        ],
        benefitsTitle: 'Sizi ve günlük alışkanlıklarınızı dikkate alan destek',
        benefitsIntro:
          'İyi bir destek için yalnızca yapılacak işleri değil; dili, alışkanlıkları, kişisel sınırları ve istekleri de anlamak gerekir.',
        benefits: [
          {
            title: 'Anlaşılır danışmanlık',
            text: 'Pflegegrad, aylık destek bütçesi (Entlastungsbetrag) ve olası faturalandırma Türkçe açıklanabilir.',
          },
          {
            title: 'Saygılı yaklaşım',
            text: 'Yemek, inanç, kültür ve ev düzeniyle ilgili kişisel tercihler sorulur ve dikkate alınır.',
          },
          {
            title: 'Mümkün olduğunca aynı kişi',
            text: 'Planlamada süreklilik hedeflenir. Hastalık, izin ve kapasite nedeniyle değişiklik gerekirse açıkça konuşulur.',
          },
        ],
        includedTitle: 'Hangi konularda destek alınabilir?',
        included: [
          'Temizlik, çamaşır ve ev düzeninde kararlaştırılan yardım',
          'Birlikte alışveriş veya önceden konuşulan küçük işler',
          'Doktor, terapi ya da resmi kurum randevularına refakat',
          'Yürüyüş, sohbet ve birlikte günlük etkinlikler',
          'Posta ve randevuları düzenleme desteği',
        ],
        boundariesTitle: 'Hizmetin sınırları',
        boundaries: [
          'Türkçe destek, uygun personel ve saat durumuna bağlıdır.',
          'Morgenlicht tıbbi tedavi bakımı, teşhis veya yeminli tercüme hizmeti vermez.',
          'Müşterinin onayı olmadan işlem yapılmaz.',
          'Bakım sigortası bütçesini aşan ücretler önceden konuşulur.',
        ],
        financeTitle: 'Aylık 131 € destek bütçesi nasıl kullanılır?',
        financeText:
          'Evde yaşayan Pflegegrad 1–5 sahibi kişiler, tanınmış günlük yaşam destekleri için ayda 131 €’ya kadar Entlastungsbetrag kullanabilir. Saat ücreti 35,50 €’dur. Mevcut bütçe ve doğrudan bakım sigortasına faturalandırma imkânı kişiye göre kontrol edilir.',
        financeLinkLabel: 'Ücretler ve bakım sigortası hakkında Almanca bilgi',
        processTitle: 'Destek talebi nasıl yapılır?',
        process: [
          {
            title: 'İletişime geçin',
            text: 'Bizi arayın ya da WhatsApp veya e-posta yoluyla yazın. Türkçe hizmet istediğinizi belirtin.',
          },
          {
            title: 'İhtiyacı konuşalım',
            text: 'Adres, istenen işler, Pflegegrad, bütçe ve dil tercihi birlikte açıklığa kavuşturulur.',
          },
          {
            title: 'Şeffaf şekilde planlayalım',
            text: 'Kişi, tarih, kapsam ve olası masraflar belli olduktan sonra destek kararlaştırılır.',
          },
        ],
        faqTitle: 'Türkçe günlük yaşam desteği hakkında sorular',
        faqs: [
          {
            question: 'Her randevuda Türkçe konuşan biri gelebilir mi?',
            answer:
              'Bu her zaman garanti edilemez. Dil tercihi, adres, tarih ve hizmet türü önceden kontrol edilir.',
          },
          {
            question: 'Aile üyeleri ilk görüşmeye katılabilir mi?',
            answer:
              'Destek alacak kişi isterse evet. Karar ve onay her zaman destek alan kişiye aittir.',
          },
          {
            question: 'Morgenlicht tıbbi görüşmeleri tercüme eder mi?',
            answer:
              'Günlük iletişim ve organizasyonda yardımcı olunabilir; ancak yeminli uzman tercümesi veya tıbbi danışmanlık sunulmaz.',
          },
          {
            question: 'Berlin’in hangi bölgelerinde hizmet veriliyor?',
            answer:
              'Hizmet ağırlıklı olarak Kreuzberg ve Neukölln’dedir. Tam adres ve kapasite, talep sırasında kontrol edilir.',
          },
        ],
        relatedTitle: 'Diğer bilgiler',
        relatedLinks: [
          { href: '/tuerkischsprachige-alltagshilfe-berlin', label: 'Almanca sayfayı okuyun' },
          { href: '/haushaltshilfe-pflegegrad-berlin', label: 'Pflegegrad ile ev desteği' },
          { href: '/arztbegleitung-senioren-berlin', label: 'Doktor randevusuna refakat' },
          { href: '/berlin-kreuzberg', label: 'Kreuzberg hizmet bölgesi' },
          { href: '/berlin-neukoelln', label: 'Neukölln hizmet bölgesi' },
          { href: '/kontakt', label: 'Türkçe iletişime geçin' },
        ],
        ctaTitle: 'Türkçe danışmanlık ister misiniz?',
        ctaText:
          'Bizi arayın ya da WhatsApp veya e-posta yoluyla yazın. Dil kapasitesini, hizmet bölgesini ve sonraki adımı birlikte değerlendirelim.',
        ctaLabel: 'Türkçe iletişime geçin',
        phoneLabel: 'Telefon: 030 235 930 28',
      }}
    />
  )
}
