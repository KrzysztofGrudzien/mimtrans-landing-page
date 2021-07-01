import '../scss/main.scss';

const navigationList = document.querySelector('.nav__links');
navigationList.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        const cords = document.querySelector(id).getBoundingClientRect();
        window.scrollTo({
            left: cords.left + window.pageXOffset,
            top: cords.top + window.pageYOffset,
            behavior: 'smooth',
        });
    }
});
