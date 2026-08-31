export default function Loading() {
  return (
    <div className="pt-32 md:pt-40 max-w-7xl mx-auto px-6 md:px-12 mb-28 animate-in fade-in duration-500">
      {/* Header Skeleton */}
      <div className="space-y-4 mb-12">
        <div className="h-4 bg-[var(--color-surface-container)] border border-[var(--color-border-specular)] rounded-full w-24 animate-shimmer" />
        <div className="h-12 bg-[var(--color-surface-container)] rounded-2xl w-2/3 animate-shimmer" />
        <div className="h-6 bg-[var(--color-surface-container)] rounded-xl w-1/2 animate-shimmer" />
      </div>

      {/* Search & Filter Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        <div className="lg:col-span-2 h-12 bg-[var(--color-surface-container)] border border-[var(--color-border-specular)] rounded-2xl animate-shimmer" />
        <div className="h-12 bg-[var(--color-surface-container)] border border-[var(--color-border-specular)] rounded-2xl animate-shimmer" />
      </div>

      {/* Products Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((n) => (
          <div key={n} className="glass-card p-6 rounded-[2.5rem] bg-[var(--color-surface)]/80 border border-[var(--color-border-specular)] space-y-6">
            <div className="aspect-[16/10] w-full bg-[var(--color-surface-container)] rounded-2xl animate-shimmer" />
            <div className="space-y-3">
              <div className="h-6 bg-[var(--color-surface-container)] rounded w-2/3 animate-shimmer" />
              <div className="h-4 bg-[var(--color-surface-container)] rounded w-full animate-shimmer" />
              <div className="h-4 bg-[var(--color-surface-container)] rounded w-5/6 animate-shimmer" />
            </div>
            <div className="h-[1px] bg-[var(--color-border-specular)]" />
            <div className="flex justify-between items-center">
              <div className="h-8 bg-[var(--color-surface-container)] rounded w-1/3 animate-shimmer" />
              <div className="h-8 bg-[var(--color-surface-container)] rounded w-1/3 animate-shimmer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
