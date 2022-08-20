const category_wise_wd = require("../../controllers/categories/category-wise-wd.controller");
const {
    authJwt,
    categoryWiseWD
} = require("../../middleware");

const dataImport = require("../../middleware/dataImport");

module.exports = function (app) {

    // Retrieve all Category Wise WD
    app.get('/api/category_wise_wd', [authJwt.verifyToken, categoryWiseWD.viewAllCategoryWiseWD], category_wise_wd.index);

    // Create a New Category Wise WD
    app.post('/api/category_wise_wd/store', [authJwt.verifyToken, categoryWiseWD.createCategoryWiseWD], category_wise_wd.create);

    // Retrieve a Single Category Wise WD
    app.get('/api/category_wise_wd/:crimeStatisticsWDIdId/view', [authJwt.verifyToken, categoryWiseWD.viewIndividualCategoryWiseWD], category_wise_wd.findByPk);

    // Update Category Wise WD
    app.put('/api/category_wise_wd/:crimeStatisticsWDIdId/update', [authJwt.verifyToken, categoryWiseWD.updateCategoryWiseWD], category_wise_wd.update);

    // Delete Category Wise WD
    app.delete('/api/category_wise_wd/:crimeStatisticsWDIdId/delete', [authJwt.verifyToken, categoryWiseWD.deleteCategoryWiseWD], category_wise_wd.delete);

    // Get List of Available Years
    app.get('/api/category_wise_wd/get-available-years', [], category_wise_wd.getAvailableYears);
    
    // Data Upload
    app.post("/api/category_wise_wd/upload", dataImport.single("file"), category_wise_wd.upload);

    // First Chart
    app.post("/api/category_wise_wd/first-chart", [], category_wise_wd.firstChart);

    // Get list of available states
    app.get("/api/category_wise_wd/get-available-states", [], category_wise_wd.getAvailableStates);

    // Get list of available districts for a state
    app.get("/api/category_wise_wd/get-available-districts/state/:stateId", [], category_wise_wd.getAvailableDistricts);

    // Get list of available blocks for a district and a state
    app.get("/api/category_wise_wd/get-available-blocks/district/:districtId/state/:stateId", [], category_wise_wd.getAvailableBlocks);

    // Get list of available panchayats for a block and a district and a state
    app.get("/api/category_wise_wd/get-available-panchayats/block/:blockId/district/:districtId/state/:stateId", [], category_wise_wd.getAvailablePanchayats);

    // Get list of available params for a panchayat and a block and a district and a state
    app.get("/api/category_wise_wd/get-available-params/panchayat/:panchayatId/block/:blockId/district/:districtId/state/:stateId", [], category_wise_wd.getAvailableParams);
}