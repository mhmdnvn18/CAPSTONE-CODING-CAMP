# VITE + REACT Capstone Project

## Fitur Utama

### 1. Responsive Layout Web Apps
Membuat aplikasi web yang tata letaknya dapat menyesuaikan diri secara otomatis dengan berbagai ukuran layar perangkat (desktop, tablet, dan ponsel).  
*Ensures a good user experience on all devices.*

**Saran implementasi:**
- Gunakan CSS Flexbox dan CSS Grid untuk layout yang fleksibel.
- Terapkan media queries di CSS untuk menyesuaikan tampilan pada berbagai ukuran layar.
- Manfaatkan framework UI responsif seperti [Tailwind CSS](https://tailwindcss.com/), [Chakra UI](https://chakra-ui.com/), atau [Material UI](https://mui.com/).
- Uji tampilan di berbagai perangkat dan gunakan DevTools untuk simulasi responsif.

### 2. Networking Calls to Interact with API
Mengimplementasikan panggilan jaringan (HTTP request) dari sisi front-end untuk berkomunikasi dengan API proyek.  
*API provides data and functionality needed by the front-end.*

**Saran implementasi:**
- Gunakan library seperti [Axios](https://axios-http.com/) atau `fetch` bawaan JavaScript untuk melakukan HTTP request.
- Buat service/helper khusus untuk memisahkan logic pemanggilan API dari komponen.
- Manfaatkan fitur async/await untuk penanganan asynchronous.
- Tangani error dan loading state dengan baik di UI.

### 3. Module Bundler: Vite
Menggunakan [Vite](https://vitejs.dev/) sebagai module bundler utama untuk mengelola dan menggabungkan berbagai modul kode (JavaScript, CSS, gambar, dll.) menjadi file yang siap dijalankan di browser.  
*Vite membantu mengoptimalkan dan mengatur proyek dengan build yang sangat cepat dan pengalaman pengembangan modern.*

### 4. Building RESTful API with Supabase
Membangun API di sisi back-end yang mengikuti prinsip REST (Representational State Transfer) menggunakan [Supabase](https://supabase.com/) sebagai backend utama (database, authentication, dan RESTful API).  
*Digunakan oleh aplikasi front-end untuk request dan pengiriman data. Integrasi Supabase ke aplikasi React menggunakan library resmi Supabase.*

### 5. Data Persistence with Supabase
API RESTful yang dibangun menyimpan data menggunakan Supabase sebagai database utama.  
*Semua data aplikasi dikelola dan disimpan di Supabase.*

### 6. RESTful API URL Conventions
Merancang URL untuk API RESTful sesuai konvensi standar (misal: menggunakan kata benda jamak seperti `/users` bukan `/user`).  
*Makes the API easier to understand, use, and maintain.*

**Saran implementasi:**
- Ikuti standar RESTful: gunakan kata benda jamak untuk resource (`/posts`, `/comments`).
- Gunakan metode HTTP yang sesuai: GET (ambil data), POST (buat data), PUT/PATCH (update data), DELETE (hapus data).
- Hindari penggunaan kata kerja pada URL.
- Dokumentasikan endpoint dan konvensi URL di README atau API docs.

### 7. AI/ML Integration
Mengintegrasikan kemampuan AI/ML sebagai fitur utama aplikasi, baik di back-end maupun langsung di perangkat pengguna (browser).  
*Main feature leverages AI/ML capabilities.*

**Saran implementasi:**
- Untuk AI/ML di browser, gunakan library seperti [TensorFlow.js](https://www.tensorflow.org/js) atau [ONNX.js](https://github.com/microsoft/onnxjs).
- Untuk AI/ML di back-end, manfaatkan Supabase Edge Functions atau integrasi dengan layanan AI eksternal (misal: OpenAI API).
- Pastikan model yang digunakan ringan jika dijalankan di browser.
- Sediakan fallback atau notifikasi jika perangkat tidak mendukung fitur AI/ML.

### 8. Stability and Reliability
Memastikan semua fitur utama telah diimplementasikan dengan benar dan stabil, tanpa menyebabkan aplikasi crash atau error.  
*Ensures robust and reliable application.*

**Saran implementasi:**
- Tambahkan error boundary di React untuk menangani error pada komponen.
- Lakukan validasi input pada front-end dan back-end.
- Buat pengujian (unit test dan integration test) untuk fitur utama.
- Monitor aplikasi setelah deployment menggunakan tools seperti Vercel Analytics atau Sentry.

### 9. Deployment with Vercel
Aplikasi front-end dideploy ke [Vercel](https://vercel.com/) sebagai platform hosting utama.  
*Push kode ke GitHub, lalu hubungkan repository ke Vercel untuk proses deployment otomatis.*