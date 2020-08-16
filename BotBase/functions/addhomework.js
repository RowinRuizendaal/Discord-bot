module.exports = addhomework;

function addhomework(argument) {

    if (!argument[1]) {
        return 'Not a valid homework rule';
    } else {

        argument.shift(); // Remove first array item -> homework
        argument = argument.join(' '); //Remove , between te arrays

        const fs = require('fs');
        // add a line to a lyric file, using appendFile
        fs.appendFile('homework.txt', argument + '\n', (err) => {
            if (err) throw err;
        });
        return 'Homework has been added to the log';
    }

}