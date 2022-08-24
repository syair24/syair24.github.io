const menutoggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.navigasi');

menutoggle.addEventListener('click', function() {
  nav.classList.toggle('slide')
});