import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { sanitizeInput, sanitizeForSubject, validateInquiry } from '@/lib/security'

const EMAIL_TO = process.env.EMAIL_TO || 'info@morgenlicht-alltagshilfe.de'
const EMAIL_FROM = process.env.EMAIL_FROM || 'noreply@morgenlicht-alltagshilfe.de'

interface InquiryData {
  name: string
  phone: string
  pflegegrad?: string
}

export async function POST(request: NextRequest) {
  try {
    // SECURITY: Use 'any' here as we need to validate unknown input
    // The previous InquiryData interface only enforced types at compile time, not runtime
    const data: any = await request.json()

    // SECURITY: Validate input data
    const validation = validateInquiry(data)
    if (!validation.isValid) {
      return NextResponse.json(
        { error: validation.error || 'Ungültige Eingabe' },
        { status: 400 }
      )
    }

    // SECURITY: Sanitize inputs to prevent XSS/Injection
    const sanitizedName = sanitizeInput(data.name)
    const sanitizedPhone = sanitizeInput(data.phone)
    const sanitizedPflegegrad = data.pflegegrad ? sanitizeInput(data.pflegegrad) : undefined
    const sanitizedSubjectName = sanitizeForSubject(data.name)

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
    await resend.emails.send({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      subject: `Neue Anfrage von ${sanitizedSubjectName}`,
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
          <tr>
            <td style="padding: 8px; font-weight: bold;">Zeitstempel:</td>
            <td style="padding: 8px;">${timestamp}</td>
          </tr>
        </table>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending inquiry email:', error)
    return NextResponse.json(
      { error: 'Fehler beim Senden der Anfrage' },
      { status: 500 }
    )
  }
}
