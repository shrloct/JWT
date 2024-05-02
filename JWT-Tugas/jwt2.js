const jwt = require("jsonwebtoken");
const secretkey = "Liburan";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1hTGVuZ2thcCI6IlNhaHJ1bCBSb21hZGhvbiIsImFsYW1hdCI6Ik1hbGFzYXJpIEJvZ2JhciIsIm5vbW9yS29udGFrIjoiMDgxMjM0NTY3ODkiLCJpYXQiOjE3MTQ2MzgyMDYsImV4cCI6MTcxNDcyNDYwNn0.dmEH6-NZdcSPpPauEJcBn_9ZwvssgsuZxrUScbn-fuk";

jwt.verify(token, secretkey, (err, decoded) => {
    if (err) console.err("Token tidak terdaftar!");
    else console.log("Token berhasil");
    delete decoded.iat
    console.log(decoded);
})

