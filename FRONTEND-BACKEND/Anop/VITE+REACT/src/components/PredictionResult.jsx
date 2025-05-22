import React from 'react';

function PredictionResult({ result }) {
  return (
    <div className="mt-6 bg-green-100 p-4 rounded shadow w-full max-w-md">
      <h2 className="font-bold mb-2">Hasil Prediksi</h2>
      <div>
        {typeof result === 'object' ? JSON.stringify(result) : result}
      </div>
    </div>
  );
}

export default PredictionResult;
