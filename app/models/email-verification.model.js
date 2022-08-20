module.exports = (sequelize, Sequelize) => {
    const EmailVerification = sequelize.define("email_verification", {
        otp: {
            type: Sequelize.STRING
        },
    }, {
        timestamps: true,
        paranoid: true,
    }
    );

    return EmailVerification;
};