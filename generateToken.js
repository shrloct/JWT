const jwt = require('jsonwebtoken');
const secretkey = 'smktibazma1992';
const payload = { userId: 100306, username: 'shrloct_', kelas: 'XI' };

const generateToken = jwt.sign(payload, secretkey);
console.log(generateToken);