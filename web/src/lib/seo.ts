import type { Metadata } from 'next'

const SITE_URL = 'https://www.morgenlicht-alltagshilfe.de'
const DEFAULT_IMAGE = '/opengraph-image'

interface PageMetadataOptions {
  title: string
  description: string
  path: `/${string}`
  locale?: 'de_DE' | 'tr_TR'
  languages?: Record<string, string>
  image?: string
}

export function createPageMetadata({
  title,
  description,
  path,
  locale = 'de_DE',
  languages,
  image = DEFAULT_IMAGE,
}: PageMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: path,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale,
      url,
      siteName: 'Morgenlicht Alltagshilfe',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: 'Morgenlicht Alltagshilfe Berlin',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}
