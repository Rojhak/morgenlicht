'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { Modal } from '../components/ui'

const PHONE = '030 235 930 28 / 0151 560 573 65'
const PHONE_HREF = '03023593028'

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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-16 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-full px-4 py-1.5 border border-[#144E41]/10 shadow-sm">
            <span className="text-[#144E41] font-semibold text-sm tracking-wide">
              Wir sind für Sie da
            </span>
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#134E4A] mb-4 font-heading">
          Kontakt aufnehmen
        </h1>
        <p className="text-[#134E4A]/80 text-lg max-w-2xl mx-auto font-body">
          Haben Sie Fragen zu unseren Leistungen oder benötigen Sie Unterstützung?
          Schreiben Sie uns oder rufen Sie uns direkt an.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Column 1: Form Card */}
          <div className="bg-white rounded-xl p-6 md:p-10 shadow-sm border border-gray-100 flex flex-col h-full">
            <h2 className="text-2xl font-bold text-[#134E4A] mb-8 font-heading">
              Anfrage senden
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6 flex-grow">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                  Ihr Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Vor- und Nachname"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  onBlur={() => handleBlur('name')}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200 focus:border-[#144E41] focus:ring-1 focus:ring-[#144E41]'
                    } bg-white transition-all outline-none`}
                  required
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="text-sm text-red-500 mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                  Telefonnummer <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Für unseren Rückruf"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  onBlur={() => handleBlur('phone')}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200 focus:border-[#144E41] focus:ring-1 focus:ring-[#144E41]'
                    } bg-white transition-all outline-none`}
                  required
                />
                {errors.phone && (
                  <p id="phone-error" role="alert" className="text-sm text-red-500 mt-1">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                  Wie können wir Ihnen helfen? (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Ihre Nachricht an uns..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#144E41] focus:ring-1 focus:ring-[#144E41] bg-white transition-all outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#144E41] text-white font-bold py-4 rounded-xl hover:bg-[#0F3F3C] transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Wird gesendet...</span>
                  </>
                ) : (
                  'Anfrage senden'
                )}
              </button>
            </form>
          </div>

          {/* Column 2: Symmetric Info Card */}
          <div className="bg-white rounded-xl p-6 md:p-10 shadow-sm border border-gray-100 flex flex-col h-full">
            <h2 className="text-2xl font-bold text-[#134E4A] mb-8 font-heading">
              Unsere Erreichbarkeit
            </h2>

            <div className="flex flex-col gap-10 flex-grow">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#F0FDF4] rounded-lg flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-5 h-5 text-[#144E41]" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-[#134E4A] mb-0.5">Zentrale</h3>
                  <a href={`tel:${PHONE_HREF}`} className="text-lg font-bold text-[#134E4A] hover:text-[#0F3F3C] transition-colors block">
                    030 235 930 28
                  </a>
                  <p className="text-gray-500 text-xs italic">Mo–Fr: 09:00 – 16:00 Uhr</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#F0FDF4] rounded-lg flex items-center justify-center shrink-0 mt-1">
                   <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#144E41]" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-[#134E4A] mb-0.5">WhatsApp & Mobil</h3>
                  <a href="tel:015156057365" className="text-lg font-bold text-[#134E4A] hover:text-[#0F3F3C] transition-colors block">
                    0151 560 573 65
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#F0FDF4] rounded-lg flex items-center justify-center shrink-0 mt-1">
                  <Mail className="w-5 h-5 text-[#144E41]" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-[#134E4A] mb-0.5">E-Mail</h3>
                  <a href="mailto:info@morgenlicht-alltagshilfe.de" className="text-lg font-bold text-[#134E4A] hover:text-[#0F3F3C] transition-colors break-all block">
                    info@morgenlicht-alltagshilfe.de
                  </a>
                </div>
              </div>
            </div>

            {/* Dezent Info Block at the bottom - pushed down with mt-auto for symmetry */}
            <div className="mt-auto pt-10 border-t border-gray-100">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#F0FDF4] rounded-lg flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-[#144E41]" />
                </div>
                <div className="text-[#144E41]">
                  <p className="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wider">
                    Zertifizierte Qualität
                  </p>
                  <h3 className="font-heading font-bold text-base mb-1">
                    Anerkannter Anbieter <span className="font-normal text-gray-400 text-sm italic">nach § 45a SGB XI</span>
                  </h3>
                  <p className="text-sm leading-relaxed">
                    <span className="font-bold">Kostenlos</span> ab Pflegegrad 1 durch direkte Abrechnung mit Ihrer Pflegekasse.
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
