import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { validateInquiry, sanitizeInput, type InquiryData } from '../../../lib/security'

const EMAIL_TO = process.env.EMAIL_TO || 'anfragen@morgenlicht-alltagshilfe.de'
const EMAIL_FROM = process.env.EMAIL_FROM || 'noreply@morgenlicht-alltagshilfe.de'

export async function POST(request: NextRequest) {
  try {
    const data: InquiryData = await request.json()

    // Validate input
    const validation = validateInquiry(data)
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'E-Mail-Service nicht konfiguriert' },
        { status: 500 }
      )
    }

    // Sanitize input
    const sanitizedName = sanitizeInput(data.name)
    const sanitizedPhone = sanitizeInput(data.phone)
    const sanitizedPflegegrad = data.pflegegrad ? sanitizeInput(data.pflegegrad) : ''

    const resend = new Resend(apiKey)

    const timestamp = new Date().toLocaleString('de-DE', {
      dateStyle: 'full',
      timeStyle: 'short',
    })

    // Send notification email to staff
    await resend.emails.send({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      subject: `Neue Anfrage von ${sanitizedName}`,
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
