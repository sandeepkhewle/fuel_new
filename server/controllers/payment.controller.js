// packages
const express = require('express');
const router = express.Router();

// services
const accountService = require('../services/account.service');

// create new trend
router.post('/initiate', (req, res) => {
    console.log('/payment/initiate', req.body);
    let data = req.body;
    let paymentGateway = req.body.paymentGateway ? req.body.paymentGateway : 'paytm';
    let userId = req.user.userId;
    let appId = req.user.appId;
    accountService.initiatePayment(appId, userId, data).then(payload => {
        if (paymentGateway === "razorpay") {
            res.render('razorpay.ejs', {
                'restdata': payload
            });
        }
        else {
            res.render('pgredirect.ejs', {
                'restdata': payload
            });
        }
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": "Failed to initiate payment"
        });
    })
})

// calculate GST and discount on referral code 
router.post('/calculateGst', (req, res) => {
    console.log("/payment/calculateGst " + JSON.stringify(req.body));
    let user = req.user;
    let data = req.body;
    accountService.calculateAmount(user, data).then((payload) => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": "Calculate Gst successful",
            "payload": payload
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": "Unable to Calculate Gst"
        });
    })
})

module.exports = router;