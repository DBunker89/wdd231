//hamburgur menu
const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click',() =>{
    navElement.classList.toggle('open');
});

//year
const year = document.querySelector('#year');
const today = new Date();

year.innerHTML = `<span class='highlight'>${today.getFullYear()}</span>&copy; Dylan Bunker;`;