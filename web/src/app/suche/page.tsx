'use client'

import { useState } from 'react'
import { Search, SlidersHorizontal, MapPin, Clock, Users, Star, ChevronDown, X } from 'lucide-react'
import { GlassCard, GlassButton } from '@/app/components/glass'

// Quick filter tags
const QUICK_FILTERS = [
  { id: 'all', label: 'Alle', icon: null },
  { id: 'shopping', label: 'Einkaufshilfe', icon: null },
  { id: 'companionship', label: 'Begleitung', icon: null },
  { id: 'household', label: 'Haushalt', icon: null },
  { id: 'social', label: 'Gesellschaft', icon: null },
  { id: 'care', label: 'Pflegegrad 2+', icon: null },
  { id: 'errands', label: 'Besorgungen', icon: null },
]

// Sample service data
const SERVICES = [
  {
    id: 1,
    title: 'Einkaufshilfe & Begleitung',
    description: 'Gemeinsam einkaufen und schwere Taschen tragen. Wir begleiten Sie gerne zum Supermarkt, zur Apotheke oder zu anderen Besorgungen.',
    category: 'shopping',
    location: 'Berlin-Mitte',
    availability: 'Flexibel',
    rating: 4.9,
    reviews: 127,
    icon: 'Shopping',
    accentColor: 'teal',
  },
  {
    id: 2,
    title: 'Alltagsbegleitung & Gesellschaft',
    description: 'Gespräche, Spaziergänge oder einfach zusammen Kaffee trinken. Wir sind da für liebevolle Gesellschaft und gegen Einsamkeit.',
    category: 'social',
    location: 'Berlin-Kreuzberg',
    availability: 'Mo-Fr',
    rating: 4.8,
    reviews: 93,
    icon: 'Heart',
    accentColor: 'gold',
  },
  {
    id: 3,
    title: 'Haushaltshilfe & Kochen',
    description: 'Unterstützung bei leichten Haushaltsarbeiten, Kochen und gemeinsame Mahlzeiten. Wir helfen, den Alltag angenehmer zu gestalten.',
    category: 'household',
    location: 'Berlin-Neukölln',
    availability: 'Täglich',
    rating: 4.7,
    reviews: 81,
    icon: 'Home',
    accentColor: 'coral',
  },
  {
    id: 4,
    title: 'Arztbegleitung & Termine',
    description: 'Wir begleiten Sie zu Arztterminen, Behördengängen oder anderen wichtigen Terminen und übernehmen auch das Protokollieren.',
    category: 'companionship',
    location: 'Berlin-Friedrichshain',
    availability: 'Nach Vereinbarung',
    rating: 4.9,
    reviews: 156,
    icon: 'Users',
    accentColor: 'teal',
  },
  {
    id: 5,
    title: 'Spaziergänge & Aktivierung',
    description: 'Bewegung an der frischen Luft, Gymnastikübungen oder geistige Aktivierung. Wir fördern Gesundheit und Wohlbefinden.',
    category: 'social',
    location: 'Berlin-Prenzlauer Berg',
    availability: 'Mo-Fr',
    rating: 4.8,
    reviews: 72,
    icon: 'Star',
    accentColor: 'gold',
  },
  {
    id: 6,
    title: 'Pflegegrad-spezifische Hilfe',
    description: 'Speziell für Pflegegrad 2-5: Umfassende Unterstützung im Alltag mit auf Ihre Bedürfnisse abgestimmten Leistungen.',
    category: 'care',
    location: 'Berlin-Charlottenburg',
    availability: '24/7',
    rating: 5.0,
    reviews: 201,
    icon: 'Shield',
    accentColor: 'teal',
  },
]

const ICON_MAP: Record<string, React.ElementType> = {
  Shopping: ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>,
  Heart: ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>,
  Home: ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  Users: ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  Star: ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  Shield: ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>,
}

const BORDER_COLORS: Record<string, string> = {
  teal: 'border-l-4 border-l-[#0D6E64]',
  gold: 'border-l-4 border-l-[#FFB300]',
  coral: 'border-l-4 border-l-[#E65100]',
}

const ICON_COLORS: Record<string, string> = {
  teal: 'text-[#0D6E64]',
  gold: 'text-[#FFB300]',
  coral: 'text-[#E65100]',
}

const BG_COLORS: Record<string, string> = {
  teal: 'bg-[#E0F2F1]',
  gold: 'bg-[#FFF8E1]',
  coral: 'bg-[#FBE9E7]',
}

