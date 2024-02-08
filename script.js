// Callback
// Syncronus Callback

/*
        // function halo(nama) {
        //         alert(`Halo. ${nama}`)
        //     }

            function tampilkanPesan(callback) {
                const nama = prompt('Masukkan Nama : ');
                // console.log(callback);
                callback(nama);
            }

            // tampilkanPesan(halo)
            tampilkanPesan(nama => alert(`Halo, ${nama}`))
            */

// Syncronus (Problem)

/*
            const Mhs = [
            {
                nama: "Arya",
                nim: 1827362387,
                jurusan: 'Teknik Sipil',
                email: 'arya@gmail.com',
                idDosenWali: 1
            },
            {
                nama: "Agus",
                nim: 1827362387,
                jurusan: 'Teknik Informatika',
                email: 'ahus@gmail.com',
                idDosenWali: 2
            },
            {
                nama: "randa",
                nim: 3433362387,
                jurusan: 'Teknik Sipil',
                email: 'arya@gmail.com',
                idDosenWali: 2
            }
            ];
            console.log('Mulai');
            Mhs.map(val =>  {
                // Contoh penambahan masalah
                for(let i = 0; i < 10000000; i++){
                    let date = new Date();
                }
                console.log(val.nama)
            });
            console.log('Selesai');
            */

// Asyncronous Callback (Solution)

// Menggunakan Ajax murni javascript
// Datanya data JSON yang di ambil dari file mahasiswa.json

// VERSI TUTORIAL

// success dan error merupakan callback functions
// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };

//   xhr.open("GET", url);
//   xhr.send();
// }

// Jika callback function success dan error dibuat pisah

// function success(response) {
//   let json = JSON.parse(response);
//   console.log(json);
// }
// function error(error) {
//   console.log("Error: Gagal memuat data");
// }
// getDataMahasiswa("mahasiswa.json", success, error); // List disini

//
// Jika callback function dibuat dalam satu function anonymus

// console.log("mulai");
// getDataMahasiswa(
//   "mahasiswa.json",
//   (result) => {
//     let data = JSON.parse(result);
//     console.log(data);
//   },
//   (error) => {
//     console.log("Error: Gagal memuat data");
//   }
// );
// console.log("selesai");

// VERSI SENDIRI

function getDataMahasiswa(url, success, error) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      success(JSON.parse(xhr.response));
    } else if (xhr.readyState === 4 && xhr.status === 404) {
      error(`Gagal memuat data pada halaman URL ${url}`);
    }
  };

  xhr.open("GET", url);
  xhr.send();
}

// getDataMahasiswa(
//   "mahasiswa.json",
//   function success(result) {
//     console.log(result);
//   },
//   function error(error) {
//     console.log(error);
//   }
// );

// Cara cepat kirimkan anonymus func sebagai callback func success dan error

getDataMahasiswa(
  "mahasiswa.json",
  (result) => {
    console.log(result);
  },
  (error) => {
    console.log(error);
  }
);
