const authJwt = require("./authJwt");
const verifySignUp = require("./verifySignUp");
const roles = require("./roles");
const permissions = require("./permissions")
const users = require("./users")
const years = require("./years")
const states = require("./states")
const districts = require("./districts")
const blocks = require("./blocks")
const panchayats = require("./panchayats")
const categoryWiseHW = require("./categories/category-wise-hw")
const categoryWiseFMO = require("./categories/category-wise-fmo")
const categoryWiseEP = require("./categories/category-wise-ep")
const categoryWiseWD = require("./categories/category-wise-wd")

module.exports = {
    authJwt,
    verifySignUp,
    roles,
    permissions,
    users,
    years,
    states,
    districts,
    blocks,
    panchayats,
    categoryWiseHW,
    categoryWiseEP,
    categoryWiseFMO,
    categoryWiseWD
};