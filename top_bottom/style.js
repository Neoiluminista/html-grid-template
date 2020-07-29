let toggler = document.getElementById('toggle-left');
toggler.addEventListener('click', toggleLeft);

function toggleLeft() {
    let bot = document.getElementById('bot');    
    let arrow = document.getElementById('arrow');
    
    toggled = checkToggle(bot.className);

    if (toggled) { // Shrink
        bot.classList.add('left-untoggled'); 
        bot.classList.remove('left-toggled'); 
        arrow.classList.add('right-arrow'); 
        arrow.classList.remove('left-arrow');
    }
    else { // Grow
        bot.classList.add('left-toggled'); 
        bot.classList.remove('left-untoggled'); 
        arrow.classList.add('left-arrow'); 
        arrow.classList.remove('right-arrow');
    }
}

function checkToggle(postion) {
    if ((postion == '') || (postion == 'left-toggled')) return true;
    return false;
}