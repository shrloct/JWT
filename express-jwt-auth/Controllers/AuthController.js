const { registerUser } = require('../Models/AuthModel');
const { body, validationResult } = require('express-validator');

async function register(req, res) {
    const validation = [
        body('name').notEmpty().withMessage("Name harus diisi"),
        body('email').notEmpty().isEmail().withMessage("Email harus diisi"),
        body('password').notEmpty().withMessage("Password harus diisi"),
        body('phone').notEmpty().withMessage("Phone harus diisi"),
    ];

    await Promise.all(validation.map((v) => { v.run(req) }));
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errMsg = errors.array().map(e => ({ [e.path]: e.msg }));
        return res.status(422).json({
            status: 'error',
            message: 'Data yang anda masukan tidak valid',
            data: errMsg
        });
    }

    const { name, email, password, phone } = req.body;
    try {
        const result = await registerUser(name, email, password, phone);
        if (result.success) {
            res.status(201).json({
                success: true,
                message: result.message,
            })
        }
    }
    catch (err) {
        console.error(err);
    }
}

module.exports = { register }