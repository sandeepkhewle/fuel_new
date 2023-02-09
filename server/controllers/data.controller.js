// packages
const express = require('express');
const router = express.Router();

// services
const dataService = require('../services/data.service');
const trendService = require('../services/trend.service');

// create new trend
router.post('/notificationList', (req, res) => {
    console.log('/data/notificationList');
    let data = req.body;
    dataService.getnotificationList(data).then((payload) => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": "Notification list fetched succesfully",
            "payload": payload
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": "Failed to fetch notification list"
        });
    })
})

// create plan list
router.post('/plaList', (req, res) => {
    console.log('/data/plaList');
    let data = req.body;
    dataService.getPlanList(data).then((payload) => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": "Plan list fetched succesfully",
            "payload": payload
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": "Failed to fetch plan list"
        });
    })
})

// get future trend
router.post('/future', (req, res) => {
    console.log('/data/future');
    let data = req.body;
    trendService.getFutureTrend(data).then((payload) => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": "Trend fetched successfully",
            "payload": payload
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": "Failed to fetch trend"
        });
    })
})

// get past trend
router.post('/past', (req, res) => {
    console.log('/data/past');
    let data = req.body;
    trendService.getPastTrend(data).then((payload) => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": "Trend fetched successfully",
            "payload": payload
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": "Failed to fetch trend"
        });
    })
})

// get app Data - (eg. messages and support numbrs)
router.post('/appData', (req, res) => {
    console.log('/data/appData');
    let data = req.body;
    let userId = req.user.userId;
    dataService.getAppData(userId, data).then((payload) => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": "App data fetched successfully",
            "payload": payload
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": "Failed to fetch app data"
        });
    })
})

// get member transaction
router.post('/transactions', (req, res) => {
    console.log('/data/transactions');
    let appId = req.user.appId;
    let userId = req.user.userId;
    dataService.getTransaction(userId, appId).then((payload) => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": "Transaction data fetched successfully",
            "payload": payload
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": "Failed to fetch transaction data"
        });
    })
})

module.exports = router;