let toggler = document.getElementById('toggle-left');
toggler.addEventListener('click', toggleLeft);

function toggleLeft() {
    let mid = document.getElementById('mid');    
    let arrow = document.getElementById('arrow');
    
    toggled = checkToggle(mid.className);
    
    if (toggled) { // Shrink
        mid.classList.add('left-untoggled'); 
        mid.classList.remove('left-toggled'); 
        arrow.classList.add('right-arrow'); 
        arrow.classList.remove('left-arrow');
    }
    else { // Grow
        mid.classList.add('left-toggled'); 
        mid.classList.remove('left-untoggled'); 
        arrow.classList.add('left-arrow'); 
        arrow.classList.remove('right-arrow');
    }
}

function checkToggle(postion) {
    if ((!postion.includes('left-untoggled')) || (postion.includes('left-toggled'))) return true;
    return false;
}