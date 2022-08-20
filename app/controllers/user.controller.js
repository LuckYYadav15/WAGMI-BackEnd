const db = require("../models");
var bcrypt = require("bcryptjs");
const User = db.user;

// View All Users
exports.index = (req, res) => {
    User.findAll({})
        .then(users => {
            res.status(200).send({
                message: "List of all Users",
                data: users,
            });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
}

// Create User
exports.create = (req, res) => {

    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(function (user) {
            if (user) {
                res.status(200).send({
                    success: false,
                    message: 'Email already exists'
                });
            } else {
                User.findOne({
                    where: {
                        phone: req.body.phone,
                    }
                })
                    .then(function (user) {
                        if (user) {
                            res.status(200).send({
                                success: false,
                                message: 'Phone already exists'
                            });
                        } else {
                            User.findOne({
                                where: {
                                    username: req.body.username,
                                }
                            })
                                .then(function (user) {
                                    if (user) {
                                        res.status(200).send({
                                            success: false,
                                            message: 'Username already exists'
                                        });
                                    } else {
                                        User.create({
                                            firstname: req.body.firstname,
                                            lastname: req.body.lastname,
                                            username: req.body.username,
                                            email: req.body.email,
                                            phone: req.body.phone,
                                            password: bcrypt.hashSync(req.body.password, 8),
                                        })
                                            .then(user => {
                                                // Set User Role
                                                user.setRoles(req.body.roleId);
                                                res.status(200).send({
                                                    success: true,
                                                    message: "User was added successfully!",
                                                    data: user,
                                                });
                                            })
                                            .catch(err => {
                                                res.status(500).send({
                                                    message: err.message
                                                });
                                            });
                                    }
                                });
                        }
                    });
            }
        });
}

// Retrieve Individual User
exports.findByPk = (req, res) => {
    User.findByPk(req.params.userId)
        .then(user => {
            res.status(200).send({
                message: 'User Retrieved Successfully',
                data: user,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });

};

// Update User
exports.update = (req, res) => {
    User.update({
        username: req.body.username,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone: req.body.phone,
    },
        { where: { id: req.params.userId } }
    )
        .then((user) => {
            res.status(200).send({
                message: 'User updated successfully',
                data: user,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

// Delete User
exports.delete = (req, res) => {
    User.destroy({ where: { id: req.params.userId } })
        .then(() => {
            res.status(200).send({
                message: 'User deleted successfully'
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};
