const axios = require('axios');
const host = require('../global/host');
const token = require('../global/token');

async function postBan(userId, userTag, databaseName, banReason, banProof, staff, extras, httpRoute) {
    if (typeof token.get() == 'undefined') return console.log('[Cryptic Core] Firewall: requires a token to post a ban, use token.set("YOUR_API_TOKEN") before utilisiing postBan.');
    if (typeof host.get() == 'undefined') return console.log('[Cryptic Core] Firewall: no API Host was provided. firewall requires a Host Url to post a ban, use host.set("YOUR_API_HOST") before utilisiing postBan.');
    if (typeof httpRoute == 'undefined') return console.log('[Cryptic Core] Firewall: no API Route was provided');
    const fetch = await axios({
        method: 'POST',
        url: `${host.get()}/${httpRoute}`,
        headers: {
            Accept: 'application/json, text/plain, */*',
            'User-Agent': '*',
            'authorization': token.get()
        },
        data: {
            "userId": userId,
            "userTag": userTag,
            "databaseName": databaseName,
            "banReason": banReason,
            "banProof": banProof,
            "staff": staff,
            "extras": extras, 
        }
    });
    return fetch.data;
}

async function searchBans(userId, httpRoute) {
    if (typeof token.get() == 'undefined') return console.log('[Cryptic Core] Firewall: requires a token to post a ban, use .setToken("YOUR_API_TOKEN") before utilisiing postBan.');
    if (typeof host.get() == 'undefined') return console.log('[Cryptic Core] Firewall: no API Host was provided. firewall requires a Host Url to post a ban, use .setHost("YOUR_API_HOST") before utilisiing postBan.');
    if (typeof httpRoute == 'undefined') return console.log('[Cryptic Core] Firewall: no API Route was provided');
    if (typeof userId == 'undefined') console.log('No userId was provided in node request.');
    let listFetch = await axios({
        method: 'get',
        url: `${host.get()}/${httpRoute}/${userId}`
    });
    return listFetch.data;
}

async function getGlobalBans(httpRoute) {
    if (typeof token.get() == 'undefined') return console.log('[Cryptic Core] Firewall: requires a token to post a ban, use .setToken("YOUR_API_TOKEN") before utilisiing getGlobalBans.');
    // if (typeof providedToken == 'undefined') return 
    if (typeof host.get() == 'undefined') return console.log('[Cryptic Core] Firewall: no API Host was provided. firewall requires a Host Url to post a ban, use .setHost("YOUR_API_HOST") before utilisiing getGlobalBans.');
    if (typeof httpRoute == 'undefined') return console.log('[Cryptic Core] Firewall: no API Route was provided');

    let listFetch = await axios({
        method: 'get',
        url: `${host.get()}/${httpRoute}/global`,
    });
    return listFetch.data;
}

async function deleteBan(banId, reason, databaseName, staff, extras, httpRoute) {
    if (typeof token.get() == 'undefined') return console.log('[Cryptic Core] Firewall: requires a token to post a ban, use .setToken("YOUR_API_TOKEN") before utilisiing getGlobalBans.');
    if (typeof host.get() == 'undefined') return console.log('[Cryptic Core] Firewall: no API Host was provided. firewall requires a Host Url to post a ban, use .setHost("YOUR_API_HOST") before utilisiing getGlobalBans.');
    if (typeof httpRoute == 'undefined') return console.log('[Cryptic Core] Firewall: no API Route was provided');

    const fetch = await axios({
        method: 'POST',
        url: `${host.get()}/${httpRoute}`,
        headers: {
            Accept: 'application/json, text/plain, */*',
            'User-Agent': '*',
            'authorization': token.get()
        },
        data: {
            "banId": banId,
            "databaseName": databaseName,
            "reason": reason,
            "staff": staff,
            "extras": extras, 
        }
    });
    return fetch.data;
}

module.exports = {
    create: postBan,
    delete: deleteBan,
    search: searchBans,
    global: getGlobalBans,
}