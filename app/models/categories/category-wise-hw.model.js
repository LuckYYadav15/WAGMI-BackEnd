module.exports = (sequelize, Sequelize) => {
    const CategoryWiseHW = sequelize.define("category_wise_h_w", {
        jobcards_applied: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        jobcards_issued: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        registered_workers_sc: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        registered_workers_st: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        registered_workers_others: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        registered_workers_women: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        active_jobcards: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        acive_workers_sc: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        active_workers_st: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        active_workers_others: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        active_workers_women: {
            type: Sequelize.DECIMAL,
            allowNull: true
        }
    }, {
        timestamps: true,
        paranoid: true,
    });

    return CategoryWiseHW;
};