// packages
const gcm = require('node-gcm');
const request = require('request');

// config
const senderId = require('../config/config').config.gcmServerKey;
const sender = new gcm.Sender(senderId);

// models
const userModel = require('../models/users.model');
const notificationModel = require('../models/notification.model');

let sendNotificationOld = async ({ appId, catName, data, message, title, userId }) => {
    try {
        console.log("sendNotificationOld", { appId, catName, data, message, title });
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
        if (registrationTokens.length > 0) {
            let it = parseInt(registrationTokens.length / 1000) + 1;
            let promiseArray = []
            for (let i = 0; i < it; i++) {
                let subToken = registrationTokens.slice(i * 1000, ((i + 1) * 1000) - 1);
                promiseArray.push(sendBulkNotification(finalMessage, subToken));
            }
            Promise.all(promiseArray).then(() => {
                console.log('All Notofication Sent');
                return "Notification sent successfully";
            });
        } else return "No user under this category";
    } catch (error) {
        console.log('error', error);
        throw "Unable to send notificatetion, something went wrong";
    }
}

// send notification
const sendBulkNotification = async (finalMessage, registrationTokens) => {
    try {
        console.log('------sendBulkNotification-------');
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
        } else return;
    } catch (error) {
        throw error;
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

const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
const serviceAccount = require("../json/fuel-price-alert-firebase-adminsdk-244pv-b46b94b590.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const sendFirebaseNotification = async () => {
    console.log("sendFirebaseNotification---------");

    // const registrationToken = "fyBLsxL5RcCDgxoeHwsid3:APA91bEnO6XRcRGZG41iWTtnNKCk33BIN8sNz2Exkk1mzUErKifYuRViXtAFsLNwbC0xGpRZJEKq5DDzh5Sa34HH0Rj1Y8wf3H5xa7VaCmH-DBmvCzoOgaYhS8ALpQ6KpAhfd6AZkybT"; // Replace with the FCM token of the Android device
    const registrationToken = "fyBLsxL5RcCDgxoeHwsid3:APA91bEnO6XRcRGZG41iWTtnNKCk33BIN8sNz2Exkk1mzUErKifYuRViXtAFsLNwbC0xGpRZJEKq5DDzh5Sa34HH0Rj1Y8wf3H5xa7VaCmH-DBmvCzoOgaYhS8ALpQ6KpAhfd6AZkybT"; // Replace with the FCM token of the Android device

    // // Verify a Firebase ID token
    // admin.auth().verifyIdToken(registrationToken)
    //     .then((decodedToken) => {
    //         console.log({ decodedToken });
    //     })
    //     .catch((error) => {
    //         console.log({ error });
    //     });


    const message = {
        notification: {
            title: "Hello from FCM",
            body: "This is a test notification",
        },
        data: {
            key1: "value1", // Optional custom data
            key2: "value2",
        },
        token: registrationToken,
    };

    try {
        const response = await admin.messaging().send(message);
        console.log("Successfully sent notification:", response);
    } catch (error) {
        console.error("Error sending notification:", error);
    }
};
// sendFirebaseNotification();


let sendNotification = async ({ appId, catName, data, message, title, userId }) => {
    try {
        console.log("sendNotification", { appId, catName, data, message, title });

        // Build the query to find users
        let findObj = { token: { $exists: true, $ne: null } };
        if (appId) findObj.appId = appId;
        if (userId && userId.length > 0) findObj.userId = { $in: userId };
        if (catName === "Active Members") findObj.isActive = true;
        if (catName === "Inactive Members") findObj.isActive = false;

        // Fetch user tokens
        let mData = await userModel.aggregate([
            { $match: findObj },
            { $group: { _id: null, tokens: { $push: "$token" } } },
        ]);

        let totalUser = mData[0]?.tokens?.length || 0;

        // Log and create notification record in the database
        console.log("Total Users to Notify:", totalUser);
        await notificationModel.create({
            message,
            appId,
            sentTo: totalUser,
            createdAt: new Date(),
        });

        let registrationTokens = mData[0]?.tokens || [];

        if (registrationTokens.length > 0) {
            // Split tokens into chunks of 500 (FCM limit)
            let chunkSize = 500;
            let messagePayload = [];
            let batch = 0;

            for (let i = 1; i <= registrationTokens.length; i++) {
                // console.log({ i });
                let messageBody = {
                    notification: {
                        title,
                        body: message,
                    },
                    data: data || {}, // Optional custom data
                    token: registrationTokens[i],
                };
                messagePayload.push(messageBody);
                if (i % chunkSize === 0 || i === totalUser) {
                    console.log("batch", ++batch, "total records processed", i);
                    // console.log("messagePayload", i, '===', totalUser - 1, JSON.stringify(messagePayload));
                    try {
                        const response = await admin.messaging().sendEach(messagePayload);
                        console.log(
                            `Successfully sent to ${response.successCount} devices, ${response.failureCount} failed`
                        );
                        messagePayload = [];
                        // return response;
                    } catch (error) {
                        console.error("Error sending notification:", error);
                        throw error;
                    }
                }
            }

            console.log("All Notifications Sent");
            return "Notifications sent successfully";
        } else {
            return "No user under this category";
        }
    } catch (error) {
        console.error("Error in sendNotification:", error);
        throw "Unable to send notification, something went wrong";
    }
};

module.exports = {
    sendNotificationOld: sendNotificationOld,
    sendNotification: sendNotification,
    sendOtpSms: sendOtpSms,
    // sendNotificationByUserId: sendNotificationByUserId
    // sendFirebaseNotification: sendFirebaseNotification
}
