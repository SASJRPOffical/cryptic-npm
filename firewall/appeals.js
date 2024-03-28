const axios = require('axios');
let providedHost = undefined;

async function createAppeal(user, ban, staff, extras) {

}

module.exports = {
    create: createAppeal,
    delete: deleteAppeal,
    fetch: getAppeals,
    search: searchAppeals,
}