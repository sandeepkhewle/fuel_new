var mongoose = require('mongoose');

var paymentSchema = mongoose.Schema({
  appId: { type: String, index: true, required: true },
  orderId: { type: String, unique: true, index: true },
  userId: String,
  planId: String,
  planName: { type: String, index: true },
  planType: String,
  planForTrend: String,
  amount: { type: Number, default: 0 },
  discount: { type: Number, default: 0 },
  tax: { type: Number, default: 0 },
  cgst: { type: Number, default: 0 },
  sgst: { type: Number, default: 0 },
  igst: { type: Number, default: 0 },
  payableAmount: { type: Number, default: 0 },     // total amount
  gstNumber: { type: String, index: true },
  date: { type: Date, default: new Date() },
  startDate: Date,
  endDate: Date,
  // validity: Date,
  state: String,
  invoiceNo: { type: String, index: true },
  fullName: { type: String, index: true },
  emailId: { type: String, index: true },
  mailStatus: { type: Boolean, default: false },
  phoneNo: { type: String, index: true },
  mihpayId: String,
  txnId: String,
  key: String,
  productInfo: String,
  serviceProvider: String,
  firmName: String,
  packageName: String,
  paymentStatus: { type: String, default: 'Pending', enum: ['Pending', 'Success', 'Cancled', 'Failed', 'Blocked'] }, // 'Success'or Failed
  updatedAt: Date,
  createdAt: { type: Date, default: new Date() },
  link: String,
  referralCode: String,
  referralPoints: Number,

  // paytm data
  currency: String,
  txntype: String,
  respcode: String,
  respmsg: String,
  gatewayName: String,
  paymentGateway: { type: String, default: "paytm" },
  banktxnid: String,
  bankname: String,
  paymentMode: String,
  txnAmount: String,
  refundAmount: String,
  transactionId: String,
  transactionDate: String,
  status: String,
});

paymentSchema.index({ invoiceNo: 'text', fullName: 'text', emailId: 'text', phoneNo: 'text' })

module.exports = mongoose.model('payments', paymentSchema);