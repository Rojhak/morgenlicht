import type { ReactNode } from 'react'
import type { Crumb } from '@/lib/schema'
import { Breadcrumbs } from './Breadcrumbs'
import { Kicker } from './Kicker'

interface PageHeroProps {
  crumbs?: Crumb[]
  kicker?: ReactNode
  title: ReactNode
  lead?: ReactNode
  children?: ReactNode
  aside?: ReactNode
  lang?: string
  breadcrumbLabel?: string
  homeLabel?: string
}

/** Editorial page header shared by all sub pages: breadcrumbs, kicker, H1, lead, actions. */
export function PageHero({ crumbs, kicker, title, lead, children, aside, lang, breadcrumbLabel, homeLabel }: PageHeroProps) {
  return (
    <header className="sunrise overflow-hidden border-b border-line bg-cream px-5 pb-12 pt-6 sm:px-6 md:pb-16 md:pt-8" lang={lang}>
      <div className="mx-auto max-w-6xl">
        {crumbs && <Breadcrumbs crumbs={crumbs} label={breadcrumbLabel} homeLabel={homeLabel} />}
        <div
          className={`mt-6 grid gap-10 md:mt-10 ${
            aside ? 'lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-16' : ''
          }`}
        >
          <div className="max-w-3xl">
            {kicker && <Kicker>{kicker}</Kicker>}
            <h1 className="mt-4 font-heading text-[2rem] font-bold leading-[1.15] text-forest sm:text-5xl sm:leading-[1.1]">
              {title}
            </h1>
            {lead && (
              <div className="mt-5 max-w-2xl text-lg leading-relaxed text-muted md:text-xl [&_p+p]:mt-3">
                {lead}
              </div>
            )}
            {children && <div className="mt-8">{children}</div>}
          </div>
          {aside && <div>{aside}</div>}
        </div>
      </div>
    </header>
  )
}
