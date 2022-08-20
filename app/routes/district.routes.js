const districtsController = require("../controllers/district.controller");
const {
    authJwt,
    districts
} = require("../middleware");

module.exports = function (app) {

    // View All Districts
    app.get('/api/districts', [authJwt.verifyToken, districts.viewAllDistricts], districtsController.index);

    // Create District
    app.post('/api/districts/store', [authJwt.verifyToken, districts.createDistrict], districtsController.create);

    // View Individual District
    app.get('/api/districts/:districtId/show', [authJwt.verifyToken, districts.viewIndividualDistrict], districtsController.findByPk);

    // Update District
    app.put('/api/districts/:districtId/update', [authJwt.verifyToken, districts.updateDistrict], districtsController.update);

    // Delete District
    app.delete('/api/districts/:districtId/delete', [authJwt.verifyToken, districts.deleteDistrict], districtsController.delete);
}