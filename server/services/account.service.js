// packages
const moment = require('moment');
// const crypto = require('crypto');
const uniqid = require('uniqid')
const pdfkit = require('pdfkit');
const fs = require('fs');
const request = require('request');
const pLimit = require('p-limit');
const pdf2base64 = require('pdf-to-base64');

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

const apiKey = process.env.RAZORPAYAPIKEY ? process.env.RAZORPAYAPIKEY : "rzp_test_MuUPEsJccohUXX";
const secretKey = process.env.RAZORPAYSECRETKEY ? process.env.RAZORPAYSECRETKEY : "TympRBJGkqQFeQWAQNwh1hBr";


// models
const paymentsModel = require('../models/payments.model');
const userModel = require('../models/users.model');
const plansModel = require('../models/plan.model');
const counterSchema = require('../models/counter.model');

// servies
const paytm_checksum = require('./checksum');
const awsService = require('../services/aws.service');
const mailjetService = require('../services/mailjet.service');
const razorpayService = require("../services/razorpay.service");

// initiate payment
const initiatePayment = async (appId, userId, { planId, discount, gstNumber, firmName, emailId, referralCode, paymentGateway }) => {
    return new Promise(async (resolve, reject) => {

        let updateObj = {};
        if (gstNumber) updateObj.gstNumber = gstNumber;
        if (firmName) updateObj.firmName = firmName;
        if (emailId) updateObj.emailId = emailId;

        let uD = await userModel.findOneAndUpdate({ userId: userId }, updateObj, { new: true });
        let pD = await plansModel.findOne({ planId: planId });
        console.log('pD', pD);
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
            firmName: firmName,
            gstNumber: gstNumber
        }
        if (referralCode) {
            createobj.referralCode = referralCode;
            createobj.referralPoint = discount;
        }
        createobj.planForTrend = pD.planForTrend;
        // let cData = await counterSchema.findOneAndUpdate({ appId: appId, counterName: "Invoice Number" }, { $inc: { counter: 1 } }, { new: true })
        // createobj.invoiceNo = 1
        let pT = (pD.planType === 'Monthly') ? 'months' : 'years';

        let validUpto = moment().add(pD.duration, 'months').set("date", pD.validUptoDay);
        if (pD.validUptoDay === 0) validUpto = moment().add(pD.duration, pT)
        // console.log('validUpto', validUpto);
        createobj.endDate = new Date(validUpto);
        createobj.startDate = new Date();

        discount = discount ? discount : 0;
        // createobj.planCost = pD.planCost;
        createobj.discount = discount;
        let payableAmount = pD.planCost - discount;
        createobj.payableAmount = payableAmount;
        createobj.amount = pD.planCost;
        // let sgst = 9; cgst = 9, igst = 18;
        // let total = payableAmount * cgst / 100;

        /** ************ inclusive GST - do not delete will be used in future ************ */
        // // calculate gst
        // let singlePercent = Number(payableAmount) / (100 + 18);
        // let gst = singlePercent * 18;
        // let tax = Number((singlePercent * 18).toFixed(2));
        // createobj.amount = Number((singlePercent * 100).toFixed(2));

        // // set igst or sgst cgst depending on the gst number
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

        // calculate gst
        let singlePercent = Number(payableAmount) / 100;
        createobj.tax = Number((singlePercent * 18).toFixed(2));

        // set igst or sgst cgst depending on the gst number
        let stateCode = gstNumber?.substring(0, 2);
        if (stateCode === "27" || !gstNumber) {
            createobj.cgst = Number((singlePercent * 9).toFixed(2));
            createobj.sgst = Number((singlePercent * 9).toFixed(2));
        } else {
            createobj.igst = Number((singlePercent * 18).toFixed(2));
        }

        createobj.payableAmount = (Number(pD.planCost) + Number(singlePercent * 18)).toFixed(2);

        console.log('createobj.payableAmount', createobj.payableAmount);

        let CUST_ID = userId;
        let ORDER_ID = `${appId}_${moment().format('DDMMYY')}_${uniqid()}`;
        let TXN_AMOUNT = createobj.payableAmount.toString();

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
        // await createinvoice(ORDER_ID)
        if (paymentGateway === "razorpay") {
            console.log('inside razorpay---------');

            let payload = await razorpayService.createOrder({ amount: TXN_AMOUNT, currency: "INR" });
            console.log("payload--------------", payload);

            payload.razorpayKeyId = apiKey;
            payload.amount = TXN_AMOUNT;
            payload.currency = "INR";
            payload.name = firmName;
            payload.description = planName;
            // payload.order_id = ORDER_ID;
            payload.callback_url = "test";
            payload.userName = fullName;
            payload.userEmail = emailId;
            payload.userContact = phoneNo;
            console.log("payload", payload);

            resolve(payload);
        }
        if (paymentGateway === "paytm") {
            paytm_checksum.genchecksum(paramarray, MERCHANT_KEY, function (err, res) {
                if (err) {
                    reject(err);
                } else {
                    // console.log("here in  genchecksum " + res);
                    paramarray['CHECKSUMHASH'] = res;
                    createobj.CHECKSUMHASH = res;
                    paymentsModel.create(createobj).then(() => {
                        resolve(paramarray);
                    })
                    // console.log('paramarray', paramarray);
                }
            })
        }
    })
}

