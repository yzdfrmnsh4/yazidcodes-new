export default function Loading() {
  return (
    <div className="pt-32 md:pt-40 max-w-7xl mx-auto px-6 md:px-12 mb-28 space-y-10 animate-in fade-in duration-500">
      {/* Header / Back */}
      <div className="space-y-4">
        <div className="h-5 bg-white/5 border border-white/5 rounded w-36 animate-pulse" />
        <div className="h-4 bg-white/10 rounded-full w-28 animate-pulse" />
        <div className="h-14 bg-white/[0.03] rounded-2xl w-3/4 animate-pulse" />
      </div>

      {/* Split Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Responsive Simulator visual */}
        <div className="lg:col-span-8 space-y-8">
          <div className="h-16 bg-white/5 border border-white/5 rounded-2xl w-full animate-pulse" />
          <div className="aspect-video w-full bg-[#12131a]/80 border border-white/5 rounded-[2rem] p-12 flex justify-center items-center">
            <div className="w-full h-full bg-white/[0.02] rounded-2xl animate-pulse border border-white/10" />
          </div>
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4">
            <div className="h-6 bg-white/10 rounded w-1/3 animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 bg-white/5 rounded w-full animate-pulse" />
              <div className="h-4 bg-white/5 rounded w-5/6 animate-pulse" />
              <div className="h-4 bg-white/5 rounded w-2/3 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Right Column: Specs & CTA */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-card p-6 rounded-3xl border border-white/5 space-y-4 bg-gradient-to-br from-white/[0.02] to-[#12131a]">
            <div className="h-5 bg-white/10 rounded w-1/2 animate-pulse" />
            <div className="space-y-3 pt-2">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="flex justify-between h-4 bg-white/5 rounded w-full animate-pulse" />
              ))}
            </div>
          </div>

          <div className="p-6 rounded-3xl border border-white/5 bg-white/[0.02] space-y-4">
            <div className="h-4 bg-white/10 rounded w-1/3 animate-pulse" />
            <div className="space-y-2">
              <div className="h-3.5 bg-white/5 rounded w-full animate-pulse" />
              <div className="h-3.5 bg-white/5 rounded w-5/6 animate-pulse" />
            </div>
          </div>

          <div className="p-6 rounded-3xl border border-primary/20 bg-primary/5 space-y-4">
            <div className="w-10 h-10 rounded-full bg-white/10 mx-auto animate-pulse" />
            <div className="h-5 bg-white/10 rounded w-2/3 mx-auto animate-pulse" />
            <div className="h-4 bg-white/5 rounded w-5/6 mx-auto animate-pulse" />
            <div className="h-12 bg-primary/20 border border-primary/30 rounded-xl w-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
