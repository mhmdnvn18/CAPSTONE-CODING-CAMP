import React from 'react';

function PredictionResult({ result }) {
  // Interpretasi hasil (misal: threshold 0.5)
  let status = '';
  let color = '';
  let icon = '';
  if (typeof result === 'number') {
    if (result >= 0.5) {
      status = 'Risiko Tinggi';
      color = 'border-danger bg-danger-subtle text-danger';
      icon = (
        <i className="fa-solid fa-triangle-exclamation text-danger fs-1 mb-2"></i>
      );
    } else {
      status = 'Risiko Rendah';
      color = 'border-success bg-success-subtle text-success';
      icon = (
        <i className="fa-solid fa-circle-check text-success fs-1 mb-2"></i>
      );
    }
  }

  return (
    <div className={`mt-4 rounded-4 shadow-lg w-100 max-w-600 mx-auto p-4 border ${color} d-flex flex-column align-items-center`}>
      <h2 className="fw-bold mb-3 fs-4 text-primary d-flex align-items-center gap-2">
        <i className="fa-solid fa-chart-line text-primary"></i>
        Hasil Prediksi
      </h2>
      <div className="d-flex flex-column align-items-center">
        {typeof result === 'number' ? (
          <>
            {icon}
            <div className="fs-3 fw-bold px-4 py-2 rounded mb-2">{status}</div>
            <div className="text-secondary mb-2">
              Skor Risiko: <span className="font-monospace">{result.toFixed(3)}</span>
            </div>
            <div className="mt-2 small text-muted text-center">
              * Hasil prediksi ini bersifat estimasi, konsultasikan ke dokter untuk diagnosis pasti.
            </div>
          </>
        ) : (
          <div>{typeof result === 'object' ? JSON.stringify(result) : result}</div>
        )}
      </div>
    </div>
  );
}

export default PredictionResult;
