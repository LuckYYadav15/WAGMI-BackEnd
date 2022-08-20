module.exports = (sequelize, Sequelize) => {
    const CategoryWiseFMO = sequelize.define("category_wise_f_m_o", {
        august_firstFortnight_musterRollIssued: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        august_firstFortnight_PrintedEmusterRoll: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        august_firstFortnight_musterRollFilled: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        august_firstFortnight_FilledEmusterRoll: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        august_firstFortnight_AttendenceFilledPersonsMusterRoll: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        august_firstFortnight_AttendanceNotFilledEMusterRoll: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        august_firstFortnight_MusterRollDatePayment: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        august_secondFortnight_MusterRollIssued: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        august_secondFortnight_PrintedEmusterRoll: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        august_secondFortnight_musterRollFilled: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        august_secondFortnight_FilledEmusterRoll: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        august_secondFortnight_AttendenceFilledPersonsMusterRoll: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        august_secondFortnight_AttendanceNotFilledEMusterRoll: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        august_secondFortnight_MusterRollDatePayment: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        total_Fortnight_MusterRollIssued: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        total_Fortnight_PrintedEmusterRoll: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        total_Fortnight_musterRollFilled: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        total_Fortnight_FilledEmusterRoll: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        total_Fortnight_AttendenceFilledPersonsMusterRoll: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        total_Fortnight_AttendanceNotFilledEMusterRoll: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        total_Fortnight_MusterRollDatePayment: {
            type: Sequelize.DECIMAL,
            allowNull: true
        }
    }, {
        timestamps: true,
        paranoid: true,
    });

    return CategoryWiseFMO;
};