export default function SucheePage() {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  // Filter services based on selection
  const filteredServices = SERVICES.filter((service) => {
    const matchesCategory = selectedFilter === 'all' || service.category === selectedFilter
    const matchesSearch = searchQuery === '' ||
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleFilter = (filterId: string) => {
    setActiveFilters(prev =>
      prev.includes(filterId)
        ? prev.filter(f => f !== filterId)
        : [...prev, filterId]
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-4 overflow-hidden" aria-labelledby="search-hero-title">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-gradient-to-b from-[#FFD54F]/20 via-[#FFAB91]/10 to-transparent rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] bg-gradient-to-tr from-[#26A69A]/15 via-[#4DB6AC]/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/3 -right-20 w-[300px] h-[300px] bg-gradient-to-l from-[#FFCCBC]/15 to-transparent rounded-full blur-3xl animate-float" />
          <div className="absolute top-32 left-[10%] w-3 h-3 bg-[#FFD54F]/40 rounded-full animate-float" />
          <div className="absolute top-48 right-[15%] w-2 h-2 bg-[#26A69A]/40 rounded-full animate-float-slow" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/70 backdrop-blur-sm border border-white/50 rounded-full text-sm font-medium text-[#0D6E64] mb-8 shadow-lg shadow-black/5">
            <Search className="w-4 h-4" aria-hidden="true" />
            <span>Finden Sie passende Hilfe</span>
          </div>

          {/* Title */}
          <h1 id="search-hero-title" className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-teal-900 mb-6 tracking-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-900 via-teal-800 to-teal-900">
              Finden Sie die
            </span>
            <span className="block mt-2 text-teal-800 italic">
              passende Unterstützung
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-teal-700/80 max-w-2xl mx-auto leading-relaxed mb-12">
            Durchsuchen Sie unsere Angebote und finden Sie genau die Hilfe, die Sie benötigen.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <GlassCard className="p-2 flex items-center gap-2">
              <Search className="w-5 h-5 text-[#455A64] ml-3 flex-shrink-0" aria-hidden="true" />
              <input
                type="search"
                placeholder="Suche nach Hilfe, Dienstleistungen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent border-0 outline-none text-[#37474F] placeholder:text-[#455A64] py-3 px-2"
                aria-label="Suche nach Dienstleistungen"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-2 hover:bg-black/5 rounded-full transition-colors"
                  aria-label="Suche löschen"
                >
                  <X className="w-5 h-5 text-[#455A64]" />
                </button>
              )}
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Quick Filter Tags */}
      <section className="py-8 px-4 border-y border-white/40 bg-white/30 backdrop-blur-sm sticky top-16 z-30" aria-label="Schnellfilter">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {QUICK_FILTERS.map((filter) => {
              const isActive = selectedFilter === filter.id
              return (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`
                    flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm whitespace-nowrap
                    transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2
                    ${isActive
                      ? 'bg-[#0D6E64] text-white shadow-md scale-105'
                      : 'bg-white/60 text-[#37474F] hover:bg-white/80 hover:scale-105 border border-transparent hover:border-[#0D6E64]/30'
                    }
                  `}
                  aria-pressed={isActive}
                >
                  {filter.icon}
                  {filter.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4" aria-labelledby="results-title">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter Sidebar */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="lg:sticky lg:top-36">
                {/* Filter Toggle Button (Mobile) */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden w-full flex items-center justify-between p-4 glass rounded-xl mb-4"
                  aria-expanded={showFilters}
                >
                  <div className="flex items-center gap-3 text-[#37474F] font-semibold">
                    <SlidersHorizontal className="w-5 h-5" />
                    <span>Filter</span>
                    {activeFilters.length > 0 && (
                      <span className="w-6 h-6 bg-[#0D6E64] text-white rounded-full text-sm flex items-center justify-center">
                        {activeFilters.length}
                      </span>
                    )}
                  </div>
                  <ChevronDown className={`w-5 h-5 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                </button>

                {/* Filter Card */}
                <GlassCard className={`p-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#E0F2F1] rounded-xl flex items-center justify-center">
                      <SlidersHorizontal className="w-5 h-5 text-[#0D6E64]" />
                    </div>
                    <h2 className="text-lg font-semibold text-[#37474F]">Filter</h2>
                    {activeFilters.length > 0 && (
                      <button
                        onClick={() => setActiveFilters([])}
                        className="ml-auto text-sm text-[#0D6E64] hover:underline"
                      >
                        Alle löschen
                      </button>
                    )}
                  </div>

                  {/* Filter Options */}
                  <div className="space-y-6">
                    {/* Availability Filter */}
                    <div>
                      <h3 className="text-sm font-semibold text-[#37474F] mb-3 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Verfügbarkeit
                      </h3>
                      <div className="space-y-2">
                        {['Flexibel', 'Mo-Fr', 'Täglich', '24/7'].map((option) => (
                          <button
                            key={option}
                            onClick={() => toggleFilter(`avail-${option}`)}
                            className={`
                              w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all
                              ${activeFilters.includes(`avail-${option}`)
                                ? 'bg-[#E0F2F1] text-[#0D6E64]'
                                : 'bg-white/40 text-[#37474F] hover:bg-white/60'
                              }
                            `}
                          >
                            <div className={`
                              w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors
                              ${activeFilters.includes(`avail-${option}`)
                                ? 'border-[#0D6E64] bg-[#0D6E64]'
                                : 'border-[#455A64]'
                              }
                            `}>
                              {activeFilters.includes(`avail-${option}`) && (
                                <div className="w-2 h-2 bg-white rounded-full" />
                              )}
                            </div>
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Location Filter */}
                    <div className="pt-4 border-t border-[#0D6E64]/10">
                      <h3 className="text-sm font-semibold text-[#37474F] mb-3 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Standort
                      </h3>
                      <div className="space-y-2">
                        {['Berlin-Mitte', 'Berlin-Kreuzberg', 'Berlin-Neukölln', 'Berlin-Friedrichshain', 'Prenzlauer Berg', 'Charlottenburg'].map((option) => (
                          <button
                            key={option}
                            onClick={() => toggleFilter(`loc-${option}`)}
                            className={`
                              w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all
                              ${activeFilters.includes(`loc-${option}`)
                                ? 'bg-[#FFF8E1] text-[#B8472A]'
                                : 'bg-white/40 text-[#37474F] hover:bg-white/60'
                              }
                            `}
                          >
                            <div className={`
                              w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors
                              ${activeFilters.includes(`loc-${option}`)
                                ? 'border-[#B8472A] bg-[#B8472A]'
                                : 'border-[#455A64]'
                              }
                            `}>
                              {activeFilters.includes(`loc-${option}`) && (
                                <div className="w-2 h-2 bg-white rounded-full" />
                              )}
                            </div>
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </aside>

            {/* Results */}
            <main className="flex-1">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 id="results-title" className="text-xl font-semibold text-[#37474F]">
                  {filteredServices.length} {filteredServices.length === 1 ? 'Ergebnis' : 'Ergebnisse'}
                </h2>
                <div className="flex items-center gap-2 text-sm text-[#455A64]">
                  <span>Sortieren:</span>
                  <select className="bg-white/60 border border-white/50 rounded-lg px-3 py-2 text-[#37474F] focus:outline-none focus:ring-4 focus:ring-[#FFD54F]">
                    <option>Relevanz</option>
                    <option>Bewertung</option>
                    <option>Standort</option>
                  </select>
                </div>
              </div>

              {/* Results Grid */}
              <div className="space-y-4">
                {filteredServices.map((service) => {
                  const IconComponent = ICON_MAP[service.icon]
                  return (
                    <GlassCard
                      key={service.id}
                      as="article"
                      className={`
                        p-6 card-lift relative overflow-hidden
                        ${BORDER_COLORS[service.accentColor]}
                      `}
                    >
                      <div className="flex flex-col sm:flex-row gap-6">
                        {/* Icon */}
                        <div className={`
                          w-16 h-16 ${BG_COLORS[service.accentColor]} rounded-2xl
                          flex items-center justify-center flex-shrink-0
                        `}>
                          <IconComponent className={`w-8 h-8 ${ICON_COLORS[service.accentColor]}`} />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                            <h3 className="text-xl font-semibold text-[#37474F]">
                              {service.title}
                            </h3>
                            <div className="flex items-center gap-1 text-sm">
                              <Star className="w-4 h-4 text-[#FFB300] fill-[#FFB300]" />
                              <span className="font-semibold text-[#37474F]">{service.rating}</span>
                              <span className="text-[#455A64]">({service.reviews})</span>
                            </div>
                          </div>

                          <p className="text-[#455A64] leading-relaxed mb-4">
                            {service.description}
                          </p>

                          {/* Meta Info */}
                          <div className="flex flex-wrap items-center gap-4 text-sm text-[#455A64] mb-4">
                            <div className="flex items-center gap-1.5">
                              <MapPin className="w-4 h-4" />
                              <span>{service.location}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-4 h-4" />
                              <span>{service.availability}</span>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center gap-3">
                            <GlassButton variant="primary" size="md" className="group">
                              Jetzt anfragen
                              <Star className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
                            </GlassButton>
                            <GlassButton variant="ghost" size="md">
                              Mehr erfahren
                            </GlassButton>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  )
                })}

                {/* No Results */}
                {filteredServices.length === 0 && (
                  <GlassCard className="p-12 text-center">
                    <div className="w-20 h-20 bg-[#FFF8E1] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Search className="w-10 h-10 text-[#FFB300]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#37474F] mb-2">
                      Keine Ergebnisse gefunden
                    </h3>
                    <p className="text-[#455A64] mb-6">
                      Versuchen Sie es mit anderen Filtern oder einer anderen Suche.
                    </p>
                    <GlassButton
                      variant="ghost"
                      size="md"
                      onClick={() => {
                        setSelectedFilter('all')
                        setSearchQuery('')
                        setActiveFilters([])
                      }}
                    >
                      Filter zurücksetzen
                    </GlassButton>
                  </GlassCard>
                )}
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  )
}
