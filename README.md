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

---

# untuk menggunakan ChatBotGemini di repomu harus menggunakan workflows ini:
```bash
.github/workflows/ai-reply.yml
```
# secretnya harus seperti ini:
nama secret: MODEL_CHANGER
isinya:
```bash
 Model: 'gemini-1.5-pro'
 'AIzaSyAxxxxxxxxxxxxxxx'
```
# dengan workflows ini(namanya harus sama yaitu ai-reply.yml) isi dengan ini:
```bash
name: 'Gemini Issue Bot'
description: 'Bot otomatis untuk menjawab issue menggunakan AI Gemini'
inputs:
  gemini_api_key:
    description: 'Masukkan API Key Gemini kalian'
    required: true
runs:
  using: 'node20'
  main: 'bot.js'
  env:
    MODEL_CHANGER_RAW: ${{ inputs.model_changer }}
```

---

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
