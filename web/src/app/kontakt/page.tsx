'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, CheckCircle, AlertCircle, Clock, Heart } from 'lucide-react'
import { GlassCard, GlassButton, GlassInput } from '../components/glass'
import { Modal } from '../components/ui'

const PHONE = '069 12345678'

interface FormData {
  name: string
  phone: string
  pflegegrad?: string
}

interface FormErrors {
  name?: string
  phone?: string
}

export default function KontaktPage() {
  const [formData, setFormData] = useState<FormData>({ name: '', phone: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [showModal, setShowModal] = useState(false)

  const validateField = (name: keyof FormData, value: string): string | undefined => {
    if (name === 'name' && !value.trim()) {
      return 'Bitte geben Sie Ihren Namen ein'
    }
    if (name === 'phone') {
      if (!value.trim()) {
        return 'Bitte geben Sie Ihre Telefonnummer ein'
      }
      const phoneRegex = /^[0-9\s\-\+\(\)]{6,}$/
      if (!phoneRegex.test(value)) {
        return 'Bitte geben Sie eine gültige Telefonnummer ein'
      }
    }
    return undefined
  }

  const handleBlur = (name: keyof FormData) => {
    const error = validateField(name, formData[name] || '')
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate all fields
    const newErrors: FormErrors = {}
    const nameError = validateField('name', formData.name)
    const phoneError = validateField('phone', formData.phone)

    if (nameError) newErrors.name = nameError
    if (phoneError) newErrors.phone = phoneError

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setShowModal(true)
        setFormData({ name: '', phone: '' })
      } else {
        setSubmitStatus('error')
        setShowModal(true)
      }
    } catch {
      setSubmitStatus('error')
      setShowModal(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="py-16 px-4 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#26A69A]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-[#FFD54F]/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-[#FFF8E1] rounded-full text-sm font-medium text-[#B8472A] mb-4">
            Wir sind für Sie da
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#37474F] mb-4">
            Kontakt aufnehmen
          </h1>
          <p className="text-lg text-[#455A64]">
            Wir melden uns innerhalb von 24 Stunden bei Ihnen
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <GlassCard className="p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD54F]/10 rounded-full blur-2xl" aria-hidden="true" />
            <div className="relative">
              <h2 className="text-xl font-semibold text-[#37474F] mb-6">
                Anfrage senden
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <GlassInput
                  label="Ihr Name"
                  name="name"
                  placeholder="Vor- und Nachname"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  onBlur={() => handleBlur('name')}
                  error={errors.name}
                  required
                />

                <GlassInput
                  label="Telefonnummer"
                  name="phone"
                  type="tel"
                  placeholder="Für unseren Rückruf"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  onBlur={() => handleBlur('phone')}
                  error={errors.phone}
                  required
                />

                <GlassButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full btn-shadow-orange"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Anfrage senden'}
                </GlassButton>
              </form>
            </div>
          </GlassCard>

          {/* Contact Info */}
          <div className="space-y-5">
            <GlassCard className="p-6 card-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0D6E64]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#0D6E64]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#37474F] mb-1">Telefon</h3>
                  <a
                    href={`tel:${PHONE.replace(/\s/g, '')}`}
                    className="text-xl font-medium text-[#0D6E64] hover:underline
                               focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2 rounded"
                  >
                    {PHONE}
                  </a>
                  <p className="text-sm text-[#455A64] mt-1">
                    Mo-Fr 9:00 - 17:00 Uhr
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6 card-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#B8472A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#B8472A]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#37474F] mb-1">E-Mail</h3>
                  <a
                    href="mailto:info@morgenlicht-alltagshilfe.de"
                    className="text-[#0D6E64] hover:underline
                               focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2 rounded"
                  >
                    info@morgenlicht-alltagshilfe.de
                  </a>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6 card-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FFD54F]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#B8472A]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#37474F] mb-1">Servicegebiet</h3>
                  <p className="text-[#455A64]">
                    Wir betreuen Familien im Raum Frankfurt und Umgebung
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* Trust Badge */}
            <GlassCard className="p-6 bg-gradient-to-br from-[#E0F2F1] to-[#E8F5E9]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/60 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-[#B8472A]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#37474F] mb-1">Anerkannter Anbieter</h3>
                  <p className="text-sm text-[#455A64]">
                    nach § 45a SGB XI – Ihre Anfrage ist unverbindlich und kostenlos.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>

      {/* Success/Error Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={submitStatus === 'success' ? 'Vielen Dank!' : 'Fehler'}
      >
        {submitStatus === 'success' ? (
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#E0F2F1] to-[#E8F5E9] rounded-full mb-4">
              <CheckCircle className="w-8 h-8 text-[#0D6E64]" aria-hidden="true" />
            </div>
            <p className="text-[#37474F] mb-4">
              Wir haben Ihre Anfrage erhalten und melden uns zeitnah bei Ihnen.
            </p>
            <GlassButton variant="primary" onClick={() => setShowModal(false)}>
              Schließen
            </GlassButton>
          </div>
        ) : (
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-full mb-4">
              <AlertCircle className="w-8 h-8 text-red-600" aria-hidden="true" />
            </div>
            <p className="text-[#37474F] mb-2">
              Ihre Anfrage konnte nicht gesendet werden.
            </p>
            <p className="text-[#455A64] mb-4">
              Bitte rufen Sie uns direkt an:
            </p>
            <a
              href={`tel:${PHONE.replace(/\s/g, '')}`}
              className="text-xl font-bold text-[#B8472A] hover:underline"
            >
              {PHONE}
            </a>
            <div className="mt-6">
              <GlassButton variant="ghost" onClick={() => setShowModal(false)}>
                Schließen
              </GlassButton>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
