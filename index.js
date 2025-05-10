console.log("Aplikasi Absen Sederhana untuk Tea Protocol");

class Absen {
  constructor() {
    this.data = [];
  }

  tambah(nama) {
    this.data.push({
      nama,
      tanggal: new Date().toISOString()
    });
    return "Berhasil absen!";
  }
}

const sistemAbsen = new Absen();
console.log(sistemAbsen.tambah("Contoh Nama"));