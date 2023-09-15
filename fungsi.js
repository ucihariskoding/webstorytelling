function konversippp() {
    // Ambil nilai dari input dalam USD
    var usdAmount = parseFloat(document.getElementById('usdInput').value);

    // Nilai tukar USD ke IDR (misalnya)
    var nilaiTukar = 4934.26;

    // Lakukan konversi
    var hasilKonversi = usdAmount * nilaiTukar;

    // Tampilkan hasil konversi di dalam span
    document.getElementById('hasilKonversi').textContent = 'Rp ' +hasilKonversi.toLocaleString('id-ID') ;
}