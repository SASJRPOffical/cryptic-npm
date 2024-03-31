const token = require('./token');
let providedHost = undefined;

function setHost(host) {
    if(typeof token.get() == 'undefined') return console.log('Please provide your API token in the token.set() request fuction.');
    if(typeof host == 'undefined') return console.log('Please provide a host url in the function params argument.');
    providedHost = host;
    // if(typeof token == 'undefined') return console.log('Please provide your API token in the setToken request function.');
    // providedToken = token;
};

function getHost() {
    if(typeof token.get() == 'undefined') return console.log('Please provide your API token in the token.set() request fuction.');
    if(typeof providedHost == 'undefined') return console.log('No Host Set! Please provide your Host url in .set() request function.');
    return providedHost;
    // if(typeof host == 'undefined') return console.log('No Token Set! Please provide your API token in the setToken request function.');
    // return providedToken;
}



module.exports = {
    set: setHost,
    get: getHost,
}