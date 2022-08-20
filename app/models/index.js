const config = require("../config/db.config.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        port: config.PORT,
        operatorsAliases: false,

        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.role = require("./role.model.js")(sequelize, Sequelize);
db.permission = require("./permission.model.js")(sequelize, Sequelize);
db.year = require("./year.model.js")(sequelize, Sequelize);
db.state = require("./state.model.js")(sequelize, Sequelize);
db.panchayat = require("./panchayat.model.js")(sequelize, Sequelize);
db.block = require("./block.model.js")(sequelize, Sequelize);
db.district = require("./district.model.js")(sequelize, Sequelize);
db.category_wise_h_w = require("./categories/category-wise-hw.model")(sequelize, Sequelize);
db.category_wise_w_d = require("./categories/category-wise-wd.model")(sequelize,Sequelize);
db.category_wise_e_p = require("./categories/category-wise-ep.model")(sequelize,Sequelize);
db.category_wise_f_m_o = require("./categories/category-wise-fmo.model")(sequelize,Sequelize);


// Will add stateId to the District model
db.state.hasMany(db.district);
db.district.belongsTo(db.state);

// Will add stateId to the Block Model
db.state.hasMany(db.block);
db.block.belongsTo(db.state);

// Will add districtId to the Block model
db.district.hasMany(db.block);
db.block.belongsTo(db.district);

// Will add stateId to the Panchayat model
db.state.hasMany(db.panchayat);
db.panchayat.belongsTo(db.state);

// Will add districtId to the Panchayat model
db.district.hasMany(db.block);
db.panchayat.belongsTo(db.district);

// Will add blockId to the Panchayat model
db.block.hasMany(db.panchayat);
db.panchayat.belongsTo(db.block);

// Will add yearId, stateId, districtId, blockId, panchayatId to the Category Wise HW model
db.year.hasMany(db.category_wise_h_w);
db.state.hasMany(db.category_wise_h_w);
db.district.hasMany(db.category_wise_h_w);
db.block.hasMany(db.category_wise_h_w);
db.panchayat.hasMany(db.category_wise_h_w);

db.category_wise_h_w.belongsTo(db.year);
db.category_wise_h_w.belongsTo(db.state);
db.category_wise_h_w.belongsTo(db.district);
db.category_wise_h_w.belongsTo(db.block);
db.category_wise_h_w.belongsTo(db.panchayat);


db.year.hasMany(db.category_wise_f_m_o);
db.state.hasMany(db.category_wise_f_m_o);
db.district.hasMany(db.category_wise_f_m_o);
db.block.hasMany(db.category_wise_f_m_o);
db.panchayat.hasMany(db.category_wise_f_m_o);

db.category_wise_f_m_o.belongsTo(db.year);
db.category_wise_f_m_o.belongsTo(db.state);
db.category_wise_f_m_o.belongsTo(db.district);
db.category_wise_f_m_o.belongsTo(db.block);
db.category_wise_f_m_o.belongsTo(db.panchayat);

db.year.hasMany(db.category_wise_w_d);
db.state.hasMany(db.category_wise_w_d);
db.district.hasMany(db.category_wise_w_d);
db.block.hasMany(db.category_wise_w_d);
db.panchayat.hasMany(db.category_wise_w_d);

db.category_wise_w_d.belongsTo(db.year);
db.category_wise_w_d.belongsTo(db.state);
db.category_wise_w_d.belongsTo(db.district);
db.category_wise_w_d.belongsTo(db.block);
db.category_wise_w_d.belongsTo(db.panchayat);

db.year.hasMany(db.category_wise_e_p);
db.state.hasMany(db.category_wise_e_p);
db.district.hasMany(db.category_wise_e_p);
db.block.hasMany(db.category_wise_e_p);
db.panchayat.hasMany(db.category_wise_e_p);

db.category_wise_e_p.belongsTo(db.year);
db.category_wise_e_p.belongsTo(db.state);
db.category_wise_e_p.belongsTo(db.district);
db.category_wise_e_p.belongsTo(db.block);
db.category_wise_e_p.belongsTo(db.panchayat);

//Pivot Tables
db.role.belongsToMany(db.user, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
});

db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
});

db.permission.belongsToMany(db.role, {
    through: "role_permissions",
    foreignKey: "permissionId",
    otherKey: "roleId"
});

db.role.belongsToMany(db.permission, {
    through: "role_permissions",
    foreignKey: "roleId",
    otherKey: "permissionId"
});

db.permission.belongsToMany(db.user, {
    through: "user_permissions",
    foreignKey: "permissionId",
    otherKey: "userId"
});

db.user.belongsToMany(db.permission, {
    through: "user_permissions",
    foreignKey: "userId",
    otherKey: "permissionId"
});

db.ROLES = ["Admin", "Moderator", "User"];

module.exports = db;