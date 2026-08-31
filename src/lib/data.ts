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
      '/porto/caysie/caysie-5.webp',
      '/porto/caysie/caysie-4.webp',
      '/porto/caysie/caysie full.webp',
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
      '/porto/himba/himba-full.webp'
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
      '/porto/nelson/nelson-full.webp'
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
      '/porto/satpol/satpol-1.webp'
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
      '/porto/sipekar/sipekar-login-1.webp',
      '/porto/sipekar/sipekar-1.webp',
      '/porto/sipekar/sipekar-login-3.webp',
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
      '/porto/smoq/kabeng.webp',
      '/porto/smoq/partman.webp',
      '/porto/smoq/sa.webp'
    ]
  },
  {
    id: 'linkbio',
    title: 'macOS/iOS Style Link Bio',
    category: 'Web App & UI/UX Design',
    image: '/porto/linkbio/preview.webp',
    description: 'Personal project web link bio interaktif dengan desain UI unik mengadopsi gaya macOS pada desktop dan iOS pada layar mobile.',
    alt: 'macOS/iOS Style Link Bio Preview',
    features: ['macOS Desktop UI', 'iOS Mobile UI', 'Interactive Application Icons', 'Fluid Animations', 'Responsive Glassmorphism', 'Personal Micro-Platform'],
    timeline: '1.5 Minggu',
    client: 'Personal Project',
    siteUrl: '#',
    detailedOverview: [
      'Web link bio ini dirancang untuk mendobrak batasan desain halaman profil yang standar dengan mengusung antarmuka interaktif yang sangat familier. Tampilan visualnya mengadopsi ekosistem desain Apple, menyajikan pengalaman desktop macOS bagi pengguna layar besar dan antarmuka iOS bagi pengguna mobile.',
      'Berbeda dari link bio biasa, pengunjung disuguhkan layar interaktif yang responsif dengan ikon bergaya aplikasi, window management yang mulus, dan efek glassmorphism mendetail yang memanjakan mata.'
    ],
    detailImages: [
      '/porto/linkbio/preview.webp',
      '/porto/linkbio/linkbio-1.webp'
    ]
  },
  {
    id: 'yazidcodes-1',
    title: 'Yazidcodes v1 Portfolio',
    category: 'Personal Portfolio & Web Development',
    image: '/porto/yazidcodes 1.0/preview.webp',
    description: 'Website portofolio Yazidcodes versi pertama sebelum dilakukan iterasi pembaruan dan redesign menyeluruh.',
    alt: 'Yazidcodes v1 Portfolio Preview',
    features: ['Next.js React Frontend', 'Tailwind CSS Styling', 'Personal Portfolio', 'Animated UI Elements', 'Responsive Layout', 'Form Integration'],
    timeline: '2 Minggu',
    client: 'Personal Project',
    siteUrl: '#',
    detailedOverview: [
      'Yazidcodes v1 merupakan iterasi pertama dari website portofolio pribadi. Proyek ini dikembangkan dengan fokus pada tampilan yang fungsional sebagai jembatan awal untuk memamerkan resume, layanan teknis, dan portofolio karya ke klien potensial.',
      'Walaupun kini telah digantikan dengan versi portofolio yang secara signifikan lebih modern dan berkinerja tinggi, portofolio v1 ini menggunakan teknologi modern seperti React dan Tailwind CSS serta memiliki peran fundamental dalam perkembangan personal branding Yazidcodes.'
    ],
    detailImages: [
      '/porto/yazidcodes 1.0/preview.webp',
      '/porto/yazidcodes 1.0/yazidcodes 1.0-1.webp'
    ]
  }
];

export const PRODUCTS: DigitalProduct[] = [
  {
    id: 'ai-ui-skill',
    title: 'UI/UX Skill untuk AI',
    description: 'Template skill (DESIGN_MD_GENERATOR, dll.) untuk AI agar dapat memecah dan mereproduksi desain yang presisi dengan referensi UI.',
    iconName: 'auto_awesome',
    color: 'primary',
    price: 'Rp 25.000',
    previewUrl: 'http://lynk.id/yazidcodes/qp42qgy1px80/checkout',
    features: ['DESIGN_MD_GENERATOR.md', 'STITCH_PROMPT_GENERATOR.md', 'UI_UX_TECHNICAL_DICTIONARY.md', 'Memecah hierarki, spacing & tipe', 'Implementasi figma-to-code', 'Cocok untuk ChatGPT, Claude, Gemini'],
    image: '/products/uiux-skills.webp'
  },
  {
    id: 'modern-dashboard-templates',
    title: '5 Modern Dashboard Templates',
    description: '5 template dashboard modern responsif (Analytics, Business, SaaS, E-Commerce, Management) yang siap digunakan untuk aplikasi web.',
    iconName: 'dashboard',
    color: 'secondary',
    price: 'Rp 35.000',
    previewUrl: 'http://lynk.id/yazidcodes/2q7918y1o5j1/checkout',
    features: ['Analytics & Business Dashboards', 'SaaS Dashboard', 'E-Commerce Dashboard', 'Management Dashboard', 'Kompatibel Laravel', 'Kompatibel React & Next.js'],
    image: '/products/5-template-dashboard.webp'
  },
  {
    id: 'modern-landing-pages',
    title: '5 Modern Landing Pages + Portfolio',
    description: 'Koleksi 5 template landing page modern (SaaS, Agency, Product, Creative, Business) ditambah bonus 1 template Developer Portfolio.',
    iconName: 'code',
    color: 'tertiary',
    price: 'Rp 30.000',
    previewUrl: 'http://lynk.id/yazidcodes/d8v51qzqe0rk/checkout',
    features: ['SaaS / Startup & Agency', 'Product / Software Pages', 'Creative / Studio & Business', 'UI Setup Lengkap', 'Bonus Developer Portfolio', 'Kompatibel React & HTML'],
    image: '/products/5-template-landing-page.webp'
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
