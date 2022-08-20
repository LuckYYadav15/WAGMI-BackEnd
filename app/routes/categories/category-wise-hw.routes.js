const category_wise_hw = require("../../controllers/categories/category-wise-hw.controller");
const {
    authJwt,
    categoryWiseHW
} = require("../../middleware");

const dataImport = require("../../middleware/dataImport");

module.exports = function (app) {

    // Retrieve all Category Wise HW
    app.get('/api/category_wise_hw', [authJwt.verifyToken, categoryWiseHW.viewAllCategoryWiseHW], category_wise_hw.index);

    // Create a New Category Wise HW
    app.post('/api/category_wise_hw/store', [authJwt.verifyToken, categoryWiseHW.createCategoryWiseHW], category_wise_hw.create);

    // Retrieve a Single Category Wise HW
    app.get('/api/category_wise_hw/:categoryWiseHWId/view', [authJwt.verifyToken, categoryWiseHW.viewIndividualCategoryWiseHW], category_wise_hw.findByPk);

    // Update Category Wise HW
    app.put('/api/category_wise_hw/:categoryWiseHWId/update', [authJwt.verifyToken, categoryWiseHW.updateCategoryWiseHW], category_wise_hw.update);

    // Delete Category Wise HW
    app.delete('/api/category_wise_hw/:categoryWiseHWId/delete', [authJwt.verifyToken, categoryWiseHW.deleteCategoryWiseHW], category_wise_hw.delete);

    // Get List of Available Years
    app.get('/api/category_wise_hw/get-available-years', [], category_wise_hw.getAvailableYears);

    // Data Upload
    app.post("/api/category_wise_hw/upload", dataImport.single("file"), category_wise_hw.upload);

    // First Chart
    app.post("/api/category_wise_hw/first-chart", [], category_wise_hw.firstChart);

    // Get list of available states
    app.get("/api/category_wise_hw/get-available-states", [], category_wise_hw.getAvailableStates);

    // Get list of available districts for a state
    app.get("/api/category_wise_hw/get-available-districts/state/:stateId", [], category_wise_hw.getAvailableDistricts);

    // Get list of available blocks for a district and a state
    app.get("/api/category_wise_hw/get-available-blocks/district/:districtId/state/:stateId", [], category_wise_hw.getAvailableBlocks);

    // Get list of available panchayats for a block and a district and a state
    app.get("/api/category_wise_hw/get-available-panchayats/block/:blockId/district/:districtId/state/:stateId", [], category_wise_hw.getAvailablePanchayats);

    // Get list of available params for a panchayat and a block and a district and a state
    app.get("/api/category_wise_hw/get-available-params/panchayat/:panchayatId/block/:blockId/district/:districtId/state/:stateId", [], category_wise_hw.getAvailableParams);
} 