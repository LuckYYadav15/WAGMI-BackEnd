const statesController = require("../controllers/state.controller");
const {
    authJwt,
    states
} = require("../middleware");

module.exports = function (app) {

    // View All States
    app.get('/api/states', [authJwt.verifyToken, states.viewAllStates], statesController.index);

    // Create State
    app.post('/api/states/store', [authJwt.verifyToken, states.createState], statesController.create);

    // View Individual State
    app.get('/api/states/:stateId/show', [authJwt.verifyToken, states.viewIndividualState], statesController.findByPk);

    // Update State
    app.put('/api/states/:stateId/update', [authJwt.verifyToken, states.updateState], statesController.update);

    // Delete State
    app.delete('/api/states/:stateId/delete', [authJwt.verifyToken, states.deleteState], statesController.delete);
}