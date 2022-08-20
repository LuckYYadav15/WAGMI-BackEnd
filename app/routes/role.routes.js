const rolesController = require("../controllers/role.controller");
const {
    authJwt,
    roles
} = require("../middleware");

module.exports = function (app) {

    // Retrieve all Roles
    app.get('/api/roles', [authJwt.verifyToken, roles.viewAllRoles], rolesController.index);

    // Retrieve a Single Role
    app.get('/api/roles/:roleId/show', [authJwt.verifyToken, roles.viewIndividualRole], rolesController.findByPk);

}