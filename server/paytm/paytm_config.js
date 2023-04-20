// 'use strict';

// module.exports = {             // staging credentials
//     paytm_config: {
//         MID: 'VxCChp62478836999564',
//         WEBSITE: '',
//         CHANNEL_ID: 'WAP',
//         INDUSTRY_TYPE_ID: '',
//         MERCHANT_KEY: '%FoM&QV!FuY7whQq'
//     }
// }

'use strict';


// -----------  mee and nee credentails ----------------
var PAYTM_STAG_URL = 'https://pguat.paytm.com';
var PAYTM_PROD_URL = 'https://secure.paytm.in';
var MID = 'MEENEE32331547612765';
var PAYTM_ENVIORMENT = 'PROD';   // PROD FOR PRODUCTION
var PAYTM_MERCHANT_KEY = 'loIApoTHiiWgn@1k';
var WEBSITE = 'MEENEE';
var CHANNEL_ID = 'WEB';
var INDUSTRY_TYPE_ID = 'Retail109';
// var GUID = "47acd048-e54d-49a2-9b7c-e712ee5582fc";
var CALLBACK_URL = 'http://www.fuelpricealert.in/paytm/response';
// var CALLBACK_URL = 'http://www.fuelpricealert.in/paytm/response';
var PAYTM_FINAL_URL = '';
if (PAYTM_ENVIORMENT == 'PROD') {
  PAYTM_FINAL_URL = 'https://securegw.paytm.in/order/process';
} else {
  console.log("-------------------------------------");
  PAYTM_FINAL_URL = 'https://securegw.paytm.in/order/process';
}


// // ------------ staging credentails ---------------------
// var PAYTM_STAG_URL = 'https://pguat.paytm.com';
// var PAYTM_PROD_URL = 'https://secure.paytm.in';
// var MID = 'MEEAND82484406180072';
// var PAYTM_ENVIORMENT = 'Prod';   // PROD FOR PRODUCTION
// var PAYTM_MERCHANT_KEY = 'EvkpgkSxgUG7#h2b';
// var WEBSITE = 'APPSTAGING';
// var CHANNEL_ID = 'WAP';
// var INDUSTRY_TYPE_ID = 'Retail';
// var PAYTM_FINAL_URL = '';
// if (PAYTM_ENVIORMENT == 'TEST') {
//   PAYTM_FINAL_URL = 'https://securegw-stage.paytm.in/order/process';
// } else {
//   // PAYTM_FINAL_URL = 'https://securegw-stage.paytm.in/order/process';
//    PAYTM_FINAL_URL = 'https://securegw.paytm.in/order/process';
// }

// // --------- 4ibiz creaddentails----------
// var PAYTM_STAG_URL = 'https://pguat.paytm.com';
// var PAYTM_PROD_URL = 'https://secure.paytm.in';
// var MID = '4iBizt50617255565212';
// var PAYTM_ENVIORMENT = 'PROD';   // PROD FOR PRODUCTION
// var PAYTM_MERCHANT_KEY = '99CQsOU5VTmkkiBn';
// var WEBSITE = '4iBiztWEB';
// var CHANNEL_ID = 'WEB';
// var INDUSTRY_TYPE_ID = 'Retail109';
// var PAYTM_FINAL_URL = '';
// if (PAYTM_ENVIORMENT == 'TEST') {
//   PAYTM_FINAL_URL = 'https://securegw-stage.paytm.in/order/process';
// } else {
//   console.log("-------------------------------------");
//   PAYTM_FINAL_URL = 'https://securegw.paytm.in/order/process';
// }


module.exports = {
  MID: MID,
  MERCHANT_KEY: PAYTM_MERCHANT_KEY,
  PAYTM_FINAL_URL: PAYTM_FINAL_URL,
  WEBSITE: WEBSITE,
  CHANNEL_ID: CHANNEL_ID,
  INDUSTRY_TYPE_ID: INDUSTRY_TYPE_ID
};
