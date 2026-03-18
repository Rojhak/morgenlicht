import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { sanitizeInput, sanitizeForSubject, validateInquiry } from '@/lib/security'

const EMAIL_TO = process.env.EMAIL_TO || 'info@morgenlicht-alltagshilfe.de'
const EMAIL_FROM = process.env.EMAIL_FROM || 'noreply@morgenlicht-alltagshilfe.de'

interface InquiryData {
  name: string
  phone: string
  pflegegrad?: string
  message?: string
}

export async function POST(request: NextRequest) {
  try {
    const rawData = await request.json()

    // 🛡️ Security: Strict Input Filtering (Mass Assignment Prevention)
    // Only extract expected fields, discarding any injected properties
    const data: InquiryData = {
      name: rawData?.name,
      phone: rawData?.phone,
      pflegegrad: rawData?.pflegegrad,
      message: rawData?.message
    }

    // Validate inputs
    const validationError = validateInquiry(data)
    if (validationError) {
      return NextResponse.json(
        { error: validationError },
        { status: 400 }
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
        { error: 'E-Mail-Service nicht konfiguriert' },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)

    const timestamp = new Date().toLocaleString('de-DE', {
      dateStyle: 'full',
      timeStyle: 'short',
    })

    // Send notification email to staff
    const { error: resendError } = await resend.emails.send({
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
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; vertical-align: top;">Nachricht:</td>
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

    if (resendError) {
      console.error('Resend API error:', resendError)
      return NextResponse.json(
        { error: 'Fehler beim Senden der Anfrage' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending inquiry email:', error)
    return NextResponse.json(
      { error: 'Fehler beim Senden der Anfrage' },
      { status: 500 }
    )
  }
}
