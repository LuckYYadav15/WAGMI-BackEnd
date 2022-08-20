const db = require("../models");
const Permission = db.permission;
module.exports = {
    seedPermissions: function () {
        // Roles Module Start
        Permission.create({
            name: "View All Roles"
        }).then((permission) => permission.setRoles(1));

        Permission.create({
            name: "View Individual Role"
        }).then((permission) => permission.setRoles(1));
        // Roles Module End

        // Permissions Module Start
        Permission.create({
            name: "View All Permissions"
        }).then((permission) => permission.setRoles(1));

        Permission.create({
            name: "View Individual Permission"
        }).then((permission) => permission.setRoles(1));
        // Permissions Module End

        // Users Module Start
        Permission.create({
            name: "View All Users"
        }).then((permission) => permission.setRoles(1));

        Permission.create({
            name: "Create User"
        }).then((permission) => permission.setRoles(1));

        Permission.create({
            name: "Update User"
        }).then((permission) => permission.setRoles(1));

        Permission.create({
            name: "Delete User"
        }).then((permission) => permission.setRoles(1));

        Permission.create({
            name: "View Individual User"
        }).then((permission) => permission.setRoles(1));
        // Users Module End

        // State Module Start
        Permission.create({
            name: "View All States"
        }).then((permission) => permission.setRoles(1));

        Permission.create({
            name: "Create State"
        }).then((permission) => permission.setRoles(1));

        Permission.create({
            name: "Update State"
        }).then((permission) => permission.setRoles(1));

        Permission.create({
            name: "Delete State"
        }).then((permission) => permission.setRoles(1));

        Permission.create({
            name: "View Individual State"
        }).then((permission) => permission.setRoles(1));
        // State Module End

        // Year Module Start
        Permission.create({
            name: "View All Years"
        }).then((permission) => permission.setRoles(1));

        Permission.create({
            name: "Create Year"
        }).then((permission) => permission.setRoles(1));

        Permission.create({
            name: "Update Year"
        }).then((permission) => permission.setRoles(1));

        Permission.create({
            name: "Delete Year"
        }).then((permission) => permission.setRoles(1));

        Permission.create({
            name: "View Individual Year"
        }).then((permission) => permission.setRoles(1));
        // Year Module End

        // District Module Start
        Permission.create({
            name: "View All Districts"
        }).then((permission) => permission.setRoles(1));

        Permission.create({
            name: "Create District"
        }).then((permission) => permission.setRoles(1));

        Permission.create({
            name: "Update District"
        }).then((permission) => permission.setRoles(1));

        Permission.create({
            name: "Delete District"
        }).then((permission) => permission.setRoles(1));

        Permission.create({
            name: "View Individual District"
        }).then((permission) => permission.setRoles(1));
        // District Module End

        // Block Module Start
        Permission.create({
            name: "View All Blocks"
        }).then((permission) => permission.setRoles(1));

        Permission.create({
            name: "Create Block"
        }).then((permission) => permission.setRoles(1));

        Permission.create({
            name: "Update Block"
        }).then((permission) => permission.setRoles(1));

        Permission.create({
            name: "Delete Block"
        }).then((permission) => permission.setRoles(1));

        Permission.create({
            name: "View Individual Block"
        }).then((permission) => permission.setRoles(1));
        // Block Module End

        // Panchayat Module Start
        Permission.create({
            name: "View All Panchayats"
        }).then((permission) => permission.setRoles(1));

        Permission.create({
            name: "Create Panchayat"
        }).then((permission) => permission.setRoles(1));

        Permission.create({
            name: "Update Panchayat"
        }).then((permission) => permission.setRoles(1));

        Permission.create({
            name: "Delete Panchayat"
        }).then((permission) => permission.setRoles(1));

        Permission.create({
            name: "View Individual Panchayat"
        }).then((permission) => permission.setRoles(1));
        // Panchayat Module End

        // Category Wise HW Module Start
        Permission.create({
            name: "View All Category Wise HW"
        }).then((permission) => permission.setRoles(1));

        Permission.create({
            name: "Create Category Wise HW"
        }).then((permission) => permission.setRoles(1));

        Permission.create({
            name: "Update Category Wise HW"
        }).then((permission) => permission.setRoles(1));

        Permission.create({
            name: "Delete Category Wise HW"
        }).then((permission) => permission.setRoles(1));

        Permission.create({
            name: "View Individual Category Wise HW"
        }).then((permission) => permission.setRoles(1));
        // Category Wise HW Module End

    }
};
