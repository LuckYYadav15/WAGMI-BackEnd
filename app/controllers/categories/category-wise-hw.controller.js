const {
    panchayat
} = require("../../models");
const db = require("../../models");
const panchayats = require("../../seeders/panchayats");
const categoryWiseHW = db.category_wise_h_w;
const Year = db.year;
const State = db.state;
const District = db.district;
const Block = db.block;
const readXlsxFile = require("read-excel-file/node");
const Panchayat = db.panchayat;
const {
    Op
} = require("sequelize");

// View All categoryWiseHW data
exports.index = (req, res) => {
    categoryWiseHW.findAll({})
        .then(category_wise_h_ws => {
            res.send({
                message: "List of all category_wise_h_ws",
                data: category_wise_h_ws,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}


// Create categoryWiseHW
exports.create = (req, res) => {
    categoryWiseHW.create({
            yearId: req.body.yearId,
            stateId: req.body.stateId,
            districtId: req.body.districtId,
            blockId: req.body.blockId,
            panchayatId: req.body.panchayatId,
            jobcards_applied: req.body.jobcards_applied,
            jobcards_issued: req.body.jobcards_issued,
            registered_workers_sc: req.body.registered_workers_sc,
            registered_workers_st: req.body.registered_workers_st,
            registered_workers_others: req.body.registered_workers_others,
            registered_workers_women: req.body.registered_workers_women,
            active_jobcards: req.body.active_jobcards,
            active_workers_sc: req.body.active_workers_sc,
            active_workers_st: req.body.active_workers_st,
            active_workers_others: req.body.active_workers_others,
            active_workers_women: req.body.active_workers_women
        })
        .then(category_wise_h_w => {
            res.status(200).send({
                message: "categoryWiseHW Added Successfully!",
                data: category_wise_h_w,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

// View Individual categoryWiseHW
exports.findByPk = (req, res) => {
    categoryWiseHW.findByPk(req.params.categoryWiseHWId)
        .then(category_wise_h_w => {
            res.status(200).send({
                message: 'Retrieved categoryWiseHW Successfully',
                data: category_wise_h_w,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

// Update categoryWiseHW
exports.update = (req, res) => {
    categoryWiseHW.update({
            yearId: req.body.yearId,
            stateId: req.body.stateId,
            districtId: req.body.districtId,
            blockId: req.body.blockId,
            panchayatId: req.body.panchayatId,
            jobcards_applied: req.body.jobcards_applied,
            jobcards_issued: req.body.jobcards_issued,
            registered_workers_sc: req.body.registered_workers_sc,
            registered_workers_st: req.body.registered_workers_st,
            registered_workers_others: req.body.registered_workers_others,
            registered_workers_women: req.body.registered_workers_women,
            active_jobcards: req.body.active_jobcards,
            active_workers_sc: req.body.active_workers_sc,
            active_workers_st: req.body.active_workers_st,
            active_workers_others: req.body.active_workers_others,
            active_workers_women: req.body.active_workers_women
        }, {
            where: {
                id: req.params.categoryWiseHWId
            }
        })
        .then((category_wise_h_w) => {
            res.status(200).send({
                message: "categoryWiseHW updated successfully",
                data: category_wise_h_w,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

// Delete categoryWiseHW
exports.delete = (req, res) => {
    categoryWiseHW.destroy({
            where: {
                id: req.params.categoryWiseHWId
            }
        })
        .then(() => {
            res.status(200).send({
                message: 'categoryWiseHW deleted successfully',
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

// Get Available Years
exports.getAvailableYears = (req, res) => {
    categoryWiseHW.findAll({
            attributes: ['yearId'],
            group: ['yearId'],
        })
        .then(year_ids => {
            let years = [];
            year_ids.forEach(year_id => {
                years.push(year_id.yearId);
            })
            Year.findAll({
                where: {
                    id: years
                }
            }).then(years => {
                res.send({
                    message: 'Successful',
                    data: years
                });
            }).catch(errors => {
                res.send({
                    message: errors.message
                });
            })

        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

// Get Available States
exports.getAvailableStates = (req, res) => {
    categoryWiseHW.findAll({
            attributes: ['stateId'],
            group: ['stateId'],
        })
        .then(state_ids => {
            let states = [];
            state_ids.forEach(state_id => {
                states.push(state_id.stateId);
            })
            State.findAll({
                where: {
                    id: states
                }
            }).then(states => {
                res.send({
                    message: 'Successful',
                    data: states
                });
            }).catch(errors => {
                res.send({
                    message: errors.message
                });
            })

        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

// Get Available Districts for a State
exports.getAvailableDistricts = (req, res) => {
    categoryWiseHW.findAll({
            attributes: ['districtId'],
            group: ['districtId'],
            where: {
                stateId: req.params.stateId
            }
        })
        .then(district_ids => {
            let districts = [];
            district_ids.forEach(district_id => {
                districts.push(district_id.districtId);
            })
            District.findAll({
                where: {
                    id: districts
                }
            }).then(districts => {
                res.send({
                    message: 'Successful',
                    data: districts
                });
            }).catch(errors => {
                res.send({
                    message: errors.message
                });
            })

        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

// Get Available BLocks for a District and a State
exports.getAvailableBlocks = (req, res) => {
    categoryWiseHW.findAll({
            attributes: ['blockId'],
            group: ['blockId'],
            where: {
                stateId: req.params.stateId,
                districtId: req.params.districtId
            }
        })
        .then(block_ids => {
            let blocks = [];
            block_ids.forEach(block_id => {
                blocks.push(block_id.blockId);
            })
            Block.findAll({
                where: {
                    id: blocks
                }
            }).then(blocks => {
                res.send({
                    message: 'Successful',
                    data: blocks
                });
            }).catch(errors => {
                res.send({
                    message: errors.message
                });
            })

        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

// Get Available Panchayats for a Block and a District and a State
exports.getAvailablePanchayats = (req, res) => {
    categoryWiseHW.findAll({
            attributes: ['panchayatId'],
            group: ['panchayatId'],
            where: {
                stateId: req.params.stateId,
                districtId: req.params.districtId,
                blockId: req.params.blockId
            }
        })
        .then(panchayat_ids => {
            let panchayats = [];
            panchayat_ids.forEach(panchayat_id => {
                panchayats.push(panchayat_id.panchayatId);
            })
            Panchayat.findAll({
                where: {
                    id: panchayats
                }
            }).then(panchayats => {
                res.send({
                    message: 'Successful',
                    data: panchayats
                });
            }).catch(errors => {
                res.send({
                    message: errors.message
                });
            })

        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

// Get Available Params for a Panchayat and a Block and a District and a State
exports.getAvailableParams = (req, res) => {
    categoryWiseHW.findAll({
            attributes: ['paramId'],
            group: ['paramId'],
            where: {
                stateId: req.params.stateId,
                districtId: req.params.districtId,
                blockId: req.params.blockId,
                panchayatId: req.params.panchayatId
            }
        })
        .then(param_ids => {
            let params = [];
            param_ids.forEach(param_id => {
                params.push(param_id.paramId);
            })
            Param.findAll({
                where: {
                    id: params
                }
            }).then(params => {
                res.send({
                    message: 'Successful',
                    data: params
                });
            }).catch(errors => {
                res.send({
                    message: errors.message
                });
            })

        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

// First Chart
exports.firstChart = async (req, res) => {
    const yearId = req.body.yearId;
    const stateId = req.body.stateId;
    const districtId = req.body.districtId;
    const blockId = req.body.blockId;
    const panchayatId = req.body.panchayatId;
    const params = req.body.params;
    console.log(params)

    const yearLabel = await Year.findOne({
        where: {
            id: yearId
        }
    }).then(year => {
        return year.name;
    })

    const stateLabel = await State.findOne({
        where: {
            id: stateId
        }
    }).then(state => {
        return state.name;
    })

    const districtLabel = await District.findOne({
        where: {
            id: districtId
        }
    }).then(district => {
        return district.name;
    })

    const blockLabel = await Block.findOne({
        where: {
            id: blockId
        }
    }).then(block => {
        return block.name;
    })

    const panchayatLabels = await Panchayat.findAll({
        where: {
            id: panchayatId
        }
    }).then(panchayats => {
        let labels = [];
        panchayats.forEach(panchayat => {
            labels.push(panchayat.name);
        });
        return labels;
    })

    categoryWiseHW.findAll({
            where: {
                [Op.and]: [{
                        yearId: yearId
                    },
                    {
                        stateId: stateId
                    },
                    {
                        districtId: districtId
                    },
                    {
                        blockId: blockId
                    },
                    {
                        panchayatId: panchayatId
                    }
                ]
            }
        })
        .then(category_wise_h_ws => {
            let data = {};
            for (var j = 0; j < panchayatId.length; j++) {
                data[panchayatId[j]] = [];
            }

            category_wise_h_ws.forEach(category_wise_h_w => {
                for (var i = 0; i < panchayatId.length; i++) {
                    if (category_wise_h_w.panchayatId == panchayatId[i]) {
                        for (var j = 0; j < params.length; j++) {
                            data[panchayatId[i]].push(category_wise_h_w[params[j]]);
                        }
                    }
                }
            })

            res.status(200).send({
                year: yearLabel,
                state: stateLabel,
                district: districtLabel,
                block: blockLabel,
                panchayat: panchayatLabels,
                data: data
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

exports.upload = async (req, res) => {
    try {
        if (req.file == undefined) {
            return res.status(400).send("Please upload an excel file!");
        }

        let path = __basedir + "/assets/uploads/" + req.file.filename;
        console.log(path)

        readXlsxFile(path).then((rows) => {
            // skip header
            rows.shift();

            let years = [];

            rows.forEach((row) => {
                let data = {
                    jobcards_applied: row[0],
                    jobcards_issued: row[1],
                    registered_workers_sc: row[2],
                    registered_workers_st: row[3],
                    registered_workers_others: row[4],
                    registered_workers_women: row[5],
                    active_jobcards: row[6],
                    active_workers_sc: row[7],
                    active_workers_st: row[8],
                    active_workers_others: row[9],
                    active_workers_women: row[10],
                    yearId: row[11],
                    stateId: row[12],
                    districtId: row[13],
                    blockId: row[14],
                    panchayatId: row[15]
                };
                years.push(data);
            });
            console.log(years);
            categoryWiseHW.bulkCreate(years)
                .then(() => {
                    res.status(200).send({
                        message: "Uploaded the file successfully: ",
                    });
                })
                .catch((error) => {
                    res.status(500).send({
                        message: "Fail to import data into database!",
                        error: error.message,
                    });
                });
        });
    } catch (error) {
        res.status(500).send({
            message: "Could not upload the file: " + req.file.originalname,
        });
    }
};