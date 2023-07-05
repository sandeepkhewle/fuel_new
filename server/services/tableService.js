// Packages
const moment = require('moment');
const mongoose = require('mongoose');

// models
const userModel = require('../models/users.model');
const trendsModel = require('../models/trends.model');
const notificationModel = require('../models/notification.model');
const paymentModel = require('../models/payments.model');
const chatModel = require('../models/chat.model');

// services
const structurService = require('../services/structure.service');

// choose which table data need to fetched
let chooseTable = (page, req) => {
    return new Promise((resolve, reject) => {
        switch (page) {
            case 'members':
                resolve(getMemberList(req))
                break;
            case 'subscription':
                resolve(getSubscription(req))
                break;
            case 'fortnight':
                resolve(getFortnightList(req))
                break;
            case 'monthly':
                resolve(getMonthlyProductList(req))
                break;
            case 'bitumen':
                resolve(getBitumenList(req))
                break;
            case 'notifications':
                resolve(getNotificationList(req))
                break;
            case 'payments':
                resolve(getPaymentsList(req))
                break;
            case 'gstReport':
                resolve(getGstReport(req))
                break;
            case 'device':
                resolve(changeDevice(req))
                break;
            case 'chat':
                resolve(chatList(req))
                break;
            default:
                break;
        }
    })
}

// member list function
let getMemberList = (req) => {
    return new Promise((resolve, reject) => {
        let sendObj = {};
        let query = [];
        let page = req.body.page;
        console.log('page-----------', page);
        console.log('page-----------', req.body);
        let limit = req.body.limit ? req.body.limit : 10;
        let skip = req.body.skip ? req.body.skip : 0;
        let orderby = req.body.orderby ? req.body.orderby : 'createDate';
        let orderin = 1;
        if (req.body.orderin === 'desc') orderin = -1;
        let sort = {};
        sort[orderby] = orderin;
        let search = req.body.search;
        let filters = req.body.filters;
        const appId = req.body.appId;
        let matchObj = {}
        if (appId) matchObj.appId = appId
        if (search) {
            matchObj['$or'] = [
                { $text: { $search: search } },
                { fullName: { $regex: search, $options: 'i' } },
                { phoneNo: { $regex: search, $options: 'i' } }
            ]
        }
        Object.keys(filters).forEach(element => {
            if (filters[element] && Array.isArray(filters[element]) && filters[element].length > 0 && filters[element].length > 0) {
                matchObj[element] = { $in: filters[element] }
            }
        });

        // filter on enrollment date
        if (filters && (filters.startDate || filters.endDate)) {
            matchObj.createdAt = {};
            if (filters.startDate) matchObj.createdAt['$gte'] = new Date(moment(filters.startDate).startOf('day'));
            if (filters.endDate) matchObj.createdAt['$lte'] = new Date(moment(filters.endDate).endOf('day'));
        }

        query.push({ $match: matchObj });
        query.push({ $sort: sort });
        query.push({ $skip: skip });
        query.push({ $limit: limit });
        query.push({
            $lookup: {
                from: "payments",
                let: {
                    appId: "$appId",
                    userId: "$userId"
                },
                pipeline: [{
                    $match: {
                        $expr: {
                            $and: [{
                                $eq: [
                                    "$appId",
                                    "$$appId"
                                ]
                            },
                            {
                                $gte: [
                                    "$endDate",
                                    new Date()
                                ]
                            },
                            {
                                $eq: [
                                    "$userId",
                                    "$$userId"
                                ]
                            },
                            ]
                        }
                    }
                }],
                as: "plans"
            }
        });

        query.push({
            $project: {
                emailId: 1,
                userId: 1,
                fullName: 1,
                phoneNo: 1,
                createdAt: 1,
                updatedAt: 1,
                appId: 1,
                // isActive: 1,
                lastActive: 1,
                isActive: {
                    $cond: {
                        if: { $gt: [{ $size: "$plans" }, 0] }, then: "Active",
                        else: "Inactive"
                    }
                },
                planName: "$plans.planName",
                planType: "$plans.planType"
            }
        })
        userModel.aggregate(query).then(async userData => {
            let total = await userModel.aggregate([{ $match: matchObj }, { $count: "count" }])
            sendObj.userData = userData;
            sendObj.count = 0;
            if (total[0] && total[0].count) {
                sendObj.count = (total[0].count);
            }
            return structurService.getViewData(page)
        }).then(data => {
            sendObj.attributeList = data;
            resolve(sendObj)
        }).catch(err => {
            reject(err);
        })
    })
}

