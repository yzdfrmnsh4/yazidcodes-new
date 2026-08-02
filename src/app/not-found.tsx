import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0c0c0e] text-white px-6">
      <div className="relative flex flex-col items-center max-w-md text-center space-y-6">
        <h2 className="font-headline font-black text-8xl text-primary/80 animate-pulse">404</h2>
        <h1 className="font-headline font-bold text-2xl md:text-3xl text-white">Halaman Tidak Ditemukan</h1>
        <p className="text-text-muted text-sm leading-relaxed">
          Maaf, halaman yang Anda cari tidak dapat ditemukan atau telah dipindahkan.
        </p>
        <Link 
          href="/" 
          className="resin-button px-8 py-3 rounded-xl text-white font-bold text-sm inline-flex items-center gap-2"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
