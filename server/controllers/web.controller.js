// packages
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// config
const jwtSecret = require('../config/config').config.jwtSecret;

// services
const authhService = require('../services/auth.service');
const userService = require('../services/user.service');
const adminService = require('../services/admin.service');
const accountService = require('../services/account.service');

// serve static html pages
router.get('/disclaimer.html', function (req, res) { res.render('disclaimer.html') });
router.get('/terms.html', function (req, res) { res.render('terms.html') });

router.get('/msd/privacy.html', function (req, res) { res.render('privacy.html') });
router.get('/lpg/privacy.html', function (req, res) { res.render('lpgprivacy.html') });
router.get('/bitumen/privacy.html', function (req, res) { res.render('bitumenprivacy.html') });

//-----------admin api-----------

// admin register
router.post('/adminRegister', (req, res) => {
    console.log('/web/adminRegister', req.body);
    let data = req.body;
    adminService.registerAdmin(data).then((payload) => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": "Admin registerd successfully",
            "payload": payload
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": err.message
        });
    })
})

// admin login 
router.post('/adminLogin', (req, res) => {
    console.log('/web/adminLogin', req.body);
    let data = req.body;
    let payload;
    authhService.auth(data).then((userData) => {
        try {
            payload = JSON.parse(JSON.stringify(userData));
            let token = jwt.sign(payload, jwtSecret, {
                expiresIn: 86400 // expires in one day
            });
            return token;
        } catch (error) {
            throw new Error("Failed")
        }
    }).then((tokenData) => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": "Admin verification success",
            "payload": payload,
            "jwt": tokenData
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": err.message
        });
    })
})

//-----------end admin api-----------

// register member
router.post('/registerMember', (req, res) => {
    console.log('/web/registerMember', req.body);
    let data = req.body;
    userService.registerNewUser(data).then((data) => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": "Member registerd successfully",
            "payload": data
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": err.message
        });
    })
})

// send otp to phone numner
router.post('/sendOtp', (req, res) => {
    console.log('/web/sendOtp', req.body);
    let data = req.body;
    authhService.sendOtp(data).then(() => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": "OTP sent successfully"
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": "Failed to send otp"
        });
    })
})

// verify otp 
router.post('/verifyOtp', (req, res) => {
    console.log('/web/verifyOtp', req.body);
    let data = req.body;
    let payload;
    authhService.verifyOtp(data).then((userData) => {
        if (userData) {
            try {
                payload = JSON.parse(JSON.stringify(userData));
                let token = jwt.sign(payload, jwtSecret, {
                    expiresIn: 32000000 // expires in one year
                });
                return token;
            } catch (error) {
                console.log("error", error);
                throw new Error("Failed")
            }
        } else {
            throw new Error("Please enter a valid OTP");
        }
    }).then((tokenData) => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": "OTP verification success",
            "payload": payload,
            "jwt": tokenData
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": err.message
        });
    })
})

// // Update Token 
// router.post('/updateToken', (req, res) => {
//     console.log('/web/updateToken', req.body);
//     let userId = req.body.userId;
//     let token = req.body.token;
//     let payload;
//     authhService.updateToken(userId, token).then((userData) => {
//         try {
//             payload = JSON.parse(JSON.stringify(userData));
//             let token = jwt.sign(payload, jwtSecret, {
//                 expiresIn: 32000000 // expires in one year
//             });
//             return token;
//         } catch (error) {
//             throw new Error("Failed")
//         }
//     }).then((tokenData) => {
//         res.status(res.statusCode).send({
//             "statusCode": "001",
//             "status": "Success",
//             "message": "OTP verification success",
//             "payload": payload,
//             "jwt": tokenData
//         });
//     }).catch(err => {
//         console.log('err', err);
//         res.status(res.statusCode).send({
//             "statusCode": "002",
//             "status": "Failed",
//             "message": err.message
//         });
//     })
// })

