var mongoose = require('mongoose');

var paymentSchema = mongoose.Schema({
  appId: { type: String, index: true, required: true },
  orderId: { type: String, unique: true, index: true },
  userId: String,
  planId: String,
  planName: { type: String, index: true },
  planType: String,
  planForTrend: String,
  amount: Number,
  discount: Number,
  tax: Number,
  cgst: Number,
  sgst: Number,
  igst: Number,
  payableAmount: Number,     // total amount
  gstNumber: { type: String, index: true },
  date: { type: Date },
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
  createdAt: Date,
  link: String,
  referralCode: String,

  // paytm data
  currency: String,
  txntype: String,
  respcode: String,
  respmsg: String,
  gatewayName: String,
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