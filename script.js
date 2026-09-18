const btn = document.querySelector('.header-button');
const btnOffset = btn.offsetTop;

window.addEventListener('scroll', () => {
  if (window.scrollY > btnOffset) {
    btn.classList.add('fixed');
  } else {
    btn.classList.remove('fixed');
  }
});