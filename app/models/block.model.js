module.exports = (sequelize, Sequelize) => {
    const Block = sequelize.define("block", {
        name: {
            type: Sequelize.STRING
        },
    }, {
        timestamps: true,
        paranoid: true,
    });

    return Block;
};