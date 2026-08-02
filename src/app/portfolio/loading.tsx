export default function Loading() {
  return (
    <div className="pt-32 md:pt-40 max-w-7xl mx-auto px-6 md:px-12 mb-28 animate-in fade-in duration-500">
      {/* Header Skeleton */}
      <div className="space-y-4 mb-12">
        <div className="h-4 bg-white/5 border border-white/5 rounded-full w-24 animate-pulse" />
        <div className="h-12 bg-white/[0.03] rounded-2xl w-2/3 animate-pulse" />
        <div className="h-6 bg-white/5 rounded-xl w-1/2 animate-pulse" />
      </div>

      {/* Filter bar Skeleton */}
      <div className="flex flex-wrap gap-2.5 mb-12">
        {[1, 2, 3, 4, 5].map((n) => (
          <div key={n} className="h-10 bg-white/5 border border-white/5 rounded-xl w-24 animate-pulse" />
        ))}
      </div>

      {/* Portfolio Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="glass-card p-4 rounded-[2.5rem] border border-white/5 space-y-6">
            <div className="aspect-video w-full bg-white/[0.02] border border-white/5 rounded-[2rem] animate-pulse" />
            <div className="space-y-3 px-4 pb-4">
              <div className="h-4 bg-white/5 rounded w-1/4 animate-pulse" />
              <div className="h-7 bg-white/[0.03] rounded w-1/2 animate-pulse" />
              <div className="h-4 bg-white/5 rounded w-full animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
