// packages
const CryptoJS = require("crypto-js");
const moment = require('moment');

//config
const passKey = require('../config/config').config.passKey;

// models
const adminModel = require('../models/admin.model');
const planModel = require('../models/plan.model');
const appDataModel = require('../models/appData.model');
const counterSchema = require('../models/counter.model');
const usersModel = require('../models/users.model');
const paymentsModel = require('../models/payments.model');

let registerAdmin = async ({ phoneNo, fullName, password }) => {
    try {
        let updateobj = {
            fullName: fullName,
            password: CryptoJS.HmacSHA1(password, passKey).toString(),
            $setOnInsert: { createdAt: new Date() },
            updatedAt: new Date()
        }
        await adminModel.findOneAndUpdate({ phoneNo: phoneNo }, updateobj, { new: true, upsert: true })
        return;
    } catch (error) {
        throw error;
    }
}

let createPlan = async ({ planId, planName, description, appId, planType, duration, planCost, amount, sgst, cgst, igst, planStatus, validUptoDay }) => {
    try {
        let obj = {};
        if (planName) obj.planName = planName;
        if (description) obj.description = description;
        if (appId) obj.appId = appId;
        if (planType) obj.planType = planType;
        if (duration) obj.duration = duration;
        if (planCost) obj.planCost = planCost;
        if (amount) obj.amount = amount;
        if (sgst) obj.sgst = sgst;
        if (cgst) obj.cgst = cgst;
        if (igst) obj.igst = igst;
        if (planStatus) obj.planStatus = planStatus;
        if (planForTrend) obj.planForTrend = planForTrend;
        if (validUptoDay) obj.validUptoDay = validUptoDay;

        if (planId) {
            await planModel.findOneAndUpdate({ planId: planId }, obj);
            return ({ message: "Plan updated successfully" })
        }
        else {
            await planModel.create(obj)
            return ({ message: "Plan added successfully" })
        }
    } catch (error) {
        throw error;
    }
}

let addUpdateAppData = async ({ appId, supportNumber, whatsAppNumber, message1, message2, message3, message4, message5 }) => {
    try {
        await appDataModel.findOneAndUpdate({ appId: appId }, {
            supportNumber: supportNumber, whatsAppNumber: whatsAppNumber, message1: message1, message2: message2, message3: message3, message4: message4, message5: message5
        }, { new: true, upsert: true })
    } catch (error) {
        throw error;
    }
}

// get app data list to show on admin panel
let getAppData = async () => {
    try {
        let aData = await appDataModel.find({})
        return aData;
    } catch (error) {
        throw error;
    }
}

// get plan list to show on admin panel app wise
let getPlanList = async () => {
    try {
        let pData = await planModel.aggregate([{
            $group: {
                _id: "$appId",
                plans: { $push: "$$ROOT" }
            }
        }])
        return pData;
    } catch (error) {
        throw error;
    }
}

// create new counter 
let createCounter = async ({ appId, counterName, counter }) => {
    try {
        let cData = await counterSchema.create({
            appId: appId, counterName: counterName, counter: counter,
        })
        return cData;
    } catch (error) {
        throw error;
    }
}

