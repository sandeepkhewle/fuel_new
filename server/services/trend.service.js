//packages
const moment = require('moment');

// models
const trendsModel = require('../models/trends.model');

//services
const commService = require('../services/communication.service');
const userService = require('../services/user.service')

let createNewTrend = async ({ trendType, trend, trendName, trendDate, trendUnite, productName, validFrom, validThrough, trendValue }) => {
    try {

        await trendsModel.create({
            trendType: trendType, trend: trend, trendName: trendName, trendDate: trendDate, trendUnite: trendUnite, productName: productName, validFrom: validFrom, validThrough: validThrough, createdAt: new Date(),
            trendValue: trendValue
        })
        // await commService.sendNotification({ appId: appId, category: "all members", data: {}, message: "New trend added", title: "Trends Update" })
        return;
    } catch (error) {
        throw error;
    }
}

let updateTrend = async ({ trendsId, trendType, trend, trendUnite, productName, validFrom, validThrough, trendName, trendValue }) => {
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

        await trendsModel.findOneAndUpdate({ trendsId: trendsId }, updateObj, { new: true })
        return;
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
        // let dateToday = new Date()
        let matchObj = {
            trendName: trendName,
            trendDate: { $gte: new Date() },
        }
        if (trendType) matchObj.trendType = trendType;
        let tData = await trendsModel.aggregate([{ $sort: { "validThrough": -1 } }, {
            $match: matchObj
        }, { $group: { _id: "$trendType", data: { "$push": "$$ROOT" } } }]);
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
        let tData = await trendsModel.aggregate([{ $sort: { "validThrough": -1 } }, {
            $match: matchObj
        }, { $group: { _id: "$trendType", data: { "$push": "$$ROOT" } } }, {
            $project: {
                data: { "$slice": ["$data", 1] }
            }
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
                        if (e2._id == e1._id) e1.activePlan = true
                    })
                }
            })
        }
        return tData;
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
        let tData = await trendsModel.aggregate([{ $sort: { "validThrough": -1 } }, {
            $match: matchObj
        }, { $group: { _id: "$trendName", data: { "$push": "$$ROOT" } } }, {
            $project: {
                data: { "$slice": ["$data", 1] }
            }
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
    updateTrend: updateTrend,
    deleteTrend: deleteTrend,
    getFutureTrend: getFutureTrend,
    getPastTrend: getPastTrend,
    getPastFortnightTrend: getPastFortnightTrend
}