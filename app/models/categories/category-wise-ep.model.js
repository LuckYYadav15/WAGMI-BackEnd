module.exports = (sequelize, Sequelize) => {
    const CategoryWiseEP = sequelize.define("category_wise_e_p", {
        april_household: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        may_household: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        june_household: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        july_household: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        august_household: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        september_household: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        october_household: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        november_household: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        december_household: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        january_household: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        february_household: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        march_household: {
            type: Sequelize.DECIMAL,
            allowNull: true
        }
    }, {
        timestamps: true,
        paranoid: true,
    });

    return CategoryWiseEP;
};