module.exports = (sequelize, Sequelize) => {
    const State = sequelize.define("state", {
            name: {
                type: Sequelize.STRING
            },
        }, {
            timestamps: true,
            paranoid: true,
        }
    );

    return State;
};