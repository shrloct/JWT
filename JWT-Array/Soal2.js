const jwt = require('jsonwebtoken');
const secretkey = 'Berlibur';

function createToken(id, nama, transportasi, tujuanTempat) {
    const data = { id, nama, transportasi, tujuanTempat };
    return jwt.sign(data, secretkey);
}

const arrData = [
    {
        id: 1,
        nama: 'Asep',
        transportasi: 'umum',
        tujuanTempat: [
            'Makassar',
            'Bali',
            'Pontianak',
            'Jayapura'
        ]
    },
    {
        id: 2,
        nama: 'Budi',
        transportasi: 'mobil',
        tujuanTempat: [
            'Jakarta',
            'Bandung',
            'Yogyakarta',
            'Semarang'
        ]
    },
    {
        id: 3,
        nama: 'Citra',
        transportasi: 'pesawat',
        tujuanTempat: [
            'Surabaya',
            'Medan',
            'Palembang',
            'Makassar'
        ]
    },
    {
        id: 4,
        nama: 'Dewi',
        transportasi: 'kereta',
        tujuanTempat: [
            'Malang',
            'Bogor',
            'Bandung',
            'Yogyakarta'
        ]
    },
    {
        id: 5,
        nama: 'Eka',
        transportasi: 'kapal',
        tujuanTempat: [
            'Balikpapan',
            'Manado',
            'Makassar',
            'Kupang'
        ]
    }
];

const arrToken = [];
// Membuat perulangan arrData
arrData.forEach(data => {
    const token = createToken(data.id, data.nama, data.transportasi, data.tujuanTempat);
    arrToken.push(token);
});

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

const tokenToVerify = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwibmFtYSI6IkVrYSIsInRyYW5zcG9ydGFzaSI6ImthcGFsIiwidHVqdWFuVGVtcGF0IjpbIkJhbGlrcGFwYW4iLCJNYW5hZG8iLCJNYWthc3NhciIsIkt1cGFuZyJdLCJpYXQiOjE3MTQ3MjI3NTd9.3iW8vi-sVysj9k5nusWtFnlZ6oq9jwKU3KRaLiMzbDg"
const result = verifyToken(tokenToVerify);
console.log(result);
