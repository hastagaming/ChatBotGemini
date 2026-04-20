/**
 * ChatBotGemini
 * * @author Nasa (Hastagaming)
 * @copyright 2026 Nasa (Hastagaming)
 * @license MIT
 */

import express from 'express';
import fs from 'fs';
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

// 1. Menampilkan halaman input
app.get('/', (req, res) => {
    res.send(`
        <html>
            <body style="background:#0d1117; color:white; font-family:sans-serif; text-align:center; padding-top:50px;">
                <h1>ChatBotGemini Setup</h1>
                <p>Halo teman, apa kabar?</p>
                <form action="/save" method="POST">
                    <input type="text" name="apikey" placeholder="Masukkan API Key Gemini" style="padding:10px; width:80%;">
                    <br><br>
                    <button type="submit" style="background:#238636; color:white; padding:10px 20px; border:none; cursor:pointer;">OK</button>
                </form>
            </body>
        </html>
    `);
});

// 2. Menyimpan API Key ke file .env
app.post('/save', (req, res) => {
    const apiKey = req.body.apikey;
    const envContent = `GEMINI_API_KEY=${apiKey}\nAPP_ID=... \nWEBHOOK_SECRET=...`; // Tambahkan config lainnya
    
    fs.writeFileSync('.env', envContent);
    res.send('<h1>Berhasil!</h1><p>API Key sudah tersimpan. Silakan kembali ke terminal dan jalankan "npm start"</p>');
});

app.listen(port, () => console.log(`Buka http://localhost:${port} di browser kamu`));
