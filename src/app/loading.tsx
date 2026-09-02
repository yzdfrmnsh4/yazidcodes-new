export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] w-full flex flex-col items-center justify-center p-8 bg-[var(--color-background)]/60 backdrop-blur-2xl">
      <div className="relative flex flex-col items-center justify-center">
        {/* Soft Background Glow (Optional) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/10 blur-3xl rounded-full pointer-events-none"></div>

        {/* Fill Text Container */}
        <div className="relative font-headline text-3xl md:text-5xl font-semibold tracking-tighter uppercase select-none">
          {/* 1. Base Text (Dimmed outline/opacity) */}
          <span className="text-[var(--color-text-muted)] opacity-20">
            yazidcodes
          </span>

          {/* 2. Animated Fill Text (Foreground) */}
          <span
            className="absolute left-0 top-0 w-full h-full text-[var(--color-primary)] animate-text-fill drop-shadow-[0_0_15px_rgba(37,99,235,0.4)]"
            aria-hidden="true"
          >
            yazidcodes
          </span>
        </div>
      </div>
    </div>
  );
}
