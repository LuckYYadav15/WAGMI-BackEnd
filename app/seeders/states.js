const db = require("../models");
const States = db.state;
module.exports = {
    seedStates: function () {
        States.create({
            name: "Andhra Pradesh",
        });
        States.create({
            name: "Arunachal Pradesh",
        });
        States.create({
            name: "Assam",
        });
        States.create({
            name: "Bihar",
        });
        States.create({
            name: "Chattisgarh",
        });
        States.create({
            name: "Goa",
        });
        States.create({
            name: "Gujarat",
        });
        States.create({
            name: "Haryana",
        });
        States.create({
            name: "Himachal Pradesh",
        });
        States.create({
            name: "Jammu & Kashmir",
        });
        States.create({
            name: "Jharkhand",
        });
        States.create({
            name: "Karnataka",
        });
        States.create({
            name: "Kerala",
        });
        States.create({
            name: "Madhya Pradesh",
        });
        States.create({
            name: "Maharashtra",
        });
        States.create({
            name: "Manipur",
        });
        States.create({
            name: "Meghalaya",
        });
        States.create({
            name: "Mizoram",
        });
        States.create({
            name: "Nagaland",
        });
        States.create({
            name: "Odisha",
        });
        States.create({
            name: "Punjab",
        });
        States.create({
            name: "Rajasthan",
        });
        States.create({
            name: "Sikkim",
        });
        States.create({
            name: "Tamil Nadu",
        });
        States.create({
            name: "Telangana",
        });
        States.create({
            name: "Tripura",
        });
        States.create({
            name: "Uttar Pradesh",
        });
        States.create({
            name: "Uttarakhand",
        });
        States.create({
            name: "West Bengal",
        });
        States.create({
            name: "Andaman & Nicobar",
        });
        States.create({
            name: "Chandigarh",
        });
        States.create({
            name: "DN Havelli and DD",
        });
        States.create({
            name: "Lakshadweep",
        });
        States.create({
            name: "Puducherry",
        });
        States.create({
            name: "Ladakh",
        });
    }
};