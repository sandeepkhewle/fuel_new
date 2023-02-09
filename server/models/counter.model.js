var mongoose = require('mongoose');

var counterSchema = mongoose.Schema({
    appId: { type: String, index: true, required: true },
    counterName: { type: String, index: true, required: true },
    counter: { type: Number, default: 0 },
    createdAt: Date,
    updatedAt: Date
});

module.exports = mongoose.model('counters', counterSchema);