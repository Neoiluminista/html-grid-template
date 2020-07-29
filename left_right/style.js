let toggler = document.getElementById('toggle-left');
toggler.addEventListener('click', toggleLeft);

function toggleLeft() {
    let grid = document.getElementById('grid');    
    let arrow = document.getElementById('arrow');
    
    toggled = checkToggle(grid.className);
    
    if (toggled) { // Shrink
        grid.classList.add('left-untoggled'); 
        grid.classList.remove('left-toggled'); 
        arrow.classList.add('right-arrow'); 
        arrow.classList.remove('left-arrow');
    }
    else { // Grow
        grid.classList.add('left-toggled'); 
        grid.classList.remove('left-untoggled'); 
        arrow.classList.add('left-arrow'); 
        arrow.classList.remove('right-arrow');
    }
}

function checkToggle(postion) {
    if ((!postion.includes('left-untoggled')) || (postion.includes('left-toggled'))) return true;
    return false;
}