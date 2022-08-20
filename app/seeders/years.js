const db = require("../models");
const Years = db.year;
module.exports = {
    seedYears: function () {
        Years.create({
            name: "2001-2002"
        });
        Years.create({
            name: "2002-2003"
        });
        Years.create({
            name: "2003-2004"
        });
        Years.create({
            name: "2004-2005"
        });
        Years.create({
            name: "2005-2006"
        });
        Years.create({
            name: "2006-2007"
        });
        Years.create({
            name: "2007-2008"
        });
        Years.create({
            name: "2008-2009"
        });
        Years.create({
            name: "2009-2010"
        });
        Years.create({
            name: "2010-2011"
        });
        Years.create({
            name: "2011-2012"
        });
        Years.create({
            name: "2012-2013"
        });
        Years.create({
            name: "2013-2014"
        });
        Years.create({
            name: "2014-2015"
        });
        Years.create({
            name: "2015-2016"
        });
        Years.create({
            name: "2016-2017"
        });
        Years.create({
            name: "2017-2018"
        });
        Years.create({
            name: "2018-2019"
        });
        Years.create({
            name: "2019-2020"
        });
        Years.create({
            name: "2020-2021"
        });
        Years.create({
            name: "2021-2022"
        });
        Years.create({
            name: "2022-2023"
        });
    }
};