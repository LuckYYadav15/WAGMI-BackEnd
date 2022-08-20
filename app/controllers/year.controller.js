const db = require("../models");
const Year = db.year;

// View All Years
exports.index = (req, res) => {
    Year.findAll({})
        .then(years => {
            res.send({
                message: "List of all years",
                data: years,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

// Create Year
exports.create = (req, res) => {
    Year.create({
        name: req.body.name,
        statusId: req.body.statusId,
    })
        .then(year => {
            res.status(200).send({
                message: "Year was added successfully!",
                data: year,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

// View Individual Year
exports.findByPk = (req, res) => {
    Year.findByPk(req.params.yearId)
        .then(year => {
            res.status(200).send({
                message: 'Year Retrieved Successfully',
                data: year,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });

};

// Update Year
exports.update = (req, res) => {
    Year.update({
        name: req.body.name,
        statusId: req.body.statusId,
    },
        { where: { id: req.params.yearId } }
    )
        .then((year) => {
            res.status(200).send({
                message: 'Year Updated Successfully',
                data: year,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

// Delete Year
exports.delete = (req, res) => {
    Year.destroy({
        where: { id: req.params.yearId }
    })
        .then(() => {
            res.status(200).send({
                message: 'Year deleted successfully',
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};