'use strict';


let config = {
    production: {
        confEnv: 'production',
        passKey: "6T{z'8`zkz0,tY<ILZR^/NhQo8ap'Whj", //password encryption

        //gcm config details
        gcmServerKey: 'AAAAPhEzu0A:APA91bEcmlQoxAvfA1lWpJz6X5vhKQ5lWOuwJ_hK4sjcDHAtsewrY9rpjxVx2NiNdJ1Aum9_z5SQ-rOmyb3YMj_sVW-_k9WWpNCwjRIzJ_riMeD0kABpi9uQfBc4_ieJnzOV7XCZdd3o',
        // legacyServerKey: 'AIzaSyAm9Anm4FcleLxIly-KAlDTvx55wyNg_y8',  // generate this key 
        senderId: '266576575296',

        //aws config details
        accessKeyId: "AKIATKGLISTWSADKJHYV",
        secretAccessKey: "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",
        s3url: "https://s3.ap-south-1.amazonaws.com/fuelprealert",

        // database
        database: 'mongodb://localhost:27017/fuledb',
        secret_key: "MRy1NTqbVgkkYcz3sp2m5iLiaPlLoD0RMRy1NTqbVgkkYcz3sp2m5iLiaPlLoD0R",
        autoIndex: true,
        mongooseDebug: false,

        // s3 bucket
        Bucket: 'fuelprealert/production',

        // mailjet credentials
        mailjetPublicKey: '87723a35486d0d0db64ffa4da468c9a3',
        mailjetSecretKey: 'be988942db3c75beb5077aad6b8c9887',

        //jwt credentials
        jwtSecret: 'f;&4sa?xZwS-Kd?,`52Z2d75(~xD#X58',

        //payu
        merchantKey: 'oZ7Yrl',
        merchantSalt: 'f6nCgCLx',
        callbackUrl: 'https://api.fuelpricealert.in/web/Success',

        // paytm cred
        PAYTM_URL: 'https://secure.paytm.in',
        MID: 'MEENEE32331547612765',
        PAYTM_ENVIORMENT: 'PROD',   // PROD FOR PRODUCTION
        PAYTM_MERCHANT_KEY: 'loIApoTHiiWgn@1k',
        WEBSITE: 'MEENEE',
        CHANNEL_ID: 'WEB',
        INDUSTRY_TYPE_ID: 'Retail109',
        //  GUID : "47acd048-e54d-49a2-9b7c-e712ee5582fc",
        CALLBACK_URL: 'https://api.fuelpricealert.in/web/response',
        //  CALLBACK_URL : 'http://www.infotecindia.in/paytm/response',
        PAYTM_FINAL_URL: 'https://securegw.paytm.in/order/process',
        PAYTMRESPONSE_URL: "https://securegw.paytm.in/order/status?JsonData="
    },
    staging: {
        confEnv: 'staging',
        passKey: "6T{z'8`zkz0,tY<ILZR^/NhQo8ap'Whj", //password encryption

        //gcm config details
        gcmServerKey: 'AAAAPhEzu0A:APA91bEcmlQoxAvfA1lWpJz6X5vhKQ5lWOuwJ_hK4sjcDHAtsewrY9rpjxVx2NiNdJ1Aum9_z5SQ-rOmyb3YMj_sVW-_k9WWpNCwjRIzJ_riMeD0kABpi9uQfBc4_ieJnzOV7XCZdd3o',
        // legacyServerKey: 'AIzaSyAm9Anm4FcleLxIly-KAlDTvx55wyNg_y8', // generate this key 
        senderId: '266576575296',

        //aws config details
        accessKeyId: "AKIATKGLISTWSADKJHYV",
        secretAccessKey: "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",
        s3url: "https://s3.ap-south-1.amazonaws.com/fuelprealert",

        // database
        database: 'mongodb://0.0.0.0:27017/fuledb',
        secret_key: "MRy1NTqbVgkkYcz3sp2m5iLiaPlLoD0RMRy1NTqbVgkkYcz3sp2m5iLiaPlLoD0R",
        autoIndex: true,
        mongooseDebug: false,

        // s3 bucket
        Bucket: 'fuelprealert/staging',

        // mailjet credentials
        mailjetPublicKey: '87723a35486d0d0db64ffa4da468c9a3',
        mailjetSecretKey: 'be988942db3c75beb5077aad6b8c9887',

        //jwt credentials
        jwtSecret: 'f;&4sa?xZwS-Kd?,`52Z2d75(~xD#X58',

        //payu
        merchantKey: 'oZ7Yrl',
        merchantSalt: 'f6nCgCLx',
        callbackUrl: 'http://localhost:3737/web/Success',

        // paytm cred
        // PAYTM_URL: 'https://pguat.paytm.com',
        PAYTM_URL: 'https://secure.paytm.in',
        MID: 'MEENEE32331547612765',
        PAYTM_ENVIORMENT: 'PROD',   // PROD FOR PRODUCTION
        PAYTM_MERCHANT_KEY: 'loIApoTHiiWgn@1k',
        WEBSITE: 'MEENEE',
        CHANNEL_ID: 'WEB',
        INDUSTRY_TYPE_ID: 'Retail109',
        //  GUID : "47acd048-e54d-49a2-9b7c-e712ee5582fc",
        CALLBACK_URL: 'http://65.0.75.20:4108/web/response',
        //  CALLBACK_URL : 'http://www.infotecindia.in/paytm/response',
        PAYTM_FINAL_URL: 'https://securegw.paytm.in/order/process',
        PAYTMRESPONSE_URL: "https://securegw.paytm.in/order/status?JsonData="
    }
}

let env = process.env.NODE_ENV ? process.env.NODE_ENV : 'staging';
console.log('***************************************');
console.log(`******** Environment - ${env} ********`);
console.log(`******** Primary server - ${process.env.PRIMARYSERVER} ********`);
console.log('***************************************');

module.exports = {
    config: config[env]
}