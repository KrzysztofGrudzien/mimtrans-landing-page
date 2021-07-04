import '../scss/main.scss';

const navigationList = document.querySelector('.nav__links--js');
const btnCloseModal = document.querySelector('.timetable__btn--js');
const btnOpenModal = document.querySelector('.btn--show-modal--js');
const timeTableContainer = document.querySelector('.timetable--js');

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

btnOpenModal.addEventListener('click', () => {
    timeTableContainer.classList.toggle('hidden');
});

btnCloseModal.addEventListener('click', () => {
    timeTableContainer.classList.add('hidden');
});
