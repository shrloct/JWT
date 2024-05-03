const jwt = require('jsonwebtoken');
const secretkey = 'smktibazma1992';

function createToken(id, nama, kelas, alamat, hobi) {
    const data = { id, nama, kelas, alamat, hobi };
    return jwt.sign(data, secretkey);
}

function verify(token) {
    try {
        const decoded = jwt.verify(token, secretkey);
        delete decoded.iat;
        return decoded;
    } catch (error) {
        // console.log(err);
        return null;
    }
}

const siswa = {
    id: 1,
    nama: "Ahmad Fauzi",
    kelas: "XI RPL 3",
    alamat: "Cikarang",
    hobi: "Bermain Game"
}

// Membuat Token siswa
const token = createToken(siswa.id, siswa.nama, siswa.kelas, siswa.alamat, siswa.hobi);
console.log(`Token : ${token}`);

// verify token siswa
const decodedSiswa = verify(token);
console.log('decodedSiswa', decodedSiswa);
