// packages
const gcm = require('node-gcm');
const request = require('request');

// config
const senderId = require('../config/config').config.gcmServerKey;
const sender = new gcm.Sender(senderId);

// models
const memberModel = require('../models/users.model');
const notificationModel = require('../models/notification.model');
const paymentModel = require('../models/payments.model');

let sendNotification = async ({ appId, category, data, message, title }) => {
    console.log("sendNotification", { appId, data, message, title });
    let findObj = {};
    if (appId) findObj.appId = appId;
    //"all members"
    if (category === "Active Members") {
        let pData = await paymentModel.aggregate([{ $match: { appId: appId, paymentStatus: "Success", startDate: { $lte: new Date() }, endDate: { $gte: new Date() } } }]);
    }

    let mData = await memberModel.aggregate([{ $match: findObj }, { $group: { _id: null, tokens: { $push: "$token" } } }]);
    console.log('mData', JSON.stringify(mData));
    let finalMessage = new gcm.Message({
        priority: 'high',
        contentAvailable: true,
        badge: "+1",
        notification: {
            title: title,
            icon: "myicon",
            body: message
        },
        data: data,
        sound: 'default'
    });
    let totalUser = 0;
    if (mData && mData[0] && mData[0].tokens) totalUser = mData[0].tokens.length;
    await notificationModel.create({ message: message, appId: appId, sentTo: totalUser, createdAt: new Date(), })
    let registrationTokens = mData[0].tokens;
    // registrationTokens.push(token);
    sender.send(finalMessage, {
        registrationTokens: registrationTokens
    }, function (err, response) {
        if (err) {
            console.log("error notify response " + err);
            throw err;
        } else {
            console.log('response', response);
            return;
        }
    })
}

// send notification
let sendNotificationByUserId = async (userId, message) => {
    try {
        let uData = await userModel.findOne({ userId: userId });
        let finalMessage = new gcm.Message({
            priority: 'high',
            contentAvailable: true,
            badge: "+1",
            notification: {
                title: "New Message",
                icon: "myicon",
                body: message
            },
            data: { message: message },
            sound: 'default'
        });
        sender.send(finalMessage, {
            registrationTokens: uData.token
        }, function (err, response) {
            if (err) {
                console.log("error notify response " + err);
                throw err;
            } else {
                console.log('response', response);
                return;
            }
        })
    } catch (error) {
        throw error;
    }
}

// otp sms
let sendOtpSms = async (appId, phoneNo, otp) => {
    console.log('----- sendInnerSms ------   ', appId, phoneNo);
    // get senderId from appId
    let senderId;
    let templateId;
    if (appId === 'msd') {
        senderId = 'MSHSDT';
        templateId = '1207162167923716557';
        message = `Your MSHSD Trends OTP is ${otp}`;
    }
    if (appId === 'lpg') {
        senderId = 'LPGTND';
        templateId = '1207162167929043047';
        message = `Your LPG Trends OTP is ${otp}`;
    }
    if (appId === 'bitumen') {
        senderId = 'BITMNT';
        templateId = '1207162167936396979';
        message = `Your BITUMEN Trends OTP is ${otp}`;
    }
    console.log('senderId', senderId);
    // message = encodeURIComponent(message);

    // let url = `http://bulksms.whizsoftwares.com/http-api.php?username=fuelpricealertindia&password=Whiz1234&senderid=${senderId}&route=5&number=${phoneNo}&message=${message}&templateid=${templateId}`

    // let message = `Dear Member, Your FYTRACK OTP is ${otp}`;
    // let senderId = 'FYTRAK';
    let msg = encodeURIComponent(message)
    let apiKey = encodeURIComponent("Nzk3OTRiNTA0NzQ0NzY2ODRkNjQ0YzM3NzIzMzZlNTk=")
    let url = `http://api.textlocal.in/send/?apikey=${apiKey}&sender=${senderId}&numbers=${phoneNo}&message=${msg}`;

    
    console.log('url', url);
    request({
        url: url,
        method: 'GET'
    }, function (error, response, body) {
        if (error) {
            console.log(error);
            throw error;
        } else {
            // console.log("===== " + JSON.stringify(response));
            console.log("===== " + response.statusCode, "  ---- " + body);
            return;
        }
    })
}

module.exports = {
    sendNotification: sendNotification,
    sendOtpSms: sendOtpSms,
    sendNotificationByUserId: sendNotificationByUserId
}
