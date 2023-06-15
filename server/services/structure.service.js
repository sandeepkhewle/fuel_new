
// json
// const list = require('../jsonData/list.json');
const viewData = require('../json/viewData.json');
const filters = require('../json/filters.json');
const sideNav = require('../json/sideNav.json')
const list = require('../json/list.json')

let getSideNav = async () => {
    try {
        const sideNavJson = JSON.parse(JSON.stringify(sideNav));
        return (sideNavJson['dashboardNav'])
    } catch (error) {
        throw error;
    }
}

// get view data json
let getViewData = (page) => {
    return new Promise((resolve, reject) => {
        console.log({ page });
        const viewDataJson = JSON.parse(JSON.stringify(viewData));
        // console.log({ viewDataJson });
        resolve(viewDataJson[page].attributes);
    })
}

/** get filer for mage from filter.jsom */
let getFilters = ({ page }) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log('page', page);
            let pagefilter = filters[page] ? JSON.parse(JSON.stringify(filters[page])) : null;
            resolve(pagefilter)
        } catch (error) {
            console.log('error', error);
            reject(error);
        }
    })
}

// /** to get general dropdown list for different forms */
// let getGeneralDataList = (type, subType) => {
//     return new Promise((resolve, reject) => {
//         let dataToSend = list[type];
//         if (subType) {
//             let dataToSend2;
//             dataToSend.forEach((element, i) => {
//                 if (element.name === subType) {
//                     dataToSend2 = [dataToSend[i]];
//                 }
//             });
//             resolve(dataToSend2)
//         } else {
//             resolve(dataToSend)
//         }
//     })
// }

// get report list
let getReportList = async () => {
    try {
        let reportList = list["Reports"];
        return reportList;
    } catch (error) {
        throw error;
    }
}


module.exports = {
    getSideNav: getSideNav,
    getViewData: getViewData,
    getFilters: getFilters,
    getReportList: getReportList
    // getGeneralDataList: getGeneralDataList,
}