module.exports = date;


function date(person1, person2) {
    if (!person1 || !person2) {
        return 'To calculate date you need 2 people';
    } else {
        return `${person1} and ${person2} have an ${Math.floor(Math.random() * 100 + 1)}% on a succesful date!`;
    }
}