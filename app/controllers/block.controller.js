const db = require("../models");
const Block = db.block;

// View All Blocks
exports.index = (req, res) => {
    Block.findAll({})
        .then(blocks => {
            res.send({
                message: "List of all blocks",
                data: blocks,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}


// Create Block
exports.create = (req, res) => {
    Block.create({
            name: req.body.name,
            stateId: req.body.stateId,
            districtId: req.body.districtId,
        })
        .then(block => {
            res.status(200).send({
                message: "Block Added Successfully!",
                data: block,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

// View Individual Block
exports.findByPk = (req, res) => {
    Block.findByPk(req.params.blockId)
        .then(block => {
            res.status(200).send({
                message: 'Retrieved Block Successfully',
                data: block,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

// Update Block
exports.update = (req, res) => {
    Block.update({
            name: req.body.name,
            stateId: req.body.stateId,
            districtId: req.body.districtId,
        }, {
            where: {
                id: req.params.blockId
            }
        })
        .then((block) => {
            res.status(200).send({
                message: "Block updated successfully",
                data: block,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

// Delete Block
exports.delete = (req, res) => {
    Block.destroy({
            where: {
                id: req.params.blockId
            }
        })
        .then(() => {
            res.status(200).send({
                message: 'Block deleted successfully',
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};