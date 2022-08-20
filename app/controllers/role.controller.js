const db = require("../models");
const Role = db.role;

// View All Roles
exports.index = (req, res) => {
    Role.findAll({})
        .then(roles => {
            res.send({
                message: "List of all roles",
                data: roles,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}


// View Individual Role
exports.findByPk = (req, res) => {
    Role.findByPk(req.params.roleId)
        .then(role => {
            res.status(200).send({
                message: 'Role was retrieved successfully',
                data: role,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });

};
