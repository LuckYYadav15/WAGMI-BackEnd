const db = require("../models");
const User = db.user;

viewAllUsers = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            var success = false;
            for (let i = 0; i < roles.length; i++) {
                roles[i].getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "View All Users") {
                            success = true;
                            next();
                            return;
                        }
                    }
                })
            }
            if(success === false) {
                user.getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "View All Users") {
                            success = true;
                            next();
                            return;
                        }
                    }
                    if(success === false) {
                        res.status(403).send({
                            message: "You are not allowed access to this data"
                        });
                        return;
                    }
                })
            }
        });
    });
};

createUser = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            var success = false;
            for (let i = 0; i < roles.length; i++) {
                roles[i].getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "Create User") {
                            success = true;
                            next();
                            return;
                        }
                    }
                })
            }
            if(success === false) {
                user.getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "Create User") {
                            success = true;
                            next();
                            return;
                        }
                    }
                    if(success === false) {
                        res.status(403).send({
                            message: "You are not allowed access to this data"
                        });
                        return;
                    }
                })
            }
        });
    });
};

updateUser = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            var success = false;
            for (let i = 0; i < roles.length; i++) {
                roles[i].getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "Update User") {
                            success = true;
                            next();
                            return;
                        }
                    }
                })
            }
            if(success === false) {
                user.getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "Update User") {
                            success = true;
                            next();
                            return;
                        }
                    }
                    if(success === false) {
                        res.status(403).send({
                            message: "You are not allowed access to this data"
                        });
                        return;
                    }
                })
            }
        });
    });
};

deleteUser = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            var success = false;
            for (let i = 0; i < roles.length; i++) {
                roles[i].getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "Delete User") {
                            success = true;
                            next();
                            return;
                        }
                    }
                })
            }
            if(success === false) {
                user.getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "Delete User") {
                            success = true;
                            next();
                            return;
                        }
                    }
                    if(success === false) {
                        res.status(403).send({
                            message: "You are not allowed access to this data"
                        });
                        return;
                    }
                })
            }
        });
    });
};

viewIndividualUser = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            var success = false;
            for (let i = 0; i < roles.length; i++) {
                roles[i].getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "View Individual User") {
                            success = true;
                            next();
                            return;
                        }
                    }
                })
            }
            if(success === false) {
                user.getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "View Individual User") {
                            success = true;
                            next();
                            return;
                        }
                    }
                    if(success === false) {
                        res.status(403).send({
                            message: "You are not allowed access to this data"
                        });
                        return;
                    }
                })
            }
        });
    });
};

const users = {
    viewAllUsers: viewAllUsers,
    createUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser,
    viewIndividualUser: viewIndividualUser,
};

module.exports = users;