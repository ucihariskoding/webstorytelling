function konversippp() {
    // Ambil nilai dari input dalam USD
    var usdAmount = parseFloat(document.getElementById('usdInput').value);

    // Nilai tukar USD ke IDR (misalnya)
    const nilaiTukar = 4934.00;
    const nilaiXchange = 15376.00;

    // Lakukan konversi
    var hasilKonversi = usdAmount * nilaiTukar;
    
    // konversi ke rupiah dg nilai tukar
     var hasilXchange = usdAmount * nilaiXchange;
     

      // Ubah hasilKonversi menjadi string dengan pemisah angka nol
     var hasilKonversiString = hasilKonversi.toLocaleString('id-ID', options);

    // hasilXchange dg pemisah
    var hasilXchangeString = hasilXchange.toLocaleString('id-ID', options);

    // Buat objek untuk mengatur opsi bahasa ke bahasa Indonesia
    var options = {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }

    // Tampilkan hasil konversi di dalam span
    document.getElementById('hasilKonversi').textContent = 'Rp ' +hasilKonversiString.toLocaleString('id-ID', options) ;
    document.getElementById('hasilXchange').textContent = 'Rp ' +hasilXchangeString .toLocaleString('id-ID', options);
}