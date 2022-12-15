const { request, response } = require('express')
const { body } = require('express-validator')

module.exports= [
    body('mailAdress', 'Please enter a valid mailAdress').isEmail(),
    body('password', 'password should be at least 6 caracters').isLength({ min: 6 })
]

