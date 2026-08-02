# Product Requirement Document (PRD) & Technical Specification
## Premium Digital Agency & Products Showcase Platform

---

## 1. Executive Summary

Platform ini adalah website profil agensi digital premium sekaligus katalog produk digital (seperti boilerplate, aset web, e-book) dan portofolio karya interaktif berkualitas tinggi. Dengan desain estetis gelap modern (*Cosmic Dark Slate*), platform ini ditargetkan untuk klien profesional, developer, desainer, dan bisnis yang mencari layanan berkualitas tinggi atau produk siap pakai yang andal.

### Karakteristik Desain Utama:
*   **Warna**: Dominan gelap (*deep obsidian black*, *space indigo*, *slate accents*).
*   **Tipografi**: Menggunakan kombinasi font sans-serif modern berkelas untuk keterbacaan yang tinggi pada berbagai ukuran layar.
*   **Interaktivitas**: Animasi transisi halus menggunakan Framer Motion (`motion/react`) dan scroll kustom (*Lenis smooth scroll*) pada elemen penumpukan (*Scroll Stack*).

---

## 2. Product Requirements & Features

### 2.1. Home / Landing Page
*   **Hero Section**: Judul utama bernada premium dengan latar belakang berkilau dinamis berbasis canvas 3D (*Beams Background*) yang didesain melebar secara penuh tanpa terpotong di layar lebar ataupun mobile.
*   **Services Grid**: Layanan utama agensi yang ditampilkan dalam kartu interaktif berpenampilan kaca (*glassmorphism*) dengan ikon modern dari `lucide-react`.
*   **Portfolio Highlight (Digital Products)**: Komponen pameran produk digital unggulan menggunakan `ProductCard` dengan performa visual prima.
*   **Products Highlight (Portfolio Projects)**: Komponen pameran karya portofolio agensi menggunakan `ProjectShowcase`.
*   **Interactive Why Choose Us (Scroll Stack)**: Bagian interaktif di mana kartu-kartu keunggulan menumpuk secara tumpang tindih (*overlapping stack*) seiring pengguna melakukan scroll ke bawah.
*   **Pricing Plans**: Paket harga langganan atau proyek kustom yang bersih dan informatif menggunakan `PlanCard`.

### 2.2. Portfolio Explorer View
*   Menampilkan seluruh katalog karya agensi.
*   Dilengkapi fitur pencarian langsung (*real-time search*) dan penyaringan kategori (*filter*) interaktif (Semua, E-Commerce, SaaS & AI, Web3, Branding).
*   Detail proyek interaktif terbuka secara modal dengan transisi mulus tanpa merusak tata letak layar.

### 2.3. Products Explorer View
*   Menampilkan seluruh katalog produk digital yang dijual atau dibagikan gratis.
*   Pencarian teks terintegrasi dan penyaringan berdasarkan kategori produk (Semua, Boilerplates, Web Assets, E-Books).
*   Kartu detail produk interaktif dilengkapi dengan ulasan bintang, daftar fitur lengkap, dan tombol aksi transaksi.

### 2.4. Interactive Inquiry Modal
*   Formulir kustom untuk memudahkan calon klien mengajukan proyek baru.
*   Terintegrasi di seluruh tombol aksi utama dalam platform.

---

## 3. Technical & Responsiveness Specification

### 3.1. Grid Layout Adaptability
Untuk mengatasi kendala tata letak pada perangkat dengan lebar menengah seperti tablet (iPad/Android Tablet), platform ini menerapkan aturan responsivitas kisi (*responsive grid*) berbasis Tailwind CSS yang fleksibel:

| Ukuran Layar | Target Perangkat | Kolom Grid Utama | Ukuran Kartu / Padding |
| :--- | :--- | :--- | :--- |
| **`< 640px`** | Mobile | 1 Kolom (`grid-cols-1`) | Padding Ringkas, Aksi Full-width |
| **`640px` - `1024px`** | **Tablet (sm/md)** | **2 Kolom (`sm:grid-cols-2`)** | **Optimasi Spasi Medium, Teks Adaptif** |
| **`> 1024px`** | Desktop (lg/xl) | 3 Kolom (`lg:grid-cols-3`) | Padding Luas, Detail Penuh |

### 3.2. Responsive Optimizations Applied
*   **Grid Services & Products**: Diubah dari `md:grid-cols-3` menjadi `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`. Hal ini mencegah kartu menjadi terlalu sempit atau memanjang secara vertikal yang tidak proporsional saat dibuka pada layar tablet portrait (sekitar 768px).
*   **Scroll Stack Section**: Elemen dalam kartu *Scroll Stack* menggunakan layout flexbox responsif `flex flex-col lg:flex-row`. Pada layar tablet, konten teks dan visual wireframe/chart disusun bertumpuk secara vertikal agar muat dengan rapi di dalam kartu tanpa terjadi tabrakan konten horizontal, lalu berubah secara otomatis menjadi sejajar menyamping di layar desktop besar.
*   **Hero Beams Background**: Latar belakang beams diperlebar secara aman dengan koordinat `-left-[15%] w-[130%]` untuk memastikan efek cahaya neon berpijar tidak terpotong di tepi kanan pada layar dengan rasio lebar tertentu.
*   **Sizing Typography**: Ukuran heading pada komponen `ProductCard` dan `ProjectShowcase` menggunakan skala dinamis `text-lg sm:text-xl md:text-2xl` agar secara otomatis menyesuaikan kerapatannya dengan ukuran fisik layar tablet.

### 3.3. Performance & Architecture
*   **Frontend Library**: React 18+ didukung oleh Vite untuk proses pengembangan yang instan dan build produksi yang sangat cepat.
*   **Styling Engine**: Tailwind CSS versi terbaru dengan pemanfaatan optimal variabel tema kustom (`@theme`).
*   **Animation System**: Framer Motion (`motion/react`) untuk transisi antar halaman dan interaksi mikro.
*   **Smooth Scroll**: Terintegrasi dengan perpustakaan scroll modern (*Lenis*) yang diinisialisasi secara aman tanpa merusak perilaku fungsional komponen penumpukan kartu.
