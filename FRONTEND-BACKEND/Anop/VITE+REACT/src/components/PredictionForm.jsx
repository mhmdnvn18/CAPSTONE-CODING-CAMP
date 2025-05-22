import React, { useState } from 'react';
import { validateInput } from '../utils/validateInput';
import { predict } from '../services/model';

const initialState = {
  usia: '',
  tekanan_darah: '',
  kolesterol: '',
  jenis_kelamin: '',
  merokok: '',
  diabetes: '',
  berat_badan: '',
  tinggi_badan: '',
  aktivitas_fisik: '',
  riwayat_keluarga: '',
  diet: ''
};

function PredictionForm({ onResult }) {
  const [input, setInput] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    const valid = validateInput(input);
    if (!valid.ok) {
      setError(valid.msg);
      return;
    }
    setLoading(true);
    try {
      const result = await predict(input);
      onResult(result);
    } catch (err) {
      setError(err.message || 'Gagal melakukan prediksi.');
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-4 shadow-lg w-100 max-w-600 p-4 row g-3 border border-primary"
    >
      <div className="col-md-6">
        <label className="form-label fw-semibold text-primary">Usia (tahun)</label>
        <input
          type="number"
          name="usia"
          value={input.usia}
          onChange={handleChange}
          className="form-control"
          min={1}
          required
          placeholder="Contoh: 45"
        />
      </div>
      <div className="col-md-6">
        <label className="form-label fw-semibold text-primary">Tekanan Darah (mmHg)</label>
        <input
          type="number"
          name="tekanan_darah"
          value={input.tekanan_darah}
          onChange={handleChange}
          className="form-control"
          min={1}
          required
          placeholder="Contoh: 120"
        />
      </div>
      <div className="col-md-6">
        <label className="form-label fw-semibold text-primary">Kolesterol (mg/dL)</label>
        <input
          type="number"
          name="kolesterol"
          value={input.kolesterol}
          onChange={handleChange}
          className="form-control"
          min={1}
          required
          placeholder="Contoh: 200"
        />
      </div>
      <div className="col-md-6">
        <label className="form-label fw-semibold text-primary">Jenis Kelamin</label>
        <select
          name="jenis_kelamin"
          value={input.jenis_kelamin}
          onChange={handleChange}
          className="form-select"
          required
        >
          <option value="">Pilih</option>
          <option value="0">Pria</option>
          <option value="1">Wanita</option>
        </select>
      </div>
      <div className="col-md-6">
        <label className="form-label fw-semibold text-primary">Merokok</label>
        <select
          name="merokok"
          value={input.merokok}
          onChange={handleChange}
          className="form-select"
          required
        >
          <option value="">Pilih</option>
          <option value="1">Ya</option>
          <option value="0">Tidak</option>
        </select>
      </div>
      <div className="col-md-6">
        <label className="form-label fw-semibold text-primary">Diabetes</label>
        <select
          name="diabetes"
          value={input.diabetes}
          onChange={handleChange}
          className="form-select"
          required
        >
          <option value="">Pilih</option>
          <option value="1">Ya</option>
          <option value="0">Tidak</option>
        </select>
      </div>
      <div className="col-md-6">
        <label className="form-label fw-semibold text-primary">Berat Badan (kg)</label>
        <input
          type="number"
          name="berat_badan"
          value={input.berat_badan}
          onChange={handleChange}
          className="form-control"
          min={1}
          required
          placeholder="Contoh: 70"
        />
      </div>
      <div className="col-md-6">
        <label className="form-label fw-semibold text-primary">Tinggi Badan (cm)</label>
        <input
          type="number"
          name="tinggi_badan"
          value={input.tinggi_badan}
          onChange={handleChange}
          className="form-control"
          min={1}
          required
          placeholder="Contoh: 170"
        />
      </div>
      <div className="col-md-6">
        <label className="form-label fw-semibold text-primary">Aktivitas Fisik</label>
        <select
          name="aktivitas_fisik"
          value={input.aktivitas_fisik}
          onChange={handleChange}
          className="form-select"
          required
        >
          <option value="">Pilih</option>
          <option value="1">Cukup</option>
          <option value="0">Kurang</option>
        </select>
      </div>
      <div className="col-md-6">
        <label className="form-label fw-semibold text-primary">Riwayat Keluarga</label>
        <select
          name="riwayat_keluarga"
          value={input.riwayat_keluarga}
          onChange={handleChange}
          className="form-select"
          required
        >
          <option value="">Pilih</option>
          <option value="1">Ada</option>
          <option value="0">Tidak Ada</option>
        </select>
      </div>
      <div className="col-md-6">
        <label className="form-label fw-semibold text-primary">Diet Tidak Sehat</label>
        <select
          name="diet"
          value={input.diet}
          onChange={handleChange}
          className="form-select"
          required
        >
          <option value="">Pilih</option>
          <option value="1">Ya</option>
          <option value="0">Tidak</option>
        </select>
      </div>
      <div className="col-12 d-flex flex-column align-items-center mt-2">
        {error && <div className="text-danger mb-2">{error}</div>}
        <button
          type="submit"
          className="btn btn-primary btn-lg px-5 fw-bold"
          disabled={loading}
        >
          {loading ? 'Memproses...' : 'Prediksi'}
        </button>
      </div>
    </form>
  );
}

export default PredictionForm;
