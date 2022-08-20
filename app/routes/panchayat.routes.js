const panchayatsController = require("../controllers/panchayat.controller");
const {
    authJwt,
    panchayats
} = require("../middleware");

module.exports = function (app) {

    // View All Panchayats
    app.get('/api/panchayats', [authJwt.verifyToken, panchayats.viewAllPanchayats], panchayatsController.index);

    // Create Panchayat
    app.post('/api/panchayats/store', [authJwt.verifyToken, panchayats.createPanchayat], panchayatsController.create);

    // View Individual Panchayat
    app.get('/api/panchayats/:panchayatId/show', [authJwt.verifyToken, panchayats.viewIndividualPanchayat], panchayatsController.findByPk);

    // Update Panchayat
    app.put('/api/panchayats/:panchayatId/update', [authJwt.verifyToken, panchayats.updatePanchayat], panchayatsController.update);

    // Delete Panchayat
    app.delete('/api/panchayats/:panchayatId/delete', [authJwt.verifyToken, panchayats.deletePanchayat], panchayatsController.delete);
}