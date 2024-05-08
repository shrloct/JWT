const connection = require('../config/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register
async function registerUser(name, email, password, phone) {
    try {
        // Cek apakah email ini sudah terdaftar / belum?
        const [existingEmailUser] = await connection.query('SELECT * FROM user WHERE email = ?', [email]);
        if (existingEmailUser.length > 0)
            throw new error('Email telah terdaftar.');

        // Hash password agar tidak dapat dibaca artinya pastikan yang kita tulis passwordnya hapal
        // jamal = 0921chfjkhlsdilh23094
        const hashedPassword = await bcrypt.hash(password, 16);

        // Kalau tidak ada maka kita boleh membuat email tersebut
        const [newUser] = await connection.query(
            'INSERT INTO user (name, email, password, phone) values (?, ?,  ?,?)', [name, email, password, phone]
        );

        return {
            success: true,
            message: 'Berhasil daftar! Silahkan login untuk melanjutkan.',
            data: newUser
        }
    }
    catch (error) {
        throw new Error(error);
    }
}

// Login


module.exports = { registerUser }