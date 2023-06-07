// packages
const express = require('express');
const router = express.Router();

// services
const communicationService = require('../services/communication.service');
const adminService = require('../services/admin.service');
const accountService = require('../services/account.service');

// create new trend
router.post('/sendNotification', (req, res) => {
    console.log('/admin/sendNotification', req.body);
    let data = req.body;
    communicationService.sendNotification(data).then(message => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": message
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": "Failed to send notifiaction"
        });
    })
})

// create new plan
router.post('/createPlan', (req, res) => {
    console.log('/admin/createPlan', req.body);
    let data = req.body;
    adminService.createPlan(data).then((payload) => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": payload.message
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": "Failed to add plan"
        });
    })
})

// get plan list
router.post('/getPlans', (req, res) => {
    console.log('/admin/getPlans');
    adminService.getPlanList().then((payload) => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": "Plan list fetched successfully",
            "payload": payload
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": "Failed to get plan list"
        });
    })
})

// update app data
router.post('/updateAppData', (req, res) => {
    console.log('/admin/updateAppData', req.body);
    let data = req.body;
    adminService.addUpdateAppData(data).then((payload) => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": "App data updated successfully"
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": "Failed to update add data"
        });
    })
})

// Get app data
router.post('/getAppData', (req, res) => {
    console.log('/admin/getAppData');
    let data = req.body;
    adminService.getAppData(data).then((payload) => {
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

// add new counter
router.post('/addCounter', (req, res) => {
    console.log('/admin/addCounter');
    let data = req.body;
    adminService.createCounter(data).then((payload) => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": "New counter created successfully",
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

// desktop summary
router.post('/summary', (req, res) => {
    console.log('/admin/summary');
    let data = req.body;
    adminService.dashBoardSummary(data).then((payload) => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": "Summary success",
            "payload": payload
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": "Failed to fetch summary"
        });
    })
})

// desktop summary
router.post('/assignPlanManually', (req, res) => {
    console.log('/admin/assignPlanManually');
    let data = req.body;
    accountService.assignFreePlan(data).then(() => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": "Plan assigned success"
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": "Failed to assigne plan"
        });
    })
})

router.post('/getPlanListByTreads', (req, res) => {
    console.log('/admin/getPlanListByTreads', req.body);
    let planForTrend = req.body.trendName;
    adminService.getPlanListByTreads(planForTrend).then((payload) => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": "Plan list fetched successfully",
            "payload": payload
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": "Failed to get plan list"
        });
    })
})

router.post('/getUserDetials', (req, res) => {
    console.log('/admin/getUserDetials', req.user);
    let userId = req.user.userId;
    adminService.getUserDetials(userId).then((payload) => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": "Plan list fetched successfully",
            "payload": payload
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": "Failed to get plan list"
        });
    })
})

module.exports = router;