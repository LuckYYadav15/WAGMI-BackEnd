const db = require("../models");
const Districts = db.district;
module.exports = {
    seedDistricts: function () {
        Districts.create({
            name: "Bagalkote",
            stateId: 12,
        });
        Districts.create({
            name: "Ballari",
            stateId: 12,
        });
        Districts.create({
            name: "Belagavi",
            stateId: 12,
        });
        Districts.create({
            name: "Bengaluru",
            stateId: 12,
        });
        Districts.create({
            name: "Bengaluru Rural",
            stateId: 12,
        });
        Districts.create({
            name: "Bidar",
            stateId: 12,
        });
        Districts.create({
            name: "Chamaraja Nagara",
            stateId: 12,
        });
        Districts.create({
            name: "Chikkaballapura",
            stateId: 12,
        });
        Districts.create({
            name: "Chikkamagaluru",
            stateId: 12,
        });
        Districts.create({
            name: "Chitradurga",
            stateId: 12,
        });
        Districts.create({
            name: "Dakshina Kannada",
            stateId: 12,
        });
        Districts.create({
            name: "Davanagere",
            stateId: 12,
        });
        Districts.create({
            name: "Dharwad",
            stateId: 12,
        });
        Districts.create({
            name: "Gadag",
            stateId: 12,
        });
        Districts.create({
            name: "Hassan",
            stateId: 12,
        });
        Districts.create({
            name: "Haveri",
            stateId: 12,
        });
        Districts.create({
            name: "kalaburagi",
            stateId: 12,
        });
        Districts.create({
            name: "Kodagu",
            stateId: 12,
        });
        Districts.create({
            name: "Kolar",
            stateId: 12,
        });
        Districts.create({
            name: "Koppal",
            stateId: 12,
        });
        Districts.create({
            name: "Mandya",
            stateId: 12,
        });
        Districts.create({
            name: "Mysuru",
            stateId: 12,
        });
        Districts.create({
            name: "Raichur",
            stateId: 12,
        });
        Districts.create({
            name: "Ramanagara",
            stateId: 12,
        });
        Districts.create({
            name: "Shivamogga",
            stateId: 12,
        });
        Districts.create({
            name: "Tumakuru",
            stateId: 12,
        });
        Districts.create({
            name: "Udupi",
            stateId: 12,
        });
        Districts.create({
            name: "Uttara Kannada",
            stateId: 12,
        });
        Districts.create({
            name: "Vijayanagara",
            stateId: 12,
        });
        Districts.create({
            name: "Vijayapura",
            stateId: 12,
        });
        Districts.create({
            name: "Yadgir",
            stateId: 12,
        });
    }
};