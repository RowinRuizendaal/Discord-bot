module.exports = gambleSlots.js;

function gambleSlots() {
    const fruits = ['🍐', '🍇', '🍓', '🍋', '🍊', '🍎', '🍉', '🍒'];

    let slots = []
    for (let i = 0; i < 3; i++) {
        slots[i] = fruits[Math.floor(Math.random() * fruits.length)];
    }
      
    if (slots[0] == slots[1] && slots[1] == slots[2]) {
        return `You rolled the slots **[${slots[0]} ${slots[1]} ${slots[2]}]** and won! 🎉`
    } else if (slots[0] == slots[1] || slots[0] == slots[2] || slots[1] == slots[2]) {
        return `You rolled the slots **[${slots[0]} ${slots[1]} ${slots[2]}]** and almost won (2/3)`
    } else {
        return `You rolled the slots **[${slots[0]} ${slots[1]} ${slots[2]}]** and lost...`
    } 
}
