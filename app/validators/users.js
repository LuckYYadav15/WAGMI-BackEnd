const db = require("../models");
const User = db.user;
const { check, validationResult } = require('express-validator/check');
exports.createUser = [
    /*check('username').custom(value => {
        return User.findUserByUsername(value).then(user => {
            if (user) {
                return Promise.reject('Username already in use');
            }
        });
    }),*/
    /*check('email').custom(value => {
        return User.findUserByEmail(value).then(user => {
            if (user) {
                return Promise.reject('E-mail already in use');
            }
        });
    }),*/
    check('email')
        .isEmail()
        .withMessage('Email Format is Incorrect'),
    check('username')
        .isLength({ min: 3 })
        .withMessage('Username needs to have Minimum 3 characters')
        .isLength({ max: 12 })
        .withMessage('Username needs to have Maximum 12 Characters')
        .isAlphanumeric()
        .withMessage('Username can only have AlphaNumeric Characters'),
    check('firstname')
        .isLength({ min: 2 })
        .withMessage('First Name needs to have Minimum 2 Characters')
        .isLength({ max: 25 })
        .withMessage('First Name can have Maximum 25 Characters')
        .isAlpha()
        .withMessage('First name can contain only Alphabets'),
    check('lastname')
        .isLength({ min: 2 })
        .withMessage('Last Name needs to have Minimum 2 Characters')
        .isLength({ max: 25 })
        .withMessage('Last Name can have Maximum 25 Characters')
        .isAlpha()
        .withMessage('Last name can contain only Alphabets'),
    check('phone')
        .isLength({ min: 10 })
        .withMessage('Phone Number needs to have 10 Characters')
        .isLength({ max: 10 })
        .withMessage('Phone Number needs to have 10 Characters')
        .isNumeric()
        .withMessage('Phone Number can contain only Numbers'),
    /*check('phone').custom(value => {
        return User.findUserByPhone(value).then(user => {
            if (user) {
                return Promise.reject('Phone Number already in use');
            }
        });
    }),*/
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });
        next();
    }
];

exports.editUser = [
    check('email')
        .isEmail()
        .withMessage('Email Format is Incorrect'),
    check('username')
        .isLength({ min: 3 })
        .withMessage('Username needs to have Minimum 3 characters')
        .isLength({ max: 12 })
        .withMessage('Username needs to have Maximum 12 Characters')
        .isAlphanumeric()
        .withMessage('Username can only have AlphaNumeric Characters'),
    check('firstname')
        .isLength({ min: 2 })
        .withMessage('First Name needs to have Minimum 2 Characters')
        .isLength({ max: 25 })
        .withMessage('First Name can have Maximum 25 Characters')
        .isAlpha()
        .withMessage('First name can contain only Alphabets'),
    check('lastname')
        .isLength({ min: 2 })
        .withMessage('Last Name needs to have Minimum 2 Characters')
        .isLength({ max: 25 })
        .withMessage('Last Name can have Maximum 25 Characters')
        .isAlpha()
        .withMessage('Last name can contain only Alphabets'),
    check('phone')
        .isLength({ min: 10 })
        .withMessage('Phone Number needs to have 10 Characters')
        .isLength({ max: 10 })
        .withMessage('Phone Number needs to have 10 Characters')
        .isNumeric()
        .withMessage('Phone Number can contain only Numbers'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });
        next();
    }
];