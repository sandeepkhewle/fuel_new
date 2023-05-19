const mongoose = require('mongoose');

const appDataSchema = mongoose.Schema({
    appId: { type: String, index: true, unique: true },
    supportNumber: String,
    whatsAppNumber: String,
    message1: String,
    message2: String,
    message3: String,
    message4: String,
    message5: String,
    message6: String,
    referral: String
})

module.exports = mongoose.model('appdatas', appDataSchema)