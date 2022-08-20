const {
    panchayat
} = require("../../models");
const db = require("../../models");
const panchayats = require("../../seeders/panchayats");
const categoryWiseFMO = db.category_wise_f_m_o;
const Year = db.year;
const State = db.state;
const District = db.district;
const Block = db.block;
const readXlsxFile = require("read-excel-file/node");
const Panchayat = db.panchayat;
const {
    Op
} = require("sequelize");

// View All categoryWiseFMO data
exports.index = (req, res) => {
    categoryWiseFMO.findAll({})
        .then(category_wise_f_mo => {
            res.send({
                message: "List of all category_wise_f_FMO",
                data: category_wise_f_mo,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}


// Create categoryWiseFMO
exports.create = (req, res) => {
    categoryWiseFMO.create({
            yearId: req.body.yearId,
            stateId: req.body.stateId,
            districtId: req.body.districtId,
            blockId: req.body.blockId,
            panchayatId: req.body.panchayatId,
            august_firstFortnight_musterRollIssued: req.body.august_firstFortnight_musterRollIssued,
            august_firstFortnight_PrintedEmusterRoll: req.body.august_firstFortnight_PrintedEmusterRoll,
            august_firstFortnight_musterRollFilled: req.body.august_firstFortnight_musterRollFilled,
            augutst_firstFortnight_FilledEmusterRoll: req.body.augutst_firstFortnight_FilledEmusterRoll,
            august_firstFortnight_AttendenceFilledPersonsMusterRoll: req.body.august_firstFortnight_AttendenceFilledPersonsMusterRoll,
            august_firstFortnight_AttendenceNotFilledPersonsMusterRoll: req.body.august_firstFortnight_AttendenceNotFilledPersonsMusterRoll,
            august_firstFortnight_MusterRollDatePayment: req.body.august_firstFortnight_MusterRollDatePayment,
            
            august_secondFortnight_musterRollIssued: req.body.august_secondFortnight_musterRollIssued,
            august_secondFortnight_PrintedEmusterRoll: req.body.august_secondFortnight_PrintedEmusterRoll,
            august_secondFortnight_musterRollFilled: req.body.august_secondFortnight_musterRollFilled,
            augutst_secondFortnight_FilledEmusterRoll: req.body.augutst_secondFortnight_FilledEmusterRoll,
            august_secondFortnight_AttendenceFilledPersonsMusterRoll: req.body.august_secondFortnight_AttendenceFilledPersonsMusterRoll,
            august_secondFortnight_AttendenceNotFilledPersonsMusterRoll: req.body.august_secondFortnight_AttendenceNotFilledPersonsMusterRoll,
            august_secondFortnight_MusterRollDatePayment: req.body.august_secondFortnight_MusterRollDatePayment,

            total_musterRollIssued: req.body.total_Fortnight_musterRollIssued,
            total_PrintedEmusterRoll: req.body.total_PrintedEmusterRoll,
            total_musterRollFilled: req.body.total_Fortnight_musterRollFilled,
            total_FilledEmusterRoll: req.body.total_FilledEmusterRoll,
            total_AttendenceFilledPersonsMusterRoll: req.body.total_AttendenceFilledPersonsMusterRoll,
            total_AttendenceNotFilledPersonsMusterRoll: req.body.total_AttendenceNotFilledPersonsMusterRoll,
            total_MusterRollDatePayment: req.body.total_MusterRollDatePayment,
        })
        .then(category_wise_fmo => {
            res.status(200).send({
                message: "categoryWiseFMO Added Successfully!",
                data: category_wise_fmo,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

// View Individual categoryWiseFMO
exports.findByPk = (req, res) => {
    categoryWiseFMO.findByPk(req.params.categoryWiseFMOId)
        .then(category_wise_fmo => {
            res.status(200).send({
                message: 'Retrieved categoryWiseFMO Successfully',
                data: category_wise_fmo,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

// Update categoryWiseFMO
exports.update = (req, res) => {
    categoryWiseFMO.update({
            yearId: req.body.yearId,
            stateId: req.body.stateId,
            districtId: req.body.districtId,
            blockId: req.body.blockId,
            panchayatId: req.body.panchayatId,
            april_household: req.body.april_household,
            may_household: req.body.may_household,
            june_household: req.body.june_household,
            july_household: req.body.july_household,
            august_household: req.body.august_household,
            sFMOtember_household: req.body.sFMOtember_household,
            october_household: req.body.october_household,
            november_household: req.body.november_household,
            december_household: req.body.december_household,
            january_household: req.body.january_household,
            february_household: req.body.february_household,
            march_household: req.body.march_household
        }, {
            where: {
                id: req.params.categoryWiseFMOId
            }
        })
        .then((category_wise_f_m_o) => {
            res.status(200).send({
                message: "categoryWiseFMO updated successfully",
                data: category_wise_f_m_o,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

// Delete categoryWiseFMO
exports.delete = (req, res) => {
    categoryWiseFMO.destroy({
            where: {
                id: req.params.categoryWiseFMOId
            }
        })
        .then(() => {
            res.status(200).send({
                message: 'categoryWiseFMO deleted successfully',
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
    categoryWiseFMO.findAll({
            attributes: ['yearId'],
            group: ['yearId'],
        })
        .then(year_ids => {
            let years = [];
            year_ids.forEach(year_id => {
                years.push(year_id.yearId);
            })
            Years.findAll({
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
    categoryWiseFMO.findAll({
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
    categoryWiseFMO.findAll({
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
    categoryWiseFMO.findAll({
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
    categoryWiseFMO.findAll({
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
    categoryWiseFMO.findAll({
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

    categoryWiseFMO.findAll({
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
        .then(category_wise_f_mo => {
            let data = {};
            for (var j = 0; j < panchayatId.length; j++) {
                data[panchayatId[j]] = [];
            }

            category_wise_f_mo.forEach(category_wise_f_m_o => {
                for (var i = 0; i < panchayatId.length; i++) {
                    if (category_wise_f_m_o.panchayatId == panchayatId[i]) {
                        for (var j = 0; j < params.length; j++) {
                            data[panchayatId[i]].push(category_wise_f_m_o[params[j]]);
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
            categoryWiseFMO.bulkCreate(years)
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