var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    userId: { type: String, default: mongoose.Types.ObjectId, index: true, required: true, unique: true, auto: true },
    appId: { type: String, index: true, required: true, default: "fuel" },
    phoneNo: { type: String, index: true, required: true, unique: true },
    fullName: { type: String, index: true, default: "guest", lowercase: true, trim: true },
    emailId: { type: String, index: true, lowercase: true, trim: true },
    firmName: String,
    referralCode: { type: String, uppercase: true, unique: true },
    referralPoints: { type: Number, default: 0 },
    referralHistory: [{
        userId: String, // referred by
        referralCode: String,
        referralPoints: Number,
        date: Date
    }],
    companyName: String,
    password: String,
    address: String,
    state: String,
    stateId: String,
    city: String,
    cityId: String,
    lastActive: { type: Date },
    gstNumber: String,
    isOtpVerified: { type: Boolean, default: false },
    otp: Number,
    otpTime: Date,
    deviceId: { type: String, default: mongoose.Types.ObjectId, index: true, required: true, auto: true },
    newDeviceId: String,
    token: String,
    cdCounter: { type: Number, default: 0 },
    cdStatus: { type: Boolean, default: false },
    cpCounter: { type: Number, default: 0 },
    declineStatus: { type: Number, default: 0 },
    createdAt: { type: Date, index: true },
    updatedAt: Date,
    isActive: { type: Boolean, default: false },
    accDeletionRequestDate: Date
});

userSchema.index({ appId: 1, deviceId: 1 }, { unique: true });
userSchema.index({ appId: 'text', phoneNo: 'text', fullName: 'text', emailId: 'text' })

module.exports = mongoose.model('users', userSchema);


// // Define a post-create hook
// userSchema.pre('save', function (doc, next) {
//     console.log('Document created and saved:', doc);

//     // Check if the document is new (being created) or being updated
//     if (doc.isNew) {
//         doc.referralCode = makeid(8)
//     }
//     next(); // Call next to proceed to the next middleware
// });

// function makeid(length) {
//     let result = '';
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//     const charactersLength = characters.length;
//     let counter = 0;
//     while (counter < length) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//         counter += 1;
//     }
//     return result;
// }