export function validateInput(input) {
  if (!input.usia || input.usia < 1) return { ok: false, msg: 'Usia wajib diisi dan valid.' };
  if (!input.tekanan_darah || input.tekanan_darah < 1) return { ok: false, msg: 'Tekanan darah wajib diisi dan valid.' };
  if (!input.kolesterol || input.kolesterol < 1) return { ok: false, msg: 'Kolesterol wajib diisi dan valid.' };
  if (input.jenis_kelamin !== '0' && input.jenis_kelamin !== '1') return { ok: false, msg: 'Jenis kelamin wajib dipilih.' };
  if (input.merokok !== '0' && input.merokok !== '1') return { ok: false, msg: 'Status merokok wajib dipilih.' };
  if (input.diabetes !== '0' && input.diabetes !== '1') return { ok: false, msg: 'Status diabetes wajib dipilih.' };
  if (!input.berat_badan || input.berat_badan < 1) return { ok: false, msg: 'Berat badan wajib diisi dan valid.' };
  if (!input.tinggi_badan || input.tinggi_badan < 1) return { ok: false, msg: 'Tinggi badan wajib diisi dan valid.' };
  if (input.aktivitas_fisik !== '0' && input.aktivitas_fisik !== '1') return { ok: false, msg: 'Aktivitas fisik wajib dipilih.' };
  if (input.riwayat_keluarga !== '0' && input.riwayat_keluarga !== '1') return { ok: false, msg: 'Riwayat keluarga wajib dipilih.' };
  if (input.diet !== '0' && input.diet !== '1') return { ok: false, msg: 'Diet wajib dipilih.' };
  return { ok: true };
}