// Subscription list function
let getSubscription = (req) => {
    return new Promise((resolve, reject) => {
        let sendObj = {};
        let query = [];
        let page = req.body.page;
        console.log('page-----------', page);
        console.log('page-----------', req.body);
        let limit = req.body.limit ? req.body.limit : 10;
        let skip = req.body.skip ? req.body.skip : 0;
        let orderby = req.body.orderby ? req.body.orderby : 'createDate';
        let orderin = 1;
        if (req.body.orderin === 'desc') orderin = -1;
        let sort = {};
        sort[orderby] = orderin;
        let search = req.body.search;
        let filters = req.body.filters;
        const appId = req.body.appId;
        let matchObj = {
            paymentStatus: "Success"
        }
        if (appId) matchObj.appId = appId
        if (search) {
            matchObj['$or'] = [
                { $text: { $search: search } },
                { fullName: { $regex: search, $options: 'i' } },
                { phoneNo: { $regex: search, $options: 'i' } }
            ]
        }
        Object.keys(filters).forEach(element => {
            if (filters[element] && Array.isArray(filters[element]) && filters[element].length > 0 && filters[element].length > 0) {
                matchObj[element] = { $in: filters[element] }
            }
        });

        // filter on enrollment date
        if (filters && (filters.startDate || filters.endDate)) {
            matchObj.createdAt = {};
            if (filters.startDate) matchObj.createdAt['$gte'] = new Date(moment(filters.startDate).startOf('day'));
            if (filters.endDate) matchObj.createdAt['$lte'] = new Date(moment(filters.endDate).endOf('day'));
        }

        // filter on enrollment date
        if (filters && (filters.planStartDate || filters.planEndDate)) {
            matchObj.endDate = {};
            if (filters.startDate) matchObj.endDate['$gte'] = new Date(moment(filters.planStartDate).startOf('day'));
            if (filters.endDate) matchObj.endDate['$lte'] = new Date(moment(filters.planEndDate).endOf('day'));
        }

        query.push({ $match: matchObj });
        query.push({ $sort: sort });
        query.push({ $skip: skip });
        query.push({ $limit: limit });

        paymentModel.aggregate(query).then(async userData => {
            let total = await paymentModel.aggregate([{ $match: matchObj }, { $count: "count" }])
            sendObj.userData = userData;
            sendObj.count = 0;
            if (total[0] && total[0].count) {
                sendObj.count = (total[0].count);
            }
            return structurService.getViewData(page)
        }).then(data => {
            sendObj.attributeList = data;
            resolve(sendObj)
        }).catch(err => {
            reject(err);
        })
    })
}


//msd trends list function
let getFortnightList = (req) => {
    return new Promise((resolve, reject) => {
        let sendObj = {};
        let query = [];
        let page = req.body.page;
        console.log('page-----------', page);
        let limit = req.body.limit ? req.body.limit : 10;
        let skip = req.body.skip ? req.body.skip : 0;
        let orderby = req.body.orderby ? req.body.orderby : 'createdAt';
        let orderin = 1;
        if (req.body.orderin === 'desc') orderin = -1;
        let sort = {};
        sort[orderby] = orderin;
        let search = req.body.search;
        let filters = req.body.filters;
        let matchObj = { trendName: "fortnight" }
        if (search) {
            matchObj['$or'] = [
                { $text: { $search: search } }
            ]
        }

        Object.keys(filters).forEach(element => {
            if (filters[element] && Array.isArray(filters[element]) && filters[element].length > 0 && filters[element].length > 0) {
                matchObj[element] = { $in: filters[element] }
            }
        });

        // filter on enrollment date
        if (filters && (filters.startDate || filters.endDate)) {
            matchObj.createdAt = {};
            if (filters.startDate) matchObj.createdAt['$gte'] = new Date(moment(filters.startDate).startOf('day'));
            if (filters.endDate) matchObj.createdAt['$lte'] = new Date(moment(filters.endDate).endOf('day'));
        }

        query.push({ $match: matchObj });
        query.push({ $sort: sort });
        query.push({ $skip: skip });
        query.push({ $limit: limit });

        trendsModel.aggregate(query).then(async userData => {
            let total = await trendsModel.aggregate([{ $match: matchObj }, { $count: "count" }])
            sendObj.userData = userData;
            sendObj.count = 0;
            if (total[0] && total[0].count) {
                sendObj.count = (total[0].count);
            }
            return structurService.getViewData(page)
        }).then(data => {
            sendObj.attributeList = data;
            resolve(sendObj)
        }).catch(err => {
            reject(err);
        })
    })
}

