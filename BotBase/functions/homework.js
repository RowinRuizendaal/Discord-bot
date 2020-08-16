module.exports = homework;

function homework() {
    var fs = require('fs');
    var contents = fs.readFileSync('././homework.txt', 'utf8'); //Read file data.txt in utf8 format (unicode)

    if (contents.trim() == "") { //If file is empty make sure we dont have any homework 
        return 'There is no homework todo, be sure you add homework with !addhomework (arguments)' //Return message
    } else {
        console.log(contents);
        return '\n' + contents + '\n';
    }
}