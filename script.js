const btn = document.getElementById('nav__btn');
const btnIcon = document.getElementById('btn-icon');
const nav = document.querySelector('.nav__list');
let isFirstImage = true;

const handleClick = () => {
    nav.classList.toggle('show');

    if (isFirstImage) {
        btnIcon.src = './assets/x.svg';
    } else {
        btnIcon.src = './assets/menu.svg';
    }
    isFirstImage = !isFirstImage;
};

btn.addEventListener('click', handleClick);