//monthly trends list function
let getMonthlyProductList = (req) => {
    return new Promise((resolve, reject) => {
        let sendObj = {};
        let query = [];
        let page = req.body.page;
        console.log('page-----------', page);
        let limit = req.body.limit ? req.body.limit : 10;
        let skip = req.body.skip ? req.body.skip : 0;
        let orderby = req.body.orderby ? req.body.orderby : 'createdAt';
        let orderin = 1;
        if (req.body.orderin === 'desc') orderin = -1;
        let sort = {};
        sort[orderby] = orderin;
        let search = req.body.search;
        let filters = req.body.filters;
        let matchObj = { trendName: "monthly" }
        if (search) {
            matchObj['$or'] = [
                { $text: { $search: search } }
            ]
        }

        Object.keys(filters).forEach(element => {
            if (filters[element] && Array.isArray(filters[element]) && filters[element].length > 0 && filters[element].length > 0) {
                matchObj[element] = { $in: filters[element] }
            }
        });

        // filter on enrollment date
        if (filters && (filters.startDate || filters.endDate)) {
            matchObj.createdAt = {};
            if (filters.startDate) matchObj.createdAt['$gte'] = new Date(moment(filters.startDate).startOf('day'));
            if (filters.endDate) matchObj.createdAt['$lte'] = new Date(moment(filters.endDate).endOf('day'));
        }

        query.push({ $match: matchObj });
        query.push({ $sort: sort });
        query.push({ $skip: skip });
        query.push({ $limit: limit });

        query.push({
            $project: {
                appId: 1,
                trendsId: 1,
                trendType: 1,
                validFrom: 1,
                validThrough: 1,
                trendDate: 1,
                trendUnite: 1,
                trendValue: 1,
                ms: 1,
                hsd: 1,
                fourteenKg: 1,
                nineteenKg: 1,
                bitumen: 1,
                furnaceOil: 1,
                ldo: 1,
                productName: 1,
                trendName: 1,
                trend: 1,
                createdAt: 1
            }
        })
        trendsModel.aggregate(query).then(async userData => {
            let total = await trendsModel.aggregate([{ $match: matchObj }, { $count: "count" }])
            sendObj.userData = userData;
            sendObj.count = 0;
            if (total[0] && total[0].count) {
                sendObj.count = (total[0].count);
            }
            return structurService.getViewData(page)
        }).then(data => {
            sendObj.attributeList = data;
            resolve(sendObj)
        }).catch(err => {
            reject(err);
        })
    })
}

//bitumen trends list function
let getBitumenList = (req) => {
    return new Promise((resolve, reject) => {
        let sendObj = {};
        let query = [];
        let page = req.body.page;
        console.log('page-----------', page);
        let limit = req.body.limit ? req.body.limit : 10;
        let skip = req.body.skip ? req.body.skip : 0;
        let orderby = req.body.orderby ? req.body.orderby : 'createdAt';
        let orderin = 1;
        if (req.body.orderin === 'desc') orderin = -1;
        let sort = {};
        sort[orderby] = orderin;
        let search = req.body.search;
        let filters = req.body.filters;
        let matchObj = { appId: 'bitumen' }
        if (search) {
            matchObj['$or'] = [
                { $text: { $search: search } }
            ]
        }

        Object.keys(filters).forEach(element => {
            if (filters[element] && Array.isArray(filters[element]) && filters[element].length > 0 && filters[element].length > 0) {
                matchObj[element] = { $in: filters[element] }
            }
        });

        // filter on enrollment date
        if (filters && (filters.startDate || filters.endDate)) {
            matchObj.createdAt = {};
            if (filters.startDate) matchObj.createdAt['$gte'] = new Date(moment(filters.startDate).startOf('day'));
            if (filters.endDate) matchObj.createdAt['$lte'] = new Date(moment(filters.endDate).endOf('day'));
        }

        query.push({ $match: matchObj });
        query.push({ $sort: sort });
        query.push({ $skip: skip });
        query.push({ $limit: limit });

        query.push({
            $project: {
                appId: 1,
                trendsId: 1,
                trendType: 1,
                validFrom: 1,
                validThrough: 1,
                trendDate: 1,
                trendUnite: 1,
                ms: 1,
                hsd: 1,
                fourteenKg: 1,
                nineteenKg: 1,
                bitumen: 1,
                furnaceOil: 1,
                ldo: 1,
            }
        })
        trendsModel.aggregate(query).then(async userData => {
            let total = await trendsModel.aggregate([{ $match: matchObj }, { $count: "count" }])
            sendObj.userData = userData;
            sendObj.count = 0;
            if (total[0] && total[0].count) {
                sendObj.count = (total[0].count);
            }
            return structurService.getViewData(page)
        }).then(data => {
            sendObj.attributeList = data;
            resolve(sendObj)
        }).catch(err => {
            reject(err);
        })
    })
}

