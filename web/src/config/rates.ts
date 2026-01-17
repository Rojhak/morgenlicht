// SGB XI care rates for Germany (2024/2025)
export const CARE_RATES = {
  hourlyRate: 38.50,        // Morgenlicht hourly rate (€)
  entlastungsbetrag: 125,   // Monthly §45b allowance (€) - same for all Pflegegrade
  currency: 'EUR'
} as const

// Pflegesachleistungen (§36 SGB XI) - can partially convert to Entlastung
// Up to 40% of unused Sachleistungen can be used for Entlastungsleistungen
const PFLEGESACHLEISTUNGEN: Record<number, number> = {
  1: 0,      // Pflegegrad 1: No Sachleistungen
  2: 761,    // Pflegegrad 2: 761€/month
  3: 1432,   // Pflegegrad 3: 1,432€/month
  4: 1778,   // Pflegegrad 4: 1,778€/month
  5: 2200,   // Pflegegrad 5: 2,200€/month
}

// Calculate maximum monthly budget available
// = Entlastungsbetrag + up to 40% of Pflegesachleistungen (Umwandlungsanspruch)
export const getMonthlyBudget = (pflegegrad: number): { base: number; max: number; convertible: number } => {
  if (pflegegrad < 1 || pflegegrad > 5) {
    return { base: 0, max: 0, convertible: 0 }
  }

  const base = CARE_RATES.entlastungsbetrag
  const sachleistung = PFLEGESACHLEISTUNGEN[pflegegrad] || 0
  const convertible = Math.floor(sachleistung * 0.4) // 40% Umwandlungsanspruch
  const max = base + convertible

  return { base, max, convertible }
}

// Calculate hours based on Entlastungsbetrag only (guaranteed)
export const calculateCoveredHours = (pflegegrad: number): number => {
  const budget = getMonthlyBudget(pflegegrad)
  return Math.floor((budget.base / CARE_RATES.hourlyRate) * 10) / 10
}

// Calculate maximum possible hours (including Umwandlungsanspruch)
export const calculateMaxHours = (pflegegrad: number): number => {
  const budget = getMonthlyBudget(pflegegrad)
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
