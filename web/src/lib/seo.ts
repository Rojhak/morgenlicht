import type { Metadata } from 'next'
import { SITE, SITE_URL } from '@/config/site'

const DEFAULT_IMAGE = '/opengraph-image'

interface PageMetadataOptions {
  title: string
  description: string
  path: `/${string}`
  locale?: 'de_DE' | 'tr_TR'
  languages?: Record<string, string>
  image?: string
  imageAlt?: string
  noindex?: boolean
  article?: {
    publishedTime: string
    modifiedTime: string
  }
}

export function createPageMetadata({
  title,
  description,
  path,
  locale = 'de_DE',
  languages,
  image = DEFAULT_IMAGE,
  imageAlt = 'Morgenlicht Alltagshilfe Berlin',
  noindex = false,
  article,
}: PageMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: path,
      ...(languages ? { languages } : {}),
    },
    // Set per page (not in the root layout) so the not-found page keeps only Next.js' own noindex.
    robots: noindex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
        },
    openGraph: {
      title,
      description,
      locale,
      url,
      siteName: SITE.name,
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
      ...(article
        ? {
            type: 'article',
            publishedTime: article.publishedTime,
            modifiedTime: article.modifiedTime,
          }
        : { type: 'website' }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}
