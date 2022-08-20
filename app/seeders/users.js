const db = require("../models");
const User = db.user;
var bcrypt = require("bcryptjs");
module.exports = {
    seedUsers: function () {
        User.create({
            firstname: 'Nihar',
            lastname: 'Sanda',
            username: 'koolgax99',
            email: 'nihar.sanda@gmail.com',
            password: bcrypt.hashSync('password', 8),
            phone: '8097283441',
        }).then(user => {
            user.setRoles(1);
        });
    }
};