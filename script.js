const btn = document.querySelector('.header-button');
const btnOffset = btn.offsetTop;

window.addEventListener('scroll', () => {
  if (window.scrollY > btnOffset) {
    btn.classList.add('fixed');
  } else {
    btn.classList.remove('fixed');
  }
});

const mobileButton = document.querySelector('.mobile-button');
const navLinks = document.querySelector('#nav-links');
const closeBtn = document.querySelector('.close-button');

mobileButton.addEventListener('click', () => {
  navLinks.classList.add('mobile-open');
  mobileButton.style.display = 'none';
  closeBtn.style.display = 'block';
  document.documentElement.classList.add('menu-open');
  document.body.classList.add('menu-open');
});

closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('mobile-open');
  closeBtn.style.display = 'none';
  mobileButton.style.display = 'block';
  document.documentElement.classList.remove('menu-open');
  document.body.classList.remove('menu-open');
});


document.querySelectorAll('.accordion-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
        const panel = toggle.nextElementSibling;
        toggle.classList.toggle('open');
        panel.classList.toggle('open');
    });
});