var mongoose = require('mongoose');

var adminSchema = mongoose.Schema({
    adminUserId: { type: String, default: mongoose.Types.ObjectId, index: true, required: true, auto: true },
    phoneNo: { type: String, required: true, unique: true, trim: true },
    fullName: { type: String, required: true, lowercase: true, trim: true },
    password: String,
    createdAt: { type: Date },
    adminSocketId: String,
    updatedAt: Date
});

module.exports = mongoose.model('admins', adminSchema);