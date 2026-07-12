import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="bg-[#F7F6F3] px-4 py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-heading text-sm font-bold uppercase text-[#0D6E64]">Seite nicht gefunden</p>
        <h1 className="mt-4 font-heading text-4xl font-bold text-[#134E4A] md:text-5xl">
          Diese Seite gibt es nicht mehr.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-[#455A64]">
          Unsere Haushaltshilfe und Alltagshilfe bieten wir in Berlin-Kreuzberg und Neukölln an.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/berlin-kreuzberg"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#134E4A] px-6 py-3 font-bold text-white hover:bg-[#0F3F3C] focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2"
          >
            Haushaltshilfe Kreuzberg
          </Link>
          <Link
            href="/berlin-neukoelln"
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#134E4A]/20 bg-white px-6 py-3 font-bold text-[#134E4A] hover:bg-[#FFFBEB] focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2"
          >
            Haushaltshilfe Neukölln
          </Link>
        </div>
      </div>
    </main>
  )
}
