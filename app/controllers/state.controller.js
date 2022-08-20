const db = require("../models");
const State = db.state;

// View All States
exports.index = (req, res) => {
    State.findAll({})
        .then(states => {
            res.send({
                message: "List of all states",
                data: states,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}


// Create State
exports.create = (req, res) => {
    State.create({
            name: req.body.name,
        })
        .then(state => {
            res.status(200).send({
                message: "State Added Successfully!",
                data: state,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

// View Individual State
exports.findByPk = (req, res) => {
    State.findByPk(req.params.stateId)
        .then(state => {
            res.status(200).send({
                message: 'Retrieved State Successfully',
                data: state,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

// Update State
exports.update = (req, res) => {
    State.update({
            name: req.body.name,
        }, {
            where: {
                id: req.params.stateId
            }
        })
        .then((state) => {
            res.status(200).send({
                message: "State updated successfully",
                data: state,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

// Delete State
exports.delete = (req, res) => {
    State.destroy({
            where: {
                id: req.params.stateId
            }
        })
        .then(() => {
            res.status(200).send({
                message: 'State deleted successfully',
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};