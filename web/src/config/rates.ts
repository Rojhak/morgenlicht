// SGB XI care rates used by the public calculator (checked July 2026)
export const CARE_RATES = {
  hourlyRate: 35.50,        // Morgenlicht hourly rate (€)
  entlastungsbetrag: 131,   // Monthly §45b allowance (€) for Pflegegrad 1-5
  currency: 'EUR'
} as const

// Pflegesachleistungen (§36 SGB XI) - 2025 rates
// Up to 40% of unused Sachleistungen can be used for Entlastungsleistungen
const PFLEGESACHLEISTUNGEN: Record<number, number> = {
  1: 0,       // Pflegegrad 1: No Sachleistungen
  2: 796,     // Pflegegrad 2: 796€/month (2025)
  3: 1497,    // Pflegegrad 3: 1,497€/month (2025)
  4: 1859,    // Pflegegrad 4: 1,859€/month (2025)
  5: 2299,    // Pflegegrad 5: 2,299€/month (2025)
}

// Get Pflegesachleistung for a specific grade
export const getPflegesachleistung = (pflegegrad: number): number => {
  return PFLEGESACHLEISTUNGEN[pflegegrad] || 0
}

// Public calculations intentionally include only the §45b allowance.
// A possible §45a conversion depends on actual §36 use and can affect Pflegegeld;
// it must therefore be checked individually instead of calculated here.
export const getMonthlyBudget = (
  pflegegrad: number,
  _usesSachleistungen: boolean = false
): { base: number; max: number; convertible: number; sachleistung: number } => {
  if (pflegegrad < 1 || pflegegrad > 5) {
    return { base: 0, max: 0, convertible: 0, sachleistung: 0 }
  }

  const base = CARE_RATES.entlastungsbetrag
  const sachleistung = PFLEGESACHLEISTUNGEN[pflegegrad] || 0

  const convertible = 0
  const max = base

  return { base, max, convertible, sachleistung }
}

// Calculate hours based on Entlastungsbetrag only (guaranteed for everyone)
export const calculateCoveredHours = (pflegegrad: number): number => {
  const budget = getMonthlyBudget(pflegegrad, true) // Only base
  return Math.floor((budget.base / CARE_RATES.hourlyRate) * 10) / 10
}

// Kept for API compatibility: no unverified conversion amount is added.
export const calculateMaxHours = (pflegegrad: number): number => {
  const budget = getMonthlyBudget(pflegegrad, true)
  return Math.floor((budget.max / CARE_RATES.hourlyRate) * 10) / 10
}

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: CARE_RATES.currency,
  }).format(amount)
}

export const formatHours = (hours: number): string => {
  return new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(hours)
}
