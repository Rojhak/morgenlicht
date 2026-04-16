import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Morgenlicht Alltagshilfe Berlin – Würdevolle Betreuung mit Herz'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background: 'linear-gradient(135deg, #F7F6F3 0%, #ffffff 60%, #E8F5E9 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: '50%',
              background: '#144E41',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FBBF24',
              fontSize: 40,
              fontWeight: 700,
            }}
          >
            M
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 32, fontWeight: 700, color: '#144E41', letterSpacing: '-0.02em' }}>
              Morgenlicht
            </span>
            <span style={{ fontSize: 20, color: '#6B7280', marginTop: 2 }}>Alltagshilfe Berlin</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              display: 'inline-flex',
              alignSelf: 'flex-start',
              padding: '10px 20px',
              background: '#ffffff',
              border: '2px solid #144E41',
              borderRadius: 999,
              color: '#144E41',
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            Anerkannt nach § 45a SGB XI
          </div>
          <h1
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: '#134E4A',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              margin: 0,
              maxWidth: 900,
            }}
          >
            Würdevolle Alltagshilfe in Berlin.
          </h1>
          <p style={{ fontSize: 30, color: '#4B5563', margin: 0, maxWidth: 900, lineHeight: 1.3 }}>
            Kreuzberg · Neukölln · Mitte. 100 % Kostenübernahme ab Pflegegrad 1.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ fontSize: 26, color: '#144E41', fontWeight: 700 }}>
            ☎ 030 235 930 28
          </div>
          <div style={{ fontSize: 22, color: '#6B7280' }}>
            Deutsch · Türkçe · English
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
