const db = require("../../models");
const User = db.user;

viewAllCategoryWiseFMO = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            var success = false;
            for (let i = 0; i < roles.length; i++) {
                roles[i].getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "View All Category Wise FMO") {
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
                        if (permissions[j].name === "View All Category Wise FMO") {
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

createCategoryWiseFMO = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            var success = false;
            for (let i = 0; i < roles.length; i++) {
                roles[i].getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "Create Category Wise FMO") {
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
                        if (permissions[j].name === "Create Category Wise FMO") {
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

updateCategoryWiseFMO = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            var success = false;
            for (let i = 0; i < roles.length; i++) {
                roles[i].getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "Update Category Wise FMO") {
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
                        if (permissions[j].name === "Update Category Wise FMO") {
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

deleteCategoryWiseFMO = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            var success = false;
            for (let i = 0; i < roles.length; i++) {
                roles[i].getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "Delete Category Wise FMO") {
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
                        if (permissions[j].name === "Delete Category Wise FMO") {
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

viewIndividualCategoryWiseFMO = (req, res, next) => {
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
                        if (permissions[j].name === "View Individual Category Wise FMO") {
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
    viewAllCategoryWiseFMO: viewAllCategoryWiseFMO,
    createCategoryWiseFMO: createCategoryWiseFMO,
    updateCategoryWiseFMO: updateCategoryWiseFMO,
    deleteCategoryWiseFMO: deleteCategoryWiseFMO,
    viewIndividualCategoryWiseFMO: viewIndividualCategoryWiseFMO,
};
 
module.exports = crimeStatisticsCDL;