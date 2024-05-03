const jwt = require('jsonwebtoken');
const secretkey = 'Berlibur';

function createToken(id, nama, umur, alamat, tempatBerlibur, hariOtw) {
    const data = { id, nama, umur, alamat, tempatBerlibur, hariOtw };
    return jwt.sign(data, secretkey);
}

const arrPeserta = [
    {
        id: 1,
        nama: 'Nurul Huda',
        umur: 18,
        alamat: 'Jl. Raya Pondok Gede No.123',
        tempatBerlibur: [
            'Makassar',
            'Bali',
            'Pontianak',
            'Jayapura'],
        hariOtw: 'Jumat'
    },
    {
        id: 2,
        nama: 'Ahmad Fauzi',
        umur: 17,
        alamat: 'Jl. Kebonkencang No.56',
        tempatBerlibur: [
            'Surabaya',
            'Medan',
            'Palembang',
            'Yogyakarta'
        ],
        hariOtw: 'Sabtu'
    },
    {
        id: 3,
        nama: 'Sri Wahyuni',
        umur: 19,
        alamat: 'Jl. Danau Sunter No.21',
        tempatBerlibur: [
            'Banyuwangi',
            'Puncak',
            'Malang',
            'Bogor'
        ],
        hariOtw: 'Senin'
    },
    {
        id: 4,
        nama: 'Agung Nugroho',
        umur: 16,
        alamat: 'Jl. Pangeran Tirtayasa No.34',
        tempatBerlibur: [
            'Lombok',
            'Bima',
            'Bali',
            'Kalimantan'
        ],
        hariOtw: 'Rabu'
    },
    {
        id: 5,
        nama: 'Dian Nirmala',
        umur: 18,
        alamat: 'Jl. Cut Meutia No.87',
        tempatBerlibur: [
            'Aceh',
            'Medan',
            'Riau',
            'Lampung'
        ],
        hariOtw: 'Kamis'
    }
]

const arrToken = [];
// Membuat perulangan arrSiswa
arrPeserta.forEach(peserta => {
    const token = createToken(peserta.id, peserta.nama, peserta.umur, peserta.alamat, peserta.tempatBerlibur, peserta.hariOtw);
    arrToken.push(token);
})

// Lakukan perulangan arrToken
arrToken.forEach((token, index) => {
    // console.log(`Peserta dengan id ${index + 1} menggunakan token: ${token}`, '\n');
})

// verify arrToken
function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, secretkey);
        return decoded;
    } catch (error) {
        return null;
    }
}

const tokenToVerify = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwibmFtYSI6IkRpYW4gTmlybWFsYSIsInVtdXIiOjE4LCJhbGFtYXQiOiJKbC4gQ3V0IE1ldXRpYSBOby44NyIsInRlbXBhdEJlcmxpYnVyIjpbIkFjZWgiLCJNZWRhbiIsIlJpYXUiLCJMYW1wdW5nIl0sImhhcmlPdHciOiJLYW1pcyIsImlhdCI6MTcxNDcyMTU1OX0.AlQmyFqv66wgTvOLHUG2DlpwbauyC_xTK4UPKMjkUH0";
const result = verifyToken(tokenToVerify);
console.log(result);
