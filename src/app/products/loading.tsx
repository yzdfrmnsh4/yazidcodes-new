export default function Loading() {
  return (
    <div className="pt-32 md:pt-40 max-w-7xl mx-auto px-6 md:px-12 mb-28 animate-in fade-in duration-500">
      {/* Header Skeleton */}
      <div className="space-y-4 mb-12">
        <div className="h-4 bg-white/5 border border-white/5 rounded-full w-24 animate-pulse" />
        <div className="h-12 bg-white/[0.03] rounded-2xl w-2/3 animate-pulse" />
        <div className="h-6 bg-white/5 rounded-xl w-1/2 animate-pulse" />
      </div>

      {/* Search & Filter Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        <div className="lg:col-span-2 h-12 bg-white/5 border border-white/5 rounded-2xl animate-pulse" />
        <div className="h-12 bg-white/5 border border-white/5 rounded-2xl animate-pulse" />
      </div>

      {/* Products Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((n) => (
          <div key={n} className="glass-card p-6 rounded-[2.5rem] border border-white/5 space-y-6">
            <div className="aspect-[16/10] w-full bg-white/[0.02] border border-white/5 rounded-2xl animate-pulse" />
            <div className="space-y-3">
              <div className="h-6 bg-white/[0.03] rounded w-2/3 animate-pulse" />
              <div className="h-4 bg-white/5 rounded w-full animate-pulse" />
              <div className="h-4 bg-white/5 rounded w-5/6 animate-pulse" />
            </div>
            <div className="h-[1px] bg-white/5" />
            <div className="flex justify-between items-center">
              <div className="h-8 bg-white/[0.03] rounded w-1/3 animate-pulse" />
              <div className="h-8 bg-white/10 rounded w-1/3 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
