import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { sanitizeInput, sanitizeForSubject, validateInquiry } from '@/lib/security'

const EMAIL_TO = process.env.EMAIL_TO || 'info@morgenlicht-alltagshilfe.de'
const EMAIL_FROM = process.env.EMAIL_FROM || 'noreply@morgenlicht-alltagshilfe.de'
const MAX_BODY_BYTES = 12_000

interface InquiryData {
  name: string
  phone: string
  pflegegrad?: string
  message?: string
  privacy: boolean
  website?: string
}

function isJsonRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function hasInvalidStringField(
  data: Record<string, unknown>,
  field: string,
  required = false,
): boolean {
  const value = data[field]
  if (value === undefined || value === null) return required
  return typeof value !== 'string'
}

export async function POST(request: NextRequest) {
  const contentType = request.headers.get('content-type')?.toLowerCase() ?? ''
  if (!contentType.includes('application/json')) {
    return NextResponse.json(
      { error: 'Die Anfrage muss als JSON gesendet werden.' },
      { status: 415 },
    )
  }

  const contentLength = request.headers.get('content-length')
  if (contentLength) {
    const declaredBytes = Number(contentLength)
    if (Number.isFinite(declaredBytes) && declaredBytes > MAX_BODY_BYTES) {
      return NextResponse.json(
        { error: 'Die Anfrage ist zu groß.' },
        { status: 413 },
      )
    }
  }

  let rawBody: string
  try {
    rawBody = await request.text()
  } catch {
    return NextResponse.json(
      { error: 'Die Anfrage konnte nicht gelesen werden.' },
      { status: 400 },
    )
  }

  if (!rawBody || new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
    return NextResponse.json(
      { error: rawBody ? 'Die Anfrage ist zu groß.' : 'Die Anfrage ist leer.' },
      { status: rawBody ? 413 : 400 },
    )
  }

  let parsedBody: unknown
  try {
    parsedBody = JSON.parse(rawBody)
  } catch {
    return NextResponse.json(
      { error: 'Ungültige JSON-Daten.' },
      { status: 400 },
    )
  }

  if (!isJsonRecord(parsedBody)) {
    return NextResponse.json(
      { error: 'Ungültige Anfragedaten.' },
      { status: 400 },
    )
  }

  if (
    hasInvalidStringField(parsedBody, 'name', true) ||
    hasInvalidStringField(parsedBody, 'phone', true) ||
    hasInvalidStringField(parsedBody, 'pflegegrad') ||
    hasInvalidStringField(parsedBody, 'message') ||
    hasInvalidStringField(parsedBody, 'website')
  ) {
    return NextResponse.json(
      { error: 'Ungültige Feldwerte.' },
      { status: 400 },
    )
  }

  const data: InquiryData = {
    name: parsedBody.name as string,
    phone: parsedBody.phone as string,
    pflegegrad: parsedBody.pflegegrad as string | undefined,
    message: parsedBody.message as string | undefined,
    privacy: parsedBody.privacy === true,
    website: parsedBody.website as string | undefined,
  }

  // Bots sollen keinen Hinweis erhalten, dass das Honeypot-Feld gegriffen hat.
  if (data.website?.trim()) {
    return NextResponse.json({ success: true })
  }

  if (!data.privacy) {
    return NextResponse.json(
      { error: 'Bitte bestätigen Sie den Datenschutzhinweis.' },
      { status: 400 },
    )
  }

  const validationError = validateInquiry(data)
  if (validationError) {
    return NextResponse.json(
      { error: validationError },
      { status: 400 },
    )
  }

  const sanitizedName = sanitizeInput(data.name)
  const sanitizedPhone = sanitizeInput(data.phone)
  const sanitizedPflegegrad = data.pflegegrad ? sanitizeInput(data.pflegegrad) : undefined
  const sanitizedMessage = data.message ? sanitizeInput(data.message) : undefined
  const subjectName = sanitizeForSubject(data.name)

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY is not configured')
    return NextResponse.json(
      { error: 'Der Anfrageservice ist derzeit nicht verfügbar.' },
      { status: 503 },
    )
  }

  const resend = new Resend(apiKey)
  const timestamp = new Date().toLocaleString('de-DE', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'Europe/Berlin',
  })

  try {
    const result = await resend.emails.send({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      subject: `Neue Anfrage von ${subjectName}`,
      html: `
        <h2>Neue Anfrage über die Website</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Name:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${sanitizedName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Telefon:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${sanitizedPhone}</td>
          </tr>
          ${sanitizedPflegegrad ? `
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Pflegegrad:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${sanitizedPflegegrad}</td>
          </tr>
          ` : ''}
          ${sanitizedMessage ? `
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; vertical-align: top;">Anliegen:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee; white-space: pre-wrap;">${sanitizedMessage}</td>
          </tr>
          ` : ''}
          <tr>
            <td style="padding: 8px; font-weight: bold;">Zeitstempel:</td>
            <td style="padding: 8px;">${timestamp}</td>
          </tr>
        </table>
      `,
    })

    if (result.error) {
      console.error('Resend rejected inquiry email', result.error)
      return NextResponse.json(
        { error: 'Ihre Anfrage konnte gerade nicht gesendet werden.' },
        { status: 502 },
      )
    }
  } catch (error) {
    console.error('Resend inquiry email failed', error)
    return NextResponse.json(
      { error: 'Ihre Anfrage konnte gerade nicht gesendet werden.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ success: true })
}