// notification list function
let getNotificationList = (req) => {
    return new Promise((resolve, reject) => {
        let sendObj = {};
        let query = [];
        let page = req.body.page;
        console.log('page-----------', page);
        let limit = req.body.limit ? req.body.limit : 10;
        let skip = req.body.skip ? req.body.skip : 0;
        let orderby = req.body.orderby ? req.body.orderby : 'createdAt';
        let orderin = 1;
        if (req.body.orderin === 'desc') orderin = -1;
        let sort = {};
        sort[orderby] = orderin;
        let search = req.body.search;
        let filters = req.body.filters;
        const appId = req.body.appId;
        let matchObj = {}
        if (appId) matchObj.appId = appId
        if (search) {
            matchObj['$or'] = [
                { $text: { $search: search } },
                { appId: { $regex: search, $options: 'i' } }
            ]
        }

        Object.keys(filters).forEach(element => {
            if (filters[element] && Array.isArray(filters[element]) && filters[element].length > 0 && filters[element].length > 0) {
                matchObj[element] = { $in: filters[element] }
            }
        });

        // filter on enrollment date
        if (filters && (filters.startDate || filters.endDate)) {
            matchObj.createdAt = {};
            if (filters.startDate) matchObj.createdAt['$gte'] = new Date(moment(filters.startDate).startOf('day'));
            if (filters.endDate) matchObj.createdAt['$lte'] = new Date(moment(filters.endDate).endOf('day'));
        }

        query.push({ $match: matchObj });
        query.push({ $sort: sort });
        query.push({ $skip: skip });
        query.push({ $limit: limit });
        query.push({
            $project: {
                notificationId: 1,
                index: 1,
                message: 1,
                appId: 1,
                sentTo: 1,
                createdAt: 1,
                updatedAt: 1,
                category: 1,
                title: 1
            }
        })

        notificationModel.aggregate(query).then(async userData => {
            let total = await notificationModel.aggregate([{ $match: matchObj }, { $count: "count" }])
            sendObj.userData = userData;
            sendObj.count = 0;
            if (total[0] && total[0].count) {
                sendObj.count = (total[0].count);
            }
            return structurService.getViewData(page)
        }).then(data => {
            sendObj.attributeList = data;
            resolve(sendObj)
        }).catch(err => {
            reject(err);
        })
    })
}

