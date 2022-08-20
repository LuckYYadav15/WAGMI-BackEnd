const db = require("../models");
const Panchayat = db.panchayat;

// View All Panchayats
exports.index = (req, res) => {
    Panchayat.findAll({})
        .then(panchayats => {
            res.send({
                message: "List of all panchayats",
                data: panchayats,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}


// Create Panchayat
exports.create = (req, res) => {
    Panchayat.create({
            name: req.body.name,
            stateId: req.body.stateId,
            districtId: req.body.districtId,
            blockId: req.body.blockId,
        })
        .then(panchayat => {
            res.status(200).send({
                message: "Panchayat Added Successfully!",
                data: panchayat,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

// View Individual Panchayat
exports.findByPk = (req, res) => {
    Panchayat.findByPk(req.params.panchayatId)
        .then(panchayat => {
            res.status(200).send({
                message: 'Retrieved Panchayat Successfully',
                data: panchayat,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

// Update Panchayat
exports.update = (req, res) => {
    Panchayat.update({
            name: req.body.name,
            stateId: req.body.stateId,
            districtId: req.body.districtId,
            blockId: req.body.blockId,
        }, {
            where: {
                id: req.params.panchayatId
            }
        })
        .then((panchayat) => {
            res.status(200).send({
                message: "Panchayat updated successfully",
                data: panchayat,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

// Delete Panchayat
exports.delete = (req, res) => {
    Panchayat.destroy({
            where: {
                id: req.params.panchayatId
            }
        })
        .then(() => {
            res.status(200).send({
                message: 'Panchayat deleted successfully',
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};