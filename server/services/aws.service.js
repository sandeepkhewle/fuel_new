// package
const fs = require('fs');
const AWS = require('aws-sdk');
const uniqid = require('uniqid');

// config
const accessKeyId1 = require('../config/config').config.accessKeyId;
const secretAccessKey1 = require('../config/config').config.secretAccessKey;

AWS.config.update({
    accessKeyId: accessKeyId1,
    secretAccessKey: secretAccessKey1
});

// bucket name from config file
const Bucket = require('../config/config').config.Bucket;

let s3 = new AWS.S3();

// upload excel file to aws - i/p > filePath o/p > url of s3
let uploLocalFileToAws = (awsFolder, filePath, fileName) => {
    console.log({ awsFolder, filePath });
    return new Promise((resolve, reject) => {
        try {
            fs.readFile(filePath, (err, data) => {
                if (err) reject(err);
                else {
                    const params = {
                        Bucket: Bucket, // pass your bucket name
                        Key: awsFolder + fileName,
                        Body: data
                    };
                    s3.upload(params, function (s3Err, dataStored) {
                        if (s3Err) reject(s3Err)
                        console.log(`File uploaded successfully at ${dataStored.Location}`)
                        deleteFile(filePath).then(() => {
                            resolve(dataStored.Location)
                        })
                    });
                }
            });
        } catch (error) {
            console.log("error--------------", error);
            reject(error)
        }
    })
}

// upload buffer to aws
let uploadBufferToAws = (awsFolder, originalname, buffer) => {
    return new Promise((resolve, reject) => {
        console.log('awsFolder, originalname, buffer', awsFolder, originalname, buffer);
        let params = {
            Bucket: Bucket,
            Key: 'fitness/' + awsFolder + '/' + originalname,
            Body: buffer
        };
        if (buffer) {
            s3.upload(params, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    logo_url = data.Location;
                    // console.log(logo_url);
                    resolve(data.Location);
                }
            });
        } else {
            resolve();
        }
    })
}

// delete file from aws
let deleteFileFromAws = (url) => {
    console.log('----------deleteFileFromAws------------ ', url);
    console.log('Bucket', Bucket);
    let newUrl = url.split('.com/');
    url2 = newUrl[1]
    console.log('newUrl--------', url2);
    return new Promise((resolve, reject) => {
        if (url) {
            const params = {
                Bucket: 'fytrackstorage', // pass your bucket name
                Key: url2
            };
            s3.deleteObject(params, function (s3Err, dataStored) {
                if (s3Err) reject(s3Err)
                console.log(`File deleted successfully at ${JSON.stringify(dataStored)}`)
                resolve(dataStored)
            });
        } else {
            resolve()
        }
    })
}


let deleteFile = (fileName) => {
    return new Promise((resolve, reject) => {
        console.log("delete filename - ", fileName);
        fs.unlink(fileName, (err, data) => {
            if (err) {
                console.log('err deleting file----', err);
                resolve()
            } else {
                resolve("file deleted")
            }
        })
    })
}

module.exports = {
    uploLocalFileToAws: uploLocalFileToAws,
    uploadBufferToAws: uploadBufferToAws,
    deleteFileFromAws: deleteFileFromAws
}
