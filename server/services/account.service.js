// packages
const moment = require('moment');
// const crypto = require('crypto');
const uniqid = require('uniqid')
const pdfkit = require('pdfkit');
const fs = require('fs');
const request = require('request');

// config
const config = require('../config/config').config;

// paytm cred
let CHANNEL_ID = config.CHANNEL_ID;
let MID = config.MID;
let WEBSITE = config.WEBSITE;
let INDUSTRY_TYPE_ID = config.INDUSTRY_TYPE_ID;
let MERCHANT_KEY = config.PAYTM_MERCHANT_KEY;
let CALLBACK_URL = config.CALLBACK_URL;
let PAYTMRESPONSE_URL = config.PAYTMRESPONSE_URL;

// models
const paymentsModel = require('../models/payments.model');
const userModel = require('../models/users.model');
const plansModel = require('../models/plan.model');
const counterSchema = require('../models/counter.model');

// servies
const paytm_checksum = require('./checksum');
const awsService = require('../services/aws.service');

// initiate payment
const initiatePayment = async (appId, userId, { planId, discount, gstNumber, firmName, emailId }) => {
    return new Promise(async (resolve, reject) => {

        let uD = await userModel.findOne({ appId: appId, userId: userId });
        let pD = await plansModel.findOne({ appId: appId, planId: planId });
        let phoneNo = uD.phoneNo;
        let planName = pD.planName;
        let planType = pD.planType;
        let fullName = uD.fullName;

        let createobj = {
            appId: appId,
            userId: userId,
            planId: planId,
            planName: planName,
            planType: planType,
            fullName: fullName,
            emailId: emailId ? emailId : uD.emailId,
            phoneNo: phoneNo,
            date: new Date(),
            updatedAt: new Date(),
            createdAt: new Date(),
            firmName: firmName
        }
        createobj.planForTrend = pD.planForTrend;
        // let cData = await counterSchema.findOneAndUpdate({ appId: appId, counterName: "Invoice Number" }, { $inc: { counter: 1 } }, { new: true })
        createobj.invoiceNo = 1
        let pT = (pD.planType === 'Monthly') ? 'months' : 'years';

        let validUpto = moment().add(pT, pD.duration).set("date", pD.validUptoDay);
        if (pD.validUptoDay === 0) validUpto = moment().add(pT, pD.duration)
        // console.log('validUpto', validUpto);
        createobj.endDate = new Date(validUpto);
        createobj.startDate = new Date();

        discount = discount ? discount : 0;
        // createobj.planCost = pD.planCost;
        createobj.discount = discount;
        let payableAmount = pD.planCost - discount;
        createobj.payableAmount = payableAmount;
        createobj.amount = pD.planCost;

        /** ************  do not delete will be used in future ************ */
        // calculate gst
        // let singlePercent = Number(payableAmount) / (100 + 18);
        // let gst = singlePercent * 18;
        // let tax = Number((singlePercent * 18).toFixed(2));
        // createobj.amount = Number((singlePercent * 100).toFixed(2));

        // set igst or sgst cgst depending on the gst number
        // if (gstNumber) {
        //     let stateCode = gstNumber.substring(0, 2);
        //     if (stateCode === "27") {
        //         createobj.cgst = Number((tax / 2).toFixed(2));
        //         createobj.sgst = Number((tax / 2).toFixed(2));
        //     } else {
        //         createobj.igst = tax;
        //     }
        // } else {
        //     createobj.cgst = Number((tax / 2).toFixed(2));
        //     createobj.sgst = Number((tax / 2).toFixed(2));
        // }

        let CUST_ID = userId;
        let ORDER_ID = `${appId}_${moment().format('DDMMYY')}_${uniqid()}`;
        let TXN_AMOUNT = payableAmount.toString();

        createobj.orderId = ORDER_ID;

        var paramarray = {};
        paramarray['MID'] = MID;
        paramarray['ORDER_ID'] = ORDER_ID;
        paramarray['CUST_ID'] = CUST_ID;
        paramarray['TXN_AMOUNT'] = TXN_AMOUNT;
        paramarray['CHANNEL_ID'] = CHANNEL_ID;
        if (emailId) paramarray['EMAIL'] = emailId;
        if (phoneNo) paramarray['MOBILE_NO'] = phoneNo;
        paramarray['INDUSTRY_TYPE_ID'] = INDUSTRY_TYPE_ID;
        paramarray['WEBSITE'] = WEBSITE;
        // paramarray['THEME'] = "merchant";
        paramarray['CALLBACK_URL'] = CALLBACK_URL
        await paymentsModel.create(createobj);
        paytm_checksum.genchecksum(paramarray, MERCHANT_KEY, function (err, res) {
            if (err) {
                reject(err);
            } else {
                // console.log("here in  genchecksum " + res);
                paramarray['CHECKSUMHASH'] = res;
                // console.log('paramarray', paramarray);
                resolve(paramarray);
            }
        })
    })
}

