import type { MetadataRoute } from 'next'
import { blogPosts } from '@/config/blogPosts'
import { SITE_URL } from '@/config/site'

// lastModified reflects the last substantive content change of each page.
const pages: Array<[path: string, lastModified: string]> = [
  ['/', '2026-09-27'],
  ['/leistungen', '2026-09-27'],
  ['/kosten', '2026-09-27'],
  ['/kontakt', '2026-09-27'],
  ['/ueber-uns', '2026-09-27'],
  ['/fragen', '2026-09-26'],
  ['/pflegegrad-guide', '2026-09-26'],
  ['/haushaltshilfe-pflegegrad-berlin', '2026-09-27'],
  ['/arztbegleitung-senioren-berlin', '2026-09-27'],
  ['/soziale-begleitung-senioren-berlin', '2026-09-27'],
  ['/tuerkischsprachige-alltagshilfe-berlin', '2026-09-26'],
  ['/tr/berlin-yasli-gunluk-yasam-destegi', '2026-09-26'],
  ['/berlin-kreuzberg', '2026-09-26'],
  ['/berlin-neukoelln', '2026-09-26'],
  ['/blog', '2026-09-26'],
  ['/barrierefreiheit', '2026-09-26'],
  ['/impressum', '2026-09-26'],
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = pages.map(([path, lastModified]) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
  }))

  const articlePages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.modified,
  }))

  return [...staticPages, ...articlePages]
}
