import { ServiceItem, PortfolioProject, DigitalProduct, PricingPlan, FAQItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-dev-ui-ux',
    title: 'Pembuatan Website & UI/UX',
    description: 'Website profesional dengan desain UI/UX yang dirancang sesuai identitas brand, responsif di berbagai perangkat, dan dibangun menggunakan teknologi web modern seperti Next.js, React, dan Tailwind CSS.',
    iconName: 'web',
    color: 'primary'
  },
  {
    id: 'optimization',
    title: 'SEO & Website Optimization',
    description: 'Optimasi SEO teknis, performa, dan Core Web Vitals untuk membantu website lebih cepat, mudah ditemukan di Google, dan memberikan pengalaman pengguna yang lebih baik.',
    iconName: 'rocket_launch',
    color: 'tertiary'
  },
  {
    id: 'bimbingan-coding',
    title: 'Bimbingan & Bantuan Coding',
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
    image: '/porto/caysie/preview.webp',
    description: 'Project mini e-commerce fashion yang dibuat menggunakan Laravel 11 dan Tailwind CSS.',
    alt: 'Caysie Fashion E-Commerce Preview',
    features: ['Laravel 11 Backend', 'Tailwind CSS Styling', 'Fashion Mini E-Commerce', 'Product Management', 'Cart & Checkout System', 'Responsive UI/UX'],
    timeline: '3 Minggu',
    client: 'Caysie Fashion Studio',
    siteUrl: 'https://caysie-fashion.example.com',
    detailedOverview: [
      'Caysie Fashion E-Commerce dirancang sebagai solusi platform toko online independen berkinerja tinggi untuk brand fashion modern. Aplikasi ini dikembangkan mengombinasikan ketangguhan arsitektur backend Laravel 11 dengan kecepatan serta fleksibilitas styling Tailwind CSS, menghadirkan pengalaman berbelanja busana yang intuitif dan responsif.',
      'Sistem ini dilengkapi dengan manajemen produk yang komprehensif, fitur filter kategori busana yang dinamis, keranjang belanja interaktif, hingga alur checkout otomatis. Integrasi notifikasi pesanan langsung ke admin memastikan komunikasi transaksi berjalan cepat dan efisien.'
    ],
    detailImages: [
      '/porto/caysie/preview.webp'
    ]
  },
  {
    id: 'himba',
    title: 'Himba Natura Senentang Website Redesign',
    category: 'Web Redesign & Frontend',
    image: '/porto/himba/preview.webp',
    description: 'Redesign website Himba Natura Senentang yang dibuat menggunakan React dan Tailwind CSS saja.',
    alt: 'Himba Natura Senentang Preview',
    features: ['React Frontend', 'Tailwind CSS Styling', 'Modern Web Redesign', 'Interactive Components', 'Fluid Responsive Layout', 'Optimized Visual Performance'],
    timeline: '2 Minggu',
    client: 'Himba Natura Senentang',
    siteUrl: 'https://himba-natura.example.com',
    detailedOverview: [
      'Redesign website Himba Natura Senentang berfokus pada transformasi identitas digital organisasi konservasi lingkungan menjadi lebih modern, estetik, dan bercerita. Menggunakan ekosistem React dan Tailwind CSS, tata letak situs dirancang ulang secara mendasar untuk memperkuat pesan kelestarian alam dan keterlibatan komunitas.',
      'Antarmuka baru ini menyajikan galeri kegiatan interaktif, modul narasi program konservasi, serta tata letak responsif fluid yang memberikan kenyamanan navigasi maksimal di seluruh tipe layar smartphone, tablet, hingga desktop.'
    ],
    detailImages: [
      '/porto/himba/preview.webp'
    ]
  },
  {
    id: 'nelson',
    title: 'Nelson Graphic Designer Portfolio',
    category: 'Personal Portfolio & Graphic Design',
    image: '/porto/nelson/prview.webp',
    description: 'Website portofolio pribadi untuk graphic designer dengan desain yang menarik dan modern.',
    alt: 'Nelson Graphic Designer Portfolio Preview',
    features: ['Modern Graphic Design Showcase', 'Personal Portfolio', 'Creative Layout & Typography', 'Interactive Gallery', 'Responsive Multi-Device Support', 'Fast Page Performance'],
    timeline: '10 Hari',
    client: 'Nelson Designer Studio',
    siteUrl: 'https://nelson-portfolio.example.com',
    detailedOverview: [
      'Nelson Graphic Designer Portfolio merupakan platform showcase digital personal yang dikhususkan untuk menampilkan hasil karya desain grafis, tipografi kreatif, dan identitas visual desainer profesional. Dibuat menggunakan Next.js dan Tailwind CSS untuk performa muat halaman di bawah 1 detik.',
      'Situs ini mengombinasikan estetika editorial yang bersih dengan mikro-interaksi halus saat kursor bergerak, memberikan kesan pertama yang sangat impresif bagi calon klien maupun agensi kreatif internasional.'
    ],
    detailImages: [
      '/porto/nelson/prview.webp'
    ]
  },
  {
    id: 'satpol',
    title: 'Satpol PP Kotawaringin Barat Website',
    category: 'Government & Public Services',
    image: '/porto/satpol/preview.webp',
    description: 'Project website resmi untuk instansi Satpol PP Kotawaringin Barat.',
    alt: 'Satpol PP Kotawaringin Barat Website Preview',
    features: ['Official Public Service Portal', 'Government Agency Website', 'Information & News Module', 'Public Service Announcements', 'Responsive & Accessible Design', 'Structured Content Navigation'],
    timeline: '1 Bulan',
    client: 'Satpol PP Kotawaringin Barat',
    siteUrl: 'https://satpolpp.kotawaringinbaratkab.go.id',
    detailedOverview: [
      'Website resmi Satpol PP Kabupaten Kotawaringin Barat dibangun untuk meningkatkan pelayanan publik, transparansi informasi instansi, serta memberikan saluran pengaduan masyarakat yang mudah diakses. Mengusung standar arsitektur portal publik pemerintah yang aman dan terstruktur.',
      'Platform ini terintegrasi dengan modul pengumuman publik, publikasi berita penegakan perda, serta galeri kegiatan instansi yang disajikan secara informatif dan memenuhi standar kepatuhan aksesibilitas web.'
    ],
    detailImages: [
      '/porto/satpol/preview.webp'
    ]
  },
  {
    id: 'sipekar',
    title: 'SIPEKAR - E-Recruitment System',
    category: 'Enterprise & HR System',
    image: '/porto/sipekar/preview.webp',
    description: 'Sistem Informasi Penerimaan Karyawan untuk PT Sariling Aneka Energi yang dibuat menggunakan Laravel 11 dan Tailwind CSS.',
    alt: 'SIPEKAR E-Recruitment System Preview',
    features: ['Laravel 11 Backend', 'Tailwind CSS Styling', 'E-Recruitment Information System', 'Applicant Tracking System', 'Candidate Assessment & Scoring', 'Corporate UI Design'],
    timeline: '1.5 Bulan',
    client: 'PT Sariling Aneka Energi',
    siteUrl: 'https://recruitment.sariling.co.id',
    detailedOverview: [
      'SIPEKAR (Sistem Informasi Penerimaan Karyawan) dikembangkan khusus untuk PT Sariling Aneka Energi guna memodernisasi alur rekrutmen tenaga kerja secara menyeluruh. Dibangun dengan Laravel 11 dan Tailwind CSS, aplikasi ini menggantikan proses pendaftaran manual dengan sistem ATS (Applicant Tracking System) terotomatisasi.',
      'Sistem mencakup alur lengkap dari pendaftaran pelamar, verifikasi berkas otomatis, penilaian berbobot otomatis, penjadwalan seleksi wawancara, hingga generasi otomatis laporan PDF rekapitulasi nilai kandidat untuk dewan HRD.'
    ],
    detailImages: [
      '/porto/sipekar/preview.webp'
    ]
  },
  {
    id: 'smoq',
    title: 'SMOQ - Sparepart Monitoring Order Quickly',
    category: 'Inventory & Order Management',
    image: '/porto/smoq/preview.webp',
    description: 'Sistem Informasi untuk mencatat order sparepart (Sparepart Monitoring Order Quickly) untuk bengkel Astra Isuzu.',
    alt: 'SMOQ Sparepart Monitoring System Preview',
    features: ['Sparepart Monitoring Order Quickly', 'Astra Isuzu Workshop System', 'Order Tracking & Inventory Logs', 'Workflow Automation', 'Efficient Management Dashboard', 'Tailored Corporate Information System'],
    timeline: '1 Bulan',
    client: 'Bengkel Astra Isuzu',
    siteUrl: 'https://smoq-isuzu.example.com',
    detailedOverview: [
      'SMOQ (Sparepart Monitoring Order Quickly) merupakan sistem informasi pencatatan dan pemantauan order suku cadang yang dikembangkan untuk mengoptimalkan operasional bengkel resmi Astra Isuzu. Sistem ini bertujuan mempercepat alur transaksi suku cadang dan meminimalkan kesalahan pencatatan manual.',
      'Melalui dashboard manajemen yang efisien, tim operasional bengkel dapat memantau status pesanan barang keluar-masuk secara real-time, melacak riwayat inventaris, serta mengunduh laporan stok berkala dengan cepat dan akurat.'
    ],
    detailImages: [
      '/porto/smoq/preview.webp'
    ]
  }
];

