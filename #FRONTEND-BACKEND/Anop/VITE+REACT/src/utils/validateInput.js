export function validateInput(input) {
  if (!input.usia || input.usia < 1) return { ok: false, msg: 'Usia wajib diisi dan valid.' };
  if (!input.tekanan_darah || input.tekanan_darah < 1) return { ok: false, msg: 'Tekanan darah wajib diisi dan valid.' };
  // Tambah validasi lain sesuai kebutuhan
  return { ok: true };
}
