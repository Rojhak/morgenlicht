import { GlassCard } from '@/app/components/glass'

export default function SucheeLoading() {
  return (
    <>
      {/* Hero Skeleton */}
      <section className="relative py-20 md:py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-gradient-to-b from-[#FFD54F]/20 via-[#FFAB91]/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] bg-gradient-to-tr from-[#26A69A]/15 via-[#4DB6AC]/10 to-transparent rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Badge Skeleton */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/70 backdrop-blur-sm border border-white/50 rounded-full text-sm font-medium text-[#0D6E64] mb-8">
            <div className="w-4 h-4 bg-[#0D6E64]/20 rounded animate-pulse" />
            <div className="w-32 h-4 bg-[#0D6E64]/20 rounded animate-pulse" />
          </div>

          {/* Title Skeleton */}
          <div className="space-y-3 mb-6">
            <div className="h-12 sm:h-14 bg-[#0D6E64]/10 rounded-lg max-w-2xl mx-auto animate-pulse" />
            <div className="h-12 sm:h-14 bg-[#0D6E64]/10 rounded-lg max-w-xl mx-auto animate-pulse" />
          </div>

          <div className="h-6 bg-[#455A64]/10 rounded max-w-md mx-auto mb-12 animate-pulse" />

          {/* Search Bar Skeleton */}
          <div className="max-w-2xl mx-auto h-16 glass rounded-xl animate-pulse" />
        </div>
      </section>

      {/* Quick Filter Tags Skeleton */}
      <section className="py-8 px-4 border-y border-white/40 bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div
                key={i}
                className="w-24 h-10 bg-white/60 rounded-full animate-pulse flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Skeleton */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter Sidebar Skeleton */}
            <aside className="lg:w-80 flex-shrink-0">
              <GlassCard className="p-6 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#E0F2F1] rounded-xl animate-pulse" />
                  <div className="h-6 w-20 bg-[#37474F]/10 rounded animate-pulse" />
                </div>

                <div className="space-y-3">
                  <div className="h-5 w-32 bg-[#37474F]/10 rounded animate-pulse" />
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-12 bg-white/40 rounded-lg animate-pulse" />
                  ))}
                </div>

                <div className="h-px bg-[#0D6E64]/10" />

                <div className="space-y-3">
                  <div className="h-5 w-24 bg-[#37474F]/10 rounded animate-pulse" />
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="h-12 bg-white/40 rounded-lg animate-pulse" />
                  ))}
                </div>
              </GlassCard>
            </aside>

            {/* Results Skeleton */}
            <main className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <div className="h-7 w-40 bg-[#37474F]/10 rounded animate-pulse" />
                <div className="h-10 w-40 bg-white/60 rounded-lg animate-pulse" />
              </div>

              <div className="space-y-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <GlassCard key={i} className="p-6 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0D6E64]/20 animate-pulse" />
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="w-16 h-16 bg-[#E0F2F1] rounded-2xl animate-pulse flex-shrink-0" />
                      <div className="flex-1 space-y-3">
                        <div className="flex justify-between">
                          <div className="h-6 w-48 bg-[#37474F]/10 rounded animate-pulse" />
                          <div className="h-5 w-20 bg-[#37474F]/10 rounded animate-pulse" />
                        </div>
                        <div className="space-y-2">
                          <div className="h-4 w-full bg-[#455A64]/10 rounded animate-pulse" />
                          <div className="h-4 w-4/5 bg-[#455A64]/10 rounded animate-pulse" />
                        </div>
                        <div className="flex gap-6">
                          <div className="h-5 w-32 bg-[#455A64]/10 rounded animate-pulse" />
                          <div className="h-5 w-24 bg-[#455A64]/10 rounded animate-pulse" />
                        </div>
                        <div className="flex gap-3">
                          <div className="h-12 w-36 bg-[#0D6E64]/10 rounded-lg animate-pulse" />
                          <div className="h-12 w-32 bg-white/40 rounded-lg animate-pulse" />
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  )
}
