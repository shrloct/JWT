const jwt = require('jsonwebtoken');
const secretkey = "smktibazma1992";

function createToken(id, nama, kelas, alamat, hobi) {
    const data = { id, nama, kelas, alamat, hobi };
    return jwt.sign(data, secretkey);
}

const arrSiswa = [
    {
        id: 1,
        nama: 'Ahmad Fauzi',
        kelas: 'XII RPL 3',
        alamat: 'Jl. Kebonkencang No.56',
        hobi: ['Membaca', 'Menulis']
    },
    {
        id: 2,
        nama: 'Rizki Afif',
        kelas: 'XI TKJ 4',
        alamat: 'Jl. Siliwangi No.89',
        hobi: ['Ngoding', 'Main Game']
    },
    {
        id: 3,
        nama: 'Fitriana',
        kelas: 'X RPL 1',
        alamat: 'Jl. Cikini No.7',
        hobi: ['Bermain musik', 'Tari']
    }
];

const arrToken = [];
// Membuat perulangan arrSiswa
arrSiswa.forEach(siswa => {
    const token = createToken(siswa.id, siswa.nama, siswa.kelas, siswa.alamat, siswa.hobi);
    arrToken.push(token);
})

// Lakukan perulangan arrToken
arrToken.forEach((token, index) => {
    console.log(`Siswa dengan id ${index + 1} menggunakan token: ${token}`)
})