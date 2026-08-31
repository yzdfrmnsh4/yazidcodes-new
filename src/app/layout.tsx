import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { ThemeProvider } from '../lib/ThemeContext';
import '../index.css';

const sfProDisplay = localFont({
  src: [

    {
      path: '../../public/fonts/SF-Pro-Display-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Display-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Display-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Display-Bold.otf',
      weight: '700',
      style: 'normal',
    },

  ],
  variable: '--font-sf-pro',
});

export const metadata: Metadata = {
  title: 'yazidcodes.site | Jasa Pembuatan Website Profesional & Modern',
  description: 'Kami membangun identitas digital masa depan dengan estetika 3D liquid glass yang memukau.',
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${sfProDisplay.variable} overflow-x-hidden`} data-theme="light">
      <body className="min-h-screen max-w-full relative bg-[var(--color-background)] text-[var(--color-on-surface)] overflow-x-hidden font-sans transition-colors duration-300">
        <ThemeProvider>
          {/* 1. Atmospheric Ambient Backdrop Orbs */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            <div 
              className="orb w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-primary/10 -top-40 -left-40 animate-pulse"
              style={{ animationDuration: '8s' }}
            ></div>
            
            <div 
              className="orb w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-secondary/10 bottom-0 right-0"
              style={{ animationDuration: '10s', animationDelay: '2s' }}
            ></div>
            
            <div className="orb w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-tertiary/5 top-1/3 left-1/3"></div>
          </div>

          {/* 2. Sticky Glass Navigation */}
          <Navbar />

          {/* Main Content Area */}
          <div className="relative z-20">
            {children}
          </div>

          {/* Footer */}
          <Footer />

          {/* Floating WhatsApp inquiry bubble */}
          <FloatingWhatsApp />
        </ThemeProvider>
      </body>
    </html>
  );
}
