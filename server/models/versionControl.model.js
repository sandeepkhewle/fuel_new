var mongoose = require('mongoose');

var versionControlSchema = mongoose.Schema({
    appId:String,
    androidVersion: String,
    iosVersion: String,
    createdAt: Date,
    updatedAt: Date
});

module.exports = mongoose.model('versionControls', versionControlSchema);
