'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react'
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
    <div className="py-16 px-4 relative overflow-hidden bg-[#FAF9F6]">
      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-[#FFFBEB] rounded-full text-sm font-bold text-[#134E4A] mb-4 border border-[#FBBF24]">
            Wir sind für Sie da
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-[#134E4A] mb-4">
            Kontakt aufnehmen
          </h1>
          <p className="text-lg text-[#1F2937] font-body">
            Wir melden uns innerhalb von 24 Stunden bei Ihnen
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-[16px] p-8 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-[#134E4A] mb-6 font-heading">
              Anfrage senden
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-[#374151]">
                  Ihr Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Vor- und Nachname"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  onBlur={() => handleBlur('name')}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200 focus:border-[#134E4A] focus:ring-1 focus:ring-[#134E4A]'
                    } bg-white transition-colors outline-none`}
                  required
                />
                {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-[#374151]">
                  Telefonnummer
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Für unseren Rückruf"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  onBlur={() => handleBlur('phone')}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200 focus:border-[#134E4A] focus:ring-1 focus:ring-[#134E4A]'
                    } bg-white transition-colors outline-none`}
                  required
                />
                {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#134E4A] text-white font-bold py-4 rounded-xl hover:bg-[#0F3F3C] transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-sm"
              >
                {isSubmitting ? 'Wird gesendet...' : 'Anfrage senden'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <div className="bg-white rounded-[16px] p-6 shadow-sm border border-gray-100 hover:border-[#134E4A] transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F0FDF4] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#134E4A]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1F2937] mb-1 font-heading">Telefon</h3>
                  <a
                    href={`tel:${PHONE.replace(/\s/g, '')}`}
                    className="text-xl font-medium text-[#134E4A] hover:underline"
                  >
                    {PHONE}
                  </a>
                  <p className="text-sm text-[#4B5563] mt-1">
                    Mo-Fr 9:00 - 17:00 Uhr
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[16px] p-6 shadow-sm border border-gray-100 hover:border-[#134E4A] transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FFFBEB] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#FBBF24]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1F2937] mb-1 font-heading">E-Mail</h3>
                  <a
                    href="mailto:info@morgenlicht-alltagshilfe.de"
                    className="text-[#134E4A] hover:underline"
                  >
                    info@morgenlicht-alltagshilfe.de
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[16px] p-6 shadow-sm border border-gray-100 hover:border-[#134E4A] transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#1F2937]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1F2937] mb-1 font-heading">Servicegebiet</h3>
                  <p className="text-[#4B5563]">
                    Wir betreuen Familien in ganz Berlin
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-[#F0FDF4] rounded-[16px] p-6 border border-[#134E4A]/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-[#134E4A]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-[#134E4A] mb-1 font-heading">Anerkannter Anbieter</h3>
                  <p className="text-sm text-[#1F2937]">
                    nach § 45a SGB XI – Ihre Anfrage ist unverbindlich und kostenlos.
                  </p>
                </div>
              </div>
            </div>
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F0FDF4] rounded-full mb-4">
              <CheckCircle className="w-8 h-8 text-[#134E4A]" aria-hidden="true" />
            </div>
            <p className="text-[#1F2937] mb-4">
              Wir haben Ihre Anfrage erhalten und melden uns zeitnah bei Ihnen.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-6 py-2 bg-[#134E4A] text-white rounded-xl font-bold hover:bg-[#0F3F3C] transition-colors"
            >
              Schließen
            </button>
          </div>
        ) : (
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-full mb-4">
              <AlertCircle className="w-8 h-8 text-red-600" aria-hidden="true" />
            </div>
            <p className="text-[#1F2937] mb-2">
              Ihre Anfrage konnte nicht gesendet werden.
            </p>
            <p className="text-[#4B5563] mb-4">
              Bitte rufen Sie uns direkt an:
            </p>
            <a
              href={`tel:${PHONE.replace(/\s/g, '')}`}
              className="text-xl font-bold text-[#134E4A] hover:underline"
            >
              {PHONE}
            </a>
            <div className="mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="text-[#4B5563] hover:text-[#1F2937] font-medium"
              >
                Schließen
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
