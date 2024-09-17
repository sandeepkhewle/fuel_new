require('dotenv')
const uniqid = require('uniqid');
const Razorpay = require('razorpay');
const cryptoJS = require("crypto-js");

const apiKey = process.env.RAZORPAYAPIKEY ? process.env.RAZORPAYAPIKEY : "rzp_live_GguHJ2MtIeI3bX";
const secretKey = process.env.RAZORPAYSECRETKEY ? process.env.RAZORPAYSECRETKEY : "3pApidmx0pOCtYjksdHGdIXt";

const instance = new Razorpay({
    key_id: apiKey,
    key_secret: secretKey
});


const createOrder = async ({ amount, currency }) => {
    try {
        let options = {
            amount: Number(amount * 100),  // amount in the smallest currency unit
            currency: currency ? currency : "INR",
            receipt: uniqid()
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