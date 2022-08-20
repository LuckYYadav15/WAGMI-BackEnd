module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
            firstname: {
                type: Sequelize.STRING
            },
            lastname: {
                type: Sequelize.STRING
            },
            username: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            phone: {
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING
            },
            emailVerifiedAt: {
                type: Sequelize.DATE,
                allowNull: true
            },
            mobileVerifiedAt: {
                type: Sequelize.DATE,
                allowNull: true
            }
        }, {
            timestamps: true,
            paranoid: true,
        }
    );

    return User;
};