// update payment status after payment - Success or Failed 
const paymentUpdate = async (orderId, CHECKSUMHASH) => {
    var JsonData = { "MID": MID, "ORDER_ID": orderId, "CHECKSUMHASH": CHECKSUMHASH };
    var urlLink = PAYTMRESPONSE_URL + JSON.stringify(JsonData);
    console.log("url link ", urlLink);
    request.get({ url: urlLink }, async (err, httpRes, body) => {
        if (err) throw err;
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
            let sendMail = false;
            if (responseCode.STATUS === 'TXN_FAILURE') updateObj.paymentStatus = "Failed";
            if (responseCode.STATUS === 'TXN_SUCCESS') {
                updateObj.paymentStatus = "Success";
                let cData = await counterSchema.findOneAndUpdate({ appId: "fuel", counterName: "Invoice Number" }, { $inc: { counter: 1 }, updatedAt: new Date() }, { new: true })
                updateObj.invoiceNo = cData.counter;
                sendMail = true;
            }
            await paymentsModel.findOneAndUpdate({ orderId: orderId }, updateObj, { new: true }).then(data => {
                console.log('data', data);
                createinvoice(orderId, true, true).then(data => {
                    console.log("invoice generated successfully");
                })
                if (updateObj.respcode === "01") return;
                else throw new Error("Unable to update payment")
            })
        }
    })
}

// const createinvoice = async (orderId) => {
//     try {
//         console.log('createinvoice', orderId);
//         let pData = await paymentsModel.findOne({ orderId: orderId });
//         let appId = pData.appId;
//         let appName = "FUEL";


//         let pendingStepCount = 2;
//         const pdfFile = "./public/Invoice/" + orderId + ".pdf";
//         const stepFinished = async () => {
//             if (--pendingStepCount == 0) {
//                 console.log('--------in createinvoice---------');
//                 awsService.uploLocalFileToAws(`${appId}/Invoice/`, pdfFile, `${orderId}.pdf`).then((link) => {
//                     console.log('link', link);
//                     return paymentsModel.findOneAndUpdate({ orderId: orderId }, { link: link }, { new: true })
//                 }).then((data) => {
//                     // resolve();
//                     return;
//                 })
//                 return;
//             }
//         };

//         let doc = new pdfkit({ layout: 'landscape' });
//         const writeStream = fs.createWriteStream(pdfFile);

//         writeStream.on('close', stepFinished);
//         doc.pipe(writeStream);
//         // doc.pipe(fs.createWriteStream(pdfFile));
//         let y = 50;

//         doc.fontSize(24)
//         doc.font('Times-Roman')
//         doc.text(`${appName}`, { align: 'center' }, y - 10)


//         // if (logoData) {
//         // console.log('logoData-----222-----', logoData);
//         doc.image(`./views/${appId}.png`, 50, 20, { width: 70 }, { height: 70 })
//         // }

//         doc.fontSize(12)
//         doc.font('Times-Roman')
//         doc.text(`Invoice No. - ${pData.invoiceNo}`, { align: 'right' }, y - 5)
//         doc.text(`${moment(pData.createdAt).format('DD MMM YYYY')}`, { align: 'right' }, y + 15)

