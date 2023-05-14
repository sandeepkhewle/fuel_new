// packages
const express = require('express');
const router = express.Router();

// services
const accountService = require('../services/account.service');

// create new trend
router.post('/initiate', (req, res) => {
    console.log('/payment/initiate', req.body);
    let data = req.body;
    let userId = req.user.userId;
    let appId = req.user.appId;
    accountService.initiatePayment(appId, userId, data).then(payload => {
        res.render('pgredirect.ejs', {
            'restdata': payload
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": "Failed to initiate payment"
        });
    })
})

router.post('/calculateGst', (req, res) => {
    console.log("payment/calculateGst " + JSON.stringify(req.body));
    let data = req.body;
    accountService.calculateAmount(data).then((payload) => {
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