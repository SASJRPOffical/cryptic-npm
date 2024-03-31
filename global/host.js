const token = require('./token');
let providedHost = undefined;

function setHost(host) {
    // if(typeof token.get() == 'undefined') return console.log('Please provide your API token in the token.set() request fuction.');
    if(typeof host == 'undefined') return console.log('Please provide a host url in the function params argument.');
    providedHost = host;
};

function getHost() {
    if(typeof providedHost == 'undefined') return console.log('No Host Set! Please provide your Host url in .set() request function.');
    return providedHost;
}

module.exports = {
    set: setHost,
    get: getHost,
}