// get dashboard summary
let dashBoardSummary = async () => {
    try {
        let msdTotalUsers = 0;
        let msdActiveUsers = 0;
        let msdInactiveUsers = 0;
        let msdTotalSub = 0;
        let msdMonthSub = 0;

        let lpgTotalUsers = 0;
        let lpgActiveUsers = 0;
        let lpgInactiveUsers = 0;
        let lpgTotalSub = 0;
        let lpgMonthSub = 0;


        let bitumenTotalUsers = 0;
        let bitumenActiveUsers = 0;
        let bitumenInactiveUsers = 0;
        let bitumenTotalSub = 0;
        let bitumenMonthSub = 0;

        let totalUser = await usersModel.aggregate([{
            $facet: {
                totalUser: [{ $group: { _id: "$appId", count: { $sum: 1 } } }],
                actInactuser: [{ $group: { _id: { app: "$appId", status: "$isActive" }, count: { $sum: 1 } } }]
            }
        }]);
        console.log('totalUser', JSON.stringify(totalUser[0]));
        totalUser[0].totalUser.forEach(element => {
            if (element._id === 'msd') msdTotalUsers = element.count;
            if (element._id === 'lpg') lpgTotalUsers = element.count;
            if (element._id === 'bitumen') bitumenTotalUsers = element.count;
        });
        totalUser[0].actInactuser.forEach(element => {
            if (element._id.app === 'msd') {
                if (element._id.status === true) msdActiveUsers = element.count;
                if (element._id.status === false) msdInactiveUsers = element.count;
            }
            if (element._id.app === 'lpg') {
                if (element._id.status === true) lpgActiveUsers = element.count;
                if (element._id.status === false) lpgInactiveUsers = element.count;
            }
            if (element._id.app === 'bitumen') {
                if (element._id.status === true) bitumenActiveUsers = element.count;
                if (element._id.status === false) bitumenInactiveUsers = element.count;
            }
        });

        let lms = moment().subtract(1, 'month').startOf('month');
        let lme = moment().subtract(1, 'month').endOf('month');
        let totalSub = await paymentsModel.aggregate([{
            $facet: {
                totalSub: [{ $match: { paymentStatus: 'Success' } }, { $group: { _id: "$appId", amount: { $sum: '$payableAmount' } } }],
                monthSub: [{ $match: { paymentStatus: 'Success', date: { $gte: new Date(lms), $lte: new Date(lme) } } }, { $group: { _id: "$appId", amount: { $sum: '$payableAmount' } } }]
            }
        }]);
        console.log('totalSub', JSON.stringify(totalSub[0]));
        totalSub[0].totalSub.forEach(element => {
            if (element._id === 'msd') msdTotalSub = element.amount;
            if (element._id === 'lpg') lpgTotalSub = element.amount;
            if (element._id === 'bitumen') bitumenTotalSub = element.amount;
        });
        totalSub[0].monthSub.forEach(element => {
            if (element._id === 'msd') msdMonthSub = element.amount;
            if (element._id === 'lpg') lpgMonthSub = element.amount;
            if (element._id === 'bitumen') bitumenMonthSub = element.amount;
        });

        let data = {
            "data": [
                {
                    "name": "msd",
                    "data": [{ "name": "Total Users", "value": msdTotalUsers },
                    { "name": "Active Users", "value": msdActiveUsers },
                    { "name": "Inactive Users", "value": msdInactiveUsers },
                    { "name": "Total Subsription", "value": msdTotalSub },
                    { "name": "Subsription last month", "value": msdMonthSub }]
                }
                // ,
                // {
                //     "name": "lpg",
                //     "data": [{ "name": "Total Users", "value": lpgTotalUsers },
                //     { "name": "Active Users", "value": lpgActiveUsers },
                //     { "name": "Inactive Users", "value": lpgInactiveUsers },
                //     { "name": "Total Subsription", "value": lpgTotalSub },
                //     { "name": "Subsription last month", "value": lpgMonthSub }]
                // },
                // {
                //     "name": "bitumen",
                //     "data": [{ "name": "Total Users", "value": bitumenTotalUsers },
                //     { "name": "Active Users", "value": bitumenActiveUsers },
                //     { "name": "Inactive Users", "value": bitumenInactiveUsers },
                //     { "name": "Total Subsription", "value": bitumenTotalSub },
                //     { "name": "Subsription last month", "value": bitumenMonthSub }]
                // }
            ]
        };
        return data;
    } catch (error) {
        throw error;
    }
}

let getReviews = async ({ appId }) => {
    try {
        let review = [
            { name: "Amit Verma", rating: 4.5, review: "This is an amazing app, very correct prediction" },
            { name: "Krishna Venugopal", rating: 4.0, review: "I just recently started using this app and find it very useful" },
            { name: "Amit Verma", rating: 4.5, review: "Nice app." }
        ];
        return review;
    } catch (error) {
        throw error;
    }
}

let checkReferral = async ({ appId, referralCode }) => {
    try {
        if (referralCode) {
            return;
        } else throw new Error("Please enter a valid referral code.")
    } catch (error) {
        throw error;
    }
}

module.exports = {
    registerAdmin: registerAdmin,
    createPlan: createPlan,
    addUpdateAppData: addUpdateAppData,
    getAppData: getAppData,
    getPlanList: getPlanList,
    createCounter: createCounter,
    dashBoardSummary: dashBoardSummary,
    getReviews: getReviews,
    checkReferral: checkReferral
};