const _open_burger = document.querySelector('.nav__burger--open');
const _closed_burger = document.querySelector('.nav__burger--closed');
const _navigation = document.querySelector('.nav__list');

_open_burger.addEventListener('click', () => {
  _open_burger.classList.add('is-hidden');
  _closed_burger.classList.remove('is-hidden');
  _navigation.classList.add('is-open');
  document.body.style.overflow = 'hidden';
});

_closed_burger.addEventListener('click', () => {
  _closed_burger.classList.add('is-hidden');
  _open_burger.classList.remove('is-hidden');
  _navigation.classList.remove('is-open');
  document.body.style.overflow = '';
});