//         // top line
//         doc.lineCap('butt').moveTo(50, y + 45).lineTo(doc.page.width - 50, y + 45).stroke()

//         doc.fontSize(12)
//         doc.font('Times-Roman')
//         // doc.text(pData.phoneNo, { align: 'left' }, y + 60)
//         // doc.text(pData.emailId, { align: 'left' }, y + 75)
//         // doc.text(pData.completeAddress, { align: 'left', width: 300 }, y + 90)

//         doc.text(`Name  -  ${pData.fullName}`, { align: 'left' }, y + 60)
//         doc.text(`Email Id  -  ${pData.emailId}`, { align: 'left' }, y + 80)
//         doc.text(`Phone No  -  ${pData.phoneNo}`, { align: 'left' }, y + 100)
//         doc.text(`Firm Name  -  ${pData.firmName}`, { align: 'left' }, y + 120)


//         let y1 = 230;
//         // first dotted line
//         doc.lineCap('butt').dash(5, { space: 1 }).moveTo(50, y1 + 10).lineTo(doc.page.width - 50, y1 + 10).stroke()

//         doc.text(`Plan Name`, 70, y1 + 20)
//         doc.text(`Validity`, 245, y1 + 20)
//         doc.text(`Amount`, 500, y1 + 20, { align: 'right' })
//         // middle dotted line
//         doc.lineCap('butt').dash(5, { space: 1 }).moveTo(50, y1 + 40).lineTo(doc.page.width - 50, y1 + 40).stroke()

//         let startDate = moment(pData.startDate).format("DD MMM YYYY");
//         let endDate = moment(pData.endDate).format("DD MMM YYYY");

//         doc.text(`${pData.planName.toUpperCase()}`, 72, y1 + 60, { width: 200 })
//         doc.text(`${startDate} - ${endDate}`, 200, y1 + 60, { width: 200 })
//         doc.text(`${pData.txnAmount}`, { align: 'right' }, y1 + 60)
//         y1 += 130;

//         // last dotted line
//         doc.lineCap('butt').dash(5, { space: 1 }).moveTo(50, y1).lineTo(doc.page.width - 50, y1).stroke()
//         doc.text(`Paid amount - `, 600, y1 + 15)
//         doc.text(`${pData.txnAmount}`, { align: 'right' }, y1 + 15)

//         // bottom app name
//         doc.text(`${appName} - TRENDS`, 50, doc.page.height - 50, { lineBreak: false });

//         // Finalize PDF file
//         doc.end();
//         stepFinished();

//         console.log('----pdfend----');
//     } catch (error) {
//         console.log('error------1----', error);
//         throw error;
//     }
// }

// assign free plan to user from the panel
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
        createObj.planForTrend = pD.planForTrend;
        createObj.payableAmount = 0;
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

// generate invoice
const createinvoice = async (orderId, isSendMailToClient, isSendMailToAdmin) => {
    try {
        console.log('createinvoice', orderId, isSendMailToClient, isSendMailToAdmin);
        let pData = await paymentsModel.findOne({ orderId: orderId });
        let invoiceLink = await generateInvoice(orderId, pData.invoiceNo, pData.createdAt, pData.firmName, pData.emailId, pData.phoneNo, pData.gstNumber, pData.packageName, pData.planName, pData.endDate, pData.amount, pData.discount, pData.cgst, pData.sgst, pData.igst, pData.payableAmount, '', pData.txnId, pData.mihpayId, pData.paymentMode, isSendMailToClient, isSendMailToAdmin);
        // if (sendMail) {
        // console.log("invoiceLink---------", fileName);
        // let fileName = invoiceLink;
        // let base64 = await pdf2base64(fileName)
        // let pdfName = pData.invoiceNo + ".pdf";
        // let attachments = [{
        //     fileName: pdfName,
        //     path: fileName,
        //     base64: base64
        // }]
        // let to = pData.emailId
        // let subject = "Your Plan Subscription Invoice"
        // let text = ""
        // let html = "<p><b>Dear Sir/Madam,</b></p><br><br><p>Thanks for subscription to FuelPreAlert.</p><br><p>Your subscription invoice enclosed herewith.</p><br><p>Thanks & Regards</p><p><b>Team FuelPreAlert</b></p><p><b>What's App :7709225499</b></p>"
        // mailjetService.sendMail(to, subject, text, html, attachments).then(data => {
        //     console.log("mail sent successfully");
        // })
        // }
        await paymentsModel.findOneAndUpdate({ orderId: orderId }, { link: invoiceLink, mailStatus: sendMail })

        return invoiceLink;
    } catch (error) {
        console.log('error------1----', error);
        throw error;
    }
}

