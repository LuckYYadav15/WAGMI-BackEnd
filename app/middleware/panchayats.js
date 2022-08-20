const db = require("../models");
const User = db.user;

viewAllPanchayats = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            var success = false;
            for (let i = 0; i < roles.length; i++) {
                roles[i].getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "View All Panchayats") {
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
                        if (permissions[j].name === "View All Panchayats") {
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

createPanchayat = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            var success = false;
            for (let i = 0; i < roles.length; i++) {
                roles[i].getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "Create Panchayat") {
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
                        if (permissions[j].name === "Create Panchayat") {
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

updatePanchayat = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            var success = false;
            for (let i = 0; i < roles.length; i++) {
                roles[i].getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "Update Panchayat") {
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
                        if (permissions[j].name === "Update Panchayat") {
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

deletePanchayat = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            var success = false;
            for (let i = 0; i < roles.length; i++) {
                roles[i].getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "Delete Panchayat") {
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
                        if (permissions[j].name === "Delete Panchayat") {
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

viewIndividualPanchayat = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            var success = false;
            for (let i = 0; i < roles.length; i++) {
                roles[i].getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "View Individual Panchayat") {
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
                        if (permissions[j].name === "View Individual Panchayat") {
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

const panchayats = {
    viewAllPanchayats: viewAllPanchayats,
    createPanchayat: createPanchayat,
    updatePanchayat: updatePanchayat,
    deletePanchayat: deletePanchayat,
    viewIndividualPanchayat: viewIndividualPanchayat,
};

module.exports = panchayats;