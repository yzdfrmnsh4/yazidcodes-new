export default function Loading() {
  return (
    <div className="pt-32 md:pt-40 max-w-7xl mx-auto px-6 md:px-12 mb-28 space-y-10 animate-in fade-in duration-500">
      {/* Header / Back */}
      <div className="space-y-4">
        <div className="h-5 bg-[var(--color-surface-container)] border border-[var(--color-border-specular)] rounded w-36 animate-shimmer" />
        <div className="h-4 bg-[var(--color-surface-container)] border border-[var(--color-border-specular)] rounded-full w-28 animate-shimmer" />
        <div className="h-14 bg-[var(--color-surface-container)] rounded-2xl w-3/4 animate-shimmer" />
      </div>

      {/* Split Content layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: visual and info */}
        <div className="lg:col-span-7 space-y-8">
          <div className="glass-card overflow-hidden rounded-[2rem] border border-[var(--color-border-specular)] bg-[var(--color-surface)]/80 p-4">
            <div className="aspect-[16/10] w-full rounded-2xl bg-[var(--color-surface-container)] border border-[var(--color-border-specular)] animate-shimmer" />
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="h-6 bg-[var(--color-surface-container)] rounded w-1/4 animate-shimmer" />
              <div className="h-4 bg-[var(--color-surface-container)] rounded w-full animate-shimmer" />
              <div className="h-4 bg-[var(--color-surface-container)] rounded w-5/6 animate-shimmer" />
            </div>
            <div className="grid grid-cols-2 gap-3 pt-4">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="h-16 bg-[var(--color-surface-container)] border border-[var(--color-border-specular)] rounded-2xl animate-shimmer" />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: checkout card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-card p-6 rounded-3xl border border-[var(--color-border-specular)] bg-[var(--color-surface)] space-y-4">
            <div className="h-5 bg-[var(--color-surface-container)] rounded w-1/2 animate-shimmer" />
            <div className="space-y-3 pt-2">
              {[1, 2, 3].map((n) => (
                <div key={n} className="flex justify-between h-4 bg-[var(--color-surface-container)] rounded w-full animate-shimmer" />
              ))}
            </div>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-[var(--color-border-specular)] bg-[var(--color-surface)]/95 space-y-6 relative overflow-hidden">
            <div className="space-y-2 text-center">
              <div className="h-4 bg-[var(--color-surface-container)] rounded w-1/3 mx-auto animate-shimmer" />
              <div className="h-10 bg-[var(--color-surface-container)] rounded-xl w-1/2 mx-auto animate-shimmer" />
              <div className="h-3.5 bg-[var(--color-surface-container)] rounded w-2/3 mx-auto animate-shimmer" />
            </div>
            <div className="h-[1px] bg-[var(--color-border-specular)]" />
            <div className="h-32 bg-[var(--color-surface-container)] rounded-2xl animate-shimmer" />
            <div className="h-14 bg-[var(--color-surface-container)] rounded-2xl animate-shimmer" />
          </div>
        </div>
      </div>
    </div>
  );
}