// do not delte - create invoice for the old transactions
// const creteOldInvoice = async () => {
//     try {
//         let pData = await paymentsModel.find({ "paymentStatus": "Success" }, { orderId: 1, igst: 1, sgst: 1, amount: 1, gstNumber: 1 });
//         const limit = pLimit(1);
//         console.log('pData', pData);

//         Promise.all(
//             pData.map((e, i) => limit(async () => {
//                 console.log("e.igst", e.igst);
//                 console.log("e.sgst", e.sgst);
//                 if (e.igst === 0 && e.sgst === 0) {
//                     console.log('invoice started', i, "amount", e.amount);

//                     const singlePercent = Number(e.amount) / 100;
//                     console.log('singlePercent', singlePercent);
//                     const updateObj = {};
//                     updateObj.tax = Number((singlePercent * 18).toFixed(2));

//                     // set igst or sgst cgst depending on the gst number
//                     const stateCode = e.gstNumber?.substring(0, 2);
//                     if (stateCode === "27" || !e.gstNumber) {
//                         updateObj.cgst = Number((singlePercent * 9).toFixed(2));
//                         updateObj.sgst = Number((singlePercent * 9).toFixed(2));
//                     } else {
//                         updateObj.igst = Number((singlePercent * 18).toFixed(2));
//                     }
//                     console.log({ updateObj });
//                     await paymentsModel.findOneAndUpdate({ orderId: e.orderId }, updateObj, { new: true }).then(() => {
//                         console.log('here');
//                     })
//                 }

//                 createinvoice(e.orderId)
//             }))
//         ).then(d => {
//             console.log("all invoice created");
//         })

//     } catch (error) {
//         console.log('error', error);
//     }
// }

