import * as tf from '@tensorflow/tfjs';

let model = null;

export async function loadModel() {
  if (!model) {
    try {
      // Coba memuat model dari file JSON
      model = await tf.loadLayersModel('/model/model.json');
      
      // Verifikasi bahwa model memiliki inputShape yang benar
      if (!model.inputs[0].shape || model.inputs[0].shape.length < 2) {
        console.warn('Model tidak memiliki inputShape yang valid, membuat model baru dengan inputShape yang benar');
        
        // Jika model tidak memiliki inputShape yang valid, buat model baru dengan struktur yang sama
        const weights = model.getWeights();
        
        // Buat model baru dengan inputShape yang benar
        const newModel = tf.sequential();
        newModel.add(tf.layers.dense({
          inputShape: [11], // 11 fitur input
          units: 64,
          activation: 'relu',
          name: 'dense_1'
        }));
        newModel.add(tf.layers.dense({
          units: 32,
          activation: 'relu',
          name: 'dense_2'
        }));
        newModel.add(tf.layers.dense({
          units: 1,
          activation: 'sigmoid',
          name: 'dense_3'
        }));
        
        // Jika weights tersedia, terapkan ke model baru
        if (weights && weights.length > 0) {
          newModel.setWeights(weights);
        }
        
        model = newModel;
      }
    } catch (error) {
      console.error('Error loading model:', error);
      throw new Error('Gagal memuat model prediksi. Silakan coba lagi.');
    }
  }
  return model;
}

export async function predict(input) {
  await loadModel();
  // Urutkan dan konversi input sesuai urutan field model
  const inputArr = [
    Number(input.usia),
    Number(input.tekanan_darah),
    Number(input.kolesterol),
    Number(input.jenis_kelamin),
    Number(input.merokok),
    Number(input.diabetes),
    Number(input.berat_badan),
    Number(input.tinggi_badan),
    Number(input.aktivitas_fisik),
    Number(input.riwayat_keluarga),
    Number(input.diet)
  ];
  const tensor = tf.tensor2d([inputArr]);
  const prediction = model.predict(tensor);
  const result = prediction.dataSync()[0];
  return result;
}
