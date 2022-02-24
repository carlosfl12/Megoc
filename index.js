document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.nav-menu').classList.toggle('show');
  document.querySelector('header').querySelector('p').classList.toggle('show');
});
