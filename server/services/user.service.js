// packages
const CryptoJS = require("crypto-js");
const moment = require("moment");
const unique = require("uniqid");

//config
const passKey = require('../config/config').config.passKey;

// models
const userModel = require('../models/users.model');
const paymenModel = require('../models/payments.model');
const versionControlsModel = require('../models/versionControl.model')

//services
const authService = require('../services/auth.service')

let makeid = async (length) => {
    var result = [];
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result.push(characters.charAt(Math.floor(Math.random() *
            charactersLength)));
    }
    return result.join('');
}

let registerNewUser = async ({ appId, fullName, phoneNo, emailId, deviceId, password }) => {
    try {
        let uData = await userModel.findOne({ appId: appId, phoneNo: phoneNo });
        if (uData) {
            if (uData.deviceId !== deviceId) throw new Error("This mobile number already registered with another device")
            else throw new Error("This mobile number already registerd")
        }
        let dataToSave = { appId: appId, phoneNo: phoneNo, fullName: fullName, createdAt: new Date() };
        // if (deviceId) dataToSave.deviceId = deviceId;
        if (emailId) dataToSave.emailId = emailId;
        if (password) dataToSave.password = CryptoJS.HmacSHA1(password, passKey).toString();
        let referralCode = await makeid(8);
        if (referralCode) dataToSave.referralCode = referralCode;
        userModel.create(dataToSave).then(data => {
            uData = data;
            if (uData) authService.sendOtp({ appId: 'fuel', phoneNo }).then(d1 => {
                console.log("Otp send successfully");
            })
        })
        let payObj = {
            "mailStatus": false,
            "paymentStatus": "Success",
            "appId": appId,
            "userId": uData?.userId,
            "planId": "trialPlan",
            "planName": "TRIAL PLAN",
            "planType": "TRIAL PLAN",
            "fullName": fullName,
            "emailId": emailId,
            "phoneNo": phoneNo,
            "date": new Date(),
            "updatedAt": new Date(),
            "createdAt": new Date(),
            "firmName": "",
            "invoiceNo": "10029",
            // do not delete - will be used in future to set free plan for 10 days
            "endDate": new Date(moment().add(60, 'days')),
            "startDate": new Date(),
            "discount": 0,
            "payableAmount": 0,
            "amount": 0,
            "cgst": 0,
            "sgst": 0,
            "paymentId": "trialPlan",
            "orderId": unique()
        }
        await paymenModel.create(payObj);
        return uData;
    } catch (error) {
        throw error;
    }
}

let checkDevice = async ({ appId, deviceId, token }) => {
    try {
        let uData = await userModel.findOneAndUpdate({ appId: appId, deviceId: deviceId }, { token: token, lastActive: new Date() }, { new: true }).select({ phoneNo: 1, userId: 1, appId: 1, phoneNo: 1, emailId: 1, fullName: 1, companyName: 1, cdCounter: 1, cdStatus: 1, cpCounter: 1, declineStatus: 1, deviceId: 1, token: 1, isOtpVerified: 1, referralCode: 1 });
        if (uData) {
            return uData;
        } else {
            throw new Error("No user found for this device.")
        }
    } catch (error) {
        throw error;
    }
}

let checkUser = async ({ appId, deviceId, phoneNo }) => {
    try {
        let uData = await userModel.findOne({ appId: appId, phoneNo: phoneNo });
        if (uData) {
            if (uData.deviceId !== deviceId)
                throw new Error("This mobile number already registered with another device");
            else return { message: "Mobile number and device matched" }
        } else {
            return { message: "No user found." }
        }
    } catch (error) {
        throw error;
    }
}

let changeDeviceRequest = async ({ appId, deviceId, phoneNo }) => {
    try {
        let uData = await userModel.findOneAndUpdate({ appId: appId, phoneNo: phoneNo }, { deviceId: deviceId, isOtpVerified: false, cdStatus: true, $inc: { cdCounter: 1 } });
        return;
    } catch (error) {
        throw error;
    }
}

let changeDeviceApprove = async ({ appId, phoneNo }) => {
    try {
        await userModel.findOneAndUpdate({ appId: appId, phoneNo: phoneNo }, { cdStatus: false });
        return;
    } catch (error) {
        throw error;
    }
}

let updateVersion = async ({ appId, androidVersion, iosVersion }) => {
    try {
        await versionControlsModel.findOneAndUpdate({ appId: appId }, { androidVersion: androidVersion, iosVersion: iosVersion }, { new: true, upsert: true });
        return;
    } catch (error) {
        throw error;
    }
}

let getUserActivePlans = async (userId) => {
    try {
        let userActivePlan = await paymenModel.aggregate([{
            $match: {
                userId, "paymentStatus": "Success", endDate: { $gte: new Date() }
            }
            // }, { $group: { _id: "$planForTrend", planData: { "$push": "$$ROOT" } } }
        }, { $group: { _id: "$planForTrend" } }])
        return userActivePlan;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    registerNewUser: registerNewUser,
    checkDevice: checkDevice,
    checkUser: checkUser,
    changeDeviceRequest: changeDeviceRequest,
    changeDeviceApprove: changeDeviceApprove,
    updateVersion: updateVersion,
    getUserActivePlans: getUserActivePlans
}