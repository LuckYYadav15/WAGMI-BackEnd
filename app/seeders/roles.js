const db = require("../models");
const Role = db.role;
module.exports = {
    seedRoles: function () {
        Role.create({
            name: "Admin"
        });

        Role.create({
            name: "Moderator"
        });

        Role.create({
            name: "User"
        });
    }
};