// package
const moment = require('moment');
const CryptoJS = require("crypto-js");

//config
const passKey = require('../config/config').config.passKey;

// models
const usersModel = require('../models/users.model');
const adminModel = require('../models/admin.model');
const versionControlsModel = require('../models/versionControl.model')

// services
const commService = require('../services/communication.service');

let auth = async ({ phoneNo, password }) => {
    try {
        let uData = await adminModel.findOne({ phoneNo: phoneNo, password: CryptoJS.HmacSHA1(password, passKey).toString() })
        if (uData) return uData;
        else throw new Error("Admin login failed")
    } catch (error) {
        throw error;
    }
}

// send otp to any ptovided number
let sendOtp = async ({ appId, phoneNo }) => {
    try {
        // let otp = "1234";
        let otp = Math.floor(1000 + Math.random() * 9000);
        if (phoneNo === "1234567890") otp = "1234";
        let gData = await usersModel.findOneAndUpdate({ appId: appId, phoneNo: phoneNo }, { otp: otp, otpTime: new Date() }, { new: true, upsert: true, setDefaultsOnInsert: true });
        if (phoneNo != "1234567890") await commService.sendOtpSms(appId, phoneNo, otp)
        return;
    } catch (error) {
        throw error;
    }
}

// verify otp witin 10 minutes of the send time
let verifyOtp = async ({ appId, phoneNo, otp, deviceId }) => {
    try {
        let tenMinutErlTime = moment().subtract(10, 'minute');
        console.log('tenMinutErlTime', appId, phoneNo, otp, deviceId, new Date(tenMinutErlTime));
        let gData = await usersModel.findOneAndUpdate({ appId: appId, phoneNo: phoneNo, otp: otp, otpTime: { $gte: new Date(tenMinutErlTime) } }, { isOtpVerified: true, deviceId: deviceId }, { new: true })
            .select({ phoneNo: 1, userId: 1, appId: 1, phoneNo: 1, fullName: 1, companyName: 1, cdCounter: 1, cdStatus: 1, cpCounter: 1, declineStatus: 1, deviceId: 1, token: 1, isOtpVerified: 1, referralCode: 1, referralPoints: 1, firmName: 1, gstNumber: 1, emailId: 1 });
        // console.log({ gData });
        return gData;
    } catch (error) {
        console.log("error", error);
        if (error.codeName === 'DuplicateKey') {
            throw new Error("This device is already registered with another mobile number")
        }
        else throw error;
    }
}

// verify otp for accoutn deletion
let verifyOtpForAccountDeletion = async ({ appId, phoneNo, otp }) => {
    try {
        let tenMinutErlTime = moment().subtract(10, 'minute');
        console.log('tenMinutErlTime', appId, phoneNo, otp, new Date(tenMinutErlTime));
        let gData = await usersModel.findOneAndUpdate({ appId: appId, phoneNo: phoneNo, otp: otp, otpTime: { $gte: new Date(tenMinutErlTime) } }, { accDeletionRequestDate: new Date() }, { new: true })
        console.log({ gData });
        if (gData) return true
        else return false
    } catch (error) {
        console.log("error", error);
        if (error.codeName === 'DuplicateKey') {
            throw new Error("This device is already registered with another mobile number")
        }
        else throw error;
    }
}

// update token
let updateToken = async (userId, token) => {
    try {
        let uData = await usersModel.findOneAndUpdate({ userId: userId }, { token: token }, { new: true }).select({ phoneNo: 1, userId: 1, appId: 1, phoneNo: 1, fullName: 1, companyName: 1, cdCounter: 1, cdStatus: 1, cpCounter: 1, declineStatus: 1, deviceId: 1, token: 1, isOtpVerified: 1, referralCode: 1, referralPoints: 1, firmName: 1, gstNumber: 1, emailId: 1 });
        // console.log({ uData });
        return uData;
    } catch (error) {
        throw error;
    }
}

// check version update
let checkVersion = async (appId) => {
    try {
        let newData = await versionControlsModel.findOne({ appId })
        let vData;
        if (newData) vData = JSON.parse(JSON.stringify(newData));
        return vData;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    auth,
    sendOtp,
    verifyOtp,
    verifyOtpForAccountDeletion,
    updateToken,
    checkVersion
}