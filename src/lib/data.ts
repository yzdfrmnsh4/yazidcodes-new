import { ServiceItem, PortfolioProject, DigitalProduct, PricingPlan, FAQItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-dev-ui-ux',
    title: 'Web Dev & UI/UX Design',
    description: 'Desain antarmuka (UI/UX) eksklusif dipadukan dengan koding web modern seperti Next.js, React, dan Tailwind CSS untuk hasil interaktif, responsif, dan sangat cepat.',
    iconName: 'web',
    color: 'primary'
  },
  {
    id: 'optimization',
    title: 'Optimization',
    description: 'Optimasi SEO mutakhir dan Core Web Vitals untuk memastikan website Anda berada di peringkat teratas mesin pencari Google.',
    iconName: 'rocket_launch',
    color: 'tertiary'
  },
  {
    id: 'joki-tugas',
    title: 'Joki Tugas IT',
    description: 'Bantuan pengerjaan tugas pemrograman, tugas kuliah IT, pembuatan aplikasi, perbaikan bug, dan bimbingan coding privat dengan penjelasan lengkap.',
    iconName: 'academic',
    color: 'quaternary'
  }
];

export const PORTFOLIO: PortfolioProject[] = [
  {
    id: 'caysie',
    title: 'Caysie Fashion E-Commerce',
    category: 'E-Commerce & Web Development',
    image: '/porto/caysie/preview.png',
    description: 'Project mini e-commerce fashion yang dibuat menggunakan Laravel 11 dan Tailwind CSS.',
    alt: 'Caysie Fashion E-Commerce Preview',
    features: ['Laravel 11 Backend', 'Tailwind CSS Styling', 'Fashion Mini E-Commerce', 'Product Management', 'Cart & Checkout System', 'Responsive UI/UX']
  },
  {
    id: 'himba',
    title: 'Himba Natura Senentang Website Redesign',
    category: 'Web Redesign & Frontend',
    image: '/porto/himba/preview.png',
    description: 'Redesign website Himba Natura Senentang yang dibuat menggunakan React dan Tailwind CSS saja.',
    alt: 'Himba Natura Senentang Preview',
    features: ['React Frontend', 'Tailwind CSS Styling', 'Modern Web Redesign', 'Interactive Components', 'Fluid Responsive Layout', 'Optimized Visual Performance']
  },
  {
    id: 'nelson',
    title: 'Nelson Graphic Designer Portfolio',
    category: 'Personal Portfolio & Graphic Design',
    image: '/porto/nelson/prview.png',
    description: 'Website portofolio pribadi untuk graphic designer dengan desain yang menarik dan modern.',
    alt: 'Nelson Graphic Designer Portfolio Preview',
    features: ['Modern Graphic Design Showcase', 'Personal Portfolio', 'Creative Layout & Typography', 'Interactive Gallery', 'Responsive Multi-Device Support', 'Fast Page Performance']
  },
  {
    id: 'satpol',
    title: 'Satpol PP Kotawaringin Barat Website',
    category: 'Government & Public Services',
    image: '/porto/satpol/preview.png',
    description: 'Project website resmi untuk instansi Satpol PP Kotawaringin Barat.',
    alt: 'Satpol PP Kotawaringin Barat Website Preview',
    features: ['Official Public Service Portal', 'Government Agency Website', 'Information & News Module', 'Public Service Announcements', 'Responsive & Accessible Design', 'Structured Content Navigation']
  },
  {
    id: 'sipekar',
    title: 'SIPEKAR - E-Recruitment System',
    category: 'Enterprise & HR System',
    image: '/porto/sipekar/preview.png',
    description: 'Sistem Informasi Penerimaan Karyawan untuk PT Sariling Aneka Energi yang dibuat menggunakan Laravel 11 dan Tailwind CSS.',
    alt: 'SIPEKAR E-Recruitment System Preview',
    features: ['Laravel 11 Backend', 'Tailwind CSS Styling', 'E-Recruitment Information System', 'Applicant Tracking System', 'Candidate Assessment & Scoring', 'Corporate UI Design']
  },
  {
    id: 'smoq',
    title: 'SMOQ - Sparepart Monitoring Order Quickly',
    category: 'Inventory & Order Management',
    image: '/porto/smoq/preview.png',
    description: 'Sistem Informasi untuk mencatat order sparepart (Sparepart Monitoring Order Quickly) untuk bengkel Astra Isuzu.',
    alt: 'SMOQ Sparepart Monitoring System Preview',
    features: ['Sparepart Monitoring Order Quickly', 'Astra Isuzu Workshop System', 'Order Tracking & Inventory Logs', 'Workflow Automation', 'Efficient Management Dashboard', 'Tailored Corporate Information System']
  }
];

