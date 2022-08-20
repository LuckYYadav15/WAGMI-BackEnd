const category_wise_fmo = require("../../controllers/categories/category-wise-fmo.controller");
const {
    authJwt,
    categoryWiseFMO
} = require("../../middleware");

const dataImport = require("../../middleware/dataImport");

module.exports = function (app) {

    // Retrieve all Category Wise fmo
    app.get('/api/category_wise_fmo', [authJwt.verifyToken, categoryWiseFMO.viewAllCategoryWiseFMO], category_wise_fmo.index);

    // Create a New Category Wise fmo
    app.post('/api/category_wise_fmo/store', [authJwt.verifyToken, categoryWiseFMO.createCategoryWiseFMO], category_wise_fmo.create);

    // Retrieve a Single Category Wise fmo
    app.get('/api/category_wise_fmo/:crimeStatisticsFMOId/view', [authJwt.verifyToken, categoryWiseFMO.viewIndividualCategoryWiseFMO], category_wise_fmo.findByPk);

    // Update Category Wise fmo
    app.put('/api/category_wise_fmo/:crimeStatisticsFMOId/update', [authJwt.verifyToken, categoryWiseFMO.updateCategoryWiseFMO], category_wise_fmo.update);

    // Delete Category Wise fmo
    app.delete('/api/category_wise_fmo/:crimeStatisticsFMOId/delete', [authJwt.verifyToken, categoryWiseFMO.deleteCategoryWiseFMO], category_wise_fmo.delete);

    // Get List of Available Years
    app.get('/api/category_wise_fmo/:crimeStatisticId/get-available-years', [], category_wise_fmo.getAvailableYears);
    
    // Data Upload
    app.post("/api/category_wise_fmo/upload", dataImport.single("file"), category_wise_fmo.upload);

    // First Chart
    app.post("/api/category_wise_fmo/first-chart", [], category_wise_fmo.firstChart);

    // Get list of available states
    app.get("/api/category_wise_fmo/get-available-states", [], category_wise_fmo.getAvailableStates);

    // Get list of available districts for a state
    app.get("/api/category_wise_fmo/get-available-districts/state/:stateId", [], category_wise_fmo.getAvailableDistricts);

    // Get list of available blocks for a district and a state
    app.get("/api/category_wise_fmo/get-available-blocks/district/:districtId/state/:stateId", [], category_wise_fmo.getAvailableBlocks);

    // Get list of available panchayats for a block and a district and a state
    app.get("/api/category_wise_fmo/get-available-panchayats/block/:blockId/district/:districtId/state/:stateId", [], category_wise_fmo.getAvailablePanchayats);

    // Get list of available params for a panchayat and a block and a district and a state
    app.get("/api/category_wise_fmo/get-available-params/panchayat/:panchayatId/block/:blockId/district/:districtId/state/:stateId", [], category_wise_fmo.getAvailableParams);
}