let model;

// Buat form input
const inputContainer = document.getElementById("inputs");
for (let i = 0; i < 11; i++) {
  const input = document.createElement("input");
  input.type = "number";
  input.step = "any";
  input.placeholder = `Fitur ${i + 1}`;
  input.id = `input-${i}`;
  inputContainer.appendChild(input);
}

// Load model
async function loadModel() {
  model = await tf.loadLayersModel("model.json");
}
loadModel();

// Prediksi saat submit form
document.getElementById("predict-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!model) {
    alert("Model belum dimuat.");
    return;
  }

  // Ambil nilai dari input
  const inputData = [];
  for (let i = 0; i < 11; i++) {
    const val = parseFloat(document.getElementById(`input-${i}`).value);
    if (isNaN(val)) {
      alert(`Fitur ${i + 1} harus berupa angka.`);
      return;
    }
    inputData.push(val);
  }

  // Prediksi
  const inputTensor = tf.tensor2d([inputData]);
  const prediction = model.predict(inputTensor);
  const result = (await prediction.data())[0];

  document.getElementById("result").innerText =
    result > 0.5
      ? `Hasil: Risiko tinggi penyakit kardiovaskular (${(result * 100).toFixed(2)}%)`
      : `Hasil: Risiko rendah penyakit kardiovaskular (${(result * 100).toFixed(2)}%)`;
});
