export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0c0c0e]">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 border-2 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        <div className="absolute font-headline text-xs font-semibold text-primary/80 animate-pulse">yazidcodes</div>
      </div>
    </div>
  );
}
