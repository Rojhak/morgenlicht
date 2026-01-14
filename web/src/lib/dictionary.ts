import de from '@/locales/de.json'

type Dictionary = typeof de

const dictionaries: Record<string, Dictionary> = {
  de,
}

export function getDictionary(locale: string = 'de'): Dictionary {
  return dictionaries[locale] || dictionaries.de
}

export type { Dictionary }
