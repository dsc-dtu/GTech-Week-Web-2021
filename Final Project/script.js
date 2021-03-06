// select the navbar using its id attribute
const myNav = document.getElementById('myNav');

// on every scroll 
document.addEventListener('scroll', () => {
    // if the window has been scrolled on the Y axis for more than 60 units
    if(window.scrollY > 60) {
        myNav.style.backgroundColor = '#212121'; // change color to black
    } else {
        myNav.style.backgroundColor = 'transparent';
    }
})