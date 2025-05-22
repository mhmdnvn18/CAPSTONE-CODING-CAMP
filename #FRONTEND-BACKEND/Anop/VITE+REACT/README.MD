# VITE + REACT Capstone Project

> **Catatan:**  
> Anda dapat menggunakan berbagai framework/library front-end modern bersama Vite, seperti React, Vue.js, Svelte, SolidJS, Angular, dan Preact. Pilih sesuai preferensi dan kebutuhan tim/proyek.
>
> **Vite** adalah build tool (alat pengembangan & bundler) yang sangat cepat dan fleksibel, digunakan untuk menjalankan dan membangun proyek front-end modern.  
> **React** adalah library JavaScript untuk membangun antarmuka pengguna (UI).  
> Vite dan React saling melengkapi: Vite untuk tooling/build, React untuk UI.  
>
> **Tailwind CSS** dapat digunakan bersama framework apa pun (React, Vue, Svelte, SolidJS, bahkan HTML/JS biasa).

---

## Fitur Utama

### 1. Responsive Layout Web Apps
Membuat aplikasi web yang tata letaknya responsif di berbagai ukuran layar (desktop, tablet, ponsel).

**Saran implementasi:**
- Gunakan CSS Flexbox/Grid.
- Terapkan media queries.
- Manfaatkan framework UI responsif seperti Tailwind CSS, Chakra UI, Material UI.
- Uji tampilan di berbagai perangkat.

### 2. Networking Calls to Interact with API
Mengimplementasikan HTTP request dari front-end ke API.

**Saran implementasi:**
- Gunakan library seperti Axios atau `fetch`.
- Pisahkan logic API ke service/helper.
- Gunakan async/await.
- Tangani error dan loading state.

**Contoh penggunaan fetch:**
```js
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  })
  .then(data => {
    console.log('Data dari API:', data);
  })
  .catch(error => {
    console.error('Terjadi error:', error);
  });
```

### 3. Module Bundler: Vite
Menggunakan Vite sebagai module bundler utama.

**Saran implementasi:**
- Inisialisasi dengan `npm create vite@latest`.
- Konfigurasikan sesuai kebutuhan.
- Manfaatkan fitur HMR.
- Optimalkan build production.

### 4. Building RESTful API with Supabase
Membangun API back-end RESTful menggunakan Supabase (database, authentication, RESTful API).

**Saran implementasi:**
- Buat project dan tabel di Supabase.
- Gunakan Supabase Client Library.
- Manfaatkan fitur authentication.
- Dokumentasikan endpoint dan struktur data.

### 5. Data Persistence with Supabase
RESTful API menyimpan data di Supabase.

**Saran implementasi:**
- Rancang skema tabel.
- Gunakan row-level security (RLS).
- Backup data berkala.
- Pantau performa database.

### 6. RESTful API URL Conventions
Gunakan konvensi URL standar RESTful (kata benda jamak, metode HTTP sesuai).

**Saran implementasi:**
- Gunakan resource jamak (`/posts`, `/comments`).
- GET, POST, PUT/PATCH, DELETE sesuai kebutuhan.
- Hindari kata kerja di URL.
- Dokumentasikan endpoint.

### 7. AI/ML Integration
Integrasi AI/ML sebagai fitur utama (di browser atau back-end).

**Saran implementasi:**
- Untuk browser: TensorFlow.js, ONNX.js.
- Untuk back-end: Supabase Edge Functions, layanan eksternal (OpenAI API).
- Pastikan model ringan untuk browser.
- Sediakan fallback/notifikasi jika tidak didukung.

### 8. Stability and Reliability
Pastikan semua fitur stabil dan tidak menyebabkan crash/error.

**Saran implementasi:**
- Tambahkan error boundary di React.
- Validasi input di front-end & back-end.
- Buat unit/integration test.
- Monitor aplikasi setelah deployment.

### 9. Deployment with Vercel
Deploy front-end ke Vercel.

**Saran implementasi:**
- Pastikan konfigurasi (`vercel.json` jika perlu) sudah benar.
- Atur environment variable di Vercel.
- Build & preview sebelum production deploy.
- Manfaatkan custom domain & analytics Vercel.

---

## Cara Instalasi & Menjalankan Proyek

1. Clone repository ini.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Jalankan aplikasi:
   ```bash
   npm run dev
   ```
4. Konfigurasikan environment variable jika diperlukan (misal: koneksi Supabase).

---

## Struktur Folder

```
Anop/
└── VITE+REACT/
    ├── public/
    │   └── model/
    │       ├── model.json
    │       └── group1-shard1of1.bin
    └── src/
        ├── components/
        │   ├── ErrorBoundary.jsx
        │   ├── PredictionForm.jsx
        │   └── PredictionResult.jsx
        ├── pages/
        │   └── Home.jsx
        ├── services/
        │   ├── api.js
        │   ├── supabase.js
        │   └── model.js
        ├── utils/
        │   └── validateInput.js
        ├── App.jsx
        ├── main.jsx
        └── index.css
```

- **public/model/**: Tempat file model TensorFlow.js hasil training (`model.json`, `group1-shard1of1.bin`).
- **src/components/**: Komponen UI utama (form, hasil, error boundary).
- **src/pages/**: Halaman utama aplikasi.
- **src/services/**: Logic API, integrasi Supabase, dan pemanggilan model AI/ML.
- **src/utils/**: Utility/helper seperti validasi input.
- **src/App.jsx, src/main.jsx**: Entry point aplikasi React.
- **src/index.css**: Konfigurasi Tailwind CSS.

---

## Contoh Penggunaan Fitur Prediksi

```js
// Contoh pemanggilan API prediksi penyakit kardiovaskular
fetch('/api/predict', {
  method: 'POST',
  body: JSON.stringify({ usia: 45, tekanan_darah: 130, ... }),
  headers: { 'Content-Type': 'application/json' }
})
  .then(res => res.json())
  .then(data => console.log('Hasil prediksi:', data));
```

> **Library AI/ML:**
> - [TensorFlow.js](https://www.tensorflow.org/js/)
> - [ONNX.js](https://github.com/microsoft/onnxjs)
> - [ml5.js](https://ml5js.org/)
> - [Brain.js](https://brain.js.org/)

---

### 10. Testing

Melakukan pengujian untuk memastikan aplikasi berjalan sesuai harapan.

**Saran implementasi:**
- Gunakan library testing seperti Jest, React Testing Library, atau Cypress.
- Buat test untuk komponen, halaman, dan fungsi penting.
- Lakukan pengujian secara berkala, terutama setelah ada perubahan kode.

---

## Lisensi

MIT License

