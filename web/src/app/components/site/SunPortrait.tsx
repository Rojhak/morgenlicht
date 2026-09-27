import Image from 'next/image'
import { SITE } from '@/config/site'

interface SunPortraitProps {
  /** Tailwind width classes for the round photo, e.g. "max-w-xs" */
  widthClass?: string
  sizes: string
  priority?: boolean
}

/** Round portrait of the founder with the golden sun arc from the logo hugging its upper half. */
export function SunPortrait({ widthClass = 'max-w-xs', sizes, priority = false }: SunPortraitProps) {
  return (
    <div className={`sun-arc mx-auto mt-4 aspect-square w-[calc(100%-2rem)] ${widthClass}`}>
      <div className="absolute inset-0 overflow-hidden rounded-full border-8 border-white bg-sand shadow-[0_12px_40px_rgba(19,78,74,0.15)]">
        <Image
          src="/images/asiye-duman.jpeg"
          alt={`Porträt von ${SITE.founder}, ${SITE.founderRole} von Morgenlicht`}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
    </div>
  )
}
