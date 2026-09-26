import { SITE, SITE_URL } from '@/config/site'

export interface Crumb {
  name: string
  href: string
}

export interface QA {
  question: string
  answer: string
}

export const BUSINESS_ID = `${SITE_URL}/#business`

export function absoluteUrl(href: string): string {
  return href.startsWith('http') ? href : `${SITE_URL}${href === '/' ? '/' : href}`
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.href),
    })),
  }
}

export function faqSchema(items: QA[], id?: string) {
  return {
    '@type': 'FAQPage',
    ...(id ? { '@id': id } : {}),
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}

export const areaServedSchema = SITE.areas.map((area) => ({
  '@type': 'AdministrativeArea',
  name: `Berlin-${area}`,
  containedInPlace: { '@type': 'City', name: 'Berlin' },
}))

export function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes }
}
