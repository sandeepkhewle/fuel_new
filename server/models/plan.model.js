var mongoose = require('mongoose');

var planSchema = mongoose.Schema({
    planId: { type: String, default: mongoose.Types.ObjectId, index: true, required: true, unique: true, auto: true },
    planName: String,
    planForTrend: String,
    description: String,
    appId: String,
    duration: Number, // validity in months
    planType: { type: String, enum: ['Monthly', 'Yearly'] },
    validUptoDay: Number,  // till what day of month the plan will be valid
    actualPlanCost: Number, // final plan cost
    planCost: Number, // final plan cost
    amount: Number, // base plan cost
    discountedPrice: { type: Number, deflaut: 0 },
    discountedPercent: { type: Number, deflaut: 0 },
    sgst: Number, // percentage
    cgst: Number, // percentage
    igst: Number, // percentage
    planStatus: { type: String, default: 'Active', enum: ['Active', 'Inactive'] },
    createdAt: Date,
    updatedAt: Date
});

module.exports = mongoose.model('plans', planSchema);

