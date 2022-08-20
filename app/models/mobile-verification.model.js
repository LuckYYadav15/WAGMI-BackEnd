module.exports = (sequelize, Sequelize) => {
    const MobileVerification = sequelize.define("mobile_verification", {
        otp: {
            type: Sequelize.STRING
        },
    }, {
        timestamps: true,
        paranoid: true,
    }
    );

    return MobileVerification;
};