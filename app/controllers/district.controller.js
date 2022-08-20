const db = require("../models");
const District = db.district;

// View All Districts
exports.index = (req, res) => {
    District.findAll({})
        .then(districts => {
            res.send({
                message: "List of all districts",
                data: districts,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}


// Create District
exports.create = (req, res) => {
    District.create({
            name: req.body.name,
            stateId : req.body.stateId,
        })
        .then(district => {
            res.status(200).send({
                message: "District Added Successfully!",
                data: district,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

// View Individual District
exports.findByPk = (req, res) => {
    District.findByPk(req.params.districtId)
        .then(district => {
            res.status(200).send({
                message: 'Retrieved District Successfully',
                data: district,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

// Update District
exports.update = (req, res) => {
    District.update({
            name: req.body.name,
            stateId : req.body.stateId,
        }, {
            where: {
                id: req.params.districtId
            }
        })
        .then((district) => {
            res.status(200).send({
                message: "District updated successfully",
                data: district,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

// Delete District
exports.delete = (req, res) => {
    District.destroy({
            where: {
                id: req.params.districtId
            }
        })
        .then(() => {
            res.status(200).send({
                message: 'District deleted successfully',
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};