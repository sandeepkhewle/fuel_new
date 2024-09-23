require('dotenv')
const uniqid = require('uniqid');
const Razorpay = require('razorpay');
const cryptoJS = require("crypto-js");

const config = require('../config/config').config;

let apiKey = config.razorpaykey;
let secretKey = config.razorpaySecret;

const instance = new Razorpay({
    key_id: apiKey,
    key_secret: secretKey
});


const createOrder = async ({ amount, currency, receipt }) => {
    try {
        console.log("razorpay createOrder-----", amount, currency);

        let options = {
            amount: Number(amount * 100),  // amount in the smallest currency unit
            currency: currency ? currency : "INR",
            receipt: receipt
        };
        return await instance.orders.create(options);
    } catch (error) {
        throw error;
    }
}

const checkPayment = ({ orderId, razorpayPaymentId, razorpaySignature }) => {
    try {
        let generatedSignature = cryptoJS.HmacSHA256(orderId + "|" + razorpayPaymentId, secretKey);
        if (generatedSignature == razorpaySignature) return true;
        else return false;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createOrder,
    checkPayment
}