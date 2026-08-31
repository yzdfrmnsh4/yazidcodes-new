export default function Loading() {
  return (
    <div className="pt-32 md:pt-40 max-w-7xl mx-auto px-6 md:px-12 mb-28 space-y-10 animate-in fade-in duration-500">
      {/* Header / Back */}
      <div className="space-y-4">
        <div className="h-5 bg-[var(--color-surface-container)] border border-[var(--color-border-specular)] rounded w-36 animate-shimmer" />
        <div className="h-4 bg-[var(--color-surface-container)] border border-[var(--color-border-specular)] rounded-full w-28 animate-shimmer" />
        <div className="h-14 bg-[var(--color-surface-container)] rounded-2xl w-3/4 animate-shimmer" />
      </div>

      {/* Split Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Responsive Simulator visual */}
        <div className="lg:col-span-8 space-y-8">
          <div className="h-16 bg-[var(--color-surface-container)] border border-[var(--color-border-specular)] rounded-2xl w-full animate-shimmer" />
          <div className="aspect-video w-full bg-[var(--color-surface)]/80 border border-[var(--color-border-specular)] rounded-[2rem] p-12 flex justify-center items-center">
            <div className="w-full h-full bg-[var(--color-surface-container)]/50 rounded-2xl animate-shimmer border border-[var(--color-border-specular)]" />
          </div>
          <div className="p-8 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border-specular)] space-y-4">
            <div className="h-6 bg-[var(--color-surface-container)] rounded w-1/3 animate-shimmer" />
            <div className="space-y-2">
              <div className="h-4 bg-[var(--color-surface-container)] rounded w-full animate-shimmer" />
              <div className="h-4 bg-[var(--color-surface-container)] rounded w-5/6 animate-shimmer" />
              <div className="h-4 bg-[var(--color-surface-container)] rounded w-2/3 animate-shimmer" />
            </div>
          </div>
        </div>

        {/* Right Column: Specs & CTA */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-card p-6 rounded-3xl border border-[var(--color-border-specular)] space-y-4 bg-gradient-to-br from-[var(--color-surface-container)] to-[var(--color-surface)]">
            <div className="h-5 bg-[var(--color-surface-container)] border border-[var(--color-border-specular)] rounded w-1/2 animate-shimmer" />
            <div className="space-y-3 pt-2">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="flex justify-between h-4 bg-[var(--color-surface-container)] border border-[var(--color-border-specular)] rounded w-full animate-shimmer" />
              ))}
            </div>
          </div>

          <div className="p-6 rounded-3xl border border-[var(--color-border-specular)] bg-[var(--color-surface)] space-y-4">
            <div className="h-4 bg-[var(--color-surface-container)] rounded w-1/3 animate-shimmer" />
            <div className="space-y-2">
              <div className="h-3.5 bg-[var(--color-surface-container)] rounded w-full animate-shimmer" />
              <div className="h-3.5 bg-[var(--color-surface-container)] rounded w-5/6 animate-shimmer" />
            </div>
          </div>

          <div className="p-6 rounded-3xl border border-primary/20 bg-primary/5 space-y-4">
            <div className="w-10 h-10 rounded-full bg-[var(--color-surface-container)] mx-auto animate-shimmer" />
            <div className="h-5 bg-[var(--color-surface-container)] rounded w-2/3 mx-auto animate-shimmer" />
            <div className="h-4 bg-[var(--color-surface-container)] rounded w-5/6 mx-auto animate-shimmer" />
            <div className="h-12 bg-primary/20 border border-primary/30 rounded-xl w-full animate-shimmer" />
          </div>
        </div>
      </div>
    </div>
  );
}
