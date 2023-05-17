var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    userId: { type: String, default: mongoose.Types.ObjectId, index: true, required: true, unique: true, auto: true },
    appId: { type: String, index: true, required: true },
    phoneNo: { type: String, index: true, required: true },
    fullName: { type: String, index: true, required: true, lowercase: true, trim: true },
    emailId: { type: String, index: true, lowercase: true, trim: true, sparse: true },
    referralCode: { type: String, uppercase: true, unique: true },
    referralPoints: { type: Number, default: 0 },
    referralHistory: [{
        
        userId: String,
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
    gstno: String,
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
});

userSchema.index({ appId: 1, deviceId: 1 }, { unique: true });
userSchema.index({ appId: 'text', phoneNo: 'text', fullName: 'text', emailId: 'text' })

module.exports = mongoose.model('users', userSchema);