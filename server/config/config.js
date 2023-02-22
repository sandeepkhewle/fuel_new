'use strict';


let config = {
    production: {
        confEnv: 'production',
        passKey: "6T{z'8`zkz0,tY<ILZR^/NhQo8ap'Whj", //password encryption

        //gcm config details
        gcmServerKey: 'AAAA8dvpYGU:APA91bENo5jd8Xj-73kaQrJdS7kUcyBNHXoO4OpllezGXKiXNS1iGchoGTG_A2trX0ShRwcba5uVArmwj94xzIgauvS61CAnh5BPwa6ecxls64ClPOxVURIL7VrYFdu6kRNpSam5Un3v',
        // legacyServerKey: 'AIzaSyC8QrU1D7GLRlWAg_1DUI3z1kzifMPnlRA',  // generate this key 
        senderId: '1038776623205',

        //aws config details
        accessKeyId: "AKIATKGLISTWSADKJHYV",
        secretAccessKey: "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",
        s3url: "https://s3.ap-south-1.amazonaws.com/infotecindia",

        // database
        database: 'mongodb://localhost:27017/fuledb',
        secret_key: "MRy1NTqbVgkkYcz3sp2m5iLiaPlLoD0RMRy1NTqbVgkkYcz3sp2m5iLiaPlLoD0R",
        autoIndex: true,
        mongooseDebug: false,

        // s3 bucket
        Bucket: 'infotecindia/production',

        // mailjet credentials
        mailjetPublicKey: '68c75fdc5e51f6e5da878d1d2c711c3c',
        mailjetSecretKey: '0c657470719b61e904baf0680beb6c75',

        //jwt credentials
        jwtSecret: 'f;&4sa?xZwS-Kd?,`52Z2d75(~xD#X58',

        //payu
        merchantKey: 'oZ7Yrl',
        merchantSalt: 'f6nCgCLx',
        callbackUrl: 'https://www.infotecindia.in/web/Success',

        // paytm cred
        PAYTM_URL: 'https://secure.paytm.in',
        MID: 'A2Info81257778072208',
        PAYTM_ENVIORMENT: 'PROD',   // PROD FOR PRODUCTION
        PAYTM_MERCHANT_KEY: 'Va0uEryG36G@tgee',
        WEBSITE: 'DEFAULT',
        CHANNEL_ID: 'WEB',
        INDUSTRY_TYPE_ID: 'ECommerce',
        //  GUID : "47acd048-e54d-49a2-9b7c-e712ee5582fc",
        CALLBACK_URL: 'https://www.infotecindia.in/web/response',
        //  CALLBACK_URL : 'http://www.infotecindia.in/paytm/response',
        PAYTM_FINAL_URL: 'https://securegw.paytm.in/order/process',
        PAYTMRESPONSE_URL: "https://securegw.paytm.in/order/status?JsonData="
    },
    staging: {
        confEnv: 'staging',
        passKey: "6T{z'8`zkz0,tY<ILZR^/NhQo8ap'Whj", //password encryption

        //gcm config details
        gcmServerKey: 'AAAA8dvpYGU:APA91bENo5jd8Xj-73kaQrJdS7kUcyBNHXoO4OpllezGXKiXNS1iGchoGTG_A2trX0ShRwcba5uVArmwj94xzIgauvS61CAnh5BPwa6ecxls64ClPOxVURIL7VrYFdu6kRNpSam5Un3v',
        // legacyServerKey: 'AIzaSyC8QrU1D7GLRlWAg_1DUI3z1kzifMPnlRA', // generate this key 
        senderId: '1038776623205',

        //aws config details
        accessKeyId: "AKIATKGLISTWSADKJHYV",
        secretAccessKey: "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",
        s3url: "https://s3.ap-south-1.amazonaws.com/infotecindia",

        // database
        database: 'mongodb://localhost:27017/fuledb',
        secret_key: "MRy1NTqbVgkkYcz3sp2m5iLiaPlLoD0RMRy1NTqbVgkkYcz3sp2m5iLiaPlLoD0R",
        autoIndex: true,
        mongooseDebug: false,

        // s3 bucket
        Bucket: 'infotecindia/staging',

        // mailjet credentials
        mailjetPublicKey: '68c75fdc5e51f6e5da878d1d2c711c3c',
        mailjetSecretKey: '0c657470719b61e904baf0680beb6c75',

        //jwt credentials
        jwtSecret: 'f;&4sa?xZwS-Kd?,`52Z2d75(~xD#X58',

        //payu
        merchantKey: 'oZ7Yrl',
        merchantSalt: 'f6nCgCLx',
        callbackUrl: 'http://localhost:3737/web/Success',

        // paytm cred
        // PAYTM_URL: 'https://pguat.paytm.com',
        PAYTM_URL: 'https://secure.paytm.in',
        MID: 'A2Info81257778072208',
        PAYTM_ENVIORMENT: 'PROD',   // PROD FOR PRODUCTION
        PAYTM_MERCHANT_KEY: 'Va0uEryG36G@tgee',
        WEBSITE: 'DEFAULT',
        CHANNEL_ID: 'WEB',
        INDUSTRY_TYPE_ID: 'ECommerce',
        //  GUID : "47acd048-e54d-49a2-9b7c-e712ee5582fc",
        CALLBACK_URL: 'http://localhost:3737/web/response',
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