const generateInvoice = async (orderId, invoiceNo, newdate, firm_name, email, mobile, gstNumber, package_name, plan_name, validdate, amount, discount, cgstAmount, sgstAmount, igstAmount, amountTotal, moneyInwords, TXNID, mihpayid, paymentModeStatus, isSendMailToClient, isSendMailToAdmin) => {
    try {
        return new Promise((resolve, reject) => {
            // console.log("in function 27 ");
            // console.log("igstAmount ", igstAmount);

            let pendingStepCount = 2;
            const pdfFile = "./public/Invoice/" + orderId + ".pdf";
            const stepFinished = async () => {
                if (--pendingStepCount == 0) {
                    console.log('--------in createinvoice---------', pdfFile);
                    awsService.uploLocalFileToAws(`Invoice/`, pdfFile, `${orderId}.pdf`).then((link) => {
                        console.log('link', link);
                        let mailStatus = false;
                        if (isSendMailToClient && email) {
                            sendMailToClient(link, invoiceNo, email, orderId).then((data) => {
                                mailStatus = true;
                            })
                        }
                        if (isSendMailToAdmin) {
                            sendMailToAdmin(link, invoiceNo, amountTotal).then((data) => {
                                mailStatus = true;
                            })
                        }
                        return paymentsModel.findOneAndUpdate({ orderId: orderId }, { link: link, mailStatus: false }, { new: true })

                    }).then((data) => {
                        // resolve();
                        return;
                    })
                    return;
                }
            };

            var doc = new pdfkit;
            const writeStream = fs.createWriteStream(pdfFile);
            writeStream.on('close', stepFinished);
            doc.pipe(writeStream);
            // doc.image('./public/icon.png', {
            //     fit: [100, 100],
            //     align: 'center',
            //     valign: 'center'
            // });
            doc.font('Helvetica-Bold')
            doc.text('MEEANDNEE', 270, 75)
            doc.font('Times-Roman')
            doc.fontSize(8)
            doc.text('Poornima Tower, Shankar Seth Road, Pune, Maharashtra - 411 037', 210, 95)
            doc.fontSize(8)
            doc.text('Email: info@fuelpricealert.in', 70, 135)
            doc.fontSize(8)
            doc.text('Contact/Whats Up: 7709225499', 400, 130)
            doc.fontSize(10)
            doc.font('Helvetica-Bold')
            doc.text('Invoice', 290, 160)
            doc.fontSize(8)
            doc.font('Times-Roman')
            doc.text('GSTIN No.', 60, 200)
            doc.text(": 27ABGFM9425L1ZQ", 130, 200)
            doc.text('Invoice No.', 60, 220)
            doc.text(": " + invoiceNo, 130, 220)
            doc.text('Invoice Date', 60, 240)
            doc.text(": " + moment(newdate).format("DD MMM YYYY"), 130, 240)
            doc.fontSize(8)
            doc.font('Helvetica-Bold')
            doc.text('Bill To', 350, 190)
            doc.fontSize(8)
            doc.font('Helvetica-Bold')
            doc.text(firm_name, 350, 200)
            doc.font('Times-Roman')
            doc.fontSize(8)
            doc.text(email, 350, 210)
            doc.text(mobile, 350, 220)
            doc.text("Buyer GSTIN No", 350, 240)
            doc.text(": " + gstNumber ? gstNumber : "", 410, 240)
            doc.fontSize(8)
            doc.text('SNo', 70, 325)
            doc.text('Description', 100, 325)
            doc.text('Qty', 275, 325)
            doc.text('Base Price', 325, 325)
            doc.text('Discount', 400, 325)
            doc.text('Amount', 475, 325)
            doc.font('Helvetica-Bold')
            doc.text('1', 70, 350)
            doc.font('Helvetica-Bold')
            doc.text('FuelPreAlert Subscription', 100, 350)
            doc.font('Times-Roman')
            doc.text(package_name, 100, 360)
            doc.font('Times-Roman')
            doc.text(plan_name, 100, 370)
            doc.font('Times-Roman')
            doc.text('Valid Upto:  ' + moment(validdate).format("DD MMM YYYY"), 100, 380)
            doc.font('Helvetica-Bold')
            doc.text('1', 275, 350)
            doc.font('Helvetica-Bold')
            doc.text(amount, 335, 350)
            doc.font('Helvetica-Bold')
            doc.text(discount, 410, 350)
            doc.font('Helvetica-Bold')
            doc.text(amount, 480, 350)
            doc.font('Helvetica-Bold')
            doc.text("Amount", 270, 450)
            doc.font('Helvetica-Bold')
            doc.text(amount, 480, 450)
            if (sgstAmount > 0) {
                doc.font('Times-Roman')
                doc.text("CGST @ 9% ", 270, 465)
                doc.font('Times-Roman')
                doc.text(cgstAmount, 480, 465)
                doc.font('Times-Roman')
                doc.text("SGST @ 9% ", 270, 475)
                doc.font('Times-Roman')
                doc.text(sgstAmount, 480, 475)
            } else {
                doc.font('Times-Roman')
                doc.text("IGST @ 18% ", 270, 465)
                doc.font('Times-Roman')
                doc.text(igstAmount, 480, 465)
            }
            doc.font('Helvetica-Bold')
            doc.text('Total Amount', 270, 500)
            doc.font('Helvetica-Bold')
            doc.text(amountTotal, 480, 500)
            doc.font('Helvetica-Bold')
            doc.text('In Words :', 70, 530)
            doc.font('Times-Roman')
            doc.text(moneyInwords, 110, 530)
            doc.font('Helvetica-Bold')
            doc.text('Notes:', 70, 550)
            doc.font('Times-Roman')
            if (paymentModeStatus == "paytm") {
                // doc.text('Payment Recieved Through Paytm Gateway', 70, 570)
                doc.text('Transaction Id: ' + TXNID, 70, 580)
            } else {
                // doc.text('Payment Recieved Through Payu Gateway', 70, 570)
                doc.text('Payment Id: ' + mihpayid, 70, 580)
            }
            doc.font('Helvetica-Bold')
            doc.text('This is a computer generated invoice hence signature is not required', 150, 610)
            doc.end();
            stepFinished();
        })
    } catch (error) {
        throw error;
    }
}

