const { regiterUser } = require('../Models/AuthModel');
const { body, validationResult } = require('express-validator');

async function register(req, res) {
    const validation = [
        body('name').notEmpty().withMessage("Name harus diisi"),
        body('email').notEmpty().isEmail().withMessage("Email harus diisi"),
        body('password').notEmpty().isPassword().withMessage("Password harus diisi"),
        body('phone').notEmpty().isPhone().withMessage("Phone harus diisi"),
    ]
}