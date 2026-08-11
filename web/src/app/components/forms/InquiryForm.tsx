'use client'

import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, LoaderCircle, Phone } from 'lucide-react'

type FieldName = 'name' | 'phone' | 'privacy'
type FieldErrors = Partial<Record<FieldName, string>>
type SubmissionState = 'idle' | 'submitting' | 'success' | 'error'

declare global {
  interface Window {
    plausible?: (
      eventName: string,
      options?: { props?: Record<string, string | number | boolean> },
    ) => void
  }
}

const PHONE_LABEL = '030 235 930 28'
const PHONE_HREF = '03023593028'

function validateField(field: FieldName, value: string | boolean): string | undefined {
  if (field === 'name') {
    const name = typeof value === 'string' ? value.trim() : ''
    if (name.length < 2) return 'Bitte geben Sie Ihren Namen ein.'
  }

  if (field === 'phone') {
    const phone = typeof value === 'string' ? value.trim() : ''
    if (!/^[\d\s+\-()/.]{6,30}$/.test(phone)) {
      return 'Bitte geben Sie eine erreichbare Telefonnummer ein.'
    }
  }

  if (field === 'privacy' && value !== true) {
    return 'Bitte bestätigen Sie den Datenschutzhinweis.'
  }

  return undefined
}

export function InquiryForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const successRef = useRef<HTMLDivElement>(null)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle')
  const [serverMessage, setServerMessage] = useState('')

  useEffect(() => {
    if (submissionState === 'success') {
      successRef.current?.focus()
    }
  }, [submissionState])

  const validateOnBlur = (field: Exclude<FieldName, 'privacy'>, value: string) => {
    setErrors((current) => ({ ...current, [field]: validateField(field, value) }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') ?? '')
    const phone = String(formData.get('phone') ?? '')
    const privacy = formData.get('privacy') === 'on'

    const nextErrors: FieldErrors = {
      name: validateField('name', name),
      phone: validateField('phone', phone),
      privacy: validateField('privacy', privacy),
    }

    const visibleErrors = Object.fromEntries(
      Object.entries(nextErrors).filter((entry): entry is [FieldName, string] => Boolean(entry[1])),
    ) as FieldErrors

    setErrors(visibleErrors)
    setServerMessage('')

    const firstInvalidField = (['name', 'phone', 'privacy'] as FieldName[]).find(
      (field) => visibleErrors[field],
    )

    if (firstInvalidField) {
      form.querySelector<HTMLElement>(`[name="${firstInvalidField}"]`)?.focus()
      return
    }

    setSubmissionState('submitting')

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          message: String(formData.get('message') ?? '').trim() || undefined,
          privacy,
          website: String(formData.get('website') ?? ''),
        }),
      })

      const payload: unknown = await response.json().catch(() => null)

      if (!response.ok) {
        const message =
          payload && typeof payload === 'object' && 'error' in payload && typeof payload.error === 'string'
            ? payload.error
            : 'Ihre Anfrage konnte gerade nicht gesendet werden.'
        throw new Error(message)
      }

      form.reset()
      setErrors({})
      setSubmissionState('success')
      window.plausible?.('Rueckrufanfrage', {
        props: { formular: 'kontakt' },
      })
    } catch (error) {
      setServerMessage(error instanceof Error ? error.message : 'Ihre Anfrage konnte gerade nicht gesendet werden.')
      setSubmissionState('error')
    }
  }

  if (submissionState === 'success') {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        className="rounded-2xl border border-[#134E4A]/20 bg-[#F0FDF4] p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <CheckCircle className="mx-auto h-12 w-12 text-[#134E4A]" aria-hidden="true" />
        <h2 className="mt-5 font-heading text-2xl font-bold text-[#134E4A]">
          Vielen Dank für Ihre Anfrage
        </h2>
        <p className="mt-3 leading-relaxed text-[#4B5563]">
          Wir haben Ihre Rückrufanfrage erhalten und melden uns telefonisch bei Ihnen.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmissionState('idle')
            window.requestAnimationFrame(() => {
              document.getElementById('inquiry-name')?.focus()
            })
          }}
          className="mt-6 min-h-12 rounded-xl border-2 border-[#134E4A]/20 bg-white px-6 font-semibold text-[#134E4A] focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2"
        >
          Weitere Anfrage stellen
        </button>
      </div>
    )
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      aria-busy={submissionState === 'submitting'}
      className="space-y-6"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="inquiry-name" className="block font-semibold text-[#134E4A]">
            Ihr Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="inquiry-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={100}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'inquiry-name-error' : undefined}
            onBlur={(event) => validateOnBlur('name', event.currentTarget.value)}
            className="mt-2 min-h-12 w-full rounded-xl border border-[#134E4A]/25 bg-white px-4 text-[#1F2937] outline-none transition focus:border-[#134E4A] focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2"
          />
          {errors.name && (
            <p id="inquiry-name-error" className="mt-2 text-sm font-medium text-red-700">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="inquiry-phone" className="block font-semibold text-[#134E4A]">
            Telefonnummer <span aria-hidden="true">*</span>
          </label>
          <input
            id="inquiry-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            maxLength={30}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={
              errors.phone ? 'inquiry-phone-hint inquiry-phone-error' : 'inquiry-phone-hint'
            }
            onBlur={(event) => validateOnBlur('phone', event.currentTarget.value)}
            className="mt-2 min-h-12 w-full rounded-xl border border-[#134E4A]/25 bg-white px-4 text-[#1F2937] outline-none transition focus:border-[#134E4A] focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2"
          />
          <p id="inquiry-phone-hint" className="mt-2 text-sm text-[#6B7280]">
            Nur für den gewünschten Rückruf.
          </p>
          {errors.phone && (
            <p id="inquiry-phone-error" className="mt-2 text-sm font-medium text-red-700">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="inquiry-message" className="block font-semibold text-[#134E4A]">
          Wobei dürfen wir helfen? <span className="font-normal text-[#6B7280]">(optional)</span>
        </label>
        <textarea
          id="inquiry-message"
          name="message"
          rows={3}
          maxLength={2000}
          aria-describedby="inquiry-message-hint"
          placeholder="Zum Beispiel: Haushaltshilfe in 10967"
          className="mt-2 w-full rounded-xl border border-[#134E4A]/25 bg-white px-4 py-3 text-[#1F2937] outline-none transition focus:border-[#134E4A] focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2"
        />
        <p id="inquiry-message-hint" className="mt-2 text-sm text-[#6B7280]">
          Bitte tragen Sie hier keine Diagnosen oder anderen Gesundheitsdaten ein.
        </p>
      </div>

      <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="inquiry-website">Website</label>
        <input id="inquiry-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3 rounded-xl bg-[#F7F6F3] p-4">
          <input
            name="privacy"
            type="checkbox"
            required
            aria-invalid={Boolean(errors.privacy)}
            aria-describedby={errors.privacy ? 'inquiry-privacy-error' : undefined}
            onChange={(event) =>
              setErrors((current) => ({
                ...current,
                privacy: validateField('privacy', event.currentTarget.checked),
              }))
            }
            className="mt-1 h-5 w-5 flex-none accent-[#134E4A] focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2"
          />
          <span className="text-sm leading-relaxed text-[#4B5563]">
            Ich habe die{' '}
            <Link
              href="/datenschutz"
              className="rounded font-semibold text-[#134E4A] underline underline-offset-2 focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2"
            >
              Datenschutzhinweise
            </Link>{' '}
            gelesen. Meine Angaben dürfen zur Bearbeitung der Anfrage verwendet werden.
          </span>
        </label>
        {errors.privacy && (
          <p id="inquiry-privacy-error" className="mt-2 text-sm font-medium text-red-700">
            {errors.privacy}
          </p>
        )}
      </div>

      {submissionState === 'error' && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-800" role="alert">
          <p className="font-semibold">Ihre Anfrage konnte nicht gesendet werden.</p>
          <p className="mt-1 text-sm">{serverMessage}</p>
          <a href={`tel:${PHONE_HREF}`} className="mt-3 inline-flex min-h-12 items-center gap-2 font-bold underline">
            <Phone className="h-5 w-5" aria-hidden="true" />
            Bitte rufen Sie uns an: {PHONE_LABEL}
          </a>
        </div>
      )}

      <p className="sr-only" role="status" aria-live="polite">
        {submissionState === 'submitting' ? 'Ihre Anfrage wird gesendet.' : ''}
      </p>

      <button
        type="submit"
        disabled={submissionState === 'submitting'}
        className="inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-[#134E4A] px-7 text-lg font-bold text-white shadow-lg transition hover:bg-[#0F3F3C] focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2 disabled:cursor-wait disabled:opacity-70"
      >
        {submissionState === 'submitting' ? (
          <>
            <LoaderCircle className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
            Anfrage wird gesendet
          </>
        ) : (
          <>
            Kostenfreien Rückruf anfragen
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </>
        )}
      </button>

      <p className="text-center text-sm text-[#6B7280]">* Pflichtfeld · unverbindliche Erstberatung</p>
    </form>
  )
}
