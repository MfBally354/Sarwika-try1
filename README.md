# 🏪 Sarwika - Warung Sembako Digital

Website katalog digital untuk Warung Sembako Sarwika yang menampilkan daftar produk dan harga sembako lengkap dengan fitur pencarian.

> **Tagline:** *Sembako Lengkap, Harga Bersahabat*

## 📋 Deskripsi

Sarwika adalah website katalog produk berbasis HTML/CSS/JavaScript yang dirancang untuk memudahkan pelanggan melihat daftar harga produk sembako. Website ini menampilkan berbagai kategori produk dengan gambar, deskripsi, dan harga yang jelas.

## ✨ Fitur Utama

- 🔍 **Fitur Pencarian** - Cari produk berdasarkan nama atau deskripsi
- 📱 **Responsive Design** - Tampilan optimal di semua perangkat (desktop, tablet, mobile)
- 🏷️ **Kategorisasi Produk** - Produk dikelompokkan berdasarkan kategori untuk memudahkan browsing
- 🖼️ **Tampilan Visual** - Setiap produk dilengkapi dengan gambar produk
- 💰 **Informasi Harga Jelas** - Harga tercantum dengan jelas untuk setiap produk
- ⚡ **Fast Loading** - Website statis tanpa database untuk performa maksimal

## 📦 Kategori Produk

Website ini menampilkan 8 kategori produk utama:

1. **Mie Instan** - Berbagai varian mie instan (Indomie, Mie Sedaap, dll)
2. **Telur** - Telur ayam segar berbagai ukuran (1kg, 1/2kg, 1/4kg)
3. **Beras** - Beras premium dan beras pandan wangi
4. **Minyak Goreng** - Minyak goreng kemasan berbagai merek
5. **Gula & Kopi** - Gula pasir, kopi, teh, susu, dan minuman instan
6. **Bumbu Masakan** - Bumbu dapur, kecap, saus, santan, dan penyedap
7. **Kesehatan dan Kecantikan** - Sabun, deterjen, shampoo, dan produk kebersihan
8. **Makanan/Camilan** - Biskuit, snack, dan minuman kemasan
9. **Barang Lainnya** - Tisu, gas elpiji, baterai, dan keperluan rumah tangga

## 🛠️ Teknologi yang Digunakan

- **HTML5** - Struktur halaman web
- **CSS3** - Styling dan responsive design
- **JavaScript (Vanilla)** - Fitur pencarian dan interaktivitas
- **Google Fonts** - Typography (Segoe UI)

## 📁 Struktur Proyek

```
Sarwika-try1/
├── index.html                    # Halaman utama
├── 2-list-harga.html            # Halaman daftar harga produk
├── README.md                     # Dokumentasi proyek
└── [100 file gambar produk]     # Aset gambar produk (.jpg, .webp, .png, .avif)
```

### Kategori File Gambar:
- **Mie Instan:** indomie-*.jpg, mie-sedaap-*.jpg
- **Telur:** telur-*.jpg, telur-*.webp
- **Beras:** beras-*.jpg
- **Minyak:** minyak-*.webp
- **Gula & Kopi:** gulaku.avif, kapal-api-*.webp, white-coffe-*.png, dll
- **Bumbu:** masako-*.png, kecap-*.png, sasa-*.png, dll
- **Kesehatan:** sabun-*.jpg, rinso-*.jpg, downy-*.jpg, dll
- **Camilan:** biskuat.jpg, oreo-*.avif, malkist-*.webp, dll
- **Lainnya:** gas-elpigi.webp, tissue-*.jpg, baterai-*.webp, dll

## 🚀 Cara Menggunakan

### 1. Clone atau Download Repository
```bash
git clone https://github.comMfBally354/Sarwika-try1.git
cd Sarwika-try1
```

### 2. Buka di Browser
Cukup buka file `index.html` dengan browser favorit Anda:
```bash
# Untuk Linux/Mac
open index.html

# Atau langsung double-click file index.html di file explorer
```

### 3. Gunakan Live Server (Opsional)
Jika menggunakan VS Code, gunakan extension Live Server:
1. Install extension "Live Server" di VS Code
2. Klik kanan pada `index.html`
3. Pilih "Open with Live Server"

## 💡 Cara Menggunakan Fitur Pencarian

1. Masukkan kata kunci produk di kolom pencarian (contoh: "indomie", "telur", "sabun")
2. Klik tombol "Cari" atau tekan Enter
3. Produk yang sesuai akan ditampilkan
4. Kategori tanpa produk yang cocok akan disembunyikan otomatis
5. Kosongkan kolom pencarian untuk menampilkan semua produk kembali

