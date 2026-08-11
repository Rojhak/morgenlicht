import { ImageResponse } from 'next/og'

export const alt = 'Morgenlicht Alltagshilfe Berlin – persönliche Unterstützung in Kreuzberg und Neukölln'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#F7F6F3',
          color: '#134E4A',
          padding: '72px 84px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', width: 770 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: 'uppercase',
            }}
          >
            Morgenlicht Alltagshilfe
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 34,
              fontSize: 62,
              lineHeight: 1.08,
              fontWeight: 800,
              letterSpacing: -2,
            }}
          >
            Persönliche Alltagshilfe in Berlin
          </div>
          <div style={{ display: 'flex', marginTop: 28, fontSize: 28, lineHeight: 1.35, color: '#374151' }}>
            Kreuzberg · Neukölln · Deutsch · Türkçe · English
          </div>
          <div style={{ display: 'flex', marginTop: 34, fontSize: 24, fontWeight: 700 }}>
            morgenlicht-alltagshilfe.de
          </div>
        </div>

        <div
          style={{
            position: 'relative',
            display: 'flex',
            width: 250,
            height: 360,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: 220,
              height: 220,
              borderRadius: 999,
              background: '#FFD54F',
              top: 10,
              left: 15,
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: 92,
              height: 250,
              borderRadius: '100% 0 100% 0',
              background: '#134E4A',
              transform: 'rotate(35deg)',
              bottom: 8,
              left: 76,
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: 82,
              height: 190,
              borderRadius: '0 100% 0 100%',
              background: '#5E8C46',
              transform: 'rotate(-20deg)',
              bottom: 16,
              right: 22,
            }}
          />
        </div>
      </div>
    ),
    size,
  )
}
