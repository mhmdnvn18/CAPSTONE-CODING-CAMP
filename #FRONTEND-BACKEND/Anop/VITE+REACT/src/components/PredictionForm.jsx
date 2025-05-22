import React, { useState } from 'react';
import { validateInput } from '../utils/validateInput';
import { predict } from '../services/model';

const initialState = { usia: '', tekanan_darah: '' };

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
      setError('Gagal melakukan prediksi.');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-full max-w-md">
      <div className="mb-4">
        <label className="block mb-1">Usia</label>
        <input
          type="number"
          name="usia"
          value={input.usia}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Tekanan Darah</label>
        <input
          type="number"
          name="tekanan_darah"
          value={input.tekanan_darah}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
      </div>
      {/* Tambah field lain sesuai model */}
      {error && <div className="text-red-600 mb-2">{error}</div>}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? 'Memproses...' : 'Prediksi'}
      </button>
    </form>
  );
}

export default PredictionForm;
