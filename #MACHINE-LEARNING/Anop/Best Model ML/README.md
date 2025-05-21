# Multi-Layer Perceptron untuk Prediksi Risiko Penyakit Kardiovaskular

Model ini merupakan neural network (MLP) yang dilatih untuk memprediksi risiko penyakit kardiovaskular berdasarkan data klinis seperti usia, tekanan darah, kolesterol, dan faktor gaya hidup. Model dibangun, dievaluasi, dan dikonversi ke format TensorFlow.js agar dapat digunakan di aplikasi web.

## Struktur Folder

```
Best Model ML/
├── README.md
├── MLP.ipynb                # Notebook proses training, evaluasi, dan konversi model
├── tfjs_model/              # Folder model TensorFlow.js
│   ├── model.json           # Arsitektur & metadata model untuk TensorFlow.js
│   └── group1-shard1of1.bin # Bobot model (binary)
└── web/
    └── index.html           # Website sederhana untuk prediksi risiko (integrasi tfjs)
```

# TensorFlow.js Model Files

Direktori ini berisi file model hasil konversi dari Keras/TensorFlow ke format TensorFlow.js, yang dapat digunakan untuk melakukan inferensi machine learning di lingkungan JavaScript (browser atau Node.js).

## Penjelasan File

### 1. `model.json`
File ini berisi arsitektur model neural network, konfigurasi pelatihan (seperti optimizer, loss, dan metrics), serta referensi ke file bobot model. File ini wajib digunakan saat melakukan load model di TensorFlow.js.

### 2. `group1-shard1of1.bin`
File ini berisi bobot (weights) model dalam format biner. File ini akan otomatis dibaca saat model di-load menggunakan `model.json`.

### 3. `MLP.ipynb`
Notebook Jupyter ini berisi seluruh proses pembuatan model machine learning, mulai dari:
- Pengambilan dan eksplorasi data,
- Pra-pemrosesan (standarisasi, encoding fitur),
- Pembuatan dan pelatihan model Multi-Layer Perceptron (MLP) dengan Keras,
- Hyperparameter tuning menggunakan GridSearchCV,
- Evaluasi performa model,
- Penyimpanan model terbaik ke format `.h5` dan konversi ke TensorFlow.js,
- Contoh inferensi/prediksi menggunakan model yang telah dilatih.

Notebook ini dapat dijalankan untuk mereproduksi model yang dihasilkan pada file `model.json` dan `group1-shard1of1.bin`.

---

## Website Prediksi Risiko (web/index.html)

Tersedia website sederhana berbasis HTML+JavaScript di folder `web/` untuk melakukan prediksi risiko penyakit kardiovaskular secara langsung di browser menggunakan model TensorFlow.js.

### Cara Menjalankan Website Lokal

1. Pastikan folder `tfjs_model/` (berisi `model.json` dan `group1-shard1of1.bin`) berada di lokasi yang sama dengan folder `web/`.
2. Buka file `web/index.html` di browser (klik dua kali atau buka dengan Live Server/VSCode).
3. Isi form data klinis, klik "Prediksi", dan hasil prediksi akan muncul di bawah form.

### Penting: Preprocessing di Frontend

- Website melakukan preprocessing (standarisasi fitur numerik) sesuai dengan training di Python.
- Anda harus mengisi nilai mean dan std scaler (`scaler.mean_` dan `scaler.scale_` dari Python) ke dalam kode JavaScript pada `index.html` agar hasil prediksi konsisten dengan model.

---

## Cara Menggunakan Model di TensorFlow.js

```js
import * as tf from '@tensorflow/tfjs';

const model = await tf.loadLayersModel('path/to/model.json');
// Lakukan inferensi dengan model
```

Pastikan kedua file (`model.json` dan `group1-shard1of1.bin`) berada pada path yang sama.

---
**Catatan:**  
- Model ini merupakan hasil training pada data dengan 11 fitur input dan output klasifikasi biner (sigmoid).
- Model terdiri dari 3 layer Dense: 64 unit (relu), 32 unit (relu), dan 1 unit (sigmoid).
