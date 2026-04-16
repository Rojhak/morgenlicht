import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Morgenlicht Alltagshilfe Berlin',
    short_name: 'Morgenlicht',
    description:
      'Staatlich anerkannte Alltagshilfe für Senioren in Berlin Kreuzberg, Neukölln und Mitte. 100 % Kostenübernahme ab Pflegegrad 1.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF9F6',
    theme_color: '#144E41',
    lang: 'de-DE',
    categories: ['health', 'lifestyle', 'medical'],
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/trans_logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  }
}