export const PRODUCTS: DigitalProduct[] = [
  {
    id: 'dashboard-template',
    title: 'Template Dashboard',
    description: 'Admin dashboard premium dengan 50+ komponen glassmorphic siap pakai yang kompatibel dengan React & Next.js.',
    iconName: 'dashboard',
    color: 'primary',
    price: 'IDR 149k',
    previewUrl: 'https://lynk.id/yazidcodes/dashboard-template',
    features: ['50+ Tailwind Components', 'Figma File Included', 'React & Next.js Boilerplate', 'Dark & Light Glassmorphism', 'Clean TypeScript Code', 'Full Responsive Layout'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'backend-boilerplate',
    title: 'Source Code Backend',
    description: 'Rest API boilerplate tangguh menggunakan Node.js, Express, dan PostgreSQL dengan arsitektur bersih yang siap di-deploy.',
    iconName: 'code',
    color: 'secondary',
    price: 'IDR 199k',
    previewUrl: 'https://lynk.id/yazidcodes/backend-boilerplate',
    features: ['JWT Auth & CORS configured', 'Knex.js/Drizzle ORM migration', 'Clean Architecture', 'Dockerized & CI/CD Ready', 'Unit Testing with Jest included', 'Automatic API Documentation'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'vibe-coding-guide',
    title: 'Panduan Vibe Coding',
    description: 'E-book eksklusif berisi rahasia koding modern dengan efisiensi tinggi serta estetika visual pixel-perfect.',
    iconName: 'auto_awesome',
    color: 'tertiary',
    price: 'IDR 79k',
    previewUrl: 'https://lynk.id/yazidcodes/vibe-coding-guide',
    features: ['AI-Assisted workflows', 'Visual Hierarchy rules', 'Speculative rendering secrets', 'Figma to Code conversion', 'Prompt engineering templates', 'Fluid typography formulas'],
    image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'nextjs-saas-boilerplate',
    title: 'Next.js SaaS Boilerplate',
    description: 'Starter-kit SaaS lengkap dengan sistem pembayaran Stripe, autentikasi NextAuth, database Prisma, dan email transaksional.',
    iconName: 'code',
    color: 'primary',
    price: 'IDR 299k',
    previewUrl: 'https://lynk.id/yazidcodes/nextjs-saas',
    features: ['Stripe subscription pre-setup', 'NextAuth database adapters', 'Resend transactional email boilerplate', 'Pre-designed landing sections', 'Strict TypeScript configuration', 'PostgreSQL database schemas'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'minimalist-portfolio',
    title: 'Minimalist Portfolio Template',
    description: 'Template portfolio agensi personal dengan visual modern yang memanjakan mata, layout fluid, serta setup SEO cepat.',
    iconName: 'dashboard',
    color: 'secondary',
    price: 'IDR 99k',
    previewUrl: 'https://lynk.id/yazidcodes/minimalist-portfolio',
    features: ['Modern Swiss Layout Design', 'Framer Motion layout transition', 'EmailJS Contact Form integration', 'Super lightweight (under 2MB)', 'Fully responsive design', 'Ready-to-deploy to Vercel/Netlify'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'figma-design-system',
    title: 'Figma Design System Pro',
    description: 'Sistem desain UI fungsional terlengkap dengan auto-layout 5.0, library komponen variatif, dan panduan token warna adaptif.',
    iconName: 'auto_awesome',
    color: 'tertiary',
    price: 'IDR 189k',
    previewUrl: 'https://lynk.id/yazidcodes/figma-design-system',
    features: ['1,200+ Interactive variants', 'Dark & Light color variables ready', 'Responsive page grid templates', 'Typography & spacing scales', 'Free lifetime version updates', 'Comprehensive Figma usage video tutorial'],
    image: 'https://images.unsplash.com/photo-1581291518655-9523c932dedf?q=80&w=800&auto=format&fit=crop'
  }
];

export const PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 'IDR 2.5jt',
    period: '/proyek',
    features: [
      '5 Halaman Landing',
      'Responsive Design',
      'Basic SEO Optimization',
      'Desain Modern & Clean',
      'Integrasi Form Kontak'
    ],
    color: 'border-white/5',
    buttonText: 'Pilih Starter'
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 'IDR 7.5jt',
    period: '/proyek',
    features: [
      'Unlimited Halaman',
      '3D Glassmorphism UI',
      'CMS Integration (Sanity/Strapi)',
      'Premium Custom Animations',
      'Priority Support 24/7',
      'Peningkatan Kecepatan Maksimal'
    ],
    isPopular: true,
    color: 'border-primary/30',
    buttonText: 'Pilih Premium'
  },
  {
    id: 'custom',
    name: 'Custom',
    price: 'Hubungi Kami',
    period: '',
    features: [
      'Sistem Skala Tinggi (High-Load)',
      'Pengembangan Custom API',
      'DevOps & Infrastruktur Keamanan',
      'Solusi Label Putih (White-label)',
      'Konsultasi Arsitektur IT'
    ],
    color: 'border-white/5',
    buttonText: 'Hubungi Kami'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Berapa lama proses pembuatan website?',
    answer: 'Tergantung kompleksitas proyek Anda. Untuk paket Starter biasanya memakan waktu 7 sampai 14 hari kerja, sedangkan paket Premium atau Custom membutuhkan waktu sekitar 3 sampai 5 minggu untuk menjamin kualitas terbaik.'
  },
  {
    id: 'faq-2',
    question: 'Apakah saya bisa mengajukan kustomisasi desain?',
    answer: 'Tentu saja. Semua website yang kami kembangkan dirancang eksklusif dari nol sesuai dengan brand identity, panduan warna, serta preferensi khusus yang Anda inginkan. Kami tidak menggunakan template murahan.'
  },
  {
    id: 'faq-3',
    question: 'Metode pembayaran apa saja yang diterima?',
    answer: 'Kami menerima berbagai macam metode pembayaran digital yang aman, termasuk Transfer Bank otomatis (Virtual Account), E-Wallet populer di Indonesia (OVO, Dana, ShopeePay, LinkAja, Qris), serta pembayaran Kartu Kredit.'
  },
  {
    id: 'faq-4',
    question: 'Bagaimana dengan optimasi SEO dan kecepatan loading?',
    answer: 'Setiap paket kami sudah dilengkapi dengan optimasi dasar hingga lanjutan untuk Core Web Vitals dan SEO On-Page. Kami merancang struktur HTML agar mudah diindeks oleh Google, serta mengompresi aset gambar dan skrip agar waktu muat website berada di bawah 1.5 detik.'
  }
];