const paymentUpdate = async (orderId, CHECKSUMHASH) => {
    return new Promise((resolve, reject) => {
        var JsonData = { "MID": MID, "ORDER_ID": orderId, "CHECKSUMHASH": CHECKSUMHASH };
        var urlLink = PAYTMRESPONSE_URL + JSON.stringify(JsonData);
        console.log("url link ", urlLink);
        request.get({ url: urlLink }, function (err, httpRes, body) {
            if (err) reject(err);
            else {
                let updateObj = {}
                let responseCode = JSON.parse(httpRes.body);
                console.log("responseCode ", (responseCode));
                updateObj.currency = responseCode.currency;
                updateObj.txntype = responseCode.TXNTYPE;
                updateObj.respcode = responseCode.RESPCODE;
                updateObj.respmsg = responseCode.RESPMSG;
                updateObj.gatewayName = responseCode.GATEWAYNAME;
                updateObj.banktxnid = responseCode.BANKTXNID;
                updateObj.bankname = responseCode.BANKNAME;
                updateObj.paymentMode = responseCode.PAYMENTMODE;
                updateObj.txnAmount = responseCode.TXNAMOUNT;
                updateObj.refundAmount = responseCode.REFUNDAMT;
                updateObj.transactionId = responseCode.TXNID;
                updateObj.transactionDate = responseCode.TXNDATE;
                updateObj.status = responseCode.STATUS;
                if (responseCode.STATUS === 'TXN_FAILURE') updateObj.paymentStatus = "Failed";
                if (responseCode.STATUS === 'TXN_SUCCESS') updateObj.paymentStatus = "Success";
                paymentsModel.findOneAndUpdate({ orderId: orderId }, updateObj, { new: true }).then(data => {
                    console.log('data', data);
                    createinvoice(orderId).then(data => {
                        console.log("invoice generated successfully");
                    });
                    if (updateObj.respcode === "01") resolve();
                    else reject()
                })
            }
        })
    })
}


