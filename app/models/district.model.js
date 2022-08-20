module.exports = (sequelize, Sequelize) => {
    const District = sequelize.define("district", {
        name: {
            type: Sequelize.STRING
        },
    }, {
        timestamps: true,
        paranoid: true,
    });

    return District;
};