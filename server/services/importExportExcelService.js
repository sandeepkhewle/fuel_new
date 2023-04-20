//packages
const mongoxlsx = require('mongo-xlsx');
const excelToJson = require('convert-excel-to-json');
const moment = require('moment');
const pLimit = require('p-limit');
const json2xls = require('json2xls');
const fs = require('fs');
const uniqid = require('uniqid');

// services
const tableSerivce = require('../services/tableService');

let exportExcel = async (page, req) => {
    try {
        req.body.skip = 0;
        req.body.limit = 10000;
        let tableData = await tableSerivce.chooseTable(page, req)
        let newData = await createJsonMap(tableData.userData, tableData.attributeList);
        var xls = await json2xls(newData);
        let sheetPath = `./public/Excel/${uniqid()}.xlsx`;
        fs.writeFileSync(sheetPath, xls, 'binary');
        return sheetPath;
    } catch (error) {
        console.log('error', error);
        throw error;
    }
}

let createJsonMap = (data, mapping) => {
    return new Promise((resolve, reject) => {
        let mappedJson = [];
        data.forEach(element => {
            let singleObj = {};
            mapping.forEach(singleAttr => {
                if (singleAttr.pipe === 'date' && element[singleAttr.prop]) {
                    singleObj[singleAttr.name] = moment(new Date(element[singleAttr.prop])).format('DD/MM/YYYY')
                } else if (singleAttr.prop == 'button') {
                    // console.log('do nothing---------------');
                } else if (singleAttr.pipe == 'num' && singleAttr.prop) {
                    singleObj[singleAttr.name] = Number(element[singleAttr.prop])
                } else if (singleAttr.pipe == 'dob' && singleAttr.prop && element[singleAttr.prop]) {
                    let dob = element[singleAttr.prop].split(":");
                    let d = dob[0];
                    let m = dob[1];
                    switch (m) {
                        case "01": m = "Jan";
                            break;
                        case "02": m = "Feb";
                            break;
                        case "03": m = "Mar";
                            break;
                        case "04": m = "Apr";
                            break;
                        case "05": m = "May";
                            break;
                        case "06": m = "Jun";
                            break;
                        case "07": m = "Jul";
                            break;
                        case "08": m = "Aug";
                            break;
                        case "09": m = "Sep";
                            break;
                        case "10": m = "Oct";
                            break;
                        case "11": m = "Nov";
                            break;
                        case "12": m = "Dec";
                            break;

                        default:
                            break;
                    }
                    // console.log(`${d} - ${m}`);
                    singleObj[singleAttr.name] = `${d} - ${m}`
                }
                else singleObj[singleAttr.name] = element[singleAttr.prop]
            });
            mappedJson.push(singleObj)
        });
        resolve(mappedJson);
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
    // mongoToExcel: mongoToExcel,
    // importMemberExcel: importMemberExcel,
    // importEnquiryExcel: importEnquiryExcel,
    exportExcel: exportExcel,
    deleteFile: deleteFile
}