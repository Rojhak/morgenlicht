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
    const data: InquiryData = await request.json()

    // Validate required fields
    if (!data.name || !data.phone) {
      return NextResponse.json(
        { error: 'Name und Telefonnummer sind erforderlich' },
        { status: 400 }
      )
    }

    const validationError = validateInquiry(data.name, data.phone, data.pflegegrad)
    if (validationError) {
      return NextResponse.json(
        { error: validationError },
        { status: 400 }
      )
    }

    const safeName = sanitizeInput(data.name)
    const safePhone = sanitizeInput(data.phone)
    const safePflegegrad = data.pflegegrad ? sanitizeInput(data.pflegegrad) : undefined
    const safeSubjectName = sanitizeForSubject(data.name)

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
      subject: `Neue Anfrage von ${safeSubjectName}`,
      html: `
        <h2>Neue Anfrage über die Website</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Name:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Telefon:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${safePhone}</td>
          </tr>
          ${safePflegegrad ? `
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Pflegegrad:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${safePflegegrad}</td>
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