// payments list function
let getPaymentsList = (req) => {
    return new Promise((resolve, reject) => {
        let sendObj = {};
        let query = [];
        let page = req.body.page;
        console.log('page-----------', page);
        let limit = req.body.limit ? req.body.limit : 10;
        let skip = req.body.skip ? req.body.skip : 0;
        let orderby = req.body.orderby ? req.body.orderby : 'createdAt';
        let orderin = 1;
        if (req.body.orderin === 'desc') orderin = -1;
        let sort = {};
        sort[orderby] = orderin;
        let search = req.body.search;
        let filters = req.body.filters;
        const appId = req.body.appId;
        let matchObj = {}
        if (appId) matchObj.appId = appId
        if (search) {
            matchObj['$or'] = [
                { $text: { $search: search } },
                { invoiceNo: { $regex: search, $options: 'i' } },
                { fullName: { $regex: search, $options: 'i' } },
                { emailId: { $regex: search, $options: 'i' } },
                { phoneNo: { $regex: search, $options: 'i' } }
            ]
        }

        Object.keys(filters).forEach(element => {
            if (filters[element] && Array.isArray(filters[element]) && filters[element].length > 0 && filters[element].length > 0) {
                matchObj[element] = { $in: filters[element] }
            }
        });

        // filter on enrollment date
        if (filters && (filters.startDate || filters.endDate)) {
            matchObj.createdAt = {};
            if (filters.startDate) matchObj.createdAt['$gte'] = new Date(moment(filters.startDate).startOf('day'));
            if (filters.endDate) matchObj.createdAt['$lte'] = new Date(moment(filters.endDate).endOf('day'));
        }

        query.push({ $match: matchObj });
        query.push({ $sort: sort });
        query.push({ $skip: skip });
        query.push({ $limit: limit });
        query.push({
            $project: {
                appId: 1,
                paymentId: 1,
                userId: 1,
                planName: 1,
                planType: 1,
                amount: 1,
                discount: 1,
                tax: 1,
                cgst: 1,
                sgst: 1,
                igst: 1,
                payableAmount: 1,
                gstNumber: 1,
                startDate: 1,
                endDate: 1,
                invoiceNo: 1,
                fullName: 1,
                emailId: 1,
                mailStatus: 1,
                phoneNo: 1,
                paymentStatus: 1,
                updatedAt: 1,
                createdAt: 1,
                firmName: 1,
                phoneNo: 1,
                currency: 1,
                txntype: 1,
                respcode: 1,
                respmsg: 1,
                gatewayName: 1,
                banktxnid: 1,
                bankname: 1,
                paymentMode: 1,
                txnAmount: 1,
                refundAmount: 1,
                transactionId: 1,
                transactionDate: 1,
                status: 1,
                orderId: 1,
                link: 1
            }
        })

        paymentModel.aggregate(query).then(async userData => {
            let total = await paymentModel.aggregate([{ $match: matchObj }, { $count: "count" }])
            sendObj.userData = userData;
            sendObj.count = 0;
            if (total[0] && total[0].count) {
                sendObj.count = (total[0].count);
            }
            return structurService.getViewData(page)
        }).then(data => {
            sendObj.attributeList = data;
            resolve(sendObj)
        }).catch(err => {
            reject(err);
        })
    })
}

// get Gst report for last month
let getGstReport = (req) => {
    return new Promise((resolve, reject) => {
        let sendObj = {};
        let query = [];
        let page = req.body.page;
        console.log('page-----------', page);
        let limit = req.body.limit ? req.body.limit : 1000;
        let skip = req.body.skip ? req.body.skip : 0;
        let orderby = req.body.orderby ? req.body.orderby : 'createdAt';
        let orderin = 1;
        if (req.body.orderin === 'desc') orderin = -1;
        let sort = {};
        sort[orderby] = orderin;
        let filters = req.body.filters;
        const appId = req.body.appId;
        let lastMonthStartDate = moment().subtract(1, 'month').startOf('month');
        let lastMonthEndDate = moment().subtract(1, 'month').endOf('month');
        let matchObj = { date: { $gte: new Date(lastMonthStartDate), $lte: new Date(lastMonthEndDate) } }
        if (appId) matchObj.appId = appId

        Object.keys(filters).forEach(element => {
            if (filters[element] && Array.isArray(filters[element]) && filters[element].length > 0 && filters[element].length > 0) {
                matchObj[element] = { $in: filters[element] }
            }
        });

        // filter on enrollment date
        if (filters && (filters.startDate || filters.endDate)) {
            matchObj.createdAt = {};
            if (filters.startDate) matchObj.createdAt['$gte'] = new Date(moment(filters.startDate).startOf('day'));
            if (filters.endDate) matchObj.createdAt['$lte'] = new Date(moment(filters.endDate).endOf('day'));
        }

        console.log("matchObj", matchObj);

        query.push({ $match: matchObj });
        query.push({ $sort: sort });
        query.push({ $skip: skip });
        query.push({ $limit: limit });

        paymentModel.aggregate(query).then(async userData => {
            console.log('userData', userData.length);
            let total = await paymentModel.aggregate([{ $match: matchObj }, { $count: "count" }])
            sendObj.userData = userData;
            sendObj.count = 0;
            if (total[0] && total[0].count) {
                sendObj.count = (total[0].count);
            }
            return structurService.getViewData(page)
        }).then(data => {
            sendObj.attributeList = data;
            resolve(sendObj)
        }).catch(err => {
            reject(err);
        })
    })
}

