module.exports = info;

const version = '1.0.1';


function info(arg) {

    if (arg == 'version') {
        return `version : ${version}`;
    } else {
        return 'invalid args';
    }
}