'use client'

import { useState, useEffect } from 'react'

const STORAGE_KEY = 'morgenlicht-lang'

export function LanguageSwitcher() {
  const [locale, setLocale] = useState('de')

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) setLocale(stored)
  }, [])

  const handleChange = (newLocale: string) => {
    setLocale(newLocale)
    localStorage.setItem(STORAGE_KEY, newLocale)
    // In a full implementation, this would trigger a re-render with new locale
  }

  return (
    <div className="flex items-center gap-1 text-sm" role="group" aria-label="Sprache wählen">
      <button
        onClick={() => handleChange('de')}
        className={`px-2 py-1 rounded transition-colors
                   focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2
                   ${locale === 'de'
                     ? 'text-[#0D6E64] font-semibold'
                     : 'text-[#455A64] hover:text-[#37474F]'
                   }`}
        aria-pressed={locale === 'de'}
      >
        DE
      </button>
      <span className="text-[#78909C]" aria-hidden="true">|</span>
      <button
        onClick={() => handleChange('tr')}
        className={`px-2 py-1 rounded transition-colors
                   focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2
                   ${locale === 'tr'
                     ? 'text-[#0D6E64] font-semibold'
                     : 'text-[#455A64] hover:text-[#37474F]'
                   }`}
        aria-pressed={locale === 'tr'}
        disabled
        title="Türkisch - Demnächst verfügbar"
      >
        TR
      </button>
    </div>
  )
}
