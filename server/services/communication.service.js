// packages
const gcm = require('node-gcm');
const request = require('request');

// config
const senderId = require('../config/config').config.gcmServerKey;
const sender = new gcm.Sender(senderId);

// models
const userModel = require('../models/users.model');
const notificationModel = require('../models/notification.model');

let sendNotification = async ({ appId, catName, data, message, title, userId }) => {
    try {
        console.log("sendNotification", { appId, catName, data, message, title });
        let findObj = { token: { $exists: true, $ne: null } };
        if (appId) findObj.appId = appId;
        if (userId && userId.length > 0) findObj.userId = { $in: userId }
        if (catName == "Active Members") findObj.isActive = true;
        if (catName == "Inactive Members") findObj.isActive = false;
        // console.log('findObj', findObj);
        let mData = await userModel.aggregate([{ $match: findObj }, { $group: { _id: null, tokens: { $push: "$token" } } }]);
        // console.log('mData', JSON.stringify(mData));
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
        let totalUser = mData[0]?.tokens?.length || 0;
        // console.log('totalUser', totalUser);
        await notificationModel.create({ message: message, appId: appId, sentTo: totalUser, createdAt: new Date(), })
        let registrationTokens = mData[0]?.tokens || [];
        console.log('registrationTokens', registrationTokens);
        if (registrationTokens.length > 0) {
            sender.send(finalMessage, {
                registrationTokens: registrationTokens
            }, function (err, response) {
                if (err) {
                    console.log("error notify response " + err);
                    throw err;
                } else {
                    console.log('response', response);
                    return "Notification sent successfully";
                }
            })
        } else return "No user under this category";
    } catch (error) {
        console.log('error', error);
        throw "Unable to send notificatetion, something went wrong";
    }
}

// send notification
// let sendNotificationByUserId = async (userId, message) => {
//     try {
//         let uData = await userModel.findOne({ userId: userId });
//         let finalMessage = new gcm.Message({
//             priority: 'high',
//             contentAvailable: true,
//             badge: "+1",
//             notification: {
//                 title: "New Message",
//                 icon: "myicon",
//                 body: message
//             },
//             data: { message: message },
//             sound: 'default'
//         });
//         sender.send(finalMessage, {
//             registrationTokens: uData.token
//         }, function (err, response) {
//             if (err) {
//                 console.log("error notify response " + err);
//                 throw err;
//             } else {
//                 console.log('response', response);
//                 return;
//             }
//         })
//     } catch (error) {
//         throw error;
//     }
// }

// otp sms
let sendOtpSms = async (appId, phoneNo, otp) => {
    console.log('----- sendInnerSms ------   ', appId, phoneNo);
    let msg = encodeURIComponent(`Your FuelPreAlert OTP is ${otp}.`)
    let apiKey = encodeURIComponent("Nzk3OTRiNTA0NzQ0NzY2ODRkNjQ0YzM3NzIzMzZlNTk=")
    let url = `http://api.textlocal.in/send/?apikey=${apiKey}&sender=FuelPR&numbers=${phoneNo}&message=${msg}`;
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
    // sendNotificationByUserId: sendNotificationByUserId
}
