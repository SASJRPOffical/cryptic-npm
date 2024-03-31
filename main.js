const firewall = require('./firewall/index.js');
const host = require('./global/host.js');
const token = require('./global/token.js');
const staff = require('./global/staff.js');

module.exports = {
    firewall: firewall,
    host: host,
    token: token,
    staff: staff,
};