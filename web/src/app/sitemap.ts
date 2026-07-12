import type { MetadataRoute } from 'next'
import { blogPosts } from '@/config/blogPosts'

const SITE_URL = 'https://www.morgenlicht-alltagshilfe.de'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: '2026-07-11', changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/leistungen`, lastModified: '2026-07-11', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/kosten`, lastModified: '2026-07-11', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/pflegegrad-guide`, lastModified: '2026-07-11', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/fragen`, lastModified: '2026-07-11', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/ueber-uns`, lastModified: '2026-07-11', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/kontakt`, lastModified: '2026-07-11', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/berlin-kreuzberg`, lastModified: '2026-07-11', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/berlin-neukoelln`, lastModified: '2026-07-11', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified: '2026-07-11', changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/barrierefreiheit`, lastModified: '2026-05-08', changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/impressum`, lastModified: '2026-05-08', changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/datenschutz`, lastModified: '2026-05-08', changeFrequency: 'yearly', priority: 0.2 },
  ]

  const articlePages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.modified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticPages, ...articlePages]
}
