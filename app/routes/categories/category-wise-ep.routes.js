const category_wise_ep = require("../../controllers/categories/category-wise-ep.controller");
const {
    authJwt,
    categoryWiseEP
} = require("../../middleware");

const dataImport = require("../../middleware/dataImport");

module.exports = function (app) {

    // Retrieve all Category Wise ep
    app.get('/api/category_wise_ep', [authJwt.verifyToken, categoryWiseEP.viewAllCategoryWiseEP], category_wise_ep.index);

    // Create a New Category Wise ep
    app.post('/api/category_wise_ep/store', [authJwt.verifyToken, categoryWiseEP.createCategoryWiseEP], category_wise_ep.create);

    // Retrieve a Single Category Wise ep
    app.get('/api/category_wise_ep/:crimeStatisticsCDLId/view', [authJwt.verifyToken, categoryWiseEP.viewIndividualCategoryWiseEP], category_wise_ep.findByPk);

    // Update Category Wise ep
    app.put('/api/category_wise_ep/:crimeStatisticsCDLId/update', [authJwt.verifyToken, categoryWiseEP.updateCategoryWiseEP], category_wise_ep.update);

    // Delete Category Wise ep
    app.delete('/api/category_wise_ep/:crimeStatisticsCDLId/delete', [authJwt.verifyToken, categoryWiseEP.deleteCategoryWiseEP], category_wise_ep.delete);

    // Get List of Available Years
    app.get('/api/category_wise_ep/:crimeStatisticId/get-available-years', [], category_wise_ep.getAvailableYears);

    // Data Upload
    app.post("/api/category_wise_ep/upload", dataImport.single("file"), category_wise_ep.upload);

    // First Chart
    app.post("/api/category_wise_ep/first-chart", [], category_wise_ep.firstChart);

    // Get list of available states
    app.get("/api/category_wise_ep/get-available-states", [], category_wise_ep.getAvailableStates);

    // Get list of available districts for a state
    app.get("/api/category_wise_ep/get-available-districts/state/:stateId", [], category_wise_ep.getAvailableDistricts);

    // Get list of available blocks for a district and a state
    app.get("/api/category_wise_ep/get-available-blocks/district/:districtId/state/:stateId", [], category_wise_ep.getAvailableBlocks);

    // Get list of available panchayats for a block and a district and a state
    app.get("/api/category_wise_ep/get-available-panchayats/block/:blockId/district/:districtId/state/:stateId", [], category_wise_ep.getAvailablePanchayats);

    // Get list of available params for a panchayat and a block and a district and a state
    app.get("/api/category_wise_ep/get-available-params/panchayat/:panchayatId/block/:blockId/district/:districtId/state/:stateId", [], category_wise_ep.getAvailableParams);
}