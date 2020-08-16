module.exports = getJson


function getJson(jsonLink) {
    const fs = require('fs');
    const util = require('util');
    const rawdata = fs.readFileSync(jsonLink);
    const textDecoder = new util.TextDecoder('utf-8');
    const stringData = textDecoder.decode(rawdata);
    const objects = JSON.parse(stringData);
    return objects;
}