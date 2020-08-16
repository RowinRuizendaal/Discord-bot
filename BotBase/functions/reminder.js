const homework = require('./homework.js');
const rolldice = require('./dice.js');
const upcomingEvent = require('./upcomingevent.js');
module.exports = reminder;

function reminder(args) {

    if (!args[1] || !args[2]) return '```Usage: -reminder function id => minutes \n 0 => homework \n 1 => rolldice \n 2 => upcomingevent```'

    let functies = []
    functies[0] = homework();
    functies[1] = rolldice(6);
    functies[2] = upcomingEvent();

    let naamgeving = []
    naamgeving[0] = 'Homework';
    naamgeving[1] = 'Roll the dice';
    naamgeving[2] = 'upcoming event';

    if (args[2] < 1 || args[1] >= naamgeving.length) {
        return `${message.member.user.tag} tried to abuse the reminder feature, you have been warned! Minutes cannot be under 10`
    } else {

        let miliseconds = args[2] * 60000;

        console.log(`${naamgeving[args[1]]} reminder has been triggered!`);
        // let x = setInterval(() => functies[args[1]]), miliseconds;

        return setInterval(() => functies[args[1]]), miliseconds;
        // return (`enabled the reminder feature ${naamgeving[args[1]]} for ${args[2]} minutes`);
    }

}