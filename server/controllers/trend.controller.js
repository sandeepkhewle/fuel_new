// packages
const express = require('express');
const router = express.Router();

// services
const trendService = require('../services/trend.service');

// create new trend
router.post('/create', (req, res) => {
    console.log('/trend/create', req.body);
    let data = req.body;
    trendService.createNewTrend(data).then(() => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": "Trend added successfully"
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": "Failed to add trend"
        });
    })
})

// update trend
router.post('/update', (req, res) => {
    console.log('/trend/update');
    let data = req.body;
    trendService.updateTrend(data).then(() => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": "Trend updated successfully"
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": "Failed to add trend"
        });
    })
})

// delete trend
router.post('/delete', (req, res) => {
    console.log('/trend/delete');
    let data = req.body;
    trendService.deleteTrend(data).then(() => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": "Trend deleted successfully"
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": "Failed to delete trend"
        });
    })
})

module.exports = router;