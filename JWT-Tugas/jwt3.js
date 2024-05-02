const jwt = require('jsonwebtoken');

const payload = {
    waktuSholat: {
        subuh: '04.30',
        dzuhur: '12.05',
        ashar: '15.29',
        maghrib: '18.12',
        isya: '19.15'
    },
    waktuMakan: {
        pagi: "06.00",
        siang: "13.00",
        malam: "20.00"
    },
    waktuBermain: "Malam"
};

function membuatTokenLebaran(sholat, waktuMakan, waktuBermain) {
    const secretkey = "tokenLebaran";
    const token = jwt.sign(payload, secretkey, { expiresIn: '24h' });
    delete token.iat;
    return token;
};
console.log(membuatTokenLebaran(payload.waktuSholat, payload.waktuMakan, payload.waktuBermain))