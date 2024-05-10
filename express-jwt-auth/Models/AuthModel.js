const connection = require('../config/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


async function registerUser(name, email, password, phone) {
    try {
        // cek apakah email ini sudah tercaftar / belum
        const [existingUser] = await connection.query('SELECT * FROM  user where email = ?', [email])
        if (existingUser.length > 0)
            throw new Error('email already exists')
        //  kita hash password agar tidak dapat di baca artinya pastikan yang kita tulis passwordnya hapal 
        const hashPassword = await bcrypt.hash(password, 16)

        // kalau tidak ada maka kita boleh buat email tersebut 
        const [newUser] = await connection.query('INSERT INTO user (name,email,password,phone) VALUES (?,?,?,?)', [name, email, hashPassword, phone])

        return {
            success: true,
            message: 'berhasil membuat akun'
        }
    }
    catch (error) {
        throw new Error(error)

    }
}

// login
async function loginUser(email, password) {
    try {
        const [user] = await connection.query('SELECT * FROM user WHERE email = ?', [email]);
        if (user.length === 0) {
            throw new Error('User not found');
        }
        const isPasswordValid = await bcrypt.compare(password, user[0].password);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }
        // generate token
        const createToken = jwt.sign({ email: user[0].email, password: user[0].password }, 'bazmaSecretKey');
        return { success: true, message: 'Login berhasil', createToken };
    } catch (error) {
        console.error(error);
        return {
            success: false,
            message: error.message
        };
    }
}

// getMe
async function getMe(token) {
    try {
        const decoded = jwt.verify(token.replace('Bearer ', ''), 'bazmaSecretKey');
        const userData = {
            id: decoded.id,
            username: decoded.username,
            email: decoded.email,
            password: decoded.password
        }
        return { success: true, message: 'User data retrieved successfully', data: userData };
    } catch (error) {
        console.error(error);
        return { success: false, message: error.message };
    }
}

module.exports = { registerUser, loginUser, getMe }