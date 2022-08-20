const db = require("../models");
const User = db.user;

viewAllBlocks = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            var success = false;
            for (let i = 0; i < roles.length; i++) {
                roles[i].getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "View All Blocks") {
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
                        if (permissions[j].name === "View All Blocks") {
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

createBlock = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            var success = false;
            for (let i = 0; i < roles.length; i++) {
                roles[i].getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "Create Block") {
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
                        if (permissions[j].name === "Create Block") {
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

updateBlock = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            var success = false;
            for (let i = 0; i < roles.length; i++) {
                roles[i].getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "Update Block") {
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
                        if (permissions[j].name === "Update Block") {
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

deleteBlock = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            var success = false;
            for (let i = 0; i < roles.length; i++) {
                roles[i].getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "Delete Block") {
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
                        if (permissions[j].name === "Delete Block") {
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

viewIndividualBlock = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            var success = false;
            for (let i = 0; i < roles.length; i++) {
                roles[i].getPermissions().then(permissions => {
                    for (let j = 0; j < permissions.length; j++) {
                        if (permissions[j].name === "View Individual Block") {
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
                        if (permissions[j].name === "View Individual Block") {
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

const blocks = {
    viewAllBlocks: viewAllBlocks,
    createBlock: createBlock,
    updateBlock: updateBlock,
    deleteBlock: deleteBlock,
    viewIndividualBlock: viewIndividualBlock,
};

module.exports = blocks;