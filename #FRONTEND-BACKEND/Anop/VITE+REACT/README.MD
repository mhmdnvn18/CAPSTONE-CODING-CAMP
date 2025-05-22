# VITE + REACT Capstone Project

> **Catatan:**  
> Anda dapat menggunakan berbagai framework/library front-end modern bersama Vite, seperti React, Vue.js, Svelte, SolidJS, Angular, dan Preact. Pilih sesuai preferensi dan kebutuhan tim/proyek.
>
> **Vite** adalah build tool (alat pengembangan & bundler) yang sangat cepat dan fleksibel, digunakan untuk menjalankan dan membangun proyek front-end modern.  
> **React** adalah library JavaScript untuk membangun antarmuka pengguna (UI).  
> Vite dan React saling melengkapi: Vite untuk tooling/build, React untuk UI.  
>
> **Tailwind CSS** dapat digunakan bersama framework apa pun (React, Vue, Svelte, SolidJS, bahkan HTML/JS biasa).
>
> ### Daftar Framework, Bundler, dan Library Populer
>
> **Framework Front-End:**
> - [React](https://react.dev/)
> - [Vue.js](https://vuejs.org/)
> - [Svelte](https://svelte.dev/)
> - [SolidJS](https://www.solidjs.com/)
> - [Angular](https://angular.io/)
> - [Preact](https://preactjs.com/)
>
> **Framework JavaScript Lain & SSG/SSR:**
> - [Next.js](https://nextjs.org/) (React, SSR/SSG)
> - [Nuxt.js](https://nuxt.com/) (Vue, SSR/SSG)
> - [Remix](https://remix.run/) (React, fullstack)
> - [Gatsby](https://www.gatsbyjs.com/) (React, static site)
> - [Astro](https://astro.build/) (multi-framework)
> - [Qwik](https://qwik.builder.io/) (resumable)
> - [Eleventy (11ty)](https://www.11ty.dev/) (static site)
>
> **Module Bundler/Build Tool:**
> - [Vite](https://vitejs.dev/)
> - [Webpack](https://webpack.js.org/)
> - [Parcel](https://parceljs.org/)
> - [Rollup](https://rollupjs.org/)
> - [Snowpack](https://www.snowpack.dev/)
>
> **Library UI/Komponen:**
> - [Tailwind CSS](https://tailwindcss.com/)
> - [Chakra UI](https://chakra-ui.com/)
> - [Material UI](https://mui.com/)
> - [Ant Design](https://ant.design/)
> - [Bootstrap](https://getbootstrap.com/)
>
> **Library HTTP/Networking:**
> - [Axios](https://axios-http.com/)
> - [ky](https://github.com/sindresorhus/ky)
> - [SWR](https://swr.vercel.app/)
> - [React Query](https://tanstack.com/query/latest)
> - Native `fetch` API

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