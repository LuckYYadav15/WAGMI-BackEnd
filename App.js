const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const seedPermissions = require("./app/seeders/permissions")
const seedRoles = require("./app/seeders/roles")
const seedUsers = require("./app/seeders/users")
const seedYears = require("./app/seeders/years")
const seedStates = require("./app/seeders/states")
const seedDistricts = require("./app/seeders/districts")
const seedBlocks = require("./app/seeders/blocks")
const seedPanchayats = require("./app/seeders/panchayats")

global.__basedir = __dirname;

const app = express();

var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

const db = require("./app/models")

// db.sequelize.sync({
//     force: 'true'
// }).then(() => {
//     console.log('Drop and Resync tables')
//     seedRoles.seedRoles();
//     seedPermissions.seedPermissions();
//     seedUsers.seedUsers();
//     seedStates.seedStates();
//     seedDistricts.seedDistricts();
//     seedBlocks.seedBlocks();
//     seedPanchayats.seedPanchayats();
//     seedYears.seedYears();
// });


// simple route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Wagmi Application."
    });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/role.routes')(app);
require('./app/routes/permission.routes')(app);
require('./app/routes/year.routes')(app);
require('./app/routes/state.routes')(app);
require('./app/routes/district.routes')(app);
require('./app/routes/block.routes')(app);
require('./app/routes/panchayat.routes')(app);
require('./app/routes/categories/category-wise-hw.routes')(app);
require('./app/routes/categories/category-wise-wd.routes')(app);
require('./app/routes/categories/category-wise-fmo.routes')(app);
require('./app/routes/categories/category-wise-ep.routes')(app);

// set port, listen for requests
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}.`);
// });
app.listen(port, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`Server is online and runing at port ${port}`);
  });
  