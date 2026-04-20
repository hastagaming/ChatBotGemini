# ChatBotGemini 🤖

ChatBotGemini adalah bot GitHub berbasis kecerdasan buatan (AI) yang dirancang untuk mengotomatisasi interaksi di repositori kamu, seperti membalas *issue* dan memberikan saran solusi secara cerdas menggunakan Google Gemini.

### 🛡️ Keamanan Utama: Bring Your Own Key (BYOK)
Aplikasi ini menerapkan standar keamanan **Self-Hosted**. API Key Gemini milikmu **tidak pernah** dikirim ke server pihak ketiga atau disimpan di database pusat. Semua data API Key tersimpan secara lokal di mesin kamu dalam file `.env` yang terenkripsi (opsional) atau tersimpan aman di server lokalmu sendiri.

## 🚀 Fitur
* **Otomatisasi:** Mendeteksi `issues.opened` dan memberikan balasan AI secara instan.
* **Privasi:** Tidak ada data kunci API yang bocor.
* **Easy Setup:** Dilengkapi dengan *wizard* setup berbasis web lokal untuk konfigurasi instan.

## instalasi cepat (dengan link)
[masuk ke link ini:(https://github.com/apps/ChatBotGemini/installations/new)]
## ⚙️ Cara Instalasi & Konfigurasi

### 1. Persiapan
Pastikan kamu sudah menginstal [Node.js](https://nodejs.org/) di perangkatmu.

```bash
# Clone repositori
git clone [https://github.com/hastagaming/ChatBotGemini.git](https://github.com/hastagaming/ChatBotGemini.git)
cd ChatBotGemini

# Install dependensi
npm install

### 2.Konfigurasi (The Setup Wizard)
​Kita menggunakan local setup wizard agar kamu tidak perlu
mengedit file konfigurasi secara manual.
# 1.jalankan skrip setup:
```bash
node setup.cjs
```
# 2.Buka browser dan akses: http://localhost:3000
# 3.Masukkan Gemini API Key milikmu dan klik OK.
# 4.Selesai! File .env akan dibuat secara otomatis.

### 3.Menjalankan bot
#setelah konfigurasi selesai, jalankan bot:
```bash
npm start
```

## 🛠️ Pengembangan
​Bot ini dibangun menggunakan Probot dan Google Generative AI SDK.
​app.yml: Berisi konfigurasi izin (permissions) GitHub App.
​index.js: Logika utama bot untuk memproses AI.
​setup.cjs: Wizard untuk penyimpanan API Key lokal.
​## 📄 Lisensi
​Proyek ini bersifat Open Source dan dirilis di bawah lisensi MIT.
​Dikembangkan oleh: [hastagaming]

---
### ⚖️ Lisensi & Hak Cipta
**ChatBotGemini** © 2026 [Nasa (Hastagaming)](https://github.com/hastagaming). 
Dilisensikan di bawah lisensi [MIT](LICENSE).
