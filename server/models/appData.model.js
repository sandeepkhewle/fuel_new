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
    message7: String,
    message8: String,
    referral: String,
    showPopup: { type: Boolean, default: true },
    popupMessage: { type: String, default: "Welcome to Fuel Price Alert /n You can check upcoming fuel trends by clicking check trends button." }
})

module.exports = mongoose.model('appdatas', appDataSchema)