const yearsController = require("../controllers/year.controller");
const {
    authJwt,
    years
} = require("../middleware");

module.exports = function (app) {

    // View All Years
    app.get('/api/years', [authJwt.verifyToken, years.viewAllYears], yearsController.index);

    // Create Year
    app.post('/api/years/store', [authJwt.verifyToken, years.createYear], yearsController.create);

    // View Individual Year
    app.get('/api/years/:yearId/show', [authJwt.verifyToken, years.viewIndividualYear], yearsController.findByPk);

    // Update Year
    app.put('/api/years/:yearId/update', [authJwt.verifyToken, years.updateYear], yearsController.update);

    // Delete Year
    app.delete('/api/years/:yearId/delete', [authJwt.verifyToken, years.deleteYear], yearsController.delete);
}