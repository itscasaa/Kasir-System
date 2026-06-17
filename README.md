# 🏪 Circie POS — Modern Point of Sale System

[![React](https://img.shields.io/badge/React-18.3-blue?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

**Circie POS** adalah aplikasi kasir (Point of Sale) modern berbasis web yang dirancang dengan antarmuka pengguna (UI) yang elegan, responsif, dan interaktif. Proyek ini dibangun menggunakan **React**, **Vite**, dan **TailwindCSS** untuk memberikan performa yang cepat dan pengalaman pengguna yang luar biasa.

---

## ✨ Fitur Utama

Aplikasi Circie POS dilengkapi dengan berbagai halaman dan komponen fungsional:

1. **🛍️ Halaman Kasir / Transaksi (Products Page)**
   - **Pencarian & Filter Kategori:** Cari menu dengan cepat dan filter berdasarkan kategori hidangan.
   - **Menu Dinamis:** Layout terbagi menjadi produk yang paling sering dipesan (*Most Ordered*) dan hidangan populer (*Popular Dishes*).
   - **Keranjang Belanja (Order Details Sidebar):** Hitung otomatis subtotal, pajak, diskon, dan total harga. Edit jumlah kuantitas (*increase/decrease*) atau hapus item dari keranjang dengan mudah.

2. **📊 Dashboard & Analisis (Dashboard Page)**
   - **KPI Cards:** Ringkasan statistik penting seperti Total Pendapatan, Total Transaksi, dan Feedback Pelanggan.
   - **Staff Activity & Insights:** Pantau daftar staf aktif dan metrik performa masing-masing staf.

3. **📜 Riwayat Transaksi (History Page)**
   - Daftar pesanan yang masuk dengan status pembayaran (Completed, Pending, Cancelled) yang tersusun rapi.

4. **⚙️ Pengaturan Akun & Sistem (Settings Page)**
   - **Profil Pengguna:** Edit informasi nama, email, dan nomor telepon.
   - **Keamanan:** Simulasi ganti kata sandi dan opsi Autentikasi Dua Faktor (2FA).
   - **Preferensi:** Pilihan bahasa sistem, opsi Dark Mode, dan notifikasi (Email, Push, SMS).
   - **Log Aktivitas:** Menampilkan log aktivitas terakhir untuk keamanan akun.

---

## 🛠️ Teknologi yang Digunakan

Proyek ini dibangun menggunakan teknologi-teknologi modern berikut:

* **React (v18.3)** — Library JavaScript untuk membangun antarmuka pengguna berbasis komponen.
* **Vite (v5.3)** — Build tool super cepat untuk pengembangan aplikasi frontend modern.
* **TailwindCSS (v3.4)** — Framework CSS utility-first untuk desain UI yang bersih, modern, dan sangat responsif.
* **Lucide React** & **Material Symbols Rounded** — Paket ikon modern dan minimalis untuk mempermudah navigasi.
* **Google Fonts (Inter)** — Tipografi premium untuk kenyamanan membaca data.

---

## 🚀 Memulai (Panduan Instalasi)

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek Circie POS di komputer lokal Anda:

### 📋 Prasyarat
Pastikan Anda sudah menginstal **Node.js** dan **npm** di komputer Anda.

### 🔧 Langkah-Langkah Instalasi

1. **Clone Repositori:**
   ```bash
   git clone https://github.com/itscasaa/Kasir-System.git
   cd Kasir-System
   ```

2. **Instal Dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan Server Pengembangan:**
   ```bash
   npm run dev
   ```
   Setelah server berjalan, buka URL yang tertera di terminal (biasanya `http://localhost:5173`) di browser Anda.

4. **Build untuk Produksi:**
   ```bash
   npm run build
   ```
   Hasil build siap pakai akan tersimpan di dalam folder `dist/`.

---

## 📁 Struktur Direktori

```text
webkasir/
├── src/
│   ├── components/    # Komponen reusable (Navbar, Cart, Menu, dll)
│   ├── data/          # Data dummy untuk menu, history, dashboard, & settings
│   ├── pages/         # Halaman utama (DashboardPage, HistoryPage, SettingsPage)
│   ├── utils/         # Fungsi utility pembantu
│   ├── App.jsx        # Komponen utama aplikasi & state management
│   ├── main.jsx       # Entry point React
│   └── index.css      # Custom styling & konfigurasi font
├── public/            # File statis (favicon, logo, dll)
├── index.html         # Template HTML utama
├── package.json       # Manajer dependensi & script proyek
├── tailwind.config.js # Konfigurasi kustom TailwindCSS
└── vite.config.js     # Konfigurasi plugin Vite
```

---

## 📝 Lisensi

Proyek ini dilisensikan di bawah lisensi MIT. Silakan gunakan dan kembangkan lebih lanjut!
