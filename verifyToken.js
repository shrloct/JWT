const jwt = require('jsonwebtoken')
const secretkey = 'smktibazma1992'
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMDMwNiwidXNlcm5hbWUiOiJzaHJsb2N0XyIsImtlbGFzIjoiWEkiLCJpYXQiOjE3MTQ2MzMwODl9.fQl9EO_fbY12Nqe__CKVep2P2ytk6g0GLOdq2iIG8Uc"
jwt.verify(token, secretkey, (err, decoded) => {
    if (err) console.error('Token tidak terdaftar!');
    else console.log('Token berhasil'); console.log(decoded);

})