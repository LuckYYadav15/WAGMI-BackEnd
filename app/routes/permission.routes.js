const permissionsController = require("../controllers/permission.controller");
const {
    authJwt,
    permissions
} = require("../middleware");
module.exports = function (app) {

    // Retrieve All Permissions
    app.get('/api/permissions', [authJwt.verifyToken, permissions.viewAllPermissions], permissionsController.index);

    // Retrieve Individual Permission
    app.get('/api/permissions/:permissionId/show', [authJwt.verifyToken, permissions.viewIndividualPermission], permissionsController.findByPk);

}