// mailjet credentials
const mailjetPublicKey = require('../config/config').config.mailjetPublicKey;
const mailjetSecretKey = require('../config/config').config.mailjetSecretKey;
const emailFrom = "invoice@fuelpricealert.in";
const Mailjet = require('node-mailjet');

const mailjet = new Mailjet({
    apiKey: mailjetPublicKey,
    apiSecret: mailjetSecretKey
});

const sendMail = async (to, subject, text, html, attachments) => {
    try {
        if (attachments) {
            // console.log("base 68 data ---- ", to, subject, text, html, attachments);
            console.log("base 49 data ---- ", to);
            // let base64String = data;
            let fileName = attachments[0].fileName;
            let base64String = '"' + attachments[0].base64 + '"';
            // console.log("base 64 ----- ", base64String);
            const request = await mailjet
                .post("send", { 'version': 'v3.1' })
                .request({
                    "Messages": [
                        {
                            "From": {
                                "Email": emailFrom,
                                // "Name": "trups" 
                            },
                            "To": [{
                                "Email": to,
                                // "Name": ""
                            }],
                            "Subject": subject,
                            "TextPart": text,
                            "HTMLPart": html,
                            "InlinedAttachments": [
                                {
                                    "ContentType": "application/pdf",
                                    "Filename": fileName,
                                    "ContentID": "",
                                    "Base64Content": base64String
                                }
                            ]
                        }
                    ]
                })
            return request
        } else {
            const request = await mailjet
                .post("send", { 'version': 'v3.1' })
                .request({
                    "Messages": [
                        {
                            "From": {
                                "Email": emailFrom,
                                // "Name": "trups" 
                            },
                            "To": [{
                                "Email": to,
                                // "Name": ""
                            }],
                            "Subject": subject,
                            "TextPart": text
                        }
                    ]
                })
            return request;
        }
    } catch (error) {
        console.error("error ---- ", error);
        throw error
    }
}

module.exports = { sendMail }