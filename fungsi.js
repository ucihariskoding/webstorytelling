function konversippp() {
    // Ambil nilai dari input dalam USD
    var usdAmount = parseFloat(document.getElementById('usdInput').value);

    // Nilai tukar USD ke IDR (misalnya)
    var nilaiTukar = 4934.26;

    // Lakukan konversi
    var hasilKonversi = usdAmount * nilaiTukar;
     // Ubah hasilKonversi menjadi string dengan pemisah angka nol
     var hasilKonversiString = hasilKonversi.toLocaleString('id-ID', options);

    // Buat objek untuk mengatur opsi bahasa ke bahasa Indonesia
    var options = {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }

    // Tampilkan hasil konversi di dalam span
    document.getElementById('hasilKonversi').textContent = 'Rp ' +hasilKonversiString.toLocaleString('id-ID', options) ;
}