const connection = require('../config/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


async function registerUser(name, email, password, phone) {
    try {
        // cek apakah email ini sudah tercaftar / belum
        const [existingUser] = await connection.query('SELECT * FROM  user where email = ?', [email]);
        if (existingUser.length > 0) throw new Error('email already exists')
        //  kita hash password agar tidak dapat di baca artinya pastikan yang kita tulis passwordnya hapal 
        const hashPassword = await bcrypt.hash(password, 16)

        // kalau tidak ada maka kita boleh buat email tersebut 
        const [newUser] = await connection.query('INSERT INTO user (name,email,password,phone) VALUES (?,?,?,?)', [name, email, hashPassword, phone])
        const [createdUser] = await connection.query('SELECT * FROM user WHERE id = ?', [newUser.insertId]);

        return {
            success: true,
            message: 'berhasil membuat akun',
            data: createdUser[0]
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

        return { success: true, message: 'User data retrieved successfully', data: decoded };
    } catch (error) {
        console.error(error);
        return { success: false, message: error.message };
    }
}

// logout

async function logoutUser(token) {
    try {
        const decoded = jwt.verify(token, 'bazmaSecretKey');
        jwt.sign({ id: decoded.id }, 'bazmaSecretKey', {
            expiresIn: '7d'
        });

        return { success: true, message: 'Logout successful' };

    }
    catch (error) {
        throw new Error(error);
    }
}

module.exports = { registerUser, loginUser, getMe, logoutUser }