let mongoose = require('mongoose');

let trendsSchema = mongoose.Schema({
    appId: { type: String, index: true, required: true },
    trendsId: { type: String, default: mongoose.Types.ObjectId, index: true, required: true, unique: true, auto: true },
    trendType: String,
    validFrom: Date,
    validThrough: Date,
    trendDate: Date,
    trendUnite: String,
    ms: String,
    hsd: String,
    fourteenKg: String,
    nineteenKg: String,
    bitumen: String,
    furnaceOil: String,
    ldo: String,
    createdAt: { type: Date },
    updatedAt: Date
})

trendsSchema.index({ appId: 'text' })

module.exports = mongoose.model('trends', trendsSchema);