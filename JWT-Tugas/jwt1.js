const jwt = require('jsonwebtoken');

const payload = {
    namaLengkap: "Sahrul Romadhon",
    alamat: "Malasari Bogbar",
    nomorKontak: "08123456789"
};

function membuatTokenDaftar(namaLengkap, alamat, nomorKontak) {
    const secretkey = "Liburan";
    const token = jwt.sign(payload, secretkey, { expiresIn: '24h' });
    delete token.iat;
    return token;
};
console.log(membuatTokenDaftar(payload.namaLengkap, payload.alamat, payload.nomorKontak))