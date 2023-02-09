//packages
const moment = require('moment');

// models
const trendsModel = require('../models/trends.model');

//services
const commService = require('../services/communication.service');

let createNewTrend = async ({ appId, trendType, validFrom, validThrough, trendDate, trendUnite, ms, hsd, fourteenKg, nineteenKg, bitumen, furnaceOil, ldo }) => {
    try {
        await trendsModel.create({
            appId: appId, trendType: trendType, validFrom: validFrom, validThrough: validThrough, trendDate: trendDate, trendUnite: trendUnite, ms: ms, hsd: hsd, fourteenKg: fourteenKg, nineteenKg: nineteenKg, bitumen: bitumen, furnaceOil: furnaceOil, ldo: ldo, createdAt: new Date()
        })
        // await commService.sendNotification({ appId: appId, category: "all members", data: {}, message: "New trend added", title: "Trends Update" })
        return;
    } catch (error) {
        throw error;
    }
}

let updateTrend = async ({ appId, trendsId, trendType, validFrom, validThrough, trendDate, trendUnite, ms, hsd, fourteenKg, nineteenKg, bitumen, furnaceOil, ldo }) => {
    try {
        let updateObj = {};
        if (trendType) updateObj.trendType = trendType;
        if (validFrom) updateObj.validFrom = validFrom;
        if (validThrough) updateObj.validThrough = validThrough;

        if (trendDate) updateObj.trendDate = trendDate;
        if (trendUnite) updateObj.trendUnite = trendUnite;
        if (ms) updateObj.ms = ms;
        if (hsd) updateObj.hsd = hsd;
        if (fourteenKg) updateObj.fourteenKg = fourteenKg;
        if (nineteenKg) updateObj.nineteenKg = nineteenKg;
        if (bitumen) updateObj.bitumen = bitumen;
        if (furnaceOil) updateObj.furnaceOil = furnaceOil;
        if (ldo) updateObj.ldo = ldo;

        await trendsModel.findOneAndUpdate({ appId: appId, trendsId: trendsId }, updateObj, { new: true })
        return;
    } catch (error) {
        throw error;
    }
}

let deleteTrend = async ({ appId, trendsId }) => {
    try {
        await trendsModel.remove({ appId: appId, trendsId: trendsId })
        return;
    } catch (error) {
        throw error;
    }
}

let getFutureTrend = async ({ appId }) => {
    try {
        let dateToday = new Date()
        let tData = await trendsModel.find({
            appId: appId,
            trendDate: { $gte: new Date(dateToday) },
        });
        return tData;
    } catch (error) {
        throw error;
    }
}

let getPastTrend = async ({ appId }) => {
    try {
        let tData = await trendsModel.aggregate([{ $sort: { "validThrough": -1 } }, {
            $match: {
                appId: appId,
                trendDate: { $lte: new Date() },
            }
        }, { $limit: 5 }]);
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
    getPastTrend: getPastTrend
}