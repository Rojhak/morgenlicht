import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const EMAIL_TO = process.env.EMAIL_TO || 'anfragen@morgenlicht-alltagshilfe.de'
const EMAIL_FROM = process.env.EMAIL_FROM || 'noreply@morgenlicht-alltagshilfe.de'

interface InquiryData {
  name: string
  phone: string
  pflegegrad?: string
}

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  try {
    const data: InquiryData = await request.json()

    // Validate required fields
    if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Name ist erforderlich (mindestens 2 Zeichen)' },
        { status: 400 }
      )
    }

    if (data.name.length > 100) {
      return NextResponse.json(
        { error: 'Name ist zu lang (max 100 Zeichen)' },
        { status: 400 }
      )
    }

    if (!data.phone || typeof data.phone !== 'string') {
      return NextResponse.json(
        { error: 'Telefonnummer ist erforderlich' },
        { status: 400 }
      )
    }

    // Basic phone regex: allow +, -, space, (), digits. Min 6 chars, max 50.
    const phoneRegex = /^[0-9\s\-\+\(\)]{6,50}$/;
    if (!phoneRegex.test(data.phone)) {
      return NextResponse.json(
        { error: 'Ungültiges Telefonnummer-Format' },
        { status: 400 }
      )
    }

    if (data.pflegegrad && (typeof data.pflegegrad !== 'string' || data.pflegegrad.length > 50)) {
      return NextResponse.json(
        { error: 'Ungültiger Pflegegrad' },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const cleanName = escapeHtml(data.name.trim());
    const cleanPhone = escapeHtml(data.phone.trim());
    const cleanPflegegrad = data.pflegegrad ? escapeHtml(data.pflegegrad.trim()) : '';

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
      subject: `Neue Anfrage von ${cleanName}`,
      html: `
        <h2>Neue Anfrage über die Website</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Name:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${cleanName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Telefon:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${cleanPhone}</td>
          </tr>
          ${cleanPflegegrad ? `
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Pflegegrad:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${cleanPflegegrad}</td>
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
