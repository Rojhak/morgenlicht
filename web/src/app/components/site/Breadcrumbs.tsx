import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { breadcrumbSchema, graph, type Crumb } from '@/lib/schema'
import { JsonLd } from './JsonLd'

/** Visible breadcrumb trail; the BreadcrumbList schema is generated from the same data. */
export function Breadcrumbs({
  crumbs,
  label = 'Brotkrumennavigation',
  homeLabel = 'Startseite',
}: {
  crumbs: Crumb[]
  label?: string
  homeLabel?: string
}) {
  const trail: Crumb[] = [{ name: homeLabel, href: '/' }, ...crumbs]

  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(trail))} />
      <nav aria-label={label} className="text-base text-muted">
        <ol className="flex flex-wrap items-center gap-x-1 gap-y-1">
          {trail.map((crumb, index) => {
            const isLast = index === trail.length - 1
            return (
              <li key={crumb.href} className="flex items-center gap-1">
                {isLast ? (
                  <span aria-current="page" className="font-semibold text-forest">
                    {crumb.name}
                  </span>
                ) : (
                  <>
                    <Link href={crumb.href} className="inline-flex min-h-11 items-center underline decoration-forest/30 underline-offset-4 hover:text-forest hover:decoration-forest">
                      {crumb.name}
                    </Link>
                    <ChevronRight className="h-4 w-4 flex-none text-muted" aria-hidden="true" />
                  </>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
