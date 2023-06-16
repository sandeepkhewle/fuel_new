//packages
const moment = require('moment');

// models
const trendsModel = require('../models/trends.model');
const userModel = require('../models/users.model');

//services
const commService = require('./communication.service');
const userService = require('./user.service')

let createNewTrend = async ({ trendType, trend, trendName, trendDate, trendUnite, productName, validFrom, validThrough, trendValue }) => {
    try {

        await trendsModel.create({
            trendType: trendType, trend: trend, trendName: trendName, trendDate: trendDate, trendUnite: trendUnite, productName: productName, validFrom: validFrom, validThrough: validThrough, createdAt: new Date(),
            trendValue: trendValue
        })
        await commService.sendNotification({ appId: "fuel", category: "all members", data: {}, message: "New trend added", title: "Trends Update" })
        return;
    } catch (error) {
        throw error;
    }
}

let updateTrend = async ({ trendsId, trendType, trend, trendUnite, productName, validFrom, validThrough, trendName, trendValue, trendDate }) => {
    try {
        let updateObj = {
            updatedAt: new Date()
        };
        if (trendType) updateObj.trendType = trendType;
        if (trendName) updateObj.trendName = trendName;
        if (trendUnite) updateObj.trendUnite = trendUnite;
        if (trend) updateObj.trend = trend;
        if (productName) updateObj.productName = productName;
        if (validFrom) updateObj.validFrom = validFrom;
        if (validThrough) updateObj.validThrough = validThrough;
        if (trendValue) updateObj.trendValue = trendValue;
        if (trendDate) updateObj.trendDate = trendDate;

        await trendsModel.findOneAndUpdate({ trendsId: trendsId }, updateObj, { new: true })
        return;
    } catch (error) {
        throw error;
    }
}

let createMultipleTrend = async (body) => {
    try {
        let trendName = body.trendName;
        let validThrough = new Date(body.validThrough);
        let trendDate = new Date(body.trendDate).setHours(12, 0);
        let validFrom = new Date(body.validFrom);
        let newArray = []
        if (trendName === 'monthly') {
            if (body.lpgDoc) newArray.push(body.lpgDoc)
            if (body.lpgNonDoc) newArray.push(body.lpgNonDoc)
            if (body.mto) newArray.push(body.mto)
            if (body.hexane) newArray.push(body.hexane)
            if (body.kerosene) newArray.push(body.kerosene)
        }
        if (trendName === 'fortnight') {
            if (body.bitumen) newArray.push(body.bitumen)
            if (body.furanceOil) newArray.push(body.furanceOil)
            if (body.ldo) newArray.push(body.ldo)
            if (body.hsd) newArray.push(body.hsd)
        }
        let promiseArray = []
        newArray.forEach(e1 => {
            promiseArray.push(trendsModel.create({
                trendType: e1.trendType, trend: e1.trend, trendName: trendName, trendDate: trendDate, trendUnite: e1.trendUnite, productName: e1.productName, validFrom: validFrom, validThrough: validThrough, createdAt: new Date(), trendValue: e1.trendValue
            }))
        });
        Promise.all(promiseArray).then(() => {
            commService.sendNotification({ appId: "fuel", category: "All Members", data: {}, message: "New trend added", title: "Trends Update" }).then(() => {
                return;
            })
        })
    } catch (error) {
        throw error;
    }
}

let deleteTrend = async ({ trendsId }) => {
    try {
        await trendsModel.remove({ trendsId: trendsId })
        return;
    } catch (error) {
        throw error;
    }
}

let getFutureTrend = async ({ trendName, trendType }) => {
    try {
        console.log({ trendName, trendType });
        // let dateToday = new Date()
        let matchObj = {
            trendName: trendName,
            trendDate: { $gte: new Date() },
        }
        if (trendType) matchObj.trendType = trendType;
        console.log({ matchObj });
        let tData = await trendsModel.aggregate([{
            $match: matchObj
        }, {
            $sort: { trendDate: -1 }
        }, {
            $group: {
                _id: {
                    "trendType": "$trendType", "productName": "$productName"
                },
                data: { $push: "$$ROOT" }
            }
        }, {
            $project: { first: { $arrayElemAt: ["$data", 0] } }
        }, {
            $replaceRoot: { newRoot: "$first" }
        }, {
            $group: { _id: "$trendType", data: { "$push": "$$ROOT" } }
        }]);

        console.log('tData--1', JSON.stringify(tData));

        // to add is have active plan against trendType
        if (tData) {
            tData.forEach(e1 => {
                e1.data.forEach(e2 => {
                    e2.newTrendValue = `${e2.trend} ${e2.trendValue}/${e2.trendUnite}`
                    e2.trendValue = 0;
                })
            })
        }

        console.log('tData', JSON.stringify(tData));
        return tData;
    } catch (error) {
        throw error;
    }
}

