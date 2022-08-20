const db = require("../../models");
const User = db.user;

viewAllCategoryWiseEP = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            var success = false;
            for (let i = 0; i < roles.length; i++) {
                roles[i].getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "View All Category Wise EP") {
                            success = true;
                            next();
                            return;
                        }
                    }
                })
            }
            if (success === false) {
                user.getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "View All Category Wise EP") {
                            success = true;
                            next();
                            return;
                        }
                    }
                    if (success === false) {
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

createCategoryWiseEP = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            var success = false;
            for (let i = 0; i < roles.length; i++) {
                roles[i].getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "Create Category Wise EP") {
                            success = true;
                            next();
                            return;
                        }
                    }
                })
            }
            if (success === false) {
                user.getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "Create Category Wise EP") {
                            success = true;
                            next();
                            return;
                        }
                    }
                    if (success === false) {
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

updateCategoryWiseEP = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            var success = false;
            for (let i = 0; i < roles.length; i++) {
                roles[i].getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "Update Category Wise EP") {
                            success = true;
                            next();
                            return;
                        }
                    }
                })
            }
            if (success === false) {
                user.getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "Update Category Wise EP") {
                            success = true;
                            next();
                            return;
                        }
                    }
                    if (success === false) {
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

deleteCategoryWiseEP = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            var success = false;
            for (let i = 0; i < roles.length; i++) {
                roles[i].getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "Delete Category Wise EP") {
                            success = true;
                            next();
                            return;
                        }
                    }
                })
            }
            if (success === false) {
                user.getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "Delete Category Wise EP") {
                            success = true;
                            next();
                            return;
                        }
                    }
                    if (success === false) {
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

viewIndividualCategoryWiseEP = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            var success = false;
            for (let i = 0; i < roles.length; i++) {
                roles[i].getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "View Individual Category Wise HW") {
                            success = true;
                            next();
                            return;
                        }
                    }
                })
            }
            if (success === false) {
                user.getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "View Individual Category Wise EP") {
                            success = true;
                            next();
                            return;
                        }
                    }
                    if (success === false) {
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

const crimeStatisticsCDL = {
    viewAllCategoryWiseEP: viewAllCategoryWiseEP,
    createCategoryWiseEP: createCategoryWiseEP,
    updateCategoryWiseEP: updateCategoryWiseEP,
    deleteCategoryWiseEP: deleteCategoryWiseEP,
    viewIndividualCategoryWiseEP: viewIndividualCategoryWiseEP,
};

module.exports = crimeStatisticsCDL;