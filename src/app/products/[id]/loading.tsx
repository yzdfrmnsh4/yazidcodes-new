export default function Loading() {
  return (
    <div className="pt-32 md:pt-40 max-w-7xl mx-auto px-6 md:px-12 mb-28 space-y-10 animate-in fade-in duration-500">
      {/* Header / Back */}
      <div className="space-y-4">
        <div className="h-5 bg-white/5 border border-white/5 rounded w-36 animate-pulse" />
        <div className="h-4 bg-white/10 rounded-full w-28 animate-pulse" />
        <div className="h-14 bg-white/[0.03] rounded-2xl w-3/4 animate-pulse" />
      </div>

      {/* Split Content layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: visual and info */}
        <div className="lg:col-span-7 space-y-8">
          <div className="glass-card overflow-hidden rounded-[2rem] border border-white/5 bg-[#12131a]/80 p-4">
            <div className="aspect-[16/10] w-full rounded-2xl bg-white/[0.02] border border-white/10 animate-pulse" />
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="h-6 bg-white/10 rounded w-1/4 animate-pulse" />
              <div className="h-4 bg-white/5 rounded w-full animate-pulse" />
              <div className="h-4 bg-white/5 rounded w-5/6 animate-pulse" />
            </div>
            <div className="grid grid-cols-2 gap-3 pt-4">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="h-16 bg-white/[0.01] border border-white/5 rounded-2xl animate-pulse" />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: checkout card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-card p-6 rounded-3xl border border-white/5 bg-[#12131a] space-y-4">
            <div className="h-5 bg-white/10 rounded w-1/2 animate-pulse" />
            <div className="space-y-3 pt-2">
              {[1, 2, 3].map((n) => (
                <div key={n} className="flex justify-between h-4 bg-white/5 rounded w-full animate-pulse" />
              ))}
            </div>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-white/10 bg-[#12131a]/95 space-y-6 relative overflow-hidden">
            <div className="space-y-2 text-center">
              <div className="h-4 bg-white/10 rounded w-1/3 mx-auto animate-pulse" />
              <div className="h-10 bg-white/[0.03] rounded-xl w-1/2 mx-auto animate-pulse" />
              <div className="h-3.5 bg-white/5 rounded w-2/3 mx-auto animate-pulse" />
            </div>
            <div className="h-[1px] bg-white/5" />
            <div className="h-32 bg-white/5 rounded-2xl animate-pulse" />
            <div className="h-14 bg-gradient-to-r from-primary to-secondary rounded-2xl animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
