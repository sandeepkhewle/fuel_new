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
    let userId = req.user.userId
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
    console.log('/data/past', req.body);
    let data = req.body;
    let userId = req.user.userId
    trendService.getPastTrend(data, userId).then((payload) => {
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
    console.log('/data/transactions', req.body);
    let appId = req.body.appId;
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

// get member Plans
router.post('/myPlans', (req, res) => {
    console.log('/data/myPlans', req.body);
    let appId = req.body.appId;
    let userId = req.user.userId;
    dataService.getPlanData(userId, appId).then((payload) => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": "Plans data fetched successfully",
            "payload": payload
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": "Failed to fetch plans data"
        });
    })
})

// get past trend
router.post('/pastFortnight', (req, res) => {
    console.log('/data/pastFortnight');
    let data = req.body;
    let userId = req.user.userId
    trendService.getPastFortnightTrend(userId).then((payload) => {
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

// Get APP Images data 
router.post('/appImagesTecSpec', (req, res) => {
    console.log('/data/appImagesTecSpec', req.body);
    let imageName = req.body.name
    dataService.getAppImagesTecSpec(imageName).then((payload) => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": "App Images data fetched successfully",
            "payload": payload
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": "Failed to fetch app Images data"
        });
    })
})

// Get APP Images data 
router.get('/appImagesConvertionTable', (req, res) => {
    console.log('/data/appImagesConvertionTable');
    dataService.getAppImagesConvertionTable().then((payload) => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": "App Images data fetched successfully",
            "payload": payload
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": "Failed to fetch app Images data"
        });
    })
})

// App URl 
router.get('/otherUrl', (req, res) => {
    console.log('/data/otherUrl');
    res.status(res.statusCode).send({
        "statusCode": "001",
        "status": "Success",
        "converationTable": "https://fytrackstorage.s3.ap-south-1.amazonaws.com/fitness/fitness/admin/ikjs5jwu9m85n/Admin.jpg",
        "aboutUs": "https://api.fuelpricealert.in/privacyPolicy",
        "contactUs": "https://api.fuelpricealert.in/privacyPolicy",
        "disclaimer": "https://api.fuelpricealert.in/privacyPolicy",
        "howItWork": "https://api.fuelpricealert.in/privacyPolicy",
        "termAndCondition": "https://api.fuelpricealert.in/privacyPolicy",
        "rateUs": "https://play.google.com/store/apps/details?id=io.FuelPreAlert.org"
    });
})

// Get APP Images data 
router.get('/popup', (req, res) => {
    console.log('/data/popup');
    let userId = req.user.userId;
    dataService.showPopup(userId).then((payload) => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": "App Images data fetched successfully",
            "payload": payload
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": "Failed to fetch app Images data"
        });
    })
})

module.exports = router;