// change device list function
let changeDevice = (req) => {
    return new Promise((resolve, reject) => {
        let sendObj = {};
        let query = [];
        let page = req.body.page;
        console.log('page-----------', page);
        let limit = req.body.limit ? req.body.limit : 10;
        let skip = req.body.skip ? req.body.skip : 0;
        let orderby = req.body.orderby ? req.body.orderby : 'createDate';
        let orderin = 1;
        if (req.body.orderin === 'desc') orderin = -1;
        let sort = {};
        sort[orderby] = orderin;
        let search = req.body.search;
        let filters = req.body.filters;
        const appId = req.body.appId;
        let matchObj = {
            cdStatus: true
        }
        if (appId) matchObj.appId = appId
        if (search) {
            matchObj['$or'] = [
                { $text: { $search: search } },
                { fullName: { $regex: search, $options: 'i' } },
                { phoneNo: { $regex: search, $options: 'i' } }
            ]
        }
        Object.keys(filters).forEach(element => {
            if (filters[element] && Array.isArray(filters[element]) && filters[element].length > 0 && filters[element].length > 0) {
                matchObj[element] = { $in: filters[element] }
            }
        });

        // filter on enrollment date
        if (filters && (filters.startDate || filters.endDate)) {
            matchObj.createdAt = {};
            if (filters.startDate) matchObj.createdAt['$gte'] = new Date(moment(filters.startDate).startOf('day'));
            if (filters.endDate) matchObj.createdAt['$lte'] = new Date(moment(filters.endDate).endOf('day'));
        }

        query.push({ $match: matchObj });
        query.push({ $sort: sort });
        query.push({ $skip: skip });
        query.push({ $limit: limit });

        query.push({
            $project: {
                appId: 1,
                emailId: 1,
                userId: 1,
                fullName: 1,
                phoneNo: 1,
                createdAt: 1,
                updatedAt: 1,
                cdCounter: 1,
                cdStatus: 1,
                cpCounter: 1,
                declineStatus: 1
                // plans: { $arrayElemAt: ["$plans", 0] },
            }
        })
        userModel.aggregate(query).then(async userData => {
            let total = await userModel.aggregate([{ $match: matchObj }, { $count: "count" }])
            sendObj.userData = userData;
            sendObj.count = 0;
            if (total[0] && total[0].count) {
                sendObj.count = (total[0].count);
            }
            return structurService.getViewData(page)
        }).then(data => {
            sendObj.attributeList = data;
            resolve(sendObj)
        }).catch(err => {
            reject(err);
        })
    })
}

// change device list function
let chatList = (req) => {
    return new Promise((resolve, reject) => {
        let sendObj = {};
        let query = [];
        let page = req.body.page;
        console.log('page-----------', page);
        let limit = req.body.limit ? req.body.limit : 10;
        let skip = req.body.skip ? req.body.skip : 0;
        let orderby = req.body.orderby ? req.body.orderby : 'updateDate';
        let orderin = 1;
        if (req.body.orderin === 'desc') orderin = -1;
        let sort = {};
        sort[orderby] = orderin;
        let search = req.body.search;
        let filters = req.body.filters;
        const appId = req.body.appId;
        let matchObj = {}
        if (appId) matchObj.appId = appId
        // if (search) {
        //     matchObj['$or'] = [
        //         { $text: { $search: search } },
        //         { fullName: { $regex: search, $options: 'i' } },
        //         { phoneNo: { $regex: search, $options: 'i' } }
        //     ]
        // }
        Object.keys(filters).forEach(element => {
            if (filters[element] && Array.isArray(filters[element]) && filters[element].length > 0 && filters[element].length > 0) {
                matchObj[element] = { $in: filters[element] }
            }
        });

        // filter on enrollment date
        if (filters && (filters.startDate || filters.endDate)) {
            matchObj.createdAt = {};
            if (filters.startDate) matchObj.createdAt['$gte'] = new Date(moment(filters.startDate).startOf('day'));
            if (filters.endDate) matchObj.createdAt['$lte'] = new Date(moment(filters.endDate).endOf('day'));
        }

        query.push({ $match: matchObj });
        query.push({ $sort: sort });
        query.push({ $skip: skip });
        query.push({ $limit: limit });

        query.push({
            $project: {
                appId: 1,
                userId: 1,
                fullName: 1,
                status: 1,
                createDate: 1,
                updateDate: 1
            }
        })
        chatModel.aggregate(query).then(async userData => {
            let total = await chatModel.aggregate([{ $match: matchObj }, { $count: "count" }])
            sendObj.userData = userData;
            sendObj.count = 0;
            if (total[0] && total[0].count) {
                sendObj.count = (total[0].count);
            }
            return structurService.getViewData(page)
        }).then(data => {
            sendObj.attributeList = data;
            resolve(sendObj)
        }).catch(err => {
            reject(err);
        })
    })
}

module.exports = {
    chooseTable,
    getMemberList,
    getPaymentsList
}