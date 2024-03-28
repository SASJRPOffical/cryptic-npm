const axios = require('axios');
let providedToken = undefined;
let providedHost = undefined;

function setToken(token) {
    if(typeof token == 'undefined') return console.log('Please provide your API token in the setToken request function.');
    this.providedToken = token;
};

function setHost(host) {
    if (typeof host == 'undefined') return console.log('Please provide the host url for you web api.');
    this.providedHost = host;
}

async function postBan(userId, userTag, databaseName, banReason, banProof, staff, extras, httpRoute) {
    if (typeof providedToken == 'undefined') return console.log('[Cryptic Core] Firewall: requires a token to post a ban, use .setToken("YOUR_API_TOKEN") before utilisiing postBan.');
    if (typeof providedHost == 'undefined') return console.log('[Cryptic Core] Firewall: no API Host was provided. firewall requires a Host Url to post a ban, use .setHost("YOUR_API_HOST") before utilisiing postBan.');
    if (typeof httpRoute == 'undefined') return console.log('[Cryptic Core] Firewall: no API Route was provided');
    const fetch = await axios({
        method: 'POST',
        url: `${providedHost}/${httpRoute}`,
        headers: {
            Accept: 'application/json, text/plain, */*',
            'User-Agent': '*',
            'authorization': providedToken
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
    if (typeof providedToken == 'undefined') return console.log('[Cryptic Core] Firewall: requires a token to post a ban, use .setToken("YOUR_API_TOKEN") before utilisiing postBan.');
    if (typeof providedHost == 'undefined') return console.log('[Cryptic Core] Firewall: no API Host was provided. firewall requires a Host Url to post a ban, use .setHost("YOUR_API_HOST") before utilisiing postBan.');
    if (typeof httpRoute == 'undefined') return console.log('[Cryptic Core] Firewall: no API Route was provided');
    if (typeof userId == 'undefined') console.log('No userId was provided in node request.');
    let listFetch = await axios({
        method: 'get',
        url: `${providedHost}/${httpRoute}/${userId}`
    });
    return listFetch.data;
}

async function getGlobalBans(httpRoute) {
    if (typeof providedToken == 'undefined') return console.log('[Cryptic Core] Firewall: requires a token to post a ban, use .setToken("YOUR_API_TOKEN") before utilisiing getGlobalBans.');
    if (typeof providedHost == 'undefined') return console.log('[Cryptic Core] Firewall: no API Host was provided. firewall requires a Host Url to post a ban, use .setHost("YOUR_API_HOST") before utilisiing getGlobalBans.');
    if (typeof httpRoute == 'undefined') return console.log('[Cryptic Core] Firewall: no API Route was provided');

    let listFetch = await axios({
        method: 'get',
        url: `${providedHost}/${httpRoute}/global`,
    });
    return listFetch.data;
}

async function deleteBan(banId, reason, databaseName, staff, extras, httpRoute) {
    if (typeof providedToken == 'undefined') return console.log('[Cryptic Core] Firewall: requires a token to post a ban, use .setToken("YOUR_API_TOKEN") before utilisiing getGlobalBans.');
    if (typeof providedHost == 'undefined') return console.log('[Cryptic Core] Firewall: no API Host was provided. firewall requires a Host Url to post a ban, use .setHost("YOUR_API_HOST") before utilisiing getGlobalBans.');
    if (typeof httpRoute == 'undefined') return console.log('[Cryptic Core] Firewall: no API Route was provided');

    const fetch = await axios({
        method: 'POST',
        url: `${providedHost}/${httpRoute}`,
        headers: {
            Accept: 'application/json, text/plain, */*',
            'User-Agent': '*',
            'authorization': providedToken
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
    setToken: setToken,
    setHost: setHost,
    postBan: postBan,
    deleteBan: deleteBan,
    getGlobalBans: getGlobalBans,
    searchBans: searchBans,
}