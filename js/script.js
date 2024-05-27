const hamburger = document.querySelector('.hamburger');
const mobile = document.querySelector('.mobile');

const linkContainers = document.querySelectorAll('.link-container h4');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile.classList.toggle('active');
});

linkContainers.forEach((linkContainer) => {
  linkContainer.addEventListener('click', (event) => {
    linkContainer.classList.toggle('show');
  });
});