const calculateAmount = async (user, { amount, gstNumber, referralCode, referralPoint }) => {
    console.log({ amount, gstNumber, referralCode, referralPoint });
    let discount = 0;
    let userObj = await userModel.findOne({ referralCode: referralCode });
    let alreadyReferred = await userModel.findOne({ userId: user.userId, "referralHistory.referralCode": referralCode })
    console.log(userObj, alreadyReferred);
    if (userObj && !alreadyReferred && userObj?.userId != alreadyReferred?.userId) {
        discount = amount / 10;
    }
    let finalAmount = amount - discount;
    let sgst = 9; cgst = 9, igst = 18;
    let gst9 = finalAmount * cgst / 100;
    let amountTotal = finalAmount + gst9 + gst9;
    let returnData = {
        "amount": amount,
        "cgstPercentage": cgst + "%",
        "sgstPercentage": sgst + "%",
        "igstPercentage": igst + "%",
        "cgstAmount": gst9,
        "sgstAmount": gst9,
        "igstAmount": 0,
        "discount": discount,
        "amountTotal": amountTotal.toFixed(2)
    }
    let matchGstString;
    if (gstNumber) {
        matchGstString = gstNumber.slice(0, 2)
        if (matchGstString == '27') {
            returnData = {
                "amount": amount,
                "cgstPercentage": cgst + "%",
                "sgstPercentage": sgst + "%",
                "igstPercentage": 0 + "%",
                "cgstAmount": gst9,
                "sgstAmount": gst9,
                "igstAmount": 0,
                "discount": discount,
                "amountTotal": amountTotal.toFixed(2)
            }
        } else returnData = {
            "amount": amount,
            "cgstPercentage": 0 + "%",
            "sgstPercentage": 0 + "%",
            "igstPercentage": igst + "%",
            "cgstAmount": 0,
            "sgstAmount": 0,
            "igstAmount": gst9 + gst9,
            "discount": discount,
            "amountTotal": amountTotal.toFixed(2)
        }
    }
    console.log({ returnData });
    return returnData;
}

const sendMailToClient = async (link, invoiceNo, email, orderId) => {
    try {
        pdf2base64(link).then(data1 => {
            let pdfName = invoiceNo + ".pdf";
            let attachments = [{
                fileName: pdfName,
                path: link,
                base64: data1
            }]
            let to = email
            let subject = "Your Plan Subscription Invoice"
            let text = ""
            let html = "<p><b>Dear Sir/Madam,</b></p><br><br><p>Thanks for subscription to FuelPreAlert.</p><br><p>Your subscription invoice enclosed herewith.</p><br><p>Thanks & Regards</p><p><b>Team FuelPreAlert</b></p><p><b>What's App :7709225499</b></p>"
            mailjetService.sendMail(to, subject, text, html, attachments).then(data => {
                return paymentsModel.findOneAndUpdate({ orderId: orderId }, { mailStatus: true });
            }).then(() => {
                return
            })
        })
    } catch (error) {
        throw error;
    }
}

const sendMailToAdmin = async (link, invoiceNo, paymentAmount) => {
    try {
        pdf2base64(link).then(data1 => {
            let pdfName = invoiceNo + ".pdf";
            let attachments = [{
                fileName: pdfName,
                path: link,
                base64: data1
            }]
            let to = "meeaurnee@gmail.com"
            let subject = "New Subscription Done"
            let text = ""
            let html = `<p><b>Dear Sir,</b></p><br><br><p>Payment received of amount ${paymentAmount}</p><p>Thanks & Regards</p>`
            // console.log(to, subject, text, html, attachments);
            mailjetService.sendMail(to, subject, text, html, attachments)
                .then(() => {
                    console.log("mail send to admin");
                    return;
                })
        })
    } catch (error) {
        throw error;
    }
}

const sendInvoiceToUser = async (orderId) => {
    try {
        createinvoice(orderId, true, false).then(data => {
            console.log("invoice generated successfully");
            return;
        })
    } catch (error) {
        throw error;
    }
}


module.exports = {
    initiatePayment,
    paymentUpdate,
    createinvoice,
    assignFreePlan,
    generateInvoice,
    calculateAmount,
    sendInvoiceToUser
}