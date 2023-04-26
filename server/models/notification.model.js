const mongoose = require('mongoose');

let notificationSchema = mongoose.Schema({
    notificationId: { type: String, default: mongoose.Types.ObjectId, index: true, required: true, unique: true, auto: true },
    message: String,
    appId: String,
    userId: String,
    category: String,
    notificationTitle: String,
    sentTo: Number,
    createdAt: Date,
    title: String,
    updatedAt: Date
})

module.exports = mongoose.model('notifications', notificationSchema)