// check device 
router.post('/checkDevice', (req, res) => {
    console.log('/web/checkDevice', req.body);
    let data = req.body;
    let payload;
    userService.checkDevice(data).then((userData) => {
        try {
            payload = JSON.parse(JSON.stringify(userData));
            let token = jwt.sign(payload, jwtSecret, {
                expiresIn: 32000000 // expires in one year
            });
            return token;
        } catch (error) {
            throw new Error("Failed")
        }
    }).then((tokenData) => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": "Device found",
            "payload": payload,
            "jwt": tokenData,
            "version": { android: { versionNo: "1.0", force: false }, ios: { versionNo: "1.0", force: false } }
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": err.message
        });
    })
})

// check user by mobile number 
router.post('/checkUser', (req, res) => {
    console.log('/web/checkUser', req.body);
    let data = req.body;
    userService.checkUser(data).then((payload) => {
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
            "message": err.message
        });
    })
})

// add or update version update
router.post('/updateVersion', (req, res) => {
    console.log('/web/updateVersion', req.body);
    let body = req.body;
    userService.updateVersion(body).then(payload => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": "Version update success",
            "payload": payload
        });
    }).catch(error => {
        console.log('error', error);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": "Version update Failed"
        });
    })
});

// check app version update
router.post('/checkVersion', (req, res) => {
    console.log('/web/checkVersion', req.body);
    let appId = req.body.appId;
    authhService.checkVersion(appId).then(payload => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": "Version check success",
            "payload": payload
        });
    }).catch(error => {
        console.log('error', error);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": "Version check Failed"
        });
    })
});

// change device request 
router.post('/changeDevice', (req, res) => {
    console.log('/web/changeDevice', req.body);
    let data = req.body;
    userService.changeDeviceRequest(data).then((payload) => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": "Change device request success"
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": err.message
        });
    })
})

// change device request approve tepmrory in web controller  
router.post('/changeDeviceApprove', (req, res) => {
    console.log('/web/changeDeviceApprove', req.body);
    let data = req.body;
    userService.changeDeviceApprove(data).then((payload) => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": "Change device request approved successfully"
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": err.message
        });
    })
})

// get latest review  
router.post('/getReview', (req, res) => {
    console.log('/web/getReview', req.body);
    let data = req.body;
    adminService.getReviews(data).then((payload) => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": "Review successful",
            "payload": payload
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": "Unable to fetch "
        });
    })
})

// get latest review  
router.post('/checkReferral', (req, res) => {
    console.log('/web/checkReferral', req.body);
    let data = req.body;
    adminService.checkReferral(data).then((payload) => {
        res.status(res.statusCode).send({
            "statusCode": "001",
            "status": "Success",
            "message": "Referral code is valid"
        });
    }).catch(err => {
        console.log('err', err);
        res.status(res.statusCode).send({
            "statusCode": "002",
            "status": "Failed",
            "message": "Invalid referral code"
        });
    })
})

/*------------------- paytm response check api -------------------*/
router.post('/response', (req, res) => {
    console.log("/web/response ----------------------" + JSON.stringify(req.body));
    let orderId = req.body.ORDERID;
    let CHECKSUMHASH = req.body.CHECKSUMHASH;
    let paramlist = req.body;
    accountService.paymentUpdate(orderId, CHECKSUMHASH).then(data => {
        res.render('success.ejs', { 'restdata': "true", 'paramlist': paramlist });
    }).catch(err => {
        res.render('failure.ejs', { 'restdata': "false", 'paramlist': paramlist });
    })
});

/*------------------- paytm response check api -------------------*/
router.post('/createInvoice', (req, res) => {
    console.log("/web/createInvoice ----------------------" + JSON.stringify(req.body));
    let orderId = req.body.orderId;
    accountService.createinvoice(orderId).then(data => {
        res.send("Success");
    }).catch(err => {
        res.send("Failedf");
    })
});

router.post('/gstgetamount', (req, res) => {
    console.log("gstgetamount " + JSON.stringify(req.body));
    let amount = req.body.amount;
    let sgst = 9; cgst = 9, igst = 18;
    let total = amount * cgst / 100;
    let amountTotal = amount + total + total
    res.status(res.statusCode).send({
        "StatusCode": "001",
        "Status": "Success",
        "cgstPercentage": cgst + "%",
        "sgstPercentage": sgst + "%",
        "igstPercentage": igst + "%",
        "cgstAmount": total,
        "sgstAmount": total,
        "igstAmount": total + total,
        "amountTotal": amountTotal.toFixed(2)
    })
})


module.exports = router;