let providedToken = undefined;

function setToken(token) {
    if(typeof token == 'undefined') return console.log('Please provide your API token in the setToken request function.');
    providedToken = token;
};

function getToken() {
    if(typeof token == 'undefined') return console.log('No Token Set! Please provide your API token in the setToken request function.');
    return providedToken;
}

module.exports = {
    set: setToken,
    get: getToken,
}