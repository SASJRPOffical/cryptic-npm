const axios = require('axios');
let staff = [];
let isStaff = false;

async function getStaff(dataType, giturl) {
    if (typeof dataType == 'undefined') {
        return console.log('no Data Storage Type Provided! please provide a storage type.');
    } else if (typeof dataType == 'git') {
        let staffRequest = await axios({
            method: 'get',
            url: giturl,
            // url: 'https://raw.githubusercontent.com/SASJRPOffical/multiban/main/staff.json'
        })
        staff = staffRequest?.data;
    } else if (typeof dataType == 'sql') {
        return;
    } else if (typeof dataType == 'mongo') {
        return;
    }
}

async function checkStaff(userid) {
    staff?.forEach(user => {
        if (typeof user?.userId == userid) {
            isStaff = true;
            return true;
        } else if (typeof user?.userId !== userid) {
            isStaff = false;
            return false;
        }
    });
}

module.exports = {
    get: getStaff,
    check: checkStaff,
    isStaff: isStaff,
}