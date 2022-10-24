const { check } = require('express-validator');

module.exports = [
    check('email').exists()
        .notEmpty()
        .withMessage('El email es un campo requerido.')
        .custom((value, { req }) => value.includes("@") && value.includes(".com"))
        .withMessage('El email ingresado no es valido'),
    
    check('password')
        .exists()
        .notEmpty()
        .withMessage('Password es un campo requerido requerido.'),
];