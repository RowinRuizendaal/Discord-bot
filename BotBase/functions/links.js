module.exports = links;

function links() {
    let whitelist = [
        'https://www.freecodecamp.org/',
        'https://courseselector.mijnhva.nl',
        'https://github.com/cmda-bt/js-bootcamp-19-20',
        'https://cmdlo.mijnhva.nl',
        'https://github.com/Vuurvos1/DiscordScheduleBot',
        'https://email.hva.nl',
        'https://sis.hva.nl'


    ];

    whitelist = whitelist.join(' ');

    return '```' + whitelist + '\n' + '```'; //Code in block editor
}