module.exports = rolldice;

function rolldice(eyes) {
    if (!eyes) {
        return `Rolled a: **${Math.floor(Math.random() * 6 + 1)}** on a scale of: **${6}**`;
    } else {
        return `Rolled a: **${Math.floor(Math.random() * eyes + 1)}** on a scale of: **${eyes}**`;
    }
}