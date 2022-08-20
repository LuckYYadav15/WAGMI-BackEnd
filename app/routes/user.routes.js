const usersController = require("../controllers/user.controller");
const {
    authJwt,
    users
} = require("../middleware");
const {
    usersValidation
} = require("../validators");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // View All Users
    app.get('/api/users', [authJwt.verifyToken, users.viewAllUsers], usersController.index);

    // Create User
    app.post('/api/users/store', [authJwt.verifyToken, usersValidation.createUser, users.createUser], usersController.create);

    // Retrieve Individual User
    app.get('/api/users/:userId/show', [authJwt.verifyToken, users.viewIndividualUser], usersController.findByPk);

    // Update User
    app.put('/api/users/:userId/update', [authJwt.verifyToken, usersValidation.editUser, users.updateUser], usersController.update);

    // Delete User
    app.delete('/api/users/:userId/delete', [authJwt.verifyToken, users.deleteUser], usersController.delete);
};