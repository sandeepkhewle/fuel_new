/*
File service
File operation will be performed here -  store or delete file
*/

// packages
const fs = require('fs');
const AWS = require('aws-sdk');
const uniqid = require('uniqid');

// configs
const config = require('../config/config');
const bucketName = config.bucketName;

AWS.config.update({
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey
});

let s3 = new AWS.S3();

/*------------------- Upload File To AWS -------------------*/
let uplodFileToAws = (file, picName, folderName) => {
    console.log('----------uplodFileToAws------------ ');
    return new Promise((resolve, reject) => {
        if (file) {
            if (!picName) {
                let imgNameArray = file.originalname.split('.');
                picName = uniqid() + '.' + imgNameArray[imgNameArray.length - 1];
            }
            // console.log('file---------------------- ' + file);
            const params = {
                Bucket: bucketName + '/' + folderName, // pass your bucket name
                Key: picName, // file will be saved as testBucket
                Body: file.buffer
            };
            s3.upload(params, function (s3Err, dataStored) {
                if (s3Err) {
                    console.log('err---', s3Err);
                    reject(s3Err)
                }
                else {
                    resolve(dataStored)
                }
                // console.log(`File uploaded successfully at ${dataStored.Location}`)
            });
        } else {
            resolve()
        }
    })
}

/*------------------- Upload Local File To AWS -------------------*/
let uploLocalFileToAws = (filePath, picName) => {
    // console.log("filePath ", filePath);
    return new Promise((resolve, reject) => {
        try {
            fs.readFile(filePath, (err, data) => {
                if (err) reject(err);
                else {
                    const params = {
                        Bucket: bucketName, // pass your bucket name
                        Key: picName,
                        Body: data
                    };
                    s3.upload(params, function (s3Err, dataStored) {
                        if (s3Err) reject(s3Err)
                        console.log(`File uploaded successfully at ${dataStored.Location}`)
                        resolve(dataStored.Location);
                    });
                }
            });
        } catch (error) {
            console.log("error--------------", error);
            reject(error)
        }
    })
}


/*------------------- Upload Chat Images To AWS -------------------*/
let uploadChatImageToAws = (buffer) => {
    return new Promise((resolve, reject) => {
        console.log("file---------------------- ");
        let imageRandomName = uniqid();
        if (buffer) {
            const params = {
                Bucket: bucketName, // pass your bucket name
                Key: imageRandomName + '.png', // file will be saved as testBucket
                Body: buffer
            };
            s3.upload(params, function (s3Err, dataStored) {
                if (s3Err) throw s3Err
                console.log(`File uploaded successfully at ${dataStored.Location}`)
                resolve(dataStored)
            });
        } else {
            resolve()
        }
    })
}

/*------------------- Delete File -------------------*/
let deleteFile = (fileName) => {
    return new Promise((resolve, reject) => {
        console.log("filename 18 - ", fileName);
        fs.unlink(fileName, (err, data) => {
            console.log(data);
            if (err) {
                reject(err)
            } else {
                resolve("file deleted")
            }
        })
    })
}

module.exports = {
    uplodFileToAws: uplodFileToAws,
    uploLocalFileToAws: uploLocalFileToAws,
    uploadChatImageToAws: uploadChatImageToAws,
    deleteFile: deleteFile
}