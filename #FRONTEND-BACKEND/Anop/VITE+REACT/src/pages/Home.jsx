import React, { useState } from 'react';
import PredictionForm from '../components/PredictionForm';
import PredictionResult from '../components/PredictionResult';
import { fetchSupabaseData } from '../services/api';

function Home() {
  const [result, setResult] = useState(null);

  React.useEffect(() => {
    fetchSupabaseData().then(console.log).catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Prediksi Penyakit Kardiovaskular</h1>
      <PredictionForm onResult={setResult} />
      {result && <PredictionResult result={result} />}
    </div>
  );
}

export default Home;
