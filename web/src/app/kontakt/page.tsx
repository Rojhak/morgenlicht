'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react'
import { Modal } from '../components/ui'
import { GlassButton } from '../components/glass'

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
                  <span className="text-red-500 ml-1" aria-hidden="true" title="Pflichtfeld">*</span>
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
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-sm text-red-500 mt-1" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-[#374151]">
                  Telefonnummer
                  <span className="text-red-500 ml-1" aria-hidden="true" title="Pflichtfeld">*</span>
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
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="text-sm text-red-500 mt-1" role="alert">
                    {errors.phone}
                  </p>
                )}
              </div>

              <GlassButton
                type="submit"
                isLoading={isSubmitting}
                className="w-full bg-[#134E4A] hover:bg-[#0F3F3C] text-white font-bold py-4 rounded-xl shadow-sm"
              >
                {isSubmitting ? 'Wird gesendet...' : 'Anfrage senden'}
              </GlassButton>
            </form>
          </div>

          {/* Contact Info */}
          {/* Contact Info */}
          <div className="space-y-4">
            {/* Zentrale Tile */}
            <div className="bg-white rounded-[12px] p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:border-[#134E4A]/30 transition-colors">
              <div className="w-12 h-12 bg-[#134E4A] rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#134E4A] mb-1">Zentrale</h3>
              <a href="tel:03023593028" className="font-heading font-bold text-xl text-[#134E4A] hover:text-[#0F3F3C] transition-colors mb-1">
                030 235 930 28
              </a>
              <p className="text-sm text-[#6B7280]">
                Mo–Fr: 09:00 – 16:00 Uhr
              </p>
            </div>

            {/* Mobil Tile - With WhatsApp Button */}
            <div className="bg-white rounded-[12px] p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:border-[#134E4A]/30 transition-colors">
              <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center mb-4">
                 <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <h3 className="font-heading font-bold text-lg text-[#134E4A] mb-1">WhatsApp & Mobil</h3>
              <a href="tel:015156057365" className="font-heading font-bold text-xl text-[#134E4A] hover:text-[#0F3F3C] transition-colors mb-2">
                0151 560 573 65
              </a>
              <a
                 href="https://wa.me/4915156057365"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-[#20bd5a] transition-colors mt-1"
               >
                 <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                 </svg>
                 Nachricht senden
               </a>
            </div>

            {/* Email Tile */}
            <div className="bg-white rounded-[12px] p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center hover:border-[#134E4A]/30 transition-colors">
              <div className="w-12 h-12 bg-[#FFFBEB] rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-[#FBBF24]" aria-hidden="true" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1F2937] mb-1">E-Mail</h3>
              <a href="mailto:info@morgenlicht-alltagshilfe.de" className="text-[#134E4A] hover:underline font-medium break-all">
                info@morgenlicht-alltagshilfe.de
              </a>
            </div>

            {/* Service & Trust (Optional - kept simple or merged) */}
            <div className="bg-[#F0FDF4] rounded-[12px] p-6 border border-[#134E4A]/10 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <CheckCircle className="w-6 h-6 text-[#134E4A]" aria-hidden="true" />
              </div>
              <h3 className="font-heading font-bold text-[#134E4A] mb-1">Anerkannter Anbieter</h3>
              <p className="text-sm text-[#1F2937]">
                Kostenlos ab Pflegegrad 1<br/>nach § 45a SGB XI
              </p>
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
