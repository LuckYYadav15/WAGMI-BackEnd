module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("roles", {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true,
        }
    });

    return Role;
};