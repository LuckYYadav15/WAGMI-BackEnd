module.exports = (sequelize, Sequelize) => {
    const Year = sequelize.define("year", {
            name: {
                type: Sequelize.STRING
            },
        }, {
            timestamps: true,
            paranoid: true,
        }
    );

    return Year;
};