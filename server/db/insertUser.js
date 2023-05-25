const userModel = require('../models/users.model');
const pLimit = require('p-limit');

const insertUserFunction = async () => {
  // console.log('here------------------', excelFile);
  try {
      // console.log('excelData', excelData.member_upload_test);
      let newArray = userData
      newArray.splice(0, 1)
      const limit = pLimit(1);
      return Promise.all(
          newArray.map(uData => limit(() => insertData(uData)))
      )
  } catch (error) {
      console.log('err--------2', error);
      throw new Error("Excel formating is wrong...")
  }
}

let insertData = async (data) => {
  try {
    await userModel.create(data)
    console.log('Data insertion completed.');
  } catch (error) {
    console.error('Error inserting data:', error);
  } 
}

insertUserFunction();

