const mongoose = require('mongoose');

var chatSchema = mongoose.Schema({
    appId: String,
    chatId: { type: String, default: mongoose.Types.ObjectId, index: true, required: true, auto: true },
    userId: { type: String, unique: true },
    fullName: String,
    adminId: String,
    status: { type: String, default: "Pending", enum: ["Pending", "Resolved"] },
    chatType: { type: String, default: "Hepldesk", enum: ["Hepldesk"] },
    chat: [{
        message: { type: String, default: "" },
        image: { type: String, default: "" },
        chatTime: { type: Date, default: new Date() },
        userFlag: String,
    }],
    userSocketId: String,
    createDate: { type: Date, default: new Date() },
    updateDate: { type: Date }
});

module.exports = mongoose.model('chats', chatSchema);
