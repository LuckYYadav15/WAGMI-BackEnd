module.exports = (sequelize, Sequelize) => {
    const Panchayat = sequelize.define("panchayat", {
        name: {
            type: Sequelize.STRING
        },
    }, {
        timestamps: true,
        paranoid: true,
    });

    return Panchayat;
};