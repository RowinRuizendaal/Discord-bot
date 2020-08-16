module.exports = nukehomework;


function nukehomework() {
    let fs = require('fs');
    let contents = fs.readFileSync('homework.txt', 'utf8');
    fs.writeFile('homework.txt', '', function () {
        console.log('Homework has been nuked!')
    })
    return contents + ' have been deleted!';
}