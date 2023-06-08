// packages
const express = require('express');
const router = express.Router();
const fs = require('fs');

// services
const structureService = require('../services/structure.service');
const tableSerivce = require('../services/tableService');
const importExportExcelService = require('../services/importExportExcelService');
const communicationService = require('../services/communication.service');

router.post('/getSideNav', (req, res) => {
    console.log('/structure/getSideNav', req.body);
    structureService.getSideNav().then((payload) => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": "sidenav successful",
            "payload": payload
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": "Failed to fetch sidenav"
        });
    })
})

//  get filters for any page by passing page name to structure serice
router.post('/getFilters', (req, res, next) => {
    console.log("/structure/getFilters" + JSON.stringify(req.body));
    let data = req.body;
    structureService.getFilters(data).then((data) => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "Status": "Success",
            "Message": "Filter Success",
            "data": data
        });
    }).catch(err => {
        console.log(TAG, 'err', err);
        res.status(res.statusCode).send({
            "statusCode": "001",
            "Status": "Success",
            "Message": "Failed to fetch filters"
        });
    });
})

// get table data of any page by sending page name
router.post('/table', function (req, res, next) {
    console.log("/structure/table", (req.body));
    tableSerivce.chooseTable(req.body.page, req).then((data) => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "Status": "Success",
            "Message": "list Success",
            "count": data.count,
            "data": data.userData,
            "attributeList": data.attributeList,
            "total1": data.total1,
            "total2": data.total2
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "Status": "Failed",
            "Message": "Something went wrong"
        })
    })
})

// get table data of any page by sending page name
router.post('/exportExcel', function (req, res, next) {
    console.log("/structure/exportExcel ------ ", (req.body));
    importExportExcelService.exportExcel(req.body.page, req).then((fileToSend) => {
        try {
            // console.log('fileToSend', fileToSend);
            var file = fs.readFileSync(fileToSend, 'binary');
            // res.setHeader('Content-Length', file.size);
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            res.setHeader('Content-Disposition', `attachment; filename=${req.body.page}.xlsx`);
            res.write(file, 'binary');
            res.end();
            importExportExcelService.deleteFile(fileToSend);
        } catch (error) {
            console.log('error', error);
        }
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "Status": "Failed",
            "Message": "Something went wrong"
        })
    })
})

// get list of available reports
router.post('/reportList', function (req, res, next) {
    console.log("/structure/reportList---", (req.body));
    let role = req.user?.role;
    let type = req.body?.type;
    structureService.getReportList(role, type).then((data) => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "Status": "Success",
            "Message": "Report list fetched succesfully",
            "data": data
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "Status": "Failed",
            "Message": "Failed to fetch report list succesfully"
        })
    })
})


// test notification 
router.post('/sendNotification', (req, res) => {
    console.log('/structure/sendNotification', req.body);
    let userId = req.user.userId;
    console.log({userId});
    let title = req.body.title;
    let message = req.body.message;
    communicationService.sendNotification("fuel", null, message, title, [userId]).then((message) => {
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
            "message": "Failed to fetch app Images data"
        });
    })
})

module.exports = router;