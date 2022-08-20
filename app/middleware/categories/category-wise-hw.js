const db = require("../../models");
const User = db.user;

viewAllCategoryWiseHW = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            var success = false;
            for (let i = 0; i < roles.length; i++) {
                roles[i].getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "View All Category Wise HW") {
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
                        if (permissions[j].name === "View All Category Wise HW") {
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

createCategoryWiseHW = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            var success = false;
            for (let i = 0; i < roles.length; i++) {
                roles[i].getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "Create Category Wise HW") {
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
                        if (permissions[j].name === "Create Category Wise HW") {
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

updateCategoryWiseHW = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            var success = false;
            for (let i = 0; i < roles.length; i++) {
                roles[i].getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "Update Category Wise HW") {
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
                        if (permissions[j].name === "Update Category Wise HW") {
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

deleteCategoryWiseHW = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            var success = false;
            for (let i = 0; i < roles.length; i++) {
                roles[i].getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "Delete Category Wise HW") {
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
                        if (permissions[j].name === "Delete Category Wise HW") {
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

viewIndividualCategoryWiseHW = (req, res, next) => {
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
                        if (permissions[j].name === "View Individual Category Wise HW") {
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
    viewAllCategoryWiseHW: viewAllCategoryWiseHW,
    createCategoryWiseHW: createCategoryWiseHW,
    updateCategoryWiseHW: updateCategoryWiseHW,
    deleteCategoryWiseHW: deleteCategoryWiseHW,
    viewIndividualCategoryWiseHW: viewIndividualCategoryWiseHW,
};

module.exports = crimeStatisticsCDL;