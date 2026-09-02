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
      path: '../../public/fonts/SF-Pro-Display-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Display-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Display-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SF-Pro-Display-Bold.woff2',
      weight: '700',
      style: 'normal',
    },

  ],
  variable: '--font-sf-pro',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.yazidcodes.id'),
  title: 'Jasa Pembuatan Website Profesional & Modern | YazidCodes',
  description: 'YazidCodes menyediakan jasa pembuatan website profesional dan modern untuk bisnis, UMKM, startup, dan personal brand. Website cepat, responsive, dan dirancang sesuai kebutuhan Anda.',
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon-96x96.png',
    apple: '/web-app-manifest-192x192.png',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Jasa Pembuatan Website Profesional & Modern | YazidCodes',
    description: 'YazidCodes menyediakan jasa pembuatan website profesional dan modern untuk bisnis, UMKM, startup, dan personal brand. Website cepat, responsive, dan dirancang sesuai kebutuhan Anda.',
    url: 'https://www.yazidcodes.id',
    siteName: 'YazidCodes',
    images: [
      {
        url: '/mockup.webp', 
        width: 1200,
        height: 630,
        alt: 'YazidCodes - Jasa Pembuatan Website Profesional & Modern',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jasa Pembuatan Website Profesional & Modern | YazidCodes',
    description: 'YazidCodes menyediakan jasa pembuatan website profesional dan modern untuk bisnis, UMKM, startup, dan personal brand. Website cepat, responsive, dan dirancang sesuai kebutuhan Anda.',
    creator: '@yaziddev',
    images: ['/mockup.webp'],
  },
  verification: {
    google: 'C3bM9_cv7eTBru9_1hz2IAdBdbK6nIgfleAlexhIKto',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.yazidcodes.id/#organization',
      'name': 'YazidCodes',
      'url': 'https://www.yazidcodes.id',
      'logo': 'https://www.yazidcodes.id/web-app-manifest-512x512.png',
      'sameAs': [
        'https://tiktok.com/@yaziddev',
        'https://instagram.com/yazidcodes'
      ],
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+62-881-8208-207',
        'contactType': 'customer service',
        'email': 'yaziddev04@gmail.com',
        'availableLanguage': 'Indonesian'
      }
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.yazidcodes.id/#website',
      'url': 'https://www.yazidcodes.id',
      'name': 'YazidCodes',
      'publisher': {
        '@id': 'https://www.yazidcodes.id/#organization'
      }
    },
    {
      '@type': 'Service',
      '@id': 'https://www.yazidcodes.id/#service',
      'name': 'Jasa Pembuatan Website',
      'provider': {
        '@id': 'https://www.yazidcodes.id/#organization'
      },
      'description': 'Jasa pembuatan website profesional, redesign website, optimasi website, dan pembuatan landing page.',
      'areaServed': 'ID',
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Website Development Services',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Website Development'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Website Redesign'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Website Optimization'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Landing Page Development'
            }
          }
        ]
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${sfProDisplay.variable} overflow-x-hidden`} data-theme="light">
      <body className="min-h-screen max-w-full relative bg-[var(--color-background)] text-[var(--color-on-surface)] overflow-x-hidden font-sans transition-colors duration-300">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