## 📱 Responsive Breakpoints

Website ini responsive dengan breakpoint:
- **Desktop:** > 768px (layout penuh)
- **Tablet:** 481px - 768px (layout sedang)
- **Mobile:** ≤ 480px (layout compact)

## 🎨 Customization

### Mengubah Warna Tema
Edit file `2-list-harga.html` di bagian `<style>`:
```css
header {
    background-color: #2e6da4; /* Warna header */
}

#searchButton {
    background-color: #f0ad4e; /* Warna tombol */
}

.product-price {
    color: #d9534f; /* Warna harga */
}
```

### Menambah Produk Baru
1. Siapkan gambar produk (format .jpg, .webp, .png, atau .avif)
2. Letakkan file gambar di root folder
3. Tambahkan kode HTML di kategori yang sesuai:
```html
<div class="product-item">
    <img src="nama-gambar.jpg" alt="Nama Produk" class="product-image">
    <div class="product-info">
        <div>
            <h3 class="product-name">Nama Produk</h3>
            <p class="product-description">Deskripsi produk</p>
        </div>
        <div class="product-price">Rp X.XXX</div>
    </div>
</div>
```

### Update Harga
Cari nama produk di file `2-list-harga.html` dan ubah nilai di dalam tag:
```html
<div class="product-price">Rp [HARGA BARU]</div>
```

## 📍 Informasi Toko

**Warung Sembako Sarwika**
- 📍 Alamat: Jl. Borobudur, Kecamatan Semarang Barat, Kota Semarang
- 📞 Telepon: 0895-3524-15628
- 🕐 Jam Operasional: [Sesuaikan dengan jam buka toko]

## 📊 Statistik Produk

- **Total Produk:** 100+ item
- **Total Kategori:** 9 kategori
- **Total Asset Gambar:** 100 file
- **Update Terakhir:** 14 Mei 2025

## 🔧 Maintenance

### Update Harga Reguler
1. Buka file `2-list-harga.html`
2. Cari produk yang ingin diupdate
3. Ubah harga di tag `<div class="product-price">`
4. Update tanggal di bagian bawah halaman: `<p class="update-date">* Harga dapat berubah sewaktu-waktu. Terakhir diperbarui: [TANGGAL]</p>`

### Optimasi Gambar
Untuk mempercepat loading website, kompres gambar menggunakan:
- [TinyPNG](https://tinypng.com/) untuk PNG/WEBP
- [JPEG Optimizer](https://www.jpeg-optimizer.com/) untuk JPG
- Target ukuran: < 100KB per gambar

## 🚀 Deployment

### Hosting Gratis
Website ini dapat di-deploy ke:
1. **GitHub Pages**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```
   Aktifkan GitHub Pages di Settings → Pages

2. **Netlify**
   - Drag & drop folder ke [Netlify Drop](https://app.netlify.com/drop)

3. **Vercel**
   - Import repository dari GitHub ke Vercel

## 📝 Catatan Penting

- ⚠️ Harga dapat berubah sewaktu-waktu tanpa pemberitahuan
- 📦 Ketersediaan stok produk dapat berbeda dengan yang ditampilkan
- 🔄 Lakukan update harga secara berkala untuk informasi akurat
- 📸 Pastikan gambar produk sesuai dengan produk yang dijual

## 🤝 Kontribusi

Saran dan masukan sangat diterima! Jika Anda menemukan bug atau ingin menambahkan fitur:
1. Fork repository ini
2. Buat branch baru (`git checkout -b fitur-baru`)
3. Commit perubahan (`git commit -m 'Menambahkan fitur baru'`)
4. Push ke branch (`git push origin fitur-baru`)
5. Buat Pull Request

## 📄 Lisensi

Project ini adalah open source dan tersedia untuk digunakan secara bebas.

## 👨‍💻 Developer

Dikembangkan dengan ❤️ oleh Iqbal

## 📞 Kontak Developer

- GitHub: https://github.com/MfBally354
- Email: iqbalguntur313@gmail.com

## 🙏 Acknowledgments

- Design inspiration dari modern e-commerce websites
- Icon dan imagery dari berbagai sumber produk
- Testing dan feedback dari keluarga dan pelanggan

---

**Sarwika** - Solusi Belanja Sembako Modern untuk Keluarga Indonesia 🇮🇩

⭐ Star repository ini jika bermanfaat!