let getPastTrend = async ({ trendName, trendType }, userId) => {
    try {
        console.log("userId", userId);
        let userActivePlans = await userService.getUserActivePlans(userId);
        let matchObj = {
            trendName: trendName,
            trendDate: { $lte: new Date() },
        }
        if (trendType) matchObj.trendType = trendType;
        let tData = await trendsModel.aggregate([{
            $match: matchObj
        }, {
            $sort: { trendDate: -1 }
        }, {
            $group: {
                _id: {
                    "trendType": "$trendType", "productName": "$productName"
                },
                data: { $push: "$$ROOT" }
            }
        }, {
            $project: { first: { $arrayElemAt: ["$data", 0] } }
        }, {
            $replaceRoot: { newRoot: "$first" }
        }, {
            $group: { _id: "$trendType", data: { "$push": "$$ROOT" } }
        }]);
        let arrayToSend = [];


        let last7days = moment().subtract(7, 'days')
        let uData = await userModel.findOne({ userId: userId, createDate: { $gte: last7days } });

        console.log({ tData });

        // to add is have active plan against trendType
        if (tData) {
            tData.forEach(e1 => {
                e1.activePlan = false
                // show all future trends free for 7 days
                if (uData) e1.activePlan = true
                // show active plans
                if (userActivePlans) {
                    userActivePlans.forEach(e2 => {
                        if (e2._id == e1._id) e1.activePlan = true
                    })
                }
                let newArray = []
                e1.data.forEach(e2 => {
                    e2.newTrendValue = `${e2.trend} ${e2.trendValue}/${e2.trendUnite}`
                    // e2.trendValue = 0;
                    if (trendName === 'monthly') newArray.push(e2)
                    if (trendName === 'fortnight') {
                        if (e2.productName === 'BITUMEN') { newArray[0] = e2 };
                        if (e2.productName === 'FURNACE OIL') { newArray[1] = e2 };
                        if (e2.productName === 'HSD(INSTITUTIONAL)') { newArray[2] = e2 };
                        if (e2.productName === 'LDO') { newArray[3] = e2 };
                    }
                })
                e1.data = newArray.filter(Boolean);
                if (trendName === 'monthly') {
                    if (e1._id === 'lpg') { arrayToSend[0] = e1 };
                    if (e1._id === 'kerosene') { arrayToSend[1] = e1 };
                    if (e1._id === 'hexane') { arrayToSend[2] = e1 };
                    if (e1._id === 'mto') { arrayToSend[3] = e1 };
                }
                if (trendName === 'fortnight') {
                    arrayToSend.push(e1)
                }
            })
        }
        let dataToSend = arrayToSend.filter(Boolean);

        console.log({ dataToSend });

        return dataToSend;
    } catch (error) {
        throw error;
    }
}

let getPastFortnightTrend = async (userId) => {
    try {
        let userActivePlans = await userService.getUserActivePlans(userId);
        let matchObj = {
            trendName: "fortnight",
            trendDate: { $lte: new Date() },
        }
        // if (trendType) matchObj.trendType = trendType;
        let tData = await trendsModel.aggregate([{
            $match: matchObj
        }, {
            $sort: { trendDate: -1 }
        }, {
            $group: {
                _id: {
                    "trendType": "$trendType", "productName": "$productName"
                },
                data: { $push: "$$ROOT" }
            }
        }, {
            $project: { first: { $arrayElemAt: ["$data", 0] } }
        }, {
            $replaceRoot: { newRoot: "$first" }
        }, {
            $group: { _id: "$trendType", data: { "$push": "$$ROOT" } }
        }]);
        // to add is have active plan against trendType
        if (tData) {
            tData.forEach(e1 => {
                e1.activePlan = false
                e1.data.forEach(e2 => {
                    e2.newTrendValue = `${e2.trend} ${e2.trendValue}/${e2.trendUnite}`
                })
                if (userActivePlans) {
                    userActivePlans.forEach(e2 => {
                        if (e2._id == e1.trendType) e1.activePlan = true
                    })
                }
            })
        }
        return tData;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createNewTrend: createNewTrend,
    createMultipleTrend: createMultipleTrend,
    updateTrend: updateTrend,
    deleteTrend: deleteTrend,
    getFutureTrend: getFutureTrend,
    getPastTrend: getPastTrend,
    getPastFortnightTrend: getPastFortnightTrend
}