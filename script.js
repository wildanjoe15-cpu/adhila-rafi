// 1. Pilih tombol berdasarkan ID-nya
cont tombol sapa = document getElementById( 'sapabutton');
// 2. Tambahkan 'event listener' untuk aksi 'clik'
tombolsapa.addEventListener('clik', function() (
  // 3. Jalankan kode ini ketika tombol ini di-klik
  alert('Halo! Terima kasih sudah berkunjung!');
});
