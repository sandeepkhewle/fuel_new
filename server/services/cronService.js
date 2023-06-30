// packages
const CronJob = require('cron').CronJob;
const cronstrue = require('cronstrue');
const moment = require('moment');
const pLimit = require('p-limit');

// model
const userModel = require('../models/users.model');
const paymentModel = require('../models/payments.model');

// const isPrimary = JSON.parse(JSON.stringify(process.env)).PRIMARYSERVER ? true : false;
// const node_env = JSON.parse(JSON.stringify(process.env)).NODE_ENV;


let RegisterAllCron = () => {
  console.log('-----------cron registation started--------');

  // send notification to payment due today
  let cronString1 = '0 30 5 * * *';
  const job1 = new CronJob(cronString1, function () { userActiveInactive(); }, null, true, 'Asia/Kolkata');
  job1.start();
  console.log('cron job1 will run --- ', job1.running, '---', cronstrue.toString(cronString1));

  console.log('-----------cron registation ended--------');
}

// set user active inactive
let userActiveInactive = async () => {
  console.log("---------------userActiveInactive------");
  try {
    await userModel.updateMany({}, { $set: { isActive: false, status: 'Inactive' } });
    let paymentData = await paymentModel.aggregate([{ $match: { paymentStatus: "Success", endDate: { $gte: new Date() } } }, { $group: { _id: null, userId: { $push: "$userId" } } }]);

    // console.log('paymentData', paymentData);
    let userList = paymentData[0].userId;
    // console.log('userList', userList);
    await userModel.updateMany({ userId: { $in: userList } }, { $set: { isActive: true } })
    console.log('user inactivated');
  } catch (error) {
    console.error("error at userActiveInactive", error);
  }
}

module.exports = {
  RegisterAllCron
}