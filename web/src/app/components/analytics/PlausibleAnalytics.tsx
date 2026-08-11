import Script from 'next/script'

export function PlausibleAnalytics() {
  const scriptUrl = process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL
  const domain =
    process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? 'www.morgenlicht-alltagshilfe.de'

  if (!scriptUrl) return null

  return (
    <>
      <Script id="plausible-event-queue" strategy="afterInteractive">
        {`window.plausible = window.plausible || function(){(window.plausible.q = window.plausible.q || []).push(arguments)}`}
      </Script>
      <Script
        src={scriptUrl}
        data-domain={domain}
        strategy="afterInteractive"
        defer
      />
    </>
  )
}
