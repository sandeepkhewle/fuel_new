// packages
const moment = require('moment');

// models
const userModel = require('../models/users.model');
const planModel = require('../models/plan.model');
const appDataModel = require('../models/appData.model');
const notificationModel = require('../models/notification.model');
const paymentModel = require('../models/payments.model');
const paymentsModel = require('../models/payments.model');
const counterModel = require('../models/counter.model');

// json
const paymentJSON = require('../json/payment.json');

// services
const accountService = require('./account.service');

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
            if (e.planType === 'Yearly') {
                console.log('here--');
                e.actualPlanCost = 5000;
                console.log("e.actualPlanCost", e.actualPlanCost);
            }
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
let getnotificationList = async ({ appId }) => {
    try {
        let nData = await notificationModel.find({ appId: appId });
        return nData;
    } catch (error) {
        throw error;
    }
}

let getAppData = async (userId, { appId }) => {
    try {
        let userCount = await userModel.find({ appId: appId }).count()
        let aData = await appDataModel.findOne({ appId: appId })
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
        console.log({ userId, appId });
        let pData = await paymentsModel.find({ appId: appId, userId: userId }, { planName: 1, invoiceNo: 1, startDate: 1, endDate: 1, payableAmount: 1, planType: 1, link: 1, paymentStatus: 1 }).sort({ _id: -1 });
        console.log({ pData });
        return pData;
    } catch (error) {
        throw error;
    }
}

let getPlanData = async (userId, appId) => {
    try {
        console.log({ userId, appId });
        let pData = await paymentsModel.find({ appId: appId, userId: userId, paymentStatus: "Success" }, { planName: 1, invoiceNo: 1, startDate: 1, endDate: 1, payableAmount: 1, planType: 1, link: 1 });
        // console.log({ pData });
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

let showPopup = async (userId) => {
    try {
        let aData = await appDataModel.findOne({});
        // console.log('aData', aData);
        let data = {
            showPopup: aData.showPopup, message: aData.popupMessage
        }
        // console.log('data', data);
        return data;
    } catch (error) {
        throw error;
    }
}

let migrateOldPayment = async ({ ORDER_ID,
    user_id,
    plan_id,
    plan_name,
    package_name,
    amount,
    TXNAMOUNT,
    cgstAmount,
    sgstAmount,
    igstAmount,
    gstNumber,
    date,
    validity,
    state,
    invoiceNo,
    email,
    phone,
    mihpayid,
    TXNID,
    productinfo,
    firm_name,
    CURRENCY,
    RESPCODE,
    RESPMSG,
    GATEWAYNAME,
    BANKTXNID,
    BANKNAME,
    paymentModeStatus }) => {
    try {
        console.log('user_id', user_id);
        let uData = await userModel.findOne({ userId: user_id });
        let counter = await counterModel.findOneAndUpdate({
            "appId": "fuel",
            "counterName": "Invoice Number",
        }, {
            $inc: { counter: 1 }
        }, {
            new: true
        })
        let newObj = {
            appId: "fuel",
            fullName: uData?.fullName,
            orderId: ORDER_ID,
            userId: user_id,
            planId: plan_id,
            planName: plan_name,
            planType: package_name,
            planForTrend: plan_name,
            amount: amount,
            discount: 0,
            tax: TXNAMOUNT,
            cgst: cgstAmount,
            sgst: sgstAmount,
            igst: igstAmount,
            payableAmount: TXNAMOUNT,
            gstNumber: gstNumber,
            date: date,
            startDate: moment(new Date(validity)).subtract(1, 'year'),
            endDate: validity,
            state: state,
            invoiceNo: counter.counter,
            emailId: email,
            phoneNo: phone,
            mihpayId: mihpayid,
            txnId: TXNID,
            key: "",
            productInfo: productinfo,
            serviceProvider: "",
            firmName: firm_name,
            packageName: package_name,
            paymentStatus: "Success",
            updatedAt: new Date(),
            createdAt: date,
            referralCode: null,
            referralPoints: null,
            currency: CURRENCY,
            txntype: "",
            respcode: RESPCODE,
            respmsg: RESPMSG,
            gatewayName: GATEWAYNAME,
            paymentGateway: GATEWAYNAME,
            banktxnid: BANKTXNID,
            bankname: BANKNAME,
            paymentMode: paymentModeStatus,
            txnAmount: TXNAMOUNT,
            refundAmount: null,
            transactionId: TXNID,
            transactionDate: date,
            status: "Active",
        }
        console.log('newObj', JSON.stringify(newObj));
        await paymentModel.create(newObj);
        await accountService.createinvoice(ORDER_ID);
    } catch (error) {
        console.log('error', error);
    }
}

let oldPayToNew = async () => {
    paymentJSON.forEach(e => {
        migrateOldPayment({ ...e })
    });
}

// oldPayToNew();

module.exports = {
    getPlanList,
    getnotificationList,
    getAppData,
    getTransaction,
    getAppImagesTecSpec,
    getAppImagesConvertionTable,
    getPlanData,
    showPopup,
    migrateOldPayment
}