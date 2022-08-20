const blocksController = require("../controllers/block.controller");
const {
    authJwt,
    blocks
} = require("../middleware");

module.exports = function (app) {

    // View All Blocks
    app.get('/api/blocks', [authJwt.verifyToken, blocks.viewAllBlocks], blocksController.index);

    // Create Block
    app.post('/api/blocks/store', [authJwt.verifyToken, blocks.createBlock], blocksController.create);

    // View Individual Block
    app.get('/api/blocks/:blockId/show', [authJwt.verifyToken, blocks.viewIndividualBlock], blocksController.findByPk);

    // Update Block
    app.put('/api/blocks/:blockId/update', [authJwt.verifyToken, blocks.updateBlock], blocksController.update);

    // Delete Block
    app.delete('/api/blocks/:blockId/delete', [authJwt.verifyToken, blocks.deleteBlock], blocksController.delete);
}