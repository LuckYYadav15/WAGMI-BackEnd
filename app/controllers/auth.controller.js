const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const { body, validationResult } = require('express-validator');
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    body('username').isLength({ min: 5 });
    body('password').isLength({ min: 5 });
    body('email').isEmail();

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).message({ errors: errors.array() });
    }
    User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        password: bcrypt.hashSync(req.body.password, 8),
    })
        .then(user => {
            if (req.body.roles) {
                // select * from Roles where name = 1 or name = 2
                Role.findAll({
                    where: {
                        name: {
                            [Op.or]: req.body.roles
                        }
                    }
                }).then(roles => {
                    user.setRoles(roles).then(() => {
                        res.send({ message: "User was registered successfully!" });
                    });
                });
            }
            else {
                user.setRoles([3]).then(() => {
                    res.send({ message: "User was registered successfully!" });
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

exports.signin = (req, res) => {
    User.findOne({
        where: {
            email : req.body.email
        }
    })
        .then(user => {
            if (!user) {
                return res.status(404).send({ message: "User not found!!" });
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }

            var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400
            });

            var user_permissions = []
            var role_permissions = []

            user.getRoles().then(roles => {
                roles[0].getPermissions()
                    .then(permissions => {
                        role_permissions = permissions.map(function (element) {
                            return element['name']
                        })
                        user.getPermissions().then(permissions => {
                            user_permissions = permissions.map(function (element) {
                                return element['name']
                            })

                            var all_permissions = role_permissions.concat(user_permissions);

                            var final_permissions = all_permissions.filter((item, pos) => all_permissions.indexOf(item) === pos)

                            res.status(200).send({
                                id: user.id,
                                username: user.username,
                                email: user.email,
                                permissions: final_permissions,
                                accessToken: token,
                                user: user,
                                // user.permissions: final_permissions,
                            });
                        })


                    })
            });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

exports.user = (req, res) => {
    User.findByPk(req.userId)
        .then(user => {
            var user_permissions = []
            var role_permissions = []
            var userData = {
                email: '',
                phone: '',
                firstname: '',
                lastname: '',
                emailVerifiedAt: '',
                mobileVerifiedAt: '',
                permissions: [],
            };
            user.getRoles().then(roles => {
                roles[0].getPermissions()
                    .then(permissions => {
                        role_permissions = permissions.map(function (element) {
                            return element['name']
                        })
                        user.getPermissions().then(permissions => {
                            user_permissions = permissions.map(function (element) {
                                return element['name']
                            })

                            var all_permissions = role_permissions.concat(user_permissions);

                            var final_permissions = all_permissions.filter((item, pos) => all_permissions.indexOf(item) === pos)
                            userData.email = user.email;
                            userData.phone = user.phone;
                            userData.firstname = user.firstname;
                            userData.lastname = user.lastname;
                            userData.username = user.username;
                            userData.emailVerifiedAt = user.emailVerifiedAt;
                            userData.mobileVerifiedAt = user.mobileVerifiedAt;
                            userData.permissions = final_permissions;
                            res.status(200).send({
                                user: userData,
                            });
                        })
                    })
            });
        })
}