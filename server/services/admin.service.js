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

let createPlan = async ({ planId, planName, description, appId, planType, duration, planCost, amount, sgst, cgst, igst, planStatus, validUptoDay, planForTrend, discountedPrice, discountedPercent }) => {
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
        if (discountedPrice) obj.discountedPrice = discountedPrice;
        if (discountedPercent) obj.discountedPercent = discountedPercent;

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

let addUpdateAppData = async ({ _id, appId, supportNumber, whatsAppNumber, message1, message2, message3, message4, message5, message6 }) => {
    try {
        await appDataModel.findOneAndUpdate({ _id: _id }, {
            appId: appId, supportNumber: supportNumber, whatsAppNumber: whatsAppNumber, message1: message1, message2: message2, message3: message3, message4: message4, message5: message5, message6: message6, message7: message7, message8: message8
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

        let totalUser = await usersModel.aggregate([{
            $facet: {
                totalUser: [{ $group: { _id: "$appId", count: { $sum: 1 } } }],
                actInactuser: [{ $group: { _id: { app: "$appId", status: "$isActive" }, count: { $sum: 1 } } }]
            }
        }]);
        // console.log('totalUser', JSON.stringify(totalUser[0]));
        totalUser[0].totalUser.forEach(element => {
            if (element._id === 'fuel') msdTotalUsers = element.count;
        });
        totalUser[0].actInactuser.forEach(element => {
            if (element._id.app === 'fuel') {
                if (element._id.status === true) msdActiveUsers = element.count;
                if (element._id.status === false) msdInactiveUsers = element.count;
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
        // console.log('totalSub', JSON.stringify(totalSub[0]));
        totalSub[0].totalSub.forEach(element => {
            if (element._id === 'fuel') msdTotalSub = element.amount;
        });
        totalSub[0].monthSub.forEach(element => {
            if (element._id === 'fuel') msdMonthSub = element.amount;
        });

        let data = {
            "data": [
                {
                    "name": "fuel",
                    "data": [
                        { "name": "Total Users", "value": msdTotalUsers },
                        { "name": "Active Users", "value": msdActiveUsers },
                        { "name": "Inactive Users", "value": msdInactiveUsers },
                        { "name": "Total Subsription", "value": msdTotalSub },
                        { "name": "Subsription last month", "value": msdMonthSub }
                    ]
                }
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

let getPlanListByTreads = async (planForTrend) => {
    try {
        let matchObj = {}
        if (planForTrend) matchObj.planForTrend = planForTrend;
        let pData = await planModel.aggregate([{ $match: matchObj }, {
            $group: {
                _id: "$planForTrend",
                plans: { $push: "$$ROOT" }
            }
        }])

        if (pData.length > 0) {
            pData.forEach(e1 => {
                if (e1.plans.length > 0) {
                    e1.plans.forEach(e2 => {
                        let pT = (e2.planType === 'Monthly') ? 'months' : 'years';
                        let validUpto = moment().add('months', e2.duration).set("date", e2.validUptoDay);
                        if (e2.validUptoDay === 0) validUpto = moment().add(pT, e2.duration)
                        e2.validUptoDate = new Date(validUpto)
                        console.log("pData.length", validUpto, pT);
                    })
                }
            })
        }
        return pData;
    } catch (error) {
        throw error;
    }
}


let getUserDetials = async (userId) => {
    try {
        let uData = await usersModel.findOne({ userId })
        return uData;
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
    checkReferral: checkReferral,
    getPlanListByTreads: getPlanListByTreads,
    getUserDetials: getUserDetials
};