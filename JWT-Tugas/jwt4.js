const jwt = require("jsonwebtoken");
const secretkey = "tokenLebaran";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWt0dVNob2xhdCI6eyJzdWJ1aCI6IjA0LjMwIiwiZHp1aHVyIjoiMTIuMDUiLCJhc2hhciI6IjE1LjI5IiwibWFnaHJpYiI6IjE4LjEyIiwiaXN5YSI6IjE5LjE1In0sIndha3R1TWFrYW4iOnsicGFnaSI6IjA2LjAwIiwic2lhbmciOiIxMy4wMCIsIm1hbGFtIjoiMjAuMDAifSwid2FrdHVCZXJtYWluIjoiTWFsYW0iLCJpYXQiOjE3MTQ2MzkxMTUsImV4cCI6MTcxNDcyNTUxNX0._7PNxXcpF0mEwMrNXNN4nSNvDMKALcZ2R2yJ7CtnfrQ";
jwt.verify(token, secretkey, (err, decoded) => {
    if (err) console.err("Token tidak terdaftar!");
    else console.log("Token berhasil");
    delete decoded.iat
    console.log(decoded);
})