const createinvoice = async (orderId) => {
    try {
        console.log('createinvoice', orderId);
        let pData = await paymentsModel.findOne({ orderId: orderId });
        let appId = pData.appId;
        let appName = "FUEL";


        let pendingStepCount = 2;
        const pdfFile = "./public/Invoice/" + orderId + ".pdf";
        const stepFinished = async () => {
            if (--pendingStepCount == 0) {
                console.log('--------in createinvoice---------');
                awsService.uploLocalFileToAws(`${appId}/Invoice/`, pdfFile, `${orderId}.pdf`).then((link) => {
                    console.log('link', link);
                    return paymentsModel.findOneAndUpdate({ orderId: orderId }, { link: link }, { new: true })
                }).then((data) => {
                    // resolve();
                    return;
                })
                return;
            }
        };

        let doc = new pdfkit({ layout: 'landscape' });
        const writeStream = fs.createWriteStream(pdfFile);

        writeStream.on('close', stepFinished);
        doc.pipe(writeStream);
        // doc.pipe(fs.createWriteStream(pdfFile));
        let y = 50;

        doc.fontSize(24)
        doc.font('Times-Roman')
        doc.text(`${appName}`, { align: 'center' }, y - 10)


        // if (logoData) {
        // console.log('logoData-----222-----', logoData);
        doc.image(`./views/${appId}.png`, 50, 20, { width: 70 }, { height: 70 })
        // }

        doc.fontSize(12)
        doc.font('Times-Roman')
        doc.text(`Invoice No. - ${pData.invoiceNo}`, { align: 'right' }, y - 5)
        doc.text(`${moment(pData.createdAt).format('DD MMM YYYY')}`, { align: 'right' }, y + 15)

        // top line
        doc.lineCap('butt').moveTo(50, y + 45).lineTo(doc.page.width - 50, y + 45).stroke()

        doc.fontSize(12)
        doc.font('Times-Roman')
        // doc.text(pData.phoneNo, { align: 'left' }, y + 60)
        // doc.text(pData.emailId, { align: 'left' }, y + 75)
        // doc.text(pData.completeAddress, { align: 'left', width: 300 }, y + 90)

        doc.text(`Name  -  ${pData.fullName}`, { align: 'left' }, y + 60)
        doc.text(`Email Id  -  ${pData.emailId}`, { align: 'left' }, y + 80)
        doc.text(`Phone No  -  ${pData.phoneNo}`, { align: 'left' }, y + 100)
        doc.text(`Firm Name  -  ${pData.firmName}`, { align: 'left' }, y + 120)


        let y1 = 230;
        // first dotted line
        doc.lineCap('butt').dash(5, { space: 1 }).moveTo(50, y1 + 10).lineTo(doc.page.width - 50, y1 + 10).stroke()

        doc.text(`Plan Name`, 70, y1 + 20)
        doc.text(`Validity`, 245, y1 + 20)
        doc.text(`Amount`, 500, y1 + 20, { align: 'right' })
        // middle dotted line
        doc.lineCap('butt').dash(5, { space: 1 }).moveTo(50, y1 + 40).lineTo(doc.page.width - 50, y1 + 40).stroke()

        let startDate = moment(pData.startDate).format("DD MMM YYYY");
        let endDate = moment(pData.endDate).format("DD MMM YYYY");

        doc.text(`${pData.planName.toUpperCase()}`, 72, y1 + 60, { width: 200 })
        doc.text(`${startDate} - ${endDate}`, 200, y1 + 60, { width: 200 })
        doc.text(`${pData.txnAmount}`, { align: 'right' }, y1 + 60)
        y1 += 130;

        // last dotted line
        doc.lineCap('butt').dash(5, { space: 1 }).moveTo(50, y1).lineTo(doc.page.width - 50, y1).stroke()
        doc.text(`Paid amount - `, 600, y1 + 15)
        doc.text(`${pData.txnAmount}`, { align: 'right' }, y1 + 15)

        // bottom app name
        doc.text(`${appName} - TRENDS`, 50, doc.page.height - 50, { lineBreak: false });

        // Finalize PDF file
        doc.end();
        stepFinished();

        console.log('----pdfend----');
    } catch (error) {
        console.log('error------1----', error);
        throw error;
    }
}

const assignFreePlan = async ({ appId, userId, planId, startDate, endDate }) => {
    try {
        let createObj = {
            appId: appId,
            userId: userId,
            planId: planId,
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            paymentStatus: "Success",
            payableAmount: 0,
            currency: "NA",
            txntype: "Manual",
            paymentMode: "Manual",
            txnAmount: "0.00",
            status: "NA",
        };
        let cData = await counterSchema.findOneAndUpdate({ appId: appId, counterName: "Invoice Number" }, { $inc: { counter: 1 } }, { new: true })
        createObj.invoiceNo = cData.counter;

        let uD = await userModel.findOne({ appId: appId, userId: userId });
        let pD = await plansModel.findOne({ appId: appId, planId: planId });
        createObj.phoneNo = uD.phoneNo;
        createObj.emailId = uD.emailId;
        createObj.planName = pD.planName;
        createObj.planType = pD.planType;
        createObj.fullName = uD.fullName;
        createObj.orderId = `${appId}_${moment().format('DDMMYY')}_${uniqid()}`;

        await paymentsModel.create(createObj);
        return;
    } catch (error) {
        throw error;
    }
}

const convertImg = (imgLink) => {
    return new Promise((resolve, reject) => {
        request.get(imgLink, function (error, response, body) {
            // console.log('response', response);
            if (!error && response.statusCode == 200) {
                data = "data:" + response.headers["content-type"] + ";base64," + Buffer.from(body).toString('base64');
                // console.log(data);
                resolve(data)
            } else {
                console.log('error in convert image', error);
                // reject(error);
                resolve(null);
            }
        })
    })
}
module.exports = {
    initiatePayment: initiatePayment,
    paymentUpdate: paymentUpdate,
    createinvoice: createinvoice,
    assignFreePlan: assignFreePlan
}