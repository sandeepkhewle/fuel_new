let mongoose = require('mongoose');

let trendsSchema = mongoose.Schema({
    // appId: { type: String, index: true, required: true },
    trendsId: { type: String, default: mongoose.Types.ObjectId, index: true, required: true, unique: true, auto: true },
    trendName: { type: String, enum: ['fortnight', 'monthly'] },
    trendType: { type: String, enum: ["bitumen", "furnaceOil", "hsd", "ldo", "lpg", "mto", "hexane", "kerosene"] },
    validFrom: Date,
    validThrough: Date,
    trendDate: Date,
    trendUnite: String,
    trendValue: Number,
    productName: {
        type: String,
        // enum: ["BITUMEN", "FURNACEOIL", "HSD(INSTITUTIONAL)", "LDO", "LPG/GAS CYL (DOM)", "LPG/GAS CYL (NON-DOM)", "MTO", "HEXANE", "KEROSENE"]
    },
    // bitumen: String,
    // furnaceOil: String,
    // hsd: String,
    // ldo: String,
    // lpg_Dom: String,
    // lpg_nonDom: String,
    // mto: String,
    // hexane: String,
    // kerosene: String,
    trend: String,
    createdAt: { type: Date, default: new Date() },
    updatedAt: Date
})

trendsSchema.index({ appId: 'text' })

module.exports = mongoose.model('trends', trendsSchema);