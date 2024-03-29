let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('header nav'); // Corrigido para selecionar corretamente a tag 'nav' dentro do 'header'.
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id'); // Corrigido para 'getAttribute' em vez de 'getAtribute'.

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      document.querySelector(`header nav a[href="#${id}"]`).classList.add('active'); // Corrigido para usar template string e interpolação para selecionar o link correto.
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};
