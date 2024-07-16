const checkbox = document.getElementById('check');
const navMenu = document.querySelector('.nav__content ul');

checkbox.addEventListener('change', () => {
  navMenu.classList.toggle('active');
});