// Toggle class active hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika klik hamburger
document.querySelector('#hamburger-menu').onclick = () => {
navbarNav.classList.toggle('active');
};

// Toggle class active search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = () => {
    searchForm.classList.toggle('active');
};

// Klik di luar sidebar menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && ! navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

let result = document.querySelector('text');

if (input[type='text'] >= 400 && input[type='text'] <= 440) {
    console.log('Kalori yang Anda konsumsi sudah mencukupi');
}

else if ('text' < 400) {
    console.log('Kalori yang Anda konsumsi sudah mencukupi');
}

else if (input[type='text'] > 440) {
    console.log('Kalori yang Anda konsumsi lebih dari cukup');
}