export const PRODUCTS: DigitalProduct[] = [
  {
    id: 'dashboard-template',
    title: 'Template Dashboard',
    description: 'Admin dashboard premium dengan 50+ komponen glassmorphic siap pakai yang kompatibel dengan React & Next.js.',
    iconName: 'dashboard',
    color: 'primary',
    price: 'Rp 149k',
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
    price: 'Rp 199k',
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
    price: 'Rp 79k',
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
    price: 'Rp 299k',
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
    price: 'Rp 99k',
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
    price: 'Rp 189k',
    previewUrl: 'https://lynk.id/yazidcodes/figma-design-system',
    features: ['1,200+ Interactive variants', 'Dark & Light color variables ready', 'Responsive page grid templates', 'Typography & spacing scales', 'Free lifetime version updates', 'Comprehensive Figma usage video tutorial'],
    image: 'https://images.unsplash.com/photo-1581291518655-9523c932dedf?q=80&w=800&auto=format&fit=crop'
  }
];

export const PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    desc: 'UNTUK PERSONAL & UMKM',
    price: 'Rp1.250.000',
    period: '/project',
    features: [
      'Domain .com / .id',
      'Landing page profesional',
      'Responsive di semua perangkat',
      'UI modern sesuai brand',
      'Basic SEO & optimasi performa',
      'Integrasi WhatsApp / form',
      '1x revisi'
    ],
    color: 'border-white/5',
    buttonText: 'Mulai Starter'
  },
  {
    id: 'premium',
    name: 'Premium',
    desc: 'UNTUK BISNIS & BRAND',
    price: 'Rp3.500.000',
    period: '/project',
    features: [
      'Domain .com / .id / .co.id',
      'Website multi-section lengkap',
      'Custom UI/UX sesuai brand',
      'Animasi & interaction premium',
      'SEO & Core Web Vitals',
      'Integrasi WhatsApp & form',
      'Struktur website scalable',
      'Prioritas support'
    ],
    isPopular: true,
    color: 'border-primary/30',
    buttonText: 'Pilih Premium'
  },
  {
    id: 'custom',
    name: 'Custom',
    desc: 'UNTUK SISTEM & PERUSAHAAN',
    price: 'Sesuai kebutuhan',
    period: '',
    features: [
      'Fitur & sistem sesuai kebutuhan',
      'Dashboard / admin panel',
      'Database & authentication',
      'Custom API & integrations',
      'Integrasi layanan pihak ketiga',
      'Payment gateway / third-party services',
      'Konsultasi arsitektur solusi'
    ],
    color: 'border-white/5',
    buttonText: 'Konsultasi Sekarang'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Berapa lama waktu yang dibutuhkan untuk membuat website?',
    answer:
      'Lama pengerjaan tergantung pada jenis dan kompleksitas website. Website Starter umumnya membutuhkan waktu sekitar 7–14 hari kerja, sedangkan website Premium atau Custom membutuhkan sekitar 3–5 minggu. Timeline akan disepakati bersama setelah kebutuhan dan ruang lingkup project ditentukan.'
  },
  {
    id: 'faq-2',
    question: 'Apakah desain website bisa disesuaikan dengan brand saya?',
    answer:
      'Tentu. Setiap website dirancang dengan pendekatan custom UI/UX berdasarkan identitas visual, karakter brand, target pengguna, dan kebutuhan bisnis Anda. Mulai dari warna, tipografi, layout, hingga komponen interaktif dapat disesuaikan agar website terasa unik dan relevan dengan brand Anda.'
  },
  {
    id: 'faq-3',
    question: 'Berapa biaya pembuatan website dan bagaimana sistem pembayarannya?',
    answer:
      'Biaya pembuatan website dimulai dari Rp900.000 untuk paket Starter, Rp4.000.000 untuk paket Premium, sedangkan project dengan kebutuhan khusus tersedia melalui paket Custom. Sistem pembayaran dan termin dapat disesuaikan dengan skala serta kebutuhan project dan akan dijelaskan secara transparan sebelum pengerjaan dimulai.'
  },
  {
    id: 'faq-4',
    question: 'Apakah website sudah termasuk SEO dan optimasi kecepatan?',
    answer:
      'Ya. Setiap website dikembangkan dengan memperhatikan struktur SEO On-Page, semantic HTML, responsive design, serta optimasi aset untuk membantu meningkatkan performa website. Untuk project yang membutuhkan optimasi lebih lanjut, kami juga dapat menangani Core Web Vitals, struktur metadata, dan technical SEO.'
  },
  {
    id: 'faq-5',
    question: 'Apakah saya bisa request fitur atau sistem khusus?',
    answer:
      'Bisa. Untuk kebutuhan yang lebih kompleks, website dapat dikembangkan dengan fitur dan sistem custom seperti dashboard admin, database, authentication, REST API, payment gateway, integrasi layanan pihak ketiga, hingga sistem internal sesuai kebutuhan bisnis. Kebutuhan tersebut akan dibahas terlebih dahulu agar solusi yang dibuat sesuai dengan scope project.'
  },
  {
    id: 'faq-6',
    question: 'Apakah website bisa menggunakan domain dan hosting milik saya?',
    answer:
      'Tentu. Website dapat menggunakan domain dan hosting yang sudah Anda miliki. Kami juga dapat membantu proses deployment, konfigurasi domain, SSL, serta pengaturan hosting agar website dapat diakses dengan baik dan siap digunakan.'
  },
  {
    id: 'faq-7',
    question: 'Apakah saya mendapatkan revisi dan bantuan setelah website selesai?',
    answer:
      'Ya. Setiap paket memiliki ketentuan revisi yang berbeda dan akan dijelaskan sejak awal project. Setelah website selesai, kami juga tetap memberikan bantuan untuk memastikan website dapat berjalan dengan baik serta membantu menangani kebutuhan teknis yang berkaitan dengan proses peluncuran.'
  },
  {
    id: 'faq-8',
    question: 'Apakah saya perlu menyiapkan materi konten website sendiri?',
    answer:
      'Idealnya, Anda menyiapkan materi seperti copywriting profil perusahaan, foto, dan logo agar sesuai dengan visi brand Anda. Namun, jika belum ada, kami dapat membantu mengarahkan struktur konten atau menyediakan resource visual pelengkap agar pengembangan website tetap berjalan lancar.'
  }
];
