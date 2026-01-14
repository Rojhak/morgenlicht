export const CARE_RATES = {
  hourlyRate: 38.50,        // Morgenlicht hourly rate (€)
  entlastungsbetrag: 131,   // Monthly §45b allowance (€)
  currency: 'EUR'
} as const

export const calculateCoveredHours = (pflegegrad: number): number => {
  if (pflegegrad < 1 || pflegegrad > 5) return 0
  const monthlyBudget = CARE_RATES.entlastungsbetrag
  return Math.floor((monthlyBudget / CARE_RATES.hourlyRate) * 10) / 10
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
