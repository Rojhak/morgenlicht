// SGB XI care rates for Germany (2025)
// Updated January 2025
export const CARE_RATES = {
  hourlyRate: 38.50,        // Morgenlicht hourly rate (€)
  entlastungsbetrag: 131,   // Monthly §45b allowance (€) - same for all Pflegegrade (2025)
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

// Calculate monthly budget based on whether user already uses Pflegesachleistungen
export const getMonthlyBudget = (
  pflegegrad: number,
  usesSachleistungen: boolean = false
): { base: number; max: number; convertible: number; sachleistung: number } => {
  if (pflegegrad < 1 || pflegegrad > 5) {
    return { base: 0, max: 0, convertible: 0, sachleistung: 0 }
  }

  const base = CARE_RATES.entlastungsbetrag
  const sachleistung = PFLEGESACHLEISTUNGEN[pflegegrad] || 0

  // If user already uses Sachleistungen for nursing care, they can't convert
  const convertible = usesSachleistungen ? 0 : Math.floor(sachleistung * 0.4)
  const max = base + convertible

  return { base, max, convertible, sachleistung }
}

// Calculate hours based on Entlastungsbetrag only (guaranteed for everyone)
export const calculateCoveredHours = (pflegegrad: number): number => {
  const budget = getMonthlyBudget(pflegegrad, true) // Only base
  return Math.floor((budget.base / CARE_RATES.hourlyRate) * 10) / 10
}

// Calculate maximum possible hours (when not using Sachleistungen)
export const calculateMaxHours = (pflegegrad: number): number => {
  const budget = getMonthlyBudget(pflegegrad, false) // Full potential
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
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(hours)
}
