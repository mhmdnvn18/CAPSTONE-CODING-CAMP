import * as tf from '@tensorflow/tfjs';

let model = null;

export async function loadModel() {
  if (!model) {
    model = await tf.loadLayersModel('/model/model.json');
  }
  return model;
}

export async function predict(input) {
  await loadModel();
  // Sesuaikan preprocessing input sesuai training
  const inputArr = [
    Number(input.usia),
    Number(input.tekanan_darah),
    // ...field lain
  ];
  const tensor = tf.tensor2d([inputArr]);
  const prediction = model.predict(tensor);
  const result = prediction.dataSync()[0];
  return result;
}
