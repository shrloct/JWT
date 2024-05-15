const jwt = require('jsonwebtoken')

console.log(jwt.sign({
    id: 9,
    email: 'sahrulR@gmail.com',
    password: '$2b$16$5PQqexfvsVasKUAAy8i4FOg99htNANKwP27OZ7J.O31Nk3GB9TJO.',
    iat: 1715747500
}, 'bazmaSecretKey'))