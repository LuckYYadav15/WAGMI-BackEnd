const db = require("../models");
const Permission = db.permission;

// View All Permissions
exports.index = (req, res) => {
    Permission.findAll({})
        .then(permissions => {
            res.send({
                message: "List of all permissions",
                data: permissions,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

// View Individual Permission
exports.findByPk = (req, res) => {
    Permission.findByPk(req.params.permissionId)
        .then(permission => {
            res.send({
                message: 'Permission Retrieved Successfully',
                data: permission,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};
