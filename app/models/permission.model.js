module.exports = (sequelize, Sequelize) => {
    const Permission = sequelize.define("permissions", {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true,
        }
    });

    return Permission;
};