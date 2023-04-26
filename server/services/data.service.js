// packages
const moment = require('moment');

// models
const userModel = require('../models/users.model');
const planModel = require('../models/plan.model');
const addDataModel = require('../models/appData.model');
const notificationModel = require('../models/notification.model');
const paymentModel = require('../models/payments.model');
const paymentsModel = require('../models/payments.model');

// get plan list as per the app id
let getPlanList = async ({ appId, gstNumber }) => {
    try {
        let pData = await planModel.find({ appId: appId, planStatus: 'Active' }, {
            planId: 1, planName: 1, description: 1, appId: 1, duration: 1, planCost: 1, amount: 1, sgst: 1, cgst: 1, igst: 1, planStatus: 1, planType: 1, validUptoDay: 1
        });
        pData = JSON.parse(JSON.stringify(pData));
        // console.log({ pData });

        // calculate validity from duration and validuptoDay
        pData.forEach((e, i) => {

            // calculate gst
            let singlePercent = Number(e.planCost) / (100 + 18);
            let gst = singlePercent * 18;
            // console.log('gst', gst);
            let tax = gst.toFixed(2);
            e.amount = Number((singlePercent * 100).toFixed(2));

            // set igst or sgst cgst depending on the gst number
            if (gstNumber) {
                let stateCode = gstNumber.substring(0, 2);
                if (stateCode === "27") {
                    e.cgst = Number((tax / 2).toFixed(2));
                    e.sgst = Number((tax / 2).toFixed(2));
                    delete e.igst;
                } else {
                    e.igst = tax;
                    delete e.cgst;
                    delete e.sgst;
                }
            } else {
                e.cgst = Number((tax / 2).toFixed(2));
                e.sgst = Number((tax / 2).toFixed(2));
                delete e.igst;
            }

            console.log({ e });
            let pT = (e.planType === 'Monthly') ? 'months' : 'years';
            // console.log({ pT });
            // console.log('dur', e.duration);
            let validUpto = moment().add(pT, e.duration).set("date", e.validUptoDay).format('DD MMM YYYY');
            if (e.validUptoDay === 0) validUpto = moment().add(pT, e.duration).format('DD MMM YYYY');
            console.log('validUpto', validUpto);

            // console.log('e', e.duration);
            // let validUpto = moment().add(e.duration, 'months').set("date", e.validUptoDay).format('DD MMM YYYY');
            // console.log('validUpto', validUpto);
            pData[i].validUpto = validUpto;
        });
        return pData;
    } catch (error) {
        throw error;
    }
}

// get all notification list for the user
let getnotificationList = async ({ appId }, userId) => {
    try {
        let nData = await notificationModel.find({ appId: 'fuel', userId: userId });
        return nData;
    } catch (error) {
        throw error;
    }
}

let getAppData = async (userId, { appId }) => {
    try {
        let userCount = await userModel.find({ appId: appId }).count()
        let aData = await addDataModel.findOne({ appId: appId })
        let newData = JSON.parse(JSON.stringify(aData));
        newData.isSubscribedPlan = false;
        let pData = await paymentModel.aggregate([{ $match: { appId: appId, userId: userId, paymentStatus: "Success", startDate: { $lte: new Date() }, endDate: { $gte: new Date() } } },
        { $group: { _id: "$planForTrend", data: { $push: "$$ROOT" } } }]);
        console.log('userCount', userCount);
        if (pData) {
            pData.forEach(e1 => {
                newData[e1._id] = true;
            })
            newData.isSubscribedPlan = true;
        }
        newData.activeUser = 10000 + Number(userCount);
        // newData.howItWorks = "https://infotecindia.s3.ap-south-1.amazonaws.com/assets/MSHSD-Eng-Resize-1.m4v";
        return newData;
    } catch (error) {
        throw error;
    }
}

let getTransaction = async (userId, appId) => {
    try {
        let pData = await paymentsModel.find({ appId: appId, userId: userId, paymentStatus: "Success" }, { planName: 1, invoiceNo: 1, startDate: 1, endDate: 1, payableAmount: 1, planType: 1, link: 1, paymentStatus: 1 });
        return pData;
    } catch (error) {
        throw error;
    }
}

let getPlanData = async (userId, appId) => {
    try {
        let pData = await paymentsModel.find({ appId: appId, userId: userId, paymentStatus: "Success" }, { planName: 1, invoiceNo: 1, startDate: 1, endDate: 1, payableAmount: 1, planType: 1, link: 1 });
        return pData;
    } catch (error) {
        throw error;
    }
}

let getAppImagesTecSpec = async (name) => {
    try {
        let tecnicalSpec = [
            { name: "Bitumen", link: "https://fytrackstorage.s3.ap-south-1.amazonaws.com/fitness/fitness/admin/ikjs5jwu9m85n/Admin.jpg" },
            { name: "FO", link: "https://fytrackstorage.s3.ap-south-1.amazonaws.com/fitness/fitness/admin/ikjs5jwu9m85n/Admin.jpg" },
            { name: "LDO", link: "https://fytrackstorage.s3.ap-south-1.amazonaws.com/fitness/fitness/admin/ikjs5jwu9m85n/Admin.jpg" },
            { name: "Hexane", link: "https://fytrackstorage.s3.ap-south-1.amazonaws.com/fitness/fitness/admin/ikjs5jwu9m85n/Admin.jpg" },
            { name: "HSD", link: "https://fytrackstorage.s3.ap-south-1.amazonaws.com/fitness/fitness/admin/ikjs5jwu9m85n/Admin.jpg" },
            { name: "MTO", link: "https://fytrackstorage.s3.ap-south-1.amazonaws.com/fitness/fitness/admin/ikjs5jwu9m85n/Admin.jpg" },
            { name: "SKO", link: "https://fytrackstorage.s3.ap-south-1.amazonaws.com/fitness/fitness/admin/ikjs5jwu9m85n/Admin.jpg" },
        ]
        if (name) return tecnicalSpec.find(o => o.name === name)
        else return tecnicalSpec;
    } catch (error) {
        throw error;
    }
}

let getAppImagesConvertionTable = async () => {
    try {
        let Images = {
            name: "converationTable", link: "https://fytrackstorage.s3.ap-south-1.amazonaws.com/fitness/fitness/admin/ikjs5jwu9m85n/Admin.jpg"
        }
        return Images;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getPlanList: getPlanList,
    getnotificationList: getnotificationList,
    getAppData: getAppData,
    getTransaction: getTransaction,
    getAppImagesTecSpec: getAppImagesTecSpec,
    getAppImagesConvertionTable: getAppImagesConvertionTable,
    getPlanData: getPlanData
}