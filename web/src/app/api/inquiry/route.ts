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
    const rawData = await request.json()

    // Validate data using security utility
    const validation = validateInquiry(rawData)
    if (!validation.isValid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      )
    }

    // Sanitize input
    const data: InquiryData = {
      name: sanitizeInput(rawData.name),
      phone: sanitizeInput(rawData.phone),
      pflegegrad: rawData.pflegegrad ? sanitizeInput(rawData.pflegegrad) : undefined,
    }

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
      subject: sanitizeForSubject(`Neue Anfrage von ${rawData.name}`),
      html: `
        <h2>Neue Anfrage über die Website</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Name:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Telefon:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.phone}</td>
          </tr>
          ${data.pflegegrad ? `
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Pflegegrad:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.pflegegrad}</td>
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
