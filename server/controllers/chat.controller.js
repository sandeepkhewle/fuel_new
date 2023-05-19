// packages
const chatModel = require('../models/chat.model');
const adminModel = require('../models/admin.model');
const userModel = require('../models/users.model');
const moment = require('moment');


// services
const commService = require('../services/communication.service');
const usersModel = require('../models/users.model');

console.log('tets------------');
module.exports.dummy = (socket_io) => {
    console.log('socket_io', socket_io.id);

    // update admnisocket id in admin table
    socket_io.on('adminSocket', async (data) => {
        console.log("adminSocket", { data });
        await adminModel.findOneAndUpdate({ adminUserId: data.adminUserId }, { adminSocketId: socket_io.id }, { new: true })
    });

    // update user scoket id in chat table
    socket_io.on('userSocket', async (data, callback) => {
        console.log("userSocket", data);
        let uData = await usersModel.findOne({ userId: data.userId });

        chatModel.findOneAndUpdate({ userId: data.userId }, { userSocketId: socket_io.id, $setOnInsert: { createDate: new Date(), fullName: uData.fullName, appId: uData.appId } }, { new: true, upsert: true }).then(data => {
            console.log('data', data.chat);
            callback(data);
        }).catch(err => {
            callback({ error: err.message })
        })
    });

    // update user scoket id in chat table
    socket_io.on('getChat', (data, callback) => {
        console.log("getChat", { data });
        chatModel.findOne({ userId: data.userId }).then(data => {
            if (data.chat.length > 0) {
                data.chat.forEach(e1 => {
                    if (e1.chatTime) {
                        let newDate = e1.chatTime.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })
                        e1.chatTime = new Date(newDate)
                    }
                });
            }
            callback(data.chat);
        }).catch(err => {
            callback({ error: err.message })
        })
    });

    // user to send message to admin
    socket_io.on('message', async (data) => {
        console.log("message", { data });
        await chatModel.findOneAndUpdate({ userId: data.userId }, {
            userSocketId: socket_io.id, status: "Pending", updateDate: new Date(), $push: { chat: { message: data.message, userFlag: "User", chatTime: new Date() } }
        }, { new: true, upsert: true })
        // console.log("cData", cData);
        // let socketId = cData.userSocketId;
        let aData = await adminModel.findOne({});
        socket_io.to(aData.adminSocketId).emit('message', { "userId": data.userId, "message": data.message, "userFlag": "User", "chatTime": new Date() });
    });

    // admin to send message to user
    socket_io.on('reply', async (data, callback) => {
        console.log("reply", { data });
        let cData = await chatModel.findOneAndUpdate({ userId: data.userId }, {
            status: "Resolved",
            $push: { chat: { message: data.message, userFlag: "Admin", chatTime: new Date() } }
        }, { new: true, upsert: true })
        socket_io.to(cData.userSocketId).emit('reply', { "userFlag": "Admin", "message": data.message, "chatTime": new Date() });
        // commService.sendNotificationByUserId(data.userId, data.message);
        callback(cData.chat